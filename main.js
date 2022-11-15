

let tl = gsap.timeline({defaults: { Easings: Expo.EaseOut}});
// Shapes & Text Transition 
tl.from('svg', {scale: 0.5, duration: 1, opacity: 0})
 .to('.reveal', {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, stagger: .3}, "-=2.9")


// Display and Hide the modal
const modal = (event) =>{

    const modalContainer = document.getElementById('modal');
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'darken')
    newDiv.setAttribute('onclick', 'modal(event.target)')
    const getNewDiv = document.getElementById('darken')
    

    if('none' == modalContainer.style.display){
        modalContainer.style.display = 'block';
        document.body.appendChild(newDiv)
    } else if(event == getNewDiv){
        getNewDiv.remove();
        modalContainer.style.display = 'none'
    } else {
        getNewDiv.remove();
        modalContainer.style.display = 'none'
    }

}
