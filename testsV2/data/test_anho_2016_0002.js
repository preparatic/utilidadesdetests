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

//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[0]= new Array();
 choices[0][0] = "ISO/IEC 31000";
 choices[0][1] = "ISO/IEC 14000";
 choices[0][2] = "ISO/IEC 38500";
 choices[0][3] = "ISO/IEC 18000";
 answers[0] = choices[0][2];
 units[0] = "26";
 comments[0] = "Id Pregunta: 545. Gobernanza TIC";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[1]= "2)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[1]= new Array();
 choices[1][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[1][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[1][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[1][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[1] = choices[1][3];
 units[1] = "7";
 comments[1] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[2]= "3)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[2]= new Array();
 choices[2][0] = "la Administraci&oacute;n General del Estado";
 choices[2][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[2][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[2][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[2] = choices[2][3];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[3]= new Array();
 choices[3][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[3][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[3][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[3][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[3] = choices[3][2];
 units[3] = "26";
 comments[3] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[4]= new Array();
 choices[4][0] = "Las respuestas a) y b) son correctas.";
 choices[4][1] = "Las respuestas a) y b) no son correctas.";
 choices[4][2] = "Contenido coherente con los planes sectoriales.";
 choices[4][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[4] = choices[4][0];
 units[4] = "10";
 comments[4] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[5]= new Array();
 choices[5][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[5][1] = "Entrada en la Uni&oacute;n Europea";
 choices[5][2] = "Pactos de la Moncloa";
 choices[5][3] = "Ingreso en la ONU";
 answers[5] = choices[5][3];
 units[5] = "12";
 comments[5] = "Id Pregunta: 573. Modelo econ&oacute;mico";


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[6]= "7)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[6]= new Array();
 choices[6][0] = "Fat y Ntfs.";
 choices[6][1] = "Extfat y Fat.";
 choices[6][2] = "Fat y Nfst.";
 choices[6][3] = "ext2fs y Ntfs.";
 answers[6] = choices[6][0];
 units[6] = "58";
 comments[6] = "Id Pregunta: 642. Junta de Extremadura A1 2015";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[7]= "8)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[7]= new Array();
 choices[7][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[7][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[7][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[7][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[8]= "9)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[8]= new Array();
 choices[8][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[8][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[8][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[8][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[8] = choices[8][0];
 units[8] = "1";
 comments[8] = "Id Pregunta: 241. CONSTITUCION1978";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[9]= new Array();
 choices[9][0] = "Perceptible";
 choices[9][1] = "Operable";
 choices[9][2] = "Comprensible";
 choices[9][3] = "Robusto";
 answers[9] = choices[9][2];
 units[9] = "42";
 comments[9] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[10]= "11)  El plan nacional de ciudades inteligentes...";
 choices[10]= new Array();
 choices[10][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[10][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[10][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[10][3] = "No existe";
 answers[10] = choices[10][1];
 units[10] = "19";
 comments[10] = "Id Pregunta: 563. Ciudades Inteligentes";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[11]= new Array();
 choices[11][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[11][1] = "Por Orden Ministerial.";
 choices[11][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[11][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[12]= "13)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[12]= new Array();
 choices[12][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[12][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[12][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[12][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[12] = choices[12][3];
 units[12] = "41";
 comments[12] = "Id Pregunta: 82. AGE A1 2015";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[13]= new Array();
 choices[13][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[13][1] = "De nivel alto.";
 choices[13][2] = "De nivel medio y nivel alto.";
 choices[13][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[13] = choices[13][3];
 units[13] = "35";
 comments[13] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[14]= "15)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[14]= new Array();
 choices[14][0] = "De las disposiciones favorables.";
 choices[14][1] = "De las disposiciones sancionadoras no favorables.";
 choices[14][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[14][3] = "Las respuestas b) y c) son correctas.";
 answers[14] = choices[14][3];
 units[14] = "1";
 comments[14] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[15]= "16)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[15]= new Array();
 choices[15][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[15][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[15][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[15][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[15] = choices[15][1];
 units[15] = "14";
 comments[15] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[16]= new Array();
 choices[16][0] = "El Ministro de Econom&iacute;a.";
 choices[16][1] = "El Gobierno.";
 choices[16][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[16][3] = "El Presidente del Gobierno.";
 answers[16] = choices[16][1];
 units[16] = "10";
 comments[16] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[17]= "18)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[17]= new Array();
 choices[17][0] = "en cada Comunidad Aut&oacute;noma";
 choices[17][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[17][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[17][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[17] = choices[17][1];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 815. Ley 40/2015";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[18]= "19)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[18]= new Array();
 choices[18][0] = "Interoperabilidad";
 choices[18][1] = "Integridad";
 choices[18][2] = "Capital humano";
 choices[18][3] = "Trazabilidad";
 answers[18] = choices[18][2];
 units[18] = "19";
 comments[18] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[19]= "20)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Acoso sexual.";
 choices[19][1] = "Acoso por raz&oacute;n de sexo.";
 choices[19][2] = "Acoso laboral.";
 choices[19][3] = "Acoso mental.";
 answers[19] = choices[19][1];
 units[19] = "14";
 comments[19] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[20]= new Array();
 choices[20][0] = "Programa de Educaci&oacute;n Digital";
 choices[20][1] = "Programa de Salud y Bienestar Social";
 choices[20][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[20][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[20] = choices[20][3];
 units[20] = "19";
 comments[20] = "Id Pregunta: 756. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[21]= new Array();
 choices[21][0] = "No se aplican directamente en los Estados.";
 choices[21][1] = "No son vinculantes.";
 choices[21][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[21][3] = "Tienen alcance general.";
 answers[21] = choices[21][0];
 units[21] = "5";
 comments[21] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[22]= "23)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[22]= new Array();
 choices[22][0] = "los Subsecretarios y los Secretarios generales";
 choices[22][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[22][2] = "los Secretarios de Estado y los Directores generales";
 choices[22][3] = "los Ministros y los Secretarios de Estado";
 answers[22] = choices[22][3];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[23]= "24)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[23]= new Array();
 choices[23][0] = "Un Reglamento.";
 choices[23][1] = "Un Decreto.";
 choices[23][2] = "Una Ley.";
 choices[23][3] = "Un Real-Decreto.";
 answers[23] = choices[23][2];
 units[23] = "5";
 comments[23] = "Id Pregunta: 368. UNION EUROPEA";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[24]= "25)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[24]= new Array();
 choices[24][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[24][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[24][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[24][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[24] = choices[24][3];
 units[24] = "7";
 comments[24] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[25]= "26)  La partida presupuestaria es equivalente a...";
 choices[25]= new Array();
 choices[25][0] = "El sujeto que realiza el gasto";
 choices[25][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[25][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[25][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[25] = choices[25][3];
 units[25] = "10";
 comments[25] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[26]= "27)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[26]= new Array();
 choices[26][0] = "3 a&ntilde;os.";
 choices[26][1] = "5 a&ntilde;os.";
 choices[26][2] = "4 a&ntilde;os.";
 choices[26][3] = "6 a&ntilde;os.";
 answers[26] = choices[26][1];
 units[26] = "1";
 comments[26] = "Id Pregunta: 193. CONSTITUCION1978";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[27]= "28)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[27]= new Array();
 choices[27][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[27][1] = "el Consejo de Estado";
 choices[27][2] = "el Congreso";
 choices[27][3] = "las Cortes Generales";
 answers[27] = choices[27][0];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[28]= new Array();
 choices[28][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[28][1] = "Las CMADs";
 choices[28][2] = "Ambas son correctas.";
 choices[28][3] = "Ninguna es correcta";
 answers[28] = choices[28][2];
 units[28] = "19";
 comments[28] = "Id Pregunta: 598. Estrategia TIC";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[29]= new Array();
 choices[29][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[29][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[29][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[29][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[29] = choices[29][3];
 units[29] = "10";
 comments[29] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[30]= "31)  La iniciativa legislativa corresponde:";
 choices[30]= new Array();
 choices[30][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[30][1] = "Al rey y al Gobierno.";
 choices[30][2] = "Al Congreso, al Senado y al Rey.";
 choices[30][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[30] = choices[30][3];
 units[30] = "1";
 comments[30] = "Id Pregunta: 259. CONSTITUCION1978";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[31]= new Array();
 choices[31][0] = "Bienalmente";
 choices[31][1] = "Anualmente";
 choices[31][2] = "Semestralmente";
 choices[31][3] = "Cada cuatro a&ntilde;os";
 answers[31] = choices[31][1];
 units[31] = "19";
 comments[31] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[32]= new Array();
 choices[32][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[32][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[32][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[32][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[32] = choices[32][1];
 units[32] = "77";
 comments[32] = "Id Pregunta: 694. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[33]= new Array();
 choices[33][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[33][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[33][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[33][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[33] = choices[33][2];
 units[33] = "22";
 comments[33] = "Id Pregunta: 129. ";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[34]= new Array();
 choices[34][0] = "Ley Org&aacute;nica.";
 choices[34][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[34][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[34][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[35]= "36)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[35]= new Array();
 choices[35][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[35][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[35][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[35][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[35] = choices[35][3];
 units[35] = "1";
 comments[35] = "Id Pregunta: 236. CONSTITUCION1978";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[36]= new Array();
 choices[36][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[36][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[36][2] = "Servicio de seguridad gestionada";
 choices[36][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[36] = choices[36][1];
 units[36] = "26";
 comments[36] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[37]= "38)  Respecto a las unidades administrativas:";
 choices[37]= new Array();
 choices[37][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[37][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[37][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[37][3] = "ninguna es correcta";
 answers[37] = choices[37][1];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[38]= new Array();
 choices[38][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[38][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[38][2] = "Las respuestas a) b) no son correctas.";
 choices[38][3] = "Las respuestas a) y b) son correctas.";
 answers[38] = choices[38][3];
 units[38] = "10";
 comments[38] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[39]= "40)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[39]= new Array();
 choices[39][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[39][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[39][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[39][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[39] = choices[39][1];
 units[39] = "7";
 comments[39] = "Id Pregunta: 539. LEY 39/2015";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[40]= "41)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[40]= new Array();
 choices[40][0] = "Discriminaci&oacute;n indirecta.";
 choices[40][1] = "Discriminaci&oacute;n directa.";
 choices[40][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[40][3] = "Discriminaci&oacute;n abusiva.";
 answers[40] = choices[40][0];
 units[40] = "14";
 comments[40] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ala la correcta:";
 choices[41]= new Array();
 choices[41][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[41][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[41][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[41][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[41] = choices[41][1];
 units[41] = "7";
 comments[41] = "Id Pregunta: 543. LEY 39/2015";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[42]= new Array();
 choices[42][0] = "verbalmente";
 choices[42][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[42][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[42][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[42] = choices[42][2];
 units[42] = "7";
 comments[42] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[43]= new Array();
 choices[43][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[43][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[43][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[43][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[43] = choices[43][0];
 units[43] = "1";
 comments[43] = "Id Pregunta: 220. CONSTITUCION1978";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[44]= "45)  Es falso que:";
 choices[44]= new Array();
 choices[44][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[44][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[44][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[44][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[44] = choices[44][1];
 units[44] = "18, 20";
 comments[44] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[45]= "46)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[45]= new Array();
 choices[45][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[45][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[45][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[45][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[45] = choices[45][2];
 units[45] = "89";
 comments[45] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[46]= "47)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[46]= new Array();
 choices[46][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[46][1] = "Ninguna de las respuestas es correcta.";
 choices[46][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[46][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[46] = choices[46][0];
 units[46] = "5";
 comments[46] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[47]= new Array();
 choices[47][0] = "En t&iacute;tulos-valores.";
 choices[47][1] = "Las respuestas a) y b) son correctas.";
 choices[47][2] = "Las respuestas a) y b) no son correctas.";
 choices[47][3] = "En cuenta.";
 answers[47] = choices[47][1];
 units[47] = "10";
 comments[47] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[48]= "49)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[48]= new Array();
 choices[48][0] = "A los ministros.";
 choices[48][1] = "Las respuestas a) y b) son correctas.";
 choices[48][2] = "Las respuestas a) y b) no son correctas.";
 choices[48][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[48] = choices[48][1];
 units[48] = "10";
 comments[48] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[49]= "50)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[49]= new Array();
 choices[49][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[49][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[49][2] = "el Ministerio del Interior";
 choices[49][3] = "la Administraci&oacute;n General del Estado";
 answers[49] = choices[49][0];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[50]= new Array();
 choices[50][0] = "Ley 50/1997, del Gobierno.";
 choices[50][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[50][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[50][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[50] = choices[50][1];
 units[50] = "10";
 comments[50] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[51]= "52)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[51]= new Array();
 choices[51][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[51][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[51][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[51][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[51] = choices[51][2];
 units[51] = "22";
 comments[51] = "Id Pregunta: 97. AGE A1 2015";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[52]= new Array();
 choices[52][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[52][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[52][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[52][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 849. Ley 40/2015";


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[53]= new Array();
 choices[53][0] = "Art&iacute;culo 14 CE.";
 choices[53][1] = "Art&iacute;culo 9.2 CE.";
 choices[53][2] = "Art&iacute;culo 9.1 CE.";
 choices[53][3] = "Art&iacute;culo 13 CE.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[54]= "55)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[54]= new Array();
 choices[54][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[54][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[54][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[54][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[54] = choices[54][1];
 units[54] = "1";
 comments[54] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[55]= new Array();
 choices[55][0] = "Avro";
 choices[55][1] = "Sqoop";
 choices[55][2] = "UIMA";
 choices[55][3] = "Jaql";
 answers[55] = choices[55][1];
 units[55] = "73";
 comments[55] = "Id Pregunta: 662. ";


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[56]= "57)  En el lenguaje de modelado UML :";
 choices[56]= new Array();
 choices[56][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[56][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[56][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[56][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[56] = choices[56][2];
 units[56] = "89";
 comments[56] = "Id Pregunta: 3. AGE A1 2015";


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[57]= new Array();
 choices[57][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[57][1] = "Todas las respuestas son correctas.";
 choices[57][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[57][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[57] = choices[57][1];
 units[57] = "10";
 comments[57] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[58]= new Array();
 choices[58][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[58][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[58][2] = "Apertura al exterior";
 choices[58][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[58] = choices[58][0];
 units[58] = "17";
 comments[58] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[59]= "60)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[59]= new Array();
 choices[59][0] = "Acciones de discriminaci&oacute;n.";
 choices[59][1] = "Acciones positivas.";
 choices[59][2] = "Acciones negativas.";
 choices[59][3] = "Acciones neutras.";
 answers[59] = choices[59][1];
 units[59] = "14";
 comments[59] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[60]= new Array();
 choices[60][0] = "Crecimiento sostenible";
 choices[60][1] = "Crecimiento inteligente";
 choices[60][2] = "Crecimiento digital";
 choices[60][3] = "Crecimiento integrador";
 answers[60] = choices[60][2];
 units[60] = "19";
 comments[60] = "Id Pregunta: 759. Europa 2020";


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[61]= "62)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[61]= new Array();
 choices[61][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[61][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[61][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[61][3] = "Todas las respuestas son correctas.";
 answers[61] = choices[61][0];
 units[61] = "101";
 comments[61] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[62]= "63)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[62]= new Array();
 choices[62][0] = "623";
 choices[62][1] = "649";
 choices[62][2] = "626";
 choices[62][3] = "565";
 answers[62] = choices[62][2];
 units[62] = "5";
 comments[62] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[63]= "64)  El Tribunal de Justicia se cre&oacute; en:";
 choices[63]= new Array();
 choices[63][0] = "El Tratado de la CECA.";
 choices[63][1] = "El Tratado de Niza.";
 choices[63][2] = "El Tratado de &Aacute;msterdam.";
 choices[63][3] = "El Tratado de Lisboa.";
 answers[63] = choices[63][0];
 units[63] = "5";
 comments[63] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[64]= "65)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[64]= new Array();
 choices[64][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[64][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[64][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[64][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[64] = choices[64][2];
 units[64] = "10";
 comments[64] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[65]= new Array();
 choices[65][0] = "En 2011";
 choices[65][1] = "En 2013";
 choices[65][2] = "En 2015";
 choices[65][3] = "En 2016";
 answers[65] = choices[65][2];
 units[65] = "17";
 comments[65] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; es el machine learning?";
 choices[66]= new Array();
 choices[66][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[66][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[66][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[66][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[66] = choices[66][0];
 units[66] = "73";
 comments[66] = "Id Pregunta: 659. ";


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[67]= new Array();
 choices[67][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[67][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[67][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[67][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 202. CONSTITUCION1978";


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[68]= new Array();
 choices[68][0] = "Por reembolso de pr&eacute;stamos.";
 choices[68][1] = "Por la venta de bienes.";
 choices[68][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[68][3] = "Por prestaci&oacute;n de servicios.";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[69]= "70)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[69]= new Array();
 choices[69][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[69][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[69][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[69][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[69] = choices[69][3];
 units[69] = "101";
 comments[69] = "Id Pregunta: 57. AGE A1 2015";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[70]= "71)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[70]= new Array();
 choices[70][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[70][1] = "Protecci&oacute;n de su salud.";
 choices[70][2] = "Ninguna es correcta.";
 choices[70][3] = "A y B son correctas.";
 answers[70] = choices[70][1];
 units[70] = "14";
 comments[70] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[71]= "72)  En el sistema operativo Unix/Linux, el comando id:";
 choices[71]= new Array();
 choices[71][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[71][1] = "El comando id no existe.";
 choices[71][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[71][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[71] = choices[71][0];
 units[71] = "57";
 comments[71] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[72]= new Array();
 choices[72][0] = "Categor&iacute;a b&aacute;sica";
 choices[72][1] = "Categor&iacute;a media";
 choices[72][2] = "Categor&iacute;a alta";
 choices[72][3] = "Categor&iacute;a media y alta";
 answers[72] = choices[72][2];
 units[72] = "46";
 comments[72] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[73]= new Array();
 choices[73][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[73][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[73][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[73][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[73] = choices[73][3];
 units[73] = "106";
 comments[73] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[74]= "75)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[74]= new Array();
 choices[74][0] = "Peters";
 choices[74][1] = "Hollingsworth";
 choices[74][2] = "Manuel Castells";
 choices[74][3] = "Gaebler";
 answers[74] = choices[74][1];
 units[74] = "18, 20";
 comments[74] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


