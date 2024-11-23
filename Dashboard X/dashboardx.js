window.onload = function() {
    hideSidebar()
}


function hideSidebar(){
    const nav = document.querySelector('.nav')
    nav.style.display = 'none'

}

function showSidebar(){
    const nav = document.querySelector('.nav')
    nav.style.display = 'flex'

}


function getSelected () {
    document.querySelector('ul li').classList.add('.selected')
}




document.querySelector('.close-x').addEventListener('click', ()=>{
    hideSidebar()
});


document.querySelector('.menu').addEventListener('click', ()=> {
    showSidebar()
    console.log('gay')

});






document.querySelectorAll('.to-be-selected').forEach(element => {
    element.addEventListener('click', () => {
        // Remove 'selected' class from all elements
        document.querySelectorAll('.to-be-selected').forEach(element => element.classList.remove('selected'));
        
        // Add 'selected' class to the clicked element
        element.classList.add('selected');
    });
});






const container = document.querySelector('.earnings-slider');
let startX;

container.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

container.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const diffX = startX - endX;

  if (Math.abs(diffX) > 50) {
    // Swipe left
    if (diffX > 0) {
      container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }
    // Swipe right
    else {
      container.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    }
  }
});

