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

//  Id pregunta: 1452 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no es un formato de descripci&oacute;n de p&aacute;ginas?:";
 choices[0]= new Array();
 choices[0][0] = "EPS";
 choices[0][1] = "RIP";
 choices[0][2] = "PDF";
 choices[0][3] = "PCL ";
 answers[0] = choices[0][1];
 units[0] = "93";
 comments[0] = "Id Pregunta: 1452. NULL";


//  Id pregunta: 1464 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  La compresi&oacute;n con p&eacute;rdidas no ser&iacute;a adecuada para:";
 choices[1]= new Array();
 choices[1][0] = "Un ejecutable";
 choices[1][1] = "Texto ASCII";
 choices[1][2] = "Un facs&iacute;mil";
 choices[1][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[1] = choices[1][3];
 units[1] = "93";
 comments[1] = "Id Pregunta: 1464. NULL";


//  Id pregunta: 1473 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Para el tratamiento de im&aacute;genes informatizadas se usan algoritmos construidos mediante:";
 choices[2]= new Array();
 choices[2][0] = "Ecuaciones de Cauchy";
 choices[2][1] = "Series de McLaurin";
 choices[2][2] = "Integrales de Riemann Stiltges";
 choices[2][3] = "Transformadas de Fourier";
 answers[2] = choices[2][3];
 units[2] = "93";
 comments[2] = "Id Pregunta: 1473. NULL";


//  Id pregunta: 1834 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  El formato PDF/A";
 choices[3]= new Array();
 choices[3][0] = "Es la &uacute;ltima versi&oacute;n que ha publicado Adobe de su formato PDF";
 choices[3][1] = "Es una versi&oacute;n estandarizada por ISO para el almacenamiento de archivos a largo plazo";
 choices[3][2] = "Es una versi&oacute;n de PDF que se ha publicado bajo una licencia CC";
 choices[3][3] = "Es la primera versi&oacute;n PDF que public&oacute; Adobe y la m&aacute;s extendida";
 answers[3] = choices[3][1];
 units[3] = "93";
 comments[3] = "Id Pregunta: 1834. NULL";


//  Id pregunta: 2036 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Sean: a) ac&uacute;stico, b) fon&eacute;tico, c) fonol&oacute;gico, d) l&eacute;xico-sint&aacute;ctico, e) pros&oacute;dico, f) sem&aacute;ntico-pragm&aacute;tico, &iquest;cu&aacute;l ser&iacute;a la ordenaci&oacute;n correcta en funci&oacute;n de la menor a mayor inteligencia...";
 choices[4]= new Array();
 choices[4][0] = "a c b d e f";
 choices[4][1] = "a b c d e f";
 choices[4][2] = "a c b e d f";
 choices[4][3] = "a b c e d f";
 answers[4] = choices[4][1];
 units[4] = "94";
 comments[4] = "Id Pregunta: 2036. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2099 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En un Sistema de Gesti&oacute;n de Bases de Datos Documentales el diccionario de palabras vac&iacute;as permite:";
 choices[5]= new Array();
 choices[5][0] = "Buscar palabras o combinaciones de las mismas sin conocer con exactitud los caracteres que las componen";
 choices[5][1] = "Enlazar consultas individuales para crear rutinas de interrogaci&oacute;n complejas";
 choices[5][2] = "Definir un conjunto de palabras que no deseamos que formen parte de los &iacute;ndices";
 choices[5][3] = "Igualar caracteres para que el sistema de b&uacute;squeda los considere iguales";
 answers[5] = choices[5][2];
 units[5] = "96";
 comments[5] = "Id Pregunta: 2099. ";


//  Id pregunta: 2106 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Una de las caracter&iacute;sticas especiales de las bases de datos documentales, con respecto a otros tipos de bases de datos es que:";
 choices[6]= new Array();
 choices[6][0] = "Est&aacute;n integradas por campos";
 choices[6][1] = "Son adecuadas para una informaci&oacute;n muy estructurada";
 choices[6][2] = "Est&aacute;n basadas en sistemas de archivo y ficheros inversos";
 choices[6][3] = "Se almacenan en tablas";
 answers[6] = choices[6][2];
 units[6] = "96";
 comments[6] = "Id Pregunta: 2106. ";


//  Id pregunta: 2378 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Hacer una previsi&oacute;n de procedimientos de recuperaci&oacute;n se debe contemplar en:";
 choices[7]= new Array();
 choices[7][0] = "Plan de Contingencias";
 choices[7][1] = "Control de accesos a bases de datos";
 choices[7][2] = "Mantenimiento y dise&ntilde;o de aplicaciones";
 choices[7][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[7] = choices[7][0];
 units[7] = "96";
 comments[7] = "Id Pregunta: 2378. NULL";


//  Id pregunta: 2408 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Al hablar de bases de datos documentales, el proceso de generar ficheros &iacute;ndice, se denomina:";
 choices[8]= new Array();
 choices[8][0] = "Indexaci&oacute;n";
 choices[8][1] = "Indizaci&oacute;n";
 choices[8][2] = "Indistintamente indexaci&oacute;n o indizaci&oacute;n";
 choices[8][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[8] = choices[8][2];
 units[8] = "95";
 comments[8] = "Id Pregunta: 2408. NULL";


//  Id pregunta: 2412 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  De los siguientes est&aacute;ndares de comprensi&oacute;n de datos, se&ntilde;alar aquel que se basa en la denominada transformaci&oacute;n discreta del coseno:";
 choices[9]= new Array();
 choices[9][0] = "JPEG";
 choices[9][1] = "LZW";
 choices[9][2] = "RLE";
 choices[9][3] = "JPEG 2000";
 answers[9] = choices[9][0];
 units[9] = "93";
 comments[9] = "Id Pregunta: 2412. NULL";


//  Id pregunta: 2414 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El algoritmo de Viterbi para reconocimiento de voz es del tipo:";
 choices[10]= new Array();
 choices[10][0] = "Patrones de comparaci&oacute;n (pattern matching)";
 choices[10][1] = "HMM";
 choices[10][2] = "Modelos de Markov ocultos";
 choices[10][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[10] = choices[10][3];
 units[10] = "94";
 comments[10] = "Id Pregunta: 2414. ";


//  Id pregunta: 2415 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El filtro de Sobel es com&uacute;nmente usado en tratamiento de im&aacute;genes para:";
 choices[11]= new Array();
 choices[11][0] = "Esqueletizaci&oacute;n de figuras";
 choices[11][1] = "Suavizaci&oacute;n de contornos";
 choices[11][2] = "Eliminaci&oacute;n del ruido";
 choices[11][3] = "Detecci&oacute;n de bordes";
 answers[11] = choices[11][3];
 units[11] = "93";
 comments[11] = "Id Pregunta: 2415. NULL";


//  Id pregunta: 2418 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El nivel b&aacute;sico de comprensi&oacute;n donde comienza la abstracci&oacute;n y se aplican reglas gramaticales es el:";
 choices[12]= new Array();
 choices[12][0] = "Nivel fonol&oacute;gico";
 choices[12][1] = "Nivel fon&eacute;tico";
 choices[12][2] = "Nivel ac&uacute;stico";
 choices[12][3] = "Nivel l&eacute;xico-sint&aacute;ctico";
 answers[12] = choices[12][3];
 units[12] = "94";
 comments[12] = "Id Pregunta: 2418. ";


//  Id pregunta: 2421 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El proceso de reconocimiento de la palabra presenta cuatro fases. &iquest;Cu&aacute;l de las siguientes no es una de ellas?:";
 choices[13]= new Array();
 choices[13][0] = "Comparaci&oacute;n";
 choices[13][1] = "Detecci&oacute;n de bordes";
 choices[13][2] = "Reconstrucci&oacute;n";
 choices[13][3] = "Normalizaci&oacute;n en el tiempo";
 answers[13] = choices[13][2];
 units[13] = "94";
 comments[13] = "Id Pregunta: 2421. ";


//  Id pregunta: 2517 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;A qu&eacute; se denomina dentro de los lenguajes documentales 'silencios documentales'?:";
 choices[14]= new Array();
 choices[14][0] = "A la informaci&oacute;n excedente";
 choices[14][1] = "A la informaci&oacute;n no excedente";
 choices[14][2] = "A los datos solicitados pero no obtenidos por ruptura del proceso";
 choices[14][3] = "A los datos solicitados pero no obtenidos por distorsi&oacute;n del proceso";
 answers[14] = choices[14][3];
 units[14] = "96";
 comments[14] = "Id Pregunta: 2517. NULL";


//  Id pregunta: 2520 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es la menos relevante a la hora de especificar un sistema de reconocimiento de voz?:";
 choices[15]= new Array();
 choices[15][0] = "La amplitud del vocabulario soportado";
 choices[15][1] = "La fluidez de la locuci&oacute;n admitida por el sistema";
 choices[15][2] = "La dependencia o independencia del orador";
 choices[15][3] = "La capacidad de interpretar el habla cuando el orador se expresa en tono bajo";
 answers[15] = choices[15][3];
 units[15] = "94";
 comments[15] = "Id Pregunta: 2520. ";


//  Id pregunta: 2524 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Qu&eacute; desventaja tiene el formato de im&aacute;genes JPEG?:";
 choices[16]= new Array();
 choices[16][0] = "La imagen pierde informaci&oacute;n cuando se comprime";
 choices[16][1] = "La magnitud de compresi&oacute;n es peque&ntilde;a y ocupa demasiado espacio de disco";
 choices[16][2] = "Todos los programas que brindan soporte al formato JPEG han de pagar por el uso de la licencia del algoritmo de compresi&oacute;n que utiliza";
 choices[16][3] = "No tiene ninguna desventaja";
 answers[16] = choices[16][0];
 units[16] = "93";
 comments[16] = "Id Pregunta: 2524. NULL";


//  Id pregunta: 2525 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El tipo de indizaci&oacute;n por descriptores es el m&aacute;s utilizado en la indizaci&oacute;n asistida por ordenador, y puede realizarse mediante distintos m&eacute;todos. &iquest;Cu&aacute;l de los rese&ntilde;ados no ser&iacute;a un m&eacute;todo de indizaci&oacute;n?:";
 choices[17]= new Array();
 choices[17][0] = "El m&eacute;todo estad&iacute;stico";
 choices[17][1] = "El m&eacute;todo por asignaci&oacute;n de conceptos claves del documento";
 choices[17][2] = "El m&eacute;todo sint&aacute;ctico";
 choices[17][3] = "El m&eacute;todo morfol&oacute;gico";
 answers[17] = choices[17][3];
 units[17] = "96";
 comments[17] = "Id Pregunta: 2525. NULL";


//  Id pregunta: 2527 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En inform&aacute;tica, el t&eacute;rmino de recuperaci&oacute;n en texto libre se utiliza para describir:";
 choices[18]= new Array();
 choices[18][0] = "La recuperaci&oacute;n en un base de datos que posee &iacute;ndices asociados";
 choices[18][1] = "La recuperaci&oacute;n en un base de datos que almacena el texto &iacute;ntegro, y donde cada palabra del texto es indexada";
 choices[18][2] = "La recuperaci&oacute;n en un base de datos que almacena el texto &iacute;ntegro y carece de &iacute;ndices";
 choices[18][3] = "La recuperaci&oacute;n en un base de datos que almacena el texto &iacute;ntegro, y donde cada palabra del texto es indexada, a excepci&oacute;n de las contenidas en el diccionario de palabras vac&iacute;as";
 answers[18] = choices[18][3];
 units[18] = "96";
 comments[18] = "Id Pregunta: 2527. NULL";


//  Id pregunta: 2528 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En procesamiento de la voz, el nivel de comprensi&oacute;n en el cu&aacute;l se identifican los objetos sonoros elementales se llama:";
 choices[19]= new Array();
 choices[19][0] = "Nivel ac&uacute;stico";
 choices[19][1] = "Nivel fon&eacute;tico";
 choices[19][2] = "Nivel fonol&oacute;gico";
 choices[19][3] = "Nivel pros&oacute;dico";
 answers[19] = choices[19][1];
 units[19] = "94";
 comments[19] = "Id Pregunta: 2528. ";


//  Id pregunta: 2531 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En sistemas de recuperaci&oacute;n de la informaci&oacute;n, al cociente entre el n&uacute;mero de referencias correctas obtenidas y el n&uacute;mero total de documentos recuperados, se denomina:";
 choices[20]= new Array();
 choices[20][0] = "&Iacute;ndice de retorno";
 choices[20][1] = "&Iacute;ndice de exactitud";
 choices[20][2] = "&Iacute;ndice de precisi&oacute;n";
 choices[20][3] = "&Iacute;ndice de localizaci&oacute;n";
 answers[20] = choices[20][2];
 units[20] = "96";
 comments[20] = "Id Pregunta: 2531. NULL";


//  Id pregunta: 2532 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En tratamiento digital de im&aacute;genes:";
 choices[21]= new Array();
 choices[21][0] = "El filtro de mediana es un filtro paso alto";
 choices[21][1] = "Un filtro paso bajo suaviza los contornos, provocando difusi&oacute;n en la imagen";
 choices[21][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[21][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[21] = choices[21][1];
 units[21] = "93";
 comments[21] = "Id Pregunta: 2532. NULL";


//  Id pregunta: 2533 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En una base de datos documental, se denomina '&iacute;ndice de retorno' a:";
 choices[22]= new Array();
 choices[22][0] = "La relaci&oacute;n entre el n&uacute;mero de documentos relevantes en la base de datos frente a los documentos relevantes recuperados";
 choices[22][1] = "La inversa del &iacute;ndice de precisi&oacute;n";
 choices[22][2] = "La relaci&oacute;n entre el n&uacute;mero de documentos recuperados frente al n&uacute;mero total de documentos recuperados";
 choices[22][3] = "La relaci&oacute;n entre el n&uacute;mero de documentos relevantes recuperados frente a los documentos relevantes en la base de datos";
 answers[22] = choices[22][3];
 units[22] = "94";
 comments[22] = "Id Pregunta: 2533. ";


//  Id pregunta: 2536 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La denominada comparaci&oacute;n matricial como m&eacute;todo de reconocimiento de caracteres en OCR se utiliza para:";
 choices[23]= new Array();
 choices[23][0] = "Reconocer caracteres monoespaciados, comparando los datos escaneados contra una plantilla de caracteres est&aacute;ndar";
 choices[23][1] = "Escanea la forma de los caracteres, compar&aacute;ndolos con tablas de formas, examinando la organizaci&oacute;n de los bits y componiendo la letra o car&aacute;cter";
 choices[23][2] = "No son correctas ni &lsquo;a&rsquo; ni &lsquo;b&rsquo;";
 choices[23][3] = "Son correctas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[23] = choices[23][0];
 units[23] = "94";
 comments[23] = "Id Pregunta: 2536. ";


//  Id pregunta: 2543 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Los m&eacute;todos de compresi&oacute;n de im&aacute;genes basados en la codificaci&oacute;n del dominio transformado (transformada de Fourier, coseno discreta, etc):";
 choices[24]= new Array();
 choices[24][0] = "Son m&eacute;todos de compresi&oacute;n sin p&eacute;rdidas";
 choices[24][1] = "Son m&eacute;todos de compresi&oacute;n con p&eacute;rdidas";
 choices[24][2] = "La codificaci&oacute;n del dominio transformado no tiene aplicaci&oacute;n para la compresi&oacute;n de im&aacute;genes";
 choices[24][3] = "Se conocen tambi&eacute;n como codificaci&oacute;n de Huffman";
 answers[24] = choices[24][1];
 units[24] = "93";
 comments[24] = "Id Pregunta: 2543. NULL";


//  Id pregunta: 2544 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Los m&eacute;todos de recuperaci&oacute;n de informaci&oacute;n se basan fundamentalmente en:";
 choices[25]= new Array();
 choices[25][0] = "Manipulaci&oacute;n de vol&uacute;menes de informaci&oacute;n muy peque&ntilde;os";
 choices[25][1] = "Identificaci&oacute;n de claves (palabras, fragmentos o frases) y su b&uacute;squeda en la base de informaci&oacute;n o ficheros auxiliares";
 choices[25][2] = "Tratamiento de informaci&oacute;n mediante sistemas hipertexto";
 choices[25][3] = "Grabaci&oacute;n y recuperaci&oacute;n de im&aacute;genes";
 answers[25] = choices[25][1];
 units[25] = "96";
 comments[25] = "Id Pregunta: 2544. NULL";


//  Id pregunta: 2545 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Los m&eacute;todos vectoriales y probabil&iacute;sticos de recuperaci&oacute;n de informaci&oacute;n se basan:";
 choices[26]= new Array();
 choices[26][0] = "&Aacute;lgebra de Boole y frecuencia de t&eacute;rminos respectivamente";
 choices[26][1] = "Sistemas de retroalimentaci&oacute;n y lenguaje natural respectivamente";
 choices[26][2] = "Indexaci&oacute;n y recuperaci&oacute;n vectorial";
 choices[26][3] = "Frecuencia de aparici&oacute;n de t&eacute;rminos y teorema de Bayes";
 answers[26] = choices[26][3];
 units[26] = "96";
 comments[26] = "Id Pregunta: 2545. NULL";


//  Id pregunta: 2546 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Los sintetizadores de voz utilizan dos m&eacute;todos para sintetizar las palabras. Uno de ellos es:";
 choices[27]= new Array();
 choices[27][0] = "S&iacute;ntesis constructiva";
 choices[27][1] = "S&iacute;ntesis acumulativa";
 choices[27][2] = "S&iacute;ntesis simulativa";
 choices[27][3] = "S&iacute;ntesis por patrones";
 answers[27] = choices[27][0];
 units[27] = "94";
 comments[27] = "Id Pregunta: 2546. ";


//  Id pregunta: 2547 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los sistemas de recuperaci&oacute;n de informaci&oacute;n tienen como objeto fundamental:";
 choices[28]= new Array();
 choices[28][0] = "Recuperaci&oacute;n de bases de datos codasyl  y relacionales";
 choices[28][1] = "An&aacute;lisis documental";
 choices[28][2] = "Restaurar ficheros y bases de datos pseudo relacionales";
 choices[28][3] = "Consultas y modificaciones de bases de datos a trav&eacute;s del lenguaje SQL";
 answers[28] = choices[28][1];
 units[28] = "96";
 comments[28] = "Id Pregunta: 2547. NULL";


//  Id pregunta: 2559 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Los robots (entendidos como programas que recorren de forma autom&aacute;tica la estructura hipertexto de la web) se clasifican com&uacute;nmente en:";
 choices[29]= new Array();
 choices[29][0] = "est&aacute;ticos y din&aacute;micos";
 choices[29][1] = "spiders, knowbots y wanderers";
 choices[29][2] = "mantenimiento, esp&iacute;as y virus";
 choices[29][3] = "recopiladores de informaci&oacute;n y vigilantes ";
 answers[29] = choices[29][1];
 units[29] = "96";
 comments[29] = "Id Pregunta: 2559. NULL";


//  Id pregunta: 2587 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  En el contexto de los sistemas gestores de bases de datos documentales (SGBDD), la funcionalidad que permite que determinadas palabras u objetos redirijan a otros textos relacionados o con informaci&oacute;n ampliada, se denomina:";
 choices[30]= new Array();
 choices[30][0] = "Tesauro.";
 choices[30][1] = "Hipertexto.";
 choices[30][2] = "Referencia cruzada.";
 choices[30][3] = "Atributo.";
 answers[30] = choices[30][1];
 units[30] = "95";
 comments[30] = "Id Pregunta: 2587. Junta Andaluc&iacute;a";


//  Id pregunta: 2661 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Cu&aacute;l de los siguientes no es un m&eacute;todo o t&eacute;cnica de recuperaci&oacute;n de informaci&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Sistemas de hojeo-ojeo.";
 choices[31][1] = "Sistemas de fila incierta.";
 choices[31][2] = "Sistemas de normal.";
 choices[31][3] = "Sistemas expertos.";
 answers[31] = choices[31][1];
 units[31] = "96";
 comments[31] = "Id Pregunta: 2661. NULL";


//  Id pregunta: 2663 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  El nivel ac&uacute;stico:";
 choices[32]= new Array();
 choices[32][0] = "Analiza las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamen-tal, los formantes, las transiciones, etc.";
 choices[32][1] = "Determina los objetos sonoros elementales, tales como los fonemas, las s&iacute;labas o los ruidos simples.";
 choices[32][2] = "Tambi&eacute;n llamado fon&eacute;tico distintivo, determina el n&uacute;mero preciso de sonidos con valor distinto.";
 choices[32][3] = "Empieza la abstracci&oacute;n y en se aplican reglas gramaticales al conjunto de sonidos a identificar.";
 answers[32] = choices[32][0];
 units[32] = "94";
 comments[32] = "Id Pregunta: 2663. ";


//  Id pregunta: 2664 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  El nivel l&eacute;xico-sint&aacute;ctico:";
 choices[33]= new Array();
 choices[33][0] = "Analiza las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[33][1] = "Llega a la comprensi&oacute;n del significado del mensaje, eliminando las posibles interpretaciones absurdas y comprobando la coherencia del mensaje recibido con el conocimiento previo que se tiene de la realidad, as&iacute; como del contexto en el que discurre el di&aacute;l";
 choices[33][2] = "Determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras.";
 choices[33][3] = "Extrae los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos.";
 answers[33] = choices[33][3];
 units[33] = "94";
 comments[33] = "Id Pregunta: 2664. ";


//  Id pregunta: 2667 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  En este nivel se extraen los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos:";
 choices[34]= new Array();
 choices[34][0] = "Nivel fon&eacute;tico distintivo.";
 choices[34][1] = "Nivel pros&oacute;dico.";
 choices[34][2] = "Nivel l&eacute;xico-sint&aacute;ctico.";
 choices[34][3] = "Nivel ac&uacute;stico.";
 answers[34] = choices[34][2];
 units[34] = "94";
 comments[34] = "Id Pregunta: 2667. ";


//  Id pregunta: 2668 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  En gesti&oacute;n de contenidos se entiende por contenido:";
 choices[35]= new Array();
 choices[35][0] = "El conjunto de datos o informaci&oacute;n que se crean, archivan y publican en formato digital.";
 choices[35][1] = "El conjunto de datos o informaci&oacute;n que se archivan en formato digital como copia de respaldo.";
 choices[35][2] = "Informaci&oacute;n almacenada en dispositivos masivos de r&aacute;pido acceso.";
 choices[35][3] = "Conjunto de discos &oacute;pticos de gran capacidad y m&iacute;nimos tiempos de acceso.";
 answers[35] = choices[35][0];
 units[35] = "95";
 comments[35] = "Id Pregunta: 2668. NULL";


//  Id pregunta: 2672 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n el m&eacute;todo que consiste en que el usuario indica si entre los textos recuperados hay algunos relevantes o no, y el sistema modifica as&iacute; el vector de b&uacute;squeda se denomina:";
 choices[36]= new Array();
 choices[36][0] = "Retroalimentaci&oacute;n.";
 choices[36][1] = "Modelo booleano.";
 choices[36][2] = "lenguaje natural.";
 choices[36][3] = "L&oacute;gica borrosa.";
 answers[36] = choices[36][0];
 units[36] = "96";
 comments[36] = "Id Pregunta: 2672. NULL";


//  Id pregunta: 2678 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Formato m&aacute;s utilizado en la actualidad en los Sistemas de Gesti&oacute;n de Contenidos:";
 choices[37]= new Array();
 choices[37][0] = "HTTP.";
 choices[37][1] = "CCS.";
 choices[37][2] = "Excel.";
 choices[37][3] = "XML.";
 answers[37] = choices[37][3];
 units[37] = "95";
 comments[37] = "Id Pregunta: 2678. NULL";


//  Id pregunta: 2681 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Indique la afirmaci&oacute;n verdadera:";
 choices[38]= new Array();
 choices[38][0] = "La informaci&oacute;n recogida por la c&eacute;lula fotoel&eacute;ctrica del esc&aacute;ner es de tipo anal&oacute;gica.";
 choices[38][1] = "En el caso de los esc&aacute;neres de color, el sistema de detecci&oacute;n consiste en separar los componentes de color en sus valores b&aacute;sicos: rojo, verde y azul.";
 choices[38][2] = "La exploraci&oacute;n se realiza mediante c&eacute;lulas fotoel&eacute;ctricas o fotodiodos y el resultado es una informaci&oacute;n que hay que digitalizar antes de que se pueda transmitir al ordenador, que es capaz de procesarla mediante sistemas gr&aacute;ficos y software especial.";
 choices[38][3] = "Todas las anteriores.";
 answers[38] = choices[38][3];
 units[38] = "93";
 comments[38] = "Id Pregunta: 2681. NULL";


//  Id pregunta: 2695 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n consistente en r&aacute;pidas ojeadas de selecci&oacute;n buscando referencias en textos sin an&aacute;lisis con profundidad de los contenidos, auxili&aacute;ndose de se&ntilde;aladores impl&iacute;citos y expl&iacute;citos:";
 choices[39]= new Array();
 choices[39][0] = "Se denominan hojeo-ojeo.";
 choices[39][1] = "Son relativamente poco complejos.";
 choices[39][2] = "Todas las anteriores.";
 choices[39][3] = "Ninguna de las anteriores.";
 answers[39] = choices[39][2];
 units[39] = "96";
 comments[39] = "Id Pregunta: 2695. NULL";


//  Id pregunta: 2844 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  PDF se diferencia de Postscript en que";
 choices[40]= new Array();
 choices[40][0] = "PDF no es un lenguaje , es un formato de archivo";
 choices[40][1] = "No se diferencian; ambos son lenguajes y formatos de archivo";
 choices[40][2] = "Postscript es independiente de la plataforma";
 choices[40][3] = "Postscript permite modificaciones parciales (editabilidad)";
 answers[40] = choices[40][0];
 units[40] = "93";
 comments[40] = "Id Pregunta: 2844. NULL";


//  Id pregunta: 2849 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  A los sintetizadores de formantes tambi&eacute;n se les conoce como ";
 choices[41]= new Array();
 choices[41][0] = "sintetizadores articulatorios";
 choices[41][1] = "sintetizadores por al&oacute;fonos";
 choices[41][2] = "sintetizadores por reglas";
 choices[41][3] = "sintetizadores por concatenaci&oacute;n controlada";
 answers[41] = choices[41][2];
 units[41] = "94";
 comments[41] = "Id Pregunta: 2849. ";


//  Id pregunta: 2851 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Qu&eacute; sistema de parametr&iacute;zaci&oacute;n no se emplea en el reconocimiento de voz?";
 choices[42]= new Array();
 choices[42][0] = "por fonemas";
 choices[42][1] = "por morfemas";
 choices[42][2] = "por difonemas";
 choices[42][3] = "por semis&iacute;labas";
 answers[42] = choices[42][1];
 units[42] = "94";
 comments[42] = "Id Pregunta: 2851. ";


//  Id pregunta: 2854 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Un gestor documental";
 choices[43]= new Array();
 choices[43][0] = "permite crear publicaciones a partir del contenido gestionado";
 choices[43][1] = "incluye funcionalidades propias de un gestor de contenidos";
 choices[43][2] = "se encarga de la gesti&oacute;n y organizaci&oacute;n de documentaci&oacute;n generada por otras aplicaciones";
 choices[43][3] = "ninguna de las anteriores";
 answers[43] = choices[43][2];
 units[43] = "95";
 comments[43] = "Id Pregunta: 2854. NULL";


//  Id pregunta: 2855 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Entre las fases de publicaci&oacute;n de un contenido no se encuentra";
 choices[44]= new Array();
 choices[44][0] = "Categorizaci&oacute;n";
 choices[44][1] = "Composici&oacute;n";
 choices[44][2] = "Difusi&oacute;n";
 choices[44][3] = "Normalizaci&oacute;n";
 answers[44] = choices[44][3];
 units[44] = "95";
 comments[44] = "Id Pregunta: 2855. NULL";


//  Id pregunta: 3060 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  El lenguaje de marcado que permite el desarrollo de servicios IVR basados en web se denomina:";
 choices[45]= new Array();
 choices[45][0] = "IVRML";
 choices[45][1] = "VML";
 choices[45][2] = "VoiceXML";
 choices[45][3] = "IVRXML";
 answers[45] = choices[45][2];
 units[45] = "94";
 comments[45] = "Id Pregunta: 3060. ";


//  Id pregunta: 3289 AÃ±o de creación de pregunta: 2002-01-01
 questions[46]= "47)  &iquest;Qu&eacute; es un modem en banda base?:";
 choices[46]= new Array();
 choices[46][0] = "Equipo que efect&uacute;a &uacute;nicamente funciones de codificaci&oacute;n y decodificaci&oacute;n, aparte de las funciones de di&aacute;logo con el ETD y de interfaz con la l&iacute;nea de transmisi&oacute;n";
 choices[46][1] = "Equipo que adapta el ETD a las caracter&iacute;sticas el&eacute;ctricas de la l&iacute;nea de transmisi&oacute;n";
 choices[46][2] = "Equipo normalizado que realiza la modulaci&oacute;n y demodulaci&oacute;n teniendo como l&iacute;mite inferior de frecuencias 0 Hz";
 choices[46][3] = "Equipo que realiza la modulaci&oacute;n y demodulaci&oacute;n teniendo como l&iacute;mite inferior de frecuencias 0 HZ y l&iacute;mite superior dependiente de la velocidad de transmisi&oacute;n";
 answers[46] = choices[46][0];
 units[46] = "97";
 comments[46] = "Id Pregunta: 3289. NULL";


//  Id pregunta: 3295 AÃ±o de creación de pregunta: 2002-01-01
 questions[47]= "48)  &iquest;Qu&eacute; indica el teorema de Shannon?:";
 choices[47]= new Array();
 choices[47][0] = "La m&aacute;xima velocidad de transferencia de un canal  es  H*log(1+S/N), donde H es el ancho de banda del canal de transmisi&oacute;n y S/N es la relaci&oacute;n se&ntilde;al ruido";
 choices[47][1] = "La m&aacute;xima velocidad a la que se puede transmitir informaci&oacute;n digital binaria es el doble de la m&aacute;xima frecuencia del canal de transmisi&oacute;n";
 choices[47][2] = "La m&aacute;xima velocidad de transferencia de un canal  sujeto a ruido es directamente proporcional a la relaci&oacute;n se&ntilde;al ruido del canal";
 choices[47][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[47] = choices[47][0];
 units[47] = "97";
 comments[47] = "Id Pregunta: 3295. NULL";


//  Id pregunta: 3311 AÃ±o de creación de pregunta: 2002-01-01
 questions[48]= "49)  &iquest;Qu&eacute; se entiende por modem inteligente?:";
 choices[48]= new Array();
 choices[48][0] = "Aquellos que son capaces de detectar errores";
 choices[48][1] = "Aquellos que llevan microprocesador y memoria";
 choices[48][2] = "Aquellos que no pueden detectar m&uacute;ltiples llamadas";
 choices[48][3] = "Aquellos que funcionan igual a un terminal";
 answers[48] = choices[48][0];
 units[48] = "97";
 comments[48] = "Id Pregunta: 3311. NULL";


//  Id pregunta: 3316 AÃ±o de creación de pregunta: 2002-01-01
 questions[49]= "50)  &iquest;Qu&eacute; topolog&iacute;a tiene una red ethernet cableada con 10 Base T?:";
 choices[49]= new Array();
 choices[49][0] = "Bus";
 choices[49][1] = "Estrella";
 choices[49][2] = "Anillo";
 choices[49][3] = "Doble bus";
 answers[49] = choices[49][1];
 units[49] = "97";
 comments[49] = "Id Pregunta: 3316. NULL";


//  Id pregunta: 3322 AÃ±o de creación de pregunta: 2002-01-01
 questions[50]= "51)  100BaseTX, 100BaseFX, y 100BaseT4 usan los tipos de cable (o de superior calidad) , respectivamente:";
 choices[50]= new Array();
 choices[50][0] = "Categoria 5 STP, fibra &oacute;ptica, y categor&iacute;a 5 STP";
 choices[50][1] = "Fibra &oacute;ptica, Categoria 5 UTP, y categor&iacute;a 3 UTP";
 choices[50][2] = "Categor&iacute;a 5 UTP, tipo 1 STP,  y categor&iacute;a 3 UTP";
 choices[50][3] = "Categor&iacute;a 5 UTP, fibra &oacute;ptica, y categor&iacute;a 3 UTP";
 answers[50] = choices[50][3];
 units[50] = "97";
 comments[50] = "Id Pregunta: 3322. NULL";


//  Id pregunta: 3911 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Algoritmo de compresi&oacute;n de im&aacute;genes sin p&eacute;rdidas:";
 choices[51]= new Array();
 choices[51][0] = "ECW.";
 choices[51][1] = "RLE.";
 choices[51][2] = "MPEG.";
 choices[51][3] = "TXA.";
 answers[51] = choices[51][1];
 units[51] = "93";
 comments[51] = "Id Pregunta: 3911. NULL";


//  Id pregunta: 3917 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  El m&iacute;nimo espacio de almacenamiento posible y el m&eacute;todo de copia de seguridad m&aacute;s r&aacute;pido se alcanzan:";
 choices[52]= new Array();
 choices[52][0] = "Usando una combinaci&oacute;n de copias de seguridad normales e incrementales.";
 choices[52][1] = "Usando una combinaci&oacute;n de copias de seguridad normales y diferenciales.";
 choices[52][2] = "Al crear por primera vez un conjunto de copia.";
 choices[52][3] = "Nunca pueden alcanzarse ambos a la vez.";
 answers[52] = choices[52][0];
 units[52] = "97";
 comments[52] = "Id Pregunta: 3917. NULL";


//  Id pregunta: 3921 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Para la conservaci&oacute;n de la informaci&oacute;n sobre soporte electr&oacute;nico:";
 choices[53]= new Array();
 choices[53][0] = "Ser&aacute; &uacute;til disponer de un SAI (UPS).";
 choices[53][1] = "Conviene almacenar la configuraci&oacute;n de la red en un fichero contenido en el sistema a proteger.";
 choices[53][2] = "Podemos utilizar cualquier ordenador descatalogado que tengamos a mano.";
 choices[53][3] = "El soporte ha de ser tolerante a fallos.";
 answers[53] = choices[53][0];
 units[53] = "97";
 comments[53] = "Id Pregunta: 3921. NULL";


//  Id pregunta: 3923 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Ventajas de los CD-ROM en el almacenamiento de informaci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Gran capacidad de almacenamiento.";
 choices[54][1] = "Larga duraci&oacute;n y bajo coste.";
 choices[54][2] = "Todas las anteriores.";
 choices[54][3] = "Ninguna de las anteriores.";
 answers[54] = choices[54][2];
 units[54] = "97";
 comments[54] = "Id Pregunta: 3923. NULL";


//  Id pregunta: 4177 AÃ±o de creación de pregunta: 2006-01-01
 questions[55]= "56)  Un sitio caliente de respaldo se caracteriza por";
 choices[55]= new Array();
 choices[55][0] = "Altos costes de implementaci&oacute;n y mantenimiento";
 choices[55][1] = "Un tiempo reducido de recuperaci&oacute;n";
 choices[55][2] = "Un coste reducido de preparaci&oacute;n ante desastres";
 choices[55][3] = "La A y la B";
 answers[55] = choices[55][3];
 units[55] = "97";
 comments[55] = "Id Pregunta: 4177. NULL";


//  Id pregunta: 4178 AÃ±o de creación de pregunta: 2006-01-01
 questions[56]= "57)  Un sitio frio de respaldo se caracteriza por";
 choices[56]= new Array();
 choices[56][0] = "Un coste reducido de preparaci&oacute;n ante desastres";
 choices[56][1] = "Altos costes de implementaci&oacute;n y mantenimiento";
 choices[56][2] = "Un tiempo reducido de recuperaci&oacute;n";
 choices[56][3] = "ninguna de las anteriores";
 answers[56] = choices[56][0];
 units[56] = "97";
 comments[56] = "Id Pregunta: 4178. NULL";


//  Id pregunta: 4180 AÃ±o de creación de pregunta: 2006-01-01
 questions[57]= "58)  Caso de utilizar un &uacute;nico m&eacute;todo, se economiza tiempo de restauraci&oacute;n con backups de tipo";
 choices[57]= new Array();
 choices[57][0] = "Completo";
 choices[57][1] = "Diferencial";
 choices[57][2] = "Incremental";
 choices[57][3] = "Es indiferente";
 answers[57] = choices[57][0];
 units[57] = "97";
 comments[57] = "Id Pregunta: 4180. NULL";


//  Id pregunta: 4414 AÃ±o de creación de pregunta: 2007-01-01
 questions[58]= "59)  El elemento dentro de un Sistema de Recuperaci&oacute;n de la Informaci&oacute;n que facilita eliminar informaci&oacute;n irrelevante desde el punto de vista del ordenamiento y la b&uacute;squeda y que se realiza durante la fase de ingreso del documento en el sistema, se denomina:";
 choices[58]= new Array();
 choices[58][0] = "Taxonom&iacute;a.";
 choices[58][1] = "Tesauro.";
 choices[58][2] = "Descriptor o Signatura";
 choices[58][3] = "Lista de palabras vac&iacute;as.";
 answers[58] = choices[58][3];
 units[58] = "96";
 comments[58] = "Id Pregunta: 4414. NULL";


//  Id pregunta: 4794 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al formato MARC (Machine-Readable Cataloging) es cierta?";
 choices[59]= new Array();
 choices[59][0] = "Es un est&aacute;ndar para la catalogaci&oacute;n de documentos de archivo";
 choices[59][1] = "EUROMARC es la versi&oacute;n europea de dicho formato";
 choices[59][2] = "Fue desarrollado por la Library of Congress de los Estados Unidos en los a&ntilde;os 60";
 choices[59][3] = "Ha dejado de utilizarse, habiendo sido sustituido por las ISBD (International Standard Bibliographic";
 answers[59] = choices[59][2];
 units[59] = "96";
 comments[59] = "Id Pregunta: 4794. NULL";


//  Id pregunta: 4843 AÃ±o de creación de pregunta: 2007-01-01
 questions[60]= "61)  De entre las t&eacute;cnicas de compresi&oacute;n de im&aacute;genes digitales por codificaci&oacute;n predictiva en las que se elimina la redundancia entre p&iacute;xeles consecutivos, aquella que forma una predicci&oacute;n del p&iacute;xel a codificar en funci&oacute;n de losp&iacute;xeles ya codificados y guarda el error de predicci&oacute;n cuantificado, recibe el nombre de:";
 choices[60]= new Array();
 choices[60][0] = "Dithering";
 choices[60][1] = "RLE (Run Length Encoding)";
 choices[60][2] = "Bit Plane";
 choices[60][3] = "DPCM (Differential Pulse Code Modulation)";
 answers[60] = choices[60][3];
 units[60] = "93";
 comments[60] = "Id Pregunta: 4843. NULL";


//  Id pregunta: 5212 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  Marcar la opci&oacute;n incorrecta. El tesauro o diccionario de descriptores es un conjunto predefinido de palabras claves que muestran las siguientes relaciones:";
 choices[61]= new Array();
 choices[61][0] = "Relaciones de equivalencia o preferencia";
 choices[61][1] = "Relaciones jer&aacute;rquicas";
 choices[61][2] = "Relaciones asociativas o de afinidad";
 choices[61][3] = "Relaciones instrumentales";
 answers[61] = choices[61][3];
 units[61] = "95,96";
 comments[61] = "Id Pregunta: 5212. ";


//  Id pregunta: 5524 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  Indicar la respuesta falsa";
 choices[62]= new Array();
 choices[62][0] = "BMP es un formato de im&aacute;genes sin p&eacute;rdidas que no soporta animaciones ni fondos transparentes";
 choices[62][1] = "GIF es un formato de im&aacute;genes que utiliza el algoritmo de compresi&oacute;n LZW y es v&aacute;lido para animaciones y fondos transparente";
 choices[62][2] = "El formato JPEG sin p&eacute;rdidas permite multip&aacute;gina y es muy adecuado para conservar originales a alta resoluci&oacute;n";
 choices[62][3] = "PNG es un formato sin p&eacute;rdida recomendado por el W3C para la publicaci&oacute;n en web";
 answers[62] = choices[62][2];
 units[62] = "93";
 comments[62] = "Id Pregunta: 5524. NULL";


//  Id pregunta: 5526 AÃ±o de creación de pregunta: 2003-01-01
 questions[63]= "64)  Indicar la respuesta verdadera";
 choices[63]= new Array();
 choices[63][0] = "El formato PDF417 permite almacenar hasta 2710 caracteres y soporta detecci&oacute;n y correcci&oacute;n de errores";
 choices[63][1] = "PCR (Printed Character Recognition) son los sistemas que pueden reconocer informaci&oacute;n gr&aacute;fica codificada en braille";
 choices[63][2] = "Las siglas ICR responden a Intelligent Computer Redefinition";
 choices[63][3] = "Ninguna es verdadera";
 answers[63] = choices[63][0];
 units[63] = "94";
 comments[63] = "Id Pregunta: 5526. ";


//  Id pregunta: 5528 AÃ±o de creación de pregunta: 2003-01-01
 questions[64]= "65)  Indicar la respuesta falsa";
 choices[64]= new Array();
 choices[64][0] = "Los niveles del lenguaje son: f&oacute;nico, l&eacute;xico, sint&aacute;ctico y sem&aacute;ntico";
 choices[64][1] = "La se&ntilde;al de voz se puede analizar en dos dominios, el espectral y el temporal";
 choices[64][2] = "La frecuencia fundamental de la voz representa la frecuencia de vibraci&oacute;n de las cuerdas vocales";
 choices[64][3] = "La frecuencia fundamental de la voz masculina es de 120 a 500 Hz y la femenina de 50 a 250 Hz";
 answers[64] = choices[64][3];
 units[64] = "94";
 comments[64] = "Id Pregunta: 5528. ";


//  Id pregunta: 5530 AÃ±o de creación de pregunta: 2003-01-01
 questions[65]= "66)  Indicar la respuesta verdadera";
 choices[65]= new Array();
 choices[65][0] = "En la gesti&oacute;n de contenidos lo m&aacute;s importante es el almacenamiento de los documentos";
 choices[65][1] = "La gesti&oacute;n de contenidos suele estar orientada a la creaci&oacute;n y edici&oacute;n de p&aacute;ginas web";
 choices[65][2] = "Todos los gestores de documentos son tambi&eacute;n gestores de contenidos";
 choices[65][3] = "Los gestores de documentos no est&aacute;n preparados para el manejo de muchos ficheros de gran tama&ntilde;o";
 answers[65] = choices[65][0];
 units[65] = "95";
 comments[65] = "Id Pregunta: 5530. NULL";


//  Id pregunta: 5531 AÃ±o de creación de pregunta: 2003-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de la gesti&oacute;n documental?";
 choices[66]= new Array();
 choices[66][0] = "Limitaci&oacute;n a un &uacute;nico tipo o formato de documento para cada gestor documental";
 choices[66][1] = "Establecer m&eacute;todos seguros de distribuci&oacute;n de documentos dentro y fuera de la organizaci&oacute;n";
 choices[66][2] = "Compartir documentaci&oacute;n con los distintos  integrantes de un grupo";
 choices[66][3] = "Gestionar gran volumen de registros y recuperarlos en poco tiempo";
 answers[66] = choices[66][0];
 units[66] = "95";
 comments[66] = "Id Pregunta: 5531. NULL";


//  Id pregunta: 5532 AÃ±o de creación de pregunta: 2003-01-01
 questions[67]= "68)  Indicar el gestor de contenidos que no es software libre";
 choices[67]= new Array();
 choices[67][0] = "Open CMS";
 choices[67][1] = "Vignette";
 choices[67][2] = "Zope";
 choices[67][3] = "Alfresco";
 answers[67] = choices[67][1];
 units[67] = "95";
 comments[67] = "Id Pregunta: 5532. NULL";


//  Id pregunta: 5537 AÃ±o de creación de pregunta: 2003-01-01
 questions[68]= "69)  En los sistemas de recuperaci&oacute;n de informaci&oacute;n full text &iquest;qu&eacute; operaciones son v&aacute;lidas para reducir el conjunto de palabras clave?";
 choices[68]= new Array();
 choices[68][0] = "Eliminiaci&oacute;n de palabras vac&iacute;as (stop words)";
 choices[68][1] = "Identificaci&oacute;n de la ra&iacute;z gramatical (stemming)";
 choices[68][2] = "Compresi&oacute;n de los conjuntos de palabras obtenidos";
 choices[68][3] = "Todas las anteriores son operaciones v&aacute;lidas";
 answers[68] = choices[68][3];
 units[68] = "96";
 comments[68] = "Id Pregunta: 5537. NULL";


//  Id pregunta: 5540 AÃ±o de creación de pregunta: 2003-01-01
 questions[69]= "70)  Indicar la respuesta falsa sobre modelos de recuperaci&oacute;n de informaci&oacute;n";
 choices[69]= new Array();
 choices[69][0] = "En general, el modelo vectorial se comporta peor que el probabil&iacute;stico cuando se usa contra colecciones gen&eacute;ricas de documentos";
 choices[69][1] = "Las redes neuronales son muy &uacute;tiles en un sistema de recuperaci&oacute;n de informaci&oacute;n por su potencia reconociendo patrones";
 choices[69][2] = "Las redes de inferencia y las redes de confianza son modelos basados en redes bayesianas";
 choices[69][3] = "Los modelos estructurados permiten combinar la especificaci&oacute;n de consultas con la informaci&oacute;n de la estructura del documento";
 answers[69] = choices[69][0];
 units[69] = "96";
 comments[69] = "Id Pregunta: 5540. NULL";


//  Id pregunta: 5541 AÃ±o de creación de pregunta: 2003-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes es un tipo de consulta utilizada para recuperar informaci&oacute;n en la web?";
 choices[70]= new Array();
 choices[70][0] = "Consultas de informaci&oacute;n (informational queries)";
 choices[70][1] = "Consultas transaccionales (transactional queries)";
 choices[70][2] = "Consultas de navegaci&oacute;n (navigational queries)";
 choices[70][3] = "Todas las anteriores son consultas v&aacute;lidas";
 answers[70] = choices[70][3];
 units[70] = "96";
 comments[70] = "Id Pregunta: 5541. NULL";


//  Id pregunta: 5685 AÃ±o de creación de pregunta: 2003-01-01
 questions[71]= "72)  &iquest;En qu&eacute; consiste el eRecord Management?";
 choices[71]= new Array();
 choices[71][0] = "Gesti&oacute;n de documentos de tipo registro";
 choices[71][1] = "Destrucci&oacute;n controlada de informaci&oacute;n electr&oacute;nica";
 choices[71][2] = "Gesti&oacute;n de documentos importantes para una organizaci&oacute;n";
 choices[71][3] = "Almacenamiento con codificaci&oacute;n sim&eacute;trica de registros";
 answers[71] = choices[71][2];
 units[71] = "95";
 comments[71] = "Id Pregunta: 5685. NULL";


//  Id pregunta: 5873 AÃ±o de creación de pregunta: 2009-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes apartados NO es una t&eacute;cnica utilizada en reconocimiento de voz?";
 choices[72]= new Array();
 choices[72][0] = "Modelos de Markov";
 choices[72][1] = "Redes Neuronales";
 choices[72][2] = "DTW (Dynamic Time Warping)";
 choices[72][3] = "OSR (Online Speech Recognition)";
 answers[72] = choices[72][3];
 units[72] = "94";
 comments[72] = "Id Pregunta: 5873. MAP 2008 A1";


//  Id pregunta: 7291 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  Es un proveedor de SW de conversi&oacute;n texto-voz (TTS):";
 choices[73]= new Array();
 choices[73][0] = "Nuance";
 choices[73][1] = "Loquendo";
 choices[73][2] = "a y b son correctas";
 choices[73][3] = "a y b son incorrectas";
 answers[73] = choices[73][1];
 units[73] = "94";
 comments[73] = "Id Pregunta: 7291. NULL";


//  Id pregunta: 7293 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  Indique cu&aacute;l de las siguientes es una t&eacute;cnica utilizada en conversi&oacute;n texto-voz (TTS)";
 choices[74]= new Array();
 choices[74][0] = "S&iacute;ntesis por octetos";
 choices[74][1] = "S&iacute;ntesis por corpus";
 choices[74][2] = "Concatenaci&oacute;n de octetos";
 choices[74][3] = "Concatenaci&oacute;n de corpus";
 answers[74] = choices[74][1];
 units[74] = "94";
 comments[74] = "Id Pregunta: 7293. NULL";


//  Id pregunta: 7294 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  Ordene de menor a mayor dificultad las siguientes tareas de reconocimiento autom&aacute;tico del habla (ASR):";
 choices[75]= new Array();
 choices[75][0] = "Palabras aisladas, word-spotting, palabras conectadas, habla espont&aacute;nea, habla continua";
 choices[75][1] = "Palabras aisladas, palabras conectadas, word-spotting, habla espont&aacute;nea, habla continua";
 choices[75][2] = "Palabras aisladas, word-spotting, palabras conectadas, habla continua, habla espont&aacute;nea";
 choices[75][3] = "Palabras aisladas, palabras conectadas, word-spotting, habla continua, habla espont&aacute;nea";
 answers[75] = choices[75][2];
 units[75] = "94";
 comments[75] = "Id Pregunta: 7294. NULL";


//  Id pregunta: 7302 AÃ±o de creación de pregunta: 2010-01-01
 questions[76]= "77)  Indique cu&aacute;l de las siguientes NO es una t&eacute;cnica de modelado ac&uacute;stico empleada para reconocimiento habla: ";
 choices[76]= new Array();
 choices[76][0] = "Redes de Markov";
 choices[76][1] = "Modelos ocultos de Markov";
 choices[76][2] = "Redes neuronales";
 choices[76][3] = "Todas se emplean en reconocimiento autom&aacute;tico del habla";
 answers[76] = choices[76][0];
 units[76] = "94";
 comments[76] = "Id Pregunta: 7302. NULL";


//  Id pregunta: 7304 AÃ±o de creación de pregunta: 2010-01-01
 questions[77]= "78)  El est&aacute;ndar AURORA de reconocimiento del habla distribuido es un est&aacute;ndar de:";
 choices[77]= new Array();
 choices[77][0] = "ETSI";
 choices[77][1] = "IEEE";
 choices[77][2] = "NIST";
 choices[77][3] = "ANSI";
 answers[77] = choices[77][0];
 units[77] = "94";
 comments[77] = "Id Pregunta: 7304. NULL";


//  Id pregunta: 7305 AÃ±o de creación de pregunta: 2010-01-01
 questions[78]= "79)  El est&aacute;ndar AURORA de la ETSI para reconocimiento del habla distribuido utiliza un vector de caracter&iacute;sticas de:";
 choices[78]= new Array();
 choices[78][0] = "12 componentes";
 choices[78][1] = "26 componentes";
 choices[78][2] = "38 componentes";
 choices[78][3] = "39 componentes";
 answers[78] = choices[78][3];
 units[78] = "94";
 comments[78] = "Id Pregunta: 7305. NULL";


//  Id pregunta: 7309 AÃ±o de creación de pregunta: 2010-01-01
 questions[79]= "80)  Indique cu&aacute;l de los siguientes es un lenguaje de marcado empleado en conversi&oacute;n texto-voz (TTS):";
 choices[79]= new Array();
 choices[79][0] = "TTSXML";
 choices[79][1] = "SVML";
 choices[79][2] = "SSML";
 choices[79][3] = "Todos son lenguajes de marcado utilizados en TTS";
 answers[79] = choices[79][2];
 units[79] = "94";
 comments[79] = "Id Pregunta: 7309. NULL";


//  Id pregunta: 7310 AÃ±o de creación de pregunta: 2010-01-01
 questions[80]= "81)  En relaci&oacute;n a la utilizaci&oacute;n de gram&aacute;ticas y modelos de lenguaje para el reconocimiento de lenguaje natural, indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[80]= new Array();
 choices[80][0] = "Las gram&aacute;ticas permiten reconocer cualquier tipo de frase pronunciada por el locutor";
 choices[80][1] = "Las gram&aacute;ticas permiten obtener tasas de acierto m&aacute;s elevadas que los modelos de lenguaje";
 choices[80][2] = "Los modelos de lenguaje precisan de grandes corpus de entrenamiento";
 choices[80][3] = "Los modelos de lenguaje permiten reconocer cualquier tipo de frase pronunciada por el locutor";
 answers[80] = choices[80][0];
 units[80] = "94";
 comments[80] = "Id Pregunta: 7310. NULL";


//  Id pregunta: 7350 AÃ±o de creación de pregunta: 2010-01-01
 questions[81]= "82)  Alfresco es un software de c&oacute;digo abierto de:";
 choices[81]= new Array();
 choices[81][0] = "Gesti&oacute;n de contenido empresarial";
 choices[81][1] = "Dise&ntilde;o gr&aacute;fico";
 choices[81][2] = "Base de Datos";
 choices[81][3] = "Cuadro de Mando";
 answers[81] = choices[81][0];
 units[81] = "95";
 comments[81] = "Id Pregunta: 7350. NULL";


//  Id pregunta: 7351 AÃ±o de creación de pregunta: 2010-01-01
 questions[82]= "83)  Una herramienta WYSIWYG se caracteriza por:";
 choices[82]= new Array();
 choices[82][0] = "Estar enfocado a crear c&oacute;digo XHTML v&aacute;lido";
 choices[82][1] = "Producir una total separaci&oacute;n entre contenido y presentaci&oacute;n";
 choices[82][2] = "Permitir escribir un documento viendo directamente el resultado final";
 choices[82][3] = "Ninguna de las anteriores";
 answers[82] = choices[82][2];
 units[82] = "95";
 comments[82] = "Id Pregunta: 7351. Es el acr&oacute;nimo de What You See Is What You Get";


//  Id pregunta: 7775 AÃ±o de creación de pregunta: 2010-01-01
 questions[83]= "84)   &iquest;C&oacute;mo se llama la norma europea que recoge las especificaciones para la gesti&oacute;n de documentos electr&oacute;nicos de archivo?";
 choices[83]= new Array();
 choices[83][0] = " MoReq.";
 choices[83][1] = " IDABC.";
 choices[83][2] = " ISAD(G).";
 choices[83][3] = " EDMS.";
 answers[83] = choices[83][0];
 units[83] = "95";
 comments[83] = "Id Pregunta: 7775. Map 2005";


//  Id pregunta: 8408 AÃ±o de creación de pregunta: 2011-01-01
 questions[84]= "85)  En los dispositivos tipo esc&aacute;ner, la resoluci&oacute;n interpolada es: ";
 choices[84]= new Array();
 choices[84][0] = "Una resoluci&oacute;n calculada que genera nuevos puntos a partir de otros reales m&aacute;s pr&oacute;ximos. ";
 choices[84][1] = "La cantidad de puntos individuales de una imagen captada mediante el sensor";
 choices[84][2] = "La empleada por los programas OCR para identificar el texto. ";
 choices[84][3] = "La que determina la profundidad del color";
 answers[84] = choices[84][0];
 units[84] = "93, 94";
 comments[84] = "Id Pregunta: 8408. Examen TIC A2 2010";


//  Id pregunta: 8509 AÃ±o de creación de pregunta: 2011-01-01
 questions[85]= "86)  Actualmente, el World Wide Web Consortium (W3C) trabaja en los siguientes est&aacute;ndares y herramientas de integraci&oacute;n de datos de entrada. Seleccionar la respuesta ERR&Oacute;NEA: ";
 choices[85]= new Array();
 choices[85][0] = "SRGS tiene corno funci&oacute;n principal permitir que una aplicaci&oacute;n de voz indique a un reconocedor qu&eacute; es lo que tiene que escuchar, es decir, palabras, modelos en los que estas palabras surgen, lenguaje hablado de cada palabra, etc. ";
 choices[85][1] = " SSML, lenguaje de marcado de S&iacute;ntesis del Habla, basado en XML, forma parte del proceso de salida de informaci&oacute;n y funciona como componente de conversi&oacute;n ayudando a generar habla sint&eacute;tica. ";
 choices[85][2] = "SlSR permite describir anotaciones sobre reglas gramaticales para extraer resultados sem&aacute;nticos a trav&eacute;s del reconocimiento del habla. El resultado obtenido puede expresarse en formato XML, usando el lenguaje EMMA. ";
 choices[85][3] = "EMMA es un lenguaje de etiquetado que permite crear di&aacute;logos con los que se puede interactuar escuchando comandos hablados, controlables a trav&eacute;s de entradas de voz";
 answers[85] = choices[85][3];
 units[85] = "94";
 comments[85] = "Id Pregunta: 8509. Examen TIC A2 2010";


//  Id pregunta: 8605 AÃ±o de creación de pregunta: 2011-01-01
 questions[86]= "87)  &iquest;Qu&eacute; es una copia de seguridad incremental?";
 choices[86]= new Array();
 choices[86][0] = "Aquella que copia tan solo los archivos modificados desde la &uacute;ltima copia de seguridad normal, y no marca &eacute;stos como copiados.";
 choices[86][1] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de seguridad normal, y no marca lodos estos archivos como copiados";
 choices[86][2] = "Aquella que copia tan solo los archivos creados desde la &uacute;ltima copia de seguridad norma: y marca &eacute;stos como copiados.";
 choices[86][3] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de segundad norma!, y marca todos estos archivos como copiados.";
 answers[86] = choices[86][3];
 units[86] = "96";
 comments[86] = "Id Pregunta: 8605. Examen TIC A2 2010 interna";


//  Id pregunta: 9178 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  Si hablamos de formatos para el almacenamiento de ficheros de im&aacute;genes, &iquest;cu&aacute;l de ellos puede considerarse una extensi&oacute;n de los dem&aacute;s, y permite el almacenamiento de cualquier tipo de fichero, no &uacute;nicamente gr&aacute;fico?:";
 choices[87]= new Array();
 choices[87][0] = "PAM";
 choices[87][1] = "PBM";
 choices[87][2] = "PGM";
 choices[87][3] = "PPM";
 answers[87] = choices[87][0];
 units[87] = "93";
 comments[87] = "Id Pregunta: 9178. NULL";


//  Id pregunta: 9180 AÃ±o de creación de pregunta: 2013-01-01
 questions[88]= "89)  No es un espacio de color:";
 choices[88]= new Array();
 choices[88][0] = "RGB";
 choices[88][1] = "CMYK";
 choices[88][2] = "HSM";
 choices[88][3] = "HSV";
 answers[88] = choices[88][2];
 units[88] = "93";
 comments[88] = "Id Pregunta: 9180. NULL";


//  Id pregunta: 9897 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En relaci&oacute;n al reconocimiento &oacute;ptico de caracteres, el proceso de Kerning consiste en eliminar el espacio excesivo entre";
 choices[89]= new Array();
 choices[89][0] = "bloques en los que se encuentra dividida una p&aacute;gina.";
 choices[89][1] = "l&iacute;neas de texto.";
 choices[89][2] = "palabras de una l&iacute;nea de texto.";
 choices[89][3] = "letras de una palabra.";
 answers[89] = choices[89][3];
 units[89] = "94";
 comments[89] = "Id Pregunta: 9897. TIC A1, Examen 2013";


//  Id pregunta: 9977 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En un sistema de gesti&oacute;n documental, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA? ";
 choices[90]= new Array();
 choices[90][0] = "Un sistema de gesti&oacute;n documental se define como un conjunto de elementos y relaciones entre ellos, que tiene el prop&oacute;sito de normalizar, controlar y coordinar todas las actividades y procesos que afectan en cualquiermedida a los documentos generados en el transcurso de la actividad de una organizaci&oacute;n";
 choices[90][1] = "Un sistema de gesti&oacute;n documental tiene que conservar los atributos b&aacute;sicos de los documentos ";
 choices[90][2] = "Un sistema de gesti&oacute;n documental tiene que mantener la organizaci&oacute;n de los documentos integrados en un contexto ";
 choices[90][3] = "Las operaciones m&aacute;s habituales que se realizan sobre estos documentos, abarcan parte de su ciclo de vida, desde su almacenamiento hasta la puesta a disposici&oacute;n de los usuarios";
 answers[90] = choices[90][3];
 units[90] = "95";
 comments[90] = "Id Pregunta: 9977. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 9995 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En relaci&oacute;n a im&aacute;genes est&aacute;ticas en portales web,";
 choices[91]= new Array();
 choices[91][0] = "El formato PNG, si bien est&aacute; libre de patentes, tiene mayor p&eacute;rdida de informaci&oacute;n que el formato JPEG.";
 choices[91][1] = "El formato GIF utiliza el algoritmo LZW de compresi&oacute;n patentado por CompuServe.";
 choices[91][2] = "JPEG tiene m&aacute;s p&eacute;rdida de informaci&oacute;n que GIF y PNG.";
 choices[91][3] = "El soporte de animaciones no es posible en PNG, utiliz&aacute;ndose NMG en su lugar.";
 answers[91] = choices[91][2];
 units[91] = "93";
 comments[91] = "Id Pregunta: 9995. NULL";


//  Id pregunta: 10193 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  En relaci&oacute;n a las t&eacute;cnicas para el reconocimiento &oacute;ptico de caracteres, indique la frase incorrecta:";
 choices[92]= new Array();
 choices[92][0] = "El histograma horizontal permite dividir un p&aacute;rrafo en l&iacute;neas";
 choices[92][1] = "El proceso de kerning aplicado por un procesador de textos dificulta el segmentado de palabras";
 choices[92][2] = "Los m&eacute;todos de Zadeh usan mecanismos basados en l&oacute;gica borrosa";
 choices[92][3] = "Los m&eacute;todos de comparaci&oacute;n de plantillas usan matrices bidimensionales";
 answers[92] = choices[92][1];
 units[92] = "94";
 comments[92] = "Id Pregunta: 10193. ";


//  Id pregunta: 10448 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  El m&eacute;todo de compresi&oacute;n de archivos denominado &quot;algoritmo de deflaci&oacute;n&quot;, que fue originalmente definido por Phil Katz, se utiliza en el formato de imagen ";
 choices[93]= new Array();
 choices[93][0] = "TIFF.";
 choices[93][1] = "GIF.";
 choices[93][2] = "PNG.";
 choices[93][3] = "JPEG.";
 answers[93] = choices[93][2];
 units[93] = "93";
 comments[93] = "Id Pregunta: 10448. Examen TIC A1 2013";


//  Id pregunta: 10455 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como vital:";
 choices[94]= new Array();
 choices[94][0] = "Puede realizarse manualmente por un periodo breve de tiempo.";
 choices[94][1] = "Tiene mayor tolerancia a las interrupciones que una clasificada como cr&iacute;tica.";
 choices[94][2] = "Ninguna de las anteriores.";
 choices[94][3] = "A y B.";
 answers[94] = choices[94][3];
 units[94] = "97";
 comments[94] = "Id Pregunta: 10455. NULL";


//  Id pregunta: 10950 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;C&uacute;al de las siguientes opciones es un sistema de gesti&oacute;n de contenidos?";
 choices[95]= new Array();
 choices[95][0] = "MongoDB";
 choices[95][1] = "Redis";
 choices[95][2] = "Cassandra";
 choices[95][3] = "Drupal";
 answers[95] = choices[95][3];
 units[95] = "95";
 comments[95] = "Id Pregunta: 10950. TIC A1 AGE 2014";


//  Id pregunta: 11166 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;les de las siguientes t&eacute;cnicas no suele utilizarse en los sistemas de reconocimiento de habla?";
 choices[96]= new Array();
 choices[96][0] = "Dynamic Time Warping";
 choices[96][1] = "Hidden Markov Model";
 choices[96][2] = "Neural Networks";
 choices[96][3] = "Todas las anteriores se suelen utilizar en los sistemas de reconocimiento de habla";
 answers[96] = choices[96][3];
 units[96] = "93";
 comments[96] = "Id Pregunta: 11166. ";


//  Id pregunta: 11169 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;les es el orden correcto de los bloques b&aacute;sicos de procesamiento de un sistema biom&eacute;trico de reconocimiento de voz?";
 choices[97]= new Array();
 choices[97][0] = "Preprocesamiento, Obtenci&oacute;n de datos del sensor, Extracci&oacute;n de caracter&iacute;sticas, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[97][1] = "Obtenci&oacute;n de datos del sensor, Preprocesamiento, Extracci&oacute;n de caracter&iacute;sticas, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[97][2] = "Extracci&oacute;n de caracter&iacute;sticas, Obtenci&oacute;n de datos del sensor, Preprocesamiento, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[97][3] = "Obtenci&oacute;n de datos del sensor, Extracci&oacute;n de caracter&iacute;sticas, Preprocesamiento, Comparaci&oacute;n y Decisi&oacute;n.";
 answers[97] = choices[97][2];
 units[97] = "94";
 comments[97] = "Id Pregunta: 11169. ";


//  Id pregunta: 11292 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de un gestor documental?";
 choices[98]= new Array();
 choices[98][0] = "Creaci&oacute;n";
 choices[98][1] = "Redifusi&oacute;n";
 choices[98][2] = "Expurgo";
 choices[98][3] = "Todas lo son";
 answers[98] = choices[98][1];
 units[98] = "95";
 comments[98] = "Id Pregunta: 11292. ";


//  Id pregunta: 11296 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En relaci&oacute;n a la gesti&oacute;n documental, de contenidos y portales &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[99]= new Array();
 choices[99][0] = "La gesti&oacute;n de portales suele constituir la capa de presentaci&oacute;n, y la documental la de persistencia";
 choices[99][1] = "La gesti&oacute;n de contenidos suele constituir la capa de persistencia, mientras que la gesti&oacute;n documental es la capa de negocio";
 choices[99][2] = "La gesti&oacute;n de portales suele constituir la capa de negocio y la gesti&oacute;n documental la de presentaci&oacute;n";
 choices[99][3] = "La gesti&oacute;n de portales suele constituir la capa de persistencia, mientras que la de contenidos es la de presentaci&oacute;n";
 answers[99] = choices[99][0];
 units[99] = "95";
 comments[99] = "Id Pregunta: 11296. ";


