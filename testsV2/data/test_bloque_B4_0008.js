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

//  Id pregunta: 2892 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  La soluci&oacute;n adoptada para la implantaci&oacute;n del servicio de correo electr&oacute;nico dentro del proyecto de la Intranet Administrativa se basa en:";
 choices[0]= new Array();
 choices[0][0] = "Correo SMTP , migrando las entidades que utilicen X.400  a SMTP";
 choices[0][1] = "Correo X.400, migrando las entidades que utilicen SMTP a X.400";
 choices[0][2] = "Correo SMTP con incorporaci&oacute;n de pasarelas X.400-SMTP";
 choices[0][3] = "No se ha adoptado ninguna soluci&oacute;n";
 answers[0] = choices[0][2];
 units[0] = "113.44";
 comments[0] = "Id Pregunta: 2892. NULL";


//  Id pregunta: 2984 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Los bridges:";
 choices[1]= new Array();
 choices[1][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[1][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[1][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[1][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles superiores";
 answers[1] = choices[1][3];
 units[1] = "102";
 comments[1] = "Id Pregunta: 2984. ";


//  Id pregunta: 3020 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Los cortafuegos de nivel 7 de la capa OSI, esto es, nivel de aplicaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "No existen";
 choices[2][1] = "Tratan con n&uacute;meros de secuencias de paquetes TCP/IP";
 choices[2][2] = "Pueden ser considerados como filtros de paquetes";
 choices[2][3] = "Act&uacute;an a modo de proxy para las distintas aplicaciones que van a controlar";
 answers[2] = choices[2][3];
 units[2] = "111";
 comments[2] = "Id Pregunta: 3020. TAI 2004";


//  Id pregunta: 3057 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Dentro del objeto APPLICATION no pueden almacenarse:";
 choices[3]= new Array();
 choices[3][0] = "Variables simples de car&aacute;cter global";
 choices[3][1] = "Variables espec&iacute;ficas para cada usuario que accede al Web";
 choices[3][2] = "Arrays accesibles a todos los usuarios que est&eacute;n ejecutando la aplicaci&oacute;n de una o m&aacute;s dimensiones ";
 choices[3][3] = "Referencias de variables globales que apuntan a instancias de un objeto COM";
 answers[3] = choices[3][1];
 units[3] = "115";
 comments[3] = "Id Pregunta: 3057. ";


//  Id pregunta: 3096 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Una Bridge CA:";
 choices[4]= new Array();
 choices[4][0] = "Es un dispositivo de nivel 3 (Red) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inalambrica y una terrestre";
 choices[4][1] = "Es un dispositivo de nivel 2 (Enlace) en el modelo OSI, que se encarga de unir 2 redes, en este caso, una inalambrica y una terrestre";
 choices[4][2] = "Es una autoridad de certificaci&oacute;n que tiene certificados cruzados con otras muchas CA, pero que no expide certificados, simplemente vale para hacer que los de las otras CA sean interoperables entre si";
 choices[4][3] = "Todas son falsas";
 answers[4] = choices[4][2];
 units[4] = "102";
 comments[4] = "Id Pregunta: 3096. ";


//  Id pregunta: 3117 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;A qu&eacute; norma 802 del IEEE corresponden las recomendaciones sobre LAN en bus con paso de testigo?:";
 choices[5]= new Array();
 choices[5][0] = "802.4";
 choices[5][1] = "802.5";
 choices[5][2] = "802.6";
 choices[5][3] = "802.7";
 answers[5] = choices[5][0];
 units[5] = "100";
 comments[5] = "Id Pregunta: 3117. NULL";


//  Id pregunta: 3123 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;C&oacute;mo se denominan en una red UMTS los componentes responsables de la decisiones de &quot;handover&quot;?:";
 choices[6]= new Array();
 choices[6][0] = "UTRAN";
 choices[6][1] = "Nodos-B";
 choices[6][2] = "RNC";
 choices[6][3] = "RNS";
 answers[6] = choices[6][2];
 units[6] = "108";
 comments[6] = "Id Pregunta: 3123. ";


//  Id pregunta: 3136 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las respuestas siguientes es verdadera sobre las direcciones disponibles en clases A, B y C en redes IP?:";
 choices[7]= new Array();
 choices[7][0] = "El n&uacute;mero de direcciones para sistemas por red decrece de redes clase A  a las de clase C";
 choices[7][1] = "El n&uacute;mero de direcciones disponibles para redes decrece de las de clases A a las de clase C";
 choices[7][2] = "Las direcciones de clase C son adecuadas para organizaciones muy grandes, mientras que las de clase B son m&aacute;s adecuadas para compa&ntilde;ias peque&ntilde;as";
 choices[7][3] = "El rango de direcciones A es num&eacute;ricamente el mayor mientras que las de clase C es numericamente el menor";
 answers[7] = choices[7][0];
 units[7] = "100";
 comments[7] = "Id Pregunta: 3136. NULL";


//  Id pregunta: 3206 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El cable de par trenzado no apantallado, categor&iacute;a 5, de 2 pares:";
 choices[8]= new Array();
 choices[8][0] = "Soporta hasta 10 Mbps";
 choices[8][1] = "Soporta hasta 20 Mbps";
 choices[8][2] = "Soporta hasta 100 Mbps";
 choices[8][3] = "Soporta hasta 5 Mbps";
 answers[8] = choices[8][2];
 units[8] = "99";
 comments[8] = "Id Pregunta: 3206. NULL";


//  Id pregunta: 3215 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El est&aacute;ndar 802.3 del IEEE:";
 choices[9]= new Array();
 choices[9][0] = "Es pr&aacute;cticamente equivalente al Sistema Ethernet";
 choices[9][1] = "Utiliza el m&eacute;todo de paso de testigo en anillo";
 choices[9][2] = "Opera entre 1 y 4 Mb/s";
 choices[9][3] = "Emplea m&eacute;todos de no contenci&oacute;n";
 answers[9] = choices[9][0];
 units[9] = "97";
 comments[9] = "Id Pregunta: 3215. NULL";


//  Id pregunta: 3244 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l es la funcionalidad de los multiplexores estad&iacute;sticos?:";
 choices[10]= new Array();
 choices[10][0] = "Que realizan un tipo de multiplexaci&oacute;n por divisi&oacute;n en frecuencias (FDM)";
 choices[10][1] = "Que realizan la transferencia de se&ntilde;ales anal&oacute;gicas, y la estad&iacute;stica de errores";
 choices[10][2] = "Que realizan un muestreo de l&iacute;neas seg&uacute;n el tr&aacute;fico, no asignando intervalos fijos";
 choices[10][3] = "Que dividen el ancho de banda, seg&uacute;n par&aacute;metros definibles, proporcionando informaci&oacute;n estad&iacute;stica de uso para que el usuario ajuste sus asignaciones";
 answers[10] = choices[10][2];
 units[10] = "101";
 comments[10] = "Id Pregunta: 3244. ";


//  Id pregunta: 3251 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;les son las ventajas de la fibra &oacute;ptica comparadas con los cableados de cobre?:";
 choices[11]= new Array();
 choices[11][0] = "Mayor velocidad de transmisi&oacute;n, mayor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, menor atenuaci&oacute;n";
 choices[11][1] = "Mayor velocidad de transmisi&oacute;n, menor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, distancias menores entre repetidores";
 choices[11][2] = "Menor velocidad de transmisi&oacute;n, menor ancho de banda, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, mayor atenuaci&oacute;n, distancias mayores entre repetidores";
 choices[11][3] = "Mayor velocidad de transmisi&oacute;n, menor tama&ntilde;o y peso, inmunidad al ruido electromagn&eacute;tico, ausencia de diafon&iacute;a, mayor atenuaci&oacute;n";
 answers[11] = choices[11][0];
 units[11] = "97";
 comments[11] = "Id Pregunta: 3251. NULL";


//  Id pregunta: 3305 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre la Terminaci&oacute;n de Red de tipo 2 y la Terminaci&oacute;n de Red de tipo 1 (punto de interfaz entre la instalaci&oacute;n de la compa&ntilde;&iacute;a telef&oacute;nica y la instalaci&oacute;n de usuario)?:";
 choices[12]= new Array();
 choices[12][0] = "R";
 choices[12][1] = "S";
 choices[12][2] = "T";
 choices[12][3] = "U";
 answers[12] = choices[12][2];
 units[12] = "103";
 comments[12] = "Id Pregunta: 3305. ";


//  Id pregunta: 3331 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Al fen&oacute;meno que se da en transmisi&oacute;n por fibra &oacute;ptica consistente en que los pulsos &oacute;pticos tienden a expandirse provocando interferencia, con lo que diferentes longitudes de onda viajan a diferentes velocidades, se le denomina:";
 choices[13]= new Array();
 choices[13][0] = "Dispersi&oacute;n de ventana";
 choices[13][1] = "Dispersi&oacute;n crom&aacute;tica";
 choices[13][2] = "Atenuaci&oacute;n &oacute;ptica";
 choices[13][3] = "Atenuaci&oacute;n de ventana";
 answers[13] = choices[13][1];
 units[13] = "97";
 comments[13] = "Id Pregunta: 3331. NULL";


//  Id pregunta: 3345 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  CSMA/CD es:";
 choices[14]= new Array();
 choices[14][0] = "Un m&eacute;todo de paso de testigo en bus";
 choices[14][1] = "Un sistema operativo no propietario";
 choices[14][2] = "Un m&eacute;todo de detecci&oacute;n de se&ntilde;al en bus";
 choices[14][3] = "Un m&eacute;todo de paso de testigo en anillo";
 answers[14] = choices[14][2];
 units[14] = "101";
 comments[14] = "Id Pregunta: 3345. ";


//  Id pregunta: 3386 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El modelo para interconexi&oacute;n de sistemas abiertos (OSI) describe siete niveles. &iquest;D&oacute;nde est&aacute; situado ASN.1?:";
 choices[15]= new Array();
 choices[15][0] = "Presentaci&oacute;n";
 choices[15][1] = "Aplicaci&oacute;n";
 choices[15][2] = "Sesi&oacute;n";
 choices[15][3] = "Transporte";
 answers[15] = choices[15][0];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3386. NULL";


//  Id pregunta: 3415 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  H.320 es el est&aacute;ndar para:";
 choices[16]= new Array();
 choices[16][0] = "transmisi&oacute;n de paquetes multiplexados en redes digitales";
 choices[16][1] = "m&oacute;dems de banda ancha con correcci&oacute;n de errores";
 choices[16][2] = "videoconferencia multipunto sobre RDSI";
 choices[16][3] = "videconferencia multipunto sobre internet";
 answers[16] = choices[16][2];
 units[16] = "103,117";
 comments[16] = "Id Pregunta: 3415. ";


//  Id pregunta: 3449 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El protocolo en que est&aacute;n basados los niveles inferiores del modelo OSI de la ISO es:";
 choices[17]= new Array();
 choices[17][0] = "SDLC";
 choices[17][1] = "EBCDIC";
 choices[17][2] = "HDLC";
 choices[17][3] = "X.400";
 answers[17] = choices[17][2];
 units[17] = "100";
 comments[17] = "Id Pregunta: 3449. NULL";


//  Id pregunta: 3472 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El servivio TMA, implantado por Telef&oacute;nica a principios de los a&ntilde;os 80, se basaba en tecnolog&iacute;a:";
 choices[18]= new Array();
 choices[18][0] = "TACS";
 choices[18][1] = "AMPS";
 choices[18][2] = "ETACS";
 choices[18][3] = "NMT";
 answers[18] = choices[18][3];
 units[18] = "108";
 comments[18] = "Id Pregunta: 3472. ";


//  Id pregunta: 3496 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En el modelado de tr&aacute;fico basado en LIFO se usan los siguientes modelos:";
 choices[19]= new Array();
 choices[19][0] = "M/M/1.";
 choices[19][1] = "M/M/1/1.";
 choices[19][2] = "M/G/1.";
 choices[19][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[19] = choices[19][3];
 units[19] = "";
 comments[19] = "Id Pregunta: 3496. *: LIFO";


//  Id pregunta: 3507 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En el nivel de enlace, respecto al protocolo HDLC puede decirse que:";
 choices[20]= new Array();
 choices[20][0] = "Es un protocolo orientado a car&aacute;cter";
 choices[20][1] = "El modo de respuesta normal se conoce como NRM";
 choices[20][2] = "El modo de respuesta asincrono se conoce como ARM";
 choices[20][3] = "Las respuestas 'b' y 'c' son correctas";
 answers[20] = choices[20][3];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3507. NULL";


//  Id pregunta: 3528 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En la provisi&oacute;n de conexi&oacute;n del nivel de transporte al nivel de sesi&oacute;n del modelo OSI:";
 choices[21]= new Array();
 choices[21][0] = "Es posible el soporte simult&aacute;neo de varias conexiones de sesi&oacute;n por una sola conexi&oacute;n de transporte";
 choices[21][1] = "Una conexi&oacute;n de sesi&oacute;n no puede ser soportada por varias conexiones de transporte secuencialmente";
 choices[21][2] = "No es posible el soporte secuencial de varias conexiones de sesi&oacute;n por una de transporte";
 choices[21][3] = "Una sola conexi&oacute;n de sesi&oacute;n puede ser soportada por varias conexiones de transporte secuencialmente";
 answers[21] = choices[21][3];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3528. NULL";


//  Id pregunta: 3554 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En sistemas de informaci&oacute;n y comunicaciones, RED es el acr&oacute;nimo de:";
 choices[22]= new Array();
 choices[22][0] = "Random Early Detection";
 choices[22][1] = "Rapid Early Detection";
 choices[22][2] = "Requested Evaluation datagram";
 choices[22][3] = "Response Evaluation and Detection";
 answers[22] = choices[22][0];
 units[22] = "102";
 comments[22] = "Id Pregunta: 3554. ";


//  Id pregunta: 3619 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La norma FTAM, &iquest;en qu&eacute; nivel del est&aacute;ndar OSI se encuentra?:";
 choices[23]= new Array();
 choices[23][0] = "Nivel de red";
 choices[23][1] = "Nivel de transferencia de ficheros";
 choices[23][2] = "Nivel de transporte";
 choices[23][3] = "Nivel de aplicaci&oacute;n";
 answers[23] = choices[23][3];
 units[23] = "100";
 comments[23] = "Id Pregunta: 3619. NULL";


//  Id pregunta: 3646 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La tecnolog&iacute;a de red de &aacute;rea local 10Base-T:";
 choices[24]= new Array();
 choices[24][0] = "Requiere cableado coaxial delgado";
 choices[24][1] = "Requiere cableado de pares trenzados de categor&iacute;a 5 como m&iacute;nimo";
 choices[24][2] = "Cumple el est&aacute;ndar IEEE 802.3";
 choices[24][3] = "Son ciertas las respuestas 'b' y 'c'";
 answers[24] = choices[24][2];
 units[24] = "101";
 comments[24] = "Id Pregunta: 3646. ";


//  Id pregunta: 3657 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Un BALUN:";
 choices[25]= new Array();
 choices[25][0] = "Es un adaptador de impedancias entre sistema asim&eacute;trico y sistema sim&eacute;trico.";
 choices[25][1] = "Adapta un conector RJ45 y BNC.";
 choices[25][2] = "Es un conector entre RJ11 y RJ45.";
 choices[25][3] = "S&oacute;lo se utiliza para fibra &oacute;ptica.";
 answers[25] = choices[25][0];
 units[25] = "99";
 comments[25] = "Id Pregunta: 3657. *: BALUN";


//  Id pregunta: 3672 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Una de las siguientes caracter&iacute;sticas es falsa para la tecnolog&iacute;a GPS. Indicar cu&aacute;l:";
 choices[26]= new Array();
 choices[26][0] = "El sistema lo forma una constelaci&oacute;n de 32 sat&eacute;lites, que orbitan alrededor de la Tierra a 12600 millas, con 5 estaciones fijas de monitorizaci&oacute;n y seguimiento";
 choices[26][1] = "La posici&oacute;n se expresa en latitud y longitud gracias a la triangulaci&oacute;n producida por al menos 4 sat&eacute;lites trabajando simult&aacute;neamente";
 choices[26][2] = "Entre sus aplicaciones principales est&aacute; la gesti&oacute;n de flotas, la provisi&oacute;n de servicios de telefon&iacute;a m&oacute;vil basados en localizaci&oacute;n o las radios privadas y p&uacute;blicas de tipo trunking";
 choices[26][3] = "Es un sistema de origen estadounidense proveniente del campo militar, y la versi&oacute;n de la que puede disponer el gran p&uacute;blico no es tan precisa como la del campo militar";
 answers[26] = choices[26][0];
 units[26] = "108";
 comments[26] = "Id Pregunta: 3672. ";


//  Id pregunta: 3691 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Las caracter&iacute;sticas: Separaci&oacute;n de portadoras = 200 KHz, Ancho de banda = 75 MHz, Distancia duplex = 95 MHz, corresponden a un sistema:";
 choices[27]= new Array();
 choices[27][0] = "GSM 900";
 choices[27][1] = "GSM 1800";
 choices[27][2] = "PCS 1900";
 choices[27][3] = "UMTS";
 answers[27] = choices[27][1];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3691. ";


//  Id pregunta: 3698 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Las estaciones de una red Token Ring transmiten utilizando la t&eacute;cnica de:";
 choices[28]= new Array();
 choices[28][0] = "Detecci&oacute;n de transmisiones";
 choices[28][1] = "Detecci&oacute;n de colisiones";
 choices[28][2] = "Paso de testigo";
 choices[28][3] = "Reintentos aleatorios";
 answers[28] = choices[28][2];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3698. ";


//  Id pregunta: 3702 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Las Infrestructuras Comunes de Telecomunicaciones (ICT) para el acceso a los servicios de telecomunicaciones en el interior de edificios se regulan mediante:";
 choices[29]= new Array();
 choices[29][0] = "Real Decreto 346/2011 del 11 de marzo.";
 choices[29][1] = "Real Decreto 401/2003 del 4 de abril";
 choices[29][2] = "Ordenanzas municipales";
 choices[29][3] = "Reglamentos de las comunidades aut&oacute;nomas";
 answers[29] = choices[29][0];
 units[29] = "110";
 comments[29] = "Id Pregunta: 3702. ";


//  Id pregunta: 3721 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los cortafuegos a nivel de aplicaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "suelen prestar servicios de tipo proxy";
 choices[30][1] = "son generalistas, no bas&aacute;ndose en ning&uacute;n protocolo en concreto";
 choices[30][2] = "no pueden prestar en ning&uacute;n caso servicios de autenticaci&oacute;n de usuarios";
 choices[30][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[30] = choices[30][0];
 units[30] = "111";
 comments[30] = "Id Pregunta: 3721. NULL";


//  Id pregunta: 3727 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Los m&eacute;todos de control de acceso al medio de transmisi&oacute;n en las redes de &aacute;rea local describen las reglas que gobiernan cu&aacute;ndo los dispositivos est&aacute;n autorizados a transmitir, evit&aacute;ndose as&iacute; las colisiones.  Estos m&eacute;todos son:";
 choices[31]= new Array();
 choices[31][0] = "CSMA/CD y CSMA/CA";
 choices[31][1] = "Selecci&oacute;n o encuesta (&ldquo;polling&rdquo;), contienda o contenci&oacute;n y reserva o paso de testigo (&ldquo;token passing&rdquo;)";
 choices[31][2] = "Ethernet, IEEE 802.3 y IEEE 802.5";
 choices[31][3] = "Bus, &aacute;rbol y anillo";
 answers[31] = choices[31][1];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3727. ";


//  Id pregunta: 3757 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Para aplicaciones de media streaming es m&aacute;s adecuado:";
 choices[32]= new Array();
 choices[32][0] = "UDP";
 choices[32][1] = "TCP";
 choices[32][2] = "tanto TCP como UDP son adecuados ya que proporcionan un nivel de transporte a la aplicaci&oacute;n de video";
 choices[32][3] = "ni TCP ni UDP son adecuados ya que no garantizan la velocidad adecuada suficiente";
 answers[32] = choices[32][0];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3757. NULL";


//  Id pregunta: 3770 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Para videoconferencia en LANs sin QoS (como por ejemplo Internet), se usan las recomendaciones del est&aacute;ndar:";
 choices[33]= new Array();
 choices[33][0] = "H.321";
 choices[33][1] = "H.320";
 choices[33][2] = "H.323";
 choices[33][3] = "H.324";
 answers[33] = choices[33][2];
 units[33] = "117";
 comments[33] = "Id Pregunta: 3770. ";


//  Id pregunta: 3778 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Radius permite autentificaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "S&oacute;lo mediante PAP";
 choices[34][1] = "S&oacute;lo mediante CHAP";
 choices[34][2] = "S&oacute;lo para dispositivos fijos";
 choices[34][3] = "Ninguna de las anteriores";
 answers[34] = choices[34][3];
 units[34] = "107";
 comments[34] = "Id Pregunta: 3778. NULL";


//  Id pregunta: 3803 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Se conoce como radiaci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "A la propiedad que tiene el radio como elemento altamente energ&eacute;tico para su aplicaci&oacute;n en procesadores de &uacute;ltima generaci&oacute;n";
 choices[35][1] = "A la propiedad de emisi&oacute;n de energ&iacute;a de los cuerpos, reaccionando al entorno, lo que permite aprovechar dicha circusntancia para transmitir informaci&oacute;n de manera controlada";
 choices[35][2] = "A la propiedad de determinados is&oacute;topos inestables tales que el radio existente entre los electrones y el n&uacute;cleo de los &aacute;tomos es variable con la temperatura y el tiempo";
 choices[35][3] = "Todo lo anterior es falso";
 answers[35] = choices[35][1];
 units[35] = "105";
 comments[35] = "Id Pregunta: 3803. ";


//  Id pregunta: 3813 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Se&ntilde;alar qu&eacute; afirmaci&oacute;n no es correcta. En una red de conmutaci&oacute;n de paquetes para evitar la congesti&oacute;n se puede:";
 choices[36]= new Array();
 choices[36][0] = "Reservar espacio suficiente de almacenamiento en los nodos";
 choices[36][1] = "Descartar paquetes";
 choices[36][2] = "En una red de conmutaci&oacute;n de paquetes no hay congesti&oacute;n";
 choices[36][3] = "Enviar paquetes de contenci&oacute;n";
 answers[36] = choices[36][2];
 units[36] = "101";
 comments[36] = "Id Pregunta: 3813. ";


//  Id pregunta: 3891 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  En el modelo OSI de 7 capas, la capa 2 de Enlace de Datos cuenta con protocolos est&aacute;ndares como:";
 choices[37]= new Array();
 choices[37][0] = "HDLC, LAPB y LAPD.";
 choices[37][1] = "SDLC, LAPB e ICMP.";
 choices[37][2] = "LAPB, LAPD y LAPH.";
 choices[37][3] = "HDLC, LAPB e ICMP.";
 answers[37] = choices[37][0];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3891. Junta Andaluc&iacute;a";


//  Id pregunta: 3944 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Dentro de las Tecnolog&iacute;as de nivel acceso usadas en ATM se&ntilde;alar  la Falsa";
 choices[38]= new Array();
 choices[38][0] = "PSH";
 choices[38][1] = "SDH";
 choices[38][2] = "ATM";
 choices[38][3] = "SAR";
 answers[38] = choices[38][3];
 units[38] = "109";
 comments[38] = "Id Pregunta: 3944. ";


//  Id pregunta: 3952 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Indicar cu&aacute;l no es una caracter&iacute;stica de GPRS";
 choices[39]= new Array();
 choices[39][0] = "Permite conmutaci&oacute;n de circuitos y paquetes";
 choices[39][1] = " Mayor velocidad 2 Mbps";
 choices[39][2] = " Desde Internet se la considera como otra subred cualquiera";
 choices[39][3] = "Es un servicio portador basado en conmutaci&oacute;n de paquetes sobre GSM";
 answers[39] = choices[39][1];
 units[39] = "108";
 comments[39] = "Id Pregunta: 3952. ";


//  Id pregunta: 3956 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  La depuraci&oacute;n (debug) de resultados intermedios durante la ejecuci&oacute;n de trabajos java:";
 choices[40]= new Array();
 choices[40][0] = "S&oacute;lo se permite desde la m&aacute;quina donde se ejecuta";
 choices[40][1] = "No se permite la ejecuci&oacute;n de paradas intermedias";
 choices[40][2] = "Hay una arquitectura que incluye depuraci&oacute;n en remoto";
 choices[40][3] = "No tiene sentido la depuraci&oacute;n en remoto";
 answers[40] = choices[40][2];
 units[40] = "60";
 comments[40] = "Id Pregunta: 3956. NULL";


//  Id pregunta: 3985 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  En las tramas 802.3 el pre&aacute;mbulo est&aacute; formado por:";
 choices[41]= new Array();
 choices[41][0] = "Un patr&oacute;n alternativo de unos y ceros";
 choices[41][1] = "El flag de sincronizaci&oacute;n 01111110";
 choices[41][2] = "El tipo de protocolo de nivel superior";
 choices[41][3] = "El c&oacute;digo de redundancia c&iacute;clica";
 answers[41] = choices[41][0];
 units[41] = "101";
 comments[41] = "Id Pregunta: 3985. ";


//  Id pregunta: 3992 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Se&ntilde;ale la respuesta correcta:";
 choices[42]= new Array();
 choices[42][0] = "IDABC tiene como objetivo la identificaci&oacute;n, promoci&oacute;n y desarrollo de servicios paneuropeos de e-administraci&oacute;n para los ciudadanos, las empresas y las administraciones, as&iacute; como de las infraestructuras y servicios necesarios para el despliegue.";
 choices[42][1] = "El comit&eacute; de gesti&oacute;n del programa se denomina Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE). ";
 choices[42][2] = "Sus antecesores son los programas IDA II (1999-2004) e IDA I (1995-1998)";
 choices[42][3] = "Todas son verdaderas";
 answers[42] = choices[42][3];
 units[42] = "103";
 comments[42] = "Id Pregunta: 3992. ";


//  Id pregunta: 4007 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;En qu&eacute; RFC se encuentra definido el protocolo SMTP (&quot;Simple Mail Transfer Protocol&quot;)?";
 choices[43]= new Array();
 choices[43][0] = "RFC 821";
 choices[43][1] = "RFC 820";
 choices[43][2] = "RFC 823";
 choices[43][3] = "RFC 822";
 answers[43] = choices[43][0];
 units[43] = "106";
 comments[43] = "Id Pregunta: 4007. ";


//  Id pregunta: 4020 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  En relaci&oacute;n a la numeraci&oacute;n del sistema de telefon&iacute;a m&oacute;vil GSM, el n&uacute;mero que identifica a un abonado de una red GSM dentro del plan de numeraci&oacute;n de la red telef&oacute;nica p&uacute;blica conmutada se denomina:";
 choices[44]= new Array();
 choices[44][0] = "MSRN";
 choices[44][1] = "IMEI";
 choices[44][2] = "MSISDN";
 choices[44][3] = "IMSI";
 answers[44] = choices[44][2];
 units[44] = "108";
 comments[44] = "Id Pregunta: 4020. ";


//  Id pregunta: 4035 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  La ITU ha definido una serie de clases de servicio para ATM. La clase A se caracteriza por:";
 choices[45]= new Array();
 choices[45][0] = "Velocidad de acceso variable, retardo constante y no ser orientada a conexi&oacute;n";
 choices[45][1] = "Velocidad de acceso constante, retardo variable y ser orientada a conexi&oacute;n";
 choices[45][2] = "Velocidad de acceso variable, retardo variable y no ser orientada a conexi&oacute;n";
 choices[45][3] = "Velocidad de acceso constante, retardo constante y ser orientado a conexi&oacute;n";
 answers[45] = choices[45][3];
 units[45] = "109";
 comments[45] = "Id Pregunta: 4035. ";


//  Id pregunta: 4050 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  &iquest;Qu&eacute; no se suele permitir en una DMZ?";
 choices[46]= new Array();
 choices[46][0] = "Conexiones de ordenadores en la DMZ a ordenadores en la red interna";
 choices[46][1] = "Conexiones de ordenadores en la red interna a ordenadores en la dmz";
 choices[46][2] = "Conexiones de ordenadores en la dmz a ordenadores en la red externa";
 choices[46][3] = "Se permiten todas las anteriores";
 answers[46] = choices[46][3];
 units[46] = "111";
 comments[46] = "Id Pregunta: 4050. NULL";


//  Id pregunta: 4178 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Un sitio frio de respaldo se caracteriza por";
 choices[47]= new Array();
 choices[47][0] = "Un coste reducido de preparaci&oacute;n ante desastres";
 choices[47][1] = "Altos costes de implementaci&oacute;n y mantenimiento";
 choices[47][2] = "Un tiempo reducido de recuperaci&oacute;n";
 choices[47][3] = "ninguna de las anteriores";
 answers[47] = choices[47][0];
 units[47] = "97";
 comments[47] = "Id Pregunta: 4178. NULL";


//  Id pregunta: 4201 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  Un modem RDSI";
 choices[48]= new Array();
 choices[48][0] = "Es un dispositivo utilizado para conectar un Interfaz B&aacute;sico a otros interfaces";
 choices[48][1] = "Permite la transmisi&oacute;n de datos sobre uno o dos canales B";
 choices[48][2] = "Es un t&eacute;rmino incorrecto";
 choices[48][3] = "Tiene un SPID  (n&uacute;mero de l&iacute;nea) propio";
 answers[48] = choices[48][2];
 units[48] = "103";
 comments[48] = "Id Pregunta: 4201. ";


//  Id pregunta: 4203 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  El MTBF asociado a la disponibilidad de un sistema formado por dos equipos id&eacute;nticos con reparto balanceado de la carga de trabajo";
 choices[49]= new Array();
 choices[49][0] = "Es mayor que el de cualquiera de ellos individualmente";
 choices[49][1] = "Es menor que el de cualquiera de ellos individualmente";
 choices[49][2] = "Es igual al de cualquiera de ellos individualmente";
 choices[49][3] = "No puede ser conocido a priori";
 answers[49] = choices[49][0];
 units[49] = "104";
 comments[49] = "Id Pregunta: 4203. ";


//  Id pregunta: 4418 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  las diferencias principales entre el cable no apantallado UTP tipo 3 y el UTP tipo 5 es que";
 choices[50]= new Array();
 choices[50][0] = "UTP-3 incluye tres pares en un mismo conducto aislante, y UTP-5, cinco pares.";
 choices[50][1] = "UTP-5 es m&aacute;s trenzado por unidad de longitud que UTP-3.";
 choices[50][2] = "UTP-5 utiliza conectores RJ45, y UTP-3 utiliza RJ43.";
 choices[50][3] = "UTP-3 tiene m&aacute;s capacidad (ancho de banda), y consigue mayores velocidades que UTP-5.";
 answers[50] = choices[50][1];
 units[50] = "99";
 comments[50] = "Id Pregunta: 4418. ";


//  Id pregunta: 4493 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  La conexi&oacute;n de una red privada a Internet por medio de una pasarela (o &quot;gateway&quot;) NAT permite:";
 choices[51]= new Array();
 choices[51][0] = "Asignar din&aacute;micamente direcciones IP publicas a un ordenador";
 choices[51][1] = "Actuar como cortafuegos filtrando los paquetes de datos recibidos.";
 choices[51][2] = "Asignar din&aacute;micamente direcciones IP privadas dentro de una red privada.";
 choices[51][3] = "Que varios ordenadores accedan a Internet al mismo tiempo por medio de una &uacute;nica direcci&oacute;n IP publica.";
 answers[51] = choices[51][3];
 units[51] = "112";
 comments[51] = "Id Pregunta: 4493. ";


//  Id pregunta: 4499 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  El est&aacute;ndar europeo de Televisi&oacute;n Digital Terrestre definido por ETSI (EN 300 744) especifica la difusi&oacute;n terrestre de se&ntilde;ales de TV codificadas en:";
 choices[52]= new Array();
 choices[52][0] = "MPEG-3.";
 choices[52][1] = "MPEG-2.";
 choices[52][2] = "MPEG-4.";
 choices[52][3] = "MPEG-1.";
 answers[52] = choices[52][1];
 units[52] = "";
 comments[52] = "Id Pregunta: 4499. ";


//  Id pregunta: 4766 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  En la mayor&iacute;a de las instalaciones de cableado estrcturado, el par trenzado sin apantallar (UTP) es m&aacute;s utilizdo ue el par trenzado apantallado (STP) deboido a que";
 choices[53]= new Array();
 choices[53][0] = "STP es m&aacute;s costoso y m&aacute;s suceptible a problemas de ruido cuando la conexi&oacute;n a tierra no es de gran calidad";
 choices[53][1] = "Al ser STP mucho m&aacute;s fr&aacute;gil que UTP, reslta mucho m&aacute;s dif&iacute;cil canalizarlo";
 choices[53][2] = "Los conectores utilizados en UTP (RJ-45) son m&aacute;s econ&oacute;micos  fiables que los de STP (RJ 11)";
 choices[53][3] = "Es mucho m&aacute;s utilizado el par trenzado apantallado (STP)";
 answers[53] = choices[53][0];
 units[53] = "99";
 comments[53] = "Id Pregunta: 4766. ";


//  Id pregunta: 4970 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l es el componente de SNMP que define las reglas para describir los objetos gestionados y c&oacute;mo losprotocolos sometidos a la gesti&oacute;n pueden acceder a ellos?:";
 choices[54]= new Array();
 choices[54][0] = "MIB (Management Information Base).";
 choices[54][1] = "PDU (Packet Data Unit).";
 choices[54][2] = "CMIS (Common Management Information Services).";
 choices[54][3] = "SMI (Structure of Management Information).";
 answers[54] = choices[54][3];
 units[54] = "104";
 comments[54] = "Id Pregunta: 4970. Examen TIC B 2007";


//  Id pregunta: 5058 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Dadas las IPs de 2 hosts (172.16.17.30 y 172.16.28.15) y su m&aacute;scara (255.255.240.0). &iquest;Est&aacute;n en la misma subred?:";
 choices[55]= new Array();
 choices[55][0] = "S&iacute;";
 choices[55][1] = "No";
 choices[55][2] = "Depende de la direcci&oacute;n de la Puerta de Enlace";
 choices[55][3] = "Depende de la configuraci&oacute;n del switch";
 answers[55] = choices[55][0];
 units[55] = "100";
 comments[55] = "Id Pregunta: 5058. Examen TIC A 2007";


//  Id pregunta: 5153 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  De los siguientes enunciados indique cu&aacute;l es FALSO:";
 choices[56]= new Array();
 choices[56][0] = "Los servlets JAVA permiten que la l&oacute;gica de apliaci&oacute;n sea integrada en el proceso de solicitudes y respuestas HTTP.";
 choices[56][1] = "Los servlets JAVA son programas peque&ntilde;os de lado servidor independientes de la plataforma.";
 choices[56][2] = "Los servlets JAVA ampl&iacute;an program&aacute;ticamente la funcionalidad del servidor Web.";
 choices[56][3] = "Los servlets JAVA son programas que ampl&iacute;an la funcionalidad del cliente Web y que dependen de la plataforma.";
 answers[56] = choices[56][3];
 units[56] = "116";
 comments[56] = "Id Pregunta: 5153. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5159 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l es la capacidad de un enlace E1?";
 choices[57]= new Array();
 choices[57][0] = "2048 Kbps.";
 choices[57][1] = "1544 Kbps";
 choices[57][2] = "8448 Kbps.";
 choices[57][3] = "155 Mbps.";
 answers[57] = choices[57][0];
 units[57] = "103";
 comments[57] = "Id Pregunta: 5159. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5279 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en:";
 choices[58]= new Array();
 choices[58][0] = "las frecuencias usadas";
 choices[58][1] = "los adaptadores usados";
 choices[58][2] = "la forma en que la luz entra en la fibra y se refleja dentro del n&uacute;cleo.";
 choices[58][3] = "La fibra multimodo permite por su naturaleza varios modos de instalacion";
 answers[58] = choices[58][2];
 units[58] = "99";
 comments[58] = "Id Pregunta: 5279. ";


//  Id pregunta: 5610 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  El protocolo SMTP es estrictamente el est&aacute;ndar";
 choices[59]= new Array();
 choices[59][0] = "STD 11 que describe el formato de los mensajes de correos";
 choices[59][1] = "El STD 10 que especifica el protocolo concreto para el enviio de correo entre dos &quot;hosts&quot; TCP/IP";
 choices[59][2] = "El STD 12 para el intercambio de correo entre dos ordenadores";
 choices[59][3] = "STD 10 para describir el procedimineto de enrutado de los mensajes que se basa en el sistema de nombres de dominio";
 answers[59] = choices[59][1];
 units[59] = "106";
 comments[59] = "Id Pregunta: 5610. ";


//  Id pregunta: 5820 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  Indique cu&aacute;l de los siguientes NO se corresponde con un tipo de registro de recurso del Sistema de Nombres de Dominio (DNS &quot; Domain Name System&quot;):";
 choices[60]= new Array();
 choices[60][0] = "HINFO &quot;Host Information&quot;";
 choices[60][1] = "SOA &quot; Start Of Authority&quot;";
 choices[60][2] = "TTL &quot;Time-To- Live&quot;";
 choices[60][3] = "WKS &quot;Well-Now-Services&quot;";
 answers[60] = choices[60][2];
 units[60] = "106";
 comments[60] = "Id Pregunta: 5820. MAP 2008 A1";


//  Id pregunta: 5854 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  En java, el atributo &quot;final&quot; en la declaraci&oacute;n de una variable de una clase significa que:";
 choices[61]= new Array();
 choices[61][0] = "S&oacute;lo las clases de su paquete pueden acceder a ella";
 choices[61][1] = "S&oacute;lo puede ser escrita una vez y no puede ser reescrita por clases hijas";
 choices[61][2] = "S&oacute;lo se puede acceder a trav&eacute;s de m&eacute;todos get y set";
 choices[61][3] = "Que forma parte del interface que implementa la clase";
 answers[61] = choices[61][1];
 units[61] = "116";
 comments[61] = "Id Pregunta: 5854. Pregunta 34";


//  Id pregunta: 6042 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En el &aacute;mbito de la Gesti&oacute;n de Identidades, &iquest;c&oacute;mo se denomina al conjunto de proveedores de servicios, identidades y atributos que disponen de acuerdos de servicio, comerciales y de negocio para que el usuario pueda realizar transacciones de forma transparente y sencilla entre todos ellos?";
 choices[62]= new Array();
 choices[62][0] = "Web Access Management";
 choices[62][1] = "WS - Security";
 choices[62][2] = "C&iacute;rculo de Confianza (CoT)";
 choices[62][3] = "SAML";
 answers[62] = choices[62][2];
 units[62] = "118";
 comments[62] = "Id Pregunta: 6042. ";


//  Id pregunta: 6045 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  En relaci&oacute;n con el Single Sign On";
 choices[63]= new Array();
 choices[63][0] = "Los sistemas Web Single Sign On utilizan 'cookies' para reconocer a los usuarios y su estado de autenticaci&oacute;n";
 choices[63][1] = "Los usuarios de los sistemas SSO mediante Kerberos reciben un 'ticket' al registrarse que luego se presenta en las aplicaciones cliente";
 choices[63][2] = "Las dos respuestas anteriores son correctas";
 choices[63][3] = "Todas las respuestas anteriores son incorrectas";
 answers[63] = choices[63][2];
 units[63] = "118";
 comments[63] = "Id Pregunta: 6045. ";


//  Id pregunta: 6152 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;C&oacute;mo se denomina el sistema global de discusi&oacute;n en internet que evoluciona de las redes UUCP?";
 choices[64]= new Array();
 choices[64][0] = "WWW";
 choices[64][1] = "FTP";
 choices[64][2] = "Usenet";
 choices[64][3] = "ICP";
 answers[64] = choices[64][2];
 units[64] = "112";
 comments[64] = "Id Pregunta: 6152. ";


//  Id pregunta: 6579 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  El protocolo IP";
 choices[65]= new Array();
 choices[65][0] = "Define el datagrama";
 choices[65][1] = "Define el esquema de direccionamiento";
 choices[65][2] = "Mueve los datos entre la capa de red y de transporte";
 choices[65][3] = "Todas las respuestas anteriores son correctas";
 answers[65] = choices[65][3];
 units[65] = "100";
 comments[65] = "Id Pregunta: 6579. NULL";


//  Id pregunta: 6580 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  IPv6";
 choices[66]= new Array();
 choices[66][0] = "Proporciona un formato de cabecera m&aacute;s complejo";
 choices[66][1] = "Proporciona la posibilidad de a&ntilde;adir extensiones pero no opciones";
 choices[66][2] = "A&ntilde;ade posibilidades para gestionar la calidad de servicios";
 choices[66][3] = "Todas las respuestas anteriores son correctas";
 answers[66] = choices[66][2];
 units[66] = "100";
 comments[66] = "Id Pregunta: 6580. NULL";


//  Id pregunta: 7272 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;D&oacute;nde se ejecutan los applets de Java de las p&aacute;ginas web?";
 choices[67]= new Array();
 choices[67][0] = "En el proxy";
 choices[67][1] = "En el servidor de aplicaciones";
 choices[67][2] = "En el servidor web";
 choices[67][3] = "En el navegador del cliente";
 answers[67] = choices[67][3];
 units[67] = "116";
 comments[67] = "Id Pregunta: 7272. Examen TIC B 2009";


//  Id pregunta: 7276 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  La t&eacute;cnica que utiliza la paravirtualizaci&oacute;n se denomina ";
 choices[68]= new Array();
 choices[68][0] = "Ringing up";
 choices[68][1] = "Ring deprivileging";
 choices[68][2] = "Privileging";
 choices[68][3] = "Hypervisor";
 answers[68] = choices[68][1];
 units[68] = "119";
 comments[68] = "Id Pregunta: 7276. NULL";


//  Id pregunta: 7288 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es INCORRECTA sobre el protocolo RADIUS (Remote Authentication Dial In User Service):";
 choices[69]= new Array();
 choices[69][0] = "Es un protocolo cliente/servidor que utiliza el protocolo de transporte fiable TCP y el puerto 1813";
 choices[69][1] = "Utiliza el protocolo de nivel de enlace PPP (Point to Point Protocol) para el env&iacute;o de las credenciales de usuario";
 choices[69][2] = "El sucesor de RADIUS es el protocolo DIAMETER";
 choices[69][3] = "Es utilizado a menudo para facilitar itinerancia (roaming) entre proveedores de servicio de internet (ISP)";
 answers[69] = choices[69][0];
 units[69] = "111";
 comments[69] = "Id Pregunta: 7288. Examen TIC B 2009";


//  Id pregunta: 8212 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Los equipos &quot;Bluetooth&quot; emplean:";
 choices[70]= new Array();
 choices[70][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[70][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencias.";
 choices[70][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[70][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[70] = choices[70][1];
 units[70] = "107";
 comments[70] = "Id Pregunta: 8212. Examen TIC A1 2010";


//  Id pregunta: 8383 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  El cable UTP (Unshielded Twisted Pair):";
 choices[71]= new Array();
 choices[71][0] = "No es tan susceptible a las interferencias electromagn&eacute;ticas como el cable STP (Shielded Twisted Pair). ";
 choices[71][1] = "Es m&aacute;s barato y f&aacute;cil de manipular que el STP.";
 choices[71][2] = "Tiene una l&aacute;mina externa de aluminio o de cobre trenzado alrededor del conjunto de pares.";
 choices[71][3] = "Tiene una pantalla protectora para cada par de hilos.";
 answers[71] = choices[71][1];
 units[71] = "99";
 comments[71] = "Id Pregunta: 8383. Examen TIC A2 2010";


//  Id pregunta: 8473 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cual de las siguientes afirmaciones sobre los cables EIA/TIA/568B de categoria 6 es correcta?";
 choices[72]= new Array();
 choices[72][0] = "Tiene un ancho de banda de hasta 10 Ghz en cada par.";
 choices[72][1] = "Se suele usar para transmitir a velocidades de 1 Gbps.";
 choices[72][2] = "No permite implementar Power over Ethernet (PoE).";
 choices[72][3] = "S&oacute;lo est&aacute; disponible de forma experimental.";
 answers[72] = choices[72][1];
 units[72] = "99";
 comments[72] = "Id Pregunta: 8473. Examen TIC A2 2010 interna";


//  Id pregunta: 8627 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  En el contexto de las redes de cable, con objeto de permitir la asignaci&oacute;n din&aacute;mica de ancho de banda a los usuarios, &iquest;cu&aacute;les son las estrategias posibles de acceso a trav&eacute;s de m&oacute;dem?";
 choices[73]= new Array();
 choices[73][0] = "Por encaminamiento IP y basada en ATM";
 choices[73][1] = "A trav&eacute;s del nodo primario de la red y a trav&eacute;s del nodo secundario de la red";
 choices[73][2] = "Mediante solicitud-reserva y por contienda.";
 choices[73][3] = "En estrella y en &aacute;rbol.";
 answers[73] = choices[73][2];
 units[73] = "101, 102";
 comments[73] = "Id Pregunta: 8627. Examen TIC A2 2010 interna";


//  Id pregunta: 8774 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  a) &iquest;Cu&aacute;l de las siguientes cabeceras de extensi&oacute;n no est&aacute; especificada en la RFC 2460 que desarrolla las especificaciones de el protocolo IPv6?";
 choices[74]= new Array();
 choices[74][0] = "Hop-By-Hop Options";
 choices[74][1] = "Routing (Type 0)";
 choices[74][2] = "Fragment";
 choices[74][3] = "Authentication Header";
 answers[74] = choices[74][3];
 units[74] = "100";
 comments[74] = "Id Pregunta: 8774. Examen UPM A2 2011";


//  Id pregunta: 9081 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Indique cu&aacute;l es el n&uacute;mero de protocolo para IPv6";
 choices[75]= new Array();
 choices[75][0] = "17";
 choices[75][1] = "41";
 choices[75][2] = "47";
 choices[75][3] = "50";
 answers[75] = choices[75][1];
 units[75] = "111";
 comments[75] = "Id Pregunta: 9081. Consultar en wikipedia List_of_IP_protocol_numbers";


//  Id pregunta: 9331 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Acerca de las ventanas de transmision en las fibras opticas, se puede afirmar";
 choices[76]= new Array();
 choices[76][0] = "son provocadas por la presencia del ion hidroxilo OH-";
 choices[76][1] = "la mas amplia es la primera ventana, entre los 0,8 y 0,9 micras";
 choices[76][2] = "alrededor de los 1550 nm existe una ventana de transmision.";
 choices[76][3] = "la tercera ventana obliga a usar transmisiones monomodo";
 answers[76] = choices[76][2];
 units[76] = "99";
 comments[76] = "Id Pregunta: 9331. NULL";


//  Id pregunta: 9385 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  En LTE, las funciones de control de recursos de radio, control de calidad de servicio y movilidad se llevan a cabo en:";
 choices[77]= new Array();
 choices[77][0] = "Los Evolved Node-B";
 choices[77][1] = "Los Evolved RNC";
 choices[77][2] = "En las BSC";
 choices[77][3] = "En servidores remotos del operador, a los que se accede por conmutaci&oacute;n en una red IP";
 answers[77] = choices[77][0];
 units[77] = "108";
 comments[77] = "Id Pregunta: 9385. NULL";


//  Id pregunta: 9399 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En el modelo de referencia de ATM, &iquest;c&oacute;mo se denomina la capa que tiene las funciones de convergencia, y segmentaci&oacute;n y reensamblado?";
 choices[78]= new Array();
 choices[78][0] = "TC";
 choices[78][1] = "PM";
 choices[78][2] = "AAL";
 choices[78][3] = "ATM";
 answers[78] = choices[78][2];
 units[78] = "109";
 comments[78] = "Id Pregunta: 9399. TIC AGE A2 2011 Promo Int";


//  Id pregunta: 9405 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  QSIG es";
 choices[79]= new Array();
 choices[79][0] = "Un protocolo de se&ntilde;alizaci&oacute;n normalizado a nivel internacional para su uso entre Private Automatic Branch eXchanges (PABX).";
 choices[79][1] = "Un sistema de calidad aplicado a la telefon&iacute;a SIP.";
 choices[79][2] = "Una extensi&oacute;n a SS7 que puede enviarse sobre IP.";
 choices[79][3] = "Ninguna de las anteriores";
 answers[79] = choices[79][0];
 units[79] = "109";
 comments[79] = "Id Pregunta: 9405. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9428 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  La Ley General de Telecomunicaciones establece una serie de contenidos m&iacute;nimos que deben incluir los contratos que se celebren entre usuarios finales y operadores. Entre ellos NO se incluye";
 choices[80]= new Array();
 choices[80][0] = "Los niveles m&iacute;nimos de calidad de servicio que se ofrecen, en particular, el plazo para la conexi&oacute;n inicial, as&iacute; como, en su caso, otros par&aacute;metros de calidad de servicio establecidos reglamentariamente.";
 choices[80][1] = "Los tipos de mantenimiento ofrecidos y los servicios de apoyo facilitados al cliente, as&iacute; como los medios para entrar en contacto con dichos servicios.";
 choices[80][2] = "Los tipos de marcaci&oacute;n relacionados con el servicio, incluyendo servicios avanzados, como n&uacute;mero oculto, servicios de cobro revertido y tarificaciones especiales.";
 choices[80][3] = "Todos los gastos relacionados con la conservaci&oacute;n del n&uacute;mero y otros identificadores.";
 answers[80] = choices[80][2];
 units[80] = "110";
 comments[80] = "Id Pregunta: 9428. ";


//  Id pregunta: 9518 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Los EJB de tipo entity pueden ser:";
 choices[81]= new Array();
 choices[81][0] = "De dos tipos: RMP y CMP";
 choices[81][1] = "De dos tipos: BMP y CMP";
 choices[81][2] = "De tres tipos: BMP, CMP y JMP";
 choices[81][3] = "De tres tipos: BMP, CMP y SMP";
 answers[81] = choices[81][1];
 units[81] = "116";
 comments[81] = "Id Pregunta: 9518. NULL";


//  Id pregunta: 9714 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En las redes RDSI, la UIT ha definido una serie de puntos de referencia que ha denominado";
 choices[82]= new Array();
 choices[82][0] = "A, B, C, D.";
 choices[82][1] = "E, F, G, H.";
 choices[82][2] = "S, T, U, V.";
 choices[82][3] = "W, X, Y, Z.";
 answers[82] = choices[82][2];
 units[82] = "103";
 comments[82] = "Id Pregunta: 9714. Examen TIC-A1 2013";


//  Id pregunta: 9722 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  El art&iacute;culo 5 de la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, establece la obligaci&oacute;n para los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, de conservar los datos (referidos en su art&iacute;culo 3), durante un plazo de";
 choices[83]= new Array();
 choices[83][0] = "48 meses.";
 choices[83][1] = "24 meses.";
 choices[83][2] = "12 meses.";
 choices[83][3] = "6 meses.";
 answers[83] = choices[83][2];
 units[83] = "30";
 comments[83] = "Id Pregunta: 9722. Examen TIC-A1 2013";


//  Id pregunta: 10040 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En una empresa con 2.000 puestos de usuario final en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X red B: 192.168.1.X y red C: 195.57.72.X. Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;en qu&eacute; subred ubicar&iacute;a los servidores web p&uacute;blicos?";
 choices[84]= new Array();
 choices[84][0] = "Red A.";
 choices[84][1] = "Red B.";
 choices[84][2] = "Red C.";
 choices[84][3] = "Indistintamente en la red B o en la red C.";
 answers[84] = choices[84][2];
 units[84] = "100";
 comments[84] = "Id Pregunta: 10040. TIC A2, promoci&oacute;n interna, examen 3013";


//  Id pregunta: 10070 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Qu&eacute; datos NO incorporar&aacute; una descripci&oacute;n de sesi&oacute;n SDP (Session Description Protocol - RFC 4566) en una iniciaci&oacute;n de sesi&oacute;n utilizada en SIP (Session Initiation Protocol):";
 choices[85]= new Array();
 choices[85][0] = "Tipo de medio.";
 choices[85][1] = "Protocolo de transporte (RTP/UDP/IP, H 320, etc.).";
 choices[85][2] = "Formato del medio (video H.261, video MPEG, etc.).";
 choices[85][3] = "Tama&ntilde;o de los datos.";
 answers[85] = choices[85][3];
 units[85] = "109";
 comments[85] = "Id Pregunta: 10070. TIC A2, libre, Examen 2013";


//  Id pregunta: 10131 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  La operaci&oacute;n de SNMP GetBulk est&aacute; disponible desde:";
 choices[86]= new Array();
 choices[86][0] = "SNMPv1";
 choices[86][1] = "SNMPv2";
 choices[86][2] = "SNMPv3";
 choices[86][3] = "SNMPv4";
 answers[86] = choices[86][1];
 units[86] = "104";
 comments[86] = "Id Pregunta: 10131. ";


//  Id pregunta: 10235 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Qu&eacute; m&eacute;todos se utilizan para obtener el valor de la cabecera de una petici&oacute;n HTTP:";
 choices[87]= new Array();
 choices[87][0] = "getHeaderValues() of HttpServletRequest";
 choices[87][1] = "getHeaderValue() of ServletRequest";
 choices[87][2] = "getHeader() of HttpServletRequest";
 choices[87][3] = "getHeader() of ServletRequest";
 answers[87] = choices[87][2];
 units[87] = "116";
 comments[87] = "Id Pregunta: 10235. NULL";


//  Id pregunta: 10497 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Se puede filtrar el tr&aacute;fico, mediante un firewall de nivel 3, entre dos m&aacute;quinas situadas en la misma LAN?";
 choices[88]= new Array();
 choices[88][0] = "Si";
 choices[88][1] = "No";
 choices[88][2] = "Depende de la configuraci&oacute;n del FW";
 choices[88][3] = "Depende de la configuraci&oacute;n de la LAN";
 answers[88] = choices[88][1];
 units[88] = "111";
 comments[88] = "Id Pregunta: 10497. Por definici&oacute;n, un FW de nivel 3 solo puede cortar tr&aacute;fico a ese nivel. Por otro lado, 2 m&aacute;quinas situadas en la misma LAN se encuentran conectadas a nivel 2 y por tanto no es posible el filtrado de tr&aacute;fico a nivel 3 dentro de una misma LAN. En el caso de";


//  Id pregunta: 10507 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cual es la RFC original del protocolo SMTP?";
 choices[89]= new Array();
 choices[89][0] = "821";
 choices[89][1] = "822";
 choices[89][2] = "823";
 choices[89][3] = "Ninguna de las anteriores";
 answers[89] = choices[89][0];
 units[89] = "106";
 comments[89] = "Id Pregunta: 10507. NULL";


//  Id pregunta: 10654 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale cu&aacute;l de estas entidades no pertenece a una arquitectura SAML:";
 choices[90]= new Array();
 choices[90][0] = "AP (Authentication Provider)";
 choices[90][1] = "SP (Service Provider)";
 choices[90][2] = "IdP (Identity Provider) ";
 choices[90][3] = "Todos los anteriores son componentes de la arquitectura SAML.";
 answers[90] = choices[90][0];
 units[90] = "111";
 comments[90] = "Id Pregunta: 10654. ";


//  Id pregunta: 10660 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Indique la afirmaci&oacute;n incorrecta:";
 choices[91]= new Array();
 choices[91][0] = "JavaScript es orientado a objetos.";
 choices[91][1] = "JavaScript no puede ejecutarse en el lado del servidor.";
 choices[91][2] = "Para interactuar con una p&aacute;gina web, JavaScript utiliza una implementaci&oacute;n de DOM (Document Object Model).";
 choices[91][3] = "La tecnolog&iacute;a AJAX utiliza JavaScript de forma as&iacute;ncrona.";
 answers[91] = choices[91][1];
 units[91] = "114";
 comments[91] = "Id Pregunta: 10660. ";


//  Id pregunta: 10881 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En el &aacute;mbito de las redes inform&aacute;ticas, el tiempo que tarda un paquete enviado desde un emisor en volver a este mismo emisor habiendo pasado por el receptor de destino es conocido como:";
 choices[92]= new Array();
 choices[92][0] = "Jitter.";
 choices[92][1] = "Delay.";
 choices[92][2] = "Round Trip delay Time.";
 choices[92][3] = "Latencia.";
 answers[92] = choices[92][2];
 units[92] = "100";
 comments[92] = "Id Pregunta: 10881. Examen GSI 2014";


//  Id pregunta: 10886 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  El puerto del protocolo FTP sobre TLS/SSL (FTPS) es:";
 choices[93]= new Array();
 choices[93][0] = "2121";
 choices[93][1] = "2020";
 choices[93][2] = "980";
 choices[93][3] = "990";
 answers[93] = choices[93][3];
 units[93] = "112";
 comments[93] = "Id Pregunta: 10886. Examen GSI 2014";


//  Id pregunta: 10941 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Respecto al protocolo Oauth, se&ntilde;ale la respuesta correcta:";
 choices[94]= new Array();
 choices[94][0] = "Es propietario de Twitter, y permite gestionar el acceso a su API por parte de otras aplicaciones.";
 choices[94][1] = "Permite su uso en aplicaciones web y m&oacute;viles, pero no de escritorio.";
 choices[94][2] = "Permite el acceso a la identidad completa del usuario por parte del servidor de aplicaciones.";
 choices[94][3] = "Permite utilizar la cuenta de Facebook para acceder a otras aplicaciones.";
 answers[94] = choices[94][3];
 units[94] = "118";
 comments[94] = "Id Pregunta: 10941. TIC A1 AGE 2014";


//  Id pregunta: 11334 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Cuando la CNMC detecta operadores con poder significativo en los mercados de referencia, &iquest;cu&aacute;l de las siguientes no es una medida que pueda tomar?";
 choices[95]= new Array();
 choices[95][0] = "Imponer obligaciones de transparencia: informaci&oacute;n sobre contabilidad, especificaciones o precios";
 choices[95][1] = "Obligar a la separaci&oacute;n de cuentas";
 choices[95][2] = "Control de precios";
 choices[95][3] = "Promover intervencion judicial de la empresa";
 answers[95] = choices[95][3];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11334. Dicha medida no aparece en la LGT";


//  Id pregunta: 11423 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n la Ley 9/2014, &iquest;qui&eacute;n podr&aacute; fijar las condiciones para la conservaci&oacute;n de los n&uacute;meros de los abonados?:";
 choices[96]= new Array();
 choices[96][0] = "MINETUR.";
 choices[96][1] = "El Gobierno.";
 choices[96][2] = "La CNMC.";
 choices[96][3] = "La Comisi&oacute;n Europea.";
 answers[96] = choices[96][2];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11423. ";


//  Id pregunta: 11427 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, qu&eacute; no regula el Gobierno, respecto al espectro:";
 choices[97]= new Array();
 choices[97][0] = "Niveles de emisi&oacute;n.";
 choices[97][1] = "Asignaci&oacute;n de bandas de frecuencia.";
 choices[97][2] = "Los contenidos enviados dentro del espectro.";
 choices[97][3] = "Establecer condiciones no discriminatorias.";
 answers[97] = choices[97][1];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11427. ";


//  Id pregunta: 11663 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De acuerdo a la Ley 9/2014, General de Telecomunicaciones, por la comisi&oacute;n de infracciones graves tipificadas en las que la Comisi&oacute;n Nacional de los Mercados y la Competencia tenga competencias sancionadoras se impondr&aacute; al infractor multa por importe de:";
 choices[98]= new Array();
 choices[98][0] = "Hasta el duplo del beneficio bruto obtenido como consecuencia de los actos u omisiones que constituya la infracci&oacute;n, o, en caso de que no resulte aplicable este criterio, un l&iacute;mite m&aacute;ximo de dos millones de euros.";
 choices[98][1] = "Hasta el duplo del beneficio bruto obtenido como consecuencia de los actos u omisiones que constituya la infracci&oacute;n, o, en caso de que no resulte aplicable este criterio, dos millones de euros.";
 choices[98][2] = "El duplo del beneficio bruto obtenido como consecuencia de los actos u omisiones que constituya la infracci&oacute;n, o, en caso de que no resulte aplicable este criterio, un l&iacute;mite m&aacute;ximo de dos millones de euros.";
 choices[98][3] = "Dos millones de euros.";
 answers[98] = choices[98][0];
 units[98] = "110";
 comments[98] = "Id Pregunta: 11663. ";


//  Id pregunta: 11736 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El rango de direcciones 10.0.0.0/8";
 choices[99]= new Array();
 choices[99][0] = "Es un rango de direcciones de clase C.";
 choices[99][1] = "Es un rango de direcci&oacute;n p&uacute;blicas.";
 choices[99][2] = "Es un rango de direcciones privadas.";
 choices[99][3] = "Es un rango de direcciones &ldquo;multicast&rdquo;.";
 answers[99] = choices[99][2];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11736. ";


