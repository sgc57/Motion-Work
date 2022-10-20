import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#first-line",{duration: 1, x: -100, alpha: 0})
    .from("#second-line",{duration: 1, x: -75, alpha:0})
    .from("#rocket-btn",{duration: 1, x: -50, alpha:0})
    .from("#rocket-btn i",{duration: 1, y: 35, alpha:0});
    return tl;
}



var heroSizeNumber = 1;

let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  // desktop setup code here...
  heroSizeNumber = 2;
});

mm.add("(max-width: 767px)", () => {
  // mobile setup code here...
  heroSizeNumber = 1.25;
});


let rocketBtn = document.querySelector("#rocket-btn");

var buttonAnimation = gsap.timeline({paused:true});
buttonAnimation.to("#rocket-btn",{duration:1, scale:heroSizeNumber},"hidden")
.to("#rocket-btn i",{duration: 1, y: -50, alpha: 0})
.to("#first-line",{duration: 1, alpha:0, x:100},"hidden")
.to("#second-line",{duration: 1, alpha:0, x:100},"hidden");


rocketBtn.addEventListener("mouseover",function(){
    buttonAnimation.play();
})

rocketBtn.addEventListener("mouseout",function(){
    buttonAnimation.reverse();
})

function shuttleAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger: "#rocket", scrub: true, start:"top 70%", end:"bottom 10%",markers: true}});
    tl.from("#rocket",{duration:1, x:-1500});
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(heroAnimation())
    .add(shuttleAnimation());