const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
const profiles = document.querySelectorAll("#anda");
profiles.forEach(profile => {
    profile.addEventListener("click", () => {
        window.open("https://github.com/Ayush5071?tab=repositories", "_blank");
    });
});

var tl = gsap.timeline();
tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to('#page1',{
    y:"10vh",
    duration:1,
    delay:1
})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8
})

const images = document.querySelectorAll("#elems img");
images.forEach(image =>{
    image.addEventListener('click',()=>{
        const link = image.dataset.link;
        if (link) {
            window.open(link, '_blank');
        }
    });
})

