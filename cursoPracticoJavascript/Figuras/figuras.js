import {
  calcularPCuadrado as perimetroC,
  calcularACuadrado as areaC,
  calcularATriangulo as areaT,
  calcularPTriangulo as perimetroT,
  calcularACircle as areaCi,
  calcularPCircle as perimetroCi
} from "./calcFig.js";

const btnPerimetroC = document.querySelector(".pC");
const btnAreaC = document.querySelector(".aC");
const btnAreaT = document.querySelector(".aT");
const btnPerimetroT = document.querySelector(".pT");
const btnPerimetroCi = document.querySelector(".pCi");
const btnAreaCi = document.querySelector(".aCi");
const answerC = document.querySelector(".main__Cuadrado-form-answer");
const answerT = document.querySelector(".main__Triangle-form-answer");
const answerCi = document.querySelector(".main__Circle-form-answer");


const calcularPerimetroCuadrado = () => {
  const ladoCuadrado = Number(document.querySelector(".main__Cuadrado-form-input").value);
  if (!ladoCuadrado) {
    return (answerC.innerHTML = `Favor de ingresar un dato numerico🧐`);
  }
  answerC.innerHTML = `El <strong>perimetro</strong> del cuadrado es de: <strong>${perimetroC(ladoCuadrado)}cm</strong>`;
};
btnPerimetroC.addEventListener("click", calcularPerimetroCuadrado);

const calcularAreaCuadrado = () => {
  const ladoCuadrado = Number(document.querySelector(".main__Cuadrado-form-input").value);
  if (!ladoCuadrado) {
    return (answerC.innerHTML = `Favor de ingresar un dato numerico🧐`);
  }
  answerC.innerHTML = `El <strong>area</strong> del cuadrado es de: <strong>${areaC(ladoCuadrado)}cm<sup>2</sup></strong>`;
};
btnAreaC.addEventListener("click", calcularAreaCuadrado);

const calcularAreaTriangle = () => {
  const medidas = document.querySelectorAll(".main__Triangle-form-input");
  const base = Number(medidas[2].value);
  const altura = Number(medidas[3].value);
  if (!base || !altura) {
    return (answerT.innerHTML = `Favor de ingresar un dato numericos🧐 en los campos necesarios.`);
  }
  answerT.innerHTML = `El <strong>area</strong> del triangulo es de: <strong>${areaT( base, altura)}cm<sup>2</sup></strong>`;
};
btnAreaT.addEventListener("click", calcularAreaTriangle);

const calcularPerimetroTriangle = () => {
  const medidas = document.querySelectorAll(".main__Triangle-form-input");
  const ladoA = Number(medidas[0].value);
  const ladoB = Number(medidas[1].value);
  const base = Number(medidas[2].value);
  if (!ladoA || !ladoB || !base) {
    return (answerT.innerHTML = `Favor de ingresar un dato numericos🧐 en los campos necesarios.`);
  }
  return answerT.innerHTML =  perimetroT(ladoA, ladoB, base)
};
btnPerimetroT.addEventListener("click", calcularPerimetroTriangle);

const calcularAreaCircle = () => {
  const radio = Number(document.querySelector(".main__Circle-form-input").value);
  if (!radio) {
    return (answerCi.innerHTML = `Favor de ingresar un dato numerico🧐`);
  }
  answerCi.innerHTML = `El <strong>area</strong> del circulo es de: <strong>${areaCi(radio).toFixed(2)}cm<sup>2</sup></strong>`;
};
btnAreaCi.addEventListener("click", calcularAreaCircle);

const calcularPerimetroCircle = () => {
  const radio = document.querySelector(".main__Circle-form-input").value;
  if (!radio) {
    return (answerCi.innerHTML = `Favor de ingresar un dato numerico🧐`);
  }
  answerCi.innerHTML = `El <strong>perimetro</strong> del circulo es de: <strong>${perimetroCi(radio).toFixed(2)}cm</strong>`;
};
btnPerimetroCi.addEventListener("click", calcularPerimetroCircle);