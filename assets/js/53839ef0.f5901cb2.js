"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[7044],{13366:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>f,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"react/Hook/7-7. useLayoutEffect\uc640 useEffect\uc758 \ucc28\uc774\uc810","title":"useLayoutEffect\uc640 useEffect\uc758 \ucc28\uc774\uc810","description":"React\uc5d0\uc11c\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub80c\ub354\ub9c1 \ud6c4 \ud2b9\uc815 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uae30 \uc704\ud574 useEffect\uc640 useLayoutEffect\ub77c\ub294 \ub450 \uac00\uc9c0 \ud6c5(Hook)\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 \ub450 \ud6c5\uc758 \ucc28\uc774\ub97c \uc774\ud574\ud558\uace0 \uc801\uc808\ud558\uac8c \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc131\ub2a5 \ucd5c\uc801\ud654\uc640 \uc62c\ubc14\ub978 \ub3d9\uc791\uc744 \uc704\ud574 \ub9e4\uc6b0 \uc911\uc694\ud569\ub2c8\ub2e4.","source":"@site/docs/react/7. Hook/7-7. useLayoutEffect\uc640 useEffect\uc758 \ucc28\uc774\uc810.md","sourceDirName":"react/7. Hook","slug":"/react/Hook/7-7. useLayoutEffect\uc640 useEffect\uc758 \ucc28\uc774\uc810","permalink":"/react/Hook/7-7. useLayoutEffect\uc640 useEffect\uc758 \ucc28\uc774\uc810","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docSidebar","previous":{"title":"useLayoutEffect","permalink":"/react/Hook/7-6. useLayoutEffect"},"next":{"title":"useImperativeHandle","permalink":"/react/Hook/7-8. useImperativeHandle"}}');var c=t(74848),r=t(28453);const l={},o="useLayoutEffect\uc640 useEffect\uc758 \ucc28\uc774\uc810",f={},u=[{value:"useEffect\uc640 useLayoutEffect\ub780?",id:"useeffect\uc640-uselayouteffect\ub780",level:2},{value:"\ub450 \ud6c5\uc758 \ucc28\uc774\uc810",id:"\ub450-\ud6c5\uc758-\ucc28\uc774\uc810",level:2},{value:"1. \uc2e4\ud589 \uc2dc\uc810",id:"1-\uc2e4\ud589-\uc2dc\uc810",level:3},{value:"2. \uc6a9\ub3c4",id:"2-\uc6a9\ub3c4",level:3},{value:"\ucf54\ub4dc \uc608\uc2dc",id:"\ucf54\ub4dc-\uc608\uc2dc",level:3},{value:"\uc8fc\uc758\uc0ac\ud56d",id:"\uc8fc\uc758\uc0ac\ud56d",level:3},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\ub0b4\uc6a9 \uc694\uc57d",id:"\ub0b4\uc6a9-\uc694\uc57d",level:2}];function i(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.header,{children:(0,c.jsx)(s.h1,{id:"uselayouteffect\uc640-useeffect\uc758-\ucc28\uc774\uc810",children:"useLayoutEffect\uc640 useEffect\uc758 \ucc28\uc774\uc810"})}),"\n",(0,c.jsxs)(s.p,{children:["React\uc5d0\uc11c\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub80c\ub354\ub9c1 \ud6c4 \ud2b9\uc815 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uae30 \uc704\ud574 ",(0,c.jsx)(s.code,{children:"useEffect"}),"\uc640 ",(0,c.jsx)(s.code,{children:"useLayoutEffect"}),"\ub77c\ub294 \ub450 \uac00\uc9c0 \ud6c5(Hook)\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 \ub450 \ud6c5\uc758 \ucc28\uc774\ub97c \uc774\ud574\ud558\uace0 \uc801\uc808\ud558\uac8c \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uc131\ub2a5 \ucd5c\uc801\ud654\uc640 \uc62c\ubc14\ub978 \ub3d9\uc791\uc744 \uc704\ud574 \ub9e4\uc6b0 \uc911\uc694\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(s.h2,{id:"useeffect\uc640-uselayouteffect\ub780",children:"useEffect\uc640 useLayoutEffect\ub780?"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"useEffect"}),": \uc774 \ud6c5\uc740 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1\ub41c \uc774\ud6c4\uc5d0 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc8fc\ub85c \ub370\uc774\ud130 \uac00\uc838\uc624\uae30, \uad6c\ub3c5 \uc124\uc815, DOM \uc5c5\ub370\uc774\ud2b8\uc640 \uac19\uc740 \uc791\uc5c5\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"useLayoutEffect"}),": \uc774 \ud6c5\uc740 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1\ub41c \uc9c1\ud6c4, \uadf8\ub9ac\uace0 \ube0c\ub77c\uc6b0\uc800\uac00 \ud654\uba74\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc804\uc5d0 \ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4. \ub808\uc774\uc544\uc6c3\uc744 \uce21\uc815\ud558\uac70\ub098 DOM \ubcc0\uacbd\uc774 \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\ub450-\ud6c5\uc758-\ucc28\uc774\uc810",children:"\ub450 \ud6c5\uc758 \ucc28\uc774\uc810"}),"\n",(0,c.jsx)(s.h3,{id:"1-\uc2e4\ud589-\uc2dc\uc810",children:"1. \uc2e4\ud589 \uc2dc\uc810"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"useEffect"}),": \ud654\uba74 \uc5c5\ub370\uc774\ud2b8 \ud6c4 \uc2e4\ud589\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774 \ud6c5\uc744 \uc0ac\uc6a9\ud558\uba74 \ube0c\ub77c\uc6b0\uc800\uac00 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcc0\uacbd\uc0ac\ud56d\uc744 \uba3c\uc800 \ubcf4\uc5ec\uc8fc\uace0 \uadf8 \ub2e4\uc74c\uc5d0 \ud6a8\uacfc\ub97c \uc801\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"useLayoutEffect"}),": \ud654\uba74 \uc5c5\ub370\uc774\ud2b8 \uc804\uc5d0 \uc2e4\ud589\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774 \ud6c5\uc744 \uc0ac\uc6a9\ud558\uba74 DOM \uc5c5\ub370\uc774\ud2b8\uac00 \ube14\ub85d\ub418\uba70, \uadf8 \ud6c4\uc5d0 \ube0c\ub77c\uc6b0\uc800\uac00 \ubcc0\uacbd\uc0ac\ud56d\uc744 \ud654\uba74\uc5d0 \ud45c\uc2dc\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"2-\uc6a9\ub3c4",children:"2. \uc6a9\ub3c4"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"useEffect"}),": \ube44\ub3d9\uae30 \uc791\uc5c5\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uac70\ub098 \ud0c0\uc774\uba38\ub97c \uc124\uc815\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"useLayoutEffect"}),": \ub3d9\uae30 \uc791\uc5c5\uc5d0 \uc801\ud569\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ub808\uc774\uc544\uc6c3\uc744 \uce21\uc815\ud558\uac70\ub098 \ud654\uba74\uc5d0 \ubcf4\uc774\uae30 \uc804\uc5d0 DOM\uc744 \uc9c1\uc811 \uc870\uc791\ud574\uc57c \ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsx)(s.h3,{id:"\ucf54\ub4dc-\uc608\uc2dc",children:"\ucf54\ub4dc \uc608\uc2dc"}),"\n",(0,c.jsxs)(s.p,{children:["\ub2e4\uc74c\uc740 ",(0,c.jsx)(s.code,{children:"useEffect"}),"\uc640 ",(0,c.jsx)(s.code,{children:"useLayoutEffect"}),"\uc758 \ucc28\uc774\ub97c \ubcf4\uc5ec\uc8fc\ub294 \uac04\ub2e8\ud55c \ucf54\ub4dc \uc608\uc2dc\uc785\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-jsx",children:"import React, { useEffect, useLayoutEffect, useRef } from 'react';\n\nfunction LayoutEffectExample() {\n  const divRef = useRef();\n\n  useLayoutEffect(() => {\n    console.log('useLayoutEffect');\n    divRef.current.style.color = 'red';\n  }, []);\n\n  useEffect(() => {\n    console.log('useEffect');\n    divRef.current.style.color = 'blue';\n  }, []);\n\n  return <div ref={divRef}>Hello, World!</div>;\n}\n\nexport default LayoutEffectExample;\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\uc774 \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,c.jsx)(s.code,{children:"useLayoutEffect"}),"\uac00 \uba3c\uc800 \uc2e4\ud589\ub418\uc5b4 ",(0,c.jsx)(s.code,{children:"div"})," \uc694\uc18c\uc758 \ud14d\uc2a4\ud2b8 \uc0c9\uc0c1\uc744 \ube68\uac04\uc0c9\uc73c\ub85c \ubcc0\uacbd\ud55c \ud6c4, ",(0,c.jsx)(s.code,{children:"useEffect"}),"\uac00 \uc2e4\ud589\ub418\uc5b4 \ud14d\uc2a4\ud2b8 \uc0c9\uc0c1\uc744 \ud30c\ub780\uc0c9\uc73c\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4. \uacb0\uacfc\uc801\uc73c\ub85c, \ud654\uba74\uc5d0 \ubcf4\uc774\ub294 \ud14d\uc2a4\ud2b8 \uc0c9\uc0c1\uc740 \ud30c\ub780\uc0c9\uc774 \ub429\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(s.h3,{id:"\uc8fc\uc758\uc0ac\ud56d",children:"\uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"\uc131\ub2a5 \uace0\ub824"}),": ",(0,c.jsx)(s.code,{children:"useLayoutEffect"}),"\ub294 \ub80c\ub354\ub9c1\uc744 \ube14\ub85d\ud558\uae30 \ub54c\ubb38\uc5d0 \ubd80\uc801\uc808\ud558\uac8c \uc0ac\uc6a9\ud558\uba74 \uc131\ub2a5 \uc800\ud558\ub97c \ucd08\ub798\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uaf2d \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"\uc758\uc874\uc131 \ubc30\uc5f4"}),": \ub450 \ud6c5 \ubaa8\ub450 \uc758\uc874\uc131 \ubc30\uc5f4\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc758\uc874\uc131 \ubc30\uc5f4\uc744 \uc815\ud655\ud558\uac8c \uc9c0\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"React Hook"}),": ",(0,c.jsx)(s.a,{href:"https://react.dev",children:"React \uacf5\uc2dd \ubb38\uc11c"}),"\uc5d0\uc11c \ub2e4\uc591\ud55c \ud6c5\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc138\uc694."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"useEffect"}),": ",(0,c.jsx)(s.a,{href:"https://react.dev",children:"useEffect API"}),"\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"useLayoutEffect"}),": ",(0,c.jsx)(s.a,{href:"https://react.dev",children:"useLayoutEffect API"}),"\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uc138\uc694."]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.strong,{children:"\uc131\ub2a5 \ucd5c\uc801\ud654"}),": ",(0,c.jsx)(s.a,{href:"https://react.dev",children:"React \uc131\ub2a5 \ucd5c\uc801\ud654"}),"\uc5d0 \ub300\ud574 \ub354 \uc54c\uc544\ubcf4\uc138\uc694."]}),"\n"]}),"\n",(0,c.jsx)(s.h2,{id:"\ub0b4\uc6a9-\uc694\uc57d",children:"\ub0b4\uc6a9 \uc694\uc57d"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"useEffect"}),"\uc640 ",(0,c.jsx)(s.code,{children:"useLayoutEffect"}),"\ub294 React\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub80c\ub354\ub9c1 \ud6c4 \ud2b9\uc815 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uae30 \uc704\ud55c \ud6c5\uc785\ub2c8\ub2e4. ",(0,c.jsx)(s.code,{children:"useEffect"}),"\ub294 \ud654\uba74 \uc5c5\ub370\uc774\ud2b8 \ud6c4 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub418\ub294 \ubc18\uba74, ",(0,c.jsx)(s.code,{children:"useLayoutEffect"}),"\ub294 \ud654\uba74 \uc5c5\ub370\uc774\ud2b8 \uc804\uc5d0 \ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4. \ub450 \ud6c5\uc740 \uac01\uac01 \ube44\ub3d9\uae30 \uc791\uc5c5\uacfc \ub3d9\uae30 \uc791\uc5c5\uc5d0 \uc801\ud569\ud558\uba70, \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \uc704\ud574 \uc801\uc808\ud558\uac8c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."]})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>o});var n=t(96540);const c={},r=n.createContext(c);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);