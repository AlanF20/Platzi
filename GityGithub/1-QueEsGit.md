# Que es Git? :octocat: 

Git es un software de control de versiones de codigo/proyectos. Es un proyecto de codigo abierto con un mantenimiento activo que desarrollo originalmente Linus Torvalds.

Git que presenta una arquitectura distribuida, es un ejemplo de DVCS (sistema de control de versiones distribuidas, por sus siglas en ingles). En lugar de tener un unico espacio para todo el historial de versiones del software, como sucede de manera habitual en los sistemas de control de versiones de antaño populares, como CVS o Subversion, en Git la copia de trabajo del codigo de cada desarrollador es tambien un repositorio que puede albergar el historial completo de cambios.

## Pasos para inicializar un repositorio 
----
```Vim
$ git init
$ git add miarchivo
$ git commit -m "Agrego mi archivo a mi repositorio" 
```

## Comandos principales en la terminal

**pwd** nos muestra el path o ruta de la carpeta en donde nos encontramos ubicados.
```sh
alanf@alanf:~$ pwd
/home/alanf
```
**cd** nos permite acceder a una carpeta en uno o mas niveles.
```sh
alanf@alanf:~$ cd Alan/
alanf@alanf:~/Alan$ 
```
**cd ..** nos permite regresar una ruta atras (un nivel hacia atras).
```sh
alanf@alanf:~/Alan$ cd ..
alanf@alanf:~$ 
```
**mkdir** nos permite crear un nuevo directorio.
```sh
alanf@alanf:~$ mkdir Israel
```
**touch** nos permite crear archivos vacios.
```sh
alanf@alanf:~$ touch index.html
```
**cat** nos permite visualizar el contenido de los archivos.
```sh
alanf@alanf:~$ cat index.html
!Doctype
<html>
    <head>
    </head>
    <body>
        <h1>Soy un titulo</h1>
    </body>
</html>
```
**rm** nos permite eliminar un archivo.
```vim
alanf@alanf:~$ rm index.html
```

