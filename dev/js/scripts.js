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
let imagesBtn = document.querySelector("#images");
let astronomersBtn = document.querySelector("#astronomers");
let contactBtn = document.querySelector("#contact");

var buttonAnimation = gsap.timeline({paused:true});
buttonAnimation.to("#rocket-btn",{duration:1, scale:heroSizeNumber},"hidden")
.to("#rocket-btn i",{duration: 1, y: -50, alpha: 0})
.to("#first-line",{duration: 1, alpha:0, x:100},"hidden")
.to("#second-line",{duration: 1, alpha:0, x:100},"hidden");

var imagesAnimation = gsap.timeline({paused:true});
imagesAnimation.to("#images",{duration:.5, scale:heroSizeNumber});

var astronomersAnimation = gsap.timeline({paused:true});
astronomersAnimation.to("#astronomers",{duration:.5, scale:heroSizeNumber});

var contactAnimation = gsap.timeline({paused:true});
contactAnimation.to("#contact",{duration:.5, scale:heroSizeNumber});


rocketBtn.addEventListener("mouseover",function(){
    buttonAnimation.play();
})

rocketBtn.addEventListener("mouseout",function(){
    buttonAnimation.reverse();
})

imagesBtn.addEventListener("mouseover",function(){
    imagesAnimation.play();
})

imagesBtn.addEventListener("mouseout",function(){
    imagesAnimation.reverse();
})

astronomersBtn.addEventListener("mouseover",function(){
    astronomersAnimation.play();
})

astronomersBtn.addEventListener("mouseout",function(){
    astronomersAnimation.reverse();
})

contactBtn.addEventListener("mouseover",function(){
    contactAnimation.play();
})

contactBtn.addEventListener("mouseout",function(){
    contactAnimation.reverse();
})

function shuttleAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger: "#rocket", scrub: true, start:"top 70%", end:"bottom 10%",markers: false}});
    tl.from("#rocket",{duration:1, x:-1500});
    return tl;
}

function paragraphAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#content1",scrub:true, markers: false, end:"top 20%", start:"top 70%"}});
    tl.from("#paragraph",{alpha:0, x:300,duration:1},"textAni")
    .from("#img",{alpha:0, y:300,duration:1},"textAni");
    return tl;
}

function paragraphAnimation2(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#content2",scrub:true, markers: false, end:"top 20%", start:"top 80%"}});
    tl.from("#paragraph2",{alpha:0, x:-300,duration:1},"textAni2")
    .from("#img2",{alpha:0, y:300,duration:1},"textAni2");
    return tl;
}

function hero2Animation(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#text-break",scrub:true, markers: false, end:"top 20%", start:"top 90%"}});
    tl.from("#line1",{alpha:0, x:-300,duration:1})
    .from("#line2",{alpha:0, x:300,duration:1})
    .from("#line3",{alpha:0, duration:1})
    .from("#line4",{alpha:0, x:-300,duration:1})
    .from("#line5",{alpha:0, x:300,duration:1});
    return tl;
}

function footerAnimation(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#footer",scrub:true, markers: true, end:"top 80%", start:"top 98%"}});
    tl.from("#footer",{alpha:0,duration:1})
    .from("#images",{alpha:0, y:-100,duration:1})
    .from("#astronomers",{alpha:0, y:-100,duration:1})
    .from("#contact",{alpha:0, y:-100,duration:1});
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(heroAnimation())
    .add(shuttleAnimation())
    .add(paragraphAnimation())
    .add(paragraphAnimation2())
    .add(hero2Animation())
    .add(footerAnimation());