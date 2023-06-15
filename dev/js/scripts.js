import { gsap } from "gsap";
//import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, GSDevTools); //MotionPathPlugin,
let mainTL= gsap.timeline();

function opac() {
  let tl = gsap.timeline();

  tl.set("#logo", { duration: 1.5, visibility: "visible", autoAlpha: 1 })
    .to("#logo", { duration: 1, autoAlpha: 0, yoyo: true, ease: "none" })
    .set("#logo", { visibility: "hidden" });

  return tl;
}

function nBlue() {
  let tl = gsap.timeline();

  tl.from("#nblue1", { visibility: "hidden", fill: "#2C344C" })
    .from("#nblue1", { duration: 1, scale: 0.25, transformOrigin:"center"})
    .to("#nblue1", { visibility: "visible" })
    .to("#nblue1", {duration: 2, scale: 1.25, rotate: -60, x: "-=100%",y: "-=100%"})
    .to("#nblue1", {duration: 1.25, rotate: -10, x: "-=100%"});

  return tl;
}

function red() {
  let tl = gsap.timeline();

  tl.from("#red1", {visibility: "hidden", fill: "#CD4225"})
    .from("#red1", {duration: 1, scale: 0.15, transformOrigin:"center", x:-490, y:-80})
    .to("#red1", {visibility: "visible"})
    .to("#red1", {duration: 0.5, rotate: -90})
    .to("#red1", {duration: 2, scale: 0, x: "+=450%", y: "-=225%"});
    
  return tl;
}
function yellow() {
  let tl = gsap.timeline();

  tl.set("#yellow1", { opacity: 0.85 })
    .from("#yellow1", { visibility: "hidden", fill: "#2C344C" }, "+=0.05")
    .from("#yellow1", { duration: 1.5, scale: 0.05 })
    .to("#yellow1", { visibility: "visible" })
    .to("#yellow1", { duration: 2, scale: 1.75, rotate: 38, x: "-=175%", y: "-=125%" }, "<")
    .to("#yellow1", { duration: 0.75, x: "+=85%", y: "+=85%" })
    .to("#yellow1", { duration: 1, morphSVG: "#yellow3" })
    .to("#yellow1", { duration: 1.5, rotate: -5, x: "+=110%", y: "-=70%" })
    .to("#yellow1", { duration: 3, morphSVG: "#yellow4", x: "+=2%", y: "-=2%" });

  return tl;
}
// function yellow() {
//   let tl = gsap.timeline();

//   tl.set("#yellow1", { opacity: 0.85 })
//     .from("#yellow1", { visibility: "hidden", fill: "#2C344C" }, "+=0.05")
//     .from("#yellow1", { duration: 1.5, scale: 0.05 })
//     .to("#yellow1", { visibility: "visible" })
//     .to("#yellow1", { duration: 2, scale: 1.75, rotate: 38, x: "-=225%", y: "-=175%" }, "<")
//     .to("#yellow1", { duration: 0.75, x:"+=110%", y: "+=110%" })
//     .to("#yellow1", { duration: 1, morphSVG: "#yellow3" }) 
//     .to("#yellow1", { duration: 1.5, rotate: -5, x:"+=130%", y: "-=90%" })
//     .to("#yellow1", { duration: 3, morphSVG: "#yellow4",  x:"+=2%", y: "-=2%" });
//     //.to("#yellow1", { visibility: "hidden" }) 
//     //.from("#yellow3", { visibility: "hidden" })
//     //.to("#yellow3", { visibility: "visible" });
//     return tl;
//   }
// function yellow() {
//   let tl = gsap.timeline();

//     tl.set("#yellow1", {opacity: 0.85})
//     .from("#yellow1", { visibility: "hidden", fill: "#2C344C" },"+=0.05")
//     //.from("#yellow3", { visibility: "hidden", fill: "#2C344C" })
//     .from("#yellow1", { duration: 1.5, scale: 0.05 })
//     .to("#yellow1", { visibility: "visible" })
//     .to("#yellow1", {duration: 2, scale: 1.75, rotate:38, x: "-=250%", y: "-=175%"},"<")
//     .to("#yellow1", {duration: 0.5, y: "+=110%"})
//     .to("#yellow1", {duration:1, morphSVG:"yellow3"})
//     .to("#yellow3", { visibility: "visible" });
    
//   return tl;
// }
function lBlue() {
  let tl = gsap.timeline();

  tl.set("#lblue1", { opacity: 0.85 })
    .from("#lblue1", { visibility: "hidden", fill: "#CD4225", transformOrigin: "50% 50%" }, "+=0.15")
    .from("#lblue1", { duration: 1.5, scale: 0.15, x: "-=152%", y: "-=60%" })
    .to("#lblue1", { visibility: "visible" })
    .to("#lblue1", { duration: 1, scale: 2, rotate: -30, x: "+=25%", y: "+=35%" }, "<")
    .to("#lblue1", { duration: 2.5, morphSVG: "#lblue3", rotate: 5, y: "-=75%" })
    .to("#lblue1", { duration: 1, x: "-=30%", y: "-=30%" })
    .to("#lblue1", { duration: 3, morphSVG: "#lblue4", rotate: 4,  x: "+=250%", y: "+=200%"});

  return tl;
}
// function lBlue() {
//   let tl = gsap.timeline();

//   tl.set("#lblue1", {opacity: 0.85})
//     .from("#lblue1", {visibility: "hidden",  fill: "#CD4225", transformOrigin: "50% 50%"},"+=0.15")
//     .from("#lblue1", {duration: 1.5, scale: 0.15, x: "-=152%", y: "-=60%"})
//     .to("#lblue1", { visibility: "visible" })
//     .to("#lblue1", {duration: 2, scale: 2, rotate:-30, x: "+=130%", y: "+=125%"},"<")
//     .to("#lblue1", { duration: 1, morphSVG: "#lblue3", rotate:5, y: "-=125%"  })
//     .to("#lblue1", { duration: 1, x: "-=100%", y: "-=100%"})
//     .to("#lblue1", { duration: 3,  morphSVG: "#lblue4"});
    


//     return tl;
//   }

function orange() {
  let tl = gsap.timeline();

  tl.set("#orange1", { opacity: 0.85, scale: 0 })
    .from("#orange1", { visibility: "hidden", fill: "#CD4225" })
    .to("#orange1", { visibility: "visible" })
    .to("#orange1", { duration: 3, scale: 7, rotate: 60, x: "+=600%", y: "-=650%" })
    .to("#orange1", { duration: 1, scaleY: "10" })
    .to("#orange1", { duration: 1.5, x: "-=800%", y: "+=780%" }) 
    .to("#orange1", { duration: 1, scale: 6},"same")
    .to("#orange1", {duration: 3.5, x: "-=2350%", y: "-=450%"},"same")

   // .to("#orange1", { duration: 1, morphSVG: "#orange3" })
    
  return tl;
}
  function green(){
    let tl = gsap.timeline();
  
    tl.set("#green1", {scale: 0})
    .from("#green1", {visibility:"hidden", fill:"#CD4225"})
    //.from("#green1", {duration:0.75, scale:0.10},"+=0.20")
    .to("#green1", {visibility: "visible"})
    .to("#green1", {duration: 1, scale: 2})
    .to("#green1", {duration: 1, rotate:35, y: "-=200%"})
    .to("#green1", {duration: 1,y: "-=200%"});
  
  
    return tl;
  }
  function hideShow(){
    let tl = gsap.timeline();
    tl.to("#orange1", {duration:0.5,x:"+=125",y:"+=150"},"mvdown")
    .to("#yellow1", {duration:0.5,x:"+=125",y:"+=150"},"mvdown")
    .to("#lblue1", {duration:0.5,x:"+=125",y:"+=150"},"mvdown")
    .to("#orange1", {visibility: "hidden"},"time")
    .to("#yellow1", {visibility: "hidden"},"time")
    .to("#lblue1", {visibility: "hidden"},"time")
    
     
    .to("#shape4", {visibility: "visible"});
  
    return tl;
  }
  function mask(){
    let tl = gsap.timeline();
    tl.from("#mask", {visibility:"hidden"})
    tl.to("#mask", {visibility:"visible",scaleX:2})
    tl.from("#scenario4", {visibility:"hidden"});
    tl.from("#scenario4", {visibility:"visible", opacity:0, duration: 1, x:"+=80%"});
    


  
  
    return tl;
  }

GSDevTools.create();

mainTL.add(opac()) 
  .add(red(),"scaleup") 
  .add(nBlue(),"scaleup")
  .add(yellow(),"scaleup")
  .add(orange(),"scaleup")
  .add(green(),"scaleup")
  .add(lBlue(),"scaleup")
  .add(hideShow())
  .add(mask())
  ;

//------------------------------


// import { gsap } from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { GSDevTools } from "gsap/GSDevTools";

// gsap.registerPlugin(DrawSVGPlugin, GSDevTools);
// let mainTL = gsap.timeline();

// function nBlue() {
//   let tl = gsap.timeline();

//   tl.from("#nblue1", { opacity: 0, fill: "#2C344C" })
//     .from("#nblue1", { duration: 1, scale: "0.25" })
//     .to("#nblue1", { opacity: 1 })
//     .to("#nblue1", { duration: 2, scale: 1.25, rotate: -60, x: "-=450%", y: "-=100%" });

//   return tl;
// }

// function red() {
//   let tl = gsap.timeline();

//   tl.from("#red1", { opacity: 0, fill: "#CD4225"})
//     .from("#red1", { duration: 1, scale: "0.10" })
//     .to("#red1", { opacity: 1 })
//     .to("#red1", { duration: 2, scale: 1.25, rotate: -60, x: "+=450%", y: "-=100%" });

//   return tl;
// }

// GSDevTools.create();

// mainTL.add(red()).add(nBlue(), 0); 