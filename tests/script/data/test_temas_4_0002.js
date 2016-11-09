/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 54 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;ndo podr&iacute;a utilizarse, en un proceso de decisi&oacute;n multicriterio discreta, el c&aacute;lculo de pesos por el m&eacute;todo de la entrop&iacute;a?:";
 choices[0]= new Array();
 choices[0][0] = "Cuando no se disponga previamente de la puntuaci&oacute;n de las alternativas para cada criterio";
 choices[0][1] = "Cuando el decisor quiera minimizar la subjetividad en la asignaci&oacute;n de pesos";
 choices[0][2] = "Cuando, tras la normalizaci&oacute;n, exista alguna puntuaci&oacute;n nula en alguno de los criterios";
 choices[0][3] = "Cuando el decisor quiera comparar los criterios de dos en dos para fijar mejor su jerarqu&iacute;a";
 answers[0] = choices[0][1];
 units[0] = "34";
 comments[0] = "Id Pregunta: 54. NULL";


//  Id pregunta: 68 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas atiende &uacute;nicamente al criterio de mayor peso y mayor puntuaci&oacute;n, resolviendo los empates con el siguiente de mayor peso?:";
 choices[1]= new Array();
 choices[1][0] = "Concordancia";
 choices[1][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[1][2] = "Ponderaci&oacute;n lineal";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][1];
 units[1] = "34";
 comments[1] = "Id Pregunta: 68. NULL";


//  Id pregunta: 71 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas ignora la cuant&iacute;a de la diferencia y s&oacute;lo se&ntilde;ala si existe o no?:";
 choices[2]= new Array();
 choices[2][0] = "M&eacute;todo Promethee";
 choices[2][1] = "Utilidad multiatributo";
 choices[2][2] = "Permutaci&oacute;n";
 choices[2][3] = "Ninguno de los anteriores";
 answers[2] = choices[2][0];
 units[2] = "34";
 comments[2] = "Id Pregunta: 71. ";


//  Id pregunta: 83 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; se entiende por outsourcing?:";
 choices[3]= new Array();
 choices[3][0] = "Cuando se ve agotada la capacidad del sistema";
 choices[3][1] = "Cuando las fuentes de informaci&oacute;n del sistema son externas al mismo";
 choices[3][2] = "Cuando la provisi&oacute;n de equipos o servicios del sistema es realizada por terceros";
 choices[3][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[3] = choices[3][2];
 units[3] = "35";
 comments[3] = "Id Pregunta: 83. NULL";


//  Id pregunta: 118 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Dentro de la teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de la entrop&iacute;a se utiliza para:";
 choices[4]= new Array();
 choices[4][0] = "Asignar un peso a cada alternativa";
 choices[4][1] = "Normalizar las puntuaciones brutas otorgadas";
 choices[4][2] = "Ordenar las alternativas";
 choices[4][3] = "Suavizar la subjetividad del m&eacute;todo directo de asignaci&oacute;n de pesos";
 answers[4] = choices[4][3];
 units[4] = "34";
 comments[4] = "Id Pregunta: 118. NULL";


//  Id pregunta: 124 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El  m&eacute;todo de ordenaci&oacute;n de alternativas que incorpora la posibilidad de valorar el riesgo y la incertidumbre es:";
 choices[5]= new Array();
 choices[5][0] = "El m&eacute;todo Promethee";
 choices[5][1] = "Utilidad multiatributo";
 choices[5][2] = "El m&eacute;todo de permutaci&oacute;n";
 choices[5][3] = "Ninguno de los restantes";
 answers[5] = choices[5][1];
 units[5] = "34";
 comments[5] = "Id Pregunta: 124. NULL";


//  Id pregunta: 178 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En el contexto de la capacidad y rendimiento de los sistemas:";
 choices[6]= new Array();
 choices[6][0] = "El equipo encargado de la gesti&oacute;n de capacidad estar&aacute; formado &uacute;nica y exclusivamente por usuarios muy experimentados en el negocio de la organizaci&oacute;n";
 choices[6][1] = "Una vez obtenido el visto bueno de la direcci&oacute;n al plan de desarrollo e implantaci&oacute;n, se deber&aacute; abordar el estudio de viabilidad";
 choices[6][2] = "El equipo encargado de la gesti&oacute;n de capacidad debe ser permanente en el tiempo";
 choices[6][3] = "Como consecuencia del abaratamiento de los equipos f&iacute;sicos la gesti&oacute;n de capacidad y del rendimiento es trivial";
 answers[6] = choices[6][2];
 units[6] = "35";
 comments[6] = "Id Pregunta: 178. NULL";


//  Id pregunta: 225 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En la teor&iacute;a de la decisi&oacute;n multicriterio, un criterio es:";
 choices[7]= new Array();
 choices[7][0] = "Las diversas opciones entre las que queremos seleccionar una";
 choices[7][1] = "Aspectos que nos interesan de cada opci&oacute;n";
 choices[7][2] = "Las evaluaciones que damos a cada opci&oacute;n";
 choices[7][3] = "La importancia que le damos a cada aspecto seg&uacute;n nuestro criterio";
 answers[7] = choices[7][1];
 units[7] = "34";
 comments[7] = "Id Pregunta: 225. ";


//  Id pregunta: 227 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En las alternativas de decisi&oacute;n respecto al equipamiento HW y SW: ";
 choices[8]= new Array();
 choices[8][0] = "En la licencia de red, la cesi&oacute;n de uso del producto se extiende a todos o parte de los usuarios conectados a una red de &aacute;rea local";
 choices[8][1] = "La licencia flotante se refiere a la determinaci&oacute;n de la facturaci&oacute;n en funci&oacute;n del n&uacute;mero de usuarios simult&aacute;neos autorizados al uso del producto";
 choices[8][2] = "Las opciones a) y b) son correctas";
 choices[8][3] = "Las opciones a) y b) no son correctas";
 answers[8] = choices[8][2];
 units[8] = "35";
 comments[8] = "Id Pregunta: 227. NULL";


//  Id pregunta: 253 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Entre las variables que habitualmente se usan para evaluar el comportamiento de un sistema inform&aacute;tico se encuentra el tama&ntilde;o del quantum definido como:";
 choices[9]= new Array();
 choices[9][0] = "La cantidad de tiempo de uso ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[9][1] = "El intervalo de tiempo durante el cu&aacute;l se toman medidas para determinar el conjunto de trabajos de un programa en un entorno de memoria virtual paginada";
 choices[9][2] = "El porcentaje de tiempo que los distintos dispositivos del sistema se usan en tareas no directamente imputables a ninguno de los trabajos en curso";
 choices[9][3] = "El porcentaje de tiempo de uso de un componente del sistema inform&aacute;tico";
 answers[9] = choices[9][0];
 units[9] = "35";
 comments[9] = "Id Pregunta: 253. NULL";


//  Id pregunta: 326 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  Cuando utilizamos las siglas SSD-AAPP, nos estamos refiriendo a:";
 choices[10]= new Array();
 choices[10][0] = "Un sistema de informaci&oacute;n dedicado al an&aacute;lisis de redes de comunicaciones.";
 choices[10][1] = "Una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para ayudar a la elecci&oacute;n en la contrataci&oacute;n de bienes o servicios inform&aacute;ticos.";
 choices[10][2] = "Una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para decidir si debemos contratar un desarrollo a una empresa externa o hacerlo con medios propios.";
 choices[10][3] = "Ninguna de las anteriores";
 answers[10] = choices[10][1];
 units[10] = "34";
 comments[10] = "Id Pregunta: 326. Modificado enunciado (antes SSD-CIABSI) por JCED Preparatic XVII";


//  Id pregunta: 363 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Los beneficios en las inversiones en tecnolog&iacute;as de la informaci&oacute;n se pueden dividir en:";
 choices[11]= new Array();
 choices[11][0] = "Mejoras de productividad y mejoras financieras";
 choices[11][1] = "Mejoras de gesti&oacute;n, mejoras de organizaci&oacute;n y mejoras de competitividad";
 choices[11][2] = "Todas las anteriores son correctas";
 choices[11][3] = "Ninguna de las anteriores es correcta";
 answers[11] = choices[11][2];
 units[11] = "38";
 comments[11] = "Id Pregunta: 363. ";


//  Id pregunta: 394 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Para la determinaci&oacute;n del rendimiento de un sistema inform&aacute;tico:";
 choices[12]= new Array();
 choices[12][0] = "El tiempo de presencia es el que transcurre desde el instante en que un programa entra en el sistema hasta que la respuesta empieza a aparecer en el terminal";
 choices[12][1] = "El solapamiento (overlap) es el porcentaje de tiempo de CPU en que la CPU atiende al sistema operativo y a las funciones de supervisi&oacute;n y no a las funciones de usuario";
 choices[12][2] = "La capacidad de un recurso es el porcentaje de tiempo durante el cual est&aacute; a disposici&oacute;n de los usuarios";
 choices[12][3] = "La disponibilidad se puede cuantificar por medio de los valores del MTBF (tiempo medio entre fallos) y del MTTR (tiempo medio de reparaciones)";
 answers[12] = choices[12][3];
 units[12] = "35";
 comments[12] = "Id Pregunta: 394. NULL";


//  Id pregunta: 395 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Para planificaci&oacute;n de la capacidad de los sistemas se usan las metodolog&iacute;as:";
 choices[13]= new Array();
 choices[13][0] = "Proyecci&oacute;n lineal y teor&iacute;a de colas";
 choices[13][1] = "Simulaci&oacute;n";
 choices[13][2] = "Benchmark";
 choices[13][3] = "Todas las anteriores";
 answers[13] = choices[13][3];
 units[13] = "35";
 comments[13] = "Id Pregunta: 395. NULL";


//  Id pregunta: 418 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Se entiende por demanda latente en los recursos de un sistemas:";
 choices[14]= new Array();
 choices[14][0] = "Cuando la carga de trabajo se expande hasta ocupar la capacidad existente";
 choices[14][1] = "Cuando nunca hay espacio suficiente en disco";
 choices[14][2] = "Ambas son v&aacute;lidas";
 choices[14][3] = "Ninguna es v&aacute;lida";
 answers[14] = choices[14][2];
 units[14] = "35";
 comments[14] = "Id Pregunta: 418. NULL";


//  Id pregunta: 491 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes se puede decir que no es una caracter&iacute;stica de los Benchmark?";
 choices[15]= new Array();
 choices[15][0] = "Pruebas entre productos de distintas compa&ntilde;&iacute;as";
 choices[15][1] = "Suelen basarse en el tiempo necesario para la ejecuci&oacute;n de un programa";
 choices[15][2] = "Metodolog&iacute;a para comparar distintos sistemas inform&aacute;ticos";
 choices[15][3] = "Una herramienta para la mejora de rendimiento de un sistema";
 answers[15] = choices[15][3];
 units[15] = "35";
 comments[15] = "Id Pregunta: 491. NULL";


//  Id pregunta: 536 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  &iquest;En qu&eacute; fase del ciclo de vida se decide entre desarrollar o adquirir una aplicaci&oacute;n?";
 choices[16]= new Array();
 choices[16][0] = "An&aacute;lisis";
 choices[16][1] = "Dise&ntilde;o ";
 choices[16][2] = "Estudio de viabilidad";
 choices[16][3] = "Programaci&oacute;n";
 answers[16] = choices[16][2];
 units[16] = "35";
 comments[16] = "Id Pregunta: 536. NULL";


//  Id pregunta: 623 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Los m&eacute;todos especialmente adecuados para problemas de DMD en los que como resultado se busque o sea suficiente obtener un subconjunto de alternativas aceptables son:";
 choices[17]= new Array();
 choices[17][0] = "m&eacute;todos de concordancia";
 choices[17][1] = "m&eacute;todos de permutaci&oacute;n";
 choices[17][2] = "metodos lexicogr&aacute;ficos";
 choices[17][3] = "m&eacute;todos de la entrop&iacute;a";
 answers[17] = choices[17][0];
 units[17] = "34";
 comments[17] = "Id Pregunta: 623. ";


//  Id pregunta: 624 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  El m&eacute;todo en el que con criterios el decisor estima una matriz (nxn) A=(a,), donde a es la medida subjetiva de la importancia relativa del criterio i frente al j en una escala normalizada de 1 (igual de importante) a 9 (absolutamente m&aacute;s importante) es:";
 choices[18]= new Array();
 choices[18][0] = "m&eacute;todo Delphi";
 choices[18][1] = "m&eacute;todo de las utilidades relativas";
 choices[18][2] = "m&eacute;todo de la entrop&iacute;a";
 choices[18][3] = "AHP (Analytic Hierarchy Process)";
 answers[18] = choices[18][3];
 units[18] = "34";
 comments[18] = "Id Pregunta: 624. ";


//  Id pregunta: 637 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Respecto a los m&eacute;todos del Payback, VAN y TIR, la respuesta correcta es:";
 choices[19]= new Array();
 choices[19][0] = "El m&eacute;todo del Payback sirve para determinar la rentabilidad exigida a una inversi&oacute;n.";
 choices[19][1] = "Los m&eacute;todos del VAN y el TIR siempre conducen a resultados coincidentes.";
 choices[19][2] = "Los m&eacute;todos del Payback y el VAN son similares (comparan los flujos de caja con la inversi&oacute;n inicial), pero el Payback no tiene en cuenta el cambio del valor del dinero con el tiempo y el VAN s&iacute;.";
 choices[19][3] = "El criterio de rentabilidad del TIR es: rentabilidad exigida &gt; TIR =&gt; inversi&oacute;n rentable.";
 answers[19] = choices[19][2];
 units[19] = "38";
 comments[19] = "Id Pregunta: 637. ";


//  Id pregunta: 657 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  El Sistema de Soporte a la Decisi&oacute;n SSD-AAPP es una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para:";
 choices[20]= new Array();
 choices[20][0] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica relacionada con Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones";
 choices[20][1] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s del Cat&aacute;logo de Bienes de Adquisici&oacute;n Centralizada";
 choices[20][2] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica";
 choices[20][3] = "Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en un proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s de un procedimiento negociado por exclusividad";
 answers[20] = choices[20][2];
 units[20] = "34";
 comments[20] = "Id Pregunta: 657. ";


//  Id pregunta: 4441 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  Seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico, el procedimiento de adjudicaci&oacute;n en el que solo podr&aacute;n participar los empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, hayan sido seleccionados por el &oacute;rgano de contrataci&oacute;n, se llama:";
 choices[21]= new Array();
 choices[21][0] = "Procedimiento Negociado.";
 choices[21][1] = "Procedimiento Restringido.";
 choices[21][2] = "Procedimiento Cerrado";
 choices[21][3] = "Procedimiento Abierto.";
 answers[21] = choices[21][1];
 units[21] = "41";
 comments[21] = "Id Pregunta: 4441. ";


//  Id pregunta: 4443 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  &iquest;Que parte del expediente de contrataci&oacute;n incluye los pactos y condiciones que definen los derechos y obligaciones de cada una de las partes del contrato?";
 choices[22]= new Array();
 choices[22][0] = "El Pliego de Prescripciones T&eacute;cnicas";
 choices[22][1] = "El Pliego T&eacute;cnico de Referencia";
 choices[22][2] = "El Pliego de Cl&aacute;usulas Administrativas";
 choices[22][3] = "La Memoria Justificativa";
 answers[22] = choices[22][2];
 units[22] = "41";
 comments[22] = "Id Pregunta: 4443. ";


//  Id pregunta: 4450 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  Una de las medidas que se utiliza para cuantificar la rentabilidad de las inversiones en los proyectos TIC, es el VAN (valor actual neto), que se podr&iacute;a definir como:";
 choices[23]= new Array();
 choices[23][0] = "Ratio ente ingreso neto y costes";
 choices[23][1] = "Tiempo necesario para que el proyecto recupere el capital invertido.";
 choices[23][2] = "Tasa de descuento necesaria para que el valor actual sea cero.";
 choices[23][3] = "El valor actual de todos los ingresos menos el valor actual de todos los desembolsos de un proyecto, supuesto un determinado tipo de inter&eacute;s.";
 answers[23] = choices[23][3];
 units[23] = "35";
 comments[23] = "Id Pregunta: 4450. NULL";


//  Id pregunta: 4783 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  En cual de los siguientes casos se podr&aacute; utilizar el procedimiento negociado";
 choices[24]= new Array();
 choices[24][0] = "Cuando se trate de bienes o servicios declarados de contrataci&oacute;n centralizada.";
 choices[24][1] = "En casos de imperiosa urgencia.";
 choices[24][2] = "Cuando no se presenten proposiciones en respuesta a un procedimiento abierto o restringido o &eacute;stas sean irregulares o inaceptables.";
 choices[24][3] = "En todos los casos anteriores";
 answers[24] = choices[24][3];
 units[24] = "41";
 comments[24] = "Id Pregunta: 4783. NULL";


//  Id pregunta: 4887 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  Son &oacute;rganos de contrataci&oacute;n";
 choices[25]= new Array();
 choices[25][0] = "Los Ministros y los Secretarios de Estado";
 choices[25][1] = "Los representantes legales de los Organismos aut&oacute;nomos y dem&aacute;s Entidades p&uacute;blicas estatales y los Directores Generales de las distintas Entidades gestoras y Servicios comunes de la Seguridad Social.";
 choices[25][2] = "a) y b) son correctas";
 choices[25][3] = "El Subsecretario de Econom&iacute;a y Hacienda";
 answers[25] = choices[25][2];
 units[25] = "41";
 comments[25] = "Id Pregunta: 4887. Art. 316 RD Legislativo 3/2011";


//  Id pregunta: 4889 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico, el arrendamiento de un ordenador tiene la categor&iacute;a de:";
 choices[26]= new Array();
 choices[26][0] = "Contrato de &quot;leasing&quot;";
 choices[26][1] = "Contrato de servicios";
 choices[26][2] = "Contrato de suministros";
 choices[26][3] = "Contrato de arrendamiento";
 answers[26] = choices[26][2];
 units[26] = "41";
 comments[26] = "Id Pregunta: 4889. ";


//  Id pregunta: 4892 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  El plazo de ejecuci&oacute;n de un contrato para el desarrollo de un sistema, figurar&aacute; en:";
 choices[27]= new Array();
 choices[27][0] = "El pliego de prescripciones t&eacute;cnicas.";
 choices[27][1] = "El pliego de cl&aacute;usulas adminsitrativas particulares.";
 choices[27][2] = "Las cl&aacute;usulas especiales de contrataci&oacute;n.";
 choices[27][3] = "Los criterios de adjudicaci&oacute;n del contrato.";
 answers[27] = choices[27][1];
 units[27] = "41";
 comments[27] = "Id Pregunta: 4892. ";


//  Id pregunta: 4895 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  Seg&uacute;n el RD Legislativo 3/2011 de contratos del sector p&uacute;blico, son procedimientos de adjudicaci&oacute;n de los contratos:";
 choices[28]= new Array();
 choices[28][0] = "El ordinario, el de urgencia y el de emergencia.";
 choices[28][1] = "La adjudicaci&oacute;n directa, el concurso y la subasta.";
 choices[28][2] = "El procedimiento abierto, el restringido y el negociado.";
 choices[28][3] = "El procedimiento general y el simplificado";
 answers[28] = choices[28][2];
 units[28] = "41";
 comments[28] = "Id Pregunta: 4895. ";


//  Id pregunta: 4896 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  Cuando, a causa de su especificidad t&eacute;cnica, el suministro de un producto o la prestaci&oacute;n de un servicio s&oacute;lo pueda encomendarse a un &uacute;nico proveedor, el procedimiento de adjudicaci&oacute;n del contrato ser&aacute;:";
 choices[29]= new Array();
 choices[29][0] = "Negociado";
 choices[29][1] = "Restringido";
 choices[29][2] = "Directo";
 choices[29][3] = "Por subasta";
 answers[29] = choices[29][0];
 units[29] = "41";
 comments[29] = "Id Pregunta: 4896. ";


//  Id pregunta: 4966 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  La selecci&oacute;n de proyectos alternativos mediante t&eacute;cnicas tipo VAN:";
 choices[30]= new Array();
 choices[30][0] = "Calcula el valor actual neto de cada proyecto, computando los flujos de gastos e ingresos.";
 choices[30][1] = "Itera los valores esperados de cada proyecto hasta alcanzar un ranking objetivo mediante el algoritmo ValueAdded Nested.";
 choices[30][2] = "Establece una red (Virtual Area Network) parametrizada que analiza el impacto de cada proyecto en laOrganizaci&oacute;n.";
 choices[30][3] = "Establece una serie de ratios entre los gastos previstos de Cap&iacute;tulo 6 y Cap&iacute;tulo 2 para minimizar las potencialestransferencias futuras y evitar problemas con la Intervenci&oacute;n Delegada de Hacienda.";
 answers[30] = choices[30][0];
 units[30] = "38";
 comments[30] = "Id Pregunta: 4966. Examen TIC B 2007";


//  Id pregunta: 5423 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;A qu&eacute; se refiere EFFORTS?";
 choices[31]= new Array();
 choices[31][0] = "Proyecto dirigido a las administraciones europeas, cuyo objetivo es la mejora de su eficiencia mediante la adopci&oacute;n de nuevas tecnolog&iacute;as";
 choices[31][1] = "Proyecto europeo para la extensi&oacute;n de la red de banda ancha";
 choices[31][2] = "Proyecto europeo para aunar pol&iacute;ticas de contrataci&oacute;n de personal";
 choices[31][3] = "Proyecto europeo para aumentar la eficiencia en el uso de las computadoras en el &aacute;mbito de las administraciones p&uacute;blicas europeas";
 answers[31] = choices[31][3];
 units[31] = "41";
 comments[31] = "Id Pregunta: 5423. Castilla y Le&oacute;n";


//  Id pregunta: 5585 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;En qu&eacute; tipos de contratos p&uacute;blicos es exigible la Clasificaci&oacute;n del empresario, seg&uacute;n el RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[32]= new Array();
 choices[32][0] = "En contratos de concesi&oacute;n de obras publicas &uacute;nicamente";
 choices[32][1] = "En los nuevos contratos de colaboraci&oacute;n entre el sector p&uacute;blico y privado, siempre que la cuant&iacute;a del mismo sea superior a 100.000 euros";
 choices[32][2] = "En los contratos de obras de importe igual o superior a 500.000 &euro;. Para los contratos de servicios no ser&aacute; exigible la clasificaci&oacute;n del empresario.";
 choices[32][3] = "La figura de la Clasificaci&oacute;n se ha suprimido en la nueva Ley";
 answers[32] = choices[32][2];
 units[32] = "41";
 comments[32] = "Id Pregunta: 5585. Art. 65.1.b) del RD Legislativo 3/2011, modificado por la Ley 25/2013 que elimina la clasificaci&oacute;n en contratos de servicios.";


//  Id pregunta: 5590 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Qu&eacute; tipos de tramitaciones se contemplan en el RD legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[33]= new Array();
 choices[33][0] = "Ordinarias, y urgentes";
 choices[33][1] = "Ordinarias, urgentes y de emergencia";
 choices[33][2] = "Ordinarias y con exigencia de tiempo reducido";
 choices[33][3] = "Ordinarias, urgentes y con restricci&oacute;n temporal";
 answers[33] = choices[33][1];
 units[33] = "41";
 comments[33] = "Id Pregunta: 5590. ";


//  Id pregunta: 5594 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;Qu&eacute; figura se incluy&oacute; en la ley de contratos del sector p&uacute;blico, 30/2007?";
 choices[34]= new Array();
 choices[34][0] = "El representante de adjudicaci&oacute;n";
 choices[34][1] = "El responsable de adjudicaci&oacute;n";
 choices[34][2] = "El responsable del contrato";
 choices[34][3] = "El representante de contrato";
 answers[34] = choices[34][2];
 units[34] = "41";
 comments[34] = "Id Pregunta: 5594. ";


//  Id pregunta: 5595 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Los sistemas din&aacute;micos de contrataci&oacute;n incluidos en la ley 30/2007...";
 choices[35]= new Array();
 choices[35][0] = "Son solo para contratos de obras";
 choices[35][1] = "Se desarrollar&aacute; el sistema y la adjudicaci&oacute;n por medios telem&aacute;ticos, inform&aacute;ticos y electr&oacute;nicos, exclusivamente";
 choices[35][2] = "La duraci&oacute;n de un sistema de contrataci&oacute;n din&aacute;mico no podr&aacute; exceder, en t&eacute;rminos generales, los 2 a&ntilde;os";
 choices[35][3] = "Se podr&aacute; cargar a las empresas un 0.5% del montante total del contrato, en concepto de participaci&oacute;n";
 answers[35] = choices[35][1];
 units[35] = "41";
 comments[35] = "Id Pregunta: 5595. ";


//  Id pregunta: 5762 AÃ±o de creación de pregunta: 2001-01-01
 questions[36]= "37)  La Tasa Interna de Retorno (TIR) de una inversi&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Seg&uacute;n el criterio del TIR, una inversi&oacute;n ser&aacute; efectuable cuando su rentabilidad esperada sea superior a la rentabilidad exigida";
 choices[36][1] = "Es el valor del tipo de descuento que hace que el Valor Actual Neto (VAN) de una inversi&oacute;n sea igual a cero.";
 choices[36][2] = "El TIR indica la rentabilidad relativa, mientras que el VAN indica la rentabilidad absoluta de la inversi&oacute;n en unidades monetarias";
 choices[36][3] = "Todas las anteriores son ciertas";
 answers[36] = choices[36][3];
 units[36] = "38";
 comments[36] = "Id Pregunta: 5762. NULL";


//  Id pregunta: 5765 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos de normalizaci&oacute;n de puntuaciones no mantiene la proporcionalidad entre puntuaciones directas y normalizadas?";
 choices[37]= new Array();
 choices[37][0] = "Fracci&oacute;n del ideal";
 choices[37][1] = "Fracci&oacute;n de la suma";
 choices[37][2] = "Fracci&oacute;n del m&aacute;ximo";
 choices[37][3] = "Todas las anteriores mantienen la proporcionalidad";
 answers[37] = choices[37][0];
 units[37] = "34";
 comments[37] = "Id Pregunta: 5765. ";


//  Id pregunta: 5767 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de ordenaci&oacute;n de alternativas basado en permutaciones?";
 choices[38]= new Array();
 choices[38][0] = "TOPSIS";
 choices[38][1] = "PROMETHEE";
 choices[38][2] = "ELECTRE";
 choices[38][3] = "QUALIFLEX";
 answers[38] = choices[38][3];
 units[38] = "34";
 comments[38] = "Id Pregunta: 5767. ";


//  Id pregunta: 5802 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  &iquest;C&uacute;al deber&iacute;a ser un criterio a tener en cuenta para adquirir nuevo hardware?";
 choices[39]= new Array();
 choices[39][0] = "Cuando hay presupuesto suficiente para la adquisici&oacute;n.";
 choices[39][1] = "Cuando la vida esperada supera el periodo de amortizaci&oacute;n.";
 choices[39][2] = "Cuando no hay o son reducidos los riesgos de obsolescencia.";
 choices[39][3] = "Todas las anteriores son ciertas.";
 answers[39] = choices[39][3];
 units[39] = "35";
 comments[39] = "Id Pregunta: 5802. NULL";


//  Id pregunta: 5807 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l no es en general cierto a la hora de tomar una decisi&oacute;n sobre adquirir o desarrollar a medida un software?";
 choices[40]= new Array();
 choices[40][0] = "Si existe un software que satisface los requisitos aunque requiere alguna adaptaci&oacute;n deber&iacute;amos prodecer con cuidado a la hora de adquirirlo, ya que el coste de modificar el software podr&iacute;a superar el coste de desarrollarlo a medida.";
 choices[40][1] = "Si existe un software que satisface los requisitos aunque requiere alguna adaptaci&oacute;n deber&iacute;amos adquirirlo, ya que el coste de modificar el software es siempre inferior al coste de desarrollarlo a medida.";
 choices[40][2] = "Si existe un software que satisface los requisitos deber&iacute;amos adquirirlo, ya que el coste de desarrollar un software equivalente ser&aacute; en general mayor que el la adquisici&oacute;n.";
 choices[40][3] = "Si existe un software que satisface los requisitos deber&iacute;amos tener en cuenta tambi&eacute;n el coste que supone el mantenimiento del mismo para los a&ntilde;os siguientes, ya que en muchos productos comerciales el coste del mantenimiento suele ser un gasto importante.";
 answers[40] = choices[40][1];
 units[40] = "35";
 comments[40] = "Id Pregunta: 5807. NULL";


//  Id pregunta: 5810 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  Indique la respuesta correcta respecto al RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico";
 choices[41]= new Array();
 choices[41][0] = "Regula la subasta electr&oacute;nica";
 choices[41][1] = "Proh&iacute;be la subasta electr&oacute;nica";
 choices[41][2] = "Suprime la adjudicaci&oacute;n directa";
 choices[41][3] = "No menciona la subasta electr&oacute;nica";
 answers[41] = choices[41][0];
 units[41] = "41";
 comments[41] = "Id Pregunta: 5810. MAP 2008 A1";


//  Id pregunta: 5811 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  &iquest;Qu&eacute; es, seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico, el Perfil del Contratante (art&iacute;culo 53)?";
 choices[42]= new Array();
 choices[42][0] = "Un sitio web del que debe disponer cualquier licitador que quiera contratar con el sector p&uacute;blico";
 choices[42][1] = "La Plataforma de Contrataci&oacute;n del Sector P&uacute;blico";
 choices[42][2] = "Los sitios web de los Departamentos Ministeriales";
 choices[42][3] = "Contendr&aacute; la informaci&oacute;n relativa a la actividad contractual del &oacute;rgano de contrataci&oacute;n y su forma de acceso deber&aacute; especificarse en las web institucionales de los entes del sector p&uacute;blico.";
 answers[42] = choices[42][3];
 units[42] = "41";
 comments[42] = "Id Pregunta: 5811. ";


//  Id pregunta: 5812 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  &iquest;D&oacute;nde NO es necesario especificar la forma de acceso al Perfil del Contratante (art&iacute;culo 53.1 RD Legislativo 3/2011)?";
 choices[43]= new Array();
 choices[43][0] = "En las p&aacute;ginas Web institucionales que mantengan los entes del sector p&uacute;blico";
 choices[43][1] = "En el Bolet&iacute;n Oficial del Estado";
 choices[43][2] = "En la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico";
 choices[43][3] = "En los pliegos y anuncions de licitaci&oacute;n";
 answers[43] = choices[43][1];
 units[43] = "41";
 comments[43] = "Id Pregunta: 5812. ";


//  Id pregunta: 5813 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  El sistema inform&aacute;tico que soporte el perfil de contratante deber&aacute; contar con un dispositivo que acredite (art&iacute;culo 53.3 RD Legislativo 3/2011):";
 choices[44]= new Array();
 choices[44][0] = "El responsable de la informaci&oacute;n publicada";
 choices[44][1] = "El momento de inicio de la difusi&oacute;n p&uacute;blica de la informaci&oacute;n";
 choices[44][2] = "Los plazos que hay que cumplir en el procedimiento";
 choices[44][3] = "La fecha y hora exactas de la adjudicaci&oacute;n de un contrato";
 answers[44] = choices[44][1];
 units[44] = "41";
 comments[44] = "Id Pregunta: 5813. ";


//  Id pregunta: 5814 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  &iquest;Qu&eacute; deber&aacute; publicarse, en todo caso, en el perfil de contratante, seg&uacute;n el RD Legislativo 3/2011 de Contatos del Sector P&uacute;blico(art&iacute;culo 53.2)?";
 choices[45]= new Array();
 choices[45][0] = "Las adjudicaciones de los contratos";
 choices[45][1] = "Los anuncios de licitaci&oacute;n";
 choices[45][2] = "La adjudicaci&oacute;n provisional de los contratos";
 choices[45][3] = "Las licitaciones abiertas";
 answers[45] = choices[45][2];
 units[45] = "41";
 comments[45] = "Id Pregunta: 5814. NULL";


//  Id pregunta: 5816 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  &iquest;Qu&eacute; NO es cierto de la subasta electr&oacute;nica, seg&uacute;n se desarrolla en RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico (art&iacute;culo 148)?";
 choices[46]= new Array();
 choices[46][0] = "Se basar&aacute; en variaciones referidas al precio o a valores de los elementos de la oferta que sean cuantificables y susceptibles de ser expresados en cifras o pocentajes";
 choices[46][1] = "Los &oacute;rganos de contrataci&oacute;n deber&aacute;n indicarlo en el anuncio de licitaci&oacute;n";
 choices[46][2] = "La subasta se iniciar&aacute; el primer d&iacute;a h&aacute;bil siguiente a la finalizaci&oacute;n del plazo de recepci&oacute;n de las ofertas";
 choices[46][3] = "Se deber&aacute; indicar la f&oacute;rmula matem&aacute;tica que se utilizar&aacute; para la reclasificaci&oacute;n autom&aacute;tica de las ofertas";
 answers[46] = choices[46][2];
 units[46] = "41";
 comments[46] = "Id Pregunta: 5816. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";


//  Id pregunta: 5817 AÃ±o de creación de pregunta: 2009-01-01
 questions[47]= "48)  &iquest;Qu&eacute; NO es cierto de la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico (art&iacute;culo 334 RD Legislativo 3/2011)?";
 choices[47]= new Array();
 choices[47][0] = "El acceso de los interesados se efectuar&aacute; a trav&eacute;s de un portal &uacute;nico";
 choices[47][1] = "Las Comunidades Aut&oacute;nomas y las Entidades Locales deber&aacute;n dar publicidad a sus procedimientos de contrataci&oacute;n a trav&eacute;s de la Plataforma de Contrataci&oacute;n del Estado";
 choices[47][2] = "Es una plataforma electr&oacute;nica que permite dar publicidad a trav&eacute;s de Internet de los contratos del sector p&uacute;blico";
 choices[47][3] = "La publicaci&oacute;n de anuncios y otra informaci&oacute;n relativa a los contratos en la plataforma surtir&aacute; los efectos previstos en la ley";
 answers[47] = choices[47][1];
 units[47] = "41";
 comments[47] = "Id Pregunta: 5817. ";


//  Id pregunta: 5835 AÃ±o de creación de pregunta: 2009-01-01
 questions[48]= "49)  Las caracter&iacute;sticas del m&eacute;todo Delphi son";
 choices[48]= new Array();
 choices[48][0] = "Confidencialidad, integridad del grupo y disponibilidad";
 choices[48][1] = "Anonimato, realimentaci&oacute;n controlada y respuesta del grupo de forma estad&iacute;stica";
 choices[48][2] = "Criticidad, autenticaci&oacute;n del grupo y consistencia";
 choices[48][3] = "Convergencia, coherencia del grupo y salvaguarda";
 answers[48] = choices[48][1];
 units[48] = "34";
 comments[48] = "Id Pregunta: 5835. MAP 2008 A1";


//  Id pregunta: 5841 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  Indique la respuesta FALSA en relaci&oacute;n con el perfil de contratante regulado en el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico:";
 choices[49]= new Array();
 choices[49][0] = "Los &oacute;rganos de contrataci&oacute;n difundir&aacute;n, a trav&eacute;s de Internet, su perfil de contratante";
 choices[49][1] = "La forma de acceso al perfil de contratante deber&aacute; especificarse en la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico";
 choices[49][2] = "La forma de acceso al perfil de contratante deber&aacute; especificarse en los tablones de anuncios del Ministerio correspondiente";
 choices[49][3] = "Deber&aacute; publicarse en el perfil de contratante la adjudicaci&oacute;n provisional de los contratos";
 answers[49] = choices[49][2];
 units[49] = "41";
 comments[49] = "Id Pregunta: 5841. MAP 2008 A1";


//  Id pregunta: 5886 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  El m&eacute;todo de Saaty &oacute; AHP:";
 choices[50]= new Array();
 choices[50][0] = "Es relativo a accesibilidad web";
 choices[50][1] = "Es relativo a la decisi&oacute;n multicriterio";
 choices[50][2] = "Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n";
 choices[50][3] = "Se refiere al env&iacute;o de datos a un centro de respaldo";
 answers[50] = choices[50][1];
 units[50] = "34";
 comments[50] = "Id Pregunta: 5886. MAP 2008 A1";


//  Id pregunta: 5901 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  Indique qu&eacute; concepto NO interviene en el m&eacute;todo de ponderaci&oacute;n lineal:";
 choices[51]= new Array();
 choices[51][0] = "Puntuaciones normalizadas";
 choices[51][1] = "Factor de ponderaci&oacute;n de los criterios";
 choices[51][2] = "Coeficiente de concordancia";
 choices[51][3] = "Funci&oacute;n de valor o de evaluaci&oacute;n";
 answers[51] = choices[51][2];
 units[51] = "34";
 comments[51] = "Id Pregunta: 5901. MAP 2008 A1";


//  Id pregunta: 6101 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Por raz&oacute;n de su cuant&iacute;a, &iquest;en qu&eacute; contratos de objeto inform&aacute;tico se precisa autorizaci&oacute;n del Consejo de Ministros para poder celebrar el contrato?";
 choices[52]= new Array();
 choices[52][0] = "Cuando su cuant&iacute;a es igual o superior a 10 millones de euros.";
 choices[52][1] = "Cuando su cuant&iacute;a es igual o superior a 12 millones de euros.";
 choices[52][2] = "Cuando su cuant&iacute;a es igual o superior a 15 millones de euros.";
 choices[52][3] = "No se precisa autorizaci&oacute;n del Consejo de Ministros por motivos de cuant&iacute;a en los contratos de objeto inform&aacute;tico.";
 answers[52] = choices[52][1];
 units[52] = "41";
 comments[52] = "Id Pregunta: 6101. TIC A 2009";


//  Id pregunta: 6127 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Si contratamos la adquisici&oacute;n de un programa de ordenador a medida, &iquest;qu&eacute; tipo de contrato es?";
 choices[53]= new Array();
 choices[53][0] = "Un contrato de suministro.";
 choices[53][1] = "Un contrato de servicios.";
 choices[53][2] = "Un contrato mixto.";
 choices[53][3] = "Un contrato de desarrollo de un servicio p&uacute;blico.";
 answers[53] = choices[53][1];
 units[53] = "41";
 comments[53] = "Id Pregunta: 6127. TIC A 2009";


//  Id pregunta: 6442 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Seg&uacute;n la normativa en materia de normalizaci&oacute;n en el campo de las tecnolog&iacute;as de la informaci&oacute;n y las telecomunicaciones, se obliga a usar normas europeas e Internacionales en la Adquisici&oacute;n de Bienes y Servicios TIC, y NO es una excepci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Continuidad de funcionamiento";
 choices[54][1] = "Naturaleza innovadora de algunos proyectos";
 choices[54][2] = "Soluci&oacute;n de coste excesivo. Cuando tras un estudio de mercado, existan razones relacionadas con la efectividad del coste que hacen inadecuada el uso de la norma.";
 choices[54][3] = "Compras menores o iguales a 100.000 euros.";
 answers[54] = choices[54][3];
 units[54] = "41";
 comments[54] = "Id Pregunta: 6442. Castilla La Mancha 2009";


//  Id pregunta: 7354 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Se&ntilde;ale la CORRECTA:";
 choices[55]= new Array();
 choices[55][0] = "En un criterio a minimizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[55][1] = "En un criterio a maximizar, el umbral de saciedad ser&aacute; menor o igual al nivel de satisfacci&oacute;n";
 choices[55][2] = "Es obligatorio establecer un umbral de saciedad";
 choices[55][3] = "Todas son INCORRECTAS";
 answers[55] = choices[55][0];
 units[55] = "34";
 comments[55] = "Id Pregunta: 7354. NULL";


//  Id pregunta: 8183 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  En un contrato de suministro de car&aacute;cter inform&aacute;tico, &iquest;es posible pagar el precio de los bienes adquiridos mediante una parte en dinero y la otra con la entrega de bienes de la misma clase?:";
 choices[56]= new Array();
 choices[56][0] = "No, en ning&uacute;n caso al estar prohibido el pago parcial en especie por las leyes.";
 choices[56][1] = "S&iacute;, siempre es posible. La ley lo admite para todo tipo de contratos.";
 choices[56][2] = "No, salvo autorizaci&oacute;n expresa de la Comisi&oacute;n Ministerial de Administraci&oacute;n Electr&oacute;nica, que el bien entregado no supere los 100.000 euros, y que el adjudicatario del contrato consienta.";
 choices[56][3] = "S&iacute;, siempre que existan razones t&eacute;cnicas o econ&oacute;micas que lo aconsejen, y que el importe de los bienes a entregar no supere el 50 % del total del contrato.";
 answers[56] = choices[56][3];
 units[56] = "41";
 comments[56] = "Id Pregunta: 8183. Examen TIC A1 2010";


//  Id pregunta: 8211 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  En la aplicaci&oacute;n de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de asignaci&oacute;n de pesos a criterios que prima los criterios que tienen mayor poder de discriminaci&oacute;n entre las alternativas, se denomina:";
 choices[57]= new Array();
 choices[57][0] = "M&eacute;todo Delphi.";
 choices[57][1] = "M&eacute;todo de las Utilidades Relativas.";
 choices[57][2] = "M&eacute;todo de Saaty.";
 choices[57][3] = "M&eacute;todo de la entrop&iacute;a.";
 answers[57] = choices[57][3];
 units[57] = "34";
 comments[57] = "Id Pregunta: 8211. Examen TIC A1 2010";


//  Id pregunta: 8230 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  En lo relativo a la rentabilidad de las inversiones, &iquest;cu&aacute;l de los siguientes m&eacute;todos es un m&eacute;todo din&aacute;mico de selecci&oacute;n de inversiones?";
 choices[58]= new Array();
 choices[58][0] = "VAN (Valor Actual Neto). ";
 choices[58][1] = "El m&eacute;todo del flujo total por unidad monetaria comprometida.";
 choices[58][2] = "El m&eacute;todo de comparaci&oacute;n de costes.";
 choices[58][3] = "El m&eacute;todo del payback";
 answers[58] = choices[58][0];
 units[58] = "38";
 comments[58] = "Id Pregunta: 8230. Examen TIC A2 2010";


//  Id pregunta: 8265 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  En un acuerdo marco en vigor, la licitaci&oacute;n simplificada puede limitarse a s&oacute;lo tres empresas de entre las firmantes del acuerdo:";
 choices[59]= new Array();
 choices[59][0] = "Cuando la duraci&oacute;n m&aacute;xima de acuerdo sea inferior a un a&ntilde;o.";
 choices[59][1] = "Cuando el importe de licitaci&oacute;n sea inferior al mill&oacute;n de euros.";
 choices[59][2] = "Cuando la tramitaci&oacute;n se haya declarado urgente.";
 choices[59][3] = "Cuando el contrato a adjudicar no est&eacute; sujeto a regulaci&oacute;n armonizada.";
 answers[59] = choices[59][3];
 units[59] = "41";
 comments[59] = "Id Pregunta: 8265. Examen TIC A1 2010";


//  Id pregunta: 8266 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  La tasa de rendimiento contable o rentabilidad media de una inversi&oacute;n es igual a:";
 choices[60]= new Array();
 choices[60][0] = "El cociente entre el beneficio medio anual y la inversi&oacute;n media anual.";
 choices[60][1] = "El cociente entre el flujo de caja medio anual y la inversi&oacute;n media anual.";
 choices[60][2] = "El valor actualizado de la diferencia entre los cobros y los pagos derivados de la inversi&oacute;n.";
 choices[60][3] = "El cociente entre el sumatorio de los flujos de caja y el desembolso inicial.";
 answers[60] = choices[60][0];
 units[60] = "38";
 comments[60] = "Id Pregunta: 8266. Examen TIC A1 2010";


//  Id pregunta: 8374 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos usados en la planificaci&oacute;n de la capacidad de los sistemas inform&aacute;ticos es de tipo anal&iacute;tico?";
 choices[61]= new Array();
 choices[61][0] = "Benchmarking.";
 choices[61][1] = "Teor&iacute;a de colas.";
 choices[61][2] = "Simulaci&oacute;n.";
 choices[61][3] = "Reglas basadas en la experiencia.";
 answers[61] = choices[61][1];
 units[61] = "35,38";
 comments[61] = "Id Pregunta: 8374. Examen TIC A2 2010";


//  Id pregunta: 8898 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Se&ntilde;ale la respuesta correcta relativa a m&eacute;todos de asignaci&oacute;n de pesos a los criterios";
 choices[62]= new Array();
 choices[62][0] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[62][1] = "El m&eacute;todo de las Utilidades Relativas es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo de AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[62][2] = "Tanto el m&eacute;todo de las Utilidades Relativas como el m&eacute;todo AHP son m&eacute;todos de asignaci&oacute;n directa";
 choices[62][3] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 answers[62] = choices[62][3];
 units[62] = "34";
 comments[62] = "Id Pregunta: 8898. ";


//  Id pregunta: 8899 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Se&ntilde;ale cu&aacute;l de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas";
 choices[63]= new Array();
 choices[63][0] = "M&eacute;todo de la ponderaci&oacute;n lineal";
 choices[63][1] = "M&eacute;todo de TOPSIS";
 choices[63][2] = "M&eacute;todo Delphi";
 choices[63][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[63] = choices[63][2];
 units[63] = "34";
 comments[63] = "Id Pregunta: 8899. ";


//  Id pregunta: 9050 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Seg&uacute;n el RD Legislativo de contratos del sector p&uacute;blico:";
 choices[64]= new Array();
 choices[64][0] = "La garant&iacute;a provisional es obligatoria.";
 choices[64][1] = "La garant&iacute;a definitiva ser&aacute; un 5% del valor presupuestado del contrato.";
 choices[64][2] = "Todas las cuant&iacute;as de las garant&iacute;as ir&aacute;n adecuadamente motivadas.";
 choices[64][3] = "Ninguna de las anteriores";
 answers[64] = choices[64][3];
 units[64] = "41";
 comments[64] = "Id Pregunta: 9050. La garant&iacute;a provisional es potestativa. La garant&iacute;a definitiva es de un 5 por 100 del importe de adjudicaci&oacute;n. La garant&iacute;a definitiva no requiere motivaci&oacute;n.";


//  Id pregunta: 9052 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  LA administraci&oacute;n ha licitado un contrato de servicios, cuyo valor de adjudicaci&oacute;n es de 300.000 euros. &iquest;D&oacute;nde hay que publicar el acuerdo?";
 choices[65]= new Array();
 choices[65][0] = "En el perfil del contratante y en el BOE.";
 choices[65][1] = "En el perfil del contratante en el BOE y en el DOUE";
 choices[65][2] = "En el BOE y en el DOUE";
 choices[65][3] = "En el perfil del contratante &uacute;nicamente.";
 answers[65] = choices[65][1];
 units[65] = "41";
 comments[65] = "Id Pregunta: 9052. ";


//  Id pregunta: 9282 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  NO es un principio general del Texto Refundido de la Ley de Contratos del Sector P&uacute;blico:";
 choices[66]= new Array();
 choices[66][0] = "Libertad de acceso a las licitaciones.";
 choices[66][1] = "No discriminaci&oacute;n e igualdad de trato entre los candidatos. ";
 choices[66][2] = "Utilizaci&oacute;n eficiente de los fondos destinados a contratos p&uacute;blicos. ";
 choices[66][3] = "Riesgo y ventura del contratante en la ejecuci&oacute;n de las obras.";
 answers[66] = choices[66][3];
 units[66] = "41";
 comments[66] = "Id Pregunta: 9282. ";


//  Id pregunta: 9378 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[67]= new Array();
 choices[67][0] = "ELECTRE";
 choices[67][1] = "PROMETHEE";
 choices[67][2] = "TOPSIS";
 choices[67][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[67] = choices[67][0];
 units[67] = "34";
 comments[67] = "Id Pregunta: 9378. ";


//  Id pregunta: 9473 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes no es un factor de riesgo a la hora de analizar la rentabilidad de un proyecto?";
 choices[68]= new Array();
 choices[68][0] = "Factores econ&oacute;micos";
 choices[68][1] = "Factores pol&iacute;ticos";
 choices[68][2] = "Factores sociales";
 choices[68][3] = "Factores organizativos";
 answers[68] = choices[68][2];
 units[68] = "38";
 comments[68] = "Id Pregunta: 9473. ";


//  Id pregunta: 9474 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  En el contexto de la rentabilidad de la inversi&oacute;n de un proyecto:";
 choices[69]= new Array();
 choices[69][0] = "Una inversi&oacute;n se realiza si su rentabilidad exigida es mayor que su rentabilidad esperada";
 choices[69][1] = "Una inversi&oacute;n se realiza si su rentabilidad exigida es igual que su rentabilidad esperada";
 choices[69][2] = "Una inversi&oacute;n se realiza si su rentabilidad comprometida es igual que su rentabilidad esperada";
 choices[69][3] = "Una inversi&oacute;n se realiza si su rentabilidad esperada es mayor que su rentabilidad exigida";
 answers[69] = choices[69][3];
 units[69] = "38";
 comments[69] = "Id Pregunta: 9474. ";


//  Id pregunta: 9475 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  En el an&aacute;lisis coste/beneficio de la inversi&oacute;n de un proyecto se considera:";
 choices[70]= new Array();
 choices[70][0] = "S&oacute;lo los beneficios tangibles";
 choices[70][1] = "S&oacute;lo los beneficios intangibles";
 choices[70][2] = "Los beneficios tangibles e intangibles";
 choices[70][3] = "Todas las anteriores son falsas";
 answers[70] = choices[70][2];
 units[70] = "38";
 comments[70] = "Id Pregunta: 9475. ";


//  Id pregunta: 9477 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  El m&eacute;todo del payback";
 choices[71]= new Array();
 choices[71][0] = "Determina en qu&eacute; a&ntilde;o se recupera el desembolso inicial ";
 choices[71][1] = "M&eacute;tricav3 lo considera pero lo denomina retorno de la inversi&oacute;n";
 choices[71][2] = "No tiene en cuenta los flujos de caja posteriores al plazo de recuperaci&oacute;n";
 choices[71][3] = "Todas las afirmaciones anteriores son correctas";
 answers[71] = choices[71][3];
 units[71] = "38";
 comments[71] = "Id Pregunta: 9477. ";


//  Id pregunta: 9639 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  El funcionamiento de la Junta de Contrataci&oacute;n Centralizada se regula en:";
 choices[72]= new Array();
 choices[72][0] = "HAP/2027/2013";
 choices[72][1] = "HAP/2028/2013";
 choices[72][2] = "RD 695/2013";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][1];
 units[72] = "41";
 comments[72] = "Id Pregunta: 9639. NULL";


//  Id pregunta: 9642 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es un principio de la contrataci&oacute;n p&uacute;blica?";
 choices[73]= new Array();
 choices[73][0] = "a) Publicidad y transparencia";
 choices[73][1] = "b) Salvaguarda de la libre competencia";
 choices[73][2] = "c) Selecci&oacute;n de la oferta econ&oacute;micamente m&aacute;s ventajosa";
 choices[73][3] = "d) Restricci&oacute;n en el acceso a las licitaciones";
 answers[73] = choices[73][3];
 units[73] = "41";
 comments[73] = "Id Pregunta: 9642. Hay libertad de acceso a las licitaciones. Art&iacute;culo 1. Objeto y finalidad. La presente Ley tiene por objeto regular la contrataci&oacute;n del sector p&uacute;blico, a fin de garantizar que la misma se ajusta a los principios de libertad de acceso a las licitaciones, .";


//  Id pregunta: 9646 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[74]= new Array();
 choices[74][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[74][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[74][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[74][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[74] = choices[74][3];
 units[74] = "41";
 comments[74] = "Id Pregunta: 9646. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";


//  Id pregunta: 9647 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Qui&eacute;n resuelve los recursos especiales previstos en el RD Legislativo 3/2011 de Contrataci&oacute;n en el Sector P&uacute;blico?";
 choices[75]= new Array();
 choices[75][0] = "Tribunal Central de Recursos Especiales";
 choices[75][1] = "Tribunal Administrativo Central de Recursos Contractuales";
 choices[75][2] = "Tribunal Administrativo Tributario";
 choices[75][3] = "Tribunal Econ&oacute;mico &ndash; Administrativo Central";
 answers[75] = choices[75][1];
 units[75] = "41";
 comments[75] = "Id Pregunta: 9647. Adscrito al MINHAP";


//  Id pregunta: 9758 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  La garant&iacute;a global, seg&uacute;n el RD Legislativo 3/2011:";
 choices[76]= new Array();
 choices[76][0] = "No podr&aacute; superar el 10% del importe de adjudicaci&oacute;n del contrato.";
 choices[76][1] = "Es obligatoria.";
 choices[76][2] = "Se deposita s&oacute;lo una vez y sirve para varias contrataciones.";
 choices[76][3] = "No existe.";
 answers[76] = choices[76][2];
 units[76] = "41";
 comments[76] = "Id Pregunta: 9758. Art. 98 RD Legislativo 3/2011";


//  Id pregunta: 9759 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[77]= new Array();
 choices[77][0] = "Reponen";
 choices[77][1] = "Reajustan";
 choices[77][2] = "Devuelven o cancelan";
 choices[77][3] = "Todas las anteriores";
 answers[77] = choices[77][3];
 units[77] = "41";
 comments[77] = "Id Pregunta: 9759. Art. 99, Art. 102 RD Legislativo 3/2011";


//  Id pregunta: 9760 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  La aplicaci&oacute;n para la presentaci&oacute;n telem&aacute;tica de proposiciones a los procedimientos de adopci&oacute;n de tipo de bienes y serviciosde adquisici&oacute;n centralizada, se denomina:";
 choices[78]= new Array();
 choices[78][0] = "CONECTA-PATRIMONIO";
 choices[78][1] = "PITER";
 choices[78][2] = "CONECTA-CENTRALIZACI&Oacute;N";
 choices[78][3] = "No existe tal aplicaci&oacute;n";
 answers[78] = choices[78][2];
 units[78] = "41";
 comments[78] = "Id Pregunta: 9760. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. Tramitaci&oacute;n de solicitudes a trav&eacute;s de CONECTA  CENTRALIZACI&Oacute;N.";


//  Id pregunta: 9999 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En el &aacute;mbito de la teor&iacute;a de la decisi&oacute;n multicriterio discreta, &iquest;qu&eacute; m&eacute;todo deordenaci&oacute;n de alternativas se caracteriza por elegir en primer lugar la alternativa que tiene el mejor valor en el criterio de mayor peso?";
 choices[79]= new Array();
 choices[79][0] = "El m&eacute;todo PROMETHEE.";
 choices[79][1] = "El m&eacute;todo lexicogr&aacute;fico.";
 choices[79][2] = "El m&eacute;todo de la ponderaci&oacute;n lineal.";
 choices[79][3] = "El m&eacute;todo ELECTRE.";
 answers[79] = choices[79][1];
 units[79] = "34";
 comments[79] = "Id Pregunta: 9999. ";


//  Id pregunta: 10207 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  De los siguientes m&eacute;todos est&aacute;ticos de selecci&oacute;n de inversiones, &iquest;cu&aacute;l de los siguientes no tiene en cuenta la inversi&oacute;n promedio?";
 choices[80]= new Array();
 choices[80][0] = "Tasa de rendimiento contable";
 choices[80][1] = "ROI (Return of Investment)";
 choices[80][2] = "Flujo total por unidad monetaria comprometida";
 choices[80][3] = "Ninguno de los anteriores m&eacute;todos";
 answers[80] = choices[80][2];
 units[80] = "38";
 comments[80] = "Id Pregunta: 10207. ";


//  Id pregunta: 10208 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto del m&eacute;todo de c&aacute;lculo de la rentabilidad de una inversi&oacute;n llamado &Iacute;ndice de rentabilidad";
 choices[81]= new Array();
 choices[81][0] = "Es un m&eacute;todo est&aacute;tico";
 choices[81][1] = "La inversi&oacute;n es rentable si el &iacute;ndice es mayor que cero";
 choices[81][2] = "Si el &iacute;ndice es mayor que uno, entonces es rentable";
 choices[81][3] = "Ninguna de las anteriores respuestas es verdadera";
 answers[81] = choices[81][2];
 units[81] = "38";
 comments[81] = "Id Pregunta: 10208. El &iacute;ndice de rentabilidad (IR) es un m&eacute;todo din&aacute;mico que se calcula como IR = ValorActualCobros / ValorActualPagos. Si IR &gt; 1, la inversi&oacute;n es rentable";


//  Id pregunta: 10209 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Seg&uacute;n M&eacute;trica v3, indique qu&eacute; no es necesario tener en cuenta para el c&aacute;lculo del ROI (Retorno de la Inversi&oacute;n):";
 choices[82]= new Array();
 choices[82][0] = "La Inversi&oacute;n Promedio";
 choices[82][1] = "El Beneficio Neto Anual";
 choices[82][2] = "El Periodo de Amortizaci&oacute;n";
 choices[82][3] = "El Coste de Desarrollo Anualizado";
 answers[82] = choices[82][2];
 units[82] = "38";
 comments[82] = "Id Pregunta: 10209. ";


//  Id pregunta: 10210 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Una inversi&oacute;n de 300.000 euros produce el primer a&ntilde;o un beneficio de 5.000 euros. Teniendo en cuenta que la rentabilidad requerida a la inversi&oacute;n es del 2%, &iquest;cu&aacute;l es el valor actual neto de dicha inversi&oacute;n?";
 choices[83]= new Array();
 choices[83][0] = "300.000 + 5.000 * 0,02";
 choices[83][1] = "-300.000 + 5.000 / (1 + 0,02)";
 choices[83][2] = "300.000 - 5.000 / (1 - 0,02)";
 choices[83][3] = "-300.000 + 5.000 * (1 + 0,02)";
 answers[83] = choices[83][1];
 units[83] = "38";
 comments[83] = "Id Pregunta: 10210. ";


//  Id pregunta: 10926 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  En el &aacute;mbito de los Contratos del Sector P&uacute;blico y, en particular, en los contratos de servicios &iquest;cu&aacute;l es la cuant&iacute;a m&aacute;xima, IVA excluido, del presupuesto de licitaci&oacute;n de los contratos dirigidos al desarrollo de la Administraci&oacute;n Electr&oacute;nica que se declaran de contrataci&oacute;n centralizada?";
 choices[84]= new Array();
 choices[84][0] = "862.000 euros.";
 choices[84][1] = "300.000 euros.";
 choices[84][2] = "500.000 euros.";
 choices[84][3] = "1.152.000 euros.";
 answers[84] = choices[84][0];
 units[84] = "41";
 comments[84] = "Id Pregunta: 10926. TIC A1 AGE 2014";


//  Id pregunta: 11109 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Seleccione la respuesta verdadera:";
 choices[85]= new Array();
 choices[85][0] = "Un Valor Actual Neto mayor que 0 indica que la inversi&oacute;n es rentable";
 choices[85][1] = "Un Valor Actual Neto mayor que 0 indica que la TIR es inferior al coste del capital";
 choices[85][2] = "Las respuestas a) y b) son falsas";
 choices[85][3] = "Las respuestas a) y b) son verdaderas";
 answers[85] = choices[85][0];
 units[85] = "38";
 comments[85] = "Id Pregunta: 11109. ";


//  Id pregunta: 11115 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  El &oacute;rgano competente para la resoluci&oacute;n de un recurso especial en materia de contrataci&oacute;n en la AGE es:";
 choices[86]= new Array();
 choices[86][0] = "El Tribunal Administrativo Central de Recursos Contractuales";
 choices[86][1] = "El Tribunal Contencioso Administrativo";
 choices[86][2] = "El Tribunal de Cuentas";
 choices[86][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 answers[86] = choices[86][0];
 units[86] = "41";
 comments[86] = "Id Pregunta: 11115. ";


//  Id pregunta: 11117 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seleccione la respuesta verdadera respecto a la publicidad de los procedimientos negociados:";
 choices[87]= new Array();
 choices[87][0] = "No se requiere publicidad en el caso de contratos cuyo valor estimado sea IGUAL o MENOR de 120.000";
 choices[87][1] = "El &oacute;rgano de contrataci&oacute;n solicitar&aacute; ofertas, al menos a 5 empresas capaces de realizar el objeto del contrato, cuando ello sea posible.";
 choices[87][2] = "El procedimiento permite la negociaci&oacute;n de las condiciones del contrato.";
 choices[87][3] = "Es el procedimiento ordinario de adjudicaci&oacute;n en los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado.";
 answers[87] = choices[87][2];
 units[87] = "41";
 comments[87] = "Id Pregunta: 11117. ";


//  Id pregunta: 11119 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Por qu&eacute; acuerdo marco comprar&iacute;a usted un ordenador personal?";
 choices[88]= new Array();
 choices[88][0] = "AM 2/2013";
 choices[88][1] = "AM 10/2013";
 choices[88][2] = "AM 13/2013";
 choices[88][3] = "AM 5/2013";
 answers[88] = choices[88][0];
 units[88] = "41";
 comments[88] = "Id Pregunta: 11119. ";


//  Id pregunta: 11241 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Sobre qu&eacute; actos un licitador puede interponer el recurso especial en materia de contrataci&oacute;n:";
 choices[89]= new Array();
 choices[89][0] = "&Uacute;nicamente los anuncios de licitaci&oacute;n y los pliegos de los contratos SARA.";
 choices[89][1] = "Los acuerdos de licitaci&oacute;n de cualquier contrato, sea o no SARA.";
 choices[89][2] = "Los anuncios de licitaci&oacute;n, los pliegos, los actos de tr&aacute;mite cualificados as&iacute; como los acuerdos de licitaci&oacute;n de los contratos SARA.";
 choices[89][3] = "Ninguna es verdadera.";
 answers[89] = choices[89][2];
 units[89] = "41";
 comments[89] = "Id Pregunta: 11241. ";


//  Id pregunta: 11242 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  El valor estimado del contrato:";
 choices[90]= new Array();
 choices[90][0] = "Nos permite determinar si el contrato est&aacute; sujeto a regulaci&oacute;n armonizada.";
 choices[90][1] = "No incluye el IVA";
 choices[90][2] = "Incluye pr&oacute;rrogas y cualquier modificaci&oacute;n prevista sobre el presupuesto base de licitaci&oacute;n.";
 choices[90][3] = "Todas las respuestas son ciertas.";
 answers[90] = choices[90][3];
 units[90] = "41";
 comments[90] = "Id Pregunta: 11242. ";


//  Id pregunta: 11244 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En materia de contrataci&oacute;n, es competencia de la DTIC:";
 choices[91]= new Array();
 choices[91][0] = "El informe t&eacute;cnico facultativo de los convenios y encomiendas de gesti&oacute;n que tengan por objeto la adquisici&oacute;n de bienes y servicios inform&aacute;ticos, as&iacute; como de las memorias y pliegos de prescripciones t&eacute;cnicas de contrataciones de bienes y servicios inform&aacute;ticos.";
 choices[91][1] = "A) y para aquellos contratos de cuant&iacute;a de m&aacute;s de 1.000.000 euros, el resto los informa la correspondiente CMAD.";
 choices[91][2] = "El seguimiento de la ejecuci&oacute;n del gasto en materia de tecnolog&iacute;as de la informaci&oacute;n y comunicaciones.";
 choices[91][3] = "Estas competencias las llevar&aacute; a cabo la Divisi&oacute;n de Inversiones TIC dependiente de la Direcci&oacute;n General de Racionalizaci&oacute;n y Contrataci&oacute;n Centralizada.";
 answers[91] = choices[91][2];
 units[91] = "41";
 comments[91] = "Id Pregunta: 11244. ";


//  Id pregunta: 11247 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En lo Referente a la publicidad de los procedimientos de licitaci&oacute;n de &aacute;mbito estatal, es falso que:";
 choices[92]= new Array();
 choices[92][0] = "En el caso de los procedimientos negociados con publicidad, la publicaci&oacute;n en el perfil del contratante podr&aacute; sustituir a la del BOE.";
 choices[92][1] = "Los contratos no SARA se publican en el BOE y en el Perfil del Contratante.";
 choices[92][2] = "Los contratos SARA se publican en el DOUE, en lugar del BOE, y en el Perfil del Contratante.";
 choices[92][3] = "Ninguna es correcta.";
 answers[92] = choices[92][2];
 units[92] = "41";
 comments[92] = "Id Pregunta: 11247. ";


//  Id pregunta: 11298 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En relaci&oacute;n con la contrataci&oacute;n administrativa se&ntilde;ale la opci&oacute;n verdadera.";
 choices[93]= new Array();
 choices[93][0] = "Est&aacute; prohibido la realizaci&oacute;n de pactos en cualquier caso.";
 choices[93][1] = "Obliga a entes locales.";
 choices[93][2] = "La perfecci&oacute;n de un contrato, se produce en su adjudicaci&oacute;n provisional.";
 choices[93][3] = "La garant&iacute;a global, responde solamente ante un &oacute;rgano de contrataci&oacute;n.";
 answers[93] = choices[93][1];
 units[93] = "41";
 comments[93] = "Id Pregunta: 11298. Obliga a todas las AAPP";


//  Id pregunta: 11357 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Se&ntilde;ale cu&aacute;l de las siguientes opciones contiene m&eacute;todos de asignaci&oacute;n de pesos en la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta";
 choices[94]= new Array();
 choices[94][0] = "Delphi, Utilidades relativas, UMA, Entrop&iacute;a";
 choices[94][1] = "Delphi, Utilidades relativas, AHP, Entrop&iacute;a";
 choices[94][2] = "Delphi, Utilidades relativas, Electre, Entrop&iacute;a";
 choices[94][3] = "Delphi, Utilidades relativas, Electre, TOPSIS";
 answers[94] = choices[94][1];
 units[94] = "34";
 comments[94] = "Id Pregunta: 11357. ";


//  Id pregunta: 11750 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En relaci&oacute;n a la Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[95]= new Array();
 choices[95][0] = "Al menos dos veces al a&ntilde;o convocar&aacute; a los representantes de los organismos que, con funciones similares a las desarrolladas por ella, hayan sido creados por las Comunidades Aut&oacute;nomas en ejercicio de sus competencias.";
 choices[95][1] = "Pertenece al Ministerio de Industria, Energia y Turismo.";
 choices[95][2] = "A esta reuni&oacute;n podr&aacute; ser convocado un representante de la Administraci&oacute;n Local propuesto por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias.";
 choices[95][3] = "No se ha creado a&uacute;n.";
 answers[95] = choices[95][2];
 units[95] = "41";
 comments[95] = "Id Pregunta: 11750. ";


//  Id pregunta: 11758 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;C&oacute;mo se llama la plataforma de contrataci&oacute;n de la Administraci&oacute;n General del Estado?";
 choices[96]= new Array();
 choices[96][0] = "Conecta-Patrimonio";
 choices[96][1] = "Conecta-Centralizaci&oacute;n";
 choices[96][2] = "Plataforma-Centraliza";
 choices[96][3] = "Centralizacion-ofertas";
 answers[96] = choices[96][1];
 units[96] = "41";
 comments[96] = "Id Pregunta: 11758. ";


//  Id pregunta: 11759 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes no es un tipo de tramitaci&oacute;n de contrataci&oacute;n?";
 choices[97]= new Array();
 choices[97][0] = "previos";
 choices[97][1] = "emergencia";
 choices[97][2] = "urgencia";
 choices[97][3] = "ordinaria";
 answers[97] = choices[97][0];
 units[97] = "41";
 comments[97] = "Id Pregunta: 11759. ";


//  Id pregunta: 11761 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n la Directiva 2014/24/UE, de 26 de febrero de 2014, sobre contrataci&oacute;n, &iquest;cuando indica que ser&aacute; obligatorio la contrataci&oacute;n electr&oacute;nica para las centrales de compra p&uacute;blica?";
 choices[98]= new Array();
 choices[98][0] = "En 2 a&ntilde;os, la transmisi&oacute;n de anuncios y puesta a disposici&oacute;n de los pliegos, se realizar&aacute;obligatoriamente a trav&eacute;s de medios TIC.";
 choices[98][1] = "En 3 a&ntilde;os desde su publicaci&oacute;n.";
 choices[98][2] = "Antes de la publicaci&oacute;n de la directiva ya era totalmente electr&oacute;nico.";
 choices[98][3] = "En 4 a&ntilde;os y medio, las comunicaciones ser&aacute;n totalmente electr&oacute;nicas en todas las fases delproceso y para el resto de &oacute;rganos contratantes. Esto obligar&aacute; a que las ofertas se presenten enformato electr&oacute;nico.";
 answers[98] = choices[98][1];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11761. ";


//  Id pregunta: 11773 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En el expediente de contrataci&oacute;n";
 choices[99]= new Array();
 choices[99][0] = "la memoria debe referirse a la necesidad e idoneidad del contrato";
 choices[99][1] = "la memoria debe referirse a los requisitos que deben contener los pliegos de cl&aacute;usulas administrativas y t&eacute;cnicas generales";
 choices[99][2] = "la memoria debe referirse solo a la necesidad del contrato";
 choices[99][3] = "Todas son correctas&nbsp;";
 answers[99] = choices[99][0];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11773. ";


