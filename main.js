function refresh() {
    formulario.reset();
}
function refreshC() {
    formularioC.reset();
}

function lineal() {
    let FX0 = parseFloat(document.getElementById("fx0").value);
    let FX1 = parseFloat(document.getElementById("fx1").value);
    let X0 = parseFloat(document.getElementById("x0").value);
    let X1 = parseFloat(document.getElementById("x1").value);
    let X = parseFloat(document.getElementById("x").value);

    let result = (FX0 + (FX1 - FX0) / (X1 - X0)) * (X - X0);

    parseFloat(document.getElementById("resultado").value = result);
    return result;
}

function errorRL() {
    let efe0 = parseFloat(document.getElementById("fx0").value);
    let efe1 = parseFloat(document.getElementById("fx1").value);
    let ekis0 = parseFloat(document.getElementById("x0").value);
    let ekis1 = parseFloat(document.getElementById("x1").value);
    let ekis = parseFloat(document.getElementById("x").value);
    let lineal = (efe0 + (efe1 - efe0) / (ekis1 - ekis0)) * (ekis - ekis0);
    //let prueba = 10;
    let valorVerdadero = parseFloat(document.getElementById("valorV").value);
    let errorVerdadero = valorVerdadero - lineal;
    let errorPorcentual = (errorVerdadero / valorVerdadero) * 100;

    parseFloat(document.getElementById("errorRPL").value = errorPorcentual);
    return errorPorcentual;
}

function cuadratica() {
    let fx0 = parseFloat(document.getElementById("fx00").value);
    let fx1 = parseFloat(document.getElementById("fx01").value);
    let fx2 = parseFloat(document.getElementById("fx02").value);
    let x0 = parseFloat(document.getElementById("x00").value);
    let x1 = parseFloat(document.getElementById("x01").value);
    let x2 = parseFloat(document.getElementById("x02").value);
    let x = parseFloat(document.getElementById("xx").value);
    
    let b0 = fx0;
    let b1 = (fx1 - fx0) / (x1 - x0);
    let b2 = (((fx2 - fx0) / (x2 - x0)) - (b1)) / (x2 - x1);
    let resultado = (b0 + (b1 * (x - x0)) + (b2 * (x - x0) * (x-x1)));

    parseFloat(document.getElementById("resultadoC").value = resultado)
    return resultado;
}

function errorRPC() {
    let fx0 = parseFloat(document.getElementById("fx00").value);
    let fx1 = parseFloat(document.getElementById("fx01").value);
    let fx2 = parseFloat(document.getElementById("fx02").value);
    let x0 = parseFloat(document.getElementById("x00").value);
    let x1 = parseFloat(document.getElementById("x01").value);
    let x2 = parseFloat(document.getElementById("x02").value);
    let x = parseFloat(document.getElementById("xx").value);
    
    let b0 = fx0;
    let b1 = (fx1 - fx0) / (x1 - x0);
    let b2 = (((fx2 - fx0) / (x2 - x0)) - (b1)) / (x2 - x1);
    let resultado = (b0 + (b1 * (x - x0)) + (b2 * (x - x0) * (x-x1)));

    let valorVerdadero = parseFloat(document.getElementById("vVcua").value);
    let errorVerdadero = valorVerdadero - resultado;

    let errorPorcentual = (errorVerdadero / valorVerdadero) * 100;

    parseFloat(document.getElementById("eRPC").value = Math.abs(errorPorcentual));
    return Math.abs(errorPorcentual);
}