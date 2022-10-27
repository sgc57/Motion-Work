import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);



function simpleMotion(){
    var tl = gsap.timeline()

    return tl;
}

function patternMotion(){
    var tl = gsap.timeline()
    tl.from(".odd",{duration:0.5, rotate:180, drawSVG:0, stagger:0.25, transformOrigin:"center"})
    return tl;
}

function UIMotion(){
    var tl = gsap.timeline()
    tl.to("#pencil",{duration:0.5,x:400})
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(simpleMotion())
    .add(patternMotion())
    .add(UIMotion());



GSDevTools.create();