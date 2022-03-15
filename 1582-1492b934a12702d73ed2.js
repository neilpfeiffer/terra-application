"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[1582],{40996:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(67294)),a=c(n(45697)),r=c(n(47166)),o=c(n(50026)),u=c(n(66983)),i=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _=r.default.bind(u.default),f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:a.default.string},h=function(e){var t=e.children,n=s(e,i),a=l.default.useContext(o.default),u=(0,r.default)(_(["button",a.className]),n.className);return l.default.createElement("button",d({},n,{type:"button",className:u,onBlur:f,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};h.propTypes=p;var v=h;t.default=v},59278:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(67294)),a=i(n(45697)),r=i(n(47166)),o=i(n(50026)),u=i(n(30866));function i(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(u.default),d={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,r=l.default.useContext(o.default);return l.default.createElement("div",{className:c("notice",n,r.className)},l.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),l.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},l.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),l.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),l.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",l.default.createElement("ul",{className:c("list")},l.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),l.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),l.default.createElement("li",null,l.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),l.default.Children.map(a,(function(e){return"string"==typeof e?l.default.createElement("p",null,e):e}))))};s.propTypes=d,s.defaultProps={ariaLevel:"2",variant:"important"};var _=s;t.default=_},47306:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(67294)),a=d(n(45697)),r=d(n(94184)),o=d(n(47166)),u=d(n(50026)),i=d(n(42620)),c=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=o.default.bind(i.default),m={title:a.default.string},p=function(e){var t=e.title,n=_(e,c),a=l.default.useContext(u.default),o=(0,r.default)(f(["placeholder",a.className]),n.className),i=f(["inner"]);return l.default.createElement("div",s({},n,{className:o}),l.default.createElement("div",{className:i},l.default.createElement("p",{className:f("title")},t)))};p.propTypes=m,p.defaultProps={title:""};var h=p;t.default=h},34261:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var l=o(n(59278)),a=o(n(47306)),r=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},31582:(e,t,n)=>{var l=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(29564)),o=n(34261),u=a.default.createElement(o.Placeholder,{title:"Test Hero"}),i={name:"Test Name",initials:"TN",detail:"Test Detail"},c=function(){return a.default.createElement(r.default,{hero:u,userConfig:i})};t.default=c},66983:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);