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

//  Id pregunta: 342 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  La red de comunicaci&oacute;n en Y de una organizaci&oacute;n es:";
 choices[0]= new Array();
 choices[0][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[0][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[0][2] = "Cada sujeto se comunica con todos los restantes";
 choices[0][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[0] = choices[0][0];
 units[0] = "23";
 comments[0] = "Id Pregunta: 342. ";


//  Id pregunta: 521 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En relaci&oacute;n con el control de riesgos, &iquest;Qu&eacute;  funci&oacute;n puede no estar segregada de la de analista de sistemas?";
 choices[1]= new Array();
 choices[1][0] = "Programador de aplicaciones";
 choices[1][1] = "Usuario final";
 choices[1][2] = "Administrador de base de datos";
 choices[1][3] = "Aseguramiento de la calidad";
 answers[1] = choices[1][0];
 units[1] = "31, 32, 33";
 comments[1] = "Id Pregunta: 521. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 542 AÃ±o de creación de pregunta: 2003-01-01
 questions[2]= "3)  WAI se refiere a:";
 choices[2]= new Array();
 choices[2][0] = "Accesibilidad de p&aacute;ginas web.";
 choices[2][1] = "Interfaces para redes de &aacute;rea local.";
 choices[2][2] = "Interfaces para redes metropolitanas.";
 choices[2][3] = "Interfaces de acceso Wi-Fi.";
 answers[2] = choices[2][0];
 units[2] = "39";
 comments[2] = "Id Pregunta: 542. ";


//  Id pregunta: 558 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Cualquier sistema de informaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "No es independiente de los objetivos de la organizaci&oacute;n.";
 choices[3][1] = "Debe estar interrelacionado con los dem&aacute;s sistemas de la organizaci&oacute;n.";
 choices[3][2] = "No es independiente de las estrategias de la organizaci&oacute;n.";
 choices[3][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[3] = choices[3][3];
 units[3] = "21";
 comments[3] = "Id Pregunta: 558. ";


//  Id pregunta: 562 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Seg&uacute;n AlvinToffler las organizaciones tradicionales tienen dos elementos caracter&iacute;sticos";
 choices[4]= new Array();
 choices[4][0] = "jararqu&iacute;as y las relaciones entre las jerarqu&iacute;as";
 choices[4][1] = "los especialistas y los gerentes";
 choices[4][2] = "Cub&iacute;culos y canales";
 choices[4][3] = "controles y procedimientos";
 answers[4] = choices[4][2];
 units[4] = "22";
 comments[4] = "Id Pregunta: 562. ";


//  Id pregunta: 665 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Cuando el autor sea una persona jur&iacute;dica, la duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador ser&aacute; como m&aacute;ximo";
 choices[5]= new Array();
 choices[5][0] = "70 a&ntilde;os";
 choices[5][1] = "60 a&ntilde;os";
 choices[5][2] = "100 a&ntilde;os";
 choices[5][3] = "50 a&ntilde;os";
 answers[5] = choices[5][0];
 units[5] = "36";
 comments[5] = "Id Pregunta: 665. ";


//  Id pregunta: 895 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;En qu&eacute; conjunto de caracteres est&aacute; basado XML?:";
 choices[6]= new Array();
 choices[6][0] = "Unicode";
 choices[6][1] = "ITU 396-4";
 choices[6][2] = "ANSI 328";
 choices[6][3] = "Ninguno de los anteriores";
 answers[6] = choices[6][0];
 units[6] = "69";
 comments[6] = "Id Pregunta: 895. NULL";


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


//  Id pregunta: 1112 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En la terminolog&iacute;a de software libre:";
 choices[8]= new Array();
 choices[8][0] = "El software libre no tiene porque ser gratis";
 choices[8][1] = "Las licencias existentes no ponen ning&uacute;n tipo de limitaciones a su modificaci&oacute;n";
 choices[8][2] = "A la hora de redistribuir el software, s&oacute;lo podemos redistribuir las fuentes";
 choices[8][3] = "El uso de software considerado como libre s&oacute;lo est&aacute; disponible para determinadas plataformas, por incompatibilidades t&eacute;cnicas";
 answers[8] = choices[8][0];
 units[8] = "61";
 comments[8] = "Id Pregunta: 1112. ";


//  Id pregunta: 1749 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  Qu&eacute; t&eacute;cnica se utiliza para eliminar la posible colisi&oacute;n de distintas peticiones de actualizaci&oacute;n simult&aacute;neas sobre un mismo dato de la base de datos";
 choices[9]= new Array();
 choices[9][0] = "Como el rendimiento de la inversi&oacute;n expresado en t&eacute;rminos de porcentaje";
 choices[9][1] = "Bloqueo";
 choices[9][2] = "Inter-Roll";
 choices[9][3] = "Roll-back";
 answers[9] = choices[9][1];
 units[9] = "58";
 comments[9] = "Id Pregunta: 1749. ";


//  Id pregunta: 1758 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  En la arquitectura de la plataforma .NET ";
 choices[10]= new Array();
 choices[10][0] = "CLR es el entorno de ejecuci&oacute;n para .NET";
 choices[10][1] = "CLS  define las reglas que debe cumplir todo lenguaje que quiera trabajar con .NET.";
 choices[10][2] = "WebForms se utiliza para el desarrollo de aplicaciones dirigidas a Internet";
 choices[10][3] = "Todas son correctas";
 answers[10] = choices[10][3];
 units[10] = "59";
 comments[10] = "Id Pregunta: 1758. ";


//  Id pregunta: 2478 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Por configuraci&oacute;n se entiende:";
 choices[11]= new Array();
 choices[11][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema.";
 choices[11][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas.";
 choices[11][2] = "Descripci&oacute;n completa de un producto software y las interrelaciones de sus elementos.";
 choices[11][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior.";
 answers[11] = choices[11][2];
 units[11] = "90";
 comments[11] = "Id Pregunta: 2478. ";


//  Id pregunta: 2569 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  El denominado &quot; principio de Pareto&quot; empleado frecuentemente en el enfoque estad&iacute;stico de Garant&iacute;a de Calidad en desarrollo del SW establece que:";
 choices[12]= new Array();
 choices[12][0] = "El n&uacute;mero de defectos del SW crece exponencialmente con el n&uacute;mero de nicveles jer&aacute;rquicos presentes en el equipo de desarrollo";
 choices[12][1] = "El 80% de los defectos tienen su origen com&uacute;n en el 20% de los factores causantes";
 choices[12][2] = "Cuando un buen programador es ascendido a analista la tasa de errores se duplica, con un nivel de confianza del 95%";
 choices[12][3] = "Para una complejidad dda en un proyecto inform&aacute;tico el n&uacute;mero de errores se duplica cada per&iacute;odo de 18 meses o fracci&oacute;n";
 answers[12] = choices[12][1];
 units[12] = "87,88,92";
 comments[12] = "Id Pregunta: 2569. ";


//  Id pregunta: 2753 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;Cu&aacute;les son las cuatro fases del proceso unificado de desarrollo de software?";
 choices[13]= new Array();
 choices[13][0] = "Comienzo, incepci&oacute;n, transici&oacute;n y fin";
 choices[13][1] = "An&aacute;lisis, Dise&ntilde;o, Implementaci&oacute;n y pruebas";
 choices[13][2] = "An&aacute;lisis de requisitos, dise&ntilde;o, desarrollo y pruebas";
 choices[13][3] = "Inicio, elaboraci&oacute;n, construcci&oacute;n y transici&oacute;n";
 answers[13] = choices[13][3];
 units[13] = "82";
 comments[13] = "Id Pregunta: 2753. ";


//  Id pregunta: 2936 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es uno de los estadios en la estandarizaci&oacute;n del IAB?";
 choices[14]= new Array();
 choices[14][0] = "Borrador de Internet";
 choices[14][1] = "Est&aacute;ndar propuesto";
 choices[14][2] = "Borrador de est&aacute;ndar";
 choices[14][3] = "Est&aacute;ndar temporal";
 answers[14] = choices[14][3];
 units[14] = "112,42";
 comments[14] = "Id Pregunta: 2936. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2953 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[15]= new Array();
 choices[15][0] = "CSMA/CD";
 choices[15][1] = "Token bus";
 choices[15][2] = "Token Ring";
 choices[15][3] = "Aloha ranurado";
 answers[15] = choices[15][1];
 units[15] = "101, 102";
 comments[15] = "Id Pregunta: 2953. Similar a examen TIC SS A 2003";


//  Id pregunta: 3247 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso b&aacute;sico RDSI en Europa?:";
 choices[16]= new Array();
 choices[16][0] = "8 Kbps";
 choices[16][1] = "16 Kbps";
 choices[16][2] = "32 Kbps";
 choices[16][3] = "64 Kbps";
 answers[16] = choices[16][1];
 units[16] = "103";
 comments[16] = "Id Pregunta: 3247. ";


//  Id pregunta: 3751 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  MIB son unas siglas asociadas a:";
 choices[17]= new Array();
 choices[17][0] = "SGBD orientadas a objetos";
 choices[17][1] = "Lenguaje de programaci&oacute;n C++";
 choices[17][2] = "Sistemas de gesti&oacute;n de redes";
 choices[17][3] = "Sistemas OLAP";
 answers[17] = choices[17][2];
 units[17] = "104";
 comments[17] = "Id Pregunta: 3751. ";


//  Id pregunta: 4065 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Que tendencias se observan en los servicios de telecomunicaciones";
 choices[18]= new Array();
 choices[18][0] = "La convergencia de las redes de voz y datos";
 choices[18][1] = "La convergencia de las tecnolog&iacute;as de telefonia movil y las tecnolog&iacute;as wireless como wi-fi";
 choices[18][2] = "Ninguna de las anteriores";
 choices[18][3] = "tanto la opci&oacute;n a como la b";
 answers[18] = choices[18][3];
 units[18] = "102,107,108";
 comments[18] = "Id Pregunta: 4065. ";


//  Id pregunta: 4082 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  El protocolo y puerto empleado para la transferencia de p&aacute;ginas web es";
 choices[19]= new Array();
 choices[19][0] = "html y 80";
 choices[19][1] = "http y 80";
 choices[19][2] = "http y 8080";
 choices[19][3] = "ftp y 80";
 answers[19] = choices[19][1];
 units[19] = "113";
 comments[19] = "Id Pregunta: 4082. ";


//  Id pregunta: 4266 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  Indique cu&aacute;l de los siguientes no es un servicio LDAP";
 choices[20]= new Array();
 choices[20][0] = "READ";
 choices[20][1] = "COMPARE";
 choices[20][2] = "ADD";
 choices[20][3] = "ABANDON";
 answers[20] = choices[20][0];
 units[20] = "74";
 comments[20] = "Id Pregunta: 4266. NULL";


//  Id pregunta: 4830 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  En relaci&oacute;n a los lenguajes XML (eXtensible Markup Language) y RDF (Resource Description Framework), &iquest;cu&aacute;l delas siguientes afirmaciones es cierta?";
 choices[21]= new Array();
 choices[21][0] = "XML Schema proporciona soporte para la interoperabilidad sem&aacute;ntica";
 choices[21][1] = "RDF utiliza XML como sintaxis com&uacute;n para el intercambio de metadatos";
 choices[21][2] = "RDF est&aacute; compuesto &uacute;nicamente de propiedades y enunciados";
 choices[21][3] = "XML Schema no tiene tipos predefinidos";
 answers[21] = choices[21][1];
 units[21] = "69";
 comments[21] = "Id Pregunta: 4830. NULL";


//  Id pregunta: 5495 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  Los archivos EAR, seg&uacute;n la tecnolog&iacute;a Java EE:";
 choices[22]= new Array();
 choices[22][0] = "C&oacute;mprime s&oacute;lo archivos .class ";
 choices[22][1] = "Son un tipo de archivo JAR";
 choices[22][2] = "No existen tales archivos. S&oacute;lo hay archivos WAR";
 choices[22][3] = "Es un empaquetado de archivos XML";
 answers[22] = choices[22][1];
 units[22] = "60";
 comments[22] = "Id Pregunta: 5495. NULL";


//  Id pregunta: 5695 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  La firma realizada a trav&eacute;s del DNI electr&oacute;nico:";
 choices[23]= new Array();
 choices[23][0] = "Tiene valor jur&iacute;dico, pero no equivale a la firma manuscrita";
 choices[23][1] = " Tiene el mismo valor jur&iacute;dico que la firma manuscrita";
 choices[23][2] = "No tiene valor jur&iacute;dico";
 choices[23][3] = "Su valor jur&iacute;dico queda a discreci&oacute;n de un juez";
 answers[23] = choices[23][1];
 units[23] = "74";
 comments[23] = "Id Pregunta: 5695. NULL";


//  Id pregunta: 5926 AÃ±o de creación de pregunta: 2009-01-01
 questions[24]= "25)  Para aumentar las posibilidades de interacci&oacute;n con la Web, se promueven tecnolog&iacute;as como JavaScript, applets, ActiveX,..., de entre las afirmaciones siguientes, &iquest;cu&aacute;l se refiere a los &quot;applets de Java&quot;?:";
 choices[24]= new Array();
 choices[24][0] = "Son programas residentes en el servidor, que se ejecutan en el mismo bajo solicitud de un cliente, para recoger o enviar alg&uacute;n tipo de informaci&oacute;n especial del cliente";
 choices[24][1] = "Son programas que se ejecutan bajo el entorno Java del navegador, en un espacio de memoria aparte, llamado &quot;Sandbox&quot;";
 choices[24][2] = "Son trozos de c&oacute;digo que se a&ntilde;aden a los browsers para obtener nuevos servicios y cuya fiabilidad queda garantizada por la obligatoriedad del uso de la tecnologia &quot;authenticode&quot;";
 choices[24][3] = "La forma de controlar la fiabilidad y seguridad de esta tecnolog&iacute;a consiste &uacute;nicamente en el sistema de verificaci&oacute;n digital y de firmas electr&oacute;nicas";
 answers[24] = choices[24][1];
 units[24] = "60";
 comments[24] = "Id Pregunta: 5926. MAP 2008 A1";


//  Id pregunta: 5973 AÃ±o de creación de pregunta: 2010-01-01
 questions[25]= "26)  Cu&aacute;l de las siguientes afirmaciones es aplicable a la reingenier&iacute;a basada en &quot;wrapping&quot;:";
 choices[25]= new Array();
 choices[25][0] = "&quot;Wrapping&quot; consiste en envolver interfaces basadas en texto con un entorno gr&aacute;fico basado en GUI o en HTML.";
 choices[25][1] = "La t&eacute;cnica &quot;wrapping&quot; es actualmente conocida como modernizaci&oacute;n de caja blanca.";
 choices[25][2] = "&quot;Wrapping&quot; es una reingenier&iacute;a en las que s&oacute;lo se analizan las interfaces (las entradas y salidas) del &quot;legacy&quot; ignorando los detalles internos.";
 choices[25][3] = "&quot;Wrapping&quot; es una reingenier&iacute;a mediante la cual se produce documentaci&oacute;n retroactivamente desde un sistema existente.";
 answers[25] = choices[25][2];
 units[25] = "91";
 comments[25] = "Id Pregunta: 5973. TIC A 2009";


//  Id pregunta: 6080 AÃ±o de creación de pregunta: 2010-01-01
 questions[26]= "27)  La gesti&oacute;n de los recursos humanos del proyecto incluye lo siguiente:";
 choices[26]= new Array();
 choices[26][0] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[26][1] = "Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[26][2] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto.";
 choices[26][3] = "Ninguna de las anteriores.";
 answers[26] = choices[26][0];
 units[26] = "27";
 comments[26] = "Id Pregunta: 6080. ";


//  Id pregunta: 6098 AÃ±o de creación de pregunta: 2010-01-01
 questions[27]= "28)  &iquest;Cu&aacute;les son las dimensiones de la interoperabilidad seg&uacute;n el Marco Europeo de Interoperabilidad?";
 choices[27]= new Array();
 choices[27][0] = "Organizativa, sem&aacute;ntica y t&eacute;cnica.";
 choices[27][1] = "Legal, sem&aacute;ntica y econ&oacute;mica.";
 choices[27][2] = "Organizativa, ling&uuml;&iacute;stica e inform&aacute;tica.";
 choices[27][3] = "Ninguna, porque el Marco Europeo de Interoperabilidad no est&aacute; todav&iacute;a adoptado por la Comisi&oacute;n Europea.";
 answers[27] = choices[27][0];
 units[27] = "40";
 comments[27] = "Id Pregunta: 6098. TIC A 2009";


//  Id pregunta: 6287 AÃ±o de creación de pregunta: 2010-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes no es una tarea de la actividad de Identificaci&oacute;n de Requisitos, en la Planificaci&oacute;n de un Sistema de Informaci&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "Estudio de los Procesos del PSI";
 choices[28][1] = "An&aacute;lisis de las Necesidades de la Informaci&oacute;n";
 choices[28][2] = "Catalogaci&oacute;n de Requisitos";
 choices[28][3] = "Todas lo son";
 answers[28] = choices[28][3];
 units[28] = "77";
 comments[28] = "Id Pregunta: 6287. ";


//  Id pregunta: 6338 AÃ±o de creación de pregunta: 2010-01-01
 questions[29]= "30)  Si se dispone correctamente una soluci&oacute;n CRM, &iquest;qu&eacute; ventajas puede reportar?. Se&ntilde;ale la falsa:";
 choices[29]= new Array();
 choices[29][0] = "Reducci&oacute;n de los costes del centro de contacto.";
 choices[29][1] = "Aumento de la satisfacci&oacute;n de los clientes y de los porcentajes de conversi&oacute;n de las ventas.";
 choices[29][2] = "Mejora de los resultados de ventas en todos los canales (directos, indirectos y a trav&eacute;s de socios).";
 choices[29][3] = "Aumento de los costes de las operaciones del servicio &ldquo;in situ&rdquo;. ";
 answers[29] = choices[29][3];
 units[29] = "65";
 comments[29] = "Id Pregunta: 6338. ";


//  Id pregunta: 6351 AÃ±o de creación de pregunta: 2010-01-01
 questions[30]= "31)  La ley sobre reutilizaci&oacute;n de la informaci&oacute;n  del sector p&uacute;blico es la ley";
 choices[30]= new Array();
 choices[30][0] = "Ley 37/2007";
 choices[30][1] = "Ley 32/2005";
 choices[30][2] = "Ley 25/2007";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = choices[30][0];
 units[30] = "30";
 comments[30] = "Id Pregunta: 6351. Ley 37/2007";


//  Id pregunta: 8003 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)   El CMM-CMMI es:";
 choices[31]= new Array();
 choices[31][0] = " Un conjunto de normas de seguridad f&iacute;sica (perimetral), antiintrusivas (firewall) y antiincendios de aplicaci&oacute;n en centros de proceso de datos.";
 choices[31][1] = " Un modelo de desarrollo de software jer&aacute;rquico orientado a objetos.";
 choices[31][2] = " Un modelo de calidad del software que clasifica en cinco los niveles de madurez.";
 choices[31][3] = " Un modelo est&aacute;ndar de seguridad ante ataques por Internet.";
 answers[31] = choices[31][2];
 units[31] = "NULL";
 comments[31] = "Id Pregunta: 8003. Map 2007";


//  Id pregunta: 8295 AÃ±o de creación de pregunta: 2011-01-01
 questions[32]= "33)  El protocolo FTP es un protocolo: ";
 choices[32]= new Array();
 choices[32][0] = "Seguro.";
 choices[32][1] = "Orientado a conexi&oacute;n.";
 choices[32][2] = "De nivel de enlace.";
 choices[32][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red. ";
 answers[32] = choices[32][1];
 units[32] = "100";
 comments[32] = "Id Pregunta: 8295. Examen TIC A2 2010";


//  Id pregunta: 8309 AÃ±o de creación de pregunta: 2011-01-01
 questions[33]= "34)  Respecto a la Web 2.0 se puede afirmar que: ";
 choices[33]= new Array();
 choices[33][0] = "Transforma software del web hacia la plataforma de escritorio. ";
 choices[33][1] = "Se trata de una actitud evolutiva, m&aacute;s que una tecnolog&iacute;a. ";
 choices[33][2] = "Pretende sustituir a las redes sociales, al manejar usuarios y comunidades. ";
 choices[33][3] = "Encapsula APIs o XML para impedir que las aplicaciones puedan ser manipuladas por otros.";
 answers[33] = choices[33][1];
 units[33] = "120";
 comments[33] = "Id Pregunta: 8309. Examen TIC A2 2010";


//  Id pregunta: 8359 AÃ±o de creación de pregunta: 2011-01-01
 questions[34]= "35)  En el proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (seg&uacute;n M&eacute;trica v3), &iquest;qu&eacute; acci&oacute;n realiza el grupo de Aseguramiento de la Calidad en relaci&oacute;n a1 Plan de Pruebas?";
 choices[34]= new Array();
 choices[34][0] = "Define su contenido.";
 choices[34][1] = "Revisa los resultados de pruebas ejecutadas en este proceso.";
 choices[34][2] = "Revisa la existencia de una normativa para la gesti&oacute;n de los resultados de las pruebas, que permita constatar que se han realizado y descubrir las diferencias entre los resultados esperados y los obtenidos.";
 choices[34][3] = "Coordina su realizaci&oacute;n para que cumplan en su definici&oacute;n los crltenos establecidos en el plan de aseguramiento de calidad.";
 answers[34] = choices[34][2];
 units[34] = "86";
 comments[34] = "Id Pregunta: 8359. Examen TIC A2 2010";


//  Id pregunta: 8473 AÃ±o de creación de pregunta: 2011-01-01
 questions[35]= "36)  &iquest;Cual de las siguientes afirmaciones sobre los cables EIA/TIA/568B de categoria 6 es correcta?";
 choices[35]= new Array();
 choices[35][0] = "Tiene un ancho de banda de hasta 10 Ghz en cada par.";
 choices[35][1] = "Se suele usar para transmitir a velocidades de 1 Gbps.";
 choices[35][2] = "No permite implementar Power over Ethernet (PoE).";
 choices[35][3] = "S&oacute;lo est&aacute; disponible de forma experimental.";
 answers[35] = choices[35][1];
 units[35] = "99";
 comments[35] = "Id Pregunta: 8473. Examen TIC A2 2010 interna";


//  Id pregunta: 8645 AÃ±o de creación de pregunta: 2011-01-01
 questions[36]= "37)  Indique cu&aacute;l es la respuesta correcta con respecto a los diagramas PERT:";
 choices[36]= new Array();
 choices[36][0] = "Los arcos del grafo representan los sucesos, y los v&eacute;rtices las actividades.";
 choices[36][1] = "En la matriz de encadenamientos aquellas columnas en las que no aparece ninguna X indican las actividades que no tienen ninguna actividad siguiente, es decir, aquellas actividades cuyo suceso final coincide con el suceso fin del proyecto.";
 choices[36][2] = "El cuadro de prelaciones est&eacute; formado por tres columnas En la primera columna est&aacute;n representadas todas las actividades en que se ha descompuesto el proyecto. En la segunda columna figuran las actividades precedentes de su hom&oacute;loga en la primera columna y en la &uacute;ltima columna se muestran las actividades posteriores.";
 choices[36][3] = "La matriz de encadenamientos consiste en una matriz cuadrada cuya dimensi&oacute;n es igual al n&uacute;mero de sucesos en que se ha descompuesto el proyecto.";
 answers[36] = choices[36][1];
 units[36] = "28";
 comments[36] = "Id Pregunta: 8645. Examen TIC A2 2010 interna";


//  Id pregunta: 8776 AÃ±o de creación de pregunta: 2011-01-01
 questions[37]= "38)  &iquest;Que puerto utiliza NNTP?";
 choices[37]= new Array();
 choices[37][0] = "119";
 choices[37][1] = "53";
 choices[37][2] = "137";
 choices[37][3] = "139";
 answers[37] = choices[37][0];
 units[37] = "112";
 comments[37] = "Id Pregunta: 8776. Examen UPM A2 2011";


//  Id pregunta: 8847 AÃ±o de creación de pregunta: 2011-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l es la tecnolog&iacute;a que permite una mayor velocidad de transferencia de datos?";
 choices[38]= new Array();
 choices[38][0] = " EDGE";
 choices[38][1] = "HSDPA";
 choices[38][2] = " UMTS/3G";
 choices[38][3] = "GPRS";
 answers[38] = choices[38][1];
 units[38] = "108";
 comments[38] = "Id Pregunta: 8847. Examen UC3M 2010";


//  Id pregunta: 8859 AÃ±o de creación de pregunta: 2011-01-01
 questions[39]= "40)  Los dos enfoques m&aacute;s habituales de la virtualizaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[39]= new Array();
 choices[39][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[39][1] = "Paralela y mediante hipervisor (bare metal)";
 choices[39][2] = "Balanceada y mediante SPM (Service Platform Manager)";
 choices[39][3] = "Mediante hipervisor (bare metal) y mediante supervisor (full metal)";
 answers[39] = choices[39][0];
 units[39] = "119";
 comments[39] = "Id Pregunta: 8859. Analista Ayto. Madrid 2010";


//  Id pregunta: 8865 AÃ±o de creación de pregunta: 2011-01-01
 questions[40]= "41)  Que algoritmo de ordenaci&oacute;n consiste en comparar pares de elementos adyacentes e intercambiarlos entre s&iacute; hasta que est&eacute;n todos ordenados:";
 choices[40]= new Array();
 choices[40][0] = "Insercci&oacute;n";
 choices[40][1] = "Burbuja";
 choices[40][2] = "Selecci&oacute;n";
 choices[40][3] = "Combinaci&oacute;n";
 answers[40] = choices[40][1];
 units[40] = "63, 64";
 comments[40] = "Id Pregunta: 8865. Analista Ayto. Madrid 2010";


//  Id pregunta: 8880 AÃ±o de creación de pregunta: 2011-01-01
 questions[41]= "42)  Un driver JDBC de tipo 4 es aquel que cumple:";
 choices[41]= new Array();
 choices[41][0] = "Es un driver escrito en java que habla con un middleware en el lado del servidor.";
 choices[41][1] = "Es un driver escrito en java que emplea el protocolo nativo de la base de datos.";
 choices[41][2] = "Es un driver que habla con la librer&iacute;a nativa de base de datos en el cliente y esta comunica por red con la base de datos.";
 choices[41][3] = "JDBC solamente tiene drivers de hasta tipo 3 inclusive.";
 answers[41] = choices[41][1];
 units[41] = "57, 58";
 comments[41] = "Id Pregunta: 8880. Examen UPM A2 2011";


//  Id pregunta: 8974 AÃ±o de creación de pregunta: 2011-01-01
 questions[42]= "43)  Seg&uacute;n las definiciones incluidas en el art. 5 del R.D. 1720/2007, &ldquo;la persona f&iacute;sica o jur&iacute;dica, p&uacute;blica o privada u &oacute;rgano administrativo, al que se revelen los datos&rdquo; es:";
 choices[42]= new Array();
 choices[42][0] = "Encargado del tratamiento";
 choices[42][1] = "Destinatario o cesionario";
 choices[42][2] = "Afectado o interesado";
 choices[42][3] = "Tercero";
 answers[42] = choices[42][1];
 units[42] = "29";
 comments[42] = "Id Pregunta: 8974. ";


//  Id pregunta: 9100 AÃ±o de creación de pregunta: 2013-01-01
 questions[43]= "44)  De los siguientes elementos, &iquest; cu&aacute;les no est&aacute;n definidos por el lenguaje ODRL?";
 choices[43]= new Array();
 choices[43][0] = "Assets.";
 choices[43][1] = "Rights.";
 choices[43][2] = "Resources.";
 choices[43][3] = "Parties.";
 answers[43] = choices[43][2];
 units[43] = "37";
 comments[43] = "Id Pregunta: 9100. ";


//  Id pregunta: 9156 AÃ±o de creación de pregunta: 2013-01-01
 questions[44]= "45)  La gu&iacute;a AGR010 de la AICC NO tiene entre sus objetivos:";
 choices[44]= new Array();
 choices[44][0] = "El mecanismo que utiliza el CMI para lanzar el contenido CBT";
 choices[44][1] = "Los mecanismos y datos comunes para la comunicaci&oacute;n entre CMI y CBT";
 choices[44][2] = "Las interfaces de usuario comunes entre el CBT y cualquier LMS";
 choices[44][3] = "Una definici&oacute;n com&uacute;n para la organizaci&oacute;n y secuencia del contenido CBT dentro de un curso";
 answers[44] = choices[44][2];
 units[44] = "66";
 comments[44] = "Id Pregunta: 9156. ";


//  Id pregunta: 9178 AÃ±o de creación de pregunta: 2013-01-01
 questions[45]= "46)  Si hablamos de formatos para el almacenamiento de ficheros de im&aacute;genes, &iquest;cu&aacute;l de ellos puede considerarse una extensi&oacute;n de los dem&aacute;s, y permite el almacenamiento de cualquier tipo de fichero, no &uacute;nicamente gr&aacute;fico?:";
 choices[45]= new Array();
 choices[45][0] = "PAM";
 choices[45][1] = "PBM";
 choices[45][2] = "PGM";
 choices[45][3] = "PPM";
 answers[45] = choices[45][0];
 units[45] = "93";
 comments[45] = "Id Pregunta: 9178. NULL";


//  Id pregunta: 9340 AÃ±o de creación de pregunta: 2013-01-01
 questions[46]= "47)  La t&eacute;cnica de McCabe permite medir:";
 choices[46]= new Array();
 choices[46][0] = "la productividad del software";
 choices[46][1] = "la complejidad del software";
 choices[46][2] = "la fiabilidad del software";
 choices[46][3] = "Ninguna de las tres";
 answers[46] = choices[46][1];
 units[46] = "88";
 comments[46] = "Id Pregunta: 9340. NULL";


//  Id pregunta: 9348 AÃ±o de creación de pregunta: 2013-01-01
 questions[47]= "48)  En RDSI, en el lado del operador:";
 choices[47]= new Array();
 choices[47][0] = "La Terminaci&oacute;n de Central se encarga de manejar el protocolo de enlace de datos.";
 choices[47][1] = "La terminaci&oacute;n de L&iacute;nea se encarga de manejar el protocolo de enlace de datos.";
 choices[47][2] = "La terminaci&oacute;n de central est&aacute; entre la interfaz U y V.";
 choices[47][3] = "La Terminaci&oacute;n de L&iacute;nea est&aacute; entre la interfaz U y T.";
 answers[47] = choices[47][0];
 units[47] = "103";
 comments[47] = "Id Pregunta: 9348. ASTIC 2011 pag 8";


//  Id pregunta: 9378 AÃ±o de creación de pregunta: 2013-01-01
 questions[48]= "49)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[48]= new Array();
 choices[48][0] = "ELECTRE";
 choices[48][1] = "PROMETHEE";
 choices[48][2] = "TOPSIS";
 choices[48][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[48] = choices[48][0];
 units[48] = "34";
 comments[48] = "Id Pregunta: 9378. ";


//  Id pregunta: 9443 AÃ±o de creación de pregunta: 2013-01-01
 questions[49]= "50)  En un diagrama de transici&oacute;n de estados, seg&uacute;n M&eacute;trica v3:";
 choices[49]= new Array();
 choices[49][0] = "Se puede representar m&aacute;s de un estado inicial, que ir&aacute;n conectados al primer estado del diagrama.";
 choices[49][1] = "En los sistemas de tiempo real puede haber transiciones que partan del estado final.";
 choices[49][2] = "Pueden existir varios estados finales, pero ser&aacute;n mutuamente excluyentes.";
 choices[49][3] = "Los elementos permitidos ser&aacute;n &uacute;nicamente estados, transiciones y acciones.";
 answers[49] = choices[49][2];
 units[49] = "86";
 comments[49] = "Id Pregunta: 9443. Examen AGE TIC A1 2011";


//  Id pregunta: 9601 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  &iquest;Qu&eacute; componentes se ubican en el n&uacute;cleo dependiente del sistema operativo UNIX?";
 choices[50]= new Array();
 choices[50][0] = "Las interrupciones";
 choices[50][1] = "El scheduler";
 choices[50][2] = "Los drivers de los dispositivos";
 choices[50][3] = "a) y c) son correctas";
 answers[50] = choices[50][3];
 units[50] = "53";
 comments[50] = "Id Pregunta: 9601. ";


//  Id pregunta: 9672 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  En un cl&uacute;ster:";
 choices[51]= new Array();
 choices[51][0] = "Puede elegirse el porcentaje de procesamiento que cada nodo dedica al cl&uacute;ster.";
 choices[51][1] = "El algoritmo que distribuye el trabajo entre los nodos se conoce como 'Gang Scheduling'.";
 choices[51][2] = "El middleware m&aacute;s utilizado es Xware.";
 choices[51][3] = "Los nodos comparten una memoria central.";
 answers[51] = choices[51][1];
 units[51] = "45";
 comments[51] = "Id Pregunta: 9672. ";


//  Id pregunta: 9774 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  TinyOS, cuyo dise&ntilde;o est&aacute; orientado a sistemas embebidos inal&aacute;mbricos de baja potencia, est&aacute; escrito en el lenguaje:";
 choices[52]= new Array();
 choices[52][0] = "Java ";
 choices[52][1] = "Python ";
 choices[52][2] = ".Net";
 choices[52][3] = "nesC ";
 answers[52] = choices[52][3];
 units[52] = "52";
 comments[52] = "Id Pregunta: 9774. Examen TIC A2 2013";


//  Id pregunta: 9787 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  Cual de los siguientes NO es un elemento VoiceXML 2.0:";
 choices[53]= new Array();
 choices[53][0] = "&lt;input&gt;";
 choices[53][1] = "&lt;transfer&gt; ";
 choices[53][2] = "&lt;object&gt;";
 choices[53][3] = "&lt;log&gt; ";
 answers[53] = choices[53][0];
 units[53] = "94";
 comments[53] = "Id Pregunta: 9787. Examen TIC A2 2013";


//  Id pregunta: 9843 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l es el m&eacute;todo que se recomienda para proteger los datos en una WLAN?";
 choices[54]= new Array();
 choices[54][0] = "Utilizar el cifrado.";
 choices[54][1] = "Utilizar el SSID de no difusi&oacute;n.";
 choices[54][2] = "Establecer la energ&iacute;a transmitida al ajuste m&aacute;s s&oacute;lido.";
 choices[54][3] = "Utilizar el canal 7 en lugar de cualquier otro canal en los espectros de 2,4 GHz.";
 answers[54] = choices[54][0];
 units[54] = "111";
 comments[54] = "Id Pregunta: 9843. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9906 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  En el modelo CMM (Capability Maturity Model) un grado mayor de madurez al nivel Repetible es:";
 choices[55]= new Array();
 choices[55][0] = "Optimizado";
 choices[55][1] = "Definido";
 choices[55][2] = "Gestionado";
 choices[55][3] = "Inicial";
 answers[55] = choices[55][1];
 units[55] = "87";
 comments[55] = "Id Pregunta: 9906. TIC A2, Examen 2013";


//  Id pregunta: 9963 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  Un almac&eacute;n de datos (Data Warehouse) NO se caracteriza por ser:";
 choices[56]= new Array();
 choices[56][0] = "Integrado, los datos en el almac&eacute;n de datos deben integrarse en una estructura consistente.";
 choices[56][1] = "Orientado por temas, el almac&eacute;n de datos est&aacute; organizado de acuerdo con los temas m&aacute;s importantes para la organizaci&oacute;n";
 choices[56][2] = "Variable en el tiempo, los datos en el almac&eacute;n de datos siempre se cargan con una referencia temporal bajo la que son v&aacute;lidos.";
 choices[56][3] = "Vol&aacute;til, los datos en el almac&eacute;n de datos son le&iacute;dos, actualizados y eliminados.";
 answers[56] = choices[56][3];
 units[56] = "68,71";
 comments[56] = "Id Pregunta: 9963. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9964 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[57]= new Array();
 choices[57][0] = "System Data Type (SDT)";
 choices[57][1] = "Common Type System (CTS)";
 choices[57][2] = "Common Data Integration (CDI)";
 choices[57][3] = "Data Type Core (DTC)";
 answers[57] = choices[57][1];
 units[57] = "59,115";
 comments[57] = "Id Pregunta: 9964. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10040 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  En una empresa con 2.000 puestos de usuario final en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X red B: 192.168.1.X y red C: 195.57.72.X. Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;en qu&eacute; subred ubicar&iacute;a los servidores web p&uacute;blicos?";
 choices[58]= new Array();
 choices[58][0] = "Red A.";
 choices[58][1] = "Red B.";
 choices[58][2] = "Red C.";
 choices[58][3] = "Indistintamente en la red B o en la red C.";
 answers[58] = choices[58][2];
 units[58] = "100";
 comments[58] = "Id Pregunta: 10040. TIC A2, promoci&oacute;n interna, examen 3013";


//  Id pregunta: 10056 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  Indique de entre las siguientes cu&aacute;l es la definici&oacute;n de secr&aacute;fono:";
 choices[59]= new Array();
 choices[59][0] = "Equipo de frontera que, situado fuera de la red interna, ofrece servicios al exterior.";
 choices[59][1] = "Equipo infectado por un atacante remoto no detectado.";
 choices[59][2] = "Equipo que genera y entrega claves criptogr&aacute;ficas para su distribuci&oacute;n.";
 choices[59][3] = "Equipo para realizar el cifrado anal&oacute;gico de la voz.";
 answers[59] = choices[59][3];
 units[59] = "109";
 comments[59] = "Id Pregunta: 10056. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10093 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  De acuerdo a las actividades de M&eacute;trica v.3, se&ntilde;ale la INCORRECTA:";
 choices[60]= new Array();
 choices[60][0] = "La actividad PSI 4 es de Idenficaci&oacute;n de Requisitos";
 choices[60][1] = "La actividad EVS 3 es de Definici&oacute;n de Requisitos";
 choices[60][2] = "La actividad ASI 2 es de Especificaci&oacute;n de Requisitos";
 choices[60][3] = "La actividad DSI 11 es de Establecimineto de Requisitos de Implantaci&oacute;n";
 answers[60] = choices[60][2];
 units[60] = "78";
 comments[60] = "Id Pregunta: 10093. NULL";


//  Id pregunta: 10100 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  En la lista eventos del modelo ambiental, indique que tipo de evento NO existe: ";
 choices[61]= new Array();
 choices[61][0] = "Evento orientado a flujo";
 choices[61][1] = "Evento temporal";
 choices[61][2] = "Evento de control";
 choices[61][3] = "Evento cr&iacute;tico";
 answers[61] = choices[61][3];
 units[61] = "81";
 comments[61] = "Id Pregunta: 10100. NULL";


//  Id pregunta: 10116 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  Respecto al protocolo Spanning Tree Protocol , es falso que:";
 choices[62]= new Array();
 choices[62][0] = "Se usa para definir caminos &uacute;nicos en la red de Nivel 2";
 choices[62][1] = "Permite realizar encaminamiento entre nodos";
 choices[62][2] = "Evita bucles en la red.";
 choices[62][3] = "Converge m&aacute;s lentamente que RSTP";
 answers[62] = choices[62][1];
 units[62] = "101";
 comments[62] = "Id Pregunta: 10116. Es de nivel 2";


//  Id pregunta: 10174 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  UML o Unified Modeling Language&hellip;";
 choices[63]= new Array();
 choices[63][0] = "Fue desarrollado por tres autores conocidos como los &quot;Tres Amigos&quot;";
 choices[63][1] = "No constituye un m&eacute;todo o metodolog&iacute;a de an&aacute;lisis orientado a objetos";
 choices[63][2] = "Est&aacute;ndar actualmente soportado, mantenido y evolucionado por OMG";
 choices[63][3] = "Todas las anteriores";
 answers[63] = choices[63][3];
 units[63] = "82";
 comments[63] = "Id Pregunta: 10174. ";


//  Id pregunta: 10184 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  El Modelo E-R Extendido es el resultado de la ampliaci&oacute;n de elementos y modificaciones introducidas en el modelo E-R de Chen a lo largo del tiempo. De entre &eacute;stas, es cierto que:";
 choices[64]= new Array();
 choices[64][0] = "Sea una entidad involucrada en varias relaciones o interrelaciones distintas. Si cada ocurrencia de dicha entidad s&oacute;lo puede participar en una interrelaci&oacute;n, se habla de interrelaciones disjuntas.";
 choices[64][1] = "El Modelo E-R extendido permite la representaci&oacute;n de relaciones jer&aacute;rquicas denominadas Categor&iacute;as.";
 choices[64][2] = "Una jerarqu&iacute;a total se representa mediante la indicaci&oacute;n de la letra &quot;t&quot; en el tri&aacute;ngulo invertido que representa las relaciones de jerarqu&iacute;a";
 choices[64][3] = "Las relaciones reflexivas, al ser relaciones unarias, suelen presentar un tipo de correspondencia 1:1";
 answers[64] = choices[64][1];
 units[64] = "80";
 comments[64] = "Id Pregunta: 10184. ";


//  Id pregunta: 10252 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  FooCorp modifica un software distribu&iacute;do bajo GPL, e incluye una tecnolog&iacute;a patentada por FooCorp. &iquest;Hay alg&uacute;n requisito en la licencia GPL sobre c&oacute;mo licenciar la patente aplicable?";
 choices[65]= new Array();
 choices[65][0] = "No";
 choices[65][1] = "S&iacute;, deben permitir a cualquiera que use la tecnolog&iacute;a patentada para cualquier prop&oacute;sito";
 choices[65][2] = "S&iacute;, deben permitir a cualquiera que utilice el c&oacute;digo GPL modificado para utilizar la tecnolog&iacute;a patentada.";
 choices[65][3] = "Si, deben hacer el c&oacute;digo accesible por todos";
 answers[65] = choices[65][2];
 units[65] = "61";
 comments[65] = "Id Pregunta: 10252. ";


//  Id pregunta: 10298 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v2/v3:";
 choices[66]= new Array();
 choices[66][0] = "GETREQUEST PDU";
 choices[66][1] = "SETRESPONSE PDU";
 choices[66][2] = "RESPONSE PDU";
 choices[66][3] = "INFORMREQUEST PDU";
 answers[66] = choices[66][1];
 units[66] = "104";
 comments[66] = "Id Pregunta: 10298. TIC A2, libre, examen 2013";


//  Id pregunta: 10343 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta correcta:";
 choices[67]= new Array();
 choices[67][0] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[67][1] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[67][2] = "La correcci&oacute;n de errores de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, cuando sea necesario para la utilizaci&oacute;n del programa por parte del usuario seg&uacute;n su finalidad prevista";
 choices[67][3] = "Todas las respuestas anteriores son falsas";
 answers[67] = choices[67][2];
 units[67] = "36";
 comments[67] = "Id Pregunta: 10343. Consultar Art. 100 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10362 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Entre los documentos generados por ISO, aquellos que recogen informaci&oacute;n que no aparece en los Est&aacute;ndares Internacionales reciben el nombre de&hellip;";
 choices[68]= new Array();
 choices[68][0] = "Technical Especifications";
 choices[68][1] = "Technical Reports";
 choices[68][2] = "Technical Corrigendum";
 choices[68][3] = "Gu&iacute;as ISO";
 answers[68] = choices[68][1];
 units[68] = "42";
 comments[68] = "Id Pregunta: 10362. http://www.iso.org/iso/home/standards_development/deliverables-all.htm?type=tr";


//  Id pregunta: 10426 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  En lo referido a la Ingenier&iacute;a del Software de Sala Limpia indicar qu&eacute; afirmaci&oacute;n es correcta. ";
 choices[69]= new Array();
 choices[69][0] = "Es una versi&oacute;n del modelo incremental del software.";
 choices[69][1] = "Hace uso de la comprobaci&oacute;n estad&iacute;stica para descubrir errores.";
 choices[69][2] = "Utiliza tres tipos de cajas para la especificaci&oacute;n funcional: negra, de estado y transparente.";
 choices[69][3] = "Las anteriores a) b) y c) son correctas.";
 answers[69] = choices[69][3];
 units[69] = "76";
 comments[69] = "Id Pregunta: 10426. Examen TIC A1 2013";


//  Id pregunta: 10461 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Respecto a REST (Represantional State Transfer) indique la respuesta incorrecta:";
 choices[70]= new Array();
 choices[70][0] = "Es un est&aacute;ndar para desarrollar y proporcionar servicios en internet.";
 choices[70][1] = "La identificaci&oacute;n de recursos se realiza de forma &uacute;nica global mediante URIs (Uniform Resource Identifiers).";
 choices[70][2] = "Los recursos identificados con URIs son los objeto l&oacute;gicos a los que se mandan los mensajes.";
 choices[70][3] = "Emplea un protocolo cliente/servidor sin estado.";
 answers[70] = choices[70][0];
 units[70] = "51";
 comments[70] = "Id Pregunta: 10461. ";


//  Id pregunta: 10499 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  &iquest;Cual de los siguientes es un servicio comun de reuniones virtuales para las Administraciones Publicas?";
 choices[71]= new Array();
 choices[71][0] = "Reunete";
 choices[71][1] = "Webex";
 choices[71][2] = "Meetic";
 choices[71][3] = "VirtualMeeting";
 answers[71] = choices[71][0];
 units[71] = "117";
 comments[71] = "Id Pregunta: 10499. http://administracionelectronica.gob.es/ctt/reunete";


//  Id pregunta: 10551 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest; Cu&aacute;l de las siguientes opciones contribuye mejor a un plan de continuidad de negocio eficaz? ";
 choices[72]= new Array();
 choices[72][0] = "La documentaci&oacute;n se distribuye a todas las partes interesadas";
 choices[72][1] = "La planificaci&oacute;n involucra a todos los departamentos de usuarios";
 choices[72][2] = "El plan se ha aprobado por la alta direcci&oacute;n";
 choices[72][3] = "El plan se ha auditado por un auditor externo";
 answers[72] = choices[72][1];
 units[72] = "31, 32, 33";
 comments[72] = "Id Pregunta: 10551. La participaci&oacute;n de los departamentos de usuarios en el Plan de Continuidad de Negocio es crucial para la identificaci&oacute;n de las prioridades de proceso de negocio.";


//  Id pregunta: 10573 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  &iquest;A qu&eacute; corresponden las siglas STORK?";
 choices[73]= new Array();
 choices[73][0] = "Secure Transport Over bRoad toKens";
 choices[73][1] = "Security idenTity acrOss boRders linKed";
 choices[73][2] = "Safe idenTity fOr Roaming Knowledge";
 choices[73][3] = "Safe noTes stOring encRypted Keys";
 answers[73] = choices[73][1];
 units[73] = "44";
 comments[73] = "Id Pregunta: 10573. ";


//  Id pregunta: 10696 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  Seg&uacute;n la Ley 39/2015, cual de las siguientes no se establece como informaci&oacute;n necesaria en los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[74]= new Array();
 choices[74][0] = "Fecha de inscripci&oacute;n.";
 choices[74][1] = "Per&iacute;odo de tiempo por el cual se otorga el poder.";
 choices[74][2] = "Lugar de inscripci&oacute;n.";
 choices[74][3] = "Tipo de poder seg&uacute;n las facultades que otorgue.";
 answers[74] = choices[74][2];
 units[74] = "30";
 comments[74] = "Id Pregunta: 10696. ";


//  Id pregunta: 10815 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes opciones incluye todas las fases del modelo de ciclo de vida RAD (Rapid Application Development)?";
 choices[75]= new Array();
 choices[75][0] = "Modelado de provisi&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[75][1] = "Modelado de gesti&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[75][2] = "Modelado de gesti&oacute;n, Modelado de datos, Modelado de procesos, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[75][3] = "Modelado de gesti&oacute;n, Modelado de datos, Generaci&oacute;n de aplicaciones, Pruebas de desarrollo y Pruebas de entrega.";
 answers[75] = choices[75][2];
 units[75] = "76, 79";
 comments[75] = "Id Pregunta: 10815. Examen GSI 2014";


//  Id pregunta: 10866 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Se&ntilde;ale la respuesta FALSA acerca de la tecnolog&iacute;a Java Web Start:";
 choices[76]= new Array();
 choices[76][0] = "El software de Java Web Start permite descargar y ejecutar aplicaciones Java desde la Web.";
 choices[76][1] = "Garantiza que se est&aacute; ejecutando la &uacute;ltima versi&oacute;n de la aplicaci&oacute;n.";
 choices[76][2] = "Incluido en el JDK desde la versi&oacute;n 6, permitiendo instalar aplicaciones a trav&eacute;s de URLs con JMLP (Java Main Launch Protocol).";
 choices[76][3] = "Permite desplegar f&aacute;cilmente aplicaciones standalone de escritorio.";
 answers[76] = choices[76][2];
 units[76] = "60, 116";
 comments[76] = "Id Pregunta: 10866. Examen GSI 2014";


//  Id pregunta: 10881 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  En el &aacute;mbito de las redes inform&aacute;ticas, el tiempo que tarda un paquete enviado desde un emisor en volver a este mismo emisor habiendo pasado por el receptor de destino es conocido como:";
 choices[77]= new Array();
 choices[77][0] = "Jitter.";
 choices[77][1] = "Delay.";
 choices[77][2] = "Round Trip delay Time.";
 choices[77][3] = "Latencia.";
 answers[77] = choices[77][2];
 units[77] = "100";
 comments[77] = "Id Pregunta: 10881. Examen GSI 2014";


//  Id pregunta: 10884 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  En una red Ethernet 10BASE-T, un paquete de 1000 KBytes se transmite en:";
 choices[78]= new Array();
 choices[78][0] = "0,81 ms";
 choices[78][1] = "8,19 ms";
 choices[78][2] = "819 ms";
 choices[78][3] = "81,9 ms";
 answers[78] = choices[78][2];
 units[78] = "99";
 comments[78] = "Id Pregunta: 10884. Examen GSI 2014";


//  Id pregunta: 10905 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  El lenguaje de consulta sobre RDF que permite hacer b&uacute;squedas sobre los recursos de la Web Sem&aacute;ntica utilizando distintas fuentes de datos es:";
 choices[79]= new Array();
 choices[79][0] = "OWL";
 choices[79][1] = "RQUERY";
 choices[79][2] = "JQUERY";
 choices[79][3] = "SPARQL";
 answers[79] = choices[79][3];
 units[79] = "69, 22";
 comments[79] = "Id Pregunta: 10905. Examen GSI 2014";


//  Id pregunta: 10911 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Se&ntilde;alar de las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles cu&aacute;l utiliza W-CDMA:";
 choices[80]= new Array();
 choices[80][0] = "GSM";
 choices[80][1] = "EDGE";
 choices[80][2] = "UMTS";
 choices[80][3] = "LTE";
 answers[80] = choices[80][2];
 units[80] = "108";
 comments[80] = "Id Pregunta: 10911. Examen GSI 2014";


//  Id pregunta: 10917 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment Express (SATA Express) es de hasta:";
 choices[81]= new Array();
 choices[81][0] = "6 Gbps.";
 choices[81][1] = "16 Gbps.";
 choices[81][2] = "8 Gbps.";
 choices[81][3] = "3 Gbps.";
 answers[81] = choices[81][1];
 units[81] = "46, 48";
 comments[81] = "Id Pregunta: 10917. Examen GSI 2014";


//  Id pregunta: 10945 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Respecto a Bluetooth es correcto que:";
 choices[82]= new Array();
 choices[82][0] = "No utiliza la misma banda de frecuencia que Wi-Fi (802.11), por lo que no se interfieren mutuamente.";
 choices[82][1] = "Con 802.11 AMP puede llegar a 24 Mbps.";
 choices[82][2] = "Debe evitarse en entornos escolares debido a que emite radiaci&oacute;n ionizante.";
 choices[82][3] = "Debe emitirse con un m&iacute;nimo de 10 watios.";
 answers[82] = choices[82][1];
 units[82] = "107";
 comments[82] = "Id Pregunta: 10945. TIC A1 AGE 2014";


//  Id pregunta: 10953 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Respecto a la Comisi&oacute;n de Estrategia TIC de la Administraci&oacute;n General del Estado, se&ntilde;ale la respuesta correcta:";
 choices[83]= new Array();
 choices[83][0] = "Est&aacute; adscrita al Ministerio de la Presidencia y es el &oacute;rgano encargado de la definici&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[83][1] = "Impulsa la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados.";
 choices[83][2] = "Define las prioridades de inversi&oacute;n en materias TIC bajo un convenio marco de colaboraci&oacute;n con la Direcci&oacute;n General de Patrimonio del Estado.";
 choices[83][3] = "Elevar&aacute; semestralmente, a trav&eacute;s de su Presidente, un informe al Consejo de Ministros, en el que se recoger&aacute; el estado de la transformaci&oacute;n digital de las Administraciones P&uacute;blicas.";
 answers[83] = choices[83][1];
 units[83] = "30";
 comments[83] = "Id Pregunta: 10953. TIC A1 AGE 2014";


//  Id pregunta: 11000 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  En el &aacute;mbito de la ciberseguridad, respecto de las APT (Advanced Persistent Threats), se&ntilde;ale la respuesta correcta:";
 choices[84]= new Array();
 choices[84][0] = "Una APT comprende distintas fases entre las que se encuentra la extracci&oacute;n de datos.";
 choices[84][1] = "Una APT no utiliza t&eacute;cnicas de ingenier&iacute;a social para lograr el acceso al sistema objetivo.";
 choices[84][2] = "Una APT es un conjunto de software malicioso con poca repercusi&oacute;n en el sistema objetivo y de f&aacute;cil detecci&oacute;n por las herramientas antivirus.";
 choices[84][3] = "Una APT consiste en ataques avanzados pr&oacute;ximos en el tiempo hacia objetivos generales e impersonales.";
 answers[84] = choices[84][0];
 units[84] = "111";
 comments[84] = "Id Pregunta: 11000. TIC A1 AGE 2014";


//  Id pregunta: 11003 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Indique la respuesta FALSA respecto a las autoridades de validaci&oacute;n del DNI electr&oacute;nico:";
 choices[85]= new Array();
 choices[85][0] = "La prestaci&oacute;n de estos servicios de validaci&oacute;n se realiza en base a Online Certificate Status Protocol (OCSP).";
 choices[85][1] = "Para la validaci&oacute;n del DNI electr&oacute;nico se dispone de dos prestadores de Servicios de Validaci&oacute;n.";
 choices[85][2] = "La informaci&oacute;n sobre los certificados electr&oacute;nicos revocados se almacena en las denominadas listas de revocaci&oacute;n de certificados (CRL).";
 choices[85][3] = "En la Infraestructura de Clave P&uacute;blica adoptada para el DNI electr&oacute;nico, se ha optado por asignar a una misma entidad las funciones de Autoridad de Validaci&oacute;n y Certificaci&oacute;n.";
 answers[85] = choices[85][3];
 units[85] = "74";
 comments[85] = "Id Pregunta: 11003. TIC A1 AGE 2014";


//  Id pregunta: 11037 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Qu&eacute; versi&oacute;n de SQL incorpor&oacute; las reglas de integridad referencial?";
 choices[86]= new Array();
 choices[86][0] = "SQL-86";
 choices[86][1] = "SQL-89";
 choices[86][2] = "SQL-92";
 choices[86][3] = "SQL-1999";
 answers[86] = choices[86][1];
 units[86] = "58";
 comments[86] = "Id Pregunta: 11037. ";


//  Id pregunta: 11111 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l no es un principio general del dise&ntilde;o centrado en el usuario de Nielsen?";
 choices[87]= new Array();
 choices[87][0] = "Medida de la satisfacci&oacute;n del usuario";
 choices[87][1] = "Visibilidad del estado del sistema";
 choices[87][2] = "Dise&ntilde;o minimalista";
 choices[87][3] = "Prevenci&oacute;n y ayuda en la recuperaci&oacute;n de errores";
 answers[87] = choices[87][0];
 units[87] = "39";
 comments[87] = "Id Pregunta: 11111. ";


//  Id pregunta: 11165 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  De acuerdo con la Norma ISO 9004 sobre la madurez del sistema de gesti&oacute;n de la calidad, &iquest;cu&aacute;l de las siguientes descripciones se refiere al nivel de madurez 1?";
 choices[88]= new Array();
 choices[88][0] = "Proceso de mejora existente y en uso";
 choices[88][1] = "No hay una aproximaci&oacute;n sistem&aacute;tica evidente; sin resultados, resultados pobres o resultados impredecibles.";
 choices[88][2] = "Aproximaci&oacute;n sistem&aacute;tica basada en el problema o en la prevenci&oacute;n; m&iacute;nimos datos disponibles sobre los resultados de mejora.";
 choices[88][3] = "Proceso de mejora ampliamente integrado.";
 answers[88] = choices[88][1];
 units[88] = "92";
 comments[88] = "Id Pregunta: 11165. ";


//  Id pregunta: 11172 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes procesos no forma parte del Soporte de Servicio seg&uacute;n la biblioteca ITIL v3?";
 choices[89]= new Array();
 choices[89][0] = "Gesti&oacute;n de Incidencias";
 choices[89][1] = "Gesti&oacute;n de Problemas";
 choices[89][2] = "Gesti&oacute;n de Eventos";
 choices[89][3] = "Gesti&oacute;n del Cambio";
 answers[89] = choices[89][2];
 units[89] = "98";
 comments[89] = "Id Pregunta: 11172. ";


//  Id pregunta: 11215 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Sobre la  tecnolog&iacute;a Java WebStart es cierto que:";
 choices[90]= new Array();
 choices[90][0] = "Permite la  instalaci&oacute;n de la aplicaci&oacute;n pero no su actualizaci&oacute;n.";
 choices[90][1] = "Permite la distribuci&oacute;n de aplicaciones Java sin instalaci&oacute;n adicional y desde cualquier navegador web.";
 choices[90][2] = "Utiliza JNLP (Java LaunchingProtocol) definido en la JSR-56 y basado en XML.";
 choices[90][3] = "Las dos anteriores son ciertas.";
 answers[90] = choices[90][3];
 units[90] = "60";
 comments[90] = "Id Pregunta: 11215. ";


//  Id pregunta: 11352 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  De las siguientes afirmaciones, seleccione la correcta en relaci&oacute;n con lo regulado en la Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico";
 choices[91]= new Array();
 choices[91][0] = "La Ley 25/2013 tiene como &aacute;mbito de actuaci&oacute;n, las facturas emitidas en el marco de las relaciones jur&iacute;dicas entre proveedores de bienes y servicios y las Administraciones P&uacute;blicas";
 choices[91][1] = "Impulso del uso de la factura electr&oacute;nica en el sector p&uacute;blico, con car&aacute;cter obligatorio para determinados sujetos a partir del uno de enero de 2015.";
 choices[91][2] = "Obligaci&oacute;n de las empresas de presentaci&oacute;n en un registro administrativo de las facturas expedidas por los servicios que presten o bienes que entreguen a una Administraci&oacute;n P&uacute;blica, en un plazo de 20 d&iacute;as desde la prestaci&oacute;n o entrega";
 choices[91][3] = "Se establece la creaci&oacute;n obligatoria para la Administraci&oacute;n P&uacute;blica estatal, de puntos generales de entrada de facturas electr&oacute;nicas";
 answers[91] = choices[91][0];
 units[91] = "70";
 comments[91] = "Id Pregunta: 11352. Es obligatorio a partir del 15 de enero de 2015. El plazo para la entrega de la factura, son 30 d&iacute;as. La creaci&oacute;n es obligatoria para todas las administraciones p&uacute;blicas.";


//  Id pregunta: 11405 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes situaciones es un objetivo del proceso de coordinaci&oacute;n del dise&ntilde;o?";
 choices[92]= new Array();
 choices[92][0] = "Asegurar que los objetivos de disponibilidad del servicio se cumplan";
 choices[92][1] = "Definir, documentar, acordar, monitorizar, medir y revisar los niveles de servicios";
 choices[92][2] = "Proveer y mantener una fuente &uacute;nica de informaci&oacute;n consistente sobre todos los servicios operativos";
 choices[92][3] = "Monitorizar y mejorar el desempe&ntilde;o de la etapa de dise&ntilde;o del ciclo de vida del servicio";
 answers[92] = choices[92][3];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11405. ";


//  Id pregunta: 11437 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes cuestiones sobre la Ley 9/2014 es correcta?:";
 choices[93]= new Array();
 choices[93][0] = "Los abonados conservar&aacute;n los n&uacute;meros que le hayan sido asignados autom&aacute;ticamente.";
 choices[93][1] = "Los costes derivados de la actualizaci&oacute;n de los elementos de red ser&aacute;n sufragados por el abonado.";
 choices[93][2] = "Los abonados conservar&aacute;n los n&uacute;meros que le hayan sido asignados previa solicitud.";
 choices[93][3] = "Corresponde al MINETUR la aprobaci&oacute;n por RD de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 answers[93] = choices[93][2];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11437. ";


//  Id pregunta: 11531 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Entre las ventajas de los ensamblados en .NET, en relaci&oacute;n a las distintas versiones de una aplicaci&oacute;n, se puede citar:";
 choices[94]= new Array();
 choices[94][0] = "No existe ninguna ventaja con respecto a las versiones previas";
 choices[94][1] = "Se facilitan utilidades para poder instalar y desinstalar del registro los ensamblados.";
 choices[94][2] = "El CRL proporciona en tiempo de ejecuci&oacute;n, informaci&oacute;n sobre las incompatibilidades entre las distintas versiones de los ensamblados.";
 choices[94][3] = "Ninguna de las anteriores es cierta.";
 answers[94] = choices[94][3];
 units[94] = "59";
 comments[94] = "Id Pregunta: 11531. NULL";


//  Id pregunta: 11543 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;ale la FALSA respecto al Diagrama de Extrapolaci&oacute;n:";
 choices[95]= new Array();
 choices[95][0] = "Se basa en la hip&oacute;tesis de que si existe una desviaci&oacute;n, su tendencia es a permanecer o empeorar a no ser que se tomen las medidas oportunas.";
 choices[95][1] = "Trata de estimar la nueva fecha de fin del proyecto extrapolando la tendencia constatada en un momento determinado del desarrollo.";
 choices[95][2] = "Se utiliza para obtener previsiones de las desviaciones en el esfuerzo de desarrollo de un proyecto y para realizar el seguimiento del proyecto.";
 choices[95][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[95] = choices[95][2];
 units[95] = "86";
 comments[95] = "Id Pregunta: 11543. NULL";


//  Id pregunta: 11562 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; es XFP?";
 choices[96]= new Array();
 choices[96][0] = "Puerto de conexi&oacute;n de alta velocidad con par trenzado.";
 choices[96][1] = "Puerto de conexi&oacute;n de alta velocidad de fibra &oacute;ptica.";
 choices[96][2] = "Puerto de conexi&oacute;n de alta velocidad de cable coaxial.";
 choices[96][3] = "Puerto de conexi&oacute;n de alta velocidad con capacidad para emplear distintos medios de transmisi&oacute;n.";
 answers[96] = choices[96][1];
 units[96] = "99";
 comments[96] = "Id Pregunta: 11562. NULL";


//  Id pregunta: 11584 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Frente a la recepci&oacute;n de una solicitud de revocaci&oacute;n de consentimiento del tratamiento de datos de car&aacute;cter personal, el responsable cesar&aacute; el tratamiento de los datos en un plazo m&aacute;ximo de:";
 choices[97]= new Array();
 choices[97][0] = "30 d&iacute;as h&aacute;biles";
 choices[97][1] = "30 d&iacute;as naturales";
 choices[97][2] = "10 d&iacute;as h&aacute;biles";
 choices[97][3] = "10 d&iacute;as naturales";
 answers[97] = choices[97][2];
 units[97] = "29";
 comments[97] = "Id Pregunta: 11584. ";


//  Id pregunta: 11698 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Una WAN Frame-Relay est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[98]= new Array();
 choices[98][0] = "Punto a punto";
 choices[98][1] = "Broadcast multi-acceso";
 choices[98][2] = "No broadcast multi-acceso";
 choices[98][3] = "Broadcast punto a multipunto";
 answers[98] = choices[98][2];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11698. NULL";


//  Id pregunta: 11759 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes no es un tipo de tramitaci&oacute;n de contrataci&oacute;n?";
 choices[99]= new Array();
 choices[99][0] = "previos";
 choices[99][1] = "emergencia";
 choices[99][2] = "urgencia";
 choices[99][3] = "ordinaria";
 answers[99] = choices[99][0];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11759. ";


