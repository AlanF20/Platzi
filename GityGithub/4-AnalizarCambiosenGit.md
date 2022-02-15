# **Analizar los cambios en nuestro proyecto con Git :octocat:🔎**

Si nosotros escribimos `git show` nos mostrara los cambios que han existido sobre un archivo.

```s
alanf@alanf:~/Alan/proyecto1$ git show miTexto.txt
commit 3d96c76de2532ed97bddfda4ca8693dca7f58bf1 (HEAD -> master)
Author: Alan Flores <alanif@hotmail.com>
Date:   Mon Feb 14 16:55:31 2022 -0600

    este es un commit para agregar a github

diff --git a/miTexto.txt b/miTexto.txt
new file mode 100644
index 0000000..86267bd
--- /dev/null
+++ b/miTexto.txt
@@ -0,0 +1 @@
+# Hola platzi
``` 

Este comando nos muestra: 

* Cual es el ultimo commit.
* En que rama estamos trabajando.
* El mensaje del commit que hicimos.
* Hace una comparacion con la version vieja comparandola con la nueva. 
* Contiene tambien identificadores dentro de la base de datos de git en donde se encuentran los cambios.
* El numero de versiones que existen.

>Esto es importante si por alguna razon se rompe nuestro codigo podremos saber porque fallo.

Si nosotros quisieramos ver la diferencia entre dos commits podemos utilizar el comando `git diff` seguido del dos id, el primer id sera del commit mas antiguo que queremos comparar y el segundo el id del commit mas reciente que queramos comparar. 
