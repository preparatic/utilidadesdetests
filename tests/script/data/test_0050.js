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

//  Id pregunta: 10166 Año de creación de pregunta: 2016
 questions[0]= "1)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[0]= new Array();
 choices[0][0] = "Interoperabilidad";
 choices[0][1] = "Integridad";
 choices[0][2] = "Capital humano";
 choices[0][3] = "Trazabilidad";
 answers[0] = choices[0][2];
 units[0] = "19";
 comments[0] = "Id Pregunta: 10166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";


//  Id pregunta: 10517 Año de creación de pregunta: 2016
 questions[1]= "2)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[1]= new Array();
 choices[1][0] = "la Administraci&oacute;n General del Estado";
 choices[1][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[1][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[1][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[1] = choices[1][3];
 units[1] = "7";
 comments[1] = "Id Pregunta: 10517. LEY 39/2015";


//  Id pregunta: 10384 Año de creación de pregunta: 2016
 questions[2]= "3)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[2]= new Array();
 choices[2][0] = "Sean dirigidas por mujeres";
 choices[2][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[2][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[2][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[2] = choices[2][2];
 units[2] = "14";
 comments[2] = "Id Pregunta: 10384. POLITICAS DE IGUALDAD";


//  Id pregunta: 10186 Año de creación de pregunta: 2016
 questions[3]= "4)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[3]= new Array();
 choices[3][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[3][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[3][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[3][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[3] = choices[3][2];
 units[3] = "1";
 comments[3] = "Id Pregunta: 10186. CONSTITUCION1978";


//  Id pregunta: 10393 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[4]= new Array();
 choices[4][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[4][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[4][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[4][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[4] = choices[4][0];
 units[4] = "14";
 comments[4] = "Id Pregunta: 10393. POLITICAS DE IGUALDAD";


//  Id pregunta: 10330 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[5]= new Array();
 choices[5][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[5][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[5][2] = "Todas son correctas.";
 choices[5][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[5] = choices[5][2];
 units[5] = "5";
 comments[5] = "Id Pregunta: 10330. UNION EUROPEA";


//  Id pregunta: 10457 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[6]= new Array();
 choices[6][0] = "A nivel de secci&oacute;n de programa.";
 choices[6][1] = "A nivel de grupo de programa.";
 choices[6][2] = "Ninguna de las respuestas es correcta.";
 choices[6][3] = "A nivel de programa.";
 answers[6] = choices[6][3];
 units[6] = "10";
 comments[6] = "Id Pregunta: 10457. PRESUPUESTOS GENERALES";


//  Id pregunta: 10596 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[7]= new Array();
 choices[7][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[7][1] = "Las CMADs";
 choices[7][2] = "Ambas son correctas.";
 choices[7][3] = "Ninguna es correcta";
 answers[7] = choices[7][2];
 units[7] = "19";
 comments[7] = "Id Pregunta: 10596. Estrategia TIC";


//  Id pregunta: 10641 Año de creación de pregunta: 2016
 questions[8]= "9)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[8]= new Array();
 choices[8][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[8][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[8][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[8][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[8] = choices[8][1];
 units[8] = "58";
 comments[8] = "Id Pregunta: 10641. Junta de Extremadura A1 2015";


//  Id pregunta: 10266 Año de creación de pregunta: 2016
 questions[9]= "10)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[9]= new Array();
 choices[9][0] = "El Segundo.";
 choices[9][1] = "El Primero.";
 choices[9][2] = "El Preliminar.";
 choices[9][3] = "El Tercero.";
 answers[9] = choices[9][0];
 units[9] = "1";
 comments[9] = "Id Pregunta: 10266. CONSTITUCION1978";


//  Id pregunta: 10163 Año de creación de pregunta: 2016
 questions[10]= "11)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[10]= new Array();
 choices[10][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[10][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[10][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[10][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[10] = choices[10][0];
 units[10] = "19";
 comments[10] = "Id Pregunta: 10163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 10150 Año de creación de pregunta: 2016
 questions[11]= "12)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[11]= new Array();
 choices[11][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[11][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[11][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[11][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[11] = choices[11][2];
 units[11] = "7";
 comments[11] = "Id Pregunta: 10150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10093 Año de creación de pregunta: 2016
 questions[12]= "13)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[12]= new Array();
 choices[12][0] = "Almacenamiento orientado a columnas";
 choices[12][1] = "Framework MapReduce";
 choices[12][2] = "OLTP";
 choices[12][3] = "Bases de datos clave-valor";
 answers[12] = choices[12][2];
 units[12] = "73";
 comments[12] = "Id Pregunta: 10093. AGE A1 2015";


//  Id pregunta: 10242 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[13]= new Array();
 choices[13][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[13][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[13][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[13][3] = "Sancionar y publicar las leyes.";
 answers[13] = choices[13][2];
 units[13] = "1";
 comments[13] = "Id Pregunta: 10242. CONSTITUCION1978";


//  Id pregunta: 10220 Año de creación de pregunta: 2016
 questions[14]= "15)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[14]= new Array();
 choices[14][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[14][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[14][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[14][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[14] = choices[14][0];
 units[14] = "1";
 comments[14] = "Id Pregunta: 10220. CONSTITUCION1978";


//  Id pregunta: 10012 Año de creación de pregunta: 2016
 questions[15]= "16)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[15]= new Array();
 choices[15][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[15][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[15][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[15][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[15] = choices[15][0];
 units[15] = "62";
 comments[15] = "Id Pregunta: 10012. AGE A1 2015";


//  Id pregunta: 10649 Año de creación de pregunta: 2016
 questions[16]= "17)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[16]= new Array();
 choices[16][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[16][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[16][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[16][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[16] = choices[16][0];
 units[16] = "60";
 comments[16] = "Id Pregunta: 10649. Junta de Extremadura A1 2015";


//  Id pregunta: 10489 Año de creación de pregunta: 2016
 questions[17]= "18)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[17]= new Array();
 choices[17][0] = "Dos.";
 choices[17][1] = "Cuatro.";
 choices[17][2] = "Cinco.";
 choices[17][3] = "Tres.";
 answers[17] = choices[17][1];
 units[17] = "10";
 comments[17] = "Id Pregunta: 10489. PRESUPUESTOS GENERALES";


//  Id pregunta: 10481 Año de creación de pregunta: 2016
 questions[18]= "19)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[18]= new Array();
 choices[18][0] = "Cuatro millones de euros.";
 choices[18][1] = "Seis millones de euros.";
 choices[18][2] = "Siete millones de euros.";
 choices[18][3] = "Cinco millones de euros.";
 answers[18] = choices[18][1];
 units[18] = "10";
 comments[18] = "Id Pregunta: 10481. PRESUPUESTOS GENERALES";


//  Id pregunta: 10104 Año de creación de pregunta: 2016
 questions[19]= "20)  Son bases de datos NoSQL:";
 choices[19]= new Array();
 choices[19][0] = "MongoDB y Maria DB";
 choices[19][1] = "HBase y Dynamo";
 choices[19][2] = "MariaDB, Cassandra y BigTable";
 choices[19][3] = "La A) y la C)";
 answers[19] = choices[19][1];
 units[19] = "73";
 comments[19] = "Id Pregunta: 10104. ";


//  Id pregunta: 10465 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[20]= new Array();
 choices[20][0] = "Las respuestas a) y b) son correctas.";
 choices[20][1] = "Las respuestas a) y b) no son correctas.";
 choices[20][2] = "Contenido coherente con los planes sectoriales.";
 choices[20][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[20] = choices[20][0];
 units[20] = "10";
 comments[20] = "Id Pregunta: 10465. PRESUPUESTOS GENERALES";


//  Id pregunta: 10344 Año de creación de pregunta: 2016
 questions[21]= "22)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[21]= new Array();
 choices[21][0] = "Pas&oacute; de 518 a 626.";
 choices[21][1] = "Pas&oacute; de 434 a 518.";
 choices[21][2] = "Pas&oacute; de 345 a 512.";
 choices[21][3] = "Pas&oacute; de 435 a 610.";
 answers[21] = choices[21][1];
 units[21] = "5";
 comments[21] = "Id Pregunta: 10344. UNION EUROPEA";


//  Id pregunta: 10245 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[22]= new Array();
 choices[22][0] = "De los derechos y deberes fundamentales.";
 choices[22][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[22][2] = "Derechos y libertades.";
 choices[22][3] = "De la Corona.";
 answers[22] = choices[22][1];
 units[22] = "1";
 comments[22] = "Id Pregunta: 10245. CONSTITUCION1978";


//  Id pregunta: 10551 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[23]= new Array();
 choices[23][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[23][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[23][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[23][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[23] = choices[23][2];
 units[23] = "26";
 comments[23] = "Id Pregunta: 10551. Gobernanza TIC";


//  Id pregunta: 10633 Año de creación de pregunta: 2016
 questions[24]= "25)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[24]= new Array();
 choices[24][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[24][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[24][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[24][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[24] = choices[24][3];
 units[24] = "56";
 comments[24] = "Id Pregunta: 10633. Junta de Extremadura A1 2015";


//  Id pregunta: 10289 Año de creación de pregunta: 2016
 questions[25]= "26)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[25]= new Array();
 choices[25][0] = "Tres a&ntilde;os.";
 choices[25][1] = "Dos a&ntilde;os y medio.";
 choices[25][2] = "Cinco a&ntilde;os.";
 choices[25][3] = "Seis a&ntilde;os.";
 answers[25] = choices[25][2];
 units[25] = "5";
 comments[25] = "Id Pregunta: 10289. UNION EUROPEA";


//  Id pregunta: 10023 Año de creación de pregunta: 2016
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[26]= new Array();
 choices[26][0] = "SPARQL";
 choices[26][1] = "UnQL";
 choices[26][2] = "XQUERY";
 choices[26][3] = "RQL";
 answers[26] = choices[26][0];
 units[26] = "74";
 comments[26] = "Id Pregunta: 10023. AGE A1 2015";


//  Id pregunta: 10660 Año de creación de pregunta: 2016
 questions[27]= "28)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[27]= new Array();
 choices[27][0] = "Avro";
 choices[27][1] = "Sqoop";
 choices[27][2] = "UIMA";
 choices[27][3] = "Jaql";
 answers[27] = choices[27][1];
 units[27] = "73";
 comments[27] = "Id Pregunta: 10660. ";


//  Id pregunta: 10547 Año de creación de pregunta: 2016
 questions[28]= "29)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[28]= new Array();
 choices[28][0] = "Integrar la estrategia TIC con la de negocio";
 choices[28][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[28][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[28][3] = "Todas las anteriores";
 answers[28] = choices[28][3];
 units[28] = "26";
 comments[28] = "Id Pregunta: 10547. Gobernanza TIC";


//  Id pregunta: 10406 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[29]= new Array();
 choices[29][0] = "Art&iacute;culo 9.1 CE.";
 choices[29][1] = "Art&iacute;culo 53 CE.";
 choices[29][2] = "Art&iacute;culo 14 CE.";
 choices[29][3] = "Art&iacute;culo 16 CE.";
 answers[29] = choices[29][2];
 units[29] = "14";
 comments[29] = "Id Pregunta: 10406. POLITICAS DE IGUALDAD";


//  Id pregunta: 10158 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[30]= new Array();
 choices[30][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[30][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[30][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[30][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[30] = choices[30][1];
 units[30] = "7";
 comments[30] = "Id Pregunta: 10158. Ley 39/2015, Art&iacute;culo 43";


//  Id pregunta: 10639 Año de creación de pregunta: 2016
 questions[31]= "32)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[31]= new Array();
 choices[31][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[31][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[31][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[31][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[31] = choices[31][2];
 units[31] = "57";
 comments[31] = "Id Pregunta: 10639. Junta de Extremadura A1 2015";


//  Id pregunta: 10194 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[32]= new Array();
 choices[32][0] = "11";
 choices[32][1] = "12";
 choices[32][2] = "14";
 choices[32][3] = "8";
 answers[32] = choices[32][1];
 units[32] = "1";
 comments[32] = "Id Pregunta: 10194. CONSTITUCION1978";


//  Id pregunta: 10442 Año de creación de pregunta: 2016
 questions[33]= "34)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[33]= new Array();
 choices[33][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[33][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[33][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[33][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[33] = choices[33][3];
 units[33] = "43";
 comments[33] = "Id Pregunta: 10442. SERVICIOS COMUNES";


//  Id pregunta: 10041 Año de creación de pregunta: 2016
 questions[34]= "35)  En cuanto al an&aacute;lisis DAFO:";
 choices[34]= new Array();
 choices[34][0] = "Considera detallada y exclusivamente factores internos.";
 choices[34][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[34][2] = "Considera detallada y exclusivamente factores externos.";
 choices[34][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[34] = choices[34][1];
 units[34] = "83";
 comments[34] = "Id Pregunta: 10041. AGE A1 2015";


//  Id pregunta: 10011 Año de creación de pregunta: 2016
 questions[35]= "36)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[35]= new Array();
 choices[35][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[35][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[35][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[35][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[35] = choices[35][1];
 units[35] = "64";
 comments[35] = "Id Pregunta: 10011. AGE A1 2015";


//  Id pregunta: 10279 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la respuesta correcta:";
 choices[36]= new Array();
 choices[36][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[36][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[36][2] = "Las respuestas A y B son correctas.";
 choices[36][3] = "Las respuestas A y B son falsas.";
 answers[36] = choices[36][2];
 units[36] = "5";
 comments[36] = "Id Pregunta: 10279. UNION EUROPEA";


//  Id pregunta: 10401 Año de creación de pregunta: 2016
 questions[37]= "38)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[37]= new Array();
 choices[37][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[37][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[37][2] = "Ambas son correctas.";
 choices[37][3] = "A y B son incorrectas.";
 answers[37] = choices[37][2];
 units[37] = "14";
 comments[37] = "Id Pregunta: 10401. POLITICAS DE IGUALDAD";


//  Id pregunta: 10249 Año de creación de pregunta: 2016
 questions[38]= "39)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[38]= new Array();
 choices[38][0] = "Art&iacute;culo 16.2.";
 choices[38][1] = "Art&iacute;culo 17.1.";
 choices[38][2] = "Art&iacute;culo 18.1.";
 choices[38][3] = "Art&iacute;culo 18.2.";
 answers[38] = choices[38][0];
 units[38] = "1";
 comments[38] = "Id Pregunta: 10249. CONSTITUCION1978";


//  Id pregunta: 10605 Año de creación de pregunta: 2016
 questions[39]= "40)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[39][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[39][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[39][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[39] = choices[39][2];
 units[39] = "101";
 comments[39] = "Id Pregunta: 10605. Junta de Extremadura A1 2015";


//  Id pregunta: 10391 Año de creación de pregunta: 2016
 questions[40]= "41)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[40]= new Array();
 choices[40][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[40][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[40][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[40][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[40] = choices[40][2];
 units[40] = "14";
 comments[40] = "Id Pregunta: 10391. POLITICAS DE IGUALDAD";


//  Id pregunta: 10386 Año de creación de pregunta: 2016
 questions[41]= "42)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[41]= new Array();
 choices[41][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[41][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[41][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[41][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[41] = choices[41][0];
 units[41] = "14";
 comments[41] = "Id Pregunta: 10386. POLITICAS DE IGUALDAD";


//  Id pregunta: 10560 Año de creación de pregunta: 2016
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[42]= new Array();
 choices[42][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[42][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[42][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[42][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[42] = choices[42][1];
 units[42] = "19";
 comments[42] = "Id Pregunta: 10560. Agenda Digital";


//  Id pregunta: 10520 Año de creación de pregunta: 2016
 questions[43]= "44)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[43]= new Array();
 choices[43][0] = "De los interesados en el procedimiento";
 choices[43][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[43][2] = "Disposiciones generales";
 choices[43][3] = "De los actos administrativos";
 answers[43] = choices[43][2];
 units[43] = "7";
 comments[43] = "Id Pregunta: 10520. LEY 39/2015";


//  Id pregunta: 10095 Año de creación de pregunta: 2016
 questions[44]= "45)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[44]= new Array();
 choices[44][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[44][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[44][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[44][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[44] = choices[44][3];
 units[44] = "89";
 comments[44] = "Id Pregunta: 10095. AGE A1 2015";


//  Id pregunta: 10148 Año de creación de pregunta: 2016
 questions[45]= "46)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[45]= new Array();
 choices[45][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[45][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[45][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[45][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[45] = choices[45][2];
 units[45] = "7";
 comments[45] = "Id Pregunta: 10148. Ley 39/2015, Art&iacute;culo 131";


//  Id pregunta: 10351 Año de creación de pregunta: 2016
 questions[46]= "47)  La sede del Parlamento Europeo se encuentra en:";
 choices[46]= new Array();
 choices[46][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[46][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[46][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[46][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[46] = choices[46][1];
 units[46] = "5";
 comments[46] = "Id Pregunta: 10351. UNION EUROPEA";


//  Id pregunta: 10652 Año de creación de pregunta: 2016
 questions[47]= "48)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[47]= new Array();
 choices[47][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[47][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[47][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[47][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[47] = choices[47][2];
 units[47] = "73";
 comments[47] = "Id Pregunta: 10652. ";


//  Id pregunta: 10588 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[48]= new Array();
 choices[48][0] = "14";
 choices[48][1] = "11";
 choices[48][2] = "12";
 choices[48][3] = "15";
 answers[48] = choices[48][0];
 units[48] = "19";
 comments[48] = "Id Pregunta: 10588. Estrategia TIC";


//  Id pregunta: 10190 Año de creación de pregunta: 2016
 questions[49]= "50)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[49]= new Array();
 choices[49][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[49][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[49][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[49][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[49] = choices[49][2];
 units[49] = "1";
 comments[49] = "Id Pregunta: 10190. CONSTITUCION1978";


//  Id pregunta: 10276 Año de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;ale la respuesta falsa";
 choices[50]= new Array();
 choices[50][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[50][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[50][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[50][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[50] = choices[50][3];
 units[50] = "22";
 comments[50] = "Id Pregunta: 10276. LEY DE TRANSPARENCIA";


//  Id pregunta: 10137 Año de creación de pregunta: 2016
 questions[51]= "52)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[51]= new Array();
 choices[51][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[51][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[51][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[51][3] = "Todos las anteriores son ciertas.";
 answers[51] = choices[51][3];
 units[51] = "12";
 comments[51] = "Id Pregunta: 10137. Leyes modelo econ&oacute;mico";


//  Id pregunta: 10118 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[52]= new Array();
 choices[52][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[52][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[52][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[52][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[52] = choices[52][2];
 units[52] = "15";
 comments[52] = "Id Pregunta: 10118. ";


//  Id pregunta: 10677 Año de creación de pregunta: 2016
 questions[53]= "54)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[53]= new Array();
 choices[53][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[53][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[53][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[53][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[53] = choices[53][2];
 units[53] = "14";
 comments[53] = "Id Pregunta: 10677. Dependencia";


//  Id pregunta: 10241 Año de creación de pregunta: 2016
 questions[54]= "55)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[54]= new Array();
 choices[54][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[54][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[54][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[54][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[54] = choices[54][0];
 units[54] = "1";
 comments[54] = "Id Pregunta: 10241. CONSTITUCION1978";


//  Id pregunta: 10472 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[55]= new Array();
 choices[55][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[55][1] = "Auditor&iacute;a operativa.";
 choices[55][2] = "Auditor&iacute;a de cumplimiento.";
 choices[55][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 10472. PRESUPUESTOS GENERALES";


//  Id pregunta: 10224 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[56]= new Array();
 choices[56][0] = "Art&iacute;culo 16.2.";
 choices[56][1] = "Art&iacute;culo 17.1.";
 choices[56][2] = "Art&iacute;culo 18.1.";
 choices[56][3] = "Art&iacute;culo 18.2.";
 answers[56] = choices[56][2];
 units[56] = "1";
 comments[56] = "Id Pregunta: 10224. CONSTITUCION1978";


//  Id pregunta: 10524 Año de creación de pregunta: 2016
 questions[57]= "58)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[57]= new Array();
 choices[57][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[57][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[57][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[57][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[57] = choices[57][3];
 units[57] = "7";
 comments[57] = "Id Pregunta: 10524. LEY 39/2015";


//  Id pregunta: 10223 Año de creación de pregunta: 2016
 questions[58]= "59)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "De la C&aacute;mara respectiva.";
 choices[58][1] = "Del Rey.";
 choices[58][2] = "Del Tribunal Constitucional.";
 choices[58][3] = "Del Tribunal Supremo.";
 answers[58] = choices[58][0];
 units[58] = "1";
 comments[58] = "Id Pregunta: 10223. CONSTITUCION1978";


//  Id pregunta: 10280 Año de creación de pregunta: 2016
 questions[59]= "60)  El pacto fiscal europeo de 2012 incluye:";
 choices[59]= new Array();
 choices[59][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[59][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[59][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[59][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[59] = choices[59][0];
 units[59] = "5";
 comments[59] = "Id Pregunta: 10280. UNION EUROPEA";


//  Id pregunta: 10264 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[60]= new Array();
 choices[60][0] = "Veinte.";
 choices[60][1] = "Quince.";
 choices[60][2] = "Diez.";
 choices[60][3] = "Doce.";
 answers[60] = choices[60][1];
 units[60] = "1";
 comments[60] = "Id Pregunta: 10264. CONSTITUCION1978";


//  Id pregunta: 10239 Año de creación de pregunta: 2016
 questions[61]= "62)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[61]= new Array();
 choices[61][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[61][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[61][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[61][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[61] = choices[61][0];
 units[61] = "1";
 comments[61] = "Id Pregunta: 10239. CONSTITUCION1978";


//  Id pregunta: 10028 Año de creación de pregunta: 2016
 questions[62]= "63)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[62]= new Array();
 choices[62][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[62][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[62][2] = "Crea una copia del proceso que hace la llamada.";
 choices[62][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[62] = choices[62][2];
 units[62] = "57";
 comments[62] = "Id Pregunta: 10028. AGE A1 2015";


//  Id pregunta: 10487 Año de creación de pregunta: 2016
 questions[63]= "64)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[63]= new Array();
 choices[63][0] = "Las Cortes Generales.";
 choices[63][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[63][2] = "El Gobierno.";
 choices[63][3] = "El Congreso de los Diputados.";
 answers[63] = choices[63][0];
 units[63] = "10";
 comments[63] = "Id Pregunta: 10487. PRESUPUESTOS GENERALES";


//  Id pregunta: 10059 Año de creación de pregunta: 2016
 questions[64]= "65)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[64]= new Array();
 choices[64][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[64][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[64][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[64][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[64] = choices[64][3];
 units[64] = "101";
 comments[64] = "Id Pregunta: 10059. AGE A1 2015";


//  Id pregunta: 10177 Año de creación de pregunta: 2016
 questions[65]= "66)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[65]= new Array();
 choices[65][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[65][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[65][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[65][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[65] = choices[65][2];
 units[65] = "1";
 comments[65] = "Id Pregunta: 10177. CONSTITUCION1978";


//  Id pregunta: 10125 Año de creación de pregunta: 2016
 questions[66]= "67)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[66]= new Array();
 choices[66][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[66][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[66][2] = "La protecci&oacute;n del medio ambiente.";
 choices[66][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[66] = choices[66][0];
 units[66] = "22";
 comments[66] = "Id Pregunta: 10125. ";


//  Id pregunta: 10405 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[67]= new Array();
 choices[67][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[67][1] = "Directiva 2004/113/CE del Consejo.";
 choices[67][2] = "Todas son correctas.";
 choices[67][3] = "Todas son falsas.";
 answers[67] = choices[67][2];
 units[67] = "14";
 comments[67] = "Id Pregunta: 10405. POLITICAS DE IGUALDAD";


//  Id pregunta: 10436 Año de creación de pregunta: 2016
 questions[68]= "69)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[68]= new Array();
 choices[68][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[68][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[68][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[68][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[68] = choices[68][2];
 units[68] = "43";
 comments[68] = "Id Pregunta: 10436. SERVICIOS COMUNES";


//  Id pregunta: 10162 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[69]= new Array();
 choices[69][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[69][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[69][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[69][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[69] = choices[69][0];
 units[69] = "19";
 comments[69] = "Id Pregunta: 10162. La respuesta B es la antigua redacci&oacute;n";


//  Id pregunta: 10151 Año de creación de pregunta: 2016
 questions[70]= "71)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[70]= new Array();
 choices[70][0] = "las personas jur&iacute;dicas ";
 choices[70][1] = "las entidades con personalidad jur&iacute;dica";
 choices[70][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[70][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[70] = choices[70][1];
 units[70] = "7";
 comments[70] = "Id Pregunta: 10151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 10662 Año de creación de pregunta: 2016
 questions[71]= "72)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[71]= new Array();
 choices[71][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[71][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[71][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[71][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que haya sido elaborado por &eacute;ste.";
 answers[71] = choices[71][1];
 units[71] = "7";
 comments[71] = "Id Pregunta: 10662. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 10232 Año de creación de pregunta: 2016
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[72]= new Array();
 choices[72][0] = "El Presidente del Senado.";
 choices[72][1] = "El Defensor del Pueblo.";
 choices[72][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[72][3] = "El Presidente del Gobierno.";
 answers[72] = choices[72][2];
 units[72] = "1";
 comments[72] = "Id Pregunta: 10232. CONSTITUCION1978";


//  Id pregunta: 10121 Año de creación de pregunta: 2016
 questions[73]= "74)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[73]= new Array();
 choices[73][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[73][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[73][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[73][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[73] = choices[73][2];
 units[73] = "22";
 comments[73] = "Id Pregunta: 10121. ";


//  Id pregunta: 10327 Año de creación de pregunta: 2016
 questions[74]= "75)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[74]= new Array();
 choices[74][0] = "X.";
 choices[74][1] = "XIX.";
 choices[74][2] = "XV.";
 choices[74][3] = "XIII.";
 answers[74] = choices[74][1];
 units[74] = "5";
 comments[74] = "Id Pregunta: 10327. UNION EUROPEA";


