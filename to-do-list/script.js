// ===== VARIABLES =====
const formulario = document.getElementById("form-tarea");
const input = document.getElementById("input-tarea");
const lista = document.getElementById("lista-tareas");
const contador = document.getElementById("contador");

let totalTareas = 0;

// ===== FUNCIONES =====
function actualizarContador() {
  contador.textContent = totalTareas;
}

function crearTarea(texto) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.classList.add("btn-eliminar");

  btnEliminar.addEventListener("click", function () {
    lista.removeChild(li);
    totalTareas--;
    actualizarContador();
  });

  li.appendChild(span);
  li.appendChild(btnEliminar);
  lista.appendChild(li);

  totalTareas++;
  actualizarContador();
}

// ===== EVENTOS =====
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const texto = input.value.trim();

  if (texto === "") return;

  crearTarea(texto);
  input.value = "";
});