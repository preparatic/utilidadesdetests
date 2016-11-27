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

//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[0]= new Array();
 choices[0][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[0][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[0][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[0][3] = "Ninguna de las anteriores";
 answers[0] = choices[0][1];
 units[0] = "19";
 comments[0] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[1]= "2)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[1]= new Array();
 choices[1][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[1][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[1][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[1][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[1] = choices[1][2];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 819. Ley 40/2015";


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[2]= new Array();
 choices[2][0] = "Drupal";
 choices[2][1] = "Cassandra";
 choices[2][2] = "Wordpress";
 choices[2][3] = "OpenCMS";
 answers[2] = choices[2][1];
 units[2] = "99";
 comments[2] = "Id Pregunta: 40. AGE A1 2015";


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[3]= "4)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[3]= new Array();
 choices[3][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[3][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[3][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[3][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[3] = choices[3][1];
 units[3] = "95";
 comments[3] = "Id Pregunta: 9. AGE A1 2015";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[4]= new Array();
 choices[4][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[4][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[4][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[4][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[4] = choices[4][1];
 units[4] = "19";
 comments[4] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[5]= new Array();
 choices[5][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[5][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[5][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[5][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[5] = choices[5][1];
 units[5] = "1";
 comments[5] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[6]= "7)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[6]= new Array();
 choices[6][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[6][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[6][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[6][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[6] = choices[6][1];
 units[6] = "7";
 comments[6] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[7]= "8)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[7]= new Array();
 choices[7][0] = "Un informe de g&eacute;nero.";
 choices[7][1] = "La variable de sexo.";
 choices[7][2] = "La variable de edad.";
 choices[7][3] = "La variable de comportamiento.";
 answers[7] = choices[7][1];
 units[7] = "14";
 comments[7] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[8]= "9)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[8]= new Array();
 choices[8][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[8][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[8][2] = "Ninguna es correcta.";
 choices[8][3] = "A y B son correctas.";
 answers[8] = choices[8][0];
 units[8] = "14";
 comments[8] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[9]= new Array();
 choices[9][0] = "Programa de Educaci&oacute;n Digital";
 choices[9][1] = "Programa de Salud y Bienestar Social";
 choices[9][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[9][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[9] = choices[9][3];
 units[9] = "19";
 comments[9] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[10]= "11)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[10][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[10][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[10][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[10] = choices[10][1];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 843. Ley 40/2015";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[11]= new Array();
 choices[11][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[11][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[11][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[11][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[12]= new Array();
 choices[12][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[12][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[12][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[12][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[12] = choices[12][2];
 units[12] = "10";
 comments[12] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[13]= new Array();
 choices[13][0] = "La Comisi&oacute;n Permanente.";
 choices[13][1] = "El Presidente.";
 choices[13][2] = "El Pleno.";
 choices[13][3] = "El Vicepresidente.";
 answers[13] = choices[13][3];
 units[13] = "1";
 comments[13] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[14]= new Array();
 choices[14][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[14][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[14][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[14][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[14] = choices[14][0];
 units[14] = "1";
 comments[14] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[15]= new Array();
 choices[15][0] = "PostgreSQL";
 choices[15][1] = "Datawarehouse";
 choices[15][2] = "Snowflake";
 choices[15][3] = "CouchDB";
 answers[15] = choices[15][0];
 units[15] = "61";
 comments[15] = "Id Pregunta: 576. Tema 61. TAI 2016.";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[16]= "17)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[16]= new Array();
 choices[16][0] = "Ejecutivo";
 choices[16][1] = "Limitativo";
 choices[16][2] = "Estimativo";
 choices[16][3] = "Progresivo";
 answers[16] = choices[16][2];
 units[16] = "10";
 comments[16] = "Id Pregunta: 446. PRESUPUESTOS GENERALES";


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[17]= "18)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[17]= new Array();
 choices[17][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[17][1] = "Anteriormente se denominaba Sonar.";
 choices[17][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[17][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[17] = choices[17][2];
 units[17] = "92";
 comments[17] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[18]= "19)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[18]= new Array();
 choices[18][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[18][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[18][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[18][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[18] = choices[18][3];
 units[18] = "5";
 comments[18] = "Id Pregunta: 374. UNION EUROPEA";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[19]= "20)  La recusaci&oacute;n pueden promoverla...";
 choices[19]= new Array();
 choices[19][0] = "Cualquier &oacute;rgano";
 choices[19][1] = "El interesado";
 choices[19][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[19][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[19] = choices[19][0];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[20]= "21)  Big Data:";
 choices[20]= new Array();
 choices[20][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[20][1] = "No puede emplearse para tratar datos no estructurados";
 choices[20][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = choices[20][3];
 units[20] = "73";
 comments[20] = "Id Pregunta: 109. ";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[21]= new Array();
 choices[21][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[21][1] = "Entrada en la Uni&oacute;n Europea";
 choices[21][2] = "Pactos de la Moncloa";
 choices[21][3] = "Ingreso en la ONU";
 answers[21] = choices[21][3];
 units[21] = "12";
 comments[21] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[22]= "23)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[22]= new Array();
 choices[22][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[22][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[22][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[22][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[22] = choices[22][1];
 units[22] = "35";
 comments[22] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[23]= new Array();
 choices[23][0] = "El BCE";
 choices[23][1] = "El Parlamento";
 choices[23][2] = "El Consejo";
 choices[23][3] = "La Comisi&oacute;n";
 answers[23] = choices[23][3];
 units[23] = "17";
 comments[23] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[24]= "25)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[24]= new Array();
 choices[24][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[24][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[24][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[24][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[24] = choices[24][1];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[25]= new Array();
 choices[25][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[25][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[25][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[25][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[25] = choices[25][3];
 units[25] = "78";
 comments[25] = "Id Pregunta: 47. AGE A1 2015";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[26]= "27)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[26]= new Array();
 choices[26][0] = "Tres a&ntilde;os.";
 choices[26][1] = "Dos a&ntilde;os y medio.";
 choices[26][2] = "Cinco a&ntilde;os.";
 choices[26][3] = "Seis a&ntilde;os.";
 answers[26] = choices[26][3];
 units[26] = "5";
 comments[26] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[27]= "28)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[27][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[27][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[27][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[27] = choices[27][0];
 units[27] = "19";
 comments[27] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[28]= "29)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[28]= new Array();
 choices[28][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[28][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[28][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[28][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[28] = choices[28][3];
 units[28] = "26";
 comments[28] = "Id Pregunta: 550. Gobernanza TIC";


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[29]= new Array();
 choices[29][0] = "Las Cortes Generales.";
 choices[29][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[29][2] = "El Gobierno.";
 choices[29][3] = "El Congreso de los Diputados.";
 answers[29] = choices[29][0];
 units[29] = "10";
 comments[29] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[30]= "31)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[30]= new Array();
 choices[30][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[30][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[30][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[30][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[30] = choices[30][2];
 units[30] = "22";
 comments[30] = "Id Pregunta: 705. &Eacute;tica p&uacute;blica";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[31]= new Array();
 choices[31][0] = "Art. 13, L.O.3/2007.";
 choices[31][1] = "Art. 14, L.O.3/2007.";
 choices[31][2] = "Art. 11, L.O.3/2007.";
 choices[31][3] = "Ninguna es correcta.";
 answers[31] = choices[31][2];
 units[31] = "14";
 comments[31] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[32]= "33)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[32]= new Array();
 choices[32][0] = "Ejecuci&oacute;n";
 choices[32][1] = "Adjudicaci&oacute;n";
 choices[32][2] = "Licitaci&oacute;n";
 choices[32][3] = "Formalizaci&oacute;n";
 answers[32] = choices[32][3];
 units[32] = "37";
 comments[32] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[33]= "34)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[33]= new Array();
 choices[33][0] = "El derecho a la propiedad privada.";
 choices[33][1] = "El derecho de asociaci&oacute;n.";
 choices[33][2] = "El derecho de fundaci&oacute;n.";
 choices[33][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[33] = choices[33][1];
 units[33] = "1";
 comments[33] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[34]= new Array();
 choices[34][0] = "Un diputado y un senador, cada una de ellas";
 choices[34][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[34][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[34][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 192. CONSTITUCION1978";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[35]= "36)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[35]= new Array();
 choices[35][0] = "P&uacute;blica.";
 choices[35][1] = "Privada.";
 choices[35][2] = "A y B son correctas.";
 choices[35][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[35] = choices[35][2];
 units[35] = "14";
 comments[35] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 617 Año de creación de pregunta: 2016
 questions[36]= "37)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[36]= new Array();
 choices[36][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[36][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[36][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[36][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[36] = choices[36][0];
 units[36] = "84";
 comments[36] = "Id Pregunta: 617. Junta de Extremadura A1 2015";


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[37]= new Array();
 choices[37][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[37][1] = "Intervenci&oacute;n formal y material.";
 choices[37][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[37][3] = "Intervenci&oacute;n formal y general.";
 answers[37] = choices[37][1];
 units[37] = "10";
 comments[37] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[38]= "39)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[38]= new Array();
 choices[38][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[38][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[38][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[38][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[38] = choices[38][2];
 units[38] = "14";
 comments[38] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[39]= "40)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[39]= new Array();
 choices[39][0] = "la Administraci&oacute;n General del Estado";
 choices[39][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[39][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[39][3] = "el sector p&uacute;blico y privado institucional";
 answers[39] = choices[39][3];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 763. Ley 40/2015";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[40]= new Array();
 choices[40][0] = "Al menos cada 12 meses";
 choices[40][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[40][2] = "Al menos cada 18 meses";
 choices[40][3] = "Al menos cada 24 meses";
 answers[40] = choices[40][3];
 units[40] = "77";
 comments[40] = "Id Pregunta: 685. Art&iacute;culo 20 del Reglamento 910/2014";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[41]= new Array();
 choices[41][0] = "Art&iacute;culo 16.2.";
 choices[41][1] = "Art&iacute;culo 17.1.";
 choices[41][2] = "Art&iacute;culo 18.1.";
 choices[41][3] = "Art&iacute;culo 18.2.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[42]= new Array();
 choices[42][0] = "Cuatro.";
 choices[42][1] = "Ninguno.";
 choices[42][2] = "Dos.";
 choices[42][3] = "Seis.";
 answers[42] = choices[42][2];
 units[42] = "1";
 comments[42] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[43]= new Array();
 choices[43][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[43][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[43][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[43][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[43] = choices[43][0];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 847. Ley 40/2015";


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


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[45]= "46)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[45]= new Array();
 choices[45][0] = "Medidas de igualdad.";
 choices[45][1] = "Objetivos de igualdad.";
 choices[45][2] = "Ambas son correctas.";
 choices[45][3] = "A y B son incorrectas.";
 answers[45] = choices[45][2];
 units[45] = "14";
 comments[45] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[46]= "47)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[46]= new Array();
 choices[46][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[46][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[46][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[46][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[46] = choices[46][1];
 units[46] = "7";
 comments[46] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[47]= "48)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Un informe de impacto de g&eacute;nero.";
 choices[47][1] = "Un programa de igualdad de oportunidades.";
 choices[47][2] = "Un plan de Igualdad de Oportunidades.";
 choices[47][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[47] = choices[47][0];
 units[47] = "14";
 comments[47] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[48]= "49)  LA estructura de la Estrategia TIC:";
 choices[48]= new Array();
 choices[48][0] = "5 principios rectores, 7 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[48][1] = "5 principios rectores, 5 principios estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[48][2] = "5 principios rectores, 5 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[48][3] = "5 principios rectores, 6 principios estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[48] = choices[48][2];
 units[48] = "28";
 comments[48] = "Id Pregunta: 738. Estrategia TIC";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[49]= "50)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[49]= new Array();
 choices[49][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[49][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[49][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[49][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[49] = choices[49][1];
 units[49] = "19";
 comments[49] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[50]= "51)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[50]= new Array();
 choices[50][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[50][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[50][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[50][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[50] = choices[50][1];
 units[50] = "14";
 comments[50] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[51]= "52)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[51]= new Array();
 choices[51][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[51][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[51][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[51][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[51] = choices[51][2];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[52]= "53)  El pacto fiscal europeo de 2012 incluye:";
 choices[52]= new Array();
 choices[52][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[52][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[52][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[52][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[52] = choices[52][0];
 units[52] = "5";
 comments[52] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[53]= "54)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[53]= new Array();
 choices[53][0] = "La Ley General Tributaria.";
 choices[53][1] = "La Ley Presupuestaria.";
 choices[53][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[53][3] = "Ninguna de las respuestas es correcta.";
 answers[53] = choices[53][0];
 units[53] = "10";
 comments[53] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[54]= new Array();
 choices[54][0] = "El 5 de Octubre de 2015";
 choices[54][1] = "El 15 de Octubre de 2015";
 choices[54][2] = "El 15 de Septiembre de 2015";
 choices[54][3] = "El 2 de Octubre de 2015";
 answers[54] = choices[54][2];
 units[54] = "19";
 comments[54] = "Id Pregunta: 582. Estrategia TIC";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[55]= new Array();
 choices[55][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[55][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[55][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[55][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[55] = choices[55][1];
 units[55] = "5";
 comments[55] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[56]= "57)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[56]= new Array();
 choices[56][0] = "Los ocupados y los parados activos";
 choices[56][1] = "S&oacute;lo los ocupados";
 choices[56][2] = "Los ocupados y los inactivos";
 choices[56][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[56] = choices[56][0];
 units[56] = "12";
 comments[56] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[57]= "58)  El sector p&uacute;blico institucional se integra por:";
 choices[57]= new Array();
 choices[57][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[57][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[57][2] = "las Universidades p&uacute;blicas";
 choices[57][3] = "todas son correctas";
 answers[57] = choices[57][3];
 units[57] = "7";
 comments[57] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[58]= "59)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[58]= new Array();
 choices[58][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[58][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[58][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[58][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[58] = choices[58][1];
 units[58] = "7";
 comments[58] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[59]= "60)  Se&ntilde;ala la correcta:";
 choices[59]= new Array();
 choices[59][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[59][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[59][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[59][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[59] = choices[59][1];
 units[59] = "7";
 comments[59] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[60]= "61)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[60]= new Array();
 choices[60][0] = "X.";
 choices[60][1] = "XIX.";
 choices[60][2] = "XV.";
 choices[60][3] = "XIII.";
 answers[60] = choices[60][1];
 units[60] = "5";
 comments[60] = "Id Pregunta: 327. UNION EUROPEA";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[61]= "62)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[61]= new Array();
 choices[61][0] = "El rey, a propuesta del Gobierno.";
 choices[61][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[61][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[61][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[61] = choices[61][1];
 units[61] = "1";
 comments[61] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la respuesta falsa:";
 choices[62]= new Array();
 choices[62][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[62][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[62][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[62][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[62] = choices[62][2];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[63]= "64)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[63]= new Array();
 choices[63][0] = "La Ley Org&aacute;nica 2/2011";
 choices[63][1] = "La Ley Org&aacute;nica 2/2012";
 choices[63][2] = "La Ley Org&aacute;nica 3/2012";
 choices[63][3] = "La Ley Org&aacute;nica 2/2002";
 answers[63] = choices[63][1];
 units[63] = "12";
 comments[63] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[64]= "65)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[64]= new Array();
 choices[64][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[64][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[64][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[64][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[64] = choices[64][1];
 units[64] = "63";
 comments[64] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[65]= "66)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[65]= new Array();
 choices[65][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[65][1] = "La libertad sexual y religiosa.";
 choices[65][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[65][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[65] = choices[65][3];
 units[65] = "1";
 comments[65] = "Id Pregunta: 254. CONSTITUCION1978";


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[66]= "67)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[66]= new Array();
 choices[66][0] = "Los cr&eacute;ditos";
 choices[66][1] = "Las partidas presupuestarias";
 choices[66][2] = "Los derechos";
 choices[66][3] = "Las obligaciones";
 answers[66] = choices[66][2];
 units[66] = "10";
 comments[66] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[67]= "68)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[67]= new Array();
 choices[67][0] = "0";
 choices[67][1] = "1";
 choices[67][2] = "Tantos como peticiones concurrentes tenga.";
 choices[67][3] = "Tantos como le permita la memoria de la JVM.";
 answers[67] = choices[67][1];
 units[67] = "64";
 comments[67] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[68]= "69)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[68]= new Array();
 choices[68][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[68][1] = "1 de enero de 2015";
 choices[68][2] = "1 de enero de 2016";
 choices[68][3] = "1 de julio de 2016";
 answers[68] = choices[68][3];
 units[68] = "77";
 comments[68] = "Id Pregunta: 689. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[69]= "70)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[69]= new Array();
 choices[69][0] = "A nivel de art&iacute;culo.";
 choices[69][1] = "A nivel de cap&iacute;tulo.";
 choices[69][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[69][3] = "A nivel de concepto.";
 answers[69] = choices[69][2];
 units[69] = "10";
 comments[69] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Lollipop";
 choices[70][1] = "Jelly Bean";
 choices[70][2] = "Marshmallow";
 choices[70][3] = "KitKat";
 answers[70] = choices[70][2];
 units[70] = "59";
 comments[70] = "Id Pregunta: 61. AGE A1 2015";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[71]= "72)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[71]= new Array();
 choices[71][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[71][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[71][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[71][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[71] = choices[71][1];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[72]= "73)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[72]= new Array();
 choices[72][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[72][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[72][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[72][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[72] = choices[72][0];
 units[72] = "1";
 comments[72] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[73]= "74)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[73]= new Array();
 choices[73][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[73][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[73][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[73][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[73] = choices[73][2];
 units[73] = "43";
 comments[73] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[74]= "75)  El Tribunal de Justicia est&aacute; formado por:";
 choices[74]= new Array();
 choices[74][0] = "Un Juez de cada Estado miembro.";
 choices[74][1] = "Por dos Jueces de cada Estado miembro.";
 choices[74][2] = "Por veinte Jueces.";
 choices[74][3] = "Por ocho Jueces.";
 answers[74] = choices[74][0];
 units[74] = "5";
 comments[74] = "Id Pregunta: 322. UNION EUROPEA";


