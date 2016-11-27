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

//  Id pregunta: 731 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Identifique cu&aacute;l de los siguientes nombres no se corresponde con la denominaci&oacute;n de alguna de las Redes Neuronales de una capa:";
 choices[0]= new Array();
 choices[0][0] = "Perceptron";
 choices[0][1] = "Adaline";
 choices[0][2] = "Art";
 choices[0][3] = "Madaline";
 answers[0] = choices[0][2];
 units[0] = "63,64";
 comments[0] = "Id Pregunta: 731. Examen TIC MAP B 2004";


//  Id pregunta: 775 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Los sistema multiagentes";
 choices[1]= new Array();
 choices[1][0] = "trabajan siempre asociados a arquitecturas de pizarra";
 choices[1][1] = "tienen un control centralizado por lo que no tienen autonom&iacute;a en los agentes";
 choices[1][2] = "cada uno de los agentes es capaz de decidir por si mismo";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = choices[1][2];
 units[1] = "63";
 comments[1] = "Id Pregunta: 775. ";


//  Id pregunta: 779 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Indique una caracter&iacute;stica del software libre:";
 choices[2]= new Array();
 choices[2][0] = "Los usuarios pueden usar el software como deseen, para lo que deseen y en tantos ordenadores como deseen";
 choices[2][1] = "Los usuarios pueden redistribuir el software a otros usuarios";
 choices[2][2] = "Los usuarios deben tener acceso al c&oacute;digo fuente, escrito generalmente en un lenguaje de alto nivel";
 choices[2][3] = "Todas las respuestas son correctas";
 answers[2] = choices[2][3];
 units[2] = "61";
 comments[2] = "Id Pregunta: 779. ";


//  Id pregunta: 814 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Apache:";
 choices[3]= new Array();
 choices[3][0] = "Es un servidor web disponible para plataformas Windows";
 choices[3][1] = "Es una licencia para software libre";
 choices[3][2] = "Es el servidor web libre m&aacute;s utilizado en sistemas Unix/Linux";
 choices[3][3] = "Todas las respuestas anteriores son correctas";
 answers[3] = choices[3][3];
 units[3] = "62";
 comments[3] = "Id Pregunta: 814. ";


//  Id pregunta: 816 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Asociados a una red sem&aacute;ntica hay 2 procedimientos que permiten proporcionar respuestas navegando por su estructura. Estos procedimientos son:";
 choices[4]= new Array();
 choices[4][0] = "Herencia e inferencia";
 choices[4][1] = "Herencia y emparejamiento";
 choices[4][2] = "Emparejamiento y equiparaci&oacute;n";
 choices[4][3] = "Equiparaci&oacute;n y herencia";
 answers[4] = choices[4][1];
 units[4] = "63";
 comments[4] = "Id Pregunta: 816. ";


//  Id pregunta: 822 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Un programa shareware:";
 choices[5]= new Array();
 choices[5][0] = "Es software que podemos utilizar libremente";
 choices[5][1] = "Es software que podemos vender libremente";
 choices[5][2] = "Es software que podemos probar libremente";
 choices[5][3] = "No existe este concepto";
 answers[5] = choices[5][2];
 units[5] = "61";
 comments[5] = "Id Pregunta: 822. ";


//  Id pregunta: 890 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;les de las siguientes son caracter&iacute;sticas de los sistemas expertos?:";
 choices[6]= new Array();
 choices[6][0] = "Conocimiento del sistema superior al del experto";
 choices[6][1] = "Procesado de informaci&oacute;n simb&oacute;lica y num&eacute;rica y capacidad de incorporar gradualmente conocimiento al sistema";
 choices[6][2] = "Funcionamiento no uniforme y de dif&iacute;cil reproducci&oacute;n";
 choices[6][3] = "Todas las anteriores";
 answers[6] = choices[6][1];
 units[6] = "64";
 comments[6] = "Id Pregunta: 890. ";


//  Id pregunta: 896 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;En qu&eacute; consiste el an&aacute;lisis multidimensional de OLAP?";
 choices[7]= new Array();
 choices[7][0] = "En analizar los mismos datos desde distintas perspectivas.";
 choices[7][1] = "En consolidar los datos por distintas trayectorias.";
 choices[7][2] = "En encontrar nuevas relaciones entre variables.";
 choices[7][3] = "Todas las respuestas anteriores son correctas.";
 answers[7] = choices[7][3];
 units[7] = "68";
 comments[7] = "Id Pregunta: 896. ";


//  Id pregunta: 929 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es ROLAP?";
 choices[8]= new Array();
 choices[8][0] = "Una base de datos multidimensional.";
 choices[8][1] = "Un sistema de an&aacute;lisis on-line soportado por una base de datos relacional con extensiones multidimensionales.";
 choices[8][2] = "Una medida de rendimiento de los sistemas OLAP.";
 choices[8][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[8] = choices[8][1];
 units[8] = "68";
 comments[8] = "Id Pregunta: 929. ";


//  Id pregunta: 945 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Bill Inmon, padre del Data Warehousing, define &eacute;ste como:";
 choices[9]= new Array();
 choices[9][0] = "Una colecci&oacute;n de datos orientada a materias, integrada, no vol&aacute;til y variante en el tiempo, destinada a ayudar a la toma de decisiones de gesti&oacute;n.";
 choices[9][1] = "Un sistema autom&aacute;tico de ayuda a la decisi&oacute;n que implanta la teor&iacute;a de la decisi&oacute;n multicriterio discreta.";
 choices[9][2] = "Una secuencia convergente de refinamientos sobre un conjunto diverso de soluciones a un problema de gesti&oacute;n.";
 choices[9][3] = "Ninguna de las afirmaciones anteriores es correcta.";
 answers[9] = choices[9][0];
 units[9] = "68";
 comments[9] = "Id Pregunta: 945. ";


//  Id pregunta: 959 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Con respecto a la manera de representar el modelo digital del terreno o DTM, un SIG puede ser:";
 choices[10]= new Array();
 choices[10][0] = "R&aacute;ster.";
 choices[10][1] = "Vectorial.";
 choices[10][2] = "Ambos.";
 choices[10][3] = "Ninguna es cierta.";
 answers[10] = choices[10][2];
 units[10] = "67";
 comments[10] = "Id Pregunta: 959. NULL";


//  Id pregunta: 972 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Cuando se quiere simular una base de datos multidimensional con una base de datos relacional y hay jerarqu&iacute;as en las dimensiones, lo m&aacute;s adecuado es el:";
 choices[11]= new Array();
 choices[11][0] = "Esquema en estrella.";
 choices[11][1] = "Esquema en tornillo.";
 choices[11][2] = "Esquema de hechos.";
 choices[11][3] = "Esquema en copo de nieve.";
 answers[11] = choices[11][3];
 units[11] = "68";
 comments[11] = "Id Pregunta: 972. ";


//  Id pregunta: 976 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  De acuerdo al modelo vectorial, &iquest;cu&aacute;l de los siguientes datos no se representa en un sistema de informaci&oacute;n geogr&aacute;fica?:";
 choices[12]= new Array();
 choices[12][0] = "Arcos circulares.";
 choices[12][1] = "Pol&iacute;gonos.";
 choices[12][2] = "L&iacute;neas.";
 choices[12][3] = "Matrices de celdas.";
 answers[12] = choices[12][3];
 units[12] = "67";
 comments[12] = "Id Pregunta: 976. NULL";


//  Id pregunta: 978 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  De las siguientes afirmaciones, indique la correcta respecto a los lenguajes procedimentales:";
 choices[13]= new Array();
 choices[13][0] = "En un lenguaje procedimental, se indica c&oacute;mo hay que realizar la acci&oacute;n";
 choices[13][1] = "En un lenguaje procedimental, se indica que resultado se quiere obtener";
 choices[13][2] = "Los lenguajes procedimentales son lenguajes de cuarta generaci&oacute;n";
 choices[13][3] = "Es cierto &lsquo;a&rsquo; y &lsquo;c&rsquo;";
 answers[13] = choices[13][0];
 units[13] = "63";
 comments[13] = "Id Pregunta: 978. ";


//  Id pregunta: 1011 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El data warehousing consiste b&aacute;sicamente en:";
 choices[14]= new Array();
 choices[14][0] = "En realizar un BPR (Business Processing Re-engineering) mediante el an&aacute;lisis automatizado de los datos corporativos.";
 choices[14][1] = "En automatizar los procesos de almacenamiento de datos de toda la corporaci&oacute;n. El sistema se encarga de situar los datos, de manera transparente, en los medios f&iacute;sicos m&aacute;s adecuados (discos, cintas, etc&eacute;tera) y de gestionar las copias de salvaguarda.";
 choices[14][2] = "En generar din&aacute;mica y autom&aacute;ticamente, a partir de datos extra&iacute;dos de todas las B.D. operacionales del sistema, otra base de datos donde se va almacenando informaci&oacute;n integrada, resumida, consolidada, multidimensional y significativa.";
 choices[14][3] = "En independizar los datos de la corporaci&oacute;n de su localizaci&oacute;n f&iacute;sica, creando un sistema de informaci&oacute;n virtual que integra todos los datos de la corporaci&oacute;n, incluso si est&aacute;n repartidos en diferentes sedes.";
 answers[14] = choices[14][2];
 units[14] = "68";
 comments[14] = "Id Pregunta: 1011. ";


//  Id pregunta: 1075 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En el campo de la integraci&oacute;n de los sistemas expertos:";
 choices[15]= new Array();
 choices[15][0] = "Los gestores inteligentes de bases de datos modelizan las descripciones funcionales de los procesos inferenciales b&aacute;sicos";
 choices[15][1] = "Las arquitecturas de sistemas de gesti&oacute;n de bases de datos se pueden optimizar incorporando m&oacute;dulos de optimizaci&oacute;n basados en t&eacute;cnicas heur&iacute;sticas de inteligencia artificial";
 choices[15][2] = "Un sistema de gesti&oacute;n de bases de datos deductivo es aqu&eacute;l en que los criterios de selecci&oacute;n pueden deducirse directamente de las restricciones de integridad";
 choices[15][3] = "Para la formalizaci&oacute;n de sistemas deductivos de bases de datos nunca se utilizan las t&eacute;cnicas de deducci&oacute;n autom&aacute;tica de la l&oacute;gica de primer orden";
 answers[15] = choices[15][1];
 units[15] = "64";
 comments[15] = "Id Pregunta: 1075. ";


//  Id pregunta: 1111 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En la programaci&oacute;n orientada a objetos de los sistemas expertos:";
 choices[16]= new Array();
 choices[16][0] = "Bajo este paradigma los programas se estructuran en procedimientos orientados al proceso";
 choices[16][1] = "Los objetos se comunican entre s&iacute; mediante arcos";
 choices[16][2] = "La especificaci&oacute;n de un objeto es independiente de su implementaci&oacute;n";
 choices[16][3] = "La propiedad de herencia afecta no s&oacute;lo a la componente est&aacute;tica de los objetos (m&eacute;todos) sino tambi&eacute;n a su componente din&aacute;mica";
 answers[16] = choices[16][2];
 units[16] = "64";
 comments[16] = "Id Pregunta: 1111. ";


//  Id pregunta: 1154 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En una red neuronal feedforward supervisada el m&eacute;todo de aprendizaje que intenta adaptar los pesos para minimizar el error cuadr&aacute;tico medio para el conjunto de patrones de entrenamiento se denomina:";
 choices[17]= new Array();
 choices[17][0] = "M&eacute;todo de la varianza";
 choices[17][1] = "M&eacute;todo de encadenamiento hacia atr&aacute;s";
 choices[17][2] = "M&eacute;todo de retropropagaci&oacute;n";
 choices[17][3] = "M&eacute;todo de Kohonen";
 answers[17] = choices[17][2];
 units[17] = "64";
 comments[17] = "Id Pregunta: 1154. ";


//  Id pregunta: 1174 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Indicar cual de la siguientes cualidades de los sistemas expertos es falsa:";
 choices[18]= new Array();
 choices[18][0] = "Capacidad para explicar la forma en que el sistema resuelve los problemas planteados";
 choices[18][1] = "Flexibilidad para incorporar gradualmente nuevo conocimiento";
 choices[18][2] = "Pueden procesar informaci&oacute;n simb&oacute;lica en vez de s&oacute;lo informaci&oacute;n num&eacute;rica";
 choices[18][3] = "S&oacute;lo pueden operar con conocimiento completo";
 answers[18] = choices[18][3];
 units[18] = "64";
 comments[18] = "Id Pregunta: 1174. ";


//  Id pregunta: 1179 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Indicar cu&aacute;l de las siguientes no es una ventaja de los sistemas expertos:";
 choices[19]= new Array();
 choices[19][0] = "Permanencia";
 choices[19][1] = "Facilidad de reproducci&oacute;n";
 choices[19][2] = "Funcionamiento uniforme";
 choices[19][3] = "Eficiencia";
 answers[19] = choices[19][3];
 units[19] = "64";
 comments[19] = "Id Pregunta: 1179. ";


//  Id pregunta: 1181 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Indicar cu&aacute;l de los siguientes no es un modelo de miner&iacute;a de datos:";
 choices[20]= new Array();
 choices[20][0] = "De verificaci&oacute;n.";
 choices[20][1] = "De descubrimiento.";
 choices[20][2] = "De predicci&oacute;n.";
 choices[20][3] = "De validaci&oacute;n.";
 answers[20] = choices[20][3];
 units[20] = "68";
 comments[20] = "Id Pregunta: 1181. ";


//  Id pregunta: 1185 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Indicar la respuesta incorrecta sobre las restricciones en inteligencia artificial:";
 choices[21]= new Array();
 choices[21][0] = "Si bien las reglas expresan influencias del tipo causa-efecto entre conceptos, una restricci&oacute;n es una ecuaci&oacute;n que permite expresar m&uacute;ltiples relaciones causa-efecto, estableciendo puntos de sincronismo en el comportamiento de los objetos";
 choices[21][1] = "Una restricci&oacute;n expresa una relaci&oacute;n de equilibrio entre los atributos de uno o m&aacute;s sujetos, y constituye la pieza b&aacute;sica de informaci&oacute;n para la comprensi&oacute;n y modelizaci&oacute;n del conocimiento del mundo real bajo este enfoque";
 choices[21][2] = "Hay dominios de conocimiento que formulados en restriccioness dan lugar a bases de conocimiento muy grandes debido a que el conocimiento se expresa mejor mediante reglas";
 choices[21][3] = "Todo sistema de restricciones debe constar como m&iacute;nimo de un lenguaje de especificaci&oacute;n de restricciones y un procedimiento capaz de interpretar esta especificaci&oacute;n y de evaluar sus respuestas";
 answers[21] = choices[21][2];
 units[21] = "64";
 comments[21] = "Id Pregunta: 1185. ";


//  Id pregunta: 1202 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  KADS es una metodolog&iacute;a de desarrollo de sistemas basados en en el conocimiento. Se divide en varias fases, entre las que no se encuentra:";
 choices[22]= new Array();
 choices[22][0] = "Refino de la base de conocimiento";
 choices[22][1] = "Implementaci&oacute;n";
 choices[22][2] = "Uso";
 choices[22][3] = "Clasificaci&oacute;n";
 answers[22] = choices[22][3];
 units[22] = "64";
 comments[22] = "Id Pregunta: 1202. ";


//  Id pregunta: 1260 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Las principales caracter&iacute;sticas de un almac&eacute;n de datos son:";
 choices[23]= new Array();
 choices[23][0] = "Organizado en torno a procesos, integrado, inpendiente del tiempo, no volatil";
 choices[23][1] = "Organizado en torno a temas, integrado, independiente del tiempo, volatil";
 choices[23][2] = "Organizado en torno a temas, integrado, dependiente del tiempo, no volatil";
 choices[23][3] = "Organizado en torno a procesos, integrado, dependiente del tiempo, volatil";
 answers[23] = choices[23][2];
 units[23] = "68";
 comments[23] = "Id Pregunta: 1260. NULL";


//  Id pregunta: 1288 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  MIGRA";
 choices[24]= new Array();
 choices[24][0] = "Es una norma del CSIAE, que desarrolla SICRES en detalle.";
 choices[24][1] = "Es un proyecto de AENOR para intercambio de informacion entre SIG.";
 choices[24][2] = "Es una herramienta software del los ministerios de Administraciones P&uacute;blicas e Interior que permite el control de la inmigraci&oacute;n ilegal a nuestro pais.";
 choices[24][3] = "Ninguna de las anteriores.";
 answers[24] = choices[24][1];
 units[24] = "67";
 comments[24] = "Id Pregunta: 1288. NULL";


//  Id pregunta: 1329 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Se dice que el conocimiento, independientemente del paradigma de representaci&oacute;n utilizado, tiene una doble componente:";
 choices[25]= new Array();
 choices[25][0] = "Los hechos constatables y los mecanismos de inferencia";
 choices[25][1] = "Los procedimientos y los mecanismos de deducci&oacute;n";
 choices[25][2] = "Los objetos y las relaciones entre los mismos";
 choices[25][3] = "El componente simb&oacute;lico y el componente procedimental";
 answers[25] = choices[25][0];
 units[25] = "64";
 comments[25] = "Id Pregunta: 1329. ";


//  Id pregunta: 1340 AÃ±o de creación de pregunta: 2009-01-01
 questions[26]= "27)  Se&ntilde;alar cu&aacute;l de las siguientes no es una operaci&oacute;n anal&iacute;tica b&aacute;sica en un sistema OLAP:";
 choices[26]= new Array();
 choices[26][0] = "Actualizaci&oacute;n.";
 choices[26][1] = "Agregaci&oacute;n.";
 choices[26][2] = "Dril-down.";
 choices[26][3] = "Slice-Dice.";
 answers[26] = choices[26][0];
 units[26] = "68";
 comments[26] = "Id Pregunta: 1340. ";


//  Id pregunta: 1382 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Un Data Mart es:";
 choices[27]= new Array();
 choices[27][0] = "Un proveedor de datos de pago v&iacute;a Internet.";
 choices[27][1] = "Una versi&oacute;n reducida del datawarehouse, adscrita a un solo departamento de la organizaci&oacute;n.";
 choices[27][2] = "Una aplicaci&oacute;n para el mantenimiento de la coherencia de los datos.";
 choices[27][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[27] = choices[27][1];
 units[27] = "68";
 comments[27] = "Id Pregunta: 1382. ";


//  Id pregunta: 1514 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;Se pueden ejecutar programas MS Windows bajo un entorno Linux?";
 choices[28]= new Array();
 choices[28][0] = "Nunca";
 choices[28][1] = "De forma nativa, linux es compatible binario con MS Windows";
 choices[28][2] = "S&iacute;, a trav&eacute;s de programas espec&iacute;fico para ello";
 choices[28][3] = "S&iacute;, a trav&eacute;s del comando SMB";
 answers[28] = choices[28][2];
 units[28] = "53,61";
 comments[28] = "Id Pregunta: 1514. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1524 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Cu&aacute;l de las siguientes afirmaciones respecto a LINUX es falsa";
 choices[29]= new Array();
 choices[29][0] = "est&aacute; constituido por un n&uacute;cleo kernel; cada usuario debe construirse las librer&iacute;as y programa para poderlo utilizar";
 choices[29][1] = "es un sistema operativo compatible con UNIX";
 choices[29][2] = "es un software libre";
 choices[29][3] = "el sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[29] = choices[29][0];
 units[29] = "61,62";
 comments[29] = "Id Pregunta: 1524. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1528 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  El sistema GPS (Global Positioning System), &iquest;de cu&aacute;ntos  sat&eacute;lites operativos se compone?";
 choices[30]= new Array();
 choices[30][0] = "16.";
 choices[30][1] = "24.";
 choices[30][2] = "32.";
 choices[30][3] = "64.";
 answers[30] = choices[30][1];
 units[30] = "67";
 comments[30] = "Id Pregunta: 1528. Junta Andaluc&iacute;a";


//  Id pregunta: 1544 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Qu&eacute; es Wine?";
 choices[31]= new Array();
 choices[31][0] = "Un emulador X11 para Windows";
 choices[31][1] = "Un emulador X11 para Linux";
 choices[31][2] = "Una implementaci&oacute;n de c&oacute;digo fuente abierto de la API de Windows que funciona sobre una plataforma X11";
 choices[31][3] = "Nada de lo anterior";
 answers[31] = choices[31][2];
 units[31] = "62";
 comments[31] = "Id Pregunta: 1544. ";


//  Id pregunta: 1594 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En los GIS, el formato empleado para almacenamiento de la informaci&oacute;n gr&aacute;fica mediante la t&eacute;cnica de descomponer cada objeto en una matriz de celdas de id&eacute;ntico tama&ntilde;o (pixel) se corresponde con el formato:";
 choices[32]= new Array();
 choices[32][0] = "Vectorial.";
 choices[32][1] = "Shape.";
 choices[32][2] = "Mapa de bits.";
 choices[32][3] = "R&aacute;ster.";
 answers[32] = choices[32][3];
 units[32] = "67";
 comments[32] = "Id Pregunta: 1594. Junta Andaluc&iacute;a";


//  Id pregunta: 1606 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Indicar la afirmaci&oacute;n que no es cierta sobre Marcos";
 choices[33]= new Array();
 choices[33][0] = "Representan conceptos estereotipados o patronespredefinidos sobre ideas y situaciones, aunando las caracter&iacute;sticas que cualifican el concepto";
 choices[33][1] = "Se caracteriza por representar conceptos gr&aacute;ficamente mediante nodos y sus relaciones entre ellos mediante arcos";
 choices[33][2] = "el marco es una entidad din&aacute;mica, conprocedimientos incluidos en los slots, que se ejecutan durante un proceso de razonamiento m&aacute;s general";
 choices[33][3] = "Los procedimientos de inferencia asociados a los marcos son: deducci&oacute;n de valores de slots, actualizaci&oacute;n de valores de slots y equiparaci&oacute;n de marcos";
 answers[33] = choices[33][1];
 units[33] = "64";
 comments[33] = "Id Pregunta: 1606. Pregunta no perteneciente al test  del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de Marcos)";


//  Id pregunta: 1651 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no son herramientas o plataformas de e-learning ?";
 choices[34]= new Array();
 choices[34][0] = "aTutor";
 choices[34][1] = "WebCT";
 choices[34][2] = "eSchool";
 choices[34][3] = "Blackboard";
 answers[34] = choices[34][2];
 units[34] = "66";
 comments[34] = "Id Pregunta: 1651. ";


//  Id pregunta: 1660 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[35]= new Array();
 choices[35][0] = "Los servicios OLAP son una herramienta de proceso anal&iacute;tico en l&iacute;nea.";
 choices[35][1] = "Pertenece al dominio de los almacenes de datos y se encuentra dentro del &aacute;mbito,  m&aacute;s amplio, de los sistemas de toma de decisiones (DSS) y de los sistemas de informaci&oacute;n ejecutiva (EIS).";
 choices[35][2] = "Una de sus principales metas es incrementar la velocidad de recuperaci&oacute;n de datos.";
 choices[35][3] = "Los servicios OLAP son una herramienta de proceso transaccional en l&iacute;nea.";
 answers[35] = choices[35][3];
 units[35] = "68";
 comments[35] = "Id Pregunta: 1660. MAP-B 2003";


//  Id pregunta: 1682 AÃ±o de creación de pregunta: 2004-01-01
 questions[36]= "37)  Respecto al software gratuito y al software libre podemos decir que";
 choices[36]= new Array();
 choices[36][0] = "El software gratuito siempre es libre";
 choices[36][1] = "El software libre siempre es gratuito";
 choices[36][2] = "El software libre y el software gratuito son dos terminos equivalentes";
 choices[36][3] = "Ninguna de las afirmaciones anteriores es correcta";
 answers[36] = choices[36][3];
 units[36] = "61";
 comments[36] = "Id Pregunta: 1682. ";


//  Id pregunta: 1683 AÃ±o de creación de pregunta: 2004-01-01
 questions[37]= "38)  En cuanto a los procedimientos de inferencia de las estructuras de representaci&oacute;n del conocimiento, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[37]= new Array();
 choices[37][0] = "En las redes semanticas los procedimientos de inferencia son la herencia y el equiparaci&oacute;n";
 choices[37][1] = "En los marcos los procedimientos de inferencia son la deducci&oacute;n de valores de slots, la actualizaci&oacute;n de valores de slots, y la emparejamiento";
 choices[37][2] = "En las reglas los procedimientos de inferencia son el encadenamiento hacia adelante, y el encadenamiento hacia atr&aacute;s";
 choices[37][3] = "Todas son correctas";
 answers[37] = choices[37][3];
 units[37] = "64";
 comments[37] = "Id Pregunta: 1683. NULL";


//  Id pregunta: 1691 AÃ±o de creación de pregunta: 2004-01-01
 questions[38]= "39)  Respecto a las herramientas, t&eacute;cnicas y terminolog&iacute;a OLAP indique cu&aacute;l de las siguientes afirmaciones es falsa.";
 choices[38]= new Array();
 choices[38][0] = "Trata de la s&iacute;ntesis, el an&aacute;lisis y la consolidaci&oacute;n din&aacute;mica de grandes vol&uacute;menes de datos multidimensionales.";
 choices[38][1] = "Las herramientas OLAP m&aacute;s eficientes en tiempo de respuesta trabajan sobre base de datos relacionales.";
 choices[38][2] = "Las bases de datos multidimensionales almacenan los datos de forma parecida a como lo hace una hoja de c&aacute;lculo aunque, a diferencia de &eacute;stas, es com&uacute;n que utilicen m&aacute;s de dos dimensiones.";
 choices[38][3] = "Se puede en establecer una jerarqu&iacute;a de niveles en cada dimensi&oacute;n para representar diversos grados de detalle.";
 answers[38] = choices[38][1];
 units[38] = "68";
 comments[38] = "Id Pregunta: 1691. ";


//  Id pregunta: 1773 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  &iquest;C&oacute;mo se llama la versi&oacute;n en software libre de la plataforma .Net?";
 choices[39]= new Array();
 choices[39][0] = ".DOT";
 choices[39][1] = ".free";
 choices[39][2] = "Mono";
 choices[39][3] = "Gambas";
 answers[39] = choices[39][2];
 units[39] = "61,62";
 comments[39] = "Id Pregunta: 1773. ";


//  Id pregunta: 1783 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  En el proyecto RHODAS del MAP, para la renovaci&oacute;n del parque ofim&aacute;tico del ministerio mediante puestos de trabajo equipados con software libre, indique qu&eacute; entorno de escritorio fue elegido en la arquitectura de referencia:";
 choices[40]= new Array();
 choices[40][0] = "KDE";
 choices[40][1] = "Wine";
 choices[40][2] = "GNOME";
 choices[40][3] = "Konkeror";
 answers[40] = choices[40][0];
 units[40] = "61,62";
 comments[40] = "Id Pregunta: 1783. ";


//  Id pregunta: 1784 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Indique aquel conjunto de programas que no guardan relaci&oacute;n en cuanto a su funcionalidad";
 choices[41]= new Array();
 choices[41][0] = "Gnumeric, kspread";
 choices[41][1] = "Firefox, Epiphany";
 choices[41][2] = "Thunderbird, Konqueror";
 choices[41][3] = "Dia, kivio";
 answers[41] = choices[41][2];
 units[41] = "61,62";
 comments[41] = "Id Pregunta: 1784. ";


//  Id pregunta: 1787 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Las siglas  STRIPS se corresponden a";
 choices[42]= new Array();
 choices[42][0] = "Stanford Research Institute Problem Solver";
 choices[42][1] = "St. Luis Robotics Institute Private Software";
 choices[42][2] = "San Francisco Tech Robots Institute Practical Seasons";
 choices[42][3] = "Science, Tech and Research International Patented System";
 answers[42] = choices[42][0];
 units[42] = "63";
 comments[42] = "Id Pregunta: 1787. ";


//  Id pregunta: 1789 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Se&ntilde;ale qu&eacute; lenguaje intermedio espec&iacute;fico de representaci&oacute;n de conocimiento se utiliza en el &aacute;rea de inteligencia artificial";
 choices[43]= new Array();
 choices[43][0] = "XML";
 choices[43][1] = "STRIPS";
 choices[43][2] = "KIF";
 choices[43][3] = "EXML";
 answers[43] = choices[43][2];
 units[43] = "63";
 comments[43] = "Id Pregunta: 1789. ";


//  Id pregunta: 1795 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Se&ntilde;alar cual no es una caracter&iacute;stica de las restricciones";
 choices[44]= new Array();
 choices[44][0] = "Permite sincronizar el comportamiento de los objetos buscando equilibrio entre sus atributos";
 choices[44][1] = "Permiten expresar m&uacute;ltiples relaciones causa-efecto mediante ecuaciones";
 choices[44][2] = "Pueden ser cualitativas (dominios discretos) o num&eacute;ricas.";
 choices[44][3] = "Representan sentencias condicionales donde a partir de antecedentes pueden obtenerse los consecuentes";
 answers[44] = choices[44][3];
 units[44] = "64";
 comments[44] = "Id Pregunta: 1795. ";


//  Id pregunta: 1798 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  En la t&eacute;cnica de representaci&oacute;n del conocimiento mediante marcos (frameworks), el m&eacute;todo de equiparaci&oacute;n de marcos mediante coincidencia con base de control se basa en:";
 choices[45]= new Array();
 choices[45][0] = "asociar una etiqueta a cada slot de los marcos de la base para forzar la coincidencia en algunos slots importantes";
 choices[45][1] = "uso de t&eacute;cnicas de razonamiento aproximado, como l&oacute;gica difusa, Mycin, Dempster-Shafer";
 choices[45][2] = "manejar una base de conocimiento local a cada marco que expresa mediante otro tipo de representaci&oacute;n la importancia que tiene cada slot en el proceso de equiparaci&oacute;n";
 choices[45][3] = "comprobar que los slots que est&aacute;n en el marco pregunta y del marco candidato tienen los mismos valores";
 answers[45] = choices[45][2];
 units[45] = "64";
 comments[45] = "Id Pregunta: 1798. ";


//  Id pregunta: 1809 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l es la utilidad de la proyecci&oacute;n en los GIS?";
 choices[46]= new Array();
 choices[46][0] = "Permite reconocer los datos geogr&aacute;ficos utilizando fotograf&iacute;as, preferiblemente desde sat&eacute;lite.";
 choices[46][1] = "Soluciona los problemas de representar la curvatura terrestre en un plano.";
 choices[46][2] = "Facilita la realizaci&oacute;n de zooms sin perder resoluci&oacute;n tanto hacia dentro como hacia fuera.";
 choices[46][3] = "Permite cambiar la longitud de onda de las fotograf&iacute;as para poder visualizar cosas que no se pueden ver en el espectro visible.";
 answers[46] = choices[46][1];
 units[46] = "67";
 comments[46] = "Id Pregunta: 1809. NULL";


//  Id pregunta: 4282 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En miner&iacute;a de datos, un Esquema Estrella:";
 choices[47]= new Array();
 choices[47][0] = "No tiene en cuenta elementos temporales tales como la fecha asociada a la informaci&oacute;n.";
 choices[47][1] = "Es una forma de representar la arquitectura f&iacute;sica del sistema OLAP.";
 choices[47][2] = "Es una t&eacute;cnica de dise&ntilde;o de bases de datos relacionales que sirve para simular el funcionamiento de bases de datos multidimensionales.";
 choices[47][3] = "Representa la centralizaci&oacute;n de la informaci&oacute;n en un solo SGBD para posibilitar su explotaci&oacute;n ndimensional.";
 answers[47] = choices[47][2];
 units[47] = "68";
 comments[47] = "Id Pregunta: 4282. ";


//  Id pregunta: 4359 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Una de las caracter&iacute;sticas de un sistema OLTP es:";
 choices[48]= new Array();
 choices[48][0] = "Homogeneidad de datos almacenados.";
 choices[48][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[48][2] = "Total organizaci&oacute;n.";
 choices[48][3] = "Facilidad para responder a consultas complejas.";
 answers[48] = choices[48][1];
 units[48] = "68";
 comments[48] = "Id Pregunta: 4359. ";


//  Id pregunta: 4361 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Cuando sobre un Data Warehouse llevamos a cabo un proceso de Data-Minig, donde la b&uacute;squeda se dirige hacia la categorizaci&oacute;n de los registros en grupos para detectar patrones aplicables, o extraer relaciones impl&iacute;citas en los datos, estamos aplicando un modelo...";
 choices[49]= new Array();
 choices[49][0] = "De validaci&oacute;n.";
 choices[49][1] = "De verificaci&oacute;n.";
 choices[49][2] = "De descubrimiento.";
 choices[49][3] = "Predictivo.";
 answers[49] = choices[49][2];
 units[49] = "68";
 comments[49] = "Id Pregunta: 4361. ";


//  Id pregunta: 4462 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;En qu&eacute; modelo de representaci&oacute;n de datos espaciales las distintas unidades tem&aacute;ticas se definen por las coordenadas de sus bordes?";
 choices[50]= new Array();
 choices[50][0] = "R&aacute;ster.";
 choices[50][1] = "Vectorial.";
 choices[50][2] = "Sinusoidal.";
 choices[50][3] = "Vertical.";
 answers[50] = choices[50][1];
 units[50] = "67";
 comments[50] = "Id Pregunta: 4462. NULL";


//  Id pregunta: 4518 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  En relaci&oacute;n con los entornos OLAP, indique cu&aacute;l de las siguientes afirmaciones es verdadera:";
 choices[51]= new Array();
 choices[51][0] = "Los sistemas MOLAP son capaces de almacenar mas informaci&oacute;n que los ROLAP.";
 choices[51][1] = "Los sistemas ROLAP son multidimensionales.";
 choices[51][2] = "Los sistemas ROLAP son capaces de almacenar m&aacute;s informaci&oacute;n que los MOLAP.";
 choices[51][3] = "Los sistemas MOLAP son relacionales.";
 answers[51] = choices[51][2];
 units[51] = "68";
 comments[51] = "Id Pregunta: 4518. ";


//  Id pregunta: 4879 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Seg&uacute;n se establece en la Gu&iacute;a de Certificaci&oacute;n para Sistemas de e-Learning basados en Web de AICC (Aviation Industry Computer-based Training Committee), &iquest;cu&aacute;l es la longitud m&aacute;xima de la URL (Uniform Resource Locator)de arranque de una unidad de asignaci&oacute;n en caracteres?";
 choices[52]= new Array();
 choices[52][0] = "64";
 choices[52][1] = "128";
 choices[52][2] = "256";
 choices[52][3] = "1024";
 answers[52] = choices[52][2];
 units[52] = "66";
 comments[52] = "Id Pregunta: 4879. ";


//  Id pregunta: 4911 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de &ldquo;duplicaciones&rdquo; locales o departamentales basadas en subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con el t&eacute;rmino:";
 choices[53]= new Array();
 choices[53][0] = "Data Marts.";
 choices[53][1] = "Metadata.";
 choices[53][2] = "Middleware.";
 choices[53][3] = "Dataware.";
 answers[53] = choices[53][0];
 units[53] = "68";
 comments[53] = "Id Pregunta: 4911. Examen TIC B 2007";


//  Id pregunta: 4913 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Para cu&aacute;les de los siguientes sistemas se debe configurar la base de datos optimizando las inserciones, modificaciones y borrado de datos y asegurando un alto nivel de concurrencia?";
 choices[54]= new Array();
 choices[54][0] = "OLTP (sistemas transaccionales on line).";
 choices[54][1] = "DSS (sistemas de soporte a la decisi&oacute;n).";
 choices[54][2] = "Data Warehouse (almacenes de datos).";
 choices[54][3] = "ERP (sistemas de planificaci&oacute;n de recursos).";
 answers[54] = choices[54][0];
 units[54] = "68";
 comments[54] = "Id Pregunta: 4913. Examen TIC B 2007";


//  Id pregunta: 5017 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los sistemas de informaci&oacute;n geogr&aacute;fica basados en formato r&aacute;ster?:";
 choices[55]= new Array();
 choices[55][0] = "Utiliza puntos, l&iacute;neas y pol&iacute;gonos para almacenar la informaci&oacute;n.";
 choices[55][1] = "La precisi&oacute;n de localizaci&oacute;n es mayor que en la de otros formatos.";
 choices[55][2] = "Se construye utilizando ret&iacute;culas de tama&ntilde;o regular.";
 choices[55][3] = "No es adecuado para modelos que incluyan evoluci&oacute;n temporal.";
 answers[55] = choices[55][2];
 units[55] = "67";
 comments[55] = "Id Pregunta: 5017. Examen TIC A 2007";


//  Id pregunta: 5020 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes afirmaciones define el tipo de procesamiento conocido como OLAP?";
 choices[56]= new Array();
 choices[56][0] = "Procesamiento transaccional en tiempo real que consiste en realizar transacciones, es decir actualizaciones y consultas a la base de datos con un objetivo operacional.";
 choices[56][1] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones, exclusivamente de consulta, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[56][2] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones de consulta y actualizaci&oacute;n, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[56][3] = "Procesamiento transaccional en tiempo real que engloba un conjunto de operaciones, de consulta y actualizaci&oacute;n, con el objetivo de realizar informes y res&uacute;menes para el apoyo en la toma de decisiones.";
 answers[56] = choices[56][1];
 units[56] = "68";
 comments[56] = "Id Pregunta: 5020. Examen TIC A 2007";


//  Id pregunta: 5126 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes formatos gr&aacute;ficos soporta internamente datos de georeferenciaci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = ".jpeg.";
 choices[57][1] = ".tiff.";
 choices[57][2] = ".png.";
 choices[57][3] = ".bmp.";
 answers[57] = choices[57][1];
 units[57] = "67";
 comments[57] = "Id Pregunta: 5126. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5674 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Indique la respuesta no correcta respecto a GIS modelo de datos r&aacute;ster.";
 choices[58]= new Array();
 choices[58][0] = "En el modelo de datos r&aacute;ster, la regi&oacute;n a modelizar se considera dividida seg&uacute;n una matriz o malla rectangular de celdas (p&iacute;xeles) de id&eacute;ntico tama&ntilde;o y de formageneralmente cuadrada.";
 choices[58][1] = "Como cr&iacute;ticas al modelo deben se&ntilde;alarse la carencia de informaci&oacute;n topol&oacute;gica acerca de las relaciones espaciales entre las entidades.";
 choices[58][2] = "En el modelo de datos r&aacute;ster permite una representaci&oacute;n expl&iacute;cita de entidades f&iacute;sicas del mundo real.";
 choices[58][3] = "Ofrece escasa eficiencia de cara a la representaci&oacute;n de la variabilidad espacial, al estar basado en una frecuencia de muestreo constante.";
 answers[58] = choices[58][2];
 units[58] = "67";
 comments[58] = "Id Pregunta: 5674. NULL";


//  Id pregunta: 5759 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes no es un sistema operativo de la familia BSD?";
 choices[59]= new Array();
 choices[59][0] = "SecureBSD";
 choices[59][1] = "NetBSD";
 choices[59][2] = "DesktopBSD";
 choices[59][3] = "DragonflyBSD";
 answers[59] = choices[59][0];
 units[59] = "61";
 comments[59] = "Id Pregunta: 5759. ";


//  Id pregunta: 5761 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  &iquest;Qu&eacute; versi&oacute;n de KDE introdujo los plasmoides?";
 choices[60]= new Array();
 choices[60][0] = "4.0";
 choices[60][1] = "5.3";
 choices[60][2] = "5.5";
 choices[60][3] = "6.0";
 answers[60] = choices[60][0];
 units[60] = "62";
 comments[60] = "Id Pregunta: 5761. ";


//  Id pregunta: 5912 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  El proyecto GNU fue concebido por:";
 choices[61]= new Array();
 choices[61][0] = "Tim O'Reilly";
 choices[61][1] = "Richard Stallman";
 choices[61][2] = "Tim Berners-Lee";
 choices[61][3] = "Robert Cailliau";
 answers[61] = choices[61][1];
 units[61] = "61";
 comments[61] = "Id Pregunta: 5912. MAP 2008 A1";


//  Id pregunta: 6068 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En el &aacute;mbito de los algoritmos de aprendizaje";
 choices[62]= new Array();
 choices[62][0] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje no supervisado";
 choices[62][1] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje no supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje supervisado";
 choices[62][2] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje supervisado";
 choices[62][3] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje no supervisado";
 answers[62] = choices[62][1];
 units[62] = "63,64";
 comments[62] = "Id Pregunta: 6068. ";


//  Id pregunta: 6173 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Dentro de  una soluci&oacute;n e-learning, donde se encuadrar&iacute;a un sistema LMS:";
 choices[63]= new Array();
 choices[63][0] = "Plataforma de formaci&oacute;n.";
 choices[63][1] = "Contenidos de formaci&oacute;n.";
 choices[63][2] = "Herramientas de comunicaci&oacute;n.";
 choices[63][3] = "Ninguna de las anteriores.";
 answers[63] = choices[63][0];
 units[63] = "66";
 comments[63] = "Id Pregunta: 6173. ";


//  Id pregunta: 6332 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Si los datos contienen valores 'NULL' (valores desconocidos) antes de realizar una consulta de data mining:";
 choices[64]= new Array();
 choices[64][0] = "Debo eliminarlos.";
 choices[64][1] = "S&oacute;lo se eliminan si son pocos. Si son muchos se utiliza alguna t&eacute;cnica para predecir el valor de esos nulos y trabajar con las aproximaciones obtenidas.";
 choices[64][2] = "En la fase de preproceso se les asignar&aacute; un valor por defecto.";
 choices[64][3] = "Se asigna el valor de la media multiplicado por 2.";
 answers[64] = choices[64][1];
 units[64] = "68";
 comments[64] = "Id Pregunta: 6332. ";


//  Id pregunta: 6334 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Si el objetivo al plantear una consulta de data mining es obtener reglas de predicci&oacute;n orientadas a la toma de decisi&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Es indiferente que t&eacute;cnica se utilice.";
 choices[65][1] = "Se debe disponer de una buena herramienta de c&aacute;lculo de asociaciones.";
 choices[65][2] = "Se tiene que distinguir entre la variable que se va a  predecir y las variables que se uilizar&aacute;n para tal predicci&oacute;n.";
 choices[65][3] = "No hay en el estado actual de la tecnolog&iacute;a data mining ning&uacute;n enfoque adecuado para ese problema.";
 answers[65] = choices[65][2];
 units[65] = "68";
 comments[65] = "Id Pregunta: 6334. ";


//  Id pregunta: 6336 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Indique la respuesta correcta:";
 choices[66]= new Array();
 choices[66][0] = "Las consultas de OLAP sin ser consultas de data mining permiten la realizaci&oacute;n de informes para soporte a la toma de decisiones.";
 choices[66][1] = "Todas las consultas de OLAP son tambi&eacute;n consultas de data mining.";
 choices[66][2] = "Las consultas de OLAP s&oacute;lo pueden realizarse si se ha implementado un hipercubo.";
 choices[66][3] = "Todas las respuestas son ciertas.";
 answers[66] = choices[66][0];
 units[66] = "68";
 comments[66] = "Id Pregunta: 6336. ";


//  Id pregunta: 6430 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes no es una suite ofim&aacute;tica de software libre?";
 choices[67]= new Array();
 choices[67][0] = "iWork";
 choices[67][1] = "Koffice";
 choices[67][2] = "OpenOffice.org";
 choices[67][3] = "Todas las anteriores son suites ofim&aacute;ticas de software libre";
 answers[67] = choices[67][0];
 units[67] = "62";
 comments[67] = "Id Pregunta: 6430. NULL";


//  Id pregunta: 6432 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes aplicaciones es un motor de b&uacute;squeda apoyado por el Apache Software Foundation?";
 choices[68]= new Array();
 choices[68][0] = "Apache WatchDog";
 choices[68][1] = "Apache Velocity";
 choices[68][2] = "Apache Tomcat";
 choices[68][3] = "Apache Lucene";
 answers[68] = choices[68][3];
 units[68] = "62";
 comments[68] = "Id Pregunta: 6432. NULL";


//  Id pregunta: 6499 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  GPL es el acr&oacute;nimo de:";
 choices[69]= new Array();
 choices[69][0] = "GNU Public License";
 choices[69][1] = "Geek Public License";
 choices[69][2] = "General Propietary License";
 choices[69][3] = "General Public License";
 answers[69] = choices[69][3];
 units[69] = "61";
 comments[69] = "Id Pregunta: 6499. ";


//  Id pregunta: 6500 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Seg&uacute;n Eric Raymond, los dos modelos caracter&iacute;sticos de desarrollo del Software Libre se conocen como:";
 choices[70]= new Array();
 choices[70][0] = "Catedral y Torre";
 choices[70][1] = "Catedral y Bazar";
 choices[70][2] = "Bazar y Torre";
 choices[70][3] = "Torre y Lineal";
 answers[70] = choices[70][1];
 units[70] = "61";
 comments[70] = "Id Pregunta: 6500. ";


//  Id pregunta: 7171 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n al Almac&eacute;n de Datos (Data Warehouse):";
 choices[71]= new Array();
 choices[71][0] = "La estructura l&oacute;gica est&aacute; compuesta por los niveles centralizado, organizado en torno a temas e integrado.";
 choices[71][1] = "La estructura f&iacute;sica est&aacute; compuesta por los niveles de metadatos, datos detallados actuales y datos detallados hist&oacute;ricos.";
 choices[71][2] = "El almac&eacute;n de datos no es vol&aacute;til, no se pueden modificar datos almacenados, solamente se permite la consulta y la carga de nuevos datos.";
 choices[71][3] = "Entre los criterios m&aacute;s importantes a considerar para elegir el SGBD que gestionar&aacute; el almac&eacute;n, est&aacute; el esfuerzo necesario para determinar el estado de los datos disponibles en los sistemas OLTP de la organizaci&oacute;n.";
 answers[71] = choices[71][2];
 units[71] = "68";
 comments[71] = "Id Pregunta: 7171. Examen TIC B 2009";


//  Id pregunta: 7297 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  Indique cu&aacute;l de los siguientes es SW libre para miner&iacute;a de datos:";
 choices[72]= new Array();
 choices[72][0] = "SAS.";
 choices[72][1] = "Clementine.";
 choices[72][2] = "Weka.";
 choices[72][3] = "SPSS.";
 answers[72] = choices[72][2];
 units[72] = "68";
 comments[72] = "Id Pregunta: 7297. NULL";


//  Id pregunta: 8196 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Se&ntilde;ale cu&aacute;l NO es uno de los conjuntos de metadatos que manejan los SIG (Sistemas de Informaci&oacute;n Geogr&aacute;fica): ";
 choices[73]= new Array();
 choices[73][0] = "Metadatos de explotaci&oacute;n. ";
 choices[73][1] = "Metadatos de descubrimiento. ";
 choices[73][2] = "Metadatos de exploraci&oacute;n. ";
 choices[73][3] = "Metadatos de representaci&oacute;n.";
 answers[73] = choices[73][3];
 units[73] = "67";
 comments[73] = "Id Pregunta: 8196. Examen TIC A1 2010";


//  Id pregunta: 8261 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  El empleo de redes neuronales para el reconocimiento de caracteres:";
 choices[74]= new Array();
 choices[74][0] = "Usa mecanismos basados en l&oacute;gica borrosa.";
 choices[74][1] = "No permite explicar f&aacute;cilmente las razones por las que se obtiene un determinado resultado.";
 choices[74][2] = "Se basa en la obtenci&oacute;n de un vector de caracter&iacute;sticas";
 choices[74][3] = "Hace que el reconocimiento se vea m&aacute;s afectado por defectos de la imagen que otros m&eacute;todos como el de comparaci&oacute;n de matrices.";
 answers[74] = choices[74][1];
 units[74] = "63,64";
 comments[74] = "Id Pregunta: 8261. Examen TIC A1 2010";


//  Id pregunta: 8366 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Sobre un Data Warehouse con informaci&oacute;n de las ventas nacionales de una compa&ntilde;&iacute;a, se quiere consultar los datos pero a nivel de ventas provinciales. &iquest;Qu&eacute; operaci&oacute;n debemos realizar en el almac&eacute;n de datos para obtener dichos datos?";
 choices[75]= new Array();
 choices[75][0] = "Drill-Down.";
 choices[75][1] = "Slice &amp; Dice.";
 choices[75][2] = "Roll-Up,";
 choices[75][3] = "Drill-Through.";
 answers[75] = choices[75][0];
 units[75] = "68";
 comments[75] = "Id Pregunta: 8366. Examen TIC A2 2010";


//  Id pregunta: 8812 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Las extensiones del Data Mining son:";
 choices[76]= new Array();
 choices[76][0] = "Web Mining y Text Mining.";
 choices[76][1] = "Web Mining, Text Mining e Hipertext Mining.";
 choices[76][2] = "Text Mining e Hipertext Mining.";
 choices[76][3] = "Web Mining e Hipertext Mining.";
 answers[76] = choices[76][0];
 units[76] = "68";
 comments[76] = "Id Pregunta: 8812. Examen UPM A2 2011";


//  Id pregunta: 8862 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Al Sistema de Informaci&oacute;n Geogr&aacute;fica que basa su funcionalidad en una concepci&oacute;n impl&iacute;cita de las relaciones de vecindad entre los objetos geogr&aacute;ficos, se le llama:";
 choices[77]= new Array();
 choices[77][0] = "Sistema Vectorial.";
 choices[77][1] = "Sistema R&aacute;ster.";
 choices[77][2] = "Sistema georreferencial orientado a objetos.";
 choices[77][3] = "Sistema georreferencial basado en metadatos.";
 answers[77] = choices[77][1];
 units[77] = "67";
 comments[77] = "Id Pregunta: 8862. Analista Ayto. Madrid 2010";


//  Id pregunta: 9155 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En relaci&oacute;n a las gu&iacute;as AGR de la AICC sobre eLearning, se&ntilde;ale la FALSA:";
 choices[78]= new Array();
 choices[78][0] = "La gu&iacute;a AGR007 se refiere al intercambio de cursos entre plataformas";
 choices[78][1] = "La gu&iacute;a AGR010 est&aacute; dedicada a la interoperabilidad entre plataformas web de formaci&oacute;n y sus cursos";
 choices[78][2] = "La gu&iacute;a AGR008 ofrece recomendaciones acerca de los videos digitales";
 choices[78][3] = "La gu&iacute;a AGR009 contiene las recomendaciones referentes a los archivos de audio digital";
 answers[78] = choices[78][3];
 units[78] = "66";
 comments[78] = "Id Pregunta: 9155. ";


//  Id pregunta: 9164 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Entre los servicios m&iacute;nimos que toda IDE debe respetar seg&uacute;n el OGC no se encuentra:";
 choices[79]= new Array();
 choices[79][0] = "El servicio de coberturas en web (WCS)";
 choices[79][1] = "El servicio de cat&aacute;logos de datos (CSW)";
 choices[79][2] = "El servicio de procesamientos (WPS)";
 choices[79][3] = "El servicio de conversi&oacute;n de coordenadas";
 answers[79] = choices[79][3];
 units[79] = "67";
 comments[79] = "Id Pregunta: 9164. NULL";


//  Id pregunta: 9681 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  KML:";
 choices[80]= new Array();
 choices[80][0] = "Es un lenguaje de marcado basado en XML para representar datos geogr&aacute;ficos en tres dimensiones.";
 choices[80][1] = "Es un conjunto de est&aacute;ndares para representar informaci&oacute;n geogr&aacute;fica mediante el uso de capas y est&aacute; construido dentro de la familia de formatos XML.";
 choices[80][2] = "Se crea en contraposici&oacute;n a la gram&aacute;tica de GML.";
 choices[80][3] = "Fue desarrollado para ser manejado con Keyoverlay LT, precursor de Google Earth.";
 answers[80] = choices[80][0];
 units[80] = "67";
 comments[80] = "Id Pregunta: 9681. NULL";


//  Id pregunta: 9691 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes opciones representa tipos de modelos dimensionales?";
 choices[81]= new Array();
 choices[81][0] = "Modelo en estrella.";
 choices[81][1] = "Modelo Copo de nieve.";
 choices[81][2] = "Constelaciones.";
 choices[81][3] = "Todos son modelos dimensionales.";
 answers[81] = choices[81][3];
 units[81] = "68";
 comments[81] = "Id Pregunta: 9691. ";


//  Id pregunta: 9710 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  El modelo Vectorial de representaci&oacute;n de datos espaciales";
 choices[82]= new Array();
 choices[82][0] = "facilita establecer relaciones topol&oacute;gicas entre los elementos.";
 choices[82][1] = "utiliza s&oacute;lo dos elementos geom&eacute;tricos (puntos y l&iacute;neas) para modelar digitalmente las entidades del mundo real.";
 choices[82][2] = "divide el espacio en celdas regulares donde cada una de ellas es ubicada por un vector.";
 choices[82][3] = "almacena los datos mediante el formato vectorial de base de datos BLOB.";
 answers[82] = choices[82][0];
 units[82] = "67";
 comments[82] = "Id Pregunta: 9710. Examen TIC-A1 2013";


//  Id pregunta: 9752 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Existen distintos tipos de algoritmos que se aplican en DataMining. &iquest;A qu&eacute; categor&iacute;a pertenece el algoritmo de Bayes Naive?";
 choices[83]= new Array();
 choices[83][0] = "Algoritmos de clasificaci&oacute;n.";
 choices[83][1] = "Algoritmos de regresi&oacute;n.";
 choices[83][2] = "Algoritmos de segmentaci&oacute;n. ";
 choices[83][3] = "Algoritmos de asociaci&oacute;n.";
 answers[83] = choices[83][0];
 units[83] = "68";
 comments[83] = "Id Pregunta: 9752. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9966 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  El subconjunto de datos de un Almac&eacute;n de Datos se denomina:";
 choices[84]= new Array();
 choices[84][0] = "Data Warehouse.";
 choices[84][1] = "OLAP";
 choices[84][2] = "Data Mart.";
 choices[84][3] = "Data Mining.";
 answers[84] = choices[84][2];
 units[84] = "68,71";
 comments[84] = "Id Pregunta: 9966. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9970 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En el &aacute;mbito de SAP ERP, los infotipos son:";
 choices[85]= new Array();
 choices[85][0] = "Objetos de C&aacute;lculo de n&oacute;mina y de Gesti&oacute;n de personal utilizados para distinguir entre importes monetarios.";
 choices[85][1] = "Unidades de tiempo que se utilizan de modos diferentes para calcular la remuneraci&oacute;n del empleado.";
 choices[85][2] = "Unidades de informaci&oacute;n en el sistema de Gesti&oacute;n de personal.";
 choices[85][3] = "T&eacute;cnicas provistas por SAP para el ingreso masivo de informaci&oacute;n";
 answers[85] = choices[85][2];
 units[85] = "65";
 comments[85] = "Id Pregunta: 9970. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9973 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indique cu&aacute;l de los siguientes elementos NO se asocia a un sistema datawarehouse: ";
 choices[86]= new Array();
 choices[86][0] = "Un motor de transacciones.";
 choices[86][1] = "Las herramientas de Extracci&oacute;n, Transformaci&oacute;n y Carga de datos.";
 choices[86][2] = "Las herramientas de explotaci&oacute;n anal&iacute;tica de la informaci&oacute;n.";
 choices[86][3] = "La base de datos multidimensional";
 answers[86] = choices[86][0];
 units[86] = "68,71";
 comments[86] = "Id Pregunta: 9973. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 10018 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula el formato de documentos abiertos para aplicaciones de ofim&aacute;tica (OpenDocument)?";
 choices[87]= new Array();
 choices[87][0] = "ISO/IEC 26300:2006 ";
 choices[87][1] = "RFC 2373";
 choices[87][2] = "ISO/IEC 9899:1999";
 choices[87][3] = "ISO 9000";
 answers[87] = choices[87][0];
 units[87] = "62";
 comments[87] = "Id Pregunta: 10018. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10272 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de b&uacute;squeda es de tipo heur&iacute;stico?";
 choices[88]= new Array();
 choices[88][0] = "B&uacute;squeda de profundida limitada";
 choices[88][1] = "B&uacute;squeda primero el mejor";
 choices[88][2] = "B&uacute;squeda de coste uniforme";
 choices[88][3] = "B&uacute;squeda bidireccional";
 answers[88] = choices[88][1];
 units[88] = "63";
 comments[88] = "Id Pregunta: 10272. NULL";


//  Id pregunta: 10274 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre comunicaci&oacute;n entre agentes inteligentes  mediante sistema de pizarra es cierta?";
 choices[89]= new Array();
 choices[89][0] = "Los agentes reciben se&ntilde;ales de la pizarra cuando &eacute;sta se actualiza";
 choices[89][1] = "Cuando un agente puede contribuir a la soluci&oacute;n del problema lo 'escribe' inmediatamente en la pizarra";
 choices[89][2] = "Ambas son ciertas";
 choices[89][3] = "Ninguna es cierta";
 answers[89] = choices[89][3];
 units[89] = "63";
 comments[89] = "Id Pregunta: 10274. NULL";


//  Id pregunta: 10628 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale cu&aacute;l de estas caracter&iacute;sticas no se corresponde con un agente inteligente:";
 choices[90]= new Array();
 choices[90][0] = "Pueden dar soluciones a diferentes problemas.";
 choices[90][1] = "Poseen capacidad de an&aacute;lisis.";
 choices[90][2] = "Tienen capacidad de aprender y mejorar a trav&eacute;s de la interacci&oacute;n.";
 choices[90][3] = "Ejecutan la misma acci&oacute;n de forma peri&oacute;dica.";
 answers[90] = choices[90][3];
 units[90] = "63";
 comments[90] = "Id Pregunta: 10628. ";


//  Id pregunta: 10805 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En relaci&oacute;n a OpenDocument (ODF), se&ntilde;ale la respuesta FALSA:";
 choices[91]= new Array();
 choices[91][0] = "Es un formato de archivo abierto y est&aacute;ndar para el almacenamiento de documentos tales como hojas de c&aacute;lculo, textos, gr&aacute;ficas y presentaciones.";
 choices[91][1] = "El tipo MIME para documentos texto de OpenDocument es: application/vnd.openxmlformats-officedocument.wordprocessingml.document.";
 choices[91][2] = "Est&aacute; basado en XML.";
 choices[91][3] = "Las extensiones de los archivos incluyen: odt para documentos de texto, ods para hojas de c&aacute;lculo, odp para presentaciones y odb para bases de datos.";
 answers[91] = choices[91][1];
 units[91] = "62";
 comments[91] = "Id Pregunta: 10805. Examen GSI 2014";


//  Id pregunta: 10863 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  De acuerdo a las operaciones que se requieran desarrollar, los Data Marts pueden adoptar diversas arquitecturas, se&ntilde;ale la caracter&iacute;stica correspondiente a la arquitectura Top-Down:";
 choices[92]= new Array();
 choices[92][0] = "Se definen previamente los Data Marts (DM) y luego se integran en un Data Warehouse (DW) centralizado. Los DM se cargan a trav&eacute;s de procesos ETL.";
 choices[92][1] = "Se define previamente un DW y un DM principal que se cargan a trav&eacute;s de procesos ETL. El DW alimentar&aacute; a otros DW, y el DM principal alimentar&aacute; a otros DM.";
 choices[92][2] = "Se define una base de datos (BD) principal que se carga mediante procesos ETL desde todas las BD corporativas, esta BD alimenta en exclusiva a todos los DM y DW existentes.";
 choices[92][3] = "Primero se define el DW, el cual es cargado a trav&eacute;s de procesos ETL y luego este alimenta a los diferentes DM. Cada DM recibir&aacute; los datos que correspondan al tema/departamento que traten.";
 answers[92] = choices[92][3];
 units[92] = "68, 71";
 comments[92] = "Id Pregunta: 10863. Examen GSI 2014";


//  Id pregunta: 11139 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes no es una licencia de c&oacute;digo abierto reconocida por OSI?";
 choices[93]= new Array();
 choices[93][0] = "European Union Public License";
 choices[93][1] = "Apache License";
 choices[93][2] = "Mozilla Public License";
 choices[93][3] = "Google Legal License";
 answers[93] = choices[93][3];
 units[93] = "61";
 comments[93] = "Id Pregunta: 11139. ";


//  Id pregunta: 11283 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; se entiende por TileMatrixSet en el contexto de la informaci&oacute;n geogr&aacute;fica?";
 choices[94]= new Array();
 choices[94][0] = "Una matriz de puntos de control para registrar una im&aacute;gen r&aacute;ster respecto a otra";
 choices[94][1] = "Un conjunto de rasterizaciones y fragmentaciones de la capa a diferentes escalas predeterminadas para un sistema de referencia y &aacute;mbito concreto";
 choices[94][2] = "Un conjunto de datos de tipo r&aacute;ster en el que el atributo respresentado es la elevaci&oacute;n de los puntos situados en una malla regular";
 choices[94][3] = "Ninguna de las anteriores";
 answers[94] = choices[94][1];
 units[94] = "67";
 comments[94] = "Id Pregunta: 11283. ";


//  Id pregunta: 11284 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Situar una posici&oacute;n en el mapa empleando una referencia catastral es un ejemplo de?";
 choices[95]= new Array();
 choices[95][0] = "Georreferenciaci&oacute;n directa";
 choices[95][1] = "Sistema de Proyecci&oacute;n (SRS)";
 choices[95][2] = "Georreferenciaci&oacute;n discreta";
 choices[95][3] = "a y c son ciertas";
 answers[95] = choices[95][2];
 units[95] = "67";
 comments[95] = "Id Pregunta: 11284. ";


//  Id pregunta: 11509 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes NO hace referencia a un proyecto de Big Data?";
 choices[96]= new Array();
 choices[96][0] = "Flume";
 choices[96][1] = "Cassandra";
 choices[96][2] = "Galenicum";
 choices[96][3] = "Hbase";
 answers[96] = choices[96][2];
 units[96] = "68";
 comments[96] = "Id Pregunta: 11509. NULL";


//  Id pregunta: 11511 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Facebook?";
 choices[97]= new Array();
 choices[97][0] = "Hive";
 choices[97][1] = "Cassandra";
 choices[97][2] = "Hbase";
 choices[97][3] = "ZoneKeeper";
 answers[97] = choices[97][2];
 units[97] = "68";
 comments[97] = "Id Pregunta: 11511. NULL";


//  Id pregunta: 11512 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Indique la FALSA respecto al concepto MapReduce.";
 choices[98]= new Array();
 choices[98][0] = "Es un paradigma de programaci&oacute;n utilizado en plataformas de Big Data";
 choices[98][1] = "Adem&aacute;s de los procesos Map y Reduce, incorpora una fase intermedia de Shuffle que permite balancear la carga de las tuplas de entrada.";
 choices[98][2] = "El proceso Map consiste en tomar las salidas del proceso Reduce y combina dichas tuplas en un conjunto m&aacute;s peque&ntilde;o.";
 choices[98][3] = "Proceso Map toma un conjunto de datos y lo convierte en otro conjunto, separando los elementos indiviudales en tuplas (pares clave/valor)";
 answers[98] = choices[98][2];
 units[98] = "68";
 comments[98] = "Id Pregunta: 11512. NULL";


//  Id pregunta: 11535 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La licencia de la GNU utilizada espec&iacute;ficamente para la documentaci&oacute;n t&eacute;cnica del software es:";
 choices[99]= new Array();
 choices[99][0] = "GFDL";
 choices[99][1] = "GPL";
 choices[99][2] = "Affero GPL";
 choices[99][3] = "EUPL";
 answers[99] = choices[99][0];
 units[99] = "62";
 comments[99] = "Id Pregunta: 11535. NULL";


