import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools);

function dotBounce(){
    var tl = gsap.timeline()
    tl.fromTo("#bottom-circle-1, #bottom-circle-2, #bottom-circle-3", {y:0}, {y:-5, duration:0.25, stagger:0.2},"dot1")
    tl.fromTo("#top-circle-1, #top-circle-2, #top-circle-3", {y:0}, {y:-5, duration:0.25, stagger:0.2},"dot1")
    tl.to("#bottom-circle-1, #bottom-circle-2, #bottom-circle-3", {y:5, duration:0.25, stagger:0.2},"dot2")
    tl.to("#top-circle-1, #top-circle-2, #top-circle-3", {y:5, duration:0.25, stagger:0.2},"dot2")
    tl.to("#bottom-circle-1, #bottom-circle-2, #bottom-circle-3", {y:-5, duration:0.25, stagger:0.2},"dot3")
    tl.to("#top-circle-1, #top-circle-2, #top-circle-3", {y:-5, duration:0.25, stagger:0.2},"dot3")
    tl.to("#bottom-circle-1, #bottom-circle-2, #bottom-circle-3", {y:5, duration:0.25, stagger:0.2},"dot4")
    tl.to("#top-circle-1, #top-circle-2, #top-circle-3", {y:5, duration:0.25, stagger:0.2},"dot4")
    tl.fromTo("#top-circle-1, #top-circle-2, #top-circle-3, #bottom-circle-1, #bottom-circle-2, #bottom-circle-3", {alpha:"100%"}, {alpha:"0%", duration:0.5})
    return tl;
}

function chatBubble(){
    var tl = gsap.timeline()
    tl.fromTo("#top-left", {scale:1.2}, {duration:1, scale:1, motionPath:{path:"#left-bubble-path", align:"#left-bubble-path", alignOrigin:[0.5,0.5]}},"chatBubbles")
    tl.fromTo("#top-right", {scale:1.2}, {duration:1, scale:1, motionPath:{path:"#right-bubble-path", align:"#right-bubble-path", alignOrigin:[0.5,0.5]}},"chatBubbles")
    tl.fromTo("#bottom-right, #bottom-left", {alpha:"0%", scale:0}, {duration:1, alpha:"100%", scale:1}, "chatBubbles")
    tl.to("#mark", {x:-150, duration:0.5})
    return tl;
}

function textDraw(){
    var tl = gsap.timeline()
    tl.fromTo("#z-group, #i-group, #d-group, #y-group", {alpha:"0%", scale:0}, {alpha:"100%", scale:1, duration:1, stagger:0.25},"textmove")
    tl.fromTo("#z-mask, #i-mask, #d-mask, #y-mask",{drawSVG:"0% 100%"}, {drawSVG:"100% 100%", duration:0.75, stagger:0.25},"textmove")
    tl.fromTo("#i-dot", {y:60, alpha:0}, {alpha:100, y:-30, duration:0.25})
    tl.to("#i-dot", {y:0, duration:0.25})
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(dotBounce())
mainTL.add(chatBubble())
mainTL.add(textDraw());

GSDevTools.create();
// MotionPathHelper.create();