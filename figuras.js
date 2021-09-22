//Código del Cuadrado
console.group("Cuadrados")
    
    function perimetroCuadrado(lado) {
        return lado * 4;
    }

    function areaCuadrado(lado) {
        return lado * lado;
    }

console.groupEnd();


//Código del Triangulo
console.group("Triangulo");

    function perimetroTriangulo(lado1, lado2, base) {
        return parseInt (lado1) + parseInt (lado2) + parseInt (base);
    }

    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    }

console.groupEnd();

//Código del Circulos
console.group("Circulos");
    // Diámetro
    function diametroCirculo(radio) {
        return radio * 2;
    } 

    const PI = Math.PI;
    console.log("Pl es:", PI);

    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }

    function areaCirculo(radio) {
        return (radio * radio) * PI;
    }


console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro es: ${perimetro}`);
}

function calcularAreaCuadrado() {
    const input = document.getElementById('InputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert(`El area es:  ${area}`);
}

// Triangulo
function CalcularPerimetroTriangulo() {
    const input1 = document.getElementById('InputTriangulo1');
    const value1 = input1.value;
    const input2 = document.getElementById('InputTriangulo2');
    const value2 = input2.value;
    const input3 = document.getElementById('InputTriangulo3');
    const value3 = input3.value;
    const perimetro = perimetroTriangulo(value1, value2, value3);

        alert(`El perimetro es: ${perimetro}`)
}

function CalcularAreaTriangulo() {
    const input3 = document.getElementById('InputTriangulo3');
    const value3 = input3.value;
    const input4 = document.getElementById('InputTriangulo4');
    const value4 =  input4.value;
    const area = areaTriangulo(value3, value4);
        alert(`El area es: ${area}`)
}

// Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById('InputCirculo');
    const value = input.value;
    
    const perimetro = perimetroCirculo(value);
    alert(`El perimetro es: ${perimetro}`);
}

function calcularAreaCirculo() {
    const input = document.getElementById('InputCirculo');
    const value = input.value;

    const area = areaCirculo(value);
    alert(`El area es:  ${area}`);
}