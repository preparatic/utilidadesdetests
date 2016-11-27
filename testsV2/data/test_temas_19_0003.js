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

//  Id pregunta: 1487 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre FDDI es cierta?:";
 choices[0]= new Array();
 choices[0][0] = "FDDI, en el nivel f&iacute;sico,  utiliza una codificaci&oacute;n llamada &quot;4 de 5&quot; en lugar de la codificaci&oacute;n de Manchester";
 choices[0][1] = "La codificaci&oacute;n utilizada en FDDI no permite el autosincronismo aportado por la codificaci&oacute;n de Manchester";
 choices[0][2] = "La no utilizaci&oacute;n de una codificaci&oacute;n con autosincronismo en FDDI obliga a la necesidad de un pre&aacute;mbulo de 8 o m&aacute;s bytes que permita la sincronizaci&oacute;n de los relojes del emisor y el receptor";
 choices[0][3] = "Todas las respuestas anteriores son ciertas";
 answers[0] = choices[0][3];
 units[0] = "101";
 comments[0] = "Id Pregunta: 1487. ";


//  Id pregunta: 2927 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En una configuraci&oacute;n de red interna o intranet conectada a internet se entiende por DMZ a:";
 choices[1]= new Array();
 choices[1][0] = "El conjunto de Firewalls y filtros que permiten garantizar la seguridad de la red.";
 choices[1][1] = "Una red que enlaza la intranet con internet en la que se implementan todas las restricciones necesarias para la seguridad de la red.";
 choices[1][2] = "Una red que enlaza la intranet con internet en la que se implementan los servicios p&uacute;blicos que se deseen ofrecer, separada de ambas redes mediante sendos Firewalls.";
 choices[1][3] = "Una red que enlaza la intranet con internet en la que se implementan los servicios que requieren mayor protecci&oacute;n y privacidad, separada de ambas redes mediante sendos Firewalls.";
 answers[1] = choices[1][2];
 units[1] = "113";
 comments[1] = "Id Pregunta: 2927. ";


//  Id pregunta: 2953 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[2]= new Array();
 choices[2][0] = "CSMA/CD";
 choices[2][1] = "Token bus";
 choices[2][2] = "Token Ring";
 choices[2][3] = "Aloha ranurado";
 answers[2] = choices[2][1];
 units[2] = "101, 102";
 comments[2] = "Id Pregunta: 2953. Similar a examen TIC SS A 2003";


//  Id pregunta: 2957 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Dada la direcci&oacute;n IP 00001010.00000001.10000001.10000001 con m&aacute;scara de subred 11111111.11111111.11111111.11000000. Indique cu&aacute;l es, en binario, la direcci&oacute;n IP resultante de aplicar la operaci&oacute;n l&oacute;gica correspondiente entre ambas para calcular la subred ";
 choices[3]= new Array();
 choices[3][0] = "00001010.00000001.10000001.10000000";
 choices[3][1] = "00001010.00000001.10000001.00000000";
 choices[3][2] = "00001010.00000001.00000000.00000001";
 choices[3][3] = "00001010.00000001.10000001.11000000";
 answers[3] = choices[3][0];
 units[3] = "100";
 comments[3] = "Id Pregunta: 2957. Examen TIC MAP B 2004";


//  Id pregunta: 2958 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  TCP es un protocolo";
 choices[4]= new Array();
 choices[4][0] = "Orientado a conexi&oacute;n";
 choices[4][1] = "Orientado a conexi&oacute;n y no orientado a conexi&oacute;n";
 choices[4][2] = "Orientado a conexi&oacute;n y con control de errores";
 choices[4][3] = "Orientado a conexi&oacute;n y no orientado a conexi&oacute;n y con control de errores";
 answers[4] = choices[4][2];
 units[4] = "100";
 comments[4] = "Id Pregunta: 2958. Tanenbaum";


//  Id pregunta: 2979 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  En broadcast, &iquest;qu&eacute; protocolo traduce a direcci&oacute;n f&iacute;sica?";
 choices[5]= new Array();
 choices[5][0] = "TCP";
 choices[5][1] = "UDP";
 choices[5][2] = "RIP";
 choices[5][3] = "ARP";
 answers[5] = choices[5][3];
 units[5] = "100";
 comments[5] = "Id Pregunta: 2979. Examen Julio 2003";


//  Id pregunta: 2986 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  La direcci&oacute;n ip 127.0.0.1 representa a";
 choices[6]= new Array();
 choices[6][0] = "El router de la red";
 choices[6][1] = "Toda la red";
 choices[6][2] = "El propio equipo";
 choices[6][3] = "Usualmente el servidor";
 answers[6] = choices[6][2];
 units[6] = "100";
 comments[6] = "Id Pregunta: 2986. NULL";


//  Id pregunta: 3006 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  En qu&eacute; tipos se divide la fibra &oacute;ptica en funci&oacute;n de la forma de variaci&oacute;n del &iacute;ndice de refracci&oacute;n desde el eje de la fibra al exterior";
 choices[7]= new Array();
 choices[7][0] = "f.o. monomodo y multimodo";
 choices[7][1] = "f.o. de salto de &iacute;ndice y de &iacute;ndice gradual";
 choices[7][2] = "f.o. de emisores LED y emisores l&aacute;ser";
 choices[7][3] = "f.o. de &iacute;ndice anal&oacute;gico y digital";
 answers[7] = choices[7][1];
 units[7] = "99";
 comments[7] = "Id Pregunta: 3006. NULL";


//  Id pregunta: 3047 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; diferencia hay entre un servidor de ficheros y un servidor de bases de datos?:";
 choices[8]= new Array();
 choices[8][0] = "El servidor de ficheros devuelve el fichero entero y el de bases de datos s&oacute;lo el dato solicitado";
 choices[8][1] = "El servidor de ficheros es m&aacute;s barato";
 choices[8][2] = "No hay diferencia; es lo mismo";
 choices[8][3] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[8] = choices[8][3];
 units[8] = "113";
 comments[8] = "Id Pregunta: 3047. ";


//  Id pregunta: 3132 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[9]= new Array();
 choices[9][0] = "Una vez establecida la llamada es posible establecer otra llamada por el mismo circuito";
 choices[9][1] = "Una vez establecida la llamada no es posible establecer otra llamada por el mismo circuito";
 choices[9][2] = "No existe ning&uacute;n tipo de encaminamiento";
 choices[9][3] = "Todos los  paquetes siguen el mismo camino por la red";
 answers[9] = choices[9][0];
 units[9] = "101";
 comments[9] = "Id Pregunta: 3132. ";


//  Id pregunta: 3161 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones, relacionadas con el modelo OSI, es falsa?";
 choices[10]= new Array();
 choices[10][0] = "Un SAP es un recurso a trav&eacute;s del cual una entidad de nivel N+1 accede a los servicios de nivel N";
 choices[10][1] = "Una entidad N+1 s&oacute;lo puede estar conectada a un SAP";
 choices[10][2] = "Las entidades conectadas a trav&eacute;s de un SAP deben residir en el mismo subsistema";
 choices[10][3] = "Una direcci&oacute;n de SAP identifica a un &uacute;nico SAP";
 answers[10] = choices[10][1];
 units[10] = "100";
 comments[10] = "Id Pregunta: 3161. ";


//  Id pregunta: 3166 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un protocolo de transmisi&oacute;n orientado a bit?:";
 choices[11]= new Array();
 choices[11][0] = "Para detectar el principio y el final de una trama se utiliza una secuencia de bits, llamada bandera";
 choices[11][1] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n mensajes constituidos por uno o varios caracteres, llamados de control de la comunicaci&oacute;n, tomados de un c&oacute;digo preestablecido";
 choices[11][2] = "La trama es de formato fijo, constituida por campos de longitud determinada, excepto el campo de informaci&oacute;n";
 choices[11][3] = "Utiliza para la supervisi&oacute;n de la comunicaci&oacute;n campos de control con bits (o grupos de bits) cuyo significado est&aacute; dado por su posici&oacute;n";
 answers[11] = choices[11][1];
 units[11] = "100, 101";
 comments[11] = "Id Pregunta: 3166. ";


//  Id pregunta: 3173 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes funciones no es propia de los protocolos de nivel de enlace?:";
 choices[12]= new Array();
 choices[12][0] = "Control de flujo";
 choices[12][1] = "Sincronizacion y entramado";
 choices[12][2] = "Control de los canales l&oacute;gicos";
 choices[12][3] = "Recuperaci&oacute;n de errores";
 answers[12] = choices[12][2];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3173. NULL";


//  Id pregunta: 3191 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Dentro del modelo OSI la funci&oacute;n de 'manejo de distintos terminales', corresponde al nivel:";
 choices[13]= new Array();
 choices[13][0] = "Nivel de red";
 choices[13][1] = "Nivel de transporte";
 choices[13][2] = "Nivel de sesi&oacute;n";
 choices[13][3] = "Nivel de presentaci&oacute;n";
 answers[13] = choices[13][3];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3191. NULL";


//  Id pregunta: 3197 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Dentro del modelo OSI, podemos afirmar que:";
 choices[14]= new Array();
 choices[14][0] = "El nivel 2 no hay control de flujo";
 choices[14][1] = "El nivel 3 se enfrenta a problemas de encaminamiento";
 choices[14][2] = "El nivel 4 se encarga de los problemas de interconexi&oacute;n de redes";
 choices[14][3] = "En el nivel 5 se tratan los aspectos sint&aacute;ctico y sem&aacute;ntico de la informaci&oacute;n";
 answers[14] = choices[14][1];
 units[14] = "100";
 comments[14] = "Id Pregunta: 3197. NULL";


//  Id pregunta: 3203 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El algoritmo conocido como Spanning Tree Algorithm se usa:";
 choices[15]= new Array();
 choices[15][0] = "Para optimizar los caminos usados en redes complejas con routers";
 choices[15][1] = "Evitar bucles en redes con puentes transparentes que tienen varios path entre ellos";
 choices[15][2] = "Calcular los cambios a hacer en las configuraciones de los routers cuando alguno de ellos falla";
 choices[15][3] = "Se usa en redes de Token Bus para calcular a quien pasar el testigo (token) en caso de que la siguiente estaci&oacute;n no conteste (puede estar apagada o estropeada)";
 answers[15] = choices[15][1];
 units[15] = "102";
 comments[15] = "Id Pregunta: 3203. ";


//  Id pregunta: 3208 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El comando de FTP que presenta los mensajes del servidor es:";
 choices[16]= new Array();
 choices[16][0] = "Dir ";
 choices[16][1] = "Pwd ";
 choices[16][2] = "Verbose ";
 choices[16][3] = "Lcd";
 answers[16] = choices[16][2];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3208. Verbose:activa o desactiva modalidad informativa";


//  Id pregunta: 3239 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l es el servicio del nivel de enlace del modelo OSI m&aacute;s apropiado para transmitir voz?:";
 choices[17]= new Array();
 choices[17][0] = "Servicio con acuse de recibo y sin conexi&oacute;n";
 choices[17][1] = "Servicio sin acuse de recibo y sin conexi&oacute;n";
 choices[17][2] = "Servicio con acuse de recibo y orientado a la conexi&oacute;n";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][1];
 units[17] = "100";
 comments[17] = "Id Pregunta: 3239. NULL";


//  Id pregunta: 3242 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l es la funci&oacute;n principal del protocolo ICMP?:";
 choices[18]= new Array();
 choices[18][0] = "Convertir direcciones hardware en direcciones IP";
 choices[18][1] = "Convertir direcciones IP en direcciones hardware";
 choices[18][2] = "Estar orientado a la conexi&oacute;n y proporcionar una conexi&oacute;n full-duplex fiable";
 choices[18][3] = "Manejar el control de la informaci&oacute;n y de errores entre el router y el host";
 answers[18] = choices[18][3];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3242. NULL";


//  Id pregunta: 3338 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Comparando las cabeceras IPv4 e IPV6:";
 choices[19]= new Array();
 choices[19][0] = "En IPv6 se mantiene el campo de checksum";
 choices[19][1] = "En IPv6 aparece nuevo el campo de versi&oacute;n";
 choices[19][2] = "El campo 'tiempo de vida' de IPv4 se transforma en el campo 'l&iacute;mite de saltos' de IPv6";
 choices[19][3] = "En IPv6 se sigue conservando como en IPv4 el campo de 'etiqueta de flujo'";
 answers[19] = choices[19][2];
 units[19] = "100";
 comments[19] = "Id Pregunta: 3338. NULL";


//  Id pregunta: 3356 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  De los cuatro octetos que forman una direcci&oacute;n del protocolo IP indicar en qu&eacute; clase de red se utiliza un octeto para los n&uacute;meros de host:";
 choices[20]= new Array();
 choices[20][0] = "Clase B";
 choices[20][1] = "Clase D";
 choices[20][2] = "Clase A";
 choices[20][3] = "Clase C";
 answers[20] = choices[20][3];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3356. NULL";


//  Id pregunta: 3374 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Dentro del Modelo de Referencia OSI para la interconexi&oacute;n de sistemas abiertos:";
 choices[21]= new Array();
 choices[21][0] = "El formato de datos corresponde al nivel 6";
 choices[21][1] = "El enrutamiento de paquetes corresponde al nivel 4";
 choices[21][2] = "La multiplexaci&oacute;n de conexiones corresponde al nivel 2";
 choices[21][3] = "Todas las anteriores son ciertas";
 answers[21] = choices[21][0];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3374. NULL";


//  Id pregunta: 3385 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El modelo OSI (Open System Interconnection, Interconexi&oacute;n de Sistemas Abiertos):";
 choices[22]= new Array();
 choices[22][0] = "Dispone de 5 niveles: f&iacute;sico, enlace, red, transporte, aplicaci&oacute;n, usuario";
 choices[22][1] = "Dispone de 7 niveles: f&iacute;sico, enlace, red, transporte, sesi&oacute;n, presentaci&oacute;n, aplicaci&oacute;n";
 choices[22][2] = "No fue pensado en su momento para comunicaci&oacute;n cliente-servidor, sino m&aacute;s bien comunicaci&oacute;n peer- to-peer";
 choices[22][3] = "Las opciones c) y b) son correctas";
 answers[22] = choices[22][3];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3385. NULL";


//  Id pregunta: 3391 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El nivel de enlace del modelo OSI tiene como funci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Enrutar los datos";
 choices[23][1] = "Conectar sistemas no enlazados directamente";
 choices[23][2] = "Transmitir informaci&oacute;n entre nodos conectados entre si directamente";
 choices[23][3] = "Mantener la integridad de los datos entre extremos de la red";
 answers[23] = choices[23][2];
 units[23] = "100";
 comments[23] = "Id Pregunta: 3391. NULL";


//  Id pregunta: 3402 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Entre las unidades de datos intercambiadas entre niveles pares y adyacentes del Modelo de Referencia OSI, cu&aacute;l de las siguientes combinaciones es cierta:";
 choices[24]= new Array();
 choices[24][0] = "PDU + PCI = SDU";
 choices[24][1] = "IDU + ICI = SDU";
 choices[24][2] = "SDU + PCI = PDU";
 choices[24][3] = "&quot;b&quot; y &quot;c&quot; son ciertas";
 answers[24] = choices[24][2];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3402. NULL";


//  Id pregunta: 3404 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Entre los modos de conexi&oacute;n de la Red Digital de Servicios Integrados se define el Acceso B&aacute;sico. Indique cu&aacute;l de las siguientes opciones lo define, o si son falsas todas las definiciones:";
 choices[25]= new Array();
 choices[25][0] = "Un Acceso B&aacute;sico se define como el constituido por dos canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[25][1] = "Un Acceso B&aacute;sico se define como el constituido por treinta canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[25][2] = "Un Acceso B&aacute;sico se define como el constituido por doce canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][0];
 units[25] = "103";
 comments[25] = "Id Pregunta: 3404. ";


//  Id pregunta: 3441 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  El protocolo ARP:";
 choices[26]= new Array();
 choices[26][0] = "S&oacute;lo funciona si hay un proxy configurado";
 choices[26][1] = "Permite relacionar puertos TCP y direcciones IP";
 choices[26][2] = "Permite relacionar puertos TCP  y direcciones MAC";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][3];
 units[26] = "100,102";
 comments[26] = "Id Pregunta: 3441. ";


//  Id pregunta: 3445 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  El protocolo de control de enlace normalizado por ISO y que corresponde exclusivamente al nivel 2 de su modelo de referencia es el:";
 choices[27]= new Array();
 choices[27][0] = "37288";
 choices[27][1] = "37316";
 choices[27][2] = "37347";
 choices[27][3] = "37377";
 answers[27] = choices[27][0];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3445. NULL";


//  Id pregunta: 3468 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El ruido t&eacute;rmico es una perturbaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Debida a las diferencias en los coeficientes de dilataci&oacute;n de los conductores";
 choices[28][1] = "Aleatoria que aparece de forma natural en los conductores por agitaci&oacute;n de los electrones";
 choices[28][2] = "Igual a la temperatura a la cual la resistencia equivalente del dispositivo producir&iacute;a el ruido total observado";
 choices[28][3] = "Introducida en el proceso de cuantificaci&oacute;n";
 answers[28] = choices[28][1];
 units[28] = "99";
 comments[28] = "Id Pregunta: 3468. ";


//  Id pregunta: 3473 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  El subnivel MAC del nivel de enlace de datos de la pila de protocolos OSI proporciona:";
 choices[29]= new Array();
 choices[29][0] = "Las direcciones de los puntos de acceso al servicio";
 choices[29][1] = "Servicios orientados a la conexi&oacute;n";
 choices[29][2] = "Servicios orientados a la conexi&oacute;n con reconocimiento";
 choices[29][3] = "La direcci&oacute;n f&iacute;sica de un dispositivo de la red";
 answers[29] = choices[29][3];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3473. NULL";


//  Id pregunta: 3512 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En el protocolo IPv6, el tama&ntilde;o maximo de trama es de:";
 choices[30]= new Array();
 choices[30][0] = "65535 Bytes";
 choices[30][1] = "Depende del campo 'Payload'";
 choices[30][2] = "No hay tama&ntilde;o m&aacute;ximo de trama en IPv6";
 choices[30][3] = "Depende de la versi&oacute;n utilizada";
 answers[30] = choices[30][0];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3512. NULL";


//  Id pregunta: 3529 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  En la Red Digital de Servicios Integrados (RDSI), un acceso b&aacute;sico permite:    ";
 choices[31]= new Array();
 choices[31][0] = "Obligatoriamente un canal de voz, otro de datos y un tercero de se&ntilde;alizaci&oacute;n";
 choices[31][1] = "Tres conversaciones telef&oacute;nicas simult&aacute;neas";
 choices[31][2] = "Dos conversaciones telef&oacute;nicas simult&aacute;neas";
 choices[31][3] = "Un canal de datos y dos canales de v&iacute;deo";
 answers[31] = choices[31][2];
 units[31] = "103";
 comments[31] = "Id Pregunta: 3529. ";


//  Id pregunta: 3530 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  En la Red Digital de Servicios Integrados, indique cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[32]= new Array();
 choices[32][0] = "Existen definidos 2 tipos de acceso: b&aacute;sico y primario";
 choices[32][1] = "El acceso primario est&aacute; constituido por 30 canales B de 64 kbps y 1 canal D de 16 kbps";
 choices[32][2] = "Es posible la conexi&oacute;n a la RDSI a trav&eacute;s de un modem m&aacute;s un adaptador anal&oacute;gico-digital";
 choices[32][3] = "Proporciona conexiones digitales extremo a extremo";
 answers[32] = choices[32][1];
 units[32] = "103";
 comments[32] = "Id Pregunta: 3530. ";


//  Id pregunta: 3534 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  En las redes locales, &iquest;qu&eacute; funciones tienen los repetidores?:";
 choices[33]= new Array();
 choices[33][0] = "Repiten los paquetes como se&ntilde;ales el&eacute;ctricas de una red a otra";
 choices[33][1] = "Repiten los paquetes incompletos para que sean reenviados completos";
 choices[33][2] = "Eliminan el ruido de las se&ntilde;ales en la l&iacute;nea y emiten los paquetes regenerados";
 choices[33][3] = "Repiten y ampl&iacute;an las se&ntilde;ales el&eacute;ctricas, incluyendo el ruido";
 answers[33] = choices[33][2];
 units[33] = "102";
 comments[33] = "Id Pregunta: 3534. ";


//  Id pregunta: 3563 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  En un entorno donde m&uacute;ltiples ordenadores cliente experimentan congesti&oacute;n accediendo a ficheros en unservidor centralizado:";
 choices[34]= new Array();
 choices[34][0] = "Un conmutador (switch) con un ancho de banda mayor dedicado a las puertas de los clientes ayudar&aacute; a aliviar la congesti&oacute;n en el servidor";
 choices[34][1] = "Un switch con el mismo ancho de banda para cada puerta asegurar&aacute; que se la carga de trabajo se distribuya";
 choices[34][2] = "Un an&aacute;lisis de las pautas de tr&aacute;fico y de los puntos cuellos de botella ayudar&aacute; a determinar el tipo de conmutador apropiado";
 choices[34][3] = "Un puente multipuerta proporcionar&aacute; acceso dedicado a la puerta del servidor y aliviar&aacute; la congesti&oacute;n";
 answers[34] = choices[34][2];
 units[34] = "102, 104";
 comments[34] = "Id Pregunta: 3563. ";


//  Id pregunta: 3568 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  En una arquitectura de red OSI la responsabilidad de dividir los mensajes en unidades adecuadas a las especificaciones contratadas con la red X25 es de:";
 choices[35]= new Array();
 choices[35][0] = "Del nivel de transporte que le pasa al de red las unidades que debe enviar y el cometido del de red es enviarlos";
 choices[35][1] = "Del nivel de red ya que debe segmentar los fragmentos que le pasa el nivel de transporte en paquetes aceptables por la red X25";
 choices[35][2] = "Del nivel de enlace ya que es el responsable de hacer las tramas que coloca en el enlace";
 choices[35][3] = "De ninguno de ellos ya que el software de red del proveedor lo hace por su cuenta, para dividir el mensaje en paquetes con la longitud que m&aacute;s le convenga a sus conmutadores";
 answers[35] = choices[35][1];
 units[35] = "101, 102";
 comments[35] = "Id Pregunta: 3568. ";


//  Id pregunta: 3574 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  En una red de &aacute;rea extensa (WAN):";
 choices[36]= new Array();
 choices[36][0] = "Los tiempos de propagaci&oacute;n son bajos";
 choices[36][1] = "Las velocidades de transmisi&oacute;n de datos son lentas, sobre todo comparadas con las LAN";
 choices[36][2] = "Baja tasa de errores, haciendo innecesario procedimientos efectivos para la detecci&oacute;n y su recuperaci&oacute;n";
 choices[36][3] = "Los retrasos son predecibles";
 answers[36] = choices[36][1];
 units[36] = "101";
 comments[36] = "Id Pregunta: 3574. ";


//  Id pregunta: 3608 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  La funci&oacute;n de asociar sesiones con conexiones de transporte corresponde a:";
 choices[37]= new Array();
 choices[37][0] = "Nivel 3 Red";
 choices[37][1] = "Nivel 4 Transporte";
 choices[37][2] = "Nivel 5 Sesi&oacute;n";
 choices[37][3] = "Nivel 6 Presentaci&oacute;n";
 answers[37] = choices[37][1];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3608. NULL";


//  Id pregunta: 3625 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  La normativa referente a la Red Digital de Servicios Integrados para el uso por el usuario de los canales de 64 kbps, &iquest;a qu&eacute; nivel del modelo de referencia OSI corresponder&iacute;a?:";
 choices[38]= new Array();
 choices[38][0] = "Al nivel 8 : Administraci&oacute;n";
 choices[38][1] = "Al nivel 1 : F&iacute;sico";
 choices[38][2] = "Al nivel 3 : Red";
 choices[38][3] = "Al nivel 5 : Enlace";
 answers[38] = choices[38][1];
 units[38] = "102,104,109";
 comments[38] = "Id Pregunta: 3625. ";


//  Id pregunta: 3633 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  La prioridad de acceso en redes Token Ring:";
 choices[39]= new Array();
 choices[39][0] = "Usa los primeros 6 bits en el campo 'Priority' (prioridad) para controlar el acceso en red Token Ring";
 choices[39][1] = "Permite a los puentes de la red limitar tr&aacute;fico de broadcast sobre redes locales o remotas";
 choices[39][2] = "Es una funci&oacute;n del router (encaminador o canalizador) usada para control de acceso a ciertas puertas seg&uacute;n la prioridad de la direcci&oacute;n";
 choices[39][3] = "Permite que ciertas estaciones accedan a la red m&aacute;s frecuentemente que otras basadas en su prioridad";
 answers[39] = choices[39][3];
 units[39] = "101";
 comments[39] = "Id Pregunta: 3633. ";


//  Id pregunta: 3652 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  La topolog&iacute;a m&aacute;s com&uacute;n de dise&ntilde;o de redes SDH es:";
 choices[40]= new Array();
 choices[40][0] = "malla completa o parcial";
 choices[40][1] = "anillo";
 choices[40][2] = "estrella";
 choices[40][3] = "&aacute;rbol";
 answers[40] = choices[40][1];
 units[40] = "101";
 comments[40] = "Id Pregunta: 3652. ";


//  Id pregunta: 3669 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  Una de las capas o niveles del modelo de referencia de interconexi&oacute;n de sistemas abiertos (OSI) no corresponde a la operaci&oacute;n de los dispositivos mencionados. &iquest;Cual?:";
 choices[41]= new Array();
 choices[41][0] = "F&iacute;sico - Repetidor (&ldquo;repeater&rdquo;), Concentrador (&ldquo;hub&rdquo;), M&oacute;dem, TR1, AT";
 choices[41][1] = "Enlace - Puente (&ldquo;bridge&rdquo;), Conmutador (&ldquo;switch&rdquo;)";
 choices[41][2] = "Enlace - Conector V.24, Conector V.35";
 choices[41][3] = "Red - Encaminador (&ldquo;router&rdquo;)";
 answers[41] = choices[41][2];
 units[41] = "100,101";
 comments[41] = "Id Pregunta: 3669. ";


//  Id pregunta: 3693 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  Las direcciones de tipo B en IPv4:";
 choices[42]= new Array();
 choices[42][0] = "Comienzan por '110'";
 choices[42][1] = "incluyen entre ellas a la direcci&oacute;n 193.168.25.73";
 choices[42][2] = "destina 16 bits para los sistemas";
 choices[42][3] = "es utilizada para direcciones multicast";
 answers[42] = choices[42][2];
 units[42] = "100";
 comments[42] = "Id Pregunta: 3693. NULL";


//  Id pregunta: 3698 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  Las estaciones de una red Token Ring transmiten utilizando la t&eacute;cnica de:";
 choices[43]= new Array();
 choices[43][0] = "Detecci&oacute;n de transmisiones";
 choices[43][1] = "Detecci&oacute;n de colisiones";
 choices[43][2] = "Paso de testigo";
 choices[43][3] = "Reintentos aleatorios";
 answers[43] = choices[43][2];
 units[43] = "101";
 comments[43] = "Id Pregunta: 3698. ";


//  Id pregunta: 3701 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  Las funciones del modelo OSI siguientes: criptograf&iacute;a, gesti&oacute;n de conversaciones, detecci&oacute;n de errores extremo a extremo, validaciones de tensiones el&eacute;ctricas, garantizar la conexi&oacute;n punto a punto; corresponden, por este orden, a los niveles OSI:";
 choices[44]= new Array();
 choices[44][0] = "Presentaci&oacute;n, aplicaci&oacute;n, transporte, f&iacute;sico, red";
 choices[44][1] = "Presentaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, enlace";
 choices[44][2] = "Aplicaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, red";
 choices[44][3] = "Aplicaci&oacute;n, sesi&oacute;n, red, enlace, transporte";
 answers[44] = choices[44][1];
 units[44] = "100";
 comments[44] = "Id Pregunta: 3701. NULL";


//  Id pregunta: 3710 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  Las velocidades de transmisi&oacute;n y de modulaci&oacute;n:";
 choices[45]= new Array();
 choices[45][0] = "Son siempre iguales";
 choices[45][1] = "La de transmisi&oacute;n s&oacute;lo puede ser mayor o igual a la de modulaci&oacute;n";
 choices[45][2] = "La de modulaci&oacute;n s&oacute;lo puede ser mayor o igual que la de transmisi&oacute;n";
 choices[45][3] = "La velocidad de transmisi&oacute;n puede ser mayor, menor o igual que la de modulaci&oacute;n, seg&uacute;n el caso";
 answers[45] = choices[45][1];
 units[45] = "99";
 comments[45] = "Id Pregunta: 3710. *: transmision modulacion";


//  Id pregunta: 3714 AÃ±o de creación de pregunta: 2002-01-01
 questions[46]= "47)  Los barcos cableros:";
 choices[46]= new Array();
 choices[46][0] = "No existen";
 choices[46][1] = "Son barcos-factor&iacute;a que fabrican cableado de altas prestaciones en alta mar aprovechando las mejores condiciones fiscales de las aguas internacionales";
 choices[46][2] = "Son barcos cuya misi&oacute;n principal es instalar en el fondo marino los cables submarinos de alta capacidad que unen distintos puntos separados mediante mares u oc&eacute;anos";
 choices[46][3] = "Todo lo anterior es falso";
 answers[46] = choices[46][2];
 units[46] = "99";
 comments[46] = "Id Pregunta: 3714. ";


//  Id pregunta: 3738 AÃ±o de creación de pregunta: 2002-01-01
 questions[47]= "48)  Los puentes que evitan el bucle de paquetes cuando hay varios enlaces entre ellos se denominan:";
 choices[47]= new Array();
 choices[47][0] = "Adaptativos y redundantes";
 choices[47][1] = "Tipo 'source routing'";
 choices[47][2] = "Tipo 'spanning tree'";
 choices[47][3] = "De inversi&oacute;n de se&ntilde;ales f&iacute;sicas";
 answers[47] = choices[47][2];
 units[47] = "102";
 comments[47] = "Id Pregunta: 3738. ";


//  Id pregunta: 3750 AÃ±o de creación de pregunta: 2002-01-01
 questions[48]= "49)  MIB es:";
 choices[48]= new Array();
 choices[48][0] = "Una base de datos de informaci&oacute;n de gestion";
 choices[48][1] = "Un protocolo de gesti&oacute;n";
 choices[48][2] = "Un dominio de gesti&oacute;n";
 choices[48][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[48] = choices[48][0];
 units[48] = "104";
 comments[48] = "Id Pregunta: 3750. ";


//  Id pregunta: 3751 AÃ±o de creación de pregunta: 2002-01-01
 questions[49]= "50)  MIB son unas siglas asociadas a:";
 choices[49]= new Array();
 choices[49][0] = "SGBD orientadas a objetos";
 choices[49][1] = "Lenguaje de programaci&oacute;n C++";
 choices[49][2] = "Sistemas de gesti&oacute;n de redes";
 choices[49][3] = "Sistemas OLAP";
 answers[49] = choices[49][2];
 units[49] = "104";
 comments[49] = "Id Pregunta: 3751. ";


//  Id pregunta: 3781 AÃ±o de creación de pregunta: 2002-01-01
 questions[50]= "51)  Respecto a  los distintos modos de transmisi&oacute;n en una comunicaci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "La telefon&iacute;a convencional es de tipo d&uacute;plex, mientras que la telefon&iacute;a m&oacute;vil es semiduplex";
 choices[50][1] = "La radiofusi&oacute;n de televisi&oacute;n es de tipo semid&uacute;plex, transmite sonido e imagen en la misma portadora";
 choices[50][2] = "La radiofusi&oacute;n de se&ntilde;al musical en frecuencia modulada es un sistema simplex";
 choices[50][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[50] = choices[50][2];
 units[50] = "99";
 comments[50] = "Id Pregunta: 3781. *: transmision modulacion";


//  Id pregunta: 3791 AÃ±o de creación de pregunta: 2002-01-01
 questions[51]= "52)  Respecto a los dispositivos de interconexi&oacute;n de redes locales, es falso que:";
 choices[51]= new Array();
 choices[51][0] = "El repetidor compatibiliza 2 medios de transmisi&oacute;n a nivel f&iacute;sico";
 choices[51][1] = "Los puentes operan a nivel de enlace, subnivel LLC para un mismo nivel MAC";
 choices[51][2] = "Los enrutadores conectan LANs con LANs, MANs o WANs";
 choices[51][3] = "Las pasarelas trabajan a nivel de red o superior";
 answers[51] = choices[51][1];
 units[51] = "102";
 comments[51] = "Id Pregunta: 3791. ";


//  Id pregunta: 3818 AÃ±o de creación de pregunta: 2002-01-01
 questions[52]= "53)  Se&ntilde;ale entre los siguientes, cu&aacute;l es un par&aacute;metro de calidad en redes RDSI:";
 choices[52]= new Array();
 choices[52][0] = "Grado de servicio";
 choices[52][1] = "Alerting delay";
 choices[52][2] = "Bit error";
 choices[52][3] = "Todos son par&aacute;metros de calidad";
 answers[52] = choices[52][3];
 units[52] = "103";
 comments[52] = "Id Pregunta: 3818. ";


//  Id pregunta: 3846 AÃ±o de creación de pregunta: 2002-01-01
 questions[53]= "54)  Topolog&iacute;a de una red (indicar la respuesta err&oacute;nea):";
 choices[53]= new Array();
 choices[53][0] = "Se distingue entre topolog&iacute;a f&iacute;sica y topolog&iacute;a l&oacute;gica";
 choices[53][1] = "En una configuraci&oacute;n en estrella se pueden utilizar medios y velocidades de transmisi&oacute;n diferentes a lo largo de la red";
 choices[53][2] = "En una configuraci&oacute;n en Bus, todas las estaciones est&aacute;n conectadas a un &uacute;nico canal de comunicaciones";
 choices[53][3] = "En una configuraci&oacute;n en anillo, la aver&iacute;a de una estaci&oacute;n no afecta al servicio";
 answers[53] = choices[53][3];
 units[53] = "101";
 comments[53] = "Id Pregunta: 3846. ";


//  Id pregunta: 3892 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  En el nivel de Enlace del modelo OSI, parada-espera, adelante-atr&aacute;s, y rechazo selectivo, son:";
 choices[54]= new Array();
 choices[54][0] = "M&eacute;todos de detecci&oacute;n de errores.";
 choices[54][1] = "Mecanismos de solicitud de repetici&oacute;n autom&aacute;tica (ARQ).";
 choices[54][2] = "Protocolos de control de enlace de alto nivel.";
 choices[54][3] = "Procedimientos de acceso al enlace.";
 answers[54] = choices[54][1];
 units[54] = "100";
 comments[54] = "Id Pregunta: 3892. Junta Andaluc&iacute;a";


//  Id pregunta: 3896 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  En una red VoIP el elemento llamado &quot;SoftSwitch&quot; es el encargado de:  ";
 choices[55]= new Array();
 choices[55][0] = "Permitir la comunicaci&oacute;n entre la Red VoIP y las Redes tradicionales de Conmutaci&oacute;n de Circuitos";
 choices[55][1] = "Proporcionar una interfaz hacia la Red VoIP y una o mas interfaces tradicionales de voz hacia el cliente ";
 choices[55][2] = "Recibir la se&ntilde;alizaci&oacute;n de las llamadas y de enrutarlas hacia su destino";
 choices[55][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[55] = choices[55][2];
 units[55] = "100";
 comments[55] = "Id Pregunta: 3896. NULL";


//  Id pregunta: 3931 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cu&aacute;les son los tipos de direcciones unicast especiales de IPv6? ";
 choices[56]= new Array();
 choices[56][0] = "de &aacute;mbito local y de &aacute;mbito privado";
 choices[56][1] = "Loopback, inespec&iacute;fica, compatibles, mapeadas a IPv4, de &aacute;mbito local, de &aacute;mbito privado y  globales ";
 choices[56][2] = "Compatibles, mapeadas a IPv4 y globales ";
 choices[56][3] = "Compatibles, mapeadas a IPv4, locales y globales";
 answers[56] = choices[56][1];
 units[56] = "100";
 comments[56] = "Id Pregunta: 3931. ";


//  Id pregunta: 3940 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Qu&eacute; mensajes son necesarios para establecer una conexi&oacute;n TCP?:";
 choices[57]= new Array();
 choices[57][0] = "SYN y ACK";
 choices[57][1] = "SYN, SYN-ACK y ACK";
 choices[57][2] = "SYN, SYN-ACK, ACK y NSI";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = choices[57][1];
 units[57] = "100";
 comments[57] = "Id Pregunta: 3940. ";


//  Id pregunta: 3976 AÃ±o de creación de pregunta: 2006-01-01
 questions[58]= "59)  La Directiva Europea sobre compatibilidad electro magnetica EMC es:";
 choices[58]= new Array();
 choices[58][0] = "89/336/EEC";
 choices[58][1] = "87/306/EEC";
 choices[58][2] = "87/95/EEC";
 choices[58][3] = "79/335/EEC";
 answers[58] = choices[58][0];
 units[58] = "99";
 comments[58] = "Id Pregunta: 3976. ";


//  Id pregunta: 3979 AÃ±o de creación de pregunta: 2006-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[59]= new Array();
 choices[59][0] = "Cable de Categor&iacute;a 4 (seg&uacute;n EIA/TIA)  que permite obtener velocidades de transmisi&oacute;n de 2 Mbit/s con distancias de 100 metros.";
 choices[59][1] = "Cable de Categor&iacute;a 5 (seg&uacute;n EIA/TIA) que permite obtener velocidades de transmisi&oacute;n de 10 Mbit/s con distancias de 100 metros.";
 choices[59][2] = "Las especificaciones de la EIA/TIA-569 y las del SYSTIMAX IBS establecen la necesidad de al menos dos armarios de distribuci&oacute;n por planta para hasta 1000 metros cuadrados.";
 choices[59][3] = "El cableado horizontal debe emplear una topolog&iacute;a en estrella con una longitud m&aacute;xima de 90 metros (entre armario y roseta).";
 answers[59] = choices[59][3];
 units[59] = "99";
 comments[59] = "Id Pregunta: 3979. ";


//  Id pregunta: 4078 AÃ±o de creación de pregunta: 2006-01-01
 questions[60]= "61)  &iquest;Es posible distribuir en una granja de servidores la l&oacute;gica de negocio de una empresa?";
 choices[60]= new Array();
 choices[60][0] = "Si utilizando .Net";
 choices[60][1] = "Si utilizando J2EE";
 choices[60][2] = "Si usando software libre";
 choices[60][3] = "todas las anteriores son ciertas";
 answers[60] = choices[60][3];
 units[60] = "113";
 comments[60] = "Id Pregunta: 4078. ";


//  Id pregunta: 4082 AÃ±o de creación de pregunta: 2006-01-01
 questions[61]= "62)  El protocolo y puerto empleado para la transferencia de p&aacute;ginas web es";
 choices[61]= new Array();
 choices[61][0] = "html y 80";
 choices[61][1] = "http y 80";
 choices[61][2] = "http y 8080";
 choices[61][3] = "ftp y 80";
 answers[61] = choices[61][1];
 units[61] = "113";
 comments[61] = "Id Pregunta: 4082. ";


//  Id pregunta: 4138 AÃ±o de creación de pregunta: 2006-01-01
 questions[62]= "63)  La capacidad de un cortafuegos de controlar el estado de las conexiones activas y usar esta informaci&oacute;n para decidir que paquetes de red deja pasar se llama";
 choices[62]= new Array();
 choices[62][0] = "An&aacute;lisis de puertos (Application firewall)";
 choices[62][1] = "Filtrado est&aacute;tico de paquetes (Static Packet filtering)";
 choices[62][2] = "Inspecci&oacute;n completa de estado (Stateful Packet filtering)";
 choices[62][3] = "Barrido ICMP (ICMP Scanning)";
 answers[62] = choices[62][2];
 units[62] = "113";
 comments[62] = "Id Pregunta: 4138. ";


//  Id pregunta: 4182 AÃ±o de creación de pregunta: 2006-01-01
 questions[63]= "64)  Los puntos de conexi&oacute;n de telefon&iacute;a a implantar en una nueva instalaci&oacute;n ser&aacute;n normalmente de tipo";
 choices[63]= new Array();
 choices[63][0] = "RJ11 de 6 contactos";
 choices[63][1] = "RJ45 de 6 contactos";
 choices[63][2] = "RJ45 de 8 contactos";
 choices[63][3] = "RJ49 para cables STP";
 answers[63] = choices[63][2];
 units[63] = "99";
 comments[63] = "Id Pregunta: 4182. ";


//  Id pregunta: 4201 AÃ±o de creación de pregunta: 2006-01-01
 questions[64]= "65)  Un modem RDSI";
 choices[64]= new Array();
 choices[64][0] = "Es un dispositivo utilizado para conectar un Interfaz B&aacute;sico a otros interfaces";
 choices[64][1] = "Permite la transmisi&oacute;n de datos sobre uno o dos canales B";
 choices[64][2] = "Es un t&eacute;rmino incorrecto";
 choices[64][3] = "Tiene un SPID  (n&uacute;mero de l&iacute;nea) propio";
 answers[64] = choices[64][2];
 units[64] = "103";
 comments[64] = "Id Pregunta: 4201. ";


//  Id pregunta: 4217 AÃ±o de creación de pregunta: 2006-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece a la capa de aplicaci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "NFS";
 choices[65][1] = "SMTP";
 choices[65][2] = "RPC";
 choices[65][3] = "UDP";
 answers[65] = choices[65][3];
 units[65] = "100";
 comments[65] = "Id Pregunta: 4217. ";


//  Id pregunta: 4227 AÃ±o de creación de pregunta: 2006-01-01
 questions[66]= "67)  &iquest;Qu&eacute; tipo de conector corresponde a un cable coaxial grueso (&quot;Thick&quot;)?";
 choices[66]= new Array();
 choices[66][0] = "BNC";
 choices[66][1] = "N-series";
 choices[66][2] = "TNC";
 choices[66][3] = "SMA-series";
 answers[66] = choices[66][1];
 units[66] = "99";
 comments[66] = "Id Pregunta: 4227. ";


//  Id pregunta: 4417 AÃ±o de creación de pregunta: 2007-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes no es una desventaja del cable coaxial frente a otros medios de transmisi&oacute;n";
 choices[67]= new Array();
 choices[67][0] = "Diafon&iacute;a.";
 choices[67][1] = "Ruido t&eacute;rmico.";
 choices[67][2] = "Ruido de intermodulaci&oacute;n.";
 choices[67][3] = "Atenuaci&oacute;n";
 answers[67] = choices[67][0];
 units[67] = "99";
 comments[67] = "Id Pregunta: 4417. ";


//  Id pregunta: 4432 AÃ±o de creación de pregunta: 2007-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes no es un posible mecanismo de transmisi&oacute;n de voz sobre paquetes de datos?";
 choices[68]= new Array();
 choices[68][0] = "Voz sobre IP (VoIP).";
 choices[68][1] = "Voz sobre TCP (VoTCP).";
 choices[68][2] = "Voz sobre celdas (VoATM).";
 choices[68][3] = "Voz sobre tramas (VoFR).";
 answers[68] = choices[68][1];
 units[68] = "100";
 comments[68] = "Id Pregunta: 4432. NULL";


//  Id pregunta: 4486 AÃ±o de creación de pregunta: 2007-01-01
 questions[69]= "70)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[69]= new Array();
 choices[69][0] = "Acceden al medio de transmisi&oacute;n en periodos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[69][1] = "El algoritmo de &aacute;rbol de extensi&oacute;n (spanning tree algorithm) es utilizado par los dispositivos puentes (o &quot;bridges&quot;) para construir topolog&iacute;as de interconexi&oacute;n de LAN's libres de bucles.";
 choices[69][2] = "Los encaminadores o routers deben tener implementadas las funcionalidades de los 7 niveles del modelo de referencia OSI para descubrir las rutas de encaminamiento adecuadas.";
 choices[69][3] = "Las pasarelas o gateways permiten, entre otras funcionalidades Ia implementaci&oacute;n de servicios NAT de traducci&oacute;n de direcciones IP.";
 answers[69] = choices[69][2];
 units[69] = "102";
 comments[69] = "Id Pregunta: 4486. ";


//  Id pregunta: 4687 AÃ±o de creación de pregunta: 2007-01-01
 questions[70]= "71)  La fibra &oacute;ptica, con respecto al par trenzado";
 choices[70]= new Array();
 choices[70][0] = "Tiene m&aacute;s radiaci&oacute;n electromagn&eacute;tica";
 choices[70][1] = "Tiene m&aacute;s ancho de banda";
 choices[70][2] = "Es m&aacute;s f&aacute;cil de instalar";
 choices[70][3] = "Tiene mayor atenuaci&oacute;n";
 answers[70] = choices[70][1];
 units[70] = "99";
 comments[70] = "Id Pregunta: 4687. Examen 2006 JCYL";


//  Id pregunta: 4971 AÃ±o de creación de pregunta: 2003-01-01
 questions[71]= "72)  Elena es una funcionaria que gracias a las nuevas medidas de conciliaci&oacute;n de la vida familiar y laboral trabajadesde su casa (teletrabajo) acudiendo al Ministerio puntualmente. Elena se conecta diariamente por Internet alhost ministerial, cuya direcci&oacute;n IP es 60.47.112.6. El ordenador cliente de Elena ayer ten&iacute;a la direcci&oacute;n IP192.168.0.3. Hoy se ha conectado de nuevo, y sin embargo su direcci&oacute;n IP es 192.168.0.2. Esto ocurre porque:";
 choices[71]= new Array();
 choices[71][0] = "El proveedor de acceso a Internet que utiliza Elena tiene un servidor DHCP (Dinamic Host ConfigurationProtocol) que asigna a Elena una direcci&oacute;n temporal en cada sesi&oacute;n.";
 choices[71][1] = "El proveedor de acceso a Internet que utiliza Elena utiliza un protocolo UTP que disminuye la direcci&oacute;n de losclientes en un octeto cada vez.";
 choices[71][2] = "Elena ha cambiado su tarjeta de acceso Ethernet de una con direcci&oacute;n A1-BD-33-6E-C7-BB a otra con direcci&oacute;nA1-BD-33-6E-C7-BA.";
 choices[71][3] = "Elena est&aacute; utilizando una conexi&oacute;n Wifi.";
 answers[71] = choices[71][0];
 units[71] = "100";
 comments[71] = "Id Pregunta: 4971. Examen TIC B 2007";


//  Id pregunta: 5038 AÃ±o de creación de pregunta: 2003-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes alternativas NO se corresponde con el dise&ntilde;o b&aacute;sico de la arquitectura de un conmutadormultinivel Gigabit Ethernet?:";
 choices[72]= new Array();
 choices[72][0] = "Bus compartido.";
 choices[72][1] = "Memoria compartida.";
 choices[72][2] = "I/O compartida.";
 choices[72][3] = "Crossbar";
 answers[72] = choices[72][0];
 units[72] = "102";
 comments[72] = "Id Pregunta: 5038. Examen TIC A 2007";


//  Id pregunta: 5127 AÃ±o de creación de pregunta: 2003-01-01
 questions[73]= "74)  &iquest;Qu&eacute; son los servicios web?";
 choices[73]= new Array();
 choices[73][0] = "Son los servicios POST y GET de petici&oacute;n de datos mediante formlarios web bajo el protocolo de aplicaci&oacute;n de HTTP";
 choices[73][1] = "Son los servicios de petici&oacute;n de p&aacute;ginas atendidos por un servidor web";
 choices[73][2] = "Una soluci&oacute;n a los problemas de comunicaci&oacute;n entre aplicaciones en la inform&aacute;tica";
 choices[73][3] = "Son los servicios multimedia ofrecido por los nuevos portales web.";
 answers[73] = choices[73][2];
 units[73] = "113";
 comments[73] = "Id Pregunta: 5127. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5472 AÃ±o de creación de pregunta: 2003-01-01
 questions[74]= "75)  Cual de las siguientes tecnolog&iacute;as no sirve para la implementaci&oacute;n de redes privadas virtuales";
 choices[74]= new Array();
 choices[74][0] = "SSH";
 choices[74][1] = "SLIP";
 choices[74][2] = "IPSEC";
 choices[74][3] = "SSL/TLS";
 answers[74] = choices[74][1];
 units[74] = "102";
 comments[74] = "Id Pregunta: 5472. Castilla y Le&oacute;n";


//  Id pregunta: 6051 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Qu&eacute; es CMOT?";
 choices[75]= new Array();
 choices[75][0] = "Significa Common Management Over TCP/IP y es una extensi&oacute;n de los est&aacute;ndares de gesti&oacute;n OSI para Internet";
 choices[75][1] = "Significa Common Mobile Online Trespassing y es un protocolo para realizar el traspaso de llamadas entre sistemas de telefon&iacute;a m&oacute;vil sobre VSAT ";
 choices[75][2] = "Significa Critical Mode Online Testing y es una herramienta para la realizaci&oacute;n de pruebas de rendimiento no intrusivas en aplicaciones de misi&oacute;n cr&iacute;tica ";
 choices[75][3] = "Ninguna de las respuestas anteriores es correcta ";
 answers[75] = choices[75][0];
 units[75] = "104";
 comments[75] = "Id Pregunta: 6051. ";


//  Id pregunta: 7252 AÃ±o de creación de pregunta: 2010-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes opciones representa la m&aacute;scara 255.255.240.0?";
 choices[76]= new Array();
 choices[76][0] = "/20";
 choices[76][1] = "/22";
 choices[76][2] = "/24";
 choices[76][3] = "/240";
 answers[76] = choices[76][0];
 units[76] = "100";
 comments[76] = "Id Pregunta: 7252. Examen TIC B 2009";


//  Id pregunta: 7253 AÃ±o de creación de pregunta: 2010-01-01
 questions[77]= "78)  El protocolo UDP:";
 choices[77]= new Array();
 choices[77][0] = "Es orientado a conexi&oacute;n";
 choices[77][1] = "Genera un flujo unidireccional";
 choices[77][2] = "Realiza el control de redundancia c&iacute;clica (CRC) de los datos";
 choices[77][3] = "Emplea, al comenzar una comunicaci&oacute;n, el mecanismo denominado Three-Weay Hand Shaking";
 answers[77] = choices[77][1];
 units[77] = "100";
 comments[77] = "Id Pregunta: 7253. Examen TIC B 2009";


//  Id pregunta: 8177 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l es la afirmaci&oacute;n INCORRECTA respecto a los Sistemas de Cableado?:";
 choices[78]= new Array();
 choices[78][0] = "Las ventanas hist&oacute;ricamente definidas para transmisi&oacute;n en fibra &oacute;ptica se encuentran situadas alrededor de los 850, 1310 y 1550 nm.";
 choices[78][1] = "La diafon&iacute;a se clasifica en paradiafon&iacute;a y telediafon&iacute;a.";
 choices[78][2] = "La propagaci&oacute;n en las fibras &oacute;pticas depende de la reflexi&oacute;n interna que se produce gracias a que el revestimiento tiene un &iacute;ndice de refracci&oacute;n mayor que el del n&uacute;cleo.";
 choices[78][3] = "La fibra monomodo se puede lograr reduciendo el di&aacute;metro del n&uacute;cleo.";
 answers[78] = choices[78][2];
 units[78] = "99";
 comments[78] = "Id Pregunta: 8177. Examen TIC A1 2010";


//  Id pregunta: 8443 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se considera una mejora de IPv6 respecto a IPv4?";
 choices[79]= new Array();
 choices[79][0] = "Capacidad extendida del direccionamiento";
 choices[79][1] = "Seguridad de nivel de aplicaci&oacute;n obligatoria";
 choices[79][2] = "Movilidad";
 choices[79][3] = "Multicast";
 answers[79] = choices[79][1];
 units[79] = "100";
 comments[79] = "Id Pregunta: 8443. NULL";


//  Id pregunta: 8450 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  La T&eacute;cnica de accesos CDMA se caracteriza entre otras porque:";
 choices[80]= new Array();
 choices[80][0] = "Varios usuarios comparten una misma portadora en intervalos diferentes de tiempo";
 choices[80][1] = "Varios Usuarios comparten la misma banda";
 choices[80][2] = "Requiere filtros muy selectivos para evitar las interferencias de canal adyacente";
 choices[80][3] = "Ninguna de las anteriores.";
 answers[80] = choices[80][1];
 units[80] = "101";
 comments[80] = "Id Pregunta: 8450. Analista Ayto. Madrid 2010";


//  Id pregunta: 8467 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  La RDSI (red digital de servicios integrados), ofrece una conexi&oacute;n digital extremo a extremo para el intercambio de informaci&oacute;n al integrar servicios de voz y de datos sobre la estructura de la red telef&oacute;nica p&uacute;blica. El acceso primario, en Europa, esta constituido por:";
 choices[81]= new Array();
 choices[81][0] = "2 canales B y 2 canales D";
 choices[81][1] = "30 canales B y 30 canales D";
 choices[81][2] = "30 canales B y un canal D";
 choices[81][3] = "30 canales B y dos canales D";
 answers[81] = choices[81][2];
 units[81] = "103";
 comments[81] = "Id Pregunta: 8467. Analista Ayto. Madrid 2010";


//  Id pregunta: 8483 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  De las siguientes afirmaciones sobre el protocolo ICMP, &iquest;cu&aacute;l es cierta?";
 choices[82]= new Array();
 choices[82][0] = "Est&aacute; definido en las RFC 792 y 2463.";
 choices[82][1] = "Se considera un protocolo de nivel de transporte, al ir sobre datagramas IP.";
 choices[82][2] = "Permite conocer la direcci&oacute;n MAC asociada a una direcci&oacute;n IP.";
 choices[82][3] = "La cabecera tiene una longitud de 4 bytes en ICMPv4 y de 8 en ICMPv6.";
 answers[82] = choices[82][0];
 units[82] = "100";
 comments[82] = "Id Pregunta: 8483. Examen TIC A2 2010 interna";


//  Id pregunta: 8869 AÃ±o de creación de pregunta: 2011-01-01
 questions[83]= "84)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[83]= new Array();
 choices[83][0] = "No";
 choices[83][1] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[83][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[83][3] = "S&iacute;, pero solamente dentro del conjunto de est&aacute;ndares IEEE 802";
 answers[83] = choices[83][1];
 units[83] = "100";
 comments[83] = "Id Pregunta: 8869. Analista Ayto. Madrid 2010";


//  Id pregunta: 9025 AÃ±o de creación de pregunta: 2011-01-01
 questions[84]= "85)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[84]= new Array();
 choices[84][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[84][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[84][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[84][3] = "Se pueden establecer 32 comunicaciones totales: 16 entrantes y 16 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 answers[84] = choices[84][0];
 units[84] = "103";
 comments[84] = "Id Pregunta: 9025. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9337 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares IEEE para la transmisi&oacute;n de datos gigabit sobre Ethernet puede operar con fibra &oacute;ptica tanto monomodo como multimodo?";
 choices[85]= new Array();
 choices[85][0] = "1000BASE-SX";
 choices[85][1] = "1000BASE-LX";
 choices[85][2] = "1000BASE-TX";
 choices[85][3] = "1000BASE-CX";
 answers[85] = choices[85][1];
 units[85] = "99";
 comments[85] = "Id Pregunta: 9337. TIC a2 AGE 2011";


//  Id pregunta: 9344 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  El programa ISA contempla una serie de grupos de acciones o &ldquo;clusters&rdquo;. Entre ellos NO se encuentra:";
 choices[86]= new Array();
 choices[86][0] = "Intercambio de Informaci&oacute;n segura";
 choices[86][1] = "Arquitectura de Interoperabilidad";
 choices[86][2] = "Evaluaci&oacute;n de las implicaciones TIC de la nueva legislaci&oacute;n europea.";
 choices[86][3] = "Despliegue de redes de nueva generaci&oacute;n";
 answers[86] = choices[86][0];
 units[86] = "103";
 comments[86] = "Id Pregunta: 9344. Fuente: http://ec.europa.eu/isa/actions/index_en.htm";


//  Id pregunta: 9346 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  Acerca de RDSI y sus diferentes servicios:";
 choices[87]= new Array();
 choices[87][0] = "Los servicios portadores soportan la comunicaci&oacute;n terminal a terminal";
 choices[87][1] = "Los teleservicios proporcionan capacidades adicionales para los servicios suplementearios y los servicios portadores.";
 choices[87][2] = "Los servicios suplementarios soportan la comunicaci&oacute;n terminal a terminal y controlan los procesos de comunicaci&oacute;n entre usuarios.";
 choices[87][3] = "Los teleservicios soportan la comunicaci&oacute;n terminal a terminal";
 answers[87] = choices[87][3];
 units[87] = "103";
 comments[87] = "Id Pregunta: 9346. Pag 9 temario ASTIC 2011";


//  Id pregunta: 9368 AÃ±o de creación de pregunta: 2013-01-01
 questions[88]= "89)  En la tecnolog&iacute;a de Resilient Packet Ring, sobre los m&eacute;todos de protecci&oacute;n ante fallos, se puede afirmar:";
 choices[88]= new Array();
 choices[88][0] = "En Steering, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[88][1] = "En Wrapping, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[88][2] = "Se basan principalmente en c&oacute;digos de Hamming.";
 choices[88][3] = "El principal m&eacute;todo de correcci&oacute;n de fallos es FEC (Forward Error Correction).";
 answers[88] = choices[88][0];
 units[88] = "101";
 comments[88] = "Id Pregunta: 9368. ";


//  Id pregunta: 9693 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Indique cu&aacute;l es la respuesta falsa. Los principios que se aplicaron para llegar a las siete capas del modelo OSI fueron:";
 choices[89]= new Array();
 choices[89][0] = "Cada capa debe realizar una funci&oacute;n bien definida.";
 choices[89][1] = "No debe dise&ntilde;arse la funci&oacute;n de cada capa pensando en la definici&oacute;n de protocolos estandarizados internacionalmente.";
 choices[89][2] = "Se debe crear una capa siempre que exista un nivel diferente de abstracci&oacute;n.";
 choices[89][3] = "Los l&iacute;mites de las capas deben elegirse a modo de minimizar el flujo de informaci&oacute;n a trav&eacute;s de las interfaces.";
 answers[89] = choices[89][1];
 units[89] = "100";
 comments[89] = "Id Pregunta: 9693. NULL";


//  Id pregunta: 9714 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En las redes RDSI, la UIT ha definido una serie de puntos de referencia que ha denominado";
 choices[90]= new Array();
 choices[90][0] = "A, B, C, D.";
 choices[90][1] = "E, F, G, H.";
 choices[90][2] = "S, T, U, V.";
 choices[90][3] = "W, X, Y, Z.";
 answers[90] = choices[90][2];
 units[90] = "103";
 comments[90] = "Id Pregunta: 9714. Examen TIC-A1 2013";


//  Id pregunta: 10044 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al protocolo MPLS (RFC 3031)?";
 choices[91]= new Array();
 choices[91][0] = "LSP (Label Switched Path).";
 choices[91][1] = "LSR (Label Switching Router).";
 choices[91][2] = "FEC (Forwarding Equivalence Class).";
 choices[91][3] = "ILP (Incoming Label Protocol).";
 answers[91] = choices[91][3];
 units[91] = "100";
 comments[91] = "Id Pregunta: 10044. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10106 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  En el m&eacute;todo de acceso al medio CSMA-p, el emisor:";
 choices[92]= new Array();
 choices[92][0] = "Env&iacute;a datos en cuanto los tiene disponibles.";
 choices[92][1] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre";
 choices[92][2] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad p";
 choices[92][3] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad 1-p";
 answers[92] = choices[92][2];
 units[92] = "101";
 comments[92] = "Id Pregunta: 10106. ";


//  Id pregunta: 10107 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  En el m&eacute;todo de acceso al medio CSMA-p, el emisor:";
 choices[93]= new Array();
 choices[93][0] = "Env&iacute;a datos en cuanto los tiene disponibles.";
 choices[93][1] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre";
 choices[93][2] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad p";
 choices[93][3] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad 1-p";
 answers[93] = choices[93][2];
 units[93] = "101";
 comments[93] = "Id Pregunta: 10107. ";


//  Id pregunta: 10291 AÃ±o de creación de pregunta: 2010-01-01
 questions[94]= "95)  Una desventaja de la topolog&iacute;a f&iacute;sica de bus es que:";
 choices[94]= new Array();
 choices[94][0] = "Un fallo en el concentrador provoca el aislamiento de todos los nodos a &eacute;l conectados.";
 choices[94][1] = "Requiere m&aacute;s cable que la topolog&iacute;a en estrella.";
 choices[94][2] = "Es vulnerable a la atenuaci&oacute;n, ya que pierde se&ntilde;al a trav&eacute;s de la distancia del cable.";
 choices[94][3] = "Es compleja y dif&iacute;cil de arreglar.";
 answers[94] = choices[94][2];
 units[94] = "101";
 comments[94] = "Id Pregunta: 10291. TIC A2, libre, examen 2013";


//  Id pregunta: 10314 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  Un conector tipo &quot;MT-Array&quot; es un conector para:";
 choices[95]= new Array();
 choices[95][0] = "Fibra &oacute;ptica.";
 choices[95][1] = "Mainframes.";
 choices[95][2] = "Buses PCI.";
 choices[95][3] = "Buses PCI.";
 answers[95] = choices[95][0];
 units[95] = "99";
 comments[95] = "Id Pregunta: 10314. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10897 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El tama&ntilde;o de una cabecera MPLS seg&uacute;n la RFC 3032, es de:";
 choices[96]= new Array();
 choices[96][0] = "20 bits.";
 choices[96][1] = "32 bits.";
 choices[96][2] = "48 bits.";
 choices[96][3] = "64 bits.";
 answers[96] = choices[96][1];
 units[96] = "100";
 comments[96] = "Id Pregunta: 10897. Examen GSI 2014";


//  Id pregunta: 11696 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Un ABR (Router frontera de &aacute;rea) de OSPF:";
 choices[97]= new Array();
 choices[97][0] = "Debe disponer de varias interfaces conectadas al area Backbone";
 choices[97][1] = "Es un enrutador con dos interfaces, cada una de ellas conectada a un area OSPF diferente";
 choices[97][2] = "Un ABR debe disponer de una interfaz conectada al &aacute;rea backbone, y otra conectada a otra &aacute;rea OSPF";
 choices[97][3] = "Basta con que disponga de una interfaz conectada al &aacute;rea Backbone de OSPF";
 answers[97] = choices[97][2];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11696. NULL";


//  Id pregunta: 11720 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)   El n&uacute;mero binario 11110011 puede expresarse en hexadecimal como:";
 choices[98]= new Array();
 choices[98][0] = "A9";
 choices[98][1] = "F3";
 choices[98][2] = "0C";
 choices[98][3] = "FC";
 answers[98] = choices[98][1];
 units[98] = "99";
 comments[98] = "Id Pregunta: 11720. NULL";


//  Id pregunta: 11726 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;C&oacute;mo se puede mejorar la cancelaci&oacute;n de campo magn&eacute;tico en cables UTP? ";
 choices[99]= new Array();
 choices[99][0] = "Aumentando el n&uacute;mero de vueltas en cada par de hilos ";
 choices[99][1] = "Disminuir el n&uacute;mero de cables que se utilizan para transportar datos";
 choices[99][2] = "Aumentando el espesor del recubrimiento de PVC que encierra todos los pares de hilo";
 choices[99][3] = "Aumentando el espesor de los hilos de cobre";
 answers[99] = choices[99][0];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11726. NULL";


