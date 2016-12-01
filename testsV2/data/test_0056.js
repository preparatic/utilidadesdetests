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
var preguntaids = new Array();

//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[0]= "1)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[0]= new Array();
 choices[0][0] = "l Consejo General del Poder Judicial";
 choices[0][1] = "El pleno de Tribunal Constitucional";
 choices[0][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[0][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[0] = choices[0][3];
 units[0] = "1";
 comments[0] = "Id Pregunta: 181. CONSTITUCION1978";
 preguntaids[0] = 181


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[1]= "2)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[1]= new Array();
 choices[1][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[1][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[1][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[1][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[1] = choices[1][3];
 units[1] = "7";
 comments[1] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[1] = 670


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[2]= new Array();
 choices[2][0] = "Art&iacute;culo 16.2.";
 choices[2][1] = "Art&iacute;culo 17.1.";
 choices[2][2] = "Art&iacute;culo 18.1.";
 choices[2][3] = "Art&iacute;culo 18.2.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 224. CONSTITUCION1978";
 preguntaids[2] = 224


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[3]= "4)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[3]= new Array();
 choices[3][0] = "Son actos normativos.";
 choices[3][1] = "Poseen alcance general.";
 choices[3][2] = "No son obligatorias.";
 choices[3][3] = "Son actos individuales no normativos.";
 answers[3] = choices[3][3];
 units[3] = "5";
 comments[3] = "Id Pregunta: 362. UNION EUROPEA";
 preguntaids[3] = 362


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Lollipop";
 choices[4][1] = "Jelly Bean";
 choices[4][2] = "Marshmallow";
 choices[4][3] = "KitKat";
 answers[4] = choices[4][2];
 units[4] = "59";
 comments[4] = "Id Pregunta: 61. AGE A1 2015";
 preguntaids[4] = 61


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[5]= new Array();
 choices[5][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[5][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[5][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = choices[5][1];
 units[5] = "19";
 comments[5] = "Id Pregunta: 588. Estrategia TIC";
 preguntaids[5] = 588


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[6]= "7)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[6]= new Array();
 choices[6][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[6][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[6][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[6][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[6] = choices[6][3];
 units[6] = "1";
 comments[6] = "Id Pregunta: 227. CONSTITUCION1978";
 preguntaids[6] = 227


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[7]= "8)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[7][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[7][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[7][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 172. CONSTITUCION1978";
 preguntaids[7] = 172


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[8]= "9)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[8]= new Array();
 choices[8][0] = "6 TB.";
 choices[8][1] = "5 TB.";
 choices[8][2] = "7 TB.";
 choices[8][3] = "3 TB.";
 answers[8] = choices[8][1];
 units[8] = "53";
 comments[8] = "Id Pregunta: 854. Xunta de Galicia 2015";
 preguntaids[8] = 854


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[9]= "10)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[9]= new Array();
 choices[9][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[9][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[9][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[9][3] = "Todas las respuestas anteriores son correctas.";
 answers[9] = choices[9][0];
 units[9] = "45";
 comments[9] = "Id Pregunta: 600. Junta de Extremadura A1 2015";
 preguntaids[9] = 600


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[10]= new Array();
 choices[10][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[10][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[10][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[10][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[10] = choices[10][1];
 units[10] = "28";
 comments[10] = "Id Pregunta: 734. Estrategia TIC";
 preguntaids[10] = 734


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[11]= "12)  La estructura de la Estrategia TIC:";
 choices[11]= new Array();
 choices[11][0] = "5 principios rectores, 7 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[11][1] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[11][2] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[11][3] = "5 principios rectores, 6 objetivos estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[11] = choices[11][2];
 units[11] = "28";
 comments[11] = "Id Pregunta: 740. Estrategia TIC";
 preguntaids[11] = 740


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[12]= "13)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[12]= new Array();
 choices[12][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[12][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[12][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[12][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[12] = choices[12][3];
 units[12] = "10";
 comments[12] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";
 preguntaids[12] = 507


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[13]= new Array();
 choices[13][0] = "Tres meses.";
 choices[13][1] = "Nueve meses.";
 choices[13][2] = "Cuatro meses.";
 choices[13][3] = "Seis meses.";
 answers[13] = choices[13][0];
 units[13] = "10";
 comments[13] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";
 preguntaids[13] = 469


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[14]= "15)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[14]= new Array();
 choices[14][0] = "Estrasburgo.";
 choices[14][1] = "Bruselas.";
 choices[14][2] = "Luxemburgo.";
 choices[14][3] = "Holanda.";
 answers[14] = choices[14][0];
 units[14] = "5";
 comments[14] = "Id Pregunta: 293. UNION EUROPEA";
 preguntaids[14] = 293


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[15]= "16)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[15]= new Array();
 choices[15][0] = "Los cr&eacute;ditos";
 choices[15][1] = "Las partidas presupuestarias";
 choices[15][2] = "Los derechos";
 choices[15][3] = "Las obligaciones";
 answers[15] = choices[15][3];
 units[15] = "10";
 comments[15] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";
 preguntaids[15] = 454


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[16]= "17)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[16]= new Array();
 choices[16][0] = "tienen capacidad de obrar limitada";
 choices[16][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[16][2] = "no tienen capacidad de obrar";
 choices[16][3] = "ninguna es correcta";
 answers[16] = choices[16][2];
 units[16] = "7";
 comments[16] = "Id Pregunta: 528. LEY 39/2015";
 preguntaids[16] = 528


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[17]= "18)  Son bases de datos NoSQL:";
 choices[17]= new Array();
 choices[17][0] = "MongoDB y Maria DB";
 choices[17][1] = "HBase y Dynamo";
 choices[17][2] = "MariaDB, Cassandra y BigTable";
 choices[17][3] = "La A) y la C)";
 answers[17] = choices[17][1];
 units[17] = "73";
 comments[17] = "Id Pregunta: 104. ";
 preguntaids[17] = 104


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[18]= new Array();
 choices[18][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[18][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[18][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[18][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[18] = choices[18][0];
 units[18] = "7";
 comments[18] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";
 preguntaids[18] = 157


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[19]= "20)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[19]= new Array();
 choices[19][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[19][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[19][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[19][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[19] = choices[19][1];
 units[19] = "10";
 comments[19] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";
 preguntaids[19] = 748


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[20]= "21)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[20]= new Array();
 choices[20][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[20][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[20][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[20][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[20] = choices[20][2];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 784. Ley 40/2015";
 preguntaids[20] = 784


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[21]= "22)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[21]= new Array();
 choices[21][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[21][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[21][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[21][3] = "A las Diputaciones y a las Comarcas.";
 answers[21] = choices[21][3];
 units[21] = "1";
 comments[21] = "Id Pregunta: 229. CONSTITUCION1978";
 preguntaids[21] = 229


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[22]= "23)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[22]= new Array();
 choices[22][0] = "la Administraci&oacute;n General del Estado";
 choices[22][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[22][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[22][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[22] = choices[22][3];
 units[22] = "7";
 comments[22] = "Id Pregunta: 519. LEY 39/2015";
 preguntaids[22] = 519


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[23]= new Array();
 choices[23][0] = "Art&iacute;culo 9.1 CE.";
 choices[23][1] = "Art&iacute;culo 53 CE.";
 choices[23][2] = "Art&iacute;culo 14 CE.";
 choices[23][3] = "Art&iacute;culo 16 CE.";
 answers[23] = choices[23][2];
 units[23] = "14";
 comments[23] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";
 preguntaids[23] = 406


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[24]= "25)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[24]= new Array();
 choices[24][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[24][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[24][2] = "a y b son correctas";
 choices[24][3] = "a y b son incorrectas";
 answers[24] = choices[24][0];
 units[24] = "7";
 comments[24] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";
 preguntaids[24] = 153


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[25]= new Array();
 choices[25][0] = "Nivel 7 - MPLS.";
 choices[25][1] = "Nivel 3 - RARP.";
 choices[25][2] = "Nivel 2 - HDLC.";
 choices[25][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[25] = choices[25][2];
 units[25] = "105";
 comments[25] = "Id Pregunta: 7. AGE A1 2015";
 preguntaids[25] = 7


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[26]= "27)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[26]= new Array();
 choices[26][0] = "Resoluci&oacute;n.";
 choices[26][1] = "Desistimiento o renuncia.";
 choices[26][2] = "Caducidad.";
 choices[26][3] = "Todas las anteriores.";
 answers[26] = choices[26][3];
 units[26] = "7";
 comments[26] = "Id Pregunta: 671. Art&iacute;culo 84 de la Ley 39/2015";
 preguntaids[26] = 671


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[27]= new Array();
 choices[27][0] = "El 2 de Octubre de 2015";
 choices[27][1] = "El 15 de Septiembre de 2015";
 choices[27][2] = "El 1 de Octubre de 2015";
 choices[27][3] = "El 5 de Octubre de 2015";
 answers[27] = choices[27][0];
 units[27] = "19";
 comments[27] = "Id Pregunta: 579. Estrategia TIC";
 preguntaids[27] = 579


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[28]= "29)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[28][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[28][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[28][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[28] = choices[28][1];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 845. Ley 40/2015";
 preguntaids[28] = 845


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la respuesta falsa:";
 choices[29]= new Array();
 choices[29][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[29][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[29][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[29][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[29] = choices[29][2];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 847. Ley 40/2015";
 preguntaids[29] = 847


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[30]= new Array();
 choices[30][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[30][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[30][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[30][3] = "El pago de subsidios a parados";
 answers[30] = choices[30][3];
 units[30] = "15";
 comments[30] = "Id Pregunta: 116. ";
 preguntaids[30] = 116


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[31]= new Array();
 choices[31][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[31][1] = "Calidad de los servicios p&uacute;blicos";
 choices[31][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[31][3] = "Servicio efectivo a los ciudadanos";
 answers[31] = choices[31][1];
 units[31] = "18";
 comments[31] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";
 preguntaids[31] = 749


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[32]= "33)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[32]= new Array();
 choices[32][0] = "El Segundo.";
 choices[32][1] = "El Primero.";
 choices[32][2] = "El Preliminar.";
 choices[32][3] = "El Tercero.";
 answers[32] = choices[32][0];
 units[32] = "1";
 comments[32] = "Id Pregunta: 266. CONSTITUCION1978";
 preguntaids[32] = 266


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[33]= new Array();
 choices[33][0] = "Anualmente por el Consejo de Ministros";
 choices[33][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[33][2] = "Al final de cada legislatura por el Gobierno";
 choices[33][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[33] = choices[33][0];
 units[33] = "14";
 comments[33] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";
 preguntaids[33] = 385


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[34]= "35)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[34]= new Array();
 choices[34][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[34][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[34][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[34][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[34] = choices[34][3];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 777. Ley 40/2015";
 preguntaids[34] = 777


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[35]= "36)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[35][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[35][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[35][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[35] = choices[35][2];
 units[35] = "83";
 comments[35] = "Id Pregunta: 56. AGE A1 2015";
 preguntaids[35] = 56


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[36]= "37)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[36]= new Array();
 choices[36][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[36][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[36][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[36][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[36] = choices[36][0];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 841. Ley 40/2015";
 preguntaids[36] = 841


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[37]= "38)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[37]= new Array();
 choices[37][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[37][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[37][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[37][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[37] = choices[37][0];
 units[37] = "31";
 comments[37] = "Id Pregunta: 2. AGE A1 2015";
 preguntaids[37] = 2


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la respuesta correcta:";
 choices[38]= new Array();
 choices[38][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[38][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[38][2] = "Las respuestas A y B son correctas.";
 choices[38][3] = "Las respuestas A y B son falsas.";
 answers[38] = choices[38][2];
 units[38] = "5";
 comments[38] = "Id Pregunta: 279. UNION EUROPEA";
 preguntaids[38] = 279


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[39]= "40)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[39]= new Array();
 choices[39][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[39][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[39][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[39][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[39] = choices[39][1];
 units[39] = "1";
 comments[39] = "Id Pregunta: 238. CONSTITUCION1978";
 preguntaids[39] = 238


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[40]= "41)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[40]= new Array();
 choices[40][0] = "El acoso sexual.";
 choices[40][1] = "El acoso por raz&oacute;n del sexo.";
 choices[40][2] = "Ambas son correctas.";
 choices[40][3] = "A y B son incorrectas.";
 answers[40] = choices[40][2];
 units[40] = "14";
 comments[40] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";
 preguntaids[40] = 421


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[41]= "42)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[41]= new Array();
 choices[41][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[41][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[41][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[41][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[41] = choices[41][1];
 units[41] = "19";
 comments[41] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";
 preguntaids[41] = 164


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[42]= new Array();
 choices[42][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[42][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[42][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[42][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[42] = choices[42][1];
 units[42] = "77";
 comments[42] = "Id Pregunta: 689. Art&iacute;culo 26 del Reglamento 910/2014";
 preguntaids[42] = 689


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[43]= "44)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[43]= new Array();
 choices[43][0] = "Un informe de impacto de g&eacute;nero.";
 choices[43][1] = "Un programa de igualdad de oportunidades.";
 choices[43][2] = "Un plan de Igualdad de Oportunidades.";
 choices[43][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[43] = choices[43][0];
 units[43] = "14";
 comments[43] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";
 preguntaids[43] = 414


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[44]= "45)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[44]= new Array();
 choices[44][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[44][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[44][2] = "Absoluta frente a cualquier otro gasto.";
 choices[44][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 511. PRESUPUESTOS GENERALES";
 preguntaids[44] = 511


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[45]= new Array();
 choices[45][0] = "Al menos cada 12 meses";
 choices[45][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[45][2] = "Al menos cada 18 meses";
 choices[45][3] = "Al menos cada 24 meses";
 answers[45] = choices[45][3];
 units[45] = "77";
 comments[45] = "Id Pregunta: 687. Art&iacute;culo 20 del Reglamento 910/2014";
 preguntaids[45] = 687


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[46]= "47)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[46]= new Array();
 choices[46][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[46][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[46][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[46][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[46] = choices[46][1];
 units[46] = "73";
 comments[46] = "Id Pregunta: 101. ";
 preguntaids[46] = 101


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[47]= "48)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[47]= new Array();
 choices[47][0] = "Diez art&iacute;culos.";
 choices[47][1] = "Nueve art&iacute;culos.";
 choices[47][2] = "Once art&iacute;culos.";
 choices[47][3] = "Ocho art&iacute;culos.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 269. CONSTITUCION1978";
 preguntaids[47] = 269


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[48]= "49)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[48][1] = "Las inversiones reales y financieras.";
 choices[48][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[48][3] = "Las transferencias de capital y las inversiones reales.";
 answers[48] = choices[48][3];
 units[48] = "10";
 comments[48] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";
 preguntaids[48] = 471


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[49]= new Array();
 choices[49][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[49][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[49][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[49][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[49] = choices[49][0];
 units[49] = "45";
 comments[49] = "Id Pregunta: 630. Junta de Extremadura A1 2015";
 preguntaids[49] = 630


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[50]= new Array();
 choices[50][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[50][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[50][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[50][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[50] = choices[50][2];
 units[50] = "1";
 comments[50] = "Id Pregunta: 233. CONSTITUCION1978";
 preguntaids[50] = 233


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[51]= "52)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[51]= new Array();
 choices[51][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[51][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[51][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[51][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[51] = choices[51][2];
 units[51] = "7";
 comments[51] = "Id Pregunta: 512. LEY 39/2015";
 preguntaids[51] = 512


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[52]= new Array();
 choices[52][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[52][1] = "De nivel alto.";
 choices[52][2] = "De nivel medio y nivel alto.";
 choices[52][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[52] = choices[52][3];
 units[52] = "35";
 comments[52] = "Id Pregunta: 632. Junta de Extremadura A1 2015";
 preguntaids[52] = 632


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[53]= "54)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[53]= new Array();
 choices[53][0] = "Parcial.";
 choices[53][1] = "Sectorial.";
 choices[53][2] = "Tranversal.";
 choices[53][3] = "Vertical.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";
 preguntaids[53] = 402


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[54]= "55)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[54]= new Array();
 choices[54][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[54][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[54][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[54][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[54] = choices[54][2];
 units[54] = "26";
 comments[54] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[54] = 99


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[55]= new Array();
 choices[55][0] = "al menos por 50 Diputados.";
 choices[55][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[55][2] = "por la Mesa del Congreso de los Diputados.";
 choices[55][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[55] = choices[55][1];
 units[55] = "1";
 comments[55] = "Id Pregunta: 183. CONSTITUCION1978";
 preguntaids[55] = 183


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[56]= "57)  En qu&eacute; consiste el principio BASE:";
 choices[56]= new Array();
 choices[56][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[56][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[56][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[56][3] = "Todas las anteriores son falsas";
 answers[56] = choices[56][3];
 units[56] = "73";
 comments[56] = "Id Pregunta: 103. ";
 preguntaids[56] = 103


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale la respuesta falsa:";
 choices[57]= new Array();
 choices[57][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[57][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[57][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[57][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[57] = choices[57][3];
 units[57] = "5";
 comments[57] = "Id Pregunta: 281. UNION EUROPEA";
 preguntaids[57] = 281


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[58]= new Array();
 choices[58][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[58][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[58][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[58][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[58] = choices[58][0];
 units[58] = "84";
 comments[58] = "Id Pregunta: 619. Junta de Extremadura A1 2015";
 preguntaids[58] = 619


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l es el servicio com&uacute;n que  permitir&aacute; la tramitaci&oacute;n por medios electr&oacute;nicos de todo el ciclo de vida involucrado en la concesi&oacute;n de ayudas provenientes de los fondos FEDER?";
 choices[59]= new Array();
 choices[59][0] = "IRIA";
 choices[59][1] = "GALATEA";
 choices[59][2] = "BADARAL";
 choices[59][3] = "SOROLLA";
 answers[59] = choices[59][1];
 units[59] = "43";
 comments[59] = "Id Pregunta: 446. SERVICIOS COMUNES";
 preguntaids[59] = 446


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[60]= "61)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[60]= new Array();
 choices[60][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[60][1] = "Static &amp; Active process for REsolution Bank.";
 choices[60][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[60][3] = "Super Active REsponse for Banks";
 answers[60] = choices[60][0];
 units[60] = "12";
 comments[60] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";
 preguntaids[60] = 139


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[61]= new Array();
 choices[61][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[61][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[61][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[61][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[61] = choices[61][1];
 units[61] = "22";
 comments[61] = "Id Pregunta: 122. ";
 preguntaids[61] = 122


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[62]= "63)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[62]= new Array();
 choices[62][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[62][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[62][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[62][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[62] = choices[62][0];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 818. Ley 40/2015";
 preguntaids[62] = 818


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[63]= "64)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[63]= new Array();
 choices[63][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[63][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[63][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[63][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[63] = choices[63][3];
 units[63] = "7";
 comments[63] = "Id Pregunta: 27. AGE A1 2015";
 preguntaids[63] = 27


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban?:";
 choices[64]= new Array();
 choices[64][0] = "Visualizar el trabajo o el flujo de trabajo";
 choices[64][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[64][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[64][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[64] = choices[64][3];
 units[64] = "34, 84";
 comments[64] = "Id Pregunta: 733. Metodologias &aacute;giles";
 preguntaids[64] = 733


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[65]= new Array();
 choices[65][0] = "NoSQL";
 choices[65][1] = "Sistemas de baja latencia";
 choices[65][2] = "MapReduce";
 choices[65][3] = "Business Intelligence";
 answers[65] = choices[65][1];
 units[65] = "73";
 comments[65] = "Id Pregunta: 660. ";
 preguntaids[65] = 660


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[66]= new Array();
 choices[66][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[66][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[66][2] = "c) Todas las respuestas son correctas.";
 choices[66][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[66] = choices[66][1];
 units[66] = "5";
 comments[66] = "Id Pregunta: 358. UNION EUROPEA";
 preguntaids[66] = 358


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[67]= new Array();
 choices[67][0] = "Las Cortes Generales.";
 choices[67][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[67][2] = "El Gobierno.";
 choices[67][3] = "El Congreso de los Diputados.";
 answers[67] = choices[67][0];
 units[67] = "10";
 comments[67] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";
 preguntaids[67] = 489


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[68]= "69)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[68]= new Array();
 choices[68][0] = "El Delegado del Gobierno.";
 choices[68][1] = "El Subdelegado del Gobierno.";
 choices[68][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[68][3] = "El Gobernador Civil.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 207. CONSTITUCION1978";
 preguntaids[68] = 207


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[69]= "70)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[69]= new Array();
 choices[69][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[69][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[69][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[69][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[69] = choices[69][1];
 units[69] = "14";
 comments[69] = "Id Pregunta: 680. Dependencia";
 preguntaids[69] = 680


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[70]= "71)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[70]= new Array();
 choices[70][0] = "El presidente de las Cortes Generales.";
 choices[70][1] = "El Presidente del Gobierno.";
 choices[70][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[70][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[70] = choices[70][3];
 units[70] = "10";
 comments[70] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";
 preguntaids[70] = 502


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[71]= "72)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[71]= new Array();
 choices[71][0] = "CO.PER.";
 choices[71][1] = "COMPER.";
 choices[71][2] = "CO.RE.PER.";
 choices[71][3] = "CO.PE.RRE.";
 answers[71] = choices[71][2];
 units[71] = "5";
 comments[71] = "Id Pregunta: 338. UNION EUROPEA";
 preguntaids[71] = 338


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[72]= "73)  La sede del Parlamento Europeo se encuentra en:";
 choices[72]= new Array();
 choices[72][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[72][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[72][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[72][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[72] = choices[72][1];
 units[72] = "5";
 comments[72] = "Id Pregunta: 351. UNION EUROPEA";
 preguntaids[72] = 351


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[73]= new Array();
 choices[73][0] = "Ley Org&aacute;nica.";
 choices[73][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[73][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[73][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[73] = choices[73][2];
 units[73] = "1";
 comments[73] = "Id Pregunta: 203. CONSTITUCION1978";
 preguntaids[73] = 203


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[74]= "75)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[74]= new Array();
 choices[74][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[74][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[74][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[74][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[74] = choices[74][3];
 units[74] = "12";
 comments[74] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";
 preguntaids[74] = 132


