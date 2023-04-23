
function validacion() {
    const email = document.getElementById("email").value;
    const emailrex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailerex.test(email)) {
        document.getElementById("email-error").innerHTML = "Ingrese un correo valido";
        return false;

    } else {
        document.getElementById("email-error").innerHTML = "";
    }
    return true;

}

function valiContra() {
    const contra = document.getElementById("contra_error").value;

    if (contra.length < 8) {

        document.getElementById("contra_error").innerHTML = "Ingrese mas caracteres en la contraseña";

        return false;

    }
    return true;
}