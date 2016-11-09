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

//  Id pregunta: 47 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes grupos de funciones corresponde a los de un sistema de informaci&oacute;n?:";
 choices[0]= new Array();
 choices[0][0] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, tratamiento y distribuci&oacute;n";
 choices[0][1] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, codificaci&oacute;n y distribuci&oacute;n";
 choices[0][2] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, filtrado y distribuci&oacute;n";
 choices[0][3] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n";
 answers[0] = choices[0][0];
 units[0] = "21";
 comments[0] = "Id Pregunta: 47. NULL";


//  Id pregunta: 164 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El sistema de informaci&oacute;n integrado en una organizaci&oacute;n debe tener unos objetivos. &iquest;Cu&aacute;l no ser&iacute;a exactamente uno de ellos?:";
 choices[1]= new Array();
 choices[1][0] = "Suministrar datos a los distintos niveles de la direcci&oacute;n";
 choices[1][1] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[1][2] = "Extraer ventajas competitivas de su entorno";
 choices[1][3] = "Ayudar a determinar los objetivos de la organizaci&oacute;n";
 answers[1] = choices[1][3];
 units[1] = "21";
 comments[1] = "Id Pregunta: 164. ";


//  Id pregunta: 195 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  En el caso que se desee caracterizar la carga de un sistema inform&aacute;tico, qu&eacute; par&aacute;metro no se deber&iacute;a tener en cuenta:";
 choices[2]= new Array();
 choices[2][0] = "Tiempo de CPU por trabajo.";
 choices[2][1] = "Tiempo de reflexi&oacute;n del usuario.";
 choices[2][2] = "Memoria necesaria para ejecutar un trabajo.";
 choices[2][3] = "Troughput.";
 answers[2] = choices[2][3];
 units[2] = "35";
 comments[2] = "Id Pregunta: 195. NULL";


//  Id pregunta: 320 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  La mayor amenaza para la seguridad inform&aacute;tica de una empresa, con m&aacute;s del 50% de los casos conocidos de ataques, se debe a:";
 choices[3]= new Array();
 choices[3][0] = "antiguos empleados";
 choices[3][1] = "hackers externos";
 choices[3][2] = "empleados no autorizados";
 choices[3][3] = "empleados autorizados";
 answers[3] = choices[3][3];
 units[3] = "31,32,33";
 comments[3] = "Id Pregunta: 320. ";


//  Id pregunta: 355 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Las Comunidades Aut&oacute;nomas pueden crear organismos similares a la Agencia de Protecci&oacute;n de Datos que:";
 choices[4]= new Array();
 choices[4][0] = "Tendr&aacute;n competencias &uacute;nicamente sobre los ficheros de datos de car&aacute;cter personal, creados o gestionados por las CC.AA.";
 choices[4][1] = "Tendr&aacute;n competencias sobre los ficheros de datos de car&aacute;cter personal creados o gestionados por las CCAA y por la Administraci&oacute;n local de su &aacute;mbito territorial";
 choices[4][2] = "S&oacute;lo tendr&aacute;n competencias sobre los ficheros de datos de car&aacute;cter personal creados por la Administraci&oacute;n local de su &aacute;mbito territorial si lo autoriza el Director de la Agencia de Protecci&oacute;n de Datos";
 choices[4][3] = "Las CCAA no pueden crear organismos similares a la Agencia de Protecci&oacute;n de Datos";
 answers[4] = choices[4][1];
 units[4] = "29";
 comments[4] = "Id Pregunta: 355. ";


//  Id pregunta: 512 AÃ±o de creación de pregunta: 2003-01-01
 questions[5]= "6)  Respecto a la ley 1/1996 de propiedad intelectual es falso que proteja:";
 choices[5]= new Array();
 choices[5][0] = "Los derechos de explotaci&oacute;n";
 choices[5][1] = "Los programas de ordenador";
 choices[5][2] = "La documentaci&oacute;n";
 choices[5][3] = "Las ideas que subyacen en los programas de ordenador ";
 answers[5] = choices[5][3];
 units[5] = "36";
 comments[5] = "Id Pregunta: 512. ";


//  Id pregunta: 667 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  En su libro &quot;La estructura de las organizaciones&quot; Mintzberg describe las organizaciones matriciales y se&ntilde;ala diversos factores que las identifican. &iquest;Cu&aacute;l de los siguientes no corresponde a estos factores?";
 choices[6]= new Array();
 choices[6][0] = "Elevada tendencia a disgregar a los especialistas en unidades funcionales en lo que corresponde a asuntos internos";
 choices[6][1] = "Estructura sumamente org&aacute;nica con escasa formalizaci&oacute;n del comportamiento";
 choices[6][2] = "Elevada especializaci&oacute;n del puesto basada en una preparaci&oacute;n formal";
 choices[6][3] = "Uso de dispositivos de enlace para fomentar la adaptaci&oacute;n mutua";
 answers[6] = choices[6][0];
 units[6] = "22";
 comments[6] = "Id Pregunta: 667. ";


//  Id pregunta: 670 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Seg&uacute;n el R.D. 209/2003:";
 choices[7]= new Array();
 choices[7][0] = "la Administraci&oacute;n P&uacute;blica proporcionar&aacute; al ciudadano una direcci&oacute;n &uacute;nica mediante la que &eacute;ste deber&aacute; realizar la tramitaci&oacute;n electr&oacute;nica pertinente una vez se disponga de los medios adecuados";
 choices[7][1] = "Se podr&aacute;n realizar por los organismos competentes copias firmadas de los documentos electr&oacute;nicos, de la misma manera que se pueden compulsar y sellar copias de los documentos en papel";
 choices[7][2] = "Los c&oacute;mputos de los plazos de entrega a efectos legales podr&aacute;n incluir d&iacute;as inh&aacute;biles, al estar los registros electr&oacute;nicos funcionando 24 horas al d&iacute;a y 7 d&iacute;as a la semana";
 choices[7][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[7] = choices[7][3];
 units[7] = "30";
 comments[7] = "Id Pregunta: 670. NULL";


//  Id pregunta: 719 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  Para realizar un programa que accede a una base de datos para presentar el resultado de una b&uacute;squeda, se utilizar&aacute;:";
 choices[8]= new Array();
 choices[8][0] = "Sentencias de lectura de los ficheros que componen la base de datos";
 choices[8][1] = "SQL embebido en un lenguaje de programaci&oacute;n";
 choices[8][2] = "SQL din&aacute;mico, ya que es m&aacute;s eficiente que el SQL est&aacute;tico";
 choices[8][3] = "SQL, escrito directamente sobre una sesi&oacute;n de la base de datos";
 answers[8] = choices[8][1];
 units[8] = "58";
 comments[8] = "Id Pregunta: 719. Examen TIC MAP B 2004";


//  Id pregunta: 956 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Con el comando kill de Unix es posible enviar se&ntilde;ales a otros procesos. &iquest;Qu&eacute; se&ntilde;al no puede capturar ni ignorar un proceso, y provoca la terminaci&oacute;n del mismo?:";
 choices[9]= new Array();
 choices[9][0] = "8";
 choices[9][1] = "2";
 choices[9][2] = "15";
 choices[9][3] = "9";
 answers[9] = choices[9][3];
 units[9] = "53";
 comments[9] = "Id Pregunta: 956. ";


//  Id pregunta: 1027 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Entrust:";
 choices[10]= new Array();
 choices[10][0] = "Un algoritmo criptogr&aacute;fico";
 choices[10][1] = "Un mecanismo de intercambio de claves";
 choices[10][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[10][3] = "Una funcion resumen";
 answers[10] = choices[10][2];
 units[10] = "74";
 comments[10] = "Id Pregunta: 1027. NULL";


//  Id pregunta: 1082 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En el lenguaje de programaci&oacute;n BASIC:";
 choices[11]= new Array();
 choices[11][0] = "No se puede trabajar en modo int&eacute;rprete";
 choices[11][1] = "No es posible compilar un programa para su posterior ejecuci&oacute;n.";
 choices[11][2] = "S&oacute;lo se puede trabajar en modo int&eacute;rprete en la fase de pruebas.";
 choices[11][3] = "Puede trabajarse en modo int&eacute;rprete o ejecutarse el programa una vez compilado.";
 answers[11] = choices[11][3];
 units[11] = "";
 comments[11] = "Id Pregunta: 1082. ";


//  Id pregunta: 1118 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En las tarjetas inteligentes sin contacto, la comunicaci&oacute;n se realiza mediante tecnolog&iacute;a de radio frecuencia, incorporando las tarjetas una antena de RF. En funci&oacute;n de la distancia que permita la comunicaci&oacute;n, &iquest;qu&eacute; descripci&oacute;n corresponde a las tarjetas?";
 choices[12]= new Array();
 choices[12][0] = "Requiere el contacto f&iacute;sico (&lt;2mm) con  el dispositivo de interfaz, aunque no su inserci&oacute;n, ni usa contactos el&eacute;ctricos";
 choices[12][1] = "Permite una distancia de 10 cm con el dispositivo de interfaz";
 choices[12][2] = "No permite una distancia mayor de 5 cm con dispositivo de interfaz";
 choices[12][3] = "Todas las tarjetas inteligentes sin contacto son de proximidad";
 answers[12] = choices[12][1];
 units[12] = "74";
 comments[12] = "Id Pregunta: 1118. NULL";


//  Id pregunta: 1213 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La compresi&oacute;n o compactaci&oacute;n de datos en los dispositivos de almacenamiento magn&eacute;tico, es una t&eacute;cnica efectiva para:";
 choices[13]= new Array();
 choices[13][0] = "Reducir la ocupaci&oacute;n de los registros en dispositivos DASD";
 choices[13][1] = "Reducir el n&uacute;mero de I-O's, mejorando la eficiencia del procesador";
 choices[13][2] = "Mejorar la eficiencia del buffer de datos";
 choices[13][3] = "Todas las anteriores respuestas son correctas";
 answers[13] = choices[13][3];
 units[13] = "48";
 comments[13] = "Id Pregunta: 1213. ";


//  Id pregunta: 1244 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La t&eacute;cnica o tecnolog&iacute;a consistente en dise&ntilde;ar dispositivos microelectr&oacute;nicos de peque&ntilde;&iacute;simo tama&ntilde;o para, por ejemplo, introducirlos en el cuerpo humano e imitar el comportamiento de sus c&eacute;lulas, se denomina:";
 choices[14]= new Array();
 choices[14][0] = "Tecnolog&iacute;a milim&eacute;trica";
 choices[14][1] = "Microtecnolog&iacute;a";
 choices[14][2] = "Microb&oacute;tica";
 choices[14][3] = "Nanotecnolog&iacute;a";
 answers[14] = choices[14][3];
 units[14] = "47";
 comments[14] = "Id Pregunta: 1244. ";


//  Id pregunta: 1297 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Para cuantificar el movimiento existente entre la entrada a una base de datos orientada a objetos y la salida se emplean dos sistemas. El denominado 'din&aacute;mica d&eacute;bil' se caracteriza por:";
 choices[15]= new Array();
 choices[15][0] = "Considerar la creaci&oacute;n y destrucci&oacute;n de objetos";
 choices[15][1] = "Definir el tiempo de vida de los objetos como el intervalo de existencia asociado a los mismos";
 choices[15][2] = "Reflejar el movimiento y cambios de valor de los atributos variables";
 choices[15][3] = "Modificar la sociedad de objetos entre s&iacute;, pero no la observabilidad de los mismos";
 answers[15] = choices[15][2];
 units[15] = "57";
 comments[15] = "Id Pregunta: 1297. ";


//  Id pregunta: 1346 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Se&ntilde;ale la alternativa que contiene los operadores que, juntos, componen el operador &lsquo;join&rsquo; del &aacute;lgebra relacional:";
 choices[16]= new Array();
 choices[16][0] = "Selecci&oacute;n, proyecci&oacute;n y diferencia";
 choices[16][1] = "Selecci&oacute;n, proyecci&oacute;n y producto cartesiano";
 choices[16][2] = "Proyecci&oacute;n, producto cartesiano y diferencia";
 choices[16][3] = "Proyecci&oacute;n, producto cartesiano y uni&oacute;n";
 answers[16] = choices[16][1];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1346. ";


//  Id pregunta: 1349 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Se&ntilde;ale la respuesta falsa respecto de Unix:";
 choices[17]= new Array();
 choices[17][0] = "Se cre&oacute; basandose en MULTICS";
 choices[17][1] = "Est&aacute; escrito en lenguaje C";
 choices[17][2] = "Se us&oacute; primero en la NASA";
 choices[17][3] = "Inicialmente era gratuito";
 answers[17] = choices[17][2];
 units[17] = "53";
 comments[17] = "Id Pregunta: 1349. ";


//  Id pregunta: 1369 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Si un disco tiene 7 pistas por cilindro y la capacidad  de cada  pista es de 2000 caracteres, para copiar una cinta que contiene 300 registros de 100 caracteres cada uno, &iquest;cu&aacute;ntos cilindros har&iacute;an falta?:";
 choices[18]= new Array();
 choices[18][0] = "3 cilindros";
 choices[18][1] = "2 cilindros";
 choices[18][2] = "4 cilindros";
 choices[18][3] = "5 cilindros";
 answers[18] = choices[18][0];
 units[18] = "48";
 comments[18] = "Id Pregunta: 1369. ";


//  Id pregunta: 1605 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  Gnutella es un sistema Peer-to-Peer que:";
 choices[19]= new Array();
 choices[19][0] = "Tiene una arquitectura jerarquizada";
 choices[19][1] = "Es tambi&eacute;n un protocolo que consta de cuatro tipos de mensajes";
 choices[19][2] = "Permite el intercambio no centralizado de recetas de cocina.";
 choices[19][3] = "Mantiene una base de datos centralizada que ofrece a sus participantes";
 answers[19] = choices[19][2];
 units[19] = "62";
 comments[19] = "Id Pregunta: 1605. ";


//  Id pregunta: 1746 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Qu&eacute; tipo de arquitectura propone el comit&eacute; ANSI/X3/SPARC para la normalizaci&oacute;n de los SGBD";
 choices[20]= new Array();
 choices[20][0] = "Arquitectura de dos niveles: estructura global y vistas l&oacute;gicas";
 choices[20][1] = "Arquitectura de tres niveles: nivel interno o f&iacute;sico, conceptual y externo o l&oacute;gico";
 choices[20][2] = "Arquitectura de cuatro niveles: interno, f&iacute;sico, conceptual y l&oacute;gico";
 choices[20][3] = "Arquitectura de un &uacute;nico nivel denominado nivel global";
 answers[20] = choices[20][1];
 units[20] = "57";
 comments[20] = "Id Pregunta: 1746. ";


//  Id pregunta: 1947 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  La t&eacute;cnica que se emplea para la modelizaci&oacute;n sem&aacute;ntica de datos a la hora de dise&ntilde;ar un sistema de informaci&oacute;n, se denomina:";
 choices[21]= new Array();
 choices[21][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[21][1] = "Diagrama de Flujo de Datos";
 choices[21][2] = "Diagrama de Contexto";
 choices[21][3] = "Modelo de Datos";
 answers[21] = choices[21][0];
 units[21] = "58";
 comments[21] = "Id Pregunta: 1947. ";


//  Id pregunta: 2051 AÃ±o de creación de pregunta: 2004-01-01
 questions[22]= "23)  En un modelo de datos jer&aacute;rquico";
 choices[22]= new Array();
 choices[22][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[22][1] = "Un registro es subordinado directo de c&oacute;mo m&aacute;ximo otro registro";
 choices[22][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo";
 choices[22][3] = "Los registros est&aacute;n organizados en una red de relaciones mediante un grafo";
 answers[22] = choices[22][1];
 units[22] = "57";
 comments[22] = "Id Pregunta: 2051. Pregunta Junta Andalucia - A";


//  Id pregunta: 2210 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Qu&eacute; entidades certifican ISO-9000 en Espa&ntilde;a?:";
 choices[23]= new Array();
 choices[23][0] = "S&oacute;lo ISO";
 choices[23][1] = "S&oacute;lo AENOR";
 choices[23][2] = "Empresas privadas";
 choices[23][3] = "AENOR y empresas privadas";
 answers[23] = choices[23][3];
 units[23] = "92";
 comments[23] = "Id Pregunta: 2210. NULL";


//  Id pregunta: 2690 AÃ±o de creación de pregunta: 2004-01-01
 questions[24]= "25)  &iquest;Cu&aacute;les son los criterios agentes en el modelo de calidad EFQM de excelencia?";
 choices[24]= new Array();
 choices[24][0] = "Liderazgo, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[24][1] = "Liderazgo, personal, pol&iacute;tica y estrategia, innovaci&oacute;n y apredizaje, procesos";
 choices[24][2] = "Rendimiento, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][0];
 units[24] = "87,88,92";
 comments[24] = "Id Pregunta: 2690. ";


//  Id pregunta: 2735 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Un buen analista debe exhibir los siguientes rasgos de car&aacute;cter";
 choices[25]= new Array();
 choices[25][0] = "Capacidad de captaci&oacute;n de los problemas del entorno de usuario";
 choices[25][1] = "Capacidad de s&iacute;ntesis de los problemas";
 choices[25][2] = "Capacidad de comprensi&oacute;n de conceptos abstractos, reorganizaci&oacute;n en apartados l&oacute;gicos y s&iacute;ntesis de soluciones para cada apartado";
 choices[25][3] = "Todas las anteriores";
 answers[25] = choices[25][3];
 units[25] = "78";
 comments[25] = "Id Pregunta: 2735. ";


//  Id pregunta: 2883 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes subcriterios no corresponde al criterio &quot;Personas&quot; en el modelo EFQM?";
 choices[26]= new Array();
 choices[26][0] = "Planificaci&oacute;n, gesti&oacute;n y mejora de los recursos humanos";
 choices[26][1] = "Identificaci&oacute;n, desarrollo y mantenimiento del conocimiento y la capacidad de las personas de la organizaci&oacute;n";
 choices[26][2] = "Existencia de un autoliderazgo en las personas de la organizaci&oacute;n";
 choices[26][3] = "Recompensa, reconocimiento y atenci&oacute;n a las personas de la organizaci&oacute;n";
 answers[26] = choices[26][2];
 units[26] = "92";
 comments[26] = "Id Pregunta: 2883. NULL";


//  Id pregunta: 2978 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  &iquest;Cu&aacute;s de los siguientes estandares de redes de &aacute;rea local se caracterizan por ir sobre 2 pares trenzados apantallados";
 choices[27]= new Array();
 choices[27][0] = "1000BaseLX";
 choices[27][1] = "1000BaseSX";
 choices[27][2] = "1000BaseCX";
 choices[27][3] = "1000BaseT";
 answers[27] = choices[27][2];
 units[27] = "101";
 comments[27] = "Id Pregunta: 2978. Examen Julio 2003";


//  Id pregunta: 3317 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Qu&eacute; velocidad de transmisi&oacute;n es m&aacute;s acorde con la tecnolog&iacute;a GPRS?:";
 choices[28]= new Array();
 choices[28][0] = "64 kbps";
 choices[28][1] = "256 kbps";
 choices[28][2] = "384 kbps";
 choices[28][3] = "115 kbps";
 answers[28] = choices[28][3];
 units[28] = "108";
 comments[28] = "Id Pregunta: 3317. ";


//  Id pregunta: 3408 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  FDDI (Fiber Distributed Data Interface) es:";
 choices[29]= new Array();
 choices[29][0] = "Una red de fibra &oacute;ptica tipo &lsquo;paso de testigo&rsquo; en anillo";
 choices[29][1] = "Una red de fibra &oacute;ptica compatible con Ethernet en el interface del transmisor/receptor";
 choices[29][2] = "Un protocolo utilizado en redes que operan a 100 Mbps";
 choices[29][3] = "Una interfaz &oacute;ptica para la distribuci&oacute;n de datos";
 answers[29] = choices[29][0];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3408. ";


//  Id pregunta: 3550 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En redes MAN, protocolo DQDB, se cumple que:";
 choices[30]= new Array();
 choices[30][0] = "Las celdas tienen longitud de 53 bytes";
 choices[30][1] = "Es compatible con ATM";
 choices[30][2] = "Tienen una carga &uacute;til de 48 bytes";
 choices[30][3] = "Todas las anteriores respuestas son correctas";
 answers[30] = choices[30][3];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3550. ";


//  Id pregunta: 3595 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La direcci&oacute;n de un socket se conforma con:";
 choices[31]= new Array();
 choices[31][0] = "La direcci&oacute;n IP del host y el modo de acceso";
 choices[31][1] = "La direcci&oacute;n IP del host y la direcci&oacute;n de un puerto local";
 choices[31][2] = "La URL del host";
 choices[31][3] = "La URL del host y el modo de acceso";
 answers[31] = choices[31][1];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3595. NULL";


//  Id pregunta: 3597 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La direcci&oacute;n IP:";
 choices[32]= new Array();
 choices[32][0] = "Es &uacute;nica para cada tarjeta de red";
 choices[32][1] = "Es asignada por una entidad supranacional";
 choices[32][2] = "Puede ser modificada manualmente en UNIX";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = choices[32][2];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3597. NULL";


//  Id pregunta: 3619 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  La norma FTAM, &iquest;en qu&eacute; nivel del est&aacute;ndar OSI se encuentra?:";
 choices[33]= new Array();
 choices[33][0] = "Nivel de red";
 choices[33][1] = "Nivel de transferencia de ficheros";
 choices[33][2] = "Nivel de transporte";
 choices[33][3] = "Nivel de aplicaci&oacute;n";
 answers[33] = choices[33][3];
 units[33] = "100";
 comments[33] = "Id Pregunta: 3619. NULL";


//  Id pregunta: 3633 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  La prioridad de acceso en redes Token Ring:";
 choices[34]= new Array();
 choices[34][0] = "Usa los primeros 6 bits en el campo 'Priority' (prioridad) para controlar el acceso en red Token Ring";
 choices[34][1] = "Permite a los puentes de la red limitar tr&aacute;fico de broadcast sobre redes locales o remotas";
 choices[34][2] = "Es una funci&oacute;n del router (encaminador o canalizador) usada para control de acceso a ciertas puertas seg&uacute;n la prioridad de la direcci&oacute;n";
 choices[34][3] = "Permite que ciertas estaciones accedan a la red m&aacute;s frecuentemente que otras basadas en su prioridad";
 answers[34] = choices[34][3];
 units[34] = "101";
 comments[34] = "Id Pregunta: 3633. ";


//  Id pregunta: 3708 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Las unidades de informaci&oacute;n entre redes contienen una o m&aacute;s cabeceras que se usan para:";
 choices[35]= new Array();
 choices[35][0] = "Transportar datos a la aplicaci&oacute;n software receptora";
 choices[35][1] = "Evitar que los datos transmitidos por una estaci&oacute;n interfieran con los de otra";
 choices[35][2] = "Asegurar un acceso ordenado al medio f&iacute;sico";
 choices[35][3] = "Pasar informaci&oacute;n de control a los niveles OSI (o equivalentes) en el sistema de destino";
 answers[35] = choices[35][3];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3708. NULL";


//  Id pregunta: 3712 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Los agentes SNMP son:";
 choices[36]= new Array();
 choices[36][0] = "M&oacute;dulos de software que se ejecutan en los dispositivos gestionados y cuya funci&oacute;n es que la informaci&oacute;n acerca del dispositivo est&eacute; disponible para los sistemas de gesti&oacute;n ";
 choices[36][1] = "Ordenadores dedicados a la tarea de preguntar a los dispositvos SNMP por la informaci&oacute;n relevante y catalogarla en una base de datos";
 choices[36][2] = "Oficiales de ISO que realizan peri&oacute;dicamente auditor&iacute;as en compa&ntilde;&iacute;as que tienen grandes redes gestionadas por SNMP";
 choices[36][3] = "Aplicaciones dise&ntilde;adas para monitorizar la actividad de sistemas gestionados SNMP y alertar al usuario en caso de alg&uacute;n problema";
 answers[36] = choices[36][0];
 units[36] = "104";
 comments[36] = "Id Pregunta: 3712. ";


//  Id pregunta: 3741 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Los servicios de telecomunicaciones de libre recepci&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Son emisiones sonoras, television u otro g&eacute;nero";
 choices[37][1] = "Incluyen los de minima cobertura";
 choices[37][2] = "Pueden llegar hasta los 20 Watts ";
 choices[37][3] = "Todas los anteriores respuestas son correctas";
 answers[37] = choices[37][3];
 units[37] = "110";
 comments[37] = "Id Pregunta: 3741. ";


//  Id pregunta: 3887 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Qu&eacute; significa aplicaciones de tres niveles en la arquitectura Cliente/Servidor?";
 choices[38]= new Array();
 choices[38][0] = "La l&oacute;gica de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de datos se pueden distribuir entre los m&uacute;ltiples procesadores de la red.";
 choices[38][1] = "Los servicios de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y el acceso a datos se ejecutan en la estaci&oacute;n cliente mientras que la base de datos est&aacute; situada f&iacute;sicamente en el servidor.";
 choices[38][2] = "La gesti&oacute;n de datos, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de presentaci&oacute;n se encuentran en el servidor mientras que los servicios de presentaci&oacute;n se hallan en el cliente.";
 choices[38][3] = "En una arquitectura Cliente/Servidor no existen aplicaciones a tres niveles.";
 answers[38] = choices[38][0];
 units[38] = "113";
 comments[38] = "Id Pregunta: 3887. ";


//  Id pregunta: 4262 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  El protocolo RAS de la pila de protocolos H323 de la ITU:";
 choices[39]= new Array();
 choices[39][0] = "Son las siglas de Registration, Admission and Signalling";
 choices[39][1] = "Funciona sobre el protocolo de transporte TCP";
 choices[39][2] = "Es un protocolo de se&ntilde;alizacion entre los elementos de red y el Gateway";
 choices[39][3] = "El canal de se&ntilde;alizaci&oacute;n RAS se abre antes de que se establezca cualquier otro canal entre puntos extremos H.323";
 answers[39] = choices[39][3];
 units[39] = "109";
 comments[39] = "Id Pregunta: 4262. ";


//  Id pregunta: 4530 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;CuaI de las siguientes interfaces no corresponde a m&eacute;trica V.3?";
 choices[40]= new Array();
 choices[40][0] = "Gesti&oacute;n de Proyectos (GP)";
 choices[40][1] = "Seguridad (SEG)";
 choices[40][2] = "Control de la planificaci&oacute;n (CP)";
 choices[40][3] = "Gesti&oacute;n de Ia configuraci&oacute;n (GC)";
 answers[40] = choices[40][2];
 units[40] = "86";
 comments[40] = "Id Pregunta: 4530. NULL";


//  Id pregunta: 4613 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  Un fichero que contiene el DNI y % de discapacidad con motivo del cumplimiento de deberes p&uacute;blicos, pero no el tipo de discapacidad del que se trata, debe tener implantadas medidas de seguridad de nivel";
 choices[41]= new Array();
 choices[41][0] = "b&aacute;sico";
 choices[41][1] = "medio";
 choices[41][2] = "alto";
 choices[41][3] = "muy alto";
 answers[41] = choices[41][0];
 units[41] = "29";
 comments[41] = "Id Pregunta: 4613. ";


//  Id pregunta: 4754 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l es el est&aacute;ndar en gesti&oacute;n de servicios de TI compatible con ITIL (IT Infrastructure Library)?";
 choices[42]= new Array();
 choices[42][0] = "ISO/IEC 20000";
 choices[42][1] = "ISO/IEC 6592";
 choices[42][2] = "ETSI TS 125 308";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][0];
 units[42] = "98";
 comments[42] = "Id Pregunta: 4754. NULL";


//  Id pregunta: 4894 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Qui&eacute;n es el &oacute;rgano de contrataci&oacute;n en la adquisici&oacute;n de equipos y sistemas para el tratamiento de la informaci&oacute;n declarados de adquisici&oacute;n centralizada, una vez establecido el acuerdo marco?";
 choices[43]= new Array();
 choices[43][0] = "El Ministerio de Hacienda";
 choices[43][1] = "Las Juntas de Contrataci&oacute;n";
 choices[43][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Contrataci&oacute;n Centralizada.";
 choices[43][3] = "El Ministerio de Administraciones P&uacute;blicas.";
 answers[43] = choices[43][2];
 units[43] = "41";
 comments[43] = "Id Pregunta: 4894. La Junta de Contrataci&oacute;n Centralizada (JCC) es el &oacute;rgano de contrataci&oacute;n en la adopci&oacute;n de tipos del AM. La JCC ha desconcentrado en la DG Racionalizaci&oacute;n y Contrataci&oacute;n Centralizada la adjudicaci&oacute;n de AM posterior a la adopci&oacute;n de tipos.";


//  Id pregunta: 4958 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Pedro es administrador corporativo de seguridad. Para &eacute;l, la Intranet y la DMZ son:";
 choices[44]= new Array();
 choices[44][0] = "El conjunto de aplicaciones que son de uso interno del personal del Organismo.";
 choices[44][1] = "El conjunto de servicios y personal que no son directamente accedidos desde el exterior.";
 choices[44][2] = "Dominios de seguridad, entendidos como el conjunto de m&aacute;quinas cuya configuraci&oacute;n es responsabilidad de undepartamento interno.";
 choices[44][3] = "El conjunto de ordenadores que no tienen acceso directo al exterior.";
 answers[44] = choices[44][2];
 units[44] = "111";
 comments[44] = "Id Pregunta: 4958. Examen TIC B 2007";


//  Id pregunta: 5014 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  En el sistema de soporte a la decisi&oacute;n SSD-AAPP v 3.0 el umbral de saciedad m&aacute;ximo para un criterio";
 choices[45]= new Array();
 choices[45][0] = "indica el valor m&aacute;ximo (en un criterio a minimizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[45][1] = "indica el valor m&aacute;ximo (en un criterio a maximizar) que debe cumplir la puntuaci&oacute;n de una alternativa paraese criterio para que pueda ser considerada";
 choices[45][2] = "indica (en un criterio a maximizar) que si la puntuaci&oacute;n de ese criterio toma un valor mayor no incidir&aacute; en lapuntuaci&oacute;n obtenida";
 choices[45][3] = "indica el valor m&aacute;ximo que se puede asignar al peso de ese criterio";
 answers[45] = choices[45][2];
 units[45] = "34";
 comments[45] = "Id Pregunta: 5014. Examen TIC A 2007";


//  Id pregunta: 5134 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Seg&uacute;n el art&iacute;culo 21 de la Ley 34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio electr&oacute;nico, las comunicaciones comerciales a trav&eacute;s de correo electr&oacute;nico:";
 choices[46]= new Array();
 choices[46][0] = "Est&aacute;n estrictamente prohibidas en todos los casos.";
 choices[46][1] = "Est&aacute;n permitidas si el destinatario de las mismas no manifiesta su oposici&oacute;n inequ&iacute;voca y expresa.";
 choices[46][2] = "Est&aacute;n permitidas en los casos previstos en la Ley Org&aacute;nica de Protecci&oacute;n de Datos.";
 choices[46][3] = "Est&aacute;n permitidas si han sido solicitadas o previamente autorizadas por los destinatarios de las mismas.";
 answers[46] = choices[46][3];
 units[46] = "30";
 comments[46] = "Id Pregunta: 5134. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5199 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  No se considera una t&eacute;cnica o herramienta para la creaci&oacute;n de prototipos:";
 choices[47]= new Array();
 choices[47][0] = "T&eacute;cnicas de Cuarta Generaci&oacute;n";
 choices[47][1] = "Componentes de Software Reutilizables";
 choices[47][2] = "Modelado L&oacute;gico de Datos";
 choices[47][3] = "Especificaciones Formales y Entornos para Prototipos";
 answers[47] = choices[47][2];
 units[47] = "85";
 comments[47] = "Id Pregunta: 5199. ";


//  Id pregunta: 5230 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  No es cierto respecto al prototipado evolutivo:";
 choices[48]= new Array();
 choices[48][0] = "Responde al enunciado &quot;no s&eacute; lo que quiero pero cuando vea algo te lo digo&quot;";
 choices[48][1] = "En este modelo no se asume que los requisitos vayan a cambiar continuamente desde el principio.";
 choices[48][2] = "Se construye una implementaci&oacute;n parcial de los requisitos conocidos, para que el usuario comprenda mejor la totalidad de los requisitos deseados";
 choices[48][3] = "Est&aacute; relacionado con el concepto de Desarrollo R&aacute;pido de Aplicaciones (RAD)";
 answers[48] = choices[48][1];
 units[48] = "76";
 comments[48] = "Id Pregunta: 5230. ";


//  Id pregunta: 5259 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  La m&eacute;trica BANG:";
 choices[49]= new Array();
 choices[49][0] = "Es una m&eacute;trica de producto propuesta por De Marco, como indicador de funcionalidad entregada al usuario";
 choices[49][1] = "La medici&oacute;n se realiza sobre una especificaci&oacute;n de requisitos documentada mediante an&aacute;lisis estructurado y DFD";
 choices[49][2] = "Para formular esta m&eacute;trica se analizan las m&eacute;tricas primitivas, basadas en los elementos del DFD, del diccionario de datos y del modelo de datos";
 choices[49][3] = "Todas son correctas.";
 answers[49] = choices[49][3];
 units[49] = "88";
 comments[49] = "Id Pregunta: 5259. NULL";


//  Id pregunta: 5534 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes no es una de las tres prioridades de i2010 (marco estrat&eacute;gico de la Comisi&oacute;n Europea para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n)? ";
 choices[50]= new Array();
 choices[50][0] = "Conseguir un espacio europeo &uacute;nico de la informaci&oacute;n, fomentando un mercado interior abierto y competitivo para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n";
 choices[50][1] = "El refuerzo de la innovaci&oacute;n y de la inversi&oacute;n en el campo de la investigaci&oacute;n en las TIC";
 choices[50][2] = "Mejorar la prestaci&oacute;n de sevicios intraeuropeos mediante la utilizaci&oacute;n masiva de las TIC";
 choices[50][3] = "Una sociedad europea de la informaci&oacute;n basada en la inclusi&oacute;n que concede prioridad a la mejora de los servicios p&uacute;blicos y de la calidad de vida";
 answers[50] = choices[50][2];
 units[50] = "30";
 comments[50] = "Id Pregunta: 5534. ";


//  Id pregunta: 5627 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indique cu&aacute;l de estos productos no forman parte de los que proporcionan seguridad en el correo electr&oacute;nico";
 choices[51]= new Array();
 choices[51][0] = "PGP";
 choices[51][1] = "PEM";
 choices[51][2] = "MOSS";
 choices[51][3] = "Single MIME";
 answers[51] = choices[51][3];
 units[51] = "106";
 comments[51] = "Id Pregunta: 5627. Ser&iacute;a S/MIME";


//  Id pregunta: 5696 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Los certificados del DNI electr&oacute;nico:";
 choices[52]= new Array();
 choices[52][0] = "Se expiden voluntariamente a petici&oacute;n del ciudadano";
 choices[52][1] = " Se expiden siempre y vienen activados";
 choices[52][2] = "S&oacute;lo se expiden a quien autorice la Direcci&oacute;n General de la Polic&iacute;a";
 choices[52][3] = "Se expiden siempre, pero se activan voluntariamente con el consentimiento del ciudadano";
 answers[52] = choices[52][3];
 units[52] = "74";
 comments[52] = "Id Pregunta: 5696. NULL";


//  Id pregunta: 5874 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as es usada espec&iacute;ficamente por el CRM de tipo anal&iacute;tico?";
 choices[53]= new Array();
 choices[53][0] = "Software de gesti&oacute;n de incidencias";
 choices[53][1] = "Software de gesti&oacute;n de correo electr&oacute;nico entrante y saliente";
 choices[53][2] = "Datawarehouse";
 choices[53][3] = "Call-center: software de visi&oacute;n unificada de clientes";
 answers[53] = choices[53][2];
 units[53] = "65";
 comments[53] = "Id Pregunta: 5874. MAP 2008 A1";


//  Id pregunta: 5905 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  Un Data Warehouse es:";
 choices[54]= new Array();
 choices[54][0] = "Una colecci&oacute;n de datos invariante en el tiempo y no vol&aacute;til.";
 choices[54][1] = "Una colecci&oacute;n de datos orientado a temas, integrados, fijos en el tiempo y no vol&aacute;tiles.";
 choices[54][2] = "Una colecci&oacute;n de datos cambiantes en el tiempo y vol&aacute;til.";
 choices[54][3] = "Una colecci&oacute;n de datos orientado a temas, integrados, cambiantes en el tiempo y no vol&aacute;tiles.";
 answers[54] = choices[54][3];
 units[54] = "68";
 comments[54] = "Id Pregunta: 5905. MAP 2008 A1";


//  Id pregunta: 5915 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  En el modelo de Evoluci&oacute;n de los Sistemas de Informaci&oacute;n de Gibson y Nolan se distinguen cuatro etapas distintas en el crecimiento de todo sistema de informaci&oacute;n en una empresa. &iquest;Cu&aacute;l es el orden cronol&oacute;gico correcto de dichas etapas?";
 choices[55]= new Array();
 choices[55][0] = "Iniciaci&oacute;n, formalizaci&oacute;n, expansi&oacute;n y madurez";
 choices[55][1] = "Iniciaci&oacute;n, expansi&oacute;n, madurez y formalizaci&oacute;n";
 choices[55][2] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 choices[55][3] = "Iniciaci&oacute;n, formalizaci&oacute;n, madurez y expansi&oacute;n";
 answers[55] = choices[55][2];
 units[55] = "21";
 comments[55] = "Id Pregunta: 5915. MAP 2008 A1";


//  Id pregunta: 6061 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  HTML est&aacute; estandarizado por:";
 choices[56]= new Array();
 choices[56][0] = "World Wide Web Consortium - W3C.";
 choices[56][1] = "Internet Engineering Task Force - IETF.";
 choices[56][2] = "Institute os Management Accountants - IMA.";
 choices[56][3] = "International Accounting Standard Board - IASB.";
 answers[56] = choices[56][0];
 units[56] = "69";
 comments[56] = "Id Pregunta: 6061. TIC A 2009";


//  Id pregunta: 6104 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes NO es un procedimiento adecuado para la consulta de la validez de un certificado digital emitido por un prestador de servicios de certificaci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = "Declaraci&oacute;n de pr&aacute;cticas de certificaci&oacute;n.";
 choices[57][1] = "Listas de certificados revocados.";
 choices[57][2] = "LDAP.";
 choices[57][3] = "OCSP.";
 answers[57] = choices[57][0];
 units[57] = "74";
 comments[57] = "Id Pregunta: 6104. TIC A 2009";


//  Id pregunta: 6191 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas no est&aacute;n contempladas en el Esquema Nacional de Interoperabilidad?";
 choices[58]= new Array();
 choices[58][0] = "Digitalizaci&oacute;n de documentos";
 choices[58][1] = "Pol&iacute;tica de gesti&oacute;n de documentos";
 choices[58][2] = "Copiado aut&eacute;ntico y conversi&oacute;n de documentos";
 choices[58][3] = "Destrucci&oacute;n de documentos en soporte papel";
 answers[58] = choices[58][3];
 units[58] = "43";
 comments[58] = "Id Pregunta: 6191. Disposici&oacute;n adicional primera";


//  Id pregunta: 6238 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que representa y externaliza el estado interno de un objeto sin violar la encapsulaci&oacute;n, de forma que &eacute;ste puede volver a dicho estado m&aacute;s tarde:";
 choices[59]= new Array();
 choices[59][0] = "Spider.";
 choices[59][1] = "State.";
 choices[59][2] = "Observer.";
 choices[59][3] = "Memento.";
 answers[59] = choices[59][3];
 units[59] = "84";
 comments[59] = "Id Pregunta: 6238. TICB-2009, bloque desarrollo";


//  Id pregunta: 6240 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes es una propiedad del modelo conceptual?";
 choices[60]= new Array();
 choices[60][0] = "Complejo";
 choices[60][1] = "M&aacute;ximo";
 choices[60][2] = "Expl&iacute;cito en todas sus restricciones";
 choices[60][3] = "Informal";
 answers[60] = choices[60][2];
 units[60] = "57";
 comments[60] = "Id Pregunta: 6240. TICB-2009, bloque desarrollo";


//  Id pregunta: 6565 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  La velocidad de transmisi&oacute;n en GPRS queda limitada por:";
 choices[61]= new Array();
 choices[61][0] = "El n&uacute;mero de timeslots que pueda ofrecer la c&eacute;lula donde se encuentra el terminal";
 choices[61][1] = "De la capacidad m&aacute;xima del dispositivo m&oacute;vil";
 choices[61][2] = "Del esquema de codificaci&oacute;n";
 choices[61][3] = "Todas las respuestas anteriores son ciertas";
 answers[61] = choices[61][3];
 units[61] = "108";
 comments[61] = "Id Pregunta: 6565. NULL";


//  Id pregunta: 6587 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  El RD 1720/2007 s&oacute;lo desarrolla las medidas de seguridad en el tratamiento de datos de car&aacute;cter personal para los ficheros";
 choices[62]= new Array();
 choices[62][0] = "automatizados";
 choices[62][1] = "no automatizados";
 choices[62][2] = "A y B son correctas";
 choices[62][3] = "A y B son incorrectas";
 answers[62] = choices[62][2];
 units[62] = "29";
 comments[62] = "Id Pregunta: 6587. NULL";


//  Id pregunta: 7934 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, en lo referente al software, establece que son objeto de protecci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = " Exclusivamente los programas de ordenador, entendidos como secuencias de instrucciones o indicaciones destinadas a ser utilizadas en un sistema inform&aacute;tico para realizar una determinada funci&oacute;n o tarea.";
 choices[63][1] = " Los programas de ordenador y su documentaci&oacute;n preparatoria, comprendi&eacute;ndose en dicho concepto la documentaci&oacute;n t&eacute;cnica y los manuales de uso del programa.";
 choices[63][2] = " Los programas de ordenador y todas las definiciones documentadas de sus interfaces que posibilitan el uso colaborativo del software.";
 choices[63][3] = " &Uacute;nicamente los algoritmos y conceptos inventivos documentados en los que se basan cualquiera de los elementos de los programas de ordenador.";
 answers[63] = choices[63][1];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 7934. Map 2006";


//  Id pregunta: 8052 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[64]= new Array();
 choices[64][0] = " El W3C tiene una sede en Espa&ntilde;a.";
 choices[64][1] = " W3C es un organismo estadounidense.";
 choices[64][2] = " El Ministerio de Administraciones P&uacute;blicas es miembro del W3C.";
 choices[64][3] = " W3C ha desarrollado mecanismos para evaluar el nivel de accesibilidad de los sitios web.";
 answers[64] = choices[64][1];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 8052. Map 2007";


//  Id pregunta: 8315 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  La recomendaci&oacute;n para VoIP, definida en 1996 por la UIT es el:";
 choices[65]= new Array();
 choices[65][0] = "H.261. ";
 choices[65][1] = "H.320. ";
 choices[65][2] = "H.221. ";
 choices[65][3] = "H.323.";
 answers[65] = choices[65][3];
 units[65] = "100";
 comments[65] = "Id Pregunta: 8315. Examen TIC A2 2010";


//  Id pregunta: 8336 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una t&eacute;cnica de la Interfaz de Gesti&oacute;n de proyectos de la metodolog&iacute;a M&eacute;trica v3:";
 choices[66]= new Array();
 choices[66][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[66][1] = "Staffing Size.";
 choices[66][2] = "Catalogaci&oacute;n.";
 choices[66][3] = "Diagrama de Gantt.";
 answers[66] = choices[66][2];
 units[66] = "86";
 comments[66] = "Id Pregunta: 8336. Examen TIC A2 2010";


//  Id pregunta: 8486 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Los centros de proceso de datos o datacenters deben cumplir una serie de caracter&iacute;sticas de seguridad f&iacute;sica, &iquest;cu&aacute;l de las siguientes NO es una buena pol&iacute;tica de seguridad?";
 choices[67]= new Array();
 choices[67][0] = "Debe disponer de puertas de acceso grandes.";
 choices[67][1] = "Debe estar expl&iacute;citamente se&ntilde;alizado.";
 choices[67][2] = "Debe evitar tener ventanas.";
 choices[67][3] = "Dispondr&aacute; de un sistema de refrigeraci&oacute;n";
 answers[67] = choices[67][1];
 units[67] = "32,33";
 comments[67] = "Id Pregunta: 8486. Examen TIC A2 2010 interna";


//  Id pregunta: 8521 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En la planificaci&oacute;n de la capacidad de los sistemas de informaci&oacute;n, una fase fundamental es la proyecci&oacute;n. Para ello se utilizan diversas t&eacute;cnicas, entre las que se encuentra la teor&iacute;a de colas. &iquest;Qu&eacute; valor ideal deber&iacute;a tomar el llamado factor de cola?";
 choices[68]= new Array();
 choices[68][0] = "Cualquier valor negativo.";
 choices[68][1] = "Fq=0.";
 choices[68][2] = "Fq=1.";
 choices[68][3] = "Infinito.";
 answers[68] = choices[68][2];
 units[68] = "104";
 comments[68] = "Id Pregunta: 8521. Examen TIC A2 2010 interna";


//  Id pregunta: 8634 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes NO es un grupo de actividad de la Gesti&oacute;n de Proyectos?";
 choices[69]= new Array();
 choices[69][0] = "Actividades de Seguimiento y Control.";
 choices[69][1] = "Actividades de Planificaci&oacute;n del Proyecto.";
 choices[69][2] = "Actividades de Finalizaci&oacute;n del Proyecto.";
 choices[69][3] = "Actividades de Inicio del Proyecto.";
 answers[69] = choices[69][1];
 units[69] = "86";
 comments[69] = "Id Pregunta: 8634. Examen TIC A2 2010 interna";


//  Id pregunta: 8768 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Identificar la descripci&oacute;n del comando IP ERR&Oacute;NEO:";
 choices[70]= new Array();
 choices[70][0] = "NETSTAT: es una herramienta de l&iacute;nea de comandos que muestra un listado de las conexiones activas de un ordenador, tanto entrantes como salientes. Permite mostrar las estad&iacute;sticas de protocolos y las conexiones TCP/IP actuales";
 choices[70][1] = "IPCONFIG: Muestra o actualiza la configuraci&oacute;n de red TCP/IP";
 choices[70][2] = "NBTSTAT: Muestra estad&iacute;sticas del protocolo y conexiones TCP/IP actuales utilizando NBT. NBTStat es una herramienta que resulta de utilidad para solucionar problemas con la resoluci&oacute;n de nombres llevada a cabo por NetBIOS.";
 choices[70][3] = "TRACERT Muestra todas las direcciones IP intermedias por las que pasa un paquete entre el equipo remoto y la direcci&oacute;n IP especificada.";
 answers[70] = choices[70][3];
 units[70] = "100";
 comments[70] = "Id Pregunta: 8768. Examen TIC A2 2010 interna";


//  Id pregunta: 8893 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Son principios de gesti&oacute;n de la calidad seg&uacute;n la norma ISO 9004";
 choices[71]= new Array();
 choices[71][0] = "Enfoque basado en procesos";
 choices[71][1] = "Mejora continua";
 choices[71][2] = "Relaciones mutuamente beneficiosas para el proveedor";
 choices[71][3] = "Todos lo son";
 answers[71] = choices[71][3];
 units[71] = "92";
 comments[71] = "Id Pregunta: 8893. NULL";


//  Id pregunta: 9027 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Las centralitas MD-110 del servicio Ibercom que constituyen una RAI";
 choices[72]= new Array();
 choices[72][0] = "Se interconectan mediante una RPV (red privada virtual) establecida por el operador en sus centrales p&uacute;blicas.";
 choices[72][1] = "Necesariamente se conectan mediante un CF (centro frontal).";
 choices[72][2] = "Se interconectan entre si mediante un bus compartido.";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][1];
 units[72] = "103";
 comments[72] = "Id Pregunta: 9027. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9245 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;C&oacute;mo surgi&oacute; Windows?";
 choices[73]= new Array();
 choices[73][0] = "En la interfaz de usuario de Apple Lisa, precursora de Apple Macintosh.";
 choices[73][1] = "Fue una interfaz gr&aacute;fica para MS-DOS";
 choices[73][2] = "Windows 1.0 sali&oacute; al mercado en 1985.";
 choices[73][3] = "Todas son correctas.";
 answers[73] = choices[73][3];
 units[73] = "56";
 comments[73] = "Id Pregunta: 9245. ";


//  Id pregunta: 9393 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[74]= new Array();
 choices[74][0] = "GSM, GPRS, EDGE, HSPA+.";
 choices[74][1] = "GSM. GPRS, UMTS, HSCSD.";
 choices[74][2] = "GSM, HSUPA, GPRS, UMTS.";
 choices[74][3] = "Ninguna de las respuestas es correcta.";
 answers[74] = choices[74][0];
 units[74] = "108";
 comments[74] = "Id Pregunta: 9393. Examen Teleco Ayto Madrid 2010.";


//  Id pregunta: 9517 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Respecto a los EJB, indique la afirmaci&oacute;n incorrecta:";
 choices[75]= new Array();
 choices[75][0] = "Son objetos de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n y se pueden ejecutar de forma distribuida";
 choices[75][1] = "S&oacute;lo existen tres tipos: session, entity y message-driven";
 choices[75][2] = "Se ejecutan en contenedores EJB";
 choices[75][3] = "Los EJB de tipo session pueden ser a su vez SLSB y SFSB";
 answers[75] = choices[75][0];
 units[75] = "116";
 comments[75] = "Id Pregunta: 9517. NULL";


//  Id pregunta: 9665 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un sistema multiprocesador o mainframe:";
 choices[76]= new Array();
 choices[76][0] = "Son soluciones altamente propietarias para entornos no heterog&eacute;neos.";
 choices[76][1] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH.";
 choices[76][2] = "Se paralelizan sistem&aacute;ticamente las tareas y procesos, aprovechando su alto n&uacute;mero de procesadores.";
 choices[76][3] = "En el mercado hay un gran n&uacute;mero de fabricantes de dichos sistemas.";
 answers[76] = choices[76][3];
 units[76] = "45";
 comments[76] = "Id Pregunta: 9665. ";


//  Id pregunta: 9669 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  La ley de Amdahl demuestra que:";
 choices[77]= new Array();
 choices[77][0] = "Cuantas m&aacute;s CPUs, m&aacute;s productividad.";
 choices[77][1] = "La productividad depende de la parte que sea paralelizable.";
 choices[77][2] = "Cuanto m&aacute;s c&oacute;digo, m&aacute;s CPUs hacen falta.";
 choices[77][3] = "El n&uacute;mero de procesadores es igual al n&uacute;mero de ALUs.";
 answers[77] = choices[77][1];
 units[77] = "45";
 comments[77] = "Id Pregunta: 9669. ";


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


//  Id pregunta: 9692 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Un problema del modelo dimensional es:";
 choices[79]= new Array();
 choices[79][0] = "Data Expression.";
 choices[79][1] = "Data Complexity.";
 choices[79][2] = "Data Sparsity.";
 choices[79][3] = "Data Compression.";
 answers[79] = choices[79][2];
 units[79] = "68";
 comments[79] = "Id Pregunta: 9692. ";


//  Id pregunta: 9857 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Respecto a la seguridad en redes, indique qu&eacute; es un exploit.";
 choices[80]= new Array();
 choices[80][0] = "Es un malware dise&ntilde;ado para aprovechar la vulnerabilidad de un software.";
 choices[80][1] = "Persona que accede a datos no autorizados.";
 choices[80][2] = "Adware que modifica la p&aacute;gina de inicio de los navegadores de Internet sin el consentimiento del usuario.";
 choices[80][3] = "Software utilizado para la suplantaci&oacute;n de la identidad de un usuario de la red.";
 answers[80] = choices[80][0];
 units[80] = "111";
 comments[80] = "Id Pregunta: 9857. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9960 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Seleccione la opci&oacute;n CORRECTA de entre las siguientes afirmaciones que hacen referencia al esquema de estrella";
 choices[81]= new Array();
 choices[81][0] = "Un esquema de estrella es un modelo de datos que tiene una tabla de dimensiones que contiene los datos para el an&aacute;lisis y est&aacute; rodeada de las tablas de hechos.";
 choices[81][1] = "En un esquema de estrella la tabla de hechos tendr&aacute; siempre una clave primaria simple";
 choices[81][2] = "Cuando a un esquema en estrella se aplican principios de normalizaci&oacute;n a una tabla de  dimensi&oacute;n, el resultado se conoce como esquema de copo de nieve.";
 choices[81][3] = "El esquema de estrella es un modelo dimensional implementado en una base de datos multidimensional";
 answers[81] = choices[81][2];
 units[81] = "68,71";
 comments[81] = "Id Pregunta: 9960. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10020 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En M&eacute;trica v3, &iquest;qui&eacute;n lleva a cabo las pruebas en la tarea IAS 6.2 &quot;realizaci&oacute;n de las pruebas de aceptaci&oacute;n&quot;?";
 choices[82]= new Array();
 choices[82][0] = "Usuarios expertos.";
 choices[82][1] = "Directores de los usuarios.";
 choices[82][2] = "Equipo de calidad.";
 choices[82][3] = "Equipo de implantaci&oacute;n.";
 answers[82] = choices[82][0];
 units[82] = "86";
 comments[82] = "Id Pregunta: 10020. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10266 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Respecto del tratamiento de datos de car&aacute;cter personal, el censo promocional";
 choices[83]= new Array();
 choices[83][0] = "Tendr&aacute; vigencia indefinida";
 choices[83][1] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[83][2] = "Tendr&aacute; vigencia trimestral, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[83][3] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose trimestralmente para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 answers[83] = choices[83][3];
 units[83] = "29";
 comments[83] = "Id Pregunta: 10266. Art&iacute;culo 31.2 y 31.3 de la Ley 15/1999";


//  Id pregunta: 10291 AÃ±o de creación de pregunta: 2010-01-01
 questions[84]= "85)  Una desventaja de la topolog&iacute;a f&iacute;sica de bus es que:";
 choices[84]= new Array();
 choices[84][0] = "Un fallo en el concentrador provoca el aislamiento de todos los nodos a &eacute;l conectados.";
 choices[84][1] = "Requiere m&aacute;s cable que la topolog&iacute;a en estrella.";
 choices[84][2] = "Es vulnerable a la atenuaci&oacute;n, ya que pierde se&ntilde;al a trav&eacute;s de la distancia del cable.";
 choices[84][3] = "Es compleja y dif&iacute;cil de arreglar.";
 answers[84] = choices[84][2];
 units[84] = "101";
 comments[84] = "Id Pregunta: 10291. TIC A2, libre, examen 2013";


//  Id pregunta: 10497 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Se puede filtrar el tr&aacute;fico, mediante un firewall de nivel 3, entre dos m&aacute;quinas situadas en la misma LAN?";
 choices[85]= new Array();
 choices[85][0] = "Si";
 choices[85][1] = "No";
 choices[85][2] = "Depende de la configuraci&oacute;n del FW";
 choices[85][3] = "Depende de la configuraci&oacute;n de la LAN";
 answers[85] = choices[85][1];
 units[85] = "111";
 comments[85] = "Id Pregunta: 10497. Por definici&oacute;n, un FW de nivel 3 solo puede cortar tr&aacute;fico a ese nivel. Por otro lado, 2 m&aacute;quinas situadas en la misma LAN se encuentran conectadas a nivel 2 y por tanto no es posible el filtrado de tr&aacute;fico a nivel 3 dentro de una misma LAN. En el caso de";


//  Id pregunta: 10587 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Europa 2020 tiene como prioridades un crecimiento:";
 choices[86]= new Array();
 choices[86][0] = "Global, tecnol&oacute;gico y sostenible.";
 choices[86][1] = "Informado, sostenible y solidario.";
 choices[86][2] = "Inteligente, sostenible e integrador.";
 choices[86][3] = "Arm&oacute;nico, estable y social.";
 answers[86] = choices[86][2];
 units[86] = "30";
 comments[86] = "Id Pregunta: 10587. ";


//  Id pregunta: 10590 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  La Decisi&oacute;n 922/2009/CE del Parlamento Europeo y del Consejo:";
 choices[87]= new Array();
 choices[87][0] = "Tiene como prioridad un crecimiento inteligente.";
 choices[87][1] = "Es la base legal del programa ISA.";
 choices[87][2] = "Desarrolla el Esquema Europeo de Seguridad.";
 choices[87][3] = "";
 answers[87] = choices[87][1];
 units[87] = "30";
 comments[87] = "Id Pregunta: 10590. ";


//  Id pregunta: 10672 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Fecha de publicaci&oacute;n de la Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 choices[88]= new Array();
 choices[88][0] = "1 de Junio de 2015";
 choices[88][1] = "1 de Julio de 2015";
 choices[88][2] = "2 de Octubre de 2015";
 choices[88][3] = "1 de Noviembre de 2015";
 answers[88] = choices[88][2];
 units[88] = "30";
 comments[88] = "Id Pregunta: 10672. ";


//  Id pregunta: 10700 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes no es considerado un componente de un documento electr&oacute;nico seg&uacute;n la NTI de Documento Electr&oacute;nico?";
 choices[89]= new Array();
 choices[89][0] = "Encabezado.";
 choices[89][1] = "Contenido.";
 choices[89][2] = "Firma electr&oacute;nica.";
 choices[89][3] = "Metadatos.";
 answers[89] = choices[89][0];
 units[89] = "43";
 comments[89] = "Id Pregunta: 10700. ";


//  Id pregunta: 10822 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes reglas puede aplicarse para determinar el esfuerzo total de un proyecto en la fase de estimaci&oacute;n del mismo?";
 choices[90]= new Array();
 choices[90][0] = "Regla del 80-20.";
 choices[90][1] = "Regla del 30-40-30.";
 choices[90][2] = "Regla del 40-20-40.";
 choices[90][3] = "Regla del 20-60-20.";
 answers[90] = choices[90][2];
 units[90] = "28, 89";
 comments[90] = "Id Pregunta: 10822. Examen GSI 2014";


//  Id pregunta: 10976 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Respecto a JSON (JavaScript Object Notation - Notaci&oacute;n de Objetos de JavaScript), se&ntilde;ale la respuesta correcta:";
 choices[91]= new Array();
 choices[91][0] = "Es una versi&oacute;n simplificada de XML que permite el intercambio de datos en un formato de texto solo entre aplicaciones JavaScript.";
 choices[91][1] = "Al igual que XML, permite el intercambio de datos en un formato de texto, tanto entre aplicaciones JavaScript como Java y .NET.";
 choices[91][2] = "Es una versi&oacute;n simplificada de XML que permite el intercambio de datos en un formato de texto tanto entre aplicaciones JavaScript como Java y .NET.";
 choices[91][3] = "Al igual que XML, permite el intercambio de datos en un formato de texto, solo entre aplicaciones JavaScript.";
 answers[91] = choices[91][1];
 units[91] = "114";
 comments[91] = "Id Pregunta: 10976. TIC A1 AGE 2014";


//  Id pregunta: 10984 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En M&eacute;trica 3, la utilizaci&oacute;n del modelo entidad relaci&oacute;n extendido se recomienda en los procesos de:";
 choices[92]= new Array();
 choices[92][0] = "An&aacute;lisis y Dise&ntilde;o.";
 choices[92][1] = "Solo en el An&aacute;lisis.";
 choices[92][2] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de Viabilidad y An&aacute;lisis.";
 choices[92][3] = "Solo en Planificaci&oacute;n de Sistemas de Informaci&oacute;n y Estudio de Viabilidad.";
 answers[92] = choices[92][2];
 units[92] = "86";
 comments[92] = "Id Pregunta: 10984. TIC A1 AGE 2014";


//  Id pregunta: 11201 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[93]= new Array();
 choices[93][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[93][1] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[93][2] = "Confianza y Seguridad";
 choices[93][3] = "Servicios P&uacute;blicos Digitales de Calidad";
 answers[93] = choices[93][3];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11201. ";


//  Id pregunta: 11227 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de la clase HttpServlet?";
 choices[94]= new Array();
 choices[94][0] = "doGet(). Se ejecuta cuando se recibe una petici&oacute;n HTTP GET.";
 choices[94][1] = "doPush(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUSH.";
 choices[94][2] = "doPost(). Se ejecuta cuando se recibe una petici&oacute;n HTTP POST.";
 choices[94][3] = "doPut(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUT.";
 answers[94] = choices[94][1];
 units[94] = "116";
 comments[94] = "Id Pregunta: 11227. ";


//  Id pregunta: 11359 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes se considera actividad/es clave del proceso de la Gesti&oacute;n de Nivel de Servicio (SLM)?";
 choices[95]= new Array();
 choices[95][0] = "Entregar servicios acordados";
 choices[95][1] = "Contratar proveedores TI";
 choices[95][2] = "Negociar y monitorizar SLAs para asegurar la satisfacci&oacute;n del cliente con los servicios acordados";
 choices[95][3] = "Alinear los SLAs con las necesidades del cliente";
 answers[95] = choices[95][2];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11359. ";


//  Id pregunta: 11363 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, las m&eacute;tricas que se usan normalmente en Gesti&oacute;n de Servicios TI son:";
 choices[96]= new Array();
 choices[96][0] = "De tecnolog&iacute;a (recursos), de gesti&oacute;n (procesos) y de servicios";
 choices[96][1] = "De tecnolog&iacute;a y de servicios";
 choices[96][2] = "De servicios y de personas";
 choices[96][3] = "De servicios y de procesos";
 answers[96] = choices[96][0];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11363. ";


//  Id pregunta: 11545 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes no es un modelo de calidad del Software?";
 choices[97]= new Array();
 choices[97][0] = "GCAL de SISDEL";
 choices[97][1] = "FURPS";
 choices[97][2] = "ISO 9126-1";
 choices[97][3] = "Todos los anteriores son modelos de calidad del Software.";
 answers[97] = choices[97][0];
 units[97] = "88";
 comments[97] = "Id Pregunta: 11545. NULL";


//  Id pregunta: 11568 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Protocolo que permite el aprendizaje de redes y evita que se produzcan bucles a nivel de enlace.";
 choices[98]= new Array();
 choices[98][0] = "802.1D";
 choices[98][1] = "802.Q";
 choices[98][2] = "Spanning Tree Algorithm";
 choices[98][3] = "Algotirmo de Dijkstra";
 answers[98] = choices[98][0];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11568. Como pregunta por protocolo es la a), y no el algoritmo c) que utiliza dicho protocolo.";


//  Id pregunta: 11577 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En una red H.323, &iquest;Qu&iacute;en tiene las funciones de DNS?";
 choices[99]= new Array();
 choices[99][0] = "MCU";
 choices[99][1] = "LMU";
 choices[99][2] = "GateKeeper";
 choices[99][3] = "GateControler";
 answers[99] = choices[99][2];
 units[99] = "117";
 comments[99] = "Id Pregunta: 11577. NULL";


