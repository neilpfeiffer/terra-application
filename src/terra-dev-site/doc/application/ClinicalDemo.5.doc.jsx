import React, { useContext, useState, useRef } from 'react';

import ApplicationBase from 'terra-application/lib/application-base';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';
import ModalManager from 'terra-application/lib/modal-manager';
import { ThemeContext } from 'terra-application/lib/theme';
import ApplicationNavigation from 'terra-application/lib/application-navigation';

import PageLayoutContainer from '../../../application-page/PageLayoutContainer';
import ChartSummaryPage from './demo/page-layout/clinical-demo/pages/ChartSummaryPage';
import OrdersPage from './demo/page-layout/clinical-demo/pages/OrdersPage';

window.TEST_APP_TIMEOUT = 3000;

const userConfig = {
  name: 'Demo User',
  initials: 'DU',
};

const ClinicalDemoAppNavigation = () => {
  const [activeNavItem, setActiveNavItem] = useState('page_0');
  const [loggedOut, setLoggedOut] = useState(false);

  const navigationItemsRef = useRef([{
    key: 'page_0',
    text: 'Review',
  }, {
    key: 'page_1',
    text: 'Order',
  }]);

  if (loggedOut) {
    return (
      <div>
        <p>Logged Out</p>
        <button type="button" onClick={() => { setLoggedOut(false); }}>Reset</button>
      </div>
    );
  }

  let pageContent;
  switch (activeNavItem) {
    case 'page_0':
      pageContent = <ChartSummaryPage />;
      break;
    case 'page_1':
      pageContent = <OrdersPage />;
      break;
    default:
      pageContent = null;
      break;
  }

  return (
    <ApplicationNavigation
      titleConfig={{
        title: 'Powerchart Touch',
        subline: '(Not Really)',
      }}
      userConfig={userConfig}
      navigationItems={navigationItemsRef.current}
      activeNavigationItemKey={activeNavItem}
      onSelectNavigationItem={(key) => { setActiveNavItem(key); }}
      onSelectLogout={() => {
        setLoggedOut(true);
      }}
    >
      <PageLayoutContainer>
        {pageContent}
      </PageLayoutContainer>
    </ApplicationNavigation>
  );
};

const ClinicalDemoAppIndex = () => {
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);
  return (
    <ApplicationBase locale={applicationIntl.locale} themeName={theme.className}>
      <ModalManager>
        <ClinicalDemoAppNavigation />
      </ModalManager>
    </ApplicationBase>
  );
};

export default ClinicalDemoAppIndex;
