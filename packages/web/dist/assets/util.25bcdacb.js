import{e as i}from"./index.ac02f68f.js";const s=(l,e)=>{var a;const t=(a=i.find(o=>o.chainId===l))==null?void 0:a.explorerUrl;t&&window.open(`${t}/tx/${e}`,e)},r=[{label:"Email",value:1,name:"email"},{label:"Website",value:2,name:"website"},{label:"Twitter",value:3,name:"twitter"},{label:"Discord",value:4,name:"discord"},{label:"Telegram",value:5,name:"telegram"},{label:"Medium",value:6,name:"medium"},{label:"Facebook",value:7,name:"facebook"},{label:"Linktree",value:8,name:"linktree"},{label:"Youtube",value:9,name:"youtube"},{label:"Reddit",value:10,name:"reddit"},{label:"Docs",value:11,name:"docs"}],b=l=>{const e=Array.isArray(l)?l:[];return r.map(t=>{const a=e.findIndex(o=>{var n;return((n=o.social_tool)==null?void 0:n.name)===t.label});return{social_tool_id:a===-1?void 0:e[a].social_tool_id,type:t.value,value:a===-1?void 0:e[a].value,label:t.label}})},c=l=>r.find(e=>e.value===Number(l));export{c as a,s as b,r as c,b as g};
