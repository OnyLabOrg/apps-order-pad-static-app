import{V as $}from"./VMenu-MbtZbKKU.js";import{a as w,b as z,d as L,V as A}from"./VList-D5eD6I_F.js";import{V as M}from"./VListItemAction-BpHuiBRT.js";import{d as S,r as V,g as C,o as c,m as s,aW as k,f as o,b as e,t as l,ai as J,a0 as v,b8 as T,b9 as j,c as h,e as n,bf as N,bg as B,b2 as R,b0 as F,l as g}from"./index-BzB504rc.js";import{V as t}from"./VChip-CFpZofZj.js";import{_ as U}from"./AppCombobox.vue_vue_type_script_setup_true_lang-CUmwCSRl.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as I}from"./VAvatar-UbThTpfu.js";import{_ as Y}from"./AppCardCode.vue_vue_type_style_index_0_lang-uNda1svV.js";import{V as O,a as d}from"./VRow-NzWeI8yj.js";import"./VOverlay-DgqIPIUk.js";import"./easing-Bybner-F.js";import"./delay-B_YHNmxn.js";import"./lazy-CxPMWCb2.js";import"./scopeId-CVjCWtm1.js";import"./VImg-0oTdqOmj.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Cp72NR0A.js";import"./ssrBoot-kSY6L1cP.js";import"./VDivider-CIAJpoCd.js";import"./VSlideGroup-D-zFoVQb.js";import"./form-C6g-wbmd.js";import"./VSelect-sGp-FnQh.js";import"./VTextField-B8iFZQ3y.js";/* empty css                   */import"./VCounter-B5ncV69o.js";import"./VField-DVuRsxSx.js";import"./VInput-C_wjdi3L.js";import"./VCheckboxBtn-CgM8kLjH.js";import"./VSelectionControl-kPwl0vTP.js";import"./filter-CV6dmKCP.js";import"./vue3-perfect-scrollbar-d86bXs-m.js";import"./constants-CCDRJ4Ay.js";import"./VCard-Cwsz9SWS.js";import"./VCardText-CH6xRjOU.js";/* empty css              */const q=S({__name:"DemoChipExpandable",setup(u){const i=V(!1);return(r,m)=>(c(),C($,{modelValue:s(i),"onUpdate:modelValue":m[1]||(m[1]=p=>k(i)?i.value=p:null),transition:"scale-transition"},{activator:o(({props:p})=>[e(t,T(j(p)),{default:o(()=>m[2]||(m[2]=[l(" VueJS ")])),_:2,__:[2]},1040)]),default:o(()=>[e(A,null,{default:o(()=>[e(w,null,{append:o(()=>[e(M,{class:"ms-3"},{default:o(()=>[e(J,{icon:"",variant:"text",size:"x-small",color:"default",onClick:m[0]||(m[0]=p=>i.value=!1)},{default:o(()=>[e(v,{size:"20",icon:"bx-x"})]),_:1})]),_:1})]),default:o(()=>[e(z,{class:"mb-2"},{default:o(()=>m[3]||(m[3]=[l(" VueJS ")])),_:1,__:[3]}),e(L,null,{default:o(()=>m[4]||(m[4]=[l("The Progressive JavaScript Framework")])),_:1,__:[4]})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),G=S({__name:"DemoChipInSelects",setup(u){const i=V(["Programming","Playing games","Sleeping"]),r=V(["Streaming","Eating","Programming","Playing games","Sleeping"]);return(m,p)=>{const b=U;return c(),C(b,{modelValue:s(i),"onUpdate:modelValue":p[0]||(p[0]=_=>k(i)?i.value=_:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"bx-x-circle",items:s(r),label:"Your favorite hobbies","prepend-icon":"bx-filter-alt"},null,8,["modelValue","items"])}}}),H={},K={class:"demo-space-x"};function Q(u,i){return c(),h("div",K,[e(t,{size:"x-small"},{default:o(()=>i[0]||(i[0]=[l(" x-small chip ")])),_:1,__:[0]}),e(t,{size:"small"},{default:o(()=>i[1]||(i[1]=[l(" small chip ")])),_:1,__:[1]}),e(t,{size:"default"},{default:o(()=>i[2]||(i[2]=[l(" Default ")])),_:1,__:[2]}),e(t,{size:"large"},{default:o(()=>i[3]||(i[3]=[l(" large chip ")])),_:1,__:[3]}),e(t,{size:"x-large"},{default:o(()=>i[4]||(i[4]=[l(" x-large chip ")])),_:1,__:[4]})])}const X=y(H,[["render",Q]]),Z={class:"demo-space-x"},ii=S({__name:"DemoChipWithAvatar",setup(u){return(i,r)=>(c(),h("div",Z,[e(t,null,{default:o(()=>[e(I,{start:"",image:s(N)},null,8,["image"]),r[0]||(r[0]=n("span",null,"John Doe",-1))]),_:1,__:[0]}),e(t,null,{default:o(()=>[e(I,{start:"",image:s(B)},null,8,["image"]),r[1]||(r[1]=n("span",null,"Darcy Nooser",-1))]),_:1,__:[1]}),e(t,{pill:"",label:!1,"prepend-avatar":s(R)},{default:o(()=>r[2]||(r[2]=[n("span",null,"Felicia Risker",-1)])),_:1,__:[2]},8,["prepend-avatar"]),e(t,{pill:"",label:!1},{default:o(()=>[e(I,{start:"",image:s(F)},null,8,["image"]),r[3]||(r[3]=n("span",null,"Minnie Mostly",-1))]),_:1,__:[3]})]))}}),ei={},oi={class:"demo-space-x"};function li(u,i){return c(),h("div",oi,[e(t,null,{default:o(()=>[e(v,{start:"",icon:"bx-user"}),i[0]||(i[0]=l(" Account "))]),_:1,__:[0]}),e(t,{color:"primary"},{default:o(()=>[e(v,{start:"",icon:"bx-star"}),i[1]||(i[1]=l(" Premium "))]),_:1,__:[1]}),e(t,{color:"secondary"},{default:o(()=>[e(v,{start:"",icon:"bx-cake"}),i[2]||(i[2]=l(" 1 Year "))]),_:1,__:[2]}),e(t,{color:"success"},{default:o(()=>[e(v,{start:"",icon:"bx-bell"}),i[3]||(i[3]=l(" Notification "))]),_:1,__:[3]}),e(t,{color:"info"},{default:o(()=>[e(v,{start:"",icon:"bx-message"}),i[4]||(i[4]=l(" Message "))]),_:1,__:[4]}),e(t,{color:"warning"},{default:o(()=>[e(v,{start:"",icon:"bx-error"}),i[5]||(i[5]=l(" Warning "))]),_:1,__:[5]}),e(t,{color:"error"},{default:o(()=>[e(v,{start:"",icon:"bx-error-circle"}),i[6]||(i[6]=l(" Error "))]),_:1,__:[6]})])}const ti=y(ei,[["render",li]]),ri={class:"demo-space-x"},si=S({__name:"DemoChipClosable",setup(u){const i=V(!0),r=V(!0),m=V(!0),p=V(!0),b=V(!0),_=V(!0),x=V(!0);return(D,a)=>(c(),h("div",ri,[s(i)?(c(),C(t,{key:0,closable:"","onClick:close":a[0]||(a[0]=f=>i.value=!s(i))},{default:o(()=>a[7]||(a[7]=[l(" Default ")])),_:1,__:[7]})):g("",!0),s(r)?(c(),C(t,{key:1,closable:"",color:"primary","onClick:close":a[1]||(a[1]=f=>r.value=!s(r))},{default:o(()=>a[8]||(a[8]=[l(" Primary ")])),_:1,__:[8]})):g("",!0),s(m)?(c(),C(t,{key:2,closable:"",color:"secondary","onClick:close":a[2]||(a[2]=f=>m.value=!s(m))},{default:o(()=>a[9]||(a[9]=[l(" Secondary ")])),_:1,__:[9]})):g("",!0),s(p)?(c(),C(t,{key:3,closable:"",color:"success","onClick:close":a[3]||(a[3]=f=>p.value=!s(p))},{default:o(()=>a[10]||(a[10]=[l(" Success ")])),_:1,__:[10]})):g("",!0),s(b)?(c(),C(t,{key:4,closable:"",color:"info","onClick:close":a[4]||(a[4]=f=>b.value=!s(b))},{default:o(()=>a[11]||(a[11]=[l(" Info ")])),_:1,__:[11]})):g("",!0),s(_)?(c(),C(t,{key:5,closable:"",color:"warning","onClick:close":a[5]||(a[5]=f=>_.value=!s(_))},{default:o(()=>a[12]||(a[12]=[l(" Warning ")])),_:1,__:[12]})):g("",!0),s(x)?(c(),C(t,{key:6,closable:"",color:"error","onClick:close":a[6]||(a[6]=f=>x.value=!s(x))},{default:o(()=>a[13]||(a[13]=[l(" Error ")])),_:1,__:[13]})):g("",!0)]))}}),ai={},ni={class:"demo-space-x"};function pi(u,i){return c(),h("div",ni,[e(t,{label:!1},{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1,__:[0]}),e(t,{label:!1,color:"primary"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1,__:[1]}),e(t,{label:!1,color:"secondary"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1,__:[2]}),e(t,{label:!1,color:"success"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1,__:[3]}),e(t,{label:!1,color:"info"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1,__:[4]}),e(t,{label:!1,color:"warning"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1,__:[5]}),e(t,{label:!1,color:"error"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1,__:[6]})])}const ci=y(ai,[["render",pi]]),mi={},ui={class:"demo-space-x"};function di(u,i){return c(),h("div",ui,[e(t,{variant:"outlined"},{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1,__:[0]}),e(t,{color:"primary",variant:"outlined"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1,__:[1]}),e(t,{color:"secondary",variant:"outlined"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1,__:[2]}),e(t,{color:"success",variant:"outlined"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1,__:[3]}),e(t,{color:"info",variant:"outlined"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1,__:[4]}),e(t,{color:"warning",variant:"outlined"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1,__:[5]}),e(t,{color:"error",variant:"outlined"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1,__:[6]})])}const Vi=y(mi,[["render",di]]),Ci={},fi={class:"demo-space-x"};function vi(u,i){return c(),h("div",fi,[e(t,{variant:"elevated"},{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1,__:[0]}),e(t,{color:"primary",variant:"elevated"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1,__:[1]}),e(t,{color:"secondary",variant:"elevated"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1,__:[2]}),e(t,{color:"success",variant:"elevated"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1,__:[3]}),e(t,{color:"info",variant:"elevated"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1,__:[4]}),e(t,{color:"warning",variant:"elevated"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1,__:[5]}),e(t,{color:"error",variant:"elevated"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1,__:[6]})])}const hi=y(Ci,[["render",vi]]),bi={},_i={class:"demo-space-x"};function gi(u,i){return c(),h("div",_i,[e(t,null,{default:o(()=>i[0]||(i[0]=[l(" Default ")])),_:1,__:[0]}),e(t,{color:"primary"},{default:o(()=>i[1]||(i[1]=[l(" Primary ")])),_:1,__:[1]}),e(t,{color:"secondary"},{default:o(()=>i[2]||(i[2]=[l(" Secondary ")])),_:1,__:[2]}),e(t,{color:"success"},{default:o(()=>i[3]||(i[3]=[l(" Success ")])),_:1,__:[3]}),e(t,{color:"info"},{default:o(()=>i[4]||(i[4]=[l(" Info ")])),_:1,__:[4]}),e(t,{color:"warning"},{default:o(()=>i[5]||(i[5]=[l(" Warning ")])),_:1,__:[5]}),e(t,{color:"error"},{default:o(()=>i[6]||(i[6]=[l(" Error ")])),_:1,__:[6]})])}const yi=y(bi,[["render",gi]]),xi={ts:`<script lang="ts" setup>
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
`},Wi={ts:`<template>
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
`},$i={ts:`<script setup lang="ts">
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
`},Ce=S({__name:"chip",setup(u){return(i,r)=>{const m=yi,p=Y,b=hi,_=Vi,x=ci,D=si,a=ti,f=ii,P=X,E=G,W=q;return c(),C(O,{class:"match-height"},{default:o(()=>[e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Color",code:s(Si)},{default:o(()=>[r[0]||(r[0]=n("p",null,[l("Use "),n("code",null,"color"),l(" prop to change the background color of chips.")],-1)),e(m)]),_:1,__:[0]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Elevated",code:s(Ii)},{default:o(()=>[r[1]||(r[1]=n("p",null,[l("Use "),n("code",null,"elevated"),l(" variant option to create filled chips.")],-1)),e(b)]),_:1,__:[1]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Outlined",code:s(Pi)},{default:o(()=>[r[2]||(r[2]=n("p",null,[l("Use "),n("code",null,"outlined"),l(" variant option to create outline border chips.")],-1)),e(_)]),_:1,__:[2]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Rounded",code:s(Ei)},{default:o(()=>[r[3]||(r[3]=n("p",null,[l("To use the rounded chip, set "),n("code",null,"label"),l(" props value to "),n("strong",null,"false"),l(".")],-1)),e(x)]),_:1,__:[3]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Closable",code:s(xi)},{default:o(()=>[r[4]||(r[4]=n("p",null,[l("Closable chips can be controlled with a "),n("code",null,"v-model"),l(".")],-1)),e(D)]),_:1,__:[4]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"With Icon",code:s(wi)},{default:o(()=>[r[5]||(r[5]=n("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1)),e(a)]),_:1,__:[5]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"With Avatar",code:s($i)},{default:o(()=>[r[6]||(r[6]=n("p",null,[l("Use "),n("code",null,"pill"),l(" prop to remove the "),n("code",null,"v-avatar"),l(" padding.")],-1)),e(f)]),_:1,__:[6]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Sizes",code:s(Wi)},{default:o(()=>[r[7]||(r[7]=n("p",null,[l("The "),n("code",null,"v-chip"),l(" component can have various sizes from "),n("code",null,"x-small"),l(" to "),n("code",null,"x-large"),l(".")],-1)),e(P)]),_:1,__:[7]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"In Selects",code:s(ki)},{default:o(()=>[r[8]||(r[8]=n("p",null,[l("Selects can use "),n("code",null,"chips"),l(" to display the selected data. Try adding your own tags below.")],-1)),e(E)]),_:1,__:[8]},8,["code"])]),_:1}),e(d,{cols:"12",md:"6"},{default:o(()=>[e(p,{title:"Expandable",code:s(Di)},{default:o(()=>[r[9]||(r[9]=n("p",null,[l("Chips can be combined with "),n("code",null,"v-menu"),l(" to enable a specific set of actions for a chip.")],-1)),e(W)]),_:1,__:[9]},8,["code"])]),_:1})]),_:1})}}});export{Ce as default};
