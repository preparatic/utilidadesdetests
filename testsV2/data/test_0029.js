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

//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[0]= "1)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[0]= new Array();
 choices[0][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[0][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[0][2] = "Gestionar el Registro de Operadores.";
 choices[0][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[0] = choices[0][3];
 units[0] = "121";
 comments[0] = "Id Pregunta: 24. AGE A1 2015";
 preguntaids[0] = 24


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[1]= new Array();
 choices[1][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[1][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[1][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[1][3] = "Todas las respuestas son correctas.";
 answers[1] = choices[1][2];
 units[1] = "42";
 comments[1] = "Id Pregunta: 618. Junta de Extremadura A1 2015";
 preguntaids[1] = 618


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[2]= "3)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[2]= new Array();
 choices[2][0] = "Prevenir las conductas discriminatorias.";
 choices[2][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[2][2] = "Todas son correctas.";
 choices[2][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[2] = choices[2][2];
 units[2] = "14";
 comments[2] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";
 preguntaids[2] = 409


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[3]= new Array();
 choices[3][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[3][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[3][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[3][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[3] = choices[3][3];
 units[3] = "22";
 comments[3] = "Id Pregunta: 714. Ley de transparencia";
 preguntaids[3] = 714


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[4]= "5)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[4]= new Array();
 choices[4][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[4][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[4][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[4][3] = "A las Diputaciones y a las Comarcas.";
 answers[4] = choices[4][3];
 units[4] = "1";
 comments[4] = "Id Pregunta: 229. CONSTITUCION1978";
 preguntaids[4] = 229


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale la respuesta falsa:";
 choices[5]= new Array();
 choices[5][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[5][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[5][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[5][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 284. UNION EUROPEA";
 preguntaids[5] = 284


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[6]= "7)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[6]= new Array();
 choices[6][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[6][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[6][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[6][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[6] = choices[6][0];
 units[6] = "7";
 comments[6] = "Id Pregunta: 520. LEY 39/2015";
 preguntaids[6] = 520


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[7]= "8)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[7]= new Array();
 choices[7][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[7][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[7][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[7][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[7] = choices[7][2];
 units[7] = "22";
 comments[7] = "Id Pregunta: 128. ";
 preguntaids[7] = 128


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[8]= "9)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[8]= new Array();
 choices[8][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[8][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[8][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[8][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[8] = choices[8][0];
 units[8] = "60";
 comments[8] = "Id Pregunta: 651. Junta de Extremadura A1 2015";
 preguntaids[8] = 651


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[9]= "10)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[9]= new Array();
 choices[9][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[9][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[9][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[9][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[9] = choices[9][3];
 units[9] = "106";
 comments[9] = "Id Pregunta: 74. AGE A1 2015";
 preguntaids[9] = 74


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[10]= new Array();
 choices[10][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[10][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[10][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[10][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[10] = choices[10][3];
 units[10] = "66";
 comments[10] = "Id Pregunta: 37. AGE A1 2015";
 preguntaids[10] = 37


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[11]= "12)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[11]= new Array();
 choices[11][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[11][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[11][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[11][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[11] = choices[11][2];
 units[11] = "12";
 comments[11] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";
 preguntaids[11] = 136


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[12]= "13)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[12]= new Array();
 choices[12][0] = "El Presidente del Consejo Europeo.";
 choices[12][1] = "La Comisi&oacute;n.";
 choices[12][2] = "El Consejo.";
 choices[12][3] = "El Parlamento Europeo.";
 answers[12] = choices[12][2];
 units[12] = "5";
 comments[12] = "Id Pregunta: 328. UNION EUROPEA";
 preguntaids[12] = 328


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[13]= "14)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[13]= new Array();
 choices[13][0] = "por Real Decreto";
 choices[13][1] = "reglamentariamente";
 choices[13][2] = "mediante Ley";
 choices[13][3] = "ninguna es correcta";
 answers[13] = choices[13][1];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 817. Ley 40/2015";
 preguntaids[13] = 817


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[14]= new Array();
 choices[14][0] = "El Consejo Nacional de la Mujer.";
 choices[14][1] = "El Consejo de la Mujer.";
 choices[14][2] = "El Instituto de la Mujer.";
 choices[14][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[14] = choices[14][3];
 units[14] = "14";
 comments[14] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";
 preguntaids[14] = 390


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[15]= new Array();
 choices[15][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[15][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[15][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[15][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[15] = choices[15][0];
 units[15] = "14";
 comments[15] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";
 preguntaids[15] = 389


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[16]= new Array();
 choices[16][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[16][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[16][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[16][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[16] = choices[16][0];
 units[16] = "89";
 comments[16] = "Id Pregunta: 623. Junta de Extremadura A1 2015";
 preguntaids[16] = 623


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[17]= new Array();
 choices[17][0] = "Yarn";
 choices[17][1] = "Flume";
 choices[17][2] = "Hive";
 choices[17][3] = "BizAgi";
 answers[17] = choices[17][3];
 units[17] = "73";
 comments[17] = "Id Pregunta: 657. ";
 preguntaids[17] = 657


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[18]= "19)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[18]= new Array();
 choices[18][0] = "El Delegado del Gobierno.";
 choices[18][1] = "El Subdelegado del Gobierno.";
 choices[18][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[18][3] = "El Gobernador Civil.";
 answers[18] = choices[18][2];
 units[18] = "1";
 comments[18] = "Id Pregunta: 207. CONSTITUCION1978";
 preguntaids[18] = 207


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[19]= "20)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[19]= new Array();
 choices[19][0] = "Un d&iacute;a";
 choices[19][1] = "Dos d&iacute;as";
 choices[19][2] = "Tres d&iacute;as";
 choices[19][3] = "Cuatro d&iacute;as";
 answers[19] = choices[19][3];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 831. Ley 40/2015";
 preguntaids[19] = 831


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[20]= "21)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[20]= new Array();
 choices[20][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[20][1] = "Static &amp; Active process for REsolution Bank.";
 choices[20][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[20][3] = "Super Active REsponse for Banks";
 answers[20] = choices[20][0];
 units[20] = "12";
 comments[20] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";
 preguntaids[20] = 139


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[21]= "22)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[21]= new Array();
 choices[21][0] = "Son actos individuales no normativos.";
 choices[21][1] = "Poseen alcance general.";
 choices[21][2] = "Son actos normativos.";
 choices[21][3] = "No son obligatorias.";
 answers[21] = choices[21][0];
 units[21] = "5";
 comments[21] = "Id Pregunta: 369. UNION EUROPEA";
 preguntaids[21] = 369


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[22]= "23)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[22]= new Array();
 choices[22][0] = "Programaci&oacute;n estructurada.";
 choices[22][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[22][2] = "Programaci&oacute;n extrema.";
 choices[22][3] = "Programaci&oacute;n Espuria.";
 answers[22] = choices[22][2];
 units[22] = "92";
 comments[22] = "Id Pregunta: 697. INTEGRACION CONTINUA";
 preguntaids[22] = 697


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[23]= "24)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[23]= new Array();
 choices[23][0] = "Estrasburgo.";
 choices[23][1] = "Bruselas.";
 choices[23][2] = "Luxemburgo.";
 choices[23][3] = "Holanda.";
 answers[23] = choices[23][2];
 units[23] = "5";
 comments[23] = "Id Pregunta: 295. UNION EUROPEA";
 preguntaids[23] = 295


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[24]= "25)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[24]= new Array();
 choices[24][0] = "IANA";
 choices[24][1] = "ISOC";
 choices[24][2] = "IETF";
 choices[24][3] = "IAB";
 answers[24] = choices[24][0];
 units[24] = "103";
 comments[24] = "Id Pregunta: 67. AGE A1 2015";
 preguntaids[24] = 67


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[25]= "26)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[25]= new Array();
 choices[25][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[25][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[25][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[25][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[25] = choices[25][2];
 units[25] = "85";
 comments[25] = "Id Pregunta: 645. Junta de Extremadura A1 2015";
 preguntaids[25] = 645


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[26]= "27)  La Administraci&oacute;n General del Estado se organiza:";
 choices[26]= new Array();
 choices[26][0] = "en Ministerios";
 choices[26][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[26][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[26][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[26] = choices[26][1];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 802. Ley 40/2015";
 preguntaids[26] = 802


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[27]= new Array();
 choices[27][0] = "Fue elaborada y aprobada por la CETIC";
 choices[27][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[27][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[27][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[27] = choices[27][1];
 units[27] = "19";
 comments[27] = "Id Pregunta: 580. Estrategia TIC";
 preguntaids[27] = 580


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[28]= "29)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[28]= new Array();
 choices[28][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[28][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[28][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[28][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[28] = choices[28][3];
 units[28] = "10";
 comments[28] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";
 preguntaids[28] = 499


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[29]= new Array();
 choices[29][0] = "El Parlamento y el Consejo.";
 choices[29][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[29][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[29][3] = "La Comisi&oacute;n y el Consejo.";
 answers[29] = choices[29][2];
 units[29] = "5";
 comments[29] = "Id Pregunta: 372. UNION EUROPEA";
 preguntaids[29] = 372


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[30]= new Array();
 choices[30][0] = "Principio de solo una vez";
 choices[30][1] = "Apertura y transparencia";
 choices[30][2] = "Confianza y seguridad";
 choices[30][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[30] = choices[30][3];
 units[30] = "19";
 comments[30] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";
 preguntaids[30] = 161


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[31]= "32)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[31]= new Array();
 choices[31][0] = "Son vinculantes solamente.";
 choices[31][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[31][2] = "Son preceptivos y vinculantes.";
 choices[31][3] = "Son preceptivos y no vinculantes.";
 answers[31] = choices[31][1];
 units[31] = "5";
 comments[31] = "Id Pregunta: 355. UNION EUROPEA";
 preguntaids[31] = 355


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[32]= "33)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[32]= new Array();
 choices[32][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[32][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[32][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[32][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[32] = choices[32][2];
 units[32] = "1";
 comments[32] = "Id Pregunta: 250. CONSTITUCION1978";
 preguntaids[32] = 250


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[33]= "34)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[33]= new Array();
 choices[33][0] = "Infrastructure as a Service (IaaS)";
 choices[33][1] = "Platform as a Service (PaaS)";
 choices[33][2] = "Software as a Service (SaaS)";
 choices[33][3] = "Application as a Service (AaaS)";
 answers[33] = choices[33][1];
 units[33] = "52";
 comments[33] = "Id Pregunta: 63. AGE A1 2015";
 preguntaids[33] = 63


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[34]= "35)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[34]= new Array();
 choices[34][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[34][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[34][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[34][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[34] = choices[34][2];
 units[34] = "19";
 comments[34] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";
 preguntaids[34] = 168


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; es SonarQube?";
 choices[35]= new Array();
 choices[35][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[35][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[35][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[35][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[35] = choices[35][2];
 units[35] = "92";
 comments[35] = "Id Pregunta: 700. INTEGRACION CONTINUA";
 preguntaids[35] = 700


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[36]= new Array();
 choices[36][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[36][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[36][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[36][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[36] = choices[36][1];
 units[36] = "15";
 comments[36] = "Id Pregunta: 112. ";
 preguntaids[36] = 112


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[37]= "38)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[37]= new Array();
 choices[37][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[37][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[37][2] = "Cinco a&ntilde;os.";
 choices[37][3] = "Ninguna es correcta.";
 answers[37] = choices[37][2];
 units[37] = "5";
 comments[37] = "Id Pregunta: 346. UNION EUROPEA";
 preguntaids[37] = 346


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[38]= new Array();
 choices[38][0] = "Transferencias de cr&eacute;dito.";
 choices[38][1] = "Incorporaciones de cr&eacute;dito.";
 choices[38][2] = "Imputaciones de cr&eacute;dito.";
 choices[38][3] = "Ampliaciones de cr&eacute;dito.";
 answers[38] = choices[38][2];
 units[38] = "10";
 comments[38] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";
 preguntaids[38] = 464


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[39]= new Array();
 choices[39][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[39][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[39][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[39][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[39] = choices[39][1];
 units[39] = "84";
 comments[39] = "Id Pregunta: 53. AGE A1 2015";
 preguntaids[39] = 53


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[40]= "41)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[40]= new Array();
 choices[40][0] = "Relaciones base y vistas.";
 choices[40][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[40][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[40][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[40] = choices[40][3];
 units[40] = "60";
 comments[40] = "Id Pregunta: 637. Junta de Extremadura A1 2015";
 preguntaids[40] = 637


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[41]= new Array();
 choices[41][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[41][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[41][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[41][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[41] = choices[41][1];
 units[41] = "7";
 comments[41] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";
 preguntaids[41] = 156


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[42]= new Array();
 choices[42][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[42][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[42][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[42][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[42] = choices[42][3];
 units[42] = "57";
 comments[42] = "Id Pregunta: 640. Junta de Extremadura A1 2015";
 preguntaids[42] = 640


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[43]= "44)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[43]= new Array();
 choices[43][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[43][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[43][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[43][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[43] = choices[43][2];
 units[43] = "10";
 comments[43] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";
 preguntaids[43] = 494


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[44]= "45)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[44]= new Array();
 choices[44][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[44][1] = "Publicidad de las normas.";
 choices[44][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[44][3] = "Coordinaci&oacute;n normativa.";
 answers[44] = choices[44][2];
 units[44] = "1";
 comments[44] = "Id Pregunta: 244. CONSTITUCION1978";
 preguntaids[44] = 244


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[45]= new Array();
 choices[45][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[45][1] = "Directiva 2004/113/CE del Consejo.";
 choices[45][2] = "Todas son correctas.";
 choices[45][3] = "Todas son falsas.";
 answers[45] = choices[45][2];
 units[45] = "14";
 comments[45] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";
 preguntaids[45] = 405


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[46]= new Array();
 choices[46][0] = "Tiene car&aacute;cter facultativo.";
 choices[46][1] = "Tiene car&aacute;cter potestativo. ";
 choices[46][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[46][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[46] = choices[46][1];
 units[46] = "22";
 comments[46] = "Id Pregunta: 127. ";
 preguntaids[46] = 127


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[47]= "48)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[47]= new Array();
 choices[47][0] = "el Secretario General";
 choices[47][1] = "el Subdirector General";
 choices[47][2] = "el Secretario de Estado";
 choices[47][3] = "ninguna es correcta";
 answers[47] = choices[47][0];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 823. Ley 40/2015";
 preguntaids[47] = 823


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[48]= "49)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[48]= new Array();
 choices[48][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[48][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[48][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[48][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[48] = choices[48][2];
 units[48] = "47";
 comments[48] = "Id Pregunta: 674. Historia Cl&iacute;nica Digital";
 preguntaids[48] = 674


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[49]= new Array();
 choices[49][0] = "PostgreSQL";
 choices[49][1] = "Datawarehouse";
 choices[49][2] = "Snowflake";
 choices[49][3] = "CouchDB";
 answers[49] = choices[49][0];
 units[49] = "61";
 comments[49] = "Id Pregunta: 578. Tema 61. TAI 2016.";
 preguntaids[49] = 578


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[50]= "51)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[50]= new Array();
 choices[50][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[50][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[50][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[50][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[50] = choices[50][1];
 units[50] = "5";
 comments[50] = "Id Pregunta: 297. UNION EUROPEA";
 preguntaids[50] = 297


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[51]= "52)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[51]= new Array();
 choices[51][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[51][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[51][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[51][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[51] = choices[51][1];
 units[51] = "64";
 comments[51] = "Id Pregunta: 11. AGE A1 2015";
 preguntaids[51] = 11


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[52]= "53)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[52]= new Array();
 choices[52][0] = "De un mes si el acto fuera presunto";
 choices[52][1] = "De un mes si el acto fuera expreso";
 choices[52][2] = "De un mes en cualquier caso";
 choices[52][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[52] = choices[52][1];
 units[52] = "8";
 comments[52] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";
 preguntaids[52] = 142


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[53]= new Array();
 choices[53][0] = "Maximizar el valor para los clientes";
 choices[53][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[53][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[53][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[53] = choices[53][3];
 units[53] = "34";
 comments[53] = "Id Pregunta: 718. Metodologias Lean";
 preguntaids[53] = 718


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[54]= new Array();
 choices[54][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[54][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[54][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[54][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[54] = choices[54][0];
 units[54] = "1";
 comments[54] = "Id Pregunta: 214. CONSTITUCION1978";
 preguntaids[54] = 214


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[55]= new Array();
 choices[55][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[55][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[55][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[55][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[55] = choices[55][0];
 units[55] = "75";
 comments[55] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[55] = 70


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[56]= new Array();
 choices[56][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[56][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[56][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[56][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[56] = choices[56][2];
 units[56] = "26";
 comments[56] = "Id Pregunta: 553. Gobernanza TIC";
 preguntaids[56] = 553


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[57]= "58)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[57]= new Array();
 choices[57][0] = "A la persona demandante.";
 choices[57][1] = "A la persona demandada.";
 choices[57][2] = "Al &oacute;rgano judicial.";
 choices[57][3] = "Al &oacute;rgano administrativo.";
 answers[57] = choices[57][1];
 units[57] = "14";
 comments[57] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[57] = 400


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[58]= "59)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[58]= new Array();
 choices[58][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[58][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[58][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[58][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[58] = choices[58][0];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 782. Ley 40/2015";
 preguntaids[58] = 782


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[59]= "60)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[59]= new Array();
 choices[59][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[59][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[59][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[59][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[59] = choices[59][2];
 units[59] = "12";
 comments[59] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";
 preguntaids[59] = 134


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[60]= "61)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[60]= new Array();
 choices[60][0] = "El Gobierno.";
 choices[60][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[60][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[60][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 206. CONSTITUCION1978";
 preguntaids[60] = 206


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[61]= new Array();
 choices[61][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[61][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[61][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[61][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[61] = choices[61][0];
 units[61] = "5";
 comments[61] = "Id Pregunta: 309. UNION EUROPEA";
 preguntaids[61] = 309


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[62]= "63)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[62]= new Array();
 choices[62][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[62][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[62][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[62][3] = "Todas son correctas.";
 answers[62] = choices[62][3];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 834. Ley 40/2015";
 preguntaids[62] = 834


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[63]= "64)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[63]= new Array();
 choices[63][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[63][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[63][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[63][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[63] = choices[63][2];
 units[63] = "10";
 comments[63] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";
 preguntaids[63] = 466


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[64]= "65)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[64]= new Array();
 choices[64][0] = "Los propios miembros del Tribunal.";
 choices[64][1] = "El Consejo de Europa.";
 choices[64][2] = "El Consejo Europeo.";
 choices[64][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[64] = choices[64][0];
 units[64] = "5";
 comments[64] = "Id Pregunta: 301. UNION EUROPEA";
 preguntaids[64] = 301


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[65]= "66)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[65]= new Array();
 choices[65][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[65][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[65][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[65][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[65] = choices[65][3];
 units[65] = "41";
 comments[65] = "Id Pregunta: 82. AGE A1 2015";
 preguntaids[65] = 82


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[66]= "67)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[66]= new Array();
 choices[66][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[66][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[66][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[66][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[66] = choices[66][0];
 units[66] = "10";
 comments[66] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";
 preguntaids[66] = 501


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[67]= new Array();
 choices[67][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[67][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[67][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[67][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[67] = choices[67][3];
 units[67] = "19";
 comments[67] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";
 preguntaids[67] = 171


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[68]= "69)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[68]= new Array();
 choices[68][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[68][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[68][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[68][3] = "Todas las respuestas son correctas.";
 answers[68] = choices[68][0];
 units[68] = "101";
 comments[68] = "Id Pregunta: 648. Junta de Extremadura A1 2015";
 preguntaids[68] = 648


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[69]= new Array();
 choices[69][0] = "Drupal";
 choices[69][1] = "Cassandra";
 choices[69][2] = "Wordpress";
 choices[69][3] = "OpenCMS";
 answers[69] = choices[69][1];
 units[69] = "99";
 comments[69] = "Id Pregunta: 40. AGE A1 2015";
 preguntaids[69] = 40


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale la respuesta correcta:";
 choices[70]= new Array();
 choices[70][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[70][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[70][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[70][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[70] = choices[70][1];
 units[70] = "98";
 comments[70] = "Id Pregunta: 14. AGE A1 2015";
 preguntaids[70] = 14


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[71]= "72)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[71]= new Array();
 choices[71][0] = "los &oacute;rganos administrativos";
 choices[71][1] = "las entidades dependientes";
 choices[71][2] = "las unidades administrativas";
 choices[71][3] = "los servicios comunes";
 answers[71] = choices[71][2];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 799. Ley 40/2015";
 preguntaids[71] = 799


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[72]= "73)  El lenguaje SPARK es un subconjunto de:";
 choices[72]= new Array();
 choices[72][0] = "Java";
 choices[72][1] = "Fortran";
 choices[72][2] = "Ruby";
 choices[72][3] = "Ada";
 answers[72] = choices[72][3];
 units[72] = "73";
 comments[72] = "Id Pregunta: 81. AGE A1 2015";
 preguntaids[72] = 81


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[73]= "74)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[73]= new Array();
 choices[73][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[73][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[73][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[73][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[73] = choices[73][2];
 units[73] = "47";
 comments[73] = "Id Pregunta: 77. AGE A1 2015";
 preguntaids[73] = 77


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[74]= "75)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[74]= new Array();
 choices[74][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[74][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[74][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[74][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[74] = choices[74][3];
 units[74] = "56";
 comments[74] = "Id Pregunta: 635. Junta de Extremadura A1 2015";
 preguntaids[74] = 635


