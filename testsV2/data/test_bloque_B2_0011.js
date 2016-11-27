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

//  Id pregunta: 703 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Un documento XML con DTD es:";
 choices[0]= new Array();
 choices[0][0] = "v&aacute;lido";
 choices[0][1] = "inv&aacute;lido";
 choices[0][2] = "bien formado";
 choices[0][3] = "conformado";
 answers[0] = choices[0][0];
 units[0] = "69";
 comments[0] = "Id Pregunta: 703. Similar a examen TIC MAP A 2004";


//  Id pregunta: 755 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En Java, respecto a la herencia de clases ...";
 choices[1]= new Array();
 choices[1][0] = "Es posible que una clase herede de m&aacute;s de una clase padre";
 choices[1][1] = "Una clase s&oacute;lo puede implementar un &uacute;nico interfaz";
 choices[1][2] = "La clase que hereda de una clase abstracta es siempre abstracta a su vez";
 choices[1][3] = "Todas las anteriores son falsas";
 answers[1] = choices[1][3];
 units[1] = "60";
 comments[1] = "Id Pregunta: 755. NULL";


//  Id pregunta: 773 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponden con un sistema de workflow?";
 choices[2]= new Array();
 choices[2][0] = "Facilidad de enrutamiento";
 choices[2][1] = "Monitorizaci&oacute;n y control";
 choices[2][2] = "Gesti&oacute;n de procedimintos";
 choices[2][3] = "Control de responsabilidades";
 answers[2] = choices[2][3];
 units[2] = "72";
 comments[2] = "Id Pregunta: 773. ";


//  Id pregunta: 804 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  A Claude Shannon se le considera:";
 choices[3]= new Array();
 choices[3][0] = "el padre de la telem&aacute;tica moderna";
 choices[3][1] = "el creador del primer ordenador seg&uacute;n la m&aacute;quina de Von Neumann";
 choices[3][2] = "el pionero de los algoritmos criptogr&aacute;ficos";
 choices[3][3] = "el creador del primer sistema operativo";
 answers[3] = choices[3][0];
 units[3] = "99";
 comments[3] = "Id Pregunta: 804. ";


//  Id pregunta: 840 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?:";
 choices[4]= new Array();
 choices[4][0] = "Cada usuario posee dos claves denominadas p&uacute;blica y privada, independientes entre s&iacute;. La clave privada es la usada en el servicio de confidencialidad (cifrado)";
 choices[4][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio, prueba de entrega e integridad, entre otros";
 choices[4][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, por ejemplo RSA, para servicios de confidencialidad (cifrado) proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos como el DES";
 choices[4][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es sencilla, comparada con la existente en los sistemas convencionales sim&eacute;tricos de clave secreta";
 answers[4] = choices[4][0];
 units[4] = "72";
 comments[4] = "Id Pregunta: 840. ";


//  Id pregunta: 881 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l es el sistema de mensajer&iacute;a t&iacute;pico de los sistemas Unix?:";
 choices[5]= new Array();
 choices[5][0] = "Exchange";
 choices[5][1] = "Sendmail";
 choices[5][2] = "Memo";
 choices[5][3] = "Groupwise";
 answers[5] = choices[5][1];
 units[5] = "53";
 comments[5] = "Id Pregunta: 881. ";


//  Id pregunta: 893 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;ntos s&iacute;mbolos diferentes pueden representarse en EBCDIC?";
 choices[6]= new Array();
 choices[6][0] = "128.";
 choices[6][1] = "64.";
 choices[6][2] = "256.";
 choices[6][3] = "512.";
 answers[6] = choices[6][2];
 units[6] = "";
 comments[6] = "Id Pregunta: 893. ";


//  Id pregunta: 908 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Por qu&eacute; se dice que C es un lenguaje de nivel medio?";
 choices[7]= new Array();
 choices[7][0] = "porque su aprendizaje es de dificultad media respecto de otros m&aacute;s f&aacute;ciles o dif&iacute;ciles";
 choices[7][1] = "porque su funcionalidad es suficientemente buena aunque no es de los lenguajes que mayores funcionalidades presenta";
 choices[7][2] = "porque est&aacute; a medio camino entre la potencia y rapidez del lenguaje ensamblador y la funcionalidad del lenguaje natural";
 choices[7][3] = "porque sus programas tienen un tama&ntilde;o medio en comparaci&oacute;n con otros lenguajes de programas m&aacute;s simples y otros de programas muy complejos y largos";
 answers[7] = choices[7][2];
 units[7] = "82";
 comments[7] = "Id Pregunta: 908. ";


//  Id pregunta: 913 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; define la norma X.500?:";
 choices[8]= new Array();
 choices[8][0] = "Servicio de directorio";
 choices[8][1] = "Sistema de tratamiento de mensajes";
 choices[8][2] = "Servicio de transferencia de ficheros";
 choices[8][3] = "Sistema de gesti&oacute;n de red";
 answers[8] = choices[8][0];
 units[8] = "73";
 comments[8] = "Id Pregunta: 913. ";


//  Id pregunta: 966 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  C-Shell es:";
 choices[9]= new Array();
 choices[9][0] = "Una parte del sistema operativo MVS";
 choices[9][1] = "Un int&eacute;rprete de comandos del sistema operativo Unix";
 choices[9][2] = "Un compilador de C";
 choices[9][3] = "Nada de lo anterior";
 answers[9] = choices[9][1];
 units[9] = "54";
 comments[9] = "Id Pregunta: 966. NULL";


//  Id pregunta: 968 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Cuando en las entidades descritas en el modelo de datos existe una dependencia funcional de los atributos de todos los atributos que componen la clave, se dice que el modelo est&aacute; normalizado:";
 choices[10]= new Array();
 choices[10][0] = "En segunda forma normal";
 choices[10][1] = "En primera forma normal";
 choices[10][2] = "En tercera forma normal";
 choices[10][3] = "En cuarta forma normal";
 answers[10] = choices[10][0];
 units[10] = "58";
 comments[10] = "Id Pregunta: 968. ";


//  Id pregunta: 969 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Cuando para un archivo disponemos de dos estructuras o zonas distintas, zona de registros y zona de &iacute;ndices, y no hay punteros entre los registros, entonces estamos hablando de archivos con organizaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Secuencial";
 choices[11][1] = "Secuencial indexada";
 choices[11][2] = "Secuencial indexada encadenada";
 choices[11][3] = "Semi-indexada";
 answers[11] = choices[11][1];
 units[11] = "52";
 comments[11] = "Id Pregunta: 969. ";


//  Id pregunta: 1034 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El modelo de base de datos CODASYL:";
 choices[12]= new Array();
 choices[12][0] = "Es el modelo conceptual de datos que corresponde a los SGBD jer&aacute;rquicos";
 choices[12][1] = "Es el modelo l&oacute;gico de datos de un SGBD relacional";
 choices[12][2] = "Es el Modelo de Codd";
 choices[12][3] = "No se corresponde con nada de lo anterior";
 answers[12] = choices[12][3];
 units[12] = "57";
 comments[12] = "Id Pregunta: 1034. ";


//  Id pregunta: 1040 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El objetivo del aprendizaje no supervisado en miner&iacute;a de datos basado en modelado consiste en:";
 choices[13]= new Array();
 choices[13][0] = "Asignar nuevas situaciones a clases a partir de ejemplos existentes.";
 choices[13][1] = "Determinar el comportamiento futuro a partir de datos hist&oacute;ricos.";
 choices[13][2] = "Establecer grupos de parecidos.";
 choices[13][3] = "Descubren patrones y tendencias en los datos.";
 answers[13] = choices[13][3];
 units[13] = "68";
 comments[13] = "Id Pregunta: 1040. ";


//  Id pregunta: 1043 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El paralelismo expl&iacute;cito MIMD esta constituido por:";
 choices[14]= new Array();
 choices[14][0] = "Un s&oacute;lo flujo de instrucciones y varios de datos";
 choices[14][1] = "Varios flujos de Instrucciones y uno de datos";
 choices[14][2] = "Varios flujos de instrucciones y varios de datos";
 choices[14][3] = "Ninguna de las anteriores respuestas es cierta";
 answers[14] = choices[14][2];
 units[14] = "45";
 comments[14] = "Id Pregunta: 1043. ";


//  Id pregunta: 1076 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En el campo de la representaci&oacute;n del conocimiento simb&oacute;lico:";
 choices[15]= new Array();
 choices[15][0] = "La unidad b&aacute;sica funcional de una red sem&aacute;ntica es el 'objeto' que formaliza la representaci&oacute;n de un concepto";
 choices[15][1] = "Un marco es una descripci&oacute;n de un objeto, que contiene ranuras (slots) para todas las informaciones asociadas con el objeto";
 choices[15][2] = "Las reglas deductivas son una manera de representar al conocimiento de tipo procedimental";
 choices[15][3] = "Una restricci&oacute;n expresa es una relaci&oacute;n de equilibrio entre los predicados de uno o m&aacute;s objetos";
 answers[15] = choices[15][1];
 units[15] = "64";
 comments[15] = "Id Pregunta: 1076. ";


//  Id pregunta: 1081 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En el lenguaje de consulta en BBDD relacionales, se usan los t&eacute;rminos tabla, fila y columna para:";
 choices[16]= new Array();
 choices[16][0] = "Tupla, relaci&oacute;n y atributo, respectivamente";
 choices[16][1] = "Relaci&oacute;n, tupla y atributo, respectivamente";
 choices[16][2] = "Relaci&oacute;n, atributo y tupla, respectivamente";
 choices[16][3] = "Tupla, atributo y relaci&oacute;n, respectivamente";
 answers[16] = choices[16][1];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1081. ";


//  Id pregunta: 1084 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En el lenguaje SQL una 'Transacci&oacute;n' es una secuencia de operaciones que constituye una unidad de recuperaci&oacute;n, y que puede finalizarse con una sentencia:";
 choices[17]= new Array();
 choices[17][0] = "SELECT";
 choices[17][1] = "END";
 choices[17][2] = "COMMIT";
 choices[17][3] = "CLOSE";
 answers[17] = choices[17][2];
 units[17] = "58";
 comments[17] = "Id Pregunta: 1084. ";


//  Id pregunta: 1113 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En la Unidad Central de Proceso (CPU):";
 choices[18]= new Array();
 choices[18][0] = "La unidad Aritm&eacute;tico-L&oacute;gica se compone de uno o varios operadores, un banco de registros y un dispositivo secuenciador";
 choices[18][1] = "La Unidad de Control tiene como misi&oacute;n la supervisi&oacute;n y ordenaci&oacute;n de todo el sistema de elementos que componen la CPU y su relaci&oacute;n con la memoria interna";
 choices[18][2] = "En el esquema dise&ntilde;ado por Charles Babbage en su modelo de ordenador, se considera a la Memoria Central como un elemento externo a la CPU";
 choices[18][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[18] = choices[18][1];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1113. NULL";


//  Id pregunta: 1121 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En los discos &oacute;pticos (CD-ROM, WROM etc) la densidad de grabaci&oacute;n es:";
 choices[19]= new Array();
 choices[19][0] = "Constante";
 choices[19][1] = "Variable, dependiendo de la distancia al centro";
 choices[19][2] = "Depende del tipo";
 choices[19][3] = "Igual que en los discos magn&eacute;ticos";
 answers[19] = choices[19][0];
 units[19] = "48";
 comments[19] = "Id Pregunta: 1121. ";


//  Id pregunta: 1136 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En un disco magn&eacute;tico,  &iquest;qu&eacute; son las pistas?:";
 choices[20]= new Array();
 choices[20][0] = "Un espacio peque&ntilde;o entre los sectores";
 choices[20][1] = "Las posiciones donde la cabeza se mueve cuando el disco se apaga";
 choices[20][2] = "El n&uacute;mero de 'platos' del disco";
 choices[20][3] = "Nada de lo anterior es correcto";
 answers[20] = choices[20][3];
 units[20] = "48";
 comments[20] = "Id Pregunta: 1136. ";


//  Id pregunta: 1151 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En una operaci&oacute;n de acceso directo a memoria, el procesador debe enviar distintas informaciones necesarias para realizar la operaci&oacute;n. Indique cu&aacute;l de las siguientes alternativas se refiere a una informaci&oacute;n que no es necesaria en una operaci&oacute;n de DMA:";
 choices[21]= new Array();
 choices[21][0] = "Direcci&oacute;n de memoria";
 choices[21][1] = "Tama&ntilde;o de las palabras";
 choices[21][2] = "Sentido de la operaci&oacute;n";
 choices[21][3] = "Identificaci&oacute;n del perif&eacute;rico";
 answers[21] = choices[21][1];
 units[21] = "52";
 comments[21] = "Id Pregunta: 1151. ";


//  Id pregunta: 1179 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Indicar cu&aacute;l de las siguientes no es una ventaja de los sistemas expertos:";
 choices[22]= new Array();
 choices[22][0] = "Permanencia";
 choices[22][1] = "Facilidad de reproducci&oacute;n";
 choices[22][2] = "Funcionamiento uniforme";
 choices[22][3] = "Eficiencia";
 answers[22] = choices[22][3];
 units[22] = "64";
 comments[22] = "Id Pregunta: 1179. ";


//  Id pregunta: 1183 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Indicar la respuesta falsa respecto a la representaci&oacute;n del conocimiento:";
 choices[23]= new Array();
 choices[23][0] = "En inteligencia artificial el conocimiento puede representarse mediante marcos";
 choices[23][1] = "En inteligencia artificial el conocimiento puede representarse mediante redes sem&aacute;nticas";
 choices[23][2] = "En inteligencia artificial el conocimiento puede representarse mediante DFDs";
 choices[23][3] = "En inteligencia artificial el conocimiento puede representarse mediante reglas de inferencia";
 answers[23] = choices[23][2];
 units[23] = "64";
 comments[23] = "Id Pregunta: 1183. ";


//  Id pregunta: 1188 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Indique cu&aacute;l de las siguientes afirmaciones es falsa respecto a la ortogonalidad:";
 choices[24]= new Array();
 choices[24][0] = "Un juego de instrucciones se dice que es regular si es ortogonal";
 choices[24][1] = "La ortogonalidad implica que cada operaci&oacute;n debe poder realizarse con un tipo de operando fijo y su propio direccionamiento";
 choices[24][2] = "Se garantiza la ortogonalidad limitando la informaci&oacute;n contenida en el c&oacute;digo de operaci&oacute;n a la operaci&oacute;n pura, excluyendo direccionamiento y representaci&oacute;n de datos";
 choices[24][3] = "La ortogonalidad de un juego de instrucciones aporta claras ventajas de simplicidad y claridad";
 answers[24] = choices[24][1];
 units[24] = "52";
 comments[24] = "Id Pregunta: 1188. ";


//  Id pregunta: 1209 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La capacidad efectiva de informaci&oacute;n &uacute;til de un disco es:";
 choices[25]= new Array();
 choices[25][0] = "El tama&ntilde;o en pulgadas del disco";
 choices[25][1] = "El n&uacute;mero de bits que pueden almacenarse en el disco sin formatar";
 choices[25][2] = "El n&uacute;mero de bit que pueden almacenarse en el disco formatado";
 choices[25][3] = "El n&uacute;mero de bit que pueden almacenarse en una pista";
 answers[25] = choices[25][2];
 units[25] = "48";
 comments[25] = "Id Pregunta: 1209. ";


//  Id pregunta: 1234 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La multiprogramaci&oacute;n y el tiempo compartido, en los sistemas operativos, ocasionan:";
 choices[26]= new Array();
 choices[26][0] = "Que haya que crear mecanismos de seguridad como cortafuegos y sistemas de alimentaci&oacute;n ininterrumpida";
 choices[26][1] = "Que haya que crear mecanismos de protecci&oacute;n de injerencias entre diversos trabajos simult&aacute;neos, y entre diversos usuarios que quieran acceder a archivos o recursos como la impresora o los discos";
 choices[26][2] = "Que haya que comprobar al apagar el ordenador si a&uacute;n no han cerrado su sesi&oacute;n todos los usuarios";
 choices[26][3] = "Que haya que crear sistemas de protecci&oacute;n del monitor para evitar ataques no autorizados";
 answers[26] = choices[26][1];
 units[26] = "52";
 comments[26] = "Id Pregunta: 1234. ";


//  Id pregunta: 1239 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La propiedad de una funci&oacute;n res&uacute;men por la que dado un mensaje (x), es computacionalmente imposible encontrar otro mensaje (x&rsquo;) cuya funci&oacute;n resumen sea igual a la funci&oacute;n res&uacute;men del primer mensaje (x), corresponde a:";
 choices[27]= new Array();
 choices[27][0] = "Resistencia a la preimagen";
 choices[27][1] = "Resistencia a la segunda preimagen";
 choices[27][2] = "Resistencia a colisi&oacute;n";
 choices[27][3] = "Resistencia a la igualdad";
 answers[27] = choices[27][1];
 units[27] = "72";
 comments[27] = "Id Pregunta: 1239. ";


//  Id pregunta: 1270 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los applets de Java se ejecutan en el:";
 choices[28]= new Array();
 choices[28][0] = "Servidor web";
 choices[28][1] = "Cliente web";
 choices[28][2] = "Servidor de base de datos";
 choices[28][3] = "Servidor de webmail";
 answers[28] = choices[28][1];
 units[28] = "60";
 comments[28] = "Id Pregunta: 1270. NULL";


//  Id pregunta: 1291 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  NAS:";
 choices[29]= new Array();
 choices[29][0] = "Es un dispositivo de almacenamiento conectado a red de alta capacidad";
 choices[29][1] = "Es un sistema de emisi&oacute;n de alarmas a trav&eacute;s de redes";
 choices[29][2] = "Es una base de datos orientada a objetos";
 choices[29][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[29] = choices[29][0];
 units[29] = "48";
 comments[29] = "Id Pregunta: 1291. ";


//  Id pregunta: 1298 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Para especificar localizadores en XML se usa:";
 choices[30]= new Array();
 choices[30][0] = "s&oacute;lo el est&aacute;ndar Xlink";
 choices[30][1] = "s&oacute;lo el est&aacute;ndar Xpointer";
 choices[30][2] = "los est&aacute;ndares Xlink y Xpointer";
 choices[30][3] = "ninguno de los anteriores";
 answers[30] = choices[30][2];
 units[30] = "69";
 comments[30] = "Id Pregunta: 1298. NULL";


//  Id pregunta: 1340 AÃ±o de creación de pregunta: 2009-01-01
 questions[31]= "32)  Se&ntilde;alar cu&aacute;l de las siguientes no es una operaci&oacute;n anal&iacute;tica b&aacute;sica en un sistema OLAP:";
 choices[31]= new Array();
 choices[31][0] = "Actualizaci&oacute;n.";
 choices[31][1] = "Agregaci&oacute;n.";
 choices[31][2] = "Dril-down.";
 choices[31][3] = "Slice-Dice.";
 answers[31] = choices[31][0];
 units[31] = "68";
 comments[31] = "Id Pregunta: 1340. ";


//  Id pregunta: 1374 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  SSL:";
 choices[32]= new Array();
 choices[32][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza (banco)";
 choices[32][1] = "Permite que un tercero cn acceso al tr&aacute;fico entre el servidor y el cliente no pueda romper la confidencialidad";
 choices[32][2] = "Es un algoritmo de cifrado, de un n&uacute;mero de bits variable";
 choices[32][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[32] = choices[32][1];
 units[32] = "72";
 comments[32] = "Id Pregunta: 1374. ";


//  Id pregunta: 1380 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Un buen sistema operativo, en cuanto a la gesti&oacute;n de memoria principal, debe:";
 choices[33]= new Array();
 choices[33][0] = "Repartirla entre los diversos procesos, de forma que cada uno sepa desde el comienzo que solo cuenta con la que se le ha asignado. As&iacute; el programador sabe lo que tiene que hacer en cada momento en cuanto al trasiego de datos a la memoria principal";
 choices[33][1] = "No afectarle demasiado, dejando que ella misma se gestione sin intervenci&oacute;n del sistema operativo";
 choices[33][2] = "Asignar memoria din&aacute;micamente a los programas seg&uacute;n la vayan necesitando, de forma transparente para el programador";
 choices[33][3] = "Reservarse una cantidad peque&ntilde;a para s&iacute; mismo, dejando que cada aplicaci&oacute;n tenga mayor cantidad limitada de forma fija";
 answers[33] = choices[33][2];
 units[33] = "52";
 comments[33] = "Id Pregunta: 1380. ";


//  Id pregunta: 1408 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Una base de datos multidimensional:";
 choices[34]= new Array();
 choices[34][0] = "Es igual que una relacional, solo que con sistema de indices inversos duplicados que acelera los accesos en un 40%.";
 choices[34][1] = "Est&aacute; formado por la relaci&oacute;n existente entre tablas de hechos y dimensiones.";
 choices[34][2] = "El t&eacute;rmino se aplica a las bases de datos con tecnolog&iacute;a ISAM, por las m&uacute;ltiples posibilidades que ofrecen.";
 choices[34][3] = "&Uacute;nicamente existe cundo las comunicaciones con el servidor han de ser as&iacute;ncronas en el tiempo.";
 answers[34] = choices[34][1];
 units[34] = "68";
 comments[34] = "Id Pregunta: 1408. ";


//  Id pregunta: 1456 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  &iquest;En qu&eacute; se basa la acci&oacute;n de comprimir las im&aacute;genes para almacenarlas o transmitirlas v&iacute;a red de &aacute;rea local o v&iacute;a teleproceso?:";
 choices[35]= new Array();
 choices[35][0] = "En la codificaci&oacute;n progresiva";
 choices[35][1] = "En la modulaci&oacute;n codificada";
 choices[35][2] = "En la codificaci&oacute;n de la informaci&oacute;n";
 choices[35][3] = "En el filtrado de frecuencias";
 answers[35] = choices[35][2];
 units[35] = "48";
 comments[35] = "Id Pregunta: 1456. ";


//  Id pregunta: 1484 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Una de las siguientes no es una caracter&iacute;stica que deba reunir un interfaz:";
 choices[36]= new Array();
 choices[36][0] = "Consistencia";
 choices[36][1] = "Naturalidad";
 choices[36][2] = "Obviedad";
 choices[36][3] = "Facilidad de uso y aprendizaje";
 answers[36] = choices[36][2];
 units[36] = "47";
 comments[36] = "Id Pregunta: 1484. ";


//  Id pregunta: 1528 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  El sistema GPS (Global Positioning System), &iquest;de cu&aacute;ntos  sat&eacute;lites operativos se compone?";
 choices[37]= new Array();
 choices[37][0] = "16.";
 choices[37][1] = "24.";
 choices[37][2] = "32.";
 choices[37][3] = "64.";
 answers[37] = choices[37][1];
 units[37] = "67";
 comments[37] = "Id Pregunta: 1528. Junta Andaluc&iacute;a";


//  Id pregunta: 1585 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  En el contexto del Sistema Gestor de Base de Datos (SGBD) ORACLE, al conjunto compartido de estructuras de memoria y procesos que acceden a un grupo de ficheros de la base de datos, se denomina:";
 choices[38]= new Array();
 choices[38][0] = "R&eacute;plica.";
 choices[38][1] = "Segmento.";
 choices[38][2] = "Instancia.";
 choices[38][3] = "Tablespace.";
 answers[38] = choices[38][2];
 units[38] = "58";
 comments[38] = "Id Pregunta: 1585. Junta Andaluc&iacute;a";


//  Id pregunta: 1612 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  La velocidad te&oacute;rica m&aacute;xima aproximada de un lector de CD-ROM 48x es de:";
 choices[39]= new Array();
 choices[39][0] = "150 KB/seg.";
 choices[39][1] = "3600 KB/seg.";
 choices[39][2] = "7200 KB/seg.";
 choices[39][3] = "3 MB/seg.";
 answers[39] = choices[39][2];
 units[39] = "48";
 comments[39] = "Id Pregunta: 1612. Junta Andaluc&iacute;a";


//  Id pregunta: 1653 AÃ±o de creación de pregunta: 2004-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes protocolos se puede considerar como menos seguro para la realizaci&oacute;n de una transacci&oacute;n de comercio electr&oacute;nico?";
 choices[40]= new Array();
 choices[40][0] = "SET";
 choices[40][1] = "SSL";
 choices[40][2] = "3D-Secure";
 choices[40][3] = "SPA/UCAF";
 answers[40] = choices[40][1];
 units[40] = "70";
 comments[40] = "Id Pregunta: 1653. NULL";


//  Id pregunta: 1654 AÃ±o de creación de pregunta: 2004-01-01
 questions[41]= "42)  &iquest;Las siglas &quot;ACID&quot; qu&eacute; significan desde el punto de vista de las transacciones?";
 choices[41]= new Array();
 choices[41][0] = "Atomicity, Consistency, Isolation and Durability";
 choices[41][1] = "Atomicity, Consistency, Integration and Durability";
 choices[41][2] = "Authenticity, Confidentiality, Integration and Durability";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = choices[41][0];
 units[41] = "58";
 comments[41] = "Id Pregunta: 1654. ";


//  Id pregunta: 1749 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Qu&eacute; t&eacute;cnica se utiliza para eliminar la posible colisi&oacute;n de distintas peticiones de actualizaci&oacute;n simult&aacute;neas sobre un mismo dato de la base de datos";
 choices[42]= new Array();
 choices[42][0] = "Como el rendimiento de la inversi&oacute;n expresado en t&eacute;rminos de porcentaje";
 choices[42][1] = "Bloqueo";
 choices[42][2] = "Inter-Roll";
 choices[42][3] = "Roll-back";
 answers[42] = choices[42][1];
 units[42] = "58";
 comments[42] = "Id Pregunta: 1749. ";


//  Id pregunta: 1773 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;C&oacute;mo se llama la versi&oacute;n en software libre de la plataforma .Net?";
 choices[43]= new Array();
 choices[43][0] = ".DOT";
 choices[43][1] = ".free";
 choices[43][2] = "Mono";
 choices[43][3] = "Gambas";
 answers[43] = choices[43][2];
 units[43] = "61,62";
 comments[43] = "Id Pregunta: 1773. ";


//  Id pregunta: 1803 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  &iquest;Qu&eacute; es moodle?";
 choices[44]= new Array();
 choices[44][0] = "Un sistema de gest&oacute;n de la ense&ntilde;anza de Software libre";
 choices[44][1] = "Un sistema de gesti&oacute;n de contenidos gratuito pero no libre";
 choices[44][2] = "Un buscador de Internet";
 choices[44][3] = "Un entorno de escritorio para sistemas Linux bajo tecnolog&iacute;a X Windows";
 answers[44] = choices[44][0];
 units[44] = "66";
 comments[44] = "Id Pregunta: 1803. Moodle tiene licencia GNU GPL.";


//  Id pregunta: 1853 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Se&ntilde;ale la correcta:";
 choices[45]= new Array();
 choices[45][0] = "TDES es un algoritmo de cifrado asim&eacute;trico que consiste en aplicar tres veces DES";
 choices[45][1] = "AES es un algoritmo muy vers&aacute;til porque puede usarse com algoritmo de bloque, como algoritmo de flujo,como funci&oacute;n resumen y como generador de n&uacute;meros pseudo-aleatorios. ";
 choices[45][2] = "Las caracter&iacute;sticas de las funciones hash son: resistencia a la preimagen, resistencia a la postimagen y resistencia a la colisi&oacute;n";
 choices[45][3] = "Todas las anteriores";
 answers[45] = choices[45][1];
 units[45] = "72";
 comments[45] = "Id Pregunta: 1853. ";


//  Id pregunta: 1879 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  La ley de servicios de la sociedad de la informaci&oacute;n y del comercio electr&oacute;nico (LSSICE) es el resultado de la transposici&oacute;n de dos directivas del Parlamento Europeo y del Consejo. &iquest;Cu&aacute;les?";
 choices[46]= new Array();
 choices[46][0] = "Directivas 2000/31/CE y 98/28/CE";
 choices[46][1] = "Directivas 2000/31/CE y 98/27/CE";
 choices[46][2] = "Directivas 2000/31/CE y 97/27/CE";
 choices[46][3] = "Directivas 2001/31/CE y 98/27/CE";
 answers[46] = choices[46][1];
 units[46] = "30";
 comments[46] = "Id Pregunta: 1879. NULL";


//  Id pregunta: 1932 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Seg&uacute;n la Ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos";
 choices[47]= new Array();
 choices[47][0] = "Tienen una validez de tres a&ntilde;os como m&aacute;ximo";
 choices[47][1] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo";
 choices[47][2] = "Dejan de tener validez cuando expiran, y/o son revocados, por resoluci&oacute;n judicial o por fallecimiento del firmante";
 choices[47][3] = "Confieren, por si mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita";
 answers[47] = choices[47][1];
 units[47] = "30";
 comments[47] = "Id Pregunta: 1932. Ley 59/2003, art&iacute;culo 11";


//  Id pregunta: 1944 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  Cuando se habla de SAX en el &aacute;mbito del lenguaje XML, se hace referencia a:";
 choices[48]= new Array();
 choices[48][0] = "Una API que define un modelo basado en eventos, y que trabaja invocando las respuestas de las interfaces a medida que van apareciendo estos eventos durante el proceso de an&aacute;lisis del documento";
 choices[48][1] = "Una API que proporciona una representaci&oacute;n de los documentos XML en forma de &aacute;rbol, permitiendo el recorrido y manipulaci&oacute;n de los datos";
 choices[48][2] = "Un lenguaje para establecer restricciones en los documentos XML";
 choices[48][3] = "Un mecanismo para invocaci&oacute;n remota de procedimientos (m&eacute;todos) utilizando XML como forma de comunicaci&oacute;n";
 answers[48] = choices[48][0];
 units[48] = "69";
 comments[48] = "Id Pregunta: 1944. NULL";


//  Id pregunta: 4279 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;C&oacute;mo se definir&iacute;a en el sistema de gesti&oacute;n de base de datos Oracle la restricci&oacute;n de integridad: &ldquo;Los trienios de un empleado no pueden disminuir&rdquo;?";
 choices[49]= new Array();
 choices[49][0] = "Mediante la sentencia &lsquo;ALTER TABLE&rsquo;.";
 choices[49][1] = "Mediante un trigger.";
 choices[49][2] = "Mediante una constraint de tipo CHECK.";
 choices[49][3] = "No se pueden definir restricciones de ese tipo.";
 answers[49] = choices[49][1];
 units[49] = "58";
 comments[49] = "Id Pregunta: 4279. ";


//  Id pregunta: 4309 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Ernesto es un jefe de proyecto que en una nueva aplicaci&oacute;n que est&aacute; realizando en su Ministerio ha decidido emplear la tecnolog&iacute;a CORBA de objetos distribuidos. La raz&oacute;n m&aacute;s probable por la que Ernesto ha decidido utilizar CORBA es";
 choices[50]= new Array();
 choices[50][0] = "CORBA es la tecnolog&iacute;a de objetos distribuidos m&aacute;s sencilla";
 choices[50][1] = "CORBA es multilenguaje, con interfaces Fortran, Java, Lisp, Ada, etc.";
 choices[50][2] = "CORBA es ideal para sistemas cerrados Java";
 choices[50][3] = "CORBA es una tecnolog&iacute;a de Microsoft, y se adapta muy bien para desarrollos en Visual Basic y J++";
 answers[50] = choices[50][1];
 units[50] = "62";
 comments[50] = "Id Pregunta: 4309. ";


//  Id pregunta: 4348 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  El protocolo de comunicaciones seguras en que el cliente genera aleatoriamente una clave sim&eacute;trica, y la cifra con la clave p&uacute;blica del servidor receptor de la informaci&oacute;n, envi&aacute;ndosela cifrada a &eacute;ste, y posteriormente el servidor la descifra, con lo cual ambas partes ya poseen la clave sim&eacute;trica y se pueden comunicar con confidencialidad, es:";
 choices[51]= new Array();
 choices[51][0] = "IPSec (IP Security).";
 choices[51][1] = "SSL/TSL (Secure sockets Layer/Transport Layer Security).";
 choices[51][2] = "RSA (Rivest-Shamir-Adleman).";
 choices[51][3] = "WEP (Wired Equivalent Privacy).";
 answers[51] = choices[51][1];
 units[51] = "73";
 comments[51] = "Id Pregunta: 4348. ";


//  Id pregunta: 4482 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Si consideramos el framework de Net &iquest;Que entender&iacute;amos por CTS( Common Type System, o Sistema de Tipos Com&uacute;n)?";
 choices[52]= new Array();
 choices[52][0] = "Es un est&aacute;ndar que establece como se representan los tipos de datos en memoria, independientemente del lenguaje que los defina.";
 choices[52][1] = "Es un sistema tipificado de Software";
 choices[52][2] = "Es un sistema com&uacute;n de tipos que permite interoperar entre distintas plataformas.";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][0];
 units[52] = "59";
 comments[52] = "Id Pregunta: 4482. ";


//  Id pregunta: 4520 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  La firma digital garantiza:";
 choices[53]= new Array();
 choices[53][0] = "La autenticidad, Ia integridad y el no repudio en destino.";
 choices[53][1] = "La autenticidad, Ia integridad y el no repudio en origen.";
 choices[53][2] = "La autenticidad, Ia integridad y la confidencialidad.";
 choices[53][3] = "La confidencialidad.";
 answers[53] = choices[53][1];
 units[53] = "30";
 comments[53] = "Id Pregunta: 4520. NULL";


//  Id pregunta: 4573 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  Indica cual de las siguientes expresiones NO es correcta en un entorno de e-Learning:";
 choices[54]= new Array();
 choices[54][0] = "el LMS se encarga de gestionar los usuarios, los cursos y as herramientas de comunicaci&oacute;n.";
 choices[54][1] = "dos componentes fundamentales en este tipo de ense&ntilde;anza son el LMS y el courseware.";
 choices[54][2] = "se pueden establecer comunicaciones tanto s&iacute;ncronas como as&iacute;ncronas.";
 choices[54][3] = "para compatibilizar LMS y courseware de distintos fabricantes se utilizan los est&aacute;ndares ADL SCORM y UDDI.";
 answers[54] = choices[54][3];
 units[54] = "66";
 comments[54] = "Id Pregunta: 4573. ";


//  Id pregunta: 4587 AÃ±o de creación de pregunta: 2007-01-01
 questions[55]= "56)  &iquest;Que herramienta se utilliza en Reports 2.5 para dise&ntilde;ar las consultas en las que se basa un informe?";
 choices[55]= new Array();
 choices[55][0] = "QUERY MODEL";
 choices[55][1] = "DATA MODEL";
 choices[55][2] = "STRUCT MODEL";
 choices[55][3] = "REPORT MODEL";
 answers[55] = choices[55][1];
 units[55] = "";
 comments[55] = "Id Pregunta: 4587. ";


//  Id pregunta: 4746 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  Indicar la afirmaci&oacute;n correcta.";
 choices[56]= new Array();
 choices[56][0] = "Los servicios web pueden aprovechar la estructura de un GRID de manera eficiente";
 choices[56][1] = "Un GRID es una red de ordenadores que comparten recursos entre ellos para maximizar sus prestaciones totales";
 choices[56][2] = "Los recursos que se aportan por los miembros de una red GRID pueden ser de almacenamiento, memoria y procesamiento";
 choices[56][3] = "Para que una red GRID sea segura es preciso establecer una pol&iacute;tica de seguridad com&uacute;n a las subredes que lo conforman";
 answers[56] = choices[56][0];
 units[56] = "45";
 comments[56] = "Id Pregunta: 4746. ";


//  Id pregunta: 4750 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)  Se&ntilde;ale la opci&oacute;n verdadera en relaci&oacute;n a las infraestructura de clave p&uacute;blica&hellip;";
 choices[57]= new Array();
 choices[57][0] = "Se ha de garantizar que ning&uacute;n usuario, salvo aquel para quien se ha generado una pareja de claves de un certificado, pueda jam&aacute;s llegar a disponer de ellas.";
 choices[57][1] = "La utilizaci&oacute;n de hardware criptogr&aacute;fico (HSM) tiene sentido en las Autoridades de Certificaci&oacute;n (CA) pero no as&iacute; en las Autoridades de Registro (RA)";
 choices[57][2] = "Es importante que la CA disponga de certificaci&oacute;n FIPS 140-2";
 choices[57][3] = "EMV es un tipo de certificado que no responde al est&aacute;ndar X.509";
 answers[57] = choices[57][3];
 units[57] = "74";
 comments[57] = "Id Pregunta: 4750. NULL";


//  Id pregunta: 4820 AÃ±o de creación de pregunta: 2007-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language ) NO escierta?";
 choices[58]= new Array();
 choices[58][0] = "Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas";
 choices[58][1] = "Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML";
 choices[58][2] = "Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, encuyo caso pueden omitirse";
 choices[58][3] = "Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM(Document Object Model) o en XML-DOM";
 answers[58] = choices[58][2];
 units[58] = "69";
 comments[58] = "Id Pregunta: 4820. NULL";


//  Id pregunta: 4859 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  En un sistema experto tipo MYCIN, &iquest;c&oacute;mo se realiza el tratamiento de la incertidumbre?";
 choices[59]= new Array();
 choices[59][0] = "Mediante un modelo de inferencia bayesiana";
 choices[59][1] = "Mediante conjuntos borrosos, utilizando la teor&iacute;a de Zadeh";
 choices[59][2] = "Mediante factores de incertidumbre, utilizando la teor&iacute;a de Dempster-Shafer";
 choices[59][3] = "No hay tratamiento de la incertidumbre";
 answers[59] = choices[59][2];
 units[59] = "63";
 comments[59] = "Id Pregunta: 4859. ";


//  Id pregunta: 4906 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  En un sistema con memoria virtual, la pol&iacute;tica de reemplazo &oacute;ptima es aqu&eacute;lla que aconseja reemplazar la p&aacute;gina:";
 choices[60]= new Array();
 choices[60][0] = "Que m&aacute;s tiempo lleva en memoria.";
 choices[60][1] = "Que m&aacute;s tiempo vaya a tardar en ser referenciada.";
 choices[60][2] = "Que lleva m&aacute;s tiempo sin ser referenciada.";
 choices[60][3] = "Que ha sido utilizada con menos frecuencia.";
 answers[60] = choices[60][1];
 units[60] = "52";
 comments[60] = "Id Pregunta: 4906. Examen TIC B 2007";


//  Id pregunta: 5032 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta respecto al modelo de datos relacional:";
 choices[61]= new Array();
 choices[61][0] = "Una clave candidata es el conjunto de atributos cuyos valores han de coincidir con los valores de la claveprimaria de otra relaci&oacute;n";
 choices[61][1] = "Una clave ajena es el conjunto de atributos que determinan un&iacute;voca y m&iacute;nimamente cada tupla";
 choices[61][2] = "En una relaci&oacute;n no pueden existir varias claves candidatas";
 choices[61][3] = "Para las claves ajenas, la regla de integridad referencial establece que los valores de la clave ajena puedenser nulos";
 answers[61] = choices[61][3];
 units[61] = "58";
 comments[61] = "Id Pregunta: 5032. Examen TIC A 2007";


//  Id pregunta: 5272 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  El DNIe recoge los siguientes datos biom&eacute;tricos";
 choices[62]= new Array();
 choices[62][0] = "Huellas dactilares";
 choices[62][1] = "Iris del ojo";
 choices[62][2] = "Patr&oacute;n facial";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = choices[62][3];
 units[62] = "74";
 comments[62] = "Id Pregunta: 5272. no recoge huella dactilar completa, s&oacute;lo las minucias";


//  Id pregunta: 5425 AÃ±o de creación de pregunta: 2003-01-01
 questions[63]= "64)  En OLAP, &iquest;Qu&eacute; son las variables complejas?";
 choices[63]= new Array();
 choices[63][0] = "Las que tienen un tipo complejo.";
 choices[63][1] = "Las que se calculan a partir de otras variables.";
 choices[63][2] = "Las que necesitan m&aacute;s de una dimensi&oacute;n para ser almacenadas.";
 choices[63][3] = "Las que no son representables.";
 answers[63] = choices[63][0];
 units[63] = "68";
 comments[63] = "Id Pregunta: 5425. Castilla y Le&oacute;n";


//  Id pregunta: 5444 AÃ±o de creación de pregunta: 2003-01-01
 questions[64]= "65)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque ";
 choices[64]= new Array();
 choices[64][0] = "el lenguaje Java se deriva de C++.";
 choices[64][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[64][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[64][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin";
 answers[64] = choices[64][1];
 units[64] = "60";
 comments[64] = "Id Pregunta: 5444. Castilla y Le&oacute;n";


//  Id pregunta: 5501 AÃ±o de creación de pregunta: 2003-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[65]= new Array();
 choices[65][0] = "Utilizan t&eacute;cnicas multidimensionales para la extracci&oacute;n y el an&aacute;lisis de los datos.";
 choices[65][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[65][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[65][3] = "Est&aacute;n pensados para el an&aacute;lisis y actualizaci&oacute;n de los datos de forma r&aacute;pida y jerarquizada.";
 answers[65] = choices[65][3];
 units[65] = "68";
 comments[65] = "Id Pregunta: 5501. ";


//  Id pregunta: 5633 AÃ±o de creación de pregunta: 2003-01-01
 questions[66]= "67)  Indique cu&aacute;l de las siguientes respuestas es err&oacute;nea:";
 choices[66]= new Array();
 choices[66][0] = "Un m&oacute;dulo SODIMM posee 200 contactos";
 choices[66][1] = "Existen m&oacute;dulos DIMM de 194 contactos";
 choices[66][2] = "Existen  m&oacute;dulos DIMM de 184 contactos";
 choices[66][3] = "Las siglas DIMM hacen referencia a &quot;Dual Inline Memory Module&quot;";
 answers[66] = choices[66][1];
 units[66] = "47";
 comments[66] = "Id Pregunta: 5633. ";


//  Id pregunta: 5693 AÃ±o de creación de pregunta: 2003-01-01
 questions[67]= "68)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Se&ntilde;ale cu&aacute;l de las siguientes no es una de ellas:";
 choices[67]= new Array();
 choices[67][0] = "Zona p&uacute;blica";
 choices[67][1] = " Zona de seguridad";
 choices[67][2] = "Zona privada";
 choices[67][3] = "Zona confidencial";
 answers[67] = choices[67][3];
 units[67] = "74";
 comments[67] = "Id Pregunta: 5693. NULL";


//  Id pregunta: 5749 AÃ±o de creación de pregunta: 2009-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio en una firma CAdES-BES?";
 choices[68]= new Array();
 choices[68][0] = "Definici&oacute;n del tipo de contenido";
 choices[68][1] = "Resumen del mensaje";
 choices[68][2] = "Sello de tiempo";
 choices[68][3] = "Atributos identificativos del certificado del firmante";
 answers[68] = choices[68][2];
 units[68] = "73";
 comments[68] = "Id Pregunta: 5749. ";


//  Id pregunta: 6334 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Si el objetivo al plantear una consulta de data mining es obtener reglas de predicci&oacute;n orientadas a la toma de decisi&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Es indiferente que t&eacute;cnica se utilice.";
 choices[69][1] = "Se debe disponer de una buena herramienta de c&aacute;lculo de asociaciones.";
 choices[69][2] = "Se tiene que distinguir entre la variable que se va a  predecir y las variables que se uilizar&aacute;n para tal predicci&oacute;n.";
 choices[69][3] = "No hay en el estado actual de la tecnolog&iacute;a data mining ning&uacute;n enfoque adecuado para ese problema.";
 answers[69] = choices[69][2];
 units[69] = "68";
 comments[69] = "Id Pregunta: 6334. ";


//  Id pregunta: 6557 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Una Autoridad de Validaci&oacute;n (VA) puede realizar distintos tipos de servicios de validaci&oacute;n:";
 choices[70]= new Array();
 choices[70][0] = "Descarga de CRLs";
 choices[70][1] = "Via OCSP";
 choices[70][2] = "A y B son correctas";
 choices[70][3] = "A y B son incorrectas";
 answers[70] = choices[70][2];
 units[70] = "74";
 comments[70] = "Id Pregunta: 6557. NULL";


//  Id pregunta: 8756 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes NO es un sistema operativo para dispositivos m&oacute;viles?";
 choices[71]= new Array();
 choices[71][0] = "Android.";
 choices[71][1] = " SymbianOS.";
 choices[71][2] = "HTC Mobile.";
 choices[71][3] = "RIM BlackBerry.";
 answers[71] = choices[71][2];
 units[71] = "52";
 comments[71] = "Id Pregunta: 8756. Examen TIC A2 2010 interna";


//  Id pregunta: 9134 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l no se considera una arquitectura de un sistema f&iacute;sico?";
 choices[72]= new Array();
 choices[72][0] = "de bus m&uacute;ltiple";
 choices[72][1] = "paralela";
 choices[72][2] = "Pipeline";
 choices[72][3] = "Fault Tolerant";
 answers[72] = choices[72][0];
 units[72] = "47";
 comments[72] = "Id Pregunta: 9134. ";


//  Id pregunta: 9194 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[73]= new Array();
 choices[73][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[73][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[73][2] = "Si, en todos los casos";
 choices[73][3] = "Todas las anteriores son falsas";
 answers[73] = choices[73][2];
 units[73] = "36";
 comments[73] = "Id Pregunta: 9194. ";


//  Id pregunta: 9245 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;C&oacute;mo surgi&oacute; Windows?";
 choices[74]= new Array();
 choices[74][0] = "En la interfaz de usuario de Apple Lisa, precursora de Apple Macintosh.";
 choices[74][1] = "Fue una interfaz gr&aacute;fica para MS-DOS";
 choices[74][2] = "Windows 1.0 sali&oacute; al mercado en 1985.";
 choices[74][3] = "Todas son correctas.";
 answers[74] = choices[74][3];
 units[74] = "56";
 comments[74] = "Id Pregunta: 9245. ";


//  Id pregunta: 9271 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  En relaci&oacute;n a los sistemas Ubuntu Server, &iquest;qu&eacute; implica una versi&oacute;n LTS? ";
 choices[75]= new Array();
 choices[75][0] = "Que es una versi&oacute;n inestable o en fase de desarrollo del kernel. ";
 choices[75][1] = "Que es una versi&oacute;n Lite o ligera, especialmente adaptada para tabletas. ";
 choices[75][2] = "Que existe soporte para esa versi&oacute;n durante al menos 5 a&ntilde;os desde el lanzamiento. ";
 choices[75][3] = "Que existe soporte para esa versi&oacute;n durante al menos 4 a&ntilde;os desde el lanzamiento.";
 answers[75] = choices[75][2];
 units[75] = "54";
 comments[75] = "Id Pregunta: 9271. Examen TICA2-2011";


//  Id pregunta: 9604 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;C&uacute;al es la estructura m&aacute;s antigua de un modelo SGBD?";
 choices[76]= new Array();
 choices[76][0] = "Relacional";
 choices[76][1] = "En red";
 choices[76][2] = "Jer&aacute;rquico";
 choices[76][3] = "Multidimensional";
 answers[76] = choices[76][2];
 units[76] = "57";
 comments[76] = "Id Pregunta: 9604. ";


//  Id pregunta: 9678 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Se&ntilde;ale la respuesta correcta:";
 choices[77]= new Array();
 choices[77][0] = "La altitud es la distancia vertical desde un punto de referencia de la superficie terrestre.";
 choices[77][1] = "La altura es la distancia vertical a un origen determinado, considerado como nivel 0.";
 choices[77][2] = "La longitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 choices[77][3] = "La latitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 answers[77] = choices[77][3];
 units[77] = "67";
 comments[77] = "Id Pregunta: 9678. NULL";


//  Id pregunta: 9710 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  El modelo Vectorial de representaci&oacute;n de datos espaciales";
 choices[78]= new Array();
 choices[78][0] = "facilita establecer relaciones topol&oacute;gicas entre los elementos.";
 choices[78][1] = "utiliza s&oacute;lo dos elementos geom&eacute;tricos (puntos y l&iacute;neas) para modelar digitalmente las entidades del mundo real.";
 choices[78][2] = "divide el espacio en celdas regulares donde cada una de ellas es ubicada por un vector.";
 choices[78][3] = "almacena los datos mediante el formato vectorial de base de datos BLOB.";
 answers[78] = choices[78][0];
 units[78] = "67";
 comments[78] = "Id Pregunta: 9710. Examen TIC-A1 2013";


//  Id pregunta: 9741 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[79]= new Array();
 choices[79][0] = "Contexts and Dependency Injection.";
 choices[79][1] = "Common Display Interface.";
 choices[79][2] = "Context-Dependent Interface.";
 choices[79][3] = "Case-Driven Implementation.";
 answers[79] = choices[79][0];
 units[79] = "60";
 comments[79] = "Id Pregunta: 9741. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9963 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Un almac&eacute;n de datos (Data Warehouse) NO se caracteriza por ser:";
 choices[80]= new Array();
 choices[80][0] = "Integrado, los datos en el almac&eacute;n de datos deben integrarse en una estructura consistente.";
 choices[80][1] = "Orientado por temas, el almac&eacute;n de datos est&aacute; organizado de acuerdo con los temas m&aacute;s importantes para la organizaci&oacute;n";
 choices[80][2] = "Variable en el tiempo, los datos en el almac&eacute;n de datos siempre se cargan con una referencia temporal bajo la que son v&aacute;lidos.";
 choices[80][3] = "Vol&aacute;til, los datos en el almac&eacute;n de datos son le&iacute;dos, actualizados y eliminados.";
 answers[80] = choices[80][3];
 units[80] = "68,71";
 comments[80] = "Id Pregunta: 9963. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  SAFER (Secure And Fast Encryption Routine) es un algoritmo de cifrado:";
 choices[81]= new Array();
 choices[81][0] = "Sim&eacute;trico de bloques.";
 choices[81][1] = "Sim&eacute;trico de flujo.";
 choices[81][2] = "Asim&eacute;trico de factorizaci&oacute;n entera.";
 choices[81][3] = "Asim&eacute;trico de logaritmo discreto.";
 answers[81] = choices[81][0];
 units[81] = "72";
 comments[81] = "Id Pregunta: 10065. TIC A2, libre, Examen 2013";


//  Id pregunta: 10166 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Sea la relaci&oacute;n SOLICITUD (CODIGO, FECHA, DNI_SOLICITANTE, NOM_SOLICITANTE, TEL_SOLICITANTE) y el atributo CODIGO su clave primaria, &iquest;en qu&eacute; forma normal se encuentra?";
 choices[82]= new Array();
 choices[82][0] = "Sin normalizar";
 choices[82][1] = "1&ordf; Forma Normal";
 choices[82][2] = "2&ordf; Forma Normal";
 choices[82][3] = "3&ordf; Forma Normal";
 answers[82] = choices[82][0];
 units[82] = "58";
 comments[82] = "Id Pregunta: 10166. ";


//  Id pregunta: 10187 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  ACID es un acr&oacute;nimo que, en el contexto de las bases de datos, hace referencia a un conjunto de caracter&iacute;sticas que deben asumir las transacciones para garantizar su procesamiento fiable. De entre &eacute;stas:";
 choices[83]= new Array();
 choices[83][0] = "La Consistencia (C) hace referencia a que las operaciones llevadas a cabo por la transacci&oacute;n ser&aacute;n completadas y confirmadas en su totalidad, o ser&aacute;n deshechas, de modo que no quede ninguna operaci&oacute;n a medias.";
 choices[83][1] = "La caracter&iacute;stica de Integridad (I) garantiza que la base de datos se transforma desde un estado &iacute;ntegro o v&aacute;lido a otro estado &iacute;ntegro o v&aacute;lido.";
 choices[83][2] = "a) y b) son verdaderas";
 choices[83][3] = "a) y b) son falsas";
 answers[83] = choices[83][3];
 units[83] = "57";
 comments[83] = "Id Pregunta: 10187. ";


//  Id pregunta: 10244 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio regala a un amigo un CD con el ejecutable de Juan. &iquest;Cu&aacute;l de las siguientes opciones no satisface las obligaciones de Antonio de hacer disponible el c&oacute;digo fuente?";
 choices[84]= new Array();
 choices[84][0] = "Puede alojar el c&oacute;digo fuente en su web site e indicar la URL en el CD";
 choices[84][1] = "Puede proveer el c&oacute;digo fuente en el mismo CD que el ejecutable";
 choices[84][2] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente contra el pago de los costes de distribuci&oacute;n";
 choices[84][3] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente gratis en un CD";
 answers[84] = choices[84][0];
 units[84] = "61";
 comments[84] = "Id Pregunta: 10244. ";


//  Id pregunta: 10288 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En el contexto de copias de seguridad o respaldo, un TMS es acr&oacute;nimo de:";
 choices[85]= new Array();
 choices[85][0] = "Tape Management System.";
 choices[85][1] = "Transaction Multiplexing System.";
 choices[85][2] = "Tape Mapping System.";
 choices[85][3] = "Transaction Management System.";
 answers[85] = choices[85][0];
 units[85] = "48";
 comments[85] = "Id Pregunta: 10288. TIC A2, libre, examen 2013";


//  Id pregunta: 10305 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Qu&eacute; muestra el comando top en UNIX?";
 choices[86]= new Array();
 choices[86][0] = "Los ficheros abiertos.";
 choices[86][1] = "El escritorio.";
 choices[86][2] = "Los procesos.";
 choices[86][3] = "Los puertos TCP/IP.";
 answers[86] = choices[86][2];
 units[86] = "53";
 comments[86] = "Id Pregunta: 10305. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10461 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Respecto a REST (Represantional State Transfer) indique la respuesta incorrecta:";
 choices[87]= new Array();
 choices[87][0] = "Es un est&aacute;ndar para desarrollar y proporcionar servicios en internet.";
 choices[87][1] = "La identificaci&oacute;n de recursos se realiza de forma &uacute;nica global mediante URIs (Uniform Resource Identifiers).";
 choices[87][2] = "Los recursos identificados con URIs son los objeto l&oacute;gicos a los que se mandan los mensajes.";
 choices[87][3] = "Emplea un protocolo cliente/servidor sin estado.";
 answers[87] = choices[87][0];
 units[87] = "51";
 comments[87] = "Id Pregunta: 10461. ";


//  Id pregunta: 10469 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Respecto a HTML5, indique la respuesta incorrecta:";
 choices[88]= new Array();
 choices[88][0] = "Existe una API de geolocalizaci&oacute;n.";
 choices[88][1] = "Permite abrir sockets para una comunicaci&oacute;n bidireccional, full duplex con baja latencia y que se basa en el protocolo TCP.";
 choices[88][2] = "No neceita Flash para ver v&iacute;deos.";
 choices[88][3] = "Los Web Workers permiten la ejecuci&oacute;n de un &uacute;nico subproceso.";
 answers[88] = choices[88][3];
 units[88] = "69";
 comments[88] = "Id Pregunta: 10469. NULL";


//  Id pregunta: 10607 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Marque el lenguaje que est&aacute; basado en XML:";
 choices[89]= new Array();
 choices[89][0] = "XBRL";
 choices[89][1] = "SOAP";
 choices[89][2] = "UDDI";
 choices[89][3] = "XBGG";
 answers[89] = choices[89][0];
 units[89] = "69";
 comments[89] = "Id Pregunta: 10607. ";


//  Id pregunta: 10811 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas NO se considera una de las libertades esenciales que cumple el software libre:";
 choices[90]= new Array();
 choices[90][0] = "Libertad para ejecutar y usar el software con la &uacute;nica restricci&oacute;n que se debe especificar y aprobar su prop&oacute;sito.";
 choices[90][1] = "Libertad para estudiar el programa y modificarlo, adapt&aacute;ndolo a sus necesidades.";
 choices[90][2] = "Libertad de distribuir copias.";
 choices[90][3] = "Libertad de modificar el programa y liberar las modificaciones al p&uacute;blico.";
 answers[90] = choices[90][0];
 units[90] = "61";
 comments[90] = "Id Pregunta: 10811. Examen GSI 2014";


//  Id pregunta: 10866 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Se&ntilde;ale la respuesta FALSA acerca de la tecnolog&iacute;a Java Web Start:";
 choices[91]= new Array();
 choices[91][0] = "El software de Java Web Start permite descargar y ejecutar aplicaciones Java desde la Web.";
 choices[91][1] = "Garantiza que se est&aacute; ejecutando la &uacute;ltima versi&oacute;n de la aplicaci&oacute;n.";
 choices[91][2] = "Incluido en el JDK desde la versi&oacute;n 6, permitiendo instalar aplicaciones a trav&eacute;s de URLs con JMLP (Java Main Launch Protocol).";
 choices[91][3] = "Permite desplegar f&aacute;cilmente aplicaciones standalone de escritorio.";
 answers[91] = choices[91][2];
 units[91] = "60, 116";
 comments[91] = "Id Pregunta: 10866. Examen GSI 2014";


//  Id pregunta: 11036 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l no es un operador b&aacute;sico del &Aacute;lgebra Relacional?";
 choices[92]= new Array();
 choices[92][0] = "Intersecci&oacute;n";
 choices[92][1] = "Uni&oacute;n";
 choices[92][2] = "Proyecci&oacute;n";
 choices[92][3] = "Diferencia";
 answers[92] = choices[92][0];
 units[92] = "58";
 comments[92] = "Id Pregunta: 11036. ";


//  Id pregunta: 11127 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes no es un servicio de Amazon de Cloud Computing?";
 choices[93]= new Array();
 choices[93][0] = "Amazon CloudWatch";
 choices[93][1] = "Amazon Elastic Compute Cloud";
 choices[93][2] = "Amazon AppFabric";
 choices[93][3] = "Amazon Simple Storage Service";
 answers[93] = choices[93][2];
 units[93] = "47";
 comments[93] = "Id Pregunta: 11127. ";


//  Id pregunta: 11255 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En relaci&oacute;n con los modos de operaci&oacute;n fundamentales de los algoritmos hash:";
 choices[94]= new Array();
 choices[94][0] = "El modo de operaci&oacute;n MDC sirve para la verificaci&oacute;n de integridad de mensajes";
 choices[94][1] = "MAC permite comprobar tanto la integridad como la autenticidad del origen de un mensaje a trav&eacute;s de una clave compartida.";
 choices[94][2] = "HMAC de IPSec es un ejemplo de implementaci&oacute;n de MAC.";
 choices[94][3] = "Todas las respuestas son verdaderas";
 answers[94] = choices[94][3];
 units[94] = "72";
 comments[94] = "Id Pregunta: 11255. ";


//  Id pregunta: 11262 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Para los niveles de seguridad de los sistemas de autenticaci&oacute;n definidos en el Reglamento 910/2014 relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior, NO es cierto:";
 choices[95]= new Array();
 choices[95][0] = "Se tienen en cuenta tanto el proyecto europeo STORK como la norma ISO 29115.";
 choices[95][1] = "El nivel sustancial de STORK requiere un registro presencial al menos una vez, y la credencial electr&oacute;nica se entrega como certificado hardware.";
 choices[95][2] = "El modelo QAA (Quality, Authentication, Assurance) diferencia los factores asociados al proceso de registro y entrega de la credencial, y factores asociados al proceso de autenticaci&oacute;n electr&oacute;nica con dicha credencial.";
 choices[95][3] = "El DNIe se corresponde con un nivel 4 de QAA.";
 answers[95] = choices[95][1];
 units[95] = "73";
 comments[95] = "Id Pregunta: 11262. ";


//  Id pregunta: 11275 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Entre las opciones que posee una organizaci&oacute;n para obtener servicios en la nube:";
 choices[96]= new Array();
 choices[96][0] = "La nube comunitaria implica menor complejidad en la integraci&oacute;n de la soluci&oacute;n cloud.";
 choices[96][1] = "El retorno de la inversi&oacute;n es m&aacute;s lento en la nube p&uacute;blica que en la nube privada.";
 choices[96][2] = "La nube h&iacute;brida permite compaginar la auto-provisi&oacute;n de procesos cr&iacute;ticos y ganar flexibilidad en aquellos que tienen menor criticidad.";
 choices[96][3] = "La nube p&uacute;blica nos da la posibilidad de aprovechar las infraestructuras ya existentes en la organizaci&oacute;n.";
 answers[96] = choices[96][2];
 units[96] = "47";
 comments[96] = "Id Pregunta: 11275. ";


//  Id pregunta: 11283 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; se entiende por TileMatrixSet en el contexto de la informaci&oacute;n geogr&aacute;fica?";
 choices[97]= new Array();
 choices[97][0] = "Una matriz de puntos de control para registrar una im&aacute;gen r&aacute;ster respecto a otra";
 choices[97][1] = "Un conjunto de rasterizaciones y fragmentaciones de la capa a diferentes escalas predeterminadas para un sistema de referencia y &aacute;mbito concreto";
 choices[97][2] = "Un conjunto de datos de tipo r&aacute;ster en el que el atributo respresentado es la elevaci&oacute;n de los puntos situados en una malla regular";
 choices[97][3] = "Ninguna de las anteriores";
 answers[97] = choices[97][1];
 units[97] = "67";
 comments[97] = "Id Pregunta: 11283. ";


//  Id pregunta: 11342 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De las siguientes opciones, se&ntilde;ale cu&aacute;l es la correcta para la transformaci&oacute;n de una relaci&oacute;n 1:1";
 choices[98]= new Array();
 choices[98][0] = "Se crea una clave for&aacute;nea en una de ellas que referencia a la clave de la otra";
 choices[98][1] = "La relaci&oacute;n se convierte en tabla con cada una de las claves m&aacute;s las propiedades de la relaci&oacute;n";
 choices[98][2] = "Podr&iacute;a elegirse entre las opciones anteriores";
 choices[98][3] = "Ninguna de las anteriores";
 answers[98] = choices[98][0];
 units[98] = "57";
 comments[98] = "Id Pregunta: 11342. ";


//  Id pregunta: 11523 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En el entorno gr&aacute;fico KDE, &iquest;Qu&eacute; aplicaci&oacute;n permite generar informes?";
 choices[99]= new Array();
 choices[99][0] = "Kchart";
 choices[99][1] = "Kugar";
 choices[99][2] = "Kplato";
 choices[99][3] = "Kspread";
 answers[99] = choices[99][1];
 units[99] = "54";
 comments[99] = "Id Pregunta: 11523. NULL";


