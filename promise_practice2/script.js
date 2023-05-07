const contentDiv = document.getElementById('content')
document.body.style.fontFamily = 'ariel, sans-serif'


fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => data.results)
.then(characters => window.addEventListener('click', () => getRandomCharacterByID(characters)))

function getRandomCharacterByID(characters) {
    var randInt = Math.floor(Math.random() * 20) + 1
    var randChar = characters.find(character => character.id === randInt)
    console.log(randChar);
    changeRandomCharacter(randChar)
}

function changeRandomCharacter(randChar) {
    contentDiv.innerHTML = ''
    const statusDiv = document.createElement('h1')
    statusDiv.dataset.text = `STATUS: ${randChar.status.toUpperCase()}`
    statusDiv.style.height = '1em'
    statusDiv.style.fontFamily = 'Times New Roman, serif'
    contentDiv.appendChild(statusDiv)
    const nameDiv = document.createElement('h2')
    nameDiv.dataset.text = randChar.name
    nameDiv.style.height = '1em'
    contentDiv.appendChild(nameDiv)
    const imageDiv = document.createElement('img')
    imageDiv.src = randChar.image
    imageDiv.style.height = '10em'
    contentDiv.appendChild(imageDiv)
    const speciesDiv = document.createElement('h3')
    speciesDiv.dataset.text = randChar.species
    speciesDiv.style.height = '1em'
    contentDiv.appendChild(speciesDiv)

    if (randChar.status === 'Alive') {
        document.body.style.backgroundColor = 'green';
    } else if (randChar.status === 'Dead') {
        document.body.style.backgroundColor = 'red';
    } else {
        document.body.style.backgroundColor = 'white';
    }

    const divArray = [nameDiv, speciesDiv, statusDiv]

    changeInfo(divArray, randChar)

}
//----------------typing effect--------------------------------------

let clearTask = null;




async function changeInfo(array, randChar) {
    
    

    for (const div of array) {
        div.textContent = '';
        const text = div.dataset.text;
        for (let i = 0; i < text.length; i++) {
            await new Promise(resolve => {
            var timeout    
            timeout = setTimeout(() => {
                div.textContent += text[i];
                resolve();
            }, 120);
            });
        }
        }
    }
//------------------------------------------------------------------------





