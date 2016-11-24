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

//  Id pregunta: 10570 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[0]= new Array();
 choices[0][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[0][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[0][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[0][3] = "La tasa de desempleo ronda el 20%";
 answers[0] = choices[0][2];
 units[0] = "12";
 comments[0] = "Id Pregunta: 10570. Modelo econ&oacute;mico";


//  Id pregunta: 10209 Año de creación de pregunta: 2016
 questions[1]= "2)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[1]= new Array();
 choices[1][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[1][1] = "El Congreso de los Diputados.";
 choices[1][2] = "Las Cortes Generales.";
 choices[1][3] = "El Consejo de Ministros";
 answers[1] = choices[1][3];
 units[1] = "1";
 comments[1] = "Id Pregunta: 10209. CONSTITUCION1978";


//  Id pregunta: 10063 Año de creación de pregunta: 2016
 questions[2]= "3)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[2]= new Array();
 choices[2][0] = "Infrastructure as a Service (IaaS)";
 choices[2][1] = "Platform as a Service (PaaS)";
 choices[2][2] = "Software as a Service (SaaS)";
 choices[2][3] = "Application as a Service (AaaS)";
 answers[2] = choices[2][1];
 units[2] = "52";
 comments[2] = "Id Pregunta: 10063. AGE A1 2015";


//  Id pregunta: 10615 Año de creación de pregunta: 2016
 questions[3]= "4)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[3]= new Array();
 choices[3][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[3][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[3][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[3][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[3] = choices[3][0];
 units[3] = "109";
 comments[3] = "Id Pregunta: 10615. Junta de Extremadura A1 2015";


//  Id pregunta: 10148 Año de creación de pregunta: 2016
 questions[4]= "5)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[4]= new Array();
 choices[4][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[4][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[4][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[4][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[4] = choices[4][2];
 units[4] = "7";
 comments[4] = "Id Pregunta: 10148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 10362 Año de creación de pregunta: 2016
 questions[5]= "6)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[5]= new Array();
 choices[5][0] = "Son actos normativos.";
 choices[5][1] = "Poseen alcance general.";
 choices[5][2] = "No son obligatorias.";
 choices[5][3] = "Son actos individuales no normativos.";
 answers[5] = choices[5][3];
 units[5] = "5";
 comments[5] = "Id Pregunta: 10362. UNION EUROPEA";


//  Id pregunta: 10472 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[6]= new Array();
 choices[6][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[6][1] = "Auditor&iacute;a operativa.";
 choices[6][2] = "Auditor&iacute;a de cumplimiento.";
 choices[6][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[6] = choices[6][2];
 units[6] = "10";
 comments[6] = "Id Pregunta: 10472. PRESUPUESTOS GENERALES";


//  Id pregunta: 10394 Año de creación de pregunta: 2016
 questions[7]= "8)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[7]= new Array();
 choices[7][0] = "Discriminaci&oacute;n indirecta.";
 choices[7][1] = "Discriminaci&oacute;n directa.";
 choices[7][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[7][3] = "Discriminaci&oacute;n abusiva.";
 answers[7] = choices[7][0];
 units[7] = "14";
 comments[7] = "Id Pregunta: 10394. POLITICAS DE IGUALDAD";


//  Id pregunta: 10304 Año de creación de pregunta: 2016
 questions[8]= "9)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[8]= new Array();
 choices[8][0] = "Cinco a&ntilde;os.";
 choices[8][1] = "Seis a&ntilde;os.";
 choices[8][2] = "Cuatro a&ntilde;os.";
 choices[8][3] = "Tres a&ntilde;os.";
 answers[8] = choices[8][0];
 units[8] = "5";
 comments[8] = "Id Pregunta: 10304. UNION EUROPEA";


//  Id pregunta: 10252 Año de creación de pregunta: 2016
 questions[9]= "10)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[9]= new Array();
 choices[9][0] = "De las disposiciones favorables.";
 choices[9][1] = "De las disposiciones sancionadoras no favorables.";
 choices[9][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[9][3] = "Las respuestas b) y c) son correctas.";
 answers[9] = choices[9][3];
 units[9] = "1";
 comments[9] = "Id Pregunta: 10252. CONSTITUCION1978";


//  Id pregunta: 10038 Año de creación de pregunta: 2016
 questions[10]= "11)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[10]= new Array();
 choices[10][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[10][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[10][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[10][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[10] = choices[10][3];
 units[10] = "62";
 comments[10] = "Id Pregunta: 10038. AGE A1 2015";


//  Id pregunta: 10163 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[11]= new Array();
 choices[11][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[11][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[11][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[11][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[11] = choices[11][0];
 units[11] = "19";
 comments[11] = "Id Pregunta: 10163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 10229 Año de creación de pregunta: 2016
 questions[12]= "13)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[12]= new Array();
 choices[12][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[12][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[12][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[12][3] = "A las Diputaciones y a las Comarcas.";
 answers[12] = choices[12][3];
 units[12] = "1";
 comments[12] = "Id Pregunta: 10229. CONSTITUCION1978";


//  Id pregunta: 10031 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; es MongoDB?";
 choices[13]= new Array();
 choices[13][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[13][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[13][2] = "Un sistema gestor de base de datos relacional.";
 choices[13][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[13] = choices[13][1];
 units[13] = "73";
 comments[13] = "Id Pregunta: 10031. AGE A1 2015";


//  Id pregunta: 10270 Año de creación de pregunta: 2016
 questions[14]= "15)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[14]= new Array();
 choices[14][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[14][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[14][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[14][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[14] = choices[14][0];
 units[14] = "1";
 comments[14] = "Id Pregunta: 10270. CONSTITUCION1978";


//  Id pregunta: 10175 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[15]= new Array();
 choices[15][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[15][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[15][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[15][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[15] = choices[15][1];
 units[15] = "1";
 comments[15] = "Id Pregunta: 10175. CONSTITUCION1978";


//  Id pregunta: 10455 Año de creación de pregunta: 2016
 questions[16]= "17)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[16]= new Array();
 choices[16][0] = "En qu&eacute; nos gastamos el dinero";
 choices[16][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[16][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[16][3] = "Qui&eacute;n se gasta el dinero.";
 answers[16] = choices[16][0];
 units[16] = "10";
 comments[16] = "Id Pregunta: 10455. PRESUPUESTOS GENERALES";


//  Id pregunta: 10011 Año de creación de pregunta: 2016
 questions[17]= "18)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[17]= new Array();
 choices[17][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[17][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[17][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[17][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[17] = choices[17][1];
 units[17] = "64";
 comments[17] = "Id Pregunta: 10011. AGE A1 2015";


//  Id pregunta: 10501 Año de creación de pregunta: 2016
 questions[18]= "19)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[18]= new Array();
 choices[18][0] = "Las sociedades mercantiles estatales.";
 choices[18][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[18][2] = "Las respuestas a) y b) son correctas.";
 choices[18][3] = "Las respuestas a) y b) no son correctas.";
 answers[18] = choices[18][2];
 units[18] = "10";
 comments[18] = "Id Pregunta: 10501. PRESUPUESTOS GENERALES";


//  Id pregunta: 10416 Año de creación de pregunta: 2016
 questions[19]= "20)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[19]= new Array();
 choices[19][0] = "Art. 25 LO, 3/2007.";
 choices[19][1] = "Art. 23 LO, 3/2007.";
 choices[19][2] = "Art. 14 LO, 3/2007.";
 choices[19][3] = "Ninguna es correcta, es el art. 13.";
 answers[19] = choices[19][0];
 units[19] = "14";
 comments[19] = "Id Pregunta: 10416. POLITICAS DE IGUALDAD";


//  Id pregunta: 10540 Año de creación de pregunta: 2016
 questions[20]= "21)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[20]= new Array();
 choices[20][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[20][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[20][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[20][3] = "todas son correctas";
 answers[20] = choices[20][3];
 units[20] = "7";
 comments[20] = "Id Pregunta: 10540. LEY 39/2015";


//  Id pregunta: 10465 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[21]= new Array();
 choices[21][0] = "Las respuestas a) y b) son correctas.";
 choices[21][1] = "Las respuestas a) y b) no son correctas.";
 choices[21][2] = "Contenido coherente con los planes sectoriales.";
 choices[21][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[21] = choices[21][0];
 units[21] = "10";
 comments[21] = "Id Pregunta: 10465. PRESUPUESTOS GENERALES";


//  Id pregunta: 10009 Año de creación de pregunta: 2016
 questions[22]= "23)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[22]= new Array();
 choices[22][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[22][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[22][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[22][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[22] = choices[22][1];
 units[22] = "95";
 comments[22] = "Id Pregunta: 10009. AGE A1 2015";


//  Id pregunta: 10426 Año de creación de pregunta: 2016
 questions[23]= "24)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[23]= new Array();
 choices[23][0] = "Un plan de igualdad.";
 choices[23][1] = "Un informe de impacto de g&eacute;nero.";
 choices[23][2] = "Un programa de igualdad.";
 choices[23][3] = "Todas son correctas.";
 answers[23] = choices[23][1];
 units[23] = "14";
 comments[23] = "Id Pregunta: 10426. POLITICAS DE IGUALDAD";


//  Id pregunta: 10656 Año de creación de pregunta: 2016
 questions[24]= "25)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[24]= new Array();
 choices[24][0] = "Cassandra";
 choices[24][1] = "Riak";
 choices[24][2] = "Avro";
 choices[24][3] = "Zookeeper";
 answers[24] = choices[24][3];
 units[24] = "73";
 comments[24] = "Id Pregunta: 10656. ";


//  Id pregunta: 10671 Año de creación de pregunta: 2016
 questions[25]= "26)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[25]= new Array();
 choices[25][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[25][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[25][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[25][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[25] = choices[25][0];
 units[25] = "7";
 comments[25] = "Id Pregunta: 10671. T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 10028 Año de creación de pregunta: 2016
 questions[26]= "27)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[26]= new Array();
 choices[26][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[26][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[26][2] = "Crea una copia del proceso que hace la llamada.";
 choices[26][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[26] = choices[26][2];
 units[26] = "57";
 comments[26] = "Id Pregunta: 10028. AGE A1 2015";


//  Id pregunta: 10624 Año de creación de pregunta: 2016
 questions[27]= "28)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[27]= new Array();
 choices[27][0] = "En sentencias switch para alterar el control de flujo.";
 choices[27][1] = "Para manejar excepciones.";
 choices[27][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[27][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[27] = choices[27][1];
 units[27] = "64";
 comments[27] = "Id Pregunta: 10624. Junta de Extremadura A1 2015";


//  Id pregunta: 10061 Año de creación de pregunta: 2016
 questions[28]= "29)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Lollipop";
 choices[28][1] = "Jelly Bean";
 choices[28][2] = "Marshmallow";
 choices[28][3] = "KitKat";
 answers[28] = choices[28][2];
 units[28] = "59";
 comments[28] = "Id Pregunta: 10061. AGE A1 2015";


//  Id pregunta: 10676 Año de creación de pregunta: 2016
 questions[29]= "30)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[29]= new Array();
 choices[29][0] = "El servicio de teleasistencia.";
 choices[29][1] = "El servicio de ayuda a domicilio.";
 choices[29][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[29][3] = "Todas las anteriores son correctas.";
 answers[29] = choices[29][3];
 units[29] = "14";
 comments[29] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10200 Año de creación de pregunta: 2016
 questions[30]= "31)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[30]= new Array();
 choices[30][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[30][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[30][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[30][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[30] = choices[30][3];
 units[30] = "1";
 comments[30] = "Id Pregunta: 10200. CONSTITUCION1978";


//  Id pregunta: 10513 Año de creación de pregunta: 2016
 questions[31]= "32)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[31]= new Array();
 choices[31][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[31][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[31][2] = "el sector p&uacute;blico institucional";
 choices[31][3] = "el sector privado corporativo";
 answers[31] = choices[31][3];
 units[31] = "7";
 comments[31] = "Id Pregunta: 10513. LEY 39/2015";


//  Id pregunta: 10150 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[32]= new Array();
 choices[32][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[32][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[32][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[32][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[32] = choices[32][2];
 units[32] = "7";
 comments[32] = "Id Pregunta: 10150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10681 Año de creación de pregunta: 2016
 questions[33]= "34)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[33]= new Array();
 choices[33][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[33][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[33][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[33][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[33] = choices[33][2];
 units[33] = "14";
 comments[33] = "Id Pregunta: 10681. Pensiones";


//  Id pregunta: 10610 Año de creación de pregunta: 2016
 questions[34]= "35)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[34]= new Array();
 choices[34][0] = "GROUP BY.";
 choices[34][1] = "COUNT.";
 choices[34][2] = "WHERE.";
 choices[34][3] = "DISTINCT.";
 answers[34] = choices[34][0];
 units[34] = "60";
 comments[34] = "Id Pregunta: 10610. Junta de Extremadura A1 2015";


//  Id pregunta: 10535 Año de creación de pregunta: 2016
 questions[35]= "36)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[35]= new Array();
 choices[35][0] = "la Administraci&oacute;n General del Estado";
 choices[35][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[35][2] = "las Entidades Locales";
 choices[35][3] = "todas son correctas";
 answers[35] = choices[35][3];
 units[35] = "7";
 comments[35] = "Id Pregunta: 10535. LEY 39/2015";


//  Id pregunta: 10056 Año de creación de pregunta: 2016
 questions[36]= "37)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[36][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[36][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[36][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[36] = choices[36][2];
 units[36] = "83";
 comments[36] = "Id Pregunta: 10056. AGE A1 2015";


//  Id pregunta: 10297 Año de creación de pregunta: 2016
 questions[37]= "38)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[37]= new Array();
 choices[37][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[37][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[37][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[37][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[37] = choices[37][1];
 units[37] = "5";
 comments[37] = "Id Pregunta: 10297. UNION EUROPEA";


//  Id pregunta: 10576 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[38]= new Array();
 choices[38][0] = "PostgreSQL";
 choices[38][1] = "Datawarehouse";
 choices[38][2] = "Snowflake";
 choices[38][3] = "CouchDB";
 answers[38] = choices[38][0];
 units[38] = "61";
 comments[38] = "Id Pregunta: 10576. Tema 61. TAI 2016.";


//  Id pregunta: 10447 Año de creación de pregunta: 2016
 questions[39]= "40)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[39]= new Array();
 choices[39][0] = "Ejecutivo";
 choices[39][1] = "Limitativo";
 choices[39][2] = "Estimativo";
 choices[39][3] = "Progresivo";
 answers[39] = choices[39][1];
 units[39] = "10";
 comments[39] = "Id Pregunta: 10447. PRESUPUESTOS GENERALES";


//  Id pregunta: 10172 Año de creación de pregunta: 2016
 questions[40]= "41)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[40][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[40][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[40][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[40] = choices[40][2];
 units[40] = "1";
 comments[40] = "Id Pregunta: 10172. CONSTITUCION1978";


//  Id pregunta: 10169 Año de creación de pregunta: 2016
 questions[41]= "42)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[41]= new Array();
 choices[41][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[41][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[41][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[41][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[41] = choices[41][1];
 units[41] = "19";
 comments[41] = "Id Pregunta: 10169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";


//  Id pregunta: 10222 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[42]= new Array();
 choices[42][0] = "Dos Cap&iacute;tulos.";
 choices[42][1] = "Tres Cap&iacute;tulos.";
 choices[42][2] = "Un Cap&iacute;tulo.";
 choices[42][3] = "Cuatro Cap&iacute;tulos.";
 answers[42] = choices[42][1];
 units[42] = "1";
 comments[42] = "Id Pregunta: 10222. CONSTITUCION1978";


//  Id pregunta: 10112 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[43]= new Array();
 choices[43][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[43][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[43][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[43][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[43] = choices[43][1];
 units[43] = "15";
 comments[43] = "Id Pregunta: 10112. ";


//  Id pregunta: 10431 Año de creación de pregunta: 2016
 questions[44]= "45)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[44]= new Array();
 choices[44][0] = "El Instituto de la Mujer.";
 choices[44][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[44][2] = "Ambas son correctas.";
 choices[44][3] = "A y B son incorrectas.";
 answers[44] = choices[44][2];
 units[44] = "14";
 comments[44] = "Id Pregunta: 10431. POLITICAS DE IGUALDAD";


//  Id pregunta: 10648 Año de creación de pregunta: 2016
 questions[45]= "46)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[45]= new Array();
 choices[45][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[45][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[45][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[45][3] = "Estos sistemas es imposible clasificarlos.";
 answers[45] = choices[45][1];
 units[45] = "119";
 comments[45] = "Id Pregunta: 10648. Junta de Extremadura A1 2015";


//  Id pregunta: 10644 Año de creación de pregunta: 2016
 questions[46]= "47)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[46]= new Array();
 choices[46][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[46][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[46][2] = "Funcionarios e interinos.";
 choices[46][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[46] = choices[46][3];
 units[46] = "20";
 comments[46] = "Id Pregunta: 10644. Junta de Extremadura A1 2015";


//  Id pregunta: 10070 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[47]= new Array();
 choices[47][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[47][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[47][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[47][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[47] = choices[47][0];
 units[47] = "75";
 comments[47] = "Id Pregunta: 10070. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 10044 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[48]= new Array();
 choices[48][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[48][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[48][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[48][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[48] = choices[48][1];
 units[48] = "60";
 comments[48] = "Id Pregunta: 10044. AGE A1 2015";


//  Id pregunta: 10442 Año de creación de pregunta: 2016
 questions[49]= "50)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[49]= new Array();
 choices[49][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[49][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[49][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[49][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[49] = choices[49][3];
 units[49] = "43";
 comments[49] = "Id Pregunta: 10442. SERVICIOS COMUNES";


//  Id pregunta: 10158 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[50]= new Array();
 choices[50][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[50][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[50][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[50][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[50] = choices[50][1];
 units[50] = "7";
 comments[50] = "Id Pregunta: 10158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 10217 Año de creación de pregunta: 2016
 questions[51]= "52)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[51]= new Array();
 choices[51][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[51][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[51][2] = "Son refrendados por el Rey.";
 choices[51][3] = "Son convocados por el Presidente del Gobierno.";
 answers[51] = choices[51][0];
 units[51] = "1";
 comments[51] = "Id Pregunta: 10217. CONSTITUCION1978";


//  Id pregunta: 10612 Año de creación de pregunta: 2016
 questions[52]= "53)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[52]= new Array();
 choices[52][0] = "Intersecci&oacute;n.";
 choices[52][1] = "Uni&oacute;n.";
 choices[52][2] = "Restricci&oacute;n.";
 choices[52][3] = "Diferencia.";
 answers[52] = choices[52][0];
 units[52] = "60";
 comments[52] = "Id Pregunta: 10612. Junta de Extremadura A1 2015";


//  Id pregunta: 10449 Año de creación de pregunta: 2016
 questions[53]= "54)  El cr&eacute;dito presupuestario es...";
 choices[53]= new Array();
 choices[53][0] = "El sujeto que realiza el gasto";
 choices[53][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[53][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[53][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[53] = choices[53][2];
 units[53] = "10";
 comments[53] = "Id Pregunta: 10449. PRESUPUESTOS GENERALES";


//  Id pregunta: 10022 Año de creación de pregunta: 2016
 questions[54]= "55)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[54]= new Array();
 choices[54][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[54][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[54][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[54][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[54] = choices[54][1];
 units[54] = "26";
 comments[54] = "Id Pregunta: 10022. AGE A1 2015";


//  Id pregunta: 10233 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[55]= new Array();
 choices[55][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[55][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[55][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[55][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[55] = choices[55][2];
 units[55] = "1";
 comments[55] = "Id Pregunta: 10233. CONSTITUCION1978";


//  Id pregunta: 10485 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[56]= new Array();
 choices[56][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[56][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[56][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[56][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[56] = choices[56][3];
 units[56] = "10";
 comments[56] = "Id Pregunta: 10485. PRESUPUESTOS GENERALES";


//  Id pregunta: 10589 Año de creación de pregunta: 2016
 questions[57]= "58)  Son servicios declarados compartidos:";
 choices[57]= new Array();
 choices[57][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[57][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[57][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[57][3] = "Todos los anteriores";
 answers[57] = choices[57][3];
 units[57] = "19";
 comments[57] = "Id Pregunta: 10589. Estrategia TIC";


//  Id pregunta: 10059 Año de creación de pregunta: 2016
 questions[58]= "59)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[58]= new Array();
 choices[58][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[58][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[58][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[58][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[58] = choices[58][3];
 units[58] = "101";
 comments[58] = "Id Pregunta: 10059. AGE A1 2015";


//  Id pregunta: 10538 Año de creación de pregunta: 2016
 questions[59]= "60)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[59]= new Array();
 choices[59][0] = "los registros mercantiles";
 choices[59][1] = "los registros de la propiedad";
 choices[59][2] = "los protocolos notariales";
 choices[59][3] = "todas son correctas";
 answers[59] = choices[59][3];
 units[59] = "7";
 comments[59] = "Id Pregunta: 10538. LEY 39/2015";


//  Id pregunta: 10311 Año de creación de pregunta: 2016
 questions[60]= "61)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[60]= new Array();
 choices[60][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[60][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[60][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[60][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[60] = choices[60][2];
 units[60] = "5";
 comments[60] = "Id Pregunta: 10311. UNION EUROPEA";


//  Id pregunta: 10675 Año de creación de pregunta: 2016
 questions[61]= "62)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[61]= new Array();
 choices[61][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[61][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[61][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[61][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[61] = choices[61][3];
 units[61] = "47";
 comments[61] = "Id Pregunta: 10675. Inscripci&oacute;n autom&aacute;tica nacimientos";


//  Id pregunta: 10291 Año de creación de pregunta: 2016
 questions[62]= "63)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[62]= new Array();
 choices[62][0] = "Tres a&ntilde;os.";
 choices[62][1] = "Dos a&ntilde;os y medio.";
 choices[62][2] = "Cinco a&ntilde;os.";
 choices[62][3] = "Seis a&ntilde;os.";
 answers[62] = choices[62][3];
 units[62] = "5";
 comments[62] = "Id Pregunta: 10291. UNION EUROPEA";


//  Id pregunta: 10662 Año de creación de pregunta: 2016
 questions[63]= "64)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[63]= new Array();
 choices[63][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[63][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[63][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[63][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que haya sido elaborado por &eacute;ste.";
 answers[63] = choices[63][1];
 units[63] = "7";
 comments[63] = "Id Pregunta: 10662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 10663 Año de creación de pregunta: 2016
 questions[64]= "65)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[64]= new Array();
 choices[64][0] = "De oficio.";
 choices[64][1] = "A solicitud del interesado.";
 choices[64][2] = "De oficio o a solicitud del interesado.";
 choices[64][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[64] = choices[64][2];
 units[64] = "7";
 comments[64] = "Id Pregunta: 10663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 10188 Año de creación de pregunta: 2016
 questions[65]= "66)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[65]= new Array();
 choices[65][0] = "No, en ning&uacute;n caso.";
 choices[65][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[65][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[65][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[65] = choices[65][3];
 units[65] = "1";
 comments[65] = "Id Pregunta: 10188. CONSTITUCION1978";


//  Id pregunta: 10479 Año de creación de pregunta: 2016
 questions[66]= "67)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[66]= new Array();
 choices[66][0] = "A nivel de art&iacute;culo.";
 choices[66][1] = "A nivel de cap&iacute;tulo.";
 choices[66][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[66][3] = "A nivel de concepto.";
 answers[66] = choices[66][2];
 units[66] = "10";
 comments[66] = "Id Pregunta: 10479. PRESUPUESTOS GENERALES";


//  Id pregunta: 10182 Año de creación de pregunta: 2016
 questions[67]= "68)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[67]= new Array();
 choices[67][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[67][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[67][2] = "El que hubieren designado las Cortes Generales.";
 choices[67][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[67] = choices[67][1];
 units[67] = "1";
 comments[67] = "Id Pregunta: 10182. CONSTITUCION1978";


//  Id pregunta: 10551 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[68]= new Array();
 choices[68][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[68][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[68][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[68][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[68] = choices[68][2];
 units[68] = "26";
 comments[68] = "Id Pregunta: 10551. Gobernanza TIC";


//  Id pregunta: 10502 Año de creación de pregunta: 2016
 questions[69]= "70)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[69]= new Array();
 choices[69][0] = "Principio de transparencia.";
 choices[69][1] = "Principio de cooperaci&oacute;n.";
 choices[69][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[69][3] = "Principio de lealtad institucional.";
 answers[69] = choices[69][1];
 units[69] = "10";
 comments[69] = "Id Pregunta: 10502. PRESUPUESTOS GENERALES";


//  Id pregunta: 10266 Año de creación de pregunta: 2016
 questions[70]= "71)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[70]= new Array();
 choices[70][0] = "El Segundo.";
 choices[70][1] = "El Primero.";
 choices[70][2] = "El Preliminar.";
 choices[70][3] = "El Tercero.";
 answers[70] = choices[70][0];
 units[70] = "1";
 comments[70] = "Id Pregunta: 10266. CONSTITUCION1978";


//  Id pregunta: 10640 Año de creación de pregunta: 2016
 questions[71]= "72)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[71]= new Array();
 choices[71][0] = "Fat y Ntfs.";
 choices[71][1] = "Extfat y Fat.";
 choices[71][2] = "Fat y Nfst.";
 choices[71][3] = "ext2fs y Ntfs.";
 answers[71] = choices[71][0];
 units[71] = "58";
 comments[71] = "Id Pregunta: 10640. Junta de Extremadura A1 2015";


//  Id pregunta: 10064 Año de creación de pregunta: 2016
 questions[72]= "73)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[72]= new Array();
 choices[72][0] = "Windows Phone";
 choices[72][1] = "Blackberry";
 choices[72][2] = "iOS";
 choices[72][3] = "Android";
 answers[72] = choices[72][3];
 units[72] = "59";
 comments[72] = "Id Pregunta: 10064. AGE A1 2015";


//  Id pregunta: 10315 Año de creación de pregunta: 2016
 questions[73]= "74)  El Colegio de Comisarios se re&uacute;ne:";
 choices[73]= new Array();
 choices[73][0] = "Una vez por semana.";
 choices[73][1] = "Una vez al mes.";
 choices[73][2] = "Dos veces en semana.";
 choices[73][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[73] = choices[73][0];
 units[73] = "5";
 comments[73] = "Id Pregunta: 10315. UNION EUROPEA";


//  Id pregunta: 10396 Año de creación de pregunta: 2016
 questions[74]= "75)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[74]= new Array();
 choices[74][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[74][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[74][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[74][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[74] = choices[74][0];
 units[74] = "14";
 comments[74] = "Id Pregunta: 10396. POLITICAS DE IGUALDAD";


