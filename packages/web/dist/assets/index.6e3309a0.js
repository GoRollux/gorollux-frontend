import{v as i}from"./index.ac02f68f.js";import{l as a,H as s,bm as n,j as u}from"./bundle.f4813fa2.js";const f=a({name:"DialogContent",props:{content:{type:String,default:()=>""},title:{type:String,require:!0},config:{type:Object,require:!0}},setup(e,o){const l=s(()=>{var t;return{width:`${(t=e.config)==null?void 0:t.width}px`}});return()=>n(i,{style:{...l.value,"--n-title-text-color":"#000"},title:e.title,bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:()=>{var t,r;return[n("div",null,[typeof o.slots.content=="function"?o.slots.content():n("p",null,[u(" "),e.content]),(r=(t=o.slots).footer)==null?void 0:r.call(t)])]}})}});export{f as C};