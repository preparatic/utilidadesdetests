# Novedades Preparatic 28 Versión 01/02/2022

- Los IDs de pregunta, identificador visible en azul cuando se pulsa sobre “Ver respuesta”, se mantienen entre versión y versión de la base de preguntas.
- Se han realizado los siguientes cambios sobre la base de preguntas:
    - Nuevas: 106
    - Corregidas: 21
    - Revisadas: 45
    - Eliminadas: 4
- Se han revisado los siguientes temas:
    - 30
- Se han añadido los siguientes exámenes oficiales:
    - A1 GENERALITAT VALENCIANA TURNO LIBRE CONVOCATORIA 2018

# Novedades Preparatic 28 RELEASE 17/01/2022

- Revisión del funcionamiento de los tests. La ponderación tiene en cuenta la frecuencia actualizada de aparición de preguntas en los exámenes oficiales en años previos, dando mayor importancia a las convocatorias recientes.
- Reagrupación de preguntas de test por examen, cuerpo y año.
- Nueva gestión de recepción de dudas sobre preguntas del Tests. Si el aspirante cree que una pregunta no refleja la respuesta correcta puede dirigirse al equipo de Tests de Preparatic a través de un email a la siguiente cuenta de correo email: tests@preparatic.org (más info sobre los datos a aportar en aplicación de tests)
- Se ha realizado una profunda revisión de todas las preguntas, quedando de forma resumida:
    - Nuevas: 1.816
    - Corregidas: 502
    - Revisadas: 5.318
    - Eliminadas: 284
- Se han revisado los siguientes temas:
    - 1, 4, 5, 8, 11, 12, 13, 14. 15, 16, 17, 18, 19, 21, 22, 24, 26, 25, 27, 30, 31, 35, 37, 38, 39, 44, 45, 46, 48, 49, 51, 53, 54, 55, 56, 57, 61, 62, 65, 67, 68, 70, 76, 77, 78, 80, 81, 87, 91, 92, 96, 102, 105, 106, 107, 111, 116, 119, 120, 122, 123, 124, 125, 126, 128, 129, 130, 131 y 132
- Se han añadido los siguientes exámenes oficiales
    - EXAMEN A1 AGE 2019
    - EXAMEN A1 AGE 2019 (EXTRAORDINARIO)
    - EXAMEN CUERPO DE INGENIEROS SUPERIORES (TELECOMUNICACIONES) JCYL 2021
    - EXAMEN CUERPO DE INGENIEROS SUPERIORES (TELECOMUNICACIONES) JCYL Extraordinaria 2021
    - EXAMEN A2 AGE 2016
    - EXAMEN A2 AGE 2017
    - EXAMEN A2 AGE 2018
    - EXAMEN A2 AGE 2019
    - EXAMEN A1 JUNTA ANDALUCÍA 2019
    - EXAMEN TÉCNICO SUPERIOR DE SISTEMAS Y TECNOLOGÍAS DE LA INFORMACIÓN AYTO VALLADOLID 2021
    - EXAMEN A2 AYTO MADRID 2019
    - EXAMEN A1 AYTO MADRID 2021
    - EXAMEN A1 ANALISTAS CONGRESO 2021
    - EXAMEN TIC A1 CASTILLA LA MANCHA 2021

# Novedades PreparaTIC 27

- Revisión del funcionamiento de los tests. La ponderación tiene en cuenta la frecuencia actualizada de aparición de preguntas en los exámenes oficiales en años previos, dando mayor importancia a las convocatorias recientes.
- Reagrupación de preguntas de test por examen, cuerpo y año.
- Se ha realizado una profunda revisión de todas las preguntas, quedando de forma resumida:
	- Nuevas: 1.733
	- Corregidas: 915
	- Revisadas: 9.624
	- Eliminadas: 690
- Añadido además del test oficial de TIC A1 de la convocatoria 2018 (y el extraordinario):
    - Examen TIC A1 2016
    - Examen de Facultativos Superiores especialidad Tecnología de la Información para el Gobierno de Canarias (OEP 2018)
    - Examen Técnico/a Superior de Informática del Ayuntamiento de Albacete (OEP 2016)
    - Examen Cuerpo de Sistemas y Tecnologías de la Información de la Xunta de Galicia (OEP 2018, acceso libre)
    - Examen Cuerpo de Sistemas y Tecnologías de la Información de la Xunta de Galicia (OEP 2018, promoción interna)
    - Examen Ingenieros de Aplicaciones y Sistemas de Instituciones Sanitarias de la Conselleria de Sanidad de la Generalitat Valenciana (OEP 2016, acceso libre)

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


