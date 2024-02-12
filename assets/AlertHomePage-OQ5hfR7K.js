import{_,o as i,c,d as o,e as a,f as k,g as E,r as f,n as y,a as g,b as x,t as w,F as h,h as b,i as M,j as C,k as v}from"./index-nMIsMn5R.js";const B={},H=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[o("path",{d:"M19.2 19.2L4.80005 4.79999",stroke:"#020C41","stroke-width":"0.8","stroke-linecap":"round","stroke-linejoin":"round"}),o("path",{d:"M4.79995 19.2L19.2 4.79999",stroke:"#020C41","stroke-width":"0.8","stroke-linecap":"round","stroke-linejoin":"round"})],-1),F=[H];function V(s,t){return i(),c("div",null,F)}const $=_(B,[["render",V]]),U={name:"Warning"},q=o("svg",{width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("rect",{y:"0.5",width:"20",height:"20",rx:"10",fill:"#FBAF28"}),o("path",{d:"M10.9165 13.5367V15.1366H9.0498V13.5367H10.9165ZM10.9165 5.64355V12.4167H9.0498V5.64355H10.9165Z",fill:"white"})],-1),W=[q];function R(s,t,m,e,r,u){return i(),c("div",null,W)}const P=_(U,[["render",R]]),I={name:"AlertHome",props:["handleCloseAlert"],emits:["closeAlertEmit"],components:{SymbolsCloseMenu:$,Warning:P},setup(){const s=a(!1),t=a(0),m=a(500),e=a(!1),r=a(0),u=a([{id:1,title:"Alert_1",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.",link:"https://www.google.com"},{id:2,title:"Alert_2",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.2",link:"https://www.google.com"},{id:3,title:"Alert_3",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.3",link:"https://www.google.com"},{id:4,title:"Alert_4",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.4",link:"https://www.google.com"}]),p=A=>{t.value=A};let n;const d=()=>{t.value=(t.value+1)%u.value.length},l=A=>{!A&&s.value?n=setInterval(()=>{r.value=r.value+2e3/110,console.log(r.value),r.value>110&&(r.value=0,d())},m.value):clearInterval(n)};return k(()=>{s.value=!0,l(!1)}),E(()=>{s.value=!1,clearInterval(n),console.log(" Unmounted YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")}),{alertMessages:u,alertPosition:t,pauseAlert:e,increaseWith:r,handleButtonClick:p,automaticAlertPosition:l}}},S={class:"mx-auto flex flex-col md:flex-row items-start md:items-center justify-between w-full md:px-5 py-[10px] md:py-[10px] gap-[10px] md:gap-4 lg:gap-8"},j={class:"flex gap-[10px] items-center py-1"},N={class:"max-h-[48px] md:h-full text-[10px] md:text-xs lg:text-sm overflow-auto pr-4 pt-[3px]"},Y=o("span",{class:"font-semibold text-left"},"Aviso importante.",-1),L=["href"],T={class:"flex items-center gap-8"},z={class:"flex gap-2"},Z=["onClick"];function D(s,t,m,e,r,u){const p=f("Warning"),n=f("SymbolsCloseMenu");return i(),c(h,null,[o("div",{class:"h-[4px] bg-amYellow rounded-r-3xl transition-all max-w-1120 transition-width duration-500",style:y({width:e.increaseWith+"%"})},null,4),o("section",{class:"flex bg-amHelperYellow gap-4 px-5 md:px-0 w-full relative",onMouseover:t[2]||(t[2]=d=>e.automaticAlertPosition(!0)),onMouseleave:t[3]||(t[3]=d=>e.automaticAlertPosition(!1))},[o("div",S,[o("div",j,[g(p,{class:"hidden md:flex mx-auto"}),o("p",N,[Y,x(" "+w(e.alertMessages[e.alertPosition].message)+" ",1),o("a",{href:e.alertMessages[e.alertPosition].link},"Conoce más",8,L)])]),o("div",T,[o("div",z,[(i(!0),c(h,null,b(e.alertMessages,(d,l)=>(i(),c("button",{class:M([{"bg-amBluePremium":l===e.alertPosition,"opacity-20":l!==e.alertPosition},"w-[7px] h-[7px] rounded-full bg-amBluePremium"]),key:l,onClick:A=>e.handleButtonClick(l)},null,10,Z))),128))]),g(n,{class:"hidden md:block md:cursor-pointer",onClick:t[0]||(t[0]=d=>s.$emit("closeAlertEmit"))})])]),g(n,{class:"py-[10px] md:hidden mx-auto self-start flex-shrink-0 cursor-pointer mt-[3px]",onClick:t[1]||(t[1]=d=>s.$emit("closeAlertEmit"))})],32)],64)}const G=_(I,[["render",D]]),J={name:"AlertHome2",props:["handleCloseAlert"],emits:["closeAlertEmit"],components:{SymbolsCloseMenu:$,Warning:P},setup(){const s=a(-100),t=a(0),m=a(3e3),e=a(!1),r=a(0),u=a([{id:1,title:"Alert_1",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.",link:"https://www.google.com"},{id:2,title:"Alert_2",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.2",link:"https://www.google.com"},{id:3,title:"Alert_3",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.3",link:"https://www.google.com"},{id:4,title:"Alert_4",message:"Conoce los requisitos emitidos por las autoridades de Canadá, España, Francia y Reino Unido.4",link:"https://www.google.com"}]),p=A=>{t.value=A},n=()=>{t.value=(t.value+1)%u.value.length};let d=null;const l=()=>{d=setInterval(()=>{console.log("Pause:",e.value),e.value?clearInterval(d):s.value===0?(s.value=-100,n()):s.value=0},m.value)};return k(()=>{l()}),{alertMessages:u,alertPosition:t,pauseAlert:e,increaseWith:r,percentProgressBar:s,handleButtonClick:p,progressBar:l}}},K={class:"mx-auto flex flex-col md:flex-row items-start md:items-center justify-between w-full md:px-5 py-[10px] md:py-[10px] gap-[10px] md:gap-4 lg:gap-8"},O={class:"flex gap-[10px] items-center py-1"},Q={class:"max-h-[48px] md:h-full text-[10px] md:text-xs lg:text-sm overflow-auto pr-4 pt-[3px]"},X=o("span",{class:"font-semibold text-left"},"Aviso importante.",-1),ee=["href"],te={class:"flex items-center gap-8"},oe={class:"flex gap-2"},se=["onClick"];function le(s,t,m,e,r,u){const p=f("Warning"),n=f("SymbolsCloseMenu");return i(),c(h,null,[o("div",{class:"h-[4px] bg-amYellow rounded-r-3xl transform transition ease-in duration-1000",style:y({transform:`translate(${e.percentProgressBar}%)`})},null,4),o("section",{class:"flex bg-amHelperYellow gap-4 px-5 md:px-0 w-full relative overflow-hidden",onMouseover:t[2]||(t[2]=()=>{e.pauseAlert.value=!0}),onMouseleave:t[3]||(t[3]=()=>{e.pauseAlert.value=!1})},[o("div",K,[o("div",O,[g(p,{class:"hidden md:flex mx-auto"}),o("p",Q,[X,x(" "+w(e.alertMessages[e.alertPosition].message)+" ",1),o("a",{href:e.alertMessages[e.alertPosition].link},"Conoce más",8,ee)])]),o("div",te,[o("div",oe,[(i(!0),c(h,null,b(e.alertMessages,(d,l)=>(i(),c("button",{class:M([{"bg-amBluePremium":l===e.alertPosition,"opacity-20":l!==e.alertPosition},"w-[7px] h-[7px] rounded-full bg-amBluePremium"]),key:l,onClick:A=>e.handleButtonClick(l)},null,10,se))),128))]),g(n,{class:"hidden md:block md:cursor-pointer",onClick:t[0]||(t[0]=d=>s.$emit("closeAlertEmit"))})])]),g(n,{class:"py-[10px] md:hidden mx-auto self-start flex-shrink-0 cursor-pointer mt-[3px]",onClick:t[1]||(t[1]=d=>s.$emit("closeAlertEmit"))})],32)],64)}const ne=_(J,[["render",le]]),ae={name:"AlertHomeV1",components:{AlertHome:G,AlertHome2:ne},props:{id:{type:Number,required:!0}},setup(){const s=a(!0);return{alertVisible:s,closeAlert:()=>{s.value=!1}}}},ie={class:"max-w-[1120px] justify-center mx-auto relative overflow-hidden"},re={class:"mb-11 mt-7"},de={key:0},ce={key:1};function me(s,t,m,e,r,u){const p=f("AlertHome"),n=f("AlertHome2");return i(),c("section",ie,[o("h1",re,[x("AlertHome: "),o("span",null,"#"+w(m.id),1)]),m.id===1?(i(),c("div",de,[e.alertVisible?(i(),C(p,{key:0,onCloseAlertEmit:e.closeAlert},null,8,["onCloseAlertEmit"])):v("",!0)])):v("",!0),m.id===2?(i(),c("div",ce,[e.alertVisible?(i(),C(n,{key:0,onCloseAlertEmit:e.closeAlert},null,8,["onCloseAlertEmit"])):v("",!0)])):v("",!0)])}const pe=_(ae,[["render",me]]);export{pe as default};
