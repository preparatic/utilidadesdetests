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

//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[0]= "1)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[0]= new Array();
 choices[0][0] = "&oacute;rganos superiores";
 choices[0][1] = "&oacute;rganos directivos";
 choices[0][2] = "&oacute;rganos superiores y directivos";
 choices[0][3] = "ninguna es correcta";
 answers[0] = choices[0][1];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[1]= "2)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[1]= new Array();
 choices[1][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[1][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[1][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[1][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[1] = choices[1][0];
 units[1] = "1";
 comments[1] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[2]= "3)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[2]= new Array();
 choices[2][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[2][1] = "Uno de sus miembros.";
 choices[2][2] = "La Comisi&oacute;n.";
 choices[2][3] = "Todas las respuestas son correctas.";
 answers[2] = choices[2][3];
 units[2] = "5";
 comments[2] = "Id Pregunta: 350. UNION EUROPEA";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[3]= "4)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[3]= new Array();
 choices[3][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[3][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[3][2] = "a y b son correctas";
 choices[3][3] = "a y b son incorrectas";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 585 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[4]= new Array();
 choices[4][0] = "La CETIC";
 choices[4][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[4][2] = "La DTIC";
 choices[4][3] = "Ninguno de los anteriores";
 answers[4] = choices[4][1];
 units[4] = "19";
 comments[4] = "Id Pregunta: 585. Estrategia TIC";


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[5]= "6)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[5]= new Array();
 choices[5][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[5][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[5][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[5][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[5] = choices[5][0];
 units[5] = "14";
 comments[5] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[6]= "7)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[6]= new Array();
 choices[6][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[6][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[6][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[6][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[6] = choices[6][3];
 units[6] = "10";
 comments[6] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[7]= new Array();
 choices[7][0] = "Lean startup";
 choices[7][1] = "Business Model Canvas";
 choices[7][2] = "Dynamic system Development method";
 choices[7][3] = "Lean software development";
 answers[7] = choices[7][2];
 units[7] = "34";
 comments[7] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[8]= "9)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[8]= new Array();
 choices[8][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[8][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[8][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[8][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[8] = choices[8][2];
 units[8] = "7";
 comments[8] = "Id Pregunta: 667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[9]= new Array();
 choices[9][0] = "El Presidente del Senado";
 choices[9][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[9][2] = "El Presidente del Gobierno";
 choices[9][3] = "El Presidente de las Cortes Generales";
 answers[9] = choices[9][2];
 units[9] = "1";
 comments[9] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[10]= "11)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[10]= new Array();
 choices[10][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[10][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[10][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[10][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[10] = choices[10][1];
 units[10] = "43";
 comments[10] = "Id Pregunta: 443. SERVICIOS COMUNES";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[11]= "12)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[11]= new Array();
 choices[11][0] = "La Comisi&oacute;n.";
 choices[11][1] = "El Consejo de Europa.";
 choices[11][2] = "El Consejo Europeo.";
 choices[11][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[11] = choices[11][3];
 units[11] = "5";
 comments[11] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[12]= "13)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[12]= new Array();
 choices[12][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[12][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[12][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[12][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[12] = choices[12][1];
 units[12] = "19";
 comments[12] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[13]= new Array();
 choices[13][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[13][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[13][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[13][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[13] = choices[13][2];
 units[13] = "22";
 comments[13] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[14]= new Array();
 choices[14][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[14][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[14][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[14][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[14] = choices[14][0];
 units[14] = "5";
 comments[14] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[15]= "16)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[15]= new Array();
 choices[15][0] = "Un a&ntilde;o prorrogable";
 choices[15][1] = "Dos a&ntilde;os no prorrogables";
 choices[15][2] = "Un a&ntilde;o no prorrogable";
 choices[15][3] = "Dos a&ntilde;os prorrogables";
 answers[15] = choices[15][2];
 units[15] = "37";
 comments[15] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[16]= "17)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[16]= new Array();
 choices[16][0] = "Por unanimidad.";
 choices[16][1] = "Por mayor&iacute;a cualificada.";
 choices[16][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[16][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[17]= new Array();
 choices[17][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[17][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[17][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[17][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[17] = choices[17][1];
 units[17] = "76";
 comments[17] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[18]= new Array();
 choices[18][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[18][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[18][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[18][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[18] = choices[18][1];
 units[18] = "43";
 comments[18] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[19]= "20)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[19]= new Array();
 choices[19][0] = "Cincuenta y cuatro.";
 choices[19][1] = "Cincuenta.";
 choices[19][2] = "Cincuenta y cinco.";
 choices[19][3] = "Cincuenta y dos.";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[20]= new Array();
 choices[20][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[20][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[20][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[20][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[20] = choices[20][3];
 units[20] = "106";
 comments[20] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[21]= "22)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[21][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[21][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[21][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[21] = choices[21][3];
 units[21] = "22";
 comments[21] = "Id Pregunta: 710. Ley de transparencia";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[22]= "23)  Son proyectos de Apache relacionados con Big Data:";
 choices[22]= new Array();
 choices[22][0] = "Hadoop";
 choices[22][1] = "Spark";
 choices[22][2] = "A) y B)";
 choices[22][3] = "Niguno de los anteriores";
 answers[22] = choices[22][2];
 units[22] = "73";
 comments[22] = "Id Pregunta: 108. ";


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[23]= new Array();
 choices[23][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[23][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[23][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[23][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[23] = choices[23][2];
 units[23] = "26";
 comments[23] = "Id Pregunta: 551. Gobernanza TIC";


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[24]= "25)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[24]= new Array();
 choices[24][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[24][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[24][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[24][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[24] = choices[24][3];
 units[24] = "101";
 comments[24] = "Id Pregunta: 57. AGE A1 2015";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[25]= new Array();
 choices[25][0] = "Es un framework de software libre.";
 choices[25][1] = "Es una base de datos NoSQL.";
 choices[25][2] = "Est&aacute; basado en MapReduce.";
 choices[25][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[25] = choices[25][1];
 units[25] = "73";
 comments[25] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[26]= "27)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[26]= new Array();
 choices[26][0] = "Seis a&ntilde;os.";
 choices[26][1] = "Cinco a&ntilde;os.";
 choices[26][2] = "Cuatro a&ntilde;os.";
 choices[26][3] = "Ocho a&ntilde;os.";
 answers[26] = choices[26][1];
 units[26] = "5";
 comments[26] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[27]= "28)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[27]= new Array();
 choices[27][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[27][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[27][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[27][3] = "Todas son correctas.";
 answers[27] = choices[27][3];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[28]= "29)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[28]= new Array();
 choices[28][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[28][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[28][2] = "Funcionarios e interinos.";
 choices[28][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[28] = choices[28][3];
 units[28] = "20";
 comments[28] = "Id Pregunta: 644. Junta de Extremadura A1 2015";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[29]= new Array();
 choices[29][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[29][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[29][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[29][3] = "El Senado se compone de 350 senadores.";
 answers[29] = choices[29][0];
 units[29] = "1";
 comments[29] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[30]= new Array();
 choices[30][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[30][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[30][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[30][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[30] = choices[30][0];
 units[30] = "26";
 comments[30] = "Id Pregunta: 0. AGE A1 2015";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[31]= "32)  El lenguaje SPARK es un subconjunto de:";
 choices[31]= new Array();
 choices[31][0] = "Java";
 choices[31][1] = "Fortran";
 choices[31][2] = "Ruby";
 choices[31][3] = "Ada";
 answers[31] = choices[31][3];
 units[31] = "73";
 comments[31] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[32]= "33)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[32]= new Array();
 choices[32][0] = "Los cr&eacute;ditos";
 choices[32][1] = "Las partidas presupuestarias";
 choices[32][2] = "Los derechos";
 choices[32][3] = "Las obligaciones";
 answers[32] = choices[32][3];
 units[32] = "10";
 comments[32] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[33]= "34)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[33]= new Array();
 choices[33][0] = "Cinco a&ntilde;os.";
 choices[33][1] = "Cuatro a&ntilde;os.";
 choices[33][2] = "Tres a&ntilde;os.";
 choices[33][3] = "Seis meses.";
 answers[33] = choices[33][2];
 units[33] = "5";
 comments[33] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[34]= "35)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[34]= new Array();
 choices[34][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[34][1] = "la Organizaci&oacute;n Territorial";
 choices[34][2] = "la Organizaci&oacute;n sectorial";
 choices[34][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[34] = choices[34][2];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[35]= "36)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[35]= new Array();
 choices[35][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[35][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[35][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[35][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[35] = choices[35][1];
 units[35] = "1";
 comments[35] = "Id Pregunta: 238. CONSTITUCION1978";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[36]= "37)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[36]= new Array();
 choices[36][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[36][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[36][2] = "Los interesados en el procedimiento";
 choices[36][3] = "Las alternativas b) y c) son correctas";
 answers[36] = choices[36][1];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[37]= "38)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[37]= new Array();
 choices[37][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[37][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[37][2] = "Las Inspecciones Generales de los Servicios";
 choices[37][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[37] = choices[37][1];
 units[37] = "75";
 comments[37] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la respuesta falsa:";
 choices[38]= new Array();
 choices[38][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[38][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[38][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[38][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[38] = choices[38][3];
 units[38] = "5";
 comments[38] = "Id Pregunta: 281. UNION EUROPEA";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[39]= new Array();
 choices[39][0] = "El Presidente del Senado.";
 choices[39][1] = "El Defensor del Pueblo.";
 choices[39][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[39][3] = "El Presidente del Gobierno.";
 answers[39] = choices[39][2];
 units[39] = "1";
 comments[39] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[40]= "41)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[40]= new Array();
 choices[40][0] = "SMB3";
 choices[40][1] = "AFP";
 choices[40][2] = "NFS";
 choices[40][3] = "FTP";
 answers[40] = choices[40][0];
 units[40] = "59";
 comments[40] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[41]= new Array();
 choices[41][0] = "CVS";
 choices[41][1] = "SVN";
 choices[41][2] = "Team Foundation Server";
 choices[41][3] = "Apache Tomcat";
 answers[41] = choices[41][3];
 units[41] = "92";
 comments[41] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[42][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[42][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[42][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[42] = choices[42][2];
 units[42] = "1";
 comments[42] = "Id Pregunta: 237. CONSTITUCION1978";


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[43]= new Array();
 choices[43][0] = "Al Consejo Europeo.";
 choices[43][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[43][2] = "A la Comisi&oacute;n Europea.";
 choices[43][3] = "Al Parlamento Europeo.";
 answers[43] = choices[43][2];
 units[43] = "5";
 comments[43] = "Id Pregunta: 294. UNION EUROPEA";


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[44]= "45)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[44]= new Array();
 choices[44][0] = "Las sociedades mercantiles estatales.";
 choices[44][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[44][2] = "Las respuestas a) y b) son correctas.";
 choices[44][3] = "Las respuestas a) y b) no son correctas.";
 answers[44] = choices[44][2];
 units[44] = "10";
 comments[44] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[45]= "46)  La sede del Parlamento Europeo se encuentra en:";
 choices[45]= new Array();
 choices[45][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[45][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[45][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[45][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[45] = choices[45][1];
 units[45] = "5";
 comments[45] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[46]= "47)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[46]= new Array();
 choices[46][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[46][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[46][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[46][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[46] = choices[46][1];
 units[46] = "5";
 comments[46] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[47]= "48)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[47]= new Array();
 choices[47][0] = "Seguridad Social y AEAT";
 choices[47][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[47][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[47][3] = "Todos los anteriores";
 answers[47] = choices[47][3];
 units[47] = "19";
 comments[47] = "Id Pregunta: 594. Estrategia TIC";


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[48]= new Array();
 choices[48][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[48][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[48][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[48][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[48] = choices[48][1];
 units[48] = "86";
 comments[48] = "Id Pregunta: 72. AGE A1 2015";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[49]= "50)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[49]= new Array();
 choices[49][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[49][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[49][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[49][3] = "Todos los anteriores";
 answers[49] = choices[49][3];
 units[49] = "19";
 comments[49] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[50]= "51)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[50]= new Array();
 choices[50][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[50][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[50][2] = "el Ministerio del Interior";
 choices[50][3] = "la Administraci&oacute;n General del Estado";
 answers[50] = choices[50][0];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 802. Ley 40/2015";


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[51]= "52)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[51]= new Array();
 choices[51][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[51][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[51][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[51][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[51] = choices[51][2];
 units[51] = "10";
 comments[51] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[52]= "53)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[52]= new Array();
 choices[52][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[52][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[52][2] = "el Subdirector General que el Delegado designe";
 choices[52][3] = "el Secretario de Estado";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[53]= "54)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[53]= new Array();
 choices[53][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[53][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[53][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[53][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[53] = choices[53][2];
 units[53] = "22";
 comments[53] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[54]= "55)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[54]= new Array();
 choices[54][0] = "Se definen iteraciones";
 choices[54][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[54][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[54][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[54] = choices[54][1];
 units[54] = "34, 84";
 comments[54] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[55]= new Array();
 choices[55][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[55][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[55][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[55][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[55] = choices[55][0];
 units[55] = "14";
 comments[55] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[56]= new Array();
 choices[56][0] = "las Cortes generales.";
 choices[56][1] = "los partidos pol&iacute;ticos.";
 choices[56][2] = "los sindicatos.";
 choices[56][3] = "las Comunidades Aut&oacute;nomas.";
 answers[56] = choices[56][1];
 units[56] = "1";
 comments[56] = "Id Pregunta: 225. CONSTITUCION1978";


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[57]= "58)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[57]= new Array();
 choices[57][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[57][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[57][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[57][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[57] = choices[57][1];
 units[57] = "19";
 comments[57] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[58]= "59)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[58]= new Array();
 choices[58][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[58][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[58][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[58][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[58] = choices[58][2];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[59]= "60)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[59]= new Array();
 choices[59][0] = "Almacenamiento orientado a columnas";
 choices[59][1] = "Framework MapReduce";
 choices[59][2] = "OLTP";
 choices[59][3] = "Bases de datos clave-valor";
 answers[59] = choices[59][2];
 units[59] = "73";
 comments[59] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[60]= "61)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[60]= new Array();
 choices[60][0] = "Un plan de igualdad.";
 choices[60][1] = "Un informe de impacto de g&eacute;nero.";
 choices[60][2] = "Un programa de igualdad.";
 choices[60][3] = "Todas son correctas.";
 answers[60] = choices[60][1];
 units[60] = "14";
 comments[60] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[61]= "62)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[61]= new Array();
 choices[61][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[61][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[61][2] = "a y b son correctas";
 choices[61][3] = "a y b son incorrectas";
 answers[61] = choices[61][0];
 units[61] = "7";
 comments[61] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[62]= new Array();
 choices[62][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[62][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[62][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[62][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[62] = choices[62][2];
 units[62] = "53";
 comments[62] = "Id Pregunta: 65. AGE A1 2015";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[63]= new Array();
 choices[63][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[63][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[63][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[63][3] = "La tasa de desempleo ronda el 20%";
 answers[63] = choices[63][2];
 units[63] = "12";
 comments[63] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[64]= "65)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[64]= new Array();
 choices[64][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[64][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[64][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[64][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[64] = choices[64][3];
 units[64] = "12";
 comments[64] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[65]= new Array();
 choices[65][0] = "Data Mining (miner&iacute;a de datos)";
 choices[65][1] = "Business Intelligence (inteligencia de negocio)";
 choices[65][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[65][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[65] = choices[65][1];
 units[65] = "72";
 comments[65] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[66]= new Array();
 choices[66][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[66][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[66][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[66][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[66] = choices[66][3];
 units[66] = "34, 84";
 comments[66] = "Id Pregunta: 722. Metodologias &aacute;giles";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[67]= "68)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[67]= new Array();
 choices[67][0] = "los Ministros y los Secretarios de Estado";
 choices[67][1] = "los Subsecretarios y Secretarios generales";
 choices[67][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[67][3] = "los Directores generales";
 answers[67] = choices[67][2];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[68]= "69)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[68]= new Array();
 choices[68][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[68][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[68][2] = "el sector p&uacute;blico institucional";
 choices[68][3] = "el sector privado corporativo";
 answers[68] = choices[68][3];
 units[68] = "7";
 comments[68] = "Id Pregunta: 513. LEY 39/2015";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[69]= new Array();
 choices[69][0] = "Anual";
 choices[69][1] = "Mensual";
 choices[69][2] = "Semestral";
 choices[69][3] = "Trimestral";
 answers[69] = choices[69][3];
 units[69] = "15";
 comments[69] = "Id Pregunta: 119. ";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "De la C&aacute;mara respectiva.";
 choices[70][1] = "Del Rey.";
 choices[70][2] = "Del Tribunal Constitucional.";
 choices[70][3] = "Del Tribunal Supremo.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[71]= "72)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[71]= new Array();
 choices[71][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[71][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[71][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[71][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[71] = choices[71][2];
 units[71] = "22";
 comments[71] = "Id Pregunta: 705. &Eacute;tica p&uacute;blica";


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[72]= "73)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[72]= new Array();
 choices[72][0] = "En sentencias switch para alterar el control de flujo.";
 choices[72][1] = "Para manejar excepciones.";
 choices[72][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[72][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[72] = choices[72][1];
 units[72] = "64";
 comments[72] = "Id Pregunta: 624. Junta de Extremadura A1 2015";


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[73]= new Array();
 choices[73][0] = "Establecer redes de telecomunicaciones continentales";
 choices[73][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[73][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[73][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[73] = choices[73][0];
 units[73] = "17";
 comments[73] = "Id Pregunta: 552. Mercado &Uacute;nico Digital";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[74]= "75)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[74]= new Array();
 choices[74][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[74][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[74][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[74][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[74] = choices[74][1];
 units[74] = "14";
 comments[74] = "Id Pregunta: 676. Dependencia";


