fetch("data/products.json")
.then(res => res.json())
.then(data => {
    const container = document.getElementById("products");

    data.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");

        div.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" width="100%">
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.price}, '${product.name}')">
              Agregar
            </button>
        `;

        container.appendChild(div);
    });
});