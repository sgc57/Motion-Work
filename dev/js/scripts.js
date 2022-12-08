import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/CustomBounce";

gsap.registerPlugin(CustomEase, CustomBounce, DrawSVGPlugin, GSDevTools);

CustomBounce.create("morrisBounce",{strength:0.2, squash:1});

function logoDraw(){
    var tl = gsap.timeline()
    tl.from("#morris",{x:2000, duration:1.5, ease:"none"})
    tl.fromTo("#morris", {scaleX:1, scaleY:1}, {scaleX:0.7, scaleY:1.2, duration:0.25, transformOrigin:"left center"})
    tl.to("#morris", {scaleX:1, scaleY:1, duration:0.25})
    tl.from("#subhead",{y:1000, duration:1.5, delay:-1, ease:"none"})
    tl.fromTo("#subhead", {scaleX:1, scaleY:1}, {scaleX:1.1, scaleY:0.7, duration:0.25, transformOrigin:"center top"})
    tl.to("#subhead", {scaleX:1, scaleY:1, duration:0.25})
    tl.from("#heart-line",{drawSVG:0, duration:0.75})
    tl.fromTo("#heart",{scale:0, x:25, y:21},{scale:1.2, duration:0.5, transformOrigin:"50% center", x:25, y:21})
    tl.to("#heart",{scale:1, duration:0.25})
    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(logoDraw());

GSDevTools.create();