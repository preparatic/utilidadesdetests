# Novedades PreparaTIC 26

- Adaptación de los temas al temario de la nueva convocatoria y redistribución de las preguntas de forma acorde.

- Revisión del funcionamiento de los tests ponderados. Ahora se dividen en 30 preguntas de los temas generales y 100 de los temas específicos, tal y como ya se hacía en los tests globales. La ponderación tiene en cuenta la frecuencia de aparición de preguntas en los exámenes oficiales en años previos, dando mayor importancia a las convocatorias recientes. Además, se ha mejorado el sistema de ponderación de temas y preguntas, para evitar que un tema aparezca más frecuentemente sólo por tener más preguntas asociadas.

- Preguntas mezcladas en los tests por bloques. Se ha revisado la generación de tests por bloque, de manera que ahora el total de preguntas de un bloque se mezclan antes de generar los test de ese bloque. Hasta ahora simplemente se encadenaban las preguntas de los temas y no había diferencia con respecto a ir haciendo secuencialmente los tests de los temas del bloque.

- Preguntas mezcladas en los tests por temas. Hasta ahora, se generaban siguiendo el orden alta en el repositorio de Preparatic, con lo que las preguntas más antiguas salían al principio y las nuevas cargadas en la última promoción salían siempre al final. Ahora se produce una mezcla muy útil para temas que hayan sido parcialmente actualizados.

- Preguntas mezcladas en los tests por años. Hasta ahora, se generaban siguiendo el orden de temas, apareciendo agrupadas las preguntas de un mismo tema. Ahora se produce una mezcla en las preguntas de cada año.

- Se ha realizado la siguiente revisión de preguntas:
    - Nuevas: 815
    - Corregidas: 79
    - Revisadas: 831
    - Eliminadas: 329

- Añadido test oficial de TIC A1 de 2017.

- Se ha cambiado a 130 el número de preguntas en los tests por temas, por bloques y por años, siguiendo las características del examen oficial.

*** 

# utilidadesdetests
Es el código con utilidades para la carga y generación de tests en Preparatic (www.preparatic.org).

La utilidad toma como entrada las hojas con los TEST especificados como entrada en el fichero de configuración config/config.properties y produce los ficheros de salida HTML correspondientes a la aplicación HTML en el directorio testV2.


```
# La hoja de calculo que contiene las preguntas. Puede haber varias separadas por espacios en blanco.
input.spreadsheetId=1PamaECosiCCAOyW8AoNTfOFW_i7sQ1VWFdoDpwOAmn0
input.spreadsheetRange=Preguntas!A2:U

# Hoja de calculo que contiene informacion sobre bloques, temas, y tematicas
input.spreadsheetMetaId=13EHFH2R7WzjIHd5ZYWHfoNM7NyCKNtNRIlJx9UITFAE
input.spreadsheetBloqueRange=Bloques!A2:E
input.spreadsheetTemaRange=Temas!A2:H
input.spreadsheetTematicaRange=Tematicas!A2:B
```

Una vez producidos los ficheros HTML, conjuntamente con las hojas css, las imágenes estáticas y el código javascript, este directorio contiene íntegramente la aplicación para la realización de tests a través de cualquier navegador compatible.


