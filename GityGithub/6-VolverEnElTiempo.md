# **Volver en el tiempo en nuestro repositorio🤯**

Con `git reset` podemos regresar a un determinado tiempo en nuestro repositorio, esto se logra de la siguiente manera.

1- Tenemos que verificar todos los cambios hechos hasta el presente y decirle a git a cual de ellos nos queremos regresar. Esto se logra escribiendo en terminal:

```s
alanf@alanf:~/Alan/proyecto1$ git log
commit cbd87e91f170c4597c43b2683889a33c8b8a4ff6 (HEAD -> master)
Author: Alan Flores <alanif@hotmail.com>
Date:   Mon Feb 21 08:50:17 2022 -0600

    Supe como usar vimxd

commit 3d96c76de2532ed97bddfda4ca8693dca7f58bf1
Author: Alan Flores <alanif@hotmail.com>
Date:   Mon Feb 14 16:55:31 2022 -0600

    este es un commit para agregar a github
```

2- Tenemos que decirle a git hub a cual version queremos trasladarnos, esto lo podremos lograr utilizando el identificador unico que se genera al hacer un commit:

```s
alanf@alanf:~/Alan/proyecto1$ git reset 3d96c76de2532ed97bddfda4ca8693dca7f58bf1 
```

Pero existen dos tipos de *reset*, esta el `reset hard` que nos devuelve TODO a un estado anterior (*siendo tambien el mas usual en usar...*) y `reset soft` el cual nos devuelve a la version anterior con la diferencia que lo que tengamos en *staging* sigue en *staging*, disponible para el siguiente commit.

```s
alanf@alanf:~/Alan/proyecto1$ git reset 3d96c76de2532ed97bddfda4ca8693dca7f58bf1 
--hard
```

```s
alanf@alanf:~/Alan/proyecto1$ git reset 3d96c76de2532ed97bddfda4ca8693dca7f58bf1 
--soft
```

Utilizaremos el comando `--hard`.

```s
alanf@alanf:~/Alan/proyecto1$ git reset 3d96c76de2532ed97bddfda4ca8693dca7f58bf1 --hard
HEAD is now at 3d96c76 este es un commit para agregar a github
```

Este comando debe usarse con precaucion debido a que elimina la version con la cual estabas trabajando para poder regresar a una version previa.
