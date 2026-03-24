const form = document.getElementById('loginForm');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    if(user === "admin" && pass === "1234"){
        window.location.href = "index.html";
    } else {
        document.getElementById('error').innerText = "Credenciales incorrectas";
    }
});