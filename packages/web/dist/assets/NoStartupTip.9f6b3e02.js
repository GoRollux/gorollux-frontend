import{v as m,_ as l,m as n}from"./index.11521da7.js";import{l as d,r as i,bm as e,j as p}from"./bundle.0b4742f1.js";import"./vue.4357b695.js";import"./ui.adf9472c.js";import"./tools.88963de1.js";import"./ethers.2df7f1ab.js";import"./wallet.9d179fd7.js";import"./inherits.5710f9ab.js";const j=d({name:"NoStartupTip",emits:["toCreate"],setup(f,s){const t=i(!1),r=i("Please do create a project before creating a bounty."),u=a=>{a&&(r.value=a),t.value=!0},o=()=>{t.value=!1},c=()=>{t.value=!1,s.emit("toCreate")};return s.expose({show:u,close:o}),()=>e(n,{show:t.value,"onUpdate:show":a=>t.value=a,maskClosable:!1,autoFocus:!1},{default:()=>[e(m,{style:{width:"540px","--n-title-text-color":"#000"},size:"huge",closable:!0,onClose:o,title:"You do need create a project at first"},{default:()=>[e("div",{class:"min-h-20 text-color2 u-h6"},[r.value]),e("div",{class:"flex mt-4 justify-end"},[e(l,{type:"primary",ghost:!0,class:"mr-4 w-41",onClick:o},{default:()=>[p("Cancel")]}),e(l,{type:"primary",class:"w-41",onClick:c},{default:()=>[p("Go to create")]})])]})]})}});export{j as default};
