import{d as c,r as O,c as n,o as s,e as f,F as m,i as w,v as F,m as e,b as r,f as p,t as y,bc as k,ai as S,a0 as q,g as le}from"./index-SoXi43cQ.js";import{r as b}from"./swiper-element-bundle-CgkeQqLA.js";import{V as u}from"./VImg-scgperLn.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as H}from"./VCardText-CDtNziFX.js";import{V as K}from"./VCard-DbWX1JO1.js";import{_ as me}from"./AppCardCode.vue_vue_type_style_index_0_lang-Djp9Jzg-.js";import{V as we,a as g}from"./VRow-Bmt_BqfO.js";import"./VAvatar-IO3EFfCA.js";import"./vue3-perfect-scrollbar-C_T_Qmzo.js";import"./VDivider-CebMahjL.js";/* empty css              */const ce={class:"swiper-virtual"},de=["slides"],ge={class:"text-secondary"},be={class:"d-flex justify-center gap-4 flex-wrap"},ue=c({__name:"DemoSwiperVirtualSlides",setup(d){b();const l=Array.from({length:500},(v,a)=>`Slides ${a+1}`),o=O(null),i=O(1),t=O(500),j=v=>{var a;(a=o.value)==null||a.swiper.slideTo(v-1)},U=()=>{var v;(v=o.value)==null||v.swiper.prependSlide([`<swiper-slide>Slide ${--i.value} </swiper-slide>`,`<swiper-slide>Slide ${--i.value} </swiper-slide>`])},T=()=>{var v;(v=o.value)==null||v.swiper.appendSlide([`<swiper-slide>Slide ${++t.value} </swiper-slide>`])};return(v,a)=>(s(),n("section",ce,[f("swiper-container",{ref_key:"swiperEl",ref:o,virtual:"true",slides:e(l),navigation:"true","slides-per-view":"5","space-between":"50","free-mode":"true","events-prefix":"swiper-",breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},[(s(!0),n(m,null,w(e(l),(_,L)=>(s(),n("swiper-slide",{key:L},[f("div",ge,F(_),1)]))),128))],8,de),f("div",be,[r(S,{variant:"outlined",color:"primary",onClick:k(U,["prevent"])},{default:p(()=>a[3]||(a[3]=[y(" Prepend 2 Slides ")])),_:1,__:[3]}),r(S,{variant:"outlined",color:"primary",onClick:a[0]||(a[0]=k(_=>j(1),["prevent"]))},{default:p(()=>a[4]||(a[4]=[y(" Slide 1 ")])),_:1,__:[4]}),r(S,{variant:"outlined",color:"primary",onClick:a[1]||(a[1]=k(_=>j(250),["prevent"]))},{default:p(()=>a[5]||(a[5]=[y(" Slide 250 ")])),_:1,__:[5]}),r(S,{variant:"outlined",color:"primary",onClick:a[2]||(a[2]=k(_=>j(500),["prevent"]))},{default:p(()=>a[6]||(a[6]=[y(" Slide 500 ")])),_:1,__:[6]}),r(S,{variant:"outlined",color:"primary",onClick:k(T,["prevent"])},{default:p(()=>a[7]||(a[7]=[y(" Append Slide ")])),_:1,__:[7]})])]))}}),z="https://orderpad.apps.onylab.com/assets/banner-31-D6mS0gQn.jpg",P="https://orderpad.apps.onylab.com/assets/banner-32-B8kg_gZc.jpg",D="https://orderpad.apps.onylab.com/assets/banner-33-DfQ0Urdo.jpg",G="https://orderpad.apps.onylab.com/assets/banner-34-CMWn1p69.jpg",E="https://orderpad.apps.onylab.com/assets/banner-35-avrf_yoA.jpg",Z="https://orderpad.apps.onylab.com/assets/banner-36-BiLQv0qP.jpg",J="https://orderpad.apps.onylab.com/assets/banner-37-CxyHDUrj.jpg",X="https://orderpad.apps.onylab.com/assets/5-CFPERer_.jpg",$="https://orderpad.apps.onylab.com/assets/banner-39-D9mpewKd.jpg",fe={"pagination-clickable":"true","slides-per-view":"5","space-between":"50","events-prefix":"swiper-",breakpoints:{1024:{slidesPerView:4,spaceBetween:40},768:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},ve=c({__name:"DemoSwiperResponsiveBreakpoints",setup(d){return b(),(l,o)=>(s(),n("swiper-container",fe,[(s(!0),n(m,null,w([e(z),e(P),e(D),e(G),e(E),e(Z),e(J),e(X),e($)],i=>(s(),n("swiper-slide",{key:i},[r(u,{src:i},null,8,["src"])]))),128))]))}}),C="https://orderpad.apps.onylab.com/assets/banner-20-D60huBoA.jpg",N="https://orderpad.apps.onylab.com/assets/banner-4-EPycabrm.jpg",Y="https://orderpad.apps.onylab.com/assets/banner-5-DVgdLDIC.jpg",x="https://orderpad.apps.onylab.com/assets/banner-7-C3Ec249A.jpg",A="https://orderpad.apps.onylab.com/assets/banner-8-CS7lrdd8.jpg",W="https://orderpad.apps.onylab.com/assets/banner-9-CN54Uf8b.jpg",_e={"pagination-clickable":"true",autoplay:"true",navigation:"true","events-prefix":"swiper-"},xe=c({__name:"DemoSwiperLazyLoading",setup(d){return b(),(l,o)=>(s(),n("swiper-container",_e,[(s(!0),n(m,null,w([e(N),e(Y),e(W),e(x),e(A),e(C)],i=>(s(),n("swiper-slide",{key:i,lazy:"true"},[r(u,{src:i,cover:"",loading:"lazy"},null,8,["src"])]))),128))]))}}),V="https://orderpad.apps.onylab.com/assets/banner-11-ClWmypCi.jpg",h="https://orderpad.apps.onylab.com/assets/6-C2cDgitj.jpg",I="https://orderpad.apps.onylab.com/assets/banner-13-Cforbb5S.jpg",M="https://orderpad.apps.onylab.com/assets/banner-15-DVoX7is_.jpg",Q="https://orderpad.apps.onylab.com/assets/banner-16-BBt3y7wv.jpg",je={class:"mySwiper","thumbs-swiper":".mySwiper2",loop:"true","space-between":"10",navigation:"true","centered-slides":"true","events-prefix":"swiper-"},ye={class:"mySwiper2",loop:"true","free-mode":"true","events-prefix":"swiper-","slides-per-view":"4"},ke=c({__name:"DemoSwiperGallery",setup(d){return b(),(l,o)=>(s(),n(m,null,[f("swiper-container",je,[(s(!0),n(m,null,w([e(V),e(h),e(I),e(M),e(Q),e(V),e(h),e(I)],i=>(s(),n("swiper-slide",{key:i},[r(u,{src:i,cover:""},null,8,["src"])]))),128))]),f("swiper-container",ye,[(s(!0),n(m,null,w([e(V),e(h),e(I),e(M),e(Q),e(V),e(h),e(I)],i=>(s(),n("swiper-slide",{key:i},[r(u,{src:i,cover:""},null,8,["src"])]))),128))])],64))}}),Se=B(ke,[["__scopeId","data-v-0fe99e19"]]),Ve="https://orderpad.apps.onylab.com/assets/banner-10-C2w4rcW8.jpg",he={pagination:"true",navigation:"true",autoplay:"true","centered-slides":"true","events-prefix":"swiper-"},Ie=c({__name:"DemoSwiperAutoplay",setup(d){return b(),(l,o)=>(s(),n("swiper-container",he,[(s(!0),n(m,null,w([e(x),e(A),e(W),e(Ve),e(V),e(C)],i=>(s(),n("swiper-slide",{key:i},[r(u,{src:i,cover:""},null,8,["src"])]))),128))]))}}),Be={pagination:"true",effect:"coverflow","grab-cursor":"true","centered-slides":"true","slides-per-view":"auto","coverflow-effect-rotate":"50","coverflow-effect-stretch":"0","coverflow-effect-depth":"100","coverflow-effect-modifier":"1","coverflow-effect-slide-shadows":"true","events-prefix":"swiper-"},Pe=c({__name:"DemoSwiperCoverflowEffect",setup(d){return b(),(l,o)=>(s(),n("swiper-container",Be,[(s(!0),n(m,null,w([e(z),e(P),e(D),e(G),e(E),e(Z),e(J),e(X),e($)],i=>(s(),n("swiper-slide",{key:i},[r(u,{src:i},null,8,["src"])]))),128))]))}}),Ce=B(Pe,[["__scopeId","data-v-9dc840e8"]]),$e="https://orderpad.apps.onylab.com/assets/banner-21-BbDBzY5j.jpg",ze="https://orderpad.apps.onylab.com/assets/banner-23-eu_41WqH.jpg",De="https://orderpad.apps.onylab.com/assets/banner-24-BNOF4zrU.jpg",Ge={pagination:"true","centered-slides":"true",effect:"cube","grab-cursor":"true","cube-effect-shadow":"true","cube-effect-slide-shadows":"true","cube-effect-shadow-scale":"0.94","events-prefix":"swiper-"},Ee=c({__name:"DemoSwiperCubeEffect",setup(d){return b(),(l,o)=>(s(),n("swiper-container",Ge,[(s(!0),n(m,null,w([e($e),e(P),e(ze),e(De)],i=>(s(),n("swiper-slide",{key:i},[r(u,{src:i},null,8,["src"])]))),128))]))}}),Ne=B(Ee,[["__scopeId","data-v-33857f47"]]),Ae="https://orderpad.apps.onylab.com/assets/banner-17-vuA5wUeU.jpg",Ue="https://orderpad.apps.onylab.com/assets/banner-18-rnuWLp8J.jpg",Te="https://orderpad.apps.onylab.com/assets/banner-19-DKrHObKZ.jpg",Le={"space-between":"30",pagination:"true",navigation:"true",effect:"fade","events-prefix":"swiper-"},Oe=c({__name:"DemoSwiperFade",setup(d){return b(),(l,o)=>(s(),n("swiper-container",Le,[(s(!0),n(m,null,w([e(C),e(Te),e(Ue),e(Ae),e(Q)],i=>(s(),n("swiper-slide",{key:i},[r(u,{src:i},null,8,["src"])]))),128))]))}}),Qe={"centered-slides":"true","space-between":"30","slides-per-view":"1","events-prefix":"swiper-",breakpoints:{992:{slidesPerView:4,spaceBetween:30},780:{slidesPerView:3,spaceBetween:30},460:{slidesPerView:2,spaceBetween:20}}},Fe={class:"d-flex align-center gap-x-3"},We={class:"font-weight-medium"},Me=c({__name:"DemoSwiperCenteredSlidesOption2",setup(d){return b(),(l,o)=>(s(),n("swiper-container",Qe,[(s(),n(m,null,w([{icon:"bx-bxl-github",text:"Getting Started"},{icon:"bx-bxl-facebook",text:"Pricing & Plans"},{icon:"bx-bxl-twitter",text:"Sales Question"},{icon:"bx-bxl-instagram",text:"Usage Guidelines"},{icon:"bx-bxl-gitlab",text:"General Guide"}],({icon:i,text:t})=>f("swiper-slide",{key:t},[r(K,{class:"bg-default"},{default:p(()=>[r(H,null,{default:p(()=>[f("div",Fe,[r(q,{icon:i,size:"28"},null,8,["icon"]),f("span",We,F(t),1)])]),_:2},1024)]),_:2},1024)])),64))]))}}),Re=B(Me,[["__scopeId","data-v-437d7461"]]),qe={class:"swiper-centered-slide"},He={navigation:"true","centered-slides":"true","space-between":"30","slides-per-view":"1","events-prefix":"swiper-",injectStyles:[`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        `],breakpoints:{992:{slidesPerView:4,spaceBetween:30},780:{slidesPerView:3,spaceBetween:30},460:{slidesPerView:2,spaceBetween:20}}},Ke={class:"d-flex flex-column align-center gap-y-3"},Ze={class:"text-high-emphasis"},Je=c({__name:"DemoSwiperCenteredSlidesOption1",setup(d){return b(),(l,o)=>(s(),n("div",qe,[f("swiper-container",He,[(s(),n(m,null,w([{icon:"bx-bxl-github",text:"Getting Started"},{icon:"bx-bxl-facebook",text:"Pricing & Plans"},{icon:"bx-bxl-twitter",text:"Sales Question"},{icon:"bx-bxl-instagram",text:"Usage Guidelines"},{icon:"bx-bxl-gitlab",text:"General Guide"}],({icon:i,text:t})=>f("swiper-slide",{key:t},[r(K,null,{default:p(()=>[r(H,null,{default:p(()=>[f("div",Ke,[r(q,{icon:i,size:"28"},null,8,["icon"]),f("span",Ze,F(t),1)])]),_:2},1024)]),_:2},1024)])),64))])]))}}),Xe=B(Je,[["__scopeId","data-v-fb3ddcd9"]]),R="https://orderpad.apps.onylab.com/assets/banner-26-Co29d348.jpg",Ye="https://orderpad.apps.onylab.com/assets/banner-28-BavDZX16.jpg",er="https://orderpad.apps.onylab.com/assets/banner-29-Bw5q4Gpe.jpg",rr="https://orderpad.apps.onylab.com/assets/banner-30-BcnSNmsG.jpg",ir={"slides-per-view":"4","grid-fill":"rows","space-between":"30","grid-rows":"2","pagination-clickable":"true","events-prefix":"swiper-"},sr=c({__name:"DemoSwiperGrid",setup(d){return b(),(l,o)=>(s(),n("swiper-container",ir,[(s(!0),n(m,null,w([e(R),e($),e(Ye),e(er),e(rr),e(z),e(P),e(D),e(G),e(E),e(R),e($)],i=>(s(),n("swiper-slide",{key:i},[r(u,{src:i},null,8,["src"])]))),128))]))}}),nr={pagination:"true","slides-per-view":"3","space-between":"25","events-prefix":"swiper-"},pr=c({__name:"DemoSwiperMultipleSlidesPerView",setup(d){return b(),(l,o)=>(s(),n("swiper-container",nr,[(s(!0),n(m,null,w([e(z),e(P),e(D),e(G),e(E)],i=>(s(),n("swiper-slide",{key:i},[r(u,{src:i},null,8,["src"])]))),128))]))}}),tr={navigation:"true","pagination-type":"progressbar","events-prefix":"swiper-"},ar=c({__name:"DemoSwiperProgress",setup(d){return b(),(l,o)=>(s(),n("swiper-container",tr,[(s(!0),n(m,null,w([e(A),e(x),e(C),e(N),e(Y)],i=>(s(),n("swiper-slide",{key:i},[r(u,{src:i},null,8,["src"])]))),128))]))}}),or={pagination:"true","events-prefix":"swiper-"},lr=c({__name:"DemoSwiperPagination",setup(d){return b(),(l,o)=>(s(),n("swiper-container",or,[(s(!0),n(m,null,w([e(h),e(W),e(A),e(x),e(C)],i=>(s(),n("swiper-slide",{key:i},[r(u,{src:i},null,8,["src"])]))),128))]))}}),mr="https://orderpad.apps.onylab.com/assets/banner-14-bNfFS-GU.jpg",ee="https://orderpad.apps.onylab.com/assets/banner-2-SWMk04gr.jpg",wr="https://orderpad.apps.onylab.com/assets/banner-3-S5UpPGOJ.jpg",cr={navigation:"true","events-prefix":"swiper-"},dr=c({__name:"DemoSwiperNavigation",setup(d){return b(),(l,o)=>(s(),n("swiper-container",cr,[(s(!0),n(m,null,w([e(x),e(N),e(mr),e(wr),e(ee)],i=>(s(),n("swiper-slide",{key:i},[r(u,{src:i},null,8,["src"])]))),128))]))}}),gr="https://orderpad.apps.onylab.com/assets/banner-1-rgqr7rAW.jpg",br={"events-prefix":"swiper-"},ur=c({__name:"DemoSwiperBasic",setup(d){return b(),(l,o)=>(s(),n("swiper-container",br,[(s(!0),n(m,null,w([e(gr),e(ee),e(N),e(x),e(I)],i=>(s(),n("swiper-slide",{key:i},[r(u,{src:i},null,8,["src"])]))),128))]))}}),fr={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper10 from '@images/banner/banner-10.jpg'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    navigation="true"
    autoplay="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in
        [
          swiper7,
          swiper8,
          swiper9,
          swiper10,
          swiper11,
          swiper20,
        ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper10 from '@images/banner/banner-10.jpg'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    navigation="true"
    autoplay="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in
        [
          swiper7,
          swiper8,
          swiper9,
          swiper10,
          swiper11,
          swiper20,
        ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>
`},vr={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper1 from '@images/banner/banner-1.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container events-prefix="swiper-">
    <swiper-slide
      v-for="swiperImg in [
        swiper1,
        swiper2,
        swiper4,
        swiper7,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper1 from '@images/banner/banner-1.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container events-prefix="swiper-">
    <swiper-slide
      v-for="swiperImg in [
        swiper1,
        swiper2,
        swiper4,
        swiper7,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},_r={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="swiper-centered-slide">
    <swiper-container
      navigation="true"
      centered-slides="true"
      space-between="30"
      slides-per-view="1"
      events-prefix="swiper-"
      :injectStyles="[
        \`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        \`,
      ]"
      :breakpoints="{
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide
        v-for="{ icon, text } in [
          { icon: 'bx-bxl-github', text: 'Getting Started' },
          { icon: 'bx-bxl-facebook', text: 'Pricing & Plans' },
          { icon: 'bx-bxl-twitter', text: 'Sales Question' },
          { icon: 'bx-bxl-instagram', text: 'Usage Guidelines' },
          { icon: 'bx-bxl-gitlab', text: 'General Guide' },
        ]"
        :key="text"
      >
        <VCard>
          <VCardText>
            <div class="d-flex flex-column align-center gap-y-3">
              <VIcon
                :icon="icon"
                size="28"
              />
              <span class="text-high-emphasis">{{ text }}</span>
            </div>
          </VCardText>
        </VCard>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));

      .v-icon {
        color: rgb(var(--v-theme-primary));
      }
    }
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <!-- eslint-disable vue/attribute-hyphenation -->
  <div class="swiper-centered-slide">
    <swiper-container
      navigation="true"
      centered-slides="true"
      space-between="30"
      slides-per-view="1"
      events-prefix="swiper-"
      :injectStyles="[
        \`
        .swiper-button-next, .swiper-button-prev{
          background: rgb(var(--v-theme-primary)) !important;
          color: #fff !important;
          padding-inline: 0.45rem !important;
          padding-block: 0.45rem !important;
          inline-size: 1rem !important;
          block-size: 1rem !important;
          border-radius: 50%
        }
        \`,
      ]"
      :breakpoints="{
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        460: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }"
    >
      <swiper-slide
        v-for="{ icon, text } in [
          { icon: 'bx-bxl-github', text: 'Getting Started' },
          { icon: 'bx-bxl-facebook', text: 'Pricing & Plans' },
          { icon: 'bx-bxl-twitter', text: 'Sales Question' },
          { icon: 'bx-bxl-instagram', text: 'Usage Guidelines' },
          { icon: 'bx-bxl-gitlab', text: 'General Guide' },
        ]"
        :key="text"
      >
        <VCard>
          <VCardText>
            <div class="d-flex flex-column align-center gap-y-3">
              <VIcon
                :icon="icon"
                size="28"
              />
              <span class="text-high-emphasis">{{ text }}</span>
            </div>
          </VCardText>
        </VCard>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));

      .v-icon {
        color: rgb(var(--v-theme-primary));
      }
    }
  }
}
</style>
`},xr={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <swiper-container
    centered-slides="true"
    space-between="30"
    slides-per-view="1"
    events-prefix="swiper-"
    :breakpoints="{
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }"
  >
    <swiper-slide
      v-for="{ icon, text } in [
        { icon: 'bx-bxl-github', text: 'Getting Started' },
        { icon: 'bx-bxl-facebook', text: 'Pricing & Plans' },
        { icon: 'bx-bxl-twitter', text: 'Sales Question' },
        { icon: 'bx-bxl-instagram', text: 'Usage Guidelines' },
        { icon: 'bx-bxl-gitlab', text: 'General Guide' },
      ]"
      :key="text"
    >
      <VCard class="bg-default">
        <VCardText>
          <div class="d-flex align-center gap-x-3">
            <VIcon
              :icon="icon"
              size="28"
            />
            <span class="font-weight-medium">{{ text }}</span>
          </div>
        </VCardText>
      </VCard>
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));
    }
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'

register()
<\/script>

<template>
  <swiper-container
    centered-slides="true"
    space-between="30"
    slides-per-view="1"
    events-prefix="swiper-"
    :breakpoints="{
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }"
  >
    <swiper-slide
      v-for="{ icon, text } in [
        { icon: 'bx-bxl-github', text: 'Getting Started' },
        { icon: 'bx-bxl-facebook', text: 'Pricing & Plans' },
        { icon: 'bx-bxl-twitter', text: 'Sales Question' },
        { icon: 'bx-bxl-instagram', text: 'Usage Guidelines' },
        { icon: 'bx-bxl-gitlab', text: 'General Guide' },
      ]"
      :key="text"
    >
      <VCard class="bg-default">
        <VCardText>
          <div class="d-flex align-center gap-x-3">
            <VIcon
              :icon="icon"
              size="28"
            />
            <span class="font-weight-medium">{{ text }}</span>
          </div>
        </VCardText>
      </VCard>
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  padding-block: 1rem;

  &.swiper-slide-active {
    .v-card {
      border: 1px solid rgb(var(--v-theme-primary));
      background: rgb(var(--v-theme-primary));
      color: rgb(var(--v-theme-on-primary));
    }
  }
}
</style>
`},jr={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    effect="coverflow"
    grab-cursor="true"
    centered-slides="true"
    slides-per-view="auto"
    coverflow-effect-rotate="50"
    coverflow-effect-stretch="0"
    coverflow-effect-depth="100"
    coverflow-effect-modifier="1"
    coverflow-effect-slide-shadows="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 300px;
  inline-size: 300px;
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    effect="coverflow"
    grab-cursor="true"
    centered-slides="true"
    slides-per-view="auto"
    coverflow-effect-rotate="50"
    coverflow-effect-stretch="0"
    coverflow-effect-depth="100"
    coverflow-effect-modifier="1"
    coverflow-effect-slide-shadows="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 300px;
  inline-size: 300px;
}
</style>
`},yr={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper21 from '@images/banner/banner-21.jpg'
import swiper23 from '@images/banner/banner-23.jpg'
import swiper24 from '@images/banner/banner-24.jpg'
import swiper32 from '@images/banner/banner-32.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    centered-slides="true"
    effect="cube"
    grab-cursor="true"
    cube-effect-shadow="true"
    cube-effect-slide-shadows="true"
    cube-effect-shadow-scale="0.94"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper21,
        swiper32,
        swiper23,
        swiper24,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 250px;
  inline-size: 250px;
}

swiper-container {
  margin: auto;
  block-size: 250px;
  inline-size: 250px;
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper21 from '@images/banner/banner-21.jpg'
import swiper23 from '@images/banner/banner-23.jpg'
import swiper24 from '@images/banner/banner-24.jpg'
import swiper32 from '@images/banner/banner-32.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    centered-slides="true"
    effect="cube"
    grab-cursor="true"
    cube-effect-shadow="true"
    cube-effect-slide-shadows="true"
    cube-effect-shadow-scale="0.94"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper21,
        swiper32,
        swiper23,
        swiper24,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-slide {
  background-position: center;
  background-size: cover;
  block-size: 250px;
  inline-size: 250px;
}

swiper-container {
  margin: auto;
  block-size: 250px;
  inline-size: 250px;
}
</style>
`},kr={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper16 from '@images/banner/banner-16.jpg'
import swiper17 from '@images/banner/banner-17.jpg'
import swiper18 from '@images/banner/banner-18.jpg'
import swiper19 from '@images/banner/banner-19.jpg'
import swiper20 from '@images/banner/banner-20.jpg'

register()
<\/script>

<template>
  <swiper-container
    space-between="30"
    pagination="true"
    navigation="true"
    effect="fade"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper20,
        swiper19,
        swiper18,
        swiper17,
        swiper16,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper16 from '@images/banner/banner-16.jpg'
import swiper17 from '@images/banner/banner-17.jpg'
import swiper18 from '@images/banner/banner-18.jpg'
import swiper19 from '@images/banner/banner-19.jpg'
import swiper20 from '@images/banner/banner-20.jpg'

register()
<\/script>

<template>
  <swiper-container
    space-between="30"
    pagination="true"
    navigation="true"
    effect="fade"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper20,
        swiper19,
        swiper18,
        swiper17,
        swiper16,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},Sr={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper11 from '@images/banner/banner-11.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper15 from '@images/banner/banner-15.jpg'
import swiper16 from '@images/banner/banner-16.jpg'

register()
<\/script>

<template>
  <swiper-container
    class="mySwiper"
    thumbs-swiper=".mySwiper2"
    loop="true"
    space-between="10"
    navigation="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,

      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>

  <swiper-container
    class="mySwiper2"
    loop="true"
    free-mode="true"
    events-prefix="swiper-"
    slides-per-view="4"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  background-color: #000;
}

.mySwiper2 {
  swiper-slide {
    border: 5px solid black;
    block-size: 100%;
    inline-size: 25%;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper11 from '@images/banner/banner-11.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper13 from '@images/banner/banner-13.jpg'
import swiper15 from '@images/banner/banner-15.jpg'
import swiper16 from '@images/banner/banner-16.jpg'

register()
<\/script>

<template>
  <swiper-container
    class="mySwiper"
    thumbs-swiper=".mySwiper2"
    loop="true"
    space-between="10"
    navigation="true"
    centered-slides="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,

      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>

  <swiper-container
    class="mySwiper2"
    loop="true"
    free-mode="true"
    events-prefix="swiper-"
    slides-per-view="4"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper11,
        swiper12,
        swiper13,
        swiper15,
        swiper16,
        swiper11,
        swiper12,
        swiper13,
      ]"
      :key="swiperImg"
    >
      <VImg
        :src="swiperImg"
        cover
      />
    </swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
  background-color: #000;
}

.mySwiper2 {
  swiper-slide {
    border: 5px solid black;
    block-size: 100%;
    inline-size: 25%;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
`},Vr={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper26 from '@images/banner/banner-26.jpg'
import swiper28 from '@images/banner/banner-28.jpg'
import swiper29 from '@images/banner/banner-29.jpg'
import swiper30 from '@images/banner/banner-30.jpg'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    slides-per-view="4"
    grid-fill="rows"
    space-between="30"
    grid-rows="2"
    pagination-clickable="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper26,
        swiper39,
        swiper28,
        swiper29,
        swiper30,
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper26,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper26 from '@images/banner/banner-26.jpg'
import swiper28 from '@images/banner/banner-28.jpg'
import swiper29 from '@images/banner/banner-29.jpg'
import swiper30 from '@images/banner/banner-30.jpg'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    slides-per-view="4"
    grid-fill="rows"
    space-between="30"
    grid-rows="2"
    pagination-clickable="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper26,
        swiper39,
        swiper28,
        swiper29,
        swiper30,
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper26,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},hr={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    autoplay="true"
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper4,
        swiper5,
        swiper9,
        swiper7,
        swiper8,
        swiper20,
      ]"
      :key="swiperImg"
      lazy="true"
    >
      <VImg
        :src="swiperImg"
        cover
        loading="lazy"
      />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper7 from '@images/banner/banner-7.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    autoplay="true"
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper4,
        swiper5,
        swiper9,
        swiper7,
        swiper8,
        swiper20,
      ]"
      :key="swiperImg"
      lazy="true"
    >
      <VImg
        :src="swiperImg"
        cover
        loading="lazy"
      />
    </swiper-slide>
  </swiper-container>
</template>
`},Ir={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    slides-per-view="3"
    space-between="25"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    slides-per-view="3"
    space-between="25"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},Br={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

import swiper14 from '@images/banner/banner-14.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper3 from '@images/banner/banner-3.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper7,
        swiper4,
        swiper14,
        swiper3,
        swiper2,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper14 from '@images/banner/banner-14.jpg'
import swiper2 from '@images/banner/banner-2.jpg'
import swiper3 from '@images/banner/banner-3.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper7,
        swiper4,
        swiper14,
        swiper3,
        swiper2,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},Pr={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'

import swiper12 from '@images/banner/banner-12.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper12,
        swiper9,
        swiper8,
        swiper7,
        swiper20,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper9 from '@images/banner/banner-9.jpg'
import swiper12 from '@images/banner/banner-12.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination="true"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper12,
        swiper9,
        swiper8,
        swiper7,
        swiper20,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},Cr={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper8 from '@images/banner/banner-8.jpg'

import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    pagination-type="progressbar"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper8,
        swiper7,
        swiper20,
        swiper4,
        swiper5,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper5 from '@images/banner/banner-5.jpg'
import swiper8 from '@images/banner/banner-8.jpg'
import swiper20 from '@images/banner/banner-20.jpg'
import swiper4 from '@images/banner/banner-4.jpg'
import swiper7 from '@images/banner/banner-7.jpg'

register()
<\/script>

<template>
  <swiper-container
    navigation="true"
    pagination-type="progressbar"
    events-prefix="swiper-"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper8,
        swiper7,
        swiper20,
        swiper4,
        swiper5,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},$r={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    slides-per-view="5"
    space-between="50"
    events-prefix="swiper-"
    :breakpoints="{
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'
import swiper31 from '@images/banner/banner-31.jpg'
import swiper32 from '@images/banner/banner-32.jpg'
import swiper33 from '@images/banner/banner-33.jpg'
import swiper34 from '@images/banner/banner-34.jpg'
import swiper35 from '@images/banner/banner-35.jpg'
import swiper36 from '@images/banner/banner-36.jpg'
import swiper37 from '@images/banner/banner-37.jpg'
import swiper38 from '@images/banner/banner-38.jpg'
import swiper39 from '@images/banner/banner-39.jpg'

register()
<\/script>

<template>
  <swiper-container
    pagination-clickable="true"
    slides-per-view="5"
    space-between="50"
    events-prefix="swiper-"
    :breakpoints="{
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }"
  >
    <swiper-slide
      v-for="swiperImg in [
        swiper31,
        swiper32,
        swiper33,
        swiper34,
        swiper35,
        swiper36,
        swiper37,
        swiper38,
        swiper39,
      ]"
      :key="swiperImg"
    >
      <VImg :src="swiperImg" />
    </swiper-slide>
  </swiper-container>
</template>
`},zr={ts:`<script setup lang="ts">
import { register } from 'swiper/element/bundle'

register()

const slides = Array.from({ length: 500 }, (_, index) => \`Slides \${index + 1}\`)
const swiperEl = ref<any>(null)
const prependNumber = ref(1)
const appendNumber = ref(500)

const toSlide = (index: number) => {
  swiperEl.value?.swiper.slideTo(index - 1)
}

const prependSlide = () => {
  swiperEl.value?.swiper.prependSlide([
    \`<swiper-slide>Slide \${(--prependNumber.value)} </swiper-slide>\`,
    \`<swiper-slide>Slide \${(--prependNumber.value)} </swiper-slide>\`,
  ])
}

const appendSlide = () => {
  swiperEl.value?.swiper.appendSlide([
    \`<swiper-slide>Slide \${(++appendNumber.value)} </swiper-slide>\`,
  ])
}
<\/script>

<template>
  <section class="swiper-virtual">
    <swiper-container
      ref="swiperEl"
      virtual="true"
      :slides="slides"
      navigation="true"
      slides-per-view="5"
      space-between="50"
      free-mode="true"
      events-prefix="swiper-"
      :breakpoints="{
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }"
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
      >
        <div class="text-secondary">
          {{ item }}
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="d-flex justify-center gap-4 flex-wrap">
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="prependSlide"
      >
        Prepend 2 Slides
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(1)"
      >
        Slide 1
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(250)"
      >
        Slide 250
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(500)"
      >
        Slide 500
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="appendSlide"
      >
        Append Slide
      </VBtn>
    </div>
  </section>
</template>

<style lang="scss">
.swiper-virtual {
  swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 18px;
    text-align: center;
  }

  swiper-container {
    block-size: 300px;
    inline-size: 100%;
    margin-block: 20px;
    margin-inline: auto;
  }
}
</style>
`,js:`<script setup>
import { register } from 'swiper/element/bundle'

register()

const slides = Array.from({ length: 500 }, (_, index) => \`Slides \${ index + 1 }\`)
const swiperEl = ref(null)
const prependNumber = ref(1)
const appendNumber = ref(500)

const toSlide = index => {
  swiperEl.value?.swiper.slideTo(index - 1)
}

const prependSlide = () => {
  swiperEl.value?.swiper.prependSlide([
    \`<swiper-slide>Slide \${ --prependNumber.value } </swiper-slide>\`,
    \`<swiper-slide>Slide \${ --prependNumber.value } </swiper-slide>\`,
  ])
}

const appendSlide = () => {
  swiperEl.value?.swiper.appendSlide([\`<swiper-slide>Slide \${ ++appendNumber.value } </swiper-slide>\`])
}
<\/script>

<template>
  <section class="swiper-virtual">
    <swiper-container
      ref="swiperEl"
      virtual="true"
      :slides="slides"
      navigation="true"
      slides-per-view="5"
      space-between="50"
      free-mode="true"
      events-prefix="swiper-"
      :breakpoints="{
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }"
    >
      <swiper-slide
        v-for="(item, index) in slides"
        :key="index"
      >
        <div class="text-secondary">
          {{ item }}
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="d-flex justify-center gap-4 flex-wrap">
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="prependSlide"
      >
        Prepend 2 Slides
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(1)"
      >
        Slide 1
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(250)"
      >
        Slide 250
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="toSlide(500)"
      >
        Slide 500
      </VBtn>
      <VBtn
        variant="outlined"
        color="primary"
        @click.prevent="appendSlide"
      >
        Append Slide
      </VBtn>
    </div>
  </section>
</template>

<style lang="scss">
.swiper-virtual {
  swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    font-size: 18px;
    text-align: center;
  }

  swiper-container {
    block-size: 300px;
    inline-size: 100%;
    margin-block: 20px;
    margin-inline: auto;
  }
}
</style>
`},Mr=c({__name:"swiper",setup(d){return(l,o)=>{const i=ur,t=me,j=dr,U=lr,T=ar,v=pr,a=sr,_=Xe,L=Re,re=Oe,ie=Ne,se=Ce,ne=Ie,pe=Se,te=xe,ae=ve,oe=ue;return s(),le(we,null,{default:p(()=>[r(g,null,{default:p(()=>[r(t,{title:"Basic",code:e(vr)},{default:p(()=>[r(i)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Navigation",code:e(Br)},{default:p(()=>[r(j)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Pagination",code:e(Pr)},{default:p(()=>[r(U)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Progress",code:e(Cr)},{default:p(()=>[r(T)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Multiple Slides Per View",code:e(Ir)},{default:p(()=>[r(v)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Grid",code:e(Vr)},{default:p(()=>[r(a)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{variant:"text",title:"Centered Slides Option 1",code:e(_r)},{default:p(()=>[r(_)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Centered Slides Option 2",code:e(xr)},{default:p(()=>[r(L)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Fade",code:e(kr)},{default:p(()=>[r(re)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Cube Effect",code:e(yr)},{default:p(()=>[r(ie)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Coverflow Effect",code:e(jr)},{default:p(()=>[r(se)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Autoplay",code:e(fr)},{default:p(()=>[r(ne)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Gallery",code:e(Sr)},{default:p(()=>[r(pe)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Lazy Loading",code:e(hr)},{default:p(()=>[r(te)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Responsive Breakpoints",code:e($r)},{default:p(()=>[r(ae)]),_:1},8,["code"])]),_:1}),r(g,null,{default:p(()=>[r(t,{title:"Virtual Slides",code:e(zr)},{default:p(()=>[r(oe)]),_:1},8,["code"])]),_:1})]),_:1})}}});export{Mr as default};
