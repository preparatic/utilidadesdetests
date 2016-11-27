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

//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; es SonarQube?";
 choices[0]= new Array();
 choices[0][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[0][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[0][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[0][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[0] = choices[0][2];
 units[0] = "92";
 comments[0] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[1]= "2)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[1]= new Array();
 choices[1][0] = "Son actos normativos.";
 choices[1][1] = "Poseen alcance general.";
 choices[1][2] = "No son obligatorias.";
 choices[1][3] = "Son actos individuales no normativos.";
 answers[1] = choices[1][3];
 units[1] = "5";
 comments[1] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[2]= "3)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[2]= new Array();
 choices[2][0] = "18 miembros.";
 choices[2][1] = "Ninguna es correcta.";
 choices[2][2] = "22 miembros.";
 choices[2][3] = "21 miembros.";
 answers[2] = choices[2][1];
 units[2] = "5";
 comments[2] = "Id Pregunta: 347. UNION EUROPEA";


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[3][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[3][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[3][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[3] = choices[3][0];
 units[3] = "1";
 comments[3] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[4]= "5)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[4]= new Array();
 choices[4][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[4][1] = "Tratarse de un acto no susceptible de recurso";
 choices[4][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[4][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[4] = choices[4][2];
 units[4] = "8";
 comments[4] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[5]= "6)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[5]= new Array();
 choices[5][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[5][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[5][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[5][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[5] = choices[5][1];
 units[5] = "5";
 comments[5] = "Id Pregunta: 339. UNION EUROPEA";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[6]= new Array();
 choices[6][0] = "El Parlamento y el Consejo.";
 choices[6][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[6][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[6][3] = "La Comisi&oacute;n y el Consejo.";
 answers[6] = choices[6][1];
 units[6] = "5";
 comments[6] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[7]= "8)  El Tribunal de Justicia est&aacute; formado por:";
 choices[7]= new Array();
 choices[7][0] = "Un Juez de cada Estado miembro.";
 choices[7][1] = "Por dos Jueces de cada Estado miembro.";
 choices[7][2] = "Por veinte Jueces.";
 choices[7][3] = "Por ocho Jueces.";
 answers[7] = choices[7][0];
 units[7] = "5";
 comments[7] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[8]= new Array();
 choices[8][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[8][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[8][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[8][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[8] = choices[8][2];
 units[8] = "7";
 comments[8] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[9]= new Array();
 choices[9][0] = "Al menos cada 12 meses";
 choices[9][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[9][2] = "Al menos cada 18 meses";
 choices[9][3] = "Al menos cada 24 meses";
 answers[9] = choices[9][3];
 units[9] = "77";
 comments[9] = "Id Pregunta: 685. Art&iacute;culo 20 del Reglamento 910/2014";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[10]= "11)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[10]= new Array();
 choices[10][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[10][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[10][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[10][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[10] = choices[10][2];
 units[10] = "7";
 comments[10] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[11]= new Array();
 choices[11][0] = "Principio de solo una vez";
 choices[11][1] = "Apertura y transparencia";
 choices[11][2] = "Confianza y seguridad";
 choices[11][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[11] = choices[11][3];
 units[11] = "19";
 comments[11] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; es Java Web Start?";
 choices[12]= new Array();
 choices[12][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[12][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[12][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[12][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[12] = choices[12][3];
 units[12] = "64";
 comments[12] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[13]= "14)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[13]= new Array();
 choices[13][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[13][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[13][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[13][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[13] = choices[13][2];
 units[13] = "85";
 comments[13] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[14]= new Array();
 choices[14][0] = "Art&iacute;culo 70.";
 choices[14][1] = "Art&iacute;culo 54.";
 choices[14][2] = "Articulo 62.";
 choices[14][3] = "Articulo 55. 5.";
 answers[14] = choices[14][2];
 units[14] = "1";
 comments[14] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[15]= "16)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[15]= new Array();
 choices[15][0] = "La Ley General Tributaria.";
 choices[15][1] = "La Ley Presupuestaria.";
 choices[15][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[15][3] = "Ninguna de las respuestas es correcta.";
 answers[15] = choices[15][0];
 units[15] = "10";
 comments[15] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[16]= "17)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[16]= new Array();
 choices[16][0] = "La Comisi&oacute;n.";
 choices[16][1] = "El Consejo de Europa.";
 choices[16][2] = "El Consejo Europeo.";
 choices[16][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[17]= "18)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[17]= new Array();
 choices[17][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[17][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[17][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[17][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[17] = choices[17][1];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[18]= "19)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[18]= new Array();
 choices[18][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[18][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[18][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[18][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[18] = choices[18][0];
 units[18] = "43";
 comments[18] = "Id Pregunta: 434. SERVICIOS COMUNES";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[19]= "20)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[19]= new Array();
 choices[19][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[19][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[19][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[19][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[19] = choices[19][2];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[20]= "21)  La soberan&iacute;a nacional reside en:";
 choices[20]= new Array();
 choices[20][0] = "el Parlamento nacional.";
 choices[20][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[20][2] = "el pueblo espa&ntilde;ol.";
 choices[20][3] = "el Congreso y el Senado.";
 answers[20] = choices[20][3];
 units[20] = "1";
 comments[20] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[21]= "22)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[21]= new Array();
 choices[21][0] = "El derecho a un permiso.";
 choices[21][1] = "Una prestaci&oacute;n por paternidad.";
 choices[21][2] = "Ambas son correctas.";
 choices[21][3] = "18 d&iacute;as de permiso.";
 answers[21] = choices[21][2];
 units[21] = "14";
 comments[21] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[22]= new Array();
 choices[22][0] = "Memcached";
 choices[22][1] = "OpCache";
 choices[22][2] = "WinCache Extension for PHP";
 choices[22][3] = "Alternative PHP Cache";
 answers[22] = choices[22][0];
 units[22] = "65";
 comments[22] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[23]= "24)  El pacto fiscal europeo de 2012 incluye:";
 choices[23]= new Array();
 choices[23][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[23][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[23][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[23][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[23] = choices[23][0];
 units[23] = "5";
 comments[23] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[24]= new Array();
 choices[24][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[24][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[24][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[24][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[24] = choices[24][3];
 units[24] = "12";
 comments[24] = "Id Pregunta: 565. Modelo econ&oacute;mico";


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[25]= "26)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[25]= new Array();
 choices[25][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[25][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[25][2] = "A y B son correctas.";
 choices[25][3] = "A y B son incorrectas.";
 answers[25] = choices[25][2];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 832. Ley 40/2015";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[26]= "27)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[26]= new Array();
 choices[26][0] = "Subsecretario";
 choices[26][1] = "Subdirector general";
 choices[26][2] = "Secretario de Estado";
 choices[26][3] = "ninguna es correcta";
 answers[26] = choices[26][1];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[27]= "28)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[27]= new Array();
 choices[27][0] = "Diez art&iacute;culos.";
 choices[27][1] = "Nueve art&iacute;culos.";
 choices[27][2] = "Once art&iacute;culos.";
 choices[27][3] = "Ocho art&iacute;culos.";
 answers[27] = choices[27][0];
 units[27] = "1";
 comments[27] = "Id Pregunta: 269. CONSTITUCION1978";


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[28]= "29)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[28]= new Array();
 choices[28][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[28][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[28][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[28][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[28] = choices[28][2];
 units[28] = "53";
 comments[28] = "Id Pregunta: 65. AGE A1 2015";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[29]= "30)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[29]= new Array();
 choices[29][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[29][1] = "los Subdelegados del Gobierno en las provincias";
 choices[29][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[29][3] = "a y b son correctas";
 answers[29] = choices[29][3];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[30]= "31)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[30]= new Array();
 choices[30][0] = "Intersecci&oacute;n.";
 choices[30][1] = "Uni&oacute;n.";
 choices[30][2] = "Restricci&oacute;n.";
 choices[30][3] = "Diferencia.";
 answers[30] = choices[30][0];
 units[30] = "60";
 comments[30] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[31]= "32)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[31]= new Array();
 choices[31][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[31][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[31][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[31][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[31] = choices[31][2];
 units[31] = "8";
 comments[31] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[32]= new Array();
 choices[32][0] = "Cuatro.";
 choices[32][1] = "Ninguno.";
 choices[32][2] = "Dos.";
 choices[32][3] = "Seis.";
 answers[32] = choices[32][2];
 units[32] = "1";
 comments[32] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[33]= "34)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[33]= new Array();
 choices[33][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[33][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[33][2] = "A partir del 1 de enero de 2015";
 choices[33][3] = "A partir del 1 de julio de 2016";
 answers[33] = choices[33][1];
 units[33] = "77";
 comments[33] = "Id Pregunta: 690. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[34]= "35)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[34]= new Array();
 choices[34][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[34][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[34][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[34][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[34] = choices[34][2];
 units[34] = "26";
 comments[34] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[35]= new Array();
 choices[35][0] = "Yarn";
 choices[35][1] = "Flume";
 choices[35][2] = "Hive";
 choices[35][3] = "BizAgi";
 answers[35] = choices[35][3];
 units[35] = "73";
 comments[35] = "Id Pregunta: 655. ";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[36]= "37)  Las Universidades p&uacute;blicas:";
 choices[36]= new Array();
 choices[36][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[36][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[36][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[36][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[36] = choices[36][1];
 units[36] = "7";
 comments[36] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[37]= "38)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[37]= new Array();
 choices[37][0] = "Relaciones base y vistas.";
 choices[37][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[37][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[37][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[37] = choices[37][3];
 units[37] = "60";
 comments[37] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[38]= new Array();
 choices[38][0] = "Diagrama de clases";
 choices[38][1] = "Diagrama de componentes";
 choices[38][2] = "Diagrama de estructura";
 choices[38][3] = "Diagrama de paquetes";
 answers[38] = choices[38][0];
 units[38] = "91";
 comments[38] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[39]= "40)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[39]= new Array();
 choices[39][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[39][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[39][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[39][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[39] = choices[39][0];
 units[39] = "109";
 comments[39] = "Id Pregunta: 615. Junta de Extremadura A1 2015";


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[40]= new Array();
 choices[40][0] = "El 1 de junio de 1999.";
 choices[40][1] = "El 1 de mayo de 1999.";
 choices[40][2] = "El 1 de abril de 1999.";
 choices[40][3] = "El 1 de marzo de 1999.";
 answers[40] = choices[40][1];
 units[40] = "5";
 comments[40] = "Id Pregunta: 364. UNION EUROPEA";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[41]= new Array();
 choices[41][0] = "Art&iacute;culo 9.1 CE.";
 choices[41][1] = "Art&iacute;culo 53 CE.";
 choices[41][2] = "Art&iacute;culo 14 CE.";
 choices[41][3] = "Art&iacute;culo 16 CE.";
 answers[41] = choices[41][2];
 units[41] = "14";
 comments[41] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[42]= "43)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[42]= new Array();
 choices[42][0] = "Discriminaci&oacute;n indirecta.";
 choices[42][1] = "Discriminaci&oacute;n directa.";
 choices[42][2] = "Discriminaci&oacute;n por maternidad.";
 choices[42][3] = "Discriminaci&oacute;n abusiva.";
 answers[42] = choices[42][1];
 units[42] = "14";
 comments[42] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[43]= new Array();
 choices[43][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[43][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[43][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[43][3] = "El Senado se compone de 350 senadores.";
 answers[43] = choices[43][0];
 units[43] = "1";
 comments[43] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[44]= "45)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[44]= new Array();
 choices[44][0] = "Conformidad";
 choices[44][1] = "Responsabilidad";
 choices[44][2] = "Adquisici&oacute;n";
 choices[44][3] = "Desempe&ntilde;o";
 answers[44] = choices[44][0];
 units[44] = "26";
 comments[44] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[45]= "46)  Son bases de datos NoSQL:";
 choices[45]= new Array();
 choices[45][0] = "MongoDB y Maria DB";
 choices[45][1] = "HBase y Dynamo";
 choices[45][2] = "MariaDB, Cassandra y BigTable";
 choices[45][3] = "La A) y la C)";
 answers[45] = choices[45][1];
 units[45] = "73";
 comments[45] = "Id Pregunta: 104. ";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[46]= "47)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[46]= new Array();
 choices[46][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[46][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[46][2] = "a y b son correctas";
 choices[46][3] = "a y b son incorrectas";
 answers[46] = choices[46][0];
 units[46] = "7";
 comments[46] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[47]= new Array();
 choices[47][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[47][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[47][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[47][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[47] = choices[47][3];
 units[47] = "57";
 comments[47] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[48]= "49)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[48]= new Array();
 choices[48][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[48][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[48][2] = "Son refrendados por el Rey.";
 choices[48][3] = "Son convocados por el Presidente del Gobierno.";
 answers[48] = choices[48][0];
 units[48] = "1";
 comments[48] = "Id Pregunta: 217. CONSTITUCION1978";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[49]= new Array();
 choices[49][0] = "Establecer redes de telecomunicaciones continentales";
 choices[49][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[49][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[49][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[49] = choices[49][0];
 units[49] = "17";
 comments[49] = "Id Pregunta: 552. Mercado &Uacute;nico Digital";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[50]= "51)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[50]= new Array();
 choices[50][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[50][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[50][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[50][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[50] = choices[50][2];
 units[50] = "43";
 comments[50] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[51]= new Array();
 choices[51][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[51][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[51][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[51][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[51] = choices[51][0];
 units[51] = "22";
 comments[51] = "Id Pregunta: 124. ";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[52]= "53)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[52]= new Array();
 choices[52][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[52][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[52][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[52][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[52] = choices[52][3];
 units[52] = "10";
 comments[52] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[53]= new Array();
 choices[53][0] = "Varios namenodes y varios datanodes por cluster";
 choices[53][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[53][2] = "1 namenode y varios datanodes por cluster";
 choices[53][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[53] = choices[53][2];
 units[53] = "73";
 comments[53] = "Id Pregunta: 661. ";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[54]= new Array();
 choices[54][0] = "Estrasburgo.";
 choices[54][1] = "Bruselas.";
 choices[54][2] = "Luxemburgo.";
 choices[54][3] = "Par&iacute;s.";
 answers[54] = choices[54][1];
 units[54] = "5";
 comments[54] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[55]= "56)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[55]= new Array();
 choices[55][0] = "P&uacute;blica.";
 choices[55][1] = "Privada.";
 choices[55][2] = "A y B son correctas.";
 choices[55][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[55] = choices[55][2];
 units[55] = "14";
 comments[55] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[56]= "57)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[56]= new Array();
 choices[56][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[56][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[56][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[56][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[56] = choices[56][1];
 units[56] = "22";
 comments[56] = "Id Pregunta: 711. Portal de Transparencia";


//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[57]= new Array();
 choices[57][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[57][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[57][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[57][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[57] = choices[57][1];
 units[57] = "92";
 comments[57] = "Id Pregunta: 696. INTEGRACION CONTINUA";


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[58]= "59)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[58][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[58][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[58][3] = "cualquiera que sea el estado del procedimiento";
 answers[58] = choices[58][3];
 units[58] = "7";
 comments[58] = "Id Pregunta: 525. LEY 39/2015";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[59]= "60)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[59]= new Array();
 choices[59][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[59][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[59][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[59][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[59] = choices[59][2];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[60]= "61)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[60]= new Array();
 choices[60][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[60][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[60][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[60][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[60] = choices[60][1];
 units[60] = "19";
 comments[60] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[61]= "62)  El plan nacional de ciudades inteligentes...";
 choices[61]= new Array();
 choices[61][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[61][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[61][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[61][3] = "No existe";
 answers[61] = choices[61][1];
 units[61] = "19";
 comments[61] = "Id Pregunta: 561. Ciudades Inteligentes";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[62]= new Array();
 choices[62][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[62][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[62][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[62][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[62] = choices[62][0];
 units[62] = "89";
 comments[62] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[63]= "64)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[63]= new Array();
 choices[63][0] = "Con el a&ntilde;o anterior.";
 choices[63][1] = "Con los tres a&ntilde;os anteriores.";
 choices[63][2] = "Con el a&ntilde;o natural.";
 choices[63][3] = "Con los dos a&ntilde;os anteriores.";
 answers[63] = choices[63][2];
 units[63] = "10";
 comments[63] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[64]= "65)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[64]= new Array();
 choices[64][0] = "Almacenamiento orientado a columnas";
 choices[64][1] = "Framework MapReduce";
 choices[64][2] = "OLTP";
 choices[64][3] = "Bases de datos clave-valor";
 answers[64] = choices[64][2];
 units[64] = "73";
 comments[64] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[65]= new Array();
 choices[65][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[65][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[65][2] = "Iniciativa europea de libre flujo de datos.";
 choices[65][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[65] = choices[65][2];
 units[65] = "5";
 comments[65] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[66]= "67)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[66]= new Array();
 choices[66][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[66][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[66][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[66][3] = "todas son correctas";
 answers[66] = choices[66][3];
 units[66] = "7";
 comments[66] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[67]= "68)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[67]= new Array();
 choices[67][0] = "Las sociedades mercantiles estatales.";
 choices[67][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[67][2] = "Las respuestas a) y b) son correctas.";
 choices[67][3] = "Las respuestas a) y b) no son correctas.";
 answers[67] = choices[67][2];
 units[67] = "10";
 comments[67] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[68]= "69)  La recusaci&oacute;n se plantea...";
 choices[68]= new Array();
 choices[68][0] = "Antes de iniciado el procedimiento";
 choices[68][1] = "Una vez iniciado el procedimiento";
 choices[68][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[68][3] = "En cualquier momento del procedimiento";
 answers[68] = choices[68][0];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[69]= "70)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[69]= new Array();
 choices[69][0] = "Est&aacute; desarrollado en Java.";
 choices[69][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[69][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[69][3] = "Todas las afirmaciones son correctas.";
 answers[69] = choices[69][2];
 units[69] = "92";
 comments[69] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[70]= new Array();
 choices[70][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[70][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[70][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[70][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[70] = choices[70][3];
 units[70] = "26";
 comments[70] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[71]= "72)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[71]= new Array();
 choices[71][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[71][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[71][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[71][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[71] = choices[71][2];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 758. Ley 40/2015";


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[72]= new Array();
 choices[72][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[72][1] = "El Gobierno.";
 choices[72][2] = "El Presidente del Gobierno.";
 choices[72][3] = "El Consejo de Ministros.";
 answers[72] = choices[72][1];
 units[72] = "10";
 comments[72] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[73]= new Array();
 choices[73][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[73][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[73][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[73][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[73] = choices[73][1];
 units[73] = "15";
 comments[73] = "Id Pregunta: 112. ";


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[74]= new Array();
 choices[74][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[74][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[74][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[74][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[74] = choices[74][1];
 units[74] = "1";
 comments[74] = "Id Pregunta: 175. CONSTITUCION1978";


