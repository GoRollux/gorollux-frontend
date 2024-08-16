import{b as q,q as Z,z as ee,S as Y,a as V,n as $,U as B,P as te,w as z,u as se,m as oe,v as re,_ as P,F as ae,h as A,V as le}from"./index.ac02f68f.js";import{cw as ne,cx as ie,cy as ce,l as R,r as w,H as W,bm as t,w as pe,j as I,cs as d,av as ue,t as de}from"./bundle.f4813fa2.js";import{R as fe}from"./index.160e8328.js";import{u as me}from"./erc20.e9c36ea3.js";import{a as he}from"./ethers.043ad920.js";import{r as ve,a as ge}from"./MinusCircle.5e3a505f.js";import{r as be}from"./ArrowDown.fce4ad7c.js";import{r as ye}from"./Confirm.fc9e96f5.js";import{g as we}from"./ipfs.b0370acf.js";ne({dsn:"https://7b4bfa4ab1f34120928729ddd18c688c@o1424894.ingest.sentry.io/6773130",integrations:[new ie],tracesSampleRate:1});const G=(s,o)=>{ce(JSON.stringify({err:s.message,data:o}))},Ie=R({name:"BasicInfo",props:{startupOptions:{type:Array,required:!0},proposalInfo:{type:Object,required:!0}},setup(s,o){const r=me(),a=q(),p=w(null),_=async n=>{switch(n==null?void 0:n.strategyName){case"ticket":return 1;case"erc20-balance-of":{if(n.tokenContractAddress){const l=a.address,e=a.getRpcProvider(n.chainId,$),b=await r(n.tokenContractAddress,e).balanceOf(l);return he(b,n.voteDecimals)}return 0}default:return 0}},g=W(()=>[{t:"select",title:"Project",name:"startup_id",placeholder:"Select a project",rules:[{required:!0,message:"Project cannot be blank.",type:"number",trigger:"blur"},{asyncValidator:async(n,l,e)=>{var m,b;if(!!l)try{const{error:y,data:h}=await V["Governance@get-governance-setting"]({startup_id:l});if(!y&&h){const i=(b=h.strategies)==null?void 0:b[((m=h.strategies)==null?void 0:m.length)-1],S=await _({chainId:i.chain_id,strategyName:i==null?void 0:i.strategy_name,voteDecimals:i==null?void 0:i.vote_decimals,tokenContractAddress:i==null?void 0:i.token_contract_address});if(console.log("votePower===>",S),S<h.proposalThreshold){e(`You need to have a minimum of ${h.proposalThreshold} ${h.voteSymbol} in order to submit a proposal.`);return}}e()}catch(y){console.error("error==>",y),e(y)}},trigger:"blur"}],options:s.startupOptions},{t:"string",title:"Title",name:"title",formItemProps:{first:!0},rules:[{required:!0,message:"Title cannot be blank",trigger:"blur"},{validator:(n,l)=>l.length>=12,message:"Title must be 12 characters or more",trigger:"blur"}],placeholder:"Input proposal title",maxlength:100},{t:"custom",title:"Description",name:"description",formItemProps:{first:!0},render(){return t("div",{class:"h-60 w-full"},[t(fe,{limit:6400,placeholder:"Much more details to description this proposal",class:"h-full w-full",value:s.proposalInfo.description,"onUpdate:value":n=>s.proposalInfo.description=n},null)])},rules:[{required:!0,message:"Description cannot be blank",trigger:"blur"}]},{t:"string",title:"Discussion link",name:"discussion",placeholder:"https://...",rules:[{validator:(n,l)=>!l||l&&l.startsWith("https://"),message:"Invalid URL",trigger:"blur"}],maxlength:200}]),f=Z(g.value);return o.expose({proposalBasicInfoForm:p}),{formFields:g,proposalBasicInfoForm:p,proposalBasicInfoRules:f}},render(){return t(Y,{ref:s=>this.proposalBasicInfoForm=s,rules:this.proposalBasicInfoRules,model:this.proposalInfo},{default:()=>[t(ee,{fields:this.formFields,values:this.proposalInfo},null)]})}}),F="Basic voting",_e=R({name:"Vote",props:{proposalInfo:{type:Object,required:!0},voteOptions:{type:Array}},setup(s,o){const r=w(),a=w(!1),p=e=>{e.target.id!=="voting-field"&&(a.value=!1)};pe(()=>a.value,e=>{console.log("value===>",e),e?document.addEventListener("click",p,!0):document.removeEventListener("click",p,!0)});const _=W(()=>{var e;return console.log("voteOptions==>",s.voteOptions),console.log("props.proposalInfo===>",s.proposalInfo),(e=s.voteOptions)==null?void 0:e.find(m=>m.value===s.proposalInfo.vote)}),g=()=>{a.value=!a.value},f=e=>{e===F?s.proposalInfo.vote_choices=[{value:"Yes",disabled:!0},{value:"No",disabled:!0},{value:"Abstain",disabled:!0}]:s.proposalInfo.vote_choices=[{value:""},{value:""}],s.proposalInfo.vote=e,a.value=!1},n=()=>{var e;(e=s.proposalInfo.vote_choices)==null||e.push({value:""})},l=e=>{var b;const m=(b=s.proposalInfo.vote_choices)==null?void 0:b.filter((y,h)=>h!==e);s.proposalInfo.vote_choices=m};return o.expose({proposalVoteFormRef:r}),{showOptionsPanel:a,selectedVotingInfo:_,proposalVoteFormRef:r,triggerVoteField:g,choiceOption:f,addVoteChoices:n,delVoteChoices:l}},render(){return t(Y,{ref:s=>this.proposalVoteFormRef=s,model:this.proposalInfo},{default:()=>{var s;return[t(B,{showFeedback:!1,label:"Voting",required:!0,class:"flex flex-col mb-4 relative"},{default:()=>{var o,r;return[t("div",{class:"border rounded-sm cursor-pointer flex w-full py-2 px-4 justify-between items-center",onClick:this.triggerVoteField,id:"voting-field"},[t("div",{class:"flex flex-1 items-center"},[t("div",{class:"text-grey3 u-h5"},[I("Voting system")]),t("div",{class:"text-primary ml-2"},[(o=this.selectedVotingInfo)==null?void 0:o.label])]),t(be,{class:"h-4 text-color3 w-4"},null)]),this.showOptionsPanel&&t("div",{id:"content",class:"bg-white rounded min-h-100 p-4 inset-0 top-10 z-1 absolute",style:{boxShadow:"0px 2px 10px rgba(0, 0, 0, 0.097547)"},onClick:a=>a.stopPropagation()},[(r=this.voteOptions)==null?void 0:r.map(a=>t("div",{key:a.key,class:["mb-4 p-4 bg-white rounded flex justify-between items-center",{"border cursor-pointer":a.value!==this.proposalInfo.vote},{"bg-[#65B4001A]":a.value===this.proposalInfo.vote}],onClick:()=>this.choiceOption(a.value)},[t("div",null,[t("div",{class:"tracking-0px u-label1"},[a.label]),t("div",{class:"u-tag",style:{padding:0}},[a.remark])]),a.value===this.proposalInfo.vote&&t("div",{class:"text-primary"},[t(ye,null,null)])]))])]}}),t("div",{class:"mb-6"},[(s=this.proposalInfo.vote_choices)==null?void 0:s.map((o,r)=>{var a,p,_,g;return t("div",{class:"flex mb-3 items-center"},[t(B,{showFeedback:!1,showLabel:!1,class:[((a=this.selectedVotingInfo)==null?void 0:a.value)===F?"w-full":"w-180"],path:"vote_choices",rule:[{validator:()=>!(r===0&&!o.value)}]},{default:()=>{var f;return[t(te,{value:o.value,"onUpdate:value":n=>o.value=n,maxlength:32,disabled:o.disabled,class:[{"max-w-184":((f=this.selectedVotingInfo)==null?void 0:f.value)!==F}]},{prefix:t("div",{class:"text-grey3 w-20 u-h5"},[I("Choice "),r+1,r===0&&t("span",{class:"text-error n-form-item-label__asterisk"},[I("\xA0*")])]),suffix:t("div",{class:"pl-4 text-grey3 u-h5"},[o.value.length,I("/32")])})]}}),((p=this.selectedVotingInfo)==null?void 0:p.value)!==F&&t("div",{class:"flex flex-1 ml-4 items-center justify-start"},[r!==0&&t(ve,{class:"cursor-pointer mr-3 text-error",onClick:()=>this.delVoteChoices(r)},null),((_=this.proposalInfo.vote_choices)==null?void 0:_.length)===r+1&&((g=this.proposalInfo.vote_choices)==null?void 0:g.length)<20&&t(ge,{class:"cursor-pointer",onClick:this.addVoteChoices},null)])])})]),t("div",{class:"mb-3 u-body4"},[I("Voting period")]),t("div",{class:"flex gap-14 justify-between"},[t(B,{label:"Start Date(UTC)",labelStyle:{fontSize:"12px"},class:"w-full",path:"start_time",rule:[{required:!0,message:"Please set the start Time"},{validator:(o,r)=>!r||!this.proposalInfo.end_time?!0:d(r).isBefore(d(this.proposalInfo.end_time)),message:"Start time needs to be before End time",trigger:["blur"]}]},{default:()=>[t(z,{placeholder:"Select date",type:"datetime",value:this.proposalInfo.start_time,"onUpdate:value":o=>this.proposalInfo.start_time=o,format:"yyyy-MM-dd HH:mm",class:"w-full",isDateDisabled:o=>d(o)<d().startOf("day")},null)]}),t(B,{label:"End Date(UTC)",labelStyle:{fontSize:"12px"},class:"w-full",path:"end_time",rule:[{required:!0,message:"Please set the end time"},{validator:(o,r)=>!r||!this.proposalInfo.start_time?!0:d(r).isAfter(d(this.proposalInfo.start_time)),message:"End time needs to be after Start time",trigger:["blur"]}]},{default:()=>[t(z,{placeholder:"Select date",type:"datetime",value:this.proposalInfo.end_time,"onUpdate:value":o=>this.proposalInfo.end_time=o,format:"yyyy-MM-dd HH:mm",class:"w-full",isDateDisabled:o=>d(o)<d().startOf("day")},null)]})])]}})}}),Re={1:"px-3 rounded py-1 text-white px-2 text-xs bg-primary",2:"px-3 rounded py-1 text-white px-2 text-xs bg-[#00BFA5]",3:"px-3 rounded py-1 text-white px-2 text-xs bg-warning",4:"px-3 rounded py-1 text-white px-2 text-xs bg-grey5"},Ee={voteInfo:[{name:"From",type:"string"},{name:"Startup",type:"string"},{name:"timestamp",type:"uint256"},{name:"proposal",type:"string"},{name:"choice",type:"string"}]},xe={proposalInfo:[{name:"From",type:"string"},{name:"Startup",type:"string"},{name:"Timestamp",type:"uint256"},{name:"Type",type:"string"},{name:"Title",type:"string"},{name:"Choice",type:"string[]"},{name:"Start",type:"uint256"},{name:"End",type:"uint256"},{name:"BlockHeight",type:"uint256"},{name:"Description",type:"string"},{name:"Discussion",type:"string"}]},Se=R({name:"CreateProposalFrom",emits:["cancel"],props:{stepOptions:{type:Array,required:!0},defaultProposalInfo:{type:Object,default:{current:1,startup_id:void 0,vote:"Single choice voting",vote_choices:[{value:""},{value:""}],start_time:void 0,end_time:void 0}}},setup(s,o){const r=q(),a=se(),p=w(),_=w(),g=w(),f=w(),n=w(!1),l=we(),e=ue({...s.defaultProposalInfo}),m=()=>{n.value=!0},b=()=>{e.current-=1},y=()=>{n.value=!1,o.emit("cancel")},h=()=>{var u,c;e.current===1&&((c=(u=_.value)==null?void 0:u.proposalBasicInfoForm)==null||c.validate(v=>{v||(e.current=2)}))},i=async()=>{try{const{error:u,data:c}=await V["Comer@get-comer-joined-and-followed-startups"]();u||(p.value=((c==null?void 0:c.list)||[]).map(v=>({value:v.id,label:v.name})))}catch(u){console.error("error===>",u)}},S=async u=>{try{const{error:c,data:v}=await V["Governance@get-governance-setting"]({startup_id:u});if(!c){const{strategies:C}=v;return{chainId:C==null?void 0:C[0].chain_id}}return null}catch(c){return console.error("error==>",c),null}};de(()=>{T(),i()});const T=async()=>{try{const{error:u,data:c}=await V["DataDict@GetdataDictbydicttype"]({type:6});u||(f.value=c.map(v=>({label:v.label,value:v.label,key:v.key,remark:v.remark})))}catch{}},x=w(!1),J=async()=>{var u,c;(c=(u=g.value)==null?void 0:u.proposalVoteFormRef)==null||c.validate(async v=>{var C,U,L;if(!v){x.value=!0;const E=p.value.find(k=>k.value===e.startup_id);try{const k=await S(e.startup_id);let N;k&&(N=await((C=r.getRpcProvider(k.chainId||1,$))==null?void 0:C.getBlockNumber()));const K={name:"Comunion"},j={From:r.address,Startup:E==null?void 0:E.label,Timestamp:d().valueOf(),Type:e.vote,Title:e.title,Choice:(U=e.vote_choices)==null?void 0:U.map(D=>D.value).filter(Boolean),Start:d(e.start_time).utc().valueOf(),End:d(e.end_time).utc().valueOf(),Description:e.description||"",Discussion:e.discussion||"",BlockHeight:N};console.log("saveContent===>",j);const M=await((L=r.wallet)==null?void 0:L.signTypedData(K,xe,j));if(M){const D=await l.add(JSON.stringify({address:r.address,data:j,sig:M})).catch(O=>{console.warn("ipfsClientRes=",O),A.warning(O.message),x.value=!1});if(!D)return null;const H={author_comer_id:a.profile.id,author_wallet_address:r.address,chain_id:r.chainId,block_number:N,release_timestamp:d().utc().valueOf(),ipfs_hash:D.cid.toString(),title:e.title,startup_id:e.startup_id,description:e.description,discussion_link:e.discussion,vote_system:e.vote,start_time:d(e.start_time).utc().valueOf(),end_time:d(e.end_time).utc().valueOf(),choices:(e.vote_choices||[]).filter(O=>O.value).map((O,X)=>({item_name:O.value,seq_num:X+1}))},{error:Q}=await V["Proposal@createproposal"](H);if(Q)return x.value=!1,G(new Error("create proposal"),H);x.value=!1,A.success("Successfully create proposal."),y()}}catch(k){return console.error("submit proposal error",k),x.value=!1,G(k)}}})};return o.expose({proposalInfo:e,submitLoading:x,toPreviousStep:b,toNext:h,showLeaveTipModal:m,closeDrawer:y,onSubmit:J}),{proposalInfo:e,modalVisibleState:n,basicInfoRef:_,voteRef:g,startupOptions:p,voteOptions:f,submitLoading:x,closeDrawer:y}},render(){return t(ae,{show:this.submitLoading},{default:()=>[this.proposalInfo.current===1&&t(Ie,{startupOptions:this.startupOptions,proposalInfo:this.proposalInfo,ref:s=>this.basicInfoRef=s},null),this.proposalInfo.current===2&&t(_e,{proposalInfo:this.proposalInfo,ref:s=>this.voteRef=s,voteOptions:this.voteOptions},null),t(oe,{show:this.modalVisibleState,"onUpdate:show":s=>this.modalVisibleState=s,maskClosable:!1},{default:()=>[t(re,{style:{width:"540px","--n-title-text-color":"#000"},size:"huge",closable:!0,onClose:()=>this.modalVisibleState=!1,title:"Discard the changes?"},{default:()=>[t("div",{class:"min-h-20 text-color2 u-h6"},[I("The action cannot be undone at once you click 'Yes'!")]),t("div",{class:"flex mt-4 justify-end"},[t(P,{type:"primary",ghost:!0,class:"mr-4 w-41",onClick:()=>this.modalVisibleState=!1},{default:()=>[I("Cancel")]}),t(P,{type:"primary",class:"w-41",onClick:this.closeDrawer},{default:()=>[I("Yes")]})])]})]})]})}}),Ne=R({name:"CreateProposalBlock",setup(){const s=w(),o=w(!1),r=q(),a=w(),p=async l=>{a.value=l,await r.ensureWalletConnected(),r.isNetworkSupported?o.value=!0:(A.warning("Please switch to the supported network to create a proposal"),r.openNetworkSwitcher())},_=()=>{o.value=!1},g=()=>{var l,e;(e=(l=s.value)==null?void 0:l.showLeaveTipModal)==null||e.call(l)},f=[{name:""},{name:""}];return{show:p,close:_,visible:o,footer:()=>{var l,e,m,b,y,h,i,S,T,x;return t("div",{class:"bg-purple flex justify-end items-center pr-16 pb-4"},[((l=s.value)==null?void 0:l.proposalInfo.current)===1&&t(P,{class:"mr-4 w-40",type:"primary",ghost:!0,onClick:g},{default:()=>[I("Cancel")]}),((e=s.value)==null?void 0:e.proposalInfo.current)>1&&t(P,{class:"mr-4 w-40",type:"primary",ghost:!0,onClick:(m=s.value)==null?void 0:m.toPreviousStep},{default:()=>[I("Previous Step")]}),((b=s.value)==null?void 0:b.proposalInfo.current)<f.length&&t(P,{type:"primary",class:"w-40",onClick:(y=s.value)==null?void 0:y.toNext},{default:()=>[I("Next")]}),((h=s.value)==null?void 0:h.proposalInfo.current)===f.length&&t(P,{type:"primary",class:"w-40",onClick:(i=s.value)==null?void 0:i.onSubmit,disabled:!((T=(S=s.value)==null?void 0:S.proposalInfo.vote_choices)!=null&&T[0].value),loading:(x=s.value)==null?void 0:x.submitLoading},{default:()=>[I("Submit")]})])},createCreateProposalInfo:s,stepOptions:f,defaultProposalInfo:a}},render(){return t(le,{title:"Create Proposal",maskClosable:!1,show:this.visible,"onUpdate:show":s=>this.visible=s},{default:()=>[this.visible&&t(Se,{ref:s=>this.createCreateProposalInfo=s,stepOptions:this.stepOptions,defaultProposalInfo:this.defaultProposalInfo,onCancel:this.close},null)],whiteBoard:this.footer})}});export{Ne as C,Re as G,G as r,Ee as s};
