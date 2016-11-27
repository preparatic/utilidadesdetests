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

//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[0]= "1)  El sector Servicios NO incluye:";
 choices[0]= new Array();
 choices[0][0] = "El Comercio";
 choices[0][1] = "Los Transportes";
 choices[0][2] = "La Energ&iacute;a";
 choices[0][3] = "Las Comunicaciones";
 answers[0] = choices[0][2];
 units[0] = "12";
 comments[0] = "Id Pregunta: 569. Modelo econ&oacute;mico";


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[1]= new Array();
 choices[1][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[1][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[1][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[1][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[1] = choices[1][1];
 units[1] = "19";
 comments[1] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[2]= "3)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[2]= new Array();
 choices[2][0] = "Un a&ntilde;o prorrogable";
 choices[2][1] = "Dos a&ntilde;os no prorrogables";
 choices[2][2] = "Un a&ntilde;o no prorrogable";
 choices[2][3] = "Dos a&ntilde;os prorrogables";
 answers[2] = choices[2][2];
 units[2] = "37";
 comments[2] = "Id Pregunta: 86. AGE A1 2015";


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


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[4]= "5)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[4]= new Array();
 choices[4][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[4][1] = "los Subdelegados del Gobierno en las provincias";
 choices[4][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[4][3] = "a y b son correctas";
 answers[4] = choices[4][3];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[5]= "6)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[5]= new Array();
 choices[5][0] = "0";
 choices[5][1] = "1";
 choices[5][2] = "Tantos como peticiones concurrentes tenga.";
 choices[5][3] = "Tantos como le permita la memoria de la JVM.";
 answers[5] = choices[5][1];
 units[5] = "64";
 comments[5] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[6]= "7)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[6]= new Array();
 choices[6][0] = "Los ocupados y los parados activos";
 choices[6][1] = "S&oacute;lo los ocupados";
 choices[6][2] = "Los ocupados y los inactivos";
 choices[6][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[6] = choices[6][0];
 units[6] = "12";
 comments[6] = "Id Pregunta: 564. Modelo econ&oacute;mico";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[7]= new Array();
 choices[7][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[7][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[7][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[7][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[7] = choices[7][2];
 units[7] = "10";
 comments[7] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[8]= "9)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[8]= new Array();
 choices[8][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[8][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[8][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[8][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[8] = choices[8][2];
 units[8] = "53";
 comments[8] = "Id Pregunta: 65. AGE A1 2015";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[9]= "10)  Componen la Comisi&oacute;n Europea:";
 choices[9]= new Array();
 choices[9][0] = "Un Comisario por cada Estado miembro.";
 choices[9][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[9][2] = "Dos Comisarios por cada Estado miembro.";
 choices[9][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[9] = choices[9][0];
 units[9] = "5";
 comments[9] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[10]= "11)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[10]= new Array();
 choices[10][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[10][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[10][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[10][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[10] = choices[10][2];
 units[10] = "76";
 comments[10] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[11]= "12)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[11]= new Array();
 choices[11][0] = "El derecho a la propiedad privada.";
 choices[11][1] = "El derecho de asociaci&oacute;n.";
 choices[11][2] = "El derecho de fundaci&oacute;n.";
 choices[11][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[11] = choices[11][1];
 units[11] = "1";
 comments[11] = "Id Pregunta: 174. CONSTITUCION1978";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[12]= new Array();
 choices[12][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[12][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[12][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[12][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[12] = choices[12][3];
 units[12] = "120";
 comments[12] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[13]= "14)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[13]= new Array();
 choices[13][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[13][1] = "Directiva 2004/113/CE del Consejo.";
 choices[13][2] = "Todas son correctas.";
 choices[13][3] = "Todas son falsas.";
 answers[13] = choices[13][2];
 units[13] = "14";
 comments[13] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[14]= new Array();
 choices[14][0] = "Agenda digital para Europa";
 choices[14][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[14][2] = "Juventud en movimiento";
 choices[14][3] = "Agenda Web 2.0";
 answers[14] = choices[14][3];
 units[14] = "19";
 comments[14] = "Id Pregunta: 758. Europa 2020";


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[15]= "16)  La recusaci&oacute;n se plantea...";
 choices[15]= new Array();
 choices[15][0] = "Antes de iniciado el procedimiento";
 choices[15][1] = "Una vez iniciado el procedimiento";
 choices[15][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[15][3] = "En cualquier momento del procedimiento";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 827. Ley 40/2015";


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[16]= new Array();
 choices[16][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[16][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[16][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[16][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[16] = choices[16][3];
 units[16] = "5";
 comments[16] = "Id Pregunta: 332. UNION EUROPEA";


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[17]= "18)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[17]= new Array();
 choices[17][0] = "90";
 choices[17][1] = "50";
 choices[17][2] = "64";
 choices[17][3] = "60";
 answers[17] = choices[17][1];
 units[17] = "5";
 comments[17] = "Id Pregunta: 331. UNION EUROPEA";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[18]= "19)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[18]= new Array();
 choices[18][0] = "Intersecci&oacute;n.";
 choices[18][1] = "Uni&oacute;n.";
 choices[18][2] = "Restricci&oacute;n.";
 choices[18][3] = "Diferencia.";
 answers[18] = choices[18][0];
 units[18] = "60";
 comments[18] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[19]= "20)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[19]= new Array();
 choices[19][0] = "X.";
 choices[19][1] = "XIX.";
 choices[19][2] = "XV.";
 choices[19][3] = "XIII.";
 answers[19] = choices[19][1];
 units[19] = "5";
 comments[19] = "Id Pregunta: 327. UNION EUROPEA";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[20]= new Array();
 choices[20][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[20][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[20][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[20][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[20] = choices[20][2];
 units[20] = "71";
 comments[20] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[21]= "22)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[21]= new Array();
 choices[21][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[21][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[21][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[21][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[21] = choices[21][1];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 838. Ley 40/2015";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[22]= "23)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[22]= new Array();
 choices[22][0] = "personalidad jur&iacute;dica propia";
 choices[22][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[22][2] = "personalidad jur&iacute;dica plena";
 choices[22][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[22] = choices[22][1];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 772. Ley 40/2015";


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


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[24][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[24][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[24][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[24] = choices[24][1];
 units[24] = "14";
 comments[24] = "Id Pregunta: 679. Pensiones";


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[25]= "26)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[25]= new Array();
 choices[25][0] = "ISO/IEC 25000";
 choices[25][1] = "ISO/IEC 27000";
 choices[25][2] = "ISO 9000";
 choices[25][3] = "ISO 9001";
 answers[25] = choices[25][0];
 units[25] = "93";
 comments[25] = "Id Pregunta: 52. AGE A1 2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[26]= new Array();
 choices[26][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[26][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[26][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[26][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[26] = choices[26][1];
 units[26] = "77";
 comments[26] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[27]= "28)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Anualmente.";
 choices[27][1] = "Ninguna de las respuestas es correcta.";
 choices[27][2] = "Trimestralmente.";
 choices[27][3] = "Semestralmente.";
 answers[27] = choices[27][0];
 units[27] = "10";
 comments[27] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[28]= new Array();
 choices[28][0] = "3 pilares";
 choices[28][1] = "4 pilares";
 choices[28][2] = "5 pilares";
 choices[28][3] = "7 pilares";
 answers[28] = choices[28][0];
 units[28] = "17";
 comments[28] = "Id Pregunta: 759. Mercado &Uacute;nico Digital";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[29]= new Array();
 choices[29][0] = "Memcached";
 choices[29][1] = "OpCache";
 choices[29][2] = "WinCache Extension for PHP";
 choices[29][3] = "Alternative PHP Cache";
 answers[29] = choices[29][0];
 units[29] = "65";
 comments[29] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[30]= "31)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[30]= new Array();
 choices[30][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[30][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[30][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[30][3] = "Todas son correctas.";
 answers[30] = choices[30][3];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[31]= "32)  El Colegio de Comisarios se re&uacute;ne:";
 choices[31]= new Array();
 choices[31][0] = "Una vez por semana.";
 choices[31][1] = "Una vez al mes.";
 choices[31][2] = "Dos veces en semana.";
 choices[31][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[31] = choices[31][0];
 units[31] = "5";
 comments[31] = "Id Pregunta: 315. UNION EUROPEA";


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[32]= "33)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[32]= new Array();
 choices[32][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[32][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[32][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[32][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[32] = choices[32][0];
 units[32] = "15";
 comments[32] = "Id Pregunta: 111. ";


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[33]= "34)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[33]= new Array();
 choices[33][0] = "Principio de solo una vez";
 choices[33][1] = "Apertura y transparencia";
 choices[33][2] = "Confianza y seguridad";
 choices[33][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[33] = choices[33][3];
 units[33] = "19";
 comments[33] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[34]= "35)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[34]= new Array();
 choices[34][0] = "Ejecutivo";
 choices[34][1] = "Limitativo";
 choices[34][2] = "Estimativo";
 choices[34][3] = "Progresivo";
 answers[34] = choices[34][1];
 units[34] = "10";
 comments[34] = "Id Pregunta: 447. PRESUPUESTOS GENERALES";


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[35]= "36)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[35]= new Array();
 choices[35][0] = "El Jefe del Estado.";
 choices[35][1] = "El Tribunal Constitucional.";
 choices[35][2] = "El Congreso de los Diputados.";
 choices[35][3] = "Las Cortes Generales.";
 answers[35] = choices[35][0];
 units[35] = "1";
 comments[35] = "Id Pregunta: 235. CONSTITUCION1978";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[36]= "37)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[36]= new Array();
 choices[36][0] = "De un mes si el acto fuera presunto";
 choices[36][1] = "De un mes si el acto fuera expreso";
 choices[36][2] = "De un mes en cualquier caso";
 choices[36][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[36] = choices[36][1];
 units[36] = "8";
 comments[36] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[37]= "38)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[37]= new Array();
 choices[37][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[37][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[37][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[37][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[37] = choices[37][2];
 units[37] = "1";
 comments[37] = "Id Pregunta: 191. CONSTITUCION1978";


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[38]= "39)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[38]= new Array();
 choices[38][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[38][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[38][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[38][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[38] = choices[38][1];
 units[38] = "1";
 comments[38] = "Id Pregunta: 263. CONSTITUCION1978";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[39]= new Array();
 choices[39][0] = "Los principios rectores";
 choices[39][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[39][2] = "Los hitos para su desarrollo gradual";
 choices[39][3] = "Todos los anteriores";
 answers[39] = choices[39][3];
 units[39] = "19";
 comments[39] = "Id Pregunta: 583. Estrategia TIC";


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[40]= "41)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[40]= new Array();
 choices[40][0] = "tienen capacidad de obrar limitada";
 choices[40][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[40][2] = "no tienen capacidad de obrar";
 choices[40][3] = "ninguna es correcta";
 answers[40] = choices[40][2];
 units[40] = "7";
 comments[40] = "Id Pregunta: 526. LEY 39/2015";


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[41]= "42)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[41]= new Array();
 choices[41][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[41][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[41][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[41][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[41] = choices[41][3];
 units[41] = "109";
 comments[41] = "Id Pregunta: 650. Junta de Extremadura A1 2015";


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[42]= "43)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[42]= new Array();
 choices[42][0] = "Municipios, provincias y CCAA.";
 choices[42][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[42][2] = "En CCAA, 50 provincias y municipios.";
 choices[42][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[42] = choices[42][2];
 units[42] = "1";
 comments[42] = "Id Pregunta: 258. CONSTITUCION1978";


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[43]= "44)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[43]= new Array();
 choices[43][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[43][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[43][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[43][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[43] = choices[43][3];
 units[43] = "14";
 comments[43] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[44]= "45)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[44]= new Array();
 choices[44][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[44][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[44][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[44][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[44] = choices[44][2];
 units[44] = "7";
 comments[44] = "Id Pregunta: 667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[45]= "46)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[45]= new Array();
 choices[45][0] = "Sean dirigidas por mujeres";
 choices[45][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[45][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[45][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[45] = choices[45][2];
 units[45] = "14";
 comments[45] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[46]= "47)  En cuanto al an&aacute;lisis DAFO:";
 choices[46]= new Array();
 choices[46][0] = "Considera detallada y exclusivamente factores internos.";
 choices[46][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[46][2] = "Considera detallada y exclusivamente factores externos.";
 choices[46][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[46] = choices[46][1];
 units[46] = "83";
 comments[46] = "Id Pregunta: 41. AGE A1 2015";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[47]= new Array();
 choices[47][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[47][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[47][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[47][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[47] = choices[47][0];
 units[47] = "14";
 comments[47] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[48]= "49)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[48]= new Array();
 choices[48][0] = "B&aacute;sico";
 choices[48][1] = "Medio";
 choices[48][2] = "Alto";
 choices[48][3] = "A los niveles medio y alto";
 answers[48] = choices[48][2];
 units[48] = "35";
 comments[48] = "Id Pregunta: 62. AGE A1 2015";


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[49]= "50)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[49]= new Array();
 choices[49][0] = "Transferencias de cr&eacute;dito.";
 choices[49][1] = "Incorporaciones de cr&eacute;dito.";
 choices[49][2] = "Imputaciones de cr&eacute;dito.";
 choices[49][3] = "Ampliaciones de cr&eacute;dito.";
 answers[49] = choices[49][2];
 units[49] = "10";
 comments[49] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[50]= new Array();
 choices[50][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[50][1] = "Solamente el Congreso.";
 choices[50][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[50][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[50] = choices[50][0];
 units[50] = "1";
 comments[50] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[51]= "52)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[51]= new Array();
 choices[51][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[51][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[51][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[51][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[51] = choices[51][3];
 units[51] = "47";
 comments[51] = "Id Pregunta: 675. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[52]= "53)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[52]= new Array();
 choices[52][0] = "la poblaci&oacute;n del territorio";
 choices[52][1] = "el volumen de gesti&oacute;n";
 choices[52][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[52][3] = "todas son correctas";
 answers[52] = choices[52][3];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[53]= "54)  ITIL v3, define:";
 choices[53]= new Array();
 choices[53][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[53][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[53][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[53][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[53] = choices[53][0];
 units[53] = "101";
 comments[53] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[54]= new Array();
 choices[54][0] = "14";
 choices[54][1] = "11";
 choices[54][2] = "12";
 choices[54][3] = "15";
 answers[54] = choices[54][0];
 units[54] = "19";
 comments[54] = "Id Pregunta: 588. Estrategia TIC";


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[55]= "56)  El cr&eacute;dito presupuestario es...";
 choices[55]= new Array();
 choices[55][0] = "El sujeto que realiza el gasto";
 choices[55][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[55][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[55][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[56]= "57)  Respecto a los servicios territoriales es correcto:";
 choices[56]= new Array();
 choices[56][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[56][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[56][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[56][3] = "ninguna es correcta";
 answers[56] = choices[56][0];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 818. Ley 40/2015";


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[57]= new Array();
 choices[57][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[57][1] = "Autorizar indultos generales.";
 choices[57][2] = "Sancionar las leyes.";
 choices[57][3] = "Promulgar las leyes.";
 answers[57] = choices[57][1];
 units[57] = "1";
 comments[57] = "Id Pregunta: 185. CONSTITUCION1978";


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[58]= new Array();
 choices[58][0] = "Indirecta.";
 choices[58][1] = "Directa.";
 choices[58][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[58][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[58] = choices[58][1];
 units[58] = "14";
 comments[58] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[59]= new Array();
 choices[59][0] = "a) Los cuatro ejercicios siguientes.";
 choices[59][1] = "b) El ejercicio siguiente.";
 choices[59][2] = "c) Los dos ejercicios siguientes.";
 choices[59][3] = "d) Los tres ejercicios siguientes.";
 answers[59] = choices[59][3];
 units[59] = "10";
 comments[59] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[60]= "61)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[60][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[60][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[60][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[60] = choices[60][1];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 843. Ley 40/2015";


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[61]= new Array();
 choices[61][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[61][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[61][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[61][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[61] = choices[61][0];
 units[61] = "62";
 comments[61] = "Id Pregunta: 12. AGE A1 2015";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[62]= new Array();
 choices[62][0] = "El Presidente del Senado.";
 choices[62][1] = "El Defensor del Pueblo.";
 choices[62][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[62][3] = "El Presidente del Gobierno.";
 answers[62] = choices[62][2];
 units[62] = "1";
 comments[62] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[63]= "64)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[63]= new Array();
 choices[63][0] = "El Parlamento Europeo.";
 choices[63][1] = "Todas las respuestas son correctas.";
 choices[63][2] = "La Comisi&oacute;n Europea.";
 choices[63][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[63] = choices[63][1];
 units[63] = "5";
 comments[63] = "Id Pregunta: 353. UNION EUROPEA";


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[64]= "65)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[64]= new Array();
 choices[64][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[64][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[64][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[64][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[64] = choices[64][1];
 units[64] = "26";
 comments[64] = "Id Pregunta: 22. AGE A1 2015";


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[65]= "66)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[65]= new Array();
 choices[65][0] = "Cincuenta y cuatro.";
 choices[65][1] = "Cincuenta.";
 choices[65][2] = "Cincuenta y cinco.";
 choices[65][3] = "Cincuenta y dos.";
 answers[65] = choices[65][1];
 units[65] = "5";
 comments[65] = "Id Pregunta: 321. UNION EUROPEA";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[66]= new Array();
 choices[66][0] = "As&iacute;ncrona.";
 choices[66][1] = "Log-shipping.";
 choices[66][2] = "Disk buffering.";
 choices[66][3] = "S&iacute;ncrona.";
 answers[66] = choices[66][3];
 units[66] = "53";
 comments[66] = "Id Pregunta: 849. Xunta de Galicia 2015";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[67]= new Array();
 choices[67][0] = "Cassandra";
 choices[67][1] = "Riak";
 choices[67][2] = "Avro";
 choices[67][3] = "Zookeeper";
 answers[67] = choices[67][3];
 units[67] = "73";
 comments[67] = "Id Pregunta: 656. ";


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[68]= new Array();
 choices[68][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[68][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[68][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[68][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[68] = choices[68][2];
 units[68] = "22";
 comments[68] = "Id Pregunta: 704. Ley de transparencia";


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[69]= "70)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Un informe de impacto de g&eacute;nero.";
 choices[69][1] = "Un programa de igualdad de oportunidades.";
 choices[69][2] = "Un plan de Igualdad de Oportunidades.";
 choices[69][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[70]= "71)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[70]= new Array();
 choices[70][0] = "Consejos y Servicios.";
 choices[70][1] = "Servicios permanentes y no permanentes.";
 choices[70][2] = "Direcciones Generales.";
 choices[70][3] = "Direcciones ministeriales.";
 answers[70] = choices[70][2];
 units[70] = "5";
 comments[70] = "Id Pregunta: 318. UNION EUROPEA";


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[71]= "72)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[71]= new Array();
 choices[71][0] = "Un plan de igualdad.";
 choices[71][1] = "Un informe de impacto de g&eacute;nero.";
 choices[71][2] = "Un programa de igualdad.";
 choices[71][3] = "Todas son correctas.";
 answers[71] = choices[71][1];
 units[71] = "14";
 comments[71] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[72]= "73)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[72]= new Array();
 choices[72][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[72][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[72][2] = "a y b son correctas";
 choices[72][3] = "a y b son incorrectas";
 answers[72] = choices[72][0];
 units[72] = "7";
 comments[72] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[73]= "74)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[73]= new Array();
 choices[73][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[73][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[73][2] = "Las Inspecciones Generales de los Servicios";
 choices[73][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[73] = choices[73][1];
 units[73] = "75";
 comments[73] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[74]= new Array();
 choices[74][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[74][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[74][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = choices[74][1];
 units[74] = "34, 84";
 comments[74] = "Id Pregunta: 721. Metodologias &aacute;giles";


