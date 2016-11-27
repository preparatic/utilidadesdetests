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

//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[0]= new Array();
 choices[0][0] = "Un representante de la Administraci&oacute;n local.";
 choices[0][1] = "Un representante del Tribunal de Cuentas.";
 choices[0][2] = "Un representante del Defensor del Pueblo.";
 choices[0][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[0] = choices[0][0];
 units[0] = "22";
 comments[0] = "Id Pregunta: 123. ";


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[1]= "2)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Aplicaci&oacute;n";
 choices[1][1] = "Sesi&oacute;n";
 choices[1][2] = "Presentaci&oacute;n";
 choices[1][3] = "Transporte";
 answers[1] = choices[1][2];
 units[1] = "105";
 comments[1] = "Id Pregunta: 18. AGE A1 2015";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[2]= "3)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[2]= new Array();
 choices[2][0] = "los Subsecretarios y los Secretarios generales";
 choices[2][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[2][2] = "los Secretarios de Estado y los Directores generales";
 choices[2][3] = "los Ministros y los Secretarios de Estado";
 answers[2] = choices[2][3];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[3]= new Array();
 choices[3][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[3][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[3][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[3][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[3] = choices[3][0];
 units[3] = "19";
 comments[3] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la respuesta falsa:";
 choices[4]= new Array();
 choices[4][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[4][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[4][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[4][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[4] = choices[4][2];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[5]= "6)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[5]= new Array();
 choices[5][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[5][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[5][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[5][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[5] = choices[5][3];
 units[5] = "101";
 comments[5] = "Id Pregunta: 59. AGE A1 2015";


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[6]= "7)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[6]= new Array();
 choices[6][0] = "El Tratado de Maastrich.";
 choices[6][1] = "El Tratado de Amsterdam.";
 choices[6][2] = "El Tratado de Par&iacute;s.";
 choices[6][3] = "El Tratado de Roma.";
 answers[6] = choices[6][3];
 units[6] = "5";
 comments[6] = "Id Pregunta: 342. UNION EUROPEA";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[7]= new Array();
 choices[7][0] = "Por Real Decreto.";
 choices[7][1] = "Por Orden del Ministerio del Interior.";
 choices[7][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[7][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[8]= new Array();
 choices[8][0] = "SPARQL";
 choices[8][1] = "UnQL";
 choices[8][2] = "XQUERY";
 choices[8][3] = "RQL";
 answers[8] = choices[8][0];
 units[8] = "74";
 comments[8] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[9]= new Array();
 choices[9][0] = "El Consejo Europeo.";
 choices[9][1] = "El Parlamento Europeo.";
 choices[9][2] = "El Consejo.";
 choices[9][3] = "La Comisi&oacute;n.";
 answers[9] = choices[9][3];
 units[9] = "5";
 comments[9] = "Id Pregunta: 361. UNION EUROPEA";


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[10]= "11)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[10]= new Array();
 choices[10][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[10][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[10][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[10][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[10] = choices[10][0];
 units[10] = "65";
 comments[10] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[11]= "12)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[11]= new Array();
 choices[11][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[11][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[11][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[11][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[11] = choices[11][1];
 units[11] = "76";
 comments[11] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[12]= new Array();
 choices[12][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[12][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[12][2] = "Fomentar el despliegue de redes y servicios";
 choices[12][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[12] = choices[12][0];
 units[12] = "19";
 comments[12] = "Id Pregunta: 752. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[13]= new Array();
 choices[13][0] = "Un programa presupuestario.";
 choices[13][1] = "Un concepto presupuestario.";
 choices[13][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[13][3] = "Un cr&eacute;dito presupuestario.";
 answers[13] = choices[13][0];
 units[13] = "10";
 comments[13] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la respuesta correcta:";
 choices[14]= new Array();
 choices[14][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[14][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[14][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[14][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[14] = choices[14][1];
 units[14] = "98";
 comments[14] = "Id Pregunta: 14. AGE A1 2015";


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la respuesta correcta:";
 choices[15]= new Array();
 choices[15][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[15][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[15][2] = "Las respuestas A y B son correctas.";
 choices[15][3] = "Las respuestas A y B son falsas.";
 answers[15] = choices[15][2];
 units[15] = "5";
 comments[15] = "Id Pregunta: 279. UNION EUROPEA";


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[16]= "17)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[16]= new Array();
 choices[16][0] = "Primario, que incluye la agricultura y la pesca";
 choices[16][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[16][2] = "Minero, junto con las exportaciones de comercio";
 choices[16][3] = "Servicios";
 answers[16] = choices[16][3];
 units[16] = "12";
 comments[16] = "Id Pregunta: 567. Modelo econ&oacute;mico";


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[17]= new Array();
 choices[17][0] = "Tres meses.";
 choices[17][1] = "Nueve meses.";
 choices[17][2] = "Cuatro meses.";
 choices[17][3] = "Seis meses.";
 answers[17] = choices[17][0];
 units[17] = "10";
 comments[17] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[18]= new Array();
 choices[18][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[18][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[18][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[18][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[18] = choices[18][1];
 units[18] = "7";
 comments[18] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[19]= "20)  La soberan&iacute;a nacional reside en:";
 choices[19]= new Array();
 choices[19][0] = "el Parlamento nacional.";
 choices[19][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[19][2] = "el pueblo espa&ntilde;ol.";
 choices[19][3] = "el Congreso y el Senado.";
 answers[19] = choices[19][3];
 units[19] = "1";
 comments[19] = "Id Pregunta: 255. CONSTITUCION1978";


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[20]= "21)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[20]= new Array();
 choices[20][0] = "3 a&ntilde;os.";
 choices[20][1] = "5 a&ntilde;os.";
 choices[20][2] = "4 a&ntilde;os.";
 choices[20][3] = "6 a&ntilde;os.";
 answers[20] = choices[20][1];
 units[20] = "1";
 comments[20] = "Id Pregunta: 193. CONSTITUCION1978";


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[21]= "22)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[21]= new Array();
 choices[21][0] = "Consejos y Servicios.";
 choices[21][1] = "Servicios permanentes y no permanentes.";
 choices[21][2] = "Direcciones Generales.";
 choices[21][3] = "Direcciones ministeriales.";
 answers[21] = choices[21][2];
 units[21] = "5";
 comments[21] = "Id Pregunta: 318. UNION EUROPEA";


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[22]= "23)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[22]= new Array();
 choices[22][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[22][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[22][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[22][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[22] = choices[22][2];
 units[22] = "10";
 comments[22] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[23]= "24)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[23]= new Array();
 choices[23][0] = "192.228.0.0";
 choices[23][1] = "192.228.8.0";
 choices[23][2] = "192.228.16.0";
 choices[23][3] = "192.228.17.0";
 answers[23] = choices[23][2];
 units[23] = "109";
 comments[23] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[24]= new Array();
 choices[24][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[24][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[24][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[24][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[24] = choices[24][2];
 units[24] = "17";
 comments[24] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[25]= "26)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[25]= new Array();
 choices[25][0] = "Fat y Ntfs.";
 choices[25][1] = "Extfat y Fat.";
 choices[25][2] = "Fat y Nfst.";
 choices[25][3] = "ext2fs y Ntfs.";
 answers[25] = choices[25][0];
 units[25] = "58";
 comments[25] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[26]= new Array();
 choices[26][0] = "Los principios rectores";
 choices[26][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[26][2] = "Los hitos para su desarrollo gradual";
 choices[26][3] = "Todos los anteriores";
 answers[26] = choices[26][3];
 units[26] = "19";
 comments[26] = "Id Pregunta: 583. Estrategia TIC";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[27]= "28)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[27]= new Array();
 choices[27][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[27][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[27][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[27][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[27] = choices[27][3];
 units[27] = "18, 20";
 comments[27] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[28]= "29)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[28]= new Array();
 choices[28][0] = "GROUP BY.";
 choices[28][1] = "COUNT.";
 choices[28][2] = "WHERE.";
 choices[28][3] = "DISTINCT.";
 answers[28] = choices[28][0];
 units[28] = "60";
 comments[28] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[29]= "30)  Las Universidades p&uacute;blicas:";
 choices[29]= new Array();
 choices[29][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[29][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[29][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[29][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[29] = choices[29][1];
 units[29] = "7";
 comments[29] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[30]= "31)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[30]= new Array();
 choices[30][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[30][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[30][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[30][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[30] = choices[30][3];
 units[30] = "43";
 comments[30] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[31]= "32)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[31]= new Array();
 choices[31][0] = "Ejecutivo";
 choices[31][1] = "Limitativo";
 choices[31][2] = "Estimativo";
 choices[31][3] = "Progresivo";
 answers[31] = choices[31][2];
 units[31] = "10";
 comments[31] = "Id Pregunta: 446. PRESUPUESTOS GENERALES";


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[32]= new Array();
 choices[32][0] = "Ley 3/2015";
 choices[32][1] = "Ley 6/2007";
 choices[32][2] = "Ley 5/1984";
 choices[32][3] = "Ley 5/2006";
 answers[32] = choices[32][0];
 units[32] = "22";
 comments[32] = "Id Pregunta: 709. &Eacute;tica P&uacute;blica y Transparencia";


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[33]= "34)  Un wireframe es:";
 choices[33]= new Array();
 choices[33][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[33][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[33][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[33][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[33] = choices[33][3];
 units[33] = "62";
 comments[33] = "Id Pregunta: 4. AGE A1 2015";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[34]= "35)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[34]= new Array();
 choices[34][0] = "Interchange of Data between Administrations (IDA)";
 choices[34][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[34][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[34][3] = "Interoperability Electronic European Solution (IEES)";
 answers[34] = choices[34][1];
 units[34] = "43";
 comments[34] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[35]= new Array();
 choices[35][0] = "Nivel 7 - MPLS.";
 choices[35][1] = "Nivel 3 - RARP.";
 choices[35][2] = "Nivel 2 - HDLC.";
 choices[35][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[35] = choices[35][2];
 units[35] = "105";
 comments[35] = "Id Pregunta: 7. AGE A1 2015";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[36]= "37)  Son proyectos de Apache relacionados con Big Data:";
 choices[36]= new Array();
 choices[36][0] = "Hadoop";
 choices[36][1] = "Spark";
 choices[36][2] = "A) y B)";
 choices[36][3] = "Niguno de los anteriores";
 answers[36] = choices[36][2];
 units[36] = "73";
 comments[36] = "Id Pregunta: 108. ";


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[37]= "38)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[37]= new Array();
 choices[37][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[37][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[37][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[37][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[37] = choices[37][0];
 units[37] = "43";
 comments[37] = "Id Pregunta: 437. SERVICIOS COMUNES";


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[38]= "39)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[38]= new Array();
 choices[38][0] = "Veinticinco.";
 choices[38][1] = "Veintisiete.";
 choices[38][2] = "Veintinueve.";
 choices[38][3] = "Cuarenta y uno.";
 answers[38] = choices[38][1];
 units[38] = "5";
 comments[38] = "Id Pregunta: 303. UNION EUROPEA";


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[39]= new Array();
 choices[39][0] = "Diagrama de clases";
 choices[39][1] = "Diagrama de componentes";
 choices[39][2] = "Diagrama de estructura";
 choices[39][3] = "Diagrama de paquetes";
 answers[39] = choices[39][0];
 units[39] = "91";
 comments[39] = "Id Pregunta: 88. AGE A1 2015";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[40]= new Array();
 choices[40][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[40][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[40][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[40][3] = "Todos los anteriores";
 answers[40] = choices[40][3];
 units[40] = "19";
 comments[40] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[41]= "42)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[41]= new Array();
 choices[41][0] = "Discriminaci&oacute;n indirecta.";
 choices[41][1] = "Discriminaci&oacute;n directa.";
 choices[41][2] = "Discriminaci&oacute;n por maternidad.";
 choices[41][3] = "Discriminaci&oacute;n abusiva.";
 answers[41] = choices[41][1];
 units[41] = "14";
 comments[41] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[42]= "43)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[42]= new Array();
 choices[42][0] = "Jenkins";
 choices[42][1] = "Hudson";
 choices[42][2] = "SonarQube";
 choices[42][3] = "Todas lo son";
 answers[42] = choices[42][3];
 units[42] = "92";
 comments[42] = "Id Pregunta: 693. INTEGRACION CONTINUA";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[43]= "44)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[43]= new Array();
 choices[43][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[43][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[43][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[43][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[43] = choices[43][3];
 units[43] = "7";
 comments[43] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[44]= new Array();
 choices[44][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[44][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[44][2] = "Apertura al exterior";
 choices[44][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[44] = choices[44][0];
 units[44] = "17";
 comments[44] = "Id Pregunta: 760. Mercado &Uacute;nico Digital";


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[45]= "46)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[45]= new Array();
 choices[45][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[45][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo;";
 choices[45][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[45][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea.";
 answers[45] = choices[45][0];
 units[45] = "34, 84";
 comments[45] = "Id Pregunta: 725. Metodologias &aacute;giles";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[46]= "47)  El plan nacional de ciudades inteligentes...";
 choices[46]= new Array();
 choices[46][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[46][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[46][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[46][3] = "No existe";
 answers[46] = choices[46][1];
 units[46] = "19";
 comments[46] = "Id Pregunta: 561. Ciudades Inteligentes";


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[47]= "48)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[47]= new Array();
 choices[47][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[47][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[47][2] = "Ambas son correctas.";
 choices[47][3] = "Ambas son incorrectas.";
 answers[47] = choices[47][0];
 units[47] = "14";
 comments[47] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[48]= "49)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[48]= new Array();
 choices[48][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[48][1] = "Unanimidad.";
 choices[48][2] = "Mayor&iacute;a cualificada.";
 choices[48][3] = "Mayor&iacute;a simple.";
 answers[48] = choices[48][3];
 units[48] = "5";
 comments[48] = "Id Pregunta: 365. UNION EUROPEA";


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[49]= "50)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[49]= new Array();
 choices[49][0] = "Estrasburgo.";
 choices[49][1] = "Bruselas.";
 choices[49][2] = "Luxemburgo.";
 choices[49][3] = "Holanda.";
 answers[49] = choices[49][0];
 units[49] = "5";
 comments[49] = "Id Pregunta: 293. UNION EUROPEA";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[50]= "51)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[50]= new Array();
 choices[50][0] = "Infrastructure as a Service (IaaS)";
 choices[50][1] = "Platform as a Service (PaaS)";
 choices[50][2] = "Software as a Service (SaaS)";
 choices[50][3] = "Application as a Service (AaaS)";
 answers[50] = choices[50][1];
 units[50] = "52";
 comments[50] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[51]= "52)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[51]= new Array();
 choices[51][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[51][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[51][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[51][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[51] = choices[51][1];
 units[51] = "77";
 comments[51] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[52]= "53)  El Colegio de Comisarios se re&uacute;ne:";
 choices[52]= new Array();
 choices[52][0] = "Una vez por semana.";
 choices[52][1] = "Una vez al mes.";
 choices[52][2] = "Dos veces en semana.";
 choices[52][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[52] = choices[52][0];
 units[52] = "5";
 comments[52] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "De la C&aacute;mara respectiva.";
 choices[53][1] = "Del Rey.";
 choices[53][2] = "Del Tribunal Constitucional.";
 choices[53][3] = "Del Tribunal Supremo.";
 answers[53] = choices[53][0];
 units[53] = "1";
 comments[53] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[54]= "55)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[54]= new Array();
 choices[54][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[54][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[54][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[54][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[54] = choices[54][1];
 units[54] = "22";
 comments[54] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[55]= "56)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[55]= new Array();
 choices[55][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[55][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[55][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[55][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[55] = choices[55][3];
 units[55] = "77";
 comments[55] = "Id Pregunta: 48. AGE A1 2015";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[56]= new Array();
 choices[56][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[56][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[56][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[56][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[56] = choices[56][1];
 units[56] = "15";
 comments[56] = "Id Pregunta: 112. ";


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[57]= "58)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[57]= new Array();
 choices[57][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[57][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[57][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[57][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[57] = choices[57][3];
 units[57] = "1";
 comments[57] = "Id Pregunta: 236. CONSTITUCION1978";


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[58]= "59)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[58]= new Array();
 choices[58][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[58][1] = "Programa de cartas de servicios";
 choices[58][2] = "Programa para la mejora continua de las organizaciones.";
 choices[58][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[58] = choices[58][2];
 units[58] = "18, 20";
 comments[58] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[59]= new Array();
 choices[59][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[59][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[59][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[59][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[59] = choices[59][0];
 units[59] = "19";
 comments[59] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[60]= "61)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[60]= new Array();
 choices[60][0] = "Pas&oacute; de 518 a 626.";
 choices[60][1] = "Pas&oacute; de 434 a 518.";
 choices[60][2] = "Pas&oacute; de 345 a 512.";
 choices[60][3] = "Pas&oacute; de 435 a 610.";
 answers[60] = choices[60][1];
 units[60] = "5";
 comments[60] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[61]= new Array();
 choices[61][0] = "a) Los cuatro ejercicios siguientes.";
 choices[61][1] = "b) El ejercicio siguiente.";
 choices[61][2] = "c) Los dos ejercicios siguientes.";
 choices[61][3] = "d) Los tres ejercicios siguientes.";
 answers[61] = choices[61][3];
 units[61] = "10";
 comments[61] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[62]= "63)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[62]= new Array();
 choices[62][0] = "El Tratado de Roma, 1957.";
 choices[62][1] = "El Acta &Uacute;nica Europea.";
 choices[62][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[62][3] = "Ninguna es correcta.";
 answers[62] = choices[62][2];
 units[62] = "14";
 comments[62] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[63]= new Array();
 choices[63][0] = "No, en ning&uacute;n caso.";
 choices[63][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[63][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[63][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[63] = choices[63][3];
 units[63] = "1";
 comments[63] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[64]= new Array();
 choices[64][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[64][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[64][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[64][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[64] = choices[64][1];
 units[64] = "19";
 comments[64] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[65]= "66)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[65]= new Array();
 choices[65][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[65][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[65][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[65][3] = "Todos las anteriores son ciertas.";
 answers[65] = choices[65][3];
 units[65] = "12";
 comments[65] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[66]= "67)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[66]= new Array();
 choices[66][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[66][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[66][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[66][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[66] = choices[66][0];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 780. Ley 40/2015";


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[67]= "68)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[67]= new Array();
 choices[67][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[67][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[67][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[67][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[67] = choices[67][2];
 units[67] = "101";
 comments[67] = "Id Pregunta: 60. AGE A1 2015";


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[68]= new Array();
 choices[68][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[68][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[68][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[68][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[68] = choices[68][2];
 units[68] = "7";
 comments[68] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[69]= new Array();
 choices[69][0] = "las personas jur&iacute;dicas ";
 choices[69][1] = "las entidades con personalidad jur&iacute;dica";
 choices[69][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[69][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[69] = choices[69][1];
 units[69] = "7";
 comments[69] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[70]= "71)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Lollipop";
 choices[70][1] = "Jelly Bean";
 choices[70][2] = "Marshmallow";
 choices[70][3] = "KitKat";
 answers[70] = choices[70][2];
 units[70] = "59";
 comments[70] = "Id Pregunta: 61. AGE A1 2015";


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[71]= new Array();
 choices[71][0] = "En 2011";
 choices[71][1] = "En 2013";
 choices[71][2] = "En 2015";
 choices[71][3] = "En 2016";
 answers[71] = choices[71][2];
 units[71] = "17";
 comments[71] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[72]= "73)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[72]= new Array();
 choices[72][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[72][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[72][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[72][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[72] = choices[72][3];
 units[72] = "10";
 comments[72] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[73]= "74)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[73]= new Array();
 choices[73][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[73][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[73][2] = "a y b son correctas";
 choices[73][3] = "a y b son incorrectas";
 answers[73] = choices[73][2];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[74]= new Array();
 choices[74][0] = "Estimaci&oacute;n del riesgo";
 choices[74][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[74][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[74][3] = "Mapa de riesgos";
 answers[74] = choices[74][3];
 units[74] = "45";
 comments[74] = "Id Pregunta: 85. AGE A1 2015";


