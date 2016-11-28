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

//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[0]= "1)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[0]= new Array();
 choices[0][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[0][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[0][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[0][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[0] = choices[0][1];
 units[0] = "63";
 comments[0] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[1]= "2)  Son bases de datos NoSQL:";
 choices[1]= new Array();
 choices[1][0] = "MongoDB y Maria DB";
 choices[1][1] = "HBase y Dynamo";
 choices[1][2] = "MariaDB, Cassandra y BigTable";
 choices[1][3] = "La A) y la C)";
 answers[1] = choices[1][1];
 units[1] = "73";
 comments[1] = "Id Pregunta: 104. ";


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[2]= "3)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[2]= new Array();
 choices[2][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[2][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[2][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[2][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[2] = choices[2][3];
 units[2] = "10";
 comments[2] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[3]= "4)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[3]= new Array();
 choices[3][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[3][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[3][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[3][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[3] = choices[3][1];
 units[3] = "7";
 comments[3] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[4]= "5)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[4]= new Array();
 choices[4][0] = "Son vinculantes solamente.";
 choices[4][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[4][2] = "Son preceptivos y vinculantes.";
 choices[4][3] = "Son preceptivos y no vinculantes.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 355. UNION EUROPEA";


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Org&aacute;nica.";
 choices[5][1] = "Contable.";
 choices[5][2] = "Econ&oacute;mica.";
 choices[5][3] = "Por programas.";
 answers[5] = choices[5][2];
 units[5] = "10";
 comments[5] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[6][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[6][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[6][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[6] = choices[6][0];
 units[6] = "45";
 comments[6] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[7]= "8)  Componen la Comisi&oacute;n Europea:";
 choices[7]= new Array();
 choices[7][0] = "Un Comisario por cada Estado miembro.";
 choices[7][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[7][2] = "Dos Comisarios por cada Estado miembro.";
 choices[7][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[7] = choices[7][0];
 units[7] = "5";
 comments[7] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[8]= new Array();
 choices[8][0] = "De oficio.";
 choices[8][1] = "A solicitud del interesado.";
 choices[8][2] = "De oficio o a solicitud del interesado.";
 choices[8][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[8] = choices[8][2];
 units[8] = "7";
 comments[8] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[9]= "10)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[9]= new Array();
 choices[9][0] = "Ejecuci&oacute;n";
 choices[9][1] = "Adjudicaci&oacute;n";
 choices[9][2] = "Licitaci&oacute;n";
 choices[9][3] = "Formalizaci&oacute;n";
 answers[9] = choices[9][3];
 units[9] = "37";
 comments[9] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[10]= "11)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[10]= new Array();
 choices[10][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[10][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[10][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[10][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[10] = choices[10][2];
 units[10] = "19";
 comments[10] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[11]= "12)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[11]= new Array();
 choices[11][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[11][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[11][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[11][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[11] = choices[11][2];
 units[11] = "14";
 comments[11] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[12]= "13)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[12]= new Array();
 choices[12][0] = "Ejecutivo";
 choices[12][1] = "Limitativo";
 choices[12][2] = "Estimativo";
 choices[12][3] = "Progresivo";
 answers[12] = choices[12][1];
 units[12] = "10";
 comments[12] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[13]= "14)  El lenguaje SPARK es un subconjunto de:";
 choices[13]= new Array();
 choices[13][0] = "Java";
 choices[13][1] = "Fortran";
 choices[13][2] = "Ruby";
 choices[13][3] = "Ada";
 answers[13] = choices[13][3];
 units[13] = "73";
 comments[13] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[14]= "15)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[14]= new Array();
 choices[14][0] = "Estrasburgo.";
 choices[14][1] = "Bruselas.";
 choices[14][2] = "Luxemburgo.";
 choices[14][3] = "Par&iacute;s.";
 answers[14] = choices[14][1];
 units[14] = "5";
 comments[14] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[15]= new Array();
 choices[15][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[15][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[15][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[15][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[15] = choices[15][0];
 units[15] = "19";
 comments[15] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[16]= new Array();
 choices[16][0] = "El Consejo Nacional de la Mujer.";
 choices[16][1] = "El Consejo de la Mujer.";
 choices[16][2] = "El Instituto de la Mujer.";
 choices[16][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[16] = choices[16][3];
 units[16] = "14";
 comments[16] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[17]= "18)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[17]= new Array();
 choices[17][0] = "786 Diputados como m&aacute;ximo.";
 choices[17][1] = "600 Diputados como m&aacute;ximo.";
 choices[17][2] = "650 Diputados como m&aacute;ximo.";
 choices[17][3] = "732 Diputados como m&aacute;ximo.";
 answers[17] = choices[17][0];
 units[17] = "5";
 comments[17] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[18]= "19)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[18]= new Array();
 choices[18][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[18][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[18][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[18][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[18] = choices[18][0];
 units[18] = "1";
 comments[18] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[19]= "20)  El Tribunal de Justicia est&aacute; formado por:";
 choices[19]= new Array();
 choices[19][0] = "Un Juez de cada Estado miembro.";
 choices[19][1] = "Por dos Jueces de cada Estado miembro.";
 choices[19][2] = "Por veinte Jueces.";
 choices[19][3] = "Por ocho Jueces.";
 answers[19] = choices[19][0];
 units[19] = "5";
 comments[19] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[20]= "21)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[20]= new Array();
 choices[20][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[20][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[20][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[20][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[20] = choices[20][3];
 units[20] = "1";
 comments[20] = "Id Pregunta: 253. CONSTITUCION1978";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[21]= new Array();
 choices[21][0] = "Es un framework de software libre.";
 choices[21][1] = "Es una base de datos NoSQL.";
 choices[21][2] = "Est&aacute; basado en MapReduce.";
 choices[21][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[22]= "23)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[22]= new Array();
 choices[22][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[22][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[22][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[22][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[22] = choices[22][3];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 777. Ley 40/2015";


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[23]= "24)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[23]= new Array();
 choices[23][0] = "El presidente de las Cortes Generales.";
 choices[23][1] = "El Presidente del Gobierno.";
 choices[23][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[23][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[23] = choices[23][3];
 units[23] = "10";
 comments[23] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[24]= "25)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[24]= new Array();
 choices[24][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[24][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[24][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[24][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[24] = choices[24][1];
 units[24] = "58";
 comments[24] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[25]= "26)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[25]= new Array();
 choices[25][0] = "Director General";
 choices[25][1] = "Secretario general";
 choices[25][2] = "Subdirector general";
 choices[25][3] = "Subsecretario";
 answers[25] = choices[25][0];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[26]= new Array();
 choices[26][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[26][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[26][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[26][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[26] = choices[26][2];
 units[26] = "7";
 comments[26] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[27]= "28)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[27]= new Array();
 choices[27][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[27][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[27][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[27][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[27] = choices[27][0];
 units[27] = "31";
 comments[27] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[28]= "29)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[28]= new Array();
 choices[28][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[28][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[28][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[28][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[28] = choices[28][2];
 units[28] = "47";
 comments[28] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[29]= "30)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[29]= new Array();
 choices[29][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[29][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[29][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[29][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[29] = choices[29][3];
 units[29] = "101";
 comments[29] = "Id Pregunta: 57. AGE A1 2015";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[30]= "31)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[30]= new Array();
 choices[30][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[30][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[30][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[30][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[30] = choices[30][0];
 units[30] = "7";
 comments[30] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[31]= "32)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[31]= new Array();
 choices[31][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[31][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[31][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[31][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[31] = choices[31][3];
 units[31] = "12";
 comments[31] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[32]= new Array();
 choices[32][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[32][1] = "Todas las respuestas son correctas.";
 choices[32][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[32][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[32] = choices[32][1];
 units[32] = "10";
 comments[32] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[33]= "34)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[33]= new Array();
 choices[33][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[33][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[33][2] = "A y B son correctas.";
 choices[33][3] = "A y B son incorrectas.";
 answers[33] = choices[33][2];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 844. Ley 40/2015";


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[34]= "35)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[34]= new Array();
 choices[34][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[34][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[34][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[34][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[34] = choices[34][2];
 units[34] = "47";
 comments[34] = "Id Pregunta: 674. Historia Cl&iacute;nica Digital";


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[35]= "36)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[35]= new Array();
 choices[35][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[35][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[35][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[35][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[35] = choices[35][2];
 units[35] = "121";
 comments[35] = "Id Pregunta: 29. AGE A1 2015";


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[36]= new Array();
 choices[36][0] = "Art&iacute;culo 16.2.";
 choices[36][1] = "Art&iacute;culo 17.1.";
 choices[36][2] = "Art&iacute;culo 18.1.";
 choices[36][3] = "Art&iacute;culo 18.2.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 249. CONSTITUCION1978";


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[37]= "38)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[37][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[37][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[37][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[37] = choices[37][3];
 units[37] = "22";
 comments[37] = "Id Pregunta: 712. Ley de transparencia";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[38]= "39)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[38]= new Array();
 choices[38][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[38][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[38][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[38][3] = "todas son correctas";
 answers[38] = choices[38][3];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[39]= new Array();
 choices[39][0] = "El Presidente del Senado.";
 choices[39][1] = "El Defensor del Pueblo.";
 choices[39][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[39][3] = "El Presidente del Gobierno.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[40]= "41)  Un wireframe es:";
 choices[40]= new Array();
 choices[40][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[40][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[40][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[40][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[40] = choices[40][3];
 units[40] = "62";
 comments[40] = "Id Pregunta: 4. AGE A1 2015";


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[41]= new Array();
 choices[41][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[41][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[41][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[41][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[41] = choices[41][1];
 units[41] = "22";
 comments[41] = "Id Pregunta: 122. ";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[42]= "43)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[42]= new Array();
 choices[42][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[42][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[42][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[42][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[42] = choices[42][0];
 units[42] = "1";
 comments[42] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[43]= new Array();
 choices[43][0] = "Versi&oacute;n digital prioritaria.";
 choices[43][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[43][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[43][3] = "Apertura y transparencia.";
 answers[43] = choices[43][0];
 units[43] = "5";
 comments[43] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[44]= "45)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[44]= new Array();
 choices[44][0] = "En qu&eacute; nos gastamos el dinero";
 choices[44][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[44][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[44][3] = "Qui&eacute;n se gasta el dinero.";
 answers[44] = choices[44][0];
 units[44] = "10";
 comments[44] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[45]= "46)  Es falso que:";
 choices[45]= new Array();
 choices[45][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[45][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[45][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[45][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[45] = choices[45][1];
 units[45] = "18, 20";
 comments[45] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[46]= new Array();
 choices[46][0] = "IEEE 802.11p";
 choices[46][1] = "IEEE 802.11r";
 choices[46][2] = "IEEE 802.11v";
 choices[46][3] = "IEEE 802.11w";
 answers[46] = choices[46][1];
 units[46] = "112";
 comments[46] = "Id Pregunta: 574. Tema 112. TAI 2016.";


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[47]= "48)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[47]= new Array();
 choices[47][0] = "Acuerdos cualificados.";
 choices[47][1] = "Acuerdos ponderados.";
 choices[47][2] = "Valoraci&oacute;n de los votos.";
 choices[47][3] = "Ponderaci&oacute;n de los votos.";
 answers[47] = choices[47][3];
 units[47] = "5";
 comments[47] = "Id Pregunta: 329. UNION EUROPEA";


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[48]= "49)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[48]= new Array();
 choices[48][0] = "20 parlamentarios.";
 choices[48][1] = "29 parlamentarios.";
 choices[48][2] = "18 parlamentarios.";
 choices[48][3] = "23 parlamentarios.";
 answers[48] = choices[48][0];
 units[48] = "5";
 comments[48] = "Id Pregunta: 366. UNION EUROPEA";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[49]= "50)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[49]= new Array();
 choices[49][0] = "Un recurso de incumplimiento.";
 choices[49][1] = "Recurso de carencia.";
 choices[49][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[49][3] = "Ninguna es correcta.";
 answers[49] = choices[49][2];
 units[49] = "5";
 comments[49] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[50]= "51)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[50]= new Array();
 choices[50][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[50][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[50][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[50][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[50] = choices[50][3];
 units[50] = "22";
 comments[50] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[51]= "52)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[51]= new Array();
 choices[51][0] = "Presencia equilibrada.";
 choices[51][1] = "Presencia paritaria.";
 choices[51][2] = "Presencia consensuada.";
 choices[51][3] = "presencia horizontal.";
 answers[51] = choices[51][0];
 units[51] = "14";
 comments[51] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[52]= new Array();
 choices[52][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[52][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[52][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[52][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[52] = choices[52][0];
 units[52] = "46";
 comments[52] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[53]= "54)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[53]= new Array();
 choices[53][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[53][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[53][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[53][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[53] = choices[53][2];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[54]= "55)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[54]= new Array();
 choices[54][0] = "los Secretarios de Estado";
 choices[54][1] = "los Ministros";
 choices[54][2] = "los Subsecretarios";
 choices[54][3] = "los Secretarios generales";
 answers[54] = choices[54][2];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[55]= new Array();
 choices[55][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[55][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[55][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = choices[55][2];
 units[55] = "18, 20";
 comments[55] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[56]= new Array();
 choices[56][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[56][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[56][2] = "Servicio de seguridad gestionada";
 choices[56][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[56] = choices[56][1];
 units[56] = "26";
 comments[56] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[57]= new Array();
 choices[57][0] = "DoS";
 choices[57][1] = "Phishing";
 choices[57][2] = "Sniffing";
 choices[57][3] = "Spoofing";
 answers[57] = choices[57][3];
 units[57] = "119";
 comments[57] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[58]= "59)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[58]= new Array();
 choices[58][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[58][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[58][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[58][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[58] = choices[58][2];
 units[58] = "10";
 comments[58] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[59]= "60)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[59]= new Array();
 choices[59][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[59][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[59][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[59][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[59] = choices[59][1];
 units[59] = "35";
 comments[59] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[60]= "61)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[60]= new Array();
 choices[60][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[60][1] = "En el extranjero.";
 choices[60][2] = "Ninguna es correcta.";
 choices[60][3] = "Ambas son correctas.";
 answers[60] = choices[60][0];
 units[60] = "14";
 comments[60] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[61]= "62)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[61]= new Array();
 choices[61][0] = "&oacute;rganos superiores";
 choices[61][1] = "&oacute;rganos directivos";
 choices[61][2] = "&oacute;rganos superiores y directivos";
 choices[61][3] = "ninguna es correcta";
 answers[61] = choices[61][1];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[62]= new Array();
 choices[62][0] = "El Presidente del Gobierno.";
 choices[62][1] = "El Consejo de Ministros.";
 choices[62][2] = "40 Diputados.";
 choices[62][3] = "El Ministerio Fiscal.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 216. CONSTITUCION1978";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[63]= "64)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[63]= new Array();
 choices[63][0] = "Establecer tributos.";
 choices[63][1] = "Desarrollar lo establecido en una Ley.";
 choices[63][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[63][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[63] = choices[63][0];
 units[63] = "1";
 comments[63] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[64]= "65)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[64]= new Array();
 choices[64][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[64][1] = "los Subdelegados del Gobierno en las provincias";
 choices[64][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[64][3] = "a y b son correctas";
 answers[64] = choices[64][3];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[65]= "66)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[65]= new Array();
 choices[65][0] = "Seis a&ntilde;os.";
 choices[65][1] = "Cinco a&ntilde;os.";
 choices[65][2] = "Cuatro a&ntilde;os.";
 choices[65][3] = "Ocho a&ntilde;os.";
 answers[65] = choices[65][1];
 units[65] = "5";
 comments[65] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[66]= "67)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[66][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[66][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[66][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[66] = choices[66][1];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[67]= new Array();
 choices[67][0] = "Al menos cada 12 meses";
 choices[67][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[67][2] = "Al menos cada 18 meses";
 choices[67][3] = "Al menos cada 24 meses";
 answers[67] = choices[67][3];
 units[67] = "77";
 comments[67] = "Id Pregunta: 687. Art&iacute;culo 20 del Reglamento 910/2014";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[68]= "69)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[68]= new Array();
 choices[68][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[68][1] = "1 de enero de 2015";
 choices[68][2] = "1 de enero de 2016";
 choices[68][3] = "1 de julio de 2016";
 answers[68] = choices[68][3];
 units[68] = "77";
 comments[68] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[69]= "70)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[69]= new Array();
 choices[69][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[69][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[69][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[69][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[69] = choices[69][3];
 units[69] = "1";
 comments[69] = "Id Pregunta: 236. CONSTITUCION1978";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[70]= "71)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[70]= new Array();
 choices[70][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[70][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[70][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[70][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[70] = choices[70][1];
 units[70] = "7";
 comments[70] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[71]= "72)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[71]= new Array();
 choices[71][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[71][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[71][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[71][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[71] = choices[71][0];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[72]= "73)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[72]= new Array();
 choices[72][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[72][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[72][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[72][3] = "Todas son correctas.";
 answers[72] = choices[72][3];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[73]= new Array();
 choices[73][0] = "23";
 choices[73][1] = "20";
 choices[73][2] = "14";
 choices[73][3] = "18";
 answers[73] = choices[73][1];
 units[73] = "5";
 comments[73] = "Id Pregunta: 343. UNION EUROPEA";


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[74]= new Array();
 choices[74][0] = "La CETIC";
 choices[74][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[74][2] = "La DTIC";
 choices[74][3] = "El MHFP";
 answers[74] = choices[74][0];
 units[74] = "19";
 comments[74] = "Id Pregunta: 593. Estrategia TIC";


