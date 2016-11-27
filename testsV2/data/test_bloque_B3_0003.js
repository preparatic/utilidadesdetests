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

//  Id pregunta: 2016 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre diagramas es cierta?";
 choices[0]= new Array();
 choices[0][0] = "Los flujogramas de sistema se utilizaban en aplicaciones batch, y en aplicaciones interactivas se emplean los DFDs";
 choices[0][1] = "En un flujograma de sistema los datos se representan a nivel de archivo, nunca menor";
 choices[0][2] = "Cada &quot;caja&quot; de un flujograma de sistema se descompone necesariamente en un flujograma de programa";
 choices[0][3] = "Un proceso de un DFD no puede generar m&aacute;s que un flujograma de programa";
 answers[0] = choices[0][2];
 units[0] = "86";
 comments[0] = "Id Pregunta: 2016. Examen TIC MAP B 2004";


//  Id pregunta: 2017 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Dentro de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3, &iquest;cu&aacute;l de las siguientes opciones es una extensi&oacute;n del modelo entidad/relaci&oacute;n?";
 choices[1]= new Array();
 choices[1][0] = "Definici&oacute;n de &iacute;ndices";
 choices[1][1] = "Generalizaci&oacute;n";
 choices[1][2] = "Entidades deductivas";
 choices[1][3] = "Entidades hist&oacute;ricas";
 answers[1] = choices[1][1];
 units[1] = "86";
 comments[1] = "Id Pregunta: 2017. Examen TIC MAP B 2004";


//  Id pregunta: 2037 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  En UML una variable o un m&eacute;todo con la notaci&oacute;n: '#' &iquest;qu&eacute; significa?";
 choices[2]= new Array();
 choices[2][0] = "Que es p&uacute;blica.";
 choices[2][1] = "Que es privada.";
 choices[2][2] = "Que es protegida.";
 choices[2][3] = "Ninguna de las anteriores.";
 answers[2] = choices[2][2];
 units[2] = "84";
 comments[2] = "Id Pregunta: 2037. ";


//  Id pregunta: 2052 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Superclave";
 choices[3][1] = "Clave principal";
 choices[3][2] = "Tupla m&uacute;ltiple";
 choices[3][3] = "Clave ajena";
 answers[3] = choices[3][3];
 units[3] = "57";
 comments[3] = "Id Pregunta: 2052. Pregunta Junta Andalucia - A";


//  Id pregunta: 2077 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Para la estimaci&oacute;n del esfuerzo necesario y dimensionamiento de proyectos de desarrollo de sistemas, &iquest;qu&eacute; opciones viables aparecen?:";
 choices[4]= new Array();
 choices[4][0] = "Modelos basados en t&eacute;cnicas de descomposici&oacute;n y modelos de estimaci&oacute;n emp&iacute;ricos";
 choices[4][1] = "Modelos de estimaci&oacute;n de l&iacute;neas de c&oacute;digo y modelos de punto de funci&oacute;n";
 choices[4][2] = "Modelos basados en t&eacute;cnicas de planificaci&oacute;n y control de proyectos y modelos de planificaci&oacute;n temporal";
 choices[4][3] = "Modelos de estimaci&oacute;n de l&iacute;neas de c&oacute;digo y modelos emp&iacute;ricos";
 answers[4] = choices[4][1];
 units[4] = "89";
 comments[4] = "Id Pregunta: 2077. NULL";


//  Id pregunta: 2086 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes funciones no es importante para un sistema operativo de tiempo real?";
 choices[5]= new Array();
 choices[5][0] = "Manejo eficaz de interrupciones.";
 choices[5][1] = "Gran manejo de memoria virtual.";
 choices[5][2] = "Mecanismos potentes y vers&aacute;tiles de comunicaci&oacute;n entre procesos.";
 choices[5][3] = "Funciones sencillas, &aacute;giles y potentes para el manejo de ficheros.";
 answers[5] = choices[5][1];
 units[5] = "83";
 comments[5] = "Id Pregunta: 2086. ";


//  Id pregunta: 2092 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  De las siguientes bases de datos se&ntilde;alar la que no tiene car&aacute;cter documental:";
 choices[6]= new Array();
 choices[6][0] = "KNOSYS";
 choices[6][1] = "STAIRS";
 choices[6][2] = "ADABAS";
 choices[6][3] = "MISTRAL";
 answers[6] = choices[6][2];
 units[6] = "95";
 comments[6] = "Id Pregunta: 2092. NULL";


//  Id pregunta: 2105 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  En el caso de un mantenimiento que implique un error cr&iacute;tico, siguiendo METRICA V3:";
 choices[7]= new Array();
 choices[7][0] = "Debe abordarse el cambio de forma inmediata sin profundizar en el origen del mismo";
 choices[7][1] = "Debe abordarse el cambio tras analizar el problema y determinar la soluci&oacute;n definitiva";
 choices[7][2] = "Se analizar&aacute; el alcance de los cambios valorando hasta que punto deben ser abordados en funci&oacute;n del ciclo de vida estimado para los sistemas de informaci&oacute;n afectados.";
 choices[7][3] = "Se llevar&aacute; a cabo el diagnostico y an&aacute;lisis de los cambios para determinar si es necesario derivar la petici&oacute;n hacia el proceso de Estudio de Viabilidad del Sistema o hacia el An&aacute;lisis del Sistema de Informaci&oacute;n.";
 answers[7] = choices[7][0];
 units[7] = "86";
 comments[7] = "Id Pregunta: 2105. Pregunta Junta Andalucia - A";


//  Id pregunta: 2127 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta respecto al diccionario de datos?";
 choices[8]= new Array();
 choices[8][0] = "El diccionario de datos es complementario a otras t&eacute;cnicas como diagramas de flujo de datos o diagramas entidad/relaci&oacute;n";
 choices[8][1] = "En general, las entidades del diagrama entidad/relaci&oacute;n se corresponden a los almacenes del diagrama de flujo de datos y el diccionario de datos";
 choices[8][2] = "El s&iacute;mbolo &quot;@&quot; se suele utilizar como identificador o clave de acceso en el caso de almacenes";
 choices[8][3] = "Todas las respuestas anteriores son correctas";
 answers[8] = choices[8][3];
 units[8] = "81";
 comments[8] = "Id Pregunta: 2127. ";


//  Id pregunta: 2147 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes modelos de an&aacute;lisis estructurado sirve para verificar la exactitud de los otros dos modelos y para garantizar la coherencia entre las tres visiones del sistema: est&aacute;tica, din&aacute;mica y evolutiva?:";
 choices[9]= new Array();
 choices[9][0] = "DFD";
 choices[9][1] = "DED";
 choices[9][2] = "HVE";
 choices[9][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[9] = choices[9][2];
 units[9] = "81";
 comments[9] = "Id Pregunta: 2147. ";


//  Id pregunta: 2148 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes modelos se basan en la idea 'No puedo decirte lo que quiero, pero lo reconocer&eacute; en cuanto lo vea'?:";
 choices[10]= new Array();
 choices[10][0] = "Modelo en cascada";
 choices[10][1] = "Modelo por etapas";
 choices[10][2] = "Modelo en espiral";
 choices[10][3] = "Modelo de prototipado evolutivo";
 answers[10] = choices[10][3];
 units[10] = "76";
 comments[10] = "Id Pregunta: 2148. ";


//  Id pregunta: 2166 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Indique cu&aacute;l de las siguientes afirmaciones se aplica a un sistema de gesti&oacute;n de versiones:";
 choices[11]= new Array();
 choices[11][0] = "Facilita la planificaci&oacute;n de trabajos nocturnos";
 choices[11][1] = "Garantiza la disciplina y calidad en el paso de los programas a explotaci&oacute;n";
 choices[11][2] = "Define un entorno de preexplotaci&oacute;n";
 choices[11][3] = "Hace m&aacute;s eficiente la comunicaci&oacute;n entre programas";
 answers[11] = choices[11][1];
 units[11] = "95";
 comments[11] = "Id Pregunta: 2166. NULL";


//  Id pregunta: 2202 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;En qu&eacute; diagramas se representan los tipos de elementos nodos y conexiones?:";
 choices[12]= new Array();
 choices[12][0] = "Diagramas de despliegue";
 choices[12][1] = "Diagramas de componentes";
 choices[12][2] = "Diagramas de descomposici&oacute;n";
 choices[12][3] = "Diagramas de estructura";
 answers[12] = choices[12][0];
 units[12] = "86";
 comments[12] = "Id Pregunta: 2202. NULL";


//  Id pregunta: 2204 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;En qu&eacute; procesos de M&eacute;trica V3 se contemplan la migraci&oacute;n y carga inicial de datos?:  ";
 choices[13]= new Array();
 choices[13][0] = "DSI, CSI, IAS";
 choices[13][1] = "EVS, DSI, CSI";
 choices[13][2] = "ASI, DTS, CSI";
 choices[13][3] = "EVS, CSI, MSI";
 answers[13] = choices[13][0];
 units[13] = "86";
 comments[13] = "Id Pregunta: 2204. NULL";


//  Id pregunta: 2224 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Seg&uacute;n McCall, a la extensi&oacute;n por la cual un programa ejecuta la funci&oacute;n buscada con la precisi&oacute;n requerida se llama:";
 choices[14]= new Array();
 choices[14][0] = "Correcci&oacute;n";
 choices[14][1] = "Fiabilidad";
 choices[14][2] = "Eficiencia";
 choices[14][3] = "Integridad";
 answers[14] = choices[14][1];
 units[14] = "88";
 comments[14] = "Id Pregunta: 2224. ";


//  Id pregunta: 2276 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El flujo de datos de un DFD:";
 choices[15]= new Array();
 choices[15][0] = "Tiene siempre flechas";
 choices[15][1] = "No tiene por qu&eacute; existir";
 choices[15][2] = "S&oacute;lo conecta procesos";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][3];
 units[15] = "81";
 comments[15] = "Id Pregunta: 2276. ";


//  Id pregunta: 2352 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En una planificaci&oacute;n de un proyecto, una situaci&oacute;n que se da normalmente es que:";
 choices[16]= new Array();
 choices[16][0] = "Al inicio del proyecto se consuman m&aacute;s recursos que al final";
 choices[16][1] = "Al principio los recursos precisos van creciendo y al final decreciendo";
 choices[16][2] = "Al final del proyecto se consumen m&aacute;s recursos que en toda su vida anterior";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = choices[16][1];
 units[16] = "77";
 comments[16] = "Id Pregunta: 2352. ";


//  Id pregunta: 2408 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Al hablar de bases de datos documentales, el proceso de generar ficheros &iacute;ndice, se denomina:";
 choices[17]= new Array();
 choices[17][0] = "Indexaci&oacute;n";
 choices[17][1] = "Indizaci&oacute;n";
 choices[17][2] = "Indistintamente indexaci&oacute;n o indizaci&oacute;n";
 choices[17][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[17] = choices[17][2];
 units[17] = "95";
 comments[17] = "Id Pregunta: 2408. NULL";


//  Id pregunta: 2504 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un  m&eacute;todo orientado a los datos es:";
 choices[18]= new Array();
 choices[18][0] = "Diagramas HIPO";
 choices[18][1] = "Dise&ntilde;o Estructurado de Jackson";
 choices[18][2] = "Historia de la vida de una entidad";
 choices[18][3] = "Dise&ntilde;o estructurado: Yourdon-Constantine";
 answers[18] = choices[18][1];
 units[18] = "79";
 comments[18] = "Id Pregunta: 2504. ";


//  Id pregunta: 2542 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Los ficheros inversos se utilizan preferentemente en:";
 choices[19]= new Array();
 choices[19][0] = "Bases de datos relacionales";
 choices[19][1] = "Bases de datos jer&aacute;rquicas";
 choices[19][2] = "Sistemas de recuperaci&oacute;n de informaci&oacute;n";
 choices[19][3] = "Bases de datos reticulares";
 answers[19] = choices[19][2];
 units[19] = "96";
 comments[19] = "Id Pregunta: 2542. NULL";


//  Id pregunta: 2614 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;C&uacute;al de los siguientes lenguajes no es Orientado a Objetos?";
 choices[20]= new Array();
 choices[20][0] = "Smalltalk";
 choices[20][1] = "C++";
 choices[20][2] = "Eiffel";
 choices[20][3] = "ACTOR";
 answers[20] = choices[20][3];
 units[20] = "82";
 comments[20] = "Id Pregunta: 2614. ";


//  Id pregunta: 2619 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l es la complejidad ciclom&aacute;tica de un grafo de  11 aristas y 9 nodos?";
 choices[21]= new Array();
 choices[21][0] = "6";
 choices[21][1] = "12";
 choices[21][2] = "8";
 choices[21][3] = "4";
 answers[21] = choices[21][3];
 units[21] = "88";
 comments[21] = "Id Pregunta: 2619. NULL";


//  Id pregunta: 2658 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  Una de las siguientes caracter&iacute;sticas no se corresponde con las del SW";
 choices[22]= new Array();
 choices[22][0] = "fabricaci&oacute;n &uacute;nica, no en serie";
 choices[22][1] = "F&aacute;cil de modificar pero dificil de validar";
 choices[22][2] = "Proceso de desarrollo f&aacute;cil de controlar";
 choices[22][3] = "Todas los correctas";
 answers[22] = choices[22][2];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2658. ";


//  Id pregunta: 2661 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  Cu&aacute;l de los siguientes no es un m&eacute;todo o t&eacute;cnica de recuperaci&oacute;n de informaci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Sistemas de hojeo-ojeo.";
 choices[23][1] = "Sistemas de fila incierta.";
 choices[23][2] = "Sistemas de normal.";
 choices[23][3] = "Sistemas expertos.";
 answers[23] = choices[23][1];
 units[23] = "96";
 comments[23] = "Id Pregunta: 2661. NULL";


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


//  Id pregunta: 2690 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  &iquest;Cu&aacute;les son los criterios agentes en el modelo de calidad EFQM de excelencia?";
 choices[25]= new Array();
 choices[25][0] = "Liderazgo, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[25][1] = "Liderazgo, personal, pol&iacute;tica y estrategia, innovaci&oacute;n y apredizaje, procesos";
 choices[25][2] = "Rendimiento, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][0];
 units[25] = "87,88,92";
 comments[25] = "Id Pregunta: 2690. ";


//  Id pregunta: 2709 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Un sistema de gesti&oacute;n de contenidos intenta mejorar una situaci&oacute;n previa en la que:";
 choices[26]= new Array();
 choices[26][0] = "Hay un buscador no eficiente. Los &iacute;ndices no est&aacute;n suficientemente actualizados y en algunos servidores ni siquiera se dispone de la posibilidad de b&uacute;squeda.";
 choices[26][1] = "Aunque escasean los expertos inform&aacute;ticos los procesos de edici&oacute;n, validaci&oacute;n y actualizaci&oacute;n son &aacute;giles.";
 choices[26][2] = "Varios servidores web integrados dentro del portal corporativo est&aacute;n en la misma m&aacute;quina pero con URL diferentes.";
 choices[26][3] = "Contenidos personalizados en funci&oacute;n de distintos perfiles o intereses de los usuarios.";
 answers[26] = choices[26][0];
 units[26] = "95";
 comments[26] = "Id Pregunta: 2709. NULL";


//  Id pregunta: 2713 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l fue el primer navegador web?";
 choices[27]= new Array();
 choices[27][0] = "Explorer One";
 choices[27][1] = "Netscape";
 choices[27][2] = "Gopher";
 choices[27][3] = "Mosaic";
 answers[27] = choices[27][3];
 units[27] = "112";
 comments[27] = "Id Pregunta: 2713. ";


//  Id pregunta: 2748 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  En un DFD (Diagrama de Flujos de Datos)  el diagrama que  se representa mediante las entidades externas de entrada y salida y un solo proceso principal es el:";
 choices[28]= new Array();
 choices[28][0] = "Diagrama de bloques";
 choices[28][1] = "Diagrama de contexto";
 choices[28][2] = "Diagrama de primer nivel";
 choices[28][3] = "Diagrama b&aacute;sico";
 answers[28] = choices[28][1];
 units[28] = "81";
 comments[28] = "Id Pregunta: 2748. ";


//  Id pregunta: 2802 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  La norma ISO 9001";
 choices[29]= new Array();
 choices[29][0] = "Est&aacute; reservada para aquellas empresas que tengan dise&ntilde;o o desarrollo de servicios.";
 choices[29][1] = "Contiene 25 puntos que  describen los requisitos que deben implantarse en una empresa para asegurar que cumple con una norma de calidad predefinida.";
 choices[29][2] = "Es la menos exigente de las opciones de la ISO 9000.";
 choices[29][3] = "Se diferencia de la ISO 9002 en que no contiene los puntos concernientes a Dise&ntilde;o, Compras, Control de procesos y Postventa.";
 answers[29] = choices[29][0];
 units[29] = "87";
 comments[29] = "Id Pregunta: 2802. NULL";


//  Id pregunta: 2833 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  La transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema es:";
 choices[30]= new Array();
 choices[30][0] = "Ingenier&iacute;a inversa.";
 choices[30][1] = "Reestructuraci&oacute;n.";
 choices[30][2] = "Ingenier&iacute;a hacia delante.";
 choices[30][3] = "Reingenier&iacute;a.";
 answers[30] = choices[30][1];
 units[30] = "91";
 comments[30] = "Id Pregunta: 2833. ";


//  Id pregunta: 2842 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  ECW ";
 choices[31]= new Array();
 choices[31][0] = "es el acr&oacute;nimo de Enhanced Quality Wavelet ";
 choices[31][1] = "es un m&eacute;todo de compresi&oacute;n sin p&eacute;rdidas";
 choices[31][2] = "es un m&eacute;todo de compresi&oacute;n con p&eacute;rdidas";
 choices[31][3] = "se emplea preferentemente para la compresi&oacute;n de voz";
 answers[31] = choices[31][2];
 units[31] = "93";
 comments[31] = "Id Pregunta: 2842. NULL";


//  Id pregunta: 2874 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes interfaces no corresponde a las establecidas por la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[32]= new Array();
 choices[32][0] = "Planificaci&oacute;n del Sistema";
 choices[32][1] = "Gesti&oacute;n de proyectos";
 choices[32][2] = "Aseguramiento de la calidad";
 choices[32][3] = "Seguridad";
 answers[32] = choices[32][0];
 units[32] = "86";
 comments[32] = "Id Pregunta: 2874. NULL";


//  Id pregunta: 4390 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  El diagrama de transici&oacute;n de estados es una notaci&oacute;n:";
 choices[33]= new Array();
 choices[33][0] = "Est&aacute;tica.";
 choices[33][1] = "H&iacute;brida.";
 choices[33][2] = "Din&aacute;mica.";
 choices[33][3] = "Estructural.";
 answers[33] = choices[33][2];
 units[33] = "84";
 comments[33] = "Id Pregunta: 4390. Examen TIC MAP B 2006";


//  Id pregunta: 4414 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  El elemento dentro de un Sistema de Recuperaci&oacute;n de la Informaci&oacute;n que facilita eliminar informaci&oacute;n irrelevante desde el punto de vista del ordenamiento y la b&uacute;squeda y que se realiza durante la fase de ingreso del documento en el sistema, se denomina:";
 choices[34]= new Array();
 choices[34][0] = "Taxonom&iacute;a.";
 choices[34][1] = "Tesauro.";
 choices[34][2] = "Descriptor o Signatura";
 choices[34][3] = "Lista de palabras vac&iacute;as.";
 answers[34] = choices[34][3];
 units[34] = "96";
 comments[34] = "Id Pregunta: 4414. NULL";


//  Id pregunta: 4472 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Seg&uacute;n M&eacute;trica V3 &iquest;Donde comenzar&iacute;a el establecimiento del plan de aseguramiento de calidad?";
 choices[35]= new Array();
 choices[35][0] = "En el estudio de viabilidad del sistema.";
 choices[35][1] = "En el proceso de dise&ntilde;o.";
 choices[35][2] = "A la hora de la aceptaci&oacute;n del sistema.";
 choices[35][3] = "Una vez finalizado el mantenimiento del sistema de informaci&oacute;n.";
 answers[35] = choices[35][0];
 units[35] = "86";
 comments[35] = "Id Pregunta: 4472. NULL";


//  Id pregunta: 4517 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  &iquest;Qu&eacute; es un almac&eacute;n de datos?";
 choices[36]= new Array();
 choices[36][0] = "Un sistema de almacenamiento masivo en discos RAID.";
 choices[36][1] = "Una base de datos OLTP.";
 choices[36][2] = "Un repositorio de informaci&oacute;n recopilada de distintas fuentes.";
 choices[36][3] = "Un sistema de almacenamiento innovador que viene integrado en el paquete de Suse&shy;Linux.";
 answers[36] = choices[36][2];
 units[36] = "81";
 comments[36] = "Id Pregunta: 4517. ";


//  Id pregunta: 4608 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;En cual de las siguientes fases del modelo de ciclo de vida de un proyecto de tecnolog&iacute;as de Ia informaci&oacute;n se asignan los recursos materiales para cada una de las funciones?";
 choices[37]= new Array();
 choices[37][0] = "fase de definici&oacute;n";
 choices[37][1] = "fase de dise&ntilde;o";
 choices[37][2] = "fase de construccion";
 choices[37][3] = "fase de operaci&oacute;n";
 answers[37] = choices[37][1];
 units[37] = "76";
 comments[37] = "Id Pregunta: 4608. ";


//  Id pregunta: 4737 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Cual es el primer criterio de calidad del Modelo EFQM?";
 choices[38]= new Array();
 choices[38][0] = "Liderazgo";
 choices[38][1] = "Oportunidad";
 choices[38][2] = "Satisfacci&oacute;n del cliente";
 choices[38][3] = "Satisfacer los requisitos";
 answers[38] = choices[38][0];
 units[38] = "92";
 comments[38] = "Id Pregunta: 4737. Examen 2006 JCYL";


//  Id pregunta: 5139 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Qu&eacute; tipos de herramientas CASE son las que tienen las capacidades de control de versiones, trazabilidad de requisitos y an&aacute;lisis de impacto?";
 choices[39]= new Array();
 choices[39][0] = "Las herramientas de prueba.";
 choices[39][1] = "Las herramientas de gesti&oacute;n de configuraci&oacute;n.";
 choices[39][2] = "Las herramientas de an&aacute;lisis y dise&ntilde;o.";
 choices[39][3] = "Las herramientas de pantallas.";
 answers[39] = choices[39][1];
 units[39] = "79";
 comments[39] = "Id Pregunta: 5139. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5140 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Seg&uacute;n M&eacute;trica V3, &iquest;dentro de qu&eacute; perfil de participantes se encuentra recogido el Grupo de Aseguramiento de Calidad?";
 choices[40]= new Array();
 choices[40][0] = "Jefe de Proyecto.";
 choices[40][1] = "Programador.";
 choices[40][2] = "Analista.";
 choices[40][3] = "Consultor.";
 answers[40] = choices[40][2];
 units[40] = "86";
 comments[40] = "Id Pregunta: 5140. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5146 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Seg&uacute;n M&eacute;trica V3, &iquest;Cu&aacute;l de los siguientes procesos NO est&aacute; incluido en el proceso de Desarrollo de Sistemas de Informaci&oacute;n?";
 choices[41]= new Array();
 choices[41][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[41][1] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[41][2] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n (PSI)";
 choices[41][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[41] = choices[41][2];
 units[41] = "86";
 comments[41] = "Id Pregunta: 5146. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5151 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  En un dise&ntilde;o de Software es deseable que exista entre los distintos m&oacute;dulos que lo componen:";
 choices[42]= new Array();
 choices[42][0] = "Un acoplamiento m&aacute;ximo y una cohesi&oacute;n m&aacute;xima.";
 choices[42][1] = "Un acoplamiento m&iacute;nimo y una cohesi&oacute;n m&iacute;nima.";
 choices[42][2] = "Un acoplamiento m&iacute;nimo y una cohesi&oacute;n m&aacute;xima.";
 choices[42][3] = "Un acoplamiento m&aacute;ximo y una cohesi&oacute;n m&iacute;nima.";
 answers[42] = choices[42][2];
 units[42] = "84";
 comments[42] = "Id Pregunta: 5151. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5178 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  La t&eacute;cnica PIECES define las categor&iacute;as que deben estudiar conjuntamente el analista y el usuario. &iquest;Cu&aacute;l no es un conjunto valido de categor&iacute;as seg&uacute;n PIECES?";
 choices[43]= new Array();
 choices[43][0] = "Rendimiento, Econom&iacute;a y Control";
 choices[43][1] = "Control, Eficiencia y Servicios";
 choices[43][2] = "Informaci&oacute;n, Eficiencia y Servicios";
 choices[43][3] = "Informaci&oacute;n, Precio y Rendimiento";
 answers[43] = choices[43][3];
 units[43] = "78";
 comments[43] = "Id Pregunta: 5178. ";


//  Id pregunta: 5207 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Los costes de calidad se pueden dividir en costes asociados con la prevenci&oacute;n, la evaluaci&oacute;n y los fallos. Entre los costes de prevenci&oacute;n se incluyen:";
 choices[44]= new Array();
 choices[44][0] = "Planificaci&oacute;n de la calidad";
 choices[44][1] = "Calibrado y mantenimiento del equipo";
 choices[44][2] = "Reparaci&oacute;n";
 choices[44][3] = "An&aacute;lisis de las modalidades de fallos";
 answers[44] = choices[44][0];
 units[44] = "87";
 comments[44] = "Id Pregunta: 5207. NULL";


//  Id pregunta: 5213 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  El Marco Europeo de Interoperabilidad 2.0 se construye sobre la base de 12 principios. Indicar cu&aacute;l de los siguientes no es uno de ellos:";
 choices[45]= new Array();
 choices[45][0] = "Multiling&uuml;ismo";
 choices[45][1] = "Seguridad y privacidad";
 choices[45][2] = "Subsidiariedad y proporcionalidad";
 choices[45][3] = "Cooperaci&oacute;n intergubernamental";
 answers[45] = choices[45][3];
 units[45] = "30";
 comments[45] = "Id Pregunta: 5213. NULL";


//  Id pregunta: 5217 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En qu&eacute; actividad de proceso An&aacute;lisis del Sistema de Informaci&oacute;n participan los &quot;Usuarios expertos&quot;";
 choices[46]= new Array();
 choices[46][0] = "Elaboraci&oacute;n del modelo de procesos";
 choices[46][1] = "Elaboraci&oacute;n del modelo de datos";
 choices[46][2] = "An&aacute;lisis de los casos de uso";
 choices[46][3] = "Definici&oacute;n del sistema";
 answers[46] = choices[46][1];
 units[46] = "86";
 comments[46] = "Id Pregunta: 5217. NULL";


//  Id pregunta: 5226 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  En relaci&oacute;n al modelo de ciclo de vida de un sistema de informaci&oacute;n NO se puede afirmar:";
 choices[47]= new Array();
 choices[47][0] = "Es el conjunto etapas por las que atraviesa el sistema desde su concepci&oacute;n hasta su retirada del servicio";
 choices[47][1] = "Los modelos de ciclo de vida tradicionales, entre los que se engloban el modelo en cascada y los basados en prototipos, son los de m&aacute;s amplia utilizaci&oacute;n";
 choices[47][2] = "Los modelos de ciclo vida basados en transformaciones se adaptan bien a cualquier proyecto.";
 choices[47][3] = "En la pr&aacute;ctica no se suelen seguir modelos en forma pura, sino los que de acuerdo a las peculiaridades del sistema y la experiencia del jefe proyecto se pueden incorporar aspectos de otros modelos.";
 answers[47] = choices[47][2];
 units[47] = "76";
 comments[47] = "Id Pregunta: 5226. ";


//  Id pregunta: 5230 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  No es cierto respecto al prototipado evolutivo:";
 choices[48]= new Array();
 choices[48][0] = "Responde al enunciado &quot;no s&eacute; lo que quiero pero cuando vea algo te lo digo&quot;";
 choices[48][1] = "En este modelo no se asume que los requisitos vayan a cambiar continuamente desde el principio.";
 choices[48][2] = "Se construye una implementaci&oacute;n parcial de los requisitos conocidos, para que el usuario comprenda mejor la totalidad de los requisitos deseados";
 choices[48][3] = "Est&aacute; relacionado con el concepto de Desarrollo R&aacute;pido de Aplicaciones (RAD)";
 answers[48] = choices[48][1];
 units[48] = "76";
 comments[48] = "Id Pregunta: 5230. ";


//  Id pregunta: 5237 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Se&ntilde;ale la opci&oacute;n incorrecta en relaci&oacute;n del Desarrollo Software Basado en Componentes(DSBC):";
 choices[49]= new Array();
 choices[49][0] = "Entre las ventajas del DSBC no se encuentra la reducci&oacute;n de tiempos y costes de desarrollo";
 choices[49][1] = "Su enfoque consiste en configurar y especializar componentes de software ya existentes.";
 choices[49][2] = "Estos componentes son los conocidos COTS (Commercial off-the-self) ";
 choices[49][3] = "Los productos COTS presentan problemas espec&iacute;ficos como incompatibilidad,falta de fuentes, cambio de versiones o esfuerzo de aprendizaje";
 answers[49] = choices[49][0];
 units[49] = "76";
 comments[49] = "Id Pregunta: 5237. ";


//  Id pregunta: 5255 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Acorde al modelo de calidad de McCall NO es un factor de calidad con caracter&iacute;sticas de explotaci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Fiabilidad ";
 choices[50][1] = "Extensibilidad";
 choices[50][2] = "Correcci&oacute;n ";
 choices[50][3] = "Integridad";
 answers[50] = choices[50][1];
 units[50] = "88";
 comments[50] = "Id Pregunta: 5255. NULL";


//  Id pregunta: 5259 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  La m&eacute;trica BANG:";
 choices[51]= new Array();
 choices[51][0] = "Es una m&eacute;trica de producto propuesta por De Marco, como indicador de funcionalidad entregada al usuario";
 choices[51][1] = "La medici&oacute;n se realiza sobre una especificaci&oacute;n de requisitos documentada mediante an&aacute;lisis estructurado y DFD";
 choices[51][2] = "Para formular esta m&eacute;trica se analizan las m&eacute;tricas primitivas, basadas en los elementos del DFD, del diccionario de datos y del modelo de datos";
 choices[51][3] = "Todas son correctas.";
 answers[51] = choices[51][3];
 units[51] = "88";
 comments[51] = "Id Pregunta: 5259. NULL";


//  Id pregunta: 5529 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indicar cu&aacute;l de las siguientes son t&eacute;cnicas basadas en la comparaci&oacute;n de patrones para el reconocimiento de la voz";
 choices[52]= new Array();
 choices[52][0] = "Programaci&oacute;n din&aacute;mica o DTW (Dynamic Time Warping)";
 choices[52][1] = "Modelos ocultos de Markov o HMM (Hidden Markov Models)";
 choices[52][2] = "Las respuestas a) y b) son verdaderas";
 choices[52][3] = "Ninguna es verdadera";
 answers[52] = choices[52][2];
 units[52] = "94";
 comments[52] = "Id Pregunta: 5529. ";


//  Id pregunta: 5537 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  En los sistemas de recuperaci&oacute;n de informaci&oacute;n full text &iquest;qu&eacute; operaciones son v&aacute;lidas para reducir el conjunto de palabras clave?";
 choices[53]= new Array();
 choices[53][0] = "Eliminiaci&oacute;n de palabras vac&iacute;as (stop words)";
 choices[53][1] = "Identificaci&oacute;n de la ra&iacute;z gramatical (stemming)";
 choices[53][2] = "Compresi&oacute;n de los conjuntos de palabras obtenidos";
 choices[53][3] = "Todas las anteriores son operaciones v&aacute;lidas";
 answers[53] = choices[53][3];
 units[53] = "96";
 comments[53] = "Id Pregunta: 5537. NULL";


//  Id pregunta: 5993 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes funciones NO es competencia del Consejo Superior de Administraci&oacute;n Electr&oacute;nica?";
 choices[54]= new Array();
 choices[54][0] = "Actuar como Observatorio de la Administraci&oacute;n Electr&oacute;nica.";
 choices[54][1] = "La colaboraci&oacute;n con el Centro Criptol&oacute;gico Nacional del Centro Nacional de Inteligencia en la elaboraci&oacute;n de medidas de seguridad.";
 choices[54][2] = "El control, regulaci&oacute;n y supervisi&oacute;n de los proveedores de accesos a Internet de la Administraci&oacute;n General del Estado.";
 choices[54][3] = "El impulso y la coordinaci&oacute;n de la Administraci&oacute;n Electr&oacute;nica en el seno de la Administraci&oacute;n General del Estado.";
 answers[54] = choices[54][2];
 units[54] = "77";
 comments[54] = "Id Pregunta: 5993. TIC A 2009";


//  Id pregunta: 6060 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El modelo de capacidad y madurez (CMM, Capability Maturity Model) agrupa las &aacute;reas de proceso en 5 niveles de madurez, que son los siguientes:";
 choices[55]= new Array();
 choices[55][0] = "Inicial, repetible, definido, gestionado y optimizado.";
 choices[55][1] = "Inicial, repetible, eficaz, eficiente y optimizado.";
 choices[55][2] = "Inicial, definido, medido, adaptado y optimizado.";
 choices[55][3] = "Inicial, repetible, comprometido, gestionado y optimizado.";
 answers[55] = choices[55][0];
 units[55] = "27";
 comments[55] = "Id Pregunta: 6060. TIC A 2009";


//  Id pregunta: 6112 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Un diagrama de transici&oacute;n de estados:";
 choices[56]= new Array();
 choices[56][0] = "Describe el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;.";
 choices[56][1] = "Es un tipo de diagrama de interacci&oacute;n cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n haciendo &eacute;nfasis en la secuencia de los mensajes intercambiados por los objetos.";
 choices[56][2] = "Consiste en la descomposici&oacute;n sucesiva de los procesos, desde un nivel general, hasta llegar al nivel de detalle necesario para reflejar toda la sem&aacute;ntica que debe soportar el sistema en estudio.";
 choices[56][3] = "Representa los estados que puede tomar un componente o un sistema y muestra los eventos que implican el cambio de un estado a otro.";
 answers[56] = choices[56][3];
 units[56] = "82";
 comments[56] = "Id Pregunta: 6112. TIC A 2009";


//  Id pregunta: 6178 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Se&ntilde;ale la informaci&oacute;n falsa sobre AJAX:";
 choices[57]= new Array();
 choices[57][0] = "Las aplicaciones desarrolladas con AJAX usan Javascript y XML.";
 choices[57][1] = "Las aplicaciones desarrolladas con AJAX tienen una mejor experiencia de usuario.";
 choices[57][2] = "AJAX es la base de las Rich Internet Applications.";
 choices[57][3] = "Las aplicaciones AJAX son de tipo pull.";
 answers[57] = choices[57][3];
 units[57] = "69";
 comments[57] = "Id Pregunta: 6178. NULL";


//  Id pregunta: 6212 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Se&ntilde;ale la sentencia correcta:";
 choices[58]= new Array();
 choices[58][0] = "La complejidad ciclom&aacute;tica es una m&eacute;trica del software que proporciona una medici&oacute;n cualitativa de la complejidad l&oacute;gica de un programa";
 choices[58][1] = "Si se usa la complejidad ciclom&aacute;tica en el contexto del m&eacute;todo de prueba del camino b&aacute;sico, el valor calculado como complejidad ciclom&aacute;tica define el n&uacute;mero de caminos dependientes del conjunto b&aacute;sico de un programa";
 choices[58][2] = "En las pruebas del camino b&aacute;sico, los casos de prueba obtenidos del conjunto b&aacute;sico garantizan que durante la prueba se ejecuta una sola vez cada sentencia del programa";
 choices[58][3] = "Dentro de la prueba del camino b&aacute;sico, un camino independiente est&aacute; constituido por lo menos por una arista que no haya sido recorrida anteriormente a la definici&oacute;n del camino";
 answers[58] = choices[58][3];
 units[58] = "88";
 comments[58] = "Id Pregunta: 6212. TICB-2009, bloque desarrollo";


//  Id pregunta: 6228 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Entre las metodolog&iacute;as &aacute;giles de desarrollo de software no se encuentra:";
 choices[59]= new Array();
 choices[59][0] = "Adaptive Software Development (ASD)";
 choices[59][1] = "Merisse";
 choices[59][2] = "EXtreme Programming (XP)";
 choices[59][3] = "Feature Driven Development (FDD)";
 answers[59] = choices[59][1];
 units[59] = "79";
 comments[59] = "Id Pregunta: 6228. TICB-2009, bloque desarrollo";


//  Id pregunta: 6251 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[60]= new Array();
 choices[60][0] = "Las pruebas de caja blanca se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[60][1] = "Las pruebas de caja blanca son pruebas de Sistema";
 choices[60][2] = "Las pruebas de caja negra se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[60][3] = "Las pruebas de caja negra son pruebas de Regresi&oacute;n";
 answers[60] = choices[60][0];
 units[60] = "87";
 comments[60] = "Id Pregunta: 6251. TICB-2009, bloque desarrollo";


//  Id pregunta: 6305 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Qu&eacute; caracter&iacute;sticas se exige a un sistema OLTP?";
 choices[61]= new Array();
 choices[61][0] = "Capacidad del sistema para recuperar r&aacute;pidamente su funcionamiento en caso de fallo.";
 choices[61][1] = "Los efectos de una transacci&oacute;n no deben ser observables por ninguna otra transacci&oacute;n hasta que la transacci&oacute;n originaria haya concluido.";
 choices[61][2] = "Si una transacci&oacute;n resulta abortada, debe restituirse el anterior estado v&aacute;lido de los datos.";
 choices[61][3] = "Todas las anteriores.";
 answers[61] = choices[61][3];
 units[61] = "83";
 comments[61] = "Id Pregunta: 6305. ";


//  Id pregunta: 6472 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Qu&eacute; elementos de los siguientes NO pertenece a los diagramas de casos de uso?";
 choices[62]= new Array();
 choices[62][0] = "Interfaces.";
 choices[62][1] = "Actor.";
 choices[62][2] = "Paquete.";
 choices[62][3] = "Relaci&oacute;n.";
 answers[62] = choices[62][0];
 units[62] = "84";
 comments[62] = "Id Pregunta: 6472. Castilla La Mancha 2009";


//  Id pregunta: 6528 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Un elemento de configuraci&oacute;n";
 choices[63]= new Array();
 choices[63][0] = "Es un componente de una infraestructura que est&aacute; o estar&aacute; bajo el control de la Gesti&oacute;n de la Configuraci&oacute;n";
 choices[63][1] = "Un sistema completo";
 choices[63][2] = "Un componente software menor";
 choices[63][3] = "Todas las respuestas anteriores son correctas";
 answers[63] = choices[63][3];
 units[63] = "98";
 comments[63] = "Id Pregunta: 6528. NULL";


//  Id pregunta: 6531 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  La Resoluci&oacute;n del 6 de Febrero de 2006 sobre calidad de los servicios en la Administraci&oacute;n, fija distintos programas de actuaci&oacute;n, &iquest;cu&aacute;l de los siguientes no es uno de ellos?";
 choices[64]= new Array();
 choices[64][0] = "Programa de Cartas de Servicio";
 choices[64][1] = "Programa de Evaluaci&oacute;n de la calidad de las organizaciones";
 choices[64][2] = "Programa de Quejas y Sugerencias";
 choices[64][3] = "Programa de Implantaci&oacute;n de la Calidad";
 answers[64] = choices[64][3];
 units[64] = "87";
 comments[64] = "Id Pregunta: 6531. NULL";


//  Id pregunta: 7306 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Indique cu&aacute;l de los siguientes acr&oacute;nimos se refiere a un formato de gram&aacute;ticas para reconocimiento autom&aacute;tico del habla:";
 choices[65]= new Array();
 choices[65][0] = "JSGF";
 choices[65][1] = "SRGS";
 choices[65][2] = "Ninguno de los dos es un formato de gram&aacute;ticas";
 choices[65][3] = "Los dos son formatos de gram&aacute;ticas";
 answers[65] = choices[65][3];
 units[65] = "94";
 comments[65] = "Id Pregunta: 7306. NULL";


//  Id pregunta: 8203 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Seg&uacute;n Pressman, una revisi&oacute;n t&eacute;cnica formal es: ";
 choices[66]= new Array();
 choices[66][0] = "Una reuni&oacute;n.";
 choices[66][1] = "Un producto del desarrollo.";
 choices[66][2] = "Un documento.";
 choices[66][3] = "La aceptaci&oacute;n del sistema. ";
 answers[66] = choices[66][0];
 units[66] = "87";
 comments[66] = "Id Pregunta: 8203. Examen TIC A1 2010";


//  Id pregunta: 8331 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Con qu&eacute; nombre se conoce a las herramientas CASE adaptables que permiten la definici&oacute;n de nuestra propia t&eacute;cnica de modelado,pudiendo definir nuestros propios elementos y s&iacute;mbolos de las notaciones a utilizar?";
 choices[67]= new Array();
 choices[67][0] = "Upper CASE (U-CASE)";
 choices[67][1] = "MetaCASE";
 choices[67][2] = "CAST (Computer-Aided Software Testing)";
 choices[67][3] = "IPSE (Integrated Programming Support Environment)";
 answers[67] = choices[67][1];
 units[67] = "91";
 comments[67] = "Id Pregunta: 8331. Examen TIC A2 2010";


//  Id pregunta: 8339 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;En qu&eacute; se diferencian JRP y JAD?";
 choices[68]= new Array();
 choices[68][0] = "El JRP es una t&eacute;cnica de estimaci&oacute;n y el JAD es una t&eacute;cnica de captura de requisitos.";
 choices[68][1] = "El JRP es un modelo de cido de vida utilizado en el desarrollo de aplicaciones mientras que el JAD es una IDE (Integrated Development Environment) empleada en JAVA.";
 choices[68][2] = "Son distintas herramientas que permiten la gesti&oacute;n de la configuraci&oacute;n del software.";
 choices[68][3] = "Son sesiones de trabajos que permiten identificar los requisitos de un sistema. Se diferencian en los perfiles que act&uacute;an en ellas y en los resultados de &eacute;stas.";
 answers[68] = choices[68][3];
 units[68] = "86";
 comments[68] = "Id Pregunta: 8339. Examen TIC A2 2010";


//  Id pregunta: 8340 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Qu&eacute; tipo de diagrama permite representar un algoritmo?";
 choices[69]= new Array();
 choices[69][0] = "Diagrama de Clases.";
 choices[69][1] = "Flujograma de Sistemas.";
 choices[69][2] = "Flujograma de Programas.";
 choices[69][3] = "Diagrama de Flujo de Datos.";
 answers[69] = choices[69][2];
 units[69] = "86";
 comments[69] = "Id Pregunta: 8340. Examen TIC A2 2010";


//  Id pregunta: 8359 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  En el proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (seg&uacute;n M&eacute;trica v3), &iquest;qu&eacute; acci&oacute;n realiza el grupo de Aseguramiento de la Calidad en relaci&oacute;n a1 Plan de Pruebas?";
 choices[70]= new Array();
 choices[70][0] = "Define su contenido.";
 choices[70][1] = "Revisa los resultados de pruebas ejecutadas en este proceso.";
 choices[70][2] = "Revisa la existencia de una normativa para la gesti&oacute;n de los resultados de las pruebas, que permita constatar que se han realizado y descubrir las diferencias entre los resultados esperados y los obtenidos.";
 choices[70][3] = "Coordina su realizaci&oacute;n para que cumplan en su definici&oacute;n los crltenos establecidos en el plan de aseguramiento de calidad.";
 answers[70] = choices[70][2];
 units[70] = "86";
 comments[70] = "Id Pregunta: 8359. Examen TIC A2 2010";


//  Id pregunta: 8394 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes diagramas NO aparece recogido en UML?";
 choices[71]= new Array();
 choices[71][0] = "Diagrama de secuencia.";
 choices[71][1] = "Diagrama de actividades.";
 choices[71][2] = "Diagrama de estados.";
 choices[71][3] = "Diagrama de perspectiva.";
 answers[71] = choices[71][3];
 units[71] = "84";
 comments[71] = "Id Pregunta: 8394. Examen TIC A2 2010";


//  Id pregunta: 8633 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica v3?";
 choices[72]= new Array();
 choices[72][0] = "Perfil Jefe de Proyecto.";
 choices[72][1] = "Perfil Consultor.";
 choices[72][2] = "Perfil Analista.";
 choices[72][3] = "Perfil Programador.";
 answers[72] = choices[72][0];
 units[72] = "86";
 comments[72] = "Id Pregunta: 8633. Examen TIC A2 2010 interna";


//  Id pregunta: 8636 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  El proceso de desarrollo de M&eacute;trica v3 contiene todas las actividades y tareas que se deben llevar a cabo para:";
 choices[73]= new Array();
 choices[73][0] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta la instalaci&oacute;n del software.";
 choices[73][1] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis del sistema hasta la construcci&oacute;n del software.";
 choices[73][2] = "Desarrollar un sistema, cubriendo desde el dise&ntilde;o hasta la construcci&oacute;n del software.";
 choices[73][3] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta el mantenimiento del software.";
 answers[73] = choices[73][0];
 units[73] = "86";
 comments[73] = "Id Pregunta: 8636. Examen TIC A2 2010 interna";


//  Id pregunta: 8763 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En el contexto de los lenguajes de programaci&oacute;n orientados a objetos, cuando un objeto recibe de otro objeto o aplicaci&oacute;n una notificaci&oacute;n, ha recibido un:";
 choices[74]= new Array();
 choices[74][0] = "Evento.";
 choices[74][1] = "Comando.";
 choices[74][2] = "Protocolo.";
 choices[74][3] = "Orden.";
 answers[74] = choices[74][0];
 units[74] = "82, 84";
 comments[74] = "Id Pregunta: 8763. Examen TIC A2 2010 interna";


//  Id pregunta: 9441 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto del patr&oacute;n de dise&ntilde;o MVC (Modelo, Vista, Controlador):";
 choices[75]= new Array();
 choices[75][0] = "A pesar de su amplia difusi&oacute;n con las arquitecturas Web, naci&oacute; en la d&eacute;cada de los sesenta.";
 choices[75][1] = "Los componentes que se encargan de la l&oacute;gica de negocio forman parte del Modelo.";
 choices[75][2] = "La Vista variar&aacute; inevitablemente al variar el Modelo.";
 choices[75][3] = "El patr&oacute;n de dise&ntilde;o MVC es un modo de dividir la funcionalidad de un componente de forma ordenada.";
 answers[75] = choices[75][1];
 units[75] = "82";
 comments[75] = "Id Pregunta: 9441. Examen AGE TIC A1 2011";


//  Id pregunta: 9459 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Qu&eacute; es el acoplamiento entre m&oacute;dulos?:";
 choices[76]= new Array();
 choices[76][0] = "Fan-in.";
 choices[76][1] = "Fan-out.";
 choices[76][2] = "Grado de interdependencia entre m&oacute;dulos.";
 choices[76][3] = "N&uacute;mero de clases repetidas en los dos m&oacute;dulos.";
 answers[76] = choices[76][2];
 units[76] = "84";
 comments[76] = "Id Pregunta: 9459. NULL";


//  Id pregunta: 9462 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes diagramas contempla UML 2.0?";
 choices[77]= new Array();
 choices[77][0] = "De actividad, DFD, de casos de uso, de secuencia, de comunicaci&oacute;n.";
 choices[77][1] = "De casos de uso, de actividad, de secuencia, de comunicaci&oacute;n, de clases.";
 choices[77][2] = "De casos de uso, entidad-relaci&oacute;n, de secuencia, de clases, de comunicaci&oacute;n.";
 choices[77][3] = "De clases, de herencia compuesta, de secuencia, de comunicaci&oacute;n, de clases.";
 answers[77] = choices[77][1];
 units[77] = "84";
 comments[77] = "Id Pregunta: 9462. NULL";


//  Id pregunta: 9653 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  El modelo de calidad ISO 9126 tiene:";
 choices[78]= new Array();
 choices[78][0] = "27 caracter&iacute;sticas y 6 subcaracter&iacute;sticas";
 choices[78][1] = "6 caracter&iacute;sticas y 28 subcaracter&iacute;sticas";
 choices[78][2] = "7 caracter&iacute;sticas y 26 subcaracter&iacute;sticas";
 choices[78][3] = "6 caracter&iacute;sticas y 27 subcaracter&iacute;sticas";
 answers[78] = choices[78][3];
 units[78] = "87";
 comments[78] = "Id Pregunta: 9653. NULL";


//  Id pregunta: 9902 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Los puntos de fijaci&oacute;n (anchor points) son caracter&iacute;sticos en el modelo de desarrollo:";
 choices[79]= new Array();
 choices[79][0] = "En cascada.";
 choices[79][1] = "Basado en prototipos.";
 choices[79][2] = "En espiral WINWIN.";
 choices[79][3] = "RAD.";
 answers[79] = choices[79][2];
 units[79] = "76";
 comments[79] = "Id Pregunta: 9902. TIC A2, Examen 2013";


//  Id pregunta: 9947 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;A qu&eacute; perfil de M&eacute;trica v3 pertenece el Responsable de Mantenimiento?";
 choices[80]= new Array();
 choices[80][0] = "Jefe de Proyecto";
 choices[80][1] = "Consultor";
 choices[80][2] = "Analista";
 choices[80][3] = "Programador";
 answers[80] = choices[80][0];
 units[80] = "86";
 comments[80] = "Id Pregunta: 9947. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9965 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA respecto al lenguaje de programaci&oacute;n C# de la  plataforma .NET?";
 choices[81]= new Array();
 choices[81][0] = "En C# una clase puede heredar directamente de una sola clase primaria pero puede implementar cualquier n&uacute;mero de interfaces.";
 choices[81][1] = "C# no admite la aritm&eacute;tica con punteros de manera predeterminada, sin embargo, si utiliza la palabra clave unsafe, puede definir un contexto no seguro en el que se pueden utilizar punteros";
 choices[81][2] = "Los programas en C# pueden constar de uno o varios archivos, y cada archivo puede contener cero o varios espacios de nombres (namespaces).";
 choices[81][3] = "Un espacio de nombres (namespace) puede contener tipos tales como clases (classes), estructuras (structs), interfaces (interfaces), enumeraciones (enumerations) y delegados (delegates), pero no puede contener otros espacios de nombres (namespaces).";
 answers[81] = choices[81][3];
 units[81] = "59,115";
 comments[81] = "Id Pregunta: 9965. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10089 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l NO es un producto de la metodolog&iacute;a SCRUM?";
 choices[82]= new Array();
 choices[82][0] = "Product backlog";
 choices[82][1] = "Sprint";
 choices[82][2] = "Burn down chart";
 choices[82][3] = "Sprint backlog";
 answers[82] = choices[82][1];
 units[82] = "79";
 comments[82] = "Id Pregunta: 10089. NULL";


//  Id pregunta: 10103 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Qu&eacute; tipo de flujos de datos no existen?";
 choices[83]= new Array();
 choices[83][0] = "Flujos discretos y continuos";
 choices[83][1] = "Flujos de consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[83][2] = "Flujo de control";
 choices[83][3] = "Existen todos los tipos de flujos anteriores";
 answers[83] = choices[83][3];
 units[83] = "81";
 comments[83] = "Id Pregunta: 10103. NULL";


//  Id pregunta: 10192 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Qu&eacute; es PDF-417?";
 choices[84]= new Array();
 choices[84][0] = "Una especificaci&oacute;n de c&oacute;digo de barras de dos dimensiones";
 choices[84][1] = "Un formato de archivo para el archivo a largo plazo de documentos electr&oacute;nicos";
 choices[84][2] = "Una t&eacute;cnica de compresi&oacute;n sin p&eacute;rdidas basada en codificaci&oacute;n de trellis";
 choices[84][3] = "Una tecnolog&iacute;a repogr&aacute;fica de impresi&oacute;n de alta calidad";
 answers[84] = choices[84][0];
 units[84] = "94";
 comments[84] = "Id Pregunta: 10192. ";


//  Id pregunta: 10515 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de las siguientes respuestas NO se emplea para realizar pruebas de carga?";
 choices[85]= new Array();
 choices[85][0] = "Jmeter";
 choices[85][1] = "Loadrunner";
 choices[85][2] = "Grinder";
 choices[85][3] = "Turbine";
 answers[85] = choices[85][3];
 units[85] = "86";
 comments[85] = "Id Pregunta: 10515. TIC A2, libre, examen 2013";


//  Id pregunta: 10817 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Una pr&aacute;ctica frecuente asociada al modelo de Proceso Unificado de Desarrollo es el &quot;timeboxing&quot;, &iquest;en qu&eacute; consiste?";
 choices[86]= new Array();
 choices[86][0] = "Enfoque para identificar casos de uso y determinar el nivel de granularidad apropiado.";
 choices[86][1] = "Modelo de planificaci&oacute;n adaptativa para ganar tiempo.";
 choices[86][2] = "Asignaci&oacute;n de un periodo de tiempo fijo para la ejecuci&oacute;n de una iteraci&oacute;n.";
 choices[86][3] = "Utilizar casos de usos temporales para captar requisitos funcionales.";
 answers[86] = choices[86][2];
 units[86] = "79";
 comments[86] = "Id Pregunta: 10817. Examen GSI 2014";


//  Id pregunta: 10818 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  En el modelo de proceso Scrum para desarrollo &aacute;gil de sistemas software, &iquest;qu&eacute; es el backlog de producto?";
 choices[87]= new Array();
 choices[87][0] = "La lista detallada de requisitos seleccionados para implementaci&oacute;n en un Sprint.";
 choices[87][1] = "Un gr&aacute;fico que muestra el trabajo pendiente en un Sprint.";
 choices[87][2] = "La lista priorizada de requisitos de alto nivel pendientes de implementaci&oacute;n.";
 choices[87][3] = "La tabla con los requisitos ya implementados.";
 answers[87] = choices[87][2];
 units[87] = "79";
 comments[87] = "Id Pregunta: 10818. Examen GSI 2014";


//  Id pregunta: 10932 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  En el modelo CMMI, el &aacute;rea de proceso &quot;An&aacute;lisis causal y resoluci&oacute;n&quot; se encuentra en el nivel de madurez:";
 choices[88]= new Array();
 choices[88][0] = "Nivel 2 - Gestionado.";
 choices[88][1] = "Nivel 5 - Optimizaci&oacute;n.";
 choices[88][2] = "Nivel 4 - Gestionado cuantitativamente.";
 choices[88][3] = "Nivel 3 - Definido.";
 answers[88] = choices[88][1];
 units[88] = "87";
 comments[88] = "Id Pregunta: 10932. TIC A1 AGE 2014";


//  Id pregunta: 10975 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica 3, el Plan de Sistemas de Informaci&oacute;n:";
 choices[89]= new Array();
 choices[89][0] = "Incluye la evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los pr&oacute;ximos cinco a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos.";
 choices[89][1] = "La perspectiva del plan debe ser estrat&eacute;gica, operativa y tecnol&oacute;gica.";
 choices[89][2] = "El nivel de detalle con el que se har&aacute; el estudio de la situaci&oacute;n actual no depende de la existencia de documentaci&oacute;n.";
 choices[89][3] = "Para su elaboraci&oacute;n se estudian las necesidades de informaci&oacute;n de los procesos afectados con el fin de definir requisitos generales y obtener modelos conceptuales de informaci&oacute;n.";
 answers[89] = choices[89][3];
 units[89] = "86";
 comments[89] = "Id Pregunta: 10975. TIC A1 AGE 2014";


//  Id pregunta: 11056 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l NO es una caracter&iacute;stica general de Scrum?";
 choices[90]= new Array();
 choices[90][0] = "Durante cada sprint el equipo crea un incremento de software potencialmente entregable";
 choices[90][1] = "Cada sprint dura de media entre 6 y 12 meses";
 choices[90][2] = "Los elementos del Product Backlog que forman parte del sprint se determinan durante la reuni&oacute;n de Sprint Planning";
 choices[90][3] = "Todas son caracter&iacute;sticas generales de Scrum";
 answers[90] = choices[90][1];
 units[90] = "79";
 comments[90] = "Id Pregunta: 11056. Cada sprint suele durar de 15 a 30 d&iacute;as";


//  Id pregunta: 11085 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes pasos NO corresponde al modelo de Mejora Continua del Servicio (CSI)?";
 choices[91]= new Array();
 choices[91][0] = "&iquest;Cual es la visi&oacute;n?";
 choices[91][1] = "&iquest;C&oacute;mo llegamos?";
 choices[91][2] = "&iquest;Hay presupuesto?";
 choices[91][3] = "&iquest; D&oacute;nde estamos ahora?";
 answers[91] = choices[91][2];
 units[91] = "98";
 comments[91] = "Id Pregunta: 11085. ";


//  Id pregunta: 11154 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En un an&aacute;lisis DAFO previo a la definici&oacute;n de la estrategia de una organizaci&oacute;n, &iquest;qu&eacute; son las debilidades?";
 choices[92]= new Array();
 choices[92][0] = "Aspectos que limitan o reducen la capacidad de desarrollo efectivo de la estrategia de la organizaci&oacute;n  y deben, por tanto, ser controladas y superadas.";
 choices[92][1] = "Todo aquello que pueda representar una posibilidad para mejorar la rentabilidad de la misma o aumentar la cifra de sus negocios.";
 choices[92][2] = "Toda fuerza del entorno que puede impedir la implantaci&oacute;n de una estrategia, o bien reducir su efectividad, o incrementar los riesgos de la misma,";
 choices[92][3] = "Todos aquellos aspectos de la organizaci&oacute;n que no son ventajas competitivas respecto a los competidores en un mismo mercado";
 answers[92] = choices[92][0];
 units[92] = "77";
 comments[92] = "Id Pregunta: 11154. ";


//  Id pregunta: 11155 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  A la hora de tomar requisitos para dise&ntilde;ar un sistema de informaci&oacute;n &iquest;Qu&eacute; informaci&oacute;n debe registrarse obligatoriamente de cada requisito?";
 choices[93]= new Array();
 choices[93][0] = "C&oacute;digo &uacute;nico";
 choices[93][1] = "Nombre descriptivo del requisito";
 choices[93][2] = "Descripci&oacute;n detallada del requisito";
 choices[93][3] = "Todos los anteriores";
 answers[93] = choices[93][3];
 units[93] = "78";
 comments[93] = "Id Pregunta: 11155. ";


//  Id pregunta: 11339 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique la falsa en relaci&oacute;n con la familia de normas ISO 9000:2000";
 choices[94]= new Array();
 choices[94][0] = "ISO 19011 no pertenece a esta familia de normas";
 choices[94][1] = "ISO 9004 establece la gu&iacute;a para la mejora continua";
 choices[94][2] = "ISO 9001 consta de ocho secciones";
 choices[94][3] = "ISO 9000 habla de fundamentos y vocabulario";
 answers[94] = choices[94][0];
 units[94] = "92";
 comments[94] = "Id Pregunta: 11339. ";


//  Id pregunta: 11358 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el objetivo principal del contenido del Cat&aacute;logo de Servicios?";
 choices[95]= new Array();
 choices[95][0] = "Ofrecer informaci&oacute;n sobre todos los servicios";
 choices[95][1] = "Ofrecer informaci&oacute;n confiable de los servicios operativos y en desarrollo";
 choices[95][2] = "Tener informaci&oacute;n sobre la infraestructura";
 choices[95][3] = "Analizar inversiones en servicios";
 answers[95] = choices[95][1];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11358. ";


//  Id pregunta: 11359 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes se considera actividad/es clave del proceso de la Gesti&oacute;n de Nivel de Servicio (SLM)?";
 choices[96]= new Array();
 choices[96][0] = "Entregar servicios acordados";
 choices[96][1] = "Contratar proveedores TI";
 choices[96][2] = "Negociar y monitorizar SLAs para asegurar la satisfacci&oacute;n del cliente con los servicios acordados";
 choices[96][3] = "Alinear los SLAs con las necesidades del cliente";
 answers[96] = choices[96][2];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11359. ";


//  Id pregunta: 11369 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de las siguientes actividades est&aacute;n incluidas como parte de la Transici&oacute;n del Servicio?: 1. Introducir nuevos servicios; 2. Retirar servicios; 3. Transferir servicios entre proveedores de servicios";
 choices[97]= new Array();
 choices[97][0] = "Solo 1 y 2";
 choices[97][1] = "Solo 2";
 choices[97][2] = "Todas las anteriores";
 choices[97][3] = "1 y 3";
 answers[97] = choices[97][2];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11369. ";


//  Id pregunta: 11392 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes definiciones es el mejor ejemplo de una soluci&oacute;n temporal (workaround)?";
 choices[98]= new Array();
 choices[98][0] = "Un t&eacute;cnico instala un script para redirigir la impresi&oacute;n a una impresora alternativa hasta que se pueda aplicar una soluci&oacute;n permanente";
 choices[98][1] = "Un t&eacute;cnico intenta resolver una incidencia de diferentes maneras. Una de ellas funciona aunque no sabe cu&aacute;l.";
 choices[98][2] = "Despu&eacute;s de notificar la incidencia al centro de servicio, el usuario se dedica a otras tareas mientras se identifica y resuelve el problema";
 choices[98][3] = "Un dispositivo funciona de forma intermitente, permitiendo al usuario trabajar con un rendimiento degradado mientras el t&eacute;cnico diagnostica la incidencia";
 answers[98] = choices[98][0];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11392. ";


//  Id pregunta: 11555 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El model COCOMO contempla tres modos distintos de desarrollo del software. El m&aacute;s adecuado para un proyecto de unas 300.000 instrucciones de c&oacute;digo fuente, con unos requisitos extremadamente r&iacute;gidos, es:";
 choices[99]= new Array();
 choices[99][0] = "Modo semilibre.";
 choices[99][1] = "Modo empotrado.";
 choices[99][2] = "Modo org&aacute;nico.";
 choices[99][3] = "Modo avanzado.";
 answers[99] = choices[99][1];
 units[99] = "89";
 comments[99] = "Id Pregunta: 11555. NULL";


