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

//  Id pregunta: 0 AÃ±o de creación de pregunta: 2011-01-01
 questions[0]= "1)  Identifique la infracci&oacute;n considerada como grave por la Ley de Protecci&oacute;n de Datos:";
 choices[0]= new Array();
 choices[0][0] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos. ";
 choices[0][1] = "La recogida de datos en forma enga&ntilde;osa y fraudulenta";
 choices[0][2] = "El impedimento o la obstaculizaci&oacute;n del ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 choices[0][3] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director en la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello. ";
 answers[0] = choices[0][2];
 units[0] = "29";
 comments[0] = "Id Pregunta: 0. ";


//  Id pregunta: 99 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En relaci&oacute;n con la impugnaci&oacute;n de valoraciones:";
 choices[1]= new Array();
 choices[1][0] = "Los ciudadanos tienen derecho a no verse sometidos a una decisi&oacute;n con efectos jur&iacute;dicos, sobre ellos o que les afecte de manera significativa, que se base &uacute;nicamente en un tratamiento de datos destinados a evaluar determinados aspectos de su personalidad";
 choices[1][1] = "El afectado podr&aacute; impugnar actos administrativos o decisiones privadas que impliquen una valoraci&oacute;n de su comportamiento, cuyo &uacute;nico fundamento sea un tratamiento de datos de car&aacute;cter personal que ofrezca una definici&oacute;n  de sus caracter&iacute;sticas o personalidad";
 choices[1][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 choices[1][3] = "Ninguna de las respuestas es correcta";
 answers[1] = choices[1][2];
 units[1] = "29";
 comments[1] = "Id Pregunta: 99. ";


//  Id pregunta: 127 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  El art&iacute;culo 18.4 de la Constituci&oacute;n dice que:";
 choices[2]= new Array();
 choices[2][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos";
 choices[2][1] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros administrativos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[2][2] = "La ley regular&aacute;... b) El acceso de los ciudadanos a los archivos y registros inform&aacute;ticos, salvo en lo que afecta a la seguridad y defensa del Estado, la averiguaci&oacute;n de los delitos y la intimidad de las personas";
 choices[2][3] = "Los tratados internacionales v&aacute;lidamente celebrados, una vez publicados oficialmente en Espa&ntilde;a, formar&aacute;n parte del ordenamiento interno";
 answers[2] = choices[2][0];
 units[2] = "29";
 comments[2] = "Id Pregunta: 127. ";


//  Id pregunta: 137 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  El Consejo Consultivo de la Agencia de Protecci&oacute;n de Datos:";
 choices[3]= new Array();
 choices[3][0] = "Es un &oacute;rgano colegiado de asesoramiento del Director de la Agencia";
 choices[3][1] = "Emite informes en todas las cuestiones que le somete el Director";
 choices[3][2] = "Formula propuestas en temas relacionados con las competencias de la Agencia";
 choices[3][3] = "Todas son correctas";
 answers[3] = choices[3][3];
 units[3] = "29";
 comments[3] = "Id Pregunta: 137. ";


//  Id pregunta: 172 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En cuanto a las sanciones a aplicar por incumpimiento de la LOPD y las medidas de protecci&oacute;n asociadas:";
 choices[4]= new Array();
 choices[4][0] = "La prescripci&oacute;n de las sanciones es de 2 a&ntilde;os para sanciones leves, 3 para las graves y 4 para las muy graves";
 choices[4][1] = "Las infracciones muy graves ser&aacute;n sancionadas con multa de 300.001 a 600.000 euros.";
 choices[4][2] = "En ning&uacute;n caso se deber&aacute;n inmovilizar ni destruir los ficheros causantes de la sanci&oacute;n";
 choices[4][3] = "La cuant&iacute;a de la sanci&oacute;n est&aacute; prefijada, no depende de factores como el volumen de informaci&oacute;n, los derechos personales afectados, los beneficios obtenidos o la reincidencia";
 answers[4] = choices[4][1];
 units[4] = "29";
 comments[4] = "Id Pregunta: 172. NULL";


//  Id pregunta: 314 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal (LOPD) tiene por objeto:";
 choices[5]= new Array();
 choices[5][0] = "Garantizar y proteger, en lo que concierne al tratamiento de los datos personales, las libertades p&uacute;blicas y los derechos fundamentales de las personas f&iacute;sicas";
 choices[5][1] = "Proteger el honor y la intimidad personal y familiar";
 choices[5][2] = "Proteger todas las libertades p&uacute;blicas y derechos fundamentales reconocidos en la Constituci&oacute;n espa&ntilde;ola";
 choices[5][3] = "Hacer frente a las amenazas o agresiones contra los derechos y libertades  p&uacute;blicas, provenientes del tratamiento automatizado de datos personales";
 answers[5] = choices[5][0];
 units[5] = "29";
 comments[5] = "Id Pregunta: 314. ";


//  Id pregunta: 316 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  La Ley Org&aacute;nica de Protecci&oacute;n de Datos de car&aacute;cter personal es la ley:";
 choices[6]= new Array();
 choices[6][0] = "14/1999";
 choices[6][1] = "994/1999";
 choices[6][2] = "15/1999";
 choices[6][3] = "14/1997";
 answers[6] = choices[6][2];
 units[6] = "29";
 comments[6] = "Id Pregunta: 316. ";


//  Id pregunta: 317 AÃ±o de creación de pregunta: 2009-01-01
 questions[7]= "8)  La LOPD no es de aplicaci&oacute;n a:";
 choices[7]= new Array();
 choices[7][0] = "Los ficheros creados por las fuerzas y cuerpos de seguridad recogidos para fines administrativos";
 choices[7][1] = "Los datos recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones legalmente establecidas";
 choices[7][2] = "Los ficheros automatizados con datos personales de car&aacute;cter tributario";
 choices[7][3] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 answers[7] = choices[7][3];
 units[7] = "29";
 comments[7] = "Id Pregunta: 317. ";


//  Id pregunta: 357 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Las leyes de protecci&oacute;n de datos que pretenden prevenir la invasi&oacute;n de la intimidad del individuo frente al abuso de la informaci&oacute;n computarizada son las conocidas como:";
 choices[8]= new Array();
 choices[8][0] = "Leyes de primera generaci&oacute;n";
 choices[8][1] = "Leyes de segunda generaci&oacute;n";
 choices[8][2] = "Leyes de tercera generaci&oacute;n";
 choices[8][3] = "No se aplica esta clasificaci&oacute;n a este tipo de leyes";
 answers[8] = choices[8][2];
 units[8] = "36";
 comments[8] = "Id Pregunta: 357. ";


//  Id pregunta: 396 AÃ±o de creación de pregunta: 2009-01-01
 questions[9]= "10)  Para poder tener un fichero de datos personales en la Administraci&oacute;n P&uacute;blica hace falta:";
 choices[9]= new Array();
 choices[9][0] = "Que su creaci&oacute;n, modificaci&oacute;n o supresi&oacute;n se realice mediante una disposici&oacute;n general publicada en el B.O.E. o en el diario oficial correspondiente";
 choices[9][1] = "Que el correspondiente Director General lo autorice por escrito";
 choices[9][2] = "Que aparezca una disposici&oacute;n general publicada en el Diario de las Comunidades Europeas";
 choices[9][3] = "Que en la normativa de estructura del Departamento o Unidad as&iacute; se establezca";
 answers[9] = choices[9][0];
 units[9] = "29";
 comments[9] = "Id Pregunta: 396. ";


//  Id pregunta: 399 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Quienes se dediquen a la prestaci&oacute;n de servicios de informaci&oacute;n sobre solvencia patrimonial y el cr&eacute;dito:";
 choices[10]= new Array();
 choices[10][0] = "Podr&aacute;n tratar datos de car&aacute;cter personal relativos al cumplimiento o inclumplimiento de obligaciones dinerarias facilitados por el acreedor o por quien act&uacute;e por su cuenta o inter&eacute;s";
 choices[10][1] = "S&oacute;lo podr&aacute;n tratar datos de car&aacute;cter personal obtenidos de los registros y las fuentes accesibles al p&uacute;blico";
 choices[10][2] = "S&oacute;lo podr&aacute;n tratar datos de car&aacute;cter personal procedentes de informaciones facilitadas por el interesado o con su consentimiento";
 choices[10][3] = "No podr&aacute;n registrar o ceder datos de car&aacute;cter personal que sean determinantes para enjuiciar la solvencia econ&oacute;mica de los interesados";
 answers[10] = choices[10][0];
 units[10] = "29";
 comments[10] = "Id Pregunta: 399. ";


//  Id pregunta: 401 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Respecto a la LOPD, no es cierto que:";
 choices[11]= new Array();
 choices[11][0] = "se refiere a tratamiento de datos personales automatizados o no";
 choices[11][1] = "hay medidas de nivel b&aacute;sico, medio, alto y muy alto";
 choices[11][2] = "el cifrado y el mantenimiento de logs de acceso es necesario en el nivel alto";
 choices[11][3] = "debe informarse al ciudadano en la recogida de datos, tanto para formularios en papel como en web";
 answers[11] = choices[11][1];
 units[11] = "29";
 comments[11] = "Id Pregunta: 401. ";


//  Id pregunta: 402 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Respecto a la protecci&oacute;n jur&iacute;dica de los programas de ordenador, se puede asegurar que:";
 choices[12]= new Array();
 choices[12][0] = "La ley 22/87 de la Propiedad Intelectual incorpora al Derecho Espa&ntilde;ol la Directiva 91/250 de la CEE, sobre protecci&oacute;n jur&iacute;dica de los programas de ordenador";
 choices[12][1] = "Las ideas y principios en los que se basa un programa est&aacute;n protegidos mediante los derechos de autor";
 choices[12][2] = "La primera venta de una copia por el titular de los derechos agota el derecho de distribuci&oacute;n de dicha copia";
 choices[12][3] = "Todas las premisas anteriores son falsas";
 answers[12] = choices[12][2];
 units[12] = "36";
 comments[12] = "Id Pregunta: 402. ";


//  Id pregunta: 408 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Respecto al derecho de acceso, la Ley Org&aacute;nica de Protecci&oacute;n de Datos indica:";
 choices[13]= new Array();
 choices[13][0] = "El interesado tendr&aacute; derecho a solicitar y obtener, previo pago de los gastos incurridos,  informaci&oacute;n de sus datos de car&aacute;cter personal sometidos a tratamiento, el origen de dichos datos, as&iacute; como las comunicaciones realizadas o que se prev&eacute;n hacer";
 choices[13][1] = "La informaci&oacute;n podr&aacute; obtenerse mediante la mera consulta de los datos por medio de su visualizaci&oacute;n, o la indicaci&oacute;n de los datos que son objeto de tratamiento mediante escrito, copia o fotocopia, certificada o no, en forma legible e inteligible";
 choices[13][2] = "El derecho de acceso a que se refiere este art&iacute;culo s&oacute;lo podr&aacute; ser ejercitado a intervalos no inferiores a doce meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute;n ejercitarlo cada 6 meses";
 choices[13][3] = "El derecho de acceso s&oacute;lo podr&aacute; ejercerse cuando as&iacute; lo autorice el Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[13] = choices[13][1];
 units[13] = "29";
 comments[13] = "Id Pregunta: 408. ";


//  Id pregunta: 444 AÃ±o de creación de pregunta: 2009-01-01
 questions[14]= "15)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y el RD 1720/2007, y en relaci&oacute;n con los ficheros de titularidad privada que contengan datos de car&aacute;cter personal:";
 choices[14]= new Array();
 choices[14][0] = "Los ficheros de datos de car&aacute;cter personal de titularidad privada ser&aacute;n notificados a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos por la persona o entidad privada que pretenda crearlos, con car&aacute;cter previo a su creaci&oacute;n";
 choices[14][1] = "La notificaci&oacute;n de un fichero de datos de car&aacute;cter personal es independiente del sistema de tratamiento empleado en su organizaci&oacute;n y del soporte o soportes empleados para el tratamiento de los datos";
 choices[14][2] = "Deber&aacute; notificarse a la Agencia de Protecci&oacute;n de Datos las variaciones que se produzcan con posterioridad a la notificaci&oacute;n de inscripci&oacute;n";
 choices[14][3] = "Todas las respuestas anteriores son correctas";
 answers[14] = choices[14][3];
 units[14] = "29";
 comments[14] = "Id Pregunta: 444. ";


//  Id pregunta: 462 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Son fuentes accesibles al p&uacute;blico, seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[15]= new Array();
 choices[15][0] = "Aquellos ficheros cuya consulta puede ser realizada sin m&aacute;s exigencia que, en su caso, el abono de una contraprestaci&oacute;n";
 choices[15][1] = "El censo electoral";
 choices[15][2] = "Los diarios y boletines oficiales y los medios de comunicaci&oacute;n";
 choices[15][3] = "S&oacute;lo los boletines oficiales";
 answers[15] = choices[15][2];
 units[15] = "29";
 comments[15] = "Id Pregunta: 462. ";


//  Id pregunta: 472 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Una ley de protecci&oacute;n de datos deber&aacute; responder a las siguientes cuestiones, excepto una, &iquest;cu&aacute;l?:";
 choices[16]= new Array();
 choices[16][0] = "&iquest;Qu&eacute; datos pueden ser recogidos?";
 choices[16][1] = "&iquest;C&oacute;mo pueden ser recogidos?";
 choices[16][2] = "&iquest;Cuando pueden ser recogidos?";
 choices[16][3] = "&iquest;Con qu&eacute; fin pueden ser recogidos?";
 answers[16] = choices[16][2];
 units[16] = "29";
 comments[16] = "Id Pregunta: 472. ";


//  Id pregunta: 507 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  La directiva 91/250/CEE modificada por la 93/98/CEE, del Consejo relativa a la protecci&oacute;n jur&iacute;dica de los progarmas de ordenador";
 choices[17]= new Array();
 choices[17][0] = "excluye expl&iacute;citamente aquellos desarrollos sobre plataformas LINUX, shareware o software libre";
 choices[17][1] = "establece que los programas deber&aacute;n protegerse de la misma manera que las obras literarias, con arreglo a lo establecido en el convenio de Berna sobre proetcci&oacute;n de obras literarias y art&iacute;sticas";
 choices[17][2] = "regula aquellos aspectos del comercio elctr&oacute;nico relacionados con la materia de propiedad intelectual";
 choices[17][3] = "crea un nuevo t&iacute;tulo unitario de proiedad industrial 'patente comunitaria' para eliminar las distorsiones del mercado interior y permitir que Europa se aproveche al m&aacute;ximo de sus trabajos de investigaci&oacute;n";
 answers[17] = choices[17][1];
 units[17] = "36";
 comments[17] = "Id Pregunta: 507. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 527 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la normativa vigente en materia de protecci&oacute;n de datos de car&aacute;cter personal:";
 choices[18]= new Array();
 choices[18][0] = "El responsable del fichero adoptar&aacute; las medidas necesarias para que el personal conozca las normas de seguridad que afectan al desarrollo de sus funciones as&iacute; como las consecuencias en que pudiera incurrir en caso de incumplimiento.";
 choices[18][1] = "Cada fichero del organismo con datos de car&aacute;cter personal dispondr&aacute; de un documento especifico de seguridad en el que no se podr&aacute;n describir conjuntamente aspectos de seguridad relativos a mas de un fichero.";
 choices[18][2] = "La LOPD se aplicara de forma completa a los ficheros manuales a partir del 24 de octubre de 2010.";
 choices[18][3] = "La protecci&oacute;n de datos personales es un derecho fundamental que afecta exclusivamente a los datos que afectan a la intimidad del individuo.";
 answers[18] = choices[18][0];
 units[18] = "29";
 comments[18] = "Id Pregunta: 527. Junta Andaluc&iacute;a";


//  Id pregunta: 602 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  &iquest;Las cesiones de datos personales entre Administraciones P&uacute;blicas, para el ejercicio de competencias distintas pueden realizarse?";
 choices[19]= new Array();
 choices[19][0] = "En todo caso";
 choices[19][1] = "Cuando lo habilite una norma con rango formal de Ley";
 choices[19][2] = "Basta una autorizaci&oacute;n en una norma reglamentaria";
 choices[19][3] = "Nunca";
 answers[19] = choices[19][1];
 units[19] = "29";
 comments[19] = "Id Pregunta: 602. ";


//  Id pregunta: 694 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  Seg&uacute;n la directiva comunitaria 1999/93/CE de firma electr&oacute;nica, las autoridades de certificaci&oacute;n s&oacute;lo pueden ser:";
 choices[20]= new Array();
 choices[20][0] = "Entidades p&uacute;blicas";
 choices[20][1] = "Personas f&iacute;sicas";
 choices[20][2] = "Personas jur&iacute;dicas";
 choices[20][3] = "Entidades p&uacute;blicas, personas f&iacute;sicas o personas jur&iacute;dicas, dependiendo de la legislaci&oacute;n del pa&iacute;s";
 answers[20] = choices[20][3];
 units[20] = "30";
 comments[20] = "Id Pregunta: 694. Similar a examen TIC SS A 2003";


//  Id pregunta: 819 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Seg&uacute;n la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, los contratos celebrados por la v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[21]= new Array();
 choices[21][0] = "El lugar en que est&eacute; establecido el prestador de servicios";
 choices[21][1] = "El lugar que figure en el registro mercantil";
 choices[21][2] = "El lugar en que &eacute;ste tenga su residencia habitual";
 choices[21][3] = "El lugar que figure en la cabecera de la p&aacute;gina";
 answers[21] = choices[21][2];
 units[21] = "30";
 comments[21] = "Id Pregunta: 819. Ley 34/2002, art&iacute;culo 29";


//  Id pregunta: 1879 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  La ley de servicios de la sociedad de la informaci&oacute;n y del comercio electr&oacute;nico (LSSICE) es el resultado de la transposici&oacute;n de dos directivas del Parlamento Europeo y del Consejo. &iquest;Cu&aacute;les?";
 choices[22]= new Array();
 choices[22][0] = "Directivas 2000/31/CE y 98/28/CE";
 choices[22][1] = "Directivas 2000/31/CE y 98/27/CE";
 choices[22][2] = "Directivas 2000/31/CE y 97/27/CE";
 choices[22][3] = "Directivas 2001/31/CE y 98/27/CE";
 answers[22] = choices[22][1];
 units[22] = "30";
 comments[22] = "Id Pregunta: 1879. NULL";


//  Id pregunta: 1883 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[23]= new Array();
 choices[23][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 hasta 600.000 euros. ";
 choices[23][1] = "Por la comisi&oacute;n de infracciones graves, multa de 30.001 hasta 150.000 euros";
 choices[23][2] = "Por la comisi&oacute;n de infracciones leves, multa de hasta 30.000 euros.";
 choices[23][3] = "La primera es falsa";
 answers[23] = choices[23][3];
 units[23] = "30";
 comments[23] = "Id Pregunta: 1883. Ley 34/2002, art&iacute;culo 39";


//  Id pregunta: 1885 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  Se&ntilde;ale la falsa:";
 choices[24]= new Array();
 choices[24][0] = "La Ley  General de Telecomunicaciones introduce modificaciones a la ley 34/2002";
 choices[24][1] = "La ley de firma Electr&oacute;nica 59/2003 introduce modificaciones a la ley 34/2002";
 choices[24][2] = "La Ley 56/2007, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n, introduce modificaciones a la ley 34/2002";
 choices[24][3] = "Son falsas las tres anteriores";
 answers[24] = choices[24][3];
 units[24] = "30";
 comments[24] = "Id Pregunta: 1885. Las tres restantes son correctas";


//  Id pregunta: 1937 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, establece como sanci&oacute;n por la comisi&oacute;n de infracciones graves:";
 choices[25]= new Array();
 choices[25][0] = "Multa de 30.001 a 150.000 euros";
 choices[25][1] = "Multa por importe m&aacute;ximo de 50.000 euros";
 choices[25][2] = "Multa de 150.001 a 600.000 euros";
 choices[25][3] = "Multa de 30.001 a 100.000 euros como m&aacute;ximo";
 answers[25] = choices[25][0];
 units[25] = "30";
 comments[25] = "Id Pregunta: 1937. Ley 59/2003, art&iacute;culo 32";


//  Id pregunta: 2861 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  Entre las &aacute;reas de actuaci&oacute;n del Plan Avanza no se encuentra";
 choices[26]= new Array();
 choices[26][0] = "Servicios P&uacute;blicos Digitales";
 choices[26][1] = "Educaci&oacute;n en la Era Digital";
 choices[26][2] = "Hogar e Inclusi&oacute;n de los Ciudadanos";
 choices[26][3] = "La Sanidad en la Era Digital";
 answers[26] = choices[26][3];
 units[26] = "30";
 comments[26] = "Id Pregunta: 2861. ";


//  Id pregunta: 4064 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Qu&eacute; sentido tiene la ley de protecci&oacute;n intelectual?";
 choices[27]= new Array();
 choices[27][0] = "La defensa de los productos de las multinacionales";
 choices[27][1] = "Evitar que se pueda difundir el software libre";
 choices[27][2] = "Incentivar la inversi&oacute;n de las multinacionales del software y la musica";
 choices[27][3] = "La defensa de los derechos de los autores";
 answers[27] = choices[27][3];
 units[27] = "36";
 comments[27] = "Id Pregunta: 4064. ";


//  Id pregunta: 4423 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  En relaci&oacute;n con la Ley 59/2003, de firma electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[28]= new Array();
 choices[28][0] = "El prestador de servicios de certificaci&oacute;n ha de ser una persona jur&iacute;dica.";
 choices[28][1] = "Por resoluci&oacute;n administrativa puede suspenderse, pero no extinguirse, la vigencia de los certificados electr&oacute;nicos.";
 choices[28][2] = "Los certificados reconocidos deben incluir necesariamente, entre otros datos, la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que expide el certificado.";
 choices[28][3] = "El DNI electr&oacute;nico acredita electr&oacute;nicamente la identidad personal de su titular, pero no permite la firma electr&oacute;nica de documentos.";
 answers[28] = choices[28][2];
 units[28] = "30";
 comments[28] = "Id Pregunta: 4423. Ley 59/2003, art&iacute;culo 11";


//  Id pregunta: 4449 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  En relaci&oacute;n con la licencia GPL (GNU Public License), una de las siguientes afirmaciones no es cierta.";
 choices[29]= new Array();
 choices[29][0] = "Permite redistribuir, ejecutar y mejorar los programas.";
 choices[29][1] = "Proh&iacute;be cobrar un precio por el acto f&iacute;sico de transferir una copia.";
 choices[29][2] = "No permite que incluya sus programas en programas propietarios.";
 choices[29][3] = "Fue creada por la Free Software Foundation.";
 answers[29] = choices[29][1];
 units[29] = "36";
 comments[29] = "Id Pregunta: 4449. ";


//  Id pregunta: 4576 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  Cual de los siguientes aspectos NO son tratados en Ia Ley 34/2002, de 11 de julio, de servicios de Ia sociedad de la informaci&oacute;n y de comercio electr&oacute;nico:";
 choices[30]= new Array();
 choices[30][0] = "obligaciones y responsabilidades de los destinatarios de los servicios.";
 choices[30][1] = "promueve Ia elaboraci&oacute;n de c&oacute;digos de conducta sobre las materias reguladas en esta Ley.";
 choices[30][2] = "accesibilidad para las personas can discapacidad y de edad avanzada a Ia informaci&oacute;n proporcionada por medios electr&oacute;nicos.";
 choices[30][3] = "sistema de asignaci&oacute;n de nombres de dominio bajo el &quot;.es&quot;.";
 answers[30] = choices[30][0];
 units[30] = "30";
 comments[30] = "Id Pregunta: 4576. ";


//  Id pregunta: 4613 AÃ±o de creación de pregunta: 2009-01-01
 questions[31]= "32)  Un fichero que contiene el DNI y % de discapacidad con motivo del cumplimiento de deberes p&uacute;blicos, pero no el tipo de discapacidad del que se trata, debe tener implantadas medidas de seguridad de nivel";
 choices[31]= new Array();
 choices[31][0] = "b&aacute;sico";
 choices[31][1] = "medio";
 choices[31][2] = "alto";
 choices[31][3] = "muy alto";
 answers[31] = choices[31][0];
 units[31] = "29";
 comments[31] = "Id Pregunta: 4613. ";


//  Id pregunta: 4658 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l es el periodo de vigencia de los certificados contenidos en el DNI electronico?";
 choices[32]= new Array();
 choices[32][0] = "El mismo que el DNI ";
 choices[32][1] = "36 meses";
 choices[32][2] = "30 meses";
 choices[32][3] = "12 meses";
 answers[32] = choices[32][2];
 units[32] = "30";
 comments[32] = "Id Pregunta: 4658. RD 1553/2005, art&iacute;culo 12";


//  Id pregunta: 4774 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  Seg&uacute;n la Ley Org&aacute;nica 15/1999 y el RD 1720/2007 ser&aacute; posible la cesi&oacute;n de los datos de car&aacute;cter personal sin contar con el consentimiento del interesado cuando la cesi&oacute;n sea entre Administraciones P&uacute;blicas y concurra uno de los siguientes supuestos:";
 choices[33]= new Array();
 choices[33][0] = "Tenga por objeto el tratamiento de los datos con fines hist&oacute;ricos, estad&iacute;sticos  o cient&iacute;ficos.";
 choices[33][1] = "Los datos de car&aacute;cter personal hayan sido recogidos o elaborados por una Administraci&oacute;n P&uacute;blica con destino a otra.";
 choices[33][2] = "La comunicaci&oacute;n se realice para el ejercicio de competencias id&eacute;nticas o que versen sobre las mismas materias";
 choices[33][3] = "Todas las anteriores son ciertas";
 answers[33] = choices[33][3];
 units[33] = "29";
 comments[33] = "Id Pregunta: 4774. ";


//  Id pregunta: 5005 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma es undispositivo que debe ofrecer al menos ciertas garant&iacute;as. &iquest;Cu&aacute;l de las siguientes NO es una de ellas?";
 choices[34]= new Array();
 choices[34][0] = "Que los datos utilizados para la generaci&oacute;n de firma puedan producirse s&oacute;lo una vez y asegurarrazonablemente su secreto.";
 choices[34][1] = "Que los datos utilizados para la generaci&oacute;n de firma puedan ser derivados de los de verificaci&oacute;n de firma ode la propia firma";
 choices[34][2] = "Que los datos de creaci&oacute;n de firma puedan ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;npor terceros.";
 choices[34][3] = "Que el dispositivo utilizado no alteren los datos o el documento que deba firmarse ni impidan que &eacute;ste semuestre al firmante antes del proceso de firma.";
 answers[34] = choices[34][1];
 units[34] = "30";
 comments[34] = "Id Pregunta: 5005. Examen TIC A 2007 (Ley 59/2003, art&iacute;culo 24)";


//  Id pregunta: 5057 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Qu&eacute; tipos de certificado est&aacute;n incluidos en el DNIe?:";
 choices[35]= new Array();
 choices[35][0] = "Autenticaci&oacute;n y firma";
 choices[35][1] = "Cifrado y firma";
 choices[35][2] = "Firma";
 choices[35][3] = "Cifrado, firma y autenticaci&oacute;n";
 answers[35] = choices[35][0];
 units[35] = "30";
 comments[35] = "Id Pregunta: 5057. Examen TIC A 2007 (RD 1553/2005, art&iacute;culo 11)";


//  Id pregunta: 5112 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Seg&uacute;n la LOPD, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decida sobre la finalidad, contenido y uso del tratamiento es:";
 choices[36]= new Array();
 choices[36][0] = "Encargado del tratamiento.";
 choices[36][1] = "Afectado o interesado.";
 choices[36][2] = "Cesionario de datos.";
 choices[36][3] = "Responsable del fichero.";
 answers[36] = choices[36][3];
 units[36] = "29";
 comments[36] = "Id Pregunta: 5112. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5133 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Seg&uacute;n la LSSI, cu&aacute;les son las p&aacute;ginas web que deben cumplir criterios de accesibilidad:";
 choices[37]= new Array();
 choices[37][0] = "Todas, independientemente de su finalidad.";
 choices[37][1] = "Las de la Administraci&oacute;n P&uacute;blica a partir del 31 de Diciembre de 2004";
 choices[37][2] = "Las de la Administraci&oacute;n P&uacute;blica a partir del 31 de Diciembre de 2008";
 choices[37][3] = "S&oacute;lo las comerciales";
 answers[37] = choices[37][2];
 units[37] = "30";
 comments[37] = "Id Pregunta: 5133. Examen TIC A Castilla La Mancha 2007 (Ley 34/2002, disposici&oacute;n adicional quinta, modificado por Ley 56/2007, art&iacute;culo 4)";


//  Id pregunta: 5536 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes no es un &aacute;mbito de interoperabilidad contemplado en el marco europeo de interoperabilidad?";
 choices[38]= new Array();
 choices[38][0] = "Organizativa";
 choices[38][1] = "T&eacute;cnica";
 choices[38][2] = "Funcional";
 choices[38][3] = "Sem&aacute;ntica";
 answers[38] = choices[38][2];
 units[38] = "30";
 comments[38] = "Id Pregunta: 5536. NULL";


//  Id pregunta: 5546 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos:";
 choices[39]= new Array();
 choices[39][0] = "Establece que la utilizaci&oacute;n de las tecnolog&iacute;as de la informaci&oacute;n se har&aacute; de forma que no conlleve la existencia de restricciones o discriminaciones para los ciudadanos que se relacionen con las Administraciones P&uacute;blicas por medios no electr&oacute;nicos.";
 choices[39][1] = "Permite la obtenci&oacute;n de copias electr&oacute;nicas de los documentos electr&oacute;nicos de cualquier expediente electr&oacute;nico, sin restricci&oacute;n alguna.";
 choices[39][2] = "Crea la figura del Defensor del Usuario de la Administraci&oacute;n Electr&oacute;nica, encargado de inspeccionar la actuaci&oacute;n v&iacute;a medios electr&oacute;nicos, de las Administraciones P&uacute;blicas.";
 choices[39][3] = "La publicaci&oacute;n de actos y comunicaciones, que deban publicarse en tabl&oacute;n de anuncios &oacute; edictos, se realizar&aacute; &uacute;nicamente en la sede electr&oacute;nica correspondiente.";
 answers[39] = choices[39][0];
 units[39] = "43";
 comments[39] = "Id Pregunta: 5546. NULL";


//  Id pregunta: 5549 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  La Ley 11/2007, deroga:";
 choices[40]= new Array();
 choices[40][0] = "Los reglamentos de desarrollo de los art&iacute;culos relativos a Registros de las Administraciones P&uacute;blicas, Notificaciones Administrativas e Incorporaci&oacute;n de medios t&eacute;cnicos en la actividad administrativa (art. 38, 59, 45 respectivamente), de la Ley del R&eacute;gimen Jur&iacute;dico y del Procedimiento Administrativo Com&uacute;n (Ley 30/1992).";
 choices[40][1] = "Los art&iacute;culos 38, 59 y 45 de la Ley 30/1992 y su disposici&oacute;n adicional decimooctava.";
 choices[40][2] = "El Real Decreto 209/2003 y la Orden PRE/1551/2003.";
 choices[40][3] = "Modifica los art&iacute;culos 38, 45 y 59 de la Ley 30/1992 y deroga su disposici&oacute;n adicional 18&ordf; as&iacute; como todo aquello que contradiga la Ley 11/2007 en los Reglamentos de desarrollo de dichos art&iacute;culos.";
 answers[40] = choices[40][3];
 units[40] = "43";
 comments[40] = "Id Pregunta: 5549. NULL";


//  Id pregunta: 5659 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Seg&uacute;n el RD 1720/2007, cual de los siguientes es un requisito del documento de seguridad, exclusivo para los niveles medio y alto:";
 choices[41]= new Array();
 choices[41][0] = "La identificacion del responsable o responsables de seguridad.";
 choices[41][1] = "Los procedimientos de realizacion de copias de repaldo y de recuperacion de los datos en los ficheros o tratamientos automatizados.";
 choices[41][2] = "Los controles periodicos que se deban realizar para verificar el cumplimiento de lo dispuesto en el propio documento.";
 choices[41][3] = "La a) y la c) lo son.";
 answers[41] = choices[41][3];
 units[41] = "29";
 comments[41] = "Id Pregunta: 5659. ";


//  Id pregunta: 5793 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  De acuerdo con la Ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, se&ntilde;ale cu&aacute;l de las siguientes definiciones es FALSA:";
 choices[42]= new Array();
 choices[42][0] = "Actuaci&oacute;n administrativa automatizada: Actuaci&oacute;n administrativa producida por un Sistema de informaci&oacute;n adecuadamente programado sin necesidad de intervenci&oacute;n de una persona f&iacute;sica en cada caso singular. Incluye la producci&oacute;n de actos de tr&aacute;mite o resolutorios de procedimientos, as&iacute; como de meros actos de comunicaci&oacute;n.";
 choices[42][1] = "Aplicaci&oacute;n: Programa o conjunto de programas cuyo objeto es la resoluci&oacute;n de un problema mediante el uso de inform&aacute;tica.";
 choices[42][2] = "Aplicaci&oacute;n de fuentes abiertas: Aquella que se distribuye con una licencia que permite la libertad de ejecutarla, de conocer el c&oacute;digo fuente, de modificarla o mejorarla y de redistribuir copias a otros";
 choices[42][3] = "Autenticaci&oacute;n: Capacidad de los sistemas de informaci&oacute;n, y por ende de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 answers[42] = choices[42][3];
 units[42] = "43";
 comments[42] = "Id Pregunta: 5793. MAP 2008 A2";


//  Id pregunta: 5852 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  Se&ntilde;ale la respuesta correcta sobre la firma digital:";
 choices[43]= new Array();
 choices[43][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[43][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[43][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC";
 choices[43][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste";
 answers[43] = choices[43][1];
 units[43] = "30";
 comments[43] = "Id Pregunta: 5852. Pregunta 32";


//  Id pregunta: 6192 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  &iquest;Qu&eacute; norma es derogada por el Real Decreto 1671/2009?";
 choices[44]= new Array();
 choices[44][0] = "Real Decreto 263/1996";
 choices[44][1] = "Real Decreto 209/2003";
 choices[44][2] = "Real Decreto 1553/2005";
 choices[44][3] = "El Real Decreto 1671/2009 no deroga ninguna norma";
 answers[44] = choices[44][0];
 units[44] = "43";
 comments[44] = "Id Pregunta: 6192. Disposici&oacute;n derogatoria &uacute;nica";


//  Id pregunta: 6371 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  En el Esquema Nacional de Seguridad, las dimensiones de seguridad se adscribir&aacute;n a uno de los siguientes niveles:";
 choices[45]= new Array();
 choices[45][0] = "Bajo, Medio o Alto";
 choices[45][1] = "Limitado, Grave o Muy Grave";
 choices[45][2] = "B&aacute;sico, Medio o Alto";
 choices[45][3] = "B&aacute;sico, Medio, Alto o Muy Alto";
 answers[45] = choices[45][0];
 units[45] = "43";
 comments[45] = "Id Pregunta: 6371. Anexo I ENS. Y las categor&iacute;as pueden ser b&aacute;sica, media o alta.";


//  Id pregunta: 6382 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Las normas t&eacute;cnicas de interoperabilidad:";
 choices[46]= new Array();
 choices[46][0] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[46][1] = "Las aprobar&aacute;  la Secretaria de Estado para la Funci&oacute;n P&uacute;blica, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; el Ministerio de la Presidencia mediante Orden Ministerial.";
 choices[46][2] = "Las aprobar&aacute; el Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[46][3] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Real Decreto.";
 answers[46] = choices[46][0];
 units[46] = "43";
 comments[46] = "Id Pregunta: 6382. Disposici&oacute;n adicional primera ENI";


//  Id pregunta: 6406 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  En relaci&oacute;n a l&iacute;mites a los derechos exclusivos de la explotaci&oacute;n de un programa de ordenador por parte de quien sea su titular, establecidos en Ley de Propiedad Intelectual, se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[47]= new Array();
 choices[47][0] = "La realizaci&oacute;n de una copia de seguridad por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse por contrato en cuanto resulte necesaria para dicha utilizaci&oacute;n.";
 choices[47][1] = "La realizaci&oacute;n de copias privadas por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse.";
 choices[47][2] = "La realizaci&oacute;n de copias de seguridad por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse por contrato en cuanto resulten necesarias para dicha utilizaci&oacute;n.";
 choices[47][3] = "La realizaci&oacute;n de una copia privada por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse.";
 answers[47] = choices[47][0];
 units[47] = "36";
 comments[47] = "Id Pregunta: 6406. Art&iacute;culo 100 RDL 1/1996";


//  Id pregunta: 6598 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  El documento de seguridad de obligado cumplimiento para el personal con acceso a los ficheros automatizados y no automatizados de car&aacute;cter personal y a los sistemas de informaci&oacute;n, debo incluir:";
 choices[48]= new Array();
 choices[48][0] = "&Aacute;mbito de aplicaci&oacute;n del documento con especificaci&oacute;n detallada de los recursos protegidos";
 choices[48][1] = "Estructura de los ficheros con datos de car&aacute;cter personal y descripci&oacute;n de los sistemas de informaci&oacute;n que los tratan";
 choices[48][2] = "Procedimiento de notificaci&oacute;n, gesti&oacute;n y respuesta ante incidencias";
 choices[48][3] = "Todas las respuestas anteriores son correctas";
 answers[48] = choices[48][3];
 units[48] = "75";
 comments[48] = "Id Pregunta: 6598. NULL";


//  Id pregunta: 6599 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  En cuanto al acceso a datos personales a trav&eacute;s de redes de comunicaciones:";
 choices[49]= new Array();
 choices[49][0] = "Debe llevarse a cabo a trav&eacute;s de t&eacute;cnicas de cifrado";
 choices[49][1] = "Deber&aacute;n garantizar un nivel de seguridad equivalente al correspondiente a los accesos en modo local";
 choices[49][2] = "Debe permitir el registro de todos los accesos a los datos, guardando, hora, fecha, usuario y fichero accedido.";
 choices[49][3] = "Todas las respuestas anteriores son correctas";
 answers[49] = choices[49][1];
 units[49] = "75";
 comments[49] = "Id Pregunta: 6599. NULL";


//  Id pregunta: 7146 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Qu&eacute; art&iacute;culo de la Ley 11/2007 de 22 de Junio hace referencia a los Esquemas Nacionales de Interoperabilidad y Seguridad?";
 choices[50]= new Array();
 choices[50][0] = "Art&iacute;culo 52";
 choices[50][1] = "Art&iacute;culo 44";
 choices[50][2] = "Art&iacute;culo 42";
 choices[50][3] = "Art&iacute;culo 50";
 answers[50] = choices[50][2];
 units[50] = "43";
 comments[50] = "Id Pregunta: 7146. Examen TIC B 2009";


//  Id pregunta: 7312 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  La Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos (LAECSP), en su art&iacute;culo 42 establece que el esquema Nacional de Interoperabilidad y el Esquema Nacional de Seguridad se aprobar&aacute;n por:";
 choices[51]= new Array();
 choices[51][0] = "Real Decreto del Gobierno, a propuesta de la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 choices[51][1] = "Ley Org&aacute;nica, a propuesta de la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 choices[51][2] = "Real Decreto del Gobierno, a propuesta de la Comisi&oacute;n del Mercado de Telecomunicaciones y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 choices[51][3] = "Ley Org&aacute;nica, a propuesta de la Comisi&oacute;n del Mercado de Telecomunicaciones y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 answers[51] = choices[51][0];
 units[51] = "44";
 comments[51] = "Id Pregunta: 7312. NULL";


//  Id pregunta: 7314 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  La plataforma de servicios de validaci&oacute;n y firma electr&oacute;nica con la que las Administraciones P&uacute;blicas disponen de los instrumentos necesarios para implementar la autenticaci&oacute;n y firma electr&oacute;nica avanzada se denomina:";
 choices[52]= new Array();
 choices[52][0] = "SVF";
 choices[52][1] = "@Firma";
 choices[52][2] = "ValidaFirma";
 choices[52][3] = "VerificaFirma";
 answers[52] = choices[52][1];
 units[52] = "44";
 comments[52] = "Id Pregunta: 7314. NULL";


//  Id pregunta: 8213 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  La plataforma de validaci&oacute;n de certificados VALIDE del Ministerio de la Presidencia permite validar:";
 choices[53]= new Array();
 choices[53][0] = "Las URLs de los portales de las Administraciones P&uacute;blicas.";
 choices[53][1] = "Los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[53][2] = "Los certificados de sedes electr&oacute;nicas y los c&oacute;digos seguros de verificaci&oacute;n.";
 choices[53][3] = "Los certificados de sede electr&oacute;nica.";
 answers[53] = choices[53][3];
 units[53] = "30";
 comments[53] = "Id Pregunta: 8213. Examen TIC A1 2010";


//  Id pregunta: 8423 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[54]= new Array();
 choices[54][0] = "Seguridad integral";
 choices[54][1] = "An&aacute;lisis de riesgos";
 choices[54][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[54][3] = "Funci&oacute;n diferenciada";
 answers[54] = choices[54][1];
 units[54] = "43";
 comments[54] = "Id Pregunta: 8423. El principio es gesti&oacute;n de riesgos, no an&aacute;lisis de riesgos.";


//  Id pregunta: 8426 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas de interoperabilidad no est&aacute; contemplada en el Desarrollo del Esquema Nacional de Interoperabilidad (disposici&oacute;n adicional primera), en el Real Decreto 4/2010 del 8 de enero?";
 choices[55]= new Array();
 choices[55][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[55][1] = "Documento electr&oacute;nico";
 choices[55][2] = "Expediente electr&oacute;nico";
 choices[55][3] = "Sede electr&oacute;nica";
 answers[55] = choices[55][3];
 units[55] = "43";
 comments[55] = "Id Pregunta: 8426. ";


//  Id pregunta: 8738 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n do Datos de Car&aacute;cter Personal (LOPD) ser&aacute; de aplicaci&oacute;n a:";
 choices[56]= new Array();
 choices[56][0] = "&Uacute;nicamente los datos almacenados electr&oacute;nicamente, susceptibles de tratamiento y a toda modalidad de uso posterior de estos datos por lo sectores p&uacute;blico y privado.";
 choices[56][1] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, y a toda modalidad de uso posterior de estos datos por el sector p&uacute;blico, de forma obligatoria, y por el sector privado, como recomendaci&oacute;n.";
 choices[56][2] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, almacenados tanto en el sector p&uacute;blico como el privado, quedando excluidos los posibles usos posteriores de tales datos";
 choices[56][3] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles do tratamiento y a toda modalidad de uso posterior de estos datos por los sectores p&uacute;blico y privado";
 answers[56] = choices[56][3];
 units[56] = "29";
 comments[56] = "Id Pregunta: 8738. Examen TIC A2 2010 interna";


//  Id pregunta: 8934 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Las Administraciones competentes en materia de justicia no deber&aacute;n asegurar el acceso de todos los ciudadanos a los servicios electr&oacute;nicos proporcionados en su &aacute;mbito a trav&eacute;s de:";
 choices[57]= new Array();
 choices[57][0] = "Servicios de atenci&oacute;n telef&oacute;nica";
 choices[57][1] = "Las principales p&aacute;ginas web de la Administraci&oacute;n de Justicia";
 choices[57][2] = "Puntos de informaci&oacute;n electr&oacute;nicos, ubicados en los edificios judiciales";
 choices[57][3] = "Las oficinas de informaci&oacute;n y atenci&oacute;n al p&uacute;blico";
 answers[57] = choices[57][1];
 units[57] = "43";
 comments[57] = "Id Pregunta: 8934. ";


//  Id pregunta: 8937 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  La publicaci&oacute;n en las sedes judiciales electr&oacute;nicas de informaciones, servicios y transacciones respetar&aacute;:";
 choices[58]= new Array();
 choices[58][0] = "S&oacute;lo los est&aacute;ndares abiertos";
 choices[58][1] = "Aquellos est&aacute;ndares que sean de uso generalizado por los ciudadanos";
 choices[58][2] = "Los est&aacute;ndares que decida la autoridad competente";
 choices[58][3] = "Todos los anteriores";
 answers[58] = choices[58][1];
 units[58] = "43";
 comments[58] = "Id Pregunta: 8937. ";


//  Id pregunta: 8941 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[59]= new Array();
 choices[59][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[59][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[59][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[59][3] = "Ninguno de los anteriores";
 answers[59] = choices[59][2];
 units[59] = "43";
 comments[59] = "Id Pregunta: 8941. ";


//  Id pregunta: 8974 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Seg&uacute;n las definiciones incluidas en el art. 5 del R.D. 1720/2007, &ldquo;la persona f&iacute;sica o jur&iacute;dica, p&uacute;blica o privada u &oacute;rgano administrativo, al que se revelen los datos&rdquo; es:";
 choices[60]= new Array();
 choices[60][0] = "Encargado del tratamiento";
 choices[60][1] = "Destinatario o cesionario";
 choices[60][2] = "Afectado o interesado";
 choices[60][3] = "Tercero";
 answers[60] = choices[60][1];
 units[60] = "29";
 comments[60] = "Id Pregunta: 8974. ";


//  Id pregunta: 9002 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Seg&uacute;n la LOPD &iquest;cu&aacute;l de los siguientes no es un criterio conforme al cu&aacute;l se grad&uacute;e  la cuant&iacute;a de las sanciones?";
 choices[61]= new Array();
 choices[61][0] = "El grado de intencionalidad.";
 choices[61][1] = "El volumen de negocio o actividad del infractor.";
 choices[61][2] = "La vinculaci&oacute;n de la actividad del infractor con la realizaci&oacute;n de tratamientos de datos de car&aacute;cter personal.";
 choices[61][3] = "La acreditaci&oacute;n de que con anterioridad a los hechos constitutivos de infracci&oacute;n la entidad imputada no ten&iacute;a implantados procedimientos adecuados de actuaci&oacute;n en la recogida y tratamiento de los datos de car&aacute;cter personal.";
 answers[61] = choices[61][3];
 units[61] = "29";
 comments[61] = "Id Pregunta: 9002. ";


//  Id pregunta: 9047 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Cu&aacute;l no es un derecho de las personas seg&uacute;n la LOPD";
 choices[62]= new Array();
 choices[62][0] = "Impugnaci&oacute;n de valoraciones";
 choices[62][1] = "Derecho de acceso";
 choices[62][2] = "Derecho a cobrar dinero por el tratamiento de sus datos";
 choices[62][3] = "Derecho de rectificaci&oacute;n";
 answers[62] = choices[62][2];
 units[62] = "29";
 comments[62] = "Id Pregunta: 9047. ";


//  Id pregunta: 9066 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el expediente electr&oacute;nico es FALSO seg&uacute;n el RD 1671/2009?";
 choices[63]= new Array();
 choices[63][0] = "Los expedientes electr&oacute;nicos podr&aacute;n incluir otros expedientes electr&oacute;nicos";
 choices[63][1] = "El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico, firmado electr&oacute;nicamente mediante firma electr&oacute;nica avanzada";
 choices[63][2] = "La estructura y formato de los expedientes de los expedientes electr&oacute;nicos se ajustar&aacute;n a lo que diga el Esquema Nacional de Interoperabilidad";
 choices[63][3] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n";
 answers[63] = choices[63][1];
 units[63] = "43";
 comments[63] = "Id Pregunta: 9066. Art. 53.2b  El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico, firmado electr&oacute;nicamente mediante los sistemas previstos en la Ley 11/2007.";


//  Id pregunta: 9096 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[64]= new Array();
 choices[64][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[64][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[64][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[64][3] = "Todas las anteriores son verdaderas.";
 answers[64] = choices[64][3];
 units[64] = "36";
 comments[64] = "Id Pregunta: 9096. ";


//  Id pregunta: 9588 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  De acuerdo con el Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad, aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n, es la referente a la:";
 choices[65]= new Array();
 choices[65][0] = "Interoperabilidad, en general.";
 choices[65][1] = "Interoperabilidad organizativa. ";
 choices[65][2] = "Interoperabilidad t&eacute;cnica. ";
 choices[65][3] = "Interoperabilidad sem&aacute;ntica. ";
 answers[65] = choices[65][3];
 units[65] = "43";
 comments[65] = "Id Pregunta: 9588. Examen TIC A2 2011";


//  Id pregunta: 9590 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Seg&uacute;n se dispone en la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, los registros electr&oacute;nicos permitir&aacute;n la presentaci&oacute;n de solicitudes:";
 choices[66]= new Array();
 choices[66][0] = "Exclusivamente en los mismos horarios que los registros presenciales.";
 choices[66][1] = "Exclusivamente los d&iacute;as laborables del a&ntilde;o, durante las 24 horas. ";
 choices[66][2] = "Todos los d&iacute;as del a&ntilde;o, durante las 24 horas. ";
 choices[66][3] = "Exclusivamente los d&iacute;as h&aacute;biles del a&ntilde;o, durante las 24 horas.";
 answers[66] = choices[66][2];
 units[66] = "43";
 comments[66] = "Id Pregunta: 9590. Examen TIC A2 2011 interna";


//  Id pregunta: 9661 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  La Ley 11/2007 tiene en cuenta &quot;Otros sistemas de firma&quot;, que podr&aacute;n ser creados mediante:";
 choices[67]= new Array();
 choices[67][0] = "Real Decreto del Gobierno, previo informe de la CSAE";
 choices[67][1] = "Informe de la CSAE";
 choices[67][2] = "Orden Ministerial o Resoluci&oacute;n, previo informe de la CSAE.";
 choices[67][3] = "No necesita reglamento para su creaci&oacute;n.";
 answers[67] = choices[67][2];
 units[67] = "43";
 comments[67] = "Id Pregunta: 9661. NULL";


//  Id pregunta: 9876 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  De acuerdo con lo establecido en el RD 3/2010 de 8 de enero por el que se regula el Esquema Nacional de Seguridad,";
 choices[68]= new Array();
 choices[68][0] = "todos los sistemas de informaci&oacute;n ser&aacute;n objeto de una auditor&iacute;a regular ordinaria con car&aacute;cter anual";
 choices[68][1] = "los sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica no precisan ser auditados";
 choices[68][2] = "la auditor&iacute;a de los sistemas de categor&iacute;a media puede ser sustituida por una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema";
 choices[68][3] = "no es necesario que los informes de autoevaluaci&oacute;n sean conocidos por el responsable de seguridad competente. Basta con que los conozca el responsable del sistema.";
 answers[68] = choices[68][1];
 units[68] = "43";
 comments[68] = "Id Pregunta: 9876. TIC A1, Examen 2013";


//  Id pregunta: 9943 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  El establecimiento obligatorio de un sistema de registro de entrada de soportes que permita conocer, entre otros datos, el tipo de documento, fecha y hora, emisor y la persona autorizada responsables de la recepci&oacute;n, es una medida de seguridad de protecci&oacute;n de datos de car&aacute;cter personal de nivel";
 choices[69]= new Array();
 choices[69][0] = "b&aacute;sico.";
 choices[69][1] = "medio.";
 choices[69][2] = "alto.";
 choices[69][3] = "de auditor&iacute;a.";
 answers[69] = choices[69][1];
 units[69] = "29";
 comments[69] = "Id Pregunta: 9943. TIC A1, Examen 2013";


//  Id pregunta: 10155 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Seg&uacute;n el ENS cu&aacute;l de las siguientes afirmaciones es incorrecta";
 choices[70]= new Array();
 choices[70][0] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta la informaci&oacute;n se cifrar&aacute; tanto durante su almacenamiento como durante su transmisi&oacute;n. S&oacute;lo estar&aacute; en claro mientras se est&aacute; haciendo uso de ella. ";
 choices[70][1] = "Si un sistema es de categor&iacute;a b&aacute;sica es necesario realizar un an&aacute;lisis de riesgos informal.";
 choices[70][2] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta se emplear&aacute;n, preferentemente, dispositivos hw en el establecimiento y utilizaci&oacute;n de la VPN.";
 choices[70][3] = "Para aquellos sistemas cuya dimensi&oacute;n de trazabilidad sea media es necesario llevar un registro de la actividad de los usuarios y protecci&oacute;n de los registros de actividad. ";
 answers[70] = choices[70][3];
 units[70] = "43";
 comments[70] = "Id Pregunta: 10155. ";


//  Id pregunta: 10268 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Las infracciones leves de la Ley 15/1999:";
 choices[71]= new Array();
 choices[71][0] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben al a&ntilde;o";
 choices[71][1] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben al a&ntilde;o";
 choices[71][2] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben a los seis meses";
 choices[71][3] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben a los seis meses";
 answers[71] = choices[71][1];
 units[71] = "29";
 comments[71] = "Id Pregunta: 10268. Art&iacute;culos 45.1 y 47.1 de la Ley 15/1999";


//  Id pregunta: 10446 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  De acuerdo con la Ley Org&aacute;nica 15/1999, de protecci&oacute;n de datos de car&aacute;cter personal, los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal ";
 choices[72]= new Array();
 choices[72][0] = "est&aacute;n en su totalidad excluidos del r&eacute;gimen general de esa Ley.";
 choices[72][1] = "no pueden recoger m&aacute;s datos que los autorizados por el Juez instructor de la causa penal. ";
 choices[72][2] = "pueden recoger datos personales sin consentimiento del afectado para la represi&oacute;n de infracciones penales. ";
 choices[72][3] = "no permiten la cancelaci&oacute;n de los datos personales en ellos registrados con fines policiales. ";
 answers[72] = choices[72][2];
 units[72] = "29";
 comments[72] = "Id Pregunta: 10446. Examen TIC A1 2013";


//  Id pregunta: 10544 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  El quince de febrero de 2013 el Consejo de Ministros aprob&oacute; la Agenda Digital para Espa&ntilde;a como la estrategia del Gobierno para desarrollar la econom&iacute;a y la sociedad digital en Espa&ntilde;a durante el periodo 2013-2015.";
 choices[73]= new Array();
 choices[73][0] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Telecomunicaciones y de Sociedad de la Informaci&oacute;n. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[73][1] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Telecomunicaciones y de Sociedad de la Informaci&oacute;n. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[73][2] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Administraci&oacute;n Electr&oacute;nica. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[73][3] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Administraci&oacute;n Electr&oacute;nica. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 answers[73] = choices[73][0];
 units[73] = "30";
 comments[73] = "Id Pregunta: 10544. http://www.agendadigital.gob.es/agenda-digital/Paginas/agenda-digital.aspx";


//  Id pregunta: 10587 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  Europa 2020 tiene como prioridades un crecimiento:";
 choices[74]= new Array();
 choices[74][0] = "Global, tecnol&oacute;gico y sostenible.";
 choices[74][1] = "Informado, sostenible y solidario.";
 choices[74][2] = "Inteligente, sostenible e integrador.";
 choices[74][3] = "Arm&oacute;nico, estable y social.";
 answers[74] = choices[74][2];
 units[74] = "30";
 comments[74] = "Id Pregunta: 10587. ";


//  Id pregunta: 10591 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Son europeos:";
 choices[75]= new Array();
 choices[75][0] = "El cuerpo de reguladores de comunicaciones electr&oacute;nicas BEREC";
 choices[75][1] = "El programa para el impulso de la Sociedad de la Informaci&oacute;n IDESI";
 choices[75][2] = "El sistema inform&aacute;tico JOIN para el intercambio de identidades electr&oacute;nicas";
 choices[75][3] = "La red SARA";
 answers[75] = choices[75][0];
 units[75] = "30";
 comments[75] = "Id Pregunta: 10591. ";


//  Id pregunta: 10675 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor para &quot;las previsiones relativas al registro electr&oacute;nico de apoderamientos, registro electr&oacute;nico, registro de empleados p&uacute;blicos habilitados, punto de acceso general electr&oacute;nico de la Administraci&oacute;n y archivo &uacute;nico electr&oacute;nico&quot; en un plazo de:";
 choices[76]= new Array();
 choices[76][0] = "2 a&ntilde;os despu&eacute;s de su entrada en vigor.";
 choices[76][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n.";
 choices[76][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n.";
 choices[76][3] = "6 meses despu&eacute;s de su publicaci&oacute;n.";
 answers[76] = choices[76][0];
 units[76] = "30";
 comments[76] = "Id Pregunta: 10675. ";


//  Id pregunta: 10682 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Seg&uacute;n la Ley 39/2015 cual de las siguientes opciones no se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[77]= new Array();
 choices[77][0] = "A ser tratados con respeto y deferencia por las autoridades y empleados p&uacute;blicos, que habr&aacute;n de facilitarles el ejercicio de sus derechos y el cumplimiento de sus obligaciones.";
 choices[77][1] = "A la obtenci&oacute;n y utilizaci&oacute;n de los medios de identificaci&oacute;n y firma electr&oacute;nica contemplados en esta Ley.";
 choices[77][2] = "A la protecci&oacute;n de datos de car&aacute;cter personal, y en particular a la seguridad y confidencialidad de los datos que figuren en los ficheros, sistemas y aplicaciones de las Administraciones P&uacute;blicas.";
 choices[77][3] = "Archivo y registro del expediente asociado con todo procedimiento administrativo.";
 answers[77] = choices[77][3];
 units[77] = "30";
 comments[77] = "Id Pregunta: 10682. ";


//  Id pregunta: 10707 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l no es un componente del &iacute;ndice del expediente electr&oacute;nico?";
 choices[78]= new Array();
 choices[78][0] = "Fecha de generaci&oacute;n del &iacute;ndice.";
 choices[78][1] = "Descripci&oacute;n de los documentos electr&oacute;nicos.";
 choices[78][2] = "Disposici&oacute;n de los documentos en carpetas.";
 choices[78][3] = "Identificadores de los documentos electr&oacute;nicos.";
 answers[78] = choices[78][1];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10707. ";


//  Id pregunta: 10708 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;Qu&eacute; dato/s sobre los documentos electr&oacute;nicos no se incluyen en el &iacute;ndice electr&oacute;nico?";
 choices[79]= new Array();
 choices[79][0] = "Identificador del documento.";
 choices[79][1] = "El propio documento electr&oacute;nico.";
 choices[79][2] = "La huella digital del documento.";
 choices[79][3] = "La funci&oacute;n resumen utlizada para la obtenci&oacute;n de la huella digital.";
 answers[79] = choices[79][1];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10708. ";


//  Id pregunta: 10712 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l no es seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre las entidades registrales una caracter&iacute;stica de la misma?";
 choices[80]= new Array();
 choices[80][0] = "Inclusi&oacute;n de metadatos que faciliten el intercambio de asientos.";
 choices[80][1] = "Incorporaci&oacute;n de ficheros adjuntos a los intercambios.";
 choices[80][2] = "Orientaci&oacute;n a arquitecturas de intermediaci&oacute;n.";
 choices[80][3] = "Mejora en los mecanismos de control del intercambio.";
 answers[80] = choices[80][0];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10712. ";


//  Id pregunta: 10754 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Qui&eacute;n dirige a los tres componentes de la Estructura de Ciberseguridad Nacional (el Consejo de Seguridad Nacional; el Comit&eacute; Especializado de Ciberseguridad; el Comit&eacute; Especializado de Situaci&oacute;n?";
 choices[81]= new Array();
 choices[81][0] = "El Presidente del Gobierno.";
 choices[81][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[81][2] = "El Ministro de Defensa.";
 choices[81][3] = "El CIO de la AGE.";
 answers[81] = choices[81][0];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10754. ";


//  Id pregunta: 10776 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Se&ntilde;ale la respuesta correcta, seg&uacute;n la Ley Org&aacute;nica 15/1999, el Director de la Agencia de Protecci&oacute;n de Datos es nombrado de entre:";
 choices[82]= new Array();
 choices[82][0] = "Los miembros del Consejo Consultivo, mediante Orden Ministerial, y su mandato es de 4 a&ntilde;os.";
 choices[82][1] = "Los miembros del Consejo Consultivo, mediante Real Decreto, y su mandato es de 4 a&ntilde;os.";
 choices[82][2] = "Los miembros del Consejo Asesor del Ministerio de Justicia, mediante Orden Ministerial, y su mandato es de 5 a&ntilde;os.";
 choices[82][3] = "Los miembros del Consejo de Gobierno, mediante Real Decreto, y su mandato es de 5 a&ntilde;os.";
 answers[82] = choices[82][1];
 units[82] = "29";
 comments[82] = "Id Pregunta: 10776. Examen GSI 2014";


//  Id pregunta: 10782 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Respecto al sistema de c&oacute;digo seguro de verificaci&oacute;n, seg&uacute;n el Real Decreto 1671/2009, &iquest;cu&aacute;l de las siguientes es una afirmaci&oacute;n verdadera?";
 choices[83]= new Array();
 choices[83][0] = "Garantiza la confidencialidad de un documento.";
 choices[83][1] = "Garantiza la posibilidad de verificar el documento que tenga asociado por tiempo ilimitado.";
 choices[83][2] = "Su aplicaci&oacute;n requerir&aacute; una orden ministerial del Director General del organismo p&uacute;blico.";
 choices[83][3] = "Garantiza su vinculaci&oacute;n con el documento generado y con el firmante.";
 answers[83] = choices[83][3];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10782. Examen GSI 2014";


//  Id pregunta: 10783 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Seg&uacute;n el art&iacute;culo 40 de la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, sobre el Comit&eacute; Sectorial de administraci&oacute;n electr&oacute;nica, &iquest;cu&aacute;l de las siguientes opciones es una funci&oacute;n de dicho &oacute;rgano?";
 choices[84]= new Array();
 choices[84][0] = "Desarrollar la normativa en materia de administraci&oacute;n electr&oacute;nica a nivel nacional.";
 choices[84][1] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[84][2] = "Elaborar un informe anual sobre el nivel de avance de la administraci&oacute;n electr&oacute;nica a nivel nacional, auton&oacute;mico y municipal.";
 choices[84][3] = "Estimular el crecimiento en el empleo de la administraci&oacute;n electr&oacute;nica por parte de ciudadanos y empresas.";
 answers[84] = choices[84][1];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10783. Examen GSI 2014";


//  Id pregunta: 10933 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Las entidades locales adheridas al servicio com&uacute;n denominado &ldquo;Emprende en 3&rdquo;:";
 choices[85]= new Array();
 choices[85][0] = "Aceptar&aacute;n y utilizar&aacute;n el modelo tipo de declaraci&oacute;n responsable de conformidad con la normativa que regula el proyecto.";
 choices[85][1] = "Podr&aacute;n rechazar las declaraciones responsables recibidas si no vienen acompa&ntilde;adas de la documentaci&oacute;n obligatoria para la puesta en marcha de la empresa.";
 choices[85][2] = "Podr&aacute;n rechazar las declaraciones responsables recibidas si no vienen acompa&ntilde;adas de la documentaci&oacute;n obligatoria para la puesta en marcha de la empresa.";
 choices[85][3] = "La tramitaci&oacute;n de las declaraciones responsables recibidas por &ldquo;Emprende en 3&rdquo; debe ser finalizada antes de los 5 d&iacute;as h&aacute;biles desde su presentaci&oacute;n.";
 answers[85] = choices[85][0];
 units[85] = "44";
 comments[85] = "Id Pregunta: 10933. TIC A1 AGE 2014";


//  Id pregunta: 10960 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  El &oacute;rgano responsable del sistema Cl@ve, la plataforma com&uacute;n del Sector P&uacute;blico Administrativo Estatal para la identificaci&oacute;n, autenticaci&oacute;n y firma electr&oacute;nica mediante el uso de claves concertadas, ser&aacute;:";
 choices[86]= new Array();
 choices[86][0] = "La Direcci&oacute;n General de la Polic&iacute;a.";
 choices[86][1] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[86][2] = "La F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda.";
 choices[86][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 answers[86] = choices[86][1];
 units[86] = "44";
 comments[86] = "Id Pregunta: 10960. TIC A1 AGE 2014";


//  Id pregunta: 10973 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;En virtud de qu&eacute; instrumento jur&iacute;dico se aprueban y publican las Normas T&eacute;cnicas de Interoperabilidad?";
 choices[87]= new Array();
 choices[87][0] = "Orden Ministerial del Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[87][1] = "Resoluci&oacute;n del Secretario de Estado de Presidencia.";
 choices[87][2] = "Resoluci&oacute;n del Secretario de Estado de Administraciones P&uacute;blicas.";
 choices[87][3] = "Reglamento del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 answers[87] = choices[87][2];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10973. TIC A1 AGE 2014";


//  Id pregunta: 11012 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza el secreto de las comunicaciones?";
 choices[88]= new Array();
 choices[88][0] = "Art&iacute;culo 15";
 choices[88][1] = "17";
 choices[88][2] = "Art&iacute;culo 18";
 choices[88][3] = "Art&iacute;culo 19";
 answers[88] = choices[88][2];
 units[88] = "29";
 comments[88] = "Id Pregunta: 11012. ";


//  Id pregunta: 11028 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l es una soluci&oacute;n de servicio en la nube para el registro en las administraciones?";
 choices[89]= new Array();
 choices[89][0] = "ORVE";
 choices[89][1] = "GEISER";
 choices[89][2] = "Las 2 anteriores";
 choices[89][3] = "Ambas son soluciones, pero no en la nube";
 answers[89] = choices[89][2];
 units[89] = "44";
 comments[89] = "Id Pregunta: 11028. ";


//  Id pregunta: 11100 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Seguridad?";
 choices[90]= new Array();
 choices[90][0] = "Proporcionalidad";
 choices[90][1] = "Respeto al derecho de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[90][2] = "Derecho a la garant&iacute;a de seguridad y confidencialidad";
 choices[90][3] = "Gesti&oacute;n de riesgos";
 answers[90] = choices[90][3];
 units[90] = "30";
 comments[90] = "Id Pregunta: 11100. ";


//  Id pregunta: 11101 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[91]= new Array();
 choices[91][0] = "La interoperabilidad como cualidad integral";
 choices[91][1] = "Car&aacute;cter multidimensional de la interoperabilidad";
 choices[91][2] = "Enfoque de soluciones multilaterales";
 choices[91][3] = "Todos los anteriores";
 answers[91] = choices[91][3];
 units[91] = "30";
 comments[91] = "Id Pregunta: 11101. ";


//  Id pregunta: 11114 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l no es un requisito para integrarse en la plataforma de intermediaci&oacute;n?";
 choices[92]= new Array();
 choices[92][0] = "Estar conectado a Red SARA.";
 choices[92][1] = "Disponer de certificados X509 de sello de &oacute;rgano.";
 choices[92][2] = "Disponer de un Servicio Web integrado para la gesti&oacute;n automatizada del tr&aacute;mite";
 choices[92][3] = "Tener un convenio firmado para el intercambio bilateral de datos.";
 answers[92] = choices[92][1];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11114. ";


//  Id pregunta: 11197 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qu&eacute; objetivo de porcentaje de i+d marca la estrategia europea 2020 para la Uni&oacute;n Europea?";
 choices[93]= new Array();
 choices[93][0] = "2% del PIB";
 choices[93][1] = "3%del PIB";
 choices[93][2] = "5% del PIB";
 choices[93][3] = "La estrategia Europa 2020 no marca ning&uacute;n objetivo en materia de i+d";
 answers[93] = choices[93][1];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11197. ";


//  Id pregunta: 11199 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Estrategia Europea 2020 en materia de sostenibilidad energ&eacute;tica?";
 choices[94]= new Array();
 choices[94][0] = "20% de las energ&iacute;as deben proceder de una fuente renovable";
 choices[94][1] = "20% de aumento de la eficiencia energ&eacute;tica";
 choices[94][2] = "20% de los coches deben ser el&eacute;ctricos";
 choices[94][3] = "Emisiones de gases invernadero un 20% menores a los niveles de 1990";
 answers[94] = choices[94][2];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11199. ";


//  Id pregunta: 11310 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En la NTI de firma electr&oacute;nica, se establecen los valores que puede almacenar el metadato &quot;tipo de firma&quot;. Seleccione la serie correcta de valores";
 choices[95]= new Array();
 choices[95][0] = "Xades Detached, Xades Enveloped, Cades Detached, Cades Enveloped, Pades Enveloped, Pades Detached";
 choices[95][1] = "CSV, Xades Detached, Xades Enveloped, Cades Detached; Cades Enveloped; Pades";
 choices[95][2] = "CSV, Xades Detached, Xades Enveloping, Cades Detached; Cades Enveloping";
 choices[95][3] = "Xades Detached, Xades Enveloping, Cades Detached; Cades Enveloping";
 answers[95] = choices[95][1];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11310. ";


//  Id pregunta: 11329 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En relaci&oacute;n con la plataforma Cl@ve, indique la opci&oacute;n falsa";
 choices[96]= new Array();
 choices[96][0] = "Se desarrolla al hilo de una medida del informe CORA";
 choices[96][1] = "Est&aacute; bajo la titularidad de la DTIC";
 choices[96][2] = "La orden que lo aprueba (MINHAP/1838/2014) se publica seg&uacute;n lo establecido en el art&iacute;culo 11 del RD 1671/2009";
 choices[96][3] = "Plataforma com&uacute;n del sector p&uacute;blico estatal para identificar, autenticar y firmar electr&oacute;nicamente, mediante el uso de claves concertadas";
 answers[96] = choices[96][2];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11329. ";


//  Id pregunta: 11492 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes NO es un agente recogido por la NTI de Protocolo de Intermediaci&oacute;n de Datos?";
 choices[97]= new Array();
 choices[97][0] = "Emisor";
 choices[97][1] = "Remitente";
 choices[97][2] = "Cesionario";
 choices[97][3] = "Cedente";
 answers[97] = choices[97][1];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11492. NULL";


//  Id pregunta: 11592 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Indique cu&aacute;l no es un principio general de la Ley 11/2007:";
 choices[98]= new Array();
 choices[98][0] = "Accesibilidad";
 choices[98][1] = "Proporcionalidad";
 choices[98][2] = "Coordinaci&oacute;n";
 choices[98][3] = "Todos los anteriores son correctos";
 answers[98] = choices[98][2];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11592. ";


//  Id pregunta: 11603 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La soluci&oacute;n integral de registro para cualquier organismo p&uacute;blico, que cubre tanto la gesti&oacute;n de sus oficinas de registro de entrada/salida como la recepci&oacute;n y env&iacute;o de registros en las unidades tramitadoras destinatarias de la documentaci&oacute;n sellama:";
 choices[99]= new Array();
 choices[99][0] = "ORVE";
 choices[99][1] = "SIR";
 choices[99][2] = "GEISER";
 choices[99][3] = "Registro Electr&oacute;nico Com&uacute;n";
 answers[99] = choices[99][2];
 units[99] = "44";
 comments[99] = "Id Pregunta: 11603. ";


