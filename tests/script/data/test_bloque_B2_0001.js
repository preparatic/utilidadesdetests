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

//  Id pregunta: 10601 Año de creación de pregunta: 2016
 questions[0]= "1)  Los criptosistemas pueden clasificarse en:";
 choices[0]= new Array();
 choices[0][0] = "Concretos, Estables e Inestables.";
 choices[0][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[0][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[0][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[0] = choices[0][3];
 units[0] = "76";
 comments[0] = "Id Pregunta: 10601. Junta de Extremadura A1 2015";


//  Id pregunta: 10106 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[1]= new Array();
 choices[1][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[1][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[1][2] = "A) y B) son verdaderas";
 choices[1][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[1] = choices[1][2];
 units[1] = "73";
 comments[1] = "Id Pregunta: 10106. ";


//  Id pregunta: 10659 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[2]= new Array();
 choices[2][0] = "Orientaci&oacute;n a objetos";
 choices[2][1] = "MapReduce";
 choices[2][2] = "Pipeline filtering";
 choices[2][3] = "Programaci&oacute;n funcional";
 answers[2] = choices[2][1];
 units[2] = "73";
 comments[2] = "Id Pregunta: 10659. ";


//  Id pregunta: 10013 Año de creación de pregunta: 2016
 questions[3]= "4)  JNDI se usa para el acceso a:";
 choices[3]= new Array();
 choices[3][0] = "Datos de ficheros";
 choices[3][1] = "Sistemas gestores de bases de datos";
 choices[3][2] = "Directorios de nombres";
 choices[3][3] = "Colas de mensajer&iacute;a";
 answers[3] = choices[3][2];
 units[3] = "64";
 comments[3] = "Id Pregunta: 10013. AGE A1 2015";


//  Id pregunta: 10608 Año de creación de pregunta: 2016
 questions[4]= "5)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[4]= new Array();
 choices[4][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[4][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[4][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[4][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[4] = choices[4][1];
 units[4] = "56";
 comments[4] = "Id Pregunta: 10608. Junta de Extremadura A1 2015";


//  Id pregunta: 10081 Año de creación de pregunta: 2016
 questions[5]= "6)  El lenguaje SPARK es un subconjunto de:";
 choices[5]= new Array();
 choices[5][0] = "Java";
 choices[5][1] = "Fortran";
 choices[5][2] = "Ruby";
 choices[5][3] = "Ada";
 answers[5] = choices[5][3];
 units[5] = "73";
 comments[5] = "Id Pregunta: 10081. AGE A1 2015";


//  Id pregunta: 10108 Año de creación de pregunta: 2016
 questions[6]= "7)  Son proyectos de Apache relacionados con Big Data:";
 choices[6]= new Array();
 choices[6][0] = "Hadoop";
 choices[6][1] = "Spark";
 choices[6][2] = "A) y B)";
 choices[6][3] = "Niguno de los anteriores";
 answers[6] = choices[6][2];
 units[6] = "73";
 comments[6] = "Id Pregunta: 10108. ";


//  Id pregunta: 10623 Año de creación de pregunta: 2016
 questions[7]= "8)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[7]= new Array();
 choices[7][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[7][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[7][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[7][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[7] = choices[7][0];
 units[7] = "65";
 comments[7] = "Id Pregunta: 10623. Junta de Extremadura A1 2015";


//  Id pregunta: 10065 Año de creación de pregunta: 2016
 questions[8]= "9)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[8]= new Array();
 choices[8][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[8][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[8][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[8][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[8] = choices[8][2];
 units[8] = "53";
 comments[8] = "Id Pregunta: 10065. AGE A1 2015";


//  Id pregunta: 10107 Año de creación de pregunta: 2016
 questions[9]= "10)  Son bases de datos NoSQL orientadas a objetos:";
 choices[9]= new Array();
 choices[9][0] = "GemStone";
 choices[9][1] = "Zope Object DB";
 choices[9][2] = "Las dos anteriores";
 choices[9][3] = "Solo B)";
 answers[9] = choices[9][2];
 units[9] = "73";
 comments[9] = "Id Pregunta: 10107. ";


//  Id pregunta: 10046 Año de creación de pregunta: 2016
 questions[10]= "11)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[10]= new Array();
 choices[10][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[10][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[10][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[10][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[10] = choices[10][1];
 units[10] = "76";
 comments[10] = "Id Pregunta: 10046. AGE A1 2015";


//  Id pregunta: 10576 Año de creación de pregunta: 2016
 questions[11]= "12)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[11]= new Array();
 choices[11][0] = "PostgreSQL";
 choices[11][1] = "Datawarehouse";
 choices[11][2] = "Snowflake";
 choices[11][3] = "CouchDB";
 answers[11] = choices[11][0];
 units[11] = "61";
 comments[11] = "Id Pregunta: 10576. Tema 61. TAI 2016.";


//  Id pregunta: 10048 Año de creación de pregunta: 2016
 questions[12]= "13)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[12]= new Array();
 choices[12][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[12][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[12][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[12][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[12] = choices[12][3];
 units[12] = "77";
 comments[12] = "Id Pregunta: 10048. AGE A1 2015";


//  Id pregunta: 10023 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[13]= new Array();
 choices[13][0] = "SPARQL";
 choices[13][1] = "UnQL";
 choices[13][2] = "XQUERY";
 choices[13][3] = "RQL";
 answers[13] = choices[13][0];
 units[13] = "74";
 comments[13] = "Id Pregunta: 10023. AGE A1 2015";


//  Id pregunta: 10045 Año de creación de pregunta: 2016
 questions[14]= "15)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[14]= new Array();
 choices[14][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[14][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[14][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[14][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[14] = choices[14][1];
 units[14] = "74";
 comments[14] = "Id Pregunta: 10045. AGE A1 2015";


//  Id pregunta: 10063 Año de creación de pregunta: 2016
 questions[15]= "16)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[15]= new Array();
 choices[15][0] = "Infrastructure as a Service (IaaS)";
 choices[15][1] = "Platform as a Service (PaaS)";
 choices[15][2] = "Software as a Service (SaaS)";
 choices[15][3] = "Application as a Service (AaaS)";
 answers[15] = choices[15][1];
 units[15] = "52";
 comments[15] = "Id Pregunta: 10063. AGE A1 2015";


//  Id pregunta: 10639 Año de creación de pregunta: 2016
 questions[16]= "17)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[16]= new Array();
 choices[16][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[16][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[16][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[16][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[16] = choices[16][2];
 units[16] = "57";
 comments[16] = "Id Pregunta: 10639. Junta de Extremadura A1 2015";


//  Id pregunta: 10094 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[17]= new Array();
 choices[17][0] = "Es un framework de software libre.";
 choices[17][1] = "Es una base de datos NoSQL.";
 choices[17][2] = "Est&aacute; basado en MapReduce.";
 choices[17][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[17] = choices[17][1];
 units[17] = "73";
 comments[17] = "Id Pregunta: 10094. AGE A1 2015";


//  Id pregunta: 10047 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[18]= new Array();
 choices[18][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[18][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[18][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[18][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[18] = choices[18][3];
 units[18] = "78";
 comments[18] = "Id Pregunta: 10047. AGE A1 2015";


//  Id pregunta: 10039 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[19]= new Array();
 choices[19][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[19][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[19][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[19][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[19] = choices[19][2];
 units[19] = "71";
 comments[19] = "Id Pregunta: 10039. AGE A1 2015";


//  Id pregunta: 10101 Año de creación de pregunta: 2016
 questions[20]= "21)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[20]= new Array();
 choices[20][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[20][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[20][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[20][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[20] = choices[20][1];
 units[20] = "73";
 comments[20] = "Id Pregunta: 10101. ";


//  Id pregunta: 10658 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[21]= new Array();
 choices[21][0] = "NoSQL";
 choices[21][1] = "Sistemas de baja latencia";
 choices[21][2] = "MapReduce";
 choices[21][3] = "Business Intelligence";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 10658. ";


//  Id pregunta: 10654 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[22]= new Array();
 choices[22][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[22][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[22][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[22][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[22] = choices[22][0];
 units[22] = "73";
 comments[22] = "Id Pregunta: 10654. ";


//  Id pregunta: 10104 Año de creación de pregunta: 2016
 questions[23]= "24)  Son bases de datos NoSQL:";
 choices[23]= new Array();
 choices[23][0] = "MongoDB y Maria DB";
 choices[23][1] = "HBase y Dynamo";
 choices[23][2] = "MariaDB, Cassandra y BigTable";
 choices[23][3] = "La A) y la C)";
 answers[23] = choices[23][1];
 units[23] = "73";
 comments[23] = "Id Pregunta: 10104. ";


//  Id pregunta: 10036 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[24]= new Array();
 choices[24][0] = "JAXP";
 choices[24][1] = "JNI";
 choices[24][2] = "JNDI";
 choices[24][3] = "JDBC";
 answers[24] = choices[24][1];
 units[24] = "64";
 comments[24] = "Id Pregunta: 10036. AGE A1 2015";


//  Id pregunta: 10109 Año de creación de pregunta: 2016
 questions[25]= "26)  Big Data:";
 choices[25]= new Array();
 choices[25][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[25][1] = "No puede emplearse para tratar datos no estructurados";
 choices[25][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][3];
 units[25] = "73";
 comments[25] = "Id Pregunta: 10109. ";


//  Id pregunta: 10031 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Qu&eacute; es MongoDB?";
 choices[26]= new Array();
 choices[26][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[26][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[26][2] = "Un sistema gestor de base de datos relacional.";
 choices[26][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[26] = choices[26][1];
 units[26] = "73";
 comments[26] = "Id Pregunta: 10031. AGE A1 2015";


//  Id pregunta: 10638 Año de creación de pregunta: 2016
 questions[27]= "28)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[27]= new Array();
 choices[27][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[27][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[27][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[27][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[27] = choices[27][3];
 units[27] = "57";
 comments[27] = "Id Pregunta: 10638. Junta de Extremadura A1 2015";


//  Id pregunta: 10649 Año de creación de pregunta: 2016
 questions[28]= "29)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[28]= new Array();
 choices[28][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[28][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[28][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[28][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[28] = choices[28][0];
 units[28] = "60";
 comments[28] = "Id Pregunta: 10649. Junta de Extremadura A1 2015";


//  Id pregunta: 10611 Año de creación de pregunta: 2016
 questions[29]= "30)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[29]= new Array();
 choices[29][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[29][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[29][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[29][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[29] = choices[29][1];
 units[29] = "63";
 comments[29] = "Id Pregunta: 10611. Junta de Extremadura A1 2015";


//  Id pregunta: 10609 Año de creación de pregunta: 2016
 questions[30]= "31)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[30]= new Array();
 choices[30][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[30][1] = "Clasificaci&oacute;n por cuenta.";
 choices[30][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[30][3] = "Clasificaci&oacute;n por intercambio.";
 answers[30] = choices[30][3];
 units[30] = "56";
 comments[30] = "Id Pregunta: 10609. Junta de Extremadura A1 2015";


//  Id pregunta: 10028 Año de creación de pregunta: 2016
 questions[31]= "32)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[31]= new Array();
 choices[31][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[31][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[31][2] = "Crea una copia del proceso que hace la llamada.";
 choices[31][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[31] = choices[31][2];
 units[31] = "57";
 comments[31] = "Id Pregunta: 10028. AGE A1 2015";


//  Id pregunta: 10633 Año de creación de pregunta: 2016
 questions[32]= "33)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[32]= new Array();
 choices[32][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[32][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[32][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[32][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[32] = choices[32][3];
 units[32] = "56";
 comments[32] = "Id Pregunta: 10633. Junta de Extremadura A1 2015";


//  Id pregunta: 10636 Año de creación de pregunta: 2016
 questions[33]= "34)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[33]= new Array();
 choices[33][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[33][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[33][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[33][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[33] = choices[33][2];
 units[33] = "57";
 comments[33] = "Id Pregunta: 10636. Junta de Extremadura A1 2015";


//  Id pregunta: 10641 Año de creación de pregunta: 2016
 questions[34]= "35)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[34]= new Array();
 choices[34][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[34][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[34][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[34][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[34] = choices[34][1];
 units[34] = "58";
 comments[34] = "Id Pregunta: 10641. Junta de Extremadura A1 2015";


//  Id pregunta: 10030 Año de creación de pregunta: 2016
 questions[35]= "36)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[35]= new Array();
 choices[35][0] = "SMB3";
 choices[35][1] = "AFP";
 choices[35][2] = "NFS";
 choices[35][3] = "FTP";
 answers[35] = choices[35][0];
 units[35] = "59";
 comments[35] = "Id Pregunta: 10030. AGE A1 2015";


//  Id pregunta: 10061 Año de creación de pregunta: 2016
 questions[36]= "37)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Lollipop";
 choices[36][1] = "Jelly Bean";
 choices[36][2] = "Marshmallow";
 choices[36][3] = "KitKat";
 answers[36] = choices[36][2];
 units[36] = "59";
 comments[36] = "Id Pregunta: 10061. AGE A1 2015";


//  Id pregunta: 10653 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[37]= new Array();
 choices[37][0] = "Neo4J ";
 choices[37][1] = "OrientDB ";
 choices[37][2] = "InfoGrid ";
 choices[37][3] = "SimpleDB";
 answers[37] = choices[37][3];
 units[37] = "73";
 comments[37] = "Id Pregunta: 10653. ";


//  Id pregunta: 10610 Año de creación de pregunta: 2016
 questions[38]= "39)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[38]= new Array();
 choices[38][0] = "GROUP BY.";
 choices[38][1] = "COUNT.";
 choices[38][2] = "WHERE.";
 choices[38][3] = "DISTINCT.";
 answers[38] = choices[38][0];
 units[38] = "60";
 comments[38] = "Id Pregunta: 10610. Junta de Extremadura A1 2015";


//  Id pregunta: 10004 Año de creación de pregunta: 2016
 questions[39]= "40)  Un wireframe es:";
 choices[39]= new Array();
 choices[39][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[39][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[39][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[39][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[39] = choices[39][3];
 units[39] = "62";
 comments[39] = "Id Pregunta: 10004. AGE A1 2015";


//  Id pregunta: 10093 Año de creación de pregunta: 2016
 questions[40]= "41)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[40]= new Array();
 choices[40][0] = "Almacenamiento orientado a columnas";
 choices[40][1] = "Framework MapReduce";
 choices[40][2] = "OLTP";
 choices[40][3] = "Bases de datos clave-valor";
 answers[40] = choices[40][2];
 units[40] = "73";
 comments[40] = "Id Pregunta: 10093. AGE A1 2015";


//  Id pregunta: 10037 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[41]= new Array();
 choices[41][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[41][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[41][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[41][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[41] = choices[41][3];
 units[41] = "66";
 comments[41] = "Id Pregunta: 10037. AGE A1 2015";


//  Id pregunta: 10602 Año de creación de pregunta: 2016
 questions[42]= "43)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[42]= new Array();
 choices[42][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[42][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[42][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[42][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[42] = choices[42][2];
 units[42] = "76";
 comments[42] = "Id Pregunta: 10602. Junta de Extremadura A1 2015";


//  Id pregunta: 10038 Año de creación de pregunta: 2016
 questions[43]= "44)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[43]= new Array();
 choices[43][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[43][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[43][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[43][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[43] = choices[43][3];
 units[43] = "62";
 comments[43] = "Id Pregunta: 10038. AGE A1 2015";


//  Id pregunta: 10635 Año de creación de pregunta: 2016
 questions[44]= "45)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[44]= new Array();
 choices[44][0] = "Relaciones base y vistas.";
 choices[44][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[44][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[44][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[44] = choices[44][3];
 units[44] = "60";
 comments[44] = "Id Pregunta: 10635. Junta de Extremadura A1 2015";


//  Id pregunta: 10637 Año de creación de pregunta: 2016
 questions[45]= "46)  En el sistema operativo Unix/Linux, el comando id:";
 choices[45]= new Array();
 choices[45][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[45][1] = "El comando id no existe.";
 choices[45][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[45][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[45] = choices[45][0];
 units[45] = "57";
 comments[45] = "Id Pregunta: 10637. Junta de Extremadura A1 2015";


//  Id pregunta: 10096 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "VMware ESX";
 choices[46][1] = "XenServer";
 choices[46][2] = "Alfresco";
 choices[46][3] = "Microsoft Hyper-V";
 answers[46] = choices[46][2];
 units[46] = "54";
 comments[46] = "Id Pregunta: 10096. AGE A1 2015";


//  Id pregunta: 10012 Año de creación de pregunta: 2016
 questions[47]= "48)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[47]= new Array();
 choices[47][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[47][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[47][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[47][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[47] = choices[47][0];
 units[47] = "62";
 comments[47] = "Id Pregunta: 10012. AGE A1 2015";


//  Id pregunta: 10049 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Qu&eacute; facilita un ORM?";
 choices[48]= new Array();
 choices[48][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[48][1] = "Conversi&oacute;n de objetos a documentos";
 choices[48][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[48][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[48] = choices[48][0];
 units[48] = "62";
 comments[48] = "Id Pregunta: 10049. AGE A1 2015";


//  Id pregunta: 10640 Año de creación de pregunta: 2016
 questions[49]= "50)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[49]= new Array();
 choices[49][0] = "Fat y Ntfs.";
 choices[49][1] = "Extfat y Fat.";
 choices[49][2] = "Fat y Nfst.";
 choices[49][3] = "ext2fs y Ntfs.";
 answers[49] = choices[49][0];
 units[49] = "58";
 comments[49] = "Id Pregunta: 10640. Junta de Extremadura A1 2015";


//  Id pregunta: 10034 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[50]= new Array();
 choices[50][0] = "Memcached";
 choices[50][1] = "OpCache";
 choices[50][2] = "WinCache Extension for PHP";
 choices[50][3] = "Alternative PHP Cache";
 answers[50] = choices[50][0];
 units[50] = "65";
 comments[50] = "Id Pregunta: 10034. AGE A1 2015";


//  Id pregunta: 10044 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[51][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[51][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[51][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[51] = choices[51][1];
 units[51] = "60";
 comments[51] = "Id Pregunta: 10044. AGE A1 2015";


//  Id pregunta: 10068 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[52]= new Array();
 choices[52][0] = "Data Mining (miner&iacute;a de datos)";
 choices[52][1] = "Business Intelligence (inteligencia de negocio)";
 choices[52][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[52][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[52] = choices[52][1];
 units[52] = "72";
 comments[52] = "Id Pregunta: 10068. AGE A1 2015";


//  Id pregunta: 10066 Año de creación de pregunta: 2016
 questions[53]= "54)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "Incremental, diferencial, completa";
 choices[53][1] = "Completa, incremental, diferencial";
 choices[53][2] = "Completa, diferencial, incremental";
 choices[53][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[53] = choices[53][0];
 units[53] = "53";
 comments[53] = "Id Pregunta: 10066. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";


//  Id pregunta: 10100 Año de creación de pregunta: 2016
 questions[54]= "55)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[54]= new Array();
 choices[54][0] = "Bases de datos orientadas a filas";
 choices[54][1] = "Bases de datos orientadas a documentos";
 choices[54][2] = "Bases de datos de clave/valor";
 choices[54][3] = "Bases de datos orientadas a objetos";
 answers[54] = choices[54][0];
 units[54] = "73";
 comments[54] = "Id Pregunta: 10100. ";


//  Id pregunta: 10575 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[55]= new Array();
 choices[55][0] = "MySQL";
 choices[55][1] = "SQLite";
 choices[55][2] = "Zope";
 choices[55][3] = "MariaDB";
 answers[55] = choices[55][2];
 units[55] = "61";
 comments[55] = "Id Pregunta: 10575. Tema 61. TAI 2016.";


//  Id pregunta: 10103 Año de creación de pregunta: 2016
 questions[56]= "57)  En qu&eacute; consiste el principio BASE:";
 choices[56]= new Array();
 choices[56][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[56][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[56][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[56][3] = "Todas las anteriores son falsas";
 answers[56] = choices[56][3];
 units[56] = "73";
 comments[56] = "Id Pregunta: 10103. ";


//  Id pregunta: 10035 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Qu&eacute; es Java Web Start?";
 choices[57]= new Array();
 choices[57][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[57][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[57][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[57][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[57] = choices[57][3];
 units[57] = "64";
 comments[57] = "Id Pregunta: 10035. AGE A1 2015";


//  Id pregunta: 10655 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[58]= new Array();
 choices[58][0] = "Yarn";
 choices[58][1] = "Flume";
 choices[58][2] = "Hive";
 choices[58][3] = "BizAgi";
 answers[58] = choices[58][3];
 units[58] = "73";
 comments[58] = "Id Pregunta: 10655. ";


//  Id pregunta: 10011 Año de creación de pregunta: 2016
 questions[59]= "60)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[59]= new Array();
 choices[59][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[59][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[59][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[59][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[59] = choices[59][1];
 units[59] = "64";
 comments[59] = "Id Pregunta: 10011. AGE A1 2015";


//  Id pregunta: 10612 Año de creación de pregunta: 2016
 questions[60]= "61)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[60]= new Array();
 choices[60][0] = "Intersecci&oacute;n.";
 choices[60][1] = "Uni&oacute;n.";
 choices[60][2] = "Restricci&oacute;n.";
 choices[60][3] = "Diferencia.";
 answers[60] = choices[60][0];
 units[60] = "60";
 comments[60] = "Id Pregunta: 10612. Junta de Extremadura A1 2015";


//  Id pregunta: 10624 Año de creación de pregunta: 2016
 questions[61]= "62)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[61]= new Array();
 choices[61][0] = "En sentencias switch para alterar el control de flujo.";
 choices[61][1] = "Para manejar excepciones.";
 choices[61][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[61][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[61] = choices[61][1];
 units[61] = "64";
 comments[61] = "Id Pregunta: 10624. Junta de Extremadura A1 2015";


//  Id pregunta: 10033 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[62]= new Array();
 choices[62][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[62][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[62][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[62][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[62] = choices[62][1];
 units[62] = "63";
 comments[62] = "Id Pregunta: 10033. AGE A1 2015";


//  Id pregunta: 10661 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[63]= new Array();
 choices[63][0] = "Varios namenodes y varios datanodes por cluster";
 choices[63][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[63][2] = "1 namenode y varios datanodes por cluster";
 choices[63][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[63] = choices[63][2];
 units[63] = "73";
 comments[63] = "Id Pregunta: 10661. ";


//  Id pregunta: 10622 Año de creación de pregunta: 2016
 questions[64]= "65)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[64]= new Array();
 choices[64][0] = "Entradas (entities).";
 choices[64][1] = "Atributos (attribs).";
 choices[64][2] = "M&oacute;dulos (modules).";
 choices[64][3] = "Objetos (objects).";
 answers[64] = choices[64][0];
 units[64] = "74";
 comments[64] = "Id Pregunta: 10622. Junta de Extremadura A1 2015";


//  Id pregunta: 10064 Año de creación de pregunta: 2016
 questions[65]= "66)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[65]= new Array();
 choices[65][0] = "Windows Phone";
 choices[65][1] = "Blackberry";
 choices[65][2] = "iOS";
 choices[65][3] = "Android";
 answers[65] = choices[65][3];
 units[65] = "59";
 comments[65] = "Id Pregunta: 10064. AGE A1 2015";


//  Id pregunta: 10025 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[66]= new Array();
 choices[66][0] = "SessionBean";
 choices[66][1] = "JavaBean";
 choices[66][2] = "MBeans";
 choices[66][3] = "MessageDrivenBean";
 answers[66] = choices[66][2];
 units[66] = "64";
 comments[66] = "Id Pregunta: 10025. AGE A1 2015";


//  Id pregunta: 10015 Año de creación de pregunta: 2016
 questions[67]= "68)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[67]= new Array();
 choices[67][0] = "0";
 choices[67][1] = "1";
 choices[67][2] = "Tantos como peticiones concurrentes tenga.";
 choices[67][3] = "Tantos como le permita la memoria de la JVM.";
 answers[67] = choices[67][1];
 units[67] = "64";
 comments[67] = "Id Pregunta: 10015. AGE A1 2015";


//  Id pregunta: 10079 Año de creación de pregunta: 2016
 questions[68]= "69)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[68]= new Array();
 choices[68][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[68][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[68][2] = "Las Inspecciones Generales de los Servicios";
 choices[68][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[68] = choices[68][1];
 units[68] = "75";
 comments[68] = "Id Pregunta: 10079. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10102 Año de creación de pregunta: 2016
 questions[69]= "70)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[69]= new Array();
 choices[69][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[69][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[69][2] = "Se basan en sistemas distribuidos";
 choices[69][3] = "Se basan en el modelo de datos relacional";
 answers[69] = choices[69][2];
 units[69] = "73";
 comments[69] = "Id Pregunta: 10102. ";


//  Id pregunta: 10070 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[70]= new Array();
 choices[70][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[70][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[70][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[70][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[70] = choices[70][0];
 units[70] = "75";
 comments[70] = "Id Pregunta: 10070. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10657 Año de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; es el machine learning?";
 choices[71]= new Array();
 choices[71][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[71][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[71][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[71][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[71] = choices[71][0];
 units[71] = "73";
 comments[71] = "Id Pregunta: 10657. ";


//  Id pregunta: 10660 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[72]= new Array();
 choices[72][0] = "Avro";
 choices[72][1] = "Sqoop";
 choices[72][2] = "UIMA";
 choices[72][3] = "Jaql";
 answers[72] = choices[72][1];
 units[72] = "73";
 comments[72] = "Id Pregunta: 10660. ";


//  Id pregunta: 10632 Año de creación de pregunta: 2016
 questions[73]= "74)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[73]= new Array();
 choices[73][0] = "Monol&iacute;tico.";
 choices[73][1] = "Estratificado.";
 choices[73][2] = "Cliente/servidor.";
 choices[73][3] = "Orientado a objetos.";
 answers[73] = choices[73][3];
 units[73] = "56";
 comments[73] = "Id Pregunta: 10632. Junta de Extremadura A1 2015";


//  Id pregunta: 10652 Año de creación de pregunta: 2016
 questions[74]= "75)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[74]= new Array();
 choices[74][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[74][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[74][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[74][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[74] = choices[74][2];
 units[74] = "73";
 comments[74] = "Id Pregunta: 10652. ";


