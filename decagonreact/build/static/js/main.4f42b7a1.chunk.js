(this.webpackJsonpdecagonui=this.webpackJsonpdecagonui||[]).push([[0],{18:function(e,t,n){},36:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(27),s=n.n(o),r=(n(36),n(7)),i=(n(18),n(13)),l=n.n(i),j=n(1);var u=function(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)(Boolean),i=Object(r.a)(s,2),u=i[0],d=i[1],b=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"containerForLabel",children:Object(j.jsx)("label",{children:" Country Search"})}),Object(j.jsx)("input",{placeholder:"Type a country name here",className:"search",onChange:function(t){return function(t){var n=t.target;""!=n.value&&(console.log(e),l()({method:"GET",url:"http://localhost:7000/search/country?name="+n.value,headers:{"Content-Type":"application/json",authorization:"Bearer "+e.authToken}}).then((function(e){"Your Token has expired, please get a new token"==e.data&&d(!0),o(e.data)})).catch((function(e){console.log(e)})))}(t)}}),Object(j.jsx)("div",{className:"countryListing",children:a.map((function(e){return Object(j.jsxs)("div",{className:"countries",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Country:"})," "]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Region: "})," North America"]}),Object(j.jsx)("p",{children:Object(j.jsx)("span",{children:"Calling codes"})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"444"}),Object(j.jsx)("li",{children:"222"}),Object(j.jsx)("li",{children:"333"})]})]})}))})]})};return Object(c.useEffect)((function(){console.log("Do nothing")}),[a]),u?Object(j.jsx)(h,{}):b()};var h=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),s=Object(r.a)(o,2),i=s[0],h=s[1],d=Object(c.useState)(Boolean),b=Object(r.a)(d,2),O=b[0],p=b[1],x=Object(c.useState)(""),g=Object(r.a)(x,2),f=g[0],m=g[1];return Object(j.jsx)("div",{children:O?Object(j.jsx)(u,{authToken:f}):Object(j.jsx)("div",{className:"Login",children:Object(j.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),console.log(n),console.log(i),""!=n&&""!=i&&(l()({method:"GET",url:"http://localhost:7000/fetchToken",headers:{"Content-Type":"application/json"}}).then((function(e){m(e.data),console.log(e.data)})).catch((function(e){console.log(e)})),p(!0))}(e)},children:[Object(j.jsx)("p",{className:"getAccessToken",children:"Get New Access Token"}),Object(j.jsx)("input",{placeholder:"username",className:"login",type:"email",required:!0,onChange:function(e){return function(e){var t=e.target;a(t.value)}(e)}}),Object(j.jsx)("input",{placeholder:"password",className:"login",type:"password",required:!0,onChange:function(e){return function(e){var t=e.target;h(t.value)}(e)}}),Object(j.jsx)("button",{children:"open the door please"})]})})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))},b=n(28),O=n(31),p=n(3),x=Object(b.a)();s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O.a,{children:Object(j.jsx)(p.b,{history:x,children:Object(j.jsx)(p.c,{children:Object(j.jsx)(p.a,{path:"/",component:h})})})})}),document.getElementById("root")),d()}},[[64,1,2]]]);
//# sourceMappingURL=main.4f42b7a1.chunk.js.map