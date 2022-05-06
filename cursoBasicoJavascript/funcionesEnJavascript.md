# **Funciones en JavaScript💡**

> *"Las funciones nos permiten agrupar lineas de codigo en tareas con un nombre, para que, posteriormente, podamos hacer referencia a ese nombre para realizar todo lo que se agrupe en dicha tarea."*     

> ***Manzdev, https://lenguajejs.com/javascript/introduccion/funciones-basicas/***

en base a estas funciones nosotros podremos generar datos, los cuales nos serviran para resolver, cumplir, revisar, y/o acomodar ciertas tareas que queremos que realice nuestra pagina sin la necesidad de repetir codigo debido al encapsulamiento de este mismo.

Existe dos tipos de funciones:

* Declarativa: 
    
    Esta forma permite declarar una funcion que existira a lo largo de todo el codigo. Incluso podremos ejecutar la funcion antes de haberla creado debido a que Javascript busca las declaraciones de funciones y luego procesa el resto del codigo.
    ```js 
    function miFuncion(){
        return 3;
        // Al ocupar la palabra reservada function se esta declarando automaticante la funcion.
    }
    ```
    
* Expresion: 

    En Javascript es muy habitual encontrarse codigos donde los programadores guardan funciones dentro de variables, para posteriormente ejecutar dichas variables, esto nos permitira ejecutar una variable como si fuera una funcion.

    La funcion ahora pasa a ser el nombre de la variable, dando paso a lo que se llaman funciones anonimas (o funciones lambda).
    ```js
    let miFuncion = function(a,b){
        return a + b;
        // Generamos una variable (miFuncion) la cual almacenara nuestra funcion.
    }
    ```
    

## Parametros

Los parametros son variables que existiran solo dentro de dicha funcion, con el valor pasado desde la ejecucion.



```js 
function sumar(a, b){
    return a + b;
}// declaracion de la funcion

sumar(5, 6); // ejecucion de la funcion, osea que el valor de 5 y 6 dentro de los parentesis de sumar(5, 6) los estan recibiendo nuestros parametros a y b para ser utilizados en nuestra funcion
```

## Return 

Podemos observar en los ejemplos anteriores que al termino de nuestra funcion utilizamos la palabra reservada `return` esta palabra quiere decir que finalizaremos la ejecucion de nuestra funcion y especificamos que valor sera devuelto al termino de la misma.

```js
function sumar(a, b){
    let resultado = a + b;
    return resultado;
}
```

## Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.