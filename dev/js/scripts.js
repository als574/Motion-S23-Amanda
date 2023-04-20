import { gsap } from "gsap";

gsap.from("#logo", {duration:1.5, alpha:0, delay:1});
gsap.from("nav", {duration:1, y: "-=25"});

gsap.from("#hero-content", {duration: 2.5, ease: "power2.out", y: "-=30",stagger:1});

gsap.from("#content", {duration:1, alpha:0, x:"-=60", stagger:1.5});

 



