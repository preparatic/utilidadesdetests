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

//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[0]= new Array();
 choices[0][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[0][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[0][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[0][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[0] = choices[0][1];
 units[0] = "19";
 comments[0] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[1]= "2)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[1]= new Array();
 choices[1][0] = "6 principios.";
 choices[1][1] = "7 principios.";
 choices[1][2] = "5 principios.";
 choices[1][3] = "6 directrices.";
 answers[1] = choices[1][1];
 units[1] = "28";
 comments[1] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[2]= "3)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[2]= new Array();
 choices[2][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[2][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[2][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[2][3] = "todas son correctas";
 answers[2] = choices[2][3];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[3]= "4)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[3]= new Array();
 choices[3][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[3][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[3][2] = "Se basan en sistemas distribuidos";
 choices[3][3] = "Se basan en el modelo de datos relacional";
 answers[3] = choices[3][2];
 units[3] = "73";
 comments[3] = "Id Pregunta: 102. ";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[4]= new Array();
 choices[4][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[4][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[4][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[4][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[4] = choices[4][0];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[5]= "6)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[5]= new Array();
 choices[5][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[5][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[5][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[5][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[5] = choices[5][1];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[6]= "7)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[6]= new Array();
 choices[6][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[6][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[6][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[6][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[6] = choices[6][3];
 units[6] = "86";
 comments[6] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[7]= new Array();
 choices[7][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[7][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[7][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[7][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[7] = choices[7][3];
 units[7] = "12";
 comments[7] = "Id Pregunta: 565. Modelo econ&oacute;mico";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[8]= "9)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[8]= new Array();
 choices[8][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[8][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[8][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[8][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[8] = choices[8][2];
 units[8] = "43";
 comments[8] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[9]= "10)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[9]= new Array();
 choices[9][0] = "un &oacute;rgano superior";
 choices[9][1] = "un &oacute;rgano directivo";
 choices[9][2] = "un &oacute;rgano superior o directivo";
 choices[9][3] = "ninguna es correcta";
 answers[9] = choices[9][2];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[10]= "11)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[10]= new Array();
 choices[10][0] = "El Presidente y su gabinete.";
 choices[10][1] = "El Presidente y sus Ministros.";
 choices[10][2] = "El Rey y el Presidente.";
 choices[10][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[10] = choices[10][2];
 units[10] = "1";
 comments[10] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[11]= "12)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[11]= new Array();
 choices[11][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[11][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[11][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[11][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[11] = choices[11][2];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[12]= "13)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[12]= new Array();
 choices[12][0] = "El Presidente del Consejo Europeo.";
 choices[12][1] = "La Comisi&oacute;n.";
 choices[12][2] = "El Consejo.";
 choices[12][3] = "El Parlamento Europeo.";
 answers[12] = choices[12][2];
 units[12] = "5";
 comments[12] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[13]= "14)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[13]= new Array();
 choices[13][0] = "IANA";
 choices[13][1] = "ISOC";
 choices[13][2] = "IETF";
 choices[13][3] = "IAB";
 answers[13] = choices[13][0];
 units[13] = "103";
 comments[13] = "Id Pregunta: 67. AGE A1 2015";


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[14]= new Array();
 choices[14][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[14][1] = "Intervenci&oacute;n formal y material.";
 choices[14][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[14][3] = "Intervenci&oacute;n formal y general.";
 answers[14] = choices[14][1];
 units[14] = "10";
 comments[14] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[15]= "16)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[15]= new Array();
 choices[15][0] = "La CETIC";
 choices[15][1] = "Los Ministerios";
 choices[15][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[15][3] = "Ninguno de los anteriores";
 answers[15] = choices[15][1];
 units[15] = "19";
 comments[15] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[16]= "17)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[16]= new Array();
 choices[16][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[16][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[16][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[16][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[16] = choices[16][1];
 units[16] = "77";
 comments[16] = "Id Pregunta: 688. Art&iacute;culo 44 del Reglamento 910/2014";


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[17]= new Array();
 choices[17][0] = "Backlog refinement";
 choices[17][1] = "Backlog refinement";
 choices[17][2] = "A y b son correctas";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][2];
 units[17] = "34, 84";
 comments[17] = "Id Pregunta: 727. Metodologias &aacute;giles";


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[18]= "19)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[18]= new Array();
 choices[18][0] = "El nombre y el tipo de correspondencia.";
 choices[18][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[18][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[18][3] = "El nombre y el grado.";
 answers[18] = choices[18][1];
 units[18] = "85";
 comments[18] = "Id Pregunta: 634. Junta de Extremadura A1 2015";


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[19]= "20)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[19]= new Array();
 choices[19][0] = "61";
 choices[19][1] = "53";
 choices[19][2] = "65";
 choices[19][3] = "67";
 answers[19] = choices[19][1];
 units[19] = "1";
 comments[19] = "Id Pregunta: 248. CONSTITUCION1978";


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[20][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[20][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[20][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[20] = choices[20][0];
 units[20] = "1";
 comments[20] = "Id Pregunta: 218. CONSTITUCION1978";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[21]= new Array();
 choices[21][0] = "Orientaci&oacute;n a objetos";
 choices[21][1] = "MapReduce";
 choices[21][2] = "Pipeline filtering";
 choices[21][3] = "Programaci&oacute;n funcional";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 659. ";


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[22]= "23)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[22]= new Array();
 choices[22][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[22][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[22][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[22][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[22] = choices[22][1];
 units[22] = "92";
 comments[22] = "Id Pregunta: 702. INTEGRACION CONTINUA";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[23]= new Array();
 choices[23][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[23][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[23][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[23][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[23] = choices[23][2];
 units[23] = "10";
 comments[23] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[24]= "25)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[24]= new Array();
 choices[24][0] = "Parcial.";
 choices[24][1] = "Sectorial.";
 choices[24][2] = "Tranversal.";
 choices[24][3] = "Vertical.";
 answers[24] = choices[24][2];
 units[24] = "14";
 comments[24] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[25]= new Array();
 choices[25][0] = "Diagrama de clases";
 choices[25][1] = "Diagrama de componentes";
 choices[25][2] = "Diagrama de estructura";
 choices[25][3] = "Diagrama de paquetes";
 answers[25] = choices[25][0];
 units[25] = "91";
 comments[25] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[26]= "27)  El Tribunal de Justicia est&aacute; formado por:";
 choices[26]= new Array();
 choices[26][0] = "Un Juez de cada Estado miembro.";
 choices[26][1] = "Por dos Jueces de cada Estado miembro.";
 choices[26][2] = "Por veinte Jueces.";
 choices[26][3] = "Por ocho Jueces.";
 answers[26] = choices[26][0];
 units[26] = "5";
 comments[26] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[27]= "28)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[27]= new Array();
 choices[27][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[27][1] = "Anteriormente se denominaba Sonar.";
 choices[27][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[27][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[27] = choices[27][2];
 units[27] = "92";
 comments[27] = "Id Pregunta: 272. INTEGRACION CONTINUA";


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[28]= "29)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[28]= new Array();
 choices[28][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[28][1] = "La CETIC";
 choices[28][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[28][3] = "El MHFP";
 answers[28] = choices[28][0];
 units[28] = "19";
 comments[28] = "Id Pregunta: 593. Estrategia TIC";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[29]= "30)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[29]= new Array();
 choices[29][0] = "SMB3";
 choices[29][1] = "AFP";
 choices[29][2] = "NFS";
 choices[29][3] = "FTP";
 answers[29] = choices[29][0];
 units[29] = "59";
 comments[29] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[30]= "31)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[30][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[30][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[30][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[30] = choices[30][2];
 units[30] = "1";
 comments[30] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[31]= new Array();
 choices[31][0] = "La Ley General Tributaria.";
 choices[31][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[31][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[31][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[31] = choices[31][2];
 units[31] = "10";
 comments[31] = "Id Pregunta: 495. PRESUPUESTOS GENERALES";


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[32]= "33)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[32]= new Array();
 choices[32][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[32][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[32][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[32][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[32] = choices[32][0];
 units[32] = "62";
 comments[32] = "Id Pregunta: 12. AGE A1 2015";


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[33]= "34)  LA estructura de la Estrategia TIC:";
 choices[33]= new Array();
 choices[33][0] = "5 principios rectores, 7 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[33][1] = "5 principios rectores, 5 principios estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[33][2] = "5 principios rectores, 5 principios estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[33][3] = "5 principios rectores, 6 principios estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "28";
 comments[33] = "Id Pregunta: 738. Estrategia TIC";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[34]= "35)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[34]= new Array();
 choices[34][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[34][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[34][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[34][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[34] = choices[34][2];
 units[34] = "7";
 comments[34] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[35]= "36)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[35]= new Array();
 choices[35][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[35][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[35][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[35][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[35] = choices[35][2];
 units[35] = "26";
 comments[35] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[36]= "37)  Son bases de datos NoSQL:";
 choices[36]= new Array();
 choices[36][0] = "MongoDB y Maria DB";
 choices[36][1] = "HBase y Dynamo";
 choices[36][2] = "MariaDB, Cassandra y BigTable";
 choices[36][3] = "La A) y la C)";
 answers[36] = choices[36][1];
 units[36] = "73";
 comments[36] = "Id Pregunta: 104. ";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[37]= "38)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Un informe de impacto de g&eacute;nero.";
 choices[37][1] = "Un programa de igualdad de oportunidades.";
 choices[37][2] = "Un plan de Igualdad de Oportunidades.";
 choices[37][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[37] = choices[37][0];
 units[37] = "14";
 comments[37] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[38]= "39)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[38]= new Array();
 choices[38][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[38][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[38][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[38][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[38] = choices[38][3];
 units[38] = "7";
 comments[38] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[39]= "40)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[39][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[39][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[39][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[39] = choices[39][2];
 units[39] = "83";
 comments[39] = "Id Pregunta: 56. AGE A1 2015";


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[40]= "41)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Incremental, diferencial, completa";
 choices[40][1] = "Completa, incremental, diferencial";
 choices[40][2] = "Completa, diferencial, incremental";
 choices[40][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[40] = choices[40][0];
 units[40] = "53";
 comments[40] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[41]= "42)  En el sistema operativo Unix/Linux, el comando id:";
 choices[41]= new Array();
 choices[41][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[41][1] = "El comando id no existe.";
 choices[41][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[41][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[41] = choices[41][0];
 units[41] = "57";
 comments[41] = "Id Pregunta: 637. Junta de Extremadura A1 2015";


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[42]= "43)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[42]= new Array();
 choices[42][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[42][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[42][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[42][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[42] = choices[42][1];
 units[42] = "5";
 comments[42] = "Id Pregunta: 339. UNION EUROPEA";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[43]= "44)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[43]= new Array();
 choices[43][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[43][1] = "mediante resoluci&oacute;n judicial especial";
 choices[43][2] = "&uacute;nicamente mediante poder notarial";
 choices[43][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[43] = choices[43][3];
 units[43] = "7";
 comments[43] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[44]= "45)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[44]= new Array();
 choices[44][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[44][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[44][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[44][3] = "Todas son correctas.";
 answers[44] = choices[44][0];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[45]= "46)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[45]= new Array();
 choices[45][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[45][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[45][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[45][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[45] = choices[45][0];
 units[45] = "8";
 comments[45] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[46]= "47)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[46]= new Array();
 choices[46][0] = "El Rey.";
 choices[46][1] = "El Jefe del Estado.";
 choices[46][2] = "El Gobierno.";
 choices[46][3] = "El Presidente del Gobierno.";
 answers[46] = choices[46][2];
 units[46] = "1";
 comments[46] = "Id Pregunta: 208. CONSTITUCION1978";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[47]= "48)  La recusaci&oacute;n pueden promoverla...";
 choices[47]= new Array();
 choices[47][0] = "Cualquier &oacute;rgano";
 choices[47][1] = "El interesado";
 choices[47][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[47][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[47] = choices[47][0];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[48]= "49)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[48]= new Array();
 choices[48][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[48][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[48][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[48][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[48] = choices[48][1];
 units[48] = "14";
 comments[48] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[49]= "50)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[49]= new Array();
 choices[49][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[49][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[49][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[49][3] = "Todas las respuestas son correctas.";
 answers[49] = choices[49][3];
 units[49] = "50";
 comments[49] = "Id Pregunta: 620. Junta de Extremadura A1 2015";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[50]= "51)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[50]= new Array();
 choices[50][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[50][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[50][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[50][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[50] = choices[50][1];
 units[50] = "19";
 comments[50] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[51]= "52)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[51]= new Array();
 choices[51][0] = "A los ministros.";
 choices[51][1] = "Las respuestas a) y b) son correctas.";
 choices[51][2] = "Las respuestas a) y b) no son correctas.";
 choices[51][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[51] = choices[51][1];
 units[51] = "10";
 comments[51] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[52]= "53)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[52]= new Array();
 choices[52][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[52][1] = "Static &amp; Active process for REsolution Bank.";
 choices[52][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[52][3] = "Super Active REsponse for Banks";
 answers[52] = choices[52][0];
 units[52] = "12";
 comments[52] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[53]= "54)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[53]= new Array();
 choices[53][0] = "personalidad jur&iacute;dica propia";
 choices[53][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[53][2] = "personalidad jur&iacute;dica plena";
 choices[53][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[53] = choices[53][1];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[54]= "55)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[54]= new Array();
 choices[54][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[54][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[54][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[54][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[54] = choices[54][3];
 units[54] = "10";
 comments[54] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[55]= "56)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[55]= new Array();
 choices[55][0] = "la poblaci&oacute;n del territorio";
 choices[55][1] = "el volumen de gesti&oacute;n";
 choices[55][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[55][3] = "todas son correctas";
 answers[55] = choices[55][3];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[56]= "57)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[56]= new Array();
 choices[56][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[56][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[56][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[56][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[56] = choices[56][3];
 units[56] = "10";
 comments[56] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[57]= "58)  Un wireframe es:";
 choices[57]= new Array();
 choices[57][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[57][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[57][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[57][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[57] = choices[57][3];
 units[57] = "62";
 comments[57] = "Id Pregunta: 4. AGE A1 2015";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[58]= "59)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[58]= new Array();
 choices[58][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[58][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[58][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[58][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[58] = choices[58][2];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qu&eacute; es SonarQube?";
 choices[59]= new Array();
 choices[59][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[59][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[59][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[59][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[59] = choices[59][2];
 units[59] = "92";
 comments[59] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[60]= new Array();
 choices[60][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[60][1] = "Por Orden Ministerial.";
 choices[60][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[60][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[60] = choices[60][0];
 units[60] = "1";
 comments[60] = "Id Pregunta: 247. CONSTITUCION1978";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[61]= "62)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[61]= new Array();
 choices[61][0] = "Unidad de igualdad.";
 choices[61][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[61][2] = "Ninguna de las anteriores.";
 choices[61][3] = "A y B son correctas.";
 answers[61] = choices[61][1];
 units[61] = "14";
 comments[61] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[62]= "63)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[62]= new Array();
 choices[62][0] = "Los propios miembros del Tribunal.";
 choices[62][1] = "El Consejo de Europa.";
 choices[62][2] = "El Consejo Europeo.";
 choices[62][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[62] = choices[62][0];
 units[62] = "5";
 comments[62] = "Id Pregunta: 301. UNION EUROPEA";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[63]= "64)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[63]= new Array();
 choices[63][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[63][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[63][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[63][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[63] = choices[63][0];
 units[63] = "5";
 comments[63] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[64]= "65)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[64]= new Array();
 choices[64][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[64][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[64][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[64][3] = "todas son correctas";
 answers[64] = choices[64][3];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[65]= "66)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[65][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[65][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[65][3] = "cualquiera que sea el estado del procedimiento";
 answers[65] = choices[65][3];
 units[65] = "7";
 comments[65] = "Id Pregunta: 525. LEY 39/2015";


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[66]= "67)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[66]= new Array();
 choices[66][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[66][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[66][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[66][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[66] = choices[66][3];
 units[66] = "22";
 comments[66] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[67]= new Array();
 choices[67][0] = "Art&iacute;culo 9.1 CE.";
 choices[67][1] = "Art&iacute;culo 53 CE.";
 choices[67][2] = "Art&iacute;culo 14 CE.";
 choices[67][3] = "Art&iacute;culo 16 CE.";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[68]= new Array();
 choices[68][0] = "absoluta de las Cortes Generales.";
 choices[68][1] = "absoluta del Congreso de los Diputados.";
 choices[68][2] = "simple de las Cortes Generales.";
 choices[68][3] = "simple del Congreso de los Diputados.";
 answers[68] = choices[68][3];
 units[68] = "1";
 comments[68] = "Id Pregunta: 173. CONSTITUCION1978";


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[69]= "70)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[69]= new Array();
 choices[69][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[69][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[69][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[69][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[69] = choices[69][3];
 units[69] = "10";
 comments[69] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[70]= "71)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[70]= new Array();
 choices[70][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[70][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[70][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[70][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[70] = choices[70][1];
 units[70] = "5";
 comments[70] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[71]= new Array();
 choices[71][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[71][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[71][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[71][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[71] = choices[71][0];
 units[71] = "5";
 comments[71] = "Id Pregunta: 309. UNION EUROPEA";


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[72]= new Array();
 choices[72][0] = "Al Consejo Europeo.";
 choices[72][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[72][2] = "A la Comisi&oacute;n Europea.";
 choices[72][3] = "Al Parlamento Europeo.";
 answers[72] = choices[72][2];
 units[72] = "5";
 comments[72] = "Id Pregunta: 296. UNION EUROPEA";


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[73]= new Array();
 choices[73][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[73][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[73][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[73][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[73] = choices[73][3];
 units[73] = "19";
 comments[73] = "Id Pregunta: 16. AGE A1 2015";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[74]= "75)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[74]= new Array();
 choices[74][0] = "La Comisi&oacute;n.";
 choices[74][1] = "El Consejo de Europa.";
 choices[74][2] = "El Consejo Europeo.";
 choices[74][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 300. UNION EUROPEA";


