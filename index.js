window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = ['#60d394', '#eb733c', '#c060d3', '#d3d160', '#f05c5c', '#29d0ee']

    // Sound on!
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function (){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        })
    })

    // Now some visuals!
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1.7s ease'
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
})

