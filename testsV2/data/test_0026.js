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

//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[0]= "1)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[0]= new Array();
 choices[0][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[0][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[0][2] = "Ministerio de la Presidencia";
 choices[0][3] = "Ministerio de Fomento";
 answers[0] = choices[0][2];
 units[0] = "22";
 comments[0] = "Id Pregunta: 706. Portal de Transparencia";


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[1]= "2)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[1]= new Array();
 choices[1][0] = "CO.PER.";
 choices[1][1] = "COMPER.";
 choices[1][2] = "CO.RE.PER.";
 choices[1][3] = "CO.PE.RRE.";
 answers[1] = choices[1][2];
 units[1] = "5";
 comments[1] = "Id Pregunta: 338. UNION EUROPEA";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[2]= new Array();
 choices[2][0] = "Quince miembros.";
 choices[2][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[2][2] = "Los miembros que determine el Consejo.";
 choices[2][3] = "Un Presidente y quince miembros.";
 answers[2] = choices[2][1];
 units[2] = "14";
 comments[2] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[3]= "4)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[3]= new Array();
 choices[3][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[3][1] = "la Organizaci&oacute;n Territorial";
 choices[3][2] = "la Organizaci&oacute;n sectorial";
 choices[3][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[4]= "5)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[4]= new Array();
 choices[4][0] = "Se definen iteraciones";
 choices[4][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[4][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[4][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[4] = choices[4][1];
 units[4] = "34, 84";
 comments[4] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[5]= "6)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[5]= new Array();
 choices[5][0] = "Cifrada";
 choices[5][1] = "Conjunta";
 choices[5][2] = "Sistem&aacute;tica";
 choices[5][3] = "Todas son correctas";
 answers[5] = choices[5][3];
 units[5] = "10";
 comments[5] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[6]= new Array();
 choices[6][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[6][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[6][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[6][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[6] = choices[6][1];
 units[6] = "84";
 comments[6] = "Id Pregunta: 53. AGE A1 2015";


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[7]= new Array();
 choices[7][0] = "El 1 de noviembre de 1994.";
 choices[7][1] = "El 1 de noviembre de 1992.";
 choices[7][2] = "El 1 de noviembre de 1995.";
 choices[7][3] = "El 1 de noviembre de 1993.";
 answers[7] = choices[7][3];
 units[7] = "5";
 comments[7] = "Id Pregunta: 348. UNION EUROPEA";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[8]= new Array();
 choices[8][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[8][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[8][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[8][3] = "La tasa de desempleo ronda el 20%";
 answers[8] = choices[8][2];
 units[8] = "12";
 comments[8] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[9]= "10)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[9]= new Array();
 choices[9][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[9][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[9][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[9][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[9] = choices[9][2];
 units[9] = "57";
 comments[9] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[10]= "11)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[10]= new Array();
 choices[10][0] = "los Subsecretarios y los Secretarios generales";
 choices[10][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[10][2] = "los Secretarios de Estado y los Directores generales";
 choices[10][3] = "los Ministros y los Secretarios de Estado";
 answers[10] = choices[10][3];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[11]= new Array();
 choices[11][0] = "Veinticinco.";
 choices[11][1] = "Veintisiete.";
 choices[11][2] = "Veintinueve.";
 choices[11][3] = "Cuarenta y uno.";
 answers[11] = choices[11][1];
 units[11] = "5";
 comments[11] = "Id Pregunta: 303. UNION EUROPEA";


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[12]= "13)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[12]= new Array();
 choices[12][0] = "180 art&iacute;culos.";
 choices[12][1] = "182 art&iacute;culos.";
 choices[12][2] = "185 art&iacute;culos.";
 choices[12][3] = "190 art&iacute;culos.";
 answers[12] = choices[12][1];
 units[12] = "10";
 comments[12] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[13]= "14)  El Tribunal de Justicia est&aacute; formado por:";
 choices[13]= new Array();
 choices[13][0] = "Un Juez de cada Estado miembro.";
 choices[13][1] = "Por dos Jueces de cada Estado miembro.";
 choices[13][2] = "Por veinte Jueces.";
 choices[13][3] = "Por ocho Jueces.";
 answers[13] = choices[13][0];
 units[13] = "5";
 comments[13] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[14]= new Array();
 choices[14][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[14][1] = "Las CMADs";
 choices[14][2] = "Ambas son correctas.";
 choices[14][3] = "Ninguna es correcta";
 answers[14] = choices[14][2];
 units[14] = "19";
 comments[14] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[15]= "16)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[15]= new Array();
 choices[15][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[15][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[15][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[15][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[15] = choices[15][2];
 units[15] = "7";
 comments[15] = "Id Pregunta: 510. LEY 39/2015";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[16]= new Array();
 choices[16][0] = "Los principios rectores";
 choices[16][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[16][2] = "Los hitos para su desarrollo gradual";
 choices[16][3] = "Todos los anteriores";
 answers[16] = choices[16][3];
 units[16] = "19";
 comments[16] = "Id Pregunta: 583. Estrategia TIC";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[17]= "18)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[17]= new Array();
 choices[17][0] = "la Administraci&oacute;n General del Estado";
 choices[17][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[17][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[17][3] = "el sector p&uacute;blico y privado institucional";
 answers[17] = choices[17][3];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 763. Ley 40/2015";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[18]= new Array();
 choices[18][0] = "DoS";
 choices[18][1] = "Phishing";
 choices[18][2] = "Sniffing";
 choices[18][3] = "Spoofing";
 answers[18] = choices[18][3];
 units[18] = "119";
 comments[18] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[19]= "20)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[19]= new Array();
 choices[19][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[19][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[19][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[19][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[19] = choices[19][1];
 units[19] = "14";
 comments[19] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[20]= "21)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[20]= new Array();
 choices[20][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[20][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[20][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[20][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 226. CONSTITUCION1978";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[21]= "22)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[21]= new Array();
 choices[21][0] = "en cada Comunidad Aut&oacute;noma";
 choices[21][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[21][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[21][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[21] = choices[21][1];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[22]= "23)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[22]= new Array();
 choices[22][0] = "Un Reglamento.";
 choices[22][1] = "Un Decreto.";
 choices[22][2] = "Una Ley.";
 choices[22][3] = "Un Real-Decreto.";
 answers[22] = choices[22][2];
 units[22] = "5";
 comments[22] = "Id Pregunta: 368. UNION EUROPEA";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[23]= "24)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[23]= new Array();
 choices[23][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[23][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[23][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[23][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[23] = choices[23][1];
 units[23] = "106";
 comments[23] = "Id Pregunta: 573. Tema 106. TAI 2016.";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[24]= "25)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[24]= new Array();
 choices[24][0] = "Cinco a&ntilde;os.";
 choices[24][1] = "Seis a&ntilde;os.";
 choices[24][2] = "Cuatro a&ntilde;os.";
 choices[24][3] = "Tres a&ntilde;os.";
 answers[24] = choices[24][0];
 units[24] = "5";
 comments[24] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[25]= "26)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[25]= new Array();
 choices[25][0] = "El derecho a un permiso.";
 choices[25][1] = "Una prestaci&oacute;n por paternidad.";
 choices[25][2] = "Ambas son correctas.";
 choices[25][3] = "18 d&iacute;as de permiso.";
 answers[25] = choices[25][2];
 units[25] = "14";
 comments[25] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[26]= new Array();
 choices[26][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[26][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[26][2] = "Fecha de otorgamiento.";
 choices[26][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[26] = choices[26][1];
 units[26] = "43";
 comments[26] = "Id Pregunta: 445. SERVICIOS COMUNES";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[27]= "28)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[27]= new Array();
 choices[27][0] = "Al Consejo Europeo.";
 choices[27][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[27][2] = "A la Comisi&oacute;n Europea.";
 choices[27][3] = "Al Parlamento Europeo.";
 answers[27] = choices[27][2];
 units[27] = "5";
 comments[27] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[28]= new Array();
 choices[28][0] = "En t&iacute;tulos-valores.";
 choices[28][1] = "Las respuestas a) y b) son correctas.";
 choices[28][2] = "Las respuestas a) y b) no son correctas.";
 choices[28][3] = "En cuenta.";
 answers[28] = choices[28][1];
 units[28] = "10";
 comments[28] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[29]= "30)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[29]= new Array();
 choices[29][0] = "0";
 choices[29][1] = "1";
 choices[29][2] = "Tantos como peticiones concurrentes tenga.";
 choices[29][3] = "Tantos como le permita la memoria de la JVM.";
 answers[29] = choices[29][1];
 units[29] = "64";
 comments[29] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[30]= "31)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[30]= new Array();
 choices[30][0] = "6 principios.";
 choices[30][1] = "7 principios.";
 choices[30][2] = "5 principios.";
 choices[30][3] = "6 directrices.";
 answers[30] = choices[30][1];
 units[30] = "28";
 comments[30] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[31]= "32)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[31]= new Array();
 choices[31][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[31][1] = "Ninguna de las respuestas es correcta.";
 choices[31][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[31][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[31] = choices[31][0];
 units[31] = "5";
 comments[31] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[32]= "33)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[32]= new Array();
 choices[32][0] = "solo mediante ley";
 choices[32][1] = "reglamentariamente";
 choices[32][2] = "mediante ley o reglamentariamente";
 choices[32][3] = "ninguna es correcta";
 answers[32] = choices[32][1];
 units[32] = "7";
 comments[32] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[33]= "34)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[33]= new Array();
 choices[33][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[33][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[33][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[33][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[33] = choices[33][1];
 units[33] = "19";
 comments[33] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[34]= "35)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[34]= new Array();
 choices[34][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[34][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[34][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[34][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[34] = choices[34][2];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[35]= new Array();
 choices[35][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[35][1] = "El responsable de la custodia de los datos enviados.";
 choices[35][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[35][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[35] = choices[35][3];
 units[35] = "35";
 comments[35] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[36]= new Array();
 choices[36][0] = "Ley Org&aacute;nica.";
 choices[36][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[36][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[36][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[37]= "38)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[37]= new Array();
 choices[37][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[37][1] = "1 de enero de 2015";
 choices[37][2] = "1 de enero de 2016";
 choices[37][3] = "1 de julio de 2016";
 answers[37] = choices[37][3];
 units[37] = "77";
 comments[37] = "Id Pregunta: 689. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[38]= "39)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[38]= new Array();
 choices[38][0] = "Acciones de discriminaci&oacute;n.";
 choices[38][1] = "Acciones positivas.";
 choices[38][2] = "Acciones negativas.";
 choices[38][3] = "Acciones neutras.";
 answers[38] = choices[38][1];
 units[38] = "14";
 comments[38] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[39]= new Array();
 choices[39][0] = "La Comisi&oacute;n Permanente.";
 choices[39][1] = "El Presidente.";
 choices[39][2] = "El Pleno.";
 choices[39][3] = "El Vicepresidente.";
 answers[39] = choices[39][3];
 units[39] = "1";
 comments[39] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[40]= "41)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[40]= new Array();
 choices[40][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[40][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[40][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[40][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[40] = choices[40][0];
 units[40] = "12";
 comments[40] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[41]= "42)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[41]= new Array();
 choices[41][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[41][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[41][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[41][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[41] = choices[41][2];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[42]= new Array();
 choices[42][0] = "Quince miembros.";
 choices[42][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[42][2] = "Los miembros que determine el Consejo.";
 choices[42][3] = "Un Presidente y quince miembros.";
 answers[42] = choices[42][1];
 units[42] = "5";
 comments[42] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[43]= new Array();
 choices[43][0] = "NoSQL";
 choices[43][1] = "Sistemas de baja latencia";
 choices[43][2] = "MapReduce";
 choices[43][3] = "Business Intelligence";
 answers[43] = choices[43][1];
 units[43] = "73";
 comments[43] = "Id Pregunta: 658. ";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[44]= "45)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[44]= new Array();
 choices[44][0] = "La Comisi&oacute;n.";
 choices[44][1] = "El Consejo de Europa.";
 choices[44][2] = "El Consejo Europeo.";
 choices[44][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[44] = choices[44][3];
 units[44] = "5";
 comments[44] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[45]= new Array();
 choices[45][0] = "Eric Ries";
 choices[45][1] = "Steve Blank";
 choices[45][2] = "Tom Poppendieck";
 choices[45][3] = "Alexander Osterwalder";
 answers[45] = choices[45][2];
 units[45] = "34";
 comments[45] = "Id Pregunta: 718. Metodologias Lean";


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[46]= new Array();
 choices[46][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[46][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[46][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[46][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[46] = choices[46][0];
 units[46] = "76";
 comments[46] = "Id Pregunta: 853. Xunta de Galicia 2015";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[47]= new Array();
 choices[47][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[47][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[47][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[47][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[47] = choices[47][0];
 units[47] = "19";
 comments[47] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[48]= new Array();
 choices[48][0] = "De los derechos y deberes fundamentales.";
 choices[48][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[48][2] = "Derechos y libertades.";
 choices[48][3] = "De la Corona.";
 answers[48] = choices[48][0];
 units[48] = "1";
 comments[48] = "Id Pregunta: 221. CONSTITUCION1978";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[49]= "50)  Componen la Comisi&oacute;n Europea:";
 choices[49]= new Array();
 choices[49][0] = "Un Comisario por cada Estado miembro.";
 choices[49][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[49][2] = "Dos Comisarios por cada Estado miembro.";
 choices[49][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[49] = choices[49][0];
 units[49] = "5";
 comments[49] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[50]= new Array();
 choices[50][0] = "23";
 choices[50][1] = "20";
 choices[50][2] = "14";
 choices[50][3] = "18";
 answers[50] = choices[50][1];
 units[50] = "5";
 comments[50] = "Id Pregunta: 343. UNION EUROPEA";


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[51]= "52)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[51]= new Array();
 choices[51][0] = "Consejos y Servicios.";
 choices[51][1] = "Servicios permanentes y no permanentes.";
 choices[51][2] = "Direcciones Generales.";
 choices[51][3] = "Direcciones ministeriales.";
 answers[51] = choices[51][2];
 units[51] = "5";
 comments[51] = "Id Pregunta: 318. UNION EUROPEA";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[52]= new Array();
 choices[52][0] = "Yarn";
 choices[52][1] = "Flume";
 choices[52][2] = "Hive";
 choices[52][3] = "BizAgi";
 answers[52] = choices[52][3];
 units[52] = "73";
 comments[52] = "Id Pregunta: 655. ";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[53]= "54)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[53]= new Array();
 choices[53][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[53][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[53][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[53][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[54]= new Array();
 choices[54][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[54][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[54][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[54][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[54] = choices[54][1];
 units[54] = "1";
 comments[54] = "Id Pregunta: 175. CONSTITUCION1978";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[55]= new Array();
 choices[55][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[55][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[55][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[55][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[55] = choices[55][0];
 units[55] = "26";
 comments[55] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[56]= "57)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[56]= new Array();
 choices[56][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[56][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[56][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[56][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[56] = choices[56][3];
 units[56] = "5";
 comments[56] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[57]= new Array();
 choices[57][0] = "3 pilares";
 choices[57][1] = "4 pilares";
 choices[57][2] = "5 pilares";
 choices[57][3] = "7 pilares";
 answers[57] = choices[57][0];
 units[57] = "17";
 comments[57] = "Id Pregunta: 759. Mercado &Uacute;nico Digital";


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[58]= "59)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[58]= new Array();
 choices[58][0] = "Gran volumen de informaci&oacute;n";
 choices[58][1] = "Gran variedad de datos";
 choices[58][2] = "Se analizan datos a gran velocidad";
 choices[58][3] = "Todas las anteriores son verdaderas";
 answers[58] = choices[58][3];
 units[58] = "73";
 comments[58] = "Id Pregunta: 105. ";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[59]= new Array();
 choices[59][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[59][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[59][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[59][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[59] = choices[59][1];
 units[59] = "1";
 comments[59] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[60]= "61)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[60][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[60][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[60][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[60] = choices[60][0];
 units[60] = "45";
 comments[60] = "Id Pregunta: 597. Junta de Extremadura A1 2015";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[61]= "62)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[61]= new Array();
 choices[61][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[61][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[61][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[61][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[61] = choices[61][2];
 units[61] = "27";
 comments[61] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[62]= "63)  El Tribunal de Justicia se cre&oacute; en:";
 choices[62]= new Array();
 choices[62][0] = "El Tratado de la CECA.";
 choices[62][1] = "El Tratado de Niza.";
 choices[62][2] = "El Tratado de &Aacute;msterdam.";
 choices[62][3] = "El Tratado de Lisboa.";
 answers[62] = choices[62][0];
 units[62] = "5";
 comments[62] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Aplicaci&oacute;n";
 choices[63][1] = "Sesi&oacute;n";
 choices[63][2] = "Presentaci&oacute;n";
 choices[63][3] = "Transporte";
 answers[63] = choices[63][2];
 units[63] = "105";
 comments[63] = "Id Pregunta: 18. AGE A1 2015";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[64]= new Array();
 choices[64][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[64][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[64][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[64][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[64] = choices[64][1];
 units[64] = "15";
 comments[64] = "Id Pregunta: 112. ";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[65]= new Array();
 choices[65][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[65][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[65][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[65][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[65] = choices[65][2];
 units[65] = "7";
 comments[65] = "Id Pregunta: 665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[66]= new Array();
 choices[66][0] = "El Parlamento y el Consejo.";
 choices[66][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[66][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[66][3] = "La Comisi&oacute;n y el Consejo.";
 answers[66] = choices[66][1];
 units[66] = "5";
 comments[66] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[67]= new Array();
 choices[67][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[67][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[67][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[67][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[67] = choices[67][1];
 units[67] = "26";
 comments[67] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[68]= "69)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[68]= new Array();
 choices[68][0] = "Los propios miembros del Tribunal.";
 choices[68][1] = "El Consejo de Europa.";
 choices[68][2] = "El Consejo Europeo.";
 choices[68][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[68] = choices[68][0];
 units[68] = "5";
 comments[68] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[69]= "70)  Un wireframe es:";
 choices[69]= new Array();
 choices[69][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[69][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[69][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[69][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[69] = choices[69][3];
 units[69] = "62";
 comments[69] = "Id Pregunta: 4. AGE A1 2015";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[70][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[70][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[70][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[70] = choices[70][0];
 units[70] = "45";
 comments[70] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[71]= new Array();
 choices[71][0] = "Cuatro.";
 choices[71][1] = "Ninguno.";
 choices[71][2] = "Dos.";
 choices[71][3] = "Seis.";
 answers[71] = choices[71][2];
 units[71] = "1";
 comments[71] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[72]= new Array();
 choices[72][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[72][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[72][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[72][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[72] = choices[72][0];
 units[72] = "26";
 comments[72] = "Id Pregunta: 542. Gobernanza TIC";


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[73]= "74)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[73]= new Array();
 choices[73][0] = "En sentencias switch para alterar el control de flujo.";
 choices[73][1] = "Para manejar excepciones.";
 choices[73][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[73][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[73] = choices[73][1];
 units[73] = "64";
 comments[73] = "Id Pregunta: 624. Junta de Extremadura A1 2015";


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[74]= "75)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[74]= new Array();
 choices[74][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[74][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[74][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[74][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[74] = choices[74][3];
 units[74] = "26";
 comments[74] = "Id Pregunta: 550. Gobernanza TIC";


