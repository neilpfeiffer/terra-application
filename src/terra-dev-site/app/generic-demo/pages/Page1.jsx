import React from 'react';

import IconTag from 'terra-icon/lib/icon/IconTag';

import ApplicationPage from '../../../../application-page/ApplicationPage';

import ApplicationLoadingOverlay from '../../../../application-loading-overlay';
import NavigationContext from '../../../../navigation/NavigationContext';
import InertContext from '../../../../layers/InertContext';
import SuspensePage from '../../../../application-page/SuspensePage';

import PagePresentingModal from '../modals/PagePresentingModal';
import Page1Content from './content/_Page1Content';
import useDeferredInitializer from '../shared/useDeferredInitializer';

// import Page2 from './Page2';

const Page2 = React.lazy(() => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(import('./Page2'));
  }, 1000);
}));

// const Page2 = React.lazy(() => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('wut'));
//   }, 1000);
// }));

const Page1 = ({ onRequestClose }) => {
  const isInitialized = useDeferredInitializer();

  const navigationContext = React.useContext(NavigationContext);
  const inertContext = React.useContext(InertContext);

  const [showPage2, setShowPage2] = React.useState(false);
  const [showPageModal, setShowPageModal] = React.useState(false);
  const [pageIsVisible, setPageIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (pageIsVisible && navigationContext.isActive) {
      console.log('Page 1 is visible');
    } else {
      console.log('Page 1 is not visible');
    }
  }, [pageIsVisible, navigationContext.isActive]);

  React.useEffect(() => {
    if (inertContext) {
      console.log('Page 1 is inert');
    } else {
      console.log('Page 1 is not inert');
    }
  }, [inertContext]);

  const pageActions = [{
    key: 'action-tag',
    text: 'Page Modal',
    icon: <IconTag />,
    onSelect: () => { setShowPageModal(true); },
    isDisabled: !isInitialized,
  }];

  return (
    <ApplicationPage
      title="Page 1"
      actions={pageActions}
      onRequestClose={onRequestClose}
      onVisibilityChange={(isVisible) => {
        setPageIsVisible(isVisible);
      }}
    >
      <Page1Content onDisclosePage2={() => { setShowPage2(true); }} />
      {!isInitialized && <ApplicationLoadingOverlay isOpen backgroundStyle="light" />}
      {showPage2 && (
      <SuspensePage onRequestClose={() => { setShowPage2(false); }}>
        <Page2 onRequestClose={() => { setShowPage2(false); }} />
      </SuspensePage>
      )}
      {showPageModal && <PagePresentingModal onRequestClose={() => { setShowPageModal(false); }} />}
    </ApplicationPage>
  );
};

export default Page1;
