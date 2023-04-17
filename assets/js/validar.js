const formContacto = document.getElementById("formContacto");
const inputNombre = document.getElementById("inputNombre");
const inputEmail = document.getElementById("inputEmail");
const inputAsunto = document.getElementById("inputAsunto");
const inputConsulta = document.getElementById("inputConsulta");

formContacto.addEventListener("submit", function(e) {
    e.preventDefault();

    let inputFields = [{
        field: inputNombre,
        message: "El nombre es requerido"
    }, {
        field: inputEmail,
        message: "El email es requerido"
    }, {
        field: inputAsunto,
        message: "El asunto es requerido"
    }, {
        field: inputConsulta,
        message: "El consulta es requerida"
    }];

    removeError(inputFields);

    let valid = validateRequiredFields(inputFields);

    if (valid) {
        formContacto.submit();
    }
})