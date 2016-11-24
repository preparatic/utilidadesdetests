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

//  Id pregunta: 10111 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[0]= new Array();
 choices[0][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[0][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[0][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[0][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[0] = choices[0][0];
 units[0] = "15";
 comments[0] = "Id Pregunta: 10111. ";


//  Id pregunta: 10158 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[1]= new Array();
 choices[1][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[1][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[1][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[1][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[1] = choices[1][1];
 units[1] = "7";
 comments[1] = "Id Pregunta: 10158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 10407 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[2]= new Array();
 choices[2][0] = "Art&iacute;culo 14 CE.";
 choices[2][1] = "Art&iacute;culo 9.2 CE.";
 choices[2][2] = "Art&iacute;culo 9.1 CE.";
 choices[2][3] = "Art&iacute;culo 13 CE.";
 answers[2] = choices[2][2];
 units[2] = "14";
 comments[2] = "Id Pregunta: 10407. POLITICAS DE IGUALDAD";


//  Id pregunta: 10022 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[3]= new Array();
 choices[3][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[3][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[3][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[3][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[3] = choices[3][1];
 units[3] = "26";
 comments[3] = "Id Pregunta: 10022. AGE A1 2015";


//  Id pregunta: 10202 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[4]= new Array();
 choices[4][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[4][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[4][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[4][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[4] = choices[4][0];
 units[4] = "1";
 comments[4] = "Id Pregunta: 10202. CONSTITUCION1978";


//  Id pregunta: 10484 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[5]= new Array();
 choices[5][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[5][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[5][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[5][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[5] = choices[5][2];
 units[5] = "10";
 comments[5] = "Id Pregunta: 10484. PRESUPUESTOS GENERALES";


//  Id pregunta: 10007 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[6]= new Array();
 choices[6][0] = "Nivel 7 - MPLS.";
 choices[6][1] = "Nivel 3 - RARP.";
 choices[6][2] = "Nivel 2 - HDLC.";
 choices[6][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[6] = choices[6][2];
 units[6] = "105";
 comments[6] = "Id Pregunta: 10007. AGE A1 2015";


//  Id pregunta: 10539 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[7]= new Array();
 choices[7][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[7][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[7][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[7][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[7] = choices[7][1];
 units[7] = "7";
 comments[7] = "Id Pregunta: 10539. LEY 39/2015";


//  Id pregunta: 10424 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[8]= new Array();
 choices[8][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[8][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[8][2] = "Ninguna es correcta.";
 choices[8][3] = "A y B son correctas.";
 answers[8] = choices[8][0];
 units[8] = "14";
 comments[8] = "Id Pregunta: 10424. POLITICAS DE IGUALDAD";


//  Id pregunta: 10632 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[9]= new Array();
 choices[9][0] = "Monol&iacute;tico.";
 choices[9][1] = "Estratificado.";
 choices[9][2] = "Cliente/servidor.";
 choices[9][3] = "Orientado a objetos.";
 answers[9] = choices[9][3];
 units[9] = "56";
 comments[9] = "Id Pregunta: 10632. Junta de Extremadura A1 2015";


//  Id pregunta: 10234 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[10]= new Array();
 choices[10][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[10][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[10][2] = "Al Congreso de los Diputados.";
 choices[10][3] = "Al Gobierno.";
 answers[10] = choices[10][0];
 units[10] = "1";
 comments[10] = "Id Pregunta: 10234. CONSTITUCION1978";


//  Id pregunta: 10627 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[11]= new Array();
 choices[11][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[11][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[11][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[11][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[11] = choices[11][0];
 units[11] = "46";
 comments[11] = "Id Pregunta: 10627. Junta de Extremadura A1 2015";


//  Id pregunta: 10319 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[12]= new Array();
 choices[12][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[12][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[12][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[12][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[12] = choices[12][0];
 units[12] = "5";
 comments[12] = "Id Pregunta: 10319. UNION EUROPEA";


//  Id pregunta: 10466 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[13]= new Array();
 choices[13][0] = "Con el a&ntilde;o anterior.";
 choices[13][1] = "Con los tres a&ntilde;os anteriores.";
 choices[13][2] = "Con el a&ntilde;o natural.";
 choices[13][3] = "Con los dos a&ntilde;os anteriores.";
 answers[13] = choices[13][2];
 units[13] = "10";
 comments[13] = "Id Pregunta: 10466. PRESUPUESTOS GENERALES";


//  Id pregunta: 10176 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[14]= new Array();
 choices[14][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[14][1] = "Solamente el Congreso.";
 choices[14][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[14][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[14] = choices[14][0];
 units[14] = "1";
 comments[14] = "Id Pregunta: 10176. CONSTITUCION1978";


//  Id pregunta: 10625 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[15]= new Array();
 choices[15][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[15][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[15][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[15][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[15] = choices[15][2];
 units[15] = "89";
 comments[15] = "Id Pregunta: 10625. Junta de Extremadura A1 2015";


//  Id pregunta: 10268 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[16]= new Array();
 choices[16][0] = "Cuatro.";
 choices[16][1] = "Una.";
 choices[16][2] = "Cinco.";
 choices[16][3] = "Nueve.";
 answers[16] = choices[16][2];
 units[16] = "1";
 comments[16] = "Id Pregunta: 10268. CONSTITUCION1978";


//  Id pregunta: 10021 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[17]= new Array();
 choices[17][0] = "Gesti&oacute;n de la disponibilidad";
 choices[17][1] = "Gesti&oacute;n de la demanda";
 choices[17][2] = "Gesti&oacute;n de entregas";
 choices[17][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[17] = choices[17][0];
 units[17] = "101";
 comments[17] = "Id Pregunta: 10021. AGE A1 2015";


//  Id pregunta: 10188 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[18]= new Array();
 choices[18][0] = "No, en ning&uacute;n caso.";
 choices[18][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[18][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[18][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[18] = choices[18][3];
 units[18] = "1";
 comments[18] = "Id Pregunta: 10188. CONSTITUCION1978";


//  Id pregunta: 10654 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[19]= new Array();
 choices[19][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[19][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[19][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[19][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[19] = choices[19][0];
 units[19] = "73";
 comments[19] = "Id Pregunta: 10654. ";


//  Id pregunta: 10153 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[20]= new Array();
 choices[20][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[20][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[20][2] = "a y b son correctas";
 choices[20][3] = "a y b son incorrectas";
 answers[20] = choices[20][0];
 units[20] = "7";
 comments[20] = "Id Pregunta: 10153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 10451 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[21]= new Array();
 choices[21][0] = "Los cr&eacute;ditos";
 choices[21][1] = "Las partidas presupuestarias";
 choices[21][2] = "Los derechos";
 choices[21][3] = "Las obligaciones";
 answers[21] = choices[21][2];
 units[21] = "10";
 comments[21] = "Id Pregunta: 10451. PRESUPUESTOS GENERALES";


//  Id pregunta: 10534 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[22]= new Array();
 choices[22][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[22][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[22][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[22][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[22] = choices[22][2];
 units[22] = "7";
 comments[22] = "Id Pregunta: 10534. LEY 39/2015";


//  Id pregunta: 10179 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[23]= new Array();
 choices[23][0] = "Una ley orginaria.";
 choices[23][1] = "Una ley org&aacute;nica.";
 choices[23][2] = "Una ley de bases.";
 choices[23][3] = "Una ley de transferencia.";
 answers[23] = choices[23][1];
 units[23] = "1";
 comments[23] = "Id Pregunta: 10179. CONSTITUCION1978";


//  Id pregunta: 10554 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[24]= new Array();
 choices[24][0] = "El BCE";
 choices[24][1] = "El Parlamento";
 choices[24][2] = "El Consejo";
 choices[24][3] = "La Comisi&oacute;n";
 answers[24] = choices[24][3];
 units[24] = "17";
 comments[24] = "Id Pregunta: 10554. Mercado &Uacute;nico Digital";


//  Id pregunta: 10055 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  WS-Security contiene especificaciones sobre:";
 choices[25]= new Array();
 choices[25][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[25][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[25][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[25][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[25] = choices[25][1];
 units[25] = "119";
 comments[25] = "Id Pregunta: 10055. AGE A1 2015";


//  Id pregunta: 10441 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[26]= new Array();
 choices[26][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[26][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[26][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[26][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[26] = choices[26][1];
 units[26] = "43";
 comments[26] = "Id Pregunta: 10441. SERVICIOS COMUNES";


//  Id pregunta: 10591 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[27]= new Array();
 choices[27][0] = "La CETIC";
 choices[27][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[27][2] = "La DTIC";
 choices[27][3] = "El MHFP";
 answers[27] = choices[27][0];
 units[27] = "19";
 comments[27] = "Id Pregunta: 10591. Estrategia TIC";


//  Id pregunta: 10042 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[28]= new Array();
 choices[28][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[28][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[28][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[28][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[28] = choices[28][3];
 units[28] = "86";
 comments[28] = "Id Pregunta: 10042. AGE A1 2015";


//  Id pregunta: 10509 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[29]= new Array();
 choices[29][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[29][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[29][2] = "Absoluta frente a cualquier otro gasto.";
 choices[29][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[29] = choices[29][2];
 units[29] = "10";
 comments[29] = "Id Pregunta: 10509. PRESUPUESTOS GENERALES";


//  Id pregunta: 10571 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[30]= new Array();
 choices[30][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[30][1] = "Entrada en la Uni&oacute;n Europea";
 choices[30][2] = "Pactos de la Moncloa";
 choices[30][3] = "Ingreso en la ONU";
 answers[30] = choices[30][3];
 units[30] = "12";
 comments[30] = "Id Pregunta: 10571. Modelo econ&oacute;mico";


//  Id pregunta: 10660 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[31]= new Array();
 choices[31][0] = "Avro";
 choices[31][1] = "Sqoop";
 choices[31][2] = "UIMA";
 choices[31][3] = "Jaql";
 answers[31] = choices[31][1];
 units[31] = "73";
 comments[31] = "Id Pregunta: 10660. ";


//  Id pregunta: 10353 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[32]= new Array();
 choices[32][0] = "El Parlamento Europeo.";
 choices[32][1] = "Todas las respuestas son correctas.";
 choices[32][2] = "La Comisi&oacute;n Europea.";
 choices[32][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[32] = choices[32][1];
 units[32] = "5";
 comments[32] = "Id Pregunta: 10353. UNION EUROPEA";


//  Id pregunta: 10589 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  Son servicios declarados compartidos:";
 choices[33]= new Array();
 choices[33][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[33][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[33][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[33][3] = "Todos los anteriores";
 answers[33] = choices[33][3];
 units[33] = "19";
 comments[33] = "Id Pregunta: 10589. Estrategia TIC";


//  Id pregunta: 10519 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[34]= new Array();
 choices[34][0] = "un art&iacute;culo";
 choices[34][1] = "dos art&iacute;culos";
 choices[34][2] = "tres art&iacute;culos";
 choices[34][3] = "cuatro art&iacute;culos";
 answers[34] = choices[34][1];
 units[34] = "7";
 comments[34] = "Id Pregunta: 10519. LEY 39/2015";


//  Id pregunta: 10578 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[35]= new Array();
 choices[35][0] = "Fue elaborada y aprobada por la CETIC";
 choices[35][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[35][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[35][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[35] = choices[35][1];
 units[35] = "19";
 comments[35] = "Id Pregunta: 10578. Estrategia TIC";


//  Id pregunta: 10481 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[36]= new Array();
 choices[36][0] = "Cuatro millones de euros.";
 choices[36][1] = "Seis millones de euros.";
 choices[36][2] = "Siete millones de euros.";
 choices[36][3] = "Cinco millones de euros.";
 answers[36] = choices[36][1];
 units[36] = "10";
 comments[36] = "Id Pregunta: 10481. PRESUPUESTOS GENERALES";


//  Id pregunta: 10475 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Anualmente.";
 choices[37][1] = "Ninguna de las respuestas es correcta.";
 choices[37][2] = "Trimestralmente.";
 choices[37][3] = "Semestralmente.";
 answers[37] = choices[37][0];
 units[37] = "10";
 comments[37] = "Id Pregunta: 10475. PRESUPUESTOS GENERALES";


//  Id pregunta: 10390 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[38]= new Array();
 choices[38][0] = "El Consejo Nacional de la Mujer.";
 choices[38][1] = "El Consejo de la Mujer.";
 choices[38][2] = "El Instituto de la Mujer.";
 choices[38][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[38] = choices[38][3];
 units[38] = "14";
 comments[38] = "Id Pregunta: 10390. POLITICAS DE IGUALDAD";


//  Id pregunta: 10033 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[39]= new Array();
 choices[39][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[39][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[39][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[39][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[39] = choices[39][1];
 units[39] = "63";
 comments[39] = "Id Pregunta: 10033. AGE A1 2015";


//  Id pregunta: 10227 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[40]= new Array();
 choices[40][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[40][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[40][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[40][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[40] = choices[40][3];
 units[40] = "1";
 comments[40] = "Id Pregunta: 10227. CONSTITUCION1978";


//  Id pregunta: 10017 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[41]= new Array();
 choices[41][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[41][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[41][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[41][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[41] = choices[41][3];
 units[41] = "44";
 comments[41] = "Id Pregunta: 10017. AGE A1 2015";


//  Id pregunta: 10038 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[42]= new Array();
 choices[42][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[42][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[42][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[42][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[42] = choices[42][3];
 units[42] = "62";
 comments[42] = "Id Pregunta: 10038. AGE A1 2015";


//  Id pregunta: 10333 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[43]= new Array();
 choices[43][0] = "Las instituciones comunitarias.";
 choices[43][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[43][2] = "Los Estados miembros.";
 choices[43][3] = "Los nacionales de los Estados miembros.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 10333. UNION EUROPEA";


//  Id pregunta: 10516 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  Las Universidades p&uacute;blicas:";
 choices[44]= new Array();
 choices[44][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[44][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[44][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[44][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[44] = choices[44][1];
 units[44] = "7";
 comments[44] = "Id Pregunta: 10516. LEY 39/2015";


//  Id pregunta: 10386 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[45]= new Array();
 choices[45][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[45][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[45][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[45][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[45] = choices[45][0];
 units[45] = "14";
 comments[45] = "Id Pregunta: 10386. POLITICAS DE IGUALDAD";


//  Id pregunta: 10426 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[46]= new Array();
 choices[46][0] = "Un plan de igualdad.";
 choices[46][1] = "Un informe de impacto de g&eacute;nero.";
 choices[46][2] = "Un programa de igualdad.";
 choices[46][3] = "Todas son correctas.";
 answers[46] = choices[46][1];
 units[46] = "14";
 comments[46] = "Id Pregunta: 10426. POLITICAS DE IGUALDAD";


//  Id pregunta: 10505 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[47]= new Array();
 choices[47][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[47][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[47][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[47][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[47] = choices[47][3];
 units[47] = "10";
 comments[47] = "Id Pregunta: 10505. PRESUPUESTOS GENERALES";


//  Id pregunta: 10141 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  El recurso de alzada puede interponerse:";
 choices[48]= new Array();
 choices[48][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[48][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[48][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[48][3] = "Ante el Defensor del Pueblo";
 answers[48] = choices[48][1];
 units[48] = "8";
 comments[48] = "Id Pregunta: 10141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 10198 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[49]= new Array();
 choices[49][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[49][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[49][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[49][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[49] = choices[49][3];
 units[49] = "1";
 comments[49] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10624 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[50]= new Array();
 choices[50][0] = "En sentencias switch para alterar el control de flujo.";
 choices[50][1] = "Para manejar excepciones.";
 choices[50][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[50][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[50] = choices[50][1];
 units[50] = "64";
 comments[50] = "Id Pregunta: 10624. Junta de Extremadura A1 2015";


//  Id pregunta: 10492 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[51]= new Array();
 choices[51][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[51][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[51][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[51][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[51] = choices[51][2];
 units[51] = "10";
 comments[51] = "Id Pregunta: 10492. PRESUPUESTOS GENERALES";


//  Id pregunta: 10305 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[52]= new Array();
 choices[52][0] = "Estrasburgo.";
 choices[52][1] = "Bruselas.";
 choices[52][2] = "Luxemburgo.";
 choices[52][3] = "Par&iacute;s.";
 answers[52] = choices[52][1];
 units[52] = "5";
 comments[52] = "Id Pregunta: 10305. UNION EUROPEA";


//  Id pregunta: 10476 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[53]= new Array();
 choices[53][0] = "Al Gobierno.";
 choices[53][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[53][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[53][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[53] = choices[53][2];
 units[53] = "10";
 comments[53] = "Id Pregunta: 10476. PRESUPUESTOS GENERALES";


//  Id pregunta: 10631 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[54]= new Array();
 choices[54][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[54][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[54][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[54][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[54] = choices[54][2];
 units[54] = "50";
 comments[54] = "Id Pregunta: 10631. Junta de Extremadura A1 2015";


//  Id pregunta: 10133 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[55]= new Array();
 choices[55][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[55][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[55][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[55][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[55] = choices[55][1];
 units[55] = "12";
 comments[55] = "Id Pregunta: 10133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10144 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  Sobre el recurso de reposici&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[56][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[56][2] = "Ha desaparecido en la Ley 39/2015";
 choices[56][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[56] = choices[56][0];
 units[56] = "8";
 comments[56] = "Id Pregunta: 10144. Ley 39/2015, Art&iacute;culo 123";


//  Id pregunta: 10293 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[57]= new Array();
 choices[57][0] = "Estrasburgo.";
 choices[57][1] = "Bruselas.";
 choices[57][2] = "Luxemburgo.";
 choices[57][3] = "Holanda.";
 answers[57] = choices[57][0];
 units[57] = "5";
 comments[57] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10473 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[58]= new Array();
 choices[58][0] = "Ley 50/1997, del Gobierno.";
 choices[58][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[58][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[58][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[58] = choices[58][1];
 units[58] = "10";
 comments[58] = "Id Pregunta: 10473. PRESUPUESTOS GENERALES";


//  Id pregunta: 10411 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[59]= new Array();
 choices[59][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[59][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[59][2] = "Ninguna es correcta.";
 choices[59][3] = "A y B son correctas.";
 answers[59] = choices[59][1];
 units[59] = "14";
 comments[59] = "Id Pregunta: 10411. POLITICAS DE IGUALDAD";


//  Id pregunta: 10443 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[60]= new Array();
 choices[60][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[60][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[60][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[60][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[60] = choices[60][1];
 units[60] = "43";
 comments[60] = "Id Pregunta: 10443. SERVICIOS COMUNES";


//  Id pregunta: 10306 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  Componen la Comisi&oacute;n Europea:";
 choices[61]= new Array();
 choices[61][0] = "Un Comisario por cada Estado miembro.";
 choices[61][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[61][2] = "Dos Comisarios por cada Estado miembro.";
 choices[61][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[61] = choices[61][0];
 units[61] = "5";
 comments[61] = "Id Pregunta: 10306. UNION EUROPEA";


//  Id pregunta: 10367 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[62]= new Array();
 choices[62][0] = "Presentar la moci&oacute;n de censura.";
 choices[62][1] = "Presidir las sesiones del Parlamento.";
 choices[62][2] = "Organizar la Secretar&iacute;a General.";
 choices[62][3] = "Preparar las actividades de las Comisiones.";
 answers[62] = choices[62][1];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10367. UNION EUROPEA";


//  Id pregunta: 10334 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[63]= new Array();
 choices[63][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[63][1] = "Ninguna de las respuestas es correcta.";
 choices[63][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[63][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[63] = choices[63][0];
 units[63] = "5";
 comments[63] = "Id Pregunta: 10334. UNION EUROPEA";


//  Id pregunta: 10398 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[64]= new Array();
 choices[64][0] = "Art. 13, L.O.3/2007.";
 choices[64][1] = "Art. 14, L.O.3/2007.";
 choices[64][2] = "Art. 11, L.O.3/2007.";
 choices[64][3] = "Ninguna es correcta.";
 answers[64] = choices[64][2];
 units[64] = "14";
 comments[64] = "Id Pregunta: 10398. POLITICAS DE IGUALDAD";


//  Id pregunta: 10552 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[65]= new Array();
 choices[65][0] = "Establecer redes de telecomunicaciones continentales";
 choices[65][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[65][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[65][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[65] = choices[65][0];
 units[65] = "17";
 comments[65] = "Id Pregunta: 10552. Mercado &Uacute;nico Digital";


//  Id pregunta: 10479 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[66]= new Array();
 choices[66][0] = "A nivel de art&iacute;culo.";
 choices[66][1] = "A nivel de cap&iacute;tulo.";
 choices[66][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[66][3] = "A nivel de concepto.";
 answers[66] = choices[66][2];
 units[66] = "10";
 comments[66] = "Id Pregunta: 10479. PRESUPUESTOS GENERALES";


//  Id pregunta: 10242 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[67]= new Array();
 choices[67][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[67][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[67][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[67][3] = "Sancionar y publicar las leyes.";
 answers[67] = choices[67][2];
 units[67] = "1";
 comments[67] = "Id Pregunta: 10242. CONSTITUCION1978";


//  Id pregunta: 10458 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[68]= new Array();
 choices[68][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[68][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[68][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[68][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[68] = choices[68][3];
 units[68] = "10";
 comments[68] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10121 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[69]= new Array();
 choices[69][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[69][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[69][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[69][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[69] = choices[69][2];
 units[69] = "22";
 comments[69] = "Id Pregunta: 10121. ";


//  Id pregunta: 10199 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[70]= new Array();
 choices[70][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[70][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[70][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[70][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 10199. CONSTITUCION1978";


//  Id pregunta: 10419 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[71]= new Array();
 choices[71][0] = "P&uacute;blica.";
 choices[71][1] = "Privada.";
 choices[71][2] = "Ambas son correctas.";
 choices[71][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[71] = choices[71][0];
 units[71] = "14";
 comments[71] = "Id Pregunta: 10419. POLITICAS DE IGUALDAD";


//  Id pregunta: 10396 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[72]= new Array();
 choices[72][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[72][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[72][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[72][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[72] = choices[72][0];
 units[72] = "14";
 comments[72] = "Id Pregunta: 10396. POLITICAS DE IGUALDAD";


//  Id pregunta: 10264 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[73]= new Array();
 choices[73][0] = "Veinte.";
 choices[73][1] = "Quince.";
 choices[73][2] = "Diez.";
 choices[73][3] = "Doce.";
 answers[73] = choices[73][1];
 units[73] = "1";
 comments[73] = "Id Pregunta: 10264. CONSTITUCION1978";


//  Id pregunta: 10072 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[74]= new Array();
 choices[74][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[74][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[74][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[74][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[74] = choices[74][1];
 units[74] = "86";
 comments[74] = "Id Pregunta: 10072. AGE A1 2015";


//  Id pregunta: 10215 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[75]= new Array();
 choices[75][0] = "Publicidad.";
 choices[75][1] = "Constituci&oacute;n.";
 choices[75][2] = "Legalidad.";
 choices[75][3] = "Creaci&oacute;n.";
 answers[75] = choices[75][0];
 units[75] = "1";
 comments[75] = "Id Pregunta: 10215. CONSTITUCION1978";


//  Id pregunta: 10343 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[76]= new Array();
 choices[76][0] = "23";
 choices[76][1] = "20";
 choices[76][2] = "14";
 choices[76][3] = "18";
 answers[76] = choices[76][1];
 units[76] = "5";
 comments[76] = "Id Pregunta: 10343. UNION EUROPEA";


//  Id pregunta: 10064 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[77]= new Array();
 choices[77][0] = "Windows Phone";
 choices[77][1] = "Blackberry";
 choices[77][2] = "iOS";
 choices[77][3] = "Android";
 answers[77] = choices[77][3];
 units[77] = "59";
 comments[77] = "Id Pregunta: 10064. AGE A1 2015";


//  Id pregunta: 10651 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[78]= new Array();
 choices[78][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[78][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[78][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[78][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[78] = choices[78][3];
 units[78] = "120";
 comments[78] = "Id Pregunta: 10651. Junta de Extremadura A1 2015";


//  Id pregunta: 10345 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[79]= new Array();
 choices[79][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[79][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[79][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[79][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[79] = choices[79][3];
 units[79] = "5";
 comments[79] = "Id Pregunta: 10345. UNION EUROPEA";


//  Id pregunta: 10598 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[80]= new Array();
 choices[80][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[80][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[80][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[80][3] = "Todas las respuestas anteriores son correctas.";
 answers[80] = choices[80][0];
 units[80] = "45";
 comments[80] = "Id Pregunta: 10598. Junta de Extremadura A1 2015";


//  Id pregunta: 10377 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[81]= new Array();
 choices[81][0] = "Tener una estructura institucional.";
 choices[81][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[81][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[81][3] = "Todas las respuestas son correctas.";
 answers[81] = choices[81][3];
 units[81] = "5";
 comments[81] = "Id Pregunta: 10377. UNION EUROPEA";


//  Id pregunta: 10380 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[82]= new Array();
 choices[82][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[82][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[82][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[82][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[82] = choices[82][3];
 units[82] = "14";
 comments[82] = "Id Pregunta: 10380. POLITICAS DE IGUALDAD";


//  Id pregunta: 10088 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[83]= new Array();
 choices[83][0] = "Diagrama de clases";
 choices[83][1] = "Diagrama de componentes";
 choices[83][2] = "Diagrama de estructura";
 choices[83][3] = "Diagrama de paquetes";
 answers[83] = choices[83][0];
 units[83] = "91";
 comments[83] = "Id Pregunta: 10088. AGE A1 2015";


//  Id pregunta: 10201 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[84]= new Array();
 choices[84][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[84][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[84][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[84][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[84] = choices[84][2];
 units[84] = "1";
 comments[84] = "Id Pregunta: 10201. CONSTITUCION1978";


//  Id pregunta: 10238 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[85]= new Array();
 choices[85][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[85][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[85][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[85][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[85] = choices[85][1];
 units[85] = "1";
 comments[85] = "Id Pregunta: 10238. CONSTITUCION1978";


//  Id pregunta: 10246 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[86]= new Array();
 choices[86][0] = "Dos Cap&iacute;tulos.";
 choices[86][1] = "Tres Cap&iacute;tulos.";
 choices[86][2] = "Un Cap&iacute;tulo.";
 choices[86][3] = "Cuatro Cap&iacute;tulos.";
 answers[86] = choices[86][1];
 units[86] = "1";
 comments[86] = "Id Pregunta: 10246. CONSTITUCION1978";


//  Id pregunta: 10171 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[87]= new Array();
 choices[87][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[87][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[87][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[87][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[87] = choices[87][3];
 units[87] = "19";
 comments[87] = "Id Pregunta: 10171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 10664 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[88]= new Array();
 choices[88][0] = "Siempre en formato electr&oacute;nico.";
 choices[88][1] = "Siempre en formato papel.";
 choices[88][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[88][3] = "La ley no regula el formato del expediente.";
 answers[88] = choices[88][0];
 units[88] = "7";
 comments[88] = "Id Pregunta: 10664. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 10134 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[89]= new Array();
 choices[89][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[89][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[89][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[89][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[89] = choices[89][2];
 units[89] = "12";
 comments[89] = "Id Pregunta: 10134. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10173 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[90]= new Array();
 choices[90][0] = "absoluta de las Cortes Generales.";
 choices[90][1] = "absoluta del Congreso de los Diputados.";
 choices[90][2] = "simple de las Cortes Generales.";
 choices[90][3] = "simple del Congreso de los Diputados.";
 answers[90] = choices[90][3];
 units[90] = "1";
 comments[90] = "Id Pregunta: 10173. CONSTITUCION1978";


//  Id pregunta: 10123 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[91]= new Array();
 choices[91][0] = "Un representante de la Administraci&oacute;n local.";
 choices[91][1] = "Un representante del Tribunal de Cuentas.";
 choices[91][2] = "Un representante del Defensor del Pueblo.";
 choices[91][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[91] = choices[91][0];
 units[91] = "22";
 comments[91] = "Id Pregunta: 10123. ";


//  Id pregunta: 10439 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[92]= new Array();
 choices[92][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[92][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[92][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[92][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[92] = choices[92][1];
 units[92] = "43";
 comments[92] = "Id Pregunta: 10439. SERVICIOS COMUNES";


//  Id pregunta: 10556 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[93]= new Array();
 choices[93][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[93][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[93][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[93][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[93] = choices[93][2];
 units[93] = "17";
 comments[93] = "Id Pregunta: 10556. Mercado &Uacute;nico Digital";


//  Id pregunta: 10310 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[94]= new Array();
 choices[94][0] = "La Comisi&oacute;n Europea.";
 choices[94][1] = "El Consejo Europeo.";
 choices[94][2] = "El Consejo de Europa.";
 choices[94][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[94] = choices[94][0];
 units[94] = "5";
 comments[94] = "Id Pregunta: 10310. UNION EUROPEA";


//  Id pregunta: 10676 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[95]= new Array();
 choices[95][0] = "El servicio de teleasistencia.";
 choices[95][1] = "El servicio de ayuda a domicilio.";
 choices[95][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[95][3] = "Todas las anteriores son correctas.";
 answers[95] = choices[95][3];
 units[95] = "14";
 comments[95] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10086 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[96]= new Array();
 choices[96][0] = "Un a&ntilde;o prorrogable";
 choices[96][1] = "Dos a&ntilde;os no prorrogables";
 choices[96][2] = "Un a&ntilde;o no prorrogable";
 choices[96][3] = "Dos a&ntilde;os prorrogables";
 answers[96] = choices[96][2];
 units[96] = "37";
 comments[96] = "Id Pregunta: 10086. AGE A1 2015";


//  Id pregunta: 10249 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[97]= new Array();
 choices[97][0] = "Art&iacute;culo 16.2.";
 choices[97][1] = "Art&iacute;culo 17.1.";
 choices[97][2] = "Art&iacute;culo 18.1.";
 choices[97][3] = "Art&iacute;culo 18.2.";
 answers[97] = choices[97][0];
 units[97] = "1";
 comments[97] = "Id Pregunta: 10249. CONSTITUCION1978";


//  Id pregunta: 10076 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[98]= new Array();
 choices[98][0] = "Estrat&eacute;gico";
 choices[98][1] = "Operativo";
 choices[98][2] = "T&aacute;ctico";
 choices[98][3] = "Tecnol&oacute;gico";
 answers[98] = choices[98][0];
 units[98] = "36";
 comments[98] = "Id Pregunta: 10076. AGE A1 2015";


//  Id pregunta: 10204 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[99]= new Array();
 choices[99][0] = "Decretos Legislativos.";
 choices[99][1] = "Decretos-leyes.";
 choices[99][2] = "Leyes de bases.";
 choices[99][3] = "Reales Decretos del Consejo de Ministros.";
 answers[99] = choices[99][0];
 units[99] = "1";
 comments[99] = "Id Pregunta: 10204. CONSTITUCION1978";


