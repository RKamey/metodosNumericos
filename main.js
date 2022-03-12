function refresh() {
    formulario.reset();
}
function refreshC() {
    formularioC.reset();
}

function lineal() {
    let FX0 = parseFloat(document.getElementById("fx0").value);
    let FX1 = parseFloat(document.getElementById("fxLineal").value);
    let X0 = parseFloat(document.getElementById("x0").value);
    let X1 = parseFloat(document.getElementById("x1").value);
    let X = parseFloat(document.getElementById("x").value);

    let result = (FX0 + (FX1 - FX0) / (X1 - X0)) * (X - X0);

    parseFloat(document.getElementById("resultado").value = result);
    return result;
}

function cuadratica() {

}