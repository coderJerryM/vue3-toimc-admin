var be=Object.defineProperty,he=Object.defineProperties;var we=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var ue=(e,l,n)=>l in e?be(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,re=(e,l)=>{for(var n in l||(l={}))Se.call(l,n)&&ue(e,n,l[n]);if(se)for(var n of se(l))ke.call(l,n)&&ue(e,n,l[n]);return e},ie=(e,l)=>he(e,we(l));import{E as Ce}from"./index.b8d64605.js";import{$ as _,v as c,D as Q,f as I,aG as de,bz as X,bA as Y,ai as U,ao as le,e as ne,au as Be,u as te,W as ge,C as ee,x as ae,r as q,o as V,c as B,b as ye,w as me,a as W,t as Me,y as M,Q as R,aO as G,a6 as fe,a2 as Ne,aC as Ee,aD as ze,b4 as $e,bB as oe,aj as Ve,ay as ve,aE as Ke,ak as Le,am as Pe,aJ as Te,aW as Fe,aF as ce,g as x,A as H,F as J,B as D}from"./index.da4c6fdc.js";const Ae=(e,l,n)=>{const r=I(null),i=I(!1),d=c(()=>l.value instanceof Function),s=c(()=>d.value&&l.value(e.modelValue)||e.modelValue),t=de(()=>{n.value&&(i.value=!0)},50),f=de(()=>{n.value&&(i.value=!1)},50);return{tooltip:r,tooltipVisible:i,formatValue:s,displayTooltip:t,hideTooltip:f}},Xe=(e,l,n)=>{const{disabled:r,min:i,max:d,step:s,showTooltip:t,precision:f,sliderSize:a,formatTooltip:u,emitChange:o,resetSize:y,updateDragging:w}=_("SliderProvider"),{tooltip:S,tooltipVisible:L,formatValue:N,displayTooltip:k,hideTooltip:T}=Ae(e,u,t),C=c(()=>`${(e.modelValue-i.value)/(d.value-i.value)*100}%`),E=c(()=>e.vertical?{bottom:C.value}:{left:C.value}),F=()=>{l.hovering=!0,k()},O=()=>{l.hovering=!1,l.dragging||T()},v=m=>{r.value||(m.preventDefault(),p(m),X(window,"mousemove",A),X(window,"touchmove",A),X(window,"mouseup",z),X(window,"touchend",z),X(window,"contextmenu",z))},b=()=>{r.value||(l.newPosition=Number.parseFloat(C.value)-s.value/(d.value-i.value)*100,$(l.newPosition),o())},P=()=>{r.value||(l.newPosition=Number.parseFloat(C.value)+s.value/(d.value-i.value)*100,$(l.newPosition),o())},j=m=>{let g,h;return m.type.startsWith("touch")?(h=m.touches[0].clientY,g=m.touches[0].clientX):(h=m.clientY,g=m.clientX),{clientX:g,clientY:h}},p=m=>{l.dragging=!0,l.isClick=!0;const{clientX:g,clientY:h}=j(m);e.vertical?l.startY=h:l.startX=g,l.startPosition=Number.parseFloat(C.value),l.newPosition=l.startPosition},A=m=>{if(l.dragging){l.isClick=!1,k(),y();let g;const{clientX:h,clientY:K}=j(m);e.vertical?(l.currentY=K,g=(l.startY-l.currentY)/a.value*100):(l.currentX=h,g=(l.currentX-l.startX)/a.value*100),l.newPosition=l.startPosition+g,$(l.newPosition)}},z=()=>{l.dragging&&(setTimeout(()=>{l.dragging=!1,l.hovering||T(),l.isClick||($(l.newPosition),o())},0),Y(window,"mousemove",A),Y(window,"touchmove",A),Y(window,"mouseup",z),Y(window,"touchend",z),Y(window,"contextmenu",z))},$=async m=>{if(m===null||Number.isNaN(+m))return;m<0?m=0:m>100&&(m=100);const g=100/((d.value-i.value)/s.value);let K=Math.round(m/g)*g*(d.value-i.value)*.01+i.value;K=Number.parseFloat(K.toFixed(f.value)),n(U,K),!l.dragging&&e.modelValue!==l.oldValue&&(l.oldValue=e.modelValue),await le(),l.dragging&&k(),S.value.updatePopper()};return Q(()=>l.dragging,m=>{w(m)}),{tooltip:S,tooltipVisible:L,showTooltip:t,wrapperStyle:E,formatValue:N,handleMouseEnter:F,handleMouseLeave:O,onButtonDown:v,onLeftKeyDown:b,onRightKeyDown:P,setPosition:$}},Ye=ne({name:"ElSliderButton",components:{ElTooltip:Be},props:{modelValue:{type:Number,default:0},vertical:{type:Boolean,default:!1},tooltipClass:{type:String,default:""}},emits:[U],setup(e,{emit:l}){const n=te("slider"),r=ge({hovering:!1,dragging:!1,isClick:!1,startX:0,currentX:0,startY:0,currentY:0,startPosition:0,newPosition:0,oldValue:e.modelValue}),{tooltip:i,showTooltip:d,tooltipVisible:s,wrapperStyle:t,formatValue:f,handleMouseEnter:a,handleMouseLeave:u,onButtonDown:o,onLeftKeyDown:y,onRightKeyDown:w,setPosition:S}=Xe(e,r,l),{hovering:L,dragging:N}=ee(r);return{ns:n,tooltip:i,tooltipVisible:s,showTooltip:d,wrapperStyle:t,formatValue:f,handleMouseEnter:a,handleMouseLeave:u,onButtonDown:o,onLeftKeyDown:y,onRightKeyDown:w,setPosition:S,hovering:L,dragging:N}}});function Re(e,l,n,r,i,d){const s=q("el-tooltip");return V(),B("div",{ref:"button",class:M([e.ns.e("button-wrapper"),{hover:e.hovering,dragging:e.dragging}]),style:R(e.wrapperStyle),tabindex:"0",onMouseenter:l[1]||(l[1]=(...t)=>e.handleMouseEnter&&e.handleMouseEnter(...t)),onMouseleave:l[2]||(l[2]=(...t)=>e.handleMouseLeave&&e.handleMouseLeave(...t)),onMousedown:l[3]||(l[3]=(...t)=>e.onButtonDown&&e.onButtonDown(...t)),onTouchstart:l[4]||(l[4]=(...t)=>e.onButtonDown&&e.onButtonDown(...t)),onFocus:l[5]||(l[5]=(...t)=>e.handleMouseEnter&&e.handleMouseEnter(...t)),onBlur:l[6]||(l[6]=(...t)=>e.handleMouseLeave&&e.handleMouseLeave(...t)),onKeydown:[l[7]||(l[7]=G((...t)=>e.onLeftKeyDown&&e.onLeftKeyDown(...t),["left"])),l[8]||(l[8]=G((...t)=>e.onRightKeyDown&&e.onRightKeyDown(...t),["right"])),l[9]||(l[9]=G(fe((...t)=>e.onLeftKeyDown&&e.onLeftKeyDown(...t),["prevent"]),["down"])),l[10]||(l[10]=G(fe((...t)=>e.onRightKeyDown&&e.onRightKeyDown(...t),["prevent"]),["up"]))]},[ye(s,{ref:"tooltip",visible:e.tooltipVisible,"onUpdate:visible":l[0]||(l[0]=t=>e.tooltipVisible=t),placement:"top","stop-popper-mouse-event":!1,"popper-class":e.tooltipClass,disabled:!e.showTooltip,persistent:""},{content:me(()=>[W("span",null,Me(e.formatValue),1)]),default:me(()=>[W("div",{class:M([e.ns.e("button"),{hover:e.hovering,dragging:e.dragging}])},null,2)]),_:1},8,["visible","popper-class","disabled"])],38)}var We=ae(Ye,[["render",Re],["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/button.vue"]]);const Ie=ne({name:"ElMarker",props:{mark:{type:[String,Object],default:()=>{}}},setup(e){const l=te("slider"),n=c(()=>typeof e.mark=="string"?e.mark:e.mark.label);return{ns:l,label:n}},render(){var e;return Ne("div",{class:this.ns.e("marks-text"),style:(e=this.mark)==null?void 0:e.style},this.label)}});var Ue=ae(Ie,[["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/marker.vue"]]);const Oe=e=>c(()=>e.marks?Object.keys(e.marks).map(parseFloat).sort((n,r)=>n-r).filter(n=>n<=e.max&&n>=e.min).map(n=>({point:n,position:(n-e.min)*100/(e.max-e.min),mark:e.marks[n]})):[]),je=(e,l,n)=>{const r=_(Ee,{}),i=_(ze,{}),d=$e(null),s=I(null),t=I(null),f={firstButton:s,secondButton:t},a=c(()=>e.disabled||r.disabled||!1),u=c(()=>Math.min(l.firstValue,l.secondValue)),o=c(()=>Math.max(l.firstValue,l.secondValue)),y=c(()=>e.range?`${100*(o.value-u.value)/(e.max-e.min)}%`:`${100*(l.firstValue-e.min)/(e.max-e.min)}%`),w=c(()=>e.range?`${100*(u.value-e.min)/(e.max-e.min)}%`:"0%"),S=c(()=>e.vertical?{height:e.height}:{}),L=c(()=>e.vertical?{height:y.value,bottom:w.value}:{width:y.value,left:w.value}),N=()=>{d.value&&(l.sliderSize=d.value[`client${e.vertical?"Height":"Width"}`])},k=v=>{const b=e.min+v*(e.max-e.min)/100;if(!e.range){s.value.setPosition(v);return}let P;Math.abs(u.value-b)<Math.abs(o.value-b)?P=l.firstValue<l.secondValue?"firstButton":"secondButton":P=l.firstValue>l.secondValue?"firstButton":"secondButton",f[P].value.setPosition(v)},T=v=>{l.firstValue=v,E(e.range?[u.value,o.value]:v)},C=v=>{l.secondValue=v,e.range&&E([u.value,o.value])},E=v=>{n(U,v),n(oe,v)},F=async()=>{await le(),n(Ve,e.range?[u.value,o.value]:e.modelValue)};return{elFormItem:i,slider:d,firstButton:s,secondButton:t,sliderDisabled:a,minValue:u,maxValue:o,runwayStyle:S,barStyle:L,resetSize:N,setPosition:k,emitChange:F,onSliderClick:v=>{if(!(a.value||l.dragging)){if(N(),e.vertical){const b=d.value.getBoundingClientRect().bottom;k((b-v.clientY)/l.sliderSize*100)}else{const b=d.value.getBoundingClientRect().left;k((v.clientX-b)/l.sliderSize*100)}F()}},setFirstValue:T,setSecondValue:C}},Ge=(e,l,n,r)=>({stops:c(()=>{if(!e.showStops||e.min>e.max)return[];if(e.step===0)return[];const s=(e.max-e.min)/e.step,t=100*e.step/(e.max-e.min),f=Array.from({length:s-1}).map((a,u)=>(u+1)*t);return e.range?f.filter(a=>a<100*(n.value-e.min)/(e.max-e.min)||a>100*(r.value-e.min)/(e.max-e.min)):f.filter(a=>a>100*(l.firstValue-e.min)/(e.max-e.min))}),getStopStyle:s=>e.vertical?{bottom:`${s}%`}:{left:`${s}%`}}),He=ne({name:"ElSlider",components:{ElInputNumber:Ce,SliderButton:We,SliderMarker:Ue},props:{modelValue:{type:[Number,Array],default:0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},showInput:{type:Boolean,default:!1},showInputControls:{type:Boolean,default:!0},size:{type:String,validator:ve},inputSize:{type:String,validator:ve},showStops:{type:Boolean,default:!1},showTooltip:{type:Boolean,default:!0},formatTooltip:{type:Function,default:void 0},disabled:{type:Boolean,default:!1},range:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},height:{type:String,default:""},debounce:{type:Number,default:300},label:{type:String,default:void 0},tooltipClass:{type:String,default:void 0},marks:Object},emits:[U,Ve,oe],setup(e,{emit:l}){const n=te("slider"),r=ge({firstValue:0,secondValue:0,oldValue:0,dragging:!1,sliderSize:1}),{elFormItem:i,slider:d,firstButton:s,secondButton:t,sliderDisabled:f,minValue:a,maxValue:u,runwayStyle:o,barStyle:y,resetSize:w,emitChange:S,onSliderClick:L,setFirstValue:N,setSecondValue:k}=je(e,r,l),{stops:T,getStopStyle:C}=Ge(e,r,a,u),E=Ke(),F=c(()=>e.inputSize||E.value),O=c(()=>[n.b(),n.m(E.value),n.is("vertical",e.vertical),{[n.m("with-input")]:e.showInput}]),v=Oe(e);Je(e,r,a,u,l,i);const b=c(()=>{const g=[e.min,e.max,e.step].map(h=>{const K=`${h}`.split(".")[1];return K?K.length:0});return Math.max.apply(null,g)}),{sliderWrapper:P}=Qe(e,r,w),{firstValue:j,secondValue:p,oldValue:A,dragging:z,sliderSize:$}=ee(r),m=g=>{r.dragging=g};return Le("SliderProvider",ie(re({},ee(e)),{sliderSize:$,disabled:f,precision:b,emitChange:S,resetSize:w,updateDragging:m})),{ns:n,firstValue:j,secondValue:p,oldValue:A,dragging:z,sliderSize:$,slider:d,firstButton:s,secondButton:t,sliderDisabled:f,runwayStyle:o,barStyle:y,emitChange:S,onSliderClick:L,getStopStyle:C,setFirstValue:N,setSecondValue:k,stops:T,markList:v,sliderWrapper:P,sliderWrapperSize:E,sliderInputSize:F,sliderKls:O}}}),Je=(e,l,n,r,i,d)=>{const s=a=>{i(U,a),i(oe,a)},t=()=>e.range?![n.value,r.value].every((a,u)=>a===l.oldValue[u]):e.modelValue!==l.oldValue,f=()=>{var a,u;if(e.min>e.max){Fe("Slider","min should not be greater than max.");return}const o=e.modelValue;e.range&&Array.isArray(o)?o[1]<e.min?s([e.min,e.min]):o[0]>e.max?s([e.max,e.max]):o[0]<e.min?s([e.min,o[1]]):o[1]>e.max?s([o[0],e.max]):(l.firstValue=o[0],l.secondValue=o[1],t()&&((a=d.validate)==null||a.call(d,"change").catch(y=>ce()),l.oldValue=o.slice())):!e.range&&typeof o=="number"&&!Number.isNaN(o)&&(o<e.min?s(e.min):o>e.max?s(e.max):(l.firstValue=o,t()&&((u=d.validate)==null||u.call(d,"change").catch(y=>ce()),l.oldValue=o)))};f(),Q(()=>l.dragging,a=>{a||f()}),Q(()=>e.modelValue,(a,u)=>{l.dragging||Array.isArray(a)&&Array.isArray(u)&&a.every((o,y)=>o===u[y])&&l.firstValue===a[0]&&l.secondValue===a[1]||f()},{deep:!0}),Q(()=>[e.min,e.max],()=>{f()})},Qe=(e,l,n)=>{const r=I(null);return Pe(async()=>{let i;e.range?(Array.isArray(e.modelValue)?(l.firstValue=Math.max(e.min,e.modelValue[0]),l.secondValue=Math.min(e.max,e.modelValue[1])):(l.firstValue=e.min,l.secondValue=e.max),l.oldValue=[l.firstValue,l.secondValue],i=`${l.firstValue}-${l.secondValue}`):(typeof e.modelValue!="number"||Number.isNaN(e.modelValue)?l.firstValue=e.min:l.firstValue=Math.min(e.max,Math.max(e.min,e.modelValue)),l.oldValue=l.firstValue,i=l.firstValue),r.value.setAttribute("aria-valuetext",i),r.value.setAttribute("aria-label",e.label?e.label:`slider between ${e.min} and ${e.max}`),X(window,"resize",n),await le(),n()}),Te(()=>{Y(window,"resize",n)}),{sliderWrapper:r}},qe=["aria-valuemin","aria-valuemax","aria-orientation","aria-disabled"],Ze={key:1};function pe(e,l,n,r,i,d){const s=q("slider-button"),t=q("slider-marker"),f=q("el-input-number");return V(),B("div",{ref:"sliderWrapper",class:M(e.sliderKls),role:"slider","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-orientation":e.vertical?"vertical":"horizontal","aria-disabled":e.sliderDisabled},[W("div",{ref:"slider",class:M([e.ns.e("runway"),{"show-input":e.showInput&&!e.range},e.ns.is("disabled",e.sliderDisabled)]),style:R(e.runwayStyle),onClick:l[0]||(l[0]=(...a)=>e.onSliderClick&&e.onSliderClick(...a))},[W("div",{class:M(e.ns.e("bar")),style:R(e.barStyle)},null,6),ye(s,{ref:"firstButton","model-value":e.firstValue,vertical:e.vertical,"tooltip-class":e.tooltipClass,"onUpdate:modelValue":e.setFirstValue},null,8,["model-value","vertical","tooltip-class","onUpdate:modelValue"]),e.range?(V(),x(s,{key:0,ref:"secondButton","model-value":e.secondValue,vertical:e.vertical,"tooltip-class":e.tooltipClass,"onUpdate:modelValue":e.setSecondValue},null,8,["model-value","vertical","tooltip-class","onUpdate:modelValue"])):H("v-if",!0),e.showStops?(V(),B("div",Ze,[(V(!0),B(J,null,D(e.stops,(a,u)=>(V(),B("div",{key:u,class:M(e.ns.e("stop")),style:R(e.getStopStyle(a))},null,6))),128))])):H("v-if",!0),e.markList.length>0?(V(),B(J,{key:2},[W("div",null,[(V(!0),B(J,null,D(e.markList,(a,u)=>(V(),B("div",{key:u,style:R(e.getStopStyle(a.position)),class:M([e.ns.e("stop"),e.ns.e("marks-stop")])},null,6))),128))]),W("div",{class:M(e.ns.e("marks"))},[(V(!0),B(J,null,D(e.markList,(a,u)=>(V(),x(t,{key:u,mark:a.mark,style:R(e.getStopStyle(a.position))},null,8,["mark","style"]))),128))],2)],64)):H("v-if",!0)],6),e.showInput&&!e.range?(V(),x(f,{key:0,ref:"input","model-value":e.firstValue,class:M(e.ns.e("input")),step:e.step,disabled:e.sliderDisabled,controls:e.showInputControls,min:e.min,max:e.max,debounce:e.debounce,size:e.sliderInputSize,"onUpdate:modelValue":e.setFirstValue,onChange:e.emitChange},null,8,["model-value","class","step","disabled","controls","min","max","debounce","size","onUpdate:modelValue","onChange"])):H("v-if",!0)],10,qe)}var Z=ae(He,[["render",pe],["__file","/home/runner/work/element-plus/element-plus/packages/components/slider/src/index.vue"]]);Z.install=e=>{e.component(Z.name,Z)};const xe=Z,ll=xe;export{ll as E};
