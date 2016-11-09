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

//  Id pregunta: 55 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;ntos niveles de adecuaci&oacute;n hay en WAI?";
 choices[0]= new Array();
 choices[0][0] = "3";
 choices[0][1] = "4";
 choices[0][2] = "5";
 choices[0][3] = "6";
 answers[0] = choices[0][0];
 units[0] = "39";
 comments[0] = "Id Pregunta: 55. ";


//  Id pregunta: 84 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; se establece en la Decisi&oacute;n del Consejo 93/465/CEE?:";
 choices[1]= new Array();
 choices[1][0] = "El desarrollo de la Directiva 87/95/EEC de armonizaci&oacute;n t&eacute;cnica de productos software en la Uni&oacute;n Europea";
 choices[1][1] = "La creaci&oacute;n de una serie de laboratorios de evaluaci&oacute;n de la conformidad de productos en el &aacute;mbito de la Uni&oacute;n Europea";
 choices[1][2] = "El planteamiento global en materia de evaluaci&oacute;n de conformidad y armonizaci&oacute;n t&eacute;cnica en la Uni&oacute;n Europea";
 choices[1][3] = "El r&eacute;gimen de colocaci&oacute;n del marcado &quot;CE&quot; de conformidad con la normativa comunitaria referente al dise&ntilde;o, fabricaci&oacute;n, comercializaci&oacute;n, puesta en servicio y utilizaci&oacute;n de los productos industriales";
 answers[1] = choices[1][3];
 units[1] = "42";
 comments[1] = "Id Pregunta: 84. ";


//  Id pregunta: 164 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  El sistema de informaci&oacute;n integrado en una organizaci&oacute;n debe tener unos objetivos. &iquest;Cu&aacute;l no ser&iacute;a exactamente uno de ellos?:";
 choices[2]= new Array();
 choices[2][0] = "Suministrar datos a los distintos niveles de la direcci&oacute;n";
 choices[2][1] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[2][2] = "Extraer ventajas competitivas de su entorno";
 choices[2][3] = "Ayudar a determinar los objetivos de la organizaci&oacute;n";
 answers[2] = choices[2][3];
 units[2] = "21";
 comments[2] = "Id Pregunta: 164. ";


//  Id pregunta: 255 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Entre los problemas que genera el actuar sobre las cosas (acting on) en lugar de actuar con las cosas (acting with) se encuentran:";
 choices[3]= new Array();
 choices[3][0] = "Necesidad de establecer relaciones entre s&iacute;mbolos y realidad";
 choices[3][1] = "Aislamiento emocional e intelectual del trabajador";
 choices[3][2] = "Las 2 anteriores";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = choices[3][2];
 units[3] = "24";
 comments[3] = "Id Pregunta: 255. ";


//  Id pregunta: 293 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La definici&oacute;n de organizaci&oacute;n como &quot;combinaci&oacute;n de medios humanos y materiales disponibles para la consecuci&oacute;n de un fin seg&uacute;n un esquema preciso de dependencias e interrelaciones&quot; es debida a: ";
 choices[4]= new Array();
 choices[4][0] = "Andrea Zerilli";
 choices[4][1] = "Stephen Robbins";
 choices[4][2] = "James Emery";
 choices[4][3] = "Robert Gibson";
 answers[4] = choices[4][0];
 units[4] = "22";
 comments[4] = "Id Pregunta: 293. ";


//  Id pregunta: 365 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Los criterios de Savage, Wald, Laplace, Hurwicz&hellip;, est&aacute;n relacionados con:";
 choices[5]= new Array();
 choices[5][0] = "Teor&iacute;as de medici&oacute;n del coste del HW y SW";
 choices[5][1] = "Teor&iacute;as de optimizaci&oacute;n de los recursos humanos";
 choices[5][2] = "Teor&iacute;as de la decisi&oacute;n ";
 choices[5][3] = "Teor&iacute;as de calidad del SW";
 answers[5] = choices[5][2];
 units[5] = "21";
 comments[5] = "Id Pregunta: 365. ";


//  Id pregunta: 402 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Respecto a la protecci&oacute;n jur&iacute;dica de los programas de ordenador, se puede asegurar que:";
 choices[6]= new Array();
 choices[6][0] = "La ley 22/87 de la Propiedad Intelectual incorpora al Derecho Espa&ntilde;ol la Directiva 91/250 de la CEE, sobre protecci&oacute;n jur&iacute;dica de los programas de ordenador";
 choices[6][1] = "Las ideas y principios en los que se basa un programa est&aacute;n protegidos mediante los derechos de autor";
 choices[6][2] = "La primera venta de una copia por el titular de los derechos agota el derecho de distribuci&oacute;n de dicha copia";
 choices[6][3] = "Todas las premisas anteriores son falsas";
 answers[6] = choices[6][2];
 units[6] = "36";
 comments[6] = "Id Pregunta: 402. ";


//  Id pregunta: 526 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  La propiedad de los datos recae normalmente en:";
 choices[7]= new Array();
 choices[7][0] = "Administrador de base de datos";
 choices[7][1] = "Analista de sistemas";
 choices[7][2] = "Operador";
 choices[7][3] = "Usuario final";
 answers[7] = choices[7][3];
 units[7] = "31, 32, 33";
 comments[7] = "Id Pregunta: 526. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 552 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  El presupuesto de un proyecto inform&aacute;tico nunca se calcula en base a:";
 choices[8]= new Array();
 choices[8][0] = "Aproximaciones lineales de proyectos diferentes";
 choices[8][1] = "Proyectos similares previos abordados por la organizaci&oacute;n";
 choices[8][2] = "Consultas a empresas significativas del mercado";
 choices[8][3] = "Costes separados de inversi&oacute;n en m&aacute;quinas, licencias de software y meses/hombre";
 answers[8] = choices[8][0];
 units[8] = "28";
 comments[8] = "Id Pregunta: 552. MAP-B 2003";


//  Id pregunta: 589 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de control de proyectos?";
 choices[9]= new Array();
 choices[9][0] = "Wrike.";
 choices[9][1] = "Microsoft Project.";
 choices[9][2] = "Openproj.";
 choices[9][3] = "Stradis.";
 answers[9] = choices[9][3];
 units[9] = "27";
 comments[9] = "Id Pregunta: 589. ";


//  Id pregunta: 623 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  Los m&eacute;todos especialmente adecuados para problemas de DMD en los que como resultado se busque o sea suficiente obtener un subconjunto de alternativas aceptables son:";
 choices[10]= new Array();
 choices[10][0] = "m&eacute;todos de concordancia";
 choices[10][1] = "m&eacute;todos de permutaci&oacute;n";
 choices[10][2] = "metodos lexicogr&aacute;ficos";
 choices[10][3] = "m&eacute;todos de la entrop&iacute;a";
 answers[10] = choices[10][0];
 units[10] = "34";
 comments[10] = "Id Pregunta: 623. ";


//  Id pregunta: 663 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments):";
 choices[11]= new Array();
 choices[11][0] = "X/OPEN";
 choices[11][1] = "ACE";
 choices[11][2] = "OSF";
 choices[11][3] = "IEEE";
 answers[11] = choices[11][3];
 units[11] = "40";
 comments[11] = "Id Pregunta: 663. ";


//  Id pregunta: 702 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  Cu&aacute;l de las siguientes l&iacute;neas ser&iacute;a v&aacute;lida en XHTML:";
 choices[12]= new Array();
 choices[12][0] = "&lt;br/&gt;&lt;hr&gt;&lt;/hr&gt;";
 choices[12][1] = "&lt;br/&gt;&lt;hr/&gt;";
 choices[12][2] = "&lt;hr&gt;&lt;/hr&gt;";
 choices[12][3] = "Todas son v&aacute;lidas";
 answers[12] = choices[12][3];
 units[12] = "69";
 comments[12] = "Id Pregunta: 702. Similar a examen TIC MAP A 2004. La C no ser&iacute;a v&aacute;lida en HTML 4.0";


//  Id pregunta: 768 AÃ±o de creación de pregunta: 2009-01-01
 questions[13]= "14)  En los servicios de directorio";
 choices[13]= new Array();
 choices[13][0] = "varias entradas pueden compartir un DN";
 choices[13][1] = "las operaciones de actualizaci&oacute;n de LDAP no son at&oacute;micas";
 choices[13][2] = "LDAP utiliza habitualmente la pila de protocolos TCP / IP";
 choices[13][3] = "LDAP no se describe en t&eacute;rminos de ASN.1";
 answers[13] = choices[13][2];
 units[13] = "73";
 comments[13] = "Id Pregunta: 768. RFC 4512 y RFC 4514 ";


//  Id pregunta: 1201 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  JDeveloper es:";
 choices[14]= new Array();
 choices[14][0] = "Un entorno de desarrollo integrado (IDE)";
 choices[14][1] = "Una base de datos";
 choices[14][2] = "Un gestor de contenidos";
 choices[14][3] = "Un gestor de informes";
 answers[14] = choices[14][0];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1201. NULL";


//  Id pregunta: 1506 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Los servicios que ofrece  el protocolo SET (Secure Electronico Transaction) son:";
 choices[15]= new Array();
 choices[15][0] = "Autenticaci&oacute;n, disponibilidad, integridad y gesti&oacute;n de pago";
 choices[15][1] = "Autenticaci&oacute;n, confidencialidad, integridad y gesti&oacute;n de pago";
 choices[15][2] = "Disponibilidad, confidencialidad, autenticaci&oacute;n y gesti&oacute;n de pago";
 choices[15][3] = "Autenticaci&oacute;n, integridad, disponibilidad y confidencialidad";
 answers[15] = choices[15][1];
 units[15] = "70";
 comments[15] = "Id Pregunta: 1506. NULL";


//  Id pregunta: 1659 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  En las bases de datos, &iquest;qu&eacute; tipo de redundancia debe tolerarse?";
 choices[16]= new Array();
 choices[16][0] = "L&oacute;gica";
 choices[16][1] = "M&uacute;ltiple";
 choices[16][2] = "Controlada";
 choices[16][3] = "Ninguna";
 answers[16] = choices[16][2];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1659. MAP-B 2003";


//  Id pregunta: 1780 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Se&ntilde;ale cual de estos entornos de desarrollo en Java no es gratuito";
 choices[17]= new Array();
 choices[17][0] = "Jdeveloper";
 choices[17][1] = "Eclipse";
 choices[17][2] = "JBuilder";
 choices[17][3] = "NetBeans";
 answers[17] = choices[17][2];
 units[17] = "60";
 comments[17] = "Id Pregunta: 1780. NULL";


//  Id pregunta: 1792 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Los agentes de software inteligentes pueden clasificarse en tres &aacute;reas de acuerdo a sus &aacute;reas de aplicaci&oacute;n. Indique qu&eacute; terna define dichas &aacute;reas:";
 choices[18]= new Array();
 choices[18][0] = "Agentes virtuales, de informaci&oacute;n y de heur&iacute;sticas";
 choices[18][1] = "Agentes de informaci&oacute;n, de interfaz y de heur&iacute;sticas";
 choices[18][2] = "Agentes de interfaz, de informaci&oacute;n, y virtuales";
 choices[18][3] = "Agentes virtuales, de interfaz y de heur&iacute;sticas";
 answers[18] = choices[18][2];
 units[18] = "63";
 comments[18] = "Id Pregunta: 1792. ";


//  Id pregunta: 1804 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Se&ntilde;ale la afirmaci&oacute;n que sea FALSA acerca de la educaci&oacute;n virtual (e-learning)";
 choices[19]= new Array();
 choices[19][0] = "La educaci&oacute;n virtual exige a los alumnos m&aacute;s esfuerzo en aprender las t&eacute;cnicas que en el contenido";
 choices[19][1] = "Lo realmente complejo en la educaci&oacute;n virtual es la instalaci&oacute;n de las herramientas necesarias";
 choices[19][2] = "La educaci&oacute;n virtual no rivaliza con la educaci&oacute;n presencial";
 choices[19][3] = "La educaci&oacute;n virtual permite la evaluaci&oacute;n de los alumnos de forma completamente fiable";
 answers[19] = choices[19][3];
 units[19] = "66";
 comments[19] = "Id Pregunta: 1804. ";


//  Id pregunta: 1845 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Indique la respuesta falsa en relaci&oacute;n al WfMC (Workflow Management Coalition):";
 choices[20]= new Array();
 choices[20][0] = "Organizaci&oacute;n destinada a establecer est&aacute;ndares relativos a la terminolog&iacute;a del software, su interoperabilidad y conectividad";
 choices[20][1] = "Organizaci&oacute;n creada por las principales empresas del sector para el facilitar la compatibilidad de sus herramientas";
 choices[20][2] = "Ha desarrollado el denominado Modelo de Referencia de Workflow";
 choices[20][3] = "Est&aacute; dividida en tres comit&eacute;s principales: el Comit&eacute; T&eacute;cnico, el Comit&eacute; de Relaciones Externas y el Comit&eacute; Directivo";
 answers[20] = choices[20][1];
 units[20] = "71";
 comments[20] = "Id Pregunta: 1845. ";


//  Id pregunta: 1867 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  En el protocolo LDAP:";
 choices[21]= new Array();
 choices[21][0] = "La operaci&oacute;n bind permite autenticar al cliente frente al  directorio";
 choices[21][1] = "SASL se a&ntilde;adi&oacute; en LDAP v3";
 choices[21][2] = "La operaci&oacute;n unbind cierra la conexi&oacute;n con el servidor LDAP";
 choices[21][3] = "Todas las anteriores";
 answers[21] = choices[21][3];
 units[21] = "74";
 comments[21] = "Id Pregunta: 1867. NULL";


//  Id pregunta: 2128 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al modelo EFQM?";
 choices[22]= new Array();
 choices[22][0] = "El modelo clasifica los 9 elementos en agentes y resultados";
 choices[22][1] = "La satisfacci&oacute;n del personal es uno de los agentes";
 choices[22][2] = "Los resultados econ&oacute;micos se encuentran entre los resultados";
 choices[22][3] = "La gesti&oacute;n de personal es uno de los agentes";
 answers[22] = choices[22][1];
 units[22] = "92";
 comments[22] = "Id Pregunta: 2128. NULL";


//  Id pregunta: 2371 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Es cierto decir que la &quot;reingenier&iacute;a&quot;:";
 choices[23]= new Array();
 choices[23][0] = "Suele usarse para ampliar la vida &uacute;til de un sistema.";
 choices[23][1] = "Es una ingenier&iacute;a inversa hecha con herramientas de asistencia computerizada.";
 choices[23][2] = "No tiene sentido si se hace usando tecnolog&iacute;a de objetos, que por definici&oacute;n son reutilizables.";
 choices[23][3] = "S&oacute;lo se usa cuando se encuentran fallos de funcionalidad.";
 answers[23] = choices[23][0];
 units[23] = "91";
 comments[23] = "Id Pregunta: 2371. ";


//  Id pregunta: 2455 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Los Diagramas de Flujo de Datos (DFD) son parte del dise&ntilde;o de sistemas, pero &iquest;de qu&eacute; fase?:";
 choices[24]= new Array();
 choices[24][0] = "Dise&ntilde;o de prototipos";
 choices[24][1] = "Tests finales";
 choices[24][2] = "An&aacute;lisis de requerimientos";
 choices[24][3] = "Ninguno de ellos";
 answers[24] = choices[24][2];
 units[24] = "81";
 comments[24] = "Id Pregunta: 2455. ";


//  Id pregunta: 2844 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  PDF se diferencia de Postscript en que";
 choices[25]= new Array();
 choices[25][0] = "PDF no es un lenguaje , es un formato de archivo";
 choices[25][1] = "No se diferencian; ambos son lenguajes y formatos de archivo";
 choices[25][2] = "Postscript es independiente de la plataforma";
 choices[25][3] = "Postscript permite modificaciones parciales (editabilidad)";
 answers[25] = choices[25][0];
 units[25] = "93";
 comments[25] = "Id Pregunta: 2844. NULL";


//  Id pregunta: 2869 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  Conjunto de planes, m&eacute;todos y herramientas dirigidas a modernizar, consolidar y coordinar las aplicaciones inform&aacute;ticas de una empresa";
 choices[26]= new Array();
 choices[26][0] = "EAI";
 choices[26][1] = "EDI";
 choices[26][2] = "Sistemas de Soporte a la Decisi&oacute;n";
 choices[26][3] = "ERP";
 answers[26] = choices[26][0];
 units[26] = "77";
 comments[26] = "Id Pregunta: 2869. ";


//  Id pregunta: 3200 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  El acceso b&aacute;sico en RDSI:";
 choices[27]= new Array();
 choices[27][0] = "Es utilizado exclusivamente por un &uacute;nico terminal";
 choices[27][1] = "Puede ser compartido hasta por un m&aacute;ximo de diecis&eacute;is terminales";
 choices[27][2] = "Puede ser compartido hasta por un m&aacute;ximo de ocho terminales";
 choices[27][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[27] = choices[27][2];
 units[27] = "103";
 comments[27] = "Id Pregunta: 3200. ";


//  Id pregunta: 3887 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;Qu&eacute; significa aplicaciones de tres niveles en la arquitectura Cliente/Servidor?";
 choices[28]= new Array();
 choices[28][0] = "La l&oacute;gica de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de datos se pueden distribuir entre los m&uacute;ltiples procesadores de la red.";
 choices[28][1] = "Los servicios de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y el acceso a datos se ejecutan en la estaci&oacute;n cliente mientras que la base de datos est&aacute; situada f&iacute;sicamente en el servidor.";
 choices[28][2] = "La gesti&oacute;n de datos, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de presentaci&oacute;n se encuentran en el servidor mientras que los servicios de presentaci&oacute;n se hallan en el cliente.";
 choices[28][3] = "En una arquitectura Cliente/Servidor no existen aplicaciones a tres niveles.";
 answers[28] = choices[28][0];
 units[28] = "113";
 comments[28] = "Id Pregunta: 3887. ";


//  Id pregunta: 4673 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  Una m&eacute;trica basada en la calidad del software utiliza como factores de calidad desde un punto de vistade explotaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Reusabilidad, Seguridad, Eficiencia, Correcci&oacute;n y Fiabilidad";
 choices[29][1] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[29][2] = "Usabilidad, Seguridad, Mantenibilidad, Correcci&oacute;n y Fiabilidad";
 choices[29][3] = "Usabilidad, Seguridad, Portabilidad, Correcci&oacute;n y Fiabilidad";
 answers[29] = choices[29][1];
 units[29] = "88";
 comments[29] = "Id Pregunta: 4673. Examen 2006 JCYL";


//  Id pregunta: 4883 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  Dentro de un sistema de cableado estructurado el denominado &quot;subsistema horizontal&quot; es aquel que:";
 choices[30]= new Array();
 choices[30][0] = "Interconecta las plantas del edificio y los cuadros de distribuci&oacute;n de cada planta";
 choices[30][1] = "Interconecta las rosetas con el cuadro de distribuci&oacute;n de planta";
 choices[30][2] = "Interconecta edificios en el entorno de un campus";
 choices[30][3] = "Interconecta a todo el cableado de un edificio";
 answers[30] = choices[30][1];
 units[30] = "99";
 comments[30] = "Id Pregunta: 4883. NULL";


//  Id pregunta: 5028 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  En una red donde se utilizan redes virtuales (802.1q), &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de las tramas etiquetadas quecirculan por la red?:";
 choices[31]= new Array();
 choices[31][0] = "1522 bytes";
 choices[31][1] = "1500 bytes";
 choices[31][2] = "1496 bytes";
 choices[31][3] = "1518 bytes";
 answers[31] = choices[31][0];
 units[31] = "100, 102";
 comments[31] = "Id Pregunta: 5028. Examen TIC A 2007";


//  Id pregunta: 5189 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de desarrollo de sistemas distribuidos basados en objetos no es una tecnolog&iacute;a Java de Sun Microsystems?";
 choices[32]= new Array();
 choices[32][0] = "RMI";
 choices[32][1] = "JINI";
 choices[32][2] = "EJB";
 choices[32][3] = "CORBA";
 answers[32] = choices[32][3];
 units[32] = "82";
 comments[32] = "Id Pregunta: 5189. ";


//  Id pregunta: 5457 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Diga cu&aacute;l de las siguientes afirmaciones es cierta";
 choices[33]= new Array();
 choices[33][0] = "En las WAN los retardos son altos, por la gran distancia que cubre";
 choices[33][1] = "Las WAN son las LAN inal&aacute;mbricas (Wireless).";
 choices[33][2] = "Las LAN, MAN y WAN son la misma cosa, solo cambia la distancia que abarcan";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][0];
 units[33] = "101";
 comments[33] = "Id Pregunta: 5457. Castilla y Le&oacute;n";


//  Id pregunta: 5788 AÃ±o de creación de pregunta: 2009-01-01
 questions[34]= "35)  En un radioenlace:";
 choices[34]= new Array();
 choices[34][0] = "El enlace descendente trabaja siempre a frecuencias superiores que el enlace descendente";
 choices[34][1] = "El enlace ascendente trabaja a frecuencias iguales o inferiores que el enlace descendente";
 choices[34][2] = "El enlace descendente trabaja, a veces, a frecuencias inferiores que el enlace descendente";
 choices[34][3] = "El enlace ascendente trabaja, a veces, a frecuencias iguales o superiores que el enlace descendente";
 answers[34] = choices[34][1];
 units[34] = "108";
 comments[34] = "Id Pregunta: 5788. ";


//  Id pregunta: 5842 AÃ±o de creación de pregunta: 2009-01-01
 questions[35]= "36)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[35]= new Array();
 choices[35][0] = "Es una red que interconecta las redes administrativas de los estados miembros y de las instituciones y agencias europeas";
 choices[35][1] = "Es un instrumento vertebrador e integrador que ofrece a las administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones";
 choices[35][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet";
 choices[35][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC";
 answers[35] = choices[35][2];
 units[35] = "30";
 comments[35] = "Id Pregunta: 5842. MAP 2008 A1";


//  Id pregunta: 5941 AÃ±o de creación de pregunta: 2009-01-01
 questions[36]= "37)  Respecto a la virtualizaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[36]= new Array();
 choices[36][0] = "La virtualizaci&oacute;n se utilizaba en el entorno de los mainframes antes de que se popularizara sobre arquitecturas como ix86 &oacute; amd64";
 choices[36][1] = "Una de las virtudes de la virtualizaci&oacute;n es su bajo requerimiento de memoria RAM";
 choices[36][2] = "El ahorro de energ&iacute;a es una de las razones que impulsa el uso de la virtualizaci&oacute;n en entornos de servidor";
 choices[36][3] = "Xen es una herramienta de virtualizaci&oacute;n de software libre que naci&oacute; en el departamento de computaci&oacute;n de la Universidad de Cambridge";
 answers[36] = choices[36][1];
 units[36] = "119";
 comments[36] = "Id Pregunta: 5941. ";


//  Id pregunta: 5944 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  El concepto de Web 2.0 agrupa 3 nociones fundamentales, &iquest;cu&aacute;l de las siguientes no es una de ellas?";
 choices[37]= new Array();
 choices[37][0] = "La posibilidad de participaci&oacute;n activa y de colaboraci&oacute;n de los usuarios en la producci&oacute;n de contenidos";
 choices[37][1] = "Las nuevas interfaces se acercan progresivamente a los est&aacute;ndares de cliente pesado";
 choices[37][2] = "Empleo de contenidos multimedia en las p&aacute;ginas web";
 choices[37][3] = "La capacidad de mezcla de diferentes servicios de distintos sitios en la mismap&aacute;gina.";
 answers[37] = choices[37][2];
 units[37] = "120";
 comments[37] = "Id Pregunta: 5944. ";


//  Id pregunta: 5963 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  Seg&uacute;n la Norma ISO 9000:2000, la expresi&oacute;n formal por la Direcci&oacute;n de las intenciones globales y orientaci&oacute;n de una organizaci&oacute;n relativas a la calidad, se denomina:";
 choices[38]= new Array();
 choices[38][0] = "Gesti&oacute;n de la calidad";
 choices[38][1] = "Norma de la calidad";
 choices[38][2] = "Pol&iacute;tica de la calidad";
 choices[38][3] = "Direcci&oacute;n de la calidad";
 answers[38] = choices[38][2];
 units[38] = "87";
 comments[38] = "Id Pregunta: 5963. Castilla La Mancha 2009";


//  Id pregunta: 6083 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  Respecto a SOA y los Servicios Web:";
 choices[39]= new Array();
 choices[39][0] = "Son el mismo concepto.";
 choices[39][1] = "Los Servicios Web son una de las tecnolog&iacute;as destacadas para llevar a la pr&aacute;ctica el paradigma conceptual SOA, pero no son la &uacute;nica.";
 choices[39][2] = "Los Servicios Web son la tecnolog&iacute;a para llevar a la pr&aacute;ctica el paradigma conceptual SOA aunque la arquitectura de desarrollo de los propios Servicios Web puede realizarse de diferentes formas.";
 choices[39][3] = "No existe ninguna relaci&oacute;n entre SOA y los Servicios Web.";
 answers[39] = choices[39][1];
 units[39] = "51";
 comments[39] = "Id Pregunta: 6083. NULL";


//  Id pregunta: 6092 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  En relaci&oacute;n con la gesti&oacute;n de la calidad, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[40]= new Array();
 choices[40][0] = "Actualmente existen 3 grandes modelos de calidad total: Deming, Malcom Baldrige y EFQM, de amplia aplicaci&oacute;n en Estados Unidos, Jap&oacute;n y Europa respectivamente.";
 choices[40][1] = "El modelo EFQM consta de 9 criterios, de los cuales 5 son agentes y 4 son resultados.";
 choices[40][2] = "Los agentes del modelo EFQM son los siguientes: liderazgo, personas, procesos, pol&iacute;tica y alianzas.";
 choices[40][3] = "Los agentes del modelo EFQM son los siguientes: liderazgo, personas, procesos, estrategia y recursos.";
 answers[40] = choices[40][1];
 units[40] = "92";
 comments[40] = "Id Pregunta: 6092. TIC A 2009";


//  Id pregunta: 6159 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  En cuanto a SFTP, se puede afirmar:";
 choices[41]= new Array();
 choices[41][0] = "Se obtiene al ejecutar FTP sobre SSH.";
 choices[41][1] = "Las siglas SFTP significan Simple File Transfer Protocol.";
 choices[41][2] = "El protocolo SFTP en s&iacute; no facilita la autenticaci&oacute;n y la seguridad, sino que espera que el protocolo subyacente asegure a este.";
 choices[41][3] = "Todas las respuestas anteriores son correctas.";
 answers[41] = choices[41][2];
 units[41] = "112";
 comments[41] = "Id Pregunta: 6159. ";


//  Id pregunta: 6174 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  Indique cual de entre los cuales NO es una funci&oacute;n del LMS:";
 choices[42]= new Array();
 choices[42][0] = "Seguimiento de la actividad del alumno.";
 choices[42][1] = "Publicaci&oacute;n de contenidos de formaci&oacute;n";
 choices[42][2] = "Comunicaci&oacute;n profesor-alumno.";
 choices[42][3] = "Matriculaci&oacute;n en cursos.";
 answers[42] = choices[42][1];
 units[42] = "66";
 comments[42] = "Id Pregunta: 6174. NULL";


//  Id pregunta: 6216 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es un tipo de ramas o m&oacute;dulos subordinados del an&aacute;lisis de transformaci&oacute;n?";
 choices[43]= new Array();
 choices[43][0] = "Aferentes";
 choices[43][1] = "de Transformaci&oacute;n";
 choices[43][2] = "Diferentes";
 choices[43][3] = "Eferentes";
 answers[43] = choices[43][2];
 units[43] = "81";
 comments[43] = "Id Pregunta: 6216. TICB-2009, bloque desarrollo";


//  Id pregunta: 6293 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Es una t&eacute;cnica de alto nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n:";
 choices[44]= new Array();
 choices[44][0] = "Brainstorming";
 choices[44][1] = "An&aacute;lisis de Mercado";
 choices[44][2] = "Factores Cr&iacute;ticos de &Eacute;xito";
 choices[44][3] = "Entrevistas";
 answers[44] = choices[44][2];
 units[44] = "78";
 comments[44] = "Id Pregunta: 6293. ";


//  Id pregunta: 6433 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Dada una empresa en la que se quiere almacenar informaci&oacute;n de sus empleados, departamentos y proyectos en los que colaboran sus empleados, las entidades que resultan son:";
 choices[45]= new Array();
 choices[45][0] = "empleados, departamentos y empresa";
 choices[45][1] = "empresa, proyectos, empleados y departamentos.";
 choices[45][2] = "empleados, proyectos y departamentos.";
 choices[45][3] = "empleados y departamentos.";
 answers[45] = choices[45][2];
 units[45] = "80";
 comments[45] = "Id Pregunta: 6433. NULL";


//  Id pregunta: 6464 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l es el proceso que recibe como entrada los resultados o productos del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n?";
 choices[46]= new Array();
 choices[46][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[46][1] = "Mantenimiento del Sistema de Informaci&oacute;n";
 choices[46][2] = "Estudio de Viabilidad del Sistema";
 choices[46][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[46] = choices[46][2];
 units[46] = "86";
 comments[46] = "Id Pregunta: 6464. Castilla La Mancha 2009";


//  Id pregunta: 6500 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Seg&uacute;n Eric Raymond, los dos modelos caracter&iacute;sticos de desarrollo del Software Libre se conocen como:";
 choices[47]= new Array();
 choices[47][0] = "Catedral y Torre";
 choices[47][1] = "Catedral y Bazar";
 choices[47][2] = "Bazar y Torre";
 choices[47][3] = "Torre y Lineal";
 answers[47] = choices[47][1];
 units[47] = "61";
 comments[47] = "Id Pregunta: 6500. ";


//  Id pregunta: 7249 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  En el protocolo MPLS, la cabecera de las etiquetas MPLS contienen los siguientes. Se&ntilde;ale la INCORRECTA";
 choices[48]= new Array();
 choices[48][0] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 choices[48][1] = "Tiempo de vida (8 bits)";
 choices[48][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[48][3] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 answers[48] = choices[48][3];
 units[48] = "100";
 comments[48] = "Id Pregunta: 7249. Examen TIC B 2009";


//  Id pregunta: 7289 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  La recomendaci&oacute;n de la UIT H.323";
 choices[49]= new Array();
 choices[49][0] = "Se utiliza &uacute;nicamente en redes RDSI";
 choices[49][1] = "Permite audioconferencia pero no videoconferencia";
 choices[49][2] = "Se le puede a&ntilde;adir seguridad seg&uacute;n la recomendaci&oacute;n de la UIT H.325";
 choices[49][3] = "Fue definida para redes de conmutaci&oacute;n de circuitos";
 answers[49] = choices[49][2];
 units[49] = "117";
 comments[49] = "Id Pregunta: 7289. Examen TIC B 2009";


//  Id pregunta: 7305 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  El est&aacute;ndar AURORA de la ETSI para reconocimiento del habla distribuido utiliza un vector de caracter&iacute;sticas de:";
 choices[50]= new Array();
 choices[50][0] = "12 componentes";
 choices[50][1] = "26 componentes";
 choices[50][2] = "38 componentes";
 choices[50][3] = "39 componentes";
 answers[50] = choices[50][3];
 units[50] = "94";
 comments[50] = "Id Pregunta: 7305. NULL";


//  Id pregunta: 7333 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  La International Telecommunication Union (ITU)  es el organismo especializado de la Organizaci&oacute;n de las Naciones Unidas encargado de regular las telecomunicaciones a nivel internacional entre las distintas administraciones y empresas operadoras. Se divide en varios sectores, el correspondiente a Telecomunicaciones se denomina:";
 choices[51]= new Array();
 choices[51][0] = "ITU-T";
 choices[51][1] = "ITU-R";
 choices[51][2] = "ITU-D";
 choices[51][3] = "ITU-C";
 answers[51] = choices[51][0];
 units[51] = "42";
 comments[51] = "Id Pregunta: 7333. NULL";


//  Id pregunta: 7350 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Alfresco es un software de c&oacute;digo abierto de:";
 choices[52]= new Array();
 choices[52][0] = "Gesti&oacute;n de contenido empresarial";
 choices[52][1] = "Dise&ntilde;o gr&aacute;fico";
 choices[52][2] = "Base de Datos";
 choices[52][3] = "Cuadro de Mando";
 answers[52] = choices[52][0];
 units[52] = "95";
 comments[52] = "Id Pregunta: 7350. NULL";


//  Id pregunta: 7770 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)   &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un sistema DRM?";
 choices[53]= new Array();
 choices[53][0] = " Impide la descarga de contenido protegido.";
 choices[53][1] = " Impide la copia de contenido protegido.";
 choices[53][2] = " Garantiza la no modificaci&oacute;n del contenido protegido.";
 choices[53][3] = " Garantiza el proceso de pago entre comprador y vendedor.";
 answers[53] = choices[53][0];
 units[53] = "37";
 comments[53] = "Id Pregunta: 7770. Map 2005";


//  Id pregunta: 8279 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes PDUs se a&ntilde;ade en SNMPv2 con respecto a las de SNMPv1?:";
 choices[54]= new Array();
 choices[54][0] = "Trap.";
 choices[54][1] = "GetResponse.";
 choices[54][2] = "GetBulkRequest.";
 choices[54][3] = "GetNextRequest.";
 answers[54] = choices[54][2];
 units[54] = "104";
 comments[54] = "Id Pregunta: 8279. Examen TIC A1 2010";


//  Id pregunta: 8325 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  En la radio digital (DAB):";
 choices[55]= new Array();
 choices[55][0] = "Los servicios pueden estructurarse y configurarse de forma din&aacute;mica";
 choices[55][1] = "El servicio ha sido dise&ntilde;ado para trabajar en frecuencias de 30 GHz a 3000 GHz";
 choices[55][2] = "La cobertura solo puede ser local";
 choices[55][3] = "Ninguna de las anteriores es correcta";
 answers[55] = choices[55][0];
 units[55] = "103";
 comments[55] = "Id Pregunta: 8325. Analista Ayto. Madrid 2010";


//  Id pregunta: 8347 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  Seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA 3, en la tarea &quot;Preparaci&oacute;n del Entorno de Construcci&oacute;n&quot; participan:";
 choices[56]= new Array();
 choices[56][0] = "Programadores, T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[56][1] = "T&eacute;cnicos de Sistemas, T&eacute;cnicos de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[56][2] = "Equipo del Proyecto, T&eacute;cnicos de Sistemas, Equipo de Operaci&oacute;n, Administradores de Bases de Datos.";
 choices[56][3] = "Programadores, Equipo de Arquitectura, Administradores de Bases de Datos.";
 answers[56] = choices[56][2];
 units[56] = "86";
 comments[56] = "Id Pregunta: 8347. Examen TIC A2 2010";


//  Id pregunta: 8413 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes lenguajes NO es un lenguaje que sigue el modelo de orientaci&oacute;n a objetos basados en clases? ";
 choices[57]= new Array();
 choices[57][0] = "JavaScript.";
 choices[57][1] = "Java.";
 choices[57][2] = "C++.";
 choices[57][3] = "Eiffel.";
 answers[57] = choices[57][0];
 units[57] = "82, 84";
 comments[57] = "Id Pregunta: 8413. Examen TIC A2 2010";


//  Id pregunta: 8526 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  En relaci&oacute;n con los mecanismos de seguridad en redes Wi-Fi, indique la afirmaci&oacute;n FALSA:";
 choices[58]= new Array();
 choices[58][0] = "Las especificaciones WEP y WPA usan RC4 como algoritmo de cifrado.";
 choices[58][1] = "La especificaci&oacute;n WPA2 mejora la segundad al usar AES como algoritmo de cifrado.";
 choices[58][2] = "En el est&aacute;ndar IEEE 802.11 i es donde se detalla la especificaci&oacute;n de WPA2.";
 choices[58][3] = "El est&aacute;ndar IEEE 802.11g incrementa la seguridad introduciendo 3DES como algoritmo de cifrado.";
 answers[58] = choices[58][3];
 units[58] = "107";
 comments[58] = "Id Pregunta: 8526. Examen TIC A2 2010 interna";


//  Id pregunta: 8601 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es un principio del Dise&ntilde;o Universal?";
 choices[59]= new Array();
 choices[59][0] = "Uso equiparable";
 choices[59][1] = "Uso flexible";
 choices[59][2] = "Que exija poco esfuerzo f&iacute;sico";
 choices[59][3] = "Robusto";
 answers[59] = choices[59][3];
 units[59] = "39";
 comments[59] = "Id Pregunta: 8601. Examen TIC A2 2010 interna";


//  Id pregunta: 8641 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  En la arquitectura ANSI SQL la capacidad do modificar el esquema interno sin tener que alterar el esquema conceptual (o los externos) es lo que se conoce como:";
 choices[60]= new Array();
 choices[60][0] = "Independencia f&iacute;sica.";
 choices[60][1] = "Independencia L&oacute;gica.";
 choices[60][2] = "Integridad de la entidad";
 choices[60][3] = "Integridad referencial.";
 answers[60] = choices[60][0];
 units[60] = "57, 58";
 comments[60] = "Id Pregunta: 8641. Examen TIC A2 2010 interna";


//  Id pregunta: 8673 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  El protocolo OCSP, se utiliza en:";
 choices[61]= new Array();
 choices[61][0] = "la validaci&oacute;n en tiempo real del certificado digital";
 choices[61][1] = "comprobaci&oacute;n de la validez de una trama";
 choices[61][2] = "la comunicaci&oacute;n entre sistemas abiertos";
 choices[61][3] = "la validaci&oacute;n de la direcci&oacute;n de origen de un equipo";
 answers[61] = choices[61][0];
 units[61] = "74";
 comments[61] = "Id Pregunta: 8673. Examen UPM A2 2011";


//  Id pregunta: 8764 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)   En la planificaci&oacute;n por prioridad circular o &quot;Round Robin&quot;:";
 choices[62]= new Array();
 choices[62][0] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de tiempo de ejecuci&oacute;n restante m&aacute;s corto";
 choices[62][1] = "De acuerdo a su prioridad, cada proceso preparado pasa a ejecuci&oacute;n durante una cota de tiempo llamada &quot;cuanto&quot;";
 choices[62][2] = "De forma secuencial, cada proceso preparado pasa a ejecuci&oacute;n durante un intervalo de tiempo llamada &quot;cuanto&quot;";
 choices[62][3] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de mayor prioridad asignada";
 answers[62] = choices[62][2];
 units[62] = "52";
 comments[62] = "Id Pregunta: 8764. Examen TIC A2 2010 interna";


//  Id pregunta: 8811 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[63]= new Array();
 choices[63][0] = "&lt;% y %&gt;";
 choices[63][1] = "&lt;SCRIPT LANGUAGE=&quot;ASPScript&quot;&gt; &lt;/SCRIPl&gt;";
 choices[63][2] = "&lt;!- --&gt;";
 choices[63][3] = "Los comandos ASP no se mezclan en el mismo archive que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[63] = choices[63][0];
 units[63] = "59, 115";
 comments[63] = "Id Pregunta: 8811. Examen UPM A2 2011";


//  Id pregunta: 8873 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  El desarrollo en Espiral es un modelo del ciclo de vida del software, que establece una serie de etapas por los que pasa el mismo, desde su concepci&oacute;n inicial hasta la finalizaci&oacute;n del producto. Se&ntilde;ale las etapas correctas";
 choices[64]= new Array();
 choices[64][0] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; y &ldquo;Desarrollo y Validaci&oacute;n&rdquo;";
 choices[64][1] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[64][2] = "&ldquo;Planificaci&oacute;n de actividades y recursos necesarios&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[64][3] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 answers[64] = choices[64][0];
 units[64] = "76";
 comments[64] = "Id Pregunta: 8873. Analista Ayto. Madrid 2010";


//  Id pregunta: 8887 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes no es tipo de primitiva?";
 choices[65]= new Array();
 choices[65][0] = "Received";
 choices[65][1] = "Indication";
 choices[65][2] = "Response";
 choices[65][3] = "Request";
 answers[65] = choices[65][0];
 units[65] = "100";
 comments[65] = "Id Pregunta: 8887. ";


//  Id pregunta: 8924 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Las siglas SSL y TLS se refieren a:";
 choices[66]= new Array();
 choices[66][0] = "Diferentes estados l&oacute;gicos del microprocesador.";
 choices[66][1] = "Protocolos criptogr&aacute;ficos para establecer conexiones seguras a trav&eacute;s de una red.";
 choices[66][2] = "Sistemas de localizaci&oacute;n geod&eacute;sica para GPS.";
 choices[66][3] = "Diferentes tipos de memoria f&iacute;sica";
 answers[66] = choices[66][1];
 units[66] = "111";
 comments[66] = "Id Pregunta: 8924. Operador Ayto. Madrid 2010";


//  Id pregunta: 8975 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Seg&uacute;n el R.D. 1720/2007, &ldquo;El afectado podr&aacute; revocar su consentimiento a trav&eacute;s de un medio sencillo, gratuito y que no implique...";
 choices[67]= new Array();
 choices[67][0] = "...gasto alguno para el afectado&rdquo;";
 choices[67][1] = "...esfuerzos desproporcionados para el afectado&rdquo;";
 choices[67][2] = "...ingreso alguno para el responsable del fichero o tratamiento&rdquo;";
 choices[67][3] = "...ning&uacute;n tipo de discriminaci&oacute;n&rdquo;";
 answers[67] = choices[67][2];
 units[67] = "29";
 comments[67] = "Id Pregunta: 8975. ";


//  Id pregunta: 9051 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Con respecto a las siguientes siglas:";
 choices[68]= new Array();
 choices[68][0] = "El IMEI es un identificador del dispositivo que se est&aacute; usando";
 choices[68][1] = "El msisdn es un n&uacute;mero &uacute;nico de identificaci&oacute;n de usario en la red.";
 choices[68][2] = "EL IMSI es el n&uacute;mero de identificaci&oacute;n de la tarjeta SIM";
 choices[68][3] = "Todas las anteriores";
 answers[68] = choices[68][3];
 units[68] = "108";
 comments[68] = "Id Pregunta: 9051. ";


//  Id pregunta: 9090 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  &iquest;Se pueden proteger las ideas que sirven de base a los programas de ordenador?";
 choices[69]= new Array();
 choices[69][0] = "S&oacute;lo las que sirvan de base para el desarrollo de interfaces";
 choices[69][1] = "S&oacute;lo las que sirvan de base para crear un nuevo programa";
 choices[69][2] = "S&oacute;lo las que sirvan de base para crear un nuevo programa y adem&aacute;s sean originales";
 choices[69][3] = "Todas las anteriores son falsas";
 answers[69] = choices[69][3];
 units[69] = "36";
 comments[69] = "Id Pregunta: 9090. ";


//  Id pregunta: 9139 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;Qu&eacute; suele incorporar un controlador de Entrada/Salida?";
 choices[70]= new Array();
 choices[70][0] = "Una UART";
 choices[70][1] = "El controlador de puerto paralelo";
 choices[70][2] = "Reloj de tiempo real";
 choices[70][3] = "Todas las anteriores";
 answers[70] = choices[70][3];
 units[70] = "47";
 comments[70] = "Id Pregunta: 9139. ";


//  Id pregunta: 9169 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Una empresa tiene una p&aacute;gina web con informaci&oacute;n sobre su actividad, productos, y servicios que vende, pero &eacute;stos no se pueden comprar a trav&eacute;s de su p&aacute;gina web. &iquest;Le afectan a la empresa las obligaciones establecidas en la Ley de Servicios de la Sociedad de la Informaci&oacute;n para los prestadores de servicios?";
 choices[71]= new Array();
 choices[71][0] = "S&iacute;, ya que se trata de una actividad con trascendencia econ&oacute;mica que se realiza por medios electr&oacute;nicos";
 choices[71][1] = "No, al no haber venta directa de productos por medios electr&oacute;nicos";
 choices[71][2] = "Si, cualquier servicio que se preste a trav&eacute;s de internet incurre en estas obligaciones";
 choices[71][3] = "No, la ley no establece obligaciones para los prestadores de servicios";
 answers[71] = choices[71][0];
 units[71] = "70";
 comments[71] = "Id Pregunta: 9169. Examen TIC A2 2011";


//  Id pregunta: 9211 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Con relaci&oacute;n al bucle arbitrado y red conmutada en las conexiones FC, es cierto que...";
 choices[72]= new Array();
 choices[72][0] = "mediante bucle arbitrado se pueden conectar hasta 50 dispositivos en un anillo en el que se comparte el ancho de banda entre todos ellos.";
 choices[72][1] = "La red conmutada utiliza switches para construir una NAS.";
 choices[72][2] = "En la red conmutada no se comparte el ancho de banda";
 choices[72][3] = "Bucle arbitrado y red conmutada no son formas v&aacute;lidas de conexi&oacute;n FC.";
 answers[72] = choices[72][2];
 units[72] = "48";
 comments[72] = "Id Pregunta: 9211. ";


//  Id pregunta: 9260 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  La arquitectura de proceso paralelo en la cual cada procesador tiene su propia memoria local y adem&aacute;s puede acceder a las memorias de otros procesadores se conoce como:";
 choices[73]= new Array();
 choices[73][0] = "SMP ";
 choices[73][1] = "Grid ";
 choices[73][2] = "NUMA ";
 choices[73][3] = "Cluster ";
 answers[73] = choices[73][2];
 units[73] = "45";
 comments[73] = "Id Pregunta: 9260. Examen TICA2-2011";


//  Id pregunta: 9273 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Indique la frase acertada sobre la gesti&oacute;n de procesos en los sistemas UNIX.";
 choices[74]= new Array();
 choices[74][0] = "El estado de un proceso en un sistema Unix se codifica usando 3 bits,";
 choices[74][1] = "El control de procesos en Unix permite la comunicaci&oacute;n s&iacute;ncrona entre procesos mediante paso de mensajes";
 choices[74][2] = "Los procesos &ldquo;daemon&rdquo; son procesos interactivos del usuario root.";
 choices[74][3] = "Los sistemas Unix permiten variar la prioridad de un proceso en tiempo de ejecuci&oacute;n pero no los permisos con que se ejecuta";
 answers[74] = choices[74][1];
 units[74] = "53";
 comments[74] = "Id Pregunta: 9273. Examen TIC-A1 2011";


//  Id pregunta: 9302 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  ISACA:";
 choices[75]= new Array();
 choices[75][0] = "Es la Information Security Audit and Control Association";
 choices[75][1] = "Posee una metodolog&iacute;a basada en COBIT, de cara a obtener los controles a aplicar durante la auditor&iacute;a y en CMMI, de cara a obtener un modelo de desarrollo sobre el que basarse para auditar el existente";
 choices[75][2] = "Posee una metodolog&iacute;a propia, que no se basa ni en COBIT ni en CMMI";
 choices[75][3] = "Ninguna de las anteriores";
 answers[75] = choices[75][3];
 units[75] = "33";
 comments[75] = "Id Pregunta: 9302. ";


//  Id pregunta: 9333 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Se&ntilde;ale la respuesta";
 choices[76]= new Array();
 choices[76][0] = "El subsistema vertical conecta el distribuidor de campus con los puntos de transicion (PT)";
 choices[76][1] = "El subsistema horizontal parte de los cuadros de distribucion de planta y llega a las rosetas de conexion.";
 choices[76][2] = "El subsistema horizontal conecta los puntos de transicion (PT) entre s&iacute;";
 choices[76][3] = "El cableado de campus comienza en los distribuidores de planta.";
 answers[76] = choices[76][1];
 units[76] = "99";
 comments[76] = "Id Pregunta: 9333. NULL";


//  Id pregunta: 9360 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de estas afirmaciones es cierta en relaci&oacute;n con las redes de &aacute;rea local?";
 choices[77]= new Array();
 choices[77][0] = "El subnivel LLC se encarga del control l&oacute;gico del enlace, por lo que gestiona el tipo de acceso al medio.";
 choices[77][1] = "El subnivel MAC controla el acceso al medio, creando una trama que se adapta a la topolog&iacute;a de la red f&iacute;sica.";
 choices[77][2] = "El subnivel MAC se encarga del control l&oacute;gico del enlace.";
 choices[77][3] = "El subnivel MAC es el responsable de las funciones de entramado, control de errores y control de flujo.";
 answers[77] = choices[77][1];
 units[77] = "101";
 comments[77] = "Id Pregunta: 9360. pag. 5 ASTIC 2011";


//  Id pregunta: 9404 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Indique los factores que m&aacute;s intervienen en la calidad de la voz sobre IP";
 choices[78]= new Array();
 choices[78][0] = "La latencia y la variaci&oacute;n de latencia (Jitter) de la red de transmisi&oacute;n de paquetes.";
 choices[78][1] = "La calidad de los procesadores de se&ntilde;al (DSP) asociados al codec G.711.";
 choices[78][2] = "La utilizaci&oacute;n de SIP o H.323.";
 choices[78][3] = "Ninguna de las anteriores";
 answers[78] = choices[78][0];
 units[78] = "109";
 comments[78] = "Id Pregunta: 9404. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9506 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  En el patr&oacute;n MVC:";
 choices[79]= new Array();
 choices[79][0] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[79][1] = "Modelo son los componentes que se encargan de la carga de datos, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[79][2] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz en el servidor y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[79][3] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control del personal que accede al servidor";
 answers[79] = choices[79][0];
 units[79] = "116";
 comments[79] = "Id Pregunta: 9506. NULL";


//  Id pregunta: 9587 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;A cu&aacute;l de los siguientes &aacute;mbitos establecidos en el art&iacute;culo 2 de la Ley 11/2007 NO aplica el Esquema Nacional de Seguridad (ENS)?:";
 choices[80]= new Array();
 choices[80][0] = "A la Administraci&oacute;n General del Estado, Administraciones de las Comunidades Aut&oacute;nomas y las Entidades que integran la Administraci&oacute;n Local, as&iacute; como las entidades de derecho p&uacute;blico vinculadas o dependientes de las mismas.";
 choices[80][1] = "A los ciudadanos en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[80][2] = "A las relaciones entre las distintas Administraciones P&uacute;blicas.";
 choices[80][3] = "Sistemas que tratan informaci&oacute;n clasificada regulada por Ley 9/1968 de 5 de abril. ";
 answers[80] = choices[80][3];
 units[80] = "43";
 comments[80] = "Id Pregunta: 9587. Examen TIC A2 2011";


//  Id pregunta: 9594 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[81]= new Array();
 choices[81][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir accedera los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[81][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir accedera los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[81][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[81][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[81] = choices[81][0];
 units[81] = "59";
 comments[81] = "Id Pregunta: 9594. Xunta Libre 2011";


//  Id pregunta: 9605 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Qu&eacute; base de datos usa un formato de almacenamiento XML?";
 choices[82]= new Array();
 choices[82][0] = "Oracle";
 choices[82][1] = "MongoDB";
 choices[82][2] = "eXist";
 choices[82][3] = "Redis";
 answers[82] = choices[82][2];
 units[82] = "58";
 comments[82] = "Id Pregunta: 9605. NULL";


//  Id pregunta: 9881 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Se dispone de dos centros de proceso de datos (CPDs) separados una distancia de 80 km entre s&iacute;. En ambos CPDs se dispone de cabinas de almacenamiento SAN (Storage Area Network) que conforman un cluster geogr&aacute;fico entre s&iacute;. &iquest;Qu&eacute; tecnolog&iacute;a utilizar&iacute;a para unir ambas cabinas?";
 choices[83]= new Array();
 choices[83][0] = "CWDM, Coarse Wavelength Division Multiplexing.";
 choices[83][1] = "DWDM, Dense Wavelength Division Multiplexing.";
 choices[83][2] = "EWDM, Enhanced Wavelength Division Multiplexing.";
 choices[83][3] = "FWDM, Far Wavelength Division Multiplexing.";
 answers[83] = choices[83][1];
 units[83] = "99, 102";
 comments[83] = "Id Pregunta: 9881. TIC A1, Examen 2013";


//  Id pregunta: 10004 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  XML y HTML5 se caracterizan porque ambos";
 choices[84]= new Array();
 choices[84][0] = "se apoyan en JavaScript.";
 choices[84][1] = "se basan en el protocolo HTTP.";
 choices[84][2] = "son lenguajes de marcado.";
 choices[84][3] = "son conformes a SOAP.";
 answers[84] = choices[84][2];
 units[84] = "69";
 comments[84] = "Id Pregunta: 10004. ";


//  Id pregunta: 10023 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Throwable es la superclase de todos los errores y excepciones de Java SE 7. &iquest;A qu&eacute; paquete de Java pertenece Throwable?";
 choices[85]= new Array();
 choices[85][0] = "java.lang";
 choices[85][1] = "java.error";
 choices[85][2] = "java.util";
 choices[85][3] = "Throwable no es una clase, es un interface, y &eacute;ste pertenece al paquete java.io.";
 answers[85] = choices[85][0];
 units[85] = "60";
 comments[85] = "Id Pregunta: 10023. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10028 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indique cu&aacute;l de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[86]= new Array();
 choices[86][0] = "Joost";
 choices[86][1] = "Netflix";
 choices[86][2] = "Cassandra ";
 choices[86][3] = "Hadoop";
 answers[86] = choices[86][3];
 units[86] = "116";
 comments[86] = "Id Pregunta: 10028. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10090 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Seg&uacute;n SCRUM, &iquest;se pueden modificar el sprintbacklog durante un sprint?";
 choices[87]= new Array();
 choices[87][0] = "No, nunca";
 choices[87][1] = "Solo el Product Owner";
 choices[87][2] = "Solo el Scrum Master";
 choices[87][3] = "Solo el Product Owner a petici&oacute;n de alg&uacute;n Stakeholder";
 answers[87] = choices[87][0];
 units[87] = "79";
 comments[87] = "Id Pregunta: 10090. NULL";


//  Id pregunta: 10200 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cual de las siguientes afirmaciones es correcta respecto al estandar IEEE 802.11ac?";
 choices[88]= new Array();
 choices[88][0] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[88][1] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (512 QAM)";
 choices[88][2] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[88][3] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 answers[88] = choices[88][3];
 units[88] = "107";
 comments[88] = "Id Pregunta: 10200. NULL";


//  Id pregunta: 10256 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  La comunicaci&oacute;n de datos de car&aacute;cter personal al Miniterio Fiscal";
 choices[89]= new Array();
 choices[89][0] = "Puede hacerse en cualquier caso, sin consentimiento del interesado";
 choices[89][1] = "Puede hacerse sin consentimiento del interesado cuando sea en el ejercicio de las competencias propias del Ministerio Fiscal";
 choices[89][2] = "Puede hacerse sin consentimiento del afectado s&oacute;lo en los casos especificados en el reglamento de desarrollo de la Ley";
 choices[89][3] = "No puede hacerse en ning&uacute;n caso sin consentimiento del interesado";
 answers[89] = choices[89][1];
 units[89] = "29";
 comments[89] = "Id Pregunta: 10256. Art&iacute;culo 11.2 d) de la Ley 15/1999";


//  Id pregunta: 10372 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Qu&eacute; es Kleopatra?";
 choices[90]= new Array();
 choices[90][0] = "El equivalente en Android al servicio Kerberos de Windows";
 choices[90][1] = "Una aplicaci&oacute;n de gesti&oacute;n criptogr&aacute;fica basada en GPG";
 choices[90][2] = "Un navegador del entorno KDE";
 choices[90][3] = "La &uacute;ltima versi&oacute;n de Debian";
 answers[90] = choices[90][1];
 units[90] = "72";
 comments[90] = "Id Pregunta: 10372. ";


//  Id pregunta: 10545 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Europa 2020...";
 choices[91]= new Array();
 choices[91][0] = "La estrategia Europa 2020 trata de lograr un crecimiento inteligente, a trav&eacute;s de inversiones m&aacute;s eficaces en educaci&oacute;n, investigaci&oacute;n e innovaci&oacute;n, sostenible, gracias al impulso decidido a una econom&iacute;a baja en carbono, e integrador, que ponga el acento en la creaci&oacute;n de empleo y la reducci&oacute;n de la pobreza.";
 choices[91][1] = "La estrategia se centra en cinco ambiciosos objetivos en las &aacute;reas de empleo, innovaci&oacute;n, educaci&oacute;n, reducci&oacute;n de la pobreza y cambio clim&aacute;tico / energ&iacute;a.";
 choices[91][2] = "A y B son correctas";
 choices[91][3] = "Todas son incorrectas";
 answers[91] = choices[91][2];
 units[91] = "30";
 comments[91] = "Id Pregunta: 10545. ";


//  Id pregunta: 10587 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Europa 2020 tiene como prioridades un crecimiento:";
 choices[92]= new Array();
 choices[92][0] = "Global, tecnol&oacute;gico y sostenible.";
 choices[92][1] = "Informado, sostenible y solidario.";
 choices[92][2] = "Inteligente, sostenible e integrador.";
 choices[92][3] = "Arm&oacute;nico, estable y social.";
 answers[92] = choices[92][2];
 units[92] = "30";
 comments[92] = "Id Pregunta: 10587. ";


//  Id pregunta: 10888 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  ICMP env&iacute;a mensajes en forma de datagramas que permiten al conjunto del protocolo TCP/IP realizar entre otras las siguientes funciones, se&ntilde;ale la FALSA:";
 choices[93]= new Array();
 choices[93][0] = "Control de flujo.";
 choices[93][1] = "Detecci&oacute;n de destinos inalcanzables.";
 choices[93][2] = "Encriptaci&oacute;n de paquetes.";
 choices[93][3] = "Pruebas de conectividad.";
 answers[93] = choices[93][2];
 units[93] = "100";
 comments[93] = "Id Pregunta: 10888. Examen GSI 2014";


//  Id pregunta: 11160 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;A qu&eacute; fase corresponde la Tarea &ldquo;Presentaci&oacute;n y aprobaci&oacute;n del Sistema de Informaci&oacute;n&rdquo; seg&uacute;n la metodolog&iacute;a de M&eacute;trica v3?";
 choices[94]= new Array();
 choices[94][0] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 choices[94][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[94][2] = "Aseguramiento de la Calidad";
 choices[94][3] = "Gesti&oacute;n de Proyectos";
 answers[94] = choices[94][1];
 units[94] = "86";
 comments[94] = "Id Pregunta: 11160. ";


//  Id pregunta: 11244 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En materia de contrataci&oacute;n, es competencia de la DTIC:";
 choices[95]= new Array();
 choices[95][0] = "El informe t&eacute;cnico facultativo de los convenios y encomiendas de gesti&oacute;n que tengan por objeto la adquisici&oacute;n de bienes y servicios inform&aacute;ticos, as&iacute; como de las memorias y pliegos de prescripciones t&eacute;cnicas de contrataciones de bienes y servicios inform&aacute;ticos.";
 choices[95][1] = "A) y para aquellos contratos de cuant&iacute;a de m&aacute;s de 1.000.000 euros, el resto los informa la correspondiente CMAD.";
 choices[95][2] = "El seguimiento de la ejecuci&oacute;n del gasto en materia de tecnolog&iacute;as de la informaci&oacute;n y comunicaciones.";
 choices[95][3] = "Estas competencias las llevar&aacute; a cabo la Divisi&oacute;n de Inversiones TIC dependiente de la Direcci&oacute;n General de Racionalizaci&oacute;n y Contrataci&oacute;n Centralizada.";
 answers[95] = choices[95][2];
 units[95] = "41";
 comments[95] = "Id Pregunta: 11244. ";


//  Id pregunta: 11362 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Indique qu&eacute; definiciones son correctas de acuerdo a ITIL v3 para Gesti&oacute;n de Incidencias y Gesti&oacute;n de Problemas: 1. Gesti&oacute;n de Incidencias: restaura el servicio lo antes posible, sin importar la soluci&oacute;n aplicada; 2. Gesti&oacute;n de Problemas: procura dar soluciones definitivas para evitar la recurrencia de incidencias.";
 choices[96]= new Array();
 choices[96][0] = "Solo 1";
 choices[96][1] = "Solo 2";
 choices[96][2] = "Ambas";
 choices[96][3] = "Ninguna";
 answers[96] = choices[96][2];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11362. ";


//  Id pregunta: 11383 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas es la lista correcta de las cuatro P's del dise&ntilde;o del servicio?";
 choices[97]= new Array();
 choices[97][0] = "Planificaci&oacute;n, productos, posici&oacute;n, procesos";
 choices[97][1] = "Planificaci&oacute;n, perspectiva, posici&oacute;n, personas";
 choices[97][2] = "Perspectiva, asociados (partners), problemas, personas";
 choices[97][3] = "Personas, asociados (partners), productos, procesos";
 answers[97] = choices[97][3];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11383. ";


//  Id pregunta: 11480 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n el art&iacute;culo 47 de la Ley 9/2014, NO es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicas:";
 choices[98]= new Array();
 choices[98][0] = "Derecho a continuidad del servicio.";
 choices[98][1] = "Derecho a acceder a los servicios de emergencia de forma gratuita.";
 choices[98][2] = "Derecho a la informaci&oacute;n, que deber&aacute; ser veraz, eficaz, suficiente, transparente, comparable sobre los servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico.";
 choices[98][3] = "Todos son derechos espec&iacute;ficos de los usuarios finales.";
 answers[98] = choices[98][1];
 units[98] = "110";
 comments[98] = "Id Pregunta: 11480. ";


//  Id pregunta: 11722 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; metodo de acceso es utilizado para establecer conexiones remotas de linea de comandos, manteniendo el ID de usuario, la contrase&ntilde;a y los contenidos de la sesi&oacute;n de manera privada?";
 choices[99]= new Array();
 choices[99][0] = "Telnet";
 choices[99][1] = "Consola";
 choices[99][2] = "Puerto auxiliar";
 choices[99][3] = "SSH";
 answers[99] = choices[99][3];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11722. NULL";


