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

//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[0]= "1)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[0]= new Array();
 choices[0][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[0][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[0][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[0][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[0] = choices[0][1];
 units[0] = "63";
 comments[0] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[1]= "2)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[1]= new Array();
 choices[1][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[1][1] = "La delimitaci&oacute;n de su territorio.";
 choices[1][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[1][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[1] = choices[1][2];
 units[1] = "1";
 comments[1] = "Id Pregunta: 228. CONSTITUCION1978";


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[2]= "3)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[2]= new Array();
 choices[2][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[2][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[2][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[2][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[2] = choices[2][3];
 units[2] = "89";
 comments[2] = "Id Pregunta: 95. AGE A1 2015";


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[3]= new Array();
 choices[3][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[3][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[3][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[3][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[3] = choices[3][2];
 units[3] = "19";
 comments[3] = "Id Pregunta: 753. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[4]= new Array();
 choices[4][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[4][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[4][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[4][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[4] = choices[4][1];
 units[4] = "7";
 comments[4] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[5]= "6)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[5]= new Array();
 choices[5][0] = "Burn-up chart";
 choices[5][1] = "Arquitectural Skype";
 choices[5][2] = "Burn-down chart";
 choices[5][3] = "Definition of done";
 answers[5] = choices[5][1];
 units[5] = "34, 84";
 comments[5] = "Id Pregunta: 729. Metodologias &aacute;giles";


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[6]= "7)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[6]= new Array();
 choices[6][0] = "Presencia equilibrada.";
 choices[6][1] = "Presencia paritaria.";
 choices[6][2] = "Presencia consensuada.";
 choices[6][3] = "presencia horizontal.";
 answers[6] = choices[6][0];
 units[6] = "14";
 comments[6] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[7]= "8)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[7]= new Array();
 choices[7][0] = "La Comisi&oacute;n.";
 choices[7][1] = "El Consejo de Europa.";
 choices[7][2] = "El Consejo Europeo.";
 choices[7][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[7] = choices[7][3];
 units[7] = "5";
 comments[7] = "Id Pregunta: 300. UNION EUROPEA";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[8]= "9)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[8]= new Array();
 choices[8][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[8][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[8][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[8][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[8] = choices[8][1];
 units[8] = "56";
 comments[8] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[9]= "10)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[9]= new Array();
 choices[9][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[9][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[9][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[9][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[9] = choices[9][2];
 units[9] = "85";
 comments[9] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[10]= "11)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[10]= new Array();
 choices[10][0] = "Windows Phone";
 choices[10][1] = "Blackberry";
 choices[10][2] = "iOS";
 choices[10][3] = "Android";
 answers[10] = choices[10][3];
 units[10] = "59";
 comments[10] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[11]= "12)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[11]= new Array();
 choices[11][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[11][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[11][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[11][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[11] = choices[11][0];
 units[11] = "12";
 comments[11] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[12]= "13)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[12]= new Array();
 choices[12][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[12][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[12][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[12][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[12] = choices[12][3];
 units[12] = "7";
 comments[12] = "Id Pregunta: 27. AGE A1 2015";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[13]= "14)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[13]= new Array();
 choices[13][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[13][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[13][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[13][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[13] = choices[13][2];
 units[13] = "7";
 comments[13] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[14]= "15)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[14]= new Array();
 choices[14][0] = "Subsecretario";
 choices[14][1] = "Subdirector general";
 choices[14][2] = "Secretario de Estado";
 choices[14][3] = "ninguna es correcta";
 answers[14] = choices[14][1];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[15]= "16)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[15]= new Array();
 choices[15][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[15][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[15][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[15][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[15] = choices[15][2];
 units[15] = "7";
 comments[15] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[16]= "17)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[16]= new Array();
 choices[16][0] = "Cinco.";
 choices[16][1] = "Dos.";
 choices[16][2] = "Cuatro.";
 choices[16][3] = "Siete.";
 answers[16] = choices[16][0];
 units[16] = "1";
 comments[16] = "Id Pregunta: 213. CONSTITUCION1978";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[17]= new Array();
 choices[17][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[17][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[17][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[17][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[17] = choices[17][0];
 units[17] = "19";
 comments[17] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[18]= "19)  El Presupuesto por programas sirve para saber...";
 choices[18]= new Array();
 choices[18][0] = "En qu&eacute; nos gastamos el dinero";
 choices[18][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[18][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[18][3] = "Qui&eacute;n se gasta el dinero";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[19]= new Array();
 choices[19][0] = "El 5 de Octubre de 2015";
 choices[19][1] = "El 15 de Octubre de 2015";
 choices[19][2] = "El 15 de Septiembre de 2015";
 choices[19][3] = "El 2 de Octubre de 2015";
 answers[19] = choices[19][2];
 units[19] = "19";
 comments[19] = "Id Pregunta: 582. Estrategia TIC";


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[20]= "21)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[20]= new Array();
 choices[20][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[20][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[20][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[20][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[20] = choices[20][1];
 units[20] = "14";
 comments[20] = "Id Pregunta: 676. Dependencia";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[21]= "22)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[21]= new Array();
 choices[21][0] = "Quince miembros.";
 choices[21][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[21][2] = "Los miembros que determine el Consejo.";
 choices[21][3] = "Un Presidente y quince miembros.";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[22]= "23)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[22]= new Array();
 choices[22][0] = "Ejecutivo";
 choices[22][1] = "Limitativo";
 choices[22][2] = "Estimativo";
 choices[22][3] = "Progresivo";
 answers[22] = choices[22][2];
 units[22] = "10";
 comments[22] = "Id Pregunta: 446. PRESUPUESTOS GENERALES";


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[23]= new Array();
 choices[23][0] = "al menos por 50 Diputados.";
 choices[23][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[23][2] = "por la Mesa del Congreso de los Diputados.";
 choices[23][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[23] = choices[23][1];
 units[23] = "1";
 comments[23] = "Id Pregunta: 183. CONSTITUCION1978";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[24]= "25)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[24]= new Array();
 choices[24][0] = "la poblaci&oacute;n del territorio";
 choices[24][1] = "el volumen de gesti&oacute;n";
 choices[24][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[24][3] = "todas son correctas";
 answers[24] = choices[24][3];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[25]= "26)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[25]= new Array();
 choices[25][0] = "Ejecuci&oacute;n";
 choices[25][1] = "Adjudicaci&oacute;n";
 choices[25][2] = "Licitaci&oacute;n";
 choices[25][3] = "Formalizaci&oacute;n";
 answers[25] = choices[25][3];
 units[25] = "37";
 comments[25] = "Id Pregunta: 69. AGE A1 2015";


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[26]= "27)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[26]= new Array();
 choices[26][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[26][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[26][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[26][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 177. CONSTITUCION1978";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[27]= "28)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[27]= new Array();
 choices[27][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[27][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[27][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[27][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[27] = choices[27][1];
 units[27] = "1";
 comments[27] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[28]= new Array();
 choices[28][0] = "Una ley orginaria.";
 choices[28][1] = "Una ley org&aacute;nica.";
 choices[28][2] = "Una ley de bases.";
 choices[28][3] = "Una ley de transferencia.";
 answers[28] = choices[28][1];
 units[28] = "1";
 comments[28] = "Id Pregunta: 179. CONSTITUCION1978";


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[29]= new Array();
 choices[29][0] = "Nueve.";
 choices[29][1] = "Diez.";
 choices[29][2] = "Siete.";
 choices[29][3] = "Ocho.";
 answers[29] = choices[29][3];
 units[29] = "5";
 comments[29] = "Id Pregunta: 373. UNION EUROPEA";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[30]= new Array();
 choices[30][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[30][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[30][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[30][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[30] = choices[30][3];
 units[30] = "19";
 comments[30] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[31]= "32)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[31]= new Array();
 choices[31][0] = "Alrededor de un 26% del PIB";
 choices[31][1] = "Alrededor de un 11% del PIB";
 choices[31][2] = "Alrededor de un 34% del PIB";
 choices[31][3] = "Alrededor de un 7% del PIB";
 answers[31] = choices[31][1];
 units[31] = "12";
 comments[31] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[32]= new Array();
 choices[32][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[32][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[32][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[32][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[32] = choices[32][2];
 units[32] = "22";
 comments[32] = "Id Pregunta: 704. Ley de transparencia";


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[33]= "34)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[33]= new Array();
 choices[33][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[33][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[33][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[33][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[33] = choices[33][2];
 units[33] = "12";
 comments[33] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[34]= "35)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[34]= new Array();
 choices[34][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[34][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[34][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[34][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[34] = choices[34][3];
 units[34] = "10";
 comments[34] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[35]= "36)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[35]= new Array();
 choices[35][0] = "los registros mercantiles";
 choices[35][1] = "los registros de la propiedad";
 choices[35][2] = "los protocolos notariales";
 choices[35][3] = "todas son correctas";
 answers[35] = choices[35][3];
 units[35] = "7";
 comments[35] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[36]= "37)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[36]= new Array();
 choices[36][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[36][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[36][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[36][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[36] = choices[36][0];
 units[36] = "101";
 comments[36] = "Id Pregunta: 647. Junta de Extremadura A1 2015";


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[37]= new Array();
 choices[37][0] = "Jenkins";
 choices[37][1] = "Hudson";
 choices[37][2] = "SonarQube";
 choices[37][3] = "Todas lo son";
 answers[37] = choices[37][3];
 units[37] = "92";
 comments[37] = "Id Pregunta: 693. INTEGRACION CONTINUA";


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[38]= "39)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[38]= new Array();
 choices[38][0] = "Entradas (entities).";
 choices[38][1] = "Atributos (attribs).";
 choices[38][2] = "M&oacute;dulos (modules).";
 choices[38][3] = "Objetos (objects).";
 answers[38] = choices[38][0];
 units[38] = "74";
 comments[38] = "Id Pregunta: 622. Junta de Extremadura A1 2015";


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[39]= "40)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[39]= new Array();
 choices[39][0] = "los Ministros y los Secretarios de Estado";
 choices[39][1] = "los Subsecretarios y Secretarios generales";
 choices[39][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[39][3] = "los Directores generales";
 answers[39] = choices[39][2];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 791. Ley 40/2015";


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[40]= "41)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[40]= new Array();
 choices[40][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[40][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[40][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[40][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[40] = choices[40][0];
 units[40] = "1";
 comments[40] = "Id Pregunta: 187. CONSTITUCION1978";


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[41]= "42)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[41]= new Array();
 choices[41][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[41][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[41][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[41][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[41] = choices[41][3];
 units[41] = "47";
 comments[41] = "Id Pregunta: 675. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[42]= new Array();
 choices[42][0] = "El Consejo Europeo.";
 choices[42][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[42][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[42][3] = "El Parlamento Europeo.";
 answers[42] = choices[42][0];
 units[42] = "5";
 comments[42] = "Id Pregunta: 313. UNION EUROPEA";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[43]= "44)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[43]= new Array();
 choices[43][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[43][1] = "los Subdelegados del Gobierno en las provincias";
 choices[43][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[43][3] = "a y b son correctas";
 answers[43] = choices[43][3];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[44]= "45)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[44]= new Array();
 choices[44][0] = "los Subsecretarios y los Secretarios generales";
 choices[44][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[44][2] = "los Secretarios de Estado y los Directores generales";
 choices[44][3] = "los Ministros y los Secretarios de Estado";
 answers[44] = choices[44][3];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[45]= "46)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[45]= new Array();
 choices[45][0] = "GROUP BY.";
 choices[45][1] = "COUNT.";
 choices[45][2] = "WHERE.";
 choices[45][3] = "DISTINCT.";
 answers[45] = choices[45][0];
 units[45] = "60";
 comments[45] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[46]= "47)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[46]= new Array();
 choices[46][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[46][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[46][2] = "Un programa de igualdad.";
 choices[46][3] = "Un estatuto de igualdad.";
 answers[46] = choices[46][0];
 units[46] = "14";
 comments[46] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[47]= new Array();
 choices[47][0] = "El Presidente del Senado";
 choices[47][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[47][2] = "El Presidente del Gobierno";
 choices[47][3] = "El Presidente de las Cortes Generales";
 answers[47] = choices[47][2];
 units[47] = "1";
 comments[47] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[48]= "49)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[48]= new Array();
 choices[48][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[48][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[48][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[48][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[48] = choices[48][0];
 units[48] = "19";
 comments[48] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[49]= new Array();
 choices[49][0] = "Lean startup";
 choices[49][1] = "Business Model Canvas";
 choices[49][2] = "Dynamic system Development method";
 choices[49][3] = "Lean software development";
 answers[49] = choices[49][2];
 units[49] = "34";
 comments[49] = "Id Pregunta: 720. Metodologias Lean";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[50]= new Array();
 choices[50][0] = "Categor&iacute;a b&aacute;sica";
 choices[50][1] = "Categor&iacute;a media";
 choices[50][2] = "Categor&iacute;a alta";
 choices[50][3] = "Categor&iacute;a media y alta";
 answers[50] = choices[50][2];
 units[50] = "46";
 comments[50] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[51]= "52)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[51]= new Array();
 choices[51][0] = "la capital del pa&iacute;s";
 choices[51][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[51][2] = "cada una de las provincias";
 choices[51][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[51] = choices[51][1];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[52]= "53)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[52]= new Array();
 choices[52][0] = "La Administraci&oacute;n General del Estado";
 choices[52][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[52][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[52][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[52] = choices[52][1];
 units[52] = "26";
 comments[52] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[53]= new Array();
 choices[53][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[53][1] = "Las CMADs";
 choices[53][2] = "Ambas son correctas.";
 choices[53][3] = "Ninguna es correcta";
 answers[53] = choices[53][2];
 units[53] = "19";
 comments[53] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[54]= "55)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[54]= new Array();
 choices[54][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[54][1] = "mediante resoluci&oacute;n judicial especial";
 choices[54][2] = "&uacute;nicamente mediante poder notarial";
 choices[54][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[54] = choices[54][3];
 units[54] = "7";
 comments[54] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[55]= new Array();
 choices[55][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[55][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[55][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[55][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[55] = choices[55][3];
 units[55] = "77";
 comments[55] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[56]= new Array();
 choices[56][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[56][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[56][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[56][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[56] = choices[56][2];
 units[56] = "7";
 comments[56] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[57]= "58)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[57]= new Array();
 choices[57][0] = "Al Consejo Europeo.";
 choices[57][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[57][2] = "A la Comisi&oacute;n Europea.";
 choices[57][3] = "Al Parlamento Europeo.";
 answers[57] = choices[57][2];
 units[57] = "5";
 comments[57] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[58]= "59)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[58]= new Array();
 choices[58][0] = "El derecho a la propiedad privada.";
 choices[58][1] = "El derecho de asociaci&oacute;n.";
 choices[58][2] = "El derecho de fundaci&oacute;n.";
 choices[58][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[58] = choices[58][1];
 units[58] = "1";
 comments[58] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[59]= new Array();
 choices[59][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[59][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[59][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[59][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[59] = choices[59][0];
 units[59] = "75";
 comments[59] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[60]= "61)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[60]= new Array();
 choices[60][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[60][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[60][2] = "Cinco a&ntilde;os.";
 choices[60][3] = "Ninguna es correcta.";
 answers[60] = choices[60][2];
 units[60] = "5";
 comments[60] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; es Java Web Start?";
 choices[61]= new Array();
 choices[61][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[61][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[61][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[61][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[61] = choices[61][3];
 units[61] = "64";
 comments[61] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[62]= new Array();
 choices[62][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[62][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[62][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[62][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[62] = choices[62][3];
 units[62] = "22";
 comments[62] = "Id Pregunta: 120. ";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[63]= "64)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[63]= new Array();
 choices[63][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[63][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[63][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[63][3] = "Todas son correctas.";
 answers[63] = choices[63][1];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[64]= "65)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[64]= new Array();
 choices[64][0] = "Al Gobierno.";
 choices[64][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[64][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[64][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[64] = choices[64][2];
 units[64] = "10";
 comments[64] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[65]= new Array();
 choices[65][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[65][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[65][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[65][3] = "El software funcionando es la medida principal del progreso.";
 answers[65] = choices[65][2];
 units[65] = "34";
 comments[65] = "Id Pregunta: 43. AGE A1 2015";


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[66]= new Array();
 choices[66][0] = "El 1 de noviembre de 1994.";
 choices[66][1] = "El 1 de noviembre de 1992.";
 choices[66][2] = "El 1 de noviembre de 1995.";
 choices[66][3] = "El 1 de noviembre de 1993.";
 answers[66] = choices[66][3];
 units[66] = "5";
 comments[66] = "Id Pregunta: 348. UNION EUROPEA";


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[67]= "68)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[67]= new Array();
 choices[67][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[67][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[67][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[67][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[67] = choices[67][3];
 units[67] = "1";
 comments[67] = "Id Pregunta: 253. CONSTITUCION1978";


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Qu&eacute; es MongoDB?";
 choices[68]= new Array();
 choices[68][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[68][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[68][2] = "Un sistema gestor de base de datos relacional.";
 choices[68][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[68] = choices[68][1];
 units[68] = "73";
 comments[68] = "Id Pregunta: 31. AGE A1 2015";


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[69]= "70)  El pacto fiscal europeo de 2012 incluye:";
 choices[69]= new Array();
 choices[69][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[69][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[69][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[69][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[69] = choices[69][0];
 units[69] = "5";
 comments[69] = "Id Pregunta: 280. UNION EUROPEA";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[70]= "71)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[70]= new Array();
 choices[70][0] = "6 principios.";
 choices[70][1] = "7 principios.";
 choices[70][2] = "5 principios.";
 choices[70][3] = "6 directrices.";
 answers[70] = choices[70][1];
 units[70] = "28";
 comments[70] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[71]= "72)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[71]= new Array();
 choices[71][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[71][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[71][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[71][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[71] = choices[71][1];
 units[71] = "5";
 comments[71] = "Id Pregunta: 316. UNION EUROPEA";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[72]= new Array();
 choices[72][0] = "PostgreSQL";
 choices[72][1] = "Datawarehouse";
 choices[72][2] = "Snowflake";
 choices[72][3] = "CouchDB";
 answers[72] = choices[72][0];
 units[72] = "61";
 comments[72] = "Id Pregunta: 576. Tema 61. TAI 2016.";


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[73]= "74)  Los Reglamentos no se caracterizan por:";
 choices[73]= new Array();
 choices[73][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[73][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[73][2] = "Ser obligatorios.";
 choices[73][3] = "No poseer alcance general.";
 answers[73] = choices[73][3];
 units[73] = "5";
 comments[73] = "Id Pregunta: 359. UNION EUROPEA";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[74]= "75)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[74]= new Array();
 choices[74][0] = "Tres a&ntilde;os.";
 choices[74][1] = "Dos a&ntilde;os y medio.";
 choices[74][2] = "Cinco a&ntilde;os.";
 choices[74][3] = "Seis a&ntilde;os.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 291. UNION EUROPEA";


