# sanitas_technical_test
 Frontend technical test for sanitas
 
PRUEBA TÉCNICA

# Prueba Front

Dada la siguiente url
[https://i.picsum.photos/id/{ID_FOTO_INCREMENTAL}/500/500.jpg](https://i.picsum.photos/id/1/500/500)

## 1º Generar un Json de 4000 elementos

Generar un Array/Json random de 4000 elementos con la siguiente estructura

    [
        {
    	id: id_imagen,
    	photo: url_photo,
    	text: random_lorem_ipsum_text
    	},
    	.....
    ]

## 2º Pintar en pantalla los 4000 elementos

Mostrar los 4000 elementos en pantalla, el scroll debe de tener un rendimiento óptimo.
Se debe de mostrar la imagen y el texto random generado

## 3º Añadir Filtro

Añadir un filtro que permita buscar por el ID de la imagen y por el texto

## 4º Test unitarios, E2E y componentes

Se valorará el uso de test unitarios, E2E y componentes

## 5º Inicialización del proyecto

Bastará con inicializar un proyecto en blanco mediante el CLI de Ionic o el CLI de Angular dependiendo del puesto si es web o mobile.

Mobile
ionic start test_app blank

Web
ng new test_app

## 6º Dudas

Cualquier duda enviar mail a arquitecturamobile@sanitas.es

El proyecto se debe subir a algún repositorio publico (github, gitlab) para poder revisar la prueba
