const img = document.querySelectorAll('img');
window.addEventListener('scroll', function () {
    // let derniere_position_de_scroll_connue = window.scrollY;
    for (let index = 0; index < img.length; index++) {
       img[index].style.left = (Math.floor(derniere_position_de_scroll_connue /10)) + '%';
        
    }
    // img.forEach(element => {
    //     element.style.left = (Math.floor(window.scrollY / 10)) + '%';