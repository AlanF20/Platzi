const calcularPCuadrado = (lado) =>{
    return lado * 4;
}
const calcularACuadrado = (lado) =>{
    return lado * lado;
}
const calcularATriangulo = (base, altura) =>{
    return (base * altura) / 2;
}
const calcularPTriangulo = (ladoA, ladoB, base) =>{
    if(ladoA == ladoB && ladoB == ladoA && base == ladoA){
        return `El <strong>perimetro</strong> del triangulo equilatero es de:<strong> ${ladoA*3}cm</strong>`;
    }if(ladoA == ladoB && ladoA != base){
        return `El <strong>perimetro</strong> del triangulo isosceles es de: <strong>${(ladoA * 2) + base}cm</strong>`;
    }
    return  `El <strong>perimetro</strong> del triangulo escaleno es de: <strong>${ladoA + ladoB + base}cm</strong>`
}
const calcularPCircle = (radio) =>{
    return radio * 2 * Math.PI;
}
const calcularACircle = (radio) =>{
    return Math.pow(radio, 2) * Math.PI;
}
export {calcularPCuadrado, calcularACuadrado, calcularATriangulo, calcularPTriangulo, calcularACircle, calcularPCircle};