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

//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[0]= "1)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[0]= new Array();
 choices[0][0] = "Bases de datos orientadas a filas";
 choices[0][1] = "Bases de datos orientadas a documentos";
 choices[0][2] = "Bases de datos de clave/valor";
 choices[0][3] = "Bases de datos orientadas a objetos";
 answers[0] = choices[0][0];
 units[0] = "73";
 comments[0] = "Id Pregunta: 100. ";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[1]= "2)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[1]= new Array();
 choices[1][0] = "Infrastructure as a Service (IaaS)";
 choices[1][1] = "Platform as a Service (PaaS)";
 choices[1][2] = "Software as a Service (SaaS)";
 choices[1][3] = "Application as a Service (AaaS)";
 answers[1] = choices[1][1];
 units[1] = "52";
 comments[1] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[2]= "3)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[2]= new Array();
 choices[2][0] = "El Gobierno.";
 choices[2][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[2][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[2][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 206. CONSTITUCION1978";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale la respuesta falsa:";
 choices[3]= new Array();
 choices[3][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[3][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[3][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[3][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Aplicaci&oacute;n";
 choices[4][1] = "Sesi&oacute;n";
 choices[4][2] = "Presentaci&oacute;n";
 choices[4][3] = "Transporte";
 answers[4] = choices[4][2];
 units[4] = "105";
 comments[4] = "Id Pregunta: 18. AGE A1 2015";


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[5]= "6)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[5]= new Array();
 choices[5][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[5][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[5][2] = "Ninguna es correcta.";
 choices[5][3] = "A y B son correctas.";
 answers[5] = choices[5][0];
 units[5] = "14";
 comments[5] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[6]= new Array();
 choices[6][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[6][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[6][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[6][3] = "Todos los anteriores";
 answers[6] = choices[6][3];
 units[6] = "19";
 comments[6] = "Id Pregunta: 592. Estrategia TIC";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[7]= "8)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[7]= new Array();
 choices[7][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[7][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[7][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[7][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[7] = choices[7][1];
 units[7] = "7";
 comments[7] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[8]= new Array();
 choices[8][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[8][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[8][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[8][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[8] = choices[8][2];
 units[8] = "26";
 comments[8] = "Id Pregunta: 553. Gobernanza TIC";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[9]= "10)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[9][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[9][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[9][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[9] = choices[9][1];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[10]= "11)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[10]= new Array();
 choices[10][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[10][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[10][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[10][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[10] = choices[10][0];
 units[10] = "7";
 comments[10] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[11]= "12)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[11]= new Array();
 choices[11][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[11][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[11][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[11][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[11] = choices[11][2];
 units[11] = "5";
 comments[11] = "Id Pregunta: 340. UNION EUROPEA";


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[12]= new Array();
 choices[12][0] = "Las Cortes Generales.";
 choices[12][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[12][2] = "El Gobierno.";
 choices[12][3] = "El Congreso de los Diputados.";
 answers[12] = choices[12][0];
 units[12] = "10";
 comments[12] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[13]= "14)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[13][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[13][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[13][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[13] = choices[13][0];
 units[13] = "19";
 comments[13] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[14]= "15)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[14]= new Array();
 choices[14][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[14][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[14][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[14][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[14] = choices[14][2];
 units[14] = "47";
 comments[14] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[15]= "16)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[15]= new Array();
 choices[15][0] = "Peters";
 choices[15][1] = "Hollingsworth";
 choices[15][2] = "Manuel Castells";
 choices[15][3] = "Gaebler";
 answers[15] = choices[15][1];
 units[15] = "18, 20";
 comments[15] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[16]= new Array();
 choices[16][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[16][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[16][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[16][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[16] = choices[16][0];
 units[16] = "91";
 comments[16] = "Id Pregunta: 6. AGE A1 2015";


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[17]= new Array();
 choices[17][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[17][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[17][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[17][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[17] = choices[17][1];
 units[17] = "19";
 comments[17] = "Id Pregunta: 581. Estrategia TIC";


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[18]= "19)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[18]= new Array();
 choices[18][0] = "Al Gobierno.";
 choices[18][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[18][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[18][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[19]= new Array();
 choices[19][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[19][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[19][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[19][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[19] = choices[19][3];
 units[19] = "106";
 comments[19] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[20]= "21)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[20]= new Array();
 choices[20][0] = "los registros mercantiles";
 choices[20][1] = "los registros de la propiedad";
 choices[20][2] = "los protocolos notariales";
 choices[20][3] = "todas son correctas";
 answers[20] = choices[20][3];
 units[20] = "7";
 comments[20] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[21]= new Array();
 choices[21][0] = "Principio de solo una vez";
 choices[21][1] = "Apertura y transparencia";
 choices[21][2] = "Confianza y seguridad";
 choices[21][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[21] = choices[21][3];
 units[21] = "19";
 comments[21] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[22]= new Array();
 choices[22][0] = "La CETIC";
 choices[22][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[22][2] = "La DTIC";
 choices[22][3] = "Ninguno de los anteriores";
 answers[22] = choices[22][1];
 units[22] = "19";
 comments[22] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[23]= "24)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[23]= new Array();
 choices[23][0] = "De las disposiciones favorables.";
 choices[23][1] = "De las disposiciones sancionadoras no favorables.";
 choices[23][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[23][3] = "Las respuestas b) y c) son correctas.";
 answers[23] = choices[23][3];
 units[23] = "1";
 comments[23] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[24]= new Array();
 choices[24][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[24][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[24][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[24][3] = "Todas las respuestas son correctas.";
 answers[24] = choices[24][2];
 units[24] = "42";
 comments[24] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[25]= new Array();
 choices[25][0] = "Perceptible";
 choices[25][1] = "Operable";
 choices[25][2] = "Comprensible";
 choices[25][3] = "Robusto";
 answers[25] = choices[25][2];
 units[25] = "42";
 comments[25] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[26]= "27)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[26][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[26][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[26][3] = "Todas las anteriores son ciertas";
 answers[26] = choices[26][3];
 units[26] = "8";
 comments[26] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[27]= "28)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[27]= new Array();
 choices[27][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[27][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[27][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[27][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[27] = choices[27][1];
 units[27] = "5";
 comments[27] = "Id Pregunta: 297. UNION EUROPEA";


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[28]= "29)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[28]= new Array();
 choices[28][0] = "Tres a&ntilde;os.";
 choices[28][1] = "Cuatro a&ntilde;os.";
 choices[28][2] = "Cinco a&ntilde;os.";
 choices[28][3] = "Seis a&ntilde;os.";
 answers[28] = choices[28][0];
 units[28] = "5";
 comments[28] = "Id Pregunta: 324. UNION EUROPEA";


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[29]= "30)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[29][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[29][2] = "b) y d) son verdaderas";
 choices[29][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[29] = choices[29][1];
 units[29] = "18, 20";
 comments[29] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[30]= "31)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[30]= new Array();
 choices[30][0] = "Tres a&ntilde;os.";
 choices[30][1] = "Dos a&ntilde;os y medio.";
 choices[30][2] = "Cinco a&ntilde;os.";
 choices[30][3] = "Seis a&ntilde;os.";
 answers[30] = choices[30][2];
 units[30] = "5";
 comments[30] = "Id Pregunta: 289. UNION EUROPEA";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[31]= "32)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[31]= new Array();
 choices[31][0] = "Presencia equilibrada.";
 choices[31][1] = "Presencia paritaria.";
 choices[31][2] = "Presencia consensuada.";
 choices[31][3] = "presencia horizontal.";
 answers[31] = choices[31][0];
 units[31] = "14";
 comments[31] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; es Java Web Start?";
 choices[32]= new Array();
 choices[32][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[32][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[32][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[32][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[32] = choices[32][3];
 units[32] = "64";
 comments[32] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[33]= new Array();
 choices[33][0] = "Backup full.";
 choices[33][1] = "Backup diferencial.";
 choices[33][2] = "Backup incremental.";
 choices[33][3] = "Backup deduplicado.";
 answers[33] = choices[33][3];
 units[33] = "53";
 comments[33] = "Id Pregunta: 852. Xunta de Galicia 2015";


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[34]= "35)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[34]= new Array();
 choices[34][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[34][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[34][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[34][3] = "Todas son correctas.";
 answers[34] = choices[34][1];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 842. Ley 40/2015";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[35]= new Array();
 choices[35][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[35][1] = "El Gobierno.";
 choices[35][2] = "El Presidente del Gobierno.";
 choices[35][3] = "El Consejo de Ministros.";
 answers[35] = choices[35][1];
 units[35] = "10";
 comments[35] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[36]= "37)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[36]= new Array();
 choices[36][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[36][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[36][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[36][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[36] = choices[36][1];
 units[36] = "7";
 comments[36] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[37]= "38)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[37]= new Array();
 choices[37][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[37][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[37][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[37][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[37] = choices[37][0];
 units[37] = "31";
 comments[37] = "Id Pregunta: 2. AGE A1 2015";


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[38]= new Array();
 choices[38][0] = "las Cortes generales.";
 choices[38][1] = "los partidos pol&iacute;ticos.";
 choices[38][2] = "los sindicatos.";
 choices[38][3] = "las Comunidades Aut&oacute;nomas.";
 answers[38] = choices[38][1];
 units[38] = "1";
 comments[38] = "Id Pregunta: 225. CONSTITUCION1978";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[39]= new Array();
 choices[39][0] = "Al Consejo Europeo.";
 choices[39][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[39][2] = "A la Comisi&oacute;n Europea.";
 choices[39][3] = "Al Parlamento Europeo.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[40]= "41)  El Presupuesto por programas sirve para saber...";
 choices[40]= new Array();
 choices[40][0] = "En qu&eacute; nos gastamos el dinero";
 choices[40][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[40][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[40][3] = "Qui&eacute;n se gasta el dinero";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[41]= "42)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[41]= new Array();
 choices[41][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[41][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[41][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[41][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[41] = choices[41][2];
 units[41] = "27";
 comments[41] = "Id Pregunta: 20. AGE A1 2015";


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[42]= "43)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[42]= new Array();
 choices[42][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[42][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[42][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[42][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[42] = choices[42][1];
 units[42] = "43";
 comments[42] = "Id Pregunta: 439. SERVICIOS COMUNES";


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[43]= "44)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[43]= new Array();
 choices[43][0] = "Programaci&oacute;n estructurada.";
 choices[43][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[43][2] = "Programaci&oacute;n extrema.";
 choices[43][3] = "Programaci&oacute;n Espuria.";
 answers[43] = choices[43][2];
 units[43] = "92";
 comments[43] = "Id Pregunta: 697. INTEGRACION CONTINUA";


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[44]= "45)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[44]= new Array();
 choices[44][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[44][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[44][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[44][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[44] = choices[44][2];
 units[44] = "26";
 comments[44] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[45]= "46)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[45]= new Array();
 choices[45][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[45][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[45][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[45][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[45] = choices[45][1];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 808. Ley 40/2015";


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[46]= new Array();
 choices[46][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[46][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[46][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[46][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[46] = choices[46][0];
 units[46] = "46";
 comments[46] = "Id Pregunta: 629. Junta de Extremadura A1 2015";


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[47]= "48)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[47]= new Array();
 choices[47][0] = "Ejecutivo";
 choices[47][1] = "Limitativo";
 choices[47][2] = "Estimativo";
 choices[47][3] = "Progresivo";
 answers[47] = choices[47][1];
 units[47] = "10";
 comments[47] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[48]= "49)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[48]= new Array();
 choices[48][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[48][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[48][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[48][3] = "Todas las respuestas son correctas.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 375. UNION EUROPEA";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[49]= "50)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[49]= new Array();
 choices[49][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[49][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[49][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[49][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[49] = choices[49][1];
 units[49] = "5";
 comments[49] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[50]= "51)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[50]= new Array();
 choices[50][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[50][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[50][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[50][3] = "todas son correctas";
 answers[50] = choices[50][3];
 units[50] = "7";
 comments[50] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[51]= new Array();
 choices[51][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[51][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[51][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[51][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[51] = choices[51][2];
 units[51] = "10";
 comments[51] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[52]= "53)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[52]= new Array();
 choices[52][0] = "P&uacute;blica.";
 choices[52][1] = "Privada.";
 choices[52][2] = "A y B son correctas.";
 choices[52][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[52] = choices[52][2];
 units[52] = "14";
 comments[52] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[53]= "54)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[53]= new Array();
 choices[53][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[53][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[53][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[53][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[53] = choices[53][3];
 units[53] = "86";
 comments[53] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[54]= "55)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[54]= new Array();
 choices[54][0] = "Siempre en formato electr&oacute;nico.";
 choices[54][1] = "Siempre en formato papel.";
 choices[54][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[54][3] = "La ley no regula el formato del expediente.";
 answers[54] = choices[54][0];
 units[54] = "7";
 comments[54] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[55]= new Array();
 choices[55][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[55][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[55][2] = "Fomentar el despliegue de redes y servicios";
 choices[55][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[55] = choices[55][0];
 units[55] = "19";
 comments[55] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[56]= "57)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[56]= new Array();
 choices[56][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[56][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[56][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[56][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[56] = choices[56][3];
 units[56] = "56";
 comments[56] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[57]= new Array();
 choices[57][0] = "Art&iacute;culo 9.1 CE.";
 choices[57][1] = "Art&iacute;culo 53 CE.";
 choices[57][2] = "Art&iacute;culo 14 CE.";
 choices[57][3] = "Art&iacute;culo 16 CE.";
 answers[57] = choices[57][2];
 units[57] = "14";
 comments[57] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[58]= "59)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[58]= new Array();
 choices[58][0] = "los Subsecretarios y los Secretarios generales";
 choices[58][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[58][2] = "los Secretarios de Estado y los Directores generales";
 choices[58][3] = "los Ministros y los Secretarios de Estado";
 answers[58] = choices[58][3];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[59]= "60)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[59]= new Array();
 choices[59][0] = "El Presidente y su gabinete.";
 choices[59][1] = "El Presidente y sus Ministros.";
 choices[59][2] = "El Rey y el Presidente.";
 choices[59][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[59] = choices[59][2];
 units[59] = "1";
 comments[59] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[60]= "61)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[60]= new Array();
 choices[60][0] = "Estrat&eacute;gico";
 choices[60][1] = "Operativo";
 choices[60][2] = "T&aacute;ctico";
 choices[60][3] = "Tecnol&oacute;gico";
 answers[60] = choices[60][0];
 units[60] = "36";
 comments[60] = "Id Pregunta: 76. AGE A1 2015";


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[61]= new Array();
 choices[61][0] = "La Comisi&oacute;n Permanente.";
 choices[61][1] = "El Presidente.";
 choices[61][2] = "El Pleno.";
 choices[61][3] = "El Vicepresidente.";
 answers[61] = choices[61][3];
 units[61] = "1";
 comments[61] = "Id Pregunta: 261. CONSTITUCION1978";


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[62]= new Array();
 choices[62][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[62][1] = "Directiva 2004/113/CE del Consejo.";
 choices[62][2] = "Todas son correctas.";
 choices[62][3] = "Todas son falsas.";
 answers[62] = choices[62][2];
 units[62] = "14";
 comments[62] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[63]= new Array();
 choices[63][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[63][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[63][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[63][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[63] = choices[63][1];
 units[63] = "77";
 comments[63] = "Id Pregunta: 694. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[64]= "65)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[64]= new Array();
 choices[64][0] = "Tranparencia, innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[64][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[64][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[64][3] = "Ninguna de las anteriores";
 answers[64] = choices[64][0];
 units[64] = "28";
 comments[64] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[65]= new Array();
 choices[65][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[65][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[65][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[65][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[65] = choices[65][1];
 units[65] = "26";
 comments[65] = "Id Pregunta: 547. Gobernanza TIC";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[66]= "67)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[66]= new Array();
 choices[66][0] = "Conformidad";
 choices[66][1] = "Responsabilidad";
 choices[66][2] = "Adquisici&oacute;n";
 choices[66][3] = "Desempe&ntilde;o";
 answers[66] = choices[66][0];
 units[66] = "26";
 comments[66] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[67]= "68)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[67]= new Array();
 choices[67][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[67][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[67][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[67][3] = "todas son correctas";
 answers[67] = choices[67][3];
 units[67] = "7";
 comments[67] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[68]= new Array();
 choices[68][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[68][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[68][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[68][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[68] = choices[68][1];
 units[68] = "15";
 comments[68] = "Id Pregunta: 112. ";


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[69]= "70)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[69]= new Array();
 choices[69][0] = "6 principios.";
 choices[69][1] = "7 principios.";
 choices[69][2] = "5 principios.";
 choices[69][3] = "6 directrices.";
 answers[69] = choices[69][1];
 units[69] = "28";
 comments[69] = "Id Pregunta: 738. Estrategia TIC";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[70]= new Array();
 choices[70][0] = "Art. 25 LO, 3/2007.";
 choices[70][1] = "Art. 23 LO, 3/2007.";
 choices[70][2] = "Art. 14 LO, 3/2007.";
 choices[70][3] = "Ninguna es correcta, es el art. 13.";
 answers[70] = choices[70][0];
 units[70] = "14";
 comments[70] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[71]= "72)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[71]= new Array();
 choices[71][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[71][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[71][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[71][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[71] = choices[71][2];
 units[71] = "47";
 comments[71] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[72]= new Array();
 choices[72][0] = "Art&iacute;culo 16.2.";
 choices[72][1] = "Art&iacute;culo 17.1.";
 choices[72][2] = "Art&iacute;culo 18.1.";
 choices[72][3] = "Art&iacute;culo 18.2.";
 answers[72] = choices[72][2];
 units[72] = "1";
 comments[72] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[73]= "74)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[73]= new Array();
 choices[73][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[73][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[73][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[73][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[73] = choices[73][2];
 units[73] = "50";
 comments[73] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[74]= "75)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[74]= new Array();
 choices[74][0] = "El Presidente del Congreso de los Diputados.";
 choices[74][1] = "El Presidente del Gobierno.";
 choices[74][2] = "El Rey.";
 choices[74][3] = "El Consejo de Ministros.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 231. CONSTITUCION1978";


