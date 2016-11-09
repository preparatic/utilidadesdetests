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

//  Id pregunta: 669 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El &quot;Real Decreto por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos&quot; es el:";
 choices[0]= new Array();
 choices[0][0] = "RD 263/1996";
 choices[0][1] = "RD 263/2003";
 choices[0][2] = "RD 209/2003";
 choices[0][3] = "RD 209/1996";
 answers[0] = choices[0][2];
 units[0] = "30";
 comments[0] = "Id Pregunta: 669. NULL";


//  Id pregunta: 671 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Seg&uacute;n el R.D. 209/2003, una de las siguientes afirmaciones es err&oacute;nea:";
 choices[1]= new Array();
 choices[1][0] = "la utilizaci&oacute;n de una direcci&oacute;n electr&oacute;nica &uacute;nica debe ser expresamente notificada por el ciudadano interesado";
 choices[1][1] = "la direcci&oacute;n electr&oacute;nica &uacute;nica debe cumplir los requisitos de poseer identificadores de usuario y claves de acceso, y contener mecanismos de autenticaci&oacute;n y cifrado";
 choices[1][2] = "el CSI pasa a llamarse Consejo para el Impulso de la Administraci&oacute;n Electr&oacute;nica, CIAE";
 choices[1][3] = "los certificados anteriores emitidos por la AEAT y la TGSS deben ser sustituidos a partir de la entrada en vigor del R.D.";
 answers[1] = choices[1][2];
 units[1] = "30";
 comments[1] = "Id Pregunta: 671. ";


//  Id pregunta: 690 AÃ±o de creación de pregunta: 2009-01-01
 questions[2]= "3)  De acuerdo con la Ley 25/2007 Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, la retenci&oacute;n de datos de tr&aacute;fico relativo a las comunicaciones electr&oacute;nicas es deber de:";
 choices[2]= new Array();
 choices[2][0] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[2][1] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[2][2] = "los Operadores de Servicios de comunicaciones electr&oacute;nicas, Los proveedores de Acceso a redes de telecomunicaciones, Los prestadores de servicios de alojamiento de datos";
 choices[2][3] = "las respuestas 'a' y 'b' son correctas";
 answers[2] = choices[2][0];
 units[2] = "30";
 comments[2] = "Id Pregunta: 690. Art&iacute;culo 2 de la ley";


//  Id pregunta: 701 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[3]= new Array();
 choices[3][0] = "Firma electr&oacute;nica avanzada";
 choices[3][1] = "Firma electr&oacute;nica reconocida";
 choices[3][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = choices[3][1];
 units[3] = "30";
 comments[3] = "Id Pregunta: 701. Similar a examen TIC MAP A 2004. (Ley 59/2003, art&Iacute;culo 3)";


//  Id pregunta: 734 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes servicios NO est&aacute; regulado por la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI?";
 choices[4]= new Array();
 choices[4][0] = "La contrataci&oacute;n de bienes y servicios por v&iacute;a electr&oacute;nica";
 choices[4][1] = "El v&iacute;deo bajo demanda";
 choices[4][2] = "El teletexto televisivo";
 choices[4][3] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos";
 answers[4] = choices[4][2];
 units[4] = "30";
 comments[4] = "Id Pregunta: 734. Examen TIC MAP B 2004. Ley 34/2002, Anexo Definiciones. Posteriormente, tanto el teletexto televisivo como el v&iacute;deo bajo demanda se eliminaron de la ley.";


//  Id pregunta: 1492 AÃ±o de creación de pregunta: 2009-01-01
 questions[5]= "6)  &iquest;Deben los prestadores de servicios de la sociedad de la informaci&oacute;n inscribirse en alg&uacute;n registro?:";
 choices[5]= new Array();
 choices[5][0] = "Es necesaria una autorizaci&oacute;n administrativa";
 choices[5][1] = "S&iacute;, pero a&uacute;n no se ha decidido donde";
 choices[5][2] = "No, pero los datos de su inscripci&oacute;n en el Registro Mercantil en el que, en su caso, se encuentren inscritos o de aquel otro registro p&uacute;blico en el que lo estuvieran para la adquisici&oacute;n de personalidad jur&iacute;dica o a los solos efectos de publicidad forman parte de la informaci&oacute;n general considerada en el art&iacute;culo 10 de la Ley 34/2002.";
 choices[5][3] = "No, pero se debe comunicar al Registro Mercantil el nombre de dominio si es utilizado para publicidad";
 answers[5] = choices[5][2];
 units[5] = "30";
 comments[5] = "Id Pregunta: 1492. Ley 34/2002, art&iacute;culo 9";


//  Id pregunta: 1513 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  &iquest;Qui&eacute;n puede relizar servicios de certificaci&oacute;n?";
 choices[6]= new Array();
 choices[6][0] = "Una persona f&iacute;sica";
 choices[6][1] = "Una persona jur&iacute;dica";
 choices[6][2] = "Ambas";
 choices[6][3] = "S&oacute;lo el Estado";
 answers[6] = choices[6][2];
 units[6] = "30";
 comments[6] = "Id Pregunta: 1513. Ley 59/2003, art&iacute;culo 2.2";


//  Id pregunta: 1875 AÃ±o de creación de pregunta: 2006-01-01
 questions[7]= "8)  De acuerdo con la ley 59/2003, se&ntilde;ale la falsa:";
 choices[7]= new Array();
 choices[7][0] = "Por la comisi&oacute;n de infracciones muy graves, se impondr&aacute; al infractor multa de 150.001 a 600.000 euros";
 choices[7][1] = "Por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros";
 choices[7][2] = "Por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = choices[7][3];
 units[7] = "30";
 comments[7] = "Id Pregunta: 1875. Ley 59/2003, art&iacute;culo 32";


//  Id pregunta: 1878 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  El RD 209/2003 Regulaci&oacute;n de registros y notificaciones telem&aacute;ticas se aplica a:";
 choices[8]= new Array();
 choices[8][0] = "Todas las Administraciones P&uacute;blicas.";
 choices[8][1] = "Las Administraciones P&uacute;blicas y Entidades Locales.";
 choices[8][2] = "La Administraci&oacute;n General del Estado.";
 choices[8][3] = " A ninguna a no ser que se realice su desarrollo.";
 answers[8] = choices[8][2];
 units[8] = "30";
 comments[8] = "Id Pregunta: 1878. ";


//  Id pregunta: 1879 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  La ley de servicios de la sociedad de la informaci&oacute;n y del comercio electr&oacute;nico (LSSICE) es el resultado de la transposici&oacute;n de dos directivas del Parlamento Europeo y del Consejo. &iquest;Cu&aacute;les?";
 choices[9]= new Array();
 choices[9][0] = "Directivas 2000/31/CE y 98/28/CE";
 choices[9][1] = "Directivas 2000/31/CE y 98/27/CE";
 choices[9][2] = "Directivas 2000/31/CE y 97/27/CE";
 choices[9][3] = "Directivas 2001/31/CE y 98/27/CE";
 answers[9] = choices[9][1];
 units[9] = "30";
 comments[9] = "Id Pregunta: 1879. NULL";


//  Id pregunta: 1885 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  Se&ntilde;ale la falsa:";
 choices[10]= new Array();
 choices[10][0] = "La Ley  General de Telecomunicaciones introduce modificaciones a la ley 34/2002";
 choices[10][1] = "La ley de firma Electr&oacute;nica 59/2003 introduce modificaciones a la ley 34/2002";
 choices[10][2] = "La Ley 56/2007, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n, introduce modificaciones a la ley 34/2002";
 choices[10][3] = "Son falsas las tres anteriores";
 answers[10] = choices[10][3];
 units[10] = "30";
 comments[10] = "Id Pregunta: 1885. Las tres restantes son correctas";


//  Id pregunta: 2557 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El programa IDABC:";
 choices[11]= new Array();
 choices[11][0] = "Pretende el Intercambio de Datos e interoperabilidad entre Adminsitraciones, Empresas y Ciudadanos";
 choices[11][1] = "Contiene tres directivas";
 choices[11][2] = "Financiaba tanto los proyectos horizontales como verticales en su totalidad";
 choices[11][3] = "Fue creado antes que el ENS";
 answers[11] = choices[11][0];
 units[11] = "30";
 comments[11] = "Id Pregunta: 2557. ";


//  Id pregunta: 4252 AÃ±o de creación de pregunta: 2007-01-01
 questions[12]= "13)  Respecto al avance de la Sociedad de la Informaci&oacute;n en Espa&ntilde;a:";
 choices[12]= new Array();
 choices[12][0] = "El Plan Avanza contempla como l&iacute;neas de acci&oacute;n el avance en la e-inclusi&oacute;n y en el desarrollo de servicios p&uacute;blicos digitales, pero no entra en materias como el fomento de la competitividad y la innovaci&oacute;n en Espa&ntilde;a.";
 choices[12][1] = "El Plan Avanza constituye uno de los ejes del programa Ingenio 2010.";
 choices[12][2] = "El Plan Avanza del Ministerio de Industria busca la convergencia con Europea en materia de Sociedad de la Informaci&oacute;n, pero desmarc&aacute;ndose notablemente de los objetivos que se plantearon en la Estrategia de Lisboa.";
 choices[12][3] = "El Plan Avanza, lanzado por el Ministerio de Administraciones P&uacute;blicas, reduce su &aacute;mbito de aplicaci&oacute;n a la Administraci&oacute;n General del Estado.";
 answers[12] = choices[12][1];
 units[12] = "30";
 comments[12] = "Id Pregunta: 4252. ";


//  Id pregunta: 4520 AÃ±o de creación de pregunta: 2007-01-01
 questions[13]= "14)  La firma digital garantiza:";
 choices[13]= new Array();
 choices[13][0] = "La autenticidad, Ia integridad y el no repudio en destino.";
 choices[13][1] = "La autenticidad, Ia integridad y el no repudio en origen.";
 choices[13][2] = "La autenticidad, Ia integridad y la confidencialidad.";
 choices[13][3] = "La confidencialidad.";
 answers[13] = choices[13][1];
 units[13] = "30";
 comments[13] = "Id Pregunta: 4520. NULL";


//  Id pregunta: 4658 AÃ±o de creación de pregunta: 2007-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l es el periodo de vigencia de los certificados contenidos en el DNI electronico?";
 choices[14]= new Array();
 choices[14][0] = "El mismo que el DNI ";
 choices[14][1] = "36 meses";
 choices[14][2] = "30 meses";
 choices[14][3] = "12 meses";
 answers[14] = choices[14][2];
 units[14] = "30";
 comments[14] = "Id Pregunta: 4658. RD 1553/2005, art&iacute;culo 12";


//  Id pregunta: 4709 AÃ±o de creación de pregunta: 2007-01-01
 questions[15]= "16)  &iquest;Qu&eacute; no es sociedad de la informaci&oacute;n?";
 choices[15]= new Array();
 choices[15][0] = "Un estadio social y econ&oacute;mico de desarrollo.";
 choices[15][1] = "La posibilidad de obtener y compartir &ldquo;cualquier&rdquo; informaci&oacute;n de manera instant&aacute;nea desde cualquier lugar.";
 choices[15][2] = "Una situaci&oacute;n en la que la mayor parte de los empleos est&aacute;n asociados a la producci&oacute;n de bienes tangibles.";
 choices[15][3] = "El cambio de los medios de generaci&oacute;n de riqueza desde los sectores industriales a los sectores de servicios";
 answers[15] = choices[15][2];
 units[15] = "30";
 comments[15] = "Id Pregunta: 4709. Examen 2006 JCYL";


//  Id pregunta: 4779 AÃ±o de creación de pregunta: 2007-01-01
 questions[16]= "17)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[16]= new Array();
 choices[16][0] = "Facturaci&oacute;n electr&oacute;nica";
 choices[16][1] = "Firma electr&oacute;nica";
 choices[16][2] = "Derechos de los usuarios en la Sociedad de la Informaci&oacute;n";
 choices[16][3] = "Todas las anteriores son ciertas";
 answers[16] = choices[16][3];
 units[16] = "30";
 comments[16] = "Id Pregunta: 4779. Ley 56/2007";


//  Id pregunta: 5095 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  Seg&uacute;n la Directiva comunitaria 1999/93/CE de firma electr&oacute;nica, NO es un requisito de los proveedores de servicios de certificaci&oacute;n que expiden certificados reconocidos:";
 choices[17]= new Array();
 choices[17][0] = "Comprobar debidamente, de conformidad con el Derecho nacional, la identidad y, si procede, cualesquiera atributos espec&iacute;ficos de la persona a la que se expide un certificado reconocido";
 choices[17][1] = "Utilizar sistemas y productos fiables que est&eacute;n protegidos contra toda alteraci&oacute;n y que garanticen la seguridad t&eacute;cnica y criptogr&aacute;fica de los procedimientos con que trabajan";
 choices[17][2] = "Almacenar o copiar los datos de creaci&oacute;n de firma de la persona a la que el proveedor de servicios de certificaci&oacute;n ha prestado servicios de gesti&oacute;n de claves";
 choices[17][3] = "Disponer de recursos econ&oacute;micos suficientes para operar de conformidad con lo dispuesto en la presente Directiva, en particular para afrontar el riesgo de responsabilidad por da&ntilde;os y perjuicios, por ejemplo contratando un seguro apropiado";
 answers[17] = choices[17][2];
 units[17] = "30";
 comments[17] = "Id Pregunta: 5095. Directiva 1999/93/CE, Anexo II";


//  Id pregunta: 5096 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  Seg&uacute;n la Directiva comunitaria 1999/93/CE de firma electr&oacute;nica, los servicios de certificaci&oacute;n pueden ser prestados:";
 choices[18]= new Array();
 choices[18][0] = "Solamente por personas f&iacute;sicas o jur&iacute;dicas privadas ";
 choices[18][1] = "Tanto por entidades p&uacute;blicas como por personas f&iacute;sicas o jur&iacute;dicas cuando as&iacute; se establezca de acuerdo con el Derecho nacional";
 choices[18][2] = "Solamente por entidades p&uacute;blicas";
 choices[18][3] = "Por entidades p&uacute;blicas, que expedir&aacute;n los certificados reconocidos, y por personas f&iacute;sicas, que expediran los certificados no reconocidos";
 answers[18] = choices[18][1];
 units[18] = "30";
 comments[18] = "Id Pregunta: 5096. NULL";


//  Id pregunta: 5134 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  Seg&uacute;n el art&iacute;culo 21 de la Ley 34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio electr&oacute;nico, las comunicaciones comerciales a trav&eacute;s de correo electr&oacute;nico:";
 choices[19]= new Array();
 choices[19][0] = "Est&aacute;n estrictamente prohibidas en todos los casos.";
 choices[19][1] = "Est&aacute;n permitidas si el destinatario de las mismas no manifiesta su oposici&oacute;n inequ&iacute;voca y expresa.";
 choices[19][2] = "Est&aacute;n permitidas en los casos previstos en la Ley Org&aacute;nica de Protecci&oacute;n de Datos.";
 choices[19][3] = "Est&aacute;n permitidas si han sido solicitadas o previamente autorizadas por los destinatarios de las mismas.";
 answers[19] = choices[19][3];
 units[19] = "30";
 comments[19] = "Id Pregunta: 5134. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5795 AÃ±o de creación de pregunta: 2009-01-01
 questions[20]= "21)  Identifique la opci&oacute;n que NO es correcta seg&uacute;n lo especificado en Ley 11/2007. Los ciudadanos podr&aacute;n utilizar los siguientes sistemas de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas, de acuerdo con lo que cada Administraci&oacute;n determine:";
 choices[20]= new Array();
 choices[20][0] = "En todo caso, los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad, para personas f&iacute;sicas.";
 choices[20][1] = "Sistemas de firma electr&oacute;nica avanzada basados en certificados electr&oacute;nicos reconocidos emitidos por cualquier prestador de servicios de certificaci&oacute;n.";
 choices[20][2] = "Utilizaci&oacute;n de claves concertadas en un registro previo como usuario, en los t&eacute;rminos y condiciones que en cada caso se determinen.";
 choices[20][3] = "Aportaci&oacute;n de informaci&oacute;n conocida por ambas partes, en los t&eacute;rminos y condiciones que en cada caso se terminen.";
 answers[20] = choices[20][1];
 units[20] = "43";
 comments[20] = "Id Pregunta: 5795. MAP 2008 A2. Actualizada a cambios Ley 15/2014: se deben admitir certificados reconocidos por PSC en lista de confianza publicada en sede-e de MINETUR.";


//  Id pregunta: 5842 AÃ±o de creación de pregunta: 2009-01-01
 questions[21]= "22)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[21]= new Array();
 choices[21][0] = "Es una red que interconecta las redes administrativas de los estados miembros y de las instituciones y agencias europeas";
 choices[21][1] = "Es un instrumento vertebrador e integrador que ofrece a las administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones";
 choices[21][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet";
 choices[21][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC";
 answers[21] = choices[21][2];
 units[21] = "30";
 comments[21] = "Id Pregunta: 5842. MAP 2008 A1";


//  Id pregunta: 5954 AÃ±o de creación de pregunta: 2009-01-01
 questions[22]= "23)  Respecto al uso de Lenguas Oficiales, la Ley 11/2007 de AECSP, especifica lo siguiente:";
 choices[22]= new Array();
 choices[22][0] = "Las sedes electr&oacute;nicas cuyo titular sit&uacute;e su domicilio social sobre territorios con r&eacute;gimen de cooficialidad ling&uuml;&iacute;stica posibilitar&aacute;n el acceso a sus contenidos y servicios en las lenguas correspondientes";
 choices[22][1] = "Se podr&aacute; permitir el uso de las lenguas oficiales del Estado en las relaciones por medios electr&oacute;nicos de los ciudadanos con las Administraciones P&uacute;blicas, en los t&eacute;rminos previstos en la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n y en la normativa que en cada caso resulte de aplicaci&oacute;n.";
 choices[22][2] = "Los sistemas y aplicaciones utilizados en la gesti&oacute;n electr&oacute;nica de los procedimientos se adaptar&aacute;n a lo dispuesto en cuanto al uso de lenguas cooficiales en el art&iacute;culo 36 de la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y el Procedimiento Administrativo Com&uacute;n.";
 choices[22][3] = "Cada Administraci&oacute;n P&uacute;blica afectada determinar&aacute; el calendario para el cumplimiento progresivo de lo previsto en la presente disposici&oacute;n, debiendo garantizar su cumplimiento total a partir del 31 de diciembre de 2009";
 answers[22] = choices[22][2];
 units[22] = "43";
 comments[22] = "Id Pregunta: 5954. Disposici&oacute;n Adicional sexta. ";


//  Id pregunta: 5956 AÃ±o de creación de pregunta: 2009-01-01
 questions[23]= "24)  Se&ntilde;ale la respuesta err&oacute;nea.";
 choices[23]= new Array();
 choices[23][0] = "El Centro de Transferencia de Tecnolog&iacute;a es la respuesta al mandato de La ley 11/2007, de 22 de Junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, en su art&iacute;culo 46 sobre la necesidad de contar con un directorio general de aplicaciones para su reutilizaci&oacute;n";
 choices[23][1] = "Los principales objetivos del CTT son: crear un repositorio com&uacute;n de software, crear una base de conocimiento, crear un espacio donde se puedan compartir experiencias y cooperar";
 choices[23][2] = "Los proyectos publicados en el portal CTT est&aacute;n dirigidos a las Administraciones P&uacute;blicas y las empresas que trabajan en el &aacute;mbito de las Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones y especialmente en Administraci&oacute;n Electr&oacute;nica";
 choices[23][3] = "El CTT es un portal que publica un directorio general de aplicaciones e informa de los proyectos, servicios, normativa y soluciones que se est&aacute;n desarrollando en materia de Administraci&oacute;n electr&oacute;nica.";
 answers[23] = choices[23][2];
 units[23] = "44";
 comments[23] = "Id Pregunta: 5956. www.ctt.map.es";


//  Id pregunta: 6089 AÃ±o de creación de pregunta: 2010-01-01
 questions[24]= "25)  NO corresponde actualmente a una infraestructura o servicio com&uacute;n de la Administraci&oacute;n General del Estado:";
 choices[24]= new Array();
 choices[24][0] = "El servicio de verificaci&oacute;n de datos de identidad o residencia.";
 choices[24][1] = "La pasarela de pagos telem&aacute;ticos.";
 choices[24][2] = "La recepci&oacute;n de facturas electr&oacute;nicas.";
 choices[24][3] = "Todas las anteriores corresponden a infraestructuras o servicio comunes de la Administraci&oacute;n General del Estado";
 answers[24] = choices[24][3];
 units[24] = "44";
 comments[24] = "Id Pregunta: 6089. TIC A 2009. Modificada 2014";


//  Id pregunta: 6187 AÃ±o de creación de pregunta: 2010-01-01
 questions[25]= "26)  Seg&uacute;n el Real Decreto 3/2010, los sistemas existentes a la entrada en vigor del Real Decreto disponen de un plazo de adecuaci&oacute;n de";
 choices[25]= new Array();
 choices[25][0] = "Doce meses desde la entrada en vigor";
 choices[25][1] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses desde la entrada en vigor";
 choices[25][2] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses adicionales";
 choices[25][3] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses desde la aprobaci&oacute;n del plan de adecuaci&oacute;n";
 answers[25] = choices[25][1];
 units[25] = "43";
 comments[25] = "Id Pregunta: 6187. Disposicion transitoria";


//  Id pregunta: 6188 AÃ±o de creación de pregunta: 2010-01-01
 questions[26]= "27)  El Esquema Nacional de Seguridad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[26]= new Array();
 choices[26][0] = "Cada 6 meses";
 choices[26][1] = "Cada a&ntilde;o";
 choices[26][2] = "Cada 2 a&ntilde;os";
 choices[26][3] = "El Esquema Nacional de Seguridad no especifica nada respecto a auditor&iacute;as";
 answers[26] = choices[26][2];
 units[26] = "43";
 comments[26] = "Id Pregunta: 6188. Art&iacute;culo 34. ";


//  Id pregunta: 6190 AÃ±o de creación de pregunta: 2010-01-01
 questions[27]= "28)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, la interoperabilidad se entender&aacute; contemplando las dimensiones";
 choices[27]= new Array();
 choices[27][0] = "T&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[27][1] = "T&eacute;cnica, sem&aacute;ntica y funcional";
 choices[27][2] = "Funcional, sem&aacute;ntica y organizativa";
 choices[27][3] = "T&eacute;cnica, funcional y organizativa";
 answers[27] = choices[27][0];
 units[27] = "43";
 comments[27] = "Id Pregunta: 6190. Art&iacute;culo 6";


//  Id pregunta: 6191 AÃ±o de creación de pregunta: 2010-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas no est&aacute;n contempladas en el Esquema Nacional de Interoperabilidad?";
 choices[28]= new Array();
 choices[28][0] = "Digitalizaci&oacute;n de documentos";
 choices[28][1] = "Pol&iacute;tica de gesti&oacute;n de documentos";
 choices[28][2] = "Copiado aut&eacute;ntico y conversi&oacute;n de documentos";
 choices[28][3] = "Destrucci&oacute;n de documentos en soporte papel";
 answers[28] = choices[28][3];
 units[28] = "43";
 comments[28] = "Id Pregunta: 6191. Disposici&oacute;n adicional primera";


//  Id pregunta: 6366 AÃ±o de creación de pregunta: 2010-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes no es un requisito m&iacute;nimo de seguridad de los definidos en el Esquema Nacional de Seguridad?";
 choices[29]= new Array();
 choices[29][0] = "Gesti&oacute;n de personal.";
 choices[29][1] = "Integridad y actualizaci&oacute;n del sistema.";
 choices[29][2] = "Prevenci&oacute;n ante la continuidad de la actividad.";
 choices[29][3] = "Incidentes de seguridad.";
 answers[29] = choices[29][2];
 units[29] = "43";
 comments[29] = "Id Pregunta: 6366. Art&iacute;culo 11 ENS";


//  Id pregunta: 6372 AÃ±o de creación de pregunta: 2010-01-01
 questions[30]= "31)  En relaci&oacute;n a lo dispuesto en el Esquema Nacional de Seguridad, un sistema de informaci&oacute;n ser&aacute; de categor&iacute;a MEDIA cuando:";
 choices[30]= new Array();
 choices[30][0] = "Las dimensiones de seguridad definidas como cr&iacute;ticas son, en su mayor&iacute;a, de nivel MEDIO.";
 choices[30][1] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna es de nivel inferior.";
 choices[30][2] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna alcanza un nivel superior.";
 choices[30][3] = "Las dimensiones de seguridad son, en su mayor&iacute;a, de nivel MEDIO.";
 answers[30] = choices[30][2];
 units[30] = "43";
 comments[30] = "Id Pregunta: 6372. Anexo I ENS";


//  Id pregunta: 6373 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes no es un grupo de medidas de seguridad de los establecidos en el Esquema Nacional de Seguridad?";
 choices[31]= new Array();
 choices[31][0] = "Marco de gesti&oacute;n";
 choices[31][1] = "Marco organizativo";
 choices[31][2] = "Marco operacional";
 choices[31][3] = "Medidas de protecci&oacute;n";
 answers[31] = choices[31][0];
 units[31] = "43";
 comments[31] = "Id Pregunta: 6373. Anexo II ENS";


//  Id pregunta: 6375 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, un esquema abierto es aquel que cumple las siguientes condiciones:";
 choices[32]= new Array();
 choices[32][0] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[32][1] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[32][2] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial, o que este pago no suponga una dificultad de acceso.";
 choices[32][3] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial o que este pago no suponga una dificultad de acceso.";
 answers[32] = choices[32][0];
 units[32] = "43";
 comments[32] = "Id Pregunta: 6375. Anexo ENI";


//  Id pregunta: 6390 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  Los ciudadanos podr&aacute;n utilizar para relacionarse con la Administraci&oacute;n General del Estado, los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad";
 choices[33]= new Array();
 choices[33][0] = "Cuando as&iacute; lo permita el tr&aacute;mite pertinente";
 choices[33][1] = "En todo caso";
 choices[33][2] = "En ning&uacute;n caso";
 choices[33][3] = "Cuando lo autorice el responsable del proceso";
 answers[33] = choices[33][1];
 units[33] = "43";
 comments[33] = "Id Pregunta: 6390. Art&iacute;culo 10 RD 1671/2009";


//  Id pregunta: 6391 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  &iquest;C&oacute;mo se regula el funcionamiento del registro de funcionarios habilitados? ";
 choices[34]= new Array();
 choices[34][0] = "Mediante Orden HAP/7/2014";
 choices[34][1] = "Mediante RD 7/2014";
 choices[34][2] = "Mediante Ley Org&aacute;nica 7/2014";
 choices[34][3] = "Mediante resoluci&oacute;n de la Secretaria de Estado de Funci&oacute;n P&uacute;blica.";
 answers[34] = choices[34][0];
 units[34] = "43";
 comments[34] = "Id Pregunta: 6391. Art&iacute;culo 16 RD 1671/2009";


//  Id pregunta: 6400 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  El &oacute;rgano competente para la expedici&oacute;n del DNIe es:";
 choices[35]= new Array();
 choices[35][0] = "Ministerio de Defensa";
 choices[35][1] = "Ministerio del Interior";
 choices[35][2] = "Ministerio de Presidencia";
 choices[35][3] = "Secretaria de Estado de Funci&oacute;n P&uacute;blica";
 answers[35] = choices[35][1];
 units[35] = "30";
 comments[35] = "Id Pregunta: 6400. RD 1553/2005, art&iacute;culo 3";


//  Id pregunta: 6403 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l es el plazo m&iacute;nimo para solicitar autorizaci&oacute;n para prestar servicios de la sociedad de la informaci&oacute;n, antes de comenzar a prestar el servicio?";
 choices[36]= new Array();
 choices[36][0] = "15 d&iacute;as";
 choices[36][1] = "1 mes";
 choices[36][2] = "2 meses";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = choices[36][3];
 units[36] = "30";
 comments[36] = "Id Pregunta: 6403. Ley 34/2002, art&iacute;culo 6";


//  Id pregunta: 6410 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  De acuerdo a lo dispuesto en la ley sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico, se considerar&aacute; infracci&oacute;n muy grave:";
 choices[37]= new Array();
 choices[37][0] = "La falta de menci&oacute;n de la fecha de la &uacute;ltima actualizaci&oacute;n de la informaci&oacute;n";
 choices[37][1] = "La ausencia de cita de la fuente";
 choices[37][2] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida";
 choices[37][3] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia";
 answers[37] = choices[37][3];
 units[37] = "30";
 comments[37] = "Id Pregunta: 6410. Art&iacute;culo 11 Ley 37/2007";


//  Id pregunta: 6411 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  De acuerdo a lo dispuesto en la ley de servicios de la sociedad de la informaci&oacute;n y comercio electr&oacute;nico, &iquest;Cu&aacute;l es la sanci&oacute;n correspondiente por la comisi&oacute;n de infracciones muy graves?";
 choices[38]= new Array();
 choices[38][0] = "150.001 hasta 600.000 euros";
 choices[38][1] = "150.001 hasta 300.000 euros";
 choices[38][2] = "300.001 hasta 600.000 euros";
 choices[38][3] = "600.001 hasta 1,000.000 euros";
 answers[38] = choices[38][0];
 units[38] = "30";
 comments[38] = "Id Pregunta: 6411. Ley 34/2002, art&iacute;culo 39";


//  Id pregunta: 6460 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  Respecto a los contratos celebrados por v&iacute;a electr&oacute;nica &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[39]= new Array();
 choices[39][0] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos";
 choices[39][1] = "Las partes podr&aacute;n pactar que un tercero archive las declaraciones de voluntad que integran los contratos electr&oacute;nicos por un per&iacute;odo inferior a tres a&ntilde;os";
 choices[39][2] = "Siempre que la Ley exija que el contrato o cualquier informaci&oacute;n relacionada con el mismo conste por escrito esta deber&aacute; enviarse por correo ordinario al contratante";
 choices[39][3] = "El soporte electr&oacute;nico en que conste un contrato celebrado por v&iacute;a electr&oacute;nica ser&aacute; admisible en juicio como prueba documental";
 answers[39] = choices[39][3];
 units[39] = "30";
 comments[39] = "Id Pregunta: 6460. Castilla La Mancha 2009 (Ley 34/2002, art&iacute;culo 24)";


//  Id pregunta: 7145 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  En la Ley 11/2007 de 22 de Junio, se regula las condiciones de teletrabajo en la Administraci&oacute;n General del Estado. Estas condiciones deber&iacute;an estar establecidas antes del:";
 choices[40]= new Array();
 choices[40][0] = "1 de marzo de 2008";
 choices[40][1] = "1 de abril de 2008";
 choices[40][2] = "31 de diciembre de 2009";
 choices[40][3] = "31 de diciembre de 2008";
 answers[40] = choices[40][0];
 units[40] = "43";
 comments[40] = "Id Pregunta: 7145. Examen TIC B 2009";


//  Id pregunta: 7146 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;Qu&eacute; art&iacute;culo de la Ley 11/2007 de 22 de Junio hace referencia a los Esquemas Nacionales de Interoperabilidad y Seguridad?";
 choices[41]= new Array();
 choices[41][0] = "Art&iacute;culo 52";
 choices[41][1] = "Art&iacute;culo 44";
 choices[41][2] = "Art&iacute;culo 42";
 choices[41][3] = "Art&iacute;culo 50";
 answers[41] = choices[41][2];
 units[41] = "43";
 comments[41] = "Id Pregunta: 7146. Examen TIC B 2009";


//  Id pregunta: 7147 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica, &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las entidades que integran la Administraci&oacute;n Local en materia de Administraci&oacute;n Electr&oacute;nica, depende de:";
 choices[42]= new Array();
 choices[42][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica";
 choices[42][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[42][2] = "La Direcci&oacute;n General para el Impulso de la Administraci&oacute;n Electr&oacute;nica";
 choices[42][3] = "Del Vicepresidente Tercero del Gobierno y Ministro de Cooperaci&oacute;n Territorial";
 answers[42] = choices[42][0];
 units[42] = "44";
 comments[42] = "Id Pregunta: 7147. Examen TIC B 2009";


//  Id pregunta: 8276 AÃ±o de creación de pregunta: 2011-01-01
 questions[43]= "44)  El Defensor del Usuario de la Administraci&oacute;n Electr&oacute;nica es nombrado por:";
 choices[43]= new Array();
 choices[43][0] = "El Consejo de Ministros.";
 choices[43][1] = "El Ministro de la Presidencia.";
 choices[43][2] = "El Ministro de Industria, Energ&iacute;a y Turismo.";
 choices[43][3] = "El Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 answers[43] = choices[43][0];
 units[43] = "43";
 comments[43] = "Id Pregunta: 8276. Examen TIC A1 2010. Actualizado a MINETUR en lugar de MITYC.";


//  Id pregunta: 8423 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[44]= new Array();
 choices[44][0] = "Seguridad integral";
 choices[44][1] = "An&aacute;lisis de riesgos";
 choices[44][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[44][3] = "Funci&oacute;n diferenciada";
 answers[44] = choices[44][1];
 units[44] = "43";
 comments[44] = "Id Pregunta: 8423. El principio es gesti&oacute;n de riesgos, no an&aacute;lisis de riesgos.";


//  Id pregunta: 8440 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes elementos no aparece en el recibo firmado electr&oacute;nicamente emitido autom&aacute;ticamente por el registro electr&oacute;nico, seg&uacute;n el RD 1671/2009?";
 choices[45]= new Array();
 choices[45][0] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada.";
 choices[45][1] = "Direcci&oacute;n de la sede electr&oacute;nica del organismo.";
 choices[45][2] = "En su caso, enumeraci&oacute;n y denominaci&oacute;n de los documentos adjuntos al formulario de presentaci&oacute;n o documento presentado, seguida de la huella electr&oacute;nica de cada uno de ellos.";
 choices[45][3] = "Informaci&oacute;n del plazo m&aacute;ximo establecido normativamente para la resoluci&oacute;n y notificaci&oacute;n del procedimiento, as&iacute; como de los efectos que pueda producir el silencio administrativo, cuando sea autom&aacute;ticamente determinable.";
 answers[45] = choices[45][1];
 units[45] = "43";
 comments[45] = "Id Pregunta: 8440. ";


//  Id pregunta: 8732 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  Los ciudadanos podr&aacute;n utilizar el siguiente sistema de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas:";
 choices[46]= new Array();
 choices[46][0] = "Siempre se exigir&aacute; firma electr&oacute;nica reconocida, como garant&iacute;a jur&iacute;dica.";
 choices[46][1] = "&Uacute;nicamente el ser&aacute; v&aacute;lido el DNI electr&oacute;nico, una vez extendido a toda la poblaci&oacute;n";
 choices[46][2] = "Firma electr&oacute;nica avanzada.";
 choices[46][3] = "Est&aacute; pendiente de desarrollo reglamentario el uso efectivo de la firma electr&oacute;nica en esos casos.";
 answers[46] = choices[46][2];
 units[46] = "43";
 comments[46] = "Id Pregunta: 8732. Examen TIC A2 2010 interna";


//  Id pregunta: 8748 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  Un ciudadano quiere remitir un escrito con una sugerencia de servicio a un organismo con oficinas de atenci&oacute;n al p&uacute;blico, &iquest;est&aacute; contemplada en la Ley 11/2007, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, LAECSP, la posibilidad de que remita ese escrito, con un formato libre, a trav&eacute;s del registro electr&oacute;nico del organismo destinatario del mismo?";
 choices[47]= new Array();
 choices[47][0] = "Si, est&aacute; prevista tal posibilidad para cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquier &oacute;rgano o entidad del &aacute;mbito de la administraci&oacute;n titular del registro";
 choices[47][1] = "No, porque s&oacute;lo se prev&eacute; la recepci&oacute;n de documentos normalizados, que est&eacute;n predeterminados en la normativa de creaci&oacute;n del registro, nunca un escrito no normalizado como el del enunciado";
 choices[47][2] = "Se prev&eacute; tal recepci&oacute;n, pero con car&aacute;cter informativo &uacute;nicamente, debiendo complementar el envi&oacute; con el escrito en papel, a trav&eacute;s de un registro f&iacute;sico, en un plazo definido en la normativa de desarrollo";
 choices[47][3] = "S&iacute;, porque cumple con el requisito indispensable de tratarse del registro del organismo destinatario del registro";
 answers[47] = choices[47][0];
 units[47] = "43";
 comments[47] = "Id Pregunta: 8748. Examen TIC A2 2010 interna";


//  Id pregunta: 8750 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  Dentro del contexto que marca la Ley 11/2007, un expediente electr&oacute;nico es:";
 choices[48]= new Array();
 choices[48][0] = "La copia electr&oacute;nica de un expediente en papel, que es el que conservar&aacute; la eficacia jur&iacute;dica, foliado mediante un &Iacute;ndice electr&oacute;nico y firmado electr&oacute;nicamente";
 choices[48][1] = "El conjunto de documentos electr&oacute;nicos correspondientes a alguno de los procedimientos administrativos incluidos en la normativa de creaci&oacute;n de la sede electr&oacute;nica";
 choices[48][2] = "El conjunto de documentos electr&oacute;nicos correspondientes a un procedimiento administrativo, cualquiera que sea el Upo de informaci&oacute;n que contengan";
 choices[48][3] = "Una aplicaci&oacute;n inform&aacute;tica para la gesti&oacute;n automatizada de expedientes en el &aacute;mbito de la Administraci&oacute;n General del Estado.";
 answers[48] = choices[48][2];
 units[48] = "43";
 comments[48] = "Id Pregunta: 8750. Examen TIC A2 2010 interna";


//  Id pregunta: 8936 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  Las sedes judiciales electr&oacute;nicas se crear&aacute;n mediante disposici&oacute;n publicada en:";
 choices[49]= new Array();
 choices[49][0] = "El Bolet&iacute;n Oficial del Estado";
 choices[49][1] = "El Bolet&iacute;n Oficial de la Comunidad Aut&oacute;noma correspondiente";
 choices[49][2] = "En los dos anteriores conjuntamente en los casos indicados en la ley";
 choices[49][3] = "En uno de los dos";
 answers[49] = choices[49][3];
 units[49] = "43";
 comments[49] = "Id Pregunta: 8936. ";


//  Id pregunta: 8942 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Cu&aacute;les de las siguientes no tendr&aacute;n la consideraci&oacute;n de copias aut&eacute;nticas seg&uacute;n la ley 18/2011?";
 choices[50]= new Array();
 choices[50][0] = "Las copias realizadas en soporte papel de documentos judiciales electr&oacute;nicos y firmados electr&oacute;nicamente por el secretario judicial que incluyan la impresi&oacute;n de un c&oacute;digo seguro de verificaci&oacute;n que permita contrastar su autenticidad";
 choices[50][1] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos originalmente por ellas en soporte papel";
 choices[50][2] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos por el interesado en soporte papel";
 choices[50][3] = "Las copias realizadas por medios electr&oacute;nicos de documentos electr&oacute;nicos emitidos por el propio interesado estando el documento electr&oacute;nico original en poder de la oficina judicial donde haya sido originado o incorporado y que la informaci&oacute;n de firma electr&oacute;nica y, en su caso, de sellado de tiempo permitan comprobar la coincidencia con dicho documento";
 answers[50] = choices[50][2];
 units[50] = "43";
 comments[50] = "Id Pregunta: 8942. ";


//  Id pregunta: 9541 AÃ±o de creación de pregunta: 2013-01-01
 questions[51]= "52)  El &quot;Servicio Central de Gesti&oacute;n de Facturaci&oacute;n&quot; de la Administraci&oacute;n General del Estado, es descrito en:";
 choices[51]= new Array();
 choices[51][0] = "Ley 30/2007 de Contratos del Sector P&uacute;blico.";
 choices[51][1] = "ORDEN PRE/2971/2007, sobre l a expedici&oacute;n de facturas por medios electr&oacute;nicos cuando el destinatario de las mismas sea la Administraci&oacute;n General del Estado.";
 choices[51][2] = "Ley 56/2007 de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[51][3] = "Orden PRE/2794/2011, por el que se determina el marco de ejercicio de las competencias estatales en materia de factura electr&oacute;nica.";
 answers[51] = choices[51][3];
 units[51] = "30";
 comments[51] = "Id Pregunta: 9541. Examen TIC A1 2011	";


//  Id pregunta: 9542 AÃ±o de creación de pregunta: 2013-01-01
 questions[52]= "53)  Las comunicaciones comerciales no solicitadas realizadas a trav&eacute;s de correo electr&oacute;nico o medios de comunicaci&oacute;n electr&oacute;nica equivalentes:";
 choices[52]= new Array();
 choices[52][0] = "Deben incluir al comienzo del mensaje la palabra &laquo;publicidad&raquo;.";
 choices[52][1] = "Deben indicar la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan.";
 choices[52][2] = "Deben incluir claramente las condiciones comerciales o promocionales.";
 choices[52][3] = "Est&aacute;n prohibidas.";
 answers[52] = choices[52][3];
 units[52] = "30";
 comments[52] = "Id Pregunta: 9542. Examen TIC A1 2011 (Ley 34/2002, art&iacute;culo 21)";


//  Id pregunta: 9543 AÃ±o de creación de pregunta: 2013-01-01
 questions[53]= "54)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[53]= new Array();
 choices[53][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[53][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[53][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[53][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[53] = choices[53][1];
 units[53] = "30";
 comments[53] = "Id Pregunta: 9543. Examen TIC A1 2011";


//  Id pregunta: 9571 AÃ±o de creación de pregunta: 2013-01-01
 questions[54]= "55)  En la pr&aacute;ctica de notificaciones por medios electr&oacute;nicos a que se refiere el art&iacute;culo 28 de la Ley 11/2007, de 22 de junio, de Acceso electr&oacute;nico de los ciudadanos a los Servicios p&uacute;blicos:";
 choices[54]= new Array();
 choices[54][0] = "Se requerir&aacute; en todo caso que el interesado lo haya solicitado previamente por escrito en el Registro del &oacute;rgano que ha de resolver.";
 choices[54][1] = "Cuando no pueda acreditarse por el sistema la fecha y hora en que se produzca, se entender&aacute;, a efectos de ulterior recurso, practicada el &uacute;ltimo d&iacute;a del plazo en que deb&iacute;a practicarse.";
 choices[54][2] = "Cuando, existiendo constancia de la puesta a disposici&oacute;n de la notificaci&oacute;n transcurrieran diez d&iacute;as naturales sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada con los efectos previstos en el art&iacute;culo 59.4 de la LRJPAC.";
 choices[54][3] = "Cuando, existiendo constancia de la puesta a disposici&oacute;n de la notificaci&oacute;n transcurrieran diez d&iacute;as h&aacute;biles sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido debidamente practicada y surtir&aacute; los efectos previstos en el art&iacute;culo 2.";
 answers[54] = choices[54][2];
 units[54] = "43";
 comments[54] = "Id Pregunta: 9571. Examen TIC A1 2011";


//  Id pregunta: 9578 AÃ±o de creación de pregunta: 2013-01-01
 questions[55]= "56)  El Comit&eacute; de Estrategia TIC:";
 choices[55]= new Array();
 choices[55][0] = "Es el &oacute;rgano existente en los departamentos ministeriales, en el &aacute;mbito de la Administraci&oacute;n General del Estado, competente en materia de administraci&oacute;n electr&oacute;nica.";
 choices[55][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[55][2] = "Es el &oacute;rgano colegiado encargado de la definici&oacute;n y supervisi&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[55][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea";
 answers[55] = choices[55][2];
 units[55] = "43";
 comments[55] = "Id Pregunta: 9578. Examen TIC A1 2011, adaptado a RD 806/2014.";


//  Id pregunta: 9584 AÃ±o de creación de pregunta: 2013-01-01
 questions[56]= "57)  Los certificados incorporados al DNI-e:";
 choices[56]= new Array();
 choices[56][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[56][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[56][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[56][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[56] = choices[56][3];
 units[56] = "43, 74";
 comments[56] = "Id Pregunta: 9584. Examen TIC A1 2011";


//  Id pregunta: 9586 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  Seg&uacute;n la norma t&eacute;cnica de interoperabilidad de pol&iacute;tica de firma electr&oacute;nica y de certificados de la administraci&oacute;n del Esquema Nacional de Interoperabilidad:";
 choices[57]= new Array();
 choices[57][0] = "Los formatos para la firma electr&oacute;nica de contenidos ser&aacute;n XAdES, CAdES y PAdES.";
 choices[57][1] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; &ndash;A.";
 choices[57][2] = "Los documentos electr&oacute;nicos a los que se aplique firma basada en certificados de cara a su intercambio no se ajustar&aacute;n a las especificaciones de formato y estructura establecidas en la NTI de Documento electr&oacute;nico.";
 choices[57][3] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; &ndash;C.";
 answers[57] = choices[57][0];
 units[57] = "43";
 comments[57] = "Id Pregunta: 9586. Examen TIC A1 2011";


//  Id pregunta: 9589 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  El Real Decreto 1671/2009 obliga a incluir unos contenidos m&iacute;nimos en los certificados de sello electr&oacute;nico, entre los que NO se incluye:";
 choices[58]= new Array();
 choices[58][0] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n sello electr&oacute;nico.";
 choices[58][1] = "Actuaciones y procedimientos en los que podr&aacute; ser utilizado. ";
 choices[58][2] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor. ";
 choices[58][3] = "Nombre del suscriptor.";
 answers[58] = choices[58][1];
 units[58] = "43";
 comments[58] = "Id Pregunta: 9589. Examen TIC A2 2011";


//  Id pregunta: 9592 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  El c&oacute;mputo de plazos, imputables tanto a los interesados como a las Administraciones P&uacute;blicas, seg&uacute;n se establece en el art&iacute;culo 26 de la Ley 11/2007 se fija por:";
 choices[59]= new Array();
 choices[59][0] = "La fecha y hora oficial de la sede electr&oacute;nica de los servicios centrales, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[59][1] = "La fecha y hora oficial de la sede electr&oacute;nica de acceso, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[59][2] = "La fecha y hora oficial del Real Instituto y Observatorio de la Armada, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible.";
 choices[59][3] = "La fecha y hora oficial de la sede electr&oacute;nica del Ministerio de Pol&iacute;tica Territorial y Administraci&oacute;n P&uacute;blica, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 answers[59] = choices[59][1];
 units[59] = "43";
 comments[59] = "Id Pregunta: 9592. Examen TIC A2 2011 interna";


//  Id pregunta: 9893 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En el entorno de las Tecnolog&iacute;as de la Informaci&oacute;n, la Comisi&oacute;n Soto sirvi&oacute; para";
 choices[60]= new Array();
 choices[60][0] = "impulsar la creaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[60][1] = "impulsar el modelo de crecimiento aut&oacute;nomo de cada departamento ministerial en materia de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[60][2] = "Revisar, en base a la Ley 11/2007, los modelos de organizaci&oacute;n de las Tecnolog&iacute;as de la Informaci&oacute;n creados anteriormente.";
 choices[60][3] = "impulsar el desarrollo de la Sociedad de la Informaci&oacute;n.";
 answers[60] = choices[60][3];
 units[60] = "43";
 comments[60] = "Id Pregunta: 9893. TIC A1, Examen 2013";


//  Id pregunta: 10148 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  En relaci&oacute;n a las Comunicaciones comerciales por v&iacute;a electr&oacute;nica reguladas por la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[61]= new Array();
 choices[61][0] = "Las comunicaciones comerciales realizadas por v&iacute;a electr&oacute;nica deber&aacute;n ser claramente identificables como tales y la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan tambi&eacute;n deber&aacute; ser claramente identificable.";
 choices[61][1] = "En el caso en el que tengan lugar a trav&eacute;s de correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente incluir&aacute;n al comienzo del mensaje la palabra ''publicidad'' o la abreviatura ''publi''";
 choices[61][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.";
 choices[61][3] = "Lo dispuesto en el apartado anterior no ser&aacute; de aplicaci&oacute;n cuando exista una relaci&oacute;n contractual previa, siempre que el prestador hubiera obtenido de forma l&iacute;cita los datos de contacto del destinatario y los empleara para el env&iacute;o de comunicaciones comerciales referentes a productos o servicios de su propia empresa que sean similares a los que inicialmente fueron objeto de contrataci&oacute;n con el cliente.";
 answers[61] = choices[61][1];
 units[61] = "30";
 comments[61] = "Id Pregunta: 10148. ";


//  Id pregunta: 10149 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  La Ley 34/2002, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, en relaci&oacute;n a la imposici&oacute;n de Sanciones indica";
 choices[62]= new Array();
 choices[62][0] = "El &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[62][1] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a La adhesi&oacute;n a un c&oacute;digo de conducta o a un sistema de autorregulaci&oacute;n publicitaria aplicable respecto a la infracci&oacute;n cometida.";
 choices[62][2] = "Las dos anteriores son ciertas";
 choices[62][3] = "Las afirmaciones anteriores son falsas";
 answers[62] = choices[62][2];
 units[62] = "30";
 comments[62] = "Id Pregunta: 10149. ";


//  Id pregunta: 10150 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  En cumplimiento de la Ley 25/2007, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones:";
 choices[63]= new Array();
 choices[63][0] = "Los operadores deben conservar el contenido de las comunicaciones";
 choices[63][1] = "El deber de conservaci&oacute;n se extiende a los datos relativos a las llamadas infructuosas";
 choices[63][2] = "La obligaci&oacute;n de conservaci&oacute;n de datos impuesta cesa a los cuatro meses computados desde la fecha en que se haya producido la comunicaci&oacute;n";
 choices[63][3] = "El plazo de ejecuci&oacute;n de la orden de cesi&oacute;n ser&aacute; el fijado por la resoluci&oacute;n judicial. Si no se establece otro plazo distinto, la cesi&oacute;n deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 answers[63] = choices[63][1];
 units[63] = "30";
 comments[63] = "Id Pregunta: 10150. ";


//  Id pregunta: 10157 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[64]= new Array();
 choices[64][0] = "Los recursos reutilizables estar&aacute;n identificados mediante referencias &uacute;nicas y un&iacute;vocas, basadas en identificadores de recursos uniformes (URI).";
 choices[64][1] = "Se usar&aacute;n est&aacute;ndares abiertos o de uso generalizado por la ciudadan&iacute;a, ci&ntilde;&eacute;ndose a lo establecido en la NTI de Cat&aacute;logo de Est&aacute;ndares. ";
 choices[64][2] = "Los datos se encontrar&aacute;n agregados para facilitar la reutilizaci&oacute;n.";
 choices[64][3] = "Para facilitar la reutilizaci&oacute;n de vocabularios se utilizar&aacute; el Centro de Interoperabilidad Sem&aacute;ntica";
 answers[64] = choices[64][2];
 units[64] = "43";
 comments[64] = "Id Pregunta: 10157. ";


//  Id pregunta: 10158 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  El servicio que da respuesta a la implementaci&oacute;n de la medida CORA 3.00.002.8, &quot;Concentraci&oacute;n de la gesti&oacute;n, producci&oacute;n, impresi&oacute;n y distribuci&oacute;n de las notificaciones y comunicaciones postales en centros de impresi&oacute;n y ensobrado con dimensi&oacute;n &oacute;ptima&quot; se denomina:";
 choices[65]= new Array();
 choices[65][0] = "SNE";
 choices[65][1] = "NoTe";
 choices[65][2] = "Notific@";
 choices[65][3] = "GESNOTE";
 answers[65] = choices[65][2];
 units[65] = "44";
 comments[65] = "Id Pregunta: 10158. ";


//  Id pregunta: 10545 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Europa 2020...";
 choices[66]= new Array();
 choices[66][0] = "La estrategia Europa 2020 trata de lograr un crecimiento inteligente, a trav&eacute;s de inversiones m&aacute;s eficaces en educaci&oacute;n, investigaci&oacute;n e innovaci&oacute;n, sostenible, gracias al impulso decidido a una econom&iacute;a baja en carbono, e integrador, que ponga el acento en la creaci&oacute;n de empleo y la reducci&oacute;n de la pobreza.";
 choices[66][1] = "La estrategia se centra en cinco ambiciosos objetivos en las &aacute;reas de empleo, innovaci&oacute;n, educaci&oacute;n, reducci&oacute;n de la pobreza y cambio clim&aacute;tico / energ&iacute;a.";
 choices[66][2] = "A y B son correctas";
 choices[66][3] = "Todas son incorrectas";
 answers[66] = choices[66][2];
 units[66] = "30";
 comments[66] = "Id Pregunta: 10545. ";


//  Id pregunta: 10576 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Elija la respuesta incorrecta:";
 choices[67]= new Array();
 choices[67][0] = "La utilizaci&oacute;n de infraestructuras y servicios comunes proporciona mayor agilidad en el desarrollo y despliegue de servicios.";
 choices[67][1] = "Las Administraciones P&uacute;blicas pueden utilizar cualquier tecnolog&iacute;a de la informaci&oacute;n en sus relaciones con los ciudadanos.";
 choices[67][2] = "El Comit&eacute; Sectorial de la Administraci&oacute;n Electr&oacute;nica asegura la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[67][3] = "Existe un directorio general de aplicaciones para su reutilizaci&oacute;n en la AGE.";
 answers[67] = choices[67][1];
 units[67] = "44";
 comments[67] = "Id Pregunta: 10576. Art&iacute;culo 41, Ley 11/2007: deben evitar discriminaci&oacute;n.";


//  Id pregunta: 10581 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Son principios generales de la Ley 11/2007:";
 choices[68]= new Array();
 choices[68][0] = "Neutralidad tecnol&oacute;gica, accesibilidad y disponibilidad.";
 choices[68][1] = "Informaci&oacute;n, igualdad y legalidad.";
 choices[68][2] = "Calidad, conectividad y seguridad.";
 choices[68][3] = "Cooperaci&oacute;n, responsabilidad y transparencia.";
 answers[68] = choices[68][3];
 units[68] = "43";
 comments[68] = "Id Pregunta: 10581. Art&iacute;culo 4, Ley 11/2007.";


//  Id pregunta: 10587 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Europa 2020 tiene como prioridades un crecimiento:";
 choices[69]= new Array();
 choices[69][0] = "Global, tecnol&oacute;gico y sostenible.";
 choices[69][1] = "Informado, sostenible y solidario.";
 choices[69][2] = "Inteligente, sostenible e integrador.";
 choices[69][3] = "Arm&oacute;nico, estable y social.";
 answers[69] = choices[69][2];
 units[69] = "30";
 comments[69] = "Id Pregunta: 10587. ";


//  Id pregunta: 10591 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Son europeos:";
 choices[70]= new Array();
 choices[70][0] = "El cuerpo de reguladores de comunicaciones electr&oacute;nicas BEREC";
 choices[70][1] = "El programa para el impulso de la Sociedad de la Informaci&oacute;n IDESI";
 choices[70][2] = "El sistema inform&aacute;tico JOIN para el intercambio de identidades electr&oacute;nicas";
 choices[70][3] = "La red SARA";
 answers[70] = choices[70][0];
 units[70] = "30";
 comments[70] = "Id Pregunta: 10591. ";


//  Id pregunta: 10674 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor.";
 choices[71]= new Array();
 choices[71][0] = "6 meses despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[71][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[71][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n para todas sus previsiones normativas.";
 choices[71][3] = "Ninguna de las anteriores.";
 answers[71] = choices[71][3];
 units[71] = "30";
 comments[71] = "Id Pregunta: 10674. ";


//  Id pregunta: 10682 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Seg&uacute;n la Ley 39/2015 cual de las siguientes opciones no se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[72]= new Array();
 choices[72][0] = "A ser tratados con respeto y deferencia por las autoridades y empleados p&uacute;blicos, que habr&aacute;n de facilitarles el ejercicio de sus derechos y el cumplimiento de sus obligaciones.";
 choices[72][1] = "A la obtenci&oacute;n y utilizaci&oacute;n de los medios de identificaci&oacute;n y firma electr&oacute;nica contemplados en esta Ley.";
 choices[72][2] = "A la protecci&oacute;n de datos de car&aacute;cter personal, y en particular a la seguridad y confidencialidad de los datos que figuren en los ficheros, sistemas y aplicaciones de las Administraciones P&uacute;blicas.";
 choices[72][3] = "Archivo y registro del expediente asociado con todo procedimiento administrativo.";
 answers[72] = choices[72][3];
 units[72] = "30";
 comments[72] = "Id Pregunta: 10682. ";


//  Id pregunta: 10691 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  La Ley 39/2015 impone:";
 choices[73]= new Array();
 choices[73][0] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con un registro u otro sistema equivalente";
 choices[73][1] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con una red para el intercambio de informaci&oacute;n entre las Administraciones P&uacute;blicas.";
 choices[73][2] = "Ambas";
 choices[73][3] = "Ninguna de las anteriores.";
 answers[73] = choices[73][0];
 units[73] = "30";
 comments[73] = "Id Pregunta: 10691. ";


//  Id pregunta: 10700 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes no es considerado un componente de un documento electr&oacute;nico seg&uacute;n la NTI de Documento Electr&oacute;nico?";
 choices[74]= new Array();
 choices[74][0] = "Encabezado.";
 choices[74][1] = "Contenido.";
 choices[74][2] = "Firma electr&oacute;nica.";
 choices[74][3] = "Metadatos.";
 answers[74] = choices[74][0];
 units[74] = "43";
 comments[74] = "Id Pregunta: 10700. ";


//  Id pregunta: 10701 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Seg&uacute;n la NTI de Documento Electr&oacute;nico &iquest;Se pueden utilizar formatos diferentes a los establecidos en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares?";
 choices[75]= new Array();
 choices[75][0] = "Cuando existan particularidades que lo justifiquen.";
 choices[75][1] = "Cuando sea necesario para asegurar el valor probatorio del documento electr&oacute;nico.";
 choices[75][2] = "En ambos casos.";
 choices[75][3] = "En ning&uacute;n caso.";
 answers[75] = choices[75][2];
 units[75] = "43";
 comments[75] = "Id Pregunta: 10701. ";


//  Id pregunta: 10713 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l no es seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre las entidades registrales un componente de la plataforma de intercambio?";
 choices[76]= new Array();
 choices[76][0] = "Origen";
 choices[76][1] = "Destino";
 choices[76][2] = "Gestor de intercambio";
 choices[76][3] = "Sistema de intercambio";
 answers[76] = choices[76][3];
 units[76] = "43";
 comments[76] = "Id Pregunta: 10713. ";


//  Id pregunta: 10720 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l es el perfil m&iacute;nimo de formato permitido por la NTI de firma electr&oacute;nica?";
 choices[77]= new Array();
 choices[77][0] = "#NAME?";
 choices[77][1] = "#NAME?";
 choices[77][2] = "#NAME?";
 choices[77][3] = "B&aacute;sico de primer nivel";
 answers[77] = choices[77][0];
 units[77] = "43";
 comments[77] = "Id Pregunta: 10720. ";


//  Id pregunta: 10725 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  La utilizaci&oacute;n de qu&eacute; est&aacute;ndares no est&aacute; explicitamente prevista en la NTI de Protocolos de Intermediaci&oacute;n";
 choices[78]= new Array();
 choices[78][0] = "WSDL";
 choices[78][1] = "XML";
 choices[78][2] = "TLS";
 choices[78][3] = "RSS";
 answers[78] = choices[78][3];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10725. ";


//  Id pregunta: 10732 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;En qu&eacute; a&ntilde;o se public&oacute; la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[79]= new Array();
 choices[79][0] = "2010";
 choices[79][1] = "2011";
 choices[79][2] = "2013";
 choices[79][3] = "2015";
 answers[79] = choices[79][2];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10732. ";


//  Id pregunta: 10734 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l es el &aacute;mbito de amplicaci&oacute;n de la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[80]= new Array();
 choices[80][0] = "Administraci&oacute;n General del Estado";
 choices[80][1] = "Administraci&oacute;n General del Estado y Comunidades Aut&oacute;nom&aacute;s";
 choices[80][2] = "Cualquier &oacute;rgano de la Administraci&oacute;n p&uacute;blica";
 choices[80][3] = "Cualquier &oacute;rgano de la Administraci&oacute;n p&uacute;blica o Entidad de Derecho P&uacute;blico vinculada o dependiente";
 answers[80] = choices[80][3];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10734. ";


//  Id pregunta: 10780 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Seg&uacute;n el art&iacute;culo 18 del Real Decreto 1671/2009, sobre certificados de sede electr&oacute;nica de la Administraci&oacute;n General del Estado y de sus organismos p&uacute;blicos vinculados o dependientes, &iquest;cu&aacute;l de los siguientes NO es uno de los contenidos m&iacute;nimos a incluir en un certificado electr&oacute;nico de sede electr&oacute;nica?";
 choices[81]= new Array();
 choices[81][0] = "Nombre descriptivo de la sede electr&oacute;nica.";
 choices[81][1] = "N&uacute;mero de identificaci&oacute;n fiscal de la entidad suscriptora.";
 choices[81][2] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n &laquo;sede electr&oacute;nica&raquo;.";
 choices[81][3] = "Direcci&oacute;n f&iacute;sica de la entidad suscriptora.";
 answers[81] = choices[81][3];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10780. Examen GSI 2014";


//  Id pregunta: 10783 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Seg&uacute;n el art&iacute;culo 40 de la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, sobre el Comit&eacute; Sectorial de administraci&oacute;n electr&oacute;nica, &iquest;cu&aacute;l de las siguientes opciones es una funci&oacute;n de dicho &oacute;rgano?";
 choices[82]= new Array();
 choices[82][0] = "Desarrollar la normativa en materia de administraci&oacute;n electr&oacute;nica a nivel nacional.";
 choices[82][1] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[82][2] = "Elaborar un informe anual sobre el nivel de avance de la administraci&oacute;n electr&oacute;nica a nivel nacional, auton&oacute;mico y municipal.";
 choices[82][3] = "Estimular el crecimiento en el empleo de la administraci&oacute;n electr&oacute;nica por parte de ciudadanos y empresas.";
 answers[82] = choices[82][1];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10783. Examen GSI 2014";


//  Id pregunta: 11016 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;En cu&aacute;ntos cap&iacute;tulos se estructura el RD 4/2010 (ENI)?";
 choices[83]= new Array();
 choices[83][0] = "8";
 choices[83][1] = "10";
 choices[83][2] = "11";
 choices[83][3] = "12";
 answers[83] = choices[83][3];
 units[83] = "30";
 comments[83] = "Id Pregunta: 11016. ";


//  Id pregunta: 11121 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;En qu&eacute; situaci&oacute;n pueden las AAPP establecer la obligatoriedad de comunicarse con ellas utilizando s&oacute;lo medios electr&oacute;nicos?";
 choices[84]= new Array();
 choices[84][0] = "Nunca";
 choices[84][1] = "&Uacute;nicamente cuando los interesados sean personas jur&iacute;dicas";
 choices[84][2] = "Cuando los interesados sean personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[84][3] = "En todo caso";
 answers[84] = choices[84][2];
 units[84] = "43";
 comments[84] = "Id Pregunta: 11121. ";


//  Id pregunta: 11192 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;A cu&aacute;l de las siguientes prioridades de la estrategia Europa 2020 se hace referencia con el objetivo de la b&uacute;squeda de un econom&iacute;a basada en el conocimiento y la innovaci&oacute;n?";
 choices[85]= new Array();
 choices[85][0] = "Crecimiento inteligente";
 choices[85][1] = "Crecimiento sostenible";
 choices[85][2] = "Crecimiento innovador";
 choices[85][3] = "Crecimiento integrador";
 answers[85] = choices[85][0];
 units[85] = "30";
 comments[85] = "Id Pregunta: 11192. ";


//  Id pregunta: 11193 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes no es una prioridad de la estrategia Europa 2020?";
 choices[86]= new Array();
 choices[86][0] = "Crecimiento inteligente";
 choices[86][1] = "Crecimiento sostenible";
 choices[86][2] = "Crecimiento integrador";
 choices[86][3] = "Todas las anteriores";
 answers[86] = choices[86][3];
 units[86] = "30";
 comments[86] = "Id Pregunta: 11193. ";


//  Id pregunta: 11194 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento sostenible?";
 choices[87]= new Array();
 choices[87][0] = "Juventud en movimiento";
 choices[87][1] = "Una Europa que utilice eficazmente los recursos";
 choices[87][2] = "Plataforma Europea contra la pobreza";
 choices[87][3] = "Agenda Clim&aacute;tica para Europa";
 answers[87] = choices[87][1];
 units[87] = "30";
 comments[87] = "Id Pregunta: 11194. ";


//  Id pregunta: 11197 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Qu&eacute; objetivo de porcentaje de i+d marca la estrategia europea 2020 para la Uni&oacute;n Europea?";
 choices[88]= new Array();
 choices[88][0] = "2% del PIB";
 choices[88][1] = "3%del PIB";
 choices[88][2] = "5% del PIB";
 choices[88][3] = "La estrategia Europa 2020 no marca ning&uacute;n objetivo en materia de i+d";
 answers[88] = choices[88][1];
 units[88] = "30";
 comments[88] = "Id Pregunta: 11197. ";


//  Id pregunta: 11201 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[89]= new Array();
 choices[89][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[89][1] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[89][2] = "Confianza y Seguridad";
 choices[89][3] = "Servicios P&uacute;blicos Digitales de Calidad";
 answers[89] = choices[89][3];
 units[89] = "30";
 comments[89] = "Id Pregunta: 11201. ";


//  Id pregunta: 11204 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;ntos objetivos tiene la Agenda Digital Espa&ntilde;ola?";
 choices[90]= new Array();
 choices[90][0] = "6";
 choices[90][1] = "7";
 choices[90][2] = "8";
 choices[90][3] = "9";
 answers[90] = choices[90][0];
 units[90] = "30";
 comments[90] = "Id Pregunta: 11204. ";


//  Id pregunta: 11210 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes planes se refiere al objetivo de Econom&iacute;a Digital e Internacionalizaci&oacute;n de la Agenda Digital Espa&ntilde;ola?";
 choices[91]= new Array();
 choices[91][0] = "Plan TIC en PYMEs y Comercio Electr&oacute;nico";
 choices[91][1] = "Plan de Impulso de Econom&iacute;a Digital y Contenidos Digitales";
 choices[91][2] = "Plan de Internacionalizaci&oacute;n de Empresas Tecnol&oacute;gicas";
 choices[91][3] = "Todos los anteriores";
 answers[91] = choices[91][3];
 units[91] = "30";
 comments[91] = "Id Pregunta: 11210. ";


//  Id pregunta: 11328 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En cuanto a la normativa sobre reutilizaci&oacute;n de la informaci&oacute;n, indique cu&aacute;l de las siguientes opciones no es constitutiva de una infracci&oacute;n grave";
 choices[92]= new Array();
 choices[92][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida;";
 choices[92][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;;";
 choices[92][2] = "La alteraci&oacute;n grave del contenido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 choices[92][3] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 answers[92] = choices[92][3];
 units[92] = "44";
 comments[92] = "Id Pregunta: 11328. ";


//  Id pregunta: 11483 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  El Plan de Transformaci&oacute;n Digital de la Administraci&oacute;n General del Estado (AGE) y sus Organismos P&uacute;blicos, Estrategia TIC 2015-2020, fue aprobado por";
 choices[93]= new Array();
 choices[93][0] = "La Comisi&oacute;n de Estrategia TIC (CETIC) el 2 de Octubre de 2015.";
 choices[93][1] = "El Consejo de Ministros el 2 de Octubre de 2015.";
 choices[93][2] = "La Direcci&oacute;n TIC (DTIC) el 15 de septiembre de 2015.";
 choices[93][3] = "Por el Consejo Superior de Administraci&oacute;n Electr&oacute;nica (CSAE) el 15 de Septiembre de 2015.";
 answers[93] = choices[93][1];
 units[93] = "44";
 comments[93] = "Id Pregunta: 11483. NULL";


//  Id pregunta: 11501 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n el Esquema Nacional de Seguridad, la tarea de elaboraci&oacute;n de un Perfil General del Estado de la Seguridad en las Administraciones p&uacute;blicas es competencia de:";
 choices[94]= new Array();
 choices[94][0] = "Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[94][1] = "Centro Criptol&oacute;gico Nacional";
 choices[94][2] = "INCIBE";
 choices[94][3] = "Consejo de Ministros";
 answers[94] = choices[94][0];
 units[94] = "43";
 comments[94] = "Id Pregunta: 11501. RD 951/2015 que modifica el art&iacute;culo 35 del ENS.";


//  Id pregunta: 11596 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Con respecto a las Comisiones Ministeriales de Administraci&oacute;n Digital, se&ntilde;ale la respuesta correcta:";
 choices[95]= new Array();
 choices[95][0] = "Definen las prioridades de inversi&oacute;n en materias TIC de acuerdo con los objetivos establecidos por el Gobierno.";
 choices[95][1] = "Impulsan la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados y la compartici&oacute;n de infraestructuras t&eacute;cnicas y los servicios comunes que permitan la racionalizaci&oacute;n de los recursos TIC a todos los niveles del Estado.";
 choices[95][2] = "Act&uacute;an como Observatorio de la Administraci&oacute;n Electr&oacute;nica y Transformaci&oacute;n Digital.";
 choices[95][3] = "Impulsan la digitalizaci&oacute;n de los servicios y procedimientos del departamento con el fin de homogeneizarlos, simplificarlos, mejorar su calidad y facilidad de uso, as&iacute; como las prestaciones ofrecidas a los ciudadanos y empresas, optimizando la utilizaci&oacute;n de los recursos TIC disponibles.";
 answers[95] = choices[95][3];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11596. ";


//  Id pregunta: 11601 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Para un sistema calificado con nivel sustancial de aseguramiento de la calidad, cl@ve admite como mecanismo v&aacute;lido de registro e identificaci&oacute;n:";
 choices[96]= new Array();
 choices[96][0] = "Cl@ve PIN de varios usos";
 choices[96][1] = "Cl@ve Permanente sin SMS";
 choices[96][2] = "Cl@ve PIN de un solo uso";
 choices[96][3] = "b) y c) son correctos";
 answers[96] = choices[96][2];
 units[96] = "44";
 comments[96] = "Id Pregunta: 11601. ";


//  Id pregunta: 11744 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; dimensi&oacute;n de seguridad es obligatoria de evaluar para el responsable del servicio?&nbsp;  ";
 choices[97]= new Array();
 choices[97][0] = "autenticacion";
 choices[97][1] = "trazabilidad";
 choices[97][2] = "integridad";
 choices[97][3] = "disponibilidad";
 answers[97] = choices[97][3];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11744. ";


//  Id pregunta: 11748 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Cada Administraci&oacute;n P&uacute;blica determinar&aacute; las condiciones e instrumentos de creaci&oacute;n de las sedes electr&oacute;nicas con sujeci&oacute;n a los principios, &iquest;cu&aacute;l no es uno de ellos?:";
 choices[98]= new Array();
 choices[98][0] = "transparencia";
 choices[98][1] = "responsabilidad";
 choices[98][2] = "universalidad";
 choices[98][3] = "publicidad del procedimiento";
 answers[98] = choices[98][2];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11748. ";


//  Id pregunta: 11766 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Los servicios compartidos...Seleccione una:";
 choices[99]= new Array();
 choices[99][0] = "est&aacute;n declarado de contrataci&oacute;n centralizada";
 choices[99][1] = "tienen car&aacute;cter obligatorio&nbsp;";
 choices[99][2] = "est&aacute;n disponibles en el CTT (Centro de Transferencia de Tecnolog&iacute;a)";
 choices[99][3] = "son gestionados por la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones";
 answers[99] = choices[99][1];
 units[99] = "44";
 comments[99] = "Id Pregunta: 11766. ";


