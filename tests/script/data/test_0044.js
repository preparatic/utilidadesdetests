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

//  Id pregunta: 10376 Año de creación de pregunta: 2016
 questions[0]= "1)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[0]= new Array();
 choices[0][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[0][1] = "Personas con nacionalidad europea.";
 choices[0][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[0][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[0] = choices[0][3];
 units[0] = "5";
 comments[0] = "Id Pregunta: 10376. UNION EUROPEA";


//  Id pregunta: 10576 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[1]= new Array();
 choices[1][0] = "PostgreSQL";
 choices[1][1] = "Datawarehouse";
 choices[1][2] = "Snowflake";
 choices[1][3] = "CouchDB";
 answers[1] = choices[1][0];
 units[1] = "61";
 comments[1] = "Id Pregunta: 10576. Tema 61. TAI 2016.";


//  Id pregunta: 10176 Año de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[2]= new Array();
 choices[2][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[2][1] = "Solamente el Congreso.";
 choices[2][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[2][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[2] = choices[2][0];
 units[2] = "1";
 comments[2] = "Id Pregunta: 10176. CONSTITUCION1978";


//  Id pregunta: 10000 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[3]= new Array();
 choices[3][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[3][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[3][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[3][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[3] = choices[3][0];
 units[3] = "26";
 comments[3] = "Id Pregunta: 10000. AGE A1 2015";


//  Id pregunta: 10503 Año de creación de pregunta: 2016
 questions[4]= "5)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[4]= new Array();
 choices[4][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[4][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[4][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[4][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[4] = choices[4][3];
 units[4] = "10";
 comments[4] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10536 Año de creación de pregunta: 2016
 questions[5]= "6)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[5]= new Array();
 choices[5][0] = "apud acta";
 choices[5][1] = "presencialmente";
 choices[5][2] = "electr&oacute;nicamente";
 choices[5][3] = "todas son correctas";
 answers[5] = choices[5][3];
 units[5] = "7";
 comments[5] = "Id Pregunta: 10536. LEY 39/2015";


//  Id pregunta: 10216 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[6]= new Array();
 choices[6][0] = "El Presidente del Gobierno.";
 choices[6][1] = "El Consejo de Ministros.";
 choices[6][2] = "40 Diputados.";
 choices[6][3] = "El Ministerio Fiscal.";
 answers[6] = choices[6][0];
 units[6] = "1";
 comments[6] = "Id Pregunta: 10216. CONSTITUCION1978";


//  Id pregunta: 10428 Año de creación de pregunta: 2016
 questions[7]= "8)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[7]= new Array();
 choices[7][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[7][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[7][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[7][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[7] = choices[7][2];
 units[7] = "14";
 comments[7] = "Id Pregunta: 10428. POLITICAS DE IGUALDAD";


//  Id pregunta: 10521 Año de creación de pregunta: 2016
 questions[8]= "9)  El sector p&uacute;blico institucional se integra por:";
 choices[8]= new Array();
 choices[8][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[8][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[8][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[8][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 10521. LEY 39/2015";


//  Id pregunta: 10421 Año de creación de pregunta: 2016
 questions[9]= "10)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[9]= new Array();
 choices[9][0] = "El acoso sexual.";
 choices[9][1] = "El acoso por raz&oacute;n del sexo.";
 choices[9][2] = "Ambas son correctas.";
 choices[9][3] = "A y B son incorrectas.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 10421. POLITICAS DE IGUALDAD";


//  Id pregunta: 10196 Año de creación de pregunta: 2016
 questions[10]= "11)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[10]= new Array();
 choices[10][0] = "Al Presidente del Gobierno.";
 choices[10][1] = "A las Cortes Generales";
 choices[10][2] = "A los electores.";
 choices[10][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[10] = choices[10][3];
 units[10] = "1";
 comments[10] = "Id Pregunta: 10196. CONSTITUCION1978";


//  Id pregunta: 10438 Año de creación de pregunta: 2016
 questions[11]= "12)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[11]= new Array();
 choices[11][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[11][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[11][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[11][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[11] = choices[11][3];
 units[11] = "43";
 comments[11] = "Id Pregunta: 10438. SERVICIOS COMUNES";


//  Id pregunta: 10113 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[12]= new Array();
 choices[12][0] = "La Seguridad Social";
 choices[12][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[12][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[12][3] = "El Banco de Espa&ntilde;a";
 answers[12] = choices[12][3];
 units[12] = "15";
 comments[12] = "Id Pregunta: 10113. ";


//  Id pregunta: 10407 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[13]= new Array();
 choices[13][0] = "Art&iacute;culo 14 CE.";
 choices[13][1] = "Art&iacute;culo 9.2 CE.";
 choices[13][2] = "Art&iacute;culo 9.1 CE.";
 choices[13][3] = "Art&iacute;culo 13 CE.";
 answers[13] = choices[13][2];
 units[13] = "14";
 comments[13] = "Id Pregunta: 10407. POLITICAS DE IGUALDAD";


//  Id pregunta: 10005 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[14]= new Array();
 choices[14][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[14][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[14][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[14][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[14] = choices[14][1];
 units[14] = "101";
 comments[14] = "Id Pregunta: 10005. AGE A1 2015";


//  Id pregunta: 10603 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[15]= new Array();
 choices[15][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[15][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[15][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[15][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[15] = choices[15][3];
 units[15] = "101";
 comments[15] = "Id Pregunta: 10603. Junta de Extremadura A1 2015";


//  Id pregunta: 10629 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[16]= new Array();
 choices[16][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[16][1] = "El responsable de la custodia de los datos enviados.";
 choices[16][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[16][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[16] = choices[16][3];
 units[16] = "35";
 comments[16] = "Id Pregunta: 10629. Junta de Extremadura A1 2015";


//  Id pregunta: 10073 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[17]= new Array();
 choices[17][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[17][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[17][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[17][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[17] = choices[17][1];
 units[17] = "44";
 comments[17] = "Id Pregunta: 10073. AGE A1 2015";


//  Id pregunta: 10638 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[18]= new Array();
 choices[18][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[18][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[18][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[18][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[18] = choices[18][3];
 units[18] = "57";
 comments[18] = "Id Pregunta: 10638. Junta de Extremadura A1 2015";


//  Id pregunta: 10398 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[19]= new Array();
 choices[19][0] = "Art. 13, L.O.3/2007.";
 choices[19][1] = "Art. 14, L.O.3/2007.";
 choices[19][2] = "Art. 11, L.O.3/2007.";
 choices[19][3] = "Ninguna es correcta.";
 answers[19] = choices[19][2];
 units[19] = "14";
 comments[19] = "Id Pregunta: 10398. POLITICAS DE IGUALDAD";


//  Id pregunta: 10256 Año de creación de pregunta: 2016
 questions[20]= "21)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[20]= new Array();
 choices[20][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[20][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[20][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[20][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 10256. CONSTITUCION1978";


//  Id pregunta: 10253 Año de creación de pregunta: 2016
 questions[21]= "22)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[21]= new Array();
 choices[21][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[21][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[21][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[21][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[21] = choices[21][3];
 units[21] = "1";
 comments[21] = "Id Pregunta: 10253. CONSTITUCION1978";


//  Id pregunta: 10357 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[22]= new Array();
 choices[22][0] = "El Parlamento y el Consejo.";
 choices[22][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[22][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[22][3] = "La Comisi&oacute;n y el Consejo.";
 answers[22] = choices[22][1];
 units[22] = "5";
 comments[22] = "Id Pregunta: 10357. UNION EUROPEA";


//  Id pregunta: 10265 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[23]= new Array();
 choices[23][0] = "El Presidente del Senado";
 choices[23][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[23][2] = "El Presidente del Gobierno";
 choices[23][3] = "El Presidente de las Cortes Generales";
 answers[23] = choices[23][2];
 units[23] = "1";
 comments[23] = "Id Pregunta: 10265. CONSTITUCION1978";


//  Id pregunta: 10080 Año de creación de pregunta: 2016
 questions[24]= "25)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[24]= new Array();
 choices[24][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[24][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[24][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[24][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[24] = choices[24][3];
 units[24] = "46";
 comments[24] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10145 Año de creación de pregunta: 2016
 questions[25]= "26)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[25][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[25][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[25][3] = "Todas las anteriores son ciertas";
 answers[25] = choices[25][3];
 units[25] = "8";
 comments[25] = "Id Pregunta: 10145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 10279 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la respuesta correcta:";
 choices[26]= new Array();
 choices[26][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[26][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[26][2] = "Las respuestas A y B son correctas.";
 choices[26][3] = "Las respuestas A y B son falsas.";
 answers[26] = choices[26][2];
 units[26] = "5";
 comments[26] = "Id Pregunta: 10279. UNION EUROPEA";


//  Id pregunta: 10501 Año de creación de pregunta: 2016
 questions[27]= "28)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[27]= new Array();
 choices[27][0] = "Las sociedades mercantiles estatales.";
 choices[27][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[27][2] = "Las respuestas a) y b) son correctas.";
 choices[27][3] = "Las respuestas a) y b) no son correctas.";
 answers[27] = choices[27][2];
 units[27] = "10";
 comments[27] = "Id Pregunta: 10501. PRESUPUESTOS GENERALES";


//  Id pregunta: 10035 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; es Java Web Start?";
 choices[28]= new Array();
 choices[28][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[28][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[28][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[28][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[28] = choices[28][3];
 units[28] = "64";
 comments[28] = "Id Pregunta: 10035. AGE A1 2015";


//  Id pregunta: 10343 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[29]= new Array();
 choices[29][0] = "23";
 choices[29][1] = "20";
 choices[29][2] = "14";
 choices[29][3] = "18";
 answers[29] = choices[29][1];
 units[29] = "5";
 comments[29] = "Id Pregunta: 10343. UNION EUROPEA";


//  Id pregunta: 10051 Año de creación de pregunta: 2016
 questions[30]= "31)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[30]= new Array();
 choices[30][0] = "Cifrado de las comunicaciones";
 choices[30][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[30][2] = "Registro de los accesos";
 choices[30][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[30] = choices[30][1];
 units[30] = "35";
 comments[30] = "Id Pregunta: 10051. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 10645 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[31]= new Array();
 choices[31][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[31][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[31][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[31][3] = "El Instituto de la Mujer de Extremadura.";
 answers[31] = choices[31][3];
 units[31] = "14";
 comments[31] = "Id Pregunta: 10645. Junta de Extremadura A1 2015";


//  Id pregunta: 10416 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[32]= new Array();
 choices[32][0] = "Art. 25 LO, 3/2007.";
 choices[32][1] = "Art. 23 LO, 3/2007.";
 choices[32][2] = "Art. 14 LO, 3/2007.";
 choices[32][3] = "Ninguna es correcta, es el art. 13.";
 answers[32] = choices[32][0];
 units[32] = "14";
 comments[32] = "Id Pregunta: 10416. POLITICAS DE IGUALDAD";


//  Id pregunta: 10390 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[33]= new Array();
 choices[33][0] = "El Consejo Nacional de la Mujer.";
 choices[33][1] = "El Consejo de la Mujer.";
 choices[33][2] = "El Instituto de la Mujer.";
 choices[33][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[33] = choices[33][3];
 units[33] = "14";
 comments[33] = "Id Pregunta: 10390. POLITICAS DE IGUALDAD";


//  Id pregunta: 10585 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[34]= new Array();
 choices[34][0] = "La CETIC";
 choices[34][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[34][2] = "La DTIC";
 choices[34][3] = "Ninguno de los anteriores";
 answers[34] = choices[34][1];
 units[34] = "19";
 comments[34] = "Id Pregunta: 10585. Estrategia TIC";


//  Id pregunta: 10359 Año de creación de pregunta: 2016
 questions[35]= "36)  Los Reglamentos no se caracterizan por:";
 choices[35]= new Array();
 choices[35][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[35][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[35][2] = "Ser obligatorios.";
 choices[35][3] = "No poseer alcance general.";
 answers[35] = choices[35][3];
 units[35] = "5";
 comments[35] = "Id Pregunta: 10359. UNION EUROPEA";


//  Id pregunta: 10527 Año de creación de pregunta: 2016
 questions[36]= "37)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[36]= new Array();
 choices[36][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[36][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[36][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[36][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[36] = choices[36][2];
 units[36] = "7";
 comments[36] = "Id Pregunta: 10527. LEY 39/2015";


//  Id pregunta: 10583 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[37]= new Array();
 choices[37][0] = "Los principios rectores";
 choices[37][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[37][2] = "Los hitos para su desarrollo gradual";
 choices[37][3] = "Todos los anteriores";
 answers[37] = choices[37][3];
 units[37] = "19";
 comments[37] = "Id Pregunta: 10583. Estrategia TIC";


//  Id pregunta: 10524 Año de creación de pregunta: 2016
 questions[38]= "39)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[38]= new Array();
 choices[38][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[38][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[38][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[38][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[38] = choices[38][3];
 units[38] = "7";
 comments[38] = "Id Pregunta: 10524. LEY 39/2015";


//  Id pregunta: 10465 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[39]= new Array();
 choices[39][0] = "Las respuestas a) y b) son correctas.";
 choices[39][1] = "Las respuestas a) y b) no son correctas.";
 choices[39][2] = "Contenido coherente con los planes sectoriales.";
 choices[39][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[39] = choices[39][0];
 units[39] = "10";
 comments[39] = "Id Pregunta: 10465. PRESUPUESTOS GENERALES";


//  Id pregunta: 10411 Año de creación de pregunta: 2016
 questions[40]= "41)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[40]= new Array();
 choices[40][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[40][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[40][2] = "Ninguna es correcta.";
 choices[40][3] = "A y B son correctas.";
 answers[40] = choices[40][1];
 units[40] = "14";
 comments[40] = "Id Pregunta: 10411. POLITICAS DE IGUALDAD";


//  Id pregunta: 10282 Año de creación de pregunta: 2016
 questions[41]= "42)  Sobre el Plan Juncker:";
 choices[41]= new Array();
 choices[41][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[41][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[41][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[41][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[41] = choices[41][1];
 units[41] = "5";
 comments[41] = "Id Pregunta: 10282. UNION EUROPEA";


//  Id pregunta: 10475 Año de creación de pregunta: 2016
 questions[42]= "43)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Anualmente.";
 choices[42][1] = "Ninguna de las respuestas es correcta.";
 choices[42][2] = "Trimestralmente.";
 choices[42][3] = "Semestralmente.";
 answers[42] = choices[42][0];
 units[42] = "10";
 comments[42] = "Id Pregunta: 10475. PRESUPUESTOS GENERALES";


//  Id pregunta: 10034 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[43]= new Array();
 choices[43][0] = "Memcached";
 choices[43][1] = "OpCache";
 choices[43][2] = "WinCache Extension for PHP";
 choices[43][3] = "Alternative PHP Cache";
 answers[43] = choices[43][0];
 units[43] = "65";
 comments[43] = "Id Pregunta: 10034. AGE A1 2015";


//  Id pregunta: 10520 Año de creación de pregunta: 2016
 questions[44]= "45)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[44]= new Array();
 choices[44][0] = "De los interesados en el procedimiento";
 choices[44][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[44][2] = "Disposiciones generales";
 choices[44][3] = "De los actos administrativos";
 answers[44] = choices[44][2];
 units[44] = "7";
 comments[44] = "Id Pregunta: 10520. LEY 39/2015";


//  Id pregunta: 10239 Año de creación de pregunta: 2016
 questions[45]= "46)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[45]= new Array();
 choices[45][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[45][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[45][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[45][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 10239. CONSTITUCION1978";


//  Id pregunta: 10647 Año de creación de pregunta: 2016
 questions[46]= "47)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[46]= new Array();
 choices[46][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[46][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[46][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[46][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[46] = choices[46][0];
 units[46] = "101";
 comments[46] = "Id Pregunta: 10647. Junta de Extremadura A1 2015";


//  Id pregunta: 10589 Año de creación de pregunta: 2016
 questions[47]= "48)  Son servicios declarados compartidos:";
 choices[47]= new Array();
 choices[47][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[47][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[47][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[47][3] = "Todos los anteriores";
 answers[47] = choices[47][3];
 units[47] = "19";
 comments[47] = "Id Pregunta: 10589. Estrategia TIC";


//  Id pregunta: 10530 Año de creación de pregunta: 2016
 questions[48]= "49)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[48]= new Array();
 choices[48][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[48][1] = "mediante resoluci&oacute;n judicial especial";
 choices[48][2] = "&uacute;nicamente mediante poder notarial";
 choices[48][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[48] = choices[48][3];
 units[48] = "7";
 comments[48] = "Id Pregunta: 10530. LEY 39/2015";


//  Id pregunta: 10355 Año de creación de pregunta: 2016
 questions[49]= "50)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[49]= new Array();
 choices[49][0] = "Son vinculantes solamente.";
 choices[49][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[49][2] = "Son preceptivos y vinculantes.";
 choices[49][3] = "Son preceptivos y no vinculantes.";
 answers[49] = choices[49][1];
 units[49] = "5";
 comments[49] = "Id Pregunta: 10355. UNION EUROPEA";


//  Id pregunta: 10452 Año de creación de pregunta: 2016
 questions[50]= "51)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[50]= new Array();
 choices[50][0] = "Los cr&eacute;ditos";
 choices[50][1] = "Las partidas presupuestarias";
 choices[50][2] = "Los derechos";
 choices[50][3] = "Las obligaciones";
 answers[50] = choices[50][3];
 units[50] = "10";
 comments[50] = "Id Pregunta: 10452. PRESUPUESTOS GENERALES";


//  Id pregunta: 10033 Año de creación de pregunta: 2016
 questions[51]= "52)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[51]= new Array();
 choices[51][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[51][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[51][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[51][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[51] = choices[51][1];
 units[51] = "63";
 comments[51] = "Id Pregunta: 10033. AGE A1 2015";


//  Id pregunta: 10199 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[52]= new Array();
 choices[52][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[52][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[52][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[52][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 10199. CONSTITUCION1978";


//  Id pregunta: 10099 Año de creación de pregunta: 2016
 questions[53]= "54)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[53]= new Array();
 choices[53][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[53][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[53][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[53][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[53] = choices[53][2];
 units[53] = "26";
 comments[53] = "Id Pregunta: 10099. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10081 Año de creación de pregunta: 2016
 questions[54]= "55)  El lenguaje SPARK es un subconjunto de:";
 choices[54]= new Array();
 choices[54][0] = "Java";
 choices[54][1] = "Fortran";
 choices[54][2] = "Ruby";
 choices[54][3] = "Ada";
 answers[54] = choices[54][3];
 units[54] = "73";
 comments[54] = "Id Pregunta: 10081. AGE A1 2015";


//  Id pregunta: 10320 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[55]= new Array();
 choices[55][0] = "Al Consejo Europeo.";
 choices[55][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[55][2] = "A la Comisi&oacute;n Europea.";
 choices[55][3] = "Al Parlamento Europeo.";
 answers[55] = choices[55][2];
 units[55] = "5";
 comments[55] = "Id Pregunta: 10320. UNION EUROPEA";


//  Id pregunta: 10563 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[56]= new Array();
 choices[56][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[56][1] = "Excesiva estabilidad de empleo";
 choices[56][2] = "An&eacute;mico crecimiento de la productividad";
 choices[56][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[56] = choices[56][1];
 units[56] = "12";
 comments[56] = "Id Pregunta: 10563. Modelo econ&oacute;mico";


//  Id pregunta: 10055 Año de creación de pregunta: 2016
 questions[57]= "58)  WS-Security contiene especificaciones sobre:";
 choices[57]= new Array();
 choices[57][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[57][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[57][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[57][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[57] = choices[57][1];
 units[57] = "119";
 comments[57] = "Id Pregunta: 10055. AGE A1 2015";


//  Id pregunta: 10174 Año de creación de pregunta: 2016
 questions[58]= "59)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[58]= new Array();
 choices[58][0] = "El derecho a la propiedad privada.";
 choices[58][1] = "El derecho de asociaci&oacute;n.";
 choices[58][2] = "El derecho de fundaci&oacute;n.";
 choices[58][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[58] = choices[58][1];
 units[58] = "1";
 comments[58] = "Id Pregunta: 10174. CONSTITUCION1978";


//  Id pregunta: 10468 Año de creación de pregunta: 2016
 questions[59]= "60)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[59]= new Array();
 choices[59][0] = "El Ministerio de Hacienda.";
 choices[59][1] = "El Ministerio de Econom&iacute;a.";
 choices[59][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[59][3] = "Ninguna de las respuestas es correcta.";
 answers[59] = choices[59][2];
 units[59] = "10";
 comments[59] = "Id Pregunta: 10468. PRESUPUESTOS GENERALES";


//  Id pregunta: 10588 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[60]= new Array();
 choices[60][0] = "14";
 choices[60][1] = "11";
 choices[60][2] = "12";
 choices[60][3] = "15";
 answers[60] = choices[60][0];
 units[60] = "19";
 comments[60] = "Id Pregunta: 10588. Estrategia TIC";


//  Id pregunta: 10243 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[61]= new Array();
 choices[61][0] = "Art&iacute;culo 70.";
 choices[61][1] = "Art&iacute;culo 54.";
 choices[61][2] = "Articulo 62.";
 choices[61][3] = "Articulo 55. 5.";
 answers[61] = choices[61][2];
 units[61] = "1";
 comments[61] = "Id Pregunta: 10243. CONSTITUCION1978";


//  Id pregunta: 10293 Año de creación de pregunta: 2016
 questions[62]= "63)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[62]= new Array();
 choices[62][0] = "Estrasburgo.";
 choices[62][1] = "Bruselas.";
 choices[62][2] = "Luxemburgo.";
 choices[62][3] = "Holanda.";
 answers[62] = choices[62][0];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10672 Año de creación de pregunta: 2016
 questions[63]= "64)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[63]= new Array();
 choices[63][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[63][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[63][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[63][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[63] = choices[63][2];
 units[63] = "47";
 comments[63] = "Id Pregunta: 10672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 10548 Año de creación de pregunta: 2016
 questions[64]= "65)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[64]= new Array();
 choices[64][0] = "La Administraci&oacute;n General del Estado";
 choices[64][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[64][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[64][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[64] = choices[64][1];
 units[64] = "26";
 comments[64] = "Id Pregunta: 10548. Gobernanza TIC";


//  Id pregunta: 10439 Año de creación de pregunta: 2016
 questions[65]= "66)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[65]= new Array();
 choices[65][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[65][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[65][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[65][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[65] = choices[65][1];
 units[65] = "43";
 comments[65] = "Id Pregunta: 10439. SERVICIOS COMUNES";


//  Id pregunta: 10082 Año de creación de pregunta: 2016
 questions[66]= "67)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[66]= new Array();
 choices[66][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[66][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[66][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[66][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[66] = choices[66][3];
 units[66] = "41";
 comments[66] = "Id Pregunta: 10082. AGE A1 2015";


//  Id pregunta: 10554 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[67]= new Array();
 choices[67][0] = "El BCE";
 choices[67][1] = "El Parlamento";
 choices[67][2] = "El Consejo";
 choices[67][3] = "La Comisi&oacute;n";
 answers[67] = choices[67][3];
 units[67] = "17";
 comments[67] = "Id Pregunta: 10554. Mercado &Uacute;nico Digital";


//  Id pregunta: 10446 Año de creación de pregunta: 2016
 questions[68]= "69)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[68]= new Array();
 choices[68][0] = "Ejecutivo";
 choices[68][1] = "Limitativo";
 choices[68][2] = "Estimativo";
 choices[68][3] = "Progresivo";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 10446. PRESUPUESTOS GENERALES";


//  Id pregunta: 10295 Año de creación de pregunta: 2016
 questions[69]= "70)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[69]= new Array();
 choices[69][0] = "Estrasburgo.";
 choices[69][1] = "Bruselas.";
 choices[69][2] = "Luxemburgo.";
 choices[69][3] = "Holanda.";
 answers[69] = choices[69][2];
 units[69] = "5";
 comments[69] = "Id Pregunta: 10295. UNION EUROPEA";


//  Id pregunta: 10679 Año de creación de pregunta: 2016
 questions[70]= "71)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[70][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[70][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[70][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[70] = choices[70][1];
 units[70] = "14";
 comments[70] = "Id Pregunta: 10679. Pensiones";


//  Id pregunta: 10181 Año de creación de pregunta: 2016
 questions[71]= "72)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[71]= new Array();
 choices[71][0] = "l Consejo General del Poder Judicial";
 choices[71][1] = "El pleno de Tribunal Constitucional";
 choices[71][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[71][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[71] = choices[71][3];
 units[71] = "1";
 comments[71] = "Id Pregunta: 10181. CONSTITUCION1978";


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


//  Id pregunta: 10277 Año de creación de pregunta: 2016
 questions[73]= "74)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[73]= new Array();
 choices[73][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[73][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[73][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[73][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[73] = choices[73][2];
 units[73] = "22";
 comments[73] = "Id Pregunta: 10277. LEY DE TRANSPARENCIA";


//  Id pregunta: 10135 Año de creación de pregunta: 2016
 questions[74]= "75)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[74]= new Array();
 choices[74][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[74][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[74][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[74][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[74] = choices[74][0];
 units[74] = "12";
 comments[74] = "Id Pregunta: 10135. Leyes modelo econ&oacute;mico";


