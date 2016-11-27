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

//  Id pregunta: 700 AÃ±o de creación de pregunta: 2009-01-01
 questions[0]= "1)  Respecto a la LSSI puede decirse que:";
 choices[0]= new Array();
 choices[0][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[0][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente";
 choices[0][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los remitentes de las misma";
 choices[0][3] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las misma";
 answers[0] = choices[0][3];
 units[0] = "30";
 comments[0] = "Id Pregunta: 700. Ley 34/2002, art&iacute;culo 21";


//  Id pregunta: 738 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  El Servicio de Notificaciones Telem&aacute;ticas Seguras, que se basa en la Direcci&oacute;n Electr&oacute;nica &Uacute;nica (actualmente llamada Direcci&oacute;n Electr&oacute;nica Habilitada (DEH)), es un servicio ofrecido por la Administraci&oacute;n del Estado prestado en colaboraci&oacute;n con:";
 choices[1]= new Array();
 choices[1][0] = "Telef&oacute;nica de Espa&ntilde;a, S.A.";
 choices[1][1] = "La entidad p&uacute;blica empresarial Red.es";
 choices[1][2] = "Sociedad Estatal de Correos y Tel&eacute;grafos";
 choices[1][3] = "Microsoft";
 answers[1] = choices[1][2];
 units[1] = "30";
 comments[1] = "Id Pregunta: 738. Examen TIC MAP B 2004";


//  Id pregunta: 1498 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La Ley de Servicios de la Sociedad de la Informacion y Comercio Electr&oacute;nico se conoce como:";
 choices[2]= new Array();
 choices[2][0] = "30/1992";
 choices[2][1] = "34/2002";
 choices[2][2] = "30/2002";
 choices[2][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[2] = choices[2][1];
 units[2] = "30";
 comments[2] = "Id Pregunta: 1498. NULL";


//  Id pregunta: 1531 AÃ±o de creación de pregunta: 2003-01-01
 questions[3]= "4)  El Real Decreto 209/2003:";
 choices[3]= new Array();
 choices[3][0] = "Modifica  la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[3][1] = "Modifica  la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica y regula los registros y las notificaciones telem&aacute;ticas";
 choices[3][2] = "Regula los registros y las notificaciones telem&aacute;ticas y modifica la ley 59/2003";
 choices[3][3] = "Todas las anteriores son ciertas";
 answers[3] = choices[3][1];
 units[3] = "30";
 comments[3] = "Id Pregunta: 1531. ";


//  Id pregunta: 1883 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[4]= new Array();
 choices[4][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 hasta 600.000 euros. ";
 choices[4][1] = "Por la comisi&oacute;n de infracciones graves, multa de 30.001 hasta 150.000 euros";
 choices[4][2] = "Por la comisi&oacute;n de infracciones leves, multa de hasta 30.000 euros.";
 choices[4][3] = "La primera es falsa";
 answers[4] = choices[4][3];
 units[4] = "30";
 comments[4] = "Id Pregunta: 1883. Ley 34/2002, art&iacute;culo 39";


//  Id pregunta: 2862 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  &iquest;Qu&eacute; pretende la CE con los principios ONP?";
 choices[5]= new Array();
 choices[5][0] = " la definici&oacute;n de un conjunto de medidas reguladoras para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[5][1] = " la definici&oacute;n de un conjunto de medidas  t&eacute;cnicas para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[5][2] = " la definici&oacute;n de un conjunto de medidas econ&oacute;micas para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[5][3] = "Todas ellas";
 answers[5] = choices[5][3];
 units[5] = "30";
 comments[5] = "Id Pregunta: 2862. ";


//  Id pregunta: 4246 AÃ±o de creación de pregunta: 2007-01-01
 questions[6]= "7)  Seg&uacute;n la Ley 11/2007 de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos:";
 choices[6]= new Array();
 choices[6][0] = "Se deja en manos de las propias Administraciones determinar si los ciudadanos van a poder de modo efectivo, o no, relacionarse por medios electr&oacute;nicos con ellas.";
 choices[6][1] = "Afecta s&oacute;lo a la Administraci&oacute;n General del Estado, aunque se espera que el resto de administraciones (auton&oacute;mica y local) adopten algunas de las medidas expresadas en la ley de forma voluntaria.";
 choices[6][2] = "Se garantiza el derecho del ciudadano a no tener que presentar informaci&oacute;n que se encuentre ya en poder de las administraciones.";
 choices[6][3] = "Las Administraciones podr&aacute;n permitir a los ciudadanos que consulten el estado de tramitaci&oacute;n de los procedimientos que se tengan en marcha, pero en ning&uacute;n caso estar&aacute;n obligadas a ello.";
 answers[6] = choices[6][2];
 units[6] = "43";
 comments[6] = "Id Pregunta: 4246. Sobre Proyecto LAECAP";


//  Id pregunta: 4248 AÃ±o de creación de pregunta: 2007-01-01
 questions[7]= "8)  El desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a NO se dirige hacia:";
 choices[7]= new Array();
 choices[7][0] = "Que los ciudadanos puedan elegir el canal de acceso a las AAPP (tel&eacute;fono, Internet, SMSs, TDT...).";
 choices[7][1] = "Que los ciudadanos puedan acceder a los servicios de las AAPP 24 horas al d&iacute;a, 7 d&iacute;as a la semana.";
 choices[7][2] = "Que los tr&aacute;mites por medios electr&oacute;nicos no obtengan la misma validez que los realizados por medios presenciales.";
 choices[7][3] = "Que los ciudadanos no tengan que presentar documentaci&oacute;n que obre en poder de las AAPP.";
 answers[7] = choices[7][2];
 units[7] = "30";
 comments[7] = "Id Pregunta: 4248. NULL";


//  Id pregunta: 4254 AÃ±o de creación de pregunta: 2007-01-01
 questions[8]= "9)  Como parte de la legislaci&oacute;n para el impulso de la sociedad de la informaci&oacute;n se incluyen:";
 choices[8]= new Array();
 choices[8][0] = "La Ley 34/ 2002 de Servicios de la Sociedad de la Informaci&oacute;n y del Comercio Electr&oacute;nico";
 choices[8][1] = "La Ley 59/2003 de 19 de diciembre de firma electr&oacute;nica";
 choices[8][2] = "La Directiva Comunitaria 2000/31/CE de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico";
 choices[8][3] = "Todas las anteriores";
 answers[8] = choices[8][3];
 units[8] = "30";
 comments[8] = "Id Pregunta: 4254. NULL";


//  Id pregunta: 4576 AÃ±o de creación de pregunta: 2007-01-01
 questions[9]= "10)  Cual de los siguientes aspectos NO son tratados en Ia Ley 34/2002, de 11 de julio, de servicios de Ia sociedad de la informaci&oacute;n y de comercio electr&oacute;nico:";
 choices[9]= new Array();
 choices[9][0] = "obligaciones y responsabilidades de los destinatarios de los servicios.";
 choices[9][1] = "promueve Ia elaboraci&oacute;n de c&oacute;digos de conducta sobre las materias reguladas en esta Ley.";
 choices[9][2] = "accesibilidad para las personas can discapacidad y de edad avanzada a Ia informaci&oacute;n proporcionada por medios electr&oacute;nicos.";
 choices[9][3] = "sistema de asignaci&oacute;n de nombres de dominio bajo el &quot;.es&quot;.";
 answers[9] = choices[9][0];
 units[9] = "30";
 comments[9] = "Id Pregunta: 4576. ";


//  Id pregunta: 4698 AÃ±o de creación de pregunta: 2007-01-01
 questions[10]= "11)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue eleconomista";
 choices[10]= new Array();
 choices[10][0] = "Fritz Machlup";
 choices[10][1] = "Charles Babbage";
 choices[10][2] = "Herman Hollerith";
 choices[10][3] = "Howard Aiken";
 answers[10] = choices[10][0];
 units[10] = "30";
 comments[10] = "Id Pregunta: 4698. Examen 2006 JCYL";


//  Id pregunta: 4780 AÃ±o de creación de pregunta: 2007-01-01
 questions[11]= "12)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[11]= new Array();
 choices[11][0] = "Seguridad. Los prestadores de servicios deber&aacute;n informar a sus clientes sobre medidas de seguridad que apliquen en sus servicios";
 choices[11][1] = "Accesibilidad. Se establece que las p&aacute;ginas web de las AAPP alcancen el nivel medio de accesibilidad";
 choices[11][2] = "Ampliaci&oacute;n de los nombres de dominio. Deber&aacute;n poder asignarse nombres de dominio .es que contengan el car&aacute;cter &quot;&ntilde;&quot;";
 choices[11][3] = "Todas las anteriores son ciertas";
 answers[11] = choices[11][3];
 units[11] = "30";
 comments[11] = "Id Pregunta: 4780. Ley 56/2007";


//  Id pregunta: 5005 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma es undispositivo que debe ofrecer al menos ciertas garant&iacute;as. &iquest;Cu&aacute;l de las siguientes NO es una de ellas?";
 choices[12]= new Array();
 choices[12][0] = "Que los datos utilizados para la generaci&oacute;n de firma puedan producirse s&oacute;lo una vez y asegurarrazonablemente su secreto.";
 choices[12][1] = "Que los datos utilizados para la generaci&oacute;n de firma puedan ser derivados de los de verificaci&oacute;n de firma ode la propia firma";
 choices[12][2] = "Que los datos de creaci&oacute;n de firma puedan ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;npor terceros.";
 choices[12][3] = "Que el dispositivo utilizado no alteren los datos o el documento que deba firmarse ni impidan que &eacute;ste semuestre al firmante antes del proceso de firma.";
 answers[12] = choices[12][1];
 units[12] = "30";
 comments[12] = "Id Pregunta: 5005. Examen TIC A 2007 (Ley 59/2003, art&iacute;culo 24)";


//  Id pregunta: 5010 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  Seg&uacute;n la ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n dela vigencia de un certificado?:";
 choices[13]= new Array();
 choices[13][0] = "Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado";
 choices[13][1] = "Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por &eacute;ste, un terceroautorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica";
 choices[13][2] = "Resoluci&oacute;n judicial o administrativa que lo ordene";
 choices[13][3] = "Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador deservicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso";
 answers[13] = choices[13][3];
 units[13] = "30";
 comments[13] = "Id Pregunta: 5010. Examen TIC A 2007 (Ley 59/2003, art&iacute;culo 8)";


//  Id pregunta: 5019 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  Seg&uacute;n el RD 209/2003, de 21 de febrero, con respecto a las notificaciones telem&aacute;ticas, cuando exista constancia dela recepci&oacute;n de una notificaci&oacute;n, se considerar&aacute; que &eacute;sta ha sido rechazada cuando no se haya accedido a sucontenido en un plazo de:";
 choices[14]= new Array();
 choices[14][0] = "10 d&iacute;as naturales";
 choices[14][1] = "10 d&iacute;as h&aacute;biles";
 choices[14][2] = "20 d&iacute;as naturales";
 choices[14][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido";
 answers[14] = choices[14][0];
 units[14] = "30";
 comments[14] = "Id Pregunta: 5019. Examen TIC A 2007";


//  Id pregunta: 5131 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguiente afirmaciones es cierta respecto a la firma electr&oacute;nica?";
 choices[15]= new Array();
 choices[15][0] = "La firma de documento se encuentra siempre dentro del documento original.";
 choices[15][1] = "En los certificados de persona jur&iacute;dica la identificaci&oacute;n de la persona solicitante se incluye en el certificado electr&oacute;nico.";
 choices[15][2] = "La extinci&oacute;n de un certificado s&oacute;lo puede ser por resoluci&oacute;n judicial que lo ordene.";
 choices[15][3] = "La extinci&oacute;n o suspensi&oacute;n de la vigencia de un certificado electr&oacute;nico tendr&aacute; efectos retroactivos.";
 answers[15] = choices[15][1];
 units[15] = "30";
 comments[15] = "Id Pregunta: 5131. Examen TIC A Castilla La Mancha 2007 (Ley 59/2003, art&iacute;culo 7.2)";


//  Id pregunta: 5133 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  Seg&uacute;n la LSSI, cu&aacute;les son las p&aacute;ginas web que deben cumplir criterios de accesibilidad:";
 choices[16]= new Array();
 choices[16][0] = "Todas, independientemente de su finalidad.";
 choices[16][1] = "Las de la Administraci&oacute;n P&uacute;blica a partir del 31 de Diciembre de 2004";
 choices[16][2] = "Las de la Administraci&oacute;n P&uacute;blica a partir del 31 de Diciembre de 2008";
 choices[16][3] = "S&oacute;lo las comerciales";
 answers[16] = choices[16][2];
 units[16] = "30";
 comments[16] = "Id Pregunta: 5133. Examen TIC A Castilla La Mancha 2007 (Ley 34/2002, disposici&oacute;n adicional quinta, modificado por Ley 56/2007, art&iacute;culo 4)";


//  Id pregunta: 5549 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  La Ley 11/2007, deroga:";
 choices[17]= new Array();
 choices[17][0] = "Los reglamentos de desarrollo de los art&iacute;culos relativos a Registros de las Administraciones P&uacute;blicas, Notificaciones Administrativas e Incorporaci&oacute;n de medios t&eacute;cnicos en la actividad administrativa (art. 38, 59, 45 respectivamente), de la Ley del R&eacute;gimen Jur&iacute;dico y del Procedimiento Administrativo Com&uacute;n (Ley 30/1992).";
 choices[17][1] = "Los art&iacute;culos 38, 59 y 45 de la Ley 30/1992 y su disposici&oacute;n adicional decimooctava.";
 choices[17][2] = "El Real Decreto 209/2003 y la Orden PRE/1551/2003.";
 choices[17][3] = "Modifica los art&iacute;culos 38, 45 y 59 de la Ley 30/1992 y deroga su disposici&oacute;n adicional 18&ordf; as&iacute; como todo aquello que contradiga la Ley 11/2007 en los Reglamentos de desarrollo de dichos art&iacute;culos.";
 answers[17] = choices[17][3];
 units[17] = "43";
 comments[17] = "Id Pregunta: 5549. NULL";


//  Id pregunta: 5706 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos, transpone aspectos de:";
 choices[18]= new Array();
 choices[18][0] = "De la directiva 200/31/CE relativos a Servicios de la Sociedad de la Informaci&oacute;n.";
 choices[18][1] = "De la Directiva 2006/123/CE relativa a los servicios en el mercado interior.";
 choices[18][2] = "De la Directiva 2002/58/CE sobre la privacidad y las comunicaciones electr&oacute;nicas.";
 choices[18][3] = "No recoge la transposici&oacute;n de articulado relativo a ninguna Directiva.";
 answers[18] = choices[18][1];
 units[18] = "43";
 comments[18] = "Id Pregunta: 5706. NULL";


//  Id pregunta: 5742 AÃ±o de creación de pregunta: 2009-01-01
 questions[19]= "20)  En el &aacute;mbito de la Uni&oacute;n Europea, &iquest;tiene validez jur&iacute;dica la firma electr&oacute;nica?";
 choices[19]= new Array();
 choices[19][0] = "Solamente si es firma reconocida";
 choices[19][1] = "Solamente si es firma avanzada";
 choices[19][2] = "Siempre ser&aacute; admisible como prueba en el procedimiento judicial";
 choices[19][3] = "Ninguna de las anteriores es correcta";
 answers[19] = choices[19][2];
 units[19] = "30";
 comments[19] = "Id Pregunta: 5742. Directiva 1999/93/CE y Reglamento 910/2014, consideraci&oacute;n 61)";


//  Id pregunta: 5794 AÃ±o de creación de pregunta: 2009-01-01
 questions[20]= "21)  Las Administraciones P&uacute;blicas pueden utilizar varios medios para su identificaci&oacute;n electr&oacute;nica. Indique cual NO es uno de ellos.";
 choices[20]= new Array();
 choices[20][0] = "Sistemas de firma electr&oacute;nica, como el sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica.";
 choices[20][1] = "Firma electr&oacute;nica del personal al servicio de las Administraciones P&uacute;blicas.";
 choices[20][2] = "Intercambio electr&oacute;nico de datos en entornos cerrados de comunicaci&oacute;n, conforme a lo espec&iacute;ficamente acordado en las partes.";
 choices[20][3] = "La identidad electr&oacute;nica reconocida del &oacute;rgano administrativo.";
 answers[20] = choices[20][3];
 units[20] = "30";
 comments[20] = "Id Pregunta: 5794. MAP 2008 A2";


//  Id pregunta: 6402 AÃ±o de creación de pregunta: 2010-01-01
 questions[21]= "22)  Las Administraciones podr&aacute;n poner a disposici&oacute;n de todos los organismos las aplicaciones que decidan declarar de c&oacute;digo abierto, a trav&eacute;s de el&hellip;";
 choices[21]= new Array();
 choices[21][0] = "Centro de Transferencia de Tecnolog&iacute;a";
 choices[21][1] = "Centro de Compartici&oacute;n de Tecnolog&iacute;a";
 choices[21][2] = "Proyecto Aporta";
 choices[21][3] = "Proyecto Comparte";
 answers[21] = choices[21][0];
 units[21] = "30";
 comments[21] = "Id Pregunta: 6402. NULL";


//  Id pregunta: 8223 AÃ±o de creación de pregunta: 2011-01-01
 questions[22]= "23)  En un Ministerio de la Administraci&oacute;n General del Estado, &iquest;cu&aacute;l es el rango administrativo m&iacute;nimo de una sede electr&oacute;nica?:";
 choices[22]= new Array();
 choices[22][0] = "Una Secretar&iacute;a de Estado.";
 choices[22][1] = "Una Subsecretar&iacute;a.";
 choices[22][2] = "Una Subdirecci&oacute;n General.";
 choices[22][3] = "Una Direcci&oacute;n General.";
 answers[22] = choices[22][3];
 units[22] = "43";
 comments[22] = "Id Pregunta: 8223. Examen TIC A1 2010";


//  Id pregunta: 8260 AÃ±o de creación de pregunta: 2011-01-01
 questions[23]= "24)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un principio b&aacute;sico del Esquema Nacional de Seguridad (ENS):";
 choices[23]= new Array();
 choices[23][0] = "Funci&oacute;n diferenciada.";
 choices[23][1] = "Prevenci&oacute;n, reacci&oacute;n y recuperaci&oacute;n.";
 choices[23][2] = "L&iacute;neas de defensa.";
 choices[23][3] = "Continuidad de la actividad.";
 answers[23] = choices[23][3];
 units[23] = "43";
 comments[23] = "Id Pregunta: 8260. Examen TIC A1 2010";


//  Id pregunta: 8399 AÃ±o de creación de pregunta: 2011-01-01
 questions[24]= "25)  Las comunicaciones efectuadas a ciudadanos a trav&eacute;s de medios electr&oacute;nicos ser&aacute;n v&aacute;lidas de acuerdo al art&iacute;culo 27 de la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, siempre que:";
 choices[24]= new Array();
 choices[24][0] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas y se identifique fldedignamente al destinatario de las mismas";
 choices[24][1] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas y se identifique fidedignarnente al remitente y al destinatario de las mismas. ";
 choices[24][2] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas, del contenido &iacute;ntegro de las comunicaciones y se identifique fidedignamente al remitente y al destinatario de las mismas. ";
 choices[24][3] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas, del contenido &iacute;ntegro de las comunicaciones, se identifique fidedignarnente al remitente y al destinatario de las mismas y una norma con rango de Ley permita el uso de un medio electr&oacute;nico en el procedimiento";
 answers[24] = choices[24][2];
 units[24] = "43";
 comments[24] = "Id Pregunta: 8399. Examen TIC A2 2010";


//  Id pregunta: 8425 AÃ±o de creación de pregunta: 2011-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Interoperabilidad, Real Decreto 4/2010 del 8 de enero?";
 choices[25]= new Array();
 choices[25][0] = "La interoperabilidad como cualidad integral";
 choices[25][1] = "La reutilizaci&oacute;n y la transferencia tecnol&oacute;gica";
 choices[25][2] = "El car&aacute;cter multidimensional de la interoperabilidad";
 choices[25][3] = "El enfoque de soluciones multilaterales";
 answers[25] = choices[25][1];
 units[25] = "43";
 comments[25] = "Id Pregunta: 8425. ";


//  Id pregunta: 8749 AÃ±o de creación de pregunta: 2011-01-01
 questions[26]= "27)  Un organismo est&aacute; evaluando la posibilidad de obligar al uso exclusivo de medios electr&oacute;nicos a las personas Jur&iacute;dicas, cuando se comuniquen con el mismo, &iquest;podr&iacute;a hacerlo?";
 choices[26]= new Array();
 choices[26][0] = "No, en ning&uacute;n caso, los medios electr&oacute;nicos siempre ser&aacute;n opcionales, aunque puedan ser preferentes";
 choices[26][1] = "Podr&aacute; hacerlo s&oacute;lo si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad";
 choices[26][2] = "Si, siempre para el caso de personas jur&iacute;dicas, eliminando la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, LAECSP. cualquier requisito normativo previo";
 choices[26][3] = "Podr&aacute; hacerlo contando siempre con el consentimiento del interesado, si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad.";
 answers[26] = choices[26][1];
 units[26] = "43";
 comments[26] = "Id Pregunta: 8749. Examen TIC A2 2010 interna";


//  Id pregunta: 8839 AÃ±o de creación de pregunta: 2011-01-01
 questions[27]= "28)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, son derechos de los ciudadanos en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad administrativa:";
 choices[27]= new Array();
 choices[27][0] = "Que los servicios p&uacute;blicos se presten por medios electr&oacute;nicos, aunque sea con menor calidad que los medios presenciales ";
 choices[27][1] = "Que las personas jur&iacute;dicas puedan utilizar en todo caso los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad para cualquier tr&aacute;mite electr&oacute;nico con cualquier Administraci&oacute;n P&uacute;blica, pero no as&iacute; las personas f&iacute;sicas.";
 choices[27][2] = "Que las personas f&iacute;sicas puedan utilizar en todo caso los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad para cualquier tr&aacute;mite electr&oacute;nico con cualquier Administraci&oacute;n P&uacute;blica, excluy&eacute;ndose otros sistemas de firma";
 choices[27][3] = "Que puedan elegir, entre aquellos que en cada momento se encuentren disponibles, el canal a trav&eacute;s del cual relacionarse por medios electr&oacute;nicos con las Administraciones P&uacute;blicas";
 answers[27] = choices[27][3];
 units[27] = "43";
 comments[27] = "Id Pregunta: 8839. Examen UC3M 2010";


//  Id pregunta: 8949 AÃ±o de creación de pregunta: 2011-01-01
 questions[28]= "29)  &iquest;A qui&eacute;n corresponde aprobar la relaci&oacute;n de prestadores de servicios de certificaci&oacute;n admitidos?";
 choices[28]= new Array();
 choices[28][0] = "Al Ministerio de Industria Turismo y Comercio";
 choices[28][1] = "Al Ministerio de la Presidencia";
 choices[28][2] = "Al Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[28][3] = "Ninguna de las anteriores es cierta";
 answers[28] = choices[28][3];
 units[28] = "43";
 comments[28] = "Id Pregunta: 8949. ";


//  Id pregunta: 9035 AÃ±o de creación de pregunta: 2011-01-01
 questions[29]= "30)  En qu&eacute; t&iacute;tulo de la ley 11/2007 se habla sobre los registros electr&oacute;nicos";
 choices[29]= new Array();
 choices[29][0] = "T&iacute;tulo I";
 choices[29][1] = "T&iacute;tulo II";
 choices[29][2] = "T&iacute;tulo III";
 choices[29][3] = "T&iacute;tulo IV";
 answers[29] = choices[29][1];
 units[29] = "43";
 comments[29] = "Id Pregunta: 9035. NULL";


//  Id pregunta: 9544 AÃ±o de creación de pregunta: 2013-01-01
 questions[30]= "31)  Los certificados incorporados al DNI-e:";
 choices[30]= new Array();
 choices[30][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[30][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[30][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[30][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[30] = choices[30][3];
 units[30] = "30";
 comments[30] = "Id Pregunta: 9544. Examen TIC A1 2011 (Incluyen tambi&eacute;n certificado electr&oacute;nico de la autoridad emisora)";


//  Id pregunta: 9574 AÃ±o de creación de pregunta: 2013-01-01
 questions[31]= "32)  Al hablar de software libre y de su uso en la Administraci&oacute;n se&ntilde;ale la frase correcta:";
 choices[31]= new Array();
 choices[31][0] = "La Ley 11/2007 obliga a las administraciones p&uacute;blicas a poner las aplicaciones de cuyos derechos de propiedad son titulares a disposici&oacute;n de cualquier otra Administraci&oacute;n Auton&oacute;mica.";
 choices[31][1] = "Una licencia de c&oacute;digo de fuente abierta seg&uacute;n la FSF obliga a hacer p&uacute;blicas todas las mejoras, poni&eacute;ndolas a disposici&oacute;n de la comunidad.";
 choices[31][2] = "Una licencia LGPL no restringe la posibilidad de incluir el software protegido por la licencia en productos protegidos por licencias no GPL.";
 choices[31][3] = "El Real Decreto 4/2010 del Esquema Nacional de Interoperabilidad prev&eacute; un cat&aacute;logo &uacute;nicamente de est&aacute;ndares abiertos de uso obligatorio por las administraciones p&uacute;blicas.";
 answers[31] = choices[31][2];
 units[31] = "43, 61, 62";
 comments[31] = "Id Pregunta: 9574. Examen TIC A1 2011";


//  Id pregunta: 9802 AÃ±o de creación de pregunta: 2014-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l es el &aacute;mbito del Registro Electr&oacute;nico Com&uacute;n?";
 choices[32]= new Array();
 choices[32][0] = "Todas las Administraciones P&uacute;blicas.";
 choices[32][1] = "La Administraci&oacute;n General del Estado y la Administraci&oacute;n Auton&oacute;mica. ";
 choices[32][2] = "La Administraci&oacute;n General del Estado y los Organismos P&uacute;blicos adscritos o dependientes de la misma. ";
 choices[32][3] = "La Secretaria de Estado de Administraciones P&uacute;blicas, como responsable de su gesti&oacute;n.";
 answers[32] = choices[32][2];
 units[32] = "44";
 comments[32] = "Id Pregunta: 9802. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9808 AÃ±o de creación de pregunta: 2014-01-01
 questions[33]= "34)  Se&ntilde;alar el nombre de la aplicaci&oacute;n de generaci&oacute;n de copia aut&eacute;ntica en papel de documentos con firma electr&oacute;nica y de justificantes de firma electr&oacute;nica, que el Ministerio de Hacienda y AAPP ofrece en modelo federado:";
 choices[33]= new Array();
 choices[33][0] = "STORK";
 choices[33][1] = "eDocument";
 choices[33][2] = "eSign";
 choices[33][3] = "eVisor";
 answers[33] = choices[33][3];
 units[33] = "44";
 comments[33] = "Id Pregunta: 9808. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10151 AÃ±o de creación de pregunta: 2014-01-01
 questions[34]= "35)  Seg&uacute;n la ley 25/2007, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n muy grave?";
 choices[34]= new Array();
 choices[34][0] = "La no conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3.";
 choices[34][1] = "la no conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[34][2] = "La conservaci&oacute;n de los datos por un per&iacute;odo inferior al establecido en el art&iacute;culo 5.";
 choices[34][3] = "El incumplimiento deliberado de las obligaciones de protecci&oacute;n y seguridad de los datos establecidas en el art&iacute;culo 8";
 answers[34] = choices[34][1];
 units[34] = "30";
 comments[34] = "Id Pregunta: 10151. ";


//  Id pregunta: 10153 AÃ±o de creación de pregunta: 2014-01-01
 questions[35]= "36)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[35]= new Array();
 choices[35][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[35][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[35][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[35][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[35] = choices[35][1];
 units[35] = "43";
 comments[35] = "Id Pregunta: 10153. ";


//  Id pregunta: 10427 AÃ±o de creación de pregunta: 2014-01-01
 questions[36]= "37)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, el principio de simplificaci&oacute;n administrativa al que se ajustar&aacute; la utilizaci&oacute;n de las tecnolog&iacute;as de la informaci&oacute;n, establece ";
 choices[36]= new Array();
 choices[36][0] = "la m&aacute;xima difusi&oacute;n, publicidad y transparencia del procedimiento.";
 choices[36][1] = "el requerimiento a los ciudadanos de s&oacute;lo aquellos datos que sean estrictamente necesarios a la finalidad para la que se soliciten. ";
 choices[36][2] = "la no utilizaci&oacute;n de medios electr&oacute;nicos que puedan implicar restricciones o";
 choices[36][3] = "la reducci&oacute;n de manera sustancial de los t&eacute;rminos y plazos de los procedimientos administrativos. ";
 answers[36] = choices[36][3];
 units[36] = "30";
 comments[36] = "Id Pregunta: 10427. Examen TIC A1 2013";


//  Id pregunta: 10546 AÃ±o de creación de pregunta: 2014-01-01
 questions[37]= "38)  NO es uno de los 10 objetivos de la Estrategia 2011-2015 del Plan Avanza 2...";
 choices[37]= new Array();
 choices[37][0] = "Promover procesos innovadores TIC en las AAPP";
 choices[37][1] = "Incrementar el uso avanzado de servicios digitales por la ciudadan&iacute;a";
 choices[37][2] = "Promover el uso de las TIC en todos los niveles administrativos";
 choices[37][3] = "Extender el uso de soluciones TIC de negocio en la empresa";
 answers[37] = choices[37][2];
 units[37] = "30";
 comments[37] = "Id Pregunta: 10546. https://www.planavanza.es/informaciongeneral/estrategia2011/Paginas/Estrategia2011_2015.aspx";


//  Id pregunta: 10577 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  El Esquema Nacional de Interoperabilidad:";
 choices[38]= new Array();
 choices[38][0] = "Incluye criterios y recomendaciones de seguridad.";
 choices[38][1] = "Es parte del Esquema Nacional de Seguridad.";
 choices[38][2] = "Fue elaborado por la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[38][3] = "Considera la utilizaci&oacute;n de est&aacute;ndares cerrados o de uso limitado por los ciudadanos.";
 answers[38] = choices[38][0];
 units[38] = "44";
 comments[38] = "Id Pregunta: 10577. Art&iacute;culo 42, Ley 11/2007.";


//  Id pregunta: 10585 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, las URIs:";
 choices[39]= new Array();
 choices[39][0] = "Deben cumplir el principio de persistencia.";
 choices[39][1] = "Deben utilizar el protocolo FTP.";
 choices[39][2] = "Deben exponer informaci&oacute;n sobre la implementaci&oacute;n t&eacute;cnica de sus recursos.";
 choices[39][3] = "Deben usar una estructura consistente y fija.";
 answers[39] = choices[39][0];
 units[39] = "43";
 comments[39] = "Id Pregunta: 10585. Anexo II (Esquema de URI)";


//  Id pregunta: 10680 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los &quot;Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.&quot;";
 choices[40]= new Array();
 choices[40][0] = "T&iacute;tulo I";
 choices[40][1] = "T&iacute;tulo II";
 choices[40][2] = "T&iacute;tulo III";
 choices[40][3] = "T&iacute;tulo IV";
 answers[40] = choices[40][1];
 units[40] = "30";
 comments[40] = "Id Pregunta: 10680. ";


//  Id pregunta: 10692 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[41]= new Array();
 choices[41][0] = "&Uacute;nicamente para la Administraci&oacute;n General del Estado.";
 choices[41][1] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[41][2] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas,  Administraci&oacute;n Local y Sector P&uacute;blico Institucional.";
 choices[41][3] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas,  Administraci&oacute;n Local,  Sector P&uacute;blico Institucional y Corporaciones de Derecho P&uacute;blico.";
 answers[41] = choices[41][2];
 units[41] = "30";
 comments[41] = "Id Pregunta: 10692. ";


//  Id pregunta: 10695 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  La Ley 39/2015 prevee Registros Electr&oacute;nicos de Apoderamientos:";
 choices[42]= new Array();
 choices[42][0] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para todas las Administraciones P&uacute;blicas.";
 choices[42][1] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para toda la Administraci&oacute;n General del Estado.";
 choices[42][2] = "La Ley &uacute;nicamente establece la creaci&oacute;n de dichos Registros.";
 choices[42][3] = "Esta Ley no se&ntilde;ala nada sobre dichos Registros.";
 answers[42] = choices[42][1];
 units[42] = "30";
 comments[42] = "Id Pregunta: 10695. ";


//  Id pregunta: 10710 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l es un contenido clave de la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales?";
 choices[43]= new Array();
 choices[43][0] = "SICRES";
 choices[43][1] = "Los metadatos";
 choices[43][2] = "ACCEDA";
 choices[43][3] = "HABILITA";
 answers[43] = choices[43][0];
 units[43] = "43";
 comments[43] = "Id Pregunta: 10710. ";


//  Id pregunta: 10714 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  &iquest;Qu&eacute; estructura utiliza SICRES 3?";
 choices[44]= new Array();
 choices[44][0] = "HTML";
 choices[44][1] = "PDF";
 choices[44][2] = "XML";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][2];
 units[44] = "43";
 comments[44] = "Id Pregunta: 10714. ";


//  Id pregunta: 10715 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  Seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre entidades registrales &iquest;En qu&eacute; segmento se situa el &quot;idenficador de fichero&quot;?";
 choices[45]= new Array();
 choices[45][0] = "De asunto";
 choices[45][1] = "De origen";
 choices[45][2] = "De destino";
 choices[45][3] = "De anexo";
 answers[45] = choices[45][3];
 units[45] = "43";
 comments[45] = "Id Pregunta: 10715. ";


//  Id pregunta: 10719 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no es un est&aacute;ndar de firma contemplado en la NTI de firma electr&oacute;nica?";
 choices[46]= new Array();
 choices[46][0] = "XAdES";
 choices[46][1] = "CAdES";
 choices[46][2] = "PAdES";
 choices[46][3] = "MAdES";
 answers[46] = choices[46][3];
 units[46] = "43";
 comments[46] = "Id Pregunta: 10719. ";


//  Id pregunta: 10722 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  Seg&uacute;n la NTI de Gesti&oacute;n de Pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos. &iquest;Qui&eacute;n impulsar&aacute; la pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos?";
 choices[47]= new Array();
 choices[47][0] = "La alta direcci&oacute;n.";
 choices[47][1] = "Los responsables de procesos de gesti&oacute;n.";
 choices[47][2] = "El Presidente del Gobierno.";
 choices[47][3] = "El Consejo de Ministros.";
 answers[47] = choices[47][0];
 units[47] = "43";
 comments[47] = "Id Pregunta: 10722. ";


//  Id pregunta: 10724 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  &iquest;Qui&eacute;n es el responsable de la Plataforma de Intermediaci&oacute;n?";
 choices[48]= new Array();
 choices[48][0] = "Ministerio de la Presidencia";
 choices[48][1] = "Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[48][2] = "Ministerio de Econom&iacute;a y Competitividad";
 choices[48][3] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 answers[48] = choices[48][1];
 units[48] = "43";
 comments[48] = "Id Pregunta: 10724. ";


//  Id pregunta: 10729 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas &iquest;cual de los siguientes no es un tipo de Punto de Presencia (PdP) de la Red SARA?";
 choices[49]= new Array();
 choices[49][0] = "Centros externos de monitorizaci&oacute;n.";
 choices[49][1] = "Prestadores de servicios de certificaci&oacute;n.";
 choices[49][2] = "Otros: como son las Ventanillas &Uacute;nicas Empresariales.";
 choices[49][3] = "Todos los anteriores son tipos de PdP.";
 answers[49] = choices[49][3];
 units[49] = "43";
 comments[49] = "Id Pregunta: 10729. ";


//  Id pregunta: 10731 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  La conexi&oacute;n directa a la Red SARA se proporcionar&aacute; a trav&eacute;s de:";
 choices[50]= new Array();
 choices[50][0] = "Una VPN establecida con cualquiera de los Ministerios.";
 choices[50][1] = "Un &Aacute;rea de Conexi&oacute;n (AC).";
 choices[50][2] = "Un Punto de Presencia situado en el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[50][3] = "Un punto neutro.";
 answers[50] = choices[50][1];
 units[50] = "43";
 comments[50] = "Id Pregunta: 10731. ";


//  Id pregunta: 10735 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, &iquest;qu&eacute; usar&aacute;n los identificadores de recursos uniformes?";
 choices[51]= new Array();
 choices[51][0] = "HTTP o HTTPS";
 choices[51][1] = "XML";
 choices[51][2] = "Formatos libres";
 choices[51][3] = "Licencias Europeas de Libre utilizaci&oacute;n";
 answers[51] = choices[51][0];
 units[51] = "43";
 comments[51] = "Id Pregunta: 10735. ";


//  Id pregunta: 10752 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l es el objetivo global de la Estrategia de Ciberseguridad Nacional?";
 choices[52]= new Array();
 choices[52][0] = "Lograr que Espa&ntilde;a haga un uso seguro de los Sistemas de Informaci&oacute;n y Telecomunicaciones, fortaleciendo las capacidades de prevenci&oacute;n, defensa, detecci&oacute;n, y respuesta a los ciberataques.";
 choices[52][1] = "Garantizar que los Sistemas de Informaci&oacute;n y Telecomunicaciones que utilizan las Administraciones P&uacute;blicas poseen el adecuado nivel de ciberseguridad y resiliencia.";
 choices[52][2] = "Potenciar las capacidades de prevenci&oacute;n, detecci&oacute;n, reacci&oacute;n, an&aacute;lisis, recuperaci&oacute;n, respuesta, investigaci&oacute;n y coordinaci&oacute;n frente a las actividades del terrorismo y la delincuencia en el ciberespacio.";
 choices[52][3] = "Alcanzar y mantener los conocimientos, habilidades, experiencia y capacidades tecnol&oacute;gicas que necesita Espa&ntilde;a para sustentar todos los objetivos de ciberseguridad.";
 answers[52] = choices[52][0];
 units[52] = "43";
 comments[52] = "Id Pregunta: 10752. ";


//  Id pregunta: 10754 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  &iquest;Qui&eacute;n dirige a los tres componentes de la Estructura de Ciberseguridad Nacional (el Consejo de Seguridad Nacional; el Comit&eacute; Especializado de Ciberseguridad; el Comit&eacute; Especializado de Situaci&oacute;n?";
 choices[53]= new Array();
 choices[53][0] = "El Presidente del Gobierno.";
 choices[53][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[53][2] = "El Ministro de Defensa.";
 choices[53][3] = "El CIO de la AGE.";
 answers[53] = choices[53][0];
 units[53] = "43";
 comments[53] = "Id Pregunta: 10754. ";


//  Id pregunta: 10756 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  &iquest;C&oacute;mo se denomina la Comisi&oacute;n Delegada del Gobierno para la Seguridad Nacional que asiste al Presidente del Gobierno en la direcci&oacute;n de la Pol&iacute;tica de Seguridad Nacional?";
 choices[54]= new Array();
 choices[54][0] = "El Consejo de Seguridad Nacional.";
 choices[54][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[54][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[54][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[54] = choices[54][0];
 units[54] = "43";
 comments[54] = "Id Pregunta: 10756. ";


//  Id pregunta: 10758 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l es la gu&iacute;a referente a &quot;Auditor&iacute;a del Esquema Nacional de Seguridad&quot;?";
 choices[55]= new Array();
 choices[55][0] = "CCN-STIC-801";
 choices[55][1] = "CCN-STIC-802";
 choices[55][2] = "CCN-STIC-803";
 choices[55][3] = "CCN-STIC-804";
 answers[55] = choices[55][1];
 units[55] = "43";
 comments[55] = "Id Pregunta: 10758. ";


//  Id pregunta: 10773 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  Se&ntilde;ale la respuesta correcta. Seg&uacute;n se establece en la Ley de Firma Electr&oacute;nica 59/2003 en su art&iacute;culo 32, las multas establecidas al infractor ser&aacute;n de:";
 choices[56]= new Array();
 choices[56][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros.";
 choices[56][1] = "Por la comisi&oacute;n de infracciones muy graves, multa de 60.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 6.001 a 60.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 6.000 euros.";
 choices[56][2] = "Por la comisi&oacute;n de infracciones muy graves, multa de 120.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 12.001 a 120.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 12.000 euros.";
 choices[56][3] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 15.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 15.000 euros.";
 answers[56] = choices[56][0];
 units[56] = "30";
 comments[56] = "Id Pregunta: 10773. Examen GSI 2014";


//  Id pregunta: 10779 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  La direcci&oacute;n electr&oacute;nica habilitada para la pr&aacute;ctica de notificaciones regulada en el Real Decreto 1671/2009, por el que se desarrolla parcialmente la Ley 11/2007, tendr&aacute; vigencia indefinida excepto cuando no se utilice para la pr&aacute;ctica de notificaciones por el transcurso de:";
 choices[57]= new Array();
 choices[57][0] = "36 meses.";
 choices[57][1] = "60 meses.";
 choices[57][2] = "30 meses.";
 choices[57][3] = "24 meses.";
 answers[57] = choices[57][0];
 units[57] = "43";
 comments[57] = "Id Pregunta: 10779. Examen GSI 2014";


//  Id pregunta: 10933 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  Las entidades locales adheridas al servicio com&uacute;n denominado &ldquo;Emprende en 3&rdquo;:";
 choices[58]= new Array();
 choices[58][0] = "Aceptar&aacute;n y utilizar&aacute;n el modelo tipo de declaraci&oacute;n responsable de conformidad con la normativa que regula el proyecto.";
 choices[58][1] = "Podr&aacute;n rechazar las declaraciones responsables recibidas si no vienen acompa&ntilde;adas de la documentaci&oacute;n obligatoria para la puesta en marcha de la empresa.";
 choices[58][2] = "Podr&aacute;n rechazar las declaraciones responsables recibidas si no vienen acompa&ntilde;adas de la documentaci&oacute;n obligatoria para la puesta en marcha de la empresa.";
 choices[58][3] = "La tramitaci&oacute;n de las declaraciones responsables recibidas por &ldquo;Emprende en 3&rdquo; debe ser finalizada antes de los 5 d&iacute;as h&aacute;biles desde su presentaci&oacute;n.";
 answers[58] = choices[58][0];
 units[58] = "44";
 comments[58] = "Id Pregunta: 10933. TIC A1 AGE 2014";


//  Id pregunta: 10969 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  RE&Uacute;NETE es el Servicio Com&uacute;n de Reuniones Virtuales de la Red SARA que ofrece herramientas colaborativas a todas las Administraciones P&uacute;blicas. Entre sus funcionalidades NO se encuentra:";
 choices[59]= new Array();
 choices[59][0] = "Correo electr&oacute;nico multidominio.";
 choices[59][1] = "Integraci&oacute;n de salas de videoconferencia tradicional H323/SIP.";
 choices[59][2] = "Soporte on-line para p&aacute;ginas web.";
 choices[59][3] = "Videoconferencia con herramientas de colaboraci&oacute;n.";
 answers[59] = choices[59][0];
 units[59] = "44";
 comments[59] = "Id Pregunta: 10969. TIC A1 AGE 2014";


//  Id pregunta: 10994 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  Entre los objetivos del proyecto STORK 2.0 (Secure idenTity acrOss boRders linKed) NO se encuentra:";
 choices[60]= new Array();
 choices[60][0] = "Construcci&oacute;n de pilotos o demostradores de servicios de administraci&oacute;n electr&oacute;nica.";
 choices[60][1] = "Estudio de las especificaciones t&eacute;cnicas comunes que permitan el reconocimiento europeo de las eID (identidades electr&oacute;nicas) nacionales.";
 choices[60][2] = "Desarrollo de tecnolog&iacute;as y servicios avanzados de eID que sirvan de base para la construcci&oacute;n de la identidad electr&oacute;nica europea &uacute;nica (eueID) prevista para 2020.";
 choices[60][3] = "Realizaci&oacute;n de estudios sobre la situaci&oacute;n legal y t&eacute;cnica de los sistemas de identificaci&oacute;n y firma electr&oacute;nica utilizados en los Estados Miembros.";
 answers[60] = choices[60][2];
 units[60] = "30";
 comments[60] = "Id Pregunta: 10994. TIC A1 AGE 2014";


//  Id pregunta: 11100 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Seguridad?";
 choices[61]= new Array();
 choices[61][0] = "Proporcionalidad";
 choices[61][1] = "Respeto al derecho de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[61][2] = "Derecho a la garant&iacute;a de seguridad y confidencialidad";
 choices[61][3] = "Gesti&oacute;n de riesgos";
 answers[61] = choices[61][3];
 units[61] = "30";
 comments[61] = "Id Pregunta: 11100. ";


//  Id pregunta: 11101 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[62]= new Array();
 choices[62][0] = "La interoperabilidad como cualidad integral";
 choices[62][1] = "Car&aacute;cter multidimensional de la interoperabilidad";
 choices[62][2] = "Enfoque de soluciones multilaterales";
 choices[62][3] = "Todos los anteriores";
 answers[62] = choices[62][3];
 units[62] = "30";
 comments[62] = "Id Pregunta: 11101. ";


//  Id pregunta: 11123 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes no es una norma t&eacute;cnica de interoperabilidad?";
 choices[63]= new Array();
 choices[63][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[63][1] = "Modelo de datos para el intercambio de expedientes y documentos electr&oacute;nicos";
 choices[63][2] = "Procedimiento de copiado aut&eacute;ntico y conversi&oacute;n entre documentos electr&oacute;nicos";
 choices[63][3] = "Reutilizaci&oacute;n de recursos de informaci&oacute;n";
 answers[63] = choices[63][1];
 units[63] = "43";
 comments[63] = "Id Pregunta: 11123. ";


//  Id pregunta: 11198 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  &iquest;Qu&eacute; tasa de abandono escolar marca la Estrategia Europa 2020 para la Uni&oacute;n Europea?";
 choices[64]= new Array();
 choices[64][0] = "0.05";
 choices[64][1] = "0.01";
 choices[64][2] = "0.1";
 choices[64][3] = "0.2";
 answers[64] = choices[64][2];
 units[64] = "30";
 comments[64] = "Id Pregunta: 11198. ";


//  Id pregunta: 11200 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[65]= new Array();
 choices[65][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[65][1] = "Investigaci&oacute;n e innovaci&oacute;n";
 choices[65][2] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[65][3] = "Beneficios TIC para la Sociedad UE";
 answers[65] = choices[65][2];
 units[65] = "30";
 comments[65] = "Id Pregunta: 11200. ";


//  Id pregunta: 11202 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[66]= new Array();
 choices[66][0] = "Internacionalizaci&oacute;n de empresas tecnol&oacute;gicas";
 choices[66][1] = "Fomentar la alfabetizaci&oacute;n e inclusi&oacute;n digital";
 choices[66][2] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[66][3] = "Beneficios TIC para la Sociedad UE";
 answers[66] = choices[66][0];
 units[66] = "30";
 comments[66] = "Id Pregunta: 11202. ";


//  Id pregunta: 11207 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  &iquest;C&oacute;mo se denomina el plan de la Agenda Digital Espa&ntilde;ola referente al objetivo de Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas?";
 choices[67]= new Array();
 choices[67][0] = "Plan de Impulso del acceso r&aacute;pido y ultrarr&aacute;pido a Internet";
 choices[67][1] = "Plan de Telecomunicaciones Ultrarr&aacute;pidas";
 choices[67][2] = "Plan de Despliegue de infraestructuras de Red Espa&ntilde;ola";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = choices[67][1];
 units[67] = "30";
 comments[67] = "Id Pregunta: 11207. ";


//  Id pregunta: 11209 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que nunca hayan usado Internet para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[68]= new Array();
 choices[68][0] = "0.2";
 choices[68][1] = "0.33";
 choices[68][2] = "0.15";
 choices[68][3] = "0.01";
 answers[68] = choices[68][2];
 units[68] = "30";
 comments[68] = "Id Pregunta: 11209. ";


//  Id pregunta: 11212 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  &iquest;C&oacute;mo se denomina el plan espa&ntilde;ol que hace referencia al objetivo de mejorar la Administraci&oacute;n electr&oacute;nica seg&uacute;n la Agenda Digital Espa&ntilde;ola?";
 choices[69]= new Array();
 choices[69][0] = "Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la AGE";
 choices[69][1] = "Plan de Servicios P&uacute;blicos Digitales";
 choices[69][2] = "Los dos anteriores son verdaderos";
 choices[69][3] = "Todas las respuestas son falsas";
 answers[69] = choices[69][2];
 units[69] = "30";
 comments[69] = "Id Pregunta: 11212. ";


//  Id pregunta: 11482 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Seg&uacute;n el art&iacute;culo 6 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015, relativo a los registros electr&oacute;nicos de apoderamientos, los poderes inscritos en dicho registro tendr&aacute;n una validez m&aacute;xima";
 choices[70]= new Array();
 choices[70][0] = "De 5 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[70][1] = "De 4 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[70][2] = "De 2 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[70][3] = "De 10 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 answers[70] = choices[70][0];
 units[70] = "43";
 comments[70] = "Id Pregunta: 11482. NULL";


//  Id pregunta: 11492 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes NO es un agente recogido por la NTI de Protocolo de Intermediaci&oacute;n de Datos?";
 choices[71]= new Array();
 choices[71][0] = "Emisor";
 choices[71][1] = "Remitente";
 choices[71][2] = "Cesionario";
 choices[71][3] = "Cedente";
 answers[71] = choices[71][1];
 units[71] = "43";
 comments[71] = "Id Pregunta: 11492. NULL";


//  Id pregunta: 11592 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Indique cu&aacute;l no es un principio general de la Ley 11/2007:";
 choices[72]= new Array();
 choices[72][0] = "Accesibilidad";
 choices[72][1] = "Proporcionalidad";
 choices[72][2] = "Coordinaci&oacute;n";
 choices[72][3] = "Todos los anteriores son correctos";
 answers[72] = choices[72][2];
 units[72] = "43";
 comments[72] = "Id Pregunta: 11592. ";


//  Id pregunta: 11593 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Se&ntilde;ale el contenido opcional de un &iacute;ndice de expediente electr&oacute;nico:";
 choices[73]= new Array();
 choices[73][0] = "Huella digital de cada documento electr&oacute;nico";
 choices[73][1] = "Fecha de generaci&oacute;n del &iacute;ndice";
 choices[73][2] = "Fecha de incorporaci&oacute;n al expediente de cada documento electr&oacute;nico";
 choices[73][3] = "Identificador de cada documento electr&oacute;nico";
 answers[73] = choices[73][2];
 units[73] = "43";
 comments[73] = "Id Pregunta: 11593. ";


//  Id pregunta: 11602 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  La Orden HAP/7/2014 regula:";
 choices[74]= new Array();
 choices[74][0] = "El sistema cl@ve";
 choices[74][1] = "El Registro electr&oacute;nico de apoderamientos";
 choices[74][2] = "El Registro de funcionarios habilitados";
 choices[74][3] = "El sistema AutenticA";
 answers[74] = choices[74][2];
 units[74] = "44";
 comments[74] = "Id Pregunta: 11602. ";


//  Id pregunta: 11762 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  &iquest;Qu&eacute; es la DTIC?";
 choices[75]= new Array();
 choices[75][0] = "Direcci&oacute;n General de las TI.";
 choices[75][1] = "Direcci&oacute;n con rango de Subsecretar&iacute;a.";
 choices[75][2] = "Subdirecci&oacute;n General de las TI";
 choices[75][3] = "Comit&eacute; t&eacute;cnico de las TI.";
 answers[75] = choices[75][1];
 units[75] = "43";
 comments[75] = "Id Pregunta: 11762. ";


