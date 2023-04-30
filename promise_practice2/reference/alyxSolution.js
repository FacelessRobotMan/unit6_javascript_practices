
fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
        .then((rawData) => {
            window.addEventListener('click', function() {
                let randomNum = Math.floor(Math.random() * 20)

                if (rick.status === 'Dead') {
                    document.body.style.backgroundColor = 'red'
                } else if (rick.status === 'Alive') {
                    document.body.style.backgroundColor = 'green'
                } else {
                    document.body.style.backgroundColor = 'white'
                }

                document.querySelector('#content').innerHTML = `
                <h1>${rick.status.toUpperCase()}</h1>
                <h2>${rick.name}</h2>
                <img src="${rick.image}" height=300>
                <h3>Species: ${rick.species}</h3>`
                
            })
        })