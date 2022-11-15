import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function textDraw(){
    var tl = gsap.timeline()
    tl.to(".text",{duration:0.5, alpha:10})

    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(textDraw());

GSDevTools.create();