

let tl = gsap.timeline({defaults: { Easings: Expo.EaseOut}});
// Shapes & Text Transition 
tl.from('svg', {scale: 0.5, duration: 1, opacity: 0})
 .to('.reveal', {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, stagger: .3}, "-=2.9")


// Display and Hide the modal
const modal = (event) =>{

    let tl1 = gsap.timeline()
    

    const modalContainer = document.getElementById('modal');
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'darken')
    newDiv.setAttribute('onclick', 'modal(event.target)')
    const getNewDiv = document.getElementById('darken')
    
    if('none' == modalContainer.style.display){
        tl1.from('#modal', {duration: 1, x: '100%'})
         .from('.initial-navaigation', {duration: 0.8, opacity: 0})
         .from('.secondary-nav', {duration: 0.8, opacity: 0})
         .from('.collection', {duration: 0.8, opacity: 0})
      
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


    






