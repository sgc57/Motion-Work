import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { CustomEase } from "gsap/CustomEase";
import { CustomBounce } from "gsap/CustomBounce";

gsap.registerPlugin(CustomEase, CustomBounce, DrawSVGPlugin, GSDevTools);

CustomEase.create("morrisEase", "M0,0 C0,0 0.22429,0.11634 0.34837,0.20311 0.44117,0.268 0.49134,0.32098 0.57501,0.4021 0.64694,0.47184 0.68404,0.51644 0.7505,0.59298 0.79472,0.6439 0.81977,0.67407 0.85795,0.72795 0.88487,0.76596 0.89833,0.79063 0.9202,0.83251 0.95354,0.89636 1,1 1,1 ")

function logoDraw(){
    var tl = gsap.timeline()
    tl.from("#morris",{x:1000, duration:1.5, ease:"morrisEase"})
    tl.fromTo("#morris", {scaleX:1, scaleY:1}, {scaleX:0.7, scaleY:1.2, duration:0.25, transformOrigin:"left center"})
    tl.to("#morris", {scaleX:1, scaleY:1, duration:0.25})
    tl.from("#subhead",{y:1000, duration:1.5, delay:-1, ease:"morrisEase"})
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