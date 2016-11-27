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

//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[0]= "1)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "De la C&aacute;mara respectiva.";
 choices[0][1] = "Del Rey.";
 choices[0][2] = "Del Tribunal Constitucional.";
 choices[0][3] = "Del Tribunal Supremo.";
 answers[0] = choices[0][0];
 units[0] = "1";
 comments[0] = "Id Pregunta: 223. CONSTITUCION1978";


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[1]= "2)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[1]= new Array();
 choices[1][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[1][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[1][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[1][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[1] = choices[1][0];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 770. Ley 40/2015";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[2]= "3)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[2]= new Array();
 choices[2][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[2][1] = "garantizar la conservaci&oacute;n del documento";
 choices[2][2] = "garantizar la autenticidad del documento";
 choices[2][3] = "garantizar la integridad del documento";
 answers[2] = choices[2][0];
 units[2] = "7";
 comments[2] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[3]= "4)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[3]= new Array();
 choices[3][0] = "Cabr&aacute; recurso de alzada";
 choices[3][1] = "Cabr&aacute; el nuevo protesto";
 choices[3][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[3][3] = "No cabr&aacute; recurso alguno";
 answers[3] = choices[3][3];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[4]= "5)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[4]= new Array();
 choices[4][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[4][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[4][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[4][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[4] = choices[4][1];
 units[4] = "7";
 comments[4] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[5]= "6)  Los criptosistemas pueden clasificarse en:";
 choices[5]= new Array();
 choices[5][0] = "Concretos, Estables e Inestables.";
 choices[5][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[5][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[5][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[5] = choices[5][3];
 units[5] = "76";
 comments[5] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[6]= "7)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[6]= new Array();
 choices[6][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[6][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[6][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[6][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[6] = choices[6][1];
 units[6] = "7";
 comments[6] = "Id Pregunta: 537. LEY 39/2015";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[7]= "8)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[7]= new Array();
 choices[7][0] = "Los Derechos y Deberes fundamentales.";
 choices[7][1] = "La Corona.";
 choices[7][2] = "El Poder Judicial.";
 choices[7][3] = "Las Cortes Generales.";
 answers[7] = choices[7][2];
 units[7] = "1";
 comments[7] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[8]= new Array();
 choices[8][0] = "Al Consejo Europeo.";
 choices[8][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[8][2] = "A la Comisi&oacute;n Europea.";
 choices[8][3] = "Al Parlamento Europeo.";
 answers[8] = choices[8][2];
 units[8] = "5";
 comments[8] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[9]= "10)  Son servicios declarados compartidos:";
 choices[9]= new Array();
 choices[9][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[9][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[9][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[9][3] = "Todos los anteriores";
 answers[9] = choices[9][3];
 units[9] = "19";
 comments[9] = "Id Pregunta: 589. Estrategia TIC";


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[10]= "11)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[10]= new Array();
 choices[10][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[10][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[10][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[10][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[10] = choices[10][1];
 units[10] = "7";
 comments[10] = "Id Pregunta: 662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[11]= "12)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[11]= new Array();
 choices[11][0] = "Tres a&ntilde;os.";
 choices[11][1] = "Dos a&ntilde;os y medio.";
 choices[11][2] = "Cinco a&ntilde;os.";
 choices[11][3] = "Seis a&ntilde;os.";
 answers[11] = choices[11][2];
 units[11] = "5";
 comments[11] = "Id Pregunta: 289. UNION EUROPEA";


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[12]= new Array();
 choices[12][0] = "DoS";
 choices[12][1] = "Phishing";
 choices[12][2] = "Sniffing";
 choices[12][3] = "Spoofing";
 answers[12] = choices[12][3];
 units[12] = "119";
 comments[12] = "Id Pregunta: 54. AGE A1 2015";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[13]= new Array();
 choices[13][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[13][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[13][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[13][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[13] = choices[13][0];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[14]= "15)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[14]= new Array();
 choices[14][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[14][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[14][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[14][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[14] = choices[14][1];
 units[14] = "14";
 comments[14] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[15]= "16)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[15]= new Array();
 choices[15][0] = "Interchange of Data between Administrations (IDA)";
 choices[15][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[15][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[15][3] = "Interoperability Electronic European Solution (IEES)";
 answers[15] = choices[15][1];
 units[15] = "43";
 comments[15] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[16]= "17)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[16][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[16][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[16][3] = "Todas las anteriores son ciertas";
 answers[16] = choices[16][3];
 units[16] = "8";
 comments[16] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la respuesta falsa:";
 choices[17]= new Array();
 choices[17][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[17][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[17][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[17][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[17] = choices[17][2];
 units[17] = "5";
 comments[17] = "Id Pregunta: 284. UNION EUROPEA";


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[18]= "19)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[18]= new Array();
 choices[18][0] = "Un Reglamento.";
 choices[18][1] = "Un Decreto.";
 choices[18][2] = "Una Ley.";
 choices[18][3] = "Un Real-Decreto.";
 answers[18] = choices[18][2];
 units[18] = "5";
 comments[18] = "Id Pregunta: 368. UNION EUROPEA";


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[19]= new Array();
 choices[19][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[19][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[19][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[19][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[19] = choices[19][2];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 812. Ley 40/2015";


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[20]= "21)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[20]= new Array();
 choices[20][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[20][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[20][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[20][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[20] = choices[20][1];
 units[20] = "19";
 comments[20] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[21]= "22)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[21]= new Array();
 choices[21][0] = "Fat y Ntfs.";
 choices[21][1] = "Extfat y Fat.";
 choices[21][2] = "Fat y Nfst.";
 choices[21][3] = "ext2fs y Ntfs.";
 answers[21] = choices[21][0];
 units[21] = "58";
 comments[21] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[22]= "23)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[22]= new Array();
 choices[22][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[22][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[22][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[22][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[22] = choices[22][1];
 units[22] = "28";
 comments[22] = "Id Pregunta: 732. Estrategia TIC";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[23]= "24)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[23]= new Array();
 choices[23][0] = "Subsecretario";
 choices[23][1] = "Subdirector general";
 choices[23][2] = "Secretario de Estado";
 choices[23][3] = "ninguna es correcta";
 answers[23] = choices[23][0];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[24]= "25)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[24]= new Array();
 choices[24][0] = "Un a&ntilde;o prorrogable";
 choices[24][1] = "Dos a&ntilde;os no prorrogables";
 choices[24][2] = "Un a&ntilde;o no prorrogable";
 choices[24][3] = "Dos a&ntilde;os prorrogables";
 answers[24] = choices[24][2];
 units[24] = "37";
 comments[24] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[25][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[25][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[25][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[25] = choices[25][0];
 units[25] = "45";
 comments[25] = "Id Pregunta: 607. Junta de Extremadura A1 2015";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[26]= new Array();
 choices[26][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[26][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[26][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[26][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[26] = choices[26][0];
 units[26] = "77";
 comments[26] = "Id Pregunta: 683. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[27]= "28)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[27]= new Array();
 choices[27][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[27][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[27][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[27][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[27] = choices[27][3];
 units[27] = "5";
 comments[27] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[28]= "29)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[28][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[28][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[28][3] = "cualquiera que sea el estado del procedimiento";
 answers[28] = choices[28][3];
 units[28] = "7";
 comments[28] = "Id Pregunta: 525. LEY 39/2015";


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[29]= "30)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[29]= new Array();
 choices[29][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[29][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[29][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[29][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[29] = choices[29][2];
 units[29] = "43";
 comments[29] = "Id Pregunta: 440. SERVICIOS COMUNES";


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[30]= "31)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[30]= new Array();
 choices[30][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[30][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[30][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[30][3] = "Todas las respuestas son correctas.";
 answers[30] = choices[30][3];
 units[30] = "5";
 comments[30] = "Id Pregunta: 375. UNION EUROPEA";


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[31]= "32)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[31]= new Array();
 choices[31][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[31][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[31][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[31][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[31] = choices[31][2];
 units[31] = "108";
 comments[31] = "Id Pregunta: 600. Junta de Extremadura A1 2015";


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[32]= "33)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[32]= new Array();
 choices[32][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[32][1] = "La CETIC";
 choices[32][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[32][3] = "El MHFP";
 answers[32] = choices[32][0];
 units[32] = "19";
 comments[32] = "Id Pregunta: 593. Estrategia TIC";


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[33]= new Array();
 choices[33][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[33][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[33][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[33][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[33] = choices[33][2];
 units[33] = "85";
 comments[33] = "Id Pregunta: 618. Junta de Extremadura A1 2015";


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[34]= "35)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[34][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[34][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[34][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 172. CONSTITUCION1978";


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[35]= "36)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[35]= new Array();
 choices[35][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[35][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[35][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[35][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[35] = choices[35][2];
 units[35] = "22";
 comments[35] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[36]= "37)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[36]= new Array();
 choices[36][0] = "El Presidente y su gabinete.";
 choices[36][1] = "El Presidente y sus Ministros.";
 choices[36][2] = "El Rey y el Presidente.";
 choices[36][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[36] = choices[36][2];
 units[36] = "1";
 comments[36] = "Id Pregunta: 257. CONSTITUCION1978";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[37]= "38)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[37]= new Array();
 choices[37][0] = "Intersecci&oacute;n.";
 choices[37][1] = "Uni&oacute;n.";
 choices[37][2] = "Restricci&oacute;n.";
 choices[37][3] = "Diferencia.";
 answers[37] = choices[37][0];
 units[37] = "60";
 comments[37] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[38]= new Array();
 choices[38][0] = "Art. 13, L.O.3/2007.";
 choices[38][1] = "Art. 14, L.O.3/2007.";
 choices[38][2] = "Art. 11, L.O.3/2007.";
 choices[38][3] = "Ninguna es correcta.";
 answers[38] = choices[38][2];
 units[38] = "14";
 comments[38] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[39]= "40)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[39]= new Array();
 choices[39][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[39][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[39][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[39][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[39] = choices[39][2];
 units[39] = "57";
 comments[39] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[40]= "41)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[40]= new Array();
 choices[40][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[40][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[40][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[40][3] = "todas son correctas";
 answers[40] = choices[40][3];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[41]= "42)  La Poblaci&oacute;n Activa incluye a:";
 choices[41]= new Array();
 choices[41][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[41][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[41][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[41][3] = "Todo aquel que desea trabajar";
 answers[41] = choices[41][2];
 units[41] = "15";
 comments[41] = "Id Pregunta: 110. ";


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[42]= new Array();
 choices[42][0] = "11";
 choices[42][1] = "12";
 choices[42][2] = "14";
 choices[42][3] = "8";
 answers[42] = choices[42][1];
 units[42] = "1";
 comments[42] = "Id Pregunta: 194. CONSTITUCION1978";


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[43]= "44)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[43]= new Array();
 choices[43][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[43][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[43][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[43][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[43] = choices[43][2];
 units[43] = "89";
 comments[43] = "Id Pregunta: 625. Junta de Extremadura A1 2015";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[44]= new Array();
 choices[44][0] = "PostgreSQL";
 choices[44][1] = "Datawarehouse";
 choices[44][2] = "Snowflake";
 choices[44][3] = "CouchDB";
 answers[44] = choices[44][0];
 units[44] = "61";
 comments[44] = "Id Pregunta: 576. Tema 61. TAI 2016.";


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[45]= "46)  Se&ntilde;ale la respuesta falsa:";
 choices[45]= new Array();
 choices[45][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[45][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[45][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[45][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[45] = choices[45][3];
 units[45] = "5";
 comments[45] = "Id Pregunta: 281. UNION EUROPEA";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[46]= "47)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[46]= new Array();
 choices[46][0] = "Rey.";
 choices[46][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[46][2] = "Constituci&oacute;n.";
 choices[46][3] = "Pueblo.";
 answers[46] = choices[46][2];
 units[46] = "1";
 comments[46] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[47]= new Array();
 choices[47][0] = "Por reembolso de pr&eacute;stamos.";
 choices[47][1] = "Por la venta de bienes.";
 choices[47][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[47][3] = "Por prestaci&oacute;n de servicios.";
 answers[47] = choices[47][2];
 units[47] = "10";
 comments[47] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[48]= "49)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[48]= new Array();
 choices[48][0] = "623";
 choices[48][1] = "649";
 choices[48][2] = "626";
 choices[48][3] = "565";
 answers[48] = choices[48][2];
 units[48] = "5";
 comments[48] = "Id Pregunta: 341. UNION EUROPEA";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[49]= "50)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[49]= new Array();
 choices[49][0] = "Son actos normativos.";
 choices[49][1] = "Poseen alcance general.";
 choices[49][2] = "No son obligatorias.";
 choices[49][3] = "Son actos individuales no normativos.";
 answers[49] = choices[49][3];
 units[49] = "5";
 comments[49] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[50]= new Array();
 choices[50][0] = "El BCE";
 choices[50][1] = "El Parlamento";
 choices[50][2] = "El Consejo";
 choices[50][3] = "La Comisi&oacute;n";
 answers[50] = choices[50][3];
 units[50] = "17";
 comments[50] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[51]= "52)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[51]= new Array();
 choices[51][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[51][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[51][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[51][3] = "Todas son correctas.";
 answers[51] = choices[51][3];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[52]= "53)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[52]= new Array();
 choices[52][0] = "El Presidente del Consejo Europeo.";
 choices[52][1] = "La Comisi&oacute;n.";
 choices[52][2] = "El Consejo.";
 choices[52][3] = "El Parlamento Europeo.";
 answers[52] = choices[52][2];
 units[52] = "5";
 comments[52] = "Id Pregunta: 328. UNION EUROPEA";


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[53]= "54)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[53]= new Array();
 choices[53][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[53][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[53][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[53][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[54]= "55)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[54]= new Array();
 choices[54][0] = "0";
 choices[54][1] = "1";
 choices[54][2] = "Tantos como peticiones concurrentes tenga.";
 choices[54][3] = "Tantos como le permita la memoria de la JVM.";
 answers[54] = choices[54][1];
 units[54] = "64";
 comments[54] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[55]= "56)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[55]= new Array();
 choices[55][0] = "Bases de datos orientadas a filas";
 choices[55][1] = "Bases de datos orientadas a documentos";
 choices[55][2] = "Bases de datos de clave/valor";
 choices[55][3] = "Bases de datos orientadas a objetos";
 answers[55] = choices[55][0];
 units[55] = "73";
 comments[55] = "Id Pregunta: 100. ";


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[56]= "57)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[56]= new Array();
 choices[56][0] = "La mujeres.";
 choices[56][1] = "Lo hombres.";
 choices[56][2] = "Todas las personas.";
 choices[56][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[56] = choices[56][2];
 units[56] = "14";
 comments[56] = "Id Pregunta: 413. POLITICAS DE IGUALDAD";


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[57]= "58)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[57]= new Array();
 choices[57][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[57][1] = "Protecci&oacute;n de su salud.";
 choices[57][2] = "Ninguna es correcta.";
 choices[57][3] = "A y B son correctas.";
 answers[57] = choices[57][1];
 units[57] = "14";
 comments[57] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ala la correcta:";
 choices[58]= new Array();
 choices[58][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[58][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[58][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[58][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[58] = choices[58][1];
 units[58] = "7";
 comments[58] = "Id Pregunta: 541. LEY 39/2015";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[59]= "60)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[59]= new Array();
 choices[59][0] = "un art&iacute;culo";
 choices[59][1] = "dos art&iacute;culos";
 choices[59][2] = "tres art&iacute;culos";
 choices[59][3] = "cuatro art&iacute;culos";
 answers[59] = choices[59][1];
 units[59] = "7";
 comments[59] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[60]= "61)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[60]= new Array();
 choices[60][0] = "Proveer de manera compartida servicios comunes";
 choices[60][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[60][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[60][3] = "Transparencia";
 answers[60] = choices[60][1];
 units[60] = "28";
 comments[60] = "Id Pregunta: 740. Estrategia TIC";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[61]= "62)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[61]= new Array();
 choices[61][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[61][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[61][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[61][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[61] = choices[61][3];
 units[61] = "86";
 comments[61] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[62]= new Array();
 choices[62][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[62][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[62][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[62][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[62] = choices[62][3];
 units[62] = "57";
 comments[62] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[63]= new Array();
 choices[63][0] = "Art. 25 LO, 3/2007.";
 choices[63][1] = "Art. 23 LO, 3/2007.";
 choices[63][2] = "Art. 14 LO, 3/2007.";
 choices[63][3] = "Ninguna es correcta, es el art. 13.";
 answers[63] = choices[63][0];
 units[63] = "14";
 comments[63] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[64]= "65)  WS-Security contiene especificaciones sobre:";
 choices[64]= new Array();
 choices[64][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[64][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[64][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[64][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[64] = choices[64][1];
 units[64] = "119";
 comments[64] = "Id Pregunta: 55. AGE A1 2015";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[65]= "66)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[65]= new Array();
 choices[65][0] = "192.228.0.0";
 choices[65][1] = "192.228.8.0";
 choices[65][2] = "192.228.16.0";
 choices[65][3] = "192.228.17.0";
 answers[65] = choices[65][2];
 units[65] = "109";
 comments[65] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[66]= "67)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[66]= new Array();
 choices[66][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[66][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[66][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[66][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[66] = choices[66][2];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 752. Ley 40/2015";


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[67]= "68)  Un wireframe es:";
 choices[67]= new Array();
 choices[67][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[67][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[67][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[67][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[67] = choices[67][3];
 units[67] = "62";
 comments[67] = "Id Pregunta: 4. AGE A1 2015";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[68]= "69)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[68]= new Array();
 choices[68][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[68][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[68][2] = "La normativa reguladora de cada derecho.";
 choices[68][3] = "Ley 50/1997, del Gobierno.";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[69]= "70)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[69]= new Array();
 choices[69][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[69][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[69][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[69][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[69] = choices[69][1];
 units[69] = "5";
 comments[69] = "Id Pregunta: 292. UNION EUROPEA";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[70]= new Array();
 choices[70][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[70][1] = "Solamente el Congreso.";
 choices[70][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[70][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[71]= new Array();
 choices[71][0] = "Avro";
 choices[71][1] = "Sqoop";
 choices[71][2] = "UIMA";
 choices[71][3] = "Jaql";
 answers[71] = choices[71][1];
 units[71] = "73";
 comments[71] = "Id Pregunta: 660. ";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[72]= new Array();
 choices[72][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[72][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[72][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[72][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[72] = choices[72][0];
 units[72] = "5";
 comments[72] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[73]= new Array();
 choices[73][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[73][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[73][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[73][3] = "Todas lo son";
 answers[73] = choices[73][0];
 units[73] = "17";
 comments[73] = "Id Pregunta: 553. Mercado &Uacute;nico Digital";


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[74]= "75)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[74]= new Array();
 choices[74][0] = "Parcial.";
 choices[74][1] = "Sectorial.";
 choices[74][2] = "Tranversal.";
 choices[74][3] = "Vertical.";
 answers[74] = choices[74][2];
 units[74] = "14";
 comments[74] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";


