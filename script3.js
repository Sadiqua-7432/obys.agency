
var tl=gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.8,
    delay:0.2,
})
tl.from("#timer ,.line h2",{
    opacity:0,
    onStart:function(){
    var h5=document.querySelector("#timer h5");
    count=1;
    var int=setInterval(function(){
        if(count<=100){
        h5.textContent=count;
        count++;
        }
        else{
            clearInterval(int);
        }
    },20);
        },
});

tl.to("#loader",{
    opacity:0,
    duration:0.5,
    delay:2,
})
tl.from("#pg1",{
    duration:0.5,
    opacity:0,
    y:1600,
    ease:Power4
})
tl.to("#loader",{
    display:"none",
})
