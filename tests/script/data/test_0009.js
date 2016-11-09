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

//  Id pregunta: 198 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes no es una fuente principal para que una Organizaci&oacute;n identifique sus necesidades de seguiridad f&iacute;sica en el &aacute;rea de sistemas de informaci&oacute;n?";
 choices[0]= new Array();
 choices[0][0] = "Los requisitos legales, estatutarios y contractuales a los que est&eacute; obligada la Organizaci&oacute;n";
 choices[0][1] = "Los principios, objetivos y requisitos para el tratamiento de la informaci&oacute;n que la Organizaci&oacute;n ha desarrollado para soportar sus operaciones";
 choices[0][2] = "El nivel de madurez en la gesti&oacute;n de la seguirdad f&iacute;sica, medido de acuerdo con el Computer Maturity Model";
 choices[0][3] = "La valoraci&oacute;n de los riesgos de la Organizaci&oacute;n";
 answers[0] = choices[0][2];
 units[0] = "33";
 comments[0] = "Id Pregunta: 198. Examen TIC MAP B 2004";


//  Id pregunta: 288 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  La comunicaci&oacute;n descendente se da en uno de los modelos de comunicaci&oacute;n siguientes:";
 choices[1]= new Array();
 choices[1][0] = "Comunicaci&oacute;n en rueda";
 choices[1][1] = "Comunicaci&oacute;n en Y";
 choices[1][2] = "Comunicaci&oacute;n en cadena";
 choices[1][3] = "Comunicaci&oacute;n en c&iacute;rculo";
 answers[1] = choices[1][2];
 units[1] = "23";
 comments[1] = "Id Pregunta: 288. ";


//  Id pregunta: 560 AÃ±o de creación de pregunta: 2006-01-01
 questions[2]= "3)  Cual de las siguientes opciones no es una ventaja de un sistema integrado";
 choices[2]= new Array();
 choices[2][0] = "Mayor eficiencia conjunta y una interrelaci&oacute;n m&aacute;s efectiva de actividades entre subsistemas.";
 choices[2][1] = "Incorporaci&oacute;n de h&aacute;bitos para compartir ampliamente los recursos, obteniendo beneficios potenciales, debidos aeconom&iacute;as de escala y especializaci&oacute;n.";
 choices[2][2] = "Posibilidad de abordar las decisiones desde la perspectiva del sistema com&uacute;n conjunto en vez de sobre una basesub&oacute;ptima que utilice solamente informaci&oacute;n y objetivos locales.";
 choices[2][3] = "Sistemas mas simples evitando riesgos a&ntilde;adidos";
 answers[2] = choices[2][3];
 units[2] = "21";
 comments[2] = "Id Pregunta: 560. ";


//  Id pregunta: 631 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Cu&aacute;l de las siguientes afirmaciones permite la legislaci&oacute;n espa&ntilde;ola actual respecto a los programas de ordenador:";
 choices[3]= new Array();
 choices[3][0] = "Los principios que rigen los programas de ordenador pueden ser patentables.";
 choices[3][1] = "Los derechos sobre los programas de ordenador pueden ser inscritos en el Registro de la Propiedad Intelectual.";
 choices[3][2] = "Los programas de ordenador pueden ser patentables.";
 choices[3][3] = "Los programas de ordenador pueden ser inscritos en el Registro de la Propiedad ";
 answers[3] = choices[3][1];
 units[3] = "36";
 comments[3] = "Id Pregunta: 631. ";


//  Id pregunta: 640 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Cu&aacute;l de las siguientes afirmaciones sobre la Iniciativa de Accesibilidad para el contenido en la web (WCAG 1.0) es incorrecta:";
 choices[4]= new Array();
 choices[4][0] = "La especificaci&oacute;n contiene 14 pautas, que son los principios generales para el dise&ntilde;o accesible";
 choices[4][1] = "Cada pauta est&aacute; asociada a uno o m&aacute;s puntos de verificaci&oacute;n que describen c&oacute;mo aplicar esa pauta a las p&aacute;ginas web.";
 choices[4][2] = "Cada punto de verificaci&oacute;n est&aacute; asociado a uno de los tres niveles de adecuaci&oacute;n, los niveles A, AA y AAA";
 choices[4][3] = "El nivel minimo de adecuacion a esta norma lo fija la Ley de Servicios de la Sociedad de la Informaci&oacute;n y del Comercio Electr&oacute;nico y obliga a que las p&aacute;ginas web de la Administraci&oacute;n cumplan al menos con el nivel de adecuaci&oacute;n AA.";
 answers[4] = choices[4][3];
 units[4] = "39";
 comments[4] = "Id Pregunta: 640. ";


//  Id pregunta: 649 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Cu&aacute;l de las siguientes afirmaciones sobre normalizaci&oacute;n europea es incorrecta:";
 choices[5]= new Array();
 choices[5][0] = "El Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI) elabora Especificaciones t&eacute;cnicas (TS), Informes t&eacute;cnicos (TR), Normas ETSI (ES) y Normas Europeas (EN).";
 choices[5][1] = "Los &Oacute;rganismos Nacionales de Normalizaci&oacute;n tienen la obligaci&oacute;n de adoptar &iacute;ntegramente las Normas Europeas (EN) elaboradas por CEN/CENELEC o ETSI.";
 choices[5][2] = "Las normas europeas (EN) elaboradas por CEN/CENELEC o ETSI son de obligado cumplimiento por los Estados Miembros.";
 choices[5][3] = "CEN/CENELEC elaboran de Normas Europeas (EN) y Normas Experimentales Europeas (ENVs).";
 answers[5] = choices[5][2];
 units[5] = "42";
 comments[5] = "Id Pregunta: 649. ";


//  Id pregunta: 918 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; es el abandonware?:";
 choices[6]= new Array();
 choices[6][0] = "Consiste en retomar proyectos software interesantes, que fueron abandonados en su momento por falta de rentabilidad";
 choices[6][1] = "Consiste en recopilar SW ya anticuado, cuyo soporte ha sido abandonado por la empresa/persona creadora, y que normalmente podr&aacute; obtenerse gratuitamente al estar descatalogado";
 choices[6][2] = "Consiste en estudiar el SW que circula por la red &quot;sin due&ntilde;o&quot; y que carece de las correspondientes licencias de distribuci&oacute;n";
 choices[6][3] = "Nada de lo anterior es cierto";
 answers[6] = choices[6][1];
 units[6] = "61";
 comments[6] = "Id Pregunta: 918. ";


//  Id pregunta: 998 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El acr&oacute;nimo XML corresponde a:";
 choices[7]= new Array();
 choices[7][0] = "Extensible Markup Language";
 choices[7][1] = "Extended Markup Language";
 choices[7][2] = "Expressions Markup Language";
 choices[7][3] = "Extension Markup Language";
 answers[7] = choices[7][0];
 units[7] = "69";
 comments[7] = "Id Pregunta: 998. NULL";


//  Id pregunta: 1754 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es el CLR?";
 choices[8]= new Array();
 choices[8][0] = "Un lenguaje de programaci&oacute;n para .Net";
 choices[8][1] = "El entorno de ejecuci&oacute;n de .Net";
 choices[8][2] = "Una biblioteca de clases de objetos";
 choices[8][3] = "Un motor de bases de datos para dispositivos m&oacute;viles";
 answers[8] = choices[8][1];
 units[8] = "59";
 comments[8] = "Id Pregunta: 1754. ";


//  Id pregunta: 1832 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  OLAP significa:";
 choices[9]= new Array();
 choices[9][0] = "On-Line Automatic Prediction.";
 choices[9][1] = "On-Line Analytical Prediction.";
 choices[9][2] = "On-Line Automatic Processing.";
 choices[9][3] = "On-Line Analytical Processing.";
 answers[9] = choices[9][3];
 units[9] = "68";
 comments[9] = "Id Pregunta: 1832. ";


//  Id pregunta: 2343 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En programaci&oacute;n orientada a objetos, el mecanismo por el cual una clase de objeto puede ser definido como un caso particular de una clase m&aacute;s general se denomina:";
 choices[10]= new Array();
 choices[10][0] = "Herencia";
 choices[10][1] = "Subclase";
 choices[10][2] = "Polimorfismo";
 choices[10][3] = "Encapsulaci&oacute;n";
 answers[10] = choices[10][0];
 units[10] = "82";
 comments[10] = "Id Pregunta: 2343. ";


//  Id pregunta: 2756 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  &iquest;C&oacute;mo se denomina la t&eacute;cnica que permite  obtener un modelo f&iacute;sico de datos a partir del modelo de clases?";
 choices[11]= new Array();
 choices[11][0] = "Matricial";
 choices[11][1] = "Historia de vidas de las entidades";
 choices[11][2] = "Diagrama de paquetes";
 choices[11][3] = "Reglas de transformaci&oacute;n.";
 answers[11] = choices[11][3];
 units[11] = "82";
 comments[11] = "Id Pregunta: 2756. ";


//  Id pregunta: 2887 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El sistema EURODAC de TESTA II intercambia informaci&oacute;n entre las Administraciones P&uacute;blicas europeas referentes a:";
 choices[12]= new Array();
 choices[12][0] = "inmigraci&oacute;n";
 choices[12][1] = "accidentes de tr&aacute;fico";
 choices[12][2] = "ofertas de empleo";
 choices[12][3] = "fondos estructurales";
 answers[12] = choices[12][0];
 units[12] = "103";
 comments[12] = "Id Pregunta: 2887. ";


//  Id pregunta: 3182 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes respuestas no describe las funciones de un repetidor?:";
 choices[13]= new Array();
 choices[13][0] = "Recibe, amplifica y retransmite las se&ntilde;ales recibidas";
 choices[13][1] = "Interconecta m&uacute;ltiples segmentos de LAN";
 choices[13][2] = "Previene del deterioro de la se&ntilde;al causado por las largas longitudes del cable";
 choices[13][3] = "Filtra el tr&aacute;fico basado en las direcciones MAC";
 answers[13] = choices[13][3];
 units[13] = "97";
 comments[13] = "Id Pregunta: 3182. NULL";


//  Id pregunta: 3446 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El protocolo de gesti&oacute;n SNMP opera sobre el protocolo:";
 choices[14]= new Array();
 choices[14][0] = "UDP";
 choices[14][1] = "TCP";
 choices[14][2] = "&quot;a&quot; y &quot;b&quot; son ciertas";
 choices[14][3] = "&quot;a&quot; y &quot;b&quot; son falsas";
 answers[14] = choices[14][0];
 units[14] = "104";
 comments[14] = "Id Pregunta: 3446. ";


//  Id pregunta: 4198 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  El estandar 802.11n se centra en";
 choices[15]= new Array();
 choices[15][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[15][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[15][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[15][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[15] = choices[15][2];
 units[15] = "107";
 comments[15] = "Id Pregunta: 4198. NULL";


//  Id pregunta: 4218 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Las redes integradas de Datos y Voz se definen en el grupo de trabajo del IEEE";
 choices[16]= new Array();
 choices[16][0] = "802.9";
 choices[16][1] = "802.10";
 choices[16][2] = "802.11";
 choices[16][3] = "802.12";
 answers[16] = choices[16][0];
 units[16] = "101";
 comments[16] = "Id Pregunta: 4218. ";


//  Id pregunta: 4278 AÃ±o de creación de pregunta: 2007-01-01
 questions[17]= "18)  Qu&eacute; son las restricciones de integridad?";
 choices[17]= new Array();
 choices[17][0] = "Son condiciones sobre el almacenamiento f&iacute;sico de los datos de la base de datos.";
 choices[17][1] = "Son condiciones que deben cumplir los datos almacenados en la base de datos relacional.";
 choices[17][2] = "Son las restricciones que el sistema de gesti&oacute;n de base de datos impone a los ficheros de la base de datos.";
 choices[17][3] = "Son una serie de caracter&iacute;sticas que deben cumplir las transacciones.";
 answers[17] = choices[17][1];
 units[17] = "58";
 comments[17] = "Id Pregunta: 4278. ";


//  Id pregunta: 4467 AÃ±o de creación de pregunta: 2007-01-01
 questions[18]= "19)  El DNI digital permitir&aacute;:";
 choices[18]= new Array();
 choices[18][0] = "Firmar y cifrar.";
 choices[18][1] = "Solo firmar.";
 choices[18][2] = "Solo cifrar.";
 choices[18][3] = "Solo funciones 3DES";
 answers[18] = choices[18][1];
 units[18] = "74";
 comments[18] = "Id Pregunta: 4467. NULL";


//  Id pregunta: 4864 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a las VLAN (Virtual Local Area Networks) es cierta?";
 choices[19]= new Array();
 choices[19][0] = "Las VLAN reducen el n&uacute;mero de dominios de difusi&oacute;n de la red";
 choices[19][1] = "La segmentaci&oacute;n de redes en VLAN aumenta el tr&aacute;fico en la red, ya que ha de a&ntilde;adirse informaci&oacute;n desubred complementaria en cada paquete";
 choices[19][2] = "La definici&oacute;n de una misma VLAN puede abarcar uno o m&aacute;s switches (conmutadores)";
 choices[19][3] = "Las VLAN aumentan el tama&ntilde;o de los dominios de difusi&oacute;n de la red";
 answers[19] = choices[19][2];
 units[19] = "102";
 comments[19] = "Id Pregunta: 4864. ";


//  Id pregunta: 4987 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  De acuerdo con el modelo de arquitectura de seguridad de OSI, definido en la norma ISO/IEC 7498-2, indique cu&aacute;lde las siguientes afirmaciones es correcta:";
 choices[20]= new Array();
 choices[20][0] = "Un mecanismo de seguridad puede ser suministrado por varios servicios de seguridad";
 choices[20][1] = "Cada servicio de seguridad debe ser suministrado por el mecanismo correspondiente";
 choices[20][2] = "Todos los mecanismos de seguridad que se definen en el modelo se basan en algoritmos criptogr&aacute;ficos";
 choices[20][3] = "Un mismo servicio de seguridad puede ser suministrado por varios mecanismos de seguridad";
 answers[20] = choices[20][3];
 units[20] = "74";
 comments[20] = "Id Pregunta: 4987. Examen TIC A 2007";


//  Id pregunta: 5209 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Entre los beneficios del Ajuste Dimensional encontramos:";
 choices[21]= new Array();
 choices[21][0] = "Mayores costes.";
 choices[21][1] = "Tiempo de respuesta inconsistente.";
 choices[21][2] = "Integridad de datos.";
 choices[21][3] = "Interfaz de usuario m&aacute;s compleja.";
 answers[21] = choices[21][2];
 units[21] = "90";
 comments[21] = "Id Pregunta: 5209. ";


//  Id pregunta: 5210 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  En el modelo EFQM:";
 choices[22]= new Array();
 choices[22][0] = "El subcriterio 6A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[22][1] = "El subcriterio 6B tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[22][2] = "El subcriterio 7A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[22][3] = "El subcriterio 7B tiene un peso del 75% del total de los puntos del criterio 6";
 answers[22] = choices[22][1];
 units[22] = "92";
 comments[22] = "Id Pregunta: 5210. NULL";


//  Id pregunta: 5496 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;Cu&aacute;les son los contenedores de la tecnolog&iacute;a Java EE?";
 choices[23]= new Array();
 choices[23][0] = "EJB Container y Web Container";
 choices[23][1] = "EJB Container, Web Container y Application Client Container";
 choices[23][2] = "b) y Applet Container";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = choices[23][2];
 units[23] = "60";
 comments[23] = "Id Pregunta: 5496. NULL";


//  Id pregunta: 5722 AÃ±o de creación de pregunta: 2009-01-01
 questions[24]= "25)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[24]= new Array();
 choices[24][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros.";
 choices[24][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee.";
 choices[24][2] = "Los datos van formados mediante etiquetas de lo que significan.";
 choices[24][3] = "Si las reglas sint&aacute;cticas del DTD se cumplen, el documento es v&aacute;lido.";
 answers[24] = choices[24][1];
 units[24] = "69";
 comments[24] = "Id Pregunta: 5722. MAP 2008 A2";


//  Id pregunta: 5890 AÃ±o de creación de pregunta: 2009-01-01
 questions[25]= "26)  &iquest;Cu&aacute;les de los siguientes elementos no pueden ser miembros de una clase en Java SE 5?";
 choices[25]= new Array();
 choices[25][0] = "Variables de instancia y de clase";
 choices[25][1] = "M&eacute;todos";
 choices[25][2] = "Otras clases (clases internas)";
 choices[25][3] = "Todas las anteriores son ciertas";
 answers[25] = choices[25][3];
 units[25] = "60";
 comments[25] = "Id Pregunta: 5890. NULL";


//  Id pregunta: 5976 AÃ±o de creación de pregunta: 2010-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[26]= new Array();
 choices[26][0] = "Internet Information Server.";
 choices[26][1] = "Weblogic.";
 choices[26][2] = "Websphere.";
 choices[26][3] = "Apache.";
 answers[26] = choices[26][3];
 units[26] = "113";
 comments[26] = "Id Pregunta: 5976. TIC A 2009";


//  Id pregunta: 6123 AÃ±o de creación de pregunta: 2010-01-01
 questions[27]= "28)  Por v&iacute;a electr&oacute;nica en Espa&ntilde;a, pueden celebrarse los siguientes tipos de contratos:";
 choices[27]= new Array();
 choices[27][0] = "Todos.";
 choices[27][1] = "Ninguno";
 choices[27][2] = "Todos excepto los relativos al derecho de familia y sucesiones (adopciones, matrimonio, testamento).";
 choices[27][3] = "S&oacute;lo los relativos a comercio electr&oacute;nico.";
 answers[27] = choices[27][2];
 units[27] = "30";
 comments[27] = "Id Pregunta: 6123. TIC A 2009 (Ley 34/2002, art&iacute;culo 23.4)";


//  Id pregunta: 6237 AÃ±o de creación de pregunta: 2010-01-01
 questions[28]= "29)  En el marco de trabajo de la gesti&oacute;n de proyectos no se realiza:";
 choices[28]= new Array();
 choices[28][0] = "Gesti&oacute;n del tiempo.";
 choices[28][1] = "Gesti&oacute;n de la calidad.";
 choices[28][2] = "Gesti&oacute;n del cambio.";
 choices[28][3] = "Gesti&oacute;n de contenidos.";
 answers[28] = choices[28][3];
 units[28] = "27";
 comments[28] = "Id Pregunta: 6237. TIC B-2009, bloque desarrollo";


//  Id pregunta: 6284 AÃ±o de creación de pregunta: 2010-01-01
 questions[29]= "30)  &iquest;Qu&eacute; es un Plan de Sistemas?";
 choices[29]= new Array();
 choices[29][0] = "Un an&aacute;lisis de la situaci&oacute;n actual del &aacute;rea de sistemas de una organizaci&oacute;n";
 choices[29][1] = "Un manual de usuario para los clientes de aplicaciones inform&aacute;ticas de una organizaci&oacute;n";
 choices[29][2] = "Un plan de riesgos de sistemas de informaci&oacute;n";
 choices[29][3] = "Un documento que recoge el conjunto de medidas dirigidas a satisfacer las necesidades en materia de tratamiento automatizado de informaci&oacute;n de una organizaci&oacute;n";
 answers[29] = choices[29][3];
 units[29] = "77";
 comments[29] = "Id Pregunta: 6284. ";


//  Id pregunta: 8331 AÃ±o de creación de pregunta: 2011-01-01
 questions[30]= "31)  &iquest;Con qu&eacute; nombre se conoce a las herramientas CASE adaptables que permiten la definici&oacute;n de nuestra propia t&eacute;cnica de modelado,pudiendo definir nuestros propios elementos y s&iacute;mbolos de las notaciones a utilizar?";
 choices[30]= new Array();
 choices[30][0] = "Upper CASE (U-CASE)";
 choices[30][1] = "MetaCASE";
 choices[30][2] = "CAST (Computer-Aided Software Testing)";
 choices[30][3] = "IPSE (Integrated Programming Support Environment)";
 answers[30] = choices[30][1];
 units[30] = "91";
 comments[30] = "Id Pregunta: 8331. Examen TIC A2 2010";


//  Id pregunta: 8372 AÃ±o de creación de pregunta: 2011-01-01
 questions[31]= "32)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo se denomina:";
 choices[31]= new Array();
 choices[31][0] = "Mantenimiento adaptativo.";
 choices[31][1] = "Mantenimiento preventivo.";
 choices[31][2] = "Mantenimiento correctivo.";
 choices[31][3] = "Mantenimiento evolutivo.";
 answers[31] = choices[31][1];
 units[31] = "86";
 comments[31] = "Id Pregunta: 8372. Examen TIC A2 2010";


//  Id pregunta: 8474 AÃ±o de creación de pregunta: 2011-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes modos de propagaci&oacute;n de la fibra &oacute;ptica permite un mayor alcance y capacidad?";
 choices[32]= new Array();
 choices[32][0] = "Monomodo";
 choices[32][1] = "Multimodo con salto de &iacute;ndice de refracci&oacute;n.";
 choices[32][2] = "Multimodo con &iacute;ndice de refracci&oacute;n gradual. ";
 choices[32][3] = "Ultramodo de alta dispersi&oacute;n modal.";
 answers[32] = choices[32][0];
 units[32] = "99";
 comments[32] = "Id Pregunta: 8474. Examen TIC A2 2010 interna";


//  Id pregunta: 8661 AÃ±o de creación de pregunta: 2011-01-01
 questions[33]= "34)  De las siguientes, &iquest;cu&aacute;l no es una funci&oacute;n realizada por los mensajes enviados por el protocolo ICMP?";
 choices[33]= new Array();
 choices[33][0] = "Control de flujo";
 choices[33][1] = "Detecci&oacute;n de destinos inalcanzables";
 choices[33][2] = "Encapsulaci&oacute;n de datagramas";
 choices[33][3] = "Redirecci&oacute;n de rutas";
 answers[33] = choices[33][2];
 units[33] = "100";
 comments[33] = "Id Pregunta: 8661. Examen UPM A2 2011";


//  Id pregunta: 8828 AÃ±o de creación de pregunta: 2011-01-01
 questions[34]= "35)   Si hablamos de virtualizaci&oacute;n &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[34]= new Array();
 choices[34][0] = " La virtualizaci&oacute;n del sistema operativo ofrece un conjunto de librer&iacute;as que hace que las aplicaciones que se ejecutan aparenten que lo hacen en una m&aacute;quina dedicada ";
 choices[34][1] = " La virtualizaci&oacute;n del sistema operativo es la mejor soluci&oacute;n para configuraciones heterog&eacute;neas";
 choices[34][2] = " La virtualizaci&oacute;n del sistema operativo hace que las aplicaciones funcionen siempre igual de r&aacute;pido que en el mismo sistema dedicado";
 choices[34][3] = " En emulaci&oacute;n hardware o VMM las aplicaciones no pueden migrarse entre m&aacute;quinas diferentes";
 answers[34] = choices[34][0];
 units[34] = "119";
 comments[34] = "Id Pregunta: 8828. Examen UC3M 2010";


//  Id pregunta: 8878 AÃ±o de creación de pregunta: 2011-01-01
 questions[35]= "36)  La cl&aacute;usula HAVING de SQL:";
 choices[35]= new Array();
 choices[35][0] = "Establece un filtro para seleccionar las filas que se usar&aacute;n en la consulta.";
 choices[35][1] = "Precisa de la presencia de la cl&aacute;usula WHERE en la sentencia.";
 choices[35][2] = "Establece un filtro que se aplica a las tablas agrupadas.";
 choices[35][3] = "Establece una condici&oacute;n que deben cumplir las filas.";
 answers[35] = choices[35][2];
 units[35] = "57, 58";
 comments[35] = "Id Pregunta: 8878. Examen UPM A2 2011";


//  Id pregunta: 8903 AÃ±o de creación de pregunta: 2011-01-01
 questions[36]= "37)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no es una fuente accesible al p&uacute;blico:";
 choices[36]= new Array();
 choices[36][0] = "El padr&oacute;n municipal.";
 choices[36][1] = "Los diarios oficiales.";
 choices[36][2] = "El censo promocional.";
 choices[36][3] = "Los medios de comunicaci&oacute;n";
 answers[36] = choices[36][0];
 units[36] = "29";
 comments[36] = "Id Pregunta: 8903. Operador Ayto. Madrid 2010";


//  Id pregunta: 8960 AÃ±o de creación de pregunta: 2011-01-01
 questions[37]= "38)  Los pilares de CRM son:";
 choices[37]= new Array();
 choices[37][0] = "Estrategia, personas, servicios, tecnologias";
 choices[37][1] = "Estrategia, personas, gestion, tecnologias";
 choices[37][2] = "Estrategia, clientes, servicios, tecnologias";
 choices[37][3] = "Estrategias, personas, procesos, tecnologias";
 answers[37] = choices[37][3];
 units[37] = "65";
 comments[37] = "Id Pregunta: 8960. ";


//  Id pregunta: 9058 AÃ±o de creación de pregunta: 2011-01-01
 questions[38]= "39)  &iquest;Qu&eacute; categor&iacute;as de HSDPA pueden alcanzar 10 Mbits/s?";
 choices[38]= new Array();
 choices[38][0] = "9 y 10";
 choices[38][1] = "9";
 choices[38][2] = "10";
 choices[38][3] = "12";
 answers[38] = choices[38][0];
 units[38] = "108";
 comments[38] = "Id Pregunta: 9058. NULL";


//  Id pregunta: 9157 AÃ±o de creación de pregunta: 2013-01-01
 questions[39]= "40)  De acuerdo a AGR010, un sistema CMI (Computer Managed Instruction) con un entorno basado en web, no tiene por qu&eacute; cumplir con:";
 choices[39]= new Array();
 choices[39][0] = "Comunicaci&oacute;n HTTP (HACP Binding)";
 choices[39][1] = "Comunicaci&oacute;n mediante API (API Binding)";
 choices[39][2] = "Definici&oacute;n de la estructura del curso (File Binding)";
 choices[39][3] = "Definici&oacute;n de los tipos de datos del curso (Data Binding) ";
 answers[39] = choices[39][3];
 units[39] = "66";
 comments[39] = "Id Pregunta: 9157. ";


//  Id pregunta: 9177 AÃ±o de creación de pregunta: 2013-01-01
 questions[40]= "41)  Es un formato de imagen vectorial:";
 choices[40]= new Array();
 choices[40][0] = "VML";
 choices[40][1] = "JPG";
 choices[40][2] = "XCF";
 choices[40][3] = "GIF";
 answers[40] = choices[40][0];
 units[40] = "93";
 comments[40] = "Id Pregunta: 9177. NULL";


//  Id pregunta: 9280 AÃ±o de creación de pregunta: 2013-01-01
 questions[41]= "42)  Se&ntilde;ale la FALSA respecto a los criterios de seguridad, normalizaci&oacute;n y conservaci&oacute;n.";
 choices[41]= new Array();
 choices[41][0] = "Son las recomendaciones sobre normalizaci&oacute;n e interoperabilidad seguidas por la administraci&oacute;n.";
 choices[41][1] = "Fueron elaboradas por el Consejo Superior de Inform&aacute;tica a ra&iacute;z del RD 209/2003.";
 choices[41][2] = "Consta de tres libros o gu&iacute;as: criterios de seguridad, de normalizaci&oacute;n y de conservaci&oacute;n.";
 choices[41][3] = "Todas son verdaderas. ";
 answers[41] = choices[41][3];
 units[41] = "40";
 comments[41] = "Id Pregunta: 9280. ";


//  Id pregunta: 9374 AÃ±o de creación de pregunta: 2013-01-01
 questions[42]= "43)  Indique cu&aacute;l de las siguientes afirmaciones es correcta en el &aacute;mbito de la normalizaci&oacute;n de puntuaciones de la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta:";
 choices[42]= new Array();
 choices[42][0] = "El m&eacute;todo de fracci&oacute;n del ideal y el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[42][1] = "El m&eacute;todo de fracci&oacute;n del m&aacute;ximo y el m&eacute;todo de fracci&oacute;n de la suma no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[42][2] = "El m&eacute;todo de fracci&oacute;n del ideal no mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo s&iacute; la mantiene";
 choices[42][3] = "El m&eacute;todo de fracci&oacute;n del ideal mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no la mantiene";
 answers[42] = choices[42][2];
 units[42] = "34";
 comments[42] = "Id Pregunta: 9374. ";


//  Id pregunta: 9652 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  Entre las caracter&iacute;sticas del modelo de calidad de la ISO 9126 se encuentran:";
 choices[43]= new Array();
 choices[43][0] = "Funcionalidad";
 choices[43][1] = "Fiabilidad";
 choices[43][2] = "Portabilidad";
 choices[43][3] = "Todas las anteriores";
 answers[43] = choices[43][3];
 units[43] = "87";
 comments[43] = "Id Pregunta: 9652. Son 6, Funcionalidad, Fiabilidad, Usabilidad, Eficiencia, Mantenibilidad, Portabilidad";


//  Id pregunta: 9665 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un sistema multiprocesador o mainframe:";
 choices[44]= new Array();
 choices[44][0] = "Son soluciones altamente propietarias para entornos no heterog&eacute;neos.";
 choices[44][1] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH.";
 choices[44][2] = "Se paralelizan sistem&aacute;ticamente las tareas y procesos, aprovechando su alto n&uacute;mero de procesadores.";
 choices[44][3] = "En el mercado hay un gran n&uacute;mero de fabricantes de dichos sistemas.";
 answers[44] = choices[44][3];
 units[44] = "45";
 comments[44] = "Id Pregunta: 9665. ";


//  Id pregunta: 9729 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un framework JAVA";
 choices[45]= new Array();
 choices[45][0] = "Bird.";
 choices[45][1] = "Hibernate.";
 choices[45][2] = "Maverick.";
 choices[45][3] = "Spring.";
 answers[45] = choices[45][0];
 units[45] = "61";
 comments[45] = "Id Pregunta: 9729. Examen TIC-A1 2013";


//  Id pregunta: 9746 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  COCOMO II est&aacute; formado por tres modelos o submodelos. &iquest;Cu&aacute;l de los siguientes NO es un modelo de COCOMO II?";
 choices[46]= new Array();
 choices[46][0] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n.";
 choices[46][1] = "Modelo de Reutilizaci&oacute;n de Objetos.";
 choices[46][2] = "Modelo de Dise&ntilde;o Preliminar.";
 choices[46][3] = "Modelo Post-Arquitectura.";
 answers[46] = choices[46][1];
 units[46] = "88";
 comments[46] = "Id Pregunta: 9746. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9768 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones muy graves:";
 choices[47]= new Array();
 choices[47][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida.";
 choices[47][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[47][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[47][3] = "La ausencia de cita de la fuente.";
 answers[47] = choices[47][2];
 units[47] = "22";
 comments[47] = "Id Pregunta: 9768. ";


//  Id pregunta: 9809 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  Seg&uacute;n M&eacute;trica v3, en el contexto del modelo entidad-relaci&oacute;n extendido, se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[48]= new Array();
 choices[48][0] = "La cardinalidad representa la participaci&oacute;n en la relaci&oacute;n de cada una de las entidades afectadas. ";
 choices[48][1] = "Un tipo de entidad describe el esquema o intensi&oacute;n para un conjunto de entidades que poseen la misma estructura. ";
 choices[48][2] = "Cuando las ocurrencias de una entidad no pueden existir si desaparece el ejemplar del tipo de entidad regular del cual depende, se dice que existe una dependencia en existencia. ";
 choices[48][3] = "La agregaci&oacute;n, consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian. ";
 answers[48] = choices[48][3];
 units[48] = "86";
 comments[48] = "Id Pregunta: 9809. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9848 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  Indique cu&aacute;l de las siguientes afirmaciones relacionadas con IPsec es FALSA:";
 choices[49]= new Array();
 choices[49][0] = "IPv6 incluye expl&iacute;citamente la posibilidad de utilizarlo.";
 choices[49][1] = "Puede operar en modo t&uacute;nel o en modo transporte.";
 choices[49][2] = "El protocolo AH proporciona confidencialidad.";
 choices[49][3] = "El protocolo ESP proporciona autenticaci&oacute;n.";
 answers[49] = choices[49][2];
 units[49] = "111";
 comments[49] = "Id Pregunta: 9848. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9962 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  Los dos componentes principales de ADO.NET para el acceso a los datos y su manipulaci&oacute;n son:";
 choices[50]= new Array();
 choices[50][0] = ".NET Framework Data Connectivity y ADO.NET DataSet";
 choices[50][1] = ".NET Framework Data Providers y ADO.NET ResultSet";
 choices[50][2] = ".NET Framework Data Connectivity y ADO.NET ResultSet";
 choices[50][3] = ".NET Framework Data Providers y ADO.NET DataSet";
 answers[50] = choices[50][3];
 units[50] = "59,115";
 comments[50] = "Id Pregunta: 9962. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9973 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  Indique cu&aacute;l de los siguientes elementos NO se asocia a un sistema datawarehouse: ";
 choices[51]= new Array();
 choices[51][0] = "Un motor de transacciones.";
 choices[51][1] = "Las herramientas de Extracci&oacute;n, Transformaci&oacute;n y Carga de datos.";
 choices[51][2] = "Las herramientas de explotaci&oacute;n anal&iacute;tica de la informaci&oacute;n.";
 choices[51][3] = "La base de datos multidimensional";
 answers[51] = choices[51][0];
 units[51] = "68,71";
 comments[51] = "Id Pregunta: 9973. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 10063 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes canales de acceso NO se emplea en RDSI?";
 choices[52]= new Array();
 choices[52][0] = "B ";
 choices[52][1] = "D";
 choices[52][2] = "H ";
 choices[52][3] = "I";
 answers[52] = choices[52][3];
 units[52] = "103, 109";
 comments[52] = "Id Pregunta: 10063. TIC A2, libre, Examen 2013";


//  Id pregunta: 10066 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  Indicar de qu&eacute; zonas se encarga RIPE-NCC como Registro Regional de Internet (RIR):";
 choices[53]= new Array();
 choices[53][0] = "Am&eacute;rica Central, Am&eacute;rica del Norte y del Sur.";
 choices[53][1] = "Europa y Norte de &Aacute;frica.";
 choices[53][2] = "Europa, Am&eacute;rica Central y Am&eacute;rica del Sur.";
 choices[53][3] = "Europa, Oriente Medio y Asia Central.";
 answers[53] = choices[53][3];
 units[53] = "112";
 comments[53] = "Id Pregunta: 10066. TIC A2, libre, Examen 2013";


//  Id pregunta: 10067 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  &iquest;C&oacute;mo se llama la clasificaci&oacute;n no jer&aacute;rquica de la informaci&oacute;n mediante etiquetas/tags por parte de los usuarios de la misma?";
 choices[54]= new Array();
 choices[54][0] = "Web 3.0. ";
 choices[54][1] = "Labelling.";
 choices[54][2] = "Taxonom&iacute;a.";
 choices[54][3] = "Folcsonom&iacute;a.";
 answers[54] = choices[54][3];
 units[54] = "120";
 comments[54] = "Id Pregunta: 10067. TIC A2, libre, Examen 2013";


//  Id pregunta: 10083 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo del proceso?";
 choices[55]= new Array();
 choices[55][0] = "Entorno de desarrollo";
 choices[55][1] = "Modelado de negocio";
 choices[55][2] = "Pruebas";
 choices[55][3] = "Despliegue";
 answers[55] = choices[55][0];
 units[55] = "76";
 comments[55] = "Id Pregunta: 10083. NULL";


//  Id pregunta: 10097 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  De acuerdo a M&eacute;trica v.3, la pr&aacute;ctica JAD disitngue distinto perfiles. &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[56]= new Array();
 choices[56][0] = "Moderador (l&iacute;der Jad)";
 choices[56][1] = "Desarrolladores";
 choices[56][2] = "Usuarios";
 choices[56][3] = "Analistas";
 answers[56] = choices[56][3];
 units[56] = "78";
 comments[56] = "Id Pregunta: 10097. NULL";


//  Id pregunta: 10105 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  Indique cu&aacute;l no es una t&eacute;cnica de an&aacute;lisis estructurado";
 choices[57]= new Array();
 choices[57][0] = "SADR";
 choices[57][1] = "SASS";
 choices[57][2] = "SRD";
 choices[57][3] = "SADT";
 answers[57] = choices[57][0];
 units[57] = "81";
 comments[57] = "Id Pregunta: 10105. NULL";


//  Id pregunta: 10114 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  MTU es:";
 choices[58]= new Array();
 choices[58][0] = "El tama&ntilde;o en bytes de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[58][1] = "El m&aacute;ximo retardo medido en segundos permitido entre dos nodos";
 choices[58][2] = "El tama&ntilde;o en bits de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[58][3] = "El m&aacute;ximo retardo medido en milisegundos permitido entre dos nodos";
 answers[58] = choices[58][0];
 units[58] = "101";
 comments[58] = "Id Pregunta: 10114. Maximum Transfer Unit";


//  Id pregunta: 10126 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  La red espa&ntilde;ola para investigaci&oacute;n y educaci&oacute;n es:";
 choices[59]= new Array();
 choices[59][0] = "GEANT";
 choices[59][1] = "IRIS";
 choices[59][2] = "TESTA";
 choices[59][3] = "SARA";
 answers[59] = choices[59][1];
 units[59] = "103";
 comments[59] = "Id Pregunta: 10126. ";


//  Id pregunta: 10179 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  La herencia es el mecanismo de implementaci&oacute;n mediante el cual elementos m&aacute;s espec&iacute;ficos incorporan la estructura y comportamiento de elementos m&aacute;s generales.";
 choices[60]= new Array();
 choices[60][0] = "La herencia es siempre transitiva";
 choices[60][1] = "La herencia repetida es un problema derivado de la herencia m&uacute;ltiple que tiene lugar cuando una clase hereda de dos o m&aacute;s clases un m&eacute;todo con el mismo nombre y diferente implementaci&oacute;n.";
 choices[60][2] = "A trav&eacute;s de la herencia, una clase derivada puede heredar el comportamiento de una clase base, sin sobreescribir la funcionalidad gen&eacute;rica determinada en &eacute;sta.";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = choices[60][0];
 units[60] = "82";
 comments[60] = "Id Pregunta: 10179. ";


//  Id pregunta: 10192 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  &iquest;Qu&eacute; es PDF-417?";
 choices[61]= new Array();
 choices[61][0] = "Una especificaci&oacute;n de c&oacute;digo de barras de dos dimensiones";
 choices[61][1] = "Un formato de archivo para el archivo a largo plazo de documentos electr&oacute;nicos";
 choices[61][2] = "Una t&eacute;cnica de compresi&oacute;n sin p&eacute;rdidas basada en codificaci&oacute;n de trellis";
 choices[61][3] = "Una tecnolog&iacute;a repogr&aacute;fica de impresi&oacute;n de alta calidad";
 answers[61] = choices[61][0];
 units[61] = "94";
 comments[61] = "Id Pregunta: 10192. ";


//  Id pregunta: 10275 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  Los agentes inteligentes, seg&uacute;n su capacidad para resolver problemas, pueden ser:";
 choices[62]= new Array();
 choices[62][0] = "Reactivos";
 choices[62][1] = "Predictivos";
 choices[62][2] = "Ambas";
 choices[62][3] = "Ninguna";
 answers[62] = choices[62][0];
 units[62] = "63";
 comments[62] = "Id Pregunta: 10275. NULL";


//  Id pregunta: 10318 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  &iquest;C&oacute;mo se llama la base de datos que tiene los par&aacute;metros de gesti&oacute;n de una red?";
 choices[63]= new Array();
 choices[63][0] = "MIB (Management Information Base).";
 choices[63][1] = "NMD (Network Management database).";
 choices[63][2] = "NMS (Network Management System).";
 choices[63][3] = "Ninguna de los anteriores.";
 answers[63] = choices[63][0];
 units[63] = "104";
 comments[63] = "Id Pregunta: 10318. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10341 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  En relaci&oacute;n con la legislaci&oacute;n de propiedad intelectual y el derecho de transformaci&oacute;n, se&ntilde;ale la respuesta correcta";
 choices[64]= new Array();
 choices[64][0] = "Los derechos de propiedad intelectual de la obra resultado de la transformaci&oacute;n corresponder&iacute;an al autor de la obra original";
 choices[64][1] = "Los derechos de propiedad intelectual de la obra resultado de la transformaci&oacute;n corresponder&aacute;n al autor de esta &uacute;ltima";
 choices[64][2] = "Los derechos de explotaci&oacute;n de la obra resultado de la transformaci&oacute;n corresponden a partes iguales entre el autor de la obra original y el de la obra producto de la transformaci&oacute;n";
 choices[64][3] = "Los derechos de explotaci&oacute;n de la obra resultado de la transformaci&oacute;n corresponden tanto al autor de la obra original como al de la obra producto de la transformaci&oacute;n, en la proporci&oacute;n que &eacute;stos determinen";
 answers[64] = choices[64][1];
 units[64] = "36";
 comments[64] = "Id Pregunta: 10341. Consultar Art. 21 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10347 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  En relaci&oacute;n con las tecnolog&iacute;as de gesti&oacute;n de derechos digitales, se&ntilde;ale la respuesta incorrecta:";
 choices[65]= new Array();
 choices[65][0] = "El sistema DRM creado por Apple recibe el nombre de FairPlay";
 choices[65][1] = "El sistema DRM creado por Microsoft recibe el nombre de Windows Media DRM";
 choices[65][2] = "El sistema DRM creado por Sony recibe el nombre de OpenMG";
 choices[65][3] = "El sistema DRM creado por RealNetworks es PlayReady";
 answers[65] = choices[65][3];
 units[65] = "37";
 comments[65] = "Id Pregunta: 10347. El esquema DRM desarrollado por RealNetworks es Helix DRM";


//  Id pregunta: 10369 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  En relaci&oacute;n con los acuerdos de nivel de servicio, los m&aacute;s importante de cara al seguimiento de los contratos que subscribe la Administraci&oacute;n con los contratistas es que:";
 choices[66]= new Array();
 choices[66][0] = "Los Sindicatos revisen las cla&uacute;sulas del ANS";
 choices[66][1] = "El Contratista proporcione informaci&oacute;n mensual sobre las m&eacute;tricas del ANS";
 choices[66][2] = "Se imponga penalizaciones ejemplares cuando se detecte un incumplimiento en el ANS";
 choices[66][3] = "La Administraci&oacute;n disponga de m&eacute;tricas sobre los puntos acordados en el ANS que puedan ser evaluadas sin la intervenci&oacute;n del propio contratista, para evitar el fraude en dichas evaluaciones";
 answers[66] = choices[66][3];
 units[66] = "28";
 comments[66] = "Id Pregunta: 10369. ";


//  Id pregunta: 10439 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  Respecto al conjunto de normas H.323 de la UIT,";
 choices[67]= new Array();
 choices[67][0] = "se le puede a&ntilde;adir seguridad extremo a extremo con la recomendaci&oacute;n de la UIT H.235. ";
 choices[67][1] = "fue definida para redes de conmutaci&oacute;n de circuitos.";
 choices[67][2] = "permite audioconferencia pero no videoconferencia.";
 choices[67][3] = "se utiliza &uacute;nicamente con redes RDSI.";
 answers[67] = choices[67][0];
 units[67] = "117";
 comments[67] = "Id Pregunta: 10439. Examen TIC A1 2013";


//  Id pregunta: 10440 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  En el direccionamiento IPv4, clase C ";
 choices[68]= new Array();
 choices[68][0] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^21 redes con 254 nodos posibles. ";
 choices[68][1] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^21 redes  con 254 nodos posibles. ";
 choices[68][2] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^22 redes  con 126 nodos posibles. ";
 choices[68][3] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^22 redes  con 128 nodos posibles. ";
 answers[68] = choices[68][0];
 units[68] = "100";
 comments[68] = "Id Pregunta: 10440. Examen TIC A1 2013";


//  Id pregunta: 10459 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Indique cu&aacute;l es el m&eacute;todo indicado por el W3C para la optimizaci&oacute;n de la transmisi&oacute;n de mensajes SOAP:";
 choices[69]= new Array();
 choices[69][0] = "XOP XML-binary Optimized Protocol";
 choices[69][1] = "XOP XML-binary Optimized Packaging";
 choices[69][2] = "MTOM Message Transmission Optimization Mechanism";
 choices[69][3] = "REST Represantional State Transfer";
 answers[69] = choices[69][2];
 units[69] = "51";
 comments[69] = "Id Pregunta: 10459. NULL";


//  Id pregunta: 10550 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes amenazas de seguridad de Internet podr&iacute;a comprometer la integridad?";
 choices[70]= new Array();
 choices[70][0] = "Robo de los datos desde el cliente ";
 choices[70][1] = "Exposici&oacute;n de la informaci&oacute;n de configuraci&oacute;n de red ";
 choices[70][2] = "Un troyano en el navegador";
 choices[70][3] = "Escuchas ilegales en la red";
 answers[70] = choices[70][2];
 units[70] = "31, 32, 33";
 comments[70] = "Id Pregunta: 10550. NULL";


//  Id pregunta: 10795 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l es la direcci&oacute;n de red de una direcci&oacute;n IP: 192.168.30.200 cuya m&aacute;scara es 255.255.255.128?";
 choices[71]= new Array();
 choices[71][0] = "192.168.30.0";
 choices[71][1] = "192.168.30.128";
 choices[71][2] = "192.168.30.255";
 choices[71][3] = "192.168.30.200";
 answers[71] = choices[71][1];
 units[71] = "100";
 comments[71] = "Id Pregunta: 10795. Examen GSI 2014";


//  Id pregunta: 10800 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Se&ntilde;ale qu&eacute; tecnolog&iacute;a XML sem&aacute;ntica puede ser usada para la interoperabilidad e intercambio de mensajes electr&oacute;nicos de negocio, mensajes B2B:";
 choices[72]= new Array();
 choices[72][0] = "ecXML";
 choices[72][1] = "ebXML";
 choices[72][2] = "WSDL";
 choices[72][3] = "Xerces";
 answers[72] = choices[72][1];
 units[72] = "69";
 comments[72] = "Id Pregunta: 10800. Examen GSI 2014";


//  Id pregunta: 10824 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Dentro de la actividad Inicio del Plan de Sistemas de Informaci&oacute;n (PSI) de M&eacute;trica v3, indique los participantes y t&eacute;cnicas/pr&aacute;cticas correctas para la tarea An&aacute;lisis de la necesidad del PSI (PSI 1.1):";
 choices[73]= new Array();
 choices[73][0] = "Comit&eacute; de Direcci&oacute;n y Sesiones de trabajo.";
 choices[73][1] = "Jefe de Proyecto del PSI y Sesiones de trabajo.";
 choices[73][2] = "Directores de Usuarios y Catalogaci&oacute;n.";
 choices[73][3] = "Comit&eacute; de Direcci&oacute;n y Factores cr&iacute;ticos de &eacute;xito.";
 answers[73] = choices[73][0];
 units[73] = "86";
 comments[73] = "Id Pregunta: 10824. Examen GSI 2014";


//  Id pregunta: 10869 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  En Linux, guardamos en un fichero llamado log.txt todas las incidencias de una m&aacute;quina con la siguiente estructura fecha#descIncidencia, &iquest;qu&eacute; comando deber&iacute;amos usar para contar el n&uacute;mero de filas que tienen la palabra &quot;error&quot;?";
 choices[74]= new Array();
 choices[74][0] = "grep error log.txt | wc &ndash;l";
 choices[74][1] = "grep wc &ndash;l |error log.txt";
 choices[74][2] = "grep error log.txt | ls -l |cut -r&quot;#&quot; -f2";
 choices[74][3] = "grep cut -r&quot;#&quot; -f2|ls -l | error log.txt";
 answers[74] = choices[74][0];
 units[74] = "53, 54";
 comments[74] = "Id Pregunta: 10869. Examen GSI 2014";


//  Id pregunta: 10907 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Se&ntilde;ala la afirmaci&oacute;n INCORRECTA:";
 choices[75]= new Array();
 choices[75][0] = "La tecnolog&iacute;a VDSL permite transmisi&oacute;n asim&eacute;trica o sim&eacute;trica.";
 choices[75][1] = "VDSL utiliza 2 canales para transmisi&oacute;n de datos, uno para subida y el otro para descarga.";
 choices[75][2] = "La tecnolog&iacute;a HFC es una combinaci&oacute;n de cable y fibra &oacute;ptica.";
 choices[75][3] = "La tecnolog&iacute;a FTTH permite que la fibra &oacute;ptica llegue hasta la casa del cliente.";
 answers[75] = choices[75][1];
 units[75] = "107";
 comments[75] = "Id Pregunta: 10907. Examen GSI 2014";


//  Id pregunta: 10924 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Para la instalaci&oacute;n del cableado estructurado de un edificio de oficinas, en el que se cuenta con redes Ethernet y Gigabit Ethernet, se&ntilde;ale la respuesta correcta:";
 choices[76]= new Array();
 choices[76][0] = "Es necesario contar con un switch FC en cada una de las plantas del edificio para la interconexi&oacute;n del cableado UTP/STP.";
 choices[76][1] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 1 y 2.";
 choices[76][2] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 5 y 6.";
 choices[76][3] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 3 y 4.";
 answers[76] = choices[76][2];
 units[76] = "99";
 comments[76] = "Id Pregunta: 10924. TIC A1 AGE 2014";


//  Id pregunta: 10942 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  En relaci&oacute;n con las soluciones MDM (Mobile Device Management), se&ntilde;ale la respuesta correcta:";
 choices[77]= new Array();
 choices[77][0] = "En ning&uacute;n caso contemplan la tendencia BYOD (Bring Your Own Device) que permite a los usuarios de una organizaci&oacute;n hacer uso de sus dispositivos m&oacute;viles personales para el acceso al entorno, servicios y datos corporativos.";
 choices[77][1] = "Sirven para gestionar la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n no siendo adecuados para el inventario de dispositivos m&oacute;viles.";
 choices[77][2] = "Los fabricantes de las principales plataformas m&oacute;viles no proporcionan soluciones MDM por lo que hay que recurrir siempre a soluciones de terceros.";
 choices[77][3] = "Permiten la monitorizaci&oacute;n autom&aacute;tica de los dispositivos m&oacute;viles y la generaci&oacute;n de alertas al incumplirse la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n.";
 answers[77] = choices[77][3];
 units[77] = "108";
 comments[77] = "Id Pregunta: 10942. TIC A1 AGE 2014";


//  Id pregunta: 10980 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  LINQ (Language-Integrated Query) es:";
 choices[78]= new Array();
 choices[78][0] = "Es una librer&iacute;a de Javascript para la integraci&oacute;n de aplicaciones con HTML5.";
 choices[78][1] = "Es la tecnolog&iacute;a que permite la integraci&oacute;n de elementos Java dentro de una aplicaci&oacute;n .NET y viceversa.";
 choices[78][2] = "Facilita el acceso a bases de datos y ficheros XML desde una aplicaci&oacute;n .NET.";
 choices[78][3] = "Es el API de integraci&oacute;n de la red social profesional Linkedin, basado en OAuth.";
 answers[78] = choices[78][2];
 units[78] = "59";
 comments[78] = "Id Pregunta: 10980. TIC A1 AGE 2014";


//  Id pregunta: 10987 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Al desarrollar una aplicaci&oacute;n para Android, respecto al fichero AndroidManifest.xml se&ntilde;ale la respuesta correcta:";
 choices[79]= new Array();
 choices[79][0] = "Debe renombrarse en el momento de la publicaci&oacute;n de la aplicaci&oacute;n en Google Play, con un identificador &uacute;nico.";
 choices[79][1] = "Declara los permisos que debe tener la aplicaci&oacute;n para acceder a las partes protegidas del API.";
 choices[79][2] = "Debe posicionarse en el directorio \etc\manifest.";
 choices[79][3] = "Establece las condiciones legales que el usuario debe aceptar para poder acceder a la aplicaci&oacute;n.";
 answers[79] = choices[79][1];
 units[79] = "60";
 comments[79] = "Id Pregunta: 10987. TIC A1 AGE 2014";


//  Id pregunta: 11015 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de los siguientes no est&aacute; incluido dentro de la primera Declaraci&oacute;n de Servicios Compartidos realizada por la Comisi&oacute;n de Estrategia TIC en Septiembre de 2015?";
 choices[80]= new Array();
 choices[80][0] = "Servicio unificado de radiocomunicaciones";
 choices[80][1] = "Servicio de alojamiento de infraestructuras TIC";
 choices[80][2] = "Servicio de gesti&oacute;n de notificaciones";
 choices[80][3] = "Servicio de gesti&oacute;n de n&oacute;mina";
 answers[80] = choices[80][0];
 units[80] = "30";
 comments[80] = "Id Pregunta: 11015. El servicio incluido es el unificado de telecomunicaciones";


//  Id pregunta: 11057 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Qu&eacute; rol de Scrum NO est&aacute; incluido dentro de los roles 'Cerdo'?";
 choices[81]= new Array();
 choices[81][0] = "ScrumMaster";
 choices[81][1] = "Product Owner";
 choices[81][2] = "ScrumTeam";
 choices[81][3] = "Stakeholders";
 answers[81] = choices[81][3];
 units[81] = "79";
 comments[81] = "Id Pregunta: 11057. Los Stakeholders se encuentran dentro del tipo de rol 'Gallina'";


//  Id pregunta: 11059 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Qu&eacute; tipo de restricciones en el modelo de Entidad-Relaci&oacute;n hacen referencia al formato de escritura del atributo?";
 choices[82]= new Array();
 choices[82][0] = "Restricciones sem&aacute;nticas";
 choices[82][1] = "Restricciones sint&aacute;cticas";
 choices[82][2] = "Restricciones estructurales";
 choices[82][3] = "Restricciones de usuario";
 answers[82] = choices[82][1];
 units[82] = "80";
 comments[82] = "Id Pregunta: 11059. ";


//  Id pregunta: 11080 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Gesti&oacute;n T&eacute;cnica NO es responsable de&hellip;";
 choices[83]= new Array();
 choices[83][0] = "Mantener la infraestructura t&eacute;cnica";
 choices[83][1] = "Documentar y mantener las habilidades t&eacute;cnicas requeridas para el soporte y gesti&oacute;n de la infraestructura de TI";
 choices[83][2] = "Definir los Acuerdos de (OLA - Operations Level Agreement) para los equipos t&eacute;cnicos";
 choices[83][3] = "Diagnostico y recuperaci&oacute;n de fallos t&eacute;cnicos";
 answers[83] = choices[83][2];
 units[83] = "98";
 comments[83] = "Id Pregunta: 11080. ";


//  Id pregunta: 11129 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de las siguientes sentencias es verdadera?";
 choices[84]= new Array();
 choices[84][0] = "El est&aacute;ndar SATA 3 soporta transferencias hasta 4.8 Gbps";
 choices[84][1] = "La versi&oacute;n ATA-8 soporta velocidades hasta 12 Gbps";
 choices[84][2] = "El SAS 600 consigue velocidades de hasta 16 Gbps";
 choices[84][3] = "Los discos SAS han sido progresivamente sustituidos por los SCSI,";
 answers[84] = choices[84][0];
 units[84] = "48";
 comments[84] = "Id Pregunta: 11129. ";


//  Id pregunta: 11164 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;A qu&eacute; se refieren las siglas EFQM?";
 choices[85]= new Array();
 choices[85][0] = "European Foundation of Quality Metrics";
 choices[85][1] = "European Foundation of Quality Maintenance";
 choices[85][2] = "European Foundation for Qualitiy Management";
 choices[85][3] = "Ninguna de las anteriores";
 answers[85] = choices[85][2];
 units[85] = "92";
 comments[85] = "Id Pregunta: 11164. ";


//  Id pregunta: 11193 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes no es una prioridad de la estrategia Europa 2020?";
 choices[86]= new Array();
 choices[86][0] = "Crecimiento inteligente";
 choices[86][1] = "Crecimiento sostenible";
 choices[86][2] = "Crecimiento integrador";
 choices[86][3] = "Todas las anteriores";
 answers[86] = choices[86][3];
 units[86] = "30";
 comments[86] = "Id Pregunta: 11193. ";


//  Id pregunta: 11242 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  El valor estimado del contrato:";
 choices[87]= new Array();
 choices[87][0] = "Nos permite determinar si el contrato est&aacute; sujeto a regulaci&oacute;n armonizada.";
 choices[87][1] = "No incluye el IVA";
 choices[87][2] = "Incluye pr&oacute;rrogas y cualquier modificaci&oacute;n prevista sobre el presupuesto base de licitaci&oacute;n.";
 choices[87][3] = "Todas las respuestas son ciertas.";
 answers[87] = choices[87][3];
 units[87] = "41";
 comments[87] = "Id Pregunta: 11242. ";


//  Id pregunta: 11300 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  En relaci&oacute;n con un Prestador de Servicios de Certificaci&oacute;n (PSC) es cierto que";
 choices[88]= new Array();
 choices[88][0] = "Es una persona jur&iacute;dica que expide certificados";
 choices[88][1] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados";
 choices[88][2] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 choices[88][3] = "Es una persona jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 answers[88] = choices[88][2];
 units[88] = "74";
 comments[88] = "Id Pregunta: 11300. ";


//  Id pregunta: 11402 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es la descripci&oacute;n correcta de las cuatro Ps del Dise&ntilde;o del Servicio?";
 choices[89]= new Array();
 choices[89][0] = "Un proceso de cuatro pasos para el dise&ntilde;o de una gesti&oacute;n del servicio efectiva";
 choices[89][1] = "Una definici&oacute;n del personal y los productos requeridos para un dise&ntilde;o exitoso";
 choices[89][2] = "Una serie de preguntas que deben hacerse cuando se revisan las especificaciones de dise&ntilde;o";
 choices[89][3] = "Cuatro &aacute;reas principales que deben ser consideradas durante el Dise&ntilde;o del Servicio";
 answers[89] = choices[89][3];
 units[89] = "98";
 comments[89] = "Id Pregunta: 11402. ";


//  Id pregunta: 11464 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la respuesta falsa acerca de los Planes Nacionales de Numeraci&oacute;n, Direccionamiento y Denominaci&oacute;n:";
 choices[90]= new Array();
 choices[90][0] = "Elabora la propuesta del Plan el MINETUR.";
 choices[90][1] = "Lo aprueba el Gobierno por Real Decreto.";
 choices[90][2] = "Lo modifica el MINETUR por Orden.";
 choices[90][3] = "La modificaci&oacute;n exige el informe previo de la ORECE.";
 answers[90] = choices[90][3];
 units[90] = "110";
 comments[90] = "Id Pregunta: 11464. ";


//  Id pregunta: 11568 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Protocolo que permite el aprendizaje de redes y evita que se produzcan bucles a nivel de enlace.";
 choices[91]= new Array();
 choices[91][0] = "802.1D";
 choices[91][1] = "802.Q";
 choices[91][2] = "Spanning Tree Algorithm";
 choices[91][3] = "Algotirmo de Dijkstra";
 answers[91] = choices[91][0];
 units[91] = "102";
 comments[91] = "Id Pregunta: 11568. Como pregunta por protocolo es la a), y no el algoritmo c) que utiliza dicho protocolo.";


//  Id pregunta: 11586 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La pauta WCAG 2.0 de ayuda a la entrada de datos se relaciona con el principio de: ";
 choices[92]= new Array();
 choices[92][0] = "Operabilidad";
 choices[92][1] = "Robustez";
 choices[92][2] = "Perceptibilidad";
 choices[92][3] = "Comprensibilidad";
 answers[92] = choices[92][3];
 units[92] = "39";
 comments[92] = "Id Pregunta: 11586. ";


//  Id pregunta: 11590 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Las RFCs son publicadas por:";
 choices[93]= new Array();
 choices[93][0] = "ITU";
 choices[93][1] = "W3C";
 choices[93][2] = "IAB";
 choices[93][3] = "IETF";
 answers[93] = choices[93][3];
 units[93] = "42";
 comments[93] = "Id Pregunta: 11590. ";


//  Id pregunta: 11611 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Una condici&oacute;n del bloqueo mutuo es:";
 choices[94]= new Array();
 choices[94][0] = "Condici&oacute;n de exclusi&oacute;n mutua";
 choices[94][1] = "Condici&oacute;n de ocupar y esperar un recurso";
 choices[94][2] = "Condici&oacute;n de espera circular";
 choices[94][3] = "Las 3 son condiciones necesarias del bloqueo mutuo.";
 answers[94] = choices[94][3];
 units[94] = "52";
 comments[94] = "Id Pregunta: 11611. ";


//  Id pregunta: 11615 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Para seleccionar todos los campos de una fila con el campo Nombre con valor 'Juan'en una tabla llamada Funcionarios se utiliza la sentencia:";
 choices[95]= new Array();
 choices[95][0] = "SELECT * FROM Funcionarios WHERE Nombre='Juan'";
 choices[95][1] = "SELECT * FROM Funcionarios WHERE Nombre:'Juan'";
 choices[95][2] = "SELECT FROM Funcionarios WHERE Nombre='Juan'";
 choices[95][3] = "SELECT FROM Funcionarios WHERE Nombre:'Juan'";
 answers[95] = choices[95][0];
 units[95] = "58";
 comments[95] = "Id Pregunta: 11615. ";


//  Id pregunta: 11673 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El JRE no contiene el nivel de:";
 choices[96]= new Array();
 choices[96][0] = "Herramientas de interfaz de usuario";
 choices[96][1] = "Despliegue";
 choices[96][2] = "Librer&iacute;as de integraci&oacute;n";
 choices[96][3] = "Contiene los 3 niveles";
 answers[96] = choices[96][3];
 units[96] = "116";
 comments[96] = "Id Pregunta: 11673. ";


//  Id pregunta: 11706 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;cu&aacute;l es una caracter&iacute;stica de los ataques DoS?";
 choices[97]= new Array();
 choices[97][0] = "Siempre preceden a ataques de acceso";
 choices[97][1] = "Intentan comprometer la disponibilidad de un equipo, red, o aplicaci&oacute;n";
 choices[97][2] = "Un ejemplo de ellos es el escaneo de puertos";
 choices[97][3] = "Un ejemplo de ellos es el &quot;barrido de ping&quot;";
 answers[97] = choices[97][1];
 units[97] = "111";
 comments[97] = "Id Pregunta: 11706. NULL";


//  Id pregunta: 11731 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l es el perfil de metrica v3 al que pertenece el Responsable de Seguridad?  ";
 choices[98]= new Array();
 choices[98][0] = "Analista";
 choices[98][1] = "Jefe de proyecto";
 choices[98][2] = "Consultor";
 choices[98][3] = "Analista-programador";
 answers[98] = choices[98][1];
 units[98] = "29";
 comments[98] = "Id Pregunta: 11731. ";


//  Id pregunta: 11760 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l es el formato y la &uacute;ltima versi&oacute;n utillizada para las facturas electr&oacute;nicas a fecha de diciembre de 2015?";
 choices[99]= new Array();
 choices[99][0] = "businessae";
 choices[99][1] = "ubl v2.3";
 choices[99][2] = "facturae v3.1.1";
 choices[99][3] = "Facturae v.3.2.1";
 answers[99] = choices[99][3];
 units[99] = "70";
 comments[99] = "Id Pregunta: 11760. ";


