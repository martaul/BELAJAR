// const close = document.querySelectorAll( '.close');
const container = document.querySelector('.container');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         e.target.parentElement.remove();
//     });
    
// }

// close.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.parentElement.remove();
//         //e.preventDefault();
//     })
// })
// })

container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.remove();
        e.preventDefault();
    }
});
