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

//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[0]= new Array();
 choices[0][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[0][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[0][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[0][3] = "Sancionar y publicar las leyes.";
 answers[0] = choices[0][2];
 units[0] = "1";
 comments[0] = "Id Pregunta: 242. CONSTITUCION1978";
 preguntaids[0] = 242


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[1]= "2)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[1]= new Array();
 choices[1][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[1][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[1][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[1][3] = "Todas las respuestas anteriores son correctas.";
 answers[1] = choices[1][0];
 units[1] = "45";
 comments[1] = "Id Pregunta: 600. Junta de Extremadura A1 2015";
 preguntaids[1] = 600


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[2]= "3)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[2]= new Array();
 choices[2][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[2][1] = "Protecci&oacute;n de su salud.";
 choices[2][2] = "Ninguna es correcta.";
 choices[2][3] = "A y B son correctas.";
 answers[2] = choices[2][1];
 units[2] = "14";
 comments[2] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";
 preguntaids[2] = 430


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[3]= "4)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[3]= new Array();
 choices[3][0] = "un &oacute;rgano superior";
 choices[3][1] = "un &oacute;rgano directivo";
 choices[3][2] = "un &oacute;rgano superior o directivo";
 choices[3][3] = "ninguna es correcta";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 795. Ley 40/2015";
 preguntaids[3] = 795


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[4]= "5)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[4]= new Array();
 choices[4][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[4][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[4][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[4][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[4] = choices[4][2];
 units[4] = "22";
 comments[4] = "Id Pregunta: 707. &Eacute;tica p&uacute;blica";
 preguntaids[4] = 707


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[5]= "6)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[5]= new Array();
 choices[5][0] = "6 TB.";
 choices[5][1] = "8 TB.";
 choices[5][2] = "7 TB.";
 choices[5][3] = "4 TB.";
 answers[5] = choices[5][3];
 units[5] = "53";
 comments[5] = "Id Pregunta: 853. Xunta de Galicia 2015";
 preguntaids[5] = 853


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[6]= new Array();
 choices[6][0] = "23";
 choices[6][1] = "20";
 choices[6][2] = "14";
 choices[6][3] = "18";
 answers[6] = choices[6][1];
 units[6] = "5";
 comments[6] = "Id Pregunta: 343. UNION EUROPEA";
 preguntaids[6] = 343


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[7]= new Array();
 choices[7][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[7][1] = "El sprint release es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM";
 choices[7][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[7][3] = "En el sprint release se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[7] = choices[7][1];
 units[7] = "34, 84";
 comments[7] = "Id Pregunta: 726. Metodologias &aacute;giles";
 preguntaids[7] = 726


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[8]= "9)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[8]= new Array();
 choices[8][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[8][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[8][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[8][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[8] = choices[8][2];
 units[8] = "1";
 comments[8] = "Id Pregunta: 250. CONSTITUCION1978";
 preguntaids[8] = 250


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[9]= "10)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[9]= new Array();
 choices[9][0] = "Presentar la moci&oacute;n de censura.";
 choices[9][1] = "Presidir las sesiones del Parlamento.";
 choices[9][2] = "Organizar la Secretar&iacute;a General.";
 choices[9][3] = "Preparar las actividades de las Comisiones.";
 answers[9] = choices[9][1];
 units[9] = "5";
 comments[9] = "Id Pregunta: 367. UNION EUROPEA";
 preguntaids[9] = 367


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[10]= "11)  Son bases de datos NoSQL:";
 choices[10]= new Array();
 choices[10][0] = "MongoDB y Maria DB";
 choices[10][1] = "HBase y Dynamo";
 choices[10][2] = "MariaDB, Cassandra y BigTable";
 choices[10][3] = "La A) y la C)";
 answers[10] = choices[10][1];
 units[10] = "73";
 comments[10] = "Id Pregunta: 104. ";
 preguntaids[10] = 104


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[11]= "12)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[11]= new Array();
 choices[11][0] = "personalidad jur&iacute;dica propia";
 choices[11][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[11][2] = "personalidad jur&iacute;dica plena";
 choices[11][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[11] = choices[11][1];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 774. Ley 40/2015";
 preguntaids[11] = 774


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[12]= "13)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[12]= new Array();
 choices[12][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[12][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[12][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[12][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[12] = choices[12][1];
 units[12] = "63";
 comments[12] = "Id Pregunta: 33. AGE A1 2015";
 preguntaids[12] = 33


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[13]= "14)  El sector Servicios NO incluye:";
 choices[13]= new Array();
 choices[13][0] = "El Comercio";
 choices[13][1] = "Los Transportes";
 choices[13][2] = "La Energ&iacute;a";
 choices[13][3] = "Las Comunicaciones";
 answers[13] = choices[13][2];
 units[13] = "12";
 comments[13] = "Id Pregunta: 571. Modelo econ&oacute;mico";
 preguntaids[13] = 571


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[14]= "15)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[14]= new Array();
 choices[14][0] = "El Ministerio de Igualdad.";
 choices[14][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[14][2] = "Ambas son correctas.";
 choices[14][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[14] = choices[14][1];
 units[14] = "14";
 comments[14] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";
 preguntaids[14] = 422


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[15]= new Array();
 choices[15][0] = "Cassandra";
 choices[15][1] = "Riak";
 choices[15][2] = "Avro";
 choices[15][3] = "Zookeeper";
 answers[15] = choices[15][3];
 units[15] = "73";
 comments[15] = "Id Pregunta: 658. ";
 preguntaids[15] = 658


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[16]= new Array();
 choices[16][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[16][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[16][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[16][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[16] = choices[16][1];
 units[16] = "43";
 comments[16] = "Id Pregunta: 444. SERVICIOS COMUNES";
 preguntaids[16] = 444


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[17]= new Array();
 choices[17][0] = "En 1988.";
 choices[17][1] = "En 1981.";
 choices[17][2] = "En 1982.";
 choices[17][3] = "En 1986.";
 answers[17] = choices[17][3];
 units[17] = "5";
 comments[17] = "Id Pregunta: 371. UNION EUROPEA";
 preguntaids[17] = 371


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[18]= "19)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[18]= new Array();
 choices[18][0] = "Los cr&eacute;ditos";
 choices[18][1] = "Las partidas presupuestarias";
 choices[18][2] = "Los derechos";
 choices[18][3] = "Las obligaciones";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";
 preguntaids[18] = 453


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[19]= "20)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[19]= new Array();
 choices[19][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[19][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[19][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[19][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[19] = choices[19][1];
 units[19] = "1";
 comments[19] = "Id Pregunta: 263. CONSTITUCION1978";
 preguntaids[19] = 263


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[20]= "21)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[20]= new Array();
 choices[20][0] = "los Secretarios de Estado";
 choices[20][1] = "los Ministros";
 choices[20][2] = "los Subsecretarios";
 choices[20][3] = "los Secretarios generales";
 answers[20] = choices[20][2];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 810. Ley 40/2015";
 preguntaids[20] = 810


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[21]= "22)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[21]= new Array();
 choices[21][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[21][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[21][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[21][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[21] = choices[21][2];
 units[21] = "47";
 comments[21] = "Id Pregunta: 77. AGE A1 2015";
 preguntaids[21] = 77


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[22]= new Array();
 choices[22][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[22][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[22][2] = "Iniciativa europea de libre flujo de datos.";
 choices[22][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[22] = choices[22][2];
 units[22] = "5";
 comments[22] = "Id Pregunta: 286. UNION EUROPEA";
 preguntaids[22] = 286


//  Id pregunta: 860 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l NO es un objetivo de la utilizaci&oacute;n por parte de la Administraci&oacute;n de la web 2.0?";
 choices[23]= new Array();
 choices[23][0] = "Permitir la generaci&oacute;n de comentarios acerca de la informaci&oacute;n ofrecida y recibir actualizaciones en vivo por parte de los usuarios.";
 choices[23][1] = "Promover una mayor interacci&oacute;n con las principales redes sociales.";
 choices[23][2] = "Conseguir un conocimiento abierto, en particular mediante blogs y wikis.";
 choices[23][3] = "Conseguir que el usuario se sienta escuchado.";
 answers[23] = choices[23][1];
 units[23] = "125";
 comments[23] = "Id Pregunta: 860. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[23] = 860


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[24]= "25)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[24]= new Array();
 choices[24][0] = "Estrasburgo.";
 choices[24][1] = "Bruselas.";
 choices[24][2] = "Luxemburgo.";
 choices[24][3] = "Holanda.";
 answers[24] = choices[24][2];
 units[24] = "5";
 comments[24] = "Id Pregunta: 295. UNION EUROPEA";
 preguntaids[24] = 295


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


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[26]= new Array();
 choices[26][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[26][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[26][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[26][3] = "El software funcionando es la medida principal del progreso.";
 answers[26] = choices[26][2];
 units[26] = "34";
 comments[26] = "Id Pregunta: 43. AGE A1 2015";
 preguntaids[26] = 43


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[27]= "28)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[27][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[27][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[27][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[27] = choices[27][2];
 units[27] = "83";
 comments[27] = "Id Pregunta: 56. AGE A1 2015";
 preguntaids[27] = 56


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


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[29]= "30)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[29]= new Array();
 choices[29][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[29][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[29][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[29][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[29] = choices[29][0];
 units[29] = "14";
 comments[29] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";
 preguntaids[29] = 396


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[30]= "31)  Es falso que:";
 choices[30]= new Array();
 choices[30][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[30][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[30][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[30][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[30] = choices[30][1];
 units[30] = "20";
 comments[30] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";
 preguntaids[30] = 752


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[31]= "32)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[31]= new Array();
 choices[31][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[31][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[31][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[31][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[31] = choices[31][1];
 units[31] = "1";
 comments[31] = "Id Pregunta: 205. CONSTITUCION1978";
 preguntaids[31] = 205


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[32]= "33)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[32]= new Array();
 choices[32][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[32][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[32][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[32][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[32] = choices[32][2];
 units[32] = "7";
 comments[32] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";
 preguntaids[32] = 155


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[33]= new Array();
 choices[33][0] = "Veinte.";
 choices[33][1] = "Quince.";
 choices[33][2] = "Diez.";
 choices[33][3] = "Doce.";
 answers[33] = choices[33][1];
 units[33] = "1";
 comments[33] = "Id Pregunta: 264. CONSTITUCION1978";
 preguntaids[33] = 264


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[34]= "35)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[34][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[34][2] = "Ambas son correctas.";
 choices[34][3] = "La A y B son incorrectas.";
 answers[34] = choices[34][2];
 units[34] = "14";
 comments[34] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";
 preguntaids[34] = 417


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[35]= "36)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[35]= new Array();
 choices[35][0] = "A nivel de art&iacute;culo.";
 choices[35][1] = "A nivel de cap&iacute;tulo.";
 choices[35][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[35][3] = "A nivel de concepto.";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";
 preguntaids[35] = 481


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[36]= new Array();
 choices[36][0] = "Yarn";
 choices[36][1] = "Flume";
 choices[36][2] = "Hive";
 choices[36][3] = "BizAgi";
 answers[36] = choices[36][3];
 units[36] = "73";
 comments[36] = "Id Pregunta: 657. ";
 preguntaids[36] = 657


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[37]= new Array();
 choices[37][0] = "Perceptible";
 choices[37][1] = "Operable";
 choices[37][2] = "Comprensible";
 choices[37][3] = "Robusto";
 answers[37] = choices[37][2];
 units[37] = "42";
 comments[37] = "Id Pregunta: 83. AGE A1 2015";
 preguntaids[37] = 83


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[38]= "39)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Incremental, diferencial, completa";
 choices[38][1] = "Completa, incremental, diferencial";
 choices[38][2] = "Completa, diferencial, incremental";
 choices[38][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[38] = choices[38][0];
 units[38] = "53";
 comments[38] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";
 preguntaids[38] = 66


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[39]= "40)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[39]= new Array();
 choices[39][0] = "&oacute;rganos superiores";
 choices[39][1] = "&oacute;rganos directivos";
 choices[39][2] = "&oacute;rganos superiores y directivos";
 choices[39][3] = "ninguna es correcta";
 answers[39] = choices[39][1];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[39] = 796


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[40]= new Array();
 choices[40][0] = "JUnit, Artifactory y SonarQube";
 choices[40][1] = "JUnit, Artifactory y Selenium";
 choices[40][2] = "JUnit, SonarQube y Selenium";
 choices[40][3] = "ArtiFactory, SonarQube y Selenium";
 answers[40] = choices[40][2];
 units[40] = "92";
 comments[40] = "Id Pregunta: 91. AGE A1 2015";
 preguntaids[40] = 91


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[41]= "42)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[41]= new Array();
 choices[41][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[41][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[41][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[41][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[41] = choices[41][0];
 units[41] = "10";
 comments[41] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";
 preguntaids[41] = 501


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[42]= new Array();
 choices[42][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[42][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[42][2] = "Servicio de seguridad gestionada";
 choices[42][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[42] = choices[42][1];
 units[42] = "26";
 comments[42] = "Id Pregunta: 58. AGE A1 2015";
 preguntaids[42] = 58


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[43]= "44)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[43]= new Array();
 choices[43][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[43][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[43][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[43][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[43] = choices[43][0];
 units[43] = "101";
 comments[43] = "Id Pregunta: 649. Junta de Extremadura A1 2015";
 preguntaids[43] = 649


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[44]= "45)  El sector p&uacute;blico institucional se integra por:";
 choices[44]= new Array();
 choices[44][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[44][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[44][2] = "las Universidades p&uacute;blicas";
 choices[44][3] = "todas son correctas";
 answers[44] = choices[44][3];
 units[44] = "7";
 comments[44] = "Id Pregunta: 516. LEY 39/2015";
 preguntaids[44] = 516


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[45]= "46)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[45]= new Array();
 choices[45][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[45][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[45][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[45][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[45] = choices[45][1];
 units[45] = "5";
 comments[45] = "Id Pregunta: 339. UNION EUROPEA";
 preguntaids[45] = 339


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[46]= "47)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[46]= new Array();
 choices[46][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[46][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[46][2] = "La protecci&oacute;n del medio ambiente.";
 choices[46][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[46] = choices[46][0];
 units[46] = "22";
 comments[46] = "Id Pregunta: 125. ";
 preguntaids[46] = 125


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[47]= "48)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[47]= new Array();
 choices[47][0] = "Los cr&eacute;ditos";
 choices[47][1] = "Las partidas presupuestarias";
 choices[47][2] = "Los derechos";
 choices[47][3] = "Las obligaciones";
 answers[47] = choices[47][3];
 units[47] = "10";
 comments[47] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";
 preguntaids[47] = 454


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[48]= "49)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[48]= new Array();
 choices[48][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[48][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[48][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[48][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[48] = choices[48][3];
 units[48] = "1";
 comments[48] = "Id Pregunta: 253. CONSTITUCION1978";
 preguntaids[48] = 253


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[49]= new Array();
 choices[49][0] = "Por Real Decreto.";
 choices[49][1] = "Por Orden del Ministerio del Interior.";
 choices[49][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[49][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[49] = choices[49][2];
 units[49] = "1";
 comments[49] = "Id Pregunta: 230. CONSTITUCION1978";
 preguntaids[49] = 230


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[50]= "51)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[50]= new Array();
 choices[50][0] = "Establecer tributos.";
 choices[50][1] = "Desarrollar lo establecido en una Ley.";
 choices[50][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[50][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[50] = choices[50][0];
 units[50] = "1";
 comments[50] = "Id Pregunta: 197. CONSTITUCION1978";
 preguntaids[50] = 197


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[51]= "52)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[51]= new Array();
 choices[51][0] = "la Administraci&oacute;n General del Estado";
 choices[51][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[51][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[51][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[51] = choices[51][3];
 units[51] = "7";
 comments[51] = "Id Pregunta: 519. LEY 39/2015";
 preguntaids[51] = 519


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[52]= "53)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[52]= new Array();
 choices[52][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[52][1] = "La libertad sexual y religiosa.";
 choices[52][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[52][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[52] = choices[52][3];
 units[52] = "1";
 comments[52] = "Id Pregunta: 254. CONSTITUCION1978";
 preguntaids[52] = 254


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[53]= "54)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[53]= new Array();
 choices[53][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[53][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[53][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[53][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[53] = choices[53][1];
 units[53] = "28";
 comments[53] = "Id Pregunta: 734. Estrategia TIC";
 preguntaids[53] = 734


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[54]= new Array();
 choices[54][0] = "La Comisi&oacute;n Permanente.";
 choices[54][1] = "El Presidente.";
 choices[54][2] = "El Pleno.";
 choices[54][3] = "El Vicepresidente.";
 answers[54] = choices[54][3];
 units[54] = "1";
 comments[54] = "Id Pregunta: 261. CONSTITUCION1978";
 preguntaids[54] = 261


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[55]= new Array();
 choices[55][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[55][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[55][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[55][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[55] = choices[55][1];
 units[55] = "1";
 comments[55] = "Id Pregunta: 219. CONSTITUCION1978";
 preguntaids[55] = 219


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[56]= new Array();
 choices[56][0] = "14";
 choices[56][1] = "11";
 choices[56][2] = "12";
 choices[56][3] = "15";
 answers[56] = choices[56][0];
 units[56] = "19";
 comments[56] = "Id Pregunta: 590. Estrategia TIC";
 preguntaids[56] = 590


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[57]= new Array();
 choices[57][0] = "SPARQL";
 choices[57][1] = "UnQL";
 choices[57][2] = "XQUERY";
 choices[57][3] = "RQL";
 answers[57] = choices[57][0];
 units[57] = "74";
 comments[57] = "Id Pregunta: 23. AGE A1 2015";
 preguntaids[57] = 23


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[58]= new Array();
 choices[58][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[58][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[58][2] = "la falta de interoperabilidad.";
 choices[58][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[58] = choices[58][1];
 units[58] = "5";
 comments[58] = "Id Pregunta: 285. UNION EUROPEA";
 preguntaids[58] = 285


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[59]= new Array();
 choices[59][0] = "Anual";
 choices[59][1] = "Mensual";
 choices[59][2] = "Semestral";
 choices[59][3] = "Trimestral";
 answers[59] = choices[59][3];
 units[59] = "15";
 comments[59] = "Id Pregunta: 119. ";
 preguntaids[59] = 119


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[60]= new Array();
 choices[60][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[60][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[60][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[60][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[60] = choices[60][2];
 units[60] = "7";
 comments[60] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";
 preguntaids[60] = 149


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[61]= new Array();
 choices[61][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[61][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[61][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[61][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[61] = choices[61][0];
 units[61] = "15";
 comments[61] = "Id Pregunta: 114. ";
 preguntaids[61] = 114


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[62]= "63)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[62]= new Array();
 choices[62][0] = "180 art&iacute;culos.";
 choices[62][1] = "182 art&iacute;culos.";
 choices[62][2] = "185 art&iacute;culos.";
 choices[62][3] = "190 art&iacute;culos.";
 answers[62] = choices[62][1];
 units[62] = "10";
 comments[62] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";
 preguntaids[62] = 485


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[63]= "64)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[63]= new Array();
 choices[63][0] = "El Presidente del Consejo Europeo.";
 choices[63][1] = "La Comisi&oacute;n.";
 choices[63][2] = "El Consejo.";
 choices[63][3] = "El Parlamento Europeo.";
 answers[63] = choices[63][2];
 units[63] = "5";
 comments[63] = "Id Pregunta: 328. UNION EUROPEA";
 preguntaids[63] = 328


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[64]= new Array();
 choices[64][0] = "Al Consejo Europeo.";
 choices[64][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[64][2] = "A la Comisi&oacute;n Europea.";
 choices[64][3] = "Al Parlamento Europeo.";
 answers[64] = choices[64][2];
 units[64] = "5";
 comments[64] = "Id Pregunta: 294. UNION EUROPEA";
 preguntaids[64] = 294


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[65]= new Array();
 choices[65][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[65][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[65][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[65][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[65] = choices[65][0];
 units[65] = "14";
 comments[65] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";
 preguntaids[65] = 386


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[66]= "67)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[66]= new Array();
 choices[66][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[66][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[66][2] = "Al Congreso de los Diputados.";
 choices[66][3] = "Al Gobierno.";
 answers[66] = choices[66][0];
 units[66] = "1";
 comments[66] = "Id Pregunta: 234. CONSTITUCION1978";
 preguntaids[66] = 234


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[67]= "68)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[67]= new Array();
 choices[67][0] = "6 TB.";
 choices[67][1] = "5 TB.";
 choices[67][2] = "7 TB.";
 choices[67][3] = "3 TB.";
 answers[67] = choices[67][1];
 units[67] = "53";
 comments[67] = "Id Pregunta: 854. Xunta de Galicia 2015";
 preguntaids[67] = 854


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[68]= "69)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[68]= new Array();
 choices[68][0] = "Cincuenta y cuatro.";
 choices[68][1] = "Cincuenta.";
 choices[68][2] = "Cincuenta y cinco.";
 choices[68][3] = "Cincuenta y dos.";
 answers[68] = choices[68][1];
 units[68] = "5";
 comments[68] = "Id Pregunta: 321. UNION EUROPEA";
 preguntaids[68] = 321


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[69]= "70)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[69]= new Array();
 choices[69][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[69][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[69][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[69][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[69] = choices[69][3];
 units[69] = "1";
 comments[69] = "Id Pregunta: 227. CONSTITUCION1978";
 preguntaids[69] = 227


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[70]= new Array();
 choices[70][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[70][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[70][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[70][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[70] = choices[70][3];
 units[70] = "120";
 comments[70] = "Id Pregunta: 653. Junta de Extremadura A1 2015";
 preguntaids[70] = 653


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[71]= new Array();
 choices[71][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[71][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[71][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[71][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[71] = choices[71][3];
 units[71] = "66";
 comments[71] = "Id Pregunta: 37. AGE A1 2015";
 preguntaids[71] = 37


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[72]= new Array();
 choices[72][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[72][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[72][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[72][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[72] = choices[72][0];
 units[72] = "14";
 comments[72] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";
 preguntaids[72] = 393


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[73]= new Array();
 choices[73][0] = "Diagrama de clases";
 choices[73][1] = "Diagrama de componentes";
 choices[73][2] = "Diagrama de estructura";
 choices[73][3] = "Diagrama de paquetes";
 answers[73] = choices[73][0];
 units[73] = "91";
 comments[73] = "Id Pregunta: 88. AGE A1 2015";
 preguntaids[73] = 88


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[74]= "75)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se basar&aacute;n en:";
 choices[74]= new Array();
 choices[74][0] = "6 principios.";
 choices[74][1] = "7 principios.";
 choices[74][2] = "5 principios.";
 choices[74][3] = "6 directrices.";
 answers[74] = choices[74][2];
 units[74] = "28";
 comments[74] = "Id Pregunta: 738. Estrategia TIC";
 preguntaids[74] = 738


