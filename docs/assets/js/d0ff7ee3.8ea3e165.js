"use strict";(self.webpackChunkzwyx_dev=self.webpackChunkzwyx_dev||[]).push([[3403],{4812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var s=n(717),i=n(4848),r=n(8453);const c={title:"DDC/CI",tags:[]},o=void 0,a={authorsImageUrls:[]},d=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Display_Data_Channel#DDC/CI",children:"DDC/CI"})," standard (introduced in 1998!) allows a computer to send commands to external monitors."]}),"\n",(0,i.jsx)(t.p,{children:"For instance, we can programmatically set the brightness of all our monitors:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["install ",(0,i.jsx)(t.a,{href:"https://github.com/rockowitz/ddcutil",children:"ddcutil"}),":"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"sudo apt install ddcutil\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"create a shortcut associated with a script to switch between bright and dim:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'if [ "$(cat /sys/class/backlight/intel_backlight/brightness)" = "960" ]; then\n\t# Set laptop monitor\'s brightness\n\techo 57984 | sudo tee /sys/class/backlight/intel_backlight/brightness\n\t# Set external monitors\' brightness\n\tsudo ddcutil setvcp 0x10 60\nelse\n\techo 960 | sudo tee /sys/class/backlight/intel_backlight/brightness\n\tsudo ddcutil setvcp 0x10 0\nfi\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"0x10"})," is the code for ",(0,i.jsx)(t.code,{children:"brightness"}),". Run ",(0,i.jsx)(t.code,{children:"sudo ddcutil detect"})," to list the monitors ",(0,i.jsx)(t.code,{children:"ddcutil"})," can work with, and ",(0,i.jsx)(t.code,{children:"sudo ddcutil getvcp all"})," to list the features available."]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Because ",(0,i.jsx)(t.code,{children:"sudo"})," is required, the shortcut's command needs to use ",(0,i.jsx)(t.code,{children:"pkexec"}),":"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pkexec /path/to/switch-brightness.sh\n"})})]}),"\n",(0,i.jsx)(t.p,{children:"And by the way, here's another script, to switch between light and dark themes:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'if [ "$(gsettings get org.gnome.desktop.interface gtk-theme)" = "\'Yaru\'" ]; then\n\tgsettings set org.gnome.desktop.interface color-scheme "prefer-dark"\n\tgsettings set org.gnome.desktop.interface gtk-theme "Yaru-dark"\nelse\n\tgsettings set org.gnome.desktop.interface color-scheme "prefer-light"\n\tgsettings set org.gnome.desktop.interface gtk-theme "Yaru"\nfi\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var s=n(6540);const i={},r=s.createContext(i);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}},717:e=>{e.exports=JSON.parse('{"permalink":"/til/2025/02/05/ddc-ci","editUrl":"https://github.com/zwyx/zwyx.dev/tree/master/til/2025-02-05-ddc-ci.md","source":"@site/til/2025-02-05-ddc-ci.md","title":"DDC/CI","description":"The DDC/CI standard (introduced in 1998!) allows a computer to send commands to external monitors.","date":"2025-02-05T00:00:00.000Z","tags":[],"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"DDC/CI","tags":[]},"unlisted":false,"nextItem":{"title":"Annotated and lightweight tags","permalink":"/til/2025/01/24/Annotated and lightweight tags"}}')}}]);