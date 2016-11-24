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

//  Id pregunta: 10343 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[0]= new Array();
 choices[0][0] = "23";
 choices[0][1] = "20";
 choices[0][2] = "14";
 choices[0][3] = "18";
 answers[0] = choices[0][1];
 units[0] = "5";
 comments[0] = "Id Pregunta: 10343. UNION EUROPEA";


//  Id pregunta: 10406 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[1]= new Array();
 choices[1][0] = "Art&iacute;culo 9.1 CE.";
 choices[1][1] = "Art&iacute;culo 53 CE.";
 choices[1][2] = "Art&iacute;culo 14 CE.";
 choices[1][3] = "Art&iacute;culo 16 CE.";
 answers[1] = choices[1][2];
 units[1] = "14";
 comments[1] = "Id Pregunta: 10406. POLITICAS DE IGUALDAD";


//  Id pregunta: 10065 Año de creación de pregunta: 2016
 questions[2]= "3)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[2]= new Array();
 choices[2][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[2][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[2][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[2][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[2] = choices[2][2];
 units[2] = "53";
 comments[2] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10599 Año de creación de pregunta: 2016
 questions[3]= "4)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[3]= new Array();
 choices[3][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[3][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[3][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[3][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[3] = choices[3][2];
 units[3] = "45";
 comments[3] = "Id Pregunta: 10599. Junta de Extremadura A1 2015";


//  Id pregunta: 10376 Año de creación de pregunta: 2016
 questions[4]= "5)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[4]= new Array();
 choices[4][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[4][1] = "Personas con nacionalidad europea.";
 choices[4][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[4][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[4] = choices[4][3];
 units[4] = "5";
 comments[4] = "Id Pregunta: 10376. UNION EUROPEA";


//  Id pregunta: 10529 Año de creación de pregunta: 2016
 questions[5]= "6)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[5]= new Array();
 choices[5][0] = "formular solicitudes";
 choices[5][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[5][2] = "presentar declaraciones responsables o comunicaciones";
 choices[5][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[5] = choices[5][1];
 units[5] = "7";
 comments[5] = "Id Pregunta: 10529. LEY 39/2015";


//  Id pregunta: 10458 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[6]= new Array();
 choices[6][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[6][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[6][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[6][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[6] = choices[6][3];
 units[6] = "10";
 comments[6] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10091 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[7]= new Array();
 choices[7][0] = "JUnit, Artifactory y SonarQube";
 choices[7][1] = "JUnit, Artifactory y Selenium";
 choices[7][2] = "JUnit, SonarQube y Selenium";
 choices[7][3] = "ArtiFactory, SonarQube y Selenium";
 answers[7] = choices[7][2];
 units[7] = "92";
 comments[7] = "Id Pregunta: 10091. AGE A1 2015";


//  Id pregunta: 10224 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[8]= new Array();
 choices[8][0] = "Art&iacute;culo 16.2.";
 choices[8][1] = "Art&iacute;culo 17.1.";
 choices[8][2] = "Art&iacute;culo 18.1.";
 choices[8][3] = "Art&iacute;culo 18.2.";
 answers[8] = choices[8][2];
 units[8] = "1";
 comments[8] = "Id Pregunta: 10224. CONSTITUCION1978";


//  Id pregunta: 10427 Año de creación de pregunta: 2016
 questions[9]= "10)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[9]= new Array();
 choices[9][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[9][1] = "En el extranjero.";
 choices[9][2] = "Ninguna es correcta.";
 choices[9][3] = "Ambas son correctas.";
 answers[9] = choices[9][0];
 units[9] = "14";
 comments[9] = "Id Pregunta: 10427. POLITICAS DE IGUALDAD";


//  Id pregunta: 10112 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[10]= new Array();
 choices[10][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[10][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[10][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[10][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[10] = choices[10][1];
 units[10] = "15";
 comments[10] = "Id Pregunta: 10112. ";


//  Id pregunta: 10439 Año de creación de pregunta: 2016
 questions[11]= "12)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[11]= new Array();
 choices[11][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[11][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[11][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[11][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[11] = choices[11][1];
 units[11] = "43";
 comments[11] = "Id Pregunta: 10439. SERVICIOS COMUNES";


//  Id pregunta: 10669 Año de creación de pregunta: 2016
 questions[12]= "13)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[12]= new Array();
 choices[12][0] = "Resoluci&oacute;n.";
 choices[12][1] = "Desistimiento o renuncia.";
 choices[12][2] = "Caducidad.";
 choices[12][3] = "Todas las anteriores.";
 answers[12] = choices[12][3];
 units[12] = "7";
 comments[12] = "Id Pregunta: 10669. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 10282 Año de creación de pregunta: 2016
 questions[13]= "14)  Sobre el Plan Juncker:";
 choices[13]= new Array();
 choices[13][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[13][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[13][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[13][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[13] = choices[13][1];
 units[13] = "5";
 comments[13] = "Id Pregunta: 10282. UNION EUROPEA";


//  Id pregunta: 10486 Año de creación de pregunta: 2016
 questions[14]= "15)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[14]= new Array();
 choices[14][0] = "La Ley General Tributaria.";
 choices[14][1] = "La Ley Presupuestaria.";
 choices[14][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[14][3] = "Ninguna de las respuestas es correcta.";
 answers[14] = choices[14][0];
 units[14] = "10";
 comments[14] = "Id Pregunta: 10486. PRESUPUESTOS GENERALES";


//  Id pregunta: 10638 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[15]= new Array();
 choices[15][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[15][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[15][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[15][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[15] = choices[15][3];
 units[15] = "57";
 comments[15] = "Id Pregunta: 10638. Junta de Extremadura A1 2015";


//  Id pregunta: 10118 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[16]= new Array();
 choices[16][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[16][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[16][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[16][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[16] = choices[16][2];
 units[16] = "15";
 comments[16] = "Id Pregunta: 10118. ";


//  Id pregunta: 10419 Año de creación de pregunta: 2016
 questions[17]= "18)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[17]= new Array();
 choices[17][0] = "P&uacute;blica.";
 choices[17][1] = "Privada.";
 choices[17][2] = "Ambas son correctas.";
 choices[17][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[17] = choices[17][0];
 units[17] = "14";
 comments[17] = "Id Pregunta: 10419. POLITICAS DE IGUALDAD";


//  Id pregunta: 10678 Año de creación de pregunta: 2016
 questions[18]= "19)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[18]= new Array();
 choices[18][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[18][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[18][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[18][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[18] = choices[18][1];
 units[18] = "14";
 comments[18] = "Id Pregunta: 10678. Dependencia";


//  Id pregunta: 10557 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[19]= new Array();
 choices[19][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[19][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[19][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[19][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[19] = choices[19][0];
 units[19] = "19";
 comments[19] = "Id Pregunta: 10557. Agenda Digital";


//  Id pregunta: 10025 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[20]= new Array();
 choices[20][0] = "SessionBean";
 choices[20][1] = "JavaBean";
 choices[20][2] = "MBeans";
 choices[20][3] = "MessageDrivenBean";
 answers[20] = choices[20][2];
 units[20] = "64";
 comments[20] = "Id Pregunta: 10025. AGE A1 2015";


//  Id pregunta: 10306 Año de creación de pregunta: 2016
 questions[21]= "22)  Componen la Comisi&oacute;n Europea:";
 choices[21]= new Array();
 choices[21][0] = "Un Comisario por cada Estado miembro.";
 choices[21][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[21][2] = "Dos Comisarios por cada Estado miembro.";
 choices[21][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[21] = choices[21][0];
 units[21] = "5";
 comments[21] = "Id Pregunta: 10306. UNION EUROPEA";


//  Id pregunta: 10350 Año de creación de pregunta: 2016
 questions[22]= "23)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[22]= new Array();
 choices[22][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[22][1] = "Uno de sus miembros.";
 choices[22][2] = "La Comisi&oacute;n.";
 choices[22][3] = "Todas las respuestas son correctas.";
 answers[22] = choices[22][3];
 units[22] = "5";
 comments[22] = "Id Pregunta: 10350. UNION EUROPEA";


//  Id pregunta: 10337 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[23]= new Array();
 choices[23][0] = "732";
 choices[23][1] = "626";
 choices[23][2] = "786";
 choices[23][3] = "360";
 answers[23] = choices[23][2];
 units[23] = "5";
 comments[23] = "Id Pregunta: 10337. UNION EUROPEA";


//  Id pregunta: 10679 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[24][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[24][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[24][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[24] = choices[24][1];
 units[24] = "14";
 comments[24] = "Id Pregunta: 10679. Pensiones";


//  Id pregunta: 10444 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[25]= new Array();
 choices[25][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[25][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[25][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[25][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[25] = choices[25][1];
 units[25] = "43";
 comments[25] = "Id Pregunta: 10444. SERVICIOS COMUNES";


//  Id pregunta: 10074 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[26]= new Array();
 choices[26][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[26][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[26][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[26][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[26] = choices[26][3];
 units[26] = "106";
 comments[26] = "Id Pregunta: 10074. AGE A1 2015";


//  Id pregunta: 10270 Año de creación de pregunta: 2016
 questions[27]= "28)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[27]= new Array();
 choices[27][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[27][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[27][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[27][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[27] = choices[27][0];
 units[27] = "1";
 comments[27] = "Id Pregunta: 10270. CONSTITUCION1978";


//  Id pregunta: 10620 Año de creación de pregunta: 2016
 questions[28]= "29)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[28]= new Array();
 choices[28][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[28][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[28][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[28][3] = "Todas las respuestas son correctas.";
 answers[28] = choices[28][3];
 units[28] = "50";
 comments[28] = "Id Pregunta: 10620. Junta de Extremadura A1 2015";


//  Id pregunta: 10232 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[29]= new Array();
 choices[29][0] = "El Presidente del Senado.";
 choices[29][1] = "El Defensor del Pueblo.";
 choices[29][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[29][3] = "El Presidente del Gobierno.";
 answers[29] = choices[29][2];
 units[29] = "1";
 comments[29] = "Id Pregunta: 10232. CONSTITUCION1978";


//  Id pregunta: 10585 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[30]= new Array();
 choices[30][0] = "La CETIC";
 choices[30][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[30][2] = "La DTIC";
 choices[30][3] = "Ninguno de los anteriores";
 answers[30] = choices[30][1];
 units[30] = "19";
 comments[30] = "Id Pregunta: 10585. Estrategia TIC";


//  Id pregunta: 10512 Año de creación de pregunta: 2016
 questions[31]= "32)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[31]= new Array();
 choices[31][0] = "solo mediante ley";
 choices[31][1] = "reglamentariamente";
 choices[31][2] = "mediante ley o reglamentariamente";
 choices[31][3] = "ninguna es correcta";
 answers[31] = choices[31][1];
 units[31] = "7";
 comments[31] = "Id Pregunta: 10512. LEY 39/2015";


//  Id pregunta: 10467 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[32]= new Array();
 choices[32][0] = "Tres meses.";
 choices[32][1] = "Nueve meses.";
 choices[32][2] = "Cuatro meses.";
 choices[32][3] = "Seis meses.";
 answers[32] = choices[32][0];
 units[32] = "10";
 comments[32] = "Id Pregunta: 10467. PRESUPUESTOS GENERALES";


//  Id pregunta: 10436 Año de creación de pregunta: 2016
 questions[33]= "34)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[33]= new Array();
 choices[33][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[33][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[33][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[33][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[33] = choices[33][2];
 units[33] = "43";
 comments[33] = "Id Pregunta: 10436. SERVICIOS COMUNES";


//  Id pregunta: 10243 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[34]= new Array();
 choices[34][0] = "Art&iacute;culo 70.";
 choices[34][1] = "Art&iacute;culo 54.";
 choices[34][2] = "Articulo 62.";
 choices[34][3] = "Articulo 55. 5.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 10243. CONSTITUCION1978";


//  Id pregunta: 10617 Año de creación de pregunta: 2016
 questions[35]= "36)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[35]= new Array();
 choices[35][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[35][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[35][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[35][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[35] = choices[35][0];
 units[35] = "84";
 comments[35] = "Id Pregunta: 10617. Junta de Extremadura A1 2015";


//  Id pregunta: 10082 Año de creación de pregunta: 2016
 questions[36]= "37)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[36]= new Array();
 choices[36][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[36][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[36][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[36][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[36] = choices[36][3];
 units[36] = "41";
 comments[36] = "Id Pregunta: 10082. AGE A1 2015";


//  Id pregunta: 10609 Año de creación de pregunta: 2016
 questions[37]= "38)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[37]= new Array();
 choices[37][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[37][1] = "Clasificaci&oacute;n por cuenta.";
 choices[37][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[37][3] = "Clasificaci&oacute;n por intercambio.";
 answers[37] = choices[37][3];
 units[37] = "56";
 comments[37] = "Id Pregunta: 10609. Junta de Extremadura A1 2015";


//  Id pregunta: 10496 Año de creación de pregunta: 2016
 questions[38]= "39)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[38]= new Array();
 choices[38][0] = "Las respuestas a) y b) son correctas.";
 choices[38][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[38][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[38][3] = "Las respuestas a) y b) no son correctas.";
 answers[38] = choices[38][0];
 units[38] = "10";
 comments[38] = "Id Pregunta: 10496. PRESUPUESTOS GENERALES";


//  Id pregunta: 10457 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[39]= new Array();
 choices[39][0] = "A nivel de secci&oacute;n de programa.";
 choices[39][1] = "A nivel de grupo de programa.";
 choices[39][2] = "Ninguna de las respuestas es correcta.";
 choices[39][3] = "A nivel de programa.";
 answers[39] = choices[39][3];
 units[39] = "10";
 comments[39] = "Id Pregunta: 10457. PRESUPUESTOS GENERALES";


//  Id pregunta: 10441 Año de creación de pregunta: 2016
 questions[40]= "41)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[40]= new Array();
 choices[40][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[40][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[40][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[40][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[40] = choices[40][1];
 units[40] = "43";
 comments[40] = "Id Pregunta: 10441. SERVICIOS COMUNES";


//  Id pregunta: 10220 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[41]= new Array();
 choices[41][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[41][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[41][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[41][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[41] = choices[41][0];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10220. CONSTITUCION1978";


//  Id pregunta: 10012 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[42]= new Array();
 choices[42][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[42][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[42][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[42][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[42] = choices[42][0];
 units[42] = "62";
 comments[42] = "Id Pregunta: 10012. AGE A1 2015";


//  Id pregunta: 10338 Año de creación de pregunta: 2016
 questions[43]= "44)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[43]= new Array();
 choices[43][0] = "CO.PER.";
 choices[43][1] = "COMPER.";
 choices[43][2] = "CO.RE.PER.";
 choices[43][3] = "CO.PE.RRE.";
 answers[43] = choices[43][2];
 units[43] = "5";
 comments[43] = "Id Pregunta: 10338. UNION EUROPEA";


//  Id pregunta: 10449 Año de creación de pregunta: 2016
 questions[44]= "45)  El cr&eacute;dito presupuestario es...";
 choices[44]= new Array();
 choices[44][0] = "El sujeto que realiza el gasto";
 choices[44][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[44][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[44][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 10449. PRESUPUESTOS GENERALES";


//  Id pregunta: 10092 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[45]= new Array();
 choices[45][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[45][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[45][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[45][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[45] = choices[45][0];
 units[45] = "48";
 comments[45] = "Id Pregunta: 10092. AGE A1 2015";


//  Id pregunta: 10602 Año de creación de pregunta: 2016
 questions[46]= "47)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[46]= new Array();
 choices[46][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[46][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[46][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[46][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[46] = choices[46][2];
 units[46] = "76";
 comments[46] = "Id Pregunta: 10602. Junta de Extremadura A1 2015";


//  Id pregunta: 10087 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[47][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[47][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[47][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[47] = choices[47][2];
 units[47] = "48";
 comments[47] = "Id Pregunta: 10087. AGE A1 2015";


//  Id pregunta: 10451 Año de creación de pregunta: 2016
 questions[48]= "49)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[48]= new Array();
 choices[48][0] = "Los cr&eacute;ditos";
 choices[48][1] = "Las partidas presupuestarias";
 choices[48][2] = "Los derechos";
 choices[48][3] = "Las obligaciones";
 answers[48] = choices[48][2];
 units[48] = "10";
 comments[48] = "Id Pregunta: 10451. PRESUPUESTOS GENERALES";


//  Id pregunta: 10237 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[49][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[49][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[49][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[49] = choices[49][2];
 units[49] = "1";
 comments[49] = "Id Pregunta: 10237. CONSTITUCION1978";


//  Id pregunta: 10377 Año de creación de pregunta: 2016
 questions[50]= "51)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[50]= new Array();
 choices[50][0] = "Tener una estructura institucional.";
 choices[50][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[50][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[50][3] = "Todas las respuestas son correctas.";
 answers[50] = choices[50][3];
 units[50] = "5";
 comments[50] = "Id Pregunta: 10377. UNION EUROPEA";


//  Id pregunta: 10162 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[51]= new Array();
 choices[51][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[51][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[51][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[51][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[51] = choices[51][0];
 units[51] = "19";
 comments[51] = "Id Pregunta: 10162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 10604 Año de creación de pregunta: 2016
 questions[52]= "53)  ITIL v3, define:";
 choices[52]= new Array();
 choices[52][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[52][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[52][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[52][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[52] = choices[52][0];
 units[52] = "101";
 comments[52] = "Id Pregunta: 10604. Junta de Extremadura A1 2015";


//  Id pregunta: 10340 Año de creación de pregunta: 2016
 questions[53]= "54)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[53]= new Array();
 choices[53][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[53][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[53][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[53][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[53] = choices[53][2];
 units[53] = "5";
 comments[53] = "Id Pregunta: 10340. UNION EUROPEA";


//  Id pregunta: 10401 Año de creación de pregunta: 2016
 questions[54]= "55)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[54]= new Array();
 choices[54][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[54][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[54][2] = "Ambas son correctas.";
 choices[54][3] = "A y B son incorrectas.";
 answers[54] = choices[54][2];
 units[54] = "14";
 comments[54] = "Id Pregunta: 10401. POLITICAS DE IGUALDAD";


//  Id pregunta: 10120 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[55]= new Array();
 choices[55][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[55][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[55][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[55][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[55] = choices[55][3];
 units[55] = "22";
 comments[55] = "Id Pregunta: 10120. ";


//  Id pregunta: 10362 Año de creación de pregunta: 2016
 questions[56]= "57)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[56]= new Array();
 choices[56][0] = "Son actos normativos.";
 choices[56][1] = "Poseen alcance general.";
 choices[56][2] = "No son obligatorias.";
 choices[56][3] = "Son actos individuales no normativos.";
 answers[56] = choices[56][3];
 units[56] = "5";
 comments[56] = "Id Pregunta: 10362. UNION EUROPEA";


//  Id pregunta: 10543 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[57]= new Array();
 choices[57][0] = "ISO/IEC 31000";
 choices[57][1] = "ISO/IEC 14000";
 choices[57][2] = "ISO/IEC 38500";
 choices[57][3] = "ISO/IEC 18000";
 answers[57] = choices[57][2];
 units[57] = "26";
 comments[57] = "Id Pregunta: 10543. Gobernanza TIC";


//  Id pregunta: 10168 Año de creación de pregunta: 2016
 questions[58]= "59)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[58]= new Array();
 choices[58][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[58][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[58][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[58][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[58] = choices[58][2];
 units[58] = "19";
 comments[58] = "Id Pregunta: 10168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 10085 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[59]= new Array();
 choices[59][0] = "Estimaci&oacute;n del riesgo";
 choices[59][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[59][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[59][3] = "Mapa de riesgos";
 answers[59] = choices[59][3];
 units[59] = "45";
 comments[59] = "Id Pregunta: 10085. AGE A1 2015";


//  Id pregunta: 10021 Año de creación de pregunta: 2016
 questions[60]= "61)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[60]= new Array();
 choices[60][0] = "Gesti&oacute;n de la disponibilidad";
 choices[60][1] = "Gesti&oacute;n de la demanda";
 choices[60][2] = "Gesti&oacute;n de entregas";
 choices[60][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[60] = choices[60][0];
 units[60] = "101";
 comments[60] = "Id Pregunta: 10021. AGE A1 2015";


//  Id pregunta: 10227 Año de creación de pregunta: 2016
 questions[61]= "62)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[61]= new Array();
 choices[61][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[61][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[61][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[61][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[61] = choices[61][3];
 units[61] = "1";
 comments[61] = "Id Pregunta: 10227. CONSTITUCION1978";


//  Id pregunta: 10273 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[62]= new Array();
 choices[62][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[62][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[62][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[62][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[62] = choices[62][1];
 units[62] = "92";
 comments[62] = "Id Pregunta: 10273. INTEGRACION CONTINUA";


//  Id pregunta: 10298 Año de creación de pregunta: 2016
 questions[63]= "64)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[63]= new Array();
 choices[63][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[63][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[63][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[63][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[63] = choices[63][1];
 units[63] = "5";
 comments[63] = "Id Pregunta: 10298. UNION EUROPEA";


//  Id pregunta: 10001 Año de creación de pregunta: 2016
 questions[64]= "65)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[64]= new Array();
 choices[64][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[64][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[64][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[64][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[64] = choices[64][2];
 units[64] = "26";
 comments[64] = "Id Pregunta: 10001. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10313 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[65]= new Array();
 choices[65][0] = "El Consejo Europeo.";
 choices[65][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[65][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[65][3] = "El Parlamento Europeo.";
 answers[65] = choices[65][0];
 units[65] = "5";
 comments[65] = "Id Pregunta: 10313. UNION EUROPEA";


//  Id pregunta: 10433 Año de creación de pregunta: 2016
 questions[66]= "67)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[66]= new Array();
 choices[66][0] = "Unidad de igualdad.";
 choices[66][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[66][2] = "Ninguna de las anteriores.";
 choices[66][3] = "A y B son correctas.";
 answers[66] = choices[66][1];
 units[66] = "14";
 comments[66] = "Id Pregunta: 10433. POLITICAS DE IGUALDAD";


//  Id pregunta: 10677 Año de creación de pregunta: 2016
 questions[67]= "68)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[67]= new Array();
 choices[67][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[67][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[67][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[67][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 10677. Dependencia";


//  Id pregunta: 10084 Año de creación de pregunta: 2016
 questions[68]= "69)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[68]= new Array();
 choices[68][0] = "Interchange of Data between Administrations (IDA)";
 choices[68][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[68][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[68][3] = "Interoperability Electronic European Solution (IEES)";
 answers[68] = choices[68][1];
 units[68] = "43";
 comments[68] = "Id Pregunta: 10084. AGE A1 2015";


//  Id pregunta: 10450 Año de creación de pregunta: 2016
 questions[69]= "70)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[69]= new Array();
 choices[69][0] = "Cifrada";
 choices[69][1] = "Conjunta";
 choices[69][2] = "Sistem&aacute;tica";
 choices[69][3] = "Todas son correctas";
 answers[69] = choices[69][3];
 units[69] = "10";
 comments[69] = "Id Pregunta: 10450. PRESUPUESTOS GENERALES";


//  Id pregunta: 10639 Año de creación de pregunta: 2016
 questions[70]= "71)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[70]= new Array();
 choices[70][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[70][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[70][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[70][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[70] = choices[70][2];
 units[70] = "57";
 comments[70] = "Id Pregunta: 10639. Junta de Extremadura A1 2015";


//  Id pregunta: 10533 Año de creación de pregunta: 2016
 questions[71]= "72)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[71]= new Array();
 choices[71][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[71][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[71][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[71][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[71] = choices[71][1];
 units[71] = "7";
 comments[71] = "Id Pregunta: 10533. LEY 39/2015";


//  Id pregunta: 10173 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[72]= new Array();
 choices[72][0] = "absoluta de las Cortes Generales.";
 choices[72][1] = "absoluta del Congreso de los Diputados.";
 choices[72][2] = "simple de las Cortes Generales.";
 choices[72][3] = "simple del Congreso de los Diputados.";
 answers[72] = choices[72][3];
 units[72] = "1";
 comments[72] = "Id Pregunta: 10173. CONSTITUCION1978";


//  Id pregunta: 10076 Año de creación de pregunta: 2016
 questions[73]= "74)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[73]= new Array();
 choices[73][0] = "Estrat&eacute;gico";
 choices[73][1] = "Operativo";
 choices[73][2] = "T&aacute;ctico";
 choices[73][3] = "Tecnol&oacute;gico";
 answers[73] = choices[73][0];
 units[73] = "36";
 comments[73] = "Id Pregunta: 10076. AGE A1 2015";


//  Id pregunta: 10144 Año de creación de pregunta: 2016
 questions[74]= "75)  Sobre el recurso de reposici&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[74][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[74][2] = "Ha desaparecido en la Ley 39/2015";
 choices[74][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[74] = choices[74][0];
 units[74] = "8";
 comments[74] = "Id Pregunta: 10144. Ley 39/2015, Art&iacute;culo 123";


