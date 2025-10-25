import{V as m}from"./VRating-DuWZ49D_.js";import{d as v,r as f,g as _,o as c,m as s,aW as u,f as o,b as e,q as S,a0 as U,c as R,e as a,v as j,F as h,i as k,t as r}from"./index-IocJxrYA.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as F}from"./VSlider-trhwgTbl.js";import{_ as I}from"./AppCardCode.vue_vue_type_style_index_0_lang-C0la9L6J.js";import{V as B,a as p}from"./VRow-D3QwLY3Y.js";import"./VSliderTrack-B4vP1ne9.js";import"./VInput-C6ccFH0D.js";import"./form-Bog-j-sp.js";import"./VImg-nllyqj75.js";import"./vue3-perfect-scrollbar-lLG8g7xh.js";import"./constants-CCDRJ4Ay.js";import"./VCard-BD5MO7Gs.js";import"./VAvatar-DhK3kmAQ.js";import"./VCardText-CZs76tDv.js";import"./VDivider-CLIbkeVQ.js";/* empty css              */const T=v({__name:"DemoRatingItemSlot",setup(d){const n=f(4.5);return(l,i)=>(c(),_(m,{modelValue:s(n),"onUpdate:modelValue":i[0]||(i[0]=t=>u(n)?n.value=t:null)},{item:o(t=>[e(U,S(t,{size:25,color:t.isFilled?"success":"secondary",class:"me-3",icon:t.isFilled?"bx-smile":"bx-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}}),L=v({__name:"DemoRatingIncremented",setup(d){const n=f(4.5);return(l,i)=>(c(),_(m,{modelValue:s(n),"onUpdate:modelValue":i[0]||(i[0]=t=>u(n)?n.value=t:null),"half-increments":"",hover:""},null,8,["modelValue"]))}}),M={};function N(d,n){return c(),_(m,{hover:""})}const H=V(M,[["render",N]]),P={};function q(d,n){return c(),_(m,{readonly:"","model-value":4})}const A=V(P,[["render",q]]),E={};function W(d,n){return c(),_(m,{clearable:""})}const G=V(E,[["render",W]]),J={class:"font-weight-medium mb-0"},K=v({__name:"DemoRatingLength",setup(d){const n=f(5),l=f(2);return(i,t)=>(c(),R(h,null,[t[2]||(t[2]=a("div",{class:"text-caption"}," Custom length ",-1)),e(F,{modelValue:s(n),"onUpdate:modelValue":t[0]||(t[0]=g=>u(n)?n.value=g:null),min:1,max:7},null,8,["modelValue"]),e(m,{modelValue:s(l),"onUpdate:modelValue":t[1]||(t[1]=g=>u(l)?l.value=g:null),length:s(n)},null,8,["modelValue","length"]),a("p",J," Model: "+j(s(l)),1)],64))}}),O={class:"d-flex flex-column"},Q=v({__name:"DemoRatingSize",setup(d){const n=f(4);return(l,i)=>(c(),R("div",O,[e(m,{modelValue:s(n),"onUpdate:modelValue":i[0]||(i[0]=t=>u(n)?n.value=t:null),size:"small"},null,8,["modelValue"]),e(m,{modelValue:s(n),"onUpdate:modelValue":i[1]||(i[1]=t=>u(n)?n.value=t:null)},null,8,["modelValue"]),e(m,{modelValue:s(n),"onUpdate:modelValue":i[2]||(i[2]=t=>u(n)?n.value=t:null),size:"large"},null,8,["modelValue"]),e(m,{modelValue:s(n),"onUpdate:modelValue":i[3]||(i[3]=t=>u(n)?n.value=t:null),size:"x-large"},null,8,["modelValue"])]))}}),X={class:"d-flex flex-column"},Y=v({__name:"DemoRatingColors",setup(d){const n=f(4),l=["primary","secondary","success","info","error"];return(i,t)=>(c(),R("div",X,[(c(),R(h,null,k(l,g=>e(m,{key:g,modelValue:s(n),"onUpdate:modelValue":t[0]||(t[0]=x=>u(n)?n.value=x:null),color:g},null,8,["modelValue","color"])),64))]))}}),Z={};function ee(d,n){return c(),_(m,{density:"compact"})}const te=V(Z,[["render",ee]]),ne={};function le(d,n){return c(),_(m)}const oe=V(ne,[["render",le]]),ae={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},se={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},ie={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},re={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},me={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},ce={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`},de={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'bx-smile' : 'bx-sad'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'bx-smile' : 'bx-sad'"
      />
    </template>
  </VRating>
</template>
`},pe={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`},ue={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},ge={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`},ke=v({__name:"rating",setup(d){return(n,l)=>{const i=oe,t=I,g=te,x=Y,y=Q,b=K,z=G,C=A,D=H,$=L,w=T;return c(),_(B,{class:"match-height"},{default:o(()=>[e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Basic",code:s(ae)},{default:o(()=>[l[0]||(l[0]=a("p",null,[r("The "),a("code",null,"v-rating"),r(" component provides a simple interface for gathering user feedback.")],-1)),e(i)]),_:1,__:[0]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Density",code:s(re)},{default:o(()=>[l[1]||(l[1]=a("p",null,[r("Control the space occupied by "),a("code",null,"v-rating"),r(" items using the "),a("code",null,"density"),r(" prop.")],-1)),e(g)]),_:1,__:[1]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Colors",code:s(ie)},{default:o(()=>[l[2]||(l[2]=a("p",null,[r("The "),a("code",null,"v-rating"),r(" component can be colored as you want, you can set both selected and not selected colors.")],-1)),e(x)]),_:1,__:[2]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Size",code:s(ge)},{default:o(()=>[l[3]||(l[3]=a("p",null,[r("Utilize the same sizing classes available in "),a("code",null,"v-icon"),r(" or provide your own with the "),a("code",null,"size"),r(" prop.")],-1)),e(y)]),_:1,__:[3]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Length",code:s(pe)},{default:o(()=>[l[4]||(l[4]=a("p",null,[r("Change the number of items by modifying the the "),a("code",null,"length"),r(" prop.")],-1)),e(b)]),_:1,__:[4]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Clearable",code:s(se)},{default:o(()=>[l[5]||(l[5]=a("p",null,[r("Use "),a("code",null,"clearable"),r(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1)),e(z)]),_:1,__:[5]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Readonly",code:s(ue)},{default:o(()=>[l[6]||(l[6]=a("p",null,[r("For ratings that are not meant to be changed you can use "),a("code",null,"readonly"),r(" prop.")],-1)),e(C)]),_:1,__:[6]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Hover",code:s(me)},{default:o(()=>[l[7]||(l[7]=a("p",null,"Provides visual feedback when hovering over icons",-1)),e(D)]),_:1,__:[7]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Incremented",code:s(ce)},{default:o(()=>[l[8]||(l[8]=a("p",null,[r("The "),a("code",null,"half-increments"),r(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1)),e($)]),_:1,__:[8]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Item slot",code:s(de)},{default:o(()=>[l[9]||(l[9]=a("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1)),e(w)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}}});export{ke as default};
