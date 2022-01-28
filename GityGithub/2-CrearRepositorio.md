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