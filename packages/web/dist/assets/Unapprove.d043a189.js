import{b as T,h as U,v as S,m as I,D as M,q,S as P,z as H,_ as b,a as B,e as Q,u as R,l as Z,c as Y}from"./index.11521da7.js";import{u as W}from"./vue.4357b695.js";import{A as tt,M as F,a as N,b as et}from"./bountyFactory.66632fea.js";import{c as O}from"./wallet.aedd3459.js";import{H as v,cs as E,l as C,bm as n,n as D,av as x,w as z,r as j,F as A,j as m,M as L}from"./bundle.0b4742f1.js";import{U as at}from"./bounty.b5687463.js";import{p as $}from"./ethers.2df7f1ab.js";import{u as nt}from"./erc20.73151069.js";import{g as st,w as d}from"./share.5bc8e372.js";const J={},it='[{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"applyFor","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"approveApplicant","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"close","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getStore","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"depositToken","type":"address"},{"internalType":"bool","name":"depositTokenIsNative","type":"bool"},{"internalType":"uint256","name":"founderDepositAmount","type":"uint256"},{"internalType":"uint256","name":"applicantDepositMinAmount","type":"uint256"},{"internalType":"uint256","name":"applyDeadline","type":"uint256"}],"internalType":"struct Parameters","name":"_paras","type":"tuple"}],"name":"init","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"lock","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"parameters","outputs":[{"components":[{"internalType":"address","name":"depositToken","type":"address"},{"internalType":"bool","name":"depositTokenIsNative","type":"bool"},{"internalType":"uint256","name":"founderDepositAmount","type":"uint256"},{"internalType":"uint256","name":"applicantDepositMinAmount","type":"uint256"},{"internalType":"uint256","name":"applyDeadline","type":"uint256"}],"internalType":"struct Parameters","name":"_paras","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"postUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"release","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"releaseMyDeposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"state","outputs":[{"internalType":"uint8","name":"_bountyStatus","type":"uint8"},{"internalType":"uint256","name":"_applicantCount","type":"uint256"},{"internalType":"uint256","name":"_depositBalance","type":"uint256"},{"internalType":"uint256","name":"_founderDepositAmount","type":"uint256"},{"internalType":"uint256","name":"_applicantDepositAmount","type":"uint256"},{"internalType":"uint256","name":"_applicantDepositMinAmount","type":"uint256"},{"internalType":"bool","name":"_depositLock","type":"bool"},{"internalType":"uint256","name":"_timeLock","type":"uint256"},{"internalType":"uint8","name":"_myRole","type":"uint8"},{"internalType":"uint256","name":"_myDepositAmount","type":"uint256"},{"internalType":"uint8","name":"_myStatus","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newBounty","type":"address"}],"name":"transferPrimary","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"newStore","type":"address"}],"name":"transferStore","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"unapproveApplicant","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"vaultAccount","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whoAmI","outputs":[{"internalType":"uint8","name":"_role","type":"uint8"},{"internalType":"uint256","name":"_depositAmount","type":"uint256"},{"internalType":"uint8","name":"_applicantStatus","type":"uint8"}],"stateMutability":"view","type":"function"}]';function ot(t={addresses:J}){const s=T(),a=v(()=>({abi:it,addresses:J,wallet:s.wallet,chainId:s.chainId}));return{getContract:()=>st({...a.value,...t}),applyFor:d({...a.value,...t},"applyFor"),approveApplicant:d({...a.value,...t},"approveApplicant"),close:d({...a.value,...t},"close"),deposit:d({...a.value,...t},"deposit"),getStore:d({...a.value,...t},"getStore"),init:d({...a.value,...t},"init"),lock:d({...a.value,...t},"lock"),owner:d({...a.value,...t},"owner"),parameters:d({...a.value,...t},"parameters"),postUpdate:d({...a.value,...t},"postUpdate"),release:d({...a.value,...t},"release"),releaseMyDeposit:d({...a.value,...t},"releaseMyDeposit"),renounceOwnership:d({...a.value,...t},"renounceOwnership"),state:d({...a.value,...t},"state"),transferOwnership:d({...a.value,...t},"transferOwnership"),transferPrimary:d({...a.value,...t},"transferPrimary"),transferStore:d({...a.value,...t},"transferStore"),unapproveApplicant:d({...a.value,...t},"unapproveApplicant"),unlock:d({...a.value,...t},"unlock"),vaultAccount:d({...a.value,...t},"vaultAccount"),whoAmI:d({...a.value,...t},"whoAmI")}}function V(t){const s=T(),a=ot({chainId:s.chainId,addresses:{[s.chainId]:(t==null?void 0:t.contract_address)||""}}),e=nt()(tt[s.chainId]),l=async(u,p)=>e.approve(u,p).then(i=>i.wait().catch(o=>{console.warn("usdcRes err:",o)})).catch(i=>{switch(i.code){case 4001:U.error("Authorization failed");break;case-32603:U.error("MetaMask network connection failed");break;default:console.warn(`usdc.approve err with params:${u}, ${p}`,i)}}),y=v(()=>E(new Date(Number(t==null?void 0:t.expired_time))).diff(E(new Date),"day"));return{bountyContract:a,usdc:e,approve:l,gap:y,chainId:s.chainId}}const X=C({props:{visible:{type:Boolean,require:!0},title:{type:String,require:!0},content:{type:String,require:!0}},emits:["triggerDialog"],render(){const t=()=>{this.$emit("triggerDialog")};return n(I,{show:this.visible},{default:()=>[n(S,{style:{width:"600px",maxWidth:"90%","--n-title-text-color":"#000"},title:this.title,bordered:!1,size:"huge",closable:!0,onClose:t},{default:()=>[n("p",{class:"min-h-20 text-color2 u-h6"},[this.content]),this.$slots.btns&&this.$slots.btns()]})]})}});const bt=C({name:"PayDailog",props:{visible:{type:Boolean,require:!0},paymentInfo:{type:Object,require:!0},detailChainId:{type:Number,default:()=>0}},emits:["triggerDialog"],setup(t){const s=W(),a=D("paramBountyId"),r=D("refreshData"),e=x({token1_symbol:"",token2_symbol:"",token1_amount:0,token2_amount:0,transactionHash1:"",transactionHash2:""});z(()=>t.visible,i=>{var o,c,h,g;i&&(e.token1_symbol=((o=t.paymentInfo)==null?void 0:o.token1_symbol)||"",e.token2_symbol=((c=t.paymentInfo)==null?void 0:c.token2_symbol)||"",e.token1_amount=((h=t.paymentInfo)==null?void 0:h.token1_amount)||0,e.token2_amount=((g=t.paymentInfo)==null?void 0:g.token2_amount)||0,e.transactionHash1="",e.transactionHash2="")});const l=v(()=>{const i=[];return e.token1_symbol&&i.push({t:"custom",name:"token1_amount",title:"Pay amount",rules:[{validator:(o,c)=>c>0||e.token2_amount>0&&c>=0,message:"At least greater than 0 for pay amount",trigger:"blur"}],render(){return n(M,{value:e.token1_amount,"onUpdate:value":o=>e.token1_amount=o,type:"withUnit",class:"w-full",inputProps:{precision:0,min:0,max:F,class:"flex-1",parse:o=>o===null?0:Number(o)},renderUnit:()=>N(e.token1_symbol)},null)}}),e.token2_amount&&e.token2_amount>0&&i.push({t:"custom",name:"token2_amount",title:"",class:"pay_dialog_token2_amount_form_item",rules:[{validator:(o,c)=>c>0||e.token1_amount>0&&c>=0,message:"At least greater than 0 for pay amount",trigger:"blur"}],render(){return n(M,{value:e.token2_amount,"onUpdate:value":o=>e.token2_amount=o,type:"withUnit",class:" w-full",inputProps:{precision:0,min:0,max:F,class:"flex-1",parse:o=>o===null?0:Number(o)},renderUnit:()=>N(e.token2_symbol)},null)}}),e.token1_symbol&&i.push({title:"Transaction Hash",name:"transactionHash1",required:!0,placeholder:"Transaction Hash",rules:[{validator:(o,c)=>!c||/^0x([A-Fa-f0-9]{64})$/.test(c),message:"Transaction Hash incorrect",trigger:"blur"}]}),e.token2_amount&&e.token2_amount>0&&i.push({title:`${e.token2_symbol} Transaction Hash`,name:"transactionHash2",required:!0,placeholder:"Transaction Hash",rules:[{validator:(o,c)=>!c||/^0x([A-Fa-f0-9]{64})$/.test(c),message:"Transaction Hash incorrect",trigger:"blur"}]}),i}),y=v(()=>{const i=q(l.value);return console.log(i),i}),u=j(),p=v(()=>{const i=[];if(e.token1_symbol){const o=Number(e.token1_amount)||0;i.push({tokenSymbol:e.token1_symbol,tokenAmount:o,txHash:e.transactionHash1})}if(e.token2_symbol){const o=Number(e.token2_amount)||0;i.push({tokenSymbol:e.token2_symbol,tokenAmount:o,txHash:e.transactionHash2})}return JSON.stringify(i)});return{payFields:y,fields:l,form:u,formData:e,paramBountyId:a,refreshData:r,paidInfo:p,route:s}},render(){if(!this.paramBountyId||!this.paymentInfo)return null;const t=()=>{this.$emit("triggerDialog")},s=a=>async()=>{var e;if(a==="cancel"){t();return}!await O(this.detailChainId)||(e=this.form)==null||e.validate(async l=>{if(typeof l>"u"){const{error:y}=await B["Bounty@payment-bounty"]({bounty_id:this.paramBountyId,bounty_payment_terms_id:this.paymentInfo.id,paid_info:this.paidInfo});if(!y){const u=Q.find(o=>o.chainId===this.detailChainId),p=u==null?void 0:u.explorerUrl,{error:i}=await B["Bounty@post-update-bounty"]({bounty_id:this.paramBountyId,content:JSON.stringify({...this.formData,url:`${p}/tx/`}),type:2});i||(t(),this.refreshData&&this.refreshData())}}})};return n(I,{show:this.visible},{default:()=>[n(S,{style:{width:"600px",maxWidth:"90%","--n-title-text-color":"#000"},size:"huge",title:"Payment",bordered:!1,closable:!0,onClose:t},{default:()=>[n(A,null,[n(P,{rules:this.payFields,model:this.formData,ref:a=>this.form=a},{default:()=>[n(H,{fields:this.fields,values:this.formData},null)]}),n("div",{class:"flex justify-end"},[n(b,{class:"mr-4 w-40",type:"default",onClick:s("cancel")},{default:()=>[m("Cancel")]}),n(b,{class:"w-40",type:"primary",onClick:s("submit")},{default:()=>[m("Submit")]})])])]})]})}}),gt=C({props:{visible:{type:Boolean,require:!0},gapValue:{type:Number,required:!0,default:0},bountyDetail:{type:Object,required:!0},postUpdate:{type:Function,require:!0,default:()=>!1}},emits:["triggerDialog"],setup(t){const s=W(),a=x({update:""}),r=D("paramBountyId"),e=D("refreshData");z(()=>t.visible,p=>{p&&(a.update="")});const l=[{t:"string",title:"The update will be put on activity zone.",name:"update",placeholder:"",maxlength:1e3,type:"textarea",rules:[{required:!0,message:"Please enter an update"},{validator(p,i){return!i||i.length>100},message:"Please enter at least 100 character",trigger:"blur"}],autosize:{minRows:5,maxRows:10}}],y=q(l),u=j();return{postUpdateFields:y,fields:l,info:a,form:u,route:s,paramBountyId:r,refreshData:e}},render(){const t=a=>{this.$emit("triggerDialog",a)},s=a=>async()=>{var r;if(a==="cancel"){t(!1);return}(r=this.form)==null||r.validate(async e=>{if(!this.paramBountyId)return console.warn("PostUpdate: missing inject params: paramBountyId");if(typeof e>"u"){this.bountyDetail.my_role!==at.FOUNDER&&this.gapValue>0&&await this.postUpdate("Waiting to submit all contents to blockchain for post update","Post update succeedes");const{error:l}=await B["Bounty@post-update-bounty"]({content:this.info.update,bounty_id:this.paramBountyId,type:1});l||(t(!0),this.refreshData&&this.refreshData())}})};return n(I,{show:this.visible},{default:()=>[n(S,{style:{width:"600px",maxWidth:"90%","--n-title-text-color":"#000"},title:"Post update",bordered:!1,size:"huge",role:"dialog","aria-modal":"true",closable:!0,onClose:()=>t(!1)},{default:()=>[n(A,null,[n(P,{rules:this.postUpdateFields,model:this.info,ref:a=>this.form=a,class:"mt-8px mb-25px"},{default:()=>[n(H,{fields:this.fields,values:this.info},null)]}),n("div",{class:"flex justify-end"},[n(b,{class:"mr-16px w-164px",type:"default",onClick:s("cancel"),size:"small"},{default:()=>[m("Cancel")]}),n(b,{class:"w-164px",type:"primary",onClick:s("submit"),size:"small"},{default:()=>[m("Submit")]})])])]})]})}}),rt=C({name:"applyBountyDialog",props:{visible:{type:Boolean,required:!0},title:{type:String,required:!0},deposit:{type:Number,required:!0},detailChainId:{type:Number,default:()=>0}},emits:["triggerDialog"],setup(t){const s=T().connected,a=R(),r=W(),e=x({deposit:0,description:""});let l=0;const y=D("paramBountyId"),u=D("bountyDetail");z(()=>t.visible,f=>{f&&(e.deposit=t.deposit||0,e.description="",l||(l=t.deposit||0))});const p=v(()=>[{t:"custom",name:"deposit",label:"1.Deposit",title:"1. Deposit",rules:[{required:!0,validator:(f,_)=>Number(_)>=Number(l),message:`Minimum deposit ${l} USDC for applying bounty`,trigger:"blur"}],slots:{label:()=>[L(n("div",null,[m("1.Deposit")]))],feedback:()=>[L(n("span",{class:"text-color3 u-h7"},[m("Minimum deposit "),n("span",{class:"text-primary"},[l])," ",u==null?void 0:u.value.deposit_contract_token_symbol,m(" for applying bounty")]))]},render(){return n(M,{value:e.deposit,"onUpdate:value":f=>e.deposit=f,type:"withUnit",class:"w-full",inputProps:{precision:8,min:0,max:F,class:"flex-1"},renderUnit:()=>N((u==null?void 0:u.value.deposit_contract_token_symbol)||"")},null)}},{t:"string",title:"2.Submit your executing plan.",name:"description",type:"textarea",placeholder:"Input your executing plan",minlength:30,rules:[{required:!0,message:"The executing plan can't be blank."},{min:30,message:"At least more than 30 characters"},{max:1e3,message:"No more than 1000 characters"}],autosize:{minRows:5,maxRows:10}}]),i=q(p.value),o=j(),c=x({value:!1,validate:!1}),h=x({value:!1,validate:!1}),g=v(()=>`text-14px ${c.validate?"text-error":"text-color1"}`),k=v(()=>`text-14px ${h.validate?"text-error":"text-color1"}`);return{fields:p,applyFields:i,form:o,terms:c,accept:h,termsClass:g,acceptClass:k,formData:e,bountyDetail:u,paramBountyId:y,route:r,walletConnected:s,userStore:a}},render(){if(!this.bountyDetail)return null;const t=r=>{this.$emit("triggerDialog",r)},s=r=>async()=>{var u;if(r==="cancel"){t(!1);return}if(!await O(this.detailChainId))return;if(!this.walletConnected)return this.userStore.logout();const{bountyContract:l,approve:y}=V(this.bountyDetail);(u=this.form)==null||u.validate(async p=>{var i,o,c,h,g;if(typeof p>"u"&&this.accept.value){const k=(i=this.bountyDetail)==null?void 0:i.deposit_contract_token_symbol;if(this.formData.deposit>=this.deposit){const f=Y();f.startContract("Apply for deposit deposits into bounty contract.");const _=$(this.formData.deposit.toString(),(o=this.bountyDetail)==null?void 0:o.deposit_contract_token_decimal);console.log("applyFor deposit",this.formData.deposit,et);let w;if(((c=this.bountyDetail)==null?void 0:c.deposit_contract_address)!=="0x0000000000000000000000000000000000000000"){if(!await y(((h=this.bountyDetail)==null?void 0:h.contract_address)||"",$(this.formData.deposit.toString(),(g=this.bountyDetail)==null?void 0:g.deposit_contract_token_decimal)))return f.endContract("failed",{success:!1});if(w=await l.applyFor(_,"The deposits are transfering to deposit contract.",`Apply to ${this.formData.deposit} ${k}`),!w)return f.endContract("failed",{success:!1})}else if(w=await l.applyFor(_,"The deposits are transfering to deposit contract.",`Apply to ${this.formData.deposit} ${k}`,{value:_}),!w)return f.endContract("failed",{success:!1});return this.paramBountyId?(await B["Bounty@apply-bounty"]({bounty_id:this.paramBountyId,deposit:Number(this.formData.deposit),description:this.formData.description,tx_hash:w?w.hash:""}),t(!0)):console.warn("missing paramBountyId")}else return U.error("Input deposit must be greater than applicant deposit!")}return this.accept.value||(this.accept.validate=!0),console.log(p)})},a=r=>e=>{this[r].value=e,e&&(this[r].validate=!1)};return n(I,{show:this.visible,"onUpdate:show":r=>this.visible=r},{default:()=>[n(S,{style:{width:"540px","--n-title-text-color":"#000"},size:"huge",title:this.title,closable:!0,onClose:s("cancel")},{default:()=>{var r,e;return[n(A,null,[n(P,{rules:this.applyFields,model:this.formData,ref:l=>this.form=l},{default:()=>[n(H,{fields:this.fields,values:this.formData},null)]}),n(Z,{checked:this.accept.value,onUpdateChecked:a("accept"),class:"mt-2"},{default:()=>[n("span",{class:this.acceptClass},[m("I accept that I will not be able to withdraw the deposit if I do evil.")])]}),n("div",{class:"flex mt-10 justify-end"},[n(b,{class:"mr-4 w-40",type:"default",onClick:s("cancel")},{default:()=>[m("Cancel")]}),n(b,{class:"w-40",type:"primary",onClick:s("submit"),disabled:!((r=this.bountyDetail)!=null&&r.contract_address),loading:!((e=this.bountyDetail)!=null&&e.contract_address)},{default:()=>[m("Submit")]})])])]}})]})}}),vt=rt,Dt=C({props:{visible:{type:Boolean,require:!0},detailChainId:{type:Number,default:()=>0}},emits:["triggerDialog"],setup(t){const s=T().connected,a=R(),r=x({increaseDeposit:0}),e=D("bountyDetail");z(()=>t.visible,p=>{p&&(r.increaseDeposit=0)});const l=v(()=>[{t:"custom",name:"increaseDeposit",title:"Increase amount of deposit to enhance credit",formItemProps:{feedback:"At least greater than 0 for new desposit",themeOverrides:{feedbackTextColor:"var(--u-grey-4-color)",feedbackFontSizeMedium:"12px"}},rules:[{required:!0,validator:(p,i)=>i>0,trigger:"change"}],render(){return n(M,{value:r.increaseDeposit,"onUpdate:value":p=>r.increaseDeposit=p,type:"withUnit",class:"w-full",inputProps:{precision:0,min:0,max:F,class:"flex-1",parse:p=>p===null||p===""?0:Number(p)},renderUnit:()=>N((e==null?void 0:e.value.deposit_contract_token_symbol)||"--")},null)}}]),y=q(l.value),u=j();return{bountyDetail:e,addDepositFields:y,fields:l,form:u,formData:r,walletConnected:s,userStore:a}},render(){if(!this.bountyDetail)return null;const t=()=>{this.$emit("triggerDialog")},s=a=>async()=>{var u,p;if(a==="cancel"){t();return}if(!((u=this.bountyDetail)!=null&&u.chain_id?await O(this.bountyDetail.chain_id):!1))return console.warn("chain id is not match!");if(!this.walletConnected)return this.userStore.logout();const{bountyContract:e,approve:l}=V(this.bountyDetail),{deposit:y}=e;(p=this.form)==null||p.validate(async i=>{var o,c,h,g;if(typeof i>"u"){const k="Apply for increasing the deposits to bounty contract.",f=Y();f.startContract(k);const _=(o=this.bountyDetail)==null?void 0:o.deposit_contract_token_symbol;await l(((c=this.bountyDetail)==null?void 0:c.contract_address)||"",$(this.formData.increaseDeposit.toString(),(h=this.bountyDetail)==null?void 0:h.deposit_contract_token_decimal))?(console.log("this.formData.increaseDeposit",this.formData.increaseDeposit),await y($(this.formData.increaseDeposit.toString(),(g=this.bountyDetail)==null?void 0:g.deposit_contract_token_decimal),"The bounty credit will be enchanced by increasing the deposits.",`Increase deposits to ${this.formData.increaseDeposit} ${_}.`).catch(G=>(U.error(G.message),null))||f.endContract("failed",{success:!1}),console.log("should trigger socket reload...")):f.endContract("failed",{success:!1}),t()}})};return n(I,{show:this.visible},{default:()=>[n(S,{style:{width:"600px",maxWidth:"90%","--n-title-text-color":"#000"},title:"Increase deposit",bordered:!1,size:"huge",role:"dialog","aria-modal":"true",closable:!0,onClose:t},{default:()=>[n(A,null,[n(P,{class:"mt-24px mb-40px",rules:this.addDepositFields,model:this.formData,ref:a=>this.form=a},{default:()=>[n(H,{fields:this.fields,values:this.formData},null)]}),n("div",{class:"flex justify-end"},[n(b,{class:"mr-16px w-164px",type:"default",onClick:s("cancel")},{default:()=>[m("Cancel")]}),n(b,{class:"w-164px",type:"primary",onClick:s("submit")},{default:()=>[m("Submit")]})])])]})]})}});C({props:{visibleMap:{type:Object,require:!0},detailChainId:{type:Number,default:()=>0}},setup(){const t=T().connected,s=R();return{bountyDetail:D("bountyDetail"),walletConnected:t,userStore:s}},render(){var e,l,y,u;if(!this.bountyDetail)return null;const t=(l=(e=this.bountyDetail.approved)==null?void 0:e.comer)==null?void 0:l.address,s=()=>{this.visibleMap.visibleUnapproveConfirm=!1},a=p=>async()=>{if(p==="cancel"){s();return}if(!await O(this.detailChainId)||!t)return;if(!this.walletConnected)return this.userStore.logout();const{bountyContract:o}=V(this.bountyDetail);await o.unapproveApplicant(t,"",""),s(),this.visibleMap.visibleUnapproveFail=!0},r=()=>{this.visibleMap.visibleUnapproveFail=!1};return n(A,null,[n(X,{title:"Unapprove the applicant ?",content:"You will stop to cooperate with the applicant, meanwhile the bounty will be closed",visible:(y=this.visibleMap)==null?void 0:y.visibleUnapproveConfirm,onTriggerDialog:s},{btns:()=>n("div",{class:"flex justify-end"},[n(b,{class:"mr-16px w-164px",type:"default",onClick:a("cancel")},{default:()=>[m("Cancel")]}),n(b,{class:"w-164px",type:"primary",onClick:a("submit")},{default:()=>[m("Submit")]})])}),n(X,{title:"Unapprove failed",content:" You have to release all deposits before you do unapprove",visible:(u=this.visibleMap)==null?void 0:u.visibleUnapproveFail,onTriggerDialog:r},{btns:()=>n("div",{class:"flex justify-end"},[n(b,{class:"w-164px",type:"primary",onClick:r},{default:()=>[m("OK")]})])})])}});export{Dt as A,X as B,bt as P,vt as a,gt as b,V as u};
