import{V as c,a as u}from"./VRadioGroup-BmDsi3M0.js";import{d as v,r as m,g as G,o as p,m as s,aV as R,f as i,c as _,i as y,b as o,F as b,e as a,t as n}from"./index-aXXptKwE.js";import{V as D}from"./VDivider-BRRwCOP8.js";import{_ as $}from"./AppCardCode.vue_vue_type_style_index_0_lang-C2irG8-U.js";import{V as C,a as f}from"./VRow-LpqTHoIe.js";import"./VSelectionControl-BbQBargG.js";import"./form-DFJvu2Ek.js";import"./VInput-p4LI0UAF.js";import"./VImg-CjS8qdl_.js";import"./vue3-perfect-scrollbar-qwIjRjaC.js";import"./VCard-Lfr3kqqO.js";import"./VAvatar-DoaMMzmU.js";import"./VCardText-BBHWSO5V.js";/* empty css              */const U=v({__name:"DemoRadioValidation",setup(V){const l=m(1),t=[d=>d!==3?!0:"Do not select the third one!"];return(d,e)=>(p(),G(c,{modelValue:s(l),"onUpdate:modelValue":e[0]||(e[0]=r=>R(l)?l.value=r:null),inline:"",rules:t},{default:i(()=>[(p(),_(b,null,y(3,r=>o(u,{key:r,error:s(l)===3,label:`Radio ${r}`,value:r},null,8,["error","label","value"])),64))]),_:1},8,["modelValue"]))}}),w=v({__name:"DemoRadioIcon",setup(V){const l=m(1);return(t,d)=>(p(),G(c,{modelValue:s(l),"onUpdate:modelValue":d[0]||(d[0]=e=>R(l)?l.value=e:null),"false-icon":"bx-bell-off","true-icon":"bx-bell"},{default:i(()=>[(p(),_(b,null,y(2,e=>o(u,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"]))}}),S=v({__name:"DemoRadioLabelSlot",setup(V){const l=m("DuckDuckGo");return(t,d)=>(p(),G(c,{modelValue:s(l),"onUpdate:modelValue":d[0]||(d[0]=e=>R(l)?l.value=e:null)},{label:i(()=>d[1]||(d[1]=[a("div",null,[n("Your favorite "),a("strong",null,"search engine")],-1)])),default:i(()=>[o(u,{value:"Google"},{label:i(()=>d[2]||(d[2]=[a("div",null,[n(" Of course it's "),a("span",{class:"text-success"}," Google ")],-1)])),_:1}),o(u,{value:"DuckDuckGo"},{label:i(()=>d[3]||(d[3]=[a("div",null,[n(" Definitely "),a("span",{class:"text-primary"}," DuckDuckGo ")],-1)])),_:1})]),_:1},8,["modelValue"]))}}),I=v({__name:"DemoRadioDensity",setup(V){const l=m("radio-1"),t=m("radio-1");return(d,e)=>(p(),_(b,null,[o(c,{modelValue:s(l),"onUpdate:modelValue":e[0]||(e[0]=r=>R(l)?l.value=r:null)},{default:i(()=>[o(u,{label:"Option 1",value:"radio-1",density:"compact"}),o(u,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"]),o(D,{class:"my-3"}),o(c,{modelValue:s(t),"onUpdate:modelValue":e[1]||(e[1]=r=>R(t)?t.value=r:null),inline:""},{default:i(()=>[o(u,{label:"Option 1",value:"radio-1",density:"compact"}),o(u,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"])],64))}}),j=v({__name:"DemoRadioInline",setup(V){const l=m("radio-1"),t=m("radio-1");return(d,e)=>(p(),_(b,null,[o(c,{modelValue:s(l),"onUpdate:modelValue":e[0]||(e[0]=r=>R(l)?l.value=r:null)},{default:i(()=>[o(u,{label:"Option 1",value:"radio-1"}),o(u,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),o(D,{class:"my-4"}),o(c,{modelValue:s(t),"onUpdate:modelValue":e[1]||(e[1]=r=>R(t)?t.value=r:null),inline:""},{default:i(()=>[o(u,{label:"Option 1",value:"radio-1"}),o(u,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])],64))}}),B=v({__name:"DemoRadioColors",setup(V){const l=m("primary"),t=["Primary","Secondary","Success","Info","Warning","Error"];return(d,e)=>(p(),G(c,{modelValue:s(l),"onUpdate:modelValue":e[0]||(e[0]=r=>R(l)?l.value=r:null),inline:""},{default:i(()=>[a("div",null,[(p(),_(b,null,y(t,r=>o(u,{key:r,label:r,color:r.toLocaleLowerCase(),value:r.toLocaleLowerCase(),class:"me-3"},null,8,["label","color","value"])),64))])]),_:1},8,["modelValue"]))}}),E={class:""},A=v({__name:"DemoRadioBasic",setup(V){const l=m(1);return(t,d)=>(p(),_("div",E,[o(c,{modelValue:s(l),"onUpdate:modelValue":d[0]||(d[0]=e=>R(l)?l.value=e:null)},{default:i(()=>[(p(),_(b,null,y(2,e=>o(u,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]))}}),F={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`},N={ts:`<script lang="ts" setup>
const selectedRadio = ref('primary')
const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
        class="me-3"
      />
    </div>
  </VRadioGroup>
</template>
`,js:`<script setup>
const selectedRadio = ref('primary')

const colorsRadio = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
]
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
        class="me-3"
      />
    </div>
  </VRadioGroup>
</template>
`},P={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`},T={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="bx-bell-off"
    true-icon="bx-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="bx-bell-off"
    true-icon="bx-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},W={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`},Y={ts:`<script lang="ts" setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`,js:`<script setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`},H={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
const rules = [(value: number) => (value !== 3 ? true : 'Do not select the third one!')]
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
const rules = [value => value !== 3 ? true : 'Do not select the third one!']
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},io=v({__name:"radio",setup(V){return(l,t)=>{const d=A,e=$,r=B,g=j,k=I,O=S,x=w,L=U;return p(),G(C,{class:"match-height"},{default:i(()=>[o(f,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Basic",code:s(F)},{default:i(()=>[t[0]||(t[0]=a("p",null,[n("The "),a("code",null,"v-radio"),n(" component is a simple radio button.")],-1)),o(d)]),_:1,__:[0]},8,["code"])]),_:1}),o(f,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Colors",code:s(N)},{default:i(()=>[t[1]||(t[1]=a("p",null,[n("Radios can be colored by using any of the built-in colors and contextual names using the "),a("code",null,"color"),n(" prop.")],-1)),o(r)]),_:1,__:[1]},8,["code"])]),_:1}),o(f,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Inline",code:s(W)},{default:i(()=>[t[2]||(t[2]=a("p",null,[n("Use "),a("code",null,"inline"),n(" prop to displays radio buttons in row.")],-1)),o(g)]),_:1,__:[2]},8,["code"])]),_:1}),o(f,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Density",code:s(P)},{default:i(()=>[t[3]||(t[3]=a("p",null,[n("Use "),a("code",null,"density"),n(" prop to adjusts the spacing within the component. Available options are: "),a("code",null,"default"),n(", "),a("code",null,"comfortable"),n(", and "),a("code",null,"compact"),n(".")],-1)),o(k)]),_:1,__:[3]},8,["code"])]),_:1}),o(f,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Label Slot",code:s(Y)},{default:i(()=>[t[4]||(t[4]=a("p",null,[n("Radio Group labels can be defined in "),a("code",null,"label"),n(" slot - that will allow to use HTML content.")],-1)),o(O)]),_:1,__:[4]},8,["code"])]),_:1}),o(f,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Icon",code:s(T)},{default:i(()=>[t[5]||(t[5]=a("p",null,[n("Use "),a("code",null,"false-icon"),n(" and "),a("code",null,"true-icon"),n(" prop to set icon on inactive and active state.")],-1)),o(x)]),_:1,__:[5]},8,["code"])]),_:1}),o(f,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Validation",code:s(H)},{default:i(()=>[t[6]||(t[6]=a("p",null,[n("Use "),a("code",null,"rules"),n(" prop to validate a radio. Accepts a mixed array of types "),a("code",null,"function"),n(", "),a("code",null,"boolean"),n(" and "),a("code",null,"string"),n(". Functions pass an input value as an argument and must return either "),a("code",null,"true"),n(" / "),a("code",null,"false"),n(" or a string containing an error message.")],-1)),o(L)]),_:1,__:[6]},8,["code"])]),_:1})]),_:1})}}});export{io as default};
