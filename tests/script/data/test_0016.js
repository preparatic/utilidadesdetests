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

//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[0]= "1)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[0]= new Array();
 choices[0][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[0][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[0][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[0][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[0] = choices[0][0];
 units[0] = "60";
 comments[0] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[1]= "2)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[1]= new Array();
 choices[1][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[1][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[1][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[1][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[1] = choices[1][1];
 units[1] = "56";
 comments[1] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[2]= new Array();
 choices[2][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[2][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[2][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[2][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[2] = choices[2][1];
 units[2] = "15";
 comments[2] = "Id Pregunta: 112. ";


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[3]= "4)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[3]= new Array();
 choices[3][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[3][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[3][2] = "Ambas son correctas.";
 choices[3][3] = "Ambas son incorrectas.";
 answers[3] = choices[3][0];
 units[3] = "14";
 comments[3] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[4]= new Array();
 choices[4][0] = "Veinte.";
 choices[4][1] = "Quince.";
 choices[4][2] = "Diez.";
 choices[4][3] = "Doce.";
 answers[4] = choices[4][1];
 units[4] = "1";
 comments[4] = "Id Pregunta: 264. CONSTITUCION1978";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[5]= "6)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[5]= new Array();
 choices[5][0] = "Un plan de igualdad.";
 choices[5][1] = "Un informe de impacto de g&eacute;nero.";
 choices[5][2] = "Un programa de igualdad.";
 choices[5][3] = "Todas son correctas.";
 answers[5] = choices[5][1];
 units[5] = "14";
 comments[5] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[6]= "7)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[6]= new Array();
 choices[6][0] = "Consejos y Servicios.";
 choices[6][1] = "Servicios permanentes y no permanentes.";
 choices[6][2] = "Direcciones Generales.";
 choices[6][3] = "Direcciones ministeriales.";
 answers[6] = choices[6][2];
 units[6] = "5";
 comments[6] = "Id Pregunta: 318. UNION EUROPEA";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[7]= "8)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[7]= new Array();
 choices[7][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[7][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[7][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[7][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[8]= new Array();
 choices[8][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[8][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[8][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[8][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[8] = choices[8][2];
 units[8] = "10";
 comments[8] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[9]= new Array();
 choices[9][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[9][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[9][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[9][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[9] = choices[9][3];
 units[9] = "34, 84";
 comments[9] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[10]= "11)  WS-Security contiene especificaciones sobre:";
 choices[10]= new Array();
 choices[10][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[10][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[10][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[10][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[10] = choices[10][1];
 units[10] = "119";
 comments[10] = "Id Pregunta: 55. AGE A1 2015";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[11]= "12)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[11]= new Array();
 choices[11][0] = "El Presidente y su gabinete.";
 choices[11][1] = "El Presidente y sus Ministros.";
 choices[11][2] = "El Rey y el Presidente.";
 choices[11][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[11] = choices[11][2];
 units[11] = "1";
 comments[11] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[12]= "13)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[12]= new Array();
 choices[12][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[12][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[12][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[12][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[12] = choices[12][0];
 units[12] = "31";
 comments[12] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[13]= new Array();
 choices[13][0] = "Ley 3/2015";
 choices[13][1] = "Ley 6/2007";
 choices[13][2] = "Ley 5/1984";
 choices[13][3] = "Ley 5/2006";
 answers[13] = choices[13][0];
 units[13] = "22";
 comments[13] = "Id Pregunta: 709. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[14]= new Array();
 choices[14][0] = "Avro";
 choices[14][1] = "Sqoop";
 choices[14][2] = "UIMA";
 choices[14][3] = "Jaql";
 answers[14] = choices[14][1];
 units[14] = "73";
 comments[14] = "Id Pregunta: 660. ";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[15]= new Array();
 choices[15][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[15][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[15][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[15][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[15] = choices[15][1];
 units[15] = "7";
 comments[15] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[16]= new Array();
 choices[16][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[16][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[16][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[16][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[16] = choices[16][2];
 units[16] = "1";
 comments[16] = "Id Pregunta: 201. CONSTITUCION1978";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[17]= "18)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[17]= new Array();
 choices[17][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[17][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[17][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[17][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[17] = choices[17][2];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[18]= new Array();
 choices[18][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[18][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[18][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[18][3] = "Todas las respuestas son correctas.";
 answers[18] = choices[18][2];
 units[18] = "42";
 comments[18] = "Id Pregunta: 616. Junta de Extremadura A1 2015";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "De la C&aacute;mara respectiva.";
 choices[19][1] = "Del Rey.";
 choices[19][2] = "Del Tribunal Constitucional.";
 choices[19][3] = "Del Tribunal Supremo.";
 answers[19] = choices[19][0];
 units[19] = "1";
 comments[19] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[20]= "21)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[20]= new Array();
 choices[20][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[20][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[20][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[20][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[20] = choices[20][2];
 units[20] = "8";
 comments[20] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[21]= new Array();
 choices[21][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[21][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[21][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[21][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[21] = choices[21][0];
 units[21] = "1";
 comments[21] = "Id Pregunta: 214. CONSTITUCION1978";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[22]= "23)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[22]= new Array();
 choices[22][0] = "El Presidente del Consejo Europeo.";
 choices[22][1] = "La Comisi&oacute;n.";
 choices[22][2] = "El Consejo.";
 choices[22][3] = "El Parlamento Europeo.";
 answers[22] = choices[22][2];
 units[22] = "5";
 comments[22] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[23]= "24)  En cuanto al an&aacute;lisis DAFO:";
 choices[23]= new Array();
 choices[23][0] = "Considera detallada y exclusivamente factores internos.";
 choices[23][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[23][2] = "Considera detallada y exclusivamente factores externos.";
 choices[23][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[23] = choices[23][1];
 units[23] = "83";
 comments[23] = "Id Pregunta: 41. AGE A1 2015";


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[24]= "25)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[24]= new Array();
 choices[24][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[24][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[24][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[24][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[24] = choices[24][2];
 units[24] = "22";
 comments[24] = "Id Pregunta: 128. ";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[25]= new Array();
 choices[25][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[25][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[25][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[25][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[25] = choices[25][0];
 units[25] = "19";
 comments[25] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[26]= "27)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[26]= new Array();
 choices[26][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[26][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[26][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[26][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[26] = choices[26][0];
 units[26] = "35";
 comments[26] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[27]= new Array();
 choices[27][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[27][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[27][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[27][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[27] = choices[27][3];
 units[27] = "46";
 comments[27] = "Id Pregunta: 80. AGE A1 2015";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[28]= new Array();
 choices[28][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[28][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[28][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[28][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[28] = choices[28][0];
 units[28] = "1";
 comments[28] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[29]= "30)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[29]= new Array();
 choices[29][0] = "El nombre y el tipo de correspondencia.";
 choices[29][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[29][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[29][3] = "El nombre y el grado.";
 answers[29] = choices[29][1];
 units[29] = "85";
 comments[29] = "Id Pregunta: 634. Junta de Extremadura A1 2015";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[30]= new Array();
 choices[30][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[30][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[30][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[30][3] = "El Senado se compone de 350 senadores.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[31]= "32)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[31]= new Array();
 choices[31][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[31][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[31][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[31][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[31] = choices[31][2];
 units[31] = "14";
 comments[31] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[32]= "33)  Son bases de datos NoSQL orientadas a objetos:";
 choices[32]= new Array();
 choices[32][0] = "GemStone";
 choices[32][1] = "Zope Object DB";
 choices[32][2] = "Las dos anteriores";
 choices[32][3] = "Solo B)";
 answers[32] = choices[32][2];
 units[32] = "73";
 comments[32] = "Id Pregunta: 107. ";


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[33]= new Array();
 choices[33][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[33][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[33][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[33][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[33] = choices[33][0];
 units[33] = "91";
 comments[33] = "Id Pregunta: 6. AGE A1 2015";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[34]= new Array();
 choices[34][0] = "Orientaci&oacute;n a objetos";
 choices[34][1] = "MapReduce";
 choices[34][2] = "Pipeline filtering";
 choices[34][3] = "Programaci&oacute;n funcional";
 answers[34] = choices[34][1];
 units[34] = "73";
 comments[34] = "Id Pregunta: 659. ";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[35]= "36)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[35]= new Array();
 choices[35][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[35][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[35][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[35][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[35] = choices[35][2];
 units[35] = "14";
 comments[35] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[36]= "37)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[36]= new Array();
 choices[36][0] = "apud acta";
 choices[36][1] = "presencialmente";
 choices[36][2] = "electr&oacute;nicamente";
 choices[36][3] = "todas son correctas";
 answers[36] = choices[36][3];
 units[36] = "7";
 comments[36] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[37]= new Array();
 choices[37][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[37][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[37][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[37][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[37] = choices[37][1];
 units[37] = "5";
 comments[37] = "Id Pregunta: 298. UNION EUROPEA";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[38]= "39)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[38]= new Array();
 choices[38][0] = "Ejecuci&oacute;n";
 choices[38][1] = "Adjudicaci&oacute;n";
 choices[38][2] = "Licitaci&oacute;n";
 choices[38][3] = "Formalizaci&oacute;n";
 answers[38] = choices[38][3];
 units[38] = "37";
 comments[38] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[39]= new Array();
 choices[39][0] = "Conferencia de Presidentes.";
 choices[39][1] = "Convenios de colaboraci&oacute;n.";
 choices[39][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[39][3] = "Conferencias Sectoriales.";
 answers[39] = choices[39][0];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[40]= new Array();
 choices[40][0] = "Crecimiento inteligente.";
 choices[40][1] = "Crecimiento inclusivo.";
 choices[40][2] = "Crecimiento sostenible.";
 choices[40][3] = "Crecimiento integrador.";
 answers[40] = choices[40][1];
 units[40] = "5";
 comments[40] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[41]= new Array();
 choices[41][0] = "El Consejo Nacional de la Mujer";
 choices[41][1] = "El Consejo de la Mujer";
 choices[41][2] = "El Instituto de la Mujer";
 choices[41][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[41] = choices[41][3];
 units[41] = "14";
 comments[41] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";


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


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[43]= "44)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[43]= new Array();
 choices[43][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[43][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[43][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[43][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[43] = choices[43][2];
 units[43] = "7";
 comments[43] = "Id Pregunta: 510. LEY 39/2015";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[44]= "45)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[44]= new Array();
 choices[44][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[44][1] = "Tratarse de un acto no susceptible de recurso";
 choices[44][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[44][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[44] = choices[44][2];
 units[44] = "8";
 comments[44] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[45]= new Array();
 choices[45][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[45][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[45][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[45][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[45] = choices[45][0];
 units[45] = "14";
 comments[45] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[46]= "47)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[46]= new Array();
 choices[46][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[46][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[46][2] = "Cinco a&ntilde;os.";
 choices[46][3] = "Ninguna es correcta.";
 answers[46] = choices[46][2];
 units[46] = "5";
 comments[46] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[47]= new Array();
 choices[47][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[47][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[47][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[47][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[47] = choices[47][1];
 units[47] = "7";
 comments[47] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[48]= "49)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[48]= new Array();
 choices[48][0] = "Un recurso de incumplimiento.";
 choices[48][1] = "Recurso de carencia.";
 choices[48][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[48][3] = "Ninguna es correcta.";
 answers[48] = choices[48][2];
 units[48] = "5";
 comments[48] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[49]= "50)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[49]= new Array();
 choices[49][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[49][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[49][2] = "Un programa de igualdad.";
 choices[49][3] = "Un estatuto de igualdad.";
 answers[49] = choices[49][0];
 units[49] = "14";
 comments[49] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[50]= "51)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[50]= new Array();
 choices[50][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[50][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[50][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[50][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[50] = choices[50][0];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[51]= new Array();
 choices[51][0] = "La Comisi&oacute;n Permanente.";
 choices[51][1] = "El Presidente.";
 choices[51][2] = "El Pleno.";
 choices[51][3] = "El Vicepresidente.";
 answers[51] = choices[51][3];
 units[51] = "1";
 comments[51] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ala la correcta:";
 choices[52]= new Array();
 choices[52][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[52][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[52][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[52][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[52] = choices[52][1];
 units[52] = "7";
 comments[52] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[53]= "54)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[53]= new Array();
 choices[53][0] = "El Rey.";
 choices[53][1] = "El Jefe del Estado.";
 choices[53][2] = "El Gobierno.";
 choices[53][3] = "El Presidente del Gobierno.";
 answers[53] = choices[53][2];
 units[53] = "1";
 comments[53] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[54]= "55)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[54]= new Array();
 choices[54][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[54][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[54][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[54][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[54] = choices[54][1];
 units[54] = "14";
 comments[54] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[55]= "56)  El Presupuesto por programas sirve para saber...";
 choices[55]= new Array();
 choices[55][0] = "En qu&eacute; nos gastamos el dinero";
 choices[55][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[55][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[55][3] = "Qui&eacute;n se gasta el dinero";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[56]= "57)  El Parlamento Europeo celebrar&aacute;:";
 choices[56]= new Array();
 choices[56][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[56][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[56][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[56][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[56] = choices[56][0];
 units[56] = "5";
 comments[56] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[57]= "58)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[57]= new Array();
 choices[57][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[57][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[57][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[57][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[57] = choices[57][2];
 units[57] = "45";
 comments[57] = "Id Pregunta: 599. Junta de Extremadura A1 2015";


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[58]= new Array();
 choices[58][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[58][1] = "Excesiva estabilidad de empleo";
 choices[58][2] = "An&eacute;mico crecimiento de la productividad";
 choices[58][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[58] = choices[58][1];
 units[58] = "12";
 comments[58] = "Id Pregunta: 563. Modelo econ&oacute;mico";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[59]= "60)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[59]= new Array();
 choices[59][0] = "Un informe de g&eacute;nero.";
 choices[59][1] = "La variable de sexo.";
 choices[59][2] = "La variable de edad.";
 choices[59][3] = "La variable de comportamiento.";
 answers[59] = choices[59][1];
 units[59] = "14";
 comments[59] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[60]= "61)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[60]= new Array();
 choices[60][0] = "Interoperabilidad";
 choices[60][1] = "Integridad";
 choices[60][2] = "Capital humano";
 choices[60][3] = "Trazabilidad";
 answers[60] = choices[60][2];
 units[60] = "19";
 comments[60] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[61]= new Array();
 choices[61][0] = "En t&iacute;tulos-valores.";
 choices[61][1] = "Las respuestas a) y b) son correctas.";
 choices[61][2] = "Las respuestas a) y b) no son correctas.";
 choices[61][3] = "En cuenta.";
 answers[61] = choices[61][1];
 units[61] = "10";
 comments[61] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[62]= "63)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[62]= new Array();
 choices[62][0] = "61";
 choices[62][1] = "53";
 choices[62][2] = "65";
 choices[62][3] = "67";
 answers[62] = choices[62][1];
 units[62] = "1";
 comments[62] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[63]= "64)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[63]= new Array();
 choices[63][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[63][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[63][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[63][3] = "Todas las respuestas anteriores son correctas.";
 answers[63] = choices[63][0];
 units[63] = "45";
 comments[63] = "Id Pregunta: 598. Junta de Extremadura A1 2015";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[64]= new Array();
 choices[64][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[64][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[64][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[64][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[64] = choices[64][1];
 units[64] = "5";
 comments[64] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[65]= "66)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[65]= new Array();
 choices[65][0] = "Presencia equilibrada.";
 choices[65][1] = "Presencia paritaria.";
 choices[65][2] = "Presencia consensuada.";
 choices[65][3] = "presencia horizontal.";
 answers[65] = choices[65][0];
 units[65] = "14";
 comments[65] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[66]= "67)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[66]= new Array();
 choices[66][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[66][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[66][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[66][3] = "todas son correctas";
 answers[66] = choices[66][3];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 759. Ley 40/2015";


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[67]= "68)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[67]= new Array();
 choices[67][0] = "Cifrado de las comunicaciones";
 choices[67][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[67][2] = "Registro de los accesos";
 choices[67][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[67] = choices[67][1];
 units[67] = "35";
 comments[67] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[68]= "69)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[68]= new Array();
 choices[68][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[68][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[68][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[68][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[68] = choices[68][3];
 units[68] = "7";
 comments[68] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[69]= "70)  La sede del Parlamento Europeo se encuentra en:";
 choices[69]= new Array();
 choices[69][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[69][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[69][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[69][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[69] = choices[69][1];
 units[69] = "5";
 comments[69] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[70]= "71)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[70][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[70][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[70][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[70] = choices[70][3];
 units[70] = "22";
 comments[70] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Org&aacute;nica.";
 choices[71][1] = "Contable.";
 choices[71][2] = "Econ&oacute;mica.";
 choices[71][3] = "Por programas.";
 answers[71] = choices[71][2];
 units[71] = "10";
 comments[71] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[72]= "73)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[72]= new Array();
 choices[72][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[72][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[72][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[72][3] = "todas son correctas";
 answers[72] = choices[72][3];
 units[72] = "7";
 comments[72] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[73]= "74)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[73]= new Array();
 choices[73][0] = "Acoso sexual.";
 choices[73][1] = "Acoso por raz&oacute;n de sexo.";
 choices[73][2] = "Acoso laboral.";
 choices[73][3] = "Acoso mental.";
 answers[73] = choices[73][1];
 units[73] = "14";
 comments[73] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[74]= new Array();
 choices[74][0] = "El Consejo Europeo.";
 choices[74][1] = "El Parlamento Europeo.";
 choices[74][2] = "El Consejo.";
 choices[74][3] = "La Comisi&oacute;n.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 361. UNION EUROPEA";


