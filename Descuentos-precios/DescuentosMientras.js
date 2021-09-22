const precio = 120;
const descuento = 15;

const precioConDescuento = 100 - descuento;
const resultado = (precioConDescuento * precio) / 100;

console.log({
    precio,
    descuento,
    precioConDescuento,
    resultado
});