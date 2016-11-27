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

//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[0]= "1)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[0]= new Array();
 choices[0][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[0][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[0][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[0][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[0] = choices[0][1];
 units[0] = "63";
 comments[0] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[1]= "2)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[1]= new Array();
 choices[1][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[1][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[1][2] = "Un programa de igualdad.";
 choices[1][3] = "Un estatuto de igualdad.";
 answers[1] = choices[1][0];
 units[1] = "14";
 comments[1] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[2]= "3)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[2]= new Array();
 choices[2][0] = "La Comisi&oacute;n.";
 choices[2][1] = "El Consejo de Europa.";
 choices[2][2] = "El Consejo Europeo.";
 choices[2][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[2] = choices[2][3];
 units[2] = "5";
 comments[2] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[3]= "4)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[3]= new Array();
 choices[3][0] = "El 23 de julio de 1952.";
 choices[3][1] = "El 18 de abril de 1951.";
 choices[3][2] = "El 16 de abril de 1948.";
 choices[3][3] = "d)Ninguna de las respuestas son correctas.";
 answers[3] = choices[3][0];
 units[3] = "5";
 comments[3] = "Id Pregunta: 349. UNION EUROPEA";


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[4]= "5)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[4]= new Array();
 choices[4][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[4][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[4][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[4][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[4] = choices[4][2];
 units[4] = "43";
 comments[4] = "Id Pregunta: 436. SERVICIOS COMUNES";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[5]= "6)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[5]= new Array();
 choices[5][0] = "De los interesados en el procedimiento";
 choices[5][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[5][2] = "Disposiciones generales";
 choices[5][3] = "De los actos administrativos";
 answers[5] = choices[5][2];
 units[5] = "7";
 comments[5] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[6]= "7)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[6]= new Array();
 choices[6][0] = "El Presidente del Consejo Europeo.";
 choices[6][1] = "La Comisi&oacute;n.";
 choices[6][2] = "El Consejo.";
 choices[6][3] = "El Parlamento Europeo.";
 answers[6] = choices[6][2];
 units[6] = "5";
 comments[6] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[7]= "8)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[7]= new Array();
 choices[7][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[7][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[7][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[7][3] = "todas son correctas";
 answers[7] = choices[7][3];
 units[7] = "7";
 comments[7] = "Id Pregunta: 531. LEY 39/2015";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[8]= new Array();
 choices[8][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[8][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[8][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[8][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[8] = choices[8][3];
 units[8] = "101";
 comments[8] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[9]= "10)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[9]= new Array();
 choices[9][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[9][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[9][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[9][3] = "Estos sistemas es imposible clasificarlos.";
 answers[9] = choices[9][1];
 units[9] = "119";
 comments[9] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[10]= "11)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[10]= new Array();
 choices[10][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[10][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[10][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[10][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[10] = choices[10][0];
 units[10] = "10";
 comments[10] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[11]= "12)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[11]= new Array();
 choices[11][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[11][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[11][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[11][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[11] = choices[11][2];
 units[11] = "22";
 comments[11] = "Id Pregunta: 705. &Eacute;tica p&uacute;blica";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[12]= "13)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[12]= new Array();
 choices[12][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[12][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[12][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[12][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[12] = choices[12][1];
 units[12] = "1";
 comments[12] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[13]= new Array();
 choices[13][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[13][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[13][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[13][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[13] = choices[13][2];
 units[13] = "10";
 comments[13] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[14]= "15)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[14]= new Array();
 choices[14][0] = "Subgrupo A1";
 choices[14][1] = "Subgrupo A2";
 choices[14][2] = "Subgrupo B";
 choices[14][3] = "Subgrupo C1";
 answers[14] = choices[14][0];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[15]= new Array();
 choices[15][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[15][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[15][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[15][3] = "El Instituto de la Mujer de Extremadura.";
 answers[15] = choices[15][3];
 units[15] = "14";
 comments[15] = "Id Pregunta: 645. Junta de Extremadura A1 2015";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[16]= "17)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[16]= new Array();
 choices[16][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[16][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[16][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[16][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[16] = choices[16][2];
 units[16] = "14";
 comments[16] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[17]= new Array();
 choices[17][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[17][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[17][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[17][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[17] = choices[17][0];
 units[17] = "1";
 comments[17] = "Id Pregunta: 202. CONSTITUCION1978";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[18]= "19)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[18]= new Array();
 choices[18][0] = "los registros mercantiles";
 choices[18][1] = "los registros de la propiedad";
 choices[18][2] = "los protocolos notariales";
 choices[18][3] = "todas son correctas";
 answers[18] = choices[18][3];
 units[18] = "7";
 comments[18] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[19]= "20)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[19][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[19][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[19][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[19] = choices[19][0];
 units[19] = "19";
 comments[19] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[20]= new Array();
 choices[20][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[20][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[20][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[20][3] = "Ninguna de las anteriores.";
 answers[20] = choices[20][1];
 units[20] = "92";
 comments[20] = "Id Pregunta: 699. INTEGRACION CONTINUA";


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[21]= "22)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[21]= new Array();
 choices[21][0] = "Con el a&ntilde;o anterior.";
 choices[21][1] = "Con los tres a&ntilde;os anteriores.";
 choices[21][2] = "Con el a&ntilde;o natural.";
 choices[21][3] = "Con los dos a&ntilde;os anteriores.";
 answers[21] = choices[21][2];
 units[21] = "10";
 comments[21] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[22]= "23)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[22]= new Array();
 choices[22][0] = "formular solicitudes";
 choices[22][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[22][2] = "presentar declaraciones responsables o comunicaciones";
 choices[22][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[22] = choices[22][1];
 units[22] = "7";
 comments[22] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[23]= "24)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[23]= new Array();
 choices[23][0] = "Los ocupados y los parados activos";
 choices[23][1] = "S&oacute;lo los ocupados";
 choices[23][2] = "Los ocupados y los inactivos";
 choices[23][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[23] = choices[23][0];
 units[23] = "12";
 comments[23] = "Id Pregunta: 564. Modelo econ&oacute;mico";


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


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[25]= "26)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[25][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[25][2] = "Ambas son correctas.";
 choices[25][3] = "La A y B son incorrectas.";
 answers[25] = choices[25][2];
 units[25] = "14";
 comments[25] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[26]= "27)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[26]= new Array();
 choices[26][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[26][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[26][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[26][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[26] = choices[26][0];
 units[26] = "1";
 comments[26] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[27]= "28)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[27]= new Array();
 choices[27][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[27][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[27][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[27][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[27] = choices[27][0];
 units[27] = "101";
 comments[27] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[28]= "29)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[28]= new Array();
 choices[28][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[28][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[28][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[28][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[28] = choices[28][1];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[29]= "30)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[29]= new Array();
 choices[29][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[29][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[29][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[29][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[29] = choices[29][2];
 units[29] = "7";
 comments[29] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[30]= "31)  El sector p&uacute;blico institucional se integra por:";
 choices[30]= new Array();
 choices[30][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[30][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[30][2] = "las Universidades p&uacute;blicas";
 choices[30][3] = "todas son correctas";
 answers[30] = choices[30][3];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 764. Ley 40/2015";


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[31]= "32)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[31]= new Array();
 choices[31][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[31][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[31][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[31][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[31] = choices[31][0];
 units[31] = "1";
 comments[31] = "Id Pregunta: 256. CONSTITUCION1978";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[32]= "33)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[32]= new Array();
 choices[32][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[32][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[32][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[32][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[32] = choices[32][3];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[33]= "34)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[33]= new Array();
 choices[33][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[33][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[33][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[33][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[33] = choices[33][1];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 836. Ley 40/2015";


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[34]= "35)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[34]= new Array();
 choices[34][0] = "Cinco a&ntilde;os.";
 choices[34][1] = "Cuatro a&ntilde;os.";
 choices[34][2] = "Tres a&ntilde;os.";
 choices[34][3] = "Seis meses.";
 answers[34] = choices[34][2];
 units[34] = "5";
 comments[34] = "Id Pregunta: 302. UNION EUROPEA";


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[35]= new Array();
 choices[35][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[35][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[35][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[35][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[35] = choices[35][1];
 units[35] = "22";
 comments[35] = "Id Pregunta: 122. ";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[36]= "37)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[36]= new Array();
 choices[36][0] = "Estrasburgo.";
 choices[36][1] = "Bruselas.";
 choices[36][2] = "Luxemburgo.";
 choices[36][3] = "Holanda.";
 answers[36] = choices[36][0];
 units[36] = "5";
 comments[36] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[37]= "38)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[37][1] = "Las inversiones reales y financieras.";
 choices[37][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[37][3] = "Las transferencias de capital y las inversiones reales.";
 answers[37] = choices[37][3];
 units[37] = "10";
 comments[37] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[38]= new Array();
 choices[38][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[38][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[38][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[38][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[38] = choices[38][0];
 units[38] = "1";
 comments[38] = "Id Pregunta: 199. CONSTITUCION1978";


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[39]= new Array();
 choices[39][0] = "La CETIC";
 choices[39][1] = "Los Ministerios";
 choices[39][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[39][3] = "Ninguno de los anteriores";
 answers[39] = choices[39][1];
 units[39] = "19";
 comments[39] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[40]= "41)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[40]= new Array();
 choices[40][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[40][1] = "En el extranjero.";
 choices[40][2] = "Ninguna es correcta.";
 choices[40][3] = "Ambas son correctas.";
 answers[40] = choices[40][0];
 units[40] = "14";
 comments[40] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[41]= new Array();
 choices[41][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[41][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[41][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = choices[41][1];
 units[41] = "19";
 comments[41] = "Id Pregunta: 586. Estrategia TIC";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[42]= "43)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[42]= new Array();
 choices[42][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[42][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[42][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[42][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[42] = choices[42][1];
 units[42] = "14";
 comments[42] = "Id Pregunta: 676. Dependencia";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[43]= "44)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[43]= new Array();
 choices[43][0] = "El Parlamento Europeo.";
 choices[43][1] = "Todas las respuestas son correctas.";
 choices[43][2] = "La Comisi&oacute;n Europea.";
 choices[43][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Qu&eacute; facilita un ORM?";
 choices[44]= new Array();
 choices[44][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[44][1] = "Conversi&oacute;n de objetos a documentos";
 choices[44][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[44][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[44] = choices[44][0];
 units[44] = "62";
 comments[44] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[45]= "46)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[45]= new Array();
 choices[45][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[45][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[45][2] = "La normativa reguladora de cada derecho.";
 choices[45][3] = "Ley 50/1997, del Gobierno.";
 answers[45] = choices[45][2];
 units[45] = "10";
 comments[45] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[46]= "47)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[46]= new Array();
 choices[46][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[46][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[46][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[46][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[46] = choices[46][3];
 units[46] = "5";
 comments[46] = "Id Pregunta: 317. UNION EUROPEA";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "De la C&aacute;mara respectiva.";
 choices[47][1] = "Del Rey.";
 choices[47][2] = "Del Tribunal Constitucional.";
 choices[47][3] = "Del Tribunal Supremo.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[48]= new Array();
 choices[48][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[48][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[48][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[48][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[48] = choices[48][1];
 units[48] = "1";
 comments[48] = "Id Pregunta: 219. CONSTITUCION1978";


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[49]= "50)  Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban:";
 choices[49]= new Array();
 choices[49][0] = "Visualizar el trabajo o el flujo de trabajo. ";
 choices[49][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[49][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[49][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[49] = choices[49][3];
 units[49] = "34, 84";
 comments[49] = "Id Pregunta: 731. Metodologias &aacute;giles";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[50]= "51)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[50]= new Array();
 choices[50][0] = "La Administraci&oacute;n General del Estado";
 choices[50][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[50][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[50][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[50] = choices[50][1];
 units[50] = "26";
 comments[50] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[51]= "52)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[51]= new Array();
 choices[51][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[51][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[51][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[51][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[51] = choices[51][3];
 units[51] = "77";
 comments[51] = "Id Pregunta: 48. AGE A1 2015";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[52]= "53)  Los Reglamentos no se caracterizan por:";
 choices[52]= new Array();
 choices[52][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[52][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[52][2] = "Ser obligatorios.";
 choices[52][3] = "No poseer alcance general.";
 answers[52] = choices[52][3];
 units[52] = "5";
 comments[52] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[53]= new Array();
 choices[53][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[53][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[53][2] = "Servicio de seguridad gestionada";
 choices[53][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[53] = choices[53][1];
 units[53] = "26";
 comments[53] = "Id Pregunta: 58. AGE A1 2015";


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[54]= "55)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[54]= new Array();
 choices[54][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[54][1] = "la Organizaci&oacute;n Territorial";
 choices[54][2] = "la Organizaci&oacute;n sectorial";
 choices[54][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[54] = choices[54][2];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 785. Ley 40/2015";


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[55]= "56)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[55]= new Array();
 choices[55][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[55][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[55][2] = "A partir del 1 de enero de 2015";
 choices[55][3] = "A partir del 1 de julio de 2016";
 answers[55] = choices[55][1];
 units[55] = "77";
 comments[55] = "Id Pregunta: 690. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[56]= new Array();
 choices[56][0] = "El Consejo Nacional de la Mujer.";
 choices[56][1] = "El Consejo de la Mujer.";
 choices[56][2] = "El Instituto de la Mujer.";
 choices[56][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[56] = choices[56][3];
 units[56] = "14";
 comments[56] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[57]= new Array();
 choices[57][0] = "El 2 de Octubre de 2015";
 choices[57][1] = "El 15 de Septiembre de 2015";
 choices[57][2] = "El 1 de Octubre de 2015";
 choices[57][3] = "El 5 de Octubre de 2015";
 answers[57] = choices[57][0];
 units[57] = "19";
 comments[57] = "Id Pregunta: 577. Estrategia TIC";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale la respuesta correcta:";
 choices[58]= new Array();
 choices[58][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[58][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[58][2] = "Las respuestas A y B son correctas.";
 choices[58][3] = "Las respuestas A y B son falsas.";
 answers[58] = choices[58][2];
 units[58] = "5";
 comments[58] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[59]= new Array();
 choices[59][0] = "De los derechos y deberes fundamentales.";
 choices[59][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[59][2] = "Derechos y libertades.";
 choices[59][3] = "De la Corona.";
 answers[59] = choices[59][1];
 units[59] = "1";
 comments[59] = "Id Pregunta: 245. CONSTITUCION1978";


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[60]= "61)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[60]= new Array();
 choices[60][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[60][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[60][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[60][3] = "todas son correctas";
 answers[60] = choices[60][3];
 units[60] = "7";
 comments[60] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[61]= "62)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[61]= new Array();
 choices[61][0] = "El Ministerio de Igualdad.";
 choices[61][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[61][2] = "Ambas son correctas.";
 choices[61][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[61] = choices[61][1];
 units[61] = "14";
 comments[61] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[62]= new Array();
 choices[62][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[62][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[62][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[62][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[62] = choices[62][1];
 units[62] = "12";
 comments[62] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[63]= "64)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[63]= new Array();
 choices[63][0] = "Entradas (entities).";
 choices[63][1] = "Atributos (attribs).";
 choices[63][2] = "M&oacute;dulos (modules).";
 choices[63][3] = "Objetos (objects).";
 answers[63] = choices[63][0];
 units[63] = "74";
 comments[63] = "Id Pregunta: 622. Junta de Extremadura A1 2015";


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[64]= "65)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[64]= new Array();
 choices[64][0] = "Ley Org&aacute;nica.";
 choices[64][1] = "Ley de Bases.";
 choices[64][2] = "Ley ordinaria.";
 choices[64][3] = "Mandato.";
 answers[64] = choices[64][1];
 units[64] = "1";
 comments[64] = "Id Pregunta: 189. CONSTITUCION1978";


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[65]= "66)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[65]= new Array();
 choices[65][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[65][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[65][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[65][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[65] = choices[65][0];
 units[65] = "1";
 comments[65] = "Id Pregunta: 241. CONSTITUCION1978";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[66]= "67)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[66]= new Array();
 choices[66][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[66][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[66][2] = "Ministerio de la Presidencia";
 choices[66][3] = "Ministerio de Fomento";
 answers[66] = choices[66][2];
 units[66] = "22";
 comments[66] = "Id Pregunta: 706. Portal de Transparencia";


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[67]= "68)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[67]= new Array();
 choices[67][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[67][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[67][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[67][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[67] = choices[67][0];
 units[67] = "45";
 comments[67] = "Id Pregunta: 628. Junta de Extremadura A1 2015";


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[68]= "69)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[68]= new Array();
 choices[68][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[68][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[68][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[68][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[68] = choices[68][3];
 units[68] = "7";
 comments[68] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[69]= "70)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[69]= new Array();
 choices[69][0] = "P&uacute;blica.";
 choices[69][1] = "Privada.";
 choices[69][2] = "Ambas son correctas.";
 choices[69][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[70]= "71)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[70]= new Array();
 choices[70][0] = "El Jefe del Estado.";
 choices[70][1] = "El Tribunal Constitucional.";
 choices[70][2] = "El Congreso de los Diputados.";
 choices[70][3] = "Las Cortes Generales.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 235. CONSTITUCION1978";


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[71]= "72)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[71]= new Array();
 choices[71][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[71][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[71][2] = "Al Congreso de los Diputados.";
 choices[71][3] = "Al Gobierno.";
 answers[71] = choices[71][0];
 units[71] = "1";
 comments[71] = "Id Pregunta: 234. CONSTITUCION1978";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[72]= new Array();
 choices[72][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[72][1] = "La Direcci&oacute;n de la Competencia.";
 choices[72][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[72][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[72] = choices[72][0];
 units[72] = "121";
 comments[72] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[73]= "74)  Indica la respuesta correcta";
 choices[73]= new Array();
 choices[73][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[73][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[73][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[73][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[73] = choices[73][0];
 units[73] = "34, 84";
 comments[73] = "Id Pregunta: 728. Metodologias &aacute;giles";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[74]= new Array();
 choices[74][0] = "Art. 25 LO, 3/2007.";
 choices[74][1] = "Art. 23 LO, 3/2007.";
 choices[74][2] = "Art. 14 LO, 3/2007.";
 choices[74][3] = "Ninguna es correcta, es el art. 13.";
 answers[74] = choices[74][0];
 units[74] = "14";
 comments[74] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


