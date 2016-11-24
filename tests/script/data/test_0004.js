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

//  Id pregunta: 10499 Año de creación de pregunta: 2016
 questions[0]= "1)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[0]= new Array();
 choices[0][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[0][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[0][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[0][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[0] = choices[0][0];
 units[0] = "10";
 comments[0] = "Id Pregunta: 10499. PRESUPUESTOS GENERALES";


//  Id pregunta: 10518 Año de creación de pregunta: 2016
 questions[1]= "2)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[1]= new Array();
 choices[1][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[1][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[1][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[1][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[1] = choices[1][0];
 units[1] = "7";
 comments[1] = "Id Pregunta: 10518. LEY 39/2015";


//  Id pregunta: 10326 Año de creación de pregunta: 2016
 questions[2]= "3)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[2]= new Array();
 choices[2][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[2][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[2][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[2][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[2] = choices[2][3];
 units[2] = "5";
 comments[2] = "Id Pregunta: 10326. UNION EUROPEA";


//  Id pregunta: 10322 Año de creación de pregunta: 2016
 questions[3]= "4)  El Tribunal de Justicia est&aacute; formado por:";
 choices[3]= new Array();
 choices[3][0] = "Un Juez de cada Estado miembro.";
 choices[3][1] = "Por dos Jueces de cada Estado miembro.";
 choices[3][2] = "Por veinte Jueces.";
 choices[3][3] = "Por ocho Jueces.";
 answers[3] = choices[3][0];
 units[3] = "5";
 comments[3] = "Id Pregunta: 10322. UNION EUROPEA";


//  Id pregunta: 10274 Año de creación de pregunta: 2016
 questions[4]= "5)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[4]= new Array();
 choices[4][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[4][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[4][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[4][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[4] = choices[4][3];
 units[4] = "22";
 comments[4] = "Id Pregunta: 10274. LEY DE TRANSPARENCIA";


//  Id pregunta: 10101 Año de creación de pregunta: 2016
 questions[5]= "6)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[5]= new Array();
 choices[5][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[5][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[5][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[5][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[5] = choices[5][1];
 units[5] = "73";
 comments[5] = "Id Pregunta: 10101. ";


//  Id pregunta: 10538 Año de creación de pregunta: 2016
 questions[6]= "7)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[6]= new Array();
 choices[6][0] = "los registros mercantiles";
 choices[6][1] = "los registros de la propiedad";
 choices[6][2] = "los protocolos notariales";
 choices[6][3] = "todas son correctas";
 answers[6] = choices[6][3];
 units[6] = "7";
 comments[6] = "Id Pregunta: 10538. LEY 39/2015";


//  Id pregunta: 10490 Año de creación de pregunta: 2016
 questions[7]= "8)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[7]= new Array();
 choices[7][0] = "A los cinco a&ntilde;os.";
 choices[7][1] = "A los dos a&ntilde;os.";
 choices[7][2] = "A los tres a&ntilde;os.";
 choices[7][3] = "A los cuatro a&ntilde;os.";
 answers[7] = choices[7][0];
 units[7] = "10";
 comments[7] = "Id Pregunta: 10490. PRESUPUESTOS GENERALES";


//  Id pregunta: 10645 Año de creación de pregunta: 2016
 questions[8]= "9)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[8]= new Array();
 choices[8][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[8][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[8][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[8][3] = "El Instituto de la Mujer de Extremadura.";
 answers[8] = choices[8][3];
 units[8] = "14";
 comments[8] = "Id Pregunta: 10645. Junta de Extremadura A1 2015";


//  Id pregunta: 10116 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[9]= new Array();
 choices[9][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[9][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[9][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[9][3] = "El pago de subsidios a parados";
 answers[9] = choices[9][3];
 units[9] = "15";
 comments[9] = "Id Pregunta: 10116. ";


//  Id pregunta: 10640 Año de creación de pregunta: 2016
 questions[10]= "11)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[10]= new Array();
 choices[10][0] = "Fat y Ntfs.";
 choices[10][1] = "Extfat y Fat.";
 choices[10][2] = "Fat y Nfst.";
 choices[10][3] = "ext2fs y Ntfs.";
 answers[10] = choices[10][0];
 units[10] = "58";
 comments[10] = "Id Pregunta: 10640. Junta de Extremadura A1 2015";


//  Id pregunta: 10467 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[11]= new Array();
 choices[11][0] = "Tres meses.";
 choices[11][1] = "Nueve meses.";
 choices[11][2] = "Cuatro meses.";
 choices[11][3] = "Seis meses.";
 answers[11] = choices[11][0];
 units[11] = "10";
 comments[11] = "Id Pregunta: 10467. PRESUPUESTOS GENERALES";


//  Id pregunta: 10166 Año de creación de pregunta: 2016
 questions[12]= "13)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[12]= new Array();
 choices[12][0] = "Interoperabilidad";
 choices[12][1] = "Integridad";
 choices[12][2] = "Capital humano";
 choices[12][3] = "Trazabilidad";
 answers[12] = choices[12][2];
 units[12] = "19";
 comments[12] = "Id Pregunta: 10166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 10052 Año de creación de pregunta: 2016
 questions[13]= "14)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[13]= new Array();
 choices[13][0] = "ISO/IEC 25000";
 choices[13][1] = "ISO/IEC 27000";
 choices[13][2] = "ISO 9000";
 choices[13][3] = "ISO 9001";
 answers[13] = choices[13][0];
 units[13] = "93";
 comments[13] = "Id Pregunta: 10052. AGE A1 2015";


//  Id pregunta: 10438 Año de creación de pregunta: 2016
 questions[14]= "15)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[14]= new Array();
 choices[14][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[14][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[14][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[14][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[14] = choices[14][3];
 units[14] = "43";
 comments[14] = "Id Pregunta: 10438. SERVICIOS COMUNES";


//  Id pregunta: 10273 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[15]= new Array();
 choices[15][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[15][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[15][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[15][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[15] = choices[15][1];
 units[15] = "92";
 comments[15] = "Id Pregunta: 10273. INTEGRACION CONTINUA";


//  Id pregunta: 10651 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[16]= new Array();
 choices[16][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[16][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[16][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[16][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[16] = choices[16][3];
 units[16] = "120";
 comments[16] = "Id Pregunta: 10651. Junta de Extremadura A1 2015";


//  Id pregunta: 10356 Año de creación de pregunta: 2016
 questions[17]= "18)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[17]= new Array();
 choices[17][0] = "No se aplican directamente en los Estados.";
 choices[17][1] = "No son vinculantes.";
 choices[17][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[17][3] = "Tienen alcance general.";
 answers[17] = choices[17][0];
 units[17] = "5";
 comments[17] = "Id Pregunta: 10356. UNION EUROPEA";


//  Id pregunta: 10124 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[18]= new Array();
 choices[18][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[18][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[18][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[18][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[18] = choices[18][0];
 units[18] = "22";
 comments[18] = "Id Pregunta: 10124. ";


//  Id pregunta: 10637 Año de creación de pregunta: 2016
 questions[19]= "20)  En el sistema operativo Unix/Linux, el comando id:";
 choices[19]= new Array();
 choices[19][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[19][1] = "El comando id no existe.";
 choices[19][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[19][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[19] = choices[19][0];
 units[19] = "57";
 comments[19] = "Id Pregunta: 10637. Junta de Extremadura A1 2015";


//  Id pregunta: 10544 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[20]= new Array();
 choices[20][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[20][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[20][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[20][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[20] = choices[20][3];
 units[20] = "26";
 comments[20] = "Id Pregunta: 10544. Gobernanza TIC";


//  Id pregunta: 10089 Año de creación de pregunta: 2016
 questions[21]= "22)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[21]= new Array();
 choices[21][0] = "2.400 euros";
 choices[21][1] = "4.000 euros";
 choices[21][2] = "3.200 euros";
 choices[21][3] = "1.600 euros";
 answers[21] = choices[21][1];
 units[21] = "37";
 comments[21] = "Id Pregunta: 10089. AGE A1 2015";


//  Id pregunta: 10677 Año de creación de pregunta: 2016
 questions[22]= "23)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[22]= new Array();
 choices[22][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[22][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[22][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[22][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[22] = choices[22][2];
 units[22] = "14";
 comments[22] = "Id Pregunta: 10677. Dependencia";


//  Id pregunta: 10655 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[23]= new Array();
 choices[23][0] = "Yarn";
 choices[23][1] = "Flume";
 choices[23][2] = "Hive";
 choices[23][3] = "BizAgi";
 answers[23] = choices[23][3];
 units[23] = "73";
 comments[23] = "Id Pregunta: 10655. ";


//  Id pregunta: 10313 Año de creación de pregunta: 2016
 questions[24]= "25)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[24]= new Array();
 choices[24][0] = "El Consejo Europeo.";
 choices[24][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[24][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[24][3] = "El Parlamento Europeo.";
 answers[24] = choices[24][0];
 units[24] = "5";
 comments[24] = "Id Pregunta: 10313. UNION EUROPEA";


//  Id pregunta: 10046 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[25]= new Array();
 choices[25][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[25][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[25][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[25][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[25] = choices[25][1];
 units[25] = "76";
 comments[25] = "Id Pregunta: 10046. AGE A1 2015";


//  Id pregunta: 10377 Año de creación de pregunta: 2016
 questions[26]= "27)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[26]= new Array();
 choices[26][0] = "Tener una estructura institucional.";
 choices[26][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[26][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[26][3] = "Todas las respuestas son correctas.";
 answers[26] = choices[26][3];
 units[26] = "5";
 comments[26] = "Id Pregunta: 10377. UNION EUROPEA";


//  Id pregunta: 10256 Año de creación de pregunta: 2016
 questions[27]= "28)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[27]= new Array();
 choices[27][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[27][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[27][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[27][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[27] = choices[27][0];
 units[27] = "1";
 comments[27] = "Id Pregunta: 10256. CONSTITUCION1978";


//  Id pregunta: 10267 Año de creación de pregunta: 2016
 questions[28]= "29)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[28]= new Array();
 choices[28][0] = "Los Derechos y Deberes fundamentales.";
 choices[28][1] = "La Corona.";
 choices[28][2] = "El Poder Judicial.";
 choices[28][3] = "Las Cortes Generales.";
 answers[28] = choices[28][2];
 units[28] = "1";
 comments[28] = "Id Pregunta: 10267. CONSTITUCION1978";


//  Id pregunta: 10048 Año de creación de pregunta: 2016
 questions[29]= "30)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[29]= new Array();
 choices[29][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[29][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[29][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[29][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[29] = choices[29][3];
 units[29] = "77";
 comments[29] = "Id Pregunta: 10048. AGE A1 2015";


//  Id pregunta: 10661 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[30]= new Array();
 choices[30][0] = "Varios namenodes y varios datanodes por cluster";
 choices[30][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[30][2] = "1 namenode y varios datanodes por cluster";
 choices[30][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[30] = choices[30][2];
 units[30] = "73";
 comments[30] = "Id Pregunta: 10661. ";


//  Id pregunta: 10383 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[31]= new Array();
 choices[31][0] = "El Consejo Nacional de la Mujer";
 choices[31][1] = "El Consejo de la Mujer";
 choices[31][2] = "El Instituto de la Mujer";
 choices[31][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[31] = choices[31][3];
 units[31] = "14";
 comments[31] = "Id Pregunta: 10383. POLITICAS DE IGUALDAD";


//  Id pregunta: 10587 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[32]= new Array();
 choices[32][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[32][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[32][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[32][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[32] = choices[32][0];
 units[32] = "19";
 comments[32] = "Id Pregunta: 10587. Estrategia TIC";


//  Id pregunta: 10549 Año de creación de pregunta: 2016
 questions[33]= "34)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[33]= new Array();
 choices[33][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[33][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[33][2] = "El Presidente del Gobierno";
 choices[33][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[33] = choices[33][1];
 units[33] = "26";
 comments[33] = "Id Pregunta: 10549. Gobernanza TIC";


//  Id pregunta: 10375 Año de creación de pregunta: 2016
 questions[34]= "35)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[34]= new Array();
 choices[34][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[34][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[34][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[34][3] = "Todas las respuestas son correctas.";
 answers[34] = choices[34][3];
 units[34] = "5";
 comments[34] = "Id Pregunta: 10375. UNION EUROPEA";


//  Id pregunta: 10278 Año de creación de pregunta: 2016
 questions[35]= "36)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[35]= new Array();
 choices[35][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[35][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[35][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[35][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[35] = choices[35][1];
 units[35] = "22";
 comments[35] = "Id Pregunta: 10278. LEY DE TRANSPARENCIA";


//  Id pregunta: 10063 Año de creación de pregunta: 2016
 questions[36]= "37)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[36]= new Array();
 choices[36][0] = "Infrastructure as a Service (IaaS)";
 choices[36][1] = "Platform as a Service (PaaS)";
 choices[36][2] = "Software as a Service (SaaS)";
 choices[36][3] = "Application as a Service (AaaS)";
 answers[36] = choices[36][1];
 units[36] = "52";
 comments[36] = "Id Pregunta: 10063. AGE A1 2015";


//  Id pregunta: 10066 Año de creación de pregunta: 2016
 questions[37]= "38)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Incremental, diferencial, completa";
 choices[37][1] = "Completa, incremental, diferencial";
 choices[37][2] = "Completa, diferencial, incremental";
 choices[37][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[37] = choices[37][0];
 units[37] = "53";
 comments[37] = "Id Pregunta: 10066. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 10051 Año de creación de pregunta: 2016
 questions[38]= "39)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[38]= new Array();
 choices[38][0] = "Cifrado de las comunicaciones";
 choices[38][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[38][2] = "Registro de los accesos";
 choices[38][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[38] = choices[38][1];
 units[38] = "35";
 comments[38] = "Id Pregunta: 10051. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 10058 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[39]= new Array();
 choices[39][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[39][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[39][2] = "Servicio de seguridad gestionada";
 choices[39][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[39] = choices[39][1];
 units[39] = "26";
 comments[39] = "Id Pregunta: 10058. AGE A1 2015";


//  Id pregunta: 10504 Año de creación de pregunta: 2016
 questions[40]= "41)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[40]= new Array();
 choices[40][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[40][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[40][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[40][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 10504. PRESUPUESTOS GENERALES";


//  Id pregunta: 10576 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[41]= new Array();
 choices[41][0] = "PostgreSQL";
 choices[41][1] = "Datawarehouse";
 choices[41][2] = "Snowflake";
 choices[41][3] = "CouchDB";
 answers[41] = choices[41][0];
 units[41] = "61";
 comments[41] = "Id Pregunta: 10576. Tema 61. TAI 2016.";


//  Id pregunta: 10461 Año de creación de pregunta: 2016
 questions[42]= "43)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[42]= new Array();
 choices[42][0] = "A los ministros.";
 choices[42][1] = "Las respuestas a) y b) son correctas.";
 choices[42][2] = "Las respuestas a) y b) no son correctas.";
 choices[42][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[42] = choices[42][1];
 units[42] = "10";
 comments[42] = "Id Pregunta: 10461. PRESUPUESTOS GENERALES";


//  Id pregunta: 10595 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[43]= new Array();
 choices[43][0] = "La CETIC";
 choices[43][1] = "Los Ministerios";
 choices[43][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[43][3] = "Ninguno de los anteriores";
 answers[43] = choices[43][1];
 units[43] = "19";
 comments[43] = "Id Pregunta: 10595. Estrategia TIC";


//  Id pregunta: 10091 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[44]= new Array();
 choices[44][0] = "JUnit, Artifactory y SonarQube";
 choices[44][1] = "JUnit, Artifactory y Selenium";
 choices[44][2] = "JUnit, SonarQube y Selenium";
 choices[44][3] = "ArtiFactory, SonarQube y Selenium";
 answers[44] = choices[44][2];
 units[44] = "92";
 comments[44] = "Id Pregunta: 10091. AGE A1 2015";


//  Id pregunta: 10217 Año de creación de pregunta: 2016
 questions[45]= "46)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[45]= new Array();
 choices[45][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[45][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[45][2] = "Son refrendados por el Rey.";
 choices[45][3] = "Son convocados por el Presidente del Gobierno.";
 answers[45] = choices[45][0];
 units[45] = "1";
 comments[45] = "Id Pregunta: 10217. CONSTITUCION1978";


//  Id pregunta: 10378 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[46]= new Array();
 choices[46][0] = "Quince miembros.";
 choices[46][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[46][2] = "Los miembros que determine el Consejo.";
 choices[46][3] = "Un Presidente y quince miembros.";
 answers[46] = choices[46][1];
 units[46] = "14";
 comments[46] = "Id Pregunta: 10378. UNION EUROPEA";


//  Id pregunta: 10425 Año de creación de pregunta: 2016
 questions[47]= "48)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[47]= new Array();
 choices[47][0] = "Presencia equilibrada.";
 choices[47][1] = "Presencia paritaria.";
 choices[47][2] = "Presencia consensuada.";
 choices[47][3] = "presencia horizontal.";
 answers[47] = choices[47][0];
 units[47] = "14";
 comments[47] = "Id Pregunta: 10425. POLITICAS DE IGUALDAD";


//  Id pregunta: 10492 Año de creación de pregunta: 2016
 questions[48]= "49)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[48]= new Array();
 choices[48][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[48][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[48][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[48][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[48] = choices[48][2];
 units[48] = "10";
 comments[48] = "Id Pregunta: 10492. PRESUPUESTOS GENERALES";


//  Id pregunta: 10330 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[49]= new Array();
 choices[49][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[49][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[49][2] = "Todas son correctas.";
 choices[49][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[49] = choices[49][2];
 units[49] = "5";
 comments[49] = "Id Pregunta: 10330. UNION EUROPEA";


//  Id pregunta: 10053 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[50]= new Array();
 choices[50][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[50][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[50][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[50][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[50] = choices[50][1];
 units[50] = "84";
 comments[50] = "Id Pregunta: 10053. AGE A1 2015";


//  Id pregunta: 10500 Año de creación de pregunta: 2016
 questions[51]= "52)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[51]= new Array();
 choices[51][0] = "El presidente de las Cortes Generales.";
 choices[51][1] = "El Presidente del Gobierno.";
 choices[51][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[51][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[51] = choices[51][3];
 units[51] = "10";
 comments[51] = "Id Pregunta: 10500. PRESUPUESTOS GENERALES";


//  Id pregunta: 10303 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[52]= new Array();
 choices[52][0] = "Veinticinco.";
 choices[52][1] = "Veintisiete.";
 choices[52][2] = "Veintinueve.";
 choices[52][3] = "Cuarenta y uno.";
 answers[52] = choices[52][1];
 units[52] = "5";
 comments[52] = "Id Pregunta: 10303. UNION EUROPEA";


//  Id pregunta: 10659 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[53]= new Array();
 choices[53][0] = "Orientaci&oacute;n a objetos";
 choices[53][1] = "MapReduce";
 choices[53][2] = "Pipeline filtering";
 choices[53][3] = "Programaci&oacute;n funcional";
 answers[53] = choices[53][1];
 units[53] = "73";
 comments[53] = "Id Pregunta: 10659. ";


//  Id pregunta: 10503 Año de creación de pregunta: 2016
 questions[54]= "55)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[54]= new Array();
 choices[54][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[54][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[54][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[54][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[54] = choices[54][3];
 units[54] = "10";
 comments[54] = "Id Pregunta: 10503. PRESUPUESTOS GENERALES";


//  Id pregunta: 10320 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[55]= new Array();
 choices[55][0] = "Al Consejo Europeo.";
 choices[55][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[55][2] = "A la Comisi&oacute;n Europea.";
 choices[55][3] = "Al Parlamento Europeo.";
 answers[55] = choices[55][2];
 units[55] = "5";
 comments[55] = "Id Pregunta: 10320. UNION EUROPEA";


//  Id pregunta: 10379 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[56]= new Array();
 choices[56][0] = "Anual.";
 choices[56][1] = "Semestral.";
 choices[56][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[56][3] = "Bienal.";
 answers[56] = choices[56][2];
 units[56] = "14";
 comments[56] = "Id Pregunta: 10379. POLITICAS DE IGUALDAD";


//  Id pregunta: 10043 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[57]= new Array();
 choices[57][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[57][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[57][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[57][3] = "El software funcionando es la medida principal del progreso.";
 answers[57] = choices[57][2];
 units[57] = "34";
 comments[57] = "Id Pregunta: 10043. AGE A1 2015";


//  Id pregunta: 10080 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[58]= new Array();
 choices[58][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[58][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[58][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[58][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[58] = choices[58][3];
 units[58] = "46";
 comments[58] = "Id Pregunta: 10080. AGE A1 2015";


//  Id pregunta: 10009 Año de creación de pregunta: 2016
 questions[59]= "60)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[59]= new Array();
 choices[59][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[59][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[59][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[59][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[59] = choices[59][1];
 units[59] = "95";
 comments[59] = "Id Pregunta: 10009. AGE A1 2015";


//  Id pregunta: 10341 Año de creación de pregunta: 2016
 questions[60]= "61)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[60]= new Array();
 choices[60][0] = "623";
 choices[60][1] = "649";
 choices[60][2] = "626";
 choices[60][3] = "565";
 answers[60] = choices[60][2];
 units[60] = "5";
 comments[60] = "Id Pregunta: 10341. UNION EUROPEA";


//  Id pregunta: 10032 Año de creación de pregunta: 2016
 questions[61]= "62)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[61]= new Array();
 choices[61][0] = "ASF-AL (Apache License 2.0)";
 choices[61][1] = "EUPL (European Union Public License)";
 choices[61][2] = "LGPL (Lesser General Public License)";
 choices[61][3] = "MIT(MIT License)";
 answers[61] = choices[61][1];
 units[61] = "43";
 comments[61] = "Id Pregunta: 10032. AGE A1 2015";


//  Id pregunta: 10400 Año de creación de pregunta: 2016
 questions[62]= "63)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[62]= new Array();
 choices[62][0] = "A la persona demandante.";
 choices[62][1] = "A la persona demandada.";
 choices[62][2] = "Al &oacute;rgano judicial.";
 choices[62][3] = "Al &oacute;rgano administrativo.";
 answers[62] = choices[62][1];
 units[62] = "14";
 comments[62] = "Id Pregunta: 10400. POLITICAS DE IGUALDAD";


//  Id pregunta: 10022 Año de creación de pregunta: 2016
 questions[63]= "64)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[63]= new Array();
 choices[63][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[63][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[63][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[63][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[63] = choices[63][1];
 units[63] = "26";
 comments[63] = "Id Pregunta: 10022. AGE A1 2015";


//  Id pregunta: 10139 Año de creación de pregunta: 2016
 questions[64]= "65)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[64]= new Array();
 choices[64][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[64][1] = "Static &amp; Active process for REsolution Bank.";
 choices[64][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[64][3] = "Super Active REsponse for Banks";
 answers[64] = choices[64][0];
 units[64] = "12";
 comments[64] = "Id Pregunta: 10139. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10676 Año de creación de pregunta: 2016
 questions[65]= "66)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[65]= new Array();
 choices[65][0] = "El servicio de teleasistencia.";
 choices[65][1] = "El servicio de ayuda a domicilio.";
 choices[65][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[65][3] = "Todas las anteriores son correctas.";
 answers[65] = choices[65][3];
 units[65] = "14";
 comments[65] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10394 Año de creación de pregunta: 2016
 questions[66]= "67)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[66]= new Array();
 choices[66][0] = "Discriminaci&oacute;n indirecta.";
 choices[66][1] = "Discriminaci&oacute;n directa.";
 choices[66][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[66][3] = "Discriminaci&oacute;n abusiva.";
 answers[66] = choices[66][0];
 units[66] = "14";
 comments[66] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10293 Año de creación de pregunta: 2016
 questions[67]= "68)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[67]= new Array();
 choices[67][0] = "Estrasburgo.";
 choices[67][1] = "Bruselas.";
 choices[67][2] = "Luxemburgo.";
 choices[67][3] = "Holanda.";
 answers[67] = choices[67][0];
 units[67] = "5";
 comments[67] = "Id Pregunta: 10293. UNION EUROPEA";


//  Id pregunta: 10458 Año de creación de pregunta: 2016
 questions[68]= "69)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[68]= new Array();
 choices[68][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[68][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[68][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[68][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[68] = choices[68][3];
 units[68] = "10";
 comments[68] = "Id Pregunta: 10458. PRESUPUESTOS GENERALES";


//  Id pregunta: 10260 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[69]= new Array();
 choices[69][0] = "117.5";
 choices[69][1] = "117.1";
 choices[69][2] = "116";
 choices[69][3] = "15";
 answers[69] = choices[69][0];
 units[69] = "1";
 comments[69] = "Id Pregunta: 10260. CONSTITUCION1978";


//  Id pregunta: 10545 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[70]= new Array();
 choices[70][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[70][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[70][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[70][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[70] = choices[70][1];
 units[70] = "26";
 comments[70] = "Id Pregunta: 10545. Gobernanza TIC";


//  Id pregunta: 10565 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[71]= new Array();
 choices[71][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[71][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[71][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[71][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[71] = choices[71][3];
 units[71] = "12";
 comments[71] = "Id Pregunta: 10565. Modelo econ&oacute;mico";


//  Id pregunta: 10577 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[72]= new Array();
 choices[72][0] = "El 2 de Octubre de 2015";
 choices[72][1] = "El 15 de Septiembre de 2015";
 choices[72][2] = "El 1 de Octubre de 2015";
 choices[72][3] = "El 5 de Octubre de 2015";
 answers[72] = choices[72][0];
 units[72] = "19";
 comments[72] = "Id Pregunta: 10577. Estrategia TIC";


//  Id pregunta: 10146 Año de creación de pregunta: 2016
 questions[73]= "74)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[73]= new Array();
 choices[73][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[73][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[73][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[73][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[73] = choices[73][0];
 units[73] = "8";
 comments[73] = "Id Pregunta: 10146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 10401 Año de creación de pregunta: 2016
 questions[74]= "75)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[74]= new Array();
 choices[74][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[74][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[74][2] = "Ambas son correctas.";
 choices[74][3] = "A y B son incorrectas.";
 answers[74] = choices[74][2];
 units[74] = "14";
 comments[74] = "Id Pregunta: 10401. POLITICAS DE IGUALDAD";


