import{u as l,q as c,S as u,z as f,_ as p,a as d}from"./index.ac02f68f.js";import{e as h}from"./vue.5bd64dc7.js";import{C as v}from"./index.6e3309a0.js";import{l as g,r as b,av as x,bm as e,j as C}from"./bundle.f4813fa2.js";import{u as S,l as w}from"./auth.dad759c7.js";import"./useTags.f9c969ef.js";import"./ui.e26017cf.js";import"./tools.becc2b88.js";import"./ethers.043ad920.js";import"./wallet.eb251e2a.js";import"./inherits.303311a2.js";const V=g({setup(){const a=b(),r=x({name:""});return{form:a,formData:r}},render(){const a=[{title:"Choose your nickname",name:"name",placeholder:"EX\uFF1A John Smith",rules:[{required:!0,message:"Nickname cannot be blank",trigger:"blur"}]}],r=h(),s=l(),o=c(a),i=()=>{var t;(t=this.form)==null||t.validate(async n=>{if(!n){const{error:m}=await d["Comer@update-comer-info"]({name:this.formData.name,avatar:"https://comunion-avatars.s3.ap-northeast-1.amazonaws.com/avatar1.svg",location:"",time_zone:"",banner:""});m||(s.mergeProfile({name:this.formData.name,avatar:"https://comunion-avatars.s3.ap-northeast-1.amazonaws.com/avatar1.svg",is_seted:!0,address:"",id:0,bio:""}),await s.init(!0),S({handleloged:()=>r.replace(w),flag:"simple"}))}})};return e("div",{class:"bg-purple h-full min-h-screen text-[14px] relative"},[e("div",{class:"flex h-100vh u-page-container justify-center items-center"},[e(v,{title:"",config:{width:678}},{content:()=>e(u,{class:"mt-24px mb-40px",rules:o,model:this.formData,ref:t=>this.form=t},{default:()=>[e(f,{fields:a,values:this.formData},null)]}),footer:()=>e("div",{class:"flex justify-end"},[e(p,{onClick:i,class:"w-30",size:"small",type:"primary"},{default:()=>[C("Submit")]})])})])])}});export{V as default};
