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

//  Id pregunta: 10563 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[0]= new Array();
 choices[0][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[0][1] = "Excesiva estabilidad de empleo";
 choices[0][2] = "An&eacute;mico crecimiento de la productividad";
 choices[0][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[0] = choices[0][1];
 units[0] = "12";
 comments[0] = "Id Pregunta: 10563. Modelo econ&oacute;mico";


//  Id pregunta: 10247 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[1]= new Array();
 choices[1][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[1][1] = "Por Orden Ministerial.";
 choices[1][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[1][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 10247. CONSTITUCION1978";


//  Id pregunta: 10125 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[2]= new Array();
 choices[2][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[2][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[2][2] = "La protecci&oacute;n del medio ambiente.";
 choices[2][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[2] = choices[2][0];
 units[2] = "22";
 comments[2] = "Id Pregunta: 10125. ";


//  Id pregunta: 10028 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[3]= new Array();
 choices[3][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[3][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[3][2] = "Crea una copia del proceso que hace la llamada.";
 choices[3][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[3] = choices[3][2];
 units[3] = "57";
 comments[3] = "Id Pregunta: 10028. AGE A1 2015";


//  Id pregunta: 10110 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  La Poblaci&oacute;n Activa incluye a:";
 choices[4]= new Array();
 choices[4][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[4][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[4][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[4][3] = "Todo aquel que desea trabajar";
 answers[4] = choices[4][2];
 units[4] = "15";
 comments[4] = "Id Pregunta: 10110. ";


//  Id pregunta: 10093 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[5]= new Array();
 choices[5][0] = "Almacenamiento orientado a columnas";
 choices[5][1] = "Framework MapReduce";
 choices[5][2] = "OLTP";
 choices[5][3] = "Bases de datos clave-valor";
 answers[5] = choices[5][2];
 units[5] = "73";
 comments[5] = "Id Pregunta: 10093. AGE A1 2015";


//  Id pregunta: 10124 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[6]= new Array();
 choices[6][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[6][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[6][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[6][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[6] = choices[6][0];
 units[6] = "22";
 comments[6] = "Id Pregunta: 10124. ";


//  Id pregunta: 10592 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[7]= new Array();
 choices[7][0] = "Anualmente";
 choices[7][1] = "Bienalmente";
 choices[7][2] = "Cada cuatro a&ntilde;os";
 choices[7][3] = "No se define ninguna periodicidad";
 answers[7] = choices[7][1];
 units[7] = "19";
 comments[7] = "Id Pregunta: 10592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 10525 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[8][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[8][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[8][3] = "cualquiera que sea el estado del procedimiento";
 answers[8] = choices[8][3];
 units[8] = "7";
 comments[8] = "Id Pregunta: 10525. LEY 39/2015";


//  Id pregunta: 10191 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[9]= new Array();
 choices[9][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[9][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[9][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[9][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[9] = choices[9][2];
 units[9] = "1";
 comments[9] = "Id Pregunta: 10191. CONSTITUCION1978";


//  Id pregunta: 10415 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[10]= new Array();
 choices[10][0] = "Un informe de g&eacute;nero.";
 choices[10][1] = "La variable de sexo.";
 choices[10][2] = "La variable de edad.";
 choices[10][3] = "La variable de comportamiento.";
 answers[10] = choices[10][1];
 units[10] = "14";
 comments[10] = "Id Pregunta: 10415. POLITICAS DE IGUALDAD";


//  Id pregunta: 10459 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[11]= new Array();
 choices[11][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[11][1] = "Pasivos financieros y transferencias de capital.";
 choices[11][2] = "Activos financieros y pasivos financieros.";
 choices[11][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[11] = choices[11][2];
 units[11] = "10";
 comments[11] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10475 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Anualmente.";
 choices[12][1] = "Ninguna de las respuestas es correcta.";
 choices[12][2] = "Trimestralmente.";
 choices[12][3] = "Semestralmente.";
 answers[12] = choices[12][0];
 units[12] = "10";
 comments[12] = "Id Pregunta: 10475. PRESUPUESTOS GENERALES";


//  Id pregunta: 10129 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[13]= new Array();
 choices[13][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[13][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[13][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[13][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[13] = choices[13][2];
 units[13] = "22";
 comments[13] = "Id Pregunta: 10129. ";


//  Id pregunta: 10147 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[14]= new Array();
 choices[14][0] = "Al Gobierno de la naci&oacute;n";
 choices[14][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[14][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[14][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[14] = choices[14][3];
 units[14] = "7";
 comments[14] = "Id Pregunta: 10147. Ley 39/2015, Art&iacute;culo 128";


//  Id pregunta: 10227 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[15]= new Array();
 choices[15][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[15][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[15][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[15][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[15] = choices[15][3];
 units[15] = "1";
 comments[15] = "Id Pregunta: 10227. CONSTITUCION1978";


//  Id pregunta: 10676 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[16]= new Array();
 choices[16][0] = "El servicio de teleasistencia.";
 choices[16][1] = "El servicio de ayuda a domicilio.";
 choices[16][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[16][3] = "Todas las anteriores son correctas.";
 answers[16] = choices[16][3];
 units[16] = "14";
 comments[16] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10019 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[17]= new Array();
 choices[17][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[17][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[17][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[17][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[17] = choices[17][2];
 units[17] = "47";
 comments[17] = "Id Pregunta: 10019. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10533 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[18]= new Array();
 choices[18][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[18][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[18][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[18][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[18] = choices[18][1];
 units[18] = "7";
 comments[18] = "Id Pregunta: 10533. LEY 39/2015";


//  Id pregunta: 10084 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[19]= new Array();
 choices[19][0] = "Interchange of Data between Administrations (IDA)";
 choices[19][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[19][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[19][3] = "Interoperability Electronic European Solution (IEES)";
 answers[19] = choices[19][1];
 units[19] = "43";
 comments[19] = "Id Pregunta: 10084. AGE A1 2015";


//  Id pregunta: 10253 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[20]= new Array();
 choices[20][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[20][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[20][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[20][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[20] = choices[20][3];
 units[20] = "1";
 comments[20] = "Id Pregunta: 10253. CONSTITUCION1978";


//  Id pregunta: 10483 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[21]= new Array();
 choices[21][0] = "180 art&iacute;culos.";
 choices[21][1] = "182 art&iacute;culos.";
 choices[21][2] = "185 art&iacute;culos.";
 choices[21][3] = "190 art&iacute;culos.";
 answers[21] = choices[21][1];
 units[21] = "10";
 comments[21] = "Id Pregunta: 10483. PRESUPUESTOS GENERALES";


//  Id pregunta: 10121 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[22]= new Array();
 choices[22][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[22][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[22][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[22][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[22] = choices[22][2];
 units[22] = "22";
 comments[22] = "Id Pregunta: 10121. ";


//  Id pregunta: 10271 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[23]= new Array();
 choices[23][0] = "Ley org&aacute;nica.";
 choices[23][1] = "Ley ordinaria.";
 choices[23][2] = "Ley de bases.";
 choices[23][3] = "Ley marco.";
 answers[23] = choices[23][0];
 units[23] = "1";
 comments[23] = "Id Pregunta: 10271. CONSTITUCION1978";


//  Id pregunta: 10249 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[24]= new Array();
 choices[24][0] = "Art&iacute;culo 16.2.";
 choices[24][1] = "Art&iacute;culo 17.1.";
 choices[24][2] = "Art&iacute;culo 18.1.";
 choices[24][3] = "Art&iacute;culo 18.2.";
 answers[24] = choices[24][0];
 units[24] = "1";
 comments[24] = "Id Pregunta: 10249. CONSTITUCION1978";


//  Id pregunta: 10678 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[25]= new Array();
 choices[25][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[25][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[25][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[25][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[25] = choices[25][1];
 units[25] = "14";
 comments[25] = "Id Pregunta: 10678. Dependencia";


//  Id pregunta: 10188 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[26]= new Array();
 choices[26][0] = "No, en ning&uacute;n caso.";
 choices[26][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[26][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[26][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[26] = choices[26][3];
 units[26] = "1";
 comments[26] = "Id Pregunta: 10188. CONSTITUCION1978";


//  Id pregunta: 10059 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[27]= new Array();
 choices[27][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[27][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[27][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[27][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[27] = choices[27][3];
 units[27] = "101";
 comments[27] = "Id Pregunta: 10059. AGE A1 2015";


//  Id pregunta: 10484 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[28]= new Array();
 choices[28][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[28][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[28][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[28][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[28] = choices[28][2];
 units[28] = "10";
 comments[28] = "Id Pregunta: 10484. PRESUPUESTOS GENERALES";


//  Id pregunta: 10463 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[29]= new Array();
 choices[29][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[29][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[29][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[29][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[29] = choices[29][3];
 units[29] = "10";
 comments[29] = "Id Pregunta: 10463. PRESUPUESTOS GENERALES";


//  Id pregunta: 10487 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[30]= new Array();
 choices[30][0] = "Las Cortes Generales.";
 choices[30][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[30][2] = "El Gobierno.";
 choices[30][3] = "El Congreso de los Diputados.";
 answers[30] = choices[30][0];
 units[30] = "10";
 comments[30] = "Id Pregunta: 10487. PRESUPUESTOS GENERALES";


//  Id pregunta: 10663 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[31]= new Array();
 choices[31][0] = "De oficio.";
 choices[31][1] = "A solicitud del interesado.";
 choices[31][2] = "De oficio o a solicitud del interesado.";
 choices[31][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[31] = choices[31][2];
 units[31] = "7";
 comments[31] = "Id Pregunta: 10663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 10605 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[32]= new Array();
 choices[32][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[32][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[32][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[32][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[32] = choices[32][2];
 units[32] = "101";
 comments[32] = "Id Pregunta: 10605. Junta de Extremadura A1 2015";


//  Id pregunta: 10401 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[33]= new Array();
 choices[33][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[33][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[33][2] = "Ambas son correctas.";
 choices[33][3] = "A y B son incorrectas.";
 answers[33] = choices[33][2];
 units[33] = "14";
 comments[33] = "Id Pregunta: 10401. POLITICAS DE IGUALDAD";


//  Id pregunta: 10449 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  El cr&eacute;dito presupuestario es...";
 choices[34]= new Array();
 choices[34][0] = "El sujeto que realiza el gasto";
 choices[34][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[34][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[34][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[34] = choices[34][2];
 units[34] = "10";
 comments[34] = "Id Pregunta: 10449. PRESUPUESTOS GENERALES";


//  Id pregunta: 10529 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[35]= new Array();
 choices[35][0] = "formular solicitudes";
 choices[35][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[35][2] = "presentar declaraciones responsables o comunicaciones";
 choices[35][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[35] = choices[35][1];
 units[35] = "7";
 comments[35] = "Id Pregunta: 10529. LEY 39/2015";


//  Id pregunta: 10258 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[36]= new Array();
 choices[36][0] = "Municipios, provincias y CCAA.";
 choices[36][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[36][2] = "En CCAA, 50 provincias y municipios.";
 choices[36][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 10258. CONSTITUCION1978";


//  Id pregunta: 10023 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[37]= new Array();
 choices[37][0] = "SPARQL";
 choices[37][1] = "UnQL";
 choices[37][2] = "XQUERY";
 choices[37][3] = "RQL";
 answers[37] = choices[37][0];
 units[37] = "74";
 comments[37] = "Id Pregunta: 10023. AGE A1 2015";


//  Id pregunta: 10641 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[38]= new Array();
 choices[38][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[38][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[38][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[38][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[38] = choices[38][1];
 units[38] = "58";
 comments[38] = "Id Pregunta: 10641. Junta de Extremadura A1 2015";


//  Id pregunta: 10519 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[39]= new Array();
 choices[39][0] = "un art&iacute;culo";
 choices[39][1] = "dos art&iacute;culos";
 choices[39][2] = "tres art&iacute;culos";
 choices[39][3] = "cuatro art&iacute;culos";
 answers[39] = choices[39][1];
 units[39] = "7";
 comments[39] = "Id Pregunta: 10519. LEY 39/2015";


//  Id pregunta: 10458 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[40]= new Array();
 choices[40][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[40][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[40][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[40][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[40] = choices[40][3];
 units[40] = "10";
 comments[40] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10355 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[41]= new Array();
 choices[41][0] = "Son vinculantes solamente.";
 choices[41][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[41][2] = "Son preceptivos y vinculantes.";
 choices[41][3] = "Son preceptivos y no vinculantes.";
 answers[41] = choices[41][1];
 units[41] = "5";
 comments[41] = "Id Pregunta: 10355. UNION EUROPEA";


//  Id pregunta: 10010 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[42]= new Array();
 choices[42][0] = "Paging";
 choices[42][1] = "Roaming";
 choices[42][2] = "Handover";
 choices[42][3] = "Trunking";
 answers[42] = choices[42][0];
 units[42] = "117";
 comments[42] = "Id Pregunta: 10010. AGE A1 2015";


//  Id pregunta: 10266 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[43]= new Array();
 choices[43][0] = "El Segundo.";
 choices[43][1] = "El Primero.";
 choices[43][2] = "El Preliminar.";
 choices[43][3] = "El Tercero.";
 answers[43] = choices[43][0];
 units[43] = "1";
 comments[43] = "Id Pregunta: 10266. CONSTITUCION1978";


//  Id pregunta: 10098 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[44]= new Array();
 choices[44][0] = "Clustering";
 choices[44][1] = "Deduplicaci&oacute;n";
 choices[44][2] = "Virtualizaci&oacute;n";
 choices[44][3] = "Contenerizaci&oacute;n";
 answers[44] = choices[44][2];
 units[44] = "124";
 comments[44] = "Id Pregunta: 10098. AGE A1 2015";


//  Id pregunta: 10366 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[45]= new Array();
 choices[45][0] = "20 parlamentarios.";
 choices[45][1] = "29 parlamentarios.";
 choices[45][2] = "18 parlamentarios.";
 choices[45][3] = "23 parlamentarios.";
 answers[45] = choices[45][0];
 units[45] = "5";
 comments[45] = "Id Pregunta: 10366. UNION EUROPEA";


//  Id pregunta: 10276 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la respuesta falsa";
 choices[46]= new Array();
 choices[46][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[46][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[46][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[46][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[46] = choices[46][3];
 units[46] = "22";
 comments[46] = "Id Pregunta: 10276. LEY DE TRANSPARENCIA";


//  Id pregunta: 10302 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[47]= new Array();
 choices[47][0] = "Cinco a&ntilde;os.";
 choices[47][1] = "Cuatro a&ntilde;os.";
 choices[47][2] = "Tres a&ntilde;os.";
 choices[47][3] = "Seis meses.";
 answers[47] = choices[47][2];
 units[47] = "5";
 comments[47] = "Id Pregunta: 10302. UNION EUROPEA";


//  Id pregunta: 10119 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[48]= new Array();
 choices[48][0] = "Anual";
 choices[48][1] = "Mensual";
 choices[48][2] = "Semestral";
 choices[48][3] = "Trimestral";
 answers[48] = choices[48][3];
 units[48] = "15";
 comments[48] = "Id Pregunta: 10119. ";


//  Id pregunta: 10100 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[49]= new Array();
 choices[49][0] = "Bases de datos orientadas a filas";
 choices[49][1] = "Bases de datos orientadas a documentos";
 choices[49][2] = "Bases de datos de clave/valor";
 choices[49][3] = "Bases de datos orientadas a objetos";
 answers[49] = choices[49][0];
 units[49] = "73";
 comments[49] = "Id Pregunta: 10100. ";


//  Id pregunta: 10460 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[50]= new Array();
 choices[50][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[50][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[50][2] = "La normativa reguladora de cada derecho.";
 choices[50][3] = "Ley 50/1997, del Gobierno.";
 answers[50] = choices[50][2];
 units[50] = "10";
 comments[50] = "Id Pregunta: 10460. PRESUPUESTOS GENERALES";


//  Id pregunta: 10159 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[51]= new Array();
 choices[51][0] = "verbalmente";
 choices[51][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[51][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[51][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[51] = choices[51][2];
 units[51] = "7";
 comments[51] = "Id Pregunta: 10159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 10242 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[52]= new Array();
 choices[52][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[52][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[52][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[52][3] = "Sancionar y publicar las leyes.";
 answers[52] = choices[52][2];
 units[52] = "1";
 comments[52] = "Id Pregunta: 10242. CONSTITUCION1978";


//  Id pregunta: 10457 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[53]= new Array();
 choices[53][0] = "A nivel de secci&oacute;n de programa.";
 choices[53][1] = "A nivel de grupo de programa.";
 choices[53][2] = "Ninguna de las respuestas es correcta.";
 choices[53][3] = "A nivel de programa.";
 answers[53] = choices[53][3];
 units[53] = "10";
 comments[53] = "Id Pregunta: 10457. PRESUPUESTOS GENERALES";


//  Id pregunta: 10220 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[54]= new Array();
 choices[54][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[54][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[54][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[54][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[54] = choices[54][0];
 units[54] = "1";
 comments[54] = "Id Pregunta: 10220. CONSTITUCION1978";


//  Id pregunta: 10114 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[55]= new Array();
 choices[55][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[55][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[55][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[55][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[55] = choices[55][0];
 units[55] = "15";
 comments[55] = "Id Pregunta: 10114. ";


//  Id pregunta: 10494 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[56]= new Array();
 choices[56][0] = "Por reembolso de pr&eacute;stamos.";
 choices[56][1] = "Por la venta de bienes.";
 choices[56][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[56][3] = "Por prestaci&oacute;n de servicios.";
 answers[56] = choices[56][2];
 units[56] = "10";
 comments[56] = "Id Pregunta: 10494. PRESUPUESTOS GENERALES";


//  Id pregunta: 10653 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[57]= new Array();
 choices[57][0] = "Neo4J ";
 choices[57][1] = "OrientDB ";
 choices[57][2] = "InfoGrid ";
 choices[57][3] = "SimpleDB";
 answers[57] = choices[57][3];
 units[57] = "73";
 comments[57] = "Id Pregunta: 10653. ";


//  Id pregunta: 10593 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[58]= new Array();
 choices[58][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[58][1] = "La CETIC";
 choices[58][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[58][3] = "El MHFP";
 answers[58] = choices[58][0];
 units[58] = "19";
 comments[58] = "Id Pregunta: 10593. Estrategia TIC";


//  Id pregunta: 10636 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[59]= new Array();
 choices[59][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[59][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[59][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[59][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[59] = choices[59][2];
 units[59] = "57";
 comments[59] = "Id Pregunta: 10636. Junta de Extremadura A1 2015";


//  Id pregunta: 10515 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[60]= new Array();
 choices[60][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[60][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[60][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[60][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[60] = choices[60][1];
 units[60] = "7";
 comments[60] = "Id Pregunta: 10515. LEY 39/2015";


//  Id pregunta: 10231 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[61]= new Array();
 choices[61][0] = "El Presidente del Congreso de los Diputados.";
 choices[61][1] = "El Presidente del Gobierno.";
 choices[61][2] = "El Rey.";
 choices[61][3] = "El Consejo de Ministros.";
 answers[61] = choices[61][0];
 units[61] = "1";
 comments[61] = "Id Pregunta: 10231. CONSTITUCION1978";


//  Id pregunta: 10432 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[62]= new Array();
 choices[62][0] = "De ocho a&ntilde;os.";
 choices[62][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[62][2] = "Ambas son correctas.";
 choices[62][3] = "No existe un l&iacute;mite.";
 answers[62] = choices[62][0];
 units[62] = "14";
 comments[62] = "Id Pregunta: 10432. POLITICAS DE IGUALDAD";


//  Id pregunta: 10071 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[63]= new Array();
 choices[63][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[63][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[63][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[63][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[63] = choices[63][0];
 units[63] = "86";
 comments[63] = "Id Pregunta: 10071. AGE A1 2015";


//  Id pregunta: 10590 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[64]= new Array();
 choices[64][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[64][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[64][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[64][3] = "Todos los anteriores";
 answers[64] = choices[64][3];
 units[64] = "19";
 comments[64] = "Id Pregunta: 10590. Estrategia TIC";


//  Id pregunta: 10294 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[65]= new Array();
 choices[65][0] = "Al Consejo Europeo.";
 choices[65][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[65][2] = "A la Comisi&oacute;n Europea.";
 choices[65][3] = "Al Parlamento Europeo.";
 answers[65] = choices[65][2];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10294. UNION EUROPEA";


//  Id pregunta: 10422 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[66]= new Array();
 choices[66][0] = "El Ministerio de Igualdad.";
 choices[66][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[66][2] = "Ambas son correctas.";
 choices[66][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[66] = choices[66][1];
 units[66] = "14";
 comments[66] = "Id Pregunta: 10422. POLITICAS DE IGUALDAD";


//  Id pregunta: 10456 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[67]= new Array();
 choices[67][0] = "a) Los cuatro ejercicios siguientes.";
 choices[67][1] = "b) El ejercicio siguiente.";
 choices[67][2] = "c) Los dos ejercicios siguientes.";
 choices[67][3] = "d) Los tres ejercicios siguientes.";
 answers[67] = choices[67][3];
 units[67] = "10";
 comments[67] = "Id Pregunta: 10456. PRESUPUESTOS GENERALES";


//  Id pregunta: 10655 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[68]= new Array();
 choices[68][0] = "Yarn";
 choices[68][1] = "Flume";
 choices[68][2] = "Hive";
 choices[68][3] = "BizAgi";
 answers[68] = choices[68][3];
 units[68] = "73";
 comments[68] = "Id Pregunta: 10655. ";


//  Id pregunta: 10133 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[69]= new Array();
 choices[69][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[69][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[69][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[69][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[69] = choices[69][1];
 units[69] = "12";
 comments[69] = "Id Pregunta: 10133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10055 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  WS-Security contiene especificaciones sobre:";
 choices[70]= new Array();
 choices[70][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[70][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[70][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[70][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[70] = choices[70][1];
 units[70] = "119";
 comments[70] = "Id Pregunta: 10055. AGE A1 2015";


//  Id pregunta: 10536 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[71]= new Array();
 choices[71][0] = "apud acta";
 choices[71][1] = "presencialmente";
 choices[71][2] = "electr&oacute;nicamente";
 choices[71][3] = "todas son correctas";
 answers[71] = choices[71][3];
 units[71] = "7";
 comments[71] = "Id Pregunta: 10536. LEY 39/2015";


//  Id pregunta: 10526 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[72]= new Array();
 choices[72][0] = "tienen capacidad de obrar limitada";
 choices[72][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[72][2] = "no tienen capacidad de obrar";
 choices[72][3] = "ninguna es correcta";
 answers[72] = choices[72][2];
 units[72] = "7";
 comments[72] = "Id Pregunta: 10526. LEY 39/2015";


//  Id pregunta: 10448 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  La partida presupuestaria es equivalente a...";
 choices[73]= new Array();
 choices[73][0] = "El sujeto que realiza el gasto";
 choices[73][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[73][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[73][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[73] = choices[73][3];
 units[73] = "10";
 comments[73] = "Id Pregunta: 10448. PRESUPUESTOS GENERALES";


//  Id pregunta: 10629 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[74]= new Array();
 choices[74][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[74][1] = "El responsable de la custodia de los datos enviados.";
 choices[74][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[74][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[74] = choices[74][3];
 units[74] = "35";
 comments[74] = "Id Pregunta: 10629. Junta de Extremadura A1 2015";


//  Id pregunta: 10619 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[75]= new Array();
 choices[75][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[75][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[75][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[75][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[75] = choices[75][1];
 units[75] = "89";
 comments[75] = "Id Pregunta: 10619. Junta de Extremadura A1 2015";


//  Id pregunta: 10230 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[76]= new Array();
 choices[76][0] = "Por Real Decreto.";
 choices[76][1] = "Por Orden del Ministerio del Interior.";
 choices[76][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[76][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[76] = choices[76][2];
 units[76] = "1";
 comments[76] = "Id Pregunta: 10230. CONSTITUCION1978";


//  Id pregunta: 10476 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[77]= new Array();
 choices[77][0] = "Al Gobierno.";
 choices[77][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[77][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[77][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[77] = choices[77][2];
 units[77] = "10";
 comments[77] = "Id Pregunta: 10476. PRESUPUESTOS GENERALES";


//  Id pregunta: 10245 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[78]= new Array();
 choices[78][0] = "De los derechos y deberes fundamentales.";
 choices[78][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[78][2] = "Derechos y libertades.";
 choices[78][3] = "De la Corona.";
 answers[78] = choices[78][1];
 units[78] = "1";
 comments[78] = "Id Pregunta: 10245. CONSTITUCION1978";


//  Id pregunta: 10322 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  El Tribunal de Justicia est&aacute; formado por:";
 choices[79]= new Array();
 choices[79][0] = "Un Juez de cada Estado miembro.";
 choices[79][1] = "Por dos Jueces de cada Estado miembro.";
 choices[79][2] = "Por veinte Jueces.";
 choices[79][3] = "Por ocho Jueces.";
 answers[79] = choices[79][0];
 units[79] = "5";
 comments[79] = "Id Pregunta: 10322. UNION EUROPEA";


//  Id pregunta: 10233 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[80]= new Array();
 choices[80][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[80][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[80][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[80][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[80] = choices[80][2];
 units[80] = "1";
 comments[80] = "Id Pregunta: 10233. CONSTITUCION1978";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[81]= new Array();
 choices[81][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[81][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[81][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[81][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[81] = choices[81][2];
 units[81] = "53";
 comments[81] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10414 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[82]= new Array();
 choices[82][0] = "Un informe de impacto de g&eacute;nero.";
 choices[82][1] = "Un programa de igualdad de oportunidades.";
 choices[82][2] = "Un plan de Igualdad de Oportunidades.";
 choices[82][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[82] = choices[82][0];
 units[82] = "14";
 comments[82] = "Id Pregunta: 10414. POLITICAS DE IGUALDAD";


//  Id pregunta: 10506 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[83]= new Array();
 choices[83][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[83][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[83][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[83][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[83] = choices[83][3];
 units[83] = "10";
 comments[83] = "Id Pregunta: 10506. PRESUPUESTOS GENERALES";


//  Id pregunta: 10171 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[84]= new Array();
 choices[84][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[84][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[84][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[84][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[84] = choices[84][3];
 units[84] = "19";
 comments[84] = "Id Pregunta: 10171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 10167 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[85]= new Array();
 choices[85][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[85][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[85][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[85][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[85] = choices[85][1];
 units[85] = "19";
 comments[85] = "Id Pregunta: 10167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";


//  Id pregunta: 10527 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[86]= new Array();
 choices[86][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[86][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[86][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[86][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[86] = choices[86][2];
 units[86] = "7";
 comments[86] = "Id Pregunta: 10527. LEY 39/2015";


//  Id pregunta: 10248 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[87]= new Array();
 choices[87][0] = "61";
 choices[87][1] = "53";
 choices[87][2] = "65";
 choices[87][3] = "67";
 answers[87] = choices[87][1];
 units[87] = "1";
 comments[87] = "Id Pregunta: 10248. CONSTITUCION1978";


//  Id pregunta: 10293 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[88]= new Array();
 choices[88][0] = "Estrasburgo.";
 choices[88][1] = "Bruselas.";
 choices[88][2] = "Luxemburgo.";
 choices[88][3] = "Holanda.";
 answers[88] = choices[88][0];
 units[88] = "5";
 comments[88] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10307 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[89]= new Array();
 choices[89][0] = "Seis a&ntilde;os.";
 choices[89][1] = "Cinco a&ntilde;os.";
 choices[89][2] = "Cuatro a&ntilde;os.";
 choices[89][3] = "Ocho a&ntilde;os.";
 answers[89] = choices[89][1];
 units[89] = "5";
 comments[89] = "Id Pregunta: 10307. UNION EUROPEA";


//  Id pregunta: 10232 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[90]= new Array();
 choices[90][0] = "El Presidente del Senado.";
 choices[90][1] = "El Defensor del Pueblo.";
 choices[90][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[90][3] = "El Presidente del Gobierno.";
 answers[90] = choices[90][2];
 units[90] = "1";
 comments[90] = "Id Pregunta: 10232. CONSTITUCION1978";


//  Id pregunta: 10095 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[91]= new Array();
 choices[91][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[91][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[91][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[91][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[91] = choices[91][3];
 units[91] = "89";
 comments[91] = "Id Pregunta: 10095. AGE A1 2015";


//  Id pregunta: 10547 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[92]= new Array();
 choices[92][0] = "Integrar la estrategia TIC con la de negocio";
 choices[92][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[92][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[92][3] = "Todas las anteriores";
 answers[92] = choices[92][3];
 units[92] = "26";
 comments[92] = "Id Pregunta: 10547. Gobernanza TIC";


//  Id pregunta: 10465 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[93]= new Array();
 choices[93][0] = "Las respuestas a) y b) son correctas.";
 choices[93][1] = "Las respuestas a) y b) no son correctas.";
 choices[93][2] = "Contenido coherente con los planes sectoriales.";
 choices[93][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[93] = choices[93][0];
 units[93] = "10";
 comments[93] = "Id Pregunta: 10465. PRESUPUESTOS GENERALES";


//  Id pregunta: 10538 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[94]= new Array();
 choices[94][0] = "los registros mercantiles";
 choices[94][1] = "los registros de la propiedad";
 choices[94][2] = "los protocolos notariales";
 choices[94][3] = "todas son correctas";
 answers[94] = choices[94][3];
 units[94] = "7";
 comments[94] = "Id Pregunta: 10538. LEY 39/2015";


//  Id pregunta: 10674 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[95]= new Array();
 choices[95][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[95][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[95][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[95][3] = "Todas las anteriores son correctas.";
 answers[95] = choices[95][3];
 units[95] = "47";
 comments[95] = "Id Pregunta: 10674. Receta electr&oacute;nica";


//  Id pregunta: 10002 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[96]= new Array();
 choices[96][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[96][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[96][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[96][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[96] = choices[96][0];
 units[96] = "31";
 comments[96] = "Id Pregunta: 10002. AGE A1 2015";


//  Id pregunta: 10477 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[97]= new Array();
 choices[97][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[97][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[97][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[97][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[97] = choices[97][2];
 units[97] = "10";
 comments[97] = "Id Pregunta: 10477. PRESUPUESTOS GENERALES";


//  Id pregunta: 10209 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[98]= new Array();
 choices[98][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[98][1] = "El Congreso de los Diputados.";
 choices[98][2] = "Las Cortes Generales.";
 choices[98][3] = "El Consejo de Ministros";
 answers[98] = choices[98][3];
 units[98] = "1";
 comments[98] = "Id Pregunta: 10209. CONSTITUCION1978";


//  Id pregunta: 10161 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[99]= new Array();
 choices[99][0] = "Principio de solo una vez";
 choices[99][1] = "Apertura y transparencia";
 choices[99][2] = "Confianza y seguridad";
 choices[99][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[99] = choices[99][3];
 units[99] = "19";
 comments[99] = "Id Pregunta: 10161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


