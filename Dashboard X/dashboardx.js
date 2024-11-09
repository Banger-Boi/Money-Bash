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