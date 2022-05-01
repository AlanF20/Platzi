# **Callback**

>Un callback es una funcion que se puede pasar como argumento a otra y que se ejecuta despues que se haya completado una operacion(no necesariamente debe ser asincrona).

```js
function modify(array, callback){
    //hacemos algo 
    array.push('midu');
    //despues de hacer algo
    callback(array);
}
const names = ['alan','jaqui','miguel'];

modify(names, function(array){
    console.log(`He modificado el arreglo y ahora es de ${array.length} elementos!`);

    // el output en consola seria el siguiente:
    // He modificado el arreglo y ahora es de 4 elementos!
    // esto por el push que hacemos en la funcion modify lo cual agrega un nuevo elemento a nuestro arreglo.
})
```
> ***"casi todo en Javascript recibe un callback"***

```js
const names = ['alan','jaqui','miguel'];
names.forEach(name =>{
    console.log(name)
})
/// el name dentro de los parentesis del forEach(name) tambien es considerado un callback
```