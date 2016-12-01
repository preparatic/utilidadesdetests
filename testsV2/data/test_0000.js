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

//  Id pregunta: 0 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes NO es un objetivo del Plan de Transformaci&oacute;n Digital de la AGE?";
 choices[0]= new Array();
 choices[0][0] = "Consolidar el tejido productivo nacional apoyando el efectivo despliegue de la Sociedad de la Informaci&oacute;n.";
 choices[0][1] = "Conseguir una mayor eficiencia en los servicios TIC comunes de la Administraci&oacute;n.";
 choices[0][2] = "Implantar una gesti&oacute;n corporativa inteligente de la informaci&oacute;n y los datos.";
 choices[0][3] = "Adoptar una estrategia corporativa de seguridad y usabilidad.";
 answers[0] = choices[0][0];
 units[0] = "26";
 comments[0] = "Id Pregunta: 0. AGE A1 2015";
 preguntaids[0] = 0


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[1]= "2)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[1]= new Array();
 choices[1][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[1][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[1][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[1][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[1] = choices[1][2];
 units[1] = "26";
 comments[1] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[1] = 1


//  Id pregunta: 2 Año de creación de pregunta: 2016
 questions[2]= "3)  La estrategia de comunicaci&oacute;n de un nuevo proyecto estrat&eacute;gico TIC NO debe:";
 choices[2]= new Array();
 choices[2][0] = "Posponerse a la puesta en producci&oacute;n del proyecto sin incidencias significativas.";
 choices[2][1] = "Presentar prototipos que muestren la evoluci&oacute;n del desarrollo ya realizado.";
 choices[2][2] = "Dise&ntilde;ar una campa&ntilde;a de difusi&oacute;n y promoci&oacute;n del proyecto.";
 choices[2][3] = "Asegurar la implicaci&oacute;n de representantes de todas las unidades afectadas.";
 answers[2] = choices[2][0];
 units[2] = "31";
 comments[2] = "Id Pregunta: 2. AGE A1 2015";
 preguntaids[2] = 2


//  Id pregunta: 3 Año de creación de pregunta: 2016
 questions[3]= "4)  En el lenguaje de modelado UML :";
 choices[3]= new Array();
 choices[3][0] = "Los diagramas de secuencia y colaboraci&oacute;n son usados para modelar el comportamiento del sistema, pudiendo usarse para modelar un caso de uso, una clase, o un m&eacute;todo complicado.";
 choices[3][1] = "Los diagramas de actividad son usados para modelar la configuraci&oacute;n de los elementos de procesado en tiempo de ejecuci&oacute;n.";
 choices[3][2] = "Los diagramas de componentes son usados para modelar la estructura del software, incluyendo las dependencias entre los componentes de software.";
 choices[3][3] = "Los diagramas de implementaci&oacute;n son usados para modelar interacciones entre objetos de dise&ntilde;o en el sistema.";
 answers[3] = choices[3][2];
 units[3] = "89";
 comments[3] = "Id Pregunta: 3. AGE A1 2015";
 preguntaids[3] = 3


//  Id pregunta: 4 Año de creación de pregunta: 2016
 questions[4]= "5)  Un wireframe es:";
 choices[4]= new Array();
 choices[4][0] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiFi.";
 choices[4][1] = "Un marco de referencia para el dise&ntilde;o y despliegue de redes WiMAX.";
 choices[4][2] = "Un modelo que permite evaluar el impacto de las nuevas tecnolog&iacute;as en la mejora de la calidad de vida durante la puesta en marcha de una ciudad inteligente (smart city).";
 choices[4][3] = "Una interfaz visual que representa la estructura visual de un sitio web y la relaci&oacute;n entre sus p&aacute;ginas.";
 answers[4] = choices[4][3];
 units[4] = "62";
 comments[4] = "Id Pregunta: 4. AGE A1 2015";
 preguntaids[4] = 4


//  Id pregunta: 5 Año de creación de pregunta: 2016
 questions[5]= "6)  Se&ntilde;ale cu&aacute;l de los siguientes NO es uno de los principios de COBIT v5:";
 choices[5]= new Array();
 choices[5][0] = "Satisfacer las necesidades de las partes interesadas.";
 choices[5][1] = "Cubrir las necesidades del departamento de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[5][2] = "Habilitar un enfoque hol&iacute;stico.";
 choices[5][3] = "Separar el gobierno de la gesti&oacute;n.";
 answers[5] = choices[5][1];
 units[5] = "101";
 comments[5] = "Id Pregunta: 5. AGE A1 2015";
 preguntaids[5] = 5


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes procesos de M&Eacute;TRICA Versi&oacute;n 3 no est&aacute; dentro del &aacute;mbito de la norma ISO 12207 de procesos de ciclo de vida del software?";
 choices[6]= new Array();
 choices[6][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[6][1] = "Desarrollo de Sistemas de Informaci&oacute;n";
 choices[6][2] = "Construcci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[6][3] = "Ninguno de los anteriores, ya que los tres est&aacute;n cubiertos por la norma ISO 12207";
 answers[6] = choices[6][0];
 units[6] = "91";
 comments[6] = "Id Pregunta: 6. AGE A1 2015";
 preguntaids[6] = 6


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[7]= new Array();
 choices[7][0] = "Nivel 7 - MPLS.";
 choices[7][1] = "Nivel 3 - RARP.";
 choices[7][2] = "Nivel 2 - HDLC.";
 choices[7][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[7] = choices[7][2];
 units[7] = "105";
 comments[7] = "Id Pregunta: 7. AGE A1 2015";
 preguntaids[7] = 7


//  Id pregunta: 8 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n de la Secretar&iacute;a General de Administraci&oacute;n Digital?";
 choices[8]= new Array();
 choices[8][0] = "Establecer los mecanismos que aseguren un adecuado mantenimiento del censo de activos TIC.";
 choices[8][1] = "El estudio y la implementaci&oacute;n de modelos para incentivar la compartici&oacute;n y reutilizaci&oacute;n de las infraestructuras y aplicaciones sectoriales, y promover el desarrollo de aplicaciones bajo dicho modelo.";
 choices[8][2] = "La supervisi&oacute;n y coordinaci&oacute;n del registro de convenios del sector p&uacute;blico estatal, de acuerdo con la informaci&oacute;n que deber&aacute;n suministrar los diferentes departamentos ministeriales y dem&aacute;s organismos p&uacute;blicos suscriptores de los mismos.";
 choices[8][3] = "El desarrollo, impulso e implantaci&oacute;n de sistemas tecnol&oacute;gicos de apoyo para la gesti&oacute;n de recursos humanos, incluidos los sistemas del Registro Central de Personal.";
 answers[8] = choices[8][2];
 units[8] = "26";
 comments[8] = "Id Pregunta: 8. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[8] = 8


//  Id pregunta: 9 Año de creación de pregunta: 2016
 questions[9]= "10)  Con respecto a los entornos de integraci&oacute;n continua, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[9]= new Array();
 choices[9][0] = "Jenkins no dispone de la funcionalidad de extenderse mediante plugins.";
 choices[9][1] = "SonarQube utiliza herramientas de an&aacute;lisis est&aacute;tico de c&oacute;digo que permiten obtener m&eacute;tricas para mejorar la calidad del c&oacute;digo.";
 choices[9][2] = "El fichero POM empleado en Maven no siempre es un fichero XML.";
 choices[9][3] = "Jenkins es un software de integraci&oacute;n continua bajo licencia Oracle.";
 answers[9] = choices[9][1];
 units[9] = "95";
 comments[9] = "Id Pregunta: 9. AGE A1 2015";
 preguntaids[9] = 9


//  Id pregunta: 10 Año de creación de pregunta: 2016
 questions[10]= "11)  El servicio mediante el cual se localiza un terminal m&oacute;vil dentro de alguna de las N c&eacute;lulas gestionadas coordinadamente en una zona de cobertura se denomina:";
 choices[10]= new Array();
 choices[10][0] = "Paging";
 choices[10][1] = "Roaming";
 choices[10][2] = "Handover";
 choices[10][3] = "Trunking";
 answers[10] = choices[10][0];
 units[10] = "117";
 comments[10] = "Id Pregunta: 10. AGE A1 2015";
 preguntaids[10] = 10


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[11]= "12)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[11]= new Array();
 choices[11][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[11][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[11][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[11][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[11] = choices[11][1];
 units[11] = "64";
 comments[11] = "Id Pregunta: 11. AGE A1 2015";
 preguntaids[11] = 11


//  Id pregunta: 12 Año de creación de pregunta: 2016
 questions[12]= "13)  Indique cu&aacute;l de las siguientes proposiciones es cierta:";
 choices[12]= new Array();
 choices[12][0] = "AngularJS es un framework de JavaScript de c&oacute;digo abierto que sigue el patr&oacute;n de dise&ntilde;o MVC.";
 choices[12][1] = "PrimeFaces y RichFaces son librer&iacute;as que extienden el framework .NET de Microsoft.";
 choices[12][2] = "PrimeFaces es una extensi&oacute;n de AngularJS que permite la integraci&oacute;n de componentes RichFaces.";
 choices[12][3] = "El framework Spring es compatible con el uso delORM Hibernate, pero es incompatible con el uso de Java Server Faces en la capa de presentaci&oacute;n.";
 answers[12] = choices[12][0];
 units[12] = "62";
 comments[12] = "Id Pregunta: 12. AGE A1 2015";
 preguntaids[12] = 12


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[13]= "14)  JNDI se usa para el acceso a:";
 choices[13]= new Array();
 choices[13][0] = "Datos de ficheros";
 choices[13][1] = "Sistemas gestores de bases de datos";
 choices[13][2] = "Directorios de nombres";
 choices[13][3] = "Colas de mensajer&iacute;a";
 answers[13] = choices[13][2];
 units[13] = "64";
 comments[13] = "Id Pregunta: 13. AGE A1 2015";
 preguntaids[13] = 13


//  Id pregunta: 14 Año de creación de pregunta: 2016
 questions[14]= "15)  Se&ntilde;ale la respuesta correcta:";
 choices[14]= new Array();
 choices[14][0] = "La norma ISO 9004 est&aacute; compuesta por las normas ISO 9000:2005, ISO 9002:2008 e ISO 9004:2009.";
 choices[14][1] = "La norma ISO 9004:2009 se refiere a la gesti&oacute;n para el &eacute;xito sostenido de una organizaci&oacute;n, con un enfoque de gesti&oacute;n de la calidad.";
 choices[14][2] = "La norma ISO 9004:2009 se refiere a los principios y vocabulario de los sistemas de gesti&oacute;n de calidad.";
 choices[14][3] = "La norma ISO 9002:2008 se refiere a los requisitos de los sistemas de gesti&oacute;n de calidad.";
 answers[14] = choices[14][1];
 units[14] = "98";
 comments[14] = "Id Pregunta: 14. AGE A1 2015";
 preguntaids[14] = 14


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[15]= "16)  Si una aplicaci&oacute;n web desplegada en una JVM utiliza un servlet para generar p&aacute;ginas web de forma din&aacute;mica, dicho servlet no implementa la interfaz SingleThreadModel, y en un momento determinado se encuentra recibiendo m&uacute;ltiples peticiones de clientes de forma concurrente, &iquest;cu&aacute;ntos objetos de dicha clase estar&aacute;n cargados en la memoria de la JVM?";
 choices[15]= new Array();
 choices[15][0] = "0";
 choices[15][1] = "1";
 choices[15][2] = "Tantos como peticiones concurrentes tenga.";
 choices[15][3] = "Tantos como le permita la memoria de la JVM.";
 answers[15] = choices[15][1];
 units[15] = "64";
 comments[15] = "Id Pregunta: 15. AGE A1 2015";
 preguntaids[15] = 15


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[16]= "17)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[16][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[16][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[16][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[16] = choices[16][3];
 units[16] = "19";
 comments[16] = "Id Pregunta: 16. AGE A1 2015";
 preguntaids[16] = 16


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[17]= "18)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[17]= new Array();
 choices[17][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[17][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[17][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[17][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[17] = choices[17][3];
 units[17] = "44";
 comments[17] = "Id Pregunta: 17. AGE A1 2015";
 preguntaids[17] = 17


//  Id pregunta: 18 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique en qu&eacute; capa del modelo OSI se establece la encriptaci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Aplicaci&oacute;n";
 choices[18][1] = "Sesi&oacute;n";
 choices[18][2] = "Presentaci&oacute;n";
 choices[18][3] = "Transporte";
 answers[18] = choices[18][2];
 units[18] = "105";
 comments[18] = "Id Pregunta: 18. AGE A1 2015";
 preguntaids[18] = 18


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[19]= "20)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[19]= new Array();
 choices[19][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[19][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[19][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[19][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[19] = choices[19][2];
 units[19] = "47";
 comments[19] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[19] = 19


//  Id pregunta: 20 Año de creación de pregunta: 2016
 questions[20]= "21)  Con respecto al &aacute;mbito objetivo de aplicaci&oacute;n de la Ley 37/2007, de 16 de noviembre, sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico:";
 choices[20]= new Array();
 choices[20][0] = "Abarca el intercambio de documentos entre Administraciones y organismos del sector p&uacute;blico en el ejercicio de las funciones p&uacute;blicas que tengan atribuidas.";
 choices[20][1] = "Ser&aacute; aplicable incluso sobre los documentos que obran en las Administraciones y organismos del sector p&uacute;blico para finalidades ajenas a sus funciones de servicio p&uacute;blico.";
 choices[20][2] = "No afecta a la existencia de derechos de propiedad intelectual de las Administraciones y organismos del sector p&uacute;blico ni a su posesi&oacute;n por &eacute;stos.";
 choices[20][3] = "Fija la prevalencia del derecho fundamental a la protecci&oacute;n de datos de car&aacute;cter personal, a&uacute;n cuando se apliquen medidas de disociaci&oacute;n de datos.";
 answers[20] = choices[20][2];
 units[20] = "27";
 comments[20] = "Id Pregunta: 20. AGE A1 2015";
 preguntaids[20] = 20


//  Id pregunta: 21 Año de creación de pregunta: 2016
 questions[21]= "22)  En ITIL v3, &iquest;cu&aacute;l de los siguientes procesos forma parte del Dise&ntilde;o del Servicio?";
 choices[21]= new Array();
 choices[21][0] = "Gesti&oacute;n de la disponibilidad";
 choices[21][1] = "Gesti&oacute;n de la demanda";
 choices[21][2] = "Gesti&oacute;n de entregas";
 choices[21][3] = "Gesti&oacute;n de la configuraci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "101";
 comments[21] = "Id Pregunta: 21. AGE A1 2015";
 preguntaids[21] = 21


//  Id pregunta: 22 Año de creación de pregunta: 2016
 questions[22]= "23)  La composici&oacute;n inicial del Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC, fijada por la disposici&oacute;n adicional quinta del Real Decreto 806/2014, incluye, entre otros, a:";
 choices[22]= new Array();
 choices[22][0] = "Los responsables de las unidades ministeriales de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones.";
 choices[22][1] = "La Inspecci&oacute;n General del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[22][2] = "El titular de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[22][3] = "Representantes de las empresas del sector TIC nacional.";
 answers[22] = choices[22][1];
 units[22] = "26";
 comments[22] = "Id Pregunta: 22. AGE A1 2015";
 preguntaids[22] = 22


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


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[24]= "25)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[24]= new Array();
 choices[24][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[24][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[24][2] = "Gestionar el Registro de Operadores.";
 choices[24][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[24] = choices[24][3];
 units[24] = "121";
 comments[24] = "Id Pregunta: 24. AGE A1 2015";
 preguntaids[24] = 24


//  Id pregunta: 25 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Mediante qu&eacute; tipo de objetos se implementa el acceso a los recursos gestionados con la tecnolog&iacute;a JMX?";
 choices[25]= new Array();
 choices[25][0] = "SessionBean";
 choices[25][1] = "JavaBean";
 choices[25][2] = "MBeans";
 choices[25][3] = "MessageDrivenBean";
 answers[25] = choices[25][2];
 units[25] = "64";
 comments[25] = "Id Pregunta: 25. AGE A1 2015";
 preguntaids[25] = 25


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[26]= "27)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[26]= new Array();
 choices[26][0] = "Sello electr&oacute;nico";
 choices[26][1] = "Sede electr&oacute;nica";
 choices[26][2] = "Servidor seguro (SSL/TLS)";
 choices[26][3] = "Empleado p&uacute;blico";
 answers[26] = choices[26][2];
 units[26] = "7";
 comments[26] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[26] = 26


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[27]= "28)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[27]= new Array();
 choices[27][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[27][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[27][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[27][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[27] = choices[27][3];
 units[27] = "7";
 comments[27] = "Id Pregunta: 27. AGE A1 2015";
 preguntaids[27] = 27


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[28]= "29)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[28]= new Array();
 choices[28][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[28][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[28][2] = "Crea una copia del proceso que hace la llamada.";
 choices[28][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[28] = choices[28][2];
 units[28] = "57";
 comments[28] = "Id Pregunta: 28. AGE A1 2015";
 preguntaids[28] = 28


//  Id pregunta: 29 Año de creación de pregunta: 2016
 questions[29]= "30)  De acuerdo con el art&iacute;culo 62 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, se&ntilde;ale la respuesta correcta:";
 choices[29]= new Array();
 choices[29][0] = "El uso del dominio p&uacute;blico radioel&eacute;ctrico s&oacute;lo puede ser de dos tipos: especial o privativo.";
 choices[29][1] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico precisa de t&iacute;tulo habilitante.";
 choices[29][2] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se realiza mediante la explotaci&oacute;n en exclusiva, o por un n&uacute;mero limitado de usuarios, de determinadas frecuencias en un mismo &aacute;mbito f&iacute;sico de aplicaci&oacute;n.";
 choices[29][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico es el que se lleve a cabo de las bandas de frecuencias habilitadas para su explotaci&oacute;n de forma compartida, sin limitaci&oacute;n de n&uacute;mero de operadores o usuarios y con las condiciones t&eacute;cnicas y para los servicios que se establezcan en cada caso.";
 answers[29] = choices[29][2];
 units[29] = "121";
 comments[29] = "Id Pregunta: 29. AGE A1 2015";
 preguntaids[29] = 29


//  Id pregunta: 30 Año de creación de pregunta: 2016
 questions[30]= "31)  El sistema operativo OS X El Capit&aacute;n incluye un conjunto de servicios de red para compartir archivos entre Mac y PC, &iquest;cu&aacute;l es el protocolo por defecto que emplea OS X El Capit&aacute;n?";
 choices[30]= new Array();
 choices[30][0] = "SMB3";
 choices[30][1] = "AFP";
 choices[30][2] = "NFS";
 choices[30][3] = "FTP";
 answers[30] = choices[30][0];
 units[30] = "59";
 comments[30] = "Id Pregunta: 30. AGE A1 2015";
 preguntaids[30] = 30


//  Id pregunta: 31 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;Qu&eacute; es MongoDB?";
 choices[31]= new Array();
 choices[31][0] = "Una herramienta Object Relational Mapping (ORM) para facilitar el desarrollo.";
 choices[31][1] = "Una base de datos de c&oacute;digo abierto de documentos tipo JSON.";
 choices[31][2] = "Un sistema gestor de base de datos relacional.";
 choices[31][3] = "Una base de datos jer&aacute;rquica de relaciones encadenadas.";
 answers[31] = choices[31][1];
 units[31] = "73";
 comments[31] = "Id Pregunta: 31. AGE A1 2015";
 preguntaids[31] = 31


//  Id pregunta: 32 Año de creación de pregunta: 2016
 questions[32]= "33)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?";
 choices[32]= new Array();
 choices[32][0] = "ASF-AL (Apache License 2.0)";
 choices[32][1] = "EUPL (European Union Public License)";
 choices[32][2] = "LGPL (Lesser General Public License)";
 choices[32][3] = "MIT(MIT License)";
 answers[32] = choices[32][1];
 units[32] = "43";
 comments[32] = "Id Pregunta: 32. AGE A1 2015";
 preguntaids[32] = 32


//  Id pregunta: 33 Año de creación de pregunta: 2016
 questions[33]= "34)  Respecto al desarrollo empleando tecnolog&iacute;a Microsoft, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[33]= new Array();
 choices[33][0] = "WINAPI (Windows API) permite un acceso a alto nivel del sistema, directamente usable en cualquier lenguaje y entorno de programaci&oacute;n.";
 choices[33][1] = "El framework .NET se compone de una biblioteca de clases denominada FCL (Framework Class Library) y del entorno com&uacute;n de ejecuci&oacute;n CLR (Common Language Runtime).";
 choices[33][2] = "En .NET el resultado de la compilaci&oacute;n de las aplicaciones es un m&oacute;dulo ensamblado en formato de fichero PE32 o PE32+ (Windows portable executable) directamente ejecutable sobre el hardware.";
 choices[33][3] = "Los compiladores para CLR producen c&oacute;digo FL (Final Language) denominado c&oacute;digo administrado.";
 answers[33] = choices[33][1];
 units[33] = "63";
 comments[33] = "Id Pregunta: 33. AGE A1 2015";
 preguntaids[33] = 33


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
 preguntaids[34] = 34


//  Id pregunta: 35 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Qu&eacute; es Java Web Start?";
 choices[35]= new Array();
 choices[35][0] = "Un motor para la ejecuci&oacute;n de Java Serlvets y JavaServer Pages.";
 choices[35][1] = "Una interfaz de programaci&oacute;n para entornos de ventanas en Java.";
 choices[35][2] = "Una tecnolog&iacute;a de compiladores empleada por Java.";
 choices[35][3] = "Una tecnolog&iacute;a que permite descargar y ejecutar aplicaciones Java.";
 answers[35] = choices[35][3];
 units[35] = "64";
 comments[35] = "Id Pregunta: 35. AGE A1 2015";
 preguntaids[35] = 35


//  Id pregunta: 36 Año de creación de pregunta: 2016
 questions[36]= "37)  &iquest;Cu&aacute;l es la interfaz est&aacute;ndar de programaci&oacute;n Java para invocar a m&eacute;todos nativos escritos en otros lenguajes como C o C++?";
 choices[36]= new Array();
 choices[36][0] = "JAXP";
 choices[36][1] = "JNI";
 choices[36][2] = "JNDI";
 choices[36][3] = "JDBC";
 answers[36] = choices[36][1];
 units[36] = "64";
 comments[36] = "Id Pregunta: 36. AGE A1 2015";
 preguntaids[36] = 36


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[37]= "38)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[37]= new Array();
 choices[37][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[37][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[37][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[37][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[37] = choices[37][3];
 units[37] = "66";
 comments[37] = "Id Pregunta: 37. AGE A1 2015";
 preguntaids[37] = 37


//  Id pregunta: 38 Año de creación de pregunta: 2016
 questions[38]= "39)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[38]= new Array();
 choices[38][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[38][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[38][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[38][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[38] = choices[38][3];
 units[38] = "62";
 comments[38] = "Id Pregunta: 38. AGE A1 2015";
 preguntaids[38] = 38


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[39]= new Array();
 choices[39][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[39][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[39][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[39][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[39] = choices[39][2];
 units[39] = "71";
 comments[39] = "Id Pregunta: 39. AGE A1 2015";
 preguntaids[39] = 39


//  Id pregunta: 40 Año de creación de pregunta: 2016
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de contenidos?";
 choices[40]= new Array();
 choices[40][0] = "Drupal";
 choices[40][1] = "Cassandra";
 choices[40][2] = "Wordpress";
 choices[40][3] = "OpenCMS";
 answers[40] = choices[40][1];
 units[40] = "99";
 comments[40] = "Id Pregunta: 40. AGE A1 2015";
 preguntaids[40] = 40


//  Id pregunta: 41 Año de creación de pregunta: 2016
 questions[41]= "42)  En cuanto al an&aacute;lisis DAFO:";
 choices[41]= new Array();
 choices[41][0] = "Considera detallada y exclusivamente factores internos.";
 choices[41][1] = "Es una t&eacute;cnica aplicable dentro de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[41][2] = "Considera detallada y exclusivamente factores externos.";
 choices[41][3] = "Se obtiene como resultado final del proceso de Planificaci&oacute;n Estrat&eacute;gica.";
 answers[41] = choices[41][1];
 units[41] = "83";
 comments[41] = "Id Pregunta: 41. AGE A1 2015";
 preguntaids[41] = 41


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[42]= "43)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[42]= new Array();
 choices[42][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[42][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[42][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[42][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[42] = choices[42][3];
 units[42] = "86";
 comments[42] = "Id Pregunta: 42. AGE A1 2015";
 preguntaids[42] = 42


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[43]= new Array();
 choices[43][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[43][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[43][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[43][3] = "El software funcionando es la medida principal del progreso.";
 answers[43] = choices[43][2];
 units[43] = "34";
 comments[43] = "Id Pregunta: 43. AGE A1 2015";
 preguntaids[43] = 43


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[44]= new Array();
 choices[44][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[44][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[44][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[44][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[44] = choices[44][1];
 units[44] = "60";
 comments[44] = "Id Pregunta: 44. AGE A1 2015";
 preguntaids[44] = 44


//  Id pregunta: 45 Año de creación de pregunta: 2016
 questions[45]= "46)  46. &iquest;Cu&aacute;l de las siguientes NO es una de las APIs incorporadas a HTML5?";
 choices[45]= new Array();
 choices[45][0] = "HTML Drag and Drop, para arrastrar un objeto a otra localizaci&oacute;n.";
 choices[45][1] = "HTML Advanced Search, para parametrizar y modificar el comportamiento de los buscadores.";
 choices[45][2] = "HTML Local Storage, para almacenar datos en el navegador.";
 choices[45][3] = "HTML SSE, para actualizar una p&aacute;gina web autom&aacute;ticamente sin preguntar al servidor.";
 answers[45] = choices[45][1];
 units[45] = "74";
 comments[45] = "Id Pregunta: 45. AGE A1 2015";
 preguntaids[45] = 45


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[46]= "47)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[46]= new Array();
 choices[46][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[46][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[46][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[46][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[46] = choices[46][1];
 units[46] = "76";
 comments[46] = "Id Pregunta: 46. AGE A1 2015";
 preguntaids[46] = 46


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[47]= new Array();
 choices[47][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[47][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[47][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[47][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[47] = choices[47][3];
 units[47] = "78";
 comments[47] = "Id Pregunta: 47. AGE A1 2015";
 preguntaids[47] = 47


//  Id pregunta: 48 Año de creación de pregunta: 2016
 questions[48]= "49)  El Reglamento (UE) 910/2014 del Parlamento Europeo y del Consejo relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior establece:";
 choices[48]= new Array();
 choices[48][0] = "La norma reguladora de los certificados de sede electr&oacute;nica en la Uni&oacute;n Europea.";
 choices[48][1] = "Cinco a&ntilde;os como el periodo m&aacute;ximo de vigencia de los certificados electr&oacute;nicos.";
 choices[48][2] = "La plena prohibici&oacute;n del uso de seud&oacute;nimos en el uso de las transacciones electr&oacute;nicas.";
 choices[48][3] = "La regulaci&oacute;n del certificado de sello electr&oacute;nico y su uso en los servicios p&uacute;blicos.";
 answers[48] = choices[48][3];
 units[48] = "77";
 comments[48] = "Id Pregunta: 48. AGE A1 2015";
 preguntaids[48] = 48


//  Id pregunta: 49 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Qu&eacute; facilita un ORM?";
 choices[49]= new Array();
 choices[49][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[49][1] = "Conversi&oacute;n de objetos a documentos";
 choices[49][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[49][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[49] = choices[49][0];
 units[49] = "62";
 comments[49] = "Id Pregunta: 49. AGE A1 2015";
 preguntaids[49] = 49


//  Id pregunta: 50 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas del DNI electr&oacute;nico es exclusiva del DNIe 3.0?";
 choices[50]= new Array();
 choices[50][0] = "Cumple la norma ISO 7816 para tarjetas inteligentes.";
 choices[50][1] = "Emplea la tecnolog&iacute;a inal&aacute;mbrica NFC.";
 choices[50][2] = "Contiene certificados de componente, autenticaci&oacute;n y firma.";
 choices[50][3] = "Sus certificados cumplen la norma X509 v3.";
 answers[50] = choices[50][1];
 units[50] = "78";
 comments[50] = "Id Pregunta: 50. AGE A1 2015";
 preguntaids[50] = 50


//  Id pregunta: 51 Año de creación de pregunta: 2016
 questions[51]= "52)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[51]= new Array();
 choices[51][0] = "Cifrado de las comunicaciones";
 choices[51][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[51][2] = "Registro de los accesos";
 choices[51][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[51] = choices[51][1];
 units[51] = "35";
 comments[51] = "Id Pregunta: 51. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";
 preguntaids[51] = 51


//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[52]= "53)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[52]= new Array();
 choices[52][0] = "ISO/IEC 25000";
 choices[52][1] = "ISO/IEC 27000";
 choices[52][2] = "ISO 9000";
 choices[52][3] = "ISO 9001";
 answers[52] = choices[52][0];
 units[52] = "93";
 comments[52] = "Id Pregunta: 52. AGE A1 2015";
 preguntaids[52] = 52


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[53]= new Array();
 choices[53][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[53][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[53][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[53][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[53] = choices[53][1];
 units[53] = "84";
 comments[53] = "Id Pregunta: 53. AGE A1 2015";
 preguntaids[53] = 53


//  Id pregunta: 54 Año de creación de pregunta: 2016
 questions[54]= "55)  &iquest;A qu&eacute; tipo de ataque nos referimos cuando se suplanta la identidad de una direcci&oacute;n IP origen?";
 choices[54]= new Array();
 choices[54][0] = "DoS";
 choices[54][1] = "Phishing";
 choices[54][2] = "Sniffing";
 choices[54][3] = "Spoofing";
 answers[54] = choices[54][3];
 units[54] = "119";
 comments[54] = "Id Pregunta: 54. AGE A1 2015";
 preguntaids[54] = 54


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[55]= "56)  WS-Security contiene especificaciones sobre:";
 choices[55]= new Array();
 choices[55][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[55][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[55][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[55][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[55] = choices[55][1];
 units[55] = "119";
 comments[55] = "Id Pregunta: 55. AGE A1 2015";
 preguntaids[55] = 55


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[56]= "57)  En cuanto al Plan de Sistemas de Informaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Sirve como punto de partida del Plan Estrat&eacute;gico de la Organizaci&oacute;n.";
 choices[56][1] = "No es abordado detalladamente dentro de la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3.";
 choices[56][2] = "Fija el plan de proyectos a desarrollar, detallando los m&aacute;s inmediatos.";
 choices[56][3] = "Es un documento r&iacute;gido que debe ser actualizado s&oacute;lo ante discontinuidades de los productos tecnol&oacute;gicos sobre los que se sustenta.";
 answers[56] = choices[56][2];
 units[56] = "83";
 comments[56] = "Id Pregunta: 56. AGE A1 2015";
 preguntaids[56] = 56


//  Id pregunta: 57 Año de creación de pregunta: 2016
 questions[57]= "58)  Con respecto a ITIL se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[57]= new Array();
 choices[57][0] = "Constituye una metodolog&iacute;a exhaustiva de pasos a seguir en el dise&ntilde;o de servicios TI.";
 choices[57][1] = "Da instrucciones de trabajo concretas, asignado tareas a personas.";
 choices[57][2] = "Los organismos tecnol&oacute;gicamente m&aacute;s punteros de la Administraci&oacute;n General del Estado se encuentran certificados en ITIL.";
 choices[57][3] = "Constituye un conjunto de mejores pr&aacute;cticas para la gesti&oacute;n de servicios TI.";
 answers[57] = choices[57][3];
 units[57] = "101";
 comments[57] = "Id Pregunta: 57. AGE A1 2015";
 preguntaids[57] = 57


//  Id pregunta: 58 Año de creación de pregunta: 2016
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[58]= new Array();
 choices[58][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[58][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[58][2] = "Servicio de seguridad gestionada";
 choices[58][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[58] = choices[58][1];
 units[58] = "26";
 comments[58] = "Id Pregunta: 58. AGE A1 2015";
 preguntaids[58] = 58


//  Id pregunta: 59 Año de creación de pregunta: 2016
 questions[59]= "60)  Con respecto a la norma ISO/IEC 20000 de gesti&oacute;n de servicios TI:";
 choices[59]= new Array();
 choices[59][0] = "Permite certificar a individuos a lo largo de diferentes niveles de conocimiento.";
 choices[59][1] = "Impone el uso exclusivo de ITIL como metodolog&iacute;a a seguir.";
 choices[59][2] = "No permite validar la capacidad de un proveedor de servicios TI de gestionar efectivamente servicios TI.";
 choices[59][3] = "Microsoft Operation Framework (MOF) puede ser usado para conseguir su cumplimiento.";
 answers[59] = choices[59][3];
 units[59] = "101";
 comments[59] = "Id Pregunta: 59. AGE A1 2015";
 preguntaids[59] = 59


//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[60]= "61)  El modelo de capacidad de procesos establecido por COBIT v5:";
 choices[60]= new Array();
 choices[60][0] = "No modifica esencialmente el modelo planteado por COBIT v4.1.";
 choices[60][1] = "Define 5 niveles de procesos (proceso incompleto, ejecutado, gestionado, predecible, optimizado).";
 choices[60][2] = "El nivel 1 (proceso ejecutado) s&oacute;lo se alcanza si el proceso alcanza su prop&oacute;sito.";
 choices[60][3] = "Un proceso es optimizado si se ejecuta dentro de los l&iacute;mites definidos para alcanzar sus resultados de proceso.";
 answers[60] = choices[60][2];
 units[60] = "101";
 comments[60] = "Id Pregunta: 60. AGE A1 2015";
 preguntaids[60] = 60


//  Id pregunta: 61 Año de creación de pregunta: 2016
 questions[61]= "62)  Indique a partir de qu&eacute; versi&oacute;n del sistema operativo Android se introdujo la posibilidad de que el usuario pudiera gestionar la concesi&oacute;n de permisos para cada aplicaci&oacute;n:";
 choices[61]= new Array();
 choices[61][0] = "Lollipop";
 choices[61][1] = "Jelly Bean";
 choices[61][2] = "Marshmallow";
 choices[61][3] = "KitKat";
 answers[61] = choices[61][2];
 units[61] = "59";
 comments[61] = "Id Pregunta: 61. AGE A1 2015";
 preguntaids[61] = 61


//  Id pregunta: 62 Año de creación de pregunta: 2016
 questions[62]= "63)  El art&iacute;culo 102 del Real Decreto 1720/2007, por el que se determina la conservaci&oacute;n de una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n de los mismos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, &iquest;a qu&eacute; nivel o niveles de medidas de seguridad es aplicable?";
 choices[62]= new Array();
 choices[62][0] = "B&aacute;sico";
 choices[62][1] = "Medio";
 choices[62][2] = "Alto";
 choices[62][3] = "A los niveles medio y alto";
 answers[62] = choices[62][2];
 units[62] = "35";
 comments[62] = "Id Pregunta: 62. AGE A1 2015";
 preguntaids[62] = 62


//  Id pregunta: 63 Año de creación de pregunta: 2016
 questions[63]= "64)  El modelo de servicio en la nube en el que el consumidor no tiene control sobre la red, los servidores, sistemas operativos o almacenamiento, pero s&iacute; sobre las aplicaciones desplegadas y sobre los ajustes de configuraci&oacute;n de dichas aplicaciones, se denomina:";
 choices[63]= new Array();
 choices[63][0] = "Infrastructure as a Service (IaaS)";
 choices[63][1] = "Platform as a Service (PaaS)";
 choices[63][2] = "Software as a Service (SaaS)";
 choices[63][3] = "Application as a Service (AaaS)";
 answers[63] = choices[63][1];
 units[63] = "52";
 comments[63] = "Id Pregunta: 63. AGE A1 2015";
 preguntaids[63] = 63


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[64]= "65)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[64]= new Array();
 choices[64][0] = "Windows Phone";
 choices[64][1] = "Blackberry";
 choices[64][2] = "iOS";
 choices[64][3] = "Android";
 answers[64] = choices[64][3];
 units[64] = "59";
 comments[64] = "Id Pregunta: 64. AGE A1 2015";
 preguntaids[64] = 64


//  Id pregunta: 65 Año de creación de pregunta: 2016
 questions[65]= "66)  Respecto a las arquitecturas de almacenamiento SAN Fibre Channel, indique la respuesta incorrecta:";
 choices[65]= new Array();
 choices[65][0] = "Cada equipo de la red se identifica de forma un&iacute;voca mediante una direcci&oacute;n de 64 bits.";
 choices[65][1] = "El SNS asigna los FCID y permite traducir de FCID a WWN.";
 choices[65][2] = "Los switches FC intercambian informaci&oacute;n de enrutado de tramas mediante un protocolo del tipo EGP adaptado a las redes FC.";
 choices[65][3] = "La se&ntilde;alizaci&oacute;n del canal de fibra puede funcionar sobre pares de cobre.";
 answers[65] = choices[65][2];
 units[65] = "53";
 comments[65] = "Id Pregunta: 65. AGE A1 2015";
 preguntaids[65] = 65


//  Id pregunta: 66 Año de creación de pregunta: 2016
 questions[66]= "67)  Para los siguientes tipos de copias de seguridad, indique cu&aacute;l de las siguientes secuencias los ordena de mayor a menor tiempo de restauraci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "Incremental, diferencial, completa";
 choices[66][1] = "Completa, incremental, diferencial";
 choices[66][2] = "Completa, diferencial, incremental";
 choices[66][3] = "No hay diferencia en el tiempo de restauraci&oacute;n, encontr&aacute;ndose la diferencia en el espacio de almacenamiento consumido.";
 answers[66] = choices[66][0];
 units[66] = "53";
 comments[66] = "Id Pregunta: 66. AGE A1 2015. Pregunta anulada en el examen real. La opci&oacute;n A dec&iacute;a &quot;Diferencial, incremental, completa&quot;, por lo que ninguna respuesta pod&iacute;a considerarse correcta";
 preguntaids[66] = 66


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[67]= "68)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[67]= new Array();
 choices[67][0] = "IANA";
 choices[67][1] = "ISOC";
 choices[67][2] = "IETF";
 choices[67][3] = "IAB";
 answers[67] = choices[67][0];
 units[67] = "103";
 comments[67] = "Id Pregunta: 67. AGE A1 2015";
 preguntaids[67] = 67


//  Id pregunta: 68 Año de creación de pregunta: 2016
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes opciones se refiere al conjunto de metodolog&iacute;as, procesos, arquitecturas y tecnolog&iacute;as que permiten reunir, depurar y transformar datos de los sistemas transaccionales e informaci&oacute;n desestructurada en informaci&oacute;n estructurada, para su explotaci&oacute;n directa o para su an&aacute;lisis y conversi&oacute;n en conocimiento, dando as&iacute; soporte a la toma de decisiones sobre el negocio?";
 choices[68]= new Array();
 choices[68][0] = "Data Mining (miner&iacute;a de datos)";
 choices[68][1] = "Business Intelligence (inteligencia de negocio)";
 choices[68][2] = "Data Warehouse (almac&eacute;n de datos)";
 choices[68][3] = "An&aacute;lisis OLTP (procesamiento en l&iacute;nea transaccional)";
 answers[68] = choices[68][1];
 units[68] = "72";
 comments[68] = "Id Pregunta: 68. AGE A1 2015";
 preguntaids[68] = 68


//  Id pregunta: 69 Año de creación de pregunta: 2016
 questions[69]= "70)  Los contratos que celebren los poderes adjudicadores se perfeccionan con su:";
 choices[69]= new Array();
 choices[69][0] = "Ejecuci&oacute;n";
 choices[69][1] = "Adjudicaci&oacute;n";
 choices[69][2] = "Licitaci&oacute;n";
 choices[69][3] = "Formalizaci&oacute;n";
 answers[69] = choices[69][3];
 units[69] = "37";
 comments[69] = "Id Pregunta: 69. AGE A1 2015";
 preguntaids[69] = 69


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[70]= new Array();
 choices[70][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[70][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[70][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[70][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[70] = choices[70][0];
 units[70] = "75";
 comments[70] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[70] = 70


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[71]= new Array();
 choices[71][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[71][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[71][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[71][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[71] = choices[71][0];
 units[71] = "86";
 comments[71] = "Id Pregunta: 71. AGE A1 2015";
 preguntaids[71] = 71


//  Id pregunta: 72 Año de creación de pregunta: 2016
 questions[72]= "73)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[72]= new Array();
 choices[72][0] = "OASIS ha definido una notaci&oacute;n gr&aacute;fica est&aacute;ndar para WS-BPEL.";
 choices[72][1] = "BPEL4People es una extensi&oacute;n sobre WS-BPEL realizada para dar cobertura a escenarios que involucran interacci&oacute;n de personas con procesos de negocio.";
 choices[72][2] = "WS-BPEL es un lenguaje dise&ntilde;ado para el control distribuido de la invocaci&oacute;n de diferentes servicios Web que modelan un proceso de negocio.";
 choices[72][3] = "XPDL es una especificaci&oacute;n de lenguaje de definici&oacute;n de procesos creada por OASIS.";
 answers[72] = choices[72][1];
 units[72] = "86";
 comments[72] = "Id Pregunta: 72. AGE A1 2015";
 preguntaids[72] = 72


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[73]= "74)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[73]= new Array();
 choices[73][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[73][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[73][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[73][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[73] = choices[73][1];
 units[73] = "44";
 comments[73] = "Id Pregunta: 73. AGE A1 2015";
 preguntaids[73] = 73


//  Id pregunta: 74 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la opci&oacute;n incorrecta respecto a SMTP:";
 choices[74]= new Array();
 choices[74][0] = "SMTP es capaz de transportar correo a trav&eacute;s de m&uacute;ltiples redes: entre nodos conectados por TCP en Internet, entre nodos conectados en una Intranet TCP/IP aislados por un cortafuegos, o entre nodos en un entorno LAN o WAN que est&eacute;n usando un protocolo de nivel de transporte distinto a TCP.";
 choices[74][1] = "Usando SMTP, un proceso puede transferir correo a otro proceso en la misma red o a otra red mediante un proceso gateway accesible en las dos redes.";
 choices[74][2] = "En SMTP un mensaje de correo puede pasar por una serie de nodos gateway intermedios en su camino desde el emisor al receptor &uacute;ltimo, sirvi&eacute;ndose de mecanismos para decidir el siguiente salto como el sistema de resoluci&oacute;n de nombres de dominio de Internet.";
 choices[74][3] = "En SMTP la transferencia de mensaje ocurre siempre en una conexi&oacute;n &uacute;nica entre el emisor SMTP y el receptor final SMTP.";
 answers[74] = choices[74][3];
 units[74] = "106";
 comments[74] = "Id Pregunta: 74. AGE A1 2015";
 preguntaids[74] = 74


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[75]= "76)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[75]= new Array();
 choices[75][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[75][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[75][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[75][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[75] = choices[75][0];
 units[75] = "35";
 comments[75] = "Id Pregunta: 75. AGE A1 2015";
 preguntaids[75] = 75


//  Id pregunta: 76 Año de creación de pregunta: 2016
 questions[76]= "77)  El proceso de auditor&iacute;a de sistemas de informaci&oacute;n se considera como un proceso:";
 choices[76]= new Array();
 choices[76][0] = "Estrat&eacute;gico";
 choices[76][1] = "Operativo";
 choices[76][2] = "T&aacute;ctico";
 choices[76][3] = "Tecnol&oacute;gico";
 answers[76] = choices[76][0];
 units[76] = "36";
 comments[76] = "Id Pregunta: 76. AGE A1 2015";
 preguntaids[76] = 76


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[77]= "78)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[77]= new Array();
 choices[77][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[77][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[77][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[77][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[77] = choices[77][2];
 units[77] = "47";
 comments[77] = "Id Pregunta: 77. AGE A1 2015";
 preguntaids[77] = 77


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[78]= "79)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[78]= new Array();
 choices[78][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[78][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[78][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[78][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[78] = choices[78][1];
 units[78] = "35";
 comments[78] = "Id Pregunta: 78. AGE A1 2015";
 preguntaids[78] = 78


//  Id pregunta: 79 Año de creación de pregunta: 2016
 questions[79]= "80)  La Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del Registro Contable de Facturas en el Sector P&uacute;blico, prev&eacute; que anualmente se realice una auditor&iacute;a de sistemas para verificar que los correspondientes registros contables de facturas cumplen con las condiciones de funcionamiento previstas en la normativa aplicable. En el &aacute;mbito de la Administraci&oacute;n General del Estado dicha auditor&iacute;a se realizar&aacute; por:";
 choices[79]= new Array();
 choices[79][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[79][1] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 choices[79][2] = "Las Inspecciones Generales de los Servicios";
 choices[79][3] = "La Agencia Estatal de la Administraci&oacute;n Tributaria";
 answers[79] = choices[79][1];
 units[79] = "75";
 comments[79] = "Id Pregunta: 79. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[79] = 79


//  Id pregunta: 80 Año de creación de pregunta: 2016
 questions[80]= "81)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, se&ntilde;ale la respuesta correcta respecto a la auditor&iacute;a de seguridad:";
 choices[80]= new Array();
 choices[80][0] = "Se realizar&aacute;, al menos, cada dieciocho meses para los sistemas de todas las categor&iacute;as, y con car&aacute;cter extraordinario, siempre que se produzcan modificaciones sustanciales en el sistema de informaci&oacute;n, que puedan repercutir en las medidas de seguridad requeridas.";
 choices[80][1] = "El equipo auditor, en el dise&ntilde;o de sus pruebas y revisiones, debe limitarse a la revisi&oacute;n de documentos facilitados por los responsables de la informaci&oacute;n, del servicio y de seguridad.";
 choices[80][2] = "Cuando existan razones que lo justifiquen, dentro de las tareas de la auditoria de seguridad podr&aacute;n incluirse adem&aacute;s la ejecuci&oacute;n de trabajos de consultor&iacute;a.";
 choices[80][3] = "El informe de auditor&iacute;a deber&aacute; dictaminar sobre la adecuaci&oacute;n de las medidas exigidas por el Esquema Nacional de Seguridad, identificar sus deficiencias y proponer las medidas correctoras o complementarias necesarias.";
 answers[80] = choices[80][3];
 units[80] = "46";
 comments[80] = "Id Pregunta: 80. AGE A1 2015";
 preguntaids[80] = 80


//  Id pregunta: 81 Año de creación de pregunta: 2016
 questions[81]= "82)  El lenguaje SPARK es un subconjunto de:";
 choices[81]= new Array();
 choices[81][0] = "Java";
 choices[81][1] = "Fortran";
 choices[81][2] = "Ruby";
 choices[81][3] = "Ada";
 answers[81] = choices[81][3];
 units[81] = "73";
 comments[81] = "Id Pregunta: 81. AGE A1 2015";
 preguntaids[81] = 81


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[82]= "83)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[82]= new Array();
 choices[82][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[82][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[82][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[82][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[82] = choices[82][3];
 units[82] = "41";
 comments[82] = "Id Pregunta: 82. AGE A1 2015";
 preguntaids[82] = 82


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[83]= "84)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[83]= new Array();
 choices[83][0] = "Perceptible";
 choices[83][1] = "Operable";
 choices[83][2] = "Comprensible";
 choices[83][3] = "Robusto";
 answers[83] = choices[83][2];
 units[83] = "42";
 comments[83] = "Id Pregunta: 83. AGE A1 2015";
 preguntaids[83] = 83


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[84]= "85)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[84]= new Array();
 choices[84][0] = "Interchange of Data between Administrations (IDA)";
 choices[84][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[84][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[84][3] = "Interoperability Electronic European Solution (IEES)";
 answers[84] = choices[84][1];
 units[84] = "43";
 comments[84] = "Id Pregunta: 84. AGE A1 2015";
 preguntaids[84] = 84


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[85]= "86)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[85]= new Array();
 choices[85][0] = "Estimaci&oacute;n del riesgo";
 choices[85][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[85][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[85][3] = "Mapa de riesgos";
 answers[85] = choices[85][3];
 units[85] = "45";
 comments[85] = "Id Pregunta: 85. AGE A1 2015";
 preguntaids[85] = 85


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[86]= "87)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[86]= new Array();
 choices[86][0] = "Un a&ntilde;o prorrogable";
 choices[86][1] = "Dos a&ntilde;os no prorrogables";
 choices[86][2] = "Un a&ntilde;o no prorrogable";
 choices[86][3] = "Dos a&ntilde;os prorrogables";
 answers[86] = choices[86][2];
 units[86] = "37";
 comments[86] = "Id Pregunta: 86. AGE A1 2015";
 preguntaids[86] = 86


//  Id pregunta: 87 Año de creación de pregunta: 2016
 questions[87]= "88)  Respecto a la pol&iacute;tica de normalizaci&oacute;n TIC en la Uni&oacute;n Europea, como se&ntilde;ala el Reglamento 1025/2012 del Parlamento y del Consejo, la identificaci&oacute;n de especificaciones t&eacute;cnicas de las TIC admisibles a efectos de referenciaci&oacute;n:";
 choices[87]= new Array();
 choices[87][0] = "Ha de estar siempre basada en normas de estandarizaci&oacute;n nacionales, europeas o internacionales.";
 choices[87][1] = "No deben ser usadas para permitir la interoperabilidad en la contrataci&oacute;n p&uacute;blica, dado que se podr&iacute;an dar situaciones monopol&iacute;sticas.";
 choices[87][2] = "Ser&aacute; realizada por la Comisi&oacute;n, bien a propuesta de un Estado miembro o por iniciativa propia, sin necesidad de ser una norma nacional, europea o internacional, cumpli&eacute;ndose los dem&aacute;s requisitos establecidos en el reglamento.";
 choices[87][3] = "Requieren para su adopci&oacute;n la unanimidad de todos los Estados miembro.";
 answers[87] = choices[87][2];
 units[87] = "48";
 comments[87] = "Id Pregunta: 87. AGE A1 2015";
 preguntaids[87] = 87


//  Id pregunta: 88 Año de creación de pregunta: 2016
 questions[88]= "89)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA Versi&oacute;n 3, &iquest;qu&eacute; tipo de diagrama tiene como objetivo principal la representaci&oacute;n de los aspectos est&aacute;ticos del sistema utilizando diversos mecanismos de abstracci&oacute;n?";
 choices[88]= new Array();
 choices[88][0] = "Diagrama de clases";
 choices[88][1] = "Diagrama de componentes";
 choices[88][2] = "Diagrama de estructura";
 choices[88][3] = "Diagrama de paquetes";
 answers[88] = choices[88][0];
 units[88] = "91";
 comments[88] = "Id Pregunta: 88. AGE A1 2015";
 preguntaids[88] = 88


//  Id pregunta: 89 Año de creación de pregunta: 2016
 questions[89]= "90)  En un contrato cuyo presupuesto es de 100.000 euros sin IVA y se adjudica por 80.000, IVA excluido, la garant&iacute;a definitiva ser&aacute; de:";
 choices[89]= new Array();
 choices[89][0] = "2.400 euros";
 choices[89][1] = "4.000 euros";
 choices[89][2] = "3.200 euros";
 choices[89][3] = "1.600 euros";
 answers[89] = choices[89][1];
 units[89] = "37";
 comments[89] = "Id Pregunta: 89. AGE A1 2015";
 preguntaids[89] = 89


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[90]= "91)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[90]= new Array();
 choices[90][0] = "Categor&iacute;a b&aacute;sica";
 choices[90][1] = "Categor&iacute;a media";
 choices[90][2] = "Categor&iacute;a alta";
 choices[90][3] = "Categor&iacute;a media y alta";
 answers[90] = choices[90][2];
 units[90] = "46";
 comments[90] = "Id Pregunta: 90. AGE A1 2015";
 preguntaids[90] = 90


//  Id pregunta: 91 Año de creación de pregunta: 2016
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes opciones muestra exclusivamente herramientas directamente relacionadas con la realizaci&oacute;n de pruebas para asegurar la calidad del software?";
 choices[91]= new Array();
 choices[91][0] = "JUnit, Artifactory y SonarQube";
 choices[91][1] = "JUnit, Artifactory y Selenium";
 choices[91][2] = "JUnit, SonarQube y Selenium";
 choices[91][3] = "ArtiFactory, SonarQube y Selenium";
 answers[91] = choices[91][2];
 units[91] = "92";
 comments[91] = "Id Pregunta: 91. AGE A1 2015";
 preguntaids[91] = 91


//  Id pregunta: 92 Año de creación de pregunta: 2016
 questions[92]= "93)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[92]= new Array();
 choices[92][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[92][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[92][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[92][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[92] = choices[92][0];
 units[92] = "48";
 comments[92] = "Id Pregunta: 92. AGE A1 2015";
 preguntaids[92] = 92


//  Id pregunta: 93 Año de creación de pregunta: 2016
 questions[93]= "94)  Entre las tecnolog&iacute;as o herramientas utilizadas para trabajar en sistemas de Big Data NO se encuentra:";
 choices[93]= new Array();
 choices[93][0] = "Almacenamiento orientado a columnas";
 choices[93][1] = "Framework MapReduce";
 choices[93][2] = "OLTP";
 choices[93][3] = "Bases de datos clave-valor";
 answers[93] = choices[93][2];
 units[93] = "73";
 comments[93] = "Id Pregunta: 93. AGE A1 2015";
 preguntaids[93] = 93


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia de Apache Hadoop?";
 choices[94]= new Array();
 choices[94][0] = "Es un framework de software libre.";
 choices[94][1] = "Es una base de datos NoSQL.";
 choices[94][2] = "Est&aacute; basado en MapReduce.";
 choices[94][3] = "Puede emplearse en sistemas de datos masivos (Big Data).";
 answers[94] = choices[94][1];
 units[94] = "73";
 comments[94] = "Id Pregunta: 94. AGE A1 2015";
 preguntaids[94] = 94


//  Id pregunta: 95 Año de creación de pregunta: 2016
 questions[95]= "96)  Bajo el paradigma de la Programaci&oacute;n Orientada a Objetos, indique cu&aacute;l de las siguientes proposiciones es falsa:";
 choices[95]= new Array();
 choices[95][0] = "Los objetos se generan a partir de la instanciaci&oacute;n de una clase.";
 choices[95][1] = "El polimorfismo es la propiedad por la que es posible enviar mensajes sint&aacute;cticamente iguales a objetos de tipos distintos.";
 choices[95][2] = "Una clase abstracta puede ser extendida mediante el mecanismo de herencia.";
 choices[95][3] = "La implementaci&oacute;n de una interfaz no se considera polimorfismo.";
 answers[95] = choices[95][3];
 units[95] = "89";
 comments[95] = "Id Pregunta: 95. AGE A1 2015";
 preguntaids[95] = 95


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[96]= "97)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[96]= new Array();
 choices[96][0] = "VMware ESX";
 choices[96][1] = "XenServer";
 choices[96][2] = "Alfresco";
 choices[96][3] = "Microsoft Hyper-V";
 answers[96] = choices[96][2];
 units[96] = "54";
 comments[96] = "Id Pregunta: 96. AGE A1 2015";
 preguntaids[96] = 96


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[97]= "98)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[97]= new Array();
 choices[97][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[97][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[97][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[97][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[97] = choices[97][2];
 units[97] = "22";
 comments[97] = "Id Pregunta: 97. AGE A1 2015";
 preguntaids[97] = 97


//  Id pregunta: 98 Año de creación de pregunta: 2016
 questions[98]= "99)  La tecnolog&iacute;a de software que permite ejecutar al mismo tiempo varios sistemas operativos y aplicaciones en el mismo servidor se denomina:";
 choices[98]= new Array();
 choices[98][0] = "Clustering";
 choices[98][1] = "Deduplicaci&oacute;n";
 choices[98][2] = "Virtualizaci&oacute;n";
 choices[98][3] = "Contenerizaci&oacute;n";
 answers[98] = choices[98][2];
 units[98] = "124";
 comments[98] = "Id Pregunta: 98. AGE A1 2015";
 preguntaids[98] = 98


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[99]= "100)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[99]= new Array();
 choices[99][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[99][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[99][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[99][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[99] = choices[99][2];
 units[99] = "26";
 comments[99] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[99] = 99


//  Id pregunta: 100 Año de creación de pregunta: 2016
 questions[100]= "101)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[100]= new Array();
 choices[100][0] = "Bases de datos orientadas a filas";
 choices[100][1] = "Bases de datos orientadas a documentos";
 choices[100][2] = "Bases de datos de clave/valor";
 choices[100][3] = "Bases de datos orientadas a objetos";
 answers[100] = choices[100][0];
 units[100] = "73";
 comments[100] = "Id Pregunta: 100. ";
 preguntaids[100] = 100


//  Id pregunta: 101 Año de creación de pregunta: 2016
 questions[101]= "102)  El Teorema de Brewer o Principio CAP recoge las siguientes garant&iacute;as:";
 choices[101]= new Array();
 choices[101][0] = "Consistencia (Consistency), Disponibilidad (Availability) y Persistencia (Persistence)";
 choices[101][1] = "Consistencia (Consistency), Disponibilidad (Availability) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[101][2] = "Consistencia (Consistency), Atomicidad (Atomicity) y Tolerancia a la Partici&oacute;n (Partition Tolerance)";
 choices[101][3] = "Confidencialidad (Confidentiality), Autenticidad (Authentication) y Protecci&oacute;n (Protection)";
 answers[101] = choices[101][1];
 units[101] = "73";
 comments[101] = "Id Pregunta: 101. ";
 preguntaids[101] = 101


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[102]= "103)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[102]= new Array();
 choices[102][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[102][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[102][2] = "Se basan en sistemas distribuidos";
 choices[102][3] = "Se basan en el modelo de datos relacional";
 answers[102] = choices[102][2];
 units[102] = "73";
 comments[102] = "Id Pregunta: 102. ";
 preguntaids[102] = 102


//  Id pregunta: 103 Año de creación de pregunta: 2016
 questions[103]= "104)  En qu&eacute; consiste el principio BASE:";
 choices[103]= new Array();
 choices[103][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[103][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[103][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[103][3] = "Todas las anteriores son falsas";
 answers[103] = choices[103][3];
 units[103] = "73";
 comments[103] = "Id Pregunta: 103. ";
 preguntaids[103] = 103


//  Id pregunta: 104 Año de creación de pregunta: 2016
 questions[104]= "105)  Son bases de datos NoSQL:";
 choices[104]= new Array();
 choices[104][0] = "MongoDB y Maria DB";
 choices[104][1] = "HBase y Dynamo";
 choices[104][2] = "MariaDB, Cassandra y BigTable";
 choices[104][3] = "La A) y la C)";
 answers[104] = choices[104][1];
 units[104] = "73";
 comments[104] = "Id Pregunta: 104. ";
 preguntaids[104] = 104


//  Id pregunta: 105 Año de creación de pregunta: 2016
 questions[105]= "106)  Entre las caracter&iacute;sticas de Big Data se encuentra:";
 choices[105]= new Array();
 choices[105][0] = "Gran volumen de informaci&oacute;n";
 choices[105][1] = "Gran variedad de datos";
 choices[105][2] = "Se analizan datos a gran velocidad";
 choices[105][3] = "Todas las anteriores son verdaderas";
 answers[105] = choices[105][3];
 units[105] = "73";
 comments[105] = "Id Pregunta: 105. ";
 preguntaids[105] = 105


//  Id pregunta: 106 Año de creación de pregunta: 2016
 questions[106]= "107)  &iquest;En qu&eacute; consiste el paradigma MapReduce?";
 choices[106]= new Array();
 choices[106][0] = "Map toma un conjunto de datos y lo convierte en otro conjunto donde los elementos individuales son separados en tuplas (pares clave/valor)";
 choices[106][1] = "Reduce obtiene la salida de map como datos de entrada y combina tuplas en un conjunto m&aacute;s peque&ntilde;o de las mismas";
 choices[106][2] = "A) y B) son verdaderas";
 choices[106][3] = "A) es la definici&oacute;n del procedimiento intermedio Shuffle";
 answers[106] = choices[106][2];
 units[106] = "73";
 comments[106] = "Id Pregunta: 106. ";
 preguntaids[106] = 106


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[107]= "108)  Son bases de datos NoSQL orientadas a objetos:";
 choices[107]= new Array();
 choices[107][0] = "GemStone";
 choices[107][1] = "Zope Object DB";
 choices[107][2] = "Las dos anteriores";
 choices[107][3] = "Solo B)";
 answers[107] = choices[107][2];
 units[107] = "73";
 comments[107] = "Id Pregunta: 107. ";
 preguntaids[107] = 107


//  Id pregunta: 108 Año de creación de pregunta: 2016
 questions[108]= "109)  Son proyectos de Apache relacionados con Big Data:";
 choices[108]= new Array();
 choices[108][0] = "Hadoop";
 choices[108][1] = "Spark";
 choices[108][2] = "A) y B)";
 choices[108][3] = "Niguno de los anteriores";
 answers[108] = choices[108][2];
 units[108] = "73";
 comments[108] = "Id Pregunta: 108. ";
 preguntaids[108] = 108


//  Id pregunta: 109 Año de creación de pregunta: 2016
 questions[109]= "110)  Big Data:";
 choices[109]= new Array();
 choices[109][0] = "Solo aplica a datos generados m&aacute;quina a m&aacute;quina (M2M)";
 choices[109][1] = "No puede emplearse para tratar datos no estructurados";
 choices[109][2] = "Suele utilizar tecnolog&iacute;as relacionales a la hora de analizar los datos";
 choices[109][3] = "Ninguna de las anteriores";
 answers[109] = choices[109][3];
 units[109] = "73";
 comments[109] = "Id Pregunta: 109. ";
 preguntaids[109] = 109


//  Id pregunta: 110 Año de creación de pregunta: 2016
 questions[110]= "111)  La Poblaci&oacute;n Activa incluye a:";
 choices[110]= new Array();
 choices[110][0] = "S&oacute;lo a aquellas personas que son empleados por cuenta ajena";
 choices[110][1] = "S&oacute;lo a aquellas personas que son empleadas por cuenta propia o ajena";
 choices[110][2] = "Aquellas personas que tienen empleo y a los desempleados que buscan un empleo de forma activa";
 choices[110][3] = "Todo aquel que desea trabajar";
 answers[110] = choices[110][2];
 units[110] = "15";
 comments[110] = "Id Pregunta: 110. ";
 preguntaids[110] = 110


//  Id pregunta: 111 Año de creación de pregunta: 2016
 questions[111]= "112)  En t&eacute;rminos del mercado laboral, &iquest;Qu&eacute; es la Tasa de Actividad?";
 choices[111]= new Array();
 choices[111][0] = "Ratio entre el total de activos y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[111][1] = "Ratio entre el total de ocupados y la poblaci&oacute;n de 16 a&ntilde;os o m&aacute;s";
 choices[111][2] = "Ratio entre el total de activos y la poblaci&oacute;n total";
 choices[111][3] = "Ratio entre el total de ocupados y el total de activos";
 answers[111] = choices[111][0];
 units[111] = "15";
 comments[111] = "Id Pregunta: 111. ";
 preguntaids[111] = 111


//  Id pregunta: 112 Año de creación de pregunta: 2016
 questions[112]= "113)  &iquest;Qu&eacute; dos magnitudes relaciona la Ley de Okun?";
 choices[112]= new Array();
 choices[112][0] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de inflaci&oacute;n";
 choices[112][1] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la variaci&oacute;n del desempleo";
 choices[112][2] = "La variaci&oacute;n del PIB (Producto Interior Bruto) y la tasa de actividad";
 choices[112][3] = "El valor absoluto del PIB (Producto Interior Bruto) con la tasa de actividad";
 answers[112] = choices[112][1];
 units[112] = "15";
 comments[112] = "Id Pregunta: 112. ";
 preguntaids[112] = 112


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[113]= "114)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[113]= new Array();
 choices[113][0] = "La Seguridad Social";
 choices[113][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[113][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[113][3] = "El Banco de Espa&ntilde;a";
 answers[113] = choices[113][3];
 units[113] = "15";
 comments[113] = "Id Pregunta: 113. ";
 preguntaids[113] = 113


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[114]= "115)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[114]= new Array();
 choices[114][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[114][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[114][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[114][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[114] = choices[114][0];
 units[114] = "15";
 comments[114] = "Id Pregunta: 114. ";
 preguntaids[114] = 114


//  Id pregunta: 115 Año de creación de pregunta: 2016
 questions[115]= "116)  &iquest;Qu&eacute; Tratado Europeo introduce un t&iacute;tulo dedicado al empleo en el Tratado de Roma?";
 choices[115]= new Array();
 choices[115][0] = "El Tratado de Lisboa";
 choices[115][1] = "El Tratado de Amsterdam";
 choices[115][2] = "El Tratado de Niza";
 choices[115][3] = "El Acta &Uacute;nica Europea";
 answers[115] = choices[115][1];
 units[115] = "15";
 comments[115] = "Id Pregunta: 115. ";
 preguntaids[115] = 115


//  Id pregunta: 116 Año de creación de pregunta: 2016
 questions[116]= "117)  &iquest;Cu&aacute;l de las siguientes es una pol&iacute;tica pasiva de empleo?";
 choices[116]= new Array();
 choices[116][0] = "La organizaci&oacute;n de cursos de formaci&oacute;n gratuitos para desempleados";
 choices[116][1] = "La intermediaci&oacute;n en el mercado laboral, es decir, recoger las ofertas de trabajo y cruzarlas con las demandas.";
 choices[116][2] = "Adecuar los planes de estudio a la realidad laboral";
 choices[116][3] = "El pago de subsidios a parados";
 answers[116] = choices[116][3];
 units[116] = "15";
 comments[116] = "Id Pregunta: 116. ";
 preguntaids[116] = 116


//  Id pregunta: 117 Año de creación de pregunta: 2016
 questions[117]= "118)  &iquest;Qui&eacute;n integra el Sistema Nacional de Empleo?";
 choices[117]= new Array();
 choices[117][0] = "El Servicio P&uacute;blico de Empleo Estatal y los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas";
 choices[117][1] = "&Uacute;nicamente los servicios p&uacute;blicos de empleo de las comunidades aut&oacute;nomas ";
 choices[117][2] = "&Uacute;nicamente el Servicio P&uacute;blico de Empleo Estatal";
 choices[117][3] = "El Servicio P&uacute;blico de Empleo Estatal m&aacute;s las ETT (Empresas de Trabajo Temporal) que quieran adherirse";
 answers[117] = choices[117][0];
 units[117] = "15";
 comments[117] = "Id Pregunta: 117. ";
 preguntaids[117] = 117


//  Id pregunta: 118 Año de creación de pregunta: 2016
 questions[118]= "119)  &iquest;C&oacute;mo se concretan anualmente los objetivos de la Estrategia Espa&ntilde;ola de Activaci&oacute;n para el Empleo?";
 choices[118]= new Array();
 choices[118][0] = "Mediante &Oacute;rdenes Ministeriales del Ministerio de Empleo y Seguridad Social";
 choices[118][1] = "Mediante Reales Decretos del Consejo de Ministros";
 choices[118][2] = "Mediante los Planes Anuales de Pol&iacute;tica de Empleo";
 choices[118][3] = "Mediante dictamen del Consejo General del Sistema Nacional de Empleo";
 answers[118] = choices[118][2];
 units[118] = "15";
 comments[118] = "Id Pregunta: 118. ";
 preguntaids[118] = 118


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[119]= "120)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[119]= new Array();
 choices[119][0] = "Anual";
 choices[119][1] = "Mensual";
 choices[119][2] = "Semestral";
 choices[119][3] = "Trimestral";
 answers[119] = choices[119][3];
 units[119] = "15";
 comments[119] = "Id Pregunta: 119. ";
 preguntaids[119] = 119


//  Id pregunta: 120 Año de creación de pregunta: 2016
 questions[120]= "121)  &iquest;Cu&aacute;l es el Real Decreto por el que se aprueba el Estatuto del Consejo de Transparencia y Buen Gobierno?";
 choices[120]= new Array();
 choices[120][0] = "Real Decreto 806/2014, de 19 de septiembre";
 choices[120][1] = "Real Decreto 951/2015, de 23 de octubre";
 choices[120][2] = "Real Decreto 1065/2015, de 27 de noviembre";
 choices[120][3] = "Real Decreto 919/2014, de 31 de octubre";
 answers[120] = choices[120][3];
 units[120] = "22";
 comments[120] = "Id Pregunta: 120. ";
 preguntaids[120] = 120


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[121]= "122)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[121]= new Array();
 choices[121][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[121][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[121][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[121][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[121] = choices[121][2];
 units[121] = "22";
 comments[121] = "Id Pregunta: 121. ";
 preguntaids[121] = 121


//  Id pregunta: 122 Año de creación de pregunta: 2016
 questions[122]= "123)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos NO forma parte de la estructura org&aacute;nica del Consejo de Transparencia y Buen Gobierno seg&uacute;n su Estatuto?";
 choices[122]= new Array();
 choices[122][0] = "El Presidente del Consejo de Transparencia y Buen Gobierno";
 choices[122][1] = "La Direcci&oacute;n General de Transparencia y Buen Gobierno";
 choices[122][2] = "La Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[122][3] = "La Subdirecci&oacute;n General de Reclamaciones";
 answers[122] = choices[122][1];
 units[122] = "22";
 comments[122] = "Id Pregunta: 122. ";
 preguntaids[122] = 122


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[123]= "124)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[123]= new Array();
 choices[123][0] = "Un representante de la Administraci&oacute;n local.";
 choices[123][1] = "Un representante del Tribunal de Cuentas.";
 choices[123][2] = "Un representante del Defensor del Pueblo.";
 choices[123][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[123] = choices[123][0];
 units[123] = "22";
 comments[123] = "Id Pregunta: 123. ";
 preguntaids[123] = 123


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[124]= "125)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[124]= new Array();
 choices[124][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[124][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[124][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[124][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[124] = choices[124][0];
 units[124] = "22";
 comments[124] = "Id Pregunta: 124. ";
 preguntaids[124] = 124


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[125]= "126)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[125]= new Array();
 choices[125][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[125][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[125][2] = "La protecci&oacute;n del medio ambiente.";
 choices[125][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[125] = choices[125][0];
 units[125] = "22";
 comments[125] = "Id Pregunta: 125. ";
 preguntaids[125] = 125


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[126]= "127)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[126]= new Array();
 choices[126][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[126][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[126][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[126][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[126] = choices[126][3];
 units[126] = "22";
 comments[126] = "Id Pregunta: 126. ";
 preguntaids[126] = 126


//  Id pregunta: 127 Año de creación de pregunta: 2016
 questions[127]= "128)  Seg&uacute;n la ley 19/2013, la Reclamaci&oacute;n ante el Consejo de Transparencia y Buen Gobierno:";
 choices[127]= new Array();
 choices[127][0] = "Tiene car&aacute;cter facultativo.";
 choices[127][1] = "Tiene car&aacute;cter potestativo. ";
 choices[127][2] = "Se puede realizar de forma paralela a su impugnaci&oacute;n en v&iacute;a contencioso-administrativa.";
 choices[127][3] = "Se realiza si la impugnaci&oacute;n en v&iacute;a contencioso-administrativa es rechazada.";
 answers[127] = choices[127][1];
 units[127] = "22";
 comments[127] = "Id Pregunta: 127. ";
 preguntaids[127] = 127


//  Id pregunta: 128 Año de creación de pregunta: 2016
 questions[128]= "129)  El Presidente del Consejo de Transparencia y Buen Gobierno ser&aacute; nombrado ";
 choices[128]= new Array();
 choices[128][0] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Parlamento";
 choices[128][1] = "Por un per&iacute;odo no renovable de cuatro a&ntilde;os mediante Real Decreto, a propuesta del Presidente del Gobierno";
 choices[128][2] = "Por un per&iacute;odo no renovable de cinco a&ntilde;os mediante Real Decreto, a propuesta del titular del Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[128][3] = "Por un per&iacute;odo no renovable de seis a&ntilde;os mediante Real Decreto, a propuesta del Consejo de Ministros.";
 answers[128] = choices[128][2];
 units[128] = "22";
 comments[128] = "Id Pregunta: 128. ";
 preguntaids[128] = 128


//  Id pregunta: 129 Año de creación de pregunta: 2016
 questions[129]= "130)  Seg&uacute;n la ley 19/2013 de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno:";
 choices[129]= new Array();
 choices[129][0] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, pero no sus medios y tiempo previsto para su consecuci&oacute;n";
 choices[129][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Consejo de Transparencia la evaluaci&oacute;n del cumplimiento de los planes y programas publicados";
 choices[129][2] = "Las Administraciones P&uacute;blicas publicar&aacute;n los planes y programas anuales y plurianuales en los que se fijen objetivos concretos, as&iacute; como las actividades, medios y tiempo previsto para su consecuci&oacute;n";
 choices[129][3] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado corresponde al Parlamento la evaluaci&oacute;n del cumplimiento de los planes y programas anuales y plurianuales y la elaboraci&oacute;n de un informe anual";
 answers[129] = choices[129][2];
 units[129] = "22";
 comments[129] = "Id Pregunta: 129. ";
 preguntaids[129] = 129


//  Id pregunta: 130 Año de creación de pregunta: 2016
 questions[130]= "131)  Dentro del Pacto Fiscal Europeo de 2012, cu&aacute;l de estos no corresponde a uno de los principales puntos contenidos:";
 choices[130]= new Array();
 choices[130][0] = "La obligaci&oacute;n de mantener el d&eacute;ficit p&uacute;blico por debajo del 3% del PIB.";
 choices[130][1] = "La obligaci&oacute;n de los pa&iacute;ses con una deuda p&uacute;blica superior al 60% del PIB a caer dentro de este l&iacute;mite en 20 a&ntilde;os, a una tasa igual a la vig&eacute;sima parte de la franquicia de cada anualidad.";
 choices[130][2] = "El compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional.";
 choices[130][3] = "El compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,5 % de la PIB y, en aquellos pa&iacute;ses en los que la deuda es inferior al 50 % del PIB, 2%.";
 answers[130] = choices[130][3];
 units[130] = "12";
 comments[130] = "Id Pregunta: 130. Leyes modelo econ&oacute;mico";
 preguntaids[130] = 130


//  Id pregunta: 131 Año de creación de pregunta: 2016
 questions[131]= "132)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[131]= new Array();
 choices[131][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[131][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[131][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[131][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[131] = choices[131][0];
 units[131] = "12";
 comments[131] = "Id Pregunta: 131. Leyes modelo econ&oacute;mico";
 preguntaids[131] = 131


//  Id pregunta: 132 Año de creación de pregunta: 2016
 questions[132]= "133)  Cu&aacute;l de las siguientes leyes no est&aacute; incluida en la reforma tributaria llevada a cabo en el a&ntilde;o 2014:";
 choices[132]= new Array();
 choices[132][0] = "Ley 26/2014, del Impuesto sobre la Renta de las Personas F&iacute;sicas";
 choices[132][1] = "Ley 27/2014, del Impuesto sobre Sociedades";
 choices[132][2] = "Ley 28/2014, de Impuestos Especiales";
 choices[132][3] = "Ley 29/2014, del Impuesto de Valor A&ntilde;adido";
 answers[132] = choices[132][3];
 units[132] = "12";
 comments[132] = "Id Pregunta: 132. Leyes modelo econ&oacute;mico";
 preguntaids[132] = 132


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[133]= "134)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[133]= new Array();
 choices[133][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[133][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[133][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[133][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[133] = choices[133][1];
 units[133] = "12";
 comments[133] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";
 preguntaids[133] = 133


//  Id pregunta: 134 Año de creación de pregunta: 2016
 questions[134]= "135)  La Ley 2/2015, de desindexaci&oacute;n de la econom&iacute;a espa&ntilde;ola, parte de un compromiso del Gobierno en el marco:";
 choices[134]= new Array();
 choices[134][0] = "Del Programa Nacional de Reformas 2015 y 2016.";
 choices[134][1] = "Del Plan de Transformaci&oacute;n Digital 2015-2020.";
 choices[134][2] = "Del Programa Nacional de Reformas 2013 y 2014.";
 choices[134][3] = "Del Pacto Fiscal Europeo de 2012.";
 answers[134] = choices[134][2];
 units[134] = "12";
 comments[134] = "Id Pregunta: 134. Leyes modelo econ&oacute;mico";
 preguntaids[134] = 134


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[135]= "136)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[135]= new Array();
 choices[135][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[135][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[135][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[135][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[135] = choices[135][0];
 units[135] = "12";
 comments[135] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";
 preguntaids[135] = 135


//  Id pregunta: 136 Año de creación de pregunta: 2016
 questions[136]= "137)  La Ley 15/2014, de racionalizaci&oacute;n del Sector P&uacute;blico y otras medidas de reforma administrativa, no incluye:";
 choices[136]= new Array();
 choices[136][0] = "Modificaci&oacute;n de la Ley General Presupuestaria para permitir de manera m&aacute;s eficaz el control de las cuentas corrientes en las que se sit&uacute;an fondos de Tesoro P&uacute;blico.";
 choices[136][1] = "Permiso para la reordenaci&oacute;n de organismos p&uacute;blicos con el fin de mejorar su eficiencia y reducir el gasto p&uacute;blico.";
 choices[136][2] = "Modificaci&oacute;n normativa para hacer uso de certificados electr&oacute;nicos &uacute;nicos para grupos o colectivos de personas f&iacute;sicas.";
 choices[136][3] = "Implantaci&oacute;n del BOE como Tabl&oacute;n Edictal &Uacute;nico para la realizaci&oacute;n de notificaciones administrativas.";
 answers[136] = choices[136][2];
 units[136] = "12";
 comments[136] = "Id Pregunta: 136. Leyes modelo econ&oacute;mico";
 preguntaids[136] = 136


//  Id pregunta: 137 Año de creación de pregunta: 2016
 questions[137]= "138)  La creaci&oacute;n de la Autoridad Independiente de Responsabilidad Fiscal, dentro de la Ley Org&aacute;nica 6/2013, tiene por objeto:";
 choices[137]= new Array();
 choices[137][0] = "Garantizar el cumplimiento efectivo por las Administraciones P&uacute;blicas del principio de estabilidad presupuestaria previsto en el art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola.";
 choices[137][1] = "La evaluaci&oacute;n continua del ciclo presupuestario, del endeudamiento p&uacute;blico, y el an&aacute;lisis de las previsiones econ&oacute;micas.";
 choices[137][2] = "Ejercer sus funciones con autonom&iacute;a e independencia funcional respecto de las Administraciones P&uacute;blicas.";
 choices[137][3] = "Todos las anteriores son ciertas.";
 answers[137] = choices[137][3];
 units[137] = "12";
 comments[137] = "Id Pregunta: 137. Leyes modelo econ&oacute;mico";
 preguntaids[137] = 137


//  Id pregunta: 138 Año de creación de pregunta: 2016
 questions[138]= "139)  La ley que obliga a todas las Administraciones a presentar equilibrio estructural en sus cuentas p&uacute;blicas y establece un l&iacute;mite de deuda como garant&iacute;a de sostenibilidad presupuestaria, es:";
 choices[138]= new Array();
 choices[138][0] = "La Ley Org&aacute;nica 2/2011";
 choices[138][1] = "La Ley Org&aacute;nica 2/2012";
 choices[138][2] = "La Ley Org&aacute;nica 3/2012";
 choices[138][3] = "La Ley Org&aacute;nica 2/2002";
 answers[138] = choices[138][1];
 units[138] = "12";
 comments[138] = "Id Pregunta: 138. Leyes modelo econ&oacute;mico";
 preguntaids[138] = 138


//  Id pregunta: 139 Año de creación de pregunta: 2016
 questions[139]= "140)  Las siglas de SAREB, entidad privada creada por Real Decreto para ayudar al saneamiento del sector financiero espa&ntilde;ol, hacen referencia a:";
 choices[139]= new Array();
 choices[139][0] = "Sociedad de Gesti&oacute;n de Activos Procedentes de la Reestructuraci&oacute;n Bancaria.";
 choices[139][1] = "Static &amp; Active process for REsolution Bank.";
 choices[139][2] = "Sociedad de Ayudas Principales para la Resoluci&oacute;n Bancaria.";
 choices[139][3] = "Super Active REsponse for Banks";
 answers[139] = choices[139][0];
 units[139] = "12";
 comments[139] = "Id Pregunta: 139. Leyes modelo econ&oacute;mico";
 preguntaids[139] = 139


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[140]= "141)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[140]= new Array();
 choices[140][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[140][1] = "Tratarse de un acto no susceptible de recurso";
 choices[140][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[140][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[140] = choices[140][2];
 units[140] = "8";
 comments[140] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";
 preguntaids[140] = 140


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[141]= "142)  El recurso de alzada puede interponerse:";
 choices[141]= new Array();
 choices[141][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[141][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[141][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[141][3] = "Ante el Defensor del Pueblo";
 answers[141] = choices[141][1];
 units[141] = "8";
 comments[141] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";
 preguntaids[141] = 141


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[142]= "143)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[142]= new Array();
 choices[142][0] = "De un mes si el acto fuera presunto";
 choices[142][1] = "De un mes si el acto fuera expreso";
 choices[142][2] = "De un mes en cualquier caso";
 choices[142][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[142] = choices[142][1];
 units[142] = "8";
 comments[142] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";
 preguntaids[142] = 142


//  Id pregunta: 143 Año de creación de pregunta: 2016
 questions[143]= "144)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[143]= new Array();
 choices[143][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[143][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[143][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[143][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[143] = choices[143][2];
 units[143] = "8";
 comments[143] = "Id Pregunta: 143. Ley 39/2015, Art&iacute;culo 122";
 preguntaids[143] = 143


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[144]= "145)  Sobre el recurso de reposici&oacute;n:";
 choices[144]= new Array();
 choices[144][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[144][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[144][2] = "Ha desaparecido en la Ley 39/2015";
 choices[144][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[144] = choices[144][0];
 units[144] = "8";
 comments[144] = "Id Pregunta: 144. Ley 39/2015, Art&iacute;culo 123";
 preguntaids[144] = 144


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[145]= "146)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[145]= new Array();
 choices[145][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[145][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[145][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[145][3] = "Todas las anteriores son ciertas";
 answers[145] = choices[145][3];
 units[145] = "8";
 comments[145] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";
 preguntaids[145] = 145


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[146]= "147)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[146]= new Array();
 choices[146][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[146][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[146][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[146][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[146] = choices[146][0];
 units[146] = "8";
 comments[146] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";
 preguntaids[146] = 146


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[147]= "148)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[147]= new Array();
 choices[147][0] = "Al Gobierno de la naci&oacute;n";
 choices[147][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[147][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[147][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[147] = choices[147][3];
 units[147] = "7";
 comments[147] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";
 preguntaids[147] = 147


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[148]= "149)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[148]= new Array();
 choices[148][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[148][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[148][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[148][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[148] = choices[148][2];
 units[148] = "7";
 comments[148] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";
 preguntaids[148] = 148


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[149]= "150)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[149]= new Array();
 choices[149][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[149][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[149][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[149][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[149] = choices[149][2];
 units[149] = "7";
 comments[149] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";
 preguntaids[149] = 149


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[150]= "151)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[150]= new Array();
 choices[150][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[150][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[150][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[150][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[150] = choices[150][2];
 units[150] = "7";
 comments[150] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[150] = 150


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[151]= "152)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[151]= new Array();
 choices[151][0] = "las personas jur&iacute;dicas ";
 choices[151][1] = "las entidades con personalidad jur&iacute;dica";
 choices[151][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[151][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[151] = choices[151][1];
 units[151] = "7";
 comments[151] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[151] = 151


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[152]= "153)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[152]= new Array();
 choices[152][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[152][1] = "garantizar la conservaci&oacute;n del documento";
 choices[152][2] = "garantizar la autenticidad del documento";
 choices[152][3] = "garantizar la integridad del documento";
 answers[152] = choices[152][0];
 units[152] = "7";
 comments[152] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";
 preguntaids[152] = 152


//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[153]= "154)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[153]= new Array();
 choices[153][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[153][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[153][2] = "a y b son correctas";
 choices[153][3] = "a y b son incorrectas";
 answers[153] = choices[153][0];
 units[153] = "7";
 comments[153] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";
 preguntaids[153] = 153


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[154]= "155)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[154]= new Array();
 choices[154][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[154][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[154][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[154][3] = "todas son correctas";
 answers[154] = choices[154][3];
 units[154] = "7";
 comments[154] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";
 preguntaids[154] = 154


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[155]= "156)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[155]= new Array();
 choices[155][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[155][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[155][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[155][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[155] = choices[155][2];
 units[155] = "7";
 comments[155] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";
 preguntaids[155] = 155


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[156]= "157)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[156]= new Array();
 choices[156][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[156][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[156][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[156][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[156] = choices[156][1];
 units[156] = "7";
 comments[156] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";
 preguntaids[156] = 156


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[157]= "158)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[157]= new Array();
 choices[157][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[157][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[157][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[157][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[157] = choices[157][0];
 units[157] = "7";
 comments[157] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";
 preguntaids[157] = 157


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[158]= "159)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[158]= new Array();
 choices[158][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[158][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[158][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[158][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[158] = choices[158][1];
 units[158] = "7";
 comments[158] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";
 preguntaids[158] = 158


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[159]= "160)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[159]= new Array();
 choices[159][0] = "verbalmente";
 choices[159][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[159][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[159][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[159] = choices[159][2];
 units[159] = "7";
 comments[159] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";
 preguntaids[159] = 159


//  Id pregunta: 160 Año de creación de pregunta: 2016
 questions[160]= "161)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[160]= new Array();
 choices[160][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[160][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[160][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[160][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[160] = choices[160][1];
 units[160] = "19";
 comments[160] = "Id Pregunta: 160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";
 preguntaids[160] = 160


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[161]= "162)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[161]= new Array();
 choices[161][0] = "Principio de solo una vez";
 choices[161][1] = "Apertura y transparencia";
 choices[161][2] = "Confianza y seguridad";
 choices[161][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[161] = choices[161][3];
 units[161] = "19";
 comments[161] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";
 preguntaids[161] = 161


//  Id pregunta: 162 Año de creación de pregunta: 2016
 questions[162]= "163)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones";
 choices[162]= new Array();
 choices[162][0] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[162][1] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 choices[162][2] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 7 d&iacute;as naturales contados a partir de las 00:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 choices[162][3] = "Si no se establece otro plazo distinto, la cesi&oacute;n de datos por parte de los operadores deber&aacute; efectuarse dentro del plazo de 24 horas contados a partir de las 8:00 horas del d&iacute;a natural siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden";
 answers[162] = choices[162][0];
 units[162] = "19";
 comments[162] = "Id Pregunta: 162. La respuesta B es la antigua redacci&oacute;n";
 preguntaids[162] = 162


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[163]= "164)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[163]= new Array();
 choices[163][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[163][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[163][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[163][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[163] = choices[163][0];
 units[163] = "19";
 comments[163] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";
 preguntaids[163] = 163


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[164]= "165)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[164]= new Array();
 choices[164][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[164][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[164][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[164][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[164] = choices[164][1];
 units[164] = "19";
 comments[164] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";
 preguntaids[164] = 164


//  Id pregunta: 165 Año de creación de pregunta: 2016
 questions[165]= "166)  Como parte del Plan de acci&oacute;n sobre administraci&oacute;n electr&oacute;nica para 2010-2020, la Comisi&oacute;n:";
 choices[165]= new Array();
 choices[165][0] = "Tratar&aacute; de interconectar los registros mercantiles en toda la UE.";
 choices[165][1] = "Se adoptar&aacute;n nuevas normas en materia de telecomunicaciones";
 choices[165][2] = "Se revisar&aacute; la Directiva de servicios de comunicaci&oacute;n audiovisual existente para adaptarse a la evoluci&oacute;n tecnol&oacute;gica";
 choices[165][3] = "Se actualizar&aacute;n las normas de comercio electr&oacute;nico";
 answers[165] = choices[165][0];
 units[165] = "19";
 comments[165] = "Id Pregunta: 165. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/";
 preguntaids[165] = 165


//  Id pregunta: 166 Año de creación de pregunta: 2016
 questions[166]= "167)  El indicador de la Comisi&oacute;n Europea &ldquo;DESI&rdquo; (Digital Economy &amp; Society Index) tiene entre sus dimensiones:";
 choices[166]= new Array();
 choices[166][0] = "Interoperabilidad";
 choices[166][1] = "Integridad";
 choices[166][2] = "Capital humano";
 choices[166][3] = "Trazabilidad";
 answers[166] = choices[166][2];
 units[166] = "19";
 comments[166] = "Id Pregunta: 166. https://ec.europa.eu/digital-single-market/en/desi Conectividad, Capital humano, Uso de internet, Integraci&oacute;n de tecnolog&iacute;a digital, Servicios p&uacute;blicos digitales";
 preguntaids[166] = 166


//  Id pregunta: 167 Año de creación de pregunta: 2016
 questions[167]= "168)  Una de las preocupaciones de la Agenda Digital Europea es la &ldquo;exclusi&oacute;n digital&rdquo;. Para combatirla, se incluyen medidas como...";
 choices[167]= new Array();
 choices[167][0] = "incrementar la eficiencia energ&eacute;tica y reducir la energ&iacute;a que se usa en los hogares";
 choices[167][1] = "incrementar el ratio de participaci&oacute;n de personas con discapacidad en actividades p&uacute;blicas, sociales y econ&oacute;micas a trav&eacute;s de proyectos de inclusi&oacute;n.";
 choices[167][2] = "implementar un sistema de firma electr&oacute;nica seguro que funcione en cualquiera de los Estados Miembros";
 choices[167][3] = "apoyar las pol&iacute;ticas del sector audiovisual en pos de las personas con discapacidad";
 answers[167] = choices[167][1];
 units[167] = "19";
 comments[167] = "Id Pregunta: 167. https://ec.europa.eu/digital-single-market/en/digital-inclusion-better-eu-society";
 preguntaids[167] = 167


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[168]= "169)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[168]= new Array();
 choices[168][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[168][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[168][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[168][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[168] = choices[168][2];
 units[168] = "19";
 comments[168] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";
 preguntaids[168] = 168


//  Id pregunta: 169 Año de creación de pregunta: 2016
 questions[169]= "170)  En lo que se refiere a comunicaciones m&oacute;viles en Europa,";
 choices[169]= new Array();
 choices[169][0] = "en 2020 se liberar&aacute;n las bandas de frecuencia superior a 10 Ghz para el despliegue de 5G";
 choices[169][1] = "en 2020 se espera desplegar la red 5G a gran escala.";
 choices[169][2] = "en 2020 se espera desplegar la red 4G-plus.";
 choices[169][3] = "en 2020 se liberar&aacute; la banda de frecuencia de 800 Mhz para finalizar el despliegue de 4G";
 answers[169] = choices[169][1];
 units[169] = "19";
 comments[169] = "Id Pregunta: 169. https://ec.europa.eu/digital-single-market/en/5g-europe-action-plan";
 preguntaids[169] = 169


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[170]= "171)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[170]= new Array();
 choices[170][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[170][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[170][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[170][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[170] = choices[170][2];
 units[170] = "19";
 comments[170] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";
 preguntaids[170] = 170


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[171]= "172)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[171]= new Array();
 choices[171][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[171][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[171][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[171][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[171] = choices[171][3];
 units[171] = "19";
 comments[171] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";
 preguntaids[171] = 171


//  Id pregunta: 172 Año de creación de pregunta: 2016
 questions[172]= "173)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[172]= new Array();
 choices[172][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[172][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[172][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[172][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[172] = choices[172][2];
 units[172] = "1";
 comments[172] = "Id Pregunta: 172. CONSTITUCION1978";
 preguntaids[172] = 172


//  Id pregunta: 173 Año de creación de pregunta: 2016
 questions[173]= "174)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[173]= new Array();
 choices[173][0] = "absoluta de las Cortes Generales.";
 choices[173][1] = "absoluta del Congreso de los Diputados.";
 choices[173][2] = "simple de las Cortes Generales.";
 choices[173][3] = "simple del Congreso de los Diputados.";
 answers[173] = choices[173][3];
 units[173] = "1";
 comments[173] = "Id Pregunta: 173. CONSTITUCION1978";
 preguntaids[173] = 173


//  Id pregunta: 174 Año de creación de pregunta: 2016
 questions[174]= "175)  De conformidad con la Constituci&oacute;n Espa&ntilde;ola, &iquest; cu&aacute;l de los siguientes derechos y libertades es susceptible de tutela a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional?";
 choices[174]= new Array();
 choices[174][0] = "El derecho a la propiedad privada.";
 choices[174][1] = "El derecho de asociaci&oacute;n.";
 choices[174][2] = "El derecho de fundaci&oacute;n.";
 choices[174][3] = "El derecho de negociaci&oacute;n colectiva.";
 answers[174] = choices[174][1];
 units[174] = "1";
 comments[174] = "Id Pregunta: 174. CONSTITUCION1978";
 preguntaids[174] = 174


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[175]= "176)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[175]= new Array();
 choices[175][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[175][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[175][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[175][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[175] = choices[175][1];
 units[175] = "1";
 comments[175] = "Id Pregunta: 175. CONSTITUCION1978";
 preguntaids[175] = 175


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[176]= "177)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[176]= new Array();
 choices[176][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[176][1] = "Solamente el Congreso.";
 choices[176][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[176][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[176] = choices[176][0];
 units[176] = "1";
 comments[176] = "Id Pregunta: 176. CONSTITUCION1978";
 preguntaids[176] = 176


//  Id pregunta: 177 Año de creación de pregunta: 2016
 questions[177]= "178)  El art&iacute;culo 152 de la Constituci&oacute;n espa&ntilde;ola se refiere a la organizaci&oacute;n instituicional b&aacute;sica de cada Comunidad Aut&oacute;noma, la cual se basar&aacute; en:";
 choices[177]= new Array();
 choices[177][0] = "Una Conseller&iacute;a legislativa, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[177][1] = "Una Asamble legislativa, un Presidente, un Delegado de Gobierno y un Comit&eacute; Superior del Poder Judicial.";
 choices[177][2] = "Una Asamble legislativa, un Consejo de Gobierno, un Presidente y un Tribunal Superior de Justicia.";
 choices[177][3] = "Un Consejo legislativo, una Delegaci&oacute;n de Gobierno, un Presidente y un Tribunal Supremo.";
 answers[177] = choices[177][2];
 units[177] = "1";
 comments[177] = "Id Pregunta: 177. CONSTITUCION1978";
 preguntaids[177] = 177


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[178]= "179)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[178]= new Array();
 choices[178][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[178][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[178][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[178][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[178] = choices[178][0];
 units[178] = "1";
 comments[178] = "Id Pregunta: 178. CONSTITUCION1978";
 preguntaids[178] = 178


//  Id pregunta: 179 Año de creación de pregunta: 2016
 questions[179]= "180)  &iquest;Qu&eacute; tipo de ley aprueba los estatutos de autonom&iacute;a?";
 choices[179]= new Array();
 choices[179][0] = "Una ley orginaria.";
 choices[179][1] = "Una ley org&aacute;nica.";
 choices[179][2] = "Una ley de bases.";
 choices[179][3] = "Una ley de transferencia.";
 answers[179] = choices[179][1];
 units[179] = "1";
 comments[179] = "Id Pregunta: 179. CONSTITUCION1978";
 preguntaids[179] = 179


//  Id pregunta: 180 Año de creación de pregunta: 2016
 questions[180]= "181)  Se&ntilde;ale la afirmaci&oacute;n correcta de acuerdo con la regulaci&oacute;n que contiene el Art&iacute;culo 116 de la Constituci&oacute;n Espa&ntilde;ola de los estados de alarma, excepci&oacute;n y sitio:";
 choices[180]= new Array();
 choices[180][0] = "el estado de sitio ser&aacute; declarado por la mayor&iacute;a absoluta del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[180][1] = "El estado de excepci&oacute;n ser&aacute; declarado por el Gobierno mediante Acuerdo de Ministros, previa autorizaci&oacute;n del Senado.";
 choices[180][2] = "El estado de alarma ser&aacute; declarado por la mayor&iacute;a simple del Congreso de los Diputados, a propuesta exclusiva del Gobierno.";
 choices[180][3] = "La declaraci&oacute;n de los estados de alarma, excepci&oacute;n y sitio s&iacute; modificar&aacute;n el principio de responsabilidad del Gobierno y de sus agentes reconocidos en la CE y en las leyes.";
 answers[180] = choices[180][0];
 units[180] = "1";
 comments[180] = "Id Pregunta: 180. CONSTITUCION1978";
 preguntaids[180] = 180


//  Id pregunta: 181 Año de creación de pregunta: 2016
 questions[181]= "182)  El Presidente del Tribunal Constitucional, seg&uacute;n lo establecido en el Art&iacute;culo 160 de la Constituci&oacute;n Espa&ntilde;ola ser&aacute; nombrado entre sus miembros por:";
 choices[181]= new Array();
 choices[181][0] = "l Consejo General del Poder Judicial";
 choices[181][1] = "El pleno de Tribunal Constitucional";
 choices[181][2] = "El Presidente del Gobierno, a propuesta del pleno del Tribunal Constitucional.";
 choices[181][3] = "Por el Rey, a propuesta del mismo Tribunal en pleno.";
 answers[181] = choices[181][3];
 units[181] = "1";
 comments[181] = "Id Pregunta: 181. CONSTITUCION1978";
 preguntaids[181] = 181


//  Id pregunta: 182 Año de creación de pregunta: 2016
 questions[182]= "183)  De acuerdo con el T&iacute;tulo II de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; tutor del Rey menor:";
 choices[182]= new Array();
 choices[182][0] = "El que hubiere designado el familiar m&aacute;s cercano al Rey difunto.";
 choices[182][1] = "El que hubiere designado el Rey difunto en su testamento.";
 choices[182][2] = "El que hubieren designado las Cortes Generales.";
 choices[182][3] = "El que hubiere designado el Senado por mayor&iacute;a absoluta.";
 answers[182] = choices[182][1];
 units[182] = "1";
 comments[182] = "Id Pregunta: 182. CONSTITUCION1978";
 preguntaids[182] = 182


//  Id pregunta: 183 Año de creación de pregunta: 2016
 questions[183]= "184)  Seg&uacute;n el Art&iacute;culo 113 de la Constituci&oacute;n Espa&ntilde;ola, la moci&oacute;n de censura deber&aacute; ser propuesta:";
 choices[183]= new Array();
 choices[183][0] = "al menos por 50 Diputados.";
 choices[183][1] = "al menos por la d&eacute;cima parte de los Diputados.";
 choices[183][2] = "por la Mesa del Congreso de los Diputados.";
 choices[183][3] = "al menos por dos grupos pol&iacute;ticos del Congreso de los Diputados.";
 answers[183] = choices[183][1];
 units[183] = "1";
 comments[183] = "Id Pregunta: 183. CONSTITUCION1978";
 preguntaids[183] = 183


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[184]= "185)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[184]= new Array();
 choices[184][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[184][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[184][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[184][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[184] = choices[184][2];
 units[184] = "1";
 comments[184] = "Id Pregunta: 184. CONSTITUCION1978";
 preguntaids[184] = 184


//  Id pregunta: 185 Año de creación de pregunta: 2016
 questions[185]= "186)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[185]= new Array();
 choices[185][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[185][1] = "Autorizar indultos generales.";
 choices[185][2] = "Sancionar las leyes.";
 choices[185][3] = "Promulgar las leyes.";
 answers[185] = choices[185][1];
 units[185] = "1";
 comments[185] = "Id Pregunta: 185. CONSTITUCION1978";
 preguntaids[185] = 185


//  Id pregunta: 186 Año de creación de pregunta: 2016
 questions[186]= "187)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[186]= new Array();
 choices[186][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[186][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[186][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[186][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[186] = choices[186][2];
 units[186] = "1";
 comments[186] = "Id Pregunta: 186. CONSTITUCION1978";
 preguntaids[186] = 186


//  Id pregunta: 187 Año de creación de pregunta: 2016
 questions[187]= "188)  El Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola establece un plazo de 30 d&iacute;as, para que los Decretos-Leyes sean sometidos a debate y votaci&oacute;n de la totalidad del Congreso de los Diputados, durante el cual:";
 choices[187]= new Array();
 choices[187][0] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento de urgencia.";
 choices[187][1] = "Los Decretos-Leyes podr&aacute;n ser tramitados por las Cortes como proyectos de ley por el procedimiento com&uacute;n.";
 choices[187][2] = "Durante dicho plazo, no pueden ser tramitados ni como proyectos de ley ni como propociones de ley.";
 choices[187][3] = "Durante dicho plazo, s&oacute;lo el Senado puede tramitar los Decretos-Leyes como proyectos de ley por el procedimiento de urgencia.";
 answers[187] = choices[187][0];
 units[187] = "1";
 comments[187] = "Id Pregunta: 187. CONSTITUCION1978";
 preguntaids[187] = 187


//  Id pregunta: 188 Año de creación de pregunta: 2016
 questions[188]= "189)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[188]= new Array();
 choices[188][0] = "No, en ning&uacute;n caso.";
 choices[188][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[188][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[188][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[188] = choices[188][3];
 units[188] = "1";
 comments[188] = "Id Pregunta: 188. CONSTITUCION1978";
 preguntaids[188] = 188


//  Id pregunta: 189 Año de creación de pregunta: 2016
 questions[189]= "190)  De conformidad a lo establecido en la Constituci&oacute;n Espa&ntilde;ola, las Cortes pueden delegar en el Gobierno la potestad de dictar normas con rango de Ley. Cuando se trata de que el Gobierno elabore y apruebe textos articulados esta delegaci&oacute;n tiene que otorgarse mediante:";
 choices[189]= new Array();
 choices[189][0] = "Ley Org&aacute;nica.";
 choices[189][1] = "Ley de Bases.";
 choices[189][2] = "Ley ordinaria.";
 choices[189][3] = "Mandato.";
 answers[189] = choices[189][1];
 units[189] = "1";
 comments[189] = "Id Pregunta: 189. CONSTITUCION1978";
 preguntaids[189] = 189


//  Id pregunta: 190 Año de creación de pregunta: 2016
 questions[190]= "191)  La iniciativa legislativa para la reforma de la Constituci&oacute;n Espa&ntilde;ola de 1978:";
 choices[190]= new Array();
 choices[190][0] = "Le corresponde exclusivamente al congreso y al Senado.";
 choices[190][1] = "Puede ser ejercida por el Tribunal Constitucional.";
 choices[190][2] = "Puede ser instada por las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[190][3] = "Le corresponde exclusivamente al Gobierno.";
 answers[190] = choices[190][2];
 units[190] = "1";
 comments[190] = "Id Pregunta: 190. CONSTITUCION1978";
 preguntaids[190] = 190


//  Id pregunta: 191 Año de creación de pregunta: 2016
 questions[191]= "192)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[191]= new Array();
 choices[191][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[191][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[191][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[191][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[191] = choices[191][2];
 units[191] = "1";
 comments[191] = "Id Pregunta: 191. CONSTITUCION1978";
 preguntaids[191] = 191


//  Id pregunta: 192 Año de creación de pregunta: 2016
 questions[192]= "193)  Seg&uacute;n la Constituci&oacute;n, las poblaciones de Ceuta y Melilla estar&aacute;n representadas por:";
 choices[192]= new Array();
 choices[192][0] = "Un diputado y un senador, cada una de ellas";
 choices[192][1] = "Dos diputados y un senador, cada una de ellas.";
 choices[192][2] = "Un diputado y dos senadores, cada una de ellas";
 choices[192][3] = "dos diputados y dos senadores, cada una de ellas.";
 answers[192] = choices[192][2];
 units[192] = "1";
 comments[192] = "Id Pregunta: 192. CONSTITUCION1978";
 preguntaids[192] = 192


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[193]= "194)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[193]= new Array();
 choices[193][0] = "3 a&ntilde;os.";
 choices[193][1] = "5 a&ntilde;os.";
 choices[193][2] = "4 a&ntilde;os.";
 choices[193][3] = "6 a&ntilde;os.";
 answers[193] = choices[193][1];
 units[193] = "1";
 comments[193] = "Id Pregunta: 193. CONSTITUCION1978";
 preguntaids[193] = 193


//  Id pregunta: 194 Año de creación de pregunta: 2016
 questions[194]= "195)  &iquest;Cu&aacute;ntos miembros componen el Tribunal Constitucional?";
 choices[194]= new Array();
 choices[194][0] = "11";
 choices[194][1] = "12";
 choices[194][2] = "14";
 choices[194][3] = "8";
 answers[194] = choices[194][1];
 units[194] = "1";
 comments[194] = "Id Pregunta: 194. CONSTITUCION1978";
 preguntaids[194] = 194


//  Id pregunta: 195 Año de creación de pregunta: 2016
 questions[195]= "196)  La potestad reglamentaria constitucionalmente corresponde:";
 choices[195]= new Array();
 choices[195][0] = "Al Gobierno.";
 choices[195][1] = "A las Cortes Generales.";
 choices[195][2] = "Al Poder Judicial.";
 choices[195][3] = "Al Congreso de los Diputados.";
 answers[195] = choices[195][0];
 units[195] = "1";
 comments[195] = "Id Pregunta: 195. CONSTITUCION1978";
 preguntaids[195] = 195


//  Id pregunta: 196 Año de creación de pregunta: 2016
 questions[196]= "197)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:";
 choices[196]= new Array();
 choices[196][0] = "Al Presidente del Gobierno.";
 choices[196][1] = "A las Cortes Generales";
 choices[196][2] = "A los electores.";
 choices[196][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[196] = choices[196][3];
 units[196] = "1";
 comments[196] = "Id Pregunta: 196. CONSTITUCION1978";
 preguntaids[196] = 196


//  Id pregunta: 197 Año de creación de pregunta: 2016
 questions[197]= "198)  Los reglamentos aprobados en el ejercicio de la potestad reglamentaria no pueden:";
 choices[197]= new Array();
 choices[197][0] = "Establecer tributos.";
 choices[197][1] = "Desarrollar lo establecido en una Ley.";
 choices[197][2] = "Modificar los plazos para presentar recursos administrativos.";
 choices[197][3] = "Crear un &oacute;rgano colegiado interministerial.";
 answers[197] = choices[197][0];
 units[197] = "1";
 comments[197] = "Id Pregunta: 197. CONSTITUCION1978";
 preguntaids[197] = 197


//  Id pregunta: 198 Año de creación de pregunta: 2016
 questions[198]= "199)  La Constituci&oacute;n Espa&ntilde;ola de 1978, estructura las Cortes Generales en:";
 choices[198]= new Array();
 choices[198][0] = "Dos c&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[198][1] = "Consejo de Ministros y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[198][2] = "Gobierno de la Naci&oacute;n y dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Alta) y Senado (C&aacute;mara Baja).";
 choices[198][3] = "Dos C&aacute;maras: Congreso de los Diputados (C&aacute;mara Baja) y Senado (C&aacute;mara Alta).";
 answers[198] = choices[198][3];
 units[198] = "1";
 comments[198] = "Id Pregunta: 198. CONSTITUCION1978";
 preguntaids[198] = 198


//  Id pregunta: 199 Año de creación de pregunta: 2016
 questions[199]= "200)  &iquest;Cu&aacute;l es la composici&oacute;n del Pleno del Tribunal de Cuentas?";
 choices[199]= new Array();
 choices[199][0] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, uno de los cuales ser&aacute; el Presidente y el Fiscal.";
 choices[199][1] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas, m&aacute;s el Presidente.";
 choices[199][2] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por diez Consejeros de Cuentas.";
 choices[199][3] = "El Pleno de Tribunal de Cuentas est&aacute; integrado por doce Consejeros de Cuentas, m&aacute;s el Presidente.";
 answers[199] = choices[199][0];
 units[199] = "1";
 comments[199] = "Id Pregunta: 199. CONSTITUCION1978";
 preguntaids[199] = 199


//  Id pregunta: 200 Año de creación de pregunta: 2016
 questions[200]= "201)  Se&ntilde;ale la afirmaci&oacute;n correcta. Corresponde al Rey:";
 choices[200]= new Array();
 choices[200][0] = "Nombrar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[200][1] = "Nombrar y separar a los miembros del Gobierno a propuesta de las Cortes Generales.";
 choices[200][2] = "Nombrar y separar a los miembros del Gobierno previa consulta al Presidente del Gobierno.";
 choices[200][3] = "Nombrar y separar a los miembros del Gobierno, a propuesta de su Presidente.";
 answers[200] = choices[200][3];
 units[200] = "1";
 comments[200] = "Id Pregunta: 200. CONSTITUCION1978";
 preguntaids[200] = 200


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[201]= "202)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[201]= new Array();
 choices[201][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[201][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[201][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[201][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[201] = choices[201][2];
 units[201] = "1";
 comments[201] = "Id Pregunta: 201. CONSTITUCION1978";
 preguntaids[201] = 201


//  Id pregunta: 202 Año de creación de pregunta: 2016
 questions[202]= "203)  Se&ntilde;ale c&oacute;mo se re&uacute;nen los miembros del Gobierno:";
 choices[202]= new Array();
 choices[202][0] = "En Consejo de Ministros y en Comisiones Delegadas del Gobierno.";
 choices[202][1] = "En Consejo de Ministros y en Consejo de Vicepresidentes.";
 choices[202][2] = "En Consejo de Ministros y en Comisiones Delegadas de las Cortes Generales.";
 choices[202][3] = "En Comisiones Delegadas del Gobierno y Consejo de Estado.";
 answers[202] = choices[202][0];
 units[202] = "1";
 comments[202] = "Id Pregunta: 202. CONSTITUCION1978";
 preguntaids[202] = 202


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[203]= "204)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[203]= new Array();
 choices[203][0] = "Ley Org&aacute;nica.";
 choices[203][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[203][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[203][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[203] = choices[203][2];
 units[203] = "1";
 comments[203] = "Id Pregunta: 203. CONSTITUCION1978";
 preguntaids[203] = 203


//  Id pregunta: 204 Año de creación de pregunta: 2016
 questions[204]= "205)  Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada reciben el t&iacute;tulo de:";
 choices[204]= new Array();
 choices[204][0] = "Decretos Legislativos.";
 choices[204][1] = "Decretos-leyes.";
 choices[204][2] = "Leyes de bases.";
 choices[204][3] = "Reales Decretos del Consejo de Ministros.";
 answers[204] = choices[204][0];
 units[204] = "1";
 comments[204] = "Id Pregunta: 204. CONSTITUCION1978";
 preguntaids[204] = 204


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[205]= "206)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[205]= new Array();
 choices[205][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[205][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[205][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[205][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[205] = choices[205][1];
 units[205] = "1";
 comments[205] = "Id Pregunta: 205. CONSTITUCION1978";
 preguntaids[205] = 205


//  Id pregunta: 206 Año de creación de pregunta: 2016
 questions[206]= "207)  La alteraci&oacute;n de los l&iacute;mites de una provincia debe ser aprobada por:";
 choices[206]= new Array();
 choices[206][0] = "El Gobierno.";
 choices[206][1] = "La Asamblea de la Comunidad Aut&oacute;noma a la que pertenezca la provincia.";
 choices[206][2] = "Las Cortes Generales, mediante ley org&aacute;nica.";
 choices[206][3] = "Una Comisi&oacute;n formada por los senadores designados en esa provincia.";
 answers[206] = choices[206][2];
 units[206] = "1";
 comments[206] = "Id Pregunta: 206. CONSTITUCION1978";
 preguntaids[206] = 206


//  Id pregunta: 207 Año de creación de pregunta: 2016
 questions[207]= "208)  La representaci&oacute;n ordinaria del Estado en las Comunidades Aut&oacute;nomas corresponde a:";
 choices[207]= new Array();
 choices[207][0] = "El Delegado del Gobierno.";
 choices[207][1] = "El Subdelegado del Gobierno.";
 choices[207][2] = "El Presidente de la Comunidad Aut&oacute;noma.";
 choices[207][3] = "El Gobernador Civil.";
 answers[207] = choices[207][2];
 units[207] = "1";
 comments[207] = "Id Pregunta: 207. CONSTITUCION1978";
 preguntaids[207] = 207


//  Id pregunta: 208 Año de creación de pregunta: 2016
 questions[208]= "209)  La direcci&oacute;n de la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado corresponde a:";
 choices[208]= new Array();
 choices[208][0] = "El Rey.";
 choices[208][1] = "El Jefe del Estado.";
 choices[208][2] = "El Gobierno.";
 choices[208][3] = "El Presidente del Gobierno.";
 answers[208] = choices[208][2];
 units[208] = "1";
 comments[208] = "Id Pregunta: 208. CONSTITUCION1978";
 preguntaids[208] = 208


//  Id pregunta: 209 Año de creación de pregunta: 2016
 questions[209]= "210)  Corresponde aprobar el proyecto de Ley de Presupuestos Generales del Estado a:";
 choices[209]= new Array();
 choices[209][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[209][1] = "El Congreso de los Diputados.";
 choices[209][2] = "Las Cortes Generales.";
 choices[209][3] = "El Consejo de Ministros";
 answers[209] = choices[209][3];
 units[209] = "1";
 comments[209] = "Id Pregunta: 209. CONSTITUCION1978";
 preguntaids[209] = 209


//  Id pregunta: 210 Año de creación de pregunta: 2016
 questions[210]= "211)  De acuerdo con la Constituci&oacute;n espa&ntilde;ola, la declaraci&oacute;n del estado de excepci&oacute;n corresponde a:";
 choices[210]= new Array();
 choices[210][0] = "El rey, a propuesta del Gobierno.";
 choices[210][1] = "El Gobierno, mediante Decreto acordado en Consejo de Ministros, previa autorizaci&oacute;n del Congreso de los Diputados.";
 choices[210][2] = "El Congreso de los Diputados, a propuesta del Consejo de Ministros.";
 choices[210][3] = "Las Cortes Generales, por mayor&iacute;a de los miembros de cada C&aacute;mara.";
 answers[210] = choices[210][1];
 units[210] = "1";
 comments[210] = "Id Pregunta: 210. CONSTITUCION1978";
 preguntaids[210] = 210


//  Id pregunta: 211 Año de creación de pregunta: 2016
 questions[211]= "212)  &iquest;A cu&aacute;ntos miembros del Tribunal Constitucional corresponde proponer al Gobierno?";
 choices[211]= new Array();
 choices[211][0] = "Cuatro.";
 choices[211][1] = "Ninguno.";
 choices[211][2] = "Dos.";
 choices[211][3] = "Seis.";
 answers[211] = choices[211][2];
 units[211] = "1";
 comments[211] = "Id Pregunta: 211. CONSTITUCION1978";
 preguntaids[211] = 211


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[212]= "213)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[212]= new Array();
 choices[212][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[212][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[212][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[212][3] = "El Senado se compone de 350 senadores.";
 answers[212] = choices[212][0];
 units[212] = "1";
 comments[212] = "Id Pregunta: 212. CONSTITUCION1978";
 preguntaids[212] = 212


//  Id pregunta: 213 Año de creación de pregunta: 2016
 questions[213]= "214)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[213]= new Array();
 choices[213][0] = "Cinco.";
 choices[213][1] = "Dos.";
 choices[213][2] = "Cuatro.";
 choices[213][3] = "Siete.";
 answers[213] = choices[213][0];
 units[213] = "1";
 comments[213] = "Id Pregunta: 213. CONSTITUCION1978";
 preguntaids[213] = 213


//  Id pregunta: 214 Año de creación de pregunta: 2016
 questions[214]= "215)  Seg&uacute;n el T&iacute;tulo II de la Constituci&oacute;n Espa&ntilde;ola relativo a la Corona:";
 choices[214]= new Array();
 choices[214][0] = "La Regencia se ejercer&aacute; por mandato constitucional y siempre en nombre del Rey.";
 choices[214][1] = "Las abdicaciones y renuncias en el orden sucesorio se resolver&aacute;n por ley ordinaria.";
 choices[214][2] = "El Pr&iacute;ncipe heredero podr&aacute; asumir la Regencia durante su minor&iacute;a de edad.";
 choices[214][3] = "La Regencia podr&aacute; ejercerse por nacionales de cualquier Estado.";
 answers[214] = choices[214][0];
 units[214] = "1";
 comments[214] = "Id Pregunta: 214. CONSTITUCION1978";
 preguntaids[214] = 214


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[215]= "216)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[215]= new Array();
 choices[215][0] = "Publicidad.";
 choices[215][1] = "Constituci&oacute;n.";
 choices[215][2] = "Legalidad.";
 choices[215][3] = "Creaci&oacute;n.";
 answers[215] = choices[215][0];
 units[215] = "1";
 comments[215] = "Id Pregunta: 215. CONSTITUCION1978";
 preguntaids[215] = 215


//  Id pregunta: 216 Año de creación de pregunta: 2016
 questions[216]= "217)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, est&aacute;n legitimados para interponer el recurso de inconstitucionalidad:";
 choices[216]= new Array();
 choices[216][0] = "El Presidente del Gobierno.";
 choices[216][1] = "El Consejo de Ministros.";
 choices[216][2] = "40 Diputados.";
 choices[216][3] = "El Ministerio Fiscal.";
 answers[216] = choices[216][0];
 units[216] = "1";
 comments[216] = "Id Pregunta: 216. CONSTITUCION1978";
 preguntaids[216] = 216


//  Id pregunta: 217 Año de creación de pregunta: 2016
 questions[217]= "218)  Tal y como marca la Constituci&oacute;n Espa&ntilde;ola de 1978, en el caso de los refer&eacute;ndums consultivos:";
 choices[217]= new Array();
 choices[217][0] = "Su propuesta parte del Presidente del Gobierno, ha de ser autorizada por el Congreso de los Diputados.";
 choices[217][1] = "Son propuestos por el Consejo de Ministros, siendo autorizados previamente por el Presidente del Gobierno.";
 choices[217][2] = "Son refrendados por el Rey.";
 choices[217][3] = "Son convocados por el Presidente del Gobierno.";
 answers[217] = choices[217][0];
 units[217] = "1";
 comments[217] = "Id Pregunta: 217. CONSTITUCION1978";
 preguntaids[217] = 217


//  Id pregunta: 218 Año de creación de pregunta: 2016
 questions[218]= "219)  Seg&uacute;n el T&iacute;tulo III &quot;De las Cortes Generales&quot; de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras podr&aacute;n:";
 choices[218]= new Array();
 choices[218][0] = "Recibir peticiones individuales y colectivas, siempre por escrito, quedando prohibida la presentaci&oacute;n directa por manifestaciones ciudadanas.";
 choices[218][1] = "Delegar en las Comisiones Legislativas Permanentes la aprobaci&oacute;n de proyectos o proposiciones de ley relativas a cuestiones internacionales.";
 choices[218][2] = "Reunirse en sesi&oacute;n extraordinaria a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 choices[218][3] = "Nombrar conjuntamente Comisiones de Investigaci&oacute;n sobre asuntos de inter&eacute;s p&uacute;blico. Sus conclusiones ser&aacute;n vinculantes para los Tribunales.";
 answers[218] = choices[218][0];
 units[218] = "1";
 comments[218] = "Id Pregunta: 218. CONSTITUCION1978";
 preguntaids[218] = 218


//  Id pregunta: 219 Año de creación de pregunta: 2016
 questions[219]= "220)  Seg&uacute;n establece el Art&iacute;culo 86 de la Constituci&oacute;n Espa&ntilde;ola, los Decretos-Leyes son normas con rango de Ley que aprueba el Gobierno:";
 choices[219]= new Array();
 choices[219][0] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad y una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[219][1] = "Sin mediar delegaci&oacute;n de las Cortes, aunque deben ser inmediatamente sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 choices[219][2] = "En casos de extraordinaria y urgente necesidad sin mediar delegaci&oacute;n de las Cortes, aunque una vez aprobados deben ser tramitados como proyectos de ley por el procedimiento de urgencia.";
 choices[219][3] = "Previa delegaci&oacute;n de las Cortes, para casos de extraordinaria y urgente necesidad, y que una vez aprobados deben ser sometidos a debate y votaci&oacute;n de totalidad al Congreso de los Diputados.";
 answers[219] = choices[219][1];
 units[219] = "1";
 comments[219] = "Id Pregunta: 219. CONSTITUCION1978";
 preguntaids[219] = 219


//  Id pregunta: 220 Año de creación de pregunta: 2016
 questions[220]= "221)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:";
 choices[220]= new Array();
 choices[220][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[220][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[220][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[220][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[220] = choices[220][0];
 units[220] = "1";
 comments[220] = "Id Pregunta: 220. CONSTITUCION1978";
 preguntaids[220] = 220


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[221]= "222)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[221]= new Array();
 choices[221][0] = "De los derechos y deberes fundamentales.";
 choices[221][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[221][2] = "Derechos y libertades.";
 choices[221][3] = "De la Corona.";
 answers[221] = choices[221][0];
 units[221] = "1";
 comments[221] = "Id Pregunta: 221. CONSTITUCION1978";
 preguntaids[221] = 221


//  Id pregunta: 222 Año de creación de pregunta: 2016
 questions[222]= "223)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[222]= new Array();
 choices[222][0] = "Dos Cap&iacute;tulos.";
 choices[222][1] = "Tres Cap&iacute;tulos.";
 choices[222][2] = "Un Cap&iacute;tulo.";
 choices[222][3] = "Cuatro Cap&iacute;tulos.";
 answers[222] = choices[222][1];
 units[222] = "1";
 comments[222] = "Id Pregunta: 222. CONSTITUCION1978";
 preguntaids[222] = 222


//  Id pregunta: 223 Año de creación de pregunta: 2016
 questions[223]= "224)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, durante el periodo de su mandato los Diputados y Senadores gozar&aacute;n asimismo de inmunidad y s&oacute;lo podr&aacute;n ser detenidos en caso de flagrante delito. No podr&aacute;n ser inculpados ni procesados sin la previa autorizaci&oacute;n:";
 choices[223]= new Array();
 choices[223][0] = "De la C&aacute;mara respectiva.";
 choices[223][1] = "Del Rey.";
 choices[223][2] = "Del Tribunal Constitucional.";
 choices[223][3] = "Del Tribunal Supremo.";
 answers[223] = choices[223][0];
 units[223] = "1";
 comments[223] = "Id Pregunta: 223. CONSTITUCION1978";
 preguntaids[223] = 223


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[224]= "225)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[224]= new Array();
 choices[224][0] = "Art&iacute;culo 16.2.";
 choices[224][1] = "Art&iacute;culo 17.1.";
 choices[224][2] = "Art&iacute;culo 18.1.";
 choices[224][3] = "Art&iacute;culo 18.2.";
 answers[224] = choices[224][2];
 units[224] = "1";
 comments[224] = "Id Pregunta: 224. CONSTITUCION1978";
 preguntaids[224] = 224


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[225]= "226)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[225]= new Array();
 choices[225][0] = "las Cortes generales.";
 choices[225][1] = "los partidos pol&iacute;ticos.";
 choices[225][2] = "los sindicatos.";
 choices[225][3] = "las Comunidades Aut&oacute;nomas.";
 answers[225] = choices[225][1];
 units[225] = "1";
 comments[225] = "Id Pregunta: 225. CONSTITUCION1978";
 preguntaids[225] = 225


//  Id pregunta: 226 Año de creación de pregunta: 2016
 questions[226]= "227)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[226]= new Array();
 choices[226][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[226][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[226][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[226][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[226] = choices[226][0];
 units[226] = "1";
 comments[226] = "Id Pregunta: 226. CONSTITUCION1978";
 preguntaids[226] = 226


//  Id pregunta: 227 Año de creación de pregunta: 2016
 questions[227]= "228)  En relaci&oacute;n con el Defensor del Pueblo, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[227]= new Array();
 choices[227][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[227][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[227][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[227][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[227] = choices[227][3];
 units[227] = "1";
 comments[227] = "Id Pregunta: 227. CONSTITUCION1978";
 preguntaids[227] = 227


//  Id pregunta: 228 Año de creación de pregunta: 2016
 questions[228]= "229)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[228]= new Array();
 choices[228][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[228][1] = "La delimitaci&oacute;n de su territorio.";
 choices[228][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[228][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[228] = choices[228][2];
 units[228] = "1";
 comments[228] = "Id Pregunta: 228. CONSTITUCION1978";
 preguntaids[228] = 228


//  Id pregunta: 229 Año de creación de pregunta: 2016
 questions[229]= "230)  De acuerdo con lo previsto en la Constituci&oacute;n Espa&ntilde;ola, el Gobierno y la administraci&oacute;n aut&oacute;noma de las provincias estar&aacute;n encomendados:";
 choices[229]= new Array();
 choices[229][0] = "A Diputaciones u otras Corporaciones de car&aacute;cter representativo.";
 choices[229][1] = "A los Subdelegados del Gobierno y a los Directores Insulares.";
 choices[229][2] = "A las Diputaciones y a las Mancomunidades de Municipios.";
 choices[229][3] = "A las Diputaciones y a las Comarcas.";
 answers[229] = choices[229][3];
 units[229] = "1";
 comments[229] = "Id Pregunta: 229. CONSTITUCION1978";
 preguntaids[229] = 229


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[230]= "231)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[230]= new Array();
 choices[230][0] = "Por Real Decreto.";
 choices[230][1] = "Por Orden del Ministerio del Interior.";
 choices[230][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[230][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[230] = choices[230][2];
 units[230] = "1";
 comments[230] = "Id Pregunta: 230. CONSTITUCION1978";
 preguntaids[230] = 230


//  Id pregunta: 231 Año de creación de pregunta: 2016
 questions[231]= "232)  La convocatoria a refer&eacute;ndum en los casos previstos en la Constituci&oacute;n corresponde a:";
 choices[231]= new Array();
 choices[231][0] = "El Presidente del Congreso de los Diputados.";
 choices[231][1] = "El Presidente del Gobierno.";
 choices[231][2] = "El Rey.";
 choices[231][3] = "El Consejo de Ministros.";
 answers[231] = choices[231][0];
 units[231] = "1";
 comments[231] = "Id Pregunta: 231. CONSTITUCION1978";
 preguntaids[231] = 231


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[232]= "233)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[232]= new Array();
 choices[232][0] = "El Presidente del Senado.";
 choices[232][1] = "El Defensor del Pueblo.";
 choices[232][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[232][3] = "El Presidente del Gobierno.";
 answers[232] = choices[232][2];
 units[232] = "1";
 comments[232] = "Id Pregunta: 232. CONSTITUCION1978";
 preguntaids[232] = 232


//  Id pregunta: 233 Año de creación de pregunta: 2016
 questions[233]= "234)  Seg&uacute;n el Art&iacute;culo 75 de la Constituci&oacute;n Espa&ntilde;ola, las C&aacute;maras pueden delegar en las Comisiones Legislativas Permanentes:";
 choices[233]= new Array();
 choices[233][0] = "La aprobaci&oacute;n de proyectos o proposiciones de ley.";
 choices[233][1] = "La convalidaci&oacute;n de decretos-leyes.";
 choices[233][2] = "La aprobaci&oacute;n de proyectos de leyes de bases.";
 choices[233][3] = "La aprobaci&oacute;n de proyectos de leyes org&aacute;nicas.";
 answers[233] = choices[233][2];
 units[233] = "1";
 comments[233] = "Id Pregunta: 233. CONSTITUCION1978";
 preguntaids[233] = 233


//  Id pregunta: 234 Año de creación de pregunta: 2016
 questions[234]= "235)  De conformidad con el Art&iacute;culo 97 de la Constituci&oacute;n Espa&ntilde;ola, corresponde dirigir la pol&iacute;tica interior y exterior, la Administraci&oacute;n civil y militar y la defensa del Estado:";
 choices[234]= new Array();
 choices[234][0] = "Al Jefe del Estado, por corresponderle el mando supremo de las Fuerzas Armadas.";
 choices[234][1] = "A las Cortes Generales, como representaci&oacute;n del pueblo espa&ntilde;ol.";
 choices[234][2] = "Al Congreso de los Diputados.";
 choices[234][3] = "Al Gobierno.";
 answers[234] = choices[234][0];
 units[234] = "1";
 comments[234] = "Id Pregunta: 234. CONSTITUCION1978";
 preguntaids[234] = 234


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[235]= "236)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[235]= new Array();
 choices[235][0] = "El Jefe del Estado.";
 choices[235][1] = "El Tribunal Constitucional.";
 choices[235][2] = "El Congreso de los Diputados.";
 choices[235][3] = "Las Cortes Generales.";
 answers[235] = choices[235][0];
 units[235] = "1";
 comments[235] = "Id Pregunta: 235. CONSTITUCION1978";
 preguntaids[235] = 235


//  Id pregunta: 236 Año de creación de pregunta: 2016
 questions[236]= "237)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[236]= new Array();
 choices[236][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[236][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[236][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[236][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[236] = choices[236][3];
 units[236] = "1";
 comments[236] = "Id Pregunta: 236. CONSTITUCION1978";
 preguntaids[236] = 236


//  Id pregunta: 237 Año de creación de pregunta: 2016
 questions[237]= "238)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[237]= new Array();
 choices[237][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[237][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[237][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[237][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[237] = choices[237][2];
 units[237] = "1";
 comments[237] = "Id Pregunta: 237. CONSTITUCION1978";
 preguntaids[237] = 237


//  Id pregunta: 238 Año de creación de pregunta: 2016
 questions[238]= "239)  En caso de dimisi&oacute;n del Presidente del Gobierno:";
 choices[238]= new Array();
 choices[238][0] = "El Gobierno cesa a continuaci&oacute;n.";
 choices[238][1] = "El Rey podr&aacute; proponer, a trav&eacute;s del Presidente del Congreso, un nuevo candidato a la Presidencia del Gobierno.";
 choices[238][2] = "El Pleno del Congreso, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 choices[238][3] = "El Pleno del Congreso y del Senado, por mayor&iacute;a absoluta, podr&aacute; proponer al Rey un nuevo candidato a la Presidencia del Gobierno.";
 answers[238] = choices[238][1];
 units[238] = "1";
 comments[238] = "Id Pregunta: 238. CONSTITUCION1978";
 preguntaids[238] = 238


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[239]= "240)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[239]= new Array();
 choices[239][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[239][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[239][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[239][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[239] = choices[239][0];
 units[239] = "1";
 comments[239] = "Id Pregunta: 239. CONSTITUCION1978";
 preguntaids[239] = 239


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[240]= "241)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[240]= new Array();
 choices[240][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[240][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[240][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[240][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[240] = choices[240][0];
 units[240] = "1";
 comments[240] = "Id Pregunta: 240. CONSTITUCION1978";
 preguntaids[240] = 240


//  Id pregunta: 241 Año de creación de pregunta: 2016
 questions[241]= "242)  A trav&eacute;s de la moci&oacute;n de censura se exige la responsabilidad pol&iacute;tica del Gobierno:";
 choices[241]= new Array();
 choices[241][0] = "A propuesta de la d&eacute;cima parte de los Diputados y los Senadores representados en las c&aacute;maras, en la que incluir&aacute;n un candidato a Presidente del Gobierno.";
 choices[241][1] = "Mediante su adopci&oacute;n por mayor&iacute;a absoluta de las Cortes Generales.";
 choices[241][2] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a presidente del Gobierno. No podr&aacute; ser votada hasta que transcurran cinco d&iacute;as desde su presentaci&oacute;n y se adoptar&aacute; por mayor&iacute;a absoluta del Congreso de los Diputados.";
 choices[241][3] = "A propuesta de la d&eacute;cima parte de los Diputados, que incluir&aacute; un candidato a Presidente del Gobierno. Su adopci&oacute;n requiere mayor&iacute;a absoluta en una primera votaci&oacute;n y mayor&iacute;a simple en una segunda votaci&oacute;n.";
 answers[241] = choices[241][0];
 units[241] = "1";
 comments[241] = "Id Pregunta: 241. CONSTITUCION1978";
 preguntaids[241] = 241


//  Id pregunta: 242 Año de creación de pregunta: 2016
 questions[242]= "243)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, es competencia del Rey:";
 choices[242]= new Array();
 choices[242][0] = "Refrendar los actos del Presidente de Gobierno.";
 choices[242][1] = "Previa autorizaci&oacute;n del Presidente de Gobierno, declarar la guerra y hacer la paz.";
 choices[242][2] = "El Alto Patronazgo de las Reales Academias.";
 choices[242][3] = "Sancionar y publicar las leyes.";
 answers[242] = choices[242][2];
 units[242] = "1";
 comments[242] = "Id Pregunta: 242. CONSTITUCION1978";
 preguntaids[242] = 242


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[243]= "244)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[243]= new Array();
 choices[243][0] = "Art&iacute;culo 70.";
 choices[243][1] = "Art&iacute;culo 54.";
 choices[243][2] = "Articulo 62.";
 choices[243][3] = "Articulo 55. 5.";
 answers[243] = choices[243][2];
 units[243] = "1";
 comments[243] = "Id Pregunta: 243. CONSTITUCION1978";
 preguntaids[243] = 243


//  Id pregunta: 244 Año de creación de pregunta: 2016
 questions[244]= "245)  La Constituci&oacute;n Espa&ntilde;ola, en el art&iacute;culo 9 del T&iacute;tulo Preliminar, garantiza el principio de:";
 choices[244]= new Array();
 choices[244][0] = "Retroactividad de las disposiciones sancionadoras no favorables de derechos individuales.";
 choices[244][1] = "Publicidad de las normas.";
 choices[244][2] = "Defensa jur&iacute;dica ante los tribunales.";
 choices[244][3] = "Coordinaci&oacute;n normativa.";
 answers[244] = choices[244][2];
 units[244] = "1";
 comments[244] = "Id Pregunta: 244. CONSTITUCION1978";
 preguntaids[244] = 244


//  Id pregunta: 245 Año de creación de pregunta: 2016
 questions[245]= "246)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[245]= new Array();
 choices[245][0] = "De los derechos y deberes fundamentales.";
 choices[245][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[245][2] = "Derechos y libertades.";
 choices[245][3] = "De la Corona.";
 answers[245] = choices[245][1];
 units[245] = "1";
 comments[245] = "Id Pregunta: 245. CONSTITUCION1978";
 preguntaids[245] = 245


//  Id pregunta: 246 Año de creación de pregunta: 2016
 questions[246]= "247)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[246]= new Array();
 choices[246][0] = "Dos Cap&iacute;tulos.";
 choices[246][1] = "Tres Cap&iacute;tulos.";
 choices[246][2] = "Un Cap&iacute;tulo.";
 choices[246][3] = "Cuatro Cap&iacute;tulos.";
 answers[246] = choices[246][1];
 units[246] = "1";
 comments[246] = "Id Pregunta: 246. CONSTITUCION1978";
 preguntaids[246] = 246


//  Id pregunta: 247 Año de creación de pregunta: 2016
 questions[247]= "248)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la Regencia se ejercer&aacute;:";
 choices[247]= new Array();
 choices[247][0] = "Por mandato constitucional y siempre en nombre del Rey.";
 choices[247][1] = "Por Orden Ministerial.";
 choices[247][2] = "Por mandato constitucional y siempre en nombre del pueblo espa&ntilde;ol.";
 choices[247][3] = "Por mandato de las Cortes Generales y siempre en nombre del pueblo espa&ntilde;ol.";
 answers[247] = choices[247][0];
 units[247] = "1";
 comments[247] = "Id Pregunta: 247. CONSTITUCION1978";
 preguntaids[247] = 247


//  Id pregunta: 248 Año de creación de pregunta: 2016
 questions[248]= "249)  El T&iacute;tulo II de la Constituci&oacute;n finaliza en el Art&iacute;culo:";
 choices[248]= new Array();
 choices[248][0] = "61";
 choices[248][1] = "53";
 choices[248][2] = "65";
 choices[248][3] = "67";
 answers[248] = choices[248][1];
 units[248] = "1";
 comments[248] = "Id Pregunta: 248. CONSTITUCION1978";
 preguntaids[248] = 248


//  Id pregunta: 249 Año de creación de pregunta: 2016
 questions[249]= "250)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[249]= new Array();
 choices[249][0] = "Art&iacute;culo 16.2.";
 choices[249][1] = "Art&iacute;culo 17.1.";
 choices[249][2] = "Art&iacute;culo 18.1.";
 choices[249][3] = "Art&iacute;culo 18.2.";
 answers[249] = choices[249][0];
 units[249] = "1";
 comments[249] = "Id Pregunta: 249. CONSTITUCION1978";
 preguntaids[249] = 249


//  Id pregunta: 250 Año de creación de pregunta: 2016
 questions[250]= "251)  La Constituci&oacute;n Espa&ntilde;ola propugna como valores superiores de su ordenamiento jur&iacute;dico:";
 choices[250]= new Array();
 choices[250][0] = "La Libertad, la Democracia, la Igualdad y la Justicia.";
 choices[250][1] = "La Libertad, la Justicia, la Seguridad y promover el bien de cuantos la integran.";
 choices[250][2] = "La Soberan&iacute;a, el Sufragio Universal, la Unidad de la Naci&oacute;n espa&ntilde;ola y el derecho a la autonom&iacute;a de las nacionalidades y regiones que la integran.";
 choices[250][3] = "La Justicia, el Pluralismo Pol&iacute;tico, la Igualdad, y la Libertad.";
 answers[250] = choices[250][2];
 units[250] = "1";
 comments[250] = "Id Pregunta: 250. CONSTITUCION1978";
 preguntaids[250] = 250


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[251]= "252)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[251]= new Array();
 choices[251][0] = "Rey.";
 choices[251][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[251][2] = "Constituci&oacute;n.";
 choices[251][3] = "Pueblo.";
 answers[251] = choices[251][2];
 units[251] = "1";
 comments[251] = "Id Pregunta: 251. CONSTITUCION1978";
 preguntaids[251] = 251


//  Id pregunta: 252 Año de creación de pregunta: 2016
 questions[252]= "253)  La Constituci&oacute;n garantiza el principio de irretroactividad:";
 choices[252]= new Array();
 choices[252][0] = "De las disposiciones favorables.";
 choices[252][1] = "De las disposiciones sancionadoras no favorables.";
 choices[252][2] = "De las disposiciones no restrictivas de derechos individuales.";
 choices[252][3] = "Las respuestas b) y c) son correctas.";
 answers[252] = choices[252][3];
 units[252] = "1";
 comments[252] = "Id Pregunta: 252. CONSTITUCION1978";
 preguntaids[252] = 252


//  Id pregunta: 253 Año de creación de pregunta: 2016
 questions[253]= "254)  La Constituci&oacute;n Espa&ntilde;ola establece sobre la inform&aacute;tica que:";
 choices[253]= new Array();
 choices[253][0] = "La Ley potenciar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de residencia y las transacciones electr&oacute;nicas en el marco de la econom&iacute;a de mercado y la planificaci&oacute;n del desarrollo econ&oacute;mico nacional.";
 choices[253][1] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el secreto de las comunicaciones, la informaci&oacute;n veraz y la solidaridad entre todos los ciudadanos.";
 choices[253][2] = "En la Constituci&oacute;n Espa&ntilde;ola de 1978 no se hace referencia expresa a la inform&aacute;tica.";
 choices[253][3] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 answers[253] = choices[253][3];
 units[253] = "1";
 comments[253] = "Id Pregunta: 253. CONSTITUCION1978";
 preguntaids[253] = 253


//  Id pregunta: 254 Año de creación de pregunta: 2016
 questions[254]= "255)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[254]= new Array();
 choices[254][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[254][1] = "La libertad sexual y religiosa.";
 choices[254][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[254][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[254] = choices[254][3];
 units[254] = "1";
 comments[254] = "Id Pregunta: 254. CONSTITUCION1978";
 preguntaids[254] = 254


//  Id pregunta: 255 Año de creación de pregunta: 2016
 questions[255]= "256)  La soberan&iacute;a nacional reside en:";
 choices[255]= new Array();
 choices[255][0] = "el Parlamento nacional.";
 choices[255][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[255][2] = "el pueblo espa&ntilde;ol.";
 choices[255][3] = "el Congreso y el Senado.";
 answers[255] = choices[255][3];
 units[255] = "1";
 comments[255] = "Id Pregunta: 255. CONSTITUCION1978";
 preguntaids[255] = 255


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[256]= "257)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[256]= new Array();
 choices[256][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[256][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[256][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[256][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[256] = choices[256][0];
 units[256] = "1";
 comments[256] = "Id Pregunta: 256. CONSTITUCION1978";
 preguntaids[256] = 256


//  Id pregunta: 257 Año de creación de pregunta: 2016
 questions[257]= "258)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[257]= new Array();
 choices[257][0] = "El Presidente y su gabinete.";
 choices[257][1] = "El Presidente y sus Ministros.";
 choices[257][2] = "El Rey y el Presidente.";
 choices[257][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[257] = choices[257][2];
 units[257] = "1";
 comments[257] = "Id Pregunta: 257. CONSTITUCION1978";
 preguntaids[257] = 257


//  Id pregunta: 258 Año de creación de pregunta: 2016
 questions[258]= "259)  El Art&iacute;culo 137 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Estado se organiza territorialmente en:";
 choices[258]= new Array();
 choices[258][0] = "Municipios, provincias y CCAA.";
 choices[258][1] = "En 17 CCAA m&aacute;s Ceuta y Melilla.";
 choices[258][2] = "En CCAA, 50 provincias y municipios.";
 choices[258][3] = "En municipios, en provincias, entidades locales menores y CCAA.";
 answers[258] = choices[258][2];
 units[258] = "1";
 comments[258] = "Id Pregunta: 258. CONSTITUCION1978";
 preguntaids[258] = 258


//  Id pregunta: 259 Año de creación de pregunta: 2016
 questions[259]= "260)  La iniciativa legislativa corresponde:";
 choices[259]= new Array();
 choices[259][0] = "Al Congreso y al Senado, &uacute;nicamente.";
 choices[259][1] = "Al rey y al Gobierno.";
 choices[259][2] = "Al Congreso, al Senado y al Rey.";
 choices[259][3] = "Al Gobierno, al Congreso y al Senado.";
 answers[259] = choices[259][3];
 units[259] = "1";
 comments[259] = "Id Pregunta: 259. CONSTITUCION1978";
 preguntaids[259] = 259


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[260]= "261)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[260]= new Array();
 choices[260][0] = "117.5";
 choices[260][1] = "117.1";
 choices[260][2] = "116";
 choices[260][3] = "15";
 answers[260] = choices[260][0];
 units[260] = "1";
 comments[260] = "Id Pregunta: 260. CONSTITUCION1978";
 preguntaids[260] = 260


//  Id pregunta: 261 Año de creación de pregunta: 2016
 questions[261]= "262)  &iquest;Qui&eacute;n representa al Consejo General del Poder Judicial?";
 choices[261]= new Array();
 choices[261][0] = "La Comisi&oacute;n Permanente.";
 choices[261][1] = "El Presidente.";
 choices[261][2] = "El Pleno.";
 choices[261][3] = "El Vicepresidente.";
 answers[261] = choices[261][3];
 units[261] = "1";
 comments[261] = "Id Pregunta: 261. CONSTITUCION1978";
 preguntaids[261] = 261


//  Id pregunta: 262 Año de creación de pregunta: 2016
 questions[262]= "263)  &iquest;Cu&aacute;l de las siguientes no es una jurisdicci&oacute;n especial?:";
 choices[262]= new Array();
 choices[262][0] = "Constitucional.";
 choices[262][1] = "Penal.";
 choices[262][2] = "Militar.";
 choices[262][3] = "Tribunales consuetudinarios.";
 answers[262] = choices[262][0];
 units[262] = "1";
 comments[262] = "Id Pregunta: 262. CONSTITUCION1978";
 preguntaids[262] = 262


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[263]= "264)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[263]= new Array();
 choices[263][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[263][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[263][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[263][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[263] = choices[263][1];
 units[263] = "1";
 comments[263] = "Id Pregunta: 263. CONSTITUCION1978";
 preguntaids[263] = 263


//  Id pregunta: 264 Año de creación de pregunta: 2016
 questions[264]= "265)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[264]= new Array();
 choices[264][0] = "Veinte.";
 choices[264][1] = "Quince.";
 choices[264][2] = "Diez.";
 choices[264][3] = "Doce.";
 answers[264] = choices[264][1];
 units[264] = "1";
 comments[264] = "Id Pregunta: 264. CONSTITUCION1978";
 preguntaids[264] = 264


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[265]= "266)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[265]= new Array();
 choices[265][0] = "El Presidente del Senado";
 choices[265][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[265][2] = "El Presidente del Gobierno";
 choices[265][3] = "El Presidente de las Cortes Generales";
 answers[265] = choices[265][2];
 units[265] = "1";
 comments[265] = "Id Pregunta: 265. CONSTITUCION1978";
 preguntaids[265] = 265


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[266]= "267)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[266]= new Array();
 choices[266][0] = "El Segundo.";
 choices[266][1] = "El Primero.";
 choices[266][2] = "El Preliminar.";
 choices[266][3] = "El Tercero.";
 answers[266] = choices[266][0];
 units[266] = "1";
 comments[266] = "Id Pregunta: 266. CONSTITUCION1978";
 preguntaids[266] = 266


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[267]= "268)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[267]= new Array();
 choices[267][0] = "Los Derechos y Deberes fundamentales.";
 choices[267][1] = "La Corona.";
 choices[267][2] = "El Poder Judicial.";
 choices[267][3] = "Las Cortes Generales.";
 answers[267] = choices[267][2];
 units[267] = "1";
 comments[267] = "Id Pregunta: 267. CONSTITUCION1978";
 preguntaids[267] = 267


//  Id pregunta: 268 Año de creación de pregunta: 2016
 questions[268]= "269)  Las Disposiciones Adicionales en la Constituci&oacute;n Espa&ntilde;ola son:";
 choices[268]= new Array();
 choices[268][0] = "Cuatro.";
 choices[268][1] = "Una.";
 choices[268][2] = "Cinco.";
 choices[268][3] = "Nueve.";
 answers[268] = choices[268][2];
 units[268] = "1";
 comments[268] = "Id Pregunta: 268. CONSTITUCION1978";
 preguntaids[268] = 268


//  Id pregunta: 269 Año de creación de pregunta: 2016
 questions[269]= "270)  El T&iacute;tulo Segundo de la Constituci&oacute;n Espa&ntilde;ola tiene:";
 choices[269]= new Array();
 choices[269][0] = "Diez art&iacute;culos.";
 choices[269][1] = "Nueve art&iacute;culos.";
 choices[269][2] = "Once art&iacute;culos.";
 choices[269][3] = "Ocho art&iacute;culos.";
 answers[269] = choices[269][0];
 units[269] = "1";
 comments[269] = "Id Pregunta: 269. CONSTITUCION1978";
 preguntaids[269] = 269


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[270]= "271)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[270]= new Array();
 choices[270][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[270][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[270][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[270][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[270] = choices[270][0];
 units[270] = "1";
 comments[270] = "Id Pregunta: 270. CONSTITUCION1978";
 preguntaids[270] = 270


//  Id pregunta: 271 Año de creación de pregunta: 2016
 questions[271]= "272)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[271]= new Array();
 choices[271][0] = "Ley org&aacute;nica.";
 choices[271][1] = "Ley ordinaria.";
 choices[271][2] = "Ley de bases.";
 choices[271][3] = "Ley marco.";
 answers[271] = choices[271][0];
 units[271] = "1";
 comments[271] = "Id Pregunta: 271. CONSTITUCION1978";
 preguntaids[271] = 271


//  Id pregunta: 272 Año de creación de pregunta: 2016
 questions[272]= "273)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[272]= new Array();
 choices[272][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[272][1] = "Anteriormente se denominaba Sonar.";
 choices[272][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[272][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[272] = choices[272][2];
 units[272] = "92";
 comments[272] = "Id Pregunta: 272. INTEGRACION CONTINUA";
 preguntaids[272] = 272


//  Id pregunta: 273 Año de creación de pregunta: 2016
 questions[273]= "274)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[273]= new Array();
 choices[273][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[273][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[273][2] = "Solamente soporta herramientas de control de versiones como CVS, Gity Clearcase.";
 choices[273][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[273] = choices[273][1];
 units[273] = "92";
 comments[273] = "Id Pregunta: 273. INTEGRACION CONTINUA";
 preguntaids[273] = 273


//  Id pregunta: 274 Año de creación de pregunta: 2016
 questions[274]= "275)  La Ley 19/2013 de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno ha establecido el derecho:";
 choices[274]= new Array();
 choices[274][0] = "Al acceso a la informaci&oacute;n p&uacute;blica, en desarrollo de los t&eacute;rminos ya previstos por la Ley 11/2007, de acceso electr&oacute;nico de los ciudadano a los servicios p&uacute;blicos.";
 choices[274][1] = "Al acceso a la informaci&oacute;n p&uacute;blica, por primera vez en nuestra legislaci&oacute;n positiva.";
 choices[274][2] = "Al acceso a la informaci&oacute;n p&uacute;blica a trav&eacute;s del portal de transparencia.";
 choices[274][3] = "Al acceso a la informaci&oacute;n p&uacute;blica, con las limitaciones derivadas del posible perjuicio para la defensa, seguridad nacional o funciones administrativas de inspecci&oacute;n, entre otras.";
 answers[274] = choices[274][3];
 units[274] = "22";
 comments[274] = "Id Pregunta: 274. LEY DE TRANSPARENCIA";
 preguntaids[274] = 274


//  Id pregunta: 275 Año de creación de pregunta: 2016
 questions[275]= "276)  &iquest;Cu&aacute;l NO es una funci&oacute;n de la oficina de transparencia y acceso a la informaci&oacute;n?";
 choices[275]= new Array();
 choices[275][0] = "Actuar como unidad de informaci&oacute;n del Ministerio de la Presidencia, en los t&eacute;rminos previstos en el art&iacute;culo 21 de la Ley 19/2013, de 9 de diciembre.";
 choices[275][1] = "La atenci&oacute;n a los ciudadanos sobre el modo de acceso a los servicios y procedimientos en materias propias del departamento.";
 choices[275][2] = "Actuar como observatorio de la transparencia, acceso a la informaci&oacute;n y buen Gobierno.";
 choices[275][3] = "La tramitaci&oacute;n de las quejas y sugerencias que pudieran derivarse del funcionamiento de los servicios de competencia del departamento.";
 answers[275] = choices[275][2];
 units[275] = "22";
 comments[275] = "Id Pregunta: 275. LEY DE TRANSPARENCIA";
 preguntaids[275] = 275


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[276]= "277)  Se&ntilde;ale la respuesta falsa";
 choices[276]= new Array();
 choices[276][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[276][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[276][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[276][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[276] = choices[276][3];
 units[276] = "22";
 comments[276] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";
 preguntaids[276] = 276


//  Id pregunta: 277 Año de creación de pregunta: 2016
 questions[277]= "278)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[277]= new Array();
 choices[277][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[277][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[277][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[277][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[277] = choices[277][2];
 units[277] = "22";
 comments[277] = "Id Pregunta: 277. LEY DE TRANSPARENCIA";
 preguntaids[277] = 277


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[278]= "279)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[278]= new Array();
 choices[278][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[278][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[278][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[278][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[278] = choices[278][1];
 units[278] = "22";
 comments[278] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";
 preguntaids[278] = 278


//  Id pregunta: 279 Año de creación de pregunta: 2016
 questions[279]= "280)  Se&ntilde;ale la respuesta correcta:";
 choices[279]= new Array();
 choices[279][0] = "Six Pack&quot; se refiere a 6 medidas legislativas adoptadas en el &aacute;mbito de la Uni&oacute;n Europea con la finalidad de reforzar la gobernanza presupuestaria y econ&oacute;mica.";
 choices[279][1] = "El &ldquo;Two-Pack&rdquo; consta de dos reglamentos destinados a aumentar a&uacute;n m&aacute;s la integraci&oacute;n y la convergencia econ&oacute;micas entre los Estados miembros de la zona del euro.";
 choices[279][2] = "Las respuestas A y B son correctas.";
 choices[279][3] = "Las respuestas A y B son falsas.";
 answers[279] = choices[279][2];
 units[279] = "5";
 comments[279] = "Id Pregunta: 279. UNION EUROPEA";
 preguntaids[279] = 279


//  Id pregunta: 280 Año de creación de pregunta: 2016
 questions[280]= "281)  El pacto fiscal europeo de 2012 incluye:";
 choices[280]= new Array();
 choices[280][0] = "Un conjunto de reglas, llamadas &quot;reglas de oro&quot;, que son vinculantes en la UE para el principio de equilibrio presupuestario.";
 choices[280][1] = "Un compromiso de contar con un d&eacute;ficit estructural que no debe superar el 0,6% de la PIB.";
 choices[280][2] = "Un compromiso de poner las nuevas reglas en la constituci&oacute;n o en otras partes de la legislaci&oacute;n nacional, lo cual no necesita ser verificado por el Tribunal de Justicia de la Uni&oacute;n Europea.";
 choices[280][3] = "La obligaci&oacute;n de mantener siempre el d&eacute;ficit p&uacute;blico por debajo del 2.8 % del PIB.";
 answers[280] = choices[280][0];
 units[280] = "5";
 comments[280] = "Id Pregunta: 280. UNION EUROPEA";
 preguntaids[280] = 280


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[281]= "282)  Se&ntilde;ale la respuesta falsa:";
 choices[281]= new Array();
 choices[281][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[281][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[281][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[281][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[281] = choices[281][3];
 units[281] = "5";
 comments[281] = "Id Pregunta: 281. UNION EUROPEA";
 preguntaids[281] = 281


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[282]= "283)  Sobre el Plan Juncker:";
 choices[282]= new Array();
 choices[282][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[282][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[282][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[282][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[282] = choices[282][1];
 units[282] = "5";
 comments[282] = "Id Pregunta: 282. UNION EUROPEA";
 preguntaids[282] = 282


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[283]= "284)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[283]= new Array();
 choices[283][0] = "Crecimiento inteligente.";
 choices[283][1] = "Crecimiento inclusivo.";
 choices[283][2] = "Crecimiento sostenible.";
 choices[283][3] = "Crecimiento integrador.";
 answers[283] = choices[283][1];
 units[283] = "5";
 comments[283] = "Id Pregunta: 283. UNION EUROPEA";
 preguntaids[283] = 283


//  Id pregunta: 284 Año de creación de pregunta: 2016
 questions[284]= "285)  Se&ntilde;ale la respuesta falsa:";
 choices[284]= new Array();
 choices[284][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[284][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[284][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[284][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[284] = choices[284][2];
 units[284] = "5";
 comments[284] = "Id Pregunta: 284. UNION EUROPEA";
 preguntaids[284] = 284


//  Id pregunta: 285 Año de creación de pregunta: 2016
 questions[285]= "286)  &iquest;Cu&aacute;l no es un obst&aacute;culo que dificulta la Agenda Digital para Europa?";
 choices[285]= new Array();
 choices[285][0] = "la fragmentaci&oacute;n de los mercados digitales.";
 choices[285][1] = "las diferencias tarifarias de los servicios de la sociedad de la informaci&oacute;n entre los miembros de la UE.";
 choices[285][2] = "la falta de interoperabilidad.";
 choices[285][3] = "el incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes.";
 answers[285] = choices[285][1];
 units[285] = "5";
 comments[285] = "Id Pregunta: 285. UNION EUROPEA";
 preguntaids[285] = 285


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[286]= "287)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[286]= new Array();
 choices[286][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[286][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[286][2] = "Iniciativa europea de libre flujo de datos.";
 choices[286][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[286] = choices[286][2];
 units[286] = "5";
 comments[286] = "Id Pregunta: 286. UNION EUROPEA";
 preguntaids[286] = 286


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[287]= "288)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[287]= new Array();
 choices[287][0] = "Versi&oacute;n digital prioritaria.";
 choices[287][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[287][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[287][3] = "Apertura y transparencia.";
 answers[287] = choices[287][0];
 units[287] = "5";
 comments[287] = "Id Pregunta: 287. UNION EUROPEA";
 preguntaids[287] = 287


//  Id pregunta: 288 Año de creación de pregunta: 2016
 questions[288]= "289)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[288]= new Array();
 choices[288][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[288][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[288][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[288][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[288] = choices[288][2];
 units[288] = "5";
 comments[288] = "Id Pregunta: 288. UNION EUROPEA";
 preguntaids[288] = 288


//  Id pregunta: 289 Año de creación de pregunta: 2016
 questions[289]= "290)  La duraci&oacute;n del mandato del Defensor del Pueblo Europeo es de:";
 choices[289]= new Array();
 choices[289][0] = "Tres a&ntilde;os.";
 choices[289][1] = "Dos a&ntilde;os y medio.";
 choices[289][2] = "Cinco a&ntilde;os.";
 choices[289][3] = "Seis a&ntilde;os.";
 answers[289] = choices[289][2];
 units[289] = "5";
 comments[289] = "Id Pregunta: 289. UNION EUROPEA";
 preguntaids[289] = 289


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[290]= "291)  El Parlamento Europeo celebrar&aacute;:";
 choices[290]= new Array();
 choices[290][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[290][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[290][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[290][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[290] = choices[290][0];
 units[290] = "5";
 comments[290] = "Id Pregunta: 290. UNION EUROPEA";
 preguntaids[290] = 290


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[291]= "292)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[291]= new Array();
 choices[291][0] = "Tres a&ntilde;os.";
 choices[291][1] = "Dos a&ntilde;os y medio.";
 choices[291][2] = "Cinco a&ntilde;os.";
 choices[291][3] = "Seis a&ntilde;os.";
 answers[291] = choices[291][3];
 units[291] = "5";
 comments[291] = "Id Pregunta: 291. UNION EUROPEA";
 preguntaids[291] = 291


//  Id pregunta: 292 Año de creación de pregunta: 2016
 questions[292]= "293)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[292]= new Array();
 choices[292][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[292][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[292][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[292][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[292] = choices[292][1];
 units[292] = "5";
 comments[292] = "Id Pregunta: 292. UNION EUROPEA";
 preguntaids[292] = 292


//  Id pregunta: 293 Año de creación de pregunta: 2016
 questions[293]= "294)  Las sesiones plenarias mensuales, a las que asisten todos los diputados, se celebran en:";
 choices[293]= new Array();
 choices[293][0] = "Estrasburgo.";
 choices[293][1] = "Bruselas.";
 choices[293][2] = "Luxemburgo.";
 choices[293][3] = "Holanda.";
 answers[293] = choices[293][0];
 units[293] = "5";
 comments[293] = "Id Pregunta: 293. UNION EUROPEA";
 preguntaids[293] = 293


//  Id pregunta: 294 Año de creación de pregunta: 2016
 questions[294]= "295)  Indique a qui&eacute;n corresponde la funci&oacute;n de promover el inter&eacute;s general de la Uni&oacute;n Europea y tomar las iniciativas adecuadas con este fin:";
 choices[294]= new Array();
 choices[294][0] = "Al Consejo Europeo.";
 choices[294][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[294][2] = "A la Comisi&oacute;n Europea.";
 choices[294][3] = "Al Parlamento Europeo.";
 answers[294] = choices[294][2];
 units[294] = "5";
 comments[294] = "Id Pregunta: 294. UNION EUROPEA";
 preguntaids[294] = 294


//  Id pregunta: 295 Año de creación de pregunta: 2016
 questions[295]= "296)  La sede del Tribunal de Cuentas Europeo se encuentra en:";
 choices[295]= new Array();
 choices[295][0] = "Estrasburgo.";
 choices[295][1] = "Bruselas.";
 choices[295][2] = "Luxemburgo.";
 choices[295][3] = "Holanda.";
 answers[295] = choices[295][2];
 units[295] = "5";
 comments[295] = "Id Pregunta: 295. UNION EUROPEA";
 preguntaids[295] = 295


//  Id pregunta: 296 Año de creación de pregunta: 2016
 questions[296]= "297)  Indique a qui&eacute;n corresponde la funci&oacute;n de adoptar las iniciativas de la programaci&oacute;n anual y plurianual de la Uni&oacute;n Europea con el fin de alcanzar acuerdos interinstitucionales:";
 choices[296]= new Array();
 choices[296][0] = "Al Consejo Europeo.";
 choices[296][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[296][2] = "A la Comisi&oacute;n Europea.";
 choices[296][3] = "Al Parlamento Europeo.";
 answers[296] = choices[296][2];
 units[296] = "5";
 comments[296] = "Id Pregunta: 296. UNION EUROPEA";
 preguntaids[296] = 296


//  Id pregunta: 297 Año de creación de pregunta: 2016
 questions[297]= "298)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n a la Presidencia del Consejo:";
 choices[297]= new Array();
 choices[297][0] = "Es rotatoria y tiene una duraci&oacute;n de un a&ntilde;o.";
 choices[297][1] = "Es rotatoria y tiene una duraci&oacute;n de seis meses.";
 choices[297][2] = "Se nombra por el Parlamento para un per&iacute;odo de cinco a&ntilde;os.";
 choices[297][3] = "La ostenta el presidente de la Comisi&oacute;n.";
 answers[297] = choices[297][1];
 units[297] = "5";
 comments[297] = "Id Pregunta: 297. UNION EUROPEA";
 preguntaids[297] = 297


//  Id pregunta: 298 Año de creación de pregunta: 2016
 questions[298]= "299)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al Consejo de la Uni&oacute;n Europea:";
 choices[298]= new Array();
 choices[298][0] = "Estar&aacute; asistido por dos Secretar&iacute;as Generales.";
 choices[298][1] = "Estar&aacute; asistido por una Secretar&iacute;a General, dirigida por un Secretario General.";
 choices[298][2] = "Estar&aacute; asistido por un alto representante de Pol&iacute;tica Interior y Exterior.";
 choices[298][3] = "Estar&aacute; asistido por el Consejo de Europa.";
 answers[298] = choices[298][1];
 units[298] = "5";
 comments[298] = "Id Pregunta: 298. UNION EUROPEA";
 preguntaids[298] = 298


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[299]= "300)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[299]= new Array();
 choices[299][0] = "Quince miembros.";
 choices[299][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[299][2] = "Los miembros que determine el Consejo.";
 choices[299][3] = "Un Presidente y quince miembros.";
 answers[299] = choices[299][1];
 units[299] = "5";
 comments[299] = "Id Pregunta: 299. UNION EUROPEA";
 preguntaids[299] = 299


//  Id pregunta: 300 Año de creación de pregunta: 2016
 questions[300]= "301)  La designaci&oacute;n para formar parte del Tribunal de Cuentas la efect&uacute;a:";
 choices[300]= new Array();
 choices[300][0] = "La Comisi&oacute;n.";
 choices[300][1] = "El Consejo de Europa.";
 choices[300][2] = "El Consejo Europeo.";
 choices[300][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[300] = choices[300][3];
 units[300] = "5";
 comments[300] = "Id Pregunta: 300. UNION EUROPEA";
 preguntaids[300] = 300


//  Id pregunta: 301 Año de creación de pregunta: 2016
 questions[301]= "302)  El Presidente del Tribunal de Cuentas es elegido por:";
 choices[301]= new Array();
 choices[301][0] = "Los propios miembros del Tribunal.";
 choices[301][1] = "El Consejo de Europa.";
 choices[301][2] = "El Consejo Europeo.";
 choices[301][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[301] = choices[301][0];
 units[301] = "5";
 comments[301] = "Id Pregunta: 301. UNION EUROPEA";
 preguntaids[301] = 301


//  Id pregunta: 302 Año de creación de pregunta: 2016
 questions[302]= "303)  El Presidente del Tribunal de Cuentas es elegido para un per&iacute;odo de:";
 choices[302]= new Array();
 choices[302][0] = "Cinco a&ntilde;os.";
 choices[302][1] = "Cuatro a&ntilde;os.";
 choices[302][2] = "Tres a&ntilde;os.";
 choices[302][3] = "Seis meses.";
 answers[302] = choices[302][2];
 units[302] = "5";
 comments[302] = "Id Pregunta: 302. UNION EUROPEA";
 preguntaids[302] = 302


//  Id pregunta: 303 Año de creación de pregunta: 2016
 questions[303]= "304)  Indique el n&uacute;mero de miembros con que cuenta la Comisi&oacute;n Europea en la actualidad:";
 choices[303]= new Array();
 choices[303][0] = "Veinticinco.";
 choices[303][1] = "Veintisiete.";
 choices[303][2] = "Veintinueve.";
 choices[303][3] = "Cuarenta y uno.";
 answers[303] = choices[303][1];
 units[303] = "5";
 comments[303] = "Id Pregunta: 303. UNION EUROPEA";
 preguntaids[303] = 303


//  Id pregunta: 304 Año de creación de pregunta: 2016
 questions[304]= "305)  El mandato de la Comisi&oacute;n se establece por un per&iacute;odo de:";
 choices[304]= new Array();
 choices[304][0] = "Cinco a&ntilde;os.";
 choices[304][1] = "Seis a&ntilde;os.";
 choices[304][2] = "Cuatro a&ntilde;os.";
 choices[304][3] = "Tres a&ntilde;os.";
 answers[304] = choices[304][0];
 units[304] = "5";
 comments[304] = "Id Pregunta: 304. UNION EUROPEA";
 preguntaids[304] = 304


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[305]= "306)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[305]= new Array();
 choices[305][0] = "Estrasburgo.";
 choices[305][1] = "Bruselas.";
 choices[305][2] = "Luxemburgo.";
 choices[305][3] = "Par&iacute;s.";
 answers[305] = choices[305][1];
 units[305] = "5";
 comments[305] = "Id Pregunta: 305. UNION EUROPEA";
 preguntaids[305] = 305


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[306]= "307)  Componen la Comisi&oacute;n Europea:";
 choices[306]= new Array();
 choices[306][0] = "Un Comisario por cada Estado miembro.";
 choices[306][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[306][2] = "Dos Comisarios por cada Estado miembro.";
 choices[306][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[306] = choices[306][0];
 units[306] = "5";
 comments[306] = "Id Pregunta: 306. UNION EUROPEA";
 preguntaids[306] = 306


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[307]= "308)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[307]= new Array();
 choices[307][0] = "Seis a&ntilde;os.";
 choices[307][1] = "Cinco a&ntilde;os.";
 choices[307][2] = "Cuatro a&ntilde;os.";
 choices[307][3] = "Ocho a&ntilde;os.";
 answers[307] = choices[307][1];
 units[307] = "5";
 comments[307] = "Id Pregunta: 307. UNION EUROPEA";
 preguntaids[307] = 307


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[308]= "309)  El Tribunal de Justicia se cre&oacute; en:";
 choices[308]= new Array();
 choices[308][0] = "El Tratado de la CECA.";
 choices[308][1] = "El Tratado de Niza.";
 choices[308][2] = "El Tratado de &Aacute;msterdam.";
 choices[308][3] = "El Tratado de Lisboa.";
 answers[308] = choices[308][0];
 units[308] = "5";
 comments[308] = "Id Pregunta: 308. UNION EUROPEA";
 preguntaids[308] = 308


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[309]= "310)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[309]= new Array();
 choices[309][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[309][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[309][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[309][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[309] = choices[309][0];
 units[309] = "5";
 comments[309] = "Id Pregunta: 309. UNION EUROPEA";
 preguntaids[309] = 309


//  Id pregunta: 310 Año de creación de pregunta: 2016
 questions[310]= "311)  Los actos legislativos de la Uni&oacute;n Europea, podr&aacute;n adoptarse &uacute;nicamente a propuesta de:";
 choices[310]= new Array();
 choices[310][0] = "La Comisi&oacute;n Europea.";
 choices[310][1] = "El Consejo Europeo.";
 choices[310][2] = "El Consejo de Europa.";
 choices[310][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[310] = choices[310][0];
 units[310] = "5";
 comments[310] = "Id Pregunta: 310. UNION EUROPEA";
 preguntaids[310] = 310


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[311]= "312)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[311]= new Array();
 choices[311][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[311][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[311][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[311][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[311] = choices[311][2];
 units[311] = "5";
 comments[311] = "Id Pregunta: 311. UNION EUROPEA";
 preguntaids[311] = 311


//  Id pregunta: 312 Año de creación de pregunta: 2016
 questions[312]= "313)  Los acuerdos de la Comisi&oacute;n Europea se adoptan:";
 choices[312]= new Array();
 choices[312][0] = "Por unanimidad.";
 choices[312][1] = "Por mayor&iacute;a cualificada.";
 choices[312][2] = "Por mayor&iacute;a de las dos terceras partes de sus miembros.";
 choices[312][3] = "Por mayor&iacute;a del n&uacute;mero de miembros.";
 answers[312] = choices[312][3];
 units[312] = "5";
 comments[312] = "Id Pregunta: 312. UNION EUROPEA";
 preguntaids[312] = 312


//  Id pregunta: 313 Año de creación de pregunta: 2016
 questions[313]= "314)  Indique qui&eacute;n propone al candidato para el cargo de Presidente de la Comisi&oacute;n Europea:";
 choices[313]= new Array();
 choices[313][0] = "El Consejo Europeo.";
 choices[313][1] = "El Consejo de la Uni&oacute;n Europea.";
 choices[313][2] = "Los miembros de la Comisi&oacute;n Europea.";
 choices[313][3] = "El Parlamento Europeo.";
 answers[313] = choices[313][0];
 units[313] = "5";
 comments[313] = "Id Pregunta: 313. UNION EUROPEA";
 preguntaids[313] = 313


//  Id pregunta: 314 Año de creación de pregunta: 2016
 questions[314]= "315)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[314]= new Array();
 choices[314][0] = "Al Consejo Europeo.";
 choices[314][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[314][2] = "A la Comisi&oacute;n Europea.";
 choices[314][3] = "Al Parlamento Europeo.";
 answers[314] = choices[314][2];
 units[314] = "5";
 comments[314] = "Id Pregunta: 314. UNION EUROPEA";
 preguntaids[314] = 314


//  Id pregunta: 315 Año de creación de pregunta: 2016
 questions[315]= "316)  El Colegio de Comisarios se re&uacute;ne:";
 choices[315]= new Array();
 choices[315][0] = "Una vez por semana.";
 choices[315][1] = "Una vez al mes.";
 choices[315][2] = "Dos veces en semana.";
 choices[315][3] = "Cuando lo acuerde el Presidente de la Comisi&oacute;n, y adem&aacute;s una vez al mes.";
 answers[315] = choices[315][0];
 units[315] = "5";
 comments[315] = "Id Pregunta: 315. UNION EUROPEA";
 preguntaids[315] = 315


//  Id pregunta: 316 Año de creación de pregunta: 2016
 questions[316]= "317)  El Consejo de la Uni&oacute;n Europea de reunir&aacute; por:";
 choices[316]= new Array();
 choices[316][0] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de dos de sus miembros o de la Comisi&oacute;n.";
 choices[316][1] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n.";
 choices[316][2] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de tres de sus miembros o de la Comisi&oacute;n.";
 choices[316][3] = "Convocatoria de su Presidente, a iniciativa de &eacute;ste, de uno de sus miembros o de la Comisi&oacute;n o el Parlamento.";
 answers[316] = choices[316][1];
 units[316] = "5";
 comments[316] = "Id Pregunta: 316. UNION EUROPEA";
 preguntaids[316] = 316


//  Id pregunta: 317 Año de creación de pregunta: 2016
 questions[317]= "318)  Habr&aacute; qu&oacute;rum en el Parlamento Europeo, cuando se encuentre reunida en el sal&oacute;n de sesiones:";
 choices[317]= new Array();
 choices[317][0] = "La cuarta parte de los Diputados que integran el Parlamento.";
 choices[317][1] = "La quinta parte de los Diputados que integran el Parlamento.";
 choices[317][2] = "La mitad de los Diputados que integran el Parlamento.";
 choices[317][3] = "La tercera parte de los Diputados que integran el Parlamento.";
 answers[317] = choices[317][3];
 units[317] = "5";
 comments[317] = "Id Pregunta: 317. UNION EUROPEA";
 preguntaids[317] = 317


//  Id pregunta: 318 Año de creación de pregunta: 2016
 questions[318]= "319)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[318]= new Array();
 choices[318][0] = "Consejos y Servicios.";
 choices[318][1] = "Servicios permanentes y no permanentes.";
 choices[318][2] = "Direcciones Generales.";
 choices[318][3] = "Direcciones ministeriales.";
 answers[318] = choices[318][2];
 units[318] = "5";
 comments[318] = "Id Pregunta: 318. UNION EUROPEA";
 preguntaids[318] = 318


//  Id pregunta: 319 Año de creación de pregunta: 2016
 questions[319]= "320)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[319]= new Array();
 choices[319][0] = "El Presidente de la Comisi&oacute;n, con la aprobaci&oacute;n de la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[319][1] = "La Comisi&oacute;n por mayor&iacute;a de dos tercios de sus miembros puede exigir la dimisi&oacute;n de un Comisario.";
 choices[319][2] = "El Presidente, sin necesidad de contar con la Comisi&oacute;n, puede exigir la dimisi&oacute;n de un Comisario.";
 choices[319][3] = "&Uacute;nicamente el Presidente del Consejo puede exigir la dimisi&oacute;n de un Comisario.";
 answers[319] = choices[319][0];
 units[319] = "5";
 comments[319] = "Id Pregunta: 319. UNION EUROPEA";
 preguntaids[319] = 319


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[320]= "321)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[320]= new Array();
 choices[320][0] = "Al Consejo Europeo.";
 choices[320][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[320][2] = "A la Comisi&oacute;n Europea.";
 choices[320][3] = "Al Parlamento Europeo.";
 answers[320] = choices[320][2];
 units[320] = "5";
 comments[320] = "Id Pregunta: 320. UNION EUROPEA";
 preguntaids[320] = 320


//  Id pregunta: 321 Año de creación de pregunta: 2016
 questions[321]= "322)  Indique el n&uacute;mero de Diputados del Parlamento Europeo que actualmente le corresponden a Espa&ntilde;a:";
 choices[321]= new Array();
 choices[321][0] = "Cincuenta y cuatro.";
 choices[321][1] = "Cincuenta.";
 choices[321][2] = "Cincuenta y cinco.";
 choices[321][3] = "Cincuenta y dos.";
 answers[321] = choices[321][1];
 units[321] = "5";
 comments[321] = "Id Pregunta: 321. UNION EUROPEA";
 preguntaids[321] = 321


//  Id pregunta: 322 Año de creación de pregunta: 2016
 questions[322]= "323)  El Tribunal de Justicia est&aacute; formado por:";
 choices[322]= new Array();
 choices[322][0] = "Un Juez de cada Estado miembro.";
 choices[322][1] = "Por dos Jueces de cada Estado miembro.";
 choices[322][2] = "Por veinte Jueces.";
 choices[322][3] = "Por ocho Jueces.";
 answers[322] = choices[322][0];
 units[322] = "5";
 comments[322] = "Id Pregunta: 322. UNION EUROPEA";
 preguntaids[322] = 322


//  Id pregunta: 323 Año de creación de pregunta: 2016
 questions[323]= "324)  Los Jueces y Abogados Generales del Tribunal de Justicia de la Uni&oacute;n Europea son nombrados para un per&iacute;odo de:";
 choices[323]= new Array();
 choices[323][0] = "Tres a&ntilde;os.";
 choices[323][1] = "Cuatro a&ntilde;os.";
 choices[323][2] = "Cinco a&ntilde;os.";
 choices[323][3] = "Seis a&ntilde;os.";
 answers[323] = choices[323][3];
 units[323] = "5";
 comments[323] = "Id Pregunta: 323. UNION EUROPEA";
 preguntaids[323] = 323


//  Id pregunta: 324 Año de creación de pregunta: 2016
 questions[324]= "325)  El Presidente del Tribunal de Justicia de la Uni&oacute;n Europea es nombrado para un per&iacute;odo de:";
 choices[324]= new Array();
 choices[324][0] = "Tres a&ntilde;os.";
 choices[324][1] = "Cuatro a&ntilde;os.";
 choices[324][2] = "Cinco a&ntilde;os.";
 choices[324][3] = "Seis a&ntilde;os.";
 answers[324] = choices[324][0];
 units[324] = "5";
 comments[324] = "Id Pregunta: 324. UNION EUROPEA";
 preguntaids[324] = 324


//  Id pregunta: 325 Año de creación de pregunta: 2016
 questions[325]= "326)  Indique el n&uacute;mero m&iacute;nimo de Diputados necesario para constituir un Grupo Pol&iacute;tico en el Parlamento Europeo:";
 choices[325]= new Array();
 choices[325][0] = "Veinticinco.";
 choices[325][1] = "Veintiuno.";
 choices[325][2] = "Dieciocho.";
 choices[325][3] = "Diecinueve.";
 answers[325] = choices[325][0];
 units[325] = "5";
 comments[325] = "Id Pregunta: 325. UNION EUROPEA";
 preguntaids[325] = 325


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[326]= "327)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[326]= new Array();
 choices[326][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[326][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[326][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[326][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[326] = choices[326][3];
 units[326] = "5";
 comments[326] = "Id Pregunta: 326. UNION EUROPEA";
 preguntaids[326] = 326


//  Id pregunta: 327 Año de creación de pregunta: 2016
 questions[327]= "328)  La idea de una Europa unida tiene sus antecedentes en el siglo:";
 choices[327]= new Array();
 choices[327][0] = "X.";
 choices[327][1] = "XIX.";
 choices[327][2] = "XV.";
 choices[327][3] = "XIII.";
 answers[327] = choices[327][1];
 units[327] = "5";
 comments[327] = "Id Pregunta: 327. UNION EUROPEA";
 preguntaids[327] = 327


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[328]= "329)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[328]= new Array();
 choices[328][0] = "El Presidente del Consejo Europeo.";
 choices[328][1] = "La Comisi&oacute;n.";
 choices[328][2] = "El Consejo.";
 choices[328][3] = "El Parlamento Europeo.";
 answers[328] = choices[328][2];
 units[328] = "5";
 comments[328] = "Id Pregunta: 328. UNION EUROPEA";
 preguntaids[328] = 328


//  Id pregunta: 329 Año de creación de pregunta: 2016
 questions[329]= "330)  Si el Consejo en alg&uacute;n acuerdo necesita de mayor&iacute;a cualificada se produce:";
 choices[329]= new Array();
 choices[329][0] = "Acuerdos cualificados.";
 choices[329][1] = "Acuerdos ponderados.";
 choices[329][2] = "Valoraci&oacute;n de los votos.";
 choices[329][3] = "Ponderaci&oacute;n de los votos.";
 answers[329] = choices[329][3];
 units[329] = "5";
 comments[329] = "Id Pregunta: 329. UNION EUROPEA";
 preguntaids[329] = 329


//  Id pregunta: 330 Año de creación de pregunta: 2016
 questions[330]= "331)  &iquest;Cu&aacute;les son las funciones de la Conferencia para Asuntos Relacionados con las Comunidades Europeas?:";
 choices[330]= new Array();
 choices[330][0] = "Garantizar el cumplimiento en las Conferencias Sectoriales de los procedimientos y f&oacute;rmulas de participaci&oacute;n de las Comunidades Aut&oacute;nomas.";
 choices[330][1] = "El tratamiento y resoluci&oacute;n con arreglo al principio de cooperaci&oacute;n de aquellas cuestiones de alcance general o contenido institucional relacionadas con las Comunidades Europeas.";
 choices[330][2] = "Todas son correctas.";
 choices[330][3] = "Informaci&oacute;n a las Comunidades Aut&oacute;nomas y la discusi&oacute;n en com&uacute;n sobre el desarrollo del proceso de constituci&oacute;n europea.";
 answers[330] = choices[330][2];
 units[330] = "5";
 comments[330] = "Id Pregunta: 330. UNION EUROPEA";
 preguntaids[330] = 330


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[331]= "332)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[331]= new Array();
 choices[331][0] = "90";
 choices[331][1] = "50";
 choices[331][2] = "64";
 choices[331][3] = "60";
 answers[331] = choices[331][1];
 units[331] = "5";
 comments[331] = "Id Pregunta: 331. UNION EUROPEA";
 preguntaids[331] = 331


//  Id pregunta: 332 Año de creación de pregunta: 2016
 questions[332]= "333)  &iquest;Cu&aacute;ndo son de aplicaci&oacute;n los tratados internacionales?:";
 choices[332]= new Array();
 choices[332][0] = "Al d&iacute;a siguiente de su ratificaci&oacute;n por el Congreso de los Diputados.";
 choices[332][1] = "Al d&iacute;a siguiente de su firma por los Ministros plenipotenciarios.";
 choices[332][2] = "El mismo d&iacute;a de la firma por los Ministros plenipotenciarios.";
 choices[332][3] = "No ser&aacute;n de aplicaci&oacute;n directa hasta que formen parte del ordenamiento mediante su publicaci&oacute;n en el BOE.";
 answers[332] = choices[332][3];
 units[332] = "5";
 comments[332] = "Id Pregunta: 332. UNION EUROPEA";
 preguntaids[332] = 332


//  Id pregunta: 333 Año de creación de pregunta: 2016
 questions[333]= "334)  Est&aacute;n legitimados para interponer el recurso de carencia del art. 175 TCE:";
 choices[333]= new Array();
 choices[333][0] = "Las instituciones comunitarias.";
 choices[333][1] = "Los Estados miembros y las instituciones comunitarias.";
 choices[333][2] = "Los Estados miembros.";
 choices[333][3] = "Los nacionales de los Estados miembros.";
 answers[333] = choices[333][1];
 units[333] = "5";
 comments[333] = "Id Pregunta: 333. UNION EUROPEA";
 preguntaids[333] = 333


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[334]= "335)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[334]= new Array();
 choices[334][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[334][1] = "Ninguna de las respuestas es correcta.";
 choices[334][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[334][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[334] = choices[334][0];
 units[334] = "5";
 comments[334] = "Id Pregunta: 334. UNION EUROPEA";
 preguntaids[334] = 334


//  Id pregunta: 335 Año de creación de pregunta: 2016
 questions[335]= "336)  Un diputado del Parlamento Europeo, de nacionalidad espa&ntilde;ola, &iquest;puede ser tambi&eacute;n Diputado en el Congreso espa&ntilde;ol?:";
 choices[335]= new Array();
 choices[335][0] = "Son compatibles, lo que no puede compatibilizar es ser funcionario de cualquiera de las Instituciones Europeas.";
 choices[335][1] = "Son compatibles, lo que no puede compatibilizar es ser miembro del Tribunal de Justicia de Luxemburgo.";
 choices[335][2] = "Son incompatibles ambas actas de diputado.";
 choices[335][3] = "Son perfectamente compatibles ambas actas de diputado.";
 answers[335] = choices[335][2];
 units[335] = "5";
 comments[335] = "Id Pregunta: 335. UNION EUROPEA";
 preguntaids[335] = 335


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[336]= "337)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[336]= new Array();
 choices[336][0] = "Diciembre de 1987.";
 choices[336][1] = "Septiembre de 1989.";
 choices[336][2] = "Octubre de 1990.";
 choices[336][3] = "Noviembre de 1980.";
 answers[336] = choices[336][1];
 units[336] = "5";
 comments[336] = "Id Pregunta: 336. UNION EUROPEA";
 preguntaids[336] = 336


//  Id pregunta: 337 Año de creación de pregunta: 2016
 questions[337]= "338)  &iquest;De cu&aacute;ntos diputados se compone el Parlamento Europeo?:";
 choices[337]= new Array();
 choices[337][0] = "732";
 choices[337][1] = "626";
 choices[337][2] = "786";
 choices[337][3] = "360";
 answers[337] = choices[337][2];
 units[337] = "5";
 comments[337] = "Id Pregunta: 337. UNION EUROPEA";
 preguntaids[337] = 337


//  Id pregunta: 338 Año de creación de pregunta: 2016
 questions[338]= "339)  En el Consejo de Europa cada Estado miembro tiene una delegaci&oacute;n nacional en Bruselas conocida como &oacute;rgano de apoyo, denominado:";
 choices[338]= new Array();
 choices[338][0] = "CO.PER.";
 choices[338][1] = "COMPER.";
 choices[338][2] = "CO.RE.PER.";
 choices[338][3] = "CO.PE.RRE.";
 answers[338] = choices[338][2];
 units[338] = "5";
 comments[338] = "Id Pregunta: 338. UNION EUROPEA";
 preguntaids[338] = 338


//  Id pregunta: 339 Año de creación de pregunta: 2016
 questions[339]= "340)  La presidencia del Consejo se ejerce de forma rotatoria cada:";
 choices[339]= new Array();
 choices[339][0] = "4 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[339][1] = "6 meses seg&uacute;n un orden fijado por unanimidad del Consejo.";
 choices[339][2] = "4 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 choices[339][3] = "6 meses seg&uacute;n un orden fijado por mayor&iacute;a cualificada del Consejo.";
 answers[339] = choices[339][1];
 units[339] = "5";
 comments[339] = "Id Pregunta: 339. UNION EUROPEA";
 preguntaids[339] = 339


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[340]= "341)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[340]= new Array();
 choices[340][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[340][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[340][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[340][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[340] = choices[340][2];
 units[340] = "5";
 comments[340] = "Id Pregunta: 340. UNION EUROPEA";
 preguntaids[340] = 340


//  Id pregunta: 341 Año de creación de pregunta: 2016
 questions[341]= "342)  Tras la cuarta ampliaci&oacute;n de la Uni&oacute;n (Austria, Suecia y Finlandia), el n&uacute;mero total de diputados se estableci&oacute; en:";
 choices[341]= new Array();
 choices[341][0] = "623";
 choices[341][1] = "649";
 choices[341][2] = "626";
 choices[341][3] = "565";
 answers[341] = choices[341][2];
 units[341] = "5";
 comments[341] = "Id Pregunta: 341. UNION EUROPEA";
 preguntaids[341] = 341


//  Id pregunta: 342 Año de creación de pregunta: 2016
 questions[342]= "343)  La moci&oacute;n de censura contra la Comisi&oacute;n existe desde:";
 choices[342]= new Array();
 choices[342][0] = "El Tratado de Maastrich.";
 choices[342][1] = "El Tratado de Amsterdam.";
 choices[342][2] = "El Tratado de Par&iacute;s.";
 choices[342][3] = "El Tratado de Roma.";
 answers[342] = choices[342][3];
 units[342] = "5";
 comments[342] = "Id Pregunta: 342. UNION EUROPEA";
 preguntaids[342] = 342


//  Id pregunta: 343 Año de creación de pregunta: 2016
 questions[343]= "344)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[343]= new Array();
 choices[343][0] = "23";
 choices[343][1] = "20";
 choices[343][2] = "14";
 choices[343][3] = "18";
 answers[343] = choices[343][1];
 units[343] = "5";
 comments[343] = "Id Pregunta: 343. UNION EUROPEA";
 preguntaids[343] = 343


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[344]= "345)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[344]= new Array();
 choices[344][0] = "Pas&oacute; de 518 a 626.";
 choices[344][1] = "Pas&oacute; de 434 a 518.";
 choices[344][2] = "Pas&oacute; de 345 a 512.";
 choices[344][3] = "Pas&oacute; de 435 a 610.";
 answers[344] = choices[344][1];
 units[344] = "5";
 comments[344] = "Id Pregunta: 344. UNION EUROPEA";
 preguntaids[344] = 344


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[345]= "346)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[345]= new Array();
 choices[345][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[345][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[345][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[345][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[345] = choices[345][3];
 units[345] = "5";
 comments[345] = "Id Pregunta: 345. UNION EUROPEA";
 preguntaids[345] = 345


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[346]= "347)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[346]= new Array();
 choices[346][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[346][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[346][2] = "Cinco a&ntilde;os.";
 choices[346][3] = "Ninguna es correcta.";
 answers[346] = choices[346][2];
 units[346] = "5";
 comments[346] = "Id Pregunta: 346. UNION EUROPEA";
 preguntaids[346] = 346


//  Id pregunta: 347 Año de creación de pregunta: 2016
 questions[347]= "348)  La Comisi&oacute;n Europea est&aacute; integrada por:";
 choices[347]= new Array();
 choices[347][0] = "18 miembros.";
 choices[347][1] = "Ninguna es correcta.";
 choices[347][2] = "22 miembros.";
 choices[347][3] = "21 miembros.";
 answers[347] = choices[347][1];
 units[347] = "5";
 comments[347] = "Id Pregunta: 347. UNION EUROPEA";
 preguntaids[347] = 347


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[348]= "349)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[348]= new Array();
 choices[348][0] = "El 1 de noviembre de 1994.";
 choices[348][1] = "El 1 de noviembre de 1992.";
 choices[348][2] = "El 1 de noviembre de 1995.";
 choices[348][3] = "El 1 de noviembre de 1993.";
 answers[348] = choices[348][3];
 units[348] = "5";
 comments[348] = "Id Pregunta: 348. UNION EUROPEA";
 preguntaids[348] = 348


//  Id pregunta: 349 Año de creación de pregunta: 2016
 questions[349]= "350)  El Tratado de Par&iacute;s que crea la Comunidad Europea del Carb&oacute;n y del Acero entr&oacute; en vigor:";
 choices[349]= new Array();
 choices[349][0] = "El 23 de julio de 1952.";
 choices[349][1] = "El 18 de abril de 1951.";
 choices[349][2] = "El 16 de abril de 1948.";
 choices[349][3] = "d)Ninguna de las respuestas son correctas.";
 answers[349] = choices[349][0];
 units[349] = "5";
 comments[349] = "Id Pregunta: 349. UNION EUROPEA";
 preguntaids[349] = 349


//  Id pregunta: 350 Año de creación de pregunta: 2016
 questions[350]= "351)  En la Uni&oacute;n Europea, el Consejo de Ministros se reunir&aacute; peri&oacute;dicamente en Bruselas por convocatoria de:";
 choices[350]= new Array();
 choices[350][0] = "Su Presidente, a iniciativa de &eacute;ste.";
 choices[350][1] = "Uno de sus miembros.";
 choices[350][2] = "La Comisi&oacute;n.";
 choices[350][3] = "Todas las respuestas son correctas.";
 answers[350] = choices[350][3];
 units[350] = "5";
 comments[350] = "Id Pregunta: 350. UNION EUROPEA";
 preguntaids[350] = 350


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[351]= "352)  La sede del Parlamento Europeo se encuentra en:";
 choices[351]= new Array();
 choices[351][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[351][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[351][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[351][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[351] = choices[351][1];
 units[351] = "5";
 comments[351] = "Id Pregunta: 351. UNION EUROPEA";
 preguntaids[351] = 351


//  Id pregunta: 352 Año de creación de pregunta: 2016
 questions[352]= "353)  La Comisi&oacute;n est&aacute; compuesta por:";
 choices[352]= new Array();
 choices[352][0] = "27 miembros, nacionales de los Estados comunitarios.";
 choices[352][1] = "20 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 choices[352][2] = "25 miembros, nacionales de los Estados comunitarios.";
 choices[352][3] = "d)22 miembros, sin que el n&uacute;mero de los componentes en posesi&oacute;n de la nacionalidad de un mismo Estado pueda ser superior a 3.";
 answers[352] = choices[352][0];
 units[352] = "5";
 comments[352] = "Id Pregunta: 352. UNION EUROPEA";
 preguntaids[352] = 352


//  Id pregunta: 353 Año de creación de pregunta: 2016
 questions[353]= "354)  El buen funcionamiento de la Uni&oacute;n Europea recae, entre otras instituciones, en:";
 choices[353]= new Array();
 choices[353][0] = "El Parlamento Europeo.";
 choices[353][1] = "Todas las respuestas son correctas.";
 choices[353][2] = "La Comisi&oacute;n Europea.";
 choices[353][3] = "El Consejo de la Uni&oacute;n Europea.";
 answers[353] = choices[353][1];
 units[353] = "5";
 comments[353] = "Id Pregunta: 353. UNION EUROPEA";
 preguntaids[353] = 353


//  Id pregunta: 354 Año de creación de pregunta: 2016
 questions[354]= "355)  El Tribunal de Justicia Europeo est&aacute; compuesto por:";
 choices[354]= new Array();
 choices[354][0] = "Veinticinco Jueces y nueve Abogados Generales.";
 choices[354][1] = "Veintisiete Jueces y veintisiete Abogados Generales.";
 choices[354][2] = "Veintisiete Jueces y ocho Abogados Generales.";
 choices[354][3] = "Veinticinco Jueces y siete Abogados Generales.";
 answers[354] = choices[354][2];
 units[354] = "5";
 comments[354] = "Id Pregunta: 354. UNION EUROPEA";
 preguntaids[354] = 354


//  Id pregunta: 355 Año de creación de pregunta: 2016
 questions[355]= "356)  En el marco de la Uni&oacute;n Europea, los dict&aacute;menes:";
 choices[355]= new Array();
 choices[355][0] = "Son vinculantes solamente.";
 choices[355][1] = "No son vinculantes, ya que su contenido no obliga a aqu&eacute;llos a los que van dirigidos.";
 choices[355][2] = "Son preceptivos y vinculantes.";
 choices[355][3] = "Son preceptivos y no vinculantes.";
 answers[355] = choices[355][1];
 units[355] = "5";
 comments[355] = "Id Pregunta: 355. UNION EUROPEA";
 preguntaids[355] = 355


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[356]= "357)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[356]= new Array();
 choices[356][0] = "No se aplican directamente en los Estados.";
 choices[356][1] = "No son vinculantes.";
 choices[356][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[356][3] = "Tienen alcance general.";
 answers[356] = choices[356][0];
 units[356] = "5";
 comments[356] = "Id Pregunta: 356. UNION EUROPEA";
 preguntaids[356] = 356


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[357]= "358)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[357]= new Array();
 choices[357][0] = "El Parlamento y el Consejo.";
 choices[357][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[357][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[357][3] = "La Comisi&oacute;n y el Consejo.";
 answers[357] = choices[357][1];
 units[357] = "5";
 comments[357] = "Id Pregunta: 357. UNION EUROPEA";
 preguntaids[357] = 357


//  Id pregunta: 358 Año de creación de pregunta: 2016
 questions[358]= "359)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[358]= new Array();
 choices[358][0] = "a)La Uni&oacute;n Europea no es a&uacute;n una estructura acabada, sino m&aacute;s bien un sistema de gestaci&oacute;n cuya apariencia definitiva a&uacute;n no puede preverse.";
 choices[358][1] = "b) La Uni&oacute;n Europea no es un proceso de integraci&oacute;n sino una Organizaci&oacute;n Internacional sui generis.";
 choices[358][2] = "c) Todas las respuestas son correctas.";
 choices[358][3] = "d)La Uni&oacute;n Europea s&oacute;lo tiene en com&uacute;n con las organizaciones tradicionales de derecho internacional que tambi&eacute;n han sido creadas mediante un tratado internacional.";
 answers[358] = choices[358][1];
 units[358] = "5";
 comments[358] = "Id Pregunta: 358. UNION EUROPEA";
 preguntaids[358] = 358


//  Id pregunta: 359 Año de creación de pregunta: 2016
 questions[359]= "360)  Los Reglamentos no se caracterizan por:";
 choices[359]= new Array();
 choices[359][0] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 choices[359][1] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[359][2] = "Ser obligatorios.";
 choices[359][3] = "No poseer alcance general.";
 answers[359] = choices[359][3];
 units[359] = "5";
 comments[359] = "Id Pregunta: 359. UNION EUROPEA";
 preguntaids[359] = 359


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[360]= "361)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[360]= new Array();
 choices[360][0] = "786 Diputados como m&aacute;ximo.";
 choices[360][1] = "600 Diputados como m&aacute;ximo.";
 choices[360][2] = "650 Diputados como m&aacute;ximo.";
 choices[360][3] = "732 Diputados como m&aacute;ximo.";
 answers[360] = choices[360][0];
 units[360] = "5";
 comments[360] = "Id Pregunta: 360. UNION EUROPEA";
 preguntaids[360] = 360


//  Id pregunta: 361 Año de creación de pregunta: 2016
 questions[361]= "362)  &iquest;Qu&eacute; instituci&oacute;n encarna por excelencia los intereses comunitarios?:";
 choices[361]= new Array();
 choices[361][0] = "El Consejo Europeo.";
 choices[361][1] = "El Parlamento Europeo.";
 choices[361][2] = "El Consejo.";
 choices[361][3] = "La Comisi&oacute;n.";
 answers[361] = choices[361][3];
 units[361] = "5";
 comments[361] = "Id Pregunta: 361. UNION EUROPEA";
 preguntaids[361] = 361


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[362]= "363)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[362]= new Array();
 choices[362][0] = "Son actos normativos.";
 choices[362][1] = "Poseen alcance general.";
 choices[362][2] = "No son obligatorias.";
 choices[362][3] = "Son actos individuales no normativos.";
 answers[362] = choices[362][3];
 units[362] = "5";
 comments[362] = "Id Pregunta: 362. UNION EUROPEA";
 preguntaids[362] = 362


//  Id pregunta: 363 Año de creación de pregunta: 2016
 questions[363]= "364)  Los Reglamentos no se caracterizan por:";
 choices[363]= new Array();
 choices[363][0] = "No poseer alcance general.";
 choices[363][1] = "Ser obligatorios.";
 choices[363][2] = "Todas son caracter&iacute;sticas de los Reglamentos.";
 choices[363][3] = "Ser de aplicaci&oacute;n directa a los Estados miembros.";
 answers[363] = choices[363][0];
 units[363] = "5";
 comments[363] = "Id Pregunta: 363. UNION EUROPEA";
 preguntaids[363] = 363


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[364]= "365)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[364]= new Array();
 choices[364][0] = "El 1 de junio de 1999.";
 choices[364][1] = "El 1 de mayo de 1999.";
 choices[364][2] = "El 1 de abril de 1999.";
 choices[364][3] = "El 1 de marzo de 1999.";
 answers[364] = choices[364][1];
 units[364] = "5";
 comments[364] = "Id Pregunta: 364. UNION EUROPEA";
 preguntaids[364] = 364


//  Id pregunta: 365 Año de creación de pregunta: 2016
 questions[365]= "366)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[365]= new Array();
 choices[365][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[365][1] = "Unanimidad.";
 choices[365][2] = "Mayor&iacute;a cualificada.";
 choices[365][3] = "Mayor&iacute;a simple.";
 answers[365] = choices[365][3];
 units[365] = "5";
 comments[365] = "Id Pregunta: 365. UNION EUROPEA";
 preguntaids[365] = 365


//  Id pregunta: 366 Año de creación de pregunta: 2016
 questions[366]= "367)  Para constituir un Grupo en el Parlamento Europeo es necesario al menos:";
 choices[366]= new Array();
 choices[366][0] = "20 parlamentarios.";
 choices[366][1] = "29 parlamentarios.";
 choices[366][2] = "18 parlamentarios.";
 choices[366][3] = "23 parlamentarios.";
 answers[366] = choices[366][0];
 units[366] = "5";
 comments[366] = "Id Pregunta: 366. UNION EUROPEA";
 preguntaids[366] = 366


//  Id pregunta: 367 Año de creación de pregunta: 2016
 questions[367]= "368)  Es una funci&oacute;n del Presidente del Parlamento Europeo:";
 choices[367]= new Array();
 choices[367][0] = "Presentar la moci&oacute;n de censura.";
 choices[367][1] = "Presidir las sesiones del Parlamento.";
 choices[367][2] = "Organizar la Secretar&iacute;a General.";
 choices[367][3] = "Preparar las actividades de las Comisiones.";
 answers[367] = choices[367][1];
 units[367] = "5";
 comments[367] = "Id Pregunta: 367. UNION EUROPEA";
 preguntaids[367] = 367


//  Id pregunta: 368 Año de creación de pregunta: 2016
 questions[368]= "369)  Los Reglamentos comunitarios equivalen a lo que en un ordenamiento interno es:";
 choices[368]= new Array();
 choices[368][0] = "Un Reglamento.";
 choices[368][1] = "Un Decreto.";
 choices[368][2] = "Una Ley.";
 choices[368][3] = "Un Real-Decreto.";
 answers[368] = choices[368][2];
 units[368] = "5";
 comments[368] = "Id Pregunta: 368. UNION EUROPEA";
 preguntaids[368] = 368


//  Id pregunta: 369 Año de creación de pregunta: 2016
 questions[369]= "370)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[369]= new Array();
 choices[369][0] = "Son actos individuales no normativos.";
 choices[369][1] = "Poseen alcance general.";
 choices[369][2] = "Son actos normativos.";
 choices[369][3] = "No son obligatorias.";
 answers[369] = choices[369][0];
 units[369] = "5";
 comments[369] = "Id Pregunta: 369. UNION EUROPEA";
 preguntaids[369] = 369


//  Id pregunta: 370 Año de creación de pregunta: 2016
 questions[370]= "371)  Establecer la interpretaci&oacute;n adecuada de los Tratados de la Uni&oacute;n Europea y las normas de derecho derivado es el objeto de:";
 choices[370]= new Array();
 choices[370][0] = "Un recurso de incumplimiento.";
 choices[370][1] = "Recurso de carencia.";
 choices[370][2] = "Cuesti&oacute;n o incidente prejudicial.";
 choices[370][3] = "Ninguna es correcta.";
 answers[370] = choices[370][2];
 units[370] = "5";
 comments[370] = "Id Pregunta: 370. UNION EUROPEA";
 preguntaids[370] = 370


//  Id pregunta: 371 Año de creación de pregunta: 2016
 questions[371]= "372)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[371]= new Array();
 choices[371][0] = "En 1988.";
 choices[371][1] = "En 1981.";
 choices[371][2] = "En 1982.";
 choices[371][3] = "En 1986.";
 answers[371] = choices[371][3];
 units[371] = "5";
 comments[371] = "Id Pregunta: 371. UNION EUROPEA";
 preguntaids[371] = 371


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[372]= "373)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[372]= new Array();
 choices[372][0] = "El Parlamento y el Consejo.";
 choices[372][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[372][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[372][3] = "La Comisi&oacute;n y el Consejo.";
 answers[372] = choices[372][2];
 units[372] = "5";
 comments[372] = "Id Pregunta: 372. UNION EUROPEA";
 preguntaids[372] = 372


//  Id pregunta: 373 Año de creación de pregunta: 2016
 questions[373]= "374)  &iquest;Cu&aacute;ntos Abogados Generales asisten al Tribunal Superior de Justicia?:";
 choices[373]= new Array();
 choices[373][0] = "Nueve.";
 choices[373][1] = "Diez.";
 choices[373][2] = "Siete.";
 choices[373][3] = "Ocho.";
 answers[373] = choices[373][3];
 units[373] = "5";
 comments[373] = "Id Pregunta: 373. UNION EUROPEA";
 preguntaids[373] = 373


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[374]= "375)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[374]= new Array();
 choices[374][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[374][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[374][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[374][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[374] = choices[374][3];
 units[374] = "5";
 comments[374] = "Id Pregunta: 374. UNION EUROPEA";
 preguntaids[374] = 374


//  Id pregunta: 375 Año de creación de pregunta: 2016
 questions[375]= "376)  Las relaciones entre el Derecho Comunitario y el Derecho nacional se caracterizan por:";
 choices[375]= new Array();
 choices[375][0] = "Complementariedad, por tratarse de un ordenamiento para los Estados miembros.";
 choices[375][1] = "Primac&iacute;a del Derecho Comunitario, puesto que se impone a los Estados miembros.";
 choices[375][2] = "Autonom&iacute;a del Derecho Comunitario frente al nacional.";
 choices[375][3] = "Todas las respuestas son correctas.";
 answers[375] = choices[375][3];
 units[375] = "5";
 comments[375] = "Id Pregunta: 375. UNION EUROPEA";
 preguntaids[375] = 375


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[376]= "377)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[376]= new Array();
 choices[376][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[376][1] = "Personas con nacionalidad europea.";
 choices[376][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[376][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[376] = choices[376][3];
 units[376] = "5";
 comments[376] = "Id Pregunta: 376. UNION EUROPEA";
 preguntaids[376] = 376


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[377]= "378)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[377]= new Array();
 choices[377][0] = "Tener una estructura institucional.";
 choices[377][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[377][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[377][3] = "Todas las respuestas son correctas.";
 answers[377] = choices[377][3];
 units[377] = "5";
 comments[377] = "Id Pregunta: 377. UNION EUROPEA";
 preguntaids[377] = 377


//  Id pregunta: 378 Año de creación de pregunta: 2016
 questions[378]= "379)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[378]= new Array();
 choices[378][0] = "Quince miembros.";
 choices[378][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[378][2] = "Los miembros que determine el Consejo.";
 choices[378][3] = "Un Presidente y quince miembros.";
 answers[378] = choices[378][1];
 units[378] = "14";
 comments[378] = "Id Pregunta: 378. UNION EUROPEA";
 preguntaids[378] = 378


//  Id pregunta: 379 Año de creación de pregunta: 2016
 questions[379]= "380)  Seg&uacute;n recoge la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, &iquest;con qu&eacute; frecuencia debe elaborar el Gobierno un informe sobre el conjunto de actuaciones en relaci&oacute;n con le efectividad del principio de igualdad entre mujeres y hombres?";
 choices[379]= new Array();
 choices[379][0] = "Anual.";
 choices[379][1] = "Semestral.";
 choices[379][2] = "Seg&uacute;n se determine reglamentariamente.";
 choices[379][3] = "Bienal.";
 answers[379] = choices[379][2];
 units[379] = "14";
 comments[379] = "Id Pregunta: 379. POLITICAS DE IGUALDAD";
 preguntaids[379] = 379


//  Id pregunta: 380 Año de creación de pregunta: 2016
 questions[380]= "381)  La acreditaci&oacute;n de las situaciones de violencia de g&eacute;nero ejercida sobre las trabajadoras, seg&uacute;n indica la Ley Org&aacute;nica 1/2004 de Medidas de Protecci&oacute;n Integral contra la violencia de g&eacute;nero, se produce mediante:";
 choices[380]= new Array();
 choices[380][0] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima.";
 choices[380][1] = "La correspondiente denuncia presentada en Comisar&iacute;a o Juzgado.";
 choices[380][2] = "La orden de alejamiento a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal que indique la existencia de indicios de violencia de g&eacute;nero.";
 choices[380][3] = "La orden de protecci&oacute;n a favor de la v&iacute;ctima o, excepcionalmente, informe del Ministerio Fiscal en el que se indique la existencia de indicios de violencia de g&eacute;nero, hasta que se dicte la orden de protecci&oacute;n.";
 answers[380] = choices[380][3];
 units[380] = "14";
 comments[380] = "Id Pregunta: 380. POLITICAS DE IGUALDAD";
 preguntaids[380] = 380


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[381]= "382)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[381]= new Array();
 choices[381][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[381][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[381][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[381][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[381] = choices[381][0];
 units[381] = "14";
 comments[381] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";
 preguntaids[381] = 381


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[382]= "383)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[382]= new Array();
 choices[382][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[382][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[382][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[382][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[382] = choices[382][0];
 units[382] = "14";
 comments[382] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";
 preguntaids[382] = 382


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[383]= "384)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[383]= new Array();
 choices[383][0] = "El Consejo Nacional de la Mujer";
 choices[383][1] = "El Consejo de la Mujer";
 choices[383][2] = "El Instituto de la Mujer";
 choices[383][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[383] = choices[383][3];
 units[383] = "14";
 comments[383] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";
 preguntaids[383] = 383


//  Id pregunta: 384 Año de creación de pregunta: 2016
 questions[384]= "385)  De conformidad con lo establecido en la Org&aacute;nica 3/2007 para la igualdad efectiva entre mujeres y hombres, los &oacute;rganos de contrataci&oacute;n podr&aacute;n establecer en los pliegos de cl&aacute;usulas administrativas particulares la preferencia, en igualdad de condiciones jur&iacute;dicas y econ&oacute;micas, en la adjudicaci&oacute;n de los contratos de las proposiciones presentadas por aquellas empresas que:";
 choices[384]= new Array();
 choices[384][0] = "Sean dirigidas por mujeres";
 choices[384][1] = "Cuenten con un colectivo paritario de trabajadores y trabajadoras";
 choices[384][2] = "Incluyan en su proposici&oacute;n para ejecutar el contrato medidas para promover la igualdad efectiva entre mujeres y hombres";
 choices[384][3] = "Fomenten el acceso de las mujeres a puestos directivos.";
 answers[384] = choices[384][2];
 units[384] = "14";
 comments[384] = "Id Pregunta: 384. POLITICAS DE IGUALDAD";
 preguntaids[384] = 384


//  Id pregunta: 385 Año de creación de pregunta: 2016
 questions[385]= "386)  Se&ntilde;ale c&oacute;mo es evaluado el Plan de Igualdad en la Administraci&oacute;n General del Estado, previsto en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la Igualdad efectiva de mujeres y hombres:";
 choices[385]= new Array();
 choices[385][0] = "Anualmente por el Consejo de Ministros";
 choices[385][1] = "Anualmente por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios";
 choices[385][2] = "Al final de cada legislatura por el Gobierno";
 choices[385][3] = "Al final de cada legislatura por la Agencia de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y Calidad de los Servicios.";
 answers[385] = choices[385][0];
 units[385] = "14";
 comments[385] = "Id Pregunta: 385. POLITICAS DE IGUALDAD";
 preguntaids[385] = 385


//  Id pregunta: 386 Año de creación de pregunta: 2016
 questions[386]= "387)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con las pol&iacute;ticas de igualdad de g&eacute;nero, de conformidad con la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad de mujeres y hombres:";
 choices[386]= new Array();
 choices[386][0] = "El Ministerio de Trabajo y Asuntos Sociales crear&aacute; un distintivo para reconocer a las empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato y de oportunidades con sus trabajadores y trabajadoras.";
 choices[386][1] = "Todas las empresas con sede en Espa&ntilde;a est&aacute;n obligadas a elaborar un plan de igualdad entre sus trabajadores y trabajadoras.";
 choices[386][2] = "En los procesos de car&aacute;cter penal en los que las alegaciones de la parte actora se fundamenten en actuaciones discriminatorias por raz&oacute;n de sexo, corresponde a la persona demandada probar la ausencia de discriminaci&oacute;n.";
 choices[386][3] = "La mitad, al menos, de los nuevos nombramientos de titulares de los &oacute;rganos directivos de la Administraci&oacute;n General del Estado, durante un plazo de dos a&ntilde;os a partir de la entrada en vigor de la ley, deber&aacute;n ser mujeres.";
 answers[386] = choices[386][0];
 units[386] = "14";
 comments[386] = "Id Pregunta: 386. POLITICAS DE IGUALDAD";
 preguntaids[386] = 386


//  Id pregunta: 387 Año de creación de pregunta: 2016
 questions[387]= "388)  El art&iacute;culo 37 de la Ley Org&aacute;nica 3/2007, para la igualdad efectiva de mujeres y hombres, indica que la Corporaci&oacute;n RTVE, en el ejercicio de su funci&oacute;n, perseguir&aacute; en su programaci&oacute;n:";
 choices[387]= new Array();
 choices[387][0] = "Mostrar anuncios para la igualdad de forma habitual.";
 choices[387][1] = "Ofrecer trabajo a mujeres v&iacute;ctimas de violencia de g&eacute;nero.";
 choices[387][2] = "Promover la incorporaci&oacute;n de mujeres a puestos visibles ante las c&aacute;maras.";
 choices[387][3] = "Reflejar adecuadamente la presencia de las mujeres en los diversos &aacute;mbitos de la vida social.";
 answers[387] = choices[387][3];
 units[387] = "14";
 comments[387] = "Id Pregunta: 387. POLITICAS DE IGUALDAD";
 preguntaids[387] = 387


//  Id pregunta: 388 Año de creación de pregunta: 2016
 questions[388]= "389)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[388]= new Array();
 choices[388][0] = "Indirecta.";
 choices[388][1] = "Directa.";
 choices[388][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[388][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[388] = choices[388][1];
 units[388] = "14";
 comments[388] = "Id Pregunta: 388. POLITICAS DE IGUALDAD";
 preguntaids[388] = 388


//  Id pregunta: 389 Año de creación de pregunta: 2016
 questions[389]= "390)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[389]= new Array();
 choices[389][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[389][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[389][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[389][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[389] = choices[389][0];
 units[389] = "14";
 comments[389] = "Id Pregunta: 389. POLITICAS DE IGUALDAD";
 preguntaids[389] = 389


//  Id pregunta: 390 Año de creación de pregunta: 2016
 questions[390]= "391)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre hombres y mujeres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[390]= new Array();
 choices[390][0] = "El Consejo Nacional de la Mujer.";
 choices[390][1] = "El Consejo de la Mujer.";
 choices[390][2] = "El Instituto de la Mujer.";
 choices[390][3] = "El Consejo de Participaci&oacute;n de la Mujer.";
 answers[390] = choices[390][3];
 units[390] = "14";
 comments[390] = "Id Pregunta: 390. POLITICAS DE IGUALDAD";
 preguntaids[390] = 390


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[391]= "392)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[391]= new Array();
 choices[391][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[391][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[391][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[391][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[391] = choices[391][2];
 units[391] = "14";
 comments[391] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";
 preguntaids[391] = 391


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[392]= "393)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[392]= new Array();
 choices[392][0] = "Indirecta.";
 choices[392][1] = "Directa.";
 choices[392][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[392][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[392] = choices[392][1];
 units[392] = "14";
 comments[392] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";
 preguntaids[392] = 392


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[393]= "394)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[393]= new Array();
 choices[393][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[393][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[393][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[393][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[393] = choices[393][0];
 units[393] = "14";
 comments[393] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";
 preguntaids[393] = 393


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[394]= "395)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[394]= new Array();
 choices[394][0] = "Discriminaci&oacute;n indirecta.";
 choices[394][1] = "Discriminaci&oacute;n directa.";
 choices[394][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[394][3] = "Discriminaci&oacute;n abusiva.";
 answers[394] = choices[394][0];
 units[394] = "14";
 comments[394] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";
 preguntaids[394] = 394


//  Id pregunta: 395 Año de creación de pregunta: 2016
 questions[395]= "396)  Una persona que en atenci&oacute;n a su sexo es tratada de manera menos favorable que otra en situaci&oacute;n comparable, est&aacute; sufriendo:";
 choices[395]= new Array();
 choices[395][0] = "Discriminaci&oacute;n indirecta.";
 choices[395][1] = "Discriminaci&oacute;n directa.";
 choices[395][2] = "Discriminaci&oacute;n por maternidad.";
 choices[395][3] = "Discriminaci&oacute;n abusiva.";
 answers[395] = choices[395][1];
 units[395] = "14";
 comments[395] = "Id Pregunta: 395. POLITICAS DE IGUALDAD";
 preguntaids[395] = 395


//  Id pregunta: 396 Año de creación de pregunta: 2016
 questions[396]= "397)  La discriminaci&oacute;n por embarazo o maternidad, es considerada:";
 choices[396]= new Array();
 choices[396][0] = "Discriminaci&oacute;n directa por raz&oacute;n de sexo.";
 choices[396][1] = "Discriminaci&oacute;n indirecta por raz&oacute;n de sexo.";
 choices[396][2] = "Discriminaci&oacute;n negativa por raz&oacute;n de sexo.";
 choices[396][3] = "Discriminaci&oacute;n positiva por raz&oacute;n de sexo.";
 answers[396] = choices[396][0];
 units[396] = "14";
 comments[396] = "Id Pregunta: 396. POLITICAS DE IGUALDAD";
 preguntaids[396] = 396


//  Id pregunta: 397 Año de creación de pregunta: 2016
 questions[397]= "398)  Un comportamiento realizado con el prop&oacute;sito o el efecto de intimidar, degradar, ofender o atentar contra la dignidad de una persona en raz&oacute;n de su sexo, se denomina:";
 choices[397]= new Array();
 choices[397][0] = "Acoso sexual.";
 choices[397][1] = "Acoso por raz&oacute;n de sexo.";
 choices[397][2] = "Acoso laboral.";
 choices[397][3] = "Acoso mental.";
 answers[397] = choices[397][1];
 units[397] = "14";
 comments[397] = "Id Pregunta: 397. POLITICAS DE IGUALDAD";
 preguntaids[397] = 397


//  Id pregunta: 398 Año de creación de pregunta: 2016
 questions[398]= "399)  &iquest;Qu&eacute; art&iacute;culo de la Ley Org&aacute;nica 3/2007 para la igualdad efectiva de mujeres y hombres, regula las acciones positivas?";
 choices[398]= new Array();
 choices[398][0] = "Art. 13, L.O.3/2007.";
 choices[398][1] = "Art. 14, L.O.3/2007.";
 choices[398][2] = "Art. 11, L.O.3/2007.";
 choices[398][3] = "Ninguna es correcta.";
 answers[398] = choices[398][2];
 units[398] = "14";
 comments[398] = "Id Pregunta: 398. POLITICAS DE IGUALDAD";
 preguntaids[398] = 398


//  Id pregunta: 399 Año de creación de pregunta: 2016
 questions[399]= "400)  Las medidas espec&iacute;ficas que adoptar&aacute;n los Poderes P&uacute;blicos a favor de las mujeres para corregir situaciones patentes de desigualdad de hecho con respecto a los hombres, se denominan:";
 choices[399]= new Array();
 choices[399][0] = "Acciones de discriminaci&oacute;n.";
 choices[399][1] = "Acciones positivas.";
 choices[399][2] = "Acciones negativas.";
 choices[399][3] = "Acciones neutras.";
 answers[399] = choices[399][1];
 units[399] = "14";
 comments[399] = "Id Pregunta: 399. POLITICAS DE IGUALDAD";
 preguntaids[399] = 399


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[400]= "401)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[400]= new Array();
 choices[400][0] = "A la persona demandante.";
 choices[400][1] = "A la persona demandada.";
 choices[400][2] = "Al &oacute;rgano judicial.";
 choices[400][3] = "Al &oacute;rgano administrativo.";
 answers[400] = choices[400][1];
 units[400] = "14";
 comments[400] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";
 preguntaids[400] = 400


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[401]= "402)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[401]= new Array();
 choices[401][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[401][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[401][2] = "Ambas son correctas.";
 choices[401][3] = "A y B son incorrectas.";
 answers[401] = choices[401][2];
 units[401] = "14";
 comments[401] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";
 preguntaids[401] = 401


//  Id pregunta: 402 Año de creación de pregunta: 2016
 questions[402]= "403)  El principio de igualdad de trato y oportunidades entre mujeres y hombres tiene car&aacute;cter:";
 choices[402]= new Array();
 choices[402][0] = "Parcial.";
 choices[402][1] = "Sectorial.";
 choices[402][2] = "Tranversal.";
 choices[402][3] = "Vertical.";
 answers[402] = choices[402][2];
 units[402] = "14";
 comments[402] = "Id Pregunta: 402. POLITICAS DE IGUALDAD";
 preguntaids[402] = 402


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[403]= "404)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[403]= new Array();
 choices[403][0] = "Medidas de igualdad.";
 choices[403][1] = "Objetivos de igualdad.";
 choices[403][2] = "Ambas son correctas.";
 choices[403][3] = "A y B son incorrectas.";
 answers[403] = choices[403][2];
 units[403] = "14";
 comments[403] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";
 preguntaids[403] = 403


//  Id pregunta: 404 Año de creación de pregunta: 2016
 questions[404]= "405)  La igualdad como principio fundamental en la UE, entra en vigor con:";
 choices[404]= new Array();
 choices[404][0] = "El Tratado de Roma, 1957.";
 choices[404][1] = "El Acta &Uacute;nica Europea.";
 choices[404][2] = "El Tratado de &Aacute;msterdam, 1997.";
 choices[404][3] = "Ninguna es correcta.";
 answers[404] = choices[404][2];
 units[404] = "14";
 comments[404] = "Id Pregunta: 404. POLITICAS DE IGUALDAD";
 preguntaids[404] = 404


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[405]= "406)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[405]= new Array();
 choices[405][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[405][1] = "Directiva 2004/113/CE del Consejo.";
 choices[405][2] = "Todas son correctas.";
 choices[405][3] = "Todas son falsas.";
 answers[405] = choices[405][2];
 units[405] = "14";
 comments[405] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";
 preguntaids[405] = 405


//  Id pregunta: 406 Año de creación de pregunta: 2016
 questions[406]= "407)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza la no discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[406]= new Array();
 choices[406][0] = "Art&iacute;culo 9.1 CE.";
 choices[406][1] = "Art&iacute;culo 53 CE.";
 choices[406][2] = "Art&iacute;culo 14 CE.";
 choices[406][3] = "Art&iacute;culo 16 CE.";
 answers[406] = choices[406][2];
 units[406] = "14";
 comments[406] = "Id Pregunta: 406. POLITICAS DE IGUALDAD";
 preguntaids[406] = 406


//  Id pregunta: 407 Año de creación de pregunta: 2016
 questions[407]= "408)  &iquest;Qu&eacute; art&iacute;culo de la CE, consagra la obligaci&oacute;n de los poderes p&uacute;blicos para promover las condiciones para la igualdad del individuo:";
 choices[407]= new Array();
 choices[407][0] = "Art&iacute;culo 14 CE.";
 choices[407][1] = "Art&iacute;culo 9.2 CE.";
 choices[407][2] = "Art&iacute;culo 9.1 CE.";
 choices[407][3] = "Art&iacute;culo 13 CE.";
 answers[407] = choices[407][2];
 units[407] = "14";
 comments[407] = "Id Pregunta: 407. POLITICAS DE IGUALDAD";
 preguntaids[407] = 407


//  Id pregunta: 408 Año de creación de pregunta: 2016
 questions[408]= "409)  La igualdad efectiva entre mujeres y hombres est&aacute; regulada en:";
 choices[408]= new Array();
 choices[408][0] = "Ley Org&aacute;nica 7/2003, de 22 de marzo.";
 choices[408][1] = "Ley Org&aacute;nica 3/2003, de 22 de marzo.";
 choices[408][2] = "Ley 13/2007, de 26 de noviembre.";
 choices[408][3] = "Ley 3/2007, de 26 de noviembre.";
 answers[408] = choices[408][1];
 units[408] = "14";
 comments[408] = "Id Pregunta: 408. POLITICAS DE IGUALDAD";
 preguntaids[408] = 408


//  Id pregunta: 409 Año de creación de pregunta: 2016
 questions[409]= "410)  La mayor novedad de la Ley para la igualdad efectiva de mujeres y hombres, radica en:";
 choices[409]= new Array();
 choices[409][0] = "Prevenir las conductas discriminatorias.";
 choices[409][1] = "Proveer pol&iacute;ticas activas para hacer efectivo el principio de igualdad.";
 choices[409][2] = "Todas son correctas.";
 choices[409][3] = "Proveer pol&iacute;ticas pasivas para hacer efectivo el principio de igualdad.";
 answers[409] = choices[409][2];
 units[409] = "14";
 comments[409] = "Id Pregunta: 409. POLITICAS DE IGUALDAD";
 preguntaids[409] = 409


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[410]= "411)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[410]= new Array();
 choices[410][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[410][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[410][2] = "Un programa de igualdad.";
 choices[410][3] = "Un estatuto de igualdad.";
 answers[410] = choices[410][0];
 units[410] = "14";
 comments[410] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";
 preguntaids[410] = 410


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[411]= "412)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[411]= new Array();
 choices[411][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[411][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[411][2] = "Ninguna es correcta.";
 choices[411][3] = "A y B son correctas.";
 answers[411] = choices[411][1];
 units[411] = "14";
 comments[411] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";
 preguntaids[411] = 411


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[412]= "413)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[412]= new Array();
 choices[412][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[412][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[412][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[412][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[412] = choices[412][1];
 units[412] = "14";
 comments[412] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";
 preguntaids[412] = 412


//  Id pregunta: 413 Año de creación de pregunta: 2016
 questions[413]= "414)  Gozar&aacute;n de los derecho derivados del principio de igualdad de trato y de la prohibici&oacute;n de discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[413]= new Array();
 choices[413][0] = "La mujeres.";
 choices[413][1] = "Lo hombres.";
 choices[413][2] = "Todas las personas.";
 choices[413][3] = "Las mujeres y ni&ntilde;os menores de 16 a&ntilde;os.";
 answers[413] = choices[413][2];
 units[413] = "14";
 comments[413] = "Id Pregunta: 413. POLITICAS DE IGUALDAD";
 preguntaids[413] = 413


//  Id pregunta: 414 Año de creación de pregunta: 2016
 questions[414]= "415)  Los proyectos de disposiciones de car&aacute;cter general y los planes de especial relevancia econ&oacute;mica, que sometan a la aprobaci&oacute;n del Consejo de Ministros, incorporar&aacute;n:";
 choices[414]= new Array();
 choices[414][0] = "Un informe de impacto de g&eacute;nero.";
 choices[414][1] = "Un programa de igualdad de oportunidades.";
 choices[414][2] = "Un plan de Igualdad de Oportunidades.";
 choices[414][3] = "Un Decreto de Igualdad de Oportunidades.";
 answers[414] = choices[414][0];
 units[414] = "14";
 comments[414] = "Id Pregunta: 414. POLITICAS DE IGUALDAD";
 preguntaids[414] = 414


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[415]= "416)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[415]= new Array();
 choices[415][0] = "Un informe de g&eacute;nero.";
 choices[415][1] = "La variable de sexo.";
 choices[415][2] = "La variable de edad.";
 choices[415][3] = "La variable de comportamiento.";
 answers[415] = choices[415][1];
 units[415] = "14";
 comments[415] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";
 preguntaids[415] = 415


//  Id pregunta: 416 Año de creación de pregunta: 2016
 questions[416]= "417)  &iquest;Qu&eacute; art&iacute;culo de la LO 3/2007, regula la igualdad en el &aacute;mbito de la educaci&oacute;n superior:";
 choices[416]= new Array();
 choices[416][0] = "Art. 25 LO, 3/2007.";
 choices[416][1] = "Art. 23 LO, 3/2007.";
 choices[416][2] = "Art. 14 LO, 3/2007.";
 choices[416][3] = "Ninguna es correcta, es el art. 13.";
 answers[416] = choices[416][0];
 units[416] = "14";
 comments[416] = "Id Pregunta: 416. POLITICAS DE IGUALDAD";
 preguntaids[416] = 416


//  Id pregunta: 417 Año de creación de pregunta: 2016
 questions[417]= "418)  Las Administraciones P&uacute;blicas en el &aacute;mbito de la educaci&oacute;n superior, promover&aacute;n:";
 choices[417]= new Array();
 choices[417][0] = "Inclusi&oacute;n de ense&ntilde;anzas en materia de igualdad entre mujeres y hombres.";
 choices[417][1] = "La creaci&oacute;n de postgrados espec&iacute;ficos.";
 choices[417][2] = "Ambas son correctas.";
 choices[417][3] = "La A y B son incorrectas.";
 answers[417] = choices[417][2];
 units[417] = "14";
 comments[417] = "Id Pregunta: 417. POLITICAS DE IGUALDAD";
 preguntaids[417] = 417


//  Id pregunta: 418 Año de creación de pregunta: 2016
 questions[418]= "419)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[418]= new Array();
 choices[418][0] = "P&uacute;blica.";
 choices[418][1] = "Privada.";
 choices[418][2] = "A y B son correctas.";
 choices[418][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[418] = choices[418][2];
 units[418] = "14";
 comments[418] = "Id Pregunta: 418. POLITICAS DE IGUALDAD";
 preguntaids[418] = 418


//  Id pregunta: 419 Año de creación de pregunta: 2016
 questions[419]= "420)  Promover&aacute;n el conocimiento y la difusi&oacute;n del principio de igualdad entre mujeres y hombres, los medios de comunicaci&oacute;n de titularidad:";
 choices[419]= new Array();
 choices[419][0] = "P&uacute;blica.";
 choices[419][1] = "Privada.";
 choices[419][2] = "Ambas son correctas.";
 choices[419][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[419] = choices[419][0];
 units[419] = "14";
 comments[419] = "Id Pregunta: 419. POLITICAS DE IGUALDAD";
 preguntaids[419] = 419


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[420]= "421)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[420]= new Array();
 choices[420][0] = "150 trabajadores/as.";
 choices[420][1] = "200 trabajadores/as.";
 choices[420][2] = "250 trabajadores/as.";
 choices[420][3] = "300 trabajadores/as.";
 answers[420] = choices[420][2];
 units[420] = "14";
 comments[420] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";
 preguntaids[420] = 420


//  Id pregunta: 421 Año de creación de pregunta: 2016
 questions[421]= "422)  Las empresas deber&aacute;n promover condiciones de trabajo, arbitrar procedimientos espec&iacute;ficos y dar cauces a las denuncias o reclamaciones, para evitar:";
 choices[421]= new Array();
 choices[421][0] = "El acoso sexual.";
 choices[421][1] = "El acoso por raz&oacute;n del sexo.";
 choices[421][2] = "Ambas son correctas.";
 choices[421][3] = "A y B son incorrectas.";
 answers[421] = choices[421][2];
 units[421] = "14";
 comments[421] = "Id Pregunta: 421. POLITICAS DE IGUALDAD";
 preguntaids[421] = 421


//  Id pregunta: 422 Año de creación de pregunta: 2016
 questions[422]= "423)  Los distintivos para reconocer a aquellas empresas que destaquen por la aplicaci&oacute;n de pol&iacute;ticas de igualdad de trato, lo crear&aacute;:";
 choices[422]= new Array();
 choices[422][0] = "El Ministerio de Igualdad.";
 choices[422][1] = "El Ministerio de Empleo y Seguridad Social.";
 choices[422][2] = "Ambas son correctas.";
 choices[422][3] = "La Consejer&iacute;a de Igualdad de cada CCAA.";
 answers[422] = choices[422][1];
 units[422] = "14";
 comments[422] = "Id Pregunta: 422. POLITICAS DE IGUALDAD";
 preguntaids[422] = 422


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[423]= "424)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[423]= new Array();
 choices[423][0] = "El derecho a un permiso.";
 choices[423][1] = "Una prestaci&oacute;n por paternidad.";
 choices[423][2] = "Ambas son correctas.";
 choices[423][3] = "18 d&iacute;as de permiso.";
 answers[423] = choices[423][2];
 units[423] = "14";
 comments[423] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";
 preguntaids[423] = 423


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[424]= "425)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[424]= new Array();
 choices[424][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[424][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[424][2] = "Ninguna es correcta.";
 choices[424][3] = "A y B son correctas.";
 answers[424] = choices[424][0];
 units[424] = "14";
 comments[424] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";
 preguntaids[424] = 424


//  Id pregunta: 425 Año de creación de pregunta: 2016
 questions[425]= "426)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[425]= new Array();
 choices[425][0] = "Presencia equilibrada.";
 choices[425][1] = "Presencia paritaria.";
 choices[425][2] = "Presencia consensuada.";
 choices[425][3] = "presencia horizontal.";
 answers[425] = choices[425][0];
 units[425] = "14";
 comments[425] = "Id Pregunta: 425. POLITICAS DE IGUALDAD";
 preguntaids[425] = 425


//  Id pregunta: 426 Año de creación de pregunta: 2016
 questions[426]= "427)  La aprobaci&oacute;n de convocatorias de pruebas selectivas para el acceso al empleo p&uacute;blico deber&aacute; acompa&ntilde;arse de:";
 choices[426]= new Array();
 choices[426][0] = "Un plan de igualdad.";
 choices[426][1] = "Un informe de impacto de g&eacute;nero.";
 choices[426][2] = "Un programa de igualdad.";
 choices[426][3] = "Todas son correctas.";
 answers[426] = choices[426][1];
 units[426] = "14";
 comments[426] = "Id Pregunta: 426. POLITICAS DE IGUALDAD";
 preguntaids[426] = 426


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[427]= "428)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[427]= new Array();
 choices[427][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[427][1] = "En el extranjero.";
 choices[427][2] = "Ninguna es correcta.";
 choices[427][3] = "Ambas son correctas.";
 answers[427] = choices[427][0];
 units[427] = "14";
 comments[427] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";
 preguntaids[427] = 427


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[428]= "429)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[428]= new Array();
 choices[428][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[428][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[428][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[428][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[428] = choices[428][2];
 units[428] = "14";
 comments[428] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";
 preguntaids[428] = 428


//  Id pregunta: 429 Año de creación de pregunta: 2016
 questions[429]= "430)  Para la prevenci&oacute;n del acoso sexual y del acoso por raz&oacute;n de sexo, las Administraciones P&uacute;blicas negociar&aacute;n con la representaci&oacute;n legal de las trabajadoras y trabajadores, un protocolo de actuaci&oacute;n que comprender&aacute;:";
 choices[429]= new Array();
 choices[429][0] = "La identificaci&oacute;n de las personas responsables de atender a quienes formulen una queja o denuncia.";
 choices[429][1] = "El tratamiento p&uacute;blico de las denuncias de hechos que pudieran ser constitutivos de acoso sexual o de acoso por raz&oacute;n de sexo.";
 choices[429][2] = "Ambas son correctas.";
 choices[429][3] = "Ambas son incorrectas.";
 answers[429] = choices[429][0];
 units[429] = "14";
 comments[429] = "Id Pregunta: 429. POLITICAS DE IGUALDAD";
 preguntaids[429] = 429


//  Id pregunta: 430 Año de creación de pregunta: 2016
 questions[430]= "431)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[430]= new Array();
 choices[430][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[430][1] = "Protecci&oacute;n de su salud.";
 choices[430][2] = "Ninguna es correcta.";
 choices[430][3] = "A y B son correctas.";
 answers[430] = choices[430][1];
 units[430] = "14";
 comments[430] = "Id Pregunta: 430. POLITICAS DE IGUALDAD";
 preguntaids[430] = 430


//  Id pregunta: 431 Año de creación de pregunta: 2016
 questions[431]= "432)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[431]= new Array();
 choices[431][0] = "El Instituto de la Mujer.";
 choices[431][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[431][2] = "Ambas son correctas.";
 choices[431][3] = "A y B son incorrectas.";
 answers[431] = choices[431][2];
 units[431] = "14";
 comments[431] = "Id Pregunta: 431. POLITICAS DE IGUALDAD";
 preguntaids[431] = 431


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[432]= "433)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[432]= new Array();
 choices[432][0] = "De ocho a&ntilde;os.";
 choices[432][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[432][2] = "Ambas son correctas.";
 choices[432][3] = "No existe un l&iacute;mite.";
 answers[432] = choices[432][0];
 units[432] = "14";
 comments[432] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";
 preguntaids[432] = 432


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[433]= "434)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[433]= new Array();
 choices[433][0] = "Unidad de igualdad.";
 choices[433][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[433][2] = "Ninguna de las anteriores.";
 choices[433][3] = "A y B son correctas.";
 answers[433] = choices[433][1];
 units[433] = "14";
 comments[433] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";
 preguntaids[433] = 433


//  Id pregunta: 434 Año de creación de pregunta: 2016
 questions[434]= "435)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[434]= new Array();
 choices[434][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[434][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[434][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[434][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[434] = choices[434][0];
 units[434] = "43";
 comments[434] = "Id Pregunta: 434. SERVICIOS COMUNES";
 preguntaids[434] = 434


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[435]= "436)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[435]= new Array();
 choices[435][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[435][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[435][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[435][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[435] = choices[435][2];
 units[435] = "43";
 comments[435] = "Id Pregunta: 435. SERVICIOS COMUNES";
 preguntaids[435] = 435


//  Id pregunta: 436 Año de creación de pregunta: 2016
 questions[436]= "437)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:";
 choices[436]= new Array();
 choices[436][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[436][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[436][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[436][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[436] = choices[436][2];
 units[436] = "43";
 comments[436] = "Id Pregunta: 436. SERVICIOS COMUNES";
 preguntaids[436] = 436


//  Id pregunta: 437 Año de creación de pregunta: 2016
 questions[437]= "438)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta.";
 choices[437]= new Array();
 choices[437][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[437][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[437][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[437][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas &#8208; DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[437] = choices[437][0];
 units[437] = "43";
 comments[437] = "Id Pregunta: 437. SERVICIOS COMUNES";
 preguntaids[437] = 437


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[438]= "439)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[438]= new Array();
 choices[438][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[438][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[438][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[438][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[438] = choices[438][3];
 units[438] = "43";
 comments[438] = "Id Pregunta: 438. SERVICIOS COMUNES";
 preguntaids[438] = 438


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[439]= "440)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[439]= new Array();
 choices[439][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[439][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[439][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[439][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[439] = choices[439][1];
 units[439] = "43";
 comments[439] = "Id Pregunta: 439. SERVICIOS COMUNES";
 preguntaids[439] = 439


//  Id pregunta: 440 Año de creación de pregunta: 2016
 questions[440]= "441)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:";
 choices[440]= new Array();
 choices[440][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[440][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[440][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[440][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[440] = choices[440][2];
 units[440] = "43";
 comments[440] = "Id Pregunta: 440. SERVICIOS COMUNES";
 preguntaids[440] = 440


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[441]= "442)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[441]= new Array();
 choices[441][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[441][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[441][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[441][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[441] = choices[441][1];
 units[441] = "43";
 comments[441] = "Id Pregunta: 441. SERVICIOS COMUNES";
 preguntaids[441] = 441


//  Id pregunta: 442 Año de creación de pregunta: 2016
 questions[442]= "443)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:";
 choices[442]= new Array();
 choices[442][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[442][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[442][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[442][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[442] = choices[442][3];
 units[442] = "43";
 comments[442] = "Id Pregunta: 442. SERVICIOS COMUNES";
 preguntaids[442] = 442


//  Id pregunta: 443 Año de creación de pregunta: 2016
 questions[443]= "444)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:";
 choices[443]= new Array();
 choices[443][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[443][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[443][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[443][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[443] = choices[443][1];
 units[443] = "43";
 comments[443] = "Id Pregunta: 443. SERVICIOS COMUNES";
 preguntaids[443] = 443


//  Id pregunta: 444 Año de creación de pregunta: 2016
 questions[444]= "445)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?:";
 choices[444]= new Array();
 choices[444][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[444][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[444][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[444][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[444] = choices[444][1];
 units[444] = "43";
 comments[444] = "Id Pregunta: 444. SERVICIOS COMUNES";
 preguntaids[444] = 444


//  Id pregunta: 445 Año de creación de pregunta: 2016
 questions[445]= "446)  &iquest;Cu&aacute;l no es una funcionalidad que incorpora la versi&oacute;n 3.5 de Acceda?";
 choices[445]= new Array();
 choices[445][0] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o vencido el plazo de caducidad).";
 choices[445][1] = "Remisi&oacute;n a Notific@, desde el m&oacute;dulo de gesti&oacute;n de ACCEDA, de las notificaciones que se emitan como parte de la tramitaci&oacute;n de los expedientes.";
 choices[445][2] = "Gesti&oacute;n de notificaciones pendientes, notificadas y rehusadas (de forma expresa o sin haber vencido el plazo de caducidad).";
 choices[445][3] = "Parametrizaci&oacute;n de las opciones de env&iacute;o: canal de notificaci&oacute;n - Sede-e ACCEDA y Carpeta Ciudadana; DEH obligatorio; DEH voluntario / env&iacute;o postal, etc.";
 answers[445] = choices[445][2];
 units[445] = "43";
 comments[445] = "Id Pregunta: 445. SERVICIOS COMUNES";
 preguntaids[445] = 445


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[446]= "447)  &iquest;Cu&aacute;l es el servicio com&uacute;n que  permitir&aacute; la tramitaci&oacute;n por medios electr&oacute;nicos de todo el ciclo de vida involucrado en la concesi&oacute;n de ayudas provenientes de los fondos FEDER?";
 choices[446]= new Array();
 choices[446][0] = "IRIA";
 choices[446][1] = "GALATEA";
 choices[446][2] = "BADARAL";
 choices[446][3] = "SOROLLA";
 answers[446] = choices[446][1];
 units[446] = "43";
 comments[446] = "Id Pregunta: 446. SERVICIOS COMUNES";
 preguntaids[446] = 446


//  Id pregunta: 447 Año de creación de pregunta: 2016
 questions[447]= "448)  &iquest;Cu&aacute;l de los siguientes datos NO es obligatorio que figure en la realizaci&oacute;n de una inscripci&oacute;n en el Registro electr&oacute;nico de Apoderamientos?";
 choices[447]= new Array();
 choices[447][0] = "Nombre y apellidos, denominaci&oacute;n o raz&oacute;n social y NIF del poderante.";
 choices[447][1] = "Per&iacute;odo de vigencia de los tr&aacute;mites objeto de apoderamiento.";
 choices[447][2] = "Fecha de otorgamiento.";
 choices[447][3] = "N&uacute;mero de referencia del alta y fecha de alta en el Registro.";
 answers[447] = choices[447][1];
 units[447] = "43";
 comments[447] = "Id Pregunta: 447. SERVICIOS COMUNES";
 preguntaids[447] = 447


//  Id pregunta: 448 Año de creación de pregunta: 2016
 questions[448]= "449)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[448]= new Array();
 choices[448][0] = "Ejecutivo";
 choices[448][1] = "Limitativo";
 choices[448][2] = "Estimativo";
 choices[448][3] = "Progresivo";
 answers[448] = choices[448][2];
 units[448] = "10";
 comments[448] = "Id Pregunta: 448. PRESUPUESTOS GENERALES";
 preguntaids[448] = 448


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[449]= "450)  Dentro de la l&oacute;gica presupuestaria, los gastos tienen car&aacute;cter...";
 choices[449]= new Array();
 choices[449][0] = "Ejecutivo";
 choices[449][1] = "Limitativo";
 choices[449][2] = "Estimativo";
 choices[449][3] = "Progresivo";
 answers[449] = choices[449][1];
 units[449] = "10";
 comments[449] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";
 preguntaids[449] = 449


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[450]= "451)  La partida presupuestaria es equivalente a...";
 choices[450]= new Array();
 choices[450][0] = "El sujeto que realiza el gasto";
 choices[450][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[450][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[450][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[450] = choices[450][3];
 units[450] = "10";
 comments[450] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";
 preguntaids[450] = 450


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[451]= "452)  El cr&eacute;dito presupuestario es...";
 choices[451]= new Array();
 choices[451][0] = "El sujeto que realiza el gasto";
 choices[451][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[451][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[451][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[451] = choices[451][2];
 units[451] = "10";
 comments[451] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";
 preguntaids[451] = 451


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[452]= "453)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[452]= new Array();
 choices[452][0] = "Cifrada";
 choices[452][1] = "Conjunta";
 choices[452][2] = "Sistem&aacute;tica";
 choices[452][3] = "Todas son correctas";
 answers[452] = choices[452][3];
 units[452] = "10";
 comments[452] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";
 preguntaids[452] = 452


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[453]= "454)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[453]= new Array();
 choices[453][0] = "Los cr&eacute;ditos";
 choices[453][1] = "Las partidas presupuestarias";
 choices[453][2] = "Los derechos";
 choices[453][3] = "Las obligaciones";
 answers[453] = choices[453][2];
 units[453] = "10";
 comments[453] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";
 preguntaids[453] = 453


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[454]= "455)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[454]= new Array();
 choices[454][0] = "Los cr&eacute;ditos";
 choices[454][1] = "Las partidas presupuestarias";
 choices[454][2] = "Los derechos";
 choices[454][3] = "Las obligaciones";
 answers[454] = choices[454][3];
 units[454] = "10";
 comments[454] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";
 preguntaids[454] = 454


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[455]= "456)  En las Administraciones P&uacute;blicas...";
 choices[455]= new Array();
 choices[455][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[455][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[455][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[455][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[455] = choices[455][0];
 units[455] = "10";
 comments[455] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";
 preguntaids[455] = 455


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[456]= "457)  El Presupuesto por programas sirve para saber...";
 choices[456]= new Array();
 choices[456][0] = "En qu&eacute; nos gastamos el dinero";
 choices[456][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[456][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[456][3] = "Qui&eacute;n se gasta el dinero";
 answers[456] = choices[456][2];
 units[456] = "10";
 comments[456] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";
 preguntaids[456] = 456


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[457]= "458)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[457]= new Array();
 choices[457][0] = "En qu&eacute; nos gastamos el dinero";
 choices[457][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[457][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[457][3] = "Qui&eacute;n se gasta el dinero.";
 answers[457] = choices[457][0];
 units[457] = "10";
 comments[457] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";
 preguntaids[457] = 457


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[458]= "459)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[458]= new Array();
 choices[458][0] = "a) Los cuatro ejercicios siguientes.";
 choices[458][1] = "b) El ejercicio siguiente.";
 choices[458][2] = "c) Los dos ejercicios siguientes.";
 choices[458][3] = "d) Los tres ejercicios siguientes.";
 answers[458] = choices[458][3];
 units[458] = "10";
 comments[458] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";
 preguntaids[458] = 458


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[459]= "460)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[459]= new Array();
 choices[459][0] = "A nivel de secci&oacute;n de programa.";
 choices[459][1] = "A nivel de grupo de programa.";
 choices[459][2] = "Ninguna de las respuestas es correcta.";
 choices[459][3] = "A nivel de programa.";
 answers[459] = choices[459][3];
 units[459] = "10";
 comments[459] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";
 preguntaids[459] = 459


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[460]= "461)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[460]= new Array();
 choices[460][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[460][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[460][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[460][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[460] = choices[460][3];
 units[460] = "10";
 comments[460] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";
 preguntaids[460] = 460


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[461]= "462)  Seg&uacute;n el art&iacute;culo 41 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, las operaciones financieras que se distinguen son:";
 choices[461]= new Array();
 choices[461][0] = "Enajenaci&oacute;n de inversiones reales y transferencias de capital.";
 choices[461][1] = "Pasivos financieros y transferencias de capital.";
 choices[461][2] = "Activos financieros y pasivos financieros.";
 choices[461][3] = "Activos financieros y enajenaci&oacute;n de inversiones reales.";
 answers[461] = choices[461][2];
 units[461] = "10";
 comments[461] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";
 preguntaids[461] = 461


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[462]= "463)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[462]= new Array();
 choices[462][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[462][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[462][2] = "La normativa reguladora de cada derecho.";
 choices[462][3] = "Ley 50/1997, del Gobierno.";
 answers[462] = choices[462][2];
 units[462] = "10";
 comments[462] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";
 preguntaids[462] = 462


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[463]= "464)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[463]= new Array();
 choices[463][0] = "A los ministros.";
 choices[463][1] = "Las respuestas a) y b) son correctas.";
 choices[463][2] = "Las respuestas a) y b) no son correctas.";
 choices[463][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[463] = choices[463][1];
 units[463] = "10";
 comments[463] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";
 preguntaids[463] = 463


//  Id pregunta: 464 Año de creación de pregunta: 2016
 questions[464]= "465)  De acuerdo con lo establecido en la Ley General Presupuestaria, durante el ejercicio presupuestario no es posible modificar la cuant&iacute;a y/o finalidad de los cr&eacute;ditos contenidos en los presupuestos de gastos mediante:";
 choices[464]= new Array();
 choices[464][0] = "Transferencias de cr&eacute;dito.";
 choices[464][1] = "Incorporaciones de cr&eacute;dito.";
 choices[464][2] = "Imputaciones de cr&eacute;dito.";
 choices[464][3] = "Ampliaciones de cr&eacute;dito.";
 answers[464] = choices[464][2];
 units[464] = "10";
 comments[464] = "Id Pregunta: 464. PRESUPUESTOS GENERALES";
 preguntaids[464] = 464


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[465]= "466)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[465]= new Array();
 choices[465][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[465][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[465][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[465][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[465] = choices[465][3];
 units[465] = "10";
 comments[465] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";
 preguntaids[465] = 465


//  Id pregunta: 466 Año de creación de pregunta: 2016
 questions[466]= "467)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, &iquest;existe la posibilidad de comprometer gastos para ejercicios futuros?";
 choices[466]= new Array();
 choices[466][0] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio futuro y 50% para los dem&aacute;s.";
 choices[466][1] = "No, los cr&eacute;ditos presupuestarios se agotan con el fin del ejercicio presupuestario.";
 choices[466][2] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 70% para el primer ejercicio posterior; 60% para el segundo y 50% para tercero y cuarto.";
 choices[466][3] = "S&iacute;, pero respetando los siguientes porcentajes para cada uno de los ejercicios futuros: 60% para el primer ejercicio futuro; 50% para el segundo y tercero y 40% para el cuarto.";
 answers[466] = choices[466][2];
 units[466] = "10";
 comments[466] = "Id Pregunta: 466. PRESUPUESTOS GENERALES";
 preguntaids[466] = 466


//  Id pregunta: 467 Año de creación de pregunta: 2016
 questions[467]= "468)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales deber&aacute; de contener:";
 choices[467]= new Array();
 choices[467][0] = "Las respuestas a) y b) son correctas.";
 choices[467][1] = "Las respuestas a) y b) no son correctas.";
 choices[467][2] = "Contenido coherente con los planes sectoriales.";
 choices[467][3] = "Programas de actuaci&oacute;n de existentes en el &aacute;mbito de cada departamento.";
 answers[467] = choices[467][0];
 units[467] = "10";
 comments[467] = "Id Pregunta: 467. PRESUPUESTOS GENERALES";
 preguntaids[467] = 467


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[468]= "469)  A tenor del art&iacute;culo 34 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el ejercicio presupuestario coincidir&aacute;:";
 choices[468]= new Array();
 choices[468][0] = "Con el a&ntilde;o anterior.";
 choices[468][1] = "Con los tres a&ntilde;os anteriores.";
 choices[468][2] = "Con el a&ntilde;o natural.";
 choices[468][3] = "Con los dos a&ntilde;os anteriores.";
 answers[468] = choices[468][2];
 units[468] = "10";
 comments[468] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";
 preguntaids[468] = 468


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[469]= "470)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[469]= new Array();
 choices[469][0] = "Tres meses.";
 choices[469][1] = "Nueve meses.";
 choices[469][2] = "Cuatro meses.";
 choices[469][3] = "Seis meses.";
 answers[469] = choices[469][0];
 units[469] = "10";
 comments[469] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";
 preguntaids[469] = 469


//  Id pregunta: 470 Año de creación de pregunta: 2016
 questions[470]= "471)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[470]= new Array();
 choices[470][0] = "El Ministerio de Hacienda.";
 choices[470][1] = "El Ministerio de Econom&iacute;a.";
 choices[470][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[470][3] = "Ninguna de las respuestas es correcta.";
 answers[470] = choices[470][2];
 units[470] = "10";
 comments[470] = "Id Pregunta: 470. PRESUPUESTOS GENERALES";
 preguntaids[470] = 470


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[471]= "472)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[471]= new Array();
 choices[471][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[471][1] = "Las inversiones reales y financieras.";
 choices[471][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[471][3] = "Las transferencias de capital y las inversiones reales.";
 answers[471] = choices[471][3];
 units[471] = "10";
 comments[471] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";
 preguntaids[471] = 471


//  Id pregunta: 472 Año de creación de pregunta: 2016
 questions[472]= "473)  &iquest;Qui&eacute;n remitir&aacute; a las Cortes Generales un informe trimestral acerca de la utilizaci&oacute;n del Fondo regulado en el Fondo de Contingencia de ejecuci&oacute;n presupuestaria seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria?";
 choices[472]= new Array();
 choices[472][0] = "El Ministro de Econom&iacute;a.";
 choices[472][1] = "El Gobierno.";
 choices[472][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[472][3] = "El Presidente del Gobierno.";
 answers[472] = choices[472][1];
 units[472] = "10";
 comments[472] = "Id Pregunta: 472. PRESUPUESTOS GENERALES";
 preguntaids[472] = 472


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[473]= "474)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[473]= new Array();
 choices[473][0] = "Org&aacute;nica.";
 choices[473][1] = "Contable.";
 choices[473][2] = "Econ&oacute;mica.";
 choices[473][3] = "Por programas.";
 answers[473] = choices[473][2];
 units[473] = "10";
 comments[473] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";
 preguntaids[473] = 473


//  Id pregunta: 474 Año de creación de pregunta: 2016
 questions[474]= "475)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la modalidad de auditor&iacute;a cuyo objeto consiste en la verificaci&oacute;n selectiva de la adecuaci&oacute;n a la legalidad de la gesti&oacute;n presupuestaria, de contrataci&oacute;n, personal, ingresos y gesti&oacute;n de subvenciones, as&iacute; como de cualquier otro aspecto de la actividad econ&oacute;mico financiero de las entidades auditadas se denomina:";
 choices[474]= new Array();
 choices[474][0] = "Auditor&iacute;a de sistemas y procedimientos de gesti&oacute;n econ&oacute;mica y financiera.";
 choices[474][1] = "Auditor&iacute;a operativa.";
 choices[474][2] = "Auditor&iacute;a de cumplimiento.";
 choices[474][3] = "Auditor&iacute;a de econom&iacute;a, eficacia y eficiencia.";
 answers[474] = choices[474][2];
 units[474] = "10";
 comments[474] = "Id Pregunta: 474. PRESUPUESTOS GENERALES";
 preguntaids[474] = 474


//  Id pregunta: 475 Año de creación de pregunta: 2016
 questions[475]= "476)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[475]= new Array();
 choices[475][0] = "Ley 50/1997, del Gobierno.";
 choices[475][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[475][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[475][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[475] = choices[475][1];
 units[475] = "10";
 comments[475] = "Id Pregunta: 475. PRESUPUESTOS GENERALES";
 preguntaids[475] = 475


//  Id pregunta: 476 Año de creación de pregunta: 2016
 questions[476]= "477)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[476]= new Array();
 choices[476][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[476][1] = "Todas las respuestas son correctas.";
 choices[476][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[476][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[476] = choices[476][1];
 units[476] = "10";
 comments[476] = "Id Pregunta: 476. PRESUPUESTOS GENERALES";
 preguntaids[476] = 476


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[477]= "478)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[477]= new Array();
 choices[477][0] = "Anualmente.";
 choices[477][1] = "Ninguna de las respuestas es correcta.";
 choices[477][2] = "Trimestralmente.";
 choices[477][3] = "Semestralmente.";
 answers[477] = choices[477][0];
 units[477] = "10";
 comments[477] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";
 preguntaids[477] = 477


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[478]= "479)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[478]= new Array();
 choices[478][0] = "Al Gobierno.";
 choices[478][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[478][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[478][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[478] = choices[478][2];
 units[478] = "10";
 comments[478] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";
 preguntaids[478] = 478


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[479]= "480)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[479]= new Array();
 choices[479][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[479][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[479][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[479][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[479] = choices[479][2];
 units[479] = "10";
 comments[479] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";
 preguntaids[479] = 479


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[480]= "481)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[480]= new Array();
 choices[480][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[480][1] = "Intervenci&oacute;n formal y material.";
 choices[480][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[480][3] = "Intervenci&oacute;n formal y general.";
 answers[480] = choices[480][1];
 units[480] = "10";
 comments[480] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";
 preguntaids[480] = 480


//  Id pregunta: 481 Año de creación de pregunta: 2016
 questions[481]= "482)  Conforme a Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el Presupuesto del Estado, los cr&eacute;ditos destinados a atenciones protocolarias y representativas se especificar&aacute;n:";
 choices[481]= new Array();
 choices[481][0] = "A nivel de art&iacute;culo.";
 choices[481][1] = "A nivel de cap&iacute;tulo.";
 choices[481][2] = "Al nivel que corresponda conforme a su concreta clasificaci&oacute;n econ&oacute;mica.";
 choices[481][3] = "A nivel de concepto.";
 answers[481] = choices[481][2];
 units[481] = "10";
 comments[481] = "Id Pregunta: 481. PRESUPUESTOS GENERALES";
 preguntaids[481] = 481


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[482]= "483)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, en el &aacute;mbito del Ministerio de Defensa y de la Seguridad Social, el control se ejercer&aacute; a trav&eacute;s de:";
 choices[482]= new Array();
 choices[482][0] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[482][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[482][2] = "Las respuestas a) b) no son correctas.";
 choices[482][3] = "Las respuestas a) y b) son correctas.";
 answers[482] = choices[482][3];
 units[482] = "10";
 comments[482] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";
 preguntaids[482] = 482


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[483]= "484)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[483]= new Array();
 choices[483][0] = "Cuatro millones de euros.";
 choices[483][1] = "Seis millones de euros.";
 choices[483][2] = "Siete millones de euros.";
 choices[483][3] = "Cinco millones de euros.";
 answers[483] = choices[483][1];
 units[483] = "10";
 comments[483] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";
 preguntaids[483] = 483


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[484]= "485)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[484]= new Array();
 choices[484][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[484][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[484][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[484][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[484] = choices[484][0];
 units[484] = "10";
 comments[484] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";
 preguntaids[484] = 484


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[485]= "486)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[485]= new Array();
 choices[485][0] = "180 art&iacute;culos.";
 choices[485][1] = "182 art&iacute;culos.";
 choices[485][2] = "185 art&iacute;culos.";
 choices[485][3] = "190 art&iacute;culos.";
 answers[485] = choices[485][1];
 units[485] = "10";
 comments[485] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";
 preguntaids[485] = 485


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[486]= "487)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[486]= new Array();
 choices[486][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[486][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[486][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[486][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[486] = choices[486][2];
 units[486] = "10";
 comments[486] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";
 preguntaids[486] = 486


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[487]= "488)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[487]= new Array();
 choices[487][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[487][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[487][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[487][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[487] = choices[487][3];
 units[487] = "10";
 comments[487] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";
 preguntaids[487] = 487


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[488]= "489)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la prescripci&oacute;n de los derechos de la Hacienda P&uacute;blica estatal, se interrumpir&aacute; conforme a lo establecido en:";
 choices[488]= new Array();
 choices[488][0] = "La Ley General Tributaria.";
 choices[488][1] = "La Ley Presupuestaria.";
 choices[488][2] = "La Ley de Hacienda P&uacute;blica.";
 choices[488][3] = "Ninguna de las respuestas es correcta.";
 answers[488] = choices[488][0];
 units[488] = "10";
 comments[488] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";
 preguntaids[488] = 488


//  Id pregunta: 489 Año de creación de pregunta: 2016
 questions[489]= "490)  Seg&uacute;n el art&iacute;culo 56.6 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Hacienda dar&aacute; cuentas trimestralmente de los cr&eacute;ditos extraordinarias y suplementos de cr&eacute;dito a:";
 choices[489]= new Array();
 choices[489][0] = "Las Cortes Generales.";
 choices[489][1] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[489][2] = "El Gobierno.";
 choices[489][3] = "El Congreso de los Diputados.";
 answers[489] = choices[489][0];
 units[489] = "10";
 comments[489] = "Id Pregunta: 489. PRESUPUESTOS GENERALES";
 preguntaids[489] = 489


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[490]= "491)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[490]= new Array();
 choices[490][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[490][1] = "El Gobierno.";
 choices[490][2] = "El Presidente del Gobierno.";
 choices[490][3] = "El Consejo de Ministros.";
 answers[490] = choices[490][1];
 units[490] = "10";
 comments[490] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";
 preguntaids[490] = 490


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[491]= "492)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[491]= new Array();
 choices[491][0] = "Dos.";
 choices[491][1] = "Cuatro.";
 choices[491][2] = "Cinco.";
 choices[491][3] = "Tres.";
 answers[491] = choices[491][1];
 units[491] = "10";
 comments[491] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";
 preguntaids[491] = 491


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[492]= "493)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[492]= new Array();
 choices[492][0] = "A los cinco a&ntilde;os.";
 choices[492][1] = "A los dos a&ntilde;os.";
 choices[492][2] = "A los tres a&ntilde;os.";
 choices[492][3] = "A los cuatro a&ntilde;os.";
 answers[492] = choices[492][0];
 units[492] = "10";
 comments[492] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";
 preguntaids[492] = 492


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[493]= "494)  Seg&uacute;n Ley 47/2003, de 26 de noviembre, General Presupuestaria, el conjunto de gastos que se considera necesario realizar en el desarrollo de actividades orientadas a la consecuci&oacute;n de determinados objetivos preestablecidos es:";
 choices[493]= new Array();
 choices[493][0] = "Un programa presupuestario.";
 choices[493][1] = "Un concepto presupuestario.";
 choices[493][2] = "Una aplicaci&oacute;n presupuestaria.";
 choices[493][3] = "Un cr&eacute;dito presupuestario.";
 answers[493] = choices[493][0];
 units[493] = "10";
 comments[493] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";
 preguntaids[493] = 493


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[494]= "495)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[494]= new Array();
 choices[494][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[494][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[494][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[494][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[494] = choices[494][2];
 units[494] = "10";
 comments[494] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";
 preguntaids[494] = 494


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[495]= "496)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[495]= new Array();
 choices[495][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[495][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[495][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[495][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[495] = choices[495][2];
 units[495] = "10";
 comments[495] = "Id Pregunta: 495. PRESUPUESTOS GENERALES";
 preguntaids[495] = 495


//  Id pregunta: 496 Año de creación de pregunta: 2016
 questions[496]= "497)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[496]= new Array();
 choices[496][0] = "Por reembolso de pr&eacute;stamos.";
 choices[496][1] = "Por la venta de bienes.";
 choices[496][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[496][3] = "Por prestaci&oacute;n de servicios.";
 answers[496] = choices[496][2];
 units[496] = "10";
 comments[496] = "Id Pregunta: 496. PRESUPUESTOS GENERALES";
 preguntaids[496] = 496


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[497]= "498)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[497]= new Array();
 choices[497][0] = "La Ley General Tributaria.";
 choices[497][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[497][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[497][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[497] = choices[497][2];
 units[497] = "10";
 comments[497] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";
 preguntaids[497] = 497


//  Id pregunta: 498 Año de creación de pregunta: 2016
 questions[498]= "499)  A los efectos de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , forman parte del sector p&uacute;blico estatal:";
 choices[498]= new Array();
 choices[498][0] = "Las respuestas a) y b) son correctas.";
 choices[498][1] = "Los organismos aut&oacute;nomos dependientes de la Administraci&oacute;n General del Estado.";
 choices[498][2] = "Las entidades p&uacute;blicas empresariales, dependientes de la Administraci&oacute;n General del Estado, o de cualesquiera otros organismos p&uacute;blicos vinculados o dependientes de ella.";
 choices[498][3] = "Las respuestas a) y b) no son correctas.";
 answers[498] = choices[498][0];
 units[498] = "10";
 comments[498] = "Id Pregunta: 498. PRESUPUESTOS GENERALES";
 preguntaids[498] = 498


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[499]= "500)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[499]= new Array();
 choices[499][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[499][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[499][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[499][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[499] = choices[499][3];
 units[499] = "10";
 comments[499] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";
 preguntaids[499] = 499


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[500]= "501)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la Deuda P&uacute;blica podr&aacute; estar representada en:";
 choices[500]= new Array();
 choices[500][0] = "En t&iacute;tulos-valores.";
 choices[500][1] = "Las respuestas a) y b) son correctas.";
 choices[500][2] = "Las respuestas a) y b) no son correctas.";
 choices[500][3] = "En cuenta.";
 answers[500] = choices[500][1];
 units[500] = "10";
 comments[500] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";
 preguntaids[500] = 500


//  Id pregunta: 501 Año de creación de pregunta: 2016
 questions[501]= "502)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[501]= new Array();
 choices[501][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[501][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[501][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[501][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[501] = choices[501][0];
 units[501] = "10";
 comments[501] = "Id Pregunta: 501. PRESUPUESTOS GENERALES";
 preguntaids[501] = 501


//  Id pregunta: 502 Año de creación de pregunta: 2016
 questions[502]= "503)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[502]= new Array();
 choices[502][0] = "El presidente de las Cortes Generales.";
 choices[502][1] = "El Presidente del Gobierno.";
 choices[502][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[502][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[502] = choices[502][3];
 units[502] = "10";
 comments[502] = "Id Pregunta: 502. PRESUPUESTOS GENERALES";
 preguntaids[502] = 502


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[503]= "504)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[503]= new Array();
 choices[503][0] = "Las sociedades mercantiles estatales.";
 choices[503][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[503][2] = "Las respuestas a) y b) son correctas.";
 choices[503][3] = "Las respuestas a) y b) no son correctas.";
 answers[503] = choices[503][2];
 units[503] = "10";
 comments[503] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";
 preguntaids[503] = 503


//  Id pregunta: 504 Año de creación de pregunta: 2016
 questions[504]= "505)  La Ley Org&aacute;nica 2/2012 destaca una serie de principios generales entre los que no se encuentra:";
 choices[504]= new Array();
 choices[504][0] = "Principio de transparencia.";
 choices[504][1] = "Principio de cooperaci&oacute;n.";
 choices[504][2] = "Principio de eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos.";
 choices[504][3] = "Principio de lealtad institucional.";
 answers[504] = choices[504][1];
 units[504] = "10";
 comments[504] = "Id Pregunta: 504. PRESUPUESTOS GENERALES";
 preguntaids[504] = 504


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[505]= "506)  Respecto a la Ley Org&aacute;nica 2/2012 se&ntilde;ale la respuesta falsa:";
 choices[505]= new Array();
 choices[505][0] = "La elaboraci&oacute;n, aprobaci&oacute;n y ejecuci&oacute;n de los Presupuestos y dem&aacute;s actuaciones que afecten a los gastos o ingresos de las Administraciones P&uacute;blicas y dem&aacute;s entidades que forman parte del sector p&uacute;blico se someter&aacute; al principio de estabilidad presupuestaria.";
 choices[505][1] = "Ninguna Administraci&oacute;n P&uacute;blica podr&aacute; incurrir en d&eacute;ficit estructural, definido como d&eacute;ficit ajustado del ciclo, neto de medidas excepcionales y temporales.";
 choices[505][2] = "Excepcionalmente, el Estado y las Comunidades Aut&oacute;nomas podr&aacute;n incurrir en d&eacute;ficit estructural en caso de cat&aacute;strofes naturales, recesi&oacute;n econ&oacute;mica grave o situaciones de emergencia extraordinaria que escapen al control de las Administraciones P&uacute;blicas y perjudiquen considerablemente su situaci&oacute;n financiera o su sostenibilidad econ&oacute;mica o social.";
 choices[505][3] = "Las Corporaciones Locales deber&aacute;n mantener una posici&oacute;n de equilibrio presupuestario.";
 answers[505] = choices[505][3];
 units[505] = "10";
 comments[505] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";
 preguntaids[505] = 505


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[506]= "507)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[506]= new Array();
 choices[506][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[506][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[506][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[506][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[506] = choices[506][2];
 units[506] = "10";
 comments[506] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";
 preguntaids[506] = 506


//  Id pregunta: 507 Año de creación de pregunta: 2016
 questions[507]= "508)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[507]= new Array();
 choices[507][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[507][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[507][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[507][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[507] = choices[507][3];
 units[507] = "10";
 comments[507] = "Id Pregunta: 507. PRESUPUESTOS GENERALES";
 preguntaids[507] = 507


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[508]= "509)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[508]= new Array();
 choices[508][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[508][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[508][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[508][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[508] = choices[508][3];
 units[508] = "10";
 comments[508] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";
 preguntaids[508] = 508


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[509]= "510)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[509]= new Array();
 choices[509][0] = "Reducir el gasto p&uacute;blico.";
 choices[509][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[509][2] = "Reducir el endeudamiento neto.";
 choices[509][3] = "Al Fondo de Contingencia.";
 answers[509] = choices[509][2];
 units[509] = "10";
 comments[509] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";
 preguntaids[509] = 509


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[510]= "511)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[510]= new Array();
 choices[510][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[510][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[510][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[510][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[510] = choices[510][3];
 units[510] = "10";
 comments[510] = "Id Pregunta: 510. PRESUPUESTOS GENERALES";
 preguntaids[510] = 510


//  Id pregunta: 511 Año de creación de pregunta: 2016
 questions[511]= "512)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[511]= new Array();
 choices[511][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[511][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[511][2] = "Absoluta frente a cualquier otro gasto.";
 choices[511][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[511] = choices[511][2];
 units[511] = "10";
 comments[511] = "Id Pregunta: 511. PRESUPUESTOS GENERALES";
 preguntaids[511] = 511


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[512]= "513)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[512]= new Array();
 choices[512][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[512][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[512][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[512][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[512] = choices[512][2];
 units[512] = "7";
 comments[512] = "Id Pregunta: 512. LEY 39/2015";
 preguntaids[512] = 512


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[513]= "514)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[513]= new Array();
 choices[513][0] = "solo mediante ley";
 choices[513][1] = "reglamentariamente";
 choices[513][2] = "mediante ley o reglamentariamente";
 choices[513][3] = "ninguna es correcta";
 answers[513] = choices[513][0];
 units[513] = "7";
 comments[513] = "Id Pregunta: 513. LEY 39/2015";
 preguntaids[513] = 513


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[514]= "515)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[514]= new Array();
 choices[514][0] = "solo mediante ley";
 choices[514][1] = "reglamentariamente";
 choices[514][2] = "mediante ley o reglamentariamente";
 choices[514][3] = "ninguna es correcta";
 answers[514] = choices[514][1];
 units[514] = "7";
 comments[514] = "Id Pregunta: 514. LEY 39/2015";
 preguntaids[514] = 514


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[515]= "516)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[515]= new Array();
 choices[515][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[515][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[515][2] = "el sector p&uacute;blico institucional";
 choices[515][3] = "el sector privado corporativo";
 answers[515] = choices[515][3];
 units[515] = "7";
 comments[515] = "Id Pregunta: 515. LEY 39/2015";
 preguntaids[515] = 515


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[516]= "517)  El sector p&uacute;blico institucional se integra por:";
 choices[516]= new Array();
 choices[516][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[516][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[516][2] = "las Universidades p&uacute;blicas";
 choices[516][3] = "todas son correctas";
 answers[516] = choices[516][3];
 units[516] = "7";
 comments[516] = "Id Pregunta: 516. LEY 39/2015";
 preguntaids[516] = 516


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[517]= "518)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[517]= new Array();
 choices[517][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[517][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[517][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[517][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[517] = choices[517][1];
 units[517] = "7";
 comments[517] = "Id Pregunta: 517. LEY 39/2015";
 preguntaids[517] = 517


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[518]= "519)  Las Universidades p&uacute;blicas:";
 choices[518]= new Array();
 choices[518][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[518][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[518][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[518][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[518] = choices[518][1];
 units[518] = "7";
 comments[518] = "Id Pregunta: 518. LEY 39/2015";
 preguntaids[518] = 518


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[519]= "520)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[519]= new Array();
 choices[519][0] = "la Administraci&oacute;n General del Estado";
 choices[519][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[519][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[519][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[519] = choices[519][3];
 units[519] = "7";
 comments[519] = "Id Pregunta: 519. LEY 39/2015";
 preguntaids[519] = 519


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[520]= "521)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[520]= new Array();
 choices[520][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[520][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[520][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[520][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[520] = choices[520][0];
 units[520] = "7";
 comments[520] = "Id Pregunta: 520. LEY 39/2015";
 preguntaids[520] = 520


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[521]= "522)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[521]= new Array();
 choices[521][0] = "un art&iacute;culo";
 choices[521][1] = "dos art&iacute;culos";
 choices[521][2] = "tres art&iacute;culos";
 choices[521][3] = "cuatro art&iacute;culos";
 answers[521] = choices[521][1];
 units[521] = "7";
 comments[521] = "Id Pregunta: 521. LEY 39/2015";
 preguntaids[521] = 521


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[522]= "523)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[522]= new Array();
 choices[522][0] = "De los interesados en el procedimiento";
 choices[522][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[522][2] = "Disposiciones generales";
 choices[522][3] = "De los actos administrativos";
 answers[522] = choices[522][2];
 units[522] = "7";
 comments[522] = "Id Pregunta: 522. LEY 39/2015";
 preguntaids[522] = 522


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[523]= "524)  El sector p&uacute;blico institucional se integra por:";
 choices[523]= new Array();
 choices[523][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[523][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[523][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[523][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[523] = choices[523][1];
 units[523] = "7";
 comments[523] = "Id Pregunta: 523. LEY 39/2015";
 preguntaids[523] = 523


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[524]= "525)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[524]= new Array();
 choices[524][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[524][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[524][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[524][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[524] = choices[524][1];
 units[524] = "7";
 comments[524] = "Id Pregunta: 524. LEY 39/2015";
 preguntaids[524] = 524


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[525]= "526)  Se consideran interesados en el procedimiento administrativo:";
 choices[525]= new Array();
 choices[525][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[525][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[525][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[525][3] = "todas son correctas";
 answers[525] = choices[525][0];
 units[525] = "7";
 comments[525] = "Id Pregunta: 525. LEY 39/2015";
 preguntaids[525] = 525


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[526]= "527)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[526]= new Array();
 choices[526][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[526][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[526][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[526][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[526] = choices[526][3];
 units[526] = "7";
 comments[526] = "Id Pregunta: 526. LEY 39/2015";
 preguntaids[526] = 526


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[527]= "528)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[527]= new Array();
 choices[527][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[527][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[527][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[527][3] = "cualquiera que sea el estado del procedimiento";
 answers[527] = choices[527][3];
 units[527] = "7";
 comments[527] = "Id Pregunta: 527. LEY 39/2015";
 preguntaids[527] = 527


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[528]= "529)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[528]= new Array();
 choices[528][0] = "tienen capacidad de obrar limitada";
 choices[528][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[528][2] = "no tienen capacidad de obrar";
 choices[528][3] = "ninguna es correcta";
 answers[528] = choices[528][2];
 units[528] = "7";
 comments[528] = "Id Pregunta: 528. LEY 39/2015";
 preguntaids[528] = 528


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[529]= "530)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[529]= new Array();
 choices[529][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[529][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[529][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[529][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[529] = choices[529][2];
 units[529] = "7";
 comments[529] = "Id Pregunta: 529. LEY 39/2015";
 preguntaids[529] = 529


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[530]= "531)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[530]= new Array();
 choices[530][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[530][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[530][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[530][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[530] = choices[530][3];
 units[530] = "7";
 comments[530] = "Id Pregunta: 530. LEY 39/2015";
 preguntaids[530] = 530


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[531]= "532)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[531]= new Array();
 choices[531][0] = "formular solicitudes";
 choices[531][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[531][2] = "presentar declaraciones responsables o comunicaciones";
 choices[531][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[531] = choices[531][1];
 units[531] = "7";
 comments[531] = "Id Pregunta: 531. LEY 39/2015";
 preguntaids[531] = 531


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[532]= "533)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[532]= new Array();
 choices[532][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[532][1] = "mediante resoluci&oacute;n judicial especial";
 choices[532][2] = "&uacute;nicamente mediante poder notarial";
 choices[532][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[532] = choices[532][3];
 units[532] = "7";
 comments[532] = "Id Pregunta: 532. LEY 39/2015";
 preguntaids[532] = 532


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[533]= "534)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[533]= new Array();
 choices[533][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[533][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[533][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[533][3] = "todas son correctas";
 answers[533] = choices[533][3];
 units[533] = "7";
 comments[533] = "Id Pregunta: 533. LEY 39/2015";
 preguntaids[533] = 533


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[534]= "535)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[534]= new Array();
 choices[534][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[534][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[534][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[534][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[534] = choices[534][2];
 units[534] = "7";
 comments[534] = "Id Pregunta: 534. LEY 39/2015";
 preguntaids[534] = 534


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[535]= "536)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[535]= new Array();
 choices[535][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[535][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[535][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[535][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[535] = choices[535][1];
 units[535] = "7";
 comments[535] = "Id Pregunta: 535. LEY 39/2015";
 preguntaids[535] = 535


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[536]= "537)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[536]= new Array();
 choices[536][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[536][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[536][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[536][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[536] = choices[536][2];
 units[536] = "7";
 comments[536] = "Id Pregunta: 536. LEY 39/2015";
 preguntaids[536] = 536


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[537]= "538)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[537]= new Array();
 choices[537][0] = "la Administraci&oacute;n General del Estado";
 choices[537][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[537][2] = "las Entidades Locales";
 choices[537][3] = "todas son correctas";
 answers[537] = choices[537][3];
 units[537] = "7";
 comments[537] = "Id Pregunta: 537. LEY 39/2015";
 preguntaids[537] = 537


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[538]= "539)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[538]= new Array();
 choices[538][0] = "apud acta";
 choices[538][1] = "presencialmente";
 choices[538][2] = "electr&oacute;nicamente";
 choices[538][3] = "todas son correctas";
 answers[538] = choices[538][3];
 units[538] = "7";
 comments[538] = "Id Pregunta: 538. LEY 39/2015";
 preguntaids[538] = 538


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[539]= "540)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[539]= new Array();
 choices[539][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[539][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[539][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[539][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[539] = choices[539][1];
 units[539] = "7";
 comments[539] = "Id Pregunta: 539. LEY 39/2015";
 preguntaids[539] = 539


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[540]= "541)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[540]= new Array();
 choices[540][0] = "los registros mercantiles";
 choices[540][1] = "los registros de la propiedad";
 choices[540][2] = "los protocolos notariales";
 choices[540][3] = "todas son correctas";
 answers[540] = choices[540][3];
 units[540] = "7";
 comments[540] = "Id Pregunta: 540. LEY 39/2015";
 preguntaids[540] = 540


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[541]= "542)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[541]= new Array();
 choices[541][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[541][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[541][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[541][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[541] = choices[541][1];
 units[541] = "7";
 comments[541] = "Id Pregunta: 541. LEY 39/2015";
 preguntaids[541] = 541


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[542]= "543)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[542]= new Array();
 choices[542][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[542][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[542][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[542][3] = "todas son correctas";
 answers[542] = choices[542][3];
 units[542] = "7";
 comments[542] = "Id Pregunta: 542. LEY 39/2015";
 preguntaids[542] = 542


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[543]= "544)  Se&ntilde;ala la correcta:";
 choices[543]= new Array();
 choices[543][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[543][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[543][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[543][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[543] = choices[543][1];
 units[543] = "7";
 comments[543] = "Id Pregunta: 543. LEY 39/2015";
 preguntaids[543] = 543


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[544]= "545)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[544]= new Array();
 choices[544][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[544][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[544][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[544][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[544] = choices[544][0];
 units[544] = "26";
 comments[544] = "Id Pregunta: 544. Gobernanza TIC";
 preguntaids[544] = 544


//  Id pregunta: 545 Año de creación de pregunta: 2016
 questions[545]= "546)  &iquest;Qu&eacute; est&aacute;ndar ISO define un marco de trabajo para la gobernanza TIC?";
 choices[545]= new Array();
 choices[545][0] = "ISO/IEC 31000";
 choices[545][1] = "ISO/IEC 14000";
 choices[545][2] = "ISO/IEC 38500";
 choices[545][3] = "ISO/IEC 18000";
 answers[545] = choices[545][2];
 units[545] = "26";
 comments[545] = "Id Pregunta: 545. Gobernanza TIC";
 preguntaids[545] = 545


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[546]= "547)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[546]= new Array();
 choices[546][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[546][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[546][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[546][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[546] = choices[546][3];
 units[546] = "26";
 comments[546] = "Id Pregunta: 546. Gobernanza TIC";
 preguntaids[546] = 546


//  Id pregunta: 547 Año de creación de pregunta: 2016
 questions[547]= "548)  &iquest;Cu&aacute;l es la nueva denominaci&oacute;n para la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n tras la aprobaci&oacute;n del Real Decreto 424/2016, de 11 de noviembre, por el que se establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales?";
 choices[547]= new Array();
 choices[547][0] = "Subsecretar&iacute;a de Energ&iacute;a, Turismo y Agenda Digital";
 choices[547][1] = "Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[547][2] = "Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[547][3] = "Secretar&iacute;a de Estado de Administraci&oacute;n Digital";
 answers[547] = choices[547][1];
 units[547] = "26";
 comments[547] = "Id Pregunta: 547. Gobernanza TIC";
 preguntaids[547] = 547


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[548]= "549)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[548]= new Array();
 choices[548][0] = "Conformidad";
 choices[548][1] = "Responsabilidad";
 choices[548][2] = "Adquisici&oacute;n";
 choices[548][3] = "Desempe&ntilde;o";
 answers[548] = choices[548][0];
 units[548] = "26";
 comments[548] = "Id Pregunta: 548. Gobernanza TIC";
 preguntaids[548] = 548


//  Id pregunta: 549 Año de creación de pregunta: 2016
 questions[549]= "550)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[549]= new Array();
 choices[549][0] = "Integrar la estrategia TIC con la de negocio";
 choices[549][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[549][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[549][3] = "Todas las anteriores";
 answers[549] = choices[549][3];
 units[549] = "26";
 comments[549] = "Id Pregunta: 549. Gobernanza TIC";
 preguntaids[549] = 549


//  Id pregunta: 550 Año de creación de pregunta: 2016
 questions[550]= "551)  El &aacute;mbito de aplicaci&oacute;n del RD 806/2014 de Gobernanza TIC es:";
 choices[550]= new Array();
 choices[550][0] = "La Administraci&oacute;n General del Estado";
 choices[550][1] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos";
 choices[550][2] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos y las Comunidades Aut&oacute;nomas";
 choices[550][3] = "La Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos, las Comunidades Aut&oacute;nomas y las Entidades Locales";
 answers[550] = choices[550][1];
 units[550] = "26";
 comments[550] = "Id Pregunta: 550. Gobernanza TIC";
 preguntaids[550] = 550


//  Id pregunta: 551 Año de creación de pregunta: 2016
 questions[551]= "552)  El presidente del pleno de la Comisi&oacute;n de Estrategia TIC es :";
 choices[551]= new Array();
 choices[551][0] = "El Ministro de Energ&iacute;a, Turismo y Agenda Digital";
 choices[551][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas";
 choices[551][2] = "El Presidente del Gobierno";
 choices[551][3] = "El Secretario General de Administraci&oacute;n Digital";
 answers[551] = choices[551][1];
 units[551] = "26";
 comments[551] = "Id Pregunta: 551. Gobernanza TIC";
 preguntaids[551] = 551


//  Id pregunta: 552 Año de creación de pregunta: 2016
 questions[552]= "553)  Entre las funciones a desarrollar por la Comisi&oacute;n Sectorial de la administraci&oacute;n electr&oacute;nica NO se encuentra:";
 choices[552]= new Array();
 choices[552][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[552][1] = "Impulsar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[552][2] = "Asegurar la cooperaci&oacute;n entre las Administraciones P&uacute;blicas para proporcionar informaci&oacute;n administrativa clara, actualizada e inequ&iacute;voca.";
 choices[552][3] = "El seguimiento de la ejecuci&oacute;n del Plan de Transformaci&oacute;n Digital";
 answers[552] = choices[552][3];
 units[552] = "26";
 comments[552] = "Id Pregunta: 552. Gobernanza TIC";
 preguntaids[552] = 552


//  Id pregunta: 553 Año de creación de pregunta: 2016
 questions[553]= "554)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[553]= new Array();
 choices[553][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[553][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[553][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[553][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[553] = choices[553][2];
 units[553] = "26";
 comments[553] = "Id Pregunta: 553. Gobernanza TIC";
 preguntaids[553] = 553


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[554]= "555)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[554]= new Array();
 choices[554][0] = "Establecer redes de telecomunicaciones continentales";
 choices[554][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[554][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[554][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[554] = choices[554][0];
 units[554] = "17";
 comments[554] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";
 preguntaids[554] = 554


//  Id pregunta: 555 Año de creación de pregunta: 2016
 questions[555]= "556)  &iquest;Cu&aacute;l de las siguientes iniciativas busca la mejora del acceso de los consumidores y las empresas a los bienes y servicios digitales, como parte de la estrategia para el Mercado &Uacute;nico Digital de la UE?";
 choices[555]= new Array();
 choices[555][0] = "Una paqueter&iacute;a m&aacute;s eficiente y asequible";
 choices[555][1] = "Revisar el marco de comunicaci&oacute;n audiovisual con el fin de adecuarlo al siglo XXI";
 choices[555][2] = "Reforzar la confianza y la seguridad en los servicios digitales, en particular en relaci&oacute;n con el tratamiento de datos personales";
 choices[555][3] = "Todas lo son";
 answers[555] = choices[555][0];
 units[555] = "17";
 comments[555] = "Id Pregunta: 555. Mercado &Uacute;nico Digital";
 preguntaids[555] = 555


//  Id pregunta: 556 Año de creación de pregunta: 2016
 questions[556]= "557)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[556]= new Array();
 choices[556][0] = "El BCE";
 choices[556][1] = "El Parlamento";
 choices[556][2] = "El Consejo";
 choices[556][3] = "La Comisi&oacute;n";
 answers[556] = choices[556][3];
 units[556] = "17";
 comments[556] = "Id Pregunta: 556. Mercado &Uacute;nico Digital";
 preguntaids[556] = 556


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[557]= "558)  &iquest;Qui&eacute;nes son los beneficiarios de la estrategia para el Mercado &Uacute;nico Digital en la UE?";
 choices[557]= new Array();
 choices[557][0] = "Consumidores";
 choices[557][1] = "PYMES y Start-ups";
 choices[557][2] = "La Industria";
 choices[557][3] = "Todos los anteriores";
 answers[557] = choices[557][3];
 units[557] = "17";
 comments[557] = "Id Pregunta: 557. Mercado &Uacute;nico Digital";
 preguntaids[557] = 557


//  Id pregunta: 558 Año de creación de pregunta: 2016
 questions[558]= "559)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[558]= new Array();
 choices[558][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[558][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[558][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[558][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[558] = choices[558][2];
 units[558] = "17";
 comments[558] = "Id Pregunta: 558. Mercado &Uacute;nico Digital";
 preguntaids[558] = 558


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[559]= "560)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[559]= new Array();
 choices[559][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[559][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[559][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[559][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[559] = choices[559][0];
 units[559] = "19";
 comments[559] = "Id Pregunta: 559. Agenda Digital";
 preguntaids[559] = 559


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[560]= "561)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[560]= new Array();
 choices[560][0] = "En 2015";
 choices[560][1] = "En 2013";
 choices[560][2] = "En 2016";
 choices[560][3] = "En 2007";
 answers[560] = choices[560][1];
 units[560] = "19";
 comments[560] = "Id Pregunta: 560. Agenda Digital";
 preguntaids[560] = 560


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[561]= "562)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[561]= new Array();
 choices[561][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[561][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[561][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[561][3] = "Todos los anteriores";
 answers[561] = choices[561][3];
 units[561] = "19";
 comments[561] = "Id Pregunta: 561. Agenda Digital";
 preguntaids[561] = 561


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[562]= "563)  &iquest;Cu&aacute;l de los siguientes no es un obst&aacute;culo identificado por la Comisi&oacute;n para el desarrollo de la Agenda Digital europea?";
 choices[562]= new Array();
 choices[562][0] = "El incremento de la ciberdelincuencia y el riesgo de escasa confianza en la redes";
 choices[562][1] = "La falta de inversi&oacute;n en campa&ntilde;as de comunicaci&oacute;n en los pa&iacute;ses miembros";
 choices[562][2] = "Las carencias en la alfabetizaci&oacute;n y la capacitaci&oacute;n digitales";
 choices[562][3] = "La ausencia de inversi&oacute;n en las redes";
 answers[562] = choices[562][1];
 units[562] = "19";
 comments[562] = "Id Pregunta: 562. Agenda Digital";
 preguntaids[562] = 562


//  Id pregunta: 563 Año de creación de pregunta: 2016
 questions[563]= "564)  El plan nacional de ciudades inteligentes...";
 choices[563]= new Array();
 choices[563][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[563][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[563][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[563][3] = "No existe";
 answers[563] = choices[563][1];
 units[563] = "19";
 comments[563] = "Id Pregunta: 563. Ciudades Inteligentes";
 preguntaids[563] = 563


//  Id pregunta: 564 Año de creación de pregunta: 2016
 questions[564]= "565)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[564]= new Array();
 choices[564][0] = "Entre 1973 y 1978";
 choices[564][1] = "Entre 1992 y 1996";
 choices[564][2] = "Entre 1978 y 1985";
 choices[564][3] = "Entre 2008 y 2013";
 answers[564] = choices[564][2];
 units[564] = "12";
 comments[564] = "Id Pregunta: 564. Modelo econ&oacute;mico";
 preguntaids[564] = 564


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[565]= "566)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[565]= new Array();
 choices[565][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[565][1] = "Excesiva estabilidad de empleo";
 choices[565][2] = "An&eacute;mico crecimiento de la productividad";
 choices[565][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[565] = choices[565][1];
 units[565] = "12";
 comments[565] = "Id Pregunta: 565. Modelo econ&oacute;mico";
 preguntaids[565] = 565


//  Id pregunta: 566 Año de creación de pregunta: 2016
 questions[566]= "567)  La &quot;Poblaci&oacute;n Activa&quot; que tiene en cuenta la Encuesta de Poblaci&oacute;n Activa (EPA), incluye:";
 choices[566]= new Array();
 choices[566][0] = "Los ocupados y los parados activos";
 choices[566][1] = "S&oacute;lo los ocupados";
 choices[566][2] = "Los ocupados y los inactivos";
 choices[566][3] = "Los que han trabajado en los &uacute;ltimos 6 meses";
 answers[566] = choices[566][0];
 units[566] = "12";
 comments[566] = "Id Pregunta: 566. Modelo econ&oacute;mico";
 preguntaids[566] = 566


//  Id pregunta: 567 Año de creación de pregunta: 2016
 questions[567]= "568)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[567]= new Array();
 choices[567][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[567][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[567][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[567][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[567] = choices[567][3];
 units[567] = "12";
 comments[567] = "Id Pregunta: 567. Modelo econ&oacute;mico";
 preguntaids[567] = 567


//  Id pregunta: 568 Año de creación de pregunta: 2016
 questions[568]= "569)  Cuando decimos que la inversi&oacute;n extranjera en Espa&ntilde;a tiene un car&aacute;cter proc&iacute;clico, nos referimos a que:";
 choices[568]= new Array();
 choices[568][0] = "Aumenta cuando la econom&iacute;a est&aacute; en crecimiento, y se reduce cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[568][1] = "Se reduce cuando la econom&iacute;a est&aacute; en crecimiento, y aumenta cuando el pa&iacute;s entra en recesi&oacute;n";
 choices[568][2] = "Aumenta cuando el pa&iacute;s entra en recesi&oacute;n, y aumenta cuando la econom&iacute;a est&aacute; en crecimiento";
 choices[568][3] = "Se reduce cuando el pa&iacute;s entra en recesi&oacute;n, y se reduce cuando la econom&iacute;a est&aacute; en crecimiento";
 answers[568] = choices[568][0];
 units[568] = "12";
 comments[568] = "Id Pregunta: 568. Modelo econ&oacute;mico";
 preguntaids[568] = 568


//  Id pregunta: 569 Año de creación de pregunta: 2016
 questions[569]= "570)  El sector que tiene un mayor peso en el PIB espa&ntilde;ol es el:";
 choices[569]= new Array();
 choices[569][0] = "Primario, que incluye la agricultura y la pesca";
 choices[569][1] = "Secundario, compuesto por los sectores industrial, de la energ&iacute;a y de la construcci&oacute;n";
 choices[569][2] = "Minero, junto con las exportaciones de comercio";
 choices[569][3] = "Servicios";
 answers[569] = choices[569][3];
 units[569] = "12";
 comments[569] = "Id Pregunta: 569. Modelo econ&oacute;mico";
 preguntaids[569] = 569


//  Id pregunta: 570 Año de creación de pregunta: 2016
 questions[570]= "571)  El sector Turismo en Espa&ntilde;a, representa:";
 choices[570]= new Array();
 choices[570][0] = "Alrededor de un 26% del PIB";
 choices[570][1] = "Alrededor de un 11% del PIB";
 choices[570][2] = "Alrededor de un 34% del PIB";
 choices[570][3] = "Alrededor de un 7% del PIB";
 answers[570] = choices[570][1];
 units[570] = "12";
 comments[570] = "Id Pregunta: 570. Modelo econ&oacute;mico";
 preguntaids[570] = 570


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[571]= "572)  El sector Servicios NO incluye:";
 choices[571]= new Array();
 choices[571][0] = "El Comercio";
 choices[571][1] = "Los Transportes";
 choices[571][2] = "La Energ&iacute;a";
 choices[571][3] = "Las Comunicaciones";
 answers[571] = choices[571][2];
 units[571] = "12";
 comments[571] = "Id Pregunta: 571. Modelo econ&oacute;mico";
 preguntaids[571] = 571


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[572]= "573)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[572]= new Array();
 choices[572][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[572][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[572][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[572][3] = "La tasa de desempleo ronda el 20%";
 answers[572] = choices[572][2];
 units[572] = "12";
 comments[572] = "Id Pregunta: 572. Modelo econ&oacute;mico";
 preguntaids[572] = 572


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[573]= "574)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[573]= new Array();
 choices[573][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[573][1] = "Entrada en la Uni&oacute;n Europea";
 choices[573][2] = "Pactos de la Moncloa";
 choices[573][3] = "Ingreso en la ONU";
 answers[573] = choices[573][3];
 units[573] = "12";
 comments[573] = "Id Pregunta: 573. Modelo econ&oacute;mico";
 preguntaids[573] = 573


//  Id pregunta: 574 Año de creación de pregunta: 2016
 questions[574]= "575)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de la serie IEEE 802.11 se conoce como Fast Basic Service Set Transition, el cual est&aacute; enfocado a permitir la conexi&oacute;n continua de clientes en movimiento?";
 choices[574]= new Array();
 choices[574][0] = "IEEE 802.11p";
 choices[574][1] = "IEEE 802.11r";
 choices[574][2] = "IEEE 802.11v";
 choices[574][3] = "IEEE 802.11w";
 answers[574] = choices[574][1];
 units[574] = "112";
 comments[574] = "Id Pregunta: 574. Tema 112. TAI 2016.";
 preguntaids[574] = 574


//  Id pregunta: 575 Año de creación de pregunta: 2016
 questions[575]= "576)  Si queremos dise&ntilde;ar un enlace de 10 Gbps. &iquest;qu&eacute; medio de transmisi&oacute;n nos permite alcanzar la m&aacute;xima longitud del enlace?";
 choices[575]= new Array();
 choices[575][0] = "Cableado de cobre de categor&iacute;a 7.";
 choices[575][1] = "Fibra &oacute;ptica monomodo tipo OS2.";
 choices[575][2] = "Fibra &oacute;ptica multimodo tipo OM3.";
 choices[575][3] = "Fibra &oacute;ptica multimodo tipo OM4.";
 answers[575] = choices[575][1];
 units[575] = "106";
 comments[575] = "Id Pregunta: 575. Tema 106. TAI 2016.";
 preguntaids[575] = 575


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[576]= "577)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[576]= new Array();
 choices[576][0] = "Mercurial, Git y Apache Subversion.";
 choices[576][1] = "Gimp, Mercurial y Git.";
 choices[576][2] = "RedMine, Planner y OpenProj.";
 choices[576][3] = "Cassandra, Git y REDIS.";
 answers[576] = choices[576][0];
 units[576] = "92";
 comments[576] = "Id Pregunta: 576. Tema 92. TAI 2016.";
 preguntaids[576] = 576


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[577]= "578)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[577]= new Array();
 choices[577][0] = "MySQL";
 choices[577][1] = "SQLite";
 choices[577][2] = "Zope";
 choices[577][3] = "MariaDB";
 answers[577] = choices[577][2];
 units[577] = "61";
 comments[577] = "Id Pregunta: 577. Tema 61. TAI 2016.";
 preguntaids[577] = 577


//  Id pregunta: 578 Año de creación de pregunta: 2016
 questions[578]= "579)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[578]= new Array();
 choices[578][0] = "PostgreSQL";
 choices[578][1] = "Datawarehouse";
 choices[578][2] = "Snowflake";
 choices[578][3] = "CouchDB";
 answers[578] = choices[578][0];
 units[578] = "61";
 comments[578] = "Id Pregunta: 578. Tema 61. TAI 2016.";
 preguntaids[578] = 578


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[579]= "580)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[579]= new Array();
 choices[579][0] = "El 2 de Octubre de 2015";
 choices[579][1] = "El 15 de Septiembre de 2015";
 choices[579][2] = "El 1 de Octubre de 2015";
 choices[579][3] = "El 5 de Octubre de 2015";
 answers[579] = choices[579][0];
 units[579] = "19";
 comments[579] = "Id Pregunta: 579. Estrategia TIC";
 preguntaids[579] = 579


//  Id pregunta: 580 Año de creación de pregunta: 2016
 questions[580]= "581)  &iquest;Qui&eacute;n elabor&oacute; y aprob&oacute; la Estrategia TIC?.";
 choices[580]= new Array();
 choices[580][0] = "Fue elaborada y aprobada por la CETIC";
 choices[580][1] = "Fue elaborada por la CETIC y aprobada por el gobierno";
 choices[580][2] = "Fue elaborada por el gobierno y aprobada por la CETIC";
 choices[580][3] = "Fue elaborada por la CETIC y aprobada por el MAFP (Ministerio de Administraciones y Funci&oacute;n P&uacute;blica)";
 answers[580] = choices[580][1];
 units[580] = "19";
 comments[580] = "Id Pregunta: 580. Estrategia TIC";
 preguntaids[580] = 580


//  Id pregunta: 581 Año de creación de pregunta: 2016
 questions[581]= "582)  &iquest;Cu&aacute;les son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[581]= new Array();
 choices[581][0] = "Transparencia e innovaci&oacute;n, orientaci&oacute;n al usuario del servicio y fomentar el uso de est&aacute;ndares";
 choices[581][1] = "Colaboraci&oacute;n y alianzas, unidad y visi&oacute;n integral y orientaci&oacute;n al usuario del servicio";
 choices[581][2] = "Unidad y visi&oacute;n integral, orientaci&oacute;n al usuario del servicio y prestaci&oacute;n de servicios compartidos";
 choices[581][3] = "Colaboraci&oacute;n y alianzas, fomentar el uso de est&aacute;ndares e incrementar la productividad y la eficacia";
 answers[581] = choices[581][1];
 units[581] = "19";
 comments[581] = "Id Pregunta: 581. Estrategia TIC";
 preguntaids[581] = 581


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[582]= "583)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[582]= new Array();
 choices[582][0] = "A la CETIC";
 choices[582][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[582][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[582][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[582] = choices[582][3];
 units[582] = "19";
 comments[582] = "Id Pregunta: 582. Estrategia TIC";
 preguntaids[582] = 582


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[583]= "584)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[583]= new Array();
 choices[583][0] = "Car&aacute;cter sustitutivo";
 choices[583][1] = "Car&aacute;cter obligatorio";
 choices[583][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[583][3] = "Ninguna de las anteriores";
 answers[583] = choices[583][3];
 units[583] = "19";
 comments[583] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";
 preguntaids[583] = 583


//  Id pregunta: 584 Año de creación de pregunta: 2016
 questions[584]= "585)  &iquest;Cu&aacute;ndo tuvo lugar la primera declaraci&oacute;n de servicios compartidos?";
 choices[584]= new Array();
 choices[584][0] = "El 5 de Octubre de 2015";
 choices[584][1] = "El 15 de Octubre de 2015";
 choices[584][2] = "El 15 de Septiembre de 2015";
 choices[584][3] = "El 2 de Octubre de 2015";
 answers[584] = choices[584][2];
 units[584] = "19";
 comments[584] = "Id Pregunta: 584. Estrategia TIC";
 preguntaids[584] = 584


//  Id pregunta: 585 Año de creación de pregunta: 2016
 questions[585]= "586)  &iquest;Qu&eacute; establece Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[585]= new Array();
 choices[585][0] = "Los principios rectores";
 choices[585][1] = "Los objetivos estrat&eacute;gicos y las acciones para alcanzarlos";
 choices[585][2] = "Los hitos para su desarrollo gradual";
 choices[585][3] = "Todos los anteriores";
 answers[585] = choices[585][3];
 units[585] = "19";
 comments[585] = "Id Pregunta: 585. Estrategia TIC";
 preguntaids[585] = 585


//  Id pregunta: 586 Año de creación de pregunta: 2016
 questions[586]= "587)  &iquest;Con qu&eacute; frecuencia se revisa la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE, para su alineamiento con las pol&iacute;ticas p&uacute;blicas del gobierno?";
 choices[586]= new Array();
 choices[586][0] = "Bienalmente";
 choices[586][1] = "Anualmente";
 choices[586][2] = "Semestralmente";
 choices[586][3] = "Cada cuatro a&ntilde;os";
 answers[586] = choices[586][1];
 units[586] = "19";
 comments[586] = "Id Pregunta: 586. Estrategia TIC";
 preguntaids[586] = 586


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[587]= "588)  &iquest;Qu&eacute; &oacute;rgano es el responsable de la implantaci&oacute;n de los medios y servicios compartidos?";
 choices[587]= new Array();
 choices[587][0] = "La CETIC";
 choices[587][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[587][2] = "La DTIC";
 choices[587][3] = "Ninguno de los anteriores";
 answers[587] = choices[587][1];
 units[587] = "19";
 comments[587] = "Id Pregunta: 587. Estrategia TIC";
 preguntaids[587] = 587


//  Id pregunta: 588 Año de creación de pregunta: 2016
 questions[588]= "589)  &iquest;Cu&aacute;l es el per&iacute;odo temporal del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[588]= new Array();
 choices[588][0] = "Comprende del a&ntilde;o 2015 al 2017";
 choices[588][1] = "Comprende del a&ntilde;o 2015 al 2020";
 choices[588][2] = "Comprende del a&ntilde;o 2016 al 2018";
 choices[588][3] = "Ninguna de las anteriores";
 answers[588] = choices[588][1];
 units[588] = "19";
 comments[588] = "Id Pregunta: 588. Estrategia TIC";
 preguntaids[588] = 588


//  Id pregunta: 589 Año de creación de pregunta: 2016
 questions[589]= "590)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[589]= new Array();
 choices[589][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[589][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[589][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[589][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[589] = choices[589][0];
 units[589] = "19";
 comments[589] = "Id Pregunta: 589. Estrategia TIC";
 preguntaids[589] = 589


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[590]= "591)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[590]= new Array();
 choices[590][0] = "14";
 choices[590][1] = "11";
 choices[590][2] = "12";
 choices[590][3] = "15";
 answers[590] = choices[590][0];
 units[590] = "19";
 comments[590] = "Id Pregunta: 590. Estrategia TIC";
 preguntaids[590] = 590


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[591]= "592)  Son servicios declarados compartidos:";
 choices[591]= new Array();
 choices[591][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[591][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[591][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[591][3] = "Todos los anteriores";
 answers[591] = choices[591][3];
 units[591] = "19";
 comments[591] = "Id Pregunta: 591. Estrategia TIC";
 preguntaids[591] = 591


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[592]= "593)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[592]= new Array();
 choices[592][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[592][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[592][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[592][3] = "Todos los anteriores";
 answers[592] = choices[592][3];
 units[592] = "19";
 comments[592] = "Id Pregunta: 592. Estrategia TIC";
 preguntaids[592] = 592


//  Id pregunta: 593 Año de creación de pregunta: 2016
 questions[593]= "594)  &iquest;Qui&eacute;n se encarga de revisar la vigencia del contenido del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[593]= new Array();
 choices[593][0] = "La CETIC";
 choices[593][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[593][2] = "La DTIC";
 choices[593][3] = "El MHFP";
 answers[593] = choices[593][0];
 units[593] = "19";
 comments[593] = "Id Pregunta: 593. Estrategia TIC";
 preguntaids[593] = 593


//  Id pregunta: 594 Año de creación de pregunta: 2016
 questions[594]= "595)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[594]= new Array();
 choices[594][0] = "Anualmente";
 choices[594][1] = "Bienalmente";
 choices[594][2] = "Cada cuatro a&ntilde;os";
 choices[594][3] = "No se define ninguna periodicidad";
 answers[594] = choices[594][1];
 units[594] = "19";
 comments[594] = "Id Pregunta: 594. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";
 preguntaids[594] = 594


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[595]= "596)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[595]= new Array();
 choices[595][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[595][1] = "La CETIC";
 choices[595][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[595][3] = "El MHFP";
 answers[595] = choices[595][0];
 units[595] = "19";
 comments[595] = "Id Pregunta: 595. Estrategia TIC";
 preguntaids[595] = 595


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[596]= "597)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[596]= new Array();
 choices[596][0] = "Seguridad Social y AEAT";
 choices[596][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[596][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[596][3] = "Todos los anteriores";
 answers[596] = choices[596][3];
 units[596] = "19";
 comments[596] = "Id Pregunta: 596. Estrategia TIC";
 preguntaids[596] = 596


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[597]= "598)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[597]= new Array();
 choices[597][0] = "La CETIC";
 choices[597][1] = "Los Ministerios";
 choices[597][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[597][3] = "Ninguno de los anteriores";
 answers[597] = choices[597][1];
 units[597] = "19";
 comments[597] = "Id Pregunta: 597. Estrategia TIC";
 preguntaids[597] = 597


//  Id pregunta: 598 Año de creación de pregunta: 2016
 questions[598]= "599)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[598]= new Array();
 choices[598][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[598][1] = "Las CMADs";
 choices[598][2] = "Ambas son correctas.";
 choices[598][3] = "Ninguna es correcta";
 answers[598] = choices[598][2];
 units[598] = "19";
 comments[598] = "Id Pregunta: 598. Estrategia TIC";
 preguntaids[598] = 598


//  Id pregunta: 599 Año de creación de pregunta: 2016
 questions[599]= "600)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[599]= new Array();
 choices[599][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[599][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[599][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[599][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[599] = choices[599][0];
 units[599] = "45";
 comments[599] = "Id Pregunta: 599. Junta de Extremadura A1 2015";
 preguntaids[599] = 599


//  Id pregunta: 600 Año de creación de pregunta: 2016
 questions[600]= "601)  Entre la documentaci&oacute;n de la Seguridad de la Organizaci&oacute;n nos podremos encontrar:";
 choices[600]= new Array();
 choices[600][0] = "La Pol&iacute;tica de Seguridad Corporativa ser&aacute; elaborada por el Responsable de Seguridad Corporativa y aprobada por el Comit&eacute; de Seguridad Corporativa y por la Alta Direcci&oacute;n.";
 choices[600][1] = "La Pol&iacute;tica de Seguridad de las TIC que debe estar alineada en todo momento con el Mantenimiento de los Sistemas de Informaci&oacute;n.";
 choices[600][2] = "El Documento de Seguridad que ha de estar presente en toda documentaci&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[600][3] = "Todas las respuestas anteriores son correctas.";
 answers[600] = choices[600][0];
 units[600] = "45";
 comments[600] = "Id Pregunta: 600. Junta de Extremadura A1 2015";
 preguntaids[600] = 600


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[601]= "602)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[601]= new Array();
 choices[601][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[601][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[601][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[601][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[601] = choices[601][2];
 units[601] = "45";
 comments[601] = "Id Pregunta: 601. Junta de Extremadura A1 2015";
 preguntaids[601] = 601


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[602]= "603)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[602]= new Array();
 choices[602][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[602][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[602][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[602][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[602] = choices[602][2];
 units[602] = "108";
 comments[602] = "Id Pregunta: 602. Junta de Extremadura A1 2015";
 preguntaids[602] = 602


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[603]= "604)  Los criptosistemas pueden clasificarse en:";
 choices[603]= new Array();
 choices[603][0] = "Concretos, Estables e Inestables.";
 choices[603][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[603][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[603][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[603] = choices[603][3];
 units[603] = "76";
 comments[603] = "Id Pregunta: 603. Junta de Extremadura A1 2015";
 preguntaids[603] = 603


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[604]= "605)  Como todo criptosistema de clave p&uacute;blica, el protocolo del criptosistema RSA:";
 choices[604]= new Array();
 choices[604][0] = "Tiene dos partes: Cifrado de Mensajes, Descifrado de Mensajes.";
 choices[604][1] = "Se basa en la dificultad que supone resolver el &lt;Problema de la Factorizaci&oacute;n Externa&gt;.";
 choices[604][2] = "Tiene tres partes: Generaci&oacute;n de claves, Cifrado de mensajes, Descifrado de mensajes.";
 choices[604][3] = "Se basa en la dificultad que supone resolver el &lt;Problema de Socrates- Arquimedes&gt;.";
 answers[604] = choices[604][2];
 units[604] = "76";
 comments[604] = "Id Pregunta: 604. Junta de Extremadura A1 2015";
 preguntaids[604] = 604


//  Id pregunta: 605 Año de creación de pregunta: 2016
 questions[605]= "606)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[605]= new Array();
 choices[605][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[605][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[605][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[605][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[605] = choices[605][3];
 units[605] = "101";
 comments[605] = "Id Pregunta: 605. Junta de Extremadura A1 2015";
 preguntaids[605] = 605


//  Id pregunta: 606 Año de creación de pregunta: 2016
 questions[606]= "607)  ITIL v3, define:";
 choices[606]= new Array();
 choices[606][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[606][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[606][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[606][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[606] = choices[606][0];
 units[606] = "101";
 comments[606] = "Id Pregunta: 606. Junta de Extremadura A1 2015";
 preguntaids[606] = 606


//  Id pregunta: 607 Año de creación de pregunta: 2016
 questions[607]= "608)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[607]= new Array();
 choices[607][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[607][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[607][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[607][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[607] = choices[607][2];
 units[607] = "101";
 comments[607] = "Id Pregunta: 607. Junta de Extremadura A1 2015";
 preguntaids[607] = 607


//  Id pregunta: 608 Año de creación de pregunta: 2016
 questions[608]= "609)  En ITIL v3, entre las metas del Proceso de la Planificaci&oacute;n y Soporte de la Transici&oacute;n del Servicio, se incluye:";
 choices[608]= new Array();
 choices[608][0] = "Planificar y coordinar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[608][1] = "Identificar, gestionar y limitar riesgos que puedan interrumpir el servicio a partir de la fase de transici&oacute;n del servicio.";
 choices[608][2] = "Planificar, identificar y gestionar recursos para garantizar el cumplimiento de las especificaciones de la mejora continua del servicio.";
 choices[608][3] = "Todas las respuestas son correctas.";
 answers[608] = choices[608][1];
 units[608] = "101";
 comments[608] = "Id Pregunta: 608. Junta de Extremadura A1 2015";
 preguntaids[608] = 608


//  Id pregunta: 609 Año de creación de pregunta: 2016
 questions[609]= "610)  Seg&uacute;n Magerit v3, en el desarrollo de sistemas de informaci&oacute;n:";
 choices[609]= new Array();
 choices[609][0] = "La seguridad debe estar embebida en el sistema desde su primera concepci&oacute;n.";
 choices[609][1] = "La seguridad comenzar&aacute; a considerarse formalmente cuando finalice el proceso de implantaci&oacute;n de sistemas de informaci&oacute;n.";
 choices[609][2] = "La seguridad del sistema de informaci&oacute;n es m&aacute;s econ&oacute;mica implantarla una vez puesto en producci&oacute;n el sistema de informaci&oacute;n que tenerla en consideraci&oacute;n durante el desarrollo del sistema.";
 choices[609][3] = "La seguridad s&oacute;lo ralentiza el proceso de desarrollo de sistemas de informaci&oacute;n por lo que s&oacute;lo se debe considerar en aquellos sistemas que usen datos econ&oacute;micos.";
 answers[609] = choices[609][0];
 units[609] = "45";
 comments[609] = "Id Pregunta: 609. Junta de Extremadura A1 2015";
 preguntaids[609] = 609


//  Id pregunta: 610 Año de creación de pregunta: 2016
 questions[610]= "611)  Una de las condiciones que un &aacute;rbol debe cumplir para ser &aacute;rbol b, siendo n el orden del &aacute;rbol, es:";
 choices[610]= new Array();
 choices[610][0] = "Cada p&aacute;gina contiene como m&aacute;ximo 2n + 1 elementos.";
 choices[610][1] = "Cada p&aacute;gina, excepto la ra&iacute;z, contiene al menos n elementos.";
 choices[610][2] = "Cada p&aacute;gina o es una hoja o tiene m descendientes, siendo m el n&uacute;mero de elementos o claves que tiene.";
 choices[610][3] = "Las hojas no tienen por qu&eacute; estar al mismo nivel.";
 answers[610] = choices[610][1];
 units[610] = "56";
 comments[610] = "Id Pregunta: 610. Junta de Extremadura A1 2015";
 preguntaids[610] = 610


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[611]= "612)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[611]= new Array();
 choices[611][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[611][1] = "Clasificaci&oacute;n por cuenta.";
 choices[611][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[611][3] = "Clasificaci&oacute;n por intercambio.";
 answers[611] = choices[611][3];
 units[611] = "56";
 comments[611] = "Id Pregunta: 611. Junta de Extremadura A1 2015";
 preguntaids[611] = 611


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[612]= "613)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[612]= new Array();
 choices[612][0] = "GROUP BY.";
 choices[612][1] = "COUNT.";
 choices[612][2] = "WHERE.";
 choices[612][3] = "DISTINCT.";
 answers[612] = choices[612][0];
 units[612] = "60";
 comments[612] = "Id Pregunta: 612. Junta de Extremadura A1 2015";
 preguntaids[612] = 612


//  Id pregunta: 613 Año de creación de pregunta: 2016
 questions[613]= "614)  Una de las caracter&iacute;sticas de seguridad en SQL Server 2008 es el cifrado transparente de datos. Se&ntilde;ala la afirmaci&oacute;n correcta:";
 choices[613]= new Array();
 choices[613][0] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de registro.";
 choices[613][1] = "SQL Server ofrece la capacidad de buscar dentro de los datos cifrados.";
 choices[613][2] = "Para trabajar con datos cifrados utilizando esta caracter&iacute;stica hay que introducir cambios en las aplicaciones.";
 choices[613][3] = "SQL Server no puede cifrar informaci&oacute;n a nivel de archivos de datos.";
 answers[613] = choices[613][1];
 units[613] = "63";
 comments[613] = "Id Pregunta: 613. Junta de Extremadura A1 2015";
 preguntaids[613] = 613


//  Id pregunta: 614 Año de creación de pregunta: 2016
 questions[614]= "615)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[614]= new Array();
 choices[614][0] = "Intersecci&oacute;n.";
 choices[614][1] = "Uni&oacute;n.";
 choices[614][2] = "Restricci&oacute;n.";
 choices[614][3] = "Diferencia.";
 answers[614] = choices[614][0];
 units[614] = "60";
 comments[614] = "Id Pregunta: 614. Junta de Extremadura A1 2015";
 preguntaids[614] = 614


//  Id pregunta: 615 Año de creación de pregunta: 2016
 questions[615]= "616)  El Modelo de Referencia de Interconexi&oacute;n de Sistemas Abiertos (OSI) consta de siete niveles. Se&ntilde;ala cu&aacute;l de los principios que se aplicaron para llevar a cabo esta divisi&oacute;n es falso:";
 choices[615]= new Array();
 choices[615][0] = "No se deben crear demasiados niveles de manera que la tarea de describir e integrar &eacute;stos fuera m&aacute;s dif&iacute;cil de lo necesario.";
 choices[615][1] = "Aunque se requiera un nivel de abstracci&oacute;n diferente en el manejo de los datos, debe usarse un nivel ya existente.";
 choices[615][2] = "Cada nivel debe realizar unas funciones bien definidas.";
 choices[615][3] = "Crear para cada nivel interfases con el nivel superior e inferior &uacute;nicamente.";
 answers[615] = choices[615][1];
 units[615] = "48";
 comments[615] = "Id Pregunta: 615. Junta de Extremadura A1 2015";
 preguntaids[615] = 615


//  Id pregunta: 616 Año de creación de pregunta: 2016
 questions[616]= "617)  Dada la m&aacute;scara de red 255.255.240.0, &iquest;a qu&eacute; red pertenece la direcci&oacute;n IP 192.228.17.15?";
 choices[616]= new Array();
 choices[616][0] = "192.228.0.0";
 choices[616][1] = "192.228.8.0";
 choices[616][2] = "192.228.16.0";
 choices[616][3] = "192.228.17.0";
 answers[616] = choices[616][2];
 units[616] = "109";
 comments[616] = "Id Pregunta: 616. Junta de Extremadura A1 2015";
 preguntaids[616] = 616


//  Id pregunta: 617 Año de creación de pregunta: 2016
 questions[617]= "618)  El establecimiento de una conexi&oacute;n mediante el protocolo TCP, b&aacute;sicamente se realiza de la siguiente manera:";
 choices[617]= new Array();
 choices[617][0] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a SYN+ACK. Emisor: env&iacute;a ACK.";
 choices[617][1] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a ACK+SYN. Emisor: env&iacute;a SYN.";
 choices[617][2] = "Emisor: env&iacute;a SYN. Receptor: env&iacute;a ACK.";
 choices[617][3] = "Emisor: env&iacute;a ACK. Receptor: env&iacute;a SYN.";
 answers[617] = choices[617][0];
 units[617] = "109";
 comments[617] = "Id Pregunta: 617. Junta de Extremadura A1 2015";
 preguntaids[617] = 617


//  Id pregunta: 618 Año de creación de pregunta: 2016
 questions[618]= "619)  &iquest;A qui&eacute;n est&aacute; destinado principalmente las Pautas de Accesibilidad al Contenido en la Web (WCAG)?";
 choices[618]= new Array();
 choices[618][0] = "A desarrolladores de navegadores web y reproductores multimedia.";
 choices[618][1] = "A desarrolladores de herramientas de autor, como herramientas de creaci&oacute;n de p&aacute;ginas web o de creaci&oacute;n de archivos multimedia.";
 choices[618][2] = "A desarrolladores de herramientas de evaluaci&oacute;n de la accesibilidad web.";
 choices[618][3] = "Todas las respuestas son correctas.";
 answers[618] = choices[618][2];
 units[618] = "42";
 comments[618] = "Id Pregunta: 618. Junta de Extremadura A1 2015";
 preguntaids[618] = 618


//  Id pregunta: 619 Año de creación de pregunta: 2016
 questions[619]= "620)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[619]= new Array();
 choices[619][0] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener el mejor resultado posible de un proyecto.";
 choices[619][1] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar individualmente y obtener el mejor resultado posible de un proyecto.";
 choices[619][2] = "Scrum es un proceso en el que se aplican un conjunto de buenas pr&aacute;cticas para trabajar colaborativamente en equipo y obtener un proyecto.";
 choices[619][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[619] = choices[619][0];
 units[619] = "84";
 comments[619] = "Id Pregunta: 619. Junta de Extremadura A1 2015";
 preguntaids[619] = 619


//  Id pregunta: 620 Año de creación de pregunta: 2016
 questions[620]= "621)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[620]= new Array();
 choices[620][0] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de tareas que se comportan de acuerdo a los requisitos del sistema.";
 choices[620][1] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de procesos externos que se comportan de acuerdo a los requisitos del sistema.";
 choices[620][2] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela el dominio del problema identificando y especificando un conjunto de objetos sem&aacute;nticos que interaccionan y se comportan de acuerdo a los requisitos del sistema.";
 choices[620][3] = "Se puede definir An&aacute;lisis Orientado a Objetos, como el proceso que modela la soluci&oacute;n del problema identificando y especificando un conjunto de usuarios que son los que necesitan los requisitos del sistema.";
 answers[620] = choices[620][2];
 units[620] = "85";
 comments[620] = "Id Pregunta: 620. Junta de Extremadura A1 2015";
 preguntaids[620] = 620


//  Id pregunta: 621 Año de creación de pregunta: 2016
 questions[621]= "622)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[621]= new Array();
 choices[621][0] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: la identificaci&oacute;n de clases sem&aacute;nticas, atributos y servicios; identificaci&oacute;n de las relaciones entre clases; el emplazamiento de las clases, atributos y servicios; la especificaci&oacute;n del comportamiento din&aacute;mico mediante paso de mensajes.";
 choices[621][1] = "En el Dise&ntilde;o Orientado a Objetos, deben llevarse a cabo las siguientes actividades: a&ntilde;adir las clases interfaz, base y utilidad; refinar las clases sem&aacute;nticas.";
 choices[621][2] = "En el An&aacute;lisis Orientado a Objetos, deben llevarse a cabo las siguientes actividades: toma inicial de requisitos; an&aacute;lisis; dise&ntilde;o; implementaci&oacute;n.";
 choices[621][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[621] = choices[621][1];
 units[621] = "89";
 comments[621] = "Id Pregunta: 621. Junta de Extremadura A1 2015";
 preguntaids[621] = 621


//  Id pregunta: 622 Año de creación de pregunta: 2016
 questions[622]= "623)  En el entorno de la Arquitectura del Software, un patr&oacute;n :";
 choices[622]= new Array();
 choices[622][0] = "Es una soluci&oacute;n a un problema en un contexto particular.";
 choices[622][1] = "Es recurrente y ense&ntilde;a permitiendo entender c&oacute;mo adaptarlo a la variante particular del problema donde se quiere aplicar.";
 choices[622][2] = "Tiene un nombre para referirse al patr&oacute;n.";
 choices[622][3] = "Todas las respuestas son correctas.";
 answers[622] = choices[622][3];
 units[622] = "50";
 comments[622] = "Id Pregunta: 622. Junta de Extremadura A1 2015";
 preguntaids[622] = 622


//  Id pregunta: 623 Año de creación de pregunta: 2016
 questions[623]= "624)  Seg&uacute;n el paradigma de Orientaci&oacute;n a Objetos, la herencia posibilita que:";
 choices[623]= new Array();
 choices[623][0] = "Cualquier cambio en los datos y operaciones contenidas dentro de una superclase es heredado inmediatamente por todas las subclases que se derivan de la superclase.";
 choices[623][1] = "Cualquier cambio en las operaciones y datos de la superclase no se refleja en todas las subclases.";
 choices[623][2] = "Cualquier cambio en una de las subclases que se heredan de la superclase se refleja en sus clases hermanas.";
 choices[623][3] = "En el paradigma de Orientaci&oacute;n a Objetos no existe la herencia.";
 answers[623] = choices[623][0];
 units[623] = "89";
 comments[623] = "Id Pregunta: 623. Junta de Extremadura A1 2015";
 preguntaids[623] = 623


//  Id pregunta: 624 Año de creación de pregunta: 2016
 questions[624]= "625)  Qu&eacute; nombre reciben las unidades de almacenamieto de las que est&aacute; compuesta un documento XML?";
 choices[624]= new Array();
 choices[624][0] = "Entradas (entities).";
 choices[624][1] = "Atributos (attribs).";
 choices[624][2] = "M&oacute;dulos (modules).";
 choices[624][3] = "Objetos (objects).";
 answers[624] = choices[624][0];
 units[624] = "74";
 comments[624] = "Id Pregunta: 624. Junta de Extremadura A1 2015";
 preguntaids[624] = 624


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[625]= "626)  En PHP 5.0, &iquest;cu&aacute;l es la regla para formar los nombres de las variables?";
 choices[625]= new Array();
 choices[625][0] = "Una variable debe comenzar con el signo $ seguido del nombre de la variable.";
 choices[625][1] = "Una variable debe comenzar con el signo &amp; seguido del nombre de la variable.";
 choices[625][2] = "Una variable debe comenzar por un car&aacute;cter num&eacute;rico.";
 choices[625][3] = "No hay regla para la formaci&oacute;n de los nombres de las variables.";
 answers[625] = choices[625][0];
 units[625] = "65";
 comments[625] = "Id Pregunta: 625. Junta de Extremadura A1 2015";
 preguntaids[625] = 625


//  Id pregunta: 626 Año de creación de pregunta: 2016
 questions[626]= "627)  En Java, la sentencia try-catch-throw se utiliza:";
 choices[626]= new Array();
 choices[626][0] = "En sentencias switch para alterar el control de flujo.";
 choices[626][1] = "Para manejar excepciones.";
 choices[626][2] = "Como la sentencia while, para ejecutar bucles.";
 choices[626][3] = "Para devolver el control del programa al final de un m&eacute;todo.";
 answers[626] = choices[626][1];
 units[626] = "64";
 comments[626] = "Id Pregunta: 626. Junta de Extremadura A1 2015";
 preguntaids[626] = 626


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[627]= "628)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[627]= new Array();
 choices[627][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[627][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[627][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[627][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[627] = choices[627][2];
 units[627] = "89";
 comments[627] = "Id Pregunta: 627. Junta de Extremadura A1 2015";
 preguntaids[627] = 627


//  Id pregunta: 628 Año de creación de pregunta: 2016
 questions[628]= "629)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de las funciones de instrucci&oacute;n de expedientes dentro de la Comisi&oacute;n Nacional de los Mercados y la Competencia en materia de comunicaciones electr&oacute;nicas?";
 choices[628]= new Array();
 choices[628][0] = "La Direcci&oacute;n de Telecomunicaciones y del Sector Audiovisual.";
 choices[628][1] = "La Direcci&oacute;n de la Competencia.";
 choices[628][2] = "La Direcci&oacute;n de la Energ&iacute;a.";
 choices[628][3] = "La Direcci&oacute;n de Transportes y del Sector Postal.";
 answers[628] = choices[628][0];
 units[628] = "121";
 comments[628] = "Id Pregunta: 628. Junta de Extremadura A1 2015";
 preguntaids[628] = 628


//  Id pregunta: 629 Año de creación de pregunta: 2016
 questions[629]= "630)  Seg&uacute;n el Real Decreto 3/2010 sobre el Esquema Nacional de Seguridad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; organismo es el encargado de actuar ante cualquier agresi&oacute;n recibida en los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[629]= new Array();
 choices[629][0] = "El CCN-CERT (Centro Criptol&oacute;gico Nacional&ndash;Computer Emergency Reaction Team).";
 choices[629][1] = "El GDT (Grupo de Delitos Telem&aacute;ticos).";
 choices[629][2] = "La BIT (Brigada de Investigaci&oacute;n Tecnol&oacute;gica).";
 choices[629][3] = "El CCN-STIC (Centro Criptol&oacute;gico Nacional-Seguridad de las Tecnolog&iacute;as de Informaci&oacute;n y Comunicaciones).";
 answers[629] = choices[629][0];
 units[629] = "46";
 comments[629] = "Id Pregunta: 629. Junta de Extremadura A1 2015";
 preguntaids[629] = 629


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[630]= "631)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[630]= new Array();
 choices[630][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[630][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[630][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[630][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[630] = choices[630][0];
 units[630] = "45";
 comments[630] = "Id Pregunta: 630. Junta de Extremadura A1 2015";
 preguntaids[630] = 630


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[631]= "632)  Seg&uacute;n la Ley de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no podr&aacute;n realizarse transferencias de datos de car&aacute;cter personal a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable al de esta Ley. &iquest;Qui&eacute;n se encarga de evaluar el nivel adecuado de protecci&oacute;n que ofrece el pa&iacute;s de destino de los datos?";
 choices[631]= new Array();
 choices[631][0] = "El Ministerio de Asuntos Exteriores junto con el Ministerio de Justicia.";
 choices[631][1] = "El responsable de la custodia de los datos enviados.";
 choices[631][2] = "La Agencia Europea de Cooperaci&oacute;n.";
 choices[631][3] = "La Agencia de Protecci&oacute;n de Datos.";
 answers[631] = choices[631][3];
 units[631] = "35";
 comments[631] = "Id Pregunta: 631. Junta de Extremadura A1 2015";
 preguntaids[631] = 631


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[632]= "633)  Seg&uacute;n el Reglamento de Medidas de Seguridad de Ficheros Automatizados con Datos de Car&aacute;cter Personal, los ficheros que contengan datos de ideolog&iacute;a, religi&oacute;n, creencias, origen racial, salud o vida sexual, &iquest;qu&eacute; medidas de seguridad deber&aacute;n adoptar?";
 choices[632]= new Array();
 choices[632][0] = "De nivel b&aacute;sico y nivel medio.";
 choices[632][1] = "De nivel alto.";
 choices[632][2] = "De nivel medio y nivel alto.";
 choices[632][3] = "De nivel b&aacute;sico, nivel medio y nivel alto.";
 answers[632] = choices[632][3];
 units[632] = "35";
 comments[632] = "Id Pregunta: 632. Junta de Extremadura A1 2015";
 preguntaids[632] = 632


//  Id pregunta: 633 Año de creación de pregunta: 2016
 questions[633]= "634)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[633]= new Array();
 choices[633][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[633][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[633][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[633][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[633] = choices[633][2];
 units[633] = "50";
 comments[633] = "Id Pregunta: 633. Junta de Extremadura A1 2015";
 preguntaids[633] = 633


//  Id pregunta: 634 Año de creación de pregunta: 2016
 questions[634]= "635)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[634]= new Array();
 choices[634][0] = "Monol&iacute;tico.";
 choices[634][1] = "Estratificado.";
 choices[634][2] = "Cliente/servidor.";
 choices[634][3] = "Orientado a objetos.";
 answers[634] = choices[634][3];
 units[634] = "56";
 comments[634] = "Id Pregunta: 634. Junta de Extremadura A1 2015";
 preguntaids[634] = 634


//  Id pregunta: 635 Año de creación de pregunta: 2016
 questions[635]= "636)  Respecto a la b&uacute;squeda en un &aacute;rbol binario, el peor de los casos para el algoritmo T, &ldquo;b&uacute;squeda e inserci&oacute;n en un &aacute;rbol&rdquo;, se da cuando las claves se han introducido en el &aacute;rbol de forma:";
 choices[635]= new Array();
 choices[635][0] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[635][1] = "Aleatoria o al azar, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 choices[635][2] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda binaria &oacute;ptima.";
 choices[635][3] = "Creciente u ordenada, que producir&iacute;a un &aacute;rbol degenerado que especificar&iacute;a esencialmente una b&uacute;squeda secuencial.";
 answers[635] = choices[635][3];
 units[635] = "56";
 comments[635] = "Id Pregunta: 635. Junta de Extremadura A1 2015";
 preguntaids[635] = 635


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[636]= "637)  En un modelo entidad/relaci&oacute;n, un tipo de interrelaci&oacute;n se caracteriza por:";
 choices[636]= new Array();
 choices[636][0] = "El nombre y el tipo de correspondencia.";
 choices[636][1] = "El nombre, el grado y el tipo de correspondencia.";
 choices[636][2] = "El nombre, el nivel y el tipo de correspondencia.";
 choices[636][3] = "El nombre y el grado.";
 answers[636] = choices[636][1];
 units[636] = "85";
 comments[636] = "Id Pregunta: 636. Junta de Extremadura A1 2015";
 preguntaids[636] = 636


//  Id pregunta: 637 Año de creación de pregunta: 2016
 questions[637]= "638)  En el modelo relacional existen diversas clasificaciones de las relaciones. Indica qu&eacute; tipos de relaciones se consideran relaciones persistentes:";
 choices[637]= new Array();
 choices[637][0] = "Relaciones base y vistas.";
 choices[637][1] = "Relaciones base, vistas y el resultado de una consulta.";
 choices[637][2] = "Relaciones base, vistas y relaciones temporales.";
 choices[637][3] = "Relaciones base, vistas e instant&aacute;neas.";
 answers[637] = choices[637][3];
 units[637] = "60";
 comments[637] = "Id Pregunta: 637. Junta de Extremadura A1 2015";
 preguntaids[637] = 637


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[638]= "639)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[638]= new Array();
 choices[638][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[638][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[638][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[638][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[638] = choices[638][2];
 units[638] = "57";
 comments[638] = "Id Pregunta: 638. Junta de Extremadura A1 2015";
 preguntaids[638] = 638


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[639]= "640)  En el sistema operativo Unix/Linux, el comando id:";
 choices[639]= new Array();
 choices[639][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[639][1] = "El comando id no existe.";
 choices[639][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[639][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[639] = choices[639][0];
 units[639] = "57";
 comments[639] = "Id Pregunta: 639. Junta de Extremadura A1 2015";
 preguntaids[639] = 639


//  Id pregunta: 640 Año de creación de pregunta: 2016
 questions[640]= "641)  Indique cu&aacute;l de las siguientes afirmaciones es la correcta:";
 choices[640]= new Array();
 choices[640][0] = "Linux dispone de los tres principales protocolos de red para sistemas UNIX: Novel, TCP/IP y UUCP.";
 choices[640][1] = "Linux dispone &uacute;nicamente del protocolo TCP/IP.";
 choices[640][2] = "Linux dispone de todos los protocolos de red existentes.";
 choices[640][3] = "Linux dispone de los dos principales protocolos de red para sistemas UNIX: TCP/IP y UUCP.";
 answers[640] = choices[640][3];
 units[640] = "57";
 comments[640] = "Id Pregunta: 640. Junta de Extremadura A1 2015";
 preguntaids[640] = 640


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[641]= "642)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[641]= new Array();
 choices[641][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[641][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[641][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[641][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[641] = choices[641][2];
 units[641] = "57";
 comments[641] = "Id Pregunta: 641. Junta de Extremadura A1 2015";
 preguntaids[641] = 641


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[642]= "643)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[642]= new Array();
 choices[642][0] = "Fat y Ntfs.";
 choices[642][1] = "Extfat y Fat.";
 choices[642][2] = "Fat y Nfst.";
 choices[642][3] = "ext2fs y Ntfs.";
 answers[642] = choices[642][0];
 units[642] = "58";
 comments[642] = "Id Pregunta: 642. Junta de Extremadura A1 2015";
 preguntaids[642] = 642


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[643]= "644)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[643]= new Array();
 choices[643][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[643][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[643][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[643][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[643] = choices[643][1];
 units[643] = "58";
 comments[643] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[643] = 643


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[644]= "645)  En Itil V3 la Gesti&oacute;n de la Cartera de Servicios pertenece a la fase de ciclo de vida:";
 choices[644]= new Array();
 choices[644][0] = "Dise&ntilde;o del servicio.";
 choices[644][1] = "Transici&oacute;n del servicio.";
 choices[644][2] = "Estrategia del servicio.";
 choices[644][3] = "Operaci&oacute;n del servicio.";
 answers[644] = choices[644][2];
 units[644] = "101";
 comments[644] = "Id Pregunta: 644. Junta de Extremadura A1 2015";
 preguntaids[644] = 644


//  Id pregunta: 645 Año de creación de pregunta: 2016
 questions[645]= "646)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[645]= new Array();
 choices[645][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[645][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[645][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[645][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[645] = choices[645][2];
 units[645] = "85";
 comments[645] = "Id Pregunta: 645. Junta de Extremadura A1 2015";
 preguntaids[645] = 645


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[646]= "647)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[646]= new Array();
 choices[646][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[646][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[646][2] = "Funcionarios e interinos.";
 choices[646][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[646] = choices[646][3];
 units[646] = "20";
 comments[646] = "Id Pregunta: 646. Junta de Extremadura A1 2015";
 preguntaids[646] = 646


//  Id pregunta: 647 Año de creación de pregunta: 2016
 questions[647]= "648)  Seg&uacute;n la ley de igualdad entre mujeres y hombres y contra la violencia de g&eacute;nero en Extremadura: &iquest;qu&eacute; &oacute;rgano tiene como fin esencial promover las condiciones para que la igualdad entre los sexos sea real y efectiva dentro del &aacute;mbito de competencias de la Junta de Extremadura?";
 choices[647]= new Array();
 choices[647][0] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sociales.";
 choices[647][1] = "La Consejer&iacute;a con competencias en pol&iacute;ticas sanitarias.";
 choices[647][2] = "El Organismo P&uacute;blico de la Mujer.";
 choices[647][3] = "El Instituto de la Mujer de Extremadura.";
 answers[647] = choices[647][3];
 units[647] = "14";
 comments[647] = "Id Pregunta: 647. Junta de Extremadura A1 2015";
 preguntaids[647] = 647


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[648]= "649)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[648]= new Array();
 choices[648][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[648][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[648][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[648][3] = "Todas las respuestas son correctas.";
 answers[648] = choices[648][0];
 units[648] = "101";
 comments[648] = "Id Pregunta: 648. Junta de Extremadura A1 2015";
 preguntaids[648] = 648


//  Id pregunta: 649 Año de creación de pregunta: 2016
 questions[649]= "650)  En Itil V3, entre los factores que hay que tener en cuenta en la evaluaci&oacute;n de herramientas de Gesti&oacute;n del Servicio se encuentran:";
 choices[649]= new Array();
 choices[649][0] = "Estructura, tratamiento, integraci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[649][1] = "structura, salvaguarda, integraci&oacute;n de datos, flexibilidad de implementaci&oacute;n, uso y comunicaci&oacute;n de datos.";
 choices[649][2] = "Estructura, tratamiento, inspecci&oacute;n de datos y cumplimiento de est&aacute;ndares internacionales.";
 choices[649][3] = "Responsabilidad, tratamiento, inspecci&oacute;n de datos y soporte a la monitorizaci&oacute;n de los niveles de servicio.";
 answers[649] = choices[649][0];
 units[649] = "101";
 comments[649] = "Id Pregunta: 649. Junta de Extremadura A1 2015";
 preguntaids[649] = 649


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[650]= "651)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[650]= new Array();
 choices[650][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[650][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[650][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[650][3] = "Estos sistemas es imposible clasificarlos.";
 answers[650] = choices[650][1];
 units[650] = "119";
 comments[650] = "Id Pregunta: 650. Junta de Extremadura A1 2015";
 preguntaids[650] = 650


//  Id pregunta: 651 Año de creación de pregunta: 2016
 questions[651]= "652)  Los objetivos que persegu&iacute;a Codd con el modelo relacional, se pueden resumir en:";
 choices[651]= new Array();
 choices[651][0] = "Independencia f&iacute;sica, independencia l&oacute;gica, flexibilidad, uniformidad y sencillez.";
 choices[651][1] = "Independencia f&iacute;sica, independencia l&oacute;gica y uniformidad.";
 choices[651][2] = "Independencia f&iacute;sica, flexibilidad, uniformidad y sencillez.";
 choices[651][3] = "Independencia f&iacute;sica, independencia l&oacute;gica, independencia conceptual, flexibilidad, uniformidad y sencillez.";
 answers[651] = choices[651][0];
 units[651] = "60";
 comments[651] = "Id Pregunta: 651. Junta de Extremadura A1 2015";
 preguntaids[651] = 651


//  Id pregunta: 652 Año de creación de pregunta: 2016
 questions[652]= "653)  Indica cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo IP versi&oacute;n 6 es incorrecta.";
 choices[652]= new Array();
 choices[652][0] = "El tama&ntilde;o de la direcci&oacute;n IP es de 128 bits.";
 choices[652][1] = "Aumento de la flexibilidad en el direccionamiento.";
 choices[652][2] = "Define una cabecera de extensi&oacute;n que proporciona autenticaci&oacute;n.";
 choices[652][3] = "La cabecera IP versi&oacute;n 6 obligatoria es de tama&ntilde;o variable.";
 answers[652] = choices[652][3];
 units[652] = "109";
 comments[652] = "Id Pregunta: 652. Junta de Extremadura A1 2015";
 preguntaids[652] = 652


//  Id pregunta: 653 Año de creación de pregunta: 2016
 questions[653]= "654)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[653]= new Array();
 choices[653][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[653][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[653][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[653][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[653] = choices[653][3];
 units[653] = "120";
 comments[653] = "Id Pregunta: 653. Junta de Extremadura A1 2015";
 preguntaids[653] = 653


//  Id pregunta: 654 Año de creación de pregunta: 2016
 questions[654]= "655)  Dentro del proceso de MapReduce &iquest;Que es el shuffle?";
 choices[654]= new Array();
 choices[654][0] = "Es un proceso de adaptaci&oacute;n de los datos antes de entrar en la etapa de Map";
 choices[654][1] = "Es un aplicativo dentro del ecosistema Hadoop que sirve para distribuir datos en el HDFS";
 choices[654][2] = "Es el proceso por el que los datos llegan de los mappers a los reducers";
 choices[654][3] = "Es un algoritmo de mineria de datos usado en Big Data";
 answers[654] = choices[654][2];
 units[654] = "73";
 comments[654] = "Id Pregunta: 654. ";
 preguntaids[654] = 654


//  Id pregunta: 655 Año de creación de pregunta: 2016
 questions[655]= "656)  &iquest;Cual de las siguientes bases de datos no est&aacute; orientada a grafos?";
 choices[655]= new Array();
 choices[655][0] = "Neo4J ";
 choices[655][1] = "OrientDB ";
 choices[655][2] = "InfoGrid ";
 choices[655][3] = "SimpleDB";
 answers[655] = choices[655][3];
 units[655] = "73";
 comments[655] = "Id Pregunta: 655. ";
 preguntaids[655] = 655


//  Id pregunta: 656 Año de creación de pregunta: 2016
 questions[656]= "657)  &iquest;Qu&eacute; significa la tolerancia a partici&oacute;n dentro del teorema CAP?";
 choices[656]= new Array();
 choices[656][0] = "El sistema podr&aacute; seguir procesando una petici&oacute;n aunque se pierda la conectividad con algun nodo";
 choices[656][1] = "Las modificaciones se aplican a todos los nodos en su conjunto en el mismo momento";
 choices[656][2] = "Cualquier peticion recibida en un nodo debe tener respuesta";
 choices[656][3] = "El teorema CAP no habla de tolerancia a particiones";
 answers[656] = choices[656][0];
 units[656] = "73";
 comments[656] = "Id Pregunta: 656. ";
 preguntaids[656] = 656


//  Id pregunta: 657 Año de creación de pregunta: 2016
 questions[657]= "658)  &iquest;Qu&eacute; aplicativo no se encuentra dentro del ecosistemas de Haddoop?";
 choices[657]= new Array();
 choices[657][0] = "Yarn";
 choices[657][1] = "Flume";
 choices[657][2] = "Hive";
 choices[657][3] = "BizAgi";
 answers[657] = choices[657][3];
 units[657] = "73";
 comments[657] = "Id Pregunta: 657. ";
 preguntaids[657] = 657


//  Id pregunta: 658 Año de creación de pregunta: 2016
 questions[658]= "659)  &iquest;Qu&eacute; aplicativo se suele usar como herramienta administrativa para el control de los nodos dentro del ecosistema BidData?";
 choices[658]= new Array();
 choices[658][0] = "Cassandra";
 choices[658][1] = "Riak";
 choices[658][2] = "Avro";
 choices[658][3] = "Zookeeper";
 answers[658] = choices[658][3];
 units[658] = "73";
 comments[658] = "Id Pregunta: 658. ";
 preguntaids[658] = 658


//  Id pregunta: 659 Año de creación de pregunta: 2016
 questions[659]= "660)  &iquest;Qu&eacute; es el machine learning?";
 choices[659]= new Array();
 choices[659][0] = "El uso de los datos para el desarrollo de mecanismos de predicci&oacute;n y aprendizaje";
 choices[659][1] = "l uso de datos para la automatizaci&oacute;n de tareas repetitivas";
 choices[659][2] = "El aprendizaje de mecanismos de monitorizaci&oacute;n y alertas";
 choices[659][3] = "Un paradigma en el desarrollo de mecanismos de control ";
 answers[659] = choices[659][0];
 units[659] = "73";
 comments[659] = "Id Pregunta: 659. ";
 preguntaids[659] = 659


//  Id pregunta: 660 Año de creación de pregunta: 2016
 questions[660]= "661)  &iquest;Qu&eacute; tecnolog&iacute;a de tratamiento de datos no guarda relaci&oacute;n con BigData?";
 choices[660]= new Array();
 choices[660][0] = "NoSQL";
 choices[660][1] = "Sistemas de baja latencia";
 choices[660][2] = "MapReduce";
 choices[660][3] = "Business Intelligence";
 answers[660] = choices[660][1];
 units[660] = "73";
 comments[660] = "Id Pregunta: 660. ";
 preguntaids[660] = 660


//  Id pregunta: 661 Año de creación de pregunta: 2016
 questions[661]= "662)  &iquest;De qu&eacute; modelo de programaci&oacute;n es una implementaci&oacute;n Hadoop?";
 choices[661]= new Array();
 choices[661][0] = "Orientaci&oacute;n a objetos";
 choices[661][1] = "MapReduce";
 choices[661][2] = "Pipeline filtering";
 choices[661][3] = "Programaci&oacute;n funcional";
 answers[661] = choices[661][1];
 units[661] = "73";
 comments[661] = "Id Pregunta: 661. ";
 preguntaids[661] = 661


//  Id pregunta: 662 Año de creación de pregunta: 2016
 questions[662]= "663)  &iquest;Qu&eacute; herramienta dentro del ecosistema Hadoop sirve para trasladar datos masivos entre Hadoop y sistemas de tratamiento estructurados?";
 choices[662]= new Array();
 choices[662][0] = "Avro";
 choices[662][1] = "Sqoop";
 choices[662][2] = "UIMA";
 choices[662][3] = "Jaql";
 answers[662] = choices[662][1];
 units[662] = "73";
 comments[662] = "Id Pregunta: 662. ";
 preguntaids[662] = 662


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[663]= "664)  &iquest;Qu&eacute; tipos de nodos tiene un cl&uacute;ster Hadoop?";
 choices[663]= new Array();
 choices[663][0] = "Varios namenodes y varios datanodes por cluster";
 choices[663][1] = "varios namenodes y obligatoriamente 1 datanode por cluster";
 choices[663][2] = "1 namenode y varios datanodes por cluster";
 choices[663][3] = "1 namenode y obligatoriamente 1 datanode por cluster";
 answers[663] = choices[663][2];
 units[663] = "73";
 comments[663] = "Id Pregunta: 663. ";
 preguntaids[663] = 663


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[664]= "665)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[664]= new Array();
 choices[664][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[664][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[664][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[664][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[664] = choices[664][1];
 units[664] = "7";
 comments[664] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";
 preguntaids[664] = 664


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[665]= "666)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[665]= new Array();
 choices[665][0] = "De oficio.";
 choices[665][1] = "A solicitud del interesado.";
 choices[665][2] = "De oficio o a solicitud del interesado.";
 choices[665][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[665] = choices[665][2];
 units[665] = "7";
 comments[665] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";
 preguntaids[665] = 665


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[666]= "667)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[666]= new Array();
 choices[666][0] = "Siempre en formato electr&oacute;nico.";
 choices[666][1] = "Siempre en formato papel.";
 choices[666][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[666][3] = "La ley no regula el formato del expediente.";
 answers[666] = choices[666][0];
 units[666] = "7";
 comments[666] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";
 preguntaids[666] = 666


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[667]= "668)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[667]= new Array();
 choices[667][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[667][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[667][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[667][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[667] = choices[667][2];
 units[667] = "7";
 comments[667] = "Id Pregunta: 667. Art&iacute;culo 70 de la Ley 39/2015";
 preguntaids[667] = 667


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[668]= "669)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[668]= new Array();
 choices[668][0] = "10 d&iacute;as.";
 choices[668][1] = "15 d&iacute;as.";
 choices[668][2] = "1 mes.";
 choices[668][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[668] = choices[668][0];
 units[668] = "7";
 comments[668] = "Id Pregunta: 668. Art&iacute;culo 73 de la Ley 39/2015";
 preguntaids[668] = 668


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[669]= "670)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[669]= new Array();
 choices[669][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[669][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[669][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[669][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[669] = choices[669][2];
 units[669] = "7";
 comments[669] = "Id Pregunta: 669. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[669] = 669


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[670]= "671)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[670]= new Array();
 choices[670][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[670][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[670][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[670][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[670] = choices[670][3];
 units[670] = "7";
 comments[670] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[670] = 670


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[671]= "672)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[671]= new Array();
 choices[671][0] = "Resoluci&oacute;n.";
 choices[671][1] = "Desistimiento o renuncia.";
 choices[671][2] = "Caducidad.";
 choices[671][3] = "Todas las anteriores.";
 answers[671] = choices[671][3];
 units[671] = "7";
 comments[671] = "Id Pregunta: 671. Art&iacute;culo 84 de la Ley 39/2015";
 preguntaids[671] = 671


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[672]= "673)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[672]= new Array();
 choices[672][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[672][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[672][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[672][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[672] = choices[672][1];
 units[672] = "7";
 comments[672] = "Id Pregunta: 672. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[672] = 672


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[673]= "674)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[673]= new Array();
 choices[673][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[673][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[673][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[673][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[673] = choices[673][0];
 units[673] = "7";
 comments[673] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[673] = 673


//  Id pregunta: 674 Año de creación de pregunta: 2016
 questions[674]= "675)  En cuanto a la Historia Cl&iacute;nica Digital del Sistema Nacional de Salud, se&ntilde;ale cual de las siguientes afirmaciones es Incorrecta:";
 choices[674]= new Array();
 choices[674][0] = "Se ha implementado por mandato legal, tanto por la Ley 16/2003 de cohesi&oacute;n y calidad del Sistema Nacional de Salud, como por la Ley 41/2002 de Autonom&iacute;a del Paciente.";
 choices[674][1] = "Permite que los profesionales sanitarios puedan acceder a los datos de salud del paciente, cuando este se encuentre desplazado fuera de su Comunidad Aut&oacute;noma de origen y requiera asistencia sanitaria.";
 choices[674][2] = "De acuerdo a su dise&ntilde;o funcional, permite acceder a la totalidad de los contenidos existentes en la Historia Cl&iacute;nica Electr&oacute;nica de las Comunidades Aut&oacute;nomas.";
 choices[674][3] = "Gracias a ella, de acuerdo al informe CORA de Febrero de 2016, ya son 25,5 millones de ciudadanos los que disponen de informes cl&iacute;nicos en el Sstema Nacional de Salud.";
 answers[674] = choices[674][2];
 units[674] = "47";
 comments[674] = "Id Pregunta: 674. Historia Cl&iacute;nica Digital";
 preguntaids[674] = 674


//  Id pregunta: 675 Año de creación de pregunta: 2016
 questions[675]= "676)  Se&ntilde;ale cual de los siguientes factores no contribuye a la sostenibilidad del sistema de pensiones:";
 choices[675]= new Array();
 choices[675][0] = "El aumento de la esperanza de vida.";
 choices[675][1] = "La mejora del &iacute;ndice de natalidad.";
 choices[675][2] = "La reducci&oacute;n del desempleo.";
 choices[675][3] = "El incremento de la edad de jubilaci&oacute;n.";
 answers[675] = choices[675][0];
 units[675] = "14";
 comments[675] = "Id Pregunta: 675. Estructura social";
 preguntaids[675] = 675


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[676]= "677)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[676]= new Array();
 choices[676][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[676][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[676][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[676][3] = "Todas las anteriores son correctas.";
 answers[676] = choices[676][3];
 units[676] = "47";
 comments[676] = "Id Pregunta: 676. Receta electr&oacute;nica";
 preguntaids[676] = 676


//  Id pregunta: 677 Año de creación de pregunta: 2016
 questions[677]= "678)  En referencia al proyecto ANDES, para la comunicaci&oacute;n telem&aacute;tica de Nacimientos desde Centros Sanitarios a Registros Civiles, indique cual de las siguientes afirmaciones es falsa:";
 choices[677]= new Array();
 choices[677][0] = "Tiene sustento legal de acuerdo a la Ley 19/2015, de 13 de julio, de medidas de reforma administrativa en el &aacute;mbito de la Administraci&oacute;n de Justicia y del Registro Civil.";
 choices[677][1] = "Se inicia a partir de su propuesta en CORA (Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas).";
 choices[677][2] = "Reutiliza el servicio horizontal ACCEDA en modo cloud, lo cual ha facilitado la pronta puesta en marcha de la soluci&oacute;n.";
 choices[677][3] = "La utilizaci&oacute;n de ANDES por parte de los hospitales es completamente transparente, sin necesidad de realizar pasos previos para su despliegue.";
 answers[677] = choices[677][3];
 units[677] = "47";
 comments[677] = "Id Pregunta: 677. Inscripci&oacute;n autom&aacute;tica nacimientos";
 preguntaids[677] = 677


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[678]= "679)  Son servicios previstos en el cat&aacute;logo de servicios de la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[678]= new Array();
 choices[678][0] = "Los servicios de teleasistencia, de ayuda a domicilio y de formaci&oacute;n.";
 choices[678][1] = "Los servicios de ayuda a domicilio, de teleasistencia y de centro de d&iacute;a y de noche.";
 choices[678][2] = "Los servicios de teleasistencia, de atenci&oacute;n residencial y de sede electr&oacute;nica.";
 choices[678][3] = "Los servicios de prevenci&oacute;n, de ayuda a domicilio y de ambulancia.";
 answers[678] = choices[678][1];
 units[678] = "14";
 comments[678] = "Id Pregunta: 678. Dependencia";
 preguntaids[678] = 678


//  Id pregunta: 679 Año de creación de pregunta: 2016
 questions[679]= "680)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[679]= new Array();
 choices[679][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[679][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[679][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[679][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[679] = choices[679][2];
 units[679] = "14";
 comments[679] = "Id Pregunta: 679. Dependencia";
 preguntaids[679] = 679


//  Id pregunta: 680 Año de creación de pregunta: 2016
 questions[680]= "681)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[680]= new Array();
 choices[680][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[680][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[680][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[680][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[680] = choices[680][1];
 units[680] = "14";
 comments[680] = "Id Pregunta: 680. Dependencia";
 preguntaids[680] = 680


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[681]= "682)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[681]= new Array();
 choices[681][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[681][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[681][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[681][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[681] = choices[681][1];
 units[681] = "14";
 comments[681] = "Id Pregunta: 681. Pensiones";
 preguntaids[681] = 681


//  Id pregunta: 682 Año de creación de pregunta: 2016
 questions[682]= "683)  Seg&uacute;n el Real Decreto Ley 5/2013, de 15 de marzo, de medidas para favorecer la continuidad de la vida laboral de los trabajadores de mayor edad y promover el envejecimiento activo:";
 choices[682]= new Array();
 choices[682][0] = "La cuant&iacute;a de la pensi&oacute;n de jubilaci&oacute;n compatible con el trabajo ser&aacute; equivalente al 50 por 100 del importe resultante en el reconocimiento inicial, una vez aplicado, si procede, el l&iacute;mite m&aacute;ximo de pensi&oacute;n p&uacute;blica, o del que se est&eacute; percibiendo, en el momento de inicio de la compatibilidad con el trabajo, excluido, en todo caso, el complemento por m&iacute;nimos, cualquiera que sea la jornada laboral o la actividad que realice el pensionista.";
 choices[682][1] = "El trabajo compatible debe realizarse a tiempo parcial.";
 choices[682][2] = "Finalizada la relaci&oacute;n laboral por cuenta ajena o producido el cese en la actividad por cuenta propia, se restablecer&aacute; el percibo &iacute;ntegro de la pensi&oacute;n de jubilaci&oacute;n transcurridos 12 meses de la finalizaci&oacute;n de la relaci&oacute;n laboral.";
 choices[682][3] = "El acceso a la pensi&oacute;n podr&aacute; tener lugar hasta 5 a&ntilde;os antes de la edad que en cada caso resulte de aplicaci&oacute;n.";
 answers[682] = choices[682][0];
 units[682] = "14";
 comments[682] = "Id Pregunta: 682. Pensiones";
 preguntaids[682] = 682


//  Id pregunta: 683 Año de creación de pregunta: 2016
 questions[683]= "684)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[683]= new Array();
 choices[683][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[683][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[683][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[683][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[683] = choices[683][2];
 units[683] = "14";
 comments[683] = "Id Pregunta: 683. Pensiones";
 preguntaids[683] = 683


//  Id pregunta: 684 Año de creación de pregunta: 2016
 questions[684]= "685)  Indique cu&aacute;l es la Directiva europea que queda derogada por el Reglamento (UE) 910/2014";
 choices[684]= new Array();
 choices[684][0] = "Directiva 95/46/CE";
 choices[684][1] = "Directiva 1999/93/CE";
 choices[684][2] = "Directiva 2000/31/CE";
 choices[684][3] = "Directiva 2003/98/CE";
 answers[684] = choices[684][1];
 units[684] = "77";
 comments[684] = "Id Pregunta: 684. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[684] = 684


//  Id pregunta: 685 Año de creación de pregunta: 2016
 questions[685]= "686)  Se&ntilde;ale el &aacute;mbito de aplicaci&oacute;n del Reglamento (UE) 910/2014";
 choices[685]= new Array();
 choices[685][0] = "A los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros y a los prestadores de servicios de confianza establecidos en la Uni&oacute;n";
 choices[685][1] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica notificados por los Estados miembros";
 choices[685][2] = "A los prestadores de servicios de certificaci&oacute;n de la Uni&oacute;n cuyos Gobiernos acepten formalmente el Reglamento";
 choices[685][3] = "Exclusivamente a los sistemas de identificaci&oacute;n electr&oacute;nica de los Estados miembros, independientemente de que hayan sido notificados";
 answers[685] = choices[685][0];
 units[685] = "77";
 comments[685] = "Id Pregunta: 685. Art&iacute;culo 2 del Reglamento 910/2014";
 preguntaids[685] = 685


//  Id pregunta: 686 Año de creación de pregunta: 2016
 questions[686]= "687)  Indique los niveles de seguridad que contempla el Reglamento (UE) 910/2014 para los sistemas de identificaci&oacute;n electr&oacute;nica";
 choices[686]= new Array();
 choices[686][0] = "B&aacute;sico, medio y alto";
 choices[686][1] = "D&eacute;bil y fuerte";
 choices[686][2] = "Bajo, medio y alto";
 choices[686][3] = "Bajo, sustancial y alto";
 answers[686] = choices[686][3];
 units[686] = "77";
 comments[686] = "Id Pregunta: 686. Art&iacute;culo 8 del Reglamento 910/2014";
 preguntaids[686] = 686


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[687]= "688)  Se&ntilde;ale el plazo en que deben ser auditados los prestadores cualificados de servicios de confianza";
 choices[687]= new Array();
 choices[687][0] = "Al menos cada 12 meses";
 choices[687][1] = "El Reglamento no trata la supervisi&oacute;n de los prestadores cualificados de servicios de confianza, dejando tal cuesti&oacute;n a la regulaci&oacute;n nacional de cada Estado miembro";
 choices[687][2] = "Al menos cada 18 meses";
 choices[687][3] = "Al menos cada 24 meses";
 answers[687] = choices[687][3];
 units[687] = "77";
 comments[687] = "Id Pregunta: 687. Art&iacute;culo 20 del Reglamento 910/2014";
 preguntaids[687] = 687


//  Id pregunta: 688 Año de creación de pregunta: 2016
 questions[688]= "689)  Indique cu&aacute;l de las siguientes afirmaciones no es correcta seg&uacute;n lo establecido en el Reglamento (UE) 910/2014";
 choices[688]= new Array();
 choices[688][0] = "Las firmas electro&#769;nicas cualificadas tendr&aacute;n un efecto juri&#769;dico equivalente al de una firma manuscrita";
 choices[688][1] = "Una firma electro&#769;nica cualificada basada en un certificado cualificado emitido en un Estado miembro sera&#769; reconocida como firma electro&#769;nica cualificada en los dema&#769;s Estados miembros";
 choices[688][2] = "No se denegara&#769;n efectos juri&#769;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electro&#769;nica por el mero hecho de ser una firma electro&#769;nica";
 choices[688][3] = "Las firmas electr&oacute;nicas cualificadas tendr&aacute;n una validez de 48 meses";
 answers[688] = choices[688][3];
 units[688] = "77";
 comments[688] = "Id Pregunta: 688. Art&iacute;culo 25 del Reglamento 910/2014";
 preguntaids[688] = 688


//  Id pregunta: 689 Año de creación de pregunta: 2016
 questions[689]= "690)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[689]= new Array();
 choices[689][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[689][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[689][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[689][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[689] = choices[689][1];
 units[689] = "77";
 comments[689] = "Id Pregunta: 689. Art&iacute;culo 26 del Reglamento 910/2014";
 preguntaids[689] = 689


//  Id pregunta: 690 Año de creación de pregunta: 2016
 questions[690]= "691)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que deben cumplir los servicios cualificados de entrega electro&#769;nica certificada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[690]= new Array();
 choices[690][0] = "Ser prestados por uno o ma&#769;s prestadores cualificados de servicios de confianza";
 choices[690][1] = "Garantizar la identificacio&#769;n del destinatario antes de la entrega de los datos";
 choices[690][2] = "Indicar mediante un sello cualificado de tiempo electro&#769;nico la fecha y hora de envi&#769;o, recepcio&#769;n y eventual modificacio&#769;n de los datos";
 choices[690][3] = "Proteger el envi&#769;o y la recepcio&#769;n de datos por una firma electro&#769;nica cualificada o un sello electro&#769;nico cualificado de un prestador cualificado de servicios de confianza";
 answers[690] = choices[690][1];
 units[690] = "77";
 comments[690] = "Id Pregunta: 690. Art&iacute;culo 44 del Reglamento 910/2014";
 preguntaids[690] = 690


//  Id pregunta: 691 Año de creación de pregunta: 2016
 questions[691]= "692)  El Reglamento (UE) 910/2014 deroga la Directiva 1999/93/CE con efectos a partir de:";
 choices[691]= new Array();
 choices[691][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[691][1] = "1 de enero de 2015";
 choices[691][2] = "1 de enero de 2016";
 choices[691][3] = "1 de julio de 2016";
 answers[691] = choices[691][3];
 units[691] = "77";
 comments[691] = "Id Pregunta: 691. Art&iacute;culo 50 del Reglamento 910/2014";
 preguntaids[691] = 691


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[692]= "693)  El Reglamento (UE) 910/2014 entra en vigor:";
 choices[692]= new Array();
 choices[692][0] = "Al d&iacute;a siguiente de su publicaci&oacute;n en el Diario Oficial de la Unio&#769;n Europea (DOUE)";
 choices[692][1] = "A los 20 d&iacute;as de su publicaci&oacute;n en el Diario Oficial de la Uni&oacute;n Europea (DOUE)";
 choices[692][2] = "A partir del 1 de enero de 2015";
 choices[692][3] = "A partir del 1 de julio de 2016";
 answers[692] = choices[692][1];
 units[692] = "77";
 comments[692] = "Id Pregunta: 692. Art&iacute;culo 52 del Reglamento 910/2014";
 preguntaids[692] = 692


//  Id pregunta: 693 Año de creación de pregunta: 2016
 questions[693]= "694)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los contenidos de los certificados cualificados de firma electr&oacute;nica seg&uacute;n el Reglamento (UE) 910/2014";
 choices[693]= new Array();
 choices[693][0] = "El nombre del firmante o un seudo&#769;nimo";
 choices[693][1] = "Los datos de validacio&#769;n de la firma electro&#769;nica";
 choices[693][2] = "La firma electro&#769;nica cualificada o el sello electro&#769;nico cualificado del prestador de servicios de confianza expedidor";
 choices[693][3] = "La localizacio&#769;n de los servicios que se pueden utilizar para consultar el estado de validez del certificado";
 answers[693] = choices[693][2];
 units[693] = "77";
 comments[693] = "Id Pregunta: 693. Anexo I del Reglamento 910/2014";
 preguntaids[693] = 693


//  Id pregunta: 694 Año de creación de pregunta: 2016
 questions[694]= "695)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[694]= new Array();
 choices[694][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[694][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[694][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[694][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[694] = choices[694][1];
 units[694] = "77";
 comments[694] = "Id Pregunta: 694. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";
 preguntaids[694] = 694


//  Id pregunta: 695 Año de creación de pregunta: 2016
 questions[695]= "696)  Se&ntilde;ale de las siguientes la que NO corresponde a una herramienta de integraci&oacute;n continua:";
 choices[695]= new Array();
 choices[695][0] = "Jenkins";
 choices[695][1] = "Hudson";
 choices[695][2] = "SonarQube";
 choices[695][3] = "Todas lo son";
 answers[695] = choices[695][3];
 units[695] = "92";
 comments[695] = "Id Pregunta: 695. INTEGRACION CONTINUA";
 preguntaids[695] = 695


//  Id pregunta: 696 Año de creación de pregunta: 2016
 questions[696]= "697)  De las siguientes cu&aacute;l NO es una ventaja de la integraci&oacute;n continua:";
 choices[696]= new Array();
 choices[696][0] = "Ejecuci&oacute;n inmediata de las pruebas de aceptaci&oacute;n.";
 choices[696][1] = "Monitorizaci&oacute;n continua de las m&eacute;tricas de calidad del proyecto.";
 choices[696][2] = "Los desarrolladores pueden detectar y solucionar problemas de integraci&oacute;n de forma continua, evitando el caos de &uacute;ltima hora cuando se acercan las fechas de entrega.";
 choices[696][3] = "Disponibilidad constante de una versi&oacute;n para pruebas, demos o lanzamientos anticipados.";
 answers[696] = choices[696][0];
 units[696] = "92";
 comments[696] = "Id Pregunta: 696. INTEGRACION CONTINUA";
 preguntaids[696] = 696


//  Id pregunta: 697 Año de creación de pregunta: 2016
 questions[697]= "698)  De las siguientes cu&aacute;l est&aacute; relacionada con la noci&oacute;n de integraci&oacute;n continua:";
 choices[697]= new Array();
 choices[697][0] = "Programaci&oacute;n estructurada.";
 choices[697][1] = "Metodolog&iacute;a M&eacute;trica Versi&oacute;n 4.";
 choices[697][2] = "Programaci&oacute;n extrema.";
 choices[697][3] = "Programaci&oacute;n Espuria.";
 answers[697] = choices[697][2];
 units[697] = "92";
 comments[697] = "Id Pregunta: 697. INTEGRACION CONTINUA";
 preguntaids[697] = 697


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[698]= "699)  Se&ntilde;ale el que corresponde a un principio de integraci&oacute;n continua:";
 choices[698]= new Array();
 choices[698][0] = "Migraci&oacute;n manual y controlada a cada entorno de desarrollo";
 choices[698][1] = "Mantener un repositorio de c&oacute;digo.";
 choices[698][2] = "Reutilizaci&oacute;n de interfaces de usuario.";
 choices[698][3] = "Todos corresponden a principios de integraci&oacute;n continua.";
 answers[698] = choices[698][1];
 units[698] = "92";
 comments[698] = "Id Pregunta: 698. INTEGRACION CONTINUA";
 preguntaids[698] = 698


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[699]= "700)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[699]= new Array();
 choices[699][0] = "Est&aacute; desarrollado en Java.";
 choices[699][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[699][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[699][3] = "Todas las afirmaciones son correctas.";
 answers[699] = choices[699][2];
 units[699] = "92";
 comments[699] = "Id Pregunta: 699. INTEGRACION CONTINUA";
 preguntaids[699] = 699


//  Id pregunta: 700 Año de creación de pregunta: 2016
 questions[700]= "701)  &iquest;Qu&eacute; es SonarQube?";
 choices[700]= new Array();
 choices[700][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[700][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[700][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[700][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[700] = choices[700][2];
 units[700] = "92";
 comments[700] = "Id Pregunta: 700. INTEGRACION CONTINUA";
 preguntaids[700] = 700


//  Id pregunta: 701 Año de creación de pregunta: 2016
 questions[701]= "702)  &iquest;Qu&eacute; es la integraci&oacute;n continua?";
 choices[701]= new Array();
 choices[701][0] = "Una pr&aacute;ctica recogida en la metodolog&iacute;a M&eacute;trica V3.";
 choices[701][1] = "Un modelo inform&aacute;tico que consiste en hacer integraciones autom&aacute;ticas de un proyecto lo m&aacute;s a menudo posible para as&iacute; poder detectar fallos cuanto antes.";
 choices[701][2] = "Una metodolog&iacute;a &aacute;gil inspirada en XP y FDD encaminada a realizar un desarrollo hol&iacute;stico en todo el proceso de desarrollo de un sistema de informaci&oacute;n.";
 choices[701][3] = "Ninguna de las anteriores.";
 answers[701] = choices[701][1];
 units[701] = "92";
 comments[701] = "Id Pregunta: 701. INTEGRACION CONTINUA";
 preguntaids[701] = 701


//  Id pregunta: 702 Año de creación de pregunta: 2016
 questions[702]= "703)  &iquest;Cu&aacute;l de los siguientes NO es un repositorio de c&oacute;digo?";
 choices[702]= new Array();
 choices[702][0] = "CVS";
 choices[702][1] = "SVN";
 choices[702][2] = "Team Foundation Server";
 choices[702][3] = "Apache Tomcat";
 answers[702] = choices[702][3];
 units[702] = "92";
 comments[702] = "Id Pregunta: 702. INTEGRACION CONTINUA";
 preguntaids[702] = 702


//  Id pregunta: 703 Año de creación de pregunta: 2016
 questions[703]= "704)  Se&ntilde;ale la que NO corresponde a una herramienta de automatizaci&oacute;n de pruebas:";
 choices[703]= new Array();
 choices[703][0] = "Selenium";
 choices[703][1] = "JUnit";
 choices[703][2] = "Jenkins";
 choices[703][3] = "JMeter";
 answers[703] = choices[703][2];
 units[703] = "92";
 comments[703] = "Id Pregunta: 703. INTEGRACION CONTINUA";
 preguntaids[703] = 703


//  Id pregunta: 704 Año de creación de pregunta: 2016
 questions[704]= "705)  En el modelo de integraci&oacute;n continua se recomienda:";
 choices[704]= new Array();
 choices[704][0] = "Mantener un repositorio de c&oacute;digo.";
 choices[704][1] = "Realizar una migraci&oacute;n manual y controlada a cada entorno de desarrollo.";
 choices[704][2] = "Realizar las construcciones de versiones agrupando m&uacute;ltiples commits para optimizar el tiempo de proceso.";
 choices[704][3] = "Realizar las pruebas en el entorno de producci&oacute;n para obtener resultados reales.";
 answers[704] = choices[704][1];
 units[704] = "92";
 comments[704] = "Id Pregunta: 704. INTEGRACION CONTINUA";
 preguntaids[704] = 704


//  Id pregunta: 705 Año de creación de pregunta: 2016
 questions[705]= "706)  &iquest;Cu&aacute;l de los siguientes NO es un principio t&eacute;cnico de los mencionados en la Ley 19/2013 al que debe atenerse la informaci&oacute;n publicada en el Portal de Transparencia de la Administraci&oacute;n General del Estado?";
 choices[705]= new Array();
 choices[705][0] = "Compatibilidad";
 choices[705][1] = "Interoperabilidad";
 choices[705][2] = "Reutilizaci&oacute;n";
 choices[705][3] = "Accesibilidad";
 answers[705] = choices[705][0];
 units[705] = "22";
 comments[705] = "Id Pregunta: 705. Ley de transparencia";
 preguntaids[705] = 705


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[706]= "707)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[706]= new Array();
 choices[706][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[706][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[706][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[706][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[706] = choices[706][2];
 units[706] = "22";
 comments[706] = "Id Pregunta: 706. Ley de transparencia";
 preguntaids[706] = 706


//  Id pregunta: 707 Año de creación de pregunta: 2016
 questions[707]= "708)  La &Eacute;tica P&uacute;blica se puede definir como:";
 choices[707]= new Array();
 choices[707][0] = "El conjunto de normas que adoptan de manera voluntaria los trabajadores p&uacute;blicos con objeto de satisfacer las necesidades de los ciudadanos.";
 choices[707][1] = "El conjunto de comportamientos inadecuados por parte de empleados p&uacute;blicos y pol&iacute;ticos.";
 choices[707][2] = "El conjunto de normas que rigen la conducta de las personas que trabajan en las Administraciones P&uacute;blicas.";
 choices[707][3] = "El compromiso que adquieren los ciudadanos al relacionarse con las Administraciones P&uacute;blicas.";
 answers[707] = choices[707][2];
 units[707] = "22";
 comments[707] = "Id Pregunta: 707. &Eacute;tica p&uacute;blica";
 preguntaids[707] = 707


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[708]= "709)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[708]= new Array();
 choices[708][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[708][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[708][2] = "Ministerio de la Presidencia";
 choices[708][3] = "Ministerio de Fomento";
 answers[708] = choices[708][2];
 units[708] = "22";
 comments[708] = "Id Pregunta: 708. Portal de Transparencia";
 preguntaids[708] = 708


//  Id pregunta: 709 Año de creación de pregunta: 2016
 questions[709]= "710)  En base a la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[709]= new Array();
 choices[709][0] = "El derecho de acceso a la informaci&oacute;n p&uacute;blica supone, entre otros, que el sujeto obligado a ello publique de forma peri&oacute;dica y actualizada la informaci&oacute;n cuyo conocimiento sea relevante para garantizar la transparencia de su actividad.";
 choices[709][1] = "Las entidades privadas no est&aacute;n sujetas a obligaciones de transparencia seg&uacute;n la Ley 19/2013.";
 choices[709][2] = "Se admitir&aacute;n a tr&aacute;mite, sin excepci&oacute;n, todas las solicitudes de acceso a la informaci&oacute;n por parte de los ciudadanos.";
 choices[709][3] = "El cumplimiento por la Administraci&oacute;n General del Estado de las obligaciones de publicidad activa ser&aacute; objeto de control por parte del CTBG.";
 answers[709] = choices[709][3];
 units[709] = "22";
 comments[709] = "Id Pregunta: 709. Ley de transparencia";
 preguntaids[709] = 709


//  Id pregunta: 710 Año de creación de pregunta: 2016
 questions[710]= "711)  Indique la afirmaci&oacute;n falsa:";
 choices[710]= new Array();
 choices[710][0] = "En la publicidad activa la Administraci&oacute;n pone los datos a disposici&oacute;n de la ciudadan&iacute;a, en portales y p&aacute;ginas web, sin esperar a que los ciudadanos los demanden, proactivamente.";
 choices[710][1] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica los ciudadanos acceden a la informaci&oacute;n p&uacute;blica puesta a disposici&oacute;n por la Administraci&oacute;n en portales y p&aacute;ginas web.";
 choices[710][2] = "La publicidad activa y el derecho de acceso fomentan la transparencia en la actividad p&uacute;blica.";
 choices[710][3] = "En el derecho de acceso a la informaci&oacute;n p&uacute;blica la Administraci&oacute;n responde a las demandas de informaci&oacute;n por parte de los ciudadanos.";
 answers[710] = choices[710][1];
 units[710] = "22";
 comments[710] = "Id Pregunta: 710. Ley de transparencia";
 preguntaids[710] = 710


//  Id pregunta: 711 Año de creación de pregunta: 2016
 questions[711]= "712)  &iquest;Qu&eacute; ley regula el ejercicio del alto cargo de la Administraci&oacute;n General del Estado con objeto de garantizar, entre otros, que realice su actividad en m&aacute;ximas condiciones de transparencia?";
 choices[711]= new Array();
 choices[711][0] = "Ley 3/2015";
 choices[711][1] = "Ley 6/2007";
 choices[711][2] = "Ley 5/1984";
 choices[711][3] = "Ley 5/2006";
 answers[711] = choices[711][0];
 units[711] = "22";
 comments[711] = "Id Pregunta: 711. &Eacute;tica P&uacute;blica y Transparencia";
 preguntaids[711] = 711


//  Id pregunta: 712 Año de creación de pregunta: 2016
 questions[712]= "713)  Si un ciudadano solicita informaci&oacute;n a la Administraci&oacute;n y son de aplicaci&oacute;n los l&iacute;mites de derecho de acceso previstos en el art&iacute;culo 14 de la Ley 19/2013 pero &eacute;stos no afectan a la totalidad de la informaci&oacute;n:";
 choices[712]= new Array();
 choices[712][0] = "Nunca se conceder&aacute; el acceso parcial a la informaci&oacute;n.";
 choices[712][1] = "Se ofrecer&aacute; acceso parcial sin indicar al solicitante que parte de la informaci&oacute;n ha sido omitida.";
 choices[712][2] = "Siempre se conder&aacute; acceso parcial a la informaci&oacute;n a la que no le afecte la limitaci&oacute;n prevista en el art&iacute;culo 14.";
 choices[712][3] = "Se conceder&aacute; el acceso parcial previa omisi&oacute;n de la informaci&oacute;n afectada por el l&iacute;mite de acceso, salvo que de ello resulte una informaci&oacute;n distorsionada o que carezca de sentido.";
 answers[712] = choices[712][3];
 units[712] = "22";
 comments[712] = "Id Pregunta: 712. Ley de transparencia";
 preguntaids[712] = 712


//  Id pregunta: 713 Año de creación de pregunta: 2016
 questions[713]= "714)  En relaci&oacute;n al Portal de Transparencia de la AGE:";
 choices[713]= new Array();
 choices[713][0] = "La informaci&oacute;n m&aacute;s relevante para el ciudadano y de frecuente acceso estar&aacute; disponible en el Portal de Transparencia, no pudiendo accederse a informaci&oacute;n que no se encuentre ya publicada.";
 choices[713][1] = "El ejercicio del Derecho de Acceso abre con la administraci&oacute;n un procedimiento administrativo que exige la identificaci&oacute;n del solicitante.";
 choices[713][2] = "En el Portal de Transparencia de la AGE s&oacute;lo se puede acceder a informaci&oacute;n de tipo institucional.";
 choices[713][3] = "El CTBG es el responsable del Portal de Transparencia.";
 answers[713] = choices[713][1];
 units[713] = "22";
 comments[713] = "Id Pregunta: 713. Portal de Transparencia";
 preguntaids[713] = 713


//  Id pregunta: 714 Año de creación de pregunta: 2016
 questions[714]= "715)  Seg&uacute;n la Ley 19/2013 de transparencia, las unidades de informaci&oacute;n en el &aacute;mbito de la AGE (se&ntilde;ale la falsa):";
 choices[714]= new Array();
 choices[714][0] = "Son unidades especializadas que se encargan de recibir y dar tramitaci&oacute;n a las solicitudes de acceso a la informaci&oacute;n.";
 choices[714][1] = "Son unidades especializadas que aseguran la disponibilidad en la respectiva p&aacute;gina web o sede electr&oacute;nica de la informaci&oacute;n cuyo acceso se solicita con m&aacute;s frecuencia.";
 choices[714][2] = "La Oficina de Transparencia y Acceso a la Informaci&oacute;n P&uacute;blica es la unidad de informaci&oacute;n del Ministerio de la Presidencia.";
 choices[714][3] = "Son unidades especializadas en elaborar legislaci&oacute;n en el &aacute;mbito de la transparencia p&uacute;blica.";
 answers[714] = choices[714][3];
 units[714] = "22";
 comments[714] = "Id Pregunta: 714. Ley de transparencia";
 preguntaids[714] = 714


//  Id pregunta: 715 Año de creación de pregunta: 2016
 questions[715]= "716)  Entre las funcionalidades generales de un servidor de integraci&oacute;n continua NO se encuentra";
 choices[715]= new Array();
 choices[715][0] = "La ejecuci&oacute;n de una serie de test: JUnit, Cactus, Auditoria del c&oacute;digo fuente, test IHM, test funcionales.";
 choices[715][1] = "Permite realiza el despliegue de archivos en el entorno de producci&oacute;n.";
 choices[715][2] = "La notificaci&oacute;n del resultado por medios como correo electr&oacute;nico o RSS.";
 choices[715][3] = "La creaci&oacute;n de un informe de estad&iacute;sticas.";
 answers[715] = choices[715][1];
 units[715] = "92";
 comments[715] = "Id Pregunta: 715. INTEGRACION CONTINUA";
 preguntaids[715] = 715


//  Id pregunta: 716 Año de creación de pregunta: 2016
 questions[716]= "717)  Se&ntilde;ale la opci&oacute;n correcta";
 choices[716]= new Array();
 choices[716][0] = "Jenkins un servidor de integraci&oacute;n continua comercial.";
 choices[716][1] = "Extiende su funcionalidad a trav&eacute;s de plugins.";
 choices[716][2] = "Solamente soporta herramientas de control de versiones como CVS, Git y Clearcase.";
 choices[716][3] = "No posee un historial de cambios realizados por build o versi&oacute;n.";
 answers[716] = choices[716][1];
 units[716] = "92";
 comments[716] = "Id Pregunta: 716. INTEGRACION CONTINUA";
 preguntaids[716] = 716


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[717]= "718)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[717]= new Array();
 choices[717][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[717][1] = "Anteriormente se denominaba Sonar.";
 choices[717][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[717][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[717] = choices[717][2];
 units[717] = "92";
 comments[717] = "Id Pregunta: 717. INTEGRACION CONTINUA";
 preguntaids[717] = 717


//  Id pregunta: 718 Año de creación de pregunta: 2016
 questions[718]= "719)  &iquest;C&uacute;al es un objetivo de las metodolog&iacute;as lean?";
 choices[718]= new Array();
 choices[718][0] = "Maximizar el valor para los clientes";
 choices[718][1] = "Reducir los costes y aumentar la calidad del producto o del servicio";
 choices[718][2] = " Entregar productos de manera m&aacute;s r&aacute;pida";
 choices[718][3] = "Todos los anteriores son objetivos de la metodolog&iacute;a lean";
 answers[718] = choices[718][3];
 units[718] = "34";
 comments[718] = "Id Pregunta: 718. Metodologias Lean";
 preguntaids[718] = 718


//  Id pregunta: 719 Año de creación de pregunta: 2016
 questions[719]= "720)  &iquest;A trav&eacute;s de qu&eacute; empresa surgen las metodolog&iacute;as lean?";
 choices[719]= new Array();
 choices[719][0] = "Ford";
 choices[719][1] = "Google";
 choices[719][2] = "Toyota";
 choices[719][3] = "Facebook";
 answers[719] = choices[719][2];
 units[719] = "34";
 comments[719] = "Id Pregunta: 719. Metodologias Lean";
 preguntaids[719] = 719


//  Id pregunta: 720 Año de creación de pregunta: 2016
 questions[720]= "721)  &iquest;Qui&eacute;n es el responsable de transladar la metodolog&iacute;a lean al software?";
 choices[720]= new Array();
 choices[720][0] = "Eric Ries";
 choices[720][1] = "Steve Blank";
 choices[720][2] = "Tom Poppendieck";
 choices[720][3] = "Alexander Osterwalder";
 answers[720] = choices[720][2];
 units[720] = "34";
 comments[720] = "Id Pregunta: 720. Metodologias Lean";
 preguntaids[720] = 720


//  Id pregunta: 721 Año de creación de pregunta: 2016
 questions[721]= "722)  &iquest;C&uacute;al de los siguientes puntos NO es uno de los principios de las metodolog&iacute;as lean?";
 choices[721]= new Array();
 choices[721][0] = "Flexibilidad para variar el servicio o producto";
 choices[721][1] = "Eliminar desperdicios";
 choices[721][2] = "Decidir lo m&aacute;s tarde posible";
 choices[721][3] = "Hacer entregas tan r&aacute;pido como sea posible";
 answers[721] = choices[721][0];
 units[721] = "34";
 comments[721] = "Id Pregunta: 721. Metodologias Lean";
 preguntaids[721] = 721


//  Id pregunta: 722 Año de creación de pregunta: 2016
 questions[722]= "723)  &iquest;C&uacute;al de las siguientes NO es una metodolog&iacute;a lean?";
 choices[722]= new Array();
 choices[722][0] = "Lean startup";
 choices[722][1] = "Business Model Canvas";
 choices[722][2] = "Dynamic system Development method";
 choices[722][3] = "Lean software development";
 answers[722] = choices[722][2];
 units[722] = "34";
 comments[722] = "Id Pregunta: 722. Metodologias Lean";
 preguntaids[722] = 722


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[723]= "724)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[723]= new Array();
 choices[723][0] = "Permite al equipo reaccionar mejor ante imprevistos";
 choices[723][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[723][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[723][3] = "Ninguna de las anteriores";
 answers[723] = choices[723][1];
 units[723] = "34, 84";
 comments[723] = "Id Pregunta: 723. Metodologias &aacute;giles";
 preguntaids[723] = 723


//  Id pregunta: 724 Año de creación de pregunta: 2016
 questions[724]= "725)  &iquest;Cu&aacute;l es la principal desventaja de sprints m&aacute;s largos?";
 choices[724]= new Array();
 choices[724][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[724][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[724][2] = "Se reduce el n&uacute;mero de reuniones de sprint";
 choices[724][3] = "Se puede desarrollar algo diferente a lo requerido y obtener el feedback del cliente m&aacute;s tarde.";
 answers[724] = choices[724][3];
 units[724] = "34, 84";
 comments[724] = "Id Pregunta: 724. Metodologias &aacute;giles";
 preguntaids[724] = 724


//  Id pregunta: 725 Año de creación de pregunta: 2016
 questions[725]= "726)  &iquest;Cu&aacute;les son las caracter&iacute;sticas del sprint 0 en SCRUM?";
 choices[725]= new Array();
 choices[725][0] = "Se dejan listos los entornos de desarrollo";
 choices[725][1] = "Se trabaja en el product backlog, dejando listos los product backlog &iacute;tems priorizados y estimados";
 choices[725][2] = "Se hace una previsi&oacute;n del reparto de historias de usuario por iteraci&oacute;n";
 choices[725][3] = "Todas las anteriores son correctas";
 answers[725] = choices[725][3];
 units[725] = "34, 84";
 comments[725] = "Id Pregunta: 725. Metodologias &aacute;giles";
 preguntaids[725] = 725


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[726]= "727)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[726]= new Array();
 choices[726][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[726][1] = "El sprint release es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM";
 choices[726][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[726][3] = "En el sprint release se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[726] = choices[726][1];
 units[726] = "34, 84";
 comments[726] = "Id Pregunta: 726. Metodologias &aacute;giles";
 preguntaids[726] = 726


//  Id pregunta: 727 Año de creación de pregunta: 2016
 questions[727]= "728)  Sobre el Scrum Team, cual es la afirmaci&oacute;n falsa";
 choices[727]= new Array();
 choices[727][0] = "Cada miembro del equipo tiene que tener un rol especifico y no puede asumir tareas que no est&eacute;n dentro de su &aacute;rea de especializaci&oacute;n.";
 choices[727][1] = "Los miembros del equipo deben tener un perfil en &lsquo;T&rsquo; (manejo en una serie amplia de &aacute;reas, con conocimientos en profundidad en unas pocas)";
 choices[727][2] = "Cada miembro del equipo tiene que tener un conocimiento m&aacute;s amplio de un &aacute;rea";
 choices[727][3] = "Cada miembro del equipo puede asumir cualquier tipo de tarea";
 answers[727] = choices[727][0];
 units[727] = "34, 84";
 comments[727] = "Id Pregunta: 727. Metodologias &aacute;giles";
 preguntaids[727] = 727


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[728]= "729)  &iquest;Cu&aacute;l es el n&uacute;mero de personas generalmete recomendados para cada equipo de Scrum?";
 choices[728]= new Array();
 choices[728][0] = "De 1 a  4 ";
 choices[728][1] = "De 3 a  7 ";
 choices[728][2] = "De 5 a  9";
 choices[728][3] = "De 7 a 11";
 answers[728] = choices[728][2];
 units[728] = "34, 84";
 comments[728] = "Id Pregunta: 728. Metodologias &aacute;giles";
 preguntaids[728] = 728


//  Id pregunta: 729 Año de creación de pregunta: 2016
 questions[729]= "730)  &iquest;C&uacute;al es el nombre de la reuni&oacute;n de SCRUM, donde se revisan los product backlog &iacute;tems?:";
 choices[729]= new Array();
 choices[729][0] = "Backlog refinement";
 choices[729][1] = "Backlog grooming";
 choices[729][2] = "a y b son correctas";
 choices[729][3] = "Ninguna de las anteriores";
 answers[729] = choices[729][2];
 units[729] = "34, 84";
 comments[729] = "Id Pregunta: 729. Metodologias &aacute;giles";
 preguntaids[729] = 729


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[730]= "731)  Indica la respuesta correcta";
 choices[730]= new Array();
 choices[730][0] = "Scrum no implica baja documentaci&oacute;n, de hecho hay estudios que estiman que es totalmente compatible con CMMI-3";
 choices[730][1] = "Scrum es una metodolog&iacute;a poco organizada";
 choices[730][2] = "Scrum no suele incluir a testers en el SCRUM TEAM";
 choices[730][3] = "En Scrum, sufre la calidad del producto o servicio al no pasar procesos de calidad reglados";
 answers[730] = choices[730][0];
 units[730] = "34, 84";
 comments[730] = "Id Pregunta: 730. Metodologias &aacute;giles";
 preguntaids[730] = 730


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[731]= "732)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[731]= new Array();
 choices[731][0] = "Burn-up chart";
 choices[731][1] = "Arquitectural Skype";
 choices[731][2] = "Burn-down chart";
 choices[731][3] = "Definition of done";
 answers[731] = choices[731][1];
 units[731] = "34, 84";
 comments[731] = "Id Pregunta: 731. Metodologias &aacute;giles";
 preguntaids[731] = 731


//  Id pregunta: 732 Año de creación de pregunta: 2016
 questions[732]= "733)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban?:";
 choices[732]= new Array();
 choices[732][0] = "Se definen iteraciones";
 choices[732][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[732][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[732][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[732] = choices[732][1];
 units[732] = "34, 84";
 comments[732] = "Id Pregunta: 732. Metodologias &aacute;giles";
 preguntaids[732] = 732


//  Id pregunta: 733 Año de creación de pregunta: 2016
 questions[733]= "734)  &iquest;Cu&aacute;l de las siguientes reglas se corresponde a las reglas de la metodolog&iacute;a Kanban?:";
 choices[733]= new Array();
 choices[733][0] = "Visualizar el trabajo o el flujo de trabajo";
 choices[733][1] = "Determinar el l&iacute;mite de trabajo en curso (Work in progress)";
 choices[733][2] = "Medir el tiempo en completar una tarea (Lead time)";
 choices[733][3] = "Todas las anteriores son reglas correspondientes a la metodolog&iacute;a Kanban.";
 answers[733] = choices[733][3];
 units[733] = "34, 84";
 comments[733] = "Id Pregunta: 733. Metodologias &aacute;giles";
 preguntaids[733] = 733


//  Id pregunta: 734 Año de creación de pregunta: 2016
 questions[734]= "735)  Indique la opci&oacute;n correcta en relaci&oacute;n con la VISI&Oacute;N de la Estrategia TIC";
 choices[734]= new Array();
 choices[734][0] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[734][1] = "En el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser digital.";
 choices[734][2] = "Para el a&ntilde;o 2020 ya no existir&aacute; ning&uacute;n procedimiento en soporte papel.";
 choices[734][3] = "En el a&ntilde;o 2020 los funcionarios realizar&aacute;n todas sus tareas con ordenador.";
 answers[734] = choices[734][1];
 units[734] = "28";
 comments[734] = "Id Pregunta: 734. Estrategia TIC";
 preguntaids[734] = 734


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[735]= "736)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[735]= new Array();
 choices[735][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[735][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[735][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[735][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[735] = choices[735][3];
 units[735] = "28";
 comments[735] = "Id Pregunta: 735. Estrategia TIC";
 preguntaids[735] = 735


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[736]= "737)  En el Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP el principio de transparencia:";
 choices[736]= new Array();
 choices[736][0] = "El seguimiento de la actividad de los funcionarios aumenta la eficacia de los servicios p&uacute;blicos.";
 choices[736][1] = "La transparencia facilita al ciudadano el acceso a los servicios p&uacute;blicos.";
 choices[736][2] = "Una continua monitorizaci&oacute;n de la actividad, junto a la evaluaci&oacute;n y difusi&oacute;n de resultados incrementa la satisfacci&oacute;n de los ciudadanos.";
 choices[736][3] = "El seguimiento y control de la actividad pol&iacute;tica disminuye las actividades ligadas a la corrupci&oacute;n.";
 answers[736] = choices[736][2];
 units[736] = "28";
 comments[736] = "Id Pregunta: 736. Estrategia TIC";
 preguntaids[736] = 736


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[737]= "738)  Son principios rectores del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[737]= new Array();
 choices[737][0] = "Tranparencia, Innovaci&oacute;n, Unidad y visi&oacute;n integral y Orientaci&oacute;n al usuario del servicio";
 choices[737][1] = "Tranparencia, Colaboraci&oacute;n y alianzas, Orientaci&oacute;n al usuario del servicio y Reutilizaci&oacute;n";
 choices[737][2] = "Reutilizaci&oacute;n, Seguridad, Orientaci&oacute;n al usuario del servicio y Transparencia";
 choices[737][3] = "Ninguna de las anteriores";
 answers[737] = choices[737][0];
 units[737] = "28";
 comments[737] = "Id Pregunta: 737. Estrategia TIC";
 preguntaids[737] = 737


//  Id pregunta: 738 Año de creación de pregunta: 2016
 questions[738]= "739)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se basar&aacute;n en:";
 choices[738]= new Array();
 choices[738][0] = "6 principios.";
 choices[738][1] = "7 principios.";
 choices[738][2] = "5 principios.";
 choices[738][3] = "6 directrices.";
 answers[738] = choices[738][2];
 units[738] = "28";
 comments[738] = "Id Pregunta: 738. Estrategia TIC";
 preguntaids[738] = 738


//  Id pregunta: 739 Año de creación de pregunta: 2016
 questions[739]= "740)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[739]= new Array();
 choices[739][0] = "2025";
 choices[739][1] = "2023";
 choices[739][2] = "2030";
 choices[739][3] = "2020";
 answers[739] = choices[739][3];
 units[739] = "28";
 comments[739] = "Id Pregunta: 739. Estrategia TIC";
 preguntaids[739] = 739


//  Id pregunta: 740 Año de creación de pregunta: 2016
 questions[740]= "741)  La estructura de la Estrategia TIC:";
 choices[740]= new Array();
 choices[740][0] = "5 principios rectores, 7 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[740][1] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 7 l&iacute;neas de acci&oacute;n";
 choices[740][2] = "5 principios rectores, 5 objetivos estrat&eacute;gicos, 9 l&iacute;neas de acci&oacute;n";
 choices[740][3] = "5 principios rectores, 6 objetivos estrat&eacute;gicos, 8 l&iacute;neas de acci&oacute;n";
 answers[740] = choices[740][2];
 units[740] = "28";
 comments[740] = "Id Pregunta: 740. Estrategia TIC";
 preguntaids[740] = 740


//  Id pregunta: 741 Año de creación de pregunta: 2016
 questions[741]= "742)  En relaci&oacute;n al principio rector Orientaci&oacute;n al usuario del servicio del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[741]= new Array();
 choices[741][0] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y seguridad.";
 choices[741][1] = "Es necesario redefinir los servicios empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 choices[741][2] = "Se requiere modernizar los servicios p&uacute;blicos empezando por el lado del ciudadano, ya sea un funcionario o una persona f&iacute;sica, con una vocaci&oacute;n de transparencia, usabilidad, simplicidad y accesibilidad.";
 choices[741][3] = "Es necesario redefinir los servicios empezando por el lado del usuario, ya sea un ciudadano o un empleado p&uacute;blico, con una vocaci&oacute;n de accesibilidad, usabilidad, simplicidad y transparencia.";
 answers[741] = choices[741][0];
 units[741] = "28";
 comments[741] = "Id Pregunta: 741. Estrategia TIC";
 preguntaids[741] = 741


//  Id pregunta: 742 Año de creación de pregunta: 2016
 questions[742]= "743)  Uno de los objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP:";
 choices[742]= new Array();
 choices[742][0] = "Proveer de manera compartida servicios comunes";
 choices[742][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n.";
 choices[742][2] = "Orientaci&oacute;n al usuario del servicio.";
 choices[742][3] = "Transparencia";
 answers[742] = choices[742][1];
 units[742] = "28";
 comments[742] = "Id Pregunta: 742. Estrategia TIC";
 preguntaids[742] = 742


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[743]= "744)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[743]= new Array();
 choices[743][0] = "Transparencia e innovaci&oacute;n";
 choices[743][1] = "Seguridad y reutilizaci&oacute;n";
 choices[743][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[743][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[743] = choices[743][3];
 units[743] = "28";
 comments[743] = "Id Pregunta: 743. Estrategia TIC";
 preguntaids[743] = 743


//  Id pregunta: 744 Año de creación de pregunta: 2016
 questions[744]= "745)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, se entiende por emprendedor:";
 choices[744]= new Array();
 choices[744][0] = "Aquellas personas f&iacute;sicas que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[744][1] = "Aquellas personas independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar una actividad econ&oacute;mica productiva.";
 choices[744][2] = "Aquellas personas, independientemente de su condici&oacute;n de persona f&iacute;sica o jur&iacute;dica, que van a desarrollar o est&aacute;n desarrollando una actividad econ&oacute;mica productiva.";
 choices[744][3] = "Ninguna de las anteriores";
 answers[744] = choices[744][2];
 units[744] = "23";
 comments[744] = "Id Pregunta: 744. Direcci&oacute;n p&uacute;blica";
 preguntaids[744] = 744


//  Id pregunta: 745 Año de creación de pregunta: 2016
 questions[745]= "746)  &iquest;Qu&eacute; dos figuras son novedad de la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n ?";
 choices[745]= new Array();
 choices[745][0] = "Las Sociedades de Responsabilidad Limitada de formaci&oacute;n sucesiva y el Emprendedor de responsabilidad limitada";
 choices[745][1] = "Sociedad Limitada de Formaci&oacute;n Sucesiva y Emprendedor de responsabilidad limitada";
 choices[745][2] = "Sociedad de Responsabilidad Limitada y Emprendedor de responsabilidad Limitada";
 choices[745][3] = "Sociedad de Formaci&oacute;n sucesiva y emprendedor de responsabilidad limitada";
 answers[745] = choices[745][1];
 units[745] = "23";
 comments[745] = "Id Pregunta: 745. Direcci&oacute;n p&uacute;blica";
 preguntaids[745] = 745


//  Id pregunta: 746 Año de creación de pregunta: 2016
 questions[746]= "747)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios de la Ley de Garant&iacute;a de la Unidad de Mercado?";
 choices[746]= new Array();
 choices[746][0] = "No discriminaci&oacute;n";
 choices[746][1] = "Cooperaci&oacute;n";
 choices[746][2] = "Colaboraci&oacute;n";
 choices[746][3] = "Todos los anteriores son principios de la Ley de Garant&iacute;a de la Unidad de Mercado";
 answers[746] = choices[746][2];
 units[746] = "23";
 comments[746] = "Id Pregunta: 746. Direcci&oacute;n p&uacute;blica";
 preguntaids[746] = 746


//  Id pregunta: 747 Año de creación de pregunta: 2016
 questions[747]= "748)  Cu&aacute;l de los siguientes NO es uno de los programas del marco general para la mejora de la calidad en la Administraci&oacute;n General del Estado:";
 choices[747]= new Array();
 choices[747][0] = "Programa de an&aacute;lisis de la demanda y de evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios de los servicios.";
 choices[747][1] = "Programa de cartas de servicios";
 choices[747][2] = "Programa para la mejora continua de las organizaciones.";
 choices[747][3] = "Programa de evaluaci&oacute;n de la calidad de las organizaciones.";
 answers[747] = choices[747][2];
 units[747] = "19";
 comments[747] = "Id Pregunta: 747. Direcci&oacute;n p&uacute;blica";
 preguntaids[747] = 747


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[748]= "749)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[748]= new Array();
 choices[748][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[748][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[748][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[748][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[748] = choices[748][1];
 units[748] = "10";
 comments[748] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";
 preguntaids[748] = 748


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[749]= "750)  &iquest;Cu&aacute;les de los siguientes principios de inspiraci&oacute;n en la funci&oacute;n gerencial NO incorpora la Ley 40/2015?";
 choices[749]= new Array();
 choices[749][0] = "Buena fe, confianza leg&iacute;tima y lealtad institucional.";
 choices[749][1] = "Calidad de los servicios p&uacute;blicos";
 choices[749][2] = "Responsabilidad por la gesti&oacute;n p&uacute;blica.";
 choices[749][3] = "Servicio efectivo a los ciudadanos";
 answers[749] = choices[749][1];
 units[749] = "18";
 comments[749] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";
 preguntaids[749] = 749


//  Id pregunta: 750 Año de creación de pregunta: 2016
 questions[750]= "751)  Son rasgos fundamentales del sistema burocr&aacute;tico:";
 choices[750]= new Array();
 choices[750][0] = "La racionalidad en la divisi&oacute;n del trabajo";
 choices[750][1] = "La eficiencia en el uso de los recursos p&uacute;blicos";
 choices[750][2] = "La competencia t&eacute;cnica y la meritocracia";
 choices[750][3] = "a) y c) son rasgos fundamentales del sistema burocr&aacute;tico";
 answers[750] = choices[750][3];
 units[750] = "20";
 comments[750] = "Id Pregunta: 750. Direcci&oacute;n p&uacute;blica";
 preguntaids[750] = 750


//  Id pregunta: 751 Año de creación de pregunta: 2016
 questions[751]= "752)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[751]= new Array();
 choices[751][0] = "Peters";
 choices[751][1] = "Hollingsworth";
 choices[751][2] = "Manuel Castells";
 choices[751][3] = "Gaebler";
 answers[751] = choices[751][1];
 units[751] = "20";
 comments[751] = "Id Pregunta: 751. Direcci&oacute;n p&uacute;blica";
 preguntaids[751] = 751


//  Id pregunta: 752 Año de creación de pregunta: 2016
 questions[752]= "753)  Es falso que:";
 choices[752]= new Array();
 choices[752][0] = "Son rasgos del modelo burocr&aacute;tico el pleno sometimiento al ordenamiento jur&iacute;dico y la impersonalidad en las relaciones.";
 choices[752][1] = "La Nueva Gesti&oacute;n P&uacute;blica ha sido el paradigma de reforma administrativa prevaleciente hasta principios de los 90, que tuvo gran influencia en los pa&iacute;ses angloamericanos y n&oacute;rdicos.";
 choices[752][2] = "Es un rasgo de la Nueva Gesti&oacute;n P&uacute;blica la terciarizaci&oacute;n de las actividades auxiliares o de apoyo, que pasan a ser licitadas competitivamente en el mercado.";
 choices[752][3] = "Una de las desventajas del modelo de la gobernanza es las redes pueden obstaculizar los cambios e innovaciones pol&iacute;ticos al dar un peso excesivo a los diversos intereses implicados.";
 answers[752] = choices[752][1];
 units[752] = "20";
 comments[752] = "Id Pregunta: 752. Direcci&oacute;n p&uacute;blica";
 preguntaids[752] = 752


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[753]= "754)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[753]= new Array();
 choices[753][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[753][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[753][2] = "b) y d) son verdaderas";
 choices[753][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[753] = choices[753][1];
 units[753] = "23";
 comments[753] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";
 preguntaids[753] = 753


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[754]= "755)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[754]= new Array();
 choices[754][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[754][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[754][2] = "Fomentar el despliegue de redes y servicios";
 choices[754][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[754] = choices[754][0];
 units[754] = "19";
 comments[754] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";
 preguntaids[754] = 754


//  Id pregunta: 755 Año de creación de pregunta: 2016
 questions[755]= "756)  &iquest;Qui&eacute;n realiza el seguimiento peri&oacute;dico del cumplimiento de los objetivos de la Agenda Digital para Espa&ntilde;a?";
 choices[755]= new Array();
 choices[755][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital (SGAD)";
 choices[755][1] = "La Asociaci&oacute;n Espa&ntilde;ola de Normalizaci&oacute;n y Certificaci&oacute;n (AENOR)";
 choices[755][2] = "El Observatorio Nacional de Telecomunicaciones y Sociedad de la Informaci&oacute;n (ONTSI)";
 choices[755][3] = "El Observatorio de Administraci&oacute;n Electr&oacute;nica (OBSAE)";
 answers[755] = choices[755][2];
 units[755] = "19";
 comments[755] = "Id Pregunta: 755. Agenda Digital para Espa&ntilde;a";
 preguntaids[755] = 755


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[756]= "757)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[756]= new Array();
 choices[756][0] = "Programa de Educaci&oacute;n Digital";
 choices[756][1] = "Programa de Salud y Bienestar Social";
 choices[756][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[756][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[756] = choices[756][3];
 units[756] = "19";
 comments[756] = "Id Pregunta: 756. Agenda Digital para Espa&ntilde;a";
 preguntaids[756] = 756


//  Id pregunta: 757 Año de creación de pregunta: 2016
 questions[757]= "758)  &iquest;Cu&aacute;l de los siguientes no es uno de los planes y actuaciones recogidos en la Agenda Digital para Espa&ntilde;a?";
 choices[757]= new Array();
 choices[757][0] = "Plan Nacional de Ciudades Inteligentes";
 choices[757][1] = "Plan Digital de Protecci&oacute;n del Medioambiente";
 choices[757][2] = "Plan de Impulso de las Tecnolog&iacute;as del Lenguaje";
 choices[757][3] = "Desarrollo e innovaci&oacute;n del sector TIC";
 answers[757] = choices[757][1];
 units[757] = "19";
 comments[757] = "Id Pregunta: 757. Agenda Digital para Espa&ntilde;a";
 preguntaids[757] = 757


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[758]= "759)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares en que se basa la Agenda Digital Europea?";
 choices[758]= new Array();
 choices[758][0] = "Promover un acceso a internet r&aacute;pido y ultrarr&aacute;pido para todos";
 choices[758][1] = "Implantar el mercado general europeo";
 choices[758][2] = "Fomentar la alfabetizaci&oacute;n, la capacitaci&oacute;n y la inclusi&oacute;n digitales";
 choices[758][3] = "Consolidar la confianza y la seguridad en l&iacute;nea";
 answers[758] = choices[758][1];
 units[758] = "19";
 comments[758] = "Id Pregunta: 758. Agenda Digital Europea";
 preguntaids[758] = 758


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[759]= "760)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[759]= new Array();
 choices[759][0] = "Crecimiento sostenible";
 choices[759][1] = "Crecimiento inteligente";
 choices[759][2] = "Crecimiento digital";
 choices[759][3] = "Crecimiento integrador";
 answers[759] = choices[759][2];
 units[759] = "19";
 comments[759] = "Id Pregunta: 759. Europa 2020";
 preguntaids[759] = 759


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[760]= "761)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[760]= new Array();
 choices[760][0] = "Agenda digital para Europa";
 choices[760][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[760][2] = "Juventud en movimiento";
 choices[760][3] = "Agenda Web 2.0";
 answers[760] = choices[760][3];
 units[760] = "19";
 comments[760] = "Id Pregunta: 760. Europa 2020";
 preguntaids[760] = 760


//  Id pregunta: 761 Año de creación de pregunta: 2016
 questions[761]= "762)  &iquest;En cu&aacute;ntos pilares se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[761]= new Array();
 choices[761][0] = "3 pilares";
 choices[761][1] = "4 pilares";
 choices[761][2] = "5 pilares";
 choices[761][3] = "7 pilares";
 answers[761] = choices[761][0];
 units[761] = "17";
 comments[761] = "Id Pregunta: 761. Mercado &Uacute;nico Digital";
 preguntaids[761] = 761


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[762]= "763)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[762]= new Array();
 choices[762][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[762][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[762][2] = "Apertura al exterior";
 choices[762][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[762] = choices[762][0];
 units[762] = "17";
 comments[762] = "Id Pregunta: 762. Mercado &Uacute;nico Digital";
 preguntaids[762] = 762


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[763]= "764)  &iquest;En qu&eacute; a&ntilde;o se adopt&oacute; la Estrategia para el Mercado &Uacute;nico Digital?";
 choices[763]= new Array();
 choices[763][0] = "En 2011";
 choices[763][1] = "En 2013";
 choices[763][2] = "En 2015";
 choices[763][3] = "En 2016";
 answers[763] = choices[763][2];
 units[763] = "17";
 comments[763] = "Id Pregunta: 763. Mercado &Uacute;nico Digital";
 preguntaids[763] = 763


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[764]= "765)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[764]= new Array();
 choices[764][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[764][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[764][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[764][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[764] = choices[764][2];
 units[764] = "4, 7, 8, 9";
 comments[764] = "Id Pregunta: 764. Ley 40/2015";
 preguntaids[764] = 764


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[765]= "766)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[765]= new Array();
 choices[765][0] = "la Administraci&oacute;n General del Estado";
 choices[765][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[765][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[765][3] = "el sector p&uacute;blico y privado institucional";
 answers[765] = choices[765][3];
 units[765] = "4, 7, 8, 9";
 comments[765] = "Id Pregunta: 765. Ley 40/2015";
 preguntaids[765] = 765


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[766]= "767)  El sector p&uacute;blico institucional se integra por:";
 choices[766]= new Array();
 choices[766][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[766][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[766][2] = "las Universidades p&uacute;blicas";
 choices[766][3] = "todas son correctas";
 answers[766] = choices[766][3];
 units[766] = "4, 7, 8, 9";
 comments[766] = "Id Pregunta: 766. Ley 40/2015";
 preguntaids[766] = 766


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[767]= "768)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[767]= new Array();
 choices[767][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[767][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[767][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[767][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[767] = choices[767][2];
 units[767] = "4, 7, 8, 9";
 comments[767] = "Id Pregunta: 767. Ley 40/2015";
 preguntaids[767] = 767


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[768]= "769)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[768]= new Array();
 choices[768][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[768][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[768][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[768][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[768] = choices[768][1];
 units[768] = "4, 7, 8, 9";
 comments[768] = "Id Pregunta: 768. Ley 40/2015";
 preguntaids[768] = 768


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[769]= "770)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[769]= new Array();
 choices[769][0] = "la Administraci&oacute;n General del Estado";
 choices[769][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[769][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[769][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[769] = choices[769][3];
 units[769] = "4, 7, 8, 9";
 comments[769] = "Id Pregunta: 769. Ley 40/2015";
 preguntaids[769] = 769


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[770]= "771)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[770]= new Array();
 choices[770][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[770][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[770][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[770][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[770] = choices[770][2];
 units[770] = "4, 7, 8, 9";
 comments[770] = "Id Pregunta: 770. Ley 40/2015";
 preguntaids[770] = 770


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[771]= "772)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[771]= new Array();
 choices[771][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[771][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[771][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[771][3] = "todas son correctas";
 answers[771] = choices[771][3];
 units[771] = "4, 7, 8, 9";
 comments[771] = "Id Pregunta: 771. Ley 40/2015";
 preguntaids[771] = 771


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[772]= "773)  Las Administraciones P&uacute;blicas:";
 choices[772]= new Array();
 choices[772][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[772][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[772][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[772][3] = "todas son correctas";
 answers[772] = choices[772][1];
 units[772] = "4, 7, 8, 9";
 comments[772] = "Id Pregunta: 772. Ley 40/2015";
 preguntaids[772] = 772


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[773]= "774)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[773]= new Array();
 choices[773][0] = "el Gobierno de la Naci&oacute;n";
 choices[773][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[773][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[773][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[773] = choices[773][3];
 units[773] = "4, 7, 8, 9";
 comments[773] = "Id Pregunta: 773. Ley 40/2015";
 preguntaids[773] = 773


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[774]= "775)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[774]= new Array();
 choices[774][0] = "personalidad jur&iacute;dica propia";
 choices[774][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[774][2] = "personalidad jur&iacute;dica plena";
 choices[774][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[774] = choices[774][1];
 units[774] = "4, 7, 8, 9";
 comments[774] = "Id Pregunta: 774. Ley 40/2015";
 preguntaids[774] = 774


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[775]= "776)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[775]= new Array();
 choices[775][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[775][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[775][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[775][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[775] = choices[775][2];
 units[775] = "4, 7, 8, 9";
 comments[775] = "Id Pregunta: 775. Ley 40/2015";
 preguntaids[775] = 775


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[776]= "777)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[776]= new Array();
 choices[776][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[776][1] = "el C&oacute;digo Civil";
 choices[776][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[776][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[776] = choices[776][0];
 units[776] = "4, 7, 8, 9";
 comments[776] = "Id Pregunta: 776. Ley 40/2015";
 preguntaids[776] = 776


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[777]= "778)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[777]= new Array();
 choices[777][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[777][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[777][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[777][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[777] = choices[777][3];
 units[777] = "4, 7, 8, 9";
 comments[777] = "Id Pregunta: 777. Ley 40/2015";
 preguntaids[777] = 777


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[778]= "779)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[778]= new Array();
 choices[778][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[778][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[778][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[778][3] = "todas son correctas";
 answers[778] = choices[778][1];
 units[778] = "4, 7, 8, 9";
 comments[778] = "Id Pregunta: 778. Ley 40/2015";
 preguntaids[778] = 778


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[779]= "780)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[779]= new Array();
 choices[779][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[779][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[779][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[779][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[779] = choices[779][0];
 units[779] = "4, 7, 8, 9";
 comments[779] = "Id Pregunta: 779. Ley 40/2015";
 preguntaids[779] = 779


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[780]= "781)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[780]= new Array();
 choices[780][0] = "circulares";
 choices[780][1] = "reglamentos internos";
 choices[780][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[780][3] = "disposiciones de car&aacute;cter general";
 answers[780] = choices[780][2];
 units[780] = "4, 7, 8, 9";
 comments[780] = "Id Pregunta: 780. Ley 40/2015";
 preguntaids[780] = 780


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[781]= "782)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[781]= new Array();
 choices[781][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[781][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[781][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[781][3] = "todas son correctas";
 answers[781] = choices[781][3];
 units[781] = "4, 7, 8, 9";
 comments[781] = "Id Pregunta: 781. Ley 40/2015";
 preguntaids[781] = 781


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[782]= "783)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[782]= new Array();
 choices[782][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[782][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[782][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[782][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[782] = choices[782][0];
 units[782] = "4, 7, 8, 9";
 comments[782] = "Id Pregunta: 782. Ley 40/2015";
 preguntaids[782] = 782


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[783]= "784)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[783]= new Array();
 choices[783][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[783][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[783][2] = "a y b son correctas";
 choices[783][3] = "a y b son incorrectas";
 answers[783] = choices[783][2];
 units[783] = "4, 7, 8, 9";
 comments[783] = "Id Pregunta: 783. Ley 40/2015";
 preguntaids[783] = 783


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[784]= "785)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[784]= new Array();
 choices[784][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[784][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[784][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[784][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[784] = choices[784][2];
 units[784] = "4, 7, 8, 9";
 comments[784] = "Id Pregunta: 784. Ley 40/2015";
 preguntaids[784] = 784


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[785]= "786)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[785]= new Array();
 choices[785][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[785][1] = "el Consejo de Estado";
 choices[785][2] = "el Congreso";
 choices[785][3] = "las Cortes Generales";
 answers[785] = choices[785][0];
 units[785] = "4, 7, 8, 9";
 comments[785] = "Id Pregunta: 785. Ley 40/2015";
 preguntaids[785] = 785


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[786]= "787)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[786]= new Array();
 choices[786][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[786][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[786][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[786][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[786] = choices[786][0];
 units[786] = "4, 7, 8, 9";
 comments[786] = "Id Pregunta: 786. Ley 40/2015";
 preguntaids[786] = 786


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[787]= "788)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[787]= new Array();
 choices[787][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[787][1] = "la Organizaci&oacute;n Territorial";
 choices[787][2] = "la Organizaci&oacute;n sectorial";
 choices[787][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[787] = choices[787][2];
 units[787] = "4, 7, 8, 9";
 comments[787] = "Id Pregunta: 787. Ley 40/2015";
 preguntaids[787] = 787


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[788]= "789)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[788]= new Array();
 choices[788][0] = "los Subsecretarios y los Secretarios generales";
 choices[788][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[788][2] = "los Secretarios de Estado y los Directores generales";
 choices[788][3] = "los Ministros y los Secretarios de Estado";
 answers[788] = choices[788][3];
 units[788] = "4, 7, 8, 9";
 comments[788] = "Id Pregunta: 788. Ley 40/2015";
 preguntaids[788] = 788


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[789]= "790)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[789]= new Array();
 choices[789][0] = "los Subsecretarios y Secretarios generales";
 choices[789][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[789][2] = "los Secretarios de Estado";
 choices[789][3] = "los Subdirectores generales";
 answers[789] = choices[789][2];
 units[789] = "4, 7, 8, 9";
 comments[789] = "Id Pregunta: 789. Ley 40/2015";
 preguntaids[789] = 789


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[790]= "791)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[790]= new Array();
 choices[790][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[790][1] = "los Subdelegados del Gobierno en las provincias";
 choices[790][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[790][3] = "a y b son correctas";
 answers[790] = choices[790][3];
 units[790] = "4, 7, 8, 9";
 comments[790] = "Id Pregunta: 790. Ley 40/2015";
 preguntaids[790] = 790


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[791]= "792)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[791]= new Array();
 choices[791][0] = "Subsecretario";
 choices[791][1] = "Subdirector general";
 choices[791][2] = "Secretario de Estado";
 choices[791][3] = "ninguna es correcta";
 answers[791] = choices[791][0];
 units[791] = "4, 7, 8, 9";
 comments[791] = "Id Pregunta: 791. Ley 40/2015";
 preguntaids[791] = 791


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[792]= "793)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[792]= new Array();
 choices[792][0] = "Subsecretario";
 choices[792][1] = "Subdirector general";
 choices[792][2] = "Secretario de Estado";
 choices[792][3] = "ninguna es correcta";
 answers[792] = choices[792][1];
 units[792] = "4, 7, 8, 9";
 comments[792] = "Id Pregunta: 792. Ley 40/2015";
 preguntaids[792] = 792


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[793]= "794)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[793]= new Array();
 choices[793][0] = "los Ministros y los Secretarios de Estado";
 choices[793][1] = "los Subsecretarios y Secretarios generales";
 choices[793][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[793][3] = "los Directores generales";
 answers[793] = choices[793][2];
 units[793] = "4, 7, 8, 9";
 comments[793] = "Id Pregunta: 793. Ley 40/2015";
 preguntaids[793] = 793


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[794]= "795)  Tienen la condici&oacute;n de alto cargo:";
 choices[794]= new Array();
 choices[794][0] = "los &oacute;rganos superiores";
 choices[794][1] = "los &oacute;rganos superiores y directivos";
 choices[794][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[794][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[794] = choices[794][2];
 units[794] = "4, 7, 8, 9";
 comments[794] = "Id Pregunta: 794. Ley 40/2015";
 preguntaids[794] = 794


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[795]= "796)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[795]= new Array();
 choices[795][0] = "un &oacute;rgano superior";
 choices[795][1] = "un &oacute;rgano directivo";
 choices[795][2] = "un &oacute;rgano superior o directivo";
 choices[795][3] = "ninguna es correcta";
 answers[795] = choices[795][2];
 units[795] = "4, 7, 8, 9";
 comments[795] = "Id Pregunta: 795. Ley 40/2015";
 preguntaids[795] = 795


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[796]= "797)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[796]= new Array();
 choices[796][0] = "&oacute;rganos superiores";
 choices[796][1] = "&oacute;rganos directivos";
 choices[796][2] = "&oacute;rganos superiores y directivos";
 choices[796][3] = "ninguna es correcta";
 answers[796] = choices[796][1];
 units[796] = "4, 7, 8, 9";
 comments[796] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[796] = 796


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[797]= "798)  Se&ntilde;ale la respuesta correcta:";
 choices[797]= new Array();
 choices[797][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[797][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[797][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[797][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[797] = choices[797][0];
 units[797] = "4, 7, 8, 9";
 comments[797] = "Id Pregunta: 797. Ley 40/2015";
 preguntaids[797] = 797


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[798]= "799)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[798]= new Array();
 choices[798][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[798][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[798][2] = "a y b son correctas";
 choices[798][3] = "a y b son incorrectas";
 answers[798] = choices[798][2];
 units[798] = "4, 7, 8, 9";
 comments[798] = "Id Pregunta: 798. Ley 40/2015";
 preguntaids[798] = 798


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[799]= "800)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[799]= new Array();
 choices[799][0] = "los &oacute;rganos administrativos";
 choices[799][1] = "las entidades dependientes";
 choices[799][2] = "las unidades administrativas";
 choices[799][3] = "los servicios comunes";
 answers[799] = choices[799][2];
 units[799] = "4, 7, 8, 9";
 comments[799] = "Id Pregunta: 799. Ley 40/2015";
 preguntaids[799] = 799


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[800]= "801)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[800]= new Array();
 choices[800][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[800][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[800][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[800][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[800] = choices[800][0];
 units[800] = "4, 7, 8, 9";
 comments[800] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[800] = 800


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[801]= "802)  Respecto a las unidades administrativas:";
 choices[801]= new Array();
 choices[801][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[801][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[801][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[801][3] = "ninguna es correcta";
 answers[801] = choices[801][1];
 units[801] = "4, 7, 8, 9";
 comments[801] = "Id Pregunta: 801. Ley 40/2015";
 preguntaids[801] = 801


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[802]= "803)  La Administraci&oacute;n General del Estado se organiza:";
 choices[802]= new Array();
 choices[802][0] = "en Ministerios";
 choices[802][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[802][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[802][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[802] = choices[802][1];
 units[802] = "4, 7, 8, 9";
 comments[802] = "Id Pregunta: 802. Ley 40/2015";
 preguntaids[802] = 802


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[803]= "804)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[803]= new Array();
 choices[803][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[803][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[803][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[803][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[803] = choices[803][3];
 units[803] = "4, 7, 8, 9";
 comments[803] = "Id Pregunta: 803. Ley 40/2015";
 preguntaids[803] = 803


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[804]= "805)  Los Secretarios generales t&eacute;cnicos:";
 choices[804]= new Array();
 choices[804][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[804][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[804][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[804][3] = "todas son correctas";
 answers[804] = choices[804][3];
 units[804] = "4, 7, 8, 9";
 comments[804] = "Id Pregunta: 804. Ley 40/2015";
 preguntaids[804] = 804


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[805]= "806)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[805]= new Array();
 choices[805][0] = "Director General";
 choices[805][1] = "Secretario general";
 choices[805][2] = "Subdirector general";
 choices[805][3] = "Subsecretario";
 answers[805] = choices[805][0];
 units[805] = "4, 7, 8, 9";
 comments[805] = "Id Pregunta: 805. Ley 40/2015";
 preguntaids[805] = 805


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[806]= "807)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[806]= new Array();
 choices[806][0] = "Subgrupo A1";
 choices[806][1] = "Subgrupo A2";
 choices[806][2] = "Subgrupo B";
 choices[806][3] = "Subgrupo C1";
 answers[806] = choices[806][0];
 units[806] = "4, 7, 8, 9";
 comments[806] = "Id Pregunta: 806. Ley 40/2015";
 preguntaids[806] = 806


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[807]= "808)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[807]= new Array();
 choices[807][0] = "los Secretarios generales t&eacute;cnicos";
 choices[807][1] = "los Directores generales";
 choices[807][2] = "los Secretarios generales";
 choices[807][3] = "los Subsecretarios";
 answers[807] = choices[807][1];
 units[807] = "4, 7, 8, 9";
 comments[807] = "Id Pregunta: 807. Ley 40/2015";
 preguntaids[807] = 807


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[808]= "809)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[808]= new Array();
 choices[808][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[808][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[808][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[808][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[808] = choices[808][1];
 units[808] = "4, 7, 8, 9";
 comments[808] = "Id Pregunta: 808. Ley 40/2015";
 preguntaids[808] = 808


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[809]= "810)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[809]= new Array();
 choices[809][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[809][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[809][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[809][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[809] = choices[809][0];
 units[809] = "4, 7, 8, 9";
 comments[809] = "Id Pregunta: 809. Ley 40/2015";
 preguntaids[809] = 809


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[810]= "811)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[810]= new Array();
 choices[810][0] = "los Secretarios de Estado";
 choices[810][1] = "los Ministros";
 choices[810][2] = "los Subsecretarios";
 choices[810][3] = "los Secretarios generales";
 answers[810] = choices[810][2];
 units[810] = "4, 7, 8, 9";
 comments[810] = "Id Pregunta: 810. Ley 40/2015";
 preguntaids[810] = 810


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[811]= "812)  Los Subdirectores generales:";
 choices[811]= new Array();
 choices[811][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[811][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[811][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[811][3] = "todas son correctas";
 answers[811] = choices[811][1];
 units[811] = "4, 7, 8, 9";
 comments[811] = "Id Pregunta: 811. Ley 40/2015";
 preguntaids[811] = 811


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[812]= "813)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[812]= new Array();
 choices[812][0] = "la capital del pa&iacute;s";
 choices[812][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[812][2] = "cada una de las provincias";
 choices[812][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[812] = choices[812][1];
 units[812] = "4, 7, 8, 9";
 comments[812] = "Id Pregunta: 812. Ley 40/2015";
 preguntaids[812] = 812


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[813]= "814)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[813]= new Array();
 choices[813][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[813][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[813][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[813][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[813] = choices[813][2];
 units[813] = "4, 7, 8, 9";
 comments[813] = "Id Pregunta: 813. Ley 40/2015";
 preguntaids[813] = 813


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[814]= "815)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[814]= new Array();
 choices[814][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[814][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[814][2] = "el Ministerio del Interior";
 choices[814][3] = "la Administraci&oacute;n General del Estado";
 answers[814] = choices[814][0];
 units[814] = "4, 7, 8, 9";
 comments[814] = "Id Pregunta: 814. Ley 40/2015";
 preguntaids[814] = 814


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[815]= "816)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[815]= new Array();
 choices[815][0] = "en cada Comunidad Aut&oacute;noma";
 choices[815][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[815][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[815][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[815] = choices[815][1];
 units[815] = "4, 7, 8, 9";
 comments[815] = "Id Pregunta: 815. Ley 40/2015";
 preguntaids[815] = 815


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[816]= "817)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[816]= new Array();
 choices[816][0] = "la poblaci&oacute;n del territorio";
 choices[816][1] = "el volumen de gesti&oacute;n";
 choices[816][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[816][3] = "todas son correctas";
 answers[816] = choices[816][3];
 units[816] = "4, 7, 8, 9";
 comments[816] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[816] = 816


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[817]= "818)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[817]= new Array();
 choices[817][0] = "por Real Decreto";
 choices[817][1] = "reglamentariamente";
 choices[817][2] = "mediante Ley";
 choices[817][3] = "ninguna es correcta";
 answers[817] = choices[817][1];
 units[817] = "4, 7, 8, 9";
 comments[817] = "Id Pregunta: 817. Ley 40/2015";
 preguntaids[817] = 817


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[818]= "819)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[818]= new Array();
 choices[818][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[818][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[818][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[818][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[818] = choices[818][0];
 units[818] = "4, 7, 8, 9";
 comments[818] = "Id Pregunta: 818. Ley 40/2015";
 preguntaids[818] = 818


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[819]= "820)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[819]= new Array();
 choices[819][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[819][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[819][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[819][3] = "ninguna es correcta";
 answers[819] = choices[819][2];
 units[819] = "4, 7, 8, 9";
 comments[819] = "Id Pregunta: 819. Ley 40/2015";
 preguntaids[819] = 819


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[820]= "821)  Respecto a los servicios territoriales es correcto:";
 choices[820]= new Array();
 choices[820][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[820][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[820][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[820][3] = "ninguna es correcta";
 answers[820] = choices[820][0];
 units[820] = "4, 7, 8, 9";
 comments[820] = "Id Pregunta: 820. Ley 40/2015";
 preguntaids[820] = 820


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[821]= "822)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[821]= new Array();
 choices[821][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[821][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[821][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[821][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[821] = choices[821][2];
 units[821] = "4, 7, 8, 9";
 comments[821] = "Id Pregunta: 821. Ley 40/2015";
 preguntaids[821] = 821


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[822]= "823)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[822]= new Array();
 choices[822][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[822][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[822][2] = "el Subdirector General que el Delegado designe";
 choices[822][3] = "el Secretario de Estado";
 answers[822] = choices[822][0];
 units[822] = "4, 7, 8, 9";
 comments[822] = "Id Pregunta: 822. Ley 40/2015";
 preguntaids[822] = 822


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[823]= "824)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[823]= new Array();
 choices[823][0] = "el Secretario General";
 choices[823][1] = "el Subdirector General";
 choices[823][2] = "el Secretario de Estado";
 choices[823][3] = "ninguna es correcta";
 answers[823] = choices[823][0];
 units[823] = "4, 7, 8, 9";
 comments[823] = "Id Pregunta: 823. Ley 40/2015";
 preguntaids[823] = 823


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[824]= "825)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[824]= new Array();
 choices[824][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[824][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[824][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[824][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[824] = choices[824][2];
 units[824] = "4, 7, 8, 9";
 comments[824] = "Id Pregunta: 824. Ley 40/2015";
 preguntaids[824] = 824


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[825]= "826)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[825]= new Array();
 choices[825][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[825][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[825][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[825][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[825] = choices[825][1];
 units[825] = "4, 7, 8, 9";
 comments[825] = "Id Pregunta: 825. Ley 40/2015";
 preguntaids[825] = 825


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[826]= "827)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[826]= new Array();
 choices[826][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[826][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[826][2] = "Los interesados en el procedimiento";
 choices[826][3] = "Las alternativas b) y c) son correctas";
 answers[826] = choices[826][1];
 units[826] = "4, 7, 8, 9";
 comments[826] = "Id Pregunta: 826. Ley 40/2015";
 preguntaids[826] = 826


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[827]= "828)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[827]= new Array();
 choices[827][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[827][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[827][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[827][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[827] = choices[827][1];
 units[827] = "4, 7, 8, 9";
 comments[827] = "Id Pregunta: 827. Ley 40/2015";
 preguntaids[827] = 827


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[828]= "829)  La recusaci&oacute;n pueden promoverla...";
 choices[828]= new Array();
 choices[828][0] = "Cualquier &oacute;rgano";
 choices[828][1] = "El interesado";
 choices[828][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[828][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[828] = choices[828][0];
 units[828] = "4, 7, 8, 9";
 comments[828] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[828] = 828


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[829]= "830)  La recusaci&oacute;n se plantea...";
 choices[829]= new Array();
 choices[829][0] = "Antes de iniciado el procedimiento";
 choices[829][1] = "Una vez iniciado el procedimiento";
 choices[829][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[829][3] = "En cualquier momento del procedimiento";
 answers[829] = choices[829][0];
 units[829] = "4, 7, 8, 9";
 comments[829] = "Id Pregunta: 829. Ley 40/2015";
 preguntaids[829] = 829


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[830]= "831)  La recusaci&oacute;n se plantear&aacute;...";
 choices[830]= new Array();
 choices[830][0] = "S&oacute;lo verbalmente";
 choices[830][1] = "S&oacute;lo por escrito";
 choices[830][2] = "Verbalmente o por escrito";
 choices[830][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[830] = choices[830][0];
 units[830] = "4, 7, 8, 9";
 comments[830] = "Id Pregunta: 830. Ley 40/2015";
 preguntaids[830] = 830


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[831]= "832)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[831]= new Array();
 choices[831][0] = "Un d&iacute;a";
 choices[831][1] = "Dos d&iacute;as";
 choices[831][2] = "Tres d&iacute;as";
 choices[831][3] = "Cuatro d&iacute;as";
 answers[831] = choices[831][3];
 units[831] = "4, 7, 8, 9";
 comments[831] = "Id Pregunta: 831. Ley 40/2015";
 preguntaids[831] = 831


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[832]= "833)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[832]= new Array();
 choices[832][0] = "Cabr&aacute; recurso de alzada";
 choices[832][1] = "Cabr&aacute; el nuevo protesto";
 choices[832][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[832][3] = "No cabr&aacute; recurso alguno";
 answers[832] = choices[832][3];
 units[832] = "4, 7, 8, 9";
 comments[832] = "Id Pregunta: 832. Ley 40/2015";
 preguntaids[832] = 832


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[833]= "834)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[833]= new Array();
 choices[833][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[833][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[833][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[833][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[833] = choices[833][0];
 units[833] = "4, 7, 8, 9";
 comments[833] = "Id Pregunta: 833. Ley 40/2015";
 preguntaids[833] = 833


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[834]= "835)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[834]= new Array();
 choices[834][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[834][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[834][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[834][3] = "Todas son correctas.";
 answers[834] = choices[834][3];
 units[834] = "4, 7, 8, 9";
 comments[834] = "Id Pregunta: 834. Ley 40/2015";
 preguntaids[834] = 834


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[835]= "836)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[835]= new Array();
 choices[835][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[835][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[835][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[835][3] = "Todas son correctas.";
 answers[835] = choices[835][0];
 units[835] = "4, 7, 8, 9";
 comments[835] = "Id Pregunta: 835. Ley 40/2015";
 preguntaids[835] = 835


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[836]= "837)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[836]= new Array();
 choices[836][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[836][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[836][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[836][3] = "Todas son correctas.";
 answers[836] = choices[836][3];
 units[836] = "4, 7, 8, 9";
 comments[836] = "Id Pregunta: 836. Ley 40/2015";
 preguntaids[836] = 836


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[837]= "838)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[837]= new Array();
 choices[837][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[837][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[837][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[837][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[837] = choices[837][2];
 units[837] = "4, 7, 8, 9";
 comments[837] = "Id Pregunta: 837. Ley 40/2015";
 preguntaids[837] = 837


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[838]= "839)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[838]= new Array();
 choices[838][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[838][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[838][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[838][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[838] = choices[838][1];
 units[838] = "4, 7, 8, 9";
 comments[838] = "Id Pregunta: 838. Ley 40/2015";
 preguntaids[838] = 838


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[839]= "840)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[839]= new Array();
 choices[839][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[839][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[839][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[839][3] = "Todas son correctas.";
 answers[839] = choices[839][3];
 units[839] = "4, 7, 8, 9";
 comments[839] = "Id Pregunta: 839. Ley 40/2015";
 preguntaids[839] = 839


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[840]= "841)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[840]= new Array();
 choices[840][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[840][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[840][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[840][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[840] = choices[840][1];
 units[840] = "4, 7, 8, 9";
 comments[840] = "Id Pregunta: 840. Ley 40/2015";
 preguntaids[840] = 840


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[841]= "842)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[841]= new Array();
 choices[841][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[841][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[841][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[841][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[841] = choices[841][0];
 units[841] = "4, 7, 8, 9";
 comments[841] = "Id Pregunta: 841. Ley 40/2015";
 preguntaids[841] = 841


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[842]= "843)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[842]= new Array();
 choices[842][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[842][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[842][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[842][3] = "Todas son correctas.";
 answers[842] = choices[842][1];
 units[842] = "4, 7, 8, 9";
 comments[842] = "Id Pregunta: 842. Ley 40/2015";
 preguntaids[842] = 842


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[843]= "844)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[843]= new Array();
 choices[843][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[843][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[843][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[843][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[843] = choices[843][2];
 units[843] = "4, 7, 8, 9";
 comments[843] = "Id Pregunta: 843. Ley 40/2015";
 preguntaids[843] = 843


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[844]= "845)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[844]= new Array();
 choices[844][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[844][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[844][2] = "A y B son correctas.";
 choices[844][3] = "A y B son incorrectas.";
 answers[844] = choices[844][2];
 units[844] = "4, 7, 8, 9";
 comments[844] = "Id Pregunta: 844. Ley 40/2015";
 preguntaids[844] = 844


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[845]= "846)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[845]= new Array();
 choices[845][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[845][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[845][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[845][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[845] = choices[845][1];
 units[845] = "4, 7, 8, 9";
 comments[845] = "Id Pregunta: 845. Ley 40/2015";
 preguntaids[845] = 845


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[846]= "847)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[846]= new Array();
 choices[846][0] = "Conferencia de Presidentes.";
 choices[846][1] = "Convenios de colaboraci&oacute;n.";
 choices[846][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[846][3] = "Conferencias Sectoriales.";
 answers[846] = choices[846][0];
 units[846] = "4, 7, 8, 9";
 comments[846] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[846] = 846


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[847]= "848)  Se&ntilde;ale la respuesta falsa:";
 choices[847]= new Array();
 choices[847][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[847][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[847][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[847][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[847] = choices[847][2];
 units[847] = "4, 7, 8, 9";
 comments[847] = "Id Pregunta: 847. Ley 40/2015";
 preguntaids[847] = 847


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[848]= "849)  Se&ntilde;ale la respuesta correcta:";
 choices[848]= new Array();
 choices[848][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[848][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[848][2] = "A y B son correctas.";
 choices[848][3] = "A y B son falsas.";
 answers[848] = choices[848][2];
 units[848] = "4, 7, 8, 9";
 comments[848] = "Id Pregunta: 848. Ley 40/2015";
 preguntaids[848] = 848


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[849]= "850)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[849]= new Array();
 choices[849][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[849][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[849][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[849][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[849] = choices[849][0];
 units[849] = "4, 7, 8, 9";
 comments[849] = "Id Pregunta: 849. Ley 40/2015";
 preguntaids[849] = 849


//  Id pregunta: 850 Año de creación de pregunta: 2016
 questions[850]= "851)  El RPO (Recovery Point Objective) de una organizaci&oacute;n son 2 horas. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?: ";
 choices[850]= new Array();
 choices[850][0] = "No m&aacute;s de 2 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[850][1] = "No m&aacute;s de 4 horas de datos de producci&oacute;n se pueden perder en caso de desastre";
 choices[850][2] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 2 horas.";
 choices[850][3] = "El tiempo para recuperar los sistemas en producci&oacute;n de nuevo no puede ser m&aacute;s de 4 horas.";
 answers[850] = choices[850][0];
 units[850] = "45";
 comments[850] = "Id Pregunta: 850. Xunta de Galicia 2015";
 preguntaids[850] = 850


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[851]= "852)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[851]= new Array();
 choices[851][0] = "As&iacute;ncrona.";
 choices[851][1] = "Log-shipping.";
 choices[851][2] = "Disk buffering.";
 choices[851][3] = "S&iacute;ncrona.";
 answers[851] = choices[851][3];
 units[851] = "53";
 comments[851] = "Id Pregunta: 851. Xunta de Galicia 2015";
 preguntaids[851] = 851


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[852]= "853)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[852]= new Array();
 choices[852][0] = "Backup full.";
 choices[852][1] = "Backup diferencial.";
 choices[852][2] = "Backup incremental.";
 choices[852][3] = "Backup deduplicado.";
 answers[852] = choices[852][3];
 units[852] = "53";
 comments[852] = "Id Pregunta: 852. Xunta de Galicia 2015";
 preguntaids[852] = 852


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[853]= "854)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[853]= new Array();
 choices[853][0] = "6 TB.";
 choices[853][1] = "8 TB.";
 choices[853][2] = "7 TB.";
 choices[853][3] = "4 TB.";
 answers[853] = choices[853][3];
 units[853] = "53";
 comments[853] = "Id Pregunta: 853. Xunta de Galicia 2015";
 preguntaids[853] = 853


//  Id pregunta: 854 Año de creación de pregunta: 2016
 questions[854]= "855)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[854]= new Array();
 choices[854][0] = "6 TB.";
 choices[854][1] = "5 TB.";
 choices[854][2] = "7 TB.";
 choices[854][3] = "3 TB.";
 answers[854] = choices[854][1];
 units[854] = "53";
 comments[854] = "Id Pregunta: 854. Xunta de Galicia 2015";
 preguntaids[854] = 854


//  Id pregunta: 855 Año de creación de pregunta: 2016
 questions[855]= "856)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[855]= new Array();
 choices[855][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[855][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[855][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[855][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[855] = choices[855][0];
 units[855] = "76";
 comments[855] = "Id Pregunta: 855. Xunta de Galicia 2015";
 preguntaids[855] = 855


//  Id pregunta: 856 Año de creación de pregunta: 2016
 questions[856]= "857)  Respecto a la Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado, se&ntilde;ale la respuesta falsa:";
 choices[856]= new Array();
 choices[856][0] = "Proporciona un marco de criterios, recomendaciones y buenas pr&aacute;cticas a tener en cuenta por sus Departamentos y organismos al crear, generar contenidos o evolucionar los sitios y portales web, las sedes electr&oacute;nicas o los sitios relacionados con las nuevas tecnolog&iacute;as web2.0.";
 choices[856][1] = "Se aprob&oacute; mediante la  Resoluci&oacute;n de 21 de marzo de 2013, de la Secretar&iacute;a de Estado de Administraciones P&uacute;blicas.";
 choices[856][2] = "La Gu&iacute;a de Comunicaci&oacute;n Digital se divide en cuatro partes y cada una de ellas consta de una serie de fasc&iacute;culos que pueden ser utilizados de forma independiente de acuerdo con las necesidades de cada departamento, organismo, unidad promotora o responsable de un sitio web.";
 choices[856][3] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado puede ser utilizada libremente y no requiere autorizaci&oacute;n previa.";
 answers[856] = choices[856][2];
 units[856] = "125";
 comments[856] = "Id Pregunta: 856. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[856] = 856


//  Id pregunta: 857 Año de creación de pregunta: 2016
 questions[857]= "858)  Sobre el multiling&uuml;ismo en los sitios web p&uacute;blicos, se&ntilde;ale la respuesta falsa:";
 choices[857]= new Array();
 choices[857][0] = "Los responsables de contenidos y responsables t&eacute;cnicos de portales de cualquier organismo de la Administraci&oacute;n General del Estado deben tener en cuenta que Espa&ntilde;a es un pa&iacute;s multiling&uuml;e y que deben velar para que el idioma no constituya una barrera al acceso a los contenidos de las webs p&uacute;blicas.";
 choices[857][1] = "Cada Comunidad Aut&oacute;noma debe encargarse de la traducci&oacute;n de los contenidos de sus p&aacute;ginas web para facilitar y acercar los servicios prestados por la Administraci&oacute;n a los ciudadanos y empresas.";
 choices[857][2] = "Como criterio general, todos los contenidos de los portales ser&aacute;n accesibles, adem&aacute;s de en castellano, lengua espa&ntilde;ola oficial del Estado, en las siguientes lenguas idiomas cooficiales de las respectivas Comunidades Aut&oacute;nomas de Espa&ntilde;a: catal&aacute;n, euskera, gallego y valenciano.";
 choices[857][3] = "Para facilitar la traducci&oacute;n a las lenguas cooficiales y al ingl&eacute;s, se est&aacute; preparando una Plataforma de traducci&oacute;n autom&aacute;tica com&uacute;n de la AGE: PLATA que estar&aacute; disponible con gran calidad al catal&aacute;n, gallego y con necesidad de revisi&oacute;n asistida en el caso del euskera y el ingl&eacute;s.";
 answers[857] = choices[857][1];
 units[857] = "125";
 comments[857] = "Id Pregunta: 857. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[857] = 857


//  Id pregunta: 858 Año de creación de pregunta: 2016
 questions[858]= "859)  Respecto de la imagen institucional de los sitios web p&uacute;blicos:";
 choices[858]= new Array();
 choices[858][0] = "La utilizaci&oacute;n de s&iacute;mbolos de imagen o logotipos propios ser&aacute; comunicada al Ministerio de Energ&iacute;a, Turismo y Agenda Digital  para facilitar el cumplimiento de la prohibici&oacute;n legal de registrar signos que los reproduzcan o imiten.";
 choices[858][1] = "Los s&iacute;mbolos y logotipos propios podr&aacute;n ser registrados como marca en el caso de que vayan a ser utilizados en el tr&aacute;fico econ&oacute;mico.";
 choices[858][2] = "Los documentos anexos alojados en p&aacute;ginas webs, que puedan ser susceptibles de ser considerados material de papeler&iacute;a, utilizar&aacute;n el logotipo propio.";
 choices[858][3] = "De acuerdo con el Real Decreto 1565/1999, con car&aacute;cter excepcional, y siempre que se acrediten razones debidamente justificadas, el Ministro de Hacienda y Funci&oacute;n P&uacute;blica y el titular del correspondiente Ministerio de adscripci&oacute;n, vinculaci&oacute;n o dependencia podr&aacute;n autorizar la utilizaci&oacute;n por determinados &oacute;rganos, Organismos aut&oacute;nomos y Servicios Comunes o Entidades Gestoras de la Seguridad Social de s&iacute;mbolos de imagen o logotipos propios junto a los s&iacute;mbolos establecidos.";
 answers[858] = choices[858][1];
 units[858] = "125";
 comments[858] = "Id Pregunta: 858. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[858] = 858


//  Id pregunta: 859 Año de creación de pregunta: 2016
 questions[859]= "860)  &iquest;Cu&aacute;ntos fasc&iacute;culos tiene la gu&iacute;a de comunicaci&oacute;n digital para la Administraci&oacute;n General del Estado?";
 choices[859]= new Array();
 choices[859][0] = "12";
 choices[859][1] = "11";
 choices[859][2] = "13";
 choices[859][3] = "10";
 answers[859] = choices[859][0];
 units[859] = "125";
 comments[859] = "Id Pregunta: 859. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[859] = 859


//  Id pregunta: 860 Año de creación de pregunta: 2016
 questions[860]= "861)  &iquest;Cu&aacute;l NO es un objetivo de la utilizaci&oacute;n por parte de la Administraci&oacute;n de la web 2.0?";
 choices[860]= new Array();
 choices[860][0] = "Permitir la generaci&oacute;n de comentarios acerca de la informaci&oacute;n ofrecida y recibir actualizaciones en vivo por parte de los usuarios.";
 choices[860][1] = "Promover una mayor interacci&oacute;n con las principales redes sociales.";
 choices[860][2] = "Conseguir un conocimiento abierto, en particular mediante blogs y wikis.";
 choices[860][3] = "Conseguir que el usuario se sienta escuchado.";
 answers[860] = choices[860][1];
 units[860] = "125";
 comments[860] = "Id Pregunta: 860. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[860] = 860


//  Id pregunta: 861 Año de creación de pregunta: 2016
 questions[861]= "862)  Para la generaci&oacute;n de contenidos de un sitio web p&uacute;blico se necesitan diversos perfiles. Indique cu&aacute;l NO es uno de ellos.";
 choices[861]= new Array();
 choices[861][0] = "Generador de contenidos";
 choices[861][1] = "Publicador de contenidos";
 choices[861][2] = "Administrador de contenidos";
 choices[861][3] = "Aprobador de contenidos";
 answers[861] = choices[861][3];
 units[861] = "125";
 comments[861] = "Id Pregunta: 861. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[861] = 861


//  Id pregunta: 862 Año de creación de pregunta: 2016
 questions[862]= "863)  Sobre las URL de los sitios web p&uacute;blicos, se&ntilde;ale cu&aacute;l NO es verdadera:";
 choices[862]= new Array();
 choices[862][0] = "Se recomienda utilizar la URL con dominio &lt;.gob.es&gt; en todos los niveles de la Administraci&oacute;n General del Estado, para todos los sitios web.";
 choices[862][1] = "Si se trata de organismos muy conocidos por los ciudadanos y siempre que no coincida con la denominaci&oacute;n del portal, se puede utilizar la denominaci&oacute;n actual con .gob.es";
 choices[862][2] = "Para una mayor normalizaci&oacute;n siempre se podr&iacute;a redireccionar autom&aacute;ticamente desde una URL a otra, para lo cual habr&aacute; que registrar los dos dominios: organismo.gob.es y sede.organismo.gob.es.";
 choices[862][3] = "Se recomienda utilizar sede.aaaa.gob.es, donde aaaa se sustituir&aacute; por el nombre del Ministerio al que pertenece el organismo.";
 answers[862] = choices[862][3];
 units[862] = "125";
 comments[862] = "Id Pregunta: 862. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[862] = 862


//  Id pregunta: 863 Año de creación de pregunta: 2016
 questions[863]= "864)  Se recomienda que todas aquellas campa&ntilde;as de los ministerios que cuenten con su propia p&aacute;gina web, cuenten adem&aacute;s con un subdominio o URL secundaria en la estructura general de la p&aacute;gina web del Ministerio. Indique la opci&oacute;n correcta.";
 choices[863]= new Array();
 choices[863][0] = "Se podr&aacute; utilizar de forma opcional descripciones sem&aacute;nticas en el nombramiento y titulaci&oacute;n de los subdominios.";
 choices[863][1] = "RUN implementa una soluci&oacute;n sencilla de generaci&oacute;n de URL cortas  para una mejora en la eficiencia de la remisi&oacute;n de direcciones web mediante email, sms, twitter etc";
 choices[863][2] = "El nombre del subdominio o URL secundaria debe ser distinto al que se utilice como URL independiente.";
 choices[863][3] = "Con los subdominios o URL secundarias los robots de los buscadores requerir&aacute;n m&aacute;s tiempo en interpretar su dependencia contextual con el Ministerio u &Oacute;rgano de la Administraci&oacute;n.";
 answers[863] = choices[863][1];
 units[863] = "125";
 comments[863] = "Id Pregunta: 863. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[863] = 863


//  Id pregunta: 864 Año de creación de pregunta: 2016
 questions[864]= "865)  &iquest;Qu&eacute; son las t&eacute;cnicas SEO? ";
 choices[864]= new Array();
 choices[864][0] = "SEO es el acr&oacute;nimo de search engine optimization.";
 choices[864][1] = "Las t&eacute;cnicas SEO Onsite son en s&iacute; las que llevaremos a cabo dentro de nuestro sitio, tales como optimizaciones de c&oacute;digo, optimizaci&oacute;n de procesos del servidor, llamadas a la base de datos y sobre todo optimizaci&oacute;n de contenido. ";
 choices[864][2] = "Las t&eacute;cnicas de SEO Offsite se refieren a todos los enlaces que no est&aacute;n en nuestro sitio web. Se trata del n&uacute;mero de veces que est&aacute; enlazado el sitio web, desde d&oacute;nde y con qu&eacute; t&eacute;rminos.";
 choices[864][3] = "Todas las anteriores son verdaderas.";
 answers[864] = choices[864][3];
 units[864] = "125";
 comments[864] = "Id Pregunta: 864. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[864] = 864


//  Id pregunta: 865 Año de creación de pregunta: 2016
 questions[865]= "866)  Respecto al concepto de Web m&oacute;vil, se&ntilde;ale la respuesta falsa:";
 choices[865]= new Array();
 choices[865][0] = "En general se deben desarrollar sitios web espec&iacute;ficos para dispositivos m&oacute;viles con informaci&oacute;n y con servicios y aplicaciones web espec&iacute;ficas.";
 choices[865][1] = "El dise&ntilde;o de un sitio debe contemplar este tipo de plataformas para crear un sitio accesible y usable que se adapte din&aacute;micamente a las necesidades del usuario, a las capacidades del dispositivo y a las condiciones del entorno.";
 choices[865][2] = "Para ello, es necesaria una infraestructura global basada en est&aacute;ndares que permitan la interoperabilidad y aprovechar las capacidades de la movilidad y de la web 2.0.&nbsp;&nbsp;";
 choices[865][3] = "Poner a disposici&oacute;n la versi&oacute;n Web M&oacute;vil para los principales sistemas operativos y navegadores:Chrome y Safari.";
 answers[865] = choices[865][3];
 units[865] = "125";
 comments[865] = "Id Pregunta: 865. Gu&iacute;a de comunicaci&oacute;n digital";
 preguntaids[865] = 865


