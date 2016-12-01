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

//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[0]= new Array();
 choices[0][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[0][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[0][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[0][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[0] = choices[0][1];
 units[0] = "43";
 comments[0] = "Id Pregunta: 444. SERVICIOS COMUNES";
 preguntaids[0] = 444


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[1]= "2)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[1]= new Array();
 choices[1][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[1][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[1][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[1][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[1] = choices[1][0];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 779. Ley 40/2015";
 preguntaids[1] = 779


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[2]= "3)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[2]= new Array();
 choices[2][0] = "Presencia equilibrada.";
 choices[2][1] = "Presencia paritaria.";
 choices[2][2] = "Presencia consensuada.";
 choices[2][3] = "presencia horizontal.";
 answers[2] = choices[2][0];
 units[2] = "14";
 comments[2] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";
 preguntaids[2] = 425


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[3]= new Array();
 choices[3][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[3][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[3][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[3][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[3] = choices[3][1];
 units[3] = "12";
 comments[3] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";
 preguntaids[3] = 133


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[4]= new Array();
 choices[4][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[4][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[4][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[4][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[4] = choices[4][2];
 units[4] = "10";
 comments[4] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";
 preguntaids[4] = 479


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[5]= new Array();
 choices[5][0] = "Backup full.";
 choices[5][1] = "Backup diferencial.";
 choices[5][2] = "Backup incremental.";
 choices[5][3] = "Backup deduplicado.";
 answers[5] = choices[5][3];
 units[5] = "53";
 comments[5] = "Id Pregunta: 852. Xunta de Galicia 2015";
 preguntaids[5] = 852


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[6]= new Array();
 choices[6][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[6][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[6][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[6][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[6] = choices[6][2];
 units[6] = "7";
 comments[6] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[6] = 150


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[7]= new Array();
 choices[7][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[7][1] = "Entrada en la Uni&oacute;n Europea";
 choices[7][2] = "Pactos de la Moncloa";
 choices[7][3] = "Ingreso en la ONU";
 answers[7] = choices[7][3];
 units[7] = "12";
 comments[7] = "Id Pregunta: 573. Modelo econ&oacute;mico";
 preguntaids[7] = 573


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[8]= "9)  La recusaci&oacute;n se plantea...";
 choices[8]= new Array();
 choices[8][0] = "Antes de iniciado el procedimiento";
 choices[8][1] = "Una vez iniciado el procedimiento";
 choices[8][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[8][3] = "En cualquier momento del procedimiento";
 answers[8] = choices[8][0];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 829. Ley 40/2015";
 preguntaids[8] = 829


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[9]= new Array();
 choices[9][0] = "Estimaci&oacute;n del riesgo";
 choices[9][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[9][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[9][3] = "Mapa de riesgos";
 answers[9] = choices[9][3];
 units[9] = "45";
 comments[9] = "Id Pregunta: 85. AGE A1 2015";
 preguntaids[9] = 85


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[10]= new Array();
 choices[10][0] = "Art&iacute;culo 16.2.";
 choices[10][1] = "Art&iacute;culo 17.1.";
 choices[10][2] = "Art&iacute;culo 18.1.";
 choices[10][3] = "Art&iacute;culo 18.2.";
 answers[10] = choices[10][2];
 units[10] = "1";
 comments[10] = "Id Pregunta: 224. CONSTITUCION1978";
 preguntaids[10] = 224


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[11]= "12)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[11]= new Array();
 choices[11][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[11][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[11][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[11][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[11] = choices[11][2];
 units[11] = "43";
 comments[11] = "Id Pregunta: 440. SERVICIOS COMUNES";
 preguntaids[11] = 440


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[12]= "13)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[12]= new Array();
 choices[12][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[12][1] = "Protecci&oacute;n de su salud.";
 choices[12][2] = "Ninguna es correcta.";
 choices[12][3] = "A y B son correctas.";
 answers[12] = choices[12][1];
 units[12] = "14";
 comments[12] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";
 preguntaids[12] = 430


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[13]= "14)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[13]= new Array();
 choices[13][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[13][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[13][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[13][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[13] = choices[13][2];
 units[13] = "12";
 comments[13] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";
 preguntaids[13] = 134


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[14]= "15)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[14]= new Array();
 choices[14][0] = "El Gobierno.";
 choices[14][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[14][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[14][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[14] = choices[14][2];
 units[14] = "1";
 comments[14] = "Id Pregunta: 206. CONSTITUCION1978";
 preguntaids[14] = 206


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "VMware ESX";
 choices[15][1] = "XenServer";
 choices[15][2] = "Alfresco";
 choices[15][3] = "Microsoft Hyper-V";
 answers[15] = choices[15][2];
 units[15] = "54";
 comments[15] = "Id Pregunta: 96. AGE A1 2015";
 preguntaids[15] = 96


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[16]= new Array();
 choices[16][0] = "Principio de solo una vez";
 choices[16][1] = "Apertura y transparencia";
 choices[16][2] = "Confianza y seguridad";
 choices[16][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[16] = choices[16][3];
 units[16] = "19";
 comments[16] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";
 preguntaids[16] = 161


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[17]= "18)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[17]= new Array();
 choices[17][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[17][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[17][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[17][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[17] = choices[17][3];
 units[17] = "44";
 comments[17] = "Id Pregunta: 17. AGE A1 2015";
 preguntaids[17] = 17


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[18]= "19)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[18]= new Array();
 choices[18][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[18][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[18][2] = "La protecci&oacute;n del medio ambiente.";
 choices[18][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[18] = choices[18][0];
 units[18] = "22";
 comments[18] = "Id Pregunta: 125. ";
 preguntaids[18] = 125


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[19]= "20)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[19]= new Array();
 choices[19][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[19][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[19][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[19][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[19] = choices[19][0];
 units[19] = "43";
 comments[19] = "Id Pregunta: 434. SERVICIOS COMUNES";
 preguntaids[19] = 434


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[20]= new Array();
 choices[20][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[20][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[20][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[20][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 178. CONSTITUCION1978";
 preguntaids[20] = 178


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[21]= new Array();
 choices[21][0] = "Art&iacute;culo 16.2.";
 choices[21][1] = "Art&iacute;culo 17.1.";
 choices[21][2] = "Art&iacute;culo 18.1.";
 choices[21][3] = "Art&iacute;culo 18.2.";
 answers[21] = choices[21][0];
 units[21] = "1";
 comments[21] = "Id Pregunta: 249. CONSTITUCION1978";
 preguntaids[21] = 249


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[22]= "23)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[22]= new Array();
 choices[22][0] = "El Tratado de Roma, 1957.";
 choices[22][1] = "El Acta &Uacute;nica Europea.";
 choices[22][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[22][3] = "Ninguna es correcta.";
 answers[22] = choices[22][2];
 units[22] = "14";
 comments[22] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";
 preguntaids[22] = 404


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[23]= "24)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[23]= new Array();
 choices[23][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[23][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[23][2] = "Ministerio de la Presidencia";
 choices[23][3] = "Ministerio de Fomento";
 answers[23] = choices[23][2];
 units[23] = "22";
 comments[23] = "Id Pregunta: 708. Portal de Transparencia";
 preguntaids[23] = 708


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[24]= "25)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[24]= new Array();
 choices[24][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[24][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[24][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[24][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 184. CONSTITUCION1978";
 preguntaids[24] = 184


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[25]= "26)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[25]= new Array();
 choices[25][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[25][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[25][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[25][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[25] = choices[25][0];
 units[25] = "65";
 comments[25] = "Id Pregunta: 625. Junta de Extremadura A1 2015";
 preguntaids[25] = 625


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[26]= "27)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[26]= new Array();
 choices[26][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[26][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[26][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[26][3] = "Todas las respuestas son correctas.";
 answers[26] = choices[26][3];
 units[26] = "50";
 comments[26] = "Id Pregunta: 622. Junta de Extremadura A1 2015";
 preguntaids[26] = 622


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[27]= "28)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[27]= new Array();
 choices[27][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[27][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[27][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[27][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[27] = choices[27][1];
 units[27] = "63";
 comments[27] = "Id Pregunta: 613. Junta de Extremadura A1 2015";
 preguntaids[27] = 613


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[28]= new Array();
 choices[28][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[28][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[28][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[28][3] = "La tasa de desempleo ronda el 20%";
 answers[28] = choices[28][2];
 units[28] = "12";
 comments[28] = "Id Pregunta: 572. Modelo econ&oacute;mico";
 preguntaids[28] = 572


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[29]= new Array();
 choices[29][0] = "A la CETIC";
 choices[29][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[29][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[29][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[29] = choices[29][3];
 units[29] = "19";
 comments[29] = "Id Pregunta: 582. Estrategia TIC";
 preguntaids[29] = 582


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[30]= "31)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[30]= new Array();
 choices[30][0] = "Al Gobierno.";
 choices[30][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[30][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[30][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[30] = choices[30][2];
 units[30] = "10";
 comments[30] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";
 preguntaids[30] = 478


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[31]= "32)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[31]= new Array();
 choices[31][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[31][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[31][2] = "a y b son correctas";
 choices[31][3] = "a y b son incorrectas";
 answers[31] = choices[31][2];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 798. Ley 40/2015";
 preguntaids[31] = 798


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[32]= "33)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[32]= new Array();
 choices[32][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[32][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[32][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[32][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[32] = choices[32][1];
 units[32] = "22";
 comments[32] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";
 preguntaids[32] = 278


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[33]= new Array();
 choices[33][0] = "Data Mining (miner&iacute;a de datos)";
 choices[33][1] = "Business Intelligence (inteligencia de negocio)";
 choices[33][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[33][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[33] = choices[33][1];
 units[33] = "72";
 comments[33] = "Id Pregunta: 68. AGE A1 2015";
 preguntaids[33] = 68


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[34]= "35)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[34]= new Array();
 choices[34][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[34][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[34][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[34][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[34] = choices[34][1];
 units[34] = "5";
 comments[34] = "Id Pregunta: 316. UNION EUROPEA";
 preguntaids[34] = 316


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[35]= "36)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[35]= new Array();
 choices[35][0] = "Estrasburgo.";
 choices[35][1] = "Bruselas.";
 choices[35][2] = "Luxemburgo.";
 choices[35][3] = "Holanda.";
 answers[35] = choices[35][0];
 units[35] = "5";
 comments[35] = "Id Pregunta: 293. UNION EUROPEA";
 preguntaids[35] = 293


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[36]= "37)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[36]= new Array();
 choices[36][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[36][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[36][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[36][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[36] = choices[36][3];
 units[36] = "7";
 comments[36] = "Id Pregunta: 526. LEY 39/2015";
 preguntaids[36] = 526


//  Id pregunta: 857 Año de creación de pregunta: 2016
 questions[37]= "38)  Sobre el multiling&uuml;ismo en los sitios web p&uacute;blicos, se&ntilde;ale la respuesta falsa:";
 choices[37]= new Array();
 choices[37][0] = "Los responsables de contenidos y responsables t&eacute;cnicos de portales de cualquier organismo de la Administraci&oacute;n General del Estado deben tener en cuenta que Espa&ntilde;a es un pa&iacute;s multiling&uuml;e y que deben velar para que el idioma no constituya una barrera al acceso a los contenidos de las webs p&uacute;blicas.";
 choices[37][1] = "Cada Comunidad Aut&oacute;noma debe encargarse de la traducci&oacute;n de los contenidos de sus p&aacute;ginas web para facilitar y acercar los servicios prestados por la Administraci&oacute;n a los ciudadanos y empresas.";
 choices[37][2] = "Como criterio general, todos los contenidos de los portales ser&aacute;n accesibles, adem&aacute;s de en castellano, lengua espa&ntilde;ola oficial del Estado, en las siguientes lenguas idiomas cooficiales de las respectivas Comunidades Aut&oacute;nomas de Espa&ntilde;a: catal&aacute;n, euskera, gallego y valenciano.";
 choices[37][3] = "Para facilitar la traducci&oacute;n a las lenguas cooficiales y al ingl&eacute;s, se est&aacute; preparando una Plataforma de traducci&oacute;n autom&aacute;tica com&uacute;n de la AGE: PLATA que estar&aacute; disponible con gran calidad al catal&aacute;n, gallego y con necesidad de revisi&oacute;n asistida en el caso del euskera y el ingl&eacute;s.";
 answers[37] = choices[37][1];
 units[37] = "125";
 comments[37] = "Id Pregunta: 857. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[37] = 857


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[38]= "39)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[38]= new Array();
 choices[38][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[38][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[38][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[38][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[38] = choices[38][3];
 units[38] = "1";
 comments[38] = "Id Pregunta: 227. CONSTITUCION1978";
 preguntaids[38] = 227


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[39]= new Array();
 choices[39][0] = "El 1 de noviembre de 1994.";
 choices[39][1] = "El 1 de noviembre de 1992.";
 choices[39][2] = "El 1 de noviembre de 1995.";
 choices[39][3] = "El 1 de noviembre de 1993.";
 answers[39] = choices[39][3];
 units[39] = "5";
 comments[39] = "Id Pregunta: 348. UNION EUROPEA";
 preguntaids[39] = 348


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[40]= new Array();
 choices[40][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[40][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[40][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[40][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[40] = choices[40][0];
 units[40] = "1";
 comments[40] = "Id Pregunta: 199. CONSTITUCION1978";
 preguntaids[40] = 199


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[41]= new Array();
 choices[41][0] = "Maximizar el valor para los clientes";
 choices[41][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[41][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[41][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[41] = choices[41][3];
 units[41] = "34";
 comments[41] = "Id Pregunta: 718. Metodologias Lean";
 preguntaids[41] = 718


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[42]= new Array();
 choices[42][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[42][1] = "Pasivos financieros y transferencias de capital.";
 choices[42][2] = "Activos financieros y pasivos financieros.";
 choices[42][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[42] = choices[42][2];
 units[42] = "10";
 comments[42] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";
 preguntaids[42] = 461


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[43]= "44)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[43]= new Array();
 choices[43][0] = "150 trabajadores/as.";
 choices[43][1] = "200 trabajadores/as.";
 choices[43][2] = "250 trabajadores/as.";
 choices[43][3] = "300 trabajadores/as.";
 answers[43] = choices[43][2];
 units[43] = "14";
 comments[43] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";
 preguntaids[43] = 420


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[44]= "45)  El pacto fiscal europeo de 2012 incluye:";
 choices[44]= new Array();
 choices[44][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[44][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[44][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[44][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[44] = choices[44][0];
 units[44] = "5";
 comments[44] = "Id Pregunta: 280. UNION EUROPEA";
 preguntaids[44] = 280


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[45]= "46)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[45]= new Array();
 choices[45][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[45][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[45][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[45][3] = "Todos las anteriores son ciertas.";
 answers[45] = choices[45][3];
 units[45] = "12";
 comments[45] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";
 preguntaids[45] = 137


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[46]= "47)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[46]= new Array();
 choices[46][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[46][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[46][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[46][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[46] = choices[46][3];
 units[46] = "22";
 comments[46] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";
 preguntaids[46] = 274


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[47]= "48)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[47]= new Array();
 choices[47][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[47][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[47][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[47][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[47] = choices[47][3];
 units[47] = "1";
 comments[47] = "Id Pregunta: 198. CONSTITUCION1978";
 preguntaids[47] = 198


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[48]= "49)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[48][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[48][2] = "Ambas son correctas.";
 choices[48][3] = "La A y B son incorrectas.";
 answers[48] = choices[48][2];
 units[48] = "14";
 comments[48] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";
 preguntaids[48] = 417


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[49]= "50)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[49]= new Array();
 choices[49][0] = "2025";
 choices[49][1] = "2023";
 choices[49][2] = "2030";
 choices[49][3] = "2020";
 answers[49] = choices[49][3];
 units[49] = "28";
 comments[49] = "Id Pregunta: 739. Estrategia TIC";
 preguntaids[49] = 739


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[50]= new Array();
 choices[50][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[50][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[50][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[50][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[50] = choices[50][3];
 units[50] = "12";
 comments[50] = "Id Pregunta: 567. Modelo econ&oacute;mico";
 preguntaids[50] = 567


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[51]= "52)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[51]= new Array();
 choices[51][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[51][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[51][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[51][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[51] = choices[51][1];
 units[51] = "7";
 comments[51] = "Id Pregunta: 541. LEY 39/2015";
 preguntaids[51] = 541


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[52]= "53)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[52]= new Array();
 choices[52][0] = "Un plan de igualdad.";
 choices[52][1] = "Un informe de impacto de g&eacute;nero.";
 choices[52][2] = "Un programa de igualdad.";
 choices[52][3] = "Todas son correctas.";
 answers[52] = choices[52][1];
 units[52] = "14";
 comments[52] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";
 preguntaids[52] = 426


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[53]= new Array();
 choices[53][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[53][1] = "Solamente el Congreso.";
 choices[53][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[53][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[53] = choices[53][0];
 units[53] = "1";
 comments[53] = "Id Pregunta: 176. CONSTITUCION1978";
 preguntaids[53] = 176


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[54]= "55)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[54]= new Array();
 choices[54][0] = "Proveer de manera compartida servicios comunes";
 choices[54][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[54][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[54][3] = "Transparencia";
 answers[54] = choices[54][1];
 units[54] = "28";
 comments[54] = "Id Pregunta: 742. Estrategia TIC";
 preguntaids[54] = 742


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[55]= "56)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[55]= new Array();
 choices[55][0] = "El presidente de las Cortes Generales.";
 choices[55][1] = "El Presidente del Gobierno.";
 choices[55][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[55][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[55] = choices[55][3];
 units[55] = "10";
 comments[55] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";
 preguntaids[55] = 502


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[56]= "57)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[56]= new Array();
 choices[56][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[56][1] = "La CETIC";
 choices[56][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[56][3] = "El MHFP";
 answers[56] = choices[56][0];
 units[56] = "19";
 comments[56] = "Id Pregunta: 595. Estrategia TIC";
 preguntaids[56] = 595


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[57]= new Array();
 choices[57][0] = "As&iacute;ncrona.";
 choices[57][1] = "Log-shipping.";
 choices[57][2] = "Disk buffering.";
 choices[57][3] = "S&iacute;ncrona.";
 answers[57] = choices[57][3];
 units[57] = "53";
 comments[57] = "Id Pregunta: 851. Xunta de Galicia 2015";
 preguntaids[57] = 851


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[58]= new Array();
 choices[58][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[58][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[58][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[58][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[58] = choices[58][3];
 units[58] = "106";
 comments[58] = "Id Pregunta: 74. AGE A1 2015";
 preguntaids[58] = 74


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[59]= new Array();
 choices[59][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[59][1] = "Auditor&iacute;a operativa.";
 choices[59][2] = "Auditor&iacute;a de cumplimiento.";
 choices[59][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[59] = choices[59][2];
 units[59] = "10";
 comments[59] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";
 preguntaids[59] = 474


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[60]= "61)  El plan nacional de ciudades inteligentes...";
 choices[60]= new Array();
 choices[60][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[60][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[60][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[60][3] = "No existe";
 answers[60] = choices[60][1];
 units[60] = "19";
 comments[60] = "Id Pregunta: 563. Ciudades Inteligentes";
 preguntaids[60] = 563


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[61]= "62)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[61]= new Array();
 choices[61][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[61][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[61][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[61][3] = "Todas son correctas.";
 answers[61] = choices[61][1];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 842. Ley 40/2015";
 preguntaids[61] = 842


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[62]= new Array();
 choices[62][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[62][1] = "Autorizar indultos generales.";
 choices[62][2] = "Sancionar las leyes.";
 choices[62][3] = "Promulgar las leyes.";
 answers[62] = choices[62][1];
 units[62] = "1";
 comments[62] = "Id Pregunta: 185. CONSTITUCION1978";
 preguntaids[62] = 185


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[63]= "64)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[63]= new Array();
 choices[63][0] = "El derecho a la propiedad privada.";
 choices[63][1] = "El derecho de asociaci&oacute;n.";
 choices[63][2] = "El derecho de fundaci&oacute;n.";
 choices[63][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[63] = choices[63][1];
 units[63] = "1";
 comments[63] = "Id Pregunta: 174. CONSTITUCION1978";
 preguntaids[63] = 174


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[64]= "65)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[64]= new Array();
 choices[64][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[64][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[64][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[64][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[64] = choices[64][3];
 units[64] = "10";
 comments[64] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";
 preguntaids[64] = 505


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[65]= "66)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[65]= new Array();
 choices[65][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[65][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[65][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[65][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[65] = choices[65][1];
 units[65] = "35";
 comments[65] = "Id Pregunta: 78. AGE A1 2015";
 preguntaids[65] = 78


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[66]= "67)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[66]= new Array();
 choices[66][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[66][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[66][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[66][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[66] = choices[66][2];
 units[66] = "22";
 comments[66] = "Id Pregunta: 128. ";
 preguntaids[66] = 128


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[67]= new Array();
 choices[67][0] = "Fue elaborada y aprobada por la CETIC";
 choices[67][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[67][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[67][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[67] = choices[67][1];
 units[67] = "19";
 comments[67] = "Id Pregunta: 580. Estrategia TIC";
 preguntaids[67] = 580


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[68]= "69)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[68]= new Array();
 choices[68][0] = "apud acta";
 choices[68][1] = "presencialmente";
 choices[68][2] = "electr&oacute;nicamente";
 choices[68][3] = "todas son correctas";
 answers[68] = choices[68][3];
 units[68] = "7";
 comments[68] = "Id Pregunta: 538. LEY 39/2015";
 preguntaids[68] = 538


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[69]= "70)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[69]= new Array();
 choices[69][0] = "La Comisi&oacute;n Europea.";
 choices[69][1] = "El Consejo Europeo.";
 choices[69][2] = "El Consejo de Europa.";
 choices[69][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[69] = choices[69][0];
 units[69] = "5";
 comments[69] = "Id Pregunta: 310. UNION EUROPEA";
 preguntaids[69] = 310


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[70]= "71)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[70]= new Array();
 choices[70][0] = "la Administraci&oacute;n General del Estado";
 choices[70][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[70][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[70][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[70] = choices[70][3];
 units[70] = "7";
 comments[70] = "Id Pregunta: 519. LEY 39/2015";
 preguntaids[70] = 519


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[71]= new Array();
 choices[71][0] = "Lean startup";
 choices[71][1] = "Business Model Canvas";
 choices[71][2] = "Dynamic system Development method";
 choices[71][3] = "Lean software development";
 answers[71] = choices[71][2];
 units[71] = "34";
 comments[71] = "Id Pregunta: 722. Metodologias Lean";
 preguntaids[71] = 722


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[72]= new Array();
 choices[72][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[72][1] = "Directiva 2004/113/CE del Consejo.";
 choices[72][2] = "Todas son correctas.";
 choices[72][3] = "Todas son falsas.";
 answers[72] = choices[72][2];
 units[72] = "14";
 comments[72] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";
 preguntaids[72] = 405


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[73]= "74)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[73][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[73][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[73][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[73] = choices[73][2];
 units[73] = "48";
 comments[73] = "Id Pregunta: 87. AGE A1 2015";
 preguntaids[73] = 87


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[74]= "75)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[74]= new Array();
 choices[74][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[74][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[74][2] = "Un programa de igualdad.";
 choices[74][3] = "Un estatuto de igualdad.";
 answers[74] = choices[74][0];
 units[74] = "14";
 comments[74] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";
 preguntaids[74] = 410


