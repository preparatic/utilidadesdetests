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

//  Id pregunta: 9050 AÃ±o de creación de pregunta: 2013-01-01
 questions[0]= "1)  Seg&uacute;n el RD Legislativo de contratos del sector p&uacute;blico:";
 choices[0]= new Array();
 choices[0][0] = "La garant&iacute;a provisional es obligatoria.";
 choices[0][1] = "La garant&iacute;a definitiva ser&aacute; un 5% del valor presupuestado del contrato.";
 choices[0][2] = "Todas las cuant&iacute;as de las garant&iacute;as ir&aacute;n adecuadamente motivadas.";
 choices[0][3] = "Ninguna de las anteriores";
 answers[0] = choices[0][3];
 units[0] = "41";
 comments[0] = "Id Pregunta: 9050. La garant&iacute;a provisional es potestativa. La garant&iacute;a definitiva es de un 5 por 100 del importe de adjudicaci&oacute;n. La garant&iacute;a definitiva no requiere motivaci&oacute;n.";


//  Id pregunta: 9070 AÃ±o de creación de pregunta: 2013-01-01
 questions[1]= "2)  &iquest;Cu&aacute;ntas gu&iacute;as de accesibilidad del WAI existen actualmente (abril de 2013)?";
 choices[1]= new Array();
 choices[1][0] = "Tres: ATAG, WCAG y UUAG. ";
 choices[1][1] = "Seis: ATAG, WCAG, UAAG, XAG, FCAG y WAI-RIA. ";
 choices[1][2] = "Cuatro: ATAG, WCAG, UAAG y XAG. ";
 choices[1][3] = "Cinco: ATAG, WCAG, UAAG, XAG y WAI-RIA. ";
 answers[1] = choices[1][3];
 units[1] = "39";
 comments[1] = "Id Pregunta: 9070. ";


//  Id pregunta: 9071 AÃ±o de creación de pregunta: 2013-01-01
 questions[2]= "3)  Se&ntilde;ale la afirmaci&oacute;n FALSA:";
 choices[2]= new Array();
 choices[2][0] = "El acr&oacute;nimo XAG se refiere a XML Accesibility Guidelines. ";
 choices[2][1] = "En las normas WCAG 2.0, el nivel se otorga a nivel de procesos y subprocesos. ";
 choices[2][2] = "El W3C publica gram&aacute;ticas HTML que deben satisfacerse para lograr el nivel AA en las normas WCAG 2.0. ";
 choices[2][3] = "WAI-ARIA es un acr&oacute;nimo que significa Web Accesibility Initiative - Accesible Rich Internet Applications. ";
 answers[2] = choices[2][1];
 units[2] = "39";
 comments[2] = "Id Pregunta: 9071. ";


//  Id pregunta: 9080 AÃ±o de creación de pregunta: 2013-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l es el est&aacute;ndar PKCS que fue la base para el est&aacute;ndar S/MIME?";
 choices[3]= new Array();
 choices[3][0] = "PKCS#1";
 choices[3][1] = "PKCS#6";
 choices[3][2] = "PKCS#7";
 choices[3][3] = "PKCS#8";
 answers[3] = choices[3][3];
 units[3] = "111";
 comments[3] = "Id Pregunta: 9080. NULL";


//  Id pregunta: 9081 AÃ±o de creación de pregunta: 2013-01-01
 questions[4]= "5)  Indique cu&aacute;l es el n&uacute;mero de protocolo para IPv6";
 choices[4]= new Array();
 choices[4][0] = "17";
 choices[4][1] = "41";
 choices[4][2] = "47";
 choices[4][3] = "50";
 answers[4] = choices[4][1];
 units[4] = "111";
 comments[4] = "Id Pregunta: 9081. Consultar en wikipedia List_of_IP_protocol_numbers";


//  Id pregunta: 9083 AÃ±o de creación de pregunta: 2013-01-01
 questions[5]= "6)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale la afirmaci&oacute;n FALSA en relaci&oacute;n a la Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[5]= new Array();
 choices[5][0] = "Es fundamental que la alta direcci&oacute;n tome parte activa en la decisi&oacute;n del PSI para garantizar su &eacute;xito";
 choices[5][1] = "En cualquier caso, como paso previo para detectar aspectos importantes que puedan afectar a la organizaci&oacute;n, es necesario investigar sus puntos fuertes, &aacute;reas de mejora, riesgos y amenazas posibles y hacer un diagn&oacute;stico de los mismos.";
 choices[5][2] = "Dentro del Plan de Acci&oacute;n se incluye un calendario de proyectos, con posibles alternativas, y una estimaci&oacute;n de recursos, cuyo detalle ser&aacute; mayor para los m&aacute;s inmediatos.";
 choices[5][3] = "La elaboraci&oacute;n de un nuevo Plan de Sistemas de Informaci&oacute;n debe partir de cero, y no tener en cuenta las planificaciones estrat&eacute;gicas realizadas en periodos anteriores";
 answers[5] = choices[5][3];
 units[5] = "77";
 comments[5] = "Id Pregunta: 9083. ";


//  Id pregunta: 9092 AÃ±o de creación de pregunta: 2013-01-01
 questions[6]= "7)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[6]= new Array();
 choices[6][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[6][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[6][2] = "Toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[6][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[6] = choices[6][2];
 units[6] = "36";
 comments[6] = "Id Pregunta: 9092. ";


//  Id pregunta: 9101 AÃ±o de creación de pregunta: 2013-01-01
 questions[7]= "8)  En el lenguaje ODRL, &iquest;c&oacute;mo se identifica de forma &uacute;nica el contenido digital a proteger?";
 choices[7]= new Array();
 choices[7][0] = "Mediante el elemento Assets.";
 choices[7][1] = "Mediante el elemento Permission.";
 choices[7][2] = "Mediante el elemento Constraints.";
 choices[7][3] = "Todas son falsas.";
 answers[7] = choices[7][0];
 units[7] = "37";
 comments[7] = "Id Pregunta: 9101. ";


//  Id pregunta: 9114 AÃ±o de creación de pregunta: 2013-01-01
 questions[8]= "9)  &iquest;Qu&eacute; se entiende como flujo de instrucciones?";
 choices[8]= new Array();
 choices[8][0] = "Conjunto de instrucciones en paralelo que son ejecutadas por varios procesadores.";
 choices[8][1] = "Conjunto de instrucciones secuenciales que son ejecutadas entre varios procesadores";
 choices[8][2] = "Flujo secuencial de instrucciones requeridas por el flujo de datos";
 choices[8][3] = "Conjunto de instrucciones secuenciales ejecutadas por un &uacute;nico procesador.";
 answers[8] = choices[8][3];
 units[8] = "45";
 comments[8] = "Id Pregunta: 9114. ";


//  Id pregunta: 9117 AÃ±o de creación de pregunta: 2013-01-01
 questions[9]= "10)  &iquest;C&oacute;mo es el procesamiento en un sistema SIMD?";
 choices[9]= new Array();
 choices[9][0] = "As&iacute;ncrono";
 choices[9][1] = "Secuencial";
 choices[9][2] = "S&iacute;ncrono";
 choices[9][3] = "Ninguna respuesta es correcta";
 answers[9] = choices[9][2];
 units[9] = "45";
 comments[9] = "Id Pregunta: 9117. ";


//  Id pregunta: 9123 AÃ±o de creación de pregunta: 2013-01-01
 questions[10]= "11)  &iquest;C&oacute;mo se puede enmarcar el proyecto SETIHome de investigaci&oacute;n de vida extraterrestre?";
 choices[10]= new Array();
 choices[10][0] = "Como una soluci&oacute;n de web 2.0";
 choices[10][1] = "Como un ejemplo pr&aacute;ctico de computaci&oacute;n Grid";
 choices[10][2] = "Una soluci&oacute;n basada en tecnolog&iacute;a Oracle.";
 choices[10][3] = "Ninguna respuesta es correcta.";
 answers[10] = choices[10][1];
 units[10] = "45";
 comments[10] = "Id Pregunta: 9123. ";


//  Id pregunta: 9125 AÃ±o de creación de pregunta: 2013-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[11]= new Array();
 choices[11][0] = "ISA";
 choices[11][1] = "HTI";
 choices[11][2] = "PCI";
 choices[11][3] = "AGP";
 answers[11] = choices[11][1];
 units[11] = "47";
 comments[11] = "Id Pregunta: 9125. Examen TIC-A1 2011";


//  Id pregunta: 9126 AÃ±o de creación de pregunta: 2013-01-01
 questions[12]= "13)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores";
 choices[12]= new Array();
 choices[12][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga";
 choices[12][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[12][2] = "El balanceo de carga solo puede implementarse por software";
 choices[12][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos";
 answers[12] = choices[12][2];
 units[12] = "45";
 comments[12] = "Id Pregunta: 9126. Examen TIC-A1 2011";


//  Id pregunta: 9129 AÃ±o de creación de pregunta: 2013-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es Parallel Sysplex?";
 choices[13]= new Array();
 choices[13][0] = "La soluci&oacute;n de clustering de IBM para z/OS";
 choices[13][1] = "Un tipo de registro l&oacute;gico";
 choices[13][2] = "Una aplicaci&oacute;n que permite conocer el estado de procesos de un sistema operativo";
 choices[13][3] = "Una herramienta de virtualizaci&oacute;n";
 answers[13] = choices[13][0];
 units[13] = "46";
 comments[13] = "Id Pregunta: 9129. ";


//  Id pregunta: 9147 AÃ±o de creación de pregunta: 2013-01-01
 questions[14]= "15)  &iquest;Por qu&eacute; la memorias flash de tipo es mucho m&aacute;s r&aacute;pida que las EEPROM convencionales?";
 choices[14]= new Array();
 choices[14][0] = "Es falso. Las memorias EEPROM convencionales son mucho m&aacute;s r&aacute;pidas";
 choices[14][1] = "Se escriben bloques enteros para agilizar el proceso";
 choices[14][2] = "Para el borrado, se limpian bloques enteros para agilizar el proceso, ya que es la parte m&aacute;s lenta del proceso.";
 choices[14][3] = "Borran bit a bit.";
 answers[14] = choices[14][2];
 units[14] = "47";
 comments[14] = "Id Pregunta: 9147. ";


//  Id pregunta: 9148 AÃ±o de creación de pregunta: 2013-01-01
 questions[15]= "16)  &iquest;En qu&eacute; se diferencia la memoria flash de tipo NOR y la de tipo NAND?";
 choices[15]= new Array();
 choices[15][0] = "La de NAND usa un t&uacute;nel de inyecci&oacute;n para la escritura y para el borrado un t&uacute;nel de &ldquo;soltado&rdquo;";
 choices[15][1] = "Tienen un coste bastante inferior.";
 choices[15][2] = "S&oacute;lo permiten acceso secuencial (m&aacute;s orientado a dispositivos de almacenamiento masivo) frente a las memorias flash basadas en NOR que permiten lectura de acceso aleatorio.";
 choices[15][3] = "Todas son correctas.";
 answers[15] = choices[15][3];
 units[15] = "47";
 comments[15] = "Id Pregunta: 9148. ";


//  Id pregunta: 9152 AÃ±o de creación de pregunta: 2013-01-01
 questions[16]= "17)  Respecto a los LMS, indique la respuesta FALSA: ";
 choices[16]= new Array();
 choices[16][0] = "Permite el an&aacute;lisis de los resultados de la formaci&oacute;n";
 choices[16][1] = "Incluye funciones de gesti&oacute;n de procesos de creaci&oacute;n de contenido";
 choices[16][2] = "Permite el intercambio de datos entre profesores y alumnos";
 choices[16][3] = "Est&aacute; dedicado a la difusi&oacute;n de los contenidos docentes";
 answers[16] = choices[16][1];
 units[16] = "66";
 comments[16] = "Id Pregunta: 9152. ";


//  Id pregunta: 9153 AÃ±o de creación de pregunta: 2013-01-01
 questions[17]= "18)  No es un concepto relacionado con los sistemas de eLearning:";
 choices[17]= new Array();
 choices[17][0] = "VLE";
 choices[17][1] = "LSS";
 choices[17][2] = "LME";
 choices[17][3] = "ILS";
 answers[17] = choices[17][2];
 units[17] = "66";
 comments[17] = "Id Pregunta: 9153. ";


//  Id pregunta: 9157 AÃ±o de creación de pregunta: 2013-01-01
 questions[18]= "19)  De acuerdo a AGR010, un sistema CMI (Computer Managed Instruction) con un entorno basado en web, no tiene por qu&eacute; cumplir con:";
 choices[18]= new Array();
 choices[18][0] = "Comunicaci&oacute;n HTTP (HACP Binding)";
 choices[18][1] = "Comunicaci&oacute;n mediante API (API Binding)";
 choices[18][2] = "Definici&oacute;n de la estructura del curso (File Binding)";
 choices[18][3] = "Definici&oacute;n de los tipos de datos del curso (Data Binding) ";
 answers[18] = choices[18][3];
 units[18] = "66";
 comments[18] = "Id Pregunta: 9157. ";


//  Id pregunta: 9158 AÃ±o de creación de pregunta: 2013-01-01
 questions[19]= "20)  NO se encuentra entre las iniciativas de IMS:";
 choices[19]= new Array();
 choices[19][0] = "Empaquetado de metadatos";
 choices[19][1] = "Interoperabilidad de preguntas y tests";
 choices[19][2] = "Empaquetado de informaci&oacute;n del alumno";
 choices[19][3] = "Empaquetado de contenidos";
 answers[19] = choices[19][0];
 units[19] = "66";
 comments[19] = "Id Pregunta: 9158. ";


//  Id pregunta: 9164 AÃ±o de creación de pregunta: 2013-01-01
 questions[20]= "21)  Entre los servicios m&iacute;nimos que toda IDE debe respetar seg&uacute;n el OGC no se encuentra:";
 choices[20]= new Array();
 choices[20][0] = "El servicio de coberturas en web (WCS)";
 choices[20][1] = "El servicio de cat&aacute;logos de datos (CSW)";
 choices[20][2] = "El servicio de procesamientos (WPS)";
 choices[20][3] = "El servicio de conversi&oacute;n de coordenadas";
 answers[20] = choices[20][3];
 units[20] = "67";
 comments[20] = "Id Pregunta: 9164. NULL";


//  Id pregunta: 9165 AÃ±o de creación de pregunta: 2013-01-01
 questions[21]= "22)  El est&aacute;ndar m&aacute;s extendido en el campo de los Sistemas de Informaci&oacute;n Geogr&aacute;fica para los servicios de cat&aacute;logo es:";
 choices[21]= new Array();
 choices[21][0] = "ISO 23950";
 choices[21][1] = "ISO 19125";
 choices[21][2] = "ISO 19115";
 choices[21][3] = "Ninguno de los anteriores se refiere a un est&aacute;ndar de servicio de cat&aacute;logo";
 answers[21] = choices[21][0];
 units[21] = "67";
 comments[21] = "Id Pregunta: 9165. NULL";


//  Id pregunta: 9169 AÃ±o de creación de pregunta: 2013-01-01
 questions[22]= "23)  Una empresa tiene una p&aacute;gina web con informaci&oacute;n sobre su actividad, productos, y servicios que vende, pero &eacute;stos no se pueden comprar a trav&eacute;s de su p&aacute;gina web. &iquest;Le afectan a la empresa las obligaciones establecidas en la Ley de Servicios de la Sociedad de la Informaci&oacute;n para los prestadores de servicios?";
 choices[22]= new Array();
 choices[22][0] = "S&iacute;, ya que se trata de una actividad con trascendencia econ&oacute;mica que se realiza por medios electr&oacute;nicos";
 choices[22][1] = "No, al no haber venta directa de productos por medios electr&oacute;nicos";
 choices[22][2] = "Si, cualquier servicio que se preste a trav&eacute;s de internet incurre en estas obligaciones";
 choices[22][3] = "No, la ley no establece obligaciones para los prestadores de servicios";
 answers[22] = choices[22][0];
 units[22] = "70";
 comments[22] = "Id Pregunta: 9169. Examen TIC A2 2011";


//  Id pregunta: 9172 AÃ±o de creación de pregunta: 2013-01-01
 questions[23]= "24)  La norma que regula las obligaciones de facturaci&oacute;n es:";
 choices[23]= new Array();
 choices[23][0] = "Orden PRE/2971/2007";
 choices[23][1] = "Real Decreto 1496/2003";
 choices[23][2] = "Real Decreto 1619/2012";
 choices[23][3] = "Real Decreto 1783/2012";
 answers[23] = choices[23][2];
 units[23] = "70";
 comments[23] = "Id Pregunta: 9172. ";


//  Id pregunta: 9176 AÃ±o de creación de pregunta: 2013-01-01
 questions[24]= "25)  Es un formato de imagen en mapa de bits";
 choices[24]= new Array();
 choices[24][0] = "ODG";
 choices[24][1] = "DXF";
 choices[24][2] = "XCF";
 choices[24][3] = "DWG";
 answers[24] = choices[24][2];
 units[24] = "93";
 comments[24] = "Id Pregunta: 9176. NULL";


//  Id pregunta: 9183 AÃ±o de creación de pregunta: 2013-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes no es interfaz de M&eacute;trica 3?";
 choices[25]= new Array();
 choices[25][0] = "Gesti&oacute;n de Configuraci&oacute;n";
 choices[25][1] = "Gesti&oacute;n de Procesos";
 choices[25][2] = "Seguridad";
 choices[25][3] = "Aseguramiento de la Calidad";
 answers[25] = choices[25][1];
 units[25] = "86";
 comments[25] = "Id Pregunta: 9183. NULL";


//  Id pregunta: 9186 AÃ±o de creación de pregunta: 2013-01-01
 questions[26]= "27)  Seg&uacute;n M&eacute;trica 3, &iquest; cu&aacute;ndo se elaboran los manuales de usuario ?";
 choices[26]= new Array();
 choices[26][0] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[26][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[26][2] = "Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[26][3] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 answers[26] = choices[26][0];
 units[26] = "86";
 comments[26] = "Id Pregunta: 9186. NULL";


//  Id pregunta: 9188 AÃ±o de creación de pregunta: 2013-01-01
 questions[27]= "28)  &iquest;En qu&eacute; proceso se llevan a cabo las pruebas de sistema?";
 choices[27]= new Array();
 choices[27][0] = "ASI";
 choices[27][1] = "DSI";
 choices[27][2] = "CSI";
 choices[27][3] = "IAS";
 answers[27] = choices[27][2];
 units[27] = "86";
 comments[27] = "Id Pregunta: 9188. NULL";


//  Id pregunta: 9196 AÃ±o de creación de pregunta: 2013-01-01
 questions[28]= "29)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[28]= new Array();
 choices[28][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador.";
 choices[28][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario.";
 choices[28][2] = "Los derechos morales pertenecen al trabajador";
 choices[28][3] = "Los derechos morales pertenecen al empresario";
 answers[28] = choices[28][2];
 units[28] = "36";
 comments[28] = "Id Pregunta: 9196. ";


//  Id pregunta: 9197 AÃ±o de creación de pregunta: 2013-01-01
 questions[29]= "30)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[29]= new Array();
 choices[29][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[29][1] = "Si, como obra literaria.";
 choices[29][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[29][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[29] = choices[29][3];
 units[29] = "36";
 comments[29] = "Id Pregunta: 9197. ";


//  Id pregunta: 9198 AÃ±o de creación de pregunta: 2013-01-01
 questions[30]= "31)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[30]= new Array();
 choices[30][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador salvo pacto en contrario";
 choices[30][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario salvo pacto en contrario";
 choices[30][2] = "Los derechos morales pertenecen al trabajador salvo pacto en contrario";
 choices[30][3] = "Los derechos morales pertenecen al empresario salvo pacto en contrario";
 answers[30] = choices[30][1];
 units[30] = "36";
 comments[30] = "Id Pregunta: 9198. ";


//  Id pregunta: 9201 AÃ±o de creación de pregunta: 2013-01-01
 questions[31]= "32)  El lenguaje de expresi&oacute;n de derechos REL se basa en contenedores de grants. Indica cual de los siguientes elementos no forma parte de un grant.";
 choices[31]= new Array();
 choices[31][0] = "Principal.";
 choices[31][1] = "Right.";
 choices[31][2] = "Resource.";
 choices[31][3] = "Constraints.";
 answers[31] = choices[31][3];
 units[31] = "37";
 comments[31] = "Id Pregunta: 9201. ";


//  Id pregunta: 9203 AÃ±o de creación de pregunta: 2013-01-01
 questions[32]= "33)  De los siguientes elementos, &iquest; cu&aacute;les no est&aacute;n definidos por el lenguaje ODRL?";
 choices[32]= new Array();
 choices[32][0] = "Assets.";
 choices[32][1] = "Rights.";
 choices[32][2] = "Resources.";
 choices[32][3] = "Parties.";
 answers[32] = choices[32][2];
 units[32] = "37";
 comments[32] = "Id Pregunta: 9203. ";


//  Id pregunta: 9204 AÃ±o de creación de pregunta: 2013-01-01
 questions[33]= "34)  En el lenguaje ODRL, &iquest;c&oacute;mo se identifica de forma &uacute;nica el contenido digital a proteger?";
 choices[33]= new Array();
 choices[33][0] = "Mediante el elemento Assets.";
 choices[33][1] = "Mendiate el elemento Permission.";
 choices[33][2] = "Mendiante el elemento Constraints.";
 choices[33][3] = "Todas son falsas.";
 answers[33] = choices[33][0];
 units[33] = "37";
 comments[33] = "Id Pregunta: 9204. ";


//  Id pregunta: 9211 AÃ±o de creación de pregunta: 2013-01-01
 questions[34]= "35)  Con relaci&oacute;n al bucle arbitrado y red conmutada en las conexiones FC, es cierto que...";
 choices[34]= new Array();
 choices[34][0] = "mediante bucle arbitrado se pueden conectar hasta 50 dispositivos en un anillo en el que se comparte el ancho de banda entre todos ellos.";
 choices[34][1] = "La red conmutada utiliza switches para construir una NAS.";
 choices[34][2] = "En la red conmutada no se comparte el ancho de banda";
 choices[34][3] = "Bucle arbitrado y red conmutada no son formas v&aacute;lidas de conexi&oacute;n FC.";
 answers[34] = choices[34][2];
 units[34] = "48";
 comments[34] = "Id Pregunta: 9211. ";


//  Id pregunta: 9212 AÃ±o de creación de pregunta: 2013-01-01
 questions[35]= "36)  &iquest;C&oacute;mo se identifican los equipos pertenecientes a una red FC?";
 choices[35]= new Array();
 choices[35][0] = "Mediante la MAC";
 choices[35][1] = "Mediante su WWN";
 choices[35][2] = "Mediante una url";
 choices[35][3] = "Mediante un identificador que el administrador configure en el momento de la instalaci&oacute;n.";
 answers[35] = choices[35][1];
 units[35] = "48";
 comments[35] = "Id Pregunta: 9212. ";


//  Id pregunta: 9221 AÃ±o de creación de pregunta: 2013-01-01
 questions[36]= "37)  &iquest;Qu&eacute; es el Fabric/switch/port binding?";
 choices[36]= new Array();
 choices[36][0] = "Un mecanismo de seguridad adicional ofrecido por las redes SAN.";
 choices[36][1] = "Puede limitar la conectividad de un determinado equipo a un determinado puerto de un switch dentro del fabric.";
 choices[36][2] = "El dispositivo s&oacute;lo podr&aacute; acceder a la SAN si se conecta f&iacute;sicamente al puerto permitido y s&oacute;lo un dispositivo con el WWN indicado puede conectarse a dicho puerto.";
 choices[36][3] = "Todas son correctas.";
 answers[36] = choices[36][3];
 units[36] = "48";
 comments[36] = "Id Pregunta: 9221. ";


//  Id pregunta: 9228 AÃ±o de creación de pregunta: 2013-01-01
 questions[37]= "38)  En la primitiva send-receive qu&eacute; caracter&iacute;sticas tienen send y receive?";
 choices[37]= new Array();
 choices[37][0] = "Send en bloqueante y Receive es no bloqueante.";
 choices[37][1] = "Ambas son bloqueantes.";
 choices[37][2] = "Ambas son no bloqueantes.";
 choices[37][3] = "Send es no bloqueante y Receive es bloqueante.";
 answers[37] = choices[37][3];
 units[37] = "50";
 comments[37] = "Id Pregunta: 9228. ";


//  Id pregunta: 9231 AÃ±o de creación de pregunta: 2013-01-01
 questions[38]= "39)  &iquest;Qu&eacute; es la barra y la l&iacute;nea en tecnolog&iacute;a mainframe de IBM?";
 choices[38]= new Array();
 choices[38][0] = "Espacio de direccionamiento que alcanza los 64 MB y los 2 GB respectivamente.";
 choices[38][1] = "Espacio de direccionamiento que alcanza los 2 GB y los 64 MB respectivamente";
 choices[38][2] = "Espacio de direccionamiento que alcanza los 2 GB y los 16 MB respectivamente.";
 choices[38][3] = "Ninguna es correcta.";
 answers[38] = choices[38][2];
 units[38] = "52,55";
 comments[38] = "Id Pregunta: 9231. ";


//  Id pregunta: 9234 AÃ±o de creación de pregunta: 2013-01-01
 questions[39]= "40)  &iquest;Qu&eacute; es IPL?";
 choices[39]= new Array();
 choices[39][0] = "Es el equivalente al Boot en z/OS";
 choices[39][1] = "El primer programa que se ejecuta cuando se hace un TSO logon.";
 choices[39][2] = "Carga de programa en modo batch en z/OS.";
 choices[39][3] = "Ninguna es correcta.";
 answers[39] = choices[39][0];
 units[39] = "52, 55";
 comments[39] = "Id Pregunta: 9234. ";


//  Id pregunta: 9237 AÃ±o de creación de pregunta: 2013-01-01
 questions[40]= "41)  &iquest;Qu&eacute; es el n&uacute;cleo denominado &ldquo;vanilla&rdquo;?";
 choices[40]= new Array();
 choices[40][0] = "Kernel sin alteraciones suministrado por Linus Torvalds";
 choices[40][1] = "S&oacute;lo se puede descargar de su sitio oficial en http://www.kernel.org";
 choices[40][2] = "Las distintas distribuciones no se basan en el n&uacute;cleo &ldquo;vanilla&rdquo;";
 choices[40][3] = "Todas las anteriores son correctas.";
 answers[40] = choices[40][0];
 units[40] = "53";
 comments[40] = "Id Pregunta: 9237. ";


//  Id pregunta: 9240 AÃ±o de creación de pregunta: 2013-01-01
 questions[41]= "42)  &iquest;Qu&eacute; caracter&iacute;sticas tiene Ubuntu?";
 choices[41]= new Array();
 choices[41][0] = "Se orienta al usuario novel y promedio.";
 choices[41][1] = "Tiene un fuerte enfoque en la facilidad de uso";
 choices[41][2] = "Su patrocinador es Canonical.";
 choices[41][3] = "Todas son correctas.";
 answers[41] = choices[41][3];
 units[41] = "53";
 comments[41] = "Id Pregunta: 9240. ";


//  Id pregunta: 9243 AÃ±o de creación de pregunta: 2013-01-01
 questions[42]= "43)  &iquest;Qu&eacute; es main en relaci&oacute;n a Ubuntu?";
 choices[42]= new Array();
 choices[42][0] = "Contiene s&oacute;lo los paquetes que cumplen los requisitos de la licencia de Ubuntu.";
 choices[42][1] = "Contiene los programas soportados por los desarrollores de Ubuntu que no est&aacute;n disponibles bajo ning&uacute;n tipo de licencia libre.";
 choices[42][2] = "Son los programas que no reciben apoyo por parte del equipo de Ubuntu.";
 choices[42][3] = "Son programas comerciales.";
 answers[42] = choices[42][0];
 units[42] = "54";
 comments[42] = "Id Pregunta: 9243. ";


//  Id pregunta: 9244 AÃ±o de creación de pregunta: 2013-01-01
 questions[43]= "44)  &iquest;C&oacute;mo divide el software Ubuntu?";
 choices[43]= new Array();
 choices[43][0] = "En secciones llamadas componentes.";
 choices[43][1] = "Los componentes principales son main, restricted, universe, commercial y multiverse.";
 choices[43][2] = "El componente multiverse contiene los paquetes sin soporte debido a que no cumple los requisitos de Software Libre.";
 choices[43][3] = "Todas son correctas.";
 answers[43] = choices[43][3];
 units[43] = "54";
 comments[43] = "Id Pregunta: 9244. ";


//  Id pregunta: 9250 AÃ±o de creación de pregunta: 2013-01-01
 questions[44]= "45)  &iquest;D&oacute;nde se almacena la informaci&oacute;n de inicio de sesi&oacute;n para los usuarios locales?";
 choices[44]= new Array();
 choices[44][0] = "En el DA de Microsoft.";
 choices[44][1] = "En la SAM (Security Access Manager)";
 choices[44][2] = "En una archivo de texto del sistema cifrado.";
 choices[44][3] = "En la COM (Component Object Model)";
 answers[44] = choices[44][1];
 units[44] = "56";
 comments[44] = "Id Pregunta: 9250. ";


//  Id pregunta: 9254 AÃ±o de creación de pregunta: 2013-01-01
 questions[45]= "46)  &iquest;Qu&eacute; es VAD?";
 choices[45]= new Array();
 choices[45][0] = "Virtual Address Descriptors";
 choices[45][1] = "Virtual Allocator Devices";
 choices[45][2] = "Descriptor de direcciones asignadas.";
 choices[45][3] = "No existe.";
 answers[45] = choices[45][0];
 units[45] = "56";
 comments[45] = "Id Pregunta: 9254. ";


//  Id pregunta: 9255 AÃ±o de creación de pregunta: 2013-01-01
 questions[46]= "47)  &iquest;Qu&eacute; es BitLocker?";
 choices[46]= new Array();
 choices[46][0] = "Una funcionalidad de Windows que permite el cifrado de discos duros completos.";
 choices[46][1] = "Se proporciona desde Windows Vista.";
 choices[46][2] = "Con Windows 7 incorpora la funcionalidad de BiLocker-ToGo para dispositivos USB.";
 choices[46][3] = "Todas son correctas";
 answers[46] = choices[46][3];
 units[46] = "56";
 comments[46] = "Id Pregunta: 9255. ";


//  Id pregunta: 9262 AÃ±o de creación de pregunta: 2013-01-01
 questions[47]= "48)  Si se quisiera un middleware para una grid, se elegir&iacute;a:";
 choices[47]= new Array();
 choices[47][0] = "Globus Toolkit. ";
 choices[47][1] = "Cluster Veritas.";
 choices[47][2] = "Arduino.";
 choices[47][3] = "Data protector. ";
 answers[47] = choices[47][0];
 units[47] = "45";
 comments[47] = "Id Pregunta: 9262. Examen TICA2-2011";


//  Id pregunta: 9267 AÃ±o de creación de pregunta: 2013-01-01
 questions[48]= "49)  &iquest;Con qu&eacute; dispositivo se relaciona la tecnolog&iacute;a de reconocimiento de pulso ac&uacute;stico?";
 choices[48]= new Array();
 choices[48][0] = "Memoria RAM";
 choices[48][1] = "Pantalla t?ctil.";
 choices[48][2] = "Tarjeta de sonido.";
 choices[48][3] = "Disco duro. ";
 answers[48] = choices[48][1];
 units[48] = "47";
 comments[48] = "Id Pregunta: 9267. Examen TICA2-2011";


//  Id pregunta: 9272 AÃ±o de creación de pregunta: 2013-01-01
 questions[49]= "50)  El tama&ntilde;o m&aacute;ximo de archivos que puede manejar FAT32 es: ";
 choices[49]= new Array();
 choices[49][0] = "32MB";
 choices[49][1] = "1GB";
 choices[49][2] = "2GB";
 choices[49][3] = "4GB";
 answers[49] = choices[49][3];
 units[49] = "54";
 comments[49] = "Id Pregunta: 9272. Examen TICA2-2011";


//  Id pregunta: 9285 AÃ±o de creación de pregunta: 2013-01-01
 questions[50]= "51)  En los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y sector privado, una Administraci&oacute;n encarga a una entidad de derecho privado la realizaci&oacute;n de una actuaci&oacute;n global, que no puede durar m&aacute;s de...";
 choices[50]= new Array();
 choices[50][0] = "10 a&ntilde;os.";
 choices[50][1] = "30 a&ntilde;os.";
 choices[50][2] = "20 a&ntilde;os.";
 choices[50][3] = "15 a&ntilde;os.";
 answers[50] = choices[50][2];
 units[50] = "41";
 comments[50] = "Id Pregunta: 9285. NULL";


//  Id pregunta: 9289 AÃ±o de creación de pregunta: 2013-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es la norma de creaci&oacute;n de AENOR?";
 choices[51]= new Array();
 choices[51][0] = "El RD 2200/1995.";
 choices[51][1] = "El RD 757/1986.";
 choices[51][2] = "La Ley 5/1985.";
 choices[51][3] = "Ninguna, pues no es un organismo p&uacute;blico. ";
 answers[51] = choices[51][3];
 units[51] = "42";
 comments[51] = "Id Pregunta: 9289. ";


//  Id pregunta: 9305 AÃ±o de creación de pregunta: 2013-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes es una norma b&aacute;sica en la auditor&iacute;a de los sistemas de informaci&oacute;n?";
 choices[52]= new Array();
 choices[52][0] = "Planificaci&oacute;n y supervisi&oacute;n";
 choices[52][1] = "Estudio y evaluaci&oacute;n del sistema de control interno";
 choices[52][2] = "Obtenci&oacute;n de evidencia suficiente y adecuada";
 choices[52][3] = "Todas las anteriores";
 answers[52] = choices[52][3];
 units[52] = "31";
 comments[52] = "Id Pregunta: 9305. ";


//  Id pregunta: 9309 AÃ±o de creación de pregunta: 2013-01-01
 questions[53]= "54)  &iquest;Cu&aacute;ndo es necesario disponer de un control compensatorio?";
 choices[53]= new Array();
 choices[53][0] = "Cuando no est&eacute; previsto un control.";
 choices[53][1] = "Cuando el coste de un control lo haga inabordable.";
 choices[53][2] = "Cuando el control no est&eacute; efectivamente implantado o falle su aplicaci&oacute;n.";
 choices[53][3] = "Todas las anteriores son ciertas.";
 answers[53] = choices[53][3];
 units[53] = "31";
 comments[53] = "Id Pregunta: 9309. ";


//  Id pregunta: 9318 AÃ±o de creación de pregunta: 2013-01-01
 questions[54]= "55)  Se&ntilde;ale la afirmaci&oacute;n verdadera";
 choices[54]= new Array();
 choices[54][0] = "El modelo organizativo en el que los auditores forman parte de los &oacute;rganos de control de la organizaci&oacute;n permite una mayor independencia";
 choices[54][1] = "El modelo organizativo en el que los auditores se integran dentro de los propios centros inform&aacute;ticos permite una mayor independencia";
 choices[54][2] = "El modelo organizativo en el que los auditores se integran dentro de los propios centros inform&aacute;ticos ofrece una implicaci&oacute;n m&aacute;s directa en las tareas destinadas a mejorar la calidad";
 choices[54][3] = "La a) y la c) son correctas";
 answers[54] = choices[54][3];
 units[54] = "31";
 comments[54] = "Id Pregunta: 9318. ";


//  Id pregunta: 9323 AÃ±o de creación de pregunta: 2013-01-01
 questions[55]= "56)  Se&ntilde;ale la verdadera";
 choices[55]= new Array();
 choices[55][0] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es bajo se refleja en el informe como posible debilidad del sistema de control";
 choices[55][1] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es medio se describe dicho hallazgo como una vulnerabilidad a la que se expone el sistema";
 choices[55][2] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es bajo se describe dicho hallazgo como una vulnerabilidad a la que se expone el sistema";
 choices[55][3] = "Si el impacto de un hallazgo seg&uacute;n su materialidad es medio se identifica como una debilidad que debe compensarse o anularse con m&aacute;s controles, o haciendo los existentes m&aacute;s estrictos";
 answers[55] = choices[55][2];
 units[55] = "31";
 comments[55] = "Id Pregunta: 9323. ";


//  Id pregunta: 9326 AÃ±o de creación de pregunta: 2013-01-01
 questions[56]= "57)  Qu&eacute; clase de cable, seg&uacute;n la norma ISO 11801, elegir&iacute;a para permitir la transmisi&oacute;n de video en tiempo real?";
 choices[56]= new Array();
 choices[56][0] = "clase D";
 choices[56][1] = "clase F ";
 choices[56][2] = "clase E";
 choices[56][3] = "b) y c) son correctas.";
 answers[56] = choices[56][3];
 units[56] = "99";
 comments[56] = "Id Pregunta: 9326. NULL";


//  Id pregunta: 9330 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  El cable de categor&iacute;a 6 seg&uacute;n la norma ANSI";
 choices[57]= new Array();
 choices[57][0] = "Equivale al cable clase E de ISO";
 choices[57][1] = "Es el cable adecuado para transmisiones de 100 mbps";
 choices[57][2] = "Su rango de funcionamiento alcanza los 100 mhz";
 choices[57][3] = "Se trata de una";
 answers[57] = choices[57][0];
 units[57] = "99";
 comments[57] = "Id Pregunta: 9330. NULL";


//  Id pregunta: 9331 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  Acerca de las ventanas de transmision en las fibras opticas, se puede afirmar";
 choices[58]= new Array();
 choices[58][0] = "son provocadas por la presencia del ion hidroxilo OH-";
 choices[58][1] = "la mas amplia es la primera ventana, entre los 0,8 y 0,9 micras";
 choices[58][2] = "alrededor de los 1550 nm existe una ventana de transmision.";
 choices[58][3] = "la tercera ventana obliga a usar transmisiones monomodo";
 answers[58] = choices[58][2];
 units[58] = "99";
 comments[58] = "Id Pregunta: 9331. NULL";


//  Id pregunta: 9334 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO se corresponde con un tipo de cable?";
 choices[59]= new Array();
 choices[59][0] = "UTP - Unshielded Twisted Pair.";
 choices[59][1] = "STP - Shielded Twisted Pair.";
 choices[59][2] = "US/ STP - UnShielded Screened Twisted Pair.";
 choices[59][3] = "FTP - Foiled Twisted Pair.";
 answers[59] = choices[59][2];
 units[59] = "99";
 comments[59] = "Id Pregunta: 9334. TIC_a1_ejer_AGE_2011";


//  Id pregunta: 9340 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  La t&eacute;cnica de McCabe permite medir:";
 choices[60]= new Array();
 choices[60][0] = "la productividad del software";
 choices[60][1] = "la complejidad del software";
 choices[60][2] = "la fiabilidad del software";
 choices[60][3] = "Ninguna de las tres";
 answers[60] = choices[60][1];
 units[60] = "88";
 comments[60] = "Id Pregunta: 9340. NULL";


//  Id pregunta: 9350 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  DSS1 es:";
 choices[61]= new Array();
 choices[61][0] = "Un protocolo utilizado en ADSL, en la capa de red, para la gesti&oacute;n de conexiones con el DSLAM";
 choices[61][1] = "Un protocolo utilizado en RDSI, de la capa de red, para gesti&oacute;n de conexiones.";
 choices[61][2] = "Un protocolo utilizado en RDSI en la capa de enlace, para el control de acceso al canal D";
 choices[61][3] = "Un protocolo utilizado en ADSL, en la capa de enlace, para el acceso m&uacute;ltiple a los servicios";
 answers[61] = choices[61][1];
 units[61] = "103";
 comments[61] = "Id Pregunta: 9350. Pag. 8 astic 2011";


//  Id pregunta: 9351 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  Respecto de RDSI, se puede afirmar:";
 choices[62]= new Array();
 choices[62][0] = "En la capa de enlace, el canal D hace uso del Procedimiento de Acceso al Enlace en el Canal D (o LAPD)";
 choices[62][1] = "En la capa de enlace, el canal B hace uso del Procedimiento de Acceso al Enlace en el Canal B (o LAPB)";
 choices[62][2] = "La transmisi&oacute;n d&uacute;plex en la capa f&iacute;sica se efect&uacute;a a 192 kbps mediante tramas de 40 bits cada una y una duraci&oacute;n de 275 us";
 choices[62][3] = "En la capa de red, se usa el protocolo LAPB, para gestionar las conexiones";
 answers[62] = choices[62][0];
 units[62] = "103";
 comments[62] = "Id Pregunta: 9351. Pag. 8 astic 2011";


//  Id pregunta: 9357 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  &iquest;Qu&eacute; cable de fibra &oacute;ptica de los que se indican a continuaci&oacute;n tiene las caracter&iacute;sticas que lo identifican como un cable de fibra monomodo?";
 choices[63]= new Array();
 choices[63][0] = "Fibra 62.5/125 um";
 choices[63][1] = "Fibra 50/125 um";
 choices[63][2] = "Fibra 200/380 um ";
 choices[63][3] = "Fibra 10/125 um";
 answers[63] = choices[63][3];
 units[63] = "99";
 comments[63] = "Id Pregunta: 9357. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Promoci&oacute;n interna 2011.";


//  Id pregunta: 9362 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Una red utiliza CSMA/CD. Opera a 1 Gbps con un cable de 500 metros de largo sin repetidores. La velocidad de propagaci&oacute;n en el cable es de 200.000 km/s &iquest;Cu&aacute;l es el tama&ntilde;o m&iacute;nimo de la trama?";
 choices[64]= new Array();
 choices[64][0] = "5000 bits";
 choices[64][1] = "10000 bits";
 choices[64][2] = "1250 bytes";
 choices[64][3] = "1000 bits";
 answers[64] = choices[64][0];
 units[64] = "101";
 comments[64] = "Id Pregunta: 9362. ";


//  Id pregunta: 9381 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  &iquest;A qu&eacute; est&aacute;ndar se refiere WirelessMan-Advanced?";
 choices[65]= new Array();
 choices[65][0] = "802.16m";
 choices[65][1] = "802.16e";
 choices[65][2] = "802.16k";
 choices[65][3] = "802.16-2009";
 answers[65] = choices[65][0];
 units[65] = "101";
 comments[65] = "Id Pregunta: 9381. ";


//  Id pregunta: 9385 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  En LTE, las funciones de control de recursos de radio, control de calidad de servicio y movilidad se llevan a cabo en:";
 choices[66]= new Array();
 choices[66][0] = "Los Evolved Node-B";
 choices[66][1] = "Los Evolved RNC";
 choices[66][2] = "En las BSC";
 choices[66][3] = "En servidores remotos del operador, a los que se accede por conmutaci&oacute;n en una red IP";
 answers[66] = choices[66][0];
 units[66] = "108";
 comments[66] = "Id Pregunta: 9385. NULL";


//  Id pregunta: 9387 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  Se&ntilde;ale la respuesta correcta acerca de LTE:";
 choices[67]= new Array();
 choices[67][0] = "El HSS (Home Subscriber Server) es una base de datos distribuida que contiene informaci&oacute;n de los usuarios, sin entrar en funciones de Autenticaci&oacute;n, funci&oacute;n que lleva a cabo el eAUC.";
 choices[67][1] = "El Serving Gateway (SGW) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP. ";
 choices[67][2] = "El PGW (PDN Gateway) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP. ";
 choices[67][3] = "El MME (Mobility Management Entity) es un elemento responsable del control de la estaci&oacute;n base, siendo el interfaz a la red conmutada de LTE";
 answers[67] = choices[67][1];
 units[67] = "108";
 comments[67] = "Id Pregunta: 9387. NULL";


//  Id pregunta: 9395 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  Se&ntilde;ale la incorrecta en relaci&oacute;n con HSDPA";
 choices[68]= new Array();
 choices[68][0] = "Utiliza la t&eacute;cnica de HARQ (Hybrid Automatica Repeat Request)";
 choices[68][1] = "Hace uso de una modulaci&oacute;n adaptativa, que cambia seg&uacute;n las condiciones del canal.";
 choices[68][2] = "Existen diferentes versiones de HSDPA que proporcionan diferentes velocidades.";
 choices[68][3] = "Mediante Fast-Packet Scheduling, se asignan espacios de tiempo fijos, por prioridades, haciendo que los usuarios se turnen para que tengan un ancho de banda tambi&eacute;n fijo para la descarga de datos.";
 answers[68] = choices[68][3];
 units[68] = "108";
 comments[68] = "Id Pregunta: 9395. NULL";


//  Id pregunta: 9396 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  Las redes ATM emplean celdas de:";
 choices[69]= new Array();
 choices[69][0] = "Tama&ntilde;o variable: entre 5 e 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n";
 choices[69][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n";
 choices[69][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[69][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[69] = choices[69][1];
 units[69] = "109";
 comments[69] = "Id Pregunta: 9396. Examen Xunta de Galicia A1 2011";


//  Id pregunta: 9399 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  En el modelo de referencia de ATM, &iquest;c&oacute;mo se denomina la capa que tiene las funciones de convergencia, y segmentaci&oacute;n y reensamblado?";
 choices[70]= new Array();
 choices[70][0] = "TC";
 choices[70][1] = "PM";
 choices[70][2] = "AAL";
 choices[70][3] = "ATM";
 answers[70] = choices[70][2];
 units[70] = "109";
 comments[70] = "Id Pregunta: 9399. TIC AGE A2 2011 Promo Int";


//  Id pregunta: 9408 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  A qu&eacute; &aacute;rea pertenece generalmente el departamento de microinform&aacute;tica?";
 choices[71]= new Array();
 choices[71][0] = "Sistemas";
 choices[71][1] = "Log&iacute;stica";
 choices[71][2] = "Comunicaciones";
 choices[71][3] = "Seguridad";
 answers[71] = choices[71][0];
 units[71] = "26";
 comments[71] = "Id Pregunta: 9408. ";


//  Id pregunta: 9409 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Qui&eacute;n deber&iacute;a cerrar siempre las incidencias?";
 choices[72]= new Array();
 choices[72][0] = "El nivel 1 (CAU)";
 choices[72][1] = "El nivel 2 (resto de &aacute;reas del centro TIC)";
 choices[72][2] = "El nivel 3 (proveedores)";
 choices[72][3] = "Aquel nivel que resuelva la incidencia";
 answers[72] = choices[72][0];
 units[72] = "26";
 comments[72] = "Id Pregunta: 9409. ";


//  Id pregunta: 9424 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Seg&uacute;n la ley 9/2014, para poder explotar redes y prestar servicios de comunicaciones electr&oacute;nicas a terceros";
 choices[73]= new Array();
 choices[73][0] = "Es imprescindible que la persona f&iacute;sica o jur&iacute;dica sea espa&ntilde;ola.";
 choices[73][1] = "La persona f&iacute;sica o jur&iacute;dica debe ser nacional de un Estado miembro de la Uni&oacute;n Europea.";
 choices[73][2] = "Puede ser de cualquier nacionalidad";
 choices[73][3] = "Puede ser de cualquier nacionalidad cuando as&iacute; est&eacute; previsto en acuerdos internacionales.";
 answers[73] = choices[73][3];
 units[73] = "110";
 comments[73] = "Id Pregunta: 9424. ";


//  Id pregunta: 9450 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Seleccione la frase EQUIVOCADA acerca del &aacute;lgebra relacional.";
 choices[74]= new Array();
 choices[74][0] = "Los operadores b&aacute;sicos son uni&oacute;n, diferencia, producto cartesiano, proyecci&oacute;n y selecci&oacute;n.";
 choices[74][1] = "Los operadores uni&oacute;n y diferencia requieren que las relaciones operando est&eacute;n definidas sobre el mismo conjunto de atributos.";
 choices[74][2] = "El producto cartesiano de una relaci&oacute;n de orden&quot;n&quot; y &quot;x&quot; tuplas y otra relaci&oacute;n de orden &quot;m&quot; y &quot;z&quot; tuplas es una relaci&oacute;n de orden n*m y de (x+z) tuplas. (F, es de orden n+m y x*z tuplas)";
 choices[74][3] = "La operaci&oacute;n join sobre dos relaciones que presentan atributos comunes puede tener cero tuplas.";
 answers[74] = choices[74][2];
 units[74] = "58";
 comments[74] = "Id Pregunta: 9450. Examen AGE TIC A1 2011";


//  Id pregunta: 9453 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  En el modelo Entidad/Relaci&oacute;n de Chen, &iquest;qu&eacute; tipos de entidades se pueden diferenciar?:";
 choices[75]= new Array();
 choices[75][0] = "Regulares y d&eacute;biles.";
 choices[75][1] = "Fuertes y d&eacute;biles.";
 choices[75][2] = "A y B son correctas.";
 choices[75][3] = "Ninguna de las anteriores es correcta.";
 answers[75] = choices[75][2];
 units[75] = "80";
 comments[75] = "Id Pregunta: 9453. ";


//  Id pregunta: 9455 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Seg&uacute;n Codd, una entidad en la que todos los atributos tienen dependencia funcional completa de la clave est&aacute;, al menos, en:";
 choices[76]= new Array();
 choices[76][0] = "Primera Forma Normal.";
 choices[76][1] = "Segunda Forma Normal.";
 choices[76][2] = "Tercera Forma Normal.";
 choices[76][3] = "Forma Normal de Boyce-Codd.";
 answers[76] = choices[76][1];
 units[76] = "58";
 comments[76] = "Id Pregunta: 9455. NULL";


//  Id pregunta: 9460 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Qu&eacute; es la cohesi&oacute;n de un m&oacute;dulo?:";
 choices[77]= new Array();
 choices[77][0] = "M&eacute;trica de la calidad del software directamente proporcional al n&uacute;mero de clases de un m&oacute;dulo.";
 choices[77][1] = "Relaci&oacute;n que existe entre elementos del mismo m&oacute;dulo.";
 choices[77][2] = "Fan-in.";
 choices[77][3] = "Fan-out.";
 answers[77] = choices[77][1];
 units[77] = "84";
 comments[77] = "Id Pregunta: 9460. NULL";


//  Id pregunta: 9462 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de los siguientes diagramas contempla UML 2.0?";
 choices[78]= new Array();
 choices[78][0] = "De actividad, DFD, de casos de uso, de secuencia, de comunicaci&oacute;n.";
 choices[78][1] = "De casos de uso, de actividad, de secuencia, de comunicaci&oacute;n, de clases.";
 choices[78][2] = "De casos de uso, entidad-relaci&oacute;n, de secuencia, de clases, de comunicaci&oacute;n.";
 choices[78][3] = "De clases, de herencia compuesta, de secuencia, de comunicaci&oacute;n, de clases.";
 answers[78] = choices[78][1];
 units[78] = "84";
 comments[78] = "Id Pregunta: 9462. NULL";


//  Id pregunta: 9467 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  En lo referente a la mensajer&iacute;a en Internet indique la afirmaci&oacute;n falsa:";
 choices[79]= new Array();
 choices[79][0] = "MIME se desarrolla en los RFCs 2045 a 2049";
 choices[79][1] = "Si un servidor que no soporta extensiones SMTP recibe un mensaje HELO, devuelve un error de sintaxis al emisor SMTP, quien deber&aacute; enviar en su lugar un mensaje de tipo EHLO";
 choices[79][2] = "El RFC 1870 permite a un receptor especificar el tama&ntilde;o m&aacute;ximo de mensaje que puede recibir";
 choices[79][3] = "El protocolo SMTP se apoya en el sistema de resoluci&oacute;n de nombres de dominio de Internet";
 answers[79] = choices[79][1];
 units[79] = "106";
 comments[79] = "Id Pregunta: 9467. ";


//  Id pregunta: 9471 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Respecto al est&aacute;ndar de servicios de directorio X.500, se&ntilde;ale la afirmaci&oacute;n falsa";
 choices[80]= new Array();
 choices[80][0] = "El DIB se divide en distintos trozos de informaci&oacute;n que se estructuran en una jerarqu&iacute;a en &aacute;rbol denominada DIT";
 choices[80][1] = "Cada parte del DIB se almacena en un servidor denominado DSA";
 choices[80][2] = "El intercambio de informaci&oacute;n entre dos DSA est&aacute; basado en los protocolos DSP y DOP";
 choices[80][3] = "El DSA se comunica con el DIB utilizando el protocolo DAP";
 answers[80] = choices[80][3];
 units[80] = "106";
 comments[80] = "Id Pregunta: 9471. ";


//  Id pregunta: 9476 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes factores de riesgo del an&aacute;lisis de rentabilidad de un proyecto no se considera en el Sector P&uacute;blico?";
 choices[81]= new Array();
 choices[81][0] = "Autoridad limitada para la toma de decisiones";
 choices[81][1] = "Presupuestos plurianuales en todos los casos";
 choices[81][2] = "M&uacute;ltiples actores involucrados";
 choices[81][3] = "Coordinaci&oacute;n entre organismos";
 answers[81] = choices[81][1];
 units[81] = "38";
 comments[81] = "Id Pregunta: 9476. ";


//  Id pregunta: 9480 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[82]= new Array();
 choices[82][0] = "Cuando una inversi&oacute;n tiene VAN positivo, la TIR es superior al coste de capital invertido";
 choices[82][1] = "Cuando una inversi&oacute;n tiene VAN negativo, la TIR es inferior al coste de capital invertido";
 choices[82][2] = "VAN y TIR son m&eacute;todos din&aacute;micos de selecci&oacute;n de inversiones";
 choices[82][3] = "Todas las afirmaciones anteriores son correctas";
 answers[82] = choices[82][3];
 units[82] = "38";
 comments[82] = "Id Pregunta: 9480. ";


//  Id pregunta: 9481 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  El proyecto Maber:";
 choices[83]= new Array();
 choices[83][0] = "No existe";
 choices[83][1] = "Lo llevaron a cabo los extraterrestres en 1950";
 choices[83][2] = "Es un estudio sobre el establecimiento de pautas medioambientales y ergon&oacute;micas en la adquisici&oacute;n y empleo de bienes y servicios TIC en la AGE";
 choices[83][3] = "Es un estudio sobre la rentabilidad media de los proyectpos TIC desarrollados en la AGE";
 answers[83] = choices[83][2];
 units[83] = "38";
 comments[83] = "Id Pregunta: 9481. ";


//  Id pregunta: 9493 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  El cliente web:";
 choices[84]= new Array();
 choices[84][0] = "Puede realizar peticiones HTTP al servidor web";
 choices[84][1] = "Dispone de un int&eacute;rprete de scripting";
 choices[84][2] = "Puede tener plugins instalados";
 choices[84][3] = "Todas las anteriores son ciertas";
 answers[84] = choices[84][3];
 units[84] = "114";
 comments[84] = "Id Pregunta: 9493. NULL";


//  Id pregunta: 9498 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a PerlScript:";
 choices[85]= new Array();
 choices[85][0] = "No se permite su uso en el servidor";
 choices[85][1] = "Es un lenguaje orientado al entorno Microsoft";
 choices[85][2] = "Es un lenguaje de scripting";
 choices[85][3] = "Permite el uso de PERL en los scripts web del cliente";
 answers[85] = choices[85][0];
 units[85] = "114";
 comments[85] = "Id Pregunta: 9498. NULL";


//  Id pregunta: 9499 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  Indica la afirmaci&oacute;n verdadera con respecto a los applets:";
 choices[86]= new Array();
 choices[86][0] = "Se descargan como documentos HTML y se ejecutan en el cliente";
 choices[86][1] = "El usuario no permite el acceso a los recursos locales por el s&oacute;lo hecho de aceptar un applet";
 choices[86][2] = "Se ejecutan en un componente independiente del navegador";
 choices[86][3] = "Todas las anteriores son ciertas";
 answers[86] = choices[86][3];
 units[86] = "114";
 comments[86] = "Id Pregunta: 9499. NULL";


//  Id pregunta: 9500 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  Indica la afirmaci&oacute;n verdadera con respecto a los controles ActiveX:";
 choices[87]= new Array();
 choices[87][0] = "Permiten que los componentes software interact&uacute;en entre s&iacute; en un entorno de red, independientemente del lenguaje en el que han sido programados";
 choices[87][1] = "Se pueden escribir en Java, C++, VB, etc";
 choices[87][2] = "Internet Explorer soporta ActiveX de forma nativa";
 choices[87][3] = "Todas las anteriores son ciertas";
 answers[87] = choices[87][3];
 units[87] = "114";
 comments[87] = "Id Pregunta: 9500. NULL";


//  Id pregunta: 9507 AÃ±o de creación de pregunta: 2013-01-01
 questions[88]= "89)  En el patr&oacute;n MVC, &iquest;d&oacute;nde situar&iacute;amos un contenedor EJB?";
 choices[88]= new Array();
 choices[88][0] = "En el modelo";
 choices[88][1] = "En la vista";
 choices[88][2] = "En el controlador";
 choices[88][3] = "En todos los anteriores";
 answers[88] = choices[88][0];
 units[88] = "116";
 comments[88] = "Id Pregunta: 9507. NULL";


//  Id pregunta: 9511 AÃ±o de creación de pregunta: 2013-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l es la API est&aacute;ndar para conectar programas desarrollados en Java con un sistema gestor de base de datos?";
 choices[89]= new Array();
 choices[89][0] = "JAXP";
 choices[89][1] = "StAX";
 choices[89][2] = "JAF";
 choices[89][3] = "JDBC";
 answers[89] = choices[89][3];
 units[89] = "116";
 comments[89] = "Id Pregunta: 9511. NULL";


//  Id pregunta: 9522 AÃ±o de creación de pregunta: 2013-01-01
 questions[90]= "91)  En los sistemas de videoconferencia las MCU:";
 choices[90]= new Array();
 choices[90][0] = "Son un componente obligatorio";
 choices[90][1] = "Son un componente opcional";
 choices[90][2] = "Permiten la comunicaci&oacute;n &uacute;nicamente entre dos terminales";
 choices[90][3] = "Permiten sesiones de videoconferencia s&oacute;lo para dos localizaciones remotas simult&aacute;neas";
 answers[90] = choices[90][1];
 units[90] = "117";
 comments[90] = "Id Pregunta: 9522. NULL";


//  Id pregunta: 9526 AÃ±o de creación de pregunta: 2013-01-01
 questions[91]= "92)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.329:";
 choices[91]= new Array();
 choices[91][0] = "Es un protocolo que define la se&ntilde;alizaci&oacute;n de llamadas";
 choices[91][1] = "Es un protocolo que permite la inclusi&oacute;n de tr&aacute;fico de datos";
 choices[91][2] = "Especifica un protocolo para el control y etiquetado de dos canales simult&aacute;neos en una &uacute;nica videoconferencia";
 choices[91][3] = "Simplifica y complementa al protocolo T.120";
 answers[91] = choices[91][0];
 units[91] = "117";
 comments[91] = "Id Pregunta: 9526. NULL";


//  Id pregunta: 9545 AÃ±o de creación de pregunta: 2013-01-01
 questions[92]= "93)  Seg&uacute;n la LSSI, entre los elementos que los prestadores de servicios de la Sociedad de la Informaci&oacute;n est&aacute;n obligados a indicar en su p&aacute;gina web NO se encuentra:";
 choices[92]= new Array();
 choices[92][0] = "El nombre o denominiaci&oacute;n social";
 choices[92][1] = "Un n&uacute;mero de tel&eacute;fono de contacto";
 choices[92][2] = "Los datos de su inscripci&oacute;n en el registro mercantil u otro registro p&uacute;blico";
 choices[92][3] = "Los c&oacute;digos de conducta a los que est&eacute; adheridos.";
 answers[92] = choices[92][1];
 units[92] = "30";
 comments[92] = "Id Pregunta: 9545. Ley 34/2002, art&iacute;culo 10";


//  Id pregunta: 9570 AÃ±o de creación de pregunta: 2013-01-01
 questions[93]= "94)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, durante la tramitaci&oacute;n de un proceso sancionador, podr&aacute; acordarse como medida provisional la suspensi&oacute;n temporal de la actividad del prestador de servicios de certificaci&oacute;n, incluyendo el cierre de sus establecimientos, cuando la infracci&oacute;n haya sido calicada como:";
 choices[93]= new Array();
 choices[93][0] = "Leve, grave o muy grave";
 choices[93][1] = "Grave o muy grave";
 choices[93][2] = "&Uacute;nicamente cuando haya sido calificada como muy grave";
 choices[93][3] = "En ning&uacute;n caso podr&aacute;n acordarse este tipo de medidas provisionales";
 answers[93] = choices[93][1];
 units[93] = "30";
 comments[93] = "Id Pregunta: 9570. Ley 59/2003, art&iacute;culo 34";


//  Id pregunta: 9582 AÃ±o de creación de pregunta: 2013-01-01
 questions[94]= "95)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[94]= new Array();
 choices[94][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[94][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[94][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[94][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[94] = choices[94][1];
 units[94] = "43, 74";
 comments[94] = "Id Pregunta: 9582. Examen TIC A1 2011";


//  Id pregunta: 9584 AÃ±o de creación de pregunta: 2013-01-01
 questions[95]= "96)  Los certificados incorporados al DNI-e:";
 choices[95]= new Array();
 choices[95][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[95][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[95][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[95][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[95] = choices[95][3];
 units[95] = "43, 74";
 comments[95] = "Id Pregunta: 9584. Examen TIC A1 2011";


//  Id pregunta: 9590 AÃ±o de creación de pregunta: 2013-01-01
 questions[96]= "97)  Seg&uacute;n se dispone en la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, los registros electr&oacute;nicos permitir&aacute;n la presentaci&oacute;n de solicitudes:";
 choices[96]= new Array();
 choices[96][0] = "Exclusivamente en los mismos horarios que los registros presenciales.";
 choices[96][1] = "Exclusivamente los d&iacute;as laborables del a&ntilde;o, durante las 24 horas. ";
 choices[96][2] = "Todos los d&iacute;as del a&ntilde;o, durante las 24 horas. ";
 choices[96][3] = "Exclusivamente los d&iacute;as h&aacute;biles del a&ntilde;o, durante las 24 horas.";
 answers[96] = choices[96][2];
 units[96] = "43";
 comments[96] = "Id Pregunta: 9590. Examen TIC A2 2011 interna";


//  Id pregunta: 9593 AÃ±o de creación de pregunta: 2013-01-01
 questions[97]= "98)  El Real Decreto 1671/2009, por el que se desarrolla parcialmente la Ley 11/2007, establece el contenido m&iacute;nimo de las sedes electr&oacute;nicas. Entre dicho contenido m&iacute;nimo est&aacute;:";
 choices[97]= new Array();
 choices[97][0] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas.";
 choices[97][1] = "Identificaci&oacute;n de la direcci&oacute;n electr&oacute;nica del responsable t&eacute;cnico de la sede.";
 choices[97][2] = "&Aacute;mbito de aplicaci&oacute;n de la sede, que no podr&aacute; ser la totalidad del Ministerio u organismo p&uacute;blico.";
 choices[97][3] = "Identificaci&oacute;n de los canales de acceso a los servicios disponibles en la sede, los cuales no podr&aacute;n tratarse, en ning&uacute;n caso, de tel&eacute;fonos y oficinas, sino de canales exclusivamente electr&oacute;nicos. ";
 answers[97] = choices[97][0];
 units[97] = "43";
 comments[97] = "Id Pregunta: 9593. Examen TIC A2 2011 interna";


//  Id pregunta: 9594 AÃ±o de creación de pregunta: 2013-01-01
 questions[98]= "99)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[98]= new Array();
 choices[98][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir accedera los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[98][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir accedera los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[98][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[98][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[98] = choices[98][0];
 units[98] = "59";
 comments[98] = "Id Pregunta: 9594. Xunta Libre 2011";


//  Id pregunta: 9595 AÃ±o de creación de pregunta: 2013-01-01
 questions[99]= "100)  Para el concepto de struts, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[99]= new Array();
 choices[99][0] = "Struts es un framework que se basa en el patr&oacute;n MVC (Model View Controller) ";
 choices[99][1] = "Struts es un framework que se basa en la tecnolog&iacute;a JSF (Java Server Faces)";
 choices[99][2] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas .NET";
 choices[99][3] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas JEE ";
 answers[99] = choices[99][0];
 units[99] = "60";
 comments[99] = "Id Pregunta: 9595. Xunta Libre 2011";


