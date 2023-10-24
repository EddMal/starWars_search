

// Create reference to button from index.html
const btn0 = document.querySelector('#btn0');
const textDiv = document.querySelector('#text');
const inputForm = document.querySelector('#search-Form');


// Best practise declare a const object for global variables to reduce clutter.
const app = {
    userInput: null,
    inputValidated: null,
    x3: null,
    x4: false
};

console.log('Start');



/* const getStarwarsCharacter = () =>{
    fetch('https://api.github.com/users/Lexicon-NET-2023/repos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res =>{
        if(res.ok)
         return res.json();
        throw new Error('Failed to get repos');
    })
    .then(data => {
        console.log(data);

        gitOutput.innerHTML = '';

        data.forEach(repo => {
            gitOutput.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${repo.name}</h3>
                    <p class="card-text">This repository have been forked ${repo.forks_count} times</p>
                    <p class="card-text">This repo is mainly written in ${repo.language}</p>
                    <a href="${repo.html_url}" class="card-link">${repo.name}</a>
                    <a href="${repo.owner.html_url}" class="card-link">Organisation</a>
                </div>
            </div>
            `
        })
    })
    .catch(err => console.log('Error: ' + err));
}


btn0.addEventListener('click', getStarwarsCharacter); */

inputForm['userInput'].addEventListener('change', function (e) {
    app.userInput = e.target.value;
    console.log(e.target.value);
    //insert validation of text.
    app.inputValidated = true;
});


const getStarwarsCharacter = () =>{

    fetch('https://www.swapi.tech/api/people/?name=' + `${app.userInput}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(res =>{
        if(res.ok)
         return res.json();
        throw new Error('Failed to get people');
    })
    .then(data => {
        console.log(data);

        textDiv.innerHTML = '';

        data.result.forEach(element => {
            textDiv.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"> ${element.properties.name}</h3>
                    <p class="card-text">  ${element.uid} </p>
                    <p class="card-text"> ${element.url}</p>
                    <br>
                </div>
            </div>
            `
        })
    })
    .catch(err => console.log('Error: ' + err));
}


btn0.addEventListener('click', getStarwarsCharacter);

