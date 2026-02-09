// ===============================================
// MODAL DE LOGIN
// Este código permite abrir y cerrar el modal de inicio de sesión
// al hacer clic en el botón "Iniciar sesión" en el header.
// También permite cerrar el modal al hacer clic en la "X" o fuera del modal.
// ===============================================

// Seleccionamos los elementos del DOM
const loginBtn = document.getElementById("loginBtn"); // Botón de login en el header
const loginModal = document.getElementById("loginModal"); // Contenedor del modal
const closeBtn = document.querySelector(".close-btn"); // Botón de cerrar (X)

// Abrir modal al hacer clic en "Iniciar sesión"
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

// Cerrar modal al hacer clic en la "X"
closeBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Cerrar modal al hacer clic fuera del contenido del modal
window.addEventListener("click", (e) => {
  if (e.target == loginModal) {
    loginModal.style.display = "none";
  }
});

