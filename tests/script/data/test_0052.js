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

//  Id pregunta: 126 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El an&aacute;lisis DAFO mide en una empresa:";
 choices[0]= new Array();
 choices[0][0] = "Decisiones, An&aacute;lisis, Fuerzas, Oportunidades";
 choices[0][1] = "Debilidades, Adaptaciones, Fallos, Opciones";
 choices[0][2] = "Decisiones, Amenazas, Fallos, Oportunidades";
 choices[0][3] = "Debilidades, Amenazas, Fuerzas, Oportunidades";
 answers[0] = choices[0][3];
 units[0] = "22";
 comments[0] = "Id Pregunta: 126. NULL";


//  Id pregunta: 214 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En la estructuraci&oacute;n vertical de un sistema de informaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Se dispone de 3 niveles: operacional (procedimientos de rutina, grueso de tratamiento de datos), estrat&eacute;gico (toma de decisiones a corto-medio plazo) y t&aacute;ctico (toma de decisiones a largo plazo)";
 choices[1][1] = "Se dispone de 4 niveles: operacional, funcional, t&aacute;ctico y estrat&eacute;gico";
 choices[1][2] = "Se dispone de 3 niveles: operacional (decisiones que afectan a la rutina de tratamiento de datos), funcional (decisiones que afectan al funcionamiento de los subsistemas que componen el sistema) y estrat&eacute;gico (decisiones que afectan a la estrategia social";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = choices[1][3];
 units[1] = "21";
 comments[1] = "Id Pregunta: 214. ";


//  Id pregunta: 228 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En las estrategias de negociaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "La estrategia de ganar-ganar es la que por lo general deja m&aacute;s satisfechos a las 2 partes";
 choices[2][1] = "La estrategia de perder-perder suele llevar a un equilibrio inestable que provoca que tarde o temprano tenga que volverse a retomar la negociaci&oacute;n";
 choices[2][2] = "Las 2 respuestas anteriores son correctas";
 choices[2][3] = "Ninguna de las respuestas anteriores son correctas";
 answers[2] = choices[2][2];
 units[2] = "28";
 comments[2] = "Id Pregunta: 228. negociaci&oacute;n";


//  Id pregunta: 274 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Indique cu&aacute;l de las siguientes alternativas se refiere a una de las consecuencias organizativas de la transformaci&oacute;n de una organizaci&oacute;n tradicional en una organizaci&oacute;n basada en la informaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Esa transformaci&oacute;n no tiene consecuencias organizativas";
 choices[3][1] = "El empleo de nuevas tecnolog&iacute;as";
 choices[3][2] = "El aumento del n&uacute;mero de gestores";
 choices[3][3] = "La reducci&oacute;n del n&uacute;mero de niveles jer&aacute;rquicos";
 answers[3] = choices[3][3];
 units[3] = "22";
 comments[3] = "Id Pregunta: 274. ";


//  Id pregunta: 383 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Mediante el an&aacute;lisis de riesgos:";
 choices[4]= new Array();
 choices[4][0] = "Se puede evaluar el impacto de los fallos del software en el sistema global";
 choices[4][1] = "El responsable del proyecto reduce el impacto del riesgo";
 choices[4][2] = "Se formaliza una representaci&oacute;n de todas las interacciones efectivas entre los agentes que intervienen en el proyecto";
 choices[4][3] = "Se clasifican los factores susceptibles de provocar consecuencias no deseadas en funci&oacute;n de la cualificaci&oacute;n del personal, la velocidad de ejecuci&oacute;n, el empleo de estandartes y la madurez tecnol&oacute;gica de la organizaci&oacute;n";
 answers[4] = choices[4][3];
 units[4] = "33";
 comments[4] = "Id Pregunta: 383. ";


//  Id pregunta: 454 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Se&ntilde;ale la opci&oacute;n que es uno de los objetivos fundamentales de los sistemas abiertos seg&uacute;n X/Open:";
 choices[5]= new Array();
 choices[5][0] = "Portabilidad de aplicaciones en c&oacute;digo fuente";
 choices[5][1] = "Conectividad de aplicaciones a trav&eacute;s de servicios portables de red, independientes de los protocolos subyacentes y soporte de protocolos comunes";
 choices[5][2] = "Consistencia de la interfaz de usuario";
 choices[5][3] = "Todas son objetivos fundamentales";
 answers[5] = choices[5][3];
 units[5] = "40";
 comments[5] = "Id Pregunta: 454. ";


//  Id pregunta: 582 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  Cual de las siguiente subareas no pertenece tradicionalmente a sistemas";
 choices[6]= new Array();
 choices[6][0] = "Sistemas Operativos, Software Base y Sistemas Corporativos:";
 choices[6][1] = "Microinform&aacute;tica:";
 choices[6][2] = "Desarrollo";
 choices[6][3] = "Integraci&oacute;n de Sistemas:";
 answers[6] = choices[6][2];
 units[6] = "26";
 comments[6] = "Id Pregunta: 582. ";


//  Id pregunta: 699 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  La principal ventaja de un sistema RAID-5 sobre otros sistemas RAID es:";
 choices[7]= new Array();
 choices[7][0] = "Ofrece la m&aacute;xima velocidad posible tanto en lectura como escritura.";
 choices[7][1] = "Ofrece la m&aacute;xima seguridad de los datos almacenados.";
 choices[7][2] = "Ofrece cierta seguridad y buena velocidad en lectura.";
 choices[7][3] = "Ofrece cierta seguridad y buena velocidad en escrituras aleatorias cortas.";
 answers[7] = choices[7][3];
 units[7] = "48";
 comments[7] = "Id Pregunta: 699. ";


//  Id pregunta: 755 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  En Java, respecto a la herencia de clases ...";
 choices[8]= new Array();
 choices[8][0] = "Es posible que una clase herede de m&aacute;s de una clase padre";
 choices[8][1] = "Una clase s&oacute;lo puede implementar un &uacute;nico interfaz";
 choices[8][2] = "La clase que hereda de una clase abstracta es siempre abstracta a su vez";
 choices[8][3] = "Todas las anteriores son falsas";
 answers[8] = choices[8][3];
 units[8] = "60";
 comments[8] = "Id Pregunta: 755. NULL";


//  Id pregunta: 881 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l es el sistema de mensajer&iacute;a t&iacute;pico de los sistemas Unix?:";
 choices[9]= new Array();
 choices[9][0] = "Exchange";
 choices[9][1] = "Sendmail";
 choices[9][2] = "Memo";
 choices[9][3] = "Groupwise";
 answers[9] = choices[9][1];
 units[9] = "53";
 comments[9] = "Id Pregunta: 881. ";


//  Id pregunta: 974 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Dada una tarjeta con microprocesador utilizada en un sistema de control de acceso, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[10]= new Array();
 choices[10][0] = "Dispone de un sistema operativo con un juego de instrucciones grabado en memoria ROM";
 choices[10][1] = "Permite realizar algoritmos complejos de cifrado con clave asim&eacute;trica";
 choices[10][2] = "La lectura de su informaci&oacute;n se realiza mediante un diodo de l&aacute;ser";
 choices[10][3] = "Incorpora un microprocesador con memoria";
 answers[10] = choices[10][2];
 units[10] = "74";
 comments[10] = "Id Pregunta: 974. NULL";


//  Id pregunta: 1068 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Elija la respuesta falsa. Las siguientes funciones pueden ser llevadas a cabo por un sistema windows 200x:";
 choices[11]= new Array();
 choices[11][0] = "Enrutamiento Ip";
 choices[11][1] = "Servidor de telefonia";
 choices[11][2] = "Servidor NFS";
 choices[11][3] = "Servidor NIS+";
 answers[11] = choices[11][3];
 units[11] = "56";
 comments[11] = "Id Pregunta: 1068. ";


//  Id pregunta: 1098 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En inteligencia artificial un marco es:";
 choices[12]= new Array();
 choices[12][0] = "La representaci&oacute;n del conocimiento basada en teor&iacute;a de grafos";
 choices[12][1] = "Un elemento de representaci&oacute;n que contiene, entre otros elementos, ranuras de informaci&oacute;n y punteros";
 choices[12][2] = "El mecanismo de razonamiento m&aacute;s utilizado a la hora de equiparar elementos de conocimiento";
 choices[12][3] = "El objeto formado por el encapsulamiento de reglas deductivas y hechos";
 answers[12] = choices[12][1];
 units[12] = "64";
 comments[12] = "Id Pregunta: 1098. ";


//  Id pregunta: 1100 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En Java, al mecanismo que permite agrupar un conjunto de clases relacionadas se le denomina";
 choices[13]= new Array();
 choices[13][0] = "Superset o superconjunto";
 choices[13][1] = "Package o paquete";
 choices[13][2] = "Superclass o Superclase";
 choices[13][3] = "Colection o Colecci&oacute;n";
 answers[13] = choices[13][1];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1100. JCED - Preparatic XVII";


//  Id pregunta: 1250 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La ventaja fundamental de las memorias cache es:";
 choices[14]= new Array();
 choices[14][0] = "Su alta velocidad";
 choices[14][1] = "Su seguridad";
 choices[14][2] = "La ampliaci&oacute;n de memoria principal que generan";
 choices[14][3] = "Su gran capacidad de direccionamiento";
 answers[14] = choices[14][0];
 units[14] = "47";
 comments[14] = "Id Pregunta: 1250. ";


//  Id pregunta: 1283 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Los servlets:";
 choices[15]= new Array();
 choices[15][0] = "Son componentes que extienden la funcionalidad de los servidores orientados a &ldquo;request/response&rdquo;";
 choices[15][1] = "Son a los servidores lo que los applets son a los navegadores  y sustituyen a los scripts CGI";
 choices[15][2] = "Pueden manejar concurrentemente varias peticiones a otros servlets y a otros servidores, lo cual los hace ideales para sistemas de conferencias online";
 choices[15][3] = "Todas las respuestas anteriores son correctas";
 answers[15] = choices[15][0];
 units[15] = "116";
 comments[15] = "Id Pregunta: 1283. ";


//  Id pregunta: 1295 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  P2P:";
 choices[16]= new Array();
 choices[16][0] = "Puede usarse para transferir archivos";
 choices[16][1] = "Simboliza un tipo de protocolos o sistemas que hacen uso de todos los recursos presentes en una red entre iguales (peers), haciendola parecer al usuario como un &uacute;nico sistema.";
 choices[16][2] = "Puede usarse para computaci&oacute;n distribuida";
 choices[16][3] = "Todas son ciertas";
 answers[16] = choices[16][3];
 units[16] = "50";
 comments[16] = "Id Pregunta: 1295. ";


//  Id pregunta: 1385 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Un microprocesador, cuya frecuencia de reloj es de 300 Mhz y ejecuta 4 instrucciones/ciclo, puede ejecutar:";
 choices[17]= new Array();
 choices[17][0] = "1,2 Mips";
 choices[17][1] = "300 Mips";
 choices[17][2] = "300.000 instrucciones/segundo";
 choices[17][3] = "1200 Mips";
 answers[17] = choices[17][3];
 units[17] = "47";
 comments[17] = "Id Pregunta: 1385. ";


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


//  Id pregunta: 1861 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Se&ntilde;ale la correcta:";
 choices[19]= new Array();
 choices[19][0] = "El protocolo X500 es un est&aacute;ndar de la IETF";
 choices[19][1] = "El  est&aacute;ndar de certificados digitales X509v3 introdujo el concepto de extensi&oacute;n";
 choices[19][2] = "El protocolo de la ITU LDAP dispone su informaci&oacute;n relacionada jer&aacute;rquicamente.";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][1];
 units[19] = "73";
 comments[19] = "Id Pregunta: 1861. ";


//  Id pregunta: 2260 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  DRM es:";
 choices[20]= new Array();
 choices[20][0] = "un sistema de modulaci&oacute;n digital basado en secuencias aleatorias";
 choices[20][1] = "un conjunto de directivas para la investigaci&oacute;n de tecnolog&iacute;as m&oacute;viles";
 choices[20][2] = "un programa de formaci&oacute;n especializado en las relaciones entre directivos";
 choices[20][3] = "una tecnolog&iacute;a para la gesti&oacute;n de los derechos de los contenidos digitales ";
 answers[20] = choices[20][3];
 units[20] = "37";
 comments[20] = "Id Pregunta: 2260. ";


//  Id pregunta: 2289 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El modelo en espiral del ciclo de vida presenta alguna dificultades como son:";
 choices[21]= new Array();
 choices[21][0] = "Depender en exceso de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[21][1] = "Ajustar su aplicabilidad para el caso del software contratado";
 choices[21][2] = "Necesidad de una elaboraci&oacute;n adicional de los pasos del modelo en espiral";
 choices[21][3] = "Todas las anteriores son dificultades del modelo en espiral";
 answers[21] = choices[21][3];
 units[21] = "76";
 comments[21] = "Id Pregunta: 2289. ";


//  Id pregunta: 2293 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El modo org&aacute;nico de aplicar los modelos de COCOMO considera:";
 choices[22]= new Array();
 choices[22][0] = "Proyectos peque&ntilde;os";
 choices[22][1] = "Proyectos de complejidad media";
 choices[22][2] = "Proyectos de complejidad alta";
 choices[22][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[22] = choices[22][0];
 units[22] = "89";
 comments[22] = "Id Pregunta: 2293. NULL";


//  Id pregunta: 2474 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Para cada proyecto se debe seleccionar el modelo de ciclo de vida que sea m&aacute;s apropiado:";
 choices[23]= new Array();
 choices[23][0] = "Falso";
 choices[23][1] = "Cierto";
 choices[23][2] = "S&oacute;lo si es necesario evaluar los riesgos";
 choices[23][3] = "S&oacute;lo si se elige METRICA ";
 answers[23] = choices[23][1];
 units[23] = "76";
 comments[23] = "Id Pregunta: 2474. ";


//  Id pregunta: 2640 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  En dise&ntilde;o estructurado &iquest;c&uacute;al de los siguientes niveles tiene menor Cohesi&oacute;n?";
 choices[24]= new Array();
 choices[24][0] = "L&oacute;gica.";
 choices[24][1] = "Procedimental.";
 choices[24][2] = "Funcional.";
 choices[24][3] = "Coincidental.";
 answers[24] = choices[24][3];
 units[24] = "84";
 comments[24] = "Id Pregunta: 2640. ";


//  Id pregunta: 2672 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n el m&eacute;todo que consiste en que el usuario indica si entre los textos recuperados hay algunos relevantes o no, y el sistema modifica as&iacute; el vector de b&uacute;squeda se denomina:";
 choices[25]= new Array();
 choices[25][0] = "Retroalimentaci&oacute;n.";
 choices[25][1] = "Modelo booleano.";
 choices[25][2] = "lenguaje natural.";
 choices[25][3] = "L&oacute;gica borrosa.";
 answers[25] = choices[25][0];
 units[25] = "96";
 comments[25] = "Id Pregunta: 2672. NULL";


//  Id pregunta: 2713 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l fue el primer navegador web?";
 choices[26]= new Array();
 choices[26][0] = "Explorer One";
 choices[26][1] = "Netscape";
 choices[26][2] = "Gopher";
 choices[26][3] = "Mosaic";
 answers[26] = choices[26][3];
 units[26] = "112";
 comments[26] = "Id Pregunta: 2713. ";


//  Id pregunta: 2823 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  La migraci&oacute;n de aplicaciones en el marco de un ajuste dimensional:";
 choices[27]= new Array();
 choices[27][0] = "Consiste simplemente en mover los programas entre diferentes tipos de ordenador.";
 choices[27][1] = "No debe implicar modificaciones en la filosof&iacute;a de negocio de la organizaci&oacute;n.";
 choices[27][2] = "Se limita s&oacute;lo a las aplicaciones de usuario.";
 choices[27][3] = "Debe englobar todos los productos l&oacute;gicos o software de la instalaci&oacute;n a migrar.";
 answers[27] = choices[27][3];
 units[27] = "90";
 comments[27] = "Id Pregunta: 2823. ";


//  Id pregunta: 3010 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  &iquest;A qu&eacute; se corresponden las siglas 802.11d sobre redes inal&aacute;mbricas?";
 choices[28]= new Array();
 choices[28][0] = "A especificaciones de nivel f&iacute;sico ";
 choices[28][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[28][2] = "A especificaciones de Seguridad";
 choices[28][3] = "A especificiaciones de roaming";
 answers[28] = choices[28][3];
 units[28] = "107";
 comments[28] = "Id Pregunta: 3010. NULL";


//  Id pregunta: 3052 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Bluetooth:";
 choices[29]= new Array();
 choices[29][0] = "Es una tecnolog&iacute;a de enlace radio para redes LAN de peque&ntilde;o alcance";
 choices[29][1] = "Es una tecnolog&iacute;a de enlace de radio para redes PAN";
 choices[29][2] = "Es el resultado de la aplicaci&oacute;n de las &uacute;ltimas t&eacute;cnicas inform&aacute;ticas al mundo de la odontolog&iacute;a";
 choices[29][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[29] = choices[29][1];
 units[29] = "107";
 comments[29] = "Id Pregunta: 3052. NULL";


//  Id pregunta: 3198 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  DVB/DAVIC y DOCSIS son est&aacute;ndares de:";
 choices[30]= new Array();
 choices[30][0] = "tecnolog&iacute;a inal&aacute;mbrica";
 choices[30][1] = "m&oacute;dems de cable";
 choices[30][2] = "tecnolog&iacute;a xDSL";
 choices[30][3] = "grabaci&oacute;n cd CDROMs";
 answers[30] = choices[30][1];
 units[30] = "105";
 comments[30] = "Id Pregunta: 3198. ";


//  Id pregunta: 3399 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  El orden consecutivo de las capas definidas en OSI, es:";
 choices[31]= new Array();
 choices[31][0] = "F&iacute;sico, enlace, red, transporte, presentaci&oacute;n y aplicaci&oacute;n";
 choices[31][1] = "F&iacute;sico, enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[31][2] = "F&iacute;sico, enlace, red, transporte, sesi&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[31][3] = "Enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 answers[31] = choices[31][2];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3399. NULL";


//  Id pregunta: 3499 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  En el modelo de referencia OSI, en una interfaz t&iacute;pica, la capa N+1 pasa una...... a la capa N, a trav&eacute;s del......:";
 choices[32]= new Array();
 choices[32][0] = "IDU, SAP";
 choices[32][1] = "IDU, ICI";
 choices[32][2] = "PDU, ICI";
 choices[32][3] = "PDU, SAP";
 answers[32] = choices[32][0];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3499. NULL";


//  Id pregunta: 3602 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndard 10BaseT es de:";
 choices[33]= new Array();
 choices[33][0] = "100 metros";
 choices[33][1] = "185 metros";
 choices[33][2] = "200 metros";
 choices[33][3] = "500 metros";
 answers[33] = choices[33][0];
 units[33] = "99";
 comments[33] = "Id Pregunta: 3602. ";


//  Id pregunta: 3674 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Una empresa dispone de dos edificios de oficinas a ambos lados de una calle. Para conectarlos han decidido estudiar las alternativas disponibles. Indique la opci&oacute;n que sea mejor tanto t&eacute;cnica como econ&oacute;micamente:";
 choices[34]= new Array();
 choices[34][0] = "utilizaci&oacute;n de un enlace infrarrojos";
 choices[34][1] = "Utilizaci&oacute;n de una l&iacute;nea punto a punto arrendada a una empresa con concesi&oacute;n para ofrecer servicios portadores";
 choices[34][2] = "Contrataci&oacute;n de un servicio VSAT";
 choices[34][3] = "Solicitar del Ayuntamiento permiso de obra para la conexi&oacute;n permanente de una l&iacute;nea privada que atraviese la calle";
 answers[34] = choices[34][1];
 units[34] = "102";
 comments[34] = "Id Pregunta: 3674. ";


//  Id pregunta: 3812 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Seleccione la respuesta err&oacute;nea respecto de UMTS:";
 choices[35]= new Array();
 choices[35][0] = "La velocidad est&aacute;ndar de UMTS se sit&uacute;a en 384 Kbps";
 choices[35][1] = "UMTS fue iniciativa de IEEE";
 choices[35][2] = "UMTS permite acceso a redes IP";
 choices[35][3] = "El &eacute;xito de UMTS est&aacute; supeditado a la acogida de GPRS";
 answers[35] = choices[35][1];
 units[35] = "108";
 comments[35] = "Id Pregunta: 3812. ";


//  Id pregunta: 4002 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l es el n&uacute;mero aproximado de usuarios a los que da servicio cada ONT (&quot;Optical Network Termination&quot;) en una red de cable?";
 choices[36]= new Array();
 choices[36][0] = "50";
 choices[36][1] = "500";
 choices[36][2] = "5.000";
 choices[36][3] = "50.000";
 answers[36] = choices[36][1];
 units[36] = "105";
 comments[36] = "Id Pregunta: 4002. ";


//  Id pregunta: 4004 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  En el est&aacute;ndar de mensajer&iacute;a X400, el protocolo utilizado para la comunicaci&oacute;n entre el agente de transferencia de mensajes (MTA) y el agente de usuario (UA) se denomina:";
 choices[37]= new Array();
 choices[37][0] = "P1";
 choices[37][1] = "P2";
 choices[37][2] = "P3";
 choices[37][3] = "P7";
 answers[37] = choices[37][2];
 units[37] = "106";
 comments[37] = "Id Pregunta: 4004. ";


//  Id pregunta: 4269 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Indique cu&aacute;l de las siguientes no es una direcci&oacute;n IP correcta:";
 choices[38]= new Array();
 choices[38][0] = "115.26.13.4";
 choices[38][1] = "255.3.4.5";
 choices[38][2] = "10.0.0.1";
 choices[38][3] = "0.0.0.3";
 answers[38] = choices[38][1];
 units[38] = "99";
 comments[38] = "Id Pregunta: 4269. ";


//  Id pregunta: 4358 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Si se desea codificar un componente embebido de software, con especificaciones cr&iacute;ticas de tiempo real, &iquest;qu&eacute; tipo de lenguaje suele resultar m&aacute;s adecuado?";
 choices[39]= new Array();
 choices[39][0] = "Ensamblador o de bajo nivel.";
 choices[39][1] = "Uno de la tercera generaci&oacute;n.";
 choices[39][2] = "LISP.";
 choices[39][3] = "Uno de tipado fuerte.";
 answers[39] = choices[39][0];
 units[39] = "";
 comments[39] = "Id Pregunta: 4358. ";


//  Id pregunta: 4381 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Dentro de un programa se incluye el siguiente m&oacute;dulo. &iquest;Qu&eacute; cohesi&oacute;n existe entre los procedimientos que lo componen? DEFINITION MODULE PintarFigura; PROCEDURE PintarPerimetro(...); PROCEDURE   PintarColor(...); PROCEDURE PintarSombras(...); END PintarFigura";
 choices[40]= new Array();
 choices[40][0] = "Cohesi&oacute;n funcional.";
 choices[40][1] = "Cohesi&oacute;n abstraccional.";
 choices[40][2] = "Cohesi&oacute;n secuencial.";
 choices[40][3] = "Cohesi&oacute;n temporal.";
 answers[40] = choices[40][0];
 units[40] = "84";
 comments[40] = "Id Pregunta: 4381. ";


//  Id pregunta: 4448 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, las medidas de &iacute;ndole t&eacute;cnica y organizativas necesarias que garanticen la seguridad de los datos de car&aacute;cter personal, deben ser adoptadas por:";
 choices[41]= new Array();
 choices[41][0] = "&Uacute;nicamente el encargado del tratamiento.";
 choices[41][1] = "El afectado de com&uacute;n acuerdo con el encargado del tratamiento.";
 choices[41][2] = "El responsable del fichero y, en su caso, el encargado del tratamiento.";
 choices[41][3] = "&Uacute;nicamente el responsable del fichero";
 answers[41] = choices[41][2];
 units[41] = "29";
 comments[41] = "Id Pregunta: 4448. ";


//  Id pregunta: 4470 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cual de los siguientes modelos de ciclo de vida no es adecuado para el desarrollo de sistemas de informaci&oacute;n orientados a objetos?";
 choices[42]= new Array();
 choices[42][0] = "Modelo de agrupamiento.";
 choices[42][1] = "Modelo en cascada.";
 choices[42][2] = "Modelo remolino.";
 choices[42][3] = "Modelo pinball.";
 answers[42] = choices[42][1];
 units[42] = "76";
 comments[42] = "Id Pregunta: 4470. ";


//  Id pregunta: 4510 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos se utiliza para determinar la viabilidad del proyecto en el an&aacute;lisis coste-beneficio?";
 choices[43]= new Array();
 choices[43][0] = "Inversi&oacute;n promedio.";
 choices[43][1] = "Coste de desarrollo actualizado.";
 choices[43][2] = "Beneficio neto.";
 choices[43][3] = "Valor actual.";
 answers[43] = choices[43][3];
 units[43] = "27";
 comments[43] = "Id Pregunta: 4510. Castilla la Mancha 06";


//  Id pregunta: 4537 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  El protocolo RIP:";
 choices[44]= new Array();
 choices[44][0] = "Es un protocolo de encaminamiento del tipo &quot;vector de distancia&quot;.";
 choices[44][1] = "Es un protocolo de encaminamiento del tipo &quot;estado del enlace&quot;.";
 choices[44][2] = "Es un protocolo de descarga de correo electr&oacute;nico desde un servidor web.";
 choices[44][3] = "Es un protocolo de interconexi&oacute;n de conmutadores.";
 answers[44] = choices[44][0];
 units[44] = "";
 comments[44] = "Id Pregunta: 4537. ";


//  Id pregunta: 4653 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En Frame Relay La CIR es:";
 choices[45]= new Array();
 choices[45][0] = "la m&aacute;xima velocidad de datos del canal";
 choices[45][1] = "La tasa de informaci&oacute;n contratada";
 choices[45][2] = "La m&aacute;xima cantidad de datos que la red conviene en transmitir en un intervalo de tiempo T";
 choices[45][3] = "es La m&aacute;xima cantidad de datos en exceso que la red intenta transmitir en un intervalo de tiempo T";
 answers[45] = choices[45][1];
 units[45] = "109";
 comments[45] = "Id Pregunta: 4653. ";


//  Id pregunta: 4703 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque &hellip;";
 choices[46]= new Array();
 choices[46][0] = "el lenguaje Java se deriva de C++.";
 choices[46][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[46][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[46][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin.";
 answers[46] = choices[46][1];
 units[46] = "60";
 comments[46] = "Id Pregunta: 4703. Examen 2006 JCYL";


//  Id pregunta: 4741 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los conceptos SMP (Symmetric Multiprocessing) y MPP(Massively Paralleling Multiprocessing) es falsa?";
 choices[47]= new Array();
 choices[47][0] = "La programaci&oacute;n con MPP es mucho m&aacute;s compleja ya que el programa que se ejecuta debe ser dividido ensegmentos que se comuniquen entre s&iacute;.";
 choices[47][1] = "MPP no sufre cuello de botella que sufre SMP en el acceso a memoria";
 choices[47][2] = "En MPP todas las CPU comparten la misma memoria mientras que en SMP no";
 choices[47][3] = "Un cluster esta compuesto por dos o m&aacute;s ordenadores que se comportan como una sola m&aacute;quina";
 answers[47] = choices[47][2];
 units[47] = "45";
 comments[47] = "Id Pregunta: 4741. Examen 2006 JCYL";


//  Id pregunta: 4817 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos de ISOC (Internet Society) tiene la responsabilidad de desarrollar lasespecificaciones de est&aacute;ndares en Internet?";
 choices[48]= new Array();
 choices[48][0] = "IESG (Internet Engineering Steering Group)";
 choices[48][1] = "IETF (Internet Engineering Task Force)";
 choices[48][2] = "IAB (Internet Architecture Board)";
 choices[48][3] = "IANA (Internet Assigned Number Authority)";
 answers[48] = choices[48][1];
 units[48] = "112,42";
 comments[48] = "Id Pregunta: 4817. ";


//  Id pregunta: 4945 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  En el desarrollo de software, las pruebas &ldquo;alfa&rdquo; se pueden considerar:";
 choices[49]= new Array();
 choices[49][0] = "Pruebas de caja negra.";
 choices[49][1] = "Pruebas de caja transparente.";
 choices[49][2] = "Pruebas de recuperaci&oacute;n.";
 choices[49][3] = "Pruebas de seguridad.";
 answers[49] = choices[49][0];
 units[49] = "87";
 comments[49] = "Id Pregunta: 4945. Examen TIC B 2007";


//  Id pregunta: 5131 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguiente afirmaciones es cierta respecto a la firma electr&oacute;nica?";
 choices[50]= new Array();
 choices[50][0] = "La firma de documento se encuentra siempre dentro del documento original.";
 choices[50][1] = "En los certificados de persona jur&iacute;dica la identificaci&oacute;n de la persona solicitante se incluye en el certificado electr&oacute;nico.";
 choices[50][2] = "La extinci&oacute;n de un certificado s&oacute;lo puede ser por resoluci&oacute;n judicial que lo ordene.";
 choices[50][3] = "La extinci&oacute;n o suspensi&oacute;n de la vigencia de un certificado electr&oacute;nico tendr&aacute; efectos retroactivos.";
 answers[50] = choices[50][1];
 units[50] = "30";
 comments[50] = "Id Pregunta: 5131. Examen TIC A Castilla La Mancha 2007 (Ley 59/2003, art&iacute;culo 7.2)";


//  Id pregunta: 5748 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  &iquest;Qu&eacute; es una firma secuencial?";
 choices[51]= new Array();
 choices[51][0] = "Un documento que incluye las firmas de varios usuarios, todas ellas sobre el mismo documento original";
 choices[51][1] = "Un documento que incluye las firmas de varios usuarios, cada una de ellas incluyendo las firmas anteriores en el tiempo";
 choices[51][2] = "Un documento que incluye la firma de un usuario, y uno o varios documentos originales";
 choices[51][3] = "Un documento que contiene un documento original, la firma de uno o varios usuarios, y uno o varios sellos de tiempo";
 answers[51] = choices[51][1];
 units[51] = "74";
 comments[51] = "Id Pregunta: 5748. NULL";


//  Id pregunta: 5895 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;C&oacute;mo se denominan los elementos que permiten insertar c&oacute;digo Java arbitrario en una p&aacute;gina JSP?";
 choices[52]= new Array();
 choices[52][0] = "Applets";
 choices[52][1] = "Codelets";
 choices[52][2] = "Scriptlets";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][2];
 units[52] = "116";
 comments[52] = "Id Pregunta: 5895. ";


//  Id pregunta: 6197 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Para la firma electr&oacute;nica por parte de personal al servicio de las Administraciones P&uacute;blicas NO se contempla el uso de";
 choices[53]= new Array();
 choices[53][0] = "Sello electr&oacute;nico";
 choices[53][1] = "DNI electr&oacute;nico";
 choices[53][2] = "Certificado de empleado p&uacute;blico";
 choices[53][3] = "Sistemas de c&oacute;digo seguro de verificaci&oacute;n";
 answers[53] = choices[53][0];
 units[53] = "43";
 comments[53] = "Id Pregunta: 6197. Articulo 21 RD 1671/2009";


//  Id pregunta: 6207 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[54]= new Array();
 choices[54][0] = "WebLogic";
 choices[54][1] = "WebSphere";
 choices[54][2] = "Apache Tomcat";
 choices[54][3] = "Jboss";
 answers[54] = choices[54][2];
 units[54] = "60";
 comments[54] = "Id Pregunta: 6207. TICB-2009, bloque desarrollo";


//  Id pregunta: 6341 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Qu&eacute; es un widget?";
 choices[55]= new Array();
 choices[55][0] = "Una aplicaci&oacute;n web que utiliza informaci&oacute;n de diversas fuentes relevantes para crear un nuevo servicio en base a ellas, normalmente empleando Servicios Web y APIs p&uacute;blicas. ";
 choices[55][1] = "Una red inform&aacute;tica entre pares, sin servidores centralizados, donde se puede compartir informaci&oacute;n de cualquier tipo.";
 choices[55][2] = "Una peque&ntilde;a aplicaci&oacute;n o m&oacute;dulo que realiza una funci&oacute;n concreta, generalmente de tipo visual, dentro de otras aplicaciones o sistemas operativos.";
 choices[55][3] = "Un enlace fijo que no var&iacute;a con el tiempo.";
 answers[55] = choices[55][2];
 units[55] = "120";
 comments[55] = "Id Pregunta: 6341. NULL";


//  Id pregunta: 7774 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)   Indique cu&aacute;l de las siguientes alternativas corresponde a los procesos principales de que consta la metodolog&iacute;a M&Eacute;TRICA v. 3:";
 choices[56]= new Array();
 choices[56][0] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[56][1] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de viabilidad de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[56][2] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, An&aacute;lisis de Sistemas de Informaci&oacute;n, Construcci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[56][3] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 answers[56] = choices[56][0];
 units[56] = "86";
 comments[56] = "Id Pregunta: 7774. Map 2005";


//  Id pregunta: 7807 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)   En el lenguaje SQL, un valor NULL:";
 choices[57]= new Array();
 choices[57][0] = " Significa blancos o ceros.";
 choices[57][1] = " Puede ser utilizado en una instrucci&oacute;n SELECT.";
 choices[57][2] = " Se utiliza para referirse a la informaci&oacute;n que es incompleta o de la que no se dispone.";
 choices[57][3] = " Ha de ser igual a cualquier otro valor NULL en cualquier sistema.";
 answers[57] = choices[57][2];
 units[57] = "NULL";
 comments[57] = "Id Pregunta: 7807. Map 2005";


//  Id pregunta: 7825 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)   &iquest;Cu&aacute;l de las siguientes actividades no forma parte de la definici&oacute;n del objetivo de la adquisici&oacute;n seg&uacute;n EUROM&Eacute;TODO versi&oacute;n 1?";
 choices[58]= new Array();
 choices[58][0] = " Definir el dominio objetivo.";
 choices[58][1] = " Definir con mayor precisi&oacute;n el objetivo de la adquisici&oacute;n en t&eacute;rminos de requisitos de sistemas y servicios.";
 choices[58][2] = " Analizar los componentes de seguridad.";
 choices[58][3] = " Analizar los costes y beneficios.";
 answers[58] = choices[58][2];
 units[58] = "NULL";
 comments[58] = "Id Pregunta: 7825. Map 2005";


//  Id pregunta: 7879 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)   En relaci&oacute;n con el diccionario de datos en el an&aacute;lisis estructurado, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[59]= new Array();
 choices[59][0] = " Contiene definiciones de todos los objetos de datos gestionados por el software.";
 choices[59][1] = " Se configura con todas las definiciones de objetos de datos, sus atributos y sus relaciones.";
 choices[59][2] = " Almacena tan s&oacute;lo una categorizaci&oacute;n de los objetos de datos, sin recoger sus atributos.";
 choices[59][3] = " Contiene procedimientos almacenados.";
 answers[59] = choices[59][0];
 units[59] = "NULL";
 comments[59] = "Id Pregunta: 7879. Map 2006";


//  Id pregunta: 7982 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)   Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma es un dispositivo que debe ofrecer al menos ciertas garant&iacute;as. &iquest;Cu&aacute;l de las siguientes NO es una de ellas?";
 choices[60]= new Array();
 choices[60][0] = " Que los datos utilizados para la generaci&oacute;n de firma puedan producirse solo una vez y asegurar razonablemente su secreto.";
 choices[60][1] = " Que los datos utilizados para la generaci&oacute;n de firma puedan ser derivados de los de verificaci&oacute;n de firma o de la propia firma.";
 choices[60][2] = " Que los datos de creaci&oacute;n de firma puedan ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;n por terceros.";
 choices[60][3] = " Que el dispositivo utilizado no altere los datos o el documento que deba firmarse ni impida que este se muestre al firmante antes del proceso de firma.";
 answers[60] = choices[60][1];
 units[60] = "NULL";
 comments[60] = "Id Pregunta: 7982. Map 2007";


//  Id pregunta: 8044 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)   GNOME es un entorno de escritorio libre para sistemas operativos libres. Seleccione la afirmaci&oacute;n correcta sobre &eacute;l:";
 choices[61]= new Array();
 choices[61][0] = " Ha sido la base sobre la cual se ha desarrollado el c&oacute;digo de la interfaz gr&aacute;fica de Windows VISTA.";
 choices[61][1] = " Desde sus or&iacute;genes ha utilizado la biblioteca de controles gr&aacute;ficos GTK.";
 choices[61][2] = " Cada vez que se a&ntilde;ade un icono al escritorio requiere que se recompile el Kernel.";
 choices[61][3] = " Solamente admite una profundidad de color de 8 bits.";
 answers[61] = choices[61][1];
 units[61] = "NULL";
 comments[61] = "Id Pregunta: 8044. Map 2007";


//  Id pregunta: 8099 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)   El JTC es un comit&eacute; t&eacute;cnico conjunto de normalizaci&oacute;n en &aacute;mbito de las TIC formado por:";
 choices[62]= new Array();
 choices[62][0] = " CEN y CENELEC.";
 choices[62][1] = " ISO e IEC.";
 choices[62][2] = " CEN y ETSI.";
 choices[62][3] = " ISO y CIE.";
 answers[62] = choices[62][1];
 units[62] = "NULL";
 comments[62] = "Id Pregunta: 8099. Map 2008";


//  Id pregunta: 8102 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   Indique la ventaja de los sistemas RFID (Radio Frecuency Identification) de baja frecuencia:";
 choices[63]= new Array();
 choices[63][0] = " Soportan la lectura simult&aacute;nea de varias etiquetas.";
 choices[63][1] = " El coste de las etiquetas es bajo debido al peque&ntilde;o tama&ntilde;o de su antena.";
 choices[63][2] = " Poseen altas tasas de transmisi&oacute;n.";
 choices[63][3] = " Su se&ntilde;al atraviesa materiales tales como el agua, la madera y el aluminio.";
 answers[63] = choices[63][3];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 8102. Map 2008";


//  Id pregunta: 8355 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  La compa&ntilde;&iacute;a que desarroll&oacute; la tecnolog&iacute;a JSP es:";
 choices[64]= new Array();
 choices[64][0] = "Sun Microsystems.";
 choices[64][1] = "Microsoft.";
 choices[64][2] = "Google.";
 choices[64][3] = "IBM.";
 answers[64] = choices[64][0];
 units[64] = "116";
 comments[64] = "Id Pregunta: 8355. Examen TIC A2 2010";


//  Id pregunta: 8405 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Se&ntilde;ale cu&aacute;l de los siguientes servicios NO se ofrece en la plataforma de validaci&oacute;n y firma electr&oacute;nica @Firma: ";
 choices[65]= new Array();
 choices[65][0] = "Sellado de tiempo (TSA) seg&uacute;n la RFC 3161";
 choices[65][1] = "Validaci&oacute;n, conforme a la RFC 3280, de certificados X.509 de todas las Autoridades de Certificaci&oacute;n reconocidas en el pa&iacute;s por el Ministerio de Industria, Turismo y Comercio ";
 choices[65][2] = "Expedici&oacute;n de certificados de firma electr&oacute;nica del personal al servicio de las Administraciones P&uacute;blicas para el cumplimiento de sus funciones";
 choices[65][3] = "Validaci&oacute;n de firma v&iacute;a servicios web (WS) de un elemento firmado. ";
 answers[65] = choices[65][2];
 units[65] = "44";
 comments[65] = "Id Pregunta: 8405. Examen TIC A2 2010";


//  Id pregunta: 8454 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  El est&aacute;ndar de la red X.25 especifica las siguientes capas de protocolos:";
 choices[66]= new Array();
 choices[66][0] = "Capa F&iacute;sica, de enlace y de paquete";
 choices[66][1] = "Capa F&iacute;sica, de enlace y de sesi&oacute;n";
 choices[66][2] = "Capa de transporte, de sesi&oacute;n y de presentaci&oacute;n";
 choices[66][3] = "Capa f&iacute;sica, de transporte y de presentaci&oacute;n";
 answers[66] = choices[66][0];
 units[66] = "103";
 comments[66] = "Id Pregunta: 8454. Analista Ayto. Madrid 2010";


//  Id pregunta: 8528 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En IPSec, el modo de funcionamiento en el que s&oacute;lo los datos son cifrados o autenticados, y el enrutamiento permanece intacto por lo que asegura la comunicaci&oacute;n extremo a extremo, se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Modo t&uacute;nel.";
 choices[67][1] = "Modo transporte.";
 choices[67][2] = "Modo encapsulado.";
 choices[67][3] = "Modo transparente.";
 answers[67] = choices[67][1];
 units[67] = "111";
 comments[67] = "Id Pregunta: 8528. Examen TIC A2 2010 interna";


//  Id pregunta: 8652 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica propia del Proceso Unificado de Desarrollo de Software?";
 choices[68]= new Array();
 choices[68][0] = "Se basa en las Historias de Usuario.";
 choices[68][1] = "Proceso dirigido por casos de uso.";
 choices[68][2] = "Existe una continua refactorizaci&oacute;n del c&oacute;digo.";
 choices[68][3] = "No contempla la gesti&oacute;n del proyecto.";
 answers[68] = choices[68][1];
 units[68] = "79";
 comments[68] = "Id Pregunta: 8652. Examen TIC A2 2010 interna";


//  Id pregunta: 8679 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  El permiso de Unix 500 pemiite:";
 choices[69]= new Array();
 choices[69][0] = "Lectura y escritura para el propietario del archivo";
 choices[69][1] = "Lectura y ejecuci&oacute;n para el propietario del archivo";
 choices[69][2] = "Lectura y escritura para todos los usuarios";
 choices[69][3] = "Lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[69] = choices[69][1];
 units[69] = "53";
 comments[69] = "Id Pregunta: 8679. Examen UPM A2 2011";


//  Id pregunta: 8861 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  El lenguaje Java Script:";
 choices[70]= new Array();
 choices[70][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[70][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[70][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[70][3] = "Solamente puede ser compilado si el servidor tiene instalada una m&aacute;quina virtual java (JVM)";
 answers[70] = choices[70][1];
 units[70] = "69";
 comments[70] = "Id Pregunta: 8861. Analista Ayto. Madrid 2010";


//  Id pregunta: 8894 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;A qui&eacute;n no est&aacute; dirigido ITIL?";
 choices[71]= new Array();
 choices[71][0] = "Proveedores de servicios de TI";
 choices[71][1] = "Usuarios de servicios de TI";
 choices[71][2] = "Directores y gestores de TI";
 choices[71][3] = "Chief Information Officers";
 answers[71] = choices[71][1];
 units[71] = "98";
 comments[71] = "Id Pregunta: 8894. NULL";


//  Id pregunta: 9218 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Qu&eacute; es WAFS?";
 choices[72]= new Array();
 choices[72][0] = "Wide Area File Service";
 choices[72][1] = "Una evoluci&oacute;n del empaquetado de audio WAV";
 choices[72][2] = "Un tipo de File System";
 choices[72][3] = "Una t&eacute;cnica de compresi&oacute;n de imagen.";
 answers[72] = choices[72][0];
 units[72] = "48";
 comments[72] = "Id Pregunta: 9218. ";


//  Id pregunta: 9241 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Qu&eacute; es Nemo?";
 choices[73]= new Array();
 choices[73][0] = "un gestor de archivos.";
 choices[73][1] = "Una aplicaci&oacute;n multimedia para m&oacute;viles.";
 choices[73][2] = "Una suite de ofim&aacute;tica.";
 choices[73][3] = "Un editor de texto.";
 answers[73] = choices[73][0];
 units[73] = "54";
 comments[73] = "Id Pregunta: 9241. ";


//  Id pregunta: 9296 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Cu&aacute;les son las dimensiones de seguridad seg&uacute;n CobiT?.";
 choices[74]= new Array();
 choices[74][0] = "Confidencialidad, Disponibilidad, Integridad y Autenticidad.";
 choices[74][1] = "Confidencialidad, Integridad y Disponibilidad.";
 choices[74][2] = "Confidencialidad, Integridad, Disponibilidad y Autenticaci&oacute;n.";
 choices[74][3] = "Confidencialidad, Integridad, Disponibilidad e Interoperabilidad.";
 answers[74] = choices[74][1];
 units[74] = "32";
 comments[74] = "Id Pregunta: 9296. ";


//  Id pregunta: 9344 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  El programa ISA contempla una serie de grupos de acciones o &ldquo;clusters&rdquo;. Entre ellos NO se encuentra:";
 choices[75]= new Array();
 choices[75][0] = "Intercambio de Informaci&oacute;n segura";
 choices[75][1] = "Arquitectura de Interoperabilidad";
 choices[75][2] = "Evaluaci&oacute;n de las implicaciones TIC de la nueva legislaci&oacute;n europea.";
 choices[75][3] = "Despliegue de redes de nueva generaci&oacute;n";
 answers[75] = choices[75][0];
 units[75] = "103";
 comments[75] = "Id Pregunta: 9344. Fuente: http://ec.europa.eu/isa/actions/index_en.htm";


//  Id pregunta: 9359 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Qu&eacute; tecnolog&iacute;a permite la multiplexaci&oacute;n de mayor n&uacute;mero de longitudes de onda por una &uacute;nica fibra &oacute;ptica?";
 choices[76]= new Array();
 choices[76][0] = "CWDM ";
 choices[76][1] = "SDH ";
 choices[76][2] = "WDM ";
 choices[76][3] = "DWDM ";
 answers[76] = choices[76][3];
 units[76] = "99";
 comments[76] = "Id Pregunta: 9359. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";


//  Id pregunta: 9391 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;A que hace referencia el t&eacute;rmino care-of address?";
 choices[77]= new Array();
 choices[77][0] = "Direcci&oacute;n IPv6 compatible con IPv4. ";
 choices[77][1] = "Direcci&oacute;n IPv4 mapeada en IPv6.";
 choices[77][2] = "Direcci&oacute;n IP temporal para un dispositivo m&oacute;vil.";
 choices[77][3] = "Direcci&oacute;n IP para transacciones de Terminales Punto de Venta (TPV).";
 answers[77] = choices[77][2];
 units[77] = "108";
 comments[77] = "Id Pregunta: 9391. Examen TIC A2 2011 Libre";


//  Id pregunta: 9400 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes redes WAN esta orientada a conexi&oacute;n?";
 choices[78]= new Array();
 choices[78][0] = "Una red IP";
 choices[78][1] = "Una red ATM.";
 choices[78][2] = "Una red UMTS.";
 choices[78][3] = "Ninguna de las anteriores";
 answers[78] = choices[78][1];
 units[78] = "109";
 comments[78] = "Id Pregunta: 9400. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9407 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Cu&aacute;l es el prop&oacute;sito fundamental de una Oficina de Gesti&oacute;n de Proyectos (PMO)";
 choices[79]= new Array();
 choices[79][0] = "Gestionar de forma centralizada los proyectos TIC en la organizaci&oacute;n";
 choices[79][1] = "Orientar al CIO en la identificaci&oacute;n y definici&oacute;n de futuros proyectos TIC";
 choices[79][2] = "Definir y mantener est&aacute;ndares de gesti&oacute;n de proyectos TIC en la organizaci&oacute;n";
 choices[79][3] = "Llevar la gesti&oacute;n de los proveedores externos";
 answers[79] = choices[79][2];
 units[79] = "26";
 comments[79] = "Id Pregunta: 9407. ";


//  Id pregunta: 9500 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Indica la afirmaci&oacute;n verdadera con respecto a los controles ActiveX:";
 choices[80]= new Array();
 choices[80][0] = "Permiten que los componentes software interact&uacute;en entre s&iacute; en un entorno de red, independientemente del lenguaje en el que han sido programados";
 choices[80][1] = "Se pueden escribir en Java, C++, VB, etc";
 choices[80][2] = "Internet Explorer soporta ActiveX de forma nativa";
 choices[80][3] = "Todas las anteriores son ciertas";
 answers[80] = choices[80][3];
 units[80] = "114";
 comments[80] = "Id Pregunta: 9500. NULL";


//  Id pregunta: 9907 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  De las siguientes cuatro opciones, tres son tareas incluidas en la actividad &quot;GPI 2&quot; del interfaz de Gesti&oacute;n de Proyectos de M&eacute;trica v3, indique cu&aacute;l es la INCORRECTA:";
 choices[81]= new Array();
 choices[81][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[81][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[81][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios.";
 choices[81][3] = "C&aacute;lculo del Esfuerzo.";
 answers[81] = choices[81][3];
 units[81] = "86";
 comments[81] = "Id Pregunta: 9907. TIC A2, Examen 2013";


//  Id pregunta: 9926 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En relaci&oacute;n con el campo TTL, indique la falsa:";
 choices[82]= new Array();
 choices[82][0] = "Sirve para limitar la vida de un paquete. ";
 choices[82][1] = "Evita que los paquetes est&eacute;n dando vueltas eternamente por la red.";
 choices[82][2] = "Permite una vida m&aacute;xima de 512 segundos.";
 choices[82][3] = "En la pr&aacute;ctica, cuenta saltos.";
 answers[82] = choices[82][2];
 units[82] = "100";
 comments[82] = "Id Pregunta: 9926. NULL";


//  Id pregunta: 10098 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l es la diferencia entre una maqueta y un prototipo seg&uacute;n M&eacute;trica v3?";
 choices[83]= new Array();
 choices[83][0] = "Ninguna, son lo mismo seg&uacute;n M&eacute;trica v3.";
 choices[83][1] = "Un prototipo describe parte de la funcionalidad del sistema, una maqueta simula el aspecto visual.";
 choices[83][2] = "Una maqueta describe parte de la funcionalidad del sistema, un prototipo simula el aspecto visual.";
 choices[83][3] = "Una maqueta es un tipo de prototipo evolutivo.";
 answers[83] = choices[83][0];
 units[83] = "78";
 comments[83] = "Id Pregunta: 10098. NULL";


//  Id pregunta: 10200 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cual de las siguientes afirmaciones es correcta respecto al estandar IEEE 802.11ac?";
 choices[84]= new Array();
 choices[84][0] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[84][1] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (512 QAM)";
 choices[84][2] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[84][3] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 answers[84] = choices[84][3];
 units[84] = "107";
 comments[84] = "Id Pregunta: 10200. NULL";


//  Id pregunta: 10246 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio quiere distribuir el software, junto a m&oacute;dulos de terceros que tienen la siguiente licencia:Este c&oacute;digo puede ser libremente modificado, copiado y distribuido, mientras que no se aplique un pago por ello.&iquest;Representa esto una violaci&oacute;n de la licencia GPL?";
 choices[85]= new Array();
 choices[85][0] = "S&iacute;, porque la licencia GPL requiere que modificaciones de sofware bajo licencia GPL sean publicadas bajo licencia GPL";
 choices[85][1] = "S&iacute;, porque la licencia GPL no permite restricciones adicionales sobre una parte cualquiera del c&oacute;digo";
 choices[85][2] = "No, porque el nuevo c&oacute;digo est&aacute; enlazado con el c&oacute;digo de Juan, no copiado dentro de &eacute;l";
 choices[85][3] = "No, porque el resultado tambi&eacute;n puede ser distribuido de forma gratuita";
 answers[85] = choices[85][1];
 units[85] = "61";
 comments[85] = "Id Pregunta: 10246. ";


//  Id pregunta: 10376 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Si un intruso intenta cotillear (eavesdropping) durante el proceso de generaci&oacute;n de las claves generadas por criptograf&iacute;a cu&aacute;ntica:";
 choices[86]= new Array();
 choices[86][0] = "El sistema lo rechaza";
 choices[86][1] = "Las claves generadas se ve alteradas y el intruso es informado de que su intento de interceptaci&oacute;n no ha tenido &eacute;xito";
 choices[86][2] = "Al intentar usar las claves interceptadas le propone el sistema un challenge o desaf&iacute;o adicional";
 choices[86][3] = "S&oacute;lo puede hacerlo si se usan cifradores de flujo";
 answers[86] = choices[86][1];
 units[86] = "72";
 comments[86] = "Id Pregunta: 10376. ";


//  Id pregunta: 10427 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, el principio de simplificaci&oacute;n administrativa al que se ajustar&aacute; la utilizaci&oacute;n de las tecnolog&iacute;as de la informaci&oacute;n, establece ";
 choices[87]= new Array();
 choices[87][0] = "la m&aacute;xima difusi&oacute;n, publicidad y transparencia del procedimiento.";
 choices[87][1] = "el requerimiento a los ciudadanos de s&oacute;lo aquellos datos que sean estrictamente necesarios a la finalidad para la que se soliciten. ";
 choices[87][2] = "la no utilizaci&oacute;n de medios electr&oacute;nicos que puedan implicar restricciones o";
 choices[87][3] = "la reducci&oacute;n de manera sustancial de los t&eacute;rminos y plazos de los procedimientos administrativos. ";
 answers[87] = choices[87][3];
 units[87] = "30";
 comments[87] = "Id Pregunta: 10427. Examen TIC A1 2013";


//  Id pregunta: 10438 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Para determinar la viabilidad de un proyecto a partir de las estimaciones coste/beneficio, METRICA 3 calcula su rentabilidad a trav&eacute;s de ";
 choices[88]= new Array();
 choices[88][0] = "el m&eacute;todo de la cadena de reemplazo.";
 choices[88][1] = "el m&eacute;todo de la anualidad equivalente.";
 choices[88][2] = "m&eacute;todos de coste total de propiedad (TCO).";
 choices[88][3] = "m&eacute;todos de Retorno de la Inversi&oacute;n o del Valor Actual Neto";
 answers[88] = choices[88][3];
 units[88] = "86";
 comments[88] = "Id Pregunta: 10438. Examen TIC A1 2013";


//  Id pregunta: 10450 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En el &aacute;mbito de la continuidad de negocio, la &quot;ventana de interrupci&oacute;n&quot; se define como:";
 choices[89]= new Array();
 choices[89][0] = "La cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[89][1] = "El tiempo que una organizaci&oacute;n puede esperar desde el punto de fallo hasta la restauraci&oacute;n de los servicios o aplicaciones cr&iacute;ticas.";
 choices[89][2] = "Se determina en funci&oacute;n de la p&eacute;rdida de datos aceptable en caso de interrupci&oacute;n de las operaciones ";
 choices[89][3] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 answers[89] = choices[89][1];
 units[89] = "97";
 comments[89] = "Id Pregunta: 10450. NULL";


//  Id pregunta: 10495 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cual de los siguientes no es un servicio prestado por Red SARA?";
 choices[90]= new Array();
 choices[90][0] = "DNS";
 choices[90][1] = "SMTP";
 choices[90][2] = "SNMP";
 choices[90][3] = "NTP";
 answers[90] = choices[90][2];
 units[90] = "43";
 comments[90] = "Id Pregunta: 10495. Punto III.1.3 de la NTI de Requisitos de conexi&oacute;n a Red SARA";


//  Id pregunta: 10621 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Se&ntilde;ale la respuesta correcta:";
 choices[91]= new Array();
 choices[91][0] = "Para desarrollar una aplicaci&oacute;n distribuida en Java es imprescindible la utilizaci&oacute;n de un servidor de aplicaciones.";
 choices[91][1] = "Weblogic es un contenedor de servlets.";
 choices[91][2] = "Wildfly es la versi&oacute;n gratuita de Jboss.";
 choices[91][3] = "Spring es un m&oacute;dulo de Java EE.";
//  Id pregunta: 10687 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La Ley 39/2015, cita expresamente en su pre&aacute;mbulo:";
 choices[92]= new Array();
 choices[92][0] = "La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas.";
 choices[92][1] = "El programa nacional de reformas de Espa&ntilde;a.";
 choices[92][2] = "Ambas.";
 choices[92][3] = "Ninguna de las anteriores.";
 answers[92] = choices[92][2];
 units[92] = "30";
 comments[92] = "Id Pregunta: 10687. ";


//  Id pregunta: 11114 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l no es un requisito para integrarse en la plataforma de intermediaci&oacute;n?";
 choices[93]= new Array();
 choices[93][0] = "Estar conectado a Red SARA.";
 choices[93][1] = "Disponer de certificados X509 de sello de &oacute;rgano.";
 choices[93][2] = "Disponer de un Servicio Web integrado para la gesti&oacute;n automatizada del tr&aacute;mite";
 choices[93][3] = "Tener un convenio firmado para el intercambio bilateral de datos.";
 answers[93] = choices[93][1];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11114. ";


//  Id pregunta: 11236 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique la afirmaci&oacute;n falsa sobre el Framework Spring";
 choices[94]= new Array();
 choices[94][0] = "La versi&oacute;n para la plataforma .NET llamada Spring.net.";
 choices[94][1] = "Soporta programaci&oacute;n basada en aspectos (aspect-oriented programming, AOP).";
 choices[94][2] = "Permite la Integraci&oacute;n con frameworks de persistencia como Hibernate.";
 choices[94][3] = "Como framework MVC utiliza Struts.";
 answers[94] = choices[94][3];
 units[94] = "116";
 comments[94] = "Id Pregunta: 11236. ";


//  Id pregunta: 11351 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En cuanto al formato de la cabecera IPv6, se&ntilde;ale la opci&oacute;n verdadera";
 choices[95]= new Array();
 choices[95][0] = "4 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[95][1] = "4 bits de versi&oacute;n, 20 bits de clase de tr&aacute;fico, 8 etiqueta de flujo";
 choices[95][2] = "8 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[95][3] = "4 bits de versi&oacute;n, 4 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 answers[95] = choices[95][0];
 units[95] = "100";
 comments[95] = "Id Pregunta: 11351. ";


//  Id pregunta: 11360 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a la Gesti&oacute;n de Suministradores?";
 choices[96]= new Array();
 choices[96][0] = "Controlar todos los proveedores externos de TI";
 choices[96][1] = "Seleccionar, contratar, controlar a proveedores externos que entregan productos y servicios TI";
 choices[96][2] = "Alinear todos los contratos U.C. con los SLAs";
 choices[96][3] = "Pagarle a los suministradores de acuerdo a los servicios recibidos";
 answers[96] = choices[96][1];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11360. ";


//  Id pregunta: 11396 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; fase del ciclo de vida del servicio decide qu&eacute; servicios deber&iacute;an ser ofrecidos y a qui&eacute;nes se les va a ofrecer?";
 choices[97]= new Array();
 choices[97][0] = "Mejora continua del servicio";
 choices[97][1] = "Operaci&oacute;n del servicio";
 choices[97][2] = "Dise&ntilde;o del servicio";
 choices[97][3] = "Estrategia del servicio";
 answers[97] = choices[97][3];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11396. ";


//  Id pregunta: 11486 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n el art&iacute;culo 26 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas Ley 39/2015 respecto a la validez de documentos electr&oacute;nicos administrativos, es FALSO que ";
 choices[98]= new Array();
 choices[98][0] = "Deber&aacute;n contener informaci&oacute;n de cualquier naturaleza archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[98][1] = "Deber&aacute;n incorporar metadatos m&iacute;nimos exigidos.";
 choices[98][2] = "Deber&aacute;n incorporar una referencia temporal del momento en que han sido emitidos.";
 choices[98][3] = "Deber&aacute;n incorporar firma electr&oacute;nica aquellos documentos electr&oacute;nicos que sean publicados por las AA.PP con car&aacute;cter meramente informativo.";
 answers[98] = choices[98][3];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11486. NULL";


//  Id pregunta: 11619 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El Algoritmo A* es un m&eacute;todo de b&uacute;squeda:";
 choices[99]= new Array();
 choices[99][0] = "De mejora iterativa";
 choices[99][1] = "Ciego";
 choices[99][2] = "Heur&iacute;stico";
 choices[99][3] = "a) y c) son correctos";
 answers[99] = choices[99][2];
 units[99] = "63";
 comments[99] = "Id Pregunta: 11619. ";


