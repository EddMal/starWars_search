

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
    e.preventDefault();
    app.userInput = e.target.value;
    console.log(e.target.value);
 
    app.inputValidated = true;
});

inputForm['userInput'].addEventListener('keypress', function (e) {
    //e.preventDefault();
    
    if (e.key === "Enter") {
        // Cancel the default action, if needed
        e.preventDefault();
        // Trigger the button element with a click
        app.userInput = e.target.value;
        console.log(e.target.value);
        document.getElementById("btn0").click();
      }
    //insert validation of text and polish of input, with some modifications (add check for string and empty...)
    // this can be reUsed from Jonathan:
/*     const fixName = (name) => {
        return name.trim()
        .charAt(0)
        .toUpperCase() + name.slice(1)
        .toLowerCase();
    } */
    
    app.inputValidated = true;
});

//Add respons when no character is found.
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
        console.log(data.result);
        console.log(data.result.properties);
        textDiv.innerHTML = '';
        //change from forEach to something more suitable for the Object result..
        data.result.forEach(element => {
            
            textDiv.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title"> ${element.properties.name}</h3>
                    <p class="card-text"> Personal info: ${element.description} </p>
                    <p class="card-text"> Height:${element.properties.height}</p>
                    <p class="card-text"> Hair Color: ${element.properties.hair_color}</p>
                    <p class="card-text"> Date of birth: ${element.properties.birth_year}</p>
                    <br>
                </div>
            </div>
            `
        })
    })
    .catch(err => console.log('Error: ' + err));
}


btn0.addEventListener('click', getStarwarsCharacter);

