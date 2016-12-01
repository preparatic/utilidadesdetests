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

//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[0]= "1)  Componen la Comisi&oacute;n Europea:";
 choices[0]= new Array();
 choices[0][0] = "Un Comisario por cada Estado miembro.";
 choices[0][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[0][2] = "Dos Comisarios por cada Estado miembro.";
 choices[0][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[0] = choices[0][0];
 units[0] = "5";
 comments[0] = "Id Pregunta: 306. UNION EUROPEA";
 preguntaids[0] = 306


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[1]= new Array();
 choices[1][0] = "Fue elaborada y aprobada por la CETIC";
 choices[1][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[1][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[1][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[1] = choices[1][1];
 units[1] = "19";
 comments[1] = "Id Pregunta: 580. Estrategia TIC";
 preguntaids[1] = 580


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[2]= "3)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[2]= new Array();
 choices[2][0] = "la poblaci&oacute;n del territorio";
 choices[2][1] = "el volumen de gesti&oacute;n";
 choices[2][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[2][3] = "todas son correctas";
 answers[2] = choices[2][3];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[2] = 816


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[3]= new Array();
 choices[3][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[3][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[3][2] = "Fecha de otorgamiento.";
 choices[3][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[3] = choices[3][1];
 units[3] = "43";
 comments[3] = "Id Pregunta: 447. SERVICIOS COMUNES";
 preguntaids[3] = 447


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[4]= "5)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[4]= new Array();
 choices[4][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[4][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[4][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[4][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[4] = choices[4][1];
 units[4] = "106";
 comments[4] = "Id Pregunta: 575. Tema 106. TAI 2016.";
 preguntaids[4] = 575


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[5]= new Array();
 choices[5][0] = "Quince miembros.";
 choices[5][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[5][2] = "Los miembros que determine el Consejo.";
 choices[5][3] = "Un Presidente y quince miembros.";
 answers[5] = choices[5][1];
 units[5] = "14";
 comments[5] = "Id Pregunta: 378. UNION EUROPEA";
 preguntaids[5] = 378


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[6]= "7)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[6]= new Array();
 choices[6][0] = "ISO/IEC 25000";
 choices[6][1] = "ISO/IEC 27000";
 choices[6][2] = "ISO 9000";
 choices[6][3] = "ISO 9001";
 answers[6] = choices[6][0];
 units[6] = "93";
 comments[6] = "Id Pregunta: 52. AGE A1 2015";
 preguntaids[6] = 52


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[7]= "8)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[7]= new Array();
 choices[7][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[7][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[7][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[7][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[7] = choices[7][0];
 units[7] = "101";
 comments[7] = "Id Pregunta: 649. Junta de Extremadura A1 2015";
 preguntaids[7] = 649


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[8]= "9)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[8]= new Array();
 choices[8][0] = "Fat y Ntfs.";
 choices[8][1] = "Extfat y Fat.";
 choices[8][2] = "Fat y Nfst.";
 choices[8][3] = "ext2fs y Ntfs.";
 answers[8] = choices[8][0];
 units[8] = "58";
 comments[8] = "Id Pregunta: 642. Junta de Extremadura A1 2015";
 preguntaids[8] = 642


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[9]= "10)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[9]= new Array();
 choices[9][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[9][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[9][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[9][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[9] = choices[9][2];
 units[9] = "7";
 comments[9] = "Id Pregunta: 512. LEY 39/2015";
 preguntaids[9] = 512


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[10]= new Array();
 choices[10][0] = "Art&iacute;culo 16.2.";
 choices[10][1] = "Art&iacute;culo 17.1.";
 choices[10][2] = "Art&iacute;culo 18.1.";
 choices[10][3] = "Art&iacute;culo 18.2.";
 answers[10] = choices[10][0];
 units[10] = "1";
 comments[10] = "Id Pregunta: 249. CONSTITUCION1978";
 preguntaids[10] = 249


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[11]= "12)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[11]= new Array();
 choices[11][0] = "solo mediante ley";
 choices[11][1] = "reglamentariamente";
 choices[11][2] = "mediante ley o reglamentariamente";
 choices[11][3] = "ninguna es correcta";
 answers[11] = choices[11][0];
 units[11] = "7";
 comments[11] = "Id Pregunta: 513. LEY 39/2015";
 preguntaids[11] = 513


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[12]= new Array();
 choices[12][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[12][1] = "Todas las respuestas son correctas.";
 choices[12][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[12][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[12] = choices[12][1];
 units[12] = "10";
 comments[12] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";
 preguntaids[12] = 476


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[13]= new Array();
 choices[13][0] = "Art&iacute;culo 16.2.";
 choices[13][1] = "Art&iacute;culo 17.1.";
 choices[13][2] = "Art&iacute;culo 18.1.";
 choices[13][3] = "Art&iacute;culo 18.2.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 224. CONSTITUCION1978";
 preguntaids[13] = 224


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[14]= "15)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[14]= new Array();
 choices[14][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[14][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[14][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[14][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[14] = choices[14][0];
 units[14] = "1";
 comments[14] = "Id Pregunta: 226. CONSTITUCION1978";
 preguntaids[14] = 226


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[15]= "16)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[15]= new Array();
 choices[15][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[15][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[15][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[15][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[15] = choices[15][1];
 units[15] = "58";
 comments[15] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[15] = 643


//  Id pregunta: 858 Año de creación de pregunta: 2016
 questions[16]= "17)  Respecto de la imagen institucional de los sitios web p&uacute;blicos:";
 choices[16]= new Array();
 choices[16][0] = "La utilizaci&oacute;n de s&iacute;mbolos de imagen o logotipos propios ser&aacute; comunicada al Ministerio de Energ&iacute;a, Turismo y Agenda Digital  para facilitar el cumplimiento de la prohibici&oacute;n legal de registrar signos que los reproduzcan o imiten.";
 choices[16][1] = "Los s&iacute;mbolos y logotipos propios podr&aacute;n ser registrados como marca en el caso de que vayan a ser utilizados en el tr&aacute;fico econ&oacute;mico.";
 choices[16][2] = "Los documentos anexos alojados en p&aacute;ginas webs, que puedan ser susceptibles de ser considerados material de papeler&iacute;a, utilizar&aacute;n el logotipo propio.";
 choices[16][3] = "De acuerdo con el Real Decreto 1565/1999, con car&aacute;cter excepcional, y siempre que se acrediten razones debidamente justificadas, el Ministro de Hacienda y Funci&oacute;n P&uacute;blica y el titular del correspondiente Ministerio de adscripci&oacute;n, vinculaci&oacute;n o dependencia podr&aacute;n autorizar la utilizaci&oacute;n por determinados &oacute;rganos, Organismos aut&oacute;nomos y Servicios Comunes o Entidades Gestoras de la Seguridad Social de s&iacute;mbolos de imagen o logotipos propios junto a los s&iacute;mbolos establecidos.";
 answers[16] = choices[16][1];
 units[16] = "125";
 comments[16] = "Id Pregunta: 858. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[16] = 858


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[17]= "18)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[17]= new Array();
 choices[17][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[17][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[17][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[17][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[17] = choices[17][2];
 units[17] = "26";
 comments[17] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[17] = 99


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[18]= new Array();
 choices[18][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[18][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[18][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[18][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[18] = choices[18][1];
 units[18] = "23";
 comments[18] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";
 preguntaids[18] = 745


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale la respuesta correcta:";
 choices[19]= new Array();
 choices[19][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[19][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[19][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[19][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[19] = choices[19][1];
 units[19] = "98";
 comments[19] = "Id Pregunta: 14. AGE A1 2015";
 preguntaids[19] = 14


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[20]= "21)  Tienen la condici&oacute;n de alto cargo:";
 choices[20]= new Array();
 choices[20][0] = "los &oacute;rganos superiores";
 choices[20][1] = "los &oacute;rganos superiores y directivos";
 choices[20][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[20][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[20] = choices[20][2];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 794. Ley 40/2015";
 preguntaids[20] = 794


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[21]= new Array();
 choices[21][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[21][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[21][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[21][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[21] = choices[21][0];
 units[21] = "5";
 comments[21] = "Id Pregunta: 309. UNION EUROPEA";
 preguntaids[21] = 309


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[22][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[22][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[22][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[22] = choices[22][0];
 units[22] = "1";
 comments[22] = "Id Pregunta: 218. CONSTITUCION1978";
 preguntaids[22] = 218


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[23]= "24)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[23]= new Array();
 choices[23][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[23][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[23][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[23][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[23] = choices[23][1];
 units[23] = "63";
 comments[23] = "Id Pregunta: 33. AGE A1 2015";
 preguntaids[23] = 33


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[24]= "25)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[24]= new Array();
 choices[24][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[24][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[24][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[24][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[24] = choices[24][2];
 units[24] = "57";
 comments[24] = "Id Pregunta: 638. Junta de Extremadura A1 2015";
 preguntaids[24] = 638


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[25]= "26)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[25]= new Array();
 choices[25][0] = "IANA";
 choices[25][1] = "ISOC";
 choices[25][2] = "IETF";
 choices[25][3] = "IAB";
 answers[25] = choices[25][0];
 units[25] = "103";
 comments[25] = "Id Pregunta: 67. AGE A1 2015";
 preguntaids[25] = 67


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[26]= new Array();
 choices[26][0] = "JAXP";
 choices[26][1] = "JNI";
 choices[26][2] = "JNDI";
 choices[26][3] = "JDBC";
 answers[26] = choices[26][1];
 units[26] = "64";
 comments[26] = "Id Pregunta: 36. AGE A1 2015";
 preguntaids[26] = 36


//  Id pregunta: 863 Año de creación de pregunta: 2016
 questions[27]= "28)  Se recomienda que todas aquellas campa&ntilde;as de los ministerios que cuenten con su propia p&aacute;gina web, cuenten adem&aacute;s con un subdominio o URL secundaria en la estructura general de la p&aacute;gina web del Ministerio. Indique la opci&oacute;n correcta.";
 choices[27]= new Array();
 choices[27][0] = "Se podr&aacute; utilizar de forma opcional descripciones sem&aacute;nticas en el nombramiento y titulaci&oacute;n de los subdominios.";
 choices[27][1] = "RUN implementa una soluci&oacute;n sencilla de generaci&oacute;n de URL cortas  para una mejora en la eficiencia de la remisi&oacute;n de direcciones web mediante email, sms, twitter etc";
 choices[27][2] = "El nombre del subdominio o URL secundaria debe ser distinto al que se utilice como URL independiente.";
 choices[27][3] = "Con los subdominios o URL secundarias los robots de los buscadores requerir&aacute;n m&aacute;s tiempo en interpretar su dependencia contextual con el Ministerio u &Oacute;rgano de la Administraci&oacute;n.";
 answers[27] = choices[27][1];
 units[27] = "125";
 comments[27] = "Id Pregunta: 863. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[27] = 863


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[28]= new Array();
 choices[28][0] = "El Presidente del Senado";
 choices[28][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[28][2] = "El Presidente del Gobierno";
 choices[28][3] = "El Presidente de las Cortes Generales";
 answers[28] = choices[28][2];
 units[28] = "1";
 comments[28] = "Id Pregunta: 265. CONSTITUCION1978";
 preguntaids[28] = 265


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[29]= "30)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[29]= new Array();
 choices[29][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[29][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[29][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[29][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[29] = choices[29][3];
 units[29] = "10";
 comments[29] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";
 preguntaids[29] = 508


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[30]= "31)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[30]= new Array();
 choices[30][0] = "El Rey.";
 choices[30][1] = "El Jefe del Estado.";
 choices[30][2] = "El Gobierno.";
 choices[30][3] = "El Presidente del Gobierno.";
 answers[30] = choices[30][2];
 units[30] = "1";
 comments[30] = "Id Pregunta: 208. CONSTITUCION1978";
 preguntaids[30] = 208


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[31]= "32)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[31]= new Array();
 choices[31][0] = "Un d&iacute;a";
 choices[31][1] = "Dos d&iacute;as";
 choices[31][2] = "Tres d&iacute;as";
 choices[31][3] = "Cuatro d&iacute;as";
 answers[31] = choices[31][3];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 831. Ley 40/2015";
 preguntaids[31] = 831


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[32]= "33)  ITIL v3, define:";
 choices[32]= new Array();
 choices[32][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[32][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[32][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[32][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[32] = choices[32][0];
 units[32] = "101";
 comments[32] = "Id Pregunta: 606. Junta de Extremadura A1 2015";
 preguntaids[32] = 606


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[33]= "34)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[33]= new Array();
 choices[33][0] = "Cifrada";
 choices[33][1] = "Conjunta";
 choices[33][2] = "Sistem&aacute;tica";
 choices[33][3] = "Todas son correctas";
 answers[33] = choices[33][3];
 units[33] = "10";
 comments[33] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";
 preguntaids[33] = 452


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[34]= "35)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[34]= new Array();
 choices[34][0] = "Tres a&ntilde;os.";
 choices[34][1] = "Cuatro a&ntilde;os.";
 choices[34][2] = "Cinco a&ntilde;os.";
 choices[34][3] = "Seis a&ntilde;os.";
 answers[34] = choices[34][3];
 units[34] = "5";
 comments[34] = "Id Pregunta: 323. UNION EUROPEA";
 preguntaids[34] = 323


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[35]= new Array();
 choices[35][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[35][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[35][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[35][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[35] = choices[35][0];
 units[35] = "14";
 comments[35] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";
 preguntaids[35] = 386


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[36]= new Array();
 choices[36][0] = "En 1988.";
 choices[36][1] = "En 1981.";
 choices[36][2] = "En 1982.";
 choices[36][3] = "En 1986.";
 answers[36] = choices[36][3];
 units[36] = "5";
 comments[36] = "Id Pregunta: 371. UNION EUROPEA";
 preguntaids[36] = 371


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[37]= new Array();
 choices[37][0] = "Art. 25 LO, 3/2007.";
 choices[37][1] = "Art. 23 LO, 3/2007.";
 choices[37][2] = "Art. 14 LO, 3/2007.";
 choices[37][3] = "Ninguna es correcta, es el art. 13.";
 answers[37] = choices[37][0];
 units[37] = "14";
 comments[37] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";
 preguntaids[37] = 416


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[38]= "39)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[38]= new Array();
 choices[38][0] = "Interchange of Data between Administrations (IDA)";
 choices[38][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[38][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[38][3] = "Interoperability Electronic European Solution (IEES)";
 answers[38] = choices[38][1];
 units[38] = "43";
 comments[38] = "Id Pregunta: 84. AGE A1 2015";
 preguntaids[38] = 84


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[39]= new Array();
 choices[39][0] = "Indirecta.";
 choices[39][1] = "Directa.";
 choices[39][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[39][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[39] = choices[39][1];
 units[39] = "14";
 comments[39] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";
 preguntaids[39] = 388


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Lollipop";
 choices[40][1] = "Jelly Bean";
 choices[40][2] = "Marshmallow";
 choices[40][3] = "KitKat";
 answers[40] = choices[40][2];
 units[40] = "59";
 comments[40] = "Id Pregunta: 61. AGE A1 2015";
 preguntaids[40] = 61


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[41]= "42)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[41]= new Array();
 choices[41][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[41][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[41][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[41][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 250. CONSTITUCION1978";
 preguntaids[41] = 250


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[42]= "43)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[42]= new Array();
 choices[42][0] = "por Real Decreto";
 choices[42][1] = "reglamentariamente";
 choices[42][2] = "mediante Ley";
 choices[42][3] = "ninguna es correcta";
 answers[42] = choices[42][1];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 817. Ley 40/2015";
 preguntaids[42] = 817


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[43]= new Array();
 choices[43][0] = "Art&iacute;culo 14 CE.";
 choices[43][1] = "Art&iacute;culo 9.2 CE.";
 choices[43][2] = "Art&iacute;culo 9.1 CE.";
 choices[43][3] = "Art&iacute;culo 13 CE.";
 answers[43] = choices[43][2];
 units[43] = "14";
 comments[43] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";
 preguntaids[43] = 407


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[44]= "45)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[44]= new Array();
 choices[44][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[44][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[44][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[44][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[44] = choices[44][2];
 units[44] = "14";
 comments[44] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";
 preguntaids[44] = 391


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[45]= "46)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[45]= new Array();
 choices[45][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[45][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[45][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[45][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[45] = choices[45][2];
 units[45] = "73";
 comments[45] = "Id Pregunta: 654. ";
 preguntaids[45] = 654


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[46]= "47)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[46]= new Array();
 choices[46][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[46][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[46][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[46][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[46] = choices[46][2];
 units[46] = "5";
 comments[46] = "Id Pregunta: 288. UNION EUROPEA";
 preguntaids[46] = 288


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[47]= "48)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[47]= new Array();
 choices[47][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[47][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[47][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[47][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[47] = choices[47][3];
 units[47] = "1";
 comments[47] = "Id Pregunta: 227. CONSTITUCION1978";
 preguntaids[47] = 227


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[48]= new Array();
 choices[48][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[48][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[48][2] = "A) y B) son verdaderas";
 choices[48][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[48] = choices[48][2];
 units[48] = "73";
 comments[48] = "Id Pregunta: 106. ";
 preguntaids[48] = 106


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la respuesta falsa:";
 choices[49]= new Array();
 choices[49][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[49][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[49][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[49][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[49] = choices[49][3];
 units[49] = "5";
 comments[49] = "Id Pregunta: 281. UNION EUROPEA";
 preguntaids[49] = 281


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[50]= new Array();
 choices[50][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[50][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[50][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[50][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[50] = choices[50][3];
 units[50] = "19";
 comments[50] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";
 preguntaids[50] = 171


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[51]= "52)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[51]= new Array();
 choices[51][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[51][1] = "Static &amp; Active process for REsolution Bank.";
 choices[51][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[51][3] = "Super Active REsponse for Banks";
 answers[51] = choices[51][0];
 units[51] = "12";
 comments[51] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";
 preguntaids[51] = 139


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[52]= new Array();
 choices[52][0] = "732";
 choices[52][1] = "626";
 choices[52][2] = "786";
 choices[52][3] = "360";
 answers[52] = choices[52][2];
 units[52] = "5";
 comments[52] = "Id Pregunta: 337. UNION EUROPEA";
 preguntaids[52] = 337


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[53]= "54)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[53]= new Array();
 choices[53][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[53][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[53][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[53][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[53] = choices[53][2];
 units[53] = "89";
 comments[53] = "Id Pregunta: 627. Junta de Extremadura A1 2015";
 preguntaids[53] = 627


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[54]= "55)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[54]= new Array();
 choices[54][0] = "Subgrupo A1";
 choices[54][1] = "Subgrupo A2";
 choices[54][2] = "Subgrupo B";
 choices[54][3] = "Subgrupo C1";
 answers[54] = choices[54][0];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 806. Ley 40/2015";
 preguntaids[54] = 806


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[55]= new Array();
 choices[55][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[55][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[55][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[55][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[55] = choices[55][1];
 units[55] = "19";
 comments[55] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[55] = 581


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[56]= new Array();
 choices[56][0] = "Lean startup";
 choices[56][1] = "Business Model Canvas";
 choices[56][2] = "Dynamic system Development method";
 choices[56][3] = "Lean software development";
 answers[56] = choices[56][2];
 units[56] = "34";
 comments[56] = "Id Pregunta: 722. Metodologias Lean";
 preguntaids[56] = 722


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[57]= "58)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[57]= new Array();
 choices[57][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[57][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[57][2] = "Gestionar el Registro de Operadores.";
 choices[57][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[57] = choices[57][3];
 units[57] = "121";
 comments[57] = "Id Pregunta: 24. AGE A1 2015";
 preguntaids[57] = 24


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[58]= new Array();
 choices[58][0] = "las personas jur&iacute;dicas ";
 choices[58][1] = "las entidades con personalidad jur&iacute;dica";
 choices[58][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[58][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[58] = choices[58][1];
 units[58] = "7";
 comments[58] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[58] = 151


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[59]= new Array();
 choices[59][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[59][1] = "Entrada en la Uni&oacute;n Europea";
 choices[59][2] = "Pactos de la Moncloa";
 choices[59][3] = "Ingreso en la ONU";
 answers[59] = choices[59][3];
 units[59] = "12";
 comments[59] = "Id Pregunta: 573. Modelo econ&oacute;mico";
 preguntaids[59] = 573


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[60]= new Array();
 choices[60][0] = "El 1 de junio de 1999.";
 choices[60][1] = "El 1 de mayo de 1999.";
 choices[60][2] = "El 1 de abril de 1999.";
 choices[60][3] = "El 1 de marzo de 1999.";
 answers[60] = choices[60][1];
 units[60] = "5";
 comments[60] = "Id Pregunta: 364. UNION EUROPEA";
 preguntaids[60] = 364


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[61]= new Array();
 choices[61][0] = "Data Mining (miner&iacute;a de datos)";
 choices[61][1] = "Business Intelligence (inteligencia de negocio)";
 choices[61][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[61][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[61] = choices[61][1];
 units[61] = "72";
 comments[61] = "Id Pregunta: 68. AGE A1 2015";
 preguntaids[61] = 68


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[62]= "63)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[62]= new Array();
 choices[62][0] = "Un plan de igualdad.";
 choices[62][1] = "Un informe de impacto de g&eacute;nero.";
 choices[62][2] = "Un programa de igualdad.";
 choices[62][3] = "Todas son correctas.";
 answers[62] = choices[62][1];
 units[62] = "14";
 comments[62] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";
 preguntaids[62] = 426


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[63]= new Array();
 choices[63][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[63][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[63][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[63][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[63] = choices[63][0];
 units[63] = "14";
 comments[63] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";
 preguntaids[63] = 393


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[64]= "65)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[64]= new Array();
 choices[64][0] = "Ejecuci&oacute;n";
 choices[64][1] = "Adjudicaci&oacute;n";
 choices[64][2] = "Licitaci&oacute;n";
 choices[64][3] = "Formalizaci&oacute;n";
 answers[64] = choices[64][3];
 units[64] = "37";
 comments[64] = "Id Pregunta: 69. AGE A1 2015";
 preguntaids[64] = 69


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[65]= "66)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[65]= new Array();
 choices[65][0] = "90";
 choices[65][1] = "50";
 choices[65][2] = "64";
 choices[65][3] = "60";
 answers[65] = choices[65][1];
 units[65] = "5";
 comments[65] = "Id Pregunta: 331. UNION EUROPEA";
 preguntaids[65] = 331


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[66]= "67)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[66]= new Array();
 choices[66][0] = "Primario, que incluye la agricultura y la pesca";
 choices[66][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[66][2] = "Minero, junto con las exportaciones de comercio";
 choices[66][3] = "Servicios";
 answers[66] = choices[66][3];
 units[66] = "12";
 comments[66] = "Id Pregunta: 569. Modelo econ&oacute;mico";
 preguntaids[66] = 569


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[67]= "68)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[67]= new Array();
 choices[67][0] = "Parcial.";
 choices[67][1] = "Sectorial.";
 choices[67][2] = "Tranversal.";
 choices[67][3] = "Vertical.";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";
 preguntaids[67] = 402


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[68]= "69)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[68]= new Array();
 choices[68][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[68][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[68][2] = "el sector p&uacute;blico institucional";
 choices[68][3] = "el sector privado corporativo";
 answers[68] = choices[68][3];
 units[68] = "7";
 comments[68] = "Id Pregunta: 515. LEY 39/2015";
 preguntaids[68] = 515


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[69]= "70)  La recusaci&oacute;n pueden promoverla...";
 choices[69]= new Array();
 choices[69][0] = "Cualquier &oacute;rgano";
 choices[69][1] = "El interesado";
 choices[69][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[69][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[69] = choices[69][0];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[69] = 828


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[70]= "71)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[70]= new Array();
 choices[70][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[70][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[70][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[70][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[70] = choices[70][2];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 843. Ley 40/2015";
 preguntaids[70] = 843


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[71]= new Array();
 choices[71][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[71][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[71][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[71][3] = "El software funcionando es la medida principal del progreso.";
 answers[71] = choices[71][2];
 units[71] = "34";
 comments[71] = "Id Pregunta: 43. AGE A1 2015";
 preguntaids[71] = 43


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[72]= "73)  Indica la respuesta correcta";
 choices[72]= new Array();
 choices[72][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[72][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[72][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[72][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[72] = choices[72][0];
 units[72] = "34, 84";
 comments[72] = "Id Pregunta: 730. Metodologias &aacute;giles";
 preguntaids[72] = 730


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[73]= "74)  En qu&eacute; consiste el principio BASE:";
 choices[73]= new Array();
 choices[73][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[73][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[73][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[73][3] = "Todas las anteriores son falsas";
 answers[73] = choices[73][3];
 units[73] = "73";
 comments[73] = "Id Pregunta: 103. ";
 preguntaids[73] = 103


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[74]= "75)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[74]= new Array();
 choices[74][0] = "6 TB.";
 choices[74][1] = "8 TB.";
 choices[74][2] = "7 TB.";
 choices[74][3] = "4 TB.";
 answers[74] = choices[74][3];
 units[74] = "53";
 comments[74] = "Id Pregunta: 853. Xunta de Galicia 2015";
 preguntaids[74] = 853


