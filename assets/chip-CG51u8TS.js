import{V as W}from"./VMenu-CCdWNcNc.js";import{a as w,b as z,d as L,V as A}from"./VList-B1vfBGCm.js";import{V as M}from"./VListItemAction-Bc8tMLqC.js";import{d as S,r as V,g as C,o as c,m as a,aQ as k,f as o,b as e,t as l,ab as T,V as v,a$ as J,b0 as j,c as h,e as n,b6 as N,b7 as B,aV as R,aT as F,l as g}from"./index-S43cw9oA.js";import{V as t}from"./VChip-ZFOhz6ig.js";import{_ as U}from"./AppCombobox.vue_vue_type_script_setup_true_lang-COT_P2ic.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as I}from"./VAvatar-BblF4_hD.js";import{_ as Y}from"./AppCardCode.vue_vue_type_style_index_0_lang-BNkMJjB9.js";import{V as O,a as d}from"./VRow-fWKubFJU.js";import"./VOverlay-wbu2zNvB.js";import"./easing-Bybner-F.js";import"./delay-nhsRmnvd.js";import"./lazy-CQqV5261.js";import"./scopeId-DytnCFyf.js";import"./VImg-ULZRPAmZ.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-GyU9kIwU.js";import"./ssrBoot-DUtf6djL.js";import"./VDivider-64nIFpK2.js";import"@vueuse/core";import"./VSlideGroup-rl6l2zh4.js";import"./form-DhdRurvO.js";import"./VSelect-0bZC7JFY.js";import"./VTextField-BU3AMPjT.js";/* empty css                   */import"./VCounter-C1wRTfE3.js";import"./VField-Bi2rqcJt.js";import"./VInput-C3yAXQ_X.js";import"./VCheckboxBtn-B1A3zfym.js";import"./VSelectionControl-zcFFnStE.js";import"./filter-CiINTm4V.js";import"./vue3-perfect-scrollbar-o7s4-CP5.js";import"./VCard-CO8V5xCG.js";import"./VCardText-C2EK2BY0.js";/* empty css              */const Q=S({__name:"DemoChipExpandable",setup(u){const i=V(!1);return(r,m)=>(c(),C(W,{modelValue:a(i),"onUpdate:modelValue":m[1]||(m[1]=p=>k(i)?i.value=p:null),transition:"scale-transition"},{activator:o(({props:p})=>[e(t,J(j(p)),{default:o(()=>m[2]||(m[2]=[l(" VueJS ")])),_:2,__:[2]},1040)]),default:o(()=>[e(A,null,{default:o(()=>[e(w,null,{append:o(()=>[e(M,{class:"ms-3"},{default:o(()=>[e(T,{icon:"",variant:"text",size:"x-small",color:"default",onClick:m[0]||(m[0]=p=>i.value=!1)},{default:o(()=>[e(v,{size:"20",icon:"bx-x"})]),_:1})]),_:1})]),default:o(()=>[e(z,{class:"mb-2"},{default:o(()=>m[3]||(m[3]=[l(" VueJS ")])),_:1,__:[3]}),e(L,null,{default:o(()=>m[4]||(m[4]=[l("The Progressive JavaScript Framework")])),_:1,__:[4]})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),q=S({__name:"DemoChipInSelects",setup(u){const i=V(["Programming","Playing games","Sleeping"]),r=V(["Streaming","Eating","Programming","Playing games","Sleeping"]);return(m,p)=>{const _=U;return c(),C(_,{modelValue:a(i),"onUpdate:modelValue":p[0]||(p[0]=b=>k(i)?i.value=b:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"bx-x-circle",items:a(r),label:"Your favorite hobbies","prepend-icon":"bx-filter-alt"},null,8,["modelValue","items"])}}}),G={},H={class:"demo-space-x"};function K(u,i){return c(),h("div",H,[e(t,{size:"x-small"},{default:o(()=>i[0]||(i[0]=[l(" x-small chip ")])),_:1,__:[0]}),e(t,{size:"small"},{default:o(()=>i[1]||(i[1]=[l(" small chip ")])),_:1,__:[1]}),e(t,{size:"default"},{default:o(()=>i[2]||(i[2]=[l(" Default ")])),_:1,__:[2]}),e(t,{size:"large"},{default:o(()=>i[3]||(i[3]=[l(" large chip ")])),_:1,__:[3]}),e(t,{size:"x-large"},{default:o(()=>i[4]||(i[4]=[l(" x-large chip ")])),_:1,__:[4]})])}const X=y(G,[["render",K]]),Z={class:"demo-space-x"},ii=S({__name:"DemoChipWithAvatar",setup(u){return(i,r)=>(c(),h("div",Z,[e(t,null,{default:o(()=>[e(I,{start:"",image:a(N)},null,8,["image"]),r[0]||(r[0]=n("span",null,"John Doe",-1))]),_:1,__:[0]}),e(t,null,{default:o(()=>[e(I,{start:"",image:a(B)},null,8,["image"]),r[1]||(r[1]=n("span",null,"Darcy Nooser",-1))]),_:1,__:[1]}),e(t,{pill:"",label:!1,"prepend-avatar":a(R)},{default:o(()=>r[2]||(r[2]=[n("span",null,"Felicia Risker",-1)])),_:1,__:[2]},8,["prepend-avatar"]),e(t,{pill:"",label:!1},{default:o(()=>[e(I,{start:"",image:a(F)},null,8,["image"]),r[3]||(r[3]=n("span",null,"Minnie Mostly",-1))]),_:1,__:[3]})]))}}),ei={},oi={class:"demo-space-x"};function li(u,i){return c(),h("div",oi,[e(t,null,{default:o(()=>[e(v,{start:"",icon:"bx-user"}),i[0]||(i[0]=l(" Account "))]),_:1,__:[0]}),e(t,{color:"primary"},{default:o(()=>[e(v,{start:"",icon:"bx-star"}),i[1]||(i[1]=l(" Premium "))]),_:1,__:[1]}),e(t,{color:"secondary"},{default:o(()=>[e(v,{start:"",icon:"bx-cake"}),i[2]||(i[2]=l(" 1 Year "))]),_:1,__:[2]}),e(t,{color:"success"},{default:o(()=>[e(v,{start:"",icon:"bx-bell"}),i[3]||(i[3]=l(" Notification "))]),_:1,__:[3]}),e(t,{color:"info"},{default:o(()=>[e(v,{start:"",icon:"bx-message"}),i[4]||(i[4]=l(" Message "))]),_:1,__:[4]}),e(t,{color:"warning"},{default:o(()=>[e(v,{start:"",icon:"bx-error"}),i[5]||(i[5]=l(" Warning "))]),_:1,__:[5]}),e(t,{color:"error"},{default:o(()=>[e(v,{start:"",icon:"bx-error-circle"}),i[6]||(i[6]=l(" Error "))]),_:1,__:[6]})])}const ti=y(ei,[["render",li]]),ri={class:"demo-space-x"},ai=S({__name:"DemoChipClosable",setup(u){const i=V(!0),r=V(!0),m=V(!0),p=V(!0),_=V(!0),b=V(!0),x=V(!0);return(D,s)=>(c(),h("div",ri,[a(i)?(c(),C(t,{key:0,closable:"","onClick:close":s[0]||(s[0]=f=>i.value=!a(i))},{default:o(()=>s[7]||(s[7]=[l(" Default ")])),_:1,__:[7]})):g("",!0),a(r)?(c(),C(t,{key:1,closable:"",color:"primary","onClick:close":s[1]||(s[1]=f=>r.value=!a(r))},{default:o(()=>s[8]||(s[8]=[l(" Primary ")])),_:1,__:[8]})):g("",!0),a(m)?(c(),C(t,{key:2,closable:"",color:"secondary","onClick:close":s[2]||(s[2]=f=>m.value=!a(m))},{default:o(()=>s[9]||(s[9]=[l(" Secondary ")])),_:1,__:[9]})):g("",!0),a(p)?(c(),C(t,{key:3,closable:"",color:"success","onClick:close":s[3]||(s[3]=f=>p.value=!a(p))},{default:o(()=>s[10]||(s[10]=[l(" Success ")])),_:1,__:[10]})):g("",!0),a(_)?(c(),C(t,{key:4,closable:"",color:"info","onClick:close":s[4]||(s[4]=f=>_.value=!a(_))},{default:o(()=>s[11]||(s[11]=[l(" Info ")])),_:1,__:[11]})):g("",!0),a(b)?(c(),C(t,{key:5,closable:"",color:"warning","onClick:close":s[5]||(s[5]=f=>b.value=!a(b))},{default:o(()=>s[12]||(s[12]=[l(" Warning ")])),_:1,__:[12]})):g("",!0),a(x)?(c(),C(t,{key:6,closable:"",color:"error","onClick:close":s[6]||(s[6]=f=>x.value=!a(x))},{default:o(()=>s[13]||(s[13]=[l(" Error ")])),_:1,__:[13]})):g("",!0)]))}}),si={},ni={class:"demo-space-x"};function pi(u,i){return c(),h("div",ni,[e(t,{label:!1},{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1,__:[0]}),e(t,{label:!1,color:"primary"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1,__:[1]}),e(t,{label:!1,color:"secondary"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1,__:[2]}),e(t,{label:!1,color:"success"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1,__:[3]}),e(t,{label:!1,color:"info"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1,__:[4]}),e(t,{label:!1,color:"warning"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1,__:[5]}),e(t,{label:!1,color:"error"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1,__:[6]})])}const ci=y(si,[["render",pi]]),mi={},ui={class:"demo-space-x"};function di(u,i){return c(),h("div",ui,[e(t,{variant:"outlined"},{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1,__:[0]}),e(t,{color:"primary",variant:"outlined"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1,__:[1]}),e(t,{color:"secondary",variant:"outlined"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1,__:[2]}),e(t,{color:"success",variant:"outlined"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1,__:[3]}),e(t,{color:"info",variant:"outlined"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1,__:[4]}),e(t,{color:"warning",variant:"outlined"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1,__:[5]}),e(t,{color:"error",variant:"outlined"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1,__:[6]})])}const Vi=y(mi,[["render",di]]),Ci={},fi={class:"demo-space-x"};function vi(u,i){return c(),h("div",fi,[e(t,{variant:"elevated"},{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1,__:[0]}),e(t,{color:"primary",variant:"elevated"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1,__:[1]}),e(t,{color:"secondary",variant:"elevated"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1,__:[2]}),e(t,{color:"success",variant:"elevated"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1,__:[3]}),e(t,{color:"info",variant:"elevated"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1,__:[4]}),e(t,{color:"warning",variant:"elevated"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1,__:[5]}),e(t,{color:"error",variant:"elevated"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1,__:[6]})])}const hi=y(Ci,[["render",vi]]),_i={},bi={class:"demo-space-x"};function gi(u,i){return c(),h("div",bi,[e(t,null,{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1,__:[0]}),e(t,{color:"primary"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1,__:[1]}),e(t,{color:"secondary"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1,__:[2]}),e(t,{color:"success"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1,__:[3]}),e(t,{color:"info"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1,__:[4]}),e(t,{color:"warning"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1,__:[5]}),e(t,{color:"error"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1,__:[6]})])}const yi=y(_i,[["render",gi]]),xi={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},Si={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},Ii={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},Di={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="bx-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle class="mb-2">
          VueJS
        </VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-3">
            <VBtn
              icon
              variant="text"
              size="x-small"
              color="default"
              @click="isMenuVisible = false"
            >
              <VIcon
                size="20"
                icon="bx-x"
              />
            </VBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},ki={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing games', 'Sleeping'])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="bx-x-circle"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="bx-filter-alt"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing games',
  'Sleeping',
])
<\/script>

<template>
  <AppCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="bx-x-circle"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="bx-filter-alt"
  />
</template>
`},Pi={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},Ei={ts:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip :label="false">
      Default
    </VChip>

    <VChip
      :label="false"
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      :label="false"
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      :label="false"
      color="success"
    >
      Success
    </VChip>

    <VChip
      :label="false"
      color="info"
    >
      Info
    </VChip>

    <VChip
      :label="false"
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      :label="false"
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},$i={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip size="default">
      Default
    </VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},Wi={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip
      pill
      :label="false"
      :prepend-avatar="avatar3"
    >
      <span>Felicia Risker</span>
    </VChip>

    <VChip
      pill
      :label="false"
    >
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},wi={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="bx-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="bx-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="bx-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="bx-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="bx-message"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="bx-error"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="bx-error-circle"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        icon="bx-user"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        icon="bx-star"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        icon="bx-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        icon="bx-bell"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        icon="bx-message"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        icon="bx-error"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        icon="bx-error-circle"
      />
      Error
    </VChip>
  </div>
</template>
`},Ce=S({__name:"chip",setup(u){return(i,r)=>{const m=yi,p=Y,_=hi,b=Vi,x=ci,D=ai,s=ti,f=ii,P=X,E=q,$=Q;return c(),C(O,{class:"match-height"},{default:o(()=>[e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Color",code:a(Si)},{default:o(()=>[r[0]||(r[0]=n("p",null,[l("Use "),n("code",null,"color"),l(" prop to change the background color of chips.")],-1)),e(m)]),_:1,__:[0]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Elevated",code:a(Ii)},{default:o(()=>[r[1]||(r[1]=n("p",null,[l("Use "),n("code",null,"elevated"),l(" variant option to create filled chips.")],-1)),e(_)]),_:1,__:[1]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Outlined",code:a(Pi)},{default:o(()=>[r[2]||(r[2]=n("p",null,[l("Use "),n("code",null,"outlined"),l(" variant option to create outline border chips.")],-1)),e(b)]),_:1,__:[2]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Rounded",code:a(Ei)},{default:o(()=>[r[3]||(r[3]=n("p",null,[l("To use the rounded chip, set "),n("code",null,"label"),l(" props value to "),n("strong",null,"false"),l(".")],-1)),e(x)]),_:1,__:[3]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Closable",code:a(xi)},{default:o(()=>[r[4]||(r[4]=n("p",null,[l("Closable chips can be controlled with a "),n("code",null,"v-model"),l(".")],-1)),e(D)]),_:1,__:[4]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"With Icon",code:a(wi)},{default:o(()=>[r[5]||(r[5]=n("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1)),e(s)]),_:1,__:[5]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"With Avatar",code:a(Wi)},{default:o(()=>[r[6]||(r[6]=n("p",null,[l("Use "),n("code",null,"pill"),l(" prop to remove the "),n("code",null,"v-avatar"),l(" padding.")],-1)),e(f)]),_:1,__:[6]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Sizes",code:a($i)},{default:o(()=>[r[7]||(r[7]=n("p",null,[l("The "),n("code",null,"v-chip"),l(" component can have various sizes from "),n("code",null,"x-small"),l(" to "),n("code",null,"x-large"),l(".")],-1)),e(P)]),_:1,__:[7]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"In Selects",code:a(ki)},{default:o(()=>[r[8]||(r[8]=n("p",null,[l("Selects can use "),n("code",null,"chips"),l(" to display the selected data. Try adding your own tags below.")],-1)),e(E)]),_:1,__:[8]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Expandable",code:a(Di)},{default:o(()=>[r[9]||(r[9]=n("p",null,[l("Chips can be combined with "),n("code",null,"v-menu"),l(" to enable a specific set of actions for a chip.")],-1)),e($)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}}});export{Ce as default};
