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

//  Id pregunta: 23 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;C&oacute;mo se denomina la comprobaci&oacute;n de si un producto en el campo de las TI satisface o no los requisitos t&eacute;cnicos de una norma?:";
 choices[0]= new Array();
 choices[0][0] = "Certificaci&oacute;n";
 choices[0][1] = "Homologaci&oacute;n";
 choices[0][2] = "Prueba de conformidad";
 choices[0][3] = "Comprobaci&oacute;n de especificaci&oacute;n t&eacute;cnica";
 answers[0] = choices[0][2];
 units[0] = "42";
 comments[0] = "Id Pregunta: 23. ";


//  Id pregunta: 107 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  CRM son las siglas de:";
 choices[1]= new Array();
 choices[1][0] = "Cost Recalculating Method: m&eacute;todo de c&aacute;lculo de optimizaci&oacute;n de costes";
 choices[1][1] = "Call Routing for Mobile phones: sistema de enrutamiento de llamadas en telefon&iacute;a m&oacute;vil";
 choices[1][2] = "Customer Relationship Management: gesti&oacute;n de relaci&oacute;n con los clientes";
 choices[1][3] = "Customer Relationship Method: m&eacute;todo para relaci&oacute;n con los clientes";
 answers[1] = choices[1][2];
 units[1] = "65";
 comments[1] = "Id Pregunta: 107. ";


//  Id pregunta: 241 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En un sistema de informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "La integraci&oacute;n permite mayor eficiencia conjunta e interrelaci&oacute;n m&aacute;s efectiva de actividades";
 choices[2][1] = "La integraci&oacute;n no presenta vulnerabilidades a incertidumbres por la flexibilidad que ofrece";
 choices[2][2] = "Se debe primar en todo momento la integraci&oacute;n frente a la independencia";
 choices[2][3] = "Se debe primar en todo momento la independencia frente a la integraci&oacute;n";
 answers[2] = choices[2][0];
 units[2] = "21";
 comments[2] = "Id Pregunta: 241. ";


//  Id pregunta: 247 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En una organizaci&oacute;n de tipo gran hermano:";
 choices[3]= new Array();
 choices[3][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[3][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[3][2] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 choices[3][3] = "El HW, el desarrollo y las decisiones se descentralizan";
 answers[3] = choices[3][0];
 units[3] = "22";
 comments[3] = "Id Pregunta: 247. ";


//  Id pregunta: 531 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Qu&eacute; tipo de centro de respaldo ante desastres ofrece la respuesta m&aacute;s inmediata?";
 choices[4]= new Array();
 choices[4][0] = "Hot site";
 choices[4][1] = "Warm site";
 choices[4][2] = "Instant site";
 choices[4][3] = "Cold site";
 answers[4] = choices[4][0];
 units[4] = "31, 32, 33";
 comments[4] = "Id Pregunta: 531. ";


//  Id pregunta: 646 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Cu&aacute;l de los siguientes grupos no forma parte de la estructura del Sistema Europeo de Normalizaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "El Consejo europeo de Normalizaci&oacute;n.";
 choices[5][1] = "El Comit&eacute; europeo de Normalizaci&oacute;n.";
 choices[5][2] = "Los &Oacute;rganos internacionales de Normalizaci&oacute;n.";
 choices[5][3] = "Los &Oacute;rganos europeos de Normalizaci&oacute;n.";
 answers[5] = choices[5][2];
 units[5] = "40";
 comments[5] = "Id Pregunta: 646. ";


//  Id pregunta: 679 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no se considera un riesgo de origen accidental?:";
 choices[6]= new Array();
 choices[6][0] = "Huelga del personal";
 choices[6][1] = "Errores en la utilizaci&oacute;n de los datos";
 choices[6][2] = "Aver&iacute;as en las instalaciones el&eacute;ctricas";
 choices[6][3] = "Interrupci&oacute;n de suministro de energ&iacute;a";
 answers[6] = choices[6][0];
 units[6] = "32,33";
 comments[6] = "Id Pregunta: 679. ";


//  Id pregunta: 796 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; tecnolog&iacute;a para la creaci&oacute;n de p&aacute;ginas web din&aacute;micas puede correr sobre un servidor Windows 2008?:";
 choices[7]= new Array();
 choices[7][0] = "ASP.NET";
 choices[7][1] = "PHP";
 choices[7][2] = "Java EE (Servlets)";
 choices[7][3] = "Todas son v&aacute;lidas";
 answers[7] = choices[7][3];
 units[7] = "59";
 comments[7] = "Id Pregunta: 796. ";


//  Id pregunta: 1102 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En Java:";
 choices[8]= new Array();
 choices[8][0] = "Los programas son applets, que se ejecutan en un navegador";
 choices[8][1] = "Los programas son de l&iacute;nea de comandos o basados en entornos de ventanas, como AWT o Swing";
 choices[8][2] = "Los programas son aplicaciones web de servidor";
 choices[8][3] = "Todas las anteriores respuestas son ciertas";
 answers[8] = choices[8][3];
 units[8] = "60";
 comments[8] = "Id Pregunta: 1102. NULL";


//  Id pregunta: 1118 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En las tarjetas inteligentes sin contacto, la comunicaci&oacute;n se realiza mediante tecnolog&iacute;a de radio frecuencia, incorporando las tarjetas una antena de RF. En funci&oacute;n de la distancia que permita la comunicaci&oacute;n, &iquest;qu&eacute; descripci&oacute;n corresponde a las tarjetas?";
 choices[9]= new Array();
 choices[9][0] = "Requiere el contacto f&iacute;sico (&lt;2mm) con  el dispositivo de interfaz, aunque no su inserci&oacute;n, ni usa contactos el&eacute;ctricos";
 choices[9][1] = "Permite una distancia de 10 cm con el dispositivo de interfaz";
 choices[9][2] = "No permite una distancia mayor de 5 cm con dispositivo de interfaz";
 choices[9][3] = "Todas las tarjetas inteligentes sin contacto son de proximidad";
 answers[9] = choices[9][1];
 units[9] = "74";
 comments[9] = "Id Pregunta: 1118. NULL";


//  Id pregunta: 1216 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  La deducci&oacute;n por medio de los sistemas de Kleene en inteligencia artificial hace referencia a:";
 choices[10]= new Array();
 choices[10][0] = "La orientaci&oacute;n heur&iacute;stica";
 choices[10][1] = "La orientaci&oacute;n l&oacute;gica";
 choices[10][2] = "La representaci&oacute;n del conocimiento";
 choices[10][3] = "Las redes sem&aacute;nticas";
 answers[10] = choices[10][1];
 units[10] = "63";
 comments[10] = "Id Pregunta: 1216. ";


//  Id pregunta: 1654 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  &iquest;Las siglas &quot;ACID&quot; qu&eacute; significan desde el punto de vista de las transacciones?";
 choices[11]= new Array();
 choices[11][0] = "Atomicity, Consistency, Isolation and Durability";
 choices[11][1] = "Atomicity, Consistency, Integration and Durability";
 choices[11][2] = "Authenticity, Confidentiality, Integration and Durability";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = choices[11][0];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1654. ";


//  Id pregunta: 1907 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  El elemento del DNI que no permite por si solo autenticar a una persona es";
 choices[12]= new Array();
 choices[12][0] = "El nombre";
 choices[12][1] = "La foto";
 choices[12][2] = "La firma";
 choices[12][3] = "La huella dactilar";
 answers[12] = choices[12][0];
 units[12] = "74";
 comments[12] = "Id Pregunta: 1907. NULL";


//  Id pregunta: 1951 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es un &quot;Parser&quot; XML?";
 choices[13]= new Array();
 choices[13][0] = "Un m&oacute;dulo o programa que se ocupa de archivar en local los c&oacute;digos XML";
 choices[13][1] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n externa";
 choices[13][2] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n interna";
 choices[13][3] = "Un m&oacute;dulo o programa que se ocupa de archivar en la correspondiente Base de Datos los c&oacute;digos XML";
 answers[13] = choices[13][2];
 units[13] = "69";
 comments[13] = "Id Pregunta: 1951. NULL";


//  Id pregunta: 2021 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes definiciones se ajusta mejor a lo que se entiende por un &quot;objeto&quot; en programaci&oacute;n orientada a objetos?";
 choices[14]= new Array();
 choices[14][0] = "Un objeto es parte de la herencia de una clase";
 choices[14][1] = "Un objeto es una instancia de una clase";
 choices[14][2] = "Un objeto es una instancia de una metaclase";
 choices[14][3] = "Una clase es una instancia de un objeto generada por &quot;upcasting&quot;";
 answers[14] = choices[14][1];
 units[14] = "82";
 comments[14] = "Id Pregunta: 2021. Examen TIC MAP B 2004";


//  Id pregunta: 2468 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  No es un &quot;resultado&quot; del modelo EFQM:";
 choices[15]= new Array();
 choices[15][0] = "El impacto en la sociedad";
 choices[15][1] = "Satisfacci&oacute;n del Personal";
 choices[15][2] = "Resultados empresariales.";
 choices[15][3] = "El manual de calidad de la empresa";
 answers[15] = choices[15][3];
 units[15] = "92";
 comments[15] = "Id Pregunta: 2468. NULL";


//  Id pregunta: 2728 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  La funci&oacute;n principal del Comit&eacute; de Direcci&oacute;n en la planificaci&oacute;n estrat&eacute;gica es:";
 choices[16]= new Array();
 choices[16][0] = "Definir la administraci&oacute;n, procedimiento y organizaci&oacute;n del trabajo.";
 choices[16][1] = "la toma de decisiones a lo largo de las distintas etapas/fases en que se descompone el plan";
 choices[16][2] = "Colaborar en la soluci&oacute;n funcional de los problemas planteados";
 choices[16][3] = "Realizar estudios espec&iacute;ficos";
 answers[16] = choices[16][1];
 units[16] = "77";
 comments[16] = "Id Pregunta: 2728. ";


//  Id pregunta: 2834 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  El proceso que va desde un alto nivel de abstracci&oacute;n hasta la propia implementaci&oacute;n f&iacute;sica del sistema se conoce como:";
 choices[17]= new Array();
 choices[17][0] = "Ingenier&iacute;a inversa.";
 choices[17][1] = "Reestructuraci&oacute;n.";
 choices[17][2] = "Ingenier&iacute;a hacia delante.";
 choices[17][3] = "Reingenier&iacute;a.";
 answers[17] = choices[17][2];
 units[17] = "91";
 comments[17] = "Id Pregunta: 2834. ";


//  Id pregunta: 2927 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  En una configuraci&oacute;n de red interna o intranet conectada a internet se entiende por DMZ a:";
 choices[18]= new Array();
 choices[18][0] = "El conjunto de Firewalls y filtros que permiten garantizar la seguridad de la red.";
 choices[18][1] = "Una red que enlaza la intranet con internet en la que se implementan todas las restricciones necesarias para la seguridad de la red.";
 choices[18][2] = "Una red que enlaza la intranet con internet en la que se implementan los servicios p&uacute;blicos que se deseen ofrecer, separada de ambas redes mediante sendos Firewalls.";
 choices[18][3] = "Una red que enlaza la intranet con internet en la que se implementan los servicios que requieren mayor protecci&oacute;n y privacidad, separada de ambas redes mediante sendos Firewalls.";
 answers[18] = choices[18][2];
 units[18] = "113";
 comments[18] = "Id Pregunta: 2927. ";


//  Id pregunta: 2953 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[19]= new Array();
 choices[19][0] = "CSMA/CD";
 choices[19][1] = "Token bus";
 choices[19][2] = "Token Ring";
 choices[19][3] = "Aloha ranurado";
 answers[19] = choices[19][1];
 units[19] = "101, 102";
 comments[19] = "Id Pregunta: 2953. Similar a examen TIC SS A 2003";


//  Id pregunta: 3611 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La interconexi&oacute;n de intranets puede llevarse a cabo mediante:";
 choices[20]= new Array();
 choices[20][0] = "repetidores y concentradores a nivel f&iacute;sico, encaminadores a nivel de enlace, puentes a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[20][1] = "repetidores, concentradores y encaminadores a nivel f&iacute;sico, puentes a nivel de enlace y pasarelas a nivel de aplicaci&oacute;n";
 choices[20][2] = "repetidores y concentradores a nivel f&iacute;sico, puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 choices[20][3] = "repetidores a nivel f&iacute;sico, concentradores y puentes a nivel de enlace, encaminadores a nivel de red y pasarelas a nivel de aplicaci&oacute;n";
 answers[20] = choices[20][2];
 units[20] = "100,103,113";
 comments[20] = "Id Pregunta: 3611. NULL";


//  Id pregunta: 3840 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Sobre los sistemas de gesti&oacute;n de red (NMS - &ldquo;Network Management Systems&rdquo;), indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[21]= new Array();
 choices[21][0] = "La mayor&iacute;a de los sistemas de gesti&oacute;n de red utilizan la misma estructura: Los dispositivos en red ejecutan un software (agente de gesti&oacute;n de red) que les permite transmitir alarmas ante la aparici&oacute;n de un problema hacia una estaci&oacute;n de gesti&oacute;n de red.";
 choices[21][1] = "Entre los protocolos de gesti&oacute;n de red mas utilizados se encuentra SNMP (&ldquo;Simple Network Management Protocol&rdquo;) est&aacute;ndar ISO/OSI, y CMIP (&ldquo;Common Management Information Protocol&rdquo;) que forma parte de la familia de protocolos TCP/IP";
 choices[21][2] = "Los agentes de gesti&oacute;n de red son m&oacute;dulos de software que compilan informaci&oacute;n sobre los dispositivos de red en los que residen en una base de datos de estructura jer&aacute;rquica denominada MIB (&ldquo;Management Information Base&rdquo;). ";
 choices[21][3] = "El modelo de sistema de gesti&oacute;n de red de ISO se compone de cinco &aacute;reas conceptuales: Gesti&oacute;n de prestaciones, gesti&oacute;n de configuraci&oacute;n, gesti&oacute;n contable, gesti&oacute;n de fallos y gesti&oacute;n de seguridad";
 answers[21] = choices[21][1];
 units[21] = "104";
 comments[21] = "Id Pregunta: 3840. ";


//  Id pregunta: 3948 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  En la clasificaci&oacute;n de las redes de comunicaci&oacute;n por su extensi&oacute;n no se incluye:";
 choices[22]= new Array();
 choices[22][0] = "MAN (Metropolitan Area Network";
 choices[22][1] = "LAN (Local Area Network)";
 choices[22][2] = "SAN (State Areal Network)";
 choices[22][3] = "WAN (Wide Area Network)";
 answers[22] = choices[22][2];
 units[22] = "113,101";
 comments[22] = "Id Pregunta: 3948. ";


//  Id pregunta: 4339 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  Una importante desventaja de emplear una topolog&iacute;a de conmutadores (switchs) jer&aacute;rquica en una LAN es";
 choices[23]= new Array();
 choices[23][0] = "El coste, pues se deben utilizar muchos conmutadores.";
 choices[23][1] = "La dependencia de un solo proveedor, ya que todos han de ser compatibles.";
 choices[23][2] = "Que una ca&iacute;da de un conmutador dejar&aacute; a dos subredes incomunicadas.";
 choices[23][3] = "Su obsolescencia, ya que es una topolog&iacute;a de los a&ntilde;os 80.";
 answers[23] = choices[23][2];
 units[23] = "100";
 comments[23] = "Id Pregunta: 4339. ";


//  Id pregunta: 4510 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos se utiliza para determinar la viabilidad del proyecto en el an&aacute;lisis coste-beneficio?";
 choices[24]= new Array();
 choices[24][0] = "Inversi&oacute;n promedio.";
 choices[24][1] = "Coste de desarrollo actualizado.";
 choices[24][2] = "Beneficio neto.";
 choices[24][3] = "Valor actual.";
 answers[24] = choices[24][3];
 units[24] = "27";
 comments[24] = "Id Pregunta: 4510. Castilla la Mancha 06";


//  Id pregunta: 4515 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  El tipo FLOAT definido por la clase Types de JDBC corresponde al tipo JAVA:";
 choices[25]= new Array();
 choices[25][0] = "double";
 choices[25][1] = "int";
 choices[25][2] = "byte[]";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][0];
 units[25] = "60";
 comments[25] = "Id Pregunta: 4515. JCED - Preparatic XVII";


//  Id pregunta: 4606 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  &iquest;Cual de las siguientes t&eacute;cnicas NO es de gesti&oacute;n de proyectos?";
 choices[26]= new Array();
 choices[26][0] = "m&eacute;todo MARKII para el An&aacute;lisis de los Puntos Funci&oacute;n";
 choices[26][1] = "Diagrama de extrapolaci&oacute;n";
 choices[26][2] = "staffing size";
 choices[26][3] = "Joint Requirements Planning";
 answers[26] = choices[26][3];
 units[26] = "28";
 comments[26] = "Id Pregunta: 4606. ";


//  Id pregunta: 4687 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  La fibra &oacute;ptica, con respecto al par trenzado";
 choices[27]= new Array();
 choices[27][0] = "Tiene m&aacute;s radiaci&oacute;n electromagn&eacute;tica";
 choices[27][1] = "Tiene m&aacute;s ancho de banda";
 choices[27][2] = "Es m&aacute;s f&aacute;cil de instalar";
 choices[27][3] = "Tiene mayor atenuaci&oacute;n";
 answers[27] = choices[27][1];
 units[27] = "99";
 comments[27] = "Id Pregunta: 4687. Examen 2006 JCYL";


//  Id pregunta: 4729 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  Cual de los siguientes no es un formato vectorial para el tratamiento de im&aacute;genes:";
 choices[28]= new Array();
 choices[28][0] = "SVG";
 choices[28][1] = "WMF";
 choices[28][2] = "Postscript";
 choices[28][3] = "TIFF";
 answers[28] = choices[28][3];
 units[28] = "93";
 comments[28] = "Id Pregunta: 4729. Examen 2006 JCYL";


//  Id pregunta: 5124 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Una obra bajo licencia Creative Commons:";
 choices[29]= new Array();
 choices[29][0] = "No tiene copyright";
 choices[29][1] = "Otorga todos los derechos a terceras personas";
 choices[29][2] = "Ofrecen derechos a terceras personas bajo ciertas condiciones.";
 choices[29][3] = "No ofrecen ning&uacute;n derecho a terceras personas.";
 answers[29] = choices[29][2];
 units[29] = "36";
 comments[29] = "Id Pregunta: 5124. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5555 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  La prioridad de un punto de verifiaci&oacute;n de las pautas de accesibilidad al contenido, que permite que un desarrollador pueda satisfacer dicho punto, en otro caso uno o m&aacute;s usuarios encontrar&aacute;n alguna dificultad para acceder a la informaci&oacute;n, &iquest;es Prioridad? ";
 choices[30]= new Array();
 choices[30][0] = "1";
 choices[30][1] = "2";
 choices[30][2] = "3";
 choices[30][3] = "4";
 answers[30] = choices[30][2];
 units[30] = "39";
 comments[30] = "Id Pregunta: 5555. ";


//  Id pregunta: 5767 AÃ±o de creación de pregunta: 2009-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de ordenaci&oacute;n de alternativas basado en permutaciones?";
 choices[31]= new Array();
 choices[31][0] = "TOPSIS";
 choices[31][1] = "PROMETHEE";
 choices[31][2] = "ELECTRE";
 choices[31][3] = "QUALIFLEX";
 answers[31] = choices[31][3];
 units[31] = "34";
 comments[31] = "Id Pregunta: 5767. ";


//  Id pregunta: 5846 AÃ±o de creación de pregunta: 2009-01-01
 questions[32]= "33)  &iquest;Cual de los siguientes est&aacute;ndares de Work-flow est&aacute; definido por WfMC (Workflow Management Coalition)?";
 choices[32]= new Array();
 choices[32][0] = "BPML";
 choices[32][1] = "BPEL";
 choices[32][2] = "BPMN";
 choices[32][3] = "XPDL";
 answers[32] = choices[32][3];
 units[32] = "71";
 comments[32] = "Id Pregunta: 5846. MAP 2008 A1";


//  Id pregunta: 5870 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  En la plataforma de e-learning Moodle, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[33]= new Array();
 choices[33][0] = "Es una plataforma de libre distribuci&oacute;n de e-learning";
 choices[33][1] = "Soporta el aprendizaje colaborativo en cualquier lugar y en cualquier momento";
 choices[33][2] = "Es una aplicaci&oacute;n Web que funciona en cualquier computador en el que se pueda ejecutar PHP";
 choices[33][3] = "S&oacute;lo funciona con el sistema operativo Linux";
 answers[33] = choices[33][3];
 units[33] = "66";
 comments[33] = "Id Pregunta: 5870. MAP 2008 A1";


//  Id pregunta: 5989 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  Un servidor de telnet permite:";
 choices[34]= new Array();
 choices[34][0] = "A los usuarios entrar en otro ordenador y llevar a cabo tareas como si estuviesen trabajando en el ordenador remoto.";
 choices[34][1] = "Intercambiar informaci&oacute;n ofreciendo capacidades de discusi&oacute;n en tiempo real.";
 choices[34][2] = "Gestionar listas de correo, ya sea para env&iacute;o masivo o para gestionar foros de discusi&oacute;n.";
 choices[34][3] = "Distribuir contenido multimedia a las aplicaciones cliente.";
 answers[34] = choices[34][0];
 units[34] = "112";
 comments[34] = "Id Pregunta: 5989. TIC A 2009";


//  Id pregunta: 6004 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  El proceso de kerning en un texto impreso:";
 choices[35]= new Array();
 choices[35][0] = "Es el proceso por el cual se van subdividiendo los elementos que componen una p&aacute;gina en otros menores hasta llegar a los elementos m&iacute;nimos, que son los caracteres.";
 choices[35][1] = "Es el proceso por el cual se elimina el espacio excesivo entre las letras.";
 choices[35][2] = "Es el proceso por el cual se corrige la inclinaci&oacute;n de la p&aacute;gina.";
 choices[35][3] = "Es el proceso que consiste en la divisi&oacute;n de un p&aacute;rrafo de texto en las diferentes l&iacute;neas que lo componen.";
 answers[35] = choices[35][1];
 units[35] = "94";
 comments[35] = "Id Pregunta: 6004. TIC A 2009";


//  Id pregunta: 6069 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  Sobre la representaci&oacute;n del conocimiento:";
 choices[36]= new Array();
 choices[36][0] = "Los algoritmos gen&eacute;ticos usan representaci&oacute;n param&eacute;trica";
 choices[36][1] = "Las redes neuronales usan representaci&oacute;n simb&oacute;lica";
 choices[36][2] = "Las dos respuestas anteriores son correctas";
 choices[36][3] = "Todas las respuestas anteriores no son correctas";
 answers[36] = choices[36][0];
 units[36] = "63,64";
 comments[36] = "Id Pregunta: 6069. ";


//  Id pregunta: 6094 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  Seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, pueden identificarse 4 tipos de mantenimiento de sistemas de informaci&oacute;n, entre los que NO se encuentra:";
 choices[37]= new Array();
 choices[37][0] = "Mantenimiento adaptativo.";
 choices[37][1] = "Mantenimiento preventivo.";
 choices[37][2] = "Mantenimiento evolutivo.";
 choices[37][3] = "Mantenimiento correctivo.";
 answers[37] = choices[37][1];
 units[37] = "86";
 comments[37] = "Id Pregunta: 6094. TIC A 2009";


//  Id pregunta: 6343 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  Uno de los objetivos perseguidos por la Web 2.0 es:";
 choices[38]= new Array();
 choices[38][0] = "Que las aplicaciones no est&eacute;n disponibles en un solo dispositivo.";
 choices[38][1] = "Que sea el proveedor del servicio el que cree todos los contenidos.";
 choices[38][2] = "Que la comunicaci&oacute;n entre los usuarios este centralizada.";
 choices[38][3] = "Que los sistemas sean fuertemente acoplados.";
 answers[38] = choices[38][0];
 units[38] = "120";
 comments[38] = "Id Pregunta: 6343. NULL";


//  Id pregunta: 6352 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes sentencias relativas al software libre es verdadera?";
 choices[39]= new Array();
 choices[39][0] = "El software libre es por definici&oacute;n gratuito";
 choices[39][1] = "Es lo mismo que el software de fuentes abiertas";
 choices[39][2] = "No existe software libre para Windows";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = choices[39][3];
 units[39] = "61";
 comments[39] = "Id Pregunta: 6352. ";


//  Id pregunta: 6403 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l es el plazo m&iacute;nimo para solicitar autorizaci&oacute;n para prestar servicios de la sociedad de la informaci&oacute;n, antes de comenzar a prestar el servicio?";
 choices[40]= new Array();
 choices[40][0] = "15 d&iacute;as";
 choices[40][1] = "1 mes";
 choices[40][2] = "2 meses";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][3];
 units[40] = "30";
 comments[40] = "Id Pregunta: 6403. Ley 34/2002, art&iacute;culo 6";


//  Id pregunta: 6427 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  De las siguientes aplicaciones, &iquest;Cu&aacute;l no es un servidor de aplicaciones?";
 choices[41]= new Array();
 choices[41][0] = "Apache Geronimo";
 choices[41][1] = "Jboss";
 choices[41][2] = "eXo";
 choices[41][3] = "Resin";
 answers[41] = choices[41][2];
 units[41] = "62";
 comments[41] = "Id Pregunta: 6427. NULL";


//  Id pregunta: 6438 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  Se&ntilde;ale una de las restricciones del modelo E/R:";
 choices[42]= new Array();
 choices[42][0] = "No se pueden realizar relaciones de unas relaciones con otras.";
 choices[42][1] = "No permite relacionar m&aacute;s de dos entidades.";
 choices[42][2] = "No permite relacines reflexivas.";
 choices[42][3] = "No se pueden representar las propiedades de las entidades.";
 answers[42] = choices[42][0];
 units[42] = "80";
 comments[42] = "Id Pregunta: 6438. NULL";


//  Id pregunta: 6537 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  La gesti&oacute;n de recursos, de acuerdo a ISO 9004, se apoya en:";
 choices[43]= new Array();
 choices[43][0] = "El ciclo de vida";
 choices[43][1] = "Gesti&oacute;n de la seguridad";
 choices[43][2] = "An&aacute;lisis de la viabilidad";
 choices[43][3] = "Infraestructura";
 answers[43] = choices[43][3];
 units[43] = "92";
 comments[43] = "Id Pregunta: 6537. NULL";


//  Id pregunta: 6562 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  GSM no utiliza";
 choices[44]= new Array();
 choices[44][0] = "Esquema de protecci&oacute;n mediante salto RF";
 choices[44][1] = "Transmisi&oacute;n discontinua";
 choices[44][2] = "Transmisi&oacute;n continua";
 choices[44][3] = "Paging";
 answers[44] = choices[44][2];
 units[44] = "108";
 comments[44] = "Id Pregunta: 6562. NULL";


//  Id pregunta: 6637 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  En el modelo COCOMO un proyecto semiacoplado hace referencia a:";
 choices[45]= new Array();
 choices[45][0] = "Aquel en el que el esfuerzo y el coste del proyecto se calcula en funci&oacute;n de las LOC y adem&aacute;s a&ntilde;ade una evaluaci&oacute;n subjetiva";
 choices[45][1] = "Proyectos peque&ntilde;os y sencillos con un equipo de trabajo estable, con buena experiencia y que cuenten con unos requerimientos poco r&iacute;gidos";
 choices[45][2] = "Proyectos de complejidad media, equipos con distintos niveles de experiencia y dentro de un software con terminales y bases de datos";
 choices[45][3] = "Proyectos que deban desarrollarse para ser acoplados en un hardware y software estricto y con restricciones operativas";
 answers[45] = choices[45][2];
 units[45] = "88";
 comments[45] = "Id Pregunta: 6637. NULL";


//  Id pregunta: 7283 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  &quot;&iquest;Cu&aacute;l de las siguientes no es una de las tres condiciones de Popek y Godbergh que debe cumplir toda arquitectura inform&aacute;tica para soportar adecuadamente &quot;&quot;virtualizaci&oacute;n&quot;&quot; de sistemas?&quot;";
 choices[46]= new Array();
 choices[46][0] = "Eficiencia";
 choices[46][1] = "Control de Recursos";
 choices[46][2] = "Equivalencia";
 choices[46][3] = "Escalabilidad";
 answers[46] = choices[46][3];
 units[46] = "119";
 comments[46] = "Id Pregunta: 7283. Examen TIC B 2009";


//  Id pregunta: 8039 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)   En Java 2, el operador &gt;&gt;:";
 choices[47]= new Array();
 choices[47][0] = " Desplaza bits del operando hacia la izquierda las posiciones indicadas.";
 choices[47][1] = " Desplaza bits del operando hacia la derecha las posiciones indicadas (sin signo).";
 choices[47][2] = " Desplaza bits del operando hacia la derecha las posiciones indicadas (con signo).";
 choices[47][3] = " Realiza una operaci&oacute;n l&oacute;gica OR exclusiva entre los dos operandos.";
 answers[47] = choices[47][2];
 units[47] = "NULL";
 comments[47] = "Id Pregunta: 8039. Map 2007";


//  Id pregunta: 8194 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  seg&uacute;n el CMMI v1.2 (Capability Maturity Model Integration, en espa&ntilde;ol Modelo Integrado de Capacidad y Madurez), una organizaci&oacute;n en la que en la que los procesos est&aacute;n definidos y son gestionados cuantitativamente, y en la que se establecen m&eacute;tricas de calidad para la gesti&oacute;n y rendimiento de dichos procesos, se encuentra en el nivel de capacidad:";
 choices[48]= new Array();
 choices[48][0] = "Nivel 1. ";
 choices[48][1] = "Nivel 2. ";
 choices[48][2] = "Nivel 3. ";
 choices[48][3] = "Nivel 4. ";
 answers[48] = choices[48][3];
 units[48] = "87";
 comments[48] = "Id Pregunta: 8194. Examen TIC A1 2010";


//  Id pregunta: 8307 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  Un documento firmado digitalmente incluye la huella digital:";
 choices[49]= new Array();
 choices[49][0] = "De la clave del firmante, cifrada con su clave p&uacute;blica.";
 choices[49][1] = "De la clave p&uacute;blica del firmante, cifrada con su clave privada.";
 choices[49][2] = "Del documento firmado, cifrada con la clave del firmante.";
 choices[49][3] = "Del documento firmado, cifrada con la clave p&uacute;blica del firmante.";
 answers[49] = choices[49][2];
 units[49] = "111";
 comments[49] = "Id Pregunta: 8307. Examen TIC A2 2010";


//  Id pregunta: 8340 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Qu&eacute; tipo de diagrama permite representar un algoritmo?";
 choices[50]= new Array();
 choices[50][0] = "Diagrama de Clases.";
 choices[50][1] = "Flujograma de Sistemas.";
 choices[50][2] = "Flujograma de Programas.";
 choices[50][3] = "Diagrama de Flujo de Datos.";
 answers[50] = choices[50][2];
 units[50] = "86";
 comments[50] = "Id Pregunta: 8340. Examen TIC A2 2010";


//  Id pregunta: 8352 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes partes del SOAP sirve para expresar instancias de tipos de datos definidos por la aplicaci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "SOAP envelope.";
 choices[51][1] = "SOAP binding framework";
 choices[51][2] = "SOAP encoding rules.";
 choices[51][3] = "SOAP  RPC representation.";
 answers[51] = choices[51][2];
 units[51] = "51";
 comments[51] = "Id Pregunta: 8352. Examen TIC A2 2010";


//  Id pregunta: 8356 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  El nivel 5 del modelo de Capacidad y Madurez (CMMI), nivel optimizado, tiene como objetivo:";
 choices[52]= new Array();
 choices[52][0] = "Gestionar cuantitativamente los procesos para lograr los objetivos de calidad y ejecuci&oacute;n del proceso establecido por el proyecto.";
 choices[52][1] = "El entendimiento cuantitativo de los procesos de la organizaci&oacute;n.";
 choices[52][2] = "Mejorar la calidad de los procesos de la organizaci&oacute;n, en base a un entendimiento de las causas comunes de variaci&oacute;n.";
 choices[52][3] = "Proporcionar datos de la ejecuci&oacute;n de procesos.";
 answers[52] = choices[52][2];
 units[52] = "87";
 comments[52] = "Id Pregunta: 8356. Examen TIC A2 2010";


//  Id pregunta: 8369 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  En los diagramas estructurados (Nassi-Schneiderman): ";
 choices[53]= new Array();
 choices[53][0] = "Las flechas de uni&oacute;n son verticales.";
 choices[53][1] = "No hay flechas de uni&oacute;n.";
 choices[53][2] = "Cada posible acci&oacute;n se representa con una figura diferente.";
 choices[53][3] = "Las cajas no son contiguas.";
 answers[53] = choices[53][1];
 units[53] = "81";
 comments[53] = "Id Pregunta: 8369. Examen TIC A2 2010";


//  Id pregunta: 8520 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  Tenemos las entidades &quot;opositor&quot; y &quot;oposici&oacute;n&quot; y sabemos que a los opositores se les permite apuntarse a varias oposiciones distintas. Si se quisiera crear el modelo conceptual de base de datos, &iquest;qu&eacute; relaci&oacute;n crear&iacute;a?:";
 choices[54]= new Array();
 choices[54][0] = "Una relaci&oacute;n N:M.";
 choices[54][1] = "Una relaci&oacute;n 1:N.";
 choices[54][2] = "Una relaci&oacute;n 1:1.";
 choices[54][3] = "El modelo conceptual no admite relaciones, s&oacute;lo el modelo relacional lo permite. ";
 answers[54] = choices[54][0];
 units[54] = "57, 58";
 comments[54] = "Id Pregunta: 8520. Examen TIC A2 2010 interna";


//  Id pregunta: 8595 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;A qu&eacute; corresponden las siglas LINQ?";
 choices[55]= new Array();
 choices[55][0] = "Lenguaje que permite enlaces unidireccionales y bid&iacute;reccionales a otro recurso (como archivos, im&aacute;genes, documentos, programas, etc.) dentro de documentos XML";
 choices[55][1] = "Soluci&oacute;n utilizada en el campo de la Business Intelligence cuyo objetivo es agilizar la consulta a grandes cantidades de datos";
 choices[55][2] = "Conjunto de extensiones a NET Framework que abarca operaciones de consulta integrada de lenguaje, conjuntos y transformaciones.";
 choices[55][3] = "Texto o im&aacute;genes en un sitio web que un usuario puede pinchar para tener acceso o conectar con otro documento.";
 answers[55] = choices[55][2];
 units[55] = "59,115";
 comments[55] = "Id Pregunta: 8595. Examen TIC A2 2010 interna";


//  Id pregunta: 8631 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  En el modelo de ciclo de vida en espiral, &iquest;en qu&eacute; actividad se decide s&iacute; continuamos con las fases siguientes?";
 choices[56]= new Array();
 choices[56][0] = "An&aacute;lisis del riesgo.";
 choices[56][1] = "Evaluaci&oacute;n de la situaci&oacute;n.";
 choices[56][2] = "Desarrollar, verificar y validar (probar).";
 choices[56][3] = "Planificar.";
 answers[56] = choices[56][3];
 units[56] = "76";
 comments[56] = "Id Pregunta: 8631. Examen TIC A2 2010 interna";


//  Id pregunta: 8659 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Los tipos de direcciones en IPv6 son los siguientes:";
 choices[57]= new Array();
 choices[57][0] = "Unicast, Multicast y Anycast";
 choices[57][1] = "Unicast y Multicast";
 choices[57][2] = "Somecast y Groupcast";
 choices[57][3] = "Somecast, Multicast y Worldcast";
 answers[57] = choices[57][0];
 units[57] = "100";
 comments[57] = "Id Pregunta: 8659. Examen UPM A2 2011";


//  Id pregunta: 8841 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;Qu&eacute; est&aacute;ndar debe de cumplir un sistema de videoconferencia H.323 para poder compartir datos?";
 choices[58]= new Array();
 choices[58][0] = " H.239";
 choices[58][1] = " H.264";
 choices[58][2] = " H.263";
 choices[58][3] = " H.240";
 answers[58] = choices[58][0];
 units[58] = "117";
 comments[58] = "Id Pregunta: 8841. Examen UC3M 2010";


//  Id pregunta: 8848 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes organizaciones de estandarizaci&oacute;n NO es internacional?";
 choices[59]= new Array();
 choices[59][0] = "IEEE";
 choices[59][1] = "ISO";
 choices[59][2] = "IEC";
 choices[59][3] = "ANSI";
 answers[59] = choices[59][3];
 units[59] = "42";
 comments[59] = "Id Pregunta: 8848. Examen UC3M 2010";


//  Id pregunta: 8902 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Cu&aacute;les de los siguientes tipos de ficheros est&aacute;n amparados por la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?:";
 choices[60]= new Array();
 choices[60][0] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas.";
 choices[60][1] = "El fichero de clientes de una empresa de telecomunicaciones que da servicio de telefon&iacute;a y acceso a Internet.";
 choices[60][2] = "Los ficheros mantenidos por personas f&iacute;sicas a t&iacute;tulo exclusivamente personal o dom&eacute;stico.";
 choices[60][3] = "Ninguno de los anteriores";
 answers[60] = choices[60][1];
 units[60] = "29";
 comments[60] = "Id Pregunta: 8902. Operador Ayto. Madrid 2010";


//  Id pregunta: 9079 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  Para cumplir el nivel AA en la pauta &quot;Ayuda a la entrada de datos&quot;, respecto a los formularios de entrada de datos que tengan consecuencias legales, cu&aacute;l de las siguientes opciones NO se exige:";
 choices[61]= new Array();
 choices[61][0] = "Tipograf&iacute;a clara y legible. ";
 choices[61][1] = "Verificaci&oacute;n por parte del usuario.";
 choices[61][2] = "Reversibilidad. ";
 choices[61][3] = "Confirmaci&oacute;n.";
 answers[61] = choices[61][0];
 units[61] = "39";
 comments[61] = "Id Pregunta: 9079. ";


//  Id pregunta: 9102 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes es un tipo de huella digital?";
 choices[62]= new Array();
 choices[62][0] = "Huella sim&eacute;trica.";
 choices[62][1] = "Huella asim&eacute;trica.";
 choices[62][2] = "Huella an&oacute;nima.";
 choices[62][3] = "Todas las anteriores son verdaderas.";
 answers[62] = choices[62][3];
 units[62] = "37";
 comments[62] = "Id Pregunta: 9102. ";


//  Id pregunta: 9171 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Cu&aacute;l de los siguientes productos de UN/CEFACT es un est&aacute;ndar:";
 choices[63]= new Array();
 choices[63][0] = "UN/CCL (Core Components Library)";
 choices[63][1] = "ebXML CCTS (Core Components Technical Specification)";
 choices[63][2] = "XML Naming and Design Rules";
 choices[63][3] = "UNECE TDED ISO 7273";
 answers[63] = choices[63][0];
 units[63] = "70";
 comments[63] = "Id Pregunta: 9171. ";


//  Id pregunta: 9194 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[64]= new Array();
 choices[64][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[64][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[64][2] = "Si, en todos los casos";
 choices[64][3] = "Todas las anteriores son falsas";
 answers[64] = choices[64][2];
 units[64] = "36";
 comments[64] = "Id Pregunta: 9194. ";


//  Id pregunta: 9233 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  &iquest;En qu&eacute; se basa la interfaz de usuario de iOS?";
 choices[65]= new Array();
 choices[65][0] = "Concepto de manipulaci&oacute;n directa usando gestos multit&aacute;ctiles.";
 choices[65][1] = "Ejecuci&oacute;n de comandos mediante la selecci&oacute;n de men&uacute;s.";
 choices[65][2] = "S&oacute;lo est&aacute; accesible en sistemas con Jailbreak.";
 choices[65][3] = "Su pantalla principal se denomina WinterBoard.";
 answers[65] = choices[65][0];
 units[65] = "52";
 comments[65] = "Id Pregunta: 9233. ";


//  Id pregunta: 9345 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  De entre las siguientes, existe una que no es una iniciativa comunitaria relacionada con el &aacute;mbito TIC:";
 choices[66]= new Array();
 choices[66][0] = "ISA";
 choices[66][1] = "eTIN";
 choices[66][2] = "IDAbc";
 choices[66][3] = "CIP 2007-2013";
 answers[66] = choices[66][1];
 units[66] = "103";
 comments[66] = "Id Pregunta: 9345. Fuente: Temario ASTIC p&aacute;gina 15 y ss 2011";


//  Id pregunta: 9364 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  Una red Ethernet que sigue la especificaci&oacute;n 10GBASE-ER:";
 choices[67]= new Array();
 choices[67][0] = "Funciona sobre par de cobre.";
 choices[67][1] = "Funciona con fibra &oacute;ptica que opera en primera ventana.";
 choices[67][2] = "Funciona con fibra &oacute;ptica que opera en tercera ventana.";
 choices[67][3] = "Utiliza fibra &oacute;ptica multimodo.";
 answers[67] = choices[67][2];
 units[67] = "101";
 comments[67] = "Id Pregunta: 9364. pag.14 astic 2011";


//  Id pregunta: 9391 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  &iquest;A que hace referencia el t&eacute;rmino care-of address?";
 choices[68]= new Array();
 choices[68][0] = "Direcci&oacute;n IPv6 compatible con IPv4. ";
 choices[68][1] = "Direcci&oacute;n IPv4 mapeada en IPv6.";
 choices[68][2] = "Direcci&oacute;n IP temporal para un dispositivo m&oacute;vil.";
 choices[68][3] = "Direcci&oacute;n IP para transacciones de Terminales Punto de Venta (TPV).";
 answers[68] = choices[68][2];
 units[68] = "108";
 comments[68] = "Id Pregunta: 9391. Examen TIC A2 2011 Libre";


//  Id pregunta: 9401 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  El modo de transporte del primer est&aacute;ndar ADSL, UIT-T/G.992.1 de 1999, era el ATM, a cuyo efecto, una trama Ethernet de 1.300 bytes se convert&iacute;a en (aproximadamente):";
 choices[69]= new Array();
 choices[69][0] = "1300 x 53 = 68.900 celdas ATM";
 choices[69][1] = "1300 / 48 = 27,1 ? 28 celdas ATM";
 choices[69][2] = "1300 / 53 = 24,5 ? 25 celdas ATM.";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = choices[69][1];
 units[69] = "109";
 comments[69] = "Id Pregunta: 9401. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9442 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  El t&eacute;rmino formal que se emplea para indicar que los datos de un objeto solamente pueden ser manipulados a trav&eacute;s de m&eacute;todos definidos en su interfaz se conoce como:";
 choices[70]= new Array();
 choices[70][0] = "Polimorfismo.";
 choices[70][1] = "Abstracci&oacute;n.";
 choices[70][2] = "Encapsulaci&oacute;n.";
 choices[70][3] = "Persistencia.";
 answers[70] = choices[70][2];
 units[70] = "82";
 comments[70] = "Id Pregunta: 9442. Examen AGE TIC A1 2011";


//  Id pregunta: 9491 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[71]= new Array();
 choices[71][0] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[71][1] = "El diagrama de casos de uso es un modelo conceptual de procesos, el diagrama de clases es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual de datos";
 choices[71][2] = "El diagrama de casos de uso es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 choices[71][3] = "El diagrama de flujo de datos es un modelo conceptual de datos, el modelo entidad/relaci&oacute;n es un modelo conceptual de datos y el diagrama de transici&oacute;n de estados es un modelo conceptual din&aacute;mico";
 answers[71] = choices[71][0];
 units[71] = "78";
 comments[71] = "Id Pregunta: 9491. ";


//  Id pregunta: 9582 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[72]= new Array();
 choices[72][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[72][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[72][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[72][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[72] = choices[72][1];
 units[72] = "43, 74";
 comments[72] = "Id Pregunta: 9582. Examen TIC A1 2011";


//  Id pregunta: 9865 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  En el marco del modelo est&aacute;ndar de gesti&oacute;n de red definido por la ISO y la ITU-TX.700, son &aacute;reas de gesti&oacute;n: ";
 choices[73]= new Array();
 choices[73][0] = "la gesti&oacute;n de fallos, de contabilidad, de configuraci&oacute;n, de calidad defuncionamiento y de seguridad.";
 choices[73][1] = "la gesti&oacute;n de fallos, de la demanda, de configuraci&oacute;n, de rendimiento y deseguridad.";
 choices[73][2] = "la gesti&oacute;n de fallos, de monitorizaci&oacute;n, de configuraci&oacute;n y de seguridad";
 choices[73][3] = "la gesti&oacute;n de monitorizaci&oacute;n, de trazabilidad, de configuraci&oacute;n y de seguridad";
 answers[73] = choices[73][0];
 units[73] = "104";
 comments[73] = "Id Pregunta: 9865. TIC A1, Examen 2013";


//  Id pregunta: 9919 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Dentro del dise&ntilde;o conceptual de datos, en una jerarqu&iacute;a de generalizaci&oacute;n se dice que un subconjunto (caso particular de generalizaci&oacute;n con una sola entidad como subentidad) siempre es una jerarqu&iacute;a:";
 choices[74]= new Array();
 choices[74][0] = "Total y exclusiva.";
 choices[74][1] = "Parcial y superpuesta.";
 choices[74][2] = "Parcial y exclusiva.";
 choices[74][3] = "Total y superpuesta.";
 answers[74] = choices[74][2];
 units[74] = "58";
 comments[74] = "Id Pregunta: 9919. TIC A2, Examen 2013";


//  Id pregunta: 9938 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l es la principal raz&oacute;n por la que en las comunicaciones UMTS y Wi-Fi seutilizan t&eacute;cnicas de expansi&oacute;n del espectro o espectro ensanchado?";
 choices[75]= new Array();
 choices[75][0] = "Para mejorar la resistencia a las interferencias.";
 choices[75][1] = "Para mejorar las seguridad en el acceso al informaci&oacute;n transmitida.";
 choices[75][2] = "Para incrementar la longitud de onda y reducir el consumo energ&eacute;tico.";
 choices[75][3] = "Wi-Fi no utiliza estas t&eacute;cnicas.";
 answers[75] = choices[75][0];
 units[75] = "107, 108";
 comments[75] = "Id Pregunta: 9938. TIC A1, Examen 2013";


//  Id pregunta: 9996 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de reparto del espectro utilizado por GSM (Global System for Mobile communications)?";
 choices[76]= new Array();
 choices[76][0] = "SDMA, Space Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n delespacio.";
 choices[76][1] = "TDMA, Time Division Multiple Access, o acceso m&uacute;ltiple por divisi&oacute;n deltiempo.";
 choices[76][2] = "CDMA, Cell Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n entreceldas.";
 choices[76][3] = "FHMA, Frequency Hops Multiple Access o acceso m&uacute;ltiple por saltos defrecuencia.";
 answers[76] = choices[76][2];
 units[76] = "108";
 comments[76] = "Id Pregunta: 9996. ";


//  Id pregunta: 10019 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Se&ntilde;ale de entre los siguientes cu&aacute;l NO es un framework de pruebas unitarias para Microsoft .NET:";
 choices[77]= new Array();
 choices[77][0] = "xUnit";
 choices[77][1] = "xUnit.net";
 choices[77][2] = "NUnit";
 choices[77][3] = "csUnit";
 answers[77] = choices[77][0];
 units[77] = "59";
 comments[77] = "Id Pregunta: 10019. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10091 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil tiene 5 fases claramente diferenciadas?";
 choices[78]= new Array();
 choices[78][0] = "SCRUM";
 choices[78][1] = "LSD";
 choices[78][2] = "Kanban";
 choices[78][3] = "FDD";
 answers[78] = choices[78][3];
 units[78] = "79";
 comments[78] = "Id Pregunta: 10091. NULL";


//  Id pregunta: 10241 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Teniendo el siguiente c&oacute;digo, despu&eacute;s de ejecutarse &iquest;que respuestas son correctas?:int [] x = new int[25];";
 choices[79]= new Array();
 choices[79][0] = "x[24] es 0";
 choices[79][1] = "x[24] es indefinido";
 choices[79][2] = "x[25] es 0";
 choices[79][3] = "x[0] es igual a null";
 answers[79] = choices[79][0];
 units[79] = "60";
 comments[79] = "Id Pregunta: 10241. NULL";


//  Id pregunta: 10305 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Qu&eacute; muestra el comando top en UNIX?";
 choices[80]= new Array();
 choices[80][0] = "Los ficheros abiertos.";
 choices[80][1] = "El escritorio.";
 choices[80][2] = "Los procesos.";
 choices[80][3] = "Los puertos TCP/IP.";
 answers[80] = choices[80][2];
 units[80] = "53";
 comments[80] = "Id Pregunta: 10305. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10502 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Quien es considerado el creador del Lenguaje HTML?";
 choices[81]= new Array();
 choices[81][0] = "Dan Connolly";
 choices[81][1] = "Hank Thomas-Lee";
 choices[81][2] = "Conway Berners-Lee";
 choices[81][3] = "Tim Berners-Lee";
 answers[81] = choices[81][3];
 units[81] = "69";
 comments[81] = "Id Pregunta: 10502. NULL";


//  Id pregunta: 10503 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Qu&eacute; estandar internacional especifica clases de cableado de proposito general?";
 choices[82]= new Array();
 choices[82][0] = "ISO/IEC 11801";
 choices[82][1] = "EN 50173";
 choices[82][2] = "ISO/IEC 18101";
 choices[82][3] = "EN 50137";
 answers[82] = choices[82][0];
 units[82] = "99";
 comments[82] = "Id Pregunta: 10503. ";


//  Id pregunta: 10526 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Seg&uacute;n la taxonomia de Flynn, un procesador vectorial ser&iacute;a considerado como";
 choices[83]= new Array();
 choices[83][0] = "SISD";
 choices[83][1] = "SIMD";
 choices[83][2] = "MISD";
 choices[83][3] = "MIMD";
 answers[83] = choices[83][1];
 units[83] = "45";
 comments[83] = "Id Pregunta: 10526. NULL";


//  Id pregunta: 10537 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Qu&eacute; combinaci&oacute;n de discos RAID presenta un mayor rendimiento?";
 choices[84]= new Array();
 choices[84][0] = "RAID 0";
 choices[84][1] = "RAID 5";
 choices[84][2] = "RAID 1+0";
 choices[84][3] = "RAID 0+1";
 answers[84] = choices[84][0];
 units[84] = "48";
 comments[84] = "Id Pregunta: 10537. NULL";


//  Id pregunta: 10538 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En IPv6, se&ntilde;ale el prefijo empleado para direcciones link-local:";
 choices[85]= new Array();
 choices[85][0] = "fd00::/8";
 choices[85][1] = "fe00::/64";
 choices[85][2] = "fe80::/64";
 choices[85][3] = "No existen las direcciones link-local en IPv6";
 answers[85] = choices[85][2];
 units[85] = "100";
 comments[85] = "Id Pregunta: 10538. NULL";


//  Id pregunta: 10566 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Seg&uacute;n ITIL un instrumento de gesti&oacute;n para el buen gobierno de las Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones en el dominio del soporte y el desempe&ntilde;o es:";
 choices[86]= new Array();
 choices[86][0] = "Plan de Continuidad de Negocio";
 choices[86][1] = "Plan de contingencia";
 choices[86][2] = "Plan de Recuperaci&oacute;n ante Desastres";
 choices[86][3] = "Plan de pruebas";
 answers[86] = choices[86][1];
 units[86] = "31, 32, 33";
 comments[86] = "Id Pregunta: 10566. ";


//  Id pregunta: 10678 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[87]= new Array();
 choices[87][0] = "Personas jur&iacute;dicas.";
 choices[87][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[87][2] = "Notarios y registradores.";
 choices[87][3] = "Todas las anteriores.";
 answers[87] = choices[87][3];
 units[87] = "30";
 comments[87] = "Id Pregunta: 10678. ";


//  Id pregunta: 10802 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de las siguientes respuestas NO se considera una de las cuatro primitivas de servicio que define el modelo OSI de ISO para la comunicaci&oacute;n entre niveles?";
 choices[88]= new Array();
 choices[88][0] = "Request.";
 choices[88][1] = "Invoke.";
 choices[88][2] = "Response.";
 choices[88][3] = "Confirmation.";
 answers[88] = choices[88][1];
 units[88] = "100";
 comments[88] = "Id Pregunta: 10802. Examen GSI 2014";


//  Id pregunta: 11206 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seg&uacute;n la Agenda digital Europea, &iquest;cu&aacute;l es el objetivo de las redes ultrarr&aacute;pidas debe alcanzarse en el conjunto de la uni&oacute;n europea en 2020?";
 choices[89]= new Array();
 choices[89][0] = "0.5";
 choices[89][1] = "0.8";
 choices[89][2] = "0.9";
 choices[89][3] = "1";
 answers[89] = choices[89][0];
 units[89] = "30";
 comments[89] = "Id Pregunta: 11206. ";


//  Id pregunta: 11235 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Respecto al Framework de Java Struts:";
 choices[90]= new Array();
 choices[90][0] = "El controlador consiste en un servlet llamado ActionServlet.";
 choices[90][1] = "No dispone  de una librer&iacute;a de etiquetas espec&iacute;fica (custom tag library).";
 choices[90][2] = " La &quot;uni&oacute;n&quot; de Struts 1 y JSF ha sido finalmente adoptada como la versi&oacute;n 2.0 de Apache Struts.";
 choices[90][3] = "No soporta internacionalizaci&oacute;n.";
 answers[90] = choices[90][0];
 units[90] = "116";
 comments[90] = "Id Pregunta: 11235. ";


//  Id pregunta: 11325 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qui&eacute;n tiene la competencia sancionadora en materia de protecci&oacute;n de datos?";
 choices[91]= new Array();
 choices[91][0] = "Ministro de Justicia";
 choices[91][1] = "Secretario de Estado de Justicia";
 choices[91][2] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[91][3] = "El registro de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[91] = choices[91][2];
 units[91] = "29";
 comments[91] = "Id Pregunta: 11325. ";


//  Id pregunta: 11336 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Cu&aacute;l de los siguientes es un algoritmo de encaminamiento de estado del enlace";
 choices[92]= new Array();
 choices[92][0] = "IS-IS";
 choices[92][1] = "IGRP";
 choices[92][2] = "BGP";
 choices[92][3] = "RIP";
 answers[92] = choices[92][0];
 units[92] = "102";
 comments[92] = "Id Pregunta: 11336. ";


//  Id pregunta: 11359 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes se considera actividad/es clave del proceso de la Gesti&oacute;n de Nivel de Servicio (SLM)?";
 choices[93]= new Array();
 choices[93][0] = "Entregar servicios acordados";
 choices[93][1] = "Contratar proveedores TI";
 choices[93][2] = "Negociar y monitorizar SLAs para asegurar la satisfacci&oacute;n del cliente con los servicios acordados";
 choices[93][3] = "Alinear los SLAs con las necesidades del cliente";
 answers[93] = choices[93][2];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11359. ";


//  Id pregunta: 11417 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de los siguientes no es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones?";
 choices[94]= new Array();
 choices[94][0] = "Derecho de acceder a los servicios de emergencia de forma gratuita.";
 choices[94][1] = "A impedir mediante un procedimiento sencillo y gratuito la presentaci&oacute;n de la identificaci&oacute;n de su l&iacute;nea a las llamadas emitidas.";
 choices[94][2] = "El derecho a la continuidad de servicio y a obtener una compensaci&oacute;n autom&aacute;tica por su interrupci&oacute;n.";
 choices[94][3] = "A figurar en las gu&iacute;as de abonados obteniendo una retribuci&oacute;n econ&oacute;mica por ello a cargo del Fondo General del Servicio P&uacute;blico.";
 answers[94] = choices[94][3];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11417. ";


//  Id pregunta: 11558 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n el Modelo Oculto de Markov (HMM), se&ntilde;ale la respuesta CORRECTA:";
 choices[95]= new Array();
 choices[95][0] = "No est&aacute; basada en una m&aacute;quina de estados finito.";
 choices[95][1] = "Las transiciones entre estados constituyen el proceso oculto.";
 choices[95][2] = "Los vectores de par&aacute;metros que se producen en cada estado es el proceso observable.";
 choices[95][3] = "Las respuestas b y c son correctas.";
 answers[95] = choices[95][3];
 units[95] = "94";
 comments[95] = "Id Pregunta: 11558. NULL";


//  Id pregunta: 11638 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En M&eacute;trica v3, el proceso de Dise&ntilde;o del Sistema de Informaci&oacute;n, cuando este es estructurado se compone de:";
 choices[96]= new Array();
 choices[96][0] = "9 actividades";
 choices[96][1] = "10 actividades";
 choices[96][2] = "11 actividades";
 choices[96][3] = "12 actividades";
 answers[96] = choices[96][1];
 units[96] = "86";
 comments[96] = "Id Pregunta: 11638. ";


//  Id pregunta: 11648 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La Gesti&oacute;n de la disponibilidad se encuentra en ITILv2 e ITIL v3, respectivamente en:";
 choices[97]= new Array();
 choices[97][0] = "Entrega del servicio y Dise&ntilde;o del servicio";
 choices[97][1] = "Soporte del servicio y Estrategia del servicio";
 choices[97][2] = "Soporte del servicio y Transici&oacute;n del servicio";
 choices[97][3] = "Entrega del servicio y Estrategia del servicio";
 answers[97] = choices[97][0];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11648. ";


//  Id pregunta: 11692 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En qu&eacute; consiste el mecanismo de Sobrecarga NAT";
 choices[98]= new Array();
 choices[98][0] = "En la utilizaci&oacute;n de puertos para traducir una direccion interna local en una direccion interna global.";
 choices[98][1] = "En la utilizaci&oacute;n de puertos para traducir direcciones internas locales en una o m&aacute;s direcciones globales internas.";
 choices[98][2] = "Traduce una direccion local interna en una global interna";
 choices[98][3] = "Traduce una direccion local interna en otra direccion local interna";
 answers[98] = choices[98][1];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11692. NULL";


//  Id pregunta: 11751 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La competencia para la imposici&oacute;n de sanciones seg&uacute;n la Ley de Transparencia,  corresponder&aacute;:";
 choices[99]= new Array();
 choices[99][0] = "Al Ministro de Hacienda y Administraciones P&uacute;blicas cuando el responsable sea un alto cargo de las Administraciones Publicas.";
 choices[99][1] = "Al Consejo de Ministros cuando el alto cargo tenga la condici&oacute;n de miembro del Gobierno o Secretario de Estado.";
 choices[99][2] = "Al Consejo de Ministros cuando el responsable sea un alto cargo de la Administraci&oacute;n General del Estado.";
 choices[99][3] = "Al Ministro de Hacienda y Administraciones P&uacute;blicas cuando el alto cargo tenga la condici&oacute;n de miembro del Gobierno o Secretario de Estado.";
 answers[99] = choices[99][1];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11751. ";


