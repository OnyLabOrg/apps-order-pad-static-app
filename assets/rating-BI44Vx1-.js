import{V as m}from"./VRating-pX_L7TRi.js";import{d as v,r as f,g as _,o as c,m as a,aV as u,f as o,b as e,q as S,$ as U,c as R,e as s,v as j,F as h,i as k,t as r}from"./index-0gbIf0HW.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as F}from"./VSlider-D4pOak_w.js";import{_ as I}from"./AppCardCode.vue_vue_type_style_index_0_lang-BqLS12tF.js";import{V as B,a as p}from"./VRow-B_ftAYAy.js";import"./VSliderTrack-sJc1g_1a.js";import"./VInput-DTMystpM.js";import"./form-D4RA87Ol.js";import"./VImg-B-FFDCR2.js";import"./vue3-perfect-scrollbar-BHaE5M8G.js";import"./VCard-jkIyw6r1.js";import"./VAvatar-BhOXCv8m.js";import"./VCardText-BUqeQB-C.js";import"./VDivider-C2GoLMsu.js";/* empty css              */const T=v({__name:"DemoRatingItemSlot",setup(d){const n=f(4.5);return(l,i)=>(c(),_(m,{modelValue:a(n),"onUpdate:modelValue":i[0]||(i[0]=t=>u(n)?n.value=t:null)},{item:o(t=>[e(U,S(t,{size:25,color:t.isFilled?"success":"secondary",class:"me-3",icon:t.isFilled?"bx-smile":"bx-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}}),L=v({__name:"DemoRatingIncremented",setup(d){const n=f(4.5);return(l,i)=>(c(),_(m,{modelValue:a(n),"onUpdate:modelValue":i[0]||(i[0]=t=>u(n)?n.value=t:null),"half-increments":"",hover:""},null,8,["modelValue"]))}}),M={};function N(d,n){return c(),_(m,{hover:""})}const H=V(M,[["render",N]]),P={};function q(d,n){return c(),_(m,{readonly:"","model-value":4})}const A=V(P,[["render",q]]),E={};function G(d,n){return c(),_(m,{clearable:""})}const J=V(E,[["render",G]]),K={class:"font-weight-medium mb-0"},O=v({__name:"DemoRatingLength",setup(d){const n=f(5),l=f(2);return(i,t)=>(c(),R(h,null,[t[2]||(t[2]=s("div",{class:"text-caption"}," Custom length ",-1)),e(F,{modelValue:a(n),"onUpdate:modelValue":t[0]||(t[0]=g=>u(n)?n.value=g:null),min:1,max:7},null,8,["modelValue"]),e(m,{modelValue:a(l),"onUpdate:modelValue":t[1]||(t[1]=g=>u(l)?l.value=g:null),length:a(n)},null,8,["modelValue","length"]),s("p",K," Model: "+j(a(l)),1)],64))}}),Q={class:"d-flex flex-column"},W=v({__name:"DemoRatingSize",setup(d){const n=f(4);return(l,i)=>(c(),R("div",Q,[e(m,{modelValue:a(n),"onUpdate:modelValue":i[0]||(i[0]=t=>u(n)?n.value=t:null),size:"small"},null,8,["modelValue"]),e(m,{modelValue:a(n),"onUpdate:modelValue":i[1]||(i[1]=t=>u(n)?n.value=t:null)},null,8,["modelValue"]),e(m,{modelValue:a(n),"onUpdate:modelValue":i[2]||(i[2]=t=>u(n)?n.value=t:null),size:"large"},null,8,["modelValue"]),e(m,{modelValue:a(n),"onUpdate:modelValue":i[3]||(i[3]=t=>u(n)?n.value=t:null),size:"x-large"},null,8,["modelValue"])]))}}),X={class:"d-flex flex-column"},Y=v({__name:"DemoRatingColors",setup(d){const n=f(4),l=["primary","secondary","success","info","error"];return(i,t)=>(c(),R("div",X,[(c(),R(h,null,k(l,g=>e(m,{key:g,modelValue:a(n),"onUpdate:modelValue":t[0]||(t[0]=x=>u(n)?n.value=x:null),color:g},null,8,["modelValue","color"])),64))]))}}),Z={};function ee(d,n){return c(),_(m,{density:"compact"})}const te=V(Z,[["render",ee]]),ne={};function le(d,n){return c(),_(m)}const oe=V(ne,[["render",le]]),se={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},ae={ts:`<template>
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
`},je=v({__name:"rating",setup(d){return(n,l)=>{const i=oe,t=I,g=te,x=Y,y=W,b=O,z=J,C=A,D=H,$=L,w=T;return c(),_(B,{class:"match-height"},{default:o(()=>[e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Basic",code:a(se)},{default:o(()=>[l[0]||(l[0]=s("p",null,[r("The "),s("code",null,"v-rating"),r(" component provides a simple interface for gathering user feedback.")],-1)),e(i)]),_:1,__:[0]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Density",code:a(re)},{default:o(()=>[l[1]||(l[1]=s("p",null,[r("Control the space occupied by "),s("code",null,"v-rating"),r(" items using the "),s("code",null,"density"),r(" prop.")],-1)),e(g)]),_:1,__:[1]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Colors",code:a(ie)},{default:o(()=>[l[2]||(l[2]=s("p",null,[r("The "),s("code",null,"v-rating"),r(" component can be colored as you want, you can set both selected and not selected colors.")],-1)),e(x)]),_:1,__:[2]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Size",code:a(ge)},{default:o(()=>[l[3]||(l[3]=s("p",null,[r("Utilize the same sizing classes available in "),s("code",null,"v-icon"),r(" or provide your own with the "),s("code",null,"size"),r(" prop.")],-1)),e(y)]),_:1,__:[3]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Length",code:a(pe)},{default:o(()=>[l[4]||(l[4]=s("p",null,[r("Change the number of items by modifying the the "),s("code",null,"length"),r(" prop.")],-1)),e(b)]),_:1,__:[4]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Clearable",code:a(ae)},{default:o(()=>[l[5]||(l[5]=s("p",null,[r("Use "),s("code",null,"clearable"),r(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1)),e(z)]),_:1,__:[5]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Readonly",code:a(ue)},{default:o(()=>[l[6]||(l[6]=s("p",null,[r("For ratings that are not meant to be changed you can use "),s("code",null,"readonly"),r(" prop.")],-1)),e(C)]),_:1,__:[6]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Hover",code:a(me)},{default:o(()=>[l[7]||(l[7]=s("p",null,"Provides visual feedback when hovering over icons",-1)),e(D)]),_:1,__:[7]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Incremented",code:a(ce)},{default:o(()=>[l[8]||(l[8]=s("p",null,[r("The "),s("code",null,"half-increments"),r(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1)),e($)]),_:1,__:[8]},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Item slot",code:a(de)},{default:o(()=>[l[9]||(l[9]=s("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1)),e(w)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}}});export{je as default};
