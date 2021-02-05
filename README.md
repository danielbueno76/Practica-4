# Practica 4

Desarrollar el API que se ejecutará en el servidor de un servicio de venta de artículos de segunda mano llamado Nodepop.

## Comandos:

1. node run installDB = Inicialización de la base de datos
2. node run start = Ejecución de la web-api. Entorno de producción.
3. node run dev = Ejecución de la web-api con nodemon en localhost:3000. Entorno de desarrollo.

## API. Ejemplos

1. GET /api/advertisement = Obten todos los anuncios en formato json.
2. GET /api/advertisement/:id = Obten un anuncio con el id especificado en formato json.
3. POST /api/advertisement = añade un anuncio a la base de datos.
4. PUT /api/advertisement/:id = Modifica el anuncio con el id especificado.
5. DELETE /api/advertisement/:id = Borra el anuncio con el id especificado.
