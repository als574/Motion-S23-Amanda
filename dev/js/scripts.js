import { gsap } from "gsap";


//gsap.to(console.log("#logo", {duration:3, opacity:0.5, delay:1}));

gsap.to("#logo", {duration:0.5, alpha:1, delay:0.5});
gsap.to("nav", {duration:0.5, y: "-=25"});

gsap.to("#hero-content", {duration:0.75, y: "-=30", stagger:0.5});

gsap.to("#content", {duration:.25, alpha:0.75});

 



