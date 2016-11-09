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

//  Id pregunta: 702 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Cu&aacute;l de las siguientes l&iacute;neas ser&iacute;a v&aacute;lida en XHTML:";
 choices[0]= new Array();
 choices[0][0] = "&lt;br/&gt;&lt;hr&gt;&lt;/hr&gt;";
 choices[0][1] = "&lt;br/&gt;&lt;hr/&gt;";
 choices[0][2] = "&lt;hr&gt;&lt;/hr&gt;";
 choices[0][3] = "Todas son v&aacute;lidas";
 answers[0] = choices[0][3];
 units[0] = "69";
 comments[0] = "Id Pregunta: 702. Similar a examen TIC MAP A 2004. La C no ser&iacute;a v&aacute;lida en HTML 4.0";


//  Id pregunta: 703 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Un documento XML con DTD es:";
 choices[1]= new Array();
 choices[1][0] = "v&aacute;lido";
 choices[1][1] = "inv&aacute;lido";
 choices[1][2] = "bien formado";
 choices[1][3] = "conformado";
 answers[1] = choices[1][0];
 units[1] = "69";
 comments[1] = "Id Pregunta: 703. Similar a examen TIC MAP A 2004";


//  Id pregunta: 706 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  DTD se emplea para:";
 choices[2]= new Array();
 choices[2][0] = "Crear documentos XML bien formados";
 choices[2][1] = "Formatear documentos XML";
 choices[2][2] = "Transformar documentos HTML en XML";
 choices[2][3] = "Validar documentos XML";
 answers[2] = choices[2][3];
 units[2] = "69";
 comments[2] = "Id Pregunta: 706. Similar a examen TIC SS A 2004";


//  Id pregunta: 729 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En el lenguaje XML, el t&eacute;rmino que se utiliza para definir &quot;Las reglas que determinan el conjunto de marcas y su sintaxis&quot; es:";
 choices[3]= new Array();
 choices[3][0] = "DXL (Document eXtended Language)";
 choices[3][1] = "DTD (Document Type Definition)";
 choices[3][2] = "DOM (Document Object Model)";
 choices[3][3] = "DML (Document Markup Language)";
 answers[3] = choices[3][1];
 units[3] = "69";
 comments[3] = "Id Pregunta: 729. Examen TIC MAP B 2004";


//  Id pregunta: 855 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes proposiciones es falsa respecto de WML?:";
 choices[4]= new Array();
 choices[4][0] = "El significado de las siglas WML es Wireless Mask Language";
 choices[4][1] = "El lenguaje WML est&aacute; basado en el est&aacute;ndar XML";
 choices[4][2] = "La DTD puede estar en la red o puede almacenarse localmente";
 choices[4][3] = "El lenguaje WML no s&oacute;lo permite texto sino que tambi&eacute;n permite im&aacute;genes";
 answers[4] = choices[4][0];
 units[4] = "69";
 comments[4] = "Id Pregunta: 855. NULL";


//  Id pregunta: 879 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l es el modelo de objeto de documento que utilizan los parsers o analizadores de XML?:";
 choices[5]= new Array();
 choices[5][0] = "DOKM";
 choices[5][1] = "DOM";
 choices[5][2] = "JDOC";
 choices[5][3] = "Todas son falsas";
 answers[5] = choices[5][1];
 units[5] = "69";
 comments[5] = "Id Pregunta: 879. NULL";


//  Id pregunta: 895 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;En qu&eacute; conjunto de caracteres est&aacute; basado XML?:";
 choices[6]= new Array();
 choices[6][0] = "Unicode";
 choices[6][1] = "ITU 396-4";
 choices[6][2] = "ANSI 328";
 choices[6][3] = "Ninguno de los anteriores";
 answers[6] = choices[6][0];
 units[6] = "69";
 comments[6] = "Id Pregunta: 895. NULL";


//  Id pregunta: 938 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; relaci&oacute;n existe entre SGML y HTML?:";
 choices[7]= new Array();
 choices[7][0] = "HTML es un subconjunto de SGML";
 choices[7][1] = "SGML es un subconjunto de HTML";
 choices[7][2] = "SGML se inspir&oacute; en HTML";
 choices[7][3] = "No tienen relaci&oacute;n";
 answers[7] = choices[7][0];
 units[7] = "69";
 comments[7] = "Id Pregunta: 938. NULL";


//  Id pregunta: 1010 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El creador de HTML fue:";
 choices[8]= new Array();
 choices[8][0] = "Tim Berners-Lee";
 choices[8][1] = "Ivar Jacobson";
 choices[8][2] = "Grady Booch";
 choices[8][3] = "Todas son falsas";
 answers[8] = choices[8][0];
 units[8] = "69";
 comments[8] = "Id Pregunta: 1010. NULL";


//  Id pregunta: 1025 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Entre las siguientes caract&eacute;risticas del HTML (Hyper Text Markup Language) hay una incorrecta. Se&ntilde;&aacute;lela:";
 choices[9]= new Array();
 choices[9][0] = "No se necesita ning&uacute;n compilador especial para realizar p&aacute;gina Web";
 choices[9][1] = "Los tipos de letra (fuentes o fonts) vienen declarados dentro del texto en 'claro'";
 choices[9][2] = "La &uacute;ltima especificaci&oacute;n de este lenguaje es la HTML 2.0";
 choices[9][3] = "Las p&aacute;gina Web, pueden interactuar con los usuarios a trav&eacute;s de los CGI (Common Gateway Interfaces) o de los applets de Java";
 answers[9] = choices[9][2];
 units[9] = "69";
 comments[9] = "Id Pregunta: 1025. NULL";


//  Id pregunta: 1218 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  La especificaci&oacute;n XSLT define:";
 choices[10]= new Array();
 choices[10][0] = "El formato de visualizaci&oacute;n de los documentos XML";
 choices[10][1] = "El formato de ordenaci&oacute;n de etiquetas o tags de documentos XML";
 choices[10][2] = "La definici&oacute;n de datos en los documentos XML";
 choices[10][3] = "La estructura de enlace en los documentos XML";
 answers[10] = choices[10][0];
 units[10] = "69";
 comments[10] = "Id Pregunta: 1218. NULL";


//  Id pregunta: 1238 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  La principal diferencia entre HTML y XML es que:";
 choices[11]= new Array();
 choices[11][0] = "HTML es un lenguaje orientado a textos, aunque maneja gr&aacute;ficos con dificultad, XML es mucho mas versatil y suple las carencias de HTML";
 choices[11][1] = "XML es un lenguaje de descripci&oacute;n de contenidos, y HTML de presentaci&oacute;n, es posible incluso que documentos XML se transformen en HTML";
 choices[11][2] = "XML es un subconjunto de HTML";
 choices[11][3] = "B y C son ciertas";
 answers[11] = choices[11][1];
 units[11] = "69";
 comments[11] = "Id Pregunta: 1238. NULL";


//  Id pregunta: 1273 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Los documentos &quot;bien formados&quot; en XML:";
 choices[12]= new Array();
 choices[12][0] = "no siguen las reglas de etiquetado de XML pero s&iacute; del DTD";
 choices[12][1] = "siguen las reglas de etiquetado de XML y del DTD";
 choices[12][2] = "no siguen las reglas de etiquetado del DTD pero s&iacute; de XML";
 choices[12][3] = "ninguno de los anteriores";
 answers[12] = choices[12][2];
 units[12] = "69";
 comments[12] = "Id Pregunta: 1273. NULL";


//  Id pregunta: 1298 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Para especificar localizadores en XML se usa:";
 choices[13]= new Array();
 choices[13][0] = "s&oacute;lo el est&aacute;ndar Xlink";
 choices[13][1] = "s&oacute;lo el est&aacute;ndar Xpointer";
 choices[13][2] = "los est&aacute;ndares Xlink y Xpointer";
 choices[13][3] = "ninguno de los anteriores";
 answers[13] = choices[13][2];
 units[13] = "69";
 comments[13] = "Id Pregunta: 1298. NULL";


//  Id pregunta: 1372 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Sobre el uso que hacen XML y HTML de etiquetas y atributos:";
 choices[14]= new Array();
 choices[14][0] = "HTML y XML especifican lo que significa cada etiqueta y atributo";
 choices[14][1] = "XML usa las etiquetas s&oacute;lo para delimitar segmentos de datos y deja la interpretaci&oacute;n de los datos a la aplicaci&oacute;n que los lee";
 choices[14][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[14][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[14] = choices[14][1];
 units[14] = "69";
 comments[14] = "Id Pregunta: 1372. NULL";


//  Id pregunta: 1432 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  XML:";
 choices[15]= new Array();
 choices[15][0] = "Es un lenguaje de presentaci&oacute;n, similar a HTML, pero m&aacute;s avanzado";
 choices[15][1] = "Est&aacute; orientado a especificar la estructura de los datos, no la forma de presentarlos";
 choices[15][2] = "Es similar a HTML pero con una orientaci&oacute;n hacia el mundo del dise&ntilde;o dado que permite realizar maginas web mas vistosas y din&aacute;micas";
 choices[15][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[15] = choices[15][1];
 units[15] = "69";
 comments[15] = "Id Pregunta: 1432. NULL";


//  Id pregunta: 1433 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  XQL es:";
 choices[16]= new Array();
 choices[16][0] = "Extended Query Language";
 choices[16][1] = "XML Query Language";
 choices[16][2] = "No se corresponde con ningun acr&oacute;nimo usado en inform&aacute;tica o telecomunicaciones";
 choices[16][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[16] = choices[16][1];
 units[16] = "69";
 comments[16] = "Id Pregunta: 1433. NULL";


//  Id pregunta: 1496 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indicar cu&aacute;l de las siguientes afirmaciones no es cierta acerca del lenguaje HTML:";
 choices[17]= new Array();
 choices[17][0] = "Es un lenguaje de programaci&oacute;n";
 choices[17][1] = "Permite referencias a otros documentos o recursos de la red";
 choices[17][2] = "Permite la inclusi&oacute;n de marcas (tags) para controlar los aspectos de la presentaci&oacute;n";
 choices[17][3] = "Para escribir en HTML se necesita al menos un editor ASCII";
 answers[17] = choices[17][0];
 units[17] = "69";
 comments[17] = "Id Pregunta: 1496. NULL";


//  Id pregunta: 1592 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  En los lenguajes de marca, HTML y XML, las etiquetas finales se representan con la siguiente simbolog&iacute;a, donde TITLE es el texto que indica la etiqueta";
 choices[18]= new Array();
 choices[18][0] = "&lt;/TITLE&gt;";
 choices[18][1] = "&lt;TITLE&gt;";
 choices[18][2] = "/&lt;TITLE&gt;";
 choices[18][3] = "/TITLE";
 answers[18] = choices[18][0];
 units[18] = "69";
 comments[18] = "Id Pregunta: 1592. NULL";


//  Id pregunta: 1835 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  &iquest;Qu&eacute; es un DTD?";
 choices[19]= new Array();
 choices[19][0] = "Define la forma en que los documentos XML deben conectarse entre s&iacute;";
 choices[19][1] = "Descripci&oacute;n del formato en el que se desea que aparezcan las entidades definidas en un documento";
 choices[19][2] = "Definici&oacute;n de la gram&aacute;tica de un documento";
 choices[19][3] = "Permite controlar el formato de los documentos HTML con descripciones particulares";
 answers[19] = choices[19][2];
 units[19] = "69";
 comments[19] = "Id Pregunta: 1835. NULL";


//  Id pregunta: 1940 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  En referencia al lenguaje XML, &iquest;cu&aacute;l de las siguientes opciones es la correcta?";
 choices[20]= new Array();
 choices[20][0] = "Las hojas de estilo CSS no pueden ser utilizadas con HTML";
 choices[20][1] = "XSL puede usarse para transformar datos XML a documentos HTML/CSS en un servidor Web";
 choices[20][2] = "CSS puede ejecutar cualquier l&oacute;gica basada en los datos";
 choices[20][3] = "CSS y XSL no pueden usarse en paralelo";
 answers[20] = choices[20][1];
 units[20] = "69";
 comments[20] = "Id Pregunta: 1940. NULL";


//  Id pregunta: 1944 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Cuando se habla de SAX en el &aacute;mbito del lenguaje XML, se hace referencia a:";
 choices[21]= new Array();
 choices[21][0] = "Una API que define un modelo basado en eventos, y que trabaja invocando las respuestas de las interfaces a medida que van apareciendo estos eventos durante el proceso de an&aacute;lisis del documento";
 choices[21][1] = "Una API que proporciona una representaci&oacute;n de los documentos XML en forma de &aacute;rbol, permitiendo el recorrido y manipulaci&oacute;n de los datos";
 choices[21][2] = "Un lenguaje para establecer restricciones en los documentos XML";
 choices[21][3] = "Un mecanismo para invocaci&oacute;n remota de procedimientos (m&eacute;todos) utilizando XML como forma de comunicaci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "69";
 comments[21] = "Id Pregunta: 1944. NULL";


//  Id pregunta: 1945 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  Hay dos metalenguajes con los que definir los lenguajes que podemos obtener a partir de XML, &iquest;Cu&aacute;les son?";
 choices[22]= new Array();
 choices[22][0] = "DTD y XML Schema";
 choices[22][1] = "DTL y HTML";
 choices[22][2] = "HTML y API";
 choices[22][3] = "DTD y SGML";
 answers[22] = choices[22][0];
 units[22] = "69";
 comments[22] = "Id Pregunta: 1945. NULL";


//  Id pregunta: 1951 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  &iquest;Qu&eacute; es un &quot;Parser&quot; XML?";
 choices[23]= new Array();
 choices[23][0] = "Un m&oacute;dulo o programa que se ocupa de archivar en local los c&oacute;digos XML";
 choices[23][1] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n externa";
 choices[23][2] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n interna";
 choices[23][3] = "Un m&oacute;dulo o programa que se ocupa de archivar en la correspondiente Base de Datos los c&oacute;digos XML";
 answers[23] = choices[23][2];
 units[23] = "69";
 comments[23] = "Id Pregunta: 1951. NULL";


//  Id pregunta: 3350 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Cuando se emplean tablas en HTML, &iquest;cu&aacute;l es el comando que permite definir nuevas filas de una tabla?:";
 choices[24]= new Array();
 choices[24][0] = "&lt;TD&gt;&hellip;&lt;/TD&gt;";
 choices[24][1] = "&lt;TR&gt;&hellip;&lt;/TR&gt;";
 choices[24][2] = "&lt;TH&gt;&hellip;&lt;/TH&gt;";
 choices[24][3] = "&lt;TF&gt;&hellip;&lt;/TF&gt;";
 answers[24] = choices[24][1];
 units[24] = "69";
 comments[24] = "Id Pregunta: 3350. NULL";


//  Id pregunta: 3555 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En sistemas de informaci&oacute;n y comunicaciones, SOAP es acr&oacute;nimo de:";
 choices[25]= new Array();
 choices[25][0] = "Services Oriented Architecture Protocol";
 choices[25][1] = "Simple Object Access Protocol";
 choices[25][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[25][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[25] = choices[25][1];
 units[25] = "69";
 comments[25] = "Id Pregunta: 3555. NULL";


//  Id pregunta: 3653 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  UDDI: ";
 choices[26]= new Array();
 choices[26][0] = "Es una variante de alt&iacute;sima velocidad de la conocida FDDI";
 choices[26][1] = "Es una variante de FDDI adecuada para su desarrollo en LANs";
 choices[26][2] = "Significa User Definition Domain  Interface";
 choices[26][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[26] = choices[26][3];
 units[26] = "69";
 comments[26] = "Id Pregunta: 3653. NULL";


//  Id pregunta: 3964 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Registro basado en XML para listar servicios Web que se ponen a disposici&oacute;n de otros";
 choices[27]= new Array();
 choices[27][0] = " UDDI";
 choices[27][1] = "WSDL";
 choices[27][2] = " SOAP";
 choices[27][3] = " JAXP";
 answers[27] = choices[27][0];
 units[27] = "69";
 comments[27] = "Id Pregunta: 3964. NULL";


//  Id pregunta: 4130 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Los elementos XML de tipo y atributo deben tener una identidad &uacute;nica en el &aacute;mbito del";
 choices[28]= new Array();
 choices[28][0] = "servidor o sitio";
 choices[28][1] = "espacio de nombres ";
 choices[28][2] = "nombre de dominio";
 choices[28][3] = "nombre de dominio completamente cualificado (FQDM)";
 answers[28] = choices[28][1];
 units[28] = "69";
 comments[28] = "Id Pregunta: 4130. NULL";


//  Id pregunta: 4221 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Indique cu&aacute;l de las siguientes afirmaciones sobre los lenguajes RDF y OWL empleados en la web sem&aacute;ntica es cierta";
 choices[29]= new Array();
 choices[29][0] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML bien formado";
 choices[29][1] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML v&aacute;lido";
 choices[29][2] = "En OWL DL, una clase no puede ser instancia de otra clase";
 choices[29][3] = "OWL Full ofrece garant&iacute;as computacionales de completitud";
 answers[29] = choices[29][2];
 units[29] = "69";
 comments[29] = "Id Pregunta: 4221. NULL";


//  Id pregunta: 4245 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  &iquest;Para que sirve XPath (XML Path language)?";
 choices[30]= new Array();
 choices[30][0] = "Para identificar(y seleccionar)elementos de un documento XML.";
 choices[30][1] = "Para gestionar claves en XML";
 choices[30][2] = "Para hacer consultas en documentos XML";
 choices[30][3] = "Para definir documentos XML";
 answers[30] = choices[30][0];
 units[30] = "69";
 comments[30] = "Id Pregunta: 4245. NULL";


//  Id pregunta: 4366 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  La etiqueta en HTML para indicar el comienzo de una celda con datos en una tabla es:";
 choices[31]= new Array();
 choices[31][0] = "&lt;table&gt;";
 choices[31][1] = "&lt;tr&gt;";
 choices[31][2] = "&lt;th&gt;";
 choices[31][3] = "&lt;td&gt;";
 answers[31] = choices[31][3];
 units[31] = "69";
 comments[31] = "Id Pregunta: 4366. NULL";


//  Id pregunta: 4571 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  En HTML podemos referenciar una marca dentro de un documento con la directiva &lt;A&gt;, indicando el nombre de documento y el nombre de la marca, y separando ambos nombres con el car&aacute;cter:";
 choices[32]= new Array();
 choices[32][0] = "@";
 choices[32][1] = "$";
 choices[32][2] = "&amp;";
 choices[32][3] = "#";
 answers[32] = choices[32][3];
 units[32] = "69";
 comments[32] = "Id Pregunta: 4571. NULL";


//  Id pregunta: 4624 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  &iquest;En que lenguaje esta basado XML? ";
 choices[33]= new Array();
 choices[33][0] = "HTML";
 choices[33][1] = "XSL";
 choices[33][2] = "SGML";
 choices[33][3] = "XTML";
 answers[33] = choices[33][2];
 units[33] = "69";
 comments[33] = "Id Pregunta: 4624. ";


//  Id pregunta: 4701 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[34]= new Array();
 choices[34][0] = "Usando XSL";
 choices[34][1] = "Usando un DTD";
 choices[34][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[34][3] = "Usando XSLT";
 answers[34] = choices[34][1];
 units[34] = "69";
 comments[34] = "Id Pregunta: 4701. Examen 2006 JCYL";


//  Id pregunta: 4726 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Cual de las siguientes afirmaciones es correcta cuando hablamos de XML:";
 choices[35]= new Array();
 choices[35][0] = "Cocoon es un parser XML de c&oacute;digo abierto";
 choices[35][1] = "Los parsers XML sin validaci&oacute;n necesitan el dtd asociado al documento xml";
 choices[35][2] = "Xerces es un parser XML basado en java";
 choices[35][3] = "XSLT es un esquema para XML utilizado en lugar de los DTD";
 answers[35] = choices[35][2];
 units[35] = "69";
 comments[35] = "Id Pregunta: 4726. Examen 2006 JCYL";


//  Id pregunta: 4820 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al lenguaje XHTML (eXtensible Hypertext Markup Language ) NO escierta?";
 choices[36]= new Array();
 choices[36][0] = "Todos los elementos deben tener etiquetas de cierre y &eacute;stas deben estar correctamente anidadas";
 choices[36][1] = "Todos los documentos XHTML deben usar min&uacute;sculas para los elementos y nombres de atributo HTML";
 choices[36][2] = "Todos los valores de los atributos deben expresarse utilizando comillas excepto los valores num&eacute;ricos, encuyo caso pueden omitirse";
 choices[36][3] = "Los documentos XHTML pueden usar aplicaciones de tipo Script o Applet basadas en HTML-DOM(Document Object Model) o en XML-DOM";
 answers[36] = choices[36][2];
 units[36] = "69";
 comments[36] = "Id Pregunta: 4820. NULL";


//  Id pregunta: 4918 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  &iquest;Qu&eacute; afirmaci&oacute;n es incorrecta?:";
 choices[37]= new Array();
 choices[37][0] = "WSDL es un documento XML.";
 choices[37][1] = "XML es un est&aacute;ndar W3C.";
 choices[37][2] = "SOAP requiere de HTTP o SMTP como protocolos de transporte.";
 choices[37][3] = "Las PDAs pueden usar Servicios Web.";
 answers[37] = choices[37][2];
 units[37] = "69";
 comments[37] = "Id Pregunta: 4918. Examen TIC B 2007";


//  Id pregunta: 4923 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Los DTD (Document Type Definition) en tecnolog&iacute;a XML:";
 choices[38]= new Array();
 choices[38][0] = "Definen la estructura del documento XML.";
 choices[38][1] = "Sirven para dar formato a la informaci&oacute;n.";
 choices[38][2] = "Siempre han de estar incluidos en el XML.";
 choices[38][3] = "Contienen elementos y atributos.";
 answers[38] = choices[38][0];
 units[38] = "69";
 comments[38] = "Id Pregunta: 4923. Examen TIC B 2007";


//  Id pregunta: 5068 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a los XML Schemas es incorrecta?:";
 choices[39]= new Array();
 choices[39][0] = "Los XML Schemas utilizan sintaxis XML";
 choices[39][1] = "Es imposible referenciar m&uacute;ltiples XML Schemas desde el mismo documento XML";
 choices[39][2] = "Los XML Schemas soportan namespaces";
 choices[39][3] = "Los XML Schemas permiten definir tipos de datos";
 answers[39] = choices[39][1];
 units[39] = "69";
 comments[39] = "Id Pregunta: 5068. Examen TIC A 2007";


//  Id pregunta: 5075 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  El XML (Extensible Markup Language) ha sido desarrollado por el W3C. Indique cu&aacute;l de las siguientesafirmaciones es falsa:";
 choices[40]= new Array();
 choices[40][0] = "Proviene del SGML";
 choices[40][1] = "Pretende ser un est&aacute;ndar para el intercambio de informaci&oacute;n entre plataformas no circunscritoexclusivamente a Internet";
 choices[40][2] = "Dada su extensibilidad no se soporta en bases de datos sino que requiere formatos de texto plano";
 choices[40][3] = "No es un lenguaje propiamente dicho sino un metalenguaje creado para definir lenguages que cubrandiferentes necesidades";
 answers[40] = choices[40][2];
 units[40] = "69";
 comments[40] = "Id Pregunta: 5075. Examen TIC A 2007";


//  Id pregunta: 5077 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Cual de los siguientes es un est&aacute;ndar de W3C que permite referenciar partes de un documento XML?:";
 choices[41]= new Array();
 choices[41][0] = "XSL-FO";
 choices[41][1] = "Xpath";
 choices[41][2] = "XSLT";
 choices[41][3] = "Xforms";
 answers[41] = choices[41][1];
 units[41] = "69";
 comments[41] = "Id Pregunta: 5077. Examen TIC A 2007";


//  Id pregunta: 5442 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[42]= new Array();
 choices[42][0] = "Usando XSL";
 choices[42][1] = "Usando un DTD";
 choices[42][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[42][3] = "Usando XSLT";
 answers[42] = choices[42][1];
 units[42] = "69";
 comments[42] = "Id Pregunta: 5442. Castilla y Le&oacute;n";


//  Id pregunta: 5443 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes es la declaraci&oacute;n correcta de la versi&oacute;n de XML?";
 choices[43]= new Array();
 choices[43][0] = "&lt;xml version=&quot;1.0&quot; /&gt;";
 choices[43][1] = "&lt;?xml version=&quot;1.0&quot; /&gt;";
 choices[43][2] = "&lt;?xml version=&quot;1.0&quot;?&gt;";
 choices[43][3] = "&lt;?xml version=&quot;1.0&quot;?/&gt;";
 answers[43] = choices[43][2];
 units[43] = "69";
 comments[43] = "Id Pregunta: 5443. Castilla y Le&oacute;n";


//  Id pregunta: 5504 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Se&ntilde;ala la caracter&iacute;sitca incorrecta respecto a AJAX:";
 choices[44]= new Array();
 choices[44][0] = "Incorpora caracter&iacute;sticas propias de aplicaciones tipo push";
 choices[44][1] = "Requiere Flash para su ejecuci&oacute;n";
 choices[44][2] = "Se basa en JavaScript y XML";
 choices[44][3] = "Actualiza los datos de la interfaz de forma espontanea";
 answers[44] = choices[44][1];
 units[44] = "69";
 comments[44] = "Id Pregunta: 5504. NULL";


//  Id pregunta: 5505 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  C&uacute;al es la respuesta correcta respecto a XBRL (eXtensible Business Reporting Language)?:";
 choices[45]= new Array();
 choices[45][0] = "Es un lenguaje basado en XML";
 choices[45][1] = "Permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[45][2] = "Es posible establecer taxonom&iacute;as que clasifiquen los datos seg&uacute;n etiquetas definidas";
 choices[45][3] = "Todas son correctas";
 answers[45] = choices[45][3];
 units[45] = "69";
 comments[45] = "Id Pregunta: 5505. NULL";


//  Id pregunta: 5720 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  En an&aacute;lisis de XML, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[46]= new Array();
 choices[46][0] = "El modelo DOM procesa el documento XML completo y lo almacena en memoria";
 choices[46][1] = "En el modelo SAX puede procesar el documento XML a trav&eacute;s de eventos";
 choices[46][2] = "El modelo SAX procesa el documento XML y genera un &aacute;rbol";
 choices[46][3] = "El modelo DOM procesa el documento XML y lo modeliza en forma de &aacute;rbol";
 answers[46] = choices[46][2];
 units[46] = "69";
 comments[46] = "Id Pregunta: 5720. MAP 2008 A1";


//  Id pregunta: 5722 AÃ±o de creación de pregunta: 2009-01-01
 questions[47]= "48)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[47]= new Array();
 choices[47][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros.";
 choices[47][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee.";
 choices[47][2] = "Los datos van formados mediante etiquetas de lo que significan.";
 choices[47][3] = "Si las reglas sint&aacute;cticas del DTD se cumplen, el documento es v&aacute;lido.";
 answers[47] = choices[47][1];
 units[47] = "69";
 comments[47] = "Id Pregunta: 5722. MAP 2008 A2";


//  Id pregunta: 5723 AÃ±o de creación de pregunta: 2009-01-01
 questions[48]= "49)  Elija la opci&oacute;n correcta:";
 choices[48]= new Array();
 choices[48][0] = "Un documento XML v&aacute;lido es aqu&eacute;l que tiene una sintaxis XML v&aacute;lida.";
 choices[48][1] = "Un documento XML v&aacute;lido es aqu&eacute;l que cumple las reglas de un DTD.";
 choices[48][2] = "Un documento XML v&aacute;lido es aqu&eacute;l que est&aacute; bien formado y tambi&eacute;n cumple con las reglas de un DTD";
 choices[48][3] = "Un documento XML bien formado es aqu&eacute;l que cumple las reglas de un DTD";
 answers[48] = choices[48][2];
 units[48] = "69";
 comments[48] = "Id Pregunta: 5723. MAP 2008 A2";


//  Id pregunta: 5857 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  La Web 2.0 se refiere espec&iacute;ficamente a:";
 choices[49]= new Array();
 choices[49][0] = "Webs que generan informaci&oacute;n autom&aacute;ticamente a partir de bases de datos corporativas";
 choices[49][1] = "P&aacute;ginas implementadas con AJAX en las que s&oacute;lo existe un proveedor de contenidos";
 choices[49][2] = "Usar la inteligencia colectiva para proporcionar servicios interactivos en red dando al usuario el control de los datos";
 choices[49][3] = "Programas que procesan la avalancha de informaci&oacute;n existente en la Web";
 answers[49] = choices[49][2];
 units[49] = "69";
 comments[49] = "Id Pregunta: 5857. Pregunta 37";


//  Id pregunta: 5876 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  &iquest;Qu&eacute; es Atom?";
 choices[50]= new Array();
 choices[50][0] = "Sistema de an&aacute;lisis XML";
 choices[50][1] = "Tecnolog&iacute;a de sindicaci&oacute;n de contenidos";
 choices[50][2] = "Lenguaje que permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[50][3] = "Sintaxis de una DTD";
 answers[50] = choices[50][1];
 units[50] = "69";
 comments[50] = "Id Pregunta: 5876. MAP 2008 A1";


//  Id pregunta: 5983 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;En cu&aacute;l de los siguientes componentes de XML se define la estructura de los datos que va a contener un formulario XML?";
 choices[51]= new Array();
 choices[51][0] = "Manifiestos (XSF).";
 choices[51][1] = "Vistas (XLS).";
 choices[51][2] = "Esquemas (XSD).";
 choices[51][3] = "Datos (XML).";
 answers[51] = choices[51][2];
 units[51] = "69";
 comments[51] = "Id Pregunta: 5983. TIC A 2009";


//  Id pregunta: 6005 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  El est&aacute;ndar WSDL:";
 choices[52]= new Array();
 choices[52][0] = "Es el protocolo para efectuar llamadas a m&eacute;todos de objetos remotos mediante peticiones XML.";
 choices[52][1] = "Describe la interfaz de servicio";
 choices[52][2] = "Es el registro p&uacute;blico de servicios.";
 choices[52][3] = "Es el protocolo de transporte.";
 answers[52] = choices[52][1];
 units[52] = "69";
 comments[52] = "Id Pregunta: 6005. TIC A 2009";


//  Id pregunta: 6059 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Los servicios web son:";
 choices[53]= new Array();
 choices[53][0] = "Dependientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[53][1] = "Dependientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 choices[53][2] = "Independientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[53][3] = "Independientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 answers[53] = choices[53][3];
 units[53] = "51,69";
 comments[53] = "Id Pregunta: 6059. TIC A 2009";


//  Id pregunta: 6061 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  HTML est&aacute; estandarizado por:";
 choices[54]= new Array();
 choices[54][0] = "World Wide Web Consortium - W3C.";
 choices[54][1] = "Internet Engineering Task Force - IETF.";
 choices[54][2] = "Institute os Management Accountants - IMA.";
 choices[54][3] = "International Accounting Standard Board - IASB.";
 answers[54] = choices[54][0];
 units[54] = "69";
 comments[54] = "Id Pregunta: 6061. TIC A 2009";


//  Id pregunta: 6125 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El acr&oacute;nimo RSS responde a:";
 choices[55]= new Array();
 choices[55][0] = "Rich Site Summary.";
 choices[55][1] = "RDF Site Summary.";
 choices[55][2] = "Really Simple Syndication.";
 choices[55][3] = "Todos los anteriores.";
 answers[55] = choices[55][3];
 units[55] = "69";
 comments[55] = "Id Pregunta: 6125. TIC A 2009";


//  Id pregunta: 6177 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Indique la afirmaci&oacute;n falsa:";
 choices[56]= new Array();
 choices[56][0] = "HTTP es un protocolo sin estado.";
 choices[56][1] = "HTTP es un protocolo estandarizado por IETF.";
 choices[56][2] = "HTTP es un protocolo estandarizado por W3C.";
 choices[56][3] = "La especificaci&oacute;n del protocolo HTTP es la RFC 2616.";
 answers[56] = choices[56][2];
 units[56] = "69";
 comments[56] = "Id Pregunta: 6177. NULL";


//  Id pregunta: 6178 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Se&ntilde;ale la informaci&oacute;n falsa sobre AJAX:";
 choices[57]= new Array();
 choices[57][0] = "Las aplicaciones desarrolladas con AJAX usan Javascript y XML.";
 choices[57][1] = "Las aplicaciones desarrolladas con AJAX tienen una mejor experiencia de usuario.";
 choices[57][2] = "AJAX es la base de las Rich Internet Applications.";
 choices[57][3] = "Las aplicaciones AJAX son de tipo pull.";
 answers[57] = choices[57][3];
 units[57] = "69";
 comments[57] = "Id Pregunta: 6178. NULL";


//  Id pregunta: 6179 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Una ventaja del procesado de documentos XML usando SAX (frente a DOM) es:";
 choices[58]= new Array();
 choices[58][0] = "Es posible la modificaci&oacute;n de los datos en memoria.";
 choices[58][1] = "Procesa el documento completo.";
 choices[58][2] = "En el procesado de documentos grandes consume menos memoria.";
 choices[58][3] = "Todas las anteriores son ventajas de SAX frente a DOM.";
 answers[58] = choices[58][2];
 units[58] = "69";
 comments[58] = "Id Pregunta: 6179. NULL";


//  Id pregunta: 6180 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  RMI, DCOM, CORBA y RPC se consideran:";
 choices[59]= new Array();
 choices[59][0] = "Precursores de los Servicios Web.";
 choices[59][1] = "Formas de comunicar aplicaciones distribuidas.";
 choices[59][2] = "Formas de comunicar aplicaciones heterog&eacute;neas.";
 choices[59][3] = "Todas las anteriores son respuestas correctas.";
 answers[59] = choices[59][3];
 units[59] = "69";
 comments[59] = "Id Pregunta: 6180. NULL";


//  Id pregunta: 7172 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En un documento XML, la parte donde se definen los enlaces a otros documentos, a c&oacute;digo ejecutable, etc. Es:";
 choices[60]= new Array();
 choices[60][0] = "DTD";
 choices[60][1] = "XSL";
 choices[60][2] = "XLL";
 choices[60][3] = "DHTML";
 answers[60] = choices[60][2];
 units[60] = "69";
 comments[60] = "Id Pregunta: 7172. Examen TIC B 2009";


//  Id pregunta: 8171 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Respecto a AJAX. &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[61]= new Array();
 choices[61][0] = "En lo referente a &quot;cross-scripting&quot; (ejecuci&oacute;n de c&oacute;digo de diferente dominio), est&aacute; sujeto a la pol&iacute;tica &quot;same origin&quot; implementada en la sandbox del navegador.";
 choices[61][1] = "Realizar una petici&oacute;n v&iacute;a XMLHttpRequest (XHR) no modifica el historial del navegador.";
 choices[61][2] = "No ha sido estandarizado por una Recomendaci&oacute;n del World Wide Web Consortium (W3C).";
 choices[61][3] = "Su uso obliga a refrescar una parte de la p&aacute;gina del navegador.";
 answers[61] = choices[61][3];
 units[61] = "69";
 comments[61] = "Id Pregunta: 8171. Examen TIC A1 2010";


//  Id pregunta: 8199 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Comparando el m&eacute;todo HTTP GET con el m&eacute;todo HTTP POST, se cumple que: ";
 choices[62]= new Array();
 choices[62][0] = "S&oacute;lo HTTP GET est&aacute; definido como idempotente. ";
 choices[62][1] = "Ambos requieren declaraci&oacute;n expl&iacute;cita al usarlos en un tag HTML form. ";
 choices[62][2] = "S&oacute;lo HTTP POST puede soportar el env&iacute;o de varios par&aacute;metros en un form data set en una misma petici&oacute;n. ";
 choices[62][3] = "S&oacute;lo HTTP POST permite que el agente de usuario haga uso del mecanismo de conexiones persistentes del protocolo.";
 answers[62] = choices[62][0];
 units[62] = "69";
 comments[62] = "Id Pregunta: 8199. Examen TIC A1 2010";


//  Id pregunta: 8272 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Dentro del est&aacute;ndar del metalenguaje XML se&ntilde;ale la afirmaci&oacute;n INCORRECTA:";
 choices[63]= new Array();
 choices[63][0] = "Un DTD es un documento escrito en XML para definir el contenido y estructura de documentos XML.";
 choices[63][1] = "Los XML Schemas y los DTD permiten validar documentos XML.";
 choices[63][2] = "Los XML Schemas soportan herencia entre tipos de datos.";
 choices[63][3] = "Los DTD no est&aacute;n basados en el uso de &quot;namespaces&quot;.";
 answers[63] = choices[63][0];
 units[63] = "69";
 comments[63] = "Id Pregunta: 8272. Examen TIC A1 2010";


//  Id pregunta: 8465 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes NO es una etiqueta HTML?:";
 choices[64]= new Array();
 choices[64][0] = "&lt;em&gt;&lt;/em&gt;";
 choices[64][1] = "&lt;meta&gt;";
 choices[64][2] = "&lt;tc&gt;&lt;/tc&gt;";
 choices[64][3] = "&lt;body&gt;&lt;/body&gt;";
 answers[64] = choices[64][2];
 units[64] = "69";
 comments[64] = "Id Pregunta: 8465. Analista Ayto. Madrid 2010";


//  Id pregunta: 8505 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;C&oacute;mo se comenta una l&iacute;nea en XML (eXtensible Markup Language)? ";
 choices[65]= new Array();
 choices[65][0] = "/* Esto es un comentario */";
 choices[65][1] = "// Esto es un comentario ";
 choices[65][2] = "# Esto es un comentario";
 choices[65][3] = "&lt;!-- Esto es un comentario --&gt;";
 answers[65] = choices[65][3];
 units[65] = "69";
 comments[65] = "Id Pregunta: 8505. Examen TIC A2 2010";


//  Id pregunta: 8793 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l debe ser la parte local del elemento ra&iacute;z de un documento XHTML 2.0 de conformidad estricta?";
 choices[66]= new Array();
 choices[66][0] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;html&quot;.";
 choices[66][1] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xhtml&quot;. ";
 choices[66][2] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xml&quot;. ";
 choices[66][3] = "No puede existir una declaraci&oacute;n DOCTYPE.";
 answers[66] = choices[66][0];
 units[66] = "69";
 comments[66] = "Id Pregunta: 8793. Examen UPM A2 2011";


//  Id pregunta: 8794 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;En qu&eacute; est&aacute;ndar se define el lenguaje SGML?";
 choices[67]= new Array();
 choices[67][0] = "ISO 8879";
 choices[67][1] = "RFC 8879";
 choices[67][2] = "IEEE 8879";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = choices[67][0];
 units[67] = "69, 114";
 comments[67] = "Id Pregunta: 8794. Examen UPM A2 2011";


//  Id pregunta: 8857 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Si en fichero de estilos.css, se incluye: #inner { float: right; width: 130px; color: blue }, &iquest;c&oacute;mo se utilizar&iacute;a el estilo indicado en un p&aacute;rrafo de home.html?";
 choices[68]= new Array();
 choices[68][0] = "&lt;P style=&rdquo;inner&rdquo;&gt;";
 choices[68][1] = "&lt;P id=&rdquo;inner&rdquo;&gt;";
 choices[68][2] = "&lt;P class=&rdquo;inner&rdquo;&gt;";
 choices[68][3] = "&lt;P font=inner&gt;";
 answers[68] = choices[68][1];
 units[68] = "69";
 comments[68] = "Id Pregunta: 8857. Analista Ayto. Madrid 2010";


//  Id pregunta: 8861 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  El lenguaje Java Script:";
 choices[69]= new Array();
 choices[69][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[69][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[69][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[69][3] = "Solamente puede ser compilado si el servidor tiene instalada una m&aacute;quina virtual java (JVM)";
 answers[69] = choices[69][1];
 units[69] = "69";
 comments[69] = "Id Pregunta: 8861. Analista Ayto. Madrid 2010";


//  Id pregunta: 8864 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[70]= new Array();
 choices[70][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros";
 choices[70][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee";
 choices[70][2] = "Se puede modelar datos a cualquier nivel de complejidad";
 choices[70][3] = "El uso de los ficheros se puede extender a cualquier plataforma";
 answers[70] = choices[70][1];
 units[70] = "69";
 comments[70] = "Id Pregunta: 8864. Analista Ayto. Madrid 2010";


//  Id pregunta: 8900 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Se&ntilde;ale la respuesta correcta";
 choices[71]= new Array();
 choices[71][0] = "XML fue dise&ntilde;ado para transportar datos, no para mostrarlos";
 choices[71][1] = "Las etiquetas de XML son todas predefinidas";
 choices[71][2] = "XML es una recomendaci&oacute;n del UIT";
 choices[71][3] = "XML significa Extralarge Markup Language";
 answers[71] = choices[71][0];
 units[71] = "69";
 comments[71] = "Id Pregunta: 8900. NULL";


//  Id pregunta: 8915 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con XML:";
 choices[72]= new Array();
 choices[72][0] = "Es un lenguaje de programaci&oacute;n para aplicaciones basadas en Internet.";
 choices[72][1] = "Es un lenguaje de marcado que, al igual que HTML, hace uso de etiquetas (&ldquo;tags&rdquo;).";
 choices[72][2] = "Es un lenguaje independiente de plataforma cuyo objetivo es definir c&oacute;mo un navegador est&aacute;ndar debe presentar la informaci&oacute;n definida en HTML.";
 choices[72][3] = "Es un lenguaje definido por Microsoft para implementar su arquitectura orientada a servicios";
 answers[72] = choices[72][1];
 units[72] = "69";
 comments[72] = "Id Pregunta: 8915. Operador Ayto. Madrid 2010";


//  Id pregunta: 8922 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  En HTML, &iquest;con qu&eacute; etiqueta indicamos el comienzo de una columna con datos en una tabla?";
 choices[73]= new Array();
 choices[73][0] = "&lt;table&gt;";
 choices[73][1] = "&lt;td&gt;";
 choices[73][2] = "&lt;th&gt;";
 choices[73][3] = "&lt;column&gt;";
 answers[73] = choices[73][1];
 units[73] = "69";
 comments[73] = "Id Pregunta: 8922. Operador Ayto. Madrid 2010";


//  Id pregunta: 8985 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En el contexto de web services &iquest;Qu&eacute; quiere decir OASIS?";
 choices[74]= new Array();
 choices[74][0] = "Organization for the Advancement of Structured Information Services";
 choices[74][1] = "Organization for the Advancement of Service Integration Standards";
 choices[74][2] = "Organization for the Advancement of Structured Information Standards";
 choices[74][3] = "Organization for the Application of Structured Information Standards";
 answers[74] = choices[74][2];
 units[74] = "51, 69";
 comments[74] = "Id Pregunta: 8985. NULL";


//  Id pregunta: 9784 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  En un documento XML los valores de un atributo:";
 choices[75]= new Array();
 choices[75][0] = "Deben ir siempre entre comillas.";
 choices[75][1] = "Deben ir entre comillas si no son n&uacute;meros o fechas.";
 choices[75][2] = "No deben ir entre comillas.";
 choices[75][3] = "Deben ir entre comillas si son n&uacute;meros o fechas.";
 answers[75] = choices[75][0];
 units[75] = "69";
 comments[75] = "Id Pregunta: 9784. Examen TIC A2 2013";


//  Id pregunta: 9866 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  En relaci&oacute;n con lenguajes de marcado, indique cu&aacute;l de las siguientes afirmaciones es INCORRECTA";
 choices[76]= new Array();
 choices[76][0] = "XSLT es un lenguaje de marcado para las transformaciones de documentos XML.";
 choices[76][1] = "El XML describe el contenido de la informaci&oacute;n y la estructura, mientras que HTML est&aacute; orientado a la presentaci&oacute;n de la informaci&oacute;n.";
 choices[76][2] = "XPath permite buscar y seleccionar parte de un fichero XML sin utilizar su estructura.";
 choices[76][3] = "CSS permite dar formato tanto a ficheros HTML como a ficheros XML.";
 answers[76] = choices[76][2];
 units[76] = "69";
 comments[76] = "Id Pregunta: 9866. TIC A1, Examen 2013";


//  Id pregunta: 10000 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Las siglas &ldquo;SOAP&rdquo;, en el marco de los servicios web, corresponden a";
 choices[77]= new Array();
 choices[77][0] = "Service Oriented Architecture Protocol.";
 choices[77][1] = "Simple Oriented Access Paradigm.";
 choices[77][2] = "Service Object Architecture Paradigm.";
 choices[77][3] = "Simple Object Access Protocol.";
 answers[77] = choices[77][3];
 units[77] = "69";
 comments[77] = "Id Pregunta: 10000. ";


//  Id pregunta: 10004 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  XML y HTML5 se caracterizan porque ambos";
 choices[78]= new Array();
 choices[78][0] = "se apoyan en JavaScript.";
 choices[78][1] = "se basan en el protocolo HTTP.";
 choices[78][2] = "son lenguajes de marcado.";
 choices[78][3] = "son conformes a SOAP.";
 answers[78] = choices[78][2];
 units[78] = "69";
 comments[78] = "Id Pregunta: 10004. ";


//  Id pregunta: 10457 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[79]= new Array();
 choices[79][0] = "&lt;canvas&gt;";
 choices[79][1] = "&lt;applet&gt;";
 choices[79][2] = "&lt;keygen&gt;";
 choices[79][3] = "&lt;audio&gt;";
 answers[79] = choices[79][1];
 units[79] = "69";
 comments[79] = "Id Pregunta: 10457. NULL";


//  Id pregunta: 10458 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l no es una novedad de HTML 5? ";
 choices[80]= new Array();
 choices[80][0] = "Application Cache";
 choices[80][1] = "Elementos sem&aacute;nticos.";
 choices[80][2] = "Web workers";
 choices[80][3] = "Elementos de desarrollo para plataformas m&oacute;viles.";
 answers[80] = choices[80][3];
 units[80] = "69";
 comments[80] = "Id Pregunta: 10458. NULL";


//  Id pregunta: 10464 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; elemento de HTML 5 tiene como finalidad dibujar gr&aacute;ficos 2D on the fly mediante Javascript?";
 choices[81]= new Array();
 choices[81][0] = "&lt;svg&gt;";
 choices[81][1] = "&lt;canvas&gt;";
 choices[81][2] = "&lt;output&gt;";
 choices[81][3] = "&lt;source&gt;";
 answers[81] = choices[81][1];
 units[81] = "69";
 comments[81] = "Id Pregunta: 10464. NULL";


//  Id pregunta: 10465 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l no es una nueva caracter&iacute;stica de HTML5?";
 choices[82]= new Array();
 choices[82][0] = "Nuevos elementos sem&aacute;nticos.";
 choices[82][1] = "Fuerte soporte a gr&aacute;ficos con &lt;canvas&gt; y &lt;svg&gt;.";
 choices[82][2] = "Fuerte soporte multimedia.";
 choices[82][3] = "Nuevos elementos para soporte a la accesibilidad web.";
 answers[82] = choices[82][3];
 units[82] = "69";
 comments[82] = "Id Pregunta: 10465. NULL";


//  Id pregunta: 10466 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Qu&eacute; tecnolog&iacute;as agrupa HTML5?";
 choices[83]= new Array();
 choices[83][0] = "HTML+Javascript";
 choices[83][1] = "HTML+CSS3+Flash";
 choices[83][2] = "HTML+CSS3+Javascript";
 choices[83][3] = "HTML+CSS3";
 answers[83] = choices[83][2];
 units[83] = "69";
 comments[83] = "Id Pregunta: 10466. NULL";


//  Id pregunta: 10467 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es el DOCTYPE que se usa en HTML5?";
 choices[84]= new Array();
 choices[84][0] = "&lt;!DOCTYPE html&gt;";
 choices[84][1] = "&lt;!DOCTYPE html5&gt;";
 choices[84][2] = "&lt;!DOCTYPE&gt; y &lt;!DOCTYPE html5&gt;";
 choices[84][3] = "&lt;!DOCTYPE html&gt; y &lt;!DOCTYPE html5&gt;";
 answers[84] = choices[84][0];
 units[84] = "69";
 comments[84] = "Id Pregunta: 10467. NULL";


//  Id pregunta: 10468 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;les son los nuevos elementos de HTML5?";
 choices[85]= new Array();
 choices[85][0] = "header y footer.";
 choices[85][1] = "nav.";
 choices[85][2] = "sections y articles.";
 choices[85][3] = "Todas las anteriores.";
 answers[85] = choices[85][3];
 units[85] = "69";
 comments[85] = "Id Pregunta: 10468. NULL";


//  Id pregunta: 10501 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cual de las siguientes etiquetas fue introducida en HTML5?";
 choices[86]= new Array();
 choices[86][0] = "&lt;head&gt;";
 choices[86][1] = "&lt;video&gt;";
 choices[86][2] = "&lt;music&gt;";
 choices[86][3] = "&lt;background&gt;";
 answers[86] = choices[86][1];
 units[86] = "69";
 comments[86] = "Id Pregunta: 10501. http://es.wikipedia.org/wiki/HTML5";


//  Id pregunta: 10607 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Marque el lenguaje que est&aacute; basado en XML:";
 choices[87]= new Array();
 choices[87][0] = "XBRL";
 choices[87][1] = "SOAP";
 choices[87][2] = "UDDI";
 choices[87][3] = "XBGG";
 answers[87] = choices[87][0];
 units[87] = "69";
 comments[87] = "Id Pregunta: 10607. ";


//  Id pregunta: 10608 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  El formato de redifusi&oacute;n web Atom est&aacute; estandarizado en:";
 choices[88]= new Array();
 choices[88][0] = "IETF RFC 1738";
 choices[88][1] = "IETF RFC 1392";
 choices[88][2] = "IETF RFC 2616";
 choices[88][3] = "IETF RFC 4287";
 answers[88] = choices[88][3];
 units[88] = "69";
 comments[88] = "Id Pregunta: 10608. ";


//  Id pregunta: 10800 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Se&ntilde;ale qu&eacute; tecnolog&iacute;a XML sem&aacute;ntica puede ser usada para la interoperabilidad e intercambio de mensajes electr&oacute;nicos de negocio, mensajes B2B:";
 choices[89]= new Array();
 choices[89][0] = "ecXML";
 choices[89][1] = "ebXML";
 choices[89][2] = "WSDL";
 choices[89][3] = "Xerces";
 answers[89] = choices[89][1];
 units[89] = "69";
 comments[89] = "Id Pregunta: 10800. Examen GSI 2014";


//  Id pregunta: 10804 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes conjuntos est&aacute; integrado en su totalidad por etiquetas que han sido incorporadas como novedad en el lenguaje HTML5?";
 choices[90]= new Array();
 choices[90][0] = "&lt;header&gt;, &lt;article&gt; y &lt;bdi&gt;";
 choices[90][1] = "&lt;head&gt;, &lt;foot&gt; y &lt;nav&gt;";
 choices[90][2] = "&lt;canvas&gt;, &lt;img&gt; y &lt;audio&gt;";
 choices[90][3] = "&lt;video&gt;, &lt;canvas&gt; y &lt;bdo&gt;";
 answers[90] = choices[90][0];
 units[90] = "69";
 comments[90] = "Id Pregunta: 10804. Examen GSI 2014";


//  Id pregunta: 10809 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Indique la afirmaci&oacute;n FALSA respecto a VoiceXML:";
 choices[91]= new Array();
 choices[91][0] = "Es un lenguaje basado en XML.";
 choices[91][1] = "VoiceXML tiene como origen el Phone Markup Language (PML) de AT&amp;T.";
 choices[91][2] = "Es una recomendaci&oacute;n de la W3C.";
 choices[91][3] = "La &uacute;ltima versi&oacute;n es la VoiceXML 2.0.";
 answers[91] = choices[91][3];
 units[91] = "69";
 comments[91] = "Id Pregunta: 10809. Examen GSI 2014";


//  Id pregunta: 10855 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En cuanto a las especificaciones MTOM y XOP, &iquest;cu&aacute;l de las siguientes sentencias NO es correcta?";
 choices[92]= new Array();
 choices[92][0] = "XOP es un acr&oacute;nimo de XML-binary Optimized Packaging.";
 choices[92][1] = "MTOM/XOP son recomendaciones desarrolladas por la IETF.";
 choices[92][2] = "MTOM optimiza la transferencia de datos binarios sobre SOAP.";
 choices[92][3] = "MTOM normalmente usa XOP para serializar el mensaje que contiene datos binarios.";
 answers[92] = choices[92][1];
 units[92] = "69";
 comments[92] = "Id Pregunta: 10855. Examen GSI 2014";


//  Id pregunta: 10856 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  La herramienta que incluye JAXB para convertir un XML Schema a representaciones de clases Java se denomina:";
 choices[93]= new Array();
 choices[93][0] = "jconverter";
 choices[93][1] = "schemagen";
 choices[93][2] = "xjc";
 choices[93][3] = "jaxbws";
 answers[93] = choices[93][2];
 units[93] = "69";
 comments[93] = "Id Pregunta: 10856. Examen GSI 2014";


//  Id pregunta: 10998 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Respecto a HTML5, se&ntilde;ale la respuesta correcta:";
 choices[94]= new Array();
 choices[94][0] = "Su uso est&aacute; recomendado para el desarrollo web de los sitios de la Administraci&oacute;n General del Estado, siempre que no se incumpla la normativa de accesibilidad.";
 choices[94][1] = "En ning&uacute;n caso se recomienda el uso de HTML5 en el desarrollo web de los sitios de la Administraci&oacute;n General del Estado.";
 choices[94][2] = "Simplifica el desarrollo de sitios web porque elimina el uso de CSS (Cascading Style Sheets).";
 choices[94][3] = "No permite incluir v&iacute;deo de forma nativa, siendo necesario recurrir siempre a complementos (plugins) externos.";
 answers[94] = choices[94][0];
 units[94] = "69";
 comments[94] = "Id Pregunta: 10998. TIC A1 AGE 2014";


//  Id pregunta: 11047 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l es la &uacute;ltima versi&oacute;n de HTTP a fecha Octubre 2015?";
 choices[95]= new Array();
 choices[95][0] = "1.1";
 choices[95][1] = "2";
 choices[95][2] = "1.3";
 choices[95][3] = "3";
 answers[95] = choices[95][1];
 units[95] = "69";
 comments[95] = "Id Pregunta: 11047. ";


//  Id pregunta: 11048 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; RFC contiene la especificaci&oacute;n de HTTP/2?";
 choices[96]= new Array();
 choices[96][0] = "6660";
 choices[96][1] = "6978";
 choices[96][2] = "7540";
 choices[96][3] = "8880";
 answers[96] = choices[96][2];
 units[96] = "69";
 comments[96] = "Id Pregunta: 11048. ";


//  Id pregunta: 11623 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En HTML5, para representar la leyenda de una figura se hace uso de la etiqueta:";
 choices[97]= new Array();
 choices[97][0] = "&lt;figure&gt;";
 choices[97][1] = "&lt;figcaption&gt;";
 choices[97][2] = "&lt;footer&gt;";
 choices[97][3] = "&lt;figlegend&gt;";
 answers[97] = choices[97][1];
 units[97] = "69";
 comments[97] = "Id Pregunta: 11623. ";


//  Id pregunta: 11625 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  RSS son las siglas de:";
 choices[98]= new Array();
 choices[98][0] = "Really Simple Sindication";
 choices[98][1] = "Rich Simple Summary";
 choices[98][2] = "RDF Simple Summary";
 choices[98][3] = "Todas las anteriores son correctas";
 answers[98] = choices[98][0];
 units[98] = "69";
 comments[98] = "Id Pregunta: 11625. ";


//  Id pregunta: 11678 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  UDDI se corresponde con las siglas:";
 choices[99]= new Array();
 choices[99][0] = "Universal Description, Discovery and Integration";
 choices[99][1] = "Uniform Description, Discovery and Integration";
 choices[99][2] = "Universal Description, Discovery and Information";
 choices[99][3] = "Unic Description, Discovery and Information";
 answers[99] = choices[99][0];
 units[99] = "51, 69";
 comments[99] = "Id Pregunta: 11678. ";


