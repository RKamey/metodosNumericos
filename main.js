function interpolacionLineal (x, x0, x1, fx0, fx1) {
    let fx = fx0 + [(fx1 - fx0) / x1 - x0] * (x - x0);
    return fx;
}

console.log(interpolacionLineal(5, 7, 8, 55, 90))