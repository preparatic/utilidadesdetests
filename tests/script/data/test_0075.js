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

//  Id pregunta: 1 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes es una herramienta inform&aacute;tica de apoyo a los compradores p&uacute;blicos?";
 choices[0]= new Array();
 choices[0][0] = "PROS@.";
 choices[0][1] = "ISTMO.";
 choices[0][2] = "SSD-AAPP.";
 choices[0][3] = "Ninguna de las anteriores.";
 answers[0] = choices[0][2];
 units[0] = "34";
 comments[0] = "Id Pregunta: 1. Modificada por JCED Preparatic XVII";


//  Id pregunta: 69 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas compara cada permutaci&oacute;n posible de las alternativas, con la informaci&oacute;n que aporta para cada criterio la matriz de decisi&oacute;n?:";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;todo Promethee";
 choices[1][1] = "Utilidad multiatributo";
 choices[1][2] = "Permutaci&oacute;n";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][3];
 units[1] = "34";
 comments[1] = "Id Pregunta: 69. NULL";


//  Id pregunta: 272 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Indique cu&aacute;l de las siguientes afirmaciones se aplica a la gesti&oacute;n de incidencias y aver&iacute;as:";
 choices[2]= new Array();
 choices[2][0] = "Las herramientas de gesti&oacute;n de incidencias deben estar integradas con el inventario";
 choices[2][1] = "La eficiencia del sistema es funci&oacute;n directa del n&uacute;mero de terminales telef&oacute;nicos";
 choices[2][2] = "Las llamadas de aver&iacute;as deben encaminarse autom&aacute;ticamente al suministrador";
 choices[2][3] = "Los operadores deben ser expertos en mantenimiento hardware";
 answers[2] = choices[2][0];
 units[2] = "32";
 comments[2] = "Id Pregunta: 272. ";


//  Id pregunta: 273 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Indique cu&aacute;l de las siguientes afirmaciones sobre la Agencia de Protecci&oacute;n de Datos es falsa de acuerdo con lo establecido en el real Decreto 428/93, de 26 de marzo, por el que se aprueba su Estatuto:";
 choices[3]= new Array();
 choices[3][0] = "Vela por el cumplimiento de la Ley Org&aacute;nica 5/92, de 29 de octubre, de regulaci&oacute;n del tratamiento automatizado de datos de car&aacute;cter personal (hoy d&iacute;a sustituida por la LOPD)";
 choices[3][1] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Justicia";
 choices[3][2] = "Dictar&aacute; recomendaciones sobre seguridad y control de acceso a ficheros";
 choices[3][3] = "Su Consejo Consultivo es un &oacute;rgano colegiado compuesto por doce miembros que asesora al Director de la Agencia de Protecci&oacute;n de  Datos";
 answers[3] = choices[3][3];
 units[3] = "29";
 comments[3] = "Id Pregunta: 273. ";


//  Id pregunta: 673 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  El &quot;proyecto CERES&quot;:";
 choices[4]= new Array();
 choices[4][0] = "Establece c&oacute;mo deben de ser los certificados que se usen para realizar la firma electr&oacute;nica";
 choices[4][1] = "Hace que se pueda usar a la Fabrica Nacional de la Moneda y Timbre de forma gratuita por todos los espa&ntilde;oles";
 choices[4][2] = "Se define en el &aacute;mbito de la relaci&oacute;n de los ciudadanos con las administraciones y &eacute;stas entre si.";
 choices[4][3] = "Designa a la Fabrica Nacional de la Moneda y Timbre como autoridad de certificaci&oacute;n para cualquier transacci&oacute;n electr&oacute;nica";
 answers[4] = choices[4][2];
 units[4] = "74";
 comments[4] = "Id Pregunta: 673. NULL";


//  Id pregunta: 798 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; tienen en com&uacute;n Sony, Philips, Nokia, Panasonic, HP y Microsoft?:";
 choices[5]= new Array();
 choices[5][0] = "Fueron las &uacute;nicas multinacionales en el sector TIC con beneficios en 2002";
 choices[5][1] = "Todas se caracterizan por su pol&iacute;tica monopol&iacute;stica";
 choices[5][2] = "Todas fabrican perif&eacute;ricos m&oacute;viles ";
 choices[5][3] = "Todas pertenecen, entre otras, al DHWG (Digital Home Working Group)";
 answers[5] = choices[5][3];
 units[5] = "48";
 comments[5] = "Id Pregunta: 798. ";


//  Id pregunta: 889 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;C&uacute;al o c&uacute;ales de los siguientes sistemas de criptograf&iacute;a pueden encontrarse dentro de la criptograf&iacute;a sim&eacute;trica?:";
 choices[6]= new Array();
 choices[6][0] = "De bloques (block cipher),  de flujos (stream cipher) y de res&uacute;men (hash function)";
 choices[6][1] = "De flujos (stream cipher), de res&uacute;men (hash function) y de sigilo (stealth cipher)";
 choices[6][2] = "De bloques (block cipher),  de ocultamiento (conceal cipher) y de sellado de tiempo (time stamping cipher)";
 choices[6][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[6] = choices[6][0];
 units[6] = "72";
 comments[6] = "Id Pregunta: 889. ";


//  Id pregunta: 904 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Podr&iacute;a decir cu&aacute;l de los siguientes no es un sistema Unix?:";
 choices[7]= new Array();
 choices[7][0] = "AIX";
 choices[7][1] = "OpenVMS";
 choices[7][2] = "HP-UX";
 choices[7][3] = "Solaris";
 answers[7] = choices[7][1];
 units[7] = "53";
 comments[7] = "Id Pregunta: 904. ";


//  Id pregunta: 906 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Podr&iacute;a ordenar los siguientes tipos de memoria seg&uacute;n su coste, de mayor a menor?:";
 choices[8]= new Array();
 choices[8][0] = "Registros, Cach&eacute;, Memoria Principal, Disco magn&eacute;tico, Cinta magn&eacute;tica";
 choices[8][1] = "Registros, Cach&eacute;, Disco magn&eacute;tico, Memoria Principal, Cinta magn&eacute;tica";
 choices[8][2] = "Cach&eacute;, Memoria Principal, Disco magn&eacute;tico, Registros, Cinta magn&eacute;tica";
 choices[8][3] = "Todas son falsas";
 answers[8] = choices[8][0];
 units[8] = "47";
 comments[8] = "Id Pregunta: 906. ";


//  Id pregunta: 1030 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Frecuencia de paginaci&oacute;n es:";
 choices[9]= new Array();
 choices[9][0] = "N&uacute;mero de peticiones de servicio por unidad de tiempo";
 choices[9][1] = "N&uacute;mero de programas sacados de memoria por unidad de tiempo";
 choices[9][2] = "N&uacute;mero de trabajos de un programa en un entorno de memoria virtual por unidad de tiempo";
 choices[9][3] = "N&uacute;mero de fallos de p&aacute;gina que se producen por unidad de tiempo";
 answers[9] = choices[9][3];
 units[9] = "52";
 comments[9] = "Id Pregunta: 1030. ";


//  Id pregunta: 1124 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En programaci&oacute;n concurrente, el problema de la exclusi&oacute;n mutua consiste en:";
 choices[10]= new Array();
 choices[10][0] = "2 procesos no pueden estar a la vez en la secci&oacute;n cr&iacute;tica";
 choices[10][1] = "Todo proceso debe de poder entrar en la seccion critica";
 choices[10][2] = "Un proceso de fuera de la secci&oacute;n critica no puede bloquear el acceso a otro";
 choices[10][3] = "Todas son ciertas";
 answers[10] = choices[10][3];
 units[10] = "52";
 comments[10] = "Id Pregunta: 1124. ";


//  Id pregunta: 1313 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Referido a un sistema de disco magn&eacute;tico, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[11]= new Array();
 choices[11][0] = "Todas las pistas de un sector est&aacute;n en el mismo cilindro";
 choices[11][1] = "Un sector est&aacute; constituido por varias pistas";
 choices[11][2] = "Un  cilindro est&aacute; constituido por varias pistas";
 choices[11][3] = "Una pista est&aacute; constituida por varios cilindros";
 answers[11] = choices[11][2];
 units[11] = "48";
 comments[11] = "Id Pregunta: 1313. ";


//  Id pregunta: 1501 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Un PDA:";
 choices[12]= new Array();
 choices[12][0] = "No permite la navegaci&oacute;n en Internet";
 choices[12][1] = "No puede conectarse a un PC";
 choices[12][2] = "Puede llevar instalado Windows";
 choices[12][3] = "Todas las anteriores son ciertas";
 answers[12] = choices[12][2];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1501. ";


//  Id pregunta: 1523 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  Con las memorias DDR-SDRAM podernos obtener una velocidad equivalente a la obtenida con:";
 choices[13]= new Array();
 choices[13][0] = "pc66.";
 choices[13][1] = "pc100.";
 choices[13][2] = "pc133.";
 choices[13][3] = "multiplo (x2) de pc66, pc100 o pc133.";
 answers[13] = choices[13][3];
 units[13] = "47";
 comments[13] = "Id Pregunta: 1523. Junta Andaluc&iacute;a";


//  Id pregunta: 1574 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  &iquest;Qu&eacute; es JDBC?:";
 choices[14]= new Array();
 choices[14][0] = " Un modelo de objetos ActiveX.";
 choices[14][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C.";
 choices[14][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[14][3] = " Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[14] = choices[14][3];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1574. Junta Andaluc&iacute;a";


//  Id pregunta: 1575 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;Qu&eacute; es lo que la Firma Digital no garantiza por si sola?";
 choices[15]= new Array();
 choices[15][0] = "Autenticaci&oacute;n";
 choices[15][1] = "Integridad";
 choices[15][2] = "Disponibilidad";
 choices[15][3] = "No repudio";
 answers[15] = choices[15][2];
 units[15] = "72";
 comments[15] = "Id Pregunta: 1575. ";


//  Id pregunta: 1630 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  Sobre lenguajes de comunicaci&oacute;n entre sistemas multiagente cual es cierta";
 choices[16]= new Array();
 choices[16][0] = "Se utiliza KQML porque aporta generalidad y ortogonalidad ";
 choices[16][1] = "Se utiliza KQML porque aporta generalidad y no ortogonalidad";
 choices[16][2] = "utiliza KIF porque aporta generalidad y ortogonalidad";
 choices[16][3] = "Se utiliza ARCHON porque aporta generalidad y ortogonalidad";
 answers[16] = choices[16][0];
 units[16] = "63";
 comments[16] = "Id Pregunta: 1630. ";


//  Id pregunta: 1667 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes libros sobre el DVD, hace referencia a Sistemas de escritura &uacute;nica, DVD-R?";
 choices[17]= new Array();
 choices[17][0] = "Libro A";
 choices[17][1] = "Libro B";
 choices[17][2] = "Libro C";
 choices[17][3] = "Libro D";
 answers[17] = choices[17][3];
 units[17] = "48";
 comments[17] = "Id Pregunta: 1667. ";


//  Id pregunta: 1691 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  Respecto a las herramientas, t&eacute;cnicas y terminolog&iacute;a OLAP indique cu&aacute;l de las siguientes afirmaciones es falsa.";
 choices[18]= new Array();
 choices[18][0] = "Trata de la s&iacute;ntesis, el an&aacute;lisis y la consolidaci&oacute;n din&aacute;mica de grandes vol&uacute;menes de datos multidimensionales.";
 choices[18][1] = "Las herramientas OLAP m&aacute;s eficientes en tiempo de respuesta trabajan sobre base de datos relacionales.";
 choices[18][2] = "Las bases de datos multidimensionales almacenan los datos de forma parecida a como lo hace una hoja de c&aacute;lculo aunque, a diferencia de &eacute;stas, es com&uacute;n que utilicen m&aacute;s de dos dimensiones.";
 choices[18][3] = "Se puede en establecer una jerarqu&iacute;a de niveles en cada dimensi&oacute;n para representar diversos grados de detalle.";
 answers[18] = choices[18][1];
 units[18] = "68";
 comments[18] = "Id Pregunta: 1691. ";


//  Id pregunta: 1720 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  A qu&eacute; corresponde el est&aacute;ndar POSIX 1003.7";
 choices[19]= new Array();
 choices[19][0] = "Int&eacute;rprete y comandos";
 choices[19][1] = "Lenguaje Ada";
 choices[19][2] = "Administraci&oacute;n del sistema";
 choices[19][3] = "Procedimientos de biblioteca";
 answers[19] = choices[19][2];
 units[19] = "53";
 comments[19] = "Id Pregunta: 1720. ";


//  Id pregunta: 1910 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Respecto de la SSI (Single System Image) de un cluster, es falso que:";
 choices[20]= new Array();
 choices[20][0] = "Es generada por un middleware que se situa entre el entorno de usuario y el sistema operativo.";
 choices[20][1] = "Podemos encontrar SSIs hardware, a nivel de kernel de sistema operativo y de aplicaci&oacute;n.";
 choices[20][2] = "La soluci&oacute;n de SSI m&aacute;s eficiente en cuanto a tiempos de ejecuci&oacute;n es la implementada en el kernel del sistema operativo.";
 choices[20][3] = "Genera una apariencia de recurso unificado a partir de un grupo de computadores interconectados.";
 answers[20] = choices[20][2];
 units[20] = "45";
 comments[20] = "Id Pregunta: 1910. ";


//  Id pregunta: 1994 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  El estudio de Viabilidad del Sistema:";
 choices[21]= new Array();
 choices[21][0] = "Es una parte del ciclo de vida, y como tal est&aacute; comtemplado en la metodolog&iacute;a METRICA V3";
 choices[21][1] = "No est&aacute; contemplado en la METRICA, pues esta es solo una metodolog&iacute;a de desarrollo";
 choices[21][2] = "No es necesaria si se emplean t&eacute;cnicas orientadas a objetos";
 choices[21][3] = "No es necesaria si el desarrollo del sistema viene motivado por una orden superior.";
 answers[21] = choices[21][0];
 units[21] = "86";
 comments[21] = "Id Pregunta: 1994. Pregunta TIC-B 2004";


//  Id pregunta: 2099 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En un Sistema de Gesti&oacute;n de Bases de Datos Documentales el diccionario de palabras vac&iacute;as permite:";
 choices[22]= new Array();
 choices[22][0] = "Buscar palabras o combinaciones de las mismas sin conocer con exactitud los caracteres que las componen";
 choices[22][1] = "Enlazar consultas individuales para crear rutinas de interrogaci&oacute;n complejas";
 choices[22][2] = "Definir un conjunto de palabras que no deseamos que formen parte de los &iacute;ndices";
 choices[22][3] = "Igualar caracteres para que el sistema de b&uacute;squeda los considere iguales";
 answers[22] = choices[22][2];
 units[22] = "96";
 comments[22] = "Id Pregunta: 2099. ";


//  Id pregunta: 2168 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Indique la afirmaci&oacute;n falsa:";
 choices[23]= new Array();
 choices[23][0] = "El modelado entidad-relaci&oacute;n es una t&eacute;cnica para el modelado de datos";
 choices[23][1] = "Las redes de Petri son una t&eacute;cnica orientada a objetos";
 choices[23][2] = "El diagrama de flujo de datos es una t&eacute;cnica orientada a los datos";
 choices[23][3] = "El diagrama de clases es una t&eacute;cnica orientada a objetos";
 answers[23] = choices[23][2];
 units[23] = "81";
 comments[23] = "Id Pregunta: 2168. ";


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


//  Id pregunta: 2568 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  Al utilizar la t&eacute;cnica de estimaci&oacute;n Puntos Funci&oacute;n, se tienen en cuenta";
 choices[25]= new Array();
 choices[25][0] = "Entradas externas, ficheros l&oacute;gicos internos y salidas externas";
 choices[25][1] = "Ficheros de interfaz externos y consultas externas";
 choices[25][2] = "Entradas de aplicaciones, consulas y salidas de aplicaciones";
 choices[25][3] = "A y B son correctas";
 answers[25] = choices[25][3];
 units[25] = "89";
 comments[25] = "Id Pregunta: 2568. NULL";


//  Id pregunta: 2577 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  La planificaci&oacute;n estrat&eacute;gica es";
 choices[26]= new Array();
 choices[26][0] = "un  momento en el tiempo para tomar decisiones";
 choices[26][1] = "una herramienta para anticiparse a los cambios";
 choices[26][2] = "una herramienta que permite que los cambios sean consecuencia de las acciones emprendidas por la organizaci&oacute;n";
 choices[26][3] = "una herramineta que se limita e extrapolar el presente al futuro";
 answers[26] = choices[26][2];
 units[26] = "77";
 comments[26] = "Id Pregunta: 2577. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2637 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  El plan de sistemas de informaci&oacute;n de M&eacute;trica v3 ";
 choices[27]= new Array();
 choices[27][0] = "debe incluir una evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los cinco a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos";
 choices[27][1] = "incluye actividades tales como 'generaci&oacute;n de especificaciones de construcci&oacute;n', 'dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema',y 'especificaci&oacute;n t&eacute;cnica del plan de pruebas'";
 choices[27][2] = "tiene una perspectiva estrat&eacute;gica y opertaiva, pero no tecnol&oacute;gica";
 choices[27][3] = "no requeire la participaci&oacute;n del responasble de mantenimiento";
 answers[27] = choices[27][2];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2637. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2862 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  &iquest;Qu&eacute; pretende la CE con los principios ONP?";
 choices[28]= new Array();
 choices[28][0] = " la definici&oacute;n de un conjunto de medidas reguladoras para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[28][1] = " la definici&oacute;n de un conjunto de medidas  t&eacute;cnicas para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[28][2] = " la definici&oacute;n de un conjunto de medidas econ&oacute;micas para asegurar la mayor competencia y trasparencia posible en el mercado de los servicios de telecomunicaciones.";
 choices[28][3] = "Todas ellas";
 answers[28] = choices[28][3];
 units[28] = "30";
 comments[28] = "Id Pregunta: 2862. ";


//  Id pregunta: 2979 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  En broadcast, &iquest;qu&eacute; protocolo traduce a direcci&oacute;n f&iacute;sica?";
 choices[29]= new Array();
 choices[29][0] = "TCP";
 choices[29][1] = "UDP";
 choices[29][2] = "RIP";
 choices[29][3] = "ARP";
 answers[29] = choices[29][3];
 units[29] = "100";
 comments[29] = "Id Pregunta: 2979. Examen Julio 2003";


//  Id pregunta: 3091 AÃ±o de creación de pregunta: 2005-01-01
 questions[30]= "31)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un hacker en un servidor web afecta a:";
 choices[30]= new Array();
 choices[30][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[30][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[30][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[30][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[30] = choices[30][0];
 units[30] = "111";
 comments[30] = "Id Pregunta: 3091. NULL";


//  Id pregunta: 3093 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Un CGI:";
 choices[31]= new Array();
 choices[31][0] = "Es una aplicaci&oacute;n dise&ntilde;ada para ejecutarse en el servidor web, devolviendo los resultados al usuario mediante el navegador";
 choices[31][1] = "Puede estar escrito en Pascal";
 choices[31][2] = "Puede ejecutarse en sistemas Windows";
 choices[31][3] = "Todas son ciertas";
 answers[31] = choices[31][3];
 units[31] = "114,115,116";
 comments[31] = "Id Pregunta: 3093. ";


//  Id pregunta: 3147 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a las distintas formas de codificaci&oacute;n?:";
 choices[32]= new Array();
 choices[32][0] = "La codificaci&oacute;n aritm&eacute;tica es m&aacute;s eficiente (en bits/s&iacute;mbolo) que la de Huffman";
 choices[32][1] = "La codificaci&oacute;n de Huffman utiliza los c&oacute;digos m&aacute;s largos para los s&iacute;mbolos m&aacute;s improbables";
 choices[32][2] = "La codificaci&oacute;n de Huffman codifica cada s&iacute;mbolo de forma independiente";
 choices[32][3] = "La codificaci&oacute;n de Huffman utiliza c&oacute;digos de longitud uniforme para representar los diferentes s&iacute;mbolos";
 answers[32] = choices[32][3];
 units[32] = "97";
 comments[32] = "Id Pregunta: 3147. NULL";


//  Id pregunta: 3214 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  El est&aacute;ndar 100Base-FX corresponde a:";
 choices[33]= new Array();
 choices[33][0] = "Ethernet con un par extra de hilos";
 choices[33][1] = "Fast Ethernet con cables de fibra &oacute;ptica";
 choices[33][2] = "Fast Ethernet con cableado de par trenzado";
 choices[33][3] = "Ninguno de los anteriores";
 answers[33] = choices[33][1];
 units[33] = "97";
 comments[33] = "Id Pregunta: 3214. NULL";


//  Id pregunta: 3305 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre la Terminaci&oacute;n de Red de tipo 2 y la Terminaci&oacute;n de Red de tipo 1 (punto de interfaz entre la instalaci&oacute;n de la compa&ntilde;&iacute;a telef&oacute;nica y la instalaci&oacute;n de usuario)?:";
 choices[34]= new Array();
 choices[34][0] = "R";
 choices[34][1] = "S";
 choices[34][2] = "T";
 choices[34][3] = "U";
 answers[34] = choices[34][2];
 units[34] = "103";
 comments[34] = "Id Pregunta: 3305. ";


//  Id pregunta: 3495 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  En el entorno de las redes inal&aacute;mbricas se denomina &quot;hot-spot&quot;:";
 choices[35]= new Array();
 choices[35][0] = "A la zona de cobertura con mayor demanda de tr&aacute;fico";
 choices[35][1] = "A los emplazamientos con cobertura WiFi";
 choices[35][2] = "A zonas de cobertura con potenciales problemas de interferencias";
 choices[35][3] = "A las zonas de sombra";
 answers[35] = choices[35][1];
 units[35] = "107";
 comments[35] = "Id Pregunta: 3495. NULL";


//  Id pregunta: 3772 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  PGP, o Pretty Good Privacy:";
 choices[36]= new Array();
 choices[36][0] = "Fue desarrollado por Phil Zimmerman";
 choices[36][1] = "Utiliza IDEA o MD5 como encriptacion";
 choices[36][2] = "Utiliza TripleDES Como encriptacion";
 choices[36][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[36] = choices[36][0];
 units[36] = "106";
 comments[36] = "Id Pregunta: 3772. ";


//  Id pregunta: 3820 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Se&ntilde;ale la afirmaci&oacute;n err&oacute;nea respecto a los servicios de red:";
 choices[37]= new Array();
 choices[37][0] = "Los servicios de red orientados a conexi&oacute;n implican el uso de un encaminamiento &uacute;nico durante toda la duraci&oacute;n de una conexi&oacute;n.  El fallo de un dispositivo en red en cualquier punto a lo largo del encaminamiento seleccionado provocar&aacute; un fallo en la conex";
 choices[37][1] = "Los servicios de red no orientados a conexi&oacute;n no predeterminan el encaminamiento de los datos ni la secuencia de los paquetes de datos transmitidos.  Los paquetes de datos pueden ser encaminados sorteando fallos de dispositivos en red, y los recursos de r";
 choices[37][2] = "En los servicios de red no orientados a conexi&oacute;n, los paquetes de datos (datagramas) son recibidos en el mismo orden en que fueron transmitidos";
 choices[37][3] = "Los servicios de red no orientados a conexi&oacute;n son &uacute;tiles para la transmisi&oacute;n de paquetes de datos que permiten distintas demoras de propagaci&oacute;n y el reordenamiento de la secuencia de paquetes de datos en recepci&oacute;n";
 answers[37] = choices[37][2];
 units[37] = "101";
 comments[37] = "Id Pregunta: 3820. ";


//  Id pregunta: 3995 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En SNMP:";
 choices[38]= new Array();
 choices[38][0] = "El agente env&iacute;a al cliente comandos Get Response";
 choices[38][1] = "El origen de SNMP es SGMP";
 choices[38][2] = "Su arquitectura consiste en agente, objetos y cliente";
 choices[38][3] = "Todas son verdaderas";
 answers[38] = choices[38][3];
 units[38] = "104";
 comments[38] = "Id Pregunta: 3995. ";


//  Id pregunta: 4005 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Con respecto al est&aacute;ndar de servicios de directorio X500 , el protocolo utilizado para intercambiar informaci&oacute;n administrativa entre dos DSA&rsquo;s (Directory Service Agent) se denomina:";
 choices[39]= new Array();
 choices[39][0] = "DMO";
 choices[39][1] = "DOP";
 choices[39][2] = "DMD";
 choices[39][3] = "DISP";
 answers[39] = choices[39][1];
 units[39] = "106";
 comments[39] = "Id Pregunta: 4005. ";


//  Id pregunta: 4148 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Cada uno de los equipos comprometidos y utilizados para lanzar un ataque de denegaci&oacute;n de servicio distribuido contra un objetivo concreto se llama";
 choices[40]= new Array();
 choices[40][0] = "dongle";
 choices[40][1] = "token";
 choices[40][2] = "repetidor";
 choices[40][3] = "zombie";
 answers[40] = choices[40][3];
 units[40] = "111";
 comments[40] = "Id Pregunta: 4148. NULL";


//  Id pregunta: 4176 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  La primera tarea a realizar en un plan de continuidad de negocio es";
 choices[41]= new Array();
 choices[41][0] = "Duplicar los equipos cr&iacute;ticos";
 choices[41][1] = "Hacer una copia de seguridad de todos los datos";
 choices[41][2] = "Realizar un an&aacute;lisis de la criticidad de los diferentes recursos ante posibles situaciones de emergencia";
 choices[41][3] = "Evaluar la habilidad del personal para responder adecuadamente a situaciones de emergencia";
 answers[41] = choices[41][2];
 units[41] = "97";
 comments[41] = "Id Pregunta: 4176. NULL";


//  Id pregunta: 4290 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  La gesti&oacute;n de la configuraci&oacute;n del software correctamente desempe&ntilde;ada implica identificar la configuraci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Antes del comienzo del ciclo de vida.";
 choices[42][1] = "Solamente al comienzo del ciclo de vida";
 choices[42][2] = "En puntos predefinidos durante el ciclo de vida.";
 choices[42][3] = "Solamente al finalizar el ciclo de vida";
 answers[42] = choices[42][2];
 units[42] = "87";
 comments[42] = "Id Pregunta: 4290. NULL";


//  Id pregunta: 4646 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Dentro del protocolo de Ia capa de transporte TCP (Transmision Control Protocol&quot;) cual de las siguientes primitivas no es de solicitud de servicio:";
 choices[43]= new Array();
 choices[43][0] = "Active open";
 choices[43][1] = "Send";
 choices[43][2] = "Open success";
 choices[43][3] = "Allocate";
 answers[43] = choices[43][2];
 units[43] = "100";
 comments[43] = "Id Pregunta: 4646. ";


//  Id pregunta: 4772 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Se&ntilde;ale la respuesta correcta sobre la Ley 9/2014 General de Telecomunicaciones";
 choices[44]= new Array();
 choices[44][0] = "El objetivo de esta Ley es la regulaci&oacute;n de las telecomunicaciones, que comprenden la explotaci&oacute;n de las redes y la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas y los recursos asociados";
 choices[44][1] = "Se excluye del &aacute;mbito de esta Ley la regulaci&oacute;n de los servicios de telecomunicaciones para la defensa nacional y la protecci&oacute;n civil.";
 choices[44][2] = "Las telecomunicaciones tienen la consideraci&oacute;n de servicio p&uacute;blico y se prestan en r&eacute;gimen de libre competencia";
 choices[44][3] = "La Ley regula tanto el sector de las telecomunicaciones como el de los contenidos audiovisuales";
 answers[44] = choices[44][0];
 units[44] = "110";
 comments[44] = "Id Pregunta: 4772. ";


//  Id pregunta: 4820 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language ) NO escierta?";
 choices[45]= new Array();
 choices[45][0] = "Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas";
 choices[45][1] = "Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML";
 choices[45][2] = "Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, encuyo caso pueden omitirse";
 choices[45][3] = "Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM(Document Object Model) o en XML-DOM";
 answers[45] = choices[45][2];
 units[45] = "69";
 comments[45] = "Id Pregunta: 4820. NULL";


//  Id pregunta: 4830 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En relaci&oacute;n a los lenguajes XML (eXtensible Markup Language) y RDF (Resource Description Framework), &iquest;cu&aacute;l delas siguientes afirmaciones es cierta?";
 choices[46]= new Array();
 choices[46][0] = "XML Schema proporciona soporte para la interoperabilidad sem&aacute;ntica";
 choices[46][1] = "RDF utiliza XML como sintaxis com&uacute;n para el intercambio de metadatos";
 choices[46][2] = "RDF est&aacute; compuesto &uacute;nicamente de propiedades y enunciados";
 choices[46][3] = "XML Schema no tiene tipos predefinidos";
 answers[46] = choices[46][1];
 units[46] = "69";
 comments[46] = "Id Pregunta: 4830. NULL";


//  Id pregunta: 4977 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes acciones no es necesaria para sindicar un documento de nuestra web mediante RSS?:";
 choices[47]= new Array();
 choices[47][0] = "Crear un documento RSS y guardarlo con una extensi&oacute;n .xml.";
 choices[47][1] = "Cargar el documento en nuestro sitio web.";
 choices[47][2] = "Registrase (web y documento) en un agregador RSS.";
 choices[47][3] = "Pagar el canon de registro a Red.Es.";
 answers[47] = choices[47][3];
 units[47] = "114";
 comments[47] = "Id Pregunta: 4977. Examen TIC B 2007";


//  Id pregunta: 5034 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes es un componente de la versi&oacute;n 2 del &quot;framework&quot; .NET de Microsoft?";
 choices[48]= new Array();
 choices[48][0] = "Visual Studio";
 choices[48][1] = "CLR (Common Language Runtime)";
 choices[48][2] = "BizTalk";
 choices[48][3] = "SQL Server";
 answers[48] = choices[48][1];
 units[48] = "59";
 comments[48] = "Id Pregunta: 5034. Examen TIC A 2007";


//  Id pregunta: 5306 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Seg&uacute;n la Ley 9/2014, la determinaci&oacute;n de si la prestaci&oacute;n del servicio universal supone una causa injustificada para los operadores obligados a prestarlo corresponde a:";
 choices[49]= new Array();
 choices[49][0] = "Ministerio de Industria";
 choices[49][1] = "Gobierno";
 choices[49][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[49][3] = "Ninguno de los anteriores";
 answers[49] = choices[49][2];
 units[49] = "110";
 comments[49] = "Id Pregunta: 5306. ";


//  Id pregunta: 5493 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Indica la afirmaci&oacute;n correcta respecto a CLS o Common Language Specification:";
 choices[50]= new Array();
 choices[50][0] = "Es el conjunto de clases que se manejan en .NET";
 choices[50][1] = "Recoge la especificacion que debe cumplir todo lenguaje que se ejecuta sobre el framework .NET";
 choices[50][2] = "Es la especificacion del framework .NET";
 choices[50][3] = "Todas son falsas";
 answers[50] = choices[50][1];
 units[50] = "59";
 comments[50] = "Id Pregunta: 5493. ";


//  Id pregunta: 5544 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Se&ntilde;ale la respuesta correcta respecto a la entrada en vigor de la La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos:";
 choices[51]= new Array();
 choices[51][0] = "A partir del d&iacute;a siguiente a su publicaci&oacute;n en el BOE.";
 choices[51][1] = "Los derechos reconocidos en el art 6 de la ley 11/2007, podr&aacute;n ejercerse respecto de los procedimientos y actuaciones adaptados a la misma, desde la entrada en vigor de dicha ley.";
 choices[51][2] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado y para los Organismos Publicos  vinculados o dependientes de &eacute;sta, los derechos reconocidos en el art 6 de dicha ley, podr&aacute;n ejercerse respecto a la totalidad de procedimientos y actuaciones de su competencia, a partir del 31-12-2009.";
 choices[51][3] = "Todas las anteriores son correctas.";
 answers[51] = choices[51][3];
 units[51] = "43";
 comments[51] = "Id Pregunta: 5544. NULL";


//  Id pregunta: 5653 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Seg&uacute;n el RD 1720/2007, a partir de que nivel de seguridad los sistemas de informaci&oacute;n e instalaciones deber&aacute;n someterse a una auditor&iacute;a, al menos cada dos a&ntilde;os";
 choices[52]= new Array();
 choices[52][0] = "nivel b&aacute;sico";
 choices[52][1] = "nivel medio";
 choices[52][2] = "nivel alto";
 choices[52][3] = "En ningun caso";
 answers[52] = choices[52][1];
 units[52] = "29";
 comments[52] = "Id Pregunta: 5653. ";


//  Id pregunta: 5893 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Qu&eacute; es JNI?";
 choices[53]= new Array();
 choices[53][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[53][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[53][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[53][3] = "Ninguna de las anteriores";
 answers[53] = choices[53][1];
 units[53] = "60";
 comments[53] = "Id Pregunta: 5893. NULL";


//  Id pregunta: 6042 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  En el &aacute;mbito de la Gesti&oacute;n de Identidades, &iquest;c&oacute;mo se denomina al conjunto de proveedores de servicios, identidades y atributos que disponen de acuerdos de servicio, comerciales y de negocio para que el usuario pueda realizar transacciones de forma transparente y sencilla entre todos ellos?";
 choices[54]= new Array();
 choices[54][0] = "Web Access Management";
 choices[54][1] = "WS - Security";
 choices[54][2] = "C&iacute;rculo de Confianza (CoT)";
 choices[54][3] = "SAML";
 answers[54] = choices[54][2];
 units[54] = "118";
 comments[54] = "Id Pregunta: 6042. ";


//  Id pregunta: 6140 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Acerca del protocolo Kerberos v. 5 (IETF RFC 4120):";
 choices[55]= new Array();
 choices[55][0] = "Tiene extensiones que permiten el empleo de criptograf&iacute;a de clave p&uacute;blica y secreta.";
 choices[55][1] = "Los tickets expiran tras un tiempo predeterminado en el protocolo.";
 choices[55][2] = "El servidor de autenticaci&oacute;n cifra el ticket que remite al cliente con una clave que obtiene a partir del nombre y la contrase&ntilde;a del usuario.";
 choices[55][3] = "Utiliza los algoritmos de cifrado bajo el modo de operaci&oacute;n denominado CBC (Cipher block chaining).";
 answers[55] = choices[55][0];
 units[55] = "74";
 comments[55] = "Id Pregunta: 6140. TIC A 2009";


//  Id pregunta: 6371 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  En el Esquema Nacional de Seguridad, las dimensiones de seguridad se adscribir&aacute;n a uno de los siguientes niveles:";
 choices[56]= new Array();
 choices[56][0] = "Bajo, Medio o Alto";
 choices[56][1] = "Limitado, Grave o Muy Grave";
 choices[56][2] = "B&aacute;sico, Medio o Alto";
 choices[56][3] = "B&aacute;sico, Medio, Alto o Muy Alto";
 answers[56] = choices[56][0];
 units[56] = "43";
 comments[56] = "Id Pregunta: 6371. Anexo I ENS. Y las categor&iacute;as pueden ser b&aacute;sica, media o alta.";


//  Id pregunta: 6482 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;En qu&eacute; lenguaje est&aacute;n definidos los objetos gestionados en SNMP?";
 choices[57]= new Array();
 choices[57][0] = "C++";
 choices[57][1] = "ASN.1";
 choices[57][2] = "trap";
 choices[57][3] = "Java";
 answers[57] = choices[57][1];
 units[57] = "104";
 comments[57] = "Id Pregunta: 6482. Castilla La Mancha 2009";


//  Id pregunta: 6485 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  En relaci&oacute;n con la transmisi&oacute;n en frecuencias radioel&eacute;ctricas, el medio de transmisi&oacute;n influye en la propagaci&oacute;n a trav&eacute;s de un conjunto de fen&oacute;menos f&iacute;sicos &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[58]= new Array();
 choices[58][0] = "Reflexi&oacute;n";
 choices[58][1] = "Dispersi&oacute;n crom&aacute;tica";
 choices[58][2] = "Difracci&oacute;n";
 choices[58][3] = "Absorci&oacute;n";
 answers[58] = choices[58][1];
 units[58] = "99";
 comments[58] = "Id Pregunta: 6485. Castilla La Mancha 2009";


//  Id pregunta: 6526 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Un error conocido es";
 choices[59]= new Array();
 choices[59][0] = "Un problema para el que se ha identificado una soluci&oacute;n provisional o permanente, y tambi&eacute;n se conoce la causa";
 choices[59][1] = "Un problema para el que se ha identificado una soluci&oacute;n provisional o permanente, pero no se conoce la causa";
 choices[59][2] = "Un problema para el que se no se ha identificado a&uacute;n una soluci&oacute;n pero s&iacute; se conoce la causa";
 choices[59][3] = "Todas las respuestas anteriores son falsas";
 answers[59] = choices[59][0];
 units[59] = "98";
 comments[59] = "Id Pregunta: 6526. NULL";


//  Id pregunta: 7141 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l es la vigencia de los certificados electr&oacute;nicos incluidos en el DNI electr&oacute;nico?";
 choices[60]= new Array();
 choices[60][0] = "Dos a&ntilde;os";
 choices[60][1] = "Cuatro a&ntilde;os";
 choices[60][2] = "30 meses";
 choices[60][3] = "18 meses";
 answers[60] = choices[60][2];
 units[60] = "30";
 comments[60] = "Id Pregunta: 7141. Examen TIC B 2009 (RD 1553/2005, art&iacute;culo 12)";


//  Id pregunta: 7303 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  El est&aacute;ndar de la ETSI para reconocimiento del habla distribuido se llama:";
 choices[61]= new Array();
 choices[61][0] = "ATENA";
 choices[61][1] = "AURORA";
 choices[61][2] = "PALAS ATENEA";
 choices[61][3] = "AFRODITA";
 answers[61] = choices[61][1];
 units[61] = "94";
 comments[61] = "Id Pregunta: 7303. NULL";


//  Id pregunta: 7844 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)   La t&eacute;cnica que se emplea para la modelizaci&oacute;n sem&aacute;ntica de datos a la hora de dise&ntilde;ar un sistema de informaci&oacute;n, se denomina:";
 choices[62]= new Array();
 choices[62][0] = " Modelo Entidad/Relaci&oacute;n.";
 choices[62][1] = " Diagrama de Flujo de Datos.";
 choices[62][2] = " Diagrama de Contexto.";
 choices[62][3] = " Modelo de Datos.";
 answers[62] = choices[62][0];
 units[62] = "NULL";
 comments[62] = "Id Pregunta: 7844. Map 2005";


//  Id pregunta: 7873 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   &iquest;Qu&eacute; tipo de diagramas de UML (Unified Modeling Language) permiten describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n mediante el paso de mensajes entre los objetos del mismo?";
 choices[63]= new Array();
 choices[63][0] = " Diagramas de casos de uso.";
 choices[63][1] = " Diagramas de estados.";
 choices[63][2] = " Diagramas de interacci&oacute;n.";
 choices[63][3] = " Diagramas de flujo de datos.";
 answers[63] = choices[63][2];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 7873. Map 2006";


//  Id pregunta: 7890 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   De acuerdo al apartado quinto de la Resoluci&oacute;n de 6 de febrero de 2006, de la Secretar&iacute;a General para la Administraci&oacute;n P&uacute;blica, por la que se aprueban directrices para el desarrollo de los programas del marco general para la mejora de la calidad, &iquest;cu&aacute;l de los siguientes es un modelo de gesti&oacute;n de calidad reconocido en la adaptaci&oacute;n realizada por el Ministerio de Administraciones P&uacute;blicas?";
 choices[64]= new Array();
 choices[64][0] = " ISO 9004:2000 de Calidad Estructural.";
 choices[64][1] = " UNE 7128-32 para la Gesti&oacute;n Continua de la Calidad.";
 choices[64][2] = " EFQM (European Foundation for Quality Management) de Excelencia.";
 choices[64][3] = " DEMING de Calidad Total.";
 answers[64] = choices[64][2];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 7890. Map 2006";


//  Id pregunta: 7898 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   &iquest;Cu&aacute;l de las siguientes infracciones NO est&aacute; tipificada como muy grave seg&uacute;n la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?";
 choices[65]= new Array();
 choices[65][0] = " El incumplimiento significativo de la obligaci&oacute;n de retener los datos de tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n, prevista en el art&iacute;culo 12 de dicha Ley.";
 choices[65][1] = " La utilizaci&oacute;n de los datos retenidos, en cumplimiento del art&iacute;culo 12 de dicha Ley, para fines distintos de los se&ntilde;alados en &eacute;l.";
 choices[65][2] = " El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o la prestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competente lo ordene, en virtud de lo dispuesto en el art&iacute;culo 11 de dicha Ley.";
 choices[65][3] = " El env&iacute;o masivo de comunicaciones comerciales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente o el env&iacute;o, en el plazo de un a&ntilde;o, de m&aacute;s de tres comunicaciones comerciales por los medios aludidos a un mismo destinatario, cuando en dichos env&iacute;os no se cumplan los requisitos establecidos en el art&iacute;culo 21 de dicha Ley.";
 answers[65] = choices[65][3];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 7898. Map 2006";


//  Id pregunta: 7904 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   El marco COBIT (Control Objectives for Information and related Technology) es una herramienta de gobierno de las TIC. En su marco de control, que identifica los requisitos de negocio, el proceso de &laquo;Gesti&oacute;n de la Calidad&raquo; se encuentra definido en el dominio de:";
 choices[66]= new Array();
 choices[66][0] = " Planificaci&oacute;n y organizaci&oacute;n.";
 choices[66][1] = " Adquisici&oacute;n e implementaci&oacute;n.";
 choices[66][2] = " Servicio y soporte.";
 choices[66][3] = " Monitorizaci&oacute;n.";
 answers[66] = choices[66][0];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 7904. Map 2006";


//  Id pregunta: 7970 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)   En orientaci&oacute;n a objetos, el t&eacute;rmino utilizado para expresar que los datos de un objeto solamente pueden ser manipulados por medio de mensajes y m&eacute;todos predefinidos es:";
 choices[67]= new Array();
 choices[67][0] = " Polimorfismo.";
 choices[67][1] = " Herencia.";
 choices[67][2] = " Reusabilidad.";
 choices[67][3] = " Encapsulaci&oacute;n.";
 answers[67] = choices[67][3];
 units[67] = "NULL";
 comments[67] = "Id Pregunta: 7970. Map 2007";


//  Id pregunta: 8045 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)   &iquest;En cu&aacute;l de las siguientes zonas del chip del DNIe se almacenan los datos biom&eacute;tricos?";
 choices[68]= new Array();
 choices[68][0] = " Zona p&uacute;blica.";
 choices[68][1] = " Zona privada.";
 choices[68][2] = " Zona de seguridad.";
 choices[68][3] = " Zona compartida.";
 answers[68] = choices[68][2];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 8045. Map 2007";


//  Id pregunta: 8209 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  El establecimiento de un directorio de direcciones de red IP, a partir del cual cada entidad u organismo de la AGE pueda establecer de manera independiente sus planes de numeraci&oacute;n IP, se incluye en:";
 choices[69]= new Array();
 choices[69][0] = "El Plan AVANZA.";
 choices[69][1] = "El Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n.";
 choices[69][2] = "El Plan Estrat&eacute;gico para el desarrollo de la administraci&oacute;n electr&oacute;nica.";
 choices[69][3] = "El Plan de evaluaci&oacute;n de impacto de la Ley 11/2007.";
 answers[69] = choices[69][1];
 units[69] = "44";
 comments[69] = "Id Pregunta: 8209. Examen TIC A1 2010";


//  Id pregunta: 8327 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  ATM se caracteriza, entre otras, por que:";
 choices[70]= new Array();
 choices[70][0] = "Puede funcionar sobre cualquier capa f&iacute;sica";
 choices[70][1] = "Proporciona retransmisi&oacute;n de celdas en caso de detecci&oacute;n de error";
 choices[70][2] = "a y b son ciertas";
 choices[70][3] = "Todas las anteriores son falsas";
 answers[70] = choices[70][0];
 units[70] = "109";
 comments[70] = "Id Pregunta: 8327. Analista Ayto. Madrid 2010";


//  Id pregunta: 8398 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Seg&uacute;n el Real Decreto 1671/2009, las sedes electr&oacute;nicas de la Administraci&oacute;n General del Estado se crean: ";
 choices[71]= new Array();
 choices[71][0] = "Por Orden Ministerial o Resoluci&oacute;n del titular del organismo. ";
 choices[71][1] = "Por Real Decreto del Presidente del Gobierno. ";
 choices[71][2] = "Por Orden Conjunta del Ministerio de la Presidencia y del Ministerio del que se trate. ";
 choices[71][3] = "Por Acuerdo del Consejo Superior de Administraci&oacute;n Electr&oacute;nica. ";
 answers[71] = choices[71][0];
 units[71] = "43";
 comments[71] = "Id Pregunta: 8398. Examen TIC A2 2010";


//  Id pregunta: 8431 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes programas es la continuaci&oacute;n del programa IDABC finalizado en diciembre de 2009?";
 choices[72]= new Array();
 choices[72][0] = "AIF";
 choices[72][1] = "IDA";
 choices[72][2] = "ISA";
 choices[72][3] = "IMA";
 answers[72] = choices[72][2];
 units[72] = "30";
 comments[72] = "Id Pregunta: 8431. ";


//  Id pregunta: 8540 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes algoritmos de cifrado NO se implementa en WiMax?";
 choices[73]= new Array();
 choices[73][0] = "3DES";
 choices[73][1] = "SEAL";
 choices[73][2] = "AES";
 choices[73][3] = "RSA";
 answers[73] = choices[73][1];
 units[73] = "107";
 comments[73] = "Id Pregunta: 8540. Examen TIC A2 2010 interna";


//  Id pregunta: 8915 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con XML:";
 choices[74]= new Array();
 choices[74][0] = "Es un lenguaje de programaci&oacute;n para aplicaciones basadas en Internet.";
 choices[74][1] = "Es un lenguaje de marcado que, al igual que HTML, hace uso de etiquetas (&ldquo;tags&rdquo;).";
 choices[74][2] = "Es un lenguaje independiente de plataforma cuyo objetivo es definir c&oacute;mo un navegador est&aacute;ndar debe presentar la informaci&oacute;n definida en HTML.";
 choices[74][3] = "Es un lenguaje definido por Microsoft para implementar su arquitectura orientada a servicios";
 answers[74] = choices[74][1];
 units[74] = "69";
 comments[74] = "Id Pregunta: 8915. Operador Ayto. Madrid 2010";


//  Id pregunta: 9009 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  No tiene la consideraci&oacute;n de Autoridad Nacional de Reglamentaci&oacute;n de Telecomunicaciones, de conformidad con el art. 46 de la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones:";
 choices[75]= new Array();
 choices[75][0] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[75][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[75][2] = "El Gobierno.";
 choices[75][3] = "Los &oacute;rganos superiores y directivos del Ministerio de Econom&iacute;a y Competitividad que, de conformidad con la estructura org&aacute;nica del departamento, asuman las competencias asignadas a este ministerio en materias reguladas por esta Ley.";
 answers[75] = choices[75][1];
 units[75] = "110";
 comments[75] = "Id Pregunta: 9009. Teleco Ayto. Madrid 2010. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 9042 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[76]= new Array();
 choices[76][0] = "La &uacute;nica manera de implementar SOA es con un Enterprise Service Bus";
 choices[76][1] = "La &uacute;nica manera de implementar SOA es a trav&eacute;s de servicios Web";
 choices[76][2] = "SOA es un concepto que puede ser implementado de varias formas";
 choices[76][3] = "Todas son incorrectas";
 answers[76] = choices[76][2];
 units[76] = "51";
 comments[76] = "Id Pregunta: 9042. NULL";


//  Id pregunta: 9090 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Se pueden proteger las ideas que sirven de base a los programas de ordenador?";
 choices[77]= new Array();
 choices[77][0] = "S&oacute;lo las que sirvan de base para el desarrollo de interfaces";
 choices[77][1] = "S&oacute;lo las que sirvan de base para crear un nuevo programa";
 choices[77][2] = "S&oacute;lo las que sirvan de base para crear un nuevo programa y adem&aacute;s sean originales";
 choices[77][3] = "Todas las anteriores son falsas";
 answers[77] = choices[77][3];
 units[77] = "36";
 comments[77] = "Id Pregunta: 9090. ";


//  Id pregunta: 9147 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Por qu&eacute; la memorias flash de tipo es mucho m&aacute;s r&aacute;pida que las EEPROM convencionales?";
 choices[78]= new Array();
 choices[78][0] = "Es falso. Las memorias EEPROM convencionales son mucho m&aacute;s r&aacute;pidas";
 choices[78][1] = "Se escriben bloques enteros para agilizar el proceso";
 choices[78][2] = "Para el borrado, se limpian bloques enteros para agilizar el proceso, ya que es la parte m&aacute;s lenta del proceso.";
 choices[78][3] = "Borran bit a bit.";
 answers[78] = choices[78][2];
 units[78] = "47";
 comments[78] = "Id Pregunta: 9147. ";


//  Id pregunta: 9415 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Cu&aacute;l de las siguientes no es una m&eacute;trica de l&iacute;neas de c&oacute;digo";
 choices[79]= new Array();
 choices[79][0] = "LOC";
 choices[79][1] = "DSI";
 choices[79][2] = "NSLOC";
 choices[79][3] = "LDSI";
 answers[79] = choices[79][3];
 units[79] = "89";
 comments[79] = "Id Pregunta: 9415. NULL";


//  Id pregunta: 9475 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  En el an&aacute;lisis coste/beneficio de la inversi&oacute;n de un proyecto se considera:";
 choices[80]= new Array();
 choices[80][0] = "S&oacute;lo los beneficios tangibles";
 choices[80][1] = "S&oacute;lo los beneficios intangibles";
 choices[80][2] = "Los beneficios tangibles e intangibles";
 choices[80][3] = "Todas las anteriores son falsas";
 answers[80] = choices[80][2];
 units[80] = "38";
 comments[80] = "Id Pregunta: 9475. ";


//  Id pregunta: 9673 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En Grid Computing:";
 choices[81]= new Array();
 choices[81][0] = "Podemos conseguir cerca del 100% de uso de CPU.";
 choices[81][1] = "Los nodos no tienen que estar dedicados, puesto que su caracter&iacute;stica m&aacute;s importante es que la escalabilidad es parametrizable.";
 choices[81][2] = "Son sistemas heterog&eacute;neos.";
 choices[81][3] = "Todas las anteriores.";
 answers[81] = choices[81][3];
 units[81] = "45";
 comments[81] = "Id Pregunta: 9673. ";


//  Id pregunta: 9739 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes NO es un concepto clave asociado con casos de uso seg&uacute;n la definici&oacute;n de UML 2.4.1?";
 choices[82]= new Array();
 choices[82][0] = "Actors.";
 choices[82][1] = "Use cases.";
 choices[82][2] = "Subject.";
 choices[82][3] = "Scenario.";
 answers[82] = choices[82][3];
 units[82] = "82";
 comments[82] = "Id Pregunta: 9739. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9769 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones muy graves:";
 choices[83]= new Array();
 choices[83][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida.";
 choices[83][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[83][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[83][3] = "La ausencia de cita de la fuente.";
 answers[83] = choices[83][2];
 units[83] = "22";
 comments[83] = "Id Pregunta: 9769. ";


//  Id pregunta: 10163 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el modelo l&oacute;gico relacional, la cardinalidad de una relaci&oacute;n se corresponde con:";
 choices[84]= new Array();
 choices[84][0] = "N&uacute;mero de atributos de la relaci&oacute;n";
 choices[84][1] = "N&uacute;mero m&iacute;nimo de ocurrencias de una entidad que pueden participar en la relaci&oacute;n";
 choices[84][2] = "N&uacute;mero de entidades que participan en la relaci&oacute;n o asociaci&oacute;n";
 choices[84][3] = "N&uacute;mero de tuplas de la relaci&oacute;n";
 answers[84] = choices[84][3];
 units[84] = "58";
 comments[84] = "Id Pregunta: 10163. ";


//  Id pregunta: 10238 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Se&ntilde;ala la tecnolog&iacute;a que soporta transacciones:";
 choices[85]= new Array();
 choices[85][0] = "RMI";
 choices[85][1] = "JTS";
 choices[85][2] = "JMAPI";
 choices[85][3] = "JTA";
 answers[85] = choices[85][3];
 units[85] = "116";
 comments[85] = "Id Pregunta: 10238. NULL";


//  Id pregunta: 10315 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Los conectores LC son:";
 choices[86]= new Array();
 choices[86][0] = "Conectores para PCI.";
 choices[86][1] = "Conectores de par trenzado.";
 choices[86][2] = "Conectores exclusivos para Mainframe.";
 choices[86][3] = "Conectores de fibra &oacute;ptica.";
 answers[86] = choices[86][3];
 units[86] = "99";
 comments[86] = "Id Pregunta: 10315. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10585 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, las URIs:";
 choices[87]= new Array();
 choices[87][0] = "Deben cumplir el principio de persistencia.";
 choices[87][1] = "Deben utilizar el protocolo FTP.";
 choices[87][2] = "Deben exponer informaci&oacute;n sobre la implementaci&oacute;n t&eacute;cnica de sus recursos.";
 choices[87][3] = "Deben usar una estructura consistente y fija.";
 answers[87] = choices[87][0];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10585. Anexo II (Esquema de URI)";


//  Id pregunta: 10617 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ale aquel que se corresponde con un protocolo de establecimiento de claves entre partes:";
 choices[88]= new Array();
 choices[88][0] = "Diffie Hellman";
 choices[88][1] = "RIPEMD";
 choices[88][2] = "Rabbit";
 choices[88][3] = "Blowfish";
 answers[88] = choices[88][0];
 units[88] = "72";
 comments[88] = "Id Pregunta: 10617. ";


//  Id pregunta: 10718 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Qui&eacute;n no es un actor involucrado en el proceso de creaci&oacute;n y validaci&oacute;n de una firma electr&oacute;nica seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[89]= new Array();
 choices[89][0] = "Firmante";
 choices[89][1] = "Receptor";
 choices[89][2] = "Verificador";
 choices[89][3] = "PSC";
 answers[89] = choices[89][1];
 units[89] = "43";
 comments[89] = "Id Pregunta: 10718. ";


//  Id pregunta: 11065 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cual de las afirmaciones es CORRECTA acerca de las diferentes modalidades de demanda, generadas por los negocios de los clientes?";
 choices[90]= new Array();
 choices[90][0] = "Son impulsadas por las pautas de las actividades de los negocios";
 choices[90][1] = "Es imposible predecir como se comportan";
 choices[90][2] = "Es imposible influenciar en las pautas de la demanda";
 choices[90][3] = "Son impulsadas por el calendario de entregas generado por el proceso de Gesti&oacute;n de la Capacidad";
 answers[90] = choices[90][0];
 units[90] = "98";
 comments[90] = "Id Pregunta: 11065. ";


//  Id pregunta: 11107 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seleccione la respuesta correcta sobre los derechos morales irrenunciables de un autor de una obra:";
 choices[91]= new Array();
 choices[91][0] = "Derecho a decidir sobre la divulgaci&oacute;n o no de la obra";
 choices[91][1] = "Respeto a la integridad de la obra";
 choices[91][2] = "Derecho a exigir el reconocimiento de su condici&oacute;n de autor";
 choices[91][3] = "Todas las anteriores";
 answers[91] = choices[91][3];
 units[91] = "36";
 comments[91] = "Id Pregunta: 11107. ";


//  Id pregunta: 11208 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que realicen compras online para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[92]= new Array();
 choices[92][0] = "0.2";
 choices[92][1] = "0.33";
 choices[92][2] = "0.5";
 choices[92][3] = "0.8";
 answers[92] = choices[92][2];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11208. ";


//  Id pregunta: 11223 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En el Framework de .NET, los servicios web:";
 choices[93]= new Array();
 choices[93][0] = "Se definen en ficheros de extensi&oacute;n .asmx incluyendo la directiva WebService.";
 choices[93][1] = "ASP.NET no se puede integrar f&aacute;cilmente con tecnolog&iacute;as como AJAX para construir aplicaciones RIA.";
 choices[93][2] = "Los servicios Web WCF pueden ser SOAP o REST, aunque no soportan un formato no XML como JSON.";
 choices[93][3] = "Los servicios WCF (Windows Communication Foundation) siempre se ejecutan directamente sobre TCP.";
 answers[93] = choices[93][0];
 units[93] = "59";
 comments[93] = "Id Pregunta: 11223. ";


//  Id pregunta: 11250 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Las garant&iacute;as en los contratos NO se:";
 choices[94]= new Array();
 choices[94][0] = "Reponen para responder ante penalizaciones o indemnizaciones.";
 choices[94][1] = "Reutilizan para cubrir necesidades de otro contrato.";
 choices[94][2] = "Reajustan ante variaciones en el precio del contrato, debido a una modificaci&oacute;n de &eacute;ste.";
 choices[94][3] = "Devuelven o cancelan cuando vence el per&iacute;odo de garant&iacute;a del contrato y &eacute;ste se ha cumplido de forma satisfactoria, o cuando se resuelve el contrato, sin que exista culpa por parte del contratista.";
 answers[94] = choices[94][1];
 units[94] = "41";
 comments[94] = "Id Pregunta: 11250. ";


//  Id pregunta: 11346 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  De los siguientes, indique la opci&oacute;n que contiene los modelos correctos contemplados por LDAP";
 choices[95]= new Array();
 choices[95][0] = "informaci&oacute;n; direccionamiento; observable; estructural";
 choices[95][1] = "informaci&oacute;n; direccionamiento; objetivable; estructural";
 choices[95][2] = "informaci&oacute;n; direccionamiento; seguridad; estructural";
 choices[95][3] = "informaci&oacute;n; direccionamiento; seguridad; funcional";
 answers[95] = choices[95][3];
 units[95] = "73";
 comments[95] = "Id Pregunta: 11346. ";


//  Id pregunta: 11526 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seleccione el fichero de Linux que contiene las direcciones de los servidores DNS necesarios para la navegaci&oacute;n por Internet.";
 choices[96]= new Array();
 choices[96][0] = "crontab";
 choices[96][1] = "interfaces";
 choices[96][2] = "resolv.conf";
 choices[96][3] = "dns.conf";
 answers[96] = choices[96][2];
 units[96] = "53";
 comments[96] = "Id Pregunta: 11526. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11573 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Se&ntilde;ale la respuesta incorrecta sobre ADSL 2";
 choices[97]= new Array();
 choices[97][0] = "Emplea un ancho de banda mayor que el ADSL original";
 choices[97][1] = "Puede emplear varias l&iacute;neas telef&oacute;nicas para un &uacute;nica comunicaci&oacute;n";
 choices[97][2] = "Est&aacute; basado en la tecnolog&iacute;a STTH";
 choices[97][3] = "Puede emplear el ancho de banda para telefon&iacute;a obteniendo un amayor velocidad de transmisi&oacute;n de datos.";
 answers[97] = choices[97][2];
 units[97] = "107";
 comments[97] = "Id Pregunta: 11573. NULL";


//  Id pregunta: 11585 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  El m&eacute;todo de normalizaci&oacute;n de puntuaciones que asigna 1 a la puntuaci&oacute;n m&aacute;s alta y que no mantiene la proporcionalidad es:";
 choices[98]= new Array();
 choices[98][0] = "Fracci&oacute;n de la suma";
 choices[98][1] = "Fracci&oacute;n del m&aacute;ximo";
 choices[98][2] = "Fracci&oacute;n del ideal";
 choices[98][3] = "Todas las anteriores son falsas";
 answers[98] = choices[98][2];
 units[98] = "34";
 comments[98] = "Id Pregunta: 11585. ";


//  Id pregunta: 11681 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En el modelo COCOMO, los CDA (Cost Driven Attributes) se utilizan en el modelo:";
 choices[99]= new Array();
 choices[99][0] = "B&aacute;sico";
 choices[99][1] = "Intermedio";
 choices[99][2] = "Avanzado";
 choices[99][3] = "b) y c) son correctos";
 answers[99] = choices[99][3];
 units[99] = "88, 89";
 comments[99] = "Id Pregunta: 11681. ";


