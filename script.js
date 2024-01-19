gsap.to("#nav",{
    backgroundColor : "#0F0F0F",
    height : "80px",
    // duration : 1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end: "top -30%",
        scrub: 2.5
    }
})

gsap.to("#main",{
    backgroundColor : "#0F0F0F",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -10%",
        end:"top -90%",
        scrub: 1.5
    }
})


var cursor = document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x - 20+"px"
    cursor.style.top = dets.y - 20+"px"
})