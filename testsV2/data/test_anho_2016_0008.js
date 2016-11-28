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

//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[0]= "1)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[0]= new Array();
 choices[0][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[0][1] = "Anteriormente se denominaba Sonar.";
 choices[0][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[0][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[0] = choices[0][2];
 units[0] = "92";
 comments[0] = "Id Pregunta: 717. INTEGRACION CONTINUA";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[1]= "2)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[1]= new Array();
 choices[1][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[1][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[1][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[1][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[1] = choices[1][1];
 units[1] = "7";
 comments[1] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[2]= "3)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[2]= new Array();
 choices[2][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[2][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[2][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[2][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[3]= "4)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[3][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[3][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[3][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[3] = choices[3][2];
 units[3] = "1";
 comments[3] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[4]= new Array();
 choices[4][0] = "Publicidad.";
 choices[4][1] = "Constituci&oacute;n.";
 choices[4][2] = "Legalidad.";
 choices[4][3] = "Creaci&oacute;n.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 215. CONSTITUCION1978";


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[5]= new Array();
 choices[5][0] = "Las Cortes Generales.";
 choices[5][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[5][2] = "El Gobierno.";
 choices[5][3] = "El Congreso de los Diputados.";
 answers[5] = choices[5][0];
 units[5] = "10";
 comments[5] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[6]= new Array();
 choices[6][0] = "Tres meses.";
 choices[6][1] = "Nueve meses.";
 choices[6][2] = "Cuatro meses.";
 choices[6][3] = "Seis meses.";
 answers[6] = choices[6][0];
 units[6] = "10";
 comments[6] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[7]= "8)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[7]= new Array();
 choices[7][0] = "B&aacute;sico, medio y alto";
 choices[7][1] = "D&eacute;bil y fuerte";
 choices[7][2] = "Bajo, medio y alto";
 choices[7][3] = "Bajo, sustancial y alto";
 answers[7] = choices[7][3];
 units[7] = "77";
 comments[7] = "Id Pregunta: 686. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[8]= "9)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[8]= new Array();
 choices[8][0] = "Los ocupados y los parados activos";
 choices[8][1] = "S&oacute;lo los ocupados";
 choices[8][2] = "Los ocupados y los inactivos";
 choices[8][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[8] = choices[8][0];
 units[8] = "12";
 comments[8] = "Id Pregunta: 566. Modelo econ&oacute;mico";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[9]= new Array();
 choices[9][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[9][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[9][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[9][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[9] = choices[9][0];
 units[9] = "75";
 comments[9] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[10]= "11)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[10]= new Array();
 choices[10][0] = "Clustering";
 choices[10][1] = "Deduplicaci&oacute;n";
 choices[10][2] = "Virtualizaci&oacute;n";
 choices[10][3] = "Contenerizaci&oacute;n";
 answers[10] = choices[10][2];
 units[10] = "124";
 comments[10] = "Id Pregunta: 98. AGE A1 2015";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[11]= new Array();
 choices[11][0] = "Burn-up chart";
 choices[11][1] = "Arquitectural Skype";
 choices[11][2] = "Burn-down chart";
 choices[11][3] = "Definition of done";
 answers[11] = choices[11][1];
 units[11] = "34, 84";
 comments[11] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[12]= "13)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[12]= new Array();
 choices[12][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[12][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[12][2] = "Las Inspecciones Generales de los Servicios";
 choices[12][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[12] = choices[12][1];
 units[12] = "75";
 comments[12] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[13]= "14)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[13]= new Array();
 choices[13][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[13][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[13][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[13][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[13] = choices[13][3];
 units[13] = "12";
 comments[13] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[14]= "15)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[14]= new Array();
 choices[14][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[14][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[14][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[14][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[14] = choices[14][0];
 units[14] = "14";
 comments[14] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[15]= "16)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[15]= new Array();
 choices[15][0] = "Presentar la moci&oacute;n de censura.";
 choices[15][1] = "Presidir las sesiones del Parlamento.";
 choices[15][2] = "Organizar la Secretar&iacute;a General.";
 choices[15][3] = "Preparar las actividades de las Comisiones.";
 answers[15] = choices[15][1];
 units[15] = "5";
 comments[15] = "Id Pregunta: 367. UNION EUROPEA";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[16]= "17)  Los Reglamentos no se caracterizan por:";
 choices[16]= new Array();
 choices[16][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[16][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[16][2] = "Ser obligatorios.";
 choices[16][3] = "No poseer alcance general.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[17]= "18)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[17]= new Array();
 choices[17][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[17][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[17][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[17][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[17] = choices[17][2];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[18]= "19)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[18]= new Array();
 choices[18][0] = "formular solicitudes";
 choices[18][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[18][2] = "presentar declaraciones responsables o comunicaciones";
 choices[18][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[18] = choices[18][1];
 units[18] = "7";
 comments[18] = "Id Pregunta: 531. LEY 39/2015";


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[19]= "20)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[19]= new Array();
 choices[19][0] = "Ejecutivo";
 choices[19][1] = "Limitativo";
 choices[19][2] = "Estimativo";
 choices[19][3] = "Progresivo";
 answers[19] = choices[19][2];
 units[19] = "10";
 comments[19] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[20]= "21)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[20][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[20][2] = "b) y d) son verdaderas";
 choices[20][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[20] = choices[20][1];
 units[20] = "18, 20";
 comments[20] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[21]= new Array();
 choices[21][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[21][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[21][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[21][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[21] = choices[21][3];
 units[21] = "22";
 comments[21] = "Id Pregunta: 120. ";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[22]= new Array();
 choices[22][0] = "SPARQL";
 choices[22][1] = "UnQL";
 choices[22][2] = "XQUERY";
 choices[22][3] = "RQL";
 answers[22] = choices[22][0];
 units[22] = "74";
 comments[22] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[23]= new Array();
 choices[23][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[23][1] = "Pasivos financieros y transferencias de capital.";
 choices[23][2] = "Activos financieros y pasivos financieros.";
 choices[23][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[23] = choices[23][2];
 units[23] = "10";
 comments[23] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[24]= new Array();
 choices[24][0] = "Dos Cap&iacute;tulos.";
 choices[24][1] = "Tres Cap&iacute;tulos.";
 choices[24][2] = "Un Cap&iacute;tulo.";
 choices[24][3] = "Cuatro Cap&iacute;tulos.";
 answers[24] = choices[24][1];
 units[24] = "1";
 comments[24] = "Id Pregunta: 222. CONSTITUCION1978";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[25]= "26)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[25]= new Array();
 choices[25][0] = "Transparencia e innovaci&oacute;n";
 choices[25][1] = "Seguridad y reutilizaci&oacute;n";
 choices[25][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[25][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[25] = choices[25][3];
 units[25] = "28";
 comments[25] = "Id Pregunta: 743. Estrategia TIC";


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[26]= new Array();
 choices[26][0] = "Cuatro.";
 choices[26][1] = "Ninguno.";
 choices[26][2] = "Dos.";
 choices[26][3] = "Seis.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 211. CONSTITUCION1978";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[27]= "28)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[27]= new Array();
 choices[27][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[27][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[27][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[27][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[27] = choices[27][1];
 units[27] = "18, 20";
 comments[27] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[28]= new Array();
 choices[28][0] = "Maximizar el valor para los clientes";
 choices[28][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[28][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[28][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[28] = choices[28][3];
 units[28] = "34";
 comments[28] = "Id Pregunta: 718. Metodologias Lean";


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[29]= "30)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[29]= new Array();
 choices[29][0] = "Veinticinco.";
 choices[29][1] = "Veintiuno.";
 choices[29][2] = "Dieciocho.";
 choices[29][3] = "Diecinueve.";
 answers[29] = choices[29][0];
 units[29] = "5";
 comments[29] = "Id Pregunta: 325. UNION EUROPEA";


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[30]= new Array();
 choices[30][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[30][1] = "Auditor&iacute;a operativa.";
 choices[30][2] = "Auditor&iacute;a de cumplimiento.";
 choices[30][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[30] = choices[30][2];
 units[30] = "10";
 comments[30] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[31]= "32)  Son bases de datos NoSQL:";
 choices[31]= new Array();
 choices[31][0] = "MongoDB y Maria DB";
 choices[31][1] = "HBase y Dynamo";
 choices[31][2] = "MariaDB, Cassandra y BigTable";
 choices[31][3] = "La A) y la C)";
 answers[31] = choices[31][1];
 units[31] = "73";
 comments[31] = "Id Pregunta: 104. ";


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[32]= new Array();
 choices[32][0] = "Estimaci&oacute;n del riesgo";
 choices[32][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[32][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[32][3] = "Mapa de riesgos";
 answers[32] = choices[32][3];
 units[32] = "45";
 comments[32] = "Id Pregunta: 85. AGE A1 2015";


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[33]= "34)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[33]= new Array();
 choices[33][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[33][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[33][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[33][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[33] = choices[33][2];
 units[33] = "10";
 comments[33] = "Id Pregunta: 495. PRESUPUESTOS GENERALES";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[34]= new Array();
 choices[34][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[34][1] = "Intervenci&oacute;n formal y material.";
 choices[34][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[34][3] = "Intervenci&oacute;n formal y general.";
 answers[34] = choices[34][1];
 units[34] = "10";
 comments[34] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[35]= "36)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[35]= new Array();
 choices[35][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[35][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[35][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[35][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[35] = choices[35][2];
 units[35] = "7";
 comments[35] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[36]= new Array();
 choices[36][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[36][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[36][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[36][3] = "Ninguna de las anteriores.";
 answers[36] = choices[36][1];
 units[36] = "92";
 comments[36] = "Id Pregunta: 701. INTEGRACION CONTINUA";


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[37]= "38)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[37]= new Array();
 choices[37][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[37][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[37][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[37][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[37] = choices[37][3];
 units[37] = "77";
 comments[37] = "Id Pregunta: 48. AGE A1 2015";


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[38]= "39)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[38]= new Array();
 choices[38][0] = "Al Presidente del Gobierno.";
 choices[38][1] = "A las Cortes Generales";
 choices[38][2] = "A los electores.";
 choices[38][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[38] = choices[38][3];
 units[38] = "1";
 comments[38] = "Id Pregunta: 196. CONSTITUCION1978";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[39]= new Array();
 choices[39][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[39][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[39][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[39][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[39] = choices[39][0];
 units[39] = "19";
 comments[39] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[40]= "41)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[40]= new Array();
 choices[40][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[40][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[40][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[40][3] = "todas son correctas";
 answers[40] = choices[40][3];
 units[40] = "7";
 comments[40] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[41]= new Array();
 choices[41][0] = "La Seguridad Social";
 choices[41][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[41][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[41][3] = "El Banco de Espa&ntilde;a";
 answers[41] = choices[41][3];
 units[41] = "15";
 comments[41] = "Id Pregunta: 113. ";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[42]= "43)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[42]= new Array();
 choices[42][0] = "De ocho a&ntilde;os.";
 choices[42][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[42][2] = "Ambas son correctas.";
 choices[42][3] = "No existe un l&iacute;mite.";
 answers[42] = choices[42][0];
 units[42] = "14";
 comments[42] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[43]= new Array();
 choices[43][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[43][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[43][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[43][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[43] = choices[43][1];
 units[43] = "43";
 comments[43] = "Id Pregunta: 444. SERVICIOS COMUNES";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[44]= "45)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[44]= new Array();
 choices[44][0] = "por Real Decreto";
 choices[44][1] = "reglamentariamente";
 choices[44][2] = "mediante Ley";
 choices[44][3] = "ninguna es correcta";
 answers[44] = choices[44][1];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[45]= "46)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[45]= new Array();
 choices[45][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[45][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[45][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[45][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[45] = choices[45][1];
 units[45] = "19";
 comments[45] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[46]= "47)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[46]= new Array();
 choices[46][0] = "Integrar la estrategia TIC con la de negocio";
 choices[46][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[46][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[46][3] = "Todas las anteriores";
 answers[46] = choices[46][3];
 units[46] = "26";
 comments[46] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[47]= "48)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Anualmente.";
 choices[47][1] = "Ninguna de las respuestas es correcta.";
 choices[47][2] = "Trimestralmente.";
 choices[47][3] = "Semestralmente.";
 answers[47] = choices[47][0];
 units[47] = "10";
 comments[47] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[48]= "49)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[48]= new Array();
 choices[48][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[48][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[48][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[48][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[48] = choices[48][2];
 units[48] = "53";
 comments[48] = "Id Pregunta: 65. AGE A1 2015";


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[49]= new Array();
 choices[49][0] = "A la CETIC";
 choices[49][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[49][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[49][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[49] = choices[49][3];
 units[49] = "19";
 comments[49] = "Id Pregunta: 582. Estrategia TIC";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[50]= "51)  El Parlamento Europeo celebrar&aacute;:";
 choices[50]= new Array();
 choices[50][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[50][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[50][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[50][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[50] = choices[50][0];
 units[50] = "5";
 comments[50] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[51]= "52)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[51]= new Array();
 choices[51][0] = "tienen capacidad de obrar limitada";
 choices[51][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[51][2] = "no tienen capacidad de obrar";
 choices[51][3] = "ninguna es correcta";
 answers[51] = choices[51][2];
 units[51] = "7";
 comments[51] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[52]= "53)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[52]= new Array();
 choices[52][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[52][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[52][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[52][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[52] = choices[52][1];
 units[52] = "92";
 comments[52] = "Id Pregunta: 715. INTEGRACION CONTINUA";


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[53]= "54)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[53][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[53][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[53][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[53] = choices[53][3];
 units[53] = "14";
 comments[53] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[54]= "55)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[54]= new Array();
 choices[54][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[54][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[54][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[54][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[54] = choices[54][0];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[55]= "56)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[55]= new Array();
 choices[55][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[55][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[55][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[55][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[55] = choices[55][2];
 units[55] = "28";
 comments[55] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[56]= new Array();
 choices[56][0] = "Selenium";
 choices[56][1] = "JUnit";
 choices[56][2] = "Jenkins";
 choices[56][3] = "JMeter";
 answers[56] = choices[56][2];
 units[56] = "92";
 comments[56] = "Id Pregunta: 703. INTEGRACION CONTINUA";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[57]= new Array();
 choices[57][0] = "SessionBean";
 choices[57][1] = "JavaBean";
 choices[57][2] = "MBeans";
 choices[57][3] = "MessageDrivenBean";
 answers[57] = choices[57][2];
 units[57] = "64";
 comments[57] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[58]= "59)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[58]= new Array();
 choices[58][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[58][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[58][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[58][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[58] = choices[58][0];
 units[58] = "14";
 comments[58] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[59]= new Array();
 choices[59][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[59][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[59][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[59][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[59] = choices[59][0];
 units[59] = "84";
 comments[59] = "Id Pregunta: 619. Junta de Extremadura A1 2015";


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[60]= "61)  Son bases de datos NoSQL orientadas a objetos:";
 choices[60]= new Array();
 choices[60][0] = "GemStone";
 choices[60][1] = "Zope Object DB";
 choices[60][2] = "Las dos anteriores";
 choices[60][3] = "Solo B)";
 answers[60] = choices[60][2];
 units[60] = "73";
 comments[60] = "Id Pregunta: 107. ";


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[61]= "62)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[61]= new Array();
 choices[61][0] = "Ley org&aacute;nica.";
 choices[61][1] = "Ley ordinaria.";
 choices[61][2] = "Ley de bases.";
 choices[61][3] = "Ley marco.";
 answers[61] = choices[61][0];
 units[61] = "1";
 comments[61] = "Id Pregunta: 271. CONSTITUCION1978";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[62]= "63)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[62]= new Array();
 choices[62][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[62][1] = "Clasificaci&oacute;n por cuenta.";
 choices[62][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[62][3] = "Clasificaci&oacute;n por intercambio.";
 answers[62] = choices[62][3];
 units[62] = "56";
 comments[62] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[63]= "64)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[63]= new Array();
 choices[63][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[63][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[63][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[63][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[63] = choices[63][2];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[64]= new Array();
 choices[64][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[64][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[64][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[64][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[64] = choices[64][2];
 units[64] = "85";
 comments[64] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[65]= "66)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[65]= new Array();
 choices[65][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[65][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[65][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[65][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[65] = choices[65][2];
 units[65] = "57";
 comments[65] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[66]= "67)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[66]= new Array();
 choices[66][0] = "Las sociedades mercantiles estatales.";
 choices[66][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[66][2] = "Las respuestas a) y b) son correctas.";
 choices[66][3] = "Las respuestas a) y b) no son correctas.";
 answers[66] = choices[66][2];
 units[66] = "10";
 comments[66] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[67]= "68)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[67]= new Array();
 choices[67][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[67][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[67][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[67][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[67] = choices[67][3];
 units[67] = "7";
 comments[67] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[68]= "69)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[68]= new Array();
 choices[68][0] = "Cuatro.";
 choices[68][1] = "Una.";
 choices[68][2] = "Cinco.";
 choices[68][3] = "Nueve.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 268. CONSTITUCION1978";


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[69]= new Array();
 choices[69][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[69][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[69][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[69][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[70]= "71)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[70]= new Array();
 choices[70][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[70][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[70][2] = "Cinco a&ntilde;os.";
 choices[70][3] = "Ninguna es correcta.";
 answers[70] = choices[70][2];
 units[70] = "5";
 comments[70] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[71]= "72)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[71]= new Array();
 choices[71][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[71][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[71][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[71][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[71] = choices[71][2];
 units[71] = "43";
 comments[71] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[72]= new Array();
 choices[72][0] = "DoS";
 choices[72][1] = "Phishing";
 choices[72][2] = "Sniffing";
 choices[72][3] = "Spoofing";
 answers[72] = choices[72][3];
 units[72] = "119";
 comments[72] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[73]= new Array();
 choices[73][0] = "El Parlamento y el Consejo.";
 choices[73][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[73][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[73][3] = "La Comisi&oacute;n y el Consejo.";
 answers[73] = choices[73][2];
 units[73] = "5";
 comments[73] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[74]= "75)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[74]= new Array();
 choices[74][0] = "El Instituto de la Mujer.";
 choices[74][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[74][2] = "Ambas son correctas.";
 choices[74][3] = "A y B son incorrectas.";
 answers[74] = choices[74][2];
 units[74] = "14";
 comments[74] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


