# **Que es git staging y los repositorios?😵‍💫**

Staging es el proceso cuando inicializamos un repositorio desde la terminal en nuestro computador, este crea un area en memoria RAM que se llama *Staging* es un area completamente desconectada y es donde se guardaran nuestros cambios y tambien se crea el *repositorio* (.git).

Cuando nosotros modificamos nuestro archivo lo agregamos al *staging area* usando el comando `git add` cuando escribimos este comando quiere decir que ahora lo que modificamos en nuestro archivo pasara a vivir en el *staging* y nuestro archivo ahora esta esperando a que lo enviemos al repositorio.

Entonces ***Staging*** es el estado temporal al que agregamos archivos que modificamos. Entonces como se comunica el *Staging* con nuestro *repositorio*?, se comunican a traves del comando `git commit -m "mensaje"`. Esto quiere decir que nuestros cambios han llegado al repositorio.

Es importante saber el estado de nuestros archivos. Cuando aun no hayamos indicado el `git add` nuestro archivo esta en ***Untracked*** quiere decir que no lo esta rastreando nada, una vez ejecutamos este comando nuestro archivo pasa al estado ***Tracked*** que quiere decir que ahora si esta siendo rastreado y esta en nuestro area de *staging*. 

Con el comando `checkout` podemos traer tods, ciertos o solo algunos de los cambios que esten en el *repositorio* y lo traemos a nuestra carpeta. 

>***Ramas es basicamente romper en pedacitos nuestro codigo y luego volverlo a unir al final***