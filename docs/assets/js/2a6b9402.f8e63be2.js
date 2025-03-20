"use strict";(self.webpackChunkzwyx_dev=self.webpackChunkzwyx_dev||[]).push([[2529],{7202:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>h,metadata:()=>i,toc:()=>p});var i=t(6448),o=t(4848),r=t(8453),a=t(1311),s=t(1871),l=t(7386),c=t(950);const h={slug:"own-contribution-graph",title:"Consolidate your contribution graph",description:"Combine your contributions from any repository on your GitHub contribution graph.",image:"./skyline-zwyx-2021.webp",authors:["alex"],tags:["git"]},d=void 0,u={image:t(671).A,authorsImageUrls:[void 0]},p=[{value:"The GitHub contribution graph",id:"the-github-contribution-graph",level:2},{value:"Not on GitHub anymore?",id:"not-on-github-anymore",level:2},{value:"Usage",id:"usage",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a._,{src:c.A,legend:"GitHub Skyline"}),"\n",(0,o.jsx)(n.p,{children:"Combine your contributions from any repository on your GitHub contribution graph."}),"\n","\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"the-github-contribution-graph",children:"The GitHub contribution graph"}),"\n",(0,o.jsx)(n.p,{children:"A friend and I used to work at the same company, where we were using GitHub."}),"\n",(0,o.jsx)(n.p,{children:"Every year, our contribution graphs looked nice and it was kinda rewarding."}),"\n",(0,o.jsx)(a._,{src:s.A,legend:"A contribution graph on GitHub"}),"\n",(0,o.jsxs)(n.p,{children:["You can do more than just look at it on your GitHub profile page: ",(0,o.jsx)(n.a,{href:"https://skyline.github.com/",children:"GitHub Skyline"})," lets you generate a 3D version of it\xa0\u2014\xa0which is the image at the top of this article. You can then download the 3D file and print it:"]}),"\n",(0,o.jsx)(a._,{src:l.A,legend:"Code trophy!"}),"\n",(0,o.jsx)(n.h2,{id:"not-on-github-anymore",children:"Not on GitHub anymore?"}),"\n",(0,o.jsx)(n.p,{children:"The companies we work for now however, use other Git hosting providers. Which means... no more contribution graphs on GitHub \ud83d\ude22"}),"\n",(0,o.jsx)(n.p,{children:"This is where Tim had a beautiful idea: create a tool that regularly scans our work repositories, and creates empty commits in a repository hosted on GitHub! Each empty commit corresponds to a commit made by ourselves in our work repositories, and is made with the same commit date."}),"\n",(0,o.jsx)(n.p,{children:"The repository gathering all these empty commits can be private on GitHub. (Although even if it's public, no content is present in it.)"}),"\n",(0,o.jsx)(n.p,{children:"Brilliant!"}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["The tool is ",(0,o.jsx)(n.a,{href:"https://npmjs.com/package/own-contribution-graph",children:"own-contribution-graph"}),". To use it, simply:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"install the package:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm i -g own-contribution-graph\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["create the configuration file following the instructions in the ",(0,o.jsx)(n.a,{href:"https://npmjs.com/package/own-contribution-graph",children:"ReadMe"}),","]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"run the following command:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"owncontributiongraph --config=<path-to-the-json-config-file>\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["I added ",(0,o.jsx)(n.code,{children:"own-contribution-graph"})," to the file ",(0,o.jsx)(n.code,{children:"~/.nvm/default-packages"}),", so ",(0,o.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"nvm"})," automatically installs it when I install a new version of Node."]}),"\n",(0,o.jsx)(n.li,{children:"I created a Cron task that executes this command every week, and push to a private GitHub repository."}),"\n"]})}),"\n",(0,o.jsx)(n.p,{children:"Our contributions graphs are alive again!"}),"\n",(0,o.jsxs)(n.p,{children:["There is a difference though: the merge method we used to use was ",(0,o.jsx)(n.em,{children:"rebase merging"}),", where all commits from a feature branch are applied one by one on the main branch. Now we use ",(0,o.jsx)(n.em,{children:"squash merging"}),", were all commits are squashed together into one commit that is applied on the main branch. So less contributions appear on the graph."]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},1311:(e,n,t)=>{t.d(n,{_:()=>u});var i=t(53);const o="imageWrapper_u91s",r="withLegend_q8O0",a="frame_zT4L",s="visible_KgQe",l="image_Y_cJ",c="legend_xj0V";var h=t(4848);const d=e=>{let{children:n}=e;return(0,h.jsx)("div",{className:c,children:n})},u=e=>{let{src:n,alt:t,width:c,height:u,withFrame:p,legend:g,borderRadius:m,children:b}=e;const x=g||b;return(0,h.jsxs)("div",{className:(0,i.A)(o,x&&r),children:[(0,h.jsx)("div",{style:{borderRadius:m},className:(0,i.A)(a,p&&s),children:(0,h.jsx)("img",{style:{borderRadius:m},className:l,src:n,alt:t||("string"==typeof x?x:""),width:c,height:u})}),x&&(0,h.jsx)(d,{children:x})]})}},53:(e,n,t)=>{function i(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}t.d(n,{A:()=>o});const o=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(o&&(o+=" "),o+=n);return o}},671:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/skyline-zwyx-2021-119aa1652e7ad3f01853ad0715589ac8.webp"},1871:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/contribution-graph-rotated--5deg-a71e5daa065d8a87b758615f58415fb6.webp"},7386:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/skyline-zwyx-2021-printed-858309e6327f06a95044176afbfada1f.webp"},950:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/skyline-zwyx-2021-119aa1652e7ad3f01853ad0715589ac8.webp"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}},6448:e=>{e.exports=JSON.parse('{"permalink":"/blog/own-contribution-graph","editUrl":"https://github.com/zwyx/zwyx.dev/tree/master/blog/2023-03-31-own-contribution-graph/index.mdx","source":"@site/blog/2023-03-31-own-contribution-graph/index.mdx","title":"Consolidate your contribution graph","description":"Combine your contributions from any repository on your GitHub contribution graph.","date":"2023-03-31T00:00:00.000Z","tags":[{"inline":true,"label":"git","permalink":"/blog/tags/git"}],"readingTime":1.865,"hasTruncateMarker":true,"authors":[{"name":"Alex","title":"Web developer","email":"alex@zwyx.dev","url":"https://github.com/Zwyx","imageURL":"https://github.com/zwyx.png","key":"alex","page":null}],"frontMatter":{"slug":"own-contribution-graph","title":"Consolidate your contribution graph","description":"Combine your contributions from any repository on your GitHub contribution graph.","image":"./skyline-zwyx-2021.webp","authors":["alex"],"tags":["git"]},"unlisted":false,"prevItem":{"title":"Your dotfiles in a Git repo","permalink":"/blog/your-dotfiles-in-a-git-repo"},"nextItem":{"title":"Indentation for accessibility","permalink":"/blog/indentation-for-accessibility"}}')}}]);