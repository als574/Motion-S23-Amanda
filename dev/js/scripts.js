import { gsap } from "gsap";

//QUIZ
//gsap.from(".red", {duration:1,x:"0"});
//gsap.from(".blue", {duration:1,x:"350"});

let mainTl = gsap.timeline({});

function quizAnim(){

    let tl = gsap.timeline({});
   // let mm = gsap.matchMedia();



   
    gsap.from(".red", {duration:1,x:"0"})
  tl.from(".blue", {duration:1,x:"350"})
  ;

   
    
   return tl;
}



function quizAnim1(){

    let tl = gsap.timeline({delay:1});
   
gsap.from(".red", {duration:2,y:"0"})
gsap.from(".blue", {duration:2,y:"300"})
;
    
   return tl;
}




mainTl.add(quizAnim())
mainTl.add(quizAnim1())
