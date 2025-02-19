import React from 'react';
import { ActiveBreakpointContext } from 'terra-breakpoints';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import { IntlProvider } from 'react-intl';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl, mockIntl } from 'terra-enzyme-intl';
import { ApplicationIntlContext } from '../../../../src/application-intl';
import ApplicationNavigation from '../../../../src/application-navigation/private/ApplicationNavigation';

/* eslint-disable react/prop-types */
const MockApplication = ({ children }) => (
  // eslint-disable-next-line compat/compat
  <IntlProvider
    locale="en"
    messages={new Proxy({}, {
      get: (_, property) => property,
      getOwnPropertyDescriptor: () => ({ configurable: true, enumerable: true }), // important for new checks in react-intl v5
    })}
  >
    <ApplicationIntlContext.Provider value={mockIntl}>
      {children}
    </ApplicationIntlContext.Provider>
  </IntlProvider>
);

describe('ApplicationNavigation', () => {
  let reactUseContext;
  let breakpointContextValue;

  beforeAll(() => {
    /**
     * Until Enzyme is updated with full support for hooks, we need to
     * mock out the useContext implementation.
     */
    reactUseContext = React.useContext;
    React.useContext = (contextValue) => {
      if (ActiveBreakpointContext === contextValue) {
        return breakpointContextValue;
      }
      return reactUseContext(contextValue);
    };
  });

  afterAll(() => {
    React.useContext = reactUseContext;
  });

  it('should render default element', () => {
    const shallowComponent = shallow(
      <ApplicationNavigation />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with prop data at large breakpoint', () => {
    breakpointContextValue = 'large';

    const shallowComponent = shallow(
      <ApplicationNavigation
        activeBreakpoint="large"
        titleConfig={{
          title: 'test-title',
        }}
        activeNavigationItemKey="my-test-key"
        hero={<div>my test hero</div>}
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        navigationItems={[{ text: 'test-text', key: 'my-test-key' }]}
        extensionItems={[{ text: 'test-text-1', key: 'my-test-key-1', icon: <span>my icon</span> }]}
        utilityItems={[{ text: 'test-text-2', key: 'my-test-key-2', icon: <span>my icon</span> }]}
        notifications={{ 'my-test-key-1': 3 }}
        navigationRenderFunction={jest.fn()}
        onSelectNavigationItem={jest.fn()}
        onSelectExtensionItem={jest.fn()}
        onSelectUtilityItem={jest.fn()}
        onSelectSettings={jest.fn()}
        onSelectHelp={jest.fn()}
        onSelectLogout={jest.fn()}
      >
        <div>test child content</div>
      </ApplicationNavigation>,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with prop data at medium breakpoint', () => {
    breakpointContextValue = 'medium';

    const shallowComponent = shallow((
      <ApplicationNavigation
        titleConfig={{
          title: 'test-title',
        }}
        activeNavigationItemKey="my-test-key"
        hero={<div>my test hero</div>}
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        navigationItems={[{ text: 'test-text', key: 'my-test-key' }]}
        extensionItems={[{ text: 'test-text-1', key: 'my-test-key-1', icon: <span>my icon</span> }]}
        utilityItems={[{ text: 'test-text-2', key: 'my-test-key-2', icon: <span>my icon</span> }]}
        notifications={{ 'my-test-key-1': 3 }}
        navigationRenderFunction={jest.fn()}
        onSelectNavigationItem={jest.fn()}
        onSelectExtensionItem={jest.fn()}
        onSelectUtilityItem={jest.fn()}
        onSelectSettings={jest.fn()}
        onSelectHelp={jest.fn()}
        onSelectLogout={jest.fn()}
      >
        <div>test child content</div>
      </ApplicationNavigation>
    ));

    expect(shallowComponent).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    const appNav = mountWithIntl(
      <MockApplication>
        <ThemeContextProvider theme={{ className: 'clinical-lowlight-theme' }}>
          <ApplicationNavigation />
        </ThemeContextProvider>
      </MockApplication>,
    );
    expect(appNav).toMatchSnapshot();
  });
});
