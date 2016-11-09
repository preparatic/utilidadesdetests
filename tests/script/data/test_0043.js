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

//  Id pregunta: 21 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;les son las caracter&iacute;sticas fundamentales establecidas por X/Open en el entorno de los sistemas abiertos?: ";
 choices[0]= new Array();
 choices[0][0] = "Interoperabilidad, seguridad y portabilidad";
 choices[0][1] = "Portabilidad, interconectividad e interoperabilidad";
 choices[0][2] = "Portabilidad, escalabilidad e interoperabilidad";
 choices[0][3] = "Integridad, interconectivilidad e interoperabilidad";
 answers[0] = choices[0][2];
 units[0] = "40";
 comments[0] = "Id Pregunta: 21. ";


//  Id pregunta: 183 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En el marco de la decisi&oacute;n multicriterio, la normalizaci&oacute;n es el proceso por el que:";
 choices[1]= new Array();
 choices[1][0] = "Se eliminan las alternativas que no intervienen en el c&aacute;lculo";
 choices[1][1] = "Se desactivan aquellos criterios en los que todas las alternativas alcanzan id&eacute;ntica puntuaci&oacute;n";
 choices[1][2] = "Se ajusta la matriz de puntuaciones seg&uacute;n un modelo de referencia";
 choices[1][3] = "Se modifica el contenido de la matriz de puntuaciones para hacer &eacute;sta comparables entre s&iacute;";
 answers[1] = choices[1][3];
 units[1] = "34";
 comments[1] = "Id Pregunta: 183. ";


//  Id pregunta: 211 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En la dimensi&oacute;n horizontal de un sistema de informaci&oacute;n, dentro de cada nivel las funciones se dividen en:";
 choices[2]= new Array();
 choices[2][0] = "Aplicaciones y procedimientos";
 choices[2][1] = "Aplicaciones y tareas";
 choices[2][2] = "Aplicaciones o procedimientos";
 choices[2][3] = "Aplicaciones o tareas";
 answers[2] = choices[2][2];
 units[2] = "21";
 comments[2] = "Id Pregunta: 211. ";


//  Id pregunta: 254 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Entre los m&eacute;todos utilizados para la selecci&oacute;n de bienes y servicios:";
 choices[3]= new Array();
 choices[3][0] = "En general se considera que a mayor entrop&iacute;a, mayor informaci&oacute;n, puesto que las puntuaciones est&aacute;n m&aacute;s ordenadas";
 choices[3][1] = "La normalizaci&oacute;n de las puntuaciones suele ser necesaria para considerarlas a todas sobre la misma escala y para simplificar los c&aacute;lculos";
 choices[3][2] = "En el m&eacute;todo de permutaci&oacute;n, se exigen solamente las evaluaciones cardinales y los pesos ordinales";
 choices[3][3] = "Todas las respuestas anteriores son correctas";
 answers[3] = choices[3][1];
 units[3] = "34";
 comments[3] = "Id Pregunta: 254. ";


//  Id pregunta: 310 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La integridad de la informaci&oacute;n en un sistema de comunicaciones inform&aacute;ticas es de sumo inter&eacute;s para:";
 choices[4]= new Array();
 choices[4][0] = "Seguridad inform&aacute;tica";
 choices[4][1] = "Seguridad f&iacute;sica";
 choices[4][2] = "Auditor&iacute;a de comunicaciones";
 choices[4][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[4] = choices[4][3];
 units[4] = "33";
 comments[4] = "Id Pregunta: 310. ";


//  Id pregunta: 358 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Las medidas de protecci&oacute;n antivirus:";
 choices[5]= new Array();
 choices[5][0] = "Pueden ser de prevenci&oacute;n o de detecci&oacute;n";
 choices[5][1] = "Pueden ser de prevenci&oacute;n, de detecci&oacute;n o de contingencia";
 choices[5][2] = "S&oacute;lo son efectivas frente a ataques de virus tipo &quot;gusanos&quot;";
 choices[5][3] = "Deben minimizar los efectos ulteriores a la infecci&oacute;n de un sistema inform&aacute;tico";
 answers[5] = choices[5][1];
 units[5] = "33";
 comments[5] = "Id Pregunta: 358. ";


//  Id pregunta: 431 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Seg&uacute;n la clasificaci&oacute;n de directivos establecida por Lawrence Milier, el tipo de directivo id&oacute;neo para la creaci&oacute;n inicial de una empresa es el:";
 choices[6]= new Array();
 choices[6][0] = "B&aacute;rbaro";
 choices[6][1] = "Profeta";
 choices[6][2] = "Administrador";
 choices[6][3] = "Gestor";
 answers[6] = choices[6][1];
 units[6] = "22";
 comments[6] = "Id Pregunta: 431. ";


//  Id pregunta: 484 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a las recomendaciones de la ITU es falsa?:";
 choices[7]= new Array();
 choices[7][0] = "La norma X.200 (ISO 7498) define el modelo de referencia para la interconexi&oacute;n de sistemas abiertos (OSI)";
 choices[7][1] = "La norma X.400 (ISO 10021) define un sistema de gesti&oacute;n de mensajes (MHS)";
 choices[7][2] = "La norma X.500 (ISO 9594) define los servicios de directorio";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = choices[7][3];
 units[7] = "42";
 comments[7] = "Id Pregunta: 484. ";


//  Id pregunta: 518 AÃ±o de creación de pregunta: 2003-01-01
 questions[8]= "9)  Una de las organizaciones que lucha internacionalmente contra la pirater&iacute;a inform&aacute;tica es";
 choices[8]= new Array();
 choices[8][0] = "BSA";
 choices[8][1] = "RSA";
 choices[8][2] = "ESA";
 choices[8][3] = "EIT";
 answers[8] = choices[8][0];
 units[8] = "36,37";
 comments[8] = "Id Pregunta: 518. ";


//  Id pregunta: 755 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  En Java, respecto a la herencia de clases ...";
 choices[9]= new Array();
 choices[9][0] = "Es posible que una clase herede de m&aacute;s de una clase padre";
 choices[9][1] = "Una clase s&oacute;lo puede implementar un &uacute;nico interfaz";
 choices[9][2] = "La clase que hereda de una clase abstracta es siempre abstracta a su vez";
 choices[9][3] = "Todas las anteriores son falsas";
 answers[9] = choices[9][3];
 units[9] = "60";
 comments[9] = "Id Pregunta: 755. NULL";


//  Id pregunta: 788 AÃ±o de creación de pregunta: 2009-01-01
 questions[10]= "11)  Seg&uacute;n la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, los datos de tr&aacute;fico deben retenerse por un periodo de:";
 choices[10]= new Array();
 choices[10][0] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dos a&ntilde;os o un m&iacute;nimo de seis meses.";
 choices[10][1] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dieciocho meses o un m&iacute;nimo de seis meses.";
 choices[10][2] = "La Ley lo fijar&aacute; reglamentariamente";
 choices[10][3] = "12 meses m&iacute;nimo para los proveedores de redes (carriers) y 24 meses m&iacute;nimo para los proveedores de acceso a internet y de alojamiento";
 answers[10] = choices[10][0];
 units[10] = "30";
 comments[10] = "Id Pregunta: 788. articulo 5";


//  Id pregunta: 891 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;les son las tecnolog&iacute;as b&aacute;sicas usadas en la gesti&oacute;n de entornos distribuidos?:";
 choices[11]= new Array();
 choices[11][0] = "Agentes inteligentes";
 choices[11][1] = "Agentes propietarios, est&aacute;ndar y proxys";
 choices[11][2] = "Protocolos SNMP y CMIP";
 choices[11][3] = "Las tres respuestas anteriores son correctas";
 answers[11] = choices[11][2];
 units[11] = "62,98";
 comments[11] = "Id Pregunta: 891. ";


//  Id pregunta: 938 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; relaci&oacute;n existe entre SGML y HTML?:";
 choices[12]= new Array();
 choices[12][0] = "HTML es un subconjunto de SGML";
 choices[12][1] = "SGML es un subconjunto de HTML";
 choices[12][2] = "SGML se inspir&oacute; en HTML";
 choices[12][3] = "No tienen relaci&oacute;n";
 answers[12] = choices[12][0];
 units[12] = "69";
 comments[12] = "Id Pregunta: 938. NULL";


//  Id pregunta: 954 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Comparando los conceptos de Groupware y CSCW (Computer Supported Cooperative Work):";
 choices[13]= new Array();
 choices[13][0] = "Groupware se refiere m&aacute;s a aspectos sociol&oacute;gicos y psicol&oacute;gicos";
 choices[13][1] = "CSCW aborda la tem&aacute;tica desde una perspectiva mucho m&aacute;s concreta y espec&iacute;fica";
 choices[13][2] = "Groupware se centra en las connotaciones tecnol&oacute;gicas, en aplicaciones concretas y en actividades grupales";
 choices[13][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[13] = choices[13][2];
 units[13] = "71";
 comments[13] = "Id Pregunta: 954. ";


//  Id pregunta: 961 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Considerando la orientaci&oacute;n l&oacute;gica en inteligencia artificial:";
 choices[14]= new Array();
 choices[14][0] = "La definici&oacute;n matem&aacute;tica de los mecanismos mediante los cuales ser&aacute; posible deducir f&oacute;rmulas a partir de otras es independiente de que se haya formalizado o no la estructura de las frases";
 choices[14][1] = "El sistema de Kleene, como ejemplo de sistema formal y de la teor&iacute;a de la demostraci&oacute;n, pertenece a la orientaci&oacute;n heur&iacute;stica y no a la orientaci&oacute;n l&oacute;gica";
 choices[14][2] = "La forma de representar las estructuras deductivas tiene dos l&iacute;neas principales: la de los sistemas formales y la de la sem&aacute;ntica";
 choices[14][3] = "Las soluciones de los Sistemas de Kleene est&aacute;n basadas en las formalizaciones del c&aacute;lculo proposicional y del c&aacute;lculo de predicados";
 answers[14] = choices[14][2];
 units[14] = "63";
 comments[14] = "Id Pregunta: 961. ";


//  Id pregunta: 1197 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Java ME es:";
 choices[15]= new Array();
 choices[15][0] = "Una versi&oacute;n de Java que permite explotar las capacidades multimedia de los nuevos procesadores";
 choices[15][1] = "Una versi&oacute;n reducida de Java dise&ntilde;ada para ser ejecutada en dispositivos m&oacute;viles o embebidos.";
 choices[15][2] = "Una versi&oacute;n de Java que permite varias ejecuciones simult&aacute;neas y multiplexadas de un programa para ejecuci&oacute;n en procesadores en paralelo";
 choices[15][3] = "Una versi&oacute;n de Java optimizada para Macintosh";
 answers[15] = choices[15][1];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1197. NULL";


//  Id pregunta: 1260 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Las principales caracter&iacute;sticas de un almac&eacute;n de datos son:";
 choices[16]= new Array();
 choices[16][0] = "Organizado en torno a procesos, integrado, inpendiente del tiempo, no volatil";
 choices[16][1] = "Organizado en torno a temas, integrado, independiente del tiempo, volatil";
 choices[16][2] = "Organizado en torno a temas, integrado, dependiente del tiempo, no volatil";
 choices[16][3] = "Organizado en torno a procesos, integrado, dependiente del tiempo, volatil";
 answers[16] = choices[16][2];
 units[16] = "68";
 comments[16] = "Id Pregunta: 1260. NULL";


//  Id pregunta: 1574 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  &iquest;Qu&eacute; es JDBC?:";
 choices[17]= new Array();
 choices[17][0] = " Un modelo de objetos ActiveX.";
 choices[17][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C.";
 choices[17][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[17][3] = " Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[17] = choices[17][3];
 units[17] = "58";
 comments[17] = "Id Pregunta: 1574. Junta Andaluc&iacute;a";


//  Id pregunta: 1642 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de estas acciones se permite ejecutar en Java a un applet no firmado descargado de Internet?";
 choices[18]= new Array();
 choices[18][0] = "Leer ficheros locales";
 choices[18][1] = "Cargar librer&iacute;as nativas";
 choices[18][2] = "Conectarse a la m&aacute;quina desde la que se descarg&oacute;";
 choices[18][3] = "Llamar a m&eacute;todos privados de otoas applets de la misma p&aacute;gina";
 answers[18] = choices[18][2];
 units[18] = "60";
 comments[18] = "Id Pregunta: 1642. NULL";


//  Id pregunta: 1734 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Un sistema operativo trata de obtener el m&aacute;ximo rendimiento del hardware que controla. La multitarea y la existencia de varios procesadores son algunas herramientas para conseguirlo. Se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[19]= new Array();
 choices[19][0] = "No existe incompatibilidad en emplear multiprogramaci&oacute;n y tiempo compartido en un sistema multiprocesador.";
 choices[19][1] = "Una transacci&oacute;n se inicia con la petici&oacute;n de un terminal y acaba con la respuesta de la CPU.";
 choices[19][2] = "En un sistema con time-sharing, la asignaci&oacute;n de prioridades a unos procesos respecto de otros no mejora el rendimiento.";
 choices[19][3] = "El sistema operativo no es responsable de la sincronizaci&oacute;n de procesos, son las aplicaciones quienes se encargan de esa tarea.";
 answers[19] = choices[19][0];
 units[19] = "55";
 comments[19] = "Id Pregunta: 1734. ";


//  Id pregunta: 1744 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Indique cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al software libre";
 choices[20]= new Array();
 choices[20][0] = "El kernel de linux es estable a pesar de sus continuas modificaciones";
 choices[20][1] = "El software libre es apto para usuarios no t&eacute;cnicos";
 choices[20][2] = "El SL puede funcionar con software propietario (interoperable)";
 choices[20][3] = "El software libre carece en la actualidad de un soporte adecuado";
 answers[20] = choices[20][3];
 units[20] = "61";
 comments[20] = "Id Pregunta: 1744. ";


//  Id pregunta: 1841 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Se&ntilde;ale  la correcta:";
 choices[21]= new Array();
 choices[21][0] = "El protocolo de seguridad en comercio electr&oacute;nico  3D Secure es utilizado por Visa y MarterCard";
 choices[21][1] = "Visa utiliza el protocolo Verified by Visa";
 choices[21][2] = "MasterCard Secure Code es el protocolo utilizado por Master Card";
 choices[21][3] = "Todas las anteriores";
 answers[21] = choices[21][3];
 units[21] = "70";
 comments[21] = "Id Pregunta: 1841. NULL";


//  Id pregunta: 2113 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;A cu&aacute;nto equivale el trabajo de un hombre por mes en COCOMO, medido en horas de trabajo?:";
 choices[22]= new Array();
 choices[22][0] = "140 horas";
 choices[22][1] = "150 horas";
 choices[22][2] = "172 horas";
 choices[22][3] = "152 horas";
 answers[22] = choices[22][3];
 units[22] = "89";
 comments[22] = "Id Pregunta: 2113. NULL";


//  Id pregunta: 2192 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;les son los objetivos del dise&ntilde;o estructurado?";
 choices[23]= new Array();
 choices[23][0] = "M&aacute;xima portabilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, integraci&oacute;n del sistema.";
 choices[23][1] = "M&aacute;xima portabilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, modularizaci&oacute;n del sistema.";
 choices[23][2] = "M&aacute;xima inteligibilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, modularizaci&oacute;n del sistema.";
 choices[23][3] = "M&aacute;xima inteligibilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, integraci&oacute;n del sistema.";
 answers[23] = choices[23][3];
 units[23] = "84";
 comments[23] = "Id Pregunta: 2192. ";


//  Id pregunta: 2329 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En la programaci&oacute;n orientada a objetos, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?:";
 choices[24]= new Array();
 choices[24][0] = "La herencia define una relaci&oacute;n entre clases, donde una clase comparte la estructura o comportamiento definido en una o m&aacute;s clases";
 choices[24][1] = "La encapsulaci&oacute;n es el proceso de ocultaci&oacute;n de los detalles internos o de implementaci&oacute;n de un objeto";
 choices[24][2] = "Un objeto es una instancia de una clase y cada clase tiene cero o m&aacute;s instancias";
 choices[24][3] = "Las instancias de una metaclase no son clases";
 answers[24] = choices[24][3];
 units[24] = "82";
 comments[24] = "Id Pregunta: 2329. ";


//  Id pregunta: 2574 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Calidad/Coste dice:";
 choices[25]= new Array();
 choices[25][0] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[25][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[25][2] = "El coste es constante e independiente de la calidad del producto";
 choices[25][3] = "Ninguna de ellas";
 answers[25] = choices[25][0];
 units[25] = "87,88,92";
 comments[25] = "Id Pregunta: 2574. ";


//  Id pregunta: 2581 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest; Cu&aacute;l no es un formato de audio ?";
 choices[26]= new Array();
 choices[26][0] = "WMA";
 choices[26][1] = "WAV";
 choices[26][2] = "OGG";
 choices[26][3] = "PNG";
 answers[26] = choices[26][3];
 units[26] = "94";
 comments[26] = "Id Pregunta: 2581. ";


//  Id pregunta: 2605 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest; Qu&eacute; diferencia fundamental existe entre el Diagrama de Estructura de Datos y el Modelo Entidad Relaci&oacute;n?";
 choices[27]= new Array();
 choices[27][0] = "Ninguna, son dos nombres que definen exactamente el mismo modelo.";
 choices[27][1] = "S&oacute;lo se diferencian en la representaci&oacute;n geom&eacute;trica de las entidades, que en el de Entidad Relaci&oacute;n son rect&aacute;ngulos y en el de Estructura de Datos son elipses, el resto es igual.";
 choices[27][2] = "En el modelo Entidad Relaci&oacute;n pueden existir relaciones n-arias mientras que en el de Estructura de Datos estas relaciones se representan cre&aacute;ndose una entidad auxiliar y dos relaciones 1:m.";
 choices[27][3] = " El Diagrama de Estructura de Datos no es un modelo que sirva para la representaci&oacute;n l&oacute;gica de los datos mientras que el Entidad Relaci&oacute;n s&iacute;.";
 answers[27] = choices[27][2];
 units[27] = "58,80";
 comments[27] = "Id Pregunta: 2605. ";


//  Id pregunta: 2747 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  La direcci&oacute;n de los flujos entre almac&eacute;n y proceso en un DFD (Diagrama de Flujos de Datos) puede ser:";
 choices[28]= new Array();
 choices[28][0] = "De consulta";
 choices[28][1] = "De actualizaci&oacute;n";
 choices[28][2] = "De di&aacute;logo";
 choices[28][3] = "Todas las anteriores";
 answers[28] = choices[28][3];
 units[28] = "81";
 comments[28] = "Id Pregunta: 2747. ";


//  Id pregunta: 2815 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Cual de las siguientes no es una forma de autoevaluaci&oacute;n seg&uacute;n el EFQM";
 choices[29]= new Array();
 choices[29][0] = "Simulaci&oacute;n de presentaci&oacute;n al Premio";
 choices[29][1] = "Por formularios";
 choices[29][2] = "Por cuestionarios de autoevaluaci&oacute;n";
 choices[29][3] = "Todas son correctas";
 answers[29] = choices[29][3];
 units[29] = "88";
 comments[29] = "Id Pregunta: 2815. NULL";


//  Id pregunta: 2935 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l es el est&aacute;ndar Gigabit Ethernet sobre 2 pares trenzados apantallados hasta una distancia de 25 m?";
 choices[30]= new Array();
 choices[30][0] = "1000BaseT";
 choices[30][1] = "1000BaseSX";
 choices[30][2] = "1000BaseLx";
 choices[30][3] = "1000BaseCX";
 answers[30] = choices[30][3];
 units[30] = "99";
 comments[30] = "Id Pregunta: 2935. Similar a examen TIC MAP A 2004";


//  Id pregunta: 3611 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La interconexi&oacute;n de intranets puede llevarse a cabo mediante:";
 choices[31]= new Array();
 choices[31][0] = "repetidores y concentradores a nivel f&iacute;sico, encaminadores a nivel de enlace, puentes a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[31][1] = "repetidores, concentradores y encaminadores a nivel f&iacute;sico, puentes a nivel de enlace y pasarelas a nivel de aplicaci&oacute;n";
 choices[31][2] = "repetidores y concentradores a nivel f&iacute;sico, puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[31][3] = "repetidores a nivel f&iacute;sico, concentradores y puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 answers[31] = choices[31][2];
 units[31] = "100,103,113";
 comments[31] = "Id Pregunta: 3611. NULL";


//  Id pregunta: 3650 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La tecnolog&iacute;a que pretende extender la banda ancha a los hogares usando Ethernet se denomina:";
 choices[32]= new Array();
 choices[32][0] = "Home Ethernet";
 choices[32][1] = "City Ethernet";
 choices[32][2] = "Instant Ethernet";
 choices[32][3] = "Ethernet To The Home";
 answers[32] = choices[32][3];
 units[32] = "101";
 comments[32] = "Id Pregunta: 3650. ";


//  Id pregunta: 3655 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Un acceso RDSI:";
 choices[33]= new Array();
 choices[33][0] = "Precisa de una instalaci&oacute;n de cable espec&iacute;fica en casa del abonado";
 choices[33][1] = "Es un servicio que se proporciona sobre el par de hilos telef&oacute;nico";
 choices[33][2] = "Precisa tener contratados 2 canales de voz";
 choices[33][3] = "Ninguna de las anteriores de las respuestas anteriores es correcta";
 answers[33] = choices[33][1];
 units[33] = "103";
 comments[33] = "Id Pregunta: 3655. ";


//  Id pregunta: 3696 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Las direcciones IPv6 tienen una longitud de:";
 choices[34]= new Array();
 choices[34][0] = "32 bits";
 choices[34][1] = "128 bits";
 choices[34][2] = "64 bits";
 choices[34][3] = "48 bits";
 answers[34] = choices[34][1];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3696. NULL";


//  Id pregunta: 3720 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Los conmutadores o switches LAN construyen una tabla de conmutaci&oacute;n que consiste en:";
 choices[35]= new Array();
 choices[35][0] = "Direcciones MAC y su interfaz de salida asociada";
 choices[35][1] = "Direcciones MAC y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 choices[35][2] = "Direcciones de red y su interfaz de salida apropiada";
 choices[35][3] = "Direcciones de red  y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 answers[35] = choices[35][0];
 units[35] = "102";
 comments[35] = "Id Pregunta: 3720. ";


//  Id pregunta: 3770 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Para videoconferencia en LANs sin QoS (como por ejemplo Internet), se usan las recomendaciones del est&aacute;ndar:";
 choices[36]= new Array();
 choices[36][0] = "H.321";
 choices[36][1] = "H.320";
 choices[36][2] = "H.323";
 choices[36][3] = "H.324";
 answers[36] = choices[36][2];
 units[36] = "117";
 comments[36] = "Id Pregunta: 3770. ";


//  Id pregunta: 3791 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Respecto a los dispositivos de interconexi&oacute;n de redes locales, es falso que:";
 choices[37]= new Array();
 choices[37][0] = "El repetidor compatibiliza 2 medios de transmisi&oacute;n a nivel f&iacute;sico";
 choices[37][1] = "Los puentes operan a nivel de enlace, subnivel LLC para un mismo nivel MAC";
 choices[37][2] = "Los enrutadores conectan LANs con LANs, MANs o WANs";
 choices[37][3] = "Las pasarelas trabajan a nivel de red o superior";
 answers[37] = choices[37][1];
 units[37] = "102";
 comments[37] = "Id Pregunta: 3791. ";


//  Id pregunta: 3933 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;C&uacute;antos canales tiene una trama MIC?:";
 choices[38]= new Array();
 choices[38][0] = "32";
 choices[38][1] = "16";
 choices[38][2] = "32, pero dos de ellos se utilizan para se&ntilde;alizaci&oacute;n y sincronismo";
 choices[38][3] = "Todas las respuestas anteriores son falsas";
 answers[38] = choices[38][2];
 units[38] = "103";
 comments[38] = "Id Pregunta: 3933. ";


//  Id pregunta: 4119 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  La t&eacute;cnica usada para llevar a los visitantes a una nueva p&aacute;gina web cuando un URL ha cambiado se llama";
 choices[39]= new Array();
 choices[39][0] = "Redirecci&oacute;n";
 choices[39][1] = "CGI";
 choices[39][2] = "Identificador Uniforme de Recursos";
 choices[39][3] = "ASP";
 answers[39] = choices[39][0];
 units[39] = "112";
 comments[39] = "Id Pregunta: 4119. ";


//  Id pregunta: 4151 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  El sistema de gesti&oacute;n de la seguridad que autoriza el acceso de usuarios a recursos en entorno OS/390 se llama";
 choices[40]= new Array();
 choices[40][0] = "ACF2";
 choices[40][1] = "RACF";
 choices[40][2] = "RADIUS";
 choices[40][3] = "CICS";
 answers[40] = choices[40][1];
 units[40] = "111";
 comments[40] = "Id Pregunta: 4151. NULL";


//  Id pregunta: 4203 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  El MTBF asociado a la disponibilidad de un sistema formado por dos equipos id&eacute;nticos con reparto balanceado de la carga de trabajo";
 choices[41]= new Array();
 choices[41][0] = "Es mayor que el de cualquiera de ellos individualmente";
 choices[41][1] = "Es menor que el de cualquiera de ellos individualmente";
 choices[41][2] = "Es igual al de cualquiera de ellos individualmente";
 choices[41][3] = "No puede ser conocido a priori";
 answers[41] = choices[41][0];
 units[41] = "104";
 comments[41] = "Id Pregunta: 4203. ";


//  Id pregunta: 4216 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  El entorno Microsoft, WebDAV";
 choices[42]= new Array();
 choices[42][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio";
 choices[42][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e intranets";
 choices[42][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red";
 choices[42][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos";
 answers[42] = choices[42][1];
 units[42] = "115";
 comments[42] = "Id Pregunta: 4216. ";


//  Id pregunta: 4299 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Si est&aacute; utilizando la t&eacute;cnica de despliegue de la funci&oacute;n calidad (DFC) para traducir las necesidades del cliente en requisitos, el an&aacute;lisis de valor:";
 choices[43]= new Array();
 choices[43][0] = "Se emplea para determinar el valor de cada funci&oacute;n requerida por el sistema.";
 choices[43][1] = "Se lleva a cabo para determinar la prioridad relativa de requisitos";
 choices[43][2] = "Sirve para identificar los acontecimientos que el sistema debe producir y consumir.";
 choices[43][3] = "Examina el comportamiento del sistema dentro del contexto de su entorno.";
 answers[43] = choices[43][1];
 units[43] = "78";
 comments[43] = "Id Pregunta: 4299. ";


//  Id pregunta: 4303 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  En el An&aacute;lisis estructurado moderno, la &ldquo;lista de eventos&rdquo; se utiliza para:";
 choices[44]= new Array();
 choices[44][0] = "Mejorar los requisitos de trazabilidad.";
 choices[44][1] = "Construir diagramas Entidad-Historia";
 choices[44][2] = "Documentar las transacciones de datos en el Diagrama Entidad-Relaci&oacute;n.";
 choices[44][3] = "Construir un Diagrama de Flujo de Datos preliminar del sistema.";
 answers[44] = choices[44][3];
 units[44] = "81";
 comments[44] = "Id Pregunta: 4303. ";


//  Id pregunta: 4371 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  El Ciclo de Vida del software es:";
 choices[45]= new Array();
 choices[45][0] = "Un patr&oacute;n del comportamiento de los dise&ntilde;adores.";
 choices[45][1] = "Un modelo del proceso de construcci&oacute;n del Software";
 choices[45][2] = "Un modelo de especificaciones establecido por el analista.";
 choices[45][3] = "Un esquema para integrar el sistema completo.";
 answers[45] = choices[45][1];
 units[45] = "76";
 comments[45] = "Id Pregunta: 4371. ";


//  Id pregunta: 4401 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Un evento con consecuencias en detrimento de la seguridad del sistema de informaci&oacute;n se denomina, seg&uacute;n Magerit v.2:";
 choices[46]= new Array();
 choices[46][0] = "Incidente.";
 choices[46][1] = "Incidencia.";
 choices[46][2] = "Contingencia";
 choices[46][3] = "Impacto.";
 answers[46] = choices[46][0];
 units[46] = "33";
 comments[46] = "Id Pregunta: 4401. ";


//  Id pregunta: 4511 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Una de las siguientes afirmaciones no es cierta respecto a Ia ISO (Organization International de Normalization).";
 choices[47]= new Array();
 choices[47][0] = "Es una red de los institutos de normas nacionales de mas de cien pa&iacute;ses,";
 choices[47][1] = "Es una organizaci&oacute;n no gubernamental.";
 choices[47][2] = "Todos sus miembros son parte de Ia estructura gubernamental de sus pa&iacute;ses, o son conferidos por mandato por su gobierno.";
 choices[47][3] = "La Secretaria Central esta en Ginebra, Suiza.";
 answers[47] = choices[47][2];
 units[47] = "42";
 comments[47] = "Id Pregunta: 4511. ";


//  Id pregunta: 4575 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Indica cual de las siguientes definiciones de firma electr&oacute;nica es Ia que aparece en Ia Ley 59/2003, de 19 de diciembre:";
 choices[48]= new Array();
 choices[48][0] = "es el resultado de obtener por medio de mecanismos o dispositivos un patr&oacute;n que se asocie biun&iacute;voca mente a un individuo y a su voluntad de firmar.";
 choices[48][1] = "es el conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[48][2] = "es el documento electr&oacute;nico que acredita electr&oacute;nicamente Ia identidad personal de su titular y permite la firma de documentos.";
 choices[48][3] = "es el conjunto de datos &uacute;nicos, como c&oacute;digos o claves criptogr&aacute;ficas privadas, que el firmante utiliza para firmar documentos.";
 answers[48] = choices[48][1];
 units[48] = "30";
 comments[48] = "Id Pregunta: 4575. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 4596 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Cuando un m&oacute;vil se enciende y no encuentra una estaci&oacute;n base de Ia red a la que pertenece";
 choices[49]= new Array();
 choices[49][0] = "se registra en el HLR (Home Location Register) de Ia red a la que accede";
 choices[49][1] = "se registra en el VLR (Visitors Location Register) de Ia red a la que pertenece";
 choices[49][2] = "se registra en el VLR (Visitors Location Register) de Ia red a la que accede";
 choices[49][3] = "no se registra en ninguna red";
 answers[49] = choices[49][2];
 units[49] = "108";
 comments[49] = "Id Pregunta: 4596. ";


//  Id pregunta: 4625 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo SOAP es falsa";
 choices[50]= new Array();
 choices[50][0] = "Atraviesa firewalls y routers";
 choices[50][1] = "Depende del sistema operativo y del procesador";
 choices[50][2] = "Es un est&aacute;ndar de la industria";
 choices[50][3] = "Utiliza los mismos est&aacute;ndares de la Web";
 answers[50] = choices[50][1];
 units[50] = "51";
 comments[50] = "Id Pregunta: 4625. NULL";


//  Id pregunta: 5467 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Cuando analizar&iacute;amos los recursos de la organizaci&oacute;n";
 choices[51]= new Array();
 choices[51][0] = "Cuando ejecutemos un desarrollo, para determinar el costo";
 choices[51][1] = "Al valorar los recursos que se han consumido";
 choices[51][2] = "Para ver la forma de materializar un desarrollo";
 choices[51][3] = "Cuando queramos hacer una programaci&oacute;n estrat&eacute;gica";
 answers[51] = choices[51][3];
 units[51] = "77";
 comments[51] = "Id Pregunta: 5467. Castilla y Le&oacute;n";


//  Id pregunta: 5523 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  La norma para las medidas de la resoluci&oacute;n en c&aacute;maras electr&oacute;nicas es";
 choices[52]= new Array();
 choices[52][0] = "ISO 12233";
 choices[52][1] = "ISO 20000";
 choices[52][2] = "IEEE 12333";
 choices[52][3] = "ANSI 568";
 answers[52] = choices[52][0];
 units[52] = "93";
 comments[52] = "Id Pregunta: 5523. NULL";


//  Id pregunta: 5691 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Una de las zonas s&oacute;lo es accesible por la Direcci&oacute;n General de la Polic&iacute;a. Se&ntilde;ale su nombre: ";
 choices[53]= new Array();
 choices[53][0] = "Zona p&uacute;blica";
 choices[53][1] = "Zona de seguridad";
 choices[53][2] = "Zona privada";
 choices[53][3] = "Zona confidencial";
 answers[53] = choices[53][1];
 units[53] = "74";
 comments[53] = "Id Pregunta: 5691. NULL";


//  Id pregunta: 5828 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  Con respecto a la tecnolog&iacute;a conocida como &quot;SONET&quot; (terminolog&iacute;a de EEUU) &oacute; SDH / JDS (terminolog&iacute;a en Europa), &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[54]= new Array();
 choices[54][0] = "Especialmente concebida para funcionar sobre fibra &oacute;ptica, con velocidades normalizadas que son m&uacute;ltiplos de una se&ntilde;al base de 155 Mbps denominada STM-1";
 choices[54][1] = "Proporciona flexibilidad en acceso, capacidad de gesti&oacute;n, seguridad y protecci&oacute;n pero no permite integraci&oacute;n de voz, datos y multimedia";
 choices[54][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red";
 choices[54][3] = "En una red SDH los elementos de red se monitorizan extremo a extremo y se gestiona el mantenimiento de la integridad de la misma, lo que permite la inmediata identificaci&oacute;n de fallo en un enlace &oacute; nodo de la red";
 answers[54] = choices[54][1];
 units[54] = "109";
 comments[54] = "Id Pregunta: 5828. MAP 2008 A1";


//  Id pregunta: 5903 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con M&Eacute;TRICA v.3 es FALSA?:";
 choices[55]= new Array();
 choices[55][0] = "Cubre distintos tipos de desarrollo: &quot;estructurado&quot; y &quot;orientado a objetos&quot;";
 choices[55][1] = "En su estructura se distinguen tres procesos principales";
 choices[55][2] = "Se incluyen Interfaces para aspectos de gesti&oacute;n";
 choices[55][3] = "El proceso de desarrollo de Sistemas de Informaci&oacute;n se divide en cuatro procesos: &quot;an&aacute;lisis&quot;, &quot;dise&ntilde;o&quot;, &quot;construcci&oacute;n&quot;, e &quot;implantaci&oacute;n y aceptaci&oacute;n&quot; del sistema";
 answers[55] = choices[55][3];
 units[55] = "86";
 comments[55] = "Id Pregunta: 5903. MAP 2008 A1";


//  Id pregunta: 5958 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  De entre las siguientes opciones, se&ntilde;ale la que no se corresponde con una metodolog&iacute;a de desarrollo &aacute;gil:";
 choices[56]= new Array();
 choices[56][0] = "Rational Rapid Development (RRD)";
 choices[56][1] = "Scrum";
 choices[56][2] = "Extreme Programming (XP)";
 choices[56][3] = "Open Unified Process (OpenUP)";
 answers[56] = choices[56][0];
 units[56] = "79";
 comments[56] = "Id Pregunta: 5958. ";


//  Id pregunta: 5961 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Seg&uacute;n la Norma ISO 9000:2000, la relaci&oacute;n entre el resultado alcanzado y los recursos utilizados, se denomina:";
 choices[57]= new Array();
 choices[57][0] = "Eficiencia";
 choices[57][1] = "Eficacia";
 choices[57][2] = "Proceso";
 choices[57][3] = "Requisito";
 answers[57] = choices[57][0];
 units[57] = "87";
 comments[57] = "Id Pregunta: 5961. Castilla La Mancha 2009";


//  Id pregunta: 5988 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Adem&aacute;s de controlar el correcto funcionamiento del sistema y poner los medios para corregir sus funciones, &iquest;qu&eacute; funci&oacute;n lecorresponder&iacute;a a un administrador de sistemas operativos?";
 choices[58]= new Array();
 choices[58][0] = "Colaborar en el desarrollo de nuevas versiones de los sistemas operativos o de parches para ellos.";
 choices[58][1] = "Planificar y realizar la adquisici&oacute;n de nuevo equipamiento.";
 choices[58][2] = "Instalar el sistema operativo, actualizar los parches, monitorizar el uso de recursos y corregir las posibles incidencias.";
 choices[58][3] = "Desarrollar los sistemas de informaci&oacute;n de la organizaci&oacute;n.";
 answers[58] = choices[58][2];
 units[58] = "52";
 comments[58] = "Id Pregunta: 5988. TIC A 2009";


//  Id pregunta: 6104 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes NO es un procedimiento adecuado para la consulta de la validez de un certificado digital emitido por un prestador de servicios de certificaci&oacute;n?";
 choices[59]= new Array();
 choices[59][0] = "Declaraci&oacute;n de pr&aacute;cticas de certificaci&oacute;n.";
 choices[59][1] = "Listas de certificados revocados.";
 choices[59][2] = "LDAP.";
 choices[59][3] = "OCSP.";
 answers[59] = choices[59][0];
 units[59] = "74";
 comments[59] = "Id Pregunta: 6104. TIC A 2009";


//  Id pregunta: 6242 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes APIs de JEE especifica la gesti&oacute;n de transacciones a trav&eacute;s de sistemas distribuidos?";
 choices[60]= new Array();
 choices[60][0] = "JNDE";
 choices[60][1] = "JNI";
 choices[60][2] = "JTA";
 choices[60][3] = "JAX";
 answers[60] = choices[60][2];
 units[60] = "60";
 comments[60] = "Id Pregunta: 6242. TICB-2009, bloque desarrollo";


//  Id pregunta: 6303 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de desarrollo de sistemas distribuidos basados en objtetos?";
 choices[61]= new Array();
 choices[61][0] = "DCOM";
 choices[61][1] = "IDL";
 choices[61][2] = "CORBA";
 choices[61][3] = "RMI ";
 answers[61] = choices[61][1];
 units[61] = "82";
 comments[61] = "Id Pregunta: 6303. ";


//  Id pregunta: 6317 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes sentencias es cierta respecto a las bases de datos relacionales?";
 choices[62]= new Array();
 choices[62][0] = "Soportan las interrelaciones l&oacute;gicas entre los datos.";
 choices[62][1] = "No soportan el acceso directo a un registro espec&iacute;fico.";
 choices[62][2] = "Es complicado el acceso a varios registros relacionados con un registro simple.";
 choices[62][3] = "El acceso a los datos es l&oacute;gico, dependiente de las t&eacute;cnicas de instrumentaci&oacute;n f&iacute;sica.";
 answers[62] = choices[62][0];
 units[62] = "58";
 comments[62] = "Id Pregunta: 6317. ";


//  Id pregunta: 6406 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  En relaci&oacute;n a l&iacute;mites a los derechos exclusivos de la explotaci&oacute;n de un programa de ordenador por parte de quien sea su titular, establecidos en Ley de Propiedad Intelectual, se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[63]= new Array();
 choices[63][0] = "La realizaci&oacute;n de una copia de seguridad por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse por contrato en cuanto resulte necesaria para dicha utilizaci&oacute;n.";
 choices[63][1] = "La realizaci&oacute;n de copias privadas por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse.";
 choices[63][2] = "La realizaci&oacute;n de copias de seguridad por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse por contrato en cuanto resulten necesarias para dicha utilizaci&oacute;n.";
 choices[63][3] = "La realizaci&oacute;n de una copia privada por parte de quien tiene derecho a utilizar el programa no podr&aacute; impedirse.";
 answers[63] = choices[63][0];
 units[63] = "36";
 comments[63] = "Id Pregunta: 6406. Art&iacute;culo 100 RDL 1/1996";


//  Id pregunta: 6539 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Cu&aacute;l de las siguientes opciones no es una tecnolog&iacute;a de administraci&oacute;n de seguridad centralizadas?";
 choices[64]= new Array();
 choices[64][0] = "TACACS+";
 choices[64][1] = "Radius";
 choices[64][2] = "Un grupo de trabajo peer-to-peer";
 choices[64][3] = "Diameter";
 answers[64] = choices[64][2];
 units[64] = "111";
 comments[64] = "Id Pregunta: 6539. NULL";


//  Id pregunta: 6546 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Deficiencias dentro del sistema Kerberos";
 choices[65]= new Array();
 choices[65][0] = "El centro de distribuci&oacute;n de claves es un &uacute;nico punto de fallo";
 choices[65][1] = "Privacidad";
 choices[65][2] = "Integridad";
 choices[65][3] = "Todas las respuestas anteriores son incorrectos";
 answers[65] = choices[65][0];
 units[65] = "111";
 comments[65] = "Id Pregunta: 6546. NULL";


//  Id pregunta: 6575 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Podemos definir ARP poisoning como";
 choices[66]= new Array();
 choices[66][0] = "Alteraci&oacute;n de la tabla ARP para que una direcci&oacute;n IP se corresponda con una MAC distinta a la que ten&iacute;a";
 choices[66][1] = "Con este ataque no se puede redirigir el tr&aacute;fico al ordenador del atacante";
 choices[66][2] = "A y B son correctas";
 choices[66][3] = "A y B son incorrectas";
 answers[66] = choices[66][0];
 units[66] = "100";
 comments[66] = "Id Pregunta: 6575. NULL";


//  Id pregunta: 6589 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Para ficheros a los que aplican las medidas de seguridad de nivel medio debe llevarse a cabo una auditor&iacute;a, al menos";
 choices[67]= new Array();
 choices[67][0] = "Debe ser externa";
 choices[67][1] = "Bianual";
 choices[67][2] = "Bienal";
 choices[67][3] = "Todas las respuestas anteriores son incorrectas";
 answers[67] = choices[67][2];
 units[67] = "29";
 comments[67] = "Id Pregunta: 6589. NULL";


//  Id pregunta: 7317 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Cu&aacute;l de los siguientes no forma parte del Framework o Marco de Trabajo .NET:";
 choices[68]= new Array();
 choices[68][0] = "MSIL";
 choices[68][1] = "JVM";
 choices[68][2] = "Biblioteca de Clases Base o BCL";
 choices[68][3] = "CLR (Common Language Runtime)";
 answers[68] = choices[68][1];
 units[68] = "59";
 comments[68] = "Id Pregunta: 7317. NULL";


//  Id pregunta: 8222 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l es el nivel m&iacute;nimo de accesibilidad que deben cumplir las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas o financiadas con fondos p&uacute;blicos?:";
 choices[69]= new Array();
 choices[69][0] = "No existe m&iacute;nimo alguno fijado por la normativa.";
 choices[69][1] = "El definido en las prioridades 1 y 2 de la norma UNE 139803: 2004.";
 choices[69][2] = "El m&aacute;s alto que permita el estado de la t&eacute;cnica en cada momento.";
 choices[69][3] = "El definido en la norma UNE 14009 :2006, apartados 2 y 3.";
 answers[69] = choices[69][1];
 units[69] = "39";
 comments[69] = "Id Pregunta: 8222. Examen TIC A1 2010";


//  Id pregunta: 8272 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Dentro del est&aacute;ndar del metalenguaje XML se&ntilde;ale la afirmaci&oacute;n INCORRECTA:";
 choices[70]= new Array();
 choices[70][0] = "Un DTD es un documento escrito en XML para definir el contenido y estructura de documentos XML.";
 choices[70][1] = "Los XML Schemas y los DTD permiten validar documentos XML.";
 choices[70][2] = "Los XML Schemas soportan herencia entre tipos de datos.";
 choices[70][3] = "Los DTD no est&aacute;n basados en el uso de &quot;namespaces&quot;.";
 answers[70] = choices[70][0];
 units[70] = "69";
 comments[70] = "Id Pregunta: 8272. Examen TIC A1 2010";


//  Id pregunta: 8311 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Existe una variedad de tecnolog&iacute;as xDSL que se caracterizan por:";
 choices[71]= new Array();
 choices[71][0] = "La infraestructura f&iacute;sica que soporta el servicio: par de cobre, fibra &oacute;ptica u otros medios de transmisi&oacute;n.";
 choices[71][1] = "El n&uacute;mero de canales de alta velocidad disponibles. ";
 choices[71][2] = "Por la compatibilidad, o no, con la transmisi&oacute;n de voz, y la calidad de la misma.";
 choices[71][3] = "Su simetr&iacute;a/asimetr&iacute;a en los canales de subida y bajada de datos.";
 answers[71] = choices[71][3];
 units[71] = "107";
 comments[71] = "Id Pregunta: 8311. Examen TIC A2 2010";


//  Id pregunta: 8384 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Cu&aacute;l de los siguientes estados NO corresponde con ninguno de los estados en los que puede estar un puerto de un dispositivo de interconexi&oacute;n, seg&uacute;n lo definido en el est&aacute;ndar 802.1D para el protocolo Spanning Tree:";
 choices[72]= new Array();
 choices[72][0] = "Blocking (Bloqueando).";
 choices[72][1] = "Listening (Escuchando). ";
 choices[72][2] = "Learning (Aprendiendo).";
 choices[72][3] = "Receiving (Recibiendo).";
 answers[72] = choices[72][3];
 units[72] = "102";
 comments[72] = "Id Pregunta: 8384. Examen TIC A2 2010";


//  Id pregunta: 8439 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Bajo cu&aacute;les de las siguientes circunstancias no pueden ser rechazados los documentos electr&oacute;nicos presentados en un registro electr&oacute;nico seg&uacute;n el RD 1671/2009?";
 choices[73]= new Array();
 choices[73][0] = "Que se trate de documentos dirigidos a &oacute;rganos u organismos fuera del &aacute;mbito de la Administraci&oacute;n General del Estado.";
 choices[73][1] = "Que se trate de documentos que de acuerdo con lo establecido en los art&iacute;culos 14 y 32 deban presentarse en registros electr&oacute;nicos espec&iacute;ficos.";
 choices[73][2] = "Que contengan c&oacute;digo malicioso o dispositivo susceptible de afectar a la integridad o seguridad del sistema.";
 choices[73][3] = "En el caso de utilizaci&oacute;n de documentos normalizados.";
 answers[73] = choices[73][3];
 units[73] = "43";
 comments[73] = "Id Pregunta: 8439. ";


//  Id pregunta: 8466 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Las fibras monomodo:";
 choices[74]= new Array();
 choices[74][0] = "Se emplean normalmente en enlaces de de telecomunicaci&oacute;n de distancias largas";
 choices[74][1] = "Presentan la superficie de separaci&oacute;n entre el n&uacute;cleo y el revestimiento, claramente definida y diferenciada dando lugar a que los rayos luminosos se reflejen hacia el n&uacute;cleo formando diversos &aacute;ngulos";
 choices[74][2] = "Se caracterizan por una velocidad de flujo reducida";
 choices[74][3] = "Su instalaci&oacute;n es m&aacute;s sencilla que las multimodo";
 answers[74] = choices[74][0];
 units[74] = "99";
 comments[74] = "Id Pregunta: 8466. Analista Ayto. Madrid 2010";


//  Id pregunta: 8471 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l es la velocidad del est&aacute;ndar USB 3.0?:";
 choices[75]= new Array();
 choices[75][0] = "600 MB/s";
 choices[75][1] = "480 MB/s";
 choices[75][2] = "4800 MB/s";
 choices[75][3] = "1092 MB/s";
 answers[75] = choices[75][0];
 units[75] = "47";
 comments[75] = "Id Pregunta: 8471. Analista Ayto. Madrid 2010";


//  Id pregunta: 8516 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Qu&eacute; tipo de diagrama permite representar un algoritmo?";
 choices[76]= new Array();
 choices[76][0] = "Diagrama de Clases.";
 choices[76][1] = "Flujograma de Sistemas.";
 choices[76][2] = "Flujograma de Programas.";
 choices[76][3] = "Diagrama de Flujo de Datos.";
 answers[76] = choices[76][2];
 units[76] = "86";
 comments[76] = "Id Pregunta: 8516. Examen TIC A2 2010 interna";


//  Id pregunta: 8627 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  En el contexto de las redes de cable, con objeto de permitir la asignaci&oacute;n din&aacute;mica de ancho de banda a los usuarios, &iquest;cu&aacute;les son las estrategias posibles de acceso a trav&eacute;s de m&oacute;dem?";
 choices[77]= new Array();
 choices[77][0] = "Por encaminamiento IP y basada en ATM";
 choices[77][1] = "A trav&eacute;s del nodo primario de la red y a trav&eacute;s del nodo secundario de la red";
 choices[77][2] = "Mediante solicitud-reserva y por contienda.";
 choices[77][3] = "En estrella y en &aacute;rbol.";
 answers[77] = choices[77][2];
 units[77] = "101, 102";
 comments[77] = "Id Pregunta: 8627. Examen TIC A2 2010 interna";


//  Id pregunta: 8786 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;A cu&aacute;l de las siguientes arquitecturas paralelas pertenecen las arquitecturas Pipeline?";
 choices[78]= new Array();
 choices[78][0] = "SISD";
 choices[78][1] = "SIMD";
 choices[78][2] = "MISD";
 choices[78][3] = "MIMD";
 answers[78] = choices[78][2];
 units[78] = "45";
 comments[78] = "Id Pregunta: 8786. Examen UPM A2 2011";


//  Id pregunta: 8872 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  HDLC define tres tipos de estaciones, dos configuraciones de enlace y tres modos de operaci&oacute;n para la transferencia de los datos. Se&ntilde;ale la respuesta correcta en relaci&oacute;n a dichas definiciones:";
 choices[79]= new Array();
 choices[79][0] = "La Configuraci&oacute;n de Enlace no Balanceada est&aacute; formada por una estaci&oacute;n primaria y una o m&aacute;s estaciones secundarias y &uacute;nicamente se permite la transmisi&oacute;n semi-duplex";
 choices[79][1] = "El modo de respuesta normal (NRM) se utiliza en la configuraci&oacute;n no balanceada";
 choices[79][2] = "El modo de respuesta as&iacute;ncrono (ARM) se utiliza en la configuraci&oacute;n balanceada.";
 choices[79][3] = "Solamente existen dos tipos de estaciones, primaria y secundaria";
 answers[79] = choices[79][1];
 units[79] = "100";
 comments[79] = "Id Pregunta: 8872. Analista Ayto. Madrid 2010";


//  Id pregunta: 8952 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  El manejador de dispositivos es:";
 choices[80]= new Array();
 choices[80][0] = "Un p rograma de usuario final";
 choices[80][1] = "Hardware que controla un dispositivo";
 choices[80][2] = "Software que controla un dispositivo";
 choices[80][3] = "Todas las anteriores son ciertas";
 answers[80] = choices[80][2];
 units[80] = "53,54";
 comments[80] = "Id Pregunta: 8952. ";


//  Id pregunta: 9163 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Respecto a la Directiva INSPIRE, indique la respuesta FALSA:";
 choices[81]= new Array();
 choices[81][0] = "Se refiere a la Directiva 2007/2/CE";
 choices[81][1] = "Contiene 34 temas espaciales";
 choices[81][2] = "El Comit&eacute; INSPIRE publica sus Implementing Rules en forma de Reglamentos";
 choices[81][3] = "Dirigida a que las IDEs de los Estados Miembros sean compatibles e interoperables";
 answers[81] = choices[81][2];
 units[81] = "67";
 comments[81] = "Id Pregunta: 9163. NULL";


//  Id pregunta: 9212 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;C&oacute;mo se identifican los equipos pertenecientes a una red FC?";
 choices[82]= new Array();
 choices[82][0] = "Mediante la MAC";
 choices[82][1] = "Mediante su WWN";
 choices[82][2] = "Mediante una url";
 choices[82][3] = "Mediante un identificador que el administrador configure en el momento de la instalaci&oacute;n.";
 answers[82] = choices[82][1];
 units[82] = "48";
 comments[82] = "Id Pregunta: 9212. ";


//  Id pregunta: 9384 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Seg&uacute;n la UIT, dentro de la denominaci&oacute;n 4G, se pueden incluir las siguientes tecnolog&iacute;as";
 choices[83]= new Array();
 choices[83][0] = "LTE";
 choices[83][1] = "WiMAX y LTE";
 choices[83][2] = "WiMAX";
 choices[83][3] = "LTE, WiMAX y HSPA+";
 answers[83] = choices[83][3];
 units[83] = "108";
 comments[83] = "Id Pregunta: 9384. NULL";


//  Id pregunta: 9512 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  En relaci&oacute;n a las APIs de Java, indique la afirmaci&oacute;n falsa:";
 choices[84]= new Array();
 choices[84][0] = "JNDI es el API est&aacute;ndar para el acceso a directorios y servicios de nombres";
 choices[84][1] = "JTA permite que los componentes EE gestionen sus propias transacciones";
 choices[84][2] = "Java IDL permite a las aplicaciones Java EE invocar a objetos CORBA";
 choices[84][3] = "JAX-RPC no soporta WSDL";
 answers[84] = choices[84][3];
 units[84] = "116";
 comments[84] = "Id Pregunta: 9512. NULL";


//  Id pregunta: 9543 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[85]= new Array();
 choices[85][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[85][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[85][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[85][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[85] = choices[85][1];
 units[85] = "30";
 comments[85] = "Id Pregunta: 9543. Examen TIC A1 2011";


//  Id pregunta: 9574 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  Al hablar de software libre y de su uso en la Administraci&oacute;n se&ntilde;ale la frase correcta:";
 choices[86]= new Array();
 choices[86][0] = "La Ley 11/2007 obliga a las administraciones p&uacute;blicas a poner las aplicaciones de cuyos derechos de propiedad son titulares a disposici&oacute;n de cualquier otra Administraci&oacute;n Auton&oacute;mica.";
 choices[86][1] = "Una licencia de c&oacute;digo de fuente abierta seg&uacute;n la FSF obliga a hacer p&uacute;blicas todas las mejoras, poni&eacute;ndolas a disposici&oacute;n de la comunidad.";
 choices[86][2] = "Una licencia LGPL no restringe la posibilidad de incluir el software protegido por la licencia en productos protegidos por licencias no GPL.";
 choices[86][3] = "El Real Decreto 4/2010 del Esquema Nacional de Interoperabilidad prev&eacute; un cat&aacute;logo &uacute;nicamente de est&aacute;ndares abiertos de uso obligatorio por las administraciones p&uacute;blicas.";
 answers[86] = choices[86][2];
 units[86] = "43, 61, 62";
 comments[86] = "Id Pregunta: 9574. Examen TIC A1 2011";


//  Id pregunta: 9734 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ale de entre las siguientes la t&eacute;cnica de integraci&oacute;n NO incremental para pruebas de integraci&oacute;n:";
 choices[87]= new Array();
 choices[87][0] = "Top-down.";
 choices[87][1] = "Sandwich.";
 choices[87][2] = "Big-Bang";
 choices[87][3] = "Bottom-up.";
 answers[87] = choices[87][2];
 units[87] = "86";
 comments[87] = "Id Pregunta: 9734. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9852 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes puertos es el puerto est&aacute;ndar de POP3 sobre SSL?";
 choices[88]= new Array();
 choices[88][0] = "995";
 choices[88][1] = "993";
 choices[88][2] = "220";
 choices[88][3] = "465";
 answers[88] = choices[88][0];
 units[88] = "111";
 comments[88] = "Id Pregunta: 9852. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10151 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Seg&uacute;n la ley 25/2007, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n muy grave?";
 choices[89]= new Array();
 choices[89][0] = "La no conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3.";
 choices[89][1] = "la no conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[89][2] = "La conservaci&oacute;n de los datos por un per&iacute;odo inferior al establecido en el art&iacute;culo 5.";
 choices[89][3] = "El incumplimiento deliberado de las obligaciones de protecci&oacute;n y seguridad de los datos establecidas en el art&iacute;culo 8";
 answers[89] = choices[89][1];
 units[89] = "30";
 comments[89] = "Id Pregunta: 10151. ";


//  Id pregunta: 10164 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;En qu&eacute; consiste la regla de Independencia de Integridad establecida por Codd?";
 choices[90]= new Array();
 choices[90][0] = "Los programas de aplicaci&oacute;n y actividades del terminal permanecer&aacute;n inalterados a nivel l&oacute;gico cuando se realicen cambios sobre las tablas base que preservan la informaci&oacute;n";
 choices[90][1] = "Los limitantes de integridad han de poder ser definidos utilizando el sublenguaje de datos relacional y almacenables en el cat&aacute;logo din&aacute;mico";
 choices[90][2] = "La independencia de integridad requiere la definici&oacute;n de claves ajenas con la opci&oacute;n &quot;CASCADE&quot;, a fin que se propaguen a la clave ajena los cambios realizados sobre la clave primaria referenciada";
 choices[90][3] = "Si en una relaci&oacute;n hay una clave ajena, sus valores deben coincidir con los valores de la clave primaria a que se refiere, o deben ser completamente nulos";
 answers[90] = choices[90][1];
 units[90] = "58";
 comments[90] = "Id Pregunta: 10164. ";


//  Id pregunta: 10271 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[91]= new Array();
 choices[91][0] = "Est&aacute; sometida a control por parte de la IGAE y del Tribunal de Cuentas";
 choices[91][1] = "Est&aacute; sujeta a la LOFAGE en todos sus preceptos";
 choices[91][2] = "Frente a sus resoluciones puede presentarse recurso de alzada";
 choices[91][3] = "Sus competencias son exclusivas, no pudiendo crearse &oacute;rganos similares en las Comunidades Aut&oacute;nomas";
 answers[91] = choices[91][0];
 units[91] = "29";
 comments[91] = "Id Pregunta: 10271. Art&iacute;culos 2 y 33 del RD 428/1993";


//  Id pregunta: 10486 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  La diferencia que Cobit 5 supone sobre Cobit 4 se basa en que:";
 choices[92]= new Array();
 choices[92][0] = "Se usa ITIL v.3 para la Gesti&oacute;n de las TI";
 choices[92][1] = "En COBIT 5 se habla con propiedad de Gobierno de las TI, en tanto en cuanto existe un alineamiento claro de la TI con los objetivos de Negocio";
 choices[92][2] = "Hay un dominio m&aacute;s a evaluar, que es la Gesti&oacute;n de Proyectos";
 choices[92][3] = "Ahora el Negocio debe tener en cuenta las necesidades del departamento de TI e invertir m&aacute;s dinero en dicho departamento";
 answers[92] = choices[92][1];
 units[92] = "98";
 comments[92] = "Id Pregunta: 10486. NULL";


//  Id pregunta: 10541 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Qu&eacute; cabeceras del datagrama IP son revisadas por los routers intermedios en IPv6?";
 choices[93]= new Array();
 choices[93][0] = "todas las cabeceras";
 choices[93][1] = "ninguna";
 choices[93][2] = "todas las cabeceras menos las opcionales";
 choices[93][3] = "la cabecera hop-to-hop y el resto de cabeceras menos las cabeceras opcionales";
 answers[93] = choices[93][3];
 units[93] = "100";
 comments[93] = "Id Pregunta: 10541. NULL";


//  Id pregunta: 10789 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes opciones NO corresponde a un sistema de ficheros empleado en Sistemas Operativos GNU/Linux?";
 choices[94]= new Array();
 choices[94][0] = "ext3";
 choices[94][1] = "mini fs";
 choices[94][2] = "ReiserFS";
 choices[94][3] = "Reiser4";
 answers[94] = choices[94][1];
 units[94] = "53, 54";
 comments[94] = "Id Pregunta: 10789. Examen GSI 2014";


//  Id pregunta: 11195 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento inteligente?";
 choices[95]= new Array();
 choices[95][0] = "Juventud en movimiento";
 choices[95][1] = "Uni&oacute;n por la innovaci&oacute;n";
 choices[95][2] = "Agenda Digital para Europa";
 choices[95][3] = "Todas las anteriores";
 answers[95] = choices[95][3];
 units[95] = "30";
 comments[95] = "Id Pregunta: 11195. ";


//  Id pregunta: 11310 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En la NTI de firma electr&oacute;nica, se establecen los valores que puede almacenar el metadato &quot;tipo de firma&quot;. Seleccione la serie correcta de valores";
 choices[96]= new Array();
 choices[96][0] = "Xades Detached, Xades Enveloped, Cades Detached, Cades Enveloped, Pades Enveloped, Pades Detached";
 choices[96][1] = "CSV, Xades Detached, Xades Enveloped, Cades Detached; Cades Enveloped; Pades";
 choices[96][2] = "CSV, Xades Detached, Xades Enveloping, Cades Detached; Cades Enveloping";
 choices[96][3] = "Xades Detached, Xades Enveloping, Cades Detached; Cades Enveloping";
 answers[96] = choices[96][1];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11310. ";


//  Id pregunta: 11381 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas NO es un tipo de m&eacute;trica que se describe en la Mejora Continua del Servicio (CSI)?";
 choices[97]= new Array();
 choices[97][0] = "M&eacute;tricas del proceso";
 choices[97][1] = "M&eacute;tricas del servicio";
 choices[97][2] = "M&eacute;tricas de personal";
 choices[97][3] = "M&eacute;tricas tecnol&oacute;gicas";
 answers[97] = choices[97][2];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11381. ";


//  Id pregunta: 11469 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Indique la respuesta correcta sobre la Ley 9/2014:";
 choices[98]= new Array();
 choices[98][0] = "La CNMC puede modificar la estructura y organizaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[98][1] = "El MINETUR puede modificar la estructura y organizaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[98][2] = "ORECE puede modificar cualquier punto de la Ley 9/2014.";
 choices[98][3] = "El MINETUR y ORECE siempre trabajan conjuntamente.";
 answers[98] = choices[98][1];
 units[98] = "110";
 comments[98] = "Id Pregunta: 11469. ";


//  Id pregunta: 11769 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El contrato &quot;servicios consolidados de telecomunicaciones de la Administraci&oacute;n General del Estado, fase 1&quot;&hellip; Seleccione la verdadera:";
 choices[99]= new Array();
 choices[99][0] = "participan todos los Ministerios";
 choices[99][1] = "incluye tarifa plana para todos los servicios demandados&nbsp;";
 choices[99][2] = "supone un ahorro superior a los 124 millones de euros en 4 a&ntilde;os";
 choices[99][3] = "incluye todos los servicios de los anteriores contratos de sus participantes";
 answers[99] = choices[99][2];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11769. ";


