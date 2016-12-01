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

//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[0]= "1)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[0][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[0][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[0][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[0] = choices[0][2];
 units[0] = "101";
 comments[0] = "Id Pregunta: 607. Junta de Extremadura A1 2015";
 preguntaids[0] = 607


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[1]= "2)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[1]= new Array();
 choices[1][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[1][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[1][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[1][3] = "Todas las respuestas son correctas.";
 answers[1] = choices[1][1];
 units[1] = "101";
 comments[1] = "Id Pregunta: 608. Junta de Extremadura A1 2015";
 preguntaids[1] = 608


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[2]= "3)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[2]= new Array();
 choices[2][0] = "Subsecretario";
 choices[2][1] = "Subdirector general";
 choices[2][2] = "Secretario de Estado";
 choices[2][3] = "ninguna es correcta";
 answers[2] = choices[2][0];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 791. Ley 40/2015";
 preguntaids[2] = 791


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[3]= "4)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[3]= new Array();
 choices[3][0] = "Los ocupados y los parados activos";
 choices[3][1] = "S&oacute;lo los ocupados";
 choices[3][2] = "Los ocupados y los inactivos";
 choices[3][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[3] = choices[3][0];
 units[3] = "12";
 comments[3] = "Id Pregunta: 566. Modelo econ&oacute;mico";
 preguntaids[3] = 566


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[4]= "5)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[4]= new Array();
 choices[4][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[4][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[4][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[4][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[4] = choices[4][1];
 units[4] = "14";
 comments[4] = "Id Pregunta: 678. Dependencia";
 preguntaids[4] = 678


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[5]= "6)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[5]= new Array();
 choices[5][0] = "Tener una estructura institucional.";
 choices[5][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[5][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[5][3] = "Todas las respuestas son correctas.";
 answers[5] = choices[5][3];
 units[5] = "5";
 comments[5] = "Id Pregunta: 377. UNION EUROPEA";
 preguntaids[5] = 377


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Org&aacute;nica.";
 choices[6][1] = "Contable.";
 choices[6][2] = "Econ&oacute;mica.";
 choices[6][3] = "Por programas.";
 answers[6] = choices[6][2];
 units[6] = "10";
 comments[6] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";
 preguntaids[6] = 473


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[7]= "8)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[7]= new Array();
 choices[7][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[7][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[7][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[7][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[7] = choices[7][2];
 units[7] = "7";
 comments[7] = "Id Pregunta: 529. LEY 39/2015";
 preguntaids[7] = 529


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[8]= new Array();
 choices[8][0] = "Al menos cada 12 meses";
 choices[8][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[8][2] = "Al menos cada 18 meses";
 choices[8][3] = "Al menos cada 24 meses";
 answers[8] = choices[8][3];
 units[8] = "77";
 comments[8] = "Id Pregunta: 687. Art&iacute;culo 20 del Reglamento 910/2014";
 preguntaids[8] = 687


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[9]= new Array();
 choices[9][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[9][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[9][2] = "la falta de interoperabilidad.";
 choices[9][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[9] = choices[9][1];
 units[9] = "5";
 comments[9] = "Id Pregunta: 285. UNION EUROPEA";
 preguntaids[9] = 285


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[10]= new Array();
 choices[10][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[10][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[10][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[10][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[10] = choices[10][0];
 units[10] = "76";
 comments[10] = "Id Pregunta: 855. Xunta de Galicia 2015";
 preguntaids[10] = 855


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[11]= new Array();
 choices[11][0] = "IEEE 802.11p";
 choices[11][1] = "IEEE 802.11r";
 choices[11][2] = "IEEE 802.11v";
 choices[11][3] = "IEEE 802.11w";
 answers[11] = choices[11][1];
 units[11] = "112";
 comments[11] = "Id Pregunta: 574. Tema 112. TAI 2016.";
 preguntaids[11] = 574


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[12]= "13)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[12]= new Array();
 choices[12][0] = "Los propios miembros del Tribunal.";
 choices[12][1] = "El Consejo de Europa.";
 choices[12][2] = "El Consejo Europeo.";
 choices[12][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[12] = choices[12][0];
 units[12] = "5";
 comments[12] = "Id Pregunta: 301. UNION EUROPEA";
 preguntaids[12] = 301


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ale la respuesta falsa";
 choices[13]= new Array();
 choices[13][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[13][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[13][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[13][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[13] = choices[13][3];
 units[13] = "22";
 comments[13] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";
 preguntaids[13] = 276


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[14]= "15)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[14]= new Array();
 choices[14][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[14][1] = "En el extranjero.";
 choices[14][2] = "Ninguna es correcta.";
 choices[14][3] = "Ambas son correctas.";
 answers[14] = choices[14][0];
 units[14] = "14";
 comments[14] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";
 preguntaids[14] = 427


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la respuesta falsa:";
 choices[15]= new Array();
 choices[15][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[15][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[15][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[15][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[15] = choices[15][2];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 847. Ley 40/2015";
 preguntaids[15] = 847


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[16]= "17)  La recusaci&oacute;n pueden promoverla...";
 choices[16]= new Array();
 choices[16][0] = "Cualquier &oacute;rgano";
 choices[16][1] = "El interesado";
 choices[16][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[16][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[16] = choices[16][0];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[16] = 828


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[17]= new Array();
 choices[17][0] = "En 2015";
 choices[17][1] = "En 2013";
 choices[17][2] = "En 2016";
 choices[17][3] = "En 2007";
 answers[17] = choices[17][1];
 units[17] = "19";
 comments[17] = "Id Pregunta: 560. Agenda Digital";
 preguntaids[17] = 560


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[18]= "19)  En qu&eacute; consiste el principio BASE:";
 choices[18]= new Array();
 choices[18][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[18][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[18][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[18][3] = "Todas las anteriores son falsas";
 answers[18] = choices[18][3];
 units[18] = "73";
 comments[18] = "Id Pregunta: 103. ";
 preguntaids[18] = 103


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[19]= "20)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[19]= new Array();
 choices[19][0] = "Cuatro.";
 choices[19][1] = "Una.";
 choices[19][2] = "Cinco.";
 choices[19][3] = "Nueve.";
 answers[19] = choices[19][2];
 units[19] = "1";
 comments[19] = "Id Pregunta: 268. CONSTITUCION1978";
 preguntaids[19] = 268


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[20]= "21)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[20]= new Array();
 choices[20][0] = "Un d&iacute;a";
 choices[20][1] = "Dos d&iacute;as";
 choices[20][2] = "Tres d&iacute;as";
 choices[20][3] = "Cuatro d&iacute;as";
 answers[20] = choices[20][3];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 831. Ley 40/2015";
 preguntaids[20] = 831


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[21]= new Array();
 choices[21][0] = "Las respuestas a) y b) son correctas.";
 choices[21][1] = "Las respuestas a) y b) no son correctas.";
 choices[21][2] = "Contenido coherente con los planes sectoriales.";
 choices[21][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[21] = choices[21][0];
 units[21] = "10";
 comments[21] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";
 preguntaids[21] = 467


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[22]= "23)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[22]= new Array();
 choices[22][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[22][1] = "La libertad sexual y religiosa.";
 choices[22][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[22][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[22] = choices[22][3];
 units[22] = "1";
 comments[22] = "Id Pregunta: 254. CONSTITUCION1978";
 preguntaids[22] = 254


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[23]= new Array();
 choices[23][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[23][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[23][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[23][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[23] = choices[23][1];
 units[23] = "28";
 comments[23] = "Id Pregunta: 734. Estrategia TIC";
 preguntaids[23] = 734


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[24]= "25)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[24]= new Array();
 choices[24][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[24][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[24][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[24][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[24] = choices[24][0];
 units[24] = "1";
 comments[24] = "Id Pregunta: 226. CONSTITUCION1978";
 preguntaids[24] = 226


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[25]= "26)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[25]= new Array();
 choices[25][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[25][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[25][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[25][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[25] = choices[25][0];
 units[25] = "1";
 comments[25] = "Id Pregunta: 239. CONSTITUCION1978";
 preguntaids[25] = 239


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[26]= new Array();
 choices[26][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[26][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[26][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[26][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[26] = choices[26][3];
 units[26] = "78";
 comments[26] = "Id Pregunta: 47. AGE A1 2015";
 preguntaids[26] = 47


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[27]= new Array();
 choices[27][0] = "las personas jur&iacute;dicas ";
 choices[27][1] = "las entidades con personalidad jur&iacute;dica";
 choices[27][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[27][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[27] = choices[27][1];
 units[27] = "7";
 comments[27] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[27] = 151


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[28]= "29)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[28]= new Array();
 choices[28][0] = "De las disposiciones favorables.";
 choices[28][1] = "De las disposiciones sancionadoras no favorables.";
 choices[28][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[28][3] = "Las respuestas b) y c) son correctas.";
 answers[28] = choices[28][3];
 units[28] = "1";
 comments[28] = "Id Pregunta: 252. CONSTITUCION1978";
 preguntaids[28] = 252


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[29]= "30)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[29]= new Array();
 choices[29][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[29][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[29][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[29][3] = "todas son correctas";
 answers[29] = choices[29][3];
 units[29] = "7";
 comments[29] = "Id Pregunta: 533. LEY 39/2015";
 preguntaids[29] = 533


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[30]= new Array();
 choices[30][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[30][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[30][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[30][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[30] = choices[30][3];
 units[30] = "10";
 comments[30] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";
 preguntaids[30] = 487


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[31]= "32)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[31]= new Array();
 choices[31][0] = "Discriminaci&oacute;n indirecta.";
 choices[31][1] = "Discriminaci&oacute;n directa.";
 choices[31][2] = "Discriminaci&oacute;n por maternidad.";
 choices[31][3] = "Discriminaci&oacute;n abusiva.";
 answers[31] = choices[31][1];
 units[31] = "14";
 comments[31] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";
 preguntaids[31] = 395


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[32]= new Array();
 choices[32][0] = "Art. 25 LO, 3/2007.";
 choices[32][1] = "Art. 23 LO, 3/2007.";
 choices[32][2] = "Art. 14 LO, 3/2007.";
 choices[32][3] = "Ninguna es correcta, es el art. 13.";
 answers[32] = choices[32][0];
 units[32] = "14";
 comments[32] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";
 preguntaids[32] = 416


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[33]= "34)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[33]= new Array();
 choices[33][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[33][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[33][2] = "A y B son correctas.";
 choices[33][3] = "A y B son incorrectas.";
 answers[33] = choices[33][2];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 844. Ley 40/2015";
 preguntaids[33] = 844


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[34]= "35)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[34]= new Array();
 choices[34][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[34][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[34][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[34][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[34] = choices[34][1];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 838. Ley 40/2015";
 preguntaids[34] = 838


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[35]= "36)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[35]= new Array();
 choices[35][0] = "18 miembros.";
 choices[35][1] = "Ninguna es correcta.";
 choices[35][2] = "22 miembros.";
 choices[35][3] = "21 miembros.";
 answers[35] = choices[35][1];
 units[35] = "5";
 comments[35] = "Id Pregunta: 347. UNION EUROPEA";
 preguntaids[35] = 347


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[36]= "37)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[36][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[36][2] = "b) y d) son verdaderas";
 choices[36][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[36] = choices[36][1];
 units[36] = "23";
 comments[36] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";
 preguntaids[36] = 753


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[37]= "38)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[37]= new Array();
 choices[37][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[37][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[37][2] = "el sector p&uacute;blico institucional";
 choices[37][3] = "el sector privado corporativo";
 answers[37] = choices[37][3];
 units[37] = "7";
 comments[37] = "Id Pregunta: 515. LEY 39/2015";
 preguntaids[37] = 515


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[38]= new Array();
 choices[38][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[38][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[38][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[38][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[38] = choices[38][0];
 units[38] = "86";
 comments[38] = "Id Pregunta: 71. AGE A1 2015";
 preguntaids[38] = 71


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[39][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[39][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[39][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[39] = choices[39][0];
 units[39] = "1";
 comments[39] = "Id Pregunta: 218. CONSTITUCION1978";
 preguntaids[39] = 218


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[40]= "41)  El Parlamento Europeo celebrar&aacute;:";
 choices[40]= new Array();
 choices[40][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[40][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[40][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[40][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[40] = choices[40][0];
 units[40] = "5";
 comments[40] = "Id Pregunta: 290. UNION EUROPEA";
 preguntaids[40] = 290


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[41]= "42)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[41]= new Array();
 choices[41][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[41][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[41][2] = "Ambas son correctas.";
 choices[41][3] = "A y B son incorrectas.";
 answers[41] = choices[41][2];
 units[41] = "14";
 comments[41] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";
 preguntaids[41] = 401


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[42]= "43)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[42]= new Array();
 choices[42][0] = "los Secretarios de Estado";
 choices[42][1] = "los Ministros";
 choices[42][2] = "los Subsecretarios";
 choices[42][3] = "los Secretarios generales";
 answers[42] = choices[42][2];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 810. Ley 40/2015";
 preguntaids[42] = 810


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[43]= "44)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[43]= new Array();
 choices[43][0] = "Subgrupo A1";
 choices[43][1] = "Subgrupo A2";
 choices[43][2] = "Subgrupo B";
 choices[43][3] = "Subgrupo C1";
 answers[43] = choices[43][0];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 806. Ley 40/2015";
 preguntaids[43] = 806


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[44]= "45)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[44]= new Array();
 choices[44][0] = "Con el a&ntilde;o anterior.";
 choices[44][1] = "Con los tres a&ntilde;os anteriores.";
 choices[44][2] = "Con el a&ntilde;o natural.";
 choices[44][3] = "Con los dos a&ntilde;os anteriores.";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";
 preguntaids[44] = 468


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[45]= new Array();
 choices[45][0] = "MySQL";
 choices[45][1] = "SQLite";
 choices[45][2] = "Zope";
 choices[45][3] = "MariaDB";
 answers[45] = choices[45][2];
 units[45] = "61";
 comments[45] = "Id Pregunta: 577. Tema 61. TAI 2016.";
 preguntaids[45] = 577


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[46]= "47)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[46]= new Array();
 choices[46][0] = "De ocho a&ntilde;os.";
 choices[46][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[46][2] = "Ambas son correctas.";
 choices[46][3] = "No existe un l&iacute;mite.";
 answers[46] = choices[46][0];
 units[46] = "14";
 comments[46] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";
 preguntaids[46] = 432


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[47]= "48)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[47]= new Array();
 choices[47][0] = "A la persona demandante.";
 choices[47][1] = "A la persona demandada.";
 choices[47][2] = "Al &oacute;rgano judicial.";
 choices[47][3] = "Al &oacute;rgano administrativo.";
 answers[47] = choices[47][1];
 units[47] = "14";
 comments[47] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[47] = 400


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[48]= "49)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[48]= new Array();
 choices[48][0] = "el Secretario General";
 choices[48][1] = "el Subdirector General";
 choices[48][2] = "el Secretario de Estado";
 choices[48][3] = "ninguna es correcta";
 answers[48] = choices[48][0];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 823. Ley 40/2015";
 preguntaids[48] = 823


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[49]= new Array();
 choices[49][0] = "Jenkins";
 choices[49][1] = "Hudson";
 choices[49][2] = "SonarQube";
 choices[49][3] = "Todas lo son";
 answers[49] = choices[49][3];
 units[49] = "92";
 comments[49] = "Id Pregunta: 695. INTEGRACION CONTINUA";
 preguntaids[49] = 695


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[50]= new Array();
 choices[50][0] = "Un representante de la Administraci&oacute;n local.";
 choices[50][1] = "Un representante del Tribunal de Cuentas.";
 choices[50][2] = "Un representante del Defensor del Pueblo.";
 choices[50][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[50] = choices[50][0];
 units[50] = "22";
 comments[50] = "Id Pregunta: 123. ";
 preguntaids[50] = 123


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[51]= "52)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[51]= new Array();
 choices[51][0] = "192.228.0.0";
 choices[51][1] = "192.228.8.0";
 choices[51][2] = "192.228.16.0";
 choices[51][3] = "192.228.17.0";
 answers[51] = choices[51][2];
 units[51] = "109";
 comments[51] = "Id Pregunta: 616. Junta de Extremadura A1 2015";
 preguntaids[51] = 616


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[52]= "53)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[52]= new Array();
 choices[52][0] = "El Ministerio de Hacienda.";
 choices[52][1] = "El Ministerio de Econom&iacute;a.";
 choices[52][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[52][3] = "Ninguna de las respuestas es correcta.";
 answers[52] = choices[52][2];
 units[52] = "10";
 comments[52] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";
 preguntaids[52] = 470


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[53]= new Array();
 choices[53][0] = "Veinte.";
 choices[53][1] = "Quince.";
 choices[53][2] = "Diez.";
 choices[53][3] = "Doce.";
 answers[53] = choices[53][1];
 units[53] = "1";
 comments[53] = "Id Pregunta: 264. CONSTITUCION1978";
 preguntaids[53] = 264


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[54]= "55)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[54]= new Array();
 choices[54][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[54][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[54][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[54][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[54] = choices[54][2];
 units[54] = "8";
 comments[54] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";
 preguntaids[54] = 143


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[55]= new Array();
 choices[55][0] = "Las sociedades mercantiles estatales.";
 choices[55][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[55][2] = "Las respuestas a) y b) son correctas.";
 choices[55][3] = "Las respuestas a) y b) no son correctas.";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";
 preguntaids[55] = 503


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[56]= "57)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[56]= new Array();
 choices[56][0] = "A nivel de art&iacute;culo.";
 choices[56][1] = "A nivel de cap&iacute;tulo.";
 choices[56][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[56][3] = "A nivel de concepto.";
 answers[56] = choices[56][2];
 units[56] = "10";
 comments[56] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";
 preguntaids[56] = 481


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[57]= "58)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[57]= new Array();
 choices[57][0] = "El nombre y el tipo de correspondencia.";
 choices[57][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[57][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[57][3] = "El nombre y el grado.";
 answers[57] = choices[57][1];
 units[57] = "85";
 comments[57] = "Id Pregunta: 636. Junta de Extremadura A1 2015";
 preguntaids[57] = 636


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[58]= "59)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[58]= new Array();
 choices[58][0] = "Dos.";
 choices[58][1] = "Cuatro.";
 choices[58][2] = "Cinco.";
 choices[58][3] = "Tres.";
 answers[58] = choices[58][1];
 units[58] = "10";
 comments[58] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";
 preguntaids[58] = 491


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[59]= new Array();
 choices[59][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[59][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[59][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[59][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[59] = choices[59][3];
 units[59] = "77";
 comments[59] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";
 preguntaids[59] = 688


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[60]= new Array();
 choices[60][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[60][1] = "Auditor&iacute;a operativa.";
 choices[60][2] = "Auditor&iacute;a de cumplimiento.";
 choices[60][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[60] = choices[60][2];
 units[60] = "10";
 comments[60] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";
 preguntaids[60] = 474


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[61]= "62)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[61]= new Array();
 choices[61][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[61][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[61][2] = "Son refrendados por el Rey.";
 choices[61][3] = "Son convocados por el Presidente del Gobierno.";
 answers[61] = choices[61][0];
 units[61] = "1";
 comments[61] = "Id Pregunta: 217. CONSTITUCION1978";
 preguntaids[61] = 217


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[62]= new Array();
 choices[62][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[62][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[62][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[62][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[62] = choices[62][2];
 units[62] = "1";
 comments[62] = "Id Pregunta: 233. CONSTITUCION1978";
 preguntaids[62] = 233


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[63]= "64)  El Presupuesto por programas sirve para saber...";
 choices[63]= new Array();
 choices[63][0] = "En qu&eacute; nos gastamos el dinero";
 choices[63][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[63][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[63][3] = "Qui&eacute;n se gasta el dinero";
 answers[63] = choices[63][2];
 units[63] = "10";
 comments[63] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";
 preguntaids[63] = 456


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[64]= "65)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[64]= new Array();
 choices[64][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[64][1] = "los Subdelegados del Gobierno en las provincias";
 choices[64][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[64][3] = "a y b son correctas";
 answers[64] = choices[64][3];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 790. Ley 40/2015";
 preguntaids[64] = 790


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[65]= "66)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[65]= new Array();
 choices[65][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[65][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[65][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[65][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[65] = choices[65][2];
 units[65] = "19";
 comments[65] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";
 preguntaids[65] = 168


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[66]= new Array();
 choices[66][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[66][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[66][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[66][3] = "El pago de subsidios a parados";
 answers[66] = choices[66][3];
 units[66] = "15";
 comments[66] = "Id Pregunta: 116. ";
 preguntaids[66] = 116


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[67]= "68)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[67]= new Array();
 choices[67][0] = "La mujeres.";
 choices[67][1] = "Lo hombres.";
 choices[67][2] = "Todas las personas.";
 choices[67][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 413. POLITICAS DE IGUALDAD";
 preguntaids[67] = 413


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[68]= new Array();
 choices[68][0] = "Bienalmente";
 choices[68][1] = "Anualmente";
 choices[68][2] = "Semestralmente";
 choices[68][3] = "Cada cuatro a&ntilde;os";
 answers[68] = choices[68][1];
 units[68] = "19";
 comments[68] = "Id Pregunta: 586. Estrategia TIC";
 preguntaids[68] = 586


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[69]= "70)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[69]= new Array();
 choices[69][0] = "El Rey.";
 choices[69][1] = "El Jefe del Estado.";
 choices[69][2] = "El Gobierno.";
 choices[69][3] = "El Presidente del Gobierno.";
 answers[69] = choices[69][2];
 units[69] = "1";
 comments[69] = "Id Pregunta: 208. CONSTITUCION1978";
 preguntaids[69] = 208


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[70]= new Array();
 choices[70][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[70][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[70][2] = "Apertura al exterior";
 choices[70][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[70] = choices[70][0];
 units[70] = "17";
 comments[70] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";
 preguntaids[70] = 762


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[71]= new Array();
 choices[71][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[71][1] = "El Gobierno.";
 choices[71][2] = "El Presidente del Gobierno.";
 choices[71][3] = "El Consejo de Ministros.";
 answers[71] = choices[71][1];
 units[71] = "10";
 comments[71] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";
 preguntaids[71] = 490


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[72]= "73)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[72]= new Array();
 choices[72][0] = "Por unanimidad.";
 choices[72][1] = "Por mayor&iacute;a cualificada.";
 choices[72][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[72][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[72] = choices[72][3];
 units[72] = "5";
 comments[72] = "Id Pregunta: 312. UNION EUROPEA";
 preguntaids[72] = 312


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[73]= "74)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[73]= new Array();
 choices[73][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[73][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[73][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[73][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[73] = choices[73][0];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 809. Ley 40/2015";
 preguntaids[73] = 809


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[74]= new Array();
 choices[74][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[74][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[74][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[74][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[74] = choices[74][3];
 units[74] = "26";
 comments[74] = "Id Pregunta: 546. Gobernanza TIC";
 preguntaids[74] = 546


