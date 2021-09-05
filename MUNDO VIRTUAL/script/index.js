
const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');


const buscador = document.getElementById('buscador');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

formulario.addEventListener('submit', e => {
	const buscadorValue = buscador.value.trim();
	e.preventDefault();
	if (buscadorValue==='') {
    e.preventDefault();
		// checkInputs(e);
	}else {
		location.href="productos.html";
	}
});
