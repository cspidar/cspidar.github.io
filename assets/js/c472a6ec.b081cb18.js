"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[1368],{41550:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"react/Hook/7-11. Custom Hooks\ub85c \uc0c1\ud0dc \ub85c\uc9c1 \ucd94\ucd9c","title":"Custom Hooks\ub85c \uc0c1\ud0dc \ub85c\uc9c1 \ucd94\ucd9c","description":"Custom Hooks\ub780?","source":"@site/docs/react/7. Hook/7-11. Custom Hooks\ub85c \uc0c1\ud0dc \ub85c\uc9c1 \ucd94\ucd9c.md","sourceDirName":"react/7. Hook","slug":"/react/Hook/7-11. Custom Hooks\ub85c \uc0c1\ud0dc \ub85c\uc9c1 \ucd94\ucd9c","permalink":"/react/Hook/7-11. Custom Hooks\ub85c \uc0c1\ud0dc \ub85c\uc9c1 \ucd94\ucd9c","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docSidebar","previous":{"title":"Custom Hooks \ubc18\ud658\uc758 \uc885\ub958","permalink":"/react/Hook/7-10. Custom Hooks \ubc18\ud658\uc758 \uc885\ub958"},"next":{"title":"useContext","permalink":"/react/Hook/7-2. useContext"}}');var t=o(74848),r=o(28453);const l={},a="Custom Hooks\ub85c \uc0c1\ud0dc \ub85c\uc9c1 \ucd94\ucd9c",i={},c=[{value:"Custom Hooks\ub780?",id:"custom-hooks\ub780",level:2},{value:"Custom Hooks \ub9cc\ub4e4\uae30",id:"custom-hooks-\ub9cc\ub4e4\uae30",level:2},{value:"\uc608\uc2dc 1: \uc785\ub825 \ud544\ub4dc \uc0c1\ud0dc \uad00\ub9ac",id:"\uc608\uc2dc-1-\uc785\ub825-\ud544\ub4dc-\uc0c1\ud0dc-\uad00\ub9ac",level:3},{value:"\uc608\uc2dc 2: API \ud638\ucd9c \uc0c1\ud0dc \uad00\ub9ac",id:"\uc608\uc2dc-2-api-\ud638\ucd9c-\uc0c1\ud0dc-\uad00\ub9ac",level:3},{value:"Custom Hooks\uc758 \uc7a5\uc810",id:"custom-hooks\uc758-\uc7a5\uc810",level:2},{value:"\uc8fc\uc758\ud560 \uc810",id:"\uc8fc\uc758\ud560-\uc810",level:2},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\ub0b4\uc6a9 \uc694\uc57d",id:"\ub0b4\uc6a9-\uc694\uc57d",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"custom-hooks\ub85c-\uc0c1\ud0dc-\ub85c\uc9c1-\ucd94\ucd9c",children:"Custom Hooks\ub85c \uc0c1\ud0dc \ub85c\uc9c1 \ucd94\ucd9c"})}),"\n",(0,t.jsx)(n.h2,{id:"custom-hooks\ub780",children:"Custom Hooks\ub780?"}),"\n",(0,t.jsxs)(n.p,{children:["React\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"Custom Hooks"}),"\ub294 \uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ubc18\ubcf5\ub418\ub294 \ub85c\uc9c1\uc744 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ud6cc\ub96d\ud55c \ub3c4\uad6c\uc785\ub2c8\ub2e4. \uae30\uc874\uc758 \ud6c5\ub4e4\uc744 \uc870\ud569\ud574 \ub098\ub9cc\uc758 \ud6c5\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc73c\uba70, \uc774\ub97c \ud1b5\ud574 \ucf54\ub4dc\uc758 \uc7ac\uc0ac\uc6a9\uc131\uc744 \ub192\uc774\uace0, \ucf54\ub4dc\uc758 \ubcf5\uc7a1\ub3c4\ub97c \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h2,{id:"custom-hooks-\ub9cc\ub4e4\uae30",children:"Custom Hooks \ub9cc\ub4e4\uae30"}),"\n",(0,t.jsx)(n.h3,{id:"\uc608\uc2dc-1-\uc785\ub825-\ud544\ub4dc-\uc0c1\ud0dc-\uad00\ub9ac",children:"\uc608\uc2dc 1: \uc785\ub825 \ud544\ub4dc \uc0c1\ud0dc \uad00\ub9ac"}),"\n",(0,t.jsx)(n.p,{children:"\uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc785\ub825 \ud544\ub4dc\uc758 \uac12\uc744 \uad00\ub9ac\ud574\uc57c \ud55c\ub2e4\uba74, \uc774\ub97c Custom Hook\uc73c\ub85c \ucd94\ucd9c\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c \uc608\uc2dc\ub97c \ud1b5\ud574 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'import { useState } from \'react\';\n\n// Custom Hook: useInput\nfunction useInput(initialValue) {\n  const [value, setValue] = useState(initialValue);\n\n  const handleChange = (e) => {\n    setValue(e.target.value);\n  };\n\n  return [value, handleChange];\n}\n\n// \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9 \uc608\uc2dc\nfunction InputComponent() {\n  const [name, handleNameChange] = useInput(\'\');\n  const [email, handleEmailChange] = useInput(\'\');\n\n  return (\n    <div>\n      <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />\n      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />\n    </div>\n  );\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\uc608\uc2dc-2-api-\ud638\ucd9c-\uc0c1\ud0dc-\uad00\ub9ac",children:"\uc608\uc2dc 2: API \ud638\ucd9c \uc0c1\ud0dc \uad00\ub9ac"}),"\n",(0,t.jsx)(n.p,{children:"\ub2e4\uc74c\uc740 API \ud638\ucd9c\uc744 \uc704\ud55c \uc0c1\ud0dc\uc640 \ub85c\uc9c1\uc744 Custom Hook\uc73c\ub85c \ucd94\ucd9c\ud55c \uc608\uc2dc\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ub3d9\uc77c\ud55c API \ud638\ucd9c \ub85c\uc9c1\uc744 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { useState, useEffect } from 'react';\n\n// Custom Hook: useFetch\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    fetch(url)\n      .then((response) => response.json())\n      .then((data) => {\n        setData(data);\n        setLoading(false);\n      })\n      .catch((error) => {\n        setError(error);\n        setLoading(false);\n      });\n  }, [url]);\n\n  return { data, loading, error };\n}\n\n// \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9 \uc608\uc2dc\nfunction DataFetchingComponent() {\n  const { data, loading, error } = useFetch('https://api.example.com/data');\n\n  if (loading) return <p>Loading...</p>;\n  if (error) return <p>Error: {error.message}</p>;\n\n  return (\n    <div>\n      <pre>{JSON.stringify(data, null, 2)}</pre>\n    </div>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"custom-hooks\uc758-\uc7a5\uc810",children:"Custom Hooks\uc758 \uc7a5\uc810"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\uc7ac\uc0ac\uc6a9\uc131"}),": \ubc18\ubcf5\ub418\ub294 \ub85c\uc9c1\uc744 \ucd94\ucd9c\ud574 \uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc27d\uac8c \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\uac00\ub3c5\uc131"}),": \ucf54\ub4dc\uac00 \ub2e8\uc21c\ud574\uc9c0\uace0, \uac01 \ud6c5\uc774 \ud2b9\uc815 \uae30\ub2a5\uc744 \ub2f4\ub2f9\ud558\ubbc0\ub85c \uc774\ud574\ud558\uae30 \uc26c\uc6cc\uc9d1\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\uc720\uc9c0\ubcf4\uc218\uc131"}),": \ub85c\uc9c1\uc774 \ud55c \uacf3\uc5d0 \ubaa8\uc5ec \uc788\uc5b4 \uc218\uc815\uc774 \uc6a9\uc774\ud558\uace0, \ubc84\uadf8\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \uc27d\uac8c \ucc3e\uc544\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\uc8fc\uc758\ud560-\uc810",children:"\uc8fc\uc758\ud560 \uc810"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\uc758\uc874\uc131 \ubc30\uc5f4 \uad00\ub9ac"}),": ",(0,t.jsx)(n.code,{children:"useEffect"})," \ub4f1\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc758\uc874\uc131 \ubc30\uc5f4\uc744 \uc62c\ubc14\ub974\uac8c \uad00\ub9ac\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub97c \uc18c\ud640\ud788 \ud558\uba74 \uc758\ub3c4\uce58 \uc54a\uc740 \uc7ac\ub80c\ub354\ub9c1\uc774\ub098 \ubb34\ud55c \ub8e8\ud504\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\uba85\ud655\ud55c \ud6c5\uc758 \uc5ed\ud560"}),": \uac01 Custom Hook\uc740 \ud55c \uac00\uc9c0 \uc5ed\ud560\uc5d0 \uc9d1\uc911\ud558\ub3c4\ub85d \uc124\uacc4\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec \uae30\ub2a5\uc744 \ud55c \ud6c5\uc5d0\uc11c \ucc98\ub9ac\ud558\uba74 \ubcf5\uc7a1\ud574\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"useState"}),": \uc0c1\ud0dc \uad00\ub9ac \ud6c5"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"useEffect"}),": \uc0ac\uc774\ub4dc \uc774\ud399\ud2b8 \uad00\ub9ac \ud6c5"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"React Hooks"}),": React \uacf5\uc2dd \ubb38\uc11c\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ub2e4\uc591\ud55c \ud6c5\ub4e4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"\ub9ac\uc561\ud2b8 \ucee4\uc2a4\ud140 \ud6c5"}),": Custom Hooks\uc5d0 \ub300\ud55c \uc2ec\uce35\uc801\uc778 \uc774\ud574\ub97c \ub3d5\ub294 \uc790\ub8cc"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\ub0b4\uc6a9-\uc694\uc57d",children:"\ub0b4\uc6a9 \uc694\uc57d"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Custom Hooks"}),"\ub294 React\uc5d0\uc11c \uc0c1\ud0dc \ub85c\uc9c1\uc744 \ucd94\ucd9c\ud558\uace0 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uac15\ub825\ud55c \ub3c4\uad6c\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ucf54\ub4dc\uc758 \uc7ac\uc0ac\uc6a9\uc131\uc744 \ub192\uc774\uace0 \ubcf5\uc7a1\ub3c4\ub97c \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. Custom Hook\uc744 \ub9cc\ub4dc\ub294 \ubc29\ubc95\uacfc \uc608\uc2dc\ub97c \uc0b4\ud3b4\ubcf4\uc558\uc73c\uba70, \uc8fc\uc758\ud560 \uc810\ub3c4 \ud568\uaed8 \uac15\uc870\ud588\uc2b5\ub2c8\ub2e4. Custom Hooks\ub97c \uc801\uc808\ud788 \uc0ac\uc6a9\ud558\uba74 \ub354 \uae68\ub057\ud558\uace0 \uc720\uc9c0\ubcf4\uc218\ud558\uae30 \uc26c\uc6b4 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>a});var s=o(96540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);