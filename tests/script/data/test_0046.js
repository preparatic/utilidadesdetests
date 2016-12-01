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
var preguntaids = new Array();

//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[0]= "1)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[0]= new Array();
 choices[0][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[0][1] = "La CETIC";
 choices[0][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[0][3] = "El MHFP";
 answers[0] = choices[0][0];
 units[0] = "19";
 comments[0] = "Id Pregunta: 595. Estrategia TIC";
 preguntaids[0] = 595


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[1]= "2)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[1]= new Array();
 choices[1][0] = "Seis a&ntilde;os.";
 choices[1][1] = "Cinco a&ntilde;os.";
 choices[1][2] = "Cuatro a&ntilde;os.";
 choices[1][3] = "Ocho a&ntilde;os.";
 answers[1] = choices[1][1];
 units[1] = "5";
 comments[1] = "Id Pregunta: 307. UNION EUROPEA";
 preguntaids[1] = 307


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[2]= "3)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[2]= new Array();
 choices[2][0] = "6 TB.";
 choices[2][1] = "8 TB.";
 choices[2][2] = "7 TB.";
 choices[2][3] = "4 TB.";
 answers[2] = choices[2][3];
 units[2] = "53";
 comments[2] = "Id Pregunta: 853. Xunta de Galicia 2015";
 preguntaids[2] = 853


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[3]= "4)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[3]= new Array();
 choices[3][0] = "De las disposiciones favorables.";
 choices[3][1] = "De las disposiciones sancionadoras no favorables.";
 choices[3][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[3][3] = "Las respuestas b) y c) son correctas.";
 answers[3] = choices[3][3];
 units[3] = "1";
 comments[3] = "Id Pregunta: 252. CONSTITUCION1978";
 preguntaids[3] = 252


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[4]= "5)  Se&ntilde;ale la respuesta falsa";
 choices[4]= new Array();
 choices[4][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[4][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[4][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[4][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[4] = choices[4][3];
 units[4] = "22";
 comments[4] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";
 preguntaids[4] = 276


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[5]= "6)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[5]= new Array();
 choices[5][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[5][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[5][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[5][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[5] = choices[5][0];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 786. Ley 40/2015";
 preguntaids[5] = 786


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[6]= new Array();
 choices[6][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[6][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[6][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[6][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[6] = choices[6][1];
 units[6] = "43";
 comments[6] = "Id Pregunta: 441. SERVICIOS COMUNES";
 preguntaids[6] = 441


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[7]= "8)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[7]= new Array();
 choices[7][0] = "La Ley General Tributaria.";
 choices[7][1] = "La Ley Presupuestaria.";
 choices[7][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[7][3] = "Ninguna de las respuestas es correcta.";
 answers[7] = choices[7][0];
 units[7] = "10";
 comments[7] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";
 preguntaids[7] = 488


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[8]= "9)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[8]= new Array();
 choices[8][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[8][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[8][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[8][3] = "Todos los anteriores";
 answers[8] = choices[8][3];
 units[8] = "19";
 comments[8] = "Id Pregunta: 561. Agenda Digital";
 preguntaids[8] = 561


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[9]= new Array();
 choices[9][0] = "Publicidad.";
 choices[9][1] = "Constituci&oacute;n.";
 choices[9][2] = "Legalidad.";
 choices[9][3] = "Creaci&oacute;n.";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 215. CONSTITUCION1978";
 preguntaids[9] = 215


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[10]= new Array();
 choices[10][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[10][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[10][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[10][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[10] = choices[10][3];
 units[10] = "22";
 comments[10] = "Id Pregunta: 120. ";
 preguntaids[10] = 120


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[11]= new Array();
 choices[11][0] = "732";
 choices[11][1] = "626";
 choices[11][2] = "786";
 choices[11][3] = "360";
 answers[11] = choices[11][2];
 units[11] = "5";
 comments[11] = "Id Pregunta: 337. UNION EUROPEA";
 preguntaids[11] = 337


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[12]= "13)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[12]= new Array();
 choices[12][0] = "&oacute;rganos superiores";
 choices[12][1] = "&oacute;rganos directivos";
 choices[12][2] = "&oacute;rganos superiores y directivos";
 choices[12][3] = "ninguna es correcta";
 answers[12] = choices[12][1];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[12] = 796


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[13]= "14)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[13]= new Array();
 choices[13][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[13][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[13][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[13][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[13] = choices[13][1];
 units[13] = "56";
 comments[13] = "Id Pregunta: 610. Junta de Extremadura A1 2015";
 preguntaids[13] = 610


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[14]= "15)  La Administraci&oacute;n General del Estado se organiza:";
 choices[14]= new Array();
 choices[14][0] = "en Ministerios";
 choices[14][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[14][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[14][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[14] = choices[14][1];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 802. Ley 40/2015";
 preguntaids[14] = 802


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[15]= "16)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[15]= new Array();
 choices[15][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[15][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[15][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[15][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[15] = choices[15][3];
 units[15] = "10";
 comments[15] = "Id Pregunta: 510. PRESUPUESTOS GENERALES";
 preguntaids[15] = 510


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[16]= "17)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[16]= new Array();
 choices[16][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[16][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[16][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[16][3] = "todas son correctas";
 answers[16] = choices[16][3];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 771. Ley 40/2015";
 preguntaids[16] = 771


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[17]= new Array();
 choices[17][0] = "Tiene car&aacute;cter facultativo.";
 choices[17][1] = "Tiene car&aacute;cter potestativo. ";
 choices[17][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[17][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[17] = choices[17][1];
 units[17] = "22";
 comments[17] = "Id Pregunta: 127. ";
 preguntaids[17] = 127


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[18]= new Array();
 choices[18][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[18][1] = "La delimitaci&oacute;n de su territorio.";
 choices[18][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[18][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[18] = choices[18][2];
 units[18] = "1";
 comments[18] = "Id Pregunta: 228. CONSTITUCION1978";
 preguntaids[18] = 228


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[19]= new Array();
 choices[19][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[19][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[19][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[19][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[19] = choices[19][0];
 units[19] = "46";
 comments[19] = "Id Pregunta: 629. Junta de Extremadura A1 2015";
 preguntaids[19] = 629


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[20]= new Array();
 choices[20][0] = "11";
 choices[20][1] = "12";
 choices[20][2] = "14";
 choices[20][3] = "8";
 answers[20] = choices[20][1];
 units[20] = "1";
 comments[20] = "Id Pregunta: 194. CONSTITUCION1978";
 preguntaids[20] = 194


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[21]= new Array();
 choices[21][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[21][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[21][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][2];
 units[21] = "23";
 comments[21] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";
 preguntaids[21] = 744


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[22]= "23)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[22]= new Array();
 choices[22][0] = "la Administraci&oacute;n General del Estado";
 choices[22][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[22][2] = "las Entidades Locales";
 choices[22][3] = "todas son correctas";
 answers[22] = choices[22][3];
 units[22] = "7";
 comments[22] = "Id Pregunta: 537. LEY 39/2015";
 preguntaids[22] = 537


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[23]= new Array();
 choices[23][0] = "Principio de solo una vez";
 choices[23][1] = "Apertura y transparencia";
 choices[23][2] = "Confianza y seguridad";
 choices[23][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[23] = choices[23][3];
 units[23] = "19";
 comments[23] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";
 preguntaids[23] = 161


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[24]= "25)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[24]= new Array();
 choices[24][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[24][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[24][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[24][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[24] = choices[24][0];
 units[24] = "1";
 comments[24] = "Id Pregunta: 256. CONSTITUCION1978";
 preguntaids[24] = 256


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[25]= "26)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[25]= new Array();
 choices[25][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[25][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[25][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[25][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[25] = choices[25][3];
 units[25] = "10";
 comments[25] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";
 preguntaids[25] = 507


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[26]= new Array();
 choices[26][0] = "Consumidores";
 choices[26][1] = "PYMES y Start-ups";
 choices[26][2] = "La Industria";
 choices[26][3] = "Todos los anteriores";
 answers[26] = choices[26][3];
 units[26] = "17";
 comments[26] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";
 preguntaids[26] = 557


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[27]= new Array();
 choices[27][0] = "Tres meses.";
 choices[27][1] = "Nueve meses.";
 choices[27][2] = "Cuatro meses.";
 choices[27][3] = "Seis meses.";
 answers[27] = choices[27][0];
 units[27] = "10";
 comments[27] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";
 preguntaids[27] = 469


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[28]= "29)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[28]= new Array();
 choices[28][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[28][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[28][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[28][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[28] = choices[28][0];
 units[28] = "5";
 comments[28] = "Id Pregunta: 352. UNION EUROPEA";
 preguntaids[28] = 352


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[29]= "30)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[29]= new Array();
 choices[29][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[29][1] = "Autorizar indultos generales.";
 choices[29][2] = "Sancionar las leyes.";
 choices[29][3] = "Promulgar las leyes.";
 answers[29] = choices[29][1];
 units[29] = "1";
 comments[29] = "Id Pregunta: 185. CONSTITUCION1978";
 preguntaids[29] = 185


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[30]= "31)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[30]= new Array();
 choices[30][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[30][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[30][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[30][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[30] = choices[30][1];
 units[30] = "19";
 comments[30] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";
 preguntaids[30] = 169


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;C&uacute;al de los siguientes puntos NO es uno de los principios de las metodolog&iacute;as lean?";
 choices[31]= new Array();
 choices[31][0] = "Flexibilidad para variar el servicio o producto";
 choices[31][1] = "Eliminar desperdicios";
 choices[31][2] = "Decidir lo m&aacute;s tarde posible";
 choices[31][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[31] = choices[31][0];
 units[31] = "34";
 comments[31] = "Id Pregunta: 721. Metodologias Lean";
 preguntaids[31] = 721


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[32]= new Array();
 choices[32][0] = "Perceptible";
 choices[32][1] = "Operable";
 choices[32][2] = "Comprensible";
 choices[32][3] = "Robusto";
 answers[32] = choices[32][2];
 units[32] = "42";
 comments[32] = "Id Pregunta: 83. AGE A1 2015";
 preguntaids[32] = 83


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[33]= "34)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[33]= new Array();
 choices[33][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[33][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[33][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[33][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[33] = choices[33][2];
 units[33] = "108";
 comments[33] = "Id Pregunta: 602. Junta de Extremadura A1 2015";
 preguntaids[33] = 602


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[34]= "35)  El Colegio de Comisarios se re&uacute;ne:";
 choices[34]= new Array();
 choices[34][0] = "Una vez por semana.";
 choices[34][1] = "Una vez al mes.";
 choices[34][2] = "Dos veces en semana.";
 choices[34][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[34] = choices[34][0];
 units[34] = "5";
 comments[34] = "Id Pregunta: 315. UNION EUROPEA";
 preguntaids[34] = 315


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[35]= new Array();
 choices[35][0] = "Nueve.";
 choices[35][1] = "Diez.";
 choices[35][2] = "Siete.";
 choices[35][3] = "Ocho.";
 answers[35] = choices[35][3];
 units[35] = "5";
 comments[35] = "Id Pregunta: 373. UNION EUROPEA";
 preguntaids[35] = 373


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[36]= new Array();
 choices[36][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[36][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[36][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[36][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 220. CONSTITUCION1978";
 preguntaids[36] = 220


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[37]= new Array();
 choices[37][0] = "La Seguridad Social";
 choices[37][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[37][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[37][3] = "El Banco de Espa&ntilde;a";
 answers[37] = choices[37][3];
 units[37] = "15";
 comments[37] = "Id Pregunta: 113. ";
 preguntaids[37] = 113


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[38]= "39)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[38]= new Array();
 choices[38][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[38][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[38][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[38][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[38] = choices[38][1];
 units[38] = "58";
 comments[38] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[38] = 643


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Org&aacute;nica.";
 choices[39][1] = "Contable.";
 choices[39][2] = "Econ&oacute;mica.";
 choices[39][3] = "Por programas.";
 answers[39] = choices[39][2];
 units[39] = "10";
 comments[39] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";
 preguntaids[39] = 473


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[40]= "41)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[40]= new Array();
 choices[40][0] = "los Secretarios de Estado";
 choices[40][1] = "los Ministros";
 choices[40][2] = "los Subsecretarios";
 choices[40][3] = "los Secretarios generales";
 answers[40] = choices[40][2];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 810. Ley 40/2015";
 preguntaids[40] = 810


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[41]= "42)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[41]= new Array();
 choices[41][0] = "Subgrupo A1";
 choices[41][1] = "Subgrupo A2";
 choices[41][2] = "Subgrupo B";
 choices[41][3] = "Subgrupo C1";
 answers[41] = choices[41][0];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 806. Ley 40/2015";
 preguntaids[41] = 806


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[42]= "43)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[42]= new Array();
 choices[42][0] = "Por unanimidad.";
 choices[42][1] = "Por mayor&iacute;a cualificada.";
 choices[42][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[42][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[42] = choices[42][3];
 units[42] = "5";
 comments[42] = "Id Pregunta: 312. UNION EUROPEA";
 preguntaids[42] = 312


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[43]= "44)  El sector p&uacute;blico institucional se integra por:";
 choices[43]= new Array();
 choices[43][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[43][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[43][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[43][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[43] = choices[43][1];
 units[43] = "7";
 comments[43] = "Id Pregunta: 523. LEY 39/2015";
 preguntaids[43] = 523


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[44]= "45)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[44]= new Array();
 choices[44][0] = "Resoluci&oacute;n.";
 choices[44][1] = "Desistimiento o renuncia.";
 choices[44][2] = "Caducidad.";
 choices[44][3] = "Todas las anteriores.";
 answers[44] = choices[44][3];
 units[44] = "7";
 comments[44] = "Id Pregunta: 671. Art&iacute;culo 84 de la Ley 39/2015";
 preguntaids[44] = 671


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[45]= "46)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[45]= new Array();
 choices[45][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[45][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[45][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[45][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[45] = choices[45][2];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 821. Ley 40/2015";
 preguntaids[45] = 821


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[46]= "47)  En qu&eacute; consiste el principio BASE:";
 choices[46]= new Array();
 choices[46][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[46][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[46][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[46][3] = "Todas las anteriores son falsas";
 answers[46] = choices[46][3];
 units[46] = "73";
 comments[46] = "Id Pregunta: 103. ";
 preguntaids[46] = 103


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[47]= new Array();
 choices[47][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[47][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[47][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[47][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 180. CONSTITUCION1978";
 preguntaids[47] = 180


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[48]= "49)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[48]= new Array();
 choices[48][0] = "la capital del pa&iacute;s";
 choices[48][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[48][2] = "cada una de las provincias";
 choices[48][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[48] = choices[48][1];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 812. Ley 40/2015";
 preguntaids[48] = 812


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[49]= new Array();
 choices[49][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[49][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[49][2] = "Todas son correctas.";
 choices[49][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[49] = choices[49][2];
 units[49] = "5";
 comments[49] = "Id Pregunta: 330. UNION EUROPEA";
 preguntaids[49] = 330


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[50]= "51)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[50]= new Array();
 choices[50][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[50][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[50][2] = "el Subdirector General que el Delegado designe";
 choices[50][3] = "el Secretario de Estado";
 answers[50] = choices[50][0];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 822. Ley 40/2015";
 preguntaids[50] = 822


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[51]= new Array();
 choices[51][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[51][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[51][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[51][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[51] = choices[51][2];
 units[51] = "71";
 comments[51] = "Id Pregunta: 39. AGE A1 2015";
 preguntaids[51] = 39


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[52]= "53)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[52]= new Array();
 choices[52][0] = "Seguridad Social y AEAT";
 choices[52][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[52][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[52][3] = "Todos los anteriores";
 answers[52] = choices[52][3];
 units[52] = "19";
 comments[52] = "Id Pregunta: 596. Estrategia TIC";
 preguntaids[52] = 596


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[53]= "54)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[53]= new Array();
 choices[53][0] = "SMB3";
 choices[53][1] = "AFP";
 choices[53][2] = "NFS";
 choices[53][3] = "FTP";
 answers[53] = choices[53][0];
 units[53] = "59";
 comments[53] = "Id Pregunta: 30. AGE A1 2015";
 preguntaids[53] = 30


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[54]= "55)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[54]= new Array();
 choices[54][0] = "Conformidad";
 choices[54][1] = "Responsabilidad";
 choices[54][2] = "Adquisici&oacute;n";
 choices[54][3] = "Desempe&ntilde;o";
 answers[54] = choices[54][0];
 units[54] = "26";
 comments[54] = "Id Pregunta: 548. Gobernanza TIC";
 preguntaids[54] = 548


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[55]= "56)  Se&ntilde;ala la correcta:";
 choices[55]= new Array();
 choices[55][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[55][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[55][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[55][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[55] = choices[55][1];
 units[55] = "7";
 comments[55] = "Id Pregunta: 543. LEY 39/2015";
 preguntaids[55] = 543


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[56]= "57)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[56]= new Array();
 choices[56][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[56][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[56][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[56][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[56] = choices[56][1];
 units[56] = "43";
 comments[56] = "Id Pregunta: 439. SERVICIOS COMUNES";
 preguntaids[56] = 439


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[57]= "58)  El recurso de alzada puede interponerse:";
 choices[57]= new Array();
 choices[57][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[57][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[57][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[57][3] = "Ante el Defensor del Pueblo";
 answers[57] = choices[57][1];
 units[57] = "8";
 comments[57] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";
 preguntaids[57] = 141


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[58]= "59)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[58]= new Array();
 choices[58][0] = "l Consejo General del Poder Judicial";
 choices[58][1] = "El pleno de Tribunal Constitucional";
 choices[58][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[58][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[58] = choices[58][3];
 units[58] = "1";
 comments[58] = "Id Pregunta: 181. CONSTITUCION1978";
 preguntaids[58] = 181


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[59]= "60)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[59]= new Array();
 choices[59][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[59][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[59][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[59][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[59] = choices[59][1];
 units[59] = "5";
 comments[59] = "Id Pregunta: 316. UNION EUROPEA";
 preguntaids[59] = 316


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[60]= new Array();
 choices[60][0] = "El 2 de Octubre de 2015";
 choices[60][1] = "El 15 de Septiembre de 2015";
 choices[60][2] = "El 1 de Octubre de 2015";
 choices[60][3] = "El 5 de Octubre de 2015";
 answers[60] = choices[60][0];
 units[60] = "19";
 comments[60] = "Id Pregunta: 579. Estrategia TIC";
 preguntaids[60] = 579


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[61]= new Array();
 choices[61][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[61][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[61][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[61][3] = "La tasa de desempleo ronda el 20%";
 answers[61] = choices[61][2];
 units[61] = "12";
 comments[61] = "Id Pregunta: 572. Modelo econ&oacute;mico";
 preguntaids[61] = 572


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[62]= "63)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[62]= new Array();
 choices[62][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[62][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[62][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[62][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[62] = choices[62][2];
 units[62] = "22";
 comments[62] = "Id Pregunta: 97. AGE A1 2015";
 preguntaids[62] = 97


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[63]= new Array();
 choices[63][0] = "Crecimiento sostenible";
 choices[63][1] = "Crecimiento inteligente";
 choices[63][2] = "Crecimiento digital";
 choices[63][3] = "Crecimiento integrador";
 answers[63] = choices[63][2];
 units[63] = "19";
 comments[63] = "Id Pregunta: 759. Europa 2020";
 preguntaids[63] = 759


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[64]= "65)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[64]= new Array();
 choices[64][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[64][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[64][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[64][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[64] = choices[64][2];
 units[64] = "26";
 comments[64] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[64] = 99


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[65]= new Array();
 choices[65][0] = "Estimaci&oacute;n del riesgo";
 choices[65][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[65][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[65][3] = "Mapa de riesgos";
 answers[65] = choices[65][3];
 units[65] = "45";
 comments[65] = "Id Pregunta: 85. AGE A1 2015";
 preguntaids[65] = 85


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[66]= "67)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Principio de transparencia.";
 choices[66][1] = "Principio de cooperaci&oacute;n.";
 choices[66][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[66][3] = "Principio de lealtad institucional.";
 answers[66] = choices[66][1];
 units[66] = "10";
 comments[66] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";
 preguntaids[66] = 504


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[67]= "68)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[67]= new Array();
 choices[67][0] = "Al Gobierno.";
 choices[67][1] = "A las Cortes Generales.";
 choices[67][2] = "Al Poder Judicial.";
 choices[67][3] = "Al Congreso de los Diputados.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 195. CONSTITUCION1978";
 preguntaids[67] = 195


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[68]= "69)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[68][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[68][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[68][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[68] = choices[68][2];
 units[68] = "1";
 comments[68] = "Id Pregunta: 172. CONSTITUCION1978";
 preguntaids[68] = 172


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[69]= "70)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[69]= new Array();
 choices[69][0] = "Subsecretario";
 choices[69][1] = "Subdirector general";
 choices[69][2] = "Secretario de Estado";
 choices[69][3] = "ninguna es correcta";
 answers[69] = choices[69][0];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 791. Ley 40/2015";
 preguntaids[69] = 791


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[70]= new Array();
 choices[70][0] = "Avro";
 choices[70][1] = "Sqoop";
 choices[70][2] = "UIMA";
 choices[70][3] = "Jaql";
 answers[70] = choices[70][1];
 units[70] = "73";
 comments[70] = "Id Pregunta: 662. ";
 preguntaids[70] = 662


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[71]= "72)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[71]= new Array();
 choices[71][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[71][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[71][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[71][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[71] = choices[71][2];
 units[71] = "7";
 comments[71] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";
 preguntaids[71] = 155


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[72]= new Array();
 choices[72][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[72][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[72][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[72][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[72] = choices[72][3];
 units[72] = "66";
 comments[72] = "Id Pregunta: 37. AGE A1 2015";
 preguntaids[72] = 37


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[73]= "74)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[73]= new Array();
 choices[73][0] = "61";
 choices[73][1] = "53";
 choices[73][2] = "65";
 choices[73][3] = "67";
 answers[73] = choices[73][1];
 units[73] = "1";
 comments[73] = "Id Pregunta: 248. CONSTITUCION1978";
 preguntaids[73] = 248


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[74]= "75)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[74]= new Array();
 choices[74][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[74][1] = "1 de enero de 2015";
 choices[74][2] = "1 de enero de 2016";
 choices[74][3] = "1 de julio de 2016";
 answers[74] = choices[74][3];
 units[74] = "77";
 comments[74] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[74] = 691


