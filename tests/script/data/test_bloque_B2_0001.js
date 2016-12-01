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
var preguntaids = new Array();

//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[0]= "1)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[0]= new Array();
 choices[0][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[0][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[0][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[0][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[0] = choices[0][2];
 units[0] = "73";
 comments[0] = "Id Pregunta: 654. ";
 preguntaids[0] = 654


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[1]= new Array();
 choices[1][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[1][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[1][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[1][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[1] = choices[1][0];
 units[1] = "77";
 comments[1] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";
 preguntaids[1] = 685


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[2]= "3)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[2]= new Array();
 choices[2][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[2][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[2][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[2][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[2] = choices[2][1];
 units[2] = "64";
 comments[2] = "Id Pregunta: 11. AGE A1 2015";
 preguntaids[2] = 11


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[3]= "4)  Big Data:";
 choices[3]= new Array();
 choices[3][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[3][1] = "No puede emplearse para tratar datos no estructurados";
 choices[3][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = choices[3][3];
 units[3] = "73";
 comments[3] = "Id Pregunta: 109. ";
 preguntaids[3] = 109


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[4]= "5)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[4]= new Array();
 choices[4][0] = "B&aacute;sico, medio y alto";
 choices[4][1] = "D&eacute;bil y fuerte";
 choices[4][2] = "Bajo, medio y alto";
 choices[4][3] = "Bajo, sustancial y alto";
 answers[4] = choices[4][3];
 units[4] = "77";
 comments[4] = "Id Pregunta: 686. Art&iacute;culo 8 del Reglamento 910/2014";
 preguntaids[4] = 686


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[5]= "6)  Son proyectos de Apache relacionados con Big Data:";
 choices[5]= new Array();
 choices[5][0] = "Hadoop";
 choices[5][1] = "Spark";
 choices[5][2] = "A) y B)";
 choices[5][3] = "Niguno de los anteriores";
 answers[5] = choices[5][2];
 units[5] = "73";
 comments[5] = "Id Pregunta: 108. ";
 preguntaids[5] = 108


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[6]= new Array();
 choices[6][0] = "MySQL";
 choices[6][1] = "SQLite";
 choices[6][2] = "Zope";
 choices[6][3] = "MariaDB";
 answers[6] = choices[6][2];
 units[6] = "61";
 comments[6] = "Id Pregunta: 577. Tema 61. TAI 2016.";
 preguntaids[6] = 577


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[7]= "8)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[7]= new Array();
 choices[7][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[7][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[7][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[7][3] = "Todas las respuestas son correctas.";
 answers[7] = choices[7][3];
 units[7] = "50";
 comments[7] = "Id Pregunta: 622. Junta de Extremadura A1 2015";
 preguntaids[7] = 622


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[8]= new Array();
 choices[8][0] = "Data Mining (miner&iacute;a de datos)";
 choices[8][1] = "Business Intelligence (inteligencia de negocio)";
 choices[8][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[8][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[8] = choices[8][1];
 units[8] = "72";
 comments[8] = "Id Pregunta: 68. AGE A1 2015";
 preguntaids[8] = 68


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[9]= new Array();
 choices[9][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[9][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[9][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[9][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[9] = choices[9][2];
 units[9] = "71";
 comments[9] = "Id Pregunta: 39. AGE A1 2015";
 preguntaids[9] = 39


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[10]= "11)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[10]= new Array();
 choices[10][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[10][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[10][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[10][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[10] = choices[10][2];
 units[10] = "53";
 comments[10] = "Id Pregunta: 65. AGE A1 2015";
 preguntaids[10] = 65


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[11]= "12)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[11]= new Array();
 choices[11][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[11][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[11][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[11][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[11] = choices[11][1];
 units[11] = "74";
 comments[11] = "Id Pregunta: 45. AGE A1 2015";
 preguntaids[11] = 45


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[12]= "13)  Los criptosistemas pueden clasificarse en:";
 choices[12]= new Array();
 choices[12][0] = "Concretos, Estables e Inestables.";
 choices[12][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[12][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[12][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[12] = choices[12][3];
 units[12] = "76";
 comments[12] = "Id Pregunta: 603. Junta de Extremadura A1 2015";
 preguntaids[12] = 603


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[13]= "14)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[13]= new Array();
 choices[13][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[13][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[13][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[13][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[13] = choices[13][3];
 units[13] = "62";
 comments[13] = "Id Pregunta: 38. AGE A1 2015";
 preguntaids[13] = 38


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[14]= "15)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[14]= new Array();
 choices[14][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[14][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[14][2] = "A partir del 1 de enero de 2015";
 choices[14][3] = "A partir del 1 de julio de 2016";
 answers[14] = choices[14][1];
 units[14] = "77";
 comments[14] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";
 preguntaids[14] = 692


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[15]= "16)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[15]= new Array();
 choices[15][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[15][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[15][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[15][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[15] = choices[15][1];
 units[15] = "63";
 comments[15] = "Id Pregunta: 33. AGE A1 2015";
 preguntaids[15] = 33


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[16]= "17)  El lenguaje SPARK es un subconjunto de:";
 choices[16]= new Array();
 choices[16][0] = "Java";
 choices[16][1] = "Fortran";
 choices[16][2] = "Ruby";
 choices[16][3] = "Ada";
 answers[16] = choices[16][3];
 units[16] = "73";
 comments[16] = "Id Pregunta: 81. AGE A1 2015";
 preguntaids[16] = 81


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[17]= new Array();
 choices[17][0] = "Es un framework de software libre.";
 choices[17][1] = "Es una base de datos NoSQL.";
 choices[17][2] = "Est&aacute; basado en MapReduce.";
 choices[17][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[17] = choices[17][1];
 units[17] = "73";
 comments[17] = "Id Pregunta: 94. AGE A1 2015";
 preguntaids[17] = 94


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[18]= new Array();
 choices[18][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[18][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[18][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[18][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[18] = choices[18][1];
 units[18] = "78";
 comments[18] = "Id Pregunta: 50. AGE A1 2015";
 preguntaids[18] = 50


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[19]= "20)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[19]= new Array();
 choices[19][0] = "Gran volumen de informaci&oacute;n";
 choices[19][1] = "Gran variedad de datos";
 choices[19][2] = "Se analizan datos a gran velocidad";
 choices[19][3] = "Todas las anteriores son verdaderas";
 answers[19] = choices[19][3];
 units[19] = "73";
 comments[19] = "Id Pregunta: 105. ";
 preguntaids[19] = 105


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[20]= "21)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[20]= new Array();
 choices[20][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[20][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[20][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[20][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[20] = choices[20][1];
 units[20] = "77";
 comments[20] = "Id Pregunta: 694. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";
 preguntaids[20] = 694


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[21]= "22)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[21]= new Array();
 choices[21][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[21][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[21][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[21][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[21] = choices[21][3];
 units[21] = "77";
 comments[21] = "Id Pregunta: 48. AGE A1 2015";
 preguntaids[21] = 48


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[22]= "23)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[22]= new Array();
 choices[22][0] = "Directiva 95/46/CE";
 choices[22][1] = "Directiva 1999/93/CE";
 choices[22][2] = "Directiva 2000/31/CE";
 choices[22][3] = "Directiva 2003/98/CE";
 answers[22] = choices[22][1];
 units[22] = "77";
 comments[22] = "Id Pregunta: 684. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[22] = 684


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[23]= new Array();
 choices[23][0] = "SPARQL";
 choices[23][1] = "UnQL";
 choices[23][2] = "XQUERY";
 choices[23][3] = "RQL";
 answers[23] = choices[23][0];
 units[23] = "74";
 comments[23] = "Id Pregunta: 23. AGE A1 2015";
 preguntaids[23] = 23


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[24]= new Array();
 choices[24][0] = "Cassandra";
 choices[24][1] = "Riak";
 choices[24][2] = "Avro";
 choices[24][3] = "Zookeeper";
 answers[24] = choices[24][3];
 units[24] = "73";
 comments[24] = "Id Pregunta: 658. ";
 preguntaids[24] = 658


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[25]= "26)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[25]= new Array();
 choices[25][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[25][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[25][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[25][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[25] = choices[25][1];
 units[25] = "76";
 comments[25] = "Id Pregunta: 46. AGE A1 2015";
 preguntaids[25] = 46


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[26]= "27)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[26]= new Array();
 choices[26][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[26][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[26][2] = "Crea una copia del proceso que hace la llamada.";
 choices[26][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[26] = choices[26][2];
 units[26] = "57";
 comments[26] = "Id Pregunta: 28. AGE A1 2015";
 preguntaids[26] = 28


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[27]= new Array();
 choices[27][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[27][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[27][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[27][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[27] = choices[27][2];
 units[27] = "77";
 comments[27] = "Id Pregunta: 693. Anexo I del Reglamento 910/2014";
 preguntaids[27] = 693


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[28]= "29)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[28]= new Array();
 choices[28][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[28][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[28][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[28][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[28] = choices[28][1];
 units[28] = "58";
 comments[28] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[28] = 643


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[29]= new Array();
 choices[29][0] = "Backup full.";
 choices[29][1] = "Backup diferencial.";
 choices[29][2] = "Backup incremental.";
 choices[29][3] = "Backup deduplicado.";
 answers[29] = choices[29][3];
 units[29] = "53";
 comments[29] = "Id Pregunta: 852. Xunta de Galicia 2015";
 preguntaids[29] = 852


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[30]= new Array();
 choices[30][0] = "As&iacute;ncrona.";
 choices[30][1] = "Log-shipping.";
 choices[30][2] = "Disk buffering.";
 choices[30][3] = "S&iacute;ncrona.";
 answers[30] = choices[30][3];
 units[30] = "53";
 comments[30] = "Id Pregunta: 851. Xunta de Galicia 2015";
 preguntaids[30] = 851


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[31]= "32)  En el sistema operativo Unix/Linux, el comando id:";
 choices[31]= new Array();
 choices[31][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[31][1] = "El comando id no existe.";
 choices[31][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[31][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[31] = choices[31][0];
 units[31] = "57";
 comments[31] = "Id Pregunta: 639. Junta de Extremadura A1 2015";
 preguntaids[31] = 639


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; es el machine learning?";
 choices[32]= new Array();
 choices[32][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[32][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[32][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[32][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[32] = choices[32][0];
 units[32] = "73";
 comments[32] = "Id Pregunta: 659. ";
 preguntaids[32] = 659


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[33]= new Array();
 choices[33][0] = "Yarn";
 choices[33][1] = "Flume";
 choices[33][2] = "Hive";
 choices[33][3] = "BizAgi";
 answers[33] = choices[33][3];
 units[33] = "73";
 comments[33] = "Id Pregunta: 657. ";
 preguntaids[33] = 657


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[34]= "35)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[34]= new Array();
 choices[34][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[34][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[34][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[34][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[34] = choices[34][2];
 units[34] = "50";
 comments[34] = "Id Pregunta: 633. Junta de Extremadura A1 2015";
 preguntaids[34] = 633


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[35]= "36)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[35]= new Array();
 choices[35][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[35][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[35][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[35][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[35] = choices[35][3];
 units[35] = "57";
 comments[35] = "Id Pregunta: 640. Junta de Extremadura A1 2015";
 preguntaids[35] = 640


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[36]= "37)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[36]= new Array();
 choices[36][0] = "Fat y Ntfs.";
 choices[36][1] = "Extfat y Fat.";
 choices[36][2] = "Fat y Nfst.";
 choices[36][3] = "ext2fs y Ntfs.";
 answers[36] = choices[36][0];
 units[36] = "58";
 comments[36] = "Id Pregunta: 642. Junta de Extremadura A1 2015";
 preguntaids[36] = 642


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[37]= new Array();
 choices[37][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[37][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[37][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[37][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[37] = choices[37][0];
 units[37] = "62";
 comments[37] = "Id Pregunta: 12. AGE A1 2015";
 preguntaids[37] = 12


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[38]= "39)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[38]= new Array();
 choices[38][0] = "Infrastructure as a Service (IaaS)";
 choices[38][1] = "Platform as a Service (PaaS)";
 choices[38][2] = "Software as a Service (SaaS)";
 choices[38][3] = "Application as a Service (AaaS)";
 answers[38] = choices[38][1];
 units[38] = "52";
 comments[38] = "Id Pregunta: 63. AGE A1 2015";
 preguntaids[38] = 63


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[39]= "40)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[39]= new Array();
 choices[39][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[39][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[39][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[39][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[39] = choices[39][1];
 units[39] = "73";
 comments[39] = "Id Pregunta: 101. ";
 preguntaids[39] = 101


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[40]= "41)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[40]= new Array();
 choices[40][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[40][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[40][2] = "Las Inspecciones Generales de los Servicios";
 choices[40][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[40] = choices[40][1];
 units[40] = "75";
 comments[40] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[40] = 79


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[41]= "42)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[41]= new Array();
 choices[41][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[41][1] = "1 de enero de 2015";
 choices[41][2] = "1 de enero de 2016";
 choices[41][3] = "1 de julio de 2016";
 answers[41] = choices[41][3];
 units[41] = "77";
 comments[41] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[41] = 691


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[42]= new Array();
 choices[42][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[42][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[42][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[42][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[42] = choices[42][3];
 units[42] = "77";
 comments[42] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";
 preguntaids[42] = 688


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[43]= "44)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[43]= new Array();
 choices[43][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[43][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[43][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[43][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[43] = choices[43][3];
 units[43] = "66";
 comments[43] = "Id Pregunta: 37. AGE A1 2015";
 preguntaids[43] = 37


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[44]= "45)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[44]= new Array();
 choices[44][0] = "0";
 choices[44][1] = "1";
 choices[44][2] = "Tantos como peticiones concurrentes tenga.";
 choices[44][3] = "Tantos como le permita la memoria de la JVM.";
 answers[44] = choices[44][1];
 units[44] = "64";
 comments[44] = "Id Pregunta: 15. AGE A1 2015";
 preguntaids[44] = 15


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[45]= new Array();
 choices[45][0] = "NoSQL";
 choices[45][1] = "Sistemas de baja latencia";
 choices[45][2] = "MapReduce";
 choices[45][3] = "Business Intelligence";
 answers[45] = choices[45][1];
 units[45] = "73";
 comments[45] = "Id Pregunta: 660. ";
 preguntaids[45] = 660


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[46]= "47)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[46]= new Array();
 choices[46][0] = "Almacenamiento orientado a columnas";
 choices[46][1] = "Framework MapReduce";
 choices[46][2] = "OLTP";
 choices[46][3] = "Bases de datos clave-valor";
 answers[46] = choices[46][2];
 units[46] = "73";
 comments[46] = "Id Pregunta: 93. AGE A1 2015";
 preguntaids[46] = 93


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[47]= "48)  JNDI se usa para el acceso a:";
 choices[47]= new Array();
 choices[47][0] = "Datos de ficheros";
 choices[47][1] = "Sistemas gestores de bases de datos";
 choices[47][2] = "Directorios de nombres";
 choices[47][3] = "Colas de mensajer&iacute;a";
 answers[47] = choices[47][2];
 units[47] = "64";
 comments[47] = "Id Pregunta: 13. AGE A1 2015";
 preguntaids[47] = 13


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[48]= new Array();
 choices[48][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[48][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[48][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[48][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[48] = choices[48][0];
 units[48] = "75";
 comments[48] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[48] = 70


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[49]= new Array();
 choices[49][0] = "Orientaci&oacute;n a objetos";
 choices[49][1] = "MapReduce";
 choices[49][2] = "Pipeline filtering";
 choices[49][3] = "Programaci&oacute;n funcional";
 answers[49] = choices[49][1];
 units[49] = "73";
 comments[49] = "Id Pregunta: 661. ";
 preguntaids[49] = 661


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[50]= new Array();
 choices[50][0] = "Al menos cada 12 meses";
 choices[50][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[50][2] = "Al menos cada 18 meses";
 choices[50][3] = "Al menos cada 24 meses";
 answers[50] = choices[50][3];
 units[50] = "77";
 comments[50] = "Id Pregunta: 687. Art&iacute;culo 20 del Reglamento 910/2014";
 preguntaids[50] = 687


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[51]= new Array();
 choices[51][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[51][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[51][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[51][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[51] = choices[51][3];
 units[51] = "78";
 comments[51] = "Id Pregunta: 47. AGE A1 2015";
 preguntaids[51] = 47


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; facilita un ORM?";
 choices[52]= new Array();
 choices[52][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[52][1] = "Conversi&oacute;n de objetos a documentos";
 choices[52][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[52][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[52] = choices[52][0];
 units[52] = "62";
 comments[52] = "Id Pregunta: 49. AGE A1 2015";
 preguntaids[52] = 49


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[53]= new Array();
 choices[53][0] = "JAXP";
 choices[53][1] = "JNI";
 choices[53][2] = "JNDI";
 choices[53][3] = "JDBC";
 answers[53] = choices[53][1];
 units[53] = "64";
 comments[53] = "Id Pregunta: 36. AGE A1 2015";
 preguntaids[53] = 36


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[54]= "55)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[54]= new Array();
 choices[54][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[54][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[54][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[54][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[54] = choices[54][0];
 units[54] = "60";
 comments[54] = "Id Pregunta: 651. Junta de Extremadura A1 2015";
 preguntaids[54] = 651


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[55]= "56)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[55]= new Array();
 choices[55][0] = "6 TB.";
 choices[55][1] = "5 TB.";
 choices[55][2] = "7 TB.";
 choices[55][3] = "3 TB.";
 answers[55] = choices[55][1];
 units[55] = "53";
 comments[55] = "Id Pregunta: 854. Xunta de Galicia 2015";
 preguntaids[55] = 854


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[56]= "57)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[56]= new Array();
 choices[56][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[56][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[56][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[56][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[56] = choices[56][2];
 units[56] = "57";
 comments[56] = "Id Pregunta: 638. Junta de Extremadura A1 2015";
 preguntaids[56] = 638


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[57]= "58)  En qu&eacute; consiste el principio BASE:";
 choices[57]= new Array();
 choices[57][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[57][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[57][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[57][3] = "Todas las anteriores son falsas";
 answers[57] = choices[57][3];
 units[57] = "73";
 comments[57] = "Id Pregunta: 103. ";
 preguntaids[57] = 103


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[58]= "59)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Lollipop";
 choices[58][1] = "Jelly Bean";
 choices[58][2] = "Marshmallow";
 choices[58][3] = "KitKat";
 answers[58] = choices[58][2];
 units[58] = "59";
 comments[58] = "Id Pregunta: 61. AGE A1 2015";
 preguntaids[58] = 61


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[59]= "60)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[59]= new Array();
 choices[59][0] = "Intersecci&oacute;n.";
 choices[59][1] = "Uni&oacute;n.";
 choices[59][2] = "Restricci&oacute;n.";
 choices[59][3] = "Diferencia.";
 answers[59] = choices[59][0];
 units[59] = "60";
 comments[59] = "Id Pregunta: 614. Junta de Extremadura A1 2015";
 preguntaids[59] = 614


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[60]= new Array();
 choices[60][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[60][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[60][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[60][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[60] = choices[60][1];
 units[60] = "60";
 comments[60] = "Id Pregunta: 44. AGE A1 2015";
 preguntaids[60] = 44


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[61]= new Array();
 choices[61][0] = "Avro";
 choices[61][1] = "Sqoop";
 choices[61][2] = "UIMA";
 choices[61][3] = "Jaql";
 answers[61] = choices[61][1];
 units[61] = "73";
 comments[61] = "Id Pregunta: 662. ";
 preguntaids[61] = 662


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[62]= "63)  Son bases de datos NoSQL:";
 choices[62]= new Array();
 choices[62][0] = "MongoDB y Maria DB";
 choices[62][1] = "HBase y Dynamo";
 choices[62][2] = "MariaDB, Cassandra y BigTable";
 choices[62][3] = "La A) y la C)";
 answers[62] = choices[62][1];
 units[62] = "73";
 comments[62] = "Id Pregunta: 104. ";
 preguntaids[62] = 104


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; es Java Web Start?";
 choices[63]= new Array();
 choices[63][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[63][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[63][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[63][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[63] = choices[63][3];
 units[63] = "64";
 comments[63] = "Id Pregunta: 35. AGE A1 2015";
 preguntaids[63] = 35


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[64]= "65)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[64]= new Array();
 choices[64][0] = "Relaciones base y vistas.";
 choices[64][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[64][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[64][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[64] = choices[64][3];
 units[64] = "60";
 comments[64] = "Id Pregunta: 637. Junta de Extremadura A1 2015";
 preguntaids[64] = 637


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[65]= "66)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[65]= new Array();
 choices[65][0] = "Bases de datos orientadas a filas";
 choices[65][1] = "Bases de datos orientadas a documentos";
 choices[65][2] = "Bases de datos de clave/valor";
 choices[65][3] = "Bases de datos orientadas a objetos";
 answers[65] = choices[65][0];
 units[65] = "73";
 comments[65] = "Id Pregunta: 100. ";
 preguntaids[65] = 100


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[66]= new Array();
 choices[66][0] = "Memcached";
 choices[66][1] = "OpCache";
 choices[66][2] = "WinCache Extension for PHP";
 choices[66][3] = "Alternative PHP Cache";
 answers[66] = choices[66][0];
 units[66] = "65";
 comments[66] = "Id Pregunta: 34. AGE A1 2015";
 preguntaids[66] = 34


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[67]= "68)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[67]= new Array();
 choices[67][0] = "Neo4J ";
 choices[67][1] = "OrientDB ";
 choices[67][2] = "InfoGrid ";
 choices[67][3] = "SimpleDB";
 answers[67] = choices[67][3];
 units[67] = "73";
 comments[67] = "Id Pregunta: 655. ";
 preguntaids[67] = 655


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[68]= "69)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[68]= new Array();
 choices[68][0] = "Incremental, diferencial, completa";
 choices[68][1] = "Completa, incremental, diferencial";
 choices[68][2] = "Completa, diferencial, incremental";
 choices[68][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[68] = choices[68][0];
 units[68] = "53";
 comments[68] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";
 preguntaids[68] = 66


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[69]= new Array();
 choices[69][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[69][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[69][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[69][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[69] = choices[69][0];
 units[69] = "73";
 comments[69] = "Id Pregunta: 656. ";
 preguntaids[69] = 656


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[70]= "71)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[70]= new Array();
 choices[70][0] = "Monol&iacute;tico.";
 choices[70][1] = "Estratificado.";
 choices[70][2] = "Cliente/servidor.";
 choices[70][3] = "Orientado a objetos.";
 answers[70] = choices[70][3];
 units[70] = "56";
 comments[70] = "Id Pregunta: 634. Junta de Extremadura A1 2015";
 preguntaids[70] = 634


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[71]= new Array();
 choices[71][0] = "Varios namenodes y varios datanodes por cluster";
 choices[71][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[71][2] = "1 namenode y varios datanodes por cluster";
 choices[71][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[71] = choices[71][2];
 units[71] = "73";
 comments[71] = "Id Pregunta: 663. ";
 preguntaids[71] = 663


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[72]= "73)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[72]= new Array();
 choices[72][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[72][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[72][2] = "Se basan en sistemas distribuidos";
 choices[72][3] = "Se basan en el modelo de datos relacional";
 answers[72] = choices[72][2];
 units[72] = "73";
 comments[72] = "Id Pregunta: 102. ";
 preguntaids[72] = 102


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[73]= "74)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[73]= new Array();
 choices[73][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[73][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[73][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[73][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[73] = choices[73][0];
 units[73] = "65";
 comments[73] = "Id Pregunta: 625. Junta de Extremadura A1 2015";
 preguntaids[73] = 625


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[74]= "75)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[74]= new Array();
 choices[74][0] = "En sentencias switch para alterar el control de flujo.";
 choices[74][1] = "Para manejar excepciones.";
 choices[74][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[74][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[74] = choices[74][1];
 units[74] = "64";
 comments[74] = "Id Pregunta: 626. Junta de Extremadura A1 2015";
 preguntaids[74] = 626


