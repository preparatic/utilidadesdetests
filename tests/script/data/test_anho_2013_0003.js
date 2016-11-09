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

//  Id pregunta: 1570 AÃ±o de creación de pregunta: 2013-01-01
 questions[0]= "1)  &iquest;Cu&aacute;ntos dispositivos se pueden conectar simult&aacute;neamente a un puerto USB versi&oacute;n 3?:";
 choices[0]= new Array();
 choices[0][0] = "63.";
 choices[0][1] = "127.";
 choices[0][2] = "256.";
 choices[0][3] = " 1024.";
 answers[0] = choices[0][1];
 units[0] = "47";
 comments[0] = "Id Pregunta: 1570. Similar Junta Andaluc&iacute;a";


//  Id pregunta: 9068 AÃ±o de creación de pregunta: 2013-01-01
 questions[1]= "2)  Se&ntilde;ale la afirmaci&oacute;n FALSA respecto a las normas WCAG 2.0:";
 choices[1]= new Array();
 choices[1][0] = "Una de las mejoras respecto a WCAG 1.0 es la posibilidad de evaluarlas de manera autom&aacute;tica. ";
 choices[1][1] = "En Espa&ntilde;a se incorporan mediante la norma UNE 139803. ";
 choices[1][2] = "Constan de 14 pautas. ";
 choices[1][3] = "La pauta Adaptable dentro del principio Perceptible se refiere a &quot;Contenido presentado de diferentes formas sin perder informaci&oacute;n o estructura&quot;. ";
 answers[1] = choices[1][2];
 units[1] = "39";
 comments[1] = "Id Pregunta: 9068. ";


//  Id pregunta: 9085 AÃ±o de creación de pregunta: 2013-01-01
 questions[2]= "3)  En relaci&oacute;n a la matriz DAFO, se&ntilde;ale la afirmaci&oacute;n CORRECTA.";
 choices[2]= new Array();
 choices[2][0] = "Las fortalezas y las debilidades hacen referencia a aspectos internos de la organizaci&oacute;n";
 choices[2][1] = "Las fortalezas hacen referencia a aspectos externos a la organizaci&oacute;n y las debilidades a aspectos internos";
 choices[2][2] = "Las fortalezas hacen referencia a aspectos internos a la organizaci&oacute;n y las debilidades a aspectos externos";
 choices[2][3] = "Las fortalezas y las debilidades hacen referencia a aspectos externos de la organizaci&oacute;n";
 answers[2] = choices[2][0];
 units[2] = "77";
 comments[2] = "Id Pregunta: 9085. ";


//  Id pregunta: 9086 AÃ±o de creación de pregunta: 2013-01-01
 questions[3]= "4)  Con respecto a los Factores Cr&iacute;ticos de &Eacute;xito y los objetivos de la organizaci&oacute;n, se&ntilde;ale la opci&oacute;n INCORRECTA";
 choices[3]= new Array();
 choices[3][0] = "Los objetivos  son los &quot;fines&quot; hacia los cuales se dirige el esfuerzo y el trabajo de la organizaci&oacute;n";
 choices[3][1] = "Los factores de &eacute;xito son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[3][2] = "Para cada objetivo se debe definir, al menos, un factor de &eacute;xito";
 choices[3][3] = "Los factores de &eacute;xito deben determinarse antes que los objetivos, ya que constituyen la base para definir los mismos de manera precisa";
 answers[3] = choices[3][3];
 units[3] = "77";
 comments[3] = "Id Pregunta: 9086. ";


//  Id pregunta: 9089 AÃ±o de creación de pregunta: 2013-01-01
 questions[4]= "5)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[4]= new Array();
 choices[4][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[4][1] = "A traves de la ley de patentes";
 choices[4][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[4][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[4] = choices[4][3];
 units[4] = "36";
 comments[4] = "Id Pregunta: 9089. ";


//  Id pregunta: 9091 AÃ±o de creación de pregunta: 2013-01-01
 questions[5]= "6)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[5]= new Array();
 choices[5][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[5][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[5][2] = "Si, en todos los casos";
 choices[5][3] = "Todas las anteriores son falsas";
 answers[5] = choices[5][2];
 units[5] = "36";
 comments[5] = "Id Pregunta: 9091. ";


//  Id pregunta: 9113 AÃ±o de creación de pregunta: 2013-01-01
 questions[6]= "7)  &iquest;Cu&aacute;ndo se publicaron las taxonom&iacute;as de Flynn?";
 choices[6]= new Array();
 choices[6][0] = "En 1950";
 choices[6][1] = "Por primera vez en 1966 y por segunda vez en 1970";
 choices[6][2] = "En 1980";
 choices[6][3] = "En la d&eacute;cada de los noventa.";
 answers[6] = choices[6][1];
 units[6] = "45";
 comments[6] = "Id Pregunta: 9113. ";


//  Id pregunta: 9115 AÃ±o de creación de pregunta: 2013-01-01
 questions[7]= "8)  &iquest;Qu&eacute; no presentan las soluciones SISD (Single Instruction stream, Single Data stream)";
 choices[7]= new Array();
 choices[7][0] = "Concurrencia y paralelizaci&oacute;n.";
 choices[7][1] = "S&oacute;lo concurrencia.";
 choices[7][2] = "&Uacute;nicamente paralelizaci&oacute;n.";
 choices[7][3] = "No existe SISD";
 answers[7] = choices[7][0];
 units[7] = "45";
 comments[7] = "Id Pregunta: 9115. ";


//  Id pregunta: 9116 AÃ±o de creación de pregunta: 2013-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es la segmentaci&oacute;n?";
 choices[8]= new Array();
 choices[8][0] = "T&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas o segmentos.";
 choices[8][1] = "Los segmentos est&aacute;n conectados entre s&iacute; y cada uno al siguiente.";
 choices[8][2] = "Todos los segmentos proceden y progresan a la vez";
 choices[8][3] = "Todas las respuestas son correctas";
 answers[8] = choices[8][3];
 units[8] = "45";
 comments[8] = "Id Pregunta: 9116. ";


//  Id pregunta: 9121 AÃ±o de creación de pregunta: 2013-01-01
 questions[9]= "10)  &iquest;C&oacute;mo son los nodos de un cluster?";
 choices[9]= new Array();
 choices[9][0] = "Siempre homog&eacute;neos con el mismo sistema operativo.";
 choices[9][1] = "Pueden ser heterogeneos, con distintos sistemas operativos.";
 choices[9][2] = "S&oacute;lo se pueden crear clusters con tecnolog&iacute;a Microsoft.";
 choices[9][3] = "Ninguna respuesta es correcta.";
 answers[9] = choices[9][1];
 units[9] = "45";
 comments[9] = "Id Pregunta: 9121. ";


//  Id pregunta: 9132 AÃ±o de creación de pregunta: 2013-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es un bus de expansion (I/O)?";
 choices[10]= new Array();
 choices[10][0] = "Conjunto de l&iacute;neas de comunicaci&oacute;n encargado de llevar el bus de datos, el bus de direcci&oacute;n y el de control a la tarjeta de interfaz (Entrada/Salida) que se agrega a la tarjeta principal.";
 choices[10][1] = "Vincula a todos los componentes de la CPU";
 choices[10][2] = "Son l&iacute;neas de comunicaci&oacute;n por donde circulan los datos externos e internos del microprocesador.";
 choices[10][3] = "l&iacute;neas de comunicaci&oacute;n por donde viaja la informaci&oacute;n espec&iacute;fica sobre la localizaci&oacute;n de la direcci&oacute;n de memoria de datos o dispositivo al que se hace referencia";
 answers[10] = choices[10][0];
 units[10] = "47";
 comments[10] = "Id Pregunta: 9132. ";


//  Id pregunta: 9145 AÃ±o de creación de pregunta: 2013-01-01
 questions[11]= "12)  &iquest;Cu&aacute;ntos cent&iacute;meros tiene el Blu-ray?";
 choices[11]= new Array();
 choices[11][0] = "12";
 choices[11][1] = "13";
 choices[11][2] = "11";
 choices[11][3] = "15";
 answers[11] = choices[11][0];
 units[11] = "47";
 comments[11] = "Id Pregunta: 9145. ";


//  Id pregunta: 9154 AÃ±o de creación de pregunta: 2013-01-01
 questions[12]= "13)  Indique cu&aacute;l de las siguientes es una soluci&oacute;n de software libre de eLearning:";
 choices[12]= new Array();
 choices[12][0] = "Ganesha";
 choices[12][1] = "OpenSCORM";
 choices[12][2] = "Blackboard";
 choices[12][3] = "WebCT";
 answers[12] = choices[12][0];
 units[12] = "66";
 comments[12] = "Id Pregunta: 9154. ";


//  Id pregunta: 9167 AÃ±o de creación de pregunta: 2013-01-01
 questions[13]= "14)  De los siguientes sistemas, &iquest;cu&aacute;l no se refiere a un sistema de navegaci&oacute;n por sat&eacute;lite?";
 choices[13]= new Array();
 choices[13][0] = "Beidou";
 choices[13][1] = "COMPASS";
 choices[13][2] = "QZSS";
 choices[13][3] = "GNS";
 answers[13] = choices[13][3];
 units[13] = "67";
 comments[13] = "Id Pregunta: 9167. NULL";


//  Id pregunta: 9171 AÃ±o de creación de pregunta: 2013-01-01
 questions[14]= "15)  Cu&aacute;l de los siguientes productos de UN/CEFACT es un est&aacute;ndar:";
 choices[14]= new Array();
 choices[14][0] = "UN/CCL (Core Components Library)";
 choices[14][1] = "ebXML CCTS (Core Components Technical Specification)";
 choices[14][2] = "XML Naming and Design Rules";
 choices[14][3] = "UNECE TDED ISO 7273";
 answers[14] = choices[14][0];
 units[14] = "70";
 comments[14] = "Id Pregunta: 9171. ";


//  Id pregunta: 9173 AÃ±o de creación de pregunta: 2013-01-01
 questions[15]= "16)  Respecto a la normativa de facturaci&oacute;n, se&ntilde;ale la respuesta INCORRECTA:";
 choices[15]= new Array();
 choices[15][0] = "El Real Decreto 1619/2012 regula las obligaciones de facturaci&oacute;n desde el 1 de enero de 2014";
 choices[15][1] = "No se exigir&aacute; la obligaci&oacute;n de expedir factura en el caso de determinadas prestaciones de servicios financieros y de seguros, salvo cuando dichas operaciones se entiendan realizadas en el territorio de aplicaci&oacute;n del Impuesto, o en otro Estado miembro de la Uni&oacute;n Europea, y est&eacute;n sujetas y no exentas.";
 choices[15][2] = "Se establece un sistema de facturaci&oacute;n basado en dos tipos de facturas: la factura completa u ordinaria y la factura simplificada, que viene a sustituir a los denominados tiques.";
 choices[15][3] = "Todas son verdaderas";
 answers[15] = choices[15][0];
 units[15] = "70";
 comments[15] = "Id Pregunta: 9173. ";


//  Id pregunta: 9177 AÃ±o de creación de pregunta: 2013-01-01
 questions[16]= "17)  Es un formato de imagen vectorial:";
 choices[16]= new Array();
 choices[16][0] = "VML";
 choices[16][1] = "JPG";
 choices[16][2] = "XCF";
 choices[16][3] = "GIF";
 answers[16] = choices[16][0];
 units[16] = "93";
 comments[16] = "Id Pregunta: 9177. NULL";


//  Id pregunta: 9178 AÃ±o de creación de pregunta: 2013-01-01
 questions[17]= "18)  Si hablamos de formatos para el almacenamiento de ficheros de im&aacute;genes, &iquest;cu&aacute;l de ellos puede considerarse una extensi&oacute;n de los dem&aacute;s, y permite el almacenamiento de cualquier tipo de fichero, no &uacute;nicamente gr&aacute;fico?:";
 choices[17]= new Array();
 choices[17][0] = "PAM";
 choices[17][1] = "PBM";
 choices[17][2] = "PGM";
 choices[17][3] = "PPM";
 answers[17] = choices[17][0];
 units[17] = "93";
 comments[17] = "Id Pregunta: 9178. NULL";


//  Id pregunta: 9180 AÃ±o de creación de pregunta: 2013-01-01
 questions[18]= "19)  No es un espacio de color:";
 choices[18]= new Array();
 choices[18][0] = "RGB";
 choices[18][1] = "CMYK";
 choices[18][2] = "HSM";
 choices[18][3] = "HSV";
 answers[18] = choices[18][2];
 units[18] = "93";
 comments[18] = "Id Pregunta: 9180. NULL";


//  Id pregunta: 9187 AÃ±o de creación de pregunta: 2013-01-01
 questions[19]= "20)  &iquest; Qu&eacute; afirmaci&oacute;n sobre M&eacute;trica 3 es falsa ?";
 choices[19]= new Array();
 choices[19][0] = "El mantenimiento Adaptativo no se adapta a las nuevas necesidades del usuario";
 choices[19][1] = "La valoraci&oacute;n de los riesgos de la soluci&oacute;n se lleva a cabo en el Estudio de Viabilidad";
 choices[19][2] = "El cat&aacute;logo de requisitos queda inamovible desde el final del An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[19][3] = "La migraci&oacute;n y carga de datos se tiene en cuenta tanto en el An&aacute;lisis como en el Dise&ntilde;o";
 answers[19] = choices[19][2];
 units[19] = "86";
 comments[19] = "Id Pregunta: 9187. NULL";


//  Id pregunta: 9189 AÃ±o de creación de pregunta: 2013-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguiente no es una T&eacute;cnica?";
 choices[20]= new Array();
 choices[20][0] = "Prototipado";
 choices[20][1] = "Normalizaci&oacute;n";
 choices[20][2] = "Diagrama de paquetes";
 choices[20][3] = "Casos de uso";
 answers[20] = choices[20][0];
 units[20] = "86";
 comments[20] = "Id Pregunta: 9189. NULL";


//  Id pregunta: 9191 AÃ±o de creación de pregunta: 2013-01-01
 questions[21]= "22)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[21]= new Array();
 choices[21][0] = "Estar documentado correctamente";
 choices[21][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[21][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[21][3] = "Ser original";
 answers[21] = choices[21][3];
 units[21] = "36";
 comments[21] = "Id Pregunta: 9191. ";


//  Id pregunta: 9217 AÃ±o de creación de pregunta: 2013-01-01
 questions[22]= "23)  &iquest;Qu&eacute; es iSCSI?";
 choices[22]= new Array();
 choices[22][0] = "Protocolo que permite establecer t&uacute;neles TCP/IP por el que se env&iacute;an tramas FC sin modificar.";
 choices[22][1] = "No transporta las tramas FC entre sedes remotas sino que transporta s&oacute;lo las capas superiores.";
 choices[22][2] = "Utiliza TCP/IP como red de transporte utilizando la misma infraestructura que se utilice para redes de comunicaciones.";
 choices[22][3] = "Ninguna es correcta.";
 answers[22] = choices[22][2];
 units[22] = "48";
 comments[22] = "Id Pregunta: 9217. ";


//  Id pregunta: 9218 AÃ±o de creación de pregunta: 2013-01-01
 questions[23]= "24)  &iquest;Qu&eacute; es WAFS?";
 choices[23]= new Array();
 choices[23][0] = "Wide Area File Service";
 choices[23][1] = "Una evoluci&oacute;n del empaquetado de audio WAV";
 choices[23][2] = "Un tipo de File System";
 choices[23][3] = "Una t&eacute;cnica de compresi&oacute;n de imagen.";
 answers[23] = choices[23][0];
 units[23] = "48";
 comments[23] = "Id Pregunta: 9218. ";


//  Id pregunta: 9219 AÃ±o de creación de pregunta: 2013-01-01
 questions[24]= "25)  &iquest;Qu&eacute; es LUN Masking?";
 choices[24]= new Array();
 choices[24][0] = "La cabina presenta una LUN a un servidor y este puede acceder.";
 choices[24][1] = "Se evita que un servidor pueda acceder a una LUN que pertenece a otro servidor.";
 choices[24][2] = "Es un m&eacute;todo de seguridad en red SAN de la interfaz SCSCI.";
 choices[24][3] = "Todos son v&aacute;lidas";
 answers[24] = choices[24][3];
 units[24] = "48";
 comments[24] = "Id Pregunta: 9219. ";


//  Id pregunta: 9226 AÃ±o de creación de pregunta: 2013-01-01
 questions[25]= "26)  &iquest;Cu&aacute;les son los modelos m&aacute;s habituales de Sistemas Distribuidos?";
 choices[25]= new Array();
 choices[25][0] = "Cliente/Servidor";
 choices[25][1] = "Proxy/Cach&eacute;";
 choices[25][2] = "Modelo Peer to Peer";
 choices[25][3] = "Los anteriores y otros modelos como c&oacute;digo M&oacute;vil, Agente M&oacute;vil y Clientes ligeros";
 answers[25] = choices[25][3];
 units[25] = "50";
 comments[25] = "Id Pregunta: 9226. ";


//  Id pregunta: 9230 AÃ±o de creación de pregunta: 2013-01-01
 questions[26]= "27)  Desde el punto de vista interno el sistema operativo puede concebirse como:";
 choices[26]= new Array();
 choices[26][0] = "un interfaz entre los programas de aplicaci&oacute;n y la m&aacute;quina pura.";
 choices[26][1] = "gestor de recursos.";
 choices[26][2] = "coordinador del funcionamiento de los recursos de c&oacute;mputo y de entrada y salida.";
 choices[26][3] = "B) y C) son correctas.";
 answers[26] = choices[26][3];
 units[26] = "52";
 comments[26] = "Id Pregunta: 9230. ";


//  Id pregunta: 9232 AÃ±o de creación de pregunta: 2013-01-01
 questions[27]= "28)  &iquest;Qu&eacute; es Jelly Bean?";
 choices[27]= new Array();
 choices[27][0] = "Sistema operativo de Apple para dispositivos m&oacute;viles";
 choices[27][1] = "Sistema operativo de Apple para ordenadores de sobremesa.";
 choices[27][2] = "Una versi&oacute;n de Android.";
 choices[27][3] = "No existe.";
 answers[27] = choices[27][2];
 units[27] = "52";
 comments[27] = "Id Pregunta: 9232. ";


//  Id pregunta: 9233 AÃ±o de creación de pregunta: 2013-01-01
 questions[28]= "29)  &iquest;En qu&eacute; se basa la interfaz de usuario de iOS?";
 choices[28]= new Array();
 choices[28][0] = "Concepto de manipulaci&oacute;n directa usando gestos multit&aacute;ctiles.";
 choices[28][1] = "Ejecuci&oacute;n de comandos mediante la selecci&oacute;n de men&uacute;s.";
 choices[28][2] = "S&oacute;lo est&aacute; accesible en sistemas con Jailbreak.";
 choices[28][3] = "Su pantalla principal se denomina WinterBoard.";
 answers[28] = choices[28][0];
 units[28] = "52";
 comments[28] = "Id Pregunta: 9233. ";


//  Id pregunta: 9235 AÃ±o de creación de pregunta: 2013-01-01
 questions[29]= "30)  &iquest;Qu&eacute; es DJL?";
 choices[29]= new Array();
 choices[29][0] = "Un administrador de juegos escrito en Python que permite instalar juegos en Linux.";
 choices[29][1] = "Gestor de juegos que sirve tanto para lanzar los juegos instalados como para instalar juegos desde la red.";
 choices[29][2] = "No existe";
 choices[29][3] = "A) y B) son correctas.";
 answers[29] = choices[29][3];
 units[29] = "54";
 comments[29] = "Id Pregunta: 9235. ";


//  Id pregunta: 9249 AÃ±o de creación de pregunta: 2013-01-01
 questions[30]= "31)  &iquest;Qu&eacute; son los hives en Windows?";
 choices[30]= new Array();
 choices[30][0] = "Grupos de archivos";
 choices[30][1] = "La organizaci&oacute;n del registro organizado en un &uacute;nico volumen.";
 choices[30][2] = "Cada grupo masivo de archivos se mantiene en varios archivos separados.";
 choices[30][3] = "Todas son correctas.";
 answers[30] = choices[30][0];
 units[30] = "56";
 comments[30] = "Id Pregunta: 9249. ";


//  Id pregunta: 9253 AÃ±o de creación de pregunta: 2013-01-01
 questions[31]= "32)  &iquest;C&oacute;mo es la administraci&oacute;n de memoria en Windows 7?";
 choices[31]= new Array();
 choices[31][0] = "Todos los procesos de usuario comparten un espacio de direcciones virtuales.";
 choices[31][1] = "Cada proceso de usuario tiene su propio espacio de direcciones virtuales.";
 choices[31][2] = "No se gestiona.";
 choices[31][3] = "Ninguna es correcta.";
 answers[31] = choices[31][1];
 units[31] = "56";
 comments[31] = "Id Pregunta: 9253. ";


//  Id pregunta: 9260 AÃ±o de creación de pregunta: 2013-01-01
 questions[32]= "33)  La arquitectura de proceso paralelo en la cual cada procesador tiene su propia memoria local y adem&aacute;s puede acceder a las memorias de otros procesadores se conoce como:";
 choices[32]= new Array();
 choices[32][0] = "SMP ";
 choices[32][1] = "Grid ";
 choices[32][2] = "NUMA ";
 choices[32][3] = "Cluster ";
 answers[32] = choices[32][2];
 units[32] = "45";
 comments[32] = "Id Pregunta: 9260. Examen TICA2-2011";


//  Id pregunta: 9265 AÃ±o de creación de pregunta: 2013-01-01
 questions[33]= "34)  En el editor &quot;vi&quot; el comando &quot;dd&quot; &iquest;Qu&eacute; funci&oacute;n realiza?";
 choices[33]= new Array();
 choices[33][0] = "No realiza ninguna acci&oacute;n.";
 choices[33][1] = "Borra la l&iacute;nea anterior.";
 choices[33][2] = "Borra la l&iacute;nea actual";
 choices[33][3] = "Borra la l&iacute;nea posterior.";
 answers[33] = choices[33][2];
 units[33] = "53";
 comments[33] = "Id Pregunta: 9265. Examen TICA2-2011";


//  Id pregunta: 9270 AÃ±o de creación de pregunta: 2013-01-01
 questions[34]= "35)  En un sistema de almacenamiento con 6 discos de 400 GB de capacidad cada uno, &iquest;cu&aacute;l de las siguientes configuraciones RAID tiene al menos 1 TB de capacidad y podr&iacute;a resistir el fallo de 3 discos en algunas ocasiones sin p&eacute;rdida de datos?";
 choices[34]= new Array();
 choices[34][0] = "RAID 6+0";
 choices[34][1] = "RAID 5+0";
 choices[34][2] = "RAID 5+1";
 choices[34][3] = "RAID 0+1";
 answers[34] = choices[34][3];
 units[34] = "48";
 comments[34] = "Id Pregunta: 9270. Examen TICA2-2011";


//  Id pregunta: 9271 AÃ±o de creación de pregunta: 2013-01-01
 questions[35]= "36)  En relaci&oacute;n a los sistemas Ubuntu Server, &iquest;qu&eacute; implica una versi&oacute;n LTS? ";
 choices[35]= new Array();
 choices[35][0] = "Que es una versi&oacute;n inestable o en fase de desarrollo del kernel. ";
 choices[35][1] = "Que es una versi&oacute;n Lite o ligera, especialmente adaptada para tabletas. ";
 choices[35][2] = "Que existe soporte para esa versi&oacute;n durante al menos 5 a&ntilde;os desde el lanzamiento. ";
 choices[35][3] = "Que existe soporte para esa versi&oacute;n durante al menos 4 a&ntilde;os desde el lanzamiento.";
 answers[35] = choices[35][2];
 units[35] = "54";
 comments[35] = "Id Pregunta: 9271. Examen TICA2-2011";


//  Id pregunta: 9273 AÃ±o de creación de pregunta: 2013-01-01
 questions[36]= "37)  Indique la frase acertada sobre la gesti&oacute;n de procesos en los sistemas UNIX.";
 choices[36]= new Array();
 choices[36][0] = "El estado de un proceso en un sistema Unix se codifica usando 3 bits,";
 choices[36][1] = "El control de procesos en Unix permite la comunicaci&oacute;n s&iacute;ncrona entre procesos mediante paso de mensajes";
 choices[36][2] = "Los procesos &ldquo;daemon&rdquo; son procesos interactivos del usuario root.";
 choices[36][3] = "Los sistemas Unix permiten variar la prioridad de un proceso en tiempo de ejecuci&oacute;n pero no los permisos con que se ejecuta";
 answers[36] = choices[36][1];
 units[36] = "53";
 comments[36] = "Id Pregunta: 9273. Examen TIC-A1 2011";


//  Id pregunta: 9275 AÃ±o de creación de pregunta: 2013-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[37]= new Array();
 choices[37][0] = "ISA";
 choices[37][1] = "HTI";
 choices[37][2] = "PCI";
 choices[37][3] = "AGP";
 answers[37] = choices[37][1];
 units[37] = "47";
 comments[37] = "Id Pregunta: 9275. Examen TIC-A1 2011";


//  Id pregunta: 9278 AÃ±o de creación de pregunta: 2013-01-01
 questions[38]= "39)  Indique la frase EQUIVOCADA acerca del sistema de archivos de Windows";
 choices[38]= new Array();
 choices[38][0] = "NTFS es el sistema de archivo por defecto en Windows XP y Windows 7 y utiliza direcciones de bloques (LCN) de 64 bits";
 choices[38][1] = "Los archivos NTFS presentan varios atributos, cada uno de los cuales se representan con una secuencia de bytes.";
 choices[38][2] = "Una partici&oacute;n de disco NTFS se organiza como una secuencia lineal de bloques de tama&ntilde;o fijo.";
 choices[38][3] = "Un volumen NTFS cuenta con dos tablas MFT, una para describir los archivos (MTF-F) y otra para los directorios (MTF-D).";
 answers[38] = choices[38][3];
 units[38] = "56";
 comments[38] = "Id Pregunta: 9278. Examen TIC-A1 2011";


//  Id pregunta: 9279 AÃ±o de creación de pregunta: 2013-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes es un principio del programa IDABC?";
 choices[39]= new Array();
 choices[39][0] = "Alianzas.";
 choices[39][1] = "Compartici&oacute;n de recursos.";
 choices[39][2] = "Subsidiariedad.";
 choices[39][3] = "Ninguno de los anteriores.";
 answers[39] = choices[39][2];
 units[39] = "40";
 comments[39] = "Id Pregunta: 9279. ";


//  Id pregunta: 9300 AÃ±o de creación de pregunta: 2013-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes no es un tipo de control?.";
 choices[40]= new Array();
 choices[40][0] = "Preventivo.";
 choices[40][1] = "Detectivo.";
 choices[40][2] = "Cognitivo.";
 choices[40][3] = "Todos los anteriores lo son.";
 answers[40] = choices[40][2];
 units[40] = "32";
 comments[40] = "Id Pregunta: 9300. ";


//  Id pregunta: 9304 AÃ±o de creación de pregunta: 2013-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes no es una de las cinco funciones de la auditor&iacute;a inform&aacute;tica?";
 choices[41]= new Array();
 choices[41][0] = "Velar por la eficacia y eficiencia del sistema inform&aacute;tico";
 choices[41][1] = "Verificar el cumplimiento de las normas y est&aacute;ndares vigentes en la organizaci&oacute;n";
 choices[41][2] = "Verificar la calidad de los sistemas de informaci&oacute;n, y proponer e implantar mejoras en los mismos";
 choices[41][3] = "Supervisar los mecanismos de control interno";
 answers[41] = choices[41][2];
 units[41] = "31";
 comments[41] = "Id Pregunta: 9304. ";


//  Id pregunta: 9306 AÃ±o de creación de pregunta: 2013-01-01
 questions[42]= "43)  &iquest;Qu&eacute; se entiende por control interno?";
 choices[42]= new Array();
 choices[42][0] = "Cualquier actividad autom&aacute;tica empleada para prevenir o corregir errores que puedan afectar al funcionamiento de un sistema";
 choices[42][1] = "Cualquier actividad manual empleada para prevenir o corregir errores que puedan afectar al funcionamiento de un sistema";
 choices[42][2] = "Cualquier actividad manual o autom&aacute;tica empleada para prevenir o corregir errores que puedan afectar al funcionamiento de un sistema";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][2];
 units[42] = "31";
 comments[42] = "Id Pregunta: 9306. ";


//  Id pregunta: 9314 AÃ±o de creación de pregunta: 2013-01-01
 questions[43]= "44)  Los procedimientos se detallan t&eacute;cnicamente a trav&eacute;s de";
 choices[43]= new Array();
 choices[43][0] = "Normativas";
 choices[43][1] = "Pol&iacute;ticas";
 choices[43][2] = "Indicaciones";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = choices[43][3];
 units[43] = "31";
 comments[43] = "Id Pregunta: 9314. ";


//  Id pregunta: 9320 AÃ±o de creación de pregunta: 2013-01-01
 questions[44]= "45)  Cu&aacute;l de las siguientes no es un requisito que debe cumplir una evidencia";
 choices[44]= new Array();
 choices[44][0] = "Suficiente";
 choices[44][1] = "Eficiente";
 choices[44][2] = "Relevante";
 choices[44][3] = "Competente";
 answers[44] = choices[44][1];
 units[44] = "31";
 comments[44] = "Id Pregunta: 9320. ";


//  Id pregunta: 9327 AÃ±o de creación de pregunta: 2013-01-01
 questions[45]= "46)  El efecto de la diafon&iacute;a en un cable se define como:";
 choices[45]= new Array();
 choices[45][0] = "La p&eacute;rdida de potencia en la se&ntilde;al debido a la emisi&oacute;n electromagnetica al ambiente.";
 choices[45][1] = "La variacion de la velocidad de propagacion de la se&ntilde;al en funcion de la frecuencia";
 choices[45][2] = "La interferencia electromagnetica producida entre se&ntilde;ales que discurren simultaneamente entre pares paralelos.";
 choices[45][3] = "Es la distorsion de la se&ntilde;al por la influencia de se&ntilde;ales espureas del ambiente.";
 answers[45] = choices[45][2];
 units[45] = "99";
 comments[45] = "Id Pregunta: 9327. NULL";


//  Id pregunta: 9329 AÃ±o de creación de pregunta: 2013-01-01
 questions[46]= "47)  El cable bs/ utp";
 choices[46]= new Array();
 choices[46][0] = "Es un cable de pantalla global de aluminio y una trenza de cobre recubriendola";
 choices[46][1] = "";
 choices[46][2] = "Presenta apantallamiento";
 choices[46][3] = "No presenta apantallamiento global";
 answers[46] = choices[46][0];
 units[46] = "99";
 comments[46] = "Id Pregunta: 9329. NULL";


//  Id pregunta: 9339 AÃ±o de creación de pregunta: 2013-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO II?";
 choices[47]= new Array();
 choices[47][0] = "Dise&ntilde;o Arquitectura";
 choices[47][1] = "Dise&ntilde;o Preliminar";
 choices[47][2] = "Composici&oacute;n de la Aplicaci&oacute;n";
 choices[47][3] = "Post-Arquitectura";
 answers[47] = choices[47][0];
 units[47] = "88";
 comments[47] = "Id Pregunta: 9339. NULL";


//  Id pregunta: 9344 AÃ±o de creación de pregunta: 2013-01-01
 questions[48]= "49)  El programa ISA contempla una serie de grupos de acciones o &ldquo;clusters&rdquo;. Entre ellos NO se encuentra:";
 choices[48]= new Array();
 choices[48][0] = "Intercambio de Informaci&oacute;n segura";
 choices[48][1] = "Arquitectura de Interoperabilidad";
 choices[48][2] = "Evaluaci&oacute;n de las implicaciones TIC de la nueva legislaci&oacute;n europea.";
 choices[48][3] = "Despliegue de redes de nueva generaci&oacute;n";
 answers[48] = choices[48][0];
 units[48] = "103";
 comments[48] = "Id Pregunta: 9344. Fuente: http://ec.europa.eu/isa/actions/index_en.htm";


//  Id pregunta: 9358 AÃ±o de creación de pregunta: 2013-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l es la nomenclatura que indica la capa f&iacute;sica del est&aacute;ndar IEEE 802.3ba que permite la transmisi&oacute;n a 40 Gbps sobre fibra monomodo?";
 choices[49]= new Array();
 choices[49][0] = "40GBASE-KR4";
 choices[49][1] = "4GBASE-SR40";
 choices[49][2] = "40GBASE-SR4";
 choices[49][3] = "40GBASE-LR4";
 answers[49] = choices[49][3];
 units[49] = "99";
 comments[49] = "Id Pregunta: 9358. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";


//  Id pregunta: 9359 AÃ±o de creación de pregunta: 2013-01-01
 questions[50]= "51)  &iquest;Qu&eacute; tecnolog&iacute;a permite la multiplexaci&oacute;n de mayor n&uacute;mero de longitudes de onda por una &uacute;nica fibra &oacute;ptica?";
 choices[50]= new Array();
 choices[50][0] = "CWDM ";
 choices[50][1] = "SDH ";
 choices[50][2] = "WDM ";
 choices[50][3] = "DWDM ";
 answers[50] = choices[50][3];
 units[50] = "99";
 comments[50] = "Id Pregunta: 9359. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";


//  Id pregunta: 9365 AÃ±o de creación de pregunta: 2013-01-01
 questions[51]= "52)  Acerca de Fibre Channel, se puede decir:";
 choices[51]= new Array();
 choices[51][0] = "El protocolo sigue el model de referencia OSI.";
 choices[51][1] = "Es un protocolo con 5 capas. ";
 choices[51][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[51][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[51] = choices[51][1];
 units[51] = "101, 48";
 comments[51] = "Id Pregunta: 9365. ";


//  Id pregunta: 9366 AÃ±o de creación de pregunta: 2013-01-01
 questions[52]= "53)  Resilient Packet Ring";
 choices[52]= new Array();
 choices[52][0] = "Es una tecnolog&iacute;a de nivel 3.";
 choices[52][1] = "Es una tecnolog&iacute;a obsoleta.";
 choices[52][2] = "Es incompatible con Ethernet.";
 choices[52][3] = "Es una tecnolog&iacute;a de nivel 2.";
 answers[52] = choices[52][3];
 units[52] = "101";
 comments[52] = "Id Pregunta: 9366. ";


//  Id pregunta: 9368 AÃ±o de creación de pregunta: 2013-01-01
 questions[53]= "54)  En la tecnolog&iacute;a de Resilient Packet Ring, sobre los m&eacute;todos de protecci&oacute;n ante fallos, se puede afirmar:";
 choices[53]= new Array();
 choices[53][0] = "En Steering, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[53][1] = "En Wrapping, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[53][2] = "Se basan principalmente en c&oacute;digos de Hamming.";
 choices[53][3] = "El principal m&eacute;todo de correcci&oacute;n de fallos es FEC (Forward Error Correction).";
 answers[53] = choices[53][0];
 units[53] = "101";
 comments[53] = "Id Pregunta: 9368. ";


//  Id pregunta: 9370 AÃ±o de creación de pregunta: 2013-01-01
 questions[54]= "55)  En una red metropolitana Ethernet basada en MPLS";
 choices[54]= new Array();
 choices[54][0] = "En la red del operador se transportan tramas de Ethernet sobre MPLS";
 choices[54][1] = "Las tramas de Ethernet se transportan sobre MPLS y en la red del operador se vuelve a utilizar Ethernet como tecnolog&iacute;a para el transporte de MPLS.";
 choices[54][2] = "En la salida de las diferentes redes de &aacute;rea local que componen la red metropolitana, se a&ntilde;ade una cabecera IP sobre la que se aplican las etiquetas MPLS.";
 choices[54][3] = "Ninguna de las respuestas es correcta.";
 answers[54] = choices[54][1];
 units[54] = "101";
 comments[54] = "Id Pregunta: 9370. ";


//  Id pregunta: 9374 AÃ±o de creación de pregunta: 2013-01-01
 questions[55]= "56)  Indique cu&aacute;l de las siguientes afirmaciones es correcta en el &aacute;mbito de la normalizaci&oacute;n de puntuaciones de la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta:";
 choices[55]= new Array();
 choices[55][0] = "El m&eacute;todo de fracci&oacute;n del ideal y el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[55][1] = "El m&eacute;todo de fracci&oacute;n del m&aacute;ximo y el m&eacute;todo de fracci&oacute;n de la suma no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[55][2] = "El m&eacute;todo de fracci&oacute;n del ideal no mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo s&iacute; la mantiene";
 choices[55][3] = "El m&eacute;todo de fracci&oacute;n del ideal mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no la mantiene";
 answers[55] = choices[55][2];
 units[55] = "34";
 comments[55] = "Id Pregunta: 9374. ";


//  Id pregunta: 9378 AÃ±o de creación de pregunta: 2013-01-01
 questions[56]= "57)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[56]= new Array();
 choices[56][0] = "ELECTRE";
 choices[56][1] = "PROMETHEE";
 choices[56][2] = "TOPSIS";
 choices[56][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[56] = choices[56][0];
 units[56] = "34";
 comments[56] = "Id Pregunta: 9378. ";


//  Id pregunta: 9388 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  De las tecnolog&iacute;as 4G, se puede afirmar:";
 choices[57]= new Array();
 choices[57][0] = "WiMax alcanza velocidades de bajada inferiores a 100 Mbps";
 choices[57][1] = "LTE alcanza velocidades de bajada superiores a las que se alcanzan con WiMax";
 choices[57][2] = "WiMAX puede alcanzar velocidades de bajada superiores a 100 Mbps";
 choices[57][3] = "HSPA+ no puede superar los 25 Mbps de bajada puesto que no mantiene una conexi&oacute;n permanente con la estaci&oacute;n base";
 answers[57] = choices[57][2];
 units[57] = "108";
 comments[57] = "Id Pregunta: 9388. http://en.wikipedia.org/wiki/4G";


//  Id pregunta: 9393 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[58]= new Array();
 choices[58][0] = "GSM, GPRS, EDGE, HSPA+.";
 choices[58][1] = "GSM. GPRS, UMTS, HSCSD.";
 choices[58][2] = "GSM, HSUPA, GPRS, UMTS.";
 choices[58][3] = "Ninguna de las respuestas es correcta.";
 answers[58] = choices[58][0];
 units[58] = "108";
 comments[58] = "Id Pregunta: 9393. Examen Teleco Ayto Madrid 2010.";


//  Id pregunta: 9394 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  Se&ntilde;ale la respuesta falsa con respecto a LTE:";
 choices[59]= new Array();
 choices[59][0] = "Emplea radiocanales de frecuencia fija de 15 Mhz";
 choices[59][1] = "Utiliza canales de ancho de banda adaptativos.";
 choices[59][2] = "Puede trabajar en muchas bandas frecuenciales diferentes";
 choices[59][3] = "Utiliza modulaciones QPSK, 16QAM y 64QAM";
 answers[59] = choices[59][0];
 units[59] = "108";
 comments[59] = "Id Pregunta: 9394. NULL";


//  Id pregunta: 9397 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  MOS (&quot;Mean Opinion Score&quot;) es un &iacute;ndice subjetivo que sirve para medir la calidad de la voz. Su rango de valores est&aacute; entre 1 y 5. Si toma el valor 4, significa:";
 choices[60]= new Array();
 choices[60][0] = "La calidad es equiparable a una conversi&oacute;n cara a cara o escuchar la radio. ";
 choices[60][1] = "Apenas se entiende nada.";
 choices[60][2] = "Se perciben imperfecciones pero el sonido es claro";
 choices[60][3] = "Se requiere un esfuerzo considerable para seguir la comunicaci&oacute;n.";
 answers[60] = choices[60][2];
 units[60] = "109";
 comments[60] = "Id Pregunta: 9397. TIC AGE A2 2011 libre";


//  Id pregunta: 9401 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  El modo de transporte del primer est&aacute;ndar ADSL, UIT-T/G.992.1 de 1999, era el ATM, a cuyo efecto, una trama Ethernet de 1.300 bytes se convert&iacute;a en (aproximadamente):";
 choices[61]= new Array();
 choices[61][0] = "1300 x 53 = 68.900 celdas ATM";
 choices[61][1] = "1300 / 48 = 27,1 ? 28 celdas ATM";
 choices[61][2] = "1300 / 53 = 24,5 ? 25 celdas ATM.";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = choices[61][1];
 units[61] = "109";
 comments[61] = "Id Pregunta: 9401. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9404 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  Indique los factores que m&aacute;s intervienen en la calidad de la voz sobre IP";
 choices[62]= new Array();
 choices[62][0] = "La latencia y la variaci&oacute;n de latencia (Jitter) de la red de transmisi&oacute;n de paquetes.";
 choices[62][1] = "La calidad de los procesadores de se&ntilde;al (DSP) asociados al codec G.711.";
 choices[62][2] = "La utilizaci&oacute;n de SIP o H.323.";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = choices[62][0];
 units[62] = "109";
 comments[62] = "Id Pregunta: 9404. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9415 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Cu&aacute;l de las siguientes no es una m&eacute;trica de l&iacute;neas de c&oacute;digo";
 choices[63]= new Array();
 choices[63][0] = "LOC";
 choices[63][1] = "DSI";
 choices[63][2] = "NSLOC";
 choices[63][3] = "LDSI";
 answers[63] = choices[63][3];
 units[63] = "89";
 comments[63] = "Id Pregunta: 9415. NULL";


//  Id pregunta: 9430 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Seg&uacute;n la ley 9/2014, el derecho de uso del dominio p&uacute;blico radioel&eacute;ctrico es otorgado por:";
 choices[64]= new Array();
 choices[64][0] = "La Agencia Estatal de Radiocomunicaciones";
 choices[64][1] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[64][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[64][3] = "El Gobierno";
 answers[64] = choices[64][1];
 units[64] = "110";
 comments[64] = "Id Pregunta: 9430. NULL";


//  Id pregunta: 9434 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  El art. 12 de la Ley 9/2014, General de Telecomunicaciones, indica los principios generales aplicables al acceso a las redes y recursos asociados y a su interconexi&oacute;n. Indique cual de las siguientes afirmaciones no es correcta:";
 choices[65]= new Array();
 choices[65][0] = "Los operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas tendr&aacute;n el derecho y, cuando se solicite por otros operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas, la obligaci&oacute;n de negociar la interconexi&oacute;n mutua con el fin de prestar servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, con el objeto de garantizar as&iacute; la prestaci&oacute;n de servicios y su interoperabilidad.";
 choices[65][1] = "No existir&aacute;n restricciones que impidan que los operadores negocien entre s&iacute; acuerdos de acceso e interconexi&oacute;n";
 choices[65][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia intervendr&aacute; en las relaciones entre operadores, a petici&oacute;n del Consejo de Ministros.";
 choices[65][3] = "Los operadores que obtengan informaci&oacute;n de otros, en el proceso de negociaci&oacute;n de los acuerdos de acceso o de interconexi&oacute;n, destinar&aacute;n la informaci&oacute;n obtenida exclusivamente a los fines para los que fue solicitada.";
 answers[65] = choices[65][2];
 units[65] = "110";
 comments[65] = "Id Pregunta: 9434. Examen Xunta Galicia 2011 TIC A1";


//  Id pregunta: 9441 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto del patr&oacute;n de dise&ntilde;o MVC (Modelo, Vista, Controlador):";
 choices[66]= new Array();
 choices[66][0] = "A pesar de su amplia difusi&oacute;n con las arquitecturas Web, naci&oacute; en la d&eacute;cada de los sesenta.";
 choices[66][1] = "Los componentes que se encargan de la l&oacute;gica de negocio forman parte del Modelo.";
 choices[66][2] = "La Vista variar&aacute; inevitablemente al variar el Modelo.";
 choices[66][3] = "El patr&oacute;n de dise&ntilde;o MVC es un modo de dividir la funcionalidad de un componente de forma ordenada.";
 answers[66] = choices[66][1];
 units[66] = "82";
 comments[66] = "Id Pregunta: 9441. Examen AGE TIC A1 2011";


//  Id pregunta: 9443 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  En un diagrama de transici&oacute;n de estados, seg&uacute;n M&eacute;trica v3:";
 choices[67]= new Array();
 choices[67][0] = "Se puede representar m&aacute;s de un estado inicial, que ir&aacute;n conectados al primer estado del diagrama.";
 choices[67][1] = "En los sistemas de tiempo real puede haber transiciones que partan del estado final.";
 choices[67][2] = "Pueden existir varios estados finales, pero ser&aacute;n mutuamente excluyentes.";
 choices[67][3] = "Los elementos permitidos ser&aacute;n &uacute;nicamente estados, transiciones y acciones.";
 answers[67] = choices[67][2];
 units[67] = "86";
 comments[67] = "Id Pregunta: 9443. Examen AGE TIC A1 2011";


//  Id pregunta: 9448 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  En el modelo de ciclo de vida en espiral, dentro de cada ciclo:";
 choices[68]= new Array();
 choices[68][0] = "La dimensi&oacute;n radial representa el avance y la angular el coste.";
 choices[68][1] = "La dimensi&oacute;n radial representa la complejidad y la angular el avance.";
 choices[68][2] = "La dimensi&oacute;n radial representa el coste y la angular la complejidad.";
 choices[68][3] = "La dimensi&oacute;n radial representa el coste y la angular el avance.";
 answers[68] = choices[68][3];
 units[68] = "76";
 comments[68] = "Id Pregunta: 9448. Examen AGE TIC A1 2011";


//  Id pregunta: 9449 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  En el modelo Entidad-Relaci&oacute;n extendido, si puede haber elementos de una superentidad que no est&eacute;n en ninguna de las subentidades hablamos de:";
 choices[69]= new Array();
 choices[69][0] = "Jerarqu&iacute;a con cobertura total.";
 choices[69][1] = "Jerarqu&iacute;a con cobertura parcial.";
 choices[69][2] = "Jerarqu&iacute;a disjunta.";
 choices[69][3] = "Jerarqu&iacute;a con solapamiento.";
 answers[69] = choices[69][1];
 units[69] = "80";
 comments[69] = "Id Pregunta: 9449. Examen AGE TIC A1 2011";


//  Id pregunta: 9459 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;Qu&eacute; es el acoplamiento entre m&oacute;dulos?:";
 choices[70]= new Array();
 choices[70][0] = "Fan-in.";
 choices[70][1] = "Fan-out.";
 choices[70][2] = "Grado de interdependencia entre m&oacute;dulos.";
 choices[70][3] = "N&uacute;mero de clases repetidas en los dos m&oacute;dulos.";
 answers[70] = choices[70][2];
 units[70] = "84";
 comments[70] = "Id Pregunta: 9459. NULL";


//  Id pregunta: 9469 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  En relaci&oacute;n al est&aacute;ndar X.400 indique la afirmaci&oacute;n verdadera";
 choices[71]= new Array();
 choices[71][0] = "Tiene que funcionar necesariamente sobre redes IP";
 choices[71][1] = "El Subsistema de transferencia de mensajes (MTS) contempla la definici&oacute;n de agentes de usuario (UA) que son los componentes l&oacute;gicos que interact&uacute;an con el usuario para el env&iacute;o y recepci&oacute;n de los mensajes electr&oacute;nicos";
 choices[71][2] = "Una MPDU puede ser de tres tipos: sondas, informes de notificaci&oacute;n o entrega y el mensaje en s&iacute;";
 choices[71][3] = "P2 es el protocolo definido para la comunicaci&oacute;n entre el MTA y el agente del usuario (UA) a trav&eacute;s del elemento MS o repositorio de mensajes";
 answers[71] = choices[71][2];
 units[71] = "106";
 comments[71] = "Id Pregunta: 9469. ";


//  Id pregunta: 9472 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n con el protocolo LDAP";
 choices[72]= new Array();
 choices[72][0] = "LDAP env&iacute;a los comandos y respuestas siguiendo la notaci&oacute;n ASN.1";
 choices[72][1] = "El desarrollo de la especificaci&oacute;n LDAP se realiza a trav&eacute;s del IETF";
 choices[72][2] = "La funci&oacute;n LAUTH permite autenticar al cliente frente al directorio";
 choices[72][3] = "La unidad b&aacute;sica de informaci&oacute;n almacenada en el directorio es la entrada (entry)";
 answers[72] = choices[72][2];
 units[72] = "106";
 comments[72] = "Id Pregunta: 9472. ";


//  Id pregunta: 9473 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es un factor de riesgo a la hora de analizar la rentabilidad de un proyecto?";
 choices[73]= new Array();
 choices[73][0] = "Factores econ&oacute;micos";
 choices[73][1] = "Factores pol&iacute;ticos";
 choices[73][2] = "Factores sociales";
 choices[73][3] = "Factores organizativos";
 answers[73] = choices[73][2];
 units[73] = "38";
 comments[73] = "Id Pregunta: 9473. ";


//  Id pregunta: 9478 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo est&aacute;tico de selecci&oacute;n de inversiones?";
 choices[74]= new Array();
 choices[74][0] = "Tasa de rendimiento contable";
 choices[74][1] = "M&eacute;todo del flujo total por unidad monetaria comprometida";
 choices[74][2] = "PROMETHEE";
 choices[74][3] = "M&eacute;todo del flujo de caja medio anual por unidad monetaria comprometida";
 answers[74] = choices[74][2];
 units[74] = "38";
 comments[74] = "Id Pregunta: 9478. ";


//  Id pregunta: 9486 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Indique la afirmaci&oacute;n incorrecta con respecto a una sesi&oacute;n JAD";
 choices[75]= new Array();
 choices[75][0] = "Es una t&eacute;cnica que promueve la cooperaci&oacute;n entre usuarios y desarrolladores para la obtenci&oacute;n de requisitos";
 choices[75][1] = "T&iacute;picamente duran media jornada de trabajo";
 choices[75][2] = "Se utilizan para reducir el tiempo de desarrollo";
 choices[75][3] = "Involucran a personas de m&aacute;s alto nivel que las sesiones JRP";
 answers[75] = choices[75][3];
 units[75] = "78";
 comments[75] = "Id Pregunta: 9486. ";


//  Id pregunta: 9487 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de obtenci&oacute;n de requisitos no es una t&eacute;cnica de bajo nivel?";
 choices[76]= new Array();
 choices[76][0] = "Entrevistas";
 choices[76][1] = "PIECES";
 choices[76][2] = "An&aacute;lisis de mercado";
 choices[76][3] = "Prototipos";
 answers[76] = choices[76][3];
 units[76] = "78";
 comments[76] = "Id Pregunta: 9487. ";


//  Id pregunta: 9491 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[77]= new Array();
 choices[77][0] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[77][1] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual de datos";
 choices[77][2] = "El diagrama de casos de uso es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[77][3] = "El diagrama de flujo de datos es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 answers[77] = choices[77][0];
 units[77] = "78";
 comments[77] = "Id Pregunta: 9491. ";


//  Id pregunta: 9492 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En una arquitectura de tres niveles, &iquest;en qu&eacute; nivel se procesa la l&oacute;gica de la aplicaci&oacute;n?";
 choices[78]= new Array();
 choices[78][0] = "Nivel de aplicaci&oacute;n";
 choices[78][1] = "Nivel de presentaci&oacute;n";
 choices[78][2] = "Nivel de datos";
 choices[78][3] = "Nivel de usuario";
 answers[78] = choices[78][0];
 units[78] = "114";
 comments[78] = "Id Pregunta: 9492. NULL";


//  Id pregunta: 9494 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Cu&aacute;les de los siguientes no es un lenguaje de scripting?";
 choices[79]= new Array();
 choices[79][0] = "Javascript";
 choices[79][1] = "JEScript";
 choices[79][2] = "PerlScript";
 choices[79][3] = "VBScript";
 answers[79] = choices[79][1];
 units[79] = "114";
 comments[79] = "Id Pregunta: 9494. NULL";


//  Id pregunta: 9495 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a Javascript:";
 choices[80]= new Array();
 choices[80][0] = "Es un extensi&oacute;n de Java";
 choices[80][1] = "Es un extensi&oacute;n de HTML";
 choices[80][2] = "Es un lenguaje interpretado";
 choices[80][3] = "El int&eacute;rprete de JavaScript se basa en el est&aacute;ndar ECMAScript";
 answers[80] = choices[80][0];
 units[80] = "114";
 comments[80] = "Id Pregunta: 9495. NULL";


//  Id pregunta: 9497 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a VBScript:";
 choices[81]= new Array();
 choices[81][0] = "Es una tecnolog&iacute;a abierta";
 choices[81][1] = "Genera ficheros con extensi&oacute;n .vbs";
 choices[81][2] = "Se comunica con las aplicaciones principales mediante ActiveX Scripting";
 choices[81][3] = "Dispone de mayor funcionalidad que JavaScript";
 answers[81] = choices[81][0];
 units[81] = "114";
 comments[81] = "Id Pregunta: 9497. NULL";


//  Id pregunta: 9503 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Respecto al formato de im&aacute;genes GIF, indique la afirmaci&oacute;n falsa:";
 choices[82]= new Array();
 choices[82][0] = "Utiliza el algoritmo de compresi&oacute;n patentado LZW";
 choices[82][1] = "Fue creado en 1987 por Apple";
 choices[82][2] = "Fue creado en 1987 por Compuserve";
 choices[82][3] = "La paleta de color soporta hasta 256 colores";
 answers[82] = choices[82][1];
 units[82] = "114";
 comments[82] = "Id Pregunta: 9503. NULL";


//  Id pregunta: 9504 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  En el &aacute;mbito de los formatos de im&aacute;genes est&aacute;ticas, indique cual de las siguientes es la afirmaci&oacute;n correcta:";
 choices[83]= new Array();
 choices[83][0] = "GIF y PNG comprimen sin p&eacute;rdidas mientras que JPEG comprime con p&eacute;rdidas";
 choices[83][1] = "GIF y JPEG comprimen sin p&eacute;rdidas mientras que PNG comprime con p&eacute;rdidas";
 choices[83][2] = "JPEG y PNG comprimen sin p&eacute;rdidas mientras que GIF comprime con p&eacute;rdidas";
 choices[83][3] = "Todas las anteriores son falsas";
 answers[83] = choices[83][0];
 units[83] = "114";
 comments[83] = "Id Pregunta: 9504. NULL";


//  Id pregunta: 9508 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;En qu&eacute; versi&oacute;n se produjo el cambio de nomenclatura de la plataforma Java, pas&aacute;ndose a denominar Java Platform cuando anteriormente se le denominaba Java 2?";
 choices[84]= new Array();
 choices[84][0] = "Entre la versi&oacute;n 1.1 y 1.2";
 choices[84][1] = "Entre la versi&oacute;n 1.3 y 1.4";
 choices[84][2] = "Entre la versi&oacute;n 1.4 y 5.0";
 choices[84][3] = "La plataforma Java nunca se denomin&oacute; Java 2";
 answers[84] = choices[84][2];
 units[84] = "116";
 comments[84] = "Id Pregunta: 9508. NULL";


//  Id pregunta: 9510 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  El lenguaje Java es un lenguaje:";
 choices[85]= new Array();
 choices[85][0] = "De herencia simple";
 choices[85][1] = "De herencia m&uacute;ltiple";
 choices[85][2] = "Que no permite la herencia";
 choices[85][3] = "Todas las anteriores son falsas";
 answers[85] = choices[85][0];
 units[85] = "116";
 comments[85] = "Id Pregunta: 9510. NULL";


//  Id pregunta: 9512 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  En relaci&oacute;n a las APIs de Java, indique la afirmaci&oacute;n falsa:";
 choices[86]= new Array();
 choices[86][0] = "JNDI es el API est&aacute;ndar para el acceso a directorios y servicios de nombres";
 choices[86][1] = "JTA permite que los componentes EE gestionen sus propias transacciones";
 choices[86][2] = "Java IDL permite a las aplicaciones Java EE invocar a objetos CORBA";
 choices[86][3] = "JAX-RPC no soporta WSDL";
 answers[86] = choices[86][3];
 units[86] = "116";
 comments[86] = "Id Pregunta: 9512. NULL";


//  Id pregunta: 9514 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos no existe dentro de la clase abstracta HttpServlet?";
 choices[87]= new Array();
 choices[87][0] = "doGet()";
 choices[87][1] = "doDelete()";
 choices[87][2] = "doPut()";
 choices[87][3] = "Todos los m&eacute;todos anteriores existen en el clase HttpServlet";
 answers[87] = choices[87][3];
 units[87] = "116";
 comments[87] = "Id Pregunta: 9514. NULL";


//  Id pregunta: 9519 AÃ±o de creación de pregunta: 2013-01-01
 questions[88]= "89)  Java dispone de diferentes APIs con el fin de dar soporte para web services. La API que no est&aacute; relacionada con web services es:";
 choices[88]= new Array();
 choices[88][0] = "JAXR";
 choices[88][1] = "JAXB";
 choices[88][2] = "JAXP";
 choices[88][3] = "JTA";
 answers[88] = choices[88][3];
 units[88] = "116";
 comments[88] = "Id Pregunta: 9519. NULL";


//  Id pregunta: 9520 AÃ±o de creación de pregunta: 2013-01-01
 questions[89]= "90)  Indique la afirmaci&oacute;n falsa:";
 choices[89]= new Array();
 choices[89][0] = "JAXP es una API de Java que permite el procesado de documentos XML";
 choices[89][1] = "JAXR es una API de Java que facilita el acceso a UDDI o ebXML";
 choices[89][2] = "SAAJ es una API de Java que permite generar y recoger mensajes SOAP";
 choices[89][3] = "JAX-RPC es una API Java que permite invocar objetos ORBA";
 answers[89] = choices[89][3];
 units[89] = "116";
 comments[89] = "Id Pregunta: 9520. NULL";


//  Id pregunta: 9521 AÃ±o de creación de pregunta: 2013-01-01
 questions[90]= "91)  &iquest;Cu&aacute;les de los siguientes no es un framework de desarrollo en Java?";
 choices[90]= new Array();
 choices[90][0] = "Apache Struts";
 choices[90][1] = "Hibernate";
 choices[90][2] = "Tapestry";
 choices[90][3] = "Todos los anteriores son frameworks de desarrollo en Java";
 answers[90] = choices[90][3];
 units[90] = "116";
 comments[90] = "Id Pregunta: 9521. NULL";


//  Id pregunta: 9528 AÃ±o de creación de pregunta: 2013-01-01
 questions[91]= "92)  &iquest;Qu&eacute; factor afecta a la calidad de servicio en internet?";
 choices[91]= new Array();
 choices[91][0] = "Ancho de banda";
 choices[91][1] = "Jitter o variaci&oacute;n de retardo";
 choices[91][2] = "Eco";
 choices[91][3] = "Todas las respuestas anteriores son correctas";
 answers[91] = choices[91][3];
 units[91] = "117";
 comments[91] = "Id Pregunta: 9528. NULL";


//  Id pregunta: 9542 AÃ±o de creación de pregunta: 2013-01-01
 questions[92]= "93)  Las comunicaciones comerciales no solicitadas realizadas a trav&eacute;s de correo electr&oacute;nico o medios de comunicaci&oacute;n electr&oacute;nica equivalentes:";
 choices[92]= new Array();
 choices[92][0] = "Deben incluir al comienzo del mensaje la palabra &laquo;publicidad&raquo;.";
 choices[92][1] = "Deben indicar la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan.";
 choices[92][2] = "Deben incluir claramente las condiciones comerciales o promocionales.";
 choices[92][3] = "Est&aacute;n prohibidas.";
 answers[92] = choices[92][3];
 units[92] = "30";
 comments[92] = "Id Pregunta: 9542. Examen TIC A1 2011 (Ley 34/2002, art&iacute;culo 21)";


//  Id pregunta: 9547 AÃ±o de creación de pregunta: 2013-01-01
 questions[93]= "94)  Seg&uacute;n la LSSI, la acci&oacute;n de cesaci&oacute;n, dirigida a obtener una sentencia que condene al demandado a cesar en una conducta contraria a dicha Ley, NO podr&aacute; ser interpuesta por:";
 choices[93]= new Array();
 choices[93][0] = "Grupos de consumidores o usuarios afectados";
 choices[93][1] = "El Ministerio Fiscal";
 choices[93][2] = "El Instituto Nacional de Consumo";
 choices[93][3] = "La Secretar&iacute;a de Estado para las Telecomunicaciones y la Sociedad de la Informaci&oacute;n";
 answers[93] = choices[93][3];
 units[93] = "30";
 comments[93] = "Id Pregunta: 9547. Ley 34/2002, art&iacute;culo 31";


//  Id pregunta: 9549 AÃ±o de creación de pregunta: 2013-01-01
 questions[94]= "95)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, indique cu&aacute;l NO es una circunstancia que se tendr&aacute; en cuenta para graduar la cuant&iacute;a de una sanci&oacute;n impuesta:";
 choices[94]= new Array();
 choices[94][0] = "El &aacute;mbito geogr&aacute;fico al que es aplicable la comisi&oacute;n de la infracci&oacute;n";
 choices[94][1] = "La existencia de intencionalidad, reincidencia o reiteraci&oacute;n";
 choices[94][2] = "El plazo de tiempo durante el cual se ha venido cometiendo la infracci&oacute;n";
 choices[94][3] = "El beneficio que haya reportado al infractor la infracci&oacute;n cometida.";
 answers[94] = choices[94][0];
 units[94] = "30";
 comments[94] = "Id Pregunta: 9549. Ley 59/2003, art&iacute;culo 33";


//  Id pregunta: 9580 AÃ±o de creación de pregunta: 2013-01-01
 questions[95]= "96)  Seg&uacute;n el RD 1671/2009 de 6 de noviembre, &iquest;cu&aacute;l de las siguientes condiciones NO es requisito necesario para el uso de CSV como sistema de firma electr&oacute;nica?";
 choices[95]= new Array();
 choices[95][0] = "Car&aacute;cter &uacute;nico del c&oacute;digo del documento.";
 choices[95][1] = "Utilizaci&oacute;n de generadores aleatorios tomando como semillas la identidad del firmante y el contenido del documento.";
 choices[95][2] = "Posibilidad de verificar el documento por el tiempo que se establezca.";
 choices[95][3] = "Para su utilizaci&oacute;n, se requiere una orden del Ministro competente o resoluci&oacute;n del titular del organismo p&uacute;blico, publicada en la sede electr&oacute;nica.";
 answers[95] = choices[95][1];
 units[95] = "43";
 comments[95] = "Id Pregunta: 9580. Examen TIC A1 2011";


//  Id pregunta: 9581 AÃ±o de creación de pregunta: 2013-01-01
 questions[96]= "97)  Seg&uacute;n el RD 1671/2009 de 6 de noviembre, las copias electr&oacute;nicas id&eacute;nticas al documento electr&oacute;nico original que no comportan cambio de formato se considerar&aacute;n:";
 choices[96]= new Array();
 choices[96][0] = "Copia aut&eacute;ntica del documento original.";
 choices[96][1] = "Copia compulsada del documento original.";
 choices[96][2] = "Documento original.";
 choices[96][3] = "No tendr&aacute;n validez.";
 answers[96] = choices[96][2];
 units[96] = "43";
 comments[96] = "Id Pregunta: 9581. Examen TIC A1 2011";


//  Id pregunta: 9583 AÃ±o de creación de pregunta: 2013-01-01
 questions[97]= "98)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[97]= new Array();
 choices[97][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[97][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[97][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[97][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[97] = choices[97][1];
 units[97] = "43, 74";
 comments[97] = "Id Pregunta: 9583. Examen TIC A1 2011";


//  Id pregunta: 9587 AÃ±o de creación de pregunta: 2013-01-01
 questions[98]= "99)  &iquest;A cu&aacute;l de los siguientes &aacute;mbitos establecidos en el art&iacute;culo 2 de la Ley 11/2007 NO aplica el Esquema Nacional de Seguridad (ENS)?:";
 choices[98]= new Array();
 choices[98][0] = "A la Administraci&oacute;n General del Estado, Administraciones de las Comunidades Aut&oacute;nomas y las Entidades que integran la Administraci&oacute;n Local, as&iacute; como las entidades de derecho p&uacute;blico vinculadas o dependientes de las mismas.";
 choices[98][1] = "A los ciudadanos en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[98][2] = "A las relaciones entre las distintas Administraciones P&uacute;blicas.";
 choices[98][3] = "Sistemas que tratan informaci&oacute;n clasificada regulada por Ley 9/1968 de 5 de abril. ";
 answers[98] = choices[98][3];
 units[98] = "43";
 comments[98] = "Id Pregunta: 9587. Examen TIC A2 2011";


//  Id pregunta: 9589 AÃ±o de creación de pregunta: 2013-01-01
 questions[99]= "100)  El Real Decreto 1671/2009 obliga a incluir unos contenidos m&iacute;nimos en los certificados de sello electr&oacute;nico, entre los que NO se incluye:";
 choices[99]= new Array();
 choices[99][0] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n sello electr&oacute;nico.";
 choices[99][1] = "Actuaciones y procedimientos en los que podr&aacute; ser utilizado. ";
 choices[99][2] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor. ";
 choices[99][3] = "Nombre del suscriptor.";
 answers[99] = choices[99][1];
 units[99] = "43";
 comments[99] = "Id Pregunta: 9589. Examen TIC A2 2011";


