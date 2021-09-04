
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const usuario = document.getElementById('novacio');
// const email = document.getElementById('email');
const password = document.getElementById('password');

formulario.addEventListener('submit', e => {
	const usuarioValue = usuario.value.trim();
	const passwordValue = password.value.trim();
	if (usuarioValue==='' || passwordValue==='') {
		checkInputs(e);
	}else {
		location.href="index_usuario.html";
	}
});

function checkInputs(e) {
	e.preventDefault();
	const usuarioValue = usuario.value.trim();
	const passwordValue = password.value.trim();

	if(usuarioValue === '') {
		document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
		document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error-activo');
		document.querySelector('#grupo__usuario i').classList.add('fa-times-circle');
	}	else {
		document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error-activo');
		document.querySelector('#grupo__usuario i').classList.remove('fa-times-circle')
	}

	if(passwordValue === '') {
		document.getElementById('grupo__password').classList.add('formulario__grupo-incorrecto');
		document.querySelector('#grupo__password i').classList.add('fa-times-circle');
		document.querySelector('#grupo__password .formulario__input-error').classList.add('formulario__input-error-activo');
	}	else {
		document.querySelector('#grupo__password .formulario__input-error').classList.remove('formulario__input-error-activo');
		document.querySelector('#grupo__password i').classList.remove('fa-times-circle');
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', checkInputs);
	// input.addEventListener('blur', validarFormulario);
});
