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

//  Id pregunta: 317 AÃ±o de creación de pregunta: 2009-01-01
 questions[0]= "1)  La LOPD no es de aplicaci&oacute;n a:";
 choices[0]= new Array();
 choices[0][0] = "Los ficheros creados por las fuerzas y cuerpos de seguridad recogidos para fines administrativos";
 choices[0][1] = "Los datos recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones legalmente establecidas";
 choices[0][2] = "Los ficheros automatizados con datos personales de car&aacute;cter tributario";
 choices[0][3] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 answers[0] = choices[0][3];
 units[0] = "29";
 comments[0] = "Id Pregunta: 317. ";


//  Id pregunta: 368 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Los est&aacute;ndares en la industria y la tecnolog&iacute;a deben ser producidos:";
 choices[1]= new Array();
 choices[1][0] = "Siempre, en todos los casos, para evitar monopolios";
 choices[1][1] = "Cuando la tecnolog&iacute;a est&eacute; madura pero a&uacute;n no hay inversiones en implementaciones propietarias, para beneficiar tanto a usuarios como a la industria";
 choices[1][2] = "Antes de que madure la tecnolog&iacute;a, para contribuir a una madurez consensuada";
 choices[1][3] = "Nunca, ya que pone en desventaja a aquellos que comenzaron a investigar en dicha tecnolog&iacute;a";
 answers[1] = choices[1][1];
 units[1] = "42";
 comments[1] = "Id Pregunta: 368. ";


//  Id pregunta: 532 AÃ±o de creación de pregunta: 2003-01-01
 questions[2]= "3)  La interfaz de M&eacute;tica V3 denominada &ldquo;Gesti&oacute;n de proyectos&rdquo;";
 choices[2]= new Array();
 choices[2][0] = "Contempla tanto el desarrollo de nuevos proyectos, como la ampliaci&oacute;n y mejora de los ya existentes (mantenimiento de sistemas de informaci&oacute;n)";
 choices[2][1] = "Consta de cuatro tipos de actividades; de inicio del proyecto , de seguimiento y control de finalizaci&oacute;n del proyecto, y de mantenimiento.";
 choices[2][2] = "Tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos no materiales";
 choices[2][3] = "Se emplea en la Administraci&oacute;n P&uacute;blica en sustituci&oacute;n de Eurom&eacute;todo";
 answers[2] = choices[2][0];
 units[2] = "86";
 comments[2] = "Id Pregunta: 532. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 808 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  A la vista de la tabla siguiente: VENTAS (COD_PIEZA, COD_ALMACEN, CANTIDAD, FECHA, DIRECCION_ALMACEN), donde la clave principal es  COD_PIEZA y COD_ALMACEN, podemos decir que:";
 choices[3]= new Array();
 choices[3][0] = "Cumple con la segunda forma normal";
 choices[3][1] = "Cumple con la segunda pero no con la tercera forma normal";
 choices[3][2] = "Cumple hasta la tercera forma normal pero no con la cuarta formal";
 choices[3][3] = "No cumple la segunda forma normal";
 answers[3] = choices[3][3];
 units[3] = "58";
 comments[3] = "Id Pregunta: 808. ";


//  Id pregunta: 892 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;les son los condicionantes que originan la necesidad espec&iacute;fica de gestionar los entornos distribuidos?:";
 choices[4]= new Array();
 choices[4][0] = "Mayor complejidad de sistemas por su heterogeneidad, dispersi&oacute;n geogr&aacute;fica de los sistemas y recursos, variedad de servicios y distribuci&oacute;n de funciones de los aplicativos";
 choices[4][1] = "Mayores costes de mantenimiento de equipamiento f&iacute;sico y aplicaciones, menores costes de operaci&oacute;n, usuarios inoperativos y dispersi&oacute;n geogr&aacute;fica de los sistemas";
 choices[4][2] = "Dispersi&oacute;n geogr&aacute;fica de los sistemas, mayor coste del equipamiento que en soluciones centralizadas pero menores costes de operaci&oacute;n y aplicativos con funciones distribuidas";
 choices[4][3] = "Todos las respuestas anteriores son correctas";
 answers[4] = choices[4][0];
 units[4] = "50";
 comments[4] = "Id Pregunta: 892. ";


//  Id pregunta: 937 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; paradigma de programaci&oacute;n reproduce mas fielmente el funcionamiento de un computador con arquitectura Von Neuman?:";
 choices[5]= new Array();
 choices[5][0] = "El l&oacute;gico";
 choices[5][1] = "El funcional";
 choices[5][2] = " El imperativo";
 choices[5][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[5] = choices[5][2];
 units[5] = "86";
 comments[5] = "Id Pregunta: 937. NULL";


//  Id pregunta: 996 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Disponemos de un multiplexor por divisi&oacute;n en el tiempo (TDM) al que se conectan 8 terminales utilizando enlaces de 1200 bps. &iquest;Cu&aacute;l deber&aacute; ser la velocidad de la l&iacute;nea de salida del multiplexor?:";
 choices[6]= new Array();
 choices[6][0] = "Inferior a 9.600 bps";
 choices[6][1] = "Igual o superior a 9.600 bpos";
 choices[6][2] = "Superior a 19.200 bps";
 choices[6][3] = "Igual a 1.200 bps";
 answers[6] = choices[6][1];
 units[6] = "102";
 comments[6] = "Id Pregunta: 996. ";


//  Id pregunta: 1075 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En el campo de la integraci&oacute;n de los sistemas expertos:";
 choices[7]= new Array();
 choices[7][0] = "Los gestores inteligentes de bases de datos modelizan las descripciones funcionales de los procesos inferenciales b&aacute;sicos";
 choices[7][1] = "Las arquitecturas de sistemas de gesti&oacute;n de bases de datos se pueden optimizar incorporando m&oacute;dulos de optimizaci&oacute;n basados en t&eacute;cnicas heur&iacute;sticas de inteligencia artificial";
 choices[7][2] = "Un sistema de gesti&oacute;n de bases de datos deductivo es aqu&eacute;l en que los criterios de selecci&oacute;n pueden deducirse directamente de las restricciones de integridad";
 choices[7][3] = "Para la formalizaci&oacute;n de sistemas deductivos de bases de datos nunca se utilizan las t&eacute;cnicas de deducci&oacute;n autom&aacute;tica de la l&oacute;gica de primer orden";
 answers[7] = choices[7][1];
 units[7] = "64";
 comments[7] = "Id Pregunta: 1075. ";


//  Id pregunta: 1144 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En un sistema monoprocesador con mezcla de procesos de c&aacute;lculo puro y procesos intensivos en E/S, el uso de una politica de planificaci&oacute;n FIFO provoca:";
 choices[8]= new Array();
 choices[8][0] = "Un tiempo de ejecuci&oacute;n excelente para los procesos con E/S intensiva o interactiva";
 choices[8][1] = "Una gran ineficiencia, ya que los procesos de calculo intensivo se adue&ntilde;an de la CPU";
 choices[8][2] = "Una respuesta equilibrada, sin aprovechar el sistema en su totalidad";
 choices[8][3] = "Todas son falsas";
 answers[8] = choices[8][1];
 units[8] = "52";
 comments[8] = "Id Pregunta: 1144. ";


//  Id pregunta: 1225 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  La instrucci&oacute;n &quot;SELECT DISTINCT&quot; en SQL:";
 choices[9]= new Array();
 choices[9][0] = "Devuelve los resultados de la consulta, eliminando los duplicados";
 choices[9][1] = "Devuelve los datos de la tabla que no estaban en la consulta inmediatamente anterior";
 choices[9][2] = "Permite obtener los datos clave que distinguen a una fila de otra";
 choices[9][3] = "Todas las anteriores respuestas son falsas";
 answers[9] = choices[9][0];
 units[9] = "58";
 comments[9] = "Id Pregunta: 1225. ";


//  Id pregunta: 1253 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Las aplicaciones cliente/servidor suelen clasificarse en:";
 choices[10]= new Array();
 choices[10][0] = "Aplicaciones de presentaci&oacute;n, de negocio o de gesti&oacute;n de datos";
 choices[10][1] = "Aplicaciones distribuidas o centralizadas";
 choices[10][2] = "Aplicaciones middleware y OLTP";
 choices[10][3] = "Aplicaciones de dos niveles y aplicaciones de tres niveles";
 answers[10] = choices[10][3];
 units[10] = "50";
 comments[10] = "Id Pregunta: 1253. ";


//  Id pregunta: 1281 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Los programas fuente Java:";
 choices[11]= new Array();
 choices[11][0] = "Se compilan siempre";
 choices[11][1] = "Nunca se compilan, excepto para las m&aacute;quinas con procesador Java";
 choices[11][2] = "Siempre se interpretan para que puedan ejecutarse en m&aacute;quinas con diferente procesador, excepto para las m&aacute;quinas con procesador Java en que son ejecutables directamente";
 choices[11][3] = "Hay partes compiladas y partes interpretadas";
 answers[11] = choices[11][0];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1281. Siempre se compilan a Bytecode.";


//  Id pregunta: 1300 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Para la traducci&oacute;n de direcciones virtuales a f&iacute;sicas se utiliza:";
 choices[12]= new Array();
 choices[12][0] = "La paginaci&oacute;n";
 choices[12][1] = "La segmentaci&oacute;n";
 choices[12][2] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 choices[12][3] = "Todas son falsas";
 answers[12] = choices[12][2];
 units[12] = "52";
 comments[12] = "Id Pregunta: 1300. ";


//  Id pregunta: 1752 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  Se&ntilde;ala la falsa referente a SQL";
 choices[13]= new Array();
 choices[13][0] = "Las funciones agregadas devuelven un &uacute;nico valor ";
 choices[13][1] = "La cla&uacute;sula HAVING se utiliza para especificar las condiciones que deben reunir los registros nulos a seleccionar";
 choices[13][2] = "SELF JOIN es una t&eacute;cnica empleada para conseguir el producto cartesiano de una tabla consigo misma";
 choices[13][3] = "La cla&uacute;sula CONSTRAINT permite crear o eliminar &iacute;ndices";
 answers[13] = choices[13][1];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1752. NULL";


//  Id pregunta: 1780 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Se&ntilde;ale cual de estos entornos de desarrollo en Java no es gratuito";
 choices[14]= new Array();
 choices[14][0] = "Jdeveloper";
 choices[14][1] = "Eclipse";
 choices[14][2] = "JBuilder";
 choices[14][3] = "NetBeans";
 answers[14] = choices[14][2];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1780. NULL";


//  Id pregunta: 1832 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  OLAP significa:";
 choices[15]= new Array();
 choices[15][0] = "On-Line Automatic Prediction.";
 choices[15][1] = "On-Line Analytical Prediction.";
 choices[15][2] = "On-Line Automatic Processing.";
 choices[15][3] = "On-Line Analytical Processing.";
 answers[15] = choices[15][3];
 units[15] = "68";
 comments[15] = "Id Pregunta: 1832. ";


//  Id pregunta: 1847 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Se&ntilde;ale la falsa:";
 choices[16]= new Array();
 choices[16][0] = "Bonita es un motor de workflow de sw libre que implementa las especificaciones de la WfMC.";
 choices[16][1] = "Evolution es un cliente para correo electr&oacute;nico y workgroup para sistemas Linux.";
 choices[16][2] = "JoNAS es un servidor de aplicaciones de SW libre";
 choices[16][3] = "Todas son incorrectas";
 answers[16] = choices[16][3];
 units[16] = "71";
 comments[16] = "Id Pregunta: 1847. ";


//  Id pregunta: 1868 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;D&oacute;nde se recoge la posici&oacute;n de los contactos del chip enuna tarjetainteligente?";
 choices[17]= new Array();
 choices[17][0] = "ISO 7816-1";
 choices[17][1] = "ISO 7816-2";
 choices[17][2] = "ISO 7816-3";
 choices[17][3] = "ISO 7816-4";
 answers[17] = choices[17][1];
 units[17] = "74";
 comments[17] = "Id Pregunta: 1868. NULL";


//  Id pregunta: 2178 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La diferencia entre t&eacute;cnicas y pr&aacute;cticas en METRICA 3 es:";
 choices[18]= new Array();
 choices[18][0] = "Las pr&aacute;cticas se apoyan en est&aacute;ndares, mientras que las t&eacute;cnicas no";
 choices[18][1] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en est&aacute;ndares, mientras que las pr&aacute;cticas no precisan cumplir criterios establecidos";
 choices[18][2] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en la experiencia, mientras que las pr&aacute;cticas pueden ser propias";
 choices[18][3] = "Tanto las t&eacute;cnicas como las pr&aacute;cticas son heur&iacute;sticas y no son esclusivas de METRICA 3";
 answers[18] = choices[18][1];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2178. NULL";


//  Id pregunta: 2224 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Seg&uacute;n McCall, a la extensi&oacute;n por la cual un programa ejecuta la funci&oacute;n buscada con la precisi&oacute;n requerida se llama:";
 choices[19]= new Array();
 choices[19][0] = "Correcci&oacute;n";
 choices[19][1] = "Fiabilidad";
 choices[19][2] = "Eficiencia";
 choices[19][3] = "Integridad";
 answers[19] = choices[19][1];
 units[19] = "88";
 comments[19] = "Id Pregunta: 2224. ";


//  Id pregunta: 2282 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El modelo de ciclo de vida en cascada:";
 choices[20]= new Array();
 choices[20][0] = "Se compone de una serie de fases en paralelo, siendo necesario que concluyan todas ellas para iniciar la fase del nivel siguiente";
 choices[20][1] = "No contempla la divisi&oacute;n en fases, sino que es una secuencia encadenada de acciones e interacciones";
 choices[20][2] = "Est&aacute; especialmente indicado para sistemas dise&ntilde;ados con orientaci&oacute;n a objetos";
 choices[20][3] = "Se compone de una serie de fases que se suceden secuencialmente, gener&aacute;ndose en cada fase resultados que ser&aacute;n necesarios para iniciar la siguiente fase";
 answers[20] = choices[20][3];
 units[20] = "76";
 comments[20] = "Id Pregunta: 2282. ";


//  Id pregunta: 2419 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El nivel b&aacute;sico de comprensi&oacute;n que determina el n&uacute;mero preciso de sonidos con valor distinto es el nivel:";
 choices[21]= new Array();
 choices[21][0] = "Ac&uacute;stico";
 choices[21][1] = "Fon&eacute;tico";
 choices[21][2] = "Fonol&oacute;gico";
 choices[21][3] = "L&eacute;xico-sint&aacute;ctico";
 answers[21] = choices[21][2];
 units[21] = "94";
 comments[21] = "Id Pregunta: 2419. ";


//  Id pregunta: 2708 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  Tenemos dos discos sobre los que est&aacute; instalada una base de datos, y adem&aacute;s en el disco 2 se ubica el fichero de log backup. Sabiendo que la copia de la base de datos es posterior a la del fichero de log cual ser&iacute;a la  forma de proceder si el disco 2 cae";
 choices[22]= new Array();
 choices[22][0] = "Restaurar la base completa con su &uacute;ltima copia y rehacer las transacciones manualmente a partir de esa fecha";
 choices[22][1] = "Restaurar la base y recuperar autom&aacute;ticamente del fichero de log";
 choices[22][2] = "Restaurar la parte de las tablas y ficheros del disco dos y luego manualmente rehacer las transcciones";
 choices[22][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[22] = choices[22][0];
 units[22] = "96";
 comments[22] = "Id Pregunta: 2708. NULL";


//  Id pregunta: 2739 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes elementos no es propio de un DFD (Diagrama de Flujo de Datos)?";
 choices[23]= new Array();
 choices[23][0] = "Entidades externas al sistema";
 choices[23][1] = "Bucles";
 choices[23][2] = "Almac&eacute;n de datos";
 choices[23][3] = "Procesos";
 answers[23] = choices[23][1];
 units[23] = "79,81";
 comments[23] = "Id Pregunta: 2739. ";


//  Id pregunta: 2854 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  Un gestor documental";
 choices[24]= new Array();
 choices[24][0] = "permite crear publicaciones a partir del contenido gestionado";
 choices[24][1] = "incluye funcionalidades propias de un gestor de contenidos";
 choices[24][2] = "se encarga de la gesti&oacute;n y organizaci&oacute;n de documentaci&oacute;n generada por otras aplicaciones";
 choices[24][3] = "ninguna de las anteriores";
 answers[24] = choices[24][2];
 units[24] = "95";
 comments[24] = "Id Pregunta: 2854. NULL";


//  Id pregunta: 2894 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes planes no formar&iacute;a parte de un Plan de Contingencias?:";
 choices[25]= new Array();
 choices[25][0] = "Plan de emergencia";
 choices[25][1] = "Plan de sistemas";
 choices[25][2] = "Plan de recuperaci&oacute;n";
 choices[25][3] = "Plan de respaldo";
 answers[25] = choices[25][1];
 units[25] = "31";
 comments[25] = "Id Pregunta: 2894. ";


//  Id pregunta: 3039 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes objetos no es un objeto del modelo de objetos de ASP 3.0?:";
 choices[26]= new Array();
 choices[26][0] = "RESPONSE";
 choices[26][1] = "SESSION";
 choices[26][2] = "SERVER";
 choices[26][3] = "FORM";
 answers[26] = choices[26][3];
 units[26] = "115";
 comments[26] = "Id Pregunta: 3039. ";


//  Id pregunta: 3175 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes no corresponde a una definici&oacute;n correcta de especificaci&oacute;n de la ITU-T?:";
 choices[27]= new Array();
 choices[27][0] = "X.25: interfaz entre ETD y ETCD para terminales en modo paquete en redes p&uacute;blicas de conmutaci&oacute;n de paquetes";
 choices[27][1] = "X.29: define los mecanismos y protocolos para la conexi&oacute;n de terminales as&iacute;ncronos a trav&eacute;s de la red X25, usando un PAD";
 choices[27][2] = "X.32: interfaz entre ETD y ETCD para terminales telegr&aacute;ficos accediendo a redes p&uacute;blicas de conmutaci&oacute;n de paquetes v&iacute;a red de conmutaci&oacute;n de circuitos";
 choices[27][3] = "X.75: interconexi&oacute;n de redes p&uacute;blicas de conmutaci&oacute;n de paquetes y conexi&oacute;n de nodos de las mismas";
 answers[27] = choices[27][2];
 units[27] = "109";
 comments[27] = "Id Pregunta: 3175. ";


//  Id pregunta: 3206 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El cable de par trenzado no apantallado, categor&iacute;a 5, de 2 pares:";
 choices[28]= new Array();
 choices[28][0] = "Soporta hasta 10 Mbps";
 choices[28][1] = "Soporta hasta 20 Mbps";
 choices[28][2] = "Soporta hasta 100 Mbps";
 choices[28][3] = "Soporta hasta 5 Mbps";
 answers[28] = choices[28][2];
 units[28] = "99";
 comments[28] = "Id Pregunta: 3206. NULL";


//  Id pregunta: 3264 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;En cu&aacute;l de los siguientes casos no recomendar&iacute;a utilizar una red VSAT?:";
 choices[29]= new Array();
 choices[29][0] = "En Redes de Area Extensa (WAN)";
 choices[29][1] = "En organizaci&oacute;n muy dispersa en la que s&oacute;lo es necesario realizar actualizaciones peri&oacute;dicas de informaci&oacute;n";
 choices[29][2] = "En entorno transaccional fuerte";
 choices[29][3] = "En organizaciones con oficinas en lugares remotos sin posibilidad de acceso al servicio telef&oacute;nico";
 answers[29] = choices[29][2];
 units[29] = "107";
 comments[29] = "Id Pregunta: 3264. VSAT presenta velocidades del orden de 56 a 64 Kbps, no recomendable para grandes vol&uacute;menes de transmisi&oacute;n de datos.";


//  Id pregunta: 3321 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Sabe qui&eacute;n fue el impulsor de Bluetooth?:";
 choices[30]= new Array();
 choices[30][0] = "Nokia";
 choices[30][1] = "Sony";
 choices[30][2] = "Ericsson";
 choices[30][3] = "Nortel";
 answers[30] = choices[30][2];
 units[30] = "107";
 comments[30] = "Id Pregunta: 3321. NULL";


//  Id pregunta: 3496 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  En el modelado de tr&aacute;fico basado en LIFO se usan los siguientes modelos:";
 choices[31]= new Array();
 choices[31][0] = "M/M/1.";
 choices[31][1] = "M/M/1/1.";
 choices[31][2] = "M/G/1.";
 choices[31][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[31] = choices[31][3];
 units[31] = "";
 comments[31] = "Id Pregunta: 3496. *: LIFO";


//  Id pregunta: 3510 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  En el protocolo HTTP, el m&eacute;todo de cliente TRACE:";
 choices[32]= new Array();
 choices[32][0] = "Pide al servidor que se declare a s&iacute; mismo dentro de la cabecera";
 choices[32][1] = "Pide a los proxies que se declaren a s&iacute; mismo dentro de la cabecera";
 choices[32][2] = "No existe";
 choices[32][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[32] = choices[32][1];
 units[32] = "112";
 comments[32] = "Id Pregunta: 3510. ";


//  Id pregunta: 3532 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  En las LAN el proceso 'token passing' o paso de testigo supone:";
 choices[33]= new Array();
 choices[33][0] = "Escuchar el tr&aacute;fico del testigo y transmitir si no se detecta nada";
 choices[33][1] = "Utilizar la posesi&oacute;n del testigo para garantizar el derecho a transmitir";
 choices[33][2] = "A&ntilde;adir tramas de testigo a las tramas de datos para acceder a la red";
 choices[33][3] = "El testigo circula en un anillo hasta que alcanza su destino";
 answers[33] = choices[33][1];
 units[33] = "101";
 comments[33] = "Id Pregunta: 3532. ";


//  Id pregunta: 3638 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  La representaci&oacute;n autom&aacute;tica de IPv4 sobre IPv6 (para que nodos &quot;s&oacute;lo IPv4&quot; puedan trabajar con IPv6) se expresa con la notaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "::&lt;direcci&oacute;n_IPv4&gt;";
 choices[34][1] = "::FFFF:&lt;direcci&oacute;n_IPv4&gt;";
 choices[34][2] = ":&lt;direcci&oacute;n_IPv4&gt;";
 choices[34][3] = "&lt;direcci&oacute;n_IPv4&gt;::";
 answers[34] = choices[34][1];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3638. NULL";


//  Id pregunta: 3725 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Los mensajes de respuesta HTTP de c&oacute;digo 5xx se corresponden con:";
 choices[35]= new Array();
 choices[35][0] = "error en el cliente";
 choices[35][1] = "redirecci&oacute;n por cambio de ubicaci&oacute;n del objeto pedido";
 choices[35][2] = "error en el servidor";
 choices[35][3] = "petici&oacute;n con &eacute;xito";
 answers[35] = choices[35][2];
 units[35] = "112";
 comments[35] = "Id Pregunta: 3725. ";


//  Id pregunta: 3739 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Los puentes transparentes:";
 choices[36]= new Array();
 choices[36][0] = "Son lo mismo que los puentes 'Source Routing'";
 choices[36][1] = "Eliminan la direcci&oacute;n origen de cada trama que reciben";
 choices[36][2] = "No existen";
 choices[36][3] = "Aprenden las direcciones MAC de cada trama recibida y las guardan temporalmente, asoci&aacute;ndolas a un puerto.";
 answers[36] = choices[36][3];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3739. ";


//  Id pregunta: 3796 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Respecto a WAP, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[37]= new Array();
 choices[37][0] = "Sustituye a GSM";
 choices[37][1] = "Es una evoluci&oacute;n de GPRS";
 choices[37][2] = "Puede implementarse sobre GPRS";
 choices[37][3] = "S&oacute;lo puede implementarse sobre GSM";
 answers[37] = choices[37][2];
 units[37] = "108";
 comments[37] = "Id Pregunta: 3796. ";


//  Id pregunta: 3825 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  Se&ntilde;ale la opci&oacute;n que mejor indica la utilizaci&oacute;n de los cables de cuadretes:";
 choices[38]= new Array();
 choices[38][0] = "Los cables de cuadretes son indicados en transmisiones de baja frecuencia y en largas distancias";
 choices[38][1] = "Los cables de cuadretes se deben utilizar para transmisi&oacute;n de se&ntilde;ales de baja frecuencia y en distancias medias";
 choices[38][2] = "Los cables de cuadretes son indicados en transmisi&oacute;n de se&ntilde;ales de alta frecuencia y en distancias medias";
 choices[38][3] = "Los cables de cuadretes son los adecuados para transmisi&oacute;n de se&ntilde;ales de alta frecuencia y largas distancias";
 answers[38] = choices[38][2];
 units[38] = "99";
 comments[38] = "Id Pregunta: 3825. ";


//  Id pregunta: 4114 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Sobre los buscadores en Internet se&ntilde;ale la respuesta correcta:";
 choices[39]= new Array();
 choices[39][0] = "Los buscadores de &iacute;ndices tem&aacute;ticos son sistemas de b&uacute;squeda que incorporan autom&aacute;ticamente p&aacute;ginas web clasificadas por temas.";
 choices[39][1] = "Los motores de b&uacute;squeda utilizan &ldquo;robots&rdquo; de b&uacute;squeda para incluir las p&aacute;ginas web.";
 choices[39][2] = "a) y b) son falsas";
 choices[39][3] = "a) y b) son verdaderas";
 answers[39] = choices[39][1];
 units[39] = "112";
 comments[39] = "Id Pregunta: 4114. ";


//  Id pregunta: 4159 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Que mecanismo proporciona seguridad a DNS";
 choices[40]= new Array();
 choices[40][0] = "Un par nombre/contrase&ntilde;a";
 choices[40][1] = "Un directorio TFTP";
 choices[40][2] = "Un nombre de dominio";
 choices[40][3] = "ninguna de las anteriores";
 answers[40] = choices[40][0];
 units[40] = "113";
 comments[40] = "Id Pregunta: 4159. ";


//  Id pregunta: 4210 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  El t&eacute;rmino JigSaw se refiere a:";
 choices[41]= new Array();
 choices[41][0] = "Una plataforma de servidor Web basada en Java, cuyo principal objetivo es hacer demostraciones de nuevos protocolos y, al mismo tiempo, ofrecer una base de experimentaci&oacute;n en el &aacute;rea de software para servidor";
 choices[41][1] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Web de cliente, de uso com&uacute;n y alta modularidad, cuyo principal prop&oacute;sito es el de servir como herramienta de pruebas para experimentos con protocolos";
 choices[41][2] = "Un lenguaje est&aacute;ndar utilizado por los componentes que intervienen en un sistema multimodal para comunicarse";
 choices[41][3] = "Un lenguaje de etiquetado utilizado para crear presentaciones multimedia din&aacute;micas a trav&eacute;s de la sincronizaci&oacute;n en tiempo y espacio de diversos elementos como audio, v&iacute;deo, texto y gr&aacute;ficos";
 answers[41] = choices[41][0];
 units[41] = "116";
 comments[41] = "Id Pregunta: 4210. ";


//  Id pregunta: 4607 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  El atributo que NO forma parte de los que utiliza la t&eacute;cnica de estimaci&oacute;n del M&eacute;todo Albrecht para el An&aacute;lisis de los Puntos Funci&oacute;n es";
 choices[42]= new Array();
 choices[42][0] = "gran uso de Ia configuraci&oacute;n";
 choices[42][1] = "dise&ntilde;o para la eficacia del usuario final";
 choices[42][2] = "velocidad de las transacciones";
 choices[42][3] = "prestaciones";
 answers[42] = choices[42][1];
 units[42] = "89";
 comments[42] = "Id Pregunta: 4607. ";


//  Id pregunta: 4780 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[43]= new Array();
 choices[43][0] = "Seguridad. Los prestadores de servicios deber&aacute;n informar a sus clientes sobre medidas de seguridad que apliquen en sus servicios";
 choices[43][1] = "Accesibilidad. Se establece que las p&aacute;ginas web de las AAPP alcancen el nivel medio de accesibilidad";
 choices[43][2] = "Ampliaci&oacute;n de los nombres de dominio. Deber&aacute;n poder asignarse nombres de dominio .es que contengan el car&aacute;cter &quot;&ntilde;&quot;";
 choices[43][3] = "Todas las anteriores son ciertas";
 answers[43] = choices[43][3];
 units[43] = "30";
 comments[43] = "Id Pregunta: 4780. Ley 56/2007";


//  Id pregunta: 4822 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Qu&eacute; elementos de los siguientes pueden aparecer en un diagrama de Casos de Uso con la notaci&oacute;n de UML (Unified Modeling Language)?";
 choices[44]= new Array();
 choices[44][0] = "Objetos, casos de uso y actividades.";
 choices[44][1] = "Actores, objetos y relaciones.";
 choices[44][2] = "Casos de uso, actores y relaciones.";
 choices[44][3] = "Actores, casos de uso y actividades.";
 answers[44] = choices[44][2];
 units[44] = "84";
 comments[44] = "Id Pregunta: 4822. examen TIC 2006";


//  Id pregunta: 4996 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  El Consejo Superior de Administraci&oacute;n Electr&oacute;nica es un &oacute;rgano colegiado adscrito al Ministerio de:";
 choices[45]= new Array();
 choices[45][0] = "Industria, Energ&iacute;a y Turismo";
 choices[45][1] = "Asuntos Exteriores";
 choices[45][2] = "Hacienda y Administraciones P&uacute;blicas";
 choices[45][3] = "Interior";
 answers[45] = choices[45][2];
 units[45] = "30";
 comments[45] = "Id Pregunta: 4996. Examen TIC A 2007";


//  Id pregunta: 5071 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Seg&uacute;n M&eacute;trica V3, &iquest;cu&aacute;l de los siguientes productos NO se obtienen del proceso de an&aacute;lisis de sistemas de informaci&oacute;n (ASI) orientado a objetos?:";
 choices[46]= new Array();
 choices[46][0] = "Dise&ntilde;o de clases";
 choices[46][1] = "Descripci&oacute;n de interfaces entre subsistemas";
 choices[46][2] = "Modelo de clases de an&aacute;lisis";
 choices[46][3] = "An&aacute;lisis de la realizaci&oacute;n de los casos de uso";
 answers[46] = choices[46][0];
 units[46] = "86";
 comments[46] = "Id Pregunta: 5071. Examen TIC A 2007";


//  Id pregunta: 5184 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Se&ntilde;ale la respuesta verdadera con respecto a los atributos en el modelo E/R:";
 choices[47]= new Array();
 choices[47][0] = "Cada atributo toma valores de un dominio diferenciado y no compartido";
 choices[47][1] = "Al atributo que identifica un&iacute;vocamente cada una de las ocurrencias de la entidad principal se le denomina atributo fuerte";
 choices[47][2] = "Existen atributos simples, mixtos y compuestos";
 choices[47][3] = "Existen atributos monovalorados y multivalorados";
 answers[47] = choices[47][3];
 units[47] = "80";
 comments[47] = "Id Pregunta: 5184. ";


//  Id pregunta: 5217 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  En qu&eacute; actividad de proceso An&aacute;lisis del Sistema de Informaci&oacute;n participan los &quot;Usuarios expertos&quot;";
 choices[48]= new Array();
 choices[48][0] = "Elaboraci&oacute;n del modelo de procesos";
 choices[48][1] = "Elaboraci&oacute;n del modelo de datos";
 choices[48][2] = "An&aacute;lisis de los casos de uso";
 choices[48][3] = "Definici&oacute;n del sistema";
 answers[48] = choices[48][1];
 units[48] = "86";
 comments[48] = "Id Pregunta: 5217. NULL";


//  Id pregunta: 5506 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  La sindicaci&oacute;n de contenidos web:";
 choices[49]= new Array();
 choices[49][0] = "Se emplea el lenguaje RSS (Really Simple Sindication)";
 choices[49][1] = "Actualmente se emplea el estandar Atom 1.0";
 choices[49][2] = "Permite recuperar contenido de un sitio web y publicarlo en otro";
 choices[49][3] = "Todas son correctas";
 answers[49] = choices[49][3];
 units[49] = "69";
 comments[49] = "Id Pregunta: 5506. NULL";


//  Id pregunta: 5664 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  Seg&uacute;n el RD 1720/2007, los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = " son personal&iacute;simos y ser&aacute;n ejercidos por el afectado";
 choices[50][1] = " son personal&iacute;simos y ser&aacute;n ejercidos por el afectado o un familiar directo";
 choices[50][2] = " son universales y ser&aacute;n ejercidos por cualquier ciudadano";
 choices[50][3] = "no existen como tales derechos";
 answers[50] = choices[50][0];
 units[50] = "29";
 comments[50] = "Id Pregunta: 5664. ";


//  Id pregunta: 5743 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monoalfab&eacute;tica?";
 choices[51]= new Array();
 choices[51][0] = "La que cifra los caracteres de uno en uno";
 choices[51][1] = "La que sustituye cada letra por varias letras";
 choices[51][2] = "Aquella en que cada letra es sustituida siempre por la misma dentro de un mismo mensaje";
 choices[51][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[51] = choices[51][2];
 units[51] = "72";
 comments[51] = "Id Pregunta: 5743. ";


//  Id pregunta: 5778 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[52]= new Array();
 choices[52][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden";
 choices[52][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime";
 choices[52][2] = ".NET Framework 4.5 es la &uacute;ltima versi&oacute;n disponible del framework .NET";
 choices[52][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes";
 answers[52] = choices[52][1];
 units[52] = "59";
 comments[52] = "Id Pregunta: 5778. MAP 2008 A1";


//  Id pregunta: 6003 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Un servidor web puede utilizar el mecanismo de &quot;cookies&quot; para:";
 choices[53]= new Array();
 choices[53][0] = "Extraer la direcci&oacute;n de correo de un usuario.";
 choices[53][1] = "Relacionar sucesivas conexiones de un cliente.";
 choices[53][2] = "Enviar un objeto al cliente cuando su copia cach&eacute; est&aacute; obsoleta.";
 choices[53][3] = "Enviar c&oacute;digo embebido en la p&aacute;gina HTML que se ejecutar&aacute; en el cliente.";
 answers[53] = choices[53][1];
 units[53] = "113";
 comments[53] = "Id Pregunta: 6003. TIC A 2009";


//  Id pregunta: 6164 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Se&ntilde;ale la informaci&oacute;n falsa:";
 choices[54]= new Array();
 choices[54][0] = "La telepresencia es la evoluci&oacute;n de los servicios de videoconferencia que se acerca hacia la realidad virtual.";
 choices[54][1] = "En una sesi&oacute;n de videoconferencia es posible incorporar herramientas de colaboraci&oacute;n.";
 choices[54][2] = "En soluciones de videoconferencia accesibles desde el exterior es posible tunelizar las comunicaciones por el puerto http o de lo contrario tener en cuenta las consideraciones con los Firewall.";
 choices[54][3] = "Todas las anteriores son correctas.";
 answers[54] = choices[54][3];
 units[54] = "117";
 comments[54] = "Id Pregunta: 6164. ";


//  Id pregunta: 6281 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Qu&eacute; t&eacute;cnica se emplea para determinar la situaci&oacute;n real en que se encuentra la organizaci&oacute;n y conocer el riesgo y las oportunidades que le ofrece el mercado?";
 choices[55]= new Array();
 choices[55][0] = "T&eacute;cnica FCE (Factores Cr&iacute;ticos de &Eacute;xito)";
 choices[55][1] = "An&aacute;lisis DAFO ";
 choices[55][2] = "Aprendizaje organizativo";
 choices[55][3] = "An&aacute;lisis econ&oacute;mico del mercado";
 answers[55] = choices[55][1];
 units[55] = "77";
 comments[55] = "Id Pregunta: 6281. ";


//  Id pregunta: 6319 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  En un modelo relacional, la regla de integridad de las entidades dice :";
 choices[56]= new Array();
 choices[56][0] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n base puede aceptar       nulos.";
 choices[56][1] = "La base de datos no debe contener valores de clave ajena sin concordancia.";
 choices[56][2] = "En una clave primaria compuesta, cada valor individual de la clave primaria puede ser nulo aunque no en su totalidad.";
 choices[56][3] = "Ning&uacute;n componente de una clave ajena de una relaci&oacute;n puede aceptar nulos.";
 answers[56] = choices[56][0];
 units[56] = "58";
 comments[56] = "Id Pregunta: 6319. ";


//  Id pregunta: 6572 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto al modelo OSI?";
 choices[57]= new Array();
 choices[57][0] = "La capa 5 establece, mantiene y cierra el di&aacute;logo entre dos aplicaciones. Controla la organizaci&oacute;n del di&aacute;logo y su sincronizaci&oacute;n";
 choices[57][1] = "La capa 4 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 choices[57][2] = "La capa 3 proporciona transmisiones extremo a extremo";
 choices[57][3] = "La capa 2 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 answers[57] = choices[57][0];
 units[57] = "100";
 comments[57] = "Id Pregunta: 6572. NULL";


//  Id pregunta: 7167 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de las siguientes licencias es la &uacute;nica que puede considerarse licencia de software libre compatible con la GNU GPL:";
 choices[58]= new Array();
 choices[58][0] = "Sun Community Source License";
 choices[58][1] = "Apache License. Version 2.0";
 choices[58][2] = "Microsoft Public License (MS-OL)";
 choices[58][3] = "GNU Lesser General Public License (LGPL)";
 answers[58] = choices[58][3];
 units[58] = "61";
 comments[58] = "Id Pregunta: 7167. Examen TIC B 2009";


//  Id pregunta: 7335 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes organizaciones espa&ntilde;olas no es miembro de ETSI?";
 choices[59]= new Array();
 choices[59][0] = "AENOR";
 choices[59][1] = "TELEFONICA S.A.";
 choices[59][2] = "UNIVERSIDAD AUT&Oacute;NOMA DE MADRID";
 choices[59][3] = "MINISTERIO DE INDUSTRIA, TURISMO y COMERCIO";
 answers[59] = choices[59][0];
 units[59] = "42";
 comments[59] = "Id Pregunta: 7335. http://portal.etsi.org/Portal_IntegrateAppli/QueryResult.asp?Alone=1&amp;SortBy=&amp;SortDirection=&amp;Param=#";


//  Id pregunta: 7788 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)   &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre el formato JAR?";
 choices[60]= new Array();
 choices[60][0] = " Utiliza el mismo algoritmo de compresi&oacute;n que los archivos .ZIP.";
 choices[60][1] = " Es compatible con los sistemas de distribuci&oacute;n autom&aacute;tica.";
 choices[60][2] = " Los ficheros con este formato son independientes de la plataforma.";
 choices[60][3] = " Un fichero con este formato debe incluir obligatoriamente las firmas digitales de los ficheros que contiene.";
 answers[60] = choices[60][3];
 units[60] = "NULL";
 comments[60] = "Id Pregunta: 7788. Map 2005";


//  Id pregunta: 7864 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)   &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[61]= new Array();
 choices[61][0] = " Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministro de Industria, Turismo y Comercio.";
 choices[61][1] = " Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno.";
 choices[61][2] = " Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la v&iacute;a administrativa.";
 choices[61][3] = " Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[61] = choices[61][2];
 units[61] = "NULL";
 comments[61] = "Id Pregunta: 7864. Map 2006";


//  Id pregunta: 8093 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)   Suponga que recibe una firma electr&oacute;nica avanzada de tipo XAdES-T sin una asociaci&oacute;n espec&iacute;fica a ninguna pol&iacute;tica de firma concreta y que ha verificado con &eacute;xito el formato de la firma y su integridad. En esta situaci&oacute;n, la evaluaci&oacute;n de la validez de dicha firma electr&oacute;nica seg&uacute;n la norma ETSI TS 101 903 v1.3.2 da como resultado:";
 choices[62]= new Array();
 choices[62][0] = " Firma inv&aacute;lida.";
 choices[62][1] = " Validaci&oacute;n incompleta de la firma.";
 choices[62][2] = " Firma v&aacute;lida.";
 choices[62][3] = " Firma suspendida.";
 answers[62] = choices[62][1];
 units[62] = "NULL";
 comments[62] = "Id Pregunta: 8093. Map 2008";


//  Id pregunta: 8148 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   En el protocolo Secure Socket Layer (SSL) el subprotocolo de negociaci&oacute;n (handsake) negocia las claves de sesi&oacute;n mediante el esquema de Diffie-Hellman (D-H) o RSA. Indique la respuesta correcta:";
 choices[63]= new Array();
 choices[63][0] = " D-H an&oacute;nimo es susceptible de ataques por hombre interpuesto.";
 choices[63][1] = " D-H ef&iacute;mero no requiere certificado del servidor ni del cliente.";
 choices[63][2] = " D-H constante no precisa certificado del cliente.";
 choices[63][3] = " RSA necesita la generaci&oacute;n de un n&uacute;mero aleatorio por el servidor que es enviado al cliente cifrado con la clave p&uacute;blica de &eacute;ste.";
 answers[63] = choices[63][0];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 8148. Map 2008";


//  Id pregunta: 8392 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Elija la opci&oacute;n que corresponde a una relaci&oacute;n entre casos de usos en UMl:";
 choices[64]= new Array();
 choices[64][0] = "Extiende.";
 choices[64][1] = "Referencia.";
 choices[64][2] = "Hereda.";
 choices[64][3] = "Vincula.";
 answers[64] = choices[64][0];
 units[64] = "84";
 comments[64] = "Id Pregunta: 8392. Examen TIC A2 2010";


//  Id pregunta: 8450 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  La T&eacute;cnica de accesos CDMA se caracteriza entre otras porque:";
 choices[65]= new Array();
 choices[65][0] = "Varios usuarios comparten una misma portadora en intervalos diferentes de tiempo";
 choices[65][1] = "Varios Usuarios comparten la misma banda";
 choices[65][2] = "Requiere filtros muy selectivos para evitar las interferencias de canal adyacente";
 choices[65][3] = "Ninguna de las anteriores.";
 answers[65] = choices[65][1];
 units[65] = "101";
 comments[65] = "Id Pregunta: 8450. Analista Ayto. Madrid 2010";


//  Id pregunta: 8469 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  La norma DECT (Digital Enhanced Cordless Telecomunications) contempla el modode acceso:";
 choices[66]= new Array();
 choices[66][0] = "TDMA/ TDD";
 choices[66][1] = "GFSK";
 choices[66][2] = "FSK";
 choices[66][3] = "CDMA";
 answers[66] = choices[66][0];
 units[66] = "107.108";
 comments[66] = "Id Pregunta: 8469. Analista Ayto. Madrid 2010";


//  Id pregunta: 8727 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l es el protocolo que permite hacer tunneling en Fibre Channel?";
 choices[67]= new Array();
 choices[67][0] = "iSCSI";
 choices[67][1] = "sSCSI";
 choices[67][2] = "iFCP";
 choices[67][3] = "FCIP";
 answers[67] = choices[67][3];
 units[67] = "48";
 comments[67] = "Id Pregunta: 8727. Examen UPM A2 2011";


//  Id pregunta: 8964 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Como algoritmos de cifrado sim&eacute;trico de bloque no figura:";
 choices[68]= new Array();
 choices[68][0] = "Lucifer";
 choices[68][1] = "Serpent";
 choices[68][2] = "Seal";
 choices[68][3] = "Shark";
 answers[68] = choices[68][2];
 units[68] = "72";
 comments[68] = "Id Pregunta: 8964. ";


//  Id pregunta: 9284 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  Adem&aacute;s de los pliegos, &iquest;cu&aacute;l de los siguientes documentos forma parte del expediente de contrataci&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "Certificado de la existencia de cr&eacute;dito. ";
 choices[69][1] = "Fiscalizaci&oacute;n de la intervenci&oacute;n.";
 choices[69][2] = "Aprobaci&oacute;n del gasto. ";
 choices[69][3] = "Todos los anteriores.";
 answers[69] = choices[69][3];
 units[69] = "41";
 comments[69] = "Id Pregunta: 9284. ";


//  Id pregunta: 9337 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares IEEE para la transmisi&oacute;n de datos gigabit sobre Ethernet puede operar con fibra &oacute;ptica tanto monomodo como multimodo?";
 choices[70]= new Array();
 choices[70][0] = "1000BASE-SX";
 choices[70][1] = "1000BASE-LX";
 choices[70][2] = "1000BASE-TX";
 choices[70][3] = "1000BASE-CX";
 answers[70] = choices[70][1];
 units[70] = "99";
 comments[70] = "Id Pregunta: 9337. TIC a2 AGE 2011";


//  Id pregunta: 9488 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Indique cu&aacute;l de los siguientes no es un tipo de prototipo en el proceso unificado de desarrollo del software";
 choices[71]= new Array();
 choices[71][0] = "Prototipo arquitect&oacute;nico";
 choices[71][1] = "Prototipo de prueba";
 choices[71][2] = "Prototipo exploratorio";
 choices[71][3] = "Prototipo evolutivo";
 answers[71] = choices[71][1];
 units[71] = "78";
 comments[71] = "Id Pregunta: 9488. ";


//  Id pregunta: 9497 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a VBScript:";
 choices[72]= new Array();
 choices[72][0] = "Es una tecnolog&iacute;a abierta";
 choices[72][1] = "Genera ficheros con extensi&oacute;n .vbs";
 choices[72][2] = "Se comunica con las aplicaciones principales mediante ActiveX Scripting";
 choices[72][3] = "Dispone de mayor funcionalidad que JavaScript";
 answers[72] = choices[72][0];
 units[72] = "114";
 comments[72] = "Id Pregunta: 9497. NULL";


//  Id pregunta: 9932 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Indique la opci&oacute;n falsa:";
 choices[73]= new Array();
 choices[73][0] = "En la capa de red, el modelo OSI s&oacute;lo considera comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[73][1] = "Igualmente, en la capa de transporte se ofrece s&oacute;lo comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[73][2] = "El modelo TCP/IP en la capa de red s&oacute;lo tiene el modo sin conexi&oacute;n.";
 choices[73][3] = "Todas son verdaderas.";
 answers[73] = choices[73][0];
 units[73] = "100";
 comments[73] = "Id Pregunta: 9932. NULL";


//  Id pregunta: 9979 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Un sistema que puede emplearse para registrar la relaci&oacute;n del ciudadano con la administraci&oacute;n, anotando todas las relaciones establecidas por &eacute;l, para configurar su personalidad administrativa digital es ";
 choices[74]= new Array();
 choices[74][0] = "Gesti&oacute;n de la Relaci&oacute;n con el Cliente (CRM) ";
 choices[74][1] = "Arquitectura Orientada a Servicios (SOA) ";
 choices[74][2] = "Planificaci&oacute;n de Recursos Empresariales (ERP) ";
 choices[74][3] = "Gesti&oacute;n de Procesos de Negocio (BPM) ";
 answers[74] = choices[74][0];
 units[74] = "65";
 comments[74] = "Id Pregunta: 9979. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 10030 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Indique la respuesta correcta en relaci&oacute;n al comando SNMP GetBulkRequest:";
 choices[75]= new Array();
 choices[75][0] = "Est&aacute; disponible en todas las versiones de SNMP.";
 choices[75][1] = "Es utilizado por un sistema gestor de red para enviar un mensaje a otro gestor sobre objetos administrados.";
 choices[75][2] = "Es el que permite utilizar autenticaci&oacute;n en SNMP v3.			";
 choices[75][3] = "Es utilizado cuando se requiere una cantidad elevada de datos transmitidos.";
 answers[75] = choices[75][3];
 units[75] = "104";
 comments[75] = "Id Pregunta: 10030. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10056 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Indique de entre las siguientes cu&aacute;l es la definici&oacute;n de secr&aacute;fono:";
 choices[76]= new Array();
 choices[76][0] = "Equipo de frontera que, situado fuera de la red interna, ofrece servicios al exterior.";
 choices[76][1] = "Equipo infectado por un atacante remoto no detectado.";
 choices[76][2] = "Equipo que genera y entrega claves criptogr&aacute;ficas para su distribuci&oacute;n.";
 choices[76][3] = "Equipo para realizar el cifrado anal&oacute;gico de la voz.";
 answers[76] = choices[76][3];
 units[76] = "109";
 comments[76] = "Id Pregunta: 10056. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10076 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Los t&eacute;rminos scatternet y piconet est&aacute;n relacionados con la tecnolog&iacute;a:";
 choices[77]= new Array();
 choices[77][0] = "RDSI ";
 choices[77][1] = "Bluetooth";
 choices[77][2] = "DECT ";
 choices[77][3] = "Wimax";
 answers[77] = choices[77][1];
 units[77] = "107";
 comments[77] = "Id Pregunta: 10076. TIC A2, libre, Examen 2013";


//  Id pregunta: 10119 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En la conmutaci&oacute;n de tramas Cut-through, el switch comienza a retransmitir la trama:";
 choices[78]= new Array();
 choices[78][0] = "En cuanto ha recibido los primeros 6 bytes";
 choices[78][1] = "En cuanto ha recibido los primeros 64 bytes";
 choices[78][2] = "Cuando ha recibido toda la trama";
 choices[78][3] = "Cuando ha recibido toda la trama y ha calculado el CRC";
 answers[78] = choices[78][0];
 units[78] = "102";
 comments[78] = "Id Pregunta: 10119. En cuanto recibe la direcci&oacute;n del siguiente nodo lo reenv&iacute;a.";


//  Id pregunta: 10195 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cual es la afirmaci&oacute;n falsa respecto a VDSL2 (Very-High-Bit-Rate Digital Subscriber Line 2)?";
 choices[79]= new Array();
 choices[79][0] = "Corresponde a la norma ITU-T G.993.2";
 choices[79][1] = "No permite la modalidad sim&eacute;trica";
 choices[79][2] = "Puede alcanzar velocidades de 100 Mbps a 1 Km de distancia de la central ";
 choices[79][3] = "A distancias mayores de 2 Km la velocidad equivale a un ADSL2";
 answers[79] = choices[79][1];
 units[79] = "107";
 comments[79] = "Id Pregunta: 10195. NULL";


//  Id pregunta: 10340 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En relaci&oacute;n con la legislaci&oacute;n de propiedad intelectual, el canon por copia privada se encuentra actualmente regulado por:";
 choices[80]= new Array();
 choices[80][0] = "Ley 23/2006";
 choices[80][1] = "Real Decreto Legislativo 1/1996";
 choices[80][2] = "Ley 2/2011";
 choices[80][3] = "Real Decreto 1657/2012";
 answers[80] = choices[80][3];
 units[80] = "36";
 comments[80] = "Id Pregunta: 10340. Actualmente, el procedimiento de pago de la compensaci&oacute;n equitativa por copia privada se realiza con cargo a los Presupuestos Generales del Estado";


//  Id pregunta: 10469 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Respecto a HTML5, indique la respuesta incorrecta:";
 choices[81]= new Array();
 choices[81][0] = "Existe una API de geolocalizaci&oacute;n.";
 choices[81][1] = "Permite abrir sockets para una comunicaci&oacute;n bidireccional, full duplex con baja latencia y que se basa en el protocolo TCP.";
 choices[81][2] = "No neceita Flash para ver v&iacute;deos.";
 choices[81][3] = "Los Web Workers permiten la ejecuci&oacute;n de un &uacute;nico subproceso.";
 answers[81] = choices[81][3];
 units[81] = "69";
 comments[81] = "Id Pregunta: 10469. NULL";


//  Id pregunta: 10511 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Qu&eacute; recomendaci&oacute;n define la Interfaz usuario-red de la red digital de servicios integrados de banda ancha?";
 choices[82]= new Array();
 choices[82][0] = "I.413";
 choices[82][1] = "I.411";
 choices[82][2] = "I.431";
 choices[82][3] = "I.314";
 answers[82] = choices[82][0];
 units[82] = "109";
 comments[82] = "Id Pregunta: 10511. NULL";


//  Id pregunta: 10554 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Cuando una metodolog&iacute;a de ciclo de vida de desarrollo de sistemas es inadecuada, el riesgo m&aacute;s serio del nuevo sistema ser&aacute;:";
 choices[83]= new Array();
 choices[83][0] = "Se completar&aacute; tarde";
 choices[83][1] = "Superar&aacute; las estimaciones de coste";
 choices[83][2] = "No cumplir&aacute; con las necesidades de negocio y de los usuarios";
 choices[83][3] = "Ser&aacute; incompatible con los sistemas existentes";
 answers[83] = choices[83][2];
 units[83] = "31, 32, 33";
 comments[83] = "Id Pregunta: 10554. Aunque todas las respuestas son riesgos, lo primero y m&aacute;s perjudicial es que el sistema no cumplir&aacute; con las necesidades de los usuarios y del negocio.";


//  Id pregunta: 10581 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Son principios generales de la Ley 11/2007:";
 choices[84]= new Array();
 choices[84][0] = "Neutralidad tecnol&oacute;gica, accesibilidad y disponibilidad.";
 choices[84][1] = "Informaci&oacute;n, igualdad y legalidad.";
 choices[84][2] = "Calidad, conectividad y seguridad.";
 choices[84][3] = "Cooperaci&oacute;n, responsabilidad y transparencia.";
 answers[84] = choices[84][3];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10581. Art&iacute;culo 4, Ley 11/2007.";


//  Id pregunta: 10748 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Qui&eacute;n propone la estrategia en materia de tecnolog&iacute;a y comunicaciones?";
 choices[85]= new Array();
 choices[85][0] = "Los ministros de la Presidencia y de Hacienda y Administraciones P&uacute;blicas y de Industria.";
 choices[85][1] = "El ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[85][2] = "Los ministros de la Presidencia, de Hacienda y Administraciones P&uacute;blicas y de Industria, Energ&iacute;a y Turismo.";
 choices[85][3] = "El CIO de la AGE.";
 answers[85] = choices[85][2];
 units[85] = "24";
 comments[85] = "Id Pregunta: 10748. ";


//  Id pregunta: 10798 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Apache Cassandra es:";
 choices[86]= new Array();
 choices[86][0] = "Un servidor de comunicaciones.";
 choices[86][1] = "Una base de datos NoSQL distribuida.";
 choices[86][2] = "Un sistema de claves privadas.";
 choices[86][3] = "Un protocolo de comunicaciones.";
 answers[86] = choices[86][1];
 units[86] = "57";
 comments[86] = "Id Pregunta: 10798. Examen GSI 2014";


//  Id pregunta: 10801 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Una red TCP usa el protocolo de ventana deslizante como mecanismo de control de flujo. Supongamos que se establece el tama&ntilde;o de la ventana en 4 y los paquetes se numeran del 1 en adelante. Con estas condiciones, el emisor podr&aacute; enviar al receptor el paquete n&uacute;mero 5:";
 choices[87]= new Array();
 choices[87][0] = "&Uacute;nicamente cuando reciba el ACK del paquete 4.";
 choices[87][1] = "Cuando haya recibido al menos dos ACK.";
 choices[87][2] = "Cuando reciba cualquier ACK.";
 choices[87][3] = "Cuando se cumpla el timeout de env&iacute;o del paquete 1.";
 answers[87] = choices[87][2];
 units[87] = "100";
 comments[87] = "Id Pregunta: 10801. Examen GSI 2014";


//  Id pregunta: 11160 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;A qu&eacute; fase corresponde la Tarea &ldquo;Presentaci&oacute;n y aprobaci&oacute;n del Sistema de Informaci&oacute;n&rdquo; seg&uacute;n la metodolog&iacute;a de M&eacute;trica v3?";
 choices[88]= new Array();
 choices[88][0] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 choices[88][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[88][2] = "Aseguramiento de la Calidad";
 choices[88][3] = "Gesti&oacute;n de Proyectos";
 answers[88] = choices[88][1];
 units[88] = "86";
 comments[88] = "Id Pregunta: 11160. ";


//  Id pregunta: 11336 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Cu&aacute;l de los siguientes es un algoritmo de encaminamiento de estado del enlace";
 choices[89]= new Array();
 choices[89][0] = "IS-IS";
 choices[89][1] = "IGRP";
 choices[89][2] = "BGP";
 choices[89][3] = "RIP";
 answers[89] = choices[89][0];
 units[89] = "102";
 comments[89] = "Id Pregunta: 11336. ";


//  Id pregunta: 11413 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seg&uacute;n la Ley 9/2014, General de Telecomunicaciones, es facultad del gobierno para la administraci&oacute;n del espectro:";
 choices[90]= new Array();
 choices[90][0] = "Aprobaci&oacute;n del CNAF previa elaboraci&oacute;n del MINETUR.";
 choices[90][1] = "La determinaci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica de cuyo control se encarga MINETUR.";
 choices[90][2] = "Establecer el procedimiento para la reasignaci&oacute;n del uso de bandas de frecuencia.";
 choices[90][3] = "El otorgamiento de las autorizaciones de uso.";
 answers[90] = choices[90][2];
 units[90] = "110";
 comments[90] = "Id Pregunta: 11413. ";


//  Id pregunta: 11417 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de los siguientes no es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones?";
 choices[91]= new Array();
 choices[91][0] = "Derecho de acceder a los servicios de emergencia de forma gratuita.";
 choices[91][1] = "A impedir mediante un procedimiento sencillo y gratuito la presentaci&oacute;n de la identificaci&oacute;n de su l&iacute;nea a las llamadas emitidas.";
 choices[91][2] = "El derecho a la continuidad de servicio y a obtener una compensaci&oacute;n autom&aacute;tica por su interrupci&oacute;n.";
 choices[91][3] = "A figurar en las gu&iacute;as de abonados obteniendo una retribuci&oacute;n econ&oacute;mica por ello a cargo del Fondo General del Servicio P&uacute;blico.";
 answers[91] = choices[91][3];
 units[91] = "110";
 comments[91] = "Id Pregunta: 11417. ";


//  Id pregunta: 11424 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale la falsa, en relaci&oacute;n a derechos de los usuarios, seg&uacute;n se indica en la Ley 9/2014:";
 choices[92]= new Array();
 choices[92][0] = "Derecho a resolver el contrato en cualquier momento.";
 choices[92][1] = "Derecho al cambio de operador con conservaci&oacute;n del n&uacute;mero.";
 choices[92][2] = "Derecho a la continuidad del servicio, sin indemnizaci&oacute;n por parte del operador si la interrupci&oacute;n es inferior a 60 minutos.";
 choices[92][3] = "Derecho a acceder gratuitamente a llamadas de emergencia.";
 answers[92] = choices[92][2];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11424. ";


//  Id pregunta: 11426 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Los abonados podr&aacute;n conservar sus n&uacute;meros de tel&eacute;fono seg&uacute;n la Ley 9/2014:";
 choices[93]= new Array();
 choices[93][0] = "Siempre.";
 choices[93][1] = "S&oacute;lo si lo solicitan previamente al operador al que quieren cambiar.";
 choices[93][2] = "S&oacute;lo si se lo comunican a la CNMC.";
 choices[93][3] = "No est&aacute; regulado en la Ley.";
 answers[93] = choices[93][1];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11426. ";


//  Id pregunta: 11578 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l es la velocidad, el ancho de banda y la banda de frecuencias en las que operan las especificaciones 80211.ac?";
 choices[94]= new Array();
 choices[94][0] = "11 Mbps, 22 Mhz, 2.4 Ghz";
 choices[94][1] = "54 Mbps, 20 Mhz, 2.4 Ghz";
 choices[94][2] = "160 Mbps, 80Mhz o 60 Mhz, 5Ghz";
 choices[94][3] = "108Mbps, 40Mhz, 2.4Ghz y 5Ghz";
 answers[94] = choices[94][2];
 units[94] = "107";
 comments[94] = "Id Pregunta: 11578. NULL";


//  Id pregunta: 11611 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Una condici&oacute;n del bloqueo mutuo es:";
 choices[95]= new Array();
 choices[95][0] = "Condici&oacute;n de exclusi&oacute;n mutua";
 choices[95][1] = "Condici&oacute;n de ocupar y esperar un recurso";
 choices[95][2] = "Condici&oacute;n de espera circular";
 choices[95][3] = "Las 3 son condiciones necesarias del bloqueo mutuo.";
 answers[95] = choices[95][3];
 units[95] = "52";
 comments[95] = "Id Pregunta: 11611. ";


//  Id pregunta: 11631 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  La metodolog&iacute;a OOSE fue desarrollada por:";
 choices[96]= new Array();
 choices[96][0] = "Booch";
 choices[96][1] = "Rumbaugh";
 choices[96][2] = "Jacobson";
 choices[96][3] = "Codd";
 answers[96] = choices[96][2];
 units[96] = "79";
 comments[96] = "Id Pregunta: 11631. ";


//  Id pregunta: 11669 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Con respecto a WCF, se&ntilde;ale la incorrecta:";
 choices[97]= new Array();
 choices[97][0] = "Los servicios WCF pueden ejecutarse sobre TCP.";
 choices[97][1] = "WCF son las siglas de Windows Communication Foundation.";
 choices[97][2] = "WCF usa siempre SOAP.";
 choices[97][3] = "Las tres anteriores son ciertas.";
 answers[97] = choices[97][2];
 units[97] = "115";
 comments[97] = "Id Pregunta: 11669. ";


//  Id pregunta: 11672 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En Java, para redirigir la petici&oacute;n a otra p&aacute;gina JSP se utiliza la etiqueta:";
 choices[98]= new Array();
 choices[98][0] = "page";
 choices[98][1] = "forward";
 choices[98][2] = "request";
 choices[98][3] = "pageContext";
 answers[98] = choices[98][1];
 units[98] = "116";
 comments[98] = "Id Pregunta: 11672. ";


//  Id pregunta: 11741 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En UNIX, un archivo se compone de:";
 choices[99]= new Array();
 choices[99][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos.";
 choices[99][1] = "Una secuencia de bytes.";
 choices[99][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos.";
 choices[99][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento.";
 answers[99] = choices[99][2];
 units[99] = "53.54";
 comments[99] = "Id Pregunta: 11741. ";


