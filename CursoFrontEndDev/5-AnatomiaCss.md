# **Anatomia de una declaracion CSS: selectores, propiedades y valores 🎨**

*selector:*  se podria definir como el puente que comunica nuestro documento Html 📄, con nuestro documento Css 🎨. Con estos selectores indicamos que tipo de elemento en especifico queremos estilizar.

```css
/* selector */
h1{
    /* propiedad: valor; */
     color: pink;
}
```

## **Tipos de selectores 🔖**

Tabla    | columna
---------|--------
De tipo  | div {...}
De clase | .elemento{...}
De Id    | #id-Elemento {...}
De atributo | a[href="..."]{...}
Universal | *{...}

```css
/* De tipo */
div{
    background: green;
}
/* De clase */
.miClase{
    color: red;
}
/* De Id */
#miId{
    font-size: 1rem;
}
/* De atributo */
a[href="..."]{
    text-decoration: none;
}
/* Universal */
*{
    font-size: 62.5%
}
```
## Tipos de selectores: pseudoclases y pseudoelementos

Las pseudaclases nos permite estilizar las acciones que hace el usuario en nuestra pagina web(estilizar un button al dar click sobre el pj.)

Pseudoclases
 ```css
 button:active{
     ...
 }
 a:focus{
     ...
 }
 aside:hover{
     ...
 }
 li:nth-child(){
     ...
 }
 ```
