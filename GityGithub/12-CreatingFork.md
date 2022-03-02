# **Creando un Fork🍴**

Es una caracteristica unica de GitHub en la que se crea una copia exacta del estado actual de un repositorio directamente en GitHub, este repositorio podra servir como otro origen y se podra clonar (como cualquier otra repositorio) en pocas palabras, lo podremos utilizar como un git cualquiera.

Si hacemos **Fork** de un repositorio donde no seamos colaboradores lo unico que estamos haciendo es una copia del repositorio en ese momento, haciendo asi que si nosotros tratamos de hacer un `git push` este solo se enviara al repositorio que clonamos, no al repositorio original.

Nosotros como dueños de un repositorio podremos aceptar pull request de gente que no es colaboradora e hizo un fork a nuestro proyecto pero debemos tener en cuenta que probablemente tenga una version pasada de nuestro repositorio pero aun asi podremos visualizar los cambios gracias a los pull request.

La manera con la cual podemos manter es agregando el repositorio original remoto a nuesto entorno, esto lo logramos mediante el comando:

```js
git remote add upstream urlDelRepositorio //donde upstream puede ser cualquier nombre pero por convencion se utiliza upstream
```