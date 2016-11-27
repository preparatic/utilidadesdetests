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

//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[0]= "1)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Incremental, diferencial, completa";
 choices[0][1] = "Completa, incremental, diferencial";
 choices[0][2] = "Completa, diferencial, incremental";
 choices[0][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[0] = choices[0][0];
 units[0] = "53";
 comments[0] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[1]= "2)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[1]= new Array();
 choices[1][0] = "la poblaci&oacute;n del territorio";
 choices[1][1] = "el volumen de gesti&oacute;n";
 choices[1][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[1][3] = "todas son correctas";
 answers[1] = choices[1][3];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[2]= "3)  La soberan&iacute;a nacional reside en:";
 choices[2]= new Array();
 choices[2][0] = "el Parlamento nacional.";
 choices[2][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[2][2] = "el pueblo espa&ntilde;ol.";
 choices[2][3] = "el Congreso y el Senado.";
 answers[2] = choices[2][3];
 units[2] = "1";
 comments[2] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[3]= "4)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[3]= new Array();
 choices[3][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[3][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[3][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[3][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[4]= "5)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[4]= new Array();
 choices[4][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[4][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[4][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[4][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[4] = choices[4][2];
 units[4] = "43";
 comments[4] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[5]= "6)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[5]= new Array();
 choices[5][0] = "Tres a&ntilde;os.";
 choices[5][1] = "Cuatro a&ntilde;os.";
 choices[5][2] = "Cinco a&ntilde;os.";
 choices[5][3] = "Seis a&ntilde;os.";
 answers[5] = choices[5][0];
 units[5] = "5";
 comments[5] = "Id Pregunta: 324. UNION EUROPEA";


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[6]= "7)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[6]= new Array();
 choices[6][0] = "X.";
 choices[6][1] = "XIX.";
 choices[6][2] = "XV.";
 choices[6][3] = "XIII.";
 answers[6] = choices[6][1];
 units[6] = "5";
 comments[6] = "Id Pregunta: 327. UNION EUROPEA";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[7]= new Array();
 choices[7][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[7][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[7][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[7][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[7] = choices[7][1];
 units[7] = "18, 20";
 comments[7] = "Id Pregunta: 743. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[8]= new Array();
 choices[8][0] = "Quince miembros.";
 choices[8][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[8][2] = "Los miembros que determine el Consejo.";
 choices[8][3] = "Un Presidente y quince miembros.";
 answers[8] = choices[8][1];
 units[8] = "14";
 comments[8] = "Id Pregunta: 378. UNION EUROPEA";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[9]= "10)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[9]= new Array();
 choices[9][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[9][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[9][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[9][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[9] = choices[9][2];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 763. Ley 40/2015";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[10]= "11)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[10]= new Array();
 choices[10][0] = "150 trabajadores/as.";
 choices[10][1] = "200 trabajadores/as.";
 choices[10][2] = "250 trabajadores/as.";
 choices[10][3] = "300 trabajadores/as.";
 answers[10] = choices[10][2];
 units[10] = "14";
 comments[10] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[11]= new Array();
 choices[11][0] = "Neo4J ";
 choices[11][1] = "OrientDB ";
 choices[11][2] = "InfoGrid ";
 choices[11][3] = "SimpleDB";
 answers[11] = choices[11][3];
 units[11] = "73";
 comments[11] = "Id Pregunta: 653. ";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[12]= new Array();
 choices[12][0] = "Diagrama de clases";
 choices[12][1] = "Diagrama de componentes";
 choices[12][2] = "Diagrama de estructura";
 choices[12][3] = "Diagrama de paquetes";
 answers[12] = choices[12][0];
 units[12] = "91";
 comments[12] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[13]= "14)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[13]= new Array();
 choices[13][0] = "Windows Phone";
 choices[13][1] = "Blackberry";
 choices[13][2] = "iOS";
 choices[13][3] = "Android";
 answers[13] = choices[13][3];
 units[13] = "59";
 comments[13] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[14]= "15)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[14]= new Array();
 choices[14][0] = "la Administraci&oacute;n General del Estado";
 choices[14][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[14][2] = "las Entidades Locales";
 choices[14][3] = "todas son correctas";
 answers[14] = choices[14][3];
 units[14] = "7";
 comments[14] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[15]= new Array();
 choices[15][0] = "las Cortes generales.";
 choices[15][1] = "los partidos pol&iacute;ticos.";
 choices[15][2] = "los sindicatos.";
 choices[15][3] = "las Comunidades Aut&oacute;nomas.";
 answers[15] = choices[15][1];
 units[15] = "1";
 comments[15] = "Id Pregunta: 225. CONSTITUCION1978";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[16]= "17)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[16]= new Array();
 choices[16][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[16][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[16][2] = "a y b son correctas";
 choices[16][3] = "a y b son incorrectas";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[17]= new Array();
 choices[17][0] = "Constitucional.";
 choices[17][1] = "Penal.";
 choices[17][2] = "Militar.";
 choices[17][3] = "Tribunales consuetudinarios.";
 answers[17] = choices[17][0];
 units[17] = "1";
 comments[17] = "Id Pregunta: 262. CONSTITUCION1978";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[18]= "19)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[18]= new Array();
 choices[18][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[18][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[18][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[18][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[18] = choices[18][0];
 units[18] = "101";
 comments[18] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[19]= "20)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[19]= new Array();
 choices[19][0] = "Discriminaci&oacute;n indirecta.";
 choices[19][1] = "Discriminaci&oacute;n directa.";
 choices[19][2] = "Discriminaci&oacute;n por maternidad.";
 choices[19][3] = "Discriminaci&oacute;n abusiva.";
 answers[19] = choices[19][1];
 units[19] = "14";
 comments[19] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[20]= "21)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[20]= new Array();
 choices[20][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[20][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[20][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[20][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[20] = choices[20][2];
 units[20] = "1";
 comments[20] = "Id Pregunta: 191. CONSTITUCION1978";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[21]= new Array();
 choices[21][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[21][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[21][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[21][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[21] = choices[21][2];
 units[21] = "22";
 comments[21] = "Id Pregunta: 121. ";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[22]= new Array();
 choices[22][0] = "Perceptible";
 choices[22][1] = "Operable";
 choices[22][2] = "Comprensible";
 choices[22][3] = "Robusto";
 answers[22] = choices[22][2];
 units[22] = "42";
 comments[22] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[23]= "24)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[23]= new Array();
 choices[23][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[23][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[23][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[23][3] = "todas son correctas";
 answers[23] = choices[23][3];
 units[23] = "7";
 comments[23] = "Id Pregunta: 531. LEY 39/2015";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[24]= "25)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[24]= new Array();
 choices[24][0] = "P&uacute;blica.";
 choices[24][1] = "Privada.";
 choices[24][2] = "A y B son correctas.";
 choices[24][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[24] = choices[24][2];
 units[24] = "14";
 comments[24] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[25]= new Array();
 choices[25][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[25][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[25][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[25][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[25] = choices[25][2];
 units[25] = "7";
 comments[25] = "Id Pregunta: 667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[26]= "27)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[26]= new Array();
 choices[26][0] = "Decretos Legislativos.";
 choices[26][1] = "Decretos-leyes.";
 choices[26][2] = "Leyes de bases.";
 choices[26][3] = "Reales Decretos del Consejo de Ministros.";
 answers[26] = choices[26][0];
 units[26] = "1";
 comments[26] = "Id Pregunta: 204. CONSTITUCION1978";


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[27]= new Array();
 choices[27][0] = "Las respuestas a) y b) son correctas.";
 choices[27][1] = "Las respuestas a) y b) no son correctas.";
 choices[27][2] = "Contenido coherente con los planes sectoriales.";
 choices[27][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[27] = choices[27][0];
 units[27] = "10";
 comments[27] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[28]= "29)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[28]= new Array();
 choices[28][0] = "Establecer tributos.";
 choices[28][1] = "Desarrollar lo establecido en una Ley.";
 choices[28][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[28][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 197. CONSTITUCION1978";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[29]= new Array();
 choices[29][0] = "Selenium";
 choices[29][1] = "JUnit";
 choices[29][2] = "Jenkins";
 choices[29][3] = "JMeter";
 answers[29] = choices[29][2];
 units[29] = "92";
 comments[29] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[30]= new Array();
 choices[30][0] = "Maximizar el valor para los clientes";
 choices[30][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[30][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[30][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[30] = choices[30][3];
 units[30] = "34";
 comments[30] = "Id Pregunta: 716. Metodologias Lean";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[31]= new Array();
 choices[31][0] = "Principio de solo una vez";
 choices[31][1] = "Apertura y transparencia";
 choices[31][2] = "Confianza y seguridad";
 choices[31][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[31] = choices[31][3];
 units[31] = "19";
 comments[31] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[32]= "33)  El Colegio de Comisarios se re&uacute;ne:";
 choices[32]= new Array();
 choices[32][0] = "Una vez por semana.";
 choices[32][1] = "Una vez al mes.";
 choices[32][2] = "Dos veces en semana.";
 choices[32][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[32] = choices[32][0];
 units[32] = "5";
 comments[32] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[33]= "34)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[33]= new Array();
 choices[33][0] = "Prevenir las conductas discriminatorias.";
 choices[33][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[33][2] = "Todas son correctas.";
 choices[33][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[33] = choices[33][2];
 units[33] = "14";
 comments[33] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[34]= new Array();
 choices[34][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[34][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[34][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[34][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[34] = choices[34][2];
 units[34] = "7";
 comments[34] = "Id Pregunta: 665. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[35]= "36)  La Poblaci&oacute;n Activa incluye a:";
 choices[35]= new Array();
 choices[35][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[35][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[35][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[35][3] = "Todo aquel que desea trabajar";
 answers[35] = choices[35][2];
 units[35] = "15";
 comments[35] = "Id Pregunta: 110. ";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[36]= "37)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[36]= new Array();
 choices[36][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[36][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[36][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[36][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[36] = choices[36][2];
 units[36] = "19";
 comments[36] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[37]= "38)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[37]= new Array();
 choices[37][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[37][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[37][2] = "Crea una copia del proceso que hace la llamada.";
 choices[37][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[37] = choices[37][2];
 units[37] = "57";
 comments[37] = "Id Pregunta: 28. AGE A1 2015";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[38]= new Array();
 choices[38][0] = "JUnit, Artifactory y SonarQube";
 choices[38][1] = "JUnit, Artifactory y Selenium";
 choices[38][2] = "JUnit, SonarQube y Selenium";
 choices[38][3] = "ArtiFactory, SonarQube y Selenium";
 answers[38] = choices[38][2];
 units[38] = "92";
 comments[38] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[39]= new Array();
 choices[39][0] = "Un programa presupuestario.";
 choices[39][1] = "Un concepto presupuestario.";
 choices[39][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[39][3] = "Un cr&eacute;dito presupuestario.";
 answers[39] = choices[39][0];
 units[39] = "10";
 comments[39] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[40]= "41)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[40]= new Array();
 choices[40][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[40][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[40][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[40][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[40] = choices[40][0];
 units[40] = "43";
 comments[40] = "Id Pregunta: 437. SERVICIOS COMUNES";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[41]= new Array();
 choices[41][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[41][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[41][2] = "Servicio de seguridad gestionada";
 choices[41][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[41] = choices[41][1];
 units[41] = "26";
 comments[41] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[42]= "43)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[42]= new Array();
 choices[42][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[42][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[42][2] = "Gestionar el Registro de Operadores.";
 choices[42][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[42] = choices[42][3];
 units[42] = "121";
 comments[42] = "Id Pregunta: 24. AGE A1 2015";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[43]= new Array();
 choices[43][0] = "Entre 1973 y 1978";
 choices[43][1] = "Entre 1992 y 1996";
 choices[43][2] = "Entre 1978 y 1985";
 choices[43][3] = "Entre 2008 y 2013";
 answers[43] = choices[43][2];
 units[43] = "12";
 comments[43] = "Id Pregunta: 562. Modelo econ&oacute;mico";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[44]= new Array();
 choices[44][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[44][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[44][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[44][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[45]= "46)  Son bases de datos NoSQL orientadas a objetos:";
 choices[45]= new Array();
 choices[45][0] = "GemStone";
 choices[45][1] = "Zope Object DB";
 choices[45][2] = "Las dos anteriores";
 choices[45][3] = "Solo B)";
 answers[45] = choices[45][2];
 units[45] = "73";
 comments[45] = "Id Pregunta: 107. ";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[46]= "47)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[46]= new Array();
 choices[46][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[46][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[46][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[46][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[46] = choices[46][2];
 units[46] = "57";
 comments[46] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[47]= new Array();
 choices[47][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[47][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[47][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[47][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[47] = choices[47][2];
 units[47] = "43";
 comments[47] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[48]= "49)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[48]= new Array();
 choices[48][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[48][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[48][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[48][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[48] = choices[48][2];
 units[48] = "1";
 comments[48] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[49]= "50)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[49]= new Array();
 choices[49][0] = "De los interesados en el procedimiento";
 choices[49][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[49][2] = "Disposiciones generales";
 choices[49][3] = "De los actos administrativos";
 answers[49] = choices[49][2];
 units[49] = "7";
 comments[49] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[50]= "51)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[50]= new Array();
 choices[50][0] = "Se definen iteraciones";
 choices[50][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[50][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[50][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[50] = choices[50][1];
 units[50] = "34, 84";
 comments[50] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[51]= "52)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[51]= new Array();
 choices[51][0] = "Ejecuci&oacute;n";
 choices[51][1] = "Adjudicaci&oacute;n";
 choices[51][2] = "Licitaci&oacute;n";
 choices[51][3] = "Formalizaci&oacute;n";
 answers[51] = choices[51][3];
 units[51] = "37";
 comments[51] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[52]= "53)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[52]= new Array();
 choices[52][0] = "A nivel de art&iacute;culo.";
 choices[52][1] = "A nivel de cap&iacute;tulo.";
 choices[52][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[52][3] = "A nivel de concepto.";
 answers[52] = choices[52][2];
 units[52] = "10";
 comments[52] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[53]= "54)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[53]= new Array();
 choices[53][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[53][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[53][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[53][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[53] = choices[53][3];
 units[53] = "5";
 comments[53] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[54]= "55)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[54]= new Array();
 choices[54][0] = "El acoso sexual.";
 choices[54][1] = "El acoso por raz&oacute;n del sexo.";
 choices[54][2] = "Ambas son correctas.";
 choices[54][3] = "A y B son incorrectas.";
 answers[54] = choices[54][2];
 units[54] = "14";
 comments[54] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[55]= new Array();
 choices[55][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[55][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[55][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = choices[55][2];
 units[55] = "18, 20";
 comments[55] = "Id Pregunta: 742. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[56]= "57)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[56]= new Array();
 choices[56][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[56][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[56][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[56][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[56] = choices[56][2];
 units[56] = "14";
 comments[56] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[57]= "58)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[57]= new Array();
 choices[57][0] = "Cifrada";
 choices[57][1] = "Conjunta";
 choices[57][2] = "Sistem&aacute;tica";
 choices[57][3] = "Todas son correctas";
 answers[57] = choices[57][3];
 units[57] = "10";
 comments[57] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[58]= "59)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[58]= new Array();
 choices[58][0] = "la capital del pa&iacute;s";
 choices[58][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[58][2] = "cada una de las provincias";
 choices[58][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[58] = choices[58][1];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[59]= "60)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[59]= new Array();
 choices[59][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[59][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[59][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[59][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[59] = choices[59][0];
 units[59] = "1";
 comments[59] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[60]= "61)  El Presupuesto por programas sirve para saber...";
 choices[60]= new Array();
 choices[60][0] = "En qu&eacute; nos gastamos el dinero";
 choices[60][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[60][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[60][3] = "Qui&eacute;n se gasta el dinero";
 answers[60] = choices[60][2];
 units[60] = "10";
 comments[60] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[61]= "62)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[61]= new Array();
 choices[61][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[61][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[61][2] = "a y b son correctas";
 choices[61][3] = "a y b son incorrectas";
 answers[61] = choices[61][2];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 771. Ley 40/2015";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[62]= "63)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[62][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[62][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[62][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[62] = choices[62][2];
 units[62] = "1";
 comments[62] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[63]= "64)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[63]= new Array();
 choices[63][0] = "Rey.";
 choices[63][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[63][2] = "Constituci&oacute;n.";
 choices[63][3] = "Pueblo.";
 answers[63] = choices[63][2];
 units[63] = "1";
 comments[63] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[64]= new Array();
 choices[64][0] = "ISO/IEC 31000";
 choices[64][1] = "ISO/IEC 14000";
 choices[64][2] = "ISO/IEC 38500";
 choices[64][3] = "ISO/IEC 18000";
 answers[64] = choices[64][2];
 units[64] = "26";
 comments[64] = "Id Pregunta: 543. Gobernanza TIC";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[65]= "66)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[65]= new Array();
 choices[65][0] = "Intersecci&oacute;n.";
 choices[65][1] = "Uni&oacute;n.";
 choices[65][2] = "Restricci&oacute;n.";
 choices[65][3] = "Diferencia.";
 answers[65] = choices[65][0];
 units[65] = "60";
 comments[65] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[66]= "67)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[66]= new Array();
 choices[66][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[66][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[66][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[66][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[66] = choices[66][1];
 units[66] = "92";
 comments[66] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[67]= "68)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[67][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[67][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[67][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[67] = choices[67][0];
 units[67] = "19";
 comments[67] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[68]= "69)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[68]= new Array();
 choices[68][0] = "Fat y Ntfs.";
 choices[68][1] = "Extfat y Fat.";
 choices[68][2] = "Fat y Nfst.";
 choices[68][3] = "ext2fs y Ntfs.";
 answers[68] = choices[68][0];
 units[68] = "58";
 comments[68] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[69]= "70)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[69]= new Array();
 choices[69][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[69][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[69][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[69][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[69] = choices[69][3];
 units[69] = "26";
 comments[69] = "Id Pregunta: 550. Gobernanza TIC";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[70]= "71)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[70]= new Array();
 choices[70][0] = "Un informe de g&eacute;nero.";
 choices[70][1] = "La variable de sexo.";
 choices[70][2] = "La variable de edad.";
 choices[70][3] = "La variable de comportamiento.";
 answers[70] = choices[70][1];
 units[70] = "14";
 comments[70] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 617 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[71]= new Array();
 choices[71][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[71][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[71][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[71][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[71] = choices[71][0];
 units[71] = "84";
 comments[71] = "Id Pregunta: 617. Junta de Extremadura A1 2015";


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[72]= "73)  En qu&eacute; consiste el principio BASE:";
 choices[72]= new Array();
 choices[72][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[72][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[72][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[72][3] = "Todas las anteriores son falsas";
 answers[72] = choices[72][3];
 units[72] = "73";
 comments[72] = "Id Pregunta: 103. ";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[73]= "74)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[73]= new Array();
 choices[73][0] = "Unidad de igualdad.";
 choices[73][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[73][2] = "Ninguna de las anteriores.";
 choices[73][3] = "A y B son correctas.";
 answers[73] = choices[73][1];
 units[73] = "14";
 comments[73] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[74]= "75)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[74]= new Array();
 choices[74][0] = "Presencia equilibrada.";
 choices[74][1] = "Presencia paritaria.";
 choices[74][2] = "Presencia consensuada.";
 choices[74][3] = "presencia horizontal.";
 answers[74] = choices[74][0];
 units[74] = "14";
 comments[74] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


