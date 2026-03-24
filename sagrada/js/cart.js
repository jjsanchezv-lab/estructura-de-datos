let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(price, name){
    cart.push({price, name});
    saveCart();
    updateCount();
}

function removeFromCart(index){
    cart.splice(index, 1);
    saveCart();
    renderCart();
    updateCount();
}

function updateCount(){
    const count = document.getElementById("cartCount");
    if(count){
        count.innerText = cart.length;
    }
}

function renderCart(){
    const list = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");

    if(!list) return;

    list.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - $${item.price}
            <button onclick="removeFromCart(${index})">❌</button>
        `;
        list.appendChild(li);
    });

    totalEl.innerText = total;
}

// Ejecutar al cargar
updateCount();
renderCart();