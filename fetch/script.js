const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function (){
    const inputKeyword =  document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=ef29ae02&s=' + inputKeyword.value)
    .then(response => response.json())
    .then(response =>{
        const movies = response.Search;
        let cards = '';
        movies.forEach(m => cards +=showCards(m));
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;
            const detailFilm = document.querySelectorAll('.modal-detail-button');
            detailFilm.forEach(btn => {
                btn.addEventListener('click', function (){
                const imdbid = this.dataset.imdbid;
                fetch('http://www.omdbapi.com/?apikey=ef29ae02&i=' + imdbid)
                .then(response => response.json())
                .then(m => {
                    const movieDetail = showMovieDetail(m);
                    const modal = document.querySelector('.modal-body');
                    modal.innerHTML = movieDetail;
                });
                });
            
            });
    })
})






//function
function showCards(m) {
    return `<div class="col-md-4 my-3">
    <div class="card" style="width: 18rem;">
        <img src=${m.Poster} class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <p class="card-subtitle mb-2 text-body-secondary">${m.Year}</p>
        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid ="${m.imdbID}">Show Details</a>
        </div>
    </div>
</div>`;
}

function showMovieDetail(m){
    return `<div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img src="${m.Poster}" class="img-fluid">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
                <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
            </ul>
        </div>
    </div>
</div>`;
}