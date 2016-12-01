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

//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[0]= new Array();
 choices[0][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[0][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[0][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[0][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[0] = choices[0][2];
 units[0] = "85";
 comments[0] = "Id Pregunta: 620. Junta de Extremadura A1 2015";
 preguntaids[0] = 620


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[1]= "2)  Respecto a las unidades administrativas:";
 choices[1]= new Array();
 choices[1][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[1][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[1][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[1][3] = "ninguna es correcta";
 answers[1] = choices[1][1];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 801. Ley 40/2015";
 preguntaids[1] = 801


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[2]= "3)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[2]= new Array();
 choices[2][0] = "Los propios miembros del Tribunal.";
 choices[2][1] = "El Consejo de Europa.";
 choices[2][2] = "El Consejo Europeo.";
 choices[2][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[2] = choices[2][0];
 units[2] = "5";
 comments[2] = "Id Pregunta: 301. UNION EUROPEA";
 preguntaids[2] = 301


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[3]= "4)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[3]= new Array();
 choices[3][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[3][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[3][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[3][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[3] = choices[3][1];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 838. Ley 40/2015";
 preguntaids[3] = 838


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[4]= "5)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[4]= new Array();
 choices[4][0] = "SMB3";
 choices[4][1] = "AFP";
 choices[4][2] = "NFS";
 choices[4][3] = "FTP";
 answers[4] = choices[4][0];
 units[4] = "59";
 comments[4] = "Id Pregunta: 30. AGE A1 2015";
 preguntaids[4] = 30


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[5]= "6)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[5]= new Array();
 choices[5][0] = "ISO/IEC 25000";
 choices[5][1] = "ISO/IEC 27000";
 choices[5][2] = "ISO 9000";
 choices[5][3] = "ISO 9001";
 answers[5] = choices[5][0];
 units[5] = "93";
 comments[5] = "Id Pregunta: 52. AGE A1 2015";
 preguntaids[5] = 52


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[6]= "7)  En el sistema operativo Unix/Linux, el comando id:";
 choices[6]= new Array();
 choices[6][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[6][1] = "El comando id no existe.";
 choices[6][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[6][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[6] = choices[6][0];
 units[6] = "57";
 comments[6] = "Id Pregunta: 639. Junta de Extremadura A1 2015";
 preguntaids[6] = 639


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[7]= new Array();
 choices[7][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[7][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[7][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[7][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[7] = choices[7][0];
 units[7] = "1";
 comments[7] = "Id Pregunta: 202. CONSTITUCION1978";
 preguntaids[7] = 202


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[8]= new Array();
 choices[8][0] = "En 1988.";
 choices[8][1] = "En 1981.";
 choices[8][2] = "En 1982.";
 choices[8][3] = "En 1986.";
 answers[8] = choices[8][3];
 units[8] = "5";
 comments[8] = "Id Pregunta: 371. UNION EUROPEA";
 preguntaids[8] = 371


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[9]= "10)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[9]= new Array();
 choices[9][0] = "&oacute;rganos superiores";
 choices[9][1] = "&oacute;rganos directivos";
 choices[9][2] = "&oacute;rganos superiores y directivos";
 choices[9][3] = "ninguna es correcta";
 answers[9] = choices[9][1];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[9] = 796


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[10]= "11)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[10]= new Array();
 choices[10][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[10][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[10][2] = "A partir del 1 de enero de 2015";
 choices[10][3] = "A partir del 1 de julio de 2016";
 answers[10] = choices[10][1];
 units[10] = "77";
 comments[10] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";
 preguntaids[10] = 692


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[11]= new Array();
 choices[11][0] = "al menos por 50 Diputados.";
 choices[11][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[11][2] = "por la Mesa del Congreso de los Diputados.";
 choices[11][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[11] = choices[11][1];
 units[11] = "1";
 comments[11] = "Id Pregunta: 183. CONSTITUCION1978";
 preguntaids[11] = 183


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[12]= "13)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[12]= new Array();
 choices[12][0] = "Proveer de manera compartida servicios comunes";
 choices[12][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[12][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[12][3] = "Transparencia";
 answers[12] = choices[12][1];
 units[12] = "28";
 comments[12] = "Id Pregunta: 742. Estrategia TIC";
 preguntaids[12] = 742


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[13]= new Array();
 choices[13][0] = "Entre 1973 y 1978";
 choices[13][1] = "Entre 1992 y 1996";
 choices[13][2] = "Entre 1978 y 1985";
 choices[13][3] = "Entre 2008 y 2013";
 answers[13] = choices[13][2];
 units[13] = "12";
 comments[13] = "Id Pregunta: 564. Modelo econ&oacute;mico";
 preguntaids[13] = 564


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[14]= "15)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[14]= new Array();
 choices[14][0] = "61";
 choices[14][1] = "53";
 choices[14][2] = "65";
 choices[14][3] = "67";
 answers[14] = choices[14][1];
 units[14] = "1";
 comments[14] = "Id Pregunta: 248. CONSTITUCION1978";
 preguntaids[14] = 248


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[15]= "16)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[15]= new Array();
 choices[15][0] = "Un plan de igualdad.";
 choices[15][1] = "Un informe de impacto de g&eacute;nero.";
 choices[15][2] = "Un programa de igualdad.";
 choices[15][3] = "Todas son correctas.";
 answers[15] = choices[15][1];
 units[15] = "14";
 comments[15] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";
 preguntaids[15] = 426


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[16]= "17)  Un wireframe es:";
 choices[16]= new Array();
 choices[16][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[16][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[16][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[16][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[16] = choices[16][3];
 units[16] = "62";
 comments[16] = "Id Pregunta: 4. AGE A1 2015";
 preguntaids[16] = 4


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[17]= new Array();
 choices[17][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[17][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[17][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[17][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[17] = choices[17][2];
 units[17] = "22";
 comments[17] = "Id Pregunta: 129. ";
 preguntaids[17] = 129


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[18]= new Array();
 choices[18][0] = "En 2011";
 choices[18][1] = "En 2013";
 choices[18][2] = "En 2015";
 choices[18][3] = "En 2016";
 answers[18] = choices[18][2];
 units[18] = "17";
 comments[18] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";
 preguntaids[18] = 763


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[19]= "20)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[19]= new Array();
 choices[19][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[19][1] = "Protecci&oacute;n de su salud.";
 choices[19][2] = "Ninguna es correcta.";
 choices[19][3] = "A y B son correctas.";
 answers[19] = choices[19][1];
 units[19] = "14";
 comments[19] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";
 preguntaids[19] = 430


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[20]= new Array();
 choices[20][0] = "Backup full.";
 choices[20][1] = "Backup diferencial.";
 choices[20][2] = "Backup incremental.";
 choices[20][3] = "Backup deduplicado.";
 answers[20] = choices[20][3];
 units[20] = "53";
 comments[20] = "Id Pregunta: 852. Xunta de Galicia 2015";
 preguntaids[20] = 852


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[21]= new Array();
 choices[21][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[21][1] = "Por Orden Ministerial.";
 choices[21][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[21][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[21] = choices[21][0];
 units[21] = "1";
 comments[21] = "Id Pregunta: 247. CONSTITUCION1978";
 preguntaids[21] = 247


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[22]= "23)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[22]= new Array();
 choices[22][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[22][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[22][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[22][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[22] = choices[22][2];
 units[22] = "76";
 comments[22] = "Id Pregunta: 604. Junta de Extremadura A1 2015";
 preguntaids[22] = 604


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[23]= "24)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[23]= new Array();
 choices[23][0] = "De oficio.";
 choices[23][1] = "A solicitud del interesado.";
 choices[23][2] = "De oficio o a solicitud del interesado.";
 choices[23][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[23] = choices[23][2];
 units[23] = "7";
 comments[23] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";
 preguntaids[23] = 665


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[24]= "25)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[24]= new Array();
 choices[24][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[24][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[24][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[24][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[24] = choices[24][0];
 units[24] = "1";
 comments[24] = "Id Pregunta: 241. CONSTITUCION1978";
 preguntaids[24] = 241


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[25]= new Array();
 choices[25][0] = "Diagrama de clases";
 choices[25][1] = "Diagrama de componentes";
 choices[25][2] = "Diagrama de estructura";
 choices[25][3] = "Diagrama de paquetes";
 answers[25] = choices[25][0];
 units[25] = "91";
 comments[25] = "Id Pregunta: 88. AGE A1 2015";
 preguntaids[25] = 88


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[26]= new Array();
 choices[26][0] = "Art&iacute;culo 9.1 CE.";
 choices[26][1] = "Art&iacute;culo 53 CE.";
 choices[26][2] = "Art&iacute;culo 14 CE.";
 choices[26][3] = "Art&iacute;culo 16 CE.";
 answers[26] = choices[26][2];
 units[26] = "14";
 comments[26] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";
 preguntaids[26] = 406


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[27]= new Array();
 choices[27][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[27][1] = "Pasivos financieros y transferencias de capital.";
 choices[27][2] = "Activos financieros y pasivos financieros.";
 choices[27][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[27] = choices[27][2];
 units[27] = "10";
 comments[27] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";
 preguntaids[27] = 461


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[28]= "29)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[28]= new Array();
 choices[28][0] = "Al menos cada 12 meses";
 choices[28][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[28][2] = "Al menos cada 18 meses";
 choices[28][3] = "Al menos cada 24 meses";
 answers[28] = choices[28][3];
 units[28] = "77";
 comments[28] = "Id Pregunta: 687. Art&iacute;culo 20 del Reglamento 910/2014";
 preguntaids[28] = 687


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[29]= "30)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[29]= new Array();
 choices[29][0] = "El 23 de julio de 1952.";
 choices[29][1] = "El 18 de abril de 1951.";
 choices[29][2] = "El 16 de abril de 1948.";
 choices[29][3] = "d)Ninguna de las respuestas son correctas.";
 answers[29] = choices[29][0];
 units[29] = "5";
 comments[29] = "Id Pregunta: 349. UNION EUROPEA";
 preguntaids[29] = 349


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[30]= new Array();
 choices[30][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[30][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[30][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[30][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[30] = choices[30][0];
 units[30] = "19";
 comments[30] = "Id Pregunta: 589. Estrategia TIC";
 preguntaids[30] = 589


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[31]= "32)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[31]= new Array();
 choices[31][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[31][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[31][2] = "el Ministerio del Interior";
 choices[31][3] = "la Administraci&oacute;n General del Estado";
 answers[31] = choices[31][0];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 814. Ley 40/2015";
 preguntaids[31] = 814


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[32]= "33)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[32]= new Array();
 choices[32][0] = "Unidad de igualdad.";
 choices[32][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[32][2] = "Ninguna de las anteriores.";
 choices[32][3] = "A y B son correctas.";
 answers[32] = choices[32][1];
 units[32] = "14";
 comments[32] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";
 preguntaids[32] = 433


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[33]= "34)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[33]= new Array();
 choices[33][0] = "Establecer tributos.";
 choices[33][1] = "Desarrollar lo establecido en una Ley.";
 choices[33][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[33][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[33] = choices[33][0];
 units[33] = "1";
 comments[33] = "Id Pregunta: 197. CONSTITUCION1978";
 preguntaids[33] = 197


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[34]= "35)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[34]= new Array();
 choices[34][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[34][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[34][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[34][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[34] = choices[34][1];
 units[34] = "76";
 comments[34] = "Id Pregunta: 46. AGE A1 2015";
 preguntaids[34] = 46


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[35]= new Array();
 choices[35][0] = "Cassandra";
 choices[35][1] = "Riak";
 choices[35][2] = "Avro";
 choices[35][3] = "Zookeeper";
 answers[35] = choices[35][3];
 units[35] = "73";
 comments[35] = "Id Pregunta: 658. ";
 preguntaids[35] = 658


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[36]= new Array();
 choices[36][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[36][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[36][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[36][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[36] = choices[36][1];
 units[36] = "77";
 comments[36] = "Id Pregunta: 694. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";
 preguntaids[36] = 694


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[37]= "38)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[37]= new Array();
 choices[37][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[37][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[37][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[37][3] = "todas son correctas";
 answers[37] = choices[37][3];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 771. Ley 40/2015";
 preguntaids[37] = 771


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[38]= "39)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[38]= new Array();
 choices[38][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[38][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[38][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[38][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[38] = choices[38][2];
 units[38] = "19";
 comments[38] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";
 preguntaids[38] = 170


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[39]= "40)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[39]= new Array();
 choices[39][0] = "Al Gobierno.";
 choices[39][1] = "A las Cortes Generales.";
 choices[39][2] = "Al Poder Judicial.";
 choices[39][3] = "Al Congreso de los Diputados.";
 answers[39] = choices[39][0];
 units[39] = "1";
 comments[39] = "Id Pregunta: 195. CONSTITUCION1978";
 preguntaids[39] = 195


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[40]= "41)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[40]= new Array();
 choices[40][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[40][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[40][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[40][3] = "Todos las anteriores son ciertas.";
 answers[40] = choices[40][3];
 units[40] = "12";
 comments[40] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";
 preguntaids[40] = 137


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[41]= new Array();
 choices[41][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[41][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[41][2] = "Servicio de seguridad gestionada";
 choices[41][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[41] = choices[41][1];
 units[41] = "26";
 comments[41] = "Id Pregunta: 58. AGE A1 2015";
 preguntaids[41] = 58


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[42]= "43)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[42]= new Array();
 choices[42][0] = "3 a&ntilde;os.";
 choices[42][1] = "5 a&ntilde;os.";
 choices[42][2] = "4 a&ntilde;os.";
 choices[42][3] = "6 a&ntilde;os.";
 answers[42] = choices[42][1];
 units[42] = "1";
 comments[42] = "Id Pregunta: 193. CONSTITUCION1978";
 preguntaids[42] = 193


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
 preguntaids[43] = 353


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[44]= "45)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[44]= new Array();
 choices[44][0] = "Cuatro.";
 choices[44][1] = "Una.";
 choices[44][2] = "Cinco.";
 choices[44][3] = "Nueve.";
 answers[44] = choices[44][2];
 units[44] = "1";
 comments[44] = "Id Pregunta: 268. CONSTITUCION1978";
 preguntaids[44] = 268


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[45]= "46)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[45]= new Array();
 choices[45][0] = "Publicidad.";
 choices[45][1] = "Constituci&oacute;n.";
 choices[45][2] = "Legalidad.";
 choices[45][3] = "Creaci&oacute;n.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 215. CONSTITUCION1978";
 preguntaids[45] = 215


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[46]= new Array();
 choices[46][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[46][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[46][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[46][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[46] = choices[46][3];
 units[46] = "22";
 comments[46] = "Id Pregunta: 126. ";
 preguntaids[46] = 126


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[47]= new Array();
 choices[47][0] = "Directiva 95/46/CE";
 choices[47][1] = "Directiva 1999/93/CE";
 choices[47][2] = "Directiva 2000/31/CE";
 choices[47][3] = "Directiva 2003/98/CE";
 answers[47] = choices[47][1];
 units[47] = "77";
 comments[47] = "Id Pregunta: 684. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[47] = 684


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[48]= new Array();
 choices[48][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[48][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[48][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[48][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[48] = choices[48][3];
 units[48] = "26";
 comments[48] = "Id Pregunta: 546. Gobernanza TIC";
 preguntaids[48] = 546


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[49]= "50)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[49]= new Array();
 choices[49][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[49][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[49][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[49][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[49] = choices[49][2];
 units[49] = "22";
 comments[49] = "Id Pregunta: 706. Ley de transparencia";
 preguntaids[49] = 706


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[50]= "51)  Los Secretarios generales t&eacute;cnicos:";
 choices[50]= new Array();
 choices[50][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[50][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[50][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[50][3] = "todas son correctas";
 answers[50] = choices[50][3];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 804. Ley 40/2015";
 preguntaids[50] = 804


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[51]= new Array();
 choices[51][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[51][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[51][2] = "Todas son correctas.";
 choices[51][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[51] = choices[51][2];
 units[51] = "5";
 comments[51] = "Id Pregunta: 330. UNION EUROPEA";
 preguntaids[51] = 330


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[52]= "53)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[52]= new Array();
 choices[52][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[52][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[52][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[52][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[52] = choices[52][2];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 837. Ley 40/2015";
 preguntaids[52] = 837


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[53]= "54)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[53]= new Array();
 choices[53][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[53][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[53][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[53][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[53] = choices[53][2];
 units[53] = "43";
 comments[53] = "Id Pregunta: 435. SERVICIOS COMUNES";
 preguntaids[53] = 435


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[54]= "55)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[54]= new Array();
 choices[54][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[54][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[54][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[54][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[54] = choices[54][2];
 units[54] = "10";
 comments[54] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";
 preguntaids[54] = 466


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[55]= "56)  JNDI se usa para el acceso a:";
 choices[55]= new Array();
 choices[55][0] = "Datos de ficheros";
 choices[55][1] = "Sistemas gestores de bases de datos";
 choices[55][2] = "Directorios de nombres";
 choices[55][3] = "Colas de mensajer&iacute;a";
 answers[55] = choices[55][2];
 units[55] = "64";
 comments[55] = "Id Pregunta: 13. AGE A1 2015";
 preguntaids[55] = 13


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[56]= new Array();
 choices[56][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[56][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[56][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[56][3] = "El pago de subsidios a parados";
 answers[56] = choices[56][3];
 units[56] = "15";
 comments[56] = "Id Pregunta: 116. ";
 preguntaids[56] = 116


//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[57]= new Array();
 choices[57][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[57][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[57][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[57][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[57] = choices[57][0];
 units[57] = "26";
 comments[57] = "Id Pregunta: 0. AGE A1 2015";
 preguntaids[57] = 0


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[58]= "59)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[58]= new Array();
 choices[58][0] = "Cifrado de las comunicaciones";
 choices[58][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[58][2] = "Registro de los accesos";
 choices[58][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[58] = choices[58][1];
 units[58] = "35";
 comments[58] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";
 preguntaids[58] = 51


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[59]= "60)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[59]= new Array();
 choices[59][0] = "formular solicitudes";
 choices[59][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[59][2] = "presentar declaraciones responsables o comunicaciones";
 choices[59][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[59] = choices[59][1];
 units[59] = "7";
 comments[59] = "Id Pregunta: 531. LEY 39/2015";
 preguntaids[59] = 531


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[60]= "61)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[60]= new Array();
 choices[60][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[60][1] = "Tratarse de un acto no susceptible de recurso";
 choices[60][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[60][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[60] = choices[60][2];
 units[60] = "8";
 comments[60] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";
 preguntaids[60] = 140


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[61]= new Array();
 choices[61][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[61][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[61][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[61][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[61] = choices[61][1];
 units[61] = "19";
 comments[61] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[61] = 581


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[62]= "63)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[62]= new Array();
 choices[62][0] = "Sean dirigidas por mujeres";
 choices[62][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[62][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[62][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[62] = choices[62][2];
 units[62] = "14";
 comments[62] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";
 preguntaids[62] = 384


//  Id pregunta: 585 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[63]= new Array();
 choices[63][0] = "Los principios rectores";
 choices[63][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[63][2] = "Los hitos para su desarrollo gradual";
 choices[63][3] = "Todos los anteriores";
 answers[63] = choices[63][3];
 units[63] = "19";
 comments[63] = "Id Pregunta: 585. Estrategia TIC";
 preguntaids[63] = 585


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[64]= "65)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[64]= new Array();
 choices[64][0] = "Al Consejo Europeo.";
 choices[64][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[64][2] = "A la Comisi&oacute;n Europea.";
 choices[64][3] = "Al Parlamento Europeo.";
 answers[64] = choices[64][2];
 units[64] = "5";
 comments[64] = "Id Pregunta: 314. UNION EUROPEA";
 preguntaids[64] = 314


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[65]= "66)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[65]= new Array();
 choices[65][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[65][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[65][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[65][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[65] = choices[65][3];
 units[65] = "12";
 comments[65] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";
 preguntaids[65] = 132


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[66]= "67)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[66]= new Array();
 choices[66][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[66][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[66][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[66][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[66] = choices[66][0];
 units[66] = "60";
 comments[66] = "Id Pregunta: 651. Junta de Extremadura A1 2015";
 preguntaids[66] = 651


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[67]= "68)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[67]= new Array();
 choices[67][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[67][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[67][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[67][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[67] = choices[67][2];
 units[67] = "50";
 comments[67] = "Id Pregunta: 633. Junta de Extremadura A1 2015";
 preguntaids[67] = 633


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[68]= "69)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[68]= new Array();
 choices[68][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[68][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[68][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[68][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[68] = choices[68][0];
 units[68] = "62";
 comments[68] = "Id Pregunta: 12. AGE A1 2015";
 preguntaids[68] = 12


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[69]= "70)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[69]= new Array();
 choices[69][0] = "l Consejo General del Poder Judicial";
 choices[69][1] = "El pleno de Tribunal Constitucional";
 choices[69][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[69][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[69] = choices[69][3];
 units[69] = "1";
 comments[69] = "Id Pregunta: 181. CONSTITUCION1978";
 preguntaids[69] = 181


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[70]= "71)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[70]= new Array();
 choices[70][0] = "la Administraci&oacute;n General del Estado";
 choices[70][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[70][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[70][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[70] = choices[70][3];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 769. Ley 40/2015";
 preguntaids[70] = 769


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[71]= "72)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[71][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[71][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[71][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[71] = choices[71][3];
 units[71] = "22";
 comments[71] = "Id Pregunta: 712. Ley de transparencia";
 preguntaids[71] = 712


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[72]= "73)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[72]= new Array();
 choices[72][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[72][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[72][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[72][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[72] = choices[72][0];
 units[72] = "84";
 comments[72] = "Id Pregunta: 619. Junta de Extremadura A1 2015";
 preguntaids[72] = 619


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[73]= new Array();
 choices[73][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[73][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[73][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[73][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[73] = choices[73][1];
 units[73] = "26";
 comments[73] = "Id Pregunta: 547. Gobernanza TIC";
 preguntaids[73] = 547


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
 preguntaids[74] = 416


