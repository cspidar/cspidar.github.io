"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[2467],{9403:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"react/Component/5-3. Fragment\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uc640 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0","title":"Fragment\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uc640 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0","description":"React\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc791\uc131\ud558\ub2e4 \ubcf4\uba74, \uc5ec\ub7ec \uc694\uc18c\ub97c \ubc18\ud658\ud574\uc57c \ud560 \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \ubd80\ubaa8 \uc694\uc18c \uc5c6\uc774 \uc5ec\ub7ec \uc694\uc18c\ub97c \ubc18\ud658\ud558\ub824\uba74 Fragment\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Fragment\ub294 \ubd88\ud544\uc694\ud55c DOM \uc694\uc18c\ub97c \ucd94\uac00\ud558\uc9c0 \uc54a\uace0 \uadf8\ub8f9\ud654\ub41c \uc694\uc18c\ub97c \ub80c\ub354\ub9c1\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4.","source":"@site/docs/react/5. Component/5-3. Fragment\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uc640 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0.md","sourceDirName":"react/5. Component","slug":"/react/Component/5-3. Fragment\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uc640 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0","permalink":"/react/Component/5-3. Fragment\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uc640 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docSidebar","previous":{"title":"Self-Closing Tags \uc0ac\uc6a9\ubc95","permalink":"/react/Component/5-2. Self-Closing Tags \uc0ac\uc6a9\ubc95"},"next":{"title":"\ucef4\ud3ec\ub10c\ud2b8 \ud568\uc218\ub85c JSX \ubc18\ud658","permalink":"/react/Component/5-4. \ucef4\ud3ec\ub10c\ud2b8 \ud568\uc218\ub85c JSX \ubc18\ud658"}}');var i=r(74848),d=r(28453);const l={},c="Fragment\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uc640 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0",s={},a=[{value:"Fragment\uc758 \ud544\uc694\uc131",id:"fragment\uc758-\ud544\uc694\uc131",level:2},{value:"Fragment\uac00 \ud544\uc694\ud55c \uacbd\uc6b0",id:"fragment\uac00-\ud544\uc694\ud55c-\uacbd\uc6b0",level:2},{value:"1. \ubd88\ud544\uc694\ud55c DOM \uc694\uc18c\ub97c \ud53c\ud558\uace0 \uc2f6\uc744 \ub54c",id:"1-\ubd88\ud544\uc694\ud55c-dom-\uc694\uc18c\ub97c-\ud53c\ud558\uace0-\uc2f6\uc744-\ub54c",level:3},{value:"2. \ub9ac\uc2a4\ud2b8\ub97c \ub80c\ub354\ub9c1\ud560 \ub54c",id:"2-\ub9ac\uc2a4\ud2b8\ub97c-\ub80c\ub354\ub9c1\ud560-\ub54c",level:3},{value:"Fragment\uac00 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0",id:"fragment\uac00-\ud544\uc694\ud558\uc9c0-\uc54a\uc740-\uacbd\uc6b0",level:2},{value:"1. \ub2e8\uc77c \uc694\uc18c\ub97c \ubc18\ud658\ud560 \ub54c",id:"1-\ub2e8\uc77c-\uc694\uc18c\ub97c-\ubc18\ud658\ud560-\ub54c",level:3},{value:"2. \ubd88\ud544\uc694\ud55c \uadf8\ub8f9\ud654\ub97c \ud53c\ud558\uace0\uc790 \ud560 \ub54c",id:"2-\ubd88\ud544\uc694\ud55c-\uadf8\ub8f9\ud654\ub97c-\ud53c\ud558\uace0\uc790-\ud560-\ub54c",level:3},{value:"\uc8fc\uc758\uc0ac\ud56d",id:"\uc8fc\uc758\uc0ac\ud56d",level:2},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\ub0b4\uc6a9 \uc694\uc57d\uacfc \ub2e4\uc74c \uc8fc\uc81c",id:"\ub0b4\uc6a9-\uc694\uc57d\uacfc-\ub2e4\uc74c-\uc8fc\uc81c",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"fragment\uac00-\ud544\uc694\ud55c-\uacbd\uc6b0\uc640-\ud544\uc694\ud558\uc9c0-\uc54a\uc740-\uacbd\uc6b0",children:"Fragment\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uc640 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0"})}),"\n",(0,i.jsxs)(n.p,{children:["React\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc791\uc131\ud558\ub2e4 \ubcf4\uba74, \uc5ec\ub7ec \uc694\uc18c\ub97c \ubc18\ud658\ud574\uc57c \ud560 \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \ubd80\ubaa8 \uc694\uc18c \uc5c6\uc774 \uc5ec\ub7ec \uc694\uc18c\ub97c \ubc18\ud658\ud558\ub824\uba74 ",(0,i.jsx)(n.code,{children:"Fragment"}),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,i.jsx)(n.code,{children:"Fragment"}),"\ub294 \ubd88\ud544\uc694\ud55c DOM \uc694\uc18c\ub97c \ucd94\uac00\ud558\uc9c0 \uc54a\uace0 \uadf8\ub8f9\ud654\ub41c \uc694\uc18c\ub97c \ub80c\ub354\ub9c1\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h2,{id:"fragment\uc758-\ud544\uc694\uc131",children:"Fragment\uc758 \ud544\uc694\uc131"}),"\n",(0,i.jsx)(n.p,{children:"React\uc5d0\uc11c\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ud558\ub098\uc758 \ub8e8\ud2b8 \uc694\uc18c\ub9cc\uc744 \ubc18\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ub2e4\uc74c\uacfc \uac19\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc624\ub958\ub97c \ubc1c\uc0dd\uc2dc\ud0b5\ub2c8\ub2e4:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"function MyComponent() {\n  return (\n    <div>Hello</div>\n    <div>World</div>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\uc774 \uc624\ub958\ub97c \ud574\uacb0\ud558\ub824\uba74 \ubd80\ubaa8 \uc694\uc18c\ub85c \ub458\ub7ec\uc2f8\uc57c \ud569\ub2c8\ub2e4. \ubcf4\ud1b5\uc740 ",(0,i.jsx)(n.code,{children:"<div>"}),"\ub97c \uc0ac\uc6a9\ud558\uc9c0\ub9cc, \ubd88\ud544\uc694\ud55c ",(0,i.jsx)(n.code,{children:"<div>"})," \uc694\uc18c\uac00 \ucd94\uac00\ub429\ub2c8\ub2e4. \uc774\ub7f0 \uacbd\uc6b0 ",(0,i.jsx)(n.code,{children:"Fragment"}),"\uac00 \uc720\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"function MyComponent() {\n  return (\n    <React.Fragment>\n      <div>Hello</div>\n      <div>World</div>\n    </React.Fragment>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\ub610\ub294 \ub354 \uac04\ub2e8\ud558\uac8c ",(0,i.jsx)(n.code,{children:"<></>"}),"\ub97c \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"function MyComponent() {\n  return (\n    <>\n      <div>Hello</div>\n      <div>World</div>\n    </>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"fragment\uac00-\ud544\uc694\ud55c-\uacbd\uc6b0",children:"Fragment\uac00 \ud544\uc694\ud55c \uacbd\uc6b0"}),"\n",(0,i.jsx)(n.h3,{id:"1-\ubd88\ud544\uc694\ud55c-dom-\uc694\uc18c\ub97c-\ud53c\ud558\uace0-\uc2f6\uc744-\ub54c",children:"1. \ubd88\ud544\uc694\ud55c DOM \uc694\uc18c\ub97c \ud53c\ud558\uace0 \uc2f6\uc744 \ub54c"}),"\n",(0,i.jsxs)(n.p,{children:["\uc608\ub97c \ub4e4\uc5b4, CSS \uadf8\ub9ac\ub4dc \ub808\uc774\uc544\uc6c3\uc744 \uc0ac\uc6a9\ud560 \ub54c \ubd88\ud544\uc694\ud55c \ubd80\ubaa8 ",(0,i.jsx)(n.code,{children:"<div>"}),"\uac00 \ub808\uc774\uc544\uc6c3\uc744 \uae68\ub728\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c ",(0,i.jsx)(n.code,{children:"Fragment"}),"\ub97c \uc0ac\uc6a9\ud558\uba74 \uad6c\uc870\ub97c \uae68\uc9c0 \uc54a\uace0 \uc5ec\ub7ec \uc694\uc18c\ub97c \ubc18\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'function GridComponent() {\n  return (\n    <>\n      <div className="item">Item 1</div>\n      <div className="item">Item 2</div>\n      <div className="item">Item 3</div>\n    </>\n  );\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-\ub9ac\uc2a4\ud2b8\ub97c-\ub80c\ub354\ub9c1\ud560-\ub54c",children:"2. \ub9ac\uc2a4\ud2b8\ub97c \ub80c\ub354\ub9c1\ud560 \ub54c"}),"\n",(0,i.jsxs)(n.p,{children:["\ub9ac\uc2a4\ud2b8\ub97c \ub80c\ub354\ub9c1\ud560 \ub54c ",(0,i.jsx)(n.code,{children:"Fragment"}),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ub9ac\uc2a4\ud2b8 \uc544\uc774\ud15c\uc744 \uac10\uc2f8\ub294 \ucd94\uac00 \uc694\uc18c\ub97c \ud53c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"function ListComponent({ items }) {\n  return (\n    <ul>\n      {items.map(item => (\n        <React.Fragment key={item.id}>\n          <li>{item.name}</li>\n        </React.Fragment>\n      ))}\n    </ul>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"fragment\uac00-\ud544\uc694\ud558\uc9c0-\uc54a\uc740-\uacbd\uc6b0",children:"Fragment\uac00 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0"}),"\n",(0,i.jsx)(n.h3,{id:"1-\ub2e8\uc77c-\uc694\uc18c\ub97c-\ubc18\ud658\ud560-\ub54c",children:"1. \ub2e8\uc77c \uc694\uc18c\ub97c \ubc18\ud658\ud560 \ub54c"}),"\n",(0,i.jsxs)(n.p,{children:["\ub2e8\uc77c \uc694\uc18c\ub97c \ubc18\ud658\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 ",(0,i.jsx)(n.code,{children:"Fragment"}),"\uac00 \ud544\uc694 \uc5c6\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"function SingleElementComponent() {\n  return <div>Hello World</div>;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-\ubd88\ud544\uc694\ud55c-\uadf8\ub8f9\ud654\ub97c-\ud53c\ud558\uace0\uc790-\ud560-\ub54c",children:"2. \ubd88\ud544\uc694\ud55c \uadf8\ub8f9\ud654\ub97c \ud53c\ud558\uace0\uc790 \ud560 \ub54c"}),"\n",(0,i.jsxs)(n.p,{children:["\uac00\ub054 \uc5ec\ub7ec \uc694\uc18c\ub97c \uadf8\ub8f9\ud654\ud560 \ud544\uc694\uac00 \uc5c6\uace0, \uadf8\ub0e5 \ud558\ub098\uc758 \uc694\uc18c\ub9cc \ubc18\ud658\ud558\uba74 \ucda9\ubd84\ud55c \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c\ub294 ",(0,i.jsx)(n.code,{children:"Fragment"}),"\uac00 \ud544\uc694\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h2,{id:"\uc8fc\uc758\uc0ac\ud56d",children:"\uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Fragment"}),"\ub294 \ud0a4(key)\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9ac\uc2a4\ud2b8 \uc544\uc774\ud15c\uc5d0 \ud0a4\uac00 \ud544\uc694\ud55c \uacbd\uc6b0 \uc720\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:["\ube48 \ud0dc\uadf8 ",(0,i.jsx)(n.code,{children:"<>"}),"\ub294 \uc18d\uc131\uc744 \uac00\uc9c8 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc18d\uc131\uc774 \ud544\uc694\ud55c \uacbd\uc6b0 ",(0,i.jsx)(n.code,{children:"React.Fragment"}),"\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://react.dev",children:"JSX \ubb38\ubc95"})}),": JSX\uc758 \uae30\ubcf8 \uac1c\ub150\uacfc \ubb38\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc138\uc694."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://react.dev",children:"React \ucef4\ud3ec\ub10c\ud2b8"})}),": React \ucef4\ud3ec\ub10c\ud2b8\uc640 props\uc5d0 \ub300\ud574 \ub354 \uae4a\uc774 \uc774\ud574\ud574 \ubcf4\uc138\uc694."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://react.dev",children:"React Fragment"})}),": \uacf5\uc2dd \ubb38\uc11c\ub97c \ud1b5\ud574 ",(0,i.jsx)(n.code,{children:"Fragment"}),"\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\ub0b4\uc6a9-\uc694\uc57d\uacfc-\ub2e4\uc74c-\uc8fc\uc81c",children:"\ub0b4\uc6a9 \uc694\uc57d\uacfc \ub2e4\uc74c \uc8fc\uc81c"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Fragment"}),"\ub294 \uc5ec\ub7ec \uc694\uc18c\ub97c \uadf8\ub8f9\ud654\ud560 \ub54c \ubd88\ud544\uc694\ud55c DOM \uc694\uc18c\ub97c \ucd94\uac00\ud558\uc9c0 \uc54a\ub3c4\ub85d \ub3c4\uc640\uc90d\ub2c8\ub2e4. \uc8fc\ub85c \ub808\uc774\uc544\uc6c3\uc774 \uc911\uc694\ud55c \uacbd\uc6b0\ub098 \ub9ac\uc2a4\ud2b8\ub97c \ub80c\ub354\ub9c1\ud560 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4. \ub2e4\uc74c \uc8fc\uc81c\uc778 ",(0,i.jsx)(n.strong,{children:"\ucef4\ud3ec\ub10c\ud2b8 \ud568\uc218\ub85c JSX \ubc18\ud658"}),"\uc5d0\uc11c\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ud568\uc218\uac00 JSX\ub97c \ubc18\ud658\ud558\ub294 \ubc29\ubc95\uacfc \uc774\uc640 \uad00\ub828\ub41c \ub2e4\uc591\ud55c \ud328\ud134\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var t=r(96540);const i={},d=t.createContext(i);function l(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);