//import { gsap } from "gsap";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"; // Update the file path
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin"; // Update the file path
import { GSDevTools } from "gsap/dist/GSDevTools"; // Update the file path

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools);
gsap.set("#foundlogo", { autoAlpha: 0 });

function opacityAnimation() {
  let tl = gsap.timeline();

  //tl.fromTo("#foundlogo", { opacity: 0, duration: 0.5 }, { opacity: 1, duration: 0.5 });
  tl.to("#content", { autoAlpha:0, duration:0.5, x:"=-40" });
  return tl;
}

let mainTL = gsap.timeline();
mainTL.add(opacityAnimation());

GSDevTools.create()