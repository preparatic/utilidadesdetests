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

//  Id pregunta: 34 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes gu&iacute;as no forma parte de los est&aacute;ndares EDIFACT?:";
 choices[0]= new Array();
 choices[0][0] = "Directorio de registro de datos";
 choices[0][1] = "Directorio de segmentos";
 choices[0][2] = "Directorio de mensajes";
 choices[0][3] = "Conjunto de c&oacute;digos";
 answers[0] = choices[0][0];
 units[0] = "42";
 comments[0] = "Id Pregunta: 34. ";


//  Id pregunta: 88 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qui&eacute;n dijo que uno de los elementos necesarios en una organizaci&oacute;n es la existencia de un fin com&uacute;n?:";
 choices[1]= new Array();
 choices[1][0] = "Richard Nolan";
 choices[1][1] = "Stephen P. Robbins";
 choices[1][2] = "Andrea Zerilli";
 choices[1][3] = "James C. Emery";
 answers[1] = choices[1][2];
 units[1] = "22";
 comments[1] = "Id Pregunta: 88. NULL";


//  Id pregunta: 145 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  El estudio de la informaci&oacute;n, su calidad, flujo y seguridad es caracter&iacute;stico de:";
 choices[2]= new Array();
 choices[2][0] = "La auditor&iacute;a inform&aacute;tica";
 choices[2][1] = "La planificaci&oacute;n estrat&eacute;gica";
 choices[2][2] = "La planificaci&oacute;n de capacidad del sistema";
 choices[2][3] = "Las t&eacute;cnicas de control de proyectos";
 answers[2] = choices[2][0];
 units[2] = "31,32,33";
 comments[2] = "Id Pregunta: 145. ";


//  Id pregunta: 149 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  El m&eacute;todo Promethee:";
 choices[3]= new Array();
 choices[3][0] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no";
 choices[3][1] = "Su concepto central es de comparaci&oacute;n ternaria de alternativas";
 choices[3][2] = "Exige poca informaci&oacute;n por parte del decisor: evaluaciones ordinales y pesos cardinales";
 choices[3][3] = "Generaliza el m&eacute;todo de ponderaci&oacute;n lineal incorporando al posibilidad de valorar el riesgo";
 answers[3] = choices[3][0];
 units[3] = "34";
 comments[3] = "Id Pregunta: 149. NULL";


//  Id pregunta: 214 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En la estructuraci&oacute;n vertical de un sistema de informaci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Se dispone de 3 niveles: operacional (procedimientos de rutina, grueso de tratamiento de datos), estrat&eacute;gico (toma de decisiones a corto-medio plazo) y t&aacute;ctico (toma de decisiones a largo plazo)";
 choices[4][1] = "Se dispone de 4 niveles: operacional, funcional, t&aacute;ctico y estrat&eacute;gico";
 choices[4][2] = "Se dispone de 3 niveles: operacional (decisiones que afectan a la rutina de tratamiento de datos), funcional (decisiones que afectan al funcionamiento de los subsistemas que componen el sistema) y estrat&eacute;gico (decisiones que afectan a la estrategia social";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][3];
 units[4] = "21";
 comments[4] = "Id Pregunta: 214. ";


//  Id pregunta: 415 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Se define como interoperabilidad la posibilidad de:";
 choices[5]= new Array();
 choices[5][0] = "Manejar un ordenador desde cualquier puesto de trabajo de la red";
 choices[5][1] = "Transmitir datos entre dos ordenadores distintos";
 choices[5][2] = "Compartir procesos y datos entre distintos procesadores";
 choices[5][3] = "Ejecutar la misma aplicaci&oacute;n en plataformas de diferentes fabricantes";
 answers[5] = choices[5][2];
 units[5] = "40";
 comments[5] = "Id Pregunta: 415. ";


//  Id pregunta: 479 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Las caracter&iacute;sticas fundamentales que se buscan con los sistemas abiertos son :";
 choices[6]= new Array();
 choices[6][0] = "Interoperabilidad, escalabilidad y portabilidad";
 choices[6][1] = "Sistemas multiproceso, multiusuario y multitarea compuestos por componentes de diversos fabricantes";
 choices[6][2] = "Poder pasar de un ordenador de sobremesa a un gran mainframe sin tener que cambiar de entorno de trabajo";
 choices[6][3] = "Interconexi&oacute;n de sistemas bajo un mismo sistema operativo, conectividad de perif&eacute;ricos, un entorno consistente en productos y tecnolog&iacute;as y un mejor posicionamiento desde el punto de vista econ&oacute;mico";
 answers[6] = choices[6][0];
 units[6] = "40";
 comments[6] = "Id Pregunta: 479. ";


//  Id pregunta: 716 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  En el lenguaje Java, la misi&oacute;n del recolector de basura (garbage collector) es:";
 choices[7]= new Array();
 choices[7][0] = "Limpiar o eliminar los objetos no usados o referenciados";
 choices[7][1] = "En los que en otros entornos de programcaci&oacute;n se llama depurador o debugger";
 choices[7][2] = "Es parte del estandar JDBC para acceder a tablas de bases de datos";
 choices[7][3] = "Java no dispone de tal mecanismo &quot;garbage collector&quot;";
 answers[7] = choices[7][0];
 units[7] = "60";
 comments[7] = "Id Pregunta: 716. Examen TIC MAP B 2004";


//  Id pregunta: 753 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  Un ejemplo de herramienta Open Source de administraci&oacute;n remota de sistemas Unix/Linux es:";
 choices[8]= new Array();
 choices[8][0] = "WebMin";
 choices[8][1] = "WMI (Web Management &amp; Instrumentation)";
 choices[8][2] = "syslog";
 choices[8][3] = "Performance Monitor";
 answers[8] = choices[8][0];
 units[8] = "53,61,62";
 comments[8] = "Id Pregunta: 753. ";


//  Id pregunta: 766 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  con respecto a las tecnolog&iacute;as de desarrollo web";
 choices[9]= new Array();
 choices[9][0] = "iis act&uacute;a como servidor web de microsoft";
 choices[9][1] = "no se puede acceder a una base de datos oracle desde un entorno microsoft";
 choices[9][2] = "las p&aacute;ginas asp suelen funcionar sobre servidores apache";
 choices[9][3] = "sql server suele estar asociado a la tecnolog&iacute;a php";
 answers[9] = choices[9][0];
 units[9] = "114,115";
 comments[9] = "Id Pregunta: 766. ";


//  Id pregunta: 894 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;En qu&eacute; base num&eacute;rica el n&uacute;mero 6B7 se corresponde con el n&uacute;mero 1003 en decimal?";
 choices[10]= new Array();
 choices[10][0] = "en base 13.";
 choices[10][1] = "en base 7.";
 choices[10][2] = "en base 11.";
 choices[10][3] = "en base 12.";
 answers[10] = choices[10][3];
 units[10] = "";
 comments[10] = "Id Pregunta: 894. ";


//  Id pregunta: 901 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Para qu&eacute; se usa el comando  tee  en Unix?:";
 choices[11]= new Array();
 choices[11][0] = "Se usa para guardar la salida de una orden en un fichero, adem&aacute;s de llevarla a la salida est&aacute;ndar";
 choices[11][1] = "Se utiliza para guardar o recuperar los archivos de una cinta magn&eacute;tica, un disco flexible o un fichero normal";
 choices[11][2] = "Se emplea para comprimir los datos de un fichero";
 choices[11][3] = "Se usa para visualizar los ficheros que se encuentran en una cola de impresi&oacute;n";
 answers[11] = choices[11][0];
 units[11] = "53";
 comments[11] = "Id Pregunta: 901. ";


//  Id pregunta: 905 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Podr&iacute;a indicarnos que componente software presente en todos los miembros de la familia Office de Microsoft es un claro ejemplo de sistema basado en el conocimiento?:";
 choices[12]= new Array();
 choices[12][0] = "El motor de base de datos JET de Access";
 choices[12][1] = "Existen unas librerias presentes sobre todo en Excel, que hacen uso de tecnicas revolucionarias de Inteligencia Emocional";
 choices[12][2] = "Word posee un sistema muy avanzado para la conversi&oacute;n en p&aacute;gina web de sus documentos.";
 choices[12][3] = "El Ayudante de Office";
 answers[12] = choices[12][3];
 units[12] = "63";
 comments[12] = "Id Pregunta: 905. ";


//  Id pregunta: 914 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qu&eacute; diferencia hay entre las arquitecturas peer-to-peer y cliente/servidor?:";
 choices[13]= new Array();
 choices[13][0] = "En una arquitectura peer-to-peer un PC puede actuar simult&aacute;neamente como servidor y cliente";
 choices[13][1] = "En una arquitectura peer-to-peer las aplicaciones residen completamente en cada ordenador";
 choices[13][2] = "En una arquitectura cliente/servidor s&oacute;lo la presentaci&oacute;n reside en el cliente";
 choices[13][3] = "No hay diferencia; son la misma arquitectura";
 answers[13] = choices[13][0];
 units[13] = "50";
 comments[13] = "Id Pregunta: 914. ";


//  Id pregunta: 1223 AÃ±o de creación de pregunta: 2005-01-01
 questions[14]= "15)  Los DN, en LDAP, se representan en:";
 choices[14]= new Array();
 choices[14][0] = "XML";
 choices[14][1] = "HTML";
 choices[14][2] = "Texto plano";
 choices[14][3] = "ASN.1";
 answers[14] = choices[14][2];
 units[14] = "74";
 comments[14] = "Id Pregunta: 1223. RFC 4514";


//  Id pregunta: 1273 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Los documentos &quot;bien formados&quot; en XML:";
 choices[15]= new Array();
 choices[15][0] = "no siguen las reglas de etiquetado de XML pero s&iacute; del DTD";
 choices[15][1] = "siguen las reglas de etiquetado de XML y del DTD";
 choices[15][2] = "no siguen las reglas de etiquetado del DTD pero s&iacute; de XML";
 choices[15][3] = "ninguno de los anteriores";
 answers[15] = choices[15][2];
 units[15] = "69";
 comments[15] = "Id Pregunta: 1273. NULL";


//  Id pregunta: 1339 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Seg&uacute;n la WfMC, un workflow se define como:";
 choices[16]= new Array();
 choices[16][0] = "Automatizaci&oacute;n de un procedimiento de negocio, durente la cual los documentos, la informaci&oacute;n o las tareas pasan de un participante a otro de acuerdo a un conjunto de reglas de procedimiento";
 choices[16][1] = "Una descripci&oacute;n de una pieza de trabajo que forma un paso l&oacute;gico dentro de un proceso";
 choices[16][2] = "La representaci&oacute;n del trabajo que tiene que ser procesado (por un participante) en el contexto de una actividad dentro de un proceso";
 choices[16][3] = "El software que controla la ejecuci&oacute;n de programas en los mainframes, enviando mensajes a las consolas cuando se detecta alguna incidencia";
 answers[16] = choices[16][0];
 units[16] = "71";
 comments[16] = "Id Pregunta: 1339. ";


//  Id pregunta: 1404 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Un sistema situado en una central nuclear, encargado de gestionar su correcto funcionamiento y operativa, controlando todos sus elementos, y que tiene un umbral de tiempo m&aacute;ximo para dar cada respuesta, se cataloga como:";
 choices[17]= new Array();
 choices[17][0] = "Sistema multiprogramado";
 choices[17][1] = "Sistema de tiempo compartido";
 choices[17][2] = "Sistema de tiempo real";
 choices[17][3] = "Sistema multiusuario";
 answers[17] = choices[17][2];
 units[17] = "52";
 comments[17] = "Id Pregunta: 1404. ";


//  Id pregunta: 1483 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un monitor de 20 pulgadas efectivas y de 1600 x 1200 puntos con 256 tonos de grises produce una resoluci&oacute;n de:";
 choices[18]= new Array();
 choices[18][0] = "300 dpi";
 choices[18][1] = "30 dpi";
 choices[18][2] = "100 dpi";
 choices[18][3] = "50 dpi";
 answers[18] = choices[18][2];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1483. ";


//  Id pregunta: 1651 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no son herramientas o plataformas de e-learning ?";
 choices[19]= new Array();
 choices[19][0] = "aTutor";
 choices[19][1] = "WebCT";
 choices[19][2] = "eSchool";
 choices[19][3] = "Blackboard";
 answers[19] = choices[19][2];
 units[19] = "66";
 comments[19] = "Id Pregunta: 1651. ";


//  Id pregunta: 1838 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Indicar la respuesta falsa respecto al protocolo SET (Secure Electronic Transaction):";
 choices[20]= new Array();
 choices[20][0] = "Fue desarrollado por Visa y MasterCard";
 choices[20][1] = "Hace uso de criptograf&iacute;a mediante DES y RSA";
 choices[20][2] = "Garantiza la autenticaci&oacute;n e integridad de la comunicaci&oacute;n";
 choices[20][3] = "Fue desarrollado tras el fracso de la tecnolog&iacute;a 3D-Secure de Visa";
 answers[20] = choices[20][3];
 units[20] = "70";
 comments[20] = "Id Pregunta: 1838. NULL";


//  Id pregunta: 1993 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  La &quot;descomposicion del problema&quot; es una actividad b&aacute;sica en el an&aacute;lisis de requisitos de los sistemas de informaci&oacute;n. Esta &quot;descomposici&oacute;n&quot; se aplica sobre dos &aacute;reas:";
 choices[21]= new Array();
 choices[21][0] = "La funcionalidad a entregar y el proceso que se utilizar&aacute; para entregarla";
 choices[21][1] = "El hardware y el software previsto en el proyecto";
 choices[21][2] = "El modelado de datos y el modelado de procesos";
 choices[21][3] = "El an&aacute;lisis funcional y el an&aacute;lisis org&aacute;nico";
 answers[21] = choices[21][0];
 units[21] = "78";
 comments[21] = "Id Pregunta: 1993. Pregunta TIC-B 2004";


//  Id pregunta: 2040 AÃ±o de creación de pregunta: 2004-01-01
 questions[22]= "23)  El conjunto de actividades que es necesario realizar para asegurar que el producto software responde a las necesidades expresadas por el usuario se denomina:";
 choices[22]= new Array();
 choices[22][0] = "Control de calidad";
 choices[22][1] = "Modelo de calidad";
 choices[22][2] = "Garant&iacute;a de calidad";
 choices[22][3] = "Plan General de Calidad";
 answers[22] = choices[22][2];
 units[22] = "92";
 comments[22] = "Id Pregunta: 2040. NULL";


//  Id pregunta: 2073 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad de SW, seg&uacute;n McCall?";
 choices[23]= new Array();
 choices[23][0] = "Integridad";
 choices[23][1] = "Sencillez";
 choices[23][2] = "Mantenibilidad";
 choices[23][3] = "Portabilidad";
 answers[23] = choices[23][1];
 units[23] = "88";
 comments[23] = "Id Pregunta: 2073. ";


//  Id pregunta: 2295 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  El objetivo del modelo conceptual es:";
 choices[24]= new Array();
 choices[24][0] = "Establecer una visi&oacute;n global de los datos";
 choices[24][1] = "Establecer el detalle de las propiedades";
 choices[24][2] = "Definir las propiedades de cada entidad";
 choices[24][3] = "Definir el flujo de informaci&oacute;n";
 answers[24] = choices[24][0];
 units[24] = "80";
 comments[24] = "Id Pregunta: 2295. ";


//  Id pregunta: 2462 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)   En programaci&oacute;n orientada a objetos, los objetos act&uacute;an en respuesta a los mensajes que reciben. El mismo mensaje puede originar conductas completamente diferentes al ser recibido por diferentes objetos. Este fen&oacute;meno se conoce como:";
 choices[25]= new Array();
 choices[25][0] = "Herencia";
 choices[25][1] = "Encapsulaci&oacute;n";
 choices[25][2] = "Abstracci&oacute;n";
 choices[25][3] = "Polimorfismo";
 answers[25] = choices[25][3];
 units[25] = "82";
 comments[25] = "Id Pregunta: 2462. ";


//  Id pregunta: 2687 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Teniendo en cuenta la agudeza visual humana y la unidad m&iacute;nima de resoluci&oacute;n, los procesos de tratamiento digital de imagen deber&iacute;an llevarse a cabo entre:";
 choices[26]= new Array();
 choices[26][0] = "25 &micro;m y 100 &micro;m.";
 choices[26][1] = "0,4 &micro;m y 0,7 &micro;m.";
 choices[26][2] = "0,3 &micro;m y 1 mm.";
 choices[26][3] = "Ninguna de las anteriores.";
 answers[26] = choices[26][0];
 units[26] = "93";
 comments[26] = "Id Pregunta: 2687. NULL";


//  Id pregunta: 2882 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  Indique cu&aacute;l de las siguientes reglas es cierta  con respecto al Flujo de Datos, como elemento de un DFD:";
 choices[27]= new Array();
 choices[27][0] = "No puede crear ni destruir los datos";
 choices[27][1] = "Puede transformar un dato en varios";
 choices[27][2] = "Activa Procesos";
 choices[27][3] = "Transforma los flujos de datos de entrada en flujos de salida de datos";
 answers[27] = choices[27][0];
 units[27] = "81";
 comments[27] = "Id Pregunta: 2882. ";


//  Id pregunta: 2924 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  En relaci&oacute;n a los servicios web se&ntilde;ale la opci&oacute;n incorrecta";
 choices[28]= new Array();
 choices[28][0] = "SOAP (Simple Object access Protocol &oacute; Services-Oriented Architecture Protocol) es el protocolo de comunicaciones para los Servicios Web";
 choices[28][1] = "WSML (Web Service Markup Language) describe el interfaz externo de un Servicio Web y c&oacute;mo utilizarlo";
 choices[28][2] = "UDDI (Universal Discovery, Descripcion and Integration) es un protocolo para registros basados en web que contiene informaci&oacute;n acerca de servicios. Un registro UDDI es como el list&iacute;n de los servicios.";
 choices[28][3] = "Un Servicio Web se describe con un archivo WSDL, se registra en UDDI y se muestra en web a trav&eacute;s de SOAP.";
 answers[28] = choices[28][1];
 units[28] = "51";
 comments[28] = "Id Pregunta: 2924. Similar a examen TIC SS A 2003";


//  Id pregunta: 3144 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta cuando se estudia la relaci&oacute;n entre la velocidad de transmisi&oacute;n de una se&ntilde;al digital y la frecuencia m&aacute;xima de la se&ntilde;al?:";
 choices[29]= new Array();
 choices[29][0] = "No existe ninguna relaci&oacute;n directa";
 choices[29][1] = "Cuanto mayor sea el ancho de banda de la se&ntilde;al, menor es la velocidad de transmisi&oacute;n";
 choices[29][2] = "Cuanto mayor sea la velocidad de transmisi&oacute;n, menor es el ancho de banda";
 choices[29][3] = "Cuanto menor sea el ancho de banda, menor es la velocidad de transmisi&oacute;n";
 answers[29] = choices[29][3];
 units[29] = "99";
 comments[29] = "Id Pregunta: 3144. NULL";


//  Id pregunta: 3387 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  El m&oacute;dulo de transferencia s&iacute;ncrono (STM) principal de SDH  se transmite a una velocidad de:";
 choices[30]= new Array();
 choices[30][0] = "51.84 Mbps";
 choices[30][1] = "1984 kbps";
 choices[30][2] = "100 Mbps";
 choices[30][3] = "155.52 Mbps";
 answers[30] = choices[30][3];
 units[30] = "108";
 comments[30] = "Id Pregunta: 3387. ";


//  Id pregunta: 3426 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de fibra &oacute;ptica:";
 choices[31]= new Array();
 choices[31][0] = "802.6";
 choices[31][1] = "802.7";
 choices[31][2] = "802.8";
 choices[31][3] = "802.9";
 answers[31] = choices[31][2];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3426. ";


//  Id pregunta: 3576 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  En una red local con un &uacute;nico servidor de ficheros, existen problemas de tiempo de respuesta pues un excesivo n&uacute;mero de nodos intenta acceso al mismo. Indique cual de las opciones siguientes resuelve t&eacute;cnica y econ&oacute;micamente el problema:";
 choices[32]= new Array();
 choices[32][0] = "La utilizaci&oacute;n de un gateway entre dos segmentos de la red";
 choices[32][1] = "La utilizaci&oacute;n de un router entre los dos segmentos de la red";
 choices[32][2] = "La utilizaci&oacute;n de un bridge entre los dos segmentos de la red";
 choices[32][3] = "Ning&uacute;n dispositivo de comunicaciones resolver&iacute;a el problema";
 answers[32] = choices[32][3];
 units[32] = "102";
 comments[32] = "Id Pregunta: 3576. ";


//  Id pregunta: 3612 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  La interconexi&oacute;n de redes privadas a trav&eacute;s de la red 'p&uacute;blica' Internet manteniendo sus propias direcciones IP se consigue por medio de:";
 choices[33]= new Array();
 choices[33][0] = "Firewalls";
 choices[33][1] = "Proxies a nivel de aplicaci&oacute;n";
 choices[33][2] = "Tunneling o encapsulado";
 choices[33][3] = "Cifrado de las cabeceras IP";
 answers[33] = choices[33][2];
 units[33] = "103,113";
 comments[33] = "Id Pregunta: 3612. ";


//  Id pregunta: 3797 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Respecto al interfaz Centronics, no es cierto que:";
 choices[34]= new Array();
 choices[34][0] = "es un interfaz paralelo, unidireccional y as&iacute;ncrono";
 choices[34][1] = "es el interfaz tradicionalmente utilizado con las impresoras";
 choices[34][2] = "el cable lleva por un lado un conector DB-25 para el PC y por otro el conector de 36 pines para el perif&eacute;rico";
 choices[34][3] = "Todas las respuestas anteriores son ciertas";
 answers[34] = choices[34][3];
 units[34] = "48";
 comments[34] = "Id Pregunta: 3797. ";


//  Id pregunta: 3811 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Seg&uacute;n las RFCs 822 y 2822, sobre el formato de los mensajes de correo electr&oacute;nico, &eacute;stos se componen de:";
 choices[35]= new Array();
 choices[35][0] = "sobre, cabeceras y cuerpo";
 choices[35][1] = "cabeceras, cuerpo y cola";
 choices[35][2] = "sobre, cabeceras, cuerpo y cola";
 choices[35][3] = "cabeceras y cuerpo";
 answers[35] = choices[35][0];
 units[35] = "106";
 comments[35] = "Id Pregunta: 3811. ";


//  Id pregunta: 3843 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  STP proporciona:";
 choices[36]= new Array();
 choices[36][0] = "Puntos de acceso s&iacute;ncronos de transferencia de datos en RDSI";
 choices[36][1] = "Conmutaci&oacute;n de mensajes entre nodos de SS7";
 choices[36][2] = "Temporizaci&oacute;n exacta en redes WDM";
 choices[36][3] = "Nada de lo anterior es cierto";
 answers[36] = choices[36][1];
 units[36] = "103";
 comments[36] = "Id Pregunta: 3843. ";


//  Id pregunta: 3899 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Indicar la afirmaci&oacute;n falsa sobre SDH:";
 choices[37]= new Array();
 choices[37][0] = "Permite compatibilidad hacia adelante y hacia atr&aacute;s";
 choices[37][1] = "No permite la incorporaci&oacute;n de otras tecnolog&iacute;as de redes &oacute;pticas y de banda ancha";
 choices[37][2] = "SDH es el est&aacute;ndar europeo, mientras que SONET es el norteamericano";
 choices[37][3] = "Se dise&ntilde;&oacute; para sobrellevar las deficiencias de compatibilidad de los sistemas de transmisi&oacute;n PDH";
 answers[37] = choices[37][1];
 units[37] = "99";
 comments[37] = "Id Pregunta: 3899. ";


//  Id pregunta: 3993 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En el protocolo SNMPv2, un mensaje PDU GetRequest:";
 choices[38]= new Array();
 choices[38][0] = "Permite respuestas parciales al solicitar el valor de varios objetos.";
 choices[38][1] = "No permite respuestas parciales al solicitar el valor de varios objetos";
 choices[38][2] = "Es emitida por el agente al gestor.";
 choices[38][3] = "Es id&eacute;ntico al mensaje PDU GetBulkRequest.";
 answers[38] = choices[38][0];
 units[38] = "104";
 comments[38] = "Id Pregunta: 3993. ";


//  Id pregunta: 4110 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  IRC es:";
 choices[39]= new Array();
 choices[39][0] = "Internet Random Card, un protocolo para acceder al servicio de videoconferencia a trav&eacute;s de Internet.";
 choices[39][1] = "Internet Requery Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como XChat.";
 choices[39][2] = "Internet Relay Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como mIRC.";
 choices[39][3] = "b) y c) son correctas.";
 answers[39] = choices[39][2];
 units[39] = "112";
 comments[39] = "Id Pregunta: 4110. ";


//  Id pregunta: 4112 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Las siglas NNTP corresponden a:";
 choices[40]= new Array();
 choices[40][0] = "Native News Transport Protocol";
 choices[40][1] = "Native Network Transport Protocol";
 choices[40][2] = "Network News Transport Protocol";
 choices[40][3] = "Todas las anteriores son falsas";
 answers[40] = choices[40][2];
 units[40] = "112";
 comments[40] = "Id Pregunta: 4112. ";


//  Id pregunta: 4248 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  El desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a NO se dirige hacia:";
 choices[41]= new Array();
 choices[41][0] = "Que los ciudadanos puedan elegir el canal de acceso a las AAPP (tel&eacute;fono, Internet, SMSs, TDT...).";
 choices[41][1] = "Que los ciudadanos puedan acceder a los servicios de las AAPP 24 horas al d&iacute;a, 7 d&iacute;as a la semana.";
 choices[41][2] = "Que los tr&aacute;mites por medios electr&oacute;nicos no obtengan la misma validez que los realizados por medios presenciales.";
 choices[41][3] = "Que los ciudadanos no tengan que presentar documentaci&oacute;n que obre en poder de las AAPP.";
 answers[41] = choices[41][2];
 units[41] = "30";
 comments[41] = "Id Pregunta: 4248. NULL";


//  Id pregunta: 4271 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Indique cu&aacute;l de los siguientes est&aacute;ndares se aplica a la seguridad de los sistemas inform&aacute;ticos";
 choices[42]= new Array();
 choices[42][0] = "ISO 12207";
 choices[42][1] = "ISO 2167";
 choices[42][2] = "ISO 27002";
 choices[42][3] = "ISO 9004";
 answers[42] = choices[42][2];
 units[42] = "33";
 comments[42] = "Id Pregunta: 4271. ";


//  Id pregunta: 4284 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre las estructuras de datos no es correcta?";
 choices[43]= new Array();
 choices[43][0] = "Una estructura de datos es un conjunto de variables de determinado tipo, agrupadas y organizadas para representar un comportamiento";
 choices[43][1] = "En general, la elecci&oacute;n del algoritmo y de las estructuras de datos que manipular&aacute; no tienen mucha relaci&oacute;n (bajo acoplamiento).";
 choices[43][2] = "Con las estructuras de datos se pretende facilitar un esquema l&oacute;gico para manipular los datos en funci&oacute;n del problema a resolver.";
 choices[43][3] = "Las estructuras de datos pueden ser est&aacute;ticas y din&aacute;micas.";
 answers[43] = choices[43][1];
 units[43] = "79";
 comments[43] = "Id Pregunta: 4284. ";


//  Id pregunta: 4470 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cual de los siguientes modelos de ciclo de vida no es adecuado para el desarrollo de sistemas de informaci&oacute;n orientados a objetos?";
 choices[44]= new Array();
 choices[44][0] = "Modelo de agrupamiento.";
 choices[44][1] = "Modelo en cascada.";
 choices[44][2] = "Modelo remolino.";
 choices[44][3] = "Modelo pinball.";
 answers[44] = choices[44][1];
 units[44] = "76";
 comments[44] = "Id Pregunta: 4470. ";


//  Id pregunta: 4474 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Cual de los siguientes no es un tipo de prueba contemplado en la metodolog&iacute;a Metrica V3?";
 choices[45]= new Array();
 choices[45][0] = "Pruebas unitarias.";
 choices[45][1] = "Pruebas singulares.";
 choices[45][2] = "Pruebas de integraci&oacute;n.";
 choices[45][3] = "Pruebas de regresi&oacute;n.";
 answers[45] = choices[45][1];
 units[45] = "86";
 comments[45] = "Id Pregunta: 4474. NULL";


//  Id pregunta: 4586 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Las siglas HSDPA corresponden a:";
 choices[46]= new Array();
 choices[46][0] = "High-Speed Dynamic Packet Access";
 choices[46][1] = "High-Speed Downlink Packet Access";
 choices[46][2] = "High-Speed Data Packet Access";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = choices[46][1];
 units[46] = "108";
 comments[46] = "Id Pregunta: 4586. ";


//  Id pregunta: 4597 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En Ia tecnolog&iacute;a ATM qu&eacute; tipo de protocolo utilizar&iacute;a en la capa de adaptaci&oacute;n al medio si estamos trabajando en modo orientado a conexi&oacute;n y con una tasa de bits constante:";
 choices[47]= new Array();
 choices[47][0] = "Tipo 1";
 choices[47][1] = "Tipo 2";
 choices[47][2] = "Tipo 3/4";
 choices[47][3] = "Tipo 5";
 answers[47] = choices[47][0];
 units[47] = "109";
 comments[47] = "Id Pregunta: 4597. ";


//  Id pregunta: 4699 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  IEFT (Internet Engineering Task Force) se encarga de:";
 choices[48]= new Array();
 choices[48][0] = "Coordinaci&oacute;n entre organizaciones como IEFT, IANA, etc.";
 choices[48][1] = "Asignaci&oacute;n de recursos";
 choices[48][2] = "La supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[48][3] = "Especificaci&oacute;n de est&aacute;ndares.";
 answers[48] = choices[48][3];
 units[48] = "42";
 comments[48] = "Id Pregunta: 4699. Examen 2006 JCYL";


//  Id pregunta: 5032 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta respecto al modelo de datos relacional:";
 choices[49]= new Array();
 choices[49][0] = "Una clave candidata es el conjunto de atributos cuyos valores han de coincidir con los valores de la claveprimaria de otra relaci&oacute;n";
 choices[49][1] = "Una clave ajena es el conjunto de atributos que determinan un&iacute;voca y m&iacute;nimamente cada tupla";
 choices[49][2] = "En una relaci&oacute;n no pueden existir varias claves candidatas";
 choices[49][3] = "Para las claves ajenas, la regla de integridad referencial establece que los valores de la clave ajena puedenser nulos";
 answers[49] = choices[49][3];
 units[49] = "58";
 comments[49] = "Id Pregunta: 5032. Examen TIC A 2007";


//  Id pregunta: 5244 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[50]= new Array();
 choices[50][0] = "Los FCE ayudan a la planificaci&oacute;n de las actividades y recursos de una organizaci&oacute;n";
 choices[50][1] = "Factores de &eacute;xito son los objetivos de la organizaci&oacute;n";
 choices[50][2] = "FCE son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[50][3] = "Para definir los FCE de la organizaci&oacute;n, es necesario que los objetivos de la misma est&eacute;n claramente definidos";
 answers[50] = choices[50][1];
 units[50] = "77";
 comments[50] = "Id Pregunta: 5244. ";


//  Id pregunta: 5276 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indique cu&aacute;l de los siguientes no es un servicio b&aacute;sico de la red SARA de las administraciones:";
 choices[51]= new Array();
 choices[51][0] = "SMTP";
 choices[51][1] = "PROXY";
 choices[51][2] = "DHCP";
 choices[51][3] = "DNS";
 answers[51] = choices[51][2];
 units[51] = "103";
 comments[51] = "Id Pregunta: 5276. ";


//  Id pregunta: 5529 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indicar cu&aacute;l de las siguientes son t&eacute;cnicas basadas en la comparaci&oacute;n de patrones para el reconocimiento de la voz";
 choices[52]= new Array();
 choices[52][0] = "Programaci&oacute;n din&aacute;mica o DTW (Dynamic Time Warping)";
 choices[52][1] = "Modelos ocultos de Markov o HMM (Hidden Markov Models)";
 choices[52][2] = "Las respuestas a) y b) son verdaderas";
 choices[52][3] = "Ninguna es verdadera";
 answers[52] = choices[52][2];
 units[52] = "94";
 comments[52] = "Id Pregunta: 5529. ";


//  Id pregunta: 5559 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  En base al TRLPI (RD 1/1996) y las modificaciones introducidas por la Ley 23/2006:";
 choices[53]= new Array();
 choices[53][0] = "La copia privada se entiende como un derecho de los usuarios.";
 choices[53][1] = "Este derecho de copia privada da lugar al establecimiento de una remuneraci&oacute;n compensatoria para los autores.";
 choices[53][2] = "Dicha remuneraci&oacute;n compensatoria aplica tambi&eacute;n a los programas de ordenador y bases de datos.";
 choices[53][3] = "El canon aplicado a los equipos de reproducci&oacute;n digitales deber&aacute; revisarse cada 2 a&ntilde;os.";
 answers[53] = choices[53][3];
 units[53] = "37";
 comments[53] = "Id Pregunta: 5559. ";


//  Id pregunta: 5697 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;C&oacute;mo se conecta el DNI electr&oacute;nico al ordenador personal del ciudadano?";
 choices[54]= new Array();
 choices[54][0] = "Es necesario un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en las comisar&iacute;as";
 choices[54][1] = " A trav&eacute;s de un lector de tarjetas que cumpla el standard ISO-7816";
 choices[54][2] = "Con un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en establecimientos comerciales";
 choices[54][3] = "No es posible conectarlo a ordenadores personales, s&oacute;lo los especialmente habilitados para ello por la Direcci&oacute;n General de la Polic&iacute;a";
 answers[54] = choices[54][1];
 units[54] = "74";
 comments[54] = "Id Pregunta: 5697. NULL";


//  Id pregunta: 5754 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de estos diagramas de UML no est&aacute; categorizado como un diagrama de comportamiento?";
 choices[55]= new Array();
 choices[55][0] = "Diagrama de interacci&oacute;n.";
 choices[55][1] = "Diagrama de casos de uso.";
 choices[55][2] = "Diagrama de objetos.";
 choices[55][3] = "Diagrama de actividad.";
 answers[55] = choices[55][2];
 units[55] = "82";
 comments[55] = "Id Pregunta: 5754. ";


//  Id pregunta: 5780 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  Se&ntilde;ale c&oacute;mo se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET se denomina:";
 choices[56]= new Array();
 choices[56][0] = "CLS";
 choices[56][1] = "MSIL";
 choices[56][2] = "Bytecode";
 choices[56][3] = "JIT";
 answers[56] = choices[56][0];
 units[56] = "59";
 comments[56] = "Id Pregunta: 5780. MAP 2008 A2";


//  Id pregunta: 5822 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  El Reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, aprobado por Rel Decreto 1720/2007 de 21 de diciembre, indica que el plazo m&aacute;ximo para dictar y notificar resoluci&oacute;n acerca de la inscripci&oacute;n, modificaci&oacute;n o cancelaci&oacute;n de ficheros ser&aacute; de:";
 choices[57]= new Array();
 choices[57][0] = "Un mes";
 choices[57][1] = "Dos meses";
 choices[57][2] = "Tres meses";
 choices[57][3] = "Seis meses";
 answers[57] = choices[57][0];
 units[57] = "29";
 comments[57] = "Id Pregunta: 5822. MAP 2008 A1";


//  Id pregunta: 5904 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  El modelo CMMI (Capability Maturity Model Integration) es:";
 choices[58]= new Array();
 choices[58][0] = "Un modelo para la mejora de resultados de la organizaci&oacute;n";
 choices[58][1] = "Un modelo para la mejora de los procesos de la organizaci&oacute;n";
 choices[58][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n";
 choices[58][3] = "Un modelo para la mejora de la consistencia de los datos de una organizaci&oacute;n";
 answers[58] = choices[58][1];
 units[58] = "87";
 comments[58] = "Id Pregunta: 5904. MAP 2008 A1";


//  Id pregunta: 5976 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[59]= new Array();
 choices[59][0] = "Internet Information Server.";
 choices[59][1] = "Weblogic.";
 choices[59][2] = "Websphere.";
 choices[59][3] = "Apache.";
 answers[59] = choices[59][3];
 units[59] = "113";
 comments[59] = "Id Pregunta: 5976. TIC A 2009";


//  Id pregunta: 6178 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Se&ntilde;ale la informaci&oacute;n falsa sobre AJAX:";
 choices[60]= new Array();
 choices[60][0] = "Las aplicaciones desarrolladas con AJAX usan Javascript y XML.";
 choices[60][1] = "Las aplicaciones desarrolladas con AJAX tienen una mejor experiencia de usuario.";
 choices[60][2] = "AJAX es la base de las Rich Internet Applications.";
 choices[60][3] = "Las aplicaciones AJAX son de tipo pull.";
 answers[60] = choices[60][3];
 units[60] = "69";
 comments[60] = "Id Pregunta: 6178. NULL";


//  Id pregunta: 6325 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Para modificar la estructura de una tabla en SQL";
 choices[61]= new Array();
 choices[61][0] = "No se puede modificar la estuctura de la tabla despu&eacute;s de que se ha puesto en producci&oacute;n.";
 choices[61][1] = "Las tablas se modifican con el comando UPDATE.";
 choices[61][2] = "Las tablas se modifican con el comando ALTER.";
 choices[61][3] = "Existen distintos comandos, pero lo importante es que la tabla est&eacute; vacia.";
 answers[61] = choices[61][2];
 units[61] = "58";
 comments[61] = "Id Pregunta: 6325. ";


//  Id pregunta: 6407 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Puede el cesionario titular de derechos de explotaci&oacute;n realizar o autorizar la realizaci&oacute;n de versiones sucesivas de un programa o programas derivados del mismo, sin permiso del autor?";
 choices[62]= new Array();
 choices[62][0] = "No, salvo pacto en contrario";
 choices[62][1] = "S&iacute;, salvo pacto en contrario";
 choices[62][2] = "S&iacute;, en cualquier caso";
 choices[62][3] = "No, en ning&uacute;n caso";
 answers[62] = choices[62][1];
 units[62] = "36";
 comments[62] = "Id Pregunta: 6407. Art&iacute;culo 100 RDL 1/1996";


//  Id pregunta: 6420 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Qu&eacute; es TAW?";
 choices[63]= new Array();
 choices[63][0] = "Es una familia de herramienta para el an&aacute;lisis de la accesibilidad  de sitios web.";
 choices[63][1] = "Es un Gestor de Contenidos";
 choices[63][2] = "Es un tipo de licencia de software libre";
 choices[63][3] = "Es una herramienta de workgroup";
 answers[63] = choices[63][0];
 units[63] = "39";
 comments[63] = "Id Pregunta: 6420. NULL";


//  Id pregunta: 6451 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes es un JFS (Journaling File System)?";
 choices[64]= new Array();
 choices[64][0] = "FAT16";
 choices[64][1] = "ReiserFS";
 choices[64][2] = "ext32";
 choices[64][3] = "Linux extended";
 answers[64] = choices[64][1];
 units[64] = "52";
 comments[64] = "Id Pregunta: 6451. Castilla La Mancha 2009";


//  Id pregunta: 6515 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto al lenguaje de programaci&oacute;n Java:";
 choices[65]= new Array();
 choices[65][0] = "Una clase 'final' no puede tener clases que hereden de ella.";
 choices[65][1] = "Una clase abstracta (abstract) es una clase que puede tener clases que hereden de ella, pero no puede ser instanciada.";
 choices[65][2] = "Las variables y m&eacute;todos de instancia privados s&oacute;lo pueden ser accedidos desde dentro de la clase y desde las subclases. ";
 choices[65][3] = "No se permite herencia m&uacute;ltiple.";
 answers[65] = choices[65][2];
 units[65] = "60";
 comments[65] = "Id Pregunta: 6515. NULL";


//  Id pregunta: 6549 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Qu&eacute; m&eacute;todo de control de acceso est&aacute; dirigida al usuario?";
 choices[66]= new Array();
 choices[66][0] = "No discrecional";
 choices[66][1] = "MAC";
 choices[66][2] = "Basado en identidades";
 choices[66][3] = "DAC";
 answers[66] = choices[66][3];
 units[66] = "111";
 comments[66] = "Id Pregunta: 6549. NULL";


//  Id pregunta: 6552 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Dentro de los Est&aacute;ndares de Criptograf&iacute;a de Clave P&uacute;blica (PKCS)";
 choices[67]= new Array();
 choices[67][0] = "PKCS#1: Corresponde al algoritmo RSA";
 choices[67][1] = "PKCS#3: Corresponde al algoritmo Diffie-Hellman";
 choices[67][2] = "PKCS#5: Cifrado con clave privada";
 choices[67][3] = "Todas las respuestas anteriores son correctas";
 answers[67] = choices[67][3];
 units[67] = "74";
 comments[67] = "Id Pregunta: 6552. NULL";


//  Id pregunta: 7153 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Para crear discos virtuales se utiliza tecnolog&iacute;a RAID se&ntilde;ale la opci&oacute;n falsa:";
 choices[68]= new Array();
 choices[68][0] = "El RAID 0 aporta mayor disponibilidad que el RAID  1";
 choices[68][1] = "El RAID  1 cuenta con una configuraci&oacute;n de discos en espejo";
 choices[68][2] = "El coste de RAID 1 es mayor que el de RAID 5.";
 choices[68][3] = "El RAID 5 usa divisi&oacute;n de datos a nivel de bloques distribuyendo la informaci&oacute;n de paridad entre todos los discos miembros del conjunto";
 answers[68] = choices[68][0];
 units[68] = "48";
 comments[68] = "Id Pregunta: 7153. Examen TIC B 2009";


//  Id pregunta: 7254 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  MPLS (Multiprotocol Label Switching) opera:";
 choices[69]= new Array();
 choices[69][0] = "Sobre el protocolo IP, y por debajo del protocolo TCP";
 choices[69][1] = "Entre la capa de enlace de datos y la capa de red del modelo OSI";
 choices[69][2] = "Entre el protocolo TCP y los protocolos del nivel de Aplicaci&oacute;n";
 choices[69][3] = "Entre la capa del nivel de red y la capa de transporte del modelo TCP/IP";
 answers[69] = choices[69][1];
 units[69] = "100";
 comments[69] = "Id Pregunta: 7254. Examen TIC B 2009";


//  Id pregunta: 8177 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l es la afirmaci&oacute;n INCORRECTA respecto a los Sistemas de Cableado?:";
 choices[70]= new Array();
 choices[70][0] = "Las ventanas hist&oacute;ricamente definidas para transmisi&oacute;n en fibra &oacute;ptica se encuentran situadas alrededor de los 850, 1310 y 1550 nm.";
 choices[70][1] = "La diafon&iacute;a se clasifica en paradiafon&iacute;a y telediafon&iacute;a.";
 choices[70][2] = "La propagaci&oacute;n en las fibras &oacute;pticas depende de la reflexi&oacute;n interna que se produce gracias a que el revestimiento tiene un &iacute;ndice de refracci&oacute;n mayor que el del n&uacute;cleo.";
 choices[70][3] = "La fibra monomodo se puede lograr reduciendo el di&aacute;metro del n&uacute;cleo.";
 answers[70] = choices[70][2];
 units[70] = "99";
 comments[70] = "Id Pregunta: 8177. Examen TIC A1 2010";


//  Id pregunta: 8184 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Conforme a la especificaci&oacute;n 3GPP TS 03.60, GPRS se implementa l&oacute;gicamente a&ntilde;adiendo a la estructura de GSM los nodos Serving GPRS Support Node (SGSN) y Gateway GPRS Support Node (GGSN). &iquest;Cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[71]= new Array();
 choices[71][0] = "Entre ambos tipos de nodos se define la Intefaz Gn si est&aacute;n situados en la misma red m&oacute;vil (PLMN).";
 choices[71][1] = "El SGSN es el nodo de interconexi&oacute;n con la Red de Conmutaci&oacute;n de Paquetes o Packet Data Network (PDN).";
 choices[71][2] = "La funcionalidad proporcionada por SGSN y GGSN debe residir en diferentes nodos f&iacute;sicos.";
 choices[71][3] = "Entre ambos tipos de nodos se define la Intefaz Gi si est&aacute;n situados en distinta red m&oacute;vil (PLMN).";
 answers[71] = choices[71][0];
 units[71] = "108";
 comments[71] = "Id Pregunta: 8184. Examen TIC A1 2010";


//  Id pregunta: 8218 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  La distancia de Hamming entre las palabras 01000 y 01010 es:";
 choices[72]= new Array();
 choices[72][0] = "1";
 choices[72][1] = "2";
 choices[72][2] = "3";
 choices[72][3] = "4";
 answers[72] = choices[72][0];
 units[72] = "45";
 comments[72] = "Id Pregunta: 8218. Examen TIC A1 2010";


//  Id pregunta: 8251 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Con respecto a sistemas de almacenamiento, indique cu&aacute;l de las siguientes asociaciones de t&eacute;rminos es correcta:";
 choices[73]= new Array();
 choices[73][0] = "Protocolos: CIFS, NDMP, iFCP, NFS.";
 choices[73][1] = "Dispositivos &oacute;pticos: DVD, MO, LTO, UDO.";
 choices[73][2] = "Redes SAN: SCSI, ESCON, FICON, WAFS.";
 choices[73][3] = "Formatos de cintas: FATA, TRAVAN, DLT, DAT.";
 answers[73] = choices[73][0];
 units[73] = "48";
 comments[73] = "Id Pregunta: 8251. Examen TIC A1 2010";


//  Id pregunta: 8409 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Si en un sistema UNIX, se quiere que el archivo test.txt pueda ser le&iacute;do, modificado (escrito) y ejecutado por su propietario, le&iacute;do y ejecutado por los usuarios que pertenecen al mismo grupo que el propietario, y tan s&oacute;lo le&iacute;do por el resto, &iquest;qu&eacute; instrucci&oacute;n de las siguientes se debe ejecutar?";
 choices[74]= new Array();
 choices[74][0] = "chmod 652 test.txt ";
 choices[74][1] = "chmod 754 test.txt ";
 choices[74][2] = "chmod 654 test.txt ";
 choices[74][3] = "chmod 752 test.txt ";
 answers[74] = choices[74][1];
 units[74] = "53, 54";
 comments[74] = "Id Pregunta: 8409. Examen TIC A2 2010";


//  Id pregunta: 8540 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes algoritmos de cifrado NO se implementa en WiMax?";
 choices[75]= new Array();
 choices[75][0] = "3DES";
 choices[75][1] = "SEAL";
 choices[75][2] = "AES";
 choices[75][3] = "RSA";
 answers[75] = choices[75][1];
 units[75] = "107";
 comments[75] = "Id Pregunta: 8540. Examen TIC A2 2010 interna";


//  Id pregunta: 8649 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Seg&uacute;n M&eacute;trica v3. &iquest;cu&aacute;l de las siguientes listas esta correctamente ordenada de mayor a menor acoplamiento?";
 choices[76]= new Array();
 choices[76][0] = "De contenido, com&uacute;n, de control, externo, de datos.";
 choices[76][1] = "De datos, de marca, externo, de control, com&uacute;n, de contenido";
 choices[76][2] = "De datos, de marca, de control, externo, com&uacute;n, de contenido";
 choices[76][3] = "De contenido, com&uacute;n, externo, de marca, de datos";
 answers[76] = choices[76][3];
 units[76] = "86";
 comments[76] = "Id Pregunta: 8649. Examen TIC A2 2010 interna";


//  Id pregunta: 8750 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Dentro del contexto que marca la Ley 11/2007, un expediente electr&oacute;nico es:";
 choices[77]= new Array();
 choices[77][0] = "La copia electr&oacute;nica de un expediente en papel, que es el que conservar&aacute; la eficacia jur&iacute;dica, foliado mediante un &Iacute;ndice electr&oacute;nico y firmado electr&oacute;nicamente";
 choices[77][1] = "El conjunto de documentos electr&oacute;nicos correspondientes a alguno de los procedimientos administrativos incluidos en la normativa de creaci&oacute;n de la sede electr&oacute;nica";
 choices[77][2] = "El conjunto de documentos electr&oacute;nicos correspondientes a un procedimiento administrativo, cualquiera que sea el Upo de informaci&oacute;n que contengan";
 choices[77][3] = "Una aplicaci&oacute;n inform&aacute;tica para la gesti&oacute;n automatizada de expedientes en el &aacute;mbito de la Administraci&oacute;n General del Estado.";
 answers[77] = choices[77][2];
 units[77] = "43";
 comments[77] = "Id Pregunta: 8750. Examen TIC A2 2010 interna";


//  Id pregunta: 8771 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Se ha comprado una c&aacute;mara IP que requiere m&aacute;s potencia de la habitual, m&aacute;s que con la normal IEEE 802.3.af. Esta c&aacute;mara funciona con la versi&oacute;n actualizada de IEEE 802.3af y requiere POE con mayor alimentaci&oacute;n. Como se llama esta norma si es que existe:";
 choices[78]= new Array();
 choices[78][0] = "IEEE 802.3at, PoE+ o PoE Plus.";
 choices[78][1] = "IEEE 802.3ag, o PoE extendido.";
 choices[78][2] = "PoE2.";
 choices[78][3] = "No existe una actualizaci&oacute;n del standard IEEE 802.3af";
 answers[78] = choices[78][0];
 units[78] = "101";
 comments[78] = "Id Pregunta: 8771. Examen UPM A2 2011";


//  Id pregunta: 8889 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes no es un ASE?";
 choices[79]= new Array();
 choices[79][0] = "ACSE";
 choices[79][1] = "MCSE";
 choices[79][2] = "RTSE";
 choices[79][3] = "ROSE";
 answers[79] = choices[79][1];
 units[79] = "100";
 comments[79] = "Id Pregunta: 8889. ";


//  Id pregunta: 8913 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes acciones NO es realizada por un switch de nivel 2?:";
 choices[80]= new Array();
 choices[80][0] = "Conversi&oacute;n de protocolos.";
 choices[80][1] = "Aprendizaje de direcciones MAC.";
 choices[80][2] = "Reducci&oacute;n de colisiones respecto a un hub.";
 choices[80][3] = "Posibilitar m&uacute;ltiples transmisiones simult&aacute;neas sin interferir en otras sub-redes";
 answers[80] = choices[80][0];
 units[80] = "102";
 comments[80] = "Id Pregunta: 8913. Operador Ayto. Madrid 2010";


//  Id pregunta: 9222 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Identificar que protocolo no est&aacute; dise&ntilde;ado especificamente para la extensi&oacute;n de las SAN sobre protocolo IP";
 choices[81]= new Array();
 choices[81][0] = "iFTP";
 choices[81][1] = "iSCSCI";
 choices[81][2] = "FCIP";
 choices[81][3] = "iFCP";
 answers[81] = choices[81][0];
 units[81] = "48";
 comments[81] = "Id Pregunta: 9222. Examen TIC-A1 2011";


//  Id pregunta: 9509 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Qu&eacute; son las Java EE Blueprints?";
 choices[82]= new Array();
 choices[82][0] = "Un conjunto de pr&aacute;cticas obligatorias al desarrollar en Java";
 choices[82][1] = "Un conjunto de buenas pr&aacute;cticas al desarrollar en Java";
 choices[82][2] = "Una API de desarrollo en Java";
 choices[82][3] = "Java EE Blueprints no existe";
 answers[82] = choices[82][1];
 units[82] = "116";
 comments[82] = "Id Pregunta: 9509. NULL";


//  Id pregunta: 9547 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Seg&uacute;n la LSSI, la acci&oacute;n de cesaci&oacute;n, dirigida a obtener una sentencia que condene al demandado a cesar en una conducta contraria a dicha Ley, NO podr&aacute; ser interpuesta por:";
 choices[83]= new Array();
 choices[83][0] = "Grupos de consumidores o usuarios afectados";
 choices[83][1] = "El Ministerio Fiscal";
 choices[83][2] = "El Instituto Nacional de Consumo";
 choices[83][3] = "La Secretar&iacute;a de Estado para las Telecomunicaciones y la Sociedad de la Informaci&oacute;n";
 answers[83] = choices[83][3];
 units[83] = "30";
 comments[83] = "Id Pregunta: 9547. Ley 34/2002, art&iacute;culo 31";


//  Id pregunta: 9719 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaciones, CRUD";
 choices[84]= new Array();
 choices[84][0] = "es el acr&oacute;nimo de Crear, Leer/Obtener, Actualizar y Borrar (Create, Read/Retrieve, Update, Delete).";
 choices[84][1] = "es la base de arquitecturas Web RESTful (basadas en REST).";
 choices[84][2] = "tiene su origen en sentencias de base de datos relacionales.";
 choices[84][3] = "las opciones a, b y c son ciertas.";
 answers[84] = choices[84][3];
 units[84] = "58";
 comments[84] = "Id Pregunta: 9719. Examen TIC-A1 2013";


//  Id pregunta: 9785 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Seg&uacute;n Magerit v2, quien NO es un participante en un proyecto de an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[85]= new Array();
 choices[85][0] = "Comit&eacute; de Gesti&oacute;n.";
 choices[85][1] = "Grupos de Interlocutores.";
 choices[85][2] = "Comit&eacute; de Seguimiento.";
 choices[85][3] = "Equipo de Proyecto";
 answers[85] = choices[85][0];
 units[85] = "98";
 comments[85] = "Id Pregunta: 9785. Examen TIC A2 2013";


//  Id pregunta: 9846 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El algoritmo DES:";
 choices[86]= new Array();
 choices[86][0] = "Es un algoritmo de cifrado asim&eacute;trico que codifica bloques de 64 bits empleando claves de 32 bits, con una permutaci&oacute;n al principio y otra al final del proceso.";
 choices[86][1] = "Es un algoritmo de cifrado por bloques que codifica bloques de 54 bits, y su estructura consta de 16 etapas.";
 choices[86][2] = "Es un algoritmo de cifrado sim&eacute;trico cuya estructura es una variaci&oacute;n de la red de Feistel.";
 choices[86][3] = "Es un algoritmo de cifrado de flujo que codifica flujos de 64 bits, empleando una clave de 64, aunque s&oacute;lo 56 bits son utilizados. Los 8 bits restantes comprueban la paridad.";
 answers[86] = choices[86][2];
 units[86] = "111";
 comments[86] = "Id Pregunta: 9846. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10020 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En M&eacute;trica v3, &iquest;qui&eacute;n lleva a cabo las pruebas en la tarea IAS 6.2 &quot;realizaci&oacute;n de las pruebas de aceptaci&oacute;n&quot;?";
 choices[87]= new Array();
 choices[87][0] = "Usuarios expertos.";
 choices[87][1] = "Directores de los usuarios.";
 choices[87][2] = "Equipo de calidad.";
 choices[87][3] = "Equipo de implantaci&oacute;n.";
 answers[87] = choices[87][0];
 units[87] = "86";
 comments[87] = "Id Pregunta: 10020. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10044 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al protocolo MPLS (RFC 3031)?";
 choices[88]= new Array();
 choices[88][0] = "LSP (Label Switched Path).";
 choices[88][1] = "LSR (Label Switching Router).";
 choices[88][2] = "FEC (Forwarding Equivalence Class).";
 choices[88][3] = "ILP (Incoming Label Protocol).";
 answers[88] = choices[88][3];
 units[88] = "100";
 comments[88] = "Id Pregunta: 10044. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10246 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio quiere distribuir el software, junto a m&oacute;dulos de terceros que tienen la siguiente licencia:Este c&oacute;digo puede ser libremente modificado, copiado y distribuido, mientras que no se aplique un pago por ello.&iquest;Representa esto una violaci&oacute;n de la licencia GPL?";
 choices[89]= new Array();
 choices[89][0] = "S&iacute;, porque la licencia GPL requiere que modificaciones de sofware bajo licencia GPL sean publicadas bajo licencia GPL";
 choices[89][1] = "S&iacute;, porque la licencia GPL no permite restricciones adicionales sobre una parte cualquiera del c&oacute;digo";
 choices[89][2] = "No, porque el nuevo c&oacute;digo est&aacute; enlazado con el c&oacute;digo de Juan, no copiado dentro de &eacute;l";
 choices[89][3] = "No, porque el resultado tambi&eacute;n puede ser distribuido de forma gratuita";
 answers[89] = choices[89][1];
 units[89] = "61";
 comments[89] = "Id Pregunta: 10246. ";


//  Id pregunta: 10265 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  	Podr&aacute;n tratarse datos personales relativos al cumplimiento o incumplimiento de obligaciones dinerarias";
 choices[90]= new Array();
 choices[90][0] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida y por tiempo indefinido";
 choices[90][1] = "Desde el momento en que se adquiere el compromiso de pago y por tiempo indefinido";
 choices[90][2] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida siempre que no hayan transcurrido seis a&ntilde;os de dicho impago";
 choices[90][3] = "Desde el momento en que se adquiere el compromiso de pago siempre que no hayan transcurrido seis a&ntilde;os de la adquisici&oacute;n de la deuda";
 answers[90] = choices[90][2];
 units[90] = "29";
 comments[90] = "Id Pregunta: 10265. Art&iacute;culo 38.1 a) y b) del RD 1720/2007";


//  Id pregunta: 10574 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; especificaciones permiten eliminar los certificados administrativos en papel mediante el intercambio electr&oacute;nico de datos entre Administraciones?";
 choices[91]= new Array();
 choices[91][0] = "SCSP";
 choices[91][1] = "SIGP";
 choices[91][2] = "SAML";
 choices[91][3] = "SIR";
 answers[91] = choices[91][0];
 units[91] = "44";
 comments[91] = "Id Pregunta: 10574. Sustituci&oacute;n de Certificados en Soporte Papel ";


//  Id pregunta: 10589 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Son principios del programa europeo ISA:";
 choices[92]= new Array();
 choices[92][0] = "La privacidad, la apertura y la seguridad.";
 choices[92][1] = "La neutralidad tecnol&oacute;gica y la reutilizaci&oacute;n.";
 choices[92][2] = "La protecci&oacute;n de los datos personales y la adaptabilidad.";
 choices[92][3] = "Todas las anteriores.";
 answers[92] = choices[92][3];
 units[92] = "30";
 comments[92] = "Id Pregunta: 10589. ";


//  Id pregunta: 10642 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale la opci&oacute;n correcta:";
 choices[93]= new Array();
 choices[93][0] = "RMI es un m&eacute;todo de invocaci&oacute;n remota para Java exclusivamente.";
 choices[93][1] = "CORBA o RMI pueden utilizarse para la comunicaci&oacute;n entre aplicaciones distribuidas de tecnolog&iacute;as distintas.";
 choices[93][2] = "Un Sistema de Comunicaci&oacute;n entre Procesos (IPC) es una capa de software que permite realizar llamadas a m&eacute;todos situados en m&aacute;quinas remotas. ";
 choices[93][3] = "DCOM es una tecnolog&iacute;a de Sun Microsystems.";
 answers[93] = choices[93][0];
 units[93] = "82";
 comments[93] = "Id Pregunta: 10642. ";


//  Id pregunta: 10806 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n Magerit v3, &iquest;qu&eacute; concepto se corresponder&iacute;a con la definici&oacute;n: &quot;proceso espec&iacute;fico cuyo objetivo es legitimar al sistema para formar parte de sistemas m&aacute;s amplios&quot;?";
 choices[94]= new Array();
 choices[94][0] = "Auditor&iacute;a.";
 choices[94][1] = "Acreditaci&oacute;n.";
 choices[94][2] = "Certificaci&oacute;n.";
 choices[94][3] = "Evaluaci&oacute;n.";
 answers[94] = choices[94][1];
 units[94] = "33";
 comments[94] = "Id Pregunta: 10806. Examen GSI 2014";


//  Id pregunta: 10915 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Un proyecto europeo cuyo objetivo estrat&eacute;gico fue mejorar y potenciar el uso de la tecnolog&iacute;a PLC se denomin&oacute; proyecto:";
 choices[95]= new Array();
 choices[95][0] = "CORDIS";
 choices[95][1] = "OPERA";
 choices[95][2] = "Dublin Core";
 choices[95][3] = "POIROT";
 answers[95] = choices[95][1];
 units[95] = "107";
 comments[95] = "Id Pregunta: 10915. Examen GSI 2014";


//  Id pregunta: 11250 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Las garant&iacute;as en los contratos NO se:";
 choices[96]= new Array();
 choices[96][0] = "Reponen para responder ante penalizaciones o indemnizaciones.";
 choices[96][1] = "Reutilizan para cubrir necesidades de otro contrato.";
 choices[96][2] = "Reajustan ante variaciones en el precio del contrato, debido a una modificaci&oacute;n de &eacute;ste.";
 choices[96][3] = "Devuelven o cancelan cuando vence el per&iacute;odo de garant&iacute;a del contrato y &eacute;ste se ha cumplido de forma satisfactoria, o cuando se resuelve el contrato, sin que exista culpa por parte del contratista.";
 answers[96] = choices[96][1];
 units[96] = "41";
 comments[96] = "Id Pregunta: 11250. ";


//  Id pregunta: 11279 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Los servicios WMS de OGC se consideran servicios de:";
 choices[97]= new Array();
 choices[97][0] = "Localizaci&oacute;n";
 choices[97][1] = "Descarga";
 choices[97][2] = "Transformaci&oacute;n";
 choices[97][3] = "Visualizaci&oacute;n";
 answers[97] = choices[97][3];
 units[97] = "67";
 comments[97] = "Id Pregunta: 11279. ";


//  Id pregunta: 11368 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l es el prop&oacute;sito principal de la Gesti&oacute;n de Disponibilidad?";
 choices[98]= new Array();
 choices[98][0] = "Monitorizar e informar la disponibilidad de los componentes";
 choices[98][1] = "Asegurar que se cumplen todas las metas del acuerdo de nivel de servicios (SLA)";
 choices[98][2] = "Garantizar los niveles de disponibilidad de los servicios y de los componentes";
 choices[98][3] = "Asegurar que la disponibilidad del servicio satisface las necesidades acordadas con el negocio";
 answers[98] = choices[98][3];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11368. ";


//  Id pregunta: 11468 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es una facultad del Gobierno para la administraci&oacute;n del espectro?";
 choices[99]= new Array();
 choices[99][0] = "La adecuada utilizaci&oacute;n del espectro mediante equipos y aparatos.";
 choices[99][1] = "Establecer condiciones discriminatorias respecto a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico.";
 choices[99][2] = "Garantizar el uso efectivo y eficaz de las frecuencias.";
 choices[99][3] = "Elaborar y aprobar los planes de utilizaci&oacute;n del espectro.";
 answers[99] = choices[99][1];
 units[99] = "110";
 comments[99] = "Id Pregunta: 11468. ";


