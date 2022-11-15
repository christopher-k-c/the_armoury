

let tl = gsap.timeline({defaults: { Easings: Expo.EaseOut}});
// Shapes & Text Transition 
tl.from('svg', {scale: 0.5, duration: 1, opacity: 0})
 .to('.reveal', {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, stagger: .3}, "-=2.9")


