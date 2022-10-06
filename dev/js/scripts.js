import { gsap } from "gsap";
gsap.set("#rocket-btn i",{transformOrigin:"center bottom"});

gsap.from("#first-line",{duration: 1, alpha:0, y:-100});
gsap.from("#second-line",{duration: 1, alpha:0, y:-70, delay:0.5});
gsap.from("#rocket-btn",{duration: 1, alpha:0, y:50, delay:0.75});
gsap.from("#rocket-btn i",{duration: 1, alpha:0, rotation:180, delay:0.75});

let rocketBtn = document.querySelector("#rocket-btn");

rocketBtn.addEventListener("mouseover",function(){
    gsap.to("#rocket-btn",{duration:1, scale:2});

    gsap.to("#rocket-btn i",{duration: 1, rotateY:180});

    gsap.to("#first-line",{duration: 1, alpha:0, y:50});
    gsap.to("#second-line",{duration: 1, alpha:0, y:20});
})

rocketBtn.addEventListener("mouseout",function(){
    gsap.to("#rocket-btn",{duration:1, scale:1});

    gsap.to("#rocket-btn i",{duration: 1, rotateY:0});

    gsap.to("#first-line",{duration: 1, alpha:1, y:0});
    gsap.to("#second-line",{duration: 1, alpha:1, y:0});
})