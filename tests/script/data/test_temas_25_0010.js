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

//  Id pregunta: 755 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En Java, respecto a la herencia de clases ...";
 choices[0]= new Array();
 choices[0][0] = "Es posible que una clase herede de m&aacute;s de una clase padre";
 choices[0][1] = "Una clase s&oacute;lo puede implementar un &uacute;nico interfaz";
 choices[0][2] = "La clase que hereda de una clase abstracta es siempre abstracta a su vez";
 choices[0][3] = "Todas las anteriores son falsas";
 answers[0] = choices[0][3];
 units[0] = "60";
 comments[0] = "Id Pregunta: 755. NULL";


//  Id pregunta: 1281 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Los programas fuente Java:";
 choices[1]= new Array();
 choices[1][0] = "Se compilan siempre";
 choices[1][1] = "Nunca se compilan, excepto para las m&aacute;quinas con procesador Java";
 choices[1][2] = "Siempre se interpretan para que puedan ejecutarse en m&aacute;quinas con diferente procesador, excepto para las m&aacute;quinas con procesador Java en que son ejecutables directamente";
 choices[1][3] = "Hay partes compiladas y partes interpretadas";
 answers[1] = choices[1][0];
 units[1] = "60";
 comments[1] = "Id Pregunta: 1281. Siempre se compilan a Bytecode.";


//  Id pregunta: 1485 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa cuando hablamos del Modelo de Componentes Distribuidos (DCOM)?:";
 choices[2]= new Array();
 choices[2][0] = "DCOM especifica interfaces entre objetos de componentes dentro de una sola aplicaci&oacute;n o entre aplicaciones";
 choices[2][1] = "Dispone de API para el descubrimiento din&aacute;mico de los interfaces que exporta un objeto";
 choices[2][2] = "El modelo de objetos soporta la herencia m&uacute;ltiple, al igual que CORBA";
 choices[2][3] = "Un componente DCOM es capaz de soportar interfaces m&uacute;ltiples";
 answers[2] = choices[2][2];
 units[2] = "59";
 comments[2] = "Id Pregunta: 1485. JCED - Preparatic XVII";


//  Id pregunta: 4570 AÃ±o de creación de pregunta: 2007-01-01
 questions[3]= "4)  &iquest;Cuantos tipos de drivers existen en JDBC?:";
 choices[3]= new Array();
 choices[3][0] = "2";
 choices[3][1] = "3";
 choices[3][2] = "4";
 choices[3][3] = "tantos como SGBD's";
 answers[3] = choices[3][2];
 units[3] = "60";
 comments[3] = "Id Pregunta: 4570. NULL";


//  Id pregunta: 4939 AÃ±o de creación de pregunta: 2003-01-01
 questions[4]= "5)  El est&aacute;ndar que refiere la usabilidad como la capacidad de un software de ser comprendido, aprendido, usadoy ser atractivo para el usuario, en condiciones espec&iacute;ficas de uso es:";
 choices[4]= new Array();
 choices[4][0] = "RFC 2865";
 choices[4][1] = "ISO/IEC 9126";
 choices[4][2] = "ISO/IEC 9241";
 choices[4][3] = "RFC 2866";
 answers[4] = choices[4][1];
 units[4] = "39";
 comments[4] = "Id Pregunta: 4939. Examen TIC B 2007";


//  Id pregunta: 5054 AÃ±o de creación de pregunta: 2003-01-01
 questions[5]= "6)  RDF (Resource Description Framework) es un:";
 choices[5]= new Array();
 choices[5][0] = "Lenguaje del W3C para representar informaci&oacute;n sobre recursos en la Web";
 choices[5][1] = "Est&aacute;ndar del W3C para la definici&oacute;n de datos";
 choices[5][2] = "Est&aacute;ndar para la creaci&oacute;n de p&aacute;ginas web accesibles";
 choices[5][3] = "Est&aacute;ndar para la descripci&oacute;n de los recursos inform&aacute;ticos de una organizaci&oacute;n";
 answers[5] = choices[5][0];
 units[5] = "39";
 comments[5] = "Id Pregunta: 5054. Examen TIC A 2007";


//  Id pregunta: 5783 AÃ±o de creación de pregunta: 2009-01-01
 questions[6]= "7)  De las siguientes cuestiones de la arquitectura .NET indique cu&aacute;l es FALSA.";
 choices[6]= new Array();
 choices[6][0] = "Las clases ASP.NET soportan el desarrollo de aplicaciones web y de servicios web XML.";
 choices[6][1] = "Las clases ADO.NET permiten a los desarrolladores interaccionar con los datos, como si fueran XML, a trav&eacute;s de las interfaces de OLE DB, ODBC y SQL Server";
 choices[6][2] = "CLR (Common Language runtime) se encarga de realizar la compilaci&oacute;n del c&oacute;digo fuente al Lenguaje Intermedio independiente de la platafoma.";
 choices[6][3] = "En la arquitectura . NET se permite la utilizaci&oacute;n de varios lenguajes de programaci&oacute;n.";
 answers[6] = choices[6][2];
 units[6] = "59";
 comments[6] = "Id Pregunta: 5783. MAP 2008 A2";


//  Id pregunta: 5843 AÃ±o de creación de pregunta: 2009-01-01
 questions[7]= "8)  La Ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos:";
 choices[7]= new Array();
 choices[7][0] = "Prev&eacute; que los ciudadanos se relacionen con dichas administraciones siempre que usen para ello los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad";
 choices[7][1] = "Establece la creaci&oacute;n de registros electr&oacute;nicos por las Administraciones P&uacute;blicas, que admitir&aacute;n exclusivamente documentos electr&oacute;nicos normalizados y cumplimentados de acuerdo con formatos preestablecidos";
 choices[7][2] = "Es de aplicaci&oacute;n exclusivamente a los ciudadanos en sus relaciones con las Administraciones P&uacute;blicas";
 choices[7][3] = "Establece que la publicaci&oacute;n del BOE en la sede electr&oacute;nica del organismo competente tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as establecidas reglamentariamente.";
 answers[7] = choices[7][3];
 units[7] = "43";
 comments[7] = "Id Pregunta: 5843. MAP 2008 A1";


//  Id pregunta: 6415 AÃ±o de creación de pregunta: 2010-01-01
 questions[8]= "9)  De los siguientes, &iquest;Cu&aacute;l no es un estandar del W3C?";
 choices[8]= new Array();
 choices[8][0] = "DOM";
 choices[8][1] = "P3P";
 choices[8][2] = "PVG";
 choices[8][3] = "HTML";
 answers[8] = choices[8][2];
 units[8] = "39";
 comments[8] = "Id Pregunta: 6415. NULL";


//  Id pregunta: 6419 AÃ±o de creación de pregunta: 2010-01-01
 questions[9]= "10)  Las pautas de accesibilidad de agentes de usuario WAI-W3C, se conocen como:";
 choices[9]= new Array();
 choices[9][0] = "WCAG";
 choices[9][1] = "UAAG";
 choices[9][2] = "ATAG";
 choices[9][3] = "TAW";
 answers[9] = choices[9][1];
 units[9] = "39";
 comments[9] = "Id Pregunta: 6419. NULL";


//  Id pregunta: 6518 AÃ±o de creación de pregunta: 2010-01-01
 questions[10]= "11)  El API de Java para llamar a m&eacute;todos escritos en otros lenguajes es:";
 choices[10]= new Array();
 choices[10][0] = "JDI";
 choices[10][1] = "JCI";
 choices[10][2] = "JTEE";
 choices[10][3] = "JNI";
 answers[10] = choices[10][3];
 units[10] = "60";
 comments[10] = "Id Pregunta: 6518. NULL";


//  Id pregunta: 7318 AÃ±o de creación de pregunta: 2010-01-01
 questions[11]= "12)  Se&ntilde;ala cu&aacute;l de los siguientes lenguajes de programaci&oacute;n no tiene alguna implementaci&oacute;n para el Framework .NET:";
 choices[11]= new Array();
 choices[11][0] = "COBOL";
 choices[11][1] = "Fortran";
 choices[11][2] = "Delphi";
 choices[11][3] = "Todos los lenguajes anteriores tienen alguna implementaci&oacute;n para el Framework .NET";
 answers[11] = choices[11][3];
 units[11] = "59";
 comments[11] = "Id Pregunta: 7318. NULL";


//  Id pregunta: 8404 AÃ±o de creación de pregunta: 2011-01-01
 questions[12]= "13)  Para que las im&aacute;genes electr&oacute;nicas realizadas por la Administraci&oacute;n de documentos en soporte no electr&oacute;nico tengan la naturaleza de copias electr&oacute;nicas aut&eacute;nticas, con el alcance y efectos previstos en el art. 46 de la ley 30/1992, se deben cumplir ciertos requisitos. &iquest;Cu&aacute;l de los siguientes NO es uno de ellos? ";
 choices[12]= new Array();
 choices[12][0] = "Que la copia electr&oacute;nica incluya su car&aacute;cter de copia entre los metadatos asociados. ";
 choices[12][1] = "Que el documento copiado sea un original o una copia aut&eacute;ntica.";
 choices[12][2] = "Que las im&aacute;genes electr&oacute;nicas est&eacute;n codificadas conforme a algunos de los formatos y con los niveles de calidad y condiciones t&eacute;cnicas especificados en el Esquema Nacional de Interoperabilidad.  ";
 choices[12][3] = "Que en los metadatos se incluya el &oacute;rgano y lugar donde se custodia el original o copia autentica en soporte no electr&oacute;nico.";
 answers[12] = choices[12][3];
 units[12] = "43";
 comments[12] = "Id Pregunta: 8404. Examen TIC A2 2010";


//  Id pregunta: 8440 AÃ±o de creación de pregunta: 2011-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes elementos no aparece en el recibo firmado electr&oacute;nicamente emitido autom&aacute;ticamente por el registro electr&oacute;nico, seg&uacute;n el RD 1671/2009?";
 choices[13]= new Array();
 choices[13][0] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada.";
 choices[13][1] = "Direcci&oacute;n de la sede electr&oacute;nica del organismo.";
 choices[13][2] = "En su caso, enumeraci&oacute;n y denominaci&oacute;n de los documentos adjuntos al formulario de presentaci&oacute;n o documento presentado, seguida de la huella electr&oacute;nica de cada uno de ellos.";
 choices[13][3] = "Informaci&oacute;n del plazo m&aacute;ximo establecido normativamente para la resoluci&oacute;n y notificaci&oacute;n del procedimiento, as&iacute; como de los efectos que pueda producir el silencio administrativo, cuando sea autom&aacute;ticamente determinable.";
 answers[13] = choices[13][1];
 units[13] = "43";
 comments[13] = "Id Pregunta: 8440. ";


//  Id pregunta: 8937 AÃ±o de creación de pregunta: 2011-01-01
 questions[14]= "15)  La publicaci&oacute;n en las sedes judiciales electr&oacute;nicas de informaciones, servicios y transacciones respetar&aacute;:";
 choices[14]= new Array();
 choices[14][0] = "S&oacute;lo los est&aacute;ndares abiertos";
 choices[14][1] = "Aquellos est&aacute;ndares que sean de uso generalizado por los ciudadanos";
 choices[14][2] = "Los est&aacute;ndares que decida la autoridad competente";
 choices[14][3] = "Todos los anteriores";
 answers[14] = choices[14][1];
 units[14] = "43";
 comments[14] = "Id Pregunta: 8937. ";


//  Id pregunta: 8985 AÃ±o de creación de pregunta: 2011-01-01
 questions[15]= "16)  En el contexto de web services &iquest;Qu&eacute; quiere decir OASIS?";
 choices[15]= new Array();
 choices[15][0] = "Organization for the Advancement of Structured Information Services";
 choices[15][1] = "Organization for the Advancement of Service Integration Standards";
 choices[15][2] = "Organization for the Advancement of Structured Information Standards";
 choices[15][3] = "Organization for the Application of Structured Information Standards";
 answers[15] = choices[15][2];
 units[15] = "51, 69";
 comments[15] = "Id Pregunta: 8985. NULL";


//  Id pregunta: 9034 AÃ±o de creación de pregunta: 2011-01-01
 questions[16]= "17)  Indique cu&aacute;l no es un principios b&aacute;sico seg&uacute;n el RD 3/2010.";
 choices[16]= new Array();
 choices[16][0] = "Prevenci&oacute;n, reactivaci&oacute;n y revisi&oacute;n";
 choices[16][1] = "Seguridad Integral";
 choices[16][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[16][3] = "L&iacute;neas de defensa";
 answers[16] = choices[16][0];
 units[16] = "43";
 comments[16] = "Id Pregunta: 9034. ";


//  Id pregunta: 9748 AÃ±o de creación de pregunta: 2014-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes pautas est&aacute; asociada al principio &quot;comprensible&quot; de la WCAG 2.0?";
 choices[17]= new Array();
 choices[17][0] = "Alternativas textuales.";
 choices[17][1] = "Distinguible.";
 choices[17][2] = "Predecible.";
 choices[17][3] = "Compatible.";
 answers[17] = choices[17][2];
 units[17] = "39";
 comments[17] = "Id Pregunta: 9748. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9981 AÃ±o de creación de pregunta: 2014-01-01
 questions[18]= "19)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[18]= new Array();
 choices[18][0] = "CLRUN";
 choices[18][1] = "CLRNET";
 choices[18][2] = "COLR";
 choices[18][3] = "CLR";
 answers[18] = choices[18][3];
 units[18] = "59,115";
 comments[18] = "Id Pregunta: 9981. TIC A2, UPM, Examen 2010";


//  Id pregunta: 10607 AÃ±o de creación de pregunta: 2015-01-01
 questions[19]= "20)  Marque el lenguaje que est&aacute; basado en XML:";
 choices[19]= new Array();
 choices[19][0] = "XBRL";
 choices[19][1] = "SOAP";
 choices[19][2] = "UDDI";
 choices[19][3] = "XBGG";
 answers[19] = choices[19][0];
 units[19] = "69";
 comments[19] = "Id Pregunta: 10607. ";


//  Id pregunta: 10729 AÃ±o de creación de pregunta: 2015-01-01
 questions[20]= "21)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas &iquest;cual de los siguientes no es un tipo de Punto de Presencia (PdP) de la Red SARA?";
 choices[20]= new Array();
 choices[20][0] = "Centros externos de monitorizaci&oacute;n.";
 choices[20][1] = "Prestadores de servicios de certificaci&oacute;n.";
 choices[20][2] = "Otros: como son las Ventanillas &Uacute;nicas Empresariales.";
 choices[20][3] = "Todos los anteriores son tipos de PdP.";
 answers[20] = choices[20][3];
 units[20] = "43";
 comments[20] = "Id Pregunta: 10729. ";


//  Id pregunta: 11023 AÃ±o de creación de pregunta: 2015-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes no es una pauta del principio de Comprensibilidad de las WCAG 2.0?";
 choices[21]= new Array();
 choices[21][0] = "Navegable";
 choices[21][1] = "Legible y entendible";
 choices[21][2] = "Predecible";
 choices[21][3] = "Ayuda a la entrada de datos";
 answers[21] = choices[21][0];
 units[21] = "39";
 comments[21] = "Id Pregunta: 11023. La pauta 'Navegable' pertenece al principio de Operabilidad";


//  Id pregunta: 11586 AÃ±o de creación de pregunta: 2015-01-01
 questions[22]= "23)  La pauta WCAG 2.0 de ayuda a la entrada de datos se relaciona con el principio de: ";
 choices[22]= new Array();
 choices[22][0] = "Operabilidad";
 choices[22][1] = "Robustez";
 choices[22][2] = "Perceptibilidad";
 choices[22][3] = "Comprensibilidad";
 answers[22] = choices[22][3];
 units[22] = "39";
 comments[22] = "Id Pregunta: 11586. ";


//  Id pregunta: 11596 AÃ±o de creación de pregunta: 2015-01-01
 questions[23]= "24)  Con respecto a las Comisiones Ministeriales de Administraci&oacute;n Digital, se&ntilde;ale la respuesta correcta:";
 choices[23]= new Array();
 choices[23][0] = "Definen las prioridades de inversi&oacute;n en materias TIC de acuerdo con los objetivos establecidos por el Gobierno.";
 choices[23][1] = "Impulsan la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados y la compartici&oacute;n de infraestructuras t&eacute;cnicas y los servicios comunes que permitan la racionalizaci&oacute;n de los recursos TIC a todos los niveles del Estado.";
 choices[23][2] = "Act&uacute;an como Observatorio de la Administraci&oacute;n Electr&oacute;nica y Transformaci&oacute;n Digital.";
 choices[23][3] = "Impulsan la digitalizaci&oacute;n de los servicios y procedimientos del departamento con el fin de homogeneizarlos, simplificarlos, mejorar su calidad y facilidad de uso, as&iacute; como las prestaciones ofrecidas a los ciudadanos y empresas, optimizando la utilizaci&oacute;n de los recursos TIC disponibles.";
 answers[23] = choices[23][3];
 units[23] = "43";
 comments[23] = "Id Pregunta: 11596. ";


//  Id pregunta: 11625 AÃ±o de creación de pregunta: 2015-01-01
 questions[24]= "25)  RSS son las siglas de:";
 choices[24]= new Array();
 choices[24][0] = "Really Simple Sindication";
 choices[24][1] = "Rich Simple Summary";
 choices[24][2] = "RDF Simple Summary";
 choices[24][3] = "Todas las anteriores son correctas";
 answers[24] = choices[24][0];
 units[24] = "69";
 comments[24] = "Id Pregunta: 11625. ";


