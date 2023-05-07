// solve 1

// ------------------------------------------------------

// document.querySelector('body').style.fontFamily = 'Ariel, Sans-serif'

// const contentDiv = document.getElementById('content')

// function listProducts(data) {
//     const productDiv = document.createElement('div')

//     const titleDiv = document.createElement('div')
//     titleDiv.innerText = data.title
//     titleDiv.style.fontWeight = 'bold'
//     productDiv.appendChild(titleDiv)

//     const imageEl = document.createElement('img')
//     imageEl.src = data.image
//     imageEl.style.height = '5em'
//     productDiv.appendChild(imageEl)

//     const descDiv = document.createElement('div')
//     descDiv.innerText = data.description
//     productDiv.appendChild(descDiv)

//     const priceDiv = document.createElement('div')
//     priceDiv.innerText = `Price: $${data.price}`
//     productDiv.appendChild(priceDiv)

//     return productDiv
// }

// fetch('https://fakestoreapi.com/products')
// .then(response => response.json())
// .then(data => data.forEach(product => {
//    const productObject = listProducts(product)
//    contentDiv.appendChild(productObject)
// }))
// .catch(error => {throw(new error)})

// ----------------------------------------------------

// solve 2 

// ----------------------------------------------------

document.querySelector('body').style.fontFamily = 'Ariel, Sans-serif'

function listProducts(product) {
    const productDiv = document.createElement('p')

    productDiv.insertAdjacentHTML('beforeEnd', `<h3 class = 'title'>${product.title}</h3>`)
    productDiv.getElementsByClassName('title')[0].style.fontWeight = 'bold'
    productDiv.insertAdjacentHTML('beforeEnd', `<img src = ${product.image} ></img>`)
    productDiv.querySelector('img').style.height = '5em'
    productDiv.insertAdjacentHTML('beforeend', `<p class = 'price'>Price: $${product.price}</p>`)
    productDiv.getElementsByClassName('price')[0].style.fontWeight = 'bold'
    productDiv.insertAdjacentHTML('beforeEnd', `<p class = 'desc'>${product.description}</p>`)

    return productDiv
}

fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => data.forEach(product => {
    const productObject = listProducts(product)
    document.getElementById('content').appendChild(productObject)
}))
.catch(error => {throw(new error)})

// ---------------------------------------------------

