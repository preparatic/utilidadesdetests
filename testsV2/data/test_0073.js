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

//  Id pregunta: 10113 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[0]= new Array();
 choices[0][0] = "La Seguridad Social";
 choices[0][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[0][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[0][3] = "El Banco de Espa&ntilde;a";
 answers[0] = choices[0][3];
 units[0] = "15";
 comments[0] = "Id Pregunta: 10113. ";


//  Id pregunta: 10597 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[1][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[1][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[1][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[1] = choices[1][0];
 units[1] = "45";
 comments[1] = "Id Pregunta: 10597. Junta de Extremadura A1 2015";


//  Id pregunta: 10446 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[2]= new Array();
 choices[2][0] = "Ejecutivo";
 choices[2][1] = "Limitativo";
 choices[2][2] = "Estimativo";
 choices[2][3] = "Progresivo";
 answers[2] = choices[2][2];
 units[2] = "10";
 comments[2] = "Id Pregunta: 10446. PRESUPUESTOS GENERALES";


//  Id pregunta: 10673 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[3]= new Array();
 choices[3][0] = "El aumento de la esperanza de vida.";
 choices[3][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[3][2] = "La reducci&oacute;n del desempleo.";
 choices[3][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[3] = choices[3][0];
 units[3] = "14";
 comments[3] = "Id Pregunta: 10673. Estructura social";


//  Id pregunta: 10303 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[4]= new Array();
 choices[4][0] = "Veinticinco.";
 choices[4][1] = "Veintisiete.";
 choices[4][2] = "Veintinueve.";
 choices[4][3] = "Cuarenta y uno.";
 answers[4] = choices[4][1];
 units[4] = "5";
 comments[4] = "Id Pregunta: 10303. UNION EUROPEA";


//  Id pregunta: 10637 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  En el sistema operativo Unix/Linux, el comando id:";
 choices[5]= new Array();
 choices[5][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[5][1] = "El comando id no existe.";
 choices[5][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[5][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[5] = choices[5][0];
 units[5] = "57";
 comments[5] = "Id Pregunta: 10637. Junta de Extremadura A1 2015";


//  Id pregunta: 10072 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[6]= new Array();
 choices[6][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[6][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[6][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[6][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[6] = choices[6][1];
 units[6] = "86";
 comments[6] = "Id Pregunta: 10072. AGE A1 2015";


//  Id pregunta: 10388 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[7]= new Array();
 choices[7][0] = "Indirecta.";
 choices[7][1] = "Directa.";
 choices[7][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[7][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[7] = choices[7][1];
 units[7] = "14";
 comments[7] = "Id Pregunta: 10388. POLITICAS DE IGUALDAD";


//  Id pregunta: 10614 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[8]= new Array();
 choices[8][0] = "192.228.0.0";
 choices[8][1] = "192.228.8.0";
 choices[8][2] = "192.228.16.0";
 choices[8][3] = "192.228.17.0";
 answers[8] = choices[8][2];
 units[8] = "109";
 comments[8] = "Id Pregunta: 10614. Junta de Extremadura A1 2015";


//  Id pregunta: 10077 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[9]= new Array();
 choices[9][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[9][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[9][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[9][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[9] = choices[9][2];
 units[9] = "47";
 comments[9] = "Id Pregunta: 10077. AGE A1 2015";


//  Id pregunta: 10052 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[10]= new Array();
 choices[10][0] = "ISO/IEC 25000";
 choices[10][1] = "ISO/IEC 27000";
 choices[10][2] = "ISO 9000";
 choices[10][3] = "ISO 9001";
 answers[10] = choices[10][0];
 units[10] = "93";
 comments[10] = "Id Pregunta: 10052. AGE A1 2015";


//  Id pregunta: 10069 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[11]= new Array();
 choices[11][0] = "Ejecuci&oacute;n";
 choices[11][1] = "Adjudicaci&oacute;n";
 choices[11][2] = "Licitaci&oacute;n";
 choices[11][3] = "Formalizaci&oacute;n";
 answers[11] = choices[11][3];
 units[11] = "37";
 comments[11] = "Id Pregunta: 10069. AGE A1 2015";


//  Id pregunta: 10328 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[12]= new Array();
 choices[12][0] = "El Presidente del Consejo Europeo.";
 choices[12][1] = "La Comisi&oacute;n.";
 choices[12][2] = "El Consejo.";
 choices[12][3] = "El Parlamento Europeo.";
 answers[12] = choices[12][2];
 units[12] = "5";
 comments[12] = "Id Pregunta: 10328. UNION EUROPEA";


//  Id pregunta: 10452 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[13]= new Array();
 choices[13][0] = "Los cr&eacute;ditos";
 choices[13][1] = "Las partidas presupuestarias";
 choices[13][2] = "Los derechos";
 choices[13][3] = "Las obligaciones";
 answers[13] = choices[13][3];
 units[13] = "10";
 comments[13] = "Id Pregunta: 10452. PRESUPUESTOS GENERALES";


//  Id pregunta: 10150 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[14]= new Array();
 choices[14][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[14][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[14][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[14][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[14] = choices[14][2];
 units[14] = "7";
 comments[14] = "Id Pregunta: 10150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10412 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[15]= new Array();
 choices[15][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[15][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[15][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[15][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[15] = choices[15][1];
 units[15] = "14";
 comments[15] = "Id Pregunta: 10412. POLITICAS DE IGUALDAD";


//  Id pregunta: 10659 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[16]= new Array();
 choices[16][0] = "Orientaci&oacute;n a objetos";
 choices[16][1] = "MapReduce";
 choices[16][2] = "Pipeline filtering";
 choices[16][3] = "Programaci&oacute;n funcional";
 answers[16] = choices[16][1];
 units[16] = "73";
 comments[16] = "Id Pregunta: 10659. ";


//  Id pregunta: 10213 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[17]= new Array();
 choices[17][0] = "Cinco.";
 choices[17][1] = "Dos.";
 choices[17][2] = "Cuatro.";
 choices[17][3] = "Siete.";
 answers[17] = choices[17][0];
 units[17] = "1";
 comments[17] = "Id Pregunta: 10213. CONSTITUCION1978";


//  Id pregunta: 10419 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[18]= new Array();
 choices[18][0] = "P&uacute;blica.";
 choices[18][1] = "Privada.";
 choices[18][2] = "Ambas son correctas.";
 choices[18][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[18] = choices[18][0];
 units[18] = "14";
 comments[18] = "Id Pregunta: 10419. POLITICAS DE IGUALDAD";


//  Id pregunta: 10533 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[19]= new Array();
 choices[19][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[19][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[19][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[19][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[19] = choices[19][1];
 units[19] = "7";
 comments[19] = "Id Pregunta: 10533. LEY 39/2015";


//  Id pregunta: 10042 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[20]= new Array();
 choices[20][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[20][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[20][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[20][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[20] = choices[20][3];
 units[20] = "86";
 comments[20] = "Id Pregunta: 10042. AGE A1 2015";


//  Id pregunta: 10396 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[21]= new Array();
 choices[21][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[21][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[21][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[21][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[21] = choices[21][0];
 units[21] = "14";
 comments[21] = "Id Pregunta: 10396. POLITICAS DE IGUALDAD";


//  Id pregunta: 10062 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[22]= new Array();
 choices[22][0] = "B&aacute;sico";
 choices[22][1] = "Medio";
 choices[22][2] = "Alto";
 choices[22][3] = "A los niveles medio y alto";
 answers[22] = choices[22][2];
 units[22] = "35";
 comments[22] = "Id Pregunta: 10062. AGE A1 2015";


//  Id pregunta: 10415 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[23]= new Array();
 choices[23][0] = "Un informe de g&eacute;nero.";
 choices[23][1] = "La variable de sexo.";
 choices[23][2] = "La variable de edad.";
 choices[23][3] = "La variable de comportamiento.";
 answers[23] = choices[23][1];
 units[23] = "14";
 comments[23] = "Id Pregunta: 10415. POLITICAS DE IGUALDAD";


//  Id pregunta: 10414 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Un informe de impacto de g&eacute;nero.";
 choices[24][1] = "Un programa de igualdad de oportunidades.";
 choices[24][2] = "Un plan de Igualdad de Oportunidades.";
 choices[24][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[24] = choices[24][0];
 units[24] = "14";
 comments[24] = "Id Pregunta: 10414. POLITICAS DE IGUALDAD";


//  Id pregunta: 10443 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[25]= new Array();
 choices[25][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[25][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[25][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[25][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[25] = choices[25][1];
 units[25] = "43";
 comments[25] = "Id Pregunta: 10443. SERVICIOS COMUNES";


//  Id pregunta: 10026 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[26]= new Array();
 choices[26][0] = "Sello electr&oacute;nico";
 choices[26][1] = "Sede electr&oacute;nica";
 choices[26][2] = "Servidor seguro (SSL/TLS)";
 choices[26][3] = "Empleado p&uacute;blico";
 answers[26] = choices[26][2];
 units[26] = "7";
 comments[26] = "Id Pregunta: 10026. AGE A1 2015";


//  Id pregunta: 10468 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[27]= new Array();
 choices[27][0] = "El Ministerio de Hacienda.";
 choices[27][1] = "El Ministerio de Econom&iacute;a.";
 choices[27][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[27][3] = "Ninguna de las respuestas es correcta.";
 answers[27] = choices[27][2];
 units[27] = "10";
 comments[27] = "Id Pregunta: 10468. PRESUPUESTOS GENERALES";


//  Id pregunta: 10127 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[28]= new Array();
 choices[28][0] = "Tiene car&aacute;cter facultativo.";
 choices[28][1] = "Tiene car&aacute;cter potestativo. ";
 choices[28][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[28][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[28] = choices[28][1];
 units[28] = "22";
 comments[28] = "Id Pregunta: 10127. ";


//  Id pregunta: 10146 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[29]= new Array();
 choices[29][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[29][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[29][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[29][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[29] = choices[29][0];
 units[29] = "8";
 comments[29] = "Id Pregunta: 10146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 10156 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[30]= new Array();
 choices[30][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[30][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[30][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[30][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[30] = choices[30][1];
 units[30] = "7";
 comments[30] = "Id Pregunta: 10156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 10361 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[31]= new Array();
 choices[31][0] = "El Consejo Europeo.";
 choices[31][1] = "El Parlamento Europeo.";
 choices[31][2] = "El Consejo.";
 choices[31][3] = "La Comisi&oacute;n.";
 answers[31] = choices[31][3];
 units[31] = "5";
 comments[31] = "Id Pregunta: 10361. UNION EUROPEA";


//  Id pregunta: 10176 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[32]= new Array();
 choices[32][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[32][1] = "Solamente el Congreso.";
 choices[32][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[32][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[32] = choices[32][0];
 units[32] = "1";
 comments[32] = "Id Pregunta: 10176. CONSTITUCION1978";


//  Id pregunta: 10130 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[33]= new Array();
 choices[33][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[33][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[33][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[33][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[33] = choices[33][3];
 units[33] = "12";
 comments[33] = "Id Pregunta: 10130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10667 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[34]= new Array();
 choices[34][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[34][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[34][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[34][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[34] = choices[34][2];
 units[34] = "7";
 comments[34] = "Id Pregunta: 10667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10509 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[35]= new Array();
 choices[35][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[35][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[35][2] = "Absoluta frente a cualquier otro gasto.";
 choices[35][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 10509. PRESUPUESTOS GENERALES";


//  Id pregunta: 10628 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[36]= new Array();
 choices[36][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[36][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[36][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[36][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[36] = choices[36][0];
 units[36] = "45";
 comments[36] = "Id Pregunta: 10628. Junta de Extremadura A1 2015";


//  Id pregunta: 10198 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[37]= new Array();
 choices[37][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[37][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[37][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[37][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[37] = choices[37][3];
 units[37] = "1";
 comments[37] = "Id Pregunta: 10198. CONSTITUCION1978";


//  Id pregunta: 10083 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[38]= new Array();
 choices[38][0] = "Perceptible";
 choices[38][1] = "Operable";
 choices[38][2] = "Comprensible";
 choices[38][3] = "Robusto";
 answers[38] = choices[38][2];
 units[38] = "42";
 comments[38] = "Id Pregunta: 10083. AGE A1 2015";


//  Id pregunta: 10288 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[39]= new Array();
 choices[39][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[39][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[39][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[39][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[39] = choices[39][2];
 units[39] = "5";
 comments[39] = "Id Pregunta: 10288. UNION EUROPEA";


//  Id pregunta: 10336 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[40]= new Array();
 choices[40][0] = "Diciembre de 1987.";
 choices[40][1] = "Septiembre de 1989.";
 choices[40][2] = "Octubre de 1990.";
 choices[40][3] = "Noviembre de 1980.";
 answers[40] = choices[40][1];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10336. UNION EUROPEA";


//  Id pregunta: 10260 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[41]= new Array();
 choices[41][0] = "117.5";
 choices[41][1] = "117.1";
 choices[41][2] = "116";
 choices[41][3] = "15";
 answers[41] = choices[41][0];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10260. CONSTITUCION1978";


//  Id pregunta: 10551 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[42]= new Array();
 choices[42][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[42][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[42][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[42][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[42] = choices[42][2];
 units[42] = "26";
 comments[42] = "Id Pregunta: 10551. Gobernanza TIC";


//  Id pregunta: 10044 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[43]= new Array();
 choices[43][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[43][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[43][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[43][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[43] = choices[43][1];
 units[43] = "60";
 comments[43] = "Id Pregunta: 10044. AGE A1 2015";


//  Id pregunta: 10297 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[44]= new Array();
 choices[44][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[44][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[44][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[44][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[44] = choices[44][1];
 units[44] = "5";
 comments[44] = "Id Pregunta: 10297. UNION EUROPEA";


//  Id pregunta: 10064 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[45]= new Array();
 choices[45][0] = "Windows Phone";
 choices[45][1] = "Blackberry";
 choices[45][2] = "iOS";
 choices[45][3] = "Android";
 answers[45] = choices[45][3];
 units[45] = "59";
 comments[45] = "Id Pregunta: 10064. AGE A1 2015";


//  Id pregunta: 10459 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[46]= new Array();
 choices[46][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[46][1] = "Pasivos financieros y transferencias de capital.";
 choices[46][2] = "Activos financieros y pasivos financieros.";
 choices[46][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[46] = choices[46][2];
 units[46] = "10";
 comments[46] = "Id Pregunta: 10459. PRESUPUESTOS GENERALES";


//  Id pregunta: 10416 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[47]= new Array();
 choices[47][0] = "Art. 25 LO, 3/2007.";
 choices[47][1] = "Art. 23 LO, 3/2007.";
 choices[47][2] = "Art. 14 LO, 3/2007.";
 choices[47][3] = "Ninguna es correcta, es el art. 13.";
 answers[47] = choices[47][0];
 units[47] = "14";
 comments[47] = "Id Pregunta: 10416. POLITICAS DE IGUALDAD";


//  Id pregunta: 10374 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[48]= new Array();
 choices[48][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[48][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[48][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[48][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 10374. UNION EUROPEA";


//  Id pregunta: 10504 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[49]= new Array();
 choices[49][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[49][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[49][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[49][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[49] = choices[49][2];
 units[49] = "10";
 comments[49] = "Id Pregunta: 10504. PRESUPUESTOS GENERALES";


//  Id pregunta: 10622 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[50]= new Array();
 choices[50][0] = "Entradas (entities).";
 choices[50][1] = "Atributos (attribs).";
 choices[50][2] = "M&oacute;dulos (modules).";
 choices[50][3] = "Objetos (objects).";
 answers[50] = choices[50][0];
 units[50] = "74";
 comments[50] = "Id Pregunta: 10622. Junta de Extremadura A1 2015";


//  Id pregunta: 10447 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[51]= new Array();
 choices[51][0] = "Ejecutivo";
 choices[51][1] = "Limitativo";
 choices[51][2] = "Estimativo";
 choices[51][3] = "Progresivo";
 answers[51] = choices[51][1];
 units[51] = "10";
 comments[51] = "Id Pregunta: 10447. PRESUPUESTOS GENERALES";


//  Id pregunta: 10161 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[52]= new Array();
 choices[52][0] = "Principio de solo una vez";
 choices[52][1] = "Apertura y transparencia";
 choices[52][2] = "Confianza y seguridad";
 choices[52][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[52] = choices[52][3];
 units[52] = "19";
 comments[52] = "Id Pregunta: 10161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 10517 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[53]= new Array();
 choices[53][0] = "la Administraci&oacute;n General del Estado";
 choices[53][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[53][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[53][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[53] = choices[53][3];
 units[53] = "7";
 comments[53] = "Id Pregunta: 10517. LEY 39/2015";


//  Id pregunta: 10512 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[54]= new Array();
 choices[54][0] = "solo mediante ley";
 choices[54][1] = "reglamentariamente";
 choices[54][2] = "mediante ley o reglamentariamente";
 choices[54][3] = "ninguna es correcta";
 answers[54] = choices[54][1];
 units[54] = "7";
 comments[54] = "Id Pregunta: 10512. LEY 39/2015";


//  Id pregunta: 10071 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[55]= new Array();
 choices[55][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[55][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[55][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[55][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[55] = choices[55][0];
 units[55] = "86";
 comments[55] = "Id Pregunta: 10071. AGE A1 2015";


//  Id pregunta: 10259 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  La iniciativa legislativa corresponde:";
 choices[56]= new Array();
 choices[56][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[56][1] = "Al rey y al Gobierno.";
 choices[56][2] = "Al Congreso, al Senado y al Rey.";
 choices[56][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[56] = choices[56][3];
 units[56] = "1";
 comments[56] = "Id Pregunta: 10259. CONSTITUCION1978";


//  Id pregunta: 10112 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[57]= new Array();
 choices[57][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[57][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[57][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[57][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[57] = choices[57][1];
 units[57] = "15";
 comments[57] = "Id Pregunta: 10112. ";


//  Id pregunta: 10554 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[58]= new Array();
 choices[58][0] = "El BCE";
 choices[58][1] = "El Parlamento";
 choices[58][2] = "El Consejo";
 choices[58][3] = "La Comisi&oacute;n";
 answers[58] = choices[58][3];
 units[58] = "17";
 comments[58] = "Id Pregunta: 10554. Mercado &Uacute;nico Digital";


//  Id pregunta: 10363 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  Los Reglamentos no se caracterizan por:";
 choices[59]= new Array();
 choices[59][0] = "No poseer alcance general.";
 choices[59][1] = "Ser obligatorios.";
 choices[59][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[59][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[59] = choices[59][0];
 units[59] = "5";
 comments[59] = "Id Pregunta: 10363. UNION EUROPEA";


//  Id pregunta: 10089 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[60]= new Array();
 choices[60][0] = "2.400 euros";
 choices[60][1] = "4.000 euros";
 choices[60][2] = "3.200 euros";
 choices[60][3] = "1.600 euros";
 answers[60] = choices[60][1];
 units[60] = "37";
 comments[60] = "Id Pregunta: 10089. AGE A1 2015";


//  Id pregunta: 10661 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[61]= new Array();
 choices[61][0] = "Varios namenodes y varios datanodes por cluster";
 choices[61][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[61][2] = "1 namenode y varios datanodes por cluster";
 choices[61][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[61] = choices[61][2];
 units[61] = "73";
 comments[61] = "Id Pregunta: 10661. ";


//  Id pregunta: 10199 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[62]= new Array();
 choices[62][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[62][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[62][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[62][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[62] = choices[62][0];
 units[62] = "1";
 comments[62] = "Id Pregunta: 10199. CONSTITUCION1978";


//  Id pregunta: 10173 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[63]= new Array();
 choices[63][0] = "absoluta de las Cortes Generales.";
 choices[63][1] = "absoluta del Congreso de los Diputados.";
 choices[63][2] = "simple de las Cortes Generales.";
 choices[63][3] = "simple del Congreso de los Diputados.";
 answers[63] = choices[63][3];
 units[63] = "1";
 comments[63] = "Id Pregunta: 10173. CONSTITUCION1978";


//  Id pregunta: 10247 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[64]= new Array();
 choices[64][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[64][1] = "Por Orden Ministerial.";
 choices[64][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[64][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[64] = choices[64][0];
 units[64] = "1";
 comments[64] = "Id Pregunta: 10247. CONSTITUCION1978";


//  Id pregunta: 10568 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[65]= new Array();
 choices[65][0] = "Alrededor de un 26% del PIB";
 choices[65][1] = "Alrededor de un 11% del PIB";
 choices[65][2] = "Alrededor de un 34% del PIB";
 choices[65][3] = "Alrededor de un 7% del PIB";
 answers[65] = choices[65][1];
 units[65] = "12";
 comments[65] = "Id Pregunta: 10568. Modelo econ&oacute;mico";


//  Id pregunta: 10170 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[66]= new Array();
 choices[66][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[66][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[66][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[66][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[66] = choices[66][2];
 units[66] = "19";
 comments[66] = "Id Pregunta: 10170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 10547 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[67]= new Array();
 choices[67][0] = "Integrar la estrategia TIC con la de negocio";
 choices[67][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[67][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[67][3] = "Todas las anteriores";
 answers[67] = choices[67][3];
 units[67] = "26";
 comments[67] = "Id Pregunta: 10547. Gobernanza TIC";


//  Id pregunta: 10232 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[68]= new Array();
 choices[68][0] = "El Presidente del Senado.";
 choices[68][1] = "El Defensor del Pueblo.";
 choices[68][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[68][3] = "El Presidente del Gobierno.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 10232. CONSTITUCION1978";


//  Id pregunta: 10595 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[69]= new Array();
 choices[69][0] = "La CETIC";
 choices[69][1] = "Los Ministerios";
 choices[69][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[69][3] = "Ninguno de los anteriores";
 answers[69] = choices[69][1];
 units[69] = "19";
 comments[69] = "Id Pregunta: 10595. Estrategia TIC";


//  Id pregunta: 10557 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[70]= new Array();
 choices[70][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[70][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[70][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[70][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[70] = choices[70][0];
 units[70] = "19";
 comments[70] = "Id Pregunta: 10557. Agenda Digital";


//  Id pregunta: 10672 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[71]= new Array();
 choices[71][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[71][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[71][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[71][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[71] = choices[71][2];
 units[71] = "47";
 comments[71] = "Id Pregunta: 10672. Historia Cl&iacute;nica Digital";


//  Id pregunta: 10261 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[72]= new Array();
 choices[72][0] = "La Comisi&oacute;n Permanente.";
 choices[72][1] = "El Presidente.";
 choices[72][2] = "El Pleno.";
 choices[72][3] = "El Vicepresidente.";
 answers[72] = choices[72][3];
 units[72] = "1";
 comments[72] = "Id Pregunta: 10261. CONSTITUCION1978";


//  Id pregunta: 10681 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[73]= new Array();
 choices[73][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[73][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[73][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[73][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[73] = choices[73][2];
 units[73] = "14";
 comments[73] = "Id Pregunta: 10681. Pensiones";


//  Id pregunta: 10030 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[74]= new Array();
 choices[74][0] = "SMB3";
 choices[74][1] = "AFP";
 choices[74][2] = "NFS";
 choices[74][3] = "FTP";
 answers[74] = choices[74][0];
 units[74] = "59";
 comments[74] = "Id Pregunta: 10030. AGE A1 2015";


//  Id pregunta: 10555 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[75]= new Array();
 choices[75][0] = "Consumidores";
 choices[75][1] = "PYMES y Start-ups";
 choices[75][2] = "La Industria";
 choices[75][3] = "Todos los anteriores";
 answers[75] = choices[75][3];
 units[75] = "17";
 comments[75] = "Id Pregunta: 10555. Mercado &Uacute;nico Digital";


//  Id pregunta: 10450 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[76]= new Array();
 choices[76][0] = "Cifrada";
 choices[76][1] = "Conjunta";
 choices[76][2] = "Sistem&aacute;tica";
 choices[76][3] = "Todas son correctas";
 answers[76] = choices[76][3];
 units[76] = "10";
 comments[76] = "Id Pregunta: 10450. PRESUPUESTOS GENERALES";


//  Id pregunta: 10292 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[77]= new Array();
 choices[77][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[77][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[77][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[77][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[77] = choices[77][1];
 units[77] = "5";
 comments[77] = "Id Pregunta: 10292. UNION EUROPEA";


//  Id pregunta: 10201 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[78]= new Array();
 choices[78][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[78][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[78][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[78][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[78] = choices[78][2];
 units[78] = "1";
 comments[78] = "Id Pregunta: 10201. CONSTITUCION1978";


//  Id pregunta: 10394 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[79]= new Array();
 choices[79][0] = "Discriminaci&oacute;n indirecta.";
 choices[79][1] = "Discriminaci&oacute;n directa.";
 choices[79][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[79][3] = "Discriminaci&oacute;n abusiva.";
 answers[79] = choices[79][0];
 units[79] = "14";
 comments[79] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10268 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[80]= new Array();
 choices[80][0] = "Cuatro.";
 choices[80][1] = "Una.";
 choices[80][2] = "Cinco.";
 choices[80][3] = "Nueve.";
 answers[80] = choices[80][2];
 units[80] = "1";
 comments[80] = "Id Pregunta: 10268. CONSTITUCION1978";


//  Id pregunta: 10287 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[81]= new Array();
 choices[81][0] = "Versi&oacute;n digital prioritaria.";
 choices[81][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[81][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[81][3] = "Apertura y transparencia.";
 answers[81] = choices[81][0];
 units[81] = "5";
 comments[81] = "Id Pregunta: 10287. UNION EUROPEA";


//  Id pregunta: 10221 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[82]= new Array();
 choices[82][0] = "De los derechos y deberes fundamentales.";
 choices[82][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[82][2] = "Derechos y libertades.";
 choices[82][3] = "De la Corona.";
 answers[82] = choices[82][0];
 units[82] = "1";
 comments[82] = "Id Pregunta: 10221. CONSTITUCION1978";


//  Id pregunta: 10120 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[83]= new Array();
 choices[83][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[83][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[83][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[83][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[83] = choices[83][3];
 units[83] = "22";
 comments[83] = "Id Pregunta: 10120. ";


//  Id pregunta: 10539 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[84]= new Array();
 choices[84][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[84][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[84][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[84][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[84] = choices[84][1];
 units[84] = "7";
 comments[84] = "Id Pregunta: 10539. LEY 39/2015";


//  Id pregunta: 10318 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[85]= new Array();
 choices[85][0] = "Consejos y Servicios.";
 choices[85][1] = "Servicios permanentes y no permanentes.";
 choices[85][2] = "Direcciones Generales.";
 choices[85][3] = "Direcciones ministeriales.";
 answers[85] = choices[85][2];
 units[85] = "5";
 comments[85] = "Id Pregunta: 10318. UNION EUROPEA";


//  Id pregunta: 10194 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[86]= new Array();
 choices[86][0] = "11";
 choices[86][1] = "12";
 choices[86][2] = "14";
 choices[86][3] = "8";
 answers[86] = choices[86][1];
 units[86] = "1";
 comments[86] = "Id Pregunta: 10194. CONSTITUCION1978";


//  Id pregunta: 10542 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[87]= new Array();
 choices[87][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[87][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[87][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[87][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[87] = choices[87][0];
 units[87] = "26";
 comments[87] = "Id Pregunta: 10542. Gobernanza TIC";


//  Id pregunta: 10561 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  El plan nacional de ciudades inteligentes...";
 choices[88]= new Array();
 choices[88][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[88][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[88][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[88][3] = "No existe";
 answers[88] = choices[88][1];
 units[88] = "19";
 comments[88] = "Id Pregunta: 10561. Ciudades Inteligentes";


//  Id pregunta: 10102 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[89]= new Array();
 choices[89][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[89][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[89][2] = "Se basan en sistemas distribuidos";
 choices[89][3] = "Se basan en el modelo de datos relacional";
 answers[89] = choices[89][2];
 units[89] = "73";
 comments[89] = "Id Pregunta: 10102. ";


//  Id pregunta: 10212 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[90]= new Array();
 choices[90][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[90][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[90][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[90][3] = "El Senado se compone de 350 senadores.";
 answers[90] = choices[90][0];
 units[90] = "1";
 comments[90] = "Id Pregunta: 10212. CONSTITUCION1978";


//  Id pregunta: 10068 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[91]= new Array();
 choices[91][0] = "Data Mining (miner&iacute;a de datos)";
 choices[91][1] = "Business Intelligence (inteligencia de negocio)";
 choices[91][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[91][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[91] = choices[91][1];
 units[91] = "72";
 comments[91] = "Id Pregunta: 10068. AGE A1 2015";


//  Id pregunta: 10346 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[92]= new Array();
 choices[92][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[92][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[92][2] = "Cinco a&ntilde;os.";
 choices[92][3] = "Ninguna es correcta.";
 answers[92] = choices[92][2];
 units[92] = "5";
 comments[92] = "Id Pregunta: 10346. UNION EUROPEA";


//  Id pregunta: 10006 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[93]= new Array();
 choices[93][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[93][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[93][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[93][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[93] = choices[93][0];
 units[93] = "91";
 comments[93] = "Id Pregunta: 10006. AGE A1 2015";


//  Id pregunta: 10301 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[94]= new Array();
 choices[94][0] = "Los propios miembros del Tribunal.";
 choices[94][1] = "El Consejo de Europa.";
 choices[94][2] = "El Consejo Europeo.";
 choices[94][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[94] = choices[94][0];
 units[94] = "5";
 comments[94] = "Id Pregunta: 10301. UNION EUROPEA";


//  Id pregunta: 10111 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[95]= new Array();
 choices[95][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[95][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[95][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[95][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[95] = choices[95][0];
 units[95] = "15";
 comments[95] = "Id Pregunta: 10111. ";


//  Id pregunta: 10145 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[96]= new Array();
 choices[96][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[96][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[96][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[96][3] = "Todas las anteriores son ciertas";
 answers[96] = choices[96][3];
 units[96] = "8";
 comments[96] = "Id Pregunta: 10145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 10248 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[97]= new Array();
 choices[97][0] = "61";
 choices[97][1] = "53";
 choices[97][2] = "65";
 choices[97][3] = "67";
 answers[97] = choices[97][1];
 units[97] = "1";
 comments[97] = "Id Pregunta: 10248. CONSTITUCION1978";


//  Id pregunta: 10552 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[98]= new Array();
 choices[98][0] = "Establecer redes de telecomunicaciones continentales";
 choices[98][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[98][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[98][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[98] = choices[98][0];
 units[98] = "17";
 comments[98] = "Id Pregunta: 10552. Mercado &Uacute;nico Digital";


//  Id pregunta: 10474 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[99]= new Array();
 choices[99][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[99][1] = "Todas las respuestas son correctas.";
 choices[99][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[99][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[99] = choices[99][1];
 units[99] = "10";
 comments[99] = "Id Pregunta: 10474. PRESUPUESTOS GENERALES";


