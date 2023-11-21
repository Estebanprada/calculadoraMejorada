// Función para sumar dos números
function sumar(n1, n2) {
    // Calcula el resultado
    var resultado = n1 + n2;
    // Obtiene el elemento con id "resultado" del documento HTML
    var res = document.getElementById("resultado");

    // Verifica si ninguno de los números es cero
    if (n1 != 0 && n2 != 0) {
        // Muestra el resultado en el elemento y lo resalta en verde
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    } else {
        // Muestra un mensaje de error en rojo si alguno de los números es cero
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

// Función para restar dos números
// (Las funciones restar, multiplicar y dividir son similares a la función sumar)
function restar(n1, n2) {
    var resultado = n1 - n2;
    var res = document.getElementById("resultado");

    if (n1 != 0 && n2 != 0) {
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

// Función para multiplicar dos números
function multiplicar(n1, n2) {
    var resultado = n1 * n2;
    var res = document.getElementById("resultado");

    if (n1 != 0 && n2 != 0) {
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

// Función para dividir dos números
function dividir(n1, n2) {
    var resultado = n1 / n2;
    var res = document.getElementById("resultado");

    if (n1 != 0 && n2 != 0) {
        respuesta.style.display = "block";
        res.innerHTML = `Total: ${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = `Verifique sus datos`;
        res.style.color = "red";
    }
}

// Función para calcular la potencia cuadrada de un número
function potencia() {
    // Obtiene el valor del elemento con id "n1" del formulario
    let n1 = parseInt(document.getElementById("n1").value);
    // Calcula la potencia cuadrada
    let resultado = Math.pow(n1, 2);

    // Verifica si el resultado es un número válido
    if (!isNaN(resultado)) {
        // Muestra el resultado y lo resalta en verde
        document.getElementById("respuesta").style.display = "block";
        document.getElementById("resultado").innerHTML = `El resultado de la potencia es: ${resultado}`;
        document.getElementById("resultado").style.color = "green";
    } else {
        // Muestra un mensaje de error en rojo si no es un número válido
        document.getElementById("respuesta").style.display = "block";
        document.getElementById("resultado").style.color = "red";
    }
}

// Función principal que se llama desde el formulario HTML
function mostrar() {
    // Obtiene los valores del formulario
    let n1 = parseInt(document.getElementById("n1").value)
    let n2 = parseInt(document.getElementById("n2").value)
    let opc = parseInt(document.getElementById("opc").value)

    // Usa un switch para llamar a la función correspondiente según la operación seleccionada
    switch (opc) {
        case 1:
            sumar(n1, n2);
            break;
        case 2:
            restar(n1, n2);
            break;
        case 3:
            multiplicar(n1, n2);
            break;
        case 4:
            dividir(n1, n2);
            break;
        case 5:
            potencia(n1, n2); // Aquí se debería llamar a la función potencia sin argumentos
            break;
    }
}
