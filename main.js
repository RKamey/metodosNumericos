// const linealOption = document.getElementById("lineal-option");
// const cuadraticaOption = document.getElementById("cuadratica-option");
// const lagrangeOption = document.getElementById("lagrange-option");

// const isLinealOptionSelected = () => linealOption.className.indexOf("active") > 0;
// const isCuadraticaOptionSelected = () => cuadraticaOption.className.indexOf("active") > 0;
// const isLagrangeOptionSelected = () => lagrangeOption.className.indexOf("active") > 0;

// function removeClassnameTo(element) {
//   element.classList.remove("active");
// }

// linealOption.addEventListener("click", function () {
//   if (isCuadraticaOptionSelected()) removeClassnameTo(cuadraticaOption);
//   if (isLagrangeOptionSelected()) removeClassnameTo(lagrangeOption);
//   if (isLinealOptionSelected()) removeClassnameTo(linealOption);
//   else linealOption.classList.add("active");
// });

// cuadraticaOption.addEventListener("click", function () {
//   if (isLinealOptionSelected()) removeClassnameTo(linealOption);
//   if (isLagrangeOptionSelected()) removeClassnameTo(lagrangeOption);
//   if (isCuadraticaOptionSelected()) removeClassnameTo(cuadraticaOption);
//   else cuadraticaOption.classList.add("active");
// });

// lagrangeOption.addEventListener("click", function () {
//   if (isLinealOptionSelected()) removeClassnameTo(linealOption);
//   if (isCuadraticaOptionSelected()) removeClassnameTo(cuadraticaOption);
//   if (isLagrangeOptionSelected()) removeClassnameTo(lagrangeOption);
//   else lagrangeOption.classList.add("active");
// });

// Seleccionas lineal
// Compruebas el activo [cuadratico lagrange]
// Si alguno de estos dos es activo... quitas el activo
// Activas el lineal

// FUNCTION TIPO FLECHA
// const isCuadraticaOptionSelected = () => {
//   return cuadraticaOption.className.indexOf("active")
// }
// FUNCTION NORMAL
// const isCuadraticaOptionSelected = function() {
//   return cuadraticaOption.className.indexOf("active")
// }









// function interpolacionLineal(x, x0, x1, fx0, fx1) {
//     let fx = fx0 + [(fx1 - fx0) / x1 - x0] * (x - x0);
//     return fx;
// }

// function interpolacionCuadratica(x, x0, x1)


// console.log(interpolacionLineal(5, 7, 8, 55, 90))

