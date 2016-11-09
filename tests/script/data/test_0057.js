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

//  Id pregunta: 346 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  La t&eacute;cnica de direcci&oacute;n en la etapa de madurez es:";
 choices[0]= new Array();
 choices[0][0] = "Orientada a ventas";
 choices[0][1] = "Informal";
 choices[0][2] = "Orientada a los recursos";
 choices[0][3] = "Orientada al control";
 answers[0] = choices[0][2];
 units[0] = "22";
 comments[0] = "Id Pregunta: 346. ";


//  Id pregunta: 419 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Se entiende por disponibilidad de la informaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "La informaci&oacute;n utilizada ser&aacute; la &uacute;ltima, exacta, autorizada y completa";
 choices[1][1] = "Que cada persona acceder&aacute; &uacute;nicamente a la que le corresponda";
 choices[1][2] = "El sistema estar&aacute; operativo en todo momento";
 choices[1][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[1] = choices[1][2];
 units[1] = "33";
 comments[1] = "Id Pregunta: 419. ";


//  Id pregunta: 549 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Las metodolog&iacute;as desarrolladas y utilizadas en la auditoria y el control inform&aacute;ticos se pueden agrupar en las siguientes familias:";
 choices[2]= new Array();
 choices[2][0] = "Internas, externas y mixtas";
 choices[2][1] = "De datos y de aplicaciones";
 choices[2][2] = "Cuantitativas y cualitativas";
 choices[2][3] = "Basadas en modelos, formales y mixtas";
 answers[2] = choices[2][2];
 units[2] = "31, 32, 33";
 comments[2] = "Id Pregunta: 549. ";


//  Id pregunta: 660 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Se&ntilde;ale cual de las siguientes normas se debe tener en cuenta en el Area de Seguridad de una organizaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "ISO 27002";
 choices[3][1] = "ISO 14508 sobre perfiles de protecci&oacute;n";
 choices[3][2] = "ISO 14848";
 choices[3][3] = "UNE-ISO 17799";
 answers[3] = choices[3][0];
 units[3] = "42";
 comments[3] = "Id Pregunta: 660. ";


//  Id pregunta: 931 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; es un applet de Java?:";
 choices[4]= new Array();
 choices[4][0] = "Una aplicaci&oacute;n escrita en Java";
 choices[4][1] = "Un control ActiveX";
 choices[4][2] = "Un programa de Java incrustado en una p&aacute;gina HTML";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][2];
 units[4] = "60";
 comments[4] = "Id Pregunta: 931. Se especifica en la pregunta que sea de Java, porque Flash tambi&eacute;n es un applet";


//  Id pregunta: 1121 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En los discos &oacute;pticos (CD-ROM, WROM etc) la densidad de grabaci&oacute;n es:";
 choices[5]= new Array();
 choices[5][0] = "Constante";
 choices[5][1] = "Variable, dependiendo de la distancia al centro";
 choices[5][2] = "Depende del tipo";
 choices[5][3] = "Igual que en los discos magn&eacute;ticos";
 answers[5] = choices[5][0];
 units[5] = "48";
 comments[5] = "Id Pregunta: 1121. ";


//  Id pregunta: 1252 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Las actividades clave del data warehousing son:";
 choices[6]= new Array();
 choices[6][0] = "Recepci&oacute;n, almacenamiento, proceso y presentaci&oacute;n.";
 choices[6][1] = "Extracci&oacute;n de datos, almacenamiento de datos, OLAP, miner&iacute;a de datos y acceso a los datos.";
 choices[6][2] = "Carga de datos de prueba, entrenamiento, inferencia del conocimiento, carga de datos reales y c&aacute;lculo de decisiones.";
 choices[6][3] = "Gesti&oacute;n de los medios f&iacute;sicos de almacenamiento, localizaci&oacute;n transparente de los datos y salvaguarda y restauraci&oacute;n autom&aacute;ticas.";
 answers[6] = choices[6][1];
 units[6] = "68";
 comments[6] = "Id Pregunta: 1252. ";


//  Id pregunta: 1289 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  MPI:";
 choices[7]= new Array();
 choices[7][0] = "Es una librer&iacute;a para programaci&oacute;n distribuida por paso de mensajes";
 choices[7][1] = "Multi Peer Interface es una utilidad P2P que permite utilizar los recursos de los PC de una LAN como si de un servidor centralizado se tratara";
 choices[7][2] = "Permite el intercambio de archivos entre PCs de una misma red";
 choices[7][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[7] = choices[7][0];
 units[7] = "50";
 comments[7] = "Id Pregunta: 1289. JCED - Preparatic XVII";


//  Id pregunta: 1314 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Refiri&eacute;ndonos a los Sistemas de Informaci&oacute;n Geogr&aacute;fica (SIG), podemos afirmar que:";
 choices[8]= new Array();
 choices[8][0] = "Si la informaci&oacute;n est&aacute; almacenada seg&uacute;n el modelo de datos vectorial, las representaciones que se obtienen son menos precisas y de peor calidad que las del modelo r&aacute;ster.";
 choices[8][1] = "Los procedimientos de captura de la informaci&oacute;n gr&aacute;fica son diferentes, seg&uacute;n se trate de entidades planim&eacute;tricas o de entidades topogr&aacute;ficas.";
 choices[8][2] = "Si se va a utilizar en aplicaciones en las que sea esencial el empleo de objetos geogr&aacute;ficos, el modelo de datos r&aacute;ster es el m&aacute;s adecuado.";
 choices[8][3] = "Los atributos alfanum&eacute;ricos, que proporcionan informaci&oacute;n sobre las caracter&iacute;sticas de las entidades gr&aacute;ficas, se almacenan en formato r&aacute;ster.";
 answers[8] = choices[8][1];
 units[8] = "67";
 comments[8] = "Id Pregunta: 1314. NULL";


//  Id pregunta: 1400 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Un sistema operativo b&aacute;sico se compone de:";
 choices[9]= new Array();
 choices[9][0] = "Gesti&oacute;n de E/S";
 choices[9][1] = "Gesti&oacute;n de Memoria";
 choices[9][2] = "Planificaci&oacute;n";
 choices[9][3] = "Todas son ciertas";
 answers[9] = choices[9][3];
 units[9] = "52";
 comments[9] = "Id Pregunta: 1400. ";


//  Id pregunta: 1419 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Una microinstrucci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Es una funci&oacute;n que acepta pocos par&aacute;metros en un lenguaje de programaci&oacute;n convencional";
 choices[10][1] = "En unidades de control microprogramadas, cada intrucci&oacute;n es un microprograma formado por microinstrucciones";
 choices[10][2] = "Son comandos del sistema operativo que tienen peque&ntilde;o tama&ntilde;o y que siempre se encuentran en memoria";
 choices[10][3] = "Todas son falsas";
 answers[10] = choices[10][1];
 units[10] = "47";
 comments[10] = "Id Pregunta: 1419. ";


//  Id pregunta: 1445 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  La notaci&oacute;n sint&aacute;ctica conocida como BNF (Backus Normal Form) especifica:";
 choices[11]= new Array();
 choices[11][0] = "La funci&oacute;n, el formato, las reglas sint&aacute;cticas y generales de cada elemento SQL";
 choices[11][1] = "La sintaxis y la sem&aacute;ntica del SQL-DDL (Lenguaje de Definici&oacute;n de Esquema) y el SQL-DML (Lenguaje de M&oacute;dulos y de Manipulaci&oacute;n de Datos)";
 choices[11][2] = "Las autorizaciones para realizar determinadas funciones en las tablas";
 choices[11][3] = "Las restricciones para prevenir que dos filas tengan los mismos valores en determinadas columnas (unique) o para impedir que determinada columna contenga un valor nulo";
 answers[11] = choices[11][0];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1445. ";


//  Id pregunta: 1751 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  Se&ntilde;alar el enunciado cierto, referente a la sem&aacute;ntica de las relaciones representadas en el model E/R";
 choices[12]= new Array();
 choices[12][0] = "El tipo de la relaci&oacute;n es el n&uacute;mero de entidades sobre las que se realiza la asociaci&oacute;n";
 choices[12][1] = "El grado se corresponde con el n&uacute;mero m&aacute;ximo de ocurrencias de una entidad asociado a una ocurrencia de otra o de la misma entidad a trav&eacute;s de una relaci&oacute;n";
 choices[12][2] = "La cardinalidad de una entidad se define como el n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias que pueden estar relacionadas con ocurrencias de otra entidad";
 choices[12][3] = "Todos los enunciados anteriores son ciertos";
 answers[12] = choices[12][2];
 units[12] = "58";
 comments[12] = "Id Pregunta: 1751. ";


//  Id pregunta: 1754 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es el CLR?";
 choices[13]= new Array();
 choices[13][0] = "Un lenguaje de programaci&oacute;n para .Net";
 choices[13][1] = "El entorno de ejecuci&oacute;n de .Net";
 choices[13][2] = "Una biblioteca de clases de objetos";
 choices[13][3] = "Un motor de bases de datos para dispositivos m&oacute;viles";
 answers[13] = choices[13][1];
 units[13] = "59";
 comments[13] = "Id Pregunta: 1754. ";


//  Id pregunta: 1991 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  A la hora de realizar el an&aacute;lisis documental de cualquier informaci&oacute;n, &iquest;en qu&eacute; nivel se determinan los identificadores de la informaci&oacute;n?:";
 choices[14]= new Array();
 choices[14][0] = "En el nivel de asiento";
 choices[14][1] = "En el nivel de descriptor";
 choices[14][2] = "En el nivel de resumen";
 choices[14][3] = "En ninguno de los niveles anteriores";
 answers[14] = choices[14][0];
 units[14] = "95";
 comments[14] = "Id Pregunta: 1991. NULL";


//  Id pregunta: 2076 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  Se&ntilde;ale entre los siguientes tipos de mantenimiento de sistemas de informaci&oacute;n aquel que queda fuera del &aacute;mbito de METRICA V3:";
 choices[15]= new Array();
 choices[15][0] = "Cambios precisos para corregir errores del software";
 choices[15][1] = "Incorporaciones necesarias para cubrir la expansi&oacute;n de las necesidades de los usuarios";
 choices[15][2] = "Modificaciones y eliminaciones necesarias para atender los cambios en las necesidades de los usuarios";
 choices[15][3] = "Acciones necesarias para mejorar la calidad interna de los sistemas";
 answers[15] = choices[15][3];
 units[15] = "86";
 comments[15] = "Id Pregunta: 2076. Pregunta Junta Andalucia - A";


//  Id pregunta: 2170 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La administraci&oacute;n de recursos de datos pueden consistir de:";
 choices[16]= new Array();
 choices[16][0] = "Administraci&oacute;n de datos y administraci&oacute;n de bases de datos";
 choices[16][1] = "Administraci&oacute;n de ordenadores y administraci&oacute;n de software";
 choices[16][2] = "Administraci&oacute;n de bases de datos y administraci&oacute;n de comunicaciones";
 choices[16][3] = "Planificaci&oacute;n e implementaci&oacute;n de bases de datos";
 answers[16] = choices[16][0];
 units[16] = "57";
 comments[16] = "Id Pregunta: 2170. ";


//  Id pregunta: 2189 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;les son las suposiciones b&aacute;sicas del modelo COCOMO cl&aacute;sico para estimar el esfuerzo necesario para el desarrollo de sistemas?:";
 choices[17]= new Array();
 choices[17][0] = "Considera que la principal variable explicativa del coste es el n&uacute;mero de instrucciones, con lo que centra sus esfuerzos en estimar este n&uacute;mero";
 choices[17][1] = "Supone que el esfuerzo necesario para el desarrollo de un sistema es el producto de dos factores: complejidad t&eacute;cnica y tama&ntilde;o del tratamiento de la informaci&oacute;n";
 choices[17][2] = "Usa como variable explicativa secundaria la complejidad t&eacute;cnica, originando tres modos de aplicaci&oacute;n del m&eacute;todo: org&aacute;nico, semiacoplado y empotrado";
 choices[17][3] = "Todas las anteriores son asunciones del modelo COCOMO";
 answers[17] = choices[17][3];
 units[17] = "89";
 comments[17] = "Id Pregunta: 2189. Preparatic XVII";


//  Id pregunta: 2245 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Del modelo clasico de ciclo de vida en cascada puede afirmarse que:";
 choices[18]= new Array();
 choices[18][0] = "El usuario valida el resultado de cada una de las fases";
 choices[18][1] = "Proporciona resultados parciales para validaci&oacute;n de requisitos";
 choices[18][2] = "Est&aacute; regido por la documentaci&oacute;n, que marca la transici&oacute;n entre fases";
 choices[18][3] = "Est&aacute; dirigido por el riesgo";
 answers[18] = choices[18][2];
 units[18] = "76";
 comments[18] = "Id Pregunta: 2245. ";


//  Id pregunta: 2418 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El nivel b&aacute;sico de comprensi&oacute;n donde comienza la abstracci&oacute;n y se aplican reglas gramaticales es el:";
 choices[19]= new Array();
 choices[19][0] = "Nivel fonol&oacute;gico";
 choices[19][1] = "Nivel fon&eacute;tico";
 choices[19][2] = "Nivel ac&uacute;stico";
 choices[19][3] = "Nivel l&eacute;xico-sint&aacute;ctico";
 answers[19] = choices[19][3];
 units[19] = "94";
 comments[19] = "Id Pregunta: 2418. ";


//  Id pregunta: 2562 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  &iquest;Qu&eacute; significa que una Organizaci&oacute;n esta en el Nivel 2 del CMM?";
 choices[20]= new Array();
 choices[20][0] = "En este nivel se logran establecer las pol&iacute;ticas para adminsitrar un proyecto de software y los procedimientos para lograrlo, esto se realiza en base a la experiencia obtenida en proyectos similares.";
 choices[20][1] = "En este nivel, el proceso est&aacute;ndar para el desarrollo y mantenimiento de software se documenta, tanto desde el punto de vista t&eacute;cnico como administrativo. Se explotan efectivamente pr&aacute;cticas de ingenier&iacute;a de software para estandarizar los procesos.";
 choices[20][2] = "Todas son correctas";
 choices[20][3] = "En este nivel la empresa carece de buenas pr&aacute;cticas de ingenier&iacute;a de software, ni existe una planeaci&oacute;n efectiva. Los proyectos generalmente abandonan los planes realizados en etapas de crisis.";
 answers[20] = choices[20][0];
 units[20] = "87,88,92";
 comments[20] = "Id Pregunta: 2562. ";


//  Id pregunta: 2649 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Indicar la afirmaci&oacute;n falsa sobre Diagramas de Flujo de Datos";
 choices[21]= new Array();
 choices[21][0] = "No se puede representar flujos de datos entre almacenes y entidades externas";
 choices[21][1] = "Se pueden representar relaciones entre entidades externas ";
 choices[21][2] = "No se debe representar la clave de acceso al almac&eacute;n sino s&oacute;lo la operaci&oacute;n que se realice en el almac&eacute;n";
 choices[21][3] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es s&iacute;ncrona";
 answers[21] = choices[21][1];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2649. NULL";


//  Id pregunta: 3026 AÃ±o de creación de pregunta: 2004-01-01
 questions[22]= "23)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[22]= new Array();
 choices[22][0] = "La direcci&oacute;n IP no se asocia a la m&aacute;quina sino a la interfaz de red";
 choices[22][1] = "Hay 256 puertos llamados bien conocidos (well known)";
 choices[22][2] = "La direcci&oacute;n Ip y el puerto determinan un socket";
 choices[22][3] = "Una aplicaci&oacute;n se identifica por un puerto";
 answers[22] = choices[22][1];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3026. SS-A 2004. Los puertos bien conocidos (well-known ports) son aquellos menores a 1024 y que se utilizan para los servicios b&aacute;sicos en Internet";


//  Id pregunta: 3036 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes ataques afecta a la disponibilidad de la informaci&oacute;n?:";
 choices[23]= new Array();
 choices[23][0] = "e-mail Spamming";
 choices[23][1] = "DoS (Denial of Service)";
 choices[23][2] = "DDoS (Distributed Denial of Service)";
 choices[23][3] = "Todos los anteriores";
 answers[23] = choices[23][3];
 units[23] = "111";
 comments[23] = "Id Pregunta: 3036. NULL";


//  Id pregunta: 3068 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Indique cu&aacute;l de las opciones refleja m&aacute;s adecuadamente las caracter&iacute;sticas de un cable coaxial:";
 choices[24]= new Array();
 choices[24][0] = "Un cable coaxial es un medio de transmisi&oacute;n constituido por dos hilos conductores aislados entre si y dispuestos de forma paralela a lo largo de todo su recorrido";
 choices[24][1] = "Un cable coaxial est&aacute; constituido por dos hilos conductores paralelos aislados y recubiertos por una l&aacute;mina conductora";
 choices[24][2] = "Un cable coaxial est&aacute; constituido por un hilo conductor central rodeado de una lamina conductora conc&eacute;ntrica con &eacute;l y separado por un medio aislante";
 choices[24][3] = "Un cable coaxial est&aacute; constituido por un conjunto de conductores aislados entre si y torsionados sobre ellos mismos en grupos de cuatro, encerrados todos ellos por una lamina o cubierta conductora";
 answers[24] = choices[24][2];
 units[24] = "99";
 comments[24] = "Id Pregunta: 3068. ";


//  Id pregunta: 3199 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  EDGE responde por:";
 choices[25]= new Array();
 choices[25][0] = "Enhanced Data for GPRS Evolution";
 choices[25][1] = "Extended Data for GSM Enhancement";
 choices[25][2] = "Enhanced Data for GSM Evolution";
 choices[25][3] = "Extended Data for GPRS Enhancement";
 answers[25] = choices[25][2];
 units[25] = "108";
 comments[25] = "Id Pregunta: 3199. ";


//  Id pregunta: 3220 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes dispositivos es el que trabaja como m&aacute;ximo a nivel 3 - Red - del sistema OSI?:";
 choices[26]= new Array();
 choices[26][0] = "Repetidores";
 choices[26][1] = "Puentes (Bridges)";
 choices[26][2] = "Enrutadores (routers)";
 choices[26][3] = "Pasarelas (Gateways)";
 answers[26] = choices[26][2];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3220. NULL";


//  Id pregunta: 3311 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Qu&eacute; se entiende por modem inteligente?:";
 choices[27]= new Array();
 choices[27][0] = "Aquellos que son capaces de detectar errores";
 choices[27][1] = "Aquellos que llevan microprocesador y memoria";
 choices[27][2] = "Aquellos que no pueden detectar m&uacute;ltiples llamadas";
 choices[27][3] = "Aquellos que funcionan igual a un terminal";
 answers[27] = choices[27][0];
 units[27] = "97";
 comments[27] = "Id Pregunta: 3311. NULL";


//  Id pregunta: 3409 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Frame Relay se caracteriza por ofrecer un servicio:";
 choices[28]= new Array();
 choices[28][0] = "Orientado a conexi&oacute;n";
 choices[28][1] = "Fiable";
 choices[28][2] = "Sin garant&iacute;as de caudal m&iacute;nimo";
 choices[28][3] = "Con correcci&oacute;n de errores cada vez que se env&iacute;a un paquete al nodo siguiente";
 answers[28] = choices[28][0];
 units[28] = "109";
 comments[28] = "Id Pregunta: 3409. ";


//  Id pregunta: 3566 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En un protocolo de nivel de enlace se denomina ventana a:";
 choices[29]= new Array();
 choices[29][0] = "Al env&iacute;o de una trama de control que indica al emisor que la trama de informaci&oacute;n ha llegado correctamente";
 choices[29][1] = "Al envio por el emisor de las tramas de informaci&oacute;n numeradas secuencialmente";
 choices[29][2] = "Al envio de los asentimientos numerados por cada una de las tramas de informaci&oacute;n recibidas";
 choices[29][3] = "Al n&uacute;mero m&aacute;ximo de tramas que en un momento dado pueden estar pendientes de confirmaci&oacute;n";
 answers[29] = choices[29][3];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3566. ";


//  Id pregunta: 3579 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En una red TCP/IP, la conmutaci&oacute;n de nivel 4:";
 choices[30]= new Array();
 choices[30][0] = "No existe";
 choices[30][1] = "Se realiza mediante el identificador MAC del paquete IP";
 choices[30][2] = "Se realiza mediante el identificador de puerto del paquete IP";
 choices[30][3] = "Se realiza mediante el identificador de la direcci&oacute;n IP";
 answers[30] = choices[30][2];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3579. NULL";


//  Id pregunta: 3599 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La direcci&oacute;n loopback en IPv6 es:";
 choices[31]= new Array();
 choices[31][0] = "0:0:0:0:0:0:0:1";
 choices[31][1] = "0:0:0:0:0:0:0:0";
 choices[31][2] = "FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:";
 choices[31][3] = "F:F:F:F:F:F:F:F";
 answers[31] = choices[31][0];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3599. NULL";


//  Id pregunta: 3671 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Una de las siguientes afirmaciones es falsa con respecto a ADSL:";
 choices[32]= new Array();
 choices[32][0] = "El caudal de informaci&oacute;n es mayor en sentido red-usuario que en el sentido contrario";
 choices[32][1] = "La tarificaci&oacute;n no depende del uso sino del ancho de banda contratado";
 choices[32][2] = "Permite navegar por Internet y mantener una conversaci&oacute;n telef&oacute;nica simult&aacute;neamente";
 choices[32][3] = "Hay que hacer un nuevo tendido de cobre entre la central y el domicilio del abonado para poder instalarlo";
 answers[32] = choices[32][3];
 units[32] = "107";
 comments[32] = "Id Pregunta: 3671. NULL";


//  Id pregunta: 3672 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Una de las siguientes caracter&iacute;sticas es falsa para la tecnolog&iacute;a GPS. Indicar cu&aacute;l:";
 choices[33]= new Array();
 choices[33][0] = "El sistema lo forma una constelaci&oacute;n de 32 sat&eacute;lites, que orbitan alrededor de la Tierra a 12600 millas, con 5 estaciones fijas de monitorizaci&oacute;n y seguimiento";
 choices[33][1] = "La posici&oacute;n se expresa en latitud y longitud gracias a la triangulaci&oacute;n producida por al menos 4 sat&eacute;lites trabajando simult&aacute;neamente";
 choices[33][2] = "Entre sus aplicaciones principales est&aacute; la gesti&oacute;n de flotas, la provisi&oacute;n de servicios de telefon&iacute;a m&oacute;vil basados en localizaci&oacute;n o las radios privadas y p&uacute;blicas de tipo trunking";
 choices[33][3] = "Es un sistema de origen estadounidense proveniente del campo militar, y la versi&oacute;n de la que puede disponer el gran p&uacute;blico no es tan precisa como la del campo militar";
 answers[33] = choices[33][0];
 units[33] = "108";
 comments[33] = "Id Pregunta: 3672. ";


//  Id pregunta: 3811 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Seg&uacute;n las RFCs 822 y 2822, sobre el formato de los mensajes de correo electr&oacute;nico, &eacute;stos se componen de:";
 choices[34]= new Array();
 choices[34][0] = "sobre, cabeceras y cuerpo";
 choices[34][1] = "cabeceras, cuerpo y cola";
 choices[34][2] = "sobre, cabeceras, cuerpo y cola";
 choices[34][3] = "cabeceras y cuerpo";
 answers[34] = choices[34][0];
 units[34] = "106";
 comments[34] = "Id Pregunta: 3811. ";


//  Id pregunta: 3819 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[35]= new Array();
 choices[35][0] = "El mantenimiento del anillo se hace de forma centralizada en token ring y distribuida en token bus";
 choices[35][1] = "El mantenimiento del anillo se hace de forma centralizada en token ring y token bus";
 choices[35][2] = "El mantenimiento del anillo se hace de forma distribuida en token ring y token bus";
 choices[35][3] = "El mantenimiento del anillo se hace de forma centralizada en token bus y distribuida en token ring";
 answers[35] = choices[35][0];
 units[35] = "101";
 comments[35] = "Id Pregunta: 3819. ";


//  Id pregunta: 3845 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Tengo una p&aacute;gina web personal, pero para financiar gastos tengo alojados &quot;banners&quot;.&iquest;En qu&eacute; me afecta la LSSI?: ";
 choices[36]= new Array();
 choices[36][0] = "No me afecta para nada";
 choices[36][1] = "La LSSI es aplicable";
 choices[36][2] = "S&oacute;lo para la publicidad";
 choices[36][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[36] = choices[36][1];
 units[36] = "112,30";
 comments[36] = "Id Pregunta: 3845. ";


//  Id pregunta: 4042 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  El art&iacute;culo 25 de la Ley 9/2014 de Telecomunicaciones define el servicio universal como &lt;&lt;el conjunto de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales &hellip; :";
 choices[37]= new Array();
 choices[37][0] = "&hellip; con independencia de su localicaci&oacute;n geogr&aacute;fica&gt;&gt;";
 choices[37][1] = "&hellip; con independencia de su localicaci&oacute;n geogr&aacute;fica y con una calidad determinada&gt;&gt;";
 choices[37][2] = "&hellip; con independencia de su localicaci&oacute;n geogr&aacute;fica y a un precio asequible&gt;&gt;";
 choices[37][3] = "&hellip; con independencia de su localicaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible&gt;&gt;";
 answers[37] = choices[37][3];
 units[37] = "110";
 comments[37] = "Id Pregunta: 4042. ";


//  Id pregunta: 4106 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Un GigaPop es:";
 choices[38]= new Array();
 choices[38][0] = "1000 pops.";
 choices[38][1] = "Un nodo de interconexi&oacute;n del backbone de Internet 2.";
 choices[38][2] = "Ninguna de las anteriores";
 choices[38][3] = "a) y b) son ciertas.";
 answers[38] = choices[38][1];
 units[38] = "112";
 comments[38] = "Id Pregunta: 4106. ";


//  Id pregunta: 4138 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  La capacidad de un cortafuegos de controlar el estado de las conexiones activas y usar esta informaci&oacute;n para decidir que paquetes de red deja pasar se llama";
 choices[39]= new Array();
 choices[39][0] = "An&aacute;lisis de puertos (Application firewall)";
 choices[39][1] = "Filtrado est&aacute;tico de paquetes (Static Packet filtering)";
 choices[39][2] = "Inspecci&oacute;n completa de estado (Stateful Packet filtering)";
 choices[39][3] = "Barrido ICMP (ICMP Scanning)";
 answers[39] = choices[39][2];
 units[39] = "113";
 comments[39] = "Id Pregunta: 4138. ";


//  Id pregunta: 4143 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  La intrusi&oacute;n basada en la habilidad del intruso en enga&ntilde;ar a la gente para que rompa los procedimientos normales de seguridad se llama";
 choices[40]= new Array();
 choices[40][0] = "surfeo sobre los hombros (shoulder surfing)";
 choices[40][1] = "huellas del cerebro (brain fingerprinting)";
 choices[40][2] = "ingenier&iacute;a social";
 choices[40][3] = "subterfugio";
 answers[40] = choices[40][2];
 units[40] = "111";
 comments[40] = "Id Pregunta: 4143. NULL";


//  Id pregunta: 4199 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Estandar que permite redes inal&aacute;mbricas con frecuencias de 2.4 GHz.";
 choices[41]= new Array();
 choices[41][0] = "802.11a";
 choices[41][1] = "802.11b";
 choices[41][2] = "802.11g";
 choices[41][3] = "B y C son correctas";
 answers[41] = choices[41][3];
 units[41] = "107";
 comments[41] = "Id Pregunta: 4199. NULL";


//  Id pregunta: 4226 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Identifique el rango de frecuencias que se utiliza en el canal ascendente o de retorno en una red HFC (Hybrid Fiber Coaxial):";
 choices[42]= new Array();
 choices[42][0] = "De 50 a 550 Mhz";
 choices[42][1] = "De 5 a 50 MHz";
 choices[42][2] = "De 550 a 860 MHz";
 choices[42][3] = "De 5 a 860 MHz";
 answers[42] = choices[42][1];
 units[42] = "99";
 comments[42] = "Id Pregunta: 4226. ";


//  Id pregunta: 4763 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Relativo a la estructura de COBIT 5:";
 choices[43]= new Array();
 choices[43][0] = "Se definen 37 objetivos de control generales";
 choices[43][1] = "Se define un objetivo para cada uno de los procesos de las TI";
 choices[43][2] = "Especifica un total de 17 Metas de Negocio";
 choices[43][3] = "Todas son ciertas";
 answers[43] = choices[43][3];
 units[43] = "98";
 comments[43] = "Id Pregunta: 4763. NULL";


//  Id pregunta: 4963 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  El lenguaje de control de trabajos JCL se utiliza para:";
 choices[44]= new Array();
 choices[44][0] = "Definir las sentencias de control de los procedimientos almacenados en una tabla de base de datos.";
 choices[44][1] = "Definir listas de acceso de usuarios a un sistema de informaci&oacute;n.";
 choices[44][2] = "Indicar al sistema operativo como arrancar un programa por lotes y qu&eacute; recursos va a necesitar.";
 choices[44][3] = "Controlar las excepciones en el lenguaje de programaci&oacute;n Java.";
 answers[44] = choices[44][2];
 units[44] = "";
 comments[44] = "Id Pregunta: 4963. Examen TIC B 2007";


//  Id pregunta: 4984 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes conductas se considera infracci&oacute;n muy grave, seg&uacute;n la Ley 9/2014, General de Telecomunicaciones?";
 choices[45]= new Array();
 choices[45][0] = "La producci&oacute;n deliberada de interferencias definidas como perjudiciales en la citada Ley.";
 choices[45][1] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[45][2] = "Carecer de los preceptivos cuadros de tarifas o de precios exigidos por la normativa vigente.";
 choices[45][3] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 answers[45] = choices[45][0];
 units[45] = "110";
 comments[45] = "Id Pregunta: 4984. Examen TIC B 2007";


//  Id pregunta: 5189 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de desarrollo de sistemas distribuidos basados en objetos no es una tecnolog&iacute;a Java de Sun Microsystems?";
 choices[46]= new Array();
 choices[46][0] = "RMI";
 choices[46][1] = "JINI";
 choices[46][2] = "EJB";
 choices[46][3] = "CORBA";
 answers[46] = choices[46][3];
 units[46] = "82";
 comments[46] = "Id Pregunta: 5189. ";


//  Id pregunta: 5198 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de la t&eacute;cnica del prototipado?";
 choices[47]= new Array();
 choices[47][0] = "Hace part&iacute;cipes a los usuarios del desarrollo";
 choices[47][1] = "Facilita la continua revisi&oacute;n del sistema por parte de los usuarios";
 choices[47][2] = "Desemboca en sistemas muy flexibles a cambios posteriores";
 choices[47][3] = "En general, reduce el tiempo de los desarrollos posteriores";
 answers[47] = choices[47][2];
 units[47] = "85";
 comments[47] = "Id Pregunta: 5198. ";


//  Id pregunta: 5201 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Cu&aacute;l de las siguientes no se considera una regla b&aacute;sica en  las reuniones de Brainstorming:";
 choices[48]= new Array();
 choices[48][0] = "Ninguna cr&iacute;tica";
 choices[48][1] = "Ser convencional";
 choices[48][2] = "Cuantas m&aacute;s ideas mejor";
 choices[48][3] = " Apoyarse en otras ideas";
 answers[48] = choices[48][1];
 units[48] = "78";
 comments[48] = "Id Pregunta: 5201. ";


//  Id pregunta: 5455 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Una Importante cuesti&oacute;n a considerar en la elecci&oacute;n de una sentencia SQL es";
 choices[49]= new Array();
 choices[49][0] = "N&uacute;mero de CPUs en el servidor";
 choices[49][1] = "Grado de paralelismo de las tablas";
 choices[49][2] = "Uso de &iacute;ndices de mapas de bits";
 choices[49][3] = "Calidad de las optimizaciones de las sentencias SQL";
 answers[49] = choices[49][3];
 units[49] = "58";
 comments[49] = "Id Pregunta: 5455. Castilla y Le&oacute;n";


//  Id pregunta: 5482 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Firmar un mensaje electr&oacute;nico";
 choices[50]= new Array();
 choices[50][0] = "Es lo mismo que cifrarlo";
 choices[50][1] = "Garantiza la confidencialidad";
 choices[50][2] = "Es lo mismo que codificarlo";
 choices[50][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[50] = choices[50][3];
 units[50] = "72";
 comments[50] = "Id Pregunta: 5482. Castilla y Le&oacute;n";


//  Id pregunta: 5747 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es la longitud del resumen de la funci&oacute;n SHA-1?";
 choices[51]= new Array();
 choices[51][0] = "64 bits";
 choices[51][1] = "128 bits";
 choices[51][2] = "160 bits";
 choices[51][3] = "224 bits";
 answers[51] = choices[51][2];
 units[51] = "72";
 comments[51] = "Id Pregunta: 5747. ";


//  Id pregunta: 5865 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  En referencia al direccionamiento de IPv6 definido en el RFC 1884, indique cu&aacute;l de los apartados siguientes es VERDADERO:";
 choices[52]= new Array();
 choices[52][0] = "Una direcci&oacute;n IPv6 tiene la forma x:x:x:x:x:x:x:x donde cada &quot;x&quot; representa un valor en hexadecimal correspondiente a 8 bits";
 choices[52][1] = "En una direcci&oacute;n IPv6, se pueden sustituir todas las apariciones de cadenas de ceros por &quot;::&quot;";
 choices[52][2] = "Una forma alternativa de representaci&oacute;n de las direcciones en un entorno mixto de IPv4 e IPv6 es d.d.d.d:x:x:x:x:x:x donde las &quot;d&quot; son los valores decimales de los 8bits m&aacute;s significativos de la direcci&oacute;n IPv4, y las &quot;x&quot; son valores hexadecimales de los tramos menos significativos de la direcci&oacute;n IPv6";
 choices[52][3] = "La direcci&oacute;n 0:0:0:0:0:0:0:0 es conocida como &quot;unspecified address&quot;. y nunca debe ser asignada a un nodo";
 answers[52] = choices[52][3];
 units[52] = "100";
 comments[52] = "Id Pregunta: 5865. MAP 2008 A1";


//  Id pregunta: 6124 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Qu&eacute; son las t&eacute;cnicas esteganogr&aacute;ficas?";
 choices[53]= new Array();
 choices[53][0] = "Son t&eacute;cnicas de firma electr&oacute;nica, tipo XMLDSig.";
 choices[53][1] = "Son t&eacute;cnicas dirigidas a ayudar en las auditorias inform&aacute;ticas y en particular en la optimizaci&oacute;n de los sistemas de impresi&oacute;n.";
 choices[53][2] = "Son t&eacute;cnicas de dise&ntilde;o asistido por ordenador y enfocadas a la producci&oacute;n de material gr&aacute;fico.";
 choices[53][3] = "Son t&eacute;cnicas dirigidas al ocultamiento de mensajes u objetos dentro de otros";
 answers[53] = choices[53][3];
 units[53] = "86";
 comments[53] = "Id Pregunta: 6124. TIC A 2009";


//  Id pregunta: 6190 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, la interoperabilidad se entender&aacute; contemplando las dimensiones";
 choices[54]= new Array();
 choices[54][0] = "T&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[54][1] = "T&eacute;cnica, sem&aacute;ntica y funcional";
 choices[54][2] = "Funcional, sem&aacute;ntica y organizativa";
 choices[54][3] = "T&eacute;cnica, funcional y organizativa";
 answers[54] = choices[54][0];
 units[54] = "43";
 comments[54] = "Id Pregunta: 6190. Art&iacute;culo 6";


//  Id pregunta: 6273 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es modelo de ciclo de vida tradicional basado en prototipos?";
 choices[55]= new Array();
 choices[55][0] = "Modelo de prototipado evolutivo";
 choices[55][1] = "Modelo de desarrollo incremental";
 choices[55][2] = "Modelo de construcci&oacute;n de prototipos";
 choices[55][3] = "Modelo basado en transformaciones";
 answers[55] = choices[55][3];
 units[55] = "76";
 comments[55] = "Id Pregunta: 6273. ";


//  Id pregunta: 6358 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;A qui&eacute;n corresponde establecer las obligaciones espec&iacute;ficas para los mercados de referencia establecidas en el art&iacute;culo 13 de la Ley 9/2014?";
 choices[56]= new Array();
 choices[56][0] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[56][1] = "Al Gobierno";
 choices[56][2] = "A la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[56][3] = "Al Ministerio de Ciencia y Tecnolog&iacute;a";
 answers[56] = choices[56][2];
 units[56] = "110";
 comments[56] = "Id Pregunta: 6358. Art&iacute;culo 13.4 Ley 9/2014";


//  Id pregunta: 6511 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  El comando para cambiar el password de un usuario en UNIX es:";
 choices[57]= new Array();
 choices[57][0] = "passwd";
 choices[57][1] = "pass";
 choices[57][2] = "password";
 choices[57][3] = "chpass";
 answers[57] = choices[57][0];
 units[57] = "54";
 comments[57] = "Id Pregunta: 6511. ";


//  Id pregunta: 6623 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  ISO 8402 define la calidad del software como:";
 choices[58]= new Array();
 choices[58][0] = "La capacidad de un conjunto de caracter&iacute;sticas intr&iacute;nsecas para satisfacer requisitos";
 choices[58][1] = "Conjunto de propiedades y caracter&iacute;sticas de un producto o servicio, que le confieren aptitud para satisfacer una serie de necesidades expl&iacute;citas o impl&iacute;citas";
 choices[58][2] = "Conformidad a los requisitos funcionales y prestaciones establecidas, a las normas de desarrollo expl&iacute;citamente documentadas y a las caracter&iacute;sticas impl&iacute;citas que seesperan de todo software desarrollado profesionalmente";
 choices[58][3] = "La norma ISO 8402 no es una norma de calidad";
 answers[58] = choices[58][1];
 units[58] = "87";
 comments[58] = "Id Pregunta: 6623. NULL";


//  Id pregunta: 8032 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)   RDF (Resource Description Framework) es un:";
 choices[59]= new Array();
 choices[59][0] = " Lenguaje del W3C para representar informaci&oacute;n sobre recursos en la web.";
 choices[59][1] = " Est&aacute;ndar del W3C para la definici&oacute;n de datos.";
 choices[59][2] = " Est&aacute;ndar para la creaci&oacute;n de p&aacute;ginas web accesibles.";
 choices[59][3] = " Est&aacute;ndar para la descripci&oacute;n de los recursos inform&aacute;ticos de una organizaci&oacute;n.";
 answers[59] = choices[59][0];
 units[59] = "NULL";
 comments[59] = "Id Pregunta: 8032. Map 2007";


//  Id pregunta: 8114 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)   &iquest;Qu&eacute; tipo de miembros NO existen en el Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI)?";
 choices[60]= new Array();
 choices[60][0] = " Miembros Plenos.";
 choices[60][1] = " Miembros Coordinadores.";
 choices[60][2] = " Miembros Asociados.";
 choices[60][3] = " Miembros Consejeros.";
 answers[60] = choices[60][1];
 units[60] = "NULL";
 comments[60] = "Id Pregunta: 8114. Map 2008";


//  Id pregunta: 8145 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)   Indique cu&aacute;l de las siguientes afirmaciones es CIERTA:";
 choices[61]= new Array();
 choices[61][0] = " Las funciones hash se utilizan en los mecanismos de cifrado/descifrado de mensajes.";
 choices[61][1] = " Las funciones hash se pueden utilizar para garantizar la integridad de los mensajes transmitidos.";
 choices[61][2] = " Las funciones hash generan valores cuya longitud, en bits, depende de la longitud del mensaje original.";
 choices[61][3] = " Las funciones hash requieren el uso de claves de cifrado.";
 answers[61] = choices[61][1];
 units[61] = "NULL";
 comments[61] = "Id Pregunta: 8145. Map 2008";


//  Id pregunta: 8177 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l es la afirmaci&oacute;n INCORRECTA respecto a los Sistemas de Cableado?:";
 choices[62]= new Array();
 choices[62][0] = "Las ventanas hist&oacute;ricamente definidas para transmisi&oacute;n en fibra &oacute;ptica se encuentran situadas alrededor de los 850, 1310 y 1550 nm.";
 choices[62][1] = "La diafon&iacute;a se clasifica en paradiafon&iacute;a y telediafon&iacute;a.";
 choices[62][2] = "La propagaci&oacute;n en las fibras &oacute;pticas depende de la reflexi&oacute;n interna que se produce gracias a que el revestimiento tiene un &iacute;ndice de refracci&oacute;n mayor que el del n&uacute;cleo.";
 choices[62][3] = "La fibra monomodo se puede lograr reduciendo el di&aacute;metro del n&uacute;cleo.";
 answers[62] = choices[62][2];
 units[62] = "99";
 comments[62] = "Id Pregunta: 8177. Examen TIC A1 2010";


//  Id pregunta: 8303 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  En relaci&oacute;n a IPSec se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[63]= new Array();
 choices[63][0] = "Se defini&oacute; originariamente en las RFCs 1825 y 1829.";
 choices[63][1] = "Tanto AH (Authentication Header) como ESP (Encapsulating Security Payload) proporcionan integridad y autenticaci&oacute;n en la comunicaci&oacute;n.";
 choices[63][2] = "En modo transporte con AH no es posible traducir direcciones mediante NAT transversal.";
 choices[63][3] = "ESP debe implementar obligatoriamente el algoritmo AES-CBC con claves de 128 bits";
 answers[63] = choices[63][2];
 units[63] = "111";
 comments[63] = "Id Pregunta: 8303. Examen TIC A2 2010";


//  Id pregunta: 8484 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Sobre qu&eacute; protocolo se encapsulan los paquetes DHCP?";
 choices[64]= new Array();
 choices[64][0] = "HTTP.";
 choices[64][1] = "UDP.";
 choices[64][2] = "TCP.";
 choices[64][3] = "IP.";
 answers[64] = choices[64][1];
 units[64] = "100";
 comments[64] = "Id Pregunta: 8484. Examen TIC A2 2010 interna";


//  Id pregunta: 8538 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a?";
 choices[65]= new Array();
 choices[65][0] = "2.4 GHz y hasta 11 Mbps";
 choices[65][1] = " 5 GHz y hasta 54Mbps.";
 choices[65][2] = "2.4 GHz y hasta 54 Mbps.";
 choices[65][3] = "5 GHz y hasta 11 Mbps";
 answers[65] = choices[65][1];
 units[65] = "107";
 comments[65] = "Id Pregunta: 8538. Examen TIC A2 2010 interna";


//  Id pregunta: 8676 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  A qu&eacute; se denomina Single sign-on (SSO):";
 choices[66]= new Array();
 choices[66][0] = "Procedimiento de cifrado para autenticar a un usuario";
 choices[66][1] = "Procedimiento asociado al cifrado en Secure Sockets Layers (SSL)";
 choices[66][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n";
 choices[66][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS";
 answers[66] = choices[66][2];
 units[66] = "118";
 comments[66] = "Id Pregunta: 8676. Examen UPM A2 2011";


//  Id pregunta: 8842 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)   De acuerdo con el modelo de cuadro de mando (Balanced Scorecard) de Kaplan y Nolan, &iquest;cu&aacute;l de las siguientes respuestas ser&iacute;a la correcta?";
 choices[67]= new Array();
 choices[67][0] = "La implantaci&oacute;n de un cuadro de mando se debe realizar estableciendo objetivos que se deben trasladar a indicadores o medidas espec&iacute;ficas.";
 choices[67][1] = "El cuadro de mando permite a los gestores priorizar las expectativas de los clientes sobre la situaci&oacute;n financiera de la organizaci&oacute;n.";
 choices[67][2] = "El cuadro de mando permite a los gestores priorizar la situaci&oacute;n financiera de la organizaci&oacute;n sobre las expectativas de los clientes.";
 choices[67][3] = "El cuadro de mando se establece teniendo en cuenta cinco perspectivas distintas: clientes, accionistas, perspectiva interna de la organizaci&oacute;n, innovaci&oacute;n-aprendizaje y perspectiva financiera.";
 answers[67] = choices[67][0];
 units[67] = "68";
 comments[67] = "Id Pregunta: 8842. Examen UC3M 2010";


//  Id pregunta: 8891 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Se&ntilde;ale la respuesta correcta seg&uacute;n M&eacute;trica v3";
 choices[68]= new Array();
 choices[68][0] = "El c&aacute;lculo de accesos es una t&eacute;cnica";
 choices[68][1] = "La normalizaci&oacute;n es una t&eacute;cnica";
 choices[68][2] = "Ambas son pr&aacute;cticas";
 choices[68][3] = "Ambas son t&eacute;cnicas";
 answers[68] = choices[68][1];
 units[68] = "86";
 comments[68] = "Id Pregunta: 8891. NULL";


//  Id pregunta: 9079 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  Para cumplir el nivel AA en la pauta &quot;Ayuda a la entrada de datos&quot;, respecto a los formularios de entrada de datos que tengan consecuencias legales, cu&aacute;l de las siguientes opciones NO se exige:";
 choices[69]= new Array();
 choices[69][0] = "Tipograf&iacute;a clara y legible. ";
 choices[69][1] = "Verificaci&oacute;n por parte del usuario.";
 choices[69][2] = "Reversibilidad. ";
 choices[69][3] = "Confirmaci&oacute;n.";
 answers[69] = choices[69][0];
 units[69] = "39";
 comments[69] = "Id Pregunta: 9079. ";


//  Id pregunta: 9179 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Indique la afirmaci&oacute;n FALSA:";
 choices[70]= new Array();
 choices[70][0] = "La luz acrom&aacute;tica es aquella cuyo &uacute;nico atributo visible es la intensidad";
 choices[70][1] = "Los colores secundarios cian, magenta y amarillo se consideran combinaci&oacute;n de los tres colores primarios ";
 choices[70][2] = "La percepci&oacute;n del color por el sistema visual humano se caracteriza por los par&aacute;metros: brillo, matiz y croma o saturaci&oacute;n.";
 choices[70][3] = "La intensidad se describe en t&eacute;rminos de radiancia, luminancia y brillo.";
 answers[70] = choices[70][1];
 units[70] = "93";
 comments[70] = "Id Pregunta: 9179. NULL";


//  Id pregunta: 9437 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes metodolog&iacute;as NO se considera &aacute;gil?";
 choices[71]= new Array();
 choices[71][0] = "M&eacute;l&eacute;";
 choices[71][1] = "OMT";
 choices[71][2] = "DAS (Desarrollo Adaptativo de Software)";
 choices[71][3] = "DCC (Desarrollo Conducido por Caracter&iacute;sticas)";
 answers[71] = choices[71][1];
 units[71] = "79";
 comments[71] = "Id Pregunta: 9437. Examen AGE TIC A1 2011";


//  Id pregunta: 9499 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Indica la afirmaci&oacute;n verdadera con respecto a los applets:";
 choices[72]= new Array();
 choices[72][0] = "Se descargan como documentos HTML y se ejecutan en el cliente";
 choices[72][1] = "El usuario no permite el acceso a los recursos locales por el s&oacute;lo hecho de aceptar un applet";
 choices[72][2] = "Se ejecutan en un componente independiente del navegador";
 choices[72][3] = "Todas las anteriores son ciertas";
 answers[72] = choices[72][3];
 units[72] = "114";
 comments[72] = "Id Pregunta: 9499. NULL";


//  Id pregunta: 9592 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  El c&oacute;mputo de plazos, imputables tanto a los interesados como a las Administraciones P&uacute;blicas, seg&uacute;n se establece en el art&iacute;culo 26 de la Ley 11/2007 se fija por:";
 choices[73]= new Array();
 choices[73][0] = "La fecha y hora oficial de la sede electr&oacute;nica de los servicios centrales, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[73][1] = "La fecha y hora oficial de la sede electr&oacute;nica de acceso, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[73][2] = "La fecha y hora oficial del Real Instituto y Observatorio de la Armada, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible.";
 choices[73][3] = "La fecha y hora oficial de la sede electr&oacute;nica del Ministerio de Pol&iacute;tica Territorial y Administraci&oacute;n P&uacute;blica, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 answers[73] = choices[73][1];
 units[73] = "43";
 comments[73] = "Id Pregunta: 9592. Examen TIC A2 2011 interna";


//  Id pregunta: 9847 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;C&oacute;mo se denomina el m&oacute;dulo criptogr&aacute;fico necesario para poder operar con el DNI electr&oacute;nico en un entorno UNIX?";
 choices[74]= new Array();
 choices[74][0] = "Cryptographic Service Provider (CSP).";
 choices[74][1] = "PKCS#11.";
 choices[74][2] = "PGP.";
 choices[74][3] = "Smart Card Mini-Driver.";
 answers[74] = choices[74][1];
 units[74] = "111";
 comments[74] = "Id Pregunta: 9847. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9853 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?: ";
 choices[75]= new Array();
 choices[75][0] = "La clave privada del emisor es la usada para garantizar la confidencialidad.";
 choices[75][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio e integridad entre otros. ";
 choices[75][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, para servicios de confidencialidad, proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos. ";
 choices[75][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es m&aacute;s sencilla que la existente en los sistemas convecionales sim&eacute;tricos de clave secreta. ";
 answers[75] = choices[75][0];
 units[75] = "111";
 comments[75] = "Id Pregunta: 9853. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 9905 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  La finalidad principal de la Gesti&oacute;n de Proyectos seg&uacute;n M&eacute;trica v3 es la planificaci&oacute;n, el seguimiento y control de:";
 choices[76]= new Array();
 choices[76][0] = "Las actividades y de los recursos humanos que intervienen en el desarrollo de un Sistema de Informaci&oacute;n (S.I).";
 choices[76][1] = "Las actividades que intervienen en el desarrollo de un S.I.";
 choices[76][2] = "Las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 choices[76][3] = "Los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 answers[76] = choices[76][2];
 units[76] = "86";
 comments[76] = "Id Pregunta: 9905. TIC A2, Examen 2013";


//  Id pregunta: 9919 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Dentro del dise&ntilde;o conceptual de datos, en una jerarqu&iacute;a de generalizaci&oacute;n se dice que un subconjunto (caso particular de generalizaci&oacute;n con una sola entidad como subentidad) siempre es una jerarqu&iacute;a:";
 choices[77]= new Array();
 choices[77][0] = "Total y exclusiva.";
 choices[77][1] = "Parcial y superpuesta.";
 choices[77][2] = "Parcial y exclusiva.";
 choices[77][3] = "Total y superpuesta.";
 answers[77] = choices[77][2];
 units[77] = "58";
 comments[77] = "Id Pregunta: 9919. TIC A2, Examen 2013";


//  Id pregunta: 9963 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Un almac&eacute;n de datos (Data Warehouse) NO se caracteriza por ser:";
 choices[78]= new Array();
 choices[78][0] = "Integrado, los datos en el almac&eacute;n de datos deben integrarse en una estructura consistente.";
 choices[78][1] = "Orientado por temas, el almac&eacute;n de datos est&aacute; organizado de acuerdo con los temas m&aacute;s importantes para la organizaci&oacute;n";
 choices[78][2] = "Variable en el tiempo, los datos en el almac&eacute;n de datos siempre se cargan con una referencia temporal bajo la que son v&aacute;lidos.";
 choices[78][3] = "Vol&aacute;til, los datos en el almac&eacute;n de datos son le&iacute;dos, actualizados y eliminados.";
 answers[78] = choices[78][3];
 units[78] = "68,71";
 comments[78] = "Id Pregunta: 9963. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10016 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  La instrucci&oacute;n que aborta la transacci&oacute;n en un SGBD y la hace terminar en forma no exitosa se denomina:";
 choices[79]= new Array();
 choices[79][0] = "Undo.";
 choices[79][1] = "Rollback.";
 choices[79][2] = "Two Phase Commit.";
 choices[79][3] = "Commit.";
 answers[79] = choices[79][1];
 units[79] = "57";
 comments[79] = "Id Pregunta: 10016. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10082 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l NO es un proceso principal de acuerdo a la ISO 12207";
 choices[80]= new Array();
 choices[80][0] = "Adquisici&oacute;n";
 choices[80][1] = "Desarrollo";
 choices[80][2] = "Suministro";
 choices[80][3] = "Gesti&oacute;n";
 answers[80] = choices[80][3];
 units[80] = "76";
 comments[80] = "Id Pregunta: 10082. NULL";


//  Id pregunta: 10085 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; tipo de prototipo es m&aacute;s adecuado si se conocen bien todos los requisitos de partida?";
 choices[81]= new Array();
 choices[81][0] = "R&aacute;pido";
 choices[81][1] = "Evolutivo";
 choices[81][2] = "Incremental";
 choices[81][3] = "Cualquiera de los anteriores";
 answers[81] = choices[81][2];
 units[81] = "76";
 comments[81] = "Id Pregunta: 10085. NULL";


//  Id pregunta: 10101 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En el an&aacute;lisis estructurado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[82]= new Array();
 choices[82][0] = "El Diccionario de Datos suele estar orientado a los desarrolladores.";
 choices[82][1] = "El Diccionario de Datos suele estar orientado a los usuarios.";
 choices[82][2] = "El Directorio de Datos suele estar orientado a los desarrolladores.";
 choices[82][3] = "La b) y la c) son correctas.";
 answers[82] = choices[82][3];
 units[82] = "81";
 comments[82] = "Id Pregunta: 10101. NULL";


//  Id pregunta: 10105 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Indique cu&aacute;l no es una t&eacute;cnica de an&aacute;lisis estructurado";
 choices[83]= new Array();
 choices[83][0] = "SADR";
 choices[83][1] = "SASS";
 choices[83][2] = "SRD";
 choices[83][3] = "SADT";
 answers[83] = choices[83][0];
 units[83] = "81";
 comments[83] = "Id Pregunta: 10105. NULL";


//  Id pregunta: 10120 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Los enlaces por los que se env&iacute;an datos de m&aacute;s de una VLAN se denominan:";
 choices[84]= new Array();
 choices[84][0] = "M&uacute;ltiples";
 choices[84][1] = "Trunk";
 choices[84][2] = "VLAN- Link";
 choices[84][3] = "Data-Link";
 answers[84] = choices[84][1];
 units[84] = "102";
 comments[84] = "Id Pregunta: 10120. ";


//  Id pregunta: 10260 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Si se deniega al interesado el ejercicio de su derecho de cancelaci&oacute;n de datos de car&aacute;cter personal, &eacute;ste puede:";
 choices[85]= new Array();
 choices[85][0] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso de alzada";
 choices[85][1] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso contencioso-administrativo";
 choices[85][2] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos cuyos actos no son recurribles ni en v&iacute;a administrativa ni judicial";
 choices[85][3] = "Todas son incorrectas";
 answers[85] = choices[85][1];
 units[85] = "29";
 comments[85] = "Id Pregunta: 10260. Art&iacute;culo 18.2 y 18.4 de la Ley 15/1999";


//  Id pregunta: 10283 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En Sql Server 2012 &iquest;qu&eacute; comando se utiliza para configurar una conexi&oacute;n de servidor de informes?";
 choices[86]= new Array();
 choices[86][0] = "rdlccfg";
 choices[86][1] = "tsmrpt";
 choices[86][2] = "rptsetup";
 choices[86][3] = "rsconfig";
 answers[86] = choices[86][3];
 units[86] = "58";
 comments[86] = "Id Pregunta: 10283. TIC A2, libre, examen 2013";


//  Id pregunta: 10553 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes satisface una autenticaci&oacute;n de usuario de dos factores?";
 choices[87]= new Array();
 choices[87][0] = "Escaneo de iris y de huella dactilar";
 choices[87][1] = "Identificador de usuario y sistema GPS";
 choices[87][2] = "Smartcard que requiere un c&oacute;digo PIN";
 choices[87][3] = "Identificador de usuario m&aacute;s contrase&ntilde;a";
 answers[87] = choices[87][2];
 units[87] = "31, 32, 33";
 comments[87] = "Id Pregunta: 10553. Algo que  tienes (smartcard) + algo que conoces (c&oacute;digo PIN)";


//  Id pregunta: 10573 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;A qu&eacute; corresponden las siglas STORK?";
 choices[88]= new Array();
 choices[88][0] = "Secure Transport Over bRoad toKens";
 choices[88][1] = "Security idenTity acrOss boRders linKed";
 choices[88][2] = "Safe idenTity fOr Roaming Knowledge";
 choices[88][3] = "Safe noTes stOring encRypted Keys";
 answers[88] = choices[88][1];
 units[88] = "44";
 comments[88] = "Id Pregunta: 10573. ";


//  Id pregunta: 10644 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;les son los dos modelos de autoevaluaci&oacute;n seg&uacute;n ISO 9004?";
 choices[89]= new Array();
 choices[89][0] = "El de los Criterios Operativos y el de los Criterios Aumentados.";
 choices[89][1] = "El de Estimulaci&oacute;n y el de Mantenimiento.";
 choices[89][2] = "El de Aproximaci&oacute;n Formal y el de Aproximaci&oacute;n Reactiva.";
 choices[89][3] = "El de los Elementos Clave y el de los Elementos Detallados";
 answers[89] = choices[89][3];
 units[89] = "92";
 comments[89] = "Id Pregunta: 10644. ";


//  Id pregunta: 10833 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En la teor&iacute;a de bases de datos relacionales, cuanto m&aacute;s alta sea la forma normal aplicable a una tabla:";
 choices[90]= new Array();
 choices[90][0] = "Menor ser&aacute; la cohesi&oacute;n relacional.";
 choices[90][1] = "Menor ser&aacute; el acoplamiento relacional.";
 choices[90][2] = "Menos vulnerable ser&aacute; a inconsistencias y anomal&iacute;as.";
 choices[90][3] = "M&aacute;s vulnerable ser&aacute; a inconsistencias y anomal&iacute;as, pero ser&aacute; m&aacute;s eficiente.";
 answers[90] = choices[90][2];
 units[90] = "80";
 comments[90] = "Id Pregunta: 10833. Examen GSI 2014";


//  Id pregunta: 10884 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En una red Ethernet 10BASE-T, un paquete de 1000 KBytes se transmite en:";
 choices[91]= new Array();
 choices[91][0] = "0,81 ms";
 choices[91][1] = "8,19 ms";
 choices[91][2] = "819 ms";
 choices[91][3] = "81,9 ms";
 answers[91] = choices[91][2];
 units[91] = "99";
 comments[91] = "Id Pregunta: 10884. Examen GSI 2014";


//  Id pregunta: 10907 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ala la afirmaci&oacute;n INCORRECTA:";
 choices[92]= new Array();
 choices[92][0] = "La tecnolog&iacute;a VDSL permite transmisi&oacute;n asim&eacute;trica o sim&eacute;trica.";
 choices[92][1] = "VDSL utiliza 2 canales para transmisi&oacute;n de datos, uno para subida y el otro para descarga.";
 choices[92][2] = "La tecnolog&iacute;a HFC es una combinaci&oacute;n de cable y fibra &oacute;ptica.";
 choices[92][3] = "La tecnolog&iacute;a FTTH permite que la fibra &oacute;ptica llegue hasta la casa del cliente.";
 answers[92] = choices[92][1];
 units[92] = "107";
 comments[92] = "Id Pregunta: 10907. Examen GSI 2014";


//  Id pregunta: 10909 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Uno de los problemas en cuanto a la calidad del servicio (QoS) de una red VoIP es la latencia, se&ntilde;ale su definici&oacute;n correcta:";
 choices[93]= new Array();
 choices[93][0] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, p&eacute;rdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[93][1] = "Es una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[93][2] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[93][3] = "P&eacute;rdida que se produce al usar protocolos no orientados a conexi&oacute;n que no reenv&iacute;an paquetes perdidos. Adem&aacute;s tambi&eacute;n se produce por descartes de paquetes que no llegan a tiempo al receptor.";
 answers[93] = choices[93][2];
 units[93] = "108, 109";
 comments[93] = "Id Pregunta: 10909. Examen GSI 2014";


//  Id pregunta: 10919 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Si se quiere interconectar mediante fibra &oacute;ptica dos dispositivos separados a menos de 100 metros en un CPD a una velocidad de 40Gb/s, la categor&iacute;a m&iacute;nima de fibra &oacute;ptica a usar deber&iacute;a ser:";
 choices[94]= new Array();
 choices[94][0] = "OM2";
 choices[94][1] = "OM3";
 choices[94][2] = "OM4";
 choices[94][3] = "OM5";
 answers[94] = choices[94][2];
 units[94] = "103, 107";
 comments[94] = "Id Pregunta: 10919. Examen GSI 2014";


//  Id pregunta: 11018 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;C&oacute;mo se llaman a las auditor&iacute;as especializadas en descubrir fraudes y delitos, en obtener evidencias v&aacute;lidas para su uso por las autoridades competente, policiales o judiciales?";
 choices[95]= new Array();
 choices[95][0] = "Auditor&iacute;as de regularidad";
 choices[95][1] = "Auditor&iacute;as operativas o de gesti&oacute;n";
 choices[95][2] = "Auditor&iacute;as forenses";
 choices[95][3] = "Auditor&iacute;as de los sistemas de informaci&oacute;n";
 answers[95] = choices[95][2];
 units[95] = "31";
 comments[95] = "Id Pregunta: 11018. ";


//  Id pregunta: 11041 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; versi&oacute;n de Java incorpora de forma completa la librer&iacute;a JavaFX?";
 choices[96]= new Array();
 choices[96][0] = "5";
 choices[96][1] = "6";
 choices[96][2] = "7";
 choices[96][3] = "8";
 answers[96] = choices[96][3];
 units[96] = "60";
 comments[96] = "Id Pregunta: 11041. Viiene incluida desde la versi&oacute;n 7u6, pero no se incorpora de forma completa hasta la versi&oacute;n 8";


//  Id pregunta: 11117 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seleccione la respuesta verdadera respecto a la publicidad de los procedimientos negociados:";
 choices[97]= new Array();
 choices[97][0] = "No se requiere publicidad en el caso de contratos cuyo valor estimado sea IGUAL o MENOR de 120.000";
 choices[97][1] = "El &oacute;rgano de contrataci&oacute;n solicitar&aacute; ofertas, al menos a 5 empresas capaces de realizar el objeto del contrato, cuando ello sea posible.";
 choices[97][2] = "El procedimiento permite la negociaci&oacute;n de las condiciones del contrato.";
 choices[97][3] = "Es el procedimiento ordinario de adjudicaci&oacute;n en los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado.";
 answers[97] = choices[97][2];
 units[97] = "41";
 comments[97] = "Id Pregunta: 11117. ";


//  Id pregunta: 11172 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes procesos no forma parte del Soporte de Servicio seg&uacute;n la biblioteca ITIL v3?";
 choices[98]= new Array();
 choices[98][0] = "Gesti&oacute;n de Incidencias";
 choices[98][1] = "Gesti&oacute;n de Problemas";
 choices[98][2] = "Gesti&oacute;n de Eventos";
 choices[98][3] = "Gesti&oacute;n del Cambio";
 answers[98] = choices[98][2];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11172. ";


//  Id pregunta: 11666 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El perfil de XAdES en el que se a&ntilde;aden los certificados a los documentos firmados es:";
 choices[99]= new Array();
 choices[99][0] = "XAdES-A";
 choices[99][1] = "XAdES-C";
 choices[99][2] = "XAdES-X-L";
 choices[99][3] = "XAdES-X";
 answers[99] = choices[99][2];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11666. ";


