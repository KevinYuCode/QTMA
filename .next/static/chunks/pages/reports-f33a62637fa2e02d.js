(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{9081:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports",function(){return n(7533)}])},4171:function(e,t){"use strict";t.Z={src:"/_next/static/media/QTMA_logo.e5761232.png",height:520,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAALElEQVR42mP45/zf4I/XL9/fPr88fzv8dmf4F/Av/I/FL63frr9cfrn89gQAWmwUAE8ThAQAAAAASUVORK5CYII="}},1902:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),a=n(9008);function s(e){var t=e.children,n=e.background,s=e.home,i=e.isNav;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Mohave:ital,wght@0,300;1,300&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400&display=swap",rel:"stylesheet"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Mohave:ital,wght@0,300;1,300&family=Quicksand:wght@300;400;500;600;700&display=swap",rel:"stylesheet"})]}),(0,r.jsx)("div",{className:"layout-container ".concat(i?"nav-layout":""),children:(0,r.jsx)("main",{style:{backgroundColor:n,borderBottomRightRadius:s?"35rem":""},children:t})})]})}},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,s=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,s=(a=n(7294))&&a.__esModule?a:{default:a},i=n(6273),l=n(387),c=n(7190);var o={};function u(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;o[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=l.useRouter(),f=s.default.useMemo((function(){var t=r(i.resolveHref(a,e.href,!0),2),n=t[0],s=t[1];return{href:n,as:e.as?i.resolveHref(a,e.as):s||n}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,m=e.replace,v=e.shallow,y=e.scroll,x=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var g=(t=s.default.Children.only(p))&&"object"===typeof t&&t.ref,j=r(c.useIntersection({rootMargin:"200px"}),2),w=j[0],N=j[1],k=s.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);s.default.useEffect((function(){var e=N&&n&&i.isLocalURL(d),t="undefined"!==typeof x?x:a&&a.locale,r=o[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(a,d,h,{locale:t})}),[h,d,N,x,n,a]);var A={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,s,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](n,r,{shallow:s,locale:c,scroll:l}))}(e,a,d,h,m,v,y,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&u(a,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof x?x:a&&a.locale,_=a&&a.isLocaleDomain&&i.getDomainLocale(h,E,a&&a.locales,a&&a.domainLocales);A.href=_||i.addBasePath(i.addLocale(h,E,a&&a.defaultLocale))}return s.default.cloneElement(t,A)};t.default=f},8236:function(e,t,n){"use strict";n.r(t),n.d(t,{useWindowDimensions:function(){return d},default:function(){return h}});var r=n(5893),a=n(4171),s=n(5675),i=n(1902),l=n(1664),c=n(8193),o=n(7294),u=n(1163);function f(){return{width:window.innerWidth,height:window.innerHeight}}function d(){var e=(0,o.useState)(f()),t=e[0],n=e[1];return(0,o.useEffect)((function(){var e=function(){n(f())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}function h(){var e=(0,u.useRouter)(),t=(0,o.useState)(!1),n=t[0],f=t[1],h=d(),p=(h.height,h.width),m=(0,o.useState)(!1),v=m[0],y=m[1];return(0,o.useEffect)((function(){y(p<=1100)}),[p]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Z,{background:"#222831",isNav:!0,children:(0,r.jsxs)("div",{className:"nav-container container",children:[(0,r.jsx)("div",{className:"nav-toggle-container",onClick:function(){f(!n)},children:(0,r.jsx)(c.qTj,{})}),(0,r.jsx)("div",{className:"logo-container",children:(0,r.jsx)(l.default,{passHref:!0,href:"/",children:(0,r.jsx)(s.default,{alt:"QTMA logo",src:a.Z,className:"nav-logo",height:41.71,width:154})})}),(0,r.jsxs)("div",{className:"links-container",style:{transform:n&&v?"translateX(0)":v?"translateX(100%)":"translateX(0)"},children:[(0,r.jsx)(l.default,{className:"nav-links",href:"/",children:(0,r.jsx)("a",{className:"/"==e.pathname?"active-link":"nav-link",children:"Home"})}),(0,r.jsx)(l.default,{className:"nav-links",href:"/all_products",children:(0,r.jsx)("a",{className:"/all_products"==e.pathname?"active-link":"nav-link",children:"Products"})}),(0,r.jsx)(l.default,{className:"nav-links",href:"/history",children:(0,r.jsx)("a",{className:"/history"==e.pathname?"active-link":"nav-link",children:"History"})}),(0,r.jsx)(l.default,{className:"nav-links",href:"/team",children:(0,r.jsx)("a",{className:"/team"==e.pathname?"active-link":"nav-link",children:"Team"})}),(0,r.jsx)(l.default,{className:"nav-links",href:"/placements",children:(0,r.jsx)("a",{className:"/placements"==e.pathname?"active-link":"nav-link",children:"Placements"})}),(0,r.jsx)(l.default,{className:"nav-links",href:"/reports",children:(0,r.jsx)("a",{className:"/reports"==e.pathname?"active-link":"nav-link",children:"Reports"})}),(0,r.jsx)(l.default,{className:"nav-links",href:"/contact",children:(0,r.jsx)("a",{className:"/contact"==e.pathname?"active-link":"nav-link",children:"Contact"})})]})]})})})}},7533:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return o}});var r=n(5893),a=n(1902),s=n(3854),i=n(8236),l=n(9008),c=!0;function o(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("meta",{name:"description",content:"Recruiting Guide & Research Update"}),(0,r.jsx)("title",{children:"QTMA"}),(0,r.jsx)("meta",{name:"og:title",content:"QTMA"})]}),(0,r.jsx)(i.default,{}),(0,r.jsx)(a.Z,{background:"#edf5fc",children:(0,r.jsxs)("div",{className:"history-container container",children:[(0,r.jsx)("h1",{className:"section-title",children:"Reports"}),(0,r.jsxs)("a",{className:"recruiting-container",href:"/ReportForms/2018_Recruiting_Guide.pdf",children:[(0,r.jsx)("p",{children:"Recruiting Guide"}),(0,r.jsx)("p",{className:"download-icon",children:(0,r.jsx)(s.ys2,{})})]}),(0,r.jsxs)("a",{className:"research-container",href:"/ReportForms/2018_Research_Update.pdf",children:[(0,r.jsx)("p",{children:"Research Update"}),(0,r.jsx)("p",{className:"download-icon",children:(0,r.jsx)(s.ys2,{})})]})]})})]})}},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return o}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function o(e){return function(t){return r.createElement(u,i({attr:i({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,a=e.attr,s=e.size,c=e.title,o=l(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,o,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(function(e){return t(e)})):t(a)}}},function(e){e.O(0,[617,556,959,774,888,179],(function(){return t=9081,e(e.s=t);var t}));var t=e.O();_N_E=t}]);