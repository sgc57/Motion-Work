import { gsap } from "gsap";

function heroAnimation(){
    var tl = gsap.timeline();
    tl.from("#first-line",{duration: 1, x: -100, alpha: 0})
    .from("#second-line",{duration: 1, x: -75, alpha:0})
    .from("#rocket-btn",{duration: 1, x: -50, alpha:0})
    .from("#rocket-btn i",{duration: 1, y: 35, alpha:0});
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(heroAnimation());



let rocketBtn = document.querySelector("#rocket-btn");

rocketBtn.addEventListener("mouseover",function(){
    gsap.to("#rocket-btn",{duration:1, scale:2});

    gsap.to("#rocket-btn i",{duration: 1, y: -50, alpha: 0});

    gsap.to("#first-line",{duration: 1, alpha:0, x:100});
    gsap.to("#second-line",{duration: 1, alpha:0, x:100});
})

rocketBtn.addEventListener("mouseout",function(){
    gsap.to("#rocket-btn",{duration:1, scale:1});

    gsap.to("#rocket-btn i",{duration: 1, y: 0, alpha: 1});

    gsap.to("#first-line",{duration: 1, alpha:1, x:0});
    gsap.to("#second-line",{duration: 1, alpha:1, x:0});
})