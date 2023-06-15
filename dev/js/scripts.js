import { gsap } from "gsap";
//import { MotionPathPlugin } from "gsap/MotionPathPlugin"; 
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools"; 

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, GSDevTools);
let mainTL = gsap.timeline();

function letterO(){
    let tl = gsap.timeline();
    
        tl.from("#o", {duration: 5, scale: 75, x: "+=450%",y: "-=500%"});
    
      return tl;
    }

    function letterI(){
        let tl = gsap.timeline();
        
            tl.from("#i", { duration: 4, ease: "power3.in",scale: 8, x: "+=450%"},"+=0.25");
        
          return tl;
        }

        function letterN(){
            let tl = gsap.timeline();
            
                tl.from("#n", { duration: 2, ease: "power3.in",scale: 3, x: "-=450%"},"+=0.75");
            
              return tl;
            }

            function letterR(){
                let tl = gsap.timeline();
                
                    tl.from("#r", { duration: 2, ease: "power3.in", x: "+=450%", y:"-=400%"},"+=1");
                
                  return tl;
                }

                // function pig(){
                //     let tl = gsap.timeline();
                
                //         tl.from("#Pig", { duration: 5, ease: "power3.in", x: "-=350%"})
                //         .from("#Pig", {duration: 2, drawSVG:"20% 60%", stagger: 0.5})
                        
                //         .to("#Pig", {duration: 1, morphSVG:"Pig2"});
                //       return tl;
                //     }

                function pig() {
                  let tl = gsap.timeline();
                  
                  tl.from("#Pig2", {duration:1, skewY:7 },0)
                    //tl.from("#Pig", { duration: 5, ease: "power3.in", x: "-=350%" })
                    .from("#Pig", { duration: 2, drawSVG: "20% 60%", stagger: 0.5 })
                    .to("#Pig", { duration: 1, morphSVG: "#Pig2" })
                    .set("#Pig2", { visibility: "hidden" }); 
                    
                  return tl;
                }

mainTL.add(letterO())
    .add(letterI(), 0)
    .add(letterN(), 0)
    .add(letterR(), 0)
    .add(pig(),0);

GSDevTools.create();
