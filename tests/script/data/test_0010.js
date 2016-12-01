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

//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[0]= "1)  En el lenguaje de modelado UML :";
 choices[0]= new Array();
 choices[0][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[0][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[0][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[0][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[0] = choices[0][2];
 units[0] = "89";
 comments[0] = "Id Pregunta: 3. AGE A1 2015";
 preguntaids[0] = 3


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[1]= "2)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[1]= new Array();
 choices[1][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[1][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[1][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[1][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[1] = choices[1][3];
 units[1] = "44";
 comments[1] = "Id Pregunta: 17. AGE A1 2015";
 preguntaids[1] = 17


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la respuesta falsa";
 choices[2]= new Array();
 choices[2][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[2][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[2][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[2][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[2] = choices[2][3];
 units[2] = "22";
 comments[2] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";
 preguntaids[2] = 276


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[3]= new Array();
 choices[3][0] = "Art. 25 LO, 3/2007.";
 choices[3][1] = "Art. 23 LO, 3/2007.";
 choices[3][2] = "Art. 14 LO, 3/2007.";
 choices[3][3] = "Ninguna es correcta, es el art. 13.";
 answers[3] = choices[3][0];
 units[3] = "14";
 comments[3] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";
 preguntaids[3] = 416


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[4]= "5)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[4]= new Array();
 choices[4][0] = "El Gobierno.";
 choices[4][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[4][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[4][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[4] = choices[4][2];
 units[4] = "1";
 comments[4] = "Id Pregunta: 206. CONSTITUCION1978";
 preguntaids[4] = 206


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[5]= "6)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[5]= new Array();
 choices[5][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[5][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[5][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[5][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[5] = choices[5][2];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 813. Ley 40/2015";
 preguntaids[5] = 813


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[6]= new Array();
 choices[6][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[6][1] = "Intervenci&oacute;n formal y material.";
 choices[6][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[6][3] = "Intervenci&oacute;n formal y general.";
 answers[6] = choices[6][1];
 units[6] = "10";
 comments[6] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";
 preguntaids[6] = 480


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[7]= new Array();
 choices[7][0] = "Las Cortes Generales.";
 choices[7][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[7][2] = "El Gobierno.";
 choices[7][3] = "El Congreso de los Diputados.";
 answers[7] = choices[7][0];
 units[7] = "10";
 comments[7] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";
 preguntaids[7] = 489


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[8]= new Array();
 choices[8][0] = "Yarn";
 choices[8][1] = "Flume";
 choices[8][2] = "Hive";
 choices[8][3] = "BizAgi";
 answers[8] = choices[8][3];
 units[8] = "73";
 comments[8] = "Id Pregunta: 657. ";
 preguntaids[8] = 657


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[9]= new Array();
 choices[9][0] = "ISO/IEC 31000";
 choices[9][1] = "ISO/IEC 14000";
 choices[9][2] = "ISO/IEC 38500";
 choices[9][3] = "ISO/IEC 18000";
 answers[9] = choices[9][2];
 units[9] = "26";
 comments[9] = "Id Pregunta: 545. Gobernanza TIC";
 preguntaids[9] = 545


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[10]= new Array();
 choices[10][0] = "Jenkins";
 choices[10][1] = "Hudson";
 choices[10][2] = "SonarQube";
 choices[10][3] = "Todas lo son";
 answers[10] = choices[10][3];
 units[10] = "92";
 comments[10] = "Id Pregunta: 695. INTEGRACION CONTINUA";
 preguntaids[10] = 695


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[11]= new Array();
 choices[11][0] = "El 5 de Octubre de 2015";
 choices[11][1] = "El 15 de Octubre de 2015";
 choices[11][2] = "El 15 de Septiembre de 2015";
 choices[11][3] = "El 2 de Octubre de 2015";
 answers[11] = choices[11][2];
 units[11] = "19";
 comments[11] = "Id Pregunta: 584. Estrategia TIC";
 preguntaids[11] = 584


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[12]= new Array();
 choices[12][0] = "Se dejan listos los entornos de desarrollo";
 choices[12][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[12][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[12][3] = "Todas las anteriores son correctas";
 answers[12] = choices[12][3];
 units[12] = "34, 84";
 comments[12] = "Id Pregunta: 725. Metodologias &aacute;giles";
 preguntaids[12] = 725


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[13]= "14)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[13]= new Array();
 choices[13][0] = "la capital del pa&iacute;s";
 choices[13][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[13][2] = "cada una de las provincias";
 choices[13][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[13] = choices[13][1];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 812. Ley 40/2015";
 preguntaids[13] = 812


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[14]= "15)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[14]= new Array();
 choices[14][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[14][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[14][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[14][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[14] = choices[14][3];
 units[14] = "12";
 comments[14] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";
 preguntaids[14] = 132


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[15]= new Array();
 choices[15][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[15][1] = "El Gobierno.";
 choices[15][2] = "El Presidente del Gobierno.";
 choices[15][3] = "El Consejo de Ministros.";
 answers[15] = choices[15][1];
 units[15] = "10";
 comments[15] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";
 preguntaids[15] = 490


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[16]= new Array();
 choices[16][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[16][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[16][2] = "la falta de interoperabilidad.";
 choices[16][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[16] = choices[16][1];
 units[16] = "5";
 comments[16] = "Id Pregunta: 285. UNION EUROPEA";
 preguntaids[16] = 285


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[17]= "18)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[17]= new Array();
 choices[17][0] = "Relaciones base y vistas.";
 choices[17][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[17][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[17][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[17] = choices[17][3];
 units[17] = "60";
 comments[17] = "Id Pregunta: 637. Junta de Extremadura A1 2015";
 preguntaids[17] = 637


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[18]= "19)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[18]= new Array();
 choices[18][0] = "Establecer tributos.";
 choices[18][1] = "Desarrollar lo establecido en una Ley.";
 choices[18][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[18][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[18] = choices[18][0];
 units[18] = "1";
 comments[18] = "Id Pregunta: 197. CONSTITUCION1978";
 preguntaids[18] = 197


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[19]= "20)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[19]= new Array();
 choices[19][0] = "En sentencias switch para alterar el control de flujo.";
 choices[19][1] = "Para manejar excepciones.";
 choices[19][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[19][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[19] = choices[19][1];
 units[19] = "64";
 comments[19] = "Id Pregunta: 626. Junta de Extremadura A1 2015";
 preguntaids[19] = 626


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[20]= "21)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[20]= new Array();
 choices[20][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[20][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[20][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[20][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[20] = choices[20][0];
 units[20] = "12";
 comments[20] = "Id Pregunta: 568. Modelo econ&oacute;mico";
 preguntaids[20] = 568


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[21]= "22)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[21]= new Array();
 choices[21][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[21][1] = "Anteriormente se denominaba Sonar.";
 choices[21][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[21][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[21] = choices[21][2];
 units[21] = "92";
 comments[21] = "Id Pregunta: 272. INTEGRACION CONTINUA";
 preguntaids[21] = 272


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[22]= new Array();
 choices[22][0] = "Versi&oacute;n digital prioritaria.";
 choices[22][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[22][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[22][3] = "Apertura y transparencia.";
 answers[22] = choices[22][0];
 units[22] = "5";
 comments[22] = "Id Pregunta: 287. UNION EUROPEA";
 preguntaids[22] = 287


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[23]= "24)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[23]= new Array();
 choices[23][0] = "Tres a&ntilde;os.";
 choices[23][1] = "Cuatro a&ntilde;os.";
 choices[23][2] = "Cinco a&ntilde;os.";
 choices[23][3] = "Seis a&ntilde;os.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 324. UNION EUROPEA";
 preguntaids[23] = 324


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[24]= new Array();
 choices[24][0] = "117.5";
 choices[24][1] = "117.1";
 choices[24][2] = "116";
 choices[24][3] = "15";
 answers[24] = choices[24][0];
 units[24] = "1";
 comments[24] = "Id Pregunta: 260. CONSTITUCION1978";
 preguntaids[24] = 260


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[25]= "26)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[25]= new Array();
 choices[25][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[25][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[25][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[25][3] = "Todas las respuestas son correctas.";
 answers[25] = choices[25][3];
 units[25] = "50";
 comments[25] = "Id Pregunta: 622. Junta de Extremadura A1 2015";
 preguntaids[25] = 622


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[26]= new Array();
 choices[26][0] = "B&aacute;sico, medio y alto";
 choices[26][1] = "D&eacute;bil y fuerte";
 choices[26][2] = "Bajo, medio y alto";
 choices[26][3] = "Bajo, sustancial y alto";
 answers[26] = choices[26][3];
 units[26] = "77";
 comments[26] = "Id Pregunta: 686. Art&iacute;culo 8 del Reglamento 910/2014";
 preguntaids[26] = 686


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[27]= "28)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[27]= new Array();
 choices[27][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[27][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[27][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[27][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[27] = choices[27][2];
 units[27] = "27";
 comments[27] = "Id Pregunta: 20. AGE A1 2015";
 preguntaids[27] = 20


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[28]= "29)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[28]= new Array();
 choices[28][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[28][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[28][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[28][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[28] = choices[28][1];
 units[28] = "43";
 comments[28] = "Id Pregunta: 443. SERVICIOS COMUNES";
 preguntaids[28] = 443


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[29]= "30)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[29]= new Array();
 choices[29][0] = "Subsecretario";
 choices[29][1] = "Subdirector general";
 choices[29][2] = "Secretario de Estado";
 choices[29][3] = "ninguna es correcta";
 answers[29] = choices[29][0];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 791. Ley 40/2015";
 preguntaids[29] = 791


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[30]= "31)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[30]= new Array();
 choices[30][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[30][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[30][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[30][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[30] = choices[30][2];
 units[30] = "22";
 comments[30] = "Id Pregunta: 128. ";
 preguntaids[30] = 128


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[31]= "32)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[31]= new Array();
 choices[31][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[31][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo; (manejo en una serie amplia de &aacute;reas, con conocimientos en profundidad en unas pocas)";
 choices[31][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[31][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea";
 answers[31] = choices[31][0];
 units[31] = "34, 84";
 comments[31] = "Id Pregunta: 727. Metodologias &aacute;giles";
 preguntaids[31] = 727


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[32]= "33)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[32]= new Array();
 choices[32][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[32][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[32][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[32][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[32] = choices[32][2];
 units[32] = "19";
 comments[32] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";
 preguntaids[32] = 168


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[33]= "34)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[33]= new Array();
 choices[33][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[33][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[33][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[33][3] = "Todas las anteriores son correctas.";
 answers[33] = choices[33][3];
 units[33] = "47";
 comments[33] = "Id Pregunta: 676. Receta electr&oacute;nica";
 preguntaids[33] = 676


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[34]= new Array();
 choices[34][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[34][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[34][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[34][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[34] = choices[34][2];
 units[34] = "77";
 comments[34] = "Id Pregunta: 693. Anexo I del Reglamento 910/2014";
 preguntaids[34] = 693


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[35]= "36)  En cuanto al an&aacute;lisis DAFO:";
 choices[35]= new Array();
 choices[35][0] = "Considera detallada y exclusivamente factores internos.";
 choices[35][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[35][2] = "Considera detallada y exclusivamente factores externos.";
 choices[35][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[35] = choices[35][1];
 units[35] = "83";
 comments[35] = "Id Pregunta: 41. AGE A1 2015";
 preguntaids[35] = 41


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[36]= "37)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[36]= new Array();
 choices[36][0] = "los registros mercantiles";
 choices[36][1] = "los registros de la propiedad";
 choices[36][2] = "los protocolos notariales";
 choices[36][3] = "todas son correctas";
 answers[36] = choices[36][3];
 units[36] = "7";
 comments[36] = "Id Pregunta: 540. LEY 39/2015";
 preguntaids[36] = 540


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[37]= new Array();
 choices[37][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[37][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[37][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[37][3] = "El Senado se compone de 350 senadores.";
 answers[37] = choices[37][0];
 units[37] = "1";
 comments[37] = "Id Pregunta: 212. CONSTITUCION1978";
 preguntaids[37] = 212


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[38]= new Array();
 choices[38][0] = "Compatibilidad";
 choices[38][1] = "Interoperabilidad";
 choices[38][2] = "Reutilizaci&oacute;n";
 choices[38][3] = "Accesibilidad";
 answers[38] = choices[38][0];
 units[38] = "22";
 comments[38] = "Id Pregunta: 705. Ley de transparencia";
 preguntaids[38] = 705


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[39]= new Array();
 choices[39][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[39][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[39][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[39][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[39] = choices[39][0];
 units[39] = "62";
 comments[39] = "Id Pregunta: 12. AGE A1 2015";
 preguntaids[39] = 12


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[40]= "41)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[40]= new Array();
 choices[40][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[40][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[40][2] = "el Subdirector General que el Delegado designe";
 choices[40][3] = "el Secretario de Estado";
 answers[40] = choices[40][0];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 822. Ley 40/2015";
 preguntaids[40] = 822


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[41]= "42)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[41]= new Array();
 choices[41][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[41][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[41][2] = "Ninguna es correcta.";
 choices[41][3] = "A y B son correctas.";
 answers[41] = choices[41][0];
 units[41] = "14";
 comments[41] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";
 preguntaids[41] = 424


//  Id pregunta: 858 Año de creación de pregunta: 2016
 questions[42]= "43)  Respecto de la imagen institucional de los sitios web p&uacute;blicos:";
 choices[42]= new Array();
 choices[42][0] = "La utilizaci&oacute;n de s&iacute;mbolos de imagen o logotipos propios ser&aacute; comunicada al Ministerio de Energ&iacute;a, Turismo y Agenda Digital  para facilitar el cumplimiento de la prohibici&oacute;n legal de registrar signos que los reproduzcan o imiten.";
 choices[42][1] = "Los s&iacute;mbolos y logotipos propios podr&aacute;n ser registrados como marca en el caso de que vayan a ser utilizados en el tr&aacute;fico econ&oacute;mico.";
 choices[42][2] = "Los documentos anexos alojados en p&aacute;ginas webs, que puedan ser susceptibles de ser considerados material de papeler&iacute;a, utilizar&aacute;n el logotipo propio.";
 choices[42][3] = "De acuerdo con el Real Decreto 1565/1999, con car&aacute;cter excepcional, y siempre que se acrediten razones debidamente justificadas, el Ministro de Hacienda y Funci&oacute;n P&uacute;blica y el titular del correspondiente Ministerio de adscripci&oacute;n, vinculaci&oacute;n o dependencia podr&aacute;n autorizar la utilizaci&oacute;n por determinados &oacute;rganos, Organismos aut&oacute;nomos y Servicios Comunes o Entidades Gestoras de la Seguridad Social de s&iacute;mbolos de imagen o logotipos propios junto a los s&iacute;mbolos establecidos.";
 answers[42] = choices[42][1];
 units[42] = "125";
 comments[42] = "Id Pregunta: 858. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[42] = 858


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[43]= "44)  El Parlamento Europeo celebrar&aacute;:";
 choices[43]= new Array();
 choices[43][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[43][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[43][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[43][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[43] = choices[43][0];
 units[43] = "5";
 comments[43] = "Id Pregunta: 290. UNION EUROPEA";
 preguntaids[43] = 290


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[44]= new Array();
 choices[44][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[44][1] = "La Direcci&oacute;n de la Competencia.";
 choices[44][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[44][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[44] = choices[44][0];
 units[44] = "121";
 comments[44] = "Id Pregunta: 628. Junta de Extremadura A1 2015";
 preguntaids[44] = 628


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[45]= "46)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[45]= new Array();
 choices[45][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[45][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[45][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[45][3] = "A las Diputaciones y a las Comarcas.";
 answers[45] = choices[45][3];
 units[45] = "1";
 comments[45] = "Id Pregunta: 229. CONSTITUCION1978";
 preguntaids[45] = 229


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[46]= new Array();
 choices[46][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[46][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[46][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[46][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[46] = choices[46][1];
 units[46] = "1";
 comments[46] = "Id Pregunta: 219. CONSTITUCION1978";
 preguntaids[46] = 219


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[47]= "48)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[47]= new Array();
 choices[47][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[47][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[47][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[47][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[47] = choices[47][3];
 units[47] = "1";
 comments[47] = "Id Pregunta: 253. CONSTITUCION1978";
 preguntaids[47] = 253


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[48]= "49)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[48]= new Array();
 choices[48][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[48][1] = "1 de enero de 2015";
 choices[48][2] = "1 de enero de 2016";
 choices[48][3] = "1 de julio de 2016";
 answers[48] = choices[48][3];
 units[48] = "77";
 comments[48] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[48] = 691


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[49]= new Array();
 choices[49][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[49][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[49][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[49][3] = "Todos los anteriores";
 answers[49] = choices[49][3];
 units[49] = "19";
 comments[49] = "Id Pregunta: 592. Estrategia TIC";
 preguntaids[49] = 592


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[50]= new Array();
 choices[50][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[50][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[50][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[50][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[50] = choices[50][0];
 units[50] = "91";
 comments[50] = "Id Pregunta: 6. AGE A1 2015";
 preguntaids[50] = 6


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[51]= new Array();
 choices[51][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[51][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[51][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[51][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[51] = choices[51][3];
 units[51] = "34, 84";
 comments[51] = "Id Pregunta: 724. Metodologias &aacute;giles";
 preguntaids[51] = 724


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[52]= new Array();
 choices[52][0] = "No, en ning&uacute;n caso.";
 choices[52][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[52][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[52][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[52] = choices[52][3];
 units[52] = "1";
 comments[52] = "Id Pregunta: 188. CONSTITUCION1978";
 preguntaids[52] = 188


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban?:";
 choices[53]= new Array();
 choices[53][0] = "Visualizar el trabajo o el flujo de trabajo";
 choices[53][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[53][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[53][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[53] = choices[53][3];
 units[53] = "34, 84";
 comments[53] = "Id Pregunta: 733. Metodologias &aacute;giles";
 preguntaids[53] = 733


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[54]= "55)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[54]= new Array();
 choices[54][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[54][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[54][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[54][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[54] = choices[54][3];
 units[54] = "77";
 comments[54] = "Id Pregunta: 48. AGE A1 2015";
 preguntaids[54] = 48


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[55]= new Array();
 choices[55][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[55][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[55][2] = "Gestionar el Registro de Operadores.";
 choices[55][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[55] = choices[55][3];
 units[55] = "121";
 comments[55] = "Id Pregunta: 24. AGE A1 2015";
 preguntaids[55] = 24


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[56]= "57)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[56]= new Array();
 choices[56][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[56][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[56][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[56][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[56] = choices[56][1];
 units[56] = "5";
 comments[56] = "Id Pregunta: 298. UNION EUROPEA";
 preguntaids[56] = 298


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[57]= "58)  En las Administraciones P&uacute;blicas...";
 choices[57]= new Array();
 choices[57][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[57][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[57][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[57][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[57] = choices[57][0];
 units[57] = "10";
 comments[57] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";
 preguntaids[57] = 455


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[58]= new Array();
 choices[58][0] = "El Consejo Europeo.";
 choices[58][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[58][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[58][3] = "El Parlamento Europeo.";
 answers[58] = choices[58][0];
 units[58] = "5";
 comments[58] = "Id Pregunta: 313. UNION EUROPEA";
 preguntaids[58] = 313


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[59]= "60)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[59]= new Array();
 choices[59][0] = "Ley org&aacute;nica.";
 choices[59][1] = "Ley ordinaria.";
 choices[59][2] = "Ley de bases.";
 choices[59][3] = "Ley marco.";
 answers[59] = choices[59][0];
 units[59] = "1";
 comments[59] = "Id Pregunta: 271. CONSTITUCION1978";
 preguntaids[59] = 271


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[60]= "61)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[60]= new Array();
 choices[60][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[60][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[60][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[60][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[60] = choices[60][1];
 units[60] = "43";
 comments[60] = "Id Pregunta: 439. SERVICIOS COMUNES";
 preguntaids[60] = 439


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[61]= new Array();
 choices[61][0] = "Entre 1973 y 1978";
 choices[61][1] = "Entre 1992 y 1996";
 choices[61][2] = "Entre 1978 y 1985";
 choices[61][3] = "Entre 2008 y 2013";
 answers[61] = choices[61][2];
 units[61] = "12";
 comments[61] = "Id Pregunta: 564. Modelo econ&oacute;mico";
 preguntaids[61] = 564


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[62]= "63)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[62]= new Array();
 choices[62][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[62][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[62][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[62][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[62] = choices[62][3];
 units[62] = "26";
 comments[62] = "Id Pregunta: 552. Gobernanza TIC";
 preguntaids[62] = 552


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[63]= "64)  La partida presupuestaria es equivalente a...";
 choices[63]= new Array();
 choices[63][0] = "El sujeto que realiza el gasto";
 choices[63][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[63][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[63][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[63] = choices[63][3];
 units[63] = "10";
 comments[63] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";
 preguntaids[63] = 450


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[64]= "65)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[64]= new Array();
 choices[64][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[64][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[64][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[64][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[64] = choices[64][3];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 803. Ley 40/2015";
 preguntaids[64] = 803


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[65]= new Array();
 choices[65][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[65][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[65][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[65][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[65] = choices[65][1];
 units[65] = "7";
 comments[65] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";
 preguntaids[65] = 156


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[66]= new Array();
 choices[66][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[66][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[66][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[66][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[66] = choices[66][1];
 units[66] = "43";
 comments[66] = "Id Pregunta: 444. SERVICIOS COMUNES";
 preguntaids[66] = 444


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[67]= new Array();
 choices[67][0] = "Crecimiento sostenible";
 choices[67][1] = "Crecimiento inteligente";
 choices[67][2] = "Crecimiento digital";
 choices[67][3] = "Crecimiento integrador";
 answers[67] = choices[67][2];
 units[67] = "19";
 comments[67] = "Id Pregunta: 759. Europa 2020";
 preguntaids[67] = 759


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[68]= "69)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[68]= new Array();
 choices[68][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[68][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[68][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[68][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";
 preguntaids[68] = 494


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[69]= "70)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[69]= new Array();
 choices[69][0] = "2025";
 choices[69][1] = "2023";
 choices[69][2] = "2030";
 choices[69][3] = "2020";
 answers[69] = choices[69][3];
 units[69] = "28";
 comments[69] = "Id Pregunta: 739. Estrategia TIC";
 preguntaids[69] = 739


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[70]= "71)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[70]= new Array();
 choices[70][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[70][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[70][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[70][3] = "Todas son correctas.";
 answers[70] = choices[70][3];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 834. Ley 40/2015";
 preguntaids[70] = 834


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[71]= "72)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[71][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[71][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[71][3] = "cualquiera que sea el estado del procedimiento";
 answers[71] = choices[71][3];
 units[71] = "7";
 comments[71] = "Id Pregunta: 527. LEY 39/2015";
 preguntaids[71] = 527


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[72]= new Array();
 choices[72][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[72][1] = "Pasivos financieros y transferencias de capital.";
 choices[72][2] = "Activos financieros y pasivos financieros.";
 choices[72][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[72] = choices[72][2];
 units[72] = "10";
 comments[72] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";
 preguntaids[72] = 461


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[73]= "74)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[73]= new Array();
 choices[73][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[73][1] = "El Congreso de los Diputados.";
 choices[73][2] = "Las Cortes Generales.";
 choices[73][3] = "El Consejo de Ministros";
 answers[73] = choices[73][3];
 units[73] = "1";
 comments[73] = "Id Pregunta: 209. CONSTITUCION1978";
 preguntaids[73] = 209


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[74]= "75)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[74]= new Array();
 choices[74][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[74][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[74][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[74][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[74] = choices[74][3];
 units[74] = "41";
 comments[74] = "Id Pregunta: 82. AGE A1 2015";
 preguntaids[74] = 82


