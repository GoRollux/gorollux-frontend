import{u as a}from"./vue.4357b695.js";import{g as i}from"./ipfs.34f3fb54.js";import{l as c,r as m,t as p,bm as u}from"./bundle.0b4742f1.js";import"./tools.88963de1.js";import"./inherits.5710f9ab.js";const g=c({name:"IPFSContent",setup(){const t=m(),e=a(),n=i(),o=async()=>{const s=await n.get(e.params.hash);for await(const r of s)t.value=new TextDecoder().decode(r)};return p(()=>{o()}),{content:t}},render(){return u("div",{class:"text-sm"},[this.content])}});export{g as default};
