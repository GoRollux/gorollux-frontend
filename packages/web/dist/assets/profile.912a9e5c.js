import{r as b,m as g,_ as o}from"./index.ac02f68f.js";import{e as h}from"./vue.5bd64dc7.js";import{R as w}from"./Layout.d4f2b7f6.js";import{U as y}from"./utc.f67cb260.js";import{l as v,r as T,H as i,bm as e,j as a}from"./bundle.f4813fa2.js";import"./tools.becc2b88.js";import{l as x}from"./auth.dad759c7.js";import{u as k}from"./useTags.f9c969ef.js";import"./ui.e26017cf.js";import"./ethers.043ad920.js";import"./wallet.eb251e2a.js";import"./inherits.303311a2.js";const P="/assets/success.b45d6163.svg",A=v({name:"RegisterProfilePage",setup(){const s=h(),l=T(!1),m={timeZone:"(UTC) UTC"},r=k("comer_skill"),n=i(()=>Array.isArray(r.TagList.value)?r.TagList.value.map(t=>({label:t.name,value:t.name})):[]),u=i(()=>[{title:"Name",name:"name",required:!0,placeholder:"what do you want people to call you ?"},{title:"Location",name:"location",placeholder:"Please enter the city of residence",required:!0},{t:"select",title:"Time Zone",name:"timeZone",required:!0,options:y.map(t=>({label:t.label,value:t.label}))},{t:"website",title:"Website",name:"website",placeholder:"Your home page, blog, or company site"},{title:"Email",name:"email",required:!0,rules:[{type:"string",message:"Your contact email"},{type:"email",message:"Enter the correct email address"}],placeholder:"Your contact email"},{t:"skillTags",title:"Skills",name:"skills",required:!0,options:n.value},{t:"website",defaultValue:"",title:"Twitter",name:"twitter",placeholder:"Enter twitter"},{t:"website",defaultValue:"",title:"Discord",name:"discord",placeholder:"Enter discord"},{t:"website",defaultValue:"",title:"Telegram",name:"telegram",placeholder:"Enter telegram"},{t:"website",defaultValue:"",title:"Medium",name:"medium",placeholder:"Enter medium"},{title:"Bio",name:"bio",required:!0,type:"textarea",placeholder:"Tell us about yourself, at least 100 characters",minlength:100,rules:[{min:100,message:"Tell us about yourself, at least 100 characters"}],autosize:{minRows:5,maxRows:10}}]),c=async t=>{const f={...t,avatar:"https://comunion-avatars.s3.ap-northeast-1.amazonaws.com/avatar1.svg"};console.warn("TODO create account",f)},d=()=>{s.replace(x)},p=()=>{s.replace("/builder")};return()=>e(w,null,{default:()=>[e("div",{class:"mx-auto max-w-226 py-[10vh]"},[e("h1",{class:"u-h3"},[a("Basic Profile")]),e("p",{class:"mt-2 mb-6 text-grey2 u-h5"},[a("Add your profile, a short bio, and links to your other online websites.")]),e("div",{class:"bg-white border border-color-border rounded-sm pt-10 pb-5"},[e("div",{class:"mx-auto w-200"},[e(b,{fields:u.value,initialValues:m,submitText:"Next step",onSubmit:c},null),e(g,{show:l.value,"onUpdate:show":t=>l.value=t,closable:!1,maskClosable:!1},{default:()=>[e("div",{class:"bg-white rounded-sm flex flex-col h-88 max-w-[90%] w-150 items-center"},[e("img",{src:P,class:"h-40 mt-18 w-110"},null),e("div",{class:"flex mt-12 items-center"},[e(o,{type:"primary",ghost:!0,size:"large",onClick:d},{default:()=>[a("Welcome")]}),e(o,{class:"ml-4",type:"primary",size:"large",onClick:p},{default:()=>[a("My profile")]})])])]})])])])]})}});export{A as default};