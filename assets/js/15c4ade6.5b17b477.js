"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[8346],{79901:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"react/State/2-7. useRef \uc18c\uac1c\uc640 useState \ub300\uc2e0 \ucef4\ud3ec\ub10c\ud2b8 \ubcc0\uc218 \uc0dd\uc131","title":"useRef \uc18c\uac1c\uc640 useState \ub300\uc2e0 \ucef4\ud3ec\ub10c\ud2b8 \ubcc0\uc218 \uc0dd\uc131","description":"useRef\ub780?","source":"@site/docs/react/2. State/2-7. useRef \uc18c\uac1c\uc640 useState \ub300\uc2e0 \ucef4\ud3ec\ub10c\ud2b8 \ubcc0\uc218 \uc0dd\uc131.md","sourceDirName":"react/2. State","slug":"/react/State/2-7. useRef \uc18c\uac1c\uc640 useState \ub300\uc2e0 \ucef4\ud3ec\ub10c\ud2b8 \ubcc0\uc218 \uc0dd\uc131","permalink":"/react/State/2-7. useRef \uc18c\uac1c\uc640 useState \ub300\uc2e0 \ucef4\ud3ec\ub10c\ud2b8 \ubcc0\uc218 \uc0dd\uc131","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docSidebar","previous":{"title":"\uc5f0\uad00\ub41c \uc0c1\ud0dc\uc758 \ub2e8\uc21c\ud654\uc640 \uac1d\uccb4\ud654","permalink":"/react/State/2-6. \uc5f0\uad00\ub41c \uc0c1\ud0dc\uc758 \ub2e8\uc21c\ud654\uc640 \uac1d\uccb4\ud654"},"next":{"title":"\uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \ud568\uc218\uc758 \ube44\ub3d9\uae30 \ud2b9\uc131\uacfc \uc774\uc804 \uc0c1\ud0dc \ud65c\uc6a9, \uc0c1\ud0dc \ucd08\uae30\ud654","permalink":"/react/State/2-8. \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \ud568\uc218\uc758 \ube44\ub3d9\uae30 \ud2b9\uc131\uacfc \uc774\uc804 \uc0c1\ud0dc \ud65c\uc6a9, \uc0c1\ud0dc \ucd08\uae30\ud654"}}');var c=s(74848),r=s(28453);const d={},u="useRef \uc18c\uac1c\uc640 useState \ub300\uc2e0 \ucef4\ud3ec\ub10c\ud2b8 \ubcc0\uc218 \uc0dd\uc131",i={},l=[{value:"useRef\ub780?",id:"useref\ub780",level:2},{value:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95",id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",level:3},{value:"useRef\uc640 useState\uc758 \ucc28\uc774\uc810",id:"useref\uc640-usestate\uc758-\ucc28\uc774\uc810",level:2},{value:"\uc608\uc81c: useRef\ub85c useState \ub300\uccb4\ud558\uae30",id:"\uc608\uc81c-useref\ub85c-usestate-\ub300\uccb4\ud558\uae30",level:3},{value:"\uc8fc\uc758\ud560 \uc810",id:"\uc8fc\uc758\ud560-\uc810",level:2},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\ub0b4\uc6a9 \uc694\uc57d\uacfc \ub2e4\uc74c \uc8fc\uc81c",id:"\ub0b4\uc6a9-\uc694\uc57d\uacfc-\ub2e4\uc74c-\uc8fc\uc81c",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"useref-\uc18c\uac1c\uc640-usestate-\ub300\uc2e0-\ucef4\ud3ec\ub10c\ud2b8-\ubcc0\uc218-\uc0dd\uc131",children:"useRef \uc18c\uac1c\uc640 useState \ub300\uc2e0 \ucef4\ud3ec\ub10c\ud2b8 \ubcc0\uc218 \uc0dd\uc131"})}),"\n",(0,c.jsx)(n.h2,{id:"useref\ub780",children:"useRef\ub780?"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useRef"}),"\ub294 React\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ud6c5(hook)\uc73c\ub85c, \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c DOM \uc694\uc18c\ub098 \uc5b4\ub5a4 \uac12\uc744 \uae30\uc5b5\ud558\uace0 \uc2f6\uc744 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. ",(0,c.jsx)(n.code,{children:"useRef"}),"\ub294 \ud074\ub798\uc2a4\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c ",(0,c.jsx)(n.code,{children:"ref"}),"\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uacfc \uc720\uc0ac\ud569\ub2c8\ub2e4. \uc8fc\ub85c DOM \uc694\uc18c\ub97c \uc870\uc791\ud558\uac70\ub098, \uc0c1\ud0dc \ubcc0\ud654 \uc5c6\uc774 \uac12\uc744 \uc800\uc7a5\ud560 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.h3,{id:"\uae30\ubcf8-\uc0ac\uc6a9\ubc95",children:"\uae30\ubcf8 \uc0ac\uc6a9\ubc95"}),"\n",(0,c.jsxs)(n.p,{children:["\uc6b0\uc120, ",(0,c.jsx)(n.code,{children:"useRef"}),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uae30\ubcf8\uc801\uc778 \uc608\uc81c\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"import React, { useRef } from 'react';\n\nfunction FocusInput() {\n  const inputRef = useRef(null);\n\n  const handleButtonClick = () => {\n    inputRef.current.focus();\n  };\n\n  return (\n    <div>\n      <input ref={inputRef} type=\"text\" />\n      <button onClick={handleButtonClick}>Focus the input</button>\n    </div>\n  );\n}\n\nexport default FocusInput;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\uc704 \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,c.jsx)(n.code,{children:"inputRef"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,c.jsx)(n.code,{children:"input"})," \uc694\uc18c\uc5d0 \uc811\uadfc\ud558\uace0, \ubc84\ud2bc\uc744 \ud074\ub9ad\ud588\uc744 \ub54c \ud574\ub2f9 ",(0,c.jsx)(n.code,{children:"input"})," \uc694\uc18c\uc5d0 \ud3ec\ucee4\uc2a4\ub97c \ub9de\ucd94\ub294 \ub3d9\uc791\uc744 \ud569\ub2c8\ub2e4. ",(0,c.jsx)(n.code,{children:"useRef"}),"\ub97c \ud1b5\ud574 \uc0dd\uc131\ub41c \uac1d\uccb4\ub294 ",(0,c.jsx)(n.code,{children:".current"}),"\ub77c\ub294 \ud504\ub85c\ud37c\ud2f0\ub97c \uac00\uc9c0\uba70, \uc774\ub97c \ud1b5\ud574 \uc2e4\uc81c DOM \uc694\uc18c\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.h2,{id:"useref\uc640-usestate\uc758-\ucc28\uc774\uc810",children:"useRef\uc640 useState\uc758 \ucc28\uc774\uc810"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useState"}),"\uc640 ",(0,c.jsx)(n.code,{children:"useRef"}),"\ub294 \uac12\uc758 \uc800\uc7a5\uc774\ub77c\ub294 \uacf5\ud1b5\uc810\uc774 \uc788\uc9c0\ub9cc, \ub2e4\uc74c\uacfc \uac19\uc740 \ucc28\uc774\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\ub9ac\ub80c\ub354\ub9c1"}),": ",(0,c.jsx)(n.code,{children:"useState"}),"\ub294 \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub418\uba74 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9ac\ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4. \ubc18\uba74, ",(0,c.jsx)(n.code,{children:"useRef"}),"\ub294 \uac12\uc774 \ubcc0\uacbd\ub418\uc5b4\ub3c4 \ub9ac\ub80c\ub354\ub9c1\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\ubaa9\uc801"}),": ",(0,c.jsx)(n.code,{children:"useState"}),"\ub294 \uc8fc\ub85c UI \uc5c5\ub370\uc774\ud2b8\uac00 \ud544\uc694\ud55c \uc0c1\ud0dc \uac12\uc744 \uad00\ub9ac\ud560 \ub54c \uc0ac\uc6a9\ud558\uace0, ",(0,c.jsx)(n.code,{children:"useRef"}),"\ub294 DOM \uc811\uadfc\uc774\ub098 \uc0c1\ud0dc \ubcc0\uacbd\uacfc \uad00\uacc4\uc5c6\uc774 \uac12\uc744 \uc720\uc9c0\ud558\uace0 \uc2f6\uc744 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\uc608\uc81c-useref\ub85c-usestate-\ub300\uccb4\ud558\uae30",children:"\uc608\uc81c: useRef\ub85c useState \ub300\uccb4\ud558\uae30"}),"\n",(0,c.jsxs)(n.p,{children:["\uc544\ub798 \uc608\uc81c\ub294 ",(0,c.jsx)(n.code,{children:"useState"})," \ub300\uc2e0 ",(0,c.jsx)(n.code,{children:"useRef"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac12\uc774 \ubcc0\uacbd\ub418\uc5b4\ub3c4 \ub9ac\ub80c\ub354\ub9c1\ub418\uc9c0 \uc54a\ub294 \uc0c1\ud669\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"import React, { useRef, useState } from 'react';\n\nfunction Counter() {\n  const countRef = useRef(0);\n  const [, forceUpdate] = useState();\n\n  const handleClick = () => {\n    countRef.current += 1;\n    forceUpdate({});\n  };\n\n  return (\n    <div>\n      <p>Count: {countRef.current}</p>\n      <button onClick={handleClick}>Increment</button>\n    </div>\n  );\n}\n\nexport default Counter;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\uc704 \uc608\uc81c\uc5d0\uc11c ",(0,c.jsx)(n.code,{children:"countRef"}),"\ub294 ",(0,c.jsx)(n.code,{children:"useRef"}),"\ub85c \uc0dd\uc131\ub41c \uac12\uc785\ub2c8\ub2e4. \ubc84\ud2bc\uc744 \ud074\ub9ad\ud560 \ub54c\ub9c8\ub2e4 ",(0,c.jsx)(n.code,{children:"countRef.current"}),"\uc758 \uac12\uc774 \uc99d\uac00\ud558\uc9c0\ub9cc, \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub9ac\ub80c\ub354\ub9c1\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub300\uc2e0, ",(0,c.jsx)(n.code,{children:"forceUpdate"}),"\ub77c\ub294 \ube48 \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uc5ec \uac15\uc81c\ub85c \ub9ac\ub80c\ub354\ub9c1\uc744 \ud2b8\ub9ac\uac70\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.h2,{id:"\uc8fc\uc758\ud560-\uc810",children:"\uc8fc\uc758\ud560 \uc810"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useRef"}),"\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc8fc\uc758\ud574\uc57c \ud560 \uba87 \uac00\uc9c0 \uc0ac\ud56d\uc774 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"DOM \uc694\uc18c \uc870\uc791"}),": \uc9c1\uc811 DOM \uc694\uc18c\ub97c \uc870\uc791\ud558\ub294 \uac83\uc740 React\uc758 \uc120\uc5b8\ud615 \ud504\ub85c\uadf8\ub798\ubc0d \ud328\ub7ec\ub2e4\uc784\uc5d0 \ub9de\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud544\uc694\ud560 \ub54c\ub9cc \uc0ac\uc6a9\ud558\uace0, \uac00\ub2a5\ud55c \ud55c \uc0c1\ud0dc\ub97c \ud1b5\ud574 UI\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub3c4\ub85d \ud558\uc138\uc694."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\ub9ac\ub80c\ub354\ub9c1\uacfc \uc0c1\ud0dc \uad00\ub9ac"}),": ",(0,c.jsx)(n.code,{children:"useRef"}),"\ub294 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uac12\uc774 \ubcc0\uacbd\ub418\uc5b4\ub3c4 UI\uc5d0 \ubc18\uc601\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c UI \uc5c5\ub370\uc774\ud2b8\uac00 \ud544\uc694\ud55c \uac12\uc740 ",(0,c.jsx)(n.code,{children:"useState"}),"\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"React \uacf5\uc2dd \ubb38\uc11c"}),": React ",(0,c.jsx)(n.a,{href:"https://react.dev",children:"useRef"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\ub9ac\uc561\ud2b8 \uc0c1\ud0dc \uad00\ub9ac"}),": \ub9ac\uc561\ud2b8\uc5d0\uc11c \uc0c1\ud0dc \uad00\ub9ac\uc640 \uad00\ub828\ub41c \ucd94\uac00 \uc790\ub8cc\ub97c \uc0b4\ud3b4\ubcf4\uc138\uc694."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"DOM \uc870\uc791"}),": ",(0,c.jsx)(n.code,{children:"useRef"}),"\ub97c \uc0ac\uc6a9\ud55c DOM \uc870\uc791\uc5d0 \ub300\ud574 \ub354 \uc54c\uc544\ubcf4\uc138\uc694."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\ub0b4\uc6a9-\uc694\uc57d\uacfc-\ub2e4\uc74c-\uc8fc\uc81c",children:"\ub0b4\uc6a9 \uc694\uc57d\uacfc \ub2e4\uc74c \uc8fc\uc81c"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useRef"}),"\ub294 \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c DOM \uc694\uc18c\ub098 \uac12\uc744 \uae30\uc5b5\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \ud6c5\uc785\ub2c8\ub2e4. \ub9ac\ub80c\ub354\ub9c1 \uc5c6\uc774 \uac12\uc744 \uc800\uc7a5\ud560 \uc218 \uc788\uc5b4 \uc720\uc6a9\ud558\uba70, \uc8fc\ub85c DOM \uc811\uadfc\uc774\ub098 \ube44\uc0c1\ud0dc \uac12\uc744 \uc720\uc9c0\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub2e4\uc74c \uc8fc\uc81c\uc778 ",(0,c.jsx)(n.strong,{children:"\uc774\uc804 \uc0c1\ud0dc \ud65c\uc6a9"}),"\uc5d0\uc11c\ub294 \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8 \ud568\uc218\uc5d0\uc11c \uc774\uc804 \uc0c1\ud0dc\ub97c \ud65c\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>u});var t=s(96540);const c={},r=t.createContext(c);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);