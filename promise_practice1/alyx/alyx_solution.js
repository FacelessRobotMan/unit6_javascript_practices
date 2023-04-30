// https://fakestoreapi.com/products
'use strict';

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
        .then((rawInfo) => {
            rawInfo.forEach(product => {
                let htmlValue = `
                <div class="product">
                <h2>${product.title}</h2>
                <img src="${product.image}" height=100>
                <h3>Price: $${product.price}</h3>
                <p>${product.description}</p>
                </div>`
                document.querySelector('#content').insertAdjacentHTML('beforeEnd', htmlValue)
            })
        })