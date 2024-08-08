import{I as m,H as L,Q as A,J as B,F,a as T}from"./index.11521da7.js";import{S as z,d as H}from"./index.f75981ea.js";import{B as M}from"./index.35efb195.js";import{l as w,bm as t,H as x,r as d,av as O,w as f,t as E,$ as I,q as P}from"./bundle.0b4742f1.js";import{u as U}from"./useTags.27a17cd5.js";import"./vue.4357b695.js";import"./ui.adf9472c.js";import"./tools.88963de1.js";import"./ethers.2df7f1ab.js";import"./wallet.9d179fd7.js";import"./inherits.5710f9ab.js";import"./Stage.cda5d4a6.js";import"./index.84898ac6.js";import"./bounty.b5687463.js";import"./index.8b6dd20c.js";import"./etherscan.ea908b3c.js";const D=w({name:"StartupSkeleton",setup(l){return()=>t("div",{class:"bg-white rounded-md h-33 mb-1.5rem px-10 pt-2rem"},[t("div",{class:"flex "},[t(m,{class:"rounded-md mr-3",width:"3.75rem",height:"3.75rem"},null),t("div",{class:"flex-1"},[t("div",{class:"flex"},[t("div",{class:"flex-1 mb-2"},[t(m,{height:"1.25rem",width:"9rem"},null)]),t(m,{height:"1.25rem",width:"3.75rem"},null)]),t(m,{class:"mb-2",height:"1.25rem",width:"60%"},null),t(m,{height:"2.6rem",width:"90%"},null)])])])}}),N=w({name:"BountyFilterStatus",props:{value:{type:Array},showLength:{type:Number,default:10}},emits:["change"],setup(l,s){const o=x(()=>[{name:"Ongoing"},{name:"Others"}]),u=c=>{var n;(n=l.value)!=null&&n.includes(c.name)?s.emit("change",l.value.filter(g=>g!==c.name)):s.emit("change",[...l.value||[],c.name])},a=d(!1);return{list:o,showAll:a,handleClick:u}},render(){return t("div",{class:"flex flex-wrap gap-2"},[this.list.map((l,s)=>{var o;return(this.showAll||s<this.showLength)&&t(L,{class:"text-color1 cursor-pointer hover:text-primary"+((o=this.value)!=null&&o.includes(l.name)?" text-primary !border-primary":""),onClick:()=>this.handleClick(l)},{default:()=>[l.name]})}),this.list.length-this.showLength>0?t(L,{class:"cursor-pointer !border-0 hover:text-primary",onClick:()=>this.showAll=!this.showAll},{default:()=>[this.showAll?"Less Tag":"More Tag"]}):null])}}),ae=w({name:"BountyPage",setup(){const l=A(),s=d([]),o=d(""),u=d([]),a=O({size:10,total:0,page:1,loading:!1}),c=U("comer_skill"),n=d([]),g=e=>{const r={Ongoing:[1,2],Others:[3,4]};return e.map(i=>r[i]||[]).flat()},S=async e=>{const{error:r,data:i}=await T["Bounty@get-bounties"]({page:a.page,size:a.size,tags:s.value,keyword:o.value,status:g(n.value)});r||(e?u.value=i.list||[]:u.value.push(...i.list||[]),a.total=i==null?void 0:i.total)},h=async(e,r)=>{a.loading=!0,a.page=e,await S(r),a.loading=!1},b=H(h);f(()=>s.value,()=>b(1,!0)),f(()=>o.value,()=>b(1,!0)),f(()=>n.value,()=>h(1,!0));const k=x(()=>(a.page||0)*(a.size||0)>=(a.total||0));let y=0,p=document.body;const v=()=>{if(!a.loading){const e=p==null?void 0:p.getBoundingClientRect();e.height+e.top-y<240&&(k.value?document.removeEventListener("scroll",v):(a.page++,h(a.page)))}};E(()=>{I(()=>{y=window.innerHeight,p=document.body,document.addEventListener("scroll",v),h(a.page)})}),P(()=>{document.removeEventListener("scroll",v),l.unsubscribe("startup",1)}),l.init().then(e=>{console.log(e),l.subscribe("bounty",1,r=>{console.log("subscribe bounty list",r)})});const C=e=>{n.value=e};return()=>t(F,{show:a.loading},{default:()=>[t("div",{class:"flex mb-3 items-end"},[t("div",{class:"flex-1"},[t(N,{value:n.value,onChange:C},null)]),t(B,{options:(c.TagList.value||[]).map(e=>({label:e.name,value:e.name})),multiple:!0,placeholder:"Filter",class:"rounded mr-4 min-w-37 w-auto",clearable:!0,value:s.value,"onUpdate:value":e=>s.value=e},null),t(z,{value:o.value,"onUpdate:value":e=>o.value=e,placeholder:"Search",loading:a.loading},null)]),u.value.map(e=>t(M,{key:e.id,info:e},null)),a.loading&&new Array(a.size).fill("").map(e=>t(D,null,null))]})}});export{ae as default};
