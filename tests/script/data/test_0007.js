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

//  Id pregunta: 189 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica para la toma de decisiones individuales?";
 choices[0]= new Array();
 choices[0][0] = "Delphi";
 choices[0][1] = "Programaci&oacute;n lineal";
 choices[0][2] = "Teor&iacute;a de l&iacute;neas de espera";
 choices[0][3] = "An&aacute;lisis de redes";
 answers[0] = choices[0][0];
 units[0] = "23";
 comments[0] = "Id Pregunta: 189. Similar a examen TIC SS A 2003";


//  Id pregunta: 620 AÃ±o de creación de pregunta: 2006-01-01
 questions[1]= "2)  La auditor&iacute;a de econom&iacute;a, eficacia y eficiencia, o triple E, ha sido bautizada por la United Kingdom Audit Office como:";
 choices[1]= new Array();
 choices[1][0] = "VFN";
 choices[1][1] = "VAN";
 choices[1][2] = "TIR";
 choices[1][3] = "VFM";
 answers[1] = choices[1][3];
 units[1] = "33";
 comments[1] = "Id Pregunta: 620. ";


//  Id pregunta: 630 AÃ±o de creación de pregunta: 2006-01-01
 questions[2]= "3)  Cu&aacute;l de los siguientes derechos de explotaci&oacute;n no precisan la realizaci&oacute;n o autorizaci&oacute;n por parte del titular de un programa de ordenador, seg&uacute;n la ley espa&ntilde;ola de propiedad intelectual:";
 choices[2]= new Array();
 choices[2][0] = "Reproducci&oacute;n total o parcial.";
 choices[2][1] = "La realizaci&oacute;n de una copia de seguridad.";
 choices[2][2] = "Traducci&oacute;n, adaptaci&oacute;n o arreglo.";
 choices[2][3] = "Cualquier forma de distribuci&oacute;n p&uacute;blica.";
 answers[2] = choices[2][1];
 units[2] = "36";
 comments[2] = "Id Pregunta: 630. ";


//  Id pregunta: 660 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Se&ntilde;ale cual de las siguientes normas se debe tener en cuenta en el Area de Seguridad de una organizaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "ISO 27002";
 choices[3][1] = "ISO 14508 sobre perfiles de protecci&oacute;n";
 choices[3][2] = "ISO 14848";
 choices[3][3] = "UNE-ISO 17799";
 answers[3] = choices[3][0];
 units[3] = "42";
 comments[3] = "Id Pregunta: 660. ";


//  Id pregunta: 879 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l es el modelo de objeto de documento que utilizan los parsers o analizadores de XML?:";
 choices[4]= new Array();
 choices[4][0] = "DOKM";
 choices[4][1] = "DOM";
 choices[4][2] = "JDOC";
 choices[4][3] = "Todas son falsas";
 answers[4] = choices[4][1];
 units[4] = "69";
 comments[4] = "Id Pregunta: 879. NULL";


//  Id pregunta: 1519 AÃ±o de creación de pregunta: 2003-01-01
 questions[5]= "6)  Caracter&iacute;stica falsa de los archivos .jar";
 choices[5]= new Array();
 choices[5][0] = "Es un acr&oacute;nimo de Java ARchives";
 choices[5][1] = " Puede incluir un subdirectorio META-INF";
 choices[5][2] = " Puede incluir un fichero MANIFEST.MF";
 choices[5][3] = "Puede incluir clases e im&aacute;genes pero no sonidos ";
 answers[5] = choices[5][3];
 units[5] = "60";
 comments[5] = "Id Pregunta: 1519. NULL";


//  Id pregunta: 1532 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  &iquest; Cu&aacute;l de las siguientes no es una distribuci&oacute;n de Linux ?";
 choices[6]= new Array();
 choices[6][0] = "Debian";
 choices[6][1] = "Gentoo";
 choices[6][2] = "Max";
 choices[6][3] = "FreeBSD";
 answers[6] = choices[6][3];
 units[6] = "61,62";
 comments[6] = "Id Pregunta: 1532. ";


//  Id pregunta: 2238 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Booch, Jacobson y Rumbaugh:";
 choices[7]= new Array();
 choices[7][0] = "crearon C++";
 choices[7][1] = "crearon los diagramas E/R";
 choices[7][2] = "dise&ntilde;aron el primer ordenador que usaba procesamiento real en paralelo";
 choices[7][3] = "crearon UML";
 answers[7] = choices[7][3];
 units[7] = "82";
 comments[7] = "Id Pregunta: 2238. ";


//  Id pregunta: 2575 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  &iquest;Que definici&oacute;n de las siguientes se ajusta m&aacute;s al concepto de Downsizing?";
 choices[8]= new Array();
 choices[8][0] = "Descarga y migraci&oacute;n selectiva de aplicaciones.";
 choices[8][1] = "Migraci&oacute;n de aquellas aplicaciones personales o departamentales cuya informaci&oacute;n es relevante para toda la organizaci&oacute;n y que deben ser dispuestas para su acceso global.";
 choices[8][2] = "Todas son ciertas.";
 choices[8][3] = "Migraci&oacute;n de aplicaciones desde el gran ordenador principal a m&aacute;quinas mucho menores.";
 answers[8] = choices[8][3];
 units[8] = "90";
 comments[8] = "Id Pregunta: 2575. ";


//  Id pregunta: 2757 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  En el an&aacute;lisis orientado a objetos, una clase que no tenga instancias se denomina:";
 choices[9]= new Array();
 choices[9][0] = "No puede darse";
 choices[9][1] = "Clase padre";
 choices[9][2] = "Subclase";
 choices[9][3] = "Clase abstracta";
 answers[9] = choices[9][3];
 units[9] = "82";
 comments[9] = "Id Pregunta: 2757. ";


//  Id pregunta: 3435 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indique la afirmaci&oacute;n incorrecta referente a la RDSI:";
 choices[10]= new Array();
 choices[10][0] = "Se puede realizar el acceso a trav&eacute;s de las l&iacute;neas existentes a dos hilos";
 choices[10][1] = "La se&ntilde;alizaci&oacute;n por canal com&uacute;n (CCS7) se realiza entre centrales";
 choices[10][2] = "El sistema de se&ntilde;alizaci&oacute;n para abonados digitales RDSI (DSS1) ha sido definido para su empleo entre centrales y equipos terminales";
 choices[10][3] = "El transporte de se&ntilde;alizaci&oacute;n (Canal D) no permite el empaquetamiento de datos";
 answers[10] = choices[10][3];
 units[10] = "103";
 comments[10] = "Id Pregunta: 3435. ";


//  Id pregunta: 3447 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El protocolo de gesti&oacute;n y administraci&oacute;n de redes que ha sido estandarizado por OSI es:";
 choices[11]= new Array();
 choices[11][0] = "SNMP (Simple Network Management Protocol)";
 choices[11][1] = "SMIP (Structure of Management Information Protocol)";
 choices[11][2] = "CMIP (Common Management Information Protocol)";
 choices[11][3] = "RMON (Remote Network Monitoring)";
 answers[11] = choices[11][2];
 units[11] = "104";
 comments[11] = "Id Pregunta: 3447. ";


//  Id pregunta: 3522 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En funci&oacute;n del &aacute;rea geogr&aacute;fica que cubran y de sus caracter&iacute;sticas, se puede decir:";
 choices[12]= new Array();
 choices[12][0] = "Las redes de comunicaci&oacute;n se dividen en LAN (&aacute;rea local) y WAN (&aacute;rea extendida)";
 choices[12][1] = "Las redes WAN ofrecen bajas tasas de error";
 choices[12][2] = "En una red LAN los costes derivados del uso de la red pueden depender del tr&aacute;fico";
 choices[12][3] = "Las redes WAN pueden almacenar datos y despu&eacute;s enviarlos";
 answers[12] = choices[12][3];
 units[12] = "101";
 comments[12] = "Id Pregunta: 3522. ";


//  Id pregunta: 3744 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Los sistemas m&oacute;viles celulares:";
 choices[13]= new Array();
 choices[13][0] = "Son de car&aacute;cter unidireccional";
 choices[13][1] = "No permiten la conexi&oacute;n a la red p&uacute;blica";
 choices[13][2] = "Permiten la reutilizaci&oacute;n de frecuencias";
 choices[13][3] = "No requieren separaci&oacute;n m&iacute;nima entre c&eacute;lulas";
 answers[13] = choices[13][2];
 units[13] = "108";
 comments[13] = "Id Pregunta: 3744. ";


//  Id pregunta: 3988 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Sobre FDDI:";
 choices[14]= new Array();
 choices[14][0] = "Su est&aacute;ndar no est&aacute; recogido por la IEEE ni aceptado por ANSI";
 choices[14][1] = "Se conoce como X3T9.3";
 choices[14][2] = "Su equivalente en cobre es CDDI";
 choices[14][3] = "Todas son verdaderas";
 answers[14] = choices[14][2];
 units[14] = "101";
 comments[14] = "Id Pregunta: 3988. ";


//  Id pregunta: 4482 AÃ±o de creación de pregunta: 2007-01-01
 questions[15]= "16)  Si consideramos el framework de Net &iquest;Que entender&iacute;amos por CTS( Common Type System, o Sistema de Tipos Com&uacute;n)?";
 choices[15]= new Array();
 choices[15][0] = "Es un est&aacute;ndar que establece como se representan los tipos de datos en memoria, independientemente del lenguaje que los defina.";
 choices[15][1] = "Es un sistema tipificado de Software";
 choices[15][2] = "Es un sistema com&uacute;n de tipos que permite interoperar entre distintas plataformas.";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][0];
 units[15] = "59";
 comments[15] = "Id Pregunta: 4482. ";


//  Id pregunta: 4696 AÃ±o de creación de pregunta: 2007-01-01
 questions[16]= "17)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[16]= new Array();
 choices[16][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[16][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones.";
 choices[16][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[16][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[16] = choices[16][2];
 units[16] = "21";
 comments[16] = "Id Pregunta: 4696. Examen 2006 JCYL";


//  Id pregunta: 4757 AÃ±o de creación de pregunta: 2007-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes no es un control de prioridad 1 de las directrices de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[17]= new Array();
 choices[17][0] = "Para cualquier presentaci&oacute;n multimedia basada en tiempo (p.ej., una pel&iacute;cula o animaci&oacute;n), sincronice alternativas equivalentes (p.ej., subt&iacute;tulos o descripciones auditivas de la pista visual) con la presentaci&oacute;n";
 choices[17][1] = "Use hojas de estilo para controlar la composici&oacute;n y la presentaci&oacute;n.";
 choices[17][2] = "Identifique claramente los cambios en el lenguaje natural del texto de un documento y de cualquier equivalente de texto (p.ej., subt&iacute;tulos).";
 choices[17][3] = "Para tablas de datos, identifique encabezados de fila y columna.";
 answers[17] = choices[17][1];
 units[17] = "39";
 comments[17] = "Id Pregunta: 4757. ";


//  Id pregunta: 4809 AÃ±o de creación de pregunta: 2007-01-01
 questions[18]= "19)  Entre las arquitecturas de redes de comunicaciones para interconexi&oacute;n de sistemas NO se encuentra:";
 choices[18]= new Array();
 choices[18][0] = "OSI (Open System Interconnection) de ISO (International Standards Organization)";
 choices[18][1] = "DNA (Digital Network Architecture), de la antigua DEC (Digital Equipment Corporation)";
 choices[18][2] = "SNA (System Network Architecture), de IBM";
 choices[18][3] = "ONS (Open Network Standard) del ITU-T (International Telecommunications Union - Telecommunications)";
 answers[18] = choices[18][3];
 units[18] = "102";
 comments[18] = "Id Pregunta: 4809. ";


//  Id pregunta: 4837 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  En una situaci&oacute;n donde se ha producido un fallo del sistema que no ha ocasionado da&ntilde;os en la Base de Datos,&iquest;qu&eacute; se utilizar&iacute;a en el proceso de recuperaci&oacute;n?";
 choices[19]= new Array();
 choices[19][0] = "Copias de seguridad y ficheros de punto de sincronismo (checkpoint)";
 choices[19][1] = "Fichero diario (fichero log) para deshacer y rehacer transacciones";
 choices[19][2] = "Rollback de la transacci&oacute;n";
 choices[19][3] = "S&oacute;lo copia de seguridad con p&eacute;rdida de &uacute;ltimas transacciones";
 answers[19] = choices[19][1];
 units[19] = "58";
 comments[19] = "Id Pregunta: 4837. ";


//  Id pregunta: 4953 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l es el organismo acreditador espa&ntilde;ol dentro de la Infraestructura de la Calidad?";
 choices[20]= new Array();
 choices[20][0] = "AENOR";
 choices[20][1] = "ENAC";
 choices[20][2] = "Cualquier organismo de certificaci&oacute;n.";
 choices[20][3] = "Cualquier organismo certificado por el CEN (Centro Europeo de Normalizaci&oacute;n).";
 answers[20] = choices[20][1];
 units[20] = "92";
 comments[20] = "Id Pregunta: 4953. Examen TIC B 2007";


//  Id pregunta: 5693 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Se&ntilde;ale cu&aacute;l de las siguientes no es una de ellas:";
 choices[21]= new Array();
 choices[21][0] = "Zona p&uacute;blica";
 choices[21][1] = " Zona de seguridad";
 choices[21][2] = "Zona privada";
 choices[21][3] = "Zona confidencial";
 answers[21] = choices[21][3];
 units[21] = "74";
 comments[21] = "Id Pregunta: 5693. NULL";


//  Id pregunta: 5857 AÃ±o de creación de pregunta: 2009-01-01
 questions[22]= "23)  La Web 2.0 se refiere espec&iacute;ficamente a:";
 choices[22]= new Array();
 choices[22][0] = "Webs que generan informaci&oacute;n autom&aacute;ticamente a partir de bases de datos corporativas";
 choices[22][1] = "P&aacute;ginas implementadas con AJAX en las que s&oacute;lo existe un proveedor de contenidos";
 choices[22][2] = "Usar la inteligencia colectiva para proporcionar servicios interactivos en red dando al usuario el control de los datos";
 choices[22][3] = "Programas que procesan la avalancha de informaci&oacute;n existente en la Web";
 answers[22] = choices[22][2];
 units[22] = "69";
 comments[22] = "Id Pregunta: 5857. Pregunta 37";


//  Id pregunta: 5859 AÃ±o de creación de pregunta: 2009-01-01
 questions[23]= "24)  Indique la ventaja de los sistemas RFID (Radio Frecuency Identification) de baja frecuencia:";
 choices[23]= new Array();
 choices[23][0] = "Soportan la lectura simult&aacute;nea de varias etiquetas";
 choices[23][1] = "El coste de las etiquetas es bajo debido al peque&ntilde;o tama&ntilde;o de su antena";
 choices[23][2] = "Poseen alta tasas de transmisi&oacute;n";
 choices[23][3] = "Su se&ntilde;al atraviesa materiales tales como el agua, la madera y el aluminio";
 answers[23] = choices[23][3];
 units[23] = "74";
 comments[23] = "Id Pregunta: 5859. Pregunta 39";


//  Id pregunta: 5892 AÃ±o de creación de pregunta: 2009-01-01
 questions[24]= "25)  &iquest;Qu&eacute; es JNDI?";
 choices[24]= new Array();
 choices[24][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[24][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[24][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][0];
 units[24] = "60";
 comments[24] = "Id Pregunta: 5892. NULL";


//  Id pregunta: 6186 AÃ±o de creación de pregunta: 2010-01-01
 questions[25]= "26)  Indique, cu&aacute;l de los siguientes elementos no forma parte de una Intranet:";
 choices[25]= new Array();
 choices[25][0] = "Nomina del personal.";
 choices[25][1] = "Tabl&oacute;n de Anuncios.";
 choices[25][2] = "Motor de b&uacute;squeda de documentaci&oacute;n.";
 choices[25][3] = "Procesador de Textos.";
 answers[25] = choices[25][3];
 units[25] = "113";
 comments[25] = "Id Pregunta: 6186. ";


//  Id pregunta: 7141 AÃ±o de creación de pregunta: 2010-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l es la vigencia de los certificados electr&oacute;nicos incluidos en el DNI electr&oacute;nico?";
 choices[26]= new Array();
 choices[26][0] = "Dos a&ntilde;os";
 choices[26][1] = "Cuatro a&ntilde;os";
 choices[26][2] = "30 meses";
 choices[26][3] = "18 meses";
 answers[26] = choices[26][2];
 units[26] = "30";
 comments[26] = "Id Pregunta: 7141. Examen TIC B 2009 (RD 1553/2005, art&iacute;culo 12)";


//  Id pregunta: 8172 AÃ±o de creación de pregunta: 2011-01-01
 questions[27]= "28)  Seg&uacute;n M&eacute;trica v3, las pruebas de Regresi&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Se realizan para validar el resultado de las etapas anteriores.";
 choices[27][1] = "Se deben llevar a cabo cuando se hace un cambio en el sistema.";
 choices[27][2] = "Se dise&ntilde;an durante la fase de An&aacute;lisis.";
 choices[27][3] = "M&eacute;trica V3 no define las pruebas de regresi&oacute;n.";
 answers[27] = choices[27][1];
 units[27] = "86";
 comments[27] = "Id Pregunta: 8172. Examen TIC A1 2010";


//  Id pregunta: 8193 AÃ±o de creación de pregunta: 2011-01-01
 questions[28]= "29)  Seg&uacute;n el RD 589/2005, los Planes estrat&eacute;gicos departamentales en materia de tecnolog&iacute;as de la informaci&oacute;n y Administraci&oacute;n Electr&oacute;nica:";
 choices[28]= new Array();
 choices[28][0] = "Deben tener una duraci&oacute;n de al menos 2 a&ntilde;os. ";
 choices[28][1] = "Deben tener una duraci&oacute;n de al menos 3 a&ntilde;os.";
 choices[28][2] = "Deben tener una duraci&oacute;n de al menos 4 a&ntilde;os. ";
 choices[28][3] = "Pueden tener cualquier duraci&oacute;n siempre y cuando tengan car&aacute;cter verdaderamente estrat&eacute;gico.";
 answers[28] = choices[28][0];
 units[28] = "77";
 comments[28] = "Id Pregunta: 8193. Examen TIC A1 2010";


//  Id pregunta: 8253 AÃ±o de creación de pregunta: 2011-01-01
 questions[29]= "30)  Seg&uacute;n el est&aacute;ndar IEEE 610.12, la l&iacute;nea base:";
 choices[29]= new Array();
 choices[29][0] = "Es la l&iacute;nea que marca en la planificaci&oacute;n en que momento nos encontramos.";
 choices[29][1] = "Es la situaci&oacute;n en que se encuentra en cada momento el desarrollo.";
 choices[29][2] = "Es el momento de salida de la planificaci&oacute;n.";
 choices[29][3] = "Ha sido acordada formalmente.";
 answers[29] = choices[29][3];
 units[29] = "27,28";
 comments[29] = "Id Pregunta: 8253. Examen TIC A1 2010";


//  Id pregunta: 8391 AÃ±o de creación de pregunta: 2011-01-01
 questions[30]= "31)  Para las pruebas de caja transparente, se&ntilde;ale la opci&oacute;n correcta:";
 choices[30]= new Array();
 choices[30][0] = "Aseguran la ausencia absoluta de defectos.";
 choices[30][1] = "Comprueban la funcionalidad de un programa.";
 choices[30][2] = "Se realizan ignorando completamente la estructura interna de un programa.";
 choices[30][3] = "Exigen el conocimiento de la estructura interna del programa.";
 answers[30] = choices[30][3];
 units[30] = "91";
 comments[30] = "Id Pregunta: 8391. Examen TIC A2 2010";


//  Id pregunta: 8406 AÃ±o de creación de pregunta: 2011-01-01
 questions[31]= "32)  Cu&aacute;l de las siguientes afirmaciones en referencia a la arquitectura de computadores CISC (Complex Instruction Set Computer) es FALSA?";
 choices[31]= new Array();
 choices[31][0] = "Se caracteriza por tener un juego de instrucciones muy amplio.";
 choices[31][1] = "Tiene muchos modos de direccionamiento";
 choices[31][2] = "Tiene varios formatos de instrucci&oacute;n (de longitud variable)";
 choices[31][3] = "Su unidad de control es cableada";
 answers[31] = choices[31][3];
 units[31] = "46";
 comments[31] = "Id Pregunta: 8406. Examen TIC A2 2010";


//  Id pregunta: 8623 AÃ±o de creación de pregunta: 2011-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes NO es una plataforma de virtualizaci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "Xen";
 choices[32][1] = "Alfresco";
 choices[32][2] = "VMWare";
 choices[32][3] = "Virtuozzo";
 answers[32] = choices[32][1];
 units[32] = "119";
 comments[32] = "Id Pregunta: 8623. Examen TIC A2 2010 interna";


//  Id pregunta: 8773 AÃ±o de creación de pregunta: 2011-01-01
 questions[33]= "34)  Se ha puesto un servicio de DHCP en una subred. &iquest;Es posible que otra subred pueda usar el servicio DHCP y que este servicio asigne direcciones a los clientes de ambas?";
 choices[33]= new Array();
 choices[33][0] = "No, porque solo funciona con broadcast las peticiones.";
 choices[33][1] = "Si, porque las peticiones son unicast y llegar&aacute;n al servidor de DHCP";
 choices[33][2] = "Es posible pero hace falta un DHCP Relay.";
 choices[33][3] = "Si, con solo configurar el servidor DHCP para servir a la otra subred.";
 answers[33] = choices[33][2];
 units[33] = "100";
 comments[33] = "Id Pregunta: 8773. Examen UPM A2 2011";


//  Id pregunta: 8783 AÃ±o de creación de pregunta: 2011-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes sentencias pertenece al lenguaje de definici&oacute;n de datos (LDD) de SQL?";
 choices[34]= new Array();
 choices[34][0] = "ROLLBACK";
 choices[34][1] = "UPDATE";
 choices[34][2] = "GRANT";
 choices[34][3] = "TRUNCATE";
 answers[34] = choices[34][3];
 units[34] = "57, 58";
 comments[34] = "Id Pregunta: 8783. Examen UPM A2 2011";


//  Id pregunta: 9002 AÃ±o de creación de pregunta: 2011-01-01
 questions[35]= "36)  Seg&uacute;n la LOPD &iquest;cu&aacute;l de los siguientes no es un criterio conforme al cu&aacute;l se grad&uacute;e  la cuant&iacute;a de las sanciones?";
 choices[35]= new Array();
 choices[35][0] = "El grado de intencionalidad.";
 choices[35][1] = "El volumen de negocio o actividad del infractor.";
 choices[35][2] = "La vinculaci&oacute;n de la actividad del infractor con la realizaci&oacute;n de tratamientos de datos de car&aacute;cter personal.";
 choices[35][3] = "La acreditaci&oacute;n de que con anterioridad a los hechos constitutivos de infracci&oacute;n la entidad imputada no ten&iacute;a implantados procedimientos adecuados de actuaci&oacute;n en la recogida y tratamiento de los datos de car&aacute;cter personal.";
 answers[35] = choices[35][3];
 units[35] = "29";
 comments[35] = "Id Pregunta: 9002. ";


//  Id pregunta: 9018 AÃ±o de creación de pregunta: 2011-01-01
 questions[36]= "37)  Cuando una l&iacute;nea de transmisi&oacute;n cumple la condici&oacute;n de Heaviside:";
 choices[36]= new Array();
 choices[36][0] = "El retardo es m&iacute;nimo.";
 choices[36][1] = "El retardo es m&aacute;ximo.";
 choices[36][2] = "El retardo es constante.";
 choices[36][3] = "No existe retardo";
 answers[36] = choices[36][2];
 units[36] = "99";
 comments[36] = "Id Pregunta: 9018. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9052 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  LA administraci&oacute;n ha licitado un contrato de servicios, cuyo valor de adjudicaci&oacute;n es de 300.000 euros. &iquest;D&oacute;nde hay que publicar el acuerdo?";
 choices[37]= new Array();
 choices[37][0] = "En el perfil del contratante y en el BOE.";
 choices[37][1] = "En el perfil del contratante en el BOE y en el DOUE";
 choices[37][2] = "En el BOE y en el DOUE";
 choices[37][3] = "En el perfil del contratante &uacute;nicamente.";
 answers[37] = choices[37][1];
 units[37] = "41";
 comments[37] = "Id Pregunta: 9052. ";


//  Id pregunta: 9060 AÃ±o de creación de pregunta: 2011-01-01
 questions[38]= "39)  Respecto a LMDS:";
 choices[38]= new Array();
 choices[38][0] = "Al ser de frecuencias bajas, no tiene problemas con las zonas de sombra.";
 choices[38][1] = "Son redes de lento despliegue";
 choices[38][2] = "Funciona en la banda de los 28 a 31 Ghz y una difusi&oacute;n m&aacute;xima de 7 km";
 choices[38][3] = "Se la conoce como proveedor de servicios sin cable";
 answers[38] = choices[38][2];
 units[38] = "108";
 comments[38] = "Id Pregunta: 9060. NULL";


//  Id pregunta: 9159 AÃ±o de creación de pregunta: 2013-01-01
 questions[39]= "40)  No es una forma de presentar contenidos en un LMS:";
 choices[39]= new Array();
 choices[39][0] = "Estructura lineal";
 choices[39][1] = "Estructura matricial";
 choices[39][2] = "Estructura jer&aacute;rquica";
 choices[39][3] = "Estructura en red";
 answers[39] = choices[39][1];
 units[39] = "66";
 comments[39] = "Id Pregunta: 9159. ";


//  Id pregunta: 9375 AÃ±o de creación de pregunta: 2013-01-01
 questions[40]= "41)  En la Teor&iacute;a de la Decisi&oacute;n Multicreiterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo no es de asignaci&oacute;n de pesos a los criterios:";
 choices[40]= new Array();
 choices[40][0] = "DELPHI";
 choices[40][1] = "Entrop&iacute;a";
 choices[40][2] = "SAATY";
 choices[40][3] = "PROMETHEE";
 answers[40] = choices[40][3];
 units[40] = "34";
 comments[40] = "Id Pregunta: 9375. ";


//  Id pregunta: 9658 AÃ±o de creación de pregunta: 2014-01-01
 questions[41]= "42)  &iquest;Qu&eacute; modelo  de calidad tiene como &aacute;mbito de aplicaci&oacute;n Software y Sistemas?";
 choices[41]= new Array();
 choices[41][0] = "CMMI";
 choices[41][1] = "ISO 9001";
 choices[41][2] = "ISO/IEC 15504 (SPICE) y CMMI";
 choices[41][3] = "Todos los anteriores";
 answers[41] = choices[41][2];
 units[41] = "87";
 comments[41] = "Id Pregunta: 9658. La ISO 9001 tiene un &aacute;mbito gen&eacute;rico, no s&oacute;lo Sotftware y Sistemas";


//  Id pregunta: 9714 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  En las redes RDSI, la UIT ha definido una serie de puntos de referencia que ha denominado";
 choices[42]= new Array();
 choices[42][0] = "A, B, C, D.";
 choices[42][1] = "E, F, G, H.";
 choices[42][2] = "S, T, U, V.";
 choices[42][3] = "W, X, Y, Z.";
 answers[42] = choices[42][2];
 units[42] = "103";
 comments[42] = "Id Pregunta: 9714. Examen TIC-A1 2013";


//  Id pregunta: 9738 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  Existen dos especificaciones complementarias que constituyen la especificaci&oacute;n completa del lenguaje de modelado UML 2.4.1. Estas especificaciones se denominan:";
 choices[43]= new Array();
 choices[43][0] = "Intrastructure e Hiperstructure.";
 choices[43][1] = "Basic y Complex.";
 choices[43][2] = "Infrastructure y Superstructure.";
 choices[43][3] = "Infrastructure y Substructure.";
 answers[43] = choices[43][2];
 units[43] = "82";
 comments[43] = "Id Pregunta: 9738. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9770 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones graves:";
 choices[44]= new Array();
 choices[44][0] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[44][1] = "La falta de menci&oacute;n de la fecha de la &uacute;ltima actualizaci&oacute;n de la informaci&oacute;n.";
 choices[44][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[44][3] = "La ausencia de cita de la fuente.";
 answers[44] = choices[44][0];
 units[44] = "22";
 comments[44] = "Id Pregunta: 9770. ";


//  Id pregunta: 9788 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  PLS es un est&aacute;ndar relacionado con VoiceXML, &iquest;para qu&eacute; se utiliza en concreto?";
 choices[45]= new Array();
 choices[45][0] = "&quot;Decora&quot; las locuciones de forma que se generen de la mejor forma posible; por ejemplo, indicando el tono de una determinada locuci&oacute;n (m&aacute;s alto o m&aacute;s bajo). ";
 choices[45][1] = "Realiza el control de la llamada con VoiceXML. ";
 choices[45][2] = "Define la forma en la que las palabras son pronunciadas. ";
 choices[45][3] = "Define la estructura de las gram&aacute;ticas usadas en el reconocimiento del habla. ";
 answers[45] = choices[45][2];
 units[45] = "94";
 comments[45] = "Id Pregunta: 9788. Examen TIC A2 2013";


//  Id pregunta: 9854 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  En seguridad inform&aacute;tica, cu&aacute;l de los siguientes procesos, puede considerarse un m&eacute;todo de hardening de un sistema: ";
 choices[46]= new Array();
 choices[46][0] = "La reducci&oacute;n de software innecesario en el sistema.";
 choices[46][1] = "La instalaci&oacute;n de software para comprobar el estado de la red.";
 choices[46][2] = "La conexi&oacute;n a sistemas de almacenamiento (SAN o NAS).";
 choices[46][3] = "La aplicaci&oacute;n de bonding (agrupaci&oacute;n o trunking) en las interfaces de red.";
 answers[46] = choices[46][0];
 units[46] = "111";
 comments[46] = "Id Pregunta: 9854. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 9901 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  En relaci&oacute;n a los participantes de la metodolog&iacute;a M&eacute;trica v3, aquellos cuya funci&oacute;n es asesorar en las cuestiones en las que tienen un conocimiento especializado se denominan";
 choices[47]= new Array();
 choices[47][0] = "Consultores.";
 choices[47][1] = "Expertos.";
 choices[47][2] = "Analistas.";
 choices[47][3] = "Jefes de Proyecto.";
 answers[47] = choices[47][0];
 units[47] = "86";
 comments[47] = "Id Pregunta: 9901. TIC A2, Examen 2013";


//  Id pregunta: 9935 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes no es un campo de la cabecera IPv4?";
 choices[48]= new Array();
 choices[48][0] = "IHL.";
 choices[48][1] = "NF.";
 choices[48][2] = "TOS.";
 choices[48][3] = "OPCIONES.";
 answers[48] = choices[48][1];
 units[48] = "100";
 comments[48] = "Id Pregunta: 9935. NULL";


//  Id pregunta: 9961 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes opciones NO es un operador espec&iacute;fico de un sistema o herramienta OLAP?";
 choices[49]= new Array();
 choices[49][0] = "DRILL";
 choices[49][1] = "POLL";
 choices[49][2] = "PIVOT";
 choices[49][3] = "SLICE &amp; DICE";
 answers[49] = choices[49][1];
 units[49] = "68,71";
 comments[49] = "Id Pregunta: 9961. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9971 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  En el &aacute;mbito de SAP ERP, un Centro de Coste o CeCo:";
 choices[50]= new Array();
 choices[50][0] = "Es la unidad organizativa, dentro de una sociedad CO, que representa un emplazamiento claramente delimitado donde se producen costes.";
 choices[50][1] = "Corresponde a una posici&oacute;n en el plan de cuentas relevante para el coste.";
 choices[50][2] = "Es el nivel jer&aacute;rquico m&aacute;s alto en el Sistema SAP.";
 choices[50][3] = "Es una lista de todas las cuentas de mayor utilizadas por una o varias sociedades.";
 answers[50] = choices[50][0];
 units[50] = "65";
 comments[50] = "Id Pregunta: 9971. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9994 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es la herramienta utilizada para organizar reuniones virtuales dentro de la Red SARA?";
 choices[51]= new Array();
 choices[51][0] = "Conect@";
 choices[51][1] = "Re&uacute;nete";
 choices[51][2] = "Acceda en Cloud";
 choices[51][3] = "TelePresence";
 answers[51] = choices[51][1];
 units[51] = "120";
 comments[51] = "Id Pregunta: 9994. NULL";


//  Id pregunta: 10037 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  Con respecto al protocolo DNS. &iquest;Cu&aacute;l de las siguientes opciones NO es una parte de un mensaje DNS?";
 choices[52]= new Array();
 choices[52][0] = "Cabecera.";
 choices[52][1] = "Checksum.";
 choices[52][2] = "Registros de recursos de Respuesta.";
 choices[52][3] = "Registros de recursos de Autoridad.";
 answers[52] = choices[52][1];
 units[52] = "112";
 comments[52] = "Id Pregunta: 10037. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10046 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  El algoritmo PLC (Packet Loss Concealment):";
 choices[53]= new Array();
 choices[53][0] = "Lo utiliza Frame Relay para el reenv&iacute;o de tramas p&eacute;rdidas por la congesti&oacute;n en el sentido de la transmisi&oacute;n.";
 choices[53][1] = "Algoritmo de ocultamiento de p&eacute;rdida de paquetes utilizado por VoIP.";
 choices[53][2] = "Utilizado por TCP para la retransmisi&oacute;n de paquetes despu&eacute;s de una trama NACK (negative acknowledgement).";
 choices[53][3] = "Algoritmo de descarte de paquetes en situaci&oacute;n de congesti&oacute;n en redes Frame Relay.";
 answers[53] = choices[53][1];
 units[53] = "109";
 comments[53] = "Id Pregunta: 10046. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10086 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  &iquest;Qu&eacute; tipo de prototipo es m&aacute;s adecuado para eliminar el problema de la indefinici&oacute;n de requisitos?";
 choices[54]= new Array();
 choices[54][0] = "R&aacute;pido";
 choices[54][1] = "Evolutivo";
 choices[54][2] = "Incremental";
 choices[54][3] = "R&aacute;pido o evolutivo, nunca el incremental";
 answers[54] = choices[54][0];
 units[54] = "76";
 comments[54] = "Id Pregunta: 10086. NULL";


//  Id pregunta: 10098 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l es la diferencia entre una maqueta y un prototipo seg&uacute;n M&eacute;trica v3?";
 choices[55]= new Array();
 choices[55][0] = "Ninguna, son lo mismo seg&uacute;n M&eacute;trica v3.";
 choices[55][1] = "Un prototipo describe parte de la funcionalidad del sistema, una maqueta simula el aspecto visual.";
 choices[55][2] = "Una maqueta describe parte de la funcionalidad del sistema, un prototipo simula el aspecto visual.";
 choices[55][3] = "Una maqueta es un tipo de prototipo evolutivo.";
 answers[55] = choices[55][0];
 units[55] = "78";
 comments[55] = "Id Pregunta: 10098. NULL";


//  Id pregunta: 10191 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  &iquest;Qu&eacute; tratamiento digital de una im&aacute;gen resalta los tonos oscuros?";
 choices[56]= new Array();
 choices[56][0] = "Filtro de mediana";
 choices[56][1] = "Realce logar&iacute;tmico";
 choices[56][2] = "Filtro paso bajo";
 choices[56][3] = "Filtro paso alto";
 answers[56] = choices[56][1];
 units[56] = "93";
 comments[56] = "Id Pregunta: 10191. NULL";


//  Id pregunta: 10274 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre comunicaci&oacute;n entre agentes inteligentes  mediante sistema de pizarra es cierta?";
 choices[57]= new Array();
 choices[57][0] = "Los agentes reciben se&ntilde;ales de la pizarra cuando &eacute;sta se actualiza";
 choices[57][1] = "Cuando un agente puede contribuir a la soluci&oacute;n del problema lo 'escribe' inmediatamente en la pizarra";
 choices[57][2] = "Ambas son ciertas";
 choices[57][3] = "Ninguna es cierta";
 answers[57] = choices[57][3];
 units[57] = "63";
 comments[57] = "Id Pregunta: 10274. NULL";


//  Id pregunta: 10319 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l es la direcci&oacute;n MAC de difusi&oacute;n de red o broadcast que se utiliza en Ethernet (IEEE 802.3)?";
 choices[58]= new Array();
 choices[58][0] = "255.255.255.255";
 choices[58][1] = "FF::FF";
 choices[58][2] = "FF:FF:FF:FF:FF:FF:FF:FF";
 choices[58][3] = "FF:FF:FF:FF:FF:FF";
 answers[58] = choices[58][3];
 units[58] = "101";
 comments[58] = "Id Pregunta: 10319. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10346 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  &iquest;Qu&eacute; nombre recibe la tecnolog&iacute;a de Gesti&oacute;n de derechos digitales creada por la compa&ntilde;&iacute;a Apple?";
 choices[59]= new Array();
 choices[59][0] = "FairPlay";
 choices[59][1] = "Apple Verisign";
 choices[59][2] = "Apple DRM";
 choices[59][3] = "Apple Store DRM";
 answers[59] = choices[59][0];
 units[59] = "37";
 comments[59] = "Id Pregunta: 10346. Se usa desde la tienda online iTunes Store para ser reproducido en iPod e iTunes";


//  Id pregunta: 10357 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  Ordene en sentido cronol&oacute;gico ascendente los siguientes programas europeos relacionados con la administraci&oacute;n electr&oacute;nica:";
 choices[60]= new Array();
 choices[60][0] = "IDA I, IDA II, ISA, IDABC";
 choices[60][1] = "IDA I, IDA II, IDABC, ISA";
 choices[60][2] = "IDA, IDABC I, IDABC II, ISA";
 choices[60][3] = "IDA, ISA, IDABC I, IDABC II";
 answers[60] = choices[60][1];
 units[60] = "40";
 comments[60] = "Id Pregunta: 10357. IDA I (1995-1998), IDA II (1999-2004), IDABC (2005-2009), ISA (2010-2015)";


//  Id pregunta: 10371 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  Se&ntilde;ale cu&aacute;l de los siguientes no puede considerarse un riesgo que puede limitar el &eacute;xito un proyecto de ingenier&iacute;a de software:";
 choices[61]= new Array();
 choices[61][0] = "Excesiva rotaci&oacute;n de personal en la division encargada del desarrollo";
 choices[61][1] = "Al servidor de Eclipse le falta un parche de seguridad y pueden atacarlo";
 choices[61][2] = "El cliente no habla nuestro idioma ni el ingl&eacute;s y tenemos un traductor no muy experto, a menudo hay confusi&oacute;n entre lo que nos pide y lo que entendemos.";
 choices[61][3] = "Se va a usar una tecnolog&iacute;a de desarrollo de la que apenas haya conocimiento y referencia de proyectos exitosos con la misma";
 answers[61] = choices[61][1];
 units[61] = "28";
 comments[61] = "Id Pregunta: 10371. ";


//  Id pregunta: 10437 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  La Ley 23/2006 de 7 de julio modifica el RDL 1/1996 de 12 de abril por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual con motivo de ";
 choices[62]= new Array();
 choices[62][0] = "a trasposici&oacute;n de la Directiva 2001/29/CE.";
 choices[62][1] = "la entrada en vigor de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n. ";
 choices[62][2] = "la regulaci&oacute;n de un canon digital en los programas de ordenador.";
 choices[62][3] = "el establecimiento de la prohibici&oacute;n de hacer copias privadas.";
 answers[62] = choices[62][0];
 units[62] = "36";
 comments[62] = "Id Pregunta: 10437. Examen TIC A1 2013";


//  Id pregunta: 10552 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  La evaluaci&oacute;n del riesgo es:";
 choices[63]= new Array();
 choices[63][0] = "subjetiva";
 choices[63][1] = "objetiva";
 choices[63][2] = "Matem&aacute;tica";
 choices[63][3] = "Estad&iacute;stica";
 answers[63] = choices[63][0];
 units[63] = "31, 32, 33";
 comments[63] = "Id Pregunta: 10552. Todas las metodolog&iacute;as de evaluaci&oacute;n de riesgos se basan en juicios subjetivos en alg&uacute;n momento en el proceso (por ej, para asignar ponderaciones a los distintos par&aacute;metros)";


//  Id pregunta: 10591 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  Son europeos:";
 choices[64]= new Array();
 choices[64][0] = "El cuerpo de reguladores de comunicaciones electr&oacute;nicas BEREC";
 choices[64][1] = "El programa para el impulso de la Sociedad de la Informaci&oacute;n IDESI";
 choices[64][2] = "El sistema inform&aacute;tico JOIN para el intercambio de identidades electr&oacute;nicas";
 choices[64][3] = "La red SARA";
 answers[64] = choices[64][0];
 units[64] = "30";
 comments[64] = "Id Pregunta: 10591. ";


//  Id pregunta: 10605 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  Para que un organismo utilice la pasarela de pagos de la AEAT:";
 choices[65]= new Array();
 choices[65][0] = "Necesita un certificado de sede electr&oacute;nica.";
 choices[65][1] = "Debe implementar una interfaz REST.";
 choices[65][2] = "Debe poseer un certificado de persona f&iacute;sica, jur&iacute;dica o de componente.";
 choices[65][3] = "La DTIC recomienda que cada organismo implemente su propia pasarela de pagos.";
 answers[65] = choices[65][2];
 units[65] = "70";
 comments[65] = "Id Pregunta: 10605. ";


//  Id pregunta: 10614 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  Elija la opci&oacute;n correcta:";
 choices[66]= new Array();
 choices[66][0] = "La copia de seguridad incremental hace una copia de seguridad de todos los archivos.";
 choices[66][1] = "La copia de seguridad diferencial hace una copia de seguridad de todos los archivos.";
 choices[66][2] = "La copia de seguridad diferencial requiere m&aacute;s espacio en cinta y tiempo que la copia de seguridad incremental.";
 choices[66][3] = "La copia de seguridad incremental hace una copia de seguridad solo de los archivos que han cambiado desde la &uacute;ltima copia de seguridad diferencial.";
 answers[66] = choices[66][2];
 units[66] = "48";
 comments[66] = "Id Pregunta: 10614. ";


//  Id pregunta: 10615 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Marque la herramienta que no es una soluci&oacute;n ORM (Object-Relational Mapping):";
 choices[67]= new Array();
 choices[67][0] = "IBATIS";
 choices[67][1] = "Hibernate";
 choices[67][2] = "CODD";
 choices[67][3] = "Todas lo son.";
 answers[67] = choices[67][2];
 units[67] = "58";
 comments[67] = "Id Pregunta: 10615. ";


//  Id pregunta: 10619 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Se&ntilde;ale cu&aacute;l de estas aplicaciones puede implementarse con el entorno .NET:";
 choices[68]= new Array();
 choices[68][0] = "Aplicaci&oacute;n de escritorio escrita en C++.";
 choices[68][1] = "Sitio web din&aacute;mico.";
 choices[68][2] = "Una plataforma de e-learning.";
 choices[68][3] = "Todas las anteriores.";
 answers[68] = choices[68][3];
 units[68] = "59";
 comments[68] = "Id Pregunta: 10619. ";


//  Id pregunta: 10644 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  &iquest;Cu&aacute;les son los dos modelos de autoevaluaci&oacute;n seg&uacute;n ISO 9004?";
 choices[69]= new Array();
 choices[69][0] = "El de los Criterios Operativos y el de los Criterios Aumentados.";
 choices[69][1] = "El de Estimulaci&oacute;n y el de Mantenimiento.";
 choices[69][2] = "El de Aproximaci&oacute;n Formal y el de Aproximaci&oacute;n Reactiva.";
 choices[69][3] = "El de los Elementos Clave y el de los Elementos Detallados";
 answers[69] = choices[69][3];
 units[69] = "92";
 comments[69] = "Id Pregunta: 10644. ";


//  Id pregunta: 10653 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  La cabecera de autenticaci&oacute;n (AH) de IPSec:";
 choices[70]= new Array();
 choices[70][0] = "Proporciona integridad, no repudio en origen y protecci&oacute;n contra replay.";
 choices[70][1] = "Proporciona confidencialidad, autenticidad de origen e integridad.";
 choices[70][2] = "Crea la asociaci&oacute;n de seguridad.";
 choices[70][3] = "Ninguna de las anteriores.";
 answers[70] = choices[70][0];
 units[70] = "111";
 comments[70] = "Id Pregunta: 10653. ";


//  Id pregunta: 10691 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  La Ley 39/2015 impone:";
 choices[71]= new Array();
 choices[71][0] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con un registro u otro sistema equivalente";
 choices[71][1] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con una red para el intercambio de informaci&oacute;n entre las Administraciones P&uacute;blicas.";
 choices[71][2] = "Ambas";
 choices[71][3] = "Ninguna de las anteriores.";
 answers[71] = choices[71][0];
 units[71] = "30";
 comments[71] = "Id Pregunta: 10691. ";


//  Id pregunta: 10775 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Se&ntilde;ale qu&eacute; medida es necesario adoptar en ficheros y tratamientos automatizados para establecer el nivel de seguridad medio seg&uacute;n se establece en el Real Decreto 1720/2007:";
 choices[72]= new Array();
 choices[72][0] = "Control de acceso: Los usuarios tendr&aacute;n acceso &uacute;nicamente a aquellos recursos que precisen para el desarrollo de sus funciones.";
 choices[72][1] = "Identificaci&oacute;n y autenticaci&oacute;n: El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[72][2] = "Telecomunicaciones: La transmisi&oacute;n de datos de car&aacute;cter personal a trav&eacute;s de redes p&uacute;blicas o redes inal&aacute;mbricas de comunicaciones electr&oacute;nicas se realizar&aacute; cifrando dichos datos o bien utilizando cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros.";
 choices[72][3] = "Registro de accesos: De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado.";
 answers[72] = choices[72][1];
 units[72] = "29";
 comments[72] = "Id Pregunta: 10775. Examen GSI 2014";


//  Id pregunta: 10791 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes comandos Unix impide que el archivo de nombre &quot;miarchivo&quot; sea modificado y ejecutado por el grupo al que pertenece dicho archivo?";
 choices[73]= new Array();
 choices[73][0] = "chmod 766 miarchivo";
 choices[73][1] = "chmod a+xw miarchivo";
 choices[73][2] = "chmod 644 miarchivo";
 choices[73][3] = "chmod u=rwx go=wx miarchivo";
 answers[73] = choices[73][2];
 units[73] = "53, 54";
 comments[73] = "Id Pregunta: 10791. Examen GSI 2014";


//  Id pregunta: 10799 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  Se&ntilde;ale la respuesta INCORRECTA relativa a una arquitectura basada en servicios web:";
 choices[74]= new Array();
 choices[74][0] = "WS-Security permite crear servicios web seguros.";
 choices[74][1] = "SOAP es un protocolo usado para el intercambio de informaci&oacute;n en un entorno descentralizado y distribuido basado en XML a trav&eacute;s de servicios web.";
 choices[74][2] = "AXIS2 es un motor de servicios web desarrollado por Apache. Una de las implementaciones disponible est&aacute; realizada en lenguaje C.";
 choices[74][3] = "Los lenguajes de desarrollo distintos a Java poseen dificultad para integrarse con los Servicios Web.";
 answers[74] = choices[74][3];
 units[74] = "51";
 comments[74] = "Id Pregunta: 10799. Examen GSI 2014";


//  Id pregunta: 10801 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Una red TCP usa el protocolo de ventana deslizante como mecanismo de control de flujo. Supongamos que se establece el tama&ntilde;o de la ventana en 4 y los paquetes se numeran del 1 en adelante. Con estas condiciones, el emisor podr&aacute; enviar al receptor el paquete n&uacute;mero 5:";
 choices[75]= new Array();
 choices[75][0] = "&Uacute;nicamente cuando reciba el ACK del paquete 4.";
 choices[75][1] = "Cuando haya recibido al menos dos ACK.";
 choices[75][2] = "Cuando reciba cualquier ACK.";
 choices[75][3] = "Cuando se cumpla el timeout de env&iacute;o del paquete 1.";
 answers[75] = choices[75][2];
 units[75] = "100";
 comments[75] = "Id Pregunta: 10801. Examen GSI 2014";


//  Id pregunta: 10812 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes licencias NO se considera copyleft robusto?";
 choices[76]= new Array();
 choices[76][0] = "EUPL";
 choices[76][1] = "GPL";
 choices[76][2] = "LGPL";
 choices[76][3] = "BSD";
 answers[76] = choices[76][3];
 units[76] = "61";
 comments[76] = "Id Pregunta: 10812. Examen GSI 2014";


//  Id pregunta: 10817 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Una pr&aacute;ctica frecuente asociada al modelo de Proceso Unificado de Desarrollo es el &quot;timeboxing&quot;, &iquest;en qu&eacute; consiste?";
 choices[77]= new Array();
 choices[77][0] = "Enfoque para identificar casos de uso y determinar el nivel de granularidad apropiado.";
 choices[77][1] = "Modelo de planificaci&oacute;n adaptativa para ganar tiempo.";
 choices[77][2] = "Asignaci&oacute;n de un periodo de tiempo fijo para la ejecuci&oacute;n de una iteraci&oacute;n.";
 choices[77][3] = "Utilizar casos de usos temporales para captar requisitos funcionales.";
 answers[77] = choices[77][2];
 units[77] = "79";
 comments[77] = "Id Pregunta: 10817. Examen GSI 2014";


//  Id pregunta: 10833 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  En la teor&iacute;a de bases de datos relacionales, cuanto m&aacute;s alta sea la forma normal aplicable a una tabla:";
 choices[78]= new Array();
 choices[78][0] = "Menor ser&aacute; la cohesi&oacute;n relacional.";
 choices[78][1] = "Menor ser&aacute; el acoplamiento relacional.";
 choices[78][2] = "Menos vulnerable ser&aacute; a inconsistencias y anomal&iacute;as.";
 choices[78][3] = "M&aacute;s vulnerable ser&aacute; a inconsistencias y anomal&iacute;as, pero ser&aacute; m&aacute;s eficiente.";
 answers[78] = choices[78][2];
 units[78] = "80";
 comments[78] = "Id Pregunta: 10833. Examen GSI 2014";


//  Id pregunta: 10908 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Seg&uacute;n la norma de la ITU-T asociada a la recomendaci&oacute;n G.726, de Modulaci&oacute;n por impulsos codificados diferencial adaptativa, indicar la respuesta correcta que se corresponde con su bit rate (kbit/s):";
 choices[79]= new Array();
 choices[79][0] = "16, 24, 32 &oacute; 40";
 choices[79][1] = "6, 12, 24 &oacute; 48";
 choices[79][2] = "4, 8, 16 &oacute; 40";
 choices[79][3] = "8, 16, 32 &oacute; 64";
 answers[79] = choices[79][0];
 units[79] = "117";
 comments[79] = "Id Pregunta: 10908. Examen GSI 2014";


//  Id pregunta: 10918 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Qu&eacute; caracter&iacute;sticas de seguridad presenta SNMPv3, tal y como se mencionan en la RFC 3418 (MIB for the SNMP Protocol)?";
 choices[80]= new Array();
 choices[80][0] = "Se recomienda que los implementadores usen el modelo de seguridad basado en usuario y el control de acceso basado en vistas.";
 choices[80][1] = "Se obliga a que los implementadores usen el modelo basado en usuario y el control de acceso basado en vistas.";
 choices[80][2] = "En dicha RFC no se menciona ning&uacute;n elemento de seguridad.";
 choices[80][3] = "En temas de seguridad, s&oacute;lo hace menci&oacute;n al uso obligatorio del algoritmo de encriptaci&oacute;n CBC (Cipher Block Chaining) de DES, conocido tambi&eacute;n por DES-56.";
 answers[80] = choices[80][0];
 units[80] = "104";
 comments[80] = "Id Pregunta: 10918. Examen GSI 2014";


//  Id pregunta: 10944 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Respecto a los diagramas de flujos de datos, se&ntilde;ale la respuesta correcta:";
 choices[81]= new Array();
 choices[81][0] = "Proporcionan un mecanismo para el modelado funcional, no siendo necesario considerar el flujo de informaci&oacute;n.";
 choices[81][1] = "Por s&iacute; solos, son una herramienta suficiente para describir los requisitos del software.";
 choices[81][2] = "En los sucesivos niveles de detalle es necesario mantener la continuidad del flujo de informaci&oacute;n.";
 choices[81][3] = "No son una herramienta v&aacute;lida para sistemas de tiempo real.";
 answers[81] = choices[81][2];
 units[81] = "81";
 comments[81] = "Id Pregunta: 10944. TIC A1 AGE 2014";


//  Id pregunta: 10986 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  El 10 de enero de 2013 se public&oacute; una vulnerabilidad de d&iacute;a cero en Java 7 Update 10 y versiones anteriores de Java 7 que permit&iacute;a a un atacante escalar los privilegios de ejecuci&oacute;n de un applet. Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[82]= new Array();
 choices[82][0] = "Las vulnerabilidades de seguridad de Java han llevado a establecer un periodo mensual, los terceros viernes de cada mes, para los Oracle Java SE Critical Patch Updates.";
 choices[82][1] = "Las vulnerabilidades de seguridad de Java han llevado a Oracle a recomendar y facilitar la desactivaci&oacute;n de Java a partir de la versi&oacute;n 7 Update 10.";
 choices[82][2] = "Las vulnerabilidades de seguridad de Java han provocado que Oracle recomiende la desinstalaci&oacute;n de Java 6 de todos los equipos.";
 choices[82][3] = "Las vulnerabilidades de seguridad de Java han provocado que sea obligatorio firmar con un certificado reconocido los applets a partir de Java SE 7u21.";
 answers[82] = choices[82][0];
 units[82] = "60";
 comments[82] = "Id Pregunta: 10986. TIC A1 AGE 2014";


//  Id pregunta: 11009 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  El 3 de Noviembre de 2014 se ha liberado una nueva versi&oacute;n del sistema operativo Android. Se denomina:";
 choices[83]= new Array();
 choices[83][0] = "Android 4.3 Jelly Bean";
 choices[83][1] = "Android 5.0 Lollipop.";
 choices[83][2] = "Android 6.0 Marshmallow.";
 choices[83][3] = "Android 4.4 KitKat.";
 answers[83] = choices[83][1];
 units[83] = "52";
 comments[83] = "Id Pregunta: 11009. TIC A1 AGE 2014";


//  Id pregunta: 11024 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de las siguientes es un principio de Dise&ntilde;o universal?";
 choices[84]= new Array();
 choices[84][0] = "Cumplimiento de las WCAG 1.0";
 choices[84][1] = "Cumplimiento de las WCAG 2.0";
 choices[84][2] = "Escaso esfuerzo f&iacute;sico";
 choices[84][3] = "Ensayo prueba-error";
 answers[84] = choices[84][2];
 units[84] = "39";
 comments[84] = "Id Pregunta: 11024. ";


//  Id pregunta: 11079 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  El objetivo del proceso de Gesti&oacute;n de Configuraci&oacute;n y Activos del Servicio es...";
 choices[85]= new Array();
 choices[85][0] = "Contabilizar todos los activos financieros de la organizaci&oacute;n";
 choices[85][1] = "Proveer de un modelo l&oacute;gico de infraestructura de TI, correlacionando losServicios TI y diferentes componentes IT necesarios para la entrega de los servicios";
 choices[85][2] = "Construir modelos de servicios para justificar la implementaci&oacute;n de ITIL";
 choices[85][3] = "Implementar ITIL a trav&eacute;s de la organizaci&oacute;n";
 answers[85] = choices[85][1];
 units[85] = "98";
 comments[85] = "Id Pregunta: 11079. ";


//  Id pregunta: 11089 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Supongamos que sustituimos un procesador utilizado como servidor web por otro 10 veces m&aacute;s r&aacute;pido. Si el procesador inicial est&aacute; ocupado con c&aacute;lculos el 40% del tiempo y esperando por E/S el 60%,  &iquest;qu&eacute; incremento global de velocidad se obtiene con la mejora?";
 choices[86]= new Array();
 choices[86][0] = "1.56";
 choices[86][1] = "10";
 choices[86][2] = "4";
 choices[86][3] = "6";
 answers[86] = choices[86][0];
 units[86] = "45";
 comments[86] = "Id Pregunta: 11089. Ley de Amdahl";


//  Id pregunta: 11125 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[87]= new Array();
 choices[87][0] = "CEN";
 choices[87][1] = "UNE";
 choices[87][2] = "CENELEC";
 choices[87][3] = "ETSI";
 answers[87] = choices[87][1];
 units[87] = "42";
 comments[87] = "Id Pregunta: 11125. ";


//  Id pregunta: 11152 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad aplicable a los prestadores de servicios de confianza TSP?";
 choices[88]= new Array();
 choices[88][0] = "Adoptar&aacute;n las medidas t&eacute;cnicas y organizativas adecuadas para gestionar los riesgos para la seguridad de los servicios de confianza que prestan.";
 choices[88][1] = "En un plazo m&aacute;ximo de 48 horas tras tener conocimiento de ellas, notificar&aacute;n al Ministerio de Industria como organismo supervisor y al organismo nacional competente en materia de seguridad de la informaci&oacute;n, o la autoridad de protecci&oacute;n de datos, cualquier violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad que tenga un impacto significativo en el servicio de confianza prestado o en los datos personales correspondientes.";
 choices[88][2] = "Cuando la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad puedan atentar contra una persona f&iacute;sica o jur&iacute;dica a la que se ha prestado el servicio de confianza, el TSP notificar&aacute; tambi&eacute;n a la persona, en un plazo de 72 horas, la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad.";
 choices[88][3] = "Si una violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad afecta a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto &uacute;nicamente a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros de que se trate.";
 answers[88] = choices[88][0];
 units[88] = "74";
 comments[88] = "Id Pregunta: 11152. ";


//  Id pregunta: 11178 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes componentes es de nivel 2?";
 choices[89]= new Array();
 choices[89][0] = "Repetidores";
 choices[89][1] = "Puentes";
 choices[89][2] = "Enrutadores";
 choices[89][3] = "Concentradores";
 answers[89] = choices[89][1];
 units[89] = "102";
 comments[89] = "Id Pregunta: 11178. ";


//  Id pregunta: 11232 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  SAAJ son las siglas de un API de Java que significa";
 choices[90]= new Array();
 choices[90][0] = "Service with Attachments API for Java.";
 choices[90][1] = "SOAP without Attachments API for Java.";
 choices[90][2] = "SOAP with Attachments API for Java.";
 choices[90][3] = "El acr&oacute;nimo est&aacute; invertido, realmente es Java Authentication and Authorization Service (JAAS).";
 answers[90] = choices[90][2];
 units[90] = "116";
 comments[90] = "Id Pregunta: 11232. ";


//  Id pregunta: 11366 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n ITIL v3, &iquest;para qu&eacute; se utiliza el modelo RACI?";
 choices[91]= new Array();
 choices[91][0] = "Documentar los roles y las responsabilidades de los interesados en un proceso o actividad";
 choices[91][1] = "Definir los requisitos para un nuevo servicio o un proceso";
 choices[91][2] = "Analizar el impacto de una incidencia en el negocio";
 choices[91][3] = "Crear un cuadro de mando que muestra el estado global de la gesti&oacute;n de servicios";
 answers[91] = choices[91][0];
 units[91] = "98";
 comments[91] = "Id Pregunta: 11366. ";


//  Id pregunta: 11448 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la Ley 9/2014, si el MINETUR emite un informe negativo de una planificaci&oacute;n urbana o territorial, se podr&aacute; alegar:";
 choices[92]= new Array();
 choices[92][0] = "En el plazo m&aacute;ximo de tres meses.";
 choices[92][1] = "Nunca, ya que el informe emitido por MINETUR es negativo.";
 choices[92][2] = "En el plazo m&aacute;ximo de tres meses siempre y cuando el informe negativo permita modificar el informe.";
 choices[92][3] = "En el plazo m&aacute;ximo de un mes.";
 answers[92] = choices[92][3];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11448. ";


//  Id pregunta: 11544 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n el modelo de McCall de calidad, &iquest;Cu&aacute;l de los siguientes factores NO hace referencia a la facilidad de conversi&oacute;n del software?";
 choices[93]= new Array();
 choices[93][0] = "Interoperabilidad";
 choices[93][1] = "Reusabilidad";
 choices[93][2] = "Flexibilidad";
 choices[93][3] = "Portabilidad";
 answers[93] = choices[93][2];
 units[93] = "88";
 comments[93] = "Id Pregunta: 11544. NULL";


//  Id pregunta: 11573 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Se&ntilde;ale la respuesta incorrecta sobre ADSL 2";
 choices[94]= new Array();
 choices[94][0] = "Emplea un ancho de banda mayor que el ADSL original";
 choices[94][1] = "Puede emplear varias l&iacute;neas telef&oacute;nicas para un &uacute;nica comunicaci&oacute;n";
 choices[94][2] = "Est&aacute; basado en la tecnolog&iacute;a STTH";
 choices[94][3] = "Puede emplear el ancho de banda para telefon&iacute;a obteniendo un amayor velocidad de transmisi&oacute;n de datos.";
 answers[94] = choices[94][2];
 units[94] = "107";
 comments[94] = "Id Pregunta: 11573. NULL";


//  Id pregunta: 11576 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Indique la respuesta FALSA sobre la tecnolog&iacute;a HSDPA.";
 choices[95]= new Array();
 choices[95][0] = "Utiliza t&eacute;cnicas de redundancia incremental durante la transmisi&oacute;n de tramas.";
 choices[95][1] = "Incorpora una mejora del enlace ascendente de UMTS de manera que permite disponer de una nueva portadora a 384 Kbps.";
 choices[95][2] = "Utiliza FAST PACKET SCHEDULING, con el cual las estaci&oacute;n base decide a qu&eacute; usuarios se les enviar&aacute; datso en el siguiente marco de 4 ms.";
 choices[95][3] = "Mantiene la compatibilidad en sentido inverso con W-CDMA.";
 answers[95] = choices[95][2];
 units[95] = "108";
 comments[95] = "Id Pregunta: 11576. NULL";


//  Id pregunta: 11623 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En HTML5, para representar la leyenda de una figura se hace uso de la etiqueta:";
 choices[96]= new Array();
 choices[96][0] = "&lt;figure&gt;";
 choices[96][1] = "&lt;figcaption&gt;";
 choices[96][2] = "&lt;footer&gt;";
 choices[96][3] = "&lt;figlegend&gt;";
 answers[96] = choices[96][1];
 units[96] = "69";
 comments[96] = "Id Pregunta: 11623. ";


//  Id pregunta: 11636 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n M&eacute;trica v3, el an&aacute;lisis coste/beneficio es una:";
 choices[97]= new Array();
 choices[97][0] = "Pr&aacute;ctica";
 choices[97][1] = "T&eacute;cnica de desarrollo";
 choices[97][2] = "T&eacute;cnica de gesti&oacute;n de proyectos";
 choices[97][3] = "Ninguna de las anteriores es correcta";
 answers[97] = choices[97][1];
 units[97] = "86";
 comments[97] = "Id Pregunta: 11636. ";


//  Id pregunta: 11669 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Con respecto a WCF, se&ntilde;ale la incorrecta:";
 choices[98]= new Array();
 choices[98][0] = "Los servicios WCF pueden ejecutarse sobre TCP.";
 choices[98][1] = "WCF son las siglas de Windows Communication Foundation.";
 choices[98][2] = "WCF usa siempre SOAP.";
 choices[98][3] = "Las tres anteriores son ciertas.";
 answers[98] = choices[98][2];
 units[98] = "115";
 comments[98] = "Id Pregunta: 11669. ";


//  Id pregunta: 11720 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)   El n&uacute;mero binario 11110011 puede expresarse en hexadecimal como:";
 choices[99]= new Array();
 choices[99][0] = "A9";
 choices[99][1] = "F3";
 choices[99][2] = "0C";
 choices[99][3] = "FC";
 answers[99] = choices[99][1];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11720. NULL";


