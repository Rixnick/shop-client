_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"+ETS":function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),a=t("o0o1"),i=t.n(a),u=t("HaE+"),c=t("ODXe"),s=t("rePB"),l=t("uc3D"),f=t("YJ/8"),p=t("YFqc"),d=t.n(p),m=t("nOHt"),v=t.n(m),g=t("p46w"),w=t.n(g),h=t("nycs"),b=o.a.createElement;function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=function(){var e=Object(r.useState)({email:"",password:""}),n=e[0],t=e[1],o=Object(r.useContext)(h.a).setAuthUser,a=function(e){t(O(O({},n),{},Object(s.a)({},e.target.name,e.target.value)))},p=Object(l.useMutation)(f.a,{variables:O({},n),onCompleted:function(e){e&&(o(e.login.user),w.a.set("jwtToken",e.login.jwt),t({email:"",password:""}),v.a.push("/Dashboard"))}}),m=Object(c.a)(p,2),g=m[0],y=m[1],j=y.loading,S=y.error;return b("div",{className:"login-page"},b("form",{onSubmit:function(){var e=Object(u.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.preventDefault(),e.next=4,g();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}()},b("h3",null,"Sign In Form"),b("div",{className:"message"},S&&b("p",null,S.graphQLErrors[0].message)),b("input",{type:"email",name:"email",placeholder:"Enter Email",value:n.email,onChange:a}),b("input",{type:"password",name:"password",placeholder:"Enter Password",value:n.password,onChange:a}),b("div",{className:"p-forget"},b("p",null,"Forgot password?"," "," ",b("span",{onClick:function(){return v.a.push("/signin/requestresetpassword")}},"Click here"))),b("button",{className:"btn-submit",type:"submit",disabled:j},"Login Now!"),b(d.a,{href:"/signup"},b("a",null,"Don't have an account? "," "," ",b("span",null,"Signup here")))))},S=o.a.createElement;n.default=function(){return S(j,null)}},BsWD:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("a3WO");function o(e,n){if(e){if("string"===typeof e)return Object(r.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(r.a)(e,n):void 0}}},DSFK:function(e,n,t){"use strict";function r(e){if(Array.isArray(e))return e}t.d(n,"a",(function(){return r}))},"HaE+":function(e,n,t){"use strict";function r(e,n,t,r,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,a){var i=e.apply(n,t);function u(e){r(i,o,a,u,c,"next",e)}function c(e){r(i,o,a,u,c,"throw",e)}u(void 0)}))}}t.d(n,"a",(function(){return o}))},ODXe:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("DSFK");var o=t("BsWD"),a=t("PYwp");function i(e,n){return Object(r.a)(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return t}}(e,n)||Object(o.a)(e,n)||Object(a.a)()}},"OZ0+":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Signin",function(){return t("+ETS")}])},PYwp:function(e,n,t){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(n,"a",(function(){return r}))},YFqc:function(e,n,t){e.exports=t("cTJO")},"YJ/8":function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"d",(function(){return f})),t.d(n,"a",(function(){return p})),t.d(n,"c",(function(){return d}));var r=t("h4VS"),o=t("lTCR"),a=t.n(o);function i(){var e=Object(r.a)(["\n      mutation REQUEST_RESET_PASSWORD($email: String!) {\n            requestResetPassword(email: $email) {\n                  message\n            }\n      }\n"]);return i=function(){return e},e}function u(){var e=Object(r.a)(["\n      mutation LOG_IN($email: String!, $password: String!) {\n            login(email: $email, password: $password) {\n                  user {\n                        id\n                        username\n                        email\n                        products {\n                              id\n                              name\n                              description\n                              imageUrl\n                              price\n                        }\n                        carts {\n                              id\n                              product {\n                                    name\n                                    description\n                                    price\n                                    imageUrl\n                              }\n                              qualtity\n                        }\n                  }\n                 jwt\n            }\n      }\n"]);return u=function(){return e},e}function c(){var e=Object(r.a)(["\n      mutation SIGN_UP(\n            $username: String!\n            $email: String!\n            $password: String!\n      ) {\n            signup(username: $username, email: $email, password: $password) {\n                  id\n                  username\n                  email\n            }\n      }\n"]);return c=function(){return e},e}function s(){var e=Object(r.a)(["\n      query QUERY_USER {\n            user {\n                  id\n                  username\n                  email\n                  products {\n                        id\n                        name\n                        description\n                        price\n                  }\n                  carts {\n                        id\n                        product {\n                              name\n                              description\n                              imageUrl\n                              price\n                        }\n                        qualtity\n                  }\n                  profile {\n                        id\n                        firstname\n                        lastname\n                        age\n                        birthdate\n                        mentalStatus\n                        profileImage\n                  }\n            }\n      }\n"]);return s=function(){return e},e}var l=a()(s()),f=a()(c()),p=a()(u()),d=a()(i())},a3WO:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,"a",(function(){return r}))},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a,i=o(t("q1tI")),u=t("elyg"),c=t("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var p=function(e,n){var t=a||(l?a=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var n=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),s.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}s.delete(e)}):function(){}};function d(e,n,t,r){(0,u.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),f[n+"%"+t]=!0)}var m=function(e){var n=!1!==e.prefetch,t=(0,c.useRouter)(),o=t&&t.pathname||"/",a=i.default.useMemo((function(){var n=(0,u.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?(0,u.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),s=a.href,m=a.as,v=e.children,g=e.replace,w=e.shallow,h=e.scroll,b=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var y=i.Children.only(v),O=y&&"object"===typeof y&&y.ref,j=i.default.useRef(),S={ref:i.default.useCallback((function(e){(j.current&&(j.current(),j.current=void 0),n&&l&&e&&e.tagName&&(0,u.isLocalURL)(s))&&(f[s+"%"+m]||(j.current=p(e,(function(){d(t,s,m,{locale:"undefined"!==typeof b?b:t&&t.locale})}))));O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[n,O,s,m,t,b]),onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:c}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,s,m,g,w,h,b)}};return n&&(S.onMouseEnter=function(e){(0,u.isLocalURL)(s)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),d(t,s,m,{priority:!0}))}),(e.passHref||"a"===y.type&&!("href"in y.props))&&(S.href=(0,u.addBasePath)((0,u.addLocale)(m,"undefined"!==typeof b?b:t&&t.locale,t&&t.defaultLocale))),i.default.cloneElement(y,S)};n.default=m},nycs:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("q1tI"),o=t.n(r),a=t("p46w"),i=t.n(a),u=t("nOHt"),c=t.n(u),s=o.a.createElement,l=Object(r.createContext)();n.b=function(e){var n=e.children,t=e.userData,o=Object(r.useState)(t),a=o[0],u=o[1];Object(r.useEffect)((function(){var e=function(e){"logout"===e.key&&(u(null),c.a.push("/products"))};return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e),window.localStorage.removeItem("logout")}}),[]);return s(l.Provider,{value:{user:a,setAuthUser:function(e){return u(e)},signout:function(){i.a.remove("jwtToken"),u(null),localStorage.setItem("logout",Date.now()),c.a.push("/products")}}},n)}},p46w:function(e,n,t){var r,o;!function(a){if(void 0===(o="function"===typeof(r=a)?r.call(n,t,n,e):r)||(e.exports=o),!0,e.exports=a(),!!0){var i=window.Cookies,u=window.Cookies=a();u.noConflict=function(){return window.Cookies=i,u}}}((function(){function e(){for(var e=0,n={};e<arguments.length;e++){var t=arguments[e];for(var r in t)n[r]=t[r]}return n}function n(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(r){function o(){}function a(n,t,a){if("undefined"!==typeof document){"number"===typeof(a=e({path:"/"},o.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var i=JSON.stringify(t);/^[\{\[]/.test(i)&&(t=i)}catch(s){}t=r.write?r.write(t,n):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var u="";for(var c in a)a[c]&&(u+="; "+c,!0!==a[c]&&(u+="="+a[c].split(";")[0]));return document.cookie=n+"="+t+u}}function i(e,t){if("undefined"!==typeof document){for(var o={},a=document.cookie?document.cookie.split("; "):[],i=0;i<a.length;i++){var u=a[i].split("="),c=u.slice(1).join("=");t||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var s=n(u[0]);if(c=(r.read||r)(c,s)||n(c),t)try{c=JSON.parse(c)}catch(l){}if(o[s]=c,e===s)break}catch(l){}}return e?o[e]:o}}return o.set=a,o.get=function(e){return i(e,!1)},o.getJSON=function(e){return i(e,!0)},o.remove=function(n,t){a(n,"",e(t,{expires:-1}))},o.defaults={},o.withConverter=t,o}((function(){}))}))},rePB:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))}},[["OZ0+",0,1,2,3,4]]]);