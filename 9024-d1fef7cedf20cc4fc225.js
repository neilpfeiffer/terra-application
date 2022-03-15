"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[9024],{33389:(e,t,n)=>{var a=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),i=a(n(45697)),o=a(n(71171)),u=a(n(40017)),l={bannerAction:i.default.shape({text:i.default.string,onClick:i.default.func}),description:i.default.node,onRequestClose:i.default.func,variant:i.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","unsatisfied","unverified","custom"]).isRequired,custom:i.default.shape({signalWord:i.default.string,iconClassName:i.default.string})},d=function(e){var t=e.bannerAction,n=e.custom,a=e.description,i=e.onRequestClose,l=e.variant,d=r.default.useContext(u.default),c=r.default.useRef((0,o.default)());return r.default.useEffect((function(){if(!d)throw new Error("A NotificationBanner was not rendered within the context of a NotificationBannerProvider. If this is unexpected, validate that the expected version of the terra-application package is installed.");d.registerNotificationBanner(c.current,{bannerAction:t,custom:n,description:a,key:c.current,onRequestClose:i,variant:l})}),[d,a,n,t,i,l]),r.default.useEffect((function(){return function(){d.unregisterNotificationBanner(c.current,l)}}),[d,l]),null};d.propTypes=l;var c=d;t.default=c},66280:(e,t,n)=>{var a=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(33389))},69024:(e,t,n)=>{var a=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),i=a(n(45697)),o=a(n(55692)),u=a(n(96853)),l=function(e){var t=e.isInitiallyClosed,n=(0,o.default)(),a=n.NotificationBannerProvider,i=n.NotificationBanners;return r.default.createElement(a,null,r.default.createElement(i,null),r.default.createElement(u.default,{isInitiallyClosed:t}))};l.propTypes={isInitiallyClosed:i.default.bool},l.defaultProps={isInitiallyClosed:!1};var d=l;t.default=d},96853:(e,t,n)=>{var a=n(95318),r=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(63038)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),u=a(n(47166)),l=a(n(45697)),d=a(n(66280)),c=a(n(61213));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var s=u.default.bind(c.default),p=function(e){var t=e.isInitiallyClosed,n=e.id,a=(0,o.useState)(!t),r=(0,i.default)(a,2),u=r[0],l=r[1],c=(0,o.useState)(!t),f=(0,i.default)(c,2),p=f[0],h=f[1],b=(0,o.useState)(!t),m=(0,i.default)(b,2),v=m[0],g=m[1],y=(0,o.useState)(!t),C=(0,i.default)(y,2),w=C[0],E=C[1],_=(0,o.useState)(!t),k=(0,i.default)(_,2),P=k[0],S=k[1],z=(0,o.useState)(!t),O=(0,i.default)(z,2),B=O[0],j=O[1],H=(0,o.useState)(!t),M=(0,i.default)(H,2),I=M[0],x=M[1];return o.default.createElement(o.default.Fragment,null,u&&o.default.createElement(d.default,{variant:"hazard-high",id:"hazard-high-banner-".concat(n)}),p&&o.default.createElement(d.default,{variant:"hazard-medium",id:"hazard-medium-banner-".concat(n),onRequestClose:function(){return h(!1)}}),v&&o.default.createElement(d.default,{variant:"hazard-low",id:"hazard-low-banner-".concat(n)}),w&&o.default.createElement(d.default,{variant:"error",id:"error-banner-".concat(n),description:"Something happened..."}),P&&o.default.createElement(d.default,{variant:"unsatisfied",id:"unsatisfied-banner-".concat(n)}),B&&o.default.createElement(d.default,{variant:"unverified",id:"unverified-banner-".concat(n),description:o.default.createElement("div",null,"There are records that have been included that need to be verified before they are officially added. Please review and ensure they should be included."),bannerAction:{text:"Verify Records",onClick:function(){alert("records verified."),j(!1)}}}),I&&o.default.createElement(d.default,{variant:"custom",id:"custom-banner-".concat(n),custom:{signalWord:"Check this out!",customIconClass:s("custom-notification-banner-icon")},description:"This is a custom banner."}),o.default.createElement("p",null,"Show Banner Options: "),o.default.createElement("button",{onClick:function(){return l(!u)},type:"button",id:"toggle-hazard-high-banner-".concat(n)},"Show/Hide Hazard-High Banner"),o.default.createElement("button",{onClick:function(){return h(!p)},type:"button",id:"toggle-hazard-medium-banner-".concat(n)},"Show/Hide Hazard-Medium Banner"),o.default.createElement("button",{onClick:function(){return g(!v)},type:"button",id:"toggle-hazard-low-banner-".concat(n)},"Show/Hide Hazard-Low Banner"),o.default.createElement("button",{onClick:function(){return E(!w)},type:"button",id:"toggle-error-banner-".concat(n)},"Show/Hide Error Banner"),o.default.createElement("button",{onClick:function(){return S(!P)},type:"button",id:"toggle-unsatisfied-banner-".concat(n)},"Show/Hide Unsatisfied Banner"),o.default.createElement("button",{onClick:function(){return j(!B)},type:"button",id:"toggle-unverified-banner-".concat(n)},"Show/Hide Unverified Banner"),o.default.createElement("button",{onClick:function(){return x(!I)},type:"button",id:"toggle-custom-banner-".concat(n)},"Show/Hide Custom Banner"))};p.propTypes={id:l.default.string,isInitiallyClosed:l.default.bool},p.defaultProps={id:"1",isInitiallyClosed:!1};var h=p;t.default=h},61213:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a={"custom-notification-banner-icon":"CustomVariant-module__custom-notification-banner-icon___jPxUK","clinical-lowlight-theme":"CustomVariant-module__clinical-lowlight-theme___84ZM-"}}}]);