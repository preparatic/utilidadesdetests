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

//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[0]= "1)  Las Universidades p&uacute;blicas:";
 choices[0]= new Array();
 choices[0][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[0][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[0][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[0][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[0] = choices[0][1];
 units[0] = "7";
 comments[0] = "Id Pregunta: 518. LEY 39/2015";


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[1]= "2)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[1]= new Array();
 choices[1][0] = "Proveer de manera compartida servicios comunes";
 choices[1][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[1][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[1][3] = "Transparencia";
 answers[1] = choices[1][1];
 units[1] = "28";
 comments[1] = "Id Pregunta: 742. Estrategia TIC";


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[2]= "3)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[2]= new Array();
 choices[2][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[2][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[2][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[2][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[2] = choices[2][3];
 units[2] = "7";
 comments[2] = "Id Pregunta: 526. LEY 39/2015";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[3]= "4)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[3]= new Array();
 choices[3][0] = "Almacenamiento orientado a columnas";
 choices[3][1] = "Framework MapReduce";
 choices[3][2] = "OLTP";
 choices[3][3] = "Bases de datos clave-valor";
 answers[3] = choices[3][2];
 units[3] = "73";
 comments[3] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[4]= new Array();
 choices[4][0] = "Al menos cada 12 meses";
 choices[4][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[4][2] = "Al menos cada 18 meses";
 choices[4][3] = "Al menos cada 24 meses";
 answers[4] = choices[4][3];
 units[4] = "77";
 comments[4] = "Id Pregunta: 687. Art&iacute;culo 20 del Reglamento 910/2014";


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[5]= "6)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[5]= new Array();
 choices[5][0] = "Estrat&eacute;gico";
 choices[5][1] = "Operativo";
 choices[5][2] = "T&aacute;ctico";
 choices[5][3] = "Tecnol&oacute;gico";
 answers[5] = choices[5][0];
 units[5] = "36";
 comments[5] = "Id Pregunta: 76. AGE A1 2015";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[6]= "7)  La soberan&iacute;a nacional reside en:";
 choices[6]= new Array();
 choices[6][0] = "el Parlamento nacional.";
 choices[6][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[6][2] = "el pueblo espa&ntilde;ol.";
 choices[6][3] = "el Congreso y el Senado.";
 answers[6] = choices[6][3];
 units[6] = "1";
 comments[6] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[7]= "8)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[7]= new Array();
 choices[7][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[7][1] = "Anteriormente se denominaba Sonar.";
 choices[7][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[7][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[7] = choices[7][2];
 units[7] = "92";
 comments[7] = "Id Pregunta: 717. INTEGRACION CONTINUA";


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[8]= "9)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[8]= new Array();
 choices[8][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[8][1] = "mediante resoluci&oacute;n judicial especial";
 choices[8][2] = "&uacute;nicamente mediante poder notarial";
 choices[8][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[8] = choices[8][3];
 units[8] = "7";
 comments[8] = "Id Pregunta: 532. LEY 39/2015";


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[9]= new Array();
 choices[9][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[9][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[9][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[9][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[9] = choices[9][2];
 units[9] = "7";
 comments[9] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[10]= new Array();
 choices[10][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[10][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[10][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[10][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[10] = choices[10][3];
 units[10] = "26";
 comments[10] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[11]= "12)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[11]= new Array();
 choices[11][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[11][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[11][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[11][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[11] = choices[11][1];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[12]= new Array();
 choices[12][0] = "El Presidente del Senado.";
 choices[12][1] = "El Defensor del Pueblo.";
 choices[12][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[12][3] = "El Presidente del Gobierno.";
 answers[12] = choices[12][2];
 units[12] = "1";
 comments[12] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[13]= "14)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[13]= new Array();
 choices[13][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[13][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[13][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[13][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[13] = choices[13][3];
 units[13] = "1";
 comments[13] = "Id Pregunta: 236. CONSTITUCION1978";


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[14]= "15)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[14]= new Array();
 choices[14][0] = "La Comisi&oacute;n Europea.";
 choices[14][1] = "El Consejo Europeo.";
 choices[14][2] = "El Consejo de Europa.";
 choices[14][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[14] = choices[14][0];
 units[14] = "5";
 comments[14] = "Id Pregunta: 310. UNION EUROPEA";


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[15]= "16)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[15]= new Array();
 choices[15][0] = "El Delegado del Gobierno.";
 choices[15][1] = "El Subdelegado del Gobierno.";
 choices[15][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[15][3] = "El Gobernador Civil.";
 answers[15] = choices[15][2];
 units[15] = "1";
 comments[15] = "Id Pregunta: 207. CONSTITUCION1978";


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[16]= new Array();
 choices[16][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[16][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[16][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = choices[16][2];
 units[16] = "18, 20";
 comments[16] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[17]= "18)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[17]= new Array();
 choices[17][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[17][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[17][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[17][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[17] = choices[17][1];
 units[17] = "22";
 comments[17] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[18]= "19)  El Tribunal de Justicia se cre&oacute; en:";
 choices[18]= new Array();
 choices[18][0] = "El Tratado de la CECA.";
 choices[18][1] = "El Tratado de Niza.";
 choices[18][2] = "El Tratado de &Aacute;msterdam.";
 choices[18][3] = "El Tratado de Lisboa.";
 answers[18] = choices[18][0];
 units[18] = "5";
 comments[18] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[19]= "20)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[19]= new Array();
 choices[19][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[19][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[19][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[19][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[19] = choices[19][1];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[20]= "21)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[20]= new Array();
 choices[20][0] = "Resoluci&oacute;n.";
 choices[20][1] = "Desistimiento o renuncia.";
 choices[20][2] = "Caducidad.";
 choices[20][3] = "Todas las anteriores.";
 answers[20] = choices[20][3];
 units[20] = "7";
 comments[20] = "Id Pregunta: 671. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[21]= "22)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[21]= new Array();
 choices[21][0] = "Integrar la estrategia TIC con la de negocio";
 choices[21][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[21][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[21][3] = "Todas las anteriores";
 answers[21] = choices[21][3];
 units[21] = "26";
 comments[21] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[22]= new Array();
 choices[22][0] = "Las Cortes Generales.";
 choices[22][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[22][2] = "El Gobierno.";
 choices[22][3] = "El Congreso de los Diputados.";
 answers[22] = choices[22][0];
 units[22] = "10";
 comments[22] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[23]= new Array();
 choices[23][0] = "Anualmente por el Consejo de Ministros";
 choices[23][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[23][2] = "Al final de cada legislatura por el Gobierno";
 choices[23][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[23] = choices[23][0];
 units[23] = "14";
 comments[23] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[24]= "25)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[24]= new Array();
 choices[24][0] = "3 a&ntilde;os.";
 choices[24][1] = "5 a&ntilde;os.";
 choices[24][2] = "4 a&ntilde;os.";
 choices[24][3] = "6 a&ntilde;os.";
 answers[24] = choices[24][1];
 units[24] = "1";
 comments[24] = "Id Pregunta: 193. CONSTITUCION1978";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[25]= "26)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[25]= new Array();
 choices[25][0] = "Peters";
 choices[25][1] = "Hollingsworth";
 choices[25][2] = "Manuel Castells";
 choices[25][3] = "Gaebler";
 answers[25] = choices[25][1];
 units[25] = "18, 20";
 comments[25] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[26]= "27)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[26]= new Array();
 choices[26][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[26][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[26][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[26][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[26] = choices[26][2];
 units[26] = "28";
 comments[26] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[27]= "28)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[27]= new Array();
 choices[27][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[27][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[27][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[27][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[27] = choices[27][0];
 units[27] = "60";
 comments[27] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[28]= "29)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[28]= new Array();
 choices[28][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[28][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[28][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[28][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[28] = choices[28][2];
 units[28] = "27";
 comments[28] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[29]= new Array();
 choices[29][0] = "Categor&iacute;a b&aacute;sica";
 choices[29][1] = "Categor&iacute;a media";
 choices[29][2] = "Categor&iacute;a alta";
 choices[29][3] = "Categor&iacute;a media y alta";
 answers[29] = choices[29][2];
 units[29] = "46";
 comments[29] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[30]= new Array();
 choices[30][0] = "a) Los cuatro ejercicios siguientes.";
 choices[30][1] = "b) El ejercicio siguiente.";
 choices[30][2] = "c) Los dos ejercicios siguientes.";
 choices[30][3] = "d) Los tres ejercicios siguientes.";
 answers[30] = choices[30][3];
 units[30] = "10";
 comments[30] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[31]= "32)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[31]= new Array();
 choices[31][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[31][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[31][2] = "Absoluta frente a cualquier otro gasto.";
 choices[31][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[31] = choices[31][2];
 units[31] = "10";
 comments[31] = "Id Pregunta: 511. PRESUPUESTOS GENERALES";


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[32]= new Array();
 choices[32][0] = "Jenkins";
 choices[32][1] = "Hudson";
 choices[32][2] = "SonarQube";
 choices[32][3] = "Todas lo son";
 answers[32] = choices[32][3];
 units[32] = "92";
 comments[32] = "Id Pregunta: 695. INTEGRACION CONTINUA";


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[33]= new Array();
 choices[33][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[33][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[33][2] = "c) Todas las respuestas son correctas.";
 choices[33][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[33] = choices[33][1];
 units[33] = "5";
 comments[33] = "Id Pregunta: 358. UNION EUROPEA";


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[34]= "35)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[34]= new Array();
 choices[34][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[34][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[34][2] = "Ninguna es correcta.";
 choices[34][3] = "A y B son correctas.";
 answers[34] = choices[34][1];
 units[34] = "14";
 comments[34] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[35]= "36)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[35]= new Array();
 choices[35][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[35][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[35][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[35][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[35] = choices[35][1];
 units[35] = "1";
 comments[35] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[36]= new Array();
 choices[36][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[36][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[36][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[36][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[36] = choices[36][2];
 units[36] = "22";
 comments[36] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[37]= new Array();
 choices[37][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[37][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[37][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[37][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[37] = choices[37][3];
 units[37] = "106";
 comments[37] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[38]= new Array();
 choices[38][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[38][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[38][2] = "A) y B) son verdaderas";
 choices[38][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[38] = choices[38][2];
 units[38] = "73";
 comments[38] = "Id Pregunta: 106. ";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[39]= "40)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[39]= new Array();
 choices[39][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[39][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[39][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[39][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[39] = choices[39][1];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[40]= "41)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[40]= new Array();
 choices[40][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[40][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[40][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[40][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[40] = choices[40][3];
 units[40] = "5";
 comments[40] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[41]= "42)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[41]= new Array();
 choices[41][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[41][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[41][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[41][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[41] = choices[41][0];
 units[41] = "10";
 comments[41] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[42]= "43)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[42]= new Array();
 choices[42][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[42][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[42][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[42][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[42] = choices[42][2];
 units[42] = "19";
 comments[42] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[43]= new Array();
 choices[43][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[43][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[43][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[43][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[43] = choices[43][1];
 units[43] = "19";
 comments[43] = "Id Pregunta: 581. Estrategia TIC";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[44]= "45)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[44]= new Array();
 choices[44][0] = "un art&iacute;culo";
 choices[44][1] = "dos art&iacute;culos";
 choices[44][2] = "tres art&iacute;culos";
 choices[44][3] = "cuatro art&iacute;culos";
 answers[44] = choices[44][1];
 units[44] = "7";
 comments[44] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[45]= new Array();
 choices[45][0] = "IEEE 802.11p";
 choices[45][1] = "IEEE 802.11r";
 choices[45][2] = "IEEE 802.11v";
 choices[45][3] = "IEEE 802.11w";
 answers[45] = choices[45][1];
 units[45] = "112";
 comments[45] = "Id Pregunta: 574. Tema 112. TAI 2016.";


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[46]= "47)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[46]= new Array();
 choices[46][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[46][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[46][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[46][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[46] = choices[46][3];
 units[46] = "101";
 comments[46] = "Id Pregunta: 59. AGE A1 2015";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[47]= new Array();
 choices[47][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[47][1] = "Por Orden Ministerial.";
 choices[47][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[47][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[48]= "49)  Es falso que:";
 choices[48]= new Array();
 choices[48][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[48][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[48][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[48][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[48] = choices[48][1];
 units[48] = "18, 20";
 comments[48] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[49]= "50)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[49]= new Array();
 choices[49][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[49][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[49][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[49][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[49] = choices[49][3];
 units[49] = "62";
 comments[49] = "Id Pregunta: 38. AGE A1 2015";


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[50]= "51)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[50][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[50][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[50][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[50] = choices[50][2];
 units[50] = "48";
 comments[50] = "Id Pregunta: 87. AGE A1 2015";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qu&eacute; facilita un ORM?";
 choices[51]= new Array();
 choices[51][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[51][1] = "Conversi&oacute;n de objetos a documentos";
 choices[51][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[51][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[51] = choices[51][0];
 units[51] = "62";
 comments[51] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[52]= "53)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[52]= new Array();
 choices[52][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[52][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[52][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[52][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[52] = choices[52][0];
 units[52] = "12";
 comments[52] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[53]= "54)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[53]= new Array();
 choices[53][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[53][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[53][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[53][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[53] = choices[53][0];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[54]= "55)  El recurso de alzada puede interponerse:";
 choices[54]= new Array();
 choices[54][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[54][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[54][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[54][3] = "Ante el Defensor del Pueblo";
 answers[54] = choices[54][1];
 units[54] = "8";
 comments[54] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[55]= "56)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[55]= new Array();
 choices[55][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[55][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[55][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[55][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[55] = choices[55][3];
 units[55] = "22";
 comments[55] = "Id Pregunta: 709. Ley de transparencia";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[56]= "57)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[56]= new Array();
 choices[56][0] = "La Ley Org&aacute;nica 2/2011";
 choices[56][1] = "La Ley Org&aacute;nica 2/2012";
 choices[56][2] = "La Ley Org&aacute;nica 3/2012";
 choices[56][3] = "La Ley Org&aacute;nica 2/2002";
 answers[56] = choices[56][1];
 units[56] = "12";
 comments[56] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[57]= new Array();
 choices[57][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[57][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[57][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[57][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[57] = choices[57][0];
 units[57] = "86";
 comments[57] = "Id Pregunta: 71. AGE A1 2015";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[58]= "59)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[58]= new Array();
 choices[58][0] = "Infrastructure as a Service (IaaS)";
 choices[58][1] = "Platform as a Service (PaaS)";
 choices[58][2] = "Software as a Service (SaaS)";
 choices[58][3] = "Application as a Service (AaaS)";
 answers[58] = choices[58][1];
 units[58] = "52";
 comments[58] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[59]= "60)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[59]= new Array();
 choices[59][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[59][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[59][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[59][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[59] = choices[59][0];
 units[59] = "1";
 comments[59] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[60]= "61)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[60]= new Array();
 choices[60][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[60][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[60][2] = "El Presidente del Gobierno";
 choices[60][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[60] = choices[60][1];
 units[60] = "26";
 comments[60] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[61]= "62)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[61]= new Array();
 choices[61][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[61][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[61][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[61][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[61] = choices[61][3];
 units[61] = "12";
 comments[61] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[62]= "63)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[62]= new Array();
 choices[62][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[62][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[62][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[62][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[62] = choices[62][0];
 units[62] = "15";
 comments[62] = "Id Pregunta: 111. ";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[63]= "64)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[63]= new Array();
 choices[63][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[63][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[63][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[63][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[63] = choices[63][2];
 units[63] = "26";
 comments[63] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[64]= new Array();
 choices[64][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[64][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[64][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[64][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[64] = choices[64][0];
 units[64] = "19";
 comments[64] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[65]= "66)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[65]= new Array();
 choices[65][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[65][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[65][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[65][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[65] = choices[65][1];
 units[65] = "19";
 comments[65] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[66]= "67)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[66]= new Array();
 choices[66][0] = "Al Gobierno.";
 choices[66][1] = "A las Cortes Generales.";
 choices[66][2] = "Al Poder Judicial.";
 choices[66][3] = "Al Congreso de los Diputados.";
 answers[66] = choices[66][0];
 units[66] = "1";
 comments[66] = "Id Pregunta: 195. CONSTITUCION1978";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[67]= new Array();
 choices[67][0] = "Por Real Decreto.";
 choices[67][1] = "Por Orden del Ministerio del Interior.";
 choices[67][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[67][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[67] = choices[67][2];
 units[67] = "1";
 comments[67] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[68]= "69)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[68]= new Array();
 choices[68][0] = "Bases de datos orientadas a filas";
 choices[68][1] = "Bases de datos orientadas a documentos";
 choices[68][2] = "Bases de datos de clave/valor";
 choices[68][3] = "Bases de datos orientadas a objetos";
 answers[68] = choices[68][0];
 units[68] = "73";
 comments[68] = "Id Pregunta: 100. ";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[69]= "70)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[69]= new Array();
 choices[69][0] = "Los propios miembros del Tribunal.";
 choices[69][1] = "El Consejo de Europa.";
 choices[69][2] = "El Consejo Europeo.";
 choices[69][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[69] = choices[69][0];
 units[69] = "5";
 comments[69] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[70]= new Array();
 choices[70][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[70][1] = "Solamente el Congreso.";
 choices[70][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[70][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[71]= "72)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[71]= new Array();
 choices[71][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[71][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[71][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[71][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[71] = choices[71][1];
 units[71] = "7";
 comments[71] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[72]= "73)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[72]= new Array();
 choices[72][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[72][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[72][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[72][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[72] = choices[72][2];
 units[72] = "108";
 comments[72] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[73]= new Array();
 choices[73][0] = "Data Mining (miner&iacute;a de datos)";
 choices[73][1] = "Business Intelligence (inteligencia de negocio)";
 choices[73][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[73][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[73] = choices[73][1];
 units[73] = "72";
 comments[73] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[74]= "75)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[74]= new Array();
 choices[74][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[74][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[74][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[74][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[74] = choices[74][1];
 units[74] = "7";
 comments[74] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";


