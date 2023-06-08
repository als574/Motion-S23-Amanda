import { gsap } from "gsap";
//import { MotionPathPlugin } from "gsapMotionPathPlugin"; // Update the file path
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"; // Update the file path
//mport { GSDevTools } from "gsapGSDevTools"; // Update the file path

gsap.registerPlugin(DrawSVGPlugin, GSDevTools); //MotionPathPlugin
let mainTL = gsap.timeline();

function letterO(){
    let tl = gsap.timeline();
    
        tl.from("#o", {duration: 1, scale: 3, x: "-=450%"});
    
      return tl;
    }

    function letterI(){
        let tl = gsap.timeline();
        
            tl.from("#i", {duration: 1, scale: 3, x: "+=450%"});
        
          return tl;
        }

        function letterN(){
            let tl = gsap.timeline();
            
                tl.from("#n", {duration: 1, scale: 3, x: "-=450%"});
            
              return tl;
            }

            function letterR(){
                let tl = gsap.timeline();
                
                    tl.from("#r", {duration: 1, scale: 3, x: "-=450%", y:"-=100%"});
                
                  return tl;
                }

mainTL.add(letterO())
    .add(letterI(), 0)
    .add(letterN(), 0)
    .add(letterR(), 0);

GSDevTools.create();
