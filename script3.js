gsap.registerPlugin(ScrollTrigger);
function locomotive(){
    const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
function loadingAnimation(){
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
    display:"none",
    duration:0.5,
    delay:1.8,
});
tl.from("#pg1",{
    duration:0.8,
    opacity:0,
    y:1600,
    ease:Power4
});
tl.to("#loader",{
    display:"none",
});
tl.from("#nav",{
    opacity:0,
})
tl.from(".hero h1",{
    opacity:0,
    y:120,
    stagger:0.25,
    duration:0.3,
    delay:-0.5
})
tl.from("#hero1",{
    opacity:0
})
}
function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        y:dets.y,
    })
})
Shery.makeMagnet("#nav h3",{})
var videocontainer=document.querySelector("#video-containor")
var video =document.querySelector("#video-containor video")
var img =document.querySelector("#video-containor img")
videocontainer.addEventListener("mouseenter",function(){
    videocontainer.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            opacity:0,
        });
        gsap.to("#vd-cursor",{
            left:dets.x,
            y:dets.y - 100,
        });
    });
    videocontainer.addEventListener("mouseleave",function(){
        gsap.to("#crsr",{
            opacity:1,
        });
        gsap.to("#vd-cursor",{
            left:"85%",
            y:"5%",
        });
    });
});
var flag=0
    videocontainer.addEventListener("click",function(){
        if(flag==0){
        video.play()
        video.style.opacity=1
        img.style.opacity=0
        document.querySelector("#vd-cursor").innerHTML=`<i class="ri-pause-mini-line"></i>`
        gsap.to("#vd-cursor",{
            scale:0.5
        })
        flag=1
    }else{
        video.pause()
        video.style.opacity=0
        img.style.opacity=1
        document.querySelector("#vd-cursor").innerHTML=`<i class="ri-play-mini-line"></i>`
        gsap.to("#vd-cursor",{
            scale:1
        })
        flag=0
    }
    })       
}
function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":1.6,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8620806763023574},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.43,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true,
    })
}
function flagmove(){
    // var flag=document.querySelector("#flag")
    var hero1=document.querySelector("#hero1")
    var hero2=document.querySelector("#hero2")
    var hero3=document.querySelector("#hero3")
    var hero4=document.querySelector("#hero4")
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x - 150,
            y:dets.y
        })
        
    })
    hero1.addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            display:"initial"
        })
        gsap.to("#crsr",{
            opacity:0
        })
        
    })
    hero1.addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            display:"none"
        })
        gsap.to("#crsr",{
            opacity:1
        })
    })
    hero2.addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            display:"initial"
        })
        gsap.to("#crsr",{
            opacity:0
        })
    })
    hero2.addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            display:"none"
        })
         gsap.to("#crsr",{
            opacity:1
        })
    })
    hero3.addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            display:"initial"
        })
        gsap.to("#crsr",{
            opacity:0
        })
    })
    hero3.addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            display:"none"
        })
         gsap.to("#crsr",{
            opacity:1
        })
    })
    hero4.addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            display:"initial"
        })
        gsap.to("#crsr",{
            opacity:0
        })
    })
    hero4.addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            display:"none"
        })
         gsap.to("#crsr",{
            opacity:1
        })
    })
}
function fontanime(){
    var h1=document.querySelector("#pg6-cont h1")
    h1.addEventListener("mouseenter",function(){
        gsap.from("#pg6-cont h1",{
            duration:2,
            delay:0.3,
            onStart:function(){
                $('#pg6-cont h1').textillate({ in: { effect: 'fadeIn' } });
            },
        })
        
    })

}
locomotive()
loadingAnimation()
cursorAnimation()
sheryAnimation()
flagmove()
fontanime()






