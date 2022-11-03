import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function simpleMotion(){
    var line = document.querySelector("#line-1");
    line = line.getBBox();

    var topBall = document.querySelector("#black-circle");
    topBall = topBall.getBBox();    

    gsap.set("#black-circle",{y:line.height / 2 + topBall.height / 2, transformOrigin:"center" })
    gsap.set("#white-circle",{y:-line.height/2 - topBall.height / 2, transformOrigin:"center" })

    var tl = gsap.timeline()
    tl.from("#white-circle",{scale:0, duration:0.25, drawSVG: 0}, "circles")
    .from("#black-circle",{scale:0, duration:0.25, drawSVG: 0}, "circles")
    .to("#white-circle",{y:0, duration:0.25},"out")
    .to("#black-circle",{y:0, duration:0.25},"out")
    .fromTo("#line-1",{drawSVG:"50% 50%"},{duration:0.25, drawSVG: "0% 100%"},"out")
    .to("#line-1",{alpha:0, duration:0.5}, "outline")
    .from("#left-half",{drawSVG:0, duration:0.5}, "outline")
    .fromTo("#right-half",{drawSVG:"0% 0%"},{drawSVG:"0% -100%", duration:0.5}, "outline")
    .from("#purple-circle",{scale:0, duration:0.5, transformOrigin:"center"}, "outline")
    return tl;

}

function patternMotion(){
    var tl = gsap.timeline()
    tl.fromTo(".odd",{drawSVG:"100% 100%"}, {duration:0.5, drawSVG:"0% 100%", stagger:0.3, rotate:10, transformOrigin:"center"},"playPattern")
    .fromTo(".even",{drawSVG:"0% 0%"}, {duration:0.5, drawSVG:"0% 100%", stagger:0.3, rotate:-10, transformOrigin:"center"},"playPattern")
    return tl;
}

function UIMotion(){
    var tl = gsap.timeline()
     tl.to("#blue",{x:-105, duration:0.5}, "cycle1")
     .to("#red",{y:103, duration:0.5}, "cycle1")
     .to("#green",{x:105, duration:0.5}, "cycle1")
     .to("#blue",{x:-105, y:-103, duration:0.5}, "cycle2")
     .to("#red",{y:103, x:-105, duration:0.5}, "cycle2")
     .to("#green",{x:105, y:103, duration:0.5}, "cycle2")
     .to("#blue",{y:-103, x:0, duration:0.5}, "cycle3")
     .to("#red",{y:0, x:-105, duration:0.5}, "cycle3")
     .to("#green",{x:0, y:103, duration:0.5}, "cycle3")
     .to("#blue",{y:0, x:0, duration:0.5}, "cycle4")
     .to("#red",{y:0, x:0, duration:0.5}, "cycle4")
     .to("#green",{x:0, y:0, duration:0.5}, "cycle4")
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion())
    .add(UIMotion());

GSDevTools.create();