const init = () => {
// EVERYTHING NEEDS TO GO IN HERE, BECAUSE WE NEED TO WAIT FOR LAST EVENT LISTENER, DOM CONTENT FULLY LOADED

const inputForm = document.querySelector('form');

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('#searchByID');

fetch(`http://localhost:3000/movies/${input.value}`)
.then(res => res.json())
.then(data => {
    console.log(data)

    const title = document.querySelector('section#movieDetails h4');
    const summary =document.querySelector('section#movieDetails p');

    title.innerText = data.title;
    summary.innerText = data.summary;
});
});
}

document.addEventListener('DOMContentLoaded', init);