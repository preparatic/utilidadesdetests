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

//  Id pregunta: 1888 AÃ±o de creación de pregunta: 2006-01-01
 questions[0]= "1)  Se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[0]= new Array();
 choices[0][0] = "Una copia de seguridad diaria incluye todos los archivos seleccionados que se hayan modificado, desactivando el atributo de modificado";
 choices[0][1] = "Una copia de seguridad intermedia incluye todos los archivos pero no los marca individualmente como copiados (es decir, no desactiva el atributo de modificado)";
 choices[0][2] = "Una copia de seguridad diferencial s&oacute;lo copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental";
 choices[0][3] = "Ninguna de las anteriores";
 answers[0] = choices[0][1];
 units[0] = "97";
 comments[0] = "Id Pregunta: 1888. NULL";


//  Id pregunta: 2034 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Cu&aacute;l de los siguientes es un formato de sonido:";
 choices[1]= new Array();
 choices[1][0] = "gif";
 choices[1][1] = "blob";
 choices[1][2] = "wcm";
 choices[1][3] = "rar";
 answers[1] = choices[1][2];
 units[1] = "94,95";
 comments[1] = "Id Pregunta: 2034. Similar a examen TIC SS A 2003";


//  Id pregunta: 2084 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;A qu&eacute; se denomina dentro de los lenguajes documentales &quot;silencios documentales&quot;?:";
 choices[2]= new Array();
 choices[2][0] = "A la informaci&oacute;n excedente";
 choices[2][1] = "A la informaci&oacute;n no excedente";
 choices[2][2] = "A los datos solicitados pero no obtenidos por ruptura del proceso";
 choices[2][3] = "A los datos solicitados pero no obtenidos por distorsi&oacute;n del proceso";
 answers[2] = choices[2][3];
 units[2] = "95,96";
 comments[2] = "Id Pregunta: 2084. ";


//  Id pregunta: 2090 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; es un 'antidiccionario'?:";
 choices[3]= new Array();
 choices[3][0] = "Un conjunto de palabras de caracterizaci&oacute;n o palabras clave";
 choices[3][1] = "Un conjunto de palabras y signos algebraico-matem&aacute;tico que puede encontrarse en los textos";
 choices[3][2] = "Un conjunto de palabras vac&iacute;as de significado (art&iacute;culos, preposiciones...)";
 choices[3][3] = "Un diccionario en orden alfab&eacute;tico inverso";
 answers[3] = choices[3][2];
 units[3] = "96";
 comments[3] = "Id Pregunta: 2090. NULL";


//  Id pregunta: 2094 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  El Sistema de Gesti&oacute;n del Diccionario de Recursos de Informaci&oacute;n (SGDRI):";
 choices[4]= new Array();
 choices[4][0] = "Es un componente del Sistema de Gesti&oacute;n de Base de Datos (SGBD) del sistema de informaci&oacute;n";
 choices[4][1] = "Se puede apoyar en el SGBD, en el Sistema de Gesti&oacute;n de Ficheros y en el sistema operativo";
 choices[4][2] = "Permite el almacenamiento de la sintaxis y la sem&aacute;ntica de los diferentes lenguajes que soporta los componentes DRI";
 choices[4][3] = "Describe los datos, componentes f&iacute;sicos y elementos del entorno que integran cada subsistema";
 answers[4] = choices[4][1];
 units[4] = "96";
 comments[4] = "Id Pregunta: 2094. NULL";


//  Id pregunta: 2103 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La principal diferencia entre las bases de datos documentales respecto a las normales como pueden ser bases de datos relacionales es:";
 choices[5]= new Array();
 choices[5][0] = "Pueden crearse &iacute;ndices por cualquier campo que se desee";
 choices[5][1] = "Los indices se almacenan dentro de la base de datos";
 choices[5][2] = "Pueden crease indices de m&aacute;s de una palabra";
 choices[5][3] = "Indexaci&oacute;n de partes del contenido de un campo";
 answers[5] = choices[5][3];
 units[5] = "96";
 comments[5] = "Id Pregunta: 2103. ";


//  Id pregunta: 2104 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Se desea establecer un sistema de salvaguarda de informaci&oacute;n (back-up) que asegure una p&eacute;rdida potencial m&aacute;xima del trabajo realizado en 24 horas. Con el fin de facilitar el proceso se han propuesto diversas medidas. Indicar aqu&eacute;lla que sea v&aacute;lida:";
 choices[6]= new Array();
 choices[6][0] = "Copiar inmediatamente en cinta todas las modificaciones efectuadas por cualquiera de los usuarios seg&uacute;n &eacute;stas se vayan produciendo";
 choices[6][1] = "Realizar salvaguardas al final de cada d&iacute;a de toda la informaci&oacute;n contenida en los discos mediante alg&uacute;n procedimiento autom&aacute;tico lanzado por el administrador del sistema";
 choices[6][2] = "Obligar a cada usuario a realizar su copia de seguridad una vez terminado el trabajo efectuado  durante el d&iacute;a";
 choices[6][3] = "No se puede efectuar un sistema de salvaguarda basado en cinta para un sistema distribu&iacute;do en el que las estaciones de trabajo no posean cinta magn&eacute;tica";
 answers[6] = choices[6][1];
 units[6] = "96,97";
 comments[6] = "Id Pregunta: 2104. ";


//  Id pregunta: 2407 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Al hablar de bases de datos documentales, el proceso de extraer las palabras claves m&aacute;s representativas del contenido de un documento, se denomina:";
 choices[7]= new Array();
 choices[7][0] = "Indexaci&oacute;n";
 choices[7][1] = "Indizaci&oacute;n";
 choices[7][2] = "Indistintamente indexaci&oacute;n o indizaci&oacute;n";
 choices[7][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[7] = choices[7][1];
 units[7] = "94";
 comments[7] = "Id Pregunta: 2407. ";


//  Id pregunta: 2410 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Al nivel en el que se determinan los identificadores de la informaci&oacute;n, en an&aacute;lisis documental , se denomina:";
 choices[8]= new Array();
 choices[8][0] = "Nivel de asiento";
 choices[8][1] = "Nivel de descriptor";
 choices[8][2] = "Nivel de resumen";
 choices[8][3] = "Nivel documental";
 answers[8] = choices[8][0];
 units[8] = "94";
 comments[8] = "Id Pregunta: 2410. ";


//  Id pregunta: 2411 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Como valor promedio, se considera habitualmente que un ser humano no puede distinguir m&aacute;s de:";
 choices[9]= new Array();
 choices[9][0] = "2.000.000 colores y 700 grises";
 choices[9][1] = "200 grises y 7.000.000 de colores";
 choices[9][2] = "7.000 colores y 2.000.000 grises";
 choices[9][3] = "2.000.000 de grises y 700.000 colores";
 answers[9] = choices[9][1];
 units[9] = "93";
 comments[9] = "Id Pregunta: 2411. NULL";


//  Id pregunta: 2417 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El m&eacute;todo de recuperaci&oacute;n de la informaci&oacute;n basado en ficheros auxiliares de t&eacute;rminos (claves o &iacute;ndices  de palabras) o ficheros de apuntadores (referencias de los documentos base) es propio de:";
 choices[10]= new Array();
 choices[10][0] = "Modelo booleano";
 choices[10][1] = "Indexaci&oacute;n y recuperaci&oacute;n autom&aacute;tica vectorial";
 choices[10][2] = "&Iacute;ndices invertidos";
 choices[10][3] = "Retroalimentaci&oacute;n";
 answers[10] = choices[10][2];
 units[10] = "96";
 comments[10] = "Id Pregunta: 2417. NULL";


//  Id pregunta: 2419 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El nivel b&aacute;sico de comprensi&oacute;n que determina el n&uacute;mero preciso de sonidos con valor distinto es el nivel:";
 choices[11]= new Array();
 choices[11][0] = "Ac&uacute;stico";
 choices[11][1] = "Fon&eacute;tico";
 choices[11][2] = "Fonol&oacute;gico";
 choices[11][3] = "L&eacute;xico-sint&aacute;ctico";
 answers[11] = choices[11][2];
 units[11] = "94";
 comments[11] = "Id Pregunta: 2419. ";


//  Id pregunta: 2425 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El tipo de indizaci&oacute;n por descriptores consistente en seleccionar conceptos de listas normalizadas de descriptores, se denomina:";
 choices[12]= new Array();
 choices[12][0] = "M&eacute;todo estad&iacute;stico";
 choices[12][1] = "M&eacute;todo por asignaci&oacute;n de los conceptos clave del documento";
 choices[12][2] = "M&eacute;todo sint&aacute;ctico";
 choices[12][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[12] = choices[12][1];
 units[12] = "96";
 comments[12] = "Id Pregunta: 2425. NULL";


//  Id pregunta: 2426 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El tipo de indizaci&oacute;n por descriptores consistente en utilizar t&eacute;cnicas de an&aacute;lisis morfol&oacute;gico y sem&aacute;ntico para captar la estructura del texto, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "M&eacute;todo estad&iacute;stico";
 choices[13][1] = "M&eacute;todo por asignaci&oacute;n de los conceptos clave del documento";
 choices[13][2] = "M&eacute;todo sint&aacute;ctico";
 choices[13][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[13] = choices[13][2];
 units[13] = "96";
 comments[13] = "Id Pregunta: 2426. NULL";


//  Id pregunta: 2521 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes denominaciones no se relaciona con un formato de imagen digital?:";
 choices[14]= new Array();
 choices[14][0] = "MrSID";
 choices[14][1] = "PSD";
 choices[14][2] = "PAL";
 choices[14][3] = "TIFF";
 answers[14] = choices[14][2];
 units[14] = "93";
 comments[14] = "Id Pregunta: 2521. NULL";


//  Id pregunta: 2530 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En sistemas de recuperaci&oacute;n de la informaci&oacute;n, al cociente entre el n&uacute;mero de referencias  obtenidas y el n&uacute;mero total de referencias existentes, se denomina:";
 choices[15]= new Array();
 choices[15][0] = "&Iacute;ndice de retorno";
 choices[15][1] = "&Iacute;ndice de exactitud";
 choices[15][2] = "&Iacute;ndice de precisi&oacute;n";
 choices[15][3] = "&Iacute;ndice de localizaci&oacute;n";
 answers[15] = choices[15][0];
 units[15] = "96";
 comments[15] = "Id Pregunta: 2530. NULL";


//  Id pregunta: 2548 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Para evaluar diferentes sistemas de recuperaci&oacute;n de informaci&oacute;n, &iquest;qu&eacute; par&aacute;metros suelen analizarse?:";
 choices[16]= new Array();
 choices[16][0] = "&Iacute;ndice de retorno e &iacute;ndice de precisi&oacute;n";
 choices[16][1] = "&Iacute;ndice de estimaci&oacute;n cuantificable";
 choices[16][2] = "&Iacute;ndice de ajuste de material devuelto";
 choices[16][3] = "N&uacute;mero de referencias correctas";
 answers[16] = choices[16][0];
 units[16] = "96";
 comments[16] = "Id Pregunta: 2548. NULL";


//  Id pregunta: 2550 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Una m&aacute;scara en tratamiento digital de im&aacute;genes es:";
 choices[17]= new Array();
 choices[17][0] = "Una matriz num&eacute;rica que se usa para ir haciendo operaciones aritm&eacute;ticas sobre cada uno de los distintos p&iacute;xeles de la imagen, provocando un cambio en los valores de los p&iacute;xeles de la imagen tratada";
 choices[17][1] = "Una zona de la imagen donde no var&iacute;an sus propiedades de color, brillo ni saturaci&oacute;n";
 choices[17][2] = "Una herramienta para poder colorear por capas en los programas ofim&aacute;ticos de tratamiento de im&aacute;genes";
 choices[17][3] = "Nada de lo anterior";
 answers[17] = choices[17][0];
 units[17] = "93";
 comments[17] = "Id Pregunta: 2550. NULL";


//  Id pregunta: 2551 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Uno de los est&aacute;ndares de representaci&oacute;n de c&oacute;digos de barras en dos dimensiones es:";
 choices[18]= new Array();
 choices[18][0] = "PDF 417";
 choices[18][1] = "EPS 417";
 choices[18][2] = "PES 417";
 choices[18][3] = "2DC 417";
 answers[18] = choices[18][0];
 units[18] = "93";
 comments[18] = "Id Pregunta: 2551. NULL";


//  Id pregunta: 2596 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  La tecnolog&iacute;a denominada OCR (Optical Character Recognizer), se emplea para:";
 choices[19]= new Array();
 choices[19][0] = "Extraer de un documento electr&oacute;nico un conjunto de palabras o caracteres (descriptores) que sirvan para la representaci&oacute;n del mismo en bases de datos documentales.";
 choices[19][1] = "Analizar tramas de bit, en transmisiones a trav&eacute;s de dispositivos f&iacute;sicos de fibra &oacute;ptica (10/100/1000baseFX).";
 choices[19][2] = "Analizar la autenticidad e integridad de documentos firmados electr&oacute;nicamente.";
 choices[19][3] = " Interpretar digitalmente un documento en papel y generar un archivo electr&oacute;nico de texto con las palabras reconocidas.";
 answers[19] = choices[19][3];
 units[19] = "94";
 comments[19] = "Id Pregunta: 2596. Junta Andaluc&iacute;a";


//  Id pregunta: 2669 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  En im&aacute;genes multiespectrales el an&aacute;lisis de componentes principales sirve para:";
 choices[20]= new Array();
 choices[20][0] = "Eliminar ruidos.";
 choices[20][1] = "Eliminaci&oacute;n de informaci&oacute;n redundante.";
 choices[20][2] = "Enmascaramiento o reducci&oacute;n de ciertos efectos atmosf&eacute;ricos o topogr&aacute;ficos.";
 choices[20][3] = "Poder superponer im&aacute;genes de cara a su posterior tratamiento.";
 answers[20] = choices[20][1];
 units[20] = "93";
 comments[20] = "Id Pregunta: 2669. NULL";


//  Id pregunta: 2676 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  En un Sistema de Gesti&oacute;n Documental la recuperaci&oacute;n de la informaci&oacute;n se produce mediante:";
 choices[21]= new Array();
 choices[21][0] = "Palabras clave.";
 choices[21][1] = "Texto completo.";
 choices[21][2] = "&Iacute;ndices.";
 choices[21][3] = "Todas las anteriores.";
 answers[21] = choices[21][3];
 units[21] = "96";
 comments[21] = "Id Pregunta: 2676. NULL";


//  Id pregunta: 2679 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  Gesti&oacute;n de documentos y gesti&oacute;n de contenidos:";
 choices[22]= new Array();
 choices[22][0] = "Son la misma cosa.";
 choices[22][1] = "S&oacute;lo se diferencian en la tecnolog&iacute;a utilizada.";
 choices[22][2] = "En la gesti&oacute;n de documentos se suele presentar el documento en su formato original, mientras que en la gesti&oacute;n de contenidos se orienta hacia la creaci&oacute;n y edici&oacute;n din&aacute;mica de p&aacute;ginas.";
 choices[22][3] = "La gesti&oacute;n de contenidos es m&aacute;s reciente y suele estar enfocada hacia flujos de trabajo.";
 answers[22] = choices[22][2];
 units[22] = "95";
 comments[22] = "Id Pregunta: 2679. NULL";


//  Id pregunta: 2684 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  La copia de seguridad intermedia se utiliza:";
 choices[23]= new Array();
 choices[23][0] = "Para restaurar los archivos y carpetas a partir de la &uacute;ltima copia de seguridad normal y la mencinada copia.";
 choices[23][1] = "Cuando se desea hacer copias de seguridad de archivos entre copias de seguridad normales e incrementales, ya que no afecta a estas operaciones.";
 choices[23][2] = "Cuando se usa una combinaci&oacute;n de copias de seguridad normales e incrementales, ya que la restauraci&oacute;n de los datos debe realizarse con la &uacute;ltima copia de seguridad normal y todas las copias de seguridad intermedias.";
 choices[23][3] = "Cuando s&oacute;lo necesita la copia m&aacute;s reciente del archivo o la cinta que contiene la copia de seguridad para restaurar todos los archivos.";
 answers[23] = choices[23][1];
 units[23] = "96";
 comments[23] = "Id Pregunta: 2684. NULL";


//  Id pregunta: 2685 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  La entrada de documentos al sistema de reconocimiento &oacute;ptico de caracteres se produce sobre soporte:";
 choices[24]= new Array();
 choices[24][0] = "Papel";
 choices[24][1] = "Fax";
 choices[24][2] = "Correo electr&oacute;nico.";
 choices[24][3] = "Todos los anteriores.";
 answers[24] = choices[24][3];
 units[24] = "94";
 comments[24] = "Id Pregunta: 2685. ";


//  Id pregunta: 2687 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Teniendo en cuenta la agudeza visual humana y la unidad m&iacute;nima de resoluci&oacute;n, los procesos de tratamiento digital de imagen deber&iacute;an llevarse a cabo entre:";
 choices[25]= new Array();
 choices[25][0] = "25 &micro;m y 100 &micro;m.";
 choices[25][1] = "0,4 &micro;m y 0,7 &micro;m.";
 choices[25][2] = "0,3 &micro;m y 1 mm.";
 choices[25][3] = "Ninguna de las anteriores.";
 answers[25] = choices[25][0];
 units[25] = "93";
 comments[25] = "Id Pregunta: 2687. NULL";


//  Id pregunta: 2693 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Los servicios de informaci&oacute;n electr&oacute;nica que contienen referencias, algunas veces con extractos, de informaci&oacute;n no publicada, se denominan:";
 choices[26]= new Array();
 choices[26][0] = "Num&eacute;ricos.";
 choices[26][1] = "Directorios.";
 choices[26][2] = "Agendas.";
 choices[26][3] = "Bibliogr&aacute;ficos.";
 answers[26] = choices[26][1];
 units[26] = "94";
 comments[26] = "Id Pregunta: 2693. ";


//  Id pregunta: 2697 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  M&eacute;todo b&aacute;sico de reconocimiento de caracteres en OCR:";
 choices[27]= new Array();
 choices[27][0] = "Comparaci&oacute;n matricial.";
 choices[27][1] = "S&iacute;ntesis de caracter&iacute;sticas.";
 choices[27][2] = "Todas las anteriores.";
 choices[27][3] = "Ninguna de las anteriores.";
 answers[27] = choices[27][0];
 units[27] = "94";
 comments[27] = "Id Pregunta: 2697. ";


//  Id pregunta: 2700 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Principal inconveniente del teletexto:";
 choices[28]= new Array();
 choices[28][0] = "El juego de colores es reducido.";
 choices[28][1] = "Carece de interactividad real.";
 choices[28][2] = "La resoluci&oacute;n gr&aacute;fica no es buena.";
 choices[28][3] = "Necesita un decodificador caro y voluminoso.";
 answers[28] = choices[28][1];
 units[28] = "93";
 comments[28] = "Id Pregunta: 2700. NULL";


//  Id pregunta: 2701 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Rango din&aacute;mico de una imagen es:";
 choices[29]= new Array();
 choices[29][0] = "El tama&ntilde;o de la imagen a escanear en sus dos dimensiones (ancho y alto).";
 choices[29][1] = "El cambio de resoluci&oacute;n de la imagen al ampliar o reducir.";
 choices[29][2] = "El n&uacute;mero m&aacute;ximo de niveles de gris por pixel que ser&iacute;an susceptibles de ser definidos entre el blanco y el negro.";
 choices[29][3] = "Tama&ntilde;o m&aacute;ximo de la imagen producida por los traductores del formato EPS (Postscript) a mapa de bits.";
 answers[29] = choices[29][2];
 units[29] = "93";
 comments[29] = "Id Pregunta: 2701. NULL";


//  Id pregunta: 2703 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Se&ntilde;ale la opci&oacute;n verdadera:";
 choices[30]= new Array();
 choices[30][0] = "Un filtro paso bajo es un m&eacute;todo de realce radiom&eacute;trico.";
 choices[30][1] = "La ecualizaci&oacute;n del histograma es un m&eacute;todo de realce radiom&eacute;trico.";
 choices[30][2] = "El &quot;filtro de mediana&quot; elige el p&iacute;xel siguiente al central de los valores de la ventana.";
 choices[30][3] = "El filtro paso alto suaviza la imagen.";
 answers[30] = choices[30][1];
 units[30] = "93";
 comments[30] = "Id Pregunta: 2703. NULL";


//  Id pregunta: 2704 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Se&ntilde;ale la opci&oacute;n verdadera:";
 choices[31]= new Array();
 choices[31][0] = "Los avances m&aacute;s recientes en la s&iacute;ntesis del habla han ido por el camino de una parametrizaci&oacute;n de la se&ntilde;al original para suprimir la informaci&oacute;n redundante contenida en las ondas ac&uacute;sticas.";
 choices[31][1] = "En el nivel fon&eacute;tico distintivo se determinan los objetos sonoros elementales, tales como los fonemas, las s&iacute;labas o los ruidos simples.";
 choices[31][2] = "En el nivel fon&eacute;tico se analizan las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[31][3] = "El estudio en el dominio de la frecuencia ha conducido al an&aacute;lisis del habla por transformadas de Fourier y por bancos de filtros en paralelo.";
 answers[31] = choices[31][3];
 units[31] = "94";
 comments[31] = "Id Pregunta: 2704. ";


//  Id pregunta: 2707 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Suponiendo la existencia de un sistema de copias de seguridad, para restaurar la informaci&oacute;n perdida se puede: ";
 choices[32]= new Array();
 choices[32][0] = "S&oacute;lo se necesita la copia normal m&aacute;s reciente m&aacute;s la &uacute;ltima copia de seguridad diaria";
 choices[32][1] = "S&oacute;lo se necesita la &uacute;ltima copia de seguridad normal y todas las copias de seguridad diferencial";
 choices[32][2] = "S&oacute;lo se necesita la &uacute;ltima copia de seguridad normal y la &uacute;ltima copia de seguridad incremental";
 choices[32][3] = "Todas las respuestas anteriores son incorrectas";
 answers[32] = choices[32][3];
 units[32] = "96";
 comments[32] = "Id Pregunta: 2707. Pregunta no perteneciente al test  del ex&aacute;men de SS";


//  Id pregunta: 2709 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Un sistema de gesti&oacute;n de contenidos intenta mejorar una situaci&oacute;n previa en la que:";
 choices[33]= new Array();
 choices[33][0] = "Hay un buscador no eficiente. Los &iacute;ndices no est&aacute;n suficientemente actualizados y en algunos servidores ni siquiera se dispone de la posibilidad de b&uacute;squeda.";
 choices[33][1] = "Aunque escasean los expertos inform&aacute;ticos los procesos de edici&oacute;n, validaci&oacute;n y actualizaci&oacute;n son &aacute;giles.";
 choices[33][2] = "Varios servidores web integrados dentro del portal corporativo est&aacute;n en la misma m&aacute;quina pero con URL diferentes.";
 choices[33][3] = "Contenidos personalizados en funci&oacute;n de distintos perfiles o intereses de los usuarios.";
 answers[33] = choices[33][0];
 units[33] = "95";
 comments[33] = "Id Pregunta: 2709. NULL";


//  Id pregunta: 2710 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Una de estas no es una propiedad de un Sistema de Gesti&oacute;n Documental:";
 choices[34]= new Array();
 choices[34][0] = "Establecer m&eacute;todos seguros de distribuci&oacute;n de documentos interna o externamente a la organizaci&oacute;n.";
 choices[34][1] = "Recoger documentaci&oacute;n de otros profesionales o colaboradores.";
 choices[34][2] = "El env&iacute;o de documentos por fax o e-mail de forma directa.";
 choices[34][3] = "Gestionar millones de registros y recuperarlos en pocos segundos.";
 answers[34] = choices[34][1];
 units[34] = "95";
 comments[34] = "Id Pregunta: 2710. NULL";


//  Id pregunta: 2711 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Una de las principales caracter&iacute;sticas de un sistema gestor de contenidos es:";
 choices[35]= new Array();
 choices[35][0] = "Desaconseja el uso de metadatos.";
 choices[35][1] = "No hay roles en el proceso.";
 choices[35][2] = "Se separa el contenido de su presentaci&oacute;n.";
 choices[35][3] = "Las p&aacute;ginas se construyen de manera no din&aacute;mica.";
 answers[35] = choices[35][2];
 units[35] = "95";
 comments[35] = "Id Pregunta: 2711. NULL";


//  Id pregunta: 2843 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Un filtro de Prewitt es ";
 choices[36]= new Array();
 choices[36][0] = "un filtro de mediana empleado para realizar realces geom&eacute;tricos";
 choices[36][1] = "un filtro de mediana empleado para realizar realces radiom&eacute;tricos";
 choices[36][2] = "es similar en concepto a un filtro de Tukey";
 choices[36][3] = "un filtro paso alto empleado para realizar realces geom&eacute;tricos";
 answers[36] = choices[36][3];
 units[36] = "93";
 comments[36] = "Id Pregunta: 2843. NULL";


//  Id pregunta: 2845 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;La agudeza visual del hombre es capaz de identificar pixeles de?";
 choices[37]= new Array();
 choices[37][0] = "50&micro;m";
 choices[37][1] = "10&micro;m";
 choices[37][2] = "100&micro;m";
 choices[37][3] = "70&micro;m";
 answers[37] = choices[37][2];
 units[37] = "93";
 comments[37] = "Id Pregunta: 2845. NULL";


//  Id pregunta: 2852 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Indicar la falsa";
 choices[38]= new Array();
 choices[38][0] = "En la comparaci&oacute;n matricial se pueden utilizar filtros digitales que aclaran la informaci&oacute;n a almacenar, para optimizar el casamiento";
 choices[38][1] = "En la comparaci&oacute;n matricial escanea la forma de los caracteres y los compara con tablas de formas";
 choices[38][2] = "En el reconocimiento por patrones escanea la forma de los caracteres y los compara con tablas de formas";
 choices[38][3] = "El reconocimiento por patrones ofrece m&aacute;s flexibilidad que la comparaci&oacute;n matricial";
 answers[38] = choices[38][1];
 units[38] = "94";
 comments[38] = "Id Pregunta: 2852. ";


//  Id pregunta: 2853 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Una Base de Datos documental ";
 choices[39]= new Array();
 choices[39][0] = "presenta un modelo de recuperaci&oacute;n de informaci&oacute;n probabil&iacute;stica";
 choices[39][1] = "presenta un &iacute;ndice de incertidumbre en la respuesta";
 choices[39][2] = "las dos anteriores";
 choices[39][3] = "ninguna de las anteriores";
 answers[39] = choices[39][2];
 units[39] = "95,96";
 comments[39] = "Id Pregunta: 2853. ";


//  Id pregunta: 2856 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  En el analisis documental &iquest;qu&eacute; nivel no se emplea ?";
 choices[40]= new Array();
 choices[40][0] = "asiento";
 choices[40][1] = "indizaci&oacute;n";
 choices[40][2] = "resumen";
 choices[40][3] = "todos ellos se emplean";
 answers[40] = choices[40][3];
 units[40] = "95";
 comments[40] = "Id Pregunta: 2856. NULL";


//  Id pregunta: 2864 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Se define &Iacute;ndice de pertinencia (una valor entre 0 &yacute; 1) como ";
 choices[41]= new Array();
 choices[41][0] = "la relaci&oacute;n entre el n&uacute;mero de documentos relevantes recuperados y todos los documentos recuperados en una b&uacute;squeda";
 choices[41][1] = "la relaci&oacute;n entre el n&uacute;mero de documentos relevantes recuperados y todos los documentos relevantes de la base de datos en una b&uacute;squeda";
 choices[41][2] = "1 menos el Ruido";
 choices[41][3] = "Son correctas A &yacute; C";
 answers[41] = choices[41][3];
 units[41] = "96";
 comments[41] = "Id Pregunta: 2864. NULL";


//  Id pregunta: 2865 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Las Normas Gamma son unas t&eacute;cnicas de recuperaci&oacute;n de informaci&oacute;n";
 choices[42]= new Array();
 choices[42][0] = "tambi&eacute;n conocidas como retroalimentaci&oacute;n";
 choices[42][1] = "donde no es posible modificar el rigor con que se interpretan los operadores &quot;o&quot; &eacute; &quot;y&quot;";
 choices[42][2] = "que asignan valores relativos de importancia a los t&eacute;rminos de la consulta y grados de indexaci&oacute;n a los t&eacute;rminos de cada documento";
 choices[42][3] = "menos eficaces que las basadas en sistemas booleanos tradicionales";
 answers[42] = choices[42][2];
 units[42] = "96";
 comments[42] = "Id Pregunta: 2865. NULL";


//  Id pregunta: 2868 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;Qu&eacute; t&eacute;cnica de recuperaci&oacute;n se basan en la observaci&oacute;n de las frecuencias de aparici&oacute;n de t&eacute;rminos?";
 choices[43]= new Array();
 choices[43][0] = "l&oacute;gica borrosa";
 choices[43][1] = "modelos probabil&iacute;sticos";
 choices[43][2] = "modelos vectoriales";
 choices[43][3] = "lenguaje natural";
 answers[43] = choices[43][2];
 units[43] = "96";
 comments[43] = "Id Pregunta: 2868. NULL";


//  Id pregunta: 2940 AÃ±o de creación de pregunta: 2004-01-01
 questions[44]= "45)  El protocolo que permite llevar peticiones para bloques de dispositivos SCSI sobre una red IP es:";
 choices[44]= new Array();
 choices[44][0] = "uSCSI";
 choices[44][1] = "FCP";
 choices[44][2] = "iSCSI";
 choices[44][3] = "FCIP";
 answers[44] = choices[44][2];
 units[44] = "48,96,97";
 comments[44] = "Id Pregunta: 2940. Similar a examen TIC SS A 2004";


//  Id pregunta: 3138 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguentes es una de las ventajas de utilizar fibra &oacute;ptica, frente a la utilizaci&oacute;n de cable en una red de &aacute;rea local?:";
 choices[45]= new Array();
 choices[45][0] = "Dispositivos y adaptadores m&aacute;s baratos";
 choices[45][1] = "Menor n&uacute;mero de bytes necesarios para obtener el sincronismo";
 choices[45][2] = "Mayor confidencialidad de la informaci&oacute;n que circula";
 choices[45][3] = "Menor ancho de banda";
 answers[45] = choices[45][2];
 units[45] = "97";
 comments[45] = "Id Pregunta: 3138. NULL";


//  Id pregunta: 3147 AÃ±o de creación de pregunta: 2002-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a las distintas formas de codificaci&oacute;n?:";
 choices[46]= new Array();
 choices[46][0] = "La codificaci&oacute;n aritm&eacute;tica es m&aacute;s eficiente (en bits/s&iacute;mbolo) que la de Huffman";
 choices[46][1] = "La codificaci&oacute;n de Huffman utiliza los c&oacute;digos m&aacute;s largos para los s&iacute;mbolos m&aacute;s improbables";
 choices[46][2] = "La codificaci&oacute;n de Huffman codifica cada s&iacute;mbolo de forma independiente";
 choices[46][3] = "La codificaci&oacute;n de Huffman utiliza c&oacute;digos de longitud uniforme para representar los diferentes s&iacute;mbolos";
 answers[46] = choices[46][3];
 units[46] = "97";
 comments[46] = "Id Pregunta: 3147. NULL";


//  Id pregunta: 3153 AÃ±o de creación de pregunta: 2002-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa si hablamos de sincronizaci&oacute;n?:";
 choices[47]= new Array();
 choices[47][0] = "En la transmisi&oacute;n as&iacute;ncrona, la sincronizaci&oacute;n se realiza mediante los bits de arranque y parada";
 choices[47][1] = "En la transmisi&oacute;n s&iacute;ncrona, la sincronizaci&oacute;n se restablece con cada car&aacute;cter retransmitido";
 choices[47][2] = "Las se&ntilde;ales is&oacute;cronas requieren una sincronizaci&oacute;n interna, de modo que las sucesivas muestras se transmitan a intervalos fijos a partir de la primera";
 choices[47][3] = "En una red plesi&oacute;crona los equipos se sincronizan a partir de relojes independientes de similar precisi&oacute;n y estabilidad";
 answers[47] = choices[47][1];
 units[47] = "97";
 comments[47] = "Id Pregunta: 3153. NULL";


//  Id pregunta: 3154 AÃ±o de creación de pregunta: 2002-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa si nos referimos a la modulaci&oacute;n?:";
 choices[48]= new Array();
 choices[48][0] = "La modulaci&oacute;n/desmodulaci&oacute;n se realiza asociando los s&iacute;mbolos de un alfabeto a distintas se&ntilde;ales anal&oacute;gicas";
 choices[48][1] = "La modulaci&oacute;n FSK no afecta a la amplitud de la se&ntilde;al anal&oacute;gica";
 choices[48][2] = "La modulaci&oacute;n QPSK act&uacute;a sobre la amplitud de la se&ntilde;al anal&oacute;gica";
 choices[48][3] = "La modulaci&oacute;n QAM act&uacute;a sobre la fase y la amplitud de la se&ntilde;al anal&oacute;gica";
 answers[48] = choices[48][2];
 units[48] = "97";
 comments[48] = "Id Pregunta: 3154. NULL";


//  Id pregunta: 3182 AÃ±o de creación de pregunta: 2002-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes respuestas no describe las funciones de un repetidor?:";
 choices[49]= new Array();
 choices[49][0] = "Recibe, amplifica y retransmite las se&ntilde;ales recibidas";
 choices[49][1] = "Interconecta m&uacute;ltiples segmentos de LAN";
 choices[49][2] = "Previene del deterioro de la se&ntilde;al causado por las largas longitudes del cable";
 choices[49][3] = "Filtra el tr&aacute;fico basado en las direcciones MAC";
 answers[49] = choices[49][3];
 units[49] = "97";
 comments[49] = "Id Pregunta: 3182. NULL";


//  Id pregunta: 3274 AÃ±o de creación de pregunta: 2002-01-01
 questions[50]= "51)  &iquest;Por qu&eacute; son m&aacute;s eficiente los protocolos orientados a bit que los orientados a car&aacute;cter?:";
 choices[50]= new Array();
 choices[50][0] = "Debido al relleno de bits";
 choices[50][1] = "La eficiencia de ambos protocolos es la misma";
 choices[50][2] = "Debido al relleno de caracteres";
 choices[50][3] = "Debido a la codificaci&oacute;n binaria de los caracteres";
 answers[50] = choices[50][0];
 units[50] = "97";
 comments[50] = "Id Pregunta: 3274. NULL";


//  Id pregunta: 3331 AÃ±o de creación de pregunta: 2002-01-01
 questions[51]= "52)  Al fen&oacute;meno que se da en transmisi&oacute;n por fibra &oacute;ptica consistente en que los pulsos &oacute;pticos tienden a expandirse provocando interferencia, con lo que diferentes longitudes de onda viajan a diferentes velocidades, se le denomina:";
 choices[51]= new Array();
 choices[51][0] = "Dispersi&oacute;n de ventana";
 choices[51][1] = "Dispersi&oacute;n crom&aacute;tica";
 choices[51][2] = "Atenuaci&oacute;n &oacute;ptica";
 choices[51][3] = "Atenuaci&oacute;n de ventana";
 answers[51] = choices[51][1];
 units[51] = "97";
 comments[51] = "Id Pregunta: 3331. NULL";


//  Id pregunta: 3909 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Qu&eacute; no se usa en la s&iacute;ntesis de voz?";
 choices[52]= new Array();
 choices[52][0] = " fonemas";
 choices[52][1] = " difonemas";
 choices[52][2] = "palabras";
 choices[52][3] = "semis&iacute;labas";
 answers[52] = choices[52][2];
 units[52] = "94";
 comments[52] = "Id Pregunta: 3909. ";


//  Id pregunta: 3912 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Cuando una copia de seguridad copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental, poniendo una marca de copiado a los archivos se habla de:";
 choices[53]= new Array();
 choices[53][0] = "Copia de seguridad incremental.";
 choices[53][1] = "Copia de seguridad diaria.";
 choices[53][2] = "Copia de seguridad intermedia.";
 choices[53][3] = "Copia de seguridad diferencial.";
 answers[53] = choices[53][0];
 units[53] = "97";
 comments[53] = "Id Pregunta: 3912. NULL";


//  Id pregunta: 3915 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Cuando una copia de seguridad copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental, sin poner una marca de copiado a los archivos se habla de:";
 choices[54]= new Array();
 choices[54][0] = "Copia de seguridad incremental.";
 choices[54][1] = "Copia de seguridad diaria.";
 choices[54][2] = "Copia de seguridad intermedia.";
 choices[54][3] = "Copia de seguridad diferencial.";
 answers[54] = choices[54][3];
 units[54] = "97";
 comments[54] = "Id Pregunta: 3915. NULL";


//  Id pregunta: 3919 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Funciones de una copia de seguridad:";
 choices[55]= new Array();
 choices[55][0] = "Restaurar los archivos y carpetas modificados en el disco duro o en otro disco al que tenga acceso.";
 choices[55][1] = "Crear un duplicado de los datos del disco duro y, a continuaci&oacute;n, archivarlos en otros dispositivos de almacenamiento como pueden ser un disco duro o una cinta.";
 choices[55][2] = "Archivar en su disco duro determinados archivos y carpetas.";
 choices[55][3] = "Todas las anteriores";
 answers[55] = choices[55][3];
 units[55] = "97";
 comments[55] = "Id Pregunta: 3919. Tema 4.9: Pol&iacute;ticas, Procedimientos y m&eacute;todos para la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";


//  Id pregunta: 3920 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Las copias de seguridad:";
 choices[56]= new Array();
 choices[56][0] = "Son un engorro innecesario.";
 choices[56][1] = "Nunca pueden recuperarse del todo.";
 choices[56][2] = "Conviene probar previamente los procedimientos a seguir y dejarlos ben documentados.";
 choices[56][3] = "Nacieron con el fin de ahorrar tiempo y molestias al personal no inform&aacute;tico del Departamento.";
 answers[56] = choices[56][2];
 units[56] = "97";
 comments[56] = "Id Pregunta: 3920. NULL";


//  Id pregunta: 4121 AÃ±o de creación de pregunta: 2006-01-01
 questions[57]= "58)  Un protocolo usado espec&iacute;ficamente para controlar el backup de datos entre el almacenamiento primario y el centro de respaldo es";
 choices[57]= new Array();
 choices[57][0] = "Common Management Information Protocol (CMIP)";
 choices[57][1] = "Network Data Management Protocol (NDMP)";
 choices[57][2] = "Point-to-Point Protocol (PPP)";
 choices[57][3] = "Bootstrap Protocol (BOOTP)";
 answers[57] = choices[57][1];
 units[57] = "97";
 comments[57] = "Id Pregunta: 4121. NULL";


//  Id pregunta: 4156 AÃ±o de creación de pregunta: 2006-01-01
 questions[58]= "59)  Metodolog&iacute;a administrativa de gesti&oacute;n de sistemas que establece procedimientos para la gesti&oacute;n de situaciones futuras probables";
 choices[58]= new Array();
 choices[58][0] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 choices[58][1] = "Gesti&oacute;n basada en pol&iacute;ticas";
 choices[58][2] = "Tecnolog&iacute;a adaptativa";
 choices[58][3] = "Acuerdo de nivel de servicio (SLA)";
 answers[58] = choices[58][1];
 units[58] = "97";
 comments[58] = "Id Pregunta: 4156. NULL";


//  Id pregunta: 4181 AÃ±o de creación de pregunta: 2006-01-01
 questions[59]= "60)  Con el termino &quot;ventana de backup&quot; se define";
 choices[59]= new Array();
 choices[59][0] = "El espacio m&aacute;ximo disponible para un posible backup, dependiente de la capacidad de las cintas utilizadas";
 choices[59][1] = "La m&aacute;xima velocidad de transferencia de la cinta, que determina la duraci&oacute;n del mismo.";
 choices[59][2] = "El ancho de banda de la red de backup, que determina la duraci&oacute;n del mismo.";
 choices[59][3] = "El periodo de inactividad del sistema, que define el tiempo m&aacute;ximo disponible para realizar el backup.";
 answers[59] = choices[59][3];
 units[59] = "97";
 comments[59] = "Id Pregunta: 4181. NULL";


//  Id pregunta: 4335 AÃ±o de creación de pregunta: 2007-01-01
 questions[60]= "61)  Se&ntilde;ale cu&aacute;les de los siguientes son problemas de la transmisi&oacute;n de se&ntilde;ales el&eacute;ctricas sobre un medio que afectan a la calidad de las comunicaciones: I) Atenuaci&oacute;n II) Propagaci&oacute;n III)  distorsi&oacute;n.";
 choices[60]= new Array();
 choices[60][0] = "I y II.";
 choices[60][1] = "II y III.";
 choices[60][2] = "I y III.";
 choices[60][3] = "I, II y III.";
 answers[60] = choices[60][2];
 units[60] = "97";
 comments[60] = "Id Pregunta: 4335. NULL";


//  Id pregunta: 4863 AÃ±o de creación de pregunta: 2007-01-01
 questions[61]= "62)  En el proceso de reconocimiento del habla, el algoritmo Dynamic Time Warping (DTW) se utiliza para:";
 choices[61]= new Array();
 choices[61][0] = "Evitar el uso de plantillas";
 choices[61][1] = "Evitar la alineaci&oacute;n temporal";
 choices[61][2] = "Reconocer palabras aisladas y habla continua";
 choices[61][3] = "Conseguir resultados &oacute;ptimos con vocabularios de 5.000 palabras";
 answers[61] = choices[61][2];
 units[61] = "95,94";
 comments[61] = "Id Pregunta: 4863. ";


//  Id pregunta: 4878 AÃ±o de creación de pregunta: 2007-01-01
 questions[62]= "63)  El protocolo de escritura anticipada en el fichero diario (fichero log) de una base de datos establece que:";
 choices[62]= new Array();
 choices[62][0] = "La escritura de un elemento de datos deber&iacute;a hacerse antes de cualquier operaci&oacute;n en el diario";
 choices[62][1] = "El registro del diario de una operaci&oacute;n deber&iacute;a escribirse antes de que se escriban los datos reales";
 choices[62][2] = "Todos los registros del diario deber&iacute;an escribirse antes de que comenzara a ejecutarse una nuevatransacci&oacute;n";
 choices[62][3] = "El diario nunca necesita escribirse en disco";
 answers[62] = choices[62][1];
 units[62] = "97";
 comments[62] = "Id Pregunta: 4878. NULL";


//  Id pregunta: 5212 AÃ±o de creación de pregunta: 2003-01-01
 questions[63]= "64)  Marcar la opci&oacute;n incorrecta. El tesauro o diccionario de descriptores es un conjunto predefinido de palabras claves que muestran las siguientes relaciones:";
 choices[63]= new Array();
 choices[63][0] = "Relaciones de equivalencia o preferencia";
 choices[63][1] = "Relaciones jer&aacute;rquicas";
 choices[63][2] = "Relaciones asociativas o de afinidad";
 choices[63][3] = "Relaciones instrumentales";
 answers[63] = choices[63][3];
 units[63] = "95,96";
 comments[63] = "Id Pregunta: 5212. ";


//  Id pregunta: 5521 AÃ±o de creación de pregunta: 2003-01-01
 questions[64]= "65)  La fase del procedimiento de digitalizaci&oacute;n en la que se intenta mejorar el aspecto del documento digital utilizando algoritmos matem&aacute;ticos es";
 choices[64]= new Array();
 choices[64][0] = "Adquisici&oacute;n del documento digital o escaneado";
 choices[64][1] = "Procesado del documento digital";
 choices[64][2] = "Almacenamiento y gesti&oacute;n";
 choices[64][3] = "Presentaci&oacute;n del documento digital";
 answers[64] = choices[64][1];
 units[64] = "93";
 comments[64] = "Id Pregunta: 5521. NULL";


//  Id pregunta: 5522 AÃ±o de creación de pregunta: 2003-01-01
 questions[65]= "66)  La medida del n&uacute;mero de bits utilizados para definir cada p&iacute;xel es";
 choices[65]= new Array();
 choices[65][0] = "Resoluci&oacute;n";
 choices[65][1] = "&Aacute;rea de imagen";
 choices[65][2] = "Profundidad de bit o de color";
 choices[65][3] = "Ninguna es verdadera";
 answers[65] = choices[65][2];
 units[65] = "93";
 comments[65] = "Id Pregunta: 5522. NULL";


//  Id pregunta: 5525 AÃ±o de creación de pregunta: 2003-01-01
 questions[66]= "67)  Las siglas OCR responden a";
 choices[66]= new Array();
 choices[66][0] = "Optical Character Recognition";
 choices[66][1] = "Optical Computer Redefinition";
 choices[66][2] = "Optimal Character Recognition";
 choices[66][3] = "Online Character Recognition";
 answers[66] = choices[66][0];
 units[66] = "94";
 comments[66] = "Id Pregunta: 5525. ";


//  Id pregunta: 5527 AÃ±o de creación de pregunta: 2003-01-01
 questions[67]= "68)  En el reconocimiento &oacute;ptico de caracteres, la tasa de aciertos es";
 choices[67]= new Array();
 choices[67][0] = "El porcentaje de caracteres que se han reconocido incorrectamente del total de caracteres reconocidos";
 choices[67][1] = "La cantidad de espacio que hay entre dos letras";
 choices[67][2] = "La medida de la cantidad de espacio que hay entre dos l&iacute;neas";
 choices[67][3] = "El porcentaje de caracteres acertados del total de caracteres reconocidos";
 answers[67] = choices[67][3];
 units[67] = "94";
 comments[67] = "Id Pregunta: 5527. ";


//  Id pregunta: 5529 AÃ±o de creación de pregunta: 2003-01-01
 questions[68]= "69)  Indicar cu&aacute;l de las siguientes son t&eacute;cnicas basadas en la comparaci&oacute;n de patrones para el reconocimiento de la voz";
 choices[68]= new Array();
 choices[68][0] = "Programaci&oacute;n din&aacute;mica o DTW (Dynamic Time Warping)";
 choices[68][1] = "Modelos ocultos de Markov o HMM (Hidden Markov Models)";
 choices[68][2] = "Las respuestas a) y b) son verdaderas";
 choices[68][3] = "Ninguna es verdadera";
 answers[68] = choices[68][2];
 units[68] = "94";
 comments[68] = "Id Pregunta: 5529. ";


//  Id pregunta: 5543 AÃ±o de creación de pregunta: 2003-01-01
 questions[69]= "70)  Indicar cu&aacute;l de los siguientes no es un apartado contemplado por los criterios SNC del CSAE para elaborar un plan de contingencias";
 choices[69]= new Array();
 choices[69][0] = "Papeles y responsabilidades de los distintos actores";
 choices[69][1] = "Planificaci&oacute;n de recursos cuando se opera en situaci&oacute;n de contingencia";
 choices[69][2] = "Criterios para el retorno a explotaci&oacute;n normal";
 choices[69][3] = "Todos los anteriores son v&aacute;lidos";
 answers[69] = choices[69][3];
 units[69] = "97";
 comments[69] = "Id Pregunta: 5543. NULL";


//  Id pregunta: 6004 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  El proceso de kerning en un texto impreso:";
 choices[70]= new Array();
 choices[70][0] = "Es el proceso por el cual se van subdividiendo los elementos que componen una p&aacute;gina en otros menores hasta llegar a los elementos m&iacute;nimos, que son los caracteres.";
 choices[70][1] = "Es el proceso por el cual se elimina el espacio excesivo entre las letras.";
 choices[70][2] = "Es el proceso por el cual se corrige la inclinaci&oacute;n de la p&aacute;gina.";
 choices[70][3] = "Es el proceso que consiste en la divisi&oacute;n de un p&aacute;rrafo de texto en las diferentes l&iacute;neas que lo componen.";
 answers[70] = choices[70][1];
 units[70] = "94";
 comments[70] = "Id Pregunta: 6004. TIC A 2009";


//  Id pregunta: 6219 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los est&aacute;ndares de documentaci&oacute;n?";
 choices[71]= new Array();
 choices[71][0] = "Ayuda al entrenamiento del nuevo personal dentro y fuera de la organizaci&oacute;n de Sistemas";
 choices[71][1] = "Es &uacute;til para cualquier que tenga la responsabilidad del mantenimiento de los sistemas";
 choices[71][2] = "Ayuda a los analistas y dise&ntilde;adores de sistemas en el trabajo de integraci&oacute;n de sistemas";
 choices[71][3] = "El tiempo empleado en la documentaci&oacute;n se ve recompensado en al menos un 75% de ahorro en b&uacute;squedas de informaci&oacute;n para el mantenimiento del producto";
 answers[71] = choices[71][3];
 units[71] = "95";
 comments[71] = "Id Pregunta: 6219. TICB-2009, bloque desarrollo";


//  Id pregunta: 7300 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  En reconocimiento autom&aacute;tico del habla (ASR), se utiliza el siguiente concepto:";
 choices[72]= new Array();
 choices[72][0] = "Trigrama";
 choices[72][1] = "Trifonema";
 choices[72][2] = "Al&oacute;fono";
 choices[72][3] = "Todos son conceptos utilizados en ASR";
 answers[72] = choices[72][3];
 units[72] = "94";
 comments[72] = "Id Pregunta: 7300. NULL";


//  Id pregunta: 7307 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  El est&aacute;ndar VoiceXML ha sido desarrollado por:";
 choices[73]= new Array();
 choices[73][0] = "ETSI";
 choices[73][1] = "W3C";
 choices[73][2] = "ANSI";
 choices[73][3] = "IEEE";
 answers[73] = choices[73][1];
 units[73] = "94";
 comments[73] = "Id Pregunta: 7307. NULL";


//  Id pregunta: 7308 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  Indique cu&aacute;l de los siguientes NO es un lenguaje de marcado multimodal:";
 choices[74]= new Array();
 choices[74][0] = "EMMA";
 choices[74][1] = "VoiceXML";
 choices[74][2] = "SALT";
 choices[74][3] = "Todos son lenguajes de marcado multimodal";
 answers[74] = choices[74][1];
 units[74] = "94";
 comments[74] = "Id Pregunta: 7308. NULL";


//  Id pregunta: 7349 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  Liferay est&aacute; desarrollado por:";
 choices[75]= new Array();
 choices[75][0] = "Canonical";
 choices[75][1] = "Red Hat";
 choices[75][2] = "Novell";
 choices[75][3] = "Ninguna de las anteriores";
 answers[75] = choices[75][3];
 units[75] = "95";
 comments[75] = "Id Pregunta: 7349. NULL";


//  Id pregunta: 7358 AÃ±o de creación de pregunta: 2010-01-01
 questions[76]= "77)  Cu&aacute;l de los siguientes est&aacute;ndares corresponde a PDF/A";
 choices[76]= new Array();
 choices[76][0] = "ISO 23018";
 choices[76][1] = "ISO 19005";
 choices[76][2] = "ISO 13100";
 choices[76][3] = "ISO 16546";
 answers[76] = choices[76][1];
 units[76] = "95";
 comments[76] = "Id Pregunta: 7358. NULL";


//  Id pregunta: 7359 AÃ±o de creación de pregunta: 2010-01-01
 questions[77]= "78)  Un formato de archivo de documentos electr&oacute;nicos a largo plazo debe cumplir:";
 choices[77]= new Array();
 choices[77][0] = "Debe ser un formato independiente del dispositivo";
 choices[77][1] = "Debe ser un formato autocontenido, de manera que toda la informaci&oacute;n necesaria para representar el contenido del documento se encuentre en el propio documento, y no sea preciso acceder a contenidos externos que quiz&aacute; en el futuro no est&eacute;n disponibles";
 choices[77][2] = "El formato debe estar publicado.";
 choices[77][3] = "Todas son CORRECTAS";
 answers[77] = choices[77][3];
 units[77] = "95";
 comments[77] = "Id Pregunta: 7359. NULL";


//  Id pregunta: 7772 AÃ±o de creación de pregunta: 2010-01-01
 questions[78]= "79)   Los formatos de im&aacute;genes admitidos por los navegadores Internet Explorer 6.0, Netscape 8.0 y Opera 8.0, son:";
 choices[78]= new Array();
 choices[78][0] = " jpeg, tiff y spp.";
 choices[78][1] = " jpeg, spp y psd.";
 choices[78][2] = " jpeg, spp y tiff.";
 choices[78][3] = " jpeg, gif y png.";
 answers[78] = choices[78][3];
 units[78] = "93";
 comments[78] = "Id Pregunta: 7772. Map 2005";


//  Id pregunta: 8330 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Si hablamos del control automatizado de documentos electr&oacute;nicos a trav&eacute;s de su ciclo de vida completo en una organizaci&oacute;n, desde su creaci&oacute;n inidal hasta su archivado final, estamos hablando de:";
 choices[79]= new Array();
 choices[79][0] = "Desarrollo de software";
 choices[79][1] = "Gesti&oacute;n documental";
 choices[79][2] = "Sistemas gestores de base de datos";
 choices[79][3] = "Sistemas de soporte a la decisi&oacute;n";
 answers[79] = choices[79][1];
 units[79] = "95";
 comments[79] = "Id Pregunta: 8330. Examen TIC A2 2010";


//  Id pregunta: 8642 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de los siguientes algoritmos de ordenaci&oacute;n es inestable?";
 choices[80]= new Array();
 choices[80][0] = "Mergesort";
 choices[80][1] = "Bubblesort";
 choices[80][2] = "Quicksort";
 choices[80][3] = "Insertionsort";
 answers[80] = choices[80][2];
 units[80] = "96";
 comments[80] = "Id Pregunta: 8642. Examen TIC A2 2010 interna";


//  Id pregunta: 8648 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes NO es un algoritmo de ordenaci&oacute;n?";
 choices[81]= new Array();
 choices[81][0] = "Quicksort.";
 choices[81][1] = "Mergesort.";
 choices[81][2] = "Bubblesort.";
 choices[81][3] = "Middlesort.";
 answers[81] = choices[81][3];
 units[81] = "96";
 comments[81] = "Id Pregunta: 8648. Examen TIC A2 2010 interna";


//  Id pregunta: 8827 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Qu&eacute; tipo de filtro se emplea en im&aacute;genes digitales para detectar bordes?";
 choices[82]= new Array();
 choices[82][0] = " Filtro paso bajo";
 choices[82][1] = " 	Filtro paso alto";
 choices[82][2] = " Filtro de mediana";
 choices[82][3] = " Filtro de la moda";
 answers[82] = choices[82][1];
 units[82] = "93";
 comments[82] = "Id Pregunta: 8827. Examen UC3M 2010";


//  Id pregunta: 9177 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Es un formato de imagen vectorial:";
 choices[83]= new Array();
 choices[83][0] = "VML";
 choices[83][1] = "JPG";
 choices[83][2] = "XCF";
 choices[83][3] = "GIF";
 answers[83] = choices[83][0];
 units[83] = "93";
 comments[83] = "Id Pregunta: 9177. NULL";


//  Id pregunta: 9179 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Indique la afirmaci&oacute;n FALSA:";
 choices[84]= new Array();
 choices[84][0] = "La luz acrom&aacute;tica es aquella cuyo &uacute;nico atributo visible es la intensidad";
 choices[84][1] = "Los colores secundarios cian, magenta y amarillo se consideran combinaci&oacute;n de los tres colores primarios ";
 choices[84][2] = "La percepci&oacute;n del color por el sistema visual humano se caracteriza por los par&aacute;metros: brillo, matiz y croma o saturaci&oacute;n.";
 choices[84][3] = "La intensidad se describe en t&eacute;rminos de radiancia, luminancia y brillo.";
 answers[84] = choices[84][1];
 units[84] = "93";
 comments[84] = "Id Pregunta: 9179. NULL";


//  Id pregunta: 9974 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Los sistemas de gesti&oacute;n de contenidos, (CMS en ingl&eacute;s), son un tipo especial de software orientado a la creaci&oacute;n, administraci&oacute;n y distribuci&oacute;n de contenidos digitales. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta.";
 choices[85]= new Array();
 choices[85][0] = "Disponen de una interfaz que permite controlar una o varias bases de datos donde se aloja el contenido del sitio.";
 choices[85][1] = "Permiten manejar de forma independiente el contenido y el dise&ntilde;o.";
 choices[85][2] = "Permiten una gesti&oacute;n de roles de usuarios: administrador, autor, editor, lector, ...";
 choices[85][3] = "Garantizan la accesibilidad de los portales y contenidos digitales";
 answers[85] = choices[85][3];
 units[85] = "95";
 comments[85] = "Id Pregunta: 9974. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 10010 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Qu&eacute; modelo de recuperaci&oacute;n de informaci&oacute;n se basa en el Teorema de Bayes?a) Vectorial.X b) Probabil&iacute;stico.c) Indexaci&oacute;n por Sem&aacute;ntica Latente.d) Basado en la teor&iacute;a de conjuntos.";
 choices[86]= new Array();
 choices[86][0] = "Vectorial.";
 choices[86][1] = "Probabil&iacute;stico.";
 choices[86][2] = "Indexaci&oacute;n por Sem&aacute;ntica Latente.";
 choices[86][3] = "Basado en la teor&iacute;a de conjuntos.";
 answers[86] = choices[86][1];
 units[86] = "96";
 comments[86] = "Id Pregunta: 10010. ";


//  Id pregunta: 10189 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes formatos de im&aacute;gen permite fondos transparentes?";
 choices[87]= new Array();
 choices[87][0] = "TIFF";
 choices[87][1] = "BMP";
 choices[87][2] = "JPEG";
 choices[87][3] = "PNG";
 answers[87] = choices[87][3];
 units[87] = "93";
 comments[87] = "Id Pregunta: 10189. NULL";


//  Id pregunta: 10191 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Qu&eacute; tratamiento digital de una im&aacute;gen resalta los tonos oscuros?";
 choices[88]= new Array();
 choices[88][0] = "Filtro de mediana";
 choices[88][1] = "Realce logar&iacute;tmico";
 choices[88][2] = "Filtro paso bajo";
 choices[88][3] = "Filtro paso alto";
 answers[88] = choices[88][1];
 units[88] = "93";
 comments[88] = "Id Pregunta: 10191. NULL";


//  Id pregunta: 10192 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Qu&eacute; es PDF-417?";
 choices[89]= new Array();
 choices[89][0] = "Una especificaci&oacute;n de c&oacute;digo de barras de dos dimensiones";
 choices[89][1] = "Un formato de archivo para el archivo a largo plazo de documentos electr&oacute;nicos";
 choices[89][2] = "Una t&eacute;cnica de compresi&oacute;n sin p&eacute;rdidas basada en codificaci&oacute;n de trellis";
 choices[89][3] = "Una tecnolog&iacute;a repogr&aacute;fica de impresi&oacute;n de alta calidad";
 answers[89] = choices[89][0];
 units[89] = "94";
 comments[89] = "Id Pregunta: 10192. ";


//  Id pregunta: 10453 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En el &aacute;mbito de la continuidad de negocio, el Punto de Recuperaci&oacute;n Objetivo o &quot;Recovery point objective RPO&quot;:";
 choices[90]= new Array();
 choices[90][0] = "Determina la frecuencia de las copias de respaldo.";
 choices[90][1] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 choices[90][2] = "Es la cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[90][3] = "A y B.";
 answers[90] = choices[90][3];
 units[90] = "97";
 comments[90] = "Id Pregunta: 10453. NULL";


//  Id pregunta: 10649 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Alfresco, OpenKM y Nuxeo son:";
 choices[91]= new Array();
 choices[91][0] = "Gestores de portales.";
 choices[91][1] = "Gestores documentales.";
 choices[91][2] = "Gestores de contenidos web.";
 choices[91][3] = "Todos los anteriores.";
 answers[91] = choices[91][1];
 units[91] = "95";
 comments[91] = "Id Pregunta: 10649. ";


//  Id pregunta: 11171 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes no es un modelo cl&aacute;sico de recuperaci&oacute;n de informaci&oacute;n?";
 choices[92]= new Array();
 choices[92][0] = "Probabil&iacute;stico";
 choices[92][1] = "Estructurado";
 choices[92][2] = "Vectorial";
 choices[92][3] = "Booleano";
 answers[92] = choices[92][1];
 units[92] = "96";
 comments[92] = "Id Pregunta: 11171. ";


//  Id pregunta: 11287 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes NO es un sistema de indexaci&oacute;n y b&uacute;squeda de texto?";
 choices[93]= new Array();
 choices[93][0] = "Lucene";
 choices[93][1] = "Solr";
 choices[93][2] = "Xapian";
 choices[93][3] = "Todos los anteriores lo son";
 answers[93] = choices[93][3];
 units[93] = "95";
 comments[93] = "Id Pregunta: 11287. ";


//  Id pregunta: 11288 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; es Activiti?";
 choices[94]= new Array();
 choices[94][0] = "Una alternativa a JBPM";
 choices[94][1] = "El motor BPM de Alfresco";
 choices[94][2] = "a y b son ciertas";
 choices[94][3] = "El motor BPM de Liferay";
 answers[94] = choices[94][2];
 units[94] = "95";
 comments[94] = "Id Pregunta: 11288. ";


//  Id pregunta: 11289 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En un gestor documental t&iacute;pico &iquest;d&oacute;nde se realiza el almacenamiento?";
 choices[95]= new Array();
 choices[95][0] = "Los metadatos en el Sistema de Ficheros, los documentos en Base de Datos";
 choices[95][1] = "Los metadatos en Base de Datos, los documentos en el Sistema de Ficheros";
 choices[95][2] = "Metadatos y documentos se almacenan en Base de Datos";
 choices[95][3] = "Ninguna de las anteriores";
 answers[95] = choices[95][1];
 units[95] = "95";
 comments[95] = "Id Pregunta: 11289. ";


//  Id pregunta: 11290 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares NO est&aacute; relacionado directamente con la gesti&oacute;n de contenidos?";
 choices[96]= new Array();
 choices[96][0] = "CIFS";
 choices[96][1] = "CMIS";
 choices[96][2] = "JCR 170";
 choices[96][3] = "Todos lo est&aacute;n";
 answers[96] = choices[96][3];
 units[96] = "95";
 comments[96] = "Id Pregunta: 11290. ";


//  Id pregunta: 11291 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares corresponde a la especificaci&oacute;n de portlets m&aacute;s reciente?";
 choices[97]= new Array();
 choices[97][0] = "JSR 286";
 choices[97][1] = "JSR 168";
 choices[97][2] = "JSR 283";
 choices[97][3] = "a y c son ciertas";
 answers[97] = choices[97][0];
 units[97] = "95";
 comments[97] = "Id Pregunta: 11291. ";


//  Id pregunta: 11293 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de plugin de Liferay?";
 choices[98]= new Array();
 choices[98][0] = "Tema";
 choices[98][1] = "Portlet";
 choices[98][2] = "Ruta";
 choices[98][3] = "Hook";
 answers[98] = choices[98][2];
 units[98] = "95";
 comments[98] = "Id Pregunta: 11293. ";


//  Id pregunta: 11295 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes gestores de contenidos NO est&aacute; desarrollado en Java?";
 choices[99]= new Array();
 choices[99][0] = "Liferay";
 choices[99][1] = "Alfresco";
 choices[99][2] = "Drupal";
 choices[99][3] = "OpenCMS";
 answers[99] = choices[99][2];
 units[99] = "95";
 comments[99] = "Id Pregunta: 11295. ";


