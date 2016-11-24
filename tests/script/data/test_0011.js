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

//  Id pregunta: 10424 Año de creación de pregunta: 2016
 questions[0]= "1)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[0]= new Array();
 choices[0][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[0][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[0][2] = "Ninguna es correcta.";
 choices[0][3] = "A y B son correctas.";
 answers[0] = choices[0][0];
 units[0] = "14";
 comments[0] = "Id Pregunta: 10424. POLITICAS DE IGUALDAD";


//  Id pregunta: 10323 Año de creación de pregunta: 2016
 questions[1]= "2)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[1]= new Array();
 choices[1][0] = "Tres a&ntilde;os.";
 choices[1][1] = "Cuatro a&ntilde;os.";
 choices[1][2] = "Cinco a&ntilde;os.";
 choices[1][3] = "Seis a&ntilde;os.";
 answers[1] = choices[1][3];
 units[1] = "5";
 comments[1] = "Id Pregunta: 10323. UNION EUROPEA";


//  Id pregunta: 10656 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[2]= new Array();
 choices[2][0] = "Cassandra";
 choices[2][1] = "Riak";
 choices[2][2] = "Avro";
 choices[2][3] = "Zookeeper";
 answers[2] = choices[2][3];
 units[2] = "73";
 comments[2] = "Id Pregunta: 10656. ";


//  Id pregunta: 10017 Año de creación de pregunta: 2016
 questions[3]= "4)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[3]= new Array();
 choices[3][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[3][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[3][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[3][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[3] = choices[3][3];
 units[3] = "44";
 comments[3] = "Id Pregunta: 10017. AGE A1 2015";


//  Id pregunta: 10479 Año de creación de pregunta: 2016
 questions[4]= "5)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[4]= new Array();
 choices[4][0] = "A nivel de art&iacute;culo.";
 choices[4][1] = "A nivel de cap&iacute;tulo.";
 choices[4][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[4][3] = "A nivel de concepto.";
 answers[4] = choices[4][2];
 units[4] = "10";
 comments[4] = "Id Pregunta: 10479. PRESUPUESTOS GENERALES";


//  Id pregunta: 10330 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[5]= new Array();
 choices[5][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[5][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[5][2] = "Todas son correctas.";
 choices[5][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 10330. UNION EUROPEA";


//  Id pregunta: 10227 Año de creación de pregunta: 2016
 questions[6]= "7)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[6]= new Array();
 choices[6][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[6][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[6][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[6][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[6] = choices[6][3];
 units[6] = "1";
 comments[6] = "Id Pregunta: 10227. CONSTITUCION1978";


//  Id pregunta: 10469 Año de creación de pregunta: 2016
 questions[7]= "8)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[7][1] = "Las inversiones reales y financieras.";
 choices[7][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[7][3] = "Las transferencias de capital y las inversiones reales.";
 answers[7] = choices[7][3];
 units[7] = "10";
 comments[7] = "Id Pregunta: 10469. PRESUPUESTOS GENERALES";


//  Id pregunta: 10104 Año de creación de pregunta: 2016
 questions[8]= "9)  Son bases de datos NoSQL:";
 choices[8]= new Array();
 choices[8][0] = "MongoDB y Maria DB";
 choices[8][1] = "HBase y Dynamo";
 choices[8][2] = "MariaDB, Cassandra y BigTable";
 choices[8][3] = "La A) y la C)";
 answers[8] = choices[8][1];
 units[8] = "73";
 comments[8] = "Id Pregunta: 10104. ";


//  Id pregunta: 10589 Año de creación de pregunta: 2016
 questions[9]= "10)  Son servicios declarados compartidos:";
 choices[9]= new Array();
 choices[9][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[9][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[9][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[9][3] = "Todos los anteriores";
 answers[9] = choices[9][3];
 units[9] = "19";
 comments[9] = "Id Pregunta: 10589. Estrategia TIC";


//  Id pregunta: 10664 Año de creación de pregunta: 2016
 questions[10]= "11)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[10]= new Array();
 choices[10][0] = "Siempre en formato electr&oacute;nico.";
 choices[10][1] = "Siempre en formato papel.";
 choices[10][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[10][3] = "La ley no regula el formato del expediente.";
 answers[10] = choices[10][0];
 units[10] = "7";
 comments[10] = "Id Pregunta: 10664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10171 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[11]= new Array();
 choices[11][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[11][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[11][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[11][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[11] = choices[11][3];
 units[11] = "19";
 comments[11] = "Id Pregunta: 10171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 10194 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[12]= new Array();
 choices[12][0] = "11";
 choices[12][1] = "12";
 choices[12][2] = "14";
 choices[12][3] = "8";
 answers[12] = choices[12][1];
 units[12] = "1";
 comments[12] = "Id Pregunta: 10194. CONSTITUCION1978";


//  Id pregunta: 10172 Año de creación de pregunta: 2016
 questions[13]= "14)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[13][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[13][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[13][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 10172. CONSTITUCION1978";


//  Id pregunta: 10446 Año de creación de pregunta: 2016
 questions[14]= "15)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[14]= new Array();
 choices[14][0] = "Ejecutivo";
 choices[14][1] = "Limitativo";
 choices[14][2] = "Estimativo";
 choices[14][3] = "Progresivo";
 answers[14] = choices[14][2];
 units[14] = "10";
 comments[14] = "Id Pregunta: 10446. PRESUPUESTOS GENERALES";


//  Id pregunta: 10557 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[15]= new Array();
 choices[15][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[15][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[15][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[15][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[15] = choices[15][0];
 units[15] = "19";
 comments[15] = "Id Pregunta: 10557. Agenda Digital";


//  Id pregunta: 10345 Año de creación de pregunta: 2016
 questions[16]= "17)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[16]= new Array();
 choices[16][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[16][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[16][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[16][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 10345. UNION EUROPEA";


//  Id pregunta: 10641 Año de creación de pregunta: 2016
 questions[17]= "18)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[17]= new Array();
 choices[17][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[17][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[17][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[17][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[17] = choices[17][1];
 units[17] = "58";
 comments[17] = "Id Pregunta: 10641. Junta de Extremadura A1 2015";


//  Id pregunta: 10630 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[18]= new Array();
 choices[18][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[18][1] = "De nivel alto.";
 choices[18][2] = "De nivel medio y nivel alto.";
 choices[18][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[18] = choices[18][3];
 units[18] = "35";
 comments[18] = "Id Pregunta: 10630. Junta de Extremadura A1 2015";


//  Id pregunta: 10286 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[19]= new Array();
 choices[19][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[19][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[19][2] = "Iniciativa europea de libre flujo de datos.";
 choices[19][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10286. UNION EUROPEA";


//  Id pregunta: 10210 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[20]= new Array();
 choices[20][0] = "El rey, a propuesta del Gobierno.";
 choices[20][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[20][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[20][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[20] = choices[20][1];
 units[20] = "1";
 comments[20] = "Id Pregunta: 10210. CONSTITUCION1978";


//  Id pregunta: 10186 Año de creación de pregunta: 2016
 questions[21]= "22)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[21]= new Array();
 choices[21][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[21][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[21][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[21][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[21] = choices[21][2];
 units[21] = "1";
 comments[21] = "Id Pregunta: 10186. CONSTITUCION1978";


//  Id pregunta: 10672 Año de creación de pregunta: 2016
 questions[22]= "23)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[22]= new Array();
 choices[22][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[22][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[22][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[22][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[22] = choices[22][2];
 units[22] = "47";
 comments[22] = "Id Pregunta: 10672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 10376 Año de creación de pregunta: 2016
 questions[23]= "24)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[23]= new Array();
 choices[23][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[23][1] = "Personas con nacionalidad europea.";
 choices[23][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[23][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[23] = choices[23][3];
 units[23] = "5";
 comments[23] = "Id Pregunta: 10376. UNION EUROPEA";


//  Id pregunta: 10480 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[24]= new Array();
 choices[24][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[24][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[24][2] = "Las respuestas a) b) no son correctas.";
 choices[24][3] = "Las respuestas a) y b) son correctas.";
 answers[24] = choices[24][3];
 units[24] = "10";
 comments[24] = "Id Pregunta: 10480. PRESUPUESTOS GENERALES";


//  Id pregunta: 10533 Año de creación de pregunta: 2016
 questions[25]= "26)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[25]= new Array();
 choices[25][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[25][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[25][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[25][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[25] = choices[25][1];
 units[25] = "7";
 comments[25] = "Id Pregunta: 10533. LEY 39/2015";


//  Id pregunta: 10144 Año de creación de pregunta: 2016
 questions[26]= "27)  Sobre el recurso de reposici&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[26][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[26][2] = "Ha desaparecido en la Ley 39/2015";
 choices[26][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[26] = choices[26][0];
 units[26] = "8";
 comments[26] = "Id Pregunta: 10144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 10440 Año de creación de pregunta: 2016
 questions[27]= "28)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[27]= new Array();
 choices[27][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[27][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[27][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[27][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[27] = choices[27][2];
 units[27] = "43";
 comments[27] = "Id Pregunta: 10440. SERVICIOS COMUNES";


//  Id pregunta: 10332 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[28]= new Array();
 choices[28][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[28][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[28][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[28][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[28] = choices[28][3];
 units[28] = "5";
 comments[28] = "Id Pregunta: 10332. UNION EUROPEA";


//  Id pregunta: 10625 Año de creación de pregunta: 2016
 questions[29]= "30)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[29]= new Array();
 choices[29][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[29][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[29][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[29][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[29] = choices[29][2];
 units[29] = "89";
 comments[29] = "Id Pregunta: 10625. Junta de Extremadura A1 2015";


//  Id pregunta: 10003 Año de creación de pregunta: 2016
 questions[30]= "31)  En el lenguaje de modelado UML :";
 choices[30]= new Array();
 choices[30][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[30][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[30][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[30][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[30] = choices[30][2];
 units[30] = "89";
 comments[30] = "Id Pregunta: 10003. AGE A1 2015";


//  Id pregunta: 10667 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[31]= new Array();
 choices[31][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[31][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[31][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[31][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[31] = choices[31][2];
 units[31] = "7";
 comments[31] = "Id Pregunta: 10667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10030 Año de creación de pregunta: 2016
 questions[32]= "33)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[32]= new Array();
 choices[32][0] = "SMB3";
 choices[32][1] = "AFP";
 choices[32][2] = "NFS";
 choices[32][3] = "FTP";
 answers[32] = choices[32][0];
 units[32] = "59";
 comments[32] = "Id Pregunta: 10030. AGE A1 2015";


//  Id pregunta: 10300 Año de creación de pregunta: 2016
 questions[33]= "34)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[33]= new Array();
 choices[33][0] = "La Comisi&oacute;n.";
 choices[33][1] = "El Consejo de Europa.";
 choices[33][2] = "El Consejo Europeo.";
 choices[33][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[33] = choices[33][3];
 units[33] = "5";
 comments[33] = "Id Pregunta: 10300. UNION EUROPEA";


//  Id pregunta: 10085 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[34]= new Array();
 choices[34][0] = "Estimaci&oacute;n del riesgo";
 choices[34][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[34][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[34][3] = "Mapa de riesgos";
 answers[34] = choices[34][3];
 units[34] = "45";
 comments[34] = "Id Pregunta: 10085. AGE A1 2015";


//  Id pregunta: 10088 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[35]= new Array();
 choices[35][0] = "Diagrama de clases";
 choices[35][1] = "Diagrama de componentes";
 choices[35][2] = "Diagrama de estructura";
 choices[35][3] = "Diagrama de paquetes";
 answers[35] = choices[35][0];
 units[35] = "91";
 comments[35] = "Id Pregunta: 10088. AGE A1 2015";


//  Id pregunta: 10272 Año de creación de pregunta: 2016
 questions[36]= "37)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[36]= new Array();
 choices[36][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[36][1] = "Anteriormente se denominaba Sonar.";
 choices[36][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[36][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[36] = choices[36][2];
 units[36] = "92";
 comments[36] = "Id Pregunta: 10272. INTEGRACION CONTINUA";


//  Id pregunta: 10616 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[37]= new Array();
 choices[37][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[37][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[37][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[37][3] = "Todas las respuestas son correctas.";
 answers[37] = choices[37][2];
 units[37] = "42";
 comments[37] = "Id Pregunta: 10616. Junta de Extremadura A1 2015";


//  Id pregunta: 10517 Año de creación de pregunta: 2016
 questions[38]= "39)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[38]= new Array();
 choices[38][0] = "la Administraci&oacute;n General del Estado";
 choices[38][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[38][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[38][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[38] = choices[38][3];
 units[38] = "7";
 comments[38] = "Id Pregunta: 10517. LEY 39/2015";


//  Id pregunta: 10243 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[39]= new Array();
 choices[39][0] = "Art&iacute;culo 70.";
 choices[39][1] = "Art&iacute;culo 54.";
 choices[39][2] = "Articulo 62.";
 choices[39][3] = "Articulo 55. 5.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 10243. CONSTITUCION1978";


//  Id pregunta: 10629 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[40]= new Array();
 choices[40][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[40][1] = "El responsable de la custodia de los datos enviados.";
 choices[40][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[40][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[40] = choices[40][3];
 units[40] = "35";
 comments[40] = "Id Pregunta: 10629. Junta de Extremadura A1 2015";


//  Id pregunta: 10509 Año de creación de pregunta: 2016
 questions[41]= "42)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[41]= new Array();
 choices[41][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[41][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[41][2] = "Absoluta frente a cualquier otro gasto.";
 choices[41][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 10509. PRESUPUESTOS GENERALES";


//  Id pregunta: 10400 Año de creación de pregunta: 2016
 questions[42]= "43)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[42]= new Array();
 choices[42][0] = "A la persona demandante.";
 choices[42][1] = "A la persona demandada.";
 choices[42][2] = "Al &oacute;rgano judicial.";
 choices[42][3] = "Al &oacute;rgano administrativo.";
 answers[42] = choices[42][1];
 units[42] = "14";
 comments[42] = "Id Pregunta: 10400. POLITICAS DE IGUALDAD";


//  Id pregunta: 10357 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[43]= new Array();
 choices[43][0] = "El Parlamento y el Consejo.";
 choices[43][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[43][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[43][3] = "La Comisi&oacute;n y el Consejo.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10355 Año de creación de pregunta: 2016
 questions[44]= "45)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[44]= new Array();
 choices[44][0] = "Son vinculantes solamente.";
 choices[44][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[44][2] = "Son preceptivos y vinculantes.";
 choices[44][3] = "Son preceptivos y no vinculantes.";
 answers[44] = choices[44][1];
 units[44] = "5";
 comments[44] = "Id Pregunta: 10355. UNION EUROPEA";


//  Id pregunta: 10214 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[45]= new Array();
 choices[45][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[45][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[45][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[45][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 10214. CONSTITUCION1978";


//  Id pregunta: 10604 Año de creación de pregunta: 2016
 questions[46]= "47)  ITIL v3, define:";
 choices[46]= new Array();
 choices[46][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[46][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[46][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[46][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[46] = choices[46][0];
 units[46] = "101";
 comments[46] = "Id Pregunta: 10604. Junta de Extremadura A1 2015";


//  Id pregunta: 10274 Año de creación de pregunta: 2016
 questions[47]= "48)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[47]= new Array();
 choices[47][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[47][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[47][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[47][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[47] = choices[47][3];
 units[47] = "22";
 comments[47] = "Id Pregunta: 10274. LEY DE TRANSPARENCIA";


//  Id pregunta: 10337 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[48]= new Array();
 choices[48][0] = "732";
 choices[48][1] = "626";
 choices[48][2] = "786";
 choices[48][3] = "360";
 answers[48] = choices[48][2];
 units[48] = "5";
 comments[48] = "Id Pregunta: 10337. UNION EUROPEA";


//  Id pregunta: 10151 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[49]= new Array();
 choices[49][0] = "las personas jur&iacute;dicas ";
 choices[49][1] = "las entidades con personalidad jur&iacute;dica";
 choices[49][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[49][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[49] = choices[49][1];
 units[49] = "7";
 comments[49] = "Id Pregunta: 10151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10007 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[50]= new Array();
 choices[50][0] = "Nivel 7 - MPLS.";
 choices[50][1] = "Nivel 3 - RARP.";
 choices[50][2] = "Nivel 2 - HDLC.";
 choices[50][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[50] = choices[50][2];
 units[50] = "105";
 comments[50] = "Id Pregunta: 10007. AGE A1 2015";


//  Id pregunta: 10485 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[51]= new Array();
 choices[51][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[51][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[51][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[51][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[51] = choices[51][3];
 units[51] = "10";
 comments[51] = "Id Pregunta: 10485. PRESUPUESTOS GENERALES";


//  Id pregunta: 10678 Año de creación de pregunta: 2016
 questions[52]= "53)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[52]= new Array();
 choices[52][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[52][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[52][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[52][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[52] = choices[52][1];
 units[52] = "14";
 comments[52] = "Id Pregunta: 10678. Dependencia";


//  Id pregunta: 10344 Año de creación de pregunta: 2016
 questions[53]= "54)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[53]= new Array();
 choices[53][0] = "Pas&oacute; de 518 a 626.";
 choices[53][1] = "Pas&oacute; de 434 a 518.";
 choices[53][2] = "Pas&oacute; de 345 a 512.";
 choices[53][3] = "Pas&oacute; de 435 a 610.";
 answers[53] = choices[53][1];
 units[53] = "5";
 comments[53] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10259 Año de creación de pregunta: 2016
 questions[54]= "55)  La iniciativa legislativa corresponde:";
 choices[54]= new Array();
 choices[54][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[54][1] = "Al rey y al Gobierno.";
 choices[54][2] = "Al Congreso, al Senado y al Rey.";
 choices[54][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[54] = choices[54][3];
 units[54] = "1";
 comments[54] = "Id Pregunta: 10259. CONSTITUCION1978";


//  Id pregunta: 10381 Año de creación de pregunta: 2016
 questions[55]= "56)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[55]= new Array();
 choices[55][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[55][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[55][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[55][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[55] = choices[55][0];
 units[55] = "14";
 comments[55] = "Id Pregunta: 10381. POLITICAS DE IGUALDAD";


//  Id pregunta: 10670 Año de creación de pregunta: 2016
 questions[56]= "57)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[56]= new Array();
 choices[56][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[56][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[56][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[56][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[56] = choices[56][1];
 units[56] = "7";
 comments[56] = "Id Pregunta: 10670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10268 Año de creación de pregunta: 2016
 questions[57]= "58)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[57]= new Array();
 choices[57][0] = "Cuatro.";
 choices[57][1] = "Una.";
 choices[57][2] = "Cinco.";
 choices[57][3] = "Nueve.";
 answers[57] = choices[57][2];
 units[57] = "1";
 comments[57] = "Id Pregunta: 10268. CONSTITUCION1978";


//  Id pregunta: 10106 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[58]= new Array();
 choices[58][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[58][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[58][2] = "A) y B) son verdaderas";
 choices[58][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[58] = choices[58][2];
 units[58] = "73";
 comments[58] = "Id Pregunta: 10106. ";


//  Id pregunta: 10055 Año de creación de pregunta: 2016
 questions[59]= "60)  WS-Security contiene especificaciones sobre:";
 choices[59]= new Array();
 choices[59][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[59][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[59][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[59][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[59] = choices[59][1];
 units[59] = "119";
 comments[59] = "Id Pregunta: 10055. AGE A1 2015";


//  Id pregunta: 10153 Año de creación de pregunta: 2016
 questions[60]= "61)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[60]= new Array();
 choices[60][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[60][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[60][2] = "a y b son correctas";
 choices[60][3] = "a y b son incorrectas";
 answers[60] = choices[60][0];
 units[60] = "7";
 comments[60] = "Id Pregunta: 10153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 10556 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[61]= new Array();
 choices[61][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[61][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[61][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[61][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[61] = choices[61][2];
 units[61] = "17";
 comments[61] = "Id Pregunta: 10556. Mercado &Uacute;nico Digital";


//  Id pregunta: 10157 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[62]= new Array();
 choices[62][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[62][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[62][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[62][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[62] = choices[62][0];
 units[62] = "7";
 comments[62] = "Id Pregunta: 10157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 10342 Año de creación de pregunta: 2016
 questions[63]= "64)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[63]= new Array();
 choices[63][0] = "El Tratado de Maastrich.";
 choices[63][1] = "El Tratado de Amsterdam.";
 choices[63][2] = "El Tratado de Par&iacute;s.";
 choices[63][3] = "El Tratado de Roma.";
 answers[63] = choices[63][3];
 units[63] = "5";
 comments[63] = "Id Pregunta: 10342. UNION EUROPEA";


//  Id pregunta: 10301 Año de creación de pregunta: 2016
 questions[64]= "65)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[64]= new Array();
 choices[64][0] = "Los propios miembros del Tribunal.";
 choices[64][1] = "El Consejo de Europa.";
 choices[64][2] = "El Consejo Europeo.";
 choices[64][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[64] = choices[64][0];
 units[64] = "5";
 comments[64] = "Id Pregunta: 10301. UNION EUROPEA";


//  Id pregunta: 10632 Año de creación de pregunta: 2016
 questions[65]= "66)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[65]= new Array();
 choices[65][0] = "Monol&iacute;tico.";
 choices[65][1] = "Estratificado.";
 choices[65][2] = "Cliente/servidor.";
 choices[65][3] = "Orientado a objetos.";
 answers[65] = choices[65][3];
 units[65] = "56";
 comments[65] = "Id Pregunta: 10632. Junta de Extremadura A1 2015";


//  Id pregunta: 10129 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[66]= new Array();
 choices[66][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[66][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[66][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[66][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[66] = choices[66][2];
 units[66] = "22";
 comments[66] = "Id Pregunta: 10129. ";


//  Id pregunta: 10216 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[67]= new Array();
 choices[67][0] = "El Presidente del Gobierno.";
 choices[67][1] = "El Consejo de Ministros.";
 choices[67][2] = "40 Diputados.";
 choices[67][3] = "El Ministerio Fiscal.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 10216. CONSTITUCION1978";


//  Id pregunta: 10406 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[68]= new Array();
 choices[68][0] = "Art&iacute;culo 9.1 CE.";
 choices[68][1] = "Art&iacute;culo 53 CE.";
 choices[68][2] = "Art&iacute;culo 14 CE.";
 choices[68][3] = "Art&iacute;culo 16 CE.";
 answers[68] = choices[68][2];
 units[68] = "14";
 comments[68] = "Id Pregunta: 10406. POLITICAS DE IGUALDAD";


//  Id pregunta: 10108 Año de creación de pregunta: 2016
 questions[69]= "70)  Son proyectos de Apache relacionados con Big Data:";
 choices[69]= new Array();
 choices[69][0] = "Hadoop";
 choices[69][1] = "Spark";
 choices[69][2] = "A) y B)";
 choices[69][3] = "Niguno de los anteriores";
 answers[69] = choices[69][2];
 units[69] = "73";
 comments[69] = "Id Pregunta: 10108. ";


//  Id pregunta: 10121 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[70]= new Array();
 choices[70][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[70][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[70][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[70][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[70] = choices[70][2];
 units[70] = "22";
 comments[70] = "Id Pregunta: 10121. ";


//  Id pregunta: 10297 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[71]= new Array();
 choices[71][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[71][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[71][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[71][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[71] = choices[71][1];
 units[71] = "5";
 comments[71] = "Id Pregunta: 10297. UNION EUROPEA";


//  Id pregunta: 10653 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[72]= new Array();
 choices[72][0] = "Neo4J ";
 choices[72][1] = "OrientDB ";
 choices[72][2] = "InfoGrid ";
 choices[72][3] = "SimpleDB";
 answers[72] = choices[72][3];
 units[72] = "73";
 comments[72] = "Id Pregunta: 10653. ";


//  Id pregunta: 10655 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[73]= new Array();
 choices[73][0] = "Yarn";
 choices[73][1] = "Flume";
 choices[73][2] = "Hive";
 choices[73][3] = "BizAgi";
 answers[73] = choices[73][3];
 units[73] = "73";
 comments[73] = "Id Pregunta: 10655. ";


//  Id pregunta: 10561 Año de creación de pregunta: 2016
 questions[74]= "75)  El plan nacional de ciudades inteligentes...";
 choices[74]= new Array();
 choices[74][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[74][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[74][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[74][3] = "No existe";
 answers[74] = choices[74][1];
 units[74] = "19";
 comments[74] = "Id Pregunta: 10561. Ciudades Inteligentes";


