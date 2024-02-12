import{_,o as r,c as m,d as t,e as a,f as k,g as E,r as g,n as y,a as v,b as h,t as w,F as x,h as b,i as M,j as C,k as f}from"./index-NnF-C_cr.js";const H={},F=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[t("path",{d:"M19.2 19.2L4.80005 4.79999",stroke:"#020C41","stroke-width":"0.8","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M4.79995 19.2L19.2 4.79999",stroke:"#020C41","stroke-width":"0.8","stroke-linecap":"round","stroke-linejoin":"round"})],-1),U=[F];function q(s,o){return r(),m("div",null,U)}const P=_(H,[["render",q]]),V={name:"Warning"},W=t("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("rect",{y:"0.5",width:"20",height:"20",rx:"10",fill:"#FBAF28"}),t("path",{d:"M10.9165 13.5367V15.1366H9.0498V13.5367H10.9165ZM10.9165 5.64355V12.4167H9.0498V5.64355H10.9165Z",fill:"white"})],-1),I=[W];function R(s,o,d,e,c,u){return r(),m("div",null,I)}const $=_(V,[["render",R]]),S={name:"AlertHome",props:["handleCloseAlert"],emits:["closeAlertEmit"],components:{SymbolsCloseMenu:P,Warning:$},setup(){const s=a(!1),o=a(0),d=a(500),e=a(!1),c=a(0),u=a([{id:1,title:"Alert_1",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.",link:"https://www.google.com"},{id:2,title:"Alert_2",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.2",link:"https://www.google.com"},{id:3,title:"Alert_3",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.3",link:"https://www.google.com"},{id:4,title:"Alert_4",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.4",link:"https://www.google.com"}]),A=p=>{o.value=p};let i;const l=()=>{o.value=(o.value+1)%u.value.length},n=p=>{!p&&s.value?i=setInterval(()=>{c.value=c.value+2e3/110,console.log(c.value),c.value>110&&(c.value=0,l())},d.value):clearInterval(i)};return k(()=>{s.value=!0,n(!1)}),E(()=>{s.value=!1,clearInterval(i),console.log(" Unmounted YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")}),{alertMessages:u,alertPosition:o,pauseAlert:e,increaseWith:c,handleButtonClick:A,automaticAlertPosition:n}}},Y={class:"mx-auto flex flex-col md:flex-row items-start md:items-center justify-between w-full md:px-5 py-[10px] md:py-[10px] gap-[10px] md:gap-4 lg:gap-8"},j={class:"flex gap-[10px] items-center py-1"},N={class:"max-h-[48px] md:h-full text-[10px] md:text-xs lg:text-sm overflow-auto pr-4 pt-[3px]"},T=t("span",{class:"font-semibold text-left"},"Aviso importante.",-1),L=["href"],z={class:"flex items-center gap-8"},Z={class:"flex gap-2"},D=["onClick"];function G(s,o,d,e,c,u){const A=g("Warning"),i=g("SymbolsCloseMenu");return r(),m(x,null,[t("div",{class:"h-[4px] bg-amYellow rounded-r-3xl transition-all max-w-1120 transition-width duration-500",style:y({width:e.increaseWith+"%"})},null,4),t("section",{class:"flex bg-amHelperYellow gap-4 px-5 md:px-0 w-full relative",onMouseover:o[2]||(o[2]=l=>e.automaticAlertPosition(!0)),onMouseleave:o[3]||(o[3]=l=>e.automaticAlertPosition(!1))},[t("div",Y,[t("div",j,[v(A,{class:"hidden md:flex mx-auto"}),t("p",N,[T,h(" "+w(e.alertMessages[e.alertPosition].message)+" ",1),t("a",{href:e.alertMessages[e.alertPosition].link},"Conoce más",8,L)])]),t("div",z,[t("div",Z,[(r(!0),m(x,null,b(e.alertMessages,(l,n)=>(r(),m("button",{class:M([{"bg-amBluePremium":n===e.alertPosition,"opacity-20":n!==e.alertPosition},"w-[7px] h-[7px] rounded-full bg-amBluePremium"]),key:n,onClick:p=>e.handleButtonClick(n)},null,10,D))),128))]),v(i,{class:"hidden md:block md:cursor-pointer",onClick:o[0]||(o[0]=l=>s.$emit("closeAlertEmit"))})])]),v(i,{class:"py-[10px] md:hidden mx-auto self-start flex-shrink-0 cursor-pointer mt-[3px]",onClick:o[1]||(o[1]=l=>s.$emit("closeAlertEmit"))})],32)],64)}const J=_(S,[["render",G]]),K={name:"AlertHome2",props:["handleCloseAlert"],emits:["closeAlertEmit"],components:{SymbolsCloseMenu:P,Warning:$},setup(){const s=a(-100),o=a(0),d=a(3e3),e=a(!1),c=a(0),u=a([{id:1,title:"Alert_1",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.",link:"https://www.google.com"},{id:2,title:"Alert_2",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.2",link:"https://www.google.com"},{id:3,title:"Alert_3",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.3",link:"https://www.google.com"},{id:4,title:"Alert_4",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.4",link:"https://www.google.com"}]),A=p=>{o.value=p},i=()=>{o.value=(o.value+1)%u.value.length};let l=null;const n=()=>{l=setInterval(()=>{console.log("Pause:",e.value),e.value?clearInterval(l):s.value===0?(s.value=-100,i()):s.value=0},d.value)};return k(()=>{n()}),{alertMessages:u,alertPosition:o,pauseAlert:e,increaseWith:c,percentProgressBar:s,handleButtonClick:A,progressBar:n}}},O={class:"mx-auto flex flex-col md:flex-row items-start md:items-center justify-between w-full md:px-5 py-[10px] md:py-[10px] gap-[10px] md:gap-4 lg:gap-8"},Q={class:"flex gap-[10px] items-center py-1"},X={class:"max-h-[48px] md:h-full text-[10px] md:text-xs lg:text-sm overflow-auto pr-4 pt-[3px]"},ee=t("span",{class:"font-semibold text-left"},"Aviso importante.",-1),oe=["href"],te={class:"flex items-center gap-8"},se={class:"flex gap-2"},le=["onClick"];function ne(s,o,d,e,c,u){const A=g("Warning"),i=g("SymbolsCloseMenu");return r(),m(x,null,[t("div",{class:"h-[4px] bg-amYellow rounded-r-3xl transform transition ease-in duration-1000",style:y({transform:`translate(${e.percentProgressBar}%)`})},null,4),t("section",{class:"flex bg-amHelperYellow gap-4 px-5 md:px-0 w-full relative overflow-hidden",onMouseover:o[2]||(o[2]=()=>{e.pauseAlert.value=!0}),onMouseleave:o[3]||(o[3]=()=>{e.pauseAlert.value=!1})},[t("div",O,[t("div",Q,[v(A,{class:"hidden md:flex mx-auto"}),t("p",X,[ee,h(" "+w(e.alertMessages[e.alertPosition].message)+" ",1),t("a",{href:e.alertMessages[e.alertPosition].link},"Conoce más",8,oe)])]),t("div",te,[t("div",se,[(r(!0),m(x,null,b(e.alertMessages,(l,n)=>(r(),m("button",{class:M([{"bg-amBluePremium":n===e.alertPosition,"opacity-20":n!==e.alertPosition},"w-[7px] h-[7px] rounded-full bg-amBluePremium"]),key:n,onClick:p=>e.handleButtonClick(n)},null,10,le))),128))]),v(i,{class:"hidden md:block md:cursor-pointer",onClick:o[0]||(o[0]=l=>s.$emit("closeAlertEmit"))})])]),v(i,{class:"py-[10px] md:hidden mx-auto self-start flex-shrink-0 cursor-pointer mt-[3px]",onClick:o[1]||(o[1]=l=>s.$emit("closeAlertEmit"))})],32)],64)}const ae=_(K,[["render",ne]]),ie={name:"AlertHome3",props:["handleCloseAlert"],emits:["closeAlertEmit"],components:{SymbolsCloseMenu:P,Warning:$},setup(){const s=a(null),o=a(2e3),d=a(0),e=a(0),c=a(!1),u=a([{id:1,title:"Alert_1",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.",link:"https://www.google.com"},{id:2,title:"Alert_2",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.2",link:"https://www.google.com"},{id:3,title:"Alert_3",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.3",link:"https://www.google.com"},{id:4,title:"Alert_4",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.4",link:"https://www.google.com"}]),A=B=>{e.value=B},i=()=>{e.value=(e.value+1)%u.value.length},l=()=>{s.value=setInterval(()=>{d.value===100?(i(),d.value=0):d.value+=1/2/2},Math.ceil(o.value/100/2/2))},n=()=>{clearInterval(s.value),console.log("Mouseover working")},p=()=>{l(),console.log("Mouseout working")};return k(()=>{l()}),E(()=>{clearInterval(s.value),console.log(" Unmounted YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")}),{alertMessages:u,alertPosition:e,pauseAlert:c,increaseWith:d,handleButtonClick:A,mouseoutProgressBar:p,mouseoverProgressBar:n}}},re={class:"mx-auto flex flex-col md:flex-row items-start md:items-center justify-between w-full md:px-5 py-[10px] md:py-[10px] gap-[10px] md:gap-4 lg:gap-8"},de={class:"flex gap-[10px] items-center py-1"},ce={class:"max-h-[48px] md:h-full text-[10px] md:text-xs lg:text-sm overflow-auto pr-4 pt-[3px]"},me=t("span",{class:"font-semibold text-left"},"Aviso importante.",-1),ue=["href"],Ae={class:"flex items-center gap-8"},pe={class:"flex gap-2"},ge=["onClick"];function ve(s,o,d,e,c,u){const A=g("Warning"),i=g("SymbolsCloseMenu");return r(),m(x,null,[t("div",{class:"h-[4px] bg-amYellow rounded-r-3xl l max-w-1120",style:y({width:e.increaseWith+"%"})},null,4),t("section",{class:"flex bg-amHelperYellow gap-4 px-5 md:px-0 w-full relative",onMouseover:o[2]||(o[2]=l=>e.mouseoverProgressBar()),onMouseout:o[3]||(o[3]=l=>e.mouseoutProgressBar())},[t("div",re,[t("div",de,[v(A,{class:"hidden md:flex mx-auto"}),t("p",ce,[me,h(" "+w(e.alertMessages[e.alertPosition].message)+" ",1),t("a",{href:e.alertMessages[e.alertPosition].link},"Conoce más",8,ue)])]),t("div",Ae,[t("div",pe,[(r(!0),m(x,null,b(e.alertMessages,(l,n)=>(r(),m("button",{class:M([{"bg-amBluePremium":n===e.alertPosition,"opacity-20":n!==e.alertPosition},"w-[7px] h-[7px] rounded-full bg-amBluePremium"]),key:n,onClick:p=>e.handleButtonClick(n)},null,10,ge))),128))]),v(i,{class:"hidden md:block md:cursor-pointer",onClick:o[0]||(o[0]=l=>s.$emit("closeAlertEmit"))})])]),v(i,{class:"py-[10px] md:hidden mx-auto self-start flex-shrink-0 cursor-pointer mt-[3px]",onClick:o[1]||(o[1]=l=>s.$emit("closeAlertEmit"))})],32)],64)}const fe=_(ie,[["render",ve]]),xe={name:"AlertHomeV1",components:{AlertHome:J,AlertHome2:ae,AlertHome3:fe},props:{id:{type:Number,required:!0}},setup(){const s=a(!0);return{alertVisible:s,closeAlert:()=>{s.value=!1}}}},_e={class:"max-w-[1120px] justify-center mx-auto relative overflow-hidden"},he={class:"mb-11 mt-7"},we={key:0},Ce={key:1},ke={key:2};function ye(s,o,d,e,c,u){const A=g("AlertHome"),i=g("AlertHome2"),l=g("AlertHome3");return r(),m("section",_e,[t("h1",he,[h("AlertHome: "),t("span",null,"#"+w(d.id),1)]),d.id===1?(r(),m("div",we,[e.alertVisible?(r(),C(A,{key:0,onCloseAlertEmit:e.closeAlert},null,8,["onCloseAlertEmit"])):f("",!0)])):f("",!0),d.id===2?(r(),m("div",Ce,[e.alertVisible?(r(),C(i,{key:0,onCloseAlertEmit:e.closeAlert},null,8,["onCloseAlertEmit"])):f("",!0)])):f("",!0),d.id===3?(r(),m("div",ke,[e.alertVisible?(r(),C(l,{key:0,onCloseAlertEmit:e.closeAlert},null,8,["onCloseAlertEmit"])):f("",!0)])):f("",!0)])}const Me=_(xe,[["render",ye]]);export{Me as default};
