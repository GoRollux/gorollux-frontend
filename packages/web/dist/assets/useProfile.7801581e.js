import{a as i,u as f}from"./index.ac02f68f.js";import{av as l,r as s,H as g}from"./bundle.f4813fa2.js";const m="/assets/default.29f664f3.png";function w(){const t=l({startup_count:0,bounty_count:0,crowdfunding_count:0,sale_launchpad_count:0,governance_count:0}),n=l({startup_count:0,bounty_count:0,crowdfunding_count:0,sale_launchpad_count:0,governance_count:0});return{postedCount:t,participatedCount:n,getData:async c=>{if(c){const{error:o,data:a}=await i["Comer@get-comer-posted-count-by-comer-id"]({comer_id:String(c)});o||(t.startup_count=a.startup_count,t.bounty_count=a.bounty_count,t.crowdfunding_count=a.crowdfunding_count,t.sale_launchpad_count=a.sale_launchpad_count,t.governance_count=a.governance_count);const{error:e,data:u}=await i["Comer@get-comer-participated-count-by-comer-id"]({comer_id:String(c)});e||(n.startup_count=u.startup_count,n.bounty_count=u.bounty_count,n.crowdfunding_count=u.crowdfunding_count,n.sale_launchpad_count=u.sale_launchpad_count,n.governance_count=u.governance_count)}else console.warn("Missing parameter: comer_id")}}}const d=f();function y(t){const n=s(null);d.getComerProfile().then(e=>{n.value=e});const r=g(()=>{var e;return!!t&&String((e=n.value)==null?void 0:e.id)!==String(t)}),c=s(!1),o=s(null);async function a(e=!1){if(!e&&o.value)return o.value;if(r.value){const{error:u,data:_}=await i["Comer@get-comer-info-detail-by-comer-id"]({comer_id:t});u?o.value=null:o.value=_}else o.value=await d.getComerProfile(e);return o.value}return a(r.value),{getProfileData:a,profile:o,viewMode:r,loading:c}}export{w as a,m as d,y as u};
