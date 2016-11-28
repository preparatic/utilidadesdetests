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

//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[0]= "1)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[0]= new Array();
 choices[0][0] = "El rey, a propuesta del Gobierno.";
 choices[0][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[0][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[0][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[0] = choices[0][1];
 units[0] = "1";
 comments[0] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[1]= new Array();
 choices[1][0] = "Ley Org&aacute;nica.";
 choices[1][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[1][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[1][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[1] = choices[1][2];
 units[1] = "1";
 comments[1] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[2][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[2][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[2][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[2] = choices[2][0];
 units[2] = "45";
 comments[2] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[3]= "4)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[3]= new Array();
 choices[3][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[3][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[3][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[3][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[3] = choices[3][1];
 units[3] = "64";
 comments[3] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[4]= new Array();
 choices[4][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[4][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[4][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[4][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[4] = choices[4][2];
 units[4] = "22";
 comments[4] = "Id Pregunta: 706. Ley de transparencia";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[5]= "6)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[5]= new Array();
 choices[5][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[5][1] = "La libertad sexual y religiosa.";
 choices[5][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[5][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[5] = choices[5][3];
 units[5] = "1";
 comments[5] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[6]= new Array();
 choices[6][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[6][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[6][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[6][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[6] = choices[6][2];
 units[6] = "22";
 comments[6] = "Id Pregunta: 129. ";


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[7]= new Array();
 choices[7][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[7][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[7][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[7][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[7] = choices[7][0];
 units[7] = "91";
 comments[7] = "Id Pregunta: 6. AGE A1 2015";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[8]= new Array();
 choices[8][0] = "Se dejan listos los entornos de desarrollo";
 choices[8][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[8][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[8][3] = "Todas las anteriores son correctas";
 answers[8] = choices[8][3];
 units[8] = "34, 84";
 comments[8] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[9]= new Array();
 choices[9][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[9][1] = "Solamente el Congreso.";
 choices[9][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[9][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[10]= "11)  Son proyectos de Apache relacionados con Big Data:";
 choices[10]= new Array();
 choices[10][0] = "Hadoop";
 choices[10][1] = "Spark";
 choices[10][2] = "A) y B)";
 choices[10][3] = "Niguno de los anteriores";
 answers[10] = choices[10][2];
 units[10] = "73";
 comments[10] = "Id Pregunta: 108. ";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[11]= "12)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[11]= new Array();
 choices[11][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[11][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[11][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[11][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[11] = choices[11][0];
 units[11] = "10";
 comments[11] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[12]= "13)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[12]= new Array();
 choices[12][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[12][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[12][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[12][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[12] = choices[12][1];
 units[12] = "43";
 comments[12] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[13]= "14)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[13]= new Array();
 choices[13][0] = "En sentencias switch para alterar el control de flujo.";
 choices[13][1] = "Para manejar excepciones.";
 choices[13][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[13][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[13] = choices[13][1];
 units[13] = "64";
 comments[13] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[14]= "15)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[14]= new Array();
 choices[14][0] = "2.400 euros";
 choices[14][1] = "4.000 euros";
 choices[14][2] = "3.200 euros";
 choices[14][3] = "1.600 euros";
 answers[14] = choices[14][1];
 units[14] = "37";
 comments[14] = "Id Pregunta: 89. AGE A1 2015";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[15]= "16)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[15]= new Array();
 choices[15][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[15][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[15][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[15][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[15] = choices[15][2];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[16]= "17)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[16]= new Array();
 choices[16][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[16][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[16][2] = "Son refrendados por el Rey.";
 choices[16][3] = "Son convocados por el Presidente del Gobierno.";
 answers[16] = choices[16][0];
 units[16] = "1";
 comments[16] = "Id Pregunta: 217. CONSTITUCION1978";


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[17]= new Array();
 choices[17][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[17][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[17][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[17][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[17] = choices[17][1];
 units[17] = "92";
 comments[17] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[18]= new Array();
 choices[18][0] = "Anualmente por el Consejo de Ministros";
 choices[18][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[18][2] = "Al final de cada legislatura por el Gobierno";
 choices[18][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[18] = choices[18][0];
 units[18] = "14";
 comments[18] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[19]= "20)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[19]= new Array();
 choices[19][0] = "Rey.";
 choices[19][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[19][2] = "Constituci&oacute;n.";
 choices[19][3] = "Pueblo.";
 answers[19] = choices[19][2];
 units[19] = "1";
 comments[19] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[20]= "21)  El sector p&uacute;blico institucional se integra por:";
 choices[20]= new Array();
 choices[20][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[20][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[20][2] = "las Universidades p&uacute;blicas";
 choices[20][3] = "todas son correctas";
 answers[20] = choices[20][3];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[21]= new Array();
 choices[21][0] = "Lean startup";
 choices[21][1] = "Business Model Canvas";
 choices[21][2] = "Dynamic system Development method";
 choices[21][3] = "Lean software development";
 answers[21] = choices[21][2];
 units[21] = "34";
 comments[21] = "Id Pregunta: 722. Metodologias Lean";


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[22]= "23)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[22]= new Array();
 choices[22][0] = "Primario, que incluye la agricultura y la pesca";
 choices[22][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[22][2] = "Minero, junto con las exportaciones de comercio";
 choices[22][3] = "Servicios";
 answers[22] = choices[22][3];
 units[22] = "12";
 comments[22] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[23]= new Array();
 choices[23][0] = "La Ley General Tributaria.";
 choices[23][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[23][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[23][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[23] = choices[23][2];
 units[23] = "10";
 comments[23] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[24]= "25)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[24]= new Array();
 choices[24][0] = "ASF-AL (Apache License 2.0)";
 choices[24][1] = "EUPL (European Union Public License)";
 choices[24][2] = "LGPL (Lesser General Public License)";
 choices[24][3] = "MIT(MIT License)";
 answers[24] = choices[24][1];
 units[24] = "43";
 comments[24] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[25]= new Array();
 choices[25][0] = "Art&iacute;culo 70.";
 choices[25][1] = "Art&iacute;culo 54.";
 choices[25][2] = "Articulo 62.";
 choices[25][3] = "Articulo 55. 5.";
 answers[25] = choices[25][2];
 units[25] = "1";
 comments[25] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[26]= "27)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[26]= new Array();
 choices[26][0] = "un &oacute;rgano superior";
 choices[26][1] = "un &oacute;rgano directivo";
 choices[26][2] = "un &oacute;rgano superior o directivo";
 choices[26][3] = "ninguna es correcta";
 answers[26] = choices[26][2];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[27]= "28)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[27]= new Array();
 choices[27][0] = "Las sociedades mercantiles estatales.";
 choices[27][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[27][2] = "Las respuestas a) y b) son correctas.";
 choices[27][3] = "Las respuestas a) y b) no son correctas.";
 answers[27] = choices[27][2];
 units[27] = "10";
 comments[27] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[28]= "29)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[28]= new Array();
 choices[28][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[28][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[28][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[28][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[28] = choices[28][1];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 808. Ley 40/2015";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[29]= new Array();
 choices[29][0] = "La CETIC";
 choices[29][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[29][2] = "La DTIC";
 choices[29][3] = "Ninguno de los anteriores";
 answers[29] = choices[29][1];
 units[29] = "19";
 comments[29] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[30]= "31)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[30]= new Array();
 choices[30][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[30][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[30][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[30][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[30] = choices[30][1];
 units[30] = "7";
 comments[30] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[31]= "32)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[31]= new Array();
 choices[31][0] = "Almacenamiento orientado a columnas";
 choices[31][1] = "Framework MapReduce";
 choices[31][2] = "OLTP";
 choices[31][3] = "Bases de datos clave-valor";
 answers[31] = choices[31][2];
 units[31] = "73";
 comments[31] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[32]= new Array();
 choices[32][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[32][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[32][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[32][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[32] = choices[32][3];
 units[32] = "46";
 comments[32] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[33]= "34)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[33]= new Array();
 choices[33][0] = "Cinco a&ntilde;os.";
 choices[33][1] = "Seis a&ntilde;os.";
 choices[33][2] = "Cuatro a&ntilde;os.";
 choices[33][3] = "Tres a&ntilde;os.";
 answers[33] = choices[33][0];
 units[33] = "5";
 comments[33] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[34]= new Array();
 choices[34][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[34][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[34][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[34][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[34] = choices[34][3];
 units[34] = "22";
 comments[34] = "Id Pregunta: 126. ";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[35]= new Array();
 choices[35][0] = "verbalmente";
 choices[35][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[35][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[35][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[35] = choices[35][2];
 units[35] = "7";
 comments[35] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[36]= "37)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[36]= new Array();
 choices[36][0] = "Los Derechos y Deberes fundamentales.";
 choices[36][1] = "La Corona.";
 choices[36][2] = "El Poder Judicial.";
 choices[36][3] = "Las Cortes Generales.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[37]= "38)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[37]= new Array();
 choices[37][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[37][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[37][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[37][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[37] = choices[37][0];
 units[37] = "7";
 comments[37] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[38]= "39)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[38]= new Array();
 choices[38][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[38][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[38][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[38][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[38] = choices[38][2];
 units[38] = "12";
 comments[38] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[39]= new Array();
 choices[39][0] = "Al Consejo Europeo.";
 choices[39][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[39][2] = "A la Comisi&oacute;n Europea.";
 choices[39][3] = "Al Parlamento Europeo.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[40]= "41)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[40]= new Array();
 choices[40][0] = "la capital del pa&iacute;s";
 choices[40][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[40][2] = "cada una de las provincias";
 choices[40][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[40] = choices[40][1];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[41]= "42)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[41]= new Array();
 choices[41][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[41][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[41][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[41][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[41] = choices[41][1];
 units[41] = "106";
 comments[41] = "Id Pregunta: 575. Tema 106. TAI 2016.";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[42]= "43)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[42][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[42][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[42][3] = "cualquiera que sea el estado del procedimiento";
 answers[42] = choices[42][3];
 units[42] = "7";
 comments[42] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[43]= "44)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[43]= new Array();
 choices[43][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[43][1] = "mediante resoluci&oacute;n judicial especial";
 choices[43][2] = "&uacute;nicamente mediante poder notarial";
 choices[43][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[43] = choices[43][3];
 units[43] = "7";
 comments[43] = "Id Pregunta: 532. LEY 39/2015";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[44]= "45)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[44]= new Array();
 choices[44][0] = "Se definen iteraciones";
 choices[44][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[44][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[44][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[44] = choices[44][1];
 units[44] = "34, 84";
 comments[44] = "Id Pregunta: 732. Metodologias &aacute;giles";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[45]= "46)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[45]= new Array();
 choices[45][0] = "El nombre y el tipo de correspondencia.";
 choices[45][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[45][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[45][3] = "El nombre y el grado.";
 answers[45] = choices[45][1];
 units[45] = "85";
 comments[45] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[46]= "47)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[46]= new Array();
 choices[46][0] = "Windows Phone";
 choices[46][1] = "Blackberry";
 choices[46][2] = "iOS";
 choices[46][3] = "Android";
 answers[46] = choices[46][3];
 units[46] = "59";
 comments[46] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[47]= new Array();
 choices[47][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[47][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[47][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[47][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[47] = choices[47][2];
 units[47] = "22";
 comments[47] = "Id Pregunta: 121. ";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[48]= new Array();
 choices[48][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[48][1] = "De nivel alto.";
 choices[48][2] = "De nivel medio y nivel alto.";
 choices[48][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[48] = choices[48][3];
 units[48] = "35";
 comments[48] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[49]= "50)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[49]= new Array();
 choices[49][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[49][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[49][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[49][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[49] = choices[49][1];
 units[49] = "19";
 comments[49] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[50]= "51)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[50]= new Array();
 choices[50][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[50][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[50][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[50][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[50] = choices[50][0];
 units[50] = "34, 84";
 comments[50] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[51]= "52)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[51]= new Array();
 choices[51][0] = "Discriminaci&oacute;n indirecta.";
 choices[51][1] = "Discriminaci&oacute;n directa.";
 choices[51][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[51][3] = "Discriminaci&oacute;n abusiva.";
 answers[51] = choices[51][0];
 units[51] = "14";
 comments[51] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[52]= "53)  JNDI se usa para el acceso a:";
 choices[52]= new Array();
 choices[52][0] = "Datos de ficheros";
 choices[52][1] = "Sistemas gestores de bases de datos";
 choices[52][2] = "Directorios de nombres";
 choices[52][3] = "Colas de mensajer&iacute;a";
 answers[52] = choices[52][2];
 units[52] = "64";
 comments[52] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[53]= new Array();
 choices[53][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[53][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[53][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[53][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[53] = choices[53][0];
 units[53] = "73";
 comments[53] = "Id Pregunta: 656. ";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[54]= new Array();
 choices[54][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[54][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[54][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[54][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[54] = choices[54][1];
 units[54] = "92";
 comments[54] = "Id Pregunta: 716. INTEGRACION CONTINUA";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[55]= "56)  La sede del Parlamento Europeo se encuentra en:";
 choices[55]= new Array();
 choices[55][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[55][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[55][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[55][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[55] = choices[55][1];
 units[55] = "5";
 comments[55] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[56]= "57)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[56]= new Array();
 choices[56][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[56][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[56][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[56][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[56] = choices[56][1];
 units[56] = "7";
 comments[56] = "Id Pregunta: 672. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[57]= new Array();
 choices[57][0] = "Quince miembros.";
 choices[57][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[57][2] = "Los miembros que determine el Consejo.";
 choices[57][3] = "Un Presidente y quince miembros.";
 answers[57] = choices[57][1];
 units[57] = "14";
 comments[57] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[58]= new Array();
 choices[58][0] = "Conferencia de Presidentes.";
 choices[58][1] = "Convenios de colaboraci&oacute;n.";
 choices[58][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[58][3] = "Conferencias Sectoriales.";
 answers[58] = choices[58][0];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 846. Ley 40/2015";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[59]= new Array();
 choices[59][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[59][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[59][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[59][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[59] = choices[59][2];
 units[59] = "15";
 comments[59] = "Id Pregunta: 118. ";


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[60]= "61)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[60]= new Array();
 choices[60][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[60][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[60][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[60][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[60] = choices[60][0];
 units[60] = "5";
 comments[60] = "Id Pregunta: 352. UNION EUROPEA";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[61]= new Array();
 choices[61][0] = "De oficio.";
 choices[61][1] = "A solicitud del interesado.";
 choices[61][2] = "De oficio o a solicitud del interesado.";
 choices[61][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[61] = choices[61][2];
 units[61] = "7";
 comments[61] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[62]= "63)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[62]= new Array();
 choices[62][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[62][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[62][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[62][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[63]= "64)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[63]= new Array();
 choices[63][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[63][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[63][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[63][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[63] = choices[63][0];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[64]= "65)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[64]= new Array();
 choices[64][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[64][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[64][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[64][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[64] = choices[64][3];
 units[64] = "44";
 comments[64] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[65]= "66)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[65]= new Array();
 choices[65][0] = "Dos.";
 choices[65][1] = "Cuatro.";
 choices[65][2] = "Cinco.";
 choices[65][3] = "Tres.";
 answers[65] = choices[65][1];
 units[65] = "10";
 comments[65] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[66]= "67)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[66][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[66][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[66][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[66] = choices[66][3];
 units[66] = "26";
 comments[66] = "Id Pregunta: 552. Gobernanza TIC";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[67]= "68)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[67]= new Array();
 choices[67][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[67][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[67][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[67][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[67] = choices[67][2];
 units[67] = "27";
 comments[67] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[68]= "69)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[68]= new Array();
 choices[68][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[68][1] = "En el extranjero.";
 choices[68][2] = "Ninguna es correcta.";
 choices[68][3] = "Ambas son correctas.";
 answers[68] = choices[68][0];
 units[68] = "14";
 comments[68] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[69]= "70)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[69][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[69][2] = "Ambas son correctas.";
 choices[69][3] = "La A y B son incorrectas.";
 answers[69] = choices[69][2];
 units[69] = "14";
 comments[69] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[70]= new Array();
 choices[70][0] = "a) Los cuatro ejercicios siguientes.";
 choices[70][1] = "b) El ejercicio siguiente.";
 choices[70][2] = "c) Los dos ejercicios siguientes.";
 choices[70][3] = "d) Los tres ejercicios siguientes.";
 answers[70] = choices[70][3];
 units[70] = "10";
 comments[70] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[71]= "72)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[71]= new Array();
 choices[71][0] = "solo mediante ley";
 choices[71][1] = "reglamentariamente";
 choices[71][2] = "mediante ley o reglamentariamente";
 choices[71][3] = "ninguna es correcta";
 answers[71] = choices[71][1];
 units[71] = "7";
 comments[71] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[72]= new Array();
 choices[72][0] = "Art&iacute;culo 14 CE.";
 choices[72][1] = "Art&iacute;culo 9.2 CE.";
 choices[72][2] = "Art&iacute;culo 9.1 CE.";
 choices[72][3] = "Art&iacute;culo 13 CE.";
 answers[72] = choices[72][2];
 units[72] = "14";
 comments[72] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[73]= new Array();
 choices[73][0] = "DoS";
 choices[73][1] = "Phishing";
 choices[73][2] = "Sniffing";
 choices[73][3] = "Spoofing";
 answers[73] = choices[73][3];
 units[73] = "119";
 comments[73] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[74]= new Array();
 choices[74][0] = "Veinte.";
 choices[74][1] = "Quince.";
 choices[74][2] = "Diez.";
 choices[74][3] = "Doce.";
 answers[74] = choices[74][1];
 units[74] = "1";
 comments[74] = "Id Pregunta: 264. CONSTITUCION1978";


