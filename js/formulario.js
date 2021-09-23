const Formulario = document.getElementById(formulario);
const inputs = document.querySelectorAll('#formulario input');

const Expresiones = {
	Numero: /^\d{1,16}$/,
	Email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	Url: /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	Variable: /^[a-zA-Z0-9\_\-]{4,16}$/
}
const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}
const validarFormulario = (e) => {
	validarCampo(e.target, e.target.name);
}
const validarCampo = (input) => {
	if (Expresiones.Numero.test(input.value))
		document.getElementById('pText').innerHTML = "Ingresaste un número.";
	else if (Expresiones.Email.test(input.value))
		document.getElementById('pText').innerHTML = "Ingresaste un correo electrónico.";
	else if (Expresiones.Url.test(input.value))
		document.getElementById('pText').innerHTML = "Ingresaste una dirección url.";
	else if (Expresiones.Variable.test(input.value))
		document.getElementById('pText').innerHTML = "Ingresaste un nombre de variable.";
	else
		document.getElementById('pText').innerHTML = "Intenta ingresando algo diferente.";
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});