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

//  Id pregunta: 149 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El m&eacute;todo Promethee:";
 choices[0]= new Array();
 choices[0][0] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no";
 choices[0][1] = "Su concepto central es de comparaci&oacute;n ternaria de alternativas";
 choices[0][2] = "Exige poca informaci&oacute;n por parte del decisor: evaluaciones ordinales y pesos cardinales";
 choices[0][3] = "Generaliza el m&eacute;todo de ponderaci&oacute;n lineal incorporando al posibilidad de valorar el riesgo";
 answers[0] = choices[0][0];
 units[0] = "34";
 comments[0] = "Id Pregunta: 149. NULL";


//  Id pregunta: 176 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En el &aacute;mbito de la normalizaci&oacute;n comunitaria, las siglas CEPT corresponden a:";
 choices[1]= new Array();
 choices[1][0] = "El Comit&eacute; europeo de normalizaci&oacute;n";
 choices[1][1] = "El Comit&eacute; europeo de electrotecnia";
 choices[1][2] = "La Confederaci&oacute;n europea de Administraciones de correos y telecomunicaciones";
 choices[1][3] = "La Confederaci&oacute;n de Asociaciones de usuariios de ordenadores";
 answers[1] = choices[1][2];
 units[1] = "42";
 comments[1] = "Id Pregunta: 176. ";


//  Id pregunta: 210 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En la Administraci&oacute;n P&uacute;blica se puede copiar un programa de ordenador para entregarlo a terceros s&oacute;lo:";
 choices[2]= new Array();
 choices[2][0] = "Cuando haya sido desarrollado a medida de las necesidades de la Administraci&oacute;n";
 choices[2][1] = "Cuando se trate de la copia de &quot;back-up&quot;";
 choices[2][2] = "Cuando los derechos de explotaci&oacute;n correspondan a la Administraci&oacute;n";
 choices[2][3] = "Cuando la Administraci&oacute;n haya adquirido una licencia de uso corporativa";
 answers[2] = choices[2][2];
 units[2] = "36";
 comments[2] = "Id Pregunta: 210. ";


//  Id pregunta: 265 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Indicar cual de los siguientes instrumentos de informaci&oacute;n es un sistema de ayuda orientado a modelos:";
 choices[3]= new Array();
 choices[3][0] = "Informes de excepci&oacute;n";
 choices[3][1] = "Informes resumen";
 choices[3][2] = "Procesos prueba-error";
 choices[3][3] = "Consultas ad-hoc";
 answers[3] = choices[3][2];
 units[3] = "21";
 comments[3] = "Id Pregunta: 265. ";


//  Id pregunta: 274 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Indique cu&aacute;l de las siguientes alternativas se refiere a una de las consecuencias organizativas de la transformaci&oacute;n de una organizaci&oacute;n tradicional en una organizaci&oacute;n basada en la informaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Esa transformaci&oacute;n no tiene consecuencias organizativas";
 choices[4][1] = "El empleo de nuevas tecnolog&iacute;as";
 choices[4][2] = "El aumento del n&uacute;mero de gestores";
 choices[4][3] = "La reducci&oacute;n del n&uacute;mero de niveles jer&aacute;rquicos";
 answers[4] = choices[4][3];
 units[4] = "22";
 comments[4] = "Id Pregunta: 274. ";


//  Id pregunta: 470 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Una de las caracter&iacute;sticas principales de los paquetes de planificaci&oacute;n de recursos de empresas (ERP) es:";
 choices[5]= new Array();
 choices[5][0] = "Los datos a tratar por esos paquetes no pueden ser almacenados en sistemas de bases de datos de car&aacute;cter general.";
 choices[5][1] = "Ser parametrizables, lo que les da gran flexibilidad y la posibilidad de ser aplicados a tipos de empresas muy diferentes.";
 choices[5][2] = "No ser parametrizables, por ser dise&ntilde;ados especialmente para cada tipo de empresas.";
 choices[5][3] = "Utilizar la tecnolog&iacute;a de workflow como soluci&oacute;n a la gesti&oacute;n integral de una empresa.";
 answers[5] = choices[5][1];
 units[5] = "65";
 comments[5] = "Id Pregunta: 470. ";


//  Id pregunta: 501 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  En cuanto a la pol&iacute;tica ergon&oacute;mica y medioambiental:";
 choices[6]= new Array();
 choices[6][0] = "Se aplica resoluci&oacute;n del CSAE de 2004";
 choices[6][1] = "No hay nada indicado al respecto";
 choices[6][2] = "Las partes aprobadas de la NORMA ISO 9241 (asumida como norma EN29241 y como norma UNE-EN29241)";
 choices[6][3] = "La decisi&oacute;n 87/95/CEE";
 answers[6] = choices[6][2];
 units[6] = "39";
 comments[6] = "Id Pregunta: 501. ";


//  Id pregunta: 519 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  Si se estima en un 20% la probabilidad de un incidente que provoca una p&eacute;rdida de 10.000 euros, se est&aacute; hablando de:";
 choices[7]= new Array();
 choices[7][0] = "Un riesgo";
 choices[7][1] = "Un impacto";
 choices[7][2] = "Ninguna de las anteriores";
 choices[7][3] = "a ) y b)";
 answers[7] = choices[7][3];
 units[7] = "31, 32, 33";
 comments[7] = "Id Pregunta: 519. Auditor&iacute;a Inform&aacute;tica ";


//  Id pregunta: 591 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  Entre las t&eacute;cnicas de control deL avance de los proyectos cabe citar:";
 choices[8]= new Array();
 choices[8][0] = "Informes de avance peri&oacute;dicos";
 choices[8][1] = "Puntos de control al final de cada etapa";
 choices[8][2] = "a) y b) son ciertas";
 choices[8][3] = "a) y b) son falsas";
 answers[8] = choices[8][2];
 units[8] = "28";
 comments[8] = "Id Pregunta: 591. ";


//  Id pregunta: 643 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  Cu&aacute;l de las siguientes afirmaciones sobre X/OPEN es incorrecta:";
 choices[9]= new Array();
 choices[9][0] = "POSIX (Portable Operating System Interface), creado por X/OPEN, consite en la creaci&oacute;n de interfaces est&aacute;ndares de sistema operativo.";
 choices[9][1] = "CAE (common Application Enviroment), creado por X/OPEN, est&aacute; basado en est&aacute;ndares internacionales y de hecho.";
 choices[9][2] = "XPG es la gu&iacute;a de portabilidad de X/OPEN";
 choices[9][3] = "X/Open es una compa&ntilde;&iacute;a independiente, sin &aacute;nimo de lucro, compuesta por usuarios, vendedores independientes de software y vendedores de sistemas inform&aacute;ticos de todo el mundo.";
 answers[9] = choices[9][0];
 units[9] = "40";
 comments[9] = "Id Pregunta: 643. ";


//  Id pregunta: 1027 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Entrust:";
 choices[10]= new Array();
 choices[10][0] = "Un algoritmo criptogr&aacute;fico";
 choices[10][1] = "Un mecanismo de intercambio de claves";
 choices[10][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[10][3] = "Una funcion resumen";
 answers[10] = choices[10][2];
 units[10] = "74";
 comments[10] = "Id Pregunta: 1027. NULL";


//  Id pregunta: 1281 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Los programas fuente Java:";
 choices[11]= new Array();
 choices[11][0] = "Se compilan siempre";
 choices[11][1] = "Nunca se compilan, excepto para las m&aacute;quinas con procesador Java";
 choices[11][2] = "Siempre se interpretan para que puedan ejecutarse en m&aacute;quinas con diferente procesador, excepto para las m&aacute;quinas con procesador Java en que son ejecutables directamente";
 choices[11][3] = "Hay partes compiladas y partes interpretadas";
 answers[11] = choices[11][0];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1281. Siempre se compilan a Bytecode.";


//  Id pregunta: 1389 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Un proveedor de servicios OLE DB es:";
 choices[12]= new Array();
 choices[12][0] = "Un componente OLE DB que en realidad no es propietario de los datos, y que puede proveer alg&uacute;n otro servicio";
 choices[12][1] = "Cualquier componente Software que expone sus datos a trav&eacute;s de una interfaz OLE DB";
 choices[12][2] = "Simult&aacute;neamente, un consumidor y un proveedor de datos";
 choices[12][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[12] = choices[12][0];
 units[12] = "59";
 comments[12] = "Id Pregunta: 1389. ";


//  Id pregunta: 1569 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l no es un modelo de extracci&oacute;n de datos en miner&iacute;a de datos?";
 choices[13]= new Array();
 choices[13][0] = " De verificaci&oacute;n.";
 choices[13][1] = " De descubrimiento.";
 choices[13][2] = "Jer&aacute;rquico.";
 choices[13][3] = "Predictivo.";
 answers[13] = choices[13][2];
 units[13] = "68";
 comments[13] = "Id Pregunta: 1569. ";


//  Id pregunta: 1674 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes comandos SQL pertenece al DDL (Lenguaje de definici&oacute;n de datos)?";
 choices[14]= new Array();
 choices[14][0] = "SELECT";
 choices[14][1] = "CREATE";
 choices[14][2] = "INSERT";
 choices[14][3] = "UPDATE";
 answers[14] = choices[14][1];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1674. ";


//  Id pregunta: 1894 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  La tecnolog&iacute;a utilizada para medir y analizar caracter&iacute;sticas del cuerpo humano con prop&oacute;sitos de autenticaci&oacute;n se llama";
 choices[15]= new Array();
 choices[15][0] = "huella";
 choices[15][1] = "biom&eacute;trica";
 choices[15][2] = "JBOD";
 choices[15][3] = "antropomorfismo";
 answers[15] = choices[15][1];
 units[15] = "74";
 comments[15] = "Id Pregunta: 1894. NULL";


//  Id pregunta: 2467 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  No es un &quot;agente&quot; en el modelo EFQM:";
 choices[16]= new Array();
 choices[16][0] = "Liderazgo";
 choices[16][1] = "Gesti&oacute;n de recursos humanos";
 choices[16][2] = "Pol&iacute;ticas y estrategias";
 choices[16][3] = "Satisfacci&oacute;n del cliente";
 answers[16] = choices[16][3];
 units[16] = "92";
 comments[16] = "Id Pregunta: 2467. NULL";


//  Id pregunta: 2716 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  Comparando Java y C++, indique la afirmaci&oacute;n Incorrecta";
 choices[17]= new Array();
 choices[17][0] = "Java es debilmente tipado y C++ es fuertemente tipado";
 choices[17][1] = "Java es altamente portable y C++ tiene aspectos no portables";
 choices[17][2] = "Java es interpretado y C++ es compilado";
 choices[17][3] = "Java no tiene herencia multiple y C++ si";
 answers[17] = choices[17][0];
 units[17] = "82";
 comments[17] = "Id Pregunta: 2716. ";


//  Id pregunta: 2726 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  De los siguientes aspectos, &iquest;cu&aacute;les no deben considerarse a la hora de efectuar unaPlanificaci&oacute;n Estrat&eacute;gica? :";
 choices[18]= new Array();
 choices[18][0] = "La misi&oacute;n del negocio.";
 choices[18][1] = "La situaci&oacute;n de los competidores.";
 choices[18][2] = "Los hitos o puntos clave en el calendario de actuaci&oacute;n.";
 choices[18][3] = "Deben considerarse todos los aspectos anteriores.";
 answers[18] = choices[18][3];
 units[18] = "77";
 comments[18] = "Id Pregunta: 2726. ";


//  Id pregunta: 2833 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  La transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema es:";
 choices[19]= new Array();
 choices[19][0] = "Ingenier&iacute;a inversa.";
 choices[19][1] = "Reestructuraci&oacute;n.";
 choices[19][2] = "Ingenier&iacute;a hacia delante.";
 choices[19][3] = "Reingenier&iacute;a.";
 answers[19] = choices[19][1];
 units[19] = "91";
 comments[19] = "Id Pregunta: 2833. ";


//  Id pregunta: 2995 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  En un switch ethernet";
 choices[20]= new Array();
 choices[20][0] = "todos los puertos trabajan a la misma velocidad";
 choices[20][1] = "puede adaptarse a las distintas velocidades de los host conectados de manera autom&aacute;tica";
 choices[20][2] = "hace labores de enrutamiento a nivel wan";
 choices[20][3] = "sirve &uacute;nicamente para conectar redes ethernet con token ring";
 answers[20] = choices[20][1];
 units[20] = "102";
 comments[20] = "Id Pregunta: 2995. ";


//  Id pregunta: 3176 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes no es un &aacute;rea funcional en el &aacute;mbito de la gesti&oacute;n de redes OSI mediante CMIP?:";
 choices[21]= new Array();
 choices[21][0] = "Fallos";
 choices[21][1] = "Seguridad";
 choices[21][2] = "Rendimiento";
 choices[21][3] = "Control remoto";
 answers[21] = choices[21][3];
 units[21] = "104";
 comments[21] = "Id Pregunta: 3176. ";


//  Id pregunta: 3818 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se&ntilde;ale entre los siguientes, cu&aacute;l es un par&aacute;metro de calidad en redes RDSI:";
 choices[22]= new Array();
 choices[22][0] = "Grado de servicio";
 choices[22][1] = "Alerting delay";
 choices[22][2] = "Bit error";
 choices[22][3] = "Todos son par&aacute;metros de calidad";
 answers[22] = choices[22][3];
 units[22] = "103";
 comments[22] = "Id Pregunta: 3818. ";


//  Id pregunta: 3871 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  HTML";
 choices[23]= new Array();
 choices[23][0] = "Define reglas para el intercambio de mensajes";
 choices[23][1] = "Permite incorporar plantillas XSL";
 choices[23][2] = "Es un lenguaje que describe c&oacute;mo se formatean los mensajes";
 choices[23][3] = "Todas son ciertas";
 answers[23] = choices[23][2];
 units[23] = "113";
 comments[23] = "Id Pregunta: 3871. Tanenbaum";


//  Id pregunta: 4130 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  Los elementos XML de tipo y atributo deben tener una identidad &uacute;nica en el &aacute;mbito del";
 choices[24]= new Array();
 choices[24][0] = "servidor o sitio";
 choices[24][1] = "espacio de nombres ";
 choices[24][2] = "nombre de dominio";
 choices[24][3] = "nombre de dominio completamente cualificado (FQDM)";
 answers[24] = choices[24][1];
 units[24] = "69";
 comments[24] = "Id Pregunta: 4130. NULL";


//  Id pregunta: 4413 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de selecci&oacute;n de inversiones?";
 choices[25]= new Array();
 choices[25][0] = "El m&eacute;todo del Payback.";
 choices[25][1] = "El m&eacute;todo del retorno de la inversi&oacute;n.";
 choices[25][2] = "El m&eacute;todo del Valor Actual Neto.";
 choices[25][3] = "El m&eacute;todo del Indicador Alternativo de Variabilidad del Precio de Mercado.";
 answers[25] = choices[25][3];
 units[25] = "27";
 comments[25] = "Id Pregunta: 4413. Examen TIC MAP B 2006";


//  Id pregunta: 4485 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet:";
 choices[26]= new Array();
 choices[26][0] = "Acceden al medio de transmisi&oacute;n en periodos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[26][1] = "Acceden el medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[26][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por Io que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones";
 choices[26][3] = "Nunca acceden Si tras un primer intento se detecto una colisi&oacute;n.";
 answers[26] = choices[26][1];
 units[26] = "99";
 comments[26] = "Id Pregunta: 4485. ";


//  Id pregunta: 4519 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  Una herramienta inform&aacute;tica especialmente dise&ntilde;ada para ayudar a los usuarios a trabajar en colaboraci&oacute;n de la forma mas eficaz es";
 choices[27]= new Array();
 choices[27][0] = "Un Data-Warehouse";
 choices[27][1] = "Un Workflow";
 choices[27][2] = "Un Groupware";
 choices[27][3] = "Un OLAP";
 answers[27] = choices[27][2];
 units[27] = "71";
 comments[27] = "Id Pregunta: 4519. ";


//  Id pregunta: 4603 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  El driver JDBC-ODBC bridge, se utiliza";
 choices[28]= new Array();
 choices[28][0] = "cuando no existen drivers JDBC nativos.";
 choices[28][1] = "Para garantizar el &eacute;xito de los accesos a la BD.";
 choices[28][2] = "como variable de Ia tecnolog&iacute;a ODBC.";
 choices[28][3] = "para implementar operaciones ODBC, traduci&eacute;ndolas en operaciones JDBC";
 answers[28] = choices[28][0];
 units[28] = "60";
 comments[28] = "Id Pregunta: 4603. NULL";


//  Id pregunta: 4622 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  Indique cual de las siguientes es una herramienta de e-learning: ";
 choices[29]= new Array();
 choices[29][0] = "Kerberos";
 choices[29][1] = "WebCT";
 choices[29][2] = "Kagera";
 choices[29][3] = "Tuxedo";
 answers[29] = choices[29][1];
 units[29] = "66";
 comments[29] = "Id Pregunta: 4622. ";


//  Id pregunta: 4843 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  De entre las t&eacute;cnicas de compresi&oacute;n de im&aacute;genes digitales por codificaci&oacute;n predictiva en las que se elimina la redundancia entre p&iacute;xeles consecutivos, aquella que forma una predicci&oacute;n del p&iacute;xel a codificar en funci&oacute;n de losp&iacute;xeles ya codificados y guarda el error de predicci&oacute;n cuantificado, recibe el nombre de:";
 choices[30]= new Array();
 choices[30][0] = "Dithering";
 choices[30][1] = "RLE (Run Length Encoding)";
 choices[30][2] = "Bit Plane";
 choices[30][3] = "DPCM (Differential Pulse Code Modulation)";
 answers[30] = choices[30][3];
 units[30] = "93";
 comments[30] = "Id Pregunta: 4843. NULL";


//  Id pregunta: 5064 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes grupos de trabajo del IEEE dedica su actividad al campo de las redes de &aacute;reametropolitana?:";
 choices[31]= new Array();
 choices[31][0] = "802.3";
 choices[31][1] = "802.4";
 choices[31][2] = "802.5";
 choices[31][3] = "802.6";
 answers[31] = choices[31][3];
 units[31] = "101";
 comments[31] = "Id Pregunta: 5064. Examen TIC A 2007";


//  Id pregunta: 5690 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Qui&eacute;n expide los certificados del DNI electr&oacute;nico?";
 choices[32]= new Array();
 choices[32][0] = "El Ministerio de Administraciones P&uacute;blicas";
 choices[32][1] = "La plataforma @firma";
 choices[32][2] = "La Entidad P&uacute;blica Red.es";
 choices[32][3] = "La Direcci&oacute;n General de la Polic&iacute;a";
 answers[32] = choices[32][3];
 units[32] = "74";
 comments[32] = "Id Pregunta: 5690. NULL";


//  Id pregunta: 5740 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  &iquest;Puede haber firma electr&oacute;nica reconocida que no sea avanzada?";
 choices[33]= new Array();
 choices[33][0] = "S&iacute;, si el dispositivo de creaci&oacute;n de firma es seguro";
 choices[33][1] = "S&iacute;, si se usa un certificado reconocido";
 choices[33][2] = "No, en ning&uacute;n caso";
 choices[33][3] = "S&iacute;, si lo aceptan ambas partes";
 answers[33] = choices[33][2];
 units[33] = "30";
 comments[33] = "Id Pregunta: 5740. Ley 59/2003, art&iacute;culo 3 y resto de articulado";


//  Id pregunta: 5756 AÃ±o de creación de pregunta: 2009-01-01
 questions[34]= "35)  En el contexto de la Inteligencia Artifical, &iquest;cu&aacute;l de los siguientes es un tipo de Red Neuronal?";
 choices[34]= new Array();
 choices[34][0] = "Fenomenol&oacute;gica";
 choices[34][1] = "Facial";
 choices[34][2] = "De Bradley";
 choices[34][3] = "Perceptr&oacute;n";
 answers[34] = choices[34][3];
 units[34] = "63";
 comments[34] = "Id Pregunta: 5756. ";


//  Id pregunta: 5765 AÃ±o de creación de pregunta: 2009-01-01
 questions[35]= "36)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos de normalizaci&oacute;n de puntuaciones no mantiene la proporcionalidad entre puntuaciones directas y normalizadas?";
 choices[35]= new Array();
 choices[35][0] = "Fracci&oacute;n del ideal";
 choices[35][1] = "Fracci&oacute;n de la suma";
 choices[35][2] = "Fracci&oacute;n del m&aacute;ximo";
 choices[35][3] = "Todas las anteriores mantienen la proporcionalidad";
 answers[35] = choices[35][0];
 units[35] = "34";
 comments[35] = "Id Pregunta: 5765. ";


//  Id pregunta: 6256 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v3, la especificaci&oacute;n de los requisitos de implantaci&oacute;n se realiza en:";
 choices[36]= new Array();
 choices[36][0] = "An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[36][1] = "Dise&ntilde;o de Sistema de Informaci&oacute;n";
 choices[36][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[36][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[36] = choices[36][1];
 units[36] = "86";
 comments[36] = "Id Pregunta: 6256. TICB-2009, bloque desarrollo";


//  Id pregunta: 6347 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes afirmaciones, relacionadas con el podcasting es cierta?";
 choices[37]= new Array();
 choices[37][0] = "Podcasting es la distribuci&oacute;n de archivos multimedia (normalmente audio o v&iacute;deo) mediante un sistema de sindicaci&oacute;n que permita suscribirse y usar un programa que lo descarga para que el usuario lo escuche en el momento que quiera.";
 choices[37][1] = "Habitualmente, no es necesario estar suscrito para descargar un podcast";
 choices[37][2] = "En Internet podemos encontrar todo tipo de podcast de todo tipo de tem&aacute;ticas";
 choices[37][3] = "Todas las anteriores son ciertas";
 answers[37] = choices[37][3];
 units[37] = "120";
 comments[37] = "Id Pregunta: 6347. NULL";


//  Id pregunta: 6435 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  Las entidades d&eacute;biles se representan en E/R mediante:";
 choices[38]= new Array();
 choices[38][0] = "No hay entidades d&eacute;biles en el modelo E/R.";
 choices[38][1] = "Se representan mediante doble caja.";
 choices[38][2] = "Se representan con un tri&aacute;ngulo.";
 choices[38][3] = "Se representan como dos c&iacute;rculos conc&eacute;ntricos.";
 answers[38] = choices[38][1];
 units[38] = "80";
 comments[38] = "Id Pregunta: 6435. NULL";


//  Id pregunta: 6453 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;Qu&eacute; m&eacute;todo de HTTP se debe utilizar para comprobar la validez de una p&aacute;gina sin que la llamada retorne el cuerpo del mensaje?";
 choices[39]= new Array();
 choices[39][0] = "GET";
 choices[39][1] = "HEAD";
 choices[39][2] = "POST";
 choices[39][3] = "SERVICE";
 answers[39] = choices[39][1];
 units[39] = "112";
 comments[39] = "Id Pregunta: 6453. Castilla La Mancha 2009";


//  Id pregunta: 6493 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  El Coste de Calidad incluye todos los costes acarreados en las actividades relacionadas en la obtenci&oacute;n de la calidad. Los Costes de Calidad se pueden dividir en 3 grupos, que son:";
 choices[40]= new Array();
 choices[40][0] = "Costes asociados con la planificaci&oacute;n, la formaci&oacute;n y las pruebas";
 choices[40][1] = "Costes asociados con la prevenci&oacute;n, la evaluaci&oacute;n y los fallos";
 choices[40][2] = "Costes asociados con la inspecci&oacute;n, la reparaci&oacute;n y el mantenimiento";
 choices[40][3] = "Costes asociados con el an&aacute;lisis, la revisi&oacute;n y las devoluciones de productos";
 answers[40] = choices[40][1];
 units[40] = "92";
 comments[40] = "Id Pregunta: 6493. Castilla La Mancha 2009";


//  Id pregunta: 6501 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;Qu&eacute; navegador de Internet est&aacute; licenciado bajo la licencia MPL?";
 choices[41]= new Array();
 choices[41][0] = "Google Chrome";
 choices[41][1] = "Mozilla Firefox";
 choices[41][2] = "Mosaic";
 choices[41][3] = "Netscape Navigator";
 answers[41] = choices[41][1];
 units[41] = "61";
 comments[41] = "Id Pregunta: 6501. ";


//  Id pregunta: 6565 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  La velocidad de transmisi&oacute;n en GPRS queda limitada por:";
 choices[42]= new Array();
 choices[42][0] = "El n&uacute;mero de timeslots que pueda ofrecer la c&eacute;lula donde se encuentra el terminal";
 choices[42][1] = "De la capacidad m&aacute;xima del dispositivo m&oacute;vil";
 choices[42][2] = "Del esquema de codificaci&oacute;n";
 choices[42][3] = "Todas las respuestas anteriores son ciertas";
 answers[42] = choices[42][3];
 units[42] = "108";
 comments[42] = "Id Pregunta: 6565. NULL";


//  Id pregunta: 6633 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  El modelo de McCall de calidad de software define:";
 choices[43]= new Array();
 choices[43][0] = "Caracter&iacute;sticas del proyecto y del producto generado";
 choices[43][1] = "Caracter&iacute;sticas operacionales, de modificaci&oacute;n y de transici&oacute;n o conversi&oacute;n";
 choices[43][2] = "Caracter&iacute;sticas de an&aacute;lisis, desarrollo y pruebas";
 choices[43][3] = "Caracter&iacute;sticas de accesibilidad y rendimiento";
 answers[43] = choices[43][1];
 units[43] = "88";
 comments[43] = "Id Pregunta: 6633. NULL";


//  Id pregunta: 7274 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Entre las ventajas de la virtualizaci&oacute;n de hardware no se encuentra";
 choices[44]= new Array();
 choices[44][0] = "La reducci&oacute;n de costes de administraci&oacute;n";
 choices[44][1] = "La eficiencia energ&eacute;tica";
 choices[44][2] = "El incremento de rendimiento de las aplicaciones";
 choices[44][3] = "Mayor aprovechamiento de los servidores";
 answers[44] = choices[44][2];
 units[44] = "119";
 comments[44] = "Id Pregunta: 7274. NULL";


//  Id pregunta: 7310 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  En relaci&oacute;n a la utilizaci&oacute;n de gram&aacute;ticas y modelos de lenguaje para el reconocimiento de lenguaje natural, indique cu&aacute;l de las siguientes afirmaciones NO es correcta:";
 choices[45]= new Array();
 choices[45][0] = "Las gram&aacute;ticas permiten reconocer cualquier tipo de frase pronunciada por el locutor";
 choices[45][1] = "Las gram&aacute;ticas permiten obtener tasas de acierto m&aacute;s elevadas que los modelos de lenguaje";
 choices[45][2] = "Los modelos de lenguaje precisan de grandes corpus de entrenamiento";
 choices[45][3] = "Los modelos de lenguaje permiten reconocer cualquier tipo de frase pronunciada por el locutor";
 answers[45] = choices[45][0];
 units[45] = "94";
 comments[45] = "Id Pregunta: 7310. NULL";


//  Id pregunta: 7326 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[46]= new Array();
 choices[46][0] = "CEN";
 choices[46][1] = "SETSI";
 choices[46][2] = "CENELEC";
 choices[46][3] = "Todos los anteriores son organismos europeos de normalizaci&oacute;n";
 answers[46] = choices[46][1];
 units[46] = "42";
 comments[46] = "Id Pregunta: 7326. NULL";


//  Id pregunta: 7930 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)   &iquest;Cu&aacute;l de las siguientes respuestas NO corresponde al modelo de compresi&oacute;n de im&aacute;genes JPEG (Joint Photographic Experts Group)?";
 choices[47]= new Array();
 choices[47][0] = " B&aacute;sico/secuencial.";
 choices[47][1] = " Jer&aacute;rquico.";
 choices[47][2] = " Progresivo.";
 choices[47][3] = " Conjugado modificado.";
 answers[47] = choices[47][3];
 units[47] = "NULL";
 comments[47] = "Id Pregunta: 7930. Map 2006";


//  Id pregunta: 8172 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  Seg&uacute;n M&eacute;trica v3, las pruebas de Regresi&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "Se realizan para validar el resultado de las etapas anteriores.";
 choices[48][1] = "Se deben llevar a cabo cuando se hace un cambio en el sistema.";
 choices[48][2] = "Se dise&ntilde;an durante la fase de An&aacute;lisis.";
 choices[48][3] = "M&eacute;trica V3 no define las pruebas de regresi&oacute;n.";
 answers[48] = choices[48][1];
 units[48] = "86";
 comments[48] = "Id Pregunta: 8172. Examen TIC A1 2010";


//  Id pregunta: 8267 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  Referente a la pila de protocolos de la familia ITU H.323 para el tr&aacute;fico multimedia sobre redes IP, la afirmaci&oacute;n correcta es:";
 choices[49]= new Array();
 choices[49][0] = "Requiere el uso del protocolo Registration, Admission and Status (RAS) entre los terminales.";
 choices[49][1] = "Emplea el protocolo TCP/IP para el env&iacute;o de la informaci&oacute;n multimedia pues UDP no garantiza el control de flujo y errores.";
 choices[49][2] = "Emplea Real-Time Control Protocol (RTCP) para la se&ntilde;alizaci&oacute;n (establecimiento, control y finalizaci&oacute;n) de llamadas.";
 choices[49][3] = "Emplea el protocolo T.120 para la inclusi&oacute;n de tr&aacute;fico de datos.";
 answers[49] = choices[49][3];
 units[49] = "117";
 comments[49] = "Id Pregunta: 8267. Examen TIC A1 2010";


//  Id pregunta: 8277 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE, NO incluye entre sus programas:";
 choices[50]= new Array();
 choices[50][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios.";
 choices[50][1] = "Reconocimiento (certificaci&oacute;n de organizaciones y premios).";
 choices[50][2] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[50][3] = "Quejas y reclamaciones.";
 answers[50] = choices[50][3];
 units[50] = "87";
 comments[50] = "Id Pregunta: 8277. Examen TIC A1 2010";


//  Id pregunta: 8288 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  Un agente SNMP env&iacute;a traps a un sistema administrador de red a trav&eacute;s del puerto: ";
 choices[51]= new Array();
 choices[51][0] = "162.";
 choices[51][1] = "126.";
 choices[51][2] = "161.";
 choices[51][3] = "25.";
 answers[51] = choices[51][0];
 units[51] = "104";
 comments[51] = "Id Pregunta: 8288. Examen TIC A2 2010";


//  Id pregunta: 8341 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[52]= new Array();
 choices[52][0] = "El Diccionario de Datos.";
 choices[52][1] = "El Diagrama de Flujo de Datos.";
 choices[52][2] = "Las especificaciones de procesos.";
 choices[52][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[52] = choices[52][3];
 units[52] = "86";
 comments[52] = "Id Pregunta: 8341. Examen TIC A2 2010";


//  Id pregunta: 8348 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes mecanismos NO se utiliza para definir un perfil (profile) en UML 2.0?";
 choices[53]= new Array();
 choices[53][0] = "Estereotipos.";
 choices[53][1] = "Valores etiquetados.";
 choices[53][2] = "Artefactos.";
 choices[53][3] = "Restricciones.";
 answers[53] = choices[53][2];
 units[53] = "80,81,82";
 comments[53] = "Id Pregunta: 8348. Examen TIC A2 2010";


//  Id pregunta: 8515 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida tiene en cuenta el an&aacute;lisis de riesgos?";
 choices[54]= new Array();
 choices[54][0] = "Extreme Programming.";
 choices[54][1] = "Modelo de ciclo de vida en cascada";
 choices[54][2] = "El modelo de ciclo de vida en V";
 choices[54][3] = "Modelo de ciclo de vida en espiral";
 answers[54] = choices[54][3];
 units[54] = "76";
 comments[54] = "Id Pregunta: 8515. Examen TIC A2 2010 interna";


//  Id pregunta: 8527 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  En un cortafuegos en modo SPI (Stateful Packet Inspection), se&ntilde;ale la opci&oacute;n verdadera:";
 choices[55]= new Array();
 choices[55][0] = "Trabaja exclusivamente en el nivel 3 de OSI.";
 choices[55][1] = "Permitir&aacute; el paso de un paquete solo si se dirige al puerto 80 de nuestro servidor.";
 choices[55][2] = "Tiene en cuenta la negociaci&oacute;n en 3 pasos (3 way handshake) del protocolo TCP/IP.";
 choices[55][3] = "No permite la conexi&oacute;n SSH ya que est&aacute; cifrada.";
 answers[55] = choices[55][2];
 units[55] = "111";
 comments[55] = "Id Pregunta: 8527. Examen TIC A2 2010 interna";


//  Id pregunta: 8548 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos se corresponde con la tecnolog&iacute;a que proporciona una infraestructura para la definici&oacute;n de servicios que pueden ser consumidos de manera uniforme, sin conocer los detalles e los sistemas que los proporcionan?";
 choices[56]= new Array();
 choices[56][0] = "EAI (Enterprise Application Integration)";
 choices[56][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[56][2] = "ESB (Enterprise Service Bus)";
 choices[56][3] = "ORB (Object Request Broker)";
 answers[56] = choices[56][2];
 units[56] = "51";
 comments[56] = "Id Pregunta: 8548. Analista Ayto. Madrid 2010";


//  Id pregunta: 8686 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  En el protocolo MPLS, la cabecera de las etiquetas MPLS, NO contiene el siguiente item:";
 choices[57]= new Array();
 choices[57][0] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 choices[57][1] = "Tiempo de vida (8 bits)";
 choices[57][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[57][3] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 answers[57] = choices[57][0];
 units[57] = "100";
 comments[57] = "Id Pregunta: 8686. Examen UPM A2 2011";


//  Id pregunta: 8817 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Sobre la tecnolog&iacute;a ASP (Active Server Pages) se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[58]= new Array();
 choices[58][0] = "A diferencia de ASP.net, ASP utiliza el &quot;Common Language Runtime (CLR)&quot; para generar el c&oacute;digo HTML";
 choices[58][1] = "S&oacute;lo es compatible con el servidor IIS (Internet Information Server)";
 choices[58][2] = "Es un lenguaje de script que se incluye en un mismo archivo junto con el c&oacute;digo HTML";
 choices[58][3] = "Permite la utilizaci&oacute;n de diversos lenguajes de programaci&oacute;n, entre ellos Visual Basic Script y JScript";
 answers[58] = choices[58][0];
 units[58] = "115";
 comments[58] = "Id Pregunta: 8817. Examen UPM A2 2011";


//  Id pregunta: 8824 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)   Seg&uacute;n el Real Decreto legislativo 1/1996, de 12 de abril, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual, &quot;toda secuencia de instrucciones o indicaciones destinadas a ser utilizadas, directa o indirectamente, en un sistema inform&aacute;tico para realizar una funci&oacute;n o una tarea o para obtener un resultado determinado, cualquiera que fuere su forma de expresi&oacute;n o fijaci&oacute;n&quot; es:";
 choices[59]= new Array();
 choices[59][0] = " Un algoritmo";
 choices[59][1] = "Un m&eacute;todo";
 choices[59][2] = "Un programa de ordenador ";
 choices[59][3] = "Un procedimiento";
 answers[59] = choices[59][2];
 units[59] = "36,37";
 comments[59] = "Id Pregunta: 8824. Examen UC3M 2010";


//  Id pregunta: 8889 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes no es un ASE?";
 choices[60]= new Array();
 choices[60][0] = "ACSE";
 choices[60][1] = "MCSE";
 choices[60][2] = "RTSE";
 choices[60][3] = "ROSE";
 answers[60] = choices[60][1];
 units[60] = "100";
 comments[60] = "Id Pregunta: 8889. ";


//  Id pregunta: 8917 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;ndo una relaci&oacute;n est&aacute; en Tercera Forma Normal?:";
 choices[61]= new Array();
 choices[61][0] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no tiene grupos repetitivos.";
 choices[61][1] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s todos los atributos que no forman parte de la clave primaria tienen dependencia funcional completa respecto de cada una de las claves.";
 choices[61][2] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no hay dependencias funcionales transitivas respecto de la clave primaria.";
 choices[61][3] = "Cuando est&aacute; en Segunda Forma Normal y la clave primaria no est&aacute; formada por un &uacute;nico atributo";
 answers[61] = choices[61][2];
 units[61] = "58";
 comments[61] = "Id Pregunta: 8917. Operador Ayto. Madrid 2010";


//  Id pregunta: 9061 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes no es una infracci&oacute;n grave seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[62]= new Array();
 choices[62][0] = "No remitir a la Agencia de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo";
 choices[62][1] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal por parte del responsable del fichero";
 choices[62][2] = "La obstrucci&oacute;n al ejercicio de la funci&oacute;n inspectora";
 choices[62][3] = "El incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal cuando los datos no hayan sido recabados del propio interesado";
 answers[62] = choices[62][0];
 units[62] = "29";
 comments[62] = "Id Pregunta: 9061. NULL";


//  Id pregunta: 9071 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Se&ntilde;ale la afirmaci&oacute;n FALSA:";
 choices[63]= new Array();
 choices[63][0] = "El acr&oacute;nimo XAG se refiere a XML Accesibility Guidelines. ";
 choices[63][1] = "En las normas WCAG 2.0, el nivel se otorga a nivel de procesos y subprocesos. ";
 choices[63][2] = "El W3C publica gram&aacute;ticas HTML que deben satisfacerse para lograr el nivel AA en las normas WCAG 2.0. ";
 choices[63][3] = "WAI-ARIA es un acr&oacute;nimo que significa Web Accesibility Initiative - Accesible Rich Internet Applications. ";
 answers[63] = choices[63][1];
 units[63] = "39";
 comments[63] = "Id Pregunta: 9071. ";


//  Id pregunta: 9174 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Si hablamos de UBL, &iquest;cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[64]= new Array();
 choices[64][0] = "Fue desarrollado por OASIS";
 choices[64][1] = "Es una librer&iacute;a est&aacute;ndar de documentos XML dedicada a la representaci&oacute;n de facturas ";
 choices[64][2] = "Est&aacute; basada en el concepto de Core Components";
 choices[64][3] = "El desarrollo de su variante NES, NESUBL, es la base del proyecto PEPPOL de contrataci&oacute;n online paneuropea";
 answers[64] = choices[64][1];
 units[64] = "70";
 comments[64] = "Id Pregunta: 9174. ";


//  Id pregunta: 9193 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  &iquest;Se pueden proteger las ideas que sirven de base a los programas de ordenador?";
 choices[65]= new Array();
 choices[65][0] = "S&oacute;lo las que sirvan de base para el desarrollo de interfaces";
 choices[65][1] = "S&oacute;lo las que sirvan de base para crear un nuevo programa";
 choices[65][2] = "S&oacute;lo las que sirvan de base para crear un nuevo programa y adem&aacute;s sean originales";
 choices[65][3] = "Todas las anteriores son falsas";
 answers[65] = choices[65][3];
 units[65] = "36";
 comments[65] = "Id Pregunta: 9193. ";


//  Id pregunta: 9230 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Desde el punto de vista interno el sistema operativo puede concebirse como:";
 choices[66]= new Array();
 choices[66][0] = "un interfaz entre los programas de aplicaci&oacute;n y la m&aacute;quina pura.";
 choices[66][1] = "gestor de recursos.";
 choices[66][2] = "coordinador del funcionamiento de los recursos de c&oacute;mputo y de entrada y salida.";
 choices[66][3] = "B) y C) son correctas.";
 answers[66] = choices[66][3];
 units[66] = "52";
 comments[66] = "Id Pregunta: 9230. ";


//  Id pregunta: 9263 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  Indicad cu&aacute;l de las siguientes versiones NO se corresponde con una distribuci&oacute;n de Linux:";
 choices[67]= new Array();
 choices[67][0] = "Kubuntu.";
 choices[67][1] = "Red Hat";
 choices[67][2] = "Slackware.";
 choices[67][3] = "IRIX.";
 answers[67] = choices[67][3];
 units[67] = "53";
 comments[67] = "Id Pregunta: 9263. Examen TICA2-2011";


//  Id pregunta: 9349 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  Sobre los canales no estructurados en Europa:";
 choices[68]= new Array();
 choices[68][0] = "El H11 trabaja a 384 kbps agrupando 6 canales de 64 kbps";
 choices[68][1] = "El H0 trabaja a 1536 kbps, agrupando 24 canales de 64 kbps";
 choices[68][2] = "El H11 trabaja a 1920 Kbps, agrupando 30 canales de 64 kbps";
 choices[68][3] = "El H0 trabaja 384 kbps, agrupando 6 canales de 64 kbps";
 answers[68] = choices[68][3];
 units[68] = "103";
 comments[68] = "Id Pregunta: 9349. Pag. 6 astic 2011";


//  Id pregunta: 9367 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  Los niveles de servicio de Resilient Packet Ring son:";
 choices[69]= new Array();
 choices[69][0] = "Clase A: Servicio best effort";
 choices[69][1] = "Clase B: Con latencia y jitter predecible.";
 choices[69][2] = "Clase C: Para tr&aacute;fico con requisitos de baja latencia y bajo jitter.";
 choices[69][3] = "Todas las respuestas son correctas.";
 answers[69] = choices[69][1];
 units[69] = "101";
 comments[69] = "Id Pregunta: 9367. ";


//  Id pregunta: 9384 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Seg&uacute;n la UIT, dentro de la denominaci&oacute;n 4G, se pueden incluir las siguientes tecnolog&iacute;as";
 choices[70]= new Array();
 choices[70][0] = "LTE";
 choices[70][1] = "WiMAX y LTE";
 choices[70][2] = "WiMAX";
 choices[70][3] = "LTE, WiMAX y HSPA+";
 answers[70] = choices[70][3];
 units[70] = "108";
 comments[70] = "Id Pregunta: 9384. NULL";


//  Id pregunta: 9396 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Las redes ATM emplean celdas de:";
 choices[71]= new Array();
 choices[71][0] = "Tama&ntilde;o variable: entre 5 e 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n";
 choices[71][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n";
 choices[71][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[71][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[71] = choices[71][1];
 units[71] = "109";
 comments[71] = "Id Pregunta: 9396. Examen Xunta de Galicia A1 2011";


//  Id pregunta: 9440 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Qu&eacute; diagrama UML muestra el flujo de acciones en curso, no necesariamente at&oacute;micas, en relaci&oacute;n a la estructura de estados del sistema?:";
 choices[72]= new Array();
 choices[72][0] = "Diagrama de secuencia.";
 choices[72][1] = "Diagrama de estados.";
 choices[72][2] = "Diagrama de actividad.";
 choices[72][3] = "Diagrama de colaboraci&oacute;n.";
 answers[72] = choices[72][2];
 units[72] = "82";
 comments[72] = "Id Pregunta: 9440. Examen AGE TIC A1 2011";


//  Id pregunta: 9486 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Indique la afirmaci&oacute;n incorrecta con respecto a una sesi&oacute;n JAD";
 choices[73]= new Array();
 choices[73][0] = "Es una t&eacute;cnica que promueve la cooperaci&oacute;n entre usuarios y desarrolladores para la obtenci&oacute;n de requisitos";
 choices[73][1] = "T&iacute;picamente duran media jornada de trabajo";
 choices[73][2] = "Se utilizan para reducir el tiempo de desarrollo";
 choices[73][3] = "Involucran a personas de m&aacute;s alto nivel que las sesiones JRP";
 answers[73] = choices[73][3];
 units[73] = "78";
 comments[73] = "Id Pregunta: 9486. ";


//  Id pregunta: 9583 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[74]= new Array();
 choices[74][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[74][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[74][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[74][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[74] = choices[74][1];
 units[74] = "43, 74";
 comments[74] = "Id Pregunta: 9583. Examen TIC A1 2011";


//  Id pregunta: 9638 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Qu&eacute; se conoce como CPU Throttling en IIS 8.0?";
 choices[75]= new Array();
 choices[75][0] = "A reducir autom&aacute;ticamente la frecuencia de trabajo de la CPU para evitar el calentamiento de la m&aacute;quina";
 choices[75][1] = "A la asignaci&oacute;n de CPU a cada proceso en un entorno multiprocesador  ";
 choices[75][2] = "A los fallos de CPU ante una sobrecarga de trabajo";
 choices[75][3] = "A la limitaci&oacute;n autom&aacute;tica de los recursos de CPU entre los tenants del sistema";
 answers[75] = choices[75][3];
 units[75] = "56";
 comments[75] = "Id Pregunta: 9638. La respuesta A es el concepto original de CPU throttling, la D es lo que se entiende en un entorno de hosting";


//  Id pregunta: 9693 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Indique cu&aacute;l es la respuesta falsa. Los principios que se aplicaron para llegar a las siete capas del modelo OSI fueron:";
 choices[76]= new Array();
 choices[76][0] = "Cada capa debe realizar una funci&oacute;n bien definida.";
 choices[76][1] = "No debe dise&ntilde;arse la funci&oacute;n de cada capa pensando en la definici&oacute;n de protocolos estandarizados internacionalmente.";
 choices[76][2] = "Se debe crear una capa siempre que exista un nivel diferente de abstracci&oacute;n.";
 choices[76][3] = "Los l&iacute;mites de las capas deben elegirse a modo de minimizar el flujo de informaci&oacute;n a trav&eacute;s de las interfaces.";
 answers[76] = choices[76][1];
 units[76] = "100";
 comments[76] = "Id Pregunta: 9693. NULL";


//  Id pregunta: 9709 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  La programaci&oacute;n funcional limita el uso de";
 choices[77]= new Array();
 choices[77][0] = "estados mutables.";
 choices[77][1] = "expresiones lambda.";
 choices[77][2] = "procedimientos como par&aacute;metros.";
 choices[77][3] = "lenguajes como Erlang, F# o Scala.";
 answers[77] = choices[77][0];
 units[77] = "60";
 comments[77] = "Id Pregunta: 9709. Examen TIC-A1 2013";


//  Id pregunta: 9750 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes respuestas se corresponde con una base de datos no SQL destinada a almacenar enormes cantidades de datos?";
 choices[78]= new Array();
 choices[78][0] = "Citrix";
 choices[78][1] = "Oracle";
 choices[78][2] = "MySql Extend";
 choices[78][3] = "Cassandra";
 answers[78] = choices[78][3];
 units[78] = "58";
 comments[78] = "Id Pregunta: 9750. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9959 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  ASP.NET proporciona varios modos de persistencia para las variables de sesi&oacute;n. Indique cu&aacute;l de las respuestas NO es un modo v&aacute;lido:";
 choices[79]= new Array();
 choices[79][0] = "InProc";
 choices[79][1] = "StateServer";
 choices[79][2] = "ClusterServer";
 choices[79][3] = "SqlServer";
 answers[79] = choices[79][2];
 units[79] = "59,115";
 comments[79] = "Id Pregunta: 9959. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10071 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como 3.5G es:";
 choices[80]= new Array();
 choices[80][0] = "GPRS ";
 choices[80][1] = "HSDPA";
 choices[80][2] = "HSUPA ";
 choices[80][3] = "UMTS";
 answers[80] = choices[80][1];
 units[80] = "108";
 comments[80] = "Id Pregunta: 10071. TIC A2, libre, Examen 2013";


//  Id pregunta: 10073 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Sobre LTE (Long Term Evolution) es cierto que:";
 choices[81]= new Array();
 choices[81][0] = "Se conoce comercialmente como Generaci&oacute;n 3.0 G.";
 choices[81][1] = "Utiliza multiplexaci&oacute;n OFDM (Orthogonal frequency-division multiplexing) en el enlace descendente.";
 choices[81][2] = "Abandona el uso de antenas MIMO de la generaci&oacute;n anterior.";
 choices[81][3] = "Es un est&aacute;ndar norteamericano incompatible en Europa.";
 answers[81] = choices[81][1];
 units[81] = "107";
 comments[81] = "Id Pregunta: 10073. TIC A2, libre, Examen 2013";


//  Id pregunta: 10087 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil se basa en principios como &ldquo;decidir lo m&aacute;s tarde posible&rdquo; y &ldquo;reaccionar tan r&aacute;pido como sea posible?";
 choices[82]= new Array();
 choices[82][0] = "FDD";
 choices[82][1] = "LSD";
 choices[82][2] = "ASD";
 choices[82][3] = "Kanban";
 answers[82] = choices[82][1];
 units[82] = "79";
 comments[82] = "Id Pregunta: 10087. NULL";


//  Id pregunta: 10310 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment (SATA) Revision 3.0 es de hasta:";
 choices[83]= new Array();
 choices[83][0] = "300 MB/s.";
 choices[83][1] = "900 MB/s.";
 choices[83][2] = "600 MB/s.";
 choices[83][3] = "150 MB/s.";
 answers[83] = choices[83][2];
 units[83] = "48";
 comments[83] = "Id Pregunta: 10310. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10465 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l no es una nueva caracter&iacute;stica de HTML5?";
 choices[84]= new Array();
 choices[84][0] = "Nuevos elementos sem&aacute;nticos.";
 choices[84][1] = "Fuerte soporte a gr&aacute;ficos con &lt;canvas&gt; y &lt;svg&gt;.";
 choices[84][2] = "Fuerte soporte multimedia.";
 choices[84][3] = "Nuevos elementos para soporte a la accesibilidad web.";
 answers[84] = choices[84][3];
 units[84] = "69";
 comments[84] = "Id Pregunta: 10465. NULL";


//  Id pregunta: 10504 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cual es la impedancia de los cables definida en la ISO 11801 para las versiones de la norma posteriores a 2002?";
 choices[85]= new Array();
 choices[85][0] = "120 ?";
 choices[85][1] = "150 ?";
 choices[85][2] = "100 ?";
 choices[85][3] = "Todos los anteriores";
 answers[85] = choices[85][2];
 units[85] = "99";
 comments[85] = "Id Pregunta: 10504. A partir del 2002, solo se consideran validas las impedancias de 100 ?";


//  Id pregunta: 10527 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En el &aacute;mbito de los procesadores de ordenador, el concepto de pipelining hace referencia a:";
 choices[86]= new Array();
 choices[86][0] = "el encadenamiento de las instrucciones que se ejecutan en el procesador, de manera que la salida de una se conecta a la entrada de la siguiente ahorrando el paso por los registros, lo que acelera la ejecuci&oacute;n";
 choices[86][1] = "el particionado del procesador en etapas, lo que permite paralelizar las fases de ejecuci&oacute;n de instrucciones en el procesador";
 choices[86][2] = "el acceso a memoria mediante buses dedicados al efecto, denominados &quot;pipes&quot;, lo que prioriza las consultas del procesador a la memoria";
 choices[86][3] = "no se contempla el concepto de pipelining relacionado con los procesadores";
 answers[86] = choices[86][1];
 units[86] = "45";
 comments[86] = "Id Pregunta: 10527. NULL";


//  Id pregunta: 10565 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  El volumen de datos en riesgo de p&eacute;rdida que la organizaci&oacute;n considera tolerable es:";
 choices[87]= new Array();
 choices[87][0] = "RPO (Recovery Point Objective)";
 choices[87][1] = "RTO (Recovery Time Objective) ";
 choices[87][2] = "DRP (Disater Recovery Plan)";
 choices[87][3] = "Business Impact Analysis (BIA)";
 answers[87] = choices[87][0];
 units[87] = "31, 32, 33";
 comments[87] = "Id Pregunta: 10565. ";


//  Id pregunta: 10674 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor.";
 choices[88]= new Array();
 choices[88][0] = "6 meses despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[88][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[88][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n para todas sus previsiones normativas.";
 choices[88][3] = "Ninguna de las anteriores.";
 answers[88] = choices[88][3];
 units[88] = "30";
 comments[88] = "Id Pregunta: 10674. ";


//  Id pregunta: 10823 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En M&eacute;trica v3 las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en los siguientes grupos:";
 choices[89]= new Array();
 choices[89][0] = "Actividades de Comienzo del Proyecto, Actividades de Seguimiento y Control y Actividades de Aceptaci&oacute;n.";
 choices[89][1] = "Actividades de Planificaci&oacute;n del Proyecto, Actividades de Control de proyectos y Actividades de Aceptaci&oacute;n.";
 choices[89][2] = "Actividades de Inicio del Proyecto, Actividades de Seguimiento y Control y Actividades de Finalizaci&oacute;n.";
 choices[89][3] = "Actividades de Inicio del Proyecto, Actividades de Control de Calidad y Actividades de Cierre.";
 answers[89] = choices[89][2];
 units[89] = "86";
 comments[89] = "Id Pregunta: 10823. Examen GSI 2014";


//  Id pregunta: 10990 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  La Agenda Digital para Europa, iniciativa de la estrategia Europa 2020 puesta en marcha por la Comisi&oacute;n Europea:";
 choices[90]= new Array();
 choices[90][0] = "Establece la ZUPE (Zona &Uacute;nica de Prestaciones para Empresas), que supondr&aacute; la interconexi&oacute;n de plataformas de apoyo al Emprendedor, permitiendo la presentaci&oacute;n de tr&aacute;mites de inicio de actividad para todo el territorio europeo.";
 choices[90][1] = "Establece medidas para que, en el a&ntilde;o 2020, el 75% de los hogares europeos est&eacute;n abonados a conexiones de internet por encima de los 100 Mbps.";
 choices[90][2] = "Establece el objetivo de equipar a los europeos con un acceso en l&iacute;nea seguro a sus datos m&eacute;dicos en 2017.";
 choices[90][3] = "Propone que, para 2020, los pa&iacute;ses miembros deber&iacute;an duplicar el gasto p&uacute;blico anual total en investigaci&oacute;n y desarrollo de las TIC.";
 answers[90] = choices[90][3];
 units[90] = "30";
 comments[90] = "Id Pregunta: 10990. TIC A1 AGE 2014";


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


//  Id pregunta: 11319 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En cuanto a las medidas de seguridad exigidas seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, una de las siguientes medidas no es exigible en el nivel b&aacute;sico.";
 choices[92]= new Array();
 choices[92][0] = "Registro de incidencias";
 choices[92][1] = "El documento de seguridad con indicaci&oacute;n de activos, medidas y responsable del fichero.";
 choices[92][2] = "Listado de personas autorizadas con acceso.";
 choices[92][3] = "El documento de seguridad.";
 answers[92] = choices[92][1];
 units[92] = "29";
 comments[92] = "Id Pregunta: 11319. En el nivel b&aacute;sico, el documento de seguridad, debe tener los recursos y las medidas. La indicaci&oacute;n del responsable es en el nivel medio.";


//  Id pregunta: 11351 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En cuanto al formato de la cabecera IPv6, se&ntilde;ale la opci&oacute;n verdadera";
 choices[93]= new Array();
 choices[93][0] = "4 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[93][1] = "4 bits de versi&oacute;n, 20 bits de clase de tr&aacute;fico, 8 etiqueta de flujo";
 choices[93][2] = "8 bits de versi&oacute;n, 8 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 choices[93][3] = "4 bits de versi&oacute;n, 4 bits de clase de tr&aacute;fico, 20 etiqueta de flujo";
 answers[93] = choices[93][0];
 units[93] = "100";
 comments[93] = "Id Pregunta: 11351. ";


//  Id pregunta: 11393 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes listas de pasos del Ciclo de Deming empleada por ITIL v3 es la correcta?";
 choices[94]= new Array();
 choices[94][0] = "Planificar, Medir, Monitorizar, Informar";
 choices[94][1] = "Planificar, Revisar, Reaccionar, Implementar";
 choices[94][2] = "Planificar, Hacer, Actuar, Auditar";
 choices[94][3] = "Planificar, Hacer, Revisar, Actuar";
 answers[94] = choices[94][3];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11393. ";


//  Id pregunta: 11426 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Los abonados podr&aacute;n conservar sus n&uacute;meros de tel&eacute;fono seg&uacute;n la Ley 9/2014:";
 choices[95]= new Array();
 choices[95][0] = "Siempre.";
 choices[95][1] = "S&oacute;lo si lo solicitan previamente al operador al que quieren cambiar.";
 choices[95][2] = "S&oacute;lo si se lo comunican a la CNMC.";
 choices[95][3] = "No est&aacute; regulado en la Ley.";
 answers[95] = choices[95][1];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11426. ";


//  Id pregunta: 11494 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes aspectos NO debe figurar en un Pliego de Cl&aacute;usulas Administrativas particulares que se establezca para un contrato de Tecnolog&iacute;as de la Informaci&oacute;n?";
 choices[96]= new Array();
 choices[96][0] = "El Plazo para la ejecuci&oacute;n del contrato.";
 choices[96][1] = "Los criterios para la adjudicaci&oacute;n del contrato.";
 choices[96][2] = "El modelo de referencia para las funciones inform&aacute;ticas.";
 choices[96][3] = "Deben figurar todos los aspectos anteriores.";
 answers[96] = choices[96][2];
 units[96] = "41";
 comments[96] = "Id Pregunta: 11494. NULL";


//  Id pregunta: 11672 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En Java, para redirigir la petici&oacute;n a otra p&aacute;gina JSP se utiliza la etiqueta:";
 choices[97]= new Array();
 choices[97][0] = "page";
 choices[97][1] = "forward";
 choices[97][2] = "request";
 choices[97][3] = "pageContext";
 answers[97] = choices[97][1];
 units[97] = "116";
 comments[97] = "Id Pregunta: 11672. ";


//  Id pregunta: 11711 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera acerca de las VLANs?";
 choices[98]= new Array();
 choices[98][0] = "Se deben tener al menos dos VLANs definidas en cada red conmutada ";
 choices[98][1] = "Se deben tener al menos tres VLANs definidas en cada red conmutada ";
 choices[98][2] = "No deber&iacute;an tenerse m&aacute;s de 3 switches en cada red conmutada";
 choices[98][3] = "Actuan a nivel 2 del modelo OSI";
 answers[98] = choices[98][3];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11711. NULL";


//  Id pregunta: 11718 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; sucede si se pierde el primer paquete de una transferencia TFTP? ";
 choices[99]= new Array();
 choices[99][0] = "La aplicaci&oacute;n TFTP volver&aacute; a intentar la solicitud si no se recibe una respuesta. ";
 choices[99][1] = "El router del siguiente salto o la puerta de enlace predeterminada proporcionar&aacute;n una respuesta con un c&oacute;digo de error. ";
 choices[99][2] = "El cliente esperar&aacute; indefinidamente la respuesta. ";
 choices[99][3] = " La capa de transporte volver&aacute; a intentar la consulta si no se recibe una respuesta.";
 answers[99] = choices[99][0];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11718. NULL";


