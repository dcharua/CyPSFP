**Integrantes del equipo:**
* Daniel Charua
* Isaac Halabe
* Joan Andoni
* Mauricio Rico

### Introducción al Proyecto:

El objetivo principal del proyecto es poder adaptar la funcionalidad del proximo horario de clases para los profesores, de manera en que se pueda adjuntar un archivo con la información de los horarios y la aplicación te regresé un feedback con el horario y de ser requerido, los empalmes existentes.

A continuación se explicará más a detalle como es que se instala y utiliza la aplicación web.


### Quick start
**Asegurar que la versión de node sea >= 8.0**

```bash
# clonar el repositorio
# --depth 1 borra todos menos un commit
git clone --depth 1 https://github.com/dcharua/CyPSFP.git

# cambiar el directorio
cd CyPSFP

# install lo necesario con npm
npm install

# comenzar el servidor
npm start

# con Hot Module Replacement
npm run server:dev:hmr
```
Ir a  [http://0.0.0.0:3000](http://0.0.0.0:3000) o [http://localhost:3000](http://localhost:3000) en tu browser.

### watch y build
```bash
npm run watch
```

### para correr los unit tests
```bash
npm run test
```

### watch y correr los tests
```bash
npm run watch:test
```

### para los end-to-end tests
```bash
npm run e2e
```

### para el  Protractor's elementExplorer
```bash
npm run e2e:live
```

### build Docker
```bash
npm run build:docker
```
## Docker:

### 1. Instalar docker (diferente para cada sistema operativo)

### 2. Construir la imagen

En el folder principal:

`docker build -t nombre-ejemplo`

Para borrar imagenes intermedias que crea docker en el build:

`docker rmi -f $(docker images -f "dangling=true" -q)`

### 3. Correr la imagen

`docker run --name nombre-ejemplo -p 8080:80 nombre-ejemplo &`

Ahora puedes ir en tu browser al [localhost:8080](localhost:8080).

### Login al contenedor de Docker

`docker exec -t -i nombre-ejemplo /bin/bash`

## Uso del Programa:

Una vez que se logró instalar todo y el servidor funciona de manera correcta, la primera página debería de ser el login del usuario, de no tener un login todavía configurado se debe de :

1. Registrar un nuevo usuario en el boton de registro.
2. Entrar con el recién creado login en la ventana apropiada.
3. Una vez dentro del sitio se tiene la opción de adjuntar un archivo.
4. Al subir el archivo excel, automaticamente muestra los resultados en una conveniente tabla junto con los empalmes.
5. Para salir solo se le da click en logout. 

## Licencia:
 [MIT](/LICENSE)
