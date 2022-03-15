"use strict";(self.webpackChunkterra_application_mono=self.webpackChunkterra_application_mono||[]).push([[8280],{58280:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a=t(87462),i=t(44925),r=(t(67294),t(81254)),o=["components"],l={};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.mdx)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"breakpoints"},"Breakpoints"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"terra-application")," defines named sizes that correspond to ranges of viewport widths. It also provides a number of utilities\nthat can be used to detect and respond to breakpoint changes."),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import breakpoints, { activeBreakpointForSize, breakpointIsActiveForSize } from 'terra-application/lib/breakpoints';\n")),(0,r.mdx)("h3",{id:"breakpoints-1"},(0,r.mdx)("inlineCode",{parentName:"h3"},"breakpoints")),(0,r.mdx)("p",null,"An object containing a mapping of named breakpoint values to their minimum width value."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Breakpoint Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Minimum Value"),(0,r.mdx)("th",{parentName:"tr",align:null},"Corresponding Media Query"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"tiny")),(0,r.mdx)("td",{parentName:"tr",align:null},"0px"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 0px)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 0px and up")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"small")),(0,r.mdx)("td",{parentName:"tr",align:null},"544px"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 544px)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 544px and up")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"medium")),(0,r.mdx)("td",{parentName:"tr",align:null},"768px"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 768px)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 768px and up")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"large")),(0,r.mdx)("td",{parentName:"tr",align:null},"992px"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 992px)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 992px and up")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"huge")),(0,r.mdx)("td",{parentName:"tr",align:null},"1216px"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1216px)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 1216 and up")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"enormous")),(0,r.mdx)("td",{parentName:"tr",align:null},"1440px"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1440px)")),(0,r.mdx)("td",{parentName:"tr",align:null},"Active from viewport width 1440px and up")))),(0,r.mdx)("h3",{id:"activebreakpointforsizewidthvalue"},(0,r.mdx)("inlineCode",{parentName:"h3"},"activeBreakpointForSize(widthValue)")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"activeBreakpointForSize")," will return the closest active breakpoint that matches the given width value."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"console.log(activeBreakpointForSize(300));  // 'tiny'\nconsole.log(activeBreakpointForSize(544));  // 'small'\nconsole.log(activeBreakpointForSize(800));  // 'medium'\nconsole.log(activeBreakpointForSize(1000)); // 'large'\nconsole.log(activeBreakpointForSize(1300)); // 'huge'\nconsole.log(activeBreakpointForSize(1500)); // 'enormous'\n")),(0,r.mdx)("h3",{id:"breakpointisactiveforsizebreakpointname-widthvalue"},(0,r.mdx)("inlineCode",{parentName:"h3"},"breakpointIsActiveForSize(breakpointName, widthValue)")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"breakpointIsActiveForSize")," will return a boolean value indicating whether or not the given breakpoint name is active for the width value."),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Note that since the breakpoints are defined as minimum values, a breakpoint will be determined to be active\nif the width value is larger than the defined minimum, even if the width value is included in a higher breakpoint range.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"console.log(breakpointIsActiveForSize('tiny', 300));      // true\nconsole.log(breakpointIsActiveForSize('tiny', 544));      // true\nconsole.log(breakpointIsActiveForSize('tiny', 800));      // true\nconsole.log(breakpointIsActiveForSize('tiny', 1000));     // true\n\nconsole.log(breakpointIsActiveForSize('medium', 300));    // false\nconsole.log(breakpointIsActiveForSize('medium', 544));    // false\nconsole.log(breakpointIsActiveForSize('medium', 800));    // true\nconsole.log(breakpointIsActiveForSize('medium', 1500));   // true\n\nconsole.log(breakpointIsActiveForSize('enormous', 300));  // false\nconsole.log(breakpointIsActiveForSize('enormous', 544));  // false\nconsole.log(breakpointIsActiveForSize('enormous', 800));  // false\nconsole.log(breakpointIsActiveForSize('enormous', 1500)); // true\n")),(0,r.mdx)("h3",{id:"media-queries"},"Media Queries"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"terra-application")," also provides a set of Sass mix-ins that define media queries for the supported breakpoints."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '~terra-application/lib/breakpoints/media-queries';\n\n.example {\n  color: blue;\n\n  @include terra-mq-small-up {\n    color: red;\n  }\n\n  @include terra-mq-medium-up {\n    color: purple;\n  }\n\n  @include terra-mq-large-up {\n    color: green;\n  }\n\n  @include terra-mq-huge-up {\n    color: yellow;\n  }\n\n  @include terra-mq-enormous-up {\n    color: orange;\n  }\n}\n")))}d.isMDXComponent=!0},87462:(e,n,t)=>{function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,{Z:()=>a})},44925:(e,n,t)=>{function a(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(n,{Z:()=>a})}}]);