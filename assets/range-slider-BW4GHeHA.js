import{u as ee,a as le,m as ae,g as q,V as te,b as E}from"./VSliderTrack-SQQn7Mvc.js";import{V as H,m as se}from"./VInput-D2zQSbWJ.js";import{u as ue,m as oe,V as ne}from"./form-B4hTdX8Q.js";import{ap as re,a2 as ie,r as g,aI as de,aH as ce,X,a7 as me,b as t,q as pe,F as ve,d as h,g as R,o as x,m as b,aV as k,f as c,$ as be,e as d,t as v}from"./index-2Z5SUNOj.js";import{_ as Ve}from"./AppCardCode.vue_vue_type_style_index_0_lang-COhHA12V.js";import{V as fe,a as $}from"./VRow-DB7-HmT9.js";import"./VImg-BSFXO24j.js";import"./vue3-perfect-scrollbar-D-AZ0Zb_.js";import"./VCard-DQGksZyZ.js";import"./VAvatar-CBLMKjQn.js";import"./VCardText-DVpU51ne.js";import"./VDivider-BSAz5qCm.js";/* empty css              */const _e=ie({...oe(),...se(),...ae(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),y=re()({name:"VRangeSlider",props:_e(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,u){let{slots:l,emit:o}=u;const a=g(),i=g(),S=g(),{rtlClasses:j}=de();function z(m){if(!a.value||!i.value)return;const p=q(m,a.value.$el,e.direction),r=q(m,i.value.$el,e.direction),n=Math.abs(p),V=Math.abs(r);return n<V||n===V&&p<0?a.value.$el:i.value.$el}const B=ee(e),s=ce(e,"modelValue",void 0,m=>m!=null&&m.length?m.map(p=>B.roundValue(p)):[0,0]),{activeThumbRef:f,hasLabels:G,max:I,min:w,mousePressed:J,onSliderMousedown:K,onSliderTouchstart:Q,position:L,trackContainerRef:Z,readonly:A}=le({props:e,steps:B,onSliderStart:()=>{o("start",s.value)},onSliderEnd:m=>{var n;let{value:p}=m;const r=f.value===((n=a.value)==null?void 0:n.$el)?[p,s.value[1]]:[s.value[0],p];!e.strict&&r[0]<r[1]&&(s.value=r),o("end",s.value)},onSliderMove:m=>{var V,D,T,_;let{value:p}=m;const[r,n]=s.value;!e.strict&&r===n&&r!==w.value&&(f.value=p>r?(V=i.value)==null?void 0:V.$el:(D=a.value)==null?void 0:D.$el,(T=f.value)==null||T.focus()),f.value===((_=a.value)==null?void 0:_.$el)?s.value=[Math.min(p,n),n]:s.value=[r,Math.max(r,p)]},getActiveThumb:z}),{isFocused:M,focus:N,blur:O}=ue(e),W=X(()=>L(s.value[0])),Y=X(()=>L(s.value[1]));return me(()=>{const m=H.filterProps(e),p=!!(e.label||l.label||l.prepend);return t(H,pe({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!l["tick-label"]||G.value,"v-slider--focused":M.value,"v-slider--pressed":J.value,"v-slider--disabled":e.disabled},j.value,e.class],style:e.style,ref:S},m,{focused:M.value}),{...l,prepend:p?r=>{var n,V;return t(ve,null,[((n=l.label)==null?void 0:n.call(l,r))??(e.label?t(ne,{class:"v-slider__label",text:e.label},null):void 0),(V=l.prepend)==null?void 0:V.call(l,r)])}:void 0,default:r=>{var D,T;let{id:n,messagesId:V}=r;return t("div",{class:"v-slider__container",onMousedown:A.value?void 0:K,onTouchstartPassive:A.value?void 0:Q},[t("input",{id:`${n.value}_start`,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:s.value[0]},null),t("input",{id:`${n.value}_stop`,name:e.name||n.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:s.value[1]},null),t(te,{ref:Z,start:W.value,stop:Y.value},{"tick-label":l["tick-label"]}),t(E,{ref:a,"aria-describedby":V.value,focused:M&&f.value===((D=a.value)==null?void 0:D.$el),modelValue:s.value[0],"onUpdate:modelValue":_=>s.value=[_,s.value[1]],onFocus:_=>{var C,F,P,U;N(),f.value=(C=a.value)==null?void 0:C.$el,I.value!==w.value&&s.value[0]===s.value[1]&&s.value[1]===w.value&&_.relatedTarget!==((F=i.value)==null?void 0:F.$el)&&((P=a.value)==null||P.$el.blur(),(U=i.value)==null||U.$el.focus())},onBlur:()=>{O(),f.value=void 0},min:w.value,max:s.value[1],position:W.value,ripple:e.ripple},{"thumb-label":l["thumb-label"]}),t(E,{ref:i,"aria-describedby":V.value,focused:M&&f.value===((T=i.value)==null?void 0:T.$el),modelValue:s.value[1],"onUpdate:modelValue":_=>s.value=[s.value[0],_],onFocus:_=>{var C,F,P,U;N(),f.value=(C=i.value)==null?void 0:C.$el,I.value!==w.value&&s.value[0]===s.value[1]&&s.value[0]===I.value&&_.relatedTarget!==((F=a.value)==null?void 0:F.$el)&&((P=i.value)==null||P.$el.blur(),(U=a.value)==null||U.$el.focus())},onBlur:()=>{O(),f.value=void 0},min:s.value[0],max:I.value,position:Y.value,ripple:e.ripple},{"thumb-label":l["thumb-label"]})])}})}),{}}}),ge=h({__name:"DemoRangeSliderVertical",setup(e){const u=g([20,40]);return(l,o)=>(x(),R(y,{modelValue:b(u),"onUpdate:modelValue":o[0]||(o[0]=a=>k(u)?u.value=a:null),direction:"vertical"},null,8,["modelValue"]))}}),Se=h({__name:"DemoRangeSliderThumbLabel",setup(e){const u=["Winter","Spring","Summer","Fall"],l=["bx-cloud-snow","bx-leaf","bx-bxs-hot","bx-droplet"],o=g([1,2]);return(a,i)=>(x(),R(y,{modelValue:b(o),"onUpdate:modelValue":i[0]||(i[0]=S=>k(o)?o.value=S:null),tick:u,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":c(({modelValue:S})=>[t(be,{icon:l[S]},null,8,["icon"])]),_:1},8,["modelValue"]))}}),he=h({__name:"DemoRangeSliderStep",setup(e){const u=g([20,40]);return(l,o)=>(x(),R(y,{modelValue:b(u),"onUpdate:modelValue":o[0]||(o[0]=a=>k(u)?u.value=a:null),step:"10"},null,8,["modelValue"]))}}),Re=h({__name:"DemoRangeSliderColor",setup(e){const u=g([10,60]);return(l,o)=>(x(),R(y,{modelValue:b(u),"onUpdate:modelValue":o[0]||(o[0]=a=>k(u)?u.value=a:null),color:"success"},null,8,["modelValue"]))}}),xe=h({__name:"DemoRangeSliderDisabled",setup(e){const u=g([30,60]);return(l,o)=>(x(),R(y,{modelValue:b(u),"onUpdate:modelValue":o[0]||(o[0]=a=>k(u)?u.value=a:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}}),$e=h({__name:"DemoRangeSliderBasic",setup(e){const u=g([10,60]);return(l,o)=>(x(),R(y,{modelValue:b(u),"onUpdate:modelValue":o[0]||(o[0]=a=>k(u)?u.value=a:null)},null,8,["modelValue"]))}}),ke={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},ye={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`},we={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},De={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},Te={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['bx-cloud-snow', 'bx-leaf', 'bx-bxs-hot', 'bx-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'bx-cloud-snow',
  'bx-leaf',
  'bx-bxs-hot',
  'bx-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},Ce={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Ye=h({__name:"range-slider",setup(e){return(u,l)=>{const o=$e,a=Ve,i=xe,S=Re,j=he,z=Se,B=ge;return x(),R(fe,null,{default:c(()=>[t($,{cols:"12",md:"6"},{default:c(()=>[t(a,{title:"Basic",code:b(ke)},{default:c(()=>[l[0]||(l[0]=d("p",null,[v("The "),d("code",null,"v-slider"),v(" component is a better visualization of the number input.")],-1)),t(o)]),_:1,__:[0]},8,["code"])]),_:1}),t($,{cols:"12",md:"6"},{default:c(()=>[t(a,{title:"Disabled",code:b(we)},{default:c(()=>[l[1]||(l[1]=d("p",null,[v("You cannot interact with "),d("code",null,"disabled"),v(" sliders.")],-1)),t(i)]),_:1,__:[1]},8,["code"])]),_:1}),t($,{cols:"12",md:"6"},{default:c(()=>[t(a,{title:"Color",code:b(ye)},{default:c(()=>[l[2]||(l[2]=d("p",null,[v("Use "),d("code",null,"color"),v(" prop to the sets the slider color. "),d("code",null,"track-color"),v(" prop to sets the color of slider's unfilled track.")],-1)),t(S)]),_:1,__:[2]},8,["code"])]),_:1}),t($,{cols:"12",md:"6"},{default:c(()=>[t(a,{title:"Step",code:b(De)},{default:c(()=>[l[3]||(l[3]=d("p",null,[d("code",null,"v-range-slider"),v(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1)),t(j)]),_:1,__:[3]},8,["code"])]),_:1}),t($,{cols:"12",md:"6"},{default:c(()=>[t(a,{title:"Thumb label",code:b(Te)},{default:c(()=>[l[4]||(l[4]=d("p",null,[v(" Using the "),d("code",null,"tick-labels"),v(" prop along with the "),d("code",null,"thumb-label"),v(" slot, you can create a very customized solution. ")],-1)),t(z)]),_:1,__:[4]},8,["code"])]),_:1}),t($,{cols:"12",md:"6"},{default:c(()=>[t(a,{title:"Vertical",code:b(Ce)},{default:c(()=>[l[5]||(l[5]=d("p",null,[v("You can use the "),d("code",null,"vertical"),v(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1)),t(B)]),_:1,__:[5]},8,["code"])]),_:1})]),_:1})}}});export{Ye as default};
