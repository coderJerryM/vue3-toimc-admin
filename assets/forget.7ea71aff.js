import{_ as d}from"./BasicForm.d5aa93e6.js";import{_ as f,e as x,E as h,o as i,c as l,a as t,b as o,w as s,g as C,t as F,h as n,r as B,j as g}from"./index.da4c6fdc.js";import{s as y,_ as k}from"./qr.9634daff.js";import"./el-col.7e53fe3b.js";import"./el-cascader-panel.7029d248.js";import"./el-checkbox.27605db2.js";import"./index.71dd07a1.js";import"./index.7f4d56fe.js";import"./date-utils.92a15094.js";import"./index.653cb596.js";/* empty css                 */import"./el-upload.4f7e094d.js";import"./el-progress.c9c0e3e2.js";import"./index.b8d64605.js";import"./index.b57f43fd.js";import"./index.a5b8cb8d.js";import"./index.b0f2a45f.js";const v=x({setup(){const e=[{component:"input",class:"py-1",attrs:{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",size:"large",prefixIcon:"Avatar"}},{component:"input",class:"py-1",attrs:{placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",size:"large",prefixIcon:"ChatRound"},itemSlot:"suffix",slot:"suffix"},{component:"input",class:"py-1",attrs:{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",type:"password",size:"large",prefixIcon:"Lock"}}],{state:a,sendCode:r,leftCount:u}=y();return{regForm:e,state:a,sendCode:r,leftCount:u}}}),b={class:"w-full p-1 custom-login"},w={class:"flex items-center justify-end"},D=t("div",{class:"px-3 py-2 rounded-md mr-2 flex items-center bg-[#ECFAF3]"},[t("span",{class:"we inline-block pr-2 bg-contain"}),t("span",{class:"text-sm text-[#07C160]"},"\u5FAE\u4FE1\u626B\u7801\u767B\u5F55")],-1),E=t("img",{class:"relative cursor-pointer",src:k},null,-1),A={class:"my-10 mx-auto max-w-96"},j=t("div",{class:"text-3xl pb-6"},"\u5FD8\u8BB0\u5BC6\u7801",-1),z=n("\u91CD\u7F6E\u5BC6\u7801"),$=n("\u83B7\u53D6\u9A8C\u8BC1\u7801"),I={key:1,class:"text-sm text-gray-400 w-[70px] text-center inline-block flex items-center"},N={class:"flex justify-end text-sm text-gray-400"},V=n(" \u5DF2\u6709\u8D26\u53F7\uFF1F "),L=n("\u7ACB\u5373\u767B\u5F55>");function S(e,a,r,u,R,T){const c=B("router-link"),p=h,m=g,_=d;return i(),l("div",b,[t("div",w,[D,o(c,{to:"/login/scan"},{default:s(()=>[E]),_:1})]),t("div",A,[j,o(_,{schemas:e.regForm,"label-width":"0",class:"pt-4"},{action:s(()=>[o(p,{type:"primary",size:"large",class:"w-full"},{default:s(()=>[z]),_:1})]),suffix:s(()=>[e.state.sending?(i(),l("span",I,"\u91CD\u53D1"+F(e.leftCount)+"\u79D2",1)):(i(),C(m,{key:0,type:"primary",underline:!1,class:"mr-2",href:"javascript:;",onClick:e.sendCode},{default:s(()=>[$]),_:1},8,["onClick"]))]),_:1},8,["schemas"]),t("div",N,[t("div",null,[V,o(c,{class:"text-blue-400",to:"/login/pwd"},{default:s(()=>[L]),_:1})])])])])}var ot=f(v,[["render",S]]);export{ot as default};
