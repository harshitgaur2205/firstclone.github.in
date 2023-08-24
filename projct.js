const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// function mousefollower(){
//     window.addEventListener("mouseover",function(details){
//         document.querySelector("#minicircle").style.transform=`translate(${details.clientX}px,${details.clientY}px)`
//     })
// }
// mousefollower();

var tl =gsap.timeline();
tl.from("#nav",{
    y:"-10",
    ease:Expo.easeInOut,
    opacity:0,
    duration:1.5
})
tl.to(".boundelem",{
    x: 0 ,
    duration: 2,
    delay:-1,
    ease:Expo.easeInOut
})
tl.from("#landingpage_footer",{
    y:"10",
    opacity:0,
    ease:Expo.easeIn,
    duration:1,
    delay: -0.8
})
tl.from("#content",{
    y:-10,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:"#content",
        scroller:"body",
    }
})

document.querySelectorAll(".element").forEach(function(elem) {
    var rotate = 0;
    var diffrot = 0 ;
    elem.addEventListener("mouseleave", function(details) {
        gsap.to(elem.querySelector("img"), {
            ease: Power1, 
            opacity: 0
        });
    });
    elem.addEventListener("mousemove", function(details) {
        var diff = details.clientY - elem.getBoundingClientRect().top;
        diffrot =  details.clientX - rotate;
        rotate = details.clientX;
        
        gsap.to(elem.querySelector("img"), {
            ease: Power1, 
            opacity: 1,
            top: diff,
            left: details.clientX,
            rotate : gsap.utils.clamp(-20,20,diffrot)
        });
    });
});

