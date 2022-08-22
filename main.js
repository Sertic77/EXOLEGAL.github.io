gsap.registerPlugin(ScrollTrigger);


let linea = gsap.from('.img_4',{
    duration: 2,
    x: -1000,
})
let titulo = gsap.from('.titulo',{
    delay:1,
    duration: 5,
    opacity:0
});
let barra = gsap.from('.barra',{
    duration: 3,
    opacity:0,
});

gsap.to('.img_1',{
    scrollTrigger: { scrub:1}, 
    y:-1000
})

