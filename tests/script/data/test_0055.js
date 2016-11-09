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

//  Id pregunta: 423 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Seg&uacute;n el Consejo Superior de Administraci&oacute;n Electr&oacute;nica, &iquest;cu&aacute;les son las principales fuentes de normas de sistemas abiertos que se deben aplicar?:";
 choices[0]= new Array();
 choices[0][0] = "ISO, POSIX y est&aacute;ndares de facto";
 choices[0][1] = "ISO, X/OPEN (gu&iacute;as XPG) y est&aacute;ndares de facto";
 choices[0][2] = "ISO, X/OPEN (gu&iacute;as XPG) y EPHOS";
 choices[0][3] = "ISO, POSIX y X/OPEN (gu&iacute;as XPG)";
 answers[0] = choices[0][2];
 units[0] = "40";
 comments[0] = "Id Pregunta: 423. ";


//  Id pregunta: 424 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Seg&uacute;n el Convenio para la Protecci&oacute;n de las personas con respecto al tratamiento automatizado de los datos de car&aacute;cter personal elaborado por el Consejo de Europa, el principio de finalidad corresponde a:";
 choices[1]= new Array();
 choices[1][0] = "Los datos se obtendr&aacute;n y tratar&aacute;n leal y leg&iacute;timamente";
 choices[1][1] = "Los datos se registrar&aacute;n para objetivos determinados y leg&iacute;timos y no se utilizar&aacute;n de forma incompatible con su finalidad";
 choices[1][2] = "Los datos ser&aacute;n adecuados y no exceder&aacute;n de las finalidades para las que se ha registrado.";
 choices[1][3] = "Se conservar&aacute;n s&oacute;lo el tiempo estrictamente necesario para su finalidad";
 answers[1] = choices[1][1];
 units[1] = "29";
 comments[1] = "Id Pregunta: 424. ";


//  Id pregunta: 474 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Uno de los principales impulsores del concepto de organizaci&oacute;n basada en la informaci&oacute;n ha sido:";
 choices[2]= new Array();
 choices[2][0] = "Elton Mayo";
 choices[2][1] = "Peter Drucker";
 choices[2][2] = "Lynda Applegate";
 choices[2][3] = "Pigrogine";
 answers[2] = choices[2][1];
 units[2] = "22";
 comments[2] = "Id Pregunta: 474. ";


//  Id pregunta: 541 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Respecto a las pautas de accesibilidad de la  iniciativa de acesibilidad web WAI del W3C se puede afirmar que ...";
 choices[3]= new Array();
 choices[3][0] = "El nivel de adecuaci&oacute;n A es el m&aacute;s exigente";
 choices[3][1] = "El nivel de adecuaci&oacute;n AA incluye los puntos de verificaci&oacute;n de prioridades 1 y 2";
 choices[3][2] = "La satisfacci&oacute;n de los puntos de verificaci&oacute;n de prioridad 1 es opcional";
 choices[3][3] = "Todas las anteriores afirmaciones son falsas";
 answers[3] = choices[3][1];
 units[3] = "39";
 comments[3] = "Id Pregunta: 541. ";


//  Id pregunta: 578 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  La empresa Du Pont inici&oacute; un estudio sobre t&eacute;cnicas de aplicaci&oacute;n de ordenadores a la planificaci&oacute;n y programaci&oacute;n de proyectos, que recibi&oacute; el nombre de:";
 choices[4]= new Array();
 choices[4][0] = "CPM (Critical Path Method).";
 choices[4][1] = "PERT.";
 choices[4][2] = "Diagrama de Gant.";
 choices[4][3] = "PROPS.";
 answers[4] = choices[4][0];
 units[4] = "27";
 comments[4] = "Id Pregunta: 578. ";


//  Id pregunta: 706 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  DTD se emplea para:";
 choices[5]= new Array();
 choices[5][0] = "Crear documentos XML bien formados";
 choices[5][1] = "Formatear documentos XML";
 choices[5][2] = "Transformar documentos HTML en XML";
 choices[5][3] = "Validar documentos XML";
 answers[5] = choices[5][3];
 units[5] = "69";
 comments[5] = "Id Pregunta: 706. Similar a examen TIC SS A 2004";


//  Id pregunta: 817 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Seg&uacute;n el m&eacute;todo de resoluci&oacute;n de problemas GPS (General Problem Solving):";
 choices[6]= new Array();
 choices[6][0] = "El problema se formaliza o define por los siguientes componentes : I(estado inicial), F (estado final) y O (conjunto de operadores complejos)";
 choices[6][1] = "Existe un problema cuando la aplicaci&oacute;n de un m&eacute;todo conocido a una situaci&oacute;n de incertidumbre no lleva a un estado final determinado";
 choices[6][2] = "Los problemas se dividen en subproblemas m&aacute;s simples de manera recursiva. La unidad m&iacute;nima de divisi&oacute;n se denomina &quot;problema elemental&quot;";
 choices[6][3] = "Cuando hay una discrepancia entre la situaci&oacute;n de partida y aqu&eacute;lla que se quiere alcanzar se dice que hay un problema";
 answers[6] = choices[6][3];
 units[6] = "63";
 comments[6] = "Id Pregunta: 817. ";


//  Id pregunta: 1275 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Los mecanismos de inferencia usados en los sistemas expertos incluyen:";
 choices[7]= new Array();
 choices[7][0] = "La reducci&oacute;n con encadenamiento (chaining), herencia, inducci&oacute;n y abducci&oacute;n";
 choices[7][1] = "Redes sem&aacute;nticas, planificadores (skeletal planners), pizarras (blackboards) y reglas de producci&oacute;n";
 choices[7][2] = "Aserciones y &aacute;rboles de decisi&oacute;n";
 choices[7][3] = "Shells, correspondencia heur&iacute;stica y conjuntos borrosos (fuzzy)";
 answers[7] = choices[7][3];
 units[7] = "64";
 comments[7] = "Id Pregunta: 1275. ";


//  Id pregunta: 1304 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Para trabajar con una vista que contenga tuplas de varias tablas se utilizar&aacute; la sentencia SQL:";
 choices[8]= new Array();
 choices[8][0] = "CREATE TABLE";
 choices[8][1] = "CREATE VIEW";
 choices[8][2] = "ALTER TABLE";
 choices[8][3] = "ALTER VIEW";
 answers[8] = choices[8][1];
 units[8] = "58";
 comments[8] = "Id Pregunta: 1304. ";


//  Id pregunta: 1339 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Seg&uacute;n la WfMC, un workflow se define como:";
 choices[9]= new Array();
 choices[9][0] = "Automatizaci&oacute;n de un procedimiento de negocio, durente la cual los documentos, la informaci&oacute;n o las tareas pasan de un participante a otro de acuerdo a un conjunto de reglas de procedimiento";
 choices[9][1] = "Una descripci&oacute;n de una pieza de trabajo que forma un paso l&oacute;gico dentro de un proceso";
 choices[9][2] = "La representaci&oacute;n del trabajo que tiene que ser procesado (por un participante) en el contexto de una actividad dentro de un proceso";
 choices[9][3] = "El software que controla la ejecuci&oacute;n de programas en los mainframes, enviando mensajes a las consolas cuando se detecta alguna incidencia";
 answers[9] = choices[9][0];
 units[9] = "71";
 comments[9] = "Id Pregunta: 1339. ";


//  Id pregunta: 1480 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Suponiendo una densidad de grabaci&oacute;n lineal d = 10000 bits/cm, un radio R = 5 cm, una velocidad de giro de 3600 rpm y utilizaci&oacute;n de bits de paridad, la velocidad de transferencia es de:";
 choices[10]= new Array();
 choices[10][0] = "0.2 Mbytes/s";
 choices[10][1] = "10 Mbytes/s";
 choices[10][2] = "2.1 Mbytes/s";
 choices[10][3] = "18.9 Mbytes/s";
 answers[10] = choices[10][2];
 units[10] = "48";
 comments[10] = "Id Pregunta: 1480. ";


//  Id pregunta: 1481 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Un dispositivo multifunci&oacute;n, aplicado a la ofim&aacute;tica, dispone habitualmente de las siguientes funciones:";
 choices[11]= new Array();
 choices[11][0] = "Tableta digitalizadora, l&aacute;piz &oacute;ptico y lector de tarjetas de fotograf&iacute;a digital";
 choices[11][1] = "Impresora, esc&aacute;ner, fax, copiadora";
 choices[11][2] = "Todas las anteriores";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = choices[11][1];
 units[11] = "47";
 comments[11] = "Id Pregunta: 1481. ";


//  Id pregunta: 1494 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; se entiende por audioconferencia?:";
 choices[12]= new Array();
 choices[12][0] = "Servicio que permite a m&aacute;s de dos usuarios participar simult&aacute;neamente en una &uacute;nica conversaci&oacute;n";
 choices[12][1] = "Servicio que permite a un usuario telef&oacute;nico depositar mensajes de voz en un audiobuz&oacute;n";
 choices[12][2] = "Servicio que suministra una informaci&oacute;n grabada de tipo gen&eacute;rico";
 choices[12][3] = "Servicio de telefon&iacute;a m&oacute;vil en grupo cerrado de usuarios";
 answers[12] = choices[12][0];
 units[12] = "117";
 comments[12] = "Id Pregunta: 1494. ";


//  Id pregunta: 1561 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes no es un SO para tarjetas?";
 choices[13]= new Array();
 choices[13][0] = " Scfw";
 choices[13][1] = "MultOs";
 choices[13][2] = "Java Card";
 choices[13][3] = " Open Card ";
 answers[13] = choices[13][3];
 units[13] = "74";
 comments[13] = "Id Pregunta: 1561. ";


//  Id pregunta: 1570 AÃ±o de creación de pregunta: 2013-01-01
 questions[14]= "15)  &iquest;Cu&aacute;ntos dispositivos se pueden conectar simult&aacute;neamente a un puerto USB versi&oacute;n 3?:";
 choices[14]= new Array();
 choices[14][0] = "63.";
 choices[14][1] = "127.";
 choices[14][2] = "256.";
 choices[14][3] = " 1024.";
 answers[14] = choices[14][1];
 units[14] = "47";
 comments[14] = "Id Pregunta: 1570. Similar Junta Andaluc&iacute;a";


//  Id pregunta: 1688 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Qu&eacute; es FALSO respecto al NRC?";
 choices[15]= new Array();
 choices[15][0] = "Es un elemento utilizado en la pasarela de pago PISTA";
 choices[15][1] = "Sus siglas significan: N&uacute;mero de Referencia Completo";
 choices[15][2] = "Se compone del n&uacute;mero de justificante m&aacute;s unos caracteres de control";
 choices[15][3] = "Para obtener los caracteres de control se aplica la funci&oacute;n MAC del algoritmo DES a los datos de la operaci&oacute;n, mediante la clave privada de la entidad";
 answers[15] = choices[15][0];
 units[15] = "70";
 comments[15] = "Id Pregunta: 1688. NULL";


//  Id pregunta: 1770 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Respecto a los drivers utilizados en JDBC";
 choices[16]= new Array();
 choices[16][0] = "El driver de tipo 1 utiliza c&oacute;digo Java para hacer llamadas a una API nativa que debe estar en la m&aacute;quina que accede a la base de datos.";
 choices[16][1] = "El driver de tipo III no requiere ninguna instalaci&oacute;n adicional en la m&aacute;quina cliente, pero obliga a la existencia del middleware.";
 choices[16][2] = "La ventaja del driver tipo II es que da acceso a pr&aacute;cticamente todos los sistemas de gesti&oacute;n de base de datos del mercado";
 choices[16][3] = "todas son falsas";
 answers[16] = choices[16][1];
 units[16] = "60";
 comments[16] = "Id Pregunta: 1770. NULL";


//  Id pregunta: 1846 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;A qu&eacute; hace referencia las siglas WAPI?";
 choices[17]= new Array();
 choices[17][0] = "Wireless Advanced Privacy Infrastructure";
 choices[17][1] = "Workflow Application Programming Interface";
 choices[17][2] = "Wired Advanced Professional Institute";
 choices[17][3] = "Wireless Application Programming Interface";
 answers[17] = choices[17][1];
 units[17] = "71";
 comments[17] = "Id Pregunta: 1846. ";


//  Id pregunta: 2114 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;A qu&eacute; se refieren las normas ISO 14000?";
 choices[18]= new Array();
 choices[18][0] = "A la calidad en los procesos productivos";
 choices[18][1] = "A la preservaci&oacute;n del medio ambiente en los procesos productivos";
 choices[18][2] = "A la documentaci&oacute;n del SW en las distintas etapas de un modelo en cascada";
 choices[18][3] = "A la ergonom&iacute;a de los puestos de trabajo";
 answers[18] = choices[18][1];
 units[18] = "92";
 comments[18] = "Id Pregunta: 2114. NULL";


//  Id pregunta: 2165 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Indique cu&aacute;l de las respuestas no forma parte de la documentaci&oacute;n t&eacute;cnica de un sistema de informaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Relaci&oacute;n condiciones de error-acciones";
 choices[19][1] = "Descripciones narrativas de los m&oacute;dulos de los programas";
 choices[19][2] = "Listados del c&oacute;digo objeto";
 choices[19][3] = "Procedimientos de backup-recovery";
 answers[19] = choices[19][2];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2165. NULL";


//  Id pregunta: 2202 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;En qu&eacute; diagramas se representan los tipos de elementos nodos y conexiones?:";
 choices[20]= new Array();
 choices[20][0] = "Diagramas de despliegue";
 choices[20][1] = "Diagramas de componentes";
 choices[20][2] = "Diagramas de descomposici&oacute;n";
 choices[20][3] = "Diagramas de estructura";
 answers[20] = choices[20][0];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2202. NULL";


//  Id pregunta: 2211 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Qu&eacute; es un m&eacute;todo en programaci&oacute;n orientada a objetos?:";
 choices[21]= new Array();
 choices[21][0] = "Una operaci&oacute;n sobre un objeto";
 choices[21][1] = "Un algoritmo";
 choices[21][2] = "Un conjunto de objetos";
 choices[21][3] = "Un atributo de un objeto";
 answers[21] = choices[21][0];
 units[21] = "82";
 comments[21] = "Id Pregunta: 2211. ";


//  Id pregunta: 2267 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El criterio 7 en el modelo EFQM de excelencia es el referente a:";
 choices[22]= new Array();
 choices[22][0] = "Las alianzas y los recursos";
 choices[22][1] = "Los procesos";
 choices[22][2] = "Los resultados en la sociedad";
 choices[22][3] = "Los resultados en los clientes";
 answers[22] = choices[22][3];
 units[22] = "92";
 comments[22] = "Id Pregunta: 2267. NULL";


//  Id pregunta: 2314 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En el modelo en espiral o iterativo del ciclo de vida, cada ciclo en espiral empieza con la identificaci&oacute;n de:";
 choices[23]= new Array();
 choices[23][0] = "Los objetivos de la parte del producto que va a ser elaborada";
 choices[23][1] = "Los medios alternativos para implementar esta parte de producto (dise&ntilde;o A, dise&ntilde;o B, productos software, etc ...)";
 choices[23][2] = "Las restricciones impuestas : costes, calendario, interfaces, etc";
 choices[23][3] = "Todas las respuestas anteriores son v&aacute;lidas";
 answers[23] = choices[23][3];
 units[23] = "76";
 comments[23] = "Id Pregunta: 2314. ";


//  Id pregunta: 2383 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Indicar cu&aacute;l de los siguientes componentes no pertenece al Plan General de Garant&iacute;a de Calidad elaborado por el Ministerio de Administraciones P&uacute;blicas para el Consejo Superior de Inform&aacute;tica en 1991:";
 choices[24]= new Array();
 choices[24][0] = "Esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos";
 choices[24][1] = "Procedimientos de Control de Calidad";
 choices[24][2] = "Plan de desarrollo de prototipos";
 choices[24][3] = "Gu&iacute;a metodol&oacute;gica para la elaboraci&oacute;n de Planes de Garant&iacute;a de Calidad";
 answers[24] = choices[24][2];
 units[24] = "87.88";
 comments[24] = "Id Pregunta: 2383. NULL";


//  Id pregunta: 2625 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Cu&aacute;ntas variables explicativas adicionales (o drivers) existen en cocomo II?";
 choices[25]= new Array();
 choices[25][0] = "15";
 choices[25][1] = "17";
 choices[25][2] = "22";
 choices[25][3] = "10";
 answers[25] = choices[25][1];
 units[25] = "89";
 comments[25] = "Id Pregunta: 2625. NULL";


//  Id pregunta: 2648 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  En la fase de an&aacute;lisis de Metrica v3 se puede afirmar";
 choices[26]= new Array();
 choices[26][0] = "Las fases de de an&aacute;lisis de consistencia y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[26][1] = "Las fases de de an&aacute;lisis de casos de uso y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[26][2] = "Las fases de de an&aacute;lisis de casos de uso y an&aacute;lisis de consistenacia se pueden hacer de forma paralela";
 choices[26][3] = "Las fases de definici&oacute;n del sistema y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 answers[26] = choices[26][1];
 units[26] = "86";
 comments[26] = "Id Pregunta: 2648. NULL";


//  Id pregunta: 2661 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Cu&aacute;l de los siguientes no es un m&eacute;todo o t&eacute;cnica de recuperaci&oacute;n de informaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Sistemas de hojeo-ojeo.";
 choices[27][1] = "Sistemas de fila incierta.";
 choices[27][2] = "Sistemas de normal.";
 choices[27][3] = "Sistemas expertos.";
 answers[27] = choices[27][1];
 units[27] = "96";
 comments[27] = "Id Pregunta: 2661. NULL";


//  Id pregunta: 2741 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  En el modelo entidad-relaci&oacute;n de CHEN la cardinalidad es:";
 choices[28]= new Array();
 choices[28][0] = "El n&uacute;mero de tablas";
 choices[28][1] = "El n&uacute;mero de elementos del modelo";
 choices[28][2] = "El n&uacute;mero m&iacute;nimo y m&aacute;ximo de entidades de un tipo de entidad que se relacionan con una entidad del otro tipo.";
 choices[28][3] = "El n&uacute;mero de relaciones unitarias";
 answers[28] = choices[28][2];
 units[28] = "80";
 comments[28] = "Id Pregunta: 2741. ";


//  Id pregunta: 2939 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  La plataforma Java que se utiliza para el desarrollo de aplicaciones para PDA es:";
 choices[29]= new Array();
 choices[29][0] = "Micro Edition";
 choices[29][1] = "Standard Edition";
 choices[29][2] = "Enterprise Edition";
 choices[29][3] = "Cualquiera de ellas indistintamente dada su portabilidad";
 answers[29] = choices[29][0];
 units[29] = "116";
 comments[29] = "Id Pregunta: 2939. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2990 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  Indicar cu&aacute;l de las siguientes afirmaciones sobre el estandar GPRS no es correcta";
 choices[30]= new Array();
 choices[30][0] = "La tarificaci&oacute;n es por la cantidad de tr&aacute;fico transmitido y por calidades de servicio";
 choices[30][1] = "Se asigna un canal por usuario que permanecer&aacute; asignado aunque no se envien datos";
 choices[30][2] = "La voz y los datos se multiplexan, permitiendo su envio y recepci&oacute;n simultaneamente";
 choices[30][3] = "La velocidad de conexi&oacute;n puede llegar a los 50kbps";
 answers[30] = choices[30][1];
 units[30] = "108";
 comments[30] = "Id Pregunta: 2990. ";


//  Id pregunta: 3014 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponden con las de FR?";
 choices[31]= new Array();
 choices[31][0] = "Orientado a conexi&oacute;n";
 choices[31][1] = "no fiable";
 choices[31][2] = "sin garant&iacute;as de caudal m&iacute;nimo";
 choices[31][3] = "ninguna de las anteriores";
 answers[31] = choices[31][2];
 units[31] = "109";
 comments[31] = "Id Pregunta: 3014. ";


//  Id pregunta: 3096 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Una Bridge CA:";
 choices[32]= new Array();
 choices[32][0] = "Es un dispositivo de nivel 3 (Red) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inalambrica y una terrestre";
 choices[32][1] = "Es un dispositivo de nivel 2 (Enlace) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inalambrica y una terrestre";
 choices[32][2] = "Es una autoridad de certificaci&oacute;n que tiene certificados cruzados con otras muchas CA, pero que no expide certificados, simplemente vale para hacer que los de las otras CA sean interoperables entre si";
 choices[32][3] = "Todas son falsas";
 answers[32] = choices[32][2];
 units[32] = "102";
 comments[32] = "Id Pregunta: 3096. ";


//  Id pregunta: 3454 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  El protocolo IP se dise&ntilde;&oacute; en la RFC:";
 choices[33]= new Array();
 choices[33][0] = "793";
 choices[33][1] = "791";
 choices[33][2] = "768";
 choices[33][3] = "821";
 answers[33] = choices[33][1];
 units[33] = "100";
 comments[33] = "Id Pregunta: 3454. NULL";


//  Id pregunta: 3551 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  En relaci&oacute;n con la prestaci&oacute;n de servicios de telecomunicaciones en Espa&ntilde;a, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[34]= new Array();
 choices[34][0] = "Est&aacute; liberalizada la provisi&oacute;n de servicios, pero no la instalaci&oacute;n de redes de telecomunicaci&oacute;n";
 choices[34][1] = "S&oacute;lo est&aacute;n liberalizadas las comunicaciones telef&oacute;nicas y el acceso a internet";
 choices[34][2] = "S&oacute;lo Telef&oacute;nica de Espa&ntilde;a, Jazztel y Ono est&aacute;n autorizadas a alquilar circuitos punto a punto";
 choices[34][3] = "La instalaci&oacute;n y explotaci&oacute;n de redes y la provisi&oacute;n de servicios de telecomunicaciones est&aacute;n liberalizados";
 answers[34] = choices[34][3];
 units[34] = "110";
 comments[34] = "Id Pregunta: 3551. ";


//  Id pregunta: 4035 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  La ITU ha definido una serie de clases de servicio para ATM. La clase A se caracteriza por:";
 choices[35]= new Array();
 choices[35][0] = "Velocidad de acceso variable, retardo constante y no ser orientada a conexi&oacute;n";
 choices[35][1] = "Velocidad de acceso constante, retardo variable y ser orientada a conexi&oacute;n";
 choices[35][2] = "Velocidad de acceso variable, retardo variable y no ser orientada a conexi&oacute;n";
 choices[35][3] = "Velocidad de acceso constante, retardo constante y ser orientado a conexi&oacute;n";
 answers[35] = choices[35][3];
 units[35] = "109";
 comments[35] = "Id Pregunta: 4035. ";


//  Id pregunta: 4062 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  El protocolo de transporte TCP, est&aacute;ndar de internet, NO tiene entre sus caracter&iacute;sticas";
 choices[36]= new Array();
 choices[36][0] = "la entrega fiable de paquetes";
 choices[36][1] = "la detecci&oacute;n y el control de la congesti&oacute;n";
 choices[36][2] = "es orientado a conexi&oacute;n";
 choices[36][3] = "su RFC es 793";
 answers[36] = choices[36][1];
 units[36] = "112,100";
 comments[36] = "Id Pregunta: 4062. ";


//  Id pregunta: 4074 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Qu&eacute; tipo de software es m&aacute;s costoso cuando lo compramos?";
 choices[37]= new Array();
 choices[37][0] = "El libre";
 choices[37][1] = "El comercial";
 choices[37][2] = "Los dos anteriores son igual de  costosos";
 choices[37][3] = "No hay una respuesta en terminos generales y depende casi siempre del software concreto del que hablemos";
 answers[37] = choices[37][1];
 units[37] = "61";
 comments[37] = "Id Pregunta: 4074. ";


//  Id pregunta: 4336 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  La tecnolog&iacute;a dominante hoy en d&iacute;a en el campo de las redes locales es:";
 choices[38]= new Array();
 choices[38][0] = "Ethernet.";
 choices[38][1] = "Arcnet";
 choices[38][2] = "Arpanet.";
 choices[38][3] = "Sarenet";
 answers[38] = choices[38][0];
 units[38] = "97";
 comments[38] = "Id Pregunta: 4336. NULL";


//  Id pregunta: 4353 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  La telefon&iacute;a m&oacute;vil celular:";
 choices[39]= new Array();
 choices[39][0] = "Permite el paso din&aacute;mico de un terminal entre las c&eacute;lulas.";
 choices[39][1] = "No permite el cambio de c&eacute;lula durante la conversaci&oacute;n.";
 choices[39][2] = "Establece un tama&ntilde;o de c&eacute;lula mayor en ciudad que en espacios abiertos a fin de soportar la mayor densidad de tr&aacute;fico.";
 choices[39][3] = "S&oacute;lo funciona con tecnolog&iacute;a digital.";
 answers[39] = choices[39][0];
 units[39] = "108";
 comments[39] = "Id Pregunta: 4353. ";


//  Id pregunta: 4365 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Un grafo dirigido que tiene un nodo especial desde el cual se puede alcanzar a cualquier otro nodo atravesando un n&uacute;mero finito de arcos de forma &uacute;nica es";
 choices[40]= new Array();
 choices[40][0] = "Un grafo orientado a procesos.";
 choices[40][1] = "Un grafo representado.";
 choices[40][2] = "Una Pila";
 choices[40][3] = "Un &aacute;rbol.";
 answers[40] = choices[40][3];
 units[40] = "";
 comments[40] = "Id Pregunta: 4365. ";


//  Id pregunta: 4394 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  El repositorio com&uacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Agrupa un conjunto de herramientas de desarrollo.";
 choices[41][1] = "Forma un banco de trabajo.";
 choices[41][2] = "Organiza un entorno de desarrollo.";
 choices[41][3] = "Es un manejador de versiones.";
 answers[41] = choices[41][2];
 units[41] = "87";
 comments[41] = "Id Pregunta: 4394. NULL";


//  Id pregunta: 4739 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  La refactorizaci&oacute;n consiste en:";
 choices[42]= new Array();
 choices[42][0] = "Mejorar el c&oacute;digo fuente.";
 choices[42][1] = "Mejorar el dise&ntilde;o de una aplicaci&oacute;n.";
 choices[42][2] = "Mejorar el mantenimiento del c&oacute;digo fuente.";
 choices[42][3] = "Todas las respuestas anteriores son correctas.";
 answers[42] = choices[42][3];
 units[42] = "91";
 comments[42] = "Id Pregunta: 4739. Examen 2006 JCYL";


//  Id pregunta: 4846 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en Java EE (Java Enterprise Edition)?";
 choices[43]= new Array();
 choices[43][0] = "WAR (Web Archive)";
 choices[43][1] = "EAR (Enterprise Archive)";
 choices[43][2] = "BAR (Bean Archive)";
 choices[43][3] = "JAR (Java Archive)";
 answers[43] = choices[43][2];
 units[43] = "60";
 comments[43] = "Id Pregunta: 4846. NULL";


//  Id pregunta: 4871 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes NO es un diagrama UML (Unified Modeling Language)?";
 choices[44]= new Array();
 choices[44][0] = "Diagrama de actividades";
 choices[44][1] = "Diagrama de clases";
 choices[44][2] = "Diagrama de secuencia";
 choices[44][3] = "Diagrama de frecuencia";
 answers[44] = choices[44][3];
 units[44] = "82";
 comments[44] = "Id Pregunta: 4871. ";


//  Id pregunta: 4927 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v3, &iquest;en cu&aacute;l de las siguientes actividades del proceso de Planificaci&oacute;n del Sistema de Informaci&oacute;n participa el jefe del proyecto?:";
 choices[45]= new Array();
 choices[45][0] = "Definici&oacute;n y organizaci&oacute;n del plan de sistemas de informaci&oacute;n.";
 choices[45][1] = "Identificaci&oacute;n de requisitos.";
 choices[45][2] = "Estudio de los sistemas de informaci&oacute;n actuales.";
 choices[45][3] = "Definici&oacute;n de la arquitectura tecnol&oacute;gica.";
 answers[45] = choices[45][0];
 units[45] = "86";
 comments[45] = "Id Pregunta: 4927. Examen TIC B 2007";


//  Id pregunta: 5104 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  En un sistema de informaci&oacute;n, los informes espec&iacute;ficos que no se hab&iacute;an pedido anteriormente y que los directivos necesitan con rapidez para resolver un problema muy concreto ser&aacute;n para:";
 choices[46]= new Array();
 choices[46][0] = "Un nivel operativo";
 choices[46][1] = "Un nivel t&aacute;ctico";
 choices[46][2] = "Un nivel estrat&eacute;gico";
 choices[46][3] = "Un nivel transaccional";
 answers[46] = choices[46][1];
 units[46] = "22";
 comments[46] = "Id Pregunta: 5104. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5166 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Qu&eacute; tama&ntilde;o de celda se utiliza en ATM (Asynchronous Transfer Mode)?";
 choices[47]= new Array();
 choices[47][0] = "Tiene un tama&ntilde;o variable, al tratarse de conmutaci&oacute;n de paquetes de longitud variable.";
 choices[47][1] = "53 bytes";
 choices[47][2] = "1024 bytes";
 choices[47][3] = "64 bytes";
 answers[47] = choices[47][1];
 units[47] = "109";
 comments[47] = "Id Pregunta: 5166. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5194 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  En los diagramas de estructura, pertenecientes al dise&ntilde;o estructurado, &iquest;cu&aacute;l de las siguientes opciones no es un tipo de cupla (comunicaci&oacute;n entre m&oacute;dulos)?";
 choices[48]= new Array();
 choices[48][0] = "Cupla de Datos.";
 choices[48][1] = "Cupla de Funciones.";
 choices[48][2] = "Cupla Modificada.";
 choices[48][3] = "Cupla de Resultados.";
 answers[48] = choices[48][1];
 units[48] = "84";
 comments[48] = "Id Pregunta: 5194. ";


//  Id pregunta: 5444 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque ";
 choices[49]= new Array();
 choices[49][0] = "el lenguaje Java se deriva de C++.";
 choices[49][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[49][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[49][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin";
 answers[49] = choices[49][1];
 units[49] = "60";
 comments[49] = "Id Pregunta: 5444. Castilla y Le&oacute;n";


//  Id pregunta: 5559 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  En base al TRLPI (RD 1/1996) y las modificaciones introducidas por la Ley 23/2006:";
 choices[50]= new Array();
 choices[50][0] = "La copia privada se entiende como un derecho de los usuarios.";
 choices[50][1] = "Este derecho de copia privada da lugar al establecimiento de una remuneraci&oacute;n compensatoria para los autores.";
 choices[50][2] = "Dicha remuneraci&oacute;n compensatoria aplica tambi&eacute;n a los programas de ordenador y bases de datos.";
 choices[50][3] = "El canon aplicado a los equipos de reproducci&oacute;n digitales deber&aacute; revisarse cada 2 a&ntilde;os.";
 answers[50] = choices[50][3];
 units[50] = "37";
 comments[50] = "Id Pregunta: 5559. ";


//  Id pregunta: 5697 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;C&oacute;mo se conecta el DNI electr&oacute;nico al ordenador personal del ciudadano?";
 choices[51]= new Array();
 choices[51][0] = "Es necesario un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en las comisar&iacute;as";
 choices[51][1] = " A trav&eacute;s de un lector de tarjetas que cumpla el standard ISO-7816";
 choices[51][2] = "Con un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en establecimientos comerciales";
 choices[51][3] = "No es posible conectarlo a ordenadores personales, s&oacute;lo los especialmente habilitados para ello por la Direcci&oacute;n General de la Polic&iacute;a";
 answers[51] = choices[51][1];
 units[51] = "74";
 comments[51] = "Id Pregunta: 5697. NULL";


//  Id pregunta: 5769 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  De acuerdo al RD 1720/2007, cuando los ficheros contengan un conjunto de datos de car&aacute;cter personal suficientes que permitan obtener una evaluaci&oacute;n de la personalidad del individuo, deber&aacute;:";
 choices[52]= new Array();
 choices[52][0] = "Adoptarse las medidas de seguridad calificadas de nivel b&aacute;sico";
 choices[52][1] = "Adoptarse las medidas de seguridad calificadas de nivel medio";
 choices[52][2] = "Adoptarse las medidas de seguridad calificadas de nivel alto";
 choices[52][3] = "No adoptarse ninguna medidas de seguridad prevista";
 answers[52] = choices[52][1];
 units[52] = "29";
 comments[52] = "Id Pregunta: 5769. ";


//  Id pregunta: 5983 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;En cu&aacute;l de los siguientes componentes de XML se define la estructura de los datos que va a contener un formulario XML?";
 choices[53]= new Array();
 choices[53][0] = "Manifiestos (XSF).";
 choices[53][1] = "Vistas (XLS).";
 choices[53][2] = "Esquemas (XSD).";
 choices[53][3] = "Datos (XML).";
 answers[53] = choices[53][2];
 units[53] = "69";
 comments[53] = "Id Pregunta: 5983. TIC A 2009";


//  Id pregunta: 6119 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  De acuerdo con la Ley 11/2007, &iquest;es posible la destrucci&oacute;n de documentos emitidos originalmente en soporte papel y de los que se haya hecho copia electr&oacute;nica?";
 choices[54]= new Array();
 choices[54][0] = "S&iacute;, la Ley lo permite, pero antes cada Administraci&oacute;n debe regular los t&eacute;rminos y condiciones de este proceso.";
 choices[54][1] = "S&iacute;, la Ley lo permite, y no hace falta regular o establecer ninguna condici&oacute;n.";
 choices[54][2] = "No, la Ley no lo permite, porque los documentos en soporte papel est&aacute;n protegidos por ser Patrimonio Hist&oacute;rico Administrativo.";
 choices[54][3] = "S&iacute;, la Ley lo permite, pero s&oacute;lo los documentos no firmados y que no reconozcan derechos subjetivos.";
 answers[54] = choices[54][0];
 units[54] = "43";
 comments[54] = "Id Pregunta: 6119. TIC A 2009";


//  Id pregunta: 6411 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  De acuerdo a lo dispuesto en la ley de servicios de la sociedad de la informaci&oacute;n y comercio electr&oacute;nico, &iquest;Cu&aacute;l es la sanci&oacute;n correspondiente por la comisi&oacute;n de infracciones muy graves?";
 choices[55]= new Array();
 choices[55][0] = "150.001 hasta 600.000 euros";
 choices[55][1] = "150.001 hasta 300.000 euros";
 choices[55][2] = "300.001 hasta 600.000 euros";
 choices[55][3] = "600.001 hasta 1,000.000 euros";
 answers[55] = choices[55][0];
 units[55] = "30";
 comments[55] = "Id Pregunta: 6411. Ley 34/2002, art&iacute;culo 39";


//  Id pregunta: 6412 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes no es un eje de actuaci&oacute;n del Plan Avanza 2?";
 choices[56]= new Array();
 choices[56][0] = "Desarrollo del sector TIC";
 choices[56][1] = "Capacitaci&oacute;n TIC";
 choices[56][2] = " Servicios P&uacute;blicos Digitales";
 choices[56][3] = "Desarrollo I+D+i";
 answers[56] = choices[56][3];
 units[56] = "30";
 comments[56] = "Id Pregunta: 6412. NULL";


//  Id pregunta: 6603 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Indicar cual de las siguientes opciones NO es un contrato de suministro:";
 choices[57]= new Array();
 choices[57][0] = "La compra de un ERP";
 choices[57][1] = "El mantenimiento de las licencias del SGBD";
 choices[57][2] = "El mantenimiento de la aplicaci&oacute;n que usa el SGBD";
 choices[57][3] = "El alquiler del sistema de telecomunicaciones";
 answers[57] = choices[57][2];
 units[57] = "41";
 comments[57] = "Id Pregunta: 6603. ";


//  Id pregunta: 7145 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  En la Ley 11/2007 de 22 de Junio, se regula las condiciones de teletrabajo en la Administraci&oacute;n General del Estado. Estas condiciones deber&iacute;an estar establecidas antes del:";
 choices[58]= new Array();
 choices[58][0] = "1 de marzo de 2008";
 choices[58][1] = "1 de abril de 2008";
 choices[58][2] = "31 de diciembre de 2009";
 choices[58][3] = "31 de diciembre de 2008";
 answers[58] = choices[58][0];
 units[58] = "43";
 comments[58] = "Id Pregunta: 7145. Examen TIC B 2009";


//  Id pregunta: 7312 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  La Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos (LAECSP), en su art&iacute;culo 42 establece que el esquema Nacional de Interoperabilidad y el Esquema Nacional de Seguridad se aprobar&aacute;n por:";
 choices[59]= new Array();
 choices[59][0] = "Real Decreto del Gobierno, a propuesta de la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 choices[59][1] = "Ley Org&aacute;nica, a propuesta de la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 choices[59][2] = "Real Decreto del Gobierno, a propuesta de la Comisi&oacute;n del Mercado de Telecomunicaciones y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 choices[59][3] = "Ley Org&aacute;nica, a propuesta de la Comisi&oacute;n del Mercado de Telecomunicaciones y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 answers[59] = choices[59][0];
 units[59] = "44";
 comments[59] = "Id Pregunta: 7312. NULL";


//  Id pregunta: 8143 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)   En Inteligencia Artificial, la hip&oacute;tesis del mundo cerrado consiste en:";
 choices[60]= new Array();
 choices[60][0] = " Suponer falso todo lo que no est&aacute; almacenado en la base de hechos.";
 choices[60][1] = " Suponer cierto todo lo que est&aacute; almacenado en la base de hechos.";
 choices[60][2] = " Suponer unas veces cierto y otras falso la informaci&oacute;n almacenada en la base de hechos.";
 choices[60][3] = " Ninguna de las anteriores.";
 answers[60] = choices[60][0];
 units[60] = "NULL";
 comments[60] = "Id Pregunta: 8143. Map 2008";


//  Id pregunta: 8312 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes NO es una tecnolog&iacute;a xDSL? ";
 choices[61]= new Array();
 choices[61][0] = "VDSL.";
 choices[61][1] = "DDSL. ";
 choices[61][2] = "HDSL. ";
 choices[61][3] = "ADSL. ";
 answers[61] = choices[61][1];
 units[61] = "107";
 comments[61] = "Id Pregunta: 8312. Examen TIC A2 2010";


//  Id pregunta: 8369 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  En los diagramas estructurados (Nassi-Schneiderman): ";
 choices[62]= new Array();
 choices[62][0] = "Las flechas de uni&oacute;n son verticales.";
 choices[62][1] = "No hay flechas de uni&oacute;n.";
 choices[62][2] = "Cada posible acci&oacute;n se representa con una figura diferente.";
 choices[62][3] = "Las cajas no son contiguas.";
 answers[62] = choices[62][1];
 units[62] = "81";
 comments[62] = "Id Pregunta: 8369. Examen TIC A2 2010";


//  Id pregunta: 8380 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  La velocidad de transferencia base (1X) de un disco Blu-ray es de:";
 choices[63]= new Array();
 choices[63][0] = "54 Mbits/s.";
 choices[63][1] = "4,5 MBytes/s.";
 choices[63][2] = "36 MBytes/s.";
 choices[63][3] = "9 MBytes/s.";
 answers[63] = choices[63][1];
 units[63] = "48";
 comments[63] = "Id Pregunta: 8380. Examen TIC A2 2010";


//  Id pregunta: 8614 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cual de las siguientes soluciones comerciales de Escritorio Remoto se distribuye bajo licencia propietaria?";
 choices[64]= new Array();
 choices[64][0] = "Vinagre";
 choices[64][1] = "DameWare Mini Remote Control";
 choices[64][2] = "TightVNC";
 choices[64][3] = "RdesKtop";
 answers[64] = choices[64][1];
 units[64] = "118";
 comments[64] = "Id Pregunta: 8614. Examen TIC A2 2010 interna";


//  Id pregunta: 9051 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Con respecto a las siguientes siglas:";
 choices[65]= new Array();
 choices[65][0] = "El IMEI es un identificador del dispositivo que se est&aacute; usando";
 choices[65][1] = "El msisdn es un n&uacute;mero &uacute;nico de identificaci&oacute;n de usario en la red.";
 choices[65][2] = "EL IMSI es el n&uacute;mero de identificaci&oacute;n de la tarjeta SIM";
 choices[65][3] = "Todas las anteriores";
 answers[65] = choices[65][3];
 units[65] = "108";
 comments[65] = "Id Pregunta: 9051. ";


//  Id pregunta: 9139 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  &iquest;Qu&eacute; suele incorporar un controlador de Entrada/Salida?";
 choices[66]= new Array();
 choices[66][0] = "Una UART";
 choices[66][1] = "El controlador de puerto paralelo";
 choices[66][2] = "Reloj de tiempo real";
 choices[66][3] = "Todas las anteriores";
 answers[66] = choices[66][3];
 units[66] = "47";
 comments[66] = "Id Pregunta: 9139. ";


//  Id pregunta: 9265 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  En el editor &quot;vi&quot; el comando &quot;dd&quot; &iquest;Qu&eacute; funci&oacute;n realiza?";
 choices[67]= new Array();
 choices[67][0] = "No realiza ninguna acci&oacute;n.";
 choices[67][1] = "Borra la l&iacute;nea anterior.";
 choices[67][2] = "Borra la l&iacute;nea actual";
 choices[67][3] = "Borra la l&iacute;nea posterior.";
 answers[67] = choices[67][2];
 units[67] = "53";
 comments[67] = "Id Pregunta: 9265. Examen TICA2-2011";


//  Id pregunta: 9270 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  En un sistema de almacenamiento con 6 discos de 400 GB de capacidad cada uno, &iquest;cu&aacute;l de las siguientes configuraciones RAID tiene al menos 1 TB de capacidad y podr&iacute;a resistir el fallo de 3 discos en algunas ocasiones sin p&eacute;rdida de datos?";
 choices[68]= new Array();
 choices[68][0] = "RAID 6+0";
 choices[68][1] = "RAID 5+0";
 choices[68][2] = "RAID 5+1";
 choices[68][3] = "RAID 0+1";
 answers[68] = choices[68][3];
 units[68] = "48";
 comments[68] = "Id Pregunta: 9270. Examen TICA2-2011";


//  Id pregunta: 9510 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  El lenguaje Java es un lenguaje:";
 choices[69]= new Array();
 choices[69][0] = "De herencia simple";
 choices[69][1] = "De herencia m&uacute;ltiple";
 choices[69][2] = "Que no permite la herencia";
 choices[69][3] = "Todas las anteriores son falsas";
 answers[69] = choices[69][0];
 units[69] = "116";
 comments[69] = "Id Pregunta: 9510. NULL";


//  Id pregunta: 9515 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l es la estructura est&aacute;ndar de una directiva JSP?";
 choices[70]= new Array();
 choices[70][0] = "&lt;@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[70][1] = "&lt;%@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...%&gt;";
 choices[70][2] = "&lt;!@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[70][3] = "&lt;*@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...*&gt;";
 answers[70] = choices[70][1];
 units[70] = "116";
 comments[70] = "Id Pregunta: 9515. NULL";


//  Id pregunta: 9603 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  De las siguientes bases de datos &iquest;cual sigue un esquema noSQL?";
 choices[71]= new Array();
 choices[71][0] = "MariaBD";
 choices[71][1] = "Apache Cassandra";
 choices[71][2] = "Heidi";
 choices[71][3] = "Ingres";
 answers[71] = choices[71][1];
 units[71] = "58";
 comments[71] = "Id Pregunta: 9603. NULL";


//  Id pregunta: 9813 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  La t&eacute;cnica que permite solapar instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas se denomina:";
 choices[72]= new Array();
 choices[72][0] = "Parametrizaci&oacute;n.";
 choices[72][1] = "Segmentaci&oacute;n.";
 choices[72][2] = "Multiplexaci&oacute;n.";
 choices[72][3] = "Paginaci&oacute;n.";
 answers[72] = choices[72][1];
 units[72] = "52";
 comments[72] = "Id Pregunta: 9813. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9929 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l es el orden de las primitivas de servicio?";
 choices[73]= new Array();
 choices[73][0] = "REQUEST &ndash; CONFIRM &ndash;INDICATION &ndash; RESPONSE.";
 choices[73][1] = "REQUEST &ndash; RESPONSE &ndash; INDICATION &ndash; CONFIRM.";
 choices[73][2] = "REQUEST &ndash; INDICATION &ndash; RESPONSE &ndash; CONFIRM.";
 choices[73][3] = "REQUEST &ndash; CONFIRM &ndash; RESPONSE &ndash; INDICATION.";
 answers[73] = choices[73][2];
 units[73] = "100";
 comments[73] = "Id Pregunta: 9929. NULL";


//  Id pregunta: 10174 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  UML o Unified Modeling Language&hellip;";
 choices[74]= new Array();
 choices[74][0] = "Fue desarrollado por tres autores conocidos como los &quot;Tres Amigos&quot;";
 choices[74][1] = "No constituye un m&eacute;todo o metodolog&iacute;a de an&aacute;lisis orientado a objetos";
 choices[74][2] = "Est&aacute;ndar actualmente soportado, mantenido y evolucionado por OMG";
 choices[74][3] = "Todas las anteriores";
 answers[74] = choices[74][3];
 units[74] = "82";
 comments[74] = "Id Pregunta: 10174. ";


//  Id pregunta: 10204 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[75]= new Array();
 choices[75][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[75][1] = "Desaparece el RNC (Radio Network Controller) y sus funciones se incorporan al eNode B (Evolved Node B)";
 choices[75][2] = "Desaparecen los soft handovers y solo existen hard handovers";
 choices[75][3] = "Mantiene en su arquitectura los HLR (Home Locationl Register) usados desde GSM";
 answers[75] = choices[75][3];
 units[75] = "108";
 comments[75] = "Id Pregunta: 10204. En la arquitectura se introduce un nuevo elemento llamado HSS (Home Subscriber Server) basado en la antigua HLR y AuC";


//  Id pregunta: 10237 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  La tecnolog&iacute;a que nos permite trabajar en Java con servicios de directorio como LDAP, Active Directory, se conoce como:";
 choices[76]= new Array();
 choices[76][0] = "Java Messaging Services (JMS)";
 choices[76][1] = "Java Naming and Directory Interface (JNDI)";
 choices[76][2] = "Remote Method Invocation (RMI)";
 choices[76][3] = "JavaBeans Activation Framework (JMF)";
 answers[76] = choices[76][1];
 units[76] = "116";
 comments[76] = "Id Pregunta: 10237. NULL";


//  Id pregunta: 10305 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Qu&eacute; muestra el comando top en UNIX?";
 choices[77]= new Array();
 choices[77][0] = "Los ficheros abiertos.";
 choices[77][1] = "El escritorio.";
 choices[77][2] = "Los procesos.";
 choices[77][3] = "Los puertos TCP/IP.";
 answers[77] = choices[77][2];
 units[77] = "53";
 comments[77] = "Id Pregunta: 10305. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10429 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  La virtualizaci&oacute;n basada en VDI (Virtual Desktop Infrastructure) ";
 choices[78]= new Array();
 choices[78][0] = "permite ratios de consolidaci&oacute;n de 10 a 1 respecto a servidores de terminales. ";
 choices[78][1] = "est&aacute; basado en la soluci&oacute;n XenApp de Citrix.";
 choices[78][2] = "aporta aislamiento y control sobre los puestos de trabajo gestionados.";
 choices[78][3] = "no est&aacute; dise&ntilde;ado para soportar el perfil de Desarrolladores, por el control limitado del entorno.  ";
 answers[78] = choices[78][2];
 units[78] = "119";
 comments[78] = "Id Pregunta: 10429. Examen TIC A1 2013";


//  Id pregunta: 10566 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Seg&uacute;n ITIL un instrumento de gesti&oacute;n para el buen gobierno de las Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones en el dominio del soporte y el desempe&ntilde;o es:";
 choices[79]= new Array();
 choices[79][0] = "Plan de Continuidad de Negocio";
 choices[79][1] = "Plan de contingencia";
 choices[79][2] = "Plan de Recuperaci&oacute;n ante Desastres";
 choices[79][3] = "Plan de pruebas";
 answers[79] = choices[79][1];
 units[79] = "31, 32, 33";
 comments[79] = "Id Pregunta: 10566. ";


//  Id pregunta: 10595 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  La revisi&oacute;n de la solvencia t&eacute;cnica del empresario para la conservaci&oacute;n de la clasificaci&oacute;n debe realizarse:";
 choices[80]= new Array();
 choices[80][0] = "Anualmente";
 choices[80][1] = "Cada tres a&ntilde;os";
 choices[80][2] = "No es necesario revisarla mientras se mantengan las condiciones y circunstancias en que se bas&oacute; la concesi&oacute;n de la clasificaci&oacute;n.";
 choices[80][3] = "S&oacute;lo se revisa a petici&oacute;n de los interesados.";
 answers[80] = choices[80][0];
 units[80] = "41";
 comments[80] = "Id Pregunta: 10595. ";


//  Id pregunta: 10597 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  La ISO publica:";
 choices[81]= new Array();
 choices[81][0] = "Informes T&eacute;cnicos y Gu&iacute;as ISO.";
 choices[81][1] = "Especificaciones Internacionales y Memor&aacute;ndum de errores.";
 choices[81][2] = "A y B son correctas.";
 choices[81][3] = "La ISO no publica ning&uacute;n documento, s&oacute;lo certifica est&aacute;ndares de otras organizaciones.";
 answers[81] = choices[81][0];
 units[81] = "42";
 comments[81] = "Id Pregunta: 10597. S&iacute; publica Technical Reports e ISO Guides. Pero no publica Especificaciones Internacionales sino Technical Specifications o Publicly Available Specifications. Tampoco publica Memor&aacute;ndums de Errores sino Correcciones T&eacute;cnicas (Technical Corrigendum).";


//  Id pregunta: 10665 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Polycom, Radvision y Lifesize son:";
 choices[82]= new Array();
 choices[82][0] = "Sistemas de videoconferencia";
 choices[82][1] = "Sistemas de telefon&iacute;a";
 choices[82][2] = "Conectores RDSI";
 choices[82][3] = "C&oacute;decs de video.";
 answers[82] = choices[82][0];
 units[82] = "117";
 comments[82] = "Id Pregunta: 10665. ";


//  Id pregunta: 10715 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre entidades registrales &iquest;En qu&eacute; segmento se situa el &quot;idenficador de fichero&quot;?";
 choices[83]= new Array();
 choices[83][0] = "De asunto";
 choices[83][1] = "De origen";
 choices[83][2] = "De destino";
 choices[83][3] = "De anexo";
 answers[83] = choices[83][3];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10715. ";


//  Id pregunta: 10746 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  El Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC estar&aacute; compuesto por:";
 choices[84]= new Array();
 choices[84][0] = "Un m&iacute;nimo de cinco miembros y un m&aacute;ximo de diez miembros.";
 choices[84][1] = "Un m&iacute;nimo de cinco miembros.";
 choices[84][2] = "Un m&aacute;ximo de diez miembros.";
 choices[84][3] = "Un m&iacute;nimo de cinco miembros y un m&aacute;ximo de quince miembros.";
 answers[84] = choices[84][0];
 units[84] = "24";
 comments[84] = "Id Pregunta: 10746. ";


//  Id pregunta: 10883 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v3:";
 choices[85]= new Array();
 choices[85][0] = "SetRequest PDU";
 choices[85][1] = "InformRequest PDU";
 choices[85][2] = "Report PDU";
 choices[85][3] = "GetBackRequest PDU";
 answers[85] = choices[85][3];
 units[85] = "112";
 comments[85] = "Id Pregunta: 10883. Examen GSI 2014";


//  Id pregunta: 10896 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Diferencia entre el protocolo RIP v1 y RIP v2:";
 choices[86]= new Array();
 choices[86][0] = "RIP v1 es un protocolo de estado del enlace mientras que el RIP v2 es de vector de distancia.";
 choices[86][1] = "RIP v1 encapsula los mensajes en paquetes UDP y RIP v2 en paquetes TCP.";
 choices[86][2] = "RIP v1 no admite subredes y RIP v2 si las admite.";
 choices[86][3] = "RIP v1 es un protocolo de encaminamiento din&aacute;mico de tipo IGP Y RIP v2 es un protocolo de encaminamiento din&aacute;mico de tipo BGP.";
 answers[86] = choices[86][2];
 units[86] = "102";
 comments[86] = "Id Pregunta: 10896. Examen GSI 2014";


//  Id pregunta: 10900 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[87]= new Array();
 choices[87][0] = "Mediante claves sim&eacute;tricas.";
 choices[87][1] = "Mediante claves asim&eacute;tricas.";
 choices[87][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[87][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[87] = choices[87][0];
 units[87] = "73, 74";
 comments[87] = "Id Pregunta: 10900. Examen GSI 2014";


//  Id pregunta: 10916 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;En qu&eacute; consiste la liberaci&oacute;n del dividendo digital?";
 choices[88]= new Array();
 choices[88][0] = "Es el proceso por el que se volvieron a repartir las frecuencias del espectro radioel&eacute;ctrico de los 900 MHz, anteriormente asignadas a Movistar, Vodafone y Orange, a aquellos operadores que lo solicitaron, de forma que pudieran ser utilizadas para ofrecer servicios m&oacute;viles LTE/4G.";
 choices[88][1] = "Se denomina as&iacute; al espectro asignado a la emisi&oacute;n de televisi&oacute;n anal&oacute;gica, que va a pasar a ser utilizado por tecnolog&iacute;as LTE/4G.";
 choices[88][2] = "Se denomina as&iacute; al espectro recuperado al hacerse efectiva la transici&oacute;n a la televisi&oacute;n digital terrestre.";
 choices[88][3] = "Es el proceso de reordenaci&oacute;n de algunos canales TDT, para liberar las frecuencias radioel&eacute;ctricas de la banda de 800 MHz que ser&aacute; utilizada por tecnolog&iacute;as m&oacute;viles LTE/4G.";
 answers[88] = choices[88][3];
 units[88] = "110";
 comments[88] = "Id Pregunta: 10916. Examen GSI 2014";


//  Id pregunta: 10956 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Un agente inteligente es un programa inform&aacute;tico que:";
 choices[89]= new Array();
 choices[89][0] = "Por encargo de un usuario u otro programa realiza sugerencias determin&iacute;sticas predeterminadas.";
 choices[89][1] = "Por encargo de un usuario realiza sugerencias que requieren cierto grado de aprendizaje, sin llegar a ejecutar tareas.";
 choices[89][2] = "Por encargo de un usuario u otro programa, realiza de forma aut&oacute;noma tareas que requieren cierto grado de inteligencia y aprendizaje.";
 choices[89][3] = "Por encargo de un usuario realiza sugerencias que deben ser evaluadas por el usuario que las encarga antes de ser ejecutadas.";
 answers[89] = choices[89][2];
 units[89] = "63";
 comments[89] = "Id Pregunta: 10956. TIC A1 AGE 2014";


//  Id pregunta: 10980 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  LINQ (Language-Integrated Query) es:";
 choices[90]= new Array();
 choices[90][0] = "Es una librer&iacute;a de Javascript para la integraci&oacute;n de aplicaciones con HTML5.";
 choices[90][1] = "Es la tecnolog&iacute;a que permite la integraci&oacute;n de elementos Java dentro de una aplicaci&oacute;n .NET y viceversa.";
 choices[90][2] = "Facilita el acceso a bases de datos y ficheros XML desde una aplicaci&oacute;n .NET.";
 choices[90][3] = "Es el API de integraci&oacute;n de la red social profesional Linkedin, basado en OAuth.";
 answers[90] = choices[90][2];
 units[90] = "59";
 comments[90] = "Id Pregunta: 10980. TIC A1 AGE 2014";


//  Id pregunta: 11017 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;ntos anexos incluye el RD 3/2010 (ENS)?";
 choices[91]= new Array();
 choices[91][0] = "Ninguno";
 choices[91][1] = "1";
 choices[91][2] = "2";
 choices[91][3] = "5";
 answers[91] = choices[91][3];
 units[91] = "30";
 comments[91] = "Id Pregunta: 11017. ";


//  Id pregunta: 11063 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l es la definici&oacute;n de servicio seg&uacute;n ITIL?";
 choices[92]= new Array();
 choices[92][0] = "Medio para entregar valor a los clientes, facilitando los resultados que estos quieren conseguir sin asumir costes o riesgos espec&iacute;ficos";
 choices[92][1] = "Subdivisi&oacute;n de una organizaci&oacute;n, que est&aacute; especializada en realizar un tipo concreto de trabajo y tiene la responsabilidad de obtener resultados concretos";
 choices[92][2] = "Conjunto estructurado de actividades dise&ntilde;ado para cumplir objetivo concreto.";
 choices[92][3] = "Conjunto de responsabilidades, actividades y autorizaciones concedidas a una persona o equipo.";
 answers[92] = choices[92][0];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11063. ";


//  Id pregunta: 11200 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[93]= new Array();
 choices[93][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[93][1] = "Investigaci&oacute;n e innovaci&oacute;n";
 choices[93][2] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[93][3] = "Beneficios TIC para la Sociedad UE";
 answers[93] = choices[93][2];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11200. ";


//  Id pregunta: 11267 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;les NO es uno de los cuatro conceptos (conocidos como las cuatro Ps de Mintzberg) en base  a los cuales debe estar definida la estrategia de una organizaci&oacute;n seg&uacute;n ITIL versi&oacute;n 3?";
 choices[94]= new Array();
 choices[94][0] = "Perspectiva: disponer de metas y valores bien definidos y asumibles.";
 choices[94][1] = "Partici&oacute;n: definir y dividir los servicios en procesos.";
 choices[94][2] = "Planificaci&oacute;n: establecer criterios claros de desarrollo futuro.";
 choices[94][3] = "Patr&oacute;n: mantener una coherencia en la toma de decisiones y acciones adoptadas.";
 answers[94] = choices[94][1];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11267. ";


//  Id pregunta: 11270 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En Cobitv5:";
 choices[95]= new Array();
 choices[95][0] = "La cascada de metas es el mecanismo para traducir las necesidades de las partes interesadas en metas corporativas, metas relacionadas con las TI y metas catalizadoras.";
 choices[95][1] = "Las metas corporativas han sido desarrolladas utilizando las dimensiones del cuadro de mando integral (CMI).";
 choices[95][2] = "Los tres objetivos principales de Gobierno a considerar son: realizaci&oacute;n de beneficios, optimizaci&oacute;n de riesgos y optimizaci&oacute;n de recursos.";
 choices[95][3] = "Todas son correctas.";
 answers[95] = choices[95][3];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11270. ";


//  Id pregunta: 11330 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; planes nacionales se derivan de la Ley General de Telecomunicaciones?";
 choices[96]= new Array();
 choices[96][0] = "Numeraci&oacute;n y direccionamiento";
 choices[96][1] = "Denominaci&oacute;n";
 choices[96][2] = "Las dos anteriores";
 choices[96][3] = "Ninguna";
 answers[96] = choices[96][2];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11330. ";


//  Id pregunta: 11604 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La versi&oacute;n de Android 6.0 recibe el nombre de:";
 choices[97]= new Array();
 choices[97][0] = "Lollipop";
 choices[97][1] = "Marshmallow";
 choices[97][2] = "McFlurry";
 choices[97][3] = "Cupcake";
 answers[97] = choices[97][1];
 units[97] = "46";
 comments[97] = "Id Pregunta: 11604. ";


//  Id pregunta: 11624 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale la respuesta incorrecta con respecto al procesado de documentos XML:";
 choices[98]= new Array();
 choices[98][0] = "Los parsers DOM consumen mucha memoria.";
 choices[98][1] = "Los parsers DOM facilitan el acceso a toda la informaci&oacute;n del documento XML.";
 choices[98][2] = "Los parsers SAX permiten la modificaci&oacute;n de datos en memoria.";
 choices[98][3] = "Para los parsers SAX el tama&ntilde;o del documento XML es irrelevante.";
 answers[98] = choices[98][2];
 units[98] = "69";
 comments[98] = "Id Pregunta: 11624. ";


//  Id pregunta: 11788 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la gu&iacute;a CCN-STIC-827 Gesti&oacute;n y uso de dispositivos m&oacute;viles:";
 choices[99]= new Array();
 choices[99][0] = "La gesti&oacute;n de dispositivos m&oacute;viles puede realizarse mediante el env&iacute;o de mensajes SMS reconocibles por el software propietario de la marca instalado en el dispositivo o el Sistema Operativo.";
 choices[99][1] = "La gesti&oacute;n de dispositivos m&oacute;viles puede realizarse aplicando Mobile Device Management (MDM) con un producto de terceros.";
 choices[99][2] = "Mobile Application Management (MAM) se dirige a gestionar una o varias aplicaciones espec&iacute;ficas dentro de cada dispositivo m&oacute;vil, en vez de gestionar la totalidad del dispositivo.";
 choices[99][3] = "Todas las anteriores son correctas.";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11788. ";


