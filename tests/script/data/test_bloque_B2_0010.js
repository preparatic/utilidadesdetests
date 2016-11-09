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

//  Id pregunta: 693 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El R.D. 209/2003 regula:";
 choices[0]= new Array();
 choices[0][0] = "Los registros telem&aacute;ticos";
 choices[0][1] = "Las notificaciones telem&aacute;ticas";
 choices[0][2] = "La utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[0][3] = "Todas las anteriores son correctas";
 answers[0] = choices[0][3];
 units[0] = "30";
 comments[0] = "Id Pregunta: 693. ";


//  Id pregunta: 758 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  De las siguientes afirmaciones referentes a los sistemas operativos, &iquest;cu&aacute;l es falsa?.";
 choices[1]= new Array();
 choices[1][0] = "El scheduler decide los candidatos a competir por los recursos";
 choices[1][1] = "El dispatcher decide que proceso se ejecuta";
 choices[1][2] = "Para prevenir el deadlock se puede usar el &quot;algoritmo del banquero&quot;.";
 choices[1][3] = "Ninguna de las anteriores es verdadera";
 answers[1] = choices[1][3];
 units[1] = "52";
 comments[1] = "Id Pregunta: 758. ";


//  Id pregunta: 817 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Seg&uacute;n el m&eacute;todo de resoluci&oacute;n de problemas GPS (General Problem Solving):";
 choices[2]= new Array();
 choices[2][0] = "El problema se formaliza o define por los siguientes componentes : I(estado inicial), F (estado final) y O (conjunto de operadores complejos)";
 choices[2][1] = "Existe un problema cuando la aplicaci&oacute;n de un m&eacute;todo conocido a una situaci&oacute;n de incertidumbre no lleva a un estado final determinado";
 choices[2][2] = "Los problemas se dividen en subproblemas m&aacute;s simples de manera recursiva. La unidad m&iacute;nima de divisi&oacute;n se denomina &quot;problema elemental&quot;";
 choices[2][3] = "Cuando hay una discrepancia entre la situaci&oacute;n de partida y aqu&eacute;lla que se quiere alcanzar se dice que hay un problema";
 answers[2] = choices[2][3];
 units[2] = "63";
 comments[2] = "Id Pregunta: 817. ";


//  Id pregunta: 879 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l es el modelo de objeto de documento que utilizan los parsers o analizadores de XML?:";
 choices[3]= new Array();
 choices[3][0] = "DOKM";
 choices[3][1] = "DOM";
 choices[3][2] = "JDOC";
 choices[3][3] = "Todas son falsas";
 answers[3] = choices[3][1];
 units[3] = "69";
 comments[3] = "Id Pregunta: 879. NULL";


//  Id pregunta: 887 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l no es caracter&iacute;stica del puerto paralelo?:";
 choices[4]= new Array();
 choices[4][0] = "Transmite y recibe 8 bits a la vez";
 choices[4][1] = "Se define en el Nivel 2 de la ISO ";
 choices[4][2] = "Es un puerto RS-232-C de 25 pines";
 choices[4][3] = "Tambi&eacute;n se le conoce en los PC&acute;s como printer port";
 answers[4] = choices[4][1];
 units[4] = "47";
 comments[4] = "Id Pregunta: 887. ";


//  Id pregunta: 898 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;En qu&eacute; generaci&oacute;n aparecen los microprocesadores?:";
 choices[5]= new Array();
 choices[5][0] = "Segunda";
 choices[5][1] = "Tercera";
 choices[5][2] = "Cuarta";
 choices[5][3] = "Las generaciones solo se aplican a los lenguajes de programaci&oacute;n";
 answers[5] = choices[5][2];
 units[5] = "47";
 comments[5] = "Id Pregunta: 898. ";


//  Id pregunta: 942 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; se entiende por solapamiento de componentes?:";
 choices[6]= new Array();
 choices[6][0] = "Es el porcentaje de tiempo durante el cual dos o m&aacute;s componentes est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[6][1] = "Es el porcentaje de tiempo durante el cual los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema";
 choices[6][2] = "Es la cantidad de tiempo ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[6][3] = "Es el n&uacute;mero de programas sacados de memoria por unidad de tiempo a causa de falta de espacio o para reorganizar el mismo";
 answers[6] = choices[6][0];
 units[6] = "52";
 comments[6] = "Id Pregunta: 942. ";


//  Id pregunta: 973 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Dada una relaci&oacute;n R y dos de sus atributos X e Y, si cada valor de X tiene asociado con &eacute;l un &uacute;nico valorde Y en todo instante, se dice que:";
 choices[7]= new Array();
 choices[7][0] = "El atributo X es funcionalmente dependiente del atributo Y";
 choices[7][1] = "El atributo Y es funcionalmente dependiente del atributo X";
 choices[7][2] = "La relaci&oacute;n R no est&aacute; normalizada";
 choices[7][3] = "La relaci&oacute;n R no est&aacute; en Segunda Forma Normal";
 answers[7] = choices[7][1];
 units[7] = "58";
 comments[7] = "Id Pregunta: 973. ";


//  Id pregunta: 1027 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Entrust:";
 choices[8]= new Array();
 choices[8][0] = "Un algoritmo criptogr&aacute;fico";
 choices[8][1] = "Un mecanismo de intercambio de claves";
 choices[8][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[8][3] = "Una funcion resumen";
 answers[8] = choices[8][2];
 units[8] = "74";
 comments[8] = "Id Pregunta: 1027. NULL";


//  Id pregunta: 1051 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El robo de ciclo explica que la duraci&oacute;n de las instrucciones no sea fija en funci&oacute;n de si existen o no robos de ciclo:";
 choices[9]= new Array();
 choices[9][0] = "En todo caso es falso";
 choices[9][1] = "Siempre es cierto";
 choices[9][2] = "Depende de la carga de trabajo de la CPU";
 choices[9][3] = "Depende del 'throughput'";
 answers[9] = choices[9][1];
 units[9] = "52";
 comments[9] = "Id Pregunta: 1051. ";


//  Id pregunta: 1054 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El sistema de encriptaci&oacute;n RSA (Rivest, Shamir y Adleman, 1978)&hellip;:";
 choices[10]= new Array();
 choices[10][0] = "El receptor del mensaje debe conocer la clave p&uacute;blica para descifrarlo";
 choices[10][1] = "Se basa en la seguridad que confiere la dificultad de factorizar n&uacute;meros grandes";
 choices[10][2] = "Es un sistema de encriptaci&oacute;n sim&eacute;trico";
 choices[10][3] = "Garantiza la seguridad a&uacute;n utilizando n&uacute;meros primos de menos de veinte cifras";
 answers[10] = choices[10][1];
 units[10] = "72";
 comments[10] = "Id Pregunta: 1054. ";


//  Id pregunta: 1133 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En sistemas Windows 200x, &iquest;cu&aacute;l es el API nativo de Microsoft que permite programar contra los servicios de Active Directory?:";
 choices[11]= new Array();
 choices[11][0] = "X.500";
 choices[11][1] = "ADSI";
 choices[11][2] = "LDAP";
 choices[11][3] = "Todas son falsas";
 answers[11] = choices[11][1];
 units[11] = "56";
 comments[11] = "Id Pregunta: 1133. ";


//  Id pregunta: 1180 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Indicar cu&aacute;l de los siguientes agentes software inteligentes no existe:";
 choices[12]= new Array();
 choices[12][0] = "Agentes interfaz";
 choices[12][1] = "Agentes de gesti&oacute;n";
 choices[12][2] = "Agentes de informaci&oacute;n";
 choices[12][3] = "Agentes virtuales";
 answers[12] = choices[12][1];
 units[12] = "63";
 comments[12] = "Id Pregunta: 1180. ";


//  Id pregunta: 1195 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indique una caracter&iacute;stica falsa de Java:";
 choices[13]= new Array();
 choices[13][0] = "Es interpretado y portable a distintas plataformas";
 choices[13][1] = "Soporta programaci&oacute;n multihilo (multithreading)";
 choices[13][2] = "Es un entorno seguro porque el sistema runtime incorpora protecci&oacute;n contra virus y alteraciones de c&oacute;digo";
 choices[13][3] = "Todas las anteriores son caracter&iacute;sticas de Java";
 answers[13] = choices[13][3];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1195. JCED - Preparatic XVII";


//  Id pregunta: 1217 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La definici&oacute;n de PKI, seg&uacute;n IETF - PKIX es:";
 choices[14]= new Array();
 choices[14][0] = "El conjunto de hardware, software, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[14][1] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar y almacenarcertificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[14][2] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[14][3] = "El conjunto de pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 answers[14] = choices[14][2];
 units[14] = "74";
 comments[14] = "Id Pregunta: 1217. NULL";


//  Id pregunta: 1226 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La ley emp&iacute;rica de Grosh establece:";
 choices[15]= new Array();
 choices[15][0] = "La potencia de c&aacute;lculo de los ordenadores es proporcional al cuadrado del tiempo que transcurre";
 choices[15][1] = "La potencia de c&aacute;lculo de lo ordenadores va en proporci&oacute;n directa con su coste";
 choices[15][2] = "El coste de un ordenador es proporcional a la raiz cuadrada de su potencia de c&aacute;lculo";
 choices[15][3] = "El coste de un ordenador es inversamente proporcional a la disminuci&oacute;n de su potencia";
 answers[15] = choices[15][2];
 units[15] = "45";
 comments[15] = "Id Pregunta: 1226. ";


//  Id pregunta: 1235 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La multiprogramaci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Se basa en el concepto de tiempo compartido";
 choices[16][1] = "Aprovecha las ventajas de los canales de E/S y de las interrupciones";
 choices[16][2] = "Reduce el tiempo de espera de un programa pero no elimina los tiempos muertos producidos por operaciones de E/S";
 choices[16][3] = "La organizaci&oacute;n de los trabajos mediante colas o listas simplifica las funciones del supervisor respecto al de sistemas operativos convencionales";
 answers[16] = choices[16][1];
 units[16] = "52";
 comments[16] = "Id Pregunta: 1235. ";


//  Id pregunta: 1342 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Se&ntilde;ale el enunciado falso:";
 choices[17]= new Array();
 choices[17][0] = "Los ordenadores de primera generaci&oacute;n eran dif&iacute;ciles de programar porque no exist&iacute;an los lenguajes simb&oacute;licos";
 choices[17][1] = "Los ordenadores de segunda generaci&oacute;n quedaron limitados al campo cient&iacute;fico y de la defensa";
 choices[17][2] = "Como consecuencia de la aparici&oacute;n de los transistores disminuyeron las necesidades de refrigeraci&oacute;n";
 choices[17][3] = "El ordenador ENIAC estaba basado en tecnolog&iacute;as de v&aacute;lvulas de vac&iacute;o";
 answers[17] = choices[17][1];
 units[17] = "50";
 comments[17] = "Id Pregunta: 1342. ";


//  Id pregunta: 1362 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Si construimos un fichero, donde la direcci&oacute;n real de almacenamiento de cada registro se deduce directamente de su indicativo o clave a trav&eacute;s de un algoritmo, estamos hablando de un fichero con organizaci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Indexada";
 choices[18][1] = "Encadenada";
 choices[18][2] = "Aleatoria";
 choices[18][3] = "Invertida";
 answers[18] = choices[18][2];
 units[18] = "52";
 comments[18] = "Id Pregunta: 1362. ";


//  Id pregunta: 1391 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Un 'Recordset' es:";
 choices[19]= new Array();
 choices[19][0] = "Un conjunto de variables en un lenguaje orientado a objetos";
 choices[19][1] = "Una referencia al resultado de una consulta o tabla de base de datos";
 choices[19][2] = "La unidad b&aacute;sica para acceder a vol&uacute;menes de disco montados por NFS";
 choices[19][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[19] = choices[19][1];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1391. ";


//  Id pregunta: 1404 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Un sistema situado en una central nuclear, encargado de gestionar su correcto funcionamiento y operativa, controlando todos sus elementos, y que tiene un umbral de tiempo m&aacute;ximo para dar cada respuesta, se cataloga como:";
 choices[20]= new Array();
 choices[20][0] = "Sistema multiprogramado";
 choices[20][1] = "Sistema de tiempo compartido";
 choices[20][2] = "Sistema de tiempo real";
 choices[20][3] = "Sistema multiusuario";
 answers[20] = choices[20][2];
 units[20] = "52";
 comments[20] = "Id Pregunta: 1404. ";


//  Id pregunta: 1433 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  XQL es:";
 choices[21]= new Array();
 choices[21][0] = "Extended Query Language";
 choices[21][1] = "XML Query Language";
 choices[21][2] = "No se corresponde con ningun acr&oacute;nimo usado en inform&aacute;tica o telecomunicaciones";
 choices[21][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[21] = choices[21][1];
 units[21] = "69";
 comments[21] = "Id Pregunta: 1433. NULL";


//  Id pregunta: 1460 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En un servidor de archivos jer&aacute;rquico cada nodo del &aacute;rbol puede tener: ";
 choices[22]= new Array();
 choices[22][0] = "Una etiqueta o un registro de datos, pero no ambos";
 choices[22][1] = "Un registro de datos";
 choices[22][2] = "Una etiqueta, un registro de datos, ambos o ninguno";
 choices[22][3] = "Una etiqueta y un registro de datos obligatoriamente";
 answers[22] = choices[22][2];
 units[22] = "53";
 comments[22] = "Id Pregunta: 1460. ";


//  Id pregunta: 1466 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La definici&oacute;n de la ofim&aacute;tica como la utilizaci&oacute;n de tecnolog&iacute;a para mejorar la realizaci&oacute;n de funciones de oficina se debe a:";
 choices[23]= new Array();
 choices[23][0] = "Hammer y Sirbu";
 choices[23][1] = "Olson y Lucas";
 choices[23][2] = "Eli y Nutt";
 choices[23][3] = "Carter y Huzan";
 answers[23] = choices[23][0];
 units[23] = "47";
 comments[23] = "Id Pregunta: 1466. ";


//  Id pregunta: 1470 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Los perif&eacute;ricos conocidos como &quot;Pen-drive&quot; son:";
 choices[24]= new Array();
 choices[24][0] = "Unidades del tama&ntilde;o de un bol&iacute;grafo o un mechero que permiten aumentar la memoria RAM del ordenador o bien a&ntilde;adir un nuevo disco duro port&aacute;til y extra&iacute;ble";
 choices[24][1] = "L&aacute;pices &oacute;pticos que permiten dibujar en tabletas digitalizadoras y pantallas t&aacute;ctiles";
 choices[24][2] = "Esc&aacute;neres de mano de alta precisi&oacute;n";
 choices[24][3] = "Lectores de c&oacute;digos de barras de &uacute;ltima generaci&oacute;n";
 answers[24] = choices[24][0];
 units[24] = "47";
 comments[24] = "Id Pregunta: 1470. ";


//  Id pregunta: 1554 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no est&aacute; asociada al concepto de Software Libre?:";
 choices[25]= new Array();
 choices[25][0] = "Redistribuci&oacute;n libre.";
 choices[25][1] = "Acceso al c&oacute;digo fuente del programa.";
 choices[25][2] = "Derecho de modificaci&oacute;n.";
 choices[25][3] = "Distribuci&oacute;n libre del programa pero no de la licencia.";
 answers[25] = choices[25][3];
 units[25] = "61";
 comments[25] = "Id Pregunta: 1554. Junta Andaluc&iacute;a";


//  Id pregunta: 1608 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  La escalabilidad vertical tiene que ver con:";
 choices[26]= new Array();
 choices[26][0] = "Granjas de servidores";
 choices[26][1] = "Servidores en rack";
 choices[26][2] = "Cluster de seridores";
 choices[26][3] = "Nada de lo anterior";
 answers[26] = choices[26][3];
 units[26] = "45";
 comments[26] = "Id Pregunta: 1608. ";


//  Id pregunta: 1618 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Para cambiar los privilegios de un fichero en UNIX qu&eacute; comando se utiliza";
 choices[27]= new Array();
 choices[27][0] = "pwd";
 choices[27][1] = "chmod";
 choices[27][2] = "rmdir";
 choices[27][3] = "cat";
 answers[27] = choices[27][1];
 units[27] = "54";
 comments[27] = "Id Pregunta: 1618. NULL";


//  Id pregunta: 1646 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la configuraci&oacute;n de discos RAID 5 son  ciertas?";
 choices[28]= new Array();
 choices[28][0] = "Existe un disco de paridad dedicado";
 choices[28][1] = "La paridad de calcula bas&aacute;ndose en la operaci&oacute;n l&oacute;gica XOR";
 choices[28][2] = "Es la configuraci&oacute;n id&oacute;nea para aplicaciones de alta transferencia de datos";
 choices[28][3] = "Todas las anteriores son ciertas";
 answers[28] = choices[28][1];
 units[28] = "48";
 comments[28] = "Id Pregunta: 1646. ";


//  Id pregunta: 1723 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  En los sistemas Unix el superbloque:";
 choices[29]= new Array();
 choices[29][0] = "Contiene informaci&oacute;n para el arranque del sistema";
 choices[29][1] = "Es el bloque 0 en la organizaci&oacute;n de un disco";
 choices[29][2] = "Contiene el n&uacute;mero de i-nodos y el n&uacute;mero de bloques del sistema de archivos";
 choices[29][3] = "todas son correctas";
 answers[29] = choices[29][2];
 units[29] = "53";
 comments[29] = "Id Pregunta: 1723. ";


//  Id pregunta: 1738 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  La gesti&oacute;n de memoria de Windows2003 se caracteriza por";
 choices[30]= new Array();
 choices[30][0] = "No tiene realmente porque Microsoft tiene un sistema propio";
 choices[30][1] = "Es segmentaci&oacute;n paginada";
 choices[30][2] = "Se basa en paginaci&oacute;n apoy&aacute;ndose en el conjunto de trabajo";
 choices[30][3] = "Es un sistema de segmentaci&oacute;n apoy&aacute;ndose en el conjunto de trabajo";
 answers[30] = choices[30][2];
 units[30] = "56";
 comments[30] = "Id Pregunta: 1738. ";


//  Id pregunta: 1755 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;Qu&eacute; es el Proyecto Mono?";
 choices[31]= new Array();
 choices[31][0] = "Iniciativa para portar el entorno .Net a Linux";
 choices[31][1] = "Completa enciclopedia de animales creada por Microsoft";
 choices[31][2] = "Herramienta de Software Libre para la educaci&oacute;n de los ni&ntilde;os en las escuelas";
 choices[31][3] = "Programa de dibujo";
 answers[31] = choices[31][0];
 units[31] = "61,62";
 comments[31] = "Id Pregunta: 1755. ";


//  Id pregunta: 1786 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Los m&eacute;todos de busca heur&iacute;stica&hellip;";
 choices[32]= new Array();
 choices[32][0] = "Nunca encuentran la soluci&oacute;n &oacute;ptima";
 choices[32][1] = "Dan con la soluci&oacute;n &oacute;ptima en menos tiempo";
 choices[32][2] = "Dan con la soluci&oacute;n &oacute;ptima pero pueden ser m&aacute;s lentos que otros m&eacute;todos";
 choices[32][3] = "Permiten encontrar una buena soluci&oacute;n r&aacute;pidamente pero puede no ser la &oacute;ptima";
 answers[32] = choices[32][3];
 units[32] = "63";
 comments[32] = "Id Pregunta: 1786. ";


//  Id pregunta: 1869 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  La directiva europea del Parlamento y del Consejo relativa a la firma electr&oacute;nica es:";
 choices[33]= new Array();
 choices[33][0] = "Directiva 2000/31/CE";
 choices[33][1] = "Directiva 1999/93/CE";
 choices[33][2] = "Directiva 98/68/CE";
 choices[33][3] = "Directiva 1996/46/CE";
 answers[33] = choices[33][1];
 units[33] = "30";
 comments[33] = "Id Pregunta: 1869. NULL";


//  Id pregunta: 1887 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Qu&eacute; t&eacute;cnica de recuperaci&oacute;n se basan en la aplicaci&oacute;n del teorema de Bayes?";
 choices[34]= new Array();
 choices[34][0] = "l&oacute;gica borrosa";
 choices[34][1] = "modelos probabil&iacute;sticos";
 choices[34][2] = "modelos vectoriales";
 choices[34][3] = "lenguaje natural";
 answers[34] = choices[34][1];
 units[34] = "96";
 comments[34] = "Id Pregunta: 1887. NULL";


//  Id pregunta: 1891 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Datos repartidos en m&uacute;ltiples vol&uacute;menes con los &quot;bits de paridad&quot; en un &uacute;nico disco. Hablamos de:";
 choices[35]= new Array();
 choices[35][0] = "RAID 1";
 choices[35][1] = "RAID 3";
 choices[35][2] = "RAID 0+1";
 choices[35][3] = "RAID 5";
 answers[35] = choices[35][1];
 units[35] = "48";
 comments[35] = "Id Pregunta: 1891. ";


//  Id pregunta: 1922 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Considere un sistema operativo Windows con memoria virtual paginada. Indique qu&eacute; aseveraci&oacute;n es cierta";
 choices[36]= new Array();
 choices[36][0] = "El tama&ntilde;o de la tabla de p&aacute;ginas es directamente proporcional al tama&ntilde;o de la p&aacute;gina";
 choices[36][1] = "El sistema operativo no puede modificar las tablas de p&aacute;ginas de un proceso";
 choices[36][2] = "El tama&ntilde;o de la memoria virtual est&aacute; determinado, entre otros, por el tama&ntilde;o de la direcci&oacute;n del procesador";
 choices[36][3] = "Los fallos de p&aacute;gina son tratados por el hardware";
 answers[36] = choices[36][2];
 units[36] = "56";
 comments[36] = "Id Pregunta: 1922. ";


//  Id pregunta: 1928 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  En el &aacute;mbito de las tarjetas con chip integrado, &iquest;cu&aacute;l es el apartado de la norma ISO 7816 que recoge las especificaciones el&eacute;ctricas y los protocolos de comunicaci&oacute;n?";
 choices[37]= new Array();
 choices[37][0] = "ISO 7816-1";
 choices[37][1] = "ISO 7816-2";
 choices[37][2] = "ISO 7816-3";
 choices[37][3] = "ISO 7816-4";
 answers[37] = choices[37][2];
 units[37] = "74";
 comments[37] = "Id Pregunta: 1928. NULL";


//  Id pregunta: 1949 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre el paquete javax.microedition.lcdui de J2ME es cierta";
 choices[38]= new Array();
 choices[38][0] = "Es un subconjunto del paquete Swing de J2SE";
 choices[38][1] = "Define las aplicaciones MIDP y su comportamiento con respecto al entorno de ejecuci&oacute;n";
 choices[38][2] = "Proporciona clases asociadas a la gesti&oacute;n del ciclo de vida de las MIDLETS";
 choices[38][3] = "Proporciona clases para el desarrollo de elementos gr&aacute;ficos de la API MIDP para entornos m&oacute;viles";
 answers[38] = choices[38][3];
 units[38] = "60";
 comments[38] = "Id Pregunta: 1949. NULL";


//  Id pregunta: 4272 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Los comandos y distribuci&oacute;n de memoria de una tarjeta criptogr&aacute;fica se especifican en el est&aacute;ndar";
 choices[39]= new Array();
 choices[39][0] = "ISO 7816-2";
 choices[39][1] = "ISO 7816-3";
 choices[39][2] = "ISO 7816-4";
 choices[39][3] = "ISO 7816-5";
 answers[39] = choices[39][2];
 units[39] = "74";
 comments[39] = "Id Pregunta: 4272. NULL";


//  Id pregunta: 4283 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Se presentan a continuaci&oacute;n una lista de comandos UNIX, y una lista de funciones. 1) &ldquo;Is&rdquo;. 2) &ldquo;pwd&rdquo;. 3) &ldquo;cat&rdquo;. 4) &ldquo;more&rdquo;. I ) Lista los archivos del directorio activo. II) Muestra en pantalla el contenido de un archivo p&aacute;gina a p&aacute;gina. III) Muestra el camino completo del directorio actual. IV) Imprime en la salida est&aacute;ndar el contenido de un archivo. El orden correcto de emparejamiento entre comandos y funciones es:";
 choices[40]= new Array();
 choices[40][0] = "1-I, 2-II, 3-III y 4-IV.";
 choices[40][1] = "1-I, 2-III, 3-IV y 4-II.";
 choices[40][2] = "1-II, 2-III, 3-IV y 4-IV.";
 choices[40][3] = "1-III, 2-IV, 3-I y 4-II.";
 answers[40] = choices[40][1];
 units[40] = "54";
 comments[40] = "Id Pregunta: 4283. ";


//  Id pregunta: 4385 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  J2EE es:";
 choices[41]= new Array();
 choices[41][0] = "Un producto.";
 choices[41][1] = "Un servicio.";
 choices[41][2] = "Un estandar.";
 choices[41][3] = "Un entorno de desarrollo.";
 answers[41] = choices[41][2];
 units[41] = "60";
 comments[41] = "Id Pregunta: 4385. Es una especificaci&oacute;n que es est&aacute;ndar.";


//  Id pregunta: 4463 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Respecto a los servicios Web, podemos afirmar que:";
 choices[42]= new Array();
 choices[42][0] = "WDSL define los criterios para los registros basados en Ia red.";
 choices[42][1] = "XML busca Ia definici&oacute;n y descripci&oacute;n de los servicios Web";
 choices[42][2] = "SOAP proporciona una manera estandar de transportar mensajes para el use de servicios Web";
 choices[42][3] = "UUID define un protocolo de comunicaci&oacute;n f&iacute;sica entre ordenadores.";
 answers[42] = choices[42][2];
 units[42] = "51";
 comments[42] = "Id Pregunta: 4463. NULL";


//  Id pregunta: 4629 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un m&eacute;todo de almacenamiento OLAP.";
 choices[43]= new Array();
 choices[43][0] = "MOLAP.";
 choices[43][1] = "ROLAP.";
 choices[43][2] = "HOLAP.";
 choices[43][3] = "ZOLAP.";
 answers[43] = choices[43][3];
 units[43] = "68";
 comments[43] = "Id Pregunta: 4629. ";


//  Id pregunta: 4858 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[44]= new Array();
 choices[44][0] = "Mosix es un sistema basado en Linux que permite trabajar coordinadamente a m&uacute;ltiples ordenadorespertenecientes a una misma organizaci&oacute;n, u organizaciones distintas";
 choices[44][1] = "Un grid de Mosix puede dividirse en clusters virtuales. Un proceso ejecut&aacute;ndose en un cluster virtual nopuede ser transferido a otro cluster virtual";
 choices[44][2] = "El Entorno de Ejecuci&oacute;n Virtual de Mosix (MVE, Mosix Virtual Runtime Environment) garantiza que unproceso creado en un nodo del grid, pero que se est&aacute; ejecutando en otro, s&oacute;lo accede en &eacute;ste &uacute;ltimo a laCPU y la memoria";
 choices[44][3] = "En un grid Mosix cualquier proceso puede ser detenido en un punto de control y salvado a disco paraposteriormente reanudar su ejecuci&oacute;n desde dicho punto";
 answers[44] = choices[44][2];
 units[44] = "45";
 comments[44] = "Id Pregunta: 4858. ";


//  Id pregunta: 4908 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por &ldquo;proceso zombi&rdquo;?:";
 choices[45]= new Array();
 choices[45][0] = "Un proceso hijo que ha acabado de realizar sus tareas pero que el padre todav&iacute;a no ha ejecutado la orden de esperar a que el hijo acabe.";
 choices[45][1] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes.";
 choices[45][2] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo proceso";
 choices[45][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita.";
 answers[45] = choices[45][0];
 units[45] = "53,54";
 comments[45] = "Id Pregunta: 4908. Examen TIC B 2007";


//  Id pregunta: 5030 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Los sistemas de almacenes de bases de datos pueden implementarse utilizando diferentes tipos de esquemas f&iacute;sicos : ROLAP, MOLAP, HOLAP,etc. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[46]= new Array();
 choices[46][0] = "En ROLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales.";
 choices[46][1] = "Ejemplos de sistemas MOLAP son: Informix Metacube u Oracle Discover.";
 choices[46][2] = "Ejemplos de sistema ROLAP son: Oracle Express o el Hyperion Enterprise.";
 choices[46][3] = "En MOLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales, produci&eacute;ndose correspondencia entre el nivel l&oacute;gico y el nivel f&iacute;sico lo que en general aporta especializaci&oacute;n que se traduce generalmente en mayor eficiencia.";
 answers[46] = choices[46][3];
 units[46] = "68";
 comments[46] = "Id Pregunta: 5030. Examen TIC A 2007";


//  Id pregunta: 5051 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes elementos no es utilizado por Java 2?:";
 choices[47]= new Array();
 choices[47][0] = "Enteros";
 choices[47][1] = "Booleanos";
 choices[47][2] = "Cadenas";
 choices[47][3] = "Tensores";
 answers[47] = choices[47][3];
 units[47] = "60";
 comments[47] = "Id Pregunta: 5051. Examen TIC A 2007";


//  Id pregunta: 5094 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  El &quot;modelo de informaci&oacute;n&quot; del directorio LDAP:";
 choices[48]= new Array();
 choices[48][0] = "Describe c&oacute;mo puede protegerse la informaci&oacute;n contenida en el directorio LDAP frente a accesos no autorizados";
 choices[48][1] = "Describe qu&eacute; operaciones pueden ser realizadas sobre la informaci&oacute;n almacenada en el directorio LDAP";
 choices[48][2] = "Define la estructura de la inforrmaci&oacute;n almacenada en el directorio LDAP";
 choices[48][3] = "Describe c&oacute;mo se organizan y referencian los datos";
 answers[48] = choices[48][2];
 units[48] = "74";
 comments[48] = "Id Pregunta: 5094. NULL";


//  Id pregunta: 5502 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l es una de las diferencias entre ROLAP y MOLAP?";
 choices[49]= new Array();
 choices[49][0] = "El grado de interactividad.";
 choices[49][1] = "El preprocesado de los datos desde las bases de datos relacionales a la base de datos multidimensional.";
 choices[49][2] = "El soporte de sistemas para la toma de decisiones.";
 choices[49][3] = "La presentaci&oacute;n de vistas de los datos sobre un n&uacute;mero de dimensiones.";
 answers[49] = choices[49][1];
 units[49] = "68";
 comments[49] = "Id Pregunta: 5502. ";


//  Id pregunta: 5641 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Indique cu&aacute;l de los siguientes no se trata de un principio gu&iacute;a que defina reglas b&aacute;sicas para el desarrollo, mantenimiento y uso de arquitecturas SOA:";
 choices[50]= new Array();
 choices[50][0] = "Conceptualizaci&oacute;n";
 choices[50][1] = "Interoperabilidad";
 choices[50][2] = "Componentizaci&oacute;n";
 choices[50][3] = "Reutilizaci&oacute;n";
 answers[50] = choices[50][0];
 units[50] = "51";
 comments[50] = "Id Pregunta: 5641. NULL";


//  Id pregunta: 5702 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Cu&aacute;l de los siguientes no se encuentra entre los beneficios que puede obtener una organizaci&oacute;n que adopte SOA:";
 choices[51]= new Array();
 choices[51][0] = "Mejora en la interoperabilidad de servicios";
 choices[51][1] = "Facilidad para el desarrollo de aplicaciones fuertemente acopladas ";
 choices[51][2] = "Facilidad para abordar modelos de negocios basados en colaboraci&oacute;n con otros entes (socios, proveedores)";
 choices[51][3] = "Poder para reemplazar elementos de la capa de aplicaci&oacute;n sin disrupci&oacute;n en el proceso de negocio";
 answers[51] = choices[51][1];
 units[51] = "51";
 comments[51] = "Id Pregunta: 5702. NULL";


//  Id pregunta: 5751 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l es la longitud efectiva aproximada de clave del algoritmo Triple DES?";
 choices[52]= new Array();
 choices[52][0] = "112 (2x56) bits";
 choices[52][1] = "128 (2x64) bits";
 choices[52][2] = "168 (3x56) bits";
 choices[52][3] = "192 (3x64) bits";
 answers[52] = choices[52][0];
 units[52] = "72";
 comments[52] = "Id Pregunta: 5751. ";


//  Id pregunta: 5800 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  En base a la ley 59/2003, en que se diferencia la firma electr&oacute;nica reconocida de la firma electr&oacute;nica avanzada?";
 choices[53]= new Array();
 choices[53][0] = "En la clase de certificado electr&oacute;nico en que se basa.";
 choices[53][1] = "En el tipo de dispositivo criptogr&aacute;fico utilizado para la custodia de la clave privada.";
 choices[53][2] = "En la duracion maxima de su validez. La validez de la firma electr&oacute;nica reconocida nunca podra exceder de 4 a&ntilde;os.";
 choices[53][3] = "Las respuestas A y B son correctas.";
 answers[53] = choices[53][3];
 units[53] = "30";
 comments[53] = "Id Pregunta: 5800. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 5858 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Qu&eacute; comando crea enlaces simb&oacute;licos en UNIX?";
 choices[54]= new Array();
 choices[54][0] = "ln";
 choices[54][1] = "mkdir";
 choices[54][2] = "ls";
 choices[54][3] = "mv";
 answers[54] = choices[54][0];
 units[54] = "53";
 comments[54] = "Id Pregunta: 5858. Pregunta 38";


//  Id pregunta: 5905 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  Un Data Warehouse es:";
 choices[55]= new Array();
 choices[55][0] = "Una colecci&oacute;n de datos invariante en el tiempo y no vol&aacute;til.";
 choices[55][1] = "Una colecci&oacute;n de datos orientado a temas, integrados, fijos en el tiempo y no vol&aacute;tiles.";
 choices[55][2] = "Una colecci&oacute;n de datos cambiantes en el tiempo y vol&aacute;til.";
 choices[55][3] = "Una colecci&oacute;n de datos orientado a temas, integrados, cambiantes en el tiempo y no vol&aacute;tiles.";
 answers[55] = choices[55][3];
 units[55] = "68";
 comments[55] = "Id Pregunta: 5905. MAP 2008 A1";


//  Id pregunta: 6129 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  En la arquitectura Java, &iquest;qu&eacute; se entiende por JSR?";
 choices[56]= new Array();
 choices[56][0] = "Un applet.";
 choices[56][1] = "Es una especificaci&oacute;n en la que se describe una tecnolog&iacute;a, sus partes, las relaciones entre las mismas y los roles de las personas que usar&aacute;n dicha tecnolog&iacute;a.";
 choices[56][2] = "Es una especificaci&oacute;n que describe la manera en que la parte servidora atender&aacute; las peticiones hechas por un applet o un javascript. Es el acr&oacute;nimo de Java Server Request.";
 choices[56][3] = "Un JavaBean.";
 answers[56] = choices[56][1];
 units[56] = "60";
 comments[56] = "Id Pregunta: 6129. TIC A 2009";


//  Id pregunta: 6180 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  RMI, DCOM, CORBA y RPC se consideran:";
 choices[57]= new Array();
 choices[57][0] = "Precursores de los Servicios Web.";
 choices[57][1] = "Formas de comunicar aplicaciones distribuidas.";
 choices[57][2] = "Formas de comunicar aplicaciones heterog&eacute;neas.";
 choices[57][3] = "Todas las anteriores son respuestas correctas.";
 answers[57] = choices[57][3];
 units[57] = "69";
 comments[57] = "Id Pregunta: 6180. NULL";


//  Id pregunta: 6331 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Las consultas de data minig se realizan:";
 choices[58]= new Array();
 choices[58][0] = "Sobre las bases de datos de la organizaci&oacute;n.";
 choices[58][1] = "Sobre las bases de datos cuyos datos se han obtenido de las bases de datos operacionales de la organizaci&oacute;n.";
 choices[58][2] = "Sobre cualquier tipo de dato sin necesidad de un preproceso previo.";
 choices[58][3] = "No se realizan sobre bases de datos.";
 answers[58] = choices[58][1];
 units[58] = "68";
 comments[58] = "Id Pregunta: 6331. ";


//  Id pregunta: 6508 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En un entorno UNIX/Linux, los procesos no interactivos o de background se denominan:";
 choices[59]= new Array();
 choices[59][0] = "Zombies";
 choices[59][1] = "Swaps";
 choices[59][2] = "Pipes";
 choices[59][3] = "Daemons";
 answers[59] = choices[59][3];
 units[59] = "53";
 comments[59] = "Id Pregunta: 6508. NULL";


//  Id pregunta: 6511 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  El comando para cambiar el password de un usuario en UNIX es:";
 choices[60]= new Array();
 choices[60][0] = "passwd";
 choices[60][1] = "pass";
 choices[60][2] = "password";
 choices[60][3] = "chpass";
 answers[60] = choices[60][0];
 units[60] = "54";
 comments[60] = "Id Pregunta: 6511. ";


//  Id pregunta: 6522 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  En Java, se&ntilde;ale la afirmaci&oacute;n correcta con respecto a los Enterprise JavaBeans (EJB):";
 choices[61]= new Array();
 choices[61][0] = "Son componentes de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n.";
 choices[61][1] = "Existen dos tipos de Enterprise Beans: Session y entity.";
 choices[61][2] = "Est&aacute;n escritos en XML para permitir su interoperabilidad.";
 choices[61][3] = "En un contenedor EJBs solo puede residir un bean.";
 answers[61] = choices[61][0];
 units[61] = "116";
 comments[61] = "Id Pregunta: 6522. NULL";


//  Id pregunta: 6591 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Algunas de las ventajas a la hora de utilizar software general para la realizaci&oacute;n de las auditor&iacute;as son:";
 choices[62]= new Array();
 choices[62][0] = "Economicidad";
 choices[62][1] = "Coste inicial alto";
 choices[62][2] = "No se verifican procesos particulares sino gen&eacute;ricos";
 choices[62][3] = "Todas las respuestas anteriores son incorrectas";
 answers[62] = choices[62][0];
 units[62] = "75";
 comments[62] = "Id Pregunta: 6591. NULL";


//  Id pregunta: 7296 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Un proveedor de SW para miner&iacute;a de datos es:";
 choices[63]= new Array();
 choices[63][0] = "SAS.";
 choices[63][1] = "SPSS.";
 choices[63][2] = "A y B son correctas.";
 choices[63][3] = "A y B son incorrectas.";
 answers[63] = choices[63][2];
 units[63] = "68";
 comments[63] = "Id Pregunta: 7296. NULL";


//  Id pregunta: 8204 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Respecto del modelo jer&aacute;rquico de base de datos, se&ntilde;ale qu&eacute; afirmaci&oacute;n es FALSA:";
 choices[64]= new Array();
 choices[64][0] = "Utiliza punteros para su implementaci&oacute;n f&iacute;sica.";
 choices[64][1] = "Permite que un nodo de nivel superior pueda tener un n&uacute;mero ilimitado de nodos de nivel inferior.";
 choices[64][2] = "Permite describir relaciones sim&eacute;tricas.";
 choices[64][3] = "Permite actualizaciones en cascada.";
 answers[64] = choices[64][2];
 units[64] = "57";
 comments[64] = "Id Pregunta: 8204. Examen TIC A1 2010";


//  Id pregunta: 8362 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Entre las t&eacute;cnicas m&aacute;s com&uacute;nmente usadas en Datamining, &iquest;cu&aacute;l de las siguientes clasifica cada registro en un conjunto de datos basado en una combinaci&oacute;n de las clases de los k registros m&aacute;s similares a &eacute;l en un conjunto de datos hist&oacute;ricos (donde k &gt;=1)? ";
 choices[65]= new Array();
 choices[65][0] = "Redes neuronales artificiales.";
 choices[65][1] = "&Aacute;rboles de decisi&oacute;n.";
 choices[65][2] = "M&eacute;todo del vecino m&aacute;s cercano.";
 choices[65][3] = "Regla de Inducci&oacute;n.";
 answers[65] = choices[65][2];
 units[65] = "68";
 comments[65] = "Id Pregunta: 8362. Examen TIC A2 2010";


//  Id pregunta: 8415 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes NO es una de las llamadas doce reglas de Codd? ";
 choices[66]= new Array();
 choices[66][0] = "Independencia f&iacute;sica de los datos. ";
 choices[66][1] = "Independencia de distribuci&oacute;n. ";
 choices[66][2] = "Independencia de actualizaci&oacute;n. ";
 choices[66][3] = "Independencia de integridad. ";
 answers[66] = choices[66][2];
 units[66] = "58";
 comments[66] = "Id Pregunta: 8415. Examen TIC A2 2010";


//  Id pregunta: 8455 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En los GIS, el sistema UTM:";
 choices[67]= new Array();
 choices[67][0] = "Asocia cada elemento a una clave de zona.";
 choices[67][1] = "Proyecta el globo terr&aacute;queo sobre un cilindro.";
 choices[67][2] = "Es un est&aacute;ndar universal para intercambio de datos geogr&aacute;ficos.";
 choices[67][3] = "Ninguna de las anteriores.";
 answers[67] = choices[67][1];
 units[67] = "67";
 comments[67] = "Id Pregunta: 8455. Analista Ayto. Madrid 2010";


//  Id pregunta: 8611 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Si sobre el fichero &quot;ejemplo.txt&quot; queremos dar permisos totales al due&ntilde;o, de lectura y ejecuci&oacute;n al grupo y s&oacute;lo de lectura al resto de usuarios, usaremos la instrucci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "chmod 766 ejemplo.txt";
 choices[68][1] = "chmod 751 ejemplo.txt";
 choices[68][2] = "chmod 761 ejemplo.txt";
 choices[68][3] = "chmod 754 ejemplo.txt";
 answers[68] = choices[68][3];
 units[68] = "53,54";
 comments[68] = "Id Pregunta: 8611. Examen TIC A2 2010 interna";


//  Id pregunta: 9052 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  LA administraci&oacute;n ha licitado un contrato de servicios, cuyo valor de adjudicaci&oacute;n es de 300.000 euros. &iquest;D&oacute;nde hay que publicar el acuerdo?";
 choices[69]= new Array();
 choices[69][0] = "En el perfil del contratante y en el BOE.";
 choices[69][1] = "En el perfil del contratante en el BOE y en el DOUE";
 choices[69][2] = "En el BOE y en el DOUE";
 choices[69][3] = "En el perfil del contratante &uacute;nicamente.";
 answers[69] = choices[69][1];
 units[69] = "41";
 comments[69] = "Id Pregunta: 9052. ";


//  Id pregunta: 9143 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l es la respuesta incorrecta respecto a los interfaces de disco duro?";
 choices[70]= new Array();
 choices[70][0] = "SAS (Serial Attached SCSI) es una interfaz de transferencia de datos en serie, sucesora del SCSI paralelo.";
 choices[70][1] = "Proporciona una arquitectura punto a punto m&aacute;s simple y robusta que su antecesora paralela.";
 choices[70][2] = "Una de sus principales caracter&iacute;sticas es el aumento de la velocidad de transferencia al aumentar el n&uacute;mero de dispositivos conectados";
 choices[70][3] = "Todas son correctas.";
 answers[70] = choices[70][3];
 units[70] = "47";
 comments[70] = "Id Pregunta: 9143. ";


//  Id pregunta: 9153 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  No es un concepto relacionado con los sistemas de eLearning:";
 choices[71]= new Array();
 choices[71][0] = "VLE";
 choices[71][1] = "LSS";
 choices[71][2] = "LME";
 choices[71][3] = "ILS";
 answers[71] = choices[71][2];
 units[71] = "66";
 comments[71] = "Id Pregunta: 9153. ";


//  Id pregunta: 9167 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  De los siguientes sistemas, &iquest;cu&aacute;l no se refiere a un sistema de navegaci&oacute;n por sat&eacute;lite?";
 choices[72]= new Array();
 choices[72][0] = "Beidou";
 choices[72][1] = "COMPASS";
 choices[72][2] = "QZSS";
 choices[72][3] = "GNS";
 answers[72] = choices[72][3];
 units[72] = "67";
 comments[72] = "Id Pregunta: 9167. NULL";


//  Id pregunta: 9171 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Cu&aacute;l de los siguientes productos de UN/CEFACT es un est&aacute;ndar:";
 choices[73]= new Array();
 choices[73][0] = "UN/CCL (Core Components Library)";
 choices[73][1] = "ebXML CCTS (Core Components Technical Specification)";
 choices[73][2] = "XML Naming and Design Rules";
 choices[73][3] = "UNECE TDED ISO 7273";
 answers[73] = choices[73][0];
 units[73] = "70";
 comments[73] = "Id Pregunta: 9171. ";


//  Id pregunta: 9223 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  La replicaci&oacute;n continua de datos (o copia en tiempo real)";
 choices[74]= new Array();
 choices[74][0] = "Es un sistema mucho m&aacute;s ventajoso que la replicaci&oacute;n discreta porque permite recuperar la informaci&oacute;n existente en cualquier momento del tiempo de forma mucho m&aacute;s r&aacute;pida";
 choices[74][1] = "Es un sistema mucho menos ventajoso que la replicaci&oacute;n discreta o backups porque requiere mucha m&aacute;s capacidad de almacenamiento";
 choices[74][2] = "Puede ser s&iacute;ncrona o as&iacute;ncrona. En el segundo caso es equivalente a replicaci&oacute;n discreta.";
 choices[74][3] = "No sirve por s&iacute; misma para garantizar la integridad de la informaci&oacute;n frente a determinadas situaciones";
 answers[74] = choices[74][3];
 units[74] = "48";
 comments[74] = "Id Pregunta: 9223. Examen TIC-A1 2011";


//  Id pregunta: 9229 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &ldquo;Un sistema distribuido es una colecci&oacute;n de computadores independientes que aparece ante los usuarios del sistema como una &uacute;nica computadora&rdquo;, es una definici&oacute;n de:";
 choices[75]= new Array();
 choices[75][0] = "Tanenbaum";
 choices[75][1] = "Sloman &amp; Kramer.";
 choices[75][2] = "Shanon";
 choices[75][3] = "No se corresponde a la definici&oacute;n de un sistema distribuido.";
 answers[75] = choices[75][0];
 units[75] = "50";
 comments[75] = "Id Pregunta: 9229. ";


//  Id pregunta: 9636 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Qu&eacute; n&uacute;mero m&aacute;ximo de m&aacute;quinas virtuales por anfitri&oacute;n soporta el sistema Hyper-V de Windows 2012 Server?";
 choices[76]= new Array();
 choices[76][0] = "256";
 choices[76][1] = "512";
 choices[76][2] = "1024";
 choices[76][3] = "2048";
 answers[76] = choices[76][2];
 units[76] = "56";
 comments[76] = "Id Pregunta: 9636. ";


//  Id pregunta: 9668 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de la taxonom&iacute;a de Flynn se corresponden con una arquitectura monoprocesador?";
 choices[77]= new Array();
 choices[77][0] = "MISD y SISD";
 choices[77][1] = "SIMD y SISD";
 choices[77][2] = "MIMD y MISD";
 choices[77][3] = "SISD y MISD";
 answers[77] = choices[77][1];
 units[77] = "45";
 comments[77] = "Id Pregunta: 9668. ";


//  Id pregunta: 9669 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  La ley de Amdahl demuestra que:";
 choices[78]= new Array();
 choices[78][0] = "Cuantas m&aacute;s CPUs, m&aacute;s productividad.";
 choices[78][1] = "La productividad depende de la parte que sea paralelizable.";
 choices[78][2] = "Cuanto m&aacute;s c&oacute;digo, m&aacute;s CPUs hacen falta.";
 choices[78][3] = "El n&uacute;mero de procesadores es igual al n&uacute;mero de ALUs.";
 answers[78] = choices[78][1];
 units[78] = "45";
 comments[78] = "Id Pregunta: 9669. ";


//  Id pregunta: 9672 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En un cl&uacute;ster:";
 choices[79]= new Array();
 choices[79][0] = "Puede elegirse el porcentaje de procesamiento que cada nodo dedica al cl&uacute;ster.";
 choices[79][1] = "El algoritmo que distribuye el trabajo entre los nodos se conoce como 'Gang Scheduling'.";
 choices[79][2] = "El middleware m&aacute;s utilizado es Xware.";
 choices[79][3] = "Los nodos comparten una memoria central.";
 answers[79] = choices[79][1];
 units[79] = "45";
 comments[79] = "Id Pregunta: 9672. ";


//  Id pregunta: 9789 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  La norma ISO/IEC 27002 es un conjunto de controles de seguridad para sistemas de informaci&oacute;n gen&eacute;ricos. Esta norma est&aacute; relacionada con el Esquema Nacional de Seguridad (ENS). Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[80]= new Array();
 choices[80][0] = "Numerosas medidas de seguridad del ENS coinciden con controles de ISO/IEC 27002.";
 choices[80][1] = "El ENS es m&aacute;s preciso que la norma ISO/IEC 27002 y establece un sistema de protecci&oacute;n proporcionado a la informaci&oacute;n y servicios a proteger para racionalizar la implantaci&oacute;n de medidas de seguridad y reducir la discrecionalidad.";
 choices[80][2] = "La norma ISO/IEC 27002 carece de la proporcionalidad del ENS, quedando a la mejor opini&oacute;n del auditor que certifica la conformidad con ISO/IEC 27001. La certificaci&oacute;n de la conformidad con ISO/IEC 27001 no es obligatoria en el ENS.";
 choices[80][3] = "Tanto la norma ISO/IEC 27002 como el ENS contemplan diversos aspectos relativos a la firma o la autenticaci&oacute;n electr&oacute;nica. ";
 answers[80] = choices[80][3];
 units[80] = "75";
 comments[80] = "Id Pregunta: 9789. Examen TIC A2 2013";


//  Id pregunta: 9967 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Seg&uacute;n la Workflow Management Coalition (WfMC) &iquest;cu&aacute;l de las siguientes funciones NO es caracter&iacute;stica de un Workflow?";
 choices[81]= new Array();
 choices[81][0] = "Funciones de Control de Procesos en Tiempo de ejecuci&oacute;n (Run-time Process Control Functions).";
 choices[81][1] = "Interacciones de Actividad en Tiempo de ejecuci&oacute;n (Run-time Activity Interactions).";
 choices[81][2] = "Distribuci&oacute;n e Interfaces del Sistema (Distribution &amp; System Interfaces).";
 choices[81][3] = "Lanzamiento de Procesos Programados (Scheduled Release Process).";
 answers[81] = choices[81][3];
 units[81] = "71";
 comments[81] = "Id Pregunta: 9967. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9999 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En el &aacute;mbito de la teor&iacute;a de la decisi&oacute;n multicriterio discreta, &iquest;qu&eacute; m&eacute;todo deordenaci&oacute;n de alternativas se caracteriza por elegir en primer lugar la alternativa que tiene el mejor valor en el criterio de mayor peso?";
 choices[82]= new Array();
 choices[82][0] = "El m&eacute;todo PROMETHEE.";
 choices[82][1] = "El m&eacute;todo lexicogr&aacute;fico.";
 choices[82][2] = "El m&eacute;todo de la ponderaci&oacute;n lineal.";
 choices[82][3] = "El m&eacute;todo ELECTRE.";
 answers[82] = choices[82][1];
 units[82] = "34";
 comments[82] = "Id Pregunta: 9999. ";


//  Id pregunta: 10168 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En relaci&oacute;n con los operandos del &aacute;lgebra relacional, se cumple que:";
 choices[83]= new Array();
 choices[83][0] = "La Uni&oacute;n de las relaciones R y S puede aplicarse a&uacute;n cuando R y S no tengan igual grado y/o compatibilidad de dominios";
 choices[83][1] = "El Outer Join incluye en la relaci&oacute;n resultante las tuplas de una o ambas relaciones que en los atributos comunes no tienen valores iguales o correspondientes";
 choices[83][2] = "El grado de la relaci&oacute;n resultante de la Uni&oacute;n Natural o Natural Join entre dos relaciones R y S es igual al grado de R + el grado de S";
 choices[83][3] = "La intersecci&oacute;n es un operador fundamental del &aacute;lgebra relacional";
 answers[83] = choices[83][1];
 units[83] = "58";
 comments[83] = "Id Pregunta: 10168. ";


//  Id pregunta: 10173 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Los distintos niveles de aislamiento permiten evitar problemas de consistencia o p&eacute;rdida de datos derivados de la ejecuci&oacute;n concurrente de transacciones.";
 choices[84]= new Array();
 choices[84][0] = "Una Lectura No Repetible se produce cuando una transacci&oacute;n lee datos todav&iacute;a no confirmados, y que pueden ser finalmente revertidos por la transacci&oacute;n que hizo el cambio";
 choices[84][1] = "Evitar el problema de concurrencia denominado &quot;Lectura fantasma&quot; requiere aplicar como nivel de aislamiento SERIALIZABLE";
 choices[84][2] = "Con el nivel de aislamiento denominado &quot;READ COMMITTED&quot; pueden producirse problemas de Lectura sucia y Lectura Fantasma";
 choices[84][3] = "Todas las anteriores";
 answers[84] = choices[84][1];
 units[84] = "57";
 comments[84] = "Id Pregunta: 10173. ";


//  Id pregunta: 10309 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Una sentencia JCL comienza con:";
 choices[85]= new Array();
 choices[85][0] = "//";
 choices[85][1] = "*+";
 choices[85][2] = "#&gt;";
 choices[85][3] = "$&gt;";
 answers[85] = choices[85][0];
 units[85] = "55";
 comments[85] = "Id Pregunta: 10309. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10534 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En los discos duros magn&eacute;ticos, &iquest;que significa el tiempo de latencia media?";
 choices[86]= new Array();
 choices[86][0] = "Tiempo medio que tarda el cabezal en situarse en la pista deseada";
 choices[86][1] = "Tiempo medio que tarda el cabezal en situarse en la pista y sector deseados";
 choices[86][2] = "Tiempo medio que tarda el cabezal en situarse en el sector deseado, una vez posicionado en la pista";
 choices[86][3] = "Tiempo medio que tarda la controladora en procesar un requerimiento de datos";
 answers[86] = choices[86][2];
 units[86] = "48";
 comments[86] = "Id Pregunta: 10534. NULL";


//  Id pregunta: 10604 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  SET es:";
 choices[87]= new Array();
 choices[87][0] = "Una tecnolog&iacute;a definida por MasterCard con el fin de verificar la identidad de los titulares que efect&uacute;an compras por Internet.";
 choices[87][1] = "Un sistema de micropagos.";
 choices[87][2] = "Un protocolo est&aacute;ndar para el pago remoto con tarjetas de cr&eacute;dito.";
 choices[87][3] = "Un negocio de comercio electr&oacute;nico que permite realizar pagos o transferencias monetarias a trav&eacute;s de Internet.";
 answers[87] = choices[87][2];
 units[87] = "70";
 comments[87] = "Id Pregunta: 10604. ";


//  Id pregunta: 10804 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes conjuntos est&aacute; integrado en su totalidad por etiquetas que han sido incorporadas como novedad en el lenguaje HTML5?";
 choices[88]= new Array();
 choices[88][0] = "&lt;header&gt;, &lt;article&gt; y &lt;bdi&gt;";
 choices[88][1] = "&lt;head&gt;, &lt;foot&gt; y &lt;nav&gt;";
 choices[88][2] = "&lt;canvas&gt;, &lt;img&gt; y &lt;audio&gt;";
 choices[88][3] = "&lt;video&gt;, &lt;canvas&gt; y &lt;bdo&gt;";
 answers[88] = choices[88][0];
 units[88] = "69";
 comments[88] = "Id Pregunta: 10804. Examen GSI 2014";


//  Id pregunta: 10899 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes modos de funcionamiento NO se corresponde con el algoritmo de cifrado DES?";
 choices[89]= new Array();
 choices[89][0] = "Modo ECB (Electronic CodeBook).";
 choices[89][1] = "Modo CBC (Cipher Block Chaining).";
 choices[89][2] = "Modo OFB (Output FeedBack).";
 choices[89][3] = "Modo UBC (Uncipher Block Chaining).";
 answers[89] = choices[89][3];
 units[89] = "73, 74";
 comments[89] = "Id Pregunta: 10899. Examen GSI 2014";


//  Id pregunta: 10920 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Apache Hadoop es un framework de software que implementa un sistema de ficheros basado en:";
 choices[90]= new Array();
 choices[90][0] = "HP Data File System.";
 choices[90][1] = "Google File System.";
 choices[90][2] = "Network File System.";
 choices[90][3] = "High Density File System.";
 answers[90] = choices[90][1];
 units[90] = "68";
 comments[90] = "Id Pregunta: 10920. TIC A1 AGE 2014";


//  Id pregunta: 10922 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes servicios transforma un texto original en un hipertexto con v&iacute;nculos geogr&aacute;ficos?:";
 choices[91]= new Array();
 choices[91][0] = "Coberturas en Web (WCS).";
 choices[91][1] = "Nom&eacute;nclator (Gazetteer).";
 choices[91][2] = "Cat&aacute;logo (CSW).";
 choices[91][3] = "Geoparser.";
 answers[91] = choices[91][3];
 units[91] = "67";
 comments[91] = "Id Pregunta: 10922. TIC A1 AGE 2014";


//  Id pregunta: 10993 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En relaci&oacute;n con el Punto General de Entrada de Facturas Electr&oacute;nicas de la Administraci&oacute;n General del Estado (FACe), se&ntilde;ale la respuesta correcta:";
 choices[92]= new Array();
 choices[92][0] = "Las Comunidades Aut&oacute;nomas y las Entidades Locales deber&aacute;n utilizar FACe, en todos los casos.";
 choices[92][1] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas e interoperar con el FACe.";
 choices[92][2] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas, sin necesidad de interoperar con FACe.";
 choices[92][3] = "Las Comunidades Aut&oacute;nomas y Entidades Locales podr&aacute;n crear su propio punto general de entrada de facturas electr&oacute;nicas, previa justificaci&oacute;n de su no adhesi&oacute;n a FACe en t&eacute;rminos de eficiencia, y con anterioridad a la realizaci&oacute;n de cualquier inversi&oacute;n al respecto.";
 answers[92] = choices[92][3];
 units[92] = "70";
 comments[92] = "Id Pregunta: 10993. TIC A1 AGE 2014";


//  Id pregunta: 11029 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l es una plataforma pionera de software abierto que permite el desarrollo de clouds privados de infraestructuras como servicio (IaaS)?";
 choices[93]= new Array();
 choices[93][0] = "VMWARE";
 choices[93][1] = "EUCALYPTUS";
 choices[93][2] = "LYRIUS";
 choices[93][3] = "AMAPOLUS";
 answers[93] = choices[93][1];
 units[93] = "47";
 comments[93] = "Id Pregunta: 11029. ";


//  Id pregunta: 11219 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique de los siguientes cual no es un entorno de desarrollo Java.";
 choices[94]= new Array();
 choices[94][0] = "Eclipse.";
 choices[94][1] = "Zend Studio.";
 choices[94][2] = "BlueJ.";
 choices[94][3] = "NetBeans.";
 answers[94] = choices[94][1];
 units[94] = "60";
 comments[94] = "Id Pregunta: 11219. ";


//  Id pregunta: 11345 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  De los perfiles creados por WS-I indique cu&aacute;l no existe";
 choices[95]= new Array();
 choices[95][0] = "WS-I Basic security profile";
 choices[95][1] = "WS-I Reliable secure profile";
 choices[95][2] = "WS-I Extended Reliable profile";
 choices[95][3] = "WS-I Basic profile";
 answers[95] = choices[95][2];
 units[95] = "51";
 comments[95] = "Id Pregunta: 11345. ";


//  Id pregunta: 11531 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Entre las ventajas de los ensamblados en .NET, en relaci&oacute;n a las distintas versiones de una aplicaci&oacute;n, se puede citar:";
 choices[96]= new Array();
 choices[96][0] = "No existe ninguna ventaja con respecto a las versiones previas";
 choices[96][1] = "Se facilitan utilidades para poder instalar y desinstalar del registro los ensamblados.";
 choices[96][2] = "El CRL proporciona en tiempo de ejecuci&oacute;n, informaci&oacute;n sobre las incompatibilidades entre las distintas versiones de los ensamblados.";
 choices[96][3] = "Ninguna de las anteriores es cierta.";
 answers[96] = choices[96][3];
 units[96] = "59";
 comments[96] = "Id Pregunta: 11531. NULL";


//  Id pregunta: 11610 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  BPEL est&aacute; estandarizado por:";
 choices[97]= new Array();
 choices[97][0] = "BMPI";
 choices[97][1] = "OASIS";
 choices[97][2] = "WfMC";
 choices[97][3] = "W3C";
 answers[97] = choices[97][1];
 units[97] = "51";
 comments[97] = "Id Pregunta: 11610. ";


//  Id pregunta: 11620 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En los sistemas de representaci&oacute;n del conocimiento basados en marcos, el procedimiento de validaci&oacute;n que se ejecuta cuando se a&ntilde;ade un valor a un slot se denomina:";
 choices[98]= new Array();
 choices[98][0] = "If-added";
 choices[98][1] = "If-needed";
 choices[98][2] = "If-required";
 choices[98][3] = "Todos los anteriores son incorrectos";
 answers[98] = choices[98][2];
 units[98] = "64";
 comments[98] = "Id Pregunta: 11620. ";


//  Id pregunta: 11622 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Hive:";
 choices[99]= new Array();
 choices[99][0] = "Impone una jerarqu&iacute;a a los archivos en cl&uacute;ster y permite sincronizar el trabajo entre las distintas entidades.";
 choices[99][1] = "Permite administrar grandes conjuntos de datos que se encuentran en cl&uacute;ster utilizando un lenguaje similar a SQL";
 choices[99][2] = "Permite gestionar los flujos de trabajo y la sincronizaci&oacute;n al trabajar con datos en cl&uacute;ster.";
 choices[99][3] = "Ofrece una interfaz gr&aacute;fica que permite disponer, administrar y supervisar un conjunto de nodos de trabajo Hadoop.";
 answers[99] = choices[99][1];
 units[99] = "68";
 comments[99] = "Id Pregunta: 11622. ";


