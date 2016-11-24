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

//  Id pregunta: 10066 Año de creación de pregunta: 2016
 questions[0]= "1)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Incremental, diferencial, completa";
 choices[0][1] = "Completa, incremental, diferencial";
 choices[0][2] = "Completa, diferencial, incremental";
 choices[0][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[0] = choices[0][0];
 units[0] = "53";
 comments[0] = "Id Pregunta: 10066. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 10263 Año de creación de pregunta: 2016
 questions[1]= "2)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[1]= new Array();
 choices[1][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[1][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[1][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[1][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[1] = choices[1][1];
 units[1] = "1";
 comments[1] = "Id Pregunta: 10263. CONSTITUCION1978";


//  Id pregunta: 10225 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[2]= new Array();
 choices[2][0] = "las Cortes generales.";
 choices[2][1] = "los partidos pol&iacute;ticos.";
 choices[2][2] = "los sindicatos.";
 choices[2][3] = "las Comunidades Aut&oacute;nomas.";
 answers[2] = choices[2][1];
 units[2] = "1";
 comments[2] = "Id Pregunta: 10225. CONSTITUCION1978";


//  Id pregunta: 10420 Año de creación de pregunta: 2016
 questions[3]= "4)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[3]= new Array();
 choices[3][0] = "150 trabajadores/as.";
 choices[3][1] = "200 trabajadores/as.";
 choices[3][2] = "250 trabajadores/as.";
 choices[3][3] = "300 trabajadores/as.";
 answers[3] = choices[3][2];
 units[3] = "14";
 comments[3] = "Id Pregunta: 10420. POLITICAS DE IGUALDAD";


//  Id pregunta: 10483 Año de creación de pregunta: 2016
 questions[4]= "5)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[4]= new Array();
 choices[4][0] = "180 art&iacute;culos.";
 choices[4][1] = "182 art&iacute;culos.";
 choices[4][2] = "185 art&iacute;culos.";
 choices[4][3] = "190 art&iacute;culos.";
 answers[4] = choices[4][1];
 units[4] = "10";
 comments[4] = "Id Pregunta: 10483. PRESUPUESTOS GENERALES";


//  Id pregunta: 10272 Año de creación de pregunta: 2016
 questions[5]= "6)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[5]= new Array();
 choices[5][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[5][1] = "Anteriormente se denominaba Sonar.";
 choices[5][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[5][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[5] = choices[5][2];
 units[5] = "92";
 comments[5] = "Id Pregunta: 10272. INTEGRACION CONTINUA";


//  Id pregunta: 10461 Año de creación de pregunta: 2016
 questions[6]= "7)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[6]= new Array();
 choices[6][0] = "A los ministros.";
 choices[6][1] = "Las respuestas a) y b) son correctas.";
 choices[6][2] = "Las respuestas a) y b) no son correctas.";
 choices[6][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[6] = choices[6][1];
 units[6] = "10";
 comments[6] = "Id Pregunta: 10461. PRESUPUESTOS GENERALES";


//  Id pregunta: 10245 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[7]= new Array();
 choices[7][0] = "De los derechos y deberes fundamentales.";
 choices[7][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[7][2] = "Derechos y libertades.";
 choices[7][3] = "De la Corona.";
 answers[7] = choices[7][1];
 units[7] = "1";
 comments[7] = "Id Pregunta: 10245. CONSTITUCION1978";


//  Id pregunta: 10505 Año de creación de pregunta: 2016
 questions[8]= "9)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[8]= new Array();
 choices[8][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[8][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[8][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[8][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[8] = choices[8][3];
 units[8] = "10";
 comments[8] = "Id Pregunta: 10505. PRESUPUESTOS GENERALES";


//  Id pregunta: 10418 Año de creación de pregunta: 2016
 questions[9]= "10)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[9]= new Array();
 choices[9][0] = "P&uacute;blica.";
 choices[9][1] = "Privada.";
 choices[9][2] = "A y B son correctas.";
 choices[9][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 10418. POLITICAS DE IGUALDAD";


//  Id pregunta: 10565 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[10]= new Array();
 choices[10][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[10][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[10][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[10][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[10] = choices[10][3];
 units[10] = "12";
 comments[10] = "Id Pregunta: 10565. Modelo econ&oacute;mico";


//  Id pregunta: 10091 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[11]= new Array();
 choices[11][0] = "JUnit, Artifactory y SonarQube";
 choices[11][1] = "JUnit, Artifactory y Selenium";
 choices[11][2] = "JUnit, SonarQube y Selenium";
 choices[11][3] = "ArtiFactory, SonarQube y Selenium";
 answers[11] = choices[11][2];
 units[11] = "92";
 comments[11] = "Id Pregunta: 10091. AGE A1 2015";


//  Id pregunta: 10017 Año de creación de pregunta: 2016
 questions[12]= "13)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[12]= new Array();
 choices[12][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[12][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[12][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[12][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[12] = choices[12][3];
 units[12] = "44";
 comments[12] = "Id Pregunta: 10017. AGE A1 2015";


//  Id pregunta: 10331 Año de creación de pregunta: 2016
 questions[13]= "14)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[13]= new Array();
 choices[13][0] = "90";
 choices[13][1] = "50";
 choices[13][2] = "64";
 choices[13][3] = "60";
 answers[13] = choices[13][1];
 units[13] = "5";
 comments[13] = "Id Pregunta: 10331. UNION EUROPEA";


//  Id pregunta: 10373 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[14]= new Array();
 choices[14][0] = "Nueve.";
 choices[14][1] = "Diez.";
 choices[14][2] = "Siete.";
 choices[14][3] = "Ocho.";
 answers[14] = choices[14][3];
 units[14] = "5";
 comments[14] = "Id Pregunta: 10373. UNION EUROPEA";


//  Id pregunta: 10553 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[15]= new Array();
 choices[15][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[15][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[15][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[15][3] = "Todas lo son";
 answers[15] = choices[15][0];
 units[15] = "17";
 comments[15] = "Id Pregunta: 10553. Mercado &Uacute;nico Digital";


//  Id pregunta: 10589 Año de creación de pregunta: 2016
 questions[16]= "17)  Son servicios declarados compartidos:";
 choices[16]= new Array();
 choices[16][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[16][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[16][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[16][3] = "Todos los anteriores";
 answers[16] = choices[16][3];
 units[16] = "19";
 comments[16] = "Id Pregunta: 10589. Estrategia TIC";


//  Id pregunta: 10609 Año de creación de pregunta: 2016
 questions[17]= "18)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[17]= new Array();
 choices[17][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[17][1] = "Clasificaci&oacute;n por cuenta.";
 choices[17][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[17][3] = "Clasificaci&oacute;n por intercambio.";
 answers[17] = choices[17][3];
 units[17] = "56";
 comments[17] = "Id Pregunta: 10609. Junta de Extremadura A1 2015";


//  Id pregunta: 10661 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[18]= new Array();
 choices[18][0] = "Varios namenodes y varios datanodes por cluster";
 choices[18][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[18][2] = "1 namenode y varios datanodes por cluster";
 choices[18][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[18] = choices[18][2];
 units[18] = "73";
 comments[18] = "Id Pregunta: 10661. ";


//  Id pregunta: 10216 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[19]= new Array();
 choices[19][0] = "El Presidente del Gobierno.";
 choices[19][1] = "El Consejo de Ministros.";
 choices[19][2] = "40 Diputados.";
 choices[19][3] = "El Ministerio Fiscal.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 10216. CONSTITUCION1978";


//  Id pregunta: 10647 Año de creación de pregunta: 2016
 questions[20]= "21)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[20]= new Array();
 choices[20][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[20][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[20][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[20][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[20] = choices[20][0];
 units[20] = "101";
 comments[20] = "Id Pregunta: 10647. Junta de Extremadura A1 2015";


//  Id pregunta: 10174 Año de creación de pregunta: 2016
 questions[21]= "22)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[21]= new Array();
 choices[21][0] = "El derecho a la propiedad privada.";
 choices[21][1] = "El derecho de asociaci&oacute;n.";
 choices[21][2] = "El derecho de fundaci&oacute;n.";
 choices[21][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[21] = choices[21][1];
 units[21] = "1";
 comments[21] = "Id Pregunta: 10174. CONSTITUCION1978";


//  Id pregunta: 10612 Año de creación de pregunta: 2016
 questions[22]= "23)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[22]= new Array();
 choices[22][0] = "Intersecci&oacute;n.";
 choices[22][1] = "Uni&oacute;n.";
 choices[22][2] = "Restricci&oacute;n.";
 choices[22][3] = "Diferencia.";
 answers[22] = choices[22][0];
 units[22] = "60";
 comments[22] = "Id Pregunta: 10612. Junta de Extremadura A1 2015";


//  Id pregunta: 10539 Año de creación de pregunta: 2016
 questions[23]= "24)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[23]= new Array();
 choices[23][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[23][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[23][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[23][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[23] = choices[23][1];
 units[23] = "7";
 comments[23] = "Id Pregunta: 10539. LEY 39/2015";


//  Id pregunta: 10196 Año de creación de pregunta: 2016
 questions[24]= "25)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[24]= new Array();
 choices[24][0] = "Al Presidente del Gobierno.";
 choices[24][1] = "A las Cortes Generales";
 choices[24][2] = "A los electores.";
 choices[24][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[24] = choices[24][3];
 units[24] = "1";
 comments[24] = "Id Pregunta: 10196. CONSTITUCION1978";


//  Id pregunta: 10092 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[25]= new Array();
 choices[25][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[25][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[25][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[25][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[25] = choices[25][0];
 units[25] = "48";
 comments[25] = "Id Pregunta: 10092. AGE A1 2015";


//  Id pregunta: 10516 Año de creación de pregunta: 2016
 questions[26]= "27)  Las Universidades p&uacute;blicas:";
 choices[26]= new Array();
 choices[26][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[26][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[26][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[26][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[26] = choices[26][1];
 units[26] = "7";
 comments[26] = "Id Pregunta: 10516. LEY 39/2015";


//  Id pregunta: 10417 Año de creación de pregunta: 2016
 questions[27]= "28)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[27][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[27][2] = "Ambas son correctas.";
 choices[27][3] = "La A y B son incorrectas.";
 answers[27] = choices[27][2];
 units[27] = "14";
 comments[27] = "Id Pregunta: 10417. POLITICAS DE IGUALDAD";


//  Id pregunta: 10147 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[28]= new Array();
 choices[28][0] = "Al Gobierno de la naci&oacute;n";
 choices[28][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[28][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[28][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[28] = choices[28][3];
 units[28] = "7";
 comments[28] = "Id Pregunta: 10147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 10429 Año de creación de pregunta: 2016
 questions[29]= "30)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[29]= new Array();
 choices[29][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[29][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[29][2] = "Ambas son correctas.";
 choices[29][3] = "Ambas son incorrectas.";
 answers[29] = choices[29][0];
 units[29] = "14";
 comments[29] = "Id Pregunta: 10429. POLITICAS DE IGUALDAD";


//  Id pregunta: 10288 Año de creación de pregunta: 2016
 questions[30]= "31)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[30]= new Array();
 choices[30][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[30][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[30][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[30][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[30] = choices[30][2];
 units[30] = "5";
 comments[30] = "Id Pregunta: 10288. UNION EUROPEA";


//  Id pregunta: 10115 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[31]= new Array();
 choices[31][0] = "El Tratado de Lisboa";
 choices[31][1] = "El Tratado de Amsterdam";
 choices[31][2] = "El Tratado de Niza";
 choices[31][3] = "El Acta &Uacute;nica Europea";
 answers[31] = choices[31][1];
 units[31] = "15";
 comments[31] = "Id Pregunta: 10115. ";


//  Id pregunta: 10271 Año de creación de pregunta: 2016
 questions[32]= "33)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[32]= new Array();
 choices[32][0] = "Ley org&aacute;nica.";
 choices[32][1] = "Ley ordinaria.";
 choices[32][2] = "Ley de bases.";
 choices[32][3] = "Ley marco.";
 answers[32] = choices[32][0];
 units[32] = "1";
 comments[32] = "Id Pregunta: 10271. CONSTITUCION1978";


//  Id pregunta: 10118 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[33]= new Array();
 choices[33][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[33][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[33][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[33][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[33] = choices[33][2];
 units[33] = "15";
 comments[33] = "Id Pregunta: 10118. ";


//  Id pregunta: 10068 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[34]= new Array();
 choices[34][0] = "Data Mining (miner&iacute;a de datos)";
 choices[34][1] = "Business Intelligence (inteligencia de negocio)";
 choices[34][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[34][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[34] = choices[34][1];
 units[34] = "72";
 comments[34] = "Id Pregunta: 10068. AGE A1 2015";


//  Id pregunta: 10284 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la respuesta falsa:";
 choices[35]= new Array();
 choices[35][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[35][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[35][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[35][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[35] = choices[35][2];
 units[35] = "5";
 comments[35] = "Id Pregunta: 10284. UNION EUROPEA";


//  Id pregunta: 10210 Año de creación de pregunta: 2016
 questions[36]= "37)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[36]= new Array();
 choices[36][0] = "El rey, a propuesta del Gobierno.";
 choices[36][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[36][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[36][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[36] = choices[36][1];
 units[36] = "1";
 comments[36] = "Id Pregunta: 10210. CONSTITUCION1978";


//  Id pregunta: 10408 Año de creación de pregunta: 2016
 questions[37]= "38)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[37]= new Array();
 choices[37][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[37][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[37][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[37][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[37] = choices[37][1];
 units[37] = "14";
 comments[37] = "Id Pregunta: 10408. POLITICAS DE IGUALDAD";


//  Id pregunta: 10108 Año de creación de pregunta: 2016
 questions[38]= "39)  Son proyectos de Apache relacionados con Big Data:";
 choices[38]= new Array();
 choices[38][0] = "Hadoop";
 choices[38][1] = "Spark";
 choices[38][2] = "A) y B)";
 choices[38][3] = "Niguno de los anteriores";
 answers[38] = choices[38][2];
 units[38] = "73";
 comments[38] = "Id Pregunta: 10108. ";


//  Id pregunta: 10286 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[39]= new Array();
 choices[39][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[39][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[39][2] = "Iniciativa europea de libre flujo de datos.";
 choices[39][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 10286. UNION EUROPEA";


//  Id pregunta: 10109 Año de creación de pregunta: 2016
 questions[40]= "41)  Big Data:";
 choices[40]= new Array();
 choices[40][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[40][1] = "No puede emplearse para tratar datos no estructurados";
 choices[40][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][3];
 units[40] = "73";
 comments[40] = "Id Pregunta: 10109. ";


//  Id pregunta: 10426 Año de creación de pregunta: 2016
 questions[41]= "42)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[41]= new Array();
 choices[41][0] = "Un plan de igualdad.";
 choices[41][1] = "Un informe de impacto de g&eacute;nero.";
 choices[41][2] = "Un programa de igualdad.";
 choices[41][3] = "Todas son correctas.";
 answers[41] = choices[41][1];
 units[41] = "14";
 comments[41] = "Id Pregunta: 10426. POLITICAS DE IGUALDAD";


//  Id pregunta: 10234 Año de creación de pregunta: 2016
 questions[42]= "43)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[42]= new Array();
 choices[42][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[42][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[42][2] = "Al Congreso de los Diputados.";
 choices[42][3] = "Al Gobierno.";
 answers[42] = choices[42][0];
 units[42] = "1";
 comments[42] = "Id Pregunta: 10234. CONSTITUCION1978";


//  Id pregunta: 10393 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[43]= new Array();
 choices[43][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[43][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[43][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[43][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[43] = choices[43][0];
 units[43] = "14";
 comments[43] = "Id Pregunta: 10393. POLITICAS DE IGUALDAD";


//  Id pregunta: 10215 Año de creación de pregunta: 2016
 questions[44]= "45)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[44]= new Array();
 choices[44][0] = "Publicidad.";
 choices[44][1] = "Constituci&oacute;n.";
 choices[44][2] = "Legalidad.";
 choices[44][3] = "Creaci&oacute;n.";
 answers[44] = choices[44][0];
 units[44] = "1";
 comments[44] = "Id Pregunta: 10215. CONSTITUCION1978";


//  Id pregunta: 10169 Año de creación de pregunta: 2016
 questions[45]= "46)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[45]= new Array();
 choices[45][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[45][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[45][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[45][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[45] = choices[45][1];
 units[45] = "19";
 comments[45] = "Id Pregunta: 10169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 10472 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[46]= new Array();
 choices[46][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[46][1] = "Auditor&iacute;a operativa.";
 choices[46][2] = "Auditor&iacute;a de cumplimiento.";
 choices[46][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[46] = choices[46][2];
 units[46] = "10";
 comments[46] = "Id Pregunta: 10472. PRESUPUESTOS GENERALES";


//  Id pregunta: 10316 Año de creación de pregunta: 2016
 questions[47]= "48)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[47]= new Array();
 choices[47][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[47][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[47][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[47][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[47] = choices[47][1];
 units[47] = "5";
 comments[47] = "Id Pregunta: 10316. UNION EUROPEA";


//  Id pregunta: 10662 Año de creación de pregunta: 2016
 questions[48]= "49)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[48]= new Array();
 choices[48][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[48][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[48][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[48][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que haya sido elaborado por &eacute;ste.";
 answers[48] = choices[48][1];
 units[48] = "7";
 comments[48] = "Id Pregunta: 10662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 10578 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[49]= new Array();
 choices[49][0] = "Fue elaborada y aprobada por la CETIC";
 choices[49][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[49][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[49][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[49] = choices[49][1];
 units[49] = "19";
 comments[49] = "Id Pregunta: 10578. Estrategia TIC";


//  Id pregunta: 10409 Año de creación de pregunta: 2016
 questions[50]= "51)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[50]= new Array();
 choices[50][0] = "Prevenir las conductas discriminatorias.";
 choices[50][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[50][2] = "Todas son correctas.";
 choices[50][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[50] = choices[50][2];
 units[50] = "14";
 comments[50] = "Id Pregunta: 10409. POLITICAS DE IGUALDAD";


//  Id pregunta: 10009 Año de creación de pregunta: 2016
 questions[51]= "52)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[51]= new Array();
 choices[51][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[51][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[51][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[51][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[51] = choices[51][1];
 units[51] = "95";
 comments[51] = "Id Pregunta: 10009. AGE A1 2015";


//  Id pregunta: 10295 Año de creación de pregunta: 2016
 questions[52]= "53)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[52]= new Array();
 choices[52][0] = "Estrasburgo.";
 choices[52][1] = "Bruselas.";
 choices[52][2] = "Luxemburgo.";
 choices[52][3] = "Holanda.";
 answers[52] = choices[52][2];
 units[52] = "5";
 comments[52] = "Id Pregunta: 10295. UNION EUROPEA";


//  Id pregunta: 10177 Año de creación de pregunta: 2016
 questions[53]= "54)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[53]= new Array();
 choices[53][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[53][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[53][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[53][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 10177. CONSTITUCION1978";


//  Id pregunta: 10137 Año de creación de pregunta: 2016
 questions[54]= "55)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[54]= new Array();
 choices[54][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[54][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[54][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[54][3] = "Todos las anteriores son ciertas.";
 answers[54] = choices[54][3];
 units[54] = "12";
 comments[54] = "Id Pregunta: 10137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10051 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[55]= new Array();
 choices[55][0] = "Cifrado de las comunicaciones";
 choices[55][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[55][2] = "Registro de los accesos";
 choices[55][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[55] = choices[55][1];
 units[55] = "35";
 comments[55] = "Id Pregunta: 10051. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 10519 Año de creación de pregunta: 2016
 questions[56]= "57)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[56]= new Array();
 choices[56][0] = "un art&iacute;culo";
 choices[56][1] = "dos art&iacute;culos";
 choices[56][2] = "tres art&iacute;culos";
 choices[56][3] = "cuatro art&iacute;culos";
 answers[56] = choices[56][1];
 units[56] = "7";
 comments[56] = "Id Pregunta: 10519. LEY 39/2015";


//  Id pregunta: 10294 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[57]= new Array();
 choices[57][0] = "Al Consejo Europeo.";
 choices[57][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[57][2] = "A la Comisi&oacute;n Europea.";
 choices[57][3] = "Al Parlamento Europeo.";
 answers[57] = choices[57][2];
 units[57] = "5";
 comments[57] = "Id Pregunta: 10294. UNION EUROPEA";


//  Id pregunta: 10363 Año de creación de pregunta: 2016
 questions[58]= "59)  Los Reglamentos no se caracterizan por:";
 choices[58]= new Array();
 choices[58][0] = "No poseer alcance general.";
 choices[58][1] = "Ser obligatorios.";
 choices[58][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[58][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[58] = choices[58][0];
 units[58] = "5";
 comments[58] = "Id Pregunta: 10363. UNION EUROPEA";


//  Id pregunta: 10155 Año de creación de pregunta: 2016
 questions[59]= "60)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[59]= new Array();
 choices[59][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[59][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[59][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[59][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[59] = choices[59][2];
 units[59] = "7";
 comments[59] = "Id Pregunta: 10155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 10246 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[60]= new Array();
 choices[60][0] = "Dos Cap&iacute;tulos.";
 choices[60][1] = "Tres Cap&iacute;tulos.";
 choices[60][2] = "Un Cap&iacute;tulo.";
 choices[60][3] = "Cuatro Cap&iacute;tulos.";
 answers[60] = choices[60][1];
 units[60] = "1";
 comments[60] = "Id Pregunta: 10246. CONSTITUCION1978";


//  Id pregunta: 10170 Año de creación de pregunta: 2016
 questions[61]= "62)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[61]= new Array();
 choices[61][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[61][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[61][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[61][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[61] = choices[61][2];
 units[61] = "19";
 comments[61] = "Id Pregunta: 10170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 10296 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[62]= new Array();
 choices[62][0] = "Al Consejo Europeo.";
 choices[62][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[62][2] = "A la Comisi&oacute;n Europea.";
 choices[62][3] = "Al Parlamento Europeo.";
 answers[62] = choices[62][2];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10296. UNION EUROPEA";


//  Id pregunta: 10110 Año de creación de pregunta: 2016
 questions[63]= "64)  La Poblaci&oacute;n Activa incluye a:";
 choices[63]= new Array();
 choices[63][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[63][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[63][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[63][3] = "Todo aquel que desea trabajar";
 answers[63] = choices[63][2];
 units[63] = "15";
 comments[63] = "Id Pregunta: 10110. ";


//  Id pregunta: 10233 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[64]= new Array();
 choices[64][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[64][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[64][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[64][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[64] = choices[64][2];
 units[64] = "1";
 comments[64] = "Id Pregunta: 10233. CONSTITUCION1978";


//  Id pregunta: 10643 Año de creación de pregunta: 2016
 questions[65]= "66)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[65]= new Array();
 choices[65][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[65][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[65][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[65][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[65] = choices[65][2];
 units[65] = "85";
 comments[65] = "Id Pregunta: 10643. Junta de Extremadura A1 2015";


//  Id pregunta: 10242 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[66]= new Array();
 choices[66][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[66][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[66][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[66][3] = "Sancionar y publicar las leyes.";
 answers[66] = choices[66][2];
 units[66] = "1";
 comments[66] = "Id Pregunta: 10242. CONSTITUCION1978";


//  Id pregunta: 10383 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[67]= new Array();
 choices[67][0] = "El Consejo Nacional de la Mujer";
 choices[67][1] = "El Consejo de la Mujer";
 choices[67][2] = "El Instituto de la Mujer";
 choices[67][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[67] = choices[67][3];
 units[67] = "14";
 comments[67] = "Id Pregunta: 10383. POLITICAS DE IGUALDAD";


//  Id pregunta: 10095 Año de creación de pregunta: 2016
 questions[68]= "69)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[68]= new Array();
 choices[68][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[68][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[68][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[68][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[68] = choices[68][3];
 units[68] = "89";
 comments[68] = "Id Pregunta: 10095. AGE A1 2015";


//  Id pregunta: 10176 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[69]= new Array();
 choices[69][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[69][1] = "Solamente el Congreso.";
 choices[69][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[69][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[69] = choices[69][0];
 units[69] = "1";
 comments[69] = "Id Pregunta: 10176. CONSTITUCION1978";


//  Id pregunta: 10357 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[70]= new Array();
 choices[70][0] = "El Parlamento y el Consejo.";
 choices[70][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[70][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[70][3] = "La Comisi&oacute;n y el Consejo.";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10028 Año de creación de pregunta: 2016
 questions[71]= "72)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[71]= new Array();
 choices[71][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[71][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[71][2] = "Crea una copia del proceso que hace la llamada.";
 choices[71][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[71] = choices[71][2];
 units[71] = "57";
 comments[71] = "Id Pregunta: 10028. AGE A1 2015";


//  Id pregunta: 10064 Año de creación de pregunta: 2016
 questions[72]= "73)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[72]= new Array();
 choices[72][0] = "Windows Phone";
 choices[72][1] = "Blackberry";
 choices[72][2] = "iOS";
 choices[72][3] = "Android";
 answers[72] = choices[72][3];
 units[72] = "59";
 comments[72] = "Id Pregunta: 10064. AGE A1 2015";


//  Id pregunta: 10465 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[73]= new Array();
 choices[73][0] = "Las respuestas a) y b) son correctas.";
 choices[73][1] = "Las respuestas a) y b) no son correctas.";
 choices[73][2] = "Contenido coherente con los planes sectoriales.";
 choices[73][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[73] = choices[73][0];
 units[73] = "10";
 comments[73] = "Id Pregunta: 10465. PRESUPUESTOS GENERALES";


//  Id pregunta: 10527 Año de creación de pregunta: 2016
 questions[74]= "75)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[74]= new Array();
 choices[74][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[74][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[74][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[74][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[74] = choices[74][2];
 units[74] = "7";
 comments[74] = "Id Pregunta: 10527. LEY 39/2015";


