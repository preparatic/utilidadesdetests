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

//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[0]= "1)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[0]= new Array();
 choices[0][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[0][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[0][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[0][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 177. CONSTITUCION1978";
 preguntaids[0] = 177


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[1]= new Array();
 choices[1][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[1][1] = "Intervenci&oacute;n formal y material.";
 choices[1][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[1][3] = "Intervenci&oacute;n formal y general.";
 answers[1] = choices[1][1];
 units[1] = "10";
 comments[1] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";
 preguntaids[1] = 480


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[2]= "3)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[2]= new Array();
 choices[2][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[2][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[2][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[2][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[2] = choices[2][1];
 units[2] = "5";
 comments[2] = "Id Pregunta: 292. UNION EUROPEA";
 preguntaids[2] = 292


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[3]= "4)  Son bases de datos NoSQL:";
 choices[3]= new Array();
 choices[3][0] = "MongoDB y Maria DB";
 choices[3][1] = "HBase y Dynamo";
 choices[3][2] = "MariaDB, Cassandra y BigTable";
 choices[3][3] = "La A) y la C)";
 answers[3] = choices[3][1];
 units[3] = "73";
 comments[3] = "Id Pregunta: 104. ";
 preguntaids[3] = 104


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[4]= "5)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[4]= new Array();
 choices[4][0] = "&oacute;rganos superiores";
 choices[4][1] = "&oacute;rganos directivos";
 choices[4][2] = "&oacute;rganos superiores y directivos";
 choices[4][3] = "ninguna es correcta";
 answers[4] = choices[4][1];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[4] = 796


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[5]= new Array();
 choices[5][0] = "Al menos cada 12 meses";
 choices[5][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[5][2] = "Al menos cada 18 meses";
 choices[5][3] = "Al menos cada 24 meses";
 answers[5] = choices[5][3];
 units[5] = "77";
 comments[5] = "Id Pregunta: 687. Art&iacute;culo 20 del Reglamento 910/2014";
 preguntaids[5] = 687


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[6]= "7)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[6]= new Array();
 choices[6][0] = "La Ley General Tributaria.";
 choices[6][1] = "La Ley Presupuestaria.";
 choices[6][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[6][3] = "Ninguna de las respuestas es correcta.";
 answers[6] = choices[6][0];
 units[6] = "10";
 comments[6] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";
 preguntaids[6] = 488


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[7]= new Array();
 choices[7][0] = "Se dejan listos los entornos de desarrollo";
 choices[7][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[7][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[7][3] = "Todas las anteriores son correctas";
 answers[7] = choices[7][3];
 units[7] = "34, 84";
 comments[7] = "Id Pregunta: 725. Metodologias &aacute;giles";
 preguntaids[7] = 725


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[8]= new Array();
 choices[8][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[8][1] = "El sprint release es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM";
 choices[8][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[8][3] = "En el sprint release se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[8] = choices[8][1];
 units[8] = "34, 84";
 comments[8] = "Id Pregunta: 726. Metodologias &aacute;giles";
 preguntaids[8] = 726


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[9]= new Array();
 choices[9][0] = "A nivel de secci&oacute;n de programa.";
 choices[9][1] = "A nivel de grupo de programa.";
 choices[9][2] = "Ninguna de las respuestas es correcta.";
 choices[9][3] = "A nivel de programa.";
 answers[9] = choices[9][3];
 units[9] = "10";
 comments[9] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";
 preguntaids[9] = 459


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[10]= "11)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[10]= new Array();
 choices[10][0] = "Sello electr&oacute;nico";
 choices[10][1] = "Sede electr&oacute;nica";
 choices[10][2] = "Servidor seguro (SSL/TLS)";
 choices[10][3] = "Empleado p&uacute;blico";
 answers[10] = choices[10][2];
 units[10] = "7";
 comments[10] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[10] = 26


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[11]= new Array();
 choices[11][0] = "Yarn";
 choices[11][1] = "Flume";
 choices[11][2] = "Hive";
 choices[11][3] = "BizAgi";
 answers[11] = choices[11][3];
 units[11] = "73";
 comments[11] = "Id Pregunta: 657. ";
 preguntaids[11] = 657


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[12]= new Array();
 choices[12][0] = "En 2015";
 choices[12][1] = "En 2013";
 choices[12][2] = "En 2016";
 choices[12][3] = "En 2007";
 answers[12] = choices[12][1];
 units[12] = "19";
 comments[12] = "Id Pregunta: 560. Agenda Digital";
 preguntaids[12] = 560


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[13]= "14)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[13]= new Array();
 choices[13][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[13][1] = "Static &amp; Active process for REsolution Bank.";
 choices[13][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[13][3] = "Super Active REsponse for Banks";
 answers[13] = choices[13][0];
 units[13] = "12";
 comments[13] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";
 preguntaids[13] = 139


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[14]= "15)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[14]= new Array();
 choices[14][0] = "El Ministerio de Hacienda.";
 choices[14][1] = "El Ministerio de Econom&iacute;a.";
 choices[14][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[14][3] = "Ninguna de las respuestas es correcta.";
 answers[14] = choices[14][2];
 units[14] = "10";
 comments[14] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";
 preguntaids[14] = 470


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[15]= "16)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[15]= new Array();
 choices[15][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[15][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[15][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[15][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[15] = choices[15][3];
 units[15] = "7";
 comments[15] = "Id Pregunta: 530. LEY 39/2015";
 preguntaids[15] = 530


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[16]= new Array();
 choices[16][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[16][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[16][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[16][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[16] = choices[16][0];
 units[16] = "19";
 comments[16] = "Id Pregunta: 589. Estrategia TIC";
 preguntaids[16] = 589


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[17]= "18)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[17]= new Array();
 choices[17][0] = "A los cinco a&ntilde;os.";
 choices[17][1] = "A los dos a&ntilde;os.";
 choices[17][2] = "A los tres a&ntilde;os.";
 choices[17][3] = "A los cuatro a&ntilde;os.";
 answers[17] = choices[17][0];
 units[17] = "10";
 comments[17] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";
 preguntaids[17] = 492


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[18]= "19)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[18]= new Array();
 choices[18][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[18][1] = "Publicidad de las normas.";
 choices[18][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[18][3] = "Coordinaci&oacute;n normativa.";
 answers[18] = choices[18][2];
 units[18] = "1";
 comments[18] = "Id Pregunta: 244. CONSTITUCION1978";
 preguntaids[18] = 244


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[19]= "20)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[19][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[19][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[19][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[19] = choices[19][3];
 units[19] = "22";
 comments[19] = "Id Pregunta: 712. Ley de transparencia";
 preguntaids[19] = 712


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[20]= new Array();
 choices[20][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[20][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[20][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[20][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[20] = choices[20][1];
 units[20] = "23";
 comments[20] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";
 preguntaids[20] = 745


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[21]= new Array();
 choices[21][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[21][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[21][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[21][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[21] = choices[21][1];
 units[21] = "92";
 comments[21] = "Id Pregunta: 716. INTEGRACION CONTINUA";
 preguntaids[21] = 716


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[22]= "23)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[22]= new Array();
 choices[22][0] = "La Administraci&oacute;n General del Estado";
 choices[22][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[22][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[22][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[22] = choices[22][1];
 units[22] = "26";
 comments[22] = "Id Pregunta: 550. Gobernanza TIC";
 preguntaids[22] = 550


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[23]= "24)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[23]= new Array();
 choices[23][0] = "Tres a&ntilde;os.";
 choices[23][1] = "Cuatro a&ntilde;os.";
 choices[23][2] = "Cinco a&ntilde;os.";
 choices[23][3] = "Seis a&ntilde;os.";
 answers[23] = choices[23][3];
 units[23] = "5";
 comments[23] = "Id Pregunta: 323. UNION EUROPEA";
 preguntaids[23] = 323


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[24]= "25)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[24]= new Array();
 choices[24][0] = "Los Derechos y Deberes fundamentales.";
 choices[24][1] = "La Corona.";
 choices[24][2] = "El Poder Judicial.";
 choices[24][3] = "Las Cortes Generales.";
 answers[24] = choices[24][2];
 units[24] = "1";
 comments[24] = "Id Pregunta: 267. CONSTITUCION1978";
 preguntaids[24] = 267


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[25]= "26)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[25]= new Array();
 choices[25][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[25][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[25][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[25][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[25] = choices[25][0];
 units[25] = "43";
 comments[25] = "Id Pregunta: 437. SERVICIOS COMUNES";
 preguntaids[25] = 437


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[26]= "27)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[26]= new Array();
 choices[26][0] = "Un Reglamento.";
 choices[26][1] = "Un Decreto.";
 choices[26][2] = "Una Ley.";
 choices[26][3] = "Un Real-Decreto.";
 answers[26] = choices[26][2];
 units[26] = "5";
 comments[26] = "Id Pregunta: 368. UNION EUROPEA";
 preguntaids[26] = 368


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[27]= new Array();
 choices[27][0] = "Ley 3/2015";
 choices[27][1] = "Ley 6/2007";
 choices[27][2] = "Ley 5/1984";
 choices[27][3] = "Ley 5/2006";
 answers[27] = choices[27][0];
 units[27] = "22";
 comments[27] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";
 preguntaids[27] = 711


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[28]= "29)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[28]= new Array();
 choices[28][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[28][1] = "mediante resoluci&oacute;n judicial especial";
 choices[28][2] = "&uacute;nicamente mediante poder notarial";
 choices[28][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[28] = choices[28][3];
 units[28] = "7";
 comments[28] = "Id Pregunta: 532. LEY 39/2015";
 preguntaids[28] = 532


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[29]= "30)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[29]= new Array();
 choices[29][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[29][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[29][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[29][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 240. CONSTITUCION1978";
 preguntaids[29] = 240


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[30]= new Array();
 choices[30][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[30][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[30][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[30][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[30] = choices[30][1];
 units[30] = "7";
 comments[30] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";
 preguntaids[30] = 158


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[31]= "32)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[31]= new Array();
 choices[31][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[31][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[31][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[31][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[31] = choices[31][1];
 units[31] = "28";
 comments[31] = "Id Pregunta: 734. Estrategia TIC";
 preguntaids[31] = 734


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[32]= "33)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[32]= new Array();
 choices[32][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[32][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[32][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[32][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[32] = choices[32][2];
 units[32] = "43";
 comments[32] = "Id Pregunta: 436. SERVICIOS COMUNES";
 preguntaids[32] = 436


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[33]= new Array();
 choices[33][0] = "El Consejo Europeo.";
 choices[33][1] = "El Parlamento Europeo.";
 choices[33][2] = "El Consejo.";
 choices[33][3] = "La Comisi&oacute;n.";
 answers[33] = choices[33][3];
 units[33] = "5";
 comments[33] = "Id Pregunta: 361. UNION EUROPEA";
 preguntaids[33] = 361


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[34]= new Array();
 choices[34][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[34][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[34][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[34][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[34] = choices[34][0];
 units[34] = "73";
 comments[34] = "Id Pregunta: 656. ";
 preguntaids[34] = 656


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[35]= "36)  Se&ntilde;ale la respuesta correcta:";
 choices[35]= new Array();
 choices[35][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[35][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[35][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[35][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[35] = choices[35][0];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 797. Ley 40/2015";
 preguntaids[35] = 797


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[36]= new Array();
 choices[36][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[36][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[36][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[36][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[36] = choices[36][1];
 units[36] = "1";
 comments[36] = "Id Pregunta: 175. CONSTITUCION1978";
 preguntaids[36] = 175


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[37]= new Array();
 choices[37][0] = "Neo4J ";
 choices[37][1] = "OrientDB ";
 choices[37][2] = "InfoGrid ";
 choices[37][3] = "SimpleDB";
 answers[37] = choices[37][3];
 units[37] = "73";
 comments[37] = "Id Pregunta: 655. ";
 preguntaids[37] = 655


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[38]= "39)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[38]= new Array();
 choices[38][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[38][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[38][2] = "Se basan en sistemas distribuidos";
 choices[38][3] = "Se basan en el modelo de datos relacional";
 answers[38] = choices[38][2];
 units[38] = "73";
 comments[38] = "Id Pregunta: 102. ";
 preguntaids[38] = 102


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[39]= "40)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[39]= new Array();
 choices[39][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[39][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[39][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[39][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[39] = choices[39][3];
 units[39] = "47";
 comments[39] = "Id Pregunta: 677. Inscripci&oacute;n autom&aacute;tica nacimientos";
 preguntaids[39] = 677


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[40]= "41)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[40]= new Array();
 choices[40][0] = "A nivel de art&iacute;culo.";
 choices[40][1] = "A nivel de cap&iacute;tulo.";
 choices[40][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[40][3] = "A nivel de concepto.";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";
 preguntaids[40] = 481


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
 preguntaids[41] = 383


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[42]= new Array();
 choices[42][0] = "El BCE";
 choices[42][1] = "El Parlamento";
 choices[42][2] = "El Consejo";
 choices[42][3] = "La Comisi&oacute;n";
 answers[42] = choices[42][3];
 units[42] = "17";
 comments[42] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";
 preguntaids[42] = 556


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[43]= "44)  Big Data:";
 choices[43]= new Array();
 choices[43][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[43][1] = "No puede emplearse para tratar datos no estructurados";
 choices[43][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = choices[43][3];
 units[43] = "73";
 comments[43] = "Id Pregunta: 109. ";
 preguntaids[43] = 109


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[44]= new Array();
 choices[44][0] = "De los derechos y deberes fundamentales.";
 choices[44][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[44][2] = "Derechos y libertades.";
 choices[44][3] = "De la Corona.";
 answers[44] = choices[44][1];
 units[44] = "1";
 comments[44] = "Id Pregunta: 245. CONSTITUCION1978";
 preguntaids[44] = 245


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[45]= "46)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[45]= new Array();
 choices[45][0] = "Discriminaci&oacute;n indirecta.";
 choices[45][1] = "Discriminaci&oacute;n directa.";
 choices[45][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[45][3] = "Discriminaci&oacute;n abusiva.";
 answers[45] = choices[45][0];
 units[45] = "14";
 comments[45] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";
 preguntaids[45] = 394


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[46]= "47)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[46]= new Array();
 choices[46][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[46][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[46][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[46][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[46] = choices[46][2];
 units[46] = "47";
 comments[46] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[46] = 19


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[47]= "48)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[47]= new Array();
 choices[47][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[47][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo; (manejo en una serie amplia de &aacute;reas, con conocimientos en profundidad en unas pocas)";
 choices[47][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[47][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea";
 answers[47] = choices[47][0];
 units[47] = "34, 84";
 comments[47] = "Id Pregunta: 727. Metodologias &aacute;giles";
 preguntaids[47] = 727


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[48]= new Array();
 choices[48][0] = "Art&iacute;culo 16.2.";
 choices[48][1] = "Art&iacute;culo 17.1.";
 choices[48][2] = "Art&iacute;culo 18.1.";
 choices[48][3] = "Art&iacute;culo 18.2.";
 answers[48] = choices[48][0];
 units[48] = "1";
 comments[48] = "Id Pregunta: 249. CONSTITUCION1978";
 preguntaids[48] = 249


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[49]= "50)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[49][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[49][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[49][3] = "Todas las anteriores son ciertas";
 answers[49] = choices[49][3];
 units[49] = "8";
 comments[49] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";
 preguntaids[49] = 145


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[50]= "51)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[50]= new Array();
 choices[50][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[50][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[50][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[50][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[50] = choices[50][3];
 units[50] = "22";
 comments[50] = "Id Pregunta: 709. Ley de transparencia";
 preguntaids[50] = 709


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[51]= "52)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[51]= new Array();
 choices[51][0] = "La Comisi&oacute;n Europea.";
 choices[51][1] = "El Consejo Europeo.";
 choices[51][2] = "El Consejo de Europa.";
 choices[51][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[51] = choices[51][0];
 units[51] = "5";
 comments[51] = "Id Pregunta: 310. UNION EUROPEA";
 preguntaids[51] = 310


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[52]= "53)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[52]= new Array();
 choices[52][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[52][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[52][2] = "Gestionar el Registro de Operadores.";
 choices[52][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[52] = choices[52][3];
 units[52] = "121";
 comments[52] = "Id Pregunta: 24. AGE A1 2015";
 preguntaids[52] = 24


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[53]= "54)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[53]= new Array();
 choices[53][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[53][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[53][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[53][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[53] = choices[53][3];
 units[53] = "10";
 comments[53] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";
 preguntaids[53] = 507


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[54]= "55)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[54]= new Array();
 choices[54][0] = "Ley Org&aacute;nica.";
 choices[54][1] = "Ley de Bases.";
 choices[54][2] = "Ley ordinaria.";
 choices[54][3] = "Mandato.";
 answers[54] = choices[54][1];
 units[54] = "1";
 comments[54] = "Id Pregunta: 189. CONSTITUCION1978";
 preguntaids[54] = 189


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[55]= "56)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[55]= new Array();
 choices[55][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[55][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[55][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[55][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[55] = choices[55][1];
 units[55] = "74";
 comments[55] = "Id Pregunta: 45. AGE A1 2015";
 preguntaids[55] = 45


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[56]= "57)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[56]= new Array();
 choices[56][0] = "El Rey.";
 choices[56][1] = "El Jefe del Estado.";
 choices[56][2] = "El Gobierno.";
 choices[56][3] = "El Presidente del Gobierno.";
 answers[56] = choices[56][2];
 units[56] = "1";
 comments[56] = "Id Pregunta: 208. CONSTITUCION1978";
 preguntaids[56] = 208


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[57]= "58)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[57][1] = "Las inversiones reales y financieras.";
 choices[57][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[57][3] = "Las transferencias de capital y las inversiones reales.";
 answers[57] = choices[57][3];
 units[57] = "10";
 comments[57] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";
 preguntaids[57] = 471


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[58]= "59)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[58]= new Array();
 choices[58][0] = "Tres a&ntilde;os.";
 choices[58][1] = "Dos a&ntilde;os y medio.";
 choices[58][2] = "Cinco a&ntilde;os.";
 choices[58][3] = "Seis a&ntilde;os.";
 answers[58] = choices[58][3];
 units[58] = "5";
 comments[58] = "Id Pregunta: 291. UNION EUROPEA";
 preguntaids[58] = 291


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[59]= "60)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[59]= new Array();
 choices[59][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[59][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[59][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[59][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[59] = choices[59][2];
 units[59] = "53";
 comments[59] = "Id Pregunta: 65. AGE A1 2015";
 preguntaids[59] = 65


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[60]= new Array();
 choices[60][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[60][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[60][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[60][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[60] = choices[60][2];
 units[60] = "1";
 comments[60] = "Id Pregunta: 201. CONSTITUCION1978";
 preguntaids[60] = 201


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[61]= new Array();
 choices[61][0] = "Indirecta.";
 choices[61][1] = "Directa.";
 choices[61][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[61][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[61] = choices[61][1];
 units[61] = "14";
 comments[61] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";
 preguntaids[61] = 388


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[62]= "63)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[62]= new Array();
 choices[62][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[62][1] = "En el extranjero.";
 choices[62][2] = "Ninguna es correcta.";
 choices[62][3] = "Ambas son correctas.";
 answers[62] = choices[62][0];
 units[62] = "14";
 comments[62] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";
 preguntaids[62] = 427


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[63]= "64)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[63]= new Array();
 choices[63][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[63][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[63][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[63][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[63] = choices[63][2];
 units[63] = "7";
 comments[63] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";
 preguntaids[63] = 155


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[64]= new Array();
 choices[64][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[64][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[64][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[64][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[64] = choices[64][2];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 824. Ley 40/2015";
 preguntaids[64] = 824


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[65]= "66)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[65]= new Array();
 choices[65][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[65][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[65][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[65][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[65] = choices[65][0];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[65] = 800


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[66]= "67)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Peters";
 choices[66][1] = "Hollingsworth";
 choices[66][2] = "Manuel Castells";
 choices[66][3] = "Gaebler";
 answers[66] = choices[66][1];
 units[66] = "20";
 comments[66] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";
 preguntaids[66] = 751


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[67]= "68)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[67]= new Array();
 choices[67][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[67][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[67][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[67][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[67] = choices[67][2];
 units[67] = "10";
 comments[67] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";
 preguntaids[67] = 466


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[68]= "69)  En cuanto al an&aacute;lisis DAFO:";
 choices[68]= new Array();
 choices[68][0] = "Considera detallada y exclusivamente factores internos.";
 choices[68][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[68][2] = "Considera detallada y exclusivamente factores externos.";
 choices[68][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[68] = choices[68][1];
 units[68] = "83";
 comments[68] = "Id Pregunta: 41. AGE A1 2015";
 preguntaids[68] = 41


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[69]= "70)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[69]= new Array();
 choices[69][0] = "la Administraci&oacute;n General del Estado";
 choices[69][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[69][2] = "las Entidades Locales";
 choices[69][3] = "todas son correctas";
 answers[69] = choices[69][3];
 units[69] = "7";
 comments[69] = "Id Pregunta: 537. LEY 39/2015";
 preguntaids[69] = 537


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[70]= "71)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[70]= new Array();
 choices[70][0] = "El nombre y el tipo de correspondencia.";
 choices[70][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[70][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[70][3] = "El nombre y el grado.";
 answers[70] = choices[70][1];
 units[70] = "85";
 comments[70] = "Id Pregunta: 636. Junta de Extremadura A1 2015";
 preguntaids[70] = 636


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[71]= new Array();
 choices[71][0] = "En t&iacute;tulos-valores.";
 choices[71][1] = "Las respuestas a) y b) son correctas.";
 choices[71][2] = "Las respuestas a) y b) no son correctas.";
 choices[71][3] = "En cuenta.";
 answers[71] = choices[71][1];
 units[71] = "10";
 comments[71] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";
 preguntaids[71] = 500


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[72]= "73)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[72]= new Array();
 choices[72][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[72][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[72][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[72][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[72] = choices[72][3];
 units[72] = "14";
 comments[72] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";
 preguntaids[72] = 380


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[73]= "74)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[73]= new Array();
 choices[73][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[73][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[73][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[73][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[73] = choices[73][3];
 units[73] = "12";
 comments[73] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";
 preguntaids[73] = 132


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[74]= "75)  Las Universidades p&uacute;blicas:";
 choices[74]= new Array();
 choices[74][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[74][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[74][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[74][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[74] = choices[74][1];
 units[74] = "7";
 comments[74] = "Id Pregunta: 518. LEY 39/2015";
 preguntaids[74] = 518


