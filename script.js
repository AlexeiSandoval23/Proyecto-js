const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;


function iniciarJuego() {
    alert("¡Bienvenido al juego de adivinanza de números!");

    while (!adivinado && intentos < 5) {
        const adivinanza = parseInt(prompt("Adivina un número entre 1 y 100:"));
        intentos++;

        if (adivinanza === numeroSecreto) {
            alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
            adivinado = true;
        } else if (adivinanza < numeroSecreto) {
            alert("El número es más alto. Intenta nuevamente.");
        } else {
            alert("El número es más bajo. Intenta nuevamente.");
        }
    }

    if (!adivinado) {
        alert(`Lo siento, has agotado tus 5 intentos. El número secreto era ${numeroSecreto}.`);
    }

    console.log(`Número Secreto: ${numeroSecreto}`);
    console.log(`Intentos realizados: ${intentos}`);
}
