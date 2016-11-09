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

//  Id pregunta: 47 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes grupos de funciones corresponde a los de un sistema de informaci&oacute;n?:";
 choices[0]= new Array();
 choices[0][0] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, tratamiento y distribuci&oacute;n";
 choices[0][1] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, codificaci&oacute;n y distribuci&oacute;n";
 choices[0][2] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, filtrado y distribuci&oacute;n";
 choices[0][3] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n";
 answers[0] = choices[0][0];
 units[0] = "21";
 comments[0] = "Id Pregunta: 47. NULL";


//  Id pregunta: 188 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En relaci&oacute;n con la auditor&iacute;a inform&aacute;tica se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[1]= new Array();
 choices[1][0] = "El informe final deber&aacute; estar compuesto por las entrevistas en profundidad y datos recopilados durante las fases de revisi&oacute;n y verificaci&oacute;n.";
 choices[1][1] = "Se entrevistar&aacute; al mayor n&uacute;mero de usuarios posible";
 choices[1][2] = "Las entrevistas no tendr&aacute;n una duraci&oacute;n superior a dos horas y media";
 choices[1][3] = "Para la validaci&oacute;n de la carga de trabajo se utilizar&aacute;n cuestionarios y entrevistas planificadas.";
 answers[1] = choices[1][2];
 units[1] = "31,32,33";
 comments[1] = "Id Pregunta: 188. Similar a examen TIC SS A 2003";


//  Id pregunta: 212 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En la elaboraci&oacute;n de una norma se distinguen varias fases. Indique cu&aacute;les son estas:";
 choices[2]= new Array();
 choices[2][0] = "Trabajos preliminares, propuesta, informaci&oacute;n p&uacute;blica, petici&oacute;n";
 choices[2][1] = "Trabajos preliminares, proyecto, informaci&oacute;n p&uacute;blica, propuesta, petici&oacute;n";
 choices[2][2] = "Proyecto, informaci&oacute;n p&uacute;blica, certificaci&oacute;n";
 choices[2][3] = "Proyecto, propuesta, informaci&oacute;n p&uacute;blica, petici&oacute;n";
 answers[2] = choices[2][1];
 units[2] = "42";
 comments[2] = "Id Pregunta: 212. ";


//  Id pregunta: 333 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Las organizaciones basadas en la informaci&oacute;n. Indique la respuesta FALSA:";
 choices[3]= new Array();
 choices[3][0] = "En los a&ntilde;os 20 las organizaciones se basaban en el mando-control. A partir de los a&ntilde;os 70 la informaci&oacute;n comenz&oacute; a ser un elemento estructural importante y se dio paso a las organizaciones basadas en la informaci&oacute;n.";
 choices[3][1] = "Seg&uacute;n Peter Drucker, uno de los gur&uacute;s de la gerencia de empresas, una de las caracter&iacute;sticas propias de las organizaciones basadas en la informaci&oacute;n es la reducci&oacute;n hasta un tercio del n&uacute;mero de ejecutivos.";
 choices[3][2] = "Una organizaci&oacute;n basada en la informaci&oacute;n obligatoriamente debe emplear nuevas tecnolog&iacute;as, ya que si no es imposible manejar el gran volumen de informaci&oacute;n generada e intercambiada.";
 choices[3][3] = "En una organizaci&oacute;n basada en el conocimiento los distintos especialistas dirigen y organizan su trabajo mediante la interacci&oacute;n con sus colegas, con un funcionamiento similar al de una orquesta.";
 answers[3] = choices[3][2];
 units[3] = "22";
 comments[3] = "Id Pregunta: 333. ";


//  Id pregunta: 512 AÃ±o de creación de pregunta: 2003-01-01
 questions[4]= "5)  Respecto a la ley 1/1996 de propiedad intelectual es falso que proteja:";
 choices[4]= new Array();
 choices[4][0] = "Los derechos de explotaci&oacute;n";
 choices[4][1] = "Los programas de ordenador";
 choices[4][2] = "La documentaci&oacute;n";
 choices[4][3] = "Las ideas que subyacen en los programas de ordenador ";
 answers[4] = choices[4][3];
 units[4] = "36";
 comments[4] = "Id Pregunta: 512. ";


//  Id pregunta: 661 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes componentes de los que se indican a continuaci&oacute;n no es necesario certificar para obtener el perfil XPG4 Base de la Gu&iacute;a de Portabilidad X/Open?";
 choices[5]= new Array();
 choices[5][0] = "XPG4 Base";
 choices[5][1] = "XPG4 Commands and Utilities";
 choices[5][2] = "XPG4 Language";
 choices[5][3] = "XPG4 Internationalised System Calls and Libraries";
 answers[5] = choices[5][2];
 units[5] = "40";
 comments[5] = "Id Pregunta: 661. ";


//  Id pregunta: 673 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El &quot;proyecto CERES&quot;:";
 choices[6]= new Array();
 choices[6][0] = "Establece c&oacute;mo deben de ser los certificados que se usen para realizar la firma electr&oacute;nica";
 choices[6][1] = "Hace que se pueda usar a la Fabrica Nacional de la Moneda y Timbre de forma gratuita por todos los espa&ntilde;oles";
 choices[6][2] = "Se define en el &aacute;mbito de la relaci&oacute;n de los ciudadanos con las administraciones y &eacute;stas entre si.";
 choices[6][3] = "Designa a la Fabrica Nacional de la Moneda y Timbre como autoridad de certificaci&oacute;n para cualquier transacci&oacute;n electr&oacute;nica";
 answers[6] = choices[6][2];
 units[6] = "74";
 comments[6] = "Id Pregunta: 673. NULL";


//  Id pregunta: 825 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;C&oacute;mo se denomina en Java el miniprograma que corre solamente bajo un navegador y es descargado autom&aacute;ticamente como parte de una p&aacute;gina web?:";
 choices[7]= new Array();
 choices[7][0] = "JavaScript";
 choices[7][1] = "Applet";
 choices[7][2] = "Servlet";
 choices[7][3] = "XML";
 answers[7] = choices[7][1];
 units[7] = "60";
 comments[7] = "Id Pregunta: 825. JCED - Preparatic XVII";


//  Id pregunta: 1520 AÃ±o de creación de pregunta: 2003-01-01
 questions[8]= "9)  C&oacute;mo objetos de una base de datos ORACLE, &iquest;cu&aacute;l es la diferencia principal entre una funci&oacute;n y un procedimiento?:";
 choices[8]= new Array();
 choices[8][0] = "Una funci&oacute;n no puede ejecutarse de forma nativa; un procedimiento si.";
 choices[8][1] = "Una funci&oacute;n puede invocar otra funci&oacute;n; un procedimiento no.";
 choices[8][2] = "Una funci&oacute;n est&aacute; almacenada en la base de datos; un procedimiento no.";
 choices[8][3] = "Una funci&oacute;n puede devolver un valor al programa que la invoca; un procedimiento no.";
 answers[8] = choices[8][3];
 units[8] = "58";
 comments[8] = "Id Pregunta: 1520. Junta Andaluc&iacute;a";


//  Id pregunta: 1925 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  Para la modelizaci&oacute;n de datos en el modelo de entidad-relaci&oacute;n &iquest;Qu&eacute; se entiende como grado de una tabla?";
 choices[9]= new Array();
 choices[9][0] = "El n&uacute;mero de filas de la tabla";
 choices[9][1] = "El n&uacute;mero de columnas de la tabla";
 choices[9][2] = "El n&uacute;mero de entidades de un tipo que se relacionan con las de otro tipo en funci&oacute;n de los atributos que caracterizan la relaci&oacute;n";
 choices[9][3] = "El n&uacute;mero de atributos de esa tabla que son claves primarias de otras tablas";
 answers[9] = choices[9][1];
 units[9] = "58";
 comments[9] = "Id Pregunta: 1925. NULL";


//  Id pregunta: 1997 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida, hace enfasis en el control de riesgos?";
 choices[10]= new Array();
 choices[10][0] = "Espiral";
 choices[10][1] = "Cascada";
 choices[10][2] = "Ambos";
 choices[10][3] = "Ninguno";
 answers[10] = choices[10][0];
 units[10] = "76";
 comments[10] = "Id Pregunta: 1997. Pregunta TIC-B 2003";


//  Id pregunta: 2069 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  No es una caracter&iacute;stica de la orientaci&oacute;n a objetos";
 choices[11]= new Array();
 choices[11][0] = "la programaci&oacute;n funcional";
 choices[11][1] = "El acoplamiento d&eacute;bil";
 choices[11][2] = "La ocultaci&oacute;n de la implementacion";
 choices[11][3] = "el polimorfismo";
 answers[11] = choices[11][0];
 units[11] = "82";
 comments[11] = "Id Pregunta: 2069. ";


//  Id pregunta: 2210 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; entidades certifican ISO-9000 en Espa&ntilde;a?:";
 choices[12]= new Array();
 choices[12][0] = "S&oacute;lo ISO";
 choices[12][1] = "S&oacute;lo AENOR";
 choices[12][2] = "Empresas privadas";
 choices[12][3] = "AENOR y empresas privadas";
 answers[12] = choices[12][3];
 units[12] = "92";
 comments[12] = "Id Pregunta: 2210. NULL";


//  Id pregunta: 2523 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;les son los m&eacute;todos b&aacute;sicos de reconocimiento de caracteres en OCR?:";
 choices[13]= new Array();
 choices[13][0] = "Comparaci&oacute;n matricial";
 choices[13][1] = "Extracci&oacute;n de caracter&iacute;sticas";
 choices[13][2] = "Reconocimiento de patrones";
 choices[13][3] = "Son v&aacute;lidas todas las respuestas anteriores";
 answers[13] = choices[13][3];
 units[13] = "93";
 comments[13] = "Id Pregunta: 2523. NULL";


//  Id pregunta: 2835 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  &iquest;Qu&eacute; herramientas de reingenier&iacute;a se engloban en un paquete CASE?";
 choices[14]= new Array();
 choices[14][0] = "Via Center.";
 choices[14][1] = "CA-Metrics.";
 choices[14][2] = "Cadre.";
 choices[14][3] = "ADW.";
 answers[14] = choices[14][0];
 units[14] = "91";
 comments[14] = "Id Pregunta: 2835. ";


//  Id pregunta: 2961 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  Qu&eacute; es cierto respecto a los dispositivos britge y switch de interconexi&oacute;n de redes lcoales";
 choices[15]= new Array();
 choices[15][0] = "El switch opera en el nivel 2 y el bridge en el nivel 3 del modelo OSI";
 choices[15][1] = "Los switches se suelen emplear para interconectar servidores y los bridges para interconectar LANs";
 choices[15][2] = "Un switch pueden interconectar distintos tipos de LAN y un bridge no";
 choices[15][3] = "En los switches cada puerto forma su dominio de colisi&oacute;n propio mientras que los bridges tienen varios dominios de colisi&oacute;n por puerto.";
 answers[15] = choices[15][1];
 units[15] = "102";
 comments[15] = "Id Pregunta: 2961. Tanenbaum";


//  Id pregunta: 3552 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En sistemas de informaci&oacute;n y comunicaciones, INAP es acr&oacute;nimo de:";
 choices[16]= new Array();
 choices[16][0] = "Integration Network Application Protocol";
 choices[16][1] = "Intelligent Network Application Protocol";
 choices[16][2] = "Inverse Naming Address Protocol";
 choices[16][3] = "Intelligent Network Application Part";
 answers[16] = choices[16][3];
 units[16] = "102";
 comments[16] = "Id Pregunta: 3552. ";


//  Id pregunta: 3609 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La funci&oacute;n de una MIB es:";
 choices[17]= new Array();
 choices[17][0] = "Representar un dispositivo dado en la jerarqu&iacute;a de una red gestionada";
 choices[17][1] = "Identificar las caracter&iacute;sticas espec&iacute;ficas de un dispositivo gestionado y asociar uno o m&aacute;s valores a sus caracter&iacute;sticas";
 choices[17][2] = "Mapear agentes SNMP a  NMSs (Network Management Systems) SNMP y mantener una tablas con estas relaciones";
 choices[17][3] = "Permitir representar a los datos de forma independiente de las t&eacute;cnicas de representaci&oacute;n y de las estructuras de sistemas en particular";
 answers[17] = choices[17][1];
 units[17] = "104";
 comments[17] = "Id Pregunta: 3609. ";


//  Id pregunta: 3636 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La Red Digital de Servicios Integrados (RDSI), permite los siguientes accesos o servicios:";
 choices[18]= new Array();
 choices[18][0] = "Circuitos virtuales permanentes";
 choices[18][1] = "Accesos B&aacute;sico 2B+D";
 choices[18][2] = "Circuitos virtuales punto a punto";
 choices[18][3] = "Todas las respuestas anteriores son correctas";
 answers[18] = choices[18][1];
 units[18] = "103";
 comments[18] = "Id Pregunta: 3636. ";


//  Id pregunta: 3907 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l no es un objetivo del uso de t&eacute;cnicas CRM?";
 choices[19]= new Array();
 choices[19][0] = "Usar las relaciones cliente-proveedor para aumentar los beneficios";
 choices[19][1] = "Usar las diferentes fuentes de informaci&oacute;n e integrarlas para proporcionar un servicio excelente";
 choices[19][2] = "Poner en marcha una soluci&oacute;n estrat&eacute;gica proactiva";
 choices[19][3] = "Contar con soluciones parciales para cada etapa de la relaci&oacute;n con los ciudadanos";
 answers[19] = choices[19][3];
 units[19] = "65";
 comments[19] = "Id Pregunta: 3907. ";


//  Id pregunta: 4154 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Capacidad que permite la descarga de actualizaciones software o bien la reconfiguraci&oacute;n de ordenadores por la noche, cuando normalmente est&aacute;n apagados";
 choices[20]= new Array();
 choices[20][0] = "firmware";
 choices[20][1] = "teclado virtual";
 choices[20][2] = "despertar remoto (remote wakeup)";
 choices[20][3] = "Autocomprobaci&oacute;n de arranque (Power-On Self-Test)";
 answers[20] = choices[20][2];
 units[20] = "113";
 comments[20] = "Id Pregunta: 4154. ";


//  Id pregunta: 4221 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Indique cu&aacute;l de las siguientes afirmaciones sobre los lenguajes RDF y OWL empleados en la web sem&aacute;ntica es cierta";
 choices[21]= new Array();
 choices[21][0] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML bien formado";
 choices[21][1] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML v&aacute;lido";
 choices[21][2] = "En OWL DL, una clase no puede ser instancia de otra clase";
 choices[21][3] = "OWL Full ofrece garant&iacute;as computacionales de completitud";
 answers[21] = choices[21][2];
 units[21] = "69";
 comments[21] = "Id Pregunta: 4221. NULL";


//  Id pregunta: 4272 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  Los comandos y distribuci&oacute;n de memoria de una tarjeta criptogr&aacute;fica se especifican en el est&aacute;ndar";
 choices[22]= new Array();
 choices[22][0] = "ISO 7816-2";
 choices[22][1] = "ISO 7816-3";
 choices[22][2] = "ISO 7816-4";
 choices[22][3] = "ISO 7816-5";
 answers[22] = choices[22][2];
 units[22] = "74";
 comments[22] = "Id Pregunta: 4272. NULL";


//  Id pregunta: 4291 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  Un Jefe de Proyecto ha elaborado un borrador del Plan de Gesti&oacute;n de un proyecto de software. &iquest;Cu&aacute;les de los siguientes elementos deben ser tratados en ese plan? I) Calendario. II) Presupuesto. III) Requisitos del software. IV) Personal.";
 choices[23]= new Array();
 choices[23][0] = "I, III y IV.";
 choices[23][1] = "I, II y III.";
 choices[23][2] = "I, II y IV.";
 choices[23][3] = "I, II, III y IV.";
 answers[23] = choices[23][2];
 units[23] = "77";
 comments[23] = "Id Pregunta: 4291. ";


//  Id pregunta: 4296 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  Para contemplar la plena ocupaci&oacute;n de todos los recursos, en un diagrama de Gantt:";
 choices[24]= new Array();
 choices[24][0] = "Puede asignarse a un recurso distintas tarea.";
 choices[24][1] = "S&oacute;lo debe asignarse a cada recurso una tarea.";
 choices[24][2] = "Se puede asignar la misma tarea a varios recursos.";
 choices[24][3] = "No es necesario que los trabajos se descompongan hasta la unidad m&iacute;nima de tratamiento.";
 answers[24] = choices[24][0];
 units[24] = "27";
 comments[24] = "Id Pregunta: 4296. Examen TIC MAP B 2005";


//  Id pregunta: 4570 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  &iquest;Cuantos tipos de drivers existen en JDBC?:";
 choices[25]= new Array();
 choices[25][0] = "2";
 choices[25][1] = "3";
 choices[25][2] = "4";
 choices[25][3] = "tantos como SGBD's";
 answers[25] = choices[25][2];
 units[25] = "60";
 comments[25] = "Id Pregunta: 4570. NULL";


//  Id pregunta: 5493 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Indica la afirmaci&oacute;n correcta respecto a CLS o Common Language Specification:";
 choices[26]= new Array();
 choices[26][0] = "Es el conjunto de clases que se manejan en .NET";
 choices[26][1] = "Recoge la especificacion que debe cumplir todo lenguaje que se ejecuta sobre el framework .NET";
 choices[26][2] = "Es la especificacion del framework .NET";
 choices[26][3] = "Todas son falsas";
 answers[26] = choices[26][1];
 units[26] = "59";
 comments[26] = "Id Pregunta: 5493. ";


//  Id pregunta: 5551 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Qu&eacute; considera que NO es una ventaja de la construcci&oacute;n de portales accesibles?";
 choices[27]= new Array();
 choices[27][0] = "Aumento de la usabilidad";
 choices[27][1] = "Facilita la independencia de dispositivo";
 choices[27][2] = "Simplifica el desarrollo";
 choices[27][3] = "Todas las anteriores son correctas.";
 answers[27] = choices[27][3];
 units[27] = "39";
 comments[27] = "Id Pregunta: 5551. ";


//  Id pregunta: 5569 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.21 del IEEE?";
 choices[28]= new Array();
 choices[28][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[28][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[28][2] = "Resilient Packet Ring";
 choices[28][3] = "Traspaso entre redes";
 answers[28] = choices[28][3];
 units[28] = "101";
 comments[28] = "Id Pregunta: 5569. ";


//  Id pregunta: 5901 AÃ±o de creación de pregunta: 2009-01-01
 questions[29]= "30)  Indique qu&eacute; concepto NO interviene en el m&eacute;todo de ponderaci&oacute;n lineal:";
 choices[29]= new Array();
 choices[29][0] = "Puntuaciones normalizadas";
 choices[29][1] = "Factor de ponderaci&oacute;n de los criterios";
 choices[29][2] = "Coeficiente de concordancia";
 choices[29][3] = "Funci&oacute;n de valor o de evaluaci&oacute;n";
 answers[29] = choices[29][2];
 units[29] = "34";
 comments[29] = "Id Pregunta: 5901. MAP 2008 A1";


//  Id pregunta: 6067 AÃ±o de creación de pregunta: 2010-01-01
 questions[30]= "31)  Dentro del &aacute;mbito del reconocimiento de patrones, &iquest;para que se usa el algoritmo 'FCM'?";
 choices[30]= new Array();
 choices[30][0] = "El &lsquo;Forward Chaining Method&rsquo; es uno de la procedimientos de inferencia b&aacute;sico de un sistema de reglas";
 choices[30][1] = "El &lsquo;Fuzzy C-Means&rsquo; es un algoritmo de agrupamiento (an&aacute;lisis cluster) que utiliza l&oacute;gica borrosa";
 choices[30][2] = "El algoritmo &lsquo;Final Cognitive Map&rsquo; captura los patrones mediante mapas cognitivos";
 choices[30][3] = "Ninguna de las anteriores es correcta";
 answers[30] = choices[30][1];
 units[30] = "63";
 comments[30] = "Id Pregunta: 6067. ";


//  Id pregunta: 6099 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)  El teorema de Nyquist establece que el n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal:";
 choices[31]= new Array();
 choices[31][0] = "Puede ser superior al doble de su ancho de banda.";
 choices[31][1] = "No puede ser superior al doble de su ancho de banda.";
 choices[31][2] = "No tiene l&iacute;mite alguno.";
 choices[31][3] = "No puede ser superior al ancho de banda.";
 answers[31] = choices[31][1];
 units[31] = "99";
 comments[31] = "Id Pregunta: 6099. TIC A 2009";


//  Id pregunta: 6146 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  &iquest;En el PDM, cu&aacute;l es el tipo de relaci&oacute;n de precedencia m&aacute;s comunmente utilizado?";
 choices[32]= new Array();
 choices[32][0] = "Inicio a fin";
 choices[32][1] = "Final a inicio";
 choices[32][2] = "Final a final";
 choices[32][3] = "Inicio a inicio";
 answers[32] = choices[32][1];
 units[32] = "28";
 comments[32] = "Id Pregunta: 6146. ";


//  Id pregunta: 6152 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  &iquest;C&oacute;mo se denomina el sistema global de discusi&oacute;n en internet que evoluciona de las redes UUCP?";
 choices[33]= new Array();
 choices[33][0] = "WWW";
 choices[33][1] = "FTP";
 choices[33][2] = "Usenet";
 choices[33][3] = "ICP";
 answers[33] = choices[33][2];
 units[33] = "112";
 comments[33] = "Id Pregunta: 6152. ";


//  Id pregunta: 6181 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  Indique la afirmaci&oacute;n verdadera";
 choices[34]= new Array();
 choices[34][0] = "El resultado de una modelizaci&oacute;n de procesos en BPMN debe ser expresado en BPML, BPEL o XPDL.";
 choices[34][1] = "El resultado de una modelizaci&oacute;n de procesos en BPML debe ser expresado en BPMN, BPEL o XPDL.";
 choices[34][2] = "El resultado de una modelizaci&oacute;n de procesos en BPEL debe ser expresado en BPML, BPMN o XPDL.";
 choices[34][3] = "El resultado de una modelizaci&oacute;n de procesos en XPDL debe ser expresado en BPML, BPEL o BPMN.";
 answers[34] = choices[34][0];
 units[34] = "71";
 comments[34] = "Id Pregunta: 6181. ";


//  Id pregunta: 6220 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  Qu&eacute; subproyecto de 'Apache' basado en servlets permite a los desarrolladores crear r&aacute;pidamente aplicaciones web y permite personalizar el uso de sitios web y restringir el acceso a partes de la aplicaci&oacute;n";
 choices[35]= new Array();
 choices[35][0] = "Watchdog";
 choices[35][1] = "Turbine";
 choices[35][2] = "Lucene";
 choices[35][3] = "Avalon";
 answers[35] = choices[35][1];
 units[35] = "60";
 comments[35] = "Id Pregunta: 6220. TICB-2009, bloque desarrollo";


//  Id pregunta: 6301 AÃ±o de creación de pregunta: 2001-01-01
 questions[36]= "37)  &iquest;Qu&eacute; dos tipos de atributos puede tener un objeto?";
 choices[36]= new Array();
 choices[36][0] = "Atributos de clase y atributos de instancia";
 choices[36][1] = "Atributos visibles y atributos ciegos";
 choices[36][2] = "Atributos heredados y atributos no heredados";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = choices[36][0];
 units[36] = "82";
 comments[36] = "Id Pregunta: 6301. NULL";


//  Id pregunta: 6345 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  Identifique cu&aacute;l de los siguientes no es uno de los siete principios de la Web 2.0";
 choices[37]= new Array();
 choices[37][0] = "World Wide Web como plataforma de trabajo";
 choices[37][1] = "Las experiencias enriquecedoras de los usuarios";
 choices[37][2] = "El fin del ciclo de las actualizaciones de versiones del software.";
 choices[37][3] = "El software limitado a un solo dispositivo.";
 answers[37] = choices[37][3];
 units[37] = "120";
 comments[37] = "Id Pregunta: 6345. NULL";


//  Id pregunta: 6402 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  Las Administraciones podr&aacute;n poner a disposici&oacute;n de todos los organismos las aplicaciones que decidan declarar de c&oacute;digo abierto, a trav&eacute;s de el&hellip;";
 choices[38]= new Array();
 choices[38][0] = "Centro de Transferencia de Tecnolog&iacute;a";
 choices[38][1] = "Centro de Compartici&oacute;n de Tecnolog&iacute;a";
 choices[38][2] = "Proyecto Aporta";
 choices[38][3] = "Proyecto Comparte";
 answers[38] = choices[38][0];
 units[38] = "30";
 comments[38] = "Id Pregunta: 6402. NULL";


//  Id pregunta: 6469 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  En M&eacute;trica V3, qu&eacute; producto NO se elabora en el proceso Plan de Sistemas de Informaci&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Modelo de procesos de la organizaci&oacute;n";
 choices[39][1] = "Plan de Migraci&oacute;n y Carga Inicial de Datos";
 choices[39][2] = "Arquitectura Tecnol&oacute;gica";
 choices[39][3] = "Plan de proyectos";
 answers[39] = choices[39][1];
 units[39] = "86";
 comments[39] = "Id Pregunta: 6469. Castilla La Mancha 2009";


//  Id pregunta: 6495 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes es una Learning Management System liberada bajo licencia GPL?";
 choices[40]= new Array();
 choices[40][0] = "Lucus";
 choices[40][1] = "Raxor";
 choices[40][2] = "Esprat";
 choices[40][3] = "Leat";
 answers[40] = choices[40][0];
 units[40] = "66";
 comments[40] = "Id Pregunta: 6495. Castilla La Mancha 2009";


//  Id pregunta: 6636 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  Dentro del modelo de calidad EFQM, los 3 criterios de mayor peso por orden son:";
 choices[41]= new Array();
 choices[41][0] = "Satisfacci&oacute;n del Cliente; Impacto en la Sociedad; Resultados";
 choices[41][1] = "Satisfacci&oacute;n del Cliente; Resultados; Procesos";
 choices[41][2] = "Satisfacci&oacute;n del Cliente; Resultados; Liderazgo";
 choices[41][3] = "Resultados; Satisfacci&oacute;n del Cliente; Liderazgo";
 answers[41] = choices[41][1];
 units[41] = "88";
 comments[41] = "Id Pregunta: 6636. NULL";


//  Id pregunta: 7265 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  En telefon&iacute;a m&oacute;vil, la tecnolog&iacute;a GSM utiliza las siguientes bases de datos de usuarios";
 choices[42]= new Array();
 choices[42][0] = "HLR y VLR";
 choices[42][1] = "VLR y MSC";
 choices[42][2] = "NMC y OMC";
 choices[42][3] = "AUC y NMC";
 answers[42] = choices[42][0];
 units[42] = "108";
 comments[42] = "Id Pregunta: 7265. Examen TIC B 2009";


//  Id pregunta: 7277 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Virtuozzo es un software para virutalizaci&oacute;n de";
 choices[43]= new Array();
 choices[43][0] = "Hardware";
 choices[43][1] = "Red";
 choices[43][2] = "Sistema operativo";
 choices[43][3] = "Escritorio";
 answers[43] = choices[43][2];
 units[43] = "119";
 comments[43] = "Id Pregunta: 7277. NULL";


//  Id pregunta: 7292 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Un proveedor de SW de reconocimiento autom&aacute;tico del habla (ASR) es:";
 choices[44]= new Array();
 choices[44][0] = "Nuance";
 choices[44][1] = "Loquendo";
 choices[44][2] = "Telisma";
 choices[44][3] = "Todas las anteriores son correctas";
 answers[44] = choices[44][3];
 units[44] = "94";
 comments[44] = "Id Pregunta: 7292. NULL";


//  Id pregunta: 7772 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)   Los formatos de im&aacute;genes admitidos por los navegadores Internet Explorer 6.0, Netscape 8.0 y Opera 8.0, son:";
 choices[45]= new Array();
 choices[45][0] = " jpeg, tiff y spp.";
 choices[45][1] = " jpeg, spp y psd.";
 choices[45][2] = " jpeg, spp y tiff.";
 choices[45][3] = " jpeg, gif y png.";
 answers[45] = choices[45][3];
 units[45] = "93";
 comments[45] = "Id Pregunta: 7772. Map 2005";


//  Id pregunta: 8225 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  En relaci&oacute;n con el modelo EFQM, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[46]= new Array();
 choices[46][0] = "El modelo EFQM se compone de 9 criterios, de los cuales 4 son agentes facilitadores y 5 son resultados.";
 choices[46][1] = "El modelo EFQM tom&oacute; como referencia otros modelos de calidad, tales como Malcom Baldrige y Deming.";
 choices[46][2] = "Los resultados del modelo EFQM son: resultados clave, resultados en la sociedad, resultados en los proveedores, resultados en los clientes y resultados en las personas.";
 choices[46][3] = "Los agentes facilitadores del modelo EFQM son: liderazgo, personas, procesos, pol&iacute;tica y estrategia.";
 answers[46] = choices[46][1];
 units[46] = "92";
 comments[46] = "Id Pregunta: 8225. Examen TIC A1 2010";


//  Id pregunta: 8308 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l es el acr&oacute;nimo del organismo responsable de definir toda la arquitectura de Internet? ";
 choices[47]= new Array();
 choices[47][0] = "IETF. ";
 choices[47][1] = "ICANN. ";
 choices[47][2] = "IAB. ";
 choices[47][3] = "IRTF.";
 answers[47] = choices[47][2];
 units[47] = "112,42";
 comments[47] = "Id Pregunta: 8308. Examen TIC A2 2010";


//  Id pregunta: 8348 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes mecanismos NO se utiliza para definir un perfil (profile) en UML 2.0?";
 choices[48]= new Array();
 choices[48][0] = "Estereotipos.";
 choices[48][1] = "Valores etiquetados.";
 choices[48][2] = "Artefactos.";
 choices[48][3] = "Restricciones.";
 answers[48] = choices[48][2];
 units[48] = "80,81,82";
 comments[48] = "Id Pregunta: 8348. Examen TIC A2 2010";


//  Id pregunta: 8356 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  El nivel 5 del modelo de Capacidad y Madurez (CMMI), nivel optimizado, tiene como objetivo:";
 choices[49]= new Array();
 choices[49][0] = "Gestionar cuantitativamente los procesos para lograr los objetivos de calidad y ejecuci&oacute;n del proceso establecido por el proyecto.";
 choices[49][1] = "El entendimiento cuantitativo de los procesos de la organizaci&oacute;n.";
 choices[49][2] = "Mejorar la calidad de los procesos de la organizaci&oacute;n, en base a un entendimiento de las causas comunes de variaci&oacute;n.";
 choices[49][3] = "Proporcionar datos de la ejecuci&oacute;n de procesos.";
 answers[49] = choices[49][2];
 units[49] = "87";
 comments[49] = "Id Pregunta: 8356. Examen TIC A2 2010";


//  Id pregunta: 8482 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta, considerando diferencias entre IPv4 e IPv6?";
 choices[50]= new Array();
 choices[50][0] = "Ipv6 duplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 64 bits.";
 choices[50][1] = "Algunos campos de la cabecera de Ipv4 han sido eliminados o convertidos en opcionales para reducir el coste de proceso normal de los paquetes y limitar el coste en ancho de banda de la cabecera Ipv6.";
 choices[50][2] = "IPV6 complica la cabecera, al a&ntilde;adir campos a los que ya tenia la cabecea Ipv4, para permitir mayor capacidad de configuraci&oacute;n, lo que supone, por contra, un mayor coste de proceso, que se compensar&aacute; por la mayor potencia del hardware.";
 choices[50][3] = "IPv6 triplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 96 bits.";
 answers[50] = choices[50][1];
 units[50] = "100";
 comments[50] = "Id Pregunta: 8482. Examen TIC A2 2010 interna";


//  Id pregunta: 8514 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  Algunas Comunidades Aut&oacute;nomas han realizado de forma gratuita y totalmente personalizada distribuciones de software libre. Indique la asociaci&oacute;n INCORRECTA: ";
 choices[51]= new Array();
 choices[51][0] = "Lluirex - Valencia";
 choices[51][1] = "MAX - Madrid";
 choices[51][2] = "LinKat - Catalu&ntilde;a";
 choices[51][3] = "mEDUxa - Baleares";
 answers[51] = choices[51][3];
 units[51] = "61";
 comments[51] = "Id Pregunta: 8514. Examen TIC A2 2010";


//  Id pregunta: 8528 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  En IPSec, el modo de funcionamiento en el que s&oacute;lo los datos son cifrados o autenticados, y el enrutamiento permanece intacto por lo que asegura la comunicaci&oacute;n extremo a extremo, se denomina:";
 choices[52]= new Array();
 choices[52][0] = "Modo t&uacute;nel.";
 choices[52][1] = "Modo transporte.";
 choices[52][2] = "Modo encapsulado.";
 choices[52][3] = "Modo transparente.";
 answers[52] = choices[52][1];
 units[52] = "111";
 comments[52] = "Id Pregunta: 8528. Examen TIC A2 2010 interna";


//  Id pregunta: 8639 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[53]= new Array();
 choices[53][0] = "(A, B, C), (A, B, D).";
 choices[53][1] = "(A, B, C), (B, D).";
 choices[53][2] = "(A, B, C),  (A, D).";
 choices[53][3] = "Ya est&aacute; en 2FN.";
 answers[53] = choices[53][1];
 units[53] = "57, 58";
 comments[53] = "Id Pregunta: 8639. Examen TIC A2 2010 interna";


//  Id pregunta: 8799 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[54]= new Array();
 choices[54][0] = "CLRUN";
 choices[54][1] = "CLRNET";
 choices[54][2] = "COLR";
 choices[54][3] = "CLR";
 answers[54] = choices[54][3];
 units[54] = "59, 115";
 comments[54] = "Id Pregunta: 8799. Examen UPM A2 2011";


//  Id pregunta: 8920 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  Las siglas SOAP significan";
 choices[55]= new Array();
 choices[55][0] = "Simple Object Access Protocol, o protocolo simple de acceso a objetos";
 choices[55][1] = "Single Object Access Protocol, o protocolo de acceso a objetos individuales";
 choices[55][2] = "Single Object Authorization Protocolo, o protocolo de autorizaci&oacute;n de objetos individuales";
 choices[55][3] = "Sevice Oriented Access Protocol, o protocolo de acceso orientado a servicios";
 answers[55] = choices[55][0];
 units[55] = "51";
 comments[55] = "Id Pregunta: 8920. Operador Ayto. Madrid 2010";


//  Id pregunta: 9064 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  Seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal, las infracciones leves ser&aacute;n sancionadas con multas de:";
 choices[56]= new Array();
 choices[56][0] = "601,01 a 60.101,21 euros";
 choices[56][1] = "901,01 a 60.101,21 euros";
 choices[56][2] = "600 a 40.000 euros";
 choices[56][3] = "900 a 40.000 euros";
 answers[56] = choices[56][3];
 units[56] = "29";
 comments[56] = "Id Pregunta: 9064. NULL";


//  Id pregunta: 9096 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[57]= new Array();
 choices[57][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[57][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[57][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[57][3] = "Todas las anteriores son verdaderas.";
 answers[57] = choices[57][3];
 units[57] = "36";
 comments[57] = "Id Pregunta: 9096. ";


//  Id pregunta: 9186 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  Seg&uacute;n M&eacute;trica 3, &iquest; cu&aacute;ndo se elaboran los manuales de usuario ?";
 choices[58]= new Array();
 choices[58][0] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[58][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[58][2] = "Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[58][3] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 answers[58] = choices[58][0];
 units[58] = "86";
 comments[58] = "Id Pregunta: 9186. NULL";


//  Id pregunta: 9201 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  El lenguaje de expresi&oacute;n de derechos REL se basa en contenedores de grants. Indica cual de los siguientes elementos no forma parte de un grant.";
 choices[59]= new Array();
 choices[59][0] = "Principal.";
 choices[59][1] = "Right.";
 choices[59][2] = "Resource.";
 choices[59][3] = "Constraints.";
 answers[59] = choices[59][3];
 units[59] = "37";
 comments[59] = "Id Pregunta: 9201. ";


//  Id pregunta: 9231 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  &iquest;Qu&eacute; es la barra y la l&iacute;nea en tecnolog&iacute;a mainframe de IBM?";
 choices[60]= new Array();
 choices[60][0] = "Espacio de direccionamiento que alcanza los 64 MB y los 2 GB respectivamente.";
 choices[60][1] = "Espacio de direccionamiento que alcanza los 2 GB y los 64 MB respectivamente";
 choices[60][2] = "Espacio de direccionamiento que alcanza los 2 GB y los 16 MB respectivamente.";
 choices[60][3] = "Ninguna es correcta.";
 answers[60] = choices[60][2];
 units[60] = "52,55";
 comments[60] = "Id Pregunta: 9231. ";


//  Id pregunta: 9354 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[61]= new Array();
 choices[61][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[61][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[61][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[61][3] = "Ninguna de las respuestas es correcta.";
 answers[61] = choices[61][0];
 units[61] = "103";
 comments[61] = "Id Pregunta: 9354. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9362 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  Una red utiliza CSMA/CD. Opera a 1 Gbps con un cable de 500 metros de largo sin repetidores. La velocidad de propagaci&oacute;n en el cable es de 200.000 km/s &iquest;Cu&aacute;l es el tama&ntilde;o m&iacute;nimo de la trama?";
 choices[62]= new Array();
 choices[62][0] = "5000 bits";
 choices[62][1] = "10000 bits";
 choices[62][2] = "1250 bytes";
 choices[62][3] = "1000 bits";
 answers[62] = choices[62][0];
 units[62] = "101";
 comments[62] = "Id Pregunta: 9362. ";


//  Id pregunta: 9398 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  En el modelo de referencia de ATM, &iquest;cu&aacute;ntos planos se especifican?";
 choices[63]= new Array();
 choices[63][0] = "Dos (usuario y se&ntilde;alizaci&oacute;n). ";
 choices[63][1] = "Tres (usuario, control/se&ntilde;alizaci&oacute;n y administraci&oacute;n).";
 choices[63][2] = "Dos (datos estructurados y datos no estructurados). ";
 choices[63][3] = "Tres (datos, voz y video). ";
 answers[63] = choices[63][1];
 units[63] = "109";
 comments[63] = "Id Pregunta: 9398. TIC AGE A2 2011 Promo Int";


//  Id pregunta: 9451 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  En UML, NO es un diagrama din&aacute;mico:";
 choices[64]= new Array();
 choices[64][0] = "Diagrama de secuencia.";
 choices[64][1] = "Diagrama de estado.";
 choices[64][2] = "Diagrama de despliegue.";
 choices[64][3] = "Diagrama de colaboraci&oacute;n.";
 answers[64] = choices[64][2];
 units[64] = "82";
 comments[64] = "Id Pregunta: 9451. Examen AGE TIC A1 2011";


//  Id pregunta: 9458 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  En la t&eacute;cnica de Diagramas de Flujo de Datos:";
 choices[65]= new Array();
 choices[65][0] = "Las entidades externas pueden tener relaciones entre s&iacute;.";
 choices[65][1] = "Las entidades externas pueden enviar datos a los almacenes.";
 choices[65][2] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es as&iacute;ncrona.";
 choices[65][3] = "En el diagrama de conexto s&oacute;lo aparece un proceso.";
 answers[65] = choices[65][3];
 units[65] = "81";
 comments[65] = "Id Pregunta: 9458. ";


//  Id pregunta: 9483 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Indique la informaci&oacute;n opcional que se debe registrar de cada requisito";
 choices[66]= new Array();
 choices[66][0] = "C&oacute;digo &uacute;nico";
 choices[66][1] = "Nombre descriptivo";
 choices[66][2] = "Descripci&oacute;n";
 choices[66][3] = "Fecha creaci&oacute;n";
 answers[66] = choices[66][3];
 units[66] = "78";
 comments[66] = "Id Pregunta: 9483. ";


//  Id pregunta: 9522 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  En los sistemas de videoconferencia las MCU:";
 choices[67]= new Array();
 choices[67][0] = "Son un componente obligatorio";
 choices[67][1] = "Son un componente opcional";
 choices[67][2] = "Permiten la comunicaci&oacute;n &uacute;nicamente entre dos terminales";
 choices[67][3] = "Permiten sesiones de videoconferencia s&oacute;lo para dos localizaciones remotas simult&aacute;neas";
 answers[67] = choices[67][1];
 units[67] = "117";
 comments[67] = "Id Pregunta: 9522. NULL";


//  Id pregunta: 9666 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  La taxonom&iacute;a de Flynn:";
 choices[68]= new Array();
 choices[68][0] = "Es una clasificaci&oacute;n cl&aacute;sica de computadores en funci&oacute;n de su arquitectura.";
 choices[68][1] = "Se basa en el flujo que siguen los datos y las instrucciones dentro de una m&aacute;quina.";
 choices[68][2] = "Se divide en cuatro categor&iacute;as.";
 choices[68][3] = "Todas las anteriores.";
 answers[68] = choices[68][3];
 units[68] = "45";
 comments[68] = "Id Pregunta: 9666. ";


//  Id pregunta: 9812 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes nombres NO se corresponde con una versi&oacute;n del sistema operativo Android?";
 choices[69]= new Array();
 choices[69][0] = "Kit Kat.";
 choices[69][1] = "Ice Cream Sandwich.";
 choices[69][2] = "Donut.";
 choices[69][3] = "Candy Marzipan.";
 answers[69] = choices[69][3];
 units[69] = "52,53,54";
 comments[69] = "Id Pregunta: 9812. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9952 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula los procesos de ciclo de vida del software?";
 choices[70]= new Array();
 choices[70][0] = "ISO/IEC 12207:2008";
 choices[70][1] = "ISO 9001:2008";
 choices[70][2] = "ISO 29393:2009";
 choices[70][3] = "ISO 31000:2009";
 answers[70] = choices[70][0];
 units[70] = "76";
 comments[70] = "Id Pregunta: 9952. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9993 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes normas no hace referencia a la factura electr&oacute;nica?";
 choices[71]= new Array();
 choices[71][0] = "Ley 11/2007";
 choices[71][1] = "Real Decreto 1619/2012";
 choices[71][2] = "Ley 25/2013";
 choices[71][3] = "Real Decreto Legislativo 3/2011";
 answers[71] = choices[71][0];
 units[71] = "70";
 comments[71] = "Id Pregunta: 9993. NULL";


//  Id pregunta: 10005 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Microsoft ActiveX Data Objects de la plataforma .NET";
 choices[72]= new Array();
 choices[72][0] = "permite trabajar desconectado del origen de datos.";
 choices[72][1] = "no se integra con XML.";
 choices[72][2] = "es el precursor de RDO ( Remote Data Objects).";
 choices[72][3] = "utiliza una forma secuencial de navegaci&oacute;n para acceder a las filas de una tabla.";
 answers[72] = choices[72][0];
 units[72] = "59, 114";
 comments[72] = "Id Pregunta: 10005. ";


//  Id pregunta: 10041 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  El est&aacute;ndar ANSI/TIA-942 establece distintos niveles en relaci&oacute;n a ciertos requisitos de seguridad en los Centros de Proceso de Datos (CPD). &iquest;Cu&aacute;l es el nivel m&aacute;s exigente?a) Tier 5 b) Tier 4";
 choices[73]= new Array();
 choices[73][0] = "Tier 5 ";
 choices[73][1] = "Tier 4";
 choices[73][2] = "Tier 3 ";
 choices[73][3] = "Tier 0";
 answers[73] = choices[73][1];
 units[73] = "99";
 comments[73] = "Id Pregunta: 10041. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10064 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  En MPLS, la asignaci&oacute;n de un paquete a un FEC (Forwarding Equivalence Class) tiene lugar:";
 choices[74]= new Array();
 choices[74][0] = "S&oacute;lo una vez, cuando el paquete entra en la red MPLS.";
 choices[74][1] = "Antes de entrar en la red MPLS, en el &uacute;ltimo router convencional conectado antes del primer nodo MPLS.";
 choices[74][2] = "Al iniciar una conexi&oacute;n de red, negociando el host de origen con el primer nodo MPLS el FEC a usar.";
 choices[74][3] = "Cuando el primer paquete abandona la red MPLS, y se ha podido descubrir la ruta por medios convencionales.";
 answers[74] = choices[74][0];
 units[74] = "100";
 comments[74] = "Id Pregunta: 10064. TIC A2, libre, examen 2013";


//  Id pregunta: 10088 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  En la metodolog&iacute;a SCRUM existen distintos tipo de reuniones. &iquest;Qu&eacute; orden cronol&oacute;gico suelen tener?";
 choices[75]= new Array();
 choices[75][0] = "Daily Scrum, Scrum de Scrum, Sprint Planning Meeting, Sprint Review Meeting y Spring Retrospective.";
 choices[75][1] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Sprint Review Meeting y Spring Retrospective.";
 choices[75][2] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Spring Retrospective y Sprint Review Meeting. ";
 choices[75][3] = "Sprint Planning Meeting, Daily Scrum,  Sprint Review Meeting, Scrum de Scrum y Spring Retrospective.";
 answers[75] = choices[75][1];
 units[75] = "79";
 comments[75] = "Id Pregunta: 10088. NULL";


//  Id pregunta: 10127 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Cu&aacute;l de las siguientes no es un &aacute;rea de gesti&oacute;n de red seg&uacute;n el modelo de ISO:";
 choices[76]= new Array();
 choices[76][0] = "Fault Mangement";
 choices[76][1] = "Configuration Management";
 choices[76][2] = "Accounting Management";
 choices[76][3] = "Improvement Management";
 answers[76] = choices[76][3];
 units[76] = "104";
 comments[76] = "Id Pregunta: 10127. ";


//  Id pregunta: 10161 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con el c&aacute;lculo relacional?";
 choices[77]= new Array();
 choices[77][0] = "Lenguaje formal de consulta / acceso a un modelo relacional basado en la teor&iacute;a de conjuntos";
 choices[77][1] = "Lenguaje te&oacute;rico y de car&aacute;cter procedural que define un conjunto de operaciones aplicables sobre un modelo relacional";
 choices[77][2] = "Formalismo para expresar operaciones de consulta / acceso a un modelo relacional basado en la l&oacute;gica de predicados";
 choices[77][3] = "Ninguna de las anteriores";
 answers[77] = choices[77][2];
 units[77] = "58";
 comments[77] = "Id Pregunta: 10161. ";


//  Id pregunta: 10204 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[78]= new Array();
 choices[78][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[78][1] = "Desaparece el RNC (Radio Network Controller) y sus funciones se incorporan al eNode B (Evolved Node B)";
 choices[78][2] = "Desaparecen los soft handovers y solo existen hard handovers";
 choices[78][3] = "Mantiene en su arquitectura los HLR (Home Locationl Register) usados desde GSM";
 answers[78] = choices[78][3];
 units[78] = "108";
 comments[78] = "Id Pregunta: 10204. En la arquitectura se introduce un nuevo elemento llamado HSS (Home Subscriber Server) basado en la antigua HLR y AuC";


//  Id pregunta: 10229 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Cuales de los siguientes objetos son interfaces:";
 choices[79]= new Array();
 choices[79][0] = "java.util.List";
 choices[79][1] = "java.util.TreeMap";
 choices[79][2] = "java.util.AbstractList";
 choices[79][3] = "java.util.Collections";
 answers[79] = choices[79][0];
 units[79] = "60";
 comments[79] = "Id Pregunta: 10229. NULL";


//  Id pregunta: 10303 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Internet Small Computer Systems Interface (iSCSI) seg&uacute;n el RFC 3720 es un protocolo de:";
 choices[80]= new Array();
 choices[80][0] = "Enlace.";
 choices[80][1] = "Red.";
 choices[80][2] = "Transporte.";
 choices[80][3] = "Aplicaci&oacute;n.";
 answers[80] = choices[80][2];
 units[80] = "48";
 comments[80] = "Id Pregunta: 10303. TIC A2, libre, examen 2013";


//  Id pregunta: 10350 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[81]= new Array();
 choices[81][0] = "Para cumplir nivel A, las p&aacute;ginas no pueden contener ning&uacute;n elemento que destelle m&aacute;s de 3 veces por segundo";
 choices[81][1] = "Lo anterior es cierto, pero para nivel AA";
 choices[81][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[81][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que adem&aacute;s el destello debe estar por debajo del umbral de destello general y de rojo";
 answers[81] = choices[81][2];
 units[81] = "39";
 comments[81] = "Id Pregunta: 10350. Consultar WCAG Pauta 2.3 Convulsiones";


//  Id pregunta: 10469 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Respecto a HTML5, indique la respuesta incorrecta:";
 choices[82]= new Array();
 choices[82][0] = "Existe una API de geolocalizaci&oacute;n.";
 choices[82][1] = "Permite abrir sockets para una comunicaci&oacute;n bidireccional, full duplex con baja latencia y que se basa en el protocolo TCP.";
 choices[82][2] = "No neceita Flash para ver v&iacute;deos.";
 choices[82][3] = "Los Web Workers permiten la ejecuci&oacute;n de un &uacute;nico subproceso.";
 answers[82] = choices[82][3];
 units[82] = "69";
 comments[82] = "Id Pregunta: 10469. NULL";


//  Id pregunta: 10479 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Si quiero cambiar el PIN del DNI electr&oacute;nico:";
 choices[83]= new Array();
 choices[83][0] = "S&oacute;lo puedo hacerlo desde mi casa pero necesito un lector de huella dactilar";
 choices[83][1] = "Puedo hacerlo desde los dispositivos autorizados por la Direcci&oacute;n General de la Polic&iacute;a";
 choices[83][2] = "Puedo hacerlo s&oacute;lo usando mi navegador web";
 choices[83][3] = "S&oacute;lo puedo hacerlo si tengo el PUK";
 answers[83] = choices[83][1];
 units[83] = "74";
 comments[83] = "Id Pregunta: 10479. NULL";


//  Id pregunta: 10558 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  COBIT 5 Incluye";
 choices[84]= new Array();
 choices[84][0] = "4 principios y 6 procesos habilitadores";
 choices[84][1] = "5 principios y 7 procesos habilitadores";
 choices[84][2] = "4 principios y 7 procesos habilitadores";
 choices[84][3] = "5 principios y 6 procesos habilitadores";
 answers[84] = choices[84][1];
 units[84] = "31, 32, 33";
 comments[84] = "Id Pregunta: 10558. ";


//  Id pregunta: 10605 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Para que un organismo utilice la pasarela de pagos de la AEAT:";
 choices[85]= new Array();
 choices[85][0] = "Necesita un certificado de sede electr&oacute;nica.";
 choices[85][1] = "Debe implementar una interfaz REST.";
 choices[85][2] = "Debe poseer un certificado de persona f&iacute;sica, jur&iacute;dica o de componente.";
 choices[85][3] = "La DTIC recomienda que cada organismo implemente su propia pasarela de pagos.";
 answers[85] = choices[85][2];
 units[85] = "70";
 comments[85] = "Id Pregunta: 10605. ";


//  Id pregunta: 10658 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de estas tecnolog&iacute;as inal&aacute;mbricas puede alcanzar una cobertura de hasta 80 kil&oacute;metros?";
 choices[86]= new Array();
 choices[86][0] = "Zigbee";
 choices[86][1] = "WiMAX";
 choices[86][2] = "Ethernet";
 choices[86][3] = "Wibree";
 answers[86] = choices[86][1];
 units[86] = "107";
 comments[86] = "Id Pregunta: 10658. ";


//  Id pregunta: 10663 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Indique la afirmaci&oacute;n correcta:";
 choices[87]= new Array();
 choices[87][0] = "Ipv6 posibilita 2256 de direcciones de host diferentes.";
 choices[87][1] = "El encabezado de Ipv6 (sin opciones) es m&aacute;s corto que el de IPv4";
 choices[87][2] = "Con Ipv6 no es necesario el mecanismo de traducci&oacute;n de direcciones de red (NAT)";
 choices[87][3] = "Todas las anteriores son incorrectas.";
 answers[87] = choices[87][2];
 units[87] = "100";
 comments[87] = "Id Pregunta: 10663. ";


//  Id pregunta: 10681 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Seg&uacute;n la Ley 39/2015 se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[88]= new Array();
 choices[88][0] = "Comunicarse con las Administraciones P&uacute;blicas a trav&eacute;s de un Punto de Acceso General electr&oacute;nico de la Administraci&oacute;n.";
 choices[88][1] = "Relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos utilizando cualquier formato recogido en el ENI.";
 choices[88][2] = "Ambas";
 choices[88][3] = "Ninguna de las anteriores.";
 answers[88] = choices[88][0];
 units[88] = "30";
 comments[88] = "Id Pregunta: 10681. ";


//  Id pregunta: 10778 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seg&uacute;n se establece en la Ley 15/1999, en su art&iacute;culo 31 acerca del censo promocional, indique cu&aacute;l es el plazo de vigencia del uso de cada lista del censo promocional tal que concluido dicho plazo la lista perder&aacute; su car&aacute;cter de fuente de acceso p&uacute;blico:";
 choices[89]= new Array();
 choices[89][0] = "6 meses.";
 choices[89][1] = "1 a&ntilde;o.";
 choices[89][2] = "2 a&ntilde;os.";
 choices[89][3] = "5 a&ntilde;os.";
 answers[89] = choices[89][1];
 units[89] = "29";
 comments[89] = "Id Pregunta: 10778. Examen GSI 2014";


//  Id pregunta: 10929 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  La Comisi&oacute;n Europea establece una serie de prioridades y acciones para promover una administraci&oacute;n p&uacute;blica inteligente, sostenible e innovadora, enmarcadas en el Plan de Acci&oacute;n Europeo sobre Administraci&oacute;n Electr&oacute;nica 2011-2015. Entre estas prioridades y acciones se incluyen:";
 choices[90]= new Array();
 choices[90][0] = "Mejora de la transparencia, participaci&oacute;n de los ciudadanos y las empresas en los procesos de elaboraci&oacute;n de pol&iacute;ticas y sanidad en l&iacute;nea.";
 choices[90][1] = "Asesorar a los &oacute;rganos competentes en materia de contrataci&oacute;n, en los criterios y directrices para la agregaci&oacute;n y planificaci&oacute;n de la demanda TIC que dichos &oacute;rganos elaboren.";
 choices[90][2] = "Realizar las actuaciones necesarias para una mayor eficiencia econ&oacute;mica, normalizando una red de clientes de cada Departamento Ministerial frente a proveedores externos.";
 choices[90][3] = "Realizar el informe t&eacute;cnico preceptivo de la memoria y los pliegos de prescripciones t&eacute;cnicas de los convenios de colaboraci&oacute;n y encomiendas de gesti&oacute;n que incluyan la prestaci&oacute;n de servicios en materia de TIC de la AGE.";
 answers[90] = choices[90][3];
 units[90] = "30";
 comments[90] = "Id Pregunta: 10929. TIC A1 AGE 2014";


//  Id pregunta: 10975 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica 3, el Plan de Sistemas de Informaci&oacute;n:";
 choices[91]= new Array();
 choices[91][0] = "Incluye la evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los pr&oacute;ximos cinco a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos.";
 choices[91][1] = "La perspectiva del plan debe ser estrat&eacute;gica, operativa y tecnol&oacute;gica.";
 choices[91][2] = "El nivel de detalle con el que se har&aacute; el estudio de la situaci&oacute;n actual no depende de la existencia de documentaci&oacute;n.";
 choices[91][3] = "Para su elaboraci&oacute;n se estudian las necesidades de informaci&oacute;n de los procesos afectados con el fin de definir requisitos generales y obtener modelos conceptuales de informaci&oacute;n.";
 answers[91] = choices[91][3];
 units[91] = "86";
 comments[91] = "Id Pregunta: 10975. TIC A1 AGE 2014";


//  Id pregunta: 11076 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l las siguientes afirmaciones acerca del proceso de Gesti&oacute;n Proveedores es INCORRECTA?";
 choices[92]= new Array();
 choices[92][0] = "Gesti&oacute;n de Proveedores negocia los acuerdos internos y externos para dar soporte en la entrega de los servicios";
 choices[92][1] = "Gesti&oacute;n de Proveedores asegura que los proveedores satisfacen las expectativas del negocio";
 choices[92][2] = "Gesti&oacute;n de Proveedores mantiene la informaci&oacute;n de la Base de Datos de Proveedores y Contratos";
 choices[92][3] = "Gesti&oacute;n de Proveedores debe involucrarse en todas las etapas del Ciclo de Vida del Servicio, desde la Estrategia, pasando por Dise&ntilde;o, Transici&oacute;n, Operaci&oacute;n y Mejora";
 answers[92] = choices[92][0];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11076. ";


//  Id pregunta: 11116 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seleccione la opci&oacute;n verdadera respecto a la clasificaci&oacute;n de las empresas en contratos";
 choices[93]= new Array();
 choices[93][0] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 200.000&euro; y contratos de servicios de valor estimado mayor que 500.000&euro;";
 choices[93][1] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 500.000&euro; y contratos de servicios de valor estimado mayor que 200.000&euro;";
 choices[93][2] = "S&oacute;lo es exigible en contratos de obras de valor estimado mayor de 200.000&euro; y en todo caso para contratos de servicios";
 choices[93][3] = "S&oacute;lo es exigible en contratos de obras en todo caso y contratos de servicios de valor estimado mayor que 200.000&euro;";
 answers[93] = choices[93][1];
 units[93] = "41";
 comments[93] = "Id Pregunta: 11116. ";


//  Id pregunta: 11159 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seleccione la respuesta verdadera:";
 choices[94]= new Array();
 choices[94][0] = "El fan-in de un m&oacute;dulo es usado como una medida de reusabilidad";
 choices[94][1] = "El fan-in de un m&oacute;dulo es usado como una medida de complejidad.";
 choices[94][2] = "Las dos anteriores son verdaderas";
 choices[94][3] = "Todas son falsas";
 answers[94] = choices[94][0];
 units[94] = "84";
 comments[94] = "Id Pregunta: 11159. ";


//  Id pregunta: 11225 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En que capa del patr&oacute;n MVC es com&uacute;n el uso del patr&oacute;n DAO";
 choices[95]= new Array();
 choices[95][0] = "En el modelo.";
 choices[95][1] = "En el vista.";
 choices[95][2] = "En el controlador.";
 choices[95][3] = "No se usan simult&aacute;neamente.";
 answers[95] = choices[95][2];
 units[95] = "116";
 comments[95] = "Id Pregunta: 11225. ";


//  Id pregunta: 11406 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;En qu&eacute; libro de ITIL v3 se pueden encontrar las descripciones detalladas de la Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de Suministradores?";
 choices[96]= new Array();
 choices[96][0] = "Estrategia del Servicio";
 choices[96][1] = "Dise&ntilde;o del Servicio";
 choices[96][2] = "Transici&oacute;n del Servicio";
 choices[96][3] = "Operaci&oacute;n del Servicio";
 answers[96] = choices[96][1];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11406. ";


//  Id pregunta: 11421 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, la reasignaci&oacute;n del uso de bandas de frecuencias con el objetivo de alcanzar un uso m&aacute;s eficiente del espectro radioel&eacute;ctrico es facultad de:";
 choices[97]= new Array();
 choices[97][0] = "El gobierno.";
 choices[97][1] = "La CNMC.";
 choices[97][2] = "El Ayuntamiento de la localidad.";
 choices[97][3] = "Los organismos internacionales.";
 answers[97] = choices[97][0];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11421. ";


//  Id pregunta: 11581 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes funciones de seguridad no ofrece SSL?";
 choices[98]= new Array();
 choices[98][0] = "No repudio";
 choices[98][1] = "Confidencialidad";
 choices[98][2] = "Integridad.";
 choices[98][3] = "Ofrece todas las anteriores";
 answers[98] = choices[98][0];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11581. NULL";


//  Id pregunta: 11715 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l es la forma en que un administrador puede configurar VLAN?";
 choices[99]= new Array();
 choices[99][0] = "Est&aacute;ticamente o Dinamicamente";
 choices[99][1] = "Din&aacute;micamente o a trav&eacute;s de una base de datos de VLAN";
 choices[99][2] = "A trav&eacute;s de un servidor DHCP";
 choices[99][3] = "A trav&eacute;s de  una base de datos";
 answers[99] = choices[99][0];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11715. NULL";


