import{O as n}from"./index.ac02f68f.js";import{r as m}from"./Empty.d0789566.js";import{l,H as u,bm as o}from"./bundle.f4813fa2.js";const x=l({props:{createdByMe:{type:Boolean,default:()=>!0},text:{type:String,default:"No activity yet"}},setup(s,p){var t,e,r;const a=u(()=>s.text),i=(r=(e=(t=p.slots).tip)==null?void 0:e.call(t))!=null?r:null;return{text:a,tip:i}},render(){return o(n,{textTip:`${this.text}`,class:"my-10"},{default:()=>[o(m,{class:"-mb-14 max-w-60"},null)],tip:()=>this.tip})}});export{x as E};