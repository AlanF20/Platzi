const calcularPerimetroCuadrado = () =>{
    const ladoCuadrado = document.querySelector('.main__Cuadrado-form-input').value;
    const answer = document.querySelector('.main__Cuadrado-form-answer');
    if(!ladoCuadrado){
        return answer.innerHTML = `Favor de ingresar un dato numerico🧐`;
    }
    answer.innerHTML = `El <strong>perimetro</strong> del cuadrado es de: <strong>${ladoCuadrado*4}cm</strong>`;
}

const calcularAreaCuadrado = () =>{
    const ladoCuadrado = document.querySelector('.main__Cuadrado-form-input').value;
    const answer = document.querySelector('.main__Cuadrado-form-answer')
    if(!ladoCuadrado){
        return answer.innerHTML = `Favor de ingresar un dato numerico🧐` ;
    }
    answer.innerHTML = `El <strong>area</strong> del cuadrado es de: <strong>${ladoCuadrado*ladoCuadrado}cm<sup>2</sup></strong>`;
}

const calcularAreaTriangle = () =>{
    const medidas = document.querySelectorAll(".main__Triangle-form-input");
    const answer = document.querySelector('.main__Triangle-form-answer');
    if(!medidas[2].value || !medidas[3].value){
        return answer.innerHTML = `Favor de ingresar un dato numericos🧐 en los campos necesarios.`;
    }
    answer.innerHTML = `El <strong>area</strong> del triangulo es de: <strong>${(medidas[2].value * medidas[3].value)/2}cm<sup>2</sup></strong>`
    console.log(medidas)
}

const calcularPerimetroTriangle= () =>{
    const medidas = document.querySelectorAll(".main__Triangle-form-input");
    const answer = document.querySelector('.main__Triangle-form-answer');
    if(!medidas[0].value ||!medidas[1].value || !medidas[2].value){
        return answer.innerHTML = `Favor de ingresar un dato numericos🧐 en los campos necesarios.`;
    }
    if(medidas[0].value == medidas[1].value && medidas[0].value == medidas[2].value){
        console.log(!medidas[3].value)
        return answer.innerHTML = `El <strong>perimetro</strong> del triangulo equilatero es de:<strong> ${medidas[0].value*3}cm</strong>`;
    }
    if(medidas[0].value == medidas[1].value && medidas[0].value != medidas[2].value){
        return answer.innerHTML = `El <strong>perimetro</strong> del triangulo isosceles es de: <strong>${parseInt((medidas[0].value * 2)) + parseInt(medidas[2].value)}cm</strong>`;
    }
    return answer.innerHTML = `El <strong>perimetro</strong> del triangulo escaleno es de: <strong>${parseInt(medidas[0].value) + parseInt(medidas[1].value) + parseInt(medidas[2].value)}cm</strong>`;
}

const calcularAreaCircle = () => {
    const radio = document.querySelector(".main__Circle-form-input").value;
    const answer = document.querySelector('.main__Circle-form-answer');
    if(!radio){
        return answer.innerHTML = `Favor de ingresar un dato numerico🧐`;
    }
    answer.innerHTML = `El <strong>area</strong> del circulo es de: <strong>${(Math.pow(radio,2) * Math.PI).toFixed(2)}cm<sup>2</sup></strong>`
}

const calcularPerimetroCircle = () => {
    const radio = document.querySelector(".main__Circle-form-input").value;
    const answer = document.querySelector('.main__Circle-form-answer');
    if(!radio){
        return answer.innerHTML = `Favor de ingresar un dato numerico🧐`;
    }
    answer.innerHTML = `El <strong>perimetro</strong> del circulo es de: <strong>${((2 * Math.PI) * radio).toFixed(2)}cm</strong>`
}