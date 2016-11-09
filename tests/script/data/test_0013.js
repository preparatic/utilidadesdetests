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

//  Id pregunta: 119 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Dentro de las t&eacute;cnicas de ayuda a la toma grupal de decisiones, una de las m&aacute;s destacadas es la:";
 choices[0]= new Array();
 choices[0][0] = "Programaci&oacute;n lineal";
 choices[0][1] = "T&eacute;cnica Delphi";
 choices[0][2] = "Teor&iacute;a de la probabilidad";
 choices[0][3] = "T&eacute;cnica de normalizaci&oacute;n de grupo";
 answers[0] = choices[0][1];
 units[0] = "23";
 comments[0] = "Id Pregunta: 119. NULL";


//  Id pregunta: 191 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En relaci&oacute;n a la protecci&oacute;n jur&iacute;dica de los programas de ordenador se&ntilde;arlar la respuesta falsa:";
 choices[1]= new Array();
 choices[1][0] = "Est&aacute; protegidos mediante los derechos de autor cualquier forma de expresi&oacute;n de un programa de ordenador, salvo aquellas creadas con el fin de ocasionar efectos nocivos a un sistema inform&aacute;tico";
 choices[1][1] = "Est&aacute;n protegidos mediante los derechos de autor las ideas y principios en los que se base un programa, incluidos los que sirven de fundamento a sus interfaces";
 choices[1][2] = "La primera venta de una copia de un programa por el titular de los derechos o con su consentimiento, agotar&aacute; el derecho de distribuci&oacute;n de dicha copia";
 choices[1][3] = "La duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador ser&aacute;: para una persona natural toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte; para una persona jur&iacute;dica 70 a&ntilde;os";
 answers[1] = choices[1][1];
 units[1] = "36";
 comments[1] = "Id Pregunta: 191. Similar a examen TIC SS A 2003";


//  Id pregunta: 192 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponde con una soluci&oacute;n ERP (Enterprise Resource Planning)?";
 choices[2]= new Array();
 choices[2][0] = "Alto grado de modularidad";
 choices[2][1] = "Homogeneizaci&oacute;n de Procesos Corporativos";
 choices[2][2] = "Facilidad de implementaci&oacute;n en corto plazo";
 choices[2][3] = "Integraci&oacute;n total de &aacute;reas organizativas";
 answers[2] = choices[2][2];
 units[2] = "21";
 comments[2] = "Id Pregunta: 192. Examen TIC MAP B 2004";


//  Id pregunta: 201 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes estandares de directorios guarda relaci&oacute;n con la descripci&oacute;n de servicios de usuario?";
 choices[3]= new Array();
 choices[3][0] = "x.500";
 choices[3][1] = "x.501";
 choices[3][2] = "x.509";
 choices[3][3] = "x.511";
 answers[3] = choices[3][3];
 units[3] = "42";
 comments[3] = "Id Pregunta: 201. Examen Julio 2003";


//  Id pregunta: 523 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  En relaci&oacute;n con el control de riesgos, &iquest;Qu&eacute;  funci&oacute;n debe estar segregada de la de administrador de sistemas?";
 choices[4]= new Array();
 choices[4][0] = "Administrador de seguridad";
 choices[4][1] = "Administrador de red";
 choices[4][2] = "Aseguramiento de calidad";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][2];
 units[4] = "31, 32, 33";
 comments[4] = "Id Pregunta: 523. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 564 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  En las organizaciones basadas en la informaci&oacute;n, los informes";
 choices[5]= new Array();
 choices[5][0] = "No ser&aacute;n necesarios dado que el control vendr&aacute; implicito en los propios sistemas";
 choices[5][1] = "Los mandos intermedios tendr&aacute;n la oportunidad de realizar informes m&aacute;s fiables";
 choices[5][2] = "Los mandos intermedios podr&aacute;n proporcionar datos m&aacute;s fiables  y exactos";
 choices[5][3] = "permitir&aacute;n avanzar en los aspectos de creatividad, motivaci&oacute;n y calidad.";
 answers[5] = choices[5][3];
 units[5] = "22";
 comments[5] = "Id Pregunta: 564. ";


//  Id pregunta: 1006 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El concepto de adware implica que:";
 choices[6]= new Array();
 choices[6][0] = "Normalmente no existe coste por ser un a&ntilde;adido sencillo a otro software ya existente";
 choices[6][1] = "Es un software que se vende a empresas de publicidad para que &eacute;stas puedan usarlo en sus campa&ntilde;as de lanzamiento de productos";
 choices[6][2] = "Es un parche que se puede descargar f&aacute;cilmente de la web normalmente para solucionar fallos puntuales de funcionamiento de programas de pago";
 choices[6][3] = "Es un software cuyo &uacute;nico coste de adquisici&oacute;n es 'soportar' la inclusi&oacute;n de banners y pop-ups publicitarios cada vez que se ejecute";
 answers[6] = choices[6][3];
 units[6] = "61";
 comments[6] = "Id Pregunta: 1006. ";


//  Id pregunta: 1103 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En Java, al declarar una variable de tipo array";
 choices[7]= new Array();
 choices[7][0] = "No es necesario indicar la longitud del objeto";
 choices[7][1] = "Es necesario indicar la longitud m&aacute;xima del objeto";
 choices[7][2] = "Es necesario indicar la longitud exacta del objeto";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = choices[7][0];
 units[7] = "60";
 comments[7] = "Id Pregunta: 1103. JCED - Preparatic XVII. Solo se debe indicar la long max de cada dimensi&oacute;n del array si no se asigna en ese momento.";


//  Id pregunta: 1324 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  SAMBA:";
 choices[8]= new Array();
 choices[8][0] = "Implementa los protocolos de los servidores de archivos Windows";
 choices[8][1] = "Permite que un servidor Unix sea controlador de dominio en una red Windows";
 choices[8][2] = "Permite la compartici&oacute;n de las colas de impresi&oacute;n Unix con Windows y viceversa";
 choices[8][3] = "Todas las anteriores respuestas son ciertas";
 answers[8] = choices[8][3];
 units[8] = "54";
 comments[8] = "Id Pregunta: 1324. NULL";


//  Id pregunta: 1516 AÃ±o de creación de pregunta: 2003-01-01
 questions[9]= "10)  &iquest;Sobre qu&eacute; versa el est&aacute;ndar PKCS7 de criptograf&iacute;a?";
 choices[9]= new Array();
 choices[9][0] = "Formato de certificado digital";
 choices[9][1] = "Formato de sobre digital";
 choices[9][2] = "Cifrado con clave privada";
 choices[9][3] = "Sintaxis de la clave privada";
 answers[9] = choices[9][1];
 units[9] = "74";
 comments[9] = "Id Pregunta: 1516. NULL";


//  Id pregunta: 1652 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  &iquest;Las siglas ADL qu&eacute; significan desde la perspectiva del e-learning?";
 choices[10]= new Array();
 choices[10][0] = "Advanced Distributed Learning";
 choices[10][1] = "Advanced Distanced Learning";
 choices[10][2] = "No tienen ning&uacute;n significado desde la perspectiva del e-learning";
 choices[10][3] = "Ninguna de las anteriores";
 answers[10] = choices[10][0];
 units[10] = "66";
 comments[10] = "Id Pregunta: 1652. ";


//  Id pregunta: 1751 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  Se&ntilde;alar el enunciado cierto, referente a la sem&aacute;ntica de las relaciones representadas en el model E/R";
 choices[11]= new Array();
 choices[11][0] = "El tipo de la relaci&oacute;n es el n&uacute;mero de entidades sobre las que se realiza la asociaci&oacute;n";
 choices[11][1] = "El grado se corresponde con el n&uacute;mero m&aacute;ximo de ocurrencias de una entidad asociado a una ocurrencia de otra o de la misma entidad a trav&eacute;s de una relaci&oacute;n";
 choices[11][2] = "La cardinalidad de una entidad se define como el n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias que pueden estar relacionadas con ocurrencias de otra entidad";
 choices[11][3] = "Todos los enunciados anteriores son ciertos";
 answers[11] = choices[11][2];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1751. ";


//  Id pregunta: 2024 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  En Programaci&oacute;n orientada a objetos, las relaciones de agregaci&oacute;n entre objetos son:";
 choices[12]= new Array();
 choices[12][0] = "Maneras de construir clases u objetos en t&eacute;rminos de otras clases u objetos.";
 choices[12][1] = "La forma de definir una clase u objeto como extensi&oacute;n de otra clase u objeto.";
 choices[12][2] = "Mecanismos para sobrecargar los m&eacute;todos de accesos a los objetos.";
 choices[12][3] = "S&oacute;lo posibles entre objetos monol&iacute;ticos.";
 answers[12] = choices[12][0];
 units[12] = "82,84";
 comments[12] = "Id Pregunta: 2024. Examen TIC MAP B 2004";


//  Id pregunta: 2114 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;A qu&eacute; se refieren las normas ISO 14000?";
 choices[13]= new Array();
 choices[13][0] = "A la calidad en los procesos productivos";
 choices[13][1] = "A la preservaci&oacute;n del medio ambiente en los procesos productivos";
 choices[13][2] = "A la documentaci&oacute;n del SW en las distintas etapas de un modelo en cascada";
 choices[13][3] = "A la ergonom&iacute;a de los puestos de trabajo";
 answers[13] = choices[13][1];
 units[13] = "92";
 comments[13] = "Id Pregunta: 2114. NULL";


//  Id pregunta: 2490 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Seg&uacute;n Roger S. Pressman, &iquest;cu&aacute;les de los siguientes principios son fundamentales en el an&aacute;lisis de requerimientos?:";
 choices[14]= new Array();
 choices[14][0] = "El dominio de la informaci&oacute;n";
 choices[14][1] = "La subdivisi&oacute;n del problema";
 choices[14][2] = "La representaci&oacute;n l&oacute;gica y f&iacute;sica del sistema";
 choices[14][3] = "Los tres anteriores";
 answers[14] = choices[14][3];
 units[14] = "78,80,81,82";
 comments[14] = "Id Pregunta: 2490. ";


//  Id pregunta: 2538 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Las herramientas CVS y RCS son:";
 choices[15]= new Array();
 choices[15][0] = "herramientas de gesti&oacute;n de contenidos.";
 choices[15][1] = "herramientas ofim&aacute;ticas de dise&ntilde;os gr&aacute;ficos.";
 choices[15][2] = "herramientas de control de versiones.";
 choices[15][3] = "herramientas de control de configuraci&oacute;n.";
 answers[15] = choices[15][2];
 units[15] = "90";
 comments[15] = "Id Pregunta: 2538. ";


//  Id pregunta: 2978 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  &iquest;Cu&aacute;s de los siguientes estandares de redes de &aacute;rea local se caracterizan por ir sobre 2 pares trenzados apantallados";
 choices[16]= new Array();
 choices[16][0] = "1000BaseLX";
 choices[16][1] = "1000BaseSX";
 choices[16][2] = "1000BaseCX";
 choices[16][3] = "1000BaseT";
 answers[16] = choices[16][2];
 units[16] = "101";
 comments[16] = "Id Pregunta: 2978. Examen Julio 2003";


//  Id pregunta: 3120 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;C&oacute;mo se comunican una sonda RMON y un agente RMON?:";
 choices[17]= new Array();
 choices[17][0] = "Mediante mensajes SNMP";
 choices[17][1] = "Mediante mensajes LAP-B";
 choices[17][2] = "Mediante mensajes CMIP";
 choices[17][3] = "Mediante Data Streams";
 answers[17] = choices[17][0];
 units[17] = "104";
 comments[17] = "Id Pregunta: 3120. ";


//  Id pregunta: 3467 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El punto de referencia S del modelo RDSI es:";
 choices[18]= new Array();
 choices[18][0] = "La interfaz para terminales anal&oacute;gicos";
 choices[18][1] = "La interfaz con la l&iacute;nea de transmisi&oacute;n hacia la central p&uacute;blica";
 choices[18][2] = "La interfaz a 4 hilos para equipos RDSI";
 choices[18][3] = "La separaci&oacute;n entre las instalaciones de usuario y los equipos de transmisi&oacute;n, cuando existe TR2";
 answers[18] = choices[18][2];
 units[18] = "103";
 comments[18] = "Id Pregunta: 3467. ";


//  Id pregunta: 4080 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  El teletrabajo por parte de un empleado de una empresa requiere un acceso";
 choices[19]= new Array();
 choices[19][0] = "a trav&eacute;s de su extranet, con los mecanismos de seguridad adecuados";
 choices[19][1] = "a su DMZ";
 choices[19][2] = "a su intranet";
 choices[19][3] = "requiere el establecimiento de un servidor VPN en el hogar del empleado";
 answers[19] = choices[19][2];
 units[19] = "113";
 comments[19] = "Id Pregunta: 4080. ";


//  Id pregunta: 4211 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo  .NET";
 choices[20]= new Array();
 choices[20][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios";
 choices[20][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes";
 choices[20][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos";
 choices[20][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos";
 answers[20] = choices[20][1];
 units[20] = "59,115";
 comments[20] = "Id Pregunta: 4211. ";


//  Id pregunta: 4219 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  El router es un dispositivo que se utiliza en la interconexi&oacute;n de redes y opera  seg&uacute;n el modelo OSI en el nivel de:";
 choices[21]= new Array();
 choices[21][0] = "transporte";
 choices[21][1] = "red";
 choices[21][2] = "f&iacute;sico";
 choices[21][3] = "enlace";
 answers[21] = choices[21][1];
 units[21] = "102";
 comments[21] = "Id Pregunta: 4219. ";


//  Id pregunta: 4344 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  De entre los siguientes, &iquest;cu&aacute;l no es uno de los servicios de certificaci&oacute;n ofrecidos actualmente por la F&aacute;brica Nacional de Moneda y Timbre?:";
 choices[22]= new Array();
 choices[22][0] = "Fechado digital.";
 choices[22][1] = "Validaci&oacute;n on-line de certificados.";
 choices[22][2] = "Voto electr&oacute;nico en Juntas Generales de Sociedades";
 choices[22][3] = "Login &uacute;nico en sistemas Windows, Linux y Unix";
 answers[22] = choices[22][3];
 units[22] = "74";
 comments[22] = "Id Pregunta: 4344. NULL";


//  Id pregunta: 4366 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  La etiqueta en HTML para indicar el comienzo de una celda con datos en una tabla es:";
 choices[23]= new Array();
 choices[23][0] = "&lt;table&gt;";
 choices[23][1] = "&lt;tr&gt;";
 choices[23][2] = "&lt;th&gt;";
 choices[23][3] = "&lt;td&gt;";
 answers[23] = choices[23][3];
 units[23] = "69";
 comments[23] = "Id Pregunta: 4366. NULL";


//  Id pregunta: 4533 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  En java, &iquest;como se hace referencia al objeto actual sobre el que ha sido Ilamado el m&eacute;todo que se esta ejecutando?";
 choices[24]= new Array();
 choices[24][0] = "Con Ia referencia this.";
 choices[24][1] = "Con la referencia null.";
 choices[24][2] = "No es posible.";
 choices[24][3] = "Invocando el m&eacute;todo get.";
 answers[24] = choices[24][0];
 units[24] = "60";
 comments[24] = "Id Pregunta: 4533. NULL";


//  Id pregunta: 4907 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  En el &aacute;mbito de los sistemas operativos, entre los algoritmos de planificaci&oacute;n de procesos que utilizan &ldquo;quantum&rdquo; NO se incluye:";
 choices[25]= new Array();
 choices[25][0] = "Round Robin.";
 choices[25][1] = "Planificaci&oacute;n con colas de niveles m&uacute;ltiples.";
 choices[25][2] = "Planificaci&oacute;n con colas de retroalimentaci&oacute;n de niveles m&uacute;ltiples.";
 choices[25][3] = "Planificaci&oacute;n del tiempo restante m&aacute;s corto (SRT).";
 answers[25] = choices[25][3];
 units[25] = "52";
 comments[25] = "Id Pregunta: 4907. Examen TIC B 2007";


//  Id pregunta: 4939 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  El est&aacute;ndar que refiere la usabilidad como la capacidad de un software de ser comprendido, aprendido, usadoy ser atractivo para el usuario, en condiciones espec&iacute;ficas de uso es:";
 choices[26]= new Array();
 choices[26][0] = "RFC 2865";
 choices[26][1] = "ISO/IEC 9126";
 choices[26][2] = "ISO/IEC 9241";
 choices[26][3] = "RFC 2866";
 answers[26] = choices[26][1];
 units[26] = "39";
 comments[26] = "Id Pregunta: 4939. Examen TIC B 2007";


//  Id pregunta: 5825 AÃ±o de creación de pregunta: 2009-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA para el programa IDABC?";
 choices[27]= new Array();
 choices[27][0] = "Es gestionado por el Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE)";
 choices[27][1] = "Se configura como el instrumento clave para llevar a cabo lo previsto en el Plan de Acci&oacute;n eEurope 2005 y sucesivos sobre el desarrollo de servicios paneuropeos";
 choices[27][2] = "Ejecuta lo previsto en la Decisi&oacute;n 2004/387/CE del Consejo UE y PE";
 choices[27][3] = "El proyecto complementario IDABD extiende esta normativa a particulares y empresas";
 answers[27] = choices[27][3];
 units[27] = "40";
 comments[27] = "Id Pregunta: 5825. MAP 2008 A1";


//  Id pregunta: 5998 AÃ±o de creación de pregunta: 2010-01-01
 questions[28]= "29)  El Plan Estrat&eacute;gico Inform&aacute;tico Departamental debe ser elaborado por:";
 choices[28]= new Array();
 choices[28][0] = "La Subsecretar&iacute;a.";
 choices[28][1] = "La Comisi&oacute;n Ministerial de Administraci&oacute;n Electr&oacute;nica.";
 choices[28][2] = "Las Unidades de Inform&aacute;tica del Ministerio.";
 choices[28][3] = "El Subdirector General de Inform&aacute;tica.";
 answers[28] = choices[28][1];
 units[28] = "77";
 comments[28] = "Id Pregunta: 5998. TIC A 2009";


//  Id pregunta: 6077 AÃ±o de creación de pregunta: 2010-01-01
 questions[29]= "30)  &iquest;En qu&eacute; fase del proyecto es mayor el nivel de coste y de personal?";
 choices[29]= new Array();
 choices[29][0] = "Al inicio del proyecto.";
 choices[29][1] = "Al final del proyecto.";
 choices[29][2] = "En las fases intermedias del proyecto.";
 choices[29][3] = "Tanto el coste como el personal debe ser homog&eacute;neo a lo largo del proyecto.";
 answers[29] = choices[29][2];
 units[29] = "27";
 comments[29] = "Id Pregunta: 6077. ";


//  Id pregunta: 6241 AÃ±o de creación de pregunta: 2010-01-01
 questions[30]= "31)  De acuerdo a la terminolog&iacute;a adoptada por el IEEE, la transformaci&oacute;n de una forma de representaci&oacute;n del sistema en otra distinta, pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema, es la definici&oacute;n de:";
 choices[30]= new Array();
 choices[30][0] = "Ingenier&iacute;a hacia delante.";
 choices[30][1] = "Reestructuraci&oacute;n.";
 choices[30][2] = "Reingenier&iacute;a.";
 choices[30][3] = "Ingenier&iacute;a inversa.";
 answers[30] = choices[30][1];
 units[30] = "91";
 comments[30] = "Id Pregunta: 6241. TIC B-2009, bloque desarrollo";


//  Id pregunta: 6339 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes nombres no est&aacute;n relaiconados con una soluci&oacute;n ERP?";
 choices[31]= new Array();
 choices[31][0] = "Oracle Financials";
 choices[31][1] = "SAP";
 choices[31][2] = "IBM Websphere";
 choices[31][3] = "META4";
 answers[31] = choices[31][2];
 units[31] = "65";
 comments[31] = "Id Pregunta: 6339. ";


//  Id pregunta: 6460 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  Respecto a los contratos celebrados por v&iacute;a electr&oacute;nica &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[32]= new Array();
 choices[32][0] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos";
 choices[32][1] = "Las partes podr&aacute;n pactar que un tercero archive las declaraciones de voluntad que integran los contratos electr&oacute;nicos por un per&iacute;odo inferior a tres a&ntilde;os";
 choices[32][2] = "Siempre que la Ley exija que el contrato o cualquier informaci&oacute;n relacionada con el mismo conste por escrito esta deber&aacute; enviarse por correo ordinario al contratante";
 choices[32][3] = "El soporte electr&oacute;nico en que conste un contrato celebrado por v&iacute;a electr&oacute;nica ser&aacute; admisible en juicio como prueba documental";
 answers[32] = choices[32][3];
 units[32] = "30";
 comments[32] = "Id Pregunta: 6460. Castilla La Mancha 2009 (Ley 34/2002, art&iacute;culo 24)";


//  Id pregunta: 6559 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  CSMA (Acceso M&uacute;ltiple por divisi&oacute;n de c&oacute;digo) no se caracteriza por:";
 choices[33]= new Array();
 choices[33][0] = "Ancho de banda menor a los sistemas TDMA";
 choices[33][1] = "Ancho de banda mayor a los sistemas TDMA";
 choices[33][2] = "Se puede reutilizar la misma portadora en todas las c&eacute;lulas, sean adyacentes o no";
 choices[33][3] = "M&uacute;ltiples usuarios pueden transmitir de manera concurrente sobre el mismo radiocanal";
 answers[33] = choices[33][0];
 units[33] = "108";
 comments[33] = "Id Pregunta: 6559. NULL";


//  Id pregunta: 7279 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  Una maqueta virtual se puede definir como ";
 choices[34]= new Array();
 choices[34][0] = "Un programa inform&aacute;tico que simula el funcionamiento de un terminal de un ordenador central ";
 choices[34][1] = "Un prototipo de aplicaci&oacute;n";
 choices[34][2] = "Un tipo de virtualizaci&oacute;n de servidor";
 choices[34][3] = "Un servidor de terminales";
 answers[34] = choices[34][0];
 units[34] = "119";
 comments[34] = "Id Pregunta: 7279. NULL";


//  Id pregunta: 8293 AÃ±o de creación de pregunta: 2011-01-01
 questions[35]= "36)  Entre las diferencias en los protocolos IPv4 e IPv6 NO se encuentra que:";
 choices[35]= new Array();
 choices[35][0] = "La implementaci&oacute;n del multicast es obligatoria en IPv6 y opcional en IPv4.";
 choices[35][1] = "MTU m&iacute;nimo de IPv6 es de 1280 bytes frente a los 576 bytes de IPv4.";
 choices[35][2] = "El encabezado de IPv6 sin opciones es menor que el encabezado de IPv4 sin opciones.";
 choices[35][3] = "El soporte para IPsec es obligatorio en IPv6 y opcional en IPv4.";
 answers[35] = choices[35][2];
 units[35] = "100";
 comments[35] = "Id Pregunta: 8293. Examen TIC A2 2010";


//  Id pregunta: 8376 AÃ±o de creación de pregunta: 2011-01-01
 questions[36]= "37)  Se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una herramienta de benchmarking de aplicaciones web: ";
 choices[36]= new Array();
 choices[36][0] = "JMeter.";
 choices[36][1] = "OpenSTA.";
 choices[36][2] = "ApacheBench.";
 choices[36][3] = "Junit.";
 answers[36] = choices[36][3];
 units[36] = "112";
 comments[36] = "Id Pregunta: 8376. Examen TIC A2 2010";


//  Id pregunta: 8508 AÃ±o de creación de pregunta: 2011-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes elementos de VoiceXML v2.0 captura un evento de ayuda? ";
 choices[37]= new Array();
 choices[37][0] = "&lt;catch&gt; ";
 choices[37][1] = "&lt;help&gt; ";
 choices[37][2] = "&lt;field&gt; ";
 choices[37][3] = "&lt;record&gt; ";
 answers[37] = choices[37][1];
 units[37] = "94";
 comments[37] = "Id Pregunta: 8508. Examen TIC A2 2010";


//  Id pregunta: 8517 AÃ±o de creación de pregunta: 2011-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al Modelo Conceptual de Procesos?";
 choices[38]= new Array();
 choices[38][0] = "El Diccionario de Datos.";
 choices[38][1] = "El Diagrama de Flujo de Datos.";
 choices[38][2] = "Las especificaciones de procesos.";
 choices[38][3] = "El Diagrama Entidad Relaci&oacute;n.";
 answers[38] = choices[38][3];
 units[38] = "86";
 comments[38] = "Id Pregunta: 8517. Examen TIC A2 2010 interna";


//  Id pregunta: 8635 AÃ±o de creación de pregunta: 2011-01-01
 questions[39]= "40)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[39]= new Array();
 choices[39][0] = "Diagrama de Extrapolaci&oacute;n";
 choices[39][1] = "PERT";
 choices[39][2] = "CPM";
 choices[39][3] = "El histograma de recursos";
 answers[39] = choices[39][0];
 units[39] = "28";
 comments[39] = "Id Pregunta: 8635. Examen TIC A2 2010 interna";


//  Id pregunta: 8657 AÃ±o de creación de pregunta: 2011-01-01
 questions[40]= "41)  La codificaci&oacute;n Manchester-Diferencial se utiliza en:";
 choices[40]= new Array();
 choices[40][0] = "Firma digital";
 choices[40][1] = "Modulaci&oacute;n de se&ntilde;ales";
 choices[40][2] = "T&eacute;cnicas criptogr&aacute;ficas";
 choices[40][3] = "Seguridad Wi-Fi";
 answers[40] = choices[40][1];
 units[40] = "99, 101";
 comments[40] = "Id Pregunta: 8657. Examen UPM A2 2011";


//  Id pregunta: 8734 AÃ±o de creación de pregunta: 2011-01-01
 questions[41]= "42)  La protecci&oacute;n de datos personales encuentra una de sus bases en:";
 choices[41]= new Array();
 choices[41][0] = "&Uacute;nicamente en la legislaci&oacute;n espa&ntilde;ola, en concreto, en Ley Org&aacute;nica 15/1999 de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal (LOPD).";
 choices[41][1] = "&Uacute;nicamente en la legislaci&oacute;n espa&ntilde;ola, inici&aacute;ndose en la Ley Org&aacute;nica 5/1992, de 29 de octubre, de Regulaci&oacute;n del Tratamiento Automatizado de Datos de car&aacute;cter personal (LORTAD)";
 choices[41][2] = "La Carta Europea de Derechos Fundamentales de la Uni&oacute;n Europea, por la que se reconoce el derecho a la protecci&oacute;n de datos personales como un derecho fundamental.";
 choices[41][3] = "La protecci&oacute;n de los derechos de autor en el mundo digital, en tanto el autor sea una persona f&iacute;sica";
 answers[41] = choices[41][2];
 units[41] = "29";
 comments[41] = "Id Pregunta: 8734. Examen TIC A2 2010 interna";


//  Id pregunta: 8803 AÃ±o de creación de pregunta: 2011-01-01
 questions[42]= "43)  En el contexto de la Web 2.0, a la p&aacute;gina Web o aplicaci&oacute;n que usa o combina datos, presentaciones y funcionalidad procedentes de una o m&aacute;s fuentes para crear nuevos servicios, se conoce como";
 choices[42]= new Array();
 choices[42][0] = "folcsonom&iacute;a";
 choices[42][1] = "mashup";
 choices[42][2] = "podcast";
 choices[42][3] = "Wiki";
 answers[42] = choices[42][1];
 units[42] = "120";
 comments[42] = "Id Pregunta: 8803. Examen UPM A2 2011";


//  Id pregunta: 8881 AÃ±o de creación de pregunta: 2011-01-01
 questions[43]= "44)  ODBC son las siglas de:";
 choices[43]= new Array();
 choices[43][0] = "Open DataBase Consortium";
 choices[43][1] = "Open Data Business Connectivity";
 choices[43][2] = "Open DataBase Connectivity";
 choices[43][3] = "Object DataBase Consortium";
 answers[43] = choices[43][2];
 units[43] = "57, 58";
 comments[43] = "Id Pregunta: 8881. Examen UPM A2 2011";


//  Id pregunta: 8899 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  Se&ntilde;ale cu&aacute;l de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas";
 choices[44]= new Array();
 choices[44][0] = "M&eacute;todo de la ponderaci&oacute;n lineal";
 choices[44][1] = "M&eacute;todo de TOPSIS";
 choices[44][2] = "M&eacute;todo Delphi";
 choices[44][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[44] = choices[44][2];
 units[44] = "34";
 comments[44] = "Id Pregunta: 8899. ";


//  Id pregunta: 8923 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  Cuando un antivirus utiliza t&eacute;cnicas heur&iacute;sticas significa que:";
 choices[45]= new Array();
 choices[45][0] = "monitoriza continuamente el sistema para detectar amenazas.";
 choices[45][1] = "puede eliminar troyanos y rootkits sin da&ntilde;ar el sistema.";
 choices[45][2] = "puede reconocer c&oacute;digos maliciosos aunque no se encuentren en su base de datos.";
 choices[45][3] = "interroga a otros equipos de confianza para obtener informaci&oacute;n sobre los ficheros";
 answers[45] = choices[45][2];
 units[45] = "63";
 comments[45] = "Id Pregunta: 8923. Operador Ayto. Madrid 2010";


//  Id pregunta: 8969 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  Entre las m&eacute;tricas de Calidad para sistemas orientados a objetos se encuentran MDOO &iquest;cu&aacute;l de los siguientes no es un factor que la compongan?";
 choices[46]= new Array();
 choices[46][0] = "Factor de polimorfismo";
 choices[46][1] = "Factor de acoplamiento";
 choices[46][2] = "Factor de herencia de m&eacute;todos";
 choices[46][3] = "Factor de cohesi&oacute;n";
 answers[46] = choices[46][3];
 units[46] = "88";
 comments[46] = "Id Pregunta: 8969. NULL";


//  Id pregunta: 9081 AÃ±o de creación de pregunta: 2013-01-01
 questions[47]= "48)  Indique cu&aacute;l es el n&uacute;mero de protocolo para IPv6";
 choices[47]= new Array();
 choices[47][0] = "17";
 choices[47][1] = "41";
 choices[47][2] = "47";
 choices[47][3] = "50";
 answers[47] = choices[47][1];
 units[47] = "111";
 comments[47] = "Id Pregunta: 9081. Consultar en wikipedia List_of_IP_protocol_numbers";


//  Id pregunta: 9152 AÃ±o de creación de pregunta: 2013-01-01
 questions[48]= "49)  Respecto a los LMS, indique la respuesta FALSA: ";
 choices[48]= new Array();
 choices[48][0] = "Permite el an&aacute;lisis de los resultados de la formaci&oacute;n";
 choices[48][1] = "Incluye funciones de gesti&oacute;n de procesos de creaci&oacute;n de contenido";
 choices[48][2] = "Permite el intercambio de datos entre profesores y alumnos";
 choices[48][3] = "Est&aacute; dedicado a la difusi&oacute;n de los contenidos docentes";
 answers[48] = choices[48][1];
 units[48] = "66";
 comments[48] = "Id Pregunta: 9152. ";


//  Id pregunta: 9179 AÃ±o de creación de pregunta: 2013-01-01
 questions[49]= "50)  Indique la afirmaci&oacute;n FALSA:";
 choices[49]= new Array();
 choices[49][0] = "La luz acrom&aacute;tica es aquella cuyo &uacute;nico atributo visible es la intensidad";
 choices[49][1] = "Los colores secundarios cian, magenta y amarillo se consideran combinaci&oacute;n de los tres colores primarios ";
 choices[49][2] = "La percepci&oacute;n del color por el sistema visual humano se caracteriza por los par&aacute;metros: brillo, matiz y croma o saturaci&oacute;n.";
 choices[49][3] = "La intensidad se describe en t&eacute;rminos de radiancia, luminancia y brillo.";
 answers[49] = choices[49][1];
 units[49] = "93";
 comments[49] = "Id Pregunta: 9179. NULL";


//  Id pregunta: 9184 AÃ±o de creación de pregunta: 2013-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes es un Proceso Principal de M&eacute;trica 3?";
 choices[50]= new Array();
 choices[50][0] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[50][1] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[50][2] = "Estudio de Viabilidad del Sistema";
 choices[50][3] = "Ninguno";
 answers[50] = choices[50][0];
 units[50] = "86";
 comments[50] = "Id Pregunta: 9184. NULL";


//  Id pregunta: 9202 AÃ±o de creación de pregunta: 2013-01-01
 questions[51]= "52)  &iquest;De los siguientes cual no forma parte del ciclo de vida de los derechos digitales?";
 choices[51]= new Array();
 choices[51][0] = "Empaquetado.";
 choices[51][1] = "Envio.";
 choices[51][2] = "Protecci&oacute;n y venta.";
 choices[51][3] = "Consumo.";
 answers[51] = choices[51][1];
 units[51] = "37";
 comments[51] = "Id Pregunta: 9202. ";


//  Id pregunta: 9344 AÃ±o de creación de pregunta: 2013-01-01
 questions[52]= "53)  El programa ISA contempla una serie de grupos de acciones o &ldquo;clusters&rdquo;. Entre ellos NO se encuentra:";
 choices[52]= new Array();
 choices[52][0] = "Intercambio de Informaci&oacute;n segura";
 choices[52][1] = "Arquitectura de Interoperabilidad";
 choices[52][2] = "Evaluaci&oacute;n de las implicaciones TIC de la nueva legislaci&oacute;n europea.";
 choices[52][3] = "Despliegue de redes de nueva generaci&oacute;n";
 answers[52] = choices[52][0];
 units[52] = "103";
 comments[52] = "Id Pregunta: 9344. Fuente: http://ec.europa.eu/isa/actions/index_en.htm";


//  Id pregunta: 9525 AÃ±o de creación de pregunta: 2013-01-01
 questions[53]= "54)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.245:";
 choices[53]= new Array();
 choices[53][0] = "Es un protocolo para el control multimedia de las llamadas";
 choices[53][1] = "S&oacute;lo lo utiliza el protocolo H.323";
 choices[53][2] = "A parte del protocolo H.323, lo utilizan otros protocolos (como por ejemplo el protocolo H.234)";
 choices[53][3] = "Es un protocolo de gesti&oacute;n y control";
 answers[53] = choices[53][1];
 units[53] = "117";
 comments[53] = "Id Pregunta: 9525. NULL";


//  Id pregunta: 9659 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  &iquest;Qu&eacute; modelo de evaluaci&oacute;n de procesos SW es certificable?";
 choices[54]= new Array();
 choices[54][0] = "CMM";
 choices[54][1] = "CMMI Escalonado";
 choices[54][2] = "CMMI Continuo";
 choices[54][3] = "Ninguno de los anteriores";
 answers[54] = choices[54][0];
 units[54] = "87";
 comments[54] = "Id Pregunta: 9659. NULL";


//  Id pregunta: 9662 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes es una fase de un brainstorming?";
 choices[55]= new Array();
 choices[55][0] = "Preparaci&oacute;n";
 choices[55][1] = "Generaci&oacute;n";
 choices[55][2] = "Consolidaci&oacute;n";
 choices[55][3] = "Todas las anteriores";
 answers[55] = choices[55][3];
 units[55] = "78";
 comments[55] = "Id Pregunta: 9662. ";


//  Id pregunta: 9670 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  La gesti&oacute;n NUMA:";
 choices[56]= new Array();
 choices[56][0] = "Significa Not Uniform Memory Access.";
 choices[56][1] = "Significa Not Unit of Memory Available.";
 choices[56][2] = "Implica que se introducen criterios de preferencia en el acceso a memoria compartida.";
 choices[56][3] = "La a) y la c)";
 answers[56] = choices[56][3];
 units[56] = "45";
 comments[56] = "Id Pregunta: 9670. ";


//  Id pregunta: 9711 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  La Norma ISO 9004:2009 establece una escala para evaluar la madurez del sistema de gesti&oacute;n de calidad para cada cap&iacute;tulo principal de la misma. Un nivel 3 de madurez se corresponde con un nivel de desempe&ntilde;o de,";
 choices[57]= new Array();
 choices[57][0] = "Aproximaci&oacute;n reactiva.";
 choices[57][1] = "&Eacute;nfasis en la mejora continua.";
 choices[57][2] = "Aproximaci&oacute;n del sistema formal estable.";
 choices[57][3] = "&quot;Desempe&ntilde;o de &quot;mejor de su clase&quot;.";
 answers[57] = choices[57][2];
 units[57] = "92";
 comments[57] = "Id Pregunta: 9711. Examen TIC-A1 2013";


//  Id pregunta: 9739 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes NO es un concepto clave asociado con casos de uso seg&uacute;n la definici&oacute;n de UML 2.4.1?";
 choices[58]= new Array();
 choices[58][0] = "Actors.";
 choices[58][1] = "Use cases.";
 choices[58][2] = "Subject.";
 choices[58][3] = "Scenario.";
 answers[58] = choices[58][3];
 units[58] = "82";
 comments[58] = "Id Pregunta: 9739. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9813 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  La t&eacute;cnica que permite solapar instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas se denomina:";
 choices[59]= new Array();
 choices[59][0] = "Parametrizaci&oacute;n.";
 choices[59][1] = "Segmentaci&oacute;n.";
 choices[59][2] = "Multiplexaci&oacute;n.";
 choices[59][3] = "Paginaci&oacute;n.";
 answers[59] = choices[59][1];
 units[59] = "52";
 comments[59] = "Id Pregunta: 9813. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9967 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  Seg&uacute;n la Workflow Management Coalition (WfMC) &iquest;cu&aacute;l de las siguientes funciones NO es caracter&iacute;stica de un Workflow?";
 choices[60]= new Array();
 choices[60][0] = "Funciones de Control de Procesos en Tiempo de ejecuci&oacute;n (Run-time Process Control Functions).";
 choices[60][1] = "Interacciones de Actividad en Tiempo de ejecuci&oacute;n (Run-time Activity Interactions).";
 choices[60][2] = "Distribuci&oacute;n e Interfaces del Sistema (Distribution &amp; System Interfaces).";
 choices[60][3] = "Lanzamiento de Procesos Programados (Scheduled Release Process).";
 answers[60] = choices[60][3];
 units[60] = "71";
 comments[60] = "Id Pregunta: 9967. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 10009 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  Los RFC de la IETF son";
 choices[61]= new Array();
 choices[61][0] = "peticiones de cambio (Request for Change) que proponen mejoras sobre protocolos en funcionamiento en Internet.";
 choices[61][1] = "notas t&eacute;cnicas que describen los protocolos utilizados en Internet.";
 choices[61][2] = "peticiones de comentarios a la comunidad de internautas sobre temas relacionados con Internet.";
 choices[61][3] = "las especificaciones formales de los protocolos para comunicaci&oacute;n remota (Remote Function Call).";
 answers[61] = choices[61][1];
 units[61] = "42";
 comments[61] = "Id Pregunta: 10009. ";


//  Id pregunta: 10027 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  Elija la respuesta correcta:";
 choices[62]= new Array();
 choices[62][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[62][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[62][2] = "El Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[62][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[62] = choices[62][0];
 units[62] = "115";
 comments[62] = "Id Pregunta: 10027. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10032 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  Si tenemos la siguiente direcci&oacute;n de broadcast 95.26.35.159, indicar a qu&eacute; subred pertenece.";
 choices[63]= new Array();
 choices[63][0] = "95.26.35.144/30 ";
 choices[63][1] = "95.26.35.144/29";
 choices[63][2] = "95.26.35.128/27 ";
 choices[63][3] = "95.26.35.128/25";
 answers[63] = choices[63][2];
 units[63] = "100";
 comments[63] = "Id Pregunta: 10032. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10082 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l NO es un proceso principal de acuerdo a la ISO 12207";
 choices[64]= new Array();
 choices[64][0] = "Adquisici&oacute;n";
 choices[64][1] = "Desarrollo";
 choices[64][2] = "Suministro";
 choices[64][3] = "Gesti&oacute;n";
 answers[64] = choices[64][3];
 units[64] = "76";
 comments[64] = "Id Pregunta: 10082. NULL";


//  Id pregunta: 10101 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  En el an&aacute;lisis estructurado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[65]= new Array();
 choices[65][0] = "El Diccionario de Datos suele estar orientado a los desarrolladores.";
 choices[65][1] = "El Diccionario de Datos suele estar orientado a los usuarios.";
 choices[65][2] = "El Directorio de Datos suele estar orientado a los desarrolladores.";
 choices[65][3] = "La b) y la c) son correctas.";
 answers[65] = choices[65][3];
 units[65] = "81";
 comments[65] = "Id Pregunta: 10101. NULL";


//  Id pregunta: 10107 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  En el m&eacute;todo de acceso al medio CSMA-p, el emisor:";
 choices[66]= new Array();
 choices[66][0] = "Env&iacute;a datos en cuanto los tiene disponibles.";
 choices[66][1] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre";
 choices[66][2] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad p";
 choices[66][3] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad 1-p";
 answers[66] = choices[66][2];
 units[66] = "101";
 comments[66] = "Id Pregunta: 10107. ";


//  Id pregunta: 10183 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  En el modelo E-R de Chen, las interrelaciones entre entidades se clasifican en unarias, binarias o n-arias en funci&oacute;n del:";
 choices[67]= new Array();
 choices[67][0] = "Grado";
 choices[67][1] = "Tipo de correspondencia";
 choices[67][2] = "Cardinalidad";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = choices[67][0];
 units[67] = "80";
 comments[67] = "Id Pregunta: 10183. ";


//  Id pregunta: 10247 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Pedro crea una librer&iacute;a (LibPeter) y la publica bajo licencia LGPL. FooCorp distribuye una versi&oacute;n modificada de la misma junto con su software propietario. &iquest;Cu&aacute;l de las siguientes no es una obligaci&oacute;n de FooCorp?";
 choices[68]= new Array();
 choices[68][0] = "FooCorp debe proveer un mecanismo para que su software propietario pueda enlazar con nuevas versiones de LibPeter";
 choices[68][1] = "FooCorp debe proveer el c&oacute;digo fuente completo de la versi&oacute;n modificada de LibPeter";
 choices[68][2] = "FooCorp debe comunicar todas sus modificaciones a LibPeter";
 choices[68][3] = "FooCorp debe publicar el c&oacute;digo fuente de su software propietario";
 answers[68] = choices[68][3];
 units[68] = "61";
 comments[68] = "Id Pregunta: 10247. ";


//  Id pregunta: 10290 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Indique cu&aacute;l de los siguientes NO es un mecanismo en la gesti&oacute;n de una SAN para incrementar la seguridad:";
 choices[69]= new Array();
 choices[69][0] = "Masking";
 choices[69][1] = "Cluning";
 choices[69][2] = "Zoning";
 choices[69][3] = "Port Binding";
 answers[69] = choices[69][1];
 units[69] = "48";
 comments[69] = "Id Pregunta: 10290. TIC A2, libre, examen 2013";


//  Id pregunta: 10297 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  En SNMP &iquest;qu&eacute; puerto utilizan las traps y en qu&eacute; sentido se transmiten?";
 choices[70]= new Array();
 choices[70][0] = "Puerto 162 y las env&iacute;a el agente al gestor.";
 choices[70][1] = "Puerto 162 y las env&iacute;a el gestor al agente.";
 choices[70][2] = "Puerto 161 y las env&iacute;a el agente al gestor.";
 choices[70][3] = "Puerto 161 y las env&iacute;a el gestor al agente.";
 answers[70] = choices[70][0];
 units[70] = "104";
 comments[70] = "Id Pregunta: 10297. TIC A2, libre, examen 2013";


//  Id pregunta: 10342 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta incorrecta:";
 choices[71]= new Array();
 choices[71][0] = "La protecci&oacute;n de un programa de ordenador comprende tambi&eacute;n su documentaci&oacute;n preparatoria, documentaci&oacute;n t&eacute;cnica y manuales de uso";
 choices[71][1] = "La protecci&oacute;n de un programa de ordenador se extiende a cualesquiera versiones sucesivas del programa, as&iacute; como a los programas derivados";
 choices[71][2] = "La protecci&oacute;n mediante los derechos de autor incluye las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador incluidos los que sirven de fundamento a sus interfaces";
 choices[71][3] = "Si un programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la Ley de Propiedad Industrial";
 answers[71] = choices[71][2];
 units[71] = "36";
 comments[71] = "Id Pregunta: 10342. Consultar Art. 96 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10460 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Respecto a JSON (Javascript Object Notation), indicar la respuesta incorrecta:";
 choices[72]= new Array();
 choices[72][0] = "Es una parte de la definici&oacute;n del est&aacute;ndar ECMA-262.";
 choices[72][1] = "Es una alternativa a XML en AJAX.";
 choices[72][2] = "Requiere analizadores sint&aacute;cticos complejos.";
 choices[72][3] = "Suele emplearse en entornos donde el tama&ntilde;o del flujo de datos entre cliente y servidor es importante.";
 answers[72] = choices[72][2];
 units[72] = "51";
 comments[72] = "Id Pregunta: 10460. NULL";


//  Id pregunta: 10493 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Qu&eacute; comando Linux permite conocer los archivos que tiene abiertos un proceso?";
 choices[73]= new Array();
 choices[73][0] = "ps -a";
 choices[73][1] = "top";
 choices[73][2] = "fork";
 choices[73][3] = "lsof";
 answers[73] = choices[73][3];
 units[73] = "53";
 comments[73] = "Id Pregunta: 10493. ps y top muestra informaci&oacute;n de los procesos, pero no de los archivos abiertos, solo lsof hace eso";


//  Id pregunta: 10513 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cual de los siguientes no es un tipo de tr&aacute;fico de ATM?";
 choices[74]= new Array();
 choices[74][0] = "UBR";
 choices[74][1] = "VBR";
 choices[74][2] = "SBR";
 choices[74][3] = "CBR";
 answers[74] = choices[74][2];
 units[74] = "109";
 comments[74] = "Id Pregunta: 10513. NULL";


//  Id pregunta: 10553 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes satisface una autenticaci&oacute;n de usuario de dos factores?";
 choices[75]= new Array();
 choices[75][0] = "Escaneo de iris y de huella dactilar";
 choices[75][1] = "Identificador de usuario y sistema GPS";
 choices[75][2] = "Smartcard que requiere un c&oacute;digo PIN";
 choices[75][3] = "Identificador de usuario m&aacute;s contrase&ntilde;a";
 answers[75] = choices[75][2];
 units[75] = "31, 32, 33";
 comments[75] = "Id Pregunta: 10553. Algo que  tienes (smartcard) + algo que conoces (c&oacute;digo PIN)";


//  Id pregunta: 10697 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  La Ley 39/2015:";
 choices[76]= new Array();
 choices[76][0] = "Estipula la creaci&oacute;n del Esquema Nacional de Seguridad y el Esquema Nacional de Interoperabilidad.";
 choices[76][1] = "Establece en alguno de sus apartados que deben considerarse las medidas del Esquema Nacional de Seguridad y Esquema Nacional de Interoperabilidad.";
 choices[76][2] = "Establece en alguno de sus apartados que deben considerarse las medidas del Esquema Nacional de Seguridad.";
 choices[76][3] = "No menciona ni el Esquema Nacional de Seguridad ni el Esquema Nacional de Interoperabilidad.";
 answers[76] = choices[76][1];
 units[76] = "30";
 comments[76] = "Id Pregunta: 10697. ";


//  Id pregunta: 10864 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes respuestas incluye un est&aacute;ndar correcto del proceso de software?";
 choices[77]= new Array();
 choices[77][0] = "IEEE 930:1998. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 choices[77][1] = "IEEE 29148:2011. Ingenier&iacute;a de Sistemas y Software - Procesos de ciclo de vida - Ingenier&iacute;a de requisitos.";
 choices[77][2] = "IEEE 1216:1987. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n del Dise&ntilde;o del Software.";
 choices[77][3] = "IEEE 830: 2004. Pr&aacute;cticas recomendadas para la Especificaci&oacute;n de Requisitos del Software (ERS).";
 answers[77] = choices[77][1];
 units[77] = "76, 78, 79";
 comments[77] = "Id Pregunta: 10864. Examen GSI 2014";


//  Id pregunta: 10885 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  El protocolo DHCP (Dynamic Host Configuration Protocol) y DHCPv6 (DHCP for IPv6) est&aacute;n definidos en los documentos:";
 choices[78]= new Array();
 choices[78][0] = "RFC 792 y RFC 4361, respectivamente.";
 choices[78][1] = "RFC 826 y RFC 3315, respectivamente.";
 choices[78][2] = "RFC 1034 y RFC 4361, respectivamente.";
 choices[78][3] = "RFC 2131 y RFC 3315, respectivamente.";
 answers[78] = choices[78][3];
 units[78] = "100";
 comments[78] = "Id Pregunta: 10885. Examen GSI 2014";


//  Id pregunta: 10998 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Respecto a HTML5, se&ntilde;ale la respuesta correcta:";
 choices[79]= new Array();
 choices[79][0] = "Su uso est&aacute; recomendado para el desarrollo web de los sitios de la Administraci&oacute;n General del Estado, siempre que no se incumpla la normativa de accesibilidad.";
 choices[79][1] = "En ning&uacute;n caso se recomienda el uso de HTML5 en el desarrollo web de los sitios de la Administraci&oacute;n General del Estado.";
 choices[79][2] = "Simplifica el desarrollo de sitios web porque elimina el uso de CSS (Cascading Style Sheets).";
 choices[79][3] = "No permite incluir v&iacute;deo de forma nativa, siendo necesario recurrir siempre a complementos (plugins) externos.";
 answers[79] = choices[79][0];
 units[79] = "69";
 comments[79] = "Id Pregunta: 10998. TIC A1 AGE 2014";


//  Id pregunta: 11026 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de los siguientes se corresponde con el Comit&eacute; T&eacute;cnico en el &aacute;mbito de las Tecnolog&iacute;as de la Informaci&oacute;n dentro de ISO?";
 choices[80]= new Array();
 choices[80][0] = "ISO/TC 1";
 choices[80][1] = "ISO/TC 2";
 choices[80][2] = "ISO/IEC JTC 1";
 choices[80][3] = "ISO/IEC JPC 2";
 answers[80] = choices[80][2];
 units[80] = "42";
 comments[80] = "Id Pregunta: 11026. ";


//  Id pregunta: 11043 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;En qu&eacute; patr&oacute;n de dise&ntilde;o est&aacute; basada la arquitectura de Swing?";
 choices[81]= new Array();
 choices[81][0] = "Modelo-Vista-Controlador (MVC)";
 choices[81][1] = "Singleton";
 choices[81][2] = "Observer";
 choices[81][3] = "Facade";
 answers[81] = choices[81][0];
 units[81] = "60";
 comments[81] = "Id Pregunta: 11043. ";


//  Id pregunta: 11099 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Seleccione la respuesta verdadera sobre la Agencia de Protecci&oacute;n de Datos";
 choices[82]= new Array();
 choices[82][0] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Interior";
 choices[82][1] = "Est&aacute; adscrita a la Ley General Presupuestaria pero no tiene dotaci&oacute;n presupuestaria propia.";
 choices[82][2] = "El Director de la AEPD es nombrado por un periodo de cuatro a&ntilde;os";
 choices[82][3] = "Est&aacute; sometida &uacute;nicamente al control interno por el Tribunal de Cuentas.";
 answers[82] = choices[82][2];
 units[82] = "29";
 comments[82] = "Id Pregunta: 11099. ";


//  Id pregunta: 11110 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Seleccione la opci&oacute;n que no indica un principio o pauta de las WCAG 2.0";
 choices[83]= new Array();
 choices[83][0] = "Comprensibilidad";
 choices[83][1] = "Sencillez";
 choices[83][2] = "Operabilidad";
 choices[83][3] = "Robustez";
 answers[83] = choices[83][1];
 units[83] = "39";
 comments[83] = "Id Pregunta: 11110. ";


//  Id pregunta: 11138 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes tipos de drivers interacciona con un Middleware que ser&aacute; el que convierta las peticiones JDBC en el protocolo espec&iacute;fico del SGBD?";
 choices[84]= new Array();
 choices[84][0] = "Native-Api Driver";
 choices[84][1] = "Network Protocol Driver";
 choices[84][2] = "Native Protocol Driver";
 choices[84][3] = "JDBC-OBDC Bridge";
 answers[84] = choices[84][1];
 units[84] = "58";
 comments[84] = "Id Pregunta: 11138. ";


//  Id pregunta: 11213 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;De qu&eacute; plan de la Agenda Digital Espa&ntilde;ola es fruto la Estrategia de Ciberseguridad?";
 choices[85]= new Array();
 choices[85][0] = "Plan de Desarrollo e Innovaci&oacute;n TIC";
 choices[85][1] = "Plan de Confianza en el &aacute;mbito Digital";
 choices[85][2] = "Plan de Seguridad Integral en las Comunicaciones TIC";
 choices[85][3] = "Plan de Aseguramiento de la Econom&iacute;a Digital y los Contenidos Digitales";
 answers[85] = choices[85][1];
 units[85] = "30";
 comments[85] = "Id Pregunta: 11213. ";


//  Id pregunta: 11233 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  El fichero Enterprise Archive (.ear) de empaquetado de aplicaciones web.";
 choices[86]= new Array();
 choices[86][0] = "Uno o m&aacute;s ficheros WAR.";
 choices[86][1] = "Uno o m&aacute;s ficheros JAR con las clases de la aplicaci&oacute;n.";
 choices[86][2] = "Un descriptor de despliegue de la aplicaci&oacute;n.";
 choices[86][3] = "Todas las respuestas son correctas.";
 answers[86] = choices[86][3];
 units[86] = "116";
 comments[86] = "Id Pregunta: 11233. ";


//  Id pregunta: 11361 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les son los beneficios de la Biblioteca Definitiva de Medios (DML)?:  1. Protecci&oacute;n l&oacute;gica del software y control de licencias; 2. Control del despliegue de las versiones autorizadas; 3. Protecci&oacute;n f&iacute;sica del software";
 choices[87]= new Array();
 choices[87][0] = "Solo 1 y 2";
 choices[87][1] = "Solo 2 y 3";
 choices[87][2] = "Todos";
 choices[87][3] = "Ninguno";
 answers[87] = choices[87][2];
 units[87] = "98";
 comments[87] = "Id Pregunta: 11361. ";


//  Id pregunta: 11365 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es responsable de registrar las relaciones entre los componentes del servicio?";
 choices[88]= new Array();
 choices[88][0] = "Gesti&oacute;n de niveles del servicio";
 choices[88][1] = "Gesti&oacute;n de porfolio de servicios";
 choices[88][2] = "Gesti&oacute;n de activos y configuraci&oacute;n del servicio (SACM)";
 choices[88][3] = "Gesti&oacute;n de incidencias";
 answers[88] = choices[88][2];
 units[88] = "98";
 comments[88] = "Id Pregunta: 11365. ";


//  Id pregunta: 11434 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seg&uacute;n el art&iacute;culo 47 de la ley 9/2014, se regular&aacute; mediante Real Decreto (seleccione la INCORRECTA):";
 choices[89]= new Array();
 choices[89][0] = "Derecho a resolver el contrato en cualquier momento.";
 choices[89][1] = "Derecho a figurar en las gu&iacute;as de abonado.";
 choices[89][2] = "Derecho al cambio de operador.";
 choices[89][3] = "Derecho a acceder a los servicios de emergencia de forma gratuita.";
 answers[89] = choices[89][1];
 units[89] = "110";
 comments[89] = "Id Pregunta: 11434. ";


//  Id pregunta: 11533 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale la respuesta correcta relativa a la seguridad en la parte de interfaz de usuario.";
 choices[90]= new Array();
 choices[90][0] = "Con Windows forms s&oacute;lo se tiene en cuenta la parte de seguridad basada en roles.";
 choices[90][1] = "Con Web forms s&oacute;lo se tiene en cuenta la parte de seguridad basada en c&oacute;digo";
 choices[90][2] = "Con Web forms se tiene en cuenta la seguridad basada en roles y en c&oacute;digo.";
 choices[90][3] = "Todas las anteriores son falsas.";
 answers[90] = choices[90][3];
 units[90] = "59";
 comments[90] = "Id Pregunta: 11533. NULL";


//  Id pregunta: 11534 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n la Ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio electr&oacute;nico, el procedimiento de cooperaci&oacute;n intracomunitario en el que se propone la realizaci&oacute;n de acciones urgentes contra un prestador de servicios de la sociedad de la informaci&oacute;n establecido en la U.E que haya incumplido alguno de los preceptos de la Ley, requiere notificaci&oacute;n al Consejo Europeo y al Estado Miembro en el que opera dicho Prestador en un Plazo M&Aacute;XIMO de:";
 choices[91]= new Array();
 choices[91][0] = "1 mes desde la adopci&oacute;n de las acciones urgentes.";
 choices[91][1] = "30 d&iacute;as desde la adopci&oacute;n de las acciones urgentes.";
 choices[91][2] = "15 d&iacute;as desde la adopci&oacute;n de acciones urgentes.";
 choices[91][3] = "Ninguna de las anteriores.";
 answers[91] = choices[91][2];
 units[91] = "70";
 comments[91] = "Id Pregunta: 11534. NULL";


//  Id pregunta: 11539 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la metodolog&iacute;a m&eacute;trica v3, &iquest;Cu&aacute;l de las siguientes funciones NO le correspondel al Jefe de Proyecto?";
 choices[92]= new Array();
 choices[92][0] = "Seleccionar la estrategia de desarrollo (modelo de ciclo de vida) y determinar los procesos, actividades y tareas que integran el proyecto (mapa de actividades).";
 choices[92][1] = "Ofrecer una opini&oacute;n experta relativa a los requisitos del negocio, t&eacute;cnicos y de usuario que han de tenerse en cuenta en el desarrollo del sistema de informaci&oacute;n.";
 choices[92][2] = "Estimar el esfuerzo necesario para llevar a cabo el proyecto.";
 choices[92][3] = "Le corresponden todas las funciones anteriores.";
 answers[92] = choices[92][1];
 units[92] = "86";
 comments[92] = "Id Pregunta: 11539. La B, son funciones propias del perfil consultor.";


//  Id pregunta: 11564 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En las redes m&oacute;viles 4G, LTE, el interfaz existente entre los eNodeB y la MME (entidad de gesti&oacute;n de la movilidad), se denomina:";
 choices[93]= new Array();
 choices[93][0] = "x2";
 choices[93][1] = "S1";
 choices[93][2] = "Um";
 choices[93][3] = "Abis";
 answers[93] = choices[93][0];
 units[93] = "108";
 comments[93] = "Id Pregunta: 11564. NULL";


//  Id pregunta: 11589 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n el Real Decreto Legislativo 3/2011, para una tramitaci&oacute;n de emergencia el plazo de inicio de la ejecuci&oacute;n no podr&aacute; ser superior a:";
 choices[94]= new Array();
 choices[94][0] = "10 d&iacute;as h&aacute;biles";
 choices[94][1] = "15 d&iacute;as h&aacute;biles";
 choices[94][2] = "15 d&iacute;as naturales";
 choices[94][3] = "1 mes";
 answers[94] = choices[94][3];
 units[94] = "41";
 comments[94] = "Id Pregunta: 11589. ";


//  Id pregunta: 11629 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Con respecto al DNIe 3.0, se&ntilde;ale la falsa:";
 choices[95]= new Array();
 choices[95][0] = "Hace uso de la tecnolog&iacute;a NFC.";
 choices[95][1] = "Se basa en comandos ISO 7816.";
 choices[95][2] = "No es posible utilizarlo con lectores de tarjetas inteligentes.";
 choices[95][3] = "Incorpora un chip m&aacute;s r&aacute;pido.";
 answers[95] = choices[95][2];
 units[95] = "74";
 comments[95] = "Id Pregunta: 11629. ";


//  Id pregunta: 11707 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los Caballos de Troya?";
 choices[96]= new Array();
 choices[96][0] = "Un caballo de troya proxy abre el puerto 21 en el sistema objetivo";
 choices[96][1] = "Un caballo de troya es dificil de detectar, porque detiene su ejecuci&oacute;n cuando la aplicaci&oacute;n que lo ejecut&oacute; se cierra.";
 choices[96][2] = "Un caballo de Troya puede cargarse en un virus o un gusano";
 choices[96][3] = "Un caballo de Troya FTP compromete el funcionamiento de cortafuegos";
 answers[96] = choices[96][2];
 units[96] = "111";
 comments[96] = "Id Pregunta: 11707. NULL";


//  Id pregunta: 11716 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cuantos mensajes se intercambian durante el proceso de terminaci&oacute;n de la sesi&oacute;n TCP entre el cliente y el servidor?";
 choices[97]= new Array();
 choices[97][0] = "2";
 choices[97][1] = "4";
 choices[97][2] = "6";
 choices[97][3] = "8";
 answers[97] = choices[97][1];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11716. NULL";


//  Id pregunta: 11724 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; protocolo de seguridad WLAN genera una nueva din&aacute;mica clave cada vez que un cliente establece una conexi&oacute;n con el punto de acceso?";
 choices[98]= new Array();
 choices[98][0] = "WEP";
 choices[98][1] = "PSK";
 choices[98][2] = "EAP";
 choices[98][3] = "WPA";
 answers[98] = choices[98][3];
 units[98] = "107";
 comments[98] = "Id Pregunta: 11724. NULL";


//  Id pregunta: 11726 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;C&oacute;mo se puede mejorar la cancelaci&oacute;n de campo magn&eacute;tico en cables UTP? ";
 choices[99]= new Array();
 choices[99][0] = "Aumentando el n&uacute;mero de vueltas en cada par de hilos ";
 choices[99][1] = "Disminuir el n&uacute;mero de cables que se utilizan para transportar datos";
 choices[99][2] = "Aumentando el espesor del recubrimiento de PVC que encierra todos los pares de hilo";
 choices[99][3] = "Aumentando el espesor de los hilos de cobre";
 answers[99] = choices[99][0];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11726. NULL";


