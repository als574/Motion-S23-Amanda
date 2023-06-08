import { gsap } from "gsap";
//import { MotionPathPlugin } from "gsap/MotionPathPlugin"; 
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; 
import { GSDevTools } from "gsap/GSDevTools"; 

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);
let mainTL = gsap.timeline();

function letterO(){
    let tl = gsap.timeline();
    
        tl.from("#o", {duration: 2, scale: 75, x: "+=450%",y: "-=500%"});
    
      return tl;
    }

    function letterI(){
        let tl = gsap.timeline();
        
            tl.from("#i", {duration: 2, scale: 3, x: "+=450%"},"+=0.25");
        
          return tl;
        }

        function letterN(){
            let tl = gsap.timeline();
            
                tl.from("#n", {duration: 1, scale: 3, x: "-=450%"},"+=0.75");
            
              return tl;
            }

            function letterR(){
                let tl = gsap.timeline();
                
                    tl.from("#r", {duration: 1, scale: 3, x: "+=450%", y:"-=400%"},"+=1");
                
                  return tl;
                }

                function pig(){
                    let tl = gsap.timeline();
                    
                        tl.from("#Pig", {duration: 1, x: "-=350%"},"+=1");
                    
                      return tl;
                    }

mainTL.add(letterO())
    .add(letterI(), 0)
    .add(letterN(), 0)
    .add(letterR(), 0)
    .add(pig());

GSDevTools.create();
