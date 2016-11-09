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

//  Id pregunta: 470 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Una de las caracter&iacute;sticas principales de los paquetes de planificaci&oacute;n de recursos de empresas (ERP) es:";
 choices[0]= new Array();
 choices[0][0] = "Los datos a tratar por esos paquetes no pueden ser almacenados en sistemas de bases de datos de car&aacute;cter general.";
 choices[0][1] = "Ser parametrizables, lo que les da gran flexibilidad y la posibilidad de ser aplicados a tipos de empresas muy diferentes.";
 choices[0][2] = "No ser parametrizables, por ser dise&ntilde;ados especialmente para cada tipo de empresas.";
 choices[0][3] = "Utilizar la tecnolog&iacute;a de workflow como soluci&oacute;n a la gesti&oacute;n integral de una empresa.";
 answers[0] = choices[0][1];
 units[0] = "65";
 comments[0] = "Id Pregunta: 470. ";


//  Id pregunta: 844 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre un proyecto GIS es cierta?:";
 choices[1]= new Array();
 choices[1][0] = "La digitalizaci&oacute;n de una cartograf&iacute;a existente es cara por lo laborioso del proceso de digitalizaci&oacute;n ya que requiere mucho trabajo manual de depuraci&oacute;n y correcci&oacute;n.";
 choices[1][1] = "Mientras el coste del uso de los sat&eacute;lites de posici&oacute;n no baje, la obtenci&oacute;n de datos mediante itinerarios con GPS siempre presenta una relaci&oacute;n coste/calidad inaceptable.";
 choices[1][2] = "El procesado de im&aacute;genes de sat&eacute;lite es complicado puesto que la informaci&oacute;n r&aacute;ster no puede ser vectorizada.";
 choices[1][3] = "La fotogrametr&iacute;a es una opci&oacute;n viable s&oacute;lo cuando no existan otros m&eacute;todos (trazado por GPS, procesado de im&aacute;genes de sat&eacute;lite, digitalizaci&oacute;n de cartograf&iacute;as existentes) por lo elevado de su coste.";
 answers[1] = choices[1][0];
 units[1] = "67";
 comments[1] = "Id Pregunta: 844. NULL";


//  Id pregunta: 845 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes alternativas indica los tres tipos de informaci&oacute;n manejados por un Sistema de Informaci&oacute;n Geogr&aacute;fica (SIG) en el caso m&aacute;s general?:";
 choices[2]= new Array();
 choices[2][0] = "Topol&oacute;gica, vectorial y r&aacute;ster.";
 choices[2][1] = "Posicional, temporal y tem&aacute;tica.";
 choices[2][2] = "Topol&oacute;gica, tem&aacute;tica y posicional.";
 choices[2][3] = "Posicional, r&aacute;ster y topol&oacute;gica.";
 answers[2] = choices[2][2];
 units[2] = "67";
 comments[2] = "Id Pregunta: 845. NULL";


//  Id pregunta: 867 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes modelos de miner&iacute;a de datos escoger&iacute;a para detectar un posible fraude?";
 choices[3]= new Array();
 choices[3][0] = "El modelo de Verificaci&oacute;n.";
 choices[3][1] = "El modelo de Descubrimiento.";
 choices[3][2] = "El modelo de Simulaci&oacute;n.";
 choices[3][3] = "El modelo Distribuido.";
 answers[3] = choices[3][1];
 units[3] = "68";
 comments[3] = "Id Pregunta: 867. ";


//  Id pregunta: 929 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; es ROLAP?";
 choices[4]= new Array();
 choices[4][0] = "Una base de datos multidimensional.";
 choices[4][1] = "Un sistema de an&aacute;lisis on-line soportado por una base de datos relacional con extensiones multidimensionales.";
 choices[4][2] = "Una medida de rendimiento de los sistemas OLAP.";
 choices[4][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[4] = choices[4][1];
 units[4] = "68";
 comments[4] = "Id Pregunta: 929. ";


//  Id pregunta: 959 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Con respecto a la manera de representar el modelo digital del terreno o DTM, un SIG puede ser:";
 choices[5]= new Array();
 choices[5][0] = "R&aacute;ster.";
 choices[5][1] = "Vectorial.";
 choices[5][2] = "Ambos.";
 choices[5][3] = "Ninguna es cierta.";
 answers[5] = choices[5][2];
 units[5] = "67";
 comments[5] = "Id Pregunta: 959. NULL";


//  Id pregunta: 972 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Cuando se quiere simular una base de datos multidimensional con una base de datos relacional y hay jerarqu&iacute;as en las dimensiones, lo m&aacute;s adecuado es el:";
 choices[6]= new Array();
 choices[6][0] = "Esquema en estrella.";
 choices[6][1] = "Esquema en tornillo.";
 choices[6][2] = "Esquema de hechos.";
 choices[6][3] = "Esquema en copo de nieve.";
 answers[6] = choices[6][3];
 units[6] = "68";
 comments[6] = "Id Pregunta: 972. ";


//  Id pregunta: 976 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  De acuerdo al modelo vectorial, &iquest;cu&aacute;l de los siguientes datos no se representa en un sistema de informaci&oacute;n geogr&aacute;fica?:";
 choices[7]= new Array();
 choices[7][0] = "Arcos circulares.";
 choices[7][1] = "Pol&iacute;gonos.";
 choices[7][2] = "L&iacute;neas.";
 choices[7][3] = "Matrices de celdas.";
 answers[7] = choices[7][3];
 units[7] = "67";
 comments[7] = "Id Pregunta: 976. NULL";


//  Id pregunta: 1040 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El objetivo del aprendizaje no supervisado en miner&iacute;a de datos basado en modelado consiste en:";
 choices[8]= new Array();
 choices[8][0] = "Asignar nuevas situaciones a clases a partir de ejemplos existentes.";
 choices[8][1] = "Determinar el comportamiento futuro a partir de datos hist&oacute;ricos.";
 choices[8][2] = "Establecer grupos de parecidos.";
 choices[8][3] = "Descubren patrones y tendencias en los datos.";
 answers[8] = choices[8][3];
 units[8] = "68";
 comments[8] = "Id Pregunta: 1040. ";


//  Id pregunta: 1067 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Elija la respuesta falsa respecto de OLAP.";
 choices[9]= new Array();
 choices[9][0] = "Implica el uso de t&eacute;cnicas multidimensionales.";
 choices[9][1] = "Realiza el an&aacute;lisis Offline de los datos.";
 choices[9][2] = "Puede utilizar bases de datos relacionales.";
 choices[9][3] = "Puede presentar vistas de los datos en un numero reducido de dimensiones.";
 answers[9] = choices[9][1];
 units[9] = "68";
 comments[9] = "Id Pregunta: 1067. ";


//  Id pregunta: 1107 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En la extracci&oacute;n del conocimiento en la miner&iacute;a de datos, &iquest;qu&eacute; ejemplo de los siguientes no se corresponde con aprendizaje supervisado?";
 choices[10]= new Array();
 choices[10][0] = "Sistemas de clasificaci&oacute;n.";
 choices[10][1] = "Patrones de comportamiento.";
 choices[10][2] = "Sistemas de predicci&oacute;n.";
 choices[10][3] = "Modelado y control.";
 answers[10] = choices[10][1];
 units[10] = "68";
 comments[10] = "Id Pregunta: 1107. ";


//  Id pregunta: 1260 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Las principales caracter&iacute;sticas de un almac&eacute;n de datos son:";
 choices[11]= new Array();
 choices[11][0] = "Organizado en torno a procesos, integrado, inpendiente del tiempo, no volatil";
 choices[11][1] = "Organizado en torno a temas, integrado, independiente del tiempo, volatil";
 choices[11][2] = "Organizado en torno a temas, integrado, dependiente del tiempo, no volatil";
 choices[11][3] = "Organizado en torno a procesos, integrado, dependiente del tiempo, volatil";
 answers[11] = choices[11][2];
 units[11] = "68";
 comments[11] = "Id Pregunta: 1260. NULL";


//  Id pregunta: 1339 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Seg&uacute;n la WfMC, un workflow se define como:";
 choices[12]= new Array();
 choices[12][0] = "Automatizaci&oacute;n de un procedimiento de negocio, durente la cual los documentos, la informaci&oacute;n o las tareas pasan de un participante a otro de acuerdo a un conjunto de reglas de procedimiento";
 choices[12][1] = "Una descripci&oacute;n de una pieza de trabajo que forma un paso l&oacute;gico dentro de un proceso";
 choices[12][2] = "La representaci&oacute;n del trabajo que tiene que ser procesado (por un participante) en el contexto de una actividad dentro de un proceso";
 choices[12][3] = "El software que controla la ejecuci&oacute;n de programas en los mainframes, enviando mensajes a las consolas cuando se detecta alguna incidencia";
 answers[12] = choices[12][0];
 units[12] = "71";
 comments[12] = "Id Pregunta: 1339. ";


//  Id pregunta: 1382 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Un Data Mart es:";
 choices[13]= new Array();
 choices[13][0] = "Un proveedor de datos de pago v&iacute;a Internet.";
 choices[13][1] = "Una versi&oacute;n reducida del datawarehouse, adscrita a un solo departamento de la organizaci&oacute;n.";
 choices[13][2] = "Una aplicaci&oacute;n para el mantenimiento de la coherencia de los datos.";
 choices[13][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[13] = choices[13][1];
 units[13] = "68";
 comments[13] = "Id Pregunta: 1382. ";


//  Id pregunta: 1431 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Uno de los siguientes grupos de componentes no pertenece al conjunto de componentes s&iacute;ncronos de groupware. Indicar cu&aacute;l:";
 choices[14]= new Array();
 choices[14][0] = "video, audio, editor texto";
 choices[14][1] = "gestor de tr&aacute;fico, control de estado, punteros";
 choices[14][2] = "bases de datos de objetos, motores workflow, notas post-it";
 choices[14][3] = "compartidor de aplicaciones, chat, pizarras";
 answers[14] = choices[14][2];
 units[14] = "71";
 comments[14] = "Id Pregunta: 1431. ";


//  Id pregunta: 1553 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de un sistema de almacenamiento de datos Data-warehouse?:";
 choices[15]= new Array();
 choices[15][0] = "Almacenamiento de datos hist&oacute;ricos.";
 choices[15][1] = "Alta volatilidad de los datos.";
 choices[15][2] = "Organizaci&oacute;n tem&aacute;tica de los datos.";
 choices[15][3] = "Integraci&oacute;n del formato de los datos.";
 answers[15] = choices[15][1];
 units[15] = "71";
 comments[15] = "Id Pregunta: 1553. Junta Andaluc&iacute;a";


//  Id pregunta: 1568 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  &iquest;C&uacute;al no es una funci&oacute;n de Workflow?";
 choices[16]= new Array();
 choices[16][0] = "Enrutamiento";
 choices[16][1] = "Asignaci&oacute;n de responsabilidades";
 choices[16][2] = "Generaci&oacute;n de formularios ";
 choices[16][3] = "Gesti&oacute;n de procedimiento";
 answers[16] = choices[16][2];
 units[16] = "71";
 comments[16] = "Id Pregunta: 1568. ";


//  Id pregunta: 1601 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  En un sistema de workflow no es una funci&oacute;n b&aacute;sica:";
 choices[17]= new Array();
 choices[17][0] = "Monitorizaci&oacute;n y control";
 choices[17][1] = "Gesti&oacute;n de procedimientos";
 choices[17][2] = "Interoperabilidad entre aplicaciones";
 choices[17][3] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 answers[17] = choices[17][2];
 units[17] = "71";
 comments[17] = "Id Pregunta: 1601. Pregunta no perteneciente al test &nbsp;del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de Worflow)";


//  Id pregunta: 1660 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[18]= new Array();
 choices[18][0] = "Los servicios OLAP son una herramienta de proceso anal&iacute;tico en l&iacute;nea.";
 choices[18][1] = "Pertenece al dominio de los almacenes de datos y se encuentra dentro del &aacute;mbito,  m&aacute;s amplio, de los sistemas de toma de decisiones (DSS) y de los sistemas de informaci&oacute;n ejecutiva (EIS).";
 choices[18][2] = "Una de sus principales metas es incrementar la velocidad de recuperaci&oacute;n de datos.";
 choices[18][3] = "Los servicios OLAP son una herramienta de proceso transaccional en l&iacute;nea.";
 answers[18] = choices[18][3];
 units[18] = "68";
 comments[18] = "Id Pregunta: 1660. MAP-B 2003";


//  Id pregunta: 1686 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  &iquest;Con que otro nombre se conoce tambi&eacute;n a la informaci&oacute;n georreferenciada?";
 choices[19]= new Array();
 choices[19][0] = "Informaci&oacute;n espacial.";
 choices[19][1] = "Informaci&oacute;n geogr&aacute;fica.";
 choices[19][2] = "Geodatos.";
 choices[19][3] = "Todas las anteriores.";
 answers[19] = choices[19][3];
 units[19] = "67";
 comments[19] = "Id Pregunta: 1686. NULL";


//  Id pregunta: 1803 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  &iquest;Qu&eacute; es moodle?";
 choices[20]= new Array();
 choices[20][0] = "Un sistema de gest&oacute;n de la ense&ntilde;anza de Software libre";
 choices[20][1] = "Un sistema de gesti&oacute;n de contenidos gratuito pero no libre";
 choices[20][2] = "Un buscador de Internet";
 choices[20][3] = "Un entorno de escritorio para sistemas Linux bajo tecnolog&iacute;a X Windows";
 answers[20] = choices[20][0];
 units[20] = "66";
 comments[20] = "Id Pregunta: 1803. Moodle tiene licencia GNU GPL.";


//  Id pregunta: 1807 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Se&ntilde;ale la opci&oacute;n que enumera tres de las especificaciones m&aacute;s robustas en el sector del e-learning";
 choices[21]= new Array();
 choices[21][0] = "AICC, IMS y SCORM";
 choices[21][1] = "AICC, EL-XML y SCORM";
 choices[21][2] = "ELEARN, FCC y SCORM";
 choices[21][3] = "SCORM, ELEARN y AICC";
 answers[21] = choices[21][0];
 units[21] = "66";
 comments[21] = "Id Pregunta: 1807. ";


//  Id pregunta: 1808 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  En un GIS, el modelo vectorial ";
 choices[22]= new Array();
 choices[22][0] = "Utiliza nodos, l&iacute;neas y pol&iacute;gonos para representar los datos geogr&aacute;ficos.";
 choices[22][1] = "Cada l&iacute;nea se define por todos los puntos intermedios, almacenando todos ellos.";
 choices[22][2] = "Utiliza m&aacute;s espacio de almacenamiento que el modelo r&aacute;ster.";
 choices[22][3] = "Es preferible al modelo r&aacute;ster para superposici&oacute;n de planos.";
 answers[22] = choices[22][0];
 units[22] = "67";
 comments[22] = "Id Pregunta: 1808. NULL";


//  Id pregunta: 1813 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  Los modelos digitales del terreno (MDT) son conjuntos de datos de gran utilidad, y t&iacute;picamente representados mediante un modelo de datos:";
 choices[23]= new Array();
 choices[23][0] = "Vectorial.";
 choices[23][1] = "R&aacute;ster.";
 choices[23][2] = "Alfanum&eacute;rico.";
 choices[23][3] = "De cotas u elevaciones.";
 answers[23] = choices[23][1];
 units[23] = "67";
 comments[23] = "Id Pregunta: 1813. NULL";


//  Id pregunta: 1827 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  La operaci&oacute;n que permite navegar hacia un mayor nivel de agregaci&oacute;n en dimensiones en un Datawarehouse se conoce como:";
 choices[24]= new Array();
 choices[24][0] = "Drill-Down.";
 choices[24][1] = "Roll-Up.";
 choices[24][2] = "Drill-Through.";
 choices[24][3] = "Slice and Dice.";
 answers[24] = choices[24][1];
 units[24] = "68";
 comments[24] = "Id Pregunta: 1827. ";


//  Id pregunta: 1846 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  &iquest;A qu&eacute; hace referencia las siglas WAPI?";
 choices[25]= new Array();
 choices[25][0] = "Wireless Advanced Privacy Infrastructure";
 choices[25][1] = "Workflow Application Programming Interface";
 choices[25][2] = "Wired Advanced Professional Institute";
 choices[25][3] = "Wireless Application Programming Interface";
 answers[25] = choices[25][1];
 units[25] = "71";
 comments[25] = "Id Pregunta: 1846. ";


//  Id pregunta: 4281 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Los sistemas conocidos como OLTP son utilizados para:";
 choices[26]= new Array();
 choices[26][0] = "Hacer consultas complejas sobre distintas Bases de Datos que se han consolidado en una central.";
 choices[26][1] = "Poder realizar informes a la Direcci&oacute;n.";
 choices[26][2] = "Son sistemas t&iacute;picamente utilizados como Sistemas de Informaci&oacute;n Geogr&aacute;fica.";
 choices[26][3] = "Captura de datos a partir de las operaciones diarias de una organizaci&oacute;n.";
 answers[26] = choices[26][3];
 units[26] = "68";
 comments[26] = "Id Pregunta: 4281. ";


//  Id pregunta: 4282 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  En miner&iacute;a de datos, un Esquema Estrella:";
 choices[27]= new Array();
 choices[27][0] = "No tiene en cuenta elementos temporales tales como la fecha asociada a la informaci&oacute;n.";
 choices[27][1] = "Es una forma de representar la arquitectura f&iacute;sica del sistema OLAP.";
 choices[27][2] = "Es una t&eacute;cnica de dise&ntilde;o de bases de datos relacionales que sirve para simular el funcionamiento de bases de datos multidimensionales.";
 choices[27][3] = "Representa la centralizaci&oacute;n de la informaci&oacute;n en un solo SGBD para posibilitar su explotaci&oacute;n ndimensional.";
 answers[27] = choices[27][2];
 units[27] = "68";
 comments[27] = "Id Pregunta: 4282. ";


//  Id pregunta: 4362 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes no es un operador en el an&aacute;lisis de los almacenes de datos multidimensionales?";
 choices[28]= new Array();
 choices[28][0] = "Duck.";
 choices[28][1] = "Drill.";
 choices[28][2] = "Roll.";
 choices[28][3] = "Slice &amp; dice.";
 answers[28] = choices[28][0];
 units[28] = "68";
 comments[28] = "Id Pregunta: 4362. ";


//  Id pregunta: 4407 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  &iquest;En qu&eacute; consiste el CRA (Customer Relationship Analisis?";
 choices[29]= new Array();
 choices[29][0] = "Es un conjunto de herramientas que proveen de soporte t&eacute;cnico al CRM.";
 choices[29][1] = "Es el precursor del CRM.";
 choices[29][2] = "Es el an&aacute;lisis de datos acerca de los clientes y su relaci&oacute;n con la empresa.";
 choices[29][3] = "Integraci&oacute;n del software de an&aacute;lisis de datos con las bases de datos y el inventario de las organizaciones";
 answers[29] = choices[29][2];
 units[29] = "65";
 comments[29] = "Id Pregunta: 4407. ";


//  Id pregunta: 4464 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  Indique cu&aacute;l de las siguientes afirmaciones sobre una base de datos OLAP es cierta:";
 choices[30]= new Array();
 choices[30][0] = "Cada datamart podr&aacute; tener unas medidas y dimensiones propias y diferentes a los dem&aacute;s.";
 choices[30][1] = "Todos los datamart deber&aacute;n tener las mismas medidas y dimensiones.";
 choices[30][2] = "Los datamart no tienen dimensiones.";
 choices[30][3] = "La dimensi&oacute;n de los datamart debe ser &uacute;nica, aunque las medidas pueden variar de unos datamart a otros.";
 answers[30] = choices[30][0];
 units[30] = "68";
 comments[30] = "Id Pregunta: 4464. ";


//  Id pregunta: 4622 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  Indique cual de las siguientes es una herramienta de e-learning: ";
 choices[31]= new Array();
 choices[31][0] = "Kerberos";
 choices[31][1] = "WebCT";
 choices[31][2] = "Kagera";
 choices[31][3] = "Tuxedo";
 answers[31] = choices[31][1];
 units[31] = "66";
 comments[31] = "Id Pregunta: 4622. ";


//  Id pregunta: 4629 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un m&eacute;todo de almacenamiento OLAP.";
 choices[32]= new Array();
 choices[32][0] = "MOLAP.";
 choices[32][1] = "ROLAP.";
 choices[32][2] = "HOLAP.";
 choices[32][3] = "ZOLAP.";
 answers[32] = choices[32][3];
 units[32] = "68";
 comments[32] = "Id Pregunta: 4629. ";


//  Id pregunta: 4811 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Sobre las funciones OLAP (Online Analytical Processing) definidas como extensiones a SQL (Structured Query Language) que forman parte de SQL:2003, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[33]= new Array();
 choices[33][0] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula GROUP BY.";
 choices[33][1] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[33][2] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[33][3] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula FROM.";
 answers[33] = choices[33][0];
 units[33] = "68";
 comments[33] = "Id Pregunta: 4811. ";


//  Id pregunta: 5020 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes afirmaciones define el tipo de procesamiento conocido como OLAP?";
 choices[34]= new Array();
 choices[34][0] = "Procesamiento transaccional en tiempo real que consiste en realizar transacciones, es decir actualizaciones y consultas a la base de datos con un objetivo operacional.";
 choices[34][1] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones, exclusivamente de consulta, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[34][2] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones de consulta y actualizaci&oacute;n, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[34][3] = "Procesamiento transaccional en tiempo real que engloba un conjunto de operaciones, de consulta y actualizaci&oacute;n, con el objetivo de realizar informes y res&uacute;menes para el apoyo en la toma de decisiones.";
 answers[34] = choices[34][1];
 units[34] = "68";
 comments[34] = "Id Pregunta: 5020. Examen TIC A 2007";


//  Id pregunta: 5065 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  En relaci&oacute;n con los ERP, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a SAP R/3?";
 choices[35]= new Array();
 choices[35][0] = "El m&oacute;dulo donde se gestionan las compras se denomina CO";
 choices[35][1] = "El m&oacute;dulo PM se encarga de gestionar la gesti&oacute;n de proyectos";
 choices[35][2] = "El m&oacute;dulo SD es parte del m&oacute;dulo de contabilidad financiera";
 choices[35][3] = "El m&oacute;dulo &quot;Basis&quot; se encarga de gestionar la base de datos";
 answers[35] = choices[35][3];
 units[35] = "65";
 comments[35] = "Id Pregunta: 5065. Examen TIC A 2007";


//  Id pregunta: 5125 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos hace referencia a un est&aacute;ndar de modelo de agregaci&oacute;n de contenidos Web para eLearning?";
 choices[36]= new Array();
 choices[36][0] = "CORBA";
 choices[36][1] = "OWR";
 choices[36][2] = "SCORM";
 choices[36][3] = "IQC";
 answers[36] = choices[36][2];
 units[36] = "66";
 comments[36] = "Id Pregunta: 5125. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5501 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[37]= new Array();
 choices[37][0] = "Utilizan t&eacute;cnicas multidimensionales para la extracci&oacute;n y el an&aacute;lisis de los datos.";
 choices[37][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[37][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[37][3] = "Est&aacute;n pensados para el an&aacute;lisis y actualizaci&oacute;n de los datos de forma r&aacute;pida y jerarquizada.";
 answers[37] = choices[37][3];
 units[37] = "68";
 comments[37] = "Id Pregunta: 5501. ";


//  Id pregunta: 5502 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l es una de las diferencias entre ROLAP y MOLAP?";
 choices[38]= new Array();
 choices[38][0] = "El grado de interactividad.";
 choices[38][1] = "El preprocesado de los datos desde las bases de datos relacionales a la base de datos multidimensional.";
 choices[38][2] = "El soporte de sistemas para la toma de decisiones.";
 choices[38][3] = "La presentaci&oacute;n de vistas de los datos sobre un n&uacute;mero de dimensiones.";
 answers[38] = choices[38][1];
 units[38] = "68";
 comments[38] = "Id Pregunta: 5502. ";


//  Id pregunta: 5580 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Qu&eacute; es el blended learning?";
 choices[39]= new Array();
 choices[39][0] = "Un modelo de referencia del e-learning";
 choices[39][1] = "Una modalidad de e-learning que incluye ense&ntilde;anza presencial";
 choices[39][2] = "Una inciativa para estandarizar el e-learning";
 choices[39][3] = "Una clase de ense&ntilde;anza virtual";
 answers[39] = choices[39][1];
 units[39] = "66";
 comments[39] = "Id Pregunta: 5580. ";


//  Id pregunta: 5674 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Indique la respuesta no correcta respecto a GIS modelo de datos r&aacute;ster.";
 choices[40]= new Array();
 choices[40][0] = "En el modelo de datos r&aacute;ster, la regi&oacute;n a modelizar se considera dividida seg&uacute;n una matriz o malla rectangular de celdas (p&iacute;xeles) de id&eacute;ntico tama&ntilde;o y de formageneralmente cuadrada.";
 choices[40][1] = "Como cr&iacute;ticas al modelo deben se&ntilde;alarse la carencia de informaci&oacute;n topol&oacute;gica acerca de las relaciones espaciales entre las entidades.";
 choices[40][2] = "En el modelo de datos r&aacute;ster permite una representaci&oacute;n expl&iacute;cita de entidades f&iacute;sicas del mundo real.";
 choices[40][3] = "Ofrece escasa eficiencia de cara a la representaci&oacute;n de la variabilidad espacial, al estar basado en una frecuencia de muestreo constante.";
 answers[40] = choices[40][2];
 units[40] = "67";
 comments[40] = "Id Pregunta: 5674. NULL";


//  Id pregunta: 5675 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Indique la respuesta incorrecta respecto a GIS modelo de datos vectorial.";
 choices[41]= new Array();
 choices[41][0] = "La caracter&iacute;stica mas importante del modelo vectorial frente al r&aacute;ster es la capacidad de gestion topol&oacute;gica de sus elementos.";
 choices[41][1] = "La mayor riqueza y capacidad de representaci&oacute;n de la realidad espacial, se traduce en una mayor complejidad de este modelo vectorial en comparaci&oacute;n con el sencillo modelo r&aacute;ster.";
 choices[41][2] = "En el modelo de datos vectorial podemos hablar por tanto de una georreferenciaci&oacute;n continua, sin que la resoluci&oacute;n suponga una limitaci&oacute;n como suced&iacute;a en el modelo r&aacute;ster.";
 choices[41][3] = "Ninguna de las anteriores.";
 answers[41] = choices[41][3];
 units[41] = "67";
 comments[41] = "Id Pregunta: 5675. NULL";


//  Id pregunta: 5677 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Indique cu&aacute;l de las siguientes opciones no est&aacute; relacionada con la Web Sem&aacute;ntica:";
 choices[42]= new Array();
 choices[42][0] = "RDF (Resource Description Framework).";
 choices[42][1] = "OWL (Web Ontology Language).";
 choices[42][2] = "XML (Extensible Markup Language)";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][3];
 units[42] = "71";
 comments[42] = "Id Pregunta: 5677. ";


//  Id pregunta: 5711 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es un tipo de modelo de datos multidimensional?";
 choices[43]= new Array();
 choices[43][0] = "HOLAP.";
 choices[43][1] = "DOLAP.";
 choices[43][2] = "MOLAP.";
 choices[43][3] = "ROLAP.";
 answers[43] = choices[43][1];
 units[43] = "68";
 comments[43] = "Id Pregunta: 5711. ";


//  Id pregunta: 5731 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no es un tipo de workflow?";
 choices[44]= new Array();
 choices[44][0] = "Workflow de administraci&oacute;n";
 choices[44][1] = "Workflow de colaboraci&oacute;n";
 choices[44][2] = "Workflow de coordinaci&oacute;n";
 choices[44][3] = "Workflow de producci&oacute;n";
 answers[44] = choices[44][2];
 units[44] = "71";
 comments[44] = "Id Pregunta: 5731. ";


//  Id pregunta: 5846 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  &iquest;Cual de los siguientes est&aacute;ndares de Work-flow est&aacute; definido por WfMC (Workflow Management Coalition)?";
 choices[45]= new Array();
 choices[45][0] = "BPML";
 choices[45][1] = "BPEL";
 choices[45][2] = "BPMN";
 choices[45][3] = "XPDL";
 answers[45] = choices[45][3];
 units[45] = "71";
 comments[45] = "Id Pregunta: 5846. MAP 2008 A1";


//  Id pregunta: 5870 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  En la plataforma de e-learning Moodle, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[46]= new Array();
 choices[46][0] = "Es una plataforma de libre distribuci&oacute;n de e-learning";
 choices[46][1] = "Soporta el aprendizaje colaborativo en cualquier lugar y en cualquier momento";
 choices[46][2] = "Es una aplicaci&oacute;n Web que funciona en cualquier computador en el que se pueda ejecutar PHP";
 choices[46][3] = "S&oacute;lo funciona con el sistema operativo Linux";
 answers[46] = choices[46][3];
 units[46] = "66";
 comments[46] = "Id Pregunta: 5870. MAP 2008 A1";


//  Id pregunta: 6132 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  La creaci&oacute;n de una vista l&oacute;gica unificada de los datos, a&uacute;n cuando &eacute;stos est&eacute;n dispersos entre varias bases de datos f&iacute;sicas, para as&iacute; disponer de un &uacute;nico modelo de trabajo de los datos de la organizaci&oacute;n, es una manera de definir:";
 choices[47]= new Array();
 choices[47][0] = "Un almac&eacute;n de datos.";
 choices[47][1] = "Un sistema OLAP.";
 choices[47][2] = "Un sistema de informaci&oacute;n a la direcci&oacute;n.";
 choices[47][3] = "Una base de datos.";
 answers[47] = choices[47][0];
 units[47] = "68";
 comments[47] = "Id Pregunta: 6132. TIC A 2009";


//  Id pregunta: 6174 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Indique cual de entre los cuales NO es una funci&oacute;n del LMS:";
 choices[48]= new Array();
 choices[48][0] = "Seguimiento de la actividad del alumno.";
 choices[48][1] = "Publicaci&oacute;n de contenidos de formaci&oacute;n";
 choices[48][2] = "Comunicaci&oacute;n profesor-alumno.";
 choices[48][3] = "Matriculaci&oacute;n en cursos.";
 answers[48] = choices[48][1];
 units[48] = "66";
 comments[48] = "Id Pregunta: 6174. NULL";


//  Id pregunta: 6175 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Cual es la &uacute;ltima versi&oacute;n del protocolo SCORM?";
 choices[49]= new Array();
 choices[49][0] = "SCORM 1.0";
 choices[49][1] = "SCORM 1.1";
 choices[49][2] = "SCORM 1.2";
 choices[49][3] = "SCORM 2004";
 answers[49] = choices[49][3];
 units[49] = "66";
 comments[49] = "Id Pregunta: 6175. ";


//  Id pregunta: 6182 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Entre las funciones de BPEL no se encuentra:";
 choices[50]= new Array();
 choices[50][0] = "Definir una interpretaci&oacute;n gr&aacute;fica de procesos.";
 choices[50][1] = "Definir procesos de negocio.";
 choices[50][2] = "Construir sobre servicios Web operaciones que participan en procedimientos empresariales.";
 choices[50][3] = "Orquestar servicios Web.";
 answers[50] = choices[50][0];
 units[50] = "71";
 comments[50] = "Id Pregunta: 6182. ";


//  Id pregunta: 6243 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas acerca de OLAP es correcta?";
 choices[51]= new Array();
 choices[51][0] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo UPDATE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo DELETE.";
 choices[51][1] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo SELECT, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo INSERT, UPDATE, DELETE.";
 choices[51][2] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo DELETE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo UPDATE.";
 choices[51][3] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo DELETE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo SELECT, INSERT y UPDATE.";
 answers[51] = choices[51][1];
 units[51] = "68";
 comments[51] = "Id Pregunta: 6243. TICB-2009, bloque desarrollo";


//  Id pregunta: 6329 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Una actualizaci&oacute;n de los datos del Data Warehouse consistir&aacute; b&aacute;sicamente en:";
 choices[52]= new Array();
 choices[52][0] = "Modificar los valores de ciertos registros (tuplas de las relaciones subyacentes).";
 choices[52][1] = "Borrar los registros de tasa de utilizaci&oacute;n baja.";
 choices[52][2] = "Inserci&oacute;n de nuevos datos (que eventualmente diferir&aacute;n de otros ya existentes s&oacute;lo en la marca temporal).";
 choices[52][3] = "Un Data Warehouse no se actualiza pues contiene s&oacute;lo datos hist&oacute;ricos.";
 answers[52] = choices[52][2];
 units[52] = "68";
 comments[52] = "Id Pregunta: 6329. ";


//  Id pregunta: 6339 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes nombres no est&aacute;n relaiconados con una soluci&oacute;n ERP?";
 choices[53]= new Array();
 choices[53][0] = "Oracle Financials";
 choices[53][1] = "SAP";
 choices[53][2] = "IBM Websphere";
 choices[53][3] = "META4";
 answers[53] = choices[53][2];
 units[53] = "65";
 comments[53] = "Id Pregunta: 6339. ";


//  Id pregunta: 6440 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes m&oacute;dulos no forma parte del ERP Oracle Applications?";
 choices[54]= new Array();
 choices[54][0] = "Oracle Payables";
 choices[54][1] = "Oracle Inventory";
 choices[54][2] = "Oracle Receivables";
 choices[54][3] = "Oracle Customers.";
 answers[54] = choices[54][3];
 units[54] = "65";
 comments[54] = "Id Pregunta: 6440. ";


//  Id pregunta: 7171 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n al Almac&eacute;n de Datos (Data Warehouse):";
 choices[55]= new Array();
 choices[55][0] = "La estructura l&oacute;gica est&aacute; compuesta por los niveles centralizado, organizado en torno a temas e integrado.";
 choices[55][1] = "La estructura f&iacute;sica est&aacute; compuesta por los niveles de metadatos, datos detallados actuales y datos detallados hist&oacute;ricos.";
 choices[55][2] = "El almac&eacute;n de datos no es vol&aacute;til, no se pueden modificar datos almacenados, solamente se permite la consulta y la carga de nuevos datos.";
 choices[55][3] = "Entre los criterios m&aacute;s importantes a considerar para elegir el SGBD que gestionar&aacute; el almac&eacute;n, est&aacute; el esfuerzo necesario para determinar el estado de los datos disponibles en los sistemas OLTP de la organizaci&oacute;n.";
 answers[55] = choices[55][2];
 units[55] = "68";
 comments[55] = "Id Pregunta: 7171. Examen TIC B 2009";


//  Id pregunta: 7296 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Un proveedor de SW para miner&iacute;a de datos es:";
 choices[56]= new Array();
 choices[56][0] = "SAS.";
 choices[56][1] = "SPSS.";
 choices[56][2] = "A y B son correctas.";
 choices[56][3] = "A y B son incorrectas.";
 answers[56] = choices[56][2];
 units[56] = "68";
 comments[56] = "Id Pregunta: 7296. NULL";


//  Id pregunta: 8178 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  WS-BPEL (Web Service Business Process Execution Language), versi&oacute;n 2.0:";
 choices[57]= new Array();
 choices[57][0] = "Consta de una notaci&oacute;n gr&aacute;fica standard y de un lenguaje ejecutable para especificar interacciones entre servicios web.";
 choices[57][1] = "Permite la especificaci&oacute;n de procesos de negocio abstractos, pero no de procesos de negocio ejecutables.";
 choices[57][2] = "Utiliza XML Schema y WSDL 1.1 para la definici&oacute;n de tipos de datos e interfaces de servicios en la definici&oacute;n de procesos.";
 choices[57][3] = "Es una notaci&oacute;n gr&aacute;fica para la definici&oacute;n de servicios web.";
 answers[57] = choices[57][2];
 units[57] = "71";
 comments[57] = "Id Pregunta: 8178. Examen TIC A1 2010";


//  Id pregunta: 8364 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Entre las t&eacute;cnicas usadas en miner&iacute;a de datos se encuentran las redes neuronales artificiales, &iquest;cu&aacute;l de los siguientes es uno de sus modelos? ";
 choices[58]= new Array();
 choices[58][0] = "Redes de Shelman.";
 choices[58][1] = "Redes de Coperfield.";
 choices[58][2] = "Redes ART.";
 choices[58][3] = "M&aacute;quina de Gauss.";
 answers[58] = choices[58][2];
 units[58] = "68";
 comments[58] = "Id Pregunta: 8364. Examen TIC A2 2010";


//  Id pregunta: 8365 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  &iquest;En qu&eacute; tipo de t&eacute;cnica de miner&iacute;a de datos se utiliza el algoritmo IK-medoids?";
 choices[59]= new Array();
 choices[59][0] = "Predicci&oacute;n.";
 choices[59][1] = "Categorizaci&oacute;n.";
 choices[59][2] = "Clustering.";
 choices[59][3] = "Estad&iacute;sticas.";
 answers[59] = choices[59][2];
 units[59] = "68";
 comments[59] = "Id Pregunta: 8365. Examen TIC A2 2010";


//  Id pregunta: 8395 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO es una t&eacute;cnica empleada en Miner&iacute;a de Datos?";
 choices[60]= new Array();
 choices[60][0] = "Las redes neuronales.";
 choices[60][1] = "Look and Find.";
 choices[60][2] = "Los &aacute;rboles de decisi&oacute;n.";
 choices[60][3] = "Las redes bayesianas.";
 answers[60] = choices[60][1];
 units[60] = "71";
 comments[60] = "Id Pregunta: 8395. Examen TIC A2 2010";


//  Id pregunta: 8455 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  En los GIS, el sistema UTM:";
 choices[61]= new Array();
 choices[61][0] = "Asocia cada elemento a una clave de zona.";
 choices[61][1] = "Proyecta el globo terr&aacute;queo sobre un cilindro.";
 choices[61][2] = "Es un est&aacute;ndar universal para intercambio de datos geogr&aacute;ficos.";
 choices[61][3] = "Ninguna de las anteriores.";
 answers[61] = choices[61][1];
 units[61] = "67";
 comments[61] = "Id Pregunta: 8455. Analista Ayto. Madrid 2010";


//  Id pregunta: 8459 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de estos benchmarks se emplea para medir la capacidad de OLTP para una determinada configuraci&oacute;n hardware y software?";
 choices[62]= new Array();
 choices[62][0] = "TPC-C.";
 choices[62][1] = "TPC-R.";
 choices[62][2] = "TPC-H.";
 choices[62][3] = "TPC-A.";
 answers[62] = choices[62][0];
 units[62] = "68";
 comments[62] = "Id Pregunta: 8459. Analista Ayto. Madrid 2010";


//  Id pregunta: 8603 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Qu&eacute; categor&iacute;a de sistema OLAP est&aacute; basado u orientado a la web?";
 choices[63]= new Array();
 choices[63][0] = "SOLAP.";
 choices[63][1] = "DOLAP.";
 choices[63][2] = "WOLAP.";
 choices[63][3] = "RTOLAP.";
 answers[63] = choices[63][2];
 units[63] = "68";
 comments[63] = "Id Pregunta: 8603. Examen TIC A2 2010 interna";


//  Id pregunta: 8805 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con...";
 choices[64]= new Array();
 choices[64][0] = "Data Marts.";
 choices[64][1] = "Metadata.";
 choices[64][2] = "Middleware.";
 choices[64][3] = "Cubos OLAP.";
 answers[64] = choices[64][0];
 units[64] = "68";
 comments[64] = "Id Pregunta: 8805. Examen UPM A2 2011";


//  Id pregunta: 8808 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  El est&aacute;ndar de e-learning participado por el IEEE, que incluye un modelo de referencia para objetos software educativos compartibles, un entorno de ejecuci&oacute;n y un modelo de agregaci&oacute;n de contenido es:";
 choices[65]= new Array();
 choices[65][0] = "AEIC.";
 choices[65][1] = "LOM.";
 choices[65][2] = "LCMS.";
 choices[65][3] = "SCORM.";
 answers[65] = choices[65][3];
 units[65] = "66";
 comments[65] = "Id Pregunta: 8808. Examen UPM A2 2011";


//  Id pregunta: 8812 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Las extensiones del Data Mining son:";
 choices[66]= new Array();
 choices[66][0] = "Web Mining y Text Mining.";
 choices[66][1] = "Web Mining, Text Mining e Hipertext Mining.";
 choices[66][2] = "Text Mining e Hipertext Mining.";
 choices[66][3] = "Web Mining e Hipertext Mining.";
 answers[66] = choices[66][0];
 units[66] = "68";
 comments[66] = "Id Pregunta: 8812. Examen UPM A2 2011";


//  Id pregunta: 8862 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Al Sistema de Informaci&oacute;n Geogr&aacute;fica que basa su funcionalidad en una concepci&oacute;n impl&iacute;cita de las relaciones de vecindad entre los objetos geogr&aacute;ficos, se le llama:";
 choices[67]= new Array();
 choices[67][0] = "Sistema Vectorial.";
 choices[67][1] = "Sistema R&aacute;ster.";
 choices[67][2] = "Sistema georreferencial orientado a objetos.";
 choices[67][3] = "Sistema georreferencial basado en metadatos.";
 answers[67] = choices[67][1];
 units[67] = "67";
 comments[67] = "Id Pregunta: 8862. Analista Ayto. Madrid 2010";


//  Id pregunta: 8866 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Un dato espacial es una variable asociada a una localizaci&oacute;n del espacio. Normalmente se utilizan datos vectoriales, los cuales pueden ser expresados mediante tres tipos de objetos espaciales:";
 choices[68]= new Array();
 choices[68][0] = "Puntos, l&iacute;neas, pol&iacute;gonos.";
 choices[68][1] = "Coordenadas, l&iacute;neas, pol&iacute;gonos.";
 choices[68][2] = "Puntos, vectores, pol&iacute;gonos.";
 choices[68][3] = "Puntos, arcos, rectas.";
 answers[68] = choices[68][0];
 units[68] = "67";
 comments[68] = "Id Pregunta: 8866. Analista Ayto. Madrid 2010";


//  Id pregunta: 8962 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En los Esquemas de copo de nieve:";
 choices[69]= new Array();
 choices[69][0] = "Existe redundancia.";
 choices[69][1] = "No se ahorra espacio.";
 choices[69][2] = "No existe una tabla de hechos central.";
 choices[69][3] = "Las tablas est&aacute;n normalizadas.";
 answers[69] = choices[69][3];
 units[69] = "68";
 comments[69] = "Id Pregunta: 8962. ";


//  Id pregunta: 9152 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Respecto a los LMS, indique la respuesta FALSA: ";
 choices[70]= new Array();
 choices[70][0] = "Permite el an&aacute;lisis de los resultados de la formaci&oacute;n";
 choices[70][1] = "Incluye funciones de gesti&oacute;n de procesos de creaci&oacute;n de contenido";
 choices[70][2] = "Permite el intercambio de datos entre profesores y alumnos";
 choices[70][3] = "Est&aacute; dedicado a la difusi&oacute;n de los contenidos docentes";
 answers[70] = choices[70][1];
 units[70] = "66";
 comments[70] = "Id Pregunta: 9152. ";


//  Id pregunta: 9154 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Indique cu&aacute;l de las siguientes es una soluci&oacute;n de software libre de eLearning:";
 choices[71]= new Array();
 choices[71][0] = "Ganesha";
 choices[71][1] = "OpenSCORM";
 choices[71][2] = "Blackboard";
 choices[71][3] = "WebCT";
 answers[71] = choices[71][0];
 units[71] = "66";
 comments[71] = "Id Pregunta: 9154. ";


//  Id pregunta: 9155 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  En relaci&oacute;n a las gu&iacute;as AGR de la AICC sobre eLearning, se&ntilde;ale la FALSA:";
 choices[72]= new Array();
 choices[72][0] = "La gu&iacute;a AGR007 se refiere al intercambio de cursos entre plataformas";
 choices[72][1] = "La gu&iacute;a AGR010 est&aacute; dedicada a la interoperabilidad entre plataformas web de formaci&oacute;n y sus cursos";
 choices[72][2] = "La gu&iacute;a AGR008 ofrece recomendaciones acerca de los videos digitales";
 choices[72][3] = "La gu&iacute;a AGR009 contiene las recomendaciones referentes a los archivos de audio digital";
 answers[72] = choices[72][3];
 units[72] = "66";
 comments[72] = "Id Pregunta: 9155. ";


//  Id pregunta: 9156 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  La gu&iacute;a AGR010 de la AICC NO tiene entre sus objetivos:";
 choices[73]= new Array();
 choices[73][0] = "El mecanismo que utiliza el CMI para lanzar el contenido CBT";
 choices[73][1] = "Los mecanismos y datos comunes para la comunicaci&oacute;n entre CMI y CBT";
 choices[73][2] = "Las interfaces de usuario comunes entre el CBT y cualquier LMS";
 choices[73][3] = "Una definici&oacute;n com&uacute;n para la organizaci&oacute;n y secuencia del contenido CBT dentro de un curso";
 answers[73] = choices[73][2];
 units[73] = "66";
 comments[73] = "Id Pregunta: 9156. ";


//  Id pregunta: 9160 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Cu&aacute;l NO es un tipo de compresi&oacute;n utilizado para el almacenamiento de informaci&oacute;n raster:";
 choices[74]= new Array();
 choices[74][0] = "Run Length Encoding (RLE)";
 choices[74][1] = "Quadtrees";
 choices[74][2] = "Tiff";
 choices[74][3] = "Wavelets";
 answers[74] = choices[74][2];
 units[74] = "67";
 comments[74] = "Id Pregunta: 9160. NULL";


//  Id pregunta: 9165 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  El est&aacute;ndar m&aacute;s extendido en el campo de los Sistemas de Informaci&oacute;n Geogr&aacute;fica para los servicios de cat&aacute;logo es:";
 choices[75]= new Array();
 choices[75][0] = "ISO 23950";
 choices[75][1] = "ISO 19125";
 choices[75][2] = "ISO 19115";
 choices[75][3] = "Ninguno de los anteriores se refiere a un est&aacute;ndar de servicio de cat&aacute;logo";
 answers[75] = choices[75][0];
 units[75] = "67";
 comments[75] = "Id Pregunta: 9165. NULL";


//  Id pregunta: 9656 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l no es un requisitos de los MOOC (Massive Open Online Course)?";
 choices[76]= new Array();
 choices[76][0] = "Ser un curso";
 choices[76][1] = "Tener car&aacute;cter masivo";
 choices[76][2] = "Online";
 choices[76][3] = "Todas las anteriores";
 answers[76] = choices[76][3];
 units[76] = "66";
 comments[76] = "Id Pregunta: 9656. ";


//  Id pregunta: 9677 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Son est&aacute;ndares GIS:";
 choices[77]= new Array();
 choices[77][0] = "Para metadatos: FGDC Data Content Standard, ISO 19115 Metadatos, OpenGIS Catalog Service.";
 choices[77][1] = "Para servicio de entidades vectoriales: GML, Geography Markup Language (perfil de XML).";
 choices[77][2] = "Para Web Mapping: Open GIS Web Feature Service, ISO 19125 Simple Feature Access.";
 choices[77][3] = "Para protocolos de almacenamiento y transporte de informaci&oacute;n geogr&aacute;fica: OpenGIS Web Map Service (WMS).";
 answers[77] = choices[77][0];
 units[77] = "67";
 comments[77] = "Id Pregunta: 9677. NULL";


//  Id pregunta: 9678 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Se&ntilde;ale la respuesta correcta:";
 choices[78]= new Array();
 choices[78][0] = "La altitud es la distancia vertical desde un punto de referencia de la superficie terrestre.";
 choices[78][1] = "La altura es la distancia vertical a un origen determinado, considerado como nivel 0.";
 choices[78][2] = "La longitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 choices[78][3] = "La latitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 answers[78] = choices[78][3];
 units[78] = "67";
 comments[78] = "Id Pregunta: 9678. NULL";


//  Id pregunta: 9681 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  KML:";
 choices[79]= new Array();
 choices[79][0] = "Es un lenguaje de marcado basado en XML para representar datos geogr&aacute;ficos en tres dimensiones.";
 choices[79][1] = "Es un conjunto de est&aacute;ndares para representar informaci&oacute;n geogr&aacute;fica mediante el uso de capas y est&aacute; construido dentro de la familia de formatos XML.";
 choices[79][2] = "Se crea en contraposici&oacute;n a la gram&aacute;tica de GML.";
 choices[79][3] = "Fue desarrollado para ser manejado con Keyoverlay LT, precursor de Google Earth.";
 answers[79] = choices[79][0];
 units[79] = "67";
 comments[79] = "Id Pregunta: 9681. NULL";


//  Id pregunta: 9683 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes opciones representa elementos dentro de un GIS?";
 choices[80]= new Array();
 choices[80][0] = "Hardware, software, georreferenciaci&oacute;n, equipo cient&iacute;fico y procedimientos.";
 choices[80][1] = "Hardware, software, datos geogr&aacute;ficos, equipo humano y capas tem&aacute;ticas.";
 choices[80][2] = "Proyecci&oacute;n, georreferenciaci&oacute;n, programas, datos espaciales y equipo cient&iacute;fico.";
 choices[80][3] = "Hardware, software, informaci&oacute;n geogr&aacute;fica, equipo humano y procedimientos.";
 answers[80] = choices[80][3];
 units[80] = "67";
 comments[80] = "Id Pregunta: 9683. NULL";


//  Id pregunta: 9685 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Las proyecciones (Georreferenciaci&oacute;n Directa):";
 choices[81]= new Array();
 choices[81][0] = "Son proyecciones cil&iacute;ndricas: Proyecci&oacute;n de Mercator, Proyecci&oacute;n de Peter, Proyecci&oacute;n ortogr&aacute;fica y la Proyecci&oacute;n conforme de Lambert.";
 choices[81][1] = "Son proyecciones azimutales: proyecci&oacute;n azimutal, proyecci&oacute;n azimutal de Lambert, proyecci&oacute;n gnom&oacute;nica y proyecci&oacute;n azimutal m&uacute;ltiple.";
 choices[81][2] = "Son proyecciones c&oacute;nicas: proyecci&oacute;n c&oacute;nica simple, proyecci&oacute;n conforme de Lambert y proyecci&oacute;n c&oacute;nica m&uacute;ltiple. ";
 choices[81][3] = "Son proyecciones estereogr&aacute;ficas: proyecci&oacute;n estereogr&aacute;fica, proyecci&oacute;n ortogr&aacute;fica, proyecciones modificadas y proyecci&oacute;n conforme gnom&oacute;nica. ";
 answers[81] = choices[81][2];
 units[81] = "67";
 comments[81] = "Id Pregunta: 9685. NULL";


//  Id pregunta: 9686 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Respecto a las proyecciones (Georreferenciaci&oacute;n Directa) (elija la falsa):";
 choices[82]= new Array();
 choices[82][0] = "Ofrecen la posibilidad de localizar un fen&oacute;meno geogr&aacute;fico de un determinado nombre, devolviendo la localizaci&oacute;n mediante las coordenadas geogr&aacute;ficas del mismo.";
 choices[82][1] = "Se pueden acotar indicando la extensi&oacute;n espacial de la b&uacute;squeda.";
 choices[82][2] = "Describen el conjunto de reglas de simbolizaci&oacute;n de los fen&oacute;menos geogr&aacute;ficos que detectan.";
 choices[82][3] = "Si hay varios que cumplen los criterios de b&uacute;squeda, el servicio suele proponer atributos adicionales.";
 answers[82] = choices[82][2];
 units[82] = "67";
 comments[82] = "Id Pregunta: 9686. NULL";


//  Id pregunta: 9687 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En Georeferenciaci&oacute;n, las funciones que deben ser desempe&ntilde;adas por los metadatos son:";
 choices[83]= new Array();
 choices[83][0] = "Descubrimiento, exploraci&oacute;n y acceso.";
 choices[83][1] = "Localizaci&oacute;n inicial, exploraci&oacute;n y carga de los datos.";
 choices[83][2] = "Localizaci&oacute;n inicial, exploraci&oacute;n, carga de los datos e interpretaci&oacute;n.";
 choices[83][3] = "Descubrimiento, exploraci&oacute;n y explotaci&oacute;n.";
 answers[83] = choices[83][3];
 units[83] = "67";
 comments[83] = "Id Pregunta: 9687. NULL";


//  Id pregunta: 9688 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Un almac&eacute;n de datos almacena:";
 choices[84]= new Array();
 choices[84][0] = "S&oacute;lo informaci&oacute;n actual.";
 choices[84][1] = "Informaci&oacute;n no vol&aacute;til.";
 choices[84][2] = "Informaci&oacute;n actual e hist&oacute;rica.";
 choices[84][3] = "B y C son correctas.";
 answers[84] = choices[84][2];
 units[84] = "68";
 comments[84] = "Id Pregunta: 9688. ";


//  Id pregunta: 9689 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Un Datamart:";
 choices[85]= new Array();
 choices[85][0] = "Es una Base de Datos.";
 choices[85][1] = "Es m&aacute;s grande (en volumen de datos) que un Datawarehouse.";
 choices[85][2] = "Usa Sistemas de Gesti&oacute;n de Base de Datos multidimensionales.";
 choices[85][3] = "Todas son falsas.";
 answers[85] = choices[85][2];
 units[85] = "68";
 comments[85] = "Id Pregunta: 9689. ";


//  Id pregunta: 9690 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Respecto a las herramientas de explotaci&oacute;n:";
 choices[86]= new Array();
 choices[86][0] = "'Query and reporting' sirve para la elaboraci&oacute;n de informes y listados a partir de la informaci&oacute;n de los almacenes de datos y los datamart.";
 choices[86][1] = "El cuadro de mando anal&iacute;tico contiene informaci&oacute;n de toda la organizaci&oacute;n.";
 choices[86][2] = "OLAP no es una herramienta de explotaci&oacute;n.";
 choices[86][3] = "A es falsa.";
 answers[86] = choices[86][0];
 units[86] = "68";
 comments[86] = "Id Pregunta: 9690. ";


//  Id pregunta: 9753 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Qu&eacute; es el &quot;Data staging area&quot; en el contexto de los Data Warehouses?";
 choices[87]= new Array();
 choices[87][0] = "Es un almac&eacute;n previo de datos y sus procesos asociados, en el que se extraen los datos de las fuentes, se transforman y se adaptan antes de ser cargados en el almac&eacute;n de datos.";
 choices[87][1] = "Durante la fase de dise&ntilde;o de un almac&eacute;n de datos, es la base de datos no permanente usada para ensayar, demostrar y estudiar el rendimiento de los dise&ntilde;os propuestos.";
 choices[87][2] = "Es el &aacute;rea del almac&eacute;n (conceptual o f&iacute;sicamente separada en otra base de datos) donde se cachean las consultas preparadas, cuando &eacute;stas no pueden ejecutarse en tiempo real.";
 choices[87][3] = "Es una copia id&eacute;ntica de las bases de datos originales, cuando en ellas existe mucha carga y no es posible bloquearlas para asegurar la integridad referencial al copiar los datos.";
 answers[87] = choices[87][0];
 units[87] = "68";
 comments[87] = "Id Pregunta: 9753. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9966 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  El subconjunto de datos de un Almac&eacute;n de Datos se denomina:";
 choices[88]= new Array();
 choices[88][0] = "Data Warehouse.";
 choices[88][1] = "OLAP";
 choices[88][2] = "Data Mart.";
 choices[88][3] = "Data Mining.";
 answers[88] = choices[88][2];
 units[88] = "68,71";
 comments[88] = "Id Pregunta: 9966. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9968 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  El Servicio de Representaci&oacute;n de Workflow (Workflow Enactment Service) seg&uacute;n la Workflow Management Coalition (WfMC) se encarga de:";
 choices[89]= new Array();
 choices[89][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos,secuencia de actividades, a&ntilde;adir elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[89][1] = "El modelado y dise&ntilde;o de los procesos, el cual puede ser interpretado en tiempo de ejecuci&oacute;n por el o los motores de Workflow.";
 choices[89][2] = "La definici&oacute;n de los mecanismos requeridos por los desarrolladores de productos Workflow para implementar la comunicaci&oacute;n de un motor Workflow con otros.";
 choices[89][3] = "La interacci&oacute;n entre los participantes del flujo de trabajo y el servicio de lanzamiento de flujo de trabajo";
 answers[89] = choices[89][0];
 units[89] = "71";
 comments[89] = "Id Pregunta: 9968. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9973 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Indique cu&aacute;l de los siguientes elementos NO se asocia a un sistema datawarehouse: ";
 choices[90]= new Array();
 choices[90][0] = "Un motor de transacciones.";
 choices[90][1] = "Las herramientas de Extracci&oacute;n, Transformaci&oacute;n y Carga de datos.";
 choices[90][2] = "Las herramientas de explotaci&oacute;n anal&iacute;tica de la informaci&oacute;n.";
 choices[90][3] = "La base de datos multidimensional";
 answers[90] = choices[90][0];
 units[90] = "68,71";
 comments[90] = "Id Pregunta: 9973. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 9979 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Un sistema que puede emplearse para registrar la relaci&oacute;n del ciudadano con la administraci&oacute;n, anotando todas las relaciones establecidas por &eacute;l, para configurar su personalidad administrativa digital es ";
 choices[91]= new Array();
 choices[91][0] = "Gesti&oacute;n de la Relaci&oacute;n con el Cliente (CRM) ";
 choices[91][1] = "Arquitectura Orientada a Servicios (SOA) ";
 choices[91][2] = "Planificaci&oacute;n de Recursos Empresariales (ERP) ";
 choices[91][3] = "Gesti&oacute;n de Procesos de Negocio (BPM) ";
 answers[91] = choices[91][0];
 units[91] = "65";
 comments[91] = "Id Pregunta: 9979. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 10029 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Los ETL son herramientas utilizadas habitualmente en la miner&iacute;a de datos. &iquest;En qu&eacute; consisten dichas herramientas?";
 choices[92]= new Array();
 choices[92][0] = "Son bases de datos multidimensionales que permiten tener la informaci&oacute;n correctamente estructurada siguiendo multitud de criterios o dimensiones.";
 choices[92][1] = "Son herramientas que realizan informes destinados a la alta direcci&oacute;n de la organizaci&oacute;n.";
 choices[92][2] = "Son aplicaciones que permiten el acceso a la base de datos a trav&eacute;s de p&aacute;ginas HTML.";
 choices[92][3] = "Son herramientas que permiten extraer informaci&oacute;n de diversos or&iacute;genes, realizar modificaciones en dicha informaci&oacute;n y cargarla en un sistema destino.";
 answers[92] = choices[92][3];
 units[92] = "68";
 comments[92] = "Id Pregunta: 10029. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10622 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Son proyectos SIG (Sistemas de Informaci&oacute;n Geogr&aacute;fica) en Espa&ntilde;a:";
 choices[93]= new Array();
 choices[93][0] = "SIC y SILG.";
 choices[93][1] = "SIGNA y SIANE.";
 choices[93][2] = "SIGMA y SIGPAC.";
 choices[93][3] = "SIGMAPA y SEGRO.";
 answers[93] = choices[93][1];
 units[93] = "67";
 comments[93] = "Id Pregunta: 10622. ";


//  Id pregunta: 10623 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique qu&eacute; soluci&oacute;n tiene una mayor rapidez de repuesta para consultas multitabla:";
 choices[94]= new Array();
 choices[94][0] = "OLAP";
 choices[94][1] = "OLTP";
 choices[94][2] = "ETL";
 choices[94][3] = "OLTA";
 answers[94] = choices[94][0];
 units[94] = "68";
 comments[94] = "Id Pregunta: 10623. ";


//  Id pregunta: 10862 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la definici&oacute;n de DataWarehouse de William Inmon, se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una caracter&iacute;stica de este tipo de sistemas:";
 choices[95]= new Array();
 choices[95][0] = "Integrado: los datos deben integrarse en una estructura consistente.";
 choices[95][1] = "Tem&aacute;tico: los datos se organizan por temas.";
 choices[95][2] = "Hist&oacute;rico: una variable puede tomar distintos valores en el tiempo.";
 choices[95][3] = "Vol&aacute;til: los datos no son permanentes en el sistema.";
 answers[95] = choices[95][3];
 units[95] = "68, 71";
 comments[95] = "Id Pregunta: 10862. Examen GSI 2014";


//  Id pregunta: 11278 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes tipos de servicio NO corresponde a un est&aacute;ndar de OGC (Open Geospatial Consortium)?";
 choices[96]= new Array();
 choices[96][0] = "Web Map Service (WMS)";
 choices[96][1] = "Catalogue Service Web (CSW)";
 choices[96][2] = "Tile Map Service (TMS)";
 choices[96][3] = "Web Feature Service (WFS)";
 answers[96] = choices[96][2];
 units[96] = "67";
 comments[96] = "Id Pregunta: 11278. ";


//  Id pregunta: 11280 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de informaci&oacute;n geogr&aacute;fica NO corresponde a un servicio de visualizaci&oacute;n?";
 choices[97]= new Array();
 choices[97][0] = "WFS";
 choices[97][1] = "WMS";
 choices[97][2] = "WMTS";
 choices[97][3] = "WCS";
 answers[97] = choices[97][0];
 units[97] = "67";
 comments[97] = "Id Pregunta: 11280. ";


//  Id pregunta: 11285 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; se entiende por un SIG dual?";
 choices[98]= new Array();
 choices[98][0] = "El que  mantiene  la  informaci&oacute;n  gr&aacute;fica con una clave identificadora &uacute;nica que sirve  para  realizar  b&uacute;squedas  en  el  SGBD  que  contiene la informaci&oacute;n  alfanum&eacute;rica";
 choices[98][1] = "El que contiene  un  modelo  de  comportamiento  a  lo  largo  del tiempo  para  alg&uacute;n  aspecto  de  la  realidad. ";
 choices[98][2] = "El que aplica una concepci&oacute;n orientada  al objeto, en la  que los elementos contengan informaci&oacute;n sobre  sus propiedades, comportamiento etc..";
 choices[98][3] = "El que contempla al mismo tiempo un modelo r&aacute;ster y uno vectorial";
 answers[98] = choices[98][0];
 units[98] = "67";
 comments[98] = "Id Pregunta: 11285. ";


//  Id pregunta: 11510 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Twitter?";
 choices[99]= new Array();
 choices[99][0] = "Hive";
 choices[99][1] = "Cassandra";
 choices[99][2] = "Hbase";
 choices[99][3] = "ZoneKeeper";
 answers[99] = choices[99][1];
 units[99] = "68";
 comments[99] = "Id Pregunta: 11510. NULL";


