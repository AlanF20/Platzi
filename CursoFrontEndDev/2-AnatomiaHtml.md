# Anatomia de un documento HTML y sus elementos ☠️

## Que es una etiqueta? 🤔
Basicamente una etiqueta representa un elemento de nuestro HTML, con ellas le decimos que queremos agregar a nuestro documento. Se conforman por:

```html
<h1> ⬅️  etiqueta de apertura
```

```html
Hola mundo!! ⬅️ Contenido
```

```html
</h1> ⬅️ etiqueta de cierre (lleva un /)
```

Y esta seria su estructura final:

```html
<h1> Hola mundo!! </h1>
```

> Existen diversas etiquetas que no necesariamente llevaran una etiqueta de cierre ➡️ </>

Adicional a todo esto tambien se le pueden agregar atributos a nuestras etiquetas:

```html
<h1 class="title">`

.....   ⬆️ ... ⬆️

....Atributo. Valor
```

> Los atributos de una etiqueta dependeran del tipo de etiqueta que hayamos elegido (*quiere decir que cada etiqueta es diferente hasta cierto punto...*) tambien hay atributos que no necesariamente tienen valor.

## Anidamiento

En HTML tenemos algunas etiquetas que pueden actuar como cajas, entonces ahi dentro podemos meter mas etiquetas HTML, que tambien dependiendo de lo que necesitemos podriamos meter una caja dentro de otra caja 🗃️

```html
<section> ⬅️ dentro de otra caja 
    <h1>Platzi</h1>
    <p>Tiene una comunidad</p>
    <ul>                  ⬅️ una caja
        <li>Increible</li>
        <li>Maravillosa</li>
        <li>Inigualable</li>
    </ul>
<section>
```
