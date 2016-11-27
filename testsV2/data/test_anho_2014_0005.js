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

//  Id pregunta: 9610 AÃ±o de creación de pregunta: 2014-01-01
 questions[0]= "1)  &iquest;Qu&eacute; versi&oacute;n de SQL permiti&oacute; por primera vez manipular y publicar datos XML?";
 choices[0]= new Array();
 choices[0][0] = "SQL 2000";
 choices[0][1] = "SQL-2003";
 choices[0][2] = "SQL-2006";
 choices[0][3] = "SQL-2008";
 answers[0] = choices[0][2];
 units[0] = "58";
 comments[0] = "Id Pregunta: 9610. NULL";


//  Id pregunta: 9611 AÃ±o de creación de pregunta: 2014-01-01
 questions[1]= "2)  &iquest;Qu&eacute; es el FSQL?";
 choices[1]= new Array();
 choices[1][0] = "Una versi&oacute;n de SQL que se usa en la ingenier&iacute;a hacia adelante.";
 choices[1][1] = "Una versi&oacute;n de SQL que se usa para l&oacute;gica difusa";
 choices[1][2] = "Una versi&oacute;n de SQL que se usa para memorias asociativas";
 choices[1][3] = "Una versi&oacute;n de SQL que se usa en sistemas distribuidos";
 answers[1] = choices[1][1];
 units[1] = "58";
 comments[1] = "Id Pregunta: 9611. NULL";


//  Id pregunta: 9636 AÃ±o de creación de pregunta: 2014-01-01
 questions[2]= "3)  &iquest;Qu&eacute; n&uacute;mero m&aacute;ximo de m&aacute;quinas virtuales por anfitri&oacute;n soporta el sistema Hyper-V de Windows 2012 Server?";
 choices[2]= new Array();
 choices[2][0] = "256";
 choices[2][1] = "512";
 choices[2][2] = "1024";
 choices[2][3] = "2048";
 answers[2] = choices[2][2];
 units[2] = "56";
 comments[2] = "Id Pregunta: 9636. ";


//  Id pregunta: 9651 AÃ±o de creación de pregunta: 2014-01-01
 questions[3]= "4)  El c&oacute;digo intermedio en una compilaci&oacute;n .NET actualmente se llama:";
 choices[3]= new Array();
 choices[3][0] = "MSIL";
 choices[3][1] = "CIL";
 choices[3][2] = "CLS";
 choices[3][3] = "Bytecode";
 answers[3] = choices[3][1];
 units[3] = "115";
 comments[3] = "Id Pregunta: 9651. Antes se llamaba MSIL, ahora se llama CIL (Common Intermediate Language)";


//  Id pregunta: 9666 AÃ±o de creación de pregunta: 2014-01-01
 questions[4]= "5)  La taxonom&iacute;a de Flynn:";
 choices[4]= new Array();
 choices[4][0] = "Es una clasificaci&oacute;n cl&aacute;sica de computadores en funci&oacute;n de su arquitectura.";
 choices[4][1] = "Se basa en el flujo que siguen los datos y las instrucciones dentro de una m&aacute;quina.";
 choices[4][2] = "Se divide en cuatro categor&iacute;as.";
 choices[4][3] = "Todas las anteriores.";
 answers[4] = choices[4][3];
 units[4] = "45";
 comments[4] = "Id Pregunta: 9666. ";


//  Id pregunta: 9683 AÃ±o de creación de pregunta: 2014-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes opciones representa elementos dentro de un GIS?";
 choices[5]= new Array();
 choices[5][0] = "Hardware, software, georreferenciaci&oacute;n, equipo cient&iacute;fico y procedimientos.";
 choices[5][1] = "Hardware, software, datos geogr&aacute;ficos, equipo humano y capas tem&aacute;ticas.";
 choices[5][2] = "Proyecci&oacute;n, georreferenciaci&oacute;n, programas, datos espaciales y equipo cient&iacute;fico.";
 choices[5][3] = "Hardware, software, informaci&oacute;n geogr&aacute;fica, equipo humano y procedimientos.";
 answers[5] = choices[5][3];
 units[5] = "67";
 comments[5] = "Id Pregunta: 9683. NULL";


//  Id pregunta: 9686 AÃ±o de creación de pregunta: 2014-01-01
 questions[6]= "7)  Respecto a las proyecciones (Georreferenciaci&oacute;n Directa) (elija la falsa):";
 choices[6]= new Array();
 choices[6][0] = "Ofrecen la posibilidad de localizar un fen&oacute;meno geogr&aacute;fico de un determinado nombre, devolviendo la localizaci&oacute;n mediante las coordenadas geogr&aacute;ficas del mismo.";
 choices[6][1] = "Se pueden acotar indicando la extensi&oacute;n espacial de la b&uacute;squeda.";
 choices[6][2] = "Describen el conjunto de reglas de simbolizaci&oacute;n de los fen&oacute;menos geogr&aacute;ficos que detectan.";
 choices[6][3] = "Si hay varios que cumplen los criterios de b&uacute;squeda, el servicio suele proponer atributos adicionales.";
 answers[6] = choices[6][2];
 units[6] = "67";
 comments[6] = "Id Pregunta: 9686. NULL";


//  Id pregunta: 9689 AÃ±o de creación de pregunta: 2014-01-01
 questions[7]= "8)  Un Datamart:";
 choices[7]= new Array();
 choices[7][0] = "Es una Base de Datos.";
 choices[7][1] = "Es m&aacute;s grande (en volumen de datos) que un Datawarehouse.";
 choices[7][2] = "Usa Sistemas de Gesti&oacute;n de Base de Datos multidimensionales.";
 choices[7][3] = "Todas son falsas.";
 answers[7] = choices[7][2];
 units[7] = "68";
 comments[7] = "Id Pregunta: 9689. ";


//  Id pregunta: 9710 AÃ±o de creación de pregunta: 2014-01-01
 questions[8]= "9)  El modelo Vectorial de representaci&oacute;n de datos espaciales";
 choices[8]= new Array();
 choices[8][0] = "facilita establecer relaciones topol&oacute;gicas entre los elementos.";
 choices[8][1] = "utiliza s&oacute;lo dos elementos geom&eacute;tricos (puntos y l&iacute;neas) para modelar digitalmente las entidades del mundo real.";
 choices[8][2] = "divide el espacio en celdas regulares donde cada una de ellas es ubicada por un vector.";
 choices[8][3] = "almacena los datos mediante el formato vectorial de base de datos BLOB.";
 answers[8] = choices[8][0];
 units[8] = "67";
 comments[8] = "Id Pregunta: 9710. Examen TIC-A1 2013";


//  Id pregunta: 9713 AÃ±o de creación de pregunta: 2014-01-01
 questions[9]= "10)  Se&ntilde;ale la respuesta INCORRECTA respecto a las funciones criptogr&aacute;ficas hash o resumen.";
 choices[9]= new Array();
 choices[9][0] = "MD5 genera un hash de 128 bits.";
 choices[9][1] = "SHA-1 genera un hash de 160 bits.";
 choices[9][2] = "Se conoce por SHA-2 a un conjunto de funciones de la familia SHA que generan hashes de longitud 224, 256, 384 y 512 bits.";
 choices[9][3] = "La longitud m&iacute;nima del hash soportada en SHA-3 es 256 bits.";
 answers[9] = choices[9][3];
 units[9] = "72";
 comments[9] = "Id Pregunta: 9713. Examen TIC-A1 2013";


//  Id pregunta: 9723 AÃ±o de creación de pregunta: 2014-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de entre las siguientes es una de las caracter&iacute;sticas del Cloud Computing?";
 choices[10]= new Array();
 choices[10][0] = "El consumo a la carta: un consumidor puede proporcionarse las necesidades TIC que precise sin que medie el proveedor.";
 choices[10][1] = "El acceso a las capacidades disponibles en la red se puede hacer usando plataformas heterog&eacute;neas.";
 choices[10][2] = "Los recursos TIC del proveedor se reservan para ser usados por varios consumidores.";
 choices[10][3] = "Todas las respuestas anteriores son ciertas.";
 answers[10] = choices[10][3];
 units[10] = "47";
 comments[10] = "Id Pregunta: 9723. Examen TIC-A1 2013";


//  Id pregunta: 9726 AÃ±o de creación de pregunta: 2014-01-01
 questions[11]= "12)  Atendiendo al est&aacute;ndar ISO 22301 en un Plan de Recuperaci&oacute;n ante Desastres, el Objetivo de Punto de Recuperaci&oacute;n (Recovery Point Objective RPO) es";
 choices[11]= new Array();
 choices[11][0] = "el nivel de servicios a proporcionar en modo alterno hasta que se recupere la situaci&oacute;n normal.";
 choices[11][1] = "el tiempo que la organizaci&oacute;n puede soportar desde que se produce el fallo hasta que se recuperan los servicios cr&iacute;ticos.";
 choices[11][2] = "el tiempo m&aacute;ximo tolerable de interrupci&oacute;n.";
 choices[11][3] = "la p&eacute;rdida m&aacute;xima de datos tolerable en caso de interrupci&oacute;n.";
 answers[11] = choices[11][3];
 units[11] = "32";
 comments[11] = "Id Pregunta: 9726. Examen TIC-A1 2013";


//  Id pregunta: 9755 AÃ±o de creación de pregunta: 2014-01-01
 questions[12]= "13)  En M&eacute;trica v3, la actividad &quot;Establecimiento de requisitos de implantaci&oacute;n&quot; se lleva a cabo en:";
 choices[12]= new Array();
 choices[12][0] = "ASI";
 choices[12][1] = "DSI";
 choices[12][2] = "IAS";
 choices[12][3] = "ASI y DSI";
 answers[12] = choices[12][1];
 units[12] = "86";
 comments[12] = "Id Pregunta: 9755. Actividad DSI.11. El resto de actividades referentes a implantaci&oacute;n se llevan a cabo en IAS";


//  Id pregunta: 9757 AÃ±o de creación de pregunta: 2014-01-01
 questions[13]= "14)  En M&eacute;trica v3, la Especificaci&oacute;n del Plan de pruebas de Regresi&oacute;n se realiza en:";
 choices[13]= new Array();
 choices[13][0] = "ASI";
 choices[13][1] = "DSI";
 choices[13][2] = "CSI";
 choices[13][3] = "MSI";
 answers[13] = choices[13][3];
 units[13] = "86";
 comments[13] = "Id Pregunta: 9757. MSI.3 &quot;Preparaci&oacute;n de la implementaci&oacute;n de la modificaci&oacute;n&quot; incluye una tarea &quot;Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n&quot;";


//  Id pregunta: 9769 AÃ±o de creación de pregunta: 2014-01-01
 questions[14]= "15)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones muy graves:";
 choices[14]= new Array();
 choices[14][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida.";
 choices[14][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[14][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[14][3] = "La ausencia de cita de la fuente.";
 answers[14] = choices[14][2];
 units[14] = "22";
 comments[14] = "Id Pregunta: 9769. ";


//  Id pregunta: 9774 AÃ±o de creación de pregunta: 2014-01-01
 questions[15]= "16)  TinyOS, cuyo dise&ntilde;o est&aacute; orientado a sistemas embebidos inal&aacute;mbricos de baja potencia, est&aacute; escrito en el lenguaje:";
 choices[15]= new Array();
 choices[15][0] = "Java ";
 choices[15][1] = "Python ";
 choices[15][2] = ".Net";
 choices[15][3] = "nesC ";
 answers[15] = choices[15][3];
 units[15] = "52";
 comments[15] = "Id Pregunta: 9774. Examen TIC A2 2013";


//  Id pregunta: 9776 AÃ±o de creación de pregunta: 2014-01-01
 questions[16]= "17)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[16]= new Array();
 choices[16][0] = "chmod u+s /directorio/fichero ";
 choices[16][1] = "chmog g+s /directorio ";
 choices[16][2] = "chmod 177 /directorio ";
 choices[16][3] = "chmod +t /directorio ";
 answers[16] = choices[16][3];
 units[16] = "53";
 comments[16] = "Id Pregunta: 9776. Examen TIC A2 2013";


//  Id pregunta: 9777 AÃ±o de creación de pregunta: 2014-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[17]= new Array();
 choices[17][0] = "Metacity de GNOME. ";
 choices[17][1] = "KWIN de KDE.";
 choices[17][2] = "GTK de CDE.";
 choices[17][3] = "Enlightenment de GNOME.";
 answers[17] = choices[17][2];
 units[17] = "54";
 comments[17] = "Id Pregunta: 9777. Examen TIC A2 2013 - Duplicada";


//  Id pregunta: 9780 AÃ±o de creación de pregunta: 2014-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes herramientas utiliza un SGBD (sistema de gesti&oacute;n de bases de datos) para asegurar la atomicidad y persistencia de las transacciones?";
 choices[18]= new Array();
 choices[18][0] = "M&oacute;dulo de comprobaci&oacute;n de la integridad. ";
 choices[18][1] = "El esquema conceptual. ";
 choices[18][2] = "Fichero diario. ";
 choices[18][3] = "Triggers. ";
 answers[18] = choices[18][2];
 units[18] = "57";
 comments[18] = "Id Pregunta: 9780. Examen TIC A2 2013";


//  Id pregunta: 9788 AÃ±o de creación de pregunta: 2014-01-01
 questions[19]= "20)  PLS es un est&aacute;ndar relacionado con VoiceXML, &iquest;para qu&eacute; se utiliza en concreto?";
 choices[19]= new Array();
 choices[19][0] = "&quot;Decora&quot; las locuciones de forma que se generen de la mejor forma posible; por ejemplo, indicando el tono de una determinada locuci&oacute;n (m&aacute;s alto o m&aacute;s bajo). ";
 choices[19][1] = "Realiza el control de la llamada con VoiceXML. ";
 choices[19][2] = "Define la forma en la que las palabras son pronunciadas. ";
 choices[19][3] = "Define la estructura de las gram&aacute;ticas usadas en el reconocimiento del habla. ";
 answers[19] = choices[19][2];
 units[19] = "94";
 comments[19] = "Id Pregunta: 9788. Examen TIC A2 2013";


//  Id pregunta: 9797 AÃ±o de creación de pregunta: 2014-01-01
 questions[20]= "21)  El uso conjunto de los certificados ubicados en el DNI electr&oacute;nico proporcionan las siguientes garant&iacute;as";
 choices[20]= new Array();
 choices[20][0] = "Disponibilidad, autenticidad de origen,confidencialidad y no repudio de origen. ";
 choices[20][1] = "Disponibilidad, integridad, autenticidad de origen. ";
 choices[20][2] = "Integridad, autenticidad de origen y no repudio de origen.";
 choices[20][3] = "Integridad, confidencialidad, autenticid ad de origen y no repudio de destino. ";
 answers[20] = choices[20][2];
 units[20] = "74";
 comments[20] = "Id Pregunta: 9797. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9811 AÃ±o de creación de pregunta: 2014-01-01
 questions[21]= "22)  La velocidad del est&aacute;ndar USB 3.0 es:";
 choices[21]= new Array();
 choices[21][0] = "Similar a la de USB 2.0.";
 choices[21][1] = "10 veces superior a la de USB 2.0.";
 choices[21][2] = "480 Mbps.";
 choices[21][3] = "15 veces superior a la de USB 2.0.";
 answers[21] = choices[21][1];
 units[21] = "46";
 comments[21] = "Id Pregunta: 9811. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9853 AÃ±o de creación de pregunta: 2014-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?: ";
 choices[22]= new Array();
 choices[22][0] = "La clave privada del emisor es la usada para garantizar la confidencialidad.";
 choices[22][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio e integridad entre otros. ";
 choices[22][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, para servicios de confidencialidad, proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos. ";
 choices[22][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es m&aacute;s sencilla que la existente en los sistemas convecionales sim&eacute;tricos de clave secreta. ";
 answers[22] = choices[22][0];
 units[22] = "111";
 comments[22] = "Id Pregunta: 9853. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 9862 AÃ±o de creación de pregunta: 2014-01-01
 questions[23]= "24)  Indique la respuesta falsa:";
 choices[23]= new Array();
 choices[23][0] = "El estandar de autenticaci&oacute;n OAuth fue crado por la OATH (Initiative for Open Authentication).";
 choices[23][1] = "OAuth 2.0 no es compatible con OAuth 1.0. ";
 choices[23][2] = "Graph API de Facebook solo soporta OAuth 2.0. ";
 choices[23][3] = "Google soporta Oauth 2.0. como m&eacute;todo recomendado de autenticaci&oacute;n para todas sus APIs.";
 answers[23] = choices[23][0];
 units[23] = "118";
 comments[23] = "Id Pregunta: 9862. Oauth y OATH son conceptos diferentes. ";


//  Id pregunta: 9863 AÃ±o de creación de pregunta: 2014-01-01
 questions[24]= "25)  Indique la opci&oacute;n falsa:";
 choices[24]= new Array();
 choices[24][0] = "Las siglas HOTP hacen referencia la algoritmo HMAC-based One Time Password.";
 choices[24][1] = "HOTP es un est&aacute;ndar abierto.";
 choices[24][2] = "Son implementaciones de HOTP: Barada, Google Authenticator, LinOTP. ";
 choices[24][3] = "HOTP no puede ser utilizado para autenticar a un usuario en un sistema a trav&eacute;s de un servidor de autenticaci&oacute;n.";
 answers[24] = choices[24][3];
 units[24] = "118";
 comments[24] = "Id Pregunta: 9863. HOTP SI se puede utilizar para autenticar a un usuario en un sistema.";


//  Id pregunta: 9865 AÃ±o de creación de pregunta: 2014-01-01
 questions[25]= "26)  En el marco del modelo est&aacute;ndar de gesti&oacute;n de red definido por la ISO y la ITU-TX.700, son &aacute;reas de gesti&oacute;n: ";
 choices[25]= new Array();
 choices[25][0] = "la gesti&oacute;n de fallos, de contabilidad, de configuraci&oacute;n, de calidad defuncionamiento y de seguridad.";
 choices[25][1] = "la gesti&oacute;n de fallos, de la demanda, de configuraci&oacute;n, de rendimiento y deseguridad.";
 choices[25][2] = "la gesti&oacute;n de fallos, de monitorizaci&oacute;n, de configuraci&oacute;n y de seguridad";
 choices[25][3] = "la gesti&oacute;n de monitorizaci&oacute;n, de trazabilidad, de configuraci&oacute;n y de seguridad";
 answers[25] = choices[25][0];
 units[25] = "104";
 comments[25] = "Id Pregunta: 9865. TIC A1, Examen 2013";


//  Id pregunta: 9896 AÃ±o de creación de pregunta: 2014-01-01
 questions[26]= "27)  Mediante la tecnolog&iacute;a EGPRS (Enhanced GPRS) se pueden llegar a conseguir velocidades de transmisi&oacute;n en modo paquetes de hasta";
 choices[26]= new Array();
 choices[26][0] = "384 kbps.";
 choices[26][1] = "115 kbps.";
 choices[26][2] = "2 Mbps.";
 choices[26][3] = "10 Mbps.";
 answers[26] = choices[26][0];
 units[26] = "108";
 comments[26] = "Id Pregunta: 9896. TIC A1, Examen 2013";


//  Id pregunta: 9897 AÃ±o de creación de pregunta: 2014-01-01
 questions[27]= "28)  En relaci&oacute;n al reconocimiento &oacute;ptico de caracteres, el proceso de Kerning consiste en eliminar el espacio excesivo entre";
 choices[27]= new Array();
 choices[27][0] = "bloques en los que se encuentra dividida una p&aacute;gina.";
 choices[27][1] = "l&iacute;neas de texto.";
 choices[27][2] = "palabras de una l&iacute;nea de texto.";
 choices[27][3] = "letras de una palabra.";
 answers[27] = choices[27][3];
 units[27] = "94";
 comments[27] = "Id Pregunta: 9897. TIC A1, Examen 2013";


//  Id pregunta: 9900 AÃ±o de creación de pregunta: 2014-01-01
 questions[28]= "29)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de losciudadanos a los Servicios P&uacute;blicos, el principio de neutralidad tecnol&oacute;gica y de adaptabilidad al progreso significa que las Administraciones P&uacute;blicas";
 choices[28]= new Array();
 choices[28][0] = "utilizar&aacute;n est&aacute;ndares abiertos o de uso generalizado por los ciudadanos.";
 choices[28][1] = "utilizar&aacute;n procedimientos electr&oacute;nicos para sus tr&aacute;mites.";
 choices[28][2] = "no admitir&aacute;n el uso de esos medios m&aacute;s que de forma gratuita.";
 choices[28][3] = "utilizar&aacute;n medios que permitan la m&aacute;xima difusi&oacute;n sin coste.";
 answers[28] = choices[28][0];
 units[28] = "43";
 comments[28] = "Id Pregunta: 9900. TIC A1, Examen 2013";


//  Id pregunta: 9902 AÃ±o de creación de pregunta: 2014-01-01
 questions[29]= "30)  Los puntos de fijaci&oacute;n (anchor points) son caracter&iacute;sticos en el modelo de desarrollo:";
 choices[29]= new Array();
 choices[29][0] = "En cascada.";
 choices[29][1] = "Basado en prototipos.";
 choices[29][2] = "En espiral WINWIN.";
 choices[29][3] = "RAD.";
 answers[29] = choices[29][2];
 units[29] = "76";
 comments[29] = "Id Pregunta: 9902. TIC A2, Examen 2013";


//  Id pregunta: 9923 AÃ±o de creación de pregunta: 2014-01-01
 questions[30]= "31)  En una transacci&oacute;n en un Sistema de Gesti&oacute;n de Bases de Datos (SGBD), &iquest;qu&eacute; se entiende por el punto de integridad?";
 choices[30]= new Array();
 choices[30][0] = "El momento despu&eacute;s en el que se inicia la transacci&oacute;n.";
 choices[30][1] = "El estado de la base de datos en el momento en que se inicia la transacci&oacute;n.";
 choices[30][2] = "Hacer un rollback en el caso de que haya un problema antes de completar la transacci&oacute;n.";
 choices[30][3] = "El retorno con la confirmaci&oacute;n de que la transacci&oacute;n se ha completado con &eacute;xito.";
 answers[30] = choices[30][1];
 units[30] = "57";
 comments[30] = "Id Pregunta: 9923. TIC A2, Examen 2013";


//  Id pregunta: 9929 AÃ±o de creación de pregunta: 2014-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l es el orden de las primitivas de servicio?";
 choices[31]= new Array();
 choices[31][0] = "REQUEST &ndash; CONFIRM &ndash;INDICATION &ndash; RESPONSE.";
 choices[31][1] = "REQUEST &ndash; RESPONSE &ndash; INDICATION &ndash; CONFIRM.";
 choices[31][2] = "REQUEST &ndash; INDICATION &ndash; RESPONSE &ndash; CONFIRM.";
 choices[31][3] = "REQUEST &ndash; CONFIRM &ndash; RESPONSE &ndash; INDICATION.";
 answers[31] = choices[31][2];
 units[31] = "100";
 comments[31] = "Id Pregunta: 9929. NULL";


//  Id pregunta: 9936 AÃ±o de creación de pregunta: 2014-01-01
 questions[32]= "33)  Se&ntilde;ale la respuesta INCORRECTA sobre patrones de dise&ntilde;o orientado a objetos.";
 choices[32]= new Array();
 choices[32][0] = "Facilitan el aprendizaje de las nuevas generaciones de dise&ntilde;adores condensando conocimiento ya existente.";
 choices[32][1] = "Imponen ciertas alternativas de dise&ntilde;o frente a otras.";
 choices[32][2] = "Permiten la creatividad inherente al proceso de dise&ntilde;o.";
 choices[32][3] = "Estandarizan el modo en que se realiza el dise&ntilde;o.";
 answers[32] = choices[32][1];
 units[32] = "84";
 comments[32] = "Id Pregunta: 9936. TIC A1, Examen 2013";


//  Id pregunta: 9940 AÃ±o de creación de pregunta: 2014-01-01
 questions[33]= "34)  La taxonom&iacute;a de Flynn:";
 choices[33]= new Array();
 choices[33][0] = "se ha revisado recientemente para incluir los sistemas Big Data.";
 choices[33][1] = "es una clasificaci&oacute;n de computadores en funci&oacute;n de su arquitectura.";
 choices[33][2] = "es la base de la taxonom&iacute;a de Bloom.";
 choices[33][3] = "se propuso con motivo de los primeros PC de IBM.";
 answers[33] = choices[33][1];
 units[33] = "45";
 comments[33] = "Id Pregunta: 9940. TIC A1, Examen 2013";


//  Id pregunta: 9941 AÃ±o de creación de pregunta: 2014-01-01
 questions[34]= "35)  El formato MP3:";
 choices[34]= new Array();
 choices[34][0] = "fue dise&ntilde;ado en 1984 en el Instituto Karlsruher.";
 choices[34][1] = "utiliza el algoritmo de compresi&oacute;n Lempel-Ziv-Welch (LZW).";
 choices[34][2] = "fue aprobado por el &ldquo;Motion Picture Experts Group&rdquo; en 1992.";
 choices[34][3] = "permite compresiones del orden de 10 a 1 respecto al formato CD, conp&eacute;rdida de informaci&oacute;n.";
 answers[34] = choices[34][3];
 units[34] = "117";
 comments[34] = "Id Pregunta: 9941. TIC A1, Examen 2013";


//  Id pregunta: 9958 AÃ±o de creación de pregunta: 2014-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[35]= new Array();
 choices[35][0] = "La persistencia";
 choices[35][1] = "Los procesos de transformaci&oacute;n.";
 choices[35][2] = "El flujo de la informaci&oacute;n.";
 choices[35][3] = "La herencia";
 answers[35] = choices[35][3];
 units[35] = "81";
 comments[35] = "Id Pregunta: 9958. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9964 AÃ±o de creación de pregunta: 2014-01-01
 questions[36]= "37)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[36]= new Array();
 choices[36][0] = "System Data Type (SDT)";
 choices[36][1] = "Common Type System (CTS)";
 choices[36][2] = "Common Data Integration (CDI)";
 choices[36][3] = "Data Type Core (DTC)";
 answers[36] = choices[36][1];
 units[36] = "59,115";
 comments[36] = "Id Pregunta: 9964. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9966 AÃ±o de creación de pregunta: 2014-01-01
 questions[37]= "38)  El subconjunto de datos de un Almac&eacute;n de Datos se denomina:";
 choices[37]= new Array();
 choices[37][0] = "Data Warehouse.";
 choices[37][1] = "OLAP";
 choices[37][2] = "Data Mart.";
 choices[37][3] = "Data Mining.";
 answers[37] = choices[37][2];
 units[37] = "68,71";
 comments[37] = "Id Pregunta: 9966. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9970 AÃ±o de creación de pregunta: 2014-01-01
 questions[38]= "39)  En el &aacute;mbito de SAP ERP, los infotipos son:";
 choices[38]= new Array();
 choices[38][0] = "Objetos de C&aacute;lculo de n&oacute;mina y de Gesti&oacute;n de personal utilizados para distinguir entre importes monetarios.";
 choices[38][1] = "Unidades de tiempo que se utilizan de modos diferentes para calcular la remuneraci&oacute;n del empleado.";
 choices[38][2] = "Unidades de informaci&oacute;n en el sistema de Gesti&oacute;n de personal.";
 choices[38][3] = "T&eacute;cnicas provistas por SAP para el ingreso masivo de informaci&oacute;n";
 answers[38] = choices[38][2];
 units[38] = "65";
 comments[38] = "Id Pregunta: 9970. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9977 AÃ±o de creación de pregunta: 2014-01-01
 questions[39]= "40)  En un sistema de gesti&oacute;n documental, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA? ";
 choices[39]= new Array();
 choices[39][0] = "Un sistema de gesti&oacute;n documental se define como un conjunto de elementos y relaciones entre ellos, que tiene el prop&oacute;sito de normalizar, controlar y coordinar todas las actividades y procesos que afectan en cualquiermedida a los documentos generados en el transcurso de la actividad de una organizaci&oacute;n";
 choices[39][1] = "Un sistema de gesti&oacute;n documental tiene que conservar los atributos b&aacute;sicos de los documentos ";
 choices[39][2] = "Un sistema de gesti&oacute;n documental tiene que mantener la organizaci&oacute;n de los documentos integrados en un contexto ";
 choices[39][3] = "Las operaciones m&aacute;s habituales que se realizan sobre estos documentos, abarcan parte de su ciclo de vida, desde su almacenamiento hasta la puesta a disposici&oacute;n de los usuarios";
 answers[39] = choices[39][3];
 units[39] = "95";
 comments[39] = "Id Pregunta: 9977. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 9978 AÃ±o de creación de pregunta: 2014-01-01
 questions[40]= "41)  En el desarrollo de aplicaciones en .NET Framework disponemos de un Garbage Collector (recolector de basura). Indique cu&aacute;l de las siguientes afirmaciones es FALSA ";
 choices[40]= new Array();
 choices[40][0] = "La liberaci&oacute;n de un objeto en memoria es perfectamente posible sin intervenci&oacute;n expl&iacute;cita por parte del usuario ";
 choices[40][1] = "Para la liberaci&oacute;n expl&iacute;cita de memoria existen m&eacute;todos de finalizaci&oacute;n como Finalize() y Dispose()";
 choices[40][2] = "Se suele utilizar Dispose() cuando el objeto no se va a utilizar m&aacute;s definitivamente ";
 choices[40][3] = "Si se invoca expl&iacute;citamente el m&eacute;todo Dispose() de un objeto, este ser&aacute; liberado inmediatamente ";
 answers[40] = choices[40][3];
 units[40] = "59";
 comments[40] = "Id Pregunta: 9978. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 9992 AÃ±o de creación de pregunta: 2014-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes no es una forma de pago admitida por la Pasarela de Pagos de la Agencia Tributaria?";
 choices[41]= new Array();
 choices[41][0] = "Pago mediante cargo en cuenta";
 choices[41][1] = "Pago con tarjeta";
 choices[41][2] = "Pago por cargo en cuenta de terceras personas, previo apoderamiento registrado en &ldquo;Registro de apoderamientos&rdquo;";
 choices[41][3] = "Pago mediante remesa de importaci&oacute;n para obligados contribuyentes con residencia en el extranjero";
 answers[41] = choices[41][3];
 units[41] = "70";
 comments[41] = "Id Pregunta: 9992. NULL";


//  Id pregunta: 9998 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  El recurso especial en materia de contrataci&oacute;n permite la impugnaci&oacute;n, previa alrecurso contencioso-administrativo, de";
 choices[42]= new Array();
 choices[42][0] = "los actos de tr&aacute;mite que no resuelven la licitaci&oacute;n.";
 choices[42][1] = "las penalizaciones impuestas por ejecuci&oacute;n defectuosa.";
 choices[42][2] = "los acuerdos de adjudicaci&oacute;n.";
 choices[42][3] = "la resoluci&oacute;n del recurso de Alzada.";
 answers[42] = choices[42][2];
 units[42] = "41";
 comments[42] = "Id Pregunta: 9998. ";


//  Id pregunta: 9999 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  En el &aacute;mbito de la teor&iacute;a de la decisi&oacute;n multicriterio discreta, &iquest;qu&eacute; m&eacute;todo deordenaci&oacute;n de alternativas se caracteriza por elegir en primer lugar la alternativa que tiene el mejor valor en el criterio de mayor peso?";
 choices[43]= new Array();
 choices[43][0] = "El m&eacute;todo PROMETHEE.";
 choices[43][1] = "El m&eacute;todo lexicogr&aacute;fico.";
 choices[43][2] = "El m&eacute;todo de la ponderaci&oacute;n lineal.";
 choices[43][3] = "El m&eacute;todo ELECTRE.";
 answers[43] = choices[43][1];
 units[43] = "34";
 comments[43] = "Id Pregunta: 9999. ";


//  Id pregunta: 10000 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  Las siglas &ldquo;SOAP&rdquo;, en el marco de los servicios web, corresponden a";
 choices[44]= new Array();
 choices[44][0] = "Service Oriented Architecture Protocol.";
 choices[44][1] = "Simple Oriented Access Paradigm.";
 choices[44][2] = "Service Object Architecture Paradigm.";
 choices[44][3] = "Simple Object Access Protocol.";
 answers[44] = choices[44][3];
 units[44] = "69";
 comments[44] = "Id Pregunta: 10000. ";


//  Id pregunta: 10018 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula el formato de documentos abiertos para aplicaciones de ofim&aacute;tica (OpenDocument)?";
 choices[45]= new Array();
 choices[45][0] = "ISO/IEC 26300:2006 ";
 choices[45][1] = "RFC 2373";
 choices[45][2] = "ISO/IEC 9899:1999";
 choices[45][3] = "ISO 9000";
 answers[45] = choices[45][0];
 units[45] = "62";
 comments[45] = "Id Pregunta: 10018. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10034 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  El puerto 69 es utilizado por:";
 choices[46]= new Array();
 choices[46][0] = "TFTP (Trivial File Transfer Protocol).";
 choices[46][1] = "Finger.";
 choices[46][2] = "IMAP (Internet Message Access Protocol).";
 choices[46][3] = "SFTP (Secure File Transfer Protocol).";
 answers[46] = choices[46][0];
 units[46] = "100";
 comments[46] = "Id Pregunta: 10034. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10036 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  &iquest;Qu&eacute; protocolo utiliza la orden &quot;traceroute&quot; para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[47]= new Array();
 choices[47][0] = "Ping ";
 choices[47][1] = "ICMP";
 choices[47][2] = "PPP";
 choices[47][3] = "RSVP";
 answers[47] = choices[47][1];
 units[47] = "100";
 comments[47] = "Id Pregunta: 10036. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10037 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  Con respecto al protocolo DNS. &iquest;Cu&aacute;l de las siguientes opciones NO es una parte de un mensaje DNS?";
 choices[48]= new Array();
 choices[48][0] = "Cabecera.";
 choices[48][1] = "Checksum.";
 choices[48][2] = "Registros de recursos de Respuesta.";
 choices[48][3] = "Registros de recursos de Autoridad.";
 answers[48] = choices[48][1];
 units[48] = "112";
 comments[48] = "Id Pregunta: 10037. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10044 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes elementos NO pertenece al protocolo MPLS (RFC 3031)?";
 choices[49]= new Array();
 choices[49][0] = "LSP (Label Switched Path).";
 choices[49][1] = "LSR (Label Switching Router).";
 choices[49][2] = "FEC (Forwarding Equivalence Class).";
 choices[49][3] = "ILP (Incoming Label Protocol).";
 answers[49] = choices[49][3];
 units[49] = "100";
 comments[49] = "Id Pregunta: 10044. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10061 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  Los fuegos de clase D son los que implican:";
 choices[50]= new Array();
 choices[50][0] = "Combustibles s&oacute;lidos como papel, cart&oacute;n, madera, pl&aacute;sticos, etc.";
 choices[50][1] = "Metales y aleaciones: magnesio, sodio, etc.";
 choices[50][2] = "Combustibles l&iacute;quidos, por ejemplo: aceite, derivados del petr&oacute;leo, etc.";
 choices[50][3] = "Gases: butano, metano, propano, etc.";
 answers[50] = choices[50][1];
 units[50] = "";
 comments[50] = "Id Pregunta: 10061. TIC A2, libre, Examen 2013";


//  Id pregunta: 10104 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  En un DFD, de acuerdo a M&eacute;trica v.3:";
 choices[51]= new Array();
 choices[51][0] = "Existe un diagrama 0 (nivel 0)";
 choices[51][1] = "Existe un diagrama 1 (nivel 0)";
 choices[51][2] = "Existe un diagrama 1 (nivel 1)";
 choices[51][3] = "Existe un diagrama 0 (nivel 1)";
 answers[51] = choices[51][3];
 units[51] = "81";
 comments[51] = "Id Pregunta: 10104. NULL";


//  Id pregunta: 10106 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  En el m&eacute;todo de acceso al medio CSMA-p, el emisor:";
 choices[52]= new Array();
 choices[52][0] = "Env&iacute;a datos en cuanto los tiene disponibles.";
 choices[52][1] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre";
 choices[52][2] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad p";
 choices[52][3] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad 1-p";
 answers[52] = choices[52][2];
 units[52] = "101";
 comments[52] = "Id Pregunta: 10106. ";


//  Id pregunta: 10111 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  El est&aacute;ndar Wimax est&aacute; especificado en la norma:";
 choices[53]= new Array();
 choices[53][0] = "IEEE 802.11";
 choices[53][1] = "IEEE 802.16";
 choices[53][2] = "IEEE 802.15";
 choices[53][3] = "IEEE 802.19";
 answers[53] = choices[53][1];
 units[53] = "101";
 comments[53] = "Id Pregunta: 10111. ";


//  Id pregunta: 10130 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  SNMPv3 est&aacute; definido en:";
 choices[54]= new Array();
 choices[54][0] = "RFC 3500";
 choices[54][1] = "RFC 3100";
 choices[54][2] = "RFC 3120-3125";
 choices[54][3] = "RFC 3410-3418";
 answers[54] = choices[54][3];
 units[54] = "104";
 comments[54] = "Id Pregunta: 10130. ";


//  Id pregunta: 10158 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  El servicio que da respuesta a la implementaci&oacute;n de la medida CORA 3.00.002.8, &quot;Concentraci&oacute;n de la gesti&oacute;n, producci&oacute;n, impresi&oacute;n y distribuci&oacute;n de las notificaciones y comunicaciones postales en centros de impresi&oacute;n y ensobrado con dimensi&oacute;n &oacute;ptima&quot; se denomina:";
 choices[55]= new Array();
 choices[55][0] = "SNE";
 choices[55][1] = "NoTe";
 choices[55][2] = "Notific@";
 choices[55][3] = "GESNOTE";
 answers[55] = choices[55][2];
 units[55] = "44";
 comments[55] = "Id Pregunta: 10158. ";


//  Id pregunta: 10163 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  En el modelo l&oacute;gico relacional, la cardinalidad de una relaci&oacute;n se corresponde con:";
 choices[56]= new Array();
 choices[56][0] = "N&uacute;mero de atributos de la relaci&oacute;n";
 choices[56][1] = "N&uacute;mero m&iacute;nimo de ocurrencias de una entidad que pueden participar en la relaci&oacute;n";
 choices[56][2] = "N&uacute;mero de entidades que participan en la relaci&oacute;n o asociaci&oacute;n";
 choices[56][3] = "N&uacute;mero de tuplas de la relaci&oacute;n";
 answers[56] = choices[56][3];
 units[56] = "58";
 comments[56] = "Id Pregunta: 10163. ";


//  Id pregunta: 10167 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  &iquest;A qu&eacute; t&eacute;rmino corresponde la siguiente definici&oacute;n: &quot;Dada una relaci&oacute;n, un atributo o grupo de atributos B depende funcionalmente de A, pero no de ning&uacute;n subconjunto de atributos de A&quot;?";
 choices[57]= new Array();
 choices[57][0] = "Dependencia funcional";
 choices[57][1] = "Dependencia multivaluada";
 choices[57][2] = "Dependencia funcional trivial";
 choices[57][3] = "Dependencia funcional completa";
 answers[57] = choices[57][3];
 units[57] = "58";
 comments[57] = "Id Pregunta: 10167. ";


//  Id pregunta: 10174 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  UML o Unified Modeling Language&hellip;";
 choices[58]= new Array();
 choices[58][0] = "Fue desarrollado por tres autores conocidos como los &quot;Tres Amigos&quot;";
 choices[58][1] = "No constituye un m&eacute;todo o metodolog&iacute;a de an&aacute;lisis orientado a objetos";
 choices[58][2] = "Est&aacute;ndar actualmente soportado, mantenido y evolucionado por OMG";
 choices[58][3] = "Todas las anteriores";
 answers[58] = choices[58][3];
 units[58] = "82";
 comments[58] = "Id Pregunta: 10174. ";


//  Id pregunta: 10183 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  En el modelo E-R de Chen, las interrelaciones entre entidades se clasifican en unarias, binarias o n-arias en funci&oacute;n del:";
 choices[59]= new Array();
 choices[59][0] = "Grado";
 choices[59][1] = "Tipo de correspondencia";
 choices[59][2] = "Cardinalidad";
 choices[59][3] = "Ninguna de las anteriores";
 answers[59] = choices[59][0];
 units[59] = "80";
 comments[59] = "Id Pregunta: 10183. ";


//  Id pregunta: 10189 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes formatos de im&aacute;gen permite fondos transparentes?";
 choices[60]= new Array();
 choices[60][0] = "TIFF";
 choices[60][1] = "BMP";
 choices[60][2] = "JPEG";
 choices[60][3] = "PNG";
 answers[60] = choices[60][3];
 units[60] = "93";
 comments[60] = "Id Pregunta: 10189. NULL";


//  Id pregunta: 10194 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  Para el reconocimiento de las vocales se calculan";
 choices[61]= new Array();
 choices[61][0] = "los al&oacute;fonos";
 choices[61][1] = "el pitch";
 choices[61][2] = "los formantes";
 choices[61][3] = "el cepstrum";
 answers[61] = choices[61][2];
 units[61] = "94";
 comments[61] = "Id Pregunta: 10194. ";


//  Id pregunta: 10200 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  &iquest;Cual de las siguientes afirmaciones es correcta respecto al estandar IEEE 802.11ac?";
 choices[62]= new Array();
 choices[62][0] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[62][1] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (512 QAM)";
 choices[62][2] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[62][3] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 answers[62] = choices[62][3];
 units[62] = "107";
 comments[62] = "Id Pregunta: 10200. NULL";


//  Id pregunta: 10201 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[63]= new Array();
 choices[63][0] = "Corresponde a la release 7 del 3GPP (3rd Generation Partnership Project)";
 choices[63][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[63][2] = "Reutiliza los RNC (Radio Network Controller) de la red 3G incorporando las funciones de los nodos B";
 choices[63][3] = "El ancho de banda de los canales pasa de los 5 MHz de 3G a los 20MHz";
 answers[63] = choices[63][1];
 units[63] = "108";
 comments[63] = "Id Pregunta: 10201. Se trata de la release 8. Desaparece el RNC y sus funciones se incorporan al eNode B (Evolved Node B). El ancho de banda no es fijo sino variable entre 1,25MHz y 20MHz.";


//  Id pregunta: 10203 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[64]= new Array();
 choices[64][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[64][1] = "Descarta el uso de la t&eacute;cnica HARQ (Hybrid Automatic Repeat Request) introducida en la release 5 (HSDPA)";
 choices[64][2] = "La transmisi&oacute;n multiantena est&aacute; basada en SFBC (Space Frequency Block Coding) y FSTD (Frequency-Shift Time Diversity)";
 choices[64][3] = "Se la conoce con el nombre de LTE (Long Term Evolution)";
 answers[64] = choices[64][1];
 units[64] = "108";
 comments[64] = "Id Pregunta: 10203. La t&eacute;cnica HARQ sigue us&aacute;ndose en 4G";


//  Id pregunta: 10212 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta est&aacute; basado en relaciones de superaci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "M&eacute;todo PROMETHEE";
 choices[65][1] = "M&eacute;todo T.O.P.S.I.S. o de la programaci&oacute;n compromiso";
 choices[65][2] = "M&eacute;todo lexicogr&aacute;fico";
 choices[65][3] = "M&eacute;todo de la ponderaci&oacute;n lineal con &iacute;ndices econ&oacute;micos";
 answers[65] = choices[65][0];
 units[65] = "34";
 comments[65] = "Id Pregunta: 10212. ";


//  Id pregunta: 10224 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Para que la siguiente sentencia compile:float a = 100.21;I)&nbsp; Necesita hacer un casting a float: float a = (float) 100.21;II)&nbsp; Hay que colocar una f tras el valor num&eacute;rico: float a = 100.21f;III)&nbsp; Hay que prescindir de la fracci&oacute;n decimal: float a = 100;";
 choices[66]= new Array();
 choices[66][0] = "Compila bien sin cambios";
 choices[66][1] = "No compila, pero ninguna de las anteriores permite compilar";
 choices[66][2] = "S&oacute;lo es v&aacute;lida I)";
 choices[66][3] = "I), II) y III) son v&aacute;lidas";
 answers[66] = choices[66][3];
 units[66] = "60";
 comments[66] = "Id Pregunta: 10224. NULL";


//  Id pregunta: 10244 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio regala a un amigo un CD con el ejecutable de Juan. &iquest;Cu&aacute;l de las siguientes opciones no satisface las obligaciones de Antonio de hacer disponible el c&oacute;digo fuente?";
 choices[67]= new Array();
 choices[67][0] = "Puede alojar el c&oacute;digo fuente en su web site e indicar la URL en el CD";
 choices[67][1] = "Puede proveer el c&oacute;digo fuente en el mismo CD que el ejecutable";
 choices[67][2] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente contra el pago de los costes de distribuci&oacute;n";
 choices[67][3] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente gratis en un CD";
 answers[67] = choices[67][0];
 units[67] = "61";
 comments[67] = "Id Pregunta: 10244. ";


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


//  Id pregunta: 10256 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  La comunicaci&oacute;n de datos de car&aacute;cter personal al Miniterio Fiscal";
 choices[69]= new Array();
 choices[69][0] = "Puede hacerse en cualquier caso, sin consentimiento del interesado";
 choices[69][1] = "Puede hacerse sin consentimiento del interesado cuando sea en el ejercicio de las competencias propias del Ministerio Fiscal";
 choices[69][2] = "Puede hacerse sin consentimiento del afectado s&oacute;lo en los casos especificados en el reglamento de desarrollo de la Ley";
 choices[69][3] = "No puede hacerse en ning&uacute;n caso sin consentimiento del interesado";
 answers[69] = choices[69][1];
 units[69] = "29";
 comments[69] = "Id Pregunta: 10256. Art&iacute;culo 11.2 d) de la Ley 15/1999";


//  Id pregunta: 10263 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  La inscripci&oacute;n de ficheros de titularidad p&uacute;blica en el Registro General de Protecci&oacute;n de Datos";
 choices[70]= new Array();
 choices[70][0] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, si previamente se ha publicado en el diario oficial  correspondiente la norma o acuerdo que lo regule";
 choices[70][1] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, si previamente se ha publicado en el diario oficial  correspondiente la norma o acuerdo que lo regule";
 choices[70][2] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 choices[70][3] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 answers[70] = choices[70][0];
 units[70] = "29";
 comments[70] = "Id Pregunta: 10263. Art&iacute;culo 63.1 y 63.2 del RD 1720/2007";


//  Id pregunta: 10280 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n a las redes neuronales";
 choices[71]= new Array();
 choices[71][0] = "Son un m&eacute;todo de representaci&oacute;n del conocimiento param&eacute;trico";
 choices[71][1] = "La unidad de representaci&oacute;n de m&aacute;s alto nivel es la neurona";
 choices[71][2] = "Las neuronas se conectan mediante arcos";
 choices[71][3] = "Las neuronas se agrupan en capas";
 answers[71] = choices[71][1];
 units[71] = "64";
 comments[71] = "Id Pregunta: 10280. NULL";


//  Id pregunta: 10292 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;A qu&eacute; altitud aproximada est&aacute; la &oacute;rbita de los sat&eacute;lites que forman el sistema GPS?";
 choices[72]= new Array();
 choices[72][0] = "5.200 km";
 choices[72][1] = "20.200 km";
 choices[72][2] = "36.200 km";
 choices[72][3] = "45.200 km";
 answers[72] = choices[72][1];
 units[72] = "67";
 comments[72] = "Id Pregunta: 10292. TIC A2, libre, examen 2013";


//  Id pregunta: 10308 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[73]= new Array();
 choices[73][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[73][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[73][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[73][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[73] = choices[73][1];
 units[73] = "58";
 comments[73] = "Id Pregunta: 10308. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10311 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l es el m&aacute;ximo porcentaje de disco desaprovechado para el almacenamiento efectivo de datos en un array de discos configurado en RAID 5 (suponiendo que todos los discos tienen la misma capacidad)?";
 choices[74]= new Array();
 choices[74][0] = "33%";
 choices[74][1] = "20%";
 choices[74][2] = "50%";
 choices[74][3] = "0%";
 answers[74] = choices[74][0];
 units[74] = "48";
 comments[74] = "Id Pregunta: 10311. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10318 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;C&oacute;mo se llama la base de datos que tiene los par&aacute;metros de gesti&oacute;n de una red?";
 choices[75]= new Array();
 choices[75][0] = "MIB (Management Information Base).";
 choices[75][1] = "NMD (Network Management database).";
 choices[75][2] = "NMS (Network Management System).";
 choices[75][3] = "Ninguna de los anteriores.";
 answers[75] = choices[75][0];
 units[75] = "104";
 comments[75] = "Id Pregunta: 10318. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10319 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l es la direcci&oacute;n MAC de difusi&oacute;n de red o broadcast que se utiliza en Ethernet (IEEE 802.3)?";
 choices[76]= new Array();
 choices[76][0] = "255.255.255.255";
 choices[76][1] = "FF::FF";
 choices[76][2] = "FF:FF:FF:FF:FF:FF:FF:FF";
 choices[76][3] = "FF:FF:FF:FF:FF:FF";
 answers[76] = choices[76][3];
 units[76] = "101";
 comments[76] = "Id Pregunta: 10319. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10341 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En relaci&oacute;n con la legislaci&oacute;n de propiedad intelectual y el derecho de transformaci&oacute;n, se&ntilde;ale la respuesta correcta";
 choices[77]= new Array();
 choices[77][0] = "Los derechos de propiedad intelectual de la obra resultado de la transformaci&oacute;n corresponder&iacute;an al autor de la obra original";
 choices[77][1] = "Los derechos de propiedad intelectual de la obra resultado de la transformaci&oacute;n corresponder&aacute;n al autor de esta &uacute;ltima";
 choices[77][2] = "Los derechos de explotaci&oacute;n de la obra resultado de la transformaci&oacute;n corresponden a partes iguales entre el autor de la obra original y el de la obra producto de la transformaci&oacute;n";
 choices[77][3] = "Los derechos de explotaci&oacute;n de la obra resultado de la transformaci&oacute;n corresponden tanto al autor de la obra original como al de la obra producto de la transformaci&oacute;n, en la proporci&oacute;n que &eacute;stos determinen";
 answers[77] = choices[77][1];
 units[77] = "36";
 comments[77] = "Id Pregunta: 10341. Consultar Art. 21 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10344 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l es la normativa que crea la Comisi&oacute;n de Propiedad Intelectual?";
 choices[78]= new Array();
 choices[78][0] = "Ley 2/2011, de Econom&iacute;a Sostenible";
 choices[78][1] = "Real Decreto 1889/2011, de regulaci&oacute;n del funcionamiento de la Comisi&oacute;n de Propiedad Intelectual";
 choices[78][2] = "Real Decreto Legislativo 1/1996, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual";
 choices[78][3] = "Real Decreto 1/1996, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual";
 answers[78] = choices[78][0];
 units[78] = "37";
 comments[78] = "Id Pregunta: 10344. La Ley 2/2011 crea la Comisi&oacute;n de Propiedad Intelectual, y el Real Decreto 1889/2011 regula su funcionamiento";


//  Id pregunta: 10349 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En relaci&oacute;n con el mecanismo de protecci&oacute;n de derechos de autor por huella digital, &iquest;c&oacute;mo se consigue que los datos del usuario que ha adquirido los derechos de uso del objeto no sean conocidos por el vendedor?";
 choices[79]= new Array();
 choices[79][0] = "Mediante el uso de https para asegurar la privacidad de la comunicaci&oacute;n";
 choices[79][1] = "Mediante el uso de un sistema de huella digital asim&eacute;trica, que emplea criptograf&iacute;a asim&eacute;trica";
 choices[79][2] = "Mediante el uso de un sistema de huella digital an&oacute;nima, utilizando un tercero de confianza que conoce tanto la identidad del comprador como del vendedor";
 choices[79][3] = "No es posible, el vendedor debe conocer los datos del comprador para poder transmitirle los derechos de uso del objeto";
 answers[79] = choices[79][2];
 units[79] = "37";
 comments[79] = "Id Pregunta: 10349. La huella digital es un mecanismo para defender los derechos de autor y combatir la copia no autorizada de contenidos que consiste en introducir una serie de bits imperceptibles sobre un producto de soporte electr&oacute;nico (CD-ROM, DVD.) de forma que se pueda";


//  Id pregunta: 10351 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[80]= new Array();
 choices[80][0] = "Para cumplir nivel AA, la presentaci&oacute;n visual de texto e im&aacute;genes de texto debe tener una relaci&oacute;n de contraste de, al menos, 4.5:1";
 choices[80][1] = "Lo anterior es cierto, pero para nivel A";
 choices[80][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[80][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que no aplica a logotipos, textos grandes y textos incidentales";
 answers[80] = choices[80][3];
 units[80] = "39";
 comments[80] = "Id Pregunta: 10351. Consultar WCAG Pauta 1.4.3 Contraste (m&iacute;nimo)";


//  Id pregunta: 10429 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  La virtualizaci&oacute;n basada en VDI (Virtual Desktop Infrastructure) ";
 choices[81]= new Array();
 choices[81][0] = "permite ratios de consolidaci&oacute;n de 10 a 1 respecto a servidores de terminales. ";
 choices[81][1] = "est&aacute; basado en la soluci&oacute;n XenApp de Citrix.";
 choices[81][2] = "aporta aislamiento y control sobre los puestos de trabajo gestionados.";
 choices[81][3] = "no est&aacute; dise&ntilde;ado para soportar el perfil de Desarrolladores, por el control limitado del entorno.  ";
 answers[81] = choices[81][2];
 units[81] = "119";
 comments[81] = "Id Pregunta: 10429. Examen TIC A1 2013";


//  Id pregunta: 10445 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En el marco de la prueba de software, la cobertura de declaraciones de c&oacute;digo (code statement coverage) NO se utiliza para ";
 choices[82]= new Array();
 choices[82][0] = "definir &quot;hecho&quot; (done) en las metodolog&iacute;as &aacute;giles. ";
 choices[82][1] = "detectar c&oacute;digo muerto o inalcanzable.";
 choices[82][2] = "certificar software de misi&oacute;n cr&iacute;tica.";
 choices[82][3] = "detectar errores de condiciones de carrera (race condition bugs). ";
 answers[82] = choices[82][3];
 units[82] = "88";
 comments[82] = "Id Pregunta: 10445. Examen TIC A1 2013";


//  Id pregunta: 10454 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como cr&iacute;tica:";
 choices[83]= new Array();
 choices[83][0] = "No puede ser reemplazada por una operaci&oacute;n manual.";
 choices[83][1] = "La tolerancia a la interrupci&oacute;n es muy baja.";
 choices[83][2] = "El costo de interrupci&oacute;n es muy alto.";
 choices[83][3] = "Todas las anteriores.";
 answers[83] = choices[83][3];
 units[83] = "97";
 comments[83] = "Id Pregunta: 10454. NULL";


//  Id pregunta: 10455 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como vital:";
 choices[84]= new Array();
 choices[84][0] = "Puede realizarse manualmente por un periodo breve de tiempo.";
 choices[84][1] = "Tiene mayor tolerancia a las interrupciones que una clasificada como cr&iacute;tica.";
 choices[84][2] = "Ninguna de las anteriores.";
 choices[84][3] = "A y B.";
 answers[84] = choices[84][3];
 units[84] = "97";
 comments[84] = "Id Pregunta: 10455. NULL";


//  Id pregunta: 10465 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l no es una nueva caracter&iacute;stica de HTML5?";
 choices[85]= new Array();
 choices[85][0] = "Nuevos elementos sem&aacute;nticos.";
 choices[85][1] = "Fuerte soporte a gr&aacute;ficos con &lt;canvas&gt; y &lt;svg&gt;.";
 choices[85][2] = "Fuerte soporte multimedia.";
 choices[85][3] = "Nuevos elementos para soporte a la accesibilidad web.";
 answers[85] = choices[85][3];
 units[85] = "69";
 comments[85] = "Id Pregunta: 10465. NULL";


//  Id pregunta: 10469 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Respecto a HTML5, indique la respuesta incorrecta:";
 choices[86]= new Array();
 choices[86][0] = "Existe una API de geolocalizaci&oacute;n.";
 choices[86][1] = "Permite abrir sockets para una comunicaci&oacute;n bidireccional, full duplex con baja latencia y que se basa en el protocolo TCP.";
 choices[86][2] = "No neceita Flash para ver v&iacute;deos.";
 choices[86][3] = "Los Web Workers permiten la ejecuci&oacute;n de un &uacute;nico subproceso.";
 answers[86] = choices[86][3];
 units[86] = "69";
 comments[86] = "Id Pregunta: 10469. NULL";


//  Id pregunta: 10480 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  La Autoridad de Certificaci&oacute;n de los certificados emitidos para el DNI electr&oacute;nico es:";
 choices[87]= new Array();
 choices[87][0] = "La F&aacute;brica Nacional de Moneda y Timbre";
 choices[87][1] = "El Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[87][2] = "El CCN (Centro Criptol&oacute;gico Nacional)";
 choices[87][3] = "El Ministerio del Interior - Direcci&oacute;n General de la Polic&iacute;a";
 answers[87] = choices[87][3];
 units[87] = "74";
 comments[87] = "Id Pregunta: 10480. NULL";


//  Id pregunta: 10482 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  El m&eacute;todo SLIM de estimaci&oacute;n de esfuerzo, usa la curva de:";
 choices[88]= new Array();
 choices[88][0] = "F de Snedecor";
 choices[88][1] = "Parkingson";
 choices[88][2] = "Norden-Rayleigh";
 choices[88][3] = "Pareto";
 answers[88] = choices[88][2];
 units[88] = "89";
 comments[88] = "Id Pregunta: 10482. NULL";


//  Id pregunta: 10491 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Cual es el importe m&aacute;ximo de una sanci&oacute;n muy grave seg&uacute;n la Ley 9/2014, si no se puede calcular el beneficio bruto obtenido";
 choices[89]= new Array();
 choices[89][0] = "10 millones de euros";
 choices[89][1] = "No hay un l&iacute;mite";
 choices[89][2] = "20 millones de euros";
 choices[89][3] = "El qu&iacute;ntuplo del beneficio bruto obtenido";
 answers[89] = choices[89][2];
 units[89] = "110";
 comments[89] = "Id Pregunta: 10491. Art 79.1.a) de la Ley 9/2014. La respuesta D no es correcta puesto que en la pregunta se especifica que no se puede calcular el beneficio bruto obtenido";


//  Id pregunta: 10495 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cual de los siguientes no es un servicio prestado por Red SARA?";
 choices[90]= new Array();
 choices[90][0] = "DNS";
 choices[90][1] = "SMTP";
 choices[90][2] = "SNMP";
 choices[90][3] = "NTP";
 answers[90] = choices[90][2];
 units[90] = "43";
 comments[90] = "Id Pregunta: 10495. Punto III.1.3 de la NTI de Requisitos de conexi&oacute;n a Red SARA";


//  Id pregunta: 10504 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cual es la impedancia de los cables definida en la ISO 11801 para las versiones de la norma posteriores a 2002?";
 choices[91]= new Array();
 choices[91][0] = "120 ?";
 choices[91][1] = "150 ?";
 choices[91][2] = "100 ?";
 choices[91][3] = "Todos los anteriores";
 answers[91] = choices[91][2];
 units[91] = "99";
 comments[91] = "Id Pregunta: 10504. A partir del 2002, solo se consideran validas las impedancias de 100 ?";


//  Id pregunta: 10505 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cual de las siguientes normas se refiere a la Compatibilidad Electromagnetica?";
 choices[92]= new Array();
 choices[92][0] = "Real Decreto 158/2006";
 choices[92][1] = "Directiva 2004/108/CE";
 choices[92][2] = "Directiva 2006/123/CE";
 choices[92][3] = "Ninguna de las anteriores";
 answers[92] = choices[92][1];
 units[92] = "99";
 comments[92] = "Id Pregunta: 10505. El RD es el Real Decreto 1580/2006 y la directiva 2006/123 es la de servicios";


//  Id pregunta: 10525 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Se&ntilde;ale la respuesta correcta respecto a las arquitecturas UMA (Uniform Memory Access) y NUMA (Non-Uniform Memory Access)";
 choices[93]= new Array();
 choices[93][0] = "en NUMA un procesador accede m&aacute;s deprisa a su memoria local que a la memoria compartida";
 choices[93][1] = "en UMA los procesadores acceden a la memoria compartida mediante un bus o conmutador";
 choices[93][2] = "A y B son incorrectas";
 choices[93][3] = "A y B son correctas";
 answers[93] = choices[93][3];
 units[93] = "45";
 comments[93] = "Id Pregunta: 10525. NULL";


//  Id pregunta: 10530 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  Seleccione la afirmaci&oacute;n correcta:";
 choices[94]= new Array();
 choices[94][0] = "los buses paralelos permiten enviar mayor cantidad de informaci&oacute;n por unidad de tiempo que los buses serie";
 choices[94][1] = "el bus MCA (Micro Channel Architecture) empleado en los IBM PS/2 ten&iacute;a un ancho de palabra m&aacute;ximo de 16 bits";
 choices[94][2] = "los buses paralelos presentan una limitaci&oacute;n de velocidad relacionada con la variaci&oacute;n de retardo o jitter entre los diferentes bits de su ancho de palabra";
 choices[94][3] = "el bus PCI es un bus paralelo pero sus evoluciones posteriores, PCI-X y PCIe son buses serie";
 answers[94] = choices[94][2];
 units[94] = "46";
 comments[94] = "Id Pregunta: 10530. NULL";


//  Id pregunta: 10542 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de estos est&aacute;ndares relacionados con Ethernet permite enrutamiento multipath?";
 choices[95]= new Array();
 choices[95][0] = "802.1aq (Shortest Path Bridging)";
 choices[95][1] = "802.D (Spanning Tree Protocol)";
 choices[95][2] = "802.1s, incluido en 802.1Q-2005 (Multiple Spanning Tree Protocol)";
 choices[95][3] = "802.1w (Rapid Spanning Tree Protocol)";
 answers[95] = choices[95][0];
 units[95] = "100";
 comments[95] = "Id Pregunta: 10542. Shortest Path Bridging sustituye a los antiguos STP(IEEE 802.1D), RSTP (IEEE 802.1w) y MSTP (IEEE 802.1s) que permit&iacute;an un &uacute;nico camino activo para evitar bucles. SPB permite varios caminos activos lo que posibilita hasta m&aacute;s de 16 millones de VLAN.";


//  Id pregunta: 10560 AÃ±o de creación de pregunta: 2014-01-01
 questions[96]= "97)  Los controles compensatorios tienen como objetivo:";
 choices[96]= new Array();
 choices[96][0] = "reducir el riesgo ante una debilidad existente";
 choices[96][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[96][2] = "Solucionar problemas detectados por controles detectivos";
 choices[96][3] = "Reportar errores";
 answers[96] = choices[96][0];
 units[96] = "31, 32, 33";
 comments[96] = "Id Pregunta: 10560. Las opciones B, C y D son caracter&iacute;sticas de  controles preventivo, correctivo y detectivo respectivamente.";


//  Id pregunta: 10562 AÃ±o de creación de pregunta: 2014-01-01
 questions[97]= "98)  Los controles detectivos tienen como objeto:";
 choices[97]= new Array();
 choices[97][0] = "reducir el riesgo ante una debilidad existente";
 choices[97][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[97][2] = "Solucionar problemas detectados por controles detectivos";
 choices[97][3] = "Reportar errores";
 answers[97] = choices[97][3];
 units[97] = "31, 32, 33";
 comments[97] = "Id Pregunta: 10562. ";


//  Id pregunta: 10570 AÃ±o de creación de pregunta: 2014-01-01
 questions[98]= "99)  La auditor&iacute;a bienal de cumplimiento de la LOPD y la realizaci&oacute;n de pruebas de hacking &eacute;tico tienen las siguientes similitudes y diferencias, marcar la respuesta verdadera";
 choices[98]= new Array();
 choices[98][0] = "El hacking &eacute;tico no es una herramienta de auditor&iacute;a ya que lo realizan los hackers solamente, mientras que la auditor&iacute;a LOPD lo realizan siempre juristas o personal de perfil TAC";
 choices[98][1] = "El hacking &eacute;tico es una t&eacute;cnica para probar los controles de seguridad de las aplicaciones y sirve para que un auditor de seguridad IT pueda encontrar deficiencias. Si la aplicaci&oacute;n maneja datos LOPD, la informaci&oacute;n del estado de estos controles puede servir de apoyo a la auditor&iacute;a de cumplimiento del reglamento asociado a la LOPD que tambi&eacute;n debe verificarse en la auditor&iacute;a bienal, que incluir&aacute; tanto aspectos organizativos como t&eacute;cnicos.";
 choices[98][2] = "La Auditor&iacute;a LOPD es una auditor&iacute;a IT estrictamente hablando, ya que no debe entrar a valorar aspectos organizativos y procedimientales mientras que el hacking &eacute;tico entra a valorar los valores &eacute;ticos de la empresa de cara al tratamiento de la informaci&oacute;n, en particular los datos de car&aacute;cter personal.";
 choices[98][3] = "El hacking &eacute;tico requiere de personal t&eacute;cnico exclusivamente (hackers o no) mientras que la auditor&iacute;a de cumplimiento de la LOPD s&oacute;lo debe contar con personal jurista y los responsables funcionales de las aplicaciones LOPD involucradas pero no a t&eacute;cnicos.";
 answers[98] = choices[98][1];
 units[98] = "31";
 comments[98] = "Id Pregunta: 10570. ";


//  Id pregunta: 10571 AÃ±o de creación de pregunta: 2014-01-01
 questions[99]= "100)  En el transcurso de una auditor&iacute;a inform&aacute;tica, uno de los auditores descubre que existe un incumplimiento grave en un control inform&aacute;tico que podr&iacute;a llevar a la realizaci&oacute;n de un fraude importante por parte de un grupo de empleados, con p&eacute;rdidas econ&oacute;micas y de imagen para la empresa auditada. El auditor debe:";
 choices[99]= new Array();
 choices[99][0] = "Reunir todas las evidencias de esta deficiencia grave y convocar una reuni&oacute;n urgente con los responsables de la empresa para que conozcan este hecho y puedan tomar medidas preventivas.";
 choices[99][1] = "Contactar al grupo de empleados que pueden cometer el fraude y advertirles de lo descubierto para que no comentan el posible fraude.";
 choices[99][2] = "Reunir todas las pruebas y exponerlas todas juntas en el informe al final de la auditor&iacute;a, aunque dicho informe se entregue con posterioridad de la posibilidad de realizaci&oacute;n del fraude, ya que una auditor&iacute;a no debe interrumpirse por ninguna causa.";
 choices[99][3] = "Llamar a ISACA para informar de que se ha producido una violaci&oacute;n del c&oacute;digo &eacute;tico de conducta que se propone en COSO (Marco de Gobierno Corporativo)";
 answers[99] = choices[99][0];
 units[99] = "31";
 comments[99] = "Id Pregunta: 10571. ";


