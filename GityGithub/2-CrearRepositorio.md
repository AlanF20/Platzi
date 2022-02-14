# **Crear un repositorio en Github :octocat:**

1- Primero que nada tenemos que crear un nuevo directorio en nuestro ordenador.
```s
alanf@alanf:~/Alan$ mkdir proyecto1
```
2- Dirigirnos al directorio creado e iniciar **git init**
```s
alanf@alanf:~/Alan$ cd proyecto1
alanf@alanf:~/Alan/proyecto1$ git init 

Initialized empty Git repository in /home/alanf/Alan/proyecto1/.git/
```
3- Notaremos que el repositorio se a iniciado si al mostrar los archivos ocultos(*ls -a*) del directorio encontramos un **.git**
```v
alanf@alanf:~/Alan/proyecto1$ ls -a
.  ..  .git
```
4- Crearemos un archivo de cualquier tipo para fines practicos.
```vim
alanf@alanf:~/Alan/proyecto1$ echo "# Hola platzi" >> miTexto.txt
```
5- Una vez tenemos el archivo listo, podremos ver el estado de nuestro repositorio utilizando el comando `git status`
```s
alanf@alanf:~/Alan/proyecto1$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	miTexto.txt

nothing added to commit but untracked files present (use "git add" to track)
```
6- Aun nada se añadido porque si queremos agregar un archivo a nuestro repositorio tenemos que ejecutar el comando `git add` 
```s
alanf@alanf:~/Alan/proyecto1$ git add miTexto.txt 
```
7- Con el comando git status podremos ver la lista de cambios que se añadiran a nuestro repositorio.
```s
alanf@alanf:~/Alan/proyecto1$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   miTexto.txt
```
8- Si por algun motivo nosotros no queremos añadir algun archivo a nuestro repositorio pero ya ejecutamos el `git add` solo tenemos que ejecutar el comando `git rm --cached <archivo>`
```s
alanf@alanf:~/Alan/proyecto1$ git rm --cached miTexto.txt 
rm 'miTexto.txt'
```
> El **--cached** en nuestro comando es una instruccion en donde le decimos a github que remueva el archivo deseado desde el cache almacenado en nuestro repositorio.

>A su vez **cached** quiere decir que aun no esta el archivo en las bases de datos de github si no en la memoria RAM de nuestro dispositivo.

9- Para comprobar que efectivamente quitamos el archivo ejecutamos nuevamente `git status`.
```s
alanf@alanf:~/Alan/proyecto1$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	miTexto.txt

nothing added to commit but untracked files present (use "git add" to track)

```
10- Una vez estamos seguros de lo que subiremos a nuestro repositorio, tenemos que agregar un mensaje de confirmacion de lo que agregaremos, esto lo hacemos mediante el comando `git commit`  

```s
alanf@alanf:~/Alan/proyecto1$ git commit -m "Agregamos el archivo miTexto.txt al repositorio"
```  

> Una mala practica seria no asignar un mensaje acerca de lo que se esta enviando al repositorio, porque de esta manera si nosotros queremos saber el estado del repositorio en un tiempo (pasado) especifico, sabremos que acciones se tomaron en dicho tiempo.

11- Posiblemente en este paso nuestra terminal nos arrojaria un error acerca de que no puede identificar quienes somos nosotros, de ser asi tenemos que configurar las variables de **user.name** y **user.email** que vienen en la configuracion global de github , pero, Y como hacemos eso? bueno:

```s
alanf@alanf:~$ git config --global user.name "Aqui va nuestro user"

alanf@alanf:~$ git config --global user.email "Aqui va nuestro email"
```  

12- Si nosotros quisieramos añadir todo el contenido de una carpeta a nuestro repositorio el comando en consola seria el siguiente:

```s
alanf@alanf:~/Alan/proyecto1$ git add .
```

>Esto agregaria a nuestro repositorio todos y cada uno de los documentos dentro de nuestra carpeta.

13- Si quisieramos ver el historial de modificaciones de nuestro archivo podemos usar el siguiente comando en la terminal: 

```s
alanf@alanf:~/Alan/proyecto1$ git log miTexto.txt
commit 3d96c76de2532ed97bddfda4ca8693dca7f58bf1 (HEAD -> master)
Author: Alan Flores <alanif@hotmail.com>
Date:   Mon Feb 14 16:55:31 2022 -0600

    este es un commit para agregar a github
``` 

git log nos permite ver en tiempo y forma en los que se realizo un cambio en alguno de los archivos de nuestro repositorio, como tambien conocer el autor quien los efectuo.