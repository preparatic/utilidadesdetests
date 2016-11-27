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

//  Id pregunta: 31 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a la auditor&iacute;a?:";
 choices[0]= new Array();
 choices[0][0] = "Independientemente del tipo de auditor&iacute;a inform&aacute;tica que pretenda realizarse, la finalidad &uacute;ltima es emitir un juicio acerca del estado de los sistemas";
 choices[0][1] = "Del fin de la auditor&iacute;a habr&aacute;n de obtenerse los medios y las acciones de investigaci&oacute;n que se estimen necesarios para su consecuci&oacute;n";
 choices[0][2] = "La auditor&iacute;a siempre recomendar&aacute; la toma de acciones correctivas, independientemente del examen de situaci&oacute;n realizado";
 choices[0][3] = "Cuando la tarea del auditor sea muy compleja, se llevar&aacute; a cabo una divisi&oacute;n de funciones de forma arborescente";
 answers[0] = choices[0][2];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 31. ";


//  Id pregunta: 50 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes no es un organismo nacional para la formulaci&oacute;n de est&aacute;ndares?:";
 choices[1]= new Array();
 choices[1][0] = "ANSI";
 choices[1][1] = "JIS";
 choices[1][2] = "DIN";
 choices[1][3] = "CEN";
 answers[1] = choices[1][3];
 units[1] = "42";
 comments[1] = "Id Pregunta: 50. ";


//  Id pregunta: 66 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; indica un nivel de prioridad 3 en la norma WCAG 1.0 del WAI sobre un punto de verificaci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "Un desarrollador de contenidos de p&aacute;ginas web tiene que satisfacer el punto de verificaci&oacute;n ";
 choices[2][1] = "Un desarrollador de contenidos de p&aacute;ginas web debe satisfacer el punto de verificaci&oacute;n";
 choices[2][2] = "Un desarrollador de contenidos de p&aacute;ginas web puede satisfacer el punto de verificaci&oacute;n";
 choices[2][3] = "Ninguna de las opciones anteriores es correcta";
 answers[2] = choices[2][2];
 units[2] = "39";
 comments[2] = "Id Pregunta: 66. ";


//  Id pregunta: 75 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas utiliza &uacute;nicamente la componente subjetiva del decisor?:";
 choices[3]= new Array();
 choices[3][0] = "Concordancia";
 choices[3][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[3][2] = "Ponderaci&oacute;n lineal";
 choices[3][3] = "Ninguno de las anteriores respuestas es correcta";
 answers[3] = choices[3][3];
 units[3] = "34";
 comments[3] = "Id Pregunta: 75. ";


//  Id pregunta: 102 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En relaci&oacute;n con los sistemas abiertos, las caracter&iacute;sticas t&eacute;cnicas m&aacute;s comunmente citadas son:";
 choices[4]= new Array();
 choices[4][0] = "Interoperabilidad, consistencia y escalabilidad";
 choices[4][1] = "Interoperabilidad, conectividad e  integrabilidad";
 choices[4][2] = "Consistencia, portabilidad e integrabilidad";
 choices[4][3] = "Interoperabilidad, portabilidad y escalabilidad";
 answers[4] = choices[4][3];
 units[4] = "40";
 comments[4] = "Id Pregunta: 102. ";


//  Id pregunta: 105 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Andrea Zerilli realiz&oacute; estudios sobre:";
 choices[5]= new Array();
 choices[5][0] = "Teor&iacute;a de redes";
 choices[5][1] = "Investigaci&oacute;n operativa y teletr&aacute;fico";
 choices[5][2] = "Metodolog&iacute;a de desarrollo";
 choices[5][3] = "Organizaci&oacute;n de empresas";
 answers[5] = choices[5][3];
 units[5] = "22";
 comments[5] = "Id Pregunta: 105. NULL";


//  Id pregunta: 124 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El  m&eacute;todo de ordenaci&oacute;n de alternativas que incorpora la posibilidad de valorar el riesgo y la incertidumbre es:";
 choices[6]= new Array();
 choices[6][0] = "El m&eacute;todo Promethee";
 choices[6][1] = "Utilidad multiatributo";
 choices[6][2] = "El m&eacute;todo de permutaci&oacute;n";
 choices[6][3] = "Ninguno de los restantes";
 answers[6] = choices[6][1];
 units[6] = "34";
 comments[6] = "Id Pregunta: 124. NULL";


//  Id pregunta: 149 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El m&eacute;todo Promethee:";
 choices[7]= new Array();
 choices[7][0] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no";
 choices[7][1] = "Su concepto central es de comparaci&oacute;n ternaria de alternativas";
 choices[7][2] = "Exige poca informaci&oacute;n por parte del decisor: evaluaciones ordinales y pesos cardinales";
 choices[7][3] = "Generaliza el m&eacute;todo de ponderaci&oacute;n lineal incorporando al posibilidad de valorar el riesgo";
 answers[7] = choices[7][0];
 units[7] = "34";
 comments[7] = "Id Pregunta: 149. NULL";


//  Id pregunta: 190 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  En la Metodolog&iacute;a MAGERIT, el evento que pueden desencadenar un incidente en la organizaci&oacute;n, produciendo da&ntilde;os materiales o p&eacute;rdidas inmateriales en sus activos, se denomina:";
 choices[8]= new Array();
 choices[8][0] = "Impacto";
 choices[8][1] = "Vulnerabilidad";
 choices[8][2] = "Amenaza";
 choices[8][3] = "Riesgo";
 answers[8] = choices[8][2];
 units[8] = "33";
 comments[8] = "Id Pregunta: 190. Similar a examen TIC SS A 2003";


//  Id pregunta: 206 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En el modelo de Donovan las organizaciones se clasifican en:";
 choices[9]= new Array();
 choices[9][0] = "Dinosaurio, gran hermano, mano vigilante, network, cluster";
 choices[9][1] = "Dinosaurio, gran hermano, perro vigilante, network, cluster";
 choices[9][2] = "Dinosaurio, gran hermano, mano amiga, perro vigilante, network";
 choices[9][3] = "Dinosaurio, gran hermano, mano amiga, perro vigilante, cluster";
 answers[9] = choices[9][2];
 units[9] = "22";
 comments[9] = "Id Pregunta: 206. donovan - nolan";


//  Id pregunta: 245 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En una auditor&iacute;a de un sistema EDI, &iquest;cu&aacute;les son las principales &aacute;reas de revisi&oacute;n y evaluaci&oacute;n, en las que los auditores  y el personal especializado de soporte deben centrarse?:";
 choices[10]= new Array();
 choices[10][0] = "Conocimiento del negocio, evaluaci&oacute;n de controles y pruebas";
 choices[10][1] = "Conocimiento del negocio, evaluaci&oacute;n del riesgo, evaluaci&oacute;n de los controles generales, evaluaci&oacute;n de los controles de operaci&oacute;n, pruebas, uso de herramientas asistidas por ordenador (CAAT)";
 choices[10][2] = "Conocimiento del negocio, evaluaci&oacute;n del riesgo,  evaluaci&oacute;n de controles y pruebas";
 choices[10][3] = "Conocimiento del negocio, controles administrativos y de gesti&oacute;n, evaluaci&oacute;n del riesgo, evaluaci&oacute;n del los controles de operci&oacute;n, pruebas y uso de herramientas asistidas por ordenador (CAAT)";
 answers[10] = choices[10][1];
 units[10] = "31,32,33";
 comments[10] = "Id Pregunta: 245. ";


//  Id pregunta: 279 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  La auditor&iacute;a de sistemas de informaci&oacute;n se puede considerar como:";
 choices[11]= new Array();
 choices[11][0] = "Una auditor&iacute;a de eficiencia";
 choices[11][1] = "Una auditor&iacute;a de eficacia";
 choices[11][2] = "Una auditor&iacute;a operativa";
 choices[11][3] = "Una auditor&iacute;a de legalidad";
 answers[11] = choices[11][2];
 units[11] = "31,32";
 comments[11] = "Id Pregunta: 279. ";


//  Id pregunta: 282 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  La auditor&iacute;a inform&aacute;tica tiene entre sus normas generales:";
 choices[12]= new Array();
 choices[12][0] = "Exigencia de evidencia";
 choices[12][1] = "Hacer part&iacute;cipe al usuario";
 choices[12][2] = "Formar parte de la empresa auditada";
 choices[12][3] = "Informar a las autoridades judiciales";
 answers[12] = choices[12][0];
 units[12] = "31";
 comments[12] = "Id Pregunta: 282. ";


//  Id pregunta: 288 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La comunicaci&oacute;n descendente se da en uno de los modelos de comunicaci&oacute;n siguientes:";
 choices[13]= new Array();
 choices[13][0] = "Comunicaci&oacute;n en rueda";
 choices[13][1] = "Comunicaci&oacute;n en Y";
 choices[13][2] = "Comunicaci&oacute;n en cadena";
 choices[13][3] = "Comunicaci&oacute;n en c&iacute;rculo";
 answers[13] = choices[13][2];
 units[13] = "23";
 comments[13] = "Id Pregunta: 288. ";


//  Id pregunta: 347 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Con car&aacute;cter general, la transferencia de ficheros con datos de car&aacute;cter personal se puede hacer:";
 choices[14]= new Array();
 choices[14][0] = "A cualquier pa&iacute;s europeo y africano";
 choices[14][1] = "S&oacute;lo a Europa y Asia";
 choices[14][2] = "S&oacute;lo dentro de UE";
 choices[14][3] = "Con destino a pa&iacute;ses que proporcionen un nivel de protecci&oacute;n equiparable al que presta la LOPD";
 answers[14] = choices[14][3];
 units[14] = "29";
 comments[14] = "Id Pregunta: 347. ";


//  Id pregunta: 352 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La vulnerabilidad es, de acuerdo a MAGERIT:";
 choices[15]= new Array();
 choices[15][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[15][1] = "Posibilidad de ocurrencia de un incidente";
 choices[15][2] = "Posibilidad de ocurrencia de un impacto";
 choices[15][3] = "Posibilidad de ocurrencia de materializar una amenaza";
 answers[15] = choices[15][3];
 units[15] = "33";
 comments[15] = "Id Pregunta: 352. ";


//  Id pregunta: 369 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Los ficheros automatizados cuyo objeto sea el almacenamiento de los datos contenidos en los informes personales de calificaci&oacute;n del personal militar profesional , seg&uacute;n la LOPD:";
 choices[16]= new Array();
 choices[16][0] = "No caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[16][1] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[16][2] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma, pero no les ser&aacute; de aplicaci&oacute;n el r&eacute;gimen de protecci&oacute;n de datos";
 choices[16][3] = "Se regir&aacute;n por sus disposiciones espec&iacute;ficas";
 answers[16] = choices[16][3];
 units[16] = "29";
 comments[16] = "Id Pregunta: 369. ";


//  Id pregunta: 430 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Seg&uacute;n Elton Mayo, el v&iacute;nculo que permite unificar los esfuerzos de los trabajadores en la consecuci&oacute;n de un fin com&uacute;n es:";
 choices[17]= new Array();
 choices[17][0] = "La autoridad";
 choices[17][1] = "La motivaci&oacute;n";
 choices[17][2] = "El deseo de autorrealizaci&oacute;n";
 choices[17][3] = "La comunicaci&oacute;n";
 answers[17] = choices[17][3];
 units[17] = "22";
 comments[17] = "Id Pregunta: 430. ";


//  Id pregunta: 437 AÃ±o de creación de pregunta: 2009-01-01
 questions[18]= "19)  Seg&uacute;n la LOPD, los datos de car&aacute;cter personal que revelan la ideolog&iacute;a, religi&oacute;n y creencias podr&aacute;n ser objeto de tratamiento automatizado:";
 choices[18]= new Array();
 choices[18][0] = "Con consentimiento expreso del afectado";
 choices[18][1] = "Con consentimiento expreso y por escrito del afectado";
 choices[18][2] = "Nunca podr&aacute; ser objeto de tratamiento automatizado";
 choices[18][3] = "Cuando por razones de inter&eacute;s general as&iacute; lo disponga una Ley o el afectado consienta expresamente";
 answers[18] = choices[18][1];
 units[18] = "29";
 comments[18] = "Id Pregunta: 437. ";


//  Id pregunta: 453 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Se&ntilde;ale la opci&oacute;n incorrecta entre las siguientes: la Agencia de Protecci&oacute;n de Datos es:";
 choices[19]= new Array();
 choices[19][0] = "Un Ente de Derecho P&uacute;blico con personalidad jur&iacute;dica propia";
 choices[19][1] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Administraciones P&uacute;blicas";
 choices[19][2] = "Ejerce sus funciones a trav&eacute;s del Director, cuyos actos ponen fin a la v&iacute;a administrativa";
 choices[19][3] = "Act&uacute;a con plena independencia de las AA.PP.";
 answers[19] = choices[19][1];
 units[19] = "29";
 comments[19] = "Id Pregunta: 453. ";


//  Id pregunta: 464 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Todo sistema etiquetado como X/Open implementa como m&iacute;nimo:";
 choices[20]= new Array();
 choices[20][0] = "Lenguajes COBOL, FORTRAN, PASCAL, C e interoperatividad de PC";
 choices[20][1] = "POSIX y comunicaciones entre procesos";
 choices[20][2] = "Lenguajes C y ADA, junto con gesti&oacute;n de datos ISAM y SQL";
 choices[20][3] = "POSIX y lenguaje C";
 answers[20] = choices[20][3];
 units[20] = "40";
 comments[20] = "Id Pregunta: 464. ";


//  Id pregunta: 507 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  La directiva 91/250/CEE modificada por la 93/98/CEE, del Consejo relativa a la protecci&oacute;n jur&iacute;dica de los progarmas de ordenador";
 choices[21]= new Array();
 choices[21][0] = "excluye expl&iacute;citamente aquellos desarrollos sobre plataformas LINUX, shareware o software libre";
 choices[21][1] = "establece que los programas deber&aacute;n protegerse de la misma manera que las obras literarias, con arreglo a lo establecido en el convenio de Berna sobre proetcci&oacute;n de obras literarias y art&iacute;sticas";
 choices[21][2] = "regula aquellos aspectos del comercio elctr&oacute;nico relacionados con la materia de propiedad intelectual";
 choices[21][3] = "crea un nuevo t&iacute;tulo unitario de proiedad industrial 'patente comunitaria' para eliminar las distorsiones del mercado interior y permitir que Europa se aproveche al m&aacute;ximo de sus trabajos de investigaci&oacute;n";
 answers[21] = choices[21][1];
 units[21] = "36";
 comments[21] = "Id Pregunta: 507. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 577 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[22]= new Array();
 choices[22][0] = "Desde el punto de vista cuantitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia mas &oacute;ptima de actividades.";
 choices[22][1] = "Desde el punto de vista cualitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia mas &oacute;ptima de actividades.";
 choices[22][2] = "Desde el punto de vista cuantitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia de actividades.";
 choices[22][3] = "Desde el punto de vista cualitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia  actividades.";
 answers[22] = choices[22][0];
 units[22] = "27";
 comments[22] = "Id Pregunta: 577. ";


//  Id pregunta: 583 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  Cual de las siguientes funciones corresponde al &aacute;rea de Sistemas Operativos, Software Base y Sistemas Corporativos";
 choices[23]= new Array();
 choices[23][0] = "Control y monitorizaci&oacute;n de la plataforma";
 choices[23][1] = "Optimizaci&oacute;n de la operativa diaria";
 choices[23][2] = "Salvaguarda de datos.";
 choices[23][3] = "Todas ellas";
 answers[23] = choices[23][3];
 units[23] = "26";
 comments[23] = "Id Pregunta: 583. ";


//  Id pregunta: 596 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  Seg&uacute;n el art&iacute;culo 44.3 proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente constituye:";
 choices[24]= new Array();
 choices[24][0] = "no se necesita esperar a dicha publicaci&oacute;n en el BOE";
 choices[24][1] = "una infracci&oacute;n muy grave.";
 choices[24][2] = "una infracci&oacute;n grave.";
 choices[24][3] = "una infracci&oacute;n leve.";
 answers[24] = choices[24][2];
 units[24] = "29";
 comments[24] = "Id Pregunta: 596. ";


//  Id pregunta: 634 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  &iquest;C&oacute;mo se llama el lenguaje de definici&oacute;n de la protecci&oacute;n de derechos en DRM?";
 choices[25]= new Array();
 choices[25][0] = "XrSL (Extensible Rights Specification Language).";
 choices[25][1] = "CPL (Content Protection Language).";
 choices[25][2] = "XrML (Extensible Rights Markup Language XrML)";
 choices[25][3] = "DRML (Digital Rights Management Language).";
 answers[25] = choices[25][2];
 units[25] = "37";
 comments[25] = "Id Pregunta: 634. ";


//  Id pregunta: 646 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  Cu&aacute;l de los siguientes grupos no forma parte de la estructura del Sistema Europeo de Normalizaci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "El Consejo europeo de Normalizaci&oacute;n.";
 choices[26][1] = "El Comit&eacute; europeo de Normalizaci&oacute;n.";
 choices[26][2] = "Los &Oacute;rganos internacionales de Normalizaci&oacute;n.";
 choices[26][3] = "Los &Oacute;rganos europeos de Normalizaci&oacute;n.";
 answers[26] = choices[26][2];
 units[26] = "40";
 comments[26] = "Id Pregunta: 646. ";


//  Id pregunta: 660 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  Se&ntilde;ale cual de las siguientes normas se debe tener en cuenta en el Area de Seguridad de una organizaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "ISO 27002";
 choices[27][1] = "ISO 14508 sobre perfiles de protecci&oacute;n";
 choices[27][2] = "ISO 14848";
 choices[27][3] = "UNE-ISO 17799";
 answers[27] = choices[27][0];
 units[27] = "42";
 comments[27] = "Id Pregunta: 660. ";


//  Id pregunta: 4460 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  Si modificamos un programa protegido por licencia GPL el resultado debemos protegerlo con una licencia";
 choices[28]= new Array();
 choices[28][0] = "EULA";
 choices[28][1] = "BSD";
 choices[28][2] = "GPL";
 choices[28][3] = "No podemos ponerlo licencia alguna";
 answers[28] = choices[28][2];
 units[28] = "36";
 comments[28] = "Id Pregunta: 4460. ";


//  Id pregunta: 4516 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  Respecto al software libre:";
 choices[29]= new Array();
 choices[29][0] = "Los usuarios de software libre deben tener Ia libertad de estudiar como funciona el programa y adaptarlo a sus necesidades.";
 choices[29][1] = "El &uacute;nico coste permitido por la distribuci&oacute;n de software libre es el coste de distribuci&oacute;n.";
 choices[29][2] = "Esta permitida la distribuci&oacute;n de software libre pero no su posterior modificaci&oacute;n.";
 choices[29][3] = "Solo basta con incluir el c&oacute;digo fuente, no es necesario incluir documento legal alguno.";
 answers[29] = choices[29][0];
 units[29] = "61";
 comments[29] = "Id Pregunta: 4516. NULL";


//  Id pregunta: 4613 AÃ±o de creación de pregunta: 2009-01-01
 questions[30]= "31)  Un fichero que contiene el DNI y % de discapacidad con motivo del cumplimiento de deberes p&uacute;blicos, pero no el tipo de discapacidad del que se trata, debe tener implantadas medidas de seguridad de nivel";
 choices[30]= new Array();
 choices[30][0] = "b&aacute;sico";
 choices[30][1] = "medio";
 choices[30][2] = "alto";
 choices[30][3] = "muy alto";
 answers[30] = choices[30][0];
 units[30] = "29";
 comments[30] = "Id Pregunta: 4613. ";


//  Id pregunta: 4709 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  &iquest;Qu&eacute; no es sociedad de la informaci&oacute;n?";
 choices[31]= new Array();
 choices[31][0] = "Un estadio social y econ&oacute;mico de desarrollo.";
 choices[31][1] = "La posibilidad de obtener y compartir &ldquo;cualquier&rdquo; informaci&oacute;n de manera instant&aacute;nea desde cualquier lugar.";
 choices[31][2] = "Una situaci&oacute;n en la que la mayor parte de los empleos est&aacute;n asociados a la producci&oacute;n de bienes tangibles.";
 choices[31][3] = "El cambio de los medios de generaci&oacute;n de riqueza desde los sectores industriales a los sectores de servicios";
 answers[31] = choices[31][2];
 units[31] = "30";
 comments[31] = "Id Pregunta: 4709. Examen 2006 JCYL";


//  Id pregunta: 4741 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los conceptos SMP (Symmetric Multiprocessing) y MPP(Massively Paralleling Multiprocessing) es falsa?";
 choices[32]= new Array();
 choices[32][0] = "La programaci&oacute;n con MPP es mucho m&aacute;s compleja ya que el programa que se ejecuta debe ser dividido ensegmentos que se comuniquen entre s&iacute;.";
 choices[32][1] = "MPP no sufre cuello de botella que sufre SMP en el acceso a memoria";
 choices[32][2] = "En MPP todas las CPU comparten la misma memoria mientras que en SMP no";
 choices[32][3] = "Un cluster esta compuesto por dos o m&aacute;s ordenadores que se comportan como una sola m&aacute;quina";
 answers[32] = choices[32][2];
 units[32] = "45";
 comments[32] = "Id Pregunta: 4741. Examen 2006 JCYL";


//  Id pregunta: 4877 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Una Directiva comunitaria que, en materia de salud en el trabajo, es aplicable directamente a los productosinform&aacute;ticos y establece disposiciones m&iacute;nimas de seguridad y salud relativas al trabajo con equipos que incluyenpantallas de visualizaci&oacute;n, es la:";
 choices[33]= new Array();
 choices[33][0] = "Directiva 90/270/CEE, de 29 de mayo";
 choices[33][1] = "Directiva 95/220/CEE, de 14 de abril";
 choices[33][2] = "Directiva 198/130/CEE, de 30 de octubre";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][0];
 units[33] = "39";
 comments[33] = "Id Pregunta: 4877. ";


//  Id pregunta: 4889 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  Seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico, el arrendamiento de un ordenador tiene la categor&iacute;a de:";
 choices[34]= new Array();
 choices[34][0] = "Contrato de &quot;leasing&quot;";
 choices[34][1] = "Contrato de servicios";
 choices[34][2] = "Contrato de suministros";
 choices[34][3] = "Contrato de arrendamiento";
 answers[34] = choices[34][2];
 units[34] = "41";
 comments[34] = "Id Pregunta: 4889. ";


//  Id pregunta: 4990 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos NO corresponde a un est&aacute;ndar del W3C?:";
 choices[35]= new Array();
 choices[35][0] = "WDSL";
 choices[35][1] = "SOAP";
 choices[35][2] = "UDDI";
 choices[35][3] = "XHTML";
 answers[35] = choices[35][2];
 units[35] = "39";
 comments[35] = "Id Pregunta: 4990. Examen TIC A 2007";


//  Id pregunta: 5004 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de estas afirmaciones sobre accesibilidad es cierta de acuerdo con las gu&iacute;as del W3C?";
 choices[36]= new Array();
 choices[36][0] = "Una p&aacute;gina web accesible debe tener textos equivalentes para cualquier elemento no textual";
 choices[36][1] = "Un p&aacute;gina web accesible debe contener solo texto";
 choices[36][2] = "Una p&aacute;gina web accesible no debe utilizar colores";
 choices[36][3] = "Una p&aacute;gina web accesible debe utilizar un &uacute;nico tipo de letra establecido en estas gu&iacute;as";
 answers[36] = choices[36][0];
 units[36] = "39";
 comments[36] = "Id Pregunta: 5004. Examen TIC A 2007";


//  Id pregunta: 5412 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Los ficheros automatizados con datos de car&aacute;cter personal de nivel alto deber&aacute;n contener:";
 choices[37]= new Array();
 choices[37][0] = "Medidas de seguridad de nivel alto y medio";
 choices[37][1] = "Medidas de seguridad de nivel alto";
 choices[37][2] = "Medidas de seguridad de nivel b&aacute;sico, medio y alto";
 choices[37][3] = "Ninguna de las anteriores es correcta";
 answers[37] = choices[37][2];
 units[37] = "29";
 comments[37] = "Id Pregunta: 5412. Castilla y Le&oacute;n";


//  Id pregunta: 5435 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l es el lugar m&aacute;s conveniente para la instalaci&oacute;n de un CPD de respaldo en la ribera del Pisuerga?";
 choices[38]= new Array();
 choices[38][0] = "La planta m&aacute;s elevada del edificio de usos m&uacute;ltiples";
 choices[38][1] = "Una sala aneja al garaje subterr&aacute;neo";
 choices[38][2] = "La primera planta de un edificio de cinco plantas";
 choices[38][3] = "La planta baja";
 answers[38] = choices[38][2];
 units[38] = "26";
 comments[38] = "Id Pregunta: 5435. Castilla y Le&oacute;n";


//  Id pregunta: 5544 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Se&ntilde;ale la respuesta correcta respecto a la entrada en vigor de la La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos:";
 choices[39]= new Array();
 choices[39][0] = "A partir del d&iacute;a siguiente a su publicaci&oacute;n en el BOE.";
 choices[39][1] = "Los derechos reconocidos en el art 6 de la ley 11/2007, podr&aacute;n ejercerse respecto de los procedimientos y actuaciones adaptados a la misma, desde la entrada en vigor de dicha ley.";
 choices[39][2] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado y para los Organismos Publicos  vinculados o dependientes de &eacute;sta, los derechos reconocidos en el art 6 de dicha ley, podr&aacute;n ejercerse respecto a la totalidad de procedimientos y actuaciones de su competencia, a partir del 31-12-2009.";
 choices[39][3] = "Todas las anteriores son correctas.";
 answers[39] = choices[39][3];
 units[39] = "43";
 comments[39] = "Id Pregunta: 5544. NULL";


//  Id pregunta: 5552 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[40]= new Array();
 choices[40][0] = "Las pautas WAI  se encuentran agrupadas en WCAG, ATAG, UAAG.";
 choices[40][1] = "Las pautas WAI se basan en la utilizaci&oacute;n de est&aacute;ndares del W3C.";
 choices[40][2] = "Las WCAG 1.0  tienen 15 pautas, cada una de ellas con uno o m&aacute;s puntos de verificaci&oacute;n.";
 choices[40][3] = "Cada punto de verificaci&oacute;n tiene una prioridad asignada. El cumplimiento de los puntos de prioridad 1 asegura el cumplimiento del nivel de accesibilidad web A.";
 answers[40] = choices[40][2];
 units[40] = "39";
 comments[40] = "Id Pregunta: 5552. ";


//  Id pregunta: 5555 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  La prioridad de un punto de verifiaci&oacute;n de las pautas de accesibilidad al contenido, que permite que un desarrollador pueda satisfacer dicho punto, en otro caso uno o m&aacute;s usuarios encontrar&aacute;n alguna dificultad para acceder a la informaci&oacute;n, &iquest;es Prioridad? ";
 choices[41]= new Array();
 choices[41][0] = "1";
 choices[41][1] = "2";
 choices[41][2] = "3";
 choices[41][3] = "4";
 answers[41] = choices[41][2];
 units[41] = "39";
 comments[41] = "Id Pregunta: 5555. ";


//  Id pregunta: 5583 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;Qu&eacute; estructura tiene el nuevo RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[42]= new Array();
 choices[42][0] = "Un t&iacute;tulo preliminar y cuatro cap&iacute;tulos";
 choices[42][1] = "Cinco libros y Siete cap&iacute;tulos";
 choices[42][2] = "Un t&iacute;tulo preliminar y cinco libros";
 choices[42][3] = "Un art&iacute;culo &uacute;nico y un anexo";
 answers[42] = choices[42][2];
 units[42] = "41";
 comments[42] = "Id Pregunta: 5583. ";


//  Id pregunta: 5586 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Qu&eacute; porcentaje sobre el importe de adjudicaci&oacute;n supone la garant&iacute;a definitiva, en un contrato con las administraciones p&uacute;blicas, seg&uacute;n el nuevo RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[43]= new Array();
 choices[43][0] = "Un 4%";
 choices[43][1] = "Un 5%";
 choices[43][2] = "Un 6%";
 choices[43][3] = "Un 8%";
 answers[43] = choices[43][1];
 units[43] = "41";
 comments[43] = "Id Pregunta: 5586. ";


//  Id pregunta: 5649 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  El RD 1720/2007 trata sobre:";
 choices[44]= new Array();
 choices[44][0] = "Reglamento de desarrollo de la Ley del Estatuto B&aacute;sico del Empleado P&uacute;blico";
 choices[44][1] = "Reglamento sobre medidas de protecci&oacute;n contra radiaciones electromagn&eacute;ticas";
 choices[44][2] = "Reglamento sobre medidas que favorezcan la ergonom&iacute;a y ecolog&iacute;a en los puestos de trabajo";
 choices[44][3] = "Reglamento de desarrollo de la Ley Org&aacute;nica de protecci&oacute;n de datos de carater personal";
 answers[44] = choices[44][3];
 units[44] = "29";
 comments[44] = "Id Pregunta: 5649. ";


//  Id pregunta: 5656 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel medio, las de nivel alto, a los siguientes ficheros:";
 choices[45]= new Array();
 choices[45][0] = "Aquellos de los que sean responsables las entidades financieras, para finalidades relacionadas con la prestaci&oacute;n de servicios financieros";
 choices[45][1] = "Los que contengan o se refieran a datos recabados con fines policiales sin consentimiento de las personas afectadas";
 choices[45][2] = "Aquellos de los que sean responsables las Entidades Gestoras y Servicios Comunes de la Seguridad social y se relacionen con el ejercicio de sus competencias";
 choices[45][3] = "La a) y la b) son correctas";
 answers[45] = choices[45][1];
 units[45] = "29";
 comments[45] = "Id Pregunta: 5656. ";


//  Id pregunta: 5799 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  El funcionamiento del &quot;Sistema de Verificaci&oacute;n de Datos de Identidad&quot; est&aacute; determinado por el Real Decreto 522/2006 por el que se suprime la aportaci&oacute;n de fotocopias de documentos de identidad en los procedimientos administrativos. Seg&uacute;n dicho Real Decreto, la supresi&oacute;n de la aportaci&oacute;n de fotocopias de documentos de identidad en los procedimientos administrativos es obligatoria para:";
 choices[46]= new Array();
 choices[46][0] = "La Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de aquella.";
 choices[46][1] = "La Administraci&oacute;n General del Estado y las Administraciones Auton&oacute;micas y los organismos p&uacute;blicos vinculados o dependientes de las anteriores.";
 choices[46][2] = "Todas las Administraciones P&uacute;blicas.";
 choices[46][3] = "Todas las Administraciones P&uacute;blicas y cualquier otro, organismo o entidad con personal jur&iacute;dica propia siempre que uno o varios sujetos pertenecientes al sector p&uacute;blico financien mayoritariamente su actividad.";
 answers[46] = choices[46][0];
 units[46] = "30";
 comments[46] = "Id Pregunta: 5799. MAP 2008 A2";


//  Id pregunta: 5901 AÃ±o de creación de pregunta: 2009-01-01
 questions[47]= "48)  Indique qu&eacute; concepto NO interviene en el m&eacute;todo de ponderaci&oacute;n lineal:";
 choices[47]= new Array();
 choices[47][0] = "Puntuaciones normalizadas";
 choices[47][1] = "Factor de ponderaci&oacute;n de los criterios";
 choices[47][2] = "Coeficiente de concordancia";
 choices[47][3] = "Funci&oacute;n de valor o de evaluaci&oacute;n";
 answers[47] = choices[47][2];
 units[47] = "34";
 comments[47] = "Id Pregunta: 5901. MAP 2008 A1";


//  Id pregunta: 6194 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[48]= new Array();
 choices[48][0] = "La Administraci&oacute;n General del Estado";
 choices[48][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[48][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[48][3] = "Todas las Administraciones P&uacute;blicas";
 answers[48] = choices[48][1];
 units[48] = "43";
 comments[48] = "Id Pregunta: 6194. Articulo 1";


//  Id pregunta: 6261 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Cu&aacute;l de las siguientes no es una norma b&aacute;sica en la auditor&iacute;a de los sistemas de informaci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Obtenci&oacute;n de evidencia suficiente.";
 choices[49][1] = "Estudio y evaluaci&oacute;n del sistema de control interno.";
 choices[49][2] = "Obtenci&oacute;n de evidencia adecuada.";
 choices[49][3] = "Todas las anteriores forman parte de las normas b&aacute;sicas en la auditor&iacute;a de los sistemas de informaci&oacute;n.";
 answers[49] = choices[49][3];
 units[49] = "31";
 comments[49] = "Id Pregunta: 6261. ";


//  Id pregunta: 6265 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Las conclusiones que se reflejen en un informe de auditor&iacute;a deberan estar basadas en una evidencia:";
 choices[50]= new Array();
 choices[50][0] = "Suficiente.";
 choices[50][1] = "Contundente.";
 choices[50][2] = "Prudente.";
 choices[50][3] = "Demostrable.";
 answers[50] = choices[50][0];
 units[50] = "31";
 comments[50] = "Id Pregunta: 6265. ";


//  Id pregunta: 6377 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes no es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[51]= new Array();
 choices[51][0] = "La interoperabilidad como cualidad integral.";
 choices[51][1] = "Car&aacute;cter multidimensional de la interoperabilidad.";
 choices[51][2] = "Enfoque de soluciones multilaterales.";
 choices[51][3] = "Todos los anteriores son principios b&aacute;sicos del Esquema Nacional de Interoperabilidad.";
 answers[51] = choices[51][3];
 units[51] = "43";
 comments[51] = "Id Pregunta: 6377. Art&iacute;culo 4 ENI";


//  Id pregunta: 6380 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  En el Esquema Nacional de Interoperabilidad, se establece que los sistemas o aplicaciones implicados en la provisi&oacute;n de un servicio p&uacute;blico por v&iacute;a electr&oacute;nica se sincronizar&aacute;n con la hora oficial de:";
 choices[52]= new Array();
 choices[52][0] = "El reloj de la Puerta del Sol";
 choices[52][1] = "El Instituto Europeo de Medici&oacute;n Horaria";
 choices[52][2] = "La Agencia Espa&ntilde;ola de Meteorologia";
 choices[52][3] = "El Real Instituto y Observatorio de la Armada";
 answers[52] = choices[52][3];
 units[52] = "43";
 comments[52] = "Id Pregunta: 6380. Art&iacute;culo 15 ENI";


//  Id pregunta: 6386 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  El &aacute;mbito de aplicaci&oacute;n de una sede electr&oacute;nica podr&aacute; ser:";
 choices[53]= new Array();
 choices[53][0] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de subdirecci&oacute;n general.";
 choices[53][1] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[53][2] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de secretar&iacute;a de estado.";
 choices[53][3] = "La totalidad del Ministerio u organismo p&uacute;blico.";
 answers[53] = choices[53][1];
 units[53] = "43";
 comments[53] = "Id Pregunta: 6386. Art&iacute;culo 3.2 RD 1671/2009";


//  Id pregunta: 6415 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  De los siguientes, &iquest;Cu&aacute;l no es un estandar del W3C?";
 choices[54]= new Array();
 choices[54][0] = "DOM";
 choices[54][1] = "P3P";
 choices[54][2] = "PVG";
 choices[54][3] = "HTML";
 answers[54] = choices[54][2];
 units[54] = "39";
 comments[54] = "Id Pregunta: 6415. NULL";


//  Id pregunta: 6602 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Las penalizaciones en un contrato";
 choices[55]= new Array();
 choices[55][0] = "Si son por demora imputable al contratista no se tendr&aacute;n que especificar";
 choices[55][1] = "Siempre deben estar previstas en los pliegos o el documento contractual";
 choices[55][2] = "Si son por demora imputable al contratista la imposici&oacute;n diaria ser&aacute; de 0,20&euro; por cada 100&euro; del contrato";
 choices[55][3] = "La a y la c";
 answers[55] = choices[55][0];
 units[55] = "41";
 comments[55] = "Id Pregunta: 6602. ";


//  Id pregunta: 7353 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Si para un determinado criterio, el decisor establece como umbral de saciedad 50 y como nivel de satisfacci&oacute;n 10:";
 choices[56]= new Array();
 choices[56][0] = "No ser&aacute;n tenidas en cuenta las ofertas que ofrezcan menos de 50";
 choices[56][1] = "Solo ser&aacute;n tenidas en cuenta las ofertas est&eacute;n entre 10 y 50";
 choices[56][2] = "Es un criterio a minimizar";
 choices[56][3] = "Una oferta que ofrezca 50 y otra que ofrezca 60 tendr&aacute;n la misma puntuaci&oacute;n en ese criterio";
 answers[56] = choices[56][3];
 units[56] = "34";
 comments[56] = "Id Pregunta: 7353. NULL";


//  Id pregunta: 8260 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un principio b&aacute;sico del Esquema Nacional de Seguridad (ENS):";
 choices[57]= new Array();
 choices[57][0] = "Funci&oacute;n diferenciada.";
 choices[57][1] = "Prevenci&oacute;n, reacci&oacute;n y recuperaci&oacute;n.";
 choices[57][2] = "L&iacute;neas de defensa.";
 choices[57][3] = "Continuidad de la actividad.";
 answers[57] = choices[57][3];
 units[57] = "43";
 comments[57] = "Id Pregunta: 8260. Examen TIC A1 2010";


//  Id pregunta: 8276 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  El Defensor del Usuario de la Administraci&oacute;n Electr&oacute;nica es nombrado por:";
 choices[58]= new Array();
 choices[58][0] = "El Consejo de Ministros.";
 choices[58][1] = "El Ministro de la Presidencia.";
 choices[58][2] = "El Ministro de Industria, Energ&iacute;a y Turismo.";
 choices[58][3] = "El Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 answers[58] = choices[58][0];
 units[58] = "43";
 comments[58] = "Id Pregunta: 8276. Examen TIC A1 2010. Actualizado a MINETUR en lugar de MITYC.";


//  Id pregunta: 8404 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Para que las im&aacute;genes electr&oacute;nicas realizadas por la Administraci&oacute;n de documentos en soporte no electr&oacute;nico tengan la naturaleza de copias electr&oacute;nicas aut&eacute;nticas, con el alcance y efectos previstos en el art. 46 de la ley 30/1992, se deben cumplir ciertos requisitos. &iquest;Cu&aacute;l de los siguientes NO es uno de ellos? ";
 choices[59]= new Array();
 choices[59][0] = "Que la copia electr&oacute;nica incluya su car&aacute;cter de copia entre los metadatos asociados. ";
 choices[59][1] = "Que el documento copiado sea un original o una copia aut&eacute;ntica.";
 choices[59][2] = "Que las im&aacute;genes electr&oacute;nicas est&eacute;n codificadas conforme a algunos de los formatos y con los niveles de calidad y condiciones t&eacute;cnicas especificados en el Esquema Nacional de Interoperabilidad.  ";
 choices[59][3] = "Que en los metadatos se incluya el &oacute;rgano y lugar donde se custodia el original o copia autentica en soporte no electr&oacute;nico.";
 answers[59] = choices[59][3];
 units[59] = "43";
 comments[59] = "Id Pregunta: 8404. Examen TIC A2 2010";


//  Id pregunta: 8440 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes elementos no aparece en el recibo firmado electr&oacute;nicamente emitido autom&aacute;ticamente por el registro electr&oacute;nico, seg&uacute;n el RD 1671/2009?";
 choices[60]= new Array();
 choices[60][0] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada.";
 choices[60][1] = "Direcci&oacute;n de la sede electr&oacute;nica del organismo.";
 choices[60][2] = "En su caso, enumeraci&oacute;n y denominaci&oacute;n de los documentos adjuntos al formulario de presentaci&oacute;n o documento presentado, seguida de la huella electr&oacute;nica de cada uno de ellos.";
 choices[60][3] = "Informaci&oacute;n del plazo m&aacute;ximo establecido normativamente para la resoluci&oacute;n y notificaci&oacute;n del procedimiento, as&iacute; como de los efectos que pueda producir el silencio administrativo, cuando sea autom&aacute;ticamente determinable.";
 answers[60] = choices[60][1];
 units[60] = "43";
 comments[60] = "Id Pregunta: 8440. ";


//  Id pregunta: 8780 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, se considera cesi&oacute;n o comunicaci&oacute;n de datos:";
 choices[61]= new Array();
 choices[61][0] = "Toda manifestaci&oacute;n de voluntad, libre inequ&iacute;voca, espec&iacute;fica e informada, mediante la cual el interesado comunique datos.";
 choices[61][1] = "Toda revelaci&oacute;n de datos realizada a una persona distinta del interesado.";
 choices[61][2] = "Toda revelaci&oacute;n electr&oacute;nica de datos realizada a otra persona distinta de la que los posee.";
 choices[61][3] = "Toda transferencia electr&oacute;nica de datos realizada a una persona distinta del interesado.";
 answers[61] = choices[61][1];
 units[61] = "29";
 comments[61] = "Id Pregunta: 8780. Examen UPM A2 2011";


//  Id pregunta: 8804 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l es el comit&eacute; del W3C encargado de promover y estandarizar la accesibilidad Web?";
 choices[62]= new Array();
 choices[62][0] = "WAI";
 choices[62][1] = "WCAG";
 choices[62][2] = "ATAG";
 choices[62][3] = "UAAG";
 answers[62] = choices[62][0];
 units[62] = "39";
 comments[62] = "Id Pregunta: 8804. Examen UPM A2 2011";


//  Id pregunta: 9062 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes es una infracci&oacute;n muy grave seg&uacute;n la normativa de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[63]= new Array();
 choices[63][0] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal";
 choices[63][1] = "No atender, u obstaculizar de forma sistem&aacute;tica el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n u oposici&oacute;n";
 choices[63][2] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello";
 choices[63][3] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos";
 answers[63] = choices[63][2];
 units[63] = "29";
 comments[63] = "Id Pregunta: 9062. NULL";


//  Id pregunta: 9065 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  De acuerdo a la normativa de protecci&oacute;n de datos de car&aacute;cter personal, la potestad del &oacute;rgano sancionador de inmovilizaci&oacute;n de ficheros  ";
 choices[64]= new Array();
 choices[64][0] = "Se podr&aacute; ejercer s&oacute;lo en supuestos constitutivos de infracci&oacute;n muy grave";
 choices[64][1] = "Se podr&aacute; ejercer en ciertos supuestos constitutivos de infracci&oacute;n grave o muy grave";
 choices[64][2] = "Siempre la puede ejercer el &oacute;rgano sancionador, mediante resoluci&oacute;n motivada";
 choices[64][3] = "La ley 2/2011 de Econom&iacute;a Sostenible elimina la potestad inmovilizadora";
 answers[64] = choices[64][1];
 units[64] = "29";
 comments[64] = "Id Pregunta: 9065. NULL";


//  Id pregunta: 9068 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n FALSA respecto a las normas WCAG 2.0:";
 choices[65]= new Array();
 choices[65][0] = "Una de las mejoras respecto a WCAG 1.0 es la posibilidad de evaluarlas de manera autom&aacute;tica. ";
 choices[65][1] = "En Espa&ntilde;a se incorporan mediante la norma UNE 139803. ";
 choices[65][2] = "Constan de 14 pautas. ";
 choices[65][3] = "La pauta Adaptable dentro del principio Perceptible se refiere a &quot;Contenido presentado de diferentes formas sin perder informaci&oacute;n o estructura&quot;. ";
 answers[65] = choices[65][2];
 units[65] = "39";
 comments[65] = "Id Pregunta: 9068. ";


//  Id pregunta: 9310 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  &iquest;Qu&eacute; es una auditor&iacute;a de regularidad?";
 choices[66]= new Array();
 choices[66][0] = "Es la que eval&uacute;a la eficacia en la consecuci&oacute;n de objetivos y la eficiencia en los recursos empleados para alcanzarlos.";
 choices[66][1] = "Es aquella orientada a verificar el cumplimiento de la normativa aplicable.";
 choices[66][2] = "Es la especializada en descubrir fraudes y delitos.";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = choices[66][1];
 units[66] = "31";
 comments[66] = "Id Pregunta: 9310. ";


//  Id pregunta: 9321 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  Se&ntilde;ale la falsa";
 choices[67]= new Array();
 choices[67][0] = "La evidencia obtenida de una tercera parte independiente es menos competente que la ofrecida por el &aacute;rea auditada";
 choices[67][1] = "La evidencia obtenida de un sistema con un control efectivo es m&aacute;s competente que la ofrecida por un sistema con un control d&eacute;bil";
 choices[67][2] = "La evidencia obtenida por el equipo auditor directamente en una inspecci&oacute;n f&iacute;sica es m&aacute;s competente que la obtenida indirectamente";
 choices[67][3] = "Todas las afirmaciones anteriores son ciertas";
 answers[67] = choices[67][0];
 units[67] = "31";
 comments[67] = "Id Pregunta: 9321. ";


//  Id pregunta: 9476 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes factores de riesgo del an&aacute;lisis de rentabilidad de un proyecto no se considera en el Sector P&uacute;blico?";
 choices[68]= new Array();
 choices[68][0] = "Autoridad limitada para la toma de decisiones";
 choices[68][1] = "Presupuestos plurianuales en todos los casos";
 choices[68][2] = "M&uacute;ltiples actores involucrados";
 choices[68][3] = "Coordinaci&oacute;n entre organismos";
 answers[68] = choices[68][1];
 units[68] = "38";
 comments[68] = "Id Pregunta: 9476. ";


//  Id pregunta: 9479 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  &iquest;Qu&eacute; m&eacute;todos se pueden utilizar para comparar inversiones con diferente duraci&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "M&eacute;todo de la anualidad equivalente y m&eacute;todo de la cadena de reemplazo";
 choices[69][1] = "M&eacute;todo de la anualidad equivalente y tasa de rendimiento contable";
 choices[69][2] = "M&eacute;todo de la anualidad equivalente y m&eacute;todo de comparaci&oacute;n de costes";
 choices[69][3] = "M&eacute;todo del payback y m&eacute;todo de la cadena de reemplazo";
 answers[69] = choices[69][0];
 units[69] = "38";
 comments[69] = "Id Pregunta: 9479. ";


//  Id pregunta: 9547 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Seg&uacute;n la LSSI, la acci&oacute;n de cesaci&oacute;n, dirigida a obtener una sentencia que condene al demandado a cesar en una conducta contraria a dicha Ley, NO podr&aacute; ser interpuesta por:";
 choices[70]= new Array();
 choices[70][0] = "Grupos de consumidores o usuarios afectados";
 choices[70][1] = "El Ministerio Fiscal";
 choices[70][2] = "El Instituto Nacional de Consumo";
 choices[70][3] = "La Secretar&iacute;a de Estado para las Telecomunicaciones y la Sociedad de la Informaci&oacute;n";
 answers[70] = choices[70][3];
 units[70] = "30";
 comments[70] = "Id Pregunta: 9547. Ley 34/2002, art&iacute;culo 31";


//  Id pregunta: 9571 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  En la pr&aacute;ctica de notificaciones por medios electr&oacute;nicos a que se refiere el art&iacute;culo 28 de la Ley 11/2007, de 22 de junio, de Acceso electr&oacute;nico de los ciudadanos a los Servicios p&uacute;blicos:";
 choices[71]= new Array();
 choices[71][0] = "Se requerir&aacute; en todo caso que el interesado lo haya solicitado previamente por escrito en el Registro del &oacute;rgano que ha de resolver.";
 choices[71][1] = "Cuando no pueda acreditarse por el sistema la fecha y hora en que se produzca, se entender&aacute;, a efectos de ulterior recurso, practicada el &uacute;ltimo d&iacute;a del plazo en que deb&iacute;a practicarse.";
 choices[71][2] = "Cuando, existiendo constancia de la puesta a disposici&oacute;n de la notificaci&oacute;n transcurrieran diez d&iacute;as naturales sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada con los efectos previstos en el art&iacute;culo 59.4 de la LRJPAC.";
 choices[71][3] = "Cuando, existiendo constancia de la puesta a disposici&oacute;n de la notificaci&oacute;n transcurrieran diez d&iacute;as h&aacute;biles sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido debidamente practicada y surtir&aacute; los efectos previstos en el art&iacute;culo 2.";
 answers[71] = choices[71][2];
 units[71] = "43";
 comments[71] = "Id Pregunta: 9571. Examen TIC A1 2011";


//  Id pregunta: 9576 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Seg&uacute;n el art&iacute;culo 4 de la Ley 11/2007, de 22 de junio, de Acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, el principio de igualdad en la utilizaci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n se refiere a:";
 choices[72]= new Array();
 choices[72][0] = "La exigencia de id&eacute;ntico nivel de garant&iacute;as y seguridad que el que se requiere para la utilizaci&oacute;n de medios no electr&oacute;nicos en la actividad administrativa.";
 choices[72][1] = "Que en ning&uacute;n caso el uso de medios electr&oacute;nicos pueda implicar la existencia de restricciones o discriminaciones para los ciudadanos que se relacionen con las Administraciones P&uacute;blicas por medios no electr&oacute;nicos.";
 choices[72][2] = "La garant&iacute;a de la accesibilidad universal y el dise&ntilde;o adaptado para todas las personas de los soportes, canales y entornos con objeto de que todos los ciudadanos puedan ejercer sus derechos en igualdad de condiciones.";
 choices[72][3] = "Que el uso de medios electr&oacute;nicos debe garantizar por igual a todos los ciudadanos la m&aacute;xima difusi&oacute;n, publicidad y transparencia de las actuaciones administrativas.";
 answers[72] = choices[72][1];
 units[72] = "43";
 comments[72] = "Id Pregunta: 9576. Examen TIC A1 2011";


//  Id pregunta: 9588 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  De acuerdo con el Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad, aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n, es la referente a la:";
 choices[73]= new Array();
 choices[73][0] = "Interoperabilidad, en general.";
 choices[73][1] = "Interoperabilidad organizativa. ";
 choices[73][2] = "Interoperabilidad t&eacute;cnica. ";
 choices[73][3] = "Interoperabilidad sem&aacute;ntica. ";
 answers[73] = choices[73][3];
 units[73] = "43";
 comments[73] = "Id Pregunta: 9588. Examen TIC A2 2011";


//  Id pregunta: 9590 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Seg&uacute;n se dispone en la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, los registros electr&oacute;nicos permitir&aacute;n la presentaci&oacute;n de solicitudes:";
 choices[74]= new Array();
 choices[74][0] = "Exclusivamente en los mismos horarios que los registros presenciales.";
 choices[74][1] = "Exclusivamente los d&iacute;as laborables del a&ntilde;o, durante las 24 horas. ";
 choices[74][2] = "Todos los d&iacute;as del a&ntilde;o, durante las 24 horas. ";
 choices[74][3] = "Exclusivamente los d&iacute;as h&aacute;biles del a&ntilde;o, durante las 24 horas.";
 answers[74] = choices[74][2];
 units[74] = "43";
 comments[74] = "Id Pregunta: 9590. Examen TIC A2 2011 interna";


//  Id pregunta: 9591 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  El Real Decreto 3/2010, en su art&iacute;culo 29, dispone que las gu&iacute;as de seguridad de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones para el mejor cumplimiento de lo establecido en el Esquema Nacional de Seguridad las elaborar&aacute; y difundir&aacute;:";
 choices[75]= new Array();
 choices[75][0] = "El Centro Criptol&oacute;gico Nacional.";
 choices[75][1] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[75][2] = "Cada organismo p&uacute;blico que implante medidas de seguridad de acuerdo con el Esquema Nacional de Seguridad.";
 choices[75][3] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica. ";
 answers[75] = choices[75][0];
 units[75] = "43";
 comments[75] = "Id Pregunta: 9591. Examen TIC A2 2011 interna. Serie de gu&iacute;as CCN-STIC 800.";


//  Id pregunta: 9646 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[76]= new Array();
 choices[76][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[76][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[76][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[76][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[76] = choices[76][3];
 units[76] = "41";
 comments[76] = "Id Pregunta: 9646. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";


//  Id pregunta: 9876 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  De acuerdo con lo establecido en el RD 3/2010 de 8 de enero por el que se regula el Esquema Nacional de Seguridad,";
 choices[77]= new Array();
 choices[77][0] = "todos los sistemas de informaci&oacute;n ser&aacute;n objeto de una auditor&iacute;a regular ordinaria con car&aacute;cter anual";
 choices[77][1] = "los sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica no precisan ser auditados";
 choices[77][2] = "la auditor&iacute;a de los sistemas de categor&iacute;a media puede ser sustituida por una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema";
 choices[77][3] = "no es necesario que los informes de autoevaluaci&oacute;n sean conocidos por el responsable de seguridad competente. Basta con que los conozca el responsable del sistema.";
 answers[77] = choices[77][1];
 units[77] = "43";
 comments[77] = "Id Pregunta: 9876. TIC A1, Examen 2013";


//  Id pregunta: 10148 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En relaci&oacute;n a las Comunicaciones comerciales por v&iacute;a electr&oacute;nica reguladas por la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[78]= new Array();
 choices[78][0] = "Las comunicaciones comerciales realizadas por v&iacute;a electr&oacute;nica deber&aacute;n ser claramente identificables como tales y la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan tambi&eacute;n deber&aacute; ser claramente identificable.";
 choices[78][1] = "En el caso en el que tengan lugar a trav&eacute;s de correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente incluir&aacute;n al comienzo del mensaje la palabra ''publicidad'' o la abreviatura ''publi''";
 choices[78][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.";
 choices[78][3] = "Lo dispuesto en el apartado anterior no ser&aacute; de aplicaci&oacute;n cuando exista una relaci&oacute;n contractual previa, siempre que el prestador hubiera obtenido de forma l&iacute;cita los datos de contacto del destinatario y los empleara para el env&iacute;o de comunicaciones comerciales referentes a productos o servicios de su propia empresa que sean similares a los que inicialmente fueron objeto de contrataci&oacute;n con el cliente.";
 answers[78] = choices[78][1];
 units[78] = "30";
 comments[78] = "Id Pregunta: 10148. ";


//  Id pregunta: 10211 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Respecto a las alternativas de suministro de equipamiento hardware, &iquest;a qu&eacute; cap&iacute;tulo presupuestario se imputar&iacute;a el arrendamiento de equipos sin opci&oacute;n a compra?";
 choices[79]= new Array();
 choices[79][0] = "Cap&iacute;tulo 1";
 choices[79][1] = "Cap&iacute;tulo 2";
 choices[79][2] = "Cap&iacute;tulo 4";
 choices[79][3] = "Cap&iacute;tulo 6";
 answers[79] = choices[79][1];
 units[79] = "35";
 comments[79] = "Id Pregunta: 10211. ";


//  Id pregunta: 10341 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En relaci&oacute;n con la legislaci&oacute;n de propiedad intelectual y el derecho de transformaci&oacute;n, se&ntilde;ale la respuesta correcta";
 choices[80]= new Array();
 choices[80][0] = "Los derechos de propiedad intelectual de la obra resultado de la transformaci&oacute;n corresponder&iacute;an al autor de la obra original";
 choices[80][1] = "Los derechos de propiedad intelectual de la obra resultado de la transformaci&oacute;n corresponder&aacute;n al autor de esta &uacute;ltima";
 choices[80][2] = "Los derechos de explotaci&oacute;n de la obra resultado de la transformaci&oacute;n corresponden a partes iguales entre el autor de la obra original y el de la obra producto de la transformaci&oacute;n";
 choices[80][3] = "Los derechos de explotaci&oacute;n de la obra resultado de la transformaci&oacute;n corresponden tanto al autor de la obra original como al de la obra producto de la transformaci&oacute;n, en la proporci&oacute;n que &eacute;stos determinen";
 answers[80] = choices[80][1];
 units[80] = "36";
 comments[80] = "Id Pregunta: 10341. Consultar Art. 21 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10428 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  De acuerdo con el m&eacute;todo del Valor Actual Neto, &iquest;ser&iacute;a recomendable  realizar una inversi&oacute;n en dos a&ntilde;os, con capital inicial aportado de 1 M&euro; y flujos de caja esperados de 0,1M&euro; y 0,9M&euro; en el primer y segundo a&ntilde;o de inversi&oacute;n, con un tipo de descuento del 1%? ";
 choices[81]= new Array();
 choices[81][0] = "No.";
 choices[81][1] = "No se puede deducir del enunciado";
 choices[81][2] = "Si.";
 choices[81][3] = "Debe mantenerse cuatro a&ntilde;os como m&iacute;nimo";
 answers[81] = choices[81][0];
 units[81] = "38";
 comments[81] = "Id Pregunta: 10428. Examen TIC A1 2013";


//  Id pregunta: 10570 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  La auditor&iacute;a bienal de cumplimiento de la LOPD y la realizaci&oacute;n de pruebas de hacking &eacute;tico tienen las siguientes similitudes y diferencias, marcar la respuesta verdadera";
 choices[82]= new Array();
 choices[82][0] = "El hacking &eacute;tico no es una herramienta de auditor&iacute;a ya que lo realizan los hackers solamente, mientras que la auditor&iacute;a LOPD lo realizan siempre juristas o personal de perfil TAC";
 choices[82][1] = "El hacking &eacute;tico es una t&eacute;cnica para probar los controles de seguridad de las aplicaciones y sirve para que un auditor de seguridad IT pueda encontrar deficiencias. Si la aplicaci&oacute;n maneja datos LOPD, la informaci&oacute;n del estado de estos controles puede servir de apoyo a la auditor&iacute;a de cumplimiento del reglamento asociado a la LOPD que tambi&eacute;n debe verificarse en la auditor&iacute;a bienal, que incluir&aacute; tanto aspectos organizativos como t&eacute;cnicos.";
 choices[82][2] = "La Auditor&iacute;a LOPD es una auditor&iacute;a IT estrictamente hablando, ya que no debe entrar a valorar aspectos organizativos y procedimientales mientras que el hacking &eacute;tico entra a valorar los valores &eacute;ticos de la empresa de cara al tratamiento de la informaci&oacute;n, en particular los datos de car&aacute;cter personal.";
 choices[82][3] = "El hacking &eacute;tico requiere de personal t&eacute;cnico exclusivamente (hackers o no) mientras que la auditor&iacute;a de cumplimiento de la LOPD s&oacute;lo debe contar con personal jurista y los responsables funcionales de las aplicaciones LOPD involucradas pero no a t&eacute;cnicos.";
 answers[82] = choices[82][1];
 units[82] = "31";
 comments[82] = "Id Pregunta: 10570. ";


//  Id pregunta: 10571 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el transcurso de una auditor&iacute;a inform&aacute;tica, uno de los auditores descubre que existe un incumplimiento grave en un control inform&aacute;tico que podr&iacute;a llevar a la realizaci&oacute;n de un fraude importante por parte de un grupo de empleados, con p&eacute;rdidas econ&oacute;micas y de imagen para la empresa auditada. El auditor debe:";
 choices[83]= new Array();
 choices[83][0] = "Reunir todas las evidencias de esta deficiencia grave y convocar una reuni&oacute;n urgente con los responsables de la empresa para que conozcan este hecho y puedan tomar medidas preventivas.";
 choices[83][1] = "Contactar al grupo de empleados que pueden cometer el fraude y advertirles de lo descubierto para que no comentan el posible fraude.";
 choices[83][2] = "Reunir todas las pruebas y exponerlas todas juntas en el informe al final de la auditor&iacute;a, aunque dicho informe se entregue con posterioridad de la posibilidad de realizaci&oacute;n del fraude, ya que una auditor&iacute;a no debe interrumpirse por ninguna causa.";
 choices[83][3] = "Llamar a ISACA para informar de que se ha producido una violaci&oacute;n del c&oacute;digo &eacute;tico de conducta que se propone en COSO (Marco de Gobierno Corporativo)";
 answers[83] = choices[83][0];
 units[83] = "31";
 comments[83] = "Id Pregunta: 10571. ";


//  Id pregunta: 10574 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Qu&eacute; especificaciones permiten eliminar los certificados administrativos en papel mediante el intercambio electr&oacute;nico de datos entre Administraciones?";
 choices[84]= new Array();
 choices[84][0] = "SCSP";
 choices[84][1] = "SIGP";
 choices[84][2] = "SAML";
 choices[84][3] = "SIR";
 answers[84] = choices[84][0];
 units[84] = "44";
 comments[84] = "Id Pregunta: 10574. Sustituci&oacute;n de Certificados en Soporte Papel ";


//  Id pregunta: 10601 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  En materia de accesibilidad, las Administraciones P&uacute;blicas deben cumplir:";
 choices[85]= new Array();
 choices[85][0] = "El Real Decreto 1494/2007";
 choices[85][1] = "Los niveles A y AA de la norma UNE 139803:2012";
 choices[85][2] = "Los niveles A y AA de las WCAG 2.0";
 choices[85][3] = "Todas las anteriores.";
 answers[85] = choices[85][3];
 units[85] = "39";
 comments[85] = "Id Pregunta: 10601. ";


//  Id pregunta: 10702 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  En referencia a los metadatos del expediente electr&oacute;nico.";
 choices[86]= new Array();
 choices[86][0] = "&Uacute;nicamente podr&aacute;n ser modificados durante la tramitaci&oacute;n de dicho expediente y en ning&uacute;n caso con posterioridad a su finalizaci&oacute;n.";
 choices[86][1] = "No ser&aacute;n modificados en ninguna fase posterior del procedimiento administrativo.";
 choices[86][2] = "No ser&aacute;n modificados en ninguna fase posterior del procedimiento administrativo, a excepci&oacute;n de modificaciones necesarias para la correcci&oacute;n de errores u omisiones en el valor inicialmente asignado.";
 choices[86][3] = "La normativa no establece ning&uacute;n condicionante sobre su posible modificaci&oacute;n.";
 answers[86] = choices[86][2];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10702. ";


//  Id pregunta: 10705 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes no es considerado un metadato m&iacute;nimo del expediente electr&oacute;nico?";
 choices[87]= new Array();
 choices[87][0] = "Versi&oacute;n NTI.";
 choices[87][1] = "Identificador.";
 choices[87][2] = "N&uacute;mero de documentos incluidos.";
 choices[87][3] = "Tipo de firma.";
 answers[87] = choices[87][2];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10705. ";


//  Id pregunta: 10731 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  La conexi&oacute;n directa a la Red SARA se proporcionar&aacute; a trav&eacute;s de:";
 choices[88]= new Array();
 choices[88][0] = "Una VPN establecida con cualquiera de los Ministerios.";
 choices[88][1] = "Un &Aacute;rea de Conexi&oacute;n (AC).";
 choices[88][2] = "Un Punto de Presencia situado en el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[88][3] = "Un punto neutro.";
 answers[88] = choices[88][1];
 units[88] = "43";
 comments[88] = "Id Pregunta: 10731. ";


//  Id pregunta: 10749 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seg&uacute;n el RD 806/2014 &iquest;Qu&eacute; son medios y servicios en referencia a los medios y servicios compartidos?";
 choices[89]= new Array();
 choices[89][0] = "Todas las actividades, infraestructuras t&eacute;cnicas, instalaciones, aplicaciones, equipos, inmuebles, redes, ficheros electr&oacute;nicos, licencias y dem&aacute;s activos que dan soporte a los sistemas de informaci&oacute;n.";
 choices[89][1] = "Todas las infraestructuras t&eacute;cnicas, instalaciones, aplicaciones, equipos, inmuebles, redes, ficheros electr&oacute;nicos, licencias y dem&aacute;s activos que dan soporte a los sistemas de informaci&oacute;n.";
 choices[89][2] = "Todas las infraestructuras t&eacute;cnicas, instalaciones, aplicaciones, equipos, inmuebles, redes, licencias y dem&aacute;s activos que dan soporte a los sistemas de informaci&oacute;n.";
 choices[89][3] = "Todas las actividades, infraestructuras t&eacute;cnicas, aplicaciones, equipos, inmuebles, redes, ficheros electr&oacute;nicos, licencias y dem&aacute;s activos que dan soporte a los sistemas de informaci&oacute;n.";
 answers[89] = choices[89][0];
 units[89] = "24";
 comments[89] = "Id Pregunta: 10749. ";


//  Id pregunta: 10752 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l es el objetivo global de la Estrategia de Ciberseguridad Nacional?";
 choices[90]= new Array();
 choices[90][0] = "Lograr que Espa&ntilde;a haga un uso seguro de los Sistemas de Informaci&oacute;n y Telecomunicaciones, fortaleciendo las capacidades de prevenci&oacute;n, defensa, detecci&oacute;n, y respuesta a los ciberataques.";
 choices[90][1] = "Garantizar que los Sistemas de Informaci&oacute;n y Telecomunicaciones que utilizan las Administraciones P&uacute;blicas poseen el adecuado nivel de ciberseguridad y resiliencia.";
 choices[90][2] = "Potenciar las capacidades de prevenci&oacute;n, detecci&oacute;n, reacci&oacute;n, an&aacute;lisis, recuperaci&oacute;n, respuesta, investigaci&oacute;n y coordinaci&oacute;n frente a las actividades del terrorismo y la delincuencia en el ciberespacio.";
 choices[90][3] = "Alcanzar y mantener los conocimientos, habilidades, experiencia y capacidades tecnol&oacute;gicas que necesita Espa&ntilde;a para sustentar todos los objetivos de ciberseguridad.";
 answers[90] = choices[90][0];
 units[90] = "43";
 comments[90] = "Id Pregunta: 10752. ";


//  Id pregunta: 10784 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Se&ntilde;ale la opci&oacute;n correcta dentro de la siguiente relaci&oacute;n de infraestructura/servicio com&uacute;n de la Administraci&oacute;n y su definici&oacute;n:";
 choices[91]= new Array();
 choices[91][0] = "ORVE - Soluci&oacute;n integral de registro para organismos p&uacute;blicos, que cubre la gesti&oacute;n tanto de sus oficinas de registro como de las unidades tramitadoras destinatarias de la documentaci&oacute;n.";
 choices[91][1] = "Sistema de informaci&oacute;n REINA - proporciona un Inventario unificado y com&uacute;n a toda la Administraci&oacute;n de las unidades org&aacute;nicas / organismos p&uacute;blicos, sus oficinas asociadas y unidades de gesti&oacute;n econ&oacute;mica - presupuestaria, facilitando el mantenimiento distribuido y corresponsable de la informaci&oacute;n.";
 choices[91][2] = "GEISER - Permite a las diferentes Administraciones P&uacute;blicas consultar y gestionar los apoderamientos otorgados por un ciudadano para sus procedimientos.";
 choices[91][3] = "CIRCABC - Herramienta de trabajo en grupo basada en tecnolog&iacute;as de Internet y en software de fuentes abiertas desarrollada por el Programa ISA de la Comisi&oacute;n de la Comunidad Europea y dirigido a necesidades de las Administraciones P&uacute;blicas, Ciudadanos y Empresas.";
 answers[91] = choices[91][3];
 units[91] = "44";
 comments[91] = "Id Pregunta: 10784. Examen GSI 2014";


//  Id pregunta: 10933 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Las entidades locales adheridas al servicio com&uacute;n denominado &ldquo;Emprende en 3&rdquo;:";
 choices[92]= new Array();
 choices[92][0] = "Aceptar&aacute;n y utilizar&aacute;n el modelo tipo de declaraci&oacute;n responsable de conformidad con la normativa que regula el proyecto.";
 choices[92][1] = "Podr&aacute;n rechazar las declaraciones responsables recibidas si no vienen acompa&ntilde;adas de la documentaci&oacute;n obligatoria para la puesta en marcha de la empresa.";
 choices[92][2] = "Podr&aacute;n rechazar las declaraciones responsables recibidas si no vienen acompa&ntilde;adas de la documentaci&oacute;n obligatoria para la puesta en marcha de la empresa.";
 choices[92][3] = "La tramitaci&oacute;n de las declaraciones responsables recibidas por &ldquo;Emprende en 3&rdquo; debe ser finalizada antes de los 5 d&iacute;as h&aacute;biles desde su presentaci&oacute;n.";
 answers[92] = choices[92][0];
 units[92] = "44";
 comments[92] = "Id Pregunta: 10933. TIC A1 AGE 2014";


//  Id pregunta: 11019 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes no es un &oacute;rgano especializado en el control de la Administraci&oacute;n P&uacute;blica?";
 choices[93]= new Array();
 choices[93][0] = "Tribunal de Cuentas";
 choices[93][1] = "IGAE";
 choices[93][2] = "Agencia Estatal de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y de la Calidad de los Servicios";
 choices[93][3] = "Todos lo son";
 answers[93] = choices[93][3];
 units[93] = "31";
 comments[93] = "Id Pregunta: 11019. ";


//  Id pregunta: 11195 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento inteligente?";
 choices[94]= new Array();
 choices[94][0] = "Juventud en movimiento";
 choices[94][1] = "Uni&oacute;n por la innovaci&oacute;n";
 choices[94][2] = "Agenda Digital para Europa";
 choices[94][3] = "Todas las anteriores";
 answers[94] = choices[94][3];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11195. ";


//  Id pregunta: 11196 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento integrador?";
 choices[95]= new Array();
 choices[95][0] = "Agenda de nuevas cualificaciones y empleo";
 choices[95][1] = "Agenda Digital para Europa";
 choices[95][2] = "Todas las anteriores";
 choices[95][3] = "Ninguna de las Anteriores";
 answers[95] = choices[95][0];
 units[95] = "30";
 comments[95] = "Id Pregunta: 11196. ";


//  Id pregunta: 11248 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Cada cuanto tiempo se revisa la solvencia de las empresas clasificadas:";
 choices[96]= new Array();
 choices[96][0] = "La solvencia econ&oacute;mica y financiera se revisa cada tres a&ntilde;os.";
 choices[96][1] = "La solvencia t&eacute;cnica cada a&ntilde;o.";
 choices[96][2] = "El plazo de c&oacute;mputo de la experiencia para la solvencia t&eacute;cnica es de cinco a&ntilde;os.";
 choices[96][3] = "Todas son verdaderas.";
 answers[96] = choices[96][2];
 units[96] = "41";
 comments[96] = "Id Pregunta: 11248. ";


//  Id pregunta: 11502 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;les de los siguientes NO es un documento emitido por el European Telecomunication Standard Institute (ETSI)?";
 choices[97]= new Array();
 choices[97][0] = "ENV, normas experimentales";
 choices[97][1] = "ES, Normas ETSTI";
 choices[97][2] = "IT, Industrial Agreement";
 choices[97][3] = "HS, Normas armonizadas";
 answers[97] = choices[97][2];
 units[97] = "42";
 comments[97] = "Id Pregunta: 11502. NULL";


//  Id pregunta: 11582 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De acuerdo a la LOPD, el incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal constituye una infracci&oacute;n de car&aacute;cter:";
 choices[98]= new Array();
 choices[98][0] = "Leve, cuando los datos se han recabado del propio interesado";
 choices[98][1] = "Grave, cuando los datos se han recabado del propio interesado";
 choices[98][2] = "Leve, cuando los datos no se han recabado del propio interesado";
 choices[98][3] = "Todas las anteriores son falsas";
 answers[98] = choices[98][0];
 units[98] = "29";
 comments[98] = "Id Pregunta: 11582. ";


//  Id pregunta: 11787 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una gu&iacute;a CCN-STIC:";
 choices[99]= new Array();
 choices[99][0] = "CCN-STIC-804 - Medidas de implantaci&oacute;n del Esquema Nacional de Seguridad";
 choices[99][1] = "CCN-STIC-820 - Protecci&oacute;n Contra Denegaci&oacute;n de Servicio";
 choices[99][2] = "CCN-STIC-823 - Seguridad en entornos Cloud";
 choices[99][3] = "CCN-STIC-830 - Medidas de seguridad en el puesto de trabajo (entorno ofim&aacute;tico).";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11787. ";


