"use strict";(self.webpackChunkzwyx_dev=self.webpackChunkzwyx_dev||[]).push([[3563],{2681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var i=n(108),r=n(4848),s=n(8453),o=n(1311),a=n(5939),c=n(2123);const l={tags:["viewport"]},d=void 0,h={authorsImageUrls:[]},p=[];function m(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"viewport"})," meta tag option ",(0,r.jsx)(t.code,{children:"interactive-widget"})," allows us to choose what the browser should do with our page when some overlay elements \u2014 such as a phone on-screen keyboard \u2014 appear:"]}),"\n","\n",(0,r.jsx)(o._,{src:c.A,alt:"interactive-widget options comparison",legend:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.code,{children:"interactive-widget"})," options comparison. The difference between"," ",(0,r.jsx)(t.code,{children:"resizes-visual"})," and ",(0,r.jsx)(t.code,{children:"overlays-content"})," is that"," ",(0,r.jsx)(t.code,{children:"resizes-visual"})," allows the user to scroll the page up to see the sticky element at the bottom, whereas ",(0,r.jsx)(t.code,{children:"overlays-content"})," ","doesn't."]})}),"\n",(0,r.jsxs)(t.p,{children:["Chrome's default behaviour on Android, before version 108, was ",(0,r.jsx)(t.code,{children:"resizes-content"})," \u2014 it is now ",(0,r.jsx)(t.code,{children:"resizes-visual"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["For example, the ",(0,r.jsx)(t.a,{href:"https://babel.zwyx.dev/",children:"Library of Babel"}),"'s ",(0,r.jsx)(t.code,{children:"viewport"})," meta tag is now:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<meta\n\tname="viewport"\n\tcontent="width=device-width, initial-scale=1.0, interactive-widget=resizes-content"\n/>\n'})}),"\n",(0,r.jsx)(t.p,{children:"This allows the sticky pagination component to be always visible when the on-screen keyboard is open:"}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)(o._,{src:a.A,alt:"Example on the Library of Babel",width:350,legend:(0,r.jsxs)(r.Fragment,{children:["The keyboard is"," ",(0,r.jsx)(t.a,{href:"https://github.com/dessalines/thumb-key",target:"_blank",rel:"noopener noreferrer",children:"Thumb-Key"}),"."]})})}),"\n",(0,r.jsxs)(t.p,{children:["Without ",(0,r.jsx)(t.code,{children:"interactive-widget"}),", scrolling down while the keyboard was open made the sticky pagination component to disappear."]}),"\n",(0,r.jsxs)(t.p,{children:["Read more at ",(0,r.jsx)(t.a,{href:"https://developer.chrome.com/blog/viewport-resize-behavior",children:"developer.chrome.com/blog/viewport-resize-behavior"})," (which is the source of the comparison image above)."]})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},1311:(e,t,n)=>{n.d(t,{_:()=>p});var i=n(53);const r="imageWrapper_u91s",s="withLegend_q8O0",o="frame_zT4L",a="visible_KgQe",c="image_Y_cJ",l="legend_xj0V";var d=n(4848);const h=e=>{let{children:t}=e;return(0,d.jsx)("div",{className:l,children:t})},p=e=>{let{src:t,alt:n,width:l,height:p,withFrame:m,legend:g,borderRadius:w,children:u}=e;const v=g||u;return(0,d.jsxs)("div",{className:(0,i.A)(r,v&&s),children:[(0,d.jsx)("div",{style:{borderRadius:w},className:(0,i.A)(o,m&&a),children:(0,d.jsx)("img",{style:{borderRadius:w},className:c,src:t,alt:n||("string"==typeof v?v:""),width:l,height:p})}),v&&(0,d.jsx)(h,{children:v})]})}},53:(e,t,n)=>{function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}n.d(t,{A:()=>r});const r=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},5939:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-03-27-interactive-widget-babel-2b3e7ed27a3f3bce5ac7359e6cff7ecb.webp"},2123:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-03-27-interactive-widget-visual-comparison-all-ff711d1c9df866930cdc6b23602ac624.webp"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}},108:e=>{e.exports=JSON.parse('{"permalink":"/til/2024/03/27/interactive-widget","editUrl":"https://github.com/zwyx/zwyx.dev/tree/master/til/2024-03-27-interactive-widget.mdx","source":"@site/til/2024-03-27-interactive-widget.mdx","title":"interactive-widget","description":"The viewport meta tag option interactive-widget allows us to choose what the browser should do with our page when some overlay elements \u2014 such as a phone on-screen keyboard \u2014 appear:","date":"2024-03-27T00:00:00.000Z","tags":[{"inline":true,"label":"viewport","permalink":"/til/tags/viewport"}],"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["viewport"]},"unlisted":false,"prevItem":{"title":"Annotated and lightweight tags","permalink":"/til/2025/01/24/Annotated and lightweight tags"},"nextItem":{"title":"Fast integer-to-string conversion","permalink":"/til/2024/02/01/Fast integer-to-string conversion"}}')}}]);