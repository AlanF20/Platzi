# **Flujo de trabajo profesional🧑‍💻**

En un ambiente colaborativo como git hub :octocat: sabemos que para trabajar individualmente lo mejor es trabajar cada miembro del desarrollo en una rama en concreto, ramas las cuales aun no subiran a produccion, pero, y si los cambios que tenemos hasta ahora ya estan listos para subir? bueno con esto utilizaremos el siguiente comando:

```js
git merge nombreRama //este comando nos ayuda a fusionar la rama con la cual estamos trabajando -> la rama principal
```

Cuando hacemos un `git merge` no se fusiona directamente con nuestra rama principal, si no que pasa a un estado llamado `pull request` esto quiere decir que nosotros como colaboradores de algun proyecto tenemos que esperar a que alguien (devOps) confirme que lo que estamos subiendo no tiene ningun problema. 

> Tambien es buena practica que si alguno de los archivos tuviese errores (*p.j. errores ortograficos*) crearamos una rama con el nombre de la solucion de dicho documento (*p.j fix-algo*).

Pull request: Es una funcionalidad de github, en la que un colaborador pide que revisen sus cambios antes de hacer merge a una rama, normalmente ***main***.