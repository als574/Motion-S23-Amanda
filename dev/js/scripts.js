import { gsap } from "gsap";
//import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools); //MotionPathPlugin,
let mainTL= gsap.timeline();

function opac(){
  let tl = gsap.timeline();
  
  tl.set("#logo", {duration:1.5, visibility:"visible", autoAlpha:1})
    .to("#logo", {duration:1, autoAlpha:0,yoyo:true, ease: "logo".easeNone})
    tl.set("#logo", {visibility:"hidden"});
  
  return tl;
}
function nBlue(){
let tl = gsap.timeline();

  tl.from("#nblue1", {visibility:"hidden", fill: "#2C344C"})
  .from("#nblue1", {duration:1, scale:0.25})
  .to("#nblue1", {visibility: "visible"})
  .to("#nblue1", {duration: 2, scale: 1.25, rotate:-60, x: "-=450%", y: "-=100%"});

  return tl;
}

function red(){
  let tl = gsap.timeline();

  tl.from("#red1", {visibility:"hidden", fill:"#CD4225", transformOrigin:"50% 50%"})
  .from("#red1", {duration:0.75, scale:0.005})//scale and position not correct!
  .to("#red1", {visibility: "visible"})
  .to("#red1", {duration: 2, scale: 1.005, rotate:60, x: "+=450%", y: "-=100%"});


  return tl;
}

function yellow(){
  let tl = gsap.timeline();
  
    tl.from("#yellow1", {visibility:"hidden", fill: "#2C344C"})
    .from("#yellow1", {duration:1, scale:0.05},"=+0.05")
    .to("#yellow1", {visibility: "visible"})
    .to("#yellow1", {duration: 2, scale: 1.25, rotate:+60, x: "-=450%", y: "+=25%"});
  
    return tl;
  }

  function lBlue(){
    let tl = gsap.timeline();
  
    tl.from("#lblue1", {visibility:"hidden", fill:"#CD4225", transformOrigin:"50% 50%"})
    .from("#lblue1", {duration:0.75, scale:0.005})//scale and position not correct!
    .to("#lblue1", {visibility: "visible"})
    .to("#lblue1", {duration: 2, scale: 1.75, rotate:60, x: "+=450%", y: "+=400%"});
  
  
    return tl;
  }

  function orange(){
    let tl = gsap.timeline();
  
    tl.from("#orange1", {visibility:"hidden", fill:"#CD4225"})
    .to("#orange1", {duration:0.75, scale:1.5},"=+0.15")//scale and position not correct!
    .to("#orange", {visibility: "visible"})
    .to("#orange1", {duration: 2, scale: 1.1, rotate:60, x: "+=450%", y: "-=100%"});
  
  
    return tl;
  }
  function green(){
    let tl = gsap.timeline();
  
    tl.from("#green1", {visibility:"hidden", fill:"#CD4225"})
    .from("#green1", {duration:0.75, scale:0.25},"+=0.20")//scale and position not correct!
    .to("#green1", {visibility: "visible"})
    .to("#green1", {duration: 2, scale: 1.25, rotate:60, x: "+=450%", y: "-=100%"});
  
  
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
  ;




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