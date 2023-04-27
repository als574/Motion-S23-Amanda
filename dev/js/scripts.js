import { gsap } from "gsap";

//gsap.from("#logo", {duration:1.5, alpha:0, delay:1});
//gsap.from("nav", {duration:1, y: "-=25"});

//gsap.from("#hero-content", {duration: 2.5, ease: "power2.out", y: "-=30",stagger:1});

//gsap.from("#content", {duration:1, alpha:0, x:"-=60", stagger:1.5});

 



let mainTl = gsap.timeline({delay:1});


function heroAnim(){

    let tl = gsap.timeline({delay:1.5});
    let mm = gsap.matchMedia();

    mm.add("(max-width:767px)", () =>{
    
    tl.from("#logo", {duration:0.5, scale:1.5, ease:"power2.out"})
    //.to("#logo", {duration:1.5, rotation:180})
    ;
    });

    mm.add("(min-width:768px)", () =>{

    tl.from("#logo", {duration:1.5, alpha:0, ease:"power2.out"})
       // .from("#logo", {duration:0.5, x:"-=20"})
        ;
        });

    return tl;
}

function navMove(){

    let tl = gsap.timeline({});
    tl.from("nav", {duration:1, y: "-=60"})
    ;

    return tl;
}


function contentMove(){

    let tl = gsap.timeline({delay:1});

    tl.from("#content", {duration:1, alpha:0})
    .from("#cotent", {duration:1, x:"-=60"})
    ;

    return tl;
}


function heroContent(){

    let tl = gsap.timeline({delay:0});
    tl.from("#hero-content", {duration: 2.5, ease: "power2.out", y: "-=30"})
    ;

    return tl;
}

mainTl.add(heroAnim())
.add(navMove())
.add(contentMove(), 0)
.add(heroContent())

;


    

