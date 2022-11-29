import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

function textDraw(){
    var tl = gsap.timeline()
    tl.fromTo("z-group, #i-group, #d-group, #y-group", {alpha:"0%", scale:"0%"}, {alpha:"100%", scale:"100%", duration:1, stagger:0.25},"textmove")
    tl.fromTo("#z-mask, #i-mask, #d-mask, #y-mask",{drawSVG:"0% 100%"}, {drawSVG:"100% 100%", duration:0.75, stagger:0.25},"textmove")
    tl.fromTo("#i-dot", {y:60, alpha:0}, {alpha:100, y:-30, duration:0.25})
    tl.to("#i-dot", {y:0, duration:0.25})
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(textDraw());

GSDevTools.create();