import{v as m,_ as l,m as n}from"./index.11521da7.js";import{l as c,r as u,bm as e,j as a}from"./bundle.0b4742f1.js";import"./vue.4357b695.js";import"./ui.adf9472c.js";import"./tools.88963de1.js";import"./ethers.2df7f1ab.js";import"./wallet.9d179fd7.js";import"./inherits.5710f9ab.js";const b=c({name:"NoFollowedStartupTip",emits:["toCreate"],setup(d,s){const t=u(!1),r=()=>{t.value=!0},o=()=>{t.value=!1},p=()=>{t.value=!1,s.emit("toCreate")};return s.expose({show:r,close:o}),()=>e(n,{show:t.value,"onUpdate:show":i=>t.value=i,maskClosable:!1,autoFocus:!1},{default:()=>[e(m,{style:{width:"540px","--n-title-text-color":"#000"},size:"huge",closable:!0,onClose:o,title:"You have not joined or connected any project"},{default:()=>[e("div",{class:"mt-3 ml-12 text-grey3 u-h5"},[a("Please join or connect a project before create proposal")]),e("div",{class:"flex mt-20 justify-end"},[e(l,{type:"primary",ghost:!0,class:"h-9 mr-4 w-41",onClick:o},{default:()=>[a("Cancel")]}),e(l,{type:"primary",class:"h-9 w-41",onClick:p},{default:()=>[a("Ok")]})])]})]})}});export{b as default};
