import { gsap } from "gsap";

//QUIZ


let mainTl = gsap.timeline({});

function quizAnim(){

    let tl = gsap.timeline({});
    let mm = gsap.matchMedia();


    tl.from(".box red", {duration:1,y:"+=7"})
    //.to("#logo", {duration:1.5, rotation:180})
    ;
    

    return tl;
}

mainTl.add(quizAnim())