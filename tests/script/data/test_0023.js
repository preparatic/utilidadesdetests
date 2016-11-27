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

//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[0]= new Array();
 choices[0][0] = "SPARQL";
 choices[0][1] = "UnQL";
 choices[0][2] = "XQUERY";
 choices[0][3] = "RQL";
 answers[0] = choices[0][0];
 units[0] = "74";
 comments[0] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[1]= new Array();
 choices[1][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[1][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[1][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[1][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[1] = choices[1][0];
 units[1] = "14";
 comments[1] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[2]= "3)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[2]= new Array();
 choices[2][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[2][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[2][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[2][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[2] = choices[2][2];
 units[2] = "57";
 comments[2] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[3]= new Array();
 choices[3][0] = "NoSQL";
 choices[3][1] = "Sistemas de baja latencia";
 choices[3][2] = "MapReduce";
 choices[3][3] = "Business Intelligence";
 answers[3] = choices[3][1];
 units[3] = "73";
 comments[3] = "Id Pregunta: 658. ";


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[4]= "5)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[4]= new Array();
 choices[4][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[4][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[4][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[4][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[4] = choices[4][1];
 units[4] = "14";
 comments[4] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[5]= "6)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[5]= new Array();
 choices[5][0] = "Alrededor de un 26% del PIB";
 choices[5][1] = "Alrededor de un 11% del PIB";
 choices[5][2] = "Alrededor de un 34% del PIB";
 choices[5][3] = "Alrededor de un 7% del PIB";
 answers[5] = choices[5][1];
 units[5] = "12";
 comments[5] = "Id Pregunta: 568. Modelo econ&oacute;mico";


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[6]= "7)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[6]= new Array();
 choices[6][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[6][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[6][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[6][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[6] = choices[6][2];
 units[6] = "47";
 comments[6] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[7]= "8)  Los criptosistemas pueden clasificarse en:";
 choices[7]= new Array();
 choices[7][0] = "Concretos, Estables e Inestables.";
 choices[7][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[7][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[7][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[7] = choices[7][3];
 units[7] = "76";
 comments[7] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[8]= "9)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[8]= new Array();
 choices[8][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[8][1] = "Uno de sus miembros.";
 choices[8][2] = "La Comisi&oacute;n.";
 choices[8][3] = "Todas las respuestas son correctas.";
 answers[8] = choices[8][3];
 units[8] = "5";
 comments[8] = "Id Pregunta: 350. UNION EUROPEA";


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[9]= "10)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[9]= new Array();
 choices[9][0] = "Cinco a&ntilde;os.";
 choices[9][1] = "Seis a&ntilde;os.";
 choices[9][2] = "Cuatro a&ntilde;os.";
 choices[9][3] = "Tres a&ntilde;os.";
 answers[9] = choices[9][0];
 units[9] = "5";
 comments[9] = "Id Pregunta: 304. UNION EUROPEA";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[10]= new Array();
 choices[10][0] = "El Presidente del Senado.";
 choices[10][1] = "El Defensor del Pueblo.";
 choices[10][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[10][3] = "El Presidente del Gobierno.";
 answers[10] = choices[10][2];
 units[10] = "1";
 comments[10] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[11]= new Array();
 choices[11][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[11][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[11][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[11][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[11] = choices[11][1];
 units[11] = "19";
 comments[11] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[12]= "13)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[12]= new Array();
 choices[12][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[12][1] = "Tratarse de un acto no susceptible de recurso";
 choices[12][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[12][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[12] = choices[12][2];
 units[12] = "8";
 comments[12] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[13]= "14)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[13]= new Array();
 choices[13][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[13][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[13][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[13][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[13] = choices[13][1];
 units[13] = "92";
 comments[13] = "Id Pregunta: 713. INTEGRACION CONTINUA";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[14]= "15)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[14]= new Array();
 choices[14][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[14][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[14][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[14][3] = "todas son correctas";
 answers[14] = choices[14][3];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[15]= new Array();
 choices[15][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[15][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[15][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[15][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[15] = choices[15][0];
 units[15] = "5";
 comments[15] = "Id Pregunta: 319. UNION EUROPEA";


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[16]= new Array();
 choices[16][0] = "El aumento de la esperanza de vida.";
 choices[16][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[16][2] = "La reducci&oacute;n del desempleo.";
 choices[16][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[16] = choices[16][0];
 units[16] = "14";
 comments[16] = "Id Pregunta: 673. Estructura social";


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[17]= new Array();
 choices[17][0] = "JUnit, Artifactory y SonarQube";
 choices[17][1] = "JUnit, Artifactory y Selenium";
 choices[17][2] = "JUnit, SonarQube y Selenium";
 choices[17][3] = "ArtiFactory, SonarQube y Selenium";
 answers[17] = choices[17][2];
 units[17] = "92";
 comments[17] = "Id Pregunta: 91. AGE A1 2015";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[18]= new Array();
 choices[18][0] = "Quince miembros.";
 choices[18][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[18][2] = "Los miembros que determine el Consejo.";
 choices[18][3] = "Un Presidente y quince miembros.";
 answers[18] = choices[18][1];
 units[18] = "5";
 comments[18] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[19]= "20)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[19]= new Array();
 choices[19][0] = "192.228.0.0";
 choices[19][1] = "192.228.8.0";
 choices[19][2] = "192.228.16.0";
 choices[19][3] = "192.228.17.0";
 answers[19] = choices[19][2];
 units[19] = "109";
 comments[19] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[20]= new Array();
 choices[20][0] = "No, en ning&uacute;n caso.";
 choices[20][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[20][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[20][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[20] = choices[20][3];
 units[20] = "1";
 comments[20] = "Id Pregunta: 188. CONSTITUCION1978";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[21]= new Array();
 choices[21][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[21][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[21][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[21][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[21] = choices[21][2];
 units[21] = "5";
 comments[21] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[22]= new Array();
 choices[22][0] = "El Presidente del Senado";
 choices[22][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[22][2] = "El Presidente del Gobierno";
 choices[22][3] = "El Presidente de las Cortes Generales";
 answers[22] = choices[22][2];
 units[22] = "1";
 comments[22] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[23]= "24)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[23]= new Array();
 choices[23][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[23][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[23][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[23][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[23] = choices[23][2];
 units[23] = "5";
 comments[23] = "Id Pregunta: 354. UNION EUROPEA";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[24]= "25)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[24]= new Array();
 choices[24][0] = "De los interesados en el procedimiento";
 choices[24][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[24][2] = "Disposiciones generales";
 choices[24][3] = "De los actos administrativos";
 answers[24] = choices[24][2];
 units[24] = "7";
 comments[24] = "Id Pregunta: 520. LEY 39/2015";


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[25]= "26)  El Tribunal de Justicia est&aacute; formado por:";
 choices[25]= new Array();
 choices[25][0] = "Un Juez de cada Estado miembro.";
 choices[25][1] = "Por dos Jueces de cada Estado miembro.";
 choices[25][2] = "Por veinte Jueces.";
 choices[25][3] = "Por ocho Jueces.";
 answers[25] = choices[25][0];
 units[25] = "5";
 comments[25] = "Id Pregunta: 322. UNION EUROPEA";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[26]= new Array();
 choices[26][0] = "Conferencia de Presidentes.";
 choices[26][1] = "Convenios de colaboraci&oacute;n.";
 choices[26][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[26][3] = "Conferencias Sectoriales.";
 answers[26] = choices[26][0];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[27]= "28)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[27]= new Array();
 choices[27][0] = "Director General";
 choices[27][1] = "Secretario general";
 choices[27][2] = "Subdirector general";
 choices[27][3] = "Subsecretario";
 answers[27] = choices[27][0];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[28]= "29)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[28]= new Array();
 choices[28][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[28][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[28][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[28][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[28] = choices[28][3];
 units[28] = "10";
 comments[28] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[29]= new Array();
 choices[29][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[29][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[29][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[29][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[29] = choices[29][3];
 units[29] = "26";
 comments[29] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[30]= "31)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[30]= new Array();
 choices[30][0] = "Por unanimidad.";
 choices[30][1] = "Por mayor&iacute;a cualificada.";
 choices[30][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[30][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[30] = choices[30][3];
 units[30] = "5";
 comments[30] = "Id Pregunta: 312. UNION EUROPEA";


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[31]= "32)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[31]= new Array();
 choices[31][0] = "El nombre y el tipo de correspondencia.";
 choices[31][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[31][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[31][3] = "El nombre y el grado.";
 answers[31] = choices[31][1];
 units[31] = "85";
 comments[31] = "Id Pregunta: 634. Junta de Extremadura A1 2015";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[32]= new Array();
 choices[32][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[32][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[32][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[32][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[32] = choices[32][0];
 units[32] = "19";
 comments[32] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[33]= "34)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[33]= new Array();
 choices[33][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[33][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[33][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[33][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[33] = choices[33][2];
 units[33] = "7";
 comments[33] = "Id Pregunta: 532. LEY 39/2015";


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[34]= new Array();
 choices[34][0] = "Dos Cap&iacute;tulos.";
 choices[34][1] = "Tres Cap&iacute;tulos.";
 choices[34][2] = "Un Cap&iacute;tulo.";
 choices[34][3] = "Cuatro Cap&iacute;tulos.";
 answers[34] = choices[34][1];
 units[34] = "1";
 comments[34] = "Id Pregunta: 246. CONSTITUCION1978";


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[35]= new Array();
 choices[35][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[35][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[35][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[35][3] = "La tasa de desempleo ronda el 20%";
 answers[35] = choices[35][2];
 units[35] = "12";
 comments[35] = "Id Pregunta: 570. Modelo econ&oacute;mico";


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[36]= "37)  JNDI se usa para el acceso a:";
 choices[36]= new Array();
 choices[36][0] = "Datos de ficheros";
 choices[36][1] = "Sistemas gestores de bases de datos";
 choices[36][2] = "Directorios de nombres";
 choices[36][3] = "Colas de mensajer&iacute;a";
 answers[36] = choices[36][2];
 units[36] = "64";
 comments[36] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[37]= new Array();
 choices[37][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[37][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[37][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[37][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[37] = choices[37][2];
 units[37] = "22";
 comments[37] = "Id Pregunta: 129. ";


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[38]= "39)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[38]= new Array();
 choices[38][0] = "los Subsecretarios y los Secretarios generales";
 choices[38][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[38][2] = "los Secretarios de Estado y los Directores generales";
 choices[38][3] = "los Ministros y los Secretarios de Estado";
 answers[38] = choices[38][3];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 776. Ley 40/2015";


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[39]= "40)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[39]= new Array();
 choices[39][0] = "El rey, a propuesta del Gobierno.";
 choices[39][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[39][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[39][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[39] = choices[39][1];
 units[39] = "1";
 comments[39] = "Id Pregunta: 210. CONSTITUCION1978";


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[40]= "41)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[40]= new Array();
 choices[40][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[40][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[40][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[40][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[40] = choices[40][3];
 units[40] = "1";
 comments[40] = "Id Pregunta: 227. CONSTITUCION1978";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[41]= "42)  Los Secretarios generales t&eacute;cnicos:";
 choices[41]= new Array();
 choices[41][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[41][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[41][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[41][3] = "todas son correctas";
 answers[41] = choices[41][3];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[42]= "43)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[42]= new Array();
 choices[42][0] = "Reducir el gasto p&uacute;blico.";
 choices[42][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[42][2] = "Reducir el endeudamiento neto.";
 choices[42][3] = "Al Fondo de Contingencia.";
 answers[42] = choices[42][2];
 units[42] = "10";
 comments[42] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[43]= new Array();
 choices[43][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[43][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[43][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[43][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[43] = choices[43][1];
 units[43] = "78";
 comments[43] = "Id Pregunta: 50. AGE A1 2015";


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[44]= "45)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[44]= new Array();
 choices[44][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[44][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[44][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[44][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[44] = choices[44][1];
 units[44] = "48";
 comments[44] = "Id Pregunta: 613. Junta de Extremadura A1 2015";


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[45]= "46)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[45]= new Array();
 choices[45][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[45][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[45][2] = "Las respuestas a) b) no son correctas.";
 choices[45][3] = "Las respuestas a) y b) son correctas.";
 answers[45] = choices[45][3];
 units[45] = "10";
 comments[45] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[46]= new Array();
 choices[46][0] = "Consumidores";
 choices[46][1] = "PYMES y Start-ups";
 choices[46][2] = "La Industria";
 choices[46][3] = "Todos los anteriores";
 answers[46] = choices[46][3];
 units[46] = "17";
 comments[46] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[47]= new Array();
 choices[47][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[47][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[47][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[47][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[47] = choices[47][2];
 units[47] = "15";
 comments[47] = "Id Pregunta: 118. ";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[48]= "49)  La recusaci&oacute;n pueden promoverla...";
 choices[48]= new Array();
 choices[48][0] = "Cualquier &oacute;rgano";
 choices[48][1] = "El interesado";
 choices[48][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[48][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[48] = choices[48][0];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[49]= "50)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[49]= new Array();
 choices[49][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[49][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[49][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[49][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[49] = choices[49][2];
 units[49] = "19";
 comments[49] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[50]= "51)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[50]= new Array();
 choices[50][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[50][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[50][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[50][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[50] = choices[50][2];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[51]= new Array();
 choices[51][0] = "Art&iacute;culo 16.2.";
 choices[51][1] = "Art&iacute;culo 17.1.";
 choices[51][2] = "Art&iacute;culo 18.1.";
 choices[51][3] = "Art&iacute;culo 18.2.";
 answers[51] = choices[51][2];
 units[51] = "1";
 comments[51] = "Id Pregunta: 224. CONSTITUCION1978";


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[52]= "53)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[52]= new Array();
 choices[52][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[52][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[52][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[52][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[52] = choices[52][0];
 units[52] = "35";
 comments[52] = "Id Pregunta: 75. AGE A1 2015";


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[53]= "54)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[53]= new Array();
 choices[53][0] = "Tres meses.";
 choices[53][1] = "Nueve meses.";
 choices[53][2] = "Cuatro meses.";
 choices[53][3] = "Seis meses.";
 answers[53] = choices[53][0];
 units[53] = "10";
 comments[53] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[54]= "55)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[54]= new Array();
 choices[54][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[54][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[54][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[54][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[54] = choices[54][0];
 units[54] = "77";
 comments[54] = "Id Pregunta: 683. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[55]= new Array();
 choices[55][0] = "CVS";
 choices[55][1] = "SVN";
 choices[55][2] = "Team Foundation Server";
 choices[55][3] = "Apache Tomcat";
 answers[55] = choices[55][3];
 units[55] = "92";
 comments[55] = "Id Pregunta: 700. INTEGRACION CONTINUA";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[56]= new Array();
 choices[56][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[56][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[56][2] = "Iniciativa europea de libre flujo de datos.";
 choices[56][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[56] = choices[56][2];
 units[56] = "5";
 comments[56] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[57]= "58)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[57][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[57][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[57][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[57] = choices[57][3];
 units[57] = "19";
 comments[57] = "Id Pregunta: 16. AGE A1 2015";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; es Java Web Start?";
 choices[58]= new Array();
 choices[58][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[58][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[58][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[58][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[58] = choices[58][3];
 units[58] = "64";
 comments[58] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[59]= new Array();
 choices[59][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[59][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[59][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[59][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[59] = choices[59][1];
 units[59] = "28";
 comments[59] = "Id Pregunta: 732. Estrategia TIC";


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[60]= new Array();
 choices[60][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[60][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[60][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[60][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[60] = choices[60][3];
 units[60] = "106";
 comments[60] = "Id Pregunta: 74. AGE A1 2015";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[61]= new Array();
 choices[61][0] = "Un programa presupuestario.";
 choices[61][1] = "Un concepto presupuestario.";
 choices[61][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[61][3] = "Un cr&eacute;dito presupuestario.";
 answers[61] = choices[61][0];
 units[61] = "10";
 comments[61] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[62]= new Array();
 choices[62][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[62][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[62][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[62][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[62] = choices[62][0];
 units[62] = "89";
 comments[62] = "Id Pregunta: 621. Junta de Extremadura A1 2015";


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[63]= "64)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[63]= new Array();
 choices[63][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[63][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[63][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[63][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[63] = choices[63][3];
 units[63] = "26";
 comments[63] = "Id Pregunta: 550. Gobernanza TIC";


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[64]= new Array();
 choices[64][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[64][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[64][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[64][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[64] = choices[64][1];
 units[64] = "15";
 comments[64] = "Id Pregunta: 112. ";


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[65]= new Array();
 choices[65][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[65][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[65][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[65][3] = "Todas lo son";
 answers[65] = choices[65][0];
 units[65] = "17";
 comments[65] = "Id Pregunta: 553. Mercado &Uacute;nico Digital";


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[66]= "67)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[66]= new Array();
 choices[66][0] = "De las disposiciones favorables.";
 choices[66][1] = "De las disposiciones sancionadoras no favorables.";
 choices[66][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[66][3] = "Las respuestas b) y c) son correctas.";
 answers[66] = choices[66][3];
 units[66] = "1";
 comments[66] = "Id Pregunta: 252. CONSTITUCION1978";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[67]= new Array();
 choices[67][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[67][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[67][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[67][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[67] = choices[67][0];
 units[67] = "22";
 comments[67] = "Id Pregunta: 124. ";


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[68]= "69)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[68]= new Array();
 choices[68][0] = "Un recurso de incumplimiento.";
 choices[68][1] = "Recurso de carencia.";
 choices[68][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[68][3] = "Ninguna es correcta.";
 answers[68] = choices[68][2];
 units[68] = "5";
 comments[68] = "Id Pregunta: 370. UNION EUROPEA";


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[69]= "70)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[69]= new Array();
 choices[69][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[69][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[69][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[69][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[69] = choices[69][3];
 units[69] = "12";
 comments[69] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[70]= "71)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[70]= new Array();
 choices[70][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[70][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[70][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[70][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[70] = choices[70][3];
 units[70] = "109";
 comments[70] = "Id Pregunta: 650. Junta de Extremadura A1 2015";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[71]= "72)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[71]= new Array();
 choices[71][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[71][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[71][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[71][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[71] = choices[71][3];
 units[71] = "7";
 comments[71] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[72]= new Array();
 choices[72][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[72][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[72][2] = "la falta de interoperabilidad.";
 choices[72][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[72] = choices[72][1];
 units[72] = "5";
 comments[72] = "Id Pregunta: 285. UNION EUROPEA";


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[73]= "74)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[73]= new Array();
 choices[73][0] = "Estrasburgo.";
 choices[73][1] = "Bruselas.";
 choices[73][2] = "Luxemburgo.";
 choices[73][3] = "Holanda.";
 answers[73] = choices[73][2];
 units[73] = "5";
 comments[73] = "Id Pregunta: 295. UNION EUROPEA";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[74]= "75)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[74]= new Array();
 choices[74][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[74][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[74][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[74][3] = "todas son correctas";
 answers[74] = choices[74][3];
 units[74] = "7";
 comments[74] = "Id Pregunta: 540. LEY 39/2015";


