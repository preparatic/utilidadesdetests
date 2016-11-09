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

//  Id pregunta: 9616 AÃ±o de creación de pregunta: 2014-01-01
 questions[0]= "1)  &iquest;Desde qu&eacute; versi&oacute;n del SO Windows est&aacute; disponible la funcionalidad de bitlocker para USB?";
 choices[0]= new Array();
 choices[0][0] = "Windows XP";
 choices[0][1] = "Windows Vista";
 choices[0][2] = "Windows 7";
 choices[0][3] = "Windows 8";
 answers[0] = choices[0][2];
 units[0] = "56";
 comments[0] = "Id Pregunta: 9616. ";


//  Id pregunta: 9620 AÃ±o de creación de pregunta: 2014-01-01
 questions[1]= "2)  Las fibras (threads) en el SO Windows...";
 choices[1]= new Array();
 choices[1][0] = "Se ejecutan en modo usuario";
 choices[1][1] = "Usan multitarea preemptiva";
 choices[1][2] = "Usan multitarea colaborativa";
 choices[1][3] = "a) y c) son ciertas";
 answers[1] = choices[1][3];
 units[1] = "56";
 comments[1] = "Id Pregunta: 9620. ";


//  Id pregunta: 9622 AÃ±o de creación de pregunta: 2014-01-01
 questions[2]= "3)  &iquest;En qu&eacute; consisten los fallos de p&aacute;gina suaves?";
 choices[2]= new Array();
 choices[2][0] = "En actualizar la tabla de p&aacute;ginas";
 choices[2][1] = "En traer la p&aacute;gina del disco porque no se encuentra en memoria";
 choices[2][2] = "En modificar el bit de acceso de la p&aacute;gina";
 choices[2][3] = "En modificar el bit de &quot;p&aacute;gina sucia&quot;";
 answers[2] = choices[2][0];
 units[2] = "52";
 comments[2] = "Id Pregunta: 9622. ";


//  Id pregunta: 9631 AÃ±o de creación de pregunta: 2014-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[3]= new Array();
 choices[3][0] = "Metacity de GNOME ";
 choices[3][1] = "KWIN de KDE";
 choices[3][2] = "GTK de CDE";
 choices[3][3] = "Enlightenment de GNOME";
 answers[3] = choices[3][2];
 units[3] = "54";
 comments[3] = "Id Pregunta: 9631. Examen TIC A2 2013";


//  Id pregunta: 9633 AÃ±o de creación de pregunta: 2014-01-01
 questions[4]= "5)  En un sistema UNIX, &iquest;cu&aacute;l es la diferencia entre los ficheros /etc/passwd y /etc/shadow?";
 choices[4]= new Array();
 choices[4][0] = "/etc/shadow es una copia exacta del fichero /etc/password pero s&oacute;lo visible por root";
 choices[4][1] = "/etc/password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos";
 choices[4][2] = "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible s&oacute;lo por root";
 choices[4][3] = "/etc/passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios";
 answers[4] = choices[4][2];
 units[4] = "53";
 comments[4] = "Id Pregunta: 9633. Examen TIC A2 2013";


//  Id pregunta: 9649 AÃ±o de creación de pregunta: 2014-01-01
 questions[5]= "6)  FAN-IN es una medida de:";
 choices[5]= new Array();
 choices[5][0] = "Complejidad";
 choices[5][1] = "Reutilizaci&oacute;n";
 choices[5][2] = "Mantenibilidad";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = choices[5][1];
 units[5] = "89";
 comments[5] = "Id Pregunta: 9649. N&uacute;mero de clases que hacen uso de la clase que estamos estudiando.";


//  Id pregunta: 9658 AÃ±o de creación de pregunta: 2014-01-01
 questions[6]= "7)  &iquest;Qu&eacute; modelo  de calidad tiene como &aacute;mbito de aplicaci&oacute;n Software y Sistemas?";
 choices[6]= new Array();
 choices[6][0] = "CMMI";
 choices[6][1] = "ISO 9001";
 choices[6][2] = "ISO/IEC 15504 (SPICE) y CMMI";
 choices[6][3] = "Todos los anteriores";
 answers[6] = choices[6][2];
 units[6] = "87";
 comments[6] = "Id Pregunta: 9658. La ISO 9001 tiene un &aacute;mbito gen&eacute;rico, no s&oacute;lo Sotftware y Sistemas";


//  Id pregunta: 9662 AÃ±o de creación de pregunta: 2014-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes es una fase de un brainstorming?";
 choices[7]= new Array();
 choices[7][0] = "Preparaci&oacute;n";
 choices[7][1] = "Generaci&oacute;n";
 choices[7][2] = "Consolidaci&oacute;n";
 choices[7][3] = "Todas las anteriores";
 answers[7] = choices[7][3];
 units[7] = "78";
 comments[7] = "Id Pregunta: 9662. ";


//  Id pregunta: 9668 AÃ±o de creación de pregunta: 2014-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de la taxonom&iacute;a de Flynn se corresponden con una arquitectura monoprocesador?";
 choices[8]= new Array();
 choices[8][0] = "MISD y SISD";
 choices[8][1] = "SIMD y SISD";
 choices[8][2] = "MIMD y MISD";
 choices[8][3] = "SISD y MISD";
 answers[8] = choices[8][1];
 units[8] = "45";
 comments[8] = "Id Pregunta: 9668. ";


//  Id pregunta: 9670 AÃ±o de creación de pregunta: 2014-01-01
 questions[9]= "10)  La gesti&oacute;n NUMA:";
 choices[9]= new Array();
 choices[9][0] = "Significa Not Uniform Memory Access.";
 choices[9][1] = "Significa Not Unit of Memory Available.";
 choices[9][2] = "Implica que se introducen criterios de preferencia en el acceso a memoria compartida.";
 choices[9][3] = "La a) y la c)";
 answers[9] = choices[9][3];
 units[9] = "45";
 comments[9] = "Id Pregunta: 9670. ";


//  Id pregunta: 9677 AÃ±o de creación de pregunta: 2014-01-01
 questions[10]= "11)  Son est&aacute;ndares GIS:";
 choices[10]= new Array();
 choices[10][0] = "Para metadatos: FGDC Data Content Standard, ISO 19115 Metadatos, OpenGIS Catalog Service.";
 choices[10][1] = "Para servicio de entidades vectoriales: GML, Geography Markup Language (perfil de XML).";
 choices[10][2] = "Para Web Mapping: Open GIS Web Feature Service, ISO 19125 Simple Feature Access.";
 choices[10][3] = "Para protocolos de almacenamiento y transporte de informaci&oacute;n geogr&aacute;fica: OpenGIS Web Map Service (WMS).";
 answers[10] = choices[10][0];
 units[10] = "67";
 comments[10] = "Id Pregunta: 9677. NULL";


//  Id pregunta: 9679 AÃ±o de creación de pregunta: 2014-01-01
 questions[11]= "12)  En la comparaci&oacute;n en una proyecci&oacute;n Mercator del un &aacute;rea del Atl&aacute;ntico Norte, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[11]= new Array();
 choices[11][0] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n el c&iacute;rculo m&aacute;ximo terrestre o distancia m&aacute;s corta curva en el mapa.";
 choices[11][1] = "El rumbo ortodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[11][2] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[11][3] = "No existen tales conceptos en la proyecci&oacute;n de Mercator.";
 answers[11] = choices[11][2];
 units[11] = "67";
 comments[11] = "Id Pregunta: 9679. NULL";


//  Id pregunta: 9707 AÃ±o de creación de pregunta: 2014-01-01
 questions[12]= "13)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, indicar en qu&eacute; actividad se realiza la tarea &ldquo;Estudio de la Inversi&oacute;n&rdquo;.";
 choices[12]= new Array();
 choices[12][0] = "Estudio de Alternativas de Soluci&oacute;n.";
 choices[12][1] = "Definici&oacute;n de Requisitos del Sistema.";
 choices[12][2] = "Estudio de la Situaci&oacute;n Actual.";
 choices[12][3] = "Valoraci&oacute;n de las Alternativas.";
 answers[12] = choices[12][3];
 units[12] = "86";
 comments[12] = "Id Pregunta: 9707. Examen TIC-A1 2013";


//  Id pregunta: 9709 AÃ±o de creación de pregunta: 2014-01-01
 questions[13]= "14)  La programaci&oacute;n funcional limita el uso de";
 choices[13]= new Array();
 choices[13][0] = "estados mutables.";
 choices[13][1] = "expresiones lambda.";
 choices[13][2] = "procedimientos como par&aacute;metros.";
 choices[13][3] = "lenguajes como Erlang, F# o Scala.";
 answers[13] = choices[13][0];
 units[13] = "60";
 comments[13] = "Id Pregunta: 9709. Examen TIC-A1 2013";


//  Id pregunta: 9712 AÃ±o de creación de pregunta: 2014-01-01
 questions[14]= "15)  En el contexto de las redes de telecomunicaciones, SNMP";
 choices[14]= new Array();
 choices[14][0] = "es un protocolo de la capa de aplicaci&oacute;n que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[14][1] = "es el acr&oacute;nimo en ingl&eacute;s de Service Network Management Protocol.";
 choices[14][2] = "es un protocolo de la capa de transporte que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[14][3] = "son las siglas en ingl&eacute;s de Standard Network Management Protocol.";
 answers[14] = choices[14][0];
 units[14] = "106";
 comments[14] = "Id Pregunta: 9712. Examen TIC-A1 2013";


//  Id pregunta: 9729 AÃ±o de creación de pregunta: 2014-01-01
 questions[15]= "16)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un framework JAVA";
 choices[15]= new Array();
 choices[15][0] = "Bird.";
 choices[15][1] = "Hibernate.";
 choices[15][2] = "Maverick.";
 choices[15][3] = "Spring.";
 answers[15] = choices[15][0];
 units[15] = "61";
 comments[15] = "Id Pregunta: 9729. Examen TIC-A1 2013";


//  Id pregunta: 9738 AÃ±o de creación de pregunta: 2014-01-01
 questions[16]= "17)  Existen dos especificaciones complementarias que constituyen la especificaci&oacute;n completa del lenguaje de modelado UML 2.4.1. Estas especificaciones se denominan:";
 choices[16]= new Array();
 choices[16][0] = "Intrastructure e Hiperstructure.";
 choices[16][1] = "Basic y Complex.";
 choices[16][2] = "Infrastructure y Superstructure.";
 choices[16][3] = "Infrastructure y Substructure.";
 answers[16] = choices[16][2];
 units[16] = "82";
 comments[16] = "Id Pregunta: 9738. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9739 AÃ±o de creación de pregunta: 2014-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes NO es un concepto clave asociado con casos de uso seg&uacute;n la definici&oacute;n de UML 2.4.1?";
 choices[17]= new Array();
 choices[17][0] = "Actors.";
 choices[17][1] = "Use cases.";
 choices[17][2] = "Subject.";
 choices[17][3] = "Scenario.";
 answers[17] = choices[17][3];
 units[17] = "82";
 comments[17] = "Id Pregunta: 9739. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9773 AÃ±o de creación de pregunta: 2014-01-01
 questions[18]= "19)  Podremos almacenar un fichero de 6 GB en un dispositivo, si el sistema de ficheros con el que est&aacute; formateado es:";
 choices[18]= new Array();
 choices[18][0] = "FAT32.";
 choices[18][1] = "NTFS. ";
 choices[18][2] = "HPFS";
 choices[18][3] = "ISO 9660:1988 Level 2. ";
 answers[18] = choices[18][1];
 units[18] = "52";
 comments[18] = "Id Pregunta: 9773. Examen TIC A2 2013";


//  Id pregunta: 9798 AÃ±o de creación de pregunta: 2014-01-01
 questions[19]= "20)  &iquest;Cu&aacute;les son &aacute;reas de actuaci&oacute;n dentro de la Estrategia 2011-2015 del Plan Avanza 2?";
 choices[19]= new Array();
 choices[19][0] = "Ciudadan&iacute;a Digital, Econom&iacute;a Digital, Educaci&oacute;n y Servicios P&uacute;blicos Digitales, Publicaci&oacute;n Digital. ";
 choices[19][1] = "Infraestructura, Gobernanza, Confianza y Seguridad, Espacio &uacute;nico de informaci&oacute;n.";
 choices[19][2] = "Administraci&oacute;n sin papeles, Infraestructuras, Uso y confianza en Internet, Impulso de la industria TIC espa&ntilde;ola. ";
 choices[19][3] = "Administraci&oacute;n en l&iacute;nea, Comercio electr&oacute;nico, Salud y Educaci&oacute;n en l&iacute;nea, Banda Ancha. ";
 answers[19] = choices[19][2];
 units[19] = "30";
 comments[19] = "Id Pregunta: 9798. Examen TIC-A2 2013-Libre. En la p&aacute;gina web de la estrategia viene algo distinto, dice: Infraestructuras, Confianza y Seguridad, Capacitaci&oacute;n Tecnol&oacute;gica, Contenidos y Servicios Digitales y Desarrollo del Sector TIC. Esto a veces pasa.";


//  Id pregunta: 9845 AÃ±o de creación de pregunta: 2014-01-01
 questions[20]= "21)  El algoritmo RSA es un algoritmo:";
 choices[20]= new Array();
 choices[20][0] = "De triple clave.";
 choices[20][1] = "Asim&eacute;trico.";
 choices[20][2] = "De clave privada.";
 choices[20][3] = "Sim&eacute;trico.";
 answers[20] = choices[20][1];
 units[20] = "111";
 comments[20] = "Id Pregunta: 9845. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9850 AÃ±o de creación de pregunta: 2014-01-01
 questions[21]= "22)  El proceso mediante el cual un usuario se autentica una vez en el sistema de la organizaci&oacute;n y es capaz de acceder al resto de servicios se denomina:";
 choices[21]= new Array();
 choices[21][0] = "Single Login On";
 choices[21][1] = "Simple Login On";
 choices[21][2] = "Single Sign On";
 choices[21][3] = "Simple Sign On";
 answers[21] = choices[21][2];
 units[21] = "118";
 comments[21] = "Id Pregunta: 9850. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9852 AÃ±o de creación de pregunta: 2014-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes puertos es el puerto est&aacute;ndar de POP3 sobre SSL?";
 choices[22]= new Array();
 choices[22][0] = "995";
 choices[22][1] = "993";
 choices[22][2] = "220";
 choices[22][3] = "465";
 answers[22] = choices[22][0];
 units[22] = "111";
 comments[22] = "Id Pregunta: 9852. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9866 AÃ±o de creación de pregunta: 2014-01-01
 questions[23]= "24)  En relaci&oacute;n con lenguajes de marcado, indique cu&aacute;l de las siguientes afirmaciones es INCORRECTA";
 choices[23]= new Array();
 choices[23][0] = "XSLT es un lenguaje de marcado para las transformaciones de documentos XML.";
 choices[23][1] = "El XML describe el contenido de la informaci&oacute;n y la estructura, mientras que HTML est&aacute; orientado a la presentaci&oacute;n de la informaci&oacute;n.";
 choices[23][2] = "XPath permite buscar y seleccionar parte de un fichero XML sin utilizar su estructura.";
 choices[23][3] = "CSS permite dar formato tanto a ficheros HTML como a ficheros XML.";
 answers[23] = choices[23][2];
 units[23] = "69";
 comments[23] = "Id Pregunta: 9866. TIC A1, Examen 2013";


//  Id pregunta: 9872 AÃ±o de creación de pregunta: 2014-01-01
 questions[24]= "25)  Atendiendo a la norma ISO/IEC 9126 la calidad del software NO incluye la siguiente caracter&iacute;stica:";
 choices[24]= new Array();
 choices[24][0] = "Portabilidad.";
 choices[24][1] = "Funcionalidad.";
 choices[24][2] = "Usabilidad.";
 choices[24][3] = "Integridad.";
 answers[24] = choices[24][3];
 units[24] = "87";
 comments[24] = "Id Pregunta: 9872. TIC A1, Examen 2013";


//  Id pregunta: 9875 AÃ±o de creación de pregunta: 2014-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de mantenimiento NO ha sido definida en la norma ISO/IEC 14764?";
 choices[25]= new Array();
 choices[25][0] = "preventivo.";
 choices[25][1] = "progresivo.";
 choices[25][2] = "adaptativo.";
 choices[25][3] = "perfectivo.";
 answers[25] = choices[25][1];
 units[25] = "26";
 comments[25] = "Id Pregunta: 9875. TIC A1, Examen 2013";


//  Id pregunta: 9878 AÃ±o de creación de pregunta: 2014-01-01
 questions[26]= "27)  De acuerdo con la Ley 9/2014, General de Telecomunicaciones, &iquest;cu&aacute;l de las siguientes conductas se considera infracci&oacute;n muy grave?";
 choices[26]= new Array();
 choices[26][0] = "La producci&oacute;n deliberada de interferencias definidas como perjudiciales en la citada Ley.";
 choices[26][1] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 choices[26][2] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[26][3] = "La instalaci&oacute;n de estaciones radioel&eacute;ctricas sin autorizaci&oacute;n, cuando, de acuerdo con lo dispuesto en la normativa reguladora de las telecomunicaciones, sea necesaria.";
 answers[26] = choices[26][0];
 units[26] = "110";
 comments[26] = "Id Pregunta: 9878. TIC A1, Examen 2013";


//  Id pregunta: 9882 AÃ±o de creación de pregunta: 2014-01-01
 questions[27]= "28)  De acuerdo con el RDL 1/1996 de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, el plazo de duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica ser&aacute; de";
 choices[27]= new Array();
 choices[27][0] = "30 a&ntilde;os a partir de la divulgaci&oacute;n y 70 desde la fecha de su creaci&oacute;n.";
 choices[27][1] = "70 a&ntilde;os computados a partir del 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n.";
 choices[27][2] = "50 a&ntilde;os computados a partir de su creaci&oacute;n.";
 choices[27][3] = "70 a&ntilde;os computados a partir de la fecha de divulgaci&oacute;n.";
 answers[27] = choices[27][1];
 units[27] = "36";
 comments[27] = "Id Pregunta: 9882. TIC A1, Examen 2013";


//  Id pregunta: 9907 AÃ±o de creación de pregunta: 2014-01-01
 questions[28]= "29)  De las siguientes cuatro opciones, tres son tareas incluidas en la actividad &quot;GPI 2&quot; del interfaz de Gesti&oacute;n de Proyectos de M&eacute;trica v3, indique cu&aacute;l es la INCORRECTA:";
 choices[28]= new Array();
 choices[28][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[28][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[28][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios.";
 choices[28][3] = "C&aacute;lculo del Esfuerzo.";
 answers[28] = choices[28][3];
 units[28] = "86";
 comments[28] = "Id Pregunta: 9907. TIC A2, Examen 2013";


//  Id pregunta: 9910 AÃ±o de creación de pregunta: 2014-01-01
 questions[29]= "30)  Se&ntilde;ale cu&aacute;l de las siguientes es una t&eacute;cnica de desarrollo seg&uacute;n M&eacute;trica v3:";
 choices[29]= new Array();
 choices[29][0] = "T&eacute;cnicas Matriciales.";
 choices[29][1] = "M&eacute;todo Albrecht.";
 choices[29][2] = "An&aacute;lisis de Impacto.";
 choices[29][3] = "Caminos de Acceso.";
 answers[29] = choices[29][0];
 units[29] = "86";
 comments[29] = "Id Pregunta: 9910. TIC A2, Examen 2013";


//  Id pregunta: 9911 AÃ±o de creación de pregunta: 2014-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes contradice un principio de las metodolog&iacute;as &aacute;giles de desarrollo software (principios del Manifiesto &Aacute;gil)?";
 choices[30]= new Array();
 choices[30][0] = "Son bienvenidos los requisitos cambiantes, incluso si llegan en las etapas tard&iacute;as del desarrollo.";
 choices[30][1] = "Los responsables de negocio y los desarrolladores trabajan juntos de forma cotidiana durante todo el proyecto.";
 choices[30][2] = "El software, en su fase de dise&ntilde;o, es la medida principal de progreso.";
 choices[30][3] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 answers[30] = choices[30][2];
 units[30] = "79";
 comments[30] = "Id Pregunta: 9911. TIC A2, Examen 2013";


//  Id pregunta: 9917 AÃ±o de creación de pregunta: 2014-01-01
 questions[31]= "32)  Seg&uacute;n M&eacute;trica v3 &iquest;es posible definir un evento (o interrupci&oacute;n) en un diagrama de flujo de datos?";
 choices[31]= new Array();
 choices[31][0] = "S&iacute;, mediante un flujo de datos.";
 choices[31][1] = "S&iacute;, mediante un flujo de control.";
 choices[31][2] = "Si, mediante un proceso iterativo.";
 choices[31][3] = "No, no es posible. Los DFD &uacute;nicamente representan como se transforma la informaci&oacute;n.";
 answers[31] = choices[31][1];
 units[31] = "86";
 comments[31] = "Id Pregunta: 9917. TIC A2, Examen 2013";


//  Id pregunta: 9925 AÃ±o de creación de pregunta: 2014-01-01
 questions[32]= "33)  Respecto al protocolo HDLC, indique la falsa:";
 choices[32]= new Array();
 choices[32][0] = "Significa High-Level Data Link Control y est&aacute; basado en el ISO 3339.";
 choices[32][1] = "Usa transmisi&oacute;n s&iacute;ncrona y todos los intercambios se realizan a trav&eacute;s de tramas.";
 choices[32][2] = "Utiliza un formato &uacute;nico de tramas, tanto para datos como para informaci&oacute;n de control.";
 choices[32][3] = "Es el protocolo m&aacute;s importante para el enlace de datos, siendo la base para otros protocolos de nivel 2.";
 answers[32] = choices[32][0];
 units[32] = "100";
 comments[32] = "Id Pregunta: 9925. NULL";


//  Id pregunta: 9933 AÃ±o de creación de pregunta: 2014-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l no es un fallo detectado en el modelo de referencia OSI?";
 choices[33]= new Array();
 choices[33][0] = "Se desarroll&oacute; antes de que se inventaran los protocolos, as&iacute; que no se sab&iacute;a qu&eacute; funcionalidad poner en cada capa.";
 choices[33][1] = "Las capas de red y enlace de datos est&aacute;n muy llenas y se han subdividido en subcapas, cada una con funciones distintas.";
 choices[33][2] = "La administraci&oacute;n de la red es clave en el modelo.";
 choices[33][3] = "El modelo est&aacute; dominado por una mentalidad de comunicaciones.";
 answers[33] = choices[33][2];
 units[33] = "100";
 comments[33] = "Id Pregunta: 9933. NULL";


//  Id pregunta: 9942 AÃ±o de creación de pregunta: 2014-01-01
 questions[34]= "35)  El Real Decreto 695/2013 crea la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones. &iquest;Cu&aacute;l es el rango de esta Direcci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "Direcci&oacute;n General.";
 choices[34][1] = "Subdirecci&oacute;n General.";
 choices[34][2] = "Subsecretar&iacute;a.";
 choices[34][3] = "Secretar&iacute;a de Estado.";
 answers[34] = choices[34][2];
 units[34] = "44";
 comments[34] = "Id Pregunta: 9942. TIC A1, Examen 2013";


//  Id pregunta: 9952 AÃ±o de creación de pregunta: 2014-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula los procesos de ciclo de vida del software?";
 choices[35]= new Array();
 choices[35][0] = "ISO/IEC 12207:2008";
 choices[35][1] = "ISO 9001:2008";
 choices[35][2] = "ISO 29393:2009";
 choices[35][3] = "ISO 31000:2009";
 answers[35] = choices[35][0];
 units[35] = "76";
 comments[35] = "Id Pregunta: 9952. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9968 AÃ±o de creación de pregunta: 2014-01-01
 questions[36]= "37)  El Servicio de Representaci&oacute;n de Workflow (Workflow Enactment Service) seg&uacute;n la Workflow Management Coalition (WfMC) se encarga de:";
 choices[36]= new Array();
 choices[36][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos,secuencia de actividades, a&ntilde;adir elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[36][1] = "El modelado y dise&ntilde;o de los procesos, el cual puede ser interpretado en tiempo de ejecuci&oacute;n por el o los motores de Workflow.";
 choices[36][2] = "La definici&oacute;n de los mecanismos requeridos por los desarrolladores de productos Workflow para implementar la comunicaci&oacute;n de un motor Workflow con otros.";
 choices[36][3] = "La interacci&oacute;n entre los participantes del flujo de trabajo y el servicio de lanzamiento de flujo de trabajo";
 answers[36] = choices[36][0];
 units[36] = "71";
 comments[36] = "Id Pregunta: 9968. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 10007 AÃ±o de creación de pregunta: 2014-01-01
 questions[37]= "38)  En la direcci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n, es fundamental la gesti&oacute;n del alcance del proyecto. Ello supone";
 choices[37]= new Array();
 choices[37][0] = "estimar la duraci&oacute;n de las actividades.";
 choices[37][1] = "definir la secuencia entre las actividades.";
 choices[37][2] = "asegurar que el proyecto incluya todo el trabajo requerido, y s&oacute;lo el trabajo requerido.";
 choices[37][3] = "preparar el presupuesto de costes.";
 answers[37] = choices[37][2];
 units[37] = "27";
 comments[37] = "Id Pregunta: 10007. ";


//  Id pregunta: 10012 AÃ±o de creación de pregunta: 2014-01-01
 questions[38]= "39)  En un entorno de base de datos relacional, si se puede afirmar que los valores de una clave ajena coinciden con los valores de la clave primaria a la que hace referencia o son nulos  entonces se est&aacute; cumpliendo:";
 choices[38]= new Array();
 choices[38][0] = "Regla de los nulos.";
 choices[38][1] = "Regla de integridad de la entidad.";
 choices[38][2] = "Regla de la integridad referencial.";
 choices[38][3] = "Regla de los valores ajenos.";
 answers[38] = choices[38][2];
 units[38] = "58";
 comments[38] = "Id Pregunta: 10012. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10013 AÃ±o de creación de pregunta: 2014-01-01
 questions[39]= "40)  Indique los cuatro niveles de aislamiento que define ANSI SQL 92:";
 choices[39]= new Array();
 choices[39][0] = "Lecturas no confirmadas (read uncommited), lecturas confirmadas (read commited), lecturas repetibles (repeatable read), transacciones secuenciables (serializable).";
 choices[39][1] = "Escrituras no confirmadas (write uncommited), escrituras confirmadas (write commited), escrituras repetibles (repeatable write), transacciones secuenciables (serializable).";
 choices[39][2] = "Escrituras no confirmadas (write uncommited), escrituras confirmadas (write commited), lecturas repetibles (repeatable read), transacciones secuenciables (serializable).";
 choices[39][3] = "Lecturas no confirmadas (read uncommited), lecturas confirmadas (read commited), escrituras repetibles (repeatable write), transacciones secuenciables (serializable).";
 answers[39] = choices[39][0];
 units[39] = "57";
 comments[39] = "Id Pregunta: 10013. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10021 AÃ±o de creación de pregunta: 2014-01-01
 questions[40]= "41)  Se&ntilde;ale la respuesta INCORRECTA respecto a las caracter&iacute;sticas de la metodolog&iacute;a de desarrollo software conocida como Proceso Unificado de Desarrollo Software:";
 choices[40]= new Array();
 choices[40][0] = "Es Iterativo e Incremental.";
 choices[40][1] = "Est&aacute; dirigido por los casos de uso.";
 choices[40][2] = "Est&aacute; enfocado en los riesgos.";
 choices[40][3] = "Fue creado por Dennis Ritchie y Ken Thompson.";
 answers[40] = choices[40][3];
 units[40] = "76";
 comments[40] = "Id Pregunta: 10021. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10027 AÃ±o de creación de pregunta: 2014-01-01
 questions[41]= "42)  Elija la respuesta correcta:";
 choices[41]= new Array();
 choices[41][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[41][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[41][2] = "El Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[41][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[41] = choices[41][0];
 units[41] = "115";
 comments[41] = "Id Pregunta: 10027. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10032 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  Si tenemos la siguiente direcci&oacute;n de broadcast 95.26.35.159, indicar a qu&eacute; subred pertenece.";
 choices[42]= new Array();
 choices[42][0] = "95.26.35.144/30 ";
 choices[42][1] = "95.26.35.144/29";
 choices[42][2] = "95.26.35.128/27 ";
 choices[42][3] = "95.26.35.128/25";
 answers[42] = choices[42][2];
 units[42] = "100";
 comments[42] = "Id Pregunta: 10032. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10035 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l es la direcci&oacute;n multicast utilizada por el protocolo RIP v2 (Routing Information Protocol), seg&uacute;n RFC 2453, para enviar las actualizaciones de sus tablas?";
 choices[43]= new Array();
 choices[43][0] = "224.0.0.4 ";
 choices[43][1] = "224.0.0.5";
 choices[43][2] = "224.0.0.9 ";
 choices[43][3] = "224.0.0.22";
 answers[43] = choices[43][2];
 units[43] = "100";
 comments[43] = "Id Pregunta: 10035. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10038 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  Un equipo con la direcci&oacute;n IP 128.0.235.56/27 &iquest;Qu&eacute; m&aacute;scara de red, direcci&oacute;n de red y direcci&oacute;n de broadcast tiene?";
 choices[44]= new Array();
 choices[44][0] = "M&aacute;scara 255.255.255.224, red 128.0.235.32, broadcast 128.0.235.63";
 choices[44][1] = "M&aacute;scara 255.255.255.0, red 128.0.235.0, broadcast 128.0.235.255";
 choices[44][2] = "M&aacute;scara 255.255.255.192, red 128.0.235.0, broadcast 128.0.235.63";
 choices[44][3] = "M&aacute;scara 255.255.255.128, red 128.0.235.0, broadcast 128.0.235.127";
 answers[44] = choices[44][0];
 units[44] = "100";
 comments[44] = "Id Pregunta: 10038. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10047 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  Con respecto al campo Data Link Connection Identifier (DLCI) de Frame Relay se&ntilde;ale la respuesta correcta:";
 choices[45]= new Array();
 choices[45][0] = "Debe ser &uacute;nico en toda la red.";
 choices[45][1] = "Tiene una longitud total de 10 bits por defecto.";
 choices[45][2] = "Controla los mecanismos de notificaci&oacute;n de congesti&oacute;n.";
 choices[45][3] = "Los valores 0 a 128 del mismo est&aacute;n reservados para funciones especiales.";
 answers[45] = choices[45][1];
 units[45] = "109";
 comments[45] = "Id Pregunta: 10047. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10060 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  En una empresa con 2.000 puestos de usuario en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X, red B: 192.168.1.X y red C: 195.57.72.X.Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;d&oacute;nde se ubicar&iacute;an los servidores de Base de Datos de los que se alimentan tanto los servidores web p&uacute;blicos como los de la intranet?";
 choices[46]= new Array();
 choices[46][0] = "Red A.";
 choices[46][1] = "Red B.";
 choices[46][2] = "Red C.";
 choices[46][3] = "Habr&iacute;a dos servidores de bases de datos, el p&uacute;blico en la red C y el privado en la red B.";
 answers[46] = choices[46][1];
 units[46] = "100";
 comments[46] = "Id Pregunta: 10060. TIC A2, libre, Examen 2013";


//  Id pregunta: 10064 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  En MPLS, la asignaci&oacute;n de un paquete a un FEC (Forwarding Equivalence Class) tiene lugar:";
 choices[47]= new Array();
 choices[47][0] = "S&oacute;lo una vez, cuando el paquete entra en la red MPLS.";
 choices[47][1] = "Antes de entrar en la red MPLS, en el &uacute;ltimo router convencional conectado antes del primer nodo MPLS.";
 choices[47][2] = "Al iniciar una conexi&oacute;n de red, negociando el host de origen con el primer nodo MPLS el FEC a usar.";
 choices[47][3] = "Cuando el primer paquete abandona la red MPLS, y se ha podido descubrir la ruta por medios convencionales.";
 answers[47] = choices[47][0];
 units[47] = "100";
 comments[47] = "Id Pregunta: 10064. TIC A2, libre, examen 2013";


//  Id pregunta: 10078 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  &iquest;Qu&eacute; nombre recibe el est&aacute;ndar de Televisi&oacute;n Digital Terrestre utilizado en Europa?";
 choices[48]= new Array();
 choices[48][0] = "ATSC ";
 choices[48][1] = "ISDB-T";
 choices[48][2] = "DVB-T ";
 choices[48][3] = "EDTVB";
 answers[48] = choices[48][2];
 units[48] = "105";
 comments[48] = "Id Pregunta: 10078. TIC A2, libre, Examen 2013";


//  Id pregunta: 10081 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida orientado a objetos tiene un enfoque ascendente?";
 choices[49]= new Array();
 choices[49][0] = "Pinball";
 choices[49][1] = "Remolino";
 choices[49][2] = "Cluster";
 choices[49][3] = "Fuente";
 answers[49] = choices[49][2];
 units[49] = "76";
 comments[49] = "Id Pregunta: 10081. NULL";


//  Id pregunta: 10082 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l NO es un proceso principal de acuerdo a la ISO 12207";
 choices[50]= new Array();
 choices[50][0] = "Adquisici&oacute;n";
 choices[50][1] = "Desarrollo";
 choices[50][2] = "Suministro";
 choices[50][3] = "Gesti&oacute;n";
 answers[50] = choices[50][3];
 units[50] = "76";
 comments[50] = "Id Pregunta: 10082. NULL";


//  Id pregunta: 10085 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  &iquest;Qu&eacute; tipo de prototipo es m&aacute;s adecuado si se conocen bien todos los requisitos de partida?";
 choices[51]= new Array();
 choices[51][0] = "R&aacute;pido";
 choices[51][1] = "Evolutivo";
 choices[51][2] = "Incremental";
 choices[51][3] = "Cualquiera de los anteriores";
 answers[51] = choices[51][2];
 units[51] = "76";
 comments[51] = "Id Pregunta: 10085. NULL";


//  Id pregunta: 10088 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  En la metodolog&iacute;a SCRUM existen distintos tipo de reuniones. &iquest;Qu&eacute; orden cronol&oacute;gico suelen tener?";
 choices[52]= new Array();
 choices[52][0] = "Daily Scrum, Scrum de Scrum, Sprint Planning Meeting, Sprint Review Meeting y Spring Retrospective.";
 choices[52][1] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Sprint Review Meeting y Spring Retrospective.";
 choices[52][2] = "Sprint Planning Meeting, Daily Scrum, Scrum de Scrum, Spring Retrospective y Sprint Review Meeting. ";
 choices[52][3] = "Sprint Planning Meeting, Daily Scrum,  Sprint Review Meeting, Scrum de Scrum y Spring Retrospective.";
 answers[52] = choices[52][1];
 units[52] = "79";
 comments[52] = "Id Pregunta: 10088. NULL";


//  Id pregunta: 10091 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  &iquest;Qu&eacute; metodolog&iacute;a &aacute;gil tiene 5 fases claramente diferenciadas?";
 choices[53]= new Array();
 choices[53][0] = "SCRUM";
 choices[53][1] = "LSD";
 choices[53][2] = "Kanban";
 choices[53][3] = "FDD";
 answers[53] = choices[53][3];
 units[53] = "79";
 comments[53] = "Id Pregunta: 10091. NULL";


//  Id pregunta: 10099 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  Se&ntilde;ala la afirmaci&oacute;n correcta sobre el an&aacute;lisis estructurado";
 choices[54]= new Array();
 choices[54][0] = "El modelo ambiental se compone del modelo esencial y el modelo de comportamiento.";
 choices[54][1] = "El modelo esencial se compone del modelo ambiental y el modelo de comportamiento.";
 choices[54][2] = "El modelo de compotamiento se compone del modelo ambiental y el modelo esencial.";
 choices[54][3] = "El modelo ambiental se compone del modelo estructural y el modelo esencial.";
 answers[54] = choices[54][1];
 units[54] = "81";
 comments[54] = "Id Pregunta: 10099. NULL";


//  Id pregunta: 10114 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  MTU es:";
 choices[55]= new Array();
 choices[55][0] = "El tama&ntilde;o en bytes de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[55][1] = "El m&aacute;ximo retardo medido en segundos permitido entre dos nodos";
 choices[55][2] = "El tama&ntilde;o en bits de la unidad de datos m&aacute;s grande que puede transmitirse por una red de comunicaciones";
 choices[55][3] = "El m&aacute;ximo retardo medido en milisegundos permitido entre dos nodos";
 answers[55] = choices[55][0];
 units[55] = "101";
 comments[55] = "Id Pregunta: 10114. Maximum Transfer Unit";


//  Id pregunta: 10117 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  Cu&aacute;l de los siguientes equipos trabaja a nivel 1 de red:";
 choices[56]= new Array();
 choices[56][0] = "Router";
 choices[56][1] = "Switch";
 choices[56][2] = "Bridge";
 choices[56][3] = "Hub";
 answers[56] = choices[56][3];
 units[56] = "102";
 comments[56] = "Id Pregunta: 10117. ";


//  Id pregunta: 10148 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  En relaci&oacute;n a las Comunicaciones comerciales por v&iacute;a electr&oacute;nica reguladas por la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[57]= new Array();
 choices[57][0] = "Las comunicaciones comerciales realizadas por v&iacute;a electr&oacute;nica deber&aacute;n ser claramente identificables como tales y la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan tambi&eacute;n deber&aacute; ser claramente identificable.";
 choices[57][1] = "En el caso en el que tengan lugar a trav&eacute;s de correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente incluir&aacute;n al comienzo del mensaje la palabra ''publicidad'' o la abreviatura ''publi''";
 choices[57][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.";
 choices[57][3] = "Lo dispuesto en el apartado anterior no ser&aacute; de aplicaci&oacute;n cuando exista una relaci&oacute;n contractual previa, siempre que el prestador hubiera obtenido de forma l&iacute;cita los datos de contacto del destinatario y los empleara para el env&iacute;o de comunicaciones comerciales referentes a productos o servicios de su propia empresa que sean similares a los que inicialmente fueron objeto de contrataci&oacute;n con el cliente.";
 answers[57] = choices[57][1];
 units[57] = "30";
 comments[57] = "Id Pregunta: 10148. ";


//  Id pregunta: 10153 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[58]= new Array();
 choices[58][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[58][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[58][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[58][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[58] = choices[58][1];
 units[58] = "43";
 comments[58] = "Id Pregunta: 10153. ";


//  Id pregunta: 10168 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  En relaci&oacute;n con los operandos del &aacute;lgebra relacional, se cumple que:";
 choices[59]= new Array();
 choices[59][0] = "La Uni&oacute;n de las relaciones R y S puede aplicarse a&uacute;n cuando R y S no tengan igual grado y/o compatibilidad de dominios";
 choices[59][1] = "El Outer Join incluye en la relaci&oacute;n resultante las tuplas de una o ambas relaciones que en los atributos comunes no tienen valores iguales o correspondientes";
 choices[59][2] = "El grado de la relaci&oacute;n resultante de la Uni&oacute;n Natural o Natural Join entre dos relaciones R y S es igual al grado de R + el grado de S";
 choices[59][3] = "La intersecci&oacute;n es un operador fundamental del &aacute;lgebra relacional";
 answers[59] = choices[59][1];
 units[59] = "58";
 comments[59] = "Id Pregunta: 10168. ";


//  Id pregunta: 10171 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  En el lenguaje SQL, la funci&oacute;n de agregado COUNT, aplicada sobre una columna, contabiliza&hellip;";
 choices[60]= new Array();
 choices[60][0] = "N&ordm; de filas recuperadas por la consulta ";
 choices[60][1] = "N&ordm; de filas recuperadas por la consulta, exceptuando aquellas en que la columna referenciada tenga valor nulo";
 choices[60][2] = "N&ordm; de filas recuperadas por la consulta, incluyendo valores duplicados o nulos en la columna";
 choices[60][3] = "Si la columna sobre la que se aplica tiene valor nulo en todas las filas, la funci&oacute;n COUNT devolver&aacute; &quot;nulo&quot;";
 answers[60] = choices[60][1];
 units[60] = "58";
 comments[60] = "Id Pregunta: 10171. ";


//  Id pregunta: 10205 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[61]= new Array();
 choices[61][0] = "Para el canal de subida utiliza la modulaci&oacute;n WCDMA y para el de bajada, OFDMA";
 choices[61][1] = "Corresponde a la release 8 del 3GPP (3rd Generation Partnership Project)";
 choices[61][2] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[61][3] = "El ancho de banda de los canales es variable entre 1,25MHz y 20MHz";
 answers[61] = choices[61][0];
 units[61] = "108";
 comments[61] = "Id Pregunta: 10205. Para el canal de subida usa SC-FDMA (Single Carrier FDMA)";


//  Id pregunta: 10207 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  De los siguientes m&eacute;todos est&aacute;ticos de selecci&oacute;n de inversiones, &iquest;cu&aacute;l de los siguientes no tiene en cuenta la inversi&oacute;n promedio?";
 choices[62]= new Array();
 choices[62][0] = "Tasa de rendimiento contable";
 choices[62][1] = "ROI (Return of Investment)";
 choices[62][2] = "Flujo total por unidad monetaria comprometida";
 choices[62][3] = "Ninguno de los anteriores m&eacute;todos";
 answers[62] = choices[62][2];
 units[62] = "38";
 comments[62] = "Id Pregunta: 10207. ";


//  Id pregunta: 10209 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  Seg&uacute;n M&eacute;trica v3, indique qu&eacute; no es necesario tener en cuenta para el c&aacute;lculo del ROI (Retorno de la Inversi&oacute;n):";
 choices[63]= new Array();
 choices[63][0] = "La Inversi&oacute;n Promedio";
 choices[63][1] = "El Beneficio Neto Anual";
 choices[63][2] = "El Periodo de Amortizaci&oacute;n";
 choices[63][3] = "El Coste de Desarrollo Anualizado";
 answers[63] = choices[63][2];
 units[63] = "38";
 comments[63] = "Id Pregunta: 10209. ";


//  Id pregunta: 10210 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  Una inversi&oacute;n de 300.000 euros produce el primer a&ntilde;o un beneficio de 5.000 euros. Teniendo en cuenta que la rentabilidad requerida a la inversi&oacute;n es del 2%, &iquest;cu&aacute;l es el valor actual neto de dicha inversi&oacute;n?";
 choices[64]= new Array();
 choices[64][0] = "300.000 + 5.000 * 0,02";
 choices[64][1] = "-300.000 + 5.000 / (1 + 0,02)";
 choices[64][2] = "300.000 - 5.000 / (1 - 0,02)";
 choices[64][3] = "-300.000 + 5.000 * (1 + 0,02)";
 answers[64] = choices[64][1];
 units[64] = "38";
 comments[64] = "Id Pregunta: 10210. ";


//  Id pregunta: 10214 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Tres alternativas A, B y C han obtenido respectivamente las puntuaciones directas 300, 450 y 250 respecto de un criterio. Seg&uacute;n el m&eacute;todo de fracci&oacute;n del ideal, &iquest;qu&eacute; puntuaci&oacute;n normalizada corresponde a la alternativa A?";
 choices[65]= new Array();
 choices[65][0] = "0,25 puntos";
 choices[65][1] = "0,75 puntos";
 choices[65][2] = "0,33 puntos";
 choices[65][3] = "0,66 puntos";
 answers[65] = choices[65][0];
 units[65] = "34";
 comments[65] = "Id Pregunta: 10214. Puntuaci&oacute;n normalizada por factor del ideal = (puntuacion - puntuacion_min) / (puntuacion_max - puntuacion_min) = (300 - 250) / (450 - 250) = 0,25";


//  Id pregunta: 10219 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Las variables declaradas en un interface deben ser:";
 choices[66]= new Array();
 choices[66][0] = "public, static y final";
 choices[66][1] = "private static y final";
 choices[66][2] = "S&oacute;lo protected";
 choices[66][3] = "En un interface no se deben incluir variables";
 answers[66] = choices[66][0];
 units[66] = "60";
 comments[66] = "Id Pregunta: 10219. NULL";


//  Id pregunta: 10225 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  Cual de las siguientes sentencias captura el nombre de la carpeta en la que est&aacute; situado el archivo:";
 choices[67]= new Array();
 choices[67][0] = "String name = File.getParent(&quot;leeme.txt&quot;);";
 choices[67][1] = "String name = (new File(&quot;leeme.txt&quot;)).getParent();";
 choices[67][2] = "String name = (new File(&quot;c:\\leeme.txt&quot;)).getParentName();";
 choices[67][3] = "Directory dir = (new File(&ldquo;leeme.txt&rdquo;)).getParentDir();";
 answers[67] = choices[67][1];
 units[67] = "60";
 comments[67] = "Id Pregunta: 10225. NULL";


//  Id pregunta: 10233 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  &iquest;En que casos una sesi&oacute;n ser&aacute; invalidada?:";
 choices[68]= new Array();
 choices[68][0] = "No se recibe una petici&oacute;n del cliente superado el plazo de session timeout";
 choices[68][1] = "El cliente envia una petici&oacute;n KILL_SESSION";
 choices[68][2] = "El contenedor de servlets invalida una sesi&oacute;n por sobrecarga en el servidor";
 choices[68][3] = "El usuario cierra la ventana del navegador";
 answers[68] = choices[68][0];
 units[68] = "116";
 comments[68] = "Id Pregunta: 10233. NULL";


//  Id pregunta: 10258 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  En caso de solicitarse la rectificaci&oacute;n de unos datos de car&aacute;cter personal a un responsable del tratamiento que haya realizado una cesi&oacute;n de dichos datos a un tercero";
 choices[69]= new Array();
 choices[69][0] = "No pueden rectificarse datos de car&aacute;cter personal que hayan sido objeto de cesi&oacute;n a terceros";
 choices[69][1] = "El responsable deber&aacute; contestar al interesado y proceder a la rectificaci&oacute;n, no siendo necesario que comunique la misma al cesionario";
 choices[69][2] = "El responsable deber&aacute; contestar al interesado,  proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario contestar&aacute; tambi&eacute;n al interesado";
 choices[69][3] = "El responsable deber&aacute; contestar al interesado,  proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario no tiene obligaci&oacute;n de contestar al interesado";
 answers[69] = choices[69][3];
 units[69] = "29";
 comments[69] = "Id Pregunta: 10258. Art&iacute;culo 32.3 del RD 1720/2007";


//  Id pregunta: 10259 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  El derecho de oposici&oacute;n al tratamiento de datos de car&aacute;cter personal tiene sentido:";
 choices[70]= new Array();
 choices[70][0] = "Para los ficheros mencionados en b) y c)";
 choices[70][1] = "Para ficheros que recojan datos de car&aacute;cter personal y no sea preciso el consentimiento del afectado para realizar el tratamiento";
 choices[70][2] = "Para ficheros que recojan datos de car&aacute;cter personal y tengan por objeto realizar actividades de prospecci&oacute;n comercial";
 choices[70][3] = "Para todo tipo de ficheros que recojan datos de car&aacute;cter personal";
 answers[70] = choices[70][0];
 units[70] = "29";
 comments[70] = "Id Pregunta: 10259. Art&iacute;culo 34 a) y b) del RD 1720/2007";


//  Id pregunta: 10266 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Respecto del tratamiento de datos de car&aacute;cter personal, el censo promocional";
 choices[71]= new Array();
 choices[71][0] = "Tendr&aacute; vigencia indefinida";
 choices[71][1] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[71][2] = "Tendr&aacute; vigencia trimestral, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[71][3] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose trimestralmente para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 answers[71] = choices[71][3];
 units[71] = "29";
 comments[71] = "Id Pregunta: 10266. Art&iacute;culo 31.2 y 31.3 de la Ley 15/1999";


//  Id pregunta: 10268 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Las infracciones leves de la Ley 15/1999:";
 choices[72]= new Array();
 choices[72][0] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben al a&ntilde;o";
 choices[72][1] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben al a&ntilde;o";
 choices[72][2] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben a los seis meses";
 choices[72][3] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben a los seis meses";
 answers[72] = choices[72][1];
 units[72] = "29";
 comments[72] = "Id Pregunta: 10268. Art&iacute;culos 45.1 y 47.1 de la Ley 15/1999";


//  Id pregunta: 10275 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Los agentes inteligentes, seg&uacute;n su capacidad para resolver problemas, pueden ser:";
 choices[73]= new Array();
 choices[73][0] = "Reactivos";
 choices[73][1] = "Predictivos";
 choices[73][2] = "Ambas";
 choices[73][3] = "Ninguna";
 answers[73] = choices[73][0];
 units[73] = "63";
 comments[73] = "Id Pregunta: 10275. NULL";


//  Id pregunta: 10303 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Internet Small Computer Systems Interface (iSCSI) seg&uacute;n el RFC 3720 es un protocolo de:";
 choices[74]= new Array();
 choices[74][0] = "Enlace.";
 choices[74][1] = "Red.";
 choices[74][2] = "Transporte.";
 choices[74][3] = "Aplicaci&oacute;n.";
 answers[74] = choices[74][2];
 units[74] = "48";
 comments[74] = "Id Pregunta: 10303. TIC A2, libre, examen 2013";


//  Id pregunta: 10305 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Qu&eacute; muestra el comando top en UNIX?";
 choices[75]= new Array();
 choices[75][0] = "Los ficheros abiertos.";
 choices[75][1] = "El escritorio.";
 choices[75][2] = "Los procesos.";
 choices[75][3] = "Los puertos TCP/IP.";
 answers[75] = choices[75][2];
 units[75] = "53";
 comments[75] = "Id Pregunta: 10305. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10309 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Una sentencia JCL comienza con:";
 choices[76]= new Array();
 choices[76][0] = "//";
 choices[76][1] = "*+";
 choices[76][2] = "#&gt;";
 choices[76][3] = "$&gt;";
 answers[76] = choices[76][0];
 units[76] = "55";
 comments[76] = "Id Pregunta: 10309. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10313 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Comparando NAS (Network-attached Storage) con SAN (Storage Area Network):";
 choices[77]= new Array();
 choices[77][0] = "NAS opera a nivel de fichero y SAN a nivel de bloque.";
 choices[77][1] = "NAS opera a nivel de bloque y SAN a nivel de fichero.";
 choices[77][2] = "Ambos operan a nivel de bloque.";
 choices[77][3] = "Ambos operan a nivel de fichero.";
 answers[77] = choices[77][0];
 units[77] = "48";
 comments[77] = "Id Pregunta: 10313. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10323 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  No es una ventaja de la capa de aplicaci&oacute;n";
 choices[78]= new Array();
 choices[78][0] = "Compartici&oacute;n de objetos";
 choices[78][1] = "Independencia de la arquitectura de almacenamiento";
 choices[78][2] = "Redistribuci&oacute;n autom&aacute;tica de versiones firmadas";
 choices[78][3] = "Escalabilidad horizontal";
 answers[78] = choices[78][2];
 units[78] = "114";
 comments[78] = "Id Pregunta: 10323. ";


//  Id pregunta: 10342 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta incorrecta:";
 choices[79]= new Array();
 choices[79][0] = "La protecci&oacute;n de un programa de ordenador comprende tambi&eacute;n su documentaci&oacute;n preparatoria, documentaci&oacute;n t&eacute;cnica y manuales de uso";
 choices[79][1] = "La protecci&oacute;n de un programa de ordenador se extiende a cualesquiera versiones sucesivas del programa, as&iacute; como a los programas derivados";
 choices[79][2] = "La protecci&oacute;n mediante los derechos de autor incluye las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador incluidos los que sirven de fundamento a sus interfaces";
 choices[79][3] = "Si un programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la Ley de Propiedad Industrial";
 answers[79] = choices[79][2];
 units[79] = "36";
 comments[79] = "Id Pregunta: 10342. Consultar Art. 96 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10361 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Dentro de las recomendaciones de la UIT-T (Uni&oacute;n Internacional de Telecomunicaciones), se&ntilde;ale la correspondencia incorrecta:";
 choices[80]= new Array();
 choices[80][0] = "Serie V: Comunicaci&oacute;n de datos por la red telef&oacute;nica";
 choices[80][1] = "Serie X: Redes de datos, comunicaciones de sistemas abiertos y seguridad";
 choices[80][2] = "Serie E: Sistemas y medios de transmisi&oacute;n, sistemas y redes digitales";
 choices[80][3] = "Serie I: Red digital de servicios integrados";
 answers[80] = choices[80][2];
 units[80] = "42";
 comments[80] = "Id Pregunta: 10361. Serie E: Explotaci&oacute;n general de la red, servicio telef&oacute;nico, explotaci&oacute;n del servicio y factores humanos";


//  Id pregunta: 10363 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En relaci&oacute;n con la SETSI, se&ntilde;ale la respuesta incorrecta:";
 choices[81]= new Array();
 choices[81][0] = "Sus siglas corresponden a la Secretar&iacute;a de Estado de Telecomunicaciones y Sistemas de la Informaci&oacute;n";
 choices[81][1] = "Est&aacute; integrada dentro del Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[81][2] = "Desarrolla, entre otras funciones, la realizaci&oacute;n de estudios y propuestas de normas t&eacute;cnicas de equipos e instalaciones del sector de las telecomunicaciones";
 choices[81][3] = "El Ministerio de Industria, Energ&iacute;a y Turismo es miembro de la ETSI a trav&eacute;s de la SETSI";
 answers[81] = choices[81][0];
 units[81] = "42";
 comments[81] = "Id Pregunta: 10363. SETSI: Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";


//  Id pregunta: 10366 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Respecto al m&eacute;todo de crashing en la gesti&oacute;n de proyectos es cierto que:";
 choices[82]= new Array();
 choices[82][0] = "No sirve para acortar la duraci&oacute;n de los proyectos cuando es aplicado a las actividades del camino cr&iacute;tico";
 choices[82][1] = "S&oacute;lo sirve para acortar la duraci&oacute;n de los proyectos si lo aplicamos a alguna de las actividades del camino cr&iacute;tico";
 choices[82][2] = "Acorta el tiempo del proyecto tanto si se aplica a las actividades cr&iacute;ticas como a las que no lo son";
 choices[82][3] = "No tiene nada que ver con la duraci&oacute;n del proyecto sino con la inclusi&oacute;n de recursos por fases ";
 answers[82] = choices[82][1];
 units[82] = "27";
 comments[82] = "Id Pregunta: 10366. ";


//  Id pregunta: 10367 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Qu&eacute; tipos de holguras puede tener una actividad en un proyecto?";
 choices[83]= new Array();
 choices[83][0] = "Dos: Holgura libre y Holgura total";
 choices[83][1] = "Dos: Holgura independiente y holgura dependiente";
 choices[83][2] = "Tres: Holgura libre, Holgura Independiente y Holgura Total";
 choices[83][3] = "Cuatro: Holgura independentiente, holgura dependiente, holgura libre y holgura total";
 answers[83] = choices[83][2];
 units[83] = "27";
 comments[83] = "Id Pregunta: 10367. ";


//  Id pregunta: 10374 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  El Teorema Chino del Resto es un m&eacute;todo matem&aacute;tico de resoluci&oacute;n de ecuaciones en aritm&eacute;tica modular que tiene aplicaci&oacute;n principalmente en:";
 choices[84]= new Array();
 choices[84][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[84][1] = "Criptograf&iacute;a sim&eacute;trica";
 choices[84][2] = "C&aacute;lculo de impedancias de cables coaxiales";
 choices[84][3] = "Junto con el teorema de Euler se usa en resoluci&oacute;n de caminos en grafos, teniendo su aplicaci&oacute;n pr&aacute;ctica en la resoluci&oacute;n de enrutamientos en comunicaciones.";
 answers[84] = choices[84][0];
 units[84] = "72";
 comments[84] = "Id Pregunta: 10374. ";


//  Id pregunta: 10426 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En lo referido a la Ingenier&iacute;a del Software de Sala Limpia indicar qu&eacute; afirmaci&oacute;n es correcta. ";
 choices[85]= new Array();
 choices[85][0] = "Es una versi&oacute;n del modelo incremental del software.";
 choices[85][1] = "Hace uso de la comprobaci&oacute;n estad&iacute;stica para descubrir errores.";
 choices[85][2] = "Utiliza tres tipos de cajas para la especificaci&oacute;n funcional: negra, de estado y transparente.";
 choices[85][3] = "Las anteriores a) b) y c) son correctas.";
 answers[85] = choices[85][3];
 units[85] = "76";
 comments[85] = "Id Pregunta: 10426. Examen TIC A1 2013";


//  Id pregunta: 10432 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indique cual de las siguientes ediciones no corresponde a Windows Server 2012 ";
 choices[86]= new Array();
 choices[86][0] = "Business";
 choices[86][1] = "Essentials";
 choices[86][2] = "Foundation";
 choices[86][3] = "Standard";
 answers[86] = choices[86][0];
 units[86] = "56";
 comments[86] = "Id Pregunta: 10432. Examen TIC A1 2013";


//  Id pregunta: 10437 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  La Ley 23/2006 de 7 de julio modifica el RDL 1/1996 de 12 de abril por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual con motivo de ";
 choices[87]= new Array();
 choices[87][0] = "a trasposici&oacute;n de la Directiva 2001/29/CE.";
 choices[87][1] = "la entrada en vigor de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n. ";
 choices[87][2] = "la regulaci&oacute;n de un canon digital en los programas de ordenador.";
 choices[87][3] = "el establecimiento de la prohibici&oacute;n de hacer copias privadas.";
 answers[87] = choices[87][0];
 units[87] = "36";
 comments[87] = "Id Pregunta: 10437. Examen TIC A1 2013";


//  Id pregunta: 10439 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Respecto al conjunto de normas H.323 de la UIT,";
 choices[88]= new Array();
 choices[88][0] = "se le puede a&ntilde;adir seguridad extremo a extremo con la recomendaci&oacute;n de la UIT H.235. ";
 choices[88][1] = "fue definida para redes de conmutaci&oacute;n de circuitos.";
 choices[88][2] = "permite audioconferencia pero no videoconferencia.";
 choices[88][3] = "se utiliza &uacute;nicamente con redes RDSI.";
 answers[88] = choices[88][0];
 units[88] = "117";
 comments[88] = "Id Pregunta: 10439. Examen TIC A1 2013";


//  Id pregunta: 10451 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En el &aacute;mbito de la continuidad de negocio, el &quot;objetivo de prestaci&oacute;n de servicios&quot; se define como:";
 choices[89]= new Array();
 choices[89][0] = "El tiempo que una organizaci&oacute;n puede esperar desde el punto de fallo hasta la restauraci&oacute;n de los servicios o aplicaciones cr&iacute;ticas.";
 choices[89][1] = "El nivel de servicios a proveer durante el modo de proceso alterno.";
 choices[89][2] = "Ninguna de las anteriores.";
 choices[89][3] = "A y B.";
 answers[89] = choices[89][1];
 units[89] = "97";
 comments[89] = "Id Pregunta: 10451. NULL";


//  Id pregunta: 10472 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Respecto a los certificados X.509 v3:";
 choices[90]= new Array();
 choices[90][0] = "Las extensiones se clasifican en cr&iacute;ticas, no criticas y recomendables.";
 choices[90][1] = "Las extensiones no cr&iacute;ticas pueden ignorarse si no se pueden procesar o se decide no hacerlo.";
 choices[90][2] = "Un certificado s&oacute;lo puede contener una extensi&oacute;n de un determinado tipo.";
 choices[90][3] = "No pueden definirse extensiones para uso privado.";
 answers[90] = choices[90][1];
 units[90] = "73";
 comments[90] = "Id Pregunta: 10472. ";


//  Id pregunta: 10477 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  La diferencia entre la cofirma y la contrafirma estriba en que:";
 choices[91]= new Array();
 choices[91][0] = "La cofirma ocurre cuando el documento a firmar se considera validado con la firma de uno s&oacute;lo de los dos firmantes  y la contrafirma cuando el documento es v&aacute;lido s&oacute;lo si lo firman los dos a la vez";
 choices[91][1] = "La cofirma y la contrafirma son iguales si se hacen de forma electr&oacute;nica ya que no hay manera de determinar en el tiempo el orden de los firmantes, s&oacute;lo que hayan firmado";
 choices[91][2] = "En la cofirma los dos firmantes pueden firmar en cualquier momento y se supone que est&aacute;n al mismo nivel de responsabilidad respecto de la firma del documento (por ejemplo, una pareja que se compra una casa y firma la hipoteca) mientras que en la contrafirma el orden de los firmantes es relevante y el que firma &uacute;ltimo valida la firma del que ha firmado primero (por ejemplo, un jefe que valida el acto administrativo que firma un subordinado)";
 choices[91][3] = "La cofirma requiere de la firma de dos sujetos f&iacute;sicos o jur&iacute;dicos mientras que la contrafirma requiere de la firma de la aplicaci&oacute;n que genera los certificados del documento (portafirmas)";
 answers[91] = choices[91][2];
 units[91] = "73";
 comments[91] = "Id Pregunta: 10477. ";


//  Id pregunta: 10483 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  La ecuaci&oacute;n del software establece principalmente que&hellip;";
 choices[92]= new Array();
 choices[92][0] = "El esfuerzo necesario para realizar un proyecto es una ecuaci&oacute;n logar&iacute;tmica ";
 choices[92][1] = "El esfuerzo se mide en horas/hombre y hay 100 horas hombre por mes";
 choices[92][2] = "El tiempo para realizar un proyecto se puede medir en base a los puntos de funci&oacute;n ajustados";
 choices[92][3] = "El esfuerzo y el tiempo requerido para realizar un proyecto son inversamente proporcionales";
 answers[92] = choices[92][3];
 units[92] = "89";
 comments[92] = "Id Pregunta: 10483. NULL";


//  Id pregunta: 10488 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Se&ntilde;ale la respuesta correcta:";
 choices[93]= new Array();
 choices[93][0] = "Las personas pueden certificarse en las diversas opciones de  ITIL (Foundation, Intermediate, etc.) pero las empresas no, deben certificarse en la ISO 20000";
 choices[93][1] = "Las personas y empresas pueden certificarse en ITIL";
 choices[93][2] = "Las personas y empresas pueden certificase en la ISO 20000";
 choices[93][3] = "Las personas s&oacute;lo pueden certificarse en ITIL Foundation, las empresas en ITIL  Intermediate";
 answers[93] = choices[93][0];
 units[93] = "98";
 comments[93] = "Id Pregunta: 10488. NULL";


//  Id pregunta: 10500 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  Cual de las siguientes afirmaciones es correcta con respecto al protocolo CAS, en el &aacute;mbito de los sitemas Single-Sign-On";
 choices[94]= new Array();
 choices[94][0] = "Fue concebido en la universidad de Oxford";
 choices[94][1] = "Es un protocolo SSO para todo tipo de aplicaciones, tanto web, como de escritorio.";
 choices[94][2] = "No existe el protocolo CAS, en ese &aacute;mbito";
 choices[94][3] = "CAS son las siglas de Central Authentication Service";
 answers[94] = choices[94][3];
 units[94] = "118";
 comments[94] = "Id Pregunta: 10500. NULL";


//  Id pregunta: 10509 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  Si el c&oacute;digo de respuesta de un servidor SMTP, que cumple la RFC 821, es 501, podemos decir que:";
 choices[95]= new Array();
 choices[95][0] = "La operaci&oacute;n se ha realizado con &eacute;xito.";
 choices[95][1] = "Se ha producido un Error Temporal. Es posible que, volver a mandar el comando, con el mismo formato pasado un tiempo, produzca un resultado satisfactorio";
 choices[95][2] = "Se ha producido un Error, debido a que los parametros del comando enviado no tienen la sintaxis correcta.";
 choices[95][3] = "No podemos decir nada";
 answers[95] = choices[95][2];
 units[95] = "106";
 comments[95] = "Id Pregunta: 10509. http://tools.ietf.org/html/rfc821#page-35";


//  Id pregunta: 10510 AÃ±o de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Cual de los siguientes no es un protocolo de correo electr&oacute;nico?";
 choices[96]= new Array();
 choices[96][0] = "SMTP";
 choices[96][1] = "MIME";
 choices[96][2] = "POP2";
 choices[96][3] = "Todos lo son";
 answers[96] = choices[96][3];
 units[96] = "106";
 comments[96] = "Id Pregunta: 10510. POP2 es una versi&oacute;n obsoleta de POP, pero se pregunta por protocolos de correo. No por su actualidad o uso.";


//  Id pregunta: 10524 AÃ±o de creación de pregunta: 2014-01-01
 questions[97]= "98)  Qu&eacute; a&ntilde;o establece como objetivo la Estrategia Nacional de Redes Ultrarr&aacute;pidas para que al menos el 50% de los hogares puedan disponer de acceso a servicios de velocidades superiores a 100 Mbps.";
 choices[97]= new Array();
 choices[97][0] = "2016";
 choices[97][1] = "2017";
 choices[97][2] = "2018";
 choices[97][3] = "2020";
 answers[97] = choices[97][3];
 units[97] = "110";
 comments[97] = "Id Pregunta: 10524. ";


//  Id pregunta: 10550 AÃ±o de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes amenazas de seguridad de Internet podr&iacute;a comprometer la integridad?";
 choices[98]= new Array();
 choices[98][0] = "Robo de los datos desde el cliente ";
 choices[98][1] = "Exposici&oacute;n de la informaci&oacute;n de configuraci&oacute;n de red ";
 choices[98][2] = "Un troyano en el navegador";
 choices[98][3] = "Escuchas ilegales en la red";
 answers[98] = choices[98][2];
 units[98] = "31, 32, 33";
 comments[98] = "Id Pregunta: 10550. NULL";


//  Id pregunta: 10551 AÃ±o de creación de pregunta: 2014-01-01
 questions[99]= "100)  &iquest; Cu&aacute;l de las siguientes opciones contribuye mejor a un plan de continuidad de negocio eficaz? ";
 choices[99]= new Array();
 choices[99][0] = "La documentaci&oacute;n se distribuye a todas las partes interesadas";
 choices[99][1] = "La planificaci&oacute;n involucra a todos los departamentos de usuarios";
 choices[99][2] = "El plan se ha aprobado por la alta direcci&oacute;n";
 choices[99][3] = "El plan se ha auditado por un auditor externo";
 answers[99] = choices[99][1];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10551. La participaci&oacute;n de los departamentos de usuarios en el Plan de Continuidad de Negocio es crucial para la identificaci&oacute;n de las prioridades de proceso de negocio.";


