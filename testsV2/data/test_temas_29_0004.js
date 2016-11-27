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

//  Id pregunta: 850 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de gesti&oacute;n de contenidos web (CMS)?:";
 choices[0]= new Array();
 choices[0][0] = "ZOPE";
 choices[0][1] = "Easy Web";
 choices[0][2] = "Content Management Server";
 choices[0][3] = "Vignette";
 answers[0] = choices[0][1];
 units[0] = "95";
 comments[0] = "Id Pregunta: 850. NULL";


//  Id pregunta: 1474 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  PDF se corresponde con:";
 choices[1]= new Array();
 choices[1][0] = "Portable Digital Format, Formato Digital Portable";
 choices[1][1] = "Portable Data Format, Formato de Datos Portables";
 choices[1][2] = "Portable Document Format, Formato de Documento Portable";
 choices[1][3] = "Pseudo-compatibility Data Format, Formato de Datos para la Compatibilidad ";
 answers[1] = choices[1][2];
 units[1] = "93";
 comments[1] = "Id Pregunta: 1474. NULL";


//  Id pregunta: 1991 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  A la hora de realizar el an&aacute;lisis documental de cualquier informaci&oacute;n, &iquest;en qu&eacute; nivel se determinan los identificadores de la informaci&oacute;n?:";
 choices[2]= new Array();
 choices[2][0] = "En el nivel de asiento";
 choices[2][1] = "En el nivel de descriptor";
 choices[2][2] = "En el nivel de resumen";
 choices[2][3] = "En ninguno de los niveles anteriores";
 answers[2] = choices[2][0];
 units[2] = "95";
 comments[2] = "Id Pregunta: 1991. NULL";


//  Id pregunta: 2027 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En s&iacute;ntesis de voz no se usan";
 choices[3]= new Array();
 choices[3][0] = "Fonemas";
 choices[3][1] = "Difonemas";
 choices[3][2] = "Sintaxis";
 choices[3][3] = "Morfemas";
 answers[3] = choices[3][2];
 units[3] = "94";
 comments[3] = "Id Pregunta: 2027. Similar a examen TIC SS A 2003";


//  Id pregunta: 2035 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Cu&aacute;l de los siguientes no es un formato de imagen:";
 choices[4]= new Array();
 choices[4][0] = "gif";
 choices[4][1] = "jp2";
 choices[4][2] = "drw";
 choices[4][3] = "php";
 answers[4] = choices[4][3];
 units[4] = "93";
 comments[4] = "Id Pregunta: 2035. Similar a examen TIC SS A 2003";


//  Id pregunta: 2409 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Al nivel b&aacute;sico de comprensi&oacute;n que determina la comprensi&oacute;n del significado del mensaje, eliminando las posibles interpretaciones absurdas y comprobando la coherencia del mensaje recibido con el conocimiento previo que se tiene de la realidad, se denomina:";
 choices[5]= new Array();
 choices[5][0] = "Nivel fonol&oacute;gico";
 choices[5][1] = "Nivel l&eacute;xico-sint&aacute;ctico";
 choices[5][2] = "Nivel pros&oacute;dico";
 choices[5][3] = "Nivel sem&aacute;ntico-pragm&aacute;tico";
 answers[5] = choices[5][3];
 units[5] = "94";
 comments[5] = "Id Pregunta: 2409. ";


//  Id pregunta: 2413 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Dentro de los niveles b&aacute;sicos de compresi&oacute;n y fuentes del conocimiento, el nivel fonol&oacute;gico es aqu&eacute;l que:";
 choices[6]= new Array();
 choices[6][0] = "Analiza las caracter&iacute;sticas de la se&ntilde;al vocal";
 choices[6][1] = "Determina los objetos sonoros elementales";
 choices[6][2] = "Determina el n&uacute;mero preciso de sonidos con valor distinto";
 choices[6][3] = "Determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras";
 answers[6] = choices[6][2];
 units[6] = "94";
 comments[6] = "Id Pregunta: 2413. ";


//  Id pregunta: 2518 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de estas t&eacute;cnicas pierde parte de la  informaci&oacute;n al comprimirla?:";
 choices[7]= new Array();
 choices[7][0] = "Huffman";
 choices[7][1] = "JPEG";
 choices[7][2] = "TIFF";
 choices[7][3] = "LZW";
 answers[7] = choices[7][1];
 units[7] = "93";
 comments[7] = "Id Pregunta: 2518. NULL";


//  Id pregunta: 2523 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;les son los m&eacute;todos b&aacute;sicos de reconocimiento de caracteres en OCR?:";
 choices[8]= new Array();
 choices[8][0] = "Comparaci&oacute;n matricial";
 choices[8][1] = "Extracci&oacute;n de caracter&iacute;sticas";
 choices[8][2] = "Reconocimiento de patrones";
 choices[8][3] = "Son v&aacute;lidas todas las respuestas anteriores";
 answers[8] = choices[8][3];
 units[8] = "93";
 comments[8] = "Id Pregunta: 2523. NULL";


//  Id pregunta: 2529 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En relaci&oacute;n con las tecnolog&iacute;as de tratamiento de im&aacute;genes:";
 choices[9]= new Array();
 choices[9][0] = "En la norma CCITT (ahora UIT-T) grupo 4 se utiliza la t&eacute;cnica de la transformada discreta del coseno";
 choices[9][1] = "En la norma JPEG se emplea la t&eacute;cnica de compresi&oacute;n Huffman para generar la DCT";
 choices[9][2] = "La norma CCITT (ahora UIT-T) grupo 4 realiza una compresi&oacute;n sin perdida de la informaci&oacute;n y, por el contrario, la compresi&oacute;n JPEG produce p&eacute;rdida de informaci&oacute;n";
 choices[9][3] = "JPEG es una norma de compresi&oacute;n y descompresi&oacute;n de im&aacute;genes en movimiento";
 answers[9] = choices[9][2];
 units[9] = "93";
 comments[9] = "Id Pregunta: 2529. NULL";


//  Id pregunta: 2537 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  La resoluci&oacute;n de las c&aacute;maras fotogr&aacute;ficas digitales se mide com&uacute;nmente en:";
 choices[10]= new Array();
 choices[10][0] = "Megabytes";
 choices[10][1] = "Megabits";
 choices[10][2] = "Megahertzios";
 choices[10][3] = "Megap&iacute;xeles";
 answers[10] = choices[10][3];
 units[10] = "93";
 comments[10] = "Id Pregunta: 2537. NULL";


//  Id pregunta: 2542 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Los ficheros inversos se utilizan preferentemente en:";
 choices[11]= new Array();
 choices[11][0] = "Bases de datos relacionales";
 choices[11][1] = "Bases de datos jer&aacute;rquicas";
 choices[11][2] = "Sistemas de recuperaci&oacute;n de informaci&oacute;n";
 choices[11][3] = "Bases de datos reticulares";
 answers[11] = choices[11][2];
 units[11] = "96";
 comments[11] = "Id Pregunta: 2542. NULL";


//  Id pregunta: 2561 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Los wanderers o vagabundos son robots que:";
 choices[12]= new Array();
 choices[12][0] = "se encargan de la medici&oacute;n del crecimiento de la web";
 choices[12][1] = "crean bases de datos a partir de la red hipertexto ";
 choices[12][2] = "localizan referencias hipertexto de un servidor o documento en particular";
 choices[12][3] = "se encargan de vigilar la existencia de direcciones ilegales";
 answers[12] = choices[12][0];
 units[12] = "96";
 comments[12] = "Id Pregunta: 2561. NULL";


//  Id pregunta: 2665 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  El n&uacute;mero de bits por p&iacute;xel se define como:";
 choices[13]= new Array();
 choices[13][0] = "Profundidad del p&iacute;xel.";
 choices[13][1] = "Flexibilidad.";
 choices[13][2] = "Diafragma digital.";
 choices[13][3] = "ECW.";
 answers[13] = choices[13][0];
 units[13] = "93";
 comments[13] = "Id Pregunta: 2665. NULL";


//  Id pregunta: 2675 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n se define:";
 choices[14]= new Array();
 choices[14][0] = "El &Iacute;ndice de Retorno, que mide la cantidad de material devuelto, y el &Iacute;ndice de Precisi&oacute;n, que mide el ajuste del material devuelto.";
 choices[14][1] = "El &Iacute;ndice de Devoluciones, que mide la cantidad de manterial devuelto, y el &Iacute;ndice de Calidad, que mide el ajuste del material devuelto.";
 choices[14][2] = "El &Iacute;ndice de Datos, que mide la cantidad de material devuelto, y el &Iacute;ndice de Errores, que mide el desajuste del material devuelto.";
 choices[14][3] = "El &Iacute;ndice de Retorno, que mide la cantidad de material devuelto y el &Iacute;ndice de Calidad, que mide el ajuste del material devuelto.";
 answers[14] = choices[14][0];
 units[14] = "96";
 comments[14] = "Id Pregunta: 2675. NULL";


//  Id pregunta: 2692 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  Los servicios de informaci&oacute;n electr&oacute;nica denominados &quot;Servicios referenciales&quot; pueden ser:";
 choices[15]= new Array();
 choices[15][0] = "Num&eacute;ricos y textuales.";
 choices[15][1] = "Num&eacute;ricos, textuales o ic&oacute;nicos.";
 choices[15][2] = "Bibliogr&aacute;ficos o directorios.";
 choices[15][3] = "Bibliogr&aacute;ficos, directorios y agendas.";
 answers[15] = choices[15][2];
 units[15] = "96";
 comments[15] = "Id Pregunta: 2692. NULL";


//  Id pregunta: 2699 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  Misi&oacute;n principal de un Sistema de Recuperaci&oacute;n de Informaci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Asistir la b&uacute;squeda de textos en bases de datos relacionales para localizar los documentos o referencias interesantes o relevantes ignorando todas las dem&aacute;s.";
 choices[16][1] = "Asistir la b&uacute;squeda de textos en bases de datos documentales o textuales para localizar los documentos o referencias interesantes o relevantes ignorando todas las dem&aacute;s.";
 choices[16][2] = "Asistir la b&uacute;squeda de textos en bases de datos documentales o textuales para localizar todos los documentos o referencias que aparezcan.";
 choices[16][3] = "Asistir la b&uacute;squeda de im&aacute;genes en bases de datos relacionales para localizar todos los documentos o referencias que aparezcan.";
 answers[16] = choices[16][1];
 units[16] = "96";
 comments[16] = "Id Pregunta: 2699. NULL";


//  Id pregunta: 2706 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  Son roles en un sistema gestor de contenidos:";
 choices[17]= new Array();
 choices[17][0] = "Autores.";
 choices[17][1] = "Publicador.";
 choices[17][2] = "Todas las anteriores.";
 choices[17][3] = "Ninguna de las anteriores.";
 answers[17] = choices[17][2];
 units[17] = "95";
 comments[17] = "Id Pregunta: 2706. NULL";


//  Id pregunta: 2708 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  Tenemos dos discos sobre los que est&aacute; instalada una base de datos, y adem&aacute;s en el disco 2 se ubica el fichero de log backup. Sabiendo que la copia de la base de datos es posterior a la del fichero de log cual ser&iacute;a la  forma de proceder si el disco 2 cae";
 choices[18]= new Array();
 choices[18][0] = "Restaurar la base completa con su &uacute;ltima copia y rehacer las transacciones manualmente a partir de esa fecha";
 choices[18][1] = "Restaurar la base y recuperar autom&aacute;ticamente del fichero de log";
 choices[18][2] = "Restaurar la parte de las tablas y ficheros del disco dos y luego manualmente rehacer las transcciones";
 choices[18][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[18] = choices[18][0];
 units[18] = "96";
 comments[18] = "Id Pregunta: 2708. NULL";


//  Id pregunta: 2848 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  El nivel que determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras es el";
 choices[19]= new Array();
 choices[19][0] = "fonol&oacute;gico";
 choices[19][1] = "pros&oacute;dico";
 choices[19][2] = "fon&eacute;tico";
 choices[19][3] = "ninguno de los anteriores";
 answers[19] = choices[19][1];
 units[19] = "94";
 comments[19] = "Id Pregunta: 2848. ";


//  Id pregunta: 2850 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Entre los factores de complejidad del Habla no se encuentra";
 choices[20]= new Array();
 choices[20][0] = "el locutor";
 choices[20][1] = "el vocabulario";
 choices[20][2] = "la Gram&aacute;tica";
 choices[20][3] = "todos los anteriores son factores de complejidad del Habla";
 answers[20] = choices[20][3];
 units[20] = "94";
 comments[20] = "Id Pregunta: 2850. ";


//  Id pregunta: 3204 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La anchura est&aacute;ndar de un rack es:";
 choices[21]= new Array();
 choices[21][0] = "11 pulgadas";
 choices[21][1] = "25 pulgadas";
 choices[21][2] = "19 pulgadas";
 choices[21][3] = "15 pulgadas";
 answers[21] = choices[21][2];
 units[21] = "97";
 comments[21] = "Id Pregunta: 3204. NULL";


//  Id pregunta: 3215 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El est&aacute;ndar 802.3 del IEEE:";
 choices[22]= new Array();
 choices[22][0] = "Es pr&aacute;cticamente equivalente al Sistema Ethernet";
 choices[22][1] = "Utiliza el m&eacute;todo de paso de testigo en anillo";
 choices[22][2] = "Opera entre 1 y 4 Mb/s";
 choices[22][3] = "Emplea m&eacute;todos de no contenci&oacute;n";
 answers[22] = choices[22][0];
 units[22] = "97";
 comments[22] = "Id Pregunta: 3215. NULL";


//  Id pregunta: 3288 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Qu&eacute; es un convertidor anal&oacute;gico/digital (ADC)?:";
 choices[23]= new Array();
 choices[23][0] = "Un convertidos similar a uno digital";
 choices[23][1] = "Un programa que convierte formato anal&oacute;gico a formato digital";
 choices[23][2] = "Un sistema que lee valores continuos y saca valores discretos";
 choices[23][3] = "Nada de lo anterior es correcto";
 answers[23] = choices[23][2];
 units[23] = "97";
 comments[23] = "Id Pregunta: 3288. NULL";


//  Id pregunta: 3314 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Qu&eacute; t&eacute;cnica de multiplexaci&oacute;n es aquella en la que el n&uacute;mero de se&ntilde;ales simult&aacute;neas que se pueden transmitir por un circuito se obtiene dividiendo el ancho de banda del circuito entre el ancho de banda de las se&ntilde;ales a transmitir?:";
 choices[24]= new Array();
 choices[24][0] = "Multiplexaci&oacute;n estad&iacute;stica";
 choices[24][1] = "Multiplexaci&oacute;n por divisi&oacute;n de frecuencia";
 choices[24][2] = "Multiplexaci&oacute;n por divisi&oacute;n de tiempo";
 choices[24][3] = "Multiplexaci&oacute;n por divisi&oacute;n de fase";
 answers[24] = choices[24][1];
 units[24] = "97";
 comments[24] = "Id Pregunta: 3314. NULL";


//  Id pregunta: 3922 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Un documento multimedia se define como:";
 choices[25]= new Array();
 choices[25][0] = "Compuestos de audio y v&iacute;deo.";
 choices[25][1] = "Compuestos de se&ntilde;ales ni digitales ni digitalizadas.";
 choices[25][2] = "Compuestos de diferentes fuentes y estructuras que incorpora documentos digitales o digitalizados.";
 choices[25][3] = "Compuestos de diferentes fuentes y estructuras que incorpora no s&oacute;lo documentos digitales o digitalizados, sino tambi&eacute;n a los procedentes de otros tipos de se&ntilde;ales.";
 answers[25] = choices[25][3];
 units[25] = "93";
 comments[25] = "Id Pregunta: 3922. NULL";


//  Id pregunta: 4131 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  Los datos de usuario es mejor guardarlos";
 choices[26]= new Array();
 choices[26][0] = "en la segunda partici&oacute;n o disco duro";
 choices[26][1] = "en la partici&oacute;n m&aacute;s cercana a la de la unidad de backup";
 choices[26][2] = "en la primera partici&oacute;n del disco duro";
 choices[26][3] = "ninguna de las anteriores";
 answers[26] = choices[26][0];
 units[26] = "97";
 comments[26] = "Id Pregunta: 4131. NULL";


//  Id pregunta: 4729 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  Cual de los siguientes no es un formato vectorial para el tratamiento de im&aacute;genes:";
 choices[27]= new Array();
 choices[27][0] = "SVG";
 choices[27][1] = "WMF";
 choices[27][2] = "Postscript";
 choices[27][3] = "TIFF";
 answers[27] = choices[27][3];
 units[27] = "93";
 comments[27] = "Id Pregunta: 4729. Examen 2006 JCYL";


//  Id pregunta: 4742 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  Cual de las siguientes afirmaciones es incorrecta:";
 choices[28]= new Array();
 choices[28][0] = "PNG comprime mejor que el formato GIF las im&aacute;genes";
 choices[28][1] = "W3C desaconseja el uso del formato GIF por el posible pago de patentes";
 choices[28][2] = "PNG y GIF soportan animaci&oacute;n de im&aacute;genes";
 choices[28][3] = "PNG soporta un m&aacute;ximo de 256 colores";
 answers[28] = choices[28][2];
 units[28] = "93";
 comments[28] = "Id Pregunta: 4742. Examen 2006 JCYL";


//  Id pregunta: 4863 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  En el proceso de reconocimiento del habla, el algoritmo Dynamic Time Warping (DTW) se utiliza para:";
 choices[29]= new Array();
 choices[29][0] = "Evitar el uso de plantillas";
 choices[29][1] = "Evitar la alineaci&oacute;n temporal";
 choices[29][2] = "Reconocer palabras aisladas y habla continua";
 choices[29][3] = "Conseguir resultados &oacute;ptimos con vocabularios de 5.000 palabras";
 answers[29] = choices[29][2];
 units[29] = "95,94";
 comments[29] = "Id Pregunta: 4863. ";


//  Id pregunta: 4873 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes afirmaciones relacionadas con Dublin Core NO es cierta?";
 choices[30]= new Array();
 choices[30][0] = "El conjunto de sus elementos est&aacute; definido en el Est&aacute;ndar Z39.85-2001 de la NISO (National InformationStandards Organization)";
 choices[30][1] = "Los metadatos Dublin Core se almacenan frecuentemente en la cabecera HEAD de un documento HTML(Hypertext Markup Language)";
 choices[30][2] = "Su nivel b&aacute;sico contiene 15 elementos sobre metadatos";
 choices[30][3] = "Es una iniciativa de la W3C (World Wide Web Consortium)";
 answers[30] = choices[30][3];
 units[30] = "96";
 comments[30] = "Id Pregunta: 4873. ";


//  Id pregunta: 5211 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  En el proceso de reconocimiento de la voz, la fase en la que la informaci&oacute;n es grabada en formato digital es:";
 choices[31]= new Array();
 choices[31][0] = "Captura de la informaci&oacute;n";
 choices[31][1] = "Segmentaci&oacute;n y an&aacute;lisis de la se&ntilde;al";
 choices[31][2] = "Adaptaci&oacute;n al entorno";
 choices[31][3] = "Generar patrones";
 answers[31] = choices[31][0];
 units[31] = "94";
 comments[31] = "Id Pregunta: 5211. ";


//  Id pregunta: 5829 AÃ±o de creación de pregunta: 2009-01-01
 questions[32]= "33)  &iquest;Cu&aacute;ntos p&iacute;xeles tiene una ilustraci&oacute;n de 6x6 pulgadas con una resoluci&oacute;n de 300 ppi?";
 choices[32]= new Array();
 choices[32][0] = "540.000 p&iacute;xeles";
 choices[32][1] = "3.240.000 p&iacute;xeles";
 choices[32][2] = "10.800 p&iacute;xeles";
 choices[32][3] = "1.800 p&iacute;xeles";
 answers[32] = choices[32][1];
 units[32] = "93";
 comments[32] = "Id Pregunta: 5829. MAP 2008 A1";


//  Id pregunta: 6137 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  WebDav es:";
 choices[33]= new Array();
 choices[33][0] = "Un est&aacute;ndar para la descripci&oacute;n de servicios web.";
 choices[33][1] = "Un protocolo para la edici&oacute;n distribuida de archivos.";
 choices[33][2] = "Un grupo de trabajo de la W3C para la definici&oacute;n de arquitecturas de servicios web.";
 choices[33][3] = "Una herramienta de CRM basada en software libre.";
 answers[33] = choices[33][1];
 units[33] = "95";
 comments[33] = "Id Pregunta: 6137. TIC A 2009";


//  Id pregunta: 7295 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  Indique cu&aacute;l de los siguientes es un algoritmo empleado en adaptaci&oacute;n al locutor para reconocimiento autom&aacute;tico del habla (ASR):";
 choices[34]= new Array();
 choices[34][0] = "MLLR";
 choices[34][1] = "MAP";
 choices[34][2] = "a y b son correctas";
 choices[34][3] = "a y b son incorrectas";
 answers[34] = choices[34][2];
 units[34] = "94";
 comments[34] = "Id Pregunta: 7295. NULL";


//  Id pregunta: 7301 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  Indique cu&aacute;l de los siguientes es el algoritmo m&aacute;s utilizado en el proceso de descodificaci&oacute;n en reconocimiento del habla:";
 choices[35]= new Array();
 choices[35][0] = "Viterbi";
 choices[35][1] = "Ruffini";
 choices[35][2] = "Enoch-Root";
 choices[35][3] = "Baum-Welch";
 answers[35] = choices[35][0];
 units[35] = "94";
 comments[35] = "Id Pregunta: 7301. NULL";


//  Id pregunta: 8329 AÃ±o de creación de pregunta: 2011-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l es el est&aacute;ndar de la Organizaci&oacute;n Internacional para la Normalizaci&oacute;n (ISO) para el archivo de documentos electr&oacute;nicos PDF/A?";
 choices[36]= new Array();
 choices[36][0] = "ISO 14000-1";
 choices[36][1] = "ISO 18001";
 choices[36][2] = "ISO 19005-1";
 choices[36][3] = "ISO 690";
 answers[36] = choices[36][2];
 units[36] = "93";
 comments[36] = "Id Pregunta: 8329. Examen TIC A2 2010";


//  Id pregunta: 9033 AÃ±o de creación de pregunta: 2011-01-01
 questions[37]= "38)  Cu&aacute;l es un gestor de contenidos";
 choices[37]= new Array();
 choices[37][0] = "Microsoft Sharepoint";
 choices[37][1] = "Apache";
 choices[37][2] = "TopLink";
 choices[37][3] = "Microsoft Biztalk";
 answers[37] = choices[37][0];
 units[37] = "95";
 comments[37] = "Id Pregunta: 9033. NULL";


//  Id pregunta: 9787 AÃ±o de creación de pregunta: 2014-01-01
 questions[38]= "39)  Cual de los siguientes NO es un elemento VoiceXML 2.0:";
 choices[38]= new Array();
 choices[38][0] = "&lt;input&gt;";
 choices[38][1] = "&lt;transfer&gt; ";
 choices[38][2] = "&lt;object&gt;";
 choices[38][3] = "&lt;log&gt; ";
 answers[38] = choices[38][0];
 units[38] = "94";
 comments[38] = "Id Pregunta: 9787. Examen TIC A2 2013";


//  Id pregunta: 9788 AÃ±o de creación de pregunta: 2014-01-01
 questions[39]= "40)  PLS es un est&aacute;ndar relacionado con VoiceXML, &iquest;para qu&eacute; se utiliza en concreto?";
 choices[39]= new Array();
 choices[39][0] = "&quot;Decora&quot; las locuciones de forma que se generen de la mejor forma posible; por ejemplo, indicando el tono de una determinada locuci&oacute;n (m&aacute;s alto o m&aacute;s bajo). ";
 choices[39][1] = "Realiza el control de la llamada con VoiceXML. ";
 choices[39][2] = "Define la forma en la que las palabras son pronunciadas. ";
 choices[39][3] = "Define la estructura de las gram&aacute;ticas usadas en el reconocimiento del habla. ";
 answers[39] = choices[39][2];
 units[39] = "94";
 comments[39] = "Id Pregunta: 9788. Examen TIC A2 2013";


//  Id pregunta: 9796 AÃ±o de creación de pregunta: 2014-01-01
 questions[40]= "41)  Indique la respuesta FALSA en relaci&oacute;n a MoReq:";
 choices[40]= new Array();
 choices[40][0] = "Es una especificaci&oacute;n de requisitos para la gesti&oacute;n de registros.  ";
 choices[40][1] = "Tiene una versi&oacute;n posterior denominada MoReq2.";
 choices[40][2] = "Fue desarrollado para el programa IDA.";
 choices[40][3] = "No es gratuito.";
 answers[40] = choices[40][3];
 units[40] = "95";
 comments[40] = "Id Pregunta: 9796. Examen TIC A2 2013";


//  Id pregunta: 9976 AÃ±o de creación de pregunta: 2014-01-01
 questions[41]= "42)  En un sistema de gesti&oacute;n de contenidos, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA? ";
 choices[41]= new Array();
 choices[41][0] = "La arquitectura de estos sistemas es monol&iacute;tica, proporcionando un marco de desarrollo que facilita la implementaci&oacute;n de nuevas funcionalidades ";
 choices[41][1] = "Una de sus principales caracter&iacute;sticas es que permiten separar el contenido de la presentaci&oacute;n ";
 choices[41][2] = "Un aspecto clave en la gesti&oacute;n de contenidos es la categorizaci&oacute;n de la informaci&oacute;n ";
 choices[41][3] = "La capacidad de establecer mecanismos que permitan localizar la informaci&oacute;n &uacute;til, se basa en el uso de metadatos que sirven para proporcionar informaci&oacute;n a&ntilde;adida a los contenidos publicados";
 answers[41] = choices[41][0];
 units[41] = "95";
 comments[41] = "Id Pregunta: 9976. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 10454 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como cr&iacute;tica:";
 choices[42]= new Array();
 choices[42][0] = "No puede ser reemplazada por una operaci&oacute;n manual.";
 choices[42][1] = "La tolerancia a la interrupci&oacute;n es muy baja.";
 choices[42][2] = "El costo de interrupci&oacute;n es muy alto.";
 choices[42][3] = "Todas las anteriores.";
 answers[42] = choices[42][3];
 units[42] = "97";
 comments[42] = "Id Pregunta: 10454. NULL";


//  Id pregunta: 11294 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  &iquest;En qu&eacute; consisten los Sistemas de Gesti&oacute;n de Contenidos Empresariales (ECM)? ";
 choices[43]= new Array();
 choices[43][0] = "En la creaci&oacute;n y gesti&oacute;n de contenidos de un sitio Web";
 choices[43][1] = "En la edici&oacute;n colaborativa de contenidos";
 choices[43][2] = "En la gesti&oacute;n generalista de contenidos desestructurados";
 choices[43][3] = "Todas las anteriores";
 answers[43] = choices[43][3];
 units[43] = "95";
 comments[43] = "Id Pregunta: 11294. ";


