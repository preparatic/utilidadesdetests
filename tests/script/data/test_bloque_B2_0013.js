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

//  Id pregunta: 690 AÃ±o de creación de pregunta: 2009-01-01
 questions[0]= "1)  De acuerdo con la Ley 25/2007 Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, la retenci&oacute;n de datos de tr&aacute;fico relativo a las comunicaciones electr&oacute;nicas es deber de:";
 choices[0]= new Array();
 choices[0][0] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[0][1] = "los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, en los t&eacute;rminos establecidos en la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones.";
 choices[0][2] = "los Operadores de Servicios de comunicaciones electr&oacute;nicas, Los proveedores de Acceso a redes de telecomunicaciones, Los prestadores de servicios de alojamiento de datos";
 choices[0][3] = "las respuestas 'a' y 'b' son correctas";
 answers[0] = choices[0][0];
 units[0] = "30";
 comments[0] = "Id Pregunta: 690. Art&iacute;culo 2 de la ley";


//  Id pregunta: 724 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En la evoluci&oacute;n del Sistema Operativo Unix, a partir de los a&ntilde;os 70, surgieron diferentes variantes. &iquest;Cu&aacute;l de los siguientes sistemas no se corresponde con una de esas variantes?";
 choices[1]= new Array();
 choices[1][0] = "BSD";
 choices[1][1] = "MULTICS";
 choices[1][2] = "XENIX";
 choices[1][3] = "Sun OS";
 answers[1] = choices[1][1];
 units[1] = "53";
 comments[1] = "Id Pregunta: 724. Examen TIC MAP B 2004";


//  Id pregunta: 744 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Las aplicaciones Java son comprobadas:";
 choices[2]= new Array();
 choices[2][0] = "en tiempo de compilaci&oacute;n";
 choices[2][1] = "en tiempo de ejecuci&oacute;n";
 choices[2][2] = "en tiempo de compilaci&oacute;n y en tiempo de ejecuci&oacute;n";
 choices[2][3] = "en tiempo de compilaci&oacute;n siempre y en tiempo de ejecuci&oacute;n s&oacute;lo si se trata de un programa que no requiera ejecuci&oacute;n en tiempo real";
 answers[2] = choices[2][2];
 units[2] = "60";
 comments[2] = "Id Pregunta: 744. Similar a examen TIC SS A 2003";


//  Id pregunta: 789 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Est&aacute;n excluidos del &aacute;mbito de la Ley de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico";
 choices[3]= new Array();
 choices[3][0] = "Notarios y registradores de la propiedad y mercantiles en el ejercicio de sus funciones p&uacute;blicas";
 choices[3][1] = "Servicios de venta de arte del patrimonio";
 choices[3][2] = "Servicios bancarios";
 choices[3][3] = "Servicios de la Comisi&oacute;n Nacional del Mercado de Valores";
 answers[3] = choices[3][0];
 units[3] = "30";
 comments[3] = "Id Pregunta: 789. SS-A 2004. Ley 34/2002, art&iacute;culo 5";


//  Id pregunta: 844 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre un proyecto GIS es cierta?:";
 choices[4]= new Array();
 choices[4][0] = "La digitalizaci&oacute;n de una cartograf&iacute;a existente es cara por lo laborioso del proceso de digitalizaci&oacute;n ya que requiere mucho trabajo manual de depuraci&oacute;n y correcci&oacute;n.";
 choices[4][1] = "Mientras el coste del uso de los sat&eacute;lites de posici&oacute;n no baje, la obtenci&oacute;n de datos mediante itinerarios con GPS siempre presenta una relaci&oacute;n coste/calidad inaceptable.";
 choices[4][2] = "El procesado de im&aacute;genes de sat&eacute;lite es complicado puesto que la informaci&oacute;n r&aacute;ster no puede ser vectorizada.";
 choices[4][3] = "La fotogrametr&iacute;a es una opci&oacute;n viable s&oacute;lo cuando no existan otros m&eacute;todos (trazado por GPS, procesado de im&aacute;genes de sat&eacute;lite, digitalizaci&oacute;n de cartograf&iacute;as existentes) por lo elevado de su coste.";
 answers[4] = choices[4][0];
 units[4] = "67";
 comments[4] = "Id Pregunta: 844. NULL";


//  Id pregunta: 920 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; es el repositorio del Designer?:";
 choices[5]= new Array();
 choices[5][0] = "Un objeto para obtener listados";
 choices[5][1] = "Una base de datos donde se guardan las estructuras que se van creando";
 choices[5][2] = "Un formulario especial de licencias del Designer";
 choices[5][3] = "Una base de datos que almacena solo los usuarios con acceso al Designer";
 answers[5] = choices[5][1];
 units[5] = "56";
 comments[5] = "Id Pregunta: 920. ";


//  Id pregunta: 925 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; es la base de conocimientos de un sistema experto?:";
 choices[6]= new Array();
 choices[6][0] = "La base de datos que usa el sistema experto";
 choices[6][1] = "El conjunto de reglas almacenadas sobre un tema particular";
 choices[6][2] = "La operaci&oacute;n de obtener informaci&oacute;n del experto humano";
 choices[6][3] = "El programa b&aacute;sico que gestiona el sistema experto";
 answers[6] = choices[6][1];
 units[6] = "64";
 comments[6] = "Id Pregunta: 925. ";


//  Id pregunta: 980 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  De los circuitos secuenciales es incorrecto afirmar que:";
 choices[7]= new Array();
 choices[7][0] = "El tipo de disparo determina la forma en que las excitaciones de entrada afectan al estado del biestable.";
 choices[7][1] = "La forma de disparo de un biestable, que es el circuito elemental, viene determinada por tres aspectos: la l&oacute;gica de disparo, el tipo de disparo y el sincronismo.";
 choices[7][2] = "Una misma combinaci&oacute;n l&oacute;gica en sus entradas puede producir distintas combinaciones en su salida.";
 choices[7][3] = "Son circuitos anal&oacute;gicos capaces de memorizar cierta informaci&oacute;n.";
 answers[7] = choices[7][3];
 units[7] = "";
 comments[7] = "Id Pregunta: 980. ";


//  Id pregunta: 1093 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En el sistema internacional de medidas se usan una serie de prefijos para las unidades. A continuaci&oacute;n se presentan algunos de ellos. &iquest;Podr&iacute;a indicar cu&aacute;l es el orden correcto de menor a mayor?";
 choices[8]= new Array();
 choices[8][0] = "Kilo-Mega-Giga-Tera-Exa-Peta.";
 choices[8][1] = "Kilo-Giga-Mega-Tera-Exa-Peta.";
 choices[8][2] = "Kilo-Mega-Giga-Peta-Exa-Tera.";
 choices[8][3] = "Kilo-Mega-Giga-Tera-Peta-Exa.";
 answers[8] = choices[8][3];
 units[8] = "";
 comments[8] = "Id Pregunta: 1093. ";


//  Id pregunta: 1098 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En inteligencia artificial un marco es:";
 choices[9]= new Array();
 choices[9][0] = "La representaci&oacute;n del conocimiento basada en teor&iacute;a de grafos";
 choices[9][1] = "Un elemento de representaci&oacute;n que contiene, entre otros elementos, ranuras de informaci&oacute;n y punteros";
 choices[9][2] = "El mecanismo de razonamiento m&aacute;s utilizado a la hora de equiparar elementos de conocimiento";
 choices[9][3] = "El objeto formado por el encapsulamiento de reglas deductivas y hechos";
 answers[9] = choices[9][1];
 units[9] = "64";
 comments[9] = "Id Pregunta: 1098. ";


//  Id pregunta: 1194 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indique la respuesta falsa relativa a la monitorizaci&oacute;n del sistema operativo:";
 choices[10]= new Array();
 choices[10][0] = "Se puede hacer en tiempo real utilizando monitores del sistema";
 choices[10][1] = "Incluye herramientas de seguridad para asignar o denegar permisos de usuario en el sistema";
 choices[10][2] = "Se puede hacer a posteriori, utilizando herramientas que realicen an&aacute;lisis estad&iacute;sticos de los logs del sistema";
 choices[10][3] = "Permite detectar los cuellos de botella del sistema";
 answers[10] = choices[10][1];
 units[10] = "52";
 comments[10] = "Id Pregunta: 1194. ";


//  Id pregunta: 1236 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  La norma ANSI/SQL se corresponde con la norma ISO:";
 choices[11]= new Array();
 choices[11][0] = "ISO 7498";
 choices[11][1] = "ISO 9735";
 choices[11][2] = "ISO 9075";
 choices[11][3] = "ISO 9945-1";
 answers[11] = choices[11][2];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1236. ";


//  Id pregunta: 1251 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  La visi&oacute;n general que la empresa debe tener de toda la base de datos, corresponde al:";
 choices[12]= new Array();
 choices[12][0] = "Esquema conceptual";
 choices[12][1] = "Exquema externo";
 choices[12][2] = "Esquema interno";
 choices[12][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[12] = choices[12][0];
 units[12] = "57";
 comments[12] = "Id Pregunta: 1251. ";


//  Id pregunta: 1252 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Las actividades clave del data warehousing son:";
 choices[13]= new Array();
 choices[13][0] = "Recepci&oacute;n, almacenamiento, proceso y presentaci&oacute;n.";
 choices[13][1] = "Extracci&oacute;n de datos, almacenamiento de datos, OLAP, miner&iacute;a de datos y acceso a los datos.";
 choices[13][2] = "Carga de datos de prueba, entrenamiento, inferencia del conocimiento, carga de datos reales y c&aacute;lculo de decisiones.";
 choices[13][3] = "Gesti&oacute;n de los medios f&iacute;sicos de almacenamiento, localizaci&oacute;n transparente de los datos y salvaguarda y restauraci&oacute;n autom&aacute;ticas.";
 answers[13] = choices[13][1];
 units[13] = "68";
 comments[13] = "Id Pregunta: 1252. ";


//  Id pregunta: 1254 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Las arquitecturas de discos magn&eacute;ticos denominadas RAID tienen por objeto mejorar las siguientes caracter&iacute;sticas de los sistemas de almacenamiento. Se&ntilde;ale la opci&oacute;n correcta:";
 choices[14]= new Array();
 choices[14][0] = "La seguridad y la velocidad de transferencia";
 choices[14][1] = "La capacidad de almacenamiento y la segmentaci&oacute;n correcta de los datos";
 choices[14][2] = "La velocidad de transferencia y la ausencia de errores en los datos almacenados";
 choices[14][3] = "La disponibilidad de los datos y/o el rendimiento";
 answers[14] = choices[14][3];
 units[14] = "48";
 comments[14] = "Id Pregunta: 1254. ";


//  Id pregunta: 1315 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Respecto a la compatibilidad entre Windows y Linux:";
 choices[15]= new Array();
 choices[15][0] = "Windows no puede ejecutarse bajo Linux";
 choices[15][1] = "Linux no puede ejecutarse bajo Windows";
 choices[15][2] = "Ambos pueden ejecutarse simult&aacute;neamente de forma nativa";
 choices[15][3] = "Existen programas que permiten la ejecuci&oacute;n de cada uno de estos sistemas operativos como si fuera un programa embebido en el otro sistema operativo";
 answers[15] = choices[15][3];
 units[15] = "53,55";
 comments[15] = "Id Pregunta: 1315. ";


//  Id pregunta: 1393 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Un sistema de almacenamiento RAID 0:";
 choices[16]= new Array();
 choices[16][0] = "Es un sistema tolerante a fallos de un disco";
 choices[16][1] = "Es un sistema que guarda en disco la informaci&oacute;n de paridad del resto de los discos";
 choices[16][2] = "Requiere al menos 5 discos";
 choices[16][3] = "Requiere como m&iacute;nimo dos discos y mejora el rendimiento en los accesos a los discos";
 answers[16] = choices[16][3];
 units[16] = "48";
 comments[16] = "Id Pregunta: 1393. ";


//  Id pregunta: 1477 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Se dice que el conjunto de instrucciones que ejecuta un procesador deber ser completo, es decir:";
 choices[17]= new Array();
 choices[17][0] = "Debe contener un gran n&uacute;mero de instrucciones";
 choices[17][1] = "Debe ser un conjunto de instrucciones muy potentes";
 choices[17][2] = "Debe permitir calcular cualquier tarea computable en un tiempo finito";
 choices[17][3] = "Debe realizar c&aacute;lculos a altas velocidades";
 answers[17] = choices[17][2];
 units[17] = "56";
 comments[17] = "Id Pregunta: 1477. ";


//  Id pregunta: 1481 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un dispositivo multifunci&oacute;n, aplicado a la ofim&aacute;tica, dispone habitualmente de las siguientes funciones:";
 choices[18]= new Array();
 choices[18][0] = "Tableta digitalizadora, l&aacute;piz &oacute;ptico y lector de tarjetas de fotograf&iacute;a digital";
 choices[18][1] = "Impresora, esc&aacute;ner, fax, copiadora";
 choices[18][2] = "Todas las anteriores";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][1];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1481. ";


//  Id pregunta: 1493 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;En qu&eacute; condiciones est&aacute; permitido el env&iacute;o de comunicaciones comerciales por medios electr&oacute;nicos? :";
 choices[19]= new Array();
 choices[19][0] = "Se permite el env&iacute;o de mensajes publicitarios o comerciales por correo electr&oacute;nico a aquellos usuarios que previamente lo hubieran autorizado o lo hubieran solicitado de forma expresa";
 choices[19][1] = "El spam est&aacute; permitido si se conoce el emisor";
 choices[19][2] = "El SMS no es equiparable al mail, por lo tanto el env&iacute;o masivo con este medio esta pemitido";
 choices[19][3] = "Siempre aunque no lo hayan solocitado los receptores, pues el emisor aparece en el mensaje";
 answers[19] = choices[19][0];
 units[19] = "30";
 comments[19] = "Id Pregunta: 1493. Ley 34/2002, art&iacute;culo 21";


//  Id pregunta: 1498 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La Ley de Servicios de la Sociedad de la Informacion y Comercio Electr&oacute;nico se conoce como:";
 choices[20]= new Array();
 choices[20][0] = "30/1992";
 choices[20][1] = "34/2002";
 choices[20][2] = "30/2002";
 choices[20][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[20] = choices[20][1];
 units[20] = "30";
 comments[20] = "Id Pregunta: 1498. NULL";


//  Id pregunta: 1508 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  RAID significa:";
 choices[21]= new Array();
 choices[21][0] = "Random Access Internet Devices, dispositivos de acceso aleatorio a internet, un tipo de m&oacute;dem que optimiza la velocidad de acceso";
 choices[21][1] = "RAdio Identification and Detection, Identificaci&oacute;n y Detecci&oacute;n por Radio, tecnolog&iacute;a basada en las propiedades de las ondas de radio para detectar cuerpos y objetos quietos o en movimiento";
 choices[21][2] = "Redundant Array of Inexpensive Disks, matriz redundante de discos baratos, tecnolog&iacute;a para tener redundancia en el almacenamiento de datos evitando as&iacute; p&eacute;rdida accidental o intencionada de informaci&oacute;n";
 choices[21][3] = "Redes de Acceso Inal&aacute;mbrico por Diversidad, tecnolog&iacute;a que usa la diversidad (dispersi&oacute;n de la onda en varios rayos) de la transmisi&oacute;n de ondas de radio para aumentar la potencia de transmisi&oacute;n de datos en comunicaciones inal&aacute;mbricas de datos";
 answers[21] = choices[21][2];
 units[21] = "48";
 comments[21] = "Id Pregunta: 1508. ";


//  Id pregunta: 1524 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  Cu&aacute;l de las siguientes afirmaciones respecto a LINUX es falsa";
 choices[22]= new Array();
 choices[22][0] = "est&aacute; constituido por un n&uacute;cleo kernel; cada usuario debe construirse las librer&iacute;as y programa para poderlo utilizar";
 choices[22][1] = "es un sistema operativo compatible con UNIX";
 choices[22][2] = "es un software libre";
 choices[22][3] = "el sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[22] = choices[22][0];
 units[22] = "61,62";
 comments[22] = "Id Pregunta: 1524. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1540 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;Qu&eacute; es MOSIX?";
 choices[23]= new Array();
 choices[23][0] = "MOSIX  es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Linux basados en el procesador x86";
 choices[23][1] = "MOSIX  es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Unix";
 choices[23][2] = "MOSIX  es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Linux";
 choices[23][3] = "MOSIX es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Unix basados en el procesador x86";
 answers[23] = choices[23][0];
 units[23] = "55";
 comments[23] = "Id Pregunta: 1540. ";


//  Id pregunta: 1556 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica utilizada para el c&aacute;lculo de una funci&oacute;n de correspondencia que asigna a los bloques de la memoria principal posiciones definidas en la memoria cach&eacute;?:";
 choices[24]= new Array();
 choices[24][0] = "Directa.";
 choices[24][1] = "Totalmente asociativa.";
 choices[24][2] = "Asociativa por conjuntos.";
 choices[24][3] = "Suprayectiva.";
 answers[24] = choices[24][3];
 units[24] = "52";
 comments[24] = "Id Pregunta: 1556. Junta Andaluc&iacute;a";


//  Id pregunta: 1560 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes bloques b&aacute;sicos no forma parte de la Unidad de Control?:";
 choices[25]= new Array();
 choices[25][0] = "Registro de memorizaci&oacute;n del estado presente.";
 choices[25][1] = "Bloque de calculo del pr&oacute;ximo estado.";
 choices[25][2] = "Bloque de calculo de la salida (micro&oacute;rdenes enviadas a la unidad de procesamiento).";
 choices[25][3] = "Bloque temporizador.";
 answers[25] = choices[25][3];
 units[25] = "47";
 comments[25] = "Id Pregunta: 1560. Junta Andaluc&iacute;a";


//  Id pregunta: 1592 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  En los lenguajes de marca, HTML y XML, las etiquetas finales se representan con la siguiente simbolog&iacute;a, donde TITLE es el texto que indica la etiqueta";
 choices[26]= new Array();
 choices[26][0] = "&lt;/TITLE&gt;";
 choices[26][1] = "&lt;TITLE&gt;";
 choices[26][2] = "/&lt;TITLE&gt;";
 choices[26][3] = "/TITLE";
 answers[26] = choices[26][0];
 units[26] = "69";
 comments[26] = "Id Pregunta: 1592. NULL";


//  Id pregunta: 1632 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Una de las formas de almacenar las Bases de Datos es la organizaci&oacute;n Hash. &iquest;En qu&eacute; consiste?";
 choices[27]= new Array();
 choices[27][0] = "En la organizaci&oacute;n Hash se accede al registro deseado directamente a trav&eacute;s del &iacute;ndice o clave.";
 choices[27][1] = "Consiste en ir indexando tablas de &iacute;ndices hasta tener un solo bloque mediante sucesivas iteraciones.";
 choices[27][2] = "Consiste en tener una serie de grupos numerados de modo que cuando se va a acceder a un registro conociendo la clave primaria se aplica sobre ella una funci&oacute;n algor&iacute;tmica obteni&eacute;ndose el grupo en el que ha de estar el registro deseado.";
 choices[27][3] = "En la organizaci&oacute;n Hash los registros se almacenan utilizando dos &iacute;ndices, uno primario que se&ntilde;ala los registros de acceso m&aacute;s frecuentes y otro secundario definido con alg&uacute;n criterio.";
 answers[27] = choices[27][2];
 units[27] = "58";
 comments[27] = "Id Pregunta: 1632. NULL";


//  Id pregunta: 1666 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  &iquest;Qu&eacute; es el striping?";
 choices[28]= new Array();
 choices[28][0] = "Procedimiento de comprobaci&oacute;n para la detecci&oacute;n de errores";
 choices[28][1] = "M&eacute;todo por el que un bloque de datos se rompe en piezas, y estas se graban de modo simult&aacute;neo en varios discos";
 choices[28][2] = "Proceso que genera valores de paridad";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = choices[28][1];
 units[28] = "48";
 comments[28] = "Id Pregunta: 1666. ";


//  Id pregunta: 1715 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  La arquitectura cliente/servidor:";
 choices[29]= new Array();
 choices[29][0] = "Se conoce tambi&eacute;n como arquitectura de 3 capas o niveles, siendo la tercera una capa situada entre el cliente y el servidor donde reside la l&oacute;gica de negocio";
 choices[29][1] = "Involucra a un solo cliente que se comunica con un solo servidor";
 choices[29][2] = "es la m&aacute;s adecuada para aplicaciones en continua evoluci&oacute;n y con datos distribuidos";
 choices[29][3] = "permite la ejecuci&oacute;n de los tratamientos de clientes y servidor en el mismo equipo o en diferentes, indistintamente";
 answers[29] = choices[29][3];
 units[29] = "50";
 comments[29] = "Id Pregunta: 1715. ";


//  Id pregunta: 1730 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  El Bourne shell:";
 choices[30]= new Array();
 choices[30][0] = "Est&aacute; basado en el lenguaje C";
 choices[30][1] = "Es posterior al shell de korn";
 choices[30][2] = "No es un shell de Unix s&oacute;lo de Linux";
 choices[30][3] = "Es el shell m&aacute;s antiguo";
 answers[30] = choices[30][3];
 units[30] = "54";
 comments[30] = "Id Pregunta: 1730. NULL";


//  Id pregunta: 1746 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Qu&eacute; tipo de arquitectura propone el comit&eacute; ANSI/X3/SPARC para la normalizaci&oacute;n de los SGBD";
 choices[31]= new Array();
 choices[31][0] = "Arquitectura de dos niveles: estructura global y vistas l&oacute;gicas";
 choices[31][1] = "Arquitectura de tres niveles: nivel interno o f&iacute;sico, conceptual y externo o l&oacute;gico";
 choices[31][2] = "Arquitectura de cuatro niveles: interno, f&iacute;sico, conceptual y l&oacute;gico";
 choices[31][3] = "Arquitectura de un &uacute;nico nivel denominado nivel global";
 answers[31] = choices[31][1];
 units[31] = "57";
 comments[31] = "Id Pregunta: 1746. ";


//  Id pregunta: 1747 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Cu&aacute;l de las siguientes &oacute;rdenes, define el Lenguaje de Manipulaci&oacute;n de Datos (DML) de un SGBD";
 choices[32]= new Array();
 choices[32][0] = "create table";
 choices[32][1] = "revoke";
 choices[32][2] = "insert";
 choices[32][3] = "todas las anteriores";
 answers[32] = choices[32][2];
 units[32] = "57";
 comments[32] = "Id Pregunta: 1747. ";


//  Id pregunta: 1751 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Se&ntilde;alar el enunciado cierto, referente a la sem&aacute;ntica de las relaciones representadas en el model E/R";
 choices[33]= new Array();
 choices[33][0] = "El tipo de la relaci&oacute;n es el n&uacute;mero de entidades sobre las que se realiza la asociaci&oacute;n";
 choices[33][1] = "El grado se corresponde con el n&uacute;mero m&aacute;ximo de ocurrencias de una entidad asociado a una ocurrencia de otra o de la misma entidad a trav&eacute;s de una relaci&oacute;n";
 choices[33][2] = "La cardinalidad de una entidad se define como el n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias que pueden estar relacionadas con ocurrencias de otra entidad";
 choices[33][3] = "Todos los enunciados anteriores son ciertos";
 answers[33] = choices[33][2];
 units[33] = "58";
 comments[33] = "Id Pregunta: 1751. ";


//  Id pregunta: 1788 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Al realizar la b&uacute;squeda en un espacio de estados, el m&eacute;todo de backtraking &hellip;";
 choices[34]= new Array();
 choices[34][0] = "Solo se puede usar para b&uacute;squedas ciegas";
 choices[34][1] = "Permite ahorrar recursos de computaci&oacute;n";
 choices[34][2] = "Permite recorrer los &aacute;rboles solo en anchura";
 choices[34][3] = "Permite recorrer los &aacute;rboles solo en profundidad";
 answers[34] = choices[34][1];
 units[34] = "63";
 comments[34] = "Id Pregunta: 1788. ";


//  Id pregunta: 1793 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Para representaci&oacute;n del conocimiento, los m&eacute;todos param&eacute;tricos&hellip;";
 choices[35]= new Array();
 choices[35][0] = "Son preferibles para obtener explicaciones de la forma en que el sistema saca las conclusiones";
 choices[35][1] = "Simulan los mecanismos neuronales del pensamiento";
 choices[35][2] = "Emulan los procesos de razonamiento utilizando modelos simb&oacute;licos";
 choices[35][3] = "Permiten utilizar par&aacute;metros por valor y por variable";
 answers[35] = choices[35][1];
 units[35] = "64";
 comments[35] = "Id Pregunta: 1793. ";


//  Id pregunta: 1800 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En el campo de los sistemas expertos, se&ntilde;ale de las siguientes opciones aquella que enumere sistemas que utilicen representaci&oacute;n param&eacute;trica:";
 choices[36]= new Array();
 choices[36][0] = "Redes neuronales; representaci&oacute;n por marcos; sistemas basados en restricciones";
 choices[36][1] = "Algoritmos gen&eacute;ticos; redes neuronales y redes sem&aacute;nticas";
 choices[36][2] = "Redes neuronales, redes sem&aacute;nticas, y sistemas basados en marcos";
 choices[36][3] = "Redes neuronales y el perceptr&oacute;n";
 answers[36] = choices[36][3];
 units[36] = "64";
 comments[36] = "Id Pregunta: 1800. ";


//  Id pregunta: 1839 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;A qu&eacute; hacen referencia las siglas NRC en un sistema de pasarela de pagos?";
 choices[37]= new Array();
 choices[37][0] = "N&uacute;mero de Registro de Control";
 choices[37][1] = "N&uacute;mero de Referencia de Control";
 choices[37][2] = "N&uacute;mero de Referencia Completo";
 choices[37][3] = "N&uacute;mero de Registro Completo";
 answers[37] = choices[37][2];
 units[37] = "70";
 comments[37] = "Id Pregunta: 1839. NULL";


//  Id pregunta: 1897 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Software de negocio para mejorar la comunicaci&oacute;n entre organizaciones y sus socios";
 choices[38]= new Array();
 choices[38][0] = "Acuerdo de Licencia de Usuario Final (EULA)";
 choices[38][1] = "Pol&iacute;tica de Seguridad";
 choices[38][2] = "Acuerdo de nivel de servicio (SLA)";
 choices[38][3] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 answers[38] = choices[38][3];
 units[38] = "23";
 comments[38] = "Id Pregunta: 1897. ";


//  Id pregunta: 1909 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Acerca de los sistemas MPP puede afirmarse:";
 choices[39]= new Array();
 choices[39][0] = "Constituyen una categor&iacute;a de los sistemas MISD donde se incluyen los arrays sist&oacute;licos.";
 choices[39][1] = "Constituyen una categor&iacute;a de los sistemas MIMD con una &uacute;nica memoria compartida.";
 choices[39][2] = "A su vez se dividen en sistemas de gesti&oacute;n UMA y sistemas de gesti&oacute;n NUMA.";
 choices[39][3] = "Categor&iacute;a de los sistemas MIMD con memoria distribuida.";
 answers[39] = choices[39][3];
 units[39] = "45";
 comments[39] = "Id Pregunta: 1909. ";


//  Id pregunta: 1953 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  En relaci&oacute;n al lenguaje Java, la clase THROWABLE tiene dos subclases:";
 choices[40]= new Array();
 choices[40][0] = "Error y Exception";
 choices[40][1] = "Error y Catch";
 choices[40][2] = "Throw y Finally";
 choices[40][3] = "Error y Throw";
 answers[40] = choices[40][0];
 units[40] = "60";
 comments[40] = "Id Pregunta: 1953. NULL";


//  Id pregunta: 4266 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Indique cu&aacute;l de los siguientes no es un servicio LDAP";
 choices[41]= new Array();
 choices[41][0] = "READ";
 choices[41][1] = "COMPARE";
 choices[41][2] = "ADD";
 choices[41][3] = "ABANDON";
 answers[41] = choices[41][0];
 units[41] = "74";
 comments[41] = "Id Pregunta: 4266. NULL";


//  Id pregunta: 4358 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Si se desea codificar un componente embebido de software, con especificaciones cr&iacute;ticas de tiempo real, &iquest;qu&eacute; tipo de lenguaje suele resultar m&aacute;s adecuado?";
 choices[42]= new Array();
 choices[42][0] = "Ensamblador o de bajo nivel.";
 choices[42][1] = "Uno de la tercera generaci&oacute;n.";
 choices[42][2] = "LISP.";
 choices[42][3] = "Uno de tipado fuerte.";
 answers[42] = choices[42][0];
 units[42] = "";
 comments[42] = "Id Pregunta: 4358. ";


//  Id pregunta: 4360 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  JDBC es:";
 choices[43]= new Array();
 choices[43][0] = "Un estandar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a una base de datos v&iacute;a ODBC.";
 choices[43][1] = "Un driver que permite el acceso a base de datos desde aplicaciones JAVA.";
 choices[43][2] = "Una API que permite la ejecuci&oacute;n de operaciones sobre una base de datos mediante lenguaje Java.";
 choices[43][3] = "El estandar ODBC para bases de datos relacionales.";
 answers[43] = choices[43][2];
 units[43] = "60.116";
 comments[43] = "Id Pregunta: 4360. La A no es, porque podr&iacute;a no usar ODBC intermedio.";


//  Id pregunta: 4388 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Un conjunto de dispositivos o especificaciones que act&uacute;a como intermediario entre una m&aacute;quina y un ser humano para proporcionarle a este la mejor adaptaci&oacute;n posible ante los mecanismos de entrada y salida de la m&aacute;quina es:";
 choices[44]= new Array();
 choices[44][0] = "Un sistema operativo.";
 choices[44][1] = "Una pasarela o gateway.";
 choices[44][2] = "Una interfaz de usuario.";
 choices[44][3] = "El middleware.";
 answers[44] = choices[44][2];
 units[44] = "55";
 comments[44] = "Id Pregunta: 4388. ";


//  Id pregunta: 4408 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Qu&eacute; sentencia JCL (Job Control Language) tiene como funci&oacute;n principal avisar al sistema de que comienza un nuevo trabajo en la corriente de entrada?";
 choices[45]= new Array();
 choices[45][0] = "La sentencia JOB.";
 choices[45][1] = "La sentencia JCLLIB.";
 choices[45][2] = "La sentencia PROC.";
 choices[45][3] = "La sentencia EXEC.";
 answers[45] = choices[45][0];
 units[45] = "";
 comments[45] = "Id Pregunta: 4408. ";


//  Id pregunta: 4455 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Que es el shell de UNIX?";
 choices[46]= new Array();
 choices[46][0] = "Es el equivalente al escritorio en Windows 2003.";
 choices[46][1] = "Es la unidad m&iacute;nima de informaci&oacute;n que se puede almacenar en un sistema de ficheros UNIX.";
 choices[46][2] = "Es un int&eacute;rprete de comandos.";
 choices[46][3] = "Es un protocolo de comunicaci&oacute;n en red propio de UNIX.";
 answers[46] = choices[46][2];
 units[46] = "53";
 comments[46] = "Id Pregunta: 4455. ";


//  Id pregunta: 4483 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cual de las siguientes sentencias es falsa?";
 choices[47]= new Array();
 choices[47][0] = "Una aplicaci&oacute;n ASP.NET se corresponde con un directorio virtual y todos los objetos ASP.NET incluidos en el mismo directorio virtual constituyen una aplicaci&oacute;n ASP.NET";
 choices[47][1] = "ADO.NET es el servicio de acceso a datos asociado a ASP.NET";
 choices[47][2] = "ASP.NET ofrece dos grupos de controles: controles Web y controles HTML";
 choices[47][3] = "Un formulario ASP.NET es un archivo HTML que se guarda en un fichero con extensi&oacute;n .net";
 answers[47] = choices[47][3];
 units[47] = "59";
 comments[47] = "Id Pregunta: 4483. ";


//  Id pregunta: 4484 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  El protocolo SSL (Secure Sockets Layer):";
 choices[48]= new Array();
 choices[48][0] = "Es una capa de seguridad que opera siempre sobre el protocolo UDP.";
 choices[48][1] = "No garantiza la integridad de Ia informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[48][2] = "Proporciona conexiones seguras solo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[48][3] = "Proporciona conexiones seguras sobre una red insegura garantizando, entre otros aspectos, integridad de datos transmitidos, privacidad de Ia conexi&oacute;n y autentificaci&oacute;n del cliente y del servidor.";
 answers[48] = choices[48][3];
 units[48] = "72";
 comments[48] = "Id Pregunta: 4484. ";


//  Id pregunta: 4498 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Se dice que una entidad se encuentra en segunda forma normal (2FN);";
 choices[49]= new Array();
 choices[49][0] = "Si no tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[49][1] = "Si tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[49][2] = "Si tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[49][3] = "Si no tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de estas.";
 answers[49] = choices[49][3];
 units[49] = "58";
 comments[49] = "Id Pregunta: 4498. ";


//  Id pregunta: 4591 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  En los equipos CISCO con sistema operativo IOS, ,&iquest;como puede verse Ia configuraci&oacute;n actual del equipo?";
 choices[50]= new Array();
 choices[50][0] = "a trav&eacute;s del comando show running-config";
 choices[50][1] = "a trav&eacute;s del comando show router-stat";
 choices[50][2] = "a trav&eacute;s del comando show ios-config";
 choices[50][3] = "a trav&eacute;s del comando show ip interfaces";
 answers[50] = choices[50][0];
 units[50] = "";
 comments[50] = "Id Pregunta: 4591. ";


//  Id pregunta: 4703 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque &hellip;";
 choices[51]= new Array();
 choices[51][0] = "el lenguaje Java se deriva de C++.";
 choices[51][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[51][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[51][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin.";
 answers[51] = choices[51][1];
 units[51] = "60";
 comments[51] = "Id Pregunta: 4703. Examen 2006 JCYL";


//  Id pregunta: 4726 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Cual de las siguientes afirmaciones es correcta cuando hablamos de XML:";
 choices[52]= new Array();
 choices[52][0] = "Cocoon es un parser XML de c&oacute;digo abierto";
 choices[52][1] = "Los parsers XML sin validaci&oacute;n necesitan el dtd asociado al documento xml";
 choices[52][2] = "Xerces es un parser XML basado en java";
 choices[52][3] = "XSLT es un esquema para XML utilizado en lugar de los DTD";
 answers[52] = choices[52][2];
 units[52] = "69";
 comments[52] = "Id Pregunta: 4726. Examen 2006 JCYL";


//  Id pregunta: 4792 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  Seg&uacute;n establece la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidospueden tener un periodo m&aacute;ximo de validez de:";
 choices[53]= new Array();
 choices[53][0] = "Dos a&ntilde;os";
 choices[53][1] = "Tres a&ntilde;os";
 choices[53][2] = "Cuatro a&ntilde;os";
 choices[53][3] = "Cinco a&ntilde;os";
 answers[53] = choices[53][3];
 units[53] = "74";
 comments[53] = "Id Pregunta: 4792. NULL";


//  Id pregunta: 4868 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativa a los sistemas de almacenamiento y m&eacute;todos de acceso NO es cierta?";
 choices[54]= new Array();
 choices[54][0] = "El &iacute;ndice basado en &aacute;rbol B presenta mayores densidades que el basado en &aacute;rbol B*";
 choices[54][1] = "Un fichero de datos puede tener varios &iacute;ndices, pero como mucho uno puede ser denso";
 choices[54][2] = "Una clave de b&uacute;squeda no tiene por qu&eacute; ser un&iacute;voca";
 choices[54][3] = "Los niveles n-1 (con n &gt; 1) de un &iacute;ndice multinivel (no arb&oacute;reo) son &iacute;ndices no-densos que indizan el nivel n";
 answers[54] = choices[54][0];
 units[54] = "48";
 comments[54] = "Id Pregunta: 4868. ";


//  Id pregunta: 5087 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  El est&aacute;ndar conocido como ISO/IEC 9594-1:2008 se corresponde con:";
 choices[55]= new Array();
 choices[55][0] = "LDAP";
 choices[55][1] = "UIT-T X-500";
 choices[55][2] = "HTML";
 choices[55][3] = "SQL";
 answers[55] = choices[55][1];
 units[55] = "73";
 comments[55] = "Id Pregunta: 5087. ";


//  Id pregunta: 5099 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Qu&eacute; actividades econ&oacute;micas NO caen dentro del &aacute;mbito de la directiva 2000/31/CE? ";
 choices[56]= new Array();
 choices[56][0] = "La radiodifusi&oacute;n de televisi&oacute;n o de radio";
 choices[56][1] = "Los servicios de transmisi&oacute;n de informaci&oacute;n a trav&eacute;s de una red de comunicaci&oacute;n";
 choices[56][2] = "La venta de mercanc&iacute;as en l&iacute;nea";
 choices[56][3] = "El env&iacute;o de comunicaciones comerciales por correo electr&oacute;nico";
 answers[56] = choices[56][0];
 units[56] = "30";
 comments[56] = "Id Pregunta: 5099. Directiva 200/31/CE, consideraci&oacute;n 18)";


//  Id pregunta: 5442 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[57]= new Array();
 choices[57][0] = "Usando XSL";
 choices[57][1] = "Usando un DTD";
 choices[57][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[57][3] = "Usando XSLT";
 answers[57] = choices[57][1];
 units[57] = "69";
 comments[57] = "Id Pregunta: 5442. Castilla y Le&oacute;n";


//  Id pregunta: 5493 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Indica la afirmaci&oacute;n correcta respecto a CLS o Common Language Specification:";
 choices[58]= new Array();
 choices[58][0] = "Es el conjunto de clases que se manejan en .NET";
 choices[58][1] = "Recoge la especificacion que debe cumplir todo lenguaje que se ejecuta sobre el framework .NET";
 choices[58][2] = "Es la especificacion del framework .NET";
 choices[58][3] = "Todas son falsas";
 answers[58] = choices[58][1];
 units[58] = "59";
 comments[58] = "Id Pregunta: 5493. ";


//  Id pregunta: 5510 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes es un escritorio de Linux?";
 choices[59]= new Array();
 choices[59][0] = " X11";
 choices[59][1] = "Genome";
 choices[59][2] = "KDE";
 choices[59][3] = "Ninguno de ellos";
 answers[59] = choices[59][2];
 units[59] = "52";
 comments[59] = "Id Pregunta: 5510. ";


//  Id pregunta: 5519 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  VMWARE se encuadra como un sistema operativo del tipo:";
 choices[60]= new Array();
 choices[60][0] = "sistema operativo monol&iacute;tico";
 choices[60][1] = "sistema operativo con capas";
 choices[60][2] = "sistema operativo con m&aacute;quina virtual";
 choices[60][3] = "sistema operativo tipo microkernel";
 answers[60] = choices[60][2];
 units[60] = "52";
 comments[60] = "Id Pregunta: 5519. ";


//  Id pregunta: 5677 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  Indique cu&aacute;l de las siguientes opciones no est&aacute; relacionada con la Web Sem&aacute;ntica:";
 choices[61]= new Array();
 choices[61][0] = "RDF (Resource Description Framework).";
 choices[61][1] = "OWL (Web Ontology Language).";
 choices[61][2] = "XML (Extensible Markup Language)";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = choices[61][3];
 units[61] = "71";
 comments[61] = "Id Pregunta: 5677. ";


//  Id pregunta: 5715 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  &iquest;Qu&eacute; es abiword?";
 choices[62]= new Array();
 choices[62][0] = "Un comando para contar palabras o bytes en archivos de texto.";
 choices[62][1] = "Un procesador de texto";
 choices[62][2] = "Un conversor de formatos multimedia.";
 choices[62][3] = "Un editor de archivos de sonido.";
 answers[62] = choices[62][1];
 units[62] = "54";
 comments[62] = "Id Pregunta: 5715. NULL";


//  Id pregunta: 5718 AÃ±o de creación de pregunta: 2009-01-01
 questions[63]= "64)  Desde un repositorio oficial de SUSE Linux Enterprise Server usted se descarga los archivos binarios de una aplicaci&oacute;n empaquetados del modo est&aacute;ndar de esta distribuci&oacute;n. &iquest;Cu&aacute;l es la extensi&oacute;n del archivo?";
 choices[63]= new Array();
 choices[63][0] = "rpm";
 choices[63][1] = "tar.gz";
 choices[63][2] = "deb";
 choices[63][3] = "tgz";
 answers[63] = choices[63][0];
 units[63] = "54";
 comments[63] = "Id Pregunta: 5718. ";


//  Id pregunta: 5746 AÃ±o de creación de pregunta: 2009-01-01
 questions[64]= "65)  &iquest;Qu&eacute; es el efecto avalancha en una funci&oacute;n hash?";
 choices[64]= new Array();
 choices[64][0] = "Una peque&ntilde;a variaci&oacute;n en la longitud del mensaje debe producir una gran variaci&oacute;n en la longitud del resumen";
 choices[64][1] = "Una peque&ntilde;a variaci&oacute;n del contenido del mensaje debe producir una gran variaci&oacute;n en la longitud del resumen";
 choices[64][2] = "Una peque&ntilde;a variaci&oacute;n en el contenido del mensaje debe producir una peque&ntilde;a variaci&oacute;n en la longitud del resumen";
 choices[64][3] = "Una peque&ntilde;a variaci&oacute;n en el contenido del mensaje debe producir una gran variaci&oacute;n en el contenido del resumen";
 answers[64] = choices[64][3];
 units[64] = "72";
 comments[64] = "Id Pregunta: 5746. ";


//  Id pregunta: 5752 AÃ±o de creación de pregunta: 2009-01-01
 questions[65]= "66)  &iquest;Qu&eacute; longitudes de clave tienen las diferentes versiones del algoritmo AES reconocidas oficialmente por el NIST?";
 choices[65]= new Array();
 choices[65][0] = "64, 128, 256 bits";
 choices[65][1] = "128, 192, 256 bits";
 choices[65][2] = "128, 256, 512 bits";
 choices[65][3] = "128, 256, 384 bits";
 answers[65] = choices[65][1];
 units[65] = "72";
 comments[65] = "Id Pregunta: 5752. ";


//  Id pregunta: 5781 AÃ±o de creación de pregunta: 2009-01-01
 questions[66]= "67)  Se&ntilde;ale cu&aacute;l de los siguientes objetos forma parte de los componentes proveedores de datos .NET Framework de ADO.NET";
 choices[66]= new Array();
 choices[66][0] = "DataSet";
 choices[66][1] = "DataTable";
 choices[66][2] = "DataAdapter";
 choices[66][3] = "RecordSet";
 answers[66] = choices[66][2];
 units[66] = "59";
 comments[66] = "Id Pregunta: 5781. MAP 2008 A2";


//  Id pregunta: 5913 AÃ±o de creación de pregunta: 2009-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes criptosistemas se corresponde con un criptosistema asim&eacute;trico &oacute; de clave p&uacute;blica?";
 choices[67]= new Array();
 choices[67][0] = "IDEA (International Data Encryption Standard)";
 choices[67][1] = "Algoritmo de intercambio de claves de Diffie- Hellman";
 choices[67][2] = "AES (Advanced Encryption Standard)";
 choices[67][3] = "RC-5";
 answers[67] = choices[67][1];
 units[67] = "72";
 comments[67] = "Id Pregunta: 5913. MAP 2008 A1";


//  Id pregunta: 6068 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  En el &aacute;mbito de los algoritmos de aprendizaje";
 choices[68]= new Array();
 choices[68][0] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje no supervisado";
 choices[68][1] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje no supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje supervisado";
 choices[68][2] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje supervisado";
 choices[68][3] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje no supervisado";
 answers[68] = choices[68][1];
 units[68] = "63,64";
 comments[68] = "Id Pregunta: 6068. ";


//  Id pregunta: 6215 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Respecto a la arquitectura ANSI/SPARC, &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[69]= new Array();
 choices[69][0] = "Se definen tres niveles: interno, medio y externo";
 choices[69][1] = "Cada esquema externo describe la parte de la base de datos que interesa a un grupo de usuarios determinado y oculta a ese grupo el resto de la base de datos";
 choices[69][2] = "Es &uacute;til para explicar el concepto de dependencia de datos";
 choices[69][3] = "Dos tipos de independencia de datos: b&aacute;sica y completa";
 answers[69] = choices[69][1];
 units[69] = "57";
 comments[69] = "Id Pregunta: 6215. TICB-2009, bloque desarrollo";


//  Id pregunta: 6318 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Si decimos que las filas de una tabla est&aacute;n ordenadas en alguna secuencia&nbsp;f&iacute;sica, independiente de cualquier ordenamiento que pueda imponerse a la tabla mediante &iacute;ndices, estamos refiri&eacute;ndonos a un sistema de base de datos:";
 choices[70]= new Array();
 choices[70][0] = "Orientado a objetos";
 choices[70][1] = "Relacional";
 choices[70][2] = "De lista invertida";
 choices[70][3] = "Jer&aacute;rquica";
 answers[70] = choices[70][2];
 units[70] = "58";
 comments[70] = "Id Pregunta: 6318. Un ejemplo de BD de lista invertida es ADABAS";


//  Id pregunta: 6326 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  El comando COUNT:";
 choices[71]= new Array();
 choices[71][0] = "Siempre va acompa&ntilde;ado de *";
 choices[71][1] = "Sirve para contar las ocurrencias del atributo al que acompa&ntilde;e.";
 choices[71][2] = "S&oacute;lo aparece despu&eacute;s del WHERE.";
 choices[71][3] = "Obliga a que aparezca la cl&aacute;usula GROUP BY.";
 answers[71] = choices[71][1];
 units[71] = "58";
 comments[71] = "Id Pregunta: 6326. ";


//  Id pregunta: 6330 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes acciones no se puede considerar del modo de operar del Data Mining?";
 choices[72]= new Array();
 choices[72][0] = "Adivinar futuros comportamientos.";
 choices[72][1] = "Crear modelos.";
 choices[72][2] = "Analizar relaciones.";
 choices[72][3] = "Detectar desviaciones.";
 answers[72] = choices[72][0];
 units[72] = "68";
 comments[72] = "Id Pregunta: 6330. ";


//  Id pregunta: 6478 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  Durante la creaci&oacute;n de una base de datos Oracle se generan autom&aacute;ticamente dos usuarios. Estas dos cuentas son:";
 choices[73]= new Array();
 choices[73][0] = "SYS Y DBA";
 choices[73][1] = "SYS Y SYSTEM";
 choices[73][2] = "SYSTEM Y DBA";
 choices[73][3] = "MANAGER Y DBA";
 answers[73] = choices[73][1];
 units[73] = "57";
 comments[73] = "Id Pregunta: 6478. Castilla La Mancha 2009";


//  Id pregunta: 6518 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  El API de Java para llamar a m&eacute;todos escritos en otros lenguajes es:";
 choices[74]= new Array();
 choices[74][0] = "JDI";
 choices[74][1] = "JCI";
 choices[74][2] = "JTEE";
 choices[74][3] = "JNI";
 answers[74] = choices[74][3];
 units[74] = "60";
 comments[74] = "Id Pregunta: 6518. NULL";


//  Id pregunta: 7165 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes es una sentencia SQL de tipo DDL (Data Definition Language)?";
 choices[75]= new Array();
 choices[75][0] = "SELECT";
 choices[75][1] = "DROP";
 choices[75][2] = "INSERT";
 choices[75][3] = "DELETE";
 answers[75] = choices[75][1];
 units[75] = "58";
 comments[75] = "Id Pregunta: 7165. Examen TIC B 2009";


//  Id pregunta: 8210 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Se&ntilde;ale la afirmaci&oacute;n correcta sobre las redes SAN iSCSI:";
 choices[76]= new Array();
 choices[76][0] = "Intercambian tramas SCSI sobre FC.";
 choices[76][1] = "Es una red de almacenamiento de acceso a ficheros.";
 choices[76][2] = "No permite implementar iSCSI en software.";
 choices[76][3] = "Puede usar TCP/IP como transporte.";
 answers[76] = choices[76][3];
 units[76] = "48";
 comments[76] = "Id Pregunta: 8210. Examen TIC A1 2010";


//  Id pregunta: 8367 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;En qu&eacute; a&ntilde;o se ha producido la ultima revisi&oacute;n del est&aacute;ndar ANSI SQL?";
 choices[77]= new Array();
 choices[77][0] = "1992.";
 choices[77][1] = "2008";
 choices[77][2] = "2011";
 choices[77][3] = "2012";
 answers[77] = choices[77][2];
 units[77] = "57";
 comments[77] = "Id Pregunta: 8367. Similar a examen TIC A2 2010";


//  Id pregunta: 8786 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;A cu&aacute;l de las siguientes arquitecturas paralelas pertenecen las arquitecturas Pipeline?";
 choices[78]= new Array();
 choices[78][0] = "SISD";
 choices[78][1] = "SIMD";
 choices[78][2] = "MISD";
 choices[78][3] = "MIMD";
 answers[78] = choices[78][2];
 units[78] = "45";
 comments[78] = "Id Pregunta: 8786. Examen UPM A2 2011";


//  Id pregunta: 8864 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[79]= new Array();
 choices[79][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros";
 choices[79][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee";
 choices[79][2] = "Se puede modelar datos a cualquier nivel de complejidad";
 choices[79][3] = "El uso de los ficheros se puede extender a cualquier plataforma";
 answers[79] = choices[79][1];
 units[79] = "69";
 comments[79] = "Id Pregunta: 8864. Analista Ayto. Madrid 2010";


//  Id pregunta: 9049 AÃ±o de creación de pregunta: 2012-01-01
 questions[80]= "81)  La ley de contratos del sector p&uacute;blico establece entre sus herramientas un recurso especial de contrataci&oacute;n, se&ntilde;ale cual de la siguientes afirmaciones es FALSA.";
 choices[80]= new Array();
 choices[80][0] = "No se puede usar en casos de tramitaci&oacute;n de emergencia";
 choices[80][1] = "Es objeto de recurso,entre otros, las adjudicaciones realizadas por poderes adjudicadores.";
 choices[80][2] = "Los contratos de suministros no sujetos a regulaci&oacute;n armonizada pueden ser recurridos con este recurso especial. ";
 choices[80][3] = "El car&aacute;cter del recurso es potestativo, es decir, no es obligatorio interponerlo";
 answers[80] = choices[80][2];
 units[80] = "41";
 comments[80] = "Id Pregunta: 9049. Art. 40 RD Legislativo 3/2011";


//  Id pregunta: 9094 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[81]= new Array();
 choices[81][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[81][1] = "Si, como obra literaria.";
 choices[81][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[81][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[81] = choices[81][3];
 units[81] = "36";
 comments[81] = "Id Pregunta: 9094. ";


//  Id pregunta: 9148 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;En qu&eacute; se diferencia la memoria flash de tipo NOR y la de tipo NAND?";
 choices[82]= new Array();
 choices[82][0] = "La de NAND usa un t&uacute;nel de inyecci&oacute;n para la escritura y para el borrado un t&uacute;nel de &ldquo;soltado&rdquo;";
 choices[82][1] = "Tienen un coste bastante inferior.";
 choices[82][2] = "S&oacute;lo permiten acceso secuencial (m&aacute;s orientado a dispositivos de almacenamiento masivo) frente a las memorias flash basadas en NOR que permiten lectura de acceso aleatorio.";
 choices[82][3] = "Todas son correctas.";
 answers[82] = choices[82][3];
 units[82] = "47";
 comments[82] = "Id Pregunta: 9148. ";


//  Id pregunta: 9161 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  En el &aacute;mbito de los Sistemas de Informaci&oacute;n Geogr&aacute;fica, &iquest;qu&eacute; es un gazeteer?";
 choices[83]= new Array();
 choices[83][0] = "Directorio de referencias geogr&aacute;ficas";
 choices[83][1] = "Capa raster de informaci&oacute;n topol&oacute;gica";
 choices[83][2] = "Capa vectorial de informaci&oacute;n topol&oacute;gica";
 choices[83][3] = "Ninguna de las anteriores es correcta";
 answers[83] = choices[83][0];
 units[83] = "67";
 comments[83] = "Id Pregunta: 9161. NULL";


//  Id pregunta: 9201 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  El lenguaje de expresi&oacute;n de derechos REL se basa en contenedores de grants. Indica cual de los siguientes elementos no forma parte de un grant.";
 choices[84]= new Array();
 choices[84][0] = "Principal.";
 choices[84][1] = "Right.";
 choices[84][2] = "Resource.";
 choices[84][3] = "Constraints.";
 answers[84] = choices[84][3];
 units[84] = "37";
 comments[84] = "Id Pregunta: 9201. ";


//  Id pregunta: 9240 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Qu&eacute; caracter&iacute;sticas tiene Ubuntu?";
 choices[85]= new Array();
 choices[85][0] = "Se orienta al usuario novel y promedio.";
 choices[85][1] = "Tiene un fuerte enfoque en la facilidad de uso";
 choices[85][2] = "Su patrocinador es Canonical.";
 choices[85][3] = "Todas son correctas.";
 answers[85] = choices[85][3];
 units[85] = "53";
 comments[85] = "Id Pregunta: 9240. ";


//  Id pregunta: 9607 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;C&uacute;al de las siguientes caracter&iacute;sticas es propia de los sistemas de base de datos NoSQL?";
 choices[86]= new Array();
 choices[86][0] = "Soportan operaciones JOIN";
 choices[86][1] = " Garantizan completamente ACID";
 choices[86][2] = "Requieren estructuras fijas, como tablas";
 choices[86][3] = "Escalan bien horizontalmente";
 answers[86] = choices[86][3];
 units[86] = "58";
 comments[86] = "Id Pregunta: 9607. ";


//  Id pregunta: 9676 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Son servicios de una IDE:";
 choices[87]= new Array();
 choices[87][0] = "Servicios de mapas en Web (WMS), servicios de elementos en Web (WFS), servicios de coberturas en Web (WCS), servicios de conversi&oacute;n de coordenadas, servicios de cat&aacute;logos de datos.";
 choices[87][1] = "Servicios de nomenclator (gazetteer), descripci&oacute;n de estilo de capas (SLD).";
 choices[87][2] = "Servicios de metadatos, establecimiento de est&aacute;ndares, identificaci&oacute;n de marcos, establecimiento de acuerdos entre organismos para la producci&oacute;n de informaci&oacute;n espacial de inter&eacute;s conjunto.";
 choices[87][3] = "a, b y c son correctas.";
 answers[87] = choices[87][3];
 units[87] = "67";
 comments[87] = "Id Pregunta: 9676. NULL";


//  Id pregunta: 9724 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  El sistema de redundancia que consiste en la divisi&oacute;n a nivel de bloques m&aacute;s un disco de paridad dedicado se denomina";
 choices[88]= new Array();
 choices[88][0] = "RAID 1";
 choices[88][1] = "RAID 3";
 choices[88][2] = "RAID 4";
 choices[88][3] = "RAID 6";
 answers[88] = choices[88][2];
 units[88] = "48";
 comments[88] = "Id Pregunta: 9724. Examen TIC-A1 2013";


//  Id pregunta: 9960 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Seleccione la opci&oacute;n CORRECTA de entre las siguientes afirmaciones que hacen referencia al esquema de estrella";
 choices[89]= new Array();
 choices[89][0] = "Un esquema de estrella es un modelo de datos que tiene una tabla de dimensiones que contiene los datos para el an&aacute;lisis y est&aacute; rodeada de las tablas de hechos.";
 choices[89][1] = "En un esquema de estrella la tabla de hechos tendr&aacute; siempre una clave primaria simple";
 choices[89][2] = "Cuando a un esquema en estrella se aplican principios de normalizaci&oacute;n a una tabla de  dimensi&oacute;n, el resultado se conoce como esquema de copo de nieve.";
 choices[89][3] = "El esquema de estrella es un modelo dimensional implementado en una base de datos multidimensional";
 answers[89] = choices[89][2];
 units[89] = "68,71";
 comments[89] = "Id Pregunta: 9960. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10023 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Throwable es la superclase de todos los errores y excepciones de Java SE 7. &iquest;A qu&eacute; paquete de Java pertenece Throwable?";
 choices[90]= new Array();
 choices[90][0] = "java.lang";
 choices[90][1] = "java.error";
 choices[90][2] = "java.util";
 choices[90][3] = "Throwable no es una clase, es un interface, y &eacute;ste pertenece al paquete java.io.";
 answers[90] = choices[90][0];
 units[90] = "60";
 comments[90] = "Id Pregunta: 10023. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10436 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En lo referente a las instalaciones por defecto de las interfaces gr&aacute;ficas de los sistemas Linux-Unix ";
 choices[91]= new Array();
 choices[91][0] = "Gnome utiliza &ldquo;Telepathy&rdquo; como librer&iacute;a para las comunicaciones y &ldquo;Plasma&rdquo; para la representaci&oacute;n gr&aacute;fica de la interfaz. ";
 choices[91][1] = "KDE utiliza la librer&iacute;a &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido  y &ldquo;GTK+&rdquo; para la representaci&oacute;n de la interfaz de usuario. ";
 choices[91][2] = "KDE utiliza la librer&iacute;a &ldquo;Phonon&rdquo; para la creaci&oacute;n de contenido multimedia y &ldquo;Goya&rdquo; para la representaci&oacute;n gr&aacute;fica de partes de la interfaz. ";
 choices[91][3] = "Gnome utiliza &ldquo;Sonnet&rdquo; como librer&iacute;a para la representaci&oacute;n de la interfaz de usuario y &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido. ";
 answers[91] = choices[91][2];
 units[91] = "54";
 comments[91] = "Id Pregunta: 10436. Examen TIC A1 2013";


//  Id pregunta: 10465 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l no es una nueva caracter&iacute;stica de HTML5?";
 choices[92]= new Array();
 choices[92][0] = "Nuevos elementos sem&aacute;nticos.";
 choices[92][1] = "Fuerte soporte a gr&aacute;ficos con &lt;canvas&gt; y &lt;svg&gt;.";
 choices[92][2] = "Fuerte soporte multimedia.";
 choices[92][3] = "Nuevos elementos para soporte a la accesibilidad web.";
 answers[92] = choices[92][3];
 units[92] = "69";
 comments[92] = "Id Pregunta: 10465. NULL";


//  Id pregunta: 10476 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Completa la frase: A diferencia de NIS, LDAP &hellip;";
 choices[93]= new Array();
 choices[93][0] = "No est&aacute; restringido a redes unix";
 choices[93][1] = "Usa notaci&oacute;n ASN.1";
 choices[93][2] = "No soporta implementaciones de software libre";
 choices[93][3] = "Se usa sobre TCP/IP";
 answers[93] = choices[93][0];
 units[93] = "73";
 comments[93] = "Id Pregunta: 10476. ";


//  Id pregunta: 10619 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Se&ntilde;ale cu&aacute;l de estas aplicaciones puede implementarse con el entorno .NET:";
 choices[94]= new Array();
 choices[94][0] = "Aplicaci&oacute;n de escritorio escrita en C++.";
 choices[94][1] = "Sitio web din&aacute;mico.";
 choices[94][2] = "Una plataforma de e-learning.";
 choices[94][3] = "Todas las anteriores.";
 answers[94] = choices[94][3];
 units[94] = "59";
 comments[94] = "Id Pregunta: 10619. ";


//  Id pregunta: 10812 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes licencias NO se considera copyleft robusto?";
 choices[95]= new Array();
 choices[95][0] = "EUPL";
 choices[95][1] = "GPL";
 choices[95][2] = "LGPL";
 choices[95][3] = "BSD";
 answers[95] = choices[95][3];
 units[95] = "61";
 comments[95] = "Id Pregunta: 10812. Examen GSI 2014";


//  Id pregunta: 11038 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; Base de Datos NO est&aacute; disponible para Linux?";
 choices[96]= new Array();
 choices[96][0] = "Oracle";
 choices[96][1] = "SQL Server";
 choices[96][2] = "PostgreSQL";
 choices[96][3] = "MySQL";
 answers[96] = choices[96][1];
 units[96] = "58";
 comments[96] = "Id Pregunta: 11038. ";


//  Id pregunta: 11130 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes no es un servidor de correo electr&oacute;nico?";
 choices[97]= new Array();
 choices[97][0] = "Sendmail";
 choices[97][1] = "Microsoft Exchange";
 choices[97][2] = "IBM Lotus Domino";
 choices[97][3] = "SMTP Websphere";
 answers[97] = choices[97][3];
 units[97] = "49";
 comments[97] = "Id Pregunta: 11130. ";


//  Id pregunta: 11135 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; comando de UNIX muestra la ruta al directorio de trabajo?";
 choices[98]= new Array();
 choices[98][0] = "Ls";
 choices[98][1] = "Pwd";
 choices[98][2] = "Tree";
 choices[98][3] = "Cd /home";
 answers[98] = choices[98][1];
 units[98] = "54";
 comments[98] = "Id Pregunta: 11135. ";


//  Id pregunta: 11140 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l es de las siguientes aplicaciones ofim&aacute;ticas permite crear gr&aacute;ficos y diagramas?";
 choices[99]= new Array();
 choices[99][0] = "Draw";
 choices[99][1] = "Impress";
 choices[99][2] = "Base";
 choices[99][3] = "Picture";
 answers[99] = choices[99][0];
 units[99] = "62";
 comments[99] = "Id Pregunta: 11140. ";


