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

//  Id pregunta: 679 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no se considera un riesgo de origen accidental?:";
 choices[0]= new Array();
 choices[0][0] = "Huelga del personal";
 choices[0][1] = "Errores en la utilizaci&oacute;n de los datos";
 choices[0][2] = "Aver&iacute;as en las instalaciones el&eacute;ctricas";
 choices[0][3] = "Interrupci&oacute;n de suministro de energ&iacute;a";
 answers[0] = choices[0][0];
 units[0] = "32,33";
 comments[0] = "Id Pregunta: 679. ";


//  Id pregunta: 680 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes operaciones se realiza a trav&eacute;s de servicios de transferencia electr&oacute;nica de fondos?:";
 choices[1]= new Array();
 choices[1][0] = "Autorizaci&oacute;n y control de transacciones con pago por tarjeta de cr&eacute;dito o d&eacute;bito";
 choices[1][1] = "Consultas de estado de cuenta";
 choices[1][2] = "Consulta o acceso a bancos de datos";
 choices[1][3] = "Todas las anteriores";
 answers[1] = choices[1][3];
 units[1] = "70";
 comments[1] = "Id Pregunta: 680. hay una errata en lugar de servidos ser&iacute;a servicios.";


//  Id pregunta: 748 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  En relaci&oacute;n con la huella digital y las funciones hash, se&ntilde;alar la opci&oacute;n falsa:";
 choices[2]= new Array();
 choices[2][0] = "Dos mensajes id&eacute;nticos, producen la misma huella";
 choices[2][1] = "Dada una huella es computacionalmente imposible encontrar un mensaje que produzca esa huella";
 choices[2][2] = "Si dos huellas son id&eacute;nticas, s&oacute;lo pueden haber sido originadas con el mismo mensaje";
 choices[2][3] = "Si dos huellas son id&eacute;nticas, pueden haber sido originadas por distintos mensajes con muy poca probabilidad";
 answers[2] = choices[2][2];
 units[2] = "72";
 comments[2] = "Id Pregunta: 748. Similar a examen TIC SS A 2003";


//  Id pregunta: 753 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Un ejemplo de herramienta Open Source de administraci&oacute;n remota de sistemas Unix/Linux es:";
 choices[3]= new Array();
 choices[3][0] = "WebMin";
 choices[3][1] = "WMI (Web Management &amp; Instrumentation)";
 choices[3][2] = "syslog";
 choices[3][3] = "Performance Monitor";
 answers[3] = choices[3][0];
 units[3] = "53,61,62";
 comments[3] = "Id Pregunta: 753. ";


//  Id pregunta: 830 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Comparando la criptograf&iacute;a de clave secreta frente a la criptograf&iacute;a asim&eacute;trica. &iquest;C&uacute;al de los dos tipos de criptograf&iacute;a es m&aacute;s segura, suponiendo igual longitud de clave?:";
 choices[4]= new Array();
 choices[4][0] = "La de clave secreta";
 choices[4][1] = "La asim&eacute;trica";
 choices[4][2] = "Son igual de seguras";
 choices[4][3] = "Depende del lenguaje de programaci&oacute;n empleado";
 answers[4] = choices[4][0];
 units[4] = "72";
 comments[4] = "Id Pregunta: 830. ";


//  Id pregunta: 834 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto a los procedimientos almacenados en los sistemas de gesti&oacute;n de bases de datos relacionales?:";
 choices[5]= new Array();
 choices[5][0] = "Es un conjunto de instrucciones y l&oacute;gica de procedimiento de SQL compilado, verificado y almacenado en base de datos";
 choices[5][1] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de preparaci&oacute;n del programa";
 choices[5][2] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de ejecuci&oacute;n del programa";
 choices[5][3] = "Los procedimientos almacenados no admiten par&aacute;metros de entrada";
 answers[5] = choices[5][0];
 units[5] = "57";
 comments[5] = "Id Pregunta: 834. ";


//  Id pregunta: 841 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones se ajusta m&aacute;s a la definici&oacute;n de MIPS?:";
 choices[6]= new Array();
 choices[6][0] = "Expresa la capacidad de ejecuci&oacute;n de instrucciones de una m&aacute;quina";
 choices[6][1] = "Expresa la velocidad de ejecuci&oacute;n en miles de intrucciones por segundo";
 choices[6][2] = "Expresa la potencia de c&aacute;lculo cient&iacute;fico de un computador";
 choices[6][3] = "Expresa la potencia de c&aacute;lculo de generaci&oacute;n de gr&aacute;ficos";
 answers[6] = choices[6][0];
 units[6] = "45";
 comments[6] = "Id Pregunta: 841. ";


//  Id pregunta: 845 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes alternativas indica los tres tipos de informaci&oacute;n manejados por un Sistema de Informaci&oacute;n Geogr&aacute;fica (SIG) en el caso m&aacute;s general?:";
 choices[7]= new Array();
 choices[7][0] = "Topol&oacute;gica, vectorial y r&aacute;ster.";
 choices[7][1] = "Posicional, temporal y tem&aacute;tica.";
 choices[7][2] = "Topol&oacute;gica, tem&aacute;tica y posicional.";
 choices[7][3] = "Posicional, r&aacute;ster y topol&oacute;gica.";
 answers[7] = choices[7][2];
 units[7] = "67";
 comments[7] = "Id Pregunta: 845. NULL";


//  Id pregunta: 939 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; se entiende por autoridad de certificaci&oacute;n?:";
 choices[8]= new Array();
 choices[8][0] = "Un juez";
 choices[8][1] = "Una compa&ntilde;&iacute;a que certifica la seguridad de sus sistemas En la actualidad s&oacute;lo puede considerarse a Microsoft como tal,";
 choices[8][2] = "Son &oacute;rganos administrativos dependientes del Consejo Superior de Inform&aacute;tica que dictan las normas de certificaci&oacute;n digital, de acuerdo a las Directivas de la Uni&oacute;n Europea";
 choices[8][3] = "Son entidades que expiden certificados digitales de manera que garantizan la correspondencia entre la identidad de un usuario y su par de claves";
 answers[8] = choices[8][3];
 units[8] = "74";
 comments[8] = "Id Pregunta: 939. NULL";


//  Id pregunta: 972 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Cuando se quiere simular una base de datos multidimensional con una base de datos relacional y hay jerarqu&iacute;as en las dimensiones, lo m&aacute;s adecuado es el:";
 choices[9]= new Array();
 choices[9][0] = "Esquema en estrella.";
 choices[9][1] = "Esquema en tornillo.";
 choices[9][2] = "Esquema de hechos.";
 choices[9][3] = "Esquema en copo de nieve.";
 answers[9] = choices[9][3];
 units[9] = "68";
 comments[9] = "Id Pregunta: 972. ";


//  Id pregunta: 987 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Dentro de los modos de direccionamiento se llama direccionamiento indirecto a:";
 choices[10]= new Array();
 choices[10][0] = "Cuando el objeto se halla direccionado en la propia instrucci&oacute;n";
 choices[10][1] = "Cuando el objeto direccionado es la direcci&oacute;n del objeto buscado";
 choices[10][2] = "Cuando el objeto est&aacute; en un direcci&oacute;n predeterminada";
 choices[10][3] = "Cuando se expresa un desplazamiento sobre una direcci&oacute;n base";
 answers[10] = choices[10][1];
 units[10] = "52";
 comments[10] = "Id Pregunta: 987. ";


//  Id pregunta: 1019 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El interfaz socket:";
 choices[11]= new Array();
 choices[11][0] = "S&oacute;lo es aplicable a TCP/IP";
 choices[11][1] = "S&oacute;lo es aplicable a UNIX";
 choices[11][2] = "Es el &uacute;nico modelo en Unix para acceder a TCP/IP";
 choices[11][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[11] = choices[11][3];
 units[11] = "100";
 comments[11] = "Id Pregunta: 1019. NULL";


//  Id pregunta: 1023 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El lenguaje COBOL:";
 choices[12]= new Array();
 choices[12][0] = "Es un lenguaje de programaci&oacute;n que no cuenta con ninguna variedad para el sistema operativo UNIX";
 choices[12][1] = "Es un lenguaje de programaci&oacute;n desarrollado por CODASYL a principios de los a&ntilde;os 60";
 choices[12][2] = "Es un lenguaje de programaci&oacute;n desarrollado por CODASYL a principios de los a&ntilde;os 70";
 choices[12][3] = "Es un lenguaje de programaci&oacute;n que dej&oacute; de utilizarse por incompatibilidad con el efecto 2000";
 answers[12] = choices[12][1];
 units[12] = "";
 comments[12] = "Id Pregunta: 1023. ";


//  Id pregunta: 1030 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Frecuencia de paginaci&oacute;n es:";
 choices[13]= new Array();
 choices[13][0] = "N&uacute;mero de peticiones de servicio por unidad de tiempo";
 choices[13][1] = "N&uacute;mero de programas sacados de memoria por unidad de tiempo";
 choices[13][2] = "N&uacute;mero de trabajos de un programa en un entorno de memoria virtual por unidad de tiempo";
 choices[13][3] = "N&uacute;mero de fallos de p&aacute;gina que se producen por unidad de tiempo";
 answers[13] = choices[13][3];
 units[13] = "52";
 comments[13] = "Id Pregunta: 1030. ";


//  Id pregunta: 1032 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El mecanismo de overlay,  utilizado para poder ejecutar programas de mayor tama&ntilde;o que la memoria principal se caracteriza por:";
 choices[14]= new Array();
 choices[14][0] = "Es un mecanismo que permite al programador no preocuparse por el tama&ntilde;o de los programas";
 choices[14][1] = "El programador debe partir los programas en trozos de tama&ntilde;os similares";
 choices[14][2] = "No es necesario que los programas contengan instrucciones que gestionen el proceso de cargar en memoria el c&oacute;digo que se va a ejecutar en un momento dado";
 choices[14][3] = "Sustituy&oacute; al proceso de paginaci&oacute;n a lo largo de los a&ntilde;os 60";
 answers[14] = choices[14][1];
 units[14] = "52";
 comments[14] = "Id Pregunta: 1032. ";


//  Id pregunta: 1063 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El transistor fue inventado en 1947 por:";
 choices[15]= new Array();
 choices[15][0] = "Shottky y Gunn.";
 choices[15][1] = "E. W. Intel.";
 choices[15][2] = "Bardeen, Brattain, Shockley.";
 choices[15][3] = "Ohm y Watt.";
 answers[15] = choices[15][2];
 units[15] = "";
 comments[15] = "Id Pregunta: 1063. ";


//  Id pregunta: 1082 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En el lenguaje de programaci&oacute;n BASIC:";
 choices[16]= new Array();
 choices[16][0] = "No se puede trabajar en modo int&eacute;rprete";
 choices[16][1] = "No es posible compilar un programa para su posterior ejecuci&oacute;n.";
 choices[16][2] = "S&oacute;lo se puede trabajar en modo int&eacute;rprete en la fase de pruebas.";
 choices[16][3] = "Puede trabajarse en modo int&eacute;rprete o ejecutarse el programa una vez compilado.";
 answers[16] = choices[16][3];
 units[16] = "";
 comments[16] = "Id Pregunta: 1082. ";


//  Id pregunta: 1120 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En los criptosistemas asim&eacute;tricos:";
 choices[17]= new Array();
 choices[17][0] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con la clave p&uacute;blica del emisor";
 choices[17][1] = "El emisor cifra con su clave p&uacute;blica y el receptor descifra con su clave privada";
 choices[17][2] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con su clave privada";
 choices[17][3] = "El emisor cifra con su clave privada y el receptor descifra con su clave p&uacute;blica";
 answers[17] = choices[17][2];
 units[17] = "72";
 comments[17] = "Id Pregunta: 1120. ";


//  Id pregunta: 1148 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En un sistema operativo, el 'dispatcher' se encarga de:";
 choices[18]= new Array();
 choices[18][0] = "Asignar un proceso a un procesador que ha quedado libre";
 choices[18][1] = "Optimizar el uso de la memoria RAM";
 choices[18][2] = "Gestionar las interrupciones de entrada/salida";
 choices[18][3] = "Asignar nuevas p&aacute;ginas de memoria al proceso que se est&eacute; ejecutando si las necesita";
 answers[18] = choices[18][0];
 units[18] = "52";
 comments[18] = "Id Pregunta: 1148. ";


//  Id pregunta: 1165 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Entre las caracter&iacute;sticas de JAVA que se describen a continuaci&oacute;n s&oacute;lo una es cierta. Se&ntilde;&aacute;lela:";
 choices[19]= new Array();
 choices[19][0] = "JAVA es similar a C++ pero m&aacute;s complejo que &eacute;ste";
 choices[19][1] = "La portabilidad de los programas JAVA no requiere recompilar.";
 choices[19][2] = "JAVA es del orden de 10 veces m&aacute;s r&aacute;pido que C++";
 choices[19][3] = "Todas las anteriores son ciertas";
 answers[19] = choices[19][1];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1165. JCED - Preparatic XVII";


//  Id pregunta: 1216 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La deducci&oacute;n por medio de los sistemas de Kleene en inteligencia artificial hace referencia a:";
 choices[20]= new Array();
 choices[20][0] = "La orientaci&oacute;n heur&iacute;stica";
 choices[20][1] = "La orientaci&oacute;n l&oacute;gica";
 choices[20][2] = "La representaci&oacute;n del conocimiento";
 choices[20][3] = "Las redes sem&aacute;nticas";
 answers[20] = choices[20][1];
 units[20] = "63";
 comments[20] = "Id Pregunta: 1216. ";


//  Id pregunta: 1343 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Se&ntilde;ale el enunciado falso:";
 choices[21]= new Array();
 choices[21][0] = "Los sistemas transaccionales deben bloquear los registros que vayan a modificar";
 choices[21][1] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado es cuando se actualizan las bases de datos y se suelen liberar los registros intervinientes";
 choices[21][2] = "Todos los aspectos de una transacci&oacute;n deben completarse o el sistema debe actuar como si ninguna se hubiera completado";
 choices[21][3] = "Los efectos de una transacci&oacute;n deben ser visibles por las dem&aacute;s transacciones antes que la transacci&oacute;n se complete";
 answers[21] = choices[21][3];
 units[21] = "58";
 comments[21] = "Id Pregunta: 1343. ";


//  Id pregunta: 1375 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Symbian es:";
 choices[22]= new Array();
 choices[22][0] = "Un procesador de AMD";
 choices[22][1] = "Unas especificaciones a modo de sistema operativo o soporte para el desarrollo de aplicaciones software sobre dispositivos m&oacute;viles";
 choices[22][2] = "Un est&aacute;ndar de facto para el cableado de edificios";
 choices[22][3] = "Un m&eacute;todo de procesamiento sim&eacute;trico en paralelo";
 answers[22] = choices[22][1];
 units[22] = "47";
 comments[22] = "Id Pregunta: 1375. ";


//  Id pregunta: 1450 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes no es una herramienta caracter&iacute;stica de un SGBDD?:";
 choices[23]= new Array();
 choices[23][0] = "Diccionario de palabras vac&iacute;as";
 choices[23][1] = "Diccionario de sin&oacute;nimos, acr&oacute;nimos, abreviaturas, etc.";
 choices[23][2] = "Tesauro";
 choices[23][3] = "Corrector sem&aacute;ntico y gramatical";
 answers[23] = choices[23][3];
 units[23] = "58";
 comments[23] = "Id Pregunta: 1450. NULL";


//  Id pregunta: 1465 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La consistencia de un interfaz de usuario:";
 choices[24]= new Array();
 choices[24][0] = "Contribuye a que &eacute;ste sea menos vers&aacute;til en su utilizaci&oacute;n";
 choices[24][1] = "Se refiere a la uniformidad en su utilizaci&oacute;n a lo largo de toda su exposici&oacute;n";
 choices[24][2] = "S&oacute;lo se puede garantizar si &eacute;ste es gr&aacute;fico";
 choices[24][3] = "Garantiza su facilidad de uso";
 answers[24] = choices[24][1];
 units[24] = "52";
 comments[24] = "Id Pregunta: 1465. ";


//  Id pregunta: 1502 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La utilidad &quot;ping&quot;:";
 choices[25]= new Array();
 choices[25][0] = "Se basa en los comandos &quot;echo request&quot; y &quot;echo reply&quot; del protocolo ICMP";
 choices[25][1] = "Se basa en el protocolo PING";
 choices[25][2] = "Se basa en el protocolo UDP";
 choices[25][3] = "Se basa en el protocolo TCP";
 answers[25] = choices[25][0];
 units[25] = "52,55";
 comments[25] = "Id Pregunta: 1502. ";


//  Id pregunta: 1520 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  C&oacute;mo objetos de una base de datos ORACLE, &iquest;cu&aacute;l es la diferencia principal entre una funci&oacute;n y un procedimiento?:";
 choices[26]= new Array();
 choices[26][0] = "Una funci&oacute;n no puede ejecutarse de forma nativa; un procedimiento si.";
 choices[26][1] = "Una funci&oacute;n puede invocar otra funci&oacute;n; un procedimiento no.";
 choices[26][2] = "Una funci&oacute;n est&aacute; almacenada en la base de datos; un procedimiento no.";
 choices[26][3] = "Una funci&oacute;n puede devolver un valor al programa que la invoca; un procedimiento no.";
 answers[26] = choices[26][3];
 units[26] = "58";
 comments[26] = "Id Pregunta: 1520. Junta Andaluc&iacute;a";


//  Id pregunta: 1523 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Con las memorias DDR-SDRAM podernos obtener una velocidad equivalente a la obtenida con:";
 choices[27]= new Array();
 choices[27][0] = "pc66.";
 choices[27][1] = "pc100.";
 choices[27][2] = "pc133.";
 choices[27][3] = "multiplo (x2) de pc66, pc100 o pc133.";
 answers[27] = choices[27][3];
 units[27] = "47";
 comments[27] = "Id Pregunta: 1523. Junta Andaluc&iacute;a";


//  Id pregunta: 1538 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest; Cu&aacute;l no es una aplicaci&oacute;n de LDAP ?";
 choices[28]= new Array();
 choices[28][0] = "Gesti&oacute;n de configuraci&oacute;n";
 choices[28][1] = "Seguridad";
 choices[28][2] = "Correo Electr&oacute;nico";
 choices[28][3] = "Transmisi&oacute;n de ficheros";
 answers[28] = choices[28][3];
 units[28] = "74";
 comments[28] = "Id Pregunta: 1538. NULL";


//  Id pregunta: 1545 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest; Qu&eacute; escritorio de software libre utiliza CORBA como mecanismo de IPC ?";
 choices[29]= new Array();
 choices[29][0] = "KDE";
 choices[29][1] = "GNOME";
 choices[29][2] = "ambos ";
 choices[29][3] = "Ninguno de los 2";
 answers[29] = choices[29][1];
 units[29] = "53,61";
 comments[29] = "Id Pregunta: 1545. ";


//  Id pregunta: 1557 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes operaciones l&oacute;gicas es incorrecta?:";
 choices[30]= new Array();
 choices[30][0] = "complementario de (A+B) = complementario (A) . complementario (B)";
 choices[30][1] = "complementario de (A.B) = complementario (A) + complementario (B)";
 choices[30][2] = "complementario de (A . A) = complementario (A)";
 choices[30][3] = "doble complementario (A) = A";
 answers[30] = choices[30][2];
 units[30] = "";
 comments[30] = "Id Pregunta: 1557. Junta Andaluc&iacute;a";


//  Id pregunta: 1627 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Si un programa se distribuye con licencia GPL, la empresa que lo modifica puede:";
 choices[31]= new Array();
 choices[31][0] = "No puede venderlo";
 choices[31][1] = "Integrarlo en otro SW y venderlo como propietario ";
 choices[31][2] = "Venderlo a otra empresa como software libre";
 choices[31][3] = "Venderlo a otra empresa como software propietario";
 answers[31] = choices[31][2];
 units[31] = "61";
 comments[31] = "Id Pregunta: 1627. ";


//  Id pregunta: 1650 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Respecto a tecnolog&iacute;as RAID:";
 choices[32]= new Array();
 choices[32][0] = "RAID 0 aumenta el rendimiento ";
 choices[32][1] = "RAID 1 utiliza c&oacute;digos hamming";
 choices[32][2] = "RAID 2 utiliza discos espejo";
 choices[32][3] = "RAID 5 utiliza discos espejo";
 answers[32] = choices[32][0];
 units[32] = "48";
 comments[32] = "Id Pregunta: 1650. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en algunas opciones";


//  Id pregunta: 1703 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Se&ntilde;ale la opci&oacute;n correcta respecto a los puertos IEEE 1394:";
 choices[33]= new Array();
 choices[33][0] = "Apple los denomina Firewire y Sony i.Link";
 choices[33][1] = "No son &uacute;tiles para transferencias de alta velocidad";
 choices[33][2] = "La velocidad, superior a puertos USB, es independiente de los dispositivos conectados";
 choices[33][3] = "La velocidad, inferior a puertos USB, se reparte entre los dispositivos conectados";
 answers[33] = choices[33][0];
 units[33] = "47";
 comments[33] = "Id Pregunta: 1703. ";


//  Id pregunta: 1707 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Se&ntilde;ale la opci&oacute;n correcta respecto a RAID, Redundant Array of Independent (or Inexpensive) Disks:";
 choices[34]= new Array();
 choices[34][0] = "RAID se puede implementar por software o hardware";
 choices[34][1] = "RAID se puede implementar s&oacute;lo por software";
 choices[34][2] = "RAID se puede implementar s&oacute;lo por hardware";
 choices[34][3] = "RAID no se puede implementar por software y hardware a la vez";
 answers[34] = choices[34][0];
 units[34] = "48";
 comments[34] = "Id Pregunta: 1707. ";


//  Id pregunta: 1798 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  En la t&eacute;cnica de representaci&oacute;n del conocimiento mediante marcos (frameworks), el m&eacute;todo de equiparaci&oacute;n de marcos mediante coincidencia con base de control se basa en:";
 choices[35]= new Array();
 choices[35][0] = "asociar una etiqueta a cada slot de los marcos de la base para forzar la coincidencia en algunos slots importantes";
 choices[35][1] = "uso de t&eacute;cnicas de razonamiento aproximado, como l&oacute;gica difusa, Mycin, Dempster-Shafer";
 choices[35][2] = "manejar una base de conocimiento local a cada marco que expresa mediante otro tipo de representaci&oacute;n la importancia que tiene cada slot en el proceso de equiparaci&oacute;n";
 choices[35][3] = "comprobar que los slots que est&aacute;n en el marco pregunta y del marco candidato tienen los mismos valores";
 answers[35] = choices[35][2];
 units[35] = "64";
 comments[35] = "Id Pregunta: 1798. ";


//  Id pregunta: 1808 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En un GIS, el modelo vectorial ";
 choices[36]= new Array();
 choices[36][0] = "Utiliza nodos, l&iacute;neas y pol&iacute;gonos para representar los datos geogr&aacute;ficos.";
 choices[36][1] = "Cada l&iacute;nea se define por todos los puntos intermedios, almacenando todos ellos.";
 choices[36][2] = "Utiliza m&aacute;s espacio de almacenamiento que el modelo r&aacute;ster.";
 choices[36][3] = "Es preferible al modelo r&aacute;ster para superposici&oacute;n de planos.";
 answers[36] = choices[36][0];
 units[36] = "67";
 comments[36] = "Id Pregunta: 1808. NULL";


//  Id pregunta: 1829 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Con cu&aacute;l de las siguientes categor&iacute;as de software est&aacute; m&aacute;s relacionado el Business Intelligence?";
 choices[37]= new Array();
 choices[37][0] = "ERP.";
 choices[37][1] = "Datawarehouse y OLAP.";
 choices[37][2] = "Document Management y Content Management.";
 choices[37][3] = "SCM.";
 answers[37] = choices[37][1];
 units[37] = "68";
 comments[37] = "Id Pregunta: 1829. ";


//  Id pregunta: 1844 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Indique la respuesta falsa en relaci&oacute;n a las ventajas aportadas por una herramienta de Workflow:";
 choices[38]= new Array();
 choices[38][0] = "Incremento de la productividad";
 choices[38][1] = "Monitorizaci&oacute;n del estado de cualquier proceso";
 choices[38][2] = "Reducci&oacute;n de los tiempos muertos";
 choices[38][3] = "Todas las anteriores son ciertas";
 answers[38] = choices[38][3];
 units[38] = "71";
 comments[38] = "Id Pregunta: 1844. ";


//  Id pregunta: 1845 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Indique la respuesta falsa en relaci&oacute;n al WfMC (Workflow Management Coalition):";
 choices[39]= new Array();
 choices[39][0] = "Organizaci&oacute;n destinada a establecer est&aacute;ndares relativos a la terminolog&iacute;a del software, su interoperabilidad y conectividad";
 choices[39][1] = "Organizaci&oacute;n creada por las principales empresas del sector para el facilitar la compatibilidad de sus herramientas";
 choices[39][2] = "Ha desarrollado el denominado Modelo de Referencia de Workflow";
 choices[39][3] = "Est&aacute; dividida en tres comit&eacute;s principales: el Comit&eacute; T&eacute;cnico, el Comit&eacute; de Relaciones Externas y el Comit&eacute; Directivo";
 answers[39] = choices[39][1];
 units[39] = "71";
 comments[39] = "Id Pregunta: 1845. ";


//  Id pregunta: 1861 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Se&ntilde;ale la correcta:";
 choices[40]= new Array();
 choices[40][0] = "El protocolo X500 es un est&aacute;ndar de la IETF";
 choices[40][1] = "El  est&aacute;ndar de certificados digitales X509v3 introdujo el concepto de extensi&oacute;n";
 choices[40][2] = "El protocolo de la ITU LDAP dispone su informaci&oacute;n relacionada jer&aacute;rquicamente.";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][1];
 units[40] = "73";
 comments[40] = "Id Pregunta: 1861. ";


//  Id pregunta: 1863 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes no es un sistema operativo utilizado en la arquitectura de un sistema de tarjeta inteligente?";
 choices[41]= new Array();
 choices[41][0] = "MultOS";
 choices[41][1] = "Jini";
 choices[41][2] = "Java Card";
 choices[41][3] = "SCfW";
 answers[41] = choices[41][1];
 units[41] = "74";
 comments[41] = "Id Pregunta: 1863. NULL";


//  Id pregunta: 1868 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;D&oacute;nde se recoge la posici&oacute;n de los contactos del chip enuna tarjetainteligente?";
 choices[42]= new Array();
 choices[42][0] = "ISO 7816-1";
 choices[42][1] = "ISO 7816-2";
 choices[42][2] = "ISO 7816-3";
 choices[42][3] = "ISO 7816-4";
 answers[42] = choices[42][1];
 units[42] = "74";
 comments[42] = "Id Pregunta: 1868. NULL";


//  Id pregunta: 1877 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  El &oacute;rgano encargado de la supervisi&oacute;n y control de los servicios de la Sociedad de la Informaci&oacute;n es:";
 choices[43]= new Array();
 choices[43][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[43][1] = "El Ministerio de Industria, Turismo y Comercio";
 choices[43][2] = "El Ministerio de Justicia";
 choices[43][3] = "No hay ning&uacute;n &oacute;rgano encargado de la supervisi&oacute;n y control dado que no se requiere autorizaci&oacute;n previa.";
 answers[43] = choices[43][1];
 units[43] = "30";
 comments[43] = "Id Pregunta: 1877. Ley 34/2002, art&iacute;culo 35 (extinto Ministerio de Ciencia y Tecnolog&iacute;a)";


//  Id pregunta: 1947 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  La t&eacute;cnica que se emplea para la modelizaci&oacute;n sem&aacute;ntica de datos a la hora de dise&ntilde;ar un sistema de informaci&oacute;n, se denomina:";
 choices[44]= new Array();
 choices[44][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[44][1] = "Diagrama de Flujo de Datos";
 choices[44][2] = "Diagrama de Contexto";
 choices[44][3] = "Modelo de Datos";
 answers[44] = choices[44][0];
 units[44] = "58";
 comments[44] = "Id Pregunta: 1947. ";


//  Id pregunta: 3889 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  En cuanto a los Servicios Web, no se puede decir que:";
 choices[45]= new Array();
 choices[45][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[45][1] = "Es independiente de la plataforma";
 choices[45][2] = "Es independiente del lenguaje de programaci&oacute;n y de la plataforma";
 choices[45][3] = "Sus est&aacute;ndares son m&aacute;s complejos que los usados en CORBA";
 answers[45] = choices[45][3];
 units[45] = "51";
 comments[45] = "Id Pregunta: 3889. Nuevo tema. Arquitectura SOA";


//  Id pregunta: 4357 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  fundamental de los lenguajes de codificaci&oacute;n de tercera generaci&oacute;n es que:";
 choices[46]= new Array();
 choices[46][0] = "Suelen ser herramientas para aplicaciones espec&iacute;ficas.";
 choices[46][1] = "Utilizan y aplican las metodolog&iacute;as de programaci&oacute;n estructurada.";
 choices[46][2] = "Son leguajes que permiten programar simb&oacute;licamente.";
 choices[46][3] = "Est&aacute;n pensados para la ense&ntilde;anza.";
 answers[46] = choices[46][1];
 units[46] = "";
 comments[46] = "Id Pregunta: 4357. ";


//  Id pregunta: 4468 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Los prestadores de servicios de certificaci&oacute;n con car&aacute;cter previo al cese definitivo de su actividad, &iquest;que gesti&oacute;n deber&aacute;n realizar con la informaci&oacute;n relativa a los certificados electr&oacute;nicos cuya vigencia haya sido extinguida?";
 choices[47]= new Array();
 choices[47][0] = "Remitirla al ministerio competente.";
 choices[47][1] = "Remitirla al prestador al que se propone la gesti&oacute;n de los certificados vigentes.";
 choices[47][2] = "Ninguna. La ley solo obliga la transferencia de la informaci&oacute;n relativa a los certificados vigentes.";
 choices[47][3] = "Debe conservarla en soporte perdurable durante al menos 30 anos.";
 answers[47] = choices[47][0];
 units[47] = "30";
 comments[47] = "Id Pregunta: 4468. Ley 59/2003, art&iacute;culo 21";


//  Id pregunta: 4570 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cuantos tipos de drivers existen en JDBC?:";
 choices[48]= new Array();
 choices[48][0] = "2";
 choices[48][1] = "3";
 choices[48][2] = "4";
 choices[48][3] = "tantos como SGBD's";
 answers[48] = choices[48][2];
 units[48] = "60";
 comments[48] = "Id Pregunta: 4570. NULL";


//  Id pregunta: 4624 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;En que lenguaje esta basado XML? ";
 choices[49]= new Array();
 choices[49][0] = "HTML";
 choices[49][1] = "XSL";
 choices[49][2] = "SGML";
 choices[49][3] = "XTML";
 answers[49] = choices[49][2];
 units[49] = "69";
 comments[49] = "Id Pregunta: 4624. ";


//  Id pregunta: 4747 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  En relaci&oacute;n a los modelos vectorial frente a r&aacute;ster en un SIG, se&ntilde;ale la opci&oacute;n verdadera.";
 choices[50]= new Array();
 choices[50][0] = "Las operaciones de c&aacute;lculo se simplifican al utilizar modelos vectoriales.";
 choices[50][1] = "No se deben mezclar datos raster con datos vectoriales entre capas o las prestaciones globales del SIG se ver&aacute;n comprometidas.";
 choices[50][2] = "La precisi&oacute;n gr&aacute;fica del modelo raster supera al modelo vectorial, al no tener que reescalar nada.";
 choices[50][3] = "La cartograf&iacute;a digital tradicional es fundamentalmente de tipo vectorial.";
 answers[50] = choices[50][3];
 units[50] = "67";
 comments[50] = "Id Pregunta: 4747. NULL";


//  Id pregunta: 4810 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es la Forma Normal (FN) m&aacute;s avanzada en la que se encuentra la relaci&oacute;n R( {A,B,C,D}, {A--&gt;B; B--&gt;C; C--&gt;D} ) ?";
 choices[51]= new Array();
 choices[51][0] = "Primera FN";
 choices[51][1] = "Segunda FN";
 choices[51][2] = "Tercera FN";
 choices[51][3] = "FNBC (Forma Normal de Boyce-Codd)";
 answers[51] = choices[51][1];
 units[51] = "57";
 comments[51] = "Id Pregunta: 4810. ";


//  Id pregunta: 4911 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de &ldquo;duplicaciones&rdquo; locales o departamentales basadas en subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con el t&eacute;rmino:";
 choices[52]= new Array();
 choices[52][0] = "Data Marts.";
 choices[52][1] = "Metadata.";
 choices[52][2] = "Middleware.";
 choices[52][3] = "Dataware.";
 answers[52] = choices[52][0];
 units[52] = "68";
 comments[52] = "Id Pregunta: 4911. Examen TIC B 2007";


//  Id pregunta: 5001 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Qu&eacute; es una aplicaci&oacute;n CRM en un sitio de e-commerce interactivo?:";
 choices[53]= new Array();
 choices[53][0] = "Es la aplicaci&oacute;n usada para administrar la relaci&oacute;n con los clientes, describir perfiles de compras y dise&ntilde;arcampa&ntilde;as de marketing directo on-line";
 choices[53][1] = "Es el Cargo Resource Management, o aplicaci&oacute;n utilizada para gestionar los recursos de carga en las ventas";
 choices[53][2] = "Es el programa que se ejecuta al recibir una petici&oacute;n de una p&aacute;gina web din&aacute;mica";
 choices[53][3] = "Es el Catalog Resource Management, o aplicaci&oacute;n que genera un catalogo on-line de los productosdisponibles para la venta";
 answers[53] = choices[53][0];
 units[53] = "70";
 comments[53] = "Id Pregunta: 5001. Examen TIC A 2007";


//  Id pregunta: 5020 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones define el tipo de procesamiento conocido como OLAP?";
 choices[54]= new Array();
 choices[54][0] = "Procesamiento transaccional en tiempo real que consiste en realizar transacciones, es decir actualizaciones y consultas a la base de datos con un objetivo operacional.";
 choices[54][1] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones, exclusivamente de consulta, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[54][2] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones de consulta y actualizaci&oacute;n, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[54][3] = "Procesamiento transaccional en tiempo real que engloba un conjunto de operaciones, de consulta y actualizaci&oacute;n, con el objetivo de realizar informes y res&uacute;menes para el apoyo en la toma de decisiones.";
 answers[54] = choices[54][1];
 units[54] = "68";
 comments[54] = "Id Pregunta: 5020. Examen TIC A 2007";


//  Id pregunta: 5125 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos hace referencia a un est&aacute;ndar de modelo de agregaci&oacute;n de contenidos Web para eLearning?";
 choices[55]= new Array();
 choices[55][0] = "CORBA";
 choices[55][1] = "OWR";
 choices[55][2] = "SCORM";
 choices[55][3] = "IQC";
 answers[55] = choices[55][2];
 units[55] = "66";
 comments[55] = "Id Pregunta: 5125. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5507 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Qu&eacute; formato se emplea para la emision de facturas electr&oacute;nicas por parte de la AGE?";
 choices[56]= new Array();
 choices[56][0] = "XBRL";
 choices[56][1] = "ebXML";
 choices[56][2] = "UBL";
 choices[56][3] = "Facturae";
 answers[56] = choices[56][3];
 units[56] = "70";
 comments[56] = "Id Pregunta: 5507. NULL";


//  Id pregunta: 5619 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  En UNIX, un archivo se compone de:";
 choices[57]= new Array();
 choices[57][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos";
 choices[57][1] = "Una secuencia de bytes";
 choices[57][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos";
 choices[57][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento";
 answers[57] = choices[57][1];
 units[57] = "53";
 comments[57] = "Id Pregunta: 5619. ";


//  Id pregunta: 5698 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Respecto a la validez de los certificados del DNI electr&oacute;nico, se&ntilde;ale la falsa:";
 choices[58]= new Array();
 choices[58][0] = "La p&eacute;rdida de validez del DNI implica su p&eacute;rdida de validez";
 choices[58][1] = " La renovaci&oacute;n implica la expedici&oacute;n de nuevos certificados";
 choices[58][2] = "La expedici&oacute;n de duplicados implica la expedici&oacute;n de nuevos certificados";
 choices[58][3] = "La caducidad de los certificados implica la renovaci&oacute;n del DNI";
 answers[58] = choices[58][3];
 units[58] = "74";
 comments[58] = "Id Pregunta: 5698. NULL";


//  Id pregunta: 5705 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; asociado a los servicios web?";
 choices[59]= new Array();
 choices[59][0] = "SOAP";
 choices[59][1] = " UDDI";
 choices[59][2] = "CORBA";
 choices[59][3] = "HTTP";
 answers[59] = choices[59][2];
 units[59] = "51";
 comments[59] = "Id Pregunta: 5705. NULL";


//  Id pregunta: 5737 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  &iquest;Qu&eacute; caracter&iacute;sticas debe reunir, entre otras, la firma electr&oacute;nica avanzada?";
 choices[60]= new Array();
 choices[60][0] = "Usar un certificado X.509";
 choices[60][1] = "Usar medios de criptograf&iacute;a asim&eacute;trica";
 choices[60][2] = "Que el firmante tenga bajo su exclusivo control los medios de creaci&oacute;n de firma";
 choices[60][3] = "Que el canal de comunicaci&oacute;n por el que se transfiere la firma sea seguro";
 answers[60] = choices[60][2];
 units[60] = "72";
 comments[60] = "Id Pregunta: 5737. ";


//  Id pregunta: 5891 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  &iquest;Qu&eacute; tecnolog&iacute;a Java permite la invocaci&oacute;n de m&eacute;todos de un objeto remoto?";
 choices[61]= new Array();
 choices[61][0] = "RMI";
 choices[61][1] = "JNI";
 choices[61][2] = "JDBC";
 choices[61][3] = "JRM";
 answers[61] = choices[61][0];
 units[61] = "60";
 comments[61] = "Id Pregunta: 5891. NULL";


//  Id pregunta: 5894 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes no corresponde a una tecnolog&iacute;a est&aacute;ndar Java?";
 choices[62]= new Array();
 choices[62][0] = "JSTL";
 choices[62][1] = "JavaScript";
 choices[62][2] = "JNDI";
 choices[62][3] = "JavaCard";
 answers[62] = choices[62][1];
 units[62] = "60";
 comments[62] = "Id Pregunta: 5894. NULL";


//  Id pregunta: 5926 AÃ±o de creación de pregunta: 2009-01-01
 questions[63]= "64)  Para aumentar las posibilidades de interacci&oacute;n con la Web, se promueven tecnolog&iacute;as como JavaScript, applets, ActiveX,..., de entre las afirmaciones siguientes, &iquest;cu&aacute;l se refiere a los &quot;applets de Java&quot;?:";
 choices[63]= new Array();
 choices[63][0] = "Son programas residentes en el servidor, que se ejecutan en el mismo bajo solicitud de un cliente, para recoger o enviar alg&uacute;n tipo de informaci&oacute;n especial del cliente";
 choices[63][1] = "Son programas que se ejecutan bajo el entorno Java del navegador, en un espacio de memoria aparte, llamado &quot;Sandbox&quot;";
 choices[63][2] = "Son trozos de c&oacute;digo que se a&ntilde;aden a los browsers para obtener nuevos servicios y cuya fiabilidad queda garantizada por la obligatoriedad del uso de la tecnologia &quot;authenticode&quot;";
 choices[63][3] = "La forma de controlar la fiabilidad y seguridad de esta tecnolog&iacute;a consiste &uacute;nicamente en el sistema de verificaci&oacute;n digital y de firmas electr&oacute;nicas";
 answers[63] = choices[63][1];
 units[63] = "60";
 comments[63] = "Id Pregunta: 5926. MAP 2008 A1";


//  Id pregunta: 6097 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El sistema operativo MSDOS es:";
 choices[64]= new Array();
 choices[64][0] = "Multiprocesador asim&eacute;trico.";
 choices[64][1] = "Multiprocesador sim&eacute;trico.";
 choices[64][2] = "Multiusuario.";
 choices[64][3] = "Monoprocesador.";
 answers[64] = choices[64][3];
 units[64] = "52";
 comments[64] = "Id Pregunta: 6097. TIC A 2009";


//  Id pregunta: 6491 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Respecto a los servicios de directorio se puede afirmar que:";
 choices[65]= new Array();
 choices[65][0] = "LDAP define el modelo completo de servicio de directorio";
 choices[65][1] = "X.500 es un protocolo de acceso a un servicio de directorio LDAP";
 choices[65][2] = "LDAP es un protocolo de acceso a servicios de directorio X.500";
 choices[65][3] = "Ninguna de las anteriores es correcta";
 answers[65] = choices[65][2];
 units[65] = "74";
 comments[65] = "Id Pregunta: 6491. Castilla La Mancha 2009";


//  Id pregunta: 6520 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  La versi&oacute;n 2.0 de JavaServer Faces (JSF) est&aacute; definida en la especificaci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "JSR 186";
 choices[66][1] = "JSR 168";
 choices[66][2] = "JSR 175";
 choices[66][3] = "JSR 314";
 answers[66] = choices[66][3];
 units[66] = "116";
 comments[66] = "Id Pregunta: 6520. NULL";


//  Id pregunta: 6594 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  En el trabajo de auditor:";
 choices[67]= new Array();
 choices[67][0] = "Se distinguen de forma general tres etapas";
 choices[67][1] = "Una de las etapas se denomina proceso, donde se realiza el an&aacute;lisis cuantitativo y cualitativo de la informaci&oacute;n recabada.";
 choices[67][2] = "A y B son correctas";
 choices[67][3] = "A y B son incorrectas";
 answers[67] = choices[67][2];
 units[67] = "75";
 comments[67] = "Id Pregunta: 6594. NULL";


//  Id pregunta: 7154 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Si 100 personas reciben un correo electr&oacute;nico, destinado a toda la empresa, con un archivo adjunto de 1 MB, y cada destinatario decide guardar el archivo adjunto localmente, a la hora de hacer backup de esos escritorios se precisar&aacute;n 100 MB de espacio de copias de seguridad. &iquest;C&oacute;mo se denomina la tecnolog&iacute;a que permite reducir este espacio a un uno por ciento del espacio original necesario?";
 choices[68]= new Array();
 choices[68][0] = "Compresion LZ";
 choices[68][1] = "Filtrado de Kalman";
 choices[68][2] = "Renderizaci&oacute;n especulativa";
 choices[68][3] = "Deduplicaci&oacute;n";
 answers[68] = choices[68][3];
 units[68] = "48";
 comments[68] = "Id Pregunta: 7154. Examen TIC B 2009";


//  Id pregunta: 7323 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes no es un est&aacute;ndar utilizado para el intercambio de datos relativos al comercio electr&oacute;nico?";
 choices[69]= new Array();
 choices[69][0] = "EDIFACT";
 choices[69][1] = "ebXML";
 choices[69][2] = "XMT ";
 choices[69][3] = "UBL";
 answers[69] = choices[69][2];
 units[69] = "70";
 comments[69] = "Id Pregunta: 7323. NULL";


//  Id pregunta: 8352 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes partes del SOAP sirve para expresar instancias de tipos de datos definidos por la aplicaci&oacute;n?";
 choices[70]= new Array();
 choices[70][0] = "SOAP envelope.";
 choices[70][1] = "SOAP binding framework";
 choices[70][2] = "SOAP encoding rules.";
 choices[70][3] = "SOAP  RPC representation.";
 answers[70] = choices[70][2];
 units[70] = "51";
 comments[70] = "Id Pregunta: 8352. Examen TIC A2 2010";


//  Id pregunta: 8420 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; tipo de conector de alta velocidad (anteriormente conocido por su nombre clave Light Peak) hace uso de la tecnolog&iacute;a &oacute;ptica llegando a ofrecer anchos de banda de hasta 10 Gbps?";
 choices[71]= new Array();
 choices[71][0] = "FireWire";
 choices[71][1] = "Thunderbolt";
 choices[71][2] = "USB";
 choices[71][3] = "HDMI";
 answers[71] = choices[71][1];
 units[71] = "47";
 comments[71] = "Id Pregunta: 8420. ";


//  Id pregunta: 8612 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Para la gesti&oacute;n del sistema operativo queremos	llevar un inventar&iacute;o. &iquest;Cu&aacute;l de los siguientes recursos NO es necesario en el mismo?";
 choices[72]= new Array();
 choices[72][0] = "Listado de todos los equipos";
 choices[72][1] = "Listado de software usado en cada equipo.";
 choices[72][2] = "Esquema de la red.";
 choices[72][3] = "Todos son necesarios.";
 answers[72] = choices[72][3];
 units[72] = "52";
 comments[72] = "Id Pregunta: 8612. Examen TIC A2 2010 interna";


//  Id pregunta: 8643 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes estructuras de datos requiere m&aacute;s capacidad de almacenamiento de informaci&oacute;n?";
 choices[73]= new Array();
 choices[73][0] = "&Aacute;rbol Binario";
 choices[73][1] = "Lista.";
 choices[73][2] = "Lista enlazada.";
 choices[73][3] = "&Aacute;rbol-B";
 answers[73] = choices[73][3];
 units[73] = "57";
 comments[73] = "Id Pregunta: 8643. Examen TIC A2 2010 interna";


//  Id pregunta: 8673 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  El protocolo OCSP, se utiliza en:";
 choices[74]= new Array();
 choices[74][0] = "la validaci&oacute;n en tiempo real del certificado digital";
 choices[74][1] = "comprobaci&oacute;n de la validez de una trama";
 choices[74][2] = "la comunicaci&oacute;n entre sistemas abiertos";
 choices[74][3] = "la validaci&oacute;n de la direcci&oacute;n de origen de un equipo";
 answers[74] = choices[74][0];
 units[74] = "74";
 comments[74] = "Id Pregunta: 8673. Examen UPM A2 2011";


//  Id pregunta: 8785 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  OLAP proporciona mayor velocidad de procesamiento en la sentencia SQL";
 choices[75]= new Array();
 choices[75][0] = "INSERT";
 choices[75][1] = "UPDATE";
 choices[75][2] = "DELETE";
 choices[75][3] = "SELECT";
 answers[75] = choices[75][3];
 units[75] = "57, 58";
 comments[75] = "Id Pregunta: 8785. Examen UPM A2 2011";


//  Id pregunta: 8808 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  El est&aacute;ndar de e-learning participado por el IEEE, que incluye un modelo de referencia para objetos software educativos compartibles, un entorno de ejecuci&oacute;n y un modelo de agregaci&oacute;n de contenido es:";
 choices[76]= new Array();
 choices[76][0] = "AEIC.";
 choices[76][1] = "LOM.";
 choices[76][2] = "LCMS.";
 choices[76][3] = "SCORM.";
 answers[76] = choices[76][3];
 units[76] = "66";
 comments[76] = "Id Pregunta: 8808. Examen UPM A2 2011";


//  Id pregunta: 8880 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Un driver JDBC de tipo 4 es aquel que cumple:";
 choices[77]= new Array();
 choices[77][0] = "Es un driver escrito en java que habla con un middleware en el lado del servidor.";
 choices[77][1] = "Es un driver escrito en java que emplea el protocolo nativo de la base de datos.";
 choices[77][2] = "Es un driver que habla con la librer&iacute;a nativa de base de datos en el cliente y esta comunica por red con la base de datos.";
 choices[77][3] = "JDBC solamente tiene drivers de hasta tipo 3 inclusive.";
 answers[77] = choices[77][1];
 units[77] = "57, 58";
 comments[77] = "Id Pregunta: 8880. Examen UPM A2 2011";


//  Id pregunta: 8884 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de los siguientes no es un &iacute;ndice para medir la potencia de un microprocesador?";
 choices[78]= new Array();
 choices[78][0] = "SPEC";
 choices[78][1] = "SPEint";
 choices[78][2] = "SPECfp";
 choices[78][3] = "SPEC#";
 answers[78] = choices[78][3];
 units[78] = "47";
 comments[78] = "Id Pregunta: 8884. ";


//  Id pregunta: 8980 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es la arquitectura del kernel empleado en Windows 7?";
 choices[79]= new Array();
 choices[79][0] = "Monol&iacute;tico";
 choices[79][1] = "Microkernel";
 choices[79][2] = "Nanokernel";
 choices[79][3] = "Hibrida";
 answers[79] = choices[79][3];
 units[79] = "52";
 comments[79] = "Id Pregunta: 8980. ";


//  Id pregunta: 9043 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  Cu&aacute;l no es una implementaci&oacute;n de Linux";
 choices[80]= new Array();
 choices[80][0] = "Debian";
 choices[80][1] = "Ubuntu";
 choices[80][2] = "Red Hat";
 choices[80][3] = "Mono";
 answers[80] = choices[80][3];
 units[80] = "53";
 comments[80] = "Id Pregunta: 9043. ";


//  Id pregunta: 9145 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Cu&aacute;ntos cent&iacute;meros tiene el Blu-ray?";
 choices[81]= new Array();
 choices[81][0] = "12";
 choices[81][1] = "13";
 choices[81][2] = "11";
 choices[81][3] = "15";
 answers[81] = choices[81][0];
 units[81] = "47";
 comments[81] = "Id Pregunta: 9145. ";


//  Id pregunta: 9172 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  La norma que regula las obligaciones de facturaci&oacute;n es:";
 choices[82]= new Array();
 choices[82][0] = "Orden PRE/2971/2007";
 choices[82][1] = "Real Decreto 1496/2003";
 choices[82][2] = "Real Decreto 1619/2012";
 choices[82][3] = "Real Decreto 1783/2012";
 answers[82] = choices[82][2];
 units[82] = "70";
 comments[82] = "Id Pregunta: 9172. ";


//  Id pregunta: 9210 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;C&oacute;mo son las conexiones FC?";
 choices[83]= new Array();
 choices[83][0] = "Punto a punto";
 choices[83][1] = "Bucle arbitrado";
 choices[83][2] = "Red Conmutada";
 choices[83][3] = "Todas son v&aacute;lidas";
 answers[83] = choices[83][3];
 units[83] = "48";
 comments[83] = "Id Pregunta: 9210. ";


//  Id pregunta: 9224 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;En qu&eacute; se parece CICS e IMS?";
 choices[84]= new Array();
 choices[84][0] = "Ambos son sistemas transaccionales";
 choices[84][1] = "No tienen nada que ver";
 choices[84][2] = "Son protocolos de acceso a ficheros";
 choices[84][3] = "Son correctas A) y C)";
 answers[84] = choices[84][0];
 units[84] = "49";
 comments[84] = "Id Pregunta: 9224. ";


//  Id pregunta: 9276 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores.";
 choices[85]= new Array();
 choices[85][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga.";
 choices[85][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[85][2] = "El balanceo de carga solo puede implementarse por software.";
 choices[85][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos.";
 answers[85] = choices[85][2];
 units[85] = "49";
 comments[85] = "Id Pregunta: 9276. Examen TIC-A1 2011";


//  Id pregunta: 9626 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes?";
 choices[86]= new Array();
 choices[86][0] = "Kexi.";
 choices[86][1] = "Kivio.";
 choices[86][2] = "Konqueror.";
 choices[86][3] = "Kugar.";
 answers[86] = choices[86][3];
 units[86] = "62";
 comments[86] = "Id Pregunta: 9626. Examen TIC A1 2013";


//  Id pregunta: 9670 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  La gesti&oacute;n NUMA:";
 choices[87]= new Array();
 choices[87][0] = "Significa Not Uniform Memory Access.";
 choices[87][1] = "Significa Not Unit of Memory Available.";
 choices[87][2] = "Implica que se introducen criterios de preferencia en el acceso a memoria compartida.";
 choices[87][3] = "La a) y la c)";
 answers[87] = choices[87][3];
 units[87] = "45";
 comments[87] = "Id Pregunta: 9670. ";


//  Id pregunta: 10163 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En el modelo l&oacute;gico relacional, la cardinalidad de una relaci&oacute;n se corresponde con:";
 choices[88]= new Array();
 choices[88][0] = "N&uacute;mero de atributos de la relaci&oacute;n";
 choices[88][1] = "N&uacute;mero m&iacute;nimo de ocurrencias de una entidad que pueden participar en la relaci&oacute;n";
 choices[88][2] = "N&uacute;mero de entidades que participan en la relaci&oacute;n o asociaci&oacute;n";
 choices[88][3] = "N&uacute;mero de tuplas de la relaci&oacute;n";
 answers[88] = choices[88][3];
 units[88] = "58";
 comments[88] = "Id Pregunta: 10163. ";


//  Id pregunta: 10167 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;A qu&eacute; t&eacute;rmino corresponde la siguiente definici&oacute;n: &quot;Dada una relaci&oacute;n, un atributo o grupo de atributos B depende funcionalmente de A, pero no de ning&uacute;n subconjunto de atributos de A&quot;?";
 choices[89]= new Array();
 choices[89][0] = "Dependencia funcional";
 choices[89][1] = "Dependencia multivaluada";
 choices[89][2] = "Dependencia funcional trivial";
 choices[89][3] = "Dependencia funcional completa";
 answers[89] = choices[89][3];
 units[89] = "58";
 comments[89] = "Id Pregunta: 10167. ";


//  Id pregunta: 10306 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de estas instrucciones NO vac&iacute;a el contenido del fichero con nombre 2013 en Linux?";
 choices[90]= new Array();
 choices[90][0] = "true &gt; 2013";
 choices[90][1] = "&gt; 2013";
 choices[90][2] = "cat /dev/null &gt; 2013";
 choices[90][3] = "| &gt; 2013";
 answers[90] = choices[90][3];
 units[90] = "53";
 comments[90] = "Id Pregunta: 10306. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10457 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[91]= new Array();
 choices[91][0] = "&lt;canvas&gt;";
 choices[91][1] = "&lt;applet&gt;";
 choices[91][2] = "&lt;keygen&gt;";
 choices[91][3] = "&lt;audio&gt;";
 answers[91] = choices[91][1];
 units[91] = "69";
 comments[91] = "Id Pregunta: 10457. NULL";


//  Id pregunta: 10611 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En una arquitectura PKI, la Autoridad de Validaci&oacute;n:";
 choices[92]= new Array();
 choices[92][0] = "Verifica la identidad del titular antes de la expedici&oacute;n del certificado.";
 choices[92][1] = "Comprueba si un certificado ha sido revocado mediante servicios de directorio, CRL y OCSP.";
 choices[92][2] = "Expide, gestiona y revoca certificados digitales.";
 choices[92][3] = "Procesa solicitudes de revocaci&oacute;n de certificados.";
 answers[92] = choices[92][1];
 units[92] = "74";
 comments[92] = "Id Pregunta: 10611. ";


//  Id pregunta: 10614 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Elija la opci&oacute;n correcta:";
 choices[93]= new Array();
 choices[93][0] = "La copia de seguridad incremental hace una copia de seguridad de todos los archivos.";
 choices[93][1] = "La copia de seguridad diferencial hace una copia de seguridad de todos los archivos.";
 choices[93][2] = "La copia de seguridad diferencial requiere m&aacute;s espacio en cinta y tiempo que la copia de seguridad incremental.";
 choices[93][3] = "La copia de seguridad incremental hace una copia de seguridad solo de los archivos que han cambiado desde la &uacute;ltima copia de seguridad diferencial.";
 answers[93] = choices[93][2];
 units[93] = "48";
 comments[93] = "Id Pregunta: 10614. ";


//  Id pregunta: 10793 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En Android, las aplicaciones se distribuyen en paquetes:";
 choices[94]= new Array();
 choices[94][0] = "yum";
 choices[94][1] = "apk";
 choices[94][2] = "ipa";
 choices[94][3] = "gpm";
 answers[94] = choices[94][1];
 units[94] = "52";
 comments[94] = "Id Pregunta: 10793. Examen GSI 2014";


//  Id pregunta: 10799 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;ale la respuesta INCORRECTA relativa a una arquitectura basada en servicios web:";
 choices[95]= new Array();
 choices[95][0] = "WS-Security permite crear servicios web seguros.";
 choices[95][1] = "SOAP es un protocolo usado para el intercambio de informaci&oacute;n en un entorno descentralizado y distribuido basado en XML a trav&eacute;s de servicios web.";
 choices[95][2] = "AXIS2 es un motor de servicios web desarrollado por Apache. Una de las implementaciones disponible est&aacute; realizada en lenguaje C.";
 choices[95][3] = "Los lenguajes de desarrollo distintos a Java poseen dificultad para integrarse con los Servicios Web.";
 answers[95] = choices[95][3];
 units[95] = "51";
 comments[95] = "Id Pregunta: 10799. Examen GSI 2014";


//  Id pregunta: 10813 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Se&ntilde;ale cu&aacute;les de los siguientes formatos de archivo en la actualidad NO se consideran de formato abierto de texto para documentos:";
 choices[96]= new Array();
 choices[96][0] = "PDF";
 choices[96][1] = "EPUB";
 choices[96][2] = "RTF";
 choices[96][3] = "FLAC";
 answers[96] = choices[96][3];
 units[96] = "61, 62";
 comments[96] = "Id Pregunta: 10813. Examen GSI 2014";


//  Id pregunta: 11052 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[97]= new Array();
 choices[97][0] = "30 meses";
 choices[97][1] = "4 a&ntilde;os";
 choices[97][2] = "5 a&ntilde;os";
 choices[97][3] = "10 a&ntilde;os";
 answers[97] = choices[97][2];
 units[97] = "73";
 comments[97] = "Id Pregunta: 11052. Modificado por Ley 9/2014";


//  Id pregunta: 11530 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Indicar cu&aacute;l de las siguientes afirmaciones es m&aacute;s id&oacute;nea para definir un sistema de Workflow.";
 choices[98]= new Array();
 choices[98][0] = "Se trata de un sistema de invocaci&oacute;n en la ejecuci&oacute;n de operaciones de entrada salida";
 choices[98][1] = "Se trata de una herramienta para mejorar la ejecuci&oacute;n y el control de los procesos de negocio";
 choices[98][2] = "Se trata de una herramienta para el dibujo de diagramas de flujo";
 choices[98][3] = "Se trata de una herramienta que nos permite establecer prioridades en una cola de trabajo";
 answers[98] = choices[98][1];
 units[98] = "71";
 comments[98] = "Id Pregunta: 11530. NULL";


//  Id pregunta: 11612 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Con respecto al sistema operativo Windows 10, se&ntilde;ale la falsa:";
 choices[99]= new Array();
 choices[99][0] = "Se mantiene y mejora el Men&uacute; de Inicio.";
 choices[99][1] = "Desaparece el entorno Modern UI.";
 choices[99][2] = "Permite crear y administrar escritorios virtuales.";
 choices[99][3] = "Incluye el asistente personal Cortana.";
 answers[99] = choices[99][1];
 units[99] = "56";
 comments[99] = "Id Pregunta: 11612. ";


