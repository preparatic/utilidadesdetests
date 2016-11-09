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

//  Id pregunta: 166 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El T&iacute;tulo V de la LOPD trata sobre:";
 choices[0]= new Array();
 choices[0][0] = "Principios de la protecci&oacute;n de datos";
 choices[0][1] = "Derechos de las personas";
 choices[0][2] = "Movimiento internacional de datos";
 choices[0][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[0] = choices[0][2];
 units[0] = "29";
 comments[0] = "Id Pregunta: 166. ";


//  Id pregunta: 263 AÃ±o de creación de pregunta: 2009-01-01
 questions[1]= "2)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en el &aacute;mbito de la LOPD:";
 choices[1]= new Array();
 choices[1][0] = "La normativa de protecci&oacute;n de datos es aplicable s&oacute;lo a ficheros automatizados que contengan datos personales de personas f&iacute;sicas";
 choices[1][1] = "La normativa de protecci&oacute;n de datos es aplicable tanto a ficheros automatizados como no automatizados que contengan datos de car&aacute;cter personal";
 choices[1][2] = "La normativa de protecci&oacute;n de datos no es aplicable a personas f&iacute;sicas ni jur&iacute;dicas";
 choices[1][3] = "&quot;b&quot; y &quot;c&quot; son ciertas";
 answers[1] = choices[1][1];
 units[1] = "29";
 comments[1] = "Id Pregunta: 263. ";


//  Id pregunta: 337 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La realizaci&oacute;n de copias de &quot;backup&quot; peri&oacute;dicas en un centro de proceso de datos es responsabilidad del &aacute;rea de:";
 choices[2]= new Array();
 choices[2][0] = "Desarrollo";
 choices[2][1] = "Mantenimiento";
 choices[2][2] = "Producci&oacute;n";
 choices[2][3] = "En un centro de proceso de datos no es necesario hacer peri&oacute;dicamente copias de seguridad";
 answers[2] = choices[2][2];
 units[2] = "26";
 comments[2] = "Id Pregunta: 337. ";


//  Id pregunta: 430 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Seg&uacute;n Elton Mayo, el v&iacute;nculo que permite unificar los esfuerzos de los trabajadores en la consecuci&oacute;n de un fin com&uacute;n es:";
 choices[3]= new Array();
 choices[3][0] = "La autoridad";
 choices[3][1] = "La motivaci&oacute;n";
 choices[3][2] = "El deseo de autorrealizaci&oacute;n";
 choices[3][3] = "La comunicaci&oacute;n";
 answers[3] = choices[3][3];
 units[3] = "22";
 comments[3] = "Id Pregunta: 430. ";


//  Id pregunta: 455 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Ser&aacute; necesario el consentimiento del afectado cuando se trate de datos:";
 choices[4]= new Array();
 choices[4][0] = "Recogidos por las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[4][1] = "Cuando el tratamiento tenga por finalidad proteger un inter&eacute;s vital del interesado del art&iacute;culo 7, apartado 6 de la LOPD";
 choices[4][2] = "Que figuren en fuentes accesibles al p&uacute;blico";
 choices[4][3] = "Ninguna es correcta";
 answers[4] = choices[4][3];
 units[4] = "29";
 comments[4] = "Id Pregunta: 455. ";


//  Id pregunta: 516 AÃ±o de creación de pregunta: 2003-01-01
 questions[5]= "6)  Seg&uacute;n la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos del Consejo Superior de Inform&aacute;tica (MAGERIT) indicar a qu&eacute; concepto corresponde la siguiente definici&oacute;n &quot;Potencialidad o posibilidad de ocurrencia de materializaci&oacute;n de una amenaza sobre un activo&quot;:";
 choices[5]= new Array();
 choices[5][0] = "Salvaguarda";
 choices[5][1] = "Riesgo";
 choices[5][2] = "Impacto";
 choices[5][3] = "Vulnerabilidad";
 answers[5] = choices[5][3];
 units[5] = "31, 32, 33";
 comments[5] = "Id Pregunta: 516. ";


//  Id pregunta: 519 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  Si se estima en un 20% la probabilidad de un incidente que provoca una p&eacute;rdida de 10.000 euros, se est&aacute; hablando de:";
 choices[6]= new Array();
 choices[6][0] = "Un riesgo";
 choices[6][1] = "Un impacto";
 choices[6][2] = "Ninguna de las anteriores";
 choices[6][3] = "a ) y b)";
 answers[6] = choices[6][3];
 units[6] = "31, 32, 33";
 comments[6] = "Id Pregunta: 519. Auditor&iacute;a Inform&aacute;tica ";


//  Id pregunta: 535 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l es la variable m&aacute;s importante en un modelo PERT?";
 choices[7]= new Array();
 choices[7][0] = "riesgo";
 choices[7][1] = "coste";
 choices[7][2] = "impacto";
 choices[7][3] = "tiempo";
 answers[7] = choices[7][3];
 units[7] = "28";
 comments[7] = "Id Pregunta: 535. ";


//  Id pregunta: 917 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es Apache?:";
 choices[8]= new Array();
 choices[8][0] = "Una versi&oacute;n del sistema operativo Linux";
 choices[8][1] = "Un servidor web propiedad de Microsoft";
 choices[8][2] = "Una autoridad de certificaci&oacute;n ampliamente utilizada en Espa&ntilde;a";
 choices[8][3] = "Un servidor web del tipo &quot;software libre&quot;";
 answers[8] = choices[8][3];
 units[8] = "62";
 comments[8] = "Id Pregunta: 917. ";


//  Id pregunta: 1164 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En Windows 200x, los controladores de un dominio:";
 choices[9]= new Array();
 choices[9][0] = "Uno es primario (PDC) y los dem&aacute;s secundarios (BDC)";
 choices[9][1] = "Son todos secundarios, y asumen el rol de primario solo cuando llega una petici&oacute;n, volviendo despu&eacute;s a ser secundarios";
 choices[9][2] = "Hay varios primarios, y varios secundarios";
 choices[9][3] = "Todos son primarios";
 answers[9] = choices[9][3];
 units[9] = "56";
 comments[9] = "Id Pregunta: 1164. ";


//  Id pregunta: 1531 AÃ±o de creación de pregunta: 2003-01-01
 questions[10]= "11)  El Real Decreto 209/2003:";
 choices[10]= new Array();
 choices[10][0] = "Modifica  la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[10][1] = "Modifica  la denominaci&oacute;n del Consejo Superior de Inform&aacute;tica y regula los registros y las notificaciones telem&aacute;ticas";
 choices[10][2] = "Regula los registros y las notificaciones telem&aacute;ticas y modifica la ley 59/2003";
 choices[10][3] = "Todas las anteriores son ciertas";
 answers[10] = choices[10][1];
 units[10] = "30";
 comments[10] = "Id Pregunta: 1531. ";


//  Id pregunta: 1564 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los soportes que se indican a continuaci&oacute;n tiene una capacidad m&aacute;xima de 18 gigaoctetos en 2 capas y 2 caras?:";
 choices[11]= new Array();
 choices[11][0] = "DVD-R.";
 choices[11][1] = "DVD+R.";
 choices[11][2] = "DVD-ROM.";
 choices[11][3] = "DVD-RAM.";
 answers[11] = choices[11][2];
 units[11] = "48";
 comments[11] = "Id Pregunta: 1564. Junta Andaluc&iacute;a";


//  Id pregunta: 1848 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  ESTROFA:";
 choices[12]= new Array();
 choices[12][0] = "Especificaciones para el tratamiento de flujos automatizados";
 choices[12][1] = "Elaboradas por la COAXI hoy Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[12][2] = "Elaboradas con el fin de homogeneizar terminolog&iacute;a y asesorar a los compradores p&uacute;blicos a la hora de la adquisici&oacute;n de productos de Data Warehouse";
 choices[12][3] = "Todos los anteriores";
 answers[12] = choices[12][0];
 units[12] = "71";
 comments[12] = "Id Pregunta: 1848. ";


//  Id pregunta: 1992 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Al conjunto de est&aacute;ndares que permite que distintas herramientas CASE del mismo o distinto fabricante el intercambio de datos se denomina:";
 choices[13]= new Array();
 choices[13][0] = "MERISE.";
 choices[13][1] = "IPSE.";
 choices[13][2] = "MIDS.";
 choices[13][3] = "X/Open CASE.";
 answers[13] = choices[13][1];
 units[13] = "91";
 comments[13] = "Id Pregunta: 1992. ";


//  Id pregunta: 2129 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?";
 choices[14]= new Array();
 choices[14][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados";
 choices[14][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones";
 choices[14][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad";
 choices[14][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones";
 answers[14] = choices[14][2];
 units[14] = "82";
 comments[14] = "Id Pregunta: 2129. ";


//  Id pregunta: 2133 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes al paradigma de desarrollo mediante prototipos es cierta?:";
 choices[15]= new Array();
 choices[15][0] = "Est&aacute; indicado cuando las especificaciones funcionales del usuario no se pueden definir en una fase inicial del proyecto";
 choices[15][1] = "Est&aacute; indicado cuando varias aplicaciones independientemente desarrolladas deban ser ligadas estrechamente";
 choices[15][2] = "Coincide con el modelo de desarrollo evolutivo";
 choices[15][3] = "En este modelo, el sistema operativo, lenguaje de programaci&oacute;n y algoritmos son las &uacute;nicas coincidencias entre prototipo y sistema final";
 answers[15] = choices[15][0];
 units[15] = "85";
 comments[15] = "Id Pregunta: 2133. ";


//  Id pregunta: 2212 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Qu&eacute; expresa la dimensi&oacute;n angular del modelo en Espiral?:";
 choices[16]= new Array();
 choices[16][0] = "Es un indicador del gasto acumulativo del proyecto";
 choices[16][1] = "Representa el progreso hecho en completar cada ciclo de la espiral.";
 choices[16][2] = "En algunos casos no es posible delimitarla";
 choices[16][3] = "Se debe calcular, no s&oacute;lo en el modelo en espiral";
 answers[16] = choices[16][1];
 units[16] = "76";
 comments[16] = "Id Pregunta: 2212. ";


//  Id pregunta: 2348 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En un DFD el elemento usado para representar una actividad que transforma los flujos de entrada en otros de salida es:";
 choices[17]= new Array();
 choices[17][0] = "El programa";
 choices[17][1] = "El proceso";
 choices[17][2] = "El nodo";
 choices[17][3] = "La entidad";
 answers[17] = choices[17][1];
 units[17] = "81";
 comments[17] = "Id Pregunta: 2348. ";


//  Id pregunta: 2433 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Indicar a qu&eacute; corresponde la siguiente definici&oacute;n propuesta por el IEEE dentro del &aacute;mbito de la reingenier&iacute;a e ingenier&iacute;a inversa: &quot;la transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento&quot;";
 choices[18]= new Array();
 choices[18][0] = "Ingenier&iacute;a inversa";
 choices[18][1] = "Reestructuraci&oacute;n";
 choices[18][2] = "Reingenier&iacute;a";
 choices[18][3] = "Ingenier&iacute;a hacia delante";
 answers[18] = choices[18][1];
 units[18] = "91";
 comments[18] = "Id Pregunta: 2433. NULL";


//  Id pregunta: 2495 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;Las relaciones de un diagrama de clases pueden ser&quot;:";
 choices[19]= new Array();
 choices[19][0] = "Agregaci&oacute;n.";
 choices[19][1] = "Coherencia.";
 choices[19][2] = "Herencia.";
 choices[19][3] = "Dependencia.";
 answers[19] = choices[19][1];
 units[19] = "82,84";
 comments[19] = "Id Pregunta: 2495. ";


//  Id pregunta: 2682 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  Indique la afirmaci&oacute;n verdadera:";
 choices[20]= new Array();
 choices[20][0] = "El reconocimiento de patrones se utiliza para reconocer caracteres mono-espaciados.";
 choices[20][1] = "En la comparaci&oacute;n matricial los caracteres explorados pueden entrar en un bucle de b&uacute;squeda varias veces hasta que el emparejamiento se realiza con &eacute;xito.";
 choices[20][2] = "La comparaci&oacute;n matricial escanea la forma de los caracteresm, los compara con tablas de formas y examina la organizaci&oacute;n de los bits para  componer la letra o car&aacute;cter.";
 choices[20][3] = "La comparaci&oacute;n matricial ofrece mucha m&aacute;s flexibilidad que el m&eacute;todo de reconocimiento de patrones.";
 answers[20] = choices[20][1];
 units[20] = "94";
 comments[20] = "Id Pregunta: 2682. ";


//  Id pregunta: 2705 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Si por cada t&eacute;rmino, bien sea palabra clave, frase especial o &iacute;tem del tesauro, existe una lista de todos los documentos en los que aparece, a la que se suele a&ntilde;adir la longitud de esa lista (n&uacute;mero de referencias contenidas), estamos hablando de un siste";
 choices[21]= new Array();
 choices[21][0] = "De &iacute;ndices m&uacute;ltiples.";
 choices[21][1] = "De &iacute;ndices ";
 choices[21][2] = "De listas.";
 choices[21][3] = "De &iacute;ndices invertidos.";
 answers[21] = choices[21][3];
 units[21] = "96,95";
 comments[21] = "Id Pregunta: 2705. ";


//  Id pregunta: 2840 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  &iquest;En el modelo EFQM qu&eacute; porcentaje se da al liderazgo?";
 choices[22]= new Array();
 choices[22][0] = "15";
 choices[22][1] = "10";
 choices[22][2] = "20";
 choices[22][3] = "9";
 answers[22] = choices[22][1];
 units[22] = "92";
 comments[22] = "Id Pregunta: 2840. NULL";


//  Id pregunta: 2960 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  Qu&eacute; es falso a prop&oacute;sito de GPRS";
 choices[23]= new Array();
 choices[23][0] = "Utiliza una configuraci&oacute;n de frecuencias fija";
 choices[23][1] = "Es una red de paquetes";
 choices[23][2] = "Funciona reservando ranuras de tiempo en frecuencias determinadas para el intercambio de paquetes";
 choices[23][3] = "Est&aacute; construida encima de redes GSM";
 answers[23] = choices[23][0];
 units[23] = "108";
 comments[23] = "Id Pregunta: 2960. Tanenbaum";


//  Id pregunta: 3025 AÃ±o de creación de pregunta: 2004-01-01
 questions[24]= "25)  &iquest;Qu&eacute; no puede hacer un sistema de detecci&oacute;n de intrusos?";
 choices[24]= new Array();
 choices[24][0] = "Controlar el tr&aacute;fico de red dentro y fuera de los firewall";
 choices[24][1] = "Evitar que salten alarmas falsas";
 choices[24][2] = "Detectar tiempos de acceso anormales";
 choices[24][3] = "Guardar logs de los accesos";
 answers[24] = choices[24][0];
 units[24] = "111";
 comments[24] = "Id Pregunta: 3025. SS-A 2004";


//  Id pregunta: 3114 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;A qu&eacute; nivel OSI corresponden las funciones de encaminamiento?:";
 choices[25]= new Array();
 choices[25][0] = "El nivel de enlace";
 choices[25][1] = "El nivel de red";
 choices[25][2] = "El nivel de transporte";
 choices[25][3] = "El nivel de sesi&oacute;n";
 answers[25] = choices[25][1];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3114. NULL";


//  Id pregunta: 3143 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto de la fibra &oacute;ptica?:";
 choices[26]= new Array();
 choices[26][0] = "La fibra &oacute;ptica monomodo permite mayor ancho de banda que la multimodo pero es m&aacute;s complicado de hacer el conexionado";
 choices[26][1] = "La fibra &oacute;ptica multimodo permite mayor ancho de banda que la monomodo pero es m&aacute;s complicado de hacer el conexionado";
 choices[26][2] = "La fibra &oacute;ptica monomodo permite menor ancho de banda que la multimodo";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][0];
 units[26] = "99";
 comments[26] = "Id Pregunta: 3143. NULL";


//  Id pregunta: 3191 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Dentro del modelo OSI la funci&oacute;n de 'manejo de distintos terminales', corresponde al nivel:";
 choices[27]= new Array();
 choices[27][0] = "Nivel de red";
 choices[27][1] = "Nivel de transporte";
 choices[27][2] = "Nivel de sesi&oacute;n";
 choices[27][3] = "Nivel de presentaci&oacute;n";
 answers[27] = choices[27][3];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3191. NULL";


//  Id pregunta: 3213 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El error 404 seg&uacute;n el protocolo HTTP indica:";
 choices[28]= new Array();
 choices[28][0] = "mensaje de petici&oacute;n no reconocido";
 choices[28][1] = "redirecci&oacute;n por cambio de ubicaci&oacute;n del objeto pedido";
 choices[28][2] = "versi&oacute;n HTTP no soportada";
 choices[28][3] = "el objeto pedido no se encuentra en el servidor";
 answers[28] = choices[28][3];
 units[28] = "112";
 comments[28] = "Id Pregunta: 3213. ";


//  Id pregunta: 3486 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En ATM , &iquest;Qu&eacute; tipo de AAL (ATM Adaptation Layer) es el principal para datos, y juega un papel importante en emulaci&oacute;n de LAN?:";
 choices[29]= new Array();
 choices[29][0] = "AAL 1";
 choices[29][1] = "AAL 2";
 choices[29][2] = "AAL 3/4";
 choices[29][3] = "AAL 5";
 answers[29] = choices[29][3];
 units[29] = "109";
 comments[29] = "Id Pregunta: 3486. ";


//  Id pregunta: 3511 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En el protocolo HTTP, el m&eacute;todo HEAD:";
 choices[30]= new Array();
 choices[30][0] = "Es lo mismo que GET";
 choices[30][1] = "Recupera el cuerpo o Body del mensaje";
 choices[30][2] = "Las cabeceras no aparecen en GET pero s&iacute; en HEAD";
 choices[30][3] = "Se utiliza normalmente para ver la existencia del documento o su longitud";
 answers[30] = choices[30][3];
 units[30] = "112";
 comments[30] = "Id Pregunta: 3511. ";


//  Id pregunta: 3678 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Una red MAN es capaz de conectar estaciones de voz y datos en entornos metropolitanos, lo que suele entenderse por un di&aacute;metro de red de varias decenas de kil&oacute;metros. Entre estas se encuentra la denominada DQDB. Indique la opci&oacute;n correcta:";
 choices[31]= new Array();
 choices[31][0] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.6";
 choices[31][1] = "DQDB significa Dual Queue Distributed Bus, y esta contenida en la norma IEEE 802.9";
 choices[31][2] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.6";
 choices[31][3] = "DQDB significa Distributed Queue Dual Bus, y esta contenida en la norma IEEE 802.9";
 answers[31] = choices[31][2];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3678. ";


//  Id pregunta: 3687 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La versi&oacute;n europea de la tecnolog&iacute;a de sat&eacute;lites GPS americana se denomina:";
 choices[32]= new Array();
 choices[32][0] = "Kepler";
 choices[32][1] = "Galileo";
 choices[32][2] = "Marconi";
 choices[32][3] = "Hawking";
 answers[32] = choices[32][1];
 units[32] = "108";
 comments[32] = "Id Pregunta: 3687. ";


//  Id pregunta: 3785 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Respecto a la clase de QoS definido por el ATM Forum, UBR, puede decirse que:";
 choices[33]= new Array();
 choices[33][0] = "Asegura una cantidad m&iacute;nima de datos que pueden transmitirse a trav&eacute;s de la red";
 choices[33][1] = "Garantiza al menos una tasa de c&eacute;lulas transmitidas";
 choices[33][2] = "No garantiza ni siquiera un retardo m&aacute;ximo";
 choices[33][3] = "Tiene una tasa de bits concreta incluida en la especificaci&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "109";
 comments[33] = "Id Pregunta: 3785. ";


//  Id pregunta: 3860 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  El protocolo ARP";
 choices[34]= new Array();
 choices[34][0] = "Proporciona la traducci&oacute;n entre direcci&oacute;n IP y direcci&oacute;n LAN";
 choices[34][1] = "Proporciona una conversi&oacute;n entre direcci&oacute;n LAN y direcci&oacute;n IP";
 choices[34][2] = "Se utiliza en routers y bridges";
 choices[34][3] = "A y B son correctas";
 answers[34] = choices[34][0];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3860. Tanenbaum";


//  Id pregunta: 3912 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Cuando una copia de seguridad copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental, poniendo una marca de copiado a los archivos se habla de:";
 choices[35]= new Array();
 choices[35][0] = "Copia de seguridad incremental.";
 choices[35][1] = "Copia de seguridad diaria.";
 choices[35][2] = "Copia de seguridad intermedia.";
 choices[35][3] = "Copia de seguridad diferencial.";
 answers[35] = choices[35][0];
 units[35] = "97";
 comments[35] = "Id Pregunta: 3912. NULL";


//  Id pregunta: 3994 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En relaci&oacute;n a la gesti&oacute;n de red (se&ntilde;ale la falsa):";
 choices[36]= new Array();
 choices[36][0] = "Los modelos de gesti&oacute;n se pueden clasificar seg&uacute;n el grado de descentralizaci&oacute;n, el dominio, el grado de heterogeneidad y la jerarqu&iacute;a organizativa";
 choices[36][1] = "El est&aacute;ndar de OSI es SNMP (Symple Network Management Protocol)";
 choices[36][2] = "CMIP y SNMP utilizan MIB";
 choices[36][3] = "Todas son verdaderas";
 answers[36] = choices[36][1];
 units[36] = "104";
 comments[36] = "Id Pregunta: 3994. ";


//  Id pregunta: 4349 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  La red de investigaci&oacute;n espa&ntilde;ola encargada de dar servicio Internet a universidades y centros de investigaci&oacute;n es:";
 choices[37]= new Array();
 choices[37][0] = "La intranet del CSIC";
 choices[37][1] = "No existe una red propia de investigaci&oacute;n, utilizando los servicios que ofrece Internet.";
 choices[37][2] = "RedIRIS.";
 choices[37][3] = "La Intranet Administrativa.";
 answers[37] = choices[37][2];
 units[37] = "103";
 comments[37] = "Id Pregunta: 4349. ";


//  Id pregunta: 4397 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Los dos esquemas empleados en la recuperaci&oacute;n de errores en el procesamiento de transacciones son:";
 choices[38]= new Array();
 choices[38][0] = "Detecci&oacute;n y recuperaci&oacute;n.";
 choices[38][1] = "La prevenci&oacute;n y el ignorarlos.";
 choices[38][2] = "Sem&aacute;foros y monitores.";
 choices[38][3] = "Hacia delante y hacia atr&aacute;s.";
 answers[38] = choices[38][3];
 units[38] = "83";
 comments[38] = "Id Pregunta: 4397. ";


//  Id pregunta: 4460 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Si modificamos un programa protegido por licencia GPL el resultado debemos protegerlo con una licencia";
 choices[39]= new Array();
 choices[39][0] = "EULA";
 choices[39][1] = "BSD";
 choices[39][2] = "GPL";
 choices[39][3] = "No podemos ponerlo licencia alguna";
 answers[39] = choices[39][2];
 units[39] = "36";
 comments[39] = "Id Pregunta: 4460. ";


//  Id pregunta: 4679 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Defina Throughput:";
 choices[40]= new Array();
 choices[40][0] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado (medido entrabajos por hora o transacciones por segundo)";
 choices[40][1] = "M&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 choices[40][2] = "&quot;swing job&quot; o trabajo excedentario que se puede realizar antes de llegar a la saturaci&oacute;n (medido en trabajospor hora o transacciones por segundo)";
 choices[40][3] = "M&iacute;nima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 answers[40] = choices[40][0];
 units[40] = "89";
 comments[40] = "Id Pregunta: 4679. Examen 2006 JCYL";


//  Id pregunta: 4698 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue eleconomista";
 choices[41]= new Array();
 choices[41][0] = "Fritz Machlup";
 choices[41][1] = "Charles Babbage";
 choices[41][2] = "Herman Hollerith";
 choices[41][3] = "Howard Aiken";
 answers[41] = choices[41][0];
 units[41] = "30";
 comments[41] = "Id Pregunta: 4698. Examen 2006 JCYL";


//  Id pregunta: 4700 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  IESG (Internet Engineering Steering Group) se encarga de:";
 choices[42]= new Array();
 choices[42][0] = "Coordinaci&oacute;n entre organizaciones.";
 choices[42][1] = "Asignaci&oacute;n de recursos.";
 choices[42][2] = "La supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[42][3] = "Especificaci&oacute;n de est&aacute;ndares";
 answers[42] = choices[42][0];
 units[42] = "42";
 comments[42] = "Id Pregunta: 4700. Examen 2006 JCYL";


//  Id pregunta: 4728 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  La primera fase del desarrollo software seg&uacute;n M&eacute;trica Versi&oacute;n 3 es:";
 choices[43]= new Array();
 choices[43][0] = "Estudio de Viabilidad del Sistema";
 choices[43][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[43][2] = "Concepci&oacute;n del Sistema";
 choices[43][3] = "Estudio del Sistema Actual";
 answers[43] = choices[43][0];
 units[43] = "86";
 comments[43] = "Id Pregunta: 4728. Examen 2006 JCYL";


//  Id pregunta: 4947 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Despu&eacute;s de un cambio en un sistema de informaci&oacute;n, &iquest;qu&eacute; pruebas es necesario realizar para comprobar que los cambios realizados no han afectado a otros componentes no modificados?:";
 choices[44]= new Array();
 choices[44][0] = "Pruebas de implantaci&oacute;n.";
 choices[44][1] = "Pruebas de sostenibilidad.";
 choices[44][2] = "Pruebas de regresi&oacute;n.";
 choices[44][3] = "Pruebas del sistema.";
 answers[44] = choices[44][2];
 units[44] = "87";
 comments[44] = "Id Pregunta: 4947. Examen TIC B 2007";


//  Id pregunta: 5153 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  De los siguientes enunciados indique cu&aacute;l es FALSO:";
 choices[45]= new Array();
 choices[45][0] = "Los servlets JAVA permiten que la l&oacute;gica de apliaci&oacute;n sea integrada en el proceso de solicitudes y respuestas HTTP.";
 choices[45][1] = "Los servlets JAVA son programas peque&ntilde;os de lado servidor independientes de la plataforma.";
 choices[45][2] = "Los servlets JAVA ampl&iacute;an program&aacute;ticamente la funcionalidad del servidor Web.";
 choices[45][3] = "Los servlets JAVA son programas que ampl&iacute;an la funcionalidad del cliente Web y que dependen de la plataforma.";
 answers[45] = choices[45][3];
 units[45] = "116";
 comments[45] = "Id Pregunta: 5153. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5247 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Indicar entre las siguientes, cu&aacute;l no se ajusta a definici&oacute;n de calidad del software";
 choices[46]= new Array();
 choices[46][0] = "Conformidad a los requisitos funcionales y prestaciones establecidas, a las normas de desarrollo expl&iacute;citamente documentadas y a las caracter&iacute;sticas impl&iacute;citas que se esperan de todo software desarrollado profesionalmente";
 choices[46][1] = "Creaci&oacute;n de productos software que tanto eficaz como eficientemente cumplan las expectativas del usuario";
 choices[46][2] = "La ausencia de errores o defectos, siendo &eacute;stos las desviaciones respecto al comportamiento esperado";
 choices[46][3] = "Todas las anteriores son definiciones de calidad del software";
 answers[46] = choices[46][3];
 units[46] = "87";
 comments[46] = "Id Pregunta: 5247. NULL";


//  Id pregunta: 5557 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  La Ley de Medidas de Impulso de la Sociedad de la Informaci&oacute;n NO flexibiliza:";
 choices[47]= new Array();
 choices[47][0] = "Las obligaciones referidas a las comunicaciones comerciales y a la contrataci&oacute;n electr&oacute;nica.";
 choices[47][1] = "La obligaci&oacute;n de informar a los clientes, sobre medidas de seguridad aplicadas a los servicios prestados y la funci&oacute;n de informar sobre responsabilidades por el uso de Internet con fines il&iacute;citos. ";
 choices[47][2] = "Las obligaciones referidas  a la constancia registral de los nombre de dominio de empresas prestadoras de servicios de la sociedad de la informaci&oacute;n.";
 choices[47][3] = "La obligaci&oacute;n de los PSC de comprobar los datos inscritos en registros p&uacute;blicos.";
 answers[47] = choices[47][1];
 units[47] = "30";
 comments[47] = "Id Pregunta: 5557. ";


//  Id pregunta: 5587 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;les son los procedimientos de adjudicaci&oacute;n que contempla el RD legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[48]= new Array();
 choices[48][0] = "Abierto, restringido y negociado";
 choices[48][1] = "Abierto, restringido, negociado y dedicado";
 choices[48][2] = "Abierto, restringido, negociado y por di&aacute;logo competitivo";
 choices[48][3] = "Ninguno de los anteriores es correcto";
 answers[48] = choices[48][2];
 units[48] = "41";
 comments[48] = "Id Pregunta: 5587. ";


//  Id pregunta: 5753 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  &iquest;Por qu&eacute; el algoritmo DSA no sirve para cifrar?";
 choices[49]= new Array();
 choices[49][0] = "Porque al realizar funciones modulo x (donde x es uno de los valores p&uacute;blicos del sistema) no se puede realizar su inversi&oacute;n";
 choices[49][1] = "Porque realiza un hash del mensaje, por tanto no es recuperable";
 choices[49][2] = "Porque tendr&iacute;amos que enviar la clave privada";
 choices[49][3] = "No es cierto, el algoritmo DSA s&iacute; sirve para cifrar";
 answers[49] = choices[49][1];
 units[49] = "72";
 comments[49] = "Id Pregunta: 5753. ";


//  Id pregunta: 5859 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  Indique la ventaja de los sistemas RFID (Radio Frecuency Identification) de baja frecuencia:";
 choices[50]= new Array();
 choices[50][0] = "Soportan la lectura simult&aacute;nea de varias etiquetas";
 choices[50][1] = "El coste de las etiquetas es bajo debido al peque&ntilde;o tama&ntilde;o de su antena";
 choices[50][2] = "Poseen alta tasas de transmisi&oacute;n";
 choices[50][3] = "Su se&ntilde;al atraviesa materiales tales como el agua, la madera y el aluminio";
 answers[50] = choices[50][3];
 units[50] = "74";
 comments[50] = "Id Pregunta: 5859. Pregunta 39";


//  Id pregunta: 6060 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  El modelo de capacidad y madurez (CMM, Capability Maturity Model) agrupa las &aacute;reas de proceso en 5 niveles de madurez, que son los siguientes:";
 choices[51]= new Array();
 choices[51][0] = "Inicial, repetible, definido, gestionado y optimizado.";
 choices[51][1] = "Inicial, repetible, eficaz, eficiente y optimizado.";
 choices[51][2] = "Inicial, definido, medido, adaptado y optimizado.";
 choices[51][3] = "Inicial, repetible, comprometido, gestionado y optimizado.";
 answers[51] = choices[51][0];
 units[51] = "27";
 comments[51] = "Id Pregunta: 6060. TIC A 2009";


//  Id pregunta: 6082 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Cu&aacute;l de los siguientes NO es un principio arquitect&oacute;nico b&aacute;sico intr&iacute;nsicamente aplicable a arquitecturas SOA:";
 choices[52]= new Array();
 choices[52][0] = "Encapsulaci&oacute;n";
 choices[52][1] = "D&eacute;bil acoplamiento";
 choices[52][2] = "Composici&oacute;n";
 choices[52][3] = "Polimorfismo";
 answers[52] = choices[52][3];
 units[52] = "51";
 comments[52] = "Id Pregunta: 6082. NULL";


//  Id pregunta: 6146 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;En el PDM, cu&aacute;l es el tipo de relaci&oacute;n de precedencia m&aacute;s comunmente utilizado?";
 choices[53]= new Array();
 choices[53][0] = "Inicio a fin";
 choices[53][1] = "Final a inicio";
 choices[53][2] = "Final a final";
 choices[53][3] = "Inicio a inicio";
 answers[53] = choices[53][1];
 units[53] = "28";
 comments[53] = "Id Pregunta: 6146. ";


//  Id pregunta: 6178 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Se&ntilde;ale la informaci&oacute;n falsa sobre AJAX:";
 choices[54]= new Array();
 choices[54][0] = "Las aplicaciones desarrolladas con AJAX usan Javascript y XML.";
 choices[54][1] = "Las aplicaciones desarrolladas con AJAX tienen una mejor experiencia de usuario.";
 choices[54][2] = "AJAX es la base de las Rich Internet Applications.";
 choices[54][3] = "Las aplicaciones AJAX son de tipo pull.";
 answers[54] = choices[54][3];
 units[54] = "69";
 comments[54] = "Id Pregunta: 6178. NULL";


//  Id pregunta: 6226 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Qu&eacute; esquema de bases de datos incluye la descripci&oacute;n de todos los datos e interrelaciones entre &eacute;stos, as&iacute; como las restricciones de integridad y de confidencialidad";
 choices[55]= new Array();
 choices[55][0] = "Esquema interno";
 choices[55][1] = "Esquema conceptual";
 choices[55][2] = "Esquema externo";
 choices[55][3] = "Esquema f&iacute;sico";
 answers[55] = choices[55][1];
 units[55] = "57";
 comments[55] = "Id Pregunta: 6226. TICB-2009, bloque desarrollo";


//  Id pregunta: 6290 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;C&oacute;mo pueden clasificarse los requisitos de un an&aacute;lisis de sistema de informaci&oacute;n seg&uacute;n Sommerville?";
 choices[56]= new Array();
 choices[56][0] = "Requisitos principales y requisitos secundarios";
 choices[56][1] = "Requisitos del cliente y requisitos de la empresa";
 choices[56][2] = "Requisitos a nivel de sistema y requisitos a nivel de software";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][2];
 units[56] = "78";
 comments[56] = "Id Pregunta: 6290. ";


//  Id pregunta: 6321 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Las reglas de integridad en una base de datos relacional son:";
 choices[57]= new Array();
 choices[57][0] = "Integridad de claves con las claves ajenas";
 choices[57][1] = "Integridad de entidad e integridad referencial";
 choices[57][2] = "Integridad referente a las claves";
 choices[57][3] = "Restricciones de usuario y claves primarias no nulas";
 answers[57] = choices[57][1];
 units[57] = "58";
 comments[57] = "Id Pregunta: 6321. ";


//  Id pregunta: 6351 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  La ley sobre reutilizaci&oacute;n de la informaci&oacute;n  del sector p&uacute;blico es la ley";
 choices[58]= new Array();
 choices[58][0] = "Ley 37/2007";
 choices[58][1] = "Ley 32/2005";
 choices[58][2] = "Ley 25/2007";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = choices[58][0];
 units[58] = "30";
 comments[58] = "Id Pregunta: 6351. Ley 37/2007";


//  Id pregunta: 6388 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En relaci&oacute;n a las sedes electr&oacute;nicas derivadas, o subsedes, se&ntilde;ale la respuesta incorrecta:";
 choices[59]= new Array();
 choices[59][0] = "Las sedes electr&oacute;nicas derivadas, o subsedes, deber&aacute;n resultar accesibles desde la direcci&oacute;n electr&oacute;nica de la sede principal.";
 choices[59][1] = "Las sedes electr&oacute;nicas derivadas, o subsedes podran ser accesibles mediante acceso electr&oacute;nico directo.";
 choices[59][2] = "Su &aacute;mbito de aplicaci&oacute;n comprender&aacute; &oacute;rgano u &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[59][3] = "Las sedes electr&oacute;nicas derivadas deber&aacute;n cumplir los mismos requisitos que las sedes electr&oacute;nicas principales, salvo en lo relativo a la publicaci&oacute;n de la orden o resoluci&oacute;n por la que se crea, que se realizar&aacute; a trav&eacute;s de la sede de la que dependan.";
 answers[59] = choices[59][2];
 units[59] = "43";
 comments[59] = "Id Pregunta: 6388. Art&iacute;culo 4 RD 1671/2009";


//  Id pregunta: 6647 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Seg&uacute;n la nomenclatura de Boehm en el modelo COCOMO los proyectos pueden ser:";
 choices[60]= new Array();
 choices[60][0] = "Org&aacute;nicos, semiorg&aacute;nicos y empotrados";
 choices[60][1] = "Org&aacute;nicos, acoplados y empotrados";
 choices[60][2] = "Org&aacute;nicos, acoplados y semiempotrados";
 choices[60][3] = "Org&aacute;nicos, empotrados y semiacoplados";
 answers[60] = choices[60][3];
 units[60] = "89";
 comments[60] = "Id Pregunta: 6647. NULL";


//  Id pregunta: 7950 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)   &iquest;Cu&aacute;l de las siguientes afirmaciones relacionadas con Dublin Core NO es cierta?";
 choices[61]= new Array();
 choices[61][0] = " El conjunto de sus elementos est&aacute; definido en el Est&aacute;ndar Z39.85001 de la NISO (National Information Standards Organization).";
 choices[61][1] = " Los metadatos Dublin Core se almacenan frecuentemente en la cabecera HEAD de un documento HTML (Hypertext Markup Language).";
 choices[61][2] = " Su nivel b&aacute;sico contiene 15 elementos sobre metadatos.";
 choices[61][3] = " Es una iniciativa de la W3C (World Wide Web Consortium).";
 answers[61] = choices[61][3];
 units[61] = "NULL";
 comments[61] = "Id Pregunta: 7950. Map 2006";


//  Id pregunta: 7987 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)   Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n de la vigencia de un certificado?";
 choices[62]= new Array();
 choices[62][0] = " Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado.";
 choices[62][1] = " Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por este, un tercero autorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica.";
 choices[62][2] = " Resoluci&oacute;n judicial o administrativa que lo ordene.";
 choices[62][3] = " Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador de servicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso.";
 answers[62] = choices[62][3];
 units[62] = "NULL";
 comments[62] = "Id Pregunta: 7987. Map 2007";


//  Id pregunta: 8014 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el Protocolo SSL (&laquo;Secure Socket Layer&raquo;) es correcta?";
 choices[63]= new Array();
 choices[63][0] = " Solo proporciona servicios de seguridad para el protocolo HTTP (&laquo;HyperText Transfer Protocol&raquo;).";
 choices[63][1] = " Utiliza mecanismos de criptograf&iacute;a asim&eacute;trica para garantizar la confidencialidad de los datos a transmitir.";
 choices[63][2] = "El protocolo se implementa entre los niveles de Transporte y de Red.";
 choices[63][3] = " Los servicios de seguridad que proporciona son transparentes al usuario y a la aplicaci&oacute;n.";
 answers[63] = choices[63][3];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 8014. Map 2007";


//  Id pregunta: 8015 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   &iquest;Cu&aacute;l de las siguientes normas regula la expedici&oacute;n del DNI y sus certificados de firma electr&oacute;nica?";
 choices[64]= new Array();
 choices[64][0] = " RD 153/2005, de 14 de enero.";
 choices[64][1] = " RD 1553/2005, de 23 de diciembre.";
 choices[64][2] = " RD 1555/2003, de 29 de mayo.";
 choices[64][3] = " RD 155/2003, de 15 de septiembre.";
 answers[64] = choices[64][1];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 8015. Map 2007";


//  Id pregunta: 8165 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l es la vigencia temporal de los certificados electr&oacute;nicos contenidos en el DNIe?:";
 choices[65]= new Array();
 choices[65][0] = "Ilimitada.";
 choices[65][1] = "No podr&aacute; ser superior a 5 a&ntilde;os.";
 choices[65][2] = "30 meses.";
 choices[65][3] = "El certificado de autenticidad 24 meses y el de firma 18.";
 answers[65] = choices[65][1];
 units[65] = "74";
 comments[65] = "Id Pregunta: 8165. Examen TIC A1 2010. RD 414/2015 que modifica el RD 1553/2005 de expedici&oacute;n del DNI.";


//  Id pregunta: 8197 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Indique cu&aacute;l es el cuadrado del n&uacute;mero hexadecimal 0xFFFF: ";
 choices[66]= new Array();
 choices[66][0] = "0x100000001. ";
 choices[66][1] = "0xFFFFFFFF.";
 choices[66][2] = "0xFFFE0001.";
 choices[66][3] = "0xFFFE0002";
 answers[66] = choices[66][2];
 units[66] = "46";
 comments[66] = "Id Pregunta: 8197. Examen TIC A1 2010";


//  Id pregunta: 8406 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Cu&aacute;l de las siguientes afirmaciones en referencia a la arquitectura de computadores CISC (Complex Instruction Set Computer) es FALSA?";
 choices[67]= new Array();
 choices[67][0] = "Se caracteriza por tener un juego de instrucciones muy amplio.";
 choices[67][1] = "Tiene muchos modos de direccionamiento";
 choices[67][2] = "Tiene varios formatos de instrucci&oacute;n (de longitud variable)";
 choices[67][3] = "Su unidad de control es cableada";
 answers[67] = choices[67][3];
 units[67] = "46";
 comments[67] = "Id Pregunta: 8406. Examen TIC A2 2010";


//  Id pregunta: 8550 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  ";
 choices[68]= new Array();
 choices[68][0] = "";
 choices[68][1] = "";
 choices[68][2] = "";
 choices[68][3] = "";
//  Id pregunta: 8647 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;A cu&aacute;l de las siguientes opciones corresponde la definici&oacute;n siguiente?: &quot;Un medio a trav&eacute;s del cual se simula el aspecto visual del sistema mediante la representaci&oacute;n de los conceptos, componentes, objetos gr&aacute;ficos, entradas y salidas requeridas para la ejecuci&oacute;n de cada funci&oacute;n en respuesta a las necesidades planteadas.&quot;";
 choices[69]= new Array();
 choices[69][0] = "Dise&ntilde;o orientado a objetos.";
 choices[69][1] = "JRP";
 choices[69][2] = "Prototipado.";
 choices[69][3] = "JAD";
 answers[69] = choices[69][2];
 units[69] = "85";
 comments[69] = "Id Pregunta: 8647. Examen TIC A2 2010 interna";


//  Id pregunta: 8733 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Elija la afirmaci&oacute;n correcta, en relaci&oacute;n con el contenido de la tarjeta chip del DNI electr&oacute;nico:";
 choices[70]= new Array();
 choices[70][0] = "Se incluye un certificado electr&oacute;nico &uacute;nico, personal e intransferible, con la doble funcionalidad de firma electr&oacute;nica y de autenticaci&oacute;n.";
 choices[70][1] = "Se incluyen, entre otros los datos de filiaci&oacute;n del ciudadano (los mismos que est&aacute;n impresos en el soporte f&iacute;sico del DNI), junto con una imagen de la fotograf&iacute;a";
 choices[70][2] = "Los datos contenidos, en todo caso, s&oacute;lo son accesibles en lectura por el ciudadano, mediante la utilizaci&oacute;n de la Clave Personal de Acceso o PIN. como garant&iacute;a de confidencialidad";
 choices[70][3] = "No se incluye una imagen de la fotograf&iacute;a";
 answers[70] = choices[70][1];
 units[70] = "74";
 comments[70] = "Id Pregunta: 8733. Examen TIC A2 2010 interna";


//  Id pregunta: 8820 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  El objetivo del Plan de Sistemas de Informaci&oacute;n es:";
 choices[71]= new Array();
 choices[71][0] = "Proporcionar un marco estrat&eacute;gico que sirva de referencia para los Sistemas de Informaci&oacute;n de un &aacute;mbito concreto de una organizaci&oacute;n.";
 choices[71][1] = "El an&aacute;lisis de un conjunto concreto de necesidades para proponer una soluci&oacute;n a corto plazo, que tenga en cuenta restricciones econ&oacute;micas, t&eacute;cnicas, legales y operativas.";
 choices[71][2] = "a y b son correctas.";
 choices[71][3] = "Ninguna de las anteriores.";
 answers[71] = choices[71][0];
 units[71] = "27, 86";
 comments[71] = "Id Pregunta: 8820. Examen UPM A2 2011";


//  Id pregunta: 8855 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; tipo de driver JDBC conecta a la base de datos directamente usando su protocolo nativo?";
 choices[72]= new Array();
 choices[72][0] = "Type 1 JDBC Driver";
 choices[72][1] = "Type 2 JDBC Driver";
 choices[72][2] = "Type 3 JDBC Driver";
 choices[72][3] = "Type 4 JDBC Driver";
 answers[72] = choices[72][3];
 units[72] = "58, 60";
 comments[72] = "Id Pregunta: 8855. Analista Ayto. Madrid 2010";


//  Id pregunta: 8981 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Qu&eacute; es Synaptics en el entorno Linux?";
 choices[73]= new Array();
 choices[73][0] = "Un editor de texto avanzado";
 choices[73][1] = "Un front-end del sistema de gesti&oacute;n de paquetes de software";
 choices[73][2] = "Un sistema de monitorizaci&oacute;n de recursos";
 choices[73][3] = "Un gestor de cuentas de usuario";
 answers[73] = choices[73][1];
 units[73] = "54";
 comments[73] = "Id Pregunta: 8981. ";


//  Id pregunta: 9037 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Cual de las firmas Xades a&ntilde;ade referencias a datos de verificaci&oacute;n (certificados y listas de revocaci&oacute;n) a los documentos firmados";
 choices[74]= new Array();
 choices[74][0] = "Xades-BES";
 choices[74][1] = "Xades-T";
 choices[74][2] = "Xades-C";
 choices[74][3] = "Xades-EPES";
 answers[74] = choices[74][2];
 units[74] = "72";
 comments[74] = "Id Pregunta: 9037. ";


//  Id pregunta: 9145 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;ntos cent&iacute;meros tiene el Blu-ray?";
 choices[75]= new Array();
 choices[75][0] = "12";
 choices[75][1] = "13";
 choices[75][2] = "11";
 choices[75][3] = "15";
 answers[75] = choices[75][0];
 units[75] = "47";
 comments[75] = "Id Pregunta: 9145. ";


//  Id pregunta: 9152 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Respecto a los LMS, indique la respuesta FALSA: ";
 choices[76]= new Array();
 choices[76][0] = "Permite el an&aacute;lisis de los resultados de la formaci&oacute;n";
 choices[76][1] = "Incluye funciones de gesti&oacute;n de procesos de creaci&oacute;n de contenido";
 choices[76][2] = "Permite el intercambio de datos entre profesores y alumnos";
 choices[76][3] = "Est&aacute; dedicado a la difusi&oacute;n de los contenidos docentes";
 answers[76] = choices[76][1];
 units[76] = "66";
 comments[76] = "Id Pregunta: 9152. ";


//  Id pregunta: 9161 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  En el &aacute;mbito de los Sistemas de Informaci&oacute;n Geogr&aacute;fica, &iquest;qu&eacute; es un gazeteer?";
 choices[77]= new Array();
 choices[77][0] = "Directorio de referencias geogr&aacute;ficas";
 choices[77][1] = "Capa raster de informaci&oacute;n topol&oacute;gica";
 choices[77][2] = "Capa vectorial de informaci&oacute;n topol&oacute;gica";
 choices[77][3] = "Ninguna de las anteriores es correcta";
 answers[77] = choices[77][0];
 units[77] = "67";
 comments[77] = "Id Pregunta: 9161. NULL";


//  Id pregunta: 9195 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[78]= new Array();
 choices[78][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[78][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[78][2] = "toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[78][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[78] = choices[78][2];
 units[78] = "36";
 comments[78] = "Id Pregunta: 9195. ";


//  Id pregunta: 9224 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;En qu&eacute; se parece CICS e IMS?";
 choices[79]= new Array();
 choices[79][0] = "Ambos son sistemas transaccionales";
 choices[79][1] = "No tienen nada que ver";
 choices[79][2] = "Son protocolos de acceso a ficheros";
 choices[79][3] = "Son correctas A) y C)";
 answers[79] = choices[79][0];
 units[79] = "49";
 comments[79] = "Id Pregunta: 9224. ";


//  Id pregunta: 9511 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l es la API est&aacute;ndar para conectar programas desarrollados en Java con un sistema gestor de base de datos?";
 choices[80]= new Array();
 choices[80][0] = "JAXP";
 choices[80][1] = "StAX";
 choices[80][2] = "JAF";
 choices[80][3] = "JDBC";
 answers[80] = choices[80][3];
 units[80] = "116";
 comments[80] = "Id Pregunta: 9511. NULL";


//  Id pregunta: 9611 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; es el FSQL?";
 choices[81]= new Array();
 choices[81][0] = "Una versi&oacute;n de SQL que se usa en la ingenier&iacute;a hacia adelante.";
 choices[81][1] = "Una versi&oacute;n de SQL que se usa para l&oacute;gica difusa";
 choices[81][2] = "Una versi&oacute;n de SQL que se usa para memorias asociativas";
 choices[81][3] = "Una versi&oacute;n de SQL que se usa en sistemas distribuidos";
 answers[81] = choices[81][1];
 units[81] = "58";
 comments[81] = "Id Pregunta: 9611. NULL";


//  Id pregunta: 9760 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  La aplicaci&oacute;n para la presentaci&oacute;n telem&aacute;tica de proposiciones a los procedimientos de adopci&oacute;n de tipo de bienes y serviciosde adquisici&oacute;n centralizada, se denomina:";
 choices[82]= new Array();
 choices[82][0] = "CONECTA-PATRIMONIO";
 choices[82][1] = "PITER";
 choices[82][2] = "CONECTA-CENTRALIZACI&Oacute;N";
 choices[82][3] = "No existe tal aplicaci&oacute;n";
 answers[82] = choices[82][2];
 units[82] = "41";
 comments[82] = "Id Pregunta: 9760. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. Tramitaci&oacute;n de solicitudes a trav&eacute;s de CONECTA  CENTRALIZACI&Oacute;N.";


//  Id pregunta: 9861 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Indique la respuesta falsa:";
 choices[83]= new Array();
 choices[83][0] = "OAuth (Open Authorization) es un protocolo abierto que permite autorizaci&oacute;n segura de una API de modo est&aacute;ndar y simple para aplicaciones de escritorio, m&oacute;viles y web.";
 choices[83][1] = "OAuth y OpenID son protocolos id&eacute;nticos. ";
 choices[83][2] = "OpenID es un est&aacute;ndar de identificaci&oacute;n digital descentralizado, con el que un usuario puede identificarse en una p&aacute;gina web a trav&eacute;s de una URL o XRI.";
 choices[83][3] = "A diferencia de arquitecturas Single Sign-On, OpenId no especifica el mecanismo de autenticaci&oacute;n.";
 answers[83] = choices[83][1];
 units[83] = "118";
 comments[83] = "Id Pregunta: 9861. Oauth y OpenID son completamente diferentes. El resto de respuestas son ciertas.";


//  Id pregunta: 9877 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  La norma ISO 27002";
 choices[84]= new Array();
 choices[84][0] = "es un est&aacute;ndar de facto para la prestaci&oacute;n de servicios de seguridad de la Tecnolog&iacute;a de la Informaci&oacute;n";
 choices[84][1] = "tiene como objetivo proporcionar una base com&uacute;n para la gesti&oacute;n de la seguridad dentro de las organizaciones.";
 choices[84][2] = "establece 36 dominios de control para la gesti&oacute;n de la seguridad.";
 choices[84][3] = "establece un sistema de certificaci&oacute;n adecuado a la norma.";
 answers[84] = choices[84][1];
 units[84] = "107";
 comments[84] = "Id Pregunta: 9877. TIC A1, Examen 2013";


//  Id pregunta: 9911 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes contradice un principio de las metodolog&iacute;as &aacute;giles de desarrollo software (principios del Manifiesto &Aacute;gil)?";
 choices[85]= new Array();
 choices[85][0] = "Son bienvenidos los requisitos cambiantes, incluso si llegan en las etapas tard&iacute;as del desarrollo.";
 choices[85][1] = "Los responsables de negocio y los desarrolladores trabajan juntos de forma cotidiana durante todo el proyecto.";
 choices[85][2] = "El software, en su fase de dise&ntilde;o, es la medida principal de progreso.";
 choices[85][3] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 answers[85] = choices[85][2];
 units[85] = "79";
 comments[85] = "Id Pregunta: 9911. TIC A2, Examen 2013";


//  Id pregunta: 9952 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula los procesos de ciclo de vida del software?";
 choices[86]= new Array();
 choices[86][0] = "ISO/IEC 12207:2008";
 choices[86][1] = "ISO 9001:2008";
 choices[86][2] = "ISO 29393:2009";
 choices[86][3] = "ISO 31000:2009";
 answers[86] = choices[86][0];
 units[86] = "76";
 comments[86] = "Id Pregunta: 9952. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9996 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de reparto del espectro utilizado por GSM (Global System for Mobile communications)?";
 choices[87]= new Array();
 choices[87][0] = "SDMA, Space Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n delespacio.";
 choices[87][1] = "TDMA, Time Division Multiple Access, o acceso m&uacute;ltiple por divisi&oacute;n deltiempo.";
 choices[87][2] = "CDMA, Cell Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n entreceldas.";
 choices[87][3] = "FHMA, Frequency Hops Multiple Access o acceso m&uacute;ltiple por saltos defrecuencia.";
 answers[87] = choices[87][2];
 units[87] = "108";
 comments[87] = "Id Pregunta: 9996. ";


//  Id pregunta: 10063 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes canales de acceso NO se emplea en RDSI?";
 choices[88]= new Array();
 choices[88][0] = "B ";
 choices[88][1] = "D";
 choices[88][2] = "H ";
 choices[88][3] = "I";
 answers[88] = choices[88][3];
 units[88] = "103, 109";
 comments[88] = "Id Pregunta: 10063. TIC A2, libre, Examen 2013";


//  Id pregunta: 10198 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Bluetooth 2.0 incluye un mecanismo llamado EDR (Enhanced Data Rate) para incrementar la velocidad de transmisi&oacute;n. Indique cual es la m&aacute;xima velocidad que se alcanza con este mecanismo:";
 choices[89]= new Array();
 choices[89][0] = "3 Mbps";
 choices[89][1] = "2 Mbps";
 choices[89][2] = "5 Mbps";
 choices[89][3] = "1 Mbps";
 answers[89] = choices[89][0];
 units[89] = "107";
 comments[89] = "Id Pregunta: 10198. 3 Mbps se alcanza usando la modulaci&oacute;n 8DPSK, mientras que con la modulaci&oacute;n pi/4-DQPSK se alcanzan 2 Mbps";


//  Id pregunta: 10522 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Cu&aacute;l de los siguientes organismos no forma parte de la Comisi&oacute;n Interministerial sobre radiofrecuencias y salud";
 choices[90]= new Array();
 choices[90][0] = "El Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[90][1] = "El Ministerio de Sanidad, Servicios Sociales e Igualdad ";
 choices[90][2] = "El Instituto de Salud Carlos III por parte del Ministerio de Econom&iacute;a y Competitividad.";
 choices[90][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 answers[90] = choices[90][3];
 units[90] = "110";
 comments[90] = "Id Pregunta: 10522. ";


//  Id pregunta: 10550 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes amenazas de seguridad de Internet podr&iacute;a comprometer la integridad?";
 choices[91]= new Array();
 choices[91][0] = "Robo de los datos desde el cliente ";
 choices[91][1] = "Exposici&oacute;n de la informaci&oacute;n de configuraci&oacute;n de red ";
 choices[91][2] = "Un troyano en el navegador";
 choices[91][3] = "Escuchas ilegales en la red";
 answers[91] = choices[91][2];
 units[91] = "31, 32, 33";
 comments[91] = "Id Pregunta: 10550. NULL";


//  Id pregunta: 10629 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  BPMN (Business Process Model and Notation)...";
 choices[92]= new Array();
 choices[92][0] = "&hellip; es una notaci&oacute;n gr&aacute;fica.";
 choices[92][1] = "&hellip; es una notaci&oacute;n basada en etiquetas de texto.";
 choices[92][2] = "&hellip; es una metodolog&iacute;a para el modelado de procesos de negocio.";
 choices[92][3] = "&hellip; est&aacute; destinado &uacute;nicamente a los analistas de negocio.";
 answers[92] = choices[92][0];
 units[92] = "71";
 comments[92] = "Id Pregunta: 10629. ";


//  Id pregunta: 10858 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  COCOMO II para estimaci&oacute;n de proyectos de software est&aacute; compuesto de 3 modelos, que son:";
 choices[93]= new Array();
 choices[93][0] = "Modelo de An&aacute;lisis de la Aplicaci&oacute;n, Modelo de Construcci&oacute;n Preliminar y Modelo Post-Arquitectura.";
 choices[93][1] = "Modelo de Planificaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura.";
 choices[93][2] = "Modelo de Composici&oacute;n de la Estimaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura Preliminar.";
 choices[93][3] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n, Modelo de Dise&ntilde;o Preliminar y Modelo Post-Arquitectura.";
 answers[93] = choices[93][3];
 units[93] = "89";
 comments[93] = "Id Pregunta: 10858. Examen GSI 2014";


//  Id pregunta: 10942 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En relaci&oacute;n con las soluciones MDM (Mobile Device Management), se&ntilde;ale la respuesta correcta:";
 choices[94]= new Array();
 choices[94][0] = "En ning&uacute;n caso contemplan la tendencia BYOD (Bring Your Own Device) que permite a los usuarios de una organizaci&oacute;n hacer uso de sus dispositivos m&oacute;viles personales para el acceso al entorno, servicios y datos corporativos.";
 choices[94][1] = "Sirven para gestionar la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n no siendo adecuados para el inventario de dispositivos m&oacute;viles.";
 choices[94][2] = "Los fabricantes de las principales plataformas m&oacute;viles no proporcionan soluciones MDM por lo que hay que recurrir siempre a soluciones de terceros.";
 choices[94][3] = "Permiten la monitorizaci&oacute;n autom&aacute;tica de los dispositivos m&oacute;viles y la generaci&oacute;n de alertas al incumplirse la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n.";
 answers[94] = choices[94][3];
 units[94] = "108";
 comments[94] = "Id Pregunta: 10942. TIC A1 AGE 2014";


//  Id pregunta: 11139 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes no es una licencia de c&oacute;digo abierto reconocida por OSI?";
 choices[95]= new Array();
 choices[95][0] = "European Union Public License";
 choices[95][1] = "Apache License";
 choices[95][2] = "Mozilla Public License";
 choices[95][3] = "Google Legal License";
 answers[95] = choices[95][3];
 units[95] = "61";
 comments[95] = "Id Pregunta: 11139. ";


//  Id pregunta: 11354 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En cuanto a la segmentaci&oacute;n de dominios en una red se&ntilde;ale la verdadera";
 choices[96]= new Array();
 choices[96][0] = "Un switch segmenta dominios de colisi&oacute;n y de broadcast";
 choices[96][1] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n de manera f&iacute;sica y de broadcast de manera l&oacute;gica";
 choices[96][2] = "Un router segmenta dominios de broadcast de manera f&iacute;sica";
 choices[96][3] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n y de broadcast de manera f&iacute;sica";
 answers[96] = choices[96][2];
 units[96] = "102";
 comments[96] = "Id Pregunta: 11354. ";


//  Id pregunta: 11453 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, la determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable corresponde a:";
 choices[97]= new Array();
 choices[97][0] = "CNMC.";
 choices[97][1] = "MINETUR.";
 choices[97][2] = "SETSI.";
 choices[97][3] = "Gobierno.";
 answers[97] = choices[97][3];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11453. ";


//  Id pregunta: 11605 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La tecnolog&iacute;a NFC opera a una frecuencia de:";
 choices[98]= new Array();
 choices[98][0] = "1,63 MHz";
 choices[98][1] = "13,56 MHz";
 choices[98][2] = "2,45 GHz";
 choices[98][3] = "5,4 GHz";
 answers[98] = choices[98][1];
 units[98] = "46";
 comments[98] = "Id Pregunta: 11605. ";


//  Id pregunta: 11682 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l es el nombre de la PDU de capa 2 del modelo OSI?";
 choices[99]= new Array();
 choices[99][0] = "MAC";
 choices[99][1] = "Segmento";
 choices[99][2] = "Paquete";
 choices[99][3] = "Trama";
 answers[99] = choices[99][3];
 units[99] = "100";
 comments[99] = "Id Pregunta: 11682. NULL";


