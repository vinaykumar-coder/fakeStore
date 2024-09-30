const apiUrl = 'https://fakestoreapi.com/products';

// f/n to fetch data from the api and display the data.

function fetchProducts(){
    fetch(apiUrl).then(response => response.json())
    .then(products => {
        const productList = document.getElementById('product-list')
        productList.innerHTML = '';

        products.forEach(product =>{
            const productDiv = document.createElement('div')
            productDiv.classList.add('product');

            const cartButton = document.createElement('button')
            cartButton.classList.add('cartBtn');
            cartButton.textContent = 'Add to cart'

            productDiv.innerHTML = `<img src="${product.image}" alt="${product.title}">
                        <h2 class="product-title">${product.title}</h2>
                        <p class="product-price">$${product.price}</p>
                        <p>${product.description}</p>`
                        
            productDiv.appendChild(cartButton)
            productList.appendChild(productDiv);
        })
    })
    .catch(error => console.log('Error while data:', error))
}

fetchProducts();