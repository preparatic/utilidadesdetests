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

//  Id pregunta: 74 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en un recuento de en cuantos criterios ha sido la mejor?:";
 choices[0]= new Array();
 choices[0][0] = "M&eacute;todo promethee";
 choices[0][1] = "Utilidad multiatributo";
 choices[0][2] = "Permutaci&oacute;n";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = choices[0][3];
 units[0] = "34";
 comments[0] = "Id Pregunta: 74. Tema 36 de 2005";


//  Id pregunta: 75 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas utiliza &uacute;nicamente la componente subjetiva del decisor?:";
 choices[1]= new Array();
 choices[1][0] = "Concordancia";
 choices[1][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[1][2] = "Ponderaci&oacute;n lineal";
 choices[1][3] = "Ninguno de las anteriores respuestas es correcta";
 answers[1] = choices[1][3];
 units[1] = "34";
 comments[1] = "Id Pregunta: 75. ";


//  Id pregunta: 333 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Las organizaciones basadas en la informaci&oacute;n. Indique la respuesta FALSA:";
 choices[2]= new Array();
 choices[2][0] = "En los a&ntilde;os 20 las organizaciones se basaban en el mando-control. A partir de los a&ntilde;os 70 la informaci&oacute;n comenz&oacute; a ser un elemento estructural importante y se dio paso a las organizaciones basadas en la informaci&oacute;n.";
 choices[2][1] = "Seg&uacute;n Peter Drucker, uno de los gur&uacute;s de la gerencia de empresas, una de las caracter&iacute;sticas propias de las organizaciones basadas en la informaci&oacute;n es la reducci&oacute;n hasta un tercio del n&uacute;mero de ejecutivos.";
 choices[2][2] = "Una organizaci&oacute;n basada en la informaci&oacute;n obligatoriamente debe emplear nuevas tecnolog&iacute;as, ya que si no es imposible manejar el gran volumen de informaci&oacute;n generada e intercambiada.";
 choices[2][3] = "En una organizaci&oacute;n basada en el conocimiento los distintos especialistas dirigen y organizan su trabajo mediante la interacci&oacute;n con sus colegas, con un funcionamiento similar al de una orquesta.";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 333. ";


//  Id pregunta: 544 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Existe el concepto de 'copia privada' en la actual legislaci&oacute;n de propiedad intelectual?";
 choices[3]= new Array();
 choices[3][0] = "Si, es un derecho por el cual no es necesaria la autorizaci&oacute;n del creador de una obra ya divulgada para proceder a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[3][1] = "Si, pero no como copia leg&iacute;tima";
 choices[3][2] = "Si, es un derecho por el cual, previa autorizaci&oacute;n del creador de una obra ya divulgada, se procede a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[3][3] = "No";
 answers[3] = choices[3][0];
 units[3] = "36,37";
 comments[3] = "Id Pregunta: 544. LPI de 1996";


//  Id pregunta: 561 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Los modelos de optimizaci&oacute;n tratan de problemas";
 choices[4]= new Array();
 choices[4][0] = "bien comprendidos con sus caracter&iacute;sticas  cualitativas bien determinadas";
 choices[4][1] = "Debe definirse un objetivo impl&iacute;cto &uacute;nico";
 choices[4][2] = "Puede existir un procedimiento (algoritmo) viable de c&aacute;lculo, para encontrar el valor &oacute;ptimo de la funci&oacute;n objetivo";
 choices[4][3] = "En general, nunca es posibleencontrar el verdadero &oacute;ptimo global optando por encontrar una soluci&oacute;n sub&oacute;ptima que determine los valores de s&oacute;lounas pocas variables de decisi&oacute;n, al tiempo que trata a las dem&aacute;s como restricciones fijas.";
 answers[4] = choices[4][3];
 units[4] = "21";
 comments[4] = "Id Pregunta: 561. ";


//  Id pregunta: 593 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  La duraci&oacute;n total de un proyecto es:";
 choices[5]= new Array();
 choices[5][0] = "La del camino del gr&aacute;fico de Pert que m&aacute;s tareas realiza";
 choices[5][1] = "La de la tarea cr&iacute;tica";
 choices[5][2] = "La suma de la duraci&oacute;n de todas las tareas de un proyecto";
 choices[5][3] = "la del camino critico en el gr&aacute;fico de Pert";
 answers[5] = choices[5][3];
 units[5] = "28";
 comments[5] = "Id Pregunta: 593. ";


//  Id pregunta: 601 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  &iquest;Se pueden tratar datos de fuentes accesibles al p&uacute;blico?";
 choices[6]= new Array();
 choices[6][0] = "Si, ya que as&iacute; lo establece la LOPD";
 choices[6][1] = "No, no est&aacute; permitido por la LOPD";
 choices[6][2] = "Si, cuando se publique el reglamento que lo desarrolle ";
 choices[6][3] = "No, ya que no es una fuente de recogida de datos";
 answers[6] = choices[6][0];
 units[6] = "29";
 comments[6] = "Id Pregunta: 601. ";


//  Id pregunta: 603 AÃ±o de creación de pregunta: 2006-01-01
 questions[7]= "8)  &iquest;La prestaci&oacute;n de servicios por parte de terceros a las Administraciones P&uacute;blicas, cuando implica un tratamiento de datos (Art. 12 LOPD), exige";
 choices[7]= new Array();
 choices[7][0] = "Cumplir lo dispuesto en la Ley de Contratos de las Administraciones P&uacute;blicas";
 choices[7][1] = "Adem&aacute;s de cumplir lo dispuesto en otras leyes, deber&aacute; incorporar los requisitos formales exigibles al encargado del tratamiento";
 choices[7][2] = "Crear una persona jur&iacute;dica distinta sujeto al derecho privado";
 choices[7][3] = "Realizar copias de seguridad de los datos";
 answers[7] = choices[7][1];
 units[7] = "29";
 comments[7] = "Id Pregunta: 603. ";


//  Id pregunta: 692 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Del &aacute;mbito de la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico quedan excluidos los servicios prestados por:";
 choices[8]= new Array();
 choices[8][0] = "Los notarios y registradores de la propiedad en el ejercicio de sus respectivas funciones privadas";
 choices[8][1] = "Los abogados y procuradores en el ejercicio de sus funciones de representaci&oacute;n y juicio";
 choices[8][2] = "Los notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones privadas";
 choices[8][3] = "Funcionarios del Estado";
 answers[8] = choices[8][1];
 units[8] = "30";
 comments[8] = "Id Pregunta: 692. Ley 34/2002, art&iacute;culo 5";


//  Id pregunta: 712 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  En un CPD se hacen back-ups de 240 GB. Se hacen 4 al a&ntilde;o. Si se quiere tener la informaci&oacute;n de los 5 a&ntilde;os anteriores, &iquest;Cu&aacute;ntas cintas de 60 GB hacen falta?";
 choices[9]= new Array();
 choices[9][0] = "60";
 choices[9][1] = "80";
 choices[9][2] = "90";
 choices[9][3] = "70";
 answers[9] = choices[9][1];
 units[9] = "48";
 comments[9] = "Id Pregunta: 712. Similar a examen TIC SS A 2003";


//  Id pregunta: 720 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  Indique cu&aacute;l de las siguientes definiciones es verdadera. &quot;ODBC es:";
 choices[10]= new Array();
 choices[10][0] = "Un lenguaje de programaci&oacute;n para acceder a datos en sistemas gestores de bases de datos no relacionales&quot;.";
 choices[10][1] = "Una interface de aplicaciones para acceder a datos en sistemas gestores de bases de datos tanto relacionales como no relacionales&quot;.";
 choices[10][2] = "Una aplicaci&oacute;n que permite a los usuarios almacenar, procesar y recuperar informaci&oacute;n en una base de datos&quot;.";
 choices[10][3] = "Un lenguaje de programaci&oacute;n est&aacute;ndar que controla e interact&uacute;a con un sistema de gesti&oacute;n de base de datos&quot;.";
 answers[10] = choices[10][1];
 units[10] = "58";
 comments[10] = "Id Pregunta: 720. Examen TIC MAP B 2004";


//  Id pregunta: 815 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Arquitectura &ldquo;fault tolerant&rdquo; significa:";
 choices[11]= new Array();
 choices[11][0] = "Que el sistema tiene elementos redundantes activos";
 choices[11][1] = "Que el sistema es capaz de funcionar correctamente a&uacute;n en el caso de fallo de algunos elementos";
 choices[11][2] = "Que el sistema tiene elementos redundantes pasivos";
 choices[11][3] = "Todas las anteriores son ciertas";
 answers[11] = choices[11][1];
 units[11] = "48";
 comments[11] = "Id Pregunta: 815. ";


//  Id pregunta: 1073 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En el &aacute;mbito de la inteligencia artificial, &iquest;cu&aacute;l de las siguientes afirmaciones respecto de las redes sem&aacute;nticas es cierta?:";
 choices[12]= new Array();
 choices[12][0] = "La representaci&oacute;n de una red sem&aacute;ntica se realiza con nodos, correspondientes a ideas o conceptos, y arcos representando relaciones entre nodos";
 choices[12][1] = "Las redes se representan mediante sentencias condicionales que relacionan grupos de conceptos, los antecesores y los consecuentes";
 choices[12][2] = "Las redes representan patrones de un concepto e internamente est&aacute;n formados por ranuras representando caracter&iacute;sticas de las redes sem&aacute;nticas";
 choices[12][3] = "Las redes sem&aacute;nticas representan relaciones de equilibrio entre los atributos de uno o m&aacute;s objetos y el rango de valores de los mismos";
 answers[12] = choices[12][0];
 units[12] = "64";
 comments[12] = "Id Pregunta: 1073. ";


//  Id pregunta: 1198 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Java ME:";
 choices[13]= new Array();
 choices[13][0] = "Es una versi&oacute;n de la tecnolog&iacute;a Java2 para plataformas m&oacute;viles";
 choices[13][1] = "Es una version de la tecnolog&iacute;a Java2 orientada a electrodom&eacute;sticos";
 choices[13][2] = "Es una version de la tecnolog&iacute;a Java2 orientada a sistemas dom&oacute;ticos";
 choices[13][3] = "Todas las anteriores respuestas son falsas";
 answers[13] = choices[13][0];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1198. NULL";


//  Id pregunta: 1211 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La cla&uacute;sula GROUP BY se utiliza para:";
 choices[14]= new Array();
 choices[14][0] = "Agrupar varios atributos para formar una clave";
 choices[14][1] = "Formar una vista con elementos de varias tablas";
 choices[14][2] = "Agrupar usuarios para asignar privilegio";
 choices[14][3] = "Obtener en una sentencia SELECT grupos de tuplas en lugar de tuplas individuales";
 answers[14] = choices[14][3];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1211. ";


//  Id pregunta: 1242 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La sustituci&oacute;n de una placa en caliente significa:";
 choices[15]= new Array();
 choices[15][0] = "Que el ordenador debe tener energ&iacute;a en el bus";
 choices[15][1] = "Que se puede hacer con el ordenador funcionando, sin alterar su comportamiento";
 choices[15][2] = "Que debe hacerse inmediatamente despu&eacute;s de haber sacado la defectuosa, en menos tiempo del time out de uso de la placa (normalmente menos de 2 minutos)";
 choices[15][3] = "Son falsas todas las respuestas anteriores";
 answers[15] = choices[15][1];
 units[15] = "47";
 comments[15] = "Id Pregunta: 1242. ";


//  Id pregunta: 1258 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Las operaciones de la Unidad Aritm&eacute;tico-L&oacute;gica se clasifican en:";
 choices[16]= new Array();
 choices[16][0] = "Desplazamiento, l&oacute;gicas y aritm&eacute;ticas";
 choices[16][1] = "L&oacute;gicas y aritm&eacute;ticas";
 choices[16][2] = "Desplazamiento, l&oacute;gicas y adici&oacute;n";
 choices[16][3] = "L&oacute;gicas y adici&oacute;n";
 answers[16] = choices[16][0];
 units[16] = "47";
 comments[16] = "Id Pregunta: 1258. ";


//  Id pregunta: 1261 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Las redes neuronales son:";
 choices[17]= new Array();
 choices[17][0] = "Redes de comunicaciones controladas por inteligencia artificial";
 choices[17][1] = "Redes de ordenadores que piensan";
 choices[17][2] = "Una tecnolog&iacute;a que emula el funcionamiento del cerebro humano";
 choices[17][3] = "Nada de lo anterior";
 answers[17] = choices[17][2];
 units[17] = "63";
 comments[17] = "Id Pregunta: 1261. ";


//  Id pregunta: 1286 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Los tipos de entidad dentro de un modelo entidad/asociaci&oacute;n son: ";
 choices[18]= new Array();
 choices[18][0] = "Regulares y d&eacute;biles";
 choices[18][1] = "Regulares e irregulares";
 choices[18][2] = "Externas, internas, regulares y d&eacute;biles";
 choices[18][3] = "Ninguna de las anteriores.";
 answers[18] = choices[18][0];
 units[18] = "58";
 comments[18] = "Id Pregunta: 1286. ";


//  Id pregunta: 1577 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  Respecto a SSL";
 choices[19]= new Array();
 choices[19][0] = "Es un protocolo promovido por IETF";
 choices[19][1] = "Se diferencia de TSL en las t&eacute;cnicas criptogr&aacute;ficas empleadas";
 choices[19][2] = "Cuando HTTP se usa sobre un canal SSL se denomina HTTPS";
 choices[19][3] = "Est&aacute; restringido a su uso en browsers";
 answers[19] = choices[19][2];
 units[19] = "111";
 comments[19] = "Id Pregunta: 1577. Tanenbaum";


//  Id pregunta: 1862 AÃ±o de creación de pregunta: 2009-01-01
 questions[20]= "21)  Relativo a la firma digital, indique la opci&oacute;n incorrecta:";
 choices[20]= new Array();
 choices[20][0] = "XMLDSig es una sintaxis XML para la generaci&oacute;n de firma digital";
 choices[20][1] = "XMLDSig s&oacute;lo se utiliza para firmar documentos XML";
 choices[20][2] = "XML Advanced Electronic Signatures (XAdES) cumple la directiva europea sobre firma electr&oacute;nica 1999/93/CE";
 choices[20][3] = "Las respuestas 'a' y 'c' son verdaderas";
 answers[20] = choices[20][1];
 units[20] = "74";
 comments[20] = "Id Pregunta: 1862. NULL";


//  Id pregunta: 1893 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Los controladores RAID hardware son mucho m&aacute;s r&aacute;pidos que los software. Tambi&eacute;n son mucho m&aacute;s";
 choices[21]= new Array();
 choices[21][0] = "seguros";
 choices[21][1] = "fiables";
 choices[21][2] = "voluminosos";
 choices[21][3] = "caros";
 answers[21] = choices[21][3];
 units[21] = "48";
 comments[21] = "Id Pregunta: 1893. ";


//  Id pregunta: 2094 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El Sistema de Gesti&oacute;n del Diccionario de Recursos de Informaci&oacute;n (SGDRI):";
 choices[22]= new Array();
 choices[22][0] = "Es un componente del Sistema de Gesti&oacute;n de Base de Datos (SGBD) del sistema de informaci&oacute;n";
 choices[22][1] = "Se puede apoyar en el SGBD, en el Sistema de Gesti&oacute;n de Ficheros y en el sistema operativo";
 choices[22][2] = "Permite el almacenamiento de la sintaxis y la sem&aacute;ntica de los diferentes lenguajes que soporta los componentes DRI";
 choices[22][3] = "Describe los datos, componentes f&iacute;sicos y elementos del entorno que integran cada subsistema";
 answers[22] = choices[22][1];
 units[22] = "96";
 comments[22] = "Id Pregunta: 2094. NULL";


//  Id pregunta: 2169 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Indique la afirmaci&oacute;n verdadera relativa a la Gesti&oacute;n de la Documentaci&oacute;n de un proyecto o sistema:";
 choices[23]= new Array();
 choices[23][0] = "La gesti&oacute;n de configuraci&oacute;n y control de versiones se refiere &uacute;nicamente al producto software y no a la documentaci&oacute;n";
 choices[23][1] = "La documentaci&oacute;n producida durante el desarrollo de un proyecto es independiente de la metodolog&iacute;a empleada";
 choices[23][2] = "El documento de requisitos de sistema es anterior al documento de requisitos de usuario";
 choices[23][3] = "La documentaci&oacute;n debe entenderse como todos los productos resultantes de las tareas realizadas, ya sean informes, programas, juegos de pruebas, gr&aacute;ficos, etc";
 answers[23] = choices[23][3];
 units[23] = "95,28";
 comments[23] = "Id Pregunta: 2169. ";


//  Id pregunta: 2236 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Suponiendo un ciclo de vida en cascada con fases de requisitos del sistema global y sistema software, dise&ntilde;o preliminar, dise&ntilde;o detallado y codificaci&oacute;n &iquest;d&oacute;nde se realiza la implementaci&oacute;n del sistema?";
 choices[24]= new Array();
 choices[24][0] = "Dise&ntilde;o detallado";
 choices[24][1] = "Codificaci&oacute;n";
 choices[24][2] = "Requisitos del sistema software";
 choices[24][3] = "Dise&ntilde;o preliminar";
 answers[24] = choices[24][1];
 units[24] = "76";
 comments[24] = "Id Pregunta: 2236. ";


//  Id pregunta: 2664 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  El nivel l&eacute;xico-sint&aacute;ctico:";
 choices[25]= new Array();
 choices[25][0] = "Analiza las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[25][1] = "Llega a la comprensi&oacute;n del significado del mensaje, eliminando las posibles interpretaciones absurdas y comprobando la coherencia del mensaje recibido con el conocimiento previo que se tiene de la realidad, as&iacute; como del contexto en el que discurre el di&aacute;l";
 choices[25][2] = "Determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras.";
 choices[25][3] = "Extrae los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos.";
 answers[25] = choices[25][3];
 units[25] = "94";
 comments[25] = "Id Pregunta: 2664. ";


//  Id pregunta: 2732 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a que cubra el desarrollo de planes de sistemas de informaci&oacute;n?";
 choices[26]= new Array();
 choices[26][0] = "M&eacute;trica";
 choices[26][1] = "Racines";
 choices[26][2] = "Method 1";
 choices[26][3] = "Eclipse";
 answers[26] = choices[26][3];
 units[26] = "77";
 comments[26] = "Id Pregunta: 2732. ";


//  Id pregunta: 2833 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  La transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema es:";
 choices[27]= new Array();
 choices[27][0] = "Ingenier&iacute;a inversa.";
 choices[27][1] = "Reestructuraci&oacute;n.";
 choices[27][2] = "Ingenier&iacute;a hacia delante.";
 choices[27][3] = "Reingenier&iacute;a.";
 answers[27] = choices[27][1];
 units[27] = "91";
 comments[27] = "Id Pregunta: 2833. ";


//  Id pregunta: 2955 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l es el bit del segmento TCP que le indica al receptor que entregue los datos inmediatamente a la aplicaci&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "ACK";
 choices[28][1] = "PSH";
 choices[28][2] = "RST";
 choices[28][3] = "PUT";
 answers[28] = choices[28][1];
 units[28] = "100";
 comments[28] = "Id Pregunta: 2955. Examen TIC MAP B 2004";


//  Id pregunta: 2986 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  La direcci&oacute;n ip 127.0.0.1 representa a";
 choices[29]= new Array();
 choices[29][0] = "El router de la red";
 choices[29][1] = "Toda la red";
 choices[29][2] = "El propio equipo";
 choices[29][3] = "Usualmente el servidor";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 2986. NULL";


//  Id pregunta: 3040 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes protocolos de internet relacionados con el correo electr&oacute;nico permite descargar selectivamente los mensajes de entrada del servidor de correo?:";
 choices[30]= new Array();
 choices[30][0] = "SMTP (Simple Mail Transfer Protocol)";
 choices[30][1] = "POP3 (Post Office Protocol versi&oacute;n 3)";
 choices[30][2] = "IMAP4 (Internet Message Access Protocol versi&oacute;n 4)";
 choices[30][3] = "S/MIME (Secure Multipurpose Internet Mail Extensions)";
 answers[30] = choices[30][2];
 units[30] = "106";
 comments[30] = "Id Pregunta: 3040. ";


//  Id pregunta: 3128 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;C&oacute;mo se suele representar la trama de un STM-1 en SDH?";
 choices[31]= new Array();
 choices[31][0] = "como una fila de 2430 octetos separados por bloques funcionales";
 choices[31][1] = "como una matriz de 270 filas y 9 columnas de octetos separados en bloques funcionales";
 choices[31][2] = "como una columna de 2430 octetos separados por bloques funcionales";
 choices[31][3] = "como una matriz de 270 columnas y 9 filas de octetos separados en bloques funcionales";
 answers[31] = choices[31][3];
 units[31] = "109";
 comments[31] = "Id Pregunta: 3128. ";


//  Id pregunta: 3155 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta respecto a los dispositivos a usar en la interconexi&oacute;n de redes locales?";
 choices[32]= new Array();
 choices[32][0] = "Los hubs o concentradores se suelen usar para implementar topolog&iacute;as en estrella f&iacute;sica, pero funcionando como un anillo o como un bus l&oacute;gico";
 choices[32][1] = "Los repetidores &uacute;nicamente sirven para repetir la se&ntilde;al transmitida evitando su atenuaci&oacute;n, ampliando as&iacute; la longitud del cable que soporta la red";
 choices[32][2] = "Los puentes ayudan a resolver el problema de limitaci&oacute;n de distancias junto con el de limitaci&oacute;n del n&uacute;mero de nodos en una red";
 choices[32][3] = "Las pasarelas sirven principalmente para enlazar redes de similares caracter&iacute;sticas";
 answers[32] = choices[32][3];
 units[32] = "102";
 comments[32] = "Id Pregunta: 3155. NULL";


//  Id pregunta: 3406 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Ethernet:";
 choices[33]= new Array();
 choices[33][0] = "Fue inventada por Xerox y desarrollada por Xerox, Intel y DEC";
 choices[33][1] = "Fue inventada por Fujitsu y desarrollada por Fujitsu, Nortel y Cisco";
 choices[33][2] = "Fue inventada por Siemens y desarrollada por Siemens, Alcatel y Lucent";
 choices[33][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[33] = choices[33][0];
 units[33] = "101";
 comments[33] = "Id Pregunta: 3406. ";


//  Id pregunta: 3691 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Las caracter&iacute;sticas: Separaci&oacute;n de portadoras = 200 KHz, Ancho de banda = 75 MHz, Distancia duplex = 95 MHz, corresponden a un sistema:";
 choices[34]= new Array();
 choices[34][0] = "GSM 900";
 choices[34][1] = "GSM 1800";
 choices[34][2] = "PCS 1900";
 choices[34][3] = "UMTS";
 answers[34] = choices[34][1];
 units[34] = "108";
 comments[34] = "Id Pregunta: 3691. ";


//  Id pregunta: 3731 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Los nodos B en UMTS son equivalentes a:";
 choices[35]= new Array();
 choices[35][0] = "SGSN en GPRS";
 choices[35][1] = "MSC en GSM";
 choices[35][2] = "BTS en GSM";
 choices[35][3] = "SMSC en GSM";
 answers[35] = choices[35][2];
 units[35] = "108";
 comments[35] = "Id Pregunta: 3731. ";


//  Id pregunta: 3760 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Para establecer una comunicaci&oacute;n punto a punto seg&uacute;n TCP/IP es necesario conocer:";
 choices[36]= new Array();
 choices[36][0] = "direcci&oacute;n y puerto origen";
 choices[36][1] = "direcci&oacute;n y puerto destino";
 choices[36][2] = "s&oacute;lo direcciones origen y destino";
 choices[36][3] = "las respuestas a) y b) son correctas";
 answers[36] = choices[36][3];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3760. NULL";


//  Id pregunta: 3836 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  SOAP es:";
 choices[37]= new Array();
 choices[37][0] = "Synchronized Objects Application Protocol, protocolo de aplicaci&oacute;n sincronizada para objetos";
 choices[37][1] = "System Open Access Protocol, protocolo de acceso abierto a sistemas";
 choices[37][2] = "Simple Object Access Protocol, protocolo de acceso simple a objetos";
 choices[37][3] = "SOAP no se corresponde con ningun acr&oacute;nimo aplicable en tecnolog&iacute;a";
 answers[37] = choices[37][2];
 units[37] = "113";
 comments[37] = "Id Pregunta: 3836. ";


//  Id pregunta: 3841 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  SS7 (Signaling System Number 7) forma parte de:";
 choices[38]= new Array();
 choices[38][0] = "RDSI (ISDN)";
 choices[38][1] = "Videotext";
 choices[38][2] = "ATM";
 choices[38][3] = "Frame Relay";
 answers[38] = choices[38][0];
 units[38] = "109";
 comments[38] = "Id Pregunta: 3841. ";


//  Id pregunta: 3871 AÃ±o de creación de pregunta: 2004-01-01
 questions[39]= "40)  HTML";
 choices[39]= new Array();
 choices[39][0] = "Define reglas para el intercambio de mensajes";
 choices[39][1] = "Permite incorporar plantillas XSL";
 choices[39][2] = "Es un lenguaje que describe c&oacute;mo se formatean los mensajes";
 choices[39][3] = "Todas son ciertas";
 answers[39] = choices[39][2];
 units[39] = "113";
 comments[39] = "Id Pregunta: 3871. Tanenbaum";


//  Id pregunta: 3888 AÃ±o de creación de pregunta: 2004-01-01
 questions[40]= "41)  El est&aacute;ndar 802.11i relativo a seguridad en redes WiFi, &iquest;Qu&eacute; nuevo protocolo utiliza?";
 choices[40]= new Array();
 choices[40][0] = "WPA2";
 choices[40][1] = "WPA3";
 choices[40][2] = "TKIP";
 choices[40][3] = "WEP";
 answers[40] = choices[40][0];
 units[40] = "107";
 comments[40] = "Id Pregunta: 3888. NULL";


//  Id pregunta: 3951 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  En telefon&iacute;a movil GSM qu&eacute; dos bases de datos se utilizan para guardar datos del cliente";
 choices[41]= new Array();
 choices[41][0] = "VLR y HLR ";
 choices[41][1] = "MSC y VLR";
 choices[41][2] = "NMC y OMC";
 choices[41][3] = "GMSC y NMC";
 answers[41] = choices[41][0];
 units[41] = "108";
 comments[41] = "Id Pregunta: 3951. ";


//  Id pregunta: 3957 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  La especificaci&oacute;n H.323:";
 choices[42]= new Array();
 choices[42][0] = "Ha sido creada por la ISO, y define un conjunto de protocolos para transmitir voz, video y datos sobre IP";
 choices[42][1] = "Emplea a su vez otras especificaciones, como H.225 y H.245";
 choices[42][2] = "Hace uso del protocolo RTP para establecer las llamadas sobre la red IP";
 choices[42][3] = "Las respuestas b) y c) son correctas";
 answers[42] = choices[42][1];
 units[42] = "107";
 comments[42] = "Id Pregunta: 3957. NULL";


//  Id pregunta: 4195 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  El estandar 802.11e se centra en";
 choices[43]= new Array();
 choices[43][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[43][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[43][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[43][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[43] = choices[43][0];
 units[43] = "107";
 comments[43] = "Id Pregunta: 4195. NULL";


//  Id pregunta: 4242 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indique que significan las siglas POJO";
 choices[44]= new Array();
 choices[44][0] = "Plain Over Java Objects";
 choices[44][1] = "Plain Old JavaBean Objects";
 choices[44][2] = "Plain Old Java Objects";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][2];
 units[44] = "60.116";
 comments[44] = "Id Pregunta: 4242. NULL";


//  Id pregunta: 4319 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Un sistema de supresi&oacute;n de incendios de &ldquo;tuber&iacute;a seca&rdquo; (dry-pipe) es un sistema que usa:";
 choices[45]= new Array();
 choices[45][0] = "Agua, pero en el cual el agua no entra a las tuber&iacute;as hasta que se haya detectado un incendio.";
 choices[45][1] = "Agua, pero en el cual las tuber&iacute;as est&aacute;n revestidas de selladores especiales a prueba de agua.";
 choices[45][2] = "Di&oacute;xido de carbono en lugar de agua.";
 choices[45][3] = "Halon en lugar de agua.";
 answers[45] = choices[45][0];
 units[45] = "32";
 comments[45] = "Id Pregunta: 4319. ";


//  Id pregunta: 4326 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En el &aacute;mbito de la Administraci&oacute;n de los Sistemas de Bases de Datos &iquest;Cu&aacute;l de las siguientes afirmaciones, es verdadera?.";
 choices[46]= new Array();
 choices[46][0] = "El Administrador de Datos (AD) est&aacute; mas involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 choices[46][1] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las primeras etapas del ciclo de vida (desde la planificaci&oacute;n de la base de datos hasta el dise&ntilde;o l&oacute;gico).";
 choices[46][2] = "Las responsabilidades del Administrador de la Base de Datos (ABD) se centran en el desarrollo del procedimiento y de las pol&iacute;ticas generales del sistema.";
 choices[46][3] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 answers[46] = choices[46][3];
 units[46] = "26";
 comments[46] = "Id Pregunta: 4326. ";


//  Id pregunta: 4357 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  fundamental de los lenguajes de codificaci&oacute;n de tercera generaci&oacute;n es que:";
 choices[47]= new Array();
 choices[47][0] = "Suelen ser herramientas para aplicaciones espec&iacute;ficas.";
 choices[47][1] = "Utilizan y aplican las metodolog&iacute;as de programaci&oacute;n estructurada.";
 choices[47][2] = "Son leguajes que permiten programar simb&oacute;licamente.";
 choices[47][3] = "Est&aacute;n pensados para la ense&ntilde;anza.";
 answers[47] = choices[47][1];
 units[47] = "";
 comments[47] = "Id Pregunta: 4357. ";


//  Id pregunta: 4429 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  No tiene la consideraci&oacute;n de Autoridad Nacional de Reglamentaci&oacute;n de Telecomunicaciones, de conformidad con el art. 68 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, General de Telecomunicaciones:";
 choices[48]= new Array();
 choices[48][0] = "El Gobierno.";
 choices[48][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[48][2] = "Los &oacute;rganos superiores y directivos del Ministerio de Econom&iacute;a y Competitividad que, de conformidad con la estructura org&aacute;nica del departamento, asuman las competencias asignadas a este ministerio en materias reguladas por esta Ley.";
 choices[48][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 answers[48] = choices[48][1];
 units[48] = "110";
 comments[48] = "Id Pregunta: 4429. ";


//  Id pregunta: 4465 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  El algoritmo MD5:";
 choices[49]= new Array();
 choices[49][0] = "Es un algoritmo de cifrado asim&eacute;trico.";
 choices[49][1] = "Es un algoritmo de cifrado sim&eacute;trico.";
 choices[49][2] = "Es un algoritmo de funci&oacute;n hash.";
 choices[49][3] = "Es un algoritmo de almacenamiento de la clave privada";
 answers[49] = choices[49][2];
 units[49] = "72";
 comments[49] = "Id Pregunta: 4465. ";


//  Id pregunta: 4517 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Qu&eacute; es un almac&eacute;n de datos?";
 choices[50]= new Array();
 choices[50][0] = "Un sistema de almacenamiento masivo en discos RAID.";
 choices[50][1] = "Una base de datos OLTP.";
 choices[50][2] = "Un repositorio de informaci&oacute;n recopilada de distintas fuentes.";
 choices[50][3] = "Un sistema de almacenamiento innovador que viene integrado en el paquete de Suse&shy;Linux.";
 answers[50] = choices[50][2];
 units[50] = "81";
 comments[50] = "Id Pregunta: 4517. ";


//  Id pregunta: 4604 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  Ignorar quien accede a que dato y cuando lo hace, afecta a Ia dimensi&oacute;n de la seguridad denominada";
 choices[51]= new Array();
 choices[51][0] = "confidencialidad";
 choices[51][1] = "disponibilidad";
 choices[51][2] = "integridad";
 choices[51][3] = "trazabilidad";
 answers[51] = choices[51][3];
 units[51] = "111";
 comments[51] = "Id Pregunta: 4604. NULL";


//  Id pregunta: 4854 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NOes cierta?";
 choices[52]= new Array();
 choices[52][0] = "Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks)";
 choices[52][1] = "Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada unode sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas pordicha estaci&oacute;n";
 choices[52][2] = "Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast";
 choices[52][3] = "Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os";
 answers[52] = choices[52][2];
 units[52] = "100";
 comments[52] = "Id Pregunta: 4854. NULL";


//  Id pregunta: 4896 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  Cuando, a causa de su especificidad t&eacute;cnica, el suministro de un producto o la prestaci&oacute;n de un servicio s&oacute;lo pueda encomendarse a un &uacute;nico proveedor, el procedimiento de adjudicaci&oacute;n del contrato ser&aacute;:";
 choices[53]= new Array();
 choices[53][0] = "Negociado";
 choices[53][1] = "Restringido";
 choices[53][2] = "Directo";
 choices[53][3] = "Por subasta";
 answers[53] = choices[53][0];
 units[53] = "41";
 comments[53] = "Id Pregunta: 4896. ";


//  Id pregunta: 4968 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Los equipos utilizados para la interconexi&oacute;n de redes a nivel 5 seg&uacute;n el modelo OSI se denomina:";
 choices[54]= new Array();
 choices[54][0] = "Repetidores.";
 choices[54][1] = "Routers.";
 choices[54][2] = "Bridges.";
 choices[54][3] = "Gateways.";
 answers[54] = choices[54][3];
 units[54] = "102";
 comments[54] = "Id Pregunta: 4968. Examen TIC B 2007";


//  Id pregunta: 5019 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Seg&uacute;n el RD 209/2003, de 21 de febrero, con respecto a las notificaciones telem&aacute;ticas, cuando exista constancia dela recepci&oacute;n de una notificaci&oacute;n, se considerar&aacute; que &eacute;sta ha sido rechazada cuando no se haya accedido a sucontenido en un plazo de:";
 choices[55]= new Array();
 choices[55][0] = "10 d&iacute;as naturales";
 choices[55][1] = "10 d&iacute;as h&aacute;biles";
 choices[55][2] = "20 d&iacute;as naturales";
 choices[55][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido";
 answers[55] = choices[55][0];
 units[55] = "30";
 comments[55] = "Id Pregunta: 5019. Examen TIC A 2007";


//  Id pregunta: 5021 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Bluetooth es un enlace radio de corto alcance sin cables con un radio de:";
 choices[56]= new Array();
 choices[56][0] = "Hasta 5 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz";
 choices[56][1] = "Hasta 10 metros y un rango de frecuencia de 2,202 GHz a 2,404 GHz";
 choices[56][2] = "Hasta 10 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz";
 choices[56][3] = "Hasta 8 metros y un rango de frecuencia de 1,404 GHz a 2,480 GHz";
 answers[56] = choices[56][2];
 units[56] = "107";
 comments[56] = "Id Pregunta: 5021. Examen TIC A 2007";


//  Id pregunta: 5068 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a los XML Schemas es incorrecta?:";
 choices[57]= new Array();
 choices[57][0] = "Los XML Schemas utilizan sintaxis XML";
 choices[57][1] = "Es imposible referenciar m&uacute;ltiples XML Schemas desde el mismo documento XML";
 choices[57][2] = "Los XML Schemas soportan namespaces";
 choices[57][3] = "Los XML Schemas permiten definir tipos de datos";
 answers[57] = choices[57][1];
 units[57] = "69";
 comments[57] = "Id Pregunta: 5068. Examen TIC A 2007";


//  Id pregunta: 5078 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public KeyInfrastructures)? :";
 choices[58]= new Array();
 choices[58][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica";
 choices[58][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido";
 choices[58][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;npermitidas para dicho certificado";
 choices[58][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet";
 answers[58] = choices[58][3];
 units[58] = "74";
 comments[58] = "Id Pregunta: 5078. Examen TIC A 2007";


//  Id pregunta: 5092 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Las dimensiones del DNI electr&oacute;nico son:";
 choices[59]= new Array();
 choices[59][0] = "85,60 mm de ancho X 53,98 mm de alto";
 choices[59][1] = "8,6 mm de ancho X 5,9 mm de alto";
 choices[59][2] = "60 mm de ancho X 58 mm de alto";
 choices[59][3] = "85,60 mm de alto X 53,98 mm de ancho";
 answers[59] = choices[59][0];
 units[59] = "74";
 comments[59] = "Id Pregunta: 5092. NULL";


//  Id pregunta: 5563 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  En el protoloc IPv6, &iquest;cu&aacute;l ser&iacute;a la primera cabecera adicional despu&eacute;s de la cabecera IPv6?";
 choices[60]= new Array();
 choices[60][0] = "Cualquiera, no llevan un orden determinado";
 choices[60][1] = "Cabecera salto a salto";
 choices[60][2] = "Cabecera de autenticaci&oacute;n";
 choices[60][3] = "Cabecera de encaminamiento";
 answers[60] = choices[60][1];
 units[60] = "100";
 comments[60] = "Id Pregunta: 5563. ";


//  Id pregunta: 5723 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  Elija la opci&oacute;n correcta:";
 choices[61]= new Array();
 choices[61][0] = "Un documento XML v&aacute;lido es aqu&eacute;l que tiene una sintaxis XML v&aacute;lida.";
 choices[61][1] = "Un documento XML v&aacute;lido es aqu&eacute;l que cumple las reglas de un DTD.";
 choices[61][2] = "Un documento XML v&aacute;lido es aqu&eacute;l que est&aacute; bien formado y tambi&eacute;n cumple con las reglas de un DTD";
 choices[61][3] = "Un documento XML bien formado es aqu&eacute;l que cumple las reglas de un DTD";
 answers[61] = choices[61][2];
 units[61] = "69";
 comments[61] = "Id Pregunta: 5723. MAP 2008 A2";


//  Id pregunta: 5725 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  Los SGBD soportan 3 tipos de lenguajes: Lenguaje de Consulta de Datos, Lenguaje de Definici&oacute;n de Datos y Lenguaje de Manipulaci&oacute;n de Datos. Concretamente, el est&aacute;ndar SQL ISO 9075:1987 contempla en su definici&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Lenguaje de Consulta de datos.";
 choices[62][1] = "Lenguaje de Consulta y de Manipulaci&oacute;n de datos.";
 choices[62][2] = "Lenguaje de Consulta y de Definici&oacute;n de datos.";
 choices[62][3] = "Lenguaje de Consulta, de Manipulaci&oacute;n y de Definici&oacute;n de datos.";
 answers[62] = choices[62][3];
 units[62] = "58";
 comments[62] = "Id Pregunta: 5725. MAP 2008 A2";


//  Id pregunta: 6064 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  El creador de la t&eacute;cnica de modelado de objetos (OMT) fue:";
 choices[63]= new Array();
 choices[63][0] = "Pressman.";
 choices[63][1] = "Rumbaugh.";
 choices[63][2] = "Grady Booch.";
 choices[63][3] = "Kent Beck.";
 answers[63] = choices[63][1];
 units[63] = "79";
 comments[63] = "Id Pregunta: 6064. TIC A 2009";


//  Id pregunta: 6080 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  La gesti&oacute;n de los recursos humanos del proyecto incluye lo siguiente:";
 choices[64]= new Array();
 choices[64][0] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[64][1] = "Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[64][2] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto.";
 choices[64][3] = "Ninguna de las anteriores.";
 answers[64] = choices[64][0];
 units[64] = "27";
 comments[64] = "Id Pregunta: 6080. ";


//  Id pregunta: 6149 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;C&oacute;mo se representan las relaciones &quot;ficticias&quot; en el M&eacute;todo de Diagramaci&oacute;n por Flechas (ADM)?";
 choices[65]= new Array();
 choices[65][0] = "Mediante una l&iacute;nea de puntos";
 choices[65][1] = "En ADM no existe el concepto de relaciones &quot;ficticias&quot;";
 choices[65][2] = "Mediante una flecha convexa";
 choices[65][3] = "Mediante una flecha c&oacute;ncava";
 answers[65] = choices[65][0];
 units[65] = "28";
 comments[65] = "Id Pregunta: 6149. ";


//  Id pregunta: 6291 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica que deba cumplir un requisito en un an&aacute;lisis de la informaci&oacute;n para que sea de utilidad?";
 choices[66]= new Array();
 choices[66][0] = "Completo";
 choices[66][1] = "Verificable";
 choices[66][2] = "Dif&iacute;cil de modificar";
 choices[66][3] = "Consistente";
 answers[66] = choices[66][2];
 units[66] = "78";
 comments[66] = "Id Pregunta: 6291. ";


//  Id pregunta: 6491 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Respecto a los servicios de directorio se puede afirmar que:";
 choices[67]= new Array();
 choices[67][0] = "LDAP define el modelo completo de servicio de directorio";
 choices[67][1] = "X.500 es un protocolo de acceso a un servicio de directorio LDAP";
 choices[67][2] = "LDAP es un protocolo de acceso a servicios de directorio X.500";
 choices[67][3] = "Ninguna de las anteriores es correcta";
 answers[67] = choices[67][2];
 units[67] = "74";
 comments[67] = "Id Pregunta: 6491. Castilla La Mancha 2009";


//  Id pregunta: 6523 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  El API que permite a los desarrolladores Java generar y recoger mensajes SOAP con ficheros adjuntos es:";
 choices[68]= new Array();
 choices[68][0] = "JAXR";
 choices[68][1] = "JSXA";
 choices[68][2] = "SAAJ";
 choices[68][3] = "SWAJ";
 answers[68] = choices[68][2];
 units[68] = "116";
 comments[68] = "Id Pregunta: 6523. NULL";


//  Id pregunta: 6580 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  IPv6";
 choices[69]= new Array();
 choices[69][0] = "Proporciona un formato de cabecera m&aacute;s complejo";
 choices[69][1] = "Proporciona la posibilidad de a&ntilde;adir extensiones pero no opciones";
 choices[69][2] = "A&ntilde;ade posibilidades para gestionar la calidad de servicios";
 choices[69][3] = "Todas las respuestas anteriores son correctas";
 answers[69] = choices[69][2];
 units[69] = "100";
 comments[69] = "Id Pregunta: 6580. NULL";


//  Id pregunta: 7159 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  En relaci&oacute;n a la administraci&oacute;n de procesos de los sistemas operativos, &iquest;en qu&eacute; consiste la planificaci&oacute;n round-robin?";
 choices[70]= new Array();
 choices[70][0] = "En asignar un tiempo de ejecuci&oacute;n a cada proceso";
 choices[70][1] = "En ejecutar primero el proceso m&aacute;s corto";
 choices[70][2] = "En asignar a cada proceso una prioridad y ejecutar el proceso que m&aacute;s prioridad tenga";
 choices[70][3] = "En ejecutar los procesos de forma aleatoria";
 answers[70] = choices[70][0];
 units[70] = "52";
 comments[70] = "Id Pregunta: 7159. Examen TIC B 2009";


//  Id pregunta: 7318 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  Se&ntilde;ala cu&aacute;l de los siguientes lenguajes de programaci&oacute;n no tiene alguna implementaci&oacute;n para el Framework .NET:";
 choices[71]= new Array();
 choices[71][0] = "COBOL";
 choices[71][1] = "Fortran";
 choices[71][2] = "Delphi";
 choices[71][3] = "Todos los lenguajes anteriores tienen alguna implementaci&oacute;n para el Framework .NET";
 answers[71] = choices[71][3];
 units[71] = "59";
 comments[71] = "Id Pregunta: 7318. NULL";


//  Id pregunta: 7769 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)   Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[72]= new Array();
 choices[72][0] = " Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica.";
 choices[72][1] = " Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n.";
 choices[72][2] = " Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica.";
 choices[72][3] = " Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica.";
 answers[72] = choices[72][2];
 units[72] = "73";
 comments[72] = "Id Pregunta: 7769. Map 2005";


//  Id pregunta: 7940 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)   En el proceso de reconocimiento del habla, el algoritmo Dynamic Time Warping (DTW) se utiliza para:";
 choices[73]= new Array();
 choices[73][0] = " Evitar el uso de plantillas.";
 choices[73][1] = " Evitar la alineaci&oacute;n temporal.";
 choices[73][2] = " Reconocer palabras aisladas y habla continua.";
 choices[73][3] = " Conseguir resultados &oacute;ptimos con vocabularios de 5.000 palabras.";
 answers[73] = choices[73][2];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 7940. Map 2006";


//  Id pregunta: 7944 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)   El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real Decreto Legislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, en lo referente al software, establece sobre la creaci&oacute;n de programas de ordenador por trabajadores asalariados en el ejercicio de sus funciones en la empresa que:";
 choices[74]= new Array();
 choices[74][0] = " No son titulares de los derechos de explotaci&oacute;n del programa, ni del c&oacute;digo fuente, ni del objeto, salvo pacto en contrario con la empresa.";
 choices[74][1] = " Son titulares siempre de los derechos de explotaci&oacute;n del c&oacute;digo fuente del programa, no as&iacute; del c&oacute;digo objeto, que necesariamente se habr&aacute; probado y validado en los sistemas inform&aacute;ticos de la empresa.";
 choices[74][2] = " Siempre son titulares tanto del c&oacute;digo fuente como del objeto, as&iacute; como de toda la documentaci&oacute;n preparatoria que hayan generado durante su trabajo de creaci&oacute;n, el empresario tendr&aacute; derecho en todo caso a disponer de una copia de todo el software para su explotaci&oacute;n comercial.";
 choices[74][3] = " El &uacute;nico y exclusivo titular de los derechos de explotaci&oacute;n del programa de ordenador creado es el empresario, en toda circunstancia legal.";
 answers[74] = choices[74][0];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7944. Map 2006";


//  Id pregunta: 8250 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  En el desarrollo de software &aacute;gil (Agile) se usan los siguientes niveles de planificaci&oacute;n:";
 choices[75]= new Array();
 choices[75][0] = "Planificaci&oacute;n de entregas, planificaci&oacute;n de iteraciones o sprints y planificaci&oacute;n diaria.";
 choices[75][1] = "Planificaci&oacute;n estrat&eacute;gica y planifiaci&oacute;n semanal.";
 choices[75][2] = "Planificaci&oacute;n de iteraciones o sprints, planificaci&oacute;n de hitos de cada iteraci&oacute;n o sprint y planificaci&oacute;n semanal.";
 choices[75][3] = "Planificaci&oacute;n estrat&eacute;gica, planificaci&oacute;n de recursos y planificaci&oacute;n de entregas.";
 answers[75] = choices[75][0];
 units[75] = "76";
 comments[75] = "Id Pregunta: 8250. Examen TIC A1 2010";


//  Id pregunta: 8260 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un principio b&aacute;sico del Esquema Nacional de Seguridad (ENS):";
 choices[76]= new Array();
 choices[76][0] = "Funci&oacute;n diferenciada.";
 choices[76][1] = "Prevenci&oacute;n, reacci&oacute;n y recuperaci&oacute;n.";
 choices[76][2] = "L&iacute;neas de defensa.";
 choices[76][3] = "Continuidad de la actividad.";
 answers[76] = choices[76][3];
 units[76] = "43";
 comments[76] = "Id Pregunta: 8260. Examen TIC A1 2010";


//  Id pregunta: 8381 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  La tecnolog&iacute;a de transmisi&oacute;n 100Base-FX:";
 choices[77]= new Array();
 choices[77][0] = "Utiliza cable UTP de categor&iacute;a 5 o superior.";
 choices[77][1] = "Tiene una longitud m&aacute;xima de 2 kil&oacute;metros para transmisiones half-duplex y 400 metros para transmisiones full-duplex.";
 choices[77][2] = "Es compatible con la tecnolog&iacute;a 10Base&bull;FL.";
 choices[77][3] = "Puede usar conectores MIC.";
 answers[77] = choices[77][3];
 units[77] = "99";
 comments[77] = "Id Pregunta: 8381. Examen TIC A2 2010";


//  Id pregunta: 8399 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Las comunicaciones efectuadas a ciudadanos a trav&eacute;s de medios electr&oacute;nicos ser&aacute;n v&aacute;lidas de acuerdo al art&iacute;culo 27 de la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, siempre que:";
 choices[78]= new Array();
 choices[78][0] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas y se identifique fldedignamente al destinatario de las mismas";
 choices[78][1] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas y se identifique fidedignarnente al remitente y al destinatario de las mismas. ";
 choices[78][2] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas, del contenido &iacute;ntegro de las comunicaciones y se identifique fidedignamente al remitente y al destinatario de las mismas. ";
 choices[78][3] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas, del contenido &iacute;ntegro de las comunicaciones, se identifique fidedignarnente al remitente y al destinatario de las mismas y una norma con rango de Ley permita el uso de un medio electr&oacute;nico en el procedimiento";
 answers[78] = choices[78][2];
 units[78] = "43";
 comments[78] = "Id Pregunta: 8399. Examen TIC A2 2010";


//  Id pregunta: 8630 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[79]= new Array();
 choices[79][0] = "Regla de la no subversi&oacute;n.";
 choices[79][1] = "Regla de la no concurrencia.";
 choices[79][2] = "Regla de la restricci&oacute;n.";
 choices[79][3] = "Regla de la no replicaci&oacute;n de Informaci&oacute;n.";
 answers[79] = choices[79][0];
 units[79] = "57, 58";
 comments[79] = "Id Pregunta: 8630. Examen TIC A2 2010 interna";


//  Id pregunta: 8657 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  La codificaci&oacute;n Manchester-Diferencial se utiliza en:";
 choices[80]= new Array();
 choices[80][0] = "Firma digital";
 choices[80][1] = "Modulaci&oacute;n de se&ntilde;ales";
 choices[80][2] = "T&eacute;cnicas criptogr&aacute;ficas";
 choices[80][3] = "Seguridad Wi-Fi";
 answers[80] = choices[80][1];
 units[80] = "99, 101";
 comments[80] = "Id Pregunta: 8657. Examen UPM A2 2011";


//  Id pregunta: 8745 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;C&oacute;mo se define la sede electr&oacute;nica en la Ley 11/2007, de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, LAECSP?";
 choices[81]= new Array();
 choices[81][0] = "La sede electr&oacute;nica no se define en la LAECSP, sino en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, tanto para el sector p&uacute;blico como el privado.";
 choices[81][1] = "Es aquella direcci&oacute;n electr&oacute;nica disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones cuya titularidad, gesti&oacute;n y administraci&oacute;n corresponde a una Administraci&oacute;n P&uacute;blica &oacute;rgano o entidad administrativa en el ejercicio de sus competencias";
 choices[81][2] = "Se establece simplemente como nueva denominaci&oacute;n para el registro telem&aacute;tico, ya definido en la Ley 30/1992. de 26 de noviembre de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, LRJPAC";
 choices[81][3] = "Es el centro de proceso de datos correspondiente a cada &oacute;rgano p&uacute;blico, d&oacute;nde se localizan los aplicativos mediante los cuales aqu&eacute;l ejerce sus competencias.";
 answers[81] = choices[81][1];
 units[81] = "43";
 comments[81] = "Id Pregunta: 8745. Examen TIC A2 2010 interna";


//  Id pregunta: 8906 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  Dentro de las categor&iacute;as de cable con est&aacute;ndar oficial, &iquest;cu&aacute;l de las siguientes utilizar&iacute;a para implementar una red de &aacute;rea local con velocidad prevista de transmisi&oacute;n de 100Mbps? :";
 choices[82]= new Array();
 choices[82][0] = "Par trenzado sin apantallar Categor&iacute;a 2.";
 choices[82][1] = "UTP Categor&iacute;a 3.";
 choices[82][2] = "UTP Categor&iacute;a 5.";
 choices[82][3] = "Par trenzado sin apantallar categor&iacute;a 3";
 answers[82] = choices[82][2];
 units[82] = "99, 101";
 comments[82] = "Id Pregunta: 8906. Operador Ayto. Madrid 2010";


//  Id pregunta: 8909 AÃ±o de creación de pregunta: 2011-01-01
 questions[83]= "84)  Indicar cu&aacute;l de las siguientes herramientas y protocolos permite el control remoto de puestos de usuario:";
 choices[83]= new Array();
 choices[83][0] = "NNTP.";
 choices[83][1] = "VNC.";
 choices[83][2] = "NTP.";
 choices[83][3] = "FTP";
 answers[83] = choices[83][1];
 units[83] = "118";
 comments[83] = "Id Pregunta: 8909. Operador Ayto. Madrid 2010";


//  Id pregunta: 9038 AÃ±o de creación de pregunta: 2011-01-01
 questions[84]= "85)  Indique la pauta de accesibilidad correcta seg&uacute;n la norma WCAG 1.0";
 choices[84]= new Array();
 choices[84][0] = "Dise&ntilde;o dependiente del dispositivo";
 choices[84][1] = "Evite parpadeos en la pantalla";
 choices[84][2] = "Utilice siempre CSS";
 choices[84][3] = "No se base s&oacute;lo en el color";
 answers[84] = choices[84][3];
 units[84] = "39";
 comments[84] = "Id Pregunta: 9038. ";


//  Id pregunta: 9465 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  En Orientaci&oacute;n a Objetos, &iquest;qu&eacute; es cierto acerca de la herencia m&uacute;ltiple?:";
 choices[85]= new Array();
 choices[85][0] = "Consiste en que una superclase puede tener varias subclases.";
 choices[85][1] = "Consiste en que una subclase puede tener m&aacute;s de una superclase.";
 choices[85][2] = "Es lo mismo que la herencia repetida.";
 choices[85][3] = "En orientaci&oacute;n a objetos no existe la herencia m&uacute;ltiple.";
 answers[85] = choices[85][1];
 units[85] = "84";
 comments[85] = "Id Pregunta: 9465. NULL";


//  Id pregunta: 9651 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El c&oacute;digo intermedio en una compilaci&oacute;n .NET actualmente se llama:";
 choices[86]= new Array();
 choices[86][0] = "MSIL";
 choices[86][1] = "CIL";
 choices[86][2] = "CLS";
 choices[86][3] = "Bytecode";
 answers[86] = choices[86][1];
 units[86] = "115";
 comments[86] = "Id Pregunta: 9651. Antes se llamaba MSIL, ahora se llama CIL (Common Intermediate Language)";


//  Id pregunta: 9662 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes es una fase de un brainstorming?";
 choices[87]= new Array();
 choices[87][0] = "Preparaci&oacute;n";
 choices[87][1] = "Generaci&oacute;n";
 choices[87][2] = "Consolidaci&oacute;n";
 choices[87][3] = "Todas las anteriores";
 answers[87] = choices[87][3];
 units[87] = "78";
 comments[87] = "Id Pregunta: 9662. ";


//  Id pregunta: 9736 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Si un equipo tiene una aver&iacute;a &iquest;cu&aacute;l de los siguientes indicadores nos da informaci&oacute;n sobre el tiempo medio requerido para reparar dicha aver&iacute;a?";
 choices[88]= new Array();
 choices[88][0] = "MTBF";
 choices[88][1] = "MTBR";
 choices[88][2] = "MTTR";
 choices[88][3] = "MTTF";
 answers[88] = choices[88][2];
 units[88] = "32";
 comments[88] = "Id Pregunta: 9736. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10005 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Microsoft ActiveX Data Objects de la plataforma .NET";
 choices[89]= new Array();
 choices[89][0] = "permite trabajar desconectado del origen de datos.";
 choices[89][1] = "no se integra con XML.";
 choices[89][2] = "es el precursor de RDO ( Remote Data Objects).";
 choices[89][3] = "utiliza una forma secuencial de navegaci&oacute;n para acceder a las filas de una tabla.";
 answers[89] = choices[89][0];
 units[89] = "59, 114";
 comments[89] = "Id Pregunta: 10005. ";


//  Id pregunta: 10295 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l es el grupo de trabajo correspondiente al est&aacute;ndar WRAN (Wireless Regional Area Network)?:";
 choices[90]= new Array();
 choices[90][0] = "802.19";
 choices[90][1] = "802.20";
 choices[90][2] = "802.21";
 choices[90][3] = "802.22";
 answers[90] = choices[90][3];
 units[90] = "107";
 comments[90] = "Id Pregunta: 10295. TIC A2, libre, examen 2013";


//  Id pregunta: 10373 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  El ataque criptogr&aacute;fico llamado &quot;birthday attack&quot; est&aacute; basado en la paradoja del cumplea&ntilde;os. &iquest;Cu&aacute;l es su objetivo?";
 choices[91]= new Array();
 choices[91][0] = "Capturar pares de claves de funciones resumen (hash) con el mismo resultado, ya que es estad&iacute;sticamente m&aacute;s probable el ataque probando de dos en dos.";
 choices[91][1] = "Robar la clave privada del dni electr&oacute;nico del usuario cuando est&aacute; realizando alguna gesti&oacute;n con el mismo, ya que se extrae dicha clave conociendo parte de la informaci&oacute;n contenida, como la fecha de nacimiento del sujeto.";
 choices[91][2] = "Averiguar la clave de acceso al facebook de un usuario sabiendo cu&aacute;ndo cumple a&ntilde;os ya que la gente es muy descuidada y usa esa informaci&oacute;n como pregunta secreta.";
 choices[91][3] = "Encontrar una clave en toda las aplicaciones que usa generalmente un usuario (correo, facebook, twitter, etc.) que coincida con su fecha de cumplea&ntilde;os y a partir de ah&iacute; hacerse con el resto de contrase&ntilde;as.";
 answers[91] = choices[91][0];
 units[91] = "72";
 comments[91] = "Id Pregunta: 10373. ";


//  Id pregunta: 10439 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Respecto al conjunto de normas H.323 de la UIT,";
 choices[92]= new Array();
 choices[92][0] = "se le puede a&ntilde;adir seguridad extremo a extremo con la recomendaci&oacute;n de la UIT H.235. ";
 choices[92][1] = "fue definida para redes de conmutaci&oacute;n de circuitos.";
 choices[92][2] = "permite audioconferencia pero no videoconferencia.";
 choices[92][3] = "se utiliza &uacute;nicamente con redes RDSI.";
 answers[92] = choices[92][0];
 units[92] = "117";
 comments[92] = "Id Pregunta: 10439. Examen TIC A1 2013";


//  Id pregunta: 10443 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 indicar en cu&aacute;l de las siguientes tareas de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n NO participa el Comit&eacute; de Direcci&oacute;n. ";
 choices[93]= new Array();
 choices[93][0] = "Identificaci&oacute;n del Alcance del Plan de Sistemas de Informaci&oacute;n.";
 choices[93][1] = "Comunicaci&oacute;n del Plan de Trabajo.";
 choices[93][2] = "Selecci&oacute;n de la Arquitectura Tecnol&oacute;gica. ";
 choices[93][3] = "Evaluaci&oacute;n y Mejora de la Propuesta.";
 answers[93] = choices[93][2];
 units[93] = "86";
 comments[93] = "Id Pregunta: 10443. Examen TIC A1 2013";


//  Id pregunta: 10591 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Son europeos:";
 choices[94]= new Array();
 choices[94][0] = "El cuerpo de reguladores de comunicaciones electr&oacute;nicas BEREC";
 choices[94][1] = "El programa para el impulso de la Sociedad de la Informaci&oacute;n IDESI";
 choices[94][2] = "El sistema inform&aacute;tico JOIN para el intercambio de identidades electr&oacute;nicas";
 choices[94][3] = "La red SARA";
 answers[94] = choices[94][0];
 units[94] = "30";
 comments[94] = "Id Pregunta: 10591. ";


//  Id pregunta: 10766 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; plazo se establece para la realizaci&oacute;n del informe t&eacute;cnico de la memoria y los pliegos de prescripciones t&eacute;cnicas para la contrataci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n?";
 choices[95]= new Array();
 choices[95][0] = "1 mes";
 choices[95][1] = "20 d&iacute;as";
 choices[95][2] = "10 d&iacute;as";
 choices[95][3] = "3 meses";
 answers[95] = choices[95][2];
 units[95] = "24";
 comments[95] = "Id Pregunta: 10766. ";


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


//  Id pregunta: 11341 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En cuanto a los derechos de autor&iacute;a de los programas de ordenador, se&ntilde;ale cu&aacute;l no se encuentra entre los derechos morales";
 choices[97]= new Array();
 choices[97][0] = "Derecho de Transformaci&oacute;n  ";
 choices[97][1] = "Derecho a decidir sobre la divulgaci&oacute;n";
 choices[97][2] = "Derecho a que se reconozca su autor&iacute;a";
 choices[97][3] = "Derecho a mantener la integridad de la obra";
 answers[97] = choices[97][0];
 units[97] = "36";
 comments[97] = "Id Pregunta: 11341. ";


//  Id pregunta: 11723 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; mensaje DHCP se utiliza para localizar cualquier servidor DHCP disponible en la red?";
 choices[98]= new Array();
 choices[98][0] = "DHCPREQUEST";
 choices[98][1] = "DHCPACK";
 choices[98][2] = "DHCPDISCOVER";
 choices[98][3] = "DHCPOFFER";
 answers[98] = choices[98][2];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11723. NULL";


//  Id pregunta: 11755 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[99]= new Array();
 choices[99][0] = "OS1: Fibra monomodo, con una relaci&oacute;n n&uacute;cleo/revestimiento de 9/125 ?m. Supera distancias de 100 Km trabajando a 10 Gbps.";
 choices[99][1] = "OM1 (Optical Multimode 1): fibra &oacute;ptica multimodo, con relaci&oacute;n 62.5/125 ?m. Alcanza distancias m&aacute;ximas de 3000 metros a 10 Gbps.";
 choices[99][2] = "OM2: relaci&oacute;n 50/125 ?m, permite distancias m&aacute;ximas aproximadas de 500 metros a 1 Gbps.";
 choices[99][3] = "Ninguna es correcta";
 answers[99] = choices[99][2];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11755. ";


