"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[7143],{36248:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"react/Hook/7-8. useImperativeHandle","title":"useImperativeHandle","description":"useImperativeHandle \uc18c\uac1c","source":"@site/docs/react/7. Hook/7-8. useImperativeHandle.md","sourceDirName":"react/7. Hook","slug":"/react/Hook/7-8. useImperativeHandle","permalink":"/react/Hook/7-8. useImperativeHandle","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docSidebar","previous":{"title":"useLayoutEffect\uc640 useEffect\uc758 \ucc28\uc774\uc810","permalink":"/react/Hook/7-7. useLayoutEffect\uc640 useEffect\uc758 \ucc28\uc774\uc810"},"next":{"title":"Custom Hooks","permalink":"/react/Hook/7-9. Custom Hooks"}}');var s=r(74848),o=r(28453);const c={},d="useImperativeHandle",i={},l=[{value:"useImperativeHandle \uc18c\uac1c",id:"useimperativehandle-\uc18c\uac1c",level:2},{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95",level:2},{value:"\uc8fc\uc758\ud560 \uc810",id:"\uc8fc\uc758\ud560-\uc810",level:2},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\ub0b4\uc6a9 \uc694\uc57d",id:"\ub0b4\uc6a9-\uc694\uc57d",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"useimperativehandle",children:"useImperativeHandle"})}),"\n",(0,s.jsx)(n.h2,{id:"useimperativehandle-\uc18c\uac1c",children:"useImperativeHandle \uc18c\uac1c"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useImperativeHandle"}),"\uc740 React\uc758 \ud6c5(hook) \uc911 \ud558\ub098\ub85c, \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc758 \ud2b9\uc815 \uae30\ub2a5\uc744 \uc9c1\uc811\uc801\uc73c\ub85c \uc81c\uc5b4\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c, \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc790\uc2e0\uc758 \ub0b4\ubd80 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uace0, \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\ub294 props\ub97c \ud1b5\ud574 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc ",(0,s.jsx)(n.code,{children:"useImperativeHandle"}),"\uc744 \uc0ac\uc6a9\ud558\uba74 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc744 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc9c1\uc811 \ud638\ucd9c\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"\uc0ac\uc6a9\ubc95",children:"\uc0ac\uc6a9\ubc95"}),"\n",(0,s.jsxs)(n.p,{children:["\ub2e4\uc74c\uc740 ",(0,s.jsx)(n.code,{children:"useImperativeHandle"}),"\uc758 \uae30\ubcf8 \uc0ac\uc6a9\ubc95\uc785\ub2c8\ub2e4. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc758 focus \uba54\uc11c\ub4dc\ub97c \uc9c1\uc811 \ud638\ucd9c\ud558\uc5ec \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc758 input \uc694\uc18c\uc5d0 \ud3ec\ucee4\uc2a4\ub97c \uc904 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React, { useRef, useImperativeHandle, forwardRef } from 'react';\n\n// \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\nconst ChildInput = forwardRef((props, ref) => {\n  const inputRef = useRef();\n\n  useImperativeHandle(ref, () => ({\n    focus: () => {\n      inputRef.current.focus();\n    },\n  }));\n\n  return <input ref={inputRef} />;\n});\n\n// \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\nconst ParentComponent = () => {\n  const inputRef = useRef();\n\n  const handleFocus = () => {\n    inputRef.current.focus();\n  };\n\n  return (\n    <div>\n      <ChildInput ref={inputRef} />\n      <button onClick={handleFocus}>Focus Input</button>\n    </div>\n  );\n};\n\nexport default ParentComponent;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\uc704 \ucf54\ub4dc\uc5d0\uc11c ",(0,s.jsx)(n.code,{children:"ChildInput"})," \ucef4\ud3ec\ub10c\ud2b8\ub294 ",(0,s.jsx)(n.code,{children:"useImperativeHandle"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ud638\ucd9c\ud560 \uc218 \uc788\ub294 ",(0,s.jsx)(n.code,{children:"focus"})," \uba54\uc11c\ub4dc\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc778 ",(0,s.jsx)(n.code,{children:"ParentComponent"}),"\ub294 ",(0,s.jsx)(n.code,{children:"inputRef.current.focus()"}),"\ub97c \ud638\ucd9c\ud558\uc5ec \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc758 input \uc694\uc18c\uc5d0 \ud3ec\ucee4\uc2a4\ub97c \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"\uc8fc\uc758\ud560-\uc810",children:"\uc8fc\uc758\ud560 \uc810"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ucd5c\uc18c\ud55c\uc73c\ub85c \uc0ac\uc6a9\ud558\uae30"}),": ",(0,s.jsx)(n.code,{children:"useImperativeHandle"}),"\uc740 \uc9c1\uc811\uc801\uc778 DOM \uc811\uadfc\uc744 \ud5c8\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0, \uc774\ub97c \ub0a8\uc6a9\ud558\uba74 \ucef4\ud3ec\ub10c\ud2b8 \uac04\uc758 \uacb0\ud569\ub3c4\uac00 \ub192\uc544\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud544\uc694\ud560 \ub54c\ub9cc \uc0ac\uc6a9\ud558\uace0, \uac00\ub2a5\ud558\uba74 props\uc640 state\ub97c \ud1b5\ud574 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"forwardRef\uc640 \ud568\uaed8 \uc0ac\uc6a9"}),": ",(0,s.jsx)(n.code,{children:"useImperativeHandle"}),"\uc744 \uc0ac\uc6a9\ud560 \ub54c\ub294 ",(0,s.jsx)(n.code,{children:"forwardRef"}),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,s.jsx)(n.code,{children:"forwardRef"}),"\ub294 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 ref\ub97c \uc804\ub2ec\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ucea1\uc290\ud654 \uc720\uc9c0"}),": \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc790\uc2e0\uc758 \ub0b4\ubd80 \ub85c\uc9c1\uc744 \ucd5c\ub300\ud55c \ucea1\uc290\ud654\ud574\uc57c \ud558\uba70, ",(0,s.jsx)(n.code,{children:"useImperativeHandle"}),"\uc744 \ud1b5\ud574 \uc81c\uacf5\ud558\ub294 \uba54\uc11c\ub4dc\ub294 \uc2e0\uc911\ud558\uac8c \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"forwardRef"}),": \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 ref\ub97c \uc804\ub2ec\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 React \ud568\uc218."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"useRef"}),": React \ud6c5\uc73c\ub85c, \ubcc0\uc218\ub97c \uc800\uc7a5\ud558\uace0 DOM \uc694\uc18c\uc5d0 \uc811\uadfc\ud558\ub294 \ub370 \uc0ac\uc6a9."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://react.dev",children:"React \uacf5\uc2dd \ubb38\uc11c"})}),": useImperativeHandle, forwardRef"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\ub0b4\uc6a9-\uc694\uc57d",children:"\ub0b4\uc6a9 \uc694\uc57d"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useImperativeHandle"}),"\uc740 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc758 \uae30\ub2a5\uc744 \uc9c1\uc811 \uc81c\uc5b4\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 React \ud6c5\uc785\ub2c8\ub2e4. ",(0,s.jsx)(n.code,{children:"forwardRef"}),"\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uc5ec \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc758 \ud2b9\uc815 \uba54\uc11c\ub4dc\ub97c \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ud638\ucd9c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, \uc774 \ud6c5\uc740 \uc2e0\uc911\ud558\uac8c \uc0ac\uc6a9\ud574\uc57c \ud558\uba70, \uac00\ub2a5\ud55c \uacbd\uc6b0 props\uc640 state\ub97c \ud1b5\ud574 \ub370\uc774\ud130\uc640 \uae30\ub2a5\uc744 \uc804\ub2ec\ud558\ub294 \uac83\uc774 \ubc14\ub78c\uc9c1\ud569\ub2c8\ub2e4."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var t=r(96540);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);