import{_ as me}from"./CustomRadiosWithIcon-CpoYRtin.js";import{_ as j}from"./AppSelect.vue_vue_type_script_setup_true_lang-DBfaXatz.js";import{_ as se}from"./AppTextarea.vue_vue_type_script_setup_true_lang-tMZ7CTgh.js";import{_ as L}from"./AppTextField.vue_vue_type_script_setup_true_lang-D0iYS9Yq.js";import{d as A,r as m,g as N,o as g,f as l,e as c,b as e,ah as _,t as w,J as ee,m as t,c as q,F as te,i as de,x as M,K as le,bb as U,aV as i,l as ie,v as pe,$ as ue}from"./index-CGSY_bcy.js";import{V as oe}from"./VCardText-qdE8TfOT.js";import{V as y,a as o}from"./VRow-iBHmcbyc.js";import{V as k}from"./VForm-D9ARwt9w.js";import{V as I}from"./VCheckbox-CaY61Aos.js";import{V as D,a as R}from"./VRadioGroup-DE_Xz_Et.js";import{V as S}from"./VDivider-C1m-AGXO.js";import{V as ce,a as Ve}from"./VList-VqGm72yR.js";import{V as ne}from"./VCard-BV6L2R2C.js";import{_ as be}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as O,b as K,c as Q,V as fe}from"./VExpansionPanels-C6q7Hr9H.js";import{V as Ce}from"./form-BFSrVbDS.js";import{_ as ve}from"./AppDateTimePicker.vue_vue_type_style_index_0_lang-DlwcA-0h.js";import{a as xe,V as X}from"./VTabs-Csfr2nih.js";import{V as ye,a as Z}from"./VWindowItem-BAcHAHAb.js";import{r as E,e as we}from"./validators-BJEf8OaU.js";import{_ as he}from"./AppAutocomplete.vue_vue_type_script_setup_true_lang-BXcsQ6Ff.js";import{_ as _e}from"./AppCardCode.vue_vue_type_style_index_0_lang-DL3ouF-b.js";import"./VSelect-BadW1Ozj.js";import"./VTextField-CsRO8mhU.js";/* empty css                   */import"./VCounter-CY4Na77j.js";import"./VImg-BN1tOnVF.js";import"./VField-ZnTlylM_.js";import"./easing-Bybner-F.js";import"./VInput-DBewaqUk.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-a0v3E2CF.js";import"./VMenu-BYg6SOEE.js";import"./VOverlay-B0_U9b8-.js";import"./delay-CWIThG91.js";import"./lazy-BQ3wcJ5i.js";import"./scopeId-C327Sd6p.js";import"./VCheckboxBtn-CGAgDi45.js";import"./VSelectionControl-B-3dP5Q6.js";import"./VAvatar-Bb3gpc8B.js";import"./VChip-BMN-mJAq.js";import"./VSlideGroup-DTBwkYqA.js";/* empty css              */import"./ssrBoot-DAjKMIaY.js";import"./helpers-BGv4x_9E.js";import"./filter-Dy_ez3X5.js";import"./vue3-perfect-scrollbar-CfOblRau.js";const ge={class:"w-100 sticky-header overflow-hidden rounded-t"},Fe={class:"d-flex align-center gap-4 justify-space-between flex-wrap bg-custom-background border-b pa-6"},ke={class:"d-flex align-center gap-4"},Ae={class:"d-flex align-center gap-2 my-4"},Te=A({__name:"DemoFormLayoutSticky",setup(T){const C=[{title:"Standard",desc:"Delivery in 3-5 days.",value:"standard",icon:{icon:"bx-briefcase",size:"32"}},{title:"Express",desc:"Delivery within 2 days.",value:"express",icon:{icon:"bx-rocket",size:"32"}},{title:"Overnight",desc:"Delivery within a days.",value:"overnight",icon:{icon:"bx-crown",size:"32"}}],f=[{code:"TAKEITALL",desc:"Apply this code to get 15% discount on orders above 20$."},{code:"FESTIVE10",desc:"Apply this code to get 10% discount on all orders."},{code:"MYSTERYDEAL",desc:"Apply this code to get discount between 10% - 50%."}],r=m({fullName:"",email:"",contactNumber:null,altContactNumber:null,address:"",pincode:null,Landmark:"",city:"",state:null,defaultAddress:!1,addressType:"home",deliveryType:"overnight",promoCode:"",paymentMethod:"card",cardNumber:null,cardName:"",cardExDate:"",cardCvv:""});return(V,d)=>{const v=L,s=se,a=j,n=me;return g(),N(ne,{class:"overflow-visible"},{default:l(()=>[c("div",ge,[c("div",Fe,[d[16]||(d[16]=c("h5",{class:"text-h5"}," Sticky Action Bar ",-1)),c("div",null,[e(_,{variant:"tonal",class:"me-4"},{default:l(()=>d[14]||(d[14]=[w(" Back ")])),_:1,__:[14]}),e(_,null,{default:l(()=>d[15]||(d[15]=[w("Place Order")])),_:1,__:[15]})])])]),e(oe,null,{default:l(()=>[e(y,null,{default:l(()=>[e(o,{md:"8",cols:"12",class:"mx-auto"},{default:l(()=>[e(k,null,{default:l(()=>[d[22]||(d[22]=c("h5",{class:"text-h5 mb-6"}," 1. Delivery Address ",-1)),e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:t(r).fullName,"onUpdate:modelValue":d[0]||(d[0]=p=>t(r).fullName=p),label:"Full Name",placeholder:"John Doe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:t(r).email,"onUpdate:modelValue":d[1]||(d[1]=p=>t(r).email=p),label:"Email",placeholder:"john.doe",suffix:"@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:t(r).contactNumber,"onUpdate:modelValue":d[2]||(d[2]=p=>t(r).contactNumber=p),label:"Contact Number",placeholder:"658 123 4567",type:"number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:t(r).altContactNumber,"onUpdate:modelValue":d[3]||(d[3]=p=>t(r).altContactNumber=p),label:"Alternate Number",placeholder:"658 123 4567",type:"number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:t(r).address,"onUpdate:modelValue":d[4]||(d[4]=p=>t(r).address=p),label:"Address",placeholder:"1456, Mall Road",rows:"2"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:t(r).pincode,"onUpdate:modelValue":d[5]||(d[5]=p=>t(r).pincode=p),label:"Pincode",placeholder:"658468",type:"number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:t(r).Landmark,"onUpdate:modelValue":d[6]||(d[6]=p=>t(r).Landmark=p),label:"Landmark",placeholder:"Nr. Wall Street"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(v,{modelValue:t(r).city,"onUpdate:modelValue":d[7]||(d[7]=p=>t(r).city=p),label:"City",placeholder:"Jackson"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(a,{modelValue:t(r).state,"onUpdate:modelValue":d[8]||(d[8]=p=>t(r).state=p),label:"State",placeholder:"Select State",items:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida"]},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(I,{modelValue:t(r).defaultAddress,"onUpdate:modelValue":d[9]||(d[9]=p=>t(r).defaultAddress=p),label:"Use this as default delivery address"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[d[17]||(d[17]=c("p",{class:"text-high-emphasis text-base mb-1"}," Address Type ",-1)),e(D,{modelValue:t(r).addressType,"onUpdate:modelValue":d[10]||(d[10]=p=>t(r).addressType=p),inline:""},{default:l(()=>[e(R,{label:"Home (All day delivery)",value:"home",class:"me-3"}),e(R,{label:"Office (Delivery between 10 AM - 5 PM)",value:"work"})]),_:1},8,["modelValue"])]),_:1,__:[17]})]),_:1}),e(S,{class:"my-4"}),d[23]||(d[23]=c("h5",{class:"text-h5 mb-6"}," 2. Delivery Type ",-1)),e(n,{"selected-radio":t(r).deliveryType,"onUpdate:selectedRadio":d[11]||(d[11]=p=>t(r).deliveryType=p),"radio-content":C,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"]),e(S,{class:"my-6"}),d[24]||(d[24]=c("h5",{class:"text-h5 my-6"}," 3. Apply Promo code ",-1)),c("div",ke,[e(v,{modelValue:t(r).promoCode,"onUpdate:modelValue":d[12]||(d[12]=p=>t(r).promoCode=p),placeholder:"TAKEITALL"},null,8,["modelValue"]),e(_,null,{default:l(()=>d[18]||(d[18]=[w("Apply")])),_:1,__:[18]})]),c("div",Ae,[e(S,{style:{"border-style":"dashed"}}),d[19]||(d[19]=c("span",null,"OR",-1)),e(S,{style:{"border-style":"dashed"}})]),e(ce,{class:"border rounded py-0",lines:"two"},{default:l(()=>[(g(),q(te,null,de(f,(p,b)=>e(Ve,{key:p.code,title:p.code,subtitle:p.desc,class:M(b!==0?"border-t":"")},{append:l(()=>[e(_,{variant:"tonal",class:"ms-4"},{default:l(()=>d[20]||(d[20]=[w(" Apply ")])),_:1,__:[20]})]),_:2},1032,["title","subtitle","class"])),64))]),_:1}),e(S,{class:"my-6"}),d[25]||(d[25]=c("h5",{class:"text-h5 mb-6"}," 4. Payment Method ",-1)),e(D,{modelValue:t(r).paymentMethod,"onUpdate:modelValue":d[13]||(d[13]=p=>t(r).paymentMethod=p),inline:"",class:"mb-4"},{default:l(()=>[e(R,{value:"card",label:"Credit/Debit/ATM Card",class:"me-3"}),e(R,{value:"cash-on-delivery",label:"Cash On Delivery"})]),_:1},8,["modelValue"]),ee(e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(v,{label:"Card Number",placeholder:"1356 3215 6548 7898"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(v,{label:"Name",placeholder:"John Doe"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(v,{label:"Exp. Date",placeholder:"MM/YY"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(v,{label:"CVV Code",placeholder:"654"})]),_:1})]),_:1},512),[[le,t(r).paymentMethod==="card"]]),ee(c("div",null,d[21]||(d[21]=[c("p",null," Cash on delivery is a mode of payment where you make the payment after the goods/services are received. ",-1),c("p",null,"You can pay cash or make the payment via debit/credit card directly to the delivery person.",-1)]),512),[[le,t(r).paymentMethod==="cash-on-delivery"]])]),_:1,__:[22,23,24,25]})]),_:1})]),_:1})]),_:1})]),_:1})}}}),Re=be(Te,[["__scopeId","data-v-fa2f8952"]]),Ne={class:"me-1"},Le={class:"d-flex gap-4"},Ie=A({__name:"DemoFormLayoutCollapsible",setup(T){const C=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii"],f=m("home"),r=m("standard"),V=m("credit-debit-card"),d=m(0),v=[{radioValue:"credit-debit-card",radioLabel:"Credit/Debit/ATM Card",icon:"bx-credit-card"},{radioValue:"cash-on-delivery",radioLabel:"Cash On Delivery",icon:"bx-help-circle"}];return(s,a)=>{const n=L,p=se,b=j;return g(),N(fe,{modelValue:t(d),"onUpdate:modelValue":a[6]||(a[6]=h=>i(d)?d.value=h:null)},{default:l(()=>[e(O,null,{default:l(()=>[e(K,null,{default:l(()=>a[7]||(a[7]=[w("Delivery Address")])),_:1,__:[7]}),e(Q,null,{default:l(()=>[e(k,{class:"pt-4 pb-2",onSubmit:U(()=>{},["prevent"])},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Full Name",placeholder:"John Doe"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Phone No",type:"number",placeholder:"+1 123 456 7890"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(p,{label:"Address",placeholder:"1234 Main St, New York, NY 10001, USA",rows:"3"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Pincode",placeholder:"123456",type:"number"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Landmark",placeholder:"Near City Mall"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"City",placeholder:"New York"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(b,{items:C,label:"State",placeholder:"Select State"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(Ce,{class:"mb-3"},{default:l(()=>a[8]||(a[8]=[w(" Address Type ")])),_:1,__:[8]}),e(D,{modelValue:t(f),"onUpdate:modelValue":a[0]||(a[0]=h=>i(f)?f.value=h:null),inline:""},{default:l(()=>[c("div",null,[e(R,{label:"Home (All day delivery)",value:"home",class:"me-3"}),e(R,{label:"Office (Delivery between 10 AM - 5 PM)",value:"office"})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(O,null,{default:l(()=>[e(K,null,{default:l(()=>a[9]||(a[9]=[w("Delivery Options")])),_:1,__:[9]}),e(Q,null,{default:l(()=>[e(D,{modelValue:t(r),"onUpdate:modelValue":a[4]||(a[4]=h=>i(r)?r.value=h:null),class:"delivery-options pt-4 pb-2"},{default:l(()=>[c("div",{class:M(["delivery-option d-flex rounded-t",t(r)==="standard"?"active":""]),onClick:a[1]||(a[1]=h=>r.value="standard")},[e(R,{inline:"",value:"standard",class:"mt-n4"}),a[10]||(a[10]=c("div",{class:"w-100"},[c("div",{class:"d-flex justify-space-between"},[c("h6",{class:"text-base font-weight-medium"}," Standard 3-5 Days "),c("div",{class:"text-body-2 text-disabled"}," Free ")]),c("span",{class:"text-sm"},"Friday, 15 Nov - Monday, 18 Nov")],-1))],2),c("div",{class:M(["delivery-option d-flex",t(r)==="express"?"active":""]),onClick:a[2]||(a[2]=h=>r.value="express")},[e(R,{inline:"",class:"mt-n4",value:"express"}),a[11]||(a[11]=c("div",{class:"w-100"},[c("div",{class:"d-flex justify-space-between"},[c("h5",{class:"text-base font-weight-medium"}," Express "),c("div",{class:"text-body-2 text-disabled"}," $5.00 ")]),c("span",{class:"text-sm"},"Friday, 15 Nov - Sunday, 17 Nov")],-1))],2),c("div",{class:M(["delivery-option d-flex rounded-b",t(r)==="overnight"?"active":""]),onClick:a[3]||(a[3]=h=>r.value="overnight")},[e(R,{inline:"",class:"mt-n4",value:"overnight"}),a[12]||(a[12]=c("div",{class:"w-100"},[c("div",{class:"d-flex justify-space-between"},[c("h6",{class:"text-base font-weight-medium"}," Overnight "),c("div",{class:"text-body-2 text-disabled"}," $10.00 ")]),c("span",{class:"text-sm"},"Friday, 15 Nov - Saturday, 16 Nov")],-1))],2)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(O,null,{default:l(()=>[e(K,null,{default:l(()=>a[13]||(a[13]=[w("Payment Method")])),_:1,__:[13]}),e(Q,null,{default:l(()=>[e(y,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(k,{class:"pt-4 pb-2"},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[c("div",null,[e(D,{modelValue:t(V),"onUpdate:modelValue":a[5]||(a[5]=h=>i(V)?V.value=h:null),inline:""},{default:l(()=>[c("div",null,[(g(),q(te,null,de(v,h=>e(R,{key:h.radioValue,value:h.radioValue,class:"me-3"},{label:l(()=>[c("span",Ne,pe(h.radioLabel),1),e(ue,{size:"18",icon:h.icon},null,8,["icon"])]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])])]),_:1})]),_:1}),t(V)==="credit-debit-card"?(g(),N(y,{key:0},{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(n,{label:"Card Number",type:"number",placeholder:"1234 5678 9012 3456"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Name",placeholder:"john doe"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(n,{label:"Expiry Date",placeholder:"MM/YY"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(n,{label:"CVV Code",type:"number",max:"3",placeholder:"123"})]),_:1}),e(o,null,{default:l(()=>[c("div",Le,[e(_,null,{default:l(()=>a[14]||(a[14]=[w("Place Order")])),_:1,__:[14]}),e(_,{color:"secondary",variant:"tonal"},{default:l(()=>a[15]||(a[15]=[w(" Cancel ")])),_:1,__:[15]})])]),_:1})]),_:1})):ie("",!0),ee(e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[a[17]||(a[17]=c("p",{class:"text-base text-high-emphasis"}," Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ",-1)),e(_,null,{default:l(()=>a[16]||(a[16]=[w(" Pay on delivery ")])),_:1,__:[16]})]),_:1,__:[17]})]),_:1},512),[[le,t(V)==="cash-on-delivery"]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),Ue=A({__name:"DemoFormLayoutFormWithTabs",setup(T){const C=m("personal-info"),f=m(""),r=m(""),V=m(),d=m(""),v=m(),s=["USA","Canada","UK","Denmark","Germany","Iceland","Israel","Mexico"],a=["English","German","French","Spanish","Portuguese","Russian","Korean"],n=m(""),p=m(""),b=m(""),h=m(""),P=m(""),H=m(""),J=m(""),$=m(""),W=m(""),Y=m(""),G=m([]),B=m(!1),z=m(!1);return(Oe,u)=>{const F=L,ae=j,re=ve;return g(),q(te,null,[e(xe,{modelValue:t(C),"onUpdate:modelValue":u[0]||(u[0]=x=>i(C)?C.value=x:null)},{default:l(()=>[e(X,{value:"personal-info"},{default:l(()=>u[20]||(u[20]=[w(" Personal Info ")])),_:1,__:[20]}),e(X,{value:"account-details"},{default:l(()=>u[21]||(u[21]=[w(" Account Details ")])),_:1,__:[21]}),e(X,{value:"social-links"},{default:l(()=>u[22]||(u[22]=[w(" Social Links ")])),_:1,__:[22]})]),_:1},8,["modelValue"]),e(ne,{flat:""},{default:l(()=>[e(oe,null,{default:l(()=>[e(ye,{modelValue:t(C),"onUpdate:modelValue":u[19]||(u[19]=x=>i(C)?C.value=x:null),class:"disable-tab-transition"},{default:l(()=>[e(Z,{value:"personal-info"},{default:l(()=>[e(k,{class:"mt-2"},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(F,{modelValue:t(f),"onUpdate:modelValue":u[1]||(u[1]=x=>i(f)?f.value=x:null),label:"First name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(o,{md:"6",cols:"12"},{default:l(()=>[e(F,{modelValue:t(r),"onUpdate:modelValue":u[2]||(u[2]=x=>i(r)?r.value=x:null),label:"Last name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(ae,{modelValue:t(V),"onUpdate:modelValue":u[3]||(u[3]=x=>i(V)?V.value=x:null),items:s,label:"Country",placeholder:"Select Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(ae,{modelValue:t(G),"onUpdate:modelValue":u[4]||(u[4]=x=>i(G)?G.value=x:null),items:a,multiple:"",chips:"",clearable:"",label:"Language",placeholder:"Select Language"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(re,{modelValue:t(d),"onUpdate:modelValue":u[5]||(u[5]=x=>i(d)?d.value=x:null),label:"Birth Date",placeholder:"Select Birth Date"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:t(v),"onUpdate:modelValue":u[6]||(u[6]=x=>i(v)?v.value=x:null),type:"number",label:"Phone No.",placeholder:"+1 123 456 7890"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(Z,{value:"account-details"},{default:l(()=>[e(k,{class:"mt-2"},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:t(n),"onUpdate:modelValue":u[7]||(u[7]=x=>i(n)?n.value=x:null),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:t(p),"onUpdate:modelValue":u[8]||(u[8]=x=>i(p)?p.value=x:null),label:"Email",suffix:"@example.com",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:t(b),"onUpdate:modelValue":u[9]||(u[9]=x=>i(b)?b.value=x:null),label:"Password",placeholder:"············",type:t(B)?"text":"password",autocomplete:"password","append-inner-icon":t(B)?"bx-hide":"bx-show","onClick:appendInner":u[10]||(u[10]=x=>B.value=!t(B))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:t(h),"onUpdate:modelValue":u[11]||(u[11]=x=>i(h)?h.value=x:null),label:"Confirm Password",autocomplete:"confirm-password",placeholder:"············",type:t(z)?"text":"password","append-inner-icon":t(z)?"bx-hide":"bx-show","onClick:appendInner":u[12]||(u[12]=x=>z.value=!t(z))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(Z,{value:"social-links"},{default:l(()=>[e(k,{class:"mt-2"},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:t(P),"onUpdate:modelValue":u[13]||(u[13]=x=>i(P)?P.value=x:null),label:"Twitter",placeholder:"https://twitter.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:t(H),"onUpdate:modelValue":u[14]||(u[14]=x=>i(H)?H.value=x:null),label:"Facebook",placeholder:"https://facebook.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:t(J),"onUpdate:modelValue":u[15]||(u[15]=x=>i(J)?J.value=x:null),label:"Google+",placeholder:"https://plus.google.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:t($),"onUpdate:modelValue":u[16]||(u[16]=x=>i($)?$.value=x:null),label:"LinkedIn",placeholder:"https://linkedin.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:t(W),"onUpdate:modelValue":u[17]||(u[17]=x=>i(W)?W.value=x:null),label:"Instagram",placeholder:"https://instagram.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(F,{modelValue:t(Y),"onUpdate:modelValue":u[18]||(u[18]=x=>i(Y)?Y.value=x:null),label:"Quora",placeholder:"https://quora.com/username"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(S),e(oe,{class:"d-flex gap-4"},{default:l(()=>[e(_,null,{default:l(()=>u[23]||(u[23]=[w("Submit")])),_:1,__:[23]}),e(_,{color:"secondary",variant:"tonal"},{default:l(()=>u[24]||(u[24]=[w(" Cancel ")])),_:1,__:[24]})]),_:1})]),_:1})],64)}}}),Se=A({__name:"DemoFormLayoutFormValidation",setup(T){const C=m(""),f=m(""),r=["Item 1","Item 2","Item 3","Item 4"],V=m(),d=m(!1),v=m();return(s,a)=>{const n=L,p=j;return g(),N(k,{ref_key:"form",ref:v,"lazy-validation":""},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:t(C),"onUpdate:modelValue":a[0]||(a[0]=b=>i(C)?C.value=b:null),rules:["requiredValidator"in s?s.requiredValidator:t(E)],label:"Name",placeholder:"John Doe",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:t(f),"onUpdate:modelValue":a[1]||(a[1]=b=>i(f)?f.value=b:null),rules:["emailValidator"in s?s.emailValidator:t(we),"requiredValidator"in s?s.requiredValidator:t(E)],label:"E-mail",placeholder:"johndoe@email.com",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(p,{modelValue:t(V),"onUpdate:modelValue":a[2]||(a[2]=b=>i(V)?V.value=b:null),items:r,rules:["requiredValidator"in s?s.requiredValidator:t(E)],placeholder:"Select an Item",label:"Item",name:"select",require:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(I,{modelValue:t(d),"onUpdate:modelValue":a[3]||(a[3]=b=>i(d)?d.value=b:null),rules:["requiredValidator"in s?s.requiredValidator:t(E)],label:"Do you agree?",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(_,{color:"success",onClick:a[4]||(a[4]=b=>{var h;return(h=t(v))==null?void 0:h.validate()})},{default:l(()=>a[7]||(a[7]=[w(" Validate ")])),_:1,__:[7]}),e(_,{color:"error",onClick:a[5]||(a[5]=b=>{var h;return(h=t(v))==null?void 0:h.reset()})},{default:l(()=>a[8]||(a[8]=[w(" Reset Form ")])),_:1,__:[8]}),e(_,{color:"warning",onClick:a[6]||(a[6]=b=>{var h;return(h=t(v))==null?void 0:h.resetValidation()})},{default:l(()=>a[9]||(a[9]=[w(" Reset Validation ")])),_:1,__:[9]})]),_:1})]),_:1})]),_:1},512)}}}),Pe=A({__name:"DemoFormLayoutFormHint",setup(T){const C=m(""),f=m(""),r=m(),V=m(!1),d=["foo","bar","fizz","buzz"],v=m([]);return(s,a)=>{const n=L,p=he;return g(),N(k,{onSubmit:U(()=>{},["prevent"])},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:t(C),"onUpdate:modelValue":a[0]||(a[0]=b=>i(C)?C.value=b:null),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:t(f),"onUpdate:modelValue":a[1]||(a[1]=b=>i(f)?f.value=b:null),label:"Email",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(n,{modelValue:t(r),"onUpdate:modelValue":a[2]||(a[2]=b=>i(r)?r.value=b:null),label:"Password",autocomplete:"on",type:"password","persistent-hint":"",placeholder:"············",hint:"Your password must be 8-20 characters long."},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(p,{modelValue:t(v),"onUpdate:modelValue":a[3]||(a[3]=b=>i(v)?v.value=b:null),items:d,chips:"",multiple:"",label:"Autocomplete",placeholder:"Select"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(I,{modelValue:t(V),"onUpdate:modelValue":a[4]||(a[4]=b=>i(V)?V.value=b:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(_,{type:"submit"},{default:l(()=>a[5]||(a[5]=[w(" Submit ")])),_:1,__:[5]}),e(_,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>a[6]||(a[6]=[w(" Reset ")])),_:1,__:[6]})]),_:1})]),_:1})]),_:1})}}}),De=A({__name:"DemoFormLayoutMultipleColumn",setup(T){const C=m(""),f=m(""),r=m(""),V=m(""),d=m(""),v=m(""),s=m(!1);return(a,n)=>{const p=L;return g(),N(k,{onSubmit:U(()=>{},["prevent"])},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(p,{modelValue:t(C),"onUpdate:modelValue":n[0]||(n[0]=b=>i(C)?C.value=b:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(p,{modelValue:t(f),"onUpdate:modelValue":n[1]||(n[1]=b=>i(f)?f.value=b:null),label:"Last Name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(p,{modelValue:t(v),"onUpdate:modelValue":n[2]||(n[2]=b=>i(v)?v.value=b:null),label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(p,{modelValue:t(r),"onUpdate:modelValue":n[3]||(n[3]=b=>i(r)?r.value=b:null),label:"City",placeholder:"New York"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(p,{modelValue:t(V),"onUpdate:modelValue":n[4]||(n[4]=b=>i(V)?V.value=b:null),label:"Country",placeholder:"United States"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(p,{modelValue:t(d),"onUpdate:modelValue":n[5]||(n[5]=b=>i(d)?d.value=b:null),label:"Company",placeholder:"Themeselection"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(I,{modelValue:t(s),"onUpdate:modelValue":n[6]||(n[6]=b=>i(s)?s.value=b:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(_,{type:"submit"},{default:l(()=>n[7]||(n[7]=[w(" Submit ")])),_:1,__:[7]}),e(_,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>n[8]||(n[8]=[w(" Reset ")])),_:1,__:[8]})]),_:1})]),_:1})]),_:1})}}}),Be=A({__name:"DemoFormLayoutVerticalFormWithIcons",setup(T){const C=m(""),f=m(""),r=m(),V=m(),d=m(!1);return(v,s)=>{const a=L;return g(),N(k,{onSubmit:U(n=>({}),["prevent"])},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:t(C),"onUpdate:modelValue":s[0]||(s[0]=n=>i(C)?C.value=n:null),"prepend-inner-icon":"bx-user",label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:t(f),"onUpdate:modelValue":s[1]||(s[1]=n=>i(f)?f.value=n:null),"prepend-inner-icon":"bx-envelope",label:"Email",type:"email",placeholder:"johndoe@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:t(r),"onUpdate:modelValue":s[2]||(s[2]=n=>i(r)?r.value=n:null),"prepend-inner-icon":"bx-mobile",label:"Mobile",placeholder:"+1 123 456 7890",type:"number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:t(V),"onUpdate:modelValue":s[3]||(s[3]=n=>i(V)?V.value=n:null),"prepend-inner-icon":"bx-lock",label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(I,{modelValue:t(d),"onUpdate:modelValue":s[4]||(s[4]=n=>i(d)?d.value=n:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(_,{type:"submit",class:"me-4"},{default:l(()=>s[5]||(s[5]=[w(" Submit ")])),_:1,__:[5]}),e(_,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>s[6]||(s[6]=[w(" Reset ")])),_:1,__:[6]})]),_:1})]),_:1})]),_:1})}}}),ze=A({__name:"DemoFormLayoutVerticalForm",setup(T){const C=m(""),f=m(""),r=m(),V=m(),d=m(!1);return(v,s)=>{const a=L;return g(),N(k,{onSubmit:U(()=>{},["prevent"])},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:t(C),"onUpdate:modelValue":s[0]||(s[0]=n=>i(C)?C.value=n:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:t(f),"onUpdate:modelValue":s[1]||(s[1]=n=>i(f)?f.value=n:null),label:"Email",type:"email",placeholder:"johndoe@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:t(r),"onUpdate:modelValue":s[2]||(s[2]=n=>i(r)?r.value=n:null),label:"Mobile",placeholder:"+1 123 456 7890",type:"number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:t(V),"onUpdate:modelValue":s[3]||(s[3]=n=>i(V)?V.value=n:null),label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(I,{modelValue:t(d),"onUpdate:modelValue":s[4]||(s[4]=n=>i(d)?d.value=n:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(_,{type:"submit"},{default:l(()=>s[5]||(s[5]=[w(" Submit ")])),_:1,__:[5]}),e(_,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>s[6]||(s[6]=[w(" Reset ")])),_:1,__:[6]})]),_:1})]),_:1})]),_:1})}}}),Ee=A({__name:"DemoFormLayoutHorizontalFormWithIcons",setup(T){const C=m(""),f=m(""),r=m(),V=m(),d=m(!1);return(v,s)=>{const a=L;return g(),N(k,{onSubmit:U(()=>{},["prevent"])},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>s[5]||(s[5]=[c("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstNameHorizontalIcons"},"First Name",-1)])),_:1,__:[5]}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"firstNameHorizontalIcons",modelValue:t(C),"onUpdate:modelValue":s[0]||(s[0]=n=>i(C)?C.value=n:null),"prepend-inner-icon":"bx-user",placeholder:"John","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>s[6]||(s[6]=[c("label",{class:"v-label text-body-2 text-high-emphasis",for:"emailHorizontalIcons"},"Email",-1)])),_:1,__:[6]}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"emailHorizontalIcons",modelValue:t(f),"onUpdate:modelValue":s[1]||(s[1]=n=>i(f)?f.value=n:null),"prepend-inner-icon":"bx-envelope",placeholder:"johndoe@email.com","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>s[7]||(s[7]=[c("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobileHorizontalIcons"},"Mobile",-1)])),_:1,__:[7]}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"mobileHorizontalIcons",modelValue:t(r),"onUpdate:modelValue":s[2]||(s[2]=n=>i(r)?r.value=n:null),type:"number","prepend-inner-icon":"bx-mobile",placeholder:"+1 123 456 7890","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>s[8]||(s[8]=[c("label",{class:"v-label text-body-2 text-high-emphasis",for:"passwordHorizontalIcons"},"Password",-1)])),_:1,__:[8]}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"passwordHorizontalIcons",modelValue:t(V),"onUpdate:modelValue":s[3]||(s[3]=n=>i(V)?V.value=n:null),"prepend-inner-icon":"bx-lock",autocomplete:"on",type:"password",placeholder:"············","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(I,{modelValue:t(d),"onUpdate:modelValue":s[4]||(s[4]=n=>i(d)?d.value=n:null),label:"Remember me"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(_,{type:"submit",class:"me-4"},{default:l(()=>s[9]||(s[9]=[w(" Submit ")])),_:1,__:[9]}),e(_,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>s[10]||(s[10]=[w(" Reset ")])),_:1,__:[10]})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),Me=A({__name:"DemoFormLayoutHorizontalForm",setup(T){const C=m(""),f=m(""),r=m(),V=m(),d=m(!1);return(v,s)=>{const a=L;return g(),N(k,{onSubmit:U(()=>{},["prevent"])},{default:l(()=>[e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>s[5]||(s[5]=[c("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstName"},"First Name",-1)])),_:1,__:[5]}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"firstName",modelValue:t(C),"onUpdate:modelValue":s[0]||(s[0]=n=>i(C)?C.value=n:null),placeholder:"John","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>s[6]||(s[6]=[c("label",{class:"v-label text-body-2 text-high-emphasis",for:"email"},"Email",-1)])),_:1,__:[6]}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"email",modelValue:t(f),"onUpdate:modelValue":s[1]||(s[1]=n=>i(f)?f.value=n:null),placeholder:"johndoe@email.com","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>s[7]||(s[7]=[c("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobile"},"Mobile",-1)])),_:1,__:[7]}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"mobile",modelValue:t(r),"onUpdate:modelValue":s[2]||(s[2]=n=>i(r)?r.value=n:null),type:"number",placeholder:"+1 123 456 7890","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>s[8]||(s[8]=[c("label",{class:"v-label text-body-2 text-high-emphasis",for:"password"},"Password",-1)])),_:1,__:[8]}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"password",modelValue:t(V),"onUpdate:modelValue":s[3]||(s[3]=n=>i(V)?V.value=n:null),autocomplete:"on",type:"password",placeholder:"············","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(I,{modelValue:t(d),"onUpdate:modelValue":s[4]||(s[4]=n=>i(d)?d.value=n:null),label:"Remember me"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(y,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(_,{type:"submit",class:"me-4"},{default:l(()=>s[9]||(s[9]=[w(" Submit ")])),_:1,__:[9]}),e(_,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>s[10]||(s[10]=[w(" Reset ")])),_:1,__:[10]})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),je={ts:`<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          persistent-hint
          placeholder="············"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
          placeholder="Select"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          persistent-hint
          placeholder="············"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
          placeholder="Select"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},qe={ts:`<script lang="ts" setup>
import type { VForm } from 'vuetify/components/VForm'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          placeholder="John Doe"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          placeholder="johndoe@email.com"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          placeholder="Select an Item"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const name = ref('')
const email = ref('')

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const select = ref()
const checkbox = ref(false)
const form = ref()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          placeholder="John Doe"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          placeholder="johndoe@email.com"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          placeholder="Select an Item"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},He={ts:`<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
] as const

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<(typeof languageList)[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                  placeholder="John"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                  placeholder="Doe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  placeholder="Select Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  placeholder="Select Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppDateTimePicker
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="Select Birth Date"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  placeholder="+1 123 456 7890"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isCPasswordVisible ? 'bx-hide' : 'bx-show'
                  "
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                  placeholder="https://twitter.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                  placeholder="https://facebook.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                  placeholder="https://plus.google.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                  placeholder="https://linkedin.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                  placeholder="https://instagram.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                  placeholder="https://quora.com/username"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
]

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                  placeholder="John"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                  placeholder="Doe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  placeholder="Select Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  placeholder="Select Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppDateTimePicker
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="Select Birth Date"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  placeholder="+1 123 456 7890"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="
                    isCPasswordVisible ? 'bx-hide' : 'bx-show'
                  "
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                  placeholder="https://twitter.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                  placeholder="https://facebook.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                  placeholder="https://plus.google.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                  placeholder="https://linkedin.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                  placeholder="https://instagram.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                  placeholder="https://quora.com/username"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},Je={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VBtn
              type="submit"
              class="me-4"
            >
              Submit
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              type="reset"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VBtn
              type="submit"
              class="me-4"
            >
              Submit
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              type="reset"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>
`},$e={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="bx-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="bx-envelope"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="bx-mobile"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="bx-lock"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VBtn
              type="submit"
              class="me-4"
            >
              Submit
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              type="reset"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="bx-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="bx-envelope"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="bx-mobile"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="bx-lock"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VBtn
              type="submit"
              class="me-4"
            >
              Submit
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              type="reset"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>
`},We={ts:`<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="New York"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="United States"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Themeselection"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="New York"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="United States"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Themeselection"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Ye={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Ge={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="bx-user"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="bx-envelope"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="bx-mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="bx-lock"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-4"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="bx-user"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="bx-envelope"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="bx-mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="bx-lock"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-4"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Hl=A({__name:"form-layouts",setup(T){return(C,f)=>{const r=Me,V=_e,d=Ee,v=ze,s=Be,a=De,n=Pe,p=Se,b=Ue,h=Ie,P=Re;return g(),q("div",null,[e(y,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Horizontal Form",code:t(Je)},{default:l(()=>[e(r)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Horizontal Form with Icons",code:t($e)},{default:l(()=>[e(d)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Vertical Form",code:t(Ye)},{default:l(()=>[e(v)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Vertical Form with Icons",code:t(Ge)},{default:l(()=>[e(s)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(V,{title:"Multiple Column",code:t(We)},{default:l(()=>[e(a)]),_:1},8,["code"])]),_:1})]),_:1}),e(y,{class:"match-height my-3"},{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Form Hint",code:t(je)},{default:l(()=>[e(n)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(V,{title:"Form Validation",code:t(qe)},{default:l(()=>[e(p)]),_:1},8,["code"])]),_:1})]),_:1}),e(y,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(V,{title:"Form with Tabs","no-padding":"",code:t(He)},{default:l(()=>[e(b)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[f[0]||(f[0]=c("h6",{class:"text-h6 mb-6"}," Collapsible Section ",-1)),e(h)]),_:1,__:[0]}),e(o,{cols:"12"},{default:l(()=>[f[1]||(f[1]=c("h6",{class:"text-h6 mb-6"}," Sticky Section ",-1)),e(P)]),_:1,__:[1]})]),_:1})])}}});export{Hl as default};
