"use strict";(self.webpackChunkzwyx_dev=self.webpackChunkzwyx_dev||[]).push([[9154],{7148:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var t=s(4238),i=s(4848),r=s(8453);const c={tags:["rsync"]},l=void 0,a={authorsImageUrls:[]},o=[{value:"Usage",id:"usage",level:3},{value:"Remote directories",id:"remote-directories",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"rsync"})," doesn't handle file/folder renames well: if a folder containing lots of big files (a photos/videos library) is renamed in the source, then the existing files in the destination will be deleted, and all files will be copied again to the destination."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/bcpierce00/unison",children:"Unison"})," appears to handle file renames, but what it actually does is detecting that the files already exist in the destination, and making a copy of them in the destination, from the destination. This saves bandwidth, but is still slow and will stress hard drives for no reason."]}),"\n",(0,i.jsxs)(n.p,{children:["A tool made by one single person addresses this issue perfectly: ",(0,i.jsx)(n.a,{href:"https://github.com/m-manu/rsync-sidekick",children:(0,i.jsx)(n.code,{children:"rsync-sidekick"})})]}),"\n",(0,i.jsx)(n.p,{children:"The author mentions that the tool doesn't make any changes, but to make sure of it, we can run it in a Docker container with readonly volumes. It will output a list of commands to rename and move stuff in the destination to reproduce the renames/moves made in the source."}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Build the container:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -t rsync-sidekick .\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Run it:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'docker run --rm \\\n\t-v /<source-path>:/sync-src:ro \\\n\t-v /<destination-path>:/sync-dst:ro \\\n\trsync-sidekick \\\n\t/bin/bash -c "rsync-sidekick -shellscript /sync-src/ /sync-dst/ && echo && cat sync_actions_*.sh"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Retrieve the output, check it visually, replace ",(0,i.jsx)(n.code,{children:"sync-src"})," and ",(0,i.jsx)(n.code,{children:"sync-dst"}),", and run it."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"rsync"})," on dry-run:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"rsync -ruvin /<source-path>/ /<destination-path>/\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Check the output; if all is ok, run ",(0,i.jsx)(n.code,{children:"rsync"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"rsync -ruvi /<source-path>/ /<destination-path>/\n"})}),"\n",(0,i.jsx)(n.h3,{id:"remote-directories",children:"Remote directories"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"rsync-sidekick"})," only supports local directories at the moment, so to use it with a remote one, we need to mount the directory locally. Example with SSH:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"mkdir ~/remote-dir\nsshfs <server>:/<path-on-server> ~/remote-dir\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then you can use ",(0,i.jsx)(n.code,{children:"~/remote-dir"})," as a local directory."]}),"\n",(0,i.jsx)(n.p,{children:"To unmount it, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"fusermount -u ~/remote-dir\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}},4238:e=>{e.exports=JSON.parse('{"permalink":"/til/2022/12/19/rsync and file renames","editUrl":"https://github.com/zwyx/zwyx.dev/tree/master/til/2022-12-19-rsync and file renames.md","source":"@site/til/2022-12-19-rsync and file renames.md","title":"rsync and file renames","description":"rsync doesn\'t handle file/folder renames well: if a folder containing lots of big files (a photos/videos library) is renamed in the source, then the existing files in the destination will be deleted, and all files will be copied again to the destination.","date":"2022-12-19T00:00:00.000Z","tags":[{"inline":true,"label":"rsync","permalink":"/til/tags/rsync"}],"hasTruncateMarker":false,"authors":[],"frontMatter":{"tags":["rsync"]},"unlisted":false,"prevItem":{"title":"inotify watches","permalink":"/til/2022/12/19/inotify watches"},"nextItem":{"title":"JSON stringify circular references","permalink":"/til/2022/12/05/JSON stringify circular references"}}')}}]);