(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[213],{1796:function(e,t,A){(window.__NEXT_P=window.__NEXT_P||[]).push(["/placements",function(){return A(9385)}])},4171:function(e,t){"use strict";t.Z={src:"/_next/static/media/QTMA_logo.e5761232.png",height:520,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAALElEQVR42mP45/zf4I/XL9/fPr88fzv8dmf4F/Av/I/FL63frr9cfrn89gQAWmwUAE8ThAQAAAAASUVORK5CYII="}},1902:function(e,t,A){"use strict";A.d(t,{Z:function(){return i}});var a=A(5893),n=A(9008);function i(e){var t=e.children,A=e.background,i=e.home,r=e.isNav;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.default,{children:[(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Mohave:ital,wght@0,300;1,300&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400&display=swap",rel:"stylesheet"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Mohave:ital,wght@0,300;1,300&family=Quicksand:wght@300;400;500;600;700&display=swap",rel:"stylesheet"})]}),(0,a.jsx)("div",{className:"layout-container ".concat(r?"nav-layout":""),children:(0,a.jsx)("main",{style:{backgroundColor:A,borderBottomRightRadius:i?"35rem":""},children:t})})]})}},8418:function(e,t,A){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var A=[],a=!0,n=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done)&&(A.push(r.value),!t||A.length!==t);a=!0);}catch(l){n=!0,i=l}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return A}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var n,i=(n=A(7294))&&n.__esModule?n:{default:n},r=A(6273),s=A(387),l=A(7190);var c={};function o(e,t,A,a){if(e&&r.isLocalURL(t)){e.prefetch(t,A,a).catch((function(e){0}));var n=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[t+"%"+A+(n?"%"+n:"")]=!0}}var u=function(e){var t,A=!1!==e.prefetch,n=s.useRouter(),u=i.default.useMemo((function(){var t=a(r.resolveHref(n,e.href,!0),2),A=t[0],i=t[1];return{href:A,as:e.as?r.resolveHref(n,e.as):i||A}}),[n,e.href,e.as]),h=u.href,d=u.as,g=e.children,m=e.replace,f=e.shallow,p=e.scroll,v=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var w=(t=i.default.Children.only(g))&&"object"===typeof t&&t.ref,C=a(l.useIntersection({rootMargin:"200px"}),2),E=C[0],x=C[1],j=i.default.useCallback((function(e){E(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,E]);i.default.useEffect((function(){var e=x&&A&&r.isLocalURL(h),t="undefined"!==typeof v?v:n&&n.locale,a=c[h+"%"+d+(t?"%"+t:"")];e&&!a&&o(n,h,d,{locale:t})}),[d,h,x,v,A,n]);var Y={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,A,a,n,i,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&r.isLocalURL(A))&&(e.preventDefault(),null==s&&a.indexOf("#")>=0&&(s=!1),t[n?"replace":"push"](A,a,{shallow:i,locale:l,scroll:s}))}(e,n,h,d,m,f,p,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),r.isLocalURL(h)&&o(n,h,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var U="undefined"!==typeof v?v:n&&n.locale,N=n&&n.isLocaleDomain&&r.getDomainLocale(d,U,n&&n.locales,n&&n.domainLocales);Y.href=N||r.addBasePath(r.addLocale(d,U,n&&n.defaultLocale))}return i.default.cloneElement(t,Y)};t.default=u},8236:function(e,t,A){"use strict";A.r(t),A.d(t,{useWindowDimensions:function(){return h},default:function(){return d}});var a=A(5893),n=A(4171),i=A(5675),r=A(1902),s=A(1664),l=A(8193),c=A(7294),o=A(1163);function u(){return{width:window.innerWidth,height:window.innerHeight}}function h(){var e=(0,c.useState)(u()),t=e[0],A=e[1];return(0,c.useEffect)((function(){var e=function(){A(u())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}function d(){var e=(0,o.useRouter)(),t=(0,c.useState)(!1),A=t[0],u=t[1],d=h(),g=(d.height,d.width),m=(0,c.useState)(!1),f=m[0],p=m[1];return(0,c.useEffect)((function(){p(g<=1100)}),[g]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Z,{background:"#222831",isNav:!0,children:(0,a.jsxs)("div",{className:"nav-container container",children:[(0,a.jsx)("div",{className:"nav-toggle-container",onClick:function(){u(!A)},children:(0,a.jsx)(l.qTj,{})}),(0,a.jsx)("div",{className:"logo-container",children:(0,a.jsx)(s.default,{passHref:!0,href:"/",children:(0,a.jsx)(i.default,{alt:"QTMA logo",src:n.Z,className:"nav-logo",height:41.71,width:154})})}),(0,a.jsxs)("div",{className:"links-container",style:{transform:A&&f?"translateX(0)":f?"translateX(100%)":"translateX(0)"},children:[(0,a.jsx)(s.default,{className:"nav-links",href:"/",children:(0,a.jsx)("a",{className:"/"==e.pathname?"active-link":"nav-link",children:"Home"})}),(0,a.jsx)(s.default,{className:"nav-links",href:"/all_products",children:(0,a.jsx)("a",{className:"/all_products"==e.pathname?"active-link":"nav-link",children:"Products"})}),(0,a.jsx)(s.default,{className:"nav-links",href:"/history",children:(0,a.jsx)("a",{className:"/history"==e.pathname?"active-link":"nav-link",children:"History"})}),(0,a.jsx)(s.default,{className:"nav-links",href:"/team",children:(0,a.jsx)("a",{className:"/team"==e.pathname?"active-link":"nav-link",children:"Team"})}),(0,a.jsx)(s.default,{className:"nav-links",href:"/placements",children:(0,a.jsx)("a",{className:"/placements"==e.pathname?"active-link":"nav-link",children:"Placements"})}),(0,a.jsx)(s.default,{className:"nav-links",href:"/reports",children:(0,a.jsx)("a",{className:"/reports"==e.pathname?"active-link":"nav-link",children:"Reports"})}),(0,a.jsx)(s.default,{className:"nav-links",href:"/contact",children:(0,a.jsx)("a",{className:"/contact"==e.pathname?"active-link":"nav-link",children:"Contact"})})]})]})})})}},9385:function(e,t,A){"use strict";A.r(t),A.d(t,{__N_SSG:function(){return R},default:function(){return y}});var a=A(5893),n=A(1902),i=A(5675),r=A(8236),s={src:"/_next/static/media/recruit1.870d64b4.png",height:108,width:108,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4klEQVR42jWPu4rCYBSET3RfYC8s7pJdIcEYi4gXsBF7rX0FO7ESC7WwsrGzEMEH8VIovoHPYIokPwHRMoVnPAlaDMyZ+aY4pJF9IrIu/3/VgEhTRKR0vaLSKVt8XkSW9/VZhBi0Wm10Ot3ESwmBQLJ042A+X9yDQLHvB3zYH1kyzmRKTB/vTgJ4ns/D4SRZh2GIXq+feFFOgCyu1xtvNjtMpzNEUYTxePICLAFMnM8ur9dbLJcrKKUwGIxeQN5NaTbq9SY/AzhOA6ZZQzwkedMVSI5v/v0pwzDiQhcZeEsX8AB4UW9cRkk9ggAAAABJRU5ErkJggg=="},l={src:"/_next/static/media/recruit2.4754f6ec.png",height:75,width:208,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAYklEQVR42mNQkZdrYeCR72IQk+9VV5CrZWBQKGNgkq/TVJRrUZCTn84gJSOfU+wunR9rJRvJwC2f0h4kVdsaKFXAwCAfo6MsF8sAAv8PMwj8X8Tg8X8xEK9gMP1/lYGLAQoAOCcXaPCuqfkAAAAASUVORK5CYII="},c={src:"/_next/static/media/recruit3.8ce3eb78.png",height:625,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAd0lEQVR42jWNMQqEQBAEl7sLjjUy3wHFYCfQRAMN1MTQ2EDwBYKP8L27j7AQbWh6Zgp6THT6MYjMg+gURcfofGYQCUMcLW6j+IU8g/iGTMwrgOWw4X9wmrKv2N6Q2u/T0jMfgJ3sH/a7Af9rXFA9sM/MFbALouUFeugsA9jQ29QAAAAASUVORK5CYII="},o={src:"/_next/static/media/recruit4.80ed11df.png",height:100,width:102,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5klEQVR42h3Ou0oDQRSA4f/MzsxmjYkS0yTBCypqI1ja+gDie2jnM9nZprGzlGCwEVRI4SKoxAsEL+tmd+co9l/xSft4/8aJWRPIAVHAABVKqYq1IvWnMneIOKoCTAShgsjRiTz2uSrC3nyHrCzC0mzLTKYZcz7h/uONwdcrlu+xHB4csb26JbfpiHT8yHp3meHomsFlH4Mq3npiH4PCRm+FmovZ3dyhZWtYkjanF2f0h+cszDSZ/HzSiOvcvTzwXmTYrks4Sa8glFBN/3OEAnyD3h+0uQYWa00iEVAIKEaEUgNZCPwCIiFVBZNb0SAAAAAASUVORK5CYII="},u={src:"/_next/static/media/recruit5.c39e37de.png",height:354,width:707,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAeElEQVR42mOI23WYlQEITCR9mBnQgL57MhtD8YkLmjl7jzkxMBg4aHimOCo7xNmqOMbpALGbikOcKkNwaZtMyvxV/k5ZtYViRmGlas4J/kBFEUDJRCAtx8AABOlrt4tlbN3Hy8BgK2AQmMWu4ZzArmQfK6NkH8sOAGd6HuN03AdxAAAAAElFTkSuQmCC"},h={src:"/_next/static/media/recruit6.aaf044fe.png",height:89,width:89,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEUAYv4AYf4AYP4AYv4AYv4AYf4AYv4AYf4AYv4AYv4AYf4AYv4AYf4AYv4AYf4AYv4AYf4AYf4AYv4AYv4AYv4AYf4AYv4AYv4AYf4AYv4AYv4AYv4AYv4AYv4AYf4AYf4AYv4AYv4AYv4AYv4AYf4AYf4AYv4AYf4AYv4AYf6PnPL3AAAAKHRSTlMAAAAEBQUODhIbHDZJUVtdaWt1d3h+gYOEjpianKSmqMjU3OLp8fX+ED1xIgAAAEZJREFUeNoNw4URgDAQBMA73N1CCC5P/w3CzixAAvj7vYk8pUPUImMlYsBckWVHZOdTJNfdIl6PZd72FGDzirYAG+4wBXA+k0AEVscv9l4AAAAASUVORK5CYII="},d={src:"/_next/static/media/recruit7.4874506d.png",height:120,width:275,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAQklEQVR42mOQUitjA2JmBlxAUq1ETUqtRAtKGwOxChCrA7GZlFqpNIOkajErUJJNUrWEA0jzACU4gZgDiHkk1UrYAT0WDjVNFSnCAAAAAElFTkSuQmCC"},g={src:"/_next/static/media/recruit8.e3e42351.png",height:170,width:170,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAs0lEQVR42mPAB5Z67WGEc9LjTnkkJp4Orwg7GjjNa6//zKCjHHDJJr9trhmhh5OWBK113uS1OG6D98bWre4bUuEK5rnODzrm0eB1zqYx+qxlf+QNl/aYU3bz4uEKrsel+t/ySAv7ku0Y+z4k0u++XXXoVZueaLiCz73ufj/XhIb8mBbk9LXWM/apf4HFHaeGXLiC/8t0mf+cyI35c7Mq7s/2uPA3SbEZt3XqhBkIgXum5YwAMatJChw1m6MAAAAASUVORK5CYII="},m={src:"/_next/static/media/recruit9.15c1a779.png",height:56,width:281,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASUlEQVR4nGOM93Iw5+DiFWVkYvr//esXbmYWlmdAzMTExMz86+cPNsZEP1c9JmbWb+ycnL++fvwgxcDA8JOFlVUKKP/nz69fvwBjYhVzgBAuGgAAAABJRU5ErkJggg=="},f={src:"/_next/static/media/recruit10.e1f6b5ba.png",height:135,width:266,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAATUlEQVR42mMgCLKql2nm1CxVKWtdLVXWskomr265bFHDSqmMyqUyNV3rZBiAApJZVUvEy9vWiJc0r5IEKhYpblopllm1VKaifY0UQRsAD/MbQGNwYEcAAAAASUVORK5CYII="},p={src:"/_next/static/media/recruit11.87b477a0.png",height:64,width:260,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAJklEQVR42gXAQQoAEBAAwPmDGye0tEr5/+tEuIbuCKlQbc/ULal9JckCQLBkDOIAAAAASUVORK5CYII="},v={src:"/_next/static/media/recruit12.013fae99.png",height:60,width:227,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASElEQVR4nGO8Uei8aafr5WuX1qYu4Of/xvPvH8MLBgZGJgYGBjYgFmacMvfUJV+Z/AulKy0myvAzSv37//8tUIIbqIgZSP8GAGppFyHuRvakAAAAAElFTkSuQmCC"},w={src:"/_next/static/media/recruit13.2f788d58.png",height:79,width:297,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASElEQVR4nGNMSU1nZmRktGNm+M/9non9g86L84ylYc5T/v35fY3VzD8SpIAJqMALqEDwHTPHM8tb099lptVv+M/IfIXVNswbAPwNGGE9u7b/AAAAAElFTkSuQmCC"},C={src:"/_next/static/media/recruit14.935c7706.png",height:81,width:249,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AXCD9j34AwQMdcuIxxtJfgAHNFz9TcSEFEYUixdtWpXTAXCC9UT1BgYYatKiJC5BY/nsJIP/Xcp1CXn8hzU8xI6kAXaC8xTmBAocjLtf8hNZpAnkIZYHfshkTVwApL9GxWLcHNwrGn3wmcsAAAAASUVORK5CYII="},E={src:"/_next/static/media/recruit15.be6e4a81.png",height:72,width:247,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASUlEQVR4nGM8cGl+0usPrz1C7coyrCydtb4yfHn+7w/DPwYGBhUgfsW48+LslQ9e3wxM7+mJMHriIPOH5xvH/7+M/EDJZ0DMDAAnvBzSJc/i0wAAAABJRU5ErkJggg=="},x={src:"/_next/static/media/recruit16.f8c493d5.png",height:189,width:249,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAc0lEQVR42o3NMRIBQRBG4fd3z8wSKOYAVJELxOv+B3CIjWSrimVNcwNevfzTsOuFGySJZyPeDUyhkoAQv9KwP58wu2FUXu0Rc9vguij7AjgajSvSSPY1UhJRCQ4yq+ry/Q9i24viaNWJcYqYZoV9XxZw6QPy5SF64OdbTQAAAABJRU5ErkJggg=="},j={src:"/_next/static/media/recruit17.bdd65faf.png",height:170,width:172,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAq0lEQVR42nXNOw6CQBAG4BlZQusVELFFGy/AvS0o3E63scEGtiERAwnNmn04DonRii+ZTDGPH5RSCAvqukYEJuV5nee7Mo7jN0NjjOj7x6ko9k+YdV13bHVL4zgSD8laS03TlMBWwJIkCS9j4KoubpomK4QAIvLABDC+xDTdQJZtI0YcA9zxt+CcwxACrJj3Hr71X9Ba3zj7wHPimj9EwzDcYVZVFcICKSV+AH4RYqYN2hsnAAAAAElFTkSuQmCC"},Y={src:"/_next/static/media/recruit18.3ff27f2f.png",height:193,width:291,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAY0lEQVR42mMgCDQ1NZn9/f0YgTSXlpYWt6GhIRcQ8+jq6vLr6OiwMMjJyakpKSmFyMjIpKuoqFSpqanlamhoeADZjerq6roMQIIdyFEFAgmgKYpALAvUKaGtoy2qr6/PRdAJAP57D28aemk4AAAAAElFTkSuQmCC"},U={src:"/_next/static/media/recruit19.c3f66055.png",height:93,width:95,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8ElEQVR42i3LzUrDQBSG4XMbRYQu3Lh14dr7Udx7A15D/UFQXEj8SR1R0FKqEVeuFBdKpqGGgE5ClFiTBubkfJ1CH3hX53zEqnVpVauwHn3bq2XDN2vGnpKxXcpYtTWxWkjYJzQfClLlkEkBSZ7B16twTyC3HNavJ3Aal8xqXPz1InxOQuaIIh6n6A8CeXoM0Lu7RfwZoxwXkIcNUHJIEepf6Ggk+3u72Ol0oMMQM/Z+E5QdUFQNAziidYgkjvHzXwNlCusTqPBolJ+toDbvgjkpc9jBOuwFgSbd9tufR8iOqcl6W0j726j8RbA7WrXEU63lzHG98bDJAAAAAElFTkSuQmCC"},N=A(9008),R=!0;function y(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(N.default,{children:[(0,a.jsx)("meta",{name:"description",content:"Our members have sucessfully recruited at these organizations:"}),(0,a.jsx)("title",{children:"QTMA"}),(0,a.jsx)("meta",{name:"og:title",content:"QTMA"})]}),(0,a.jsx)(r.default,{}),(0,a.jsx)(n.Z,{background:"#edf5fc",children:(0,a.jsxs)("div",{className:"placements-container container",children:[(0,a.jsx)("h1",{className:"section-title",children:"Placements"}),(0,a.jsx)("p",{className:"placements-subheading",children:"Our members have sucessfully recruited at these organizations:"}),(0,a.jsxs)("div",{className:"recruitment-container",children:[(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:s,width:108,height:108})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:l,width:208,height:75})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:c,width:200,height:125})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:o,width:102,height:100})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:u,width:270,height:135.183})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:h,width:89,height:89})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:d,width:275,height:120})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:g,width:170,height:170})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:m,width:281,height:56})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:f,width:266,height:135})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:p,width:260,height:64})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:v,width:227,height:60})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:w,width:297,height:79})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:C,width:249,height:81})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:E,width:247,height:72})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:x,width:249,height:189})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:j,width:172,height:170})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:Y,width:291,height:193})}),(0,a.jsx)("div",{className:"recruitment",children:(0,a.jsx)(i.default,{alt:"Company logos",src:U,width:95,height:93})})]})]})})]})}},1664:function(e,t,A){e.exports=A(8418)},1163:function(e,t,A){e.exports=A(387)},8357:function(e,t,A){"use strict";A.d(t,{w_:function(){return c}});var a=A(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(n),r=function(){return(r=Object.assign||function(e){for(var t,A=1,a=arguments.length;A<a;A++)for(var n in t=arguments[A])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e,t){var A={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(A[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(A[a[n]]=e[a[n]])}return A};function l(e){return e&&e.map((function(e,t){return a.createElement(e.tag,r({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return a.createElement(o,r({attr:r({},e.attr)},t),l(e.child))}}function o(e){var t=function(t){var A,n=e.attr,i=e.size,l=e.title,c=s(e,["attr","size","title"]),o=i||t.size||"1em";return t.className&&(A=t.className),e.className&&(A=(A?A+" ":"")+e.className),a.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:A,style:r(r({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==i?a.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}}},function(e){e.O(0,[617,959,774,888,179],(function(){return t=1796,e(e.s=t);var t}));var t=e.O();_N_E=t}]);