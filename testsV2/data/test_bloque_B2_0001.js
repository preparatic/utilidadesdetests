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

//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[0]= new Array();
 choices[0][0] = "Neo4J ";
 choices[0][1] = "OrientDB ";
 choices[0][2] = "InfoGrid ";
 choices[0][3] = "SimpleDB";
 answers[0] = choices[0][3];
 units[0] = "73";
 comments[0] = "Id Pregunta: 653. ";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[1]= new Array();
 choices[1][0] = "Memcached";
 choices[1][1] = "OpCache";
 choices[1][2] = "WinCache Extension for PHP";
 choices[1][3] = "Alternative PHP Cache";
 answers[1] = choices[1][0];
 units[1] = "65";
 comments[1] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[2]= new Array();
 choices[2][0] = "SessionBean";
 choices[2][1] = "JavaBean";
 choices[2][2] = "MBeans";
 choices[2][3] = "MessageDrivenBean";
 answers[2] = choices[2][2];
 units[2] = "64";
 comments[2] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[3]= "4)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[3]= new Array();
 choices[3][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[3][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[3][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[3][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[3] = choices[3][2];
 units[3] = "73";
 comments[3] = "Id Pregunta: 652. ";


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[4]= "5)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[4]= new Array();
 choices[4][0] = "Bases de datos orientadas a filas";
 choices[4][1] = "Bases de datos orientadas a documentos";
 choices[4][2] = "Bases de datos de clave/valor";
 choices[4][3] = "Bases de datos orientadas a objetos";
 answers[4] = choices[4][0];
 units[4] = "73";
 comments[4] = "Id Pregunta: 100. ";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[5]= "6)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[5]= new Array();
 choices[5][0] = "0";
 choices[5][1] = "1";
 choices[5][2] = "Tantos como peticiones concurrentes tenga.";
 choices[5][3] = "Tantos como le permita la memoria de la JVM.";
 answers[5] = choices[5][1];
 units[5] = "64";
 comments[5] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[6]= new Array();
 choices[6][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[6][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[6][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[6][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[6] = choices[6][0];
 units[6] = "75";
 comments[6] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[7]= "8)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[7]= new Array();
 choices[7][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[7][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[7][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[7][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[7] = choices[7][2];
 units[7] = "57";
 comments[7] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[8]= "9)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[8]= new Array();
 choices[8][0] = "Gran volumen de informaci&oacute;n";
 choices[8][1] = "Gran variedad de datos";
 choices[8][2] = "Se analizan datos a gran velocidad";
 choices[8][3] = "Todas las anteriores son verdaderas";
 answers[8] = choices[8][3];
 units[8] = "73";
 comments[8] = "Id Pregunta: 105. ";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[9]= new Array();
 choices[9][0] = "Varios namenodes y varios datanodes por cluster";
 choices[9][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[9][2] = "1 namenode y varios datanodes por cluster";
 choices[9][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[9] = choices[9][2];
 units[9] = "73";
 comments[9] = "Id Pregunta: 661. ";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[10]= new Array();
 choices[10][0] = "Cassandra";
 choices[10][1] = "Riak";
 choices[10][2] = "Avro";
 choices[10][3] = "Zookeeper";
 answers[10] = choices[10][3];
 units[10] = "73";
 comments[10] = "Id Pregunta: 656. ";


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; es MongoDB?";
 choices[11]= new Array();
 choices[11][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[11][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[11][2] = "Un sistema gestor de base de datos relacional.";
 choices[11][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[11] = choices[11][1];
 units[11] = "73";
 comments[11] = "Id Pregunta: 31. AGE A1 2015";


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[12]= "13)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[12]= new Array();
 choices[12][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[12][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[12][2] = "A partir del 1 de enero de 2015";
 choices[12][3] = "A partir del 1 de julio de 2016";
 answers[12] = choices[12][1];
 units[12] = "77";
 comments[12] = "Id Pregunta: 690. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[13]= new Array();
 choices[13][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[13][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[13][2] = "A) y B) son verdaderas";
 choices[13][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[13] = choices[13][2];
 units[13] = "73";
 comments[13] = "Id Pregunta: 106. ";


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[14]= "15)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[14]= new Array();
 choices[14][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[14][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[14][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[14][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[14] = choices[14][1];
 units[14] = "56";
 comments[14] = "Id Pregunta: 608. Junta de Extremadura A1 2015";


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[15]= "16)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[15]= new Array();
 choices[15][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[15][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[15][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[15][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[15] = choices[15][2];
 units[15] = "53";
 comments[15] = "Id Pregunta: 65. AGE A1 2015";


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[16]= new Array();
 choices[16][0] = "NoSQL";
 choices[16][1] = "Sistemas de baja latencia";
 choices[16][2] = "MapReduce";
 choices[16][3] = "Business Intelligence";
 answers[16] = choices[16][1];
 units[16] = "73";
 comments[16] = "Id Pregunta: 658. ";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[17]= "18)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[17]= new Array();
 choices[17][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[17][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[17][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[17][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[17] = choices[17][1];
 units[17] = "63";
 comments[17] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[18]= "19)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[18]= new Array();
 choices[18][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[18][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[18][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[18][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[18] = choices[18][1];
 units[18] = "58";
 comments[18] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[19]= "20)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[19]= new Array();
 choices[19][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[19][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[19][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[19][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[19] = choices[19][1];
 units[19] = "74";
 comments[19] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[20]= "21)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[20]= new Array();
 choices[20][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[20][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[20][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[20][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[20] = choices[20][1];
 units[20] = "73";
 comments[20] = "Id Pregunta: 101. ";


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[21]= "22)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[21]= new Array();
 choices[21][0] = "6 TB.";
 choices[21][1] = "5 TB.";
 choices[21][2] = "7 TB.";
 choices[21][3] = "3 TB.";
 answers[21] = choices[21][1];
 units[21] = "53";
 comments[21] = "Id Pregunta: 852. Xunta de Galicia 2015";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;Qu&eacute; facilita un ORM?";
 choices[22]= new Array();
 choices[22][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[22][1] = "Conversi&oacute;n de objetos a documentos";
 choices[22][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[22][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[22] = choices[22][0];
 units[22] = "62";
 comments[22] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[23]= new Array();
 choices[23][0] = "B&aacute;sico, medio y alto";
 choices[23][1] = "D&eacute;bil y fuerte";
 choices[23][2] = "Bajo, medio y alto";
 choices[23][3] = "Bajo, sustancial y alto";
 answers[23] = choices[23][3];
 units[23] = "77";
 comments[23] = "Id Pregunta: 684. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[24]= "25)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[24]= new Array();
 choices[24][0] = "Entradas (entities).";
 choices[24][1] = "Atributos (attribs).";
 choices[24][2] = "M&oacute;dulos (modules).";
 choices[24][3] = "Objetos (objects).";
 answers[24] = choices[24][0];
 units[24] = "74";
 comments[24] = "Id Pregunta: 622. Junta de Extremadura A1 2015";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[25]= "26)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[25]= new Array();
 choices[25][0] = "Fat y Ntfs.";
 choices[25][1] = "Extfat y Fat.";
 choices[25][2] = "Fat y Nfst.";
 choices[25][3] = "ext2fs y Ntfs.";
 answers[25] = choices[25][0];
 units[25] = "58";
 comments[25] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[26]= "27)  Big Data:";
 choices[26]= new Array();
 choices[26][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[26][1] = "No puede emplearse para tratar datos no estructurados";
 choices[26][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][3];
 units[26] = "73";
 comments[26] = "Id Pregunta: 109. ";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[27]= "28)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[27]= new Array();
 choices[27][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[27][1] = "1 de enero de 2015";
 choices[27][2] = "1 de enero de 2016";
 choices[27][3] = "1 de julio de 2016";
 answers[27] = choices[27][3];
 units[27] = "77";
 comments[27] = "Id Pregunta: 689. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[28]= "29)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[28]= new Array();
 choices[28][0] = "En sentencias switch para alterar el control de flujo.";
 choices[28][1] = "Para manejar excepciones.";
 choices[28][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[28][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[28] = choices[28][1];
 units[28] = "64";
 comments[28] = "Id Pregunta: 624. Junta de Extremadura A1 2015";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[29]= "30)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[29]= new Array();
 choices[29][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[29][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[29][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[29][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[29] = choices[29][3];
 units[29] = "77";
 comments[29] = "Id Pregunta: 686. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[30]= new Array();
 choices[30][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[30][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[30][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[30][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[30] = choices[30][3];
 units[30] = "66";
 comments[30] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[31]= "32)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[31]= new Array();
 choices[31][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[31][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[31][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[31][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[31] = choices[31][2];
 units[31] = "76";
 comments[31] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[32]= new Array();
 choices[32][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[32][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[32][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[32][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[32] = choices[32][2];
 units[32] = "77";
 comments[32] = "Id Pregunta: 691. Anexo I del Reglamento 910/2014";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[33]= "34)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[33]= new Array();
 choices[33][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[33][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[33][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[33][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[33] = choices[33][1];
 units[33] = "76";
 comments[33] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[34]= new Array();
 choices[34][0] = "Backup full.";
 choices[34][1] = "Backup diferencial.";
 choices[34][2] = "Backup incremental.";
 choices[34][3] = "Backup deduplicado.";
 answers[34] = choices[34][3];
 units[34] = "53";
 comments[34] = "Id Pregunta: 850. Xunta de Galicia 2015";


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[35]= new Array();
 choices[35][0] = "JAXP";
 choices[35][1] = "JNI";
 choices[35][2] = "JNDI";
 choices[35][3] = "JDBC";
 answers[35] = choices[35][1];
 units[35] = "64";
 comments[35] = "Id Pregunta: 36. AGE A1 2015";


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[36]= "37)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[36]= new Array();
 choices[36][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[36][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[36][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[36][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[36] = choices[36][0];
 units[36] = "60";
 comments[36] = "Id Pregunta: 649. Junta de Extremadura A1 2015";


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[37]= new Array();
 choices[37][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[37][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[37][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[37][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[37] = choices[37][0];
 units[37] = "77";
 comments[37] = "Id Pregunta: 683. Art&iacute;culo 2 del Reglamento 910/2014";


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[38]= new Array();
 choices[38][0] = "Data Mining (miner&iacute;a de datos)";
 choices[38][1] = "Business Intelligence (inteligencia de negocio)";
 choices[38][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[38][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[38] = choices[38][1];
 units[38] = "72";
 comments[38] = "Id Pregunta: 68. AGE A1 2015";


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[39]= "40)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[39]= new Array();
 choices[39][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[39][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[39][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[39][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[39] = choices[39][3];
 units[39] = "62";
 comments[39] = "Id Pregunta: 38. AGE A1 2015";


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[40]= "41)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[40]= new Array();
 choices[40][0] = "Directiva 95/46/CE";
 choices[40][1] = "Directiva 1999/93/CE";
 choices[40][2] = "Directiva 2000/31/CE";
 choices[40][3] = "Directiva 2003/98/CE";
 answers[40] = choices[40][1];
 units[40] = "77";
 comments[40] = "Id Pregunta: 682. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[41]= new Array();
 choices[41][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[41][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[41][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[41][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[41] = choices[41][0];
 units[41] = "73";
 comments[41] = "Id Pregunta: 654. ";


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[42]= "43)  En qu&eacute; consiste el principio BASE:";
 choices[42]= new Array();
 choices[42][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[42][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[42][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[42][3] = "Todas las anteriores son falsas";
 answers[42] = choices[42][3];
 units[42] = "73";
 comments[42] = "Id Pregunta: 103. ";


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[43]= "44)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[43]= new Array();
 choices[43][0] = "Relaciones base y vistas.";
 choices[43][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[43][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[43][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[43] = choices[43][3];
 units[43] = "60";
 comments[43] = "Id Pregunta: 635. Junta de Extremadura A1 2015";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[44]= "45)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[44]= new Array();
 choices[44][0] = "Infrastructure as a Service (IaaS)";
 choices[44][1] = "Platform as a Service (PaaS)";
 choices[44][2] = "Software as a Service (SaaS)";
 choices[44][3] = "Application as a Service (AaaS)";
 answers[44] = choices[44][1];
 units[44] = "52";
 comments[44] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[45]= "46)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[45]= new Array();
 choices[45][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[45][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[45][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[45][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[45] = choices[45][3];
 units[45] = "56";
 comments[45] = "Id Pregunta: 633. Junta de Extremadura A1 2015";


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[46]= "47)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[46]= new Array();
 choices[46][0] = "Intersecci&oacute;n.";
 choices[46][1] = "Uni&oacute;n.";
 choices[46][2] = "Restricci&oacute;n.";
 choices[46][3] = "Diferencia.";
 answers[46] = choices[46][0];
 units[46] = "60";
 comments[46] = "Id Pregunta: 612. Junta de Extremadura A1 2015";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qu&eacute; es el machine learning?";
 choices[47]= new Array();
 choices[47][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[47][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[47][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[47][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[47] = choices[47][0];
 units[47] = "73";
 comments[47] = "Id Pregunta: 657. ";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[48]= "49)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[48]= new Array();
 choices[48][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[48][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[48][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[48][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[48] = choices[48][1];
 units[48] = "63";
 comments[48] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[49]= new Array();
 choices[49][0] = "SPARQL";
 choices[49][1] = "UnQL";
 choices[49][2] = "XQUERY";
 choices[49][3] = "RQL";
 answers[49] = choices[49][0];
 units[49] = "74";
 comments[49] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[50]= "51)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[50]= new Array();
 choices[50][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[50][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[50][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[50][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[50] = choices[50][3];
 units[50] = "57";
 comments[50] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


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


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[52]= "53)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[52]= new Array();
 choices[52][0] = "6 TB.";
 choices[52][1] = "8 TB.";
 choices[52][2] = "7 TB.";
 choices[52][3] = "4 TB.";
 answers[52] = choices[52][3];
 units[52] = "53";
 comments[52] = "Id Pregunta: 851. Xunta de Galicia 2015";


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[53]= "54)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[53]= new Array();
 choices[53][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[53][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[53][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[53][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[53] = choices[53][0];
 units[53] = "65";
 comments[53] = "Id Pregunta: 623. Junta de Extremadura A1 2015";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[54]= "55)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[54]= new Array();
 choices[54][0] = "GROUP BY.";
 choices[54][1] = "COUNT.";
 choices[54][2] = "WHERE.";
 choices[54][3] = "DISTINCT.";
 answers[54] = choices[54][0];
 units[54] = "60";
 comments[54] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[55]= "56)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[55]= new Array();
 choices[55][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[55][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[55][2] = "Crea una copia del proceso que hace la llamada.";
 choices[55][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[55] = choices[55][2];
 units[55] = "57";
 comments[55] = "Id Pregunta: 28. AGE A1 2015";


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[56]= new Array();
 choices[56][0] = "MySQL";
 choices[56][1] = "SQLite";
 choices[56][2] = "Zope";
 choices[56][3] = "MariaDB";
 answers[56] = choices[56][2];
 units[56] = "61";
 comments[56] = "Id Pregunta: 575. Tema 61. TAI 2016.";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[57]= new Array();
 choices[57][0] = "Es un framework de software libre.";
 choices[57][1] = "Es una base de datos NoSQL.";
 choices[57][2] = "Est&aacute; basado en MapReduce.";
 choices[57][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[57] = choices[57][1];
 units[57] = "73";
 comments[57] = "Id Pregunta: 94. AGE A1 2015";


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


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[59]= "60)  Son proyectos de Apache relacionados con Big Data:";
 choices[59]= new Array();
 choices[59][0] = "Hadoop";
 choices[59][1] = "Spark";
 choices[59][2] = "A) y B)";
 choices[59][3] = "Niguno de los anteriores";
 answers[59] = choices[59][2];
 units[59] = "73";
 comments[59] = "Id Pregunta: 108. ";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Qu&eacute; es Java Web Start?";
 choices[60]= new Array();
 choices[60][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[60][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[60][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[60][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[60] = choices[60][3];
 units[60] = "64";
 comments[60] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[61]= "62)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[61]= new Array();
 choices[61][0] = "Al menos cada 12 meses";
 choices[61][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[61][2] = "Al menos cada 18 meses";
 choices[61][3] = "Al menos cada 24 meses";
 answers[61] = choices[61][3];
 units[61] = "77";
 comments[61] = "Id Pregunta: 685. Art&iacute;culo 20 del Reglamento 910/2014";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[62]= new Array();
 choices[62][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[62][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[62][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[62][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[62] = choices[62][2];
 units[62] = "71";
 comments[62] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[63]= new Array();
 choices[63][0] = "Yarn";
 choices[63][1] = "Flume";
 choices[63][2] = "Hive";
 choices[63][3] = "BizAgi";
 answers[63] = choices[63][3];
 units[63] = "73";
 comments[63] = "Id Pregunta: 655. ";


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[64]= "65)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[64]= new Array();
 choices[64][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[64][1] = "Clasificaci&oacute;n por cuenta.";
 choices[64][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[64][3] = "Clasificaci&oacute;n por intercambio.";
 answers[64] = choices[64][3];
 units[64] = "56";
 comments[64] = "Id Pregunta: 609. Junta de Extremadura A1 2015";


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[65]= "66)  Los criptosistemas pueden clasificarse en:";
 choices[65]= new Array();
 choices[65][0] = "Concretos, Estables e Inestables.";
 choices[65][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[65][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[65][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[65] = choices[65][3];
 units[65] = "76";
 comments[65] = "Id Pregunta: 601. Junta de Extremadura A1 2015";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[66]= "67)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Almacenamiento orientado a columnas";
 choices[66][1] = "Framework MapReduce";
 choices[66][2] = "OLTP";
 choices[66][3] = "Bases de datos clave-valor";
 answers[66] = choices[66][2];
 units[66] = "73";
 comments[66] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[67]= "68)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[67]= new Array();
 choices[67][0] = "VMware ESX";
 choices[67][1] = "XenServer";
 choices[67][2] = "Alfresco";
 choices[67][3] = "Microsoft Hyper-V";
 answers[67] = choices[67][2];
 units[67] = "54";
 comments[67] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[68]= "69)  El lenguaje SPARK es un subconjunto de:";
 choices[68]= new Array();
 choices[68][0] = "Java";
 choices[68][1] = "Fortran";
 choices[68][2] = "Ruby";
 choices[68][3] = "Ada";
 answers[68] = choices[68][3];
 units[68] = "73";
 comments[68] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[69]= new Array();
 choices[69][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[69][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[69][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[69][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[69] = choices[69][1];
 units[69] = "77";
 comments[69] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[70]= new Array();
 choices[70][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[70][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[70][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[70][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[70] = choices[70][1];
 units[70] = "78";
 comments[70] = "Id Pregunta: 50. AGE A1 2015";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[71]= "72)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[71]= new Array();
 choices[71][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[71][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[71][2] = "Las Inspecciones Generales de los Servicios";
 choices[71][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[71] = choices[71][1];
 units[71] = "75";
 comments[71] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[72]= "73)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[72]= new Array();
 choices[72][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[72][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[72][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[72][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[72] = choices[72][3];
 units[72] = "77";
 comments[72] = "Id Pregunta: 48. AGE A1 2015";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[73]= "74)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[73]= new Array();
 choices[73][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[73][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[73][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[73][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[73] = choices[73][1];
 units[73] = "64";
 comments[73] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[74]= "75)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[74]= new Array();
 choices[74][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[74][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[74][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[74][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[74] = choices[74][1];
 units[74] = "77";
 comments[74] = "Id Pregunta: 687. Art&iacute;culo 26 del Reglamento 910/2014";


