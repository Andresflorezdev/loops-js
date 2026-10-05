// Buscar y filtrar movimientos => Break y Continue

// Lista de movimientos
const movimientos = [
    {tipo: "recarga", valor: 50000 },
    {tipo: "vacio", valor: 0},
    {tipo: "retiro", valor: -20000},
    {tipo: "pago_comercio", valor: -15000},
    {tipo: "vacio", valor: 0},
    { tipo: "pago_comercio", valor: -30000 }
];

for (let i = 0; i < movimientos.length; i++) {
    let movimiento = movimientos[i];

    if (movimiento.valor === 0) {
        continue;
    }

    if (movimiento.tipo === "pago_comercio") {
        console.log("Primer pago a comercio encontrado en el indice: " + i);
        console.log("Valor del pago: $" + movimiento.valor);
        break;
    }
}