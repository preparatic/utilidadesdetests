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

//  Id pregunta: 22 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;C&oacute;mo se denomina al derecho o facultad que se reconoce al afectado para recabar informaci&oacute;n gratuita sobre sus datos de car&aacute;cter personal, ya est&eacute;n incluidos o vayan a ser tratados?:";
 choices[0]= new Array();
 choices[0][0] = "Derecho de informaci&oacute;n";
 choices[0][1] = "Derecho de acceso";
 choices[0][2] = "Derecho de consulta al Registro General de Protecci&oacute;n de Datos";
 choices[0][3] = "Derecho de cancelaci&oacute;n";
 answers[0] = choices[0][1];
 units[0] = "29";
 comments[0] = "Id Pregunta: 22. ";


//  Id pregunta: 24 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;C&oacute;mo se denomina la posibilidad de funcionamiento en distintas plataformas sin necesidad de cambios  en el aplicativo?:";
 choices[1]= new Array();
 choices[1][0] = "Interoperatividad";
 choices[1][1] = "Compatibilidad";
 choices[1][2] = "Portabilidad";
 choices[1][3] = "Normalizaci&oacute;n";
 answers[1] = choices[1][2];
 units[1] = "40";
 comments[1] = "Id Pregunta: 24. ";


//  Id pregunta: 29 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las actuaciones siguientes corresponde a una auditor&iacute;a inform&aacute;tica?:";
 choices[2]= new Array();
 choices[2][0] = "Recomendar situaciones";
 choices[2][1] = "Planes estrat&eacute;gicos de seguridad";
 choices[2][2] = "Planes de aseguramiento de calidad";
 choices[2][3] = "Reorganizaci&oacute;n de los recursos humanos del departamento inform&aacute;tico";
 answers[2] = choices[2][0];
 units[2] = "31,32,33";
 comments[2] = "Id Pregunta: 29. ";


//  Id pregunta: 54 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;ndo podr&iacute;a utilizarse, en un proceso de decisi&oacute;n multicriterio discreta, el c&aacute;lculo de pesos por el m&eacute;todo de la entrop&iacute;a?:";
 choices[3]= new Array();
 choices[3][0] = "Cuando no se disponga previamente de la puntuaci&oacute;n de las alternativas para cada criterio";
 choices[3][1] = "Cuando el decisor quiera minimizar la subjetividad en la asignaci&oacute;n de pesos";
 choices[3][2] = "Cuando, tras la normalizaci&oacute;n, exista alguna puntuaci&oacute;n nula en alguno de los criterios";
 choices[3][3] = "Cuando el decisor quiera comparar los criterios de dos en dos para fijar mejor su jerarqu&iacute;a";
 answers[3] = choices[3][1];
 units[3] = "34";
 comments[3] = "Id Pregunta: 54. NULL";


//  Id pregunta: 79 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; red implementa la jerarqu&iacute;a absoluta?:";
 choices[4]= new Array();
 choices[4][0] = "En Y";
 choices[4][1] = "En cadena";
 choices[4][2] = "En c&iacute;rculo";
 choices[4][3] = "En rueda";
 answers[4] = choices[4][1];
 units[4] = "23";
 comments[4] = "Id Pregunta: 79. NULL";


//  Id pregunta: 82 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; se entiende por capacidad?:";
 choices[5]= new Array();
 choices[5][0] = "Es la m&aacute;xima cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinada";
 choices[5][1] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinada";
 choices[5][2] = "Es el porcentaje de tiempo durante el cu&aacute;l est&aacute; siendo utilizado un componente del sistema inform&aacute;tico";
 choices[5][3] = "Es el intervalo de tiempo durante el cual se toman medidas para determinar el conjunto de trabajos de un programa en un entorno de memoria virtual paginada";
 answers[5] = choices[5][0];
 units[5] = "35";
 comments[5] = "Id Pregunta: 82. NULL";


//  Id pregunta: 104 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Analizariamos los recursos de la organizaci&oacute;n...";
 choices[6]= new Array();
 choices[6][0] = "Cuando quisi&eacute;ramos realizar una programaci&oacute;n estrat&eacute;gica";
 choices[6][1] = "En la organizaci&oacute;n, para ver la forma de materializar la programaci&oacute;n";
 choices[6][2] = "Cuando ejecut&aacute;ramos una programaci&oacute;n, para determinar el costo";
 choices[6][3] = "Al realizar una valoraci&oacute;n de los que se ha consumido";
 answers[6] = choices[6][0];
 units[6] = "31,32,33";
 comments[6] = "Id Pregunta: 104. ";


//  Id pregunta: 126 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El an&aacute;lisis DAFO mide en una empresa:";
 choices[7]= new Array();
 choices[7][0] = "Decisiones, An&aacute;lisis, Fuerzas, Oportunidades";
 choices[7][1] = "Debilidades, Adaptaciones, Fallos, Opciones";
 choices[7][2] = "Decisiones, Amenazas, Fallos, Oportunidades";
 choices[7][3] = "Debilidades, Amenazas, Fuerzas, Oportunidades";
 answers[7] = choices[7][3];
 units[7] = "22";
 comments[7] = "Id Pregunta: 126. NULL";


//  Id pregunta: 140 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos tiene la consideraci&oacute;n de alto cargo. Se nombra mediante Real Decreto por un periodo de:";
 choices[8]= new Array();
 choices[8][0] = "4 a&ntilde;os";
 choices[8][1] = "5 a&ntilde;os";
 choices[8][2] = "6 a&ntilde;os";
 choices[8][3] = "Ninguno de los anteriores";
 answers[8] = choices[8][0];
 units[8] = "29";
 comments[8] = "Id Pregunta: 140. ";


//  Id pregunta: 147 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El la teor&iacute;a de la decisi&oacute;n multicriterio discreta, para el problema de la asignaci&oacute;n de pesos a criterios pueden utilizarse, entre otros, los m&eacute;todos:";
 choices[9]= new Array();
 choices[9][0] = "Lexicogr&aacute;fico y Promethee";
 choices[9][1] = "El m&eacute;todo de ponderaci&oacute;n lineal";
 choices[9][2] = "El m&eacute;todo Delphi y el de la entrop&iacute;a";
 choices[9][3] = "El m&eacute;todo de ponderaci&oacute;n";
 answers[9] = choices[9][2];
 units[9] = "34";
 comments[9] = "Id Pregunta: 147. NULL";


//  Id pregunta: 151 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El Modelo de Referencia para la Interconexi&oacute;n de Sistemas Abiertos queda especificado en la norma ISO:";
 choices[10]= new Array();
 choices[10][0] = "ISO 7498";
 choices[10][1] = "ISO 9735";
 choices[10][2] = "ISO 9075";
 choices[10][3] = "ISO 9945-1";
 answers[10] = choices[10][0];
 units[10] = "40";
 comments[10] = "Id Pregunta: 151. ";


//  Id pregunta: 183 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En el marco de la decisi&oacute;n multicriterio, la normalizaci&oacute;n es el proceso por el que:";
 choices[11]= new Array();
 choices[11][0] = "Se eliminan las alternativas que no intervienen en el c&aacute;lculo";
 choices[11][1] = "Se desactivan aquellos criterios en los que todas las alternativas alcanzan id&eacute;ntica puntuaci&oacute;n";
 choices[11][2] = "Se ajusta la matriz de puntuaciones seg&uacute;n un modelo de referencia";
 choices[11][3] = "Se modifica el contenido de la matriz de puntuaciones para hacer &eacute;sta comparables entre s&iacute;";
 answers[11] = choices[11][3];
 units[11] = "34";
 comments[11] = "Id Pregunta: 183. ";


//  Id pregunta: 205 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  Para el an&aacute;lisis de la gesti&oacute;n de riesgos:";
 choices[12]= new Array();
 choices[12][0] = "usaremos el proyecto MABER de la administraci&oacute;n";
 choices[12][1] = "seguiremos las recomendaciones de la herramienta NEDAES";
 choices[12][2] = "utilizaremos las bases sentadas por ESTROFA";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = choices[12][3];
 units[12] = "33";
 comments[12] = "Id Pregunta: 205. ";


//  Id pregunta: 229 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En las t&eacute;cnicas de negociaci&oacute;n y de resoluci&oacute;n de conflictos, el 'empowerment' consiste en:";
 choices[13]= new Array();
 choices[13][0] = "Potenciar el di&aacute;logo con reuniones peri&oacute;dicas";
 choices[13][1] = "Establecer una pauta a seguir como norma general indiscutible";
 choices[13][2] = "Dar poder a los subordinados para que se impliquen en la organizaci&oacute;n";
 choices[13][3] = "Nada de lo anterior es correcto";
 answers[13] = choices[13][2];
 units[13] = "28";
 comments[13] = "Id Pregunta: 229. negociaci&oacute;n";


//  Id pregunta: 249 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Entendemos por sistema de informaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Conjunto de procedimientos autom&aacute;ticos y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[14][1] = "Conjunto de procedimientos manuales y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[14][2] = "Conjunto de procedimientos, manuales y autom&aacute;ticos, y de funciones dirigidas a la recogida, elaboraci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n, distribuci&oacute;n y evaluaci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[14][3] = "Conjunto de procedimientos, manuales y autom&aacute;ticos, y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 answers[14] = choices[14][3];
 units[14] = "21";
 comments[14] = "Id Pregunta: 249. ";


//  Id pregunta: 253 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Entre las variables que habitualmente se usan para evaluar el comportamiento de un sistema inform&aacute;tico se encuentra el tama&ntilde;o del quantum definido como:";
 choices[15]= new Array();
 choices[15][0] = "La cantidad de tiempo de uso ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[15][1] = "El intervalo de tiempo durante el cu&aacute;l se toman medidas para determinar el conjunto de trabajos de un programa en un entorno de memoria virtual paginada";
 choices[15][2] = "El porcentaje de tiempo que los distintos dispositivos del sistema se usan en tareas no directamente imputables a ninguno de los trabajos en curso";
 choices[15][3] = "El porcentaje de tiempo de uso de un componente del sistema inform&aacute;tico";
 answers[15] = choices[15][0];
 units[15] = "35";
 comments[15] = "Id Pregunta: 253. NULL";


//  Id pregunta: 296 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La determinaci&oacute;n del nivel aceptable de seguridad corresponde a una pol&iacute;tica de:";
 choices[16]= new Array();
 choices[16][0] = "Aceptar el riesgo";
 choices[16][1] = "Evitar el riesgo";
 choices[16][2] = "Traspasar el riesgo";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = choices[16][1];
 units[16] = "33";
 comments[16] = "Id Pregunta: 296. ";


//  Id pregunta: 343 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La tarea de conceder a un producto o servicio un certificado indicando que se ha comprobado que cumple unas determinadas normas o especificaciones t&eacute;cnicas se denomina:";
 choices[17]= new Array();
 choices[17][0] = "Certificaci&oacute;n";
 choices[17][1] = "Homologaci&oacute;n";
 choices[17][2] = "Normalizaci&oacute;n";
 choices[17][3] = "Estandarizaci&oacute;n";
 answers[17] = choices[17][0];
 units[17] = "42";
 comments[17] = "Id Pregunta: 343. ";


//  Id pregunta: 359 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Las normas b&aacute;sicas para constituir un interfaz com&uacute;n de todos los sistemas Unix con las aplicaciones se denominan:";
 choices[18]= new Array();
 choices[18][0] = "OSI";
 choices[18][1] = "ISO";
 choices[18][2] = "POSIX";
 choices[18][3] = "XENIX";
 answers[18] = choices[18][2];
 units[18] = "40";
 comments[18] = "Id Pregunta: 359. ";


//  Id pregunta: 381 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  MAGERIT:";
 choices[19]= new Array();
 choices[19][0] = "Es una metodolog&iacute;a de an&aacute;lisis de riesgos";
 choices[19][1] = "Es una metodolog&iacute;a de gesti&oacute;n de riesgos";
 choices[19][2] = "Es una metodolog&iacute;a de gesti&oacute;n de proyectos";
 choices[19][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[19] = choices[19][3];
 units[19] = "33";
 comments[19] = "Id Pregunta: 381. ";


//  Id pregunta: 383 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Mediante el an&aacute;lisis de riesgos:";
 choices[20]= new Array();
 choices[20][0] = "Se puede evaluar el impacto de los fallos del software en el sistema global";
 choices[20][1] = "El responsable del proyecto reduce el impacto del riesgo";
 choices[20][2] = "Se formaliza una representaci&oacute;n de todas las interacciones efectivas entre los agentes que intervienen en el proyecto";
 choices[20][3] = "Se clasifican los factores susceptibles de provocar consecuencias no deseadas en funci&oacute;n de la cualificaci&oacute;n del personal, la velocidad de ejecuci&oacute;n, el empleo de estandartes y la madurez tecnol&oacute;gica de la organizaci&oacute;n";
 answers[20] = choices[20][3];
 units[20] = "33";
 comments[20] = "Id Pregunta: 383. ";


//  Id pregunta: 387 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  No es cierto respecto a las t&eacute;cnicas PERT que:";
 choices[21]= new Array();
 choices[21][0] = "fueron desarrolladas a finales de los 50s para el programa I+D de los misiles bal&iacute;siticos Polaris";
 choices[21][1] = "permiten representar tanto las dependencias entre tareas como las escalas temporales de las mismas";
 choices[21][2] = "est&aacute;n muy orientadas al plaza de ejecuci&oacute;n, con poca consideraci&oacute;n al coste";
 choices[21][3] = "est&aacute;n orientadas a los sucesos o eventos, y normalmente trabajan con distribuciones de probabilidad para las duraciones";
 answers[21] = choices[21][1];
 units[21] = "28";
 comments[21] = "Id Pregunta: 387. ";


//  Id pregunta: 441 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, no ser&aacute; preciso el consentimiento del interesado en la comunicaci&oacute;n de datos a un tercero cuando:";
 choices[22]= new Array();
 choices[22][0] = "Cuando la cesi&oacute;n est&aacute; autorizada por una Ley";
 choices[22][1] = "Cuando la cesi&oacute;n est&aacute; autorizada por un Real Decreto";
 choices[22][2] = "Cuando la comunicaci&oacute;n tenga por destinatario al Presidente del Gobierno";
 choices[22][3] = "Cuando se realice para garantizar el inter&eacute;s general";
 answers[22] = choices[22][0];
 units[22] = "29";
 comments[22] = "Id Pregunta: 441. ";


//  Id pregunta: 457 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Si el camino cr&iacute;tico de un proyecto est&aacute; formado por las tareas A(3,12,21) y B( 6,15,30), la desviaci&oacute;n critica del proyecto ser&aacute;:";
 choices[23]= new Array();
 choices[23][0] = "9";
 choices[23][1] = "5";
 choices[23][2] = "7";
 choices[23][3] = "4";
 answers[23] = choices[23][1];
 units[23] = "28";
 comments[23] = "Id Pregunta: 457. ";


//  Id pregunta: 476 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Utilizando el m&eacute;todo PERT y suponiendo un proyecto con una actividad con una duraci&oacute;n estimada optimista de 8 d&iacute;as, pesimista de 16 d&iacute;as y m&aacute;s probable de 9 d&iacute;as, &iquest;cu&aacute;l es el tiempo PERT o duraci&oacute;n esperada de dicha actividad?:";
 choices[24]= new Array();
 choices[24][0] = "12";
 choices[24][1] = "11";
 choices[24][2] = "10";
 choices[24][3] = "9";
 answers[24] = choices[24][2];
 units[24] = "28";
 comments[24] = "Id Pregunta: 476. ";


//  Id pregunta: 571 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)   Stephen P. Robbins aport&oacute; a los sistemas de informaci&oacute;n";
 choices[25]= new Array();
 choices[25][0] = "Algoritmos de ordenaci&oacute;n num&eacute;rica";
 choices[25][1] = "Una m&eacute;todo de  de gesti&oacute;n de colas";
 choices[25][2] = "Estudios sobre planificaci&oacute;n estrat&eacute;gica";
 choices[25][3] = "Un m&eacute;todo de planificaci&oacute;n de procesos";
 answers[25] = choices[25][2];
 units[25] = "23";
 comments[25] = "Id Pregunta: 571. ";


//  Id pregunta: 591 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  Entre las t&eacute;cnicas de control deL avance de los proyectos cabe citar:";
 choices[26]= new Array();
 choices[26][0] = "Informes de avance peri&oacute;dicos";
 choices[26][1] = "Puntos de control al final de cada etapa";
 choices[26][2] = "a) y b) son ciertas";
 choices[26][3] = "a) y b) son falsas";
 answers[26] = choices[26][2];
 units[26] = "28";
 comments[26] = "Id Pregunta: 591. ";


//  Id pregunta: 608 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;De qu&eacute; Ministerio depende jer&aacute;rquicamente la Agencia de Protecci&oacute;n de Datos?";
 choices[27]= new Array();
 choices[27][0] = "Justicia";
 choices[27][1] = "Interior";
 choices[27][2] = "Asuntos Exteriores";
 choices[27][3] = "Ninguna de las anteriores es cierta";
 answers[27] = choices[27][3];
 units[27] = "29";
 comments[27] = "Id Pregunta: 608. ";


//  Id pregunta: 611 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Cual de los siguientes ficheros debe inscribirse como de nivel de seguridad alto";
 choices[28]= new Array();
 choices[28][0] = "Los ficheros que contengan datos para fines policiales, sin consentimiento del afectado.";
 choices[28][1] = "Los ficheros que contengan un conjunto de datos de car&aacute;cter personal suficientes que permitan obtener una evaluaci&oacute;n de la personalidad del individuo.";
 choices[28][2] = "Los ficheros que contengan datos relativos a la comisi&oacute;n de infracciones administrativas o penales.";
 choices[28][3] = "No es correcta ninguna de las anteriores.";
 answers[28] = choices[28][0];
 units[28] = "29";
 comments[28] = "Id Pregunta: 611. ";


//  Id pregunta: 661 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes componentes de los que se indican a continuaci&oacute;n no es necesario certificar para obtener el perfil XPG4 Base de la Gu&iacute;a de Portabilidad X/Open?";
 choices[29]= new Array();
 choices[29][0] = "XPG4 Base";
 choices[29][1] = "XPG4 Commands and Utilities";
 choices[29][2] = "XPG4 Language";
 choices[29][3] = "XPG4 Internationalised System Calls and Libraries";
 answers[29] = choices[29][2];
 units[29] = "40";
 comments[29] = "Id Pregunta: 661. ";


//  Id pregunta: 4250 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  Respecto a la iniciativa i2010 de la Comisi&oacute;n Europea:";
 choices[30]= new Array();
 choices[30][0] = "Con el lanzamiento de i2010 la Comisi&oacute;n Europea abandona totalmente los objetivos fijados en la estrategia de Lisboa.";
 choices[30][1] = "Aunque hubiera sido deseable, i2010 no establece como objetivo prioritario el refuerzo de la inversi&oacute;n en I+D";
 choices[30][2] = "La iniciativa i2010 se lanza a finales del a&ntilde;o 2006, tras comprobar el fracaso de los planes de acci&oacute;n eEurope";
 choices[30][3] = "Su primer objetivo es la creaci&oacute;n de &ldquo;la construcci&oacute;n de un Espacio &uacute;nico Europeo de la Informaci&oacute;n que promueva un mercado interior abierto y competitivo para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n&rdquo;.";
 answers[30] = choices[30][3];
 units[30] = "30";
 comments[30] = "Id Pregunta: 4250. ";


//  Id pregunta: 4326 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  En el &aacute;mbito de la Administraci&oacute;n de los Sistemas de Bases de Datos &iquest;Cu&aacute;l de las siguientes afirmaciones, es verdadera?.";
 choices[31]= new Array();
 choices[31][0] = "El Administrador de Datos (AD) est&aacute; mas involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 choices[31][1] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las primeras etapas del ciclo de vida (desde la planificaci&oacute;n de la base de datos hasta el dise&ntilde;o l&oacute;gico).";
 choices[31][2] = "Las responsabilidades del Administrador de la Base de Datos (ABD) se centran en el desarrollo del procedimiento y de las pol&iacute;ticas generales del sistema.";
 choices[31][3] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 answers[31] = choices[31][3];
 units[31] = "26";
 comments[31] = "Id Pregunta: 4326. ";


//  Id pregunta: 4399 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes tipos de mantenimiento de equipos hardware tiene un car&aacute;cter peri&oacute;dico?";
 choices[32]= new Array();
 choices[32][0] = "Mantenimiento correctivo.";
 choices[32][1] = "Mantenimiento preventivo.";
 choices[32][2] = "Mantenimiento perfectivo.";
 choices[32][3] = "Mantenimiento adaptativo.";
 answers[32] = choices[32][1];
 units[32] = "26";
 comments[32] = "Id Pregunta: 4399. ";


//  Id pregunta: 4511 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Una de las siguientes afirmaciones no es cierta respecto a Ia ISO (Organization International de Normalization).";
 choices[33]= new Array();
 choices[33][0] = "Es una red de los institutos de normas nacionales de mas de cien pa&iacute;ses,";
 choices[33][1] = "Es una organizaci&oacute;n no gubernamental.";
 choices[33][2] = "Todos sus miembros son parte de Ia estructura gubernamental de sus pa&iacute;ses, o son conferidos por mandato por su gobierno.";
 choices[33][3] = "La Secretaria Central esta en Ginebra, Suiza.";
 answers[33] = choices[33][2];
 units[33] = "42";
 comments[33] = "Id Pregunta: 4511. ";


//  Id pregunta: 4606 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  &iquest;Cual de las siguientes t&eacute;cnicas NO es de gesti&oacute;n de proyectos?";
 choices[34]= new Array();
 choices[34][0] = "m&eacute;todo MARKII para el An&aacute;lisis de los Puntos Funci&oacute;n";
 choices[34][1] = "Diagrama de extrapolaci&oacute;n";
 choices[34][2] = "staffing size";
 choices[34][3] = "Joint Requirements Planning";
 answers[34] = choices[34][3];
 units[34] = "28";
 comments[34] = "Id Pregunta: 4606. ";


//  Id pregunta: 4636 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  En el mantenimiento de los sistemas de informaci&oacute;n hablamos de:";
 choices[35]= new Array();
 choices[35][0] = "mantenimiento correctivo cuando se incorporan al sistema mejoras solicitadas por el usuario";
 choices[35][1] = "mantenimiento evolutivo cuando se mejora Ia calidad interna del sistema.";
 choices[35][2] = "mantenimiento adaptativo cuando los cambios afectan a los entornos en los que opera el sistema.";
 choices[35][3] = "mantenimiento perfectivo cuando se corrigen errores que previamente no se hab&iacute;an descubierto.";
 answers[35] = choices[35][2];
 units[35] = "";
 comments[35] = "Id Pregunta: 4636. ";


//  Id pregunta: 4756 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes no es una directriz de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[36]= new Array();
 choices[36][0] = "Asegure el control del usuario de los cambios de contenido que dependen del tiempo";
 choices[36][1] = "Utilice soluciones provisionales";
 choices[36][2] = "Aseg&uacute;rese de que los documentos son claros y simples";
 choices[36][3] = "Todas lo son";
 answers[36] = choices[36][3];
 units[36] = "39";
 comments[36] = "Id Pregunta: 4756. ";


//  Id pregunta: 4789 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;Qu&eacute; principio de los que se indican a continuaci&oacute;n NO est&aacute; recogido en el Marco Europeo de Interoperabilidad?";
 choices[37]= new Array();
 choices[37][0] = "Multiling&uuml;ismo";
 choices[37][1] = "Subsidiariedad";
 choices[37][2] = "Eficiencia";
 choices[37][3] = "Accesibilidad";
 answers[37] = choices[37][2];
 units[37] = "40";
 comments[37] = "Id Pregunta: 4789. ";


//  Id pregunta: 4799 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Qu&eacute; tipo de documento NO es publicado por el Instituto Europeo de Normas de Telecomunicaciones (ETSI)?";
 choices[38]= new Array();
 choices[38][0] = "Gu&iacute;a ETSI";
 choices[38][1] = "Norma ETSI";
 choices[38][2] = "Recomendaci&oacute;n ETSI";
 choices[38][3] = "Especificaci&oacute;n t&eacute;cnica ETSI";
 answers[38] = choices[38][2];
 units[38] = "42";
 comments[38] = "Id Pregunta: 4799. ";


//  Id pregunta: 5111 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Seg&uacute;n Magerit V2, la relaci&oacute;n de amenazas a las que est&aacute;n expuestas los activos se llama:";
 choices[39]= new Array();
 choices[39][0] = "Modelo de amenazas";
 choices[39][1] = "Informe de suficiencias.";
 choices[39][2] = "Mapa de riesgos.";
 choices[39][3] = "Listado de vulnerabilidades.";
 answers[39] = choices[39][2];
 units[39] = "32";
 comments[39] = "Id Pregunta: 5111. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5270 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  El RD 1720/2007 desarrolla ..";
 choices[40]= new Array();
 choices[40][0] = "la ley 11/2007";
 choices[40][1] = "la ley 56/2007";
 choices[40][2] = "ley org&aacute;nica 15/1999";
 choices[40][3] = "ley org&aacute;nica 5/1992";
 answers[40] = choices[40][2];
 units[40] = "29";
 comments[40] = "Id Pregunta: 5270. ";


//  Id pregunta: 5418 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  La planificaci&oacute;n y gesti&oacute;n de un proyecto se encarga a una persona, que denominaremos &quot;Jefe de proyecto&quot;. El Plan de proyecto contendr&aacute;:";
 choices[41]= new Array();
 choices[41][0] = "Un grafico de Gant para estimar el coste, otro de PERT para las restricciones y usaremos COCOMO para las  etapas.";
 choices[41][1] = "Estrictamente la Metodolog&iacute;a que el Departamento especifique.";
 choices[41][2] = "Un grafico de GANTT para las etapas, un gr&aacute;fico de PERT para la representaci&oacute;n de las restricciones y usaremos COCOMO para estimar el coste.";
 choices[41][3] = "La Metodolog&iacute;a del Departamento que se suministre v&iacute;a web.";
 answers[41] = choices[41][2];
 units[41] = "27";
 comments[41] = "Id Pregunta: 5418. Castilla y Le&oacute;n";


//  Id pregunta: 5436 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Indicar lo que no contribuye a que la estimaci&oacute;n del esfuerzo de desarrollo sea tan dif&iacute;cil de realizar";
 choices[42]= new Array();
 choices[42][0] = "El hecho de que cada organizaci&oacute;n tiene sus propios recursos, procedimientos e historia, y es necesario ajustar los procesos de estimaci&oacute;n a esos par&aacute;metros &uacute;nicos";
 choices[42][1] = "La rapidez con la que cambian las tecnolog&iacute;as de la informaci&oacute;n y las metodolog&iacute;as del desarrollo";
 choices[42][2] = "La tendencia de los desarrolladores hacia la sobreestimaci&oacute;n";
 choices[42][3] = "El ignorar los aspectos no lineales del desarrollo del software (como son la coordinaci&oacute;n y la gesti&oacute;n";
 answers[42] = choices[42][2];
 units[42] = "89";
 comments[42] = "Id Pregunta: 5436. Castilla y Le&oacute;n";


//  Id pregunta: 5450 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Qu&eacute; no es sociedad de la informaci&oacute;n?";
 choices[43]= new Array();
 choices[43][0] = "Un estadio social y econ&oacute;mico de desarrollo";
 choices[43][1] = "La posibilidad de obtener y compartir &ldquo;cualquier&rdquo; informaci&oacute;n de manera instant&aacute;nea desde cualquier lugar";
 choices[43][2] = "Una situaci&oacute;n en la que la mayor parte de los empleos est&aacute;n asociados a la producci&oacute;n de bienes tangibles";
 choices[43][3] = "El cambio de los medios de generaci&oacute;n de riqueza desde los sectores industriales a los sectores de servicios";
 answers[43] = choices[43][2];
 units[43] = "21";
 comments[43] = "Id Pregunta: 5450. Castilla y Le&oacute;n";


//  Id pregunta: 5655 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel b&aacute;sico, las de nivel medio, a los siguientes ficheros:";
 choices[44]= new Array();
 choices[44][0] = "Los que contengan o se refieran a datos recabados con fines policiales sin consentimiento de las personas afectadas";
 choices[44][1] = "Aquellos de los que sean responsables las Entidades Gestoras y Servicios Comunes de la Seguridad social y se relacionen con el ejercicio de sus competencias";
 choices[44][2] = "Aquellos de los que sean responsables las entidades financieras, para finalidades relacionadas con la prestaci&oacute;n de servicios financieros";
 choices[44][3] = "La b) y la c) son correctas";
 answers[44] = choices[44][3];
 units[44] = "29";
 comments[44] = "Id Pregunta: 5655. ";


//  Id pregunta: 5664 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  Seg&uacute;n el RD 1720/2007, los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n:";
 choices[45]= new Array();
 choices[45][0] = " son personal&iacute;simos y ser&aacute;n ejercidos por el afectado";
 choices[45][1] = " son personal&iacute;simos y ser&aacute;n ejercidos por el afectado o un familiar directo";
 choices[45][2] = " son universales y ser&aacute;n ejercidos por cualquier ciudadano";
 choices[45][3] = "no existen como tales derechos";
 answers[45] = choices[45][0];
 units[45] = "29";
 comments[45] = "Id Pregunta: 5664. ";


//  Id pregunta: 5767 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de ordenaci&oacute;n de alternativas basado en permutaciones?";
 choices[46]= new Array();
 choices[46][0] = "TOPSIS";
 choices[46][1] = "PROMETHEE";
 choices[46][2] = "ELECTRE";
 choices[46][3] = "QUALIFLEX";
 answers[46] = choices[46][3];
 units[46] = "34";
 comments[46] = "Id Pregunta: 5767. ";


//  Id pregunta: 5772 AÃ±o de creación de pregunta: 2009-01-01
 questions[47]= "48)  El derecho de acceso al que se refiere el Art. 15 de la LOPD s&oacute;lo podr&aacute; ser ejercitado a intervalos de";
 choices[47]= new Array();
 choices[47][0] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo en el plazo de 6 meses";
 choices[47][1] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo antes";
 choices[47][2] = "6 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo en el plazo de 2 meses";
 choices[47][3] = "10 d&iacute;as";
 answers[47] = choices[47][1];
 units[47] = "29";
 comments[47] = "Id Pregunta: 5772. ";


//  Id pregunta: 5795 AÃ±o de creación de pregunta: 2009-01-01
 questions[48]= "49)  Identifique la opci&oacute;n que NO es correcta seg&uacute;n lo especificado en Ley 11/2007. Los ciudadanos podr&aacute;n utilizar los siguientes sistemas de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas, de acuerdo con lo que cada Administraci&oacute;n determine:";
 choices[48]= new Array();
 choices[48][0] = "En todo caso, los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad, para personas f&iacute;sicas.";
 choices[48][1] = "Sistemas de firma electr&oacute;nica avanzada basados en certificados electr&oacute;nicos reconocidos emitidos por cualquier prestador de servicios de certificaci&oacute;n.";
 choices[48][2] = "Utilizaci&oacute;n de claves concertadas en un registro previo como usuario, en los t&eacute;rminos y condiciones que en cada caso se determinen.";
 choices[48][3] = "Aportaci&oacute;n de informaci&oacute;n conocida por ambas partes, en los t&eacute;rminos y condiciones que en cada caso se terminen.";
 answers[48] = choices[48][1];
 units[48] = "43";
 comments[48] = "Id Pregunta: 5795. MAP 2008 A2. Actualizada a cambios Ley 15/2014: se deben admitir certificados reconocidos por PSC en lista de confianza publicada en sede-e de MINETUR.";


//  Id pregunta: 5797 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)   Respecto al &aacute;mbito de actuaci&oacute;n en la Plataforma de validaci&oacute;n y firma electr&oacute;nica, @firma, del Ministerio de Administraciones P&uacute;blicas, se&ntilde;ale la opci&oacute;n correcta:";
 choices[49]= new Array();
 choices[49][0] = "Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos.";
 choices[49][1] = "Todas las Administraciones P&uacute;blicas y Organismos asociados.";
 choices[49][2] = "Se except&uacute;an las Entidades Locales, Diputaciones provinciales y Cabildos, que acceden a los servicios proporcionados por las Comunidades Aut&oacute;nomas de su &aacute;mbito territorial.";
 choices[49][3] = "Se ofrecen los servicios de validaci&oacute;n y firma a cualquier organizaci&oacute;n de car&aacute;cter p&uacute;blico y privado";
 answers[49] = choices[49][1];
 units[49] = "30";
 comments[49] = "Id Pregunta: 5797. MAP 2008 A2";


//  Id pregunta: 5864 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  Indique la respuesta INCORRECTA:";
 choices[50]= new Array();
 choices[50][0] = "Las herramientas PILAR soportan el an&aacute;lisis y la gesti&oacute;n de riesgos de un sistema de informaci&oacute;n siguiendo la metodolog&iacute;a Magerit.";
 choices[50][1] = "El acr&oacute;nimo PILAR significa: Procedimiento Integral L&oacute;gico para el An&aacute;lisis de Riesgos";
 choices[50][2] = "Las herramientas PILAR disponen de una biblioteca est&aacute;ndar de prop&oacute;sito general";
 choices[50][3] = "Las herramientas PILAR son capaces de realizar calificaciones de seguridad respecto a ISO/IEC 27002:2005 - C&oacute;digo de buenas pr&aacute;cticas para la Gesti&oacute;n de la Seguridad de la Informaci&oacute;n -";
 answers[50] = choices[50][1];
 units[50] = "33";
 comments[50] = "Id Pregunta: 5864. MAP 2008 A1";


//  Id pregunta: 5925 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes NO es una pauta WAI de accesibilidad para diferentes componentes?";
 choices[51]= new Array();
 choices[51][0] = "ATAG";
 choices[51][1] = "UAAG";
 choices[51][2] = "WCED";
 choices[51][3] = "WCAG";
 answers[51] = choices[51][2];
 units[51] = "39";
 comments[51] = "Id Pregunta: 5925. MAP 2008 A1";


//  Id pregunta: 6195 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  La habilitaci&oacute;n para la representaci&oacute;n de terceros prevista en el Real Decreto 1671/2009 permite a las personas o entidades habilitadas";
 choices[52]= new Array();
 choices[52][0] = "La presentaci&oacute;n y recogida de escritos, solicitudes y comunicaciones en cualquier procedimiento";
 choices[52][1] = "La presentaci&oacute;n y recogida de escritos, solicitudes y comunicaciones en los procedimientos expresamente autorizados";
 choices[52][2] = "La presentaci&oacute;n de escritos, solicitudes y comunicaciones en cualquier procedimiento";
 choices[52][3] = "La presentaci&oacute;n de escritos, solicitudes y comunicaciones en los procedimientos expresamente autorizados";
 answers[52] = choices[52][0];
 units[52] = "43";
 comments[52] = "Id Pregunta: 6195. Articulo 14";


//  Id pregunta: 6262 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Dentro del marco de la auditor&iacute;a de sistemas de informaci&oacute;n, los &ldquo;controles&rdquo; en funci&oacute;n del momento en que act&uacute;an podr&iacute;an clasificarse en:";
 choices[53]= new Array();
 choices[53][0] = "Proactivos, reactivos, concurrentes y recurrentes.";
 choices[53][1] = "Recurrentes, instant&aacute;neos, previos y posteriores.";
 choices[53][2] = "Concomitantes, recurrentes, duraderos e instant&aacute;neos.";
 choices[53][3] = "Reactivos, proactivos y concurrentes o concomitantes.";
 answers[53] = choices[53][3];
 units[53] = "31";
 comments[53] = "Id Pregunta: 6262. ";


//  Id pregunta: 6363 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes es un principio del Esquema Nacional de Seguridad?";
 choices[54]= new Array();
 choices[54][0] = "Enfoque de soluciones de seguridad multilaterales";
 choices[54][1] = "Car&aacute;cter multidimensional de la seguridad";
 choices[54][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[54][3] = "Todos los anteriores";
 answers[54] = choices[54][2];
 units[54] = "43";
 comments[54] = "Id Pregunta: 6363. Art&iacute;culo 4 ENS";


//  Id pregunta: 6366 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un requisito m&iacute;nimo de seguridad de los definidos en el Esquema Nacional de Seguridad?";
 choices[55]= new Array();
 choices[55][0] = "Gesti&oacute;n de personal.";
 choices[55][1] = "Integridad y actualizaci&oacute;n del sistema.";
 choices[55][2] = "Prevenci&oacute;n ante la continuidad de la actividad.";
 choices[55][3] = "Incidentes de seguridad.";
 answers[55] = choices[55][2];
 units[55] = "43";
 comments[55] = "Id Pregunta: 6366. Art&iacute;culo 11 ENS";


//  Id pregunta: 6371 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  En el Esquema Nacional de Seguridad, las dimensiones de seguridad se adscribir&aacute;n a uno de los siguientes niveles:";
 choices[56]= new Array();
 choices[56][0] = "Bajo, Medio o Alto";
 choices[56][1] = "Limitado, Grave o Muy Grave";
 choices[56][2] = "B&aacute;sico, Medio o Alto";
 choices[56][3] = "B&aacute;sico, Medio, Alto o Muy Alto";
 answers[56] = choices[56][0];
 units[56] = "43";
 comments[56] = "Id Pregunta: 6371. Anexo I ENS. Y las categor&iacute;as pueden ser b&aacute;sica, media o alta.";


//  Id pregunta: 6373 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes no es un grupo de medidas de seguridad de los establecidos en el Esquema Nacional de Seguridad?";
 choices[57]= new Array();
 choices[57][0] = "Marco de gesti&oacute;n";
 choices[57][1] = "Marco organizativo";
 choices[57][2] = "Marco operacional";
 choices[57][3] = "Medidas de protecci&oacute;n";
 answers[57] = choices[57][0];
 units[57] = "43";
 comments[57] = "Id Pregunta: 6373. Anexo II ENS";


//  Id pregunta: 6392 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes contenidos deben contener obligatoriamente los certificados electr&oacute;nicos de sede electr&oacute;nica de la AGE y de sus organismos p&uacute;blicos vinculados o dependientes, de acuerdo al RD 1671/2009?";
 choices[58]= new Array();
 choices[58][0] = "Descripci&oacute;n de la sede electr&oacute;nica.";
 choices[58][1] = "Unidad administrativa suscriptora del certificado.";
 choices[58][2] = "Fechas de validez del certificado.";
 choices[58][3] = "Ninguna de las anteriores.";
 answers[58] = choices[58][1];
 units[58] = "43";
 comments[58] = "Id Pregunta: 6392. Art&iacute;culo 18 RD 1671/2009";


//  Id pregunta: 6397 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes reglas no deben cumplir los expedientes electr&oacute;nicos que deban ser objeto de remisi&oacute;n o puesta a disposici&oacute;n, de acuerdo a lo establecido en el RD 1671/2009?";
 choices[59]= new Array();
 choices[59][0] = "El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico";
 choices[59][1] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n en un entorno de intercambio interadministrativo.";
 choices[59][2] = "Con el fin de garantizar la seguridad de los expedientes, tanto su almacenamiento como las especificaciones de los servicios de remisi&oacute;n y puesta a disposici&oacute;n se sujetar&aacute;n a lo que se establezca al respecto por el Esquema Nacional de Seguridad.";
 choices[59][3] = "Los documentos que se integran en el expediente electr&oacute;nico se ajustar&aacute;n al formato o formatos de larga duraci&oacute;n, accesibles en los t&eacute;rminos que determine el Esquema Nacional de Interoperabilidad.";
 answers[59] = choices[59][2];
 units[59] = "43";
 comments[59] = "Id Pregunta: 6397. Art&iacute;culo 53 RD 1671/2009";


//  Id pregunta: 6442 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Seg&uacute;n la normativa en materia de normalizaci&oacute;n en el campo de las tecnolog&iacute;as de la informaci&oacute;n y las telecomunicaciones, se obliga a usar normas europeas e Internacionales en la Adquisici&oacute;n de Bienes y Servicios TIC, y NO es una excepci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Continuidad de funcionamiento";
 choices[60][1] = "Naturaleza innovadora de algunos proyectos";
 choices[60][2] = "Soluci&oacute;n de coste excesivo. Cuando tras un estudio de mercado, existan razones relacionadas con la efectividad del coste que hacen inadecuada el uso de la norma.";
 choices[60][3] = "Compras menores o iguales a 100.000 euros.";
 answers[60] = choices[60][3];
 units[60] = "41";
 comments[60] = "Id Pregunta: 6442. Castilla La Mancha 2009";


//  Id pregunta: 6515 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto al lenguaje de programaci&oacute;n Java:";
 choices[61]= new Array();
 choices[61][0] = "Una clase 'final' no puede tener clases que hereden de ella.";
 choices[61][1] = "Una clase abstracta (abstract) es una clase que puede tener clases que hereden de ella, pero no puede ser instanciada.";
 choices[61][2] = "Las variables y m&eacute;todos de instancia privados s&oacute;lo pueden ser accedidos desde dentro de la clase y desde las subclases. ";
 choices[61][3] = "No se permite herencia m&uacute;ltiple.";
 answers[61] = choices[61][2];
 units[61] = "60";
 comments[61] = "Id Pregunta: 6515. NULL";


//  Id pregunta: 8190 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Se&ntilde;ale cu&aacute;l NO es un campo de actuaci&oacute;n clave de la Agenda Digital para Europa:";
 choices[62]= new Array();
 choices[62][0] = "Mercado &uacute;nico digital din&aacute;mico. ";
 choices[62][1] = "Acceso ultrarr&aacute;pido a Internet. ";
 choices[62][2] = "Nativos digitales. ";
 choices[62][3] = "Inclusi&oacute;n digital. ";
 answers[62] = choices[62][2];
 units[62] = "30";
 comments[62] = "Id Pregunta: 8190. Examen TIC A1 2010";


//  Id pregunta: 8224 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  De acuerdo con la normativa de protecci&oacute;n de datos de car&aacute;cter personal, proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o Diario oficial correspondiente, se considerar&aacute;:";
 choices[63]= new Array();
 choices[63][0] = "Infracci&oacute;n leve.";
 choices[63][1] = "Infracci&oacute;n notable.";
 choices[63][2] = "Infracci&oacute;n grave.";
 choices[63][3] = "Infracci&oacute;n muy grave.";
 answers[63] = choices[63][2];
 units[63] = "29";
 comments[63] = "Id Pregunta: 8224. Examen TIC A1 2010";


//  Id pregunta: 8245 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  El Texto Refundido de la Ley de Propiedad Intelectual, modificado por la ley 23/2006, define los siguientes derechos de explotaci&oacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Reproducci&oacute;n, Distribuci&oacute;n, Duplicaci&oacute;n y Transformaci&oacute;n.";
 choices[64][1] = "Distribuci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[64][2] = "Reproducci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[64][3] = "Reproducci&oacute;n, Distribuci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 answers[64] = choices[64][3];
 units[64] = "36,37";
 comments[64] = "Id Pregunta: 8245. Examen TIC A1 2010";


//  Id pregunta: 8265 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  En un acuerdo marco en vigor, la licitaci&oacute;n simplificada puede limitarse a s&oacute;lo tres empresas de entre las firmantes del acuerdo:";
 choices[65]= new Array();
 choices[65][0] = "Cuando la duraci&oacute;n m&aacute;xima de acuerdo sea inferior a un a&ntilde;o.";
 choices[65][1] = "Cuando el importe de licitaci&oacute;n sea inferior al mill&oacute;n de euros.";
 choices[65][2] = "Cuando la tramitaci&oacute;n se haya declarado urgente.";
 choices[65][3] = "Cuando el contrato a adjudicar no est&eacute; sujeto a regulaci&oacute;n armonizada.";
 answers[65] = choices[65][3];
 units[65] = "41";
 comments[65] = "Id Pregunta: 8265. Examen TIC A1 2010";


//  Id pregunta: 8399 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Las comunicaciones efectuadas a ciudadanos a trav&eacute;s de medios electr&oacute;nicos ser&aacute;n v&aacute;lidas de acuerdo al art&iacute;culo 27 de la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, siempre que:";
 choices[66]= new Array();
 choices[66][0] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas y se identifique fldedignamente al destinatario de las mismas";
 choices[66][1] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas y se identifique fidedignarnente al remitente y al destinatario de las mismas. ";
 choices[66][2] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas, del contenido &iacute;ntegro de las comunicaciones y se identifique fidedignamente al remitente y al destinatario de las mismas. ";
 choices[66][3] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas, del contenido &iacute;ntegro de las comunicaciones, se identifique fidedignarnente al remitente y al destinatario de las mismas y una norma con rango de Ley permita el uso de un medio electr&oacute;nico en el procedimiento";
 answers[66] = choices[66][2];
 units[66] = "43";
 comments[66] = "Id Pregunta: 8399. Examen TIC A2 2010";


//  Id pregunta: 8437 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Seg&uacute;n el RD 1671/2009, &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a la identificaci&oacute;n y autenticaci&oacute;n en el acceso de los ciudadanos a la AGE y sus OOAA dependientes, no es verdadera?";
 choices[67]= new Array();
 choices[67][0] = "Las personas f&iacute;sicas podr&aacute;n utilizar para relacionarse electr&oacute;nicamente con la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes, los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad.";
 choices[67][1] = "Las personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica podr&aacute;n utilizar sistemas de firma electr&oacute;nica de persona jur&iacute;dica o de entidades sin personalidad jur&iacute;dica para todos aquellos procedimientos y actuaciones de la Administraci&oacute;n General del Estado para los que se admitan.";
 choices[67][2] = "En caso de no admisi&oacute;n, la sede electr&oacute;nica correspondiente no deber&aacute; facilitar sistemas alternativos que permitan a las personas jur&iacute;dicas y a las entidades sin personalidad jur&iacute;dica el ejercicio de su derecho a relacionarse electr&oacute;nicamente con la Administraci&oacute;n General del Estado.";
 choices[67][3] = "La admisi&oacute;n de otros sistemas de firma deber&aacute;n aprobarse mediante orden ministerial, o resoluci&oacute;n del titular en el caso de los organismos p&uacute;blicos, previo informe del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 answers[67] = choices[67][2];
 units[67] = "43";
 comments[67] = "Id Pregunta: 8437. ";


//  Id pregunta: 8734 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  La protecci&oacute;n de datos personales encuentra una de sus bases en:";
 choices[68]= new Array();
 choices[68][0] = "&Uacute;nicamente en la legislaci&oacute;n espa&ntilde;ola, en concreto, en Ley Org&aacute;nica 15/1999 de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal (LOPD).";
 choices[68][1] = "&Uacute;nicamente en la legislaci&oacute;n espa&ntilde;ola, inici&aacute;ndose en la Ley Org&aacute;nica 5/1992, de 29 de octubre, de Regulaci&oacute;n del Tratamiento Automatizado de Datos de car&aacute;cter personal (LORTAD)";
 choices[68][2] = "La Carta Europea de Derechos Fundamentales de la Uni&oacute;n Europea, por la que se reconoce el derecho a la protecci&oacute;n de datos personales como un derecho fundamental.";
 choices[68][3] = "La protecci&oacute;n de los derechos de autor en el mundo digital, en tanto el autor sea una persona f&iacute;sica";
 answers[68] = choices[68][2];
 units[68] = "29";
 comments[68] = "Id Pregunta: 8734. Examen TIC A2 2010 interna";


//  Id pregunta: 8735 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes ep&iacute;grafes corresponde a una de las tres prioridades de la Comisi&oacute;n Europea a la hora de establecer la estrategia i2010?";
 choices[69]= new Array();
 choices[69][0] = "La consecuci&oacute;n de una sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n basada en la inclusi&oacute;n.";
 choices[69][1] = "La consecuci&oacute;n de un espacio mundial &uacute;nico de la informaci&oacute;n.";
 choices[69][2] = "El impulso de la innovaci&oacute;n y de la inversi&oacute;n en el campo de la investigaci&oacute;n y tecnolog&iacute;a sanitarias.";
 choices[69][3] = "La consecuci&oacute;n de unos medios de comunicaci&oacute;n europeos a la vanguardia tecnol&oacute;gica";
 answers[69] = choices[69][0];
 units[69] = "30";
 comments[69] = "Id Pregunta: 8735. Examen TIC A2 2010 interna. M&aacute;s info: http://europa.eu/legislation_summaries/information_society/strategies/c11328_es.htm";


//  Id pregunta: 8939 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Las sedes judiciales electr&oacute;nicas no est&aacute;n obligadas a poner a disposici&oacute;n de los ciudadanos y profesionales el servicio:";
 choices[70]= new Array();
 choices[70][0] = "Carta de servicios electr&oacute;nicos";
 choices[70][1] = "Carta de servicios";
 choices[70][2] = "Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[70][3] = "Debe disponer de todos los anteriores";
 answers[70] = choices[70][3];
 units[70] = "43";
 comments[70] = "Id Pregunta: 8939. ";


//  Id pregunta: 8940 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  El responsable de la veracidad e integridad de un contenido incluido en la sede judicial electr&oacute;nica ser&aacute;:";
 choices[71]= new Array();
 choices[71][0] = "El &oacute;rgano titular de la sede";
 choices[71][1] = "El &oacute;rgano u &oacute;rganos administrativos encargados de la gesti&oacute;n";
 choices[71][2] = "Los dos anteriores";
 choices[71][3] = "Ninguno de los anteriores";
 answers[71] = choices[71][3];
 units[71] = "43";
 comments[71] = "Id Pregunta: 8940. ";


//  Id pregunta: 9038 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Indique la pauta de accesibilidad correcta seg&uacute;n la norma WCAG 1.0";
 choices[72]= new Array();
 choices[72][0] = "Dise&ntilde;o dependiente del dispositivo";
 choices[72][1] = "Evite parpadeos en la pantalla";
 choices[72][2] = "Utilice siempre CSS";
 choices[72][3] = "No se base s&oacute;lo en el color";
 answers[72] = choices[72][3];
 units[72] = "39";
 comments[72] = "Id Pregunta: 9038. ";


//  Id pregunta: 9191 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[73]= new Array();
 choices[73][0] = "Estar documentado correctamente";
 choices[73][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[73][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[73][3] = "Ser original";
 answers[73] = choices[73][3];
 units[73] = "36";
 comments[73] = "Id Pregunta: 9191. ";


//  Id pregunta: 9290 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;A qu&eacute; norma ISO corresponde el est&aacute;ndar del ITU X.200? ";
 choices[74]= new Array();
 choices[74][0] = "ISO 9945";
 choices[74][1] = "ISO 7498";
 choices[74][2] = "ISO 9126";
 choices[74][3] = "ISO 15408";
 answers[74] = choices[74][1];
 units[74] = "42";
 comments[74] = "Id Pregunta: 9290. ";


//  Id pregunta: 9474 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  En el contexto de la rentabilidad de la inversi&oacute;n de un proyecto:";
 choices[75]= new Array();
 choices[75][0] = "Una inversi&oacute;n se realiza si su rentabilidad exigida es mayor que su rentabilidad esperada";
 choices[75][1] = "Una inversi&oacute;n se realiza si su rentabilidad exigida es igual que su rentabilidad esperada";
 choices[75][2] = "Una inversi&oacute;n se realiza si su rentabilidad comprometida es igual que su rentabilidad esperada";
 choices[75][3] = "Una inversi&oacute;n se realiza si su rentabilidad esperada es mayor que su rentabilidad exigida";
 answers[75] = choices[75][3];
 units[75] = "38";
 comments[75] = "Id Pregunta: 9474. ";


//  Id pregunta: 9798 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;les son &aacute;reas de actuaci&oacute;n dentro de la Estrategia 2011-2015 del Plan Avanza 2?";
 choices[76]= new Array();
 choices[76][0] = "Ciudadan&iacute;a Digital, Econom&iacute;a Digital, Educaci&oacute;n y Servicios P&uacute;blicos Digitales, Publicaci&oacute;n Digital. ";
 choices[76][1] = "Infraestructura, Gobernanza, Confianza y Seguridad, Espacio &uacute;nico de informaci&oacute;n.";
 choices[76][2] = "Administraci&oacute;n sin papeles, Infraestructuras, Uso y confianza en Internet, Impulso de la industria TIC espa&ntilde;ola. ";
 choices[76][3] = "Administraci&oacute;n en l&iacute;nea, Comercio electr&oacute;nico, Salud y Educaci&oacute;n en l&iacute;nea, Banda Ancha. ";
 answers[76] = choices[76][2];
 units[76] = "30";
 comments[76] = "Id Pregunta: 9798. Examen TIC-A2 2013-Libre. En la p&aacute;gina web de la estrategia viene algo distinto, dice: Infraestructuras, Confianza y Seguridad, Capacitaci&oacute;n Tecnol&oacute;gica, Contenidos y Servicios Digitales y Desarrollo del Sector TIC. Esto a veces pasa.";


//  Id pregunta: 10208 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto del m&eacute;todo de c&aacute;lculo de la rentabilidad de una inversi&oacute;n llamado &Iacute;ndice de rentabilidad";
 choices[77]= new Array();
 choices[77][0] = "Es un m&eacute;todo est&aacute;tico";
 choices[77][1] = "La inversi&oacute;n es rentable si el &iacute;ndice es mayor que cero";
 choices[77][2] = "Si el &iacute;ndice es mayor que uno, entonces es rentable";
 choices[77][3] = "Ninguna de las anteriores respuestas es verdadera";
 answers[77] = choices[77][2];
 units[77] = "38";
 comments[77] = "Id Pregunta: 10208. El &iacute;ndice de rentabilidad (IR) es un m&eacute;todo din&aacute;mico que se calcula como IR = ValorActualCobros / ValorActualPagos. Si IR &gt; 1, la inversi&oacute;n es rentable";


//  Id pregunta: 10263 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  La inscripci&oacute;n de ficheros de titularidad p&uacute;blica en el Registro General de Protecci&oacute;n de Datos";
 choices[78]= new Array();
 choices[78][0] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, si previamente se ha publicado en el diario oficial  correspondiente la norma o acuerdo que lo regule";
 choices[78][1] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, si previamente se ha publicado en el diario oficial  correspondiente la norma o acuerdo que lo regule";
 choices[78][2] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 choices[78][3] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 answers[78] = choices[78][0];
 units[78] = "29";
 comments[78] = "Id Pregunta: 10263. Art&iacute;culo 63.1 y 63.2 del RD 1720/2007";


//  Id pregunta: 10348 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;C&oacute;mo se llama la organizaci&oacute;n que desarrolla est&aacute;ndares abiertos para la industria de la telefon&iacute;a m&oacute;vil?";
 choices[79]= new Array();
 choices[79][0] = "BSA (Business  Software Alliance)";
 choices[79][1] = "OpenMG (Open Mobile Group)";
 choices[79][2] = "OMA (Open Mobile Alliance)";
 choices[79][3] = "The Open Group";
 answers[79] = choices[79][2];
 units[79] = "37";
 comments[79] = "Id Pregunta: 10348. La OMA est&aacute; integrada, entre otros, por operadores de telefon&iacute;a m&oacute;vil, y provedores de aplicaciones y contenidos para m&oacute;viles";


//  Id pregunta: 10495 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cual de los siguientes no es un servicio prestado por Red SARA?";
 choices[80]= new Array();
 choices[80][0] = "DNS";
 choices[80][1] = "SMTP";
 choices[80][2] = "SNMP";
 choices[80][3] = "NTP";
 answers[80] = choices[80][2];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10495. Punto III.1.3 de la NTI de Requisitos de conexi&oacute;n a Red SARA";


//  Id pregunta: 10583 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  El empleo de algoritmos de firma electr&oacute;nica acreditados por el Centro Criptol&oacute;gico Nacional:";
 choices[81]= new Array();
 choices[81][0] = "Es una medida del Esquema Nacional de Seguridad para la dimensi&oacute;n de confidencialidad.";
 choices[81][1] = "Es una medida de nivel medio del Esquema Nacional de Seguridad.";
 choices[81][2] = "Es una recomendaci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[81][3] = "Ninguna de las anteriores.";
 answers[81] = choices[81][1];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10583. ";


//  Id pregunta: 10703 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  En referencia a los metadatos del expediente electr&oacute;nico.";
 choices[82]= new Array();
 choices[82][0] = "No se pueden incluir metadatos complementarios.";
 choices[82][1] = "Se pueden incluir metadatos complementarios.";
 choices[82][2] = "Se pueden incluir metadatos complementarios &uacute;nicamente en caso de intercambio de dichos expedientes.";
 choices[82][3] = "Se pueden incluir metadatos complementarios &uacute;nicamente para facilitar el almacenamiento de los expedientes.";
 answers[82] = choices[82][1];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10703. ";


//  Id pregunta: 10720 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l es el perfil m&iacute;nimo de formato permitido por la NTI de firma electr&oacute;nica?";
 choices[83]= new Array();
 choices[83][0] = "#NAME?";
 choices[83][1] = "#NAME?";
 choices[83][2] = "#NAME?";
 choices[83][3] = "B&aacute;sico de primer nivel";
 answers[83] = choices[83][0];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10720. ";


//  Id pregunta: 10723 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Seg&uacute;n la NTI de Protocolos de intermediaci&oacute;n de datos, dentro del Rol de la Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas no se contempla:";
 choices[84]= new Array();
 choices[84][0] = "Gestionar los Cesionarios y Requirentes seg&uacute;n las condiciones establecidas por cada Cedente.";
 choices[84][1] = "Almacenar la informaci&oacute;n personal de cualquier transacci&oacute;n de intercambio de datos.";
 choices[84][2] = "Asegurar la confidencialidad e integridad de la informaci&oacute;n intercambiada a trav&eacute;s de los mecanismos correspondientes.";
 choices[84][3] = "Mantener un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 answers[84] = choices[84][1];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10723. ";


//  Id pregunta: 10724 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Qui&eacute;n es el responsable de la Plataforma de Intermediaci&oacute;n?";
 choices[85]= new Array();
 choices[85][0] = "Ministerio de la Presidencia";
 choices[85][1] = "Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[85][2] = "Ministerio de Econom&iacute;a y Competitividad";
 choices[85][3] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 answers[85] = choices[85][1];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10724. ";


//  Id pregunta: 10744 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Qui&eacute;n Preside el Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC?";
 choices[86]= new Array();
 choices[86][0] = "El Presidente del Gobierno.";
 choices[86][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[86][2] = "El Director de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[86][3] = "Aquel componente de la misma elegido en mayor&iacute;a por el pleno con un mandato de 2 a&ntilde;os.";
 answers[86] = choices[86][2];
 units[86] = "24";
 comments[86] = "Id Pregunta: 10744. ";


//  Id pregunta: 10750 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;En qu&eacute; a&ntilde;o se public&oacute; la Estrategia de Ciberseguridad Nacional?";
 choices[87]= new Array();
 choices[87][0] = "2011";
 choices[87][1] = "2012";
 choices[87][2] = "2013";
 choices[87][3] = "2014";
 answers[87] = choices[87][2];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10750. ";


//  Id pregunta: 10775 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ale qu&eacute; medida es necesario adoptar en ficheros y tratamientos automatizados para establecer el nivel de seguridad medio seg&uacute;n se establece en el Real Decreto 1720/2007:";
 choices[88]= new Array();
 choices[88][0] = "Control de acceso: Los usuarios tendr&aacute;n acceso &uacute;nicamente a aquellos recursos que precisen para el desarrollo de sus funciones.";
 choices[88][1] = "Identificaci&oacute;n y autenticaci&oacute;n: El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[88][2] = "Telecomunicaciones: La transmisi&oacute;n de datos de car&aacute;cter personal a trav&eacute;s de redes p&uacute;blicas o redes inal&aacute;mbricas de comunicaciones electr&oacute;nicas se realizar&aacute; cifrando dichos datos o bien utilizando cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros.";
 choices[88][3] = "Registro de accesos: De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado.";
 answers[88] = choices[88][1];
 units[88] = "29";
 comments[88] = "Id Pregunta: 10775. Examen GSI 2014";


//  Id pregunta: 10926 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En el &aacute;mbito de los Contratos del Sector P&uacute;blico y, en particular, en los contratos de servicios &iquest;cu&aacute;l es la cuant&iacute;a m&aacute;xima, IVA excluido, del presupuesto de licitaci&oacute;n de los contratos dirigidos al desarrollo de la Administraci&oacute;n Electr&oacute;nica que se declaran de contrataci&oacute;n centralizada?";
 choices[89]= new Array();
 choices[89][0] = "862.000 euros.";
 choices[89][1] = "300.000 euros.";
 choices[89][2] = "500.000 euros.";
 choices[89][3] = "1.152.000 euros.";
 answers[89] = choices[89][0];
 units[89] = "41";
 comments[89] = "Id Pregunta: 10926. TIC A1 AGE 2014";


//  Id pregunta: 10960 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  El &oacute;rgano responsable del sistema Cl@ve, la plataforma com&uacute;n del Sector P&uacute;blico Administrativo Estatal para la identificaci&oacute;n, autenticaci&oacute;n y firma electr&oacute;nica mediante el uso de claves concertadas, ser&aacute;:";
 choices[90]= new Array();
 choices[90][0] = "La Direcci&oacute;n General de la Polic&iacute;a.";
 choices[90][1] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[90][2] = "La F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda.";
 choices[90][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 answers[90] = choices[90][1];
 units[90] = "44";
 comments[90] = "Id Pregunta: 10960. TIC A1 AGE 2014";


//  Id pregunta: 11012 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza el secreto de las comunicaciones?";
 choices[91]= new Array();
 choices[91][0] = "Art&iacute;culo 15";
 choices[91][1] = "17";
 choices[91][2] = "Art&iacute;culo 18";
 choices[91][3] = "Art&iacute;culo 19";
 answers[91] = choices[91][2];
 units[91] = "29";
 comments[91] = "Id Pregunta: 11012. ";


//  Id pregunta: 11025 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Es AENOR un miembro de ISO?";
 choices[92]= new Array();
 choices[92][0] = "No";
 choices[92][1] = "S&iacute;, es miembro nato";
 choices[92][2] = "Si, es miembro suscrito";
 choices[92][3] = "No, pero tiene previsto incorporarse en 2016";
 answers[92] = choices[92][1];
 units[92] = "42";
 comments[92] = "Id Pregunta: 11025. ";


//  Id pregunta: 11205 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[93]= new Array();
 choices[93][0] = "Confianza Digital";
 choices[93][1] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[93][2] = "Impulsar i+d TIC";
 choices[93][3] = "Impulso de los servicios p&uacute;blicos digitales";
 answers[93] = choices[93][3];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11205. ";


//  Id pregunta: 11207 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;C&oacute;mo se denomina el plan de la Agenda Digital Espa&ntilde;ola referente al objetivo de Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas?";
 choices[94]= new Array();
 choices[94][0] = "Plan de Impulso del acceso r&aacute;pido y ultrarr&aacute;pido a Internet";
 choices[94][1] = "Plan de Telecomunicaciones Ultrarr&aacute;pidas";
 choices[94][2] = "Plan de Despliegue de infraestructuras de Red Espa&ntilde;ola";
 choices[94][3] = "Ninguna de las anteriores";
 answers[94] = choices[94][1];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11207. ";


//  Id pregunta: 11482 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n el art&iacute;culo 6 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015, relativo a los registros electr&oacute;nicos de apoderamientos, los poderes inscritos en dicho registro tendr&aacute;n una validez m&aacute;xima";
 choices[95]= new Array();
 choices[95][0] = "De 5 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[95][1] = "De 4 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[95][2] = "De 2 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[95][3] = "De 10 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 answers[95] = choices[95][0];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11482. NULL";


//  Id pregunta: 11731 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l es el perfil de metrica v3 al que pertenece el Responsable de Seguridad?  ";
 choices[96]= new Array();
 choices[96][0] = "Analista";
 choices[96][1] = "Jefe de proyecto";
 choices[96][2] = "Consultor";
 choices[96][3] = "Analista-programador";
 answers[96] = choices[96][1];
 units[96] = "29";
 comments[96] = "Id Pregunta: 11731. ";


//  Id pregunta: 11770 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones no podr&aacute; informar un expediente de contrataci&oacute;n si la documentaci&oacute;n del mismo no incluye: ";
 choices[97]= new Array();
 choices[97][0] = "Presupuesto, objeto y justificaci&oacute;n de la necesidad&nbsp;";
 choices[97][1] = "Presupuesto, objeto y certificado de exclusividad";
 choices[97][2] = "Pliego de cl&aacute;usulas administrativas y memoria econ&oacute;mica";
 choices[97][3] = "Objeto, justificaci&oacute;n temporal y ratio perfiles/horas";
 answers[97] = choices[97][0];
 units[97] = "24, 41";
 comments[97] = "Id Pregunta: 11770. ";


//  Id pregunta: 11774 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;C&oacute;mo se llama la unidad encargada de la contrataci&oacute;n centralizada en el &aacute;mbito de la Administraci&oacute;n General del Estado?";
 choices[98]= new Array();
 choices[98][0] = "Subdirecci&oacute;n General de Compras";
 choices[98][1] = "Central de Compras Estatal";
 choices[98][2] = "Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n&nbsp;";
 choices[98][3] = "Direcci&oacute;n General de Patrimonio del Estado";
 answers[98] = choices[98][2];
 units[98] = "41, 24";
 comments[98] = "Id Pregunta: 11774. ";


//  Id pregunta: 11777 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Es siempre necesario acudir a una nueva licitaci&oacute;n para adjudicar los contratos basados en un acuerdo marco?";
 choices[99]= new Array();
 choices[99][0] = "No, solo cuando no todos los t&eacute;rminos del acuerdo est&aacute;n definidos&nbsp;";
 choices[99][1] = "S&iacute;, siempre se debe acudir a una nueva licitaci&oacute;n";
 choices[99][2] = "La ley proh&iacute;be expresamente acudir a una nueva licitaci&oacute;n";
 choices[99][3] = "Depende de lo que establezca el pliego del acuerdo marco";
 answers[99] = choices[99][0];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11777. ";


