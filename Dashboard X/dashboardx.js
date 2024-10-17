document.querySelector('.menu').addEventListener('click', ()=> {
    showSidebar()
    backgroundBlur()
});

document.querySelector('.close').addEventListener('click', ()=>{
    hideSidebar()
});


function showSidebar(){
    const nav = document.querySelector('.nav')
    nav.style.display = 'flex'

}

function hideSidebar(){
    const nav = document.querySelector('.nav')
    nav.style.display = 'none'

}

function backgroundBlur(){
    const gridcontainer = document.querySelector('.gridcontainer')
    gridcontainer.style.filter ='blur(8px)'
   
}
