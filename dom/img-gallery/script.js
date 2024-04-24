let pilihan = document.querySelector('.container');
let wadah = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

pilihan.addEventListener('click', function(e){
    if(e.target.className == 'thumb'){
        wadah.src = e.target.src;
        wadah.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb){
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});