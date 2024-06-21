/*
gsap.to("h1",{
    x:300,
    y:500,
    duration:2,
    delay:1,
    Color: "green",
    repeat: 1,
    yoyo: "true"
    
    

})

gsap.to("h2",{
    x:300,
    y:100,
    
    duration:2,
    delay:2,
    Color: "red",
    repeat: 1,
    yoyo: "true"
    

    
    

})

gsap.to("h3",{
    x:300,
    y:-200,
    duration:2,
    delay:3,
    Color: "blue",
    repeat: 1,
    yoyo: "true"
    
    
})
gsap.to("#alisss",{
    x:900,
    y:-300,
    duration:1,
    delay:4,
    visibility: "visible",
    repeat: 1,
    yoyo: "true"
    
    

})

*/
/*
gsap.from("#nav img, h2,h3,button",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.2  sttager se 0.2 sec ke interval me ek ek akrke animate honge 
})
gsap.from("#left,#left2,#right,#right2",{
    scale:1.3,
    duration:1,
    delay:2,
    opacity:0,
    stagger:0.3,
    filter:"blur"
})
gsap.from("body h1",{
    x:1000,
    duration:1.2,
    delay:2.5,
    opacity:0,
    stagger:0.3
})
gsap.from("body h1 span",{
    y:900,
    duration:1,
    delay:2.8,
    opacity:0,
    
})
*/


/* locolotive js code*/
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



/*function mousekocirclefollowkr(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#cursor").style.transform =`translate(${dets.clientX}px,${dets.clientY}px)`
    
    })
}
*/

function handleMouseMove(event) {
    document.querySelector("#cursor").style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}

// Assuming you're adding the event listener somewhere in your code
document.addEventListener("mousemove", handleMouseMove);

gsap.from("#bounding h1",{
    y: 300,
    duration: 0.5,
    delay: 0.5,
})
gsap.from("#block-text bounding h1, #bounding h2",{
    y: 500,
    duration: 0.5,
    delay: 1,
    stagger: 0.3
})
gsap.from("#nav",{
    y:-200,
    duration: 0.5,
    delay:0.1,
    stagger:0.2
})

document.querySelectorAll(".block")
.forEach(function(block){

    var rotate=0
    var diffrot= 0;

    block.addEventListener("mousemove",function(dets){
        
        var diff= dets.clientY - block.getBoundingClientRect().top;
        
        var diffrot= dets.clientX-rotate;
        rotate=dets.clientX


        gsap.to(block.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            scale: 1.8,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot)
           


        })
        
    })

    
    block.addEventListener("mouseleave",function(dets){
        
        var diff= dets.clientY - block.getBoundingClientRect().top;
        
        var diffrot= dets.clientX-rotate;
        rotate=dets.clientX


        gsap.to(block.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            duration: 0.5


        })
        
    })

})

