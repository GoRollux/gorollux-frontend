const t=a=>String(a).toLowerCase().match(/http(s)?:\/\/([\w- ./?%&=]+)/),e=a=>(console.log("validateEmail",a),String(a).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)),r=a=>a&&a.split,s=a=>String(a).toLowerCase().match(/[^#]+#\d+$/),n=a=>s(a)||t(a),o=1e15;export{o as M,n as a,r as b,t as c,s as d,e as v};
