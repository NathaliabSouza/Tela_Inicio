document.addEventListener("DOMContentLoaded", function() {
    alert("Bem-vindo à minha página!");
    // Outras operações JavaScript podem ser realizadas aqui
  });
const links = document.querySelectorAll('.links a');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.backgroundColor = '#423706';
  });

  link.addEventListener('mouseout', () => {
    link.style.backgroundColor = '#060002';
  });
});
