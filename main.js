function refresh() {
    formulario.reset();
  }
  function refreshC() {
    formularioC.reset();
  }
  
  function isInfinite(number) {
    return !isFinite(number);
  }
  
  function lineal() {
    let FX0 = parseFloat(document.getElementById("fx0").value);
    let FX1 = parseFloat(document.getElementById("fx1").value);
    let X0 = parseFloat(document.getElementById("x0").value);
    let X1 = parseFloat(document.getElementById("x1").value);
    let X = parseFloat(document.getElementById("x").value);
  
    const paso1 = (FX1 - FX0) / (X1 - X0);
    const paso1Validado = isNaN(paso1) || isInfinite(paso1) ? 0 : paso1;
    // condicion ? enTrue : enFalse
  
    let result = FX0 + paso1Validado * (X - X0);
  
    document.getElementById("resultado").value = result;
    return result;
  }
  
  function errorRL() {
    let linealValue = lineal();
  
    let valorVerdadero = parseFloat(document.getElementById("valorV").value);
    let errorVerdadero = valorVerdadero - linealValue;
    let errorPorcentual = (errorVerdadero / valorVerdadero) * 100;
  
    document.getElementById("errorRPL").value = errorPorcentual;
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
  
    const b0 = fx0;
    const b1 = (fx1 - fx0) / (x1 - x0);
    const b1Validado = isNaN(b1) || isInfinite(b1) ? 0 : b1;
    const b2 = ((fx2 - fx0) / (x2 - x0) - b1Validado) / (x2 - x1);
    const b2Validado = isNaN(b2) || isInfinite(b2) ? 0 : b2;
    let resultado = b0 + b1Validado * (x - x0) + b2Validado * (x - x0) * (x - x1);
  
    document.getElementById("resultadoC").value = resultado;
    return resultado;
  }
  
  function errorRPC() {
    let cuadraticaValue = cuadratica();
  
    let valorVerdadero = parseFloat(document.getElementById("vVcua").value);
    let errorVerdadero = valorVerdadero - cuadraticaValue;
  
    let errorPorcentual = (errorVerdadero / valorVerdadero) * 100;
  
    document.getElementById("eRPC").value = Math.abs(errorPorcentual);
    return Math.abs(errorPorcentual);
  }