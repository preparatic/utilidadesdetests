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

//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[0]= "1)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "VMware ESX";
 choices[0][1] = "XenServer";
 choices[0][2] = "Alfresco";
 choices[0][3] = "Microsoft Hyper-V";
 answers[0] = choices[0][2];
 units[0] = "54";
 comments[0] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[1]= "2)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[1]= new Array();
 choices[1][0] = "PostgreSQL";
 choices[1][1] = "Datawarehouse";
 choices[1][2] = "Snowflake";
 choices[1][3] = "CouchDB";
 answers[1] = choices[1][0];
 units[1] = "61";
 comments[1] = "Id Pregunta: 578. Tema 61. TAI 2016.";


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[2]= new Array();
 choices[2][0] = "Cassandra";
 choices[2][1] = "Riak";
 choices[2][2] = "Avro";
 choices[2][3] = "Zookeeper";
 answers[2] = choices[2][3];
 units[2] = "73";
 comments[2] = "Id Pregunta: 658. ";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[3]= new Array();
 choices[3][0] = "Varios namenodes y varios datanodes por cluster";
 choices[3][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[3][2] = "1 namenode y varios datanodes por cluster";
 choices[3][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[3] = choices[3][2];
 units[3] = "73";
 comments[3] = "Id Pregunta: 663. ";


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[4]= "5)  En qu&eacute; consiste el principio BASE:";
 choices[4]= new Array();
 choices[4][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[4][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[4][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[4][3] = "Todas las anteriores son falsas";
 answers[4] = choices[4][3];
 units[4] = "73";
 comments[4] = "Id Pregunta: 103. ";


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[5]= "6)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[5]= new Array();
 choices[5][0] = "Fat y Ntfs.";
 choices[5][1] = "Extfat y Fat.";
 choices[5][2] = "Fat y Nfst.";
 choices[5][3] = "ext2fs y Ntfs.";
 answers[5] = choices[5][0];
 units[5] = "58";
 comments[5] = "Id Pregunta: 642. Junta de Extremadura A1 2015";


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[6]= new Array();
 choices[6][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[6][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[6][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[6][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[6] = choices[6][1];
 units[6] = "77";
 comments[6] = "Id Pregunta: 694. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[7]= new Array();
 choices[7][0] = "Avro";
 choices[7][1] = "Sqoop";
 choices[7][2] = "UIMA";
 choices[7][3] = "Jaql";
 answers[7] = choices[7][1];
 units[7] = "73";
 comments[7] = "Id Pregunta: 662. ";


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Qu&eacute; es el machine learning?";
 choices[8]= new Array();
 choices[8][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[8][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[8][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[8][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[8] = choices[8][0];
 units[8] = "73";
 comments[8] = "Id Pregunta: 659. ";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[9]= "10)  En el sistema operativo Unix/Linux, el comando id:";
 choices[9]= new Array();
 choices[9][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[9][1] = "El comando id no existe.";
 choices[9][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[9][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[9] = choices[9][0];
 units[9] = "57";
 comments[9] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[10]= new Array();
 choices[10][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[10][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[10][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[10][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[10] = choices[10][1];
 units[10] = "78";
 comments[10] = "Id Pregunta: 50. AGE A1 2015";


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[11]= new Array();
 choices[11][0] = "Yarn";
 choices[11][1] = "Flume";
 choices[11][2] = "Hive";
 choices[11][3] = "BizAgi";
 answers[11] = choices[11][3];
 units[11] = "73";
 comments[11] = "Id Pregunta: 657. ";


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[12]= "13)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[12]= new Array();
 choices[12][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[12][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[12][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[12][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[12] = choices[12][0];
 units[12] = "60";
 comments[12] = "Id Pregunta: 651. Junta de Extremadura A1 2015";


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[13]= "14)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[13]= new Array();
 choices[13][0] = "Entradas (entities).";
 choices[13][1] = "Atributos (attribs).";
 choices[13][2] = "M&oacute;dulos (modules).";
 choices[13][3] = "Objetos (objects).";
 answers[13] = choices[13][0];
 units[13] = "74";
 comments[13] = "Id Pregunta: 624. Junta de Extremadura A1 2015";


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[14]= "15)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[14]= new Array();
 choices[14][0] = "Relaciones base y vistas.";
 choices[14][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[14][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[14][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[14] = choices[14][3];
 units[14] = "60";
 comments[14] = "Id Pregunta: 637. Junta de Extremadura A1 2015";


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[15]= "16)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[15]= new Array();
 choices[15][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[15][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[15][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[15][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[15] = choices[15][2];
 units[15] = "73";
 comments[15] = "Id Pregunta: 654. ";


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[16]= "17)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[16]= new Array();
 choices[16][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[16][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[16][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[16][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[16] = choices[16][0];
 units[16] = "73";
 comments[16] = "Id Pregunta: 656. ";


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[17]= "18)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[17]= new Array();
 choices[17][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[17][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[17][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[17][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[17] = choices[17][1];
 units[17] = "56";
 comments[17] = "Id Pregunta: 610. Junta de Extremadura A1 2015";


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[18]= "19)  El lenguaje SPARK es un subconjunto de:";
 choices[18]= new Array();
 choices[18][0] = "Java";
 choices[18][1] = "Fortran";
 choices[18][2] = "Ruby";
 choices[18][3] = "Ada";
 answers[18] = choices[18][3];
 units[18] = "73";
 comments[18] = "Id Pregunta: 81. AGE A1 2015";


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; facilita un ORM?";
 choices[19]= new Array();
 choices[19][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[19][1] = "Conversi&oacute;n de objetos a documentos";
 choices[19][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[19][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[19] = choices[19][0];
 units[19] = "62";
 comments[19] = "Id Pregunta: 49. AGE A1 2015";


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[20]= "21)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[20]= new Array();
 choices[20][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[20][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[20][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[20][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[20] = choices[20][3];
 units[20] = "57";
 comments[20] = "Id Pregunta: 640. Junta de Extremadura A1 2015";


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; es MongoDB?";
 choices[21]= new Array();
 choices[21][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[21][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[21][2] = "Un sistema gestor de base de datos relacional.";
 choices[21][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 31. AGE A1 2015";


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[22]= "23)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[22]= new Array();
 choices[22][0] = "Intersecci&oacute;n.";
 choices[22][1] = "Uni&oacute;n.";
 choices[22][2] = "Restricci&oacute;n.";
 choices[22][3] = "Diferencia.";
 answers[22] = choices[22][0];
 units[22] = "60";
 comments[22] = "Id Pregunta: 614. Junta de Extremadura A1 2015";


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[23]= "24)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[23]= new Array();
 choices[23][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[23][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[23][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[23][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[23] = choices[23][1];
 units[23] = "77";
 comments[23] = "Id Pregunta: 689. Art&iacute;culo 26 del Reglamento 910/2014";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[24]= "25)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[24]= new Array();
 choices[24][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[24][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[24][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[24][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[24] = choices[24][1];
 units[24] = "64";
 comments[24] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[25]= "26)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[25]= new Array();
 choices[25][0] = "Almacenamiento orientado a columnas";
 choices[25][1] = "Framework MapReduce";
 choices[25][2] = "OLTP";
 choices[25][3] = "Bases de datos clave-valor";
 answers[25] = choices[25][2];
 units[25] = "73";
 comments[25] = "Id Pregunta: 93. AGE A1 2015";


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[26]= "27)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "Lollipop";
 choices[26][1] = "Jelly Bean";
 choices[26][2] = "Marshmallow";
 choices[26][3] = "KitKat";
 answers[26] = choices[26][2];
 units[26] = "59";
 comments[26] = "Id Pregunta: 61. AGE A1 2015";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[27]= new Array();
 choices[27][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[27][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[27][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[27][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[27] = choices[27][3];
 units[27] = "66";
 comments[27] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[28][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[28][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[28][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[28] = choices[28][1];
 units[28] = "60";
 comments[28] = "Id Pregunta: 44. AGE A1 2015";


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; es Java Web Start?";
 choices[29]= new Array();
 choices[29][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[29][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[29][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[29][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[29] = choices[29][3];
 units[29] = "64";
 comments[29] = "Id Pregunta: 35. AGE A1 2015";


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[30]= "31)  Un wireframe es:";
 choices[30]= new Array();
 choices[30][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[30][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[30][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[30][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[30] = choices[30][3];
 units[30] = "62";
 comments[30] = "Id Pregunta: 4. AGE A1 2015";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[31]= "32)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[31]= new Array();
 choices[31][0] = "Windows Phone";
 choices[31][1] = "Blackberry";
 choices[31][2] = "iOS";
 choices[31][3] = "Android";
 answers[31] = choices[31][3];
 units[31] = "59";
 comments[31] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[32]= "33)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[32]= new Array();
 choices[32][0] = "Infrastructure as a Service (IaaS)";
 choices[32][1] = "Platform as a Service (PaaS)";
 choices[32][2] = "Software as a Service (SaaS)";
 choices[32][3] = "Application as a Service (AaaS)";
 answers[32] = choices[32][1];
 units[32] = "52";
 comments[32] = "Id Pregunta: 63. AGE A1 2015";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[33]= "34)  Los criptosistemas pueden clasificarse en:";
 choices[33]= new Array();
 choices[33][0] = "Concretos, Estables e Inestables.";
 choices[33][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[33][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[33][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[33] = choices[33][3];
 units[33] = "76";
 comments[33] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 34 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Cu&aacute;les de los siguientes mecanismos no existe espec&iacute;ficamente como cach&eacute; de c&oacute;digo PHP?";
 choices[34]= new Array();
 choices[34][0] = "Memcached";
 choices[34][1] = "OpCache";
 choices[34][2] = "WinCache Extension for PHP";
 choices[34][3] = "Alternative PHP Cache";
 answers[34] = choices[34][0];
 units[34] = "65";
 comments[34] = "Id Pregunta: 34. AGE A1 2015";


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[35]= "36)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[35]= new Array();
 choices[35][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[35][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[35][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[35][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[35] = choices[35][1];
 units[35] = "77";
 comments[35] = "Id Pregunta: 690. Art&iacute;culo 44 del Reglamento 910/2014";


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[36]= new Array();
 choices[36][0] = "Backup full.";
 choices[36][1] = "Backup diferencial.";
 choices[36][2] = "Backup incremental.";
 choices[36][3] = "Backup deduplicado.";
 answers[36] = choices[36][3];
 units[36] = "53";
 comments[36] = "Id Pregunta: 852. Xunta de Galicia 2015";


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[37]= new Array();
 choices[37][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[37][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[37][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[37][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[37] = choices[37][2];
 units[37] = "77";
 comments[37] = "Id Pregunta: 693. Anexo I del Reglamento 910/2014";


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[38]= "39)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[38]= new Array();
 choices[38][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[38][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[38][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[38][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[38] = choices[38][1];
 units[38] = "73";
 comments[38] = "Id Pregunta: 101. ";


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[39]= "40)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[39]= new Array();
 choices[39][0] = "SMB3";
 choices[39][1] = "AFP";
 choices[39][2] = "NFS";
 choices[39][3] = "FTP";
 answers[39] = choices[39][0];
 units[39] = "59";
 comments[39] = "Id Pregunta: 30. AGE A1 2015";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[40]= new Array();
 choices[40][0] = "MySQL";
 choices[40][1] = "SQLite";
 choices[40][2] = "Zope";
 choices[40][3] = "MariaDB";
 answers[40] = choices[40][2];
 units[40] = "61";
 comments[40] = "Id Pregunta: 577. Tema 61. TAI 2016.";


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[41]= "42)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[41]= new Array();
 choices[41][0] = "0";
 choices[41][1] = "1";
 choices[41][2] = "Tantos como peticiones concurrentes tenga.";
 choices[41][3] = "Tantos como le permita la memoria de la JVM.";
 answers[41] = choices[41][1];
 units[41] = "64";
 comments[41] = "Id Pregunta: 15. AGE A1 2015";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[42]= new Array();
 choices[42][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[42][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[42][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[42][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[42] = choices[42][1];
 units[42] = "76";
 comments[42] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[43]= new Array();
 choices[43][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[43][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[43][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[43][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[43] = choices[43][3];
 units[43] = "77";
 comments[43] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[44]= "45)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[44]= new Array();
 choices[44][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[44][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[44][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[44][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[44] = choices[44][2];
 units[44] = "57";
 comments[44] = "Id Pregunta: 638. Junta de Extremadura A1 2015";


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[45]= "46)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[45]= new Array();
 choices[45][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[45][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[45][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[45][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[45] = choices[45][1];
 units[45] = "58";
 comments[45] = "Id Pregunta: 643. Junta de Extremadura A1 2015";


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[46]= new Array();
 choices[46][0] = "Directiva 95/46/CE";
 choices[46][1] = "Directiva 1999/93/CE";
 choices[46][2] = "Directiva 2000/31/CE";
 choices[46][3] = "Directiva 2003/98/CE";
 answers[46] = choices[46][1];
 units[46] = "77";
 comments[46] = "Id Pregunta: 684. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[47]= "48)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[47]= new Array();
 choices[47][0] = "En sentencias switch para alterar el control de flujo.";
 choices[47][1] = "Para manejar excepciones.";
 choices[47][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[47][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[47] = choices[47][1];
 units[47] = "64";
 comments[47] = "Id Pregunta: 626. Junta de Extremadura A1 2015";


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[48]= "49)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[48]= new Array();
 choices[48][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[48][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[48][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[48][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[48] = choices[48][0];
 units[48] = "62";
 comments[48] = "Id Pregunta: 12. AGE A1 2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[49]= "50)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[49]= new Array();
 choices[49][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[49][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[49][2] = "A partir del 1 de enero de 2015";
 choices[49][3] = "A partir del 1 de julio de 2016";
 answers[49] = choices[49][1];
 units[49] = "77";
 comments[49] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[50]= "51)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[50]= new Array();
 choices[50][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[50][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[50][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[50][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[50] = choices[50][1];
 units[50] = "63";
 comments[50] = "Id Pregunta: 33. AGE A1 2015";


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[51]= "52)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[51]= new Array();
 choices[51][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[51][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[51][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[51][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[51] = choices[51][0];
 units[51] = "65";
 comments[51] = "Id Pregunta: 625. Junta de Extremadura A1 2015";


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[52]= "53)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[52]= new Array();
 choices[52][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[52][1] = "1 de enero de 2015";
 choices[52][2] = "1 de enero de 2016";
 choices[52][3] = "1 de julio de 2016";
 answers[52] = choices[52][3];
 units[52] = "77";
 comments[52] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[53]= "54)  Son proyectos de Apache relacionados con Big Data:";
 choices[53]= new Array();
 choices[53][0] = "Hadoop";
 choices[53][1] = "Spark";
 choices[53][2] = "A) y B)";
 choices[53][3] = "Niguno de los anteriores";
 answers[53] = choices[53][2];
 units[53] = "73";
 comments[53] = "Id Pregunta: 108. ";


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[54]= "55)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[54]= new Array();
 choices[54][0] = "Bases de datos orientadas a filas";
 choices[54][1] = "Bases de datos orientadas a documentos";
 choices[54][2] = "Bases de datos de clave/valor";
 choices[54][3] = "Bases de datos orientadas a objetos";
 answers[54] = choices[54][0];
 units[54] = "73";
 comments[54] = "Id Pregunta: 100. ";


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[55]= "56)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[55]= new Array();
 choices[55][0] = "B&aacute;sico, medio y alto";
 choices[55][1] = "D&eacute;bil y fuerte";
 choices[55][2] = "Bajo, medio y alto";
 choices[55][3] = "Bajo, sustancial y alto";
 answers[55] = choices[55][3];
 units[55] = "77";
 comments[55] = "Id Pregunta: 686. Art&iacute;culo 8 del Reglamento 910/2014";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[56]= new Array();
 choices[56][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[56][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[56][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[56][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[56] = choices[56][0];
 units[56] = "75";
 comments[56] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[57]= "58)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[57]= new Array();
 choices[57][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[57][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[57][2] = "Las Inspecciones Generales de los Servicios";
 choices[57][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[57] = choices[57][1];
 units[57] = "75";
 comments[57] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 23 Año de creación de pregunta: 2016
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[58]= new Array();
 choices[58][0] = "SPARQL";
 choices[58][1] = "UnQL";
 choices[58][2] = "XQUERY";
 choices[58][3] = "RQL";
 answers[58] = choices[58][0];
 units[58] = "74";
 comments[58] = "Id Pregunta: 23. AGE A1 2015";


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[59]= "60)  Son bases de datos NoSQL:";
 choices[59]= new Array();
 choices[59][0] = "MongoDB y Maria DB";
 choices[59][1] = "HBase y Dynamo";
 choices[59][2] = "MariaDB, Cassandra y BigTable";
 choices[59][3] = "La A) y la C)";
 answers[59] = choices[59][1];
 units[59] = "73";
 comments[59] = "Id Pregunta: 104. ";


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[60]= "61)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[60]= new Array();
 choices[60][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[60][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[60][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[60][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[60] = choices[60][3];
 units[60] = "77";
 comments[60] = "Id Pregunta: 48. AGE A1 2015";


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[61]= "62)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[61]= new Array();
 choices[61][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[61][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[61][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[61][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[61] = choices[61][2];
 units[61] = "53";
 comments[61] = "Id Pregunta: 65. AGE A1 2015";


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[62]= "63)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[62]= new Array();
 choices[62][0] = "SessionBean";
 choices[62][1] = "JavaBean";
 choices[62][2] = "MBeans";
 choices[62][3] = "MessageDrivenBean";
 answers[62] = choices[62][2];
 units[62] = "64";
 comments[62] = "Id Pregunta: 25. AGE A1 2015";


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[63]= "64)  Son bases de datos NoSQL orientadas a objetos:";
 choices[63]= new Array();
 choices[63][0] = "GemStone";
 choices[63][1] = "Zope Object DB";
 choices[63][2] = "Las dos anteriores";
 choices[63][3] = "Solo B)";
 answers[63] = choices[63][2];
 units[63] = "73";
 comments[63] = "Id Pregunta: 107. ";


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[64]= "65)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[64]= new Array();
 choices[64][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[64][1] = "Clasificaci&oacute;n por cuenta.";
 choices[64][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[64][3] = "Clasificaci&oacute;n por intercambio.";
 answers[64] = choices[64][3];
 units[64] = "56";
 comments[64] = "Id Pregunta: 611. Junta de Extremadura A1 2015";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[65]= "66)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[65]= new Array();
 choices[65][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[65][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[65][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[65][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[65] = choices[65][2];
 units[65] = "57";
 comments[65] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[66]= "67)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[66]= new Array();
 choices[66][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[66][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[66][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[66][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[66] = choices[66][1];
 units[66] = "74";
 comments[66] = "Id Pregunta: 45. AGE A1 2015";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[67]= "68)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[67]= new Array();
 choices[67][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[67][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[67][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[67][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[67] = choices[67][2];
 units[67] = "76";
 comments[67] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[68]= "69)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[68]= new Array();
 choices[68][0] = "6 TB.";
 choices[68][1] = "8 TB.";
 choices[68][2] = "7 TB.";
 choices[68][3] = "4 TB.";
 answers[68] = choices[68][3];
 units[68] = "53";
 comments[68] = "Id Pregunta: 853. Xunta de Galicia 2015";


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[69]= new Array();
 choices[69][0] = "Neo4J ";
 choices[69][1] = "OrientDB ";
 choices[69][2] = "InfoGrid ";
 choices[69][3] = "SimpleDB";
 answers[69] = choices[69][3];
 units[69] = "73";
 comments[69] = "Id Pregunta: 655. ";


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[70]= new Array();
 choices[70][0] = "JAXP";
 choices[70][1] = "JNI";
 choices[70][2] = "JNDI";
 choices[70][3] = "JDBC";
 answers[70] = choices[70][1];
 units[70] = "64";
 comments[70] = "Id Pregunta: 36. AGE A1 2015";


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[71]= "72)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[71]= new Array();
 choices[71][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[71][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[71][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[71][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[71] = choices[71][0];
 units[71] = "76";
 comments[71] = "Id Pregunta: 855. Xunta de Galicia 2015";


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[72]= new Array();
 choices[72][0] = "Es un framework de software libre.";
 choices[72][1] = "Es una base de datos NoSQL.";
 choices[72][2] = "Est&aacute; basado en MapReduce.";
 choices[72][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[72] = choices[72][1];
 units[72] = "73";
 comments[72] = "Id Pregunta: 94. AGE A1 2015";


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[73]= new Array();
 choices[73][0] = "Orientaci&oacute;n a objetos";
 choices[73][1] = "MapReduce";
 choices[73][2] = "Pipeline filtering";
 choices[73][3] = "Programaci&oacute;n funcional";
 answers[73] = choices[73][1];
 units[73] = "73";
 comments[73] = "Id Pregunta: 661. ";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[74]= new Array();
 choices[74][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[74][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[74][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[74][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[74] = choices[74][3];
 units[74] = "78";
 comments[74] = "Id Pregunta: 47. AGE A1 2015";


