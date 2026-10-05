// Varias cuentas => for anidado

// Estructura de usuarios con listas de movimientos
const usuarios = [
    {
        nombre: "Andrew",
        movimientos: [20000, -5000, -10000]
    },
    {
        nombre: "lean",
        movimientos: [50000, -12000, -8000, -15000]
    },
    {
        nombre: "Franchesca",
        movimientos: [100000, -30000]
    }
];

for (let i = 0; i < usuarios.length; i++) {
    let usuario = usuarios[i];
    let totalUser = 0;

    for (let j = 0; j < usuario.movimientos.length; j++) {
        totalUser = totalUser + usuario.movimientos[j];
    }
    console.log(`El total de movimientos de ${usuario.nombre} es: $ ${totalUser}`);
}