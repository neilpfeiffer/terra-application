"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[4191],{84191:(e,t,n)=>{var a=n(95318),r=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(63038)),o=a(n(67294)),c=a(n(45697)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(a,o,c):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(10557)),i=n(86072),f=a(n(72562));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var s=function(e){var t=e.title,n=o.default.useContext(u.ApplicationNavigationActionsContext);return o.default.createElement("div",{"data-nav-test-content":!0},o.default.createElement("p",null,t),o.default.createElement("p",null,"Layout Actions:"," ",n.actions&&n.actions.map((function(e,t){return o.default.createElement("button",{id:"test-action-id-".concat(t),key:e.key,type:"button",onClick:e.onSelect,"aria-label":e.label},e.icon)}))))};s.propTypes={title:c.default.string};var d=function(){return o.default.createElement(i.WorkspaceContent,null,o.default.createElement("p",{id:"test-workspace-0"},"Example Workspace Content 1"))},m=function(){return o.default.createElement(i.WorkspaceContent,null,o.default.createElement("p",{id:"test-workspace-1"},"Example Workspace Content 2"))},k=o.default.createElement(u.default.Workspace,{id:"application-workspace-example",initialActiveItemKey:"tab-1",initialSize:{scale:.5},initialIsOpen:!0,onActiveItemChange:function(e){console.log("Workspace active item: ".concat(e))},onSizeChange:function(e){console.log("Workspace size changed: ".concat(e))},onPresentationStateChange:function(e){console.log("Workspace presentation changed. isOpen - ".concat(e))}},o.default.createElement(u.default.Workspace.Item,{itemKey:"tab-1",label:"Tab 1",metaData:{key:"tab-1"},render:function(){return o.default.createElement(d,null)}}),o.default.createElement(u.default.Workspace.Item,{itemKey:"tab-2",label:"Tab 2",metaData:{key:"tab-2"},render:function(){return o.default.createElement(m,null)}})),b=function(){var e=o.default.useRef(),t=o.default.useState(!1),n=(0,l.default)(t,2),a=n[0],r=n[1];return o.default.createElement(f.default,{id:"workspace-layout-test",workspace:k,skipToCallback:function(t){e.current=t,r(!!e.current)}},o.default.createElement(s,{title:"Main Content Region",action:a?function(){return e.current()}:null}))};t.default=b}}]);