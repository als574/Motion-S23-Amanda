import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"; // Update the file path
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin"; // Update the file path
import { GSDevTools } from "gsap/dist/GSDevTools"; // Update the file path

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools);



//return tl;
//}

let mainTL = gsap.timeline();
//mainTL.add(opacityAnimation());

GSDevTools.create();
