import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/*gsap.set("#section-1 img", {y:100});

let studio = document.querySelector("#text");
 let heroImage = gsap.timeline({true});
 
 heroImage.to("#section-1 #img {duration:0.25, scale:1.5}" "theLabel")
 ;


 function heroPic(){
    let tl= gsap.timeline();
    tl.from("#section-1 #img",{duration:1, alpha:0, y:-150})
    .from("#text",{duration:1, alpha:0, y:-150})
    return tl;
 }

 */

/* gsap.from("img", {duration:1.5, scrollTrigger:{
    trigger:"#img",
    toggleActions:"play pause",
    start: "bottom 80%",
    end:"top 20%",
    markers:true
    },
    scale:1.5, 
    rotation:180, 
    x:"-=300%"});
 
*/
function heroAnim(){
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#section-1 img",
                start:"center 20%",
                end:"bottom 30%",
                scrub:true,
                markers:false
            }});
        tl.from("#section-1 img",{duration:0.5, y:-15}, "same")
        tl.from("#text",{duration:0.5, y:-15}, "same")

      
    
        ;
    
        return tl;
    }
    function paintingAnim(){
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#box",
                start:"top 90%",
                end:"bottom 10%",
                scrub:true,
                markers:false
            }});
        tl.from("#section-2",{duration:1, scale:2, alpha:0},"#box")
      
    
        ;
    
        return tl;
    }

    function missionAnim(){
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#section-3 h1",
                start:"top 70%",
                end:"center 80%",
                scrub:true,
                markers:false
            }});
        tl.to("#section-3 h1",{duration:2, rotate:360},"#mission")
      
    
        ;
    
        return tl;
    }

    let mainTl = gsap.timeline();
mainTl.add(paintingAnim())
mainTl.add(heroAnim())
mainTl.add(missionAnim())

   ;
