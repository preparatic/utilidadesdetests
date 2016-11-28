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

//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[0]= new Array();
 choices[0][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[0][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[0][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[0][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[1]= "2)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[1]= new Array();
 choices[1][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[1][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[1][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[1][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[1] = choices[1][3];
 units[1] = "57";
 comments[1] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


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


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[3]= new Array();
 choices[3][0] = "Art. 13, L.O.3/2007.";
 choices[3][1] = "Art. 14, L.O.3/2007.";
 choices[3][2] = "Art. 11, L.O.3/2007.";
 choices[3][3] = "Ninguna es correcta.";
 answers[3] = choices[3][2];
 units[3] = "14";
 comments[3] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[4]= new Array();
 choices[4][0] = "a) Los cuatro ejercicios siguientes.";
 choices[4][1] = "b) El ejercicio siguiente.";
 choices[4][2] = "c) Los dos ejercicios siguientes.";
 choices[4][3] = "d) Los tres ejercicios siguientes.";
 answers[4] = choices[4][3];
 units[4] = "10";
 comments[4] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[5]= new Array();
 choices[5][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[5][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[5][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[5][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[5] = choices[5][0];
 units[5] = "19";
 comments[5] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[6]= "7)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[6]= new Array();
 choices[6][0] = "Integrar la estrategia TIC con la de negocio";
 choices[6][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[6][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[6][3] = "Todas las anteriores";
 answers[6] = choices[6][3];
 units[6] = "26";
 comments[6] = "Id Pregunta: 549. Gobernanza TIC";


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[7]= new Array();
 choices[7][0] = "Ford";
 choices[7][1] = "Google";
 choices[7][2] = "Toyota";
 choices[7][3] = "Facebook";
 answers[7] = choices[7][2];
 units[7] = "34";
 comments[7] = "Id Pregunta: 719. Metodologias Lean";


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[8]= "9)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[8]= new Array();
 choices[8][0] = "De ocho a&ntilde;os.";
 choices[8][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[8][2] = "Ambas son correctas.";
 choices[8][3] = "No existe un l&iacute;mite.";
 answers[8] = choices[8][0];
 units[8] = "14";
 comments[8] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[9]= "10)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[9]= new Array();
 choices[9][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[9][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[9][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[9][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[9] = choices[9][1];
 units[9] = "7";
 comments[9] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[10]= "11)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[10]= new Array();
 choices[10][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[10][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[10][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[10][3] = "Todas las respuestas anteriores son correctas.";
 answers[10] = choices[10][0];
 units[10] = "45";
 comments[10] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[11]= "12)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[11]= new Array();
 choices[11][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[11][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[11][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[11][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[11] = choices[11][3];
 units[11] = "43";
 comments[11] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[12]= "13)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[12]= new Array();
 choices[12][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[12][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[12][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[12][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[12] = choices[12][3];
 units[12] = "10";
 comments[12] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[13]= "14)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[13]= new Array();
 choices[13][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[13][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[13][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[13][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[13] = choices[13][2];
 units[13] = "14";
 comments[13] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[14]= "15)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[14]= new Array();
 choices[14][0] = "Un plan de igualdad.";
 choices[14][1] = "Un informe de impacto de g&eacute;nero.";
 choices[14][2] = "Un programa de igualdad.";
 choices[14][3] = "Todas son correctas.";
 answers[14] = choices[14][1];
 units[14] = "14";
 comments[14] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[15]= new Array();
 choices[15][0] = "A la CETIC";
 choices[15][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[15][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[15][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[15] = choices[15][3];
 units[15] = "19";
 comments[15] = "Id Pregunta: 582. Estrategia TIC";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[16]= "17)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[16]= new Array();
 choices[16][0] = "Quince miembros.";
 choices[16][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[16][2] = "Los miembros que determine el Consejo.";
 choices[16][3] = "Un Presidente y quince miembros.";
 answers[16] = choices[16][1];
 units[16] = "5";
 comments[16] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[17]= new Array();
 choices[17][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[17][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[17][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[17][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[17] = choices[17][1];
 units[17] = "89";
 comments[17] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[18]= "19)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[18]= new Array();
 choices[18][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[18][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[18][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[18][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[18] = choices[18][0];
 units[18] = "7";
 comments[18] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[19]= "20)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[19]= new Array();
 choices[19][0] = "los Subsecretarios y los Secretarios generales";
 choices[19][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[19][2] = "los Secretarios de Estado y los Directores generales";
 choices[19][3] = "los Ministros y los Secretarios de Estado";
 answers[19] = choices[19][3];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[20]= new Array();
 choices[20][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[20][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[20][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[20][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[20] = choices[20][2];
 units[20] = "10";
 comments[20] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[21]= new Array();
 choices[21][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[21][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[21][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[21][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[21] = choices[21][1];
 units[21] = "92";
 comments[21] = "Id Pregunta: 273. INTEGRACION CONTINUA";


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale la respuesta correcta:";
 choices[22]= new Array();
 choices[22][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[22][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[22][2] = "A y B son correctas.";
 choices[22][3] = "A y B son falsas.";
 answers[22] = choices[22][2];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 848. Ley 40/2015";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[23]= new Array();
 choices[23][0] = "Yarn";
 choices[23][1] = "Flume";
 choices[23][2] = "Hive";
 choices[23][3] = "BizAgi";
 answers[23] = choices[23][3];
 units[23] = "73";
 comments[23] = "Id Pregunta: 657. ";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[24]= "25)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[24]= new Array();
 choices[24][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[24][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[24][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[24][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[24] = choices[24][0];
 units[24] = "12";
 comments[24] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[25]= "26)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[25]= new Array();
 choices[25][0] = "Presencia equilibrada.";
 choices[25][1] = "Presencia paritaria.";
 choices[25][2] = "Presencia consensuada.";
 choices[25][3] = "presencia horizontal.";
 answers[25] = choices[25][0];
 units[25] = "14";
 comments[25] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[26]= "27)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[26]= new Array();
 choices[26][0] = "El Instituto de la Mujer.";
 choices[26][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[26][2] = "Ambas son correctas.";
 choices[26][3] = "A y B son incorrectas.";
 answers[26] = choices[26][2];
 units[26] = "14";
 comments[26] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[27]= "28)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[27]= new Array();
 choices[27][0] = "ASF-AL (Apache License 2.0)";
 choices[27][1] = "EUPL (European Union Public License)";
 choices[27][2] = "LGPL (Lesser General Public License)";
 choices[27][3] = "MIT(MIT License)";
 answers[27] = choices[27][1];
 units[27] = "43";
 comments[27] = "Id Pregunta: 32. AGE A1 2015";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[28]= new Array();
 choices[28][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[28][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[28][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[28][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[28] = choices[28][2];
 units[28] = "26";
 comments[28] = "Id Pregunta: 553. Gobernanza TIC";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; facilita un ORM?";
 choices[29]= new Array();
 choices[29][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[29][1] = "Conversi&oacute;n de objetos a documentos";
 choices[29][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[29][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[29] = choices[29][0];
 units[29] = "62";
 comments[29] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[30]= "31)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[30]= new Array();
 choices[30][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[30][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[30][2] = "el sector p&uacute;blico institucional";
 choices[30][3] = "el sector privado corporativo";
 answers[30] = choices[30][3];
 units[30] = "7";
 comments[30] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[31]= "32)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[31]= new Array();
 choices[31][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[31][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[31][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[31][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[31] = choices[31][2];
 units[31] = "73";
 comments[31] = "Id Pregunta: 654. ";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[32]= "33)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[32]= new Array();
 choices[32][0] = "El Parlamento Europeo.";
 choices[32][1] = "Todas las respuestas son correctas.";
 choices[32][2] = "La Comisi&oacute;n Europea.";
 choices[32][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[32] = choices[32][1];
 units[32] = "5";
 comments[32] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[33]= new Array();
 choices[33][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[33][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[33][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[33][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[33] = choices[33][0];
 units[33] = "19";
 comments[33] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[34]= "35)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[34]= new Array();
 choices[34][0] = "6 TB.";
 choices[34][1] = "8 TB.";
 choices[34][2] = "7 TB.";
 choices[34][3] = "4 TB.";
 answers[34] = choices[34][3];
 units[34] = "53";
 comments[34] = "Id Pregunta: 853. Xunta de Galicia 2015";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[35]= new Array();
 choices[35][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[35][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[35][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[35][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[35] = choices[35][2];
 units[35] = "71";
 comments[35] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[36]= "37)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[36]= new Array();
 choices[36][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[36][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[36][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[36][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[36] = choices[36][0];
 units[36] = "12";
 comments[36] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[37]= "38)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[37]= new Array();
 choices[37][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[37][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[37][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[37][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[37] = choices[37][2];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[38]= "39)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[38]= new Array();
 choices[38][0] = "El Segundo.";
 choices[38][1] = "El Primero.";
 choices[38][2] = "El Preliminar.";
 choices[38][3] = "El Tercero.";
 answers[38] = choices[38][0];
 units[38] = "1";
 comments[38] = "Id Pregunta: 266. CONSTITUCION1978";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[39]= new Array();
 choices[39][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[39][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[39][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[39][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[39] = choices[39][0];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 849. Ley 40/2015";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[40]= new Array();
 choices[40][0] = "absoluta de las Cortes Generales.";
 choices[40][1] = "absoluta del Congreso de los Diputados.";
 choices[40][2] = "simple de las Cortes Generales.";
 choices[40][3] = "simple del Congreso de los Diputados.";
 answers[40] = choices[40][3];
 units[40] = "1";
 comments[40] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[41]= "42)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[41]= new Array();
 choices[41][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[41][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[41][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[41][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[41] = choices[41][2];
 units[41] = "101";
 comments[41] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[42]= "43)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[42]= new Array();
 choices[42][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[42][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[42][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[42][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[42] = choices[42][2];
 units[42] = "45";
 comments[42] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[43]= "44)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[43]= new Array();
 choices[43][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[43][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[43][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[43][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[43] = choices[43][1];
 units[43] = "35";
 comments[43] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[44]= "45)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[44]= new Array();
 choices[44][0] = "Fat y Ntfs.";
 choices[44][1] = "Extfat y Fat.";
 choices[44][2] = "Fat y Nfst.";
 choices[44][3] = "ext2fs y Ntfs.";
 answers[44] = choices[44][0];
 units[44] = "58";
 comments[44] = "Id Pregunta: 642. Junta de Extremadura A1 2015";


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[45]= "46)  En qu&eacute; consiste el principio BASE:";
 choices[45]= new Array();
 choices[45][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[45][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[45][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[45][3] = "Todas las anteriores son falsas";
 answers[45] = choices[45][3];
 units[45] = "73";
 comments[45] = "Id Pregunta: 103. ";


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[46]= "47)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[46]= new Array();
 choices[46][0] = "El Delegado del Gobierno.";
 choices[46][1] = "El Subdelegado del Gobierno.";
 choices[46][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[46][3] = "El Gobernador Civil.";
 answers[46] = choices[46][2];
 units[46] = "1";
 comments[46] = "Id Pregunta: 207. CONSTITUCION1978";


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[47]= "48)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[47]= new Array();
 choices[47][0] = "l Consejo General del Poder Judicial";
 choices[47][1] = "El pleno de Tribunal Constitucional";
 choices[47][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[47][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[47] = choices[47][3];
 units[47] = "1";
 comments[47] = "Id Pregunta: 181. CONSTITUCION1978";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[48]= "49)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[48]= new Array();
 choices[48][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[48][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[48][2] = "A partir del 1 de enero de 2015";
 choices[48][3] = "A partir del 1 de julio de 2016";
 answers[48] = choices[48][1];
 units[48] = "77";
 comments[48] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[49]= "50)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[49]= new Array();
 choices[49][0] = "Sello electr&oacute;nico";
 choices[49][1] = "Sede electr&oacute;nica";
 choices[49][2] = "Servidor seguro (SSL/TLS)";
 choices[49][3] = "Empleado p&uacute;blico";
 answers[49] = choices[49][2];
 units[49] = "7";
 comments[49] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[50]= "51)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[50]= new Array();
 choices[50][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[50][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[50][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[50][3] = "Todos las anteriores son ciertas.";
 answers[50] = choices[50][3];
 units[50] = "12";
 comments[50] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[51]= "52)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[51]= new Array();
 choices[51][0] = "Se definen iteraciones";
 choices[51][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[51][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[51][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[51] = choices[51][1];
 units[51] = "34, 84";
 comments[51] = "Id Pregunta: 732. Metodologias &aacute;giles";


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[52]= new Array();
 choices[52][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[52][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[52][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[52][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[52] = choices[52][1];
 units[52] = "101";
 comments[52] = "Id Pregunta: 5. AGE A1 2015";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[53]= "54)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[53]= new Array();
 choices[53][0] = "Un informe de g&eacute;nero.";
 choices[53][1] = "La variable de sexo.";
 choices[53][2] = "La variable de edad.";
 choices[53][3] = "La variable de comportamiento.";
 answers[53] = choices[53][1];
 units[53] = "14";
 comments[53] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "VMware ESX";
 choices[54][1] = "XenServer";
 choices[54][2] = "Alfresco";
 choices[54][3] = "Microsoft Hyper-V";
 answers[54] = choices[54][2];
 units[54] = "54";
 comments[54] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[55]= "56)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[55]= new Array();
 choices[55][0] = "la capital del pa&iacute;s";
 choices[55][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[55][2] = "cada una de las provincias";
 choices[55][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[55] = choices[55][1];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[56]= new Array();
 choices[56][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[56][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[56][2] = "la falta de interoperabilidad.";
 choices[56][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[56] = choices[56][1];
 units[56] = "5";
 comments[56] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[57]= "58)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[57]= new Array();
 choices[57][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[57][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[57][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[57][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[57] = choices[57][1];
 units[57] = "63";
 comments[57] = "Id Pregunta: 613. Junta de Extremadura A1 2015";


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[58]= new Array();
 choices[58][0] = "El 1 de junio de 1999.";
 choices[58][1] = "El 1 de mayo de 1999.";
 choices[58][2] = "El 1 de abril de 1999.";
 choices[58][3] = "El 1 de marzo de 1999.";
 answers[58] = choices[58][1];
 units[58] = "5";
 comments[58] = "Id Pregunta: 364. UNION EUROPEA";


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[59]= new Array();
 choices[59][0] = "IEEE 802.11p";
 choices[59][1] = "IEEE 802.11r";
 choices[59][2] = "IEEE 802.11v";
 choices[59][3] = "IEEE 802.11w";
 answers[59] = choices[59][1];
 units[59] = "112";
 comments[59] = "Id Pregunta: 574. Tema 112. TAI 2016.";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[60]= "61)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[60]= new Array();
 choices[60][0] = "Subsecretario";
 choices[60][1] = "Subdirector general";
 choices[60][2] = "Secretario de Estado";
 choices[60][3] = "ninguna es correcta";
 answers[60] = choices[60][0];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[61]= new Array();
 choices[61][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[61][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[61][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[61][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[61] = choices[61][0];
 units[61] = "1";
 comments[61] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[62]= new Array();
 choices[62][0] = "En 2015";
 choices[62][1] = "En 2013";
 choices[62][2] = "En 2016";
 choices[62][3] = "En 2007";
 answers[62] = choices[62][1];
 units[62] = "19";
 comments[62] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[63]= new Array();
 choices[63][0] = "Veinte.";
 choices[63][1] = "Quince.";
 choices[63][2] = "Diez.";
 choices[63][3] = "Doce.";
 answers[63] = choices[63][1];
 units[63] = "1";
 comments[63] = "Id Pregunta: 264. CONSTITUCION1978";


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[64]= new Array();
 choices[64][0] = "Maximizar el valor para los clientes";
 choices[64][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[64][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[64][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[64] = choices[64][3];
 units[64] = "34";
 comments[64] = "Id Pregunta: 718. Metodologias Lean";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[65]= new Array();
 choices[65][0] = "De los derechos y deberes fundamentales.";
 choices[65][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[65][2] = "Derechos y libertades.";
 choices[65][3] = "De la Corona.";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 221. CONSTITUCION1978";


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[66]= new Array();
 choices[66][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[66][1] = "La Direcci&oacute;n de la Competencia.";
 choices[66][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[66][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[66] = choices[66][0];
 units[66] = "121";
 comments[66] = "Id Pregunta: 628. Junta de Extremadura A1 2015";


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[67]= "68)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[67]= new Array();
 choices[67][0] = "90";
 choices[67][1] = "50";
 choices[67][2] = "64";
 choices[67][3] = "60";
 answers[67] = choices[67][1];
 units[67] = "5";
 comments[67] = "Id Pregunta: 331. UNION EUROPEA";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[68]= "69)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[68]= new Array();
 choices[68][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[68][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[68][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[68][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[68] = choices[68][0];
 units[68] = "1";
 comments[68] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[69]= new Array();
 choices[69][0] = "SessionBean";
 choices[69][1] = "JavaBean";
 choices[69][2] = "MBeans";
 choices[69][3] = "MessageDrivenBean";
 answers[69] = choices[69][2];
 units[69] = "64";
 comments[69] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[70]= "71)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[70]= new Array();
 choices[70][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[70][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[70][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[70][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[70] = choices[70][2];
 units[70] = "7";
 comments[70] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[71]= "72)  Respecto a las unidades administrativas:";
 choices[71]= new Array();
 choices[71][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[71][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[71][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[71][3] = "ninguna es correcta";
 answers[71] = choices[71][1];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[72]= "73)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[72]= new Array();
 choices[72][0] = "Conformidad";
 choices[72][1] = "Responsabilidad";
 choices[72][2] = "Adquisici&oacute;n";
 choices[72][3] = "Desempe&ntilde;o";
 answers[72] = choices[72][0];
 units[72] = "26";
 comments[72] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[73]= "74)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[73]= new Array();
 choices[73][0] = "Por unanimidad.";
 choices[73][1] = "Por mayor&iacute;a cualificada.";
 choices[73][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[73][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[73] = choices[73][3];
 units[73] = "5";
 comments[73] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[74]= "75)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[74]= new Array();
 choices[74][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[74][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[74][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[74][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[74] = choices[74][1];
 units[74] = "7";
 comments[74] = "Id Pregunta: 535. LEY 39/2015";


