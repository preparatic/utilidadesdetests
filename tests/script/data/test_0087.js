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

//  Id pregunta: 89 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qui&eacute;nes son miembros del comit&eacute; JTC-1, responsable de la elaboraci&oacute;n de normas de Tratamiento de la Informaci&oacute;n excepto de los servicios p&uacute;blicos de comunicaciones?:";
 choices[0]= new Array();
 choices[0][0] = "Los pa&iacute;ses pertenecientes a la Uni&oacute;n Europea";
 choices[0][1] = "Las instituciones nacionales de normalizaci&oacute;n y la Comisi&oacute;n de la Uni&oacute;n Europea";
 choices[0][2] = "Una representaci&oacute;n del comit&eacute; directivo de la ISO";
 choices[0][3] = "El JTC-1 es una asociaci&oacute;n abierta, no un comit&eacute; de elaboraci&oacute;n de normas";
 answers[0] = choices[0][1];
 units[0] = "42";
 comments[0] = "Id Pregunta: 89. ";


//  Id pregunta: 150 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El modelo de Nolan de cuatro etapas si lo representamos gr&aacute;ficamente tiene forma de:";
 choices[1]= new Array();
 choices[1][0] = "s";
 choices[1][1] = "n";
 choices[1][2] = "u";
 choices[1][3] = "z";
 answers[1] = choices[1][0];
 units[1] = "22";
 comments[1] = "Id Pregunta: 150. Nolan";


//  Id pregunta: 370 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Los ficheros automatizados de los que sean titulares las Cortes Generales, el Defensor del Pueblo, el Tribunal de Cuentas, el Consejo General del Poder Judicial y el Tribunal Constitucional , seg&uacute;n la Ley de Protecci&oacute;n de Datos:";
 choices[2]= new Array();
 choices[2][0] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[2][1] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma, pero no les ser&aacute; de aplicaci&oacute;n el r&eacute;gimen de protecci&oacute;n de datos";
 choices[2][2] = "Se regir&aacute;n por sus disposiciones espec&iacute;ficas";
 choices[2][3] = "No les ser&aacute; de aplicaci&oacute;n lo dispuesto en los T&iacute;tulos VI y VII de la misma";
 answers[2] = choices[2][0];
 units[2] = "29";
 comments[2] = "Id Pregunta: 370. ";


//  Id pregunta: 546 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Los tipos de dise&ntilde;o de las organizaciones m&aacute;s extendidos son los siguientes:";
 choices[3]= new Array();
 choices[3][0] = "Apuntado, plano, basado en la l&iacute;nea y de estructura mixta.";
 choices[3][1] = "Apuntado, plano, basado en la l&iacute;nea y con orientaci&oacute;n a staff.";
 choices[3][2] = "Apuntado, plano, jer&aacute;nquico y reticular";
 choices[3][3] = "Apuntado, plano, sectorial y con orientaci&oacute;n a staff.";
 answers[3] = choices[3][1];
 units[3] = "26";
 comments[3] = "Id Pregunta: 546. ";


//  Id pregunta: 648 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Cu&aacute;l de las siguientes relaciones entre Organismos internacionales y europeos es incorrecta:";
 choices[4]= new Array();
 choices[4][0] = "ITU-T - ETSI";
 choices[4][1] = "IEC - CENELEC";
 choices[4][2] = "Comit&eacute; conjunto JTC-1 (ISO - CEN/CENELEC)";
 choices[4][3] = "ISO -CEN";
 answers[4] = choices[4][2];
 units[4] = "42";
 comments[4] = "Id Pregunta: 648. ";


//  Id pregunta: 698 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Un sistema multiproceso NUMA se diferencia de uno SMP en:";
 choices[5]= new Array();
 choices[5][0] = "Su menor escalabilidad.";
 choices[5][1] = "Su utilizaci&oacute;n de una red de &aacute;rea local en lugar de un bus para la comunicaci&oacute;n entre CPU's.";
 choices[5][2] = "Su utilizaci&oacute;n de m&aacute;s de un bus para comunicar CPU's y memoria.";
 choices[5][3] = "Su falta de mecanismos de coherencia de cache.";
 answers[5] = choices[5][2];
 units[5] = "45";
 comments[5] = "Id Pregunta: 698. ";


//  Id pregunta: 753 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  Un ejemplo de herramienta Open Source de administraci&oacute;n remota de sistemas Unix/Linux es:";
 choices[6]= new Array();
 choices[6][0] = "WebMin";
 choices[6][1] = "WMI (Web Management &amp; Instrumentation)";
 choices[6][2] = "syslog";
 choices[6][3] = "Performance Monitor";
 answers[6] = choices[6][0];
 units[6] = "53,61,62";
 comments[6] = "Id Pregunta: 753. ";


//  Id pregunta: 913 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; define la norma X.500?:";
 choices[7]= new Array();
 choices[7][0] = "Servicio de directorio";
 choices[7][1] = "Sistema de tratamiento de mensajes";
 choices[7][2] = "Servicio de transferencia de ficheros";
 choices[7][3] = "Sistema de gesti&oacute;n de red";
 answers[7] = choices[7][0];
 units[7] = "73";
 comments[7] = "Id Pregunta: 913. ";


//  Id pregunta: 1037 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El modelo de referencia ANSI/SPARC para la estandarizaci&oacute;n de los SGBD:";
 choices[8]= new Array();
 choices[8][0] = "El n&uacute;cleo de la arquitectura lo constituye el diccionario de datos";
 choices[8][1] = "Los metadatos no forman parte del diccionario";
 choices[8][2] = "Indica la forma de instrumentar las interacciones del SGBD";
 choices[8][3] = "La administraci&oacute;n de la empresa dise&ntilde;a los esquemas externos";
 answers[8] = choices[8][0];
 units[8] = "57";
 comments[8] = "Id Pregunta: 1037. ";


//  Id pregunta: 1139 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En un ordenador que emplea memoria virtual:";
 choices[9]= new Array();
 choices[9][0] = "Las direcciones que generan los programas se refieren a un espacio mayor que el espacio realmente disponible en memoria principal";
 choices[9][1] = "El mapa de direcciones l&oacute;gicas o virtual es igual al mapa de direcciones f&iacute;sicas o reales";
 choices[9][2] = "El espacio virtual emplea como soporte la memoria principal";
 choices[9][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[9] = choices[9][0];
 units[9] = "52";
 comments[9] = "Id Pregunta: 1139. ";


//  Id pregunta: 1355 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Se&ntilde;ale la respuesta falsa. Una unidad de control cableada:";
 choices[10]= new Array();
 choices[10][0] = "Es m&aacute;s r&aacute;pida de lo normal";
 choices[10][1] = "Es muy cara de dise&ntilde;ar";
 choices[10][2] = "Es reprogramable f&aacute;cilmente";
 choices[10][3] = "Ninguna de las anteriores respuestas es falsa";
 answers[10] = choices[10][2];
 units[10] = "47";
 comments[10] = "Id Pregunta: 1355. ";


//  Id pregunta: 1648 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones de proyectos java open source es correcta?";
 choices[11]= new Array();
 choices[11][0] = "JBoss es un contenedor de servlets y Tomcat es un servidor de aplicaciones";
 choices[11][1] = "Struts es un framework de programaci&oacute;n orientada a aspectos";
 choices[11][2] = "Lucene es un motor de b&uacute;squeda";
 choices[11][3] = "Ninguna de las anteriores es cierta";
 answers[11] = choices[11][2];
 units[11] = "62";
 comments[11] = "Id Pregunta: 1648. ";


//  Id pregunta: 1925 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  Para la modelizaci&oacute;n de datos en el modelo de entidad-relaci&oacute;n &iquest;Qu&eacute; se entiende como grado de una tabla?";
 choices[12]= new Array();
 choices[12][0] = "El n&uacute;mero de filas de la tabla";
 choices[12][1] = "El n&uacute;mero de columnas de la tabla";
 choices[12][2] = "El n&uacute;mero de entidades de un tipo que se relacionan con las de otro tipo en funci&oacute;n de los atributos que caracterizan la relaci&oacute;n";
 choices[12][3] = "El n&uacute;mero de atributos de esa tabla que son claves primarias de otras tablas";
 answers[12] = choices[12][1];
 units[12] = "58";
 comments[12] = "Id Pregunta: 1925. NULL";


//  Id pregunta: 1951 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es un &quot;Parser&quot; XML?";
 choices[13]= new Array();
 choices[13][0] = "Un m&oacute;dulo o programa que se ocupa de archivar en local los c&oacute;digos XML";
 choices[13][1] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n externa";
 choices[13][2] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n interna";
 choices[13][3] = "Un m&oacute;dulo o programa que se ocupa de archivar en la correspondiente Base de Datos los c&oacute;digos XML";
 answers[13] = choices[13][2];
 units[13] = "69";
 comments[13] = "Id Pregunta: 1951. NULL";


//  Id pregunta: 2024 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  En Programaci&oacute;n orientada a objetos, las relaciones de agregaci&oacute;n entre objetos son:";
 choices[14]= new Array();
 choices[14][0] = "Maneras de construir clases u objetos en t&eacute;rminos de otras clases u objetos.";
 choices[14][1] = "La forma de definir una clase u objeto como extensi&oacute;n de otra clase u objeto.";
 choices[14][2] = "Mecanismos para sobrecargar los m&eacute;todos de accesos a los objetos.";
 choices[14][3] = "S&oacute;lo posibles entre objetos monol&iacute;ticos.";
 answers[14] = choices[14][0];
 units[14] = "82,84";
 comments[14] = "Id Pregunta: 2024. Examen TIC MAP B 2004";


//  Id pregunta: 2228 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  A las herramientas CASE que abarcan las &uacute;ltimas fases del ciclo de vida (dise&ntilde;o detallado y generaci&oacute;n de c&oacute;digo) se las denomina:";
 choices[15]= new Array();
 choices[15][0] = "Superiores (upper CASE).";
 choices[15][1] = "Inferiores (lower CASE).";
 choices[15][2] = "Las 2 anteriores son correctas.";
 choices[15][3] = "Todas son falsas.";
 answers[15] = choices[15][1];
 units[15] = "91";
 comments[15] = "Id Pregunta: 2228. ";


//  Id pregunta: 2241 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  CODE-AND-FIX:";
 choices[16]= new Array();
 choices[16][0] = "Es un modelo en cascada";
 choices[16][1] = "Es una t&eacute;cnica que se usa mucho en la Administraci&oacute;n";
 choices[16][2] = "Es equivalente a METRICA";
 choices[16][3] = "No resulta muy pr&aacute;ctico";
 answers[16] = choices[16][3];
 units[16] = "76";
 comments[16] = "Id Pregunta: 2241. ";


//  Id pregunta: 2317 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En el modelo Entidad-Relaci&oacute;n utilizado en la metodolog&iacute;a M&Eacute;TRICA, las Entidades se describen mediante:";
 choices[17]= new Array();
 choices[17][0] = "Los datos";
 choices[17][1] = "Las relaciones";
 choices[17][2] = "Los atributos";
 choices[17][3] = "Otras entidades";
 answers[17] = choices[17][2];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2317. NULL";


//  Id pregunta: 2346 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En relaci&oacute;n con el ciclo de vida denominado cl&aacute;sico o en cascada se pueden hacer una serie de consideraciones. Indicar cu&aacute;l de las siguientes es falsa:";
 choices[18]= new Array();
 choices[18][0] = "Los proyectos reales escasamente siguen el camino secuencial que propone el modelo";
 choices[18][1] = "Es dif&iacute;cil para el usuario establecer correcta y totalmente todos los requerimientos al principio del proyecto";
 choices[18][2] = "Una versi&oacute;n funcionando del programa no podr&iacute;a estar disponible hasta las etapas finales del desarrollo del proyecto";
 choices[18][3] = "No es necesario completar cada una de las etapas para pasar a la siguiente";
 answers[18] = choices[18][3];
 units[18] = "76";
 comments[18] = "Id Pregunta: 2346. ";


//  Id pregunta: 2385 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Indicar cu&aacute;l no es un factor de calidad, seg&uacute;n McCall, desde un punto de vista de explotaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Usabilidad";
 choices[19][1] = "Eficiencia";
 choices[19][2] = "Correcci&oacute;n";
 choices[19][3] = "Mantenibilidad";
 answers[19] = choices[19][3];
 units[19] = "88";
 comments[19] = "Id Pregunta: 2385. ";


//  Id pregunta: 2468 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  No es un &quot;resultado&quot; del modelo EFQM:";
 choices[20]= new Array();
 choices[20][0] = "El impacto en la sociedad";
 choices[20][1] = "Satisfacci&oacute;n del Personal";
 choices[20][2] = "Resultados empresariales.";
 choices[20][3] = "El manual de calidad de la empresa";
 answers[20] = choices[20][3];
 units[20] = "92";
 comments[20] = "Id Pregunta: 2468. NULL";


//  Id pregunta: 2530 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En sistemas de recuperaci&oacute;n de la informaci&oacute;n, al cociente entre el n&uacute;mero de referencias  obtenidas y el n&uacute;mero total de referencias existentes, se denomina:";
 choices[21]= new Array();
 choices[21][0] = "&Iacute;ndice de retorno";
 choices[21][1] = "&Iacute;ndice de exactitud";
 choices[21][2] = "&Iacute;ndice de precisi&oacute;n";
 choices[21][3] = "&Iacute;ndice de localizaci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "96";
 comments[21] = "Id Pregunta: 2530. NULL";


//  Id pregunta: 2631 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;Qu&eacute; formula expresa la relaci&oacute;n entre puntos de funci&oacute;n y COCOMO?";
 choices[22]= new Array();
 choices[22][0] = "FP= DSI * 320/nivel de lenguaje";
 choices[22][1] = "DSI= FP *  320 /nivel del lenguaje ";
 choices[22][2] = "FP= nivel de lenguaje / DSI * 320";
 choices[22][3] = "DSI= nivel de lenguaje / FP * 320";
 answers[22] = choices[22][1];
 units[22] = "89";
 comments[22] = "Id Pregunta: 2631. NULL";


//  Id pregunta: 2658 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  Una de las siguientes caracter&iacute;sticas no se corresponde con las del SW";
 choices[23]= new Array();
 choices[23][0] = "fabricaci&oacute;n &uacute;nica, no en serie";
 choices[23][1] = "F&aacute;cil de modificar pero dificil de validar";
 choices[23][2] = "Proceso de desarrollo f&aacute;cil de controlar";
 choices[23][3] = "Todas los correctas";
 answers[23] = choices[23][2];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2658. ";


//  Id pregunta: 2695 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n consistente en r&aacute;pidas ojeadas de selecci&oacute;n buscando referencias en textos sin an&aacute;lisis con profundidad de los contenidos, auxili&aacute;ndose de se&ntilde;aladores impl&iacute;citos y expl&iacute;citos:";
 choices[24]= new Array();
 choices[24][0] = "Se denominan hojeo-ojeo.";
 choices[24][1] = "Son relativamente poco complejos.";
 choices[24][2] = "Todas las anteriores.";
 choices[24][3] = "Ninguna de las anteriores.";
 answers[24] = choices[24][2];
 units[24] = "96";
 comments[24] = "Id Pregunta: 2695. NULL";


//  Id pregunta: 3042 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Para que me sirve una sonda de intrusi&oacute;n?:";
 choices[25]= new Array();
 choices[25][0] = "No existe ese concepto";
 choices[25][1] = "Para devolver el ataque";
 choices[25][2] = "Para detectar actividades anormales o sospechosas en la red";
 choices[25][3] = "Para penetrar en un sistema";
 answers[25] = choices[25][2];
 units[25] = "111";
 comments[25] = "Id Pregunta: 3042. NULL";


//  Id pregunta: 3172 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes funciones no corresponde al nivel de transporte?:";
 choices[26]= new Array();
 choices[26][0] = "Dividir en fragmentos mas peque&ntilde;os la informaci&oacute;n que acepta del nivel de sesi&oacute;n, y pasarlos al nivel de red";
 choices[26][1] = "Asegurar el trasvase de informaci&oacute;n entre los 2 extremos de la comunicaci&oacute;n";
 choices[26][2] = "Permitir la comunicaci&oacute;n simult&aacute;nea de varias sesiones de trabajo";
 choices[26][3] = "Transportar la informaci&oacute;n entre nodos de conmutaci&oacute;n conectados directamente entre si";
 answers[26] = choices[26][3];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3172. NULL";


//  Id pregunta: 3222 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de posicionamiento m&oacute;vil ofrece menor precisi&oacute;n?:";
 choices[27]= new Array();
 choices[27][0] = "A-GPS";
 choices[27][1] = "E-OTD";
 choices[27][2] = "CGI-TA";
 choices[27][3] = "TOA";
 answers[27] = choices[27][2];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3222. ";


//  Id pregunta: 3285 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Qu&eacute; es FTAM (File Transfer Access and Management)?:";
 choices[28]= new Array();
 choices[28][0] = "Un protocolo del nivel de presentaci&oacute;n para gesti&oacute;n de ficheros";
 choices[28][1] = "Una aplicaci&oacute;n para transferencia y compartici&oacute;n de archivos";
 choices[28][2] = "Una aplicaci&oacute;n para emulaci&oacute;n de terminales remotos";
 choices[28][3] = "Un protocolo de la capa TCP/IP para compartir archivos";
 answers[28] = choices[28][1];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3285. ";


//  Id pregunta: 3288 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Qu&eacute; es un convertidor anal&oacute;gico/digital (ADC)?:";
 choices[29]= new Array();
 choices[29][0] = "Un convertidos similar a uno digital";
 choices[29][1] = "Un programa que convierte formato anal&oacute;gico a formato digital";
 choices[29][2] = "Un sistema que lee valores continuos y saca valores discretos";
 choices[29][3] = "Nada de lo anterior es correcto";
 answers[29] = choices[29][2];
 units[29] = "97";
 comments[29] = "Id Pregunta: 3288. NULL";


//  Id pregunta: 3572 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En una comunicaci&oacute;n v&iacute;a radio entre el m&oacute;vil y la estaci&oacute;n base:";
 choices[30]= new Array();
 choices[30][0] = "El enlace ascendente es del m&oacute;vil a la estaci&oacute;n base";
 choices[30][1] = "El enlace descendente es de la estaci&oacute;n base al m&oacute;vil";
 choices[30][2] = "Las 2 respuestas anteriores son correctas";
 choices[30][3] = "Las respuestas 'a'y 'b' son incorrectas";
 answers[30] = choices[30][2];
 units[30] = "108";
 comments[30] = "Id Pregunta: 3572. ";


//  Id pregunta: 3590 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La capa de adaptaci&oacute;n de ATM se encarga de:";
 choices[31]= new Array();
 choices[31][0] = "Establecer y liberar los circuitos virtuales";
 choices[31][1] = "Segmentar y reenviar los paquetes mayores de una celda";
 choices[31][2] = "Generar y extraer las cabeceras de las celdas";
 choices[31][3] = "Define las caracter&iacute;sticas f&iacute;sicas del medio de transmisi&oacute;n";
 answers[31] = choices[31][1];
 units[31] = "109";
 comments[31] = "Id Pregunta: 3590. ";


//  Id pregunta: 3718 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Los conceptos de arquitecturas de niveles est&aacute;n especificados en la siguiente norma de la ITU-T:";
 choices[32]= new Array();
 choices[32][0] = "X.400";
 choices[32][1] = "I.200";
 choices[32][2] = "X.500";
 choices[32][3] = "X.200";
 answers[32] = choices[32][3];
 units[32] = "113";
 comments[32] = "Id Pregunta: 3718. ";


//  Id pregunta: 3817 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Se&ntilde;ale cu&aacute;l es el mecanismo que utiliza el protocolo IP para gesti&oacute;n de flujo:";
 choices[33]= new Array();
 choices[33][0] = "Frenado brusco con trama de control &quot;rmr&quot;";
 choices[33][1] = "Frenado brusco con trama de control &quot;wack&quot;";
 choices[33][2] = "Ventana de cr&eacute;dito de tama&ntilde;o variable";
 choices[33][3] = "El protocolo IP no realiza control de flujo";
 answers[33] = choices[33][3];
 units[33] = "100";
 comments[33] = "Id Pregunta: 3817. NULL";


//  Id pregunta: 3886 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;Qu&eacute; es Javascript7:";
 choices[34]= new Array();
 choices[34][0] = " Un compilador de Java.";
 choices[34][1] = "Un generador de applets Java";
 choices[34][2] = " Un applet Java que se ejecuta de forma embebida desde un lenguaje de script.";
 choices[34][3] = "Un lenguaje de script basado en la sintaxis de Java.";
 answers[34] = choices[34][3];
 units[34] = "114";
 comments[34] = "Id Pregunta: 3886. Junta Andaluc&iacute;a";


//  Id pregunta: 3899 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Indicar la afirmaci&oacute;n falsa sobre SDH:";
 choices[35]= new Array();
 choices[35][0] = "Permite compatibilidad hacia adelante y hacia atr&aacute;s";
 choices[35][1] = "No permite la incorporaci&oacute;n de otras tecnolog&iacute;as de redes &oacute;pticas y de banda ancha";
 choices[35][2] = "SDH es el est&aacute;ndar europeo, mientras que SONET es el norteamericano";
 choices[35][3] = "Se dise&ntilde;&oacute; para sobrellevar las deficiencias de compatibilidad de los sistemas de transmisi&oacute;n PDH";
 answers[35] = choices[35][1];
 units[35] = "99";
 comments[35] = "Id Pregunta: 3899. ";


//  Id pregunta: 4095 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Qu&eacute; tecnolog&iacute;a es util   para crear interfaces de usuario?";
 choices[36]= new Array();
 choices[36][0] = "JSF";
 choices[36][1] = "AJAX";
 choices[36][2] = "Ambas son utiles para crear interface de usuario";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = choices[36][2];
 units[36] = "116";
 comments[36] = "Id Pregunta: 4095. ";


//  Id pregunta: 4128 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Lenguaje utilizado para describir los servicios web ofrecidos a los usuarios";
 choices[37]= new Array();
 choices[37][0] = "XML";
 choices[37][1] = "Xerces";
 choices[37][2] = "UDDI";
 choices[37][3] = "WSDL";
 answers[37] = choices[37][3];
 units[37] = "112,51";
 comments[37] = "Id Pregunta: 4128. ";


//  Id pregunta: 4152 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Protocolo cliente/servidor que permite la autenticaci&oacute;n y control de acceso de usuarios PPP";
 choices[38]= new Array();
 choices[38][0] = "ACF2";
 choices[38][1] = "RACF";
 choices[38][2] = "RADIUS";
 choices[38][3] = "Kerberos";
 answers[38] = choices[38][2];
 units[38] = "111";
 comments[38] = "Id Pregunta: 4152. NULL";


//  Id pregunta: 4284 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre las estructuras de datos no es correcta?";
 choices[39]= new Array();
 choices[39][0] = "Una estructura de datos es un conjunto de variables de determinado tipo, agrupadas y organizadas para representar un comportamiento";
 choices[39][1] = "En general, la elecci&oacute;n del algoritmo y de las estructuras de datos que manipular&aacute; no tienen mucha relaci&oacute;n (bajo acoplamiento).";
 choices[39][2] = "Con las estructuras de datos se pretende facilitar un esquema l&oacute;gico para manipular los datos en funci&oacute;n del problema a resolver.";
 choices[39][3] = "Las estructuras de datos pueden ser est&aacute;ticas y din&aacute;micas.";
 answers[39] = choices[39][1];
 units[39] = "79";
 comments[39] = "Id Pregunta: 4284. ";


//  Id pregunta: 4368 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Indique cu&aacute;l de las siguientes no es una caracter&iacute;stica de los sistemas cliente-servidor:";
 choices[40]= new Array();
 choices[40][0] = "Compartici&oacute;n de recursos.";
 choices[40][1] = "Existe un &uacute;nico sistema de almacenamiento compartido, donde reside toda la informaci&oacute;n importante del sistema.";
 choices[40][2] = "Concurrencia.";
 choices[40][3] = "Interoperabilidad.";
 answers[40] = choices[40][1];
 units[40] = "50";
 comments[40] = "Id Pregunta: 4368. ";


//  Id pregunta: 4440 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Dentro de Ia tecnolog&iacute;a de Sistemas de Informaci&oacute;n Geogr&aacute;fica, si la realidad se representa mediante figuras elementales geom&eacute;tricas, normalmente cuadradas, que forman un mosaico regular, estamos hablando de:";
 choices[41]= new Array();
 choices[41][0] = "Proyecci&oacute;n.";
 choices[41][1] = "R&aacute;ster.";
 choices[41][2] = "Vector.";
 choices[41][3] = "Imagen multiespectral.";
 answers[41] = choices[41][1];
 units[41] = "67";
 comments[41] = "Id Pregunta: 4440. NULL";


//  Id pregunta: 4469 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[42]= new Array();
 choices[42][0] = "El lugar donde este establecido el prestador de servicios";
 choices[42][1] = "El lugar donde el consumidor tenga su residencia habitual.";
 choices[42][2] = "El lugar donde este establecida la Comisi&oacute;n Nacional de los Mercados y la Compentencia";
 choices[42][3] = "El lugar donde este establecido el Ministerio competente.";
 answers[42] = choices[42][1];
 units[42] = "30";
 comments[42] = "Id Pregunta: 4469. Ley 34/2002, art&iacute;culo 29";


//  Id pregunta: 4660 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es un tipo de contrato administrativo?";
 choices[43]= new Array();
 choices[43][0] = "Obras";
 choices[43][1] = "Gesti&oacute;n de servicios publicos";
 choices[43][2] = "Arrendamiento de locales ";
 choices[43][3] = "Servicios";
 answers[43] = choices[43][2];
 units[43] = "41";
 comments[43] = "Id Pregunta: 4660. ";


//  Id pregunta: 4812 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000,relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular elcomercio electr&oacute;nico en el mercado interior?";
 choices[44]= new Array();
 choices[44][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas";
 choices[44][1] = "Las comunicaciones comerciales";
 choices[44][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios";
 choices[44][3] = "Los contratos por v&iacute;a electr&oacute;nica";
 answers[44] = choices[44][0];
 units[44] = "30";
 comments[44] = "Id Pregunta: 4812. Directiva 2000/31/CE, art&iacute;culo 1.5.d)";


//  Id pregunta: 4911 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de &ldquo;duplicaciones&rdquo; locales o departamentales basadas en subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con el t&eacute;rmino:";
 choices[45]= new Array();
 choices[45][0] = "Data Marts.";
 choices[45][1] = "Metadata.";
 choices[45][2] = "Middleware.";
 choices[45][3] = "Dataware.";
 answers[45] = choices[45][0];
 units[45] = "68";
 comments[45] = "Id Pregunta: 4911. Examen TIC B 2007";


//  Id pregunta: 4948 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  El proceso unificado de desarrollo de software est&aacute; dirigido por &ldquo;casos de uso&rdquo;. Un &ldquo;caso de uso&rdquo; es:";
 choices[46]= new Array();
 choices[46][0] = "Un diagrama que muestra el despliegue de un sistema desde un punto de vista est&aacute;tico.";
 choices[46][1] = "Un fragmento de funcionalidad del sistema, que proporciona al usuario un resultado importante.";
 choices[46][2] = "Un conjunto de objetos y relaciones, incluyendo los mensajes que pueden enviarse entre ellos.";
 choices[46][3] = "Un diagrama que muestra el flujo de actividad a actividad.";
 answers[46] = choices[46][1];
 units[46] = "76";
 comments[46] = "Id Pregunta: 4948. Examen TIC B 2007";


//  Id pregunta: 4987 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  De acuerdo con el modelo de arquitectura de seguridad de OSI, definido en la norma ISO/IEC 7498-2, indique cu&aacute;lde las siguientes afirmaciones es correcta:";
 choices[47]= new Array();
 choices[47][0] = "Un mecanismo de seguridad puede ser suministrado por varios servicios de seguridad";
 choices[47][1] = "Cada servicio de seguridad debe ser suministrado por el mecanismo correspondiente";
 choices[47][2] = "Todos los mecanismos de seguridad que se definen en el modelo se basan en algoritmos criptogr&aacute;ficos";
 choices[47][3] = "Un mismo servicio de seguridad puede ser suministrado por varios mecanismos de seguridad";
 answers[47] = choices[47][3];
 units[47] = "74";
 comments[47] = "Id Pregunta: 4987. Examen TIC A 2007";


//  Id pregunta: 5008 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Indique cu&aacute;l de las siguientes afirmaciones sobre JDBC es incorrecta:";
 choices[48]= new Array();
 choices[48][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[48][1] = "Es independiente del sistema operativo";
 choices[48][2] = "Es independiente de la base de datos";
 choices[48][3] = "Es un tipo de API";
 answers[48] = choices[48][0];
 units[48] = "58";
 comments[48] = "Id Pregunta: 5008. Examen TIC A 2007";


//  Id pregunta: 5088 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Un servicio de directorio electr&oacute;nico NO se caracteriza por ";
 choices[49]= new Array();
 choices[49][0] = "ser flexible";
 choices[49][1] = "Aceptar cierta inconsistencia temporal de la informaci&oacute;n en su replicaci&oacute;n";
 choices[49][2] = "Ser est&aacute;tico";
 choices[49][3] = "Poder ser consultado y actualizado en l&iacute;nea";
 answers[49] = choices[49][2];
 units[49] = "73";
 comments[49] = "Id Pregunta: 5088. ";


//  Id pregunta: 5118 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;C&oacute;mo se denomina cada de una de las particiones l&oacute;gicas de una Storage Area Network?";
 choices[50]= new Array();
 choices[50][0] = "LUN";
 choices[50][1] = "HBA";
 choices[50][2] = "Cluster";
 choices[50][3] = "Uscsi";
 answers[50] = choices[50][0];
 units[50] = "48";
 comments[50] = "Id Pregunta: 5118. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5128 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es el modelo conceptual m&aacute;s extendido para los almacenes de datos?";
 choices[51]= new Array();
 choices[51][0] = "Relacional.";
 choices[51][1] = "Multidimensional.";
 choices[51][2] = "Espacial.";
 choices[51][3] = "Temporal.";
 answers[51] = choices[51][1];
 units[51] = "68";
 comments[51] = "Id Pregunta: 5128. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5254 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indique cu&aacute;l de las siguientes opciones describe el nivel 2 del modelo CMM";
 choices[52]= new Array();
 choices[52][0] = "No se han definido procesos metodol&oacute;gicos, o si se han definido no se siguen";
 choices[52][1] = "El proceso de software est&aacute; documentado, homogeneizado e integrado en un proceso de software est&aacute;ndar dentro de la organizaci&oacute;n";
 choices[52][2] = "Se establecen pol&iacute;ticas y procedimientos de administraci&oacute;n e implantaci&oacute;n del modelo b&aacute;sico para determinar costos, calendarios y funcionalidades";
 choices[52][3] = "Se recolectan medidas detalladas del proceso de software y de la calidad del producto Ambos son cuantitativamente entendidos y controlados.";
 answers[52] = choices[52][2];
 units[52] = "87";
 comments[52] = "Id Pregunta: 5254. NULL";


//  Id pregunta: 5472 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Cual de las siguientes tecnolog&iacute;as no sirve para la implementaci&oacute;n de redes privadas virtuales";
 choices[53]= new Array();
 choices[53][0] = "SSH";
 choices[53][1] = "SLIP";
 choices[53][2] = "IPSEC";
 choices[53][3] = "SSL/TLS";
 answers[53] = choices[53][1];
 units[53] = "102";
 comments[53] = "Id Pregunta: 5472. Castilla y Le&oacute;n";


//  Id pregunta: 5524 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Indicar la respuesta falsa";
 choices[54]= new Array();
 choices[54][0] = "BMP es un formato de im&aacute;genes sin p&eacute;rdidas que no soporta animaciones ni fondos transparentes";
 choices[54][1] = "GIF es un formato de im&aacute;genes que utiliza el algoritmo de compresi&oacute;n LZW y es v&aacute;lido para animaciones y fondos transparente";
 choices[54][2] = "El formato JPEG sin p&eacute;rdidas permite multip&aacute;gina y es muy adecuado para conservar originales a alta resoluci&oacute;n";
 choices[54][3] = "PNG es un formato sin p&eacute;rdida recomendado por el W3C para la publicaci&oacute;n en web";
 answers[54] = choices[54][2];
 units[54] = "93";
 comments[54] = "Id Pregunta: 5524. NULL";


//  Id pregunta: 5639 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es err&oacute;nea:";
 choices[55]= new Array();
 choices[55][0] = "Un microcomputador dispone de una CPU basada en un &uacute;nico microprocesador (chip)";
 choices[55][1] = "Un computador &oacute;ptico se basa en las propiedades de la luz para el tratamiento de la informaci&oacute;n";
 choices[55][2] = "Un computador empotrado es un computador de prop&oacute;sito especial, dise&ntilde;ado para llevar a cabo una funci&oacute;n dedicada concreta";
 choices[55][3] = "Un nanocomputador se basa en tecnolog&iacute;a de silicio/semiconductores";
 answers[55] = choices[55][3];
 units[55] = "49";
 comments[55] = "Id Pregunta: 5639. ";


//  Id pregunta: 5731 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes no es un tipo de workflow?";
 choices[56]= new Array();
 choices[56][0] = "Workflow de administraci&oacute;n";
 choices[56][1] = "Workflow de colaboraci&oacute;n";
 choices[56][2] = "Workflow de coordinaci&oacute;n";
 choices[56][3] = "Workflow de producci&oacute;n";
 answers[56] = choices[56][2];
 units[56] = "71";
 comments[56] = "Id Pregunta: 5731. ";


//  Id pregunta: 5850 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  En el modelo Early Design de COCOMO II, el valor PM nominal se ajusta utilizando";
 choices[57]= new Array();
 choices[57][0] = "5 factores de escala";
 choices[57][1] = "7 factores de coste";
 choices[57][2] = "17 factores de coste";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = choices[57][1];
 units[57] = "89";
 comments[57] = "Id Pregunta: 5850. NULL";


//  Id pregunta: 6005 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  El est&aacute;ndar WSDL:";
 choices[58]= new Array();
 choices[58][0] = "Es el protocolo para efectuar llamadas a m&eacute;todos de objetos remotos mediante peticiones XML.";
 choices[58][1] = "Describe la interfaz de servicio";
 choices[58][2] = "Es el registro p&uacute;blico de servicios.";
 choices[58][3] = "Es el protocolo de transporte.";
 answers[58] = choices[58][1];
 units[58] = "69";
 comments[58] = "Id Pregunta: 6005. TIC A 2009";


//  Id pregunta: 6043 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  El proyecto Fidelity, de gesti&oacute;n de identidad federado en &aacute;mbito europeo, est&aacute; basado en est&aacute;ndares de:";
 choices[59]= new Array();
 choices[59][0] = "W3C";
 choices[59][1] = "IEEE";
 choices[59][2] = "CEN";
 choices[59][3] = "Liberty Alliance";
 answers[59] = choices[59][3];
 units[59] = "118";
 comments[59] = "Id Pregunta: 6043. ";


//  Id pregunta: 6091 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En relaci&oacute;n con las metodolog&iacute;as ligeras de desarrollo de software, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[60]= new Array();
 choices[60][0] = "Seg&uacute;n el Manifiesto &Aacute;gil, las personas y su interacci&oacute;n deben prevalecer sobre una aplicaci&oacute;n estricta de los procesos y las herramientas.";
 choices[60][1] = "Seg&uacute;n el Manifiesto &Aacute;gil, el seguimiento del plan debe prevalecer sobre la respuesta al cambio.";
 choices[60][2] = "La versi&oacute;n 3 de M&Eacute;TRICA, que soporta tanto desarrollos estructurados como orientados a objetos, es un claro ejemplo de metodolog&iacute;a ligera.";
 choices[60][3] = "La metodolog&iacute;a RUP-Proceso Unificado de Rational es una metodolog&iacute;a ligera.";
 answers[60] = choices[60][0];
 units[60] = "79";
 comments[60] = "Id Pregunta: 6091. TIC A 2009";


//  Id pregunta: 6179 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Una ventaja del procesado de documentos XML usando SAX (frente a DOM) es:";
 choices[61]= new Array();
 choices[61][0] = "Es posible la modificaci&oacute;n de los datos en memoria.";
 choices[61][1] = "Procesa el documento completo.";
 choices[61][2] = "En el procesado de documentos grandes consume menos memoria.";
 choices[61][3] = "Todas las anteriores son ventajas de SAX frente a DOM.";
 answers[61] = choices[61][2];
 units[61] = "69";
 comments[61] = "Id Pregunta: 6179. NULL";


//  Id pregunta: 6369 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;A qui&eacute;n corresponde, de acuerdo al Esquema Nacional de Seguridad, elaborar las Gu&iacute;as de Seguridad?";
 choices[62]= new Array();
 choices[62][0] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n (SETSI)";
 choices[62][1] = "Al Instituto Nacional de Tecnolog&iacute;as de la Comunicaci&oacute;n (INTECO)";
 choices[62][2] = "Al Instituto Nacional de Administraci&oacute;n P&uacute;blica (INAP)";
 choices[62][3] = "Al Centro Criptol&oacute;gico Nacional (CCN)";
 answers[62] = choices[62][3];
 units[62] = "43";
 comments[62] = "Id Pregunta: 6369. Art&iacute;culo 29 ENS. Serie de gu&iacute;as CCN-STIC 800.";


//  Id pregunta: 6435 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Las entidades d&eacute;biles se representan en E/R mediante:";
 choices[63]= new Array();
 choices[63][0] = "No hay entidades d&eacute;biles en el modelo E/R.";
 choices[63][1] = "Se representan mediante doble caja.";
 choices[63][2] = "Se representan con un tri&aacute;ngulo.";
 choices[63][3] = "Se representan como dos c&iacute;rculos conc&eacute;ntricos.";
 answers[63] = choices[63][1];
 units[63] = "80";
 comments[63] = "Id Pregunta: 6435. NULL";


//  Id pregunta: 6460 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Respecto a los contratos celebrados por v&iacute;a electr&oacute;nica &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[64]= new Array();
 choices[64][0] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos";
 choices[64][1] = "Las partes podr&aacute;n pactar que un tercero archive las declaraciones de voluntad que integran los contratos electr&oacute;nicos por un per&iacute;odo inferior a tres a&ntilde;os";
 choices[64][2] = "Siempre que la Ley exija que el contrato o cualquier informaci&oacute;n relacionada con el mismo conste por escrito esta deber&aacute; enviarse por correo ordinario al contratante";
 choices[64][3] = "El soporte electr&oacute;nico en que conste un contrato celebrado por v&iacute;a electr&oacute;nica ser&aacute; admisible en juicio como prueba documental";
 answers[64] = choices[64][3];
 units[64] = "30";
 comments[64] = "Id Pregunta: 6460. Castilla La Mancha 2009 (Ley 34/2002, art&iacute;culo 24)";


//  Id pregunta: 6474 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las plataformas desarrolladas por Java es una plataforma para crear aplicaciones servidor?";
 choices[65]= new Array();
 choices[65][0] = "Plataforma Java Technique Edition (JTE)";
 choices[65][1] = "Plataforma Java  Enterprise Edition (JEE)";
 choices[65][2] = "Plataforma Java Standard Edition (JSE)";
 choices[65][3] = "Plataforma Java Micro Edition (JME)";
 answers[65] = choices[65][1];
 units[65] = "116";
 comments[65] = "Id Pregunta: 6474. Castilla La Mancha 2009";


//  Id pregunta: 6633 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  El modelo de McCall de calidad de software define:";
 choices[66]= new Array();
 choices[66][0] = "Caracter&iacute;sticas del proyecto y del producto generado";
 choices[66][1] = "Caracter&iacute;sticas operacionales, de modificaci&oacute;n y de transici&oacute;n o conversi&oacute;n";
 choices[66][2] = "Caracter&iacute;sticas de an&aacute;lisis, desarrollo y pruebas";
 choices[66][3] = "Caracter&iacute;sticas de accesibilidad y rendimiento";
 answers[66] = choices[66][1];
 units[66] = "88";
 comments[66] = "Id Pregunta: 6633. NULL";


//  Id pregunta: 7178 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  En un esquema de certificaci&oacute;n y seguridad basado en clave p&uacute;blica (PKI), la 'tercera parte confiable' se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Autoridad de Certificaci&oacute;n";
 choices[67][1] = "Autoridad de Registro";
 choices[67][2] = "Centro de Confianza";
 choices[67][3] = "Autoridad de Revocaci&oacute;n";
 answers[67] = choices[67][0];
 units[67] = "74";
 comments[67] = "Id Pregunta: 7178. Examen TIC B 2009";


//  Id pregunta: 7244 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Cu&aacute;les de las siguientes afirmaciones es INCORRECTA sobre la fibra &oacute;ptica:";
 choices[68]= new Array();
 choices[68][0] = "No es posible acceder a los datos transmitidos por m&eacute;todos no destructivos";
 choices[68][1] = "Puede transmitir electricidad para alimentar repetidores intermedios";
 choices[68][2] = "Es inmune a las interferencias electromagn&eacute;ticas";
 choices[68][3] = "Las fibras son fr&aacute;giles y sus empalmes son dif&iacute;ciles";
 answers[68] = choices[68][1];
 units[68] = "99";
 comments[68] = "Id Pregunta: 7244. Examen TIC B 2009";


//  Id pregunta: 7253 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  El protocolo UDP:";
 choices[69]= new Array();
 choices[69][0] = "Es orientado a conexi&oacute;n";
 choices[69][1] = "Genera un flujo unidireccional";
 choices[69][2] = "Realiza el control de redundancia c&iacute;clica (CRC) de los datos";
 choices[69][3] = "Emplea, al comenzar una comunicaci&oacute;n, el mecanismo denominado Three-Weay Hand Shaking";
 answers[69] = choices[69][1];
 units[69] = "100";
 comments[69] = "Id Pregunta: 7253. Examen TIC B 2009";


//  Id pregunta: 7796 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)   El est&aacute;ndar DMI:";
 choices[70]= new Array();
 choices[70][0] = " Permite la monitorizaci&oacute;n de determinadas funciones del PC.";
 choices[70][1] = " Permite el control de las diferentes funciones de ahorro de energ&iacute;a de un PC.";
 choices[70][2] = " Es un est&aacute;ndar de gesti&oacute;n de energ&iacute;a desarrollado por Intel, Microsoft y Toshiba.";
 choices[70][3] = " Es una norma dirigida a dispositivos de alta velocidad.";
 answers[70] = choices[70][0];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7796. Map 2005";


//  Id pregunta: 7815 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)   &iquest;Cu&aacute;l de las siguientes normas se ha tenido en cuenta como referencia en M&Eacute;TRICA versi&oacute;n 3?";
 choices[71]= new Array();
 choices[71][0] = " ISO/IEC TR 16.502/SPICE.";
 choices[71][1] = " ISO 12.207.";
 choices[71][2] = " IEEE 600.11990.";
 choices[71][3] = " UNE-EN-ISO 9001:2000.";
 answers[71] = choices[71][1];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 7815. Map 2005";


//  Id pregunta: 7921 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)   El protocolo DHCP (Dynamic Host Configuration Protocol) es una mejora o actualizaci&oacute;n de uno de los siguientes protocolos:";
 choices[72]= new Array();
 choices[72][0] = " ARP (Address Resolution Protocol).";
 choices[72][1] = " RARP (Reverse Address Resolution Protocol).";
 choices[72][2] = " BOOTP (Bootstrap Protocol).";
 choices[72][3] = " IGMP (Internet Group Management Protocol).";
 answers[72] = choices[72][2];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7921. Map 2006";


//  Id pregunta: 7930 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)   &iquest;Cu&aacute;l de las siguientes respuestas NO corresponde al modelo de compresi&oacute;n de im&aacute;genes JPEG (Joint Photographic Experts Group)?";
 choices[73]= new Array();
 choices[73][0] = " B&aacute;sico/secuencial.";
 choices[73][1] = " Jer&aacute;rquico.";
 choices[73][2] = " Progresivo.";
 choices[73][3] = " Conjugado modificado.";
 answers[73] = choices[73][3];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 7930. Map 2006";


//  Id pregunta: 7936 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)   En un sistema experto tipo MYCIN, &iquest;c&oacute;mo se realiza el tratamiento de la incertidumbre?";
 choices[74]= new Array();
 choices[74][0] = " Mediante un modelo de inferencia bayesiana.";
 choices[74][1] = " Mediante conjuntos borrosos, utilizando la teor&iacute;a de Zadeh.";
 choices[74][2] = " Mediante factores de incertidumbre, utilizando la teor&iacute;a de Dempster-Shafer.";
 choices[74][3] = " No hay tratamiento de la incertidumbre.";
 answers[74] = choices[74][2];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7936. Map 2006";


//  Id pregunta: 8147 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)   &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as es usada espec&iacute;ficamente por el CRM de tipo anal&iacute;tico?";
 choices[75]= new Array();
 choices[75][0] = " Software de gesti&oacute;n de incidencias.";
 choices[75][1] = " Software de gesti&oacute;n de correo electr&oacute;nico entrante y saliente.";
 choices[75][2] = " Datawarehouse.";
 choices[75][3] = " Call-center: software de visi&oacute;n unificada de clientes.";
 answers[75] = choices[75][2];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 8147. Map 2008";


//  Id pregunta: 8246 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Para garantizar la protecci&oacute;n sanitaria frente a las ondas electromagn&eacute;ticas de telefon&iacute;a m&oacute;vil, los operadores de telefon&iacute;a m&oacute;vil deben:";
 choices[76]= new Array();
 choices[76][0] = "Situar las estaciones base fuera de las ciudades, de tal forma que al estar m&aacute;s alejadas, la potencia que reciban las personas debida a una comunicaci&oacute;n por telefon&iacute;a m&oacute;vil sea menor.";
 choices[76][1] = "Instalar las estaciones base de manera que el diagrama de emisi&oacute;n no incida sobre el propio edificio, terraza o &aacute;tico, si se instalan en una azotea.";
 choices[76][2] = "Fijar la potencia con la que emiten las estaciones base para que sea 1/4 de la SAR (Tasa de absorci&oacute;n espec&iacute;fica) de un tel&eacute;fono m&oacute;vil.";
 choices[76][3] = "Instalar las estaciones base en cualquier sitio, ya que la telefon&iacute;a m&oacute;vil emite ondas ionizantes que no afectan a la salud.";
 answers[76] = choices[76][1];
 units[76] = "108";
 comments[76] = "Id Pregunta: 8246. Examen TIC A1 2010";


//  Id pregunta: 8328 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  La tecnologia IDSL (ISDN Digital Subscriber Line):";
 choices[77]= new Array();
 choices[77][0] = "Se utiliza para transportar voz y datos";
 choices[77][1] = "Es asim&eacute;trica";
 choices[77][2] = "Utiliza 3 pares de hilos";
 choices[77][3] = "Alcanza una distancia m&aacute;xima de 5,5 Km.";
 answers[77] = choices[77][3];
 units[77] = "109";
 comments[77] = "Id Pregunta: 8328. Analista Ayto. Madrid 2010";


//  Id pregunta: 8455 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  En los GIS, el sistema UTM:";
 choices[78]= new Array();
 choices[78][0] = "Asocia cada elemento a una clave de zona.";
 choices[78][1] = "Proyecta el globo terr&aacute;queo sobre un cilindro.";
 choices[78][2] = "Es un est&aacute;ndar universal para intercambio de datos geogr&aacute;ficos.";
 choices[78][3] = "Ninguna de las anteriores.";
 answers[78] = choices[78][1];
 units[78] = "67";
 comments[78] = "Id Pregunta: 8455. Analista Ayto. Madrid 2010";


//  Id pregunta: 8602 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes es el lenguaje est&aacute;ndar propuesto para la descripci&oacute;n de servicios web bajo protocolo SOAP? ";
 choices[79]= new Array();
 choices[79][0] = "WSDL";
 choices[79][1] = "UDDI";
 choices[79][2] = "XML";
 choices[79][3] = "REST";
 answers[79] = choices[79][0];
 units[79] = "51";
 comments[79] = "Id Pregunta: 8602. Examen TIC A2 2010 interna";


//  Id pregunta: 8645 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  Indique cu&aacute;l es la respuesta correcta con respecto a los diagramas PERT:";
 choices[80]= new Array();
 choices[80][0] = "Los arcos del grafo representan los sucesos, y los v&eacute;rtices las actividades.";
 choices[80][1] = "En la matriz de encadenamientos aquellas columnas en las que no aparece ninguna X indican las actividades que no tienen ninguna actividad siguiente, es decir, aquellas actividades cuyo suceso final coincide con el suceso fin del proyecto.";
 choices[80][2] = "El cuadro de prelaciones est&eacute; formado por tres columnas En la primera columna est&aacute;n representadas todas las actividades en que se ha descompuesto el proyecto. En la segunda columna figuran las actividades precedentes de su hom&oacute;loga en la primera columna y en la &uacute;ltima columna se muestran las actividades posteriores.";
 choices[80][3] = "La matriz de encadenamientos consiste en una matriz cuadrada cuya dimensi&oacute;n es igual al n&uacute;mero de sucesos en que se ha descompuesto el proyecto.";
 answers[80] = choices[80][1];
 units[80] = "28";
 comments[80] = "Id Pregunta: 8645. Examen TIC A2 2010 interna";


//  Id pregunta: 8758 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  En un Sistema Operativo, una planificaci&oacute;n de procesos se denomina &quot;preemptive&quot;:";
 choices[81]= new Array();
 choices[81][0] = "Cuando un proceso no se puede desalojar de la CPU";
 choices[81][1] = "No existe tal denominaci&oacute;n.";
 choices[81][2] = "La prevenci&oacute;n de ejecutar procesos que consuman muchos recursos por el Sistema operativo";
 choices[81][3] = "Cuando un proceso se puedo desalojar de la CPU";
 answers[81] = choices[81][3];
 units[81] = "52";
 comments[81] = "Id Pregunta: 8758. Examen TIC A2 2010 interna";


//  Id pregunta: 8775 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes comandos se utilizan para crear un cd boot de una instalaci&oacute;n de Linux?";
 choices[82]= new Array();
 choices[82][0] = "mkboot disk.";
 choices[82][1] = "bootfp disk.";
 choices[82][2] = "ww and rawrite.";
 choices[82][3] = "dd and rawrite.";
 answers[82] = choices[82][3];
 units[82] = "53";
 comments[82] = "Id Pregunta: 8775. Examen UPM A2 2011";


//  Id pregunta: 9143 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l es la respuesta incorrecta respecto a los interfaces de disco duro?";
 choices[83]= new Array();
 choices[83][0] = "SAS (Serial Attached SCSI) es una interfaz de transferencia de datos en serie, sucesora del SCSI paralelo.";
 choices[83][1] = "Proporciona una arquitectura punto a punto m&aacute;s simple y robusta que su antecesora paralela.";
 choices[83][2] = "Una de sus principales caracter&iacute;sticas es el aumento de la velocidad de transferencia al aumentar el n&uacute;mero de dispositivos conectados";
 choices[83][3] = "Todas son correctas.";
 answers[83] = choices[83][3];
 units[83] = "47";
 comments[83] = "Id Pregunta: 9143. ";


//  Id pregunta: 9204 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  En el lenguaje ODRL, &iquest;c&oacute;mo se identifica de forma &uacute;nica el contenido digital a proteger?";
 choices[84]= new Array();
 choices[84][0] = "Mediante el elemento Assets.";
 choices[84][1] = "Mendiate el elemento Permission.";
 choices[84][2] = "Mendiante el elemento Constraints.";
 choices[84][3] = "Todas son falsas.";
 answers[84] = choices[84][0];
 units[84] = "37";
 comments[84] = "Id Pregunta: 9204. ";


//  Id pregunta: 9370 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  En una red metropolitana Ethernet basada en MPLS";
 choices[85]= new Array();
 choices[85][0] = "En la red del operador se transportan tramas de Ethernet sobre MPLS";
 choices[85][1] = "Las tramas de Ethernet se transportan sobre MPLS y en la red del operador se vuelve a utilizar Ethernet como tecnolog&iacute;a para el transporte de MPLS.";
 choices[85][2] = "En la salida de las diferentes redes de &aacute;rea local que componen la red metropolitana, se a&ntilde;ade una cabecera IP sobre la que se aplican las etiquetas MPLS.";
 choices[85][3] = "Ninguna de las respuestas es correcta.";
 answers[85] = choices[85][1];
 units[85] = "101";
 comments[85] = "Id Pregunta: 9370. ";


//  Id pregunta: 9790 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l es el objetivo principal perseguido por un keylogger?";
 choices[86]= new Array();
 choices[86][0] = "&quot;Intercepci&oacute;n&quot; y captura de datos.";
 choices[86][1] = "Suplantaci&oacute;n de identidad. ";
 choices[86][2] = "Denegaci&oacute;n de servicio.";
 choices[86][3] = "Manipulaci&oacute;n de un recurso. ";
 answers[86] = choices[86][0];
 units[86] = "111";
 comments[86] = "Id Pregunta: 9790. Examen TIC A2 2013";


//  Id pregunta: 9922 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Sean dos transacciones (T1 y T2), T1 con estampa de tiempo igual a 8 y T2 con estampa de tiempo igual a 10 (T1 es m&aacute;s antiguo que T2). Suponiendo que T2 tiene un bloqueo en un elemento y T1 pide bloqueo para ese mismo elemento, si aplicamos el enfoque WOUND-WAIT para resoluci&oacute;n del conflicto:";
 choices[87]= new Array();
 choices[87][0] = "T1 esperar&aacute; hasta que T2 se completa y libera su bloqueo.";
 choices[87][1] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se aborta y se reinicia usando la misma estampa de tiempo.";
 choices[87][2] = "T1 se reinicia con la misma estampa de tiempo y T2 se reprograma usando la misma estampa de tiempo.";
 choices[87][3] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se reinicia usando distinta estampa de tiempo.";
 answers[87] = choices[87][1];
 units[87] = "57";
 comments[87] = "Id Pregunta: 9922. TIC A2, Examen 2013";


//  Id pregunta: 10156 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Seg&uacute;n la  Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[88]= new Array();
 choices[88][0] = "En el acceso a la Plataforma de intermediaci&oacute;n de datos del Ministerio de Hacienda y Administraciones P&uacute;blicas se utilizar&aacute; la Red SARA";
 choices[88][1] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas garantizar&aacute; interoperabilidad, disponibilidad, fiabilidad y seguridad";
 choices[88][2] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas almacenar&aacute; el contenido del intercambio para garantizar la trazabilidad";
 choices[88][3] = "El Cedente podr&aacute; auditar la cesi&oacute;n de datos para comprobar el cumplimiento de los requisitos a que pudiera &eacute;sta estar sujeta";
 answers[88] = choices[88][2];
 units[88] = "43";
 comments[88] = "Id Pregunta: 10156. ";


//  Id pregunta: 10250 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Recibe muchas modificaciones y Juan decide incorporarlas a una nueva versi&oacute;n de su software. Finalmente, Juan decide hacer una versi&oacute;n propietaria de su software, y declara:I) Como el c&oacute;digo fuente original eral GPL, todos los que han hecho mejoras autom&aacute;ticamente asignan el copyright de esas mejoras a Juan, por lo que no necesita solicitar autorizaci&oacute;n para licenciar el c&oacute;digo de otra formaII) Como Juan tiene el copyright, puede licenciar el c&oacute;digo de forma retroactiva, por lo que nadie puede distribuir versiones anteriores bajo GPL";
 choices[89]= new Array();
 choices[89][0] = "I) y II) son verdaderas";
 choices[89][1] = "I) es verdadera, II) es falsa";
 choices[89][2] = "I es falsa, II) es verdadera";
 choices[89][3] = "I) y II) son falsas";
 answers[89] = choices[89][3];
 units[89] = "61";
 comments[89] = "Id Pregunta: 10250. ";


//  Id pregunta: 10596 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Un plan de emergencia es un plan por el que...";
 choices[90]= new Array();
 choices[90][0] = "&hellip; se realiza una nueva puesta en marcha del negocio tras un incidente.";
 choices[90][1] = "&hellip; disminuye el riesgo de aparici&oacute;n de incidentes menores.";
 choices[90][2] = "&hellip; se fuerza la indisponibilidad de los recursos cr&iacute;ticos de informaci&oacute;n.";
 choices[90][3] = "&hellip; se prepara el entorno de continuidad en condiciones precarias.";
 answers[90] = choices[90][3];
 units[90] = "32";
 comments[90] = "Id Pregunta: 10596. ";


//  Id pregunta: 10668 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; tipo de m&eacute;todo de acceso al medio es aquel en el que todos los nodos compiten por el uso del medio?";
 choices[91]= new Array();
 choices[91][0] = "Por contienda.";
 choices[91][1] = "Por contenci&oacute;n.";
 choices[91][2] = "Por paso de testigo.";
 choices[91][3] = "Por detecci&oacute;n de portadora.";
 answers[91] = choices[91][1];
 units[91] = "101";
 comments[91] = "Id Pregunta: 10668. ";


//  Id pregunta: 10682 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la Ley 39/2015 cual de las siguientes opciones no se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[92]= new Array();
 choices[92][0] = "A ser tratados con respeto y deferencia por las autoridades y empleados p&uacute;blicos, que habr&aacute;n de facilitarles el ejercicio de sus derechos y el cumplimiento de sus obligaciones.";
 choices[92][1] = "A la obtenci&oacute;n y utilizaci&oacute;n de los medios de identificaci&oacute;n y firma electr&oacute;nica contemplados en esta Ley.";
 choices[92][2] = "A la protecci&oacute;n de datos de car&aacute;cter personal, y en particular a la seguridad y confidencialidad de los datos que figuren en los ficheros, sistemas y aplicaciones de las Administraciones P&uacute;blicas.";
 choices[92][3] = "Archivo y registro del expediente asociado con todo procedimiento administrativo.";
 answers[92] = choices[92][3];
 units[92] = "30";
 comments[92] = "Id Pregunta: 10682. ";


//  Id pregunta: 10717 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qu&eacute; aspecto no es necesario incluir en una pol&iacute;tica de firma basada en certificados seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[93]= new Array();
 choices[93][0] = "Definici&oacute;n del alcance y &aacute;mbito de aplicaci&oacute;n.";
 choices[93][1] = "Datos para la identificaci&oacute;n del documento y del responsable de su gesti&oacute;n.";
 choices[93][2] = "Reglas de confianza, que incluir&aacute;n los requisitos establecidos para certificados, sellos de tiempo y firmas longevas.";
 choices[93][3] = "Todas las anteriores se deben incluir.";
 answers[93] = choices[93][3];
 units[93] = "43";
 comments[93] = "Id Pregunta: 10717. ";


//  Id pregunta: 10785 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  La velocidad del USB 3.0 es:";
 choices[94]= new Array();
 choices[94][0] = "15 veces superior a la del USB 2.0.";
 choices[94][1] = "Similar a la del USB 2.0.";
 choices[94][2] = "10 veces superior a la del USB 2.0.";
 choices[94][3] = "480 Mbps.";
 answers[94] = choices[94][2];
 units[94] = "46";
 comments[94] = "Id Pregunta: 10785. Examen GSI 2014";


//  Id pregunta: 10892 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l es el tipo de la direcci&oacute;n IPv6 ::1/128?";
 choices[95]= new Array();
 choices[95][0] = "Loopback.";
 choices[95][1] = "Indefinida (Unspecified).";
 choices[95][2] = "Multicast.";
 choices[95][3] = "No es v&aacute;lida.";
 answers[95] = choices[95][0];
 units[95] = "100";
 comments[95] = "Id Pregunta: 10892. Examen GSI 2014";


//  Id pregunta: 11247 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En lo Referente a la publicidad de los procedimientos de licitaci&oacute;n de &aacute;mbito estatal, es falso que:";
 choices[96]= new Array();
 choices[96][0] = "En el caso de los procedimientos negociados con publicidad, la publicaci&oacute;n en el perfil del contratante podr&aacute; sustituir a la del BOE.";
 choices[96][1] = "Los contratos no SARA se publican en el BOE y en el Perfil del Contratante.";
 choices[96][2] = "Los contratos SARA se publican en el DOUE, en lugar del BOE, y en el Perfil del Contratante.";
 choices[96][3] = "Ninguna es correcta.";
 answers[96] = choices[96][2];
 units[96] = "41";
 comments[96] = "Id Pregunta: 11247. ";


//  Id pregunta: 11329 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En relaci&oacute;n con la plataforma Cl@ve, indique la opci&oacute;n falsa";
 choices[97]= new Array();
 choices[97][0] = "Se desarrolla al hilo de una medida del informe CORA";
 choices[97][1] = "Est&aacute; bajo la titularidad de la DTIC";
 choices[97][2] = "La orden que lo aprueba (MINHAP/1838/2014) se publica seg&uacute;n lo establecido en el art&iacute;culo 11 del RD 1671/2009";
 choices[97][3] = "Plataforma com&uacute;n del sector p&uacute;blico estatal para identificar, autenticar y firmar electr&oacute;nicamente, mediante el uso de claves concertadas";
 answers[97] = choices[97][2];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11329. ";


//  Id pregunta: 11680 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale la falsa con respecto al usuario root del sistema operativo UNIX:";
 choices[98]= new Array();
 choices[98][0] = "Su UID es el 0.";
 choices[98][1] = "Recibe el nombre de superusuario.";
 choices[98][2] = "Puede eliminarse por medio del comando rmuser, con los permisos adecuados.";
 choices[98][3] = "Puede fijar prioridades a los procesos.";
 answers[98] = choices[98][2];
 units[98] = "53, 54";
 comments[98] = "Id Pregunta: 11680. ";


//  Id pregunta: 11713 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes elementos es utilizado en las listas de acceso IP est&aacute;ndar como base para permitir o denegar paquetes?";
 choices[99]= new Array();
 choices[99][0] = "Direccion destino IP";
 choices[99][1] = "Direccion origen IP";
 choices[99][2] = "Protocolo";
 choices[99][3] = "Puerto";
 answers[99] = choices[99][1];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11713. NULL";


