import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools);

// function tAnimation(){
//     let tl = gsap.timeline();


//     return tl;
// }


// let mainTl = gsap.timeline();
// mainTl.add(tAnimation())
// .add(eAnimation(), "-=0.25")
GSDevTools.create();
