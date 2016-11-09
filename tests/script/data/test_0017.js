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

//  Id pregunta: 79 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; red implementa la jerarqu&iacute;a absoluta?:";
 choices[0]= new Array();
 choices[0][0] = "En Y";
 choices[0][1] = "En cadena";
 choices[0][2] = "En c&iacute;rculo";
 choices[0][3] = "En rueda";
 answers[0] = choices[0][1];
 units[0] = "23";
 comments[0] = "Id Pregunta: 79. NULL";


//  Id pregunta: 155 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El objetivo fundamental de un sistema de informaci&oacute;n para la alta direcci&oacute;n de una organizaci&oacute;n debe ser:";
 choices[1]= new Array();
 choices[1][0] = "Conseguir que los directivos de la misma logren acceder a toda la informaci&oacute;n contenida en las bases de datos de la organizaci&oacute;n";
 choices[1][1] = "Poner a disposici&oacute;n de los directivos herramientas de investigaci&oacute;n operativa que permitan simular problemas relacionados con el sector a que pertenezca la empresa a partir de datos obtenidos de otras empresas";
 choices[1][2] = "Lograr un subproducto del sistema de informaci&oacute;n corporativo e integrado con &eacute;ste, susceptible de ser tratado con herramientas de simulaci&oacute;n";
 choices[1][3] = "Elaborar los procesos batch necesarios que cubran el nivel de informaci&oacute;n desagregada fijado por la direcci&oacute;n";
 answers[1] = choices[1][2];
 units[1] = "21";
 comments[1] = "Id Pregunta: 155. ";


//  Id pregunta: 507 AÃ±o de creación de pregunta: 2003-01-01
 questions[2]= "3)  La directiva 91/250/CEE modificada por la 93/98/CEE, del Consejo relativa a la protecci&oacute;n jur&iacute;dica de los progarmas de ordenador";
 choices[2]= new Array();
 choices[2][0] = "excluye expl&iacute;citamente aquellos desarrollos sobre plataformas LINUX, shareware o software libre";
 choices[2][1] = "establece que los programas deber&aacute;n protegerse de la misma manera que las obras literarias, con arreglo a lo establecido en el convenio de Berna sobre proetcci&oacute;n de obras literarias y art&iacute;sticas";
 choices[2][2] = "regula aquellos aspectos del comercio elctr&oacute;nico relacionados con la materia de propiedad intelectual";
 choices[2][3] = "crea un nuevo t&iacute;tulo unitario de proiedad industrial 'patente comunitaria' para eliminar las distorsiones del mercado interior y permitir que Europa se aproveche al m&aacute;ximo de sus trabajos de investigaci&oacute;n";
 answers[2] = choices[2][1];
 units[2] = "36";
 comments[2] = "Id Pregunta: 507. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 530 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Un auditor inform&aacute;tico deber&aacute; verificar:";
 choices[3]= new Array();
 choices[3][0] = "Cumplimiento de objetivos de la organizaci&oacute;n";
 choices[3][1] = "Adecuaci&oacute;n de procedimientos de control";
 choices[3][2] = "Uso de metodolog&iacute;as seg&uacute;n est&aacute;ndares de la organizaci&oacute;n";
 choices[3][3] = "Todas";
 answers[3] = choices[3][3];
 units[3] = "31, 32, 33";
 comments[3] = "Id Pregunta: 530. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 567 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  En el modelo de Anthony de pir&aacute;mide de niveles directivos, en el nivel estrat&eacute;gico. &iquest;Qu&eacute; grado de utilizaci&oacute;n debe tener la informaci&oacute;n interna de la organizaci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "Alto. Este tipo de informaci&oacute;n ayudar&aacute; a planificar la estrategia a largo plazo";
 choices[4][1] = "Bajo. Este tipo de informaci&oacute;n deber&iacute;a ser procesado en el nivel medio de la pir&aacute;mide";
 choices[4][2] = "Muy alto. Esta informaci&oacute;n es imprescindible para planificar la estrategia a largo plazo";
 choices[4][3] = "Medio. En funci&oacute;n del tipo de organizaci&oacute;n";
 answers[4] = choices[4][1];
 units[4] = "22";
 comments[4] = "Id Pregunta: 567. ";


//  Id pregunta: 946 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Cada vez que un ciudadano utilice su tarjeta criptogr&aacute;fica CERES para firmar documentos que debe entregar a la Administraci&oacute;n, se&ntilde;ale qu&eacute; utilizaci&oacute;n estar&aacute; haciendo de las claves de cifrado:";
 choices[5]= new Array();
 choices[5][0] = "Cifrar&aacute; con su clave p&uacute;blica";
 choices[5][1] = "Cifrar&aacute; con la clave p&uacute;blica de la Administraci&oacute;n";
 choices[5][2] = "Cifrara con el certificado ra&iacute;z de la FNMT";
 choices[5][3] = "Cifrar&aacute; con su clave privada";
 answers[5] = choices[5][3];
 units[5] = "74";
 comments[5] = "Id Pregunta: 946. NULL";


//  Id pregunta: 1101 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En Java, cuando un programa deja de utilizar un objeto:";
 choices[6]= new Array();
 choices[6][0] = "El &quot;garbage collector&quot; lo elimina inmediatamente de la memoria";
 choices[6][1] = "Es necesario codificar la destrucci&oacute;n del objeto";
 choices[6][2] = "El objeto se destruye a s&iacute; mismo";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = choices[6][3];
 units[6] = "60";
 comments[6] = "Id Pregunta: 1101. JCED - Preparatic XVII. El obj puede eliminarse cuando no hay referencias a &eacute;l.";


//  Id pregunta: 1437 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; es MIDI?:";
 choices[7]= new Array();
 choices[7][0] = "Un formato de codificaci&oacute;n de im&aacute;genes digitales";
 choices[7][1] = "Conjunto de especificaciones y tecnolog&iacute;as que proponen normas para el ensamblaje de la arquitectura de ordenadores";
 choices[7][2] = "Un protocolo para codificar instrucciones para que un sintetizador genere notas musicales";
 choices[7][3] = "Servicio de transferencia autom&aacute;tica de textos entre memorias de dos terminales";
 answers[7] = choices[7][2];
 units[7] = "47";
 comments[7] = "Id Pregunta: 1437. ";


//  Id pregunta: 1750 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  qu&eacute; es JDBC";
 choices[8]= new Array();
 choices[8][0] = "un modelo de objetos ActiveX";
 choices[8][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C";
 choices[8][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[8][3] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[8] = choices[8][3];
 units[8] = "58";
 comments[8] = "Id Pregunta: 1750. ";


//  Id pregunta: 2000 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  En Orientaci&oacute;n a Objetos, &iquest;c&oacute;mo se denomina el concepto por el que el an&aacute;lisis se centra en los aspectos esenciales e inherentes de una entidad, ignorarando sus propiedades accidentales?";
 choices[9]= new Array();
 choices[9][0] = "Abstracci&oacute;n";
 choices[9][1] = "Encapsulaci&oacute;n";
 choices[9][2] = "Persistencia";
 choices[9][3] = "Polimorfismo";
 answers[9] = choices[9][0];
 units[9] = "82";
 comments[9] = "Id Pregunta: 2000. Similar a examen TIC SS A 2003";


//  Id pregunta: 2152 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes no es un elemento del modelo EFQM?";
 choices[10]= new Array();
 choices[10][0] = "Impacto en la sociedad";
 choices[10][1] = "Control del dise&ntilde;o";
 choices[10][2] = "Satisfacci&oacute;n del cliente";
 choices[10][3] = "Recursos";
 answers[10] = choices[10][1];
 units[10] = "92";
 comments[10] = "Id Pregunta: 2152. NULL";


//  Id pregunta: 2224 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Seg&uacute;n McCall, a la extensi&oacute;n por la cual un programa ejecuta la funci&oacute;n buscada con la precisi&oacute;n requerida se llama:";
 choices[11]= new Array();
 choices[11][0] = "Correcci&oacute;n";
 choices[11][1] = "Fiabilidad";
 choices[11][2] = "Eficiencia";
 choices[11][3] = "Integridad";
 answers[11] = choices[11][1];
 units[11] = "88";
 comments[11] = "Id Pregunta: 2224. ";


//  Id pregunta: 2345 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En programaci&oacute;n orientada a objetos:";
 choices[12]= new Array();
 choices[12][0] = "Los objetos son m&oacute;dulos que contienen s&oacute;lo datos, de cualquier tipo";
 choices[12][1] = "Los objetos son m&oacute;dulos que contienen los datos y las instrucciones u operaciones que manipulan esos datos";
 choices[12][2] = "Los objetos pueden ser tratados como cualquier otro dato mediante un lenguaje procedural";
 choices[12][3] = "No existe una concepci&oacute;n din&aacute;mica del objeto como una entidad que exista en tiempo de ejecuci&oacute;n";
 answers[12] = choices[12][1];
 units[12] = "82";
 comments[12] = "Id Pregunta: 2345. ";


//  Id pregunta: 3305 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre la Terminaci&oacute;n de Red de tipo 2 y la Terminaci&oacute;n de Red de tipo 1 (punto de interfaz entre la instalaci&oacute;n de la compa&ntilde;&iacute;a telef&oacute;nica y la instalaci&oacute;n de usuario)?:";
 choices[13]= new Array();
 choices[13][0] = "R";
 choices[13][1] = "S";
 choices[13][2] = "T";
 choices[13][3] = "U";
 answers[13] = choices[13][2];
 units[13] = "103";
 comments[13] = "Id Pregunta: 3305. ";


//  Id pregunta: 3383 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El MIB est&aacute;ndar o MIB-I se complet&oacute; con:";
 choices[14]= new Array();
 choices[14][0] = "MIB-2";
 choices[14][1] = "MIB-II";
 choices[14][2] = "Con la RFC 1213";
 choices[14][3] = "La 'b' y la 'c' son correctas";
 answers[14] = choices[14][3];
 units[14] = "104";
 comments[14] = "Id Pregunta: 3383. ";


//  Id pregunta: 4072 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;Qu&eacute; gestiona un CRM?";
 choices[15]= new Array();
 choices[15][0] = "Las relaciones con los clientes";
 choices[15][1] = "Las relaciones con los Empleados";
 choices[15][2] = "Las relaciones con clientes y empleados";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][0];
 units[15] = "65";
 comments[15] = "Id Pregunta: 4072. ";


//  Id pregunta: 4081 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Un proxy o apoderado permite";
 choices[16]= new Array();
 choices[16][0] = "realizar funciones de repetidor, ocultando la m&aacute;quina solicitante";
 choices[16][1] = "disponer de una memoria temporal para almacenar las p&aacute;ginas web m&aacute;s visitadas";
 choices[16][2] = "traducir las direcciones internas a externas y viceversa";
 choices[16][3] = "Todas  las respuestas son correctas";
 answers[16] = choices[16][3];
 units[16] = "113";
 comments[16] = "Id Pregunta: 4081. ";


//  Id pregunta: 4141 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  El modo promiscuo se utiliza para";
 choices[17]= new Array();
 choices[17][0] = "Comunicarse con todos los ordenadores de una red";
 choices[17][1] = "Abrir un canal IRC (chat) a todos los usuarios conectados";
 choices[17][2] = "Habilitar redes TCP multicast";
 choices[17][3] = "Acceder a todos los paquetes del segmento de red";
 answers[17] = choices[17][3];
 units[17] = "102";
 comments[17] = "Id Pregunta: 4141. ";


//  Id pregunta: 4322 AÃ±o de creación de pregunta: 2007-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre PostScript y el formato PDF no es correcta?";
 choices[18]= new Array();
 choices[18][0] = "PostScript es un lenguaje de programaci&oacute;n, y PDF no";
 choices[18][1] = "Tanto PostScript como PDF comparten el mismo Modelo de Imagen, describiendo las p&aacute;ginas mediante los mismos mecanismos";
 choices[18][2] = "Tanto en PostScript como en PDF es posible definir bucles.";
 choices[18][3] = "PostScript es interpretado y ejecutado. PDF es interpretado, pero no ejecutado en sentido estricto.";
 answers[18] = choices[18][2];
 units[18] = "40";
 comments[18] = "Id Pregunta: 4322. ";


//  Id pregunta: 4427 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  La firma digital de un mensaje o documento, garantiza:";
 choices[19]= new Array();
 choices[19][0] = "La autenticaci&oacute;n del emisor e integridad del mensaje.";
 choices[19][1] = "La autenticaci&oacute;n del emisor y confidencialidad del env&iacute;o.";
 choices[19][2] = "Autenticaci&oacute;n, confidencialidad e integridad.";
 choices[19][3] = "Confidencialidad del env&iacute;o e integridad del mensaje.";
 answers[19] = choices[19][0];
 units[19] = "74";
 comments[19] = "Id Pregunta: 4427. NULL";


//  Id pregunta: 4578 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[20]= new Array();
 choices[20][0] = "La ingenier&iacute;a inversa es el proceso de codificar los programas m&aacute;s eficientemente.";
 choices[20][1] = "La reingenier&iacute;a del software incluye el an&aacute;lisis de inventario.";
 choices[20][2] = "La ingenier&iacute;a inversa s&oacute;lo es aplicable al software estructurado.";
 choices[20][3] = "La ingenier&iacute;a directa es el proceso de analizar un programa para extraer informaci&oacute;n acerca de los datos, de su arquitectura y del dise&ntilde;o de procedimientos.";
 answers[20] = choices[20][1];
 units[20] = "91";
 comments[20] = "Id Pregunta: 4578. Castilla la Mancha B 06";


//  Id pregunta: 4641 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  En UML la forma especial de asociaci&oacute;n que especifica una relaci&oacute;n todo-parte entre el agregado y un componente se denomina";
 choices[21]= new Array();
 choices[21][0] = "agregaci&oacute;n";
 choices[21][1] = "generalizaci&oacute;n";
 choices[21][2] = "dependencia";
 choices[21][3] = "asociaci&oacute;n fuerte";
 answers[21] = choices[21][0];
 units[21] = "";
 comments[21] = "Id Pregunta: 4641. ";


//  Id pregunta: 4680 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  La API JDBC se utiliza:";
 choices[22]= new Array();
 choices[22][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n sepueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones quesoporta un SGBD relacional.";
 choices[22][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional";
 choices[22][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas aprocedimientos almacenados no est&aacute;n soportados.";
 choices[22][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas delas funciones que soporta un SGBD relacional.";
 answers[22] = choices[22][0];
 units[22] = "60";
 comments[22] = "Id Pregunta: 4680. Examen 2006 JCYL";


//  Id pregunta: 4725 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  &iquest;Cu&aacute;ndo analizar&iacute;amos los recursos de la organizaci&oacute;n?";
 choices[23]= new Array();
 choices[23][0] = "Cuando ejecutemos un desarrollo, para determinar el costo.";
 choices[23][1] = "Al valorar los recursos que se han consumido.";
 choices[23][2] = "Para ver la forma de materializar un desarrollo.";
 choices[23][3] = "Cuando queramos hacer una programaci&oacute;n estrat&eacute;gica.";
 answers[23] = choices[23][3];
 units[23] = "27";
 comments[23] = "Id Pregunta: 4725. Examen 2006 JCYL";


//  Id pregunta: 4726 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  Cual de las siguientes afirmaciones es correcta cuando hablamos de XML:";
 choices[24]= new Array();
 choices[24][0] = "Cocoon es un parser XML de c&oacute;digo abierto";
 choices[24][1] = "Los parsers XML sin validaci&oacute;n necesitan el dtd asociado al documento xml";
 choices[24][2] = "Xerces es un parser XML basado en java";
 choices[24][3] = "XSLT es un esquema para XML utilizado en lugar de los DTD";
 answers[24] = choices[24][2];
 units[24] = "69";
 comments[24] = "Id Pregunta: 4726. Examen 2006 JCYL";


//  Id pregunta: 4880 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes apartados de la especificaci&oacute;n 7816 de ISO/IEC (International Standards Organization /International Electrotechnical Commission) relativa a tarjetas inteligentes recoge sus especificaciones el&eacute;ctricas yprotocolos de comunicaci&oacute;n?";
 choices[25]= new Array();
 choices[25][0] = "7816-2";
 choices[25][1] = "7816-3";
 choices[25][2] = "7816-4";
 choices[25][3] = "7816-5";
 answers[25] = choices[25][1];
 units[25] = "73";
 comments[25] = "Id Pregunta: 4880. ";


//  Id pregunta: 5046 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Indique cu&aacute;l de los siguientes NO es un tipo de EJB (&quot;Enterprise Java Beans&quot;) en J2EE 1.4:";
 choices[26]= new Array();
 choices[26][0] = "Beans de entidad";
 choices[26][1] = "Beans de aplicaci&oacute;n";
 choices[26][2] = "Beans de sesi&oacute;n";
 choices[26][3] = "Beans orientados a mensajes";
 answers[26] = choices[26][1];
 units[26] = "116";
 comments[26] = "Id Pregunta: 5046. Examen TIC A 2007";


//  Id pregunta: 5074 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[27]= new Array();
 choices[27][0] = "El W3C tiene una sede en Espa&ntilde;a";
 choices[27][1] = "W3C es un organismo estadounidense";
 choices[27][2] = "El Ministerio de Administraciones P&uacute;blicas es miembro del W3C";
 choices[27][3] = "W3C ha desarrollado mecanismos para evaluar el nivel de accesibilidad de los sitios Web";
 answers[27] = choices[27][1];
 units[27] = "39";
 comments[27] = "Id Pregunta: 5074. Examen TIC A 2007";


//  Id pregunta: 5462 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  La gesti&oacute;n de nombres de dominio bajo el c&oacute;digo correspondientes a Espa&ntilde;a &quot;.es&quot; la tiene legalmente encomendada";
 choices[28]= new Array();
 choices[28][0] = "Internic.es";
 choices[28][1] = "Red.es";
 choices[28][2] = "Mityc.es";
 choices[28][3] = "Netsol.es";
 answers[28] = choices[28][1];
 units[28] = "42";
 comments[28] = "Id Pregunta: 5462. Castilla y Le&oacute;n";


//  Id pregunta: 5492 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Respecto al DataSet de ADO.NET, se&ntilde;ala la falsa ";
 choices[29]= new Array();
 choices[29][0] = "se puedeutilizar con m&uacute;ltiples y distintos or&iacute;genes, excepto XML, que es su principal carencia";
 choices[29][1] = "Se compone de uno o mas DataTable";
 choices[29][2] = "Reproduce los elementos propios de un modelo de datos relacional";
 choices[29][3] = "est&aacute; expresamente dise&ntilde;ado para el acceso adatos independientemente del origen de datos. ";
 answers[29] = choices[29][0];
 units[29] = "59";
 comments[29] = "Id Pregunta: 5492. ";


//  Id pregunta: 5568 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.19 del IEEE?";
 choices[30]= new Array();
 choices[30][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[30][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[30][2] = "Resilient Packet Ring";
 choices[30][3] = "Traspaso entre redes";
 answers[30] = choices[30][1];
 units[30] = "101";
 comments[30] = "Id Pregunta: 5568. ";


//  Id pregunta: 5756 AÃ±o de creación de pregunta: 2009-01-01
 questions[31]= "32)  En el contexto de la Inteligencia Artifical, &iquest;cu&aacute;l de los siguientes es un tipo de Red Neuronal?";
 choices[31]= new Array();
 choices[31][0] = "Fenomenol&oacute;gica";
 choices[31][1] = "Facial";
 choices[31][2] = "De Bradley";
 choices[31][3] = "Perceptr&oacute;n";
 answers[31] = choices[31][3];
 units[31] = "63";
 comments[31] = "Id Pregunta: 5756. ";


//  Id pregunta: 5993 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes funciones NO es competencia del Consejo Superior de Administraci&oacute;n Electr&oacute;nica?";
 choices[32]= new Array();
 choices[32][0] = "Actuar como Observatorio de la Administraci&oacute;n Electr&oacute;nica.";
 choices[32][1] = "La colaboraci&oacute;n con el Centro Criptol&oacute;gico Nacional del Centro Nacional de Inteligencia en la elaboraci&oacute;n de medidas de seguridad.";
 choices[32][2] = "El control, regulaci&oacute;n y supervisi&oacute;n de los proveedores de accesos a Internet de la Administraci&oacute;n General del Estado.";
 choices[32][3] = "El impulso y la coordinaci&oacute;n de la Administraci&oacute;n Electr&oacute;nica en el seno de la Administraci&oacute;n General del Estado.";
 answers[32] = choices[32][2];
 units[32] = "77";
 comments[32] = "Id Pregunta: 5993. TIC A 2009";


//  Id pregunta: 6001 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  Los Estados Miembros est&aacute;n obligados a garantizar, a trav&eacute;s de ventanillas &uacute;nicas, a los prestadores de servicios la posibilidad de llevar a cabo las declaraciones, notificaciones o solicitudes necesarias para la autorizaci&oacute;n por parte de las autoridades competentes. &iquest;En que Directiva se regula esta obligaci&oacute;n?";
 choices[33]= new Array();
 choices[33][0] = "En la Directiva 2000/31/CE, relativa a determinados aspectos jur&iacute;dicos del comercio electr&oacute;nico en el mercado interior.";
 choices[33][1] = "No existe esta obligaci&oacute;n por parte de los Estados Miembros, y por tanto ninguna Directiva la regula.";
 choices[33][2] = "En la Directiva 2006/31/CE, relativa a la armonizaci&oacute;n de las actividades de servicios con contenido econ&oacute;mico en el mercado interior.";
 choices[33][3] = "En la Directiva 2006/123/CE, relativa a los servicios en el mercado interior.";
 answers[33] = choices[33][3];
 units[33] = "30";
 comments[33] = "Id Pregunta: 6001. TIC A 2009";


//  Id pregunta: 6130 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  Cuando puntuamos criterios de diferentes alternativas y nos referimos al umbral de saciedad, entendemos por tal:";
 choices[34]= new Array();
 choices[34][0] = "El valor que debe cumplir la puntuaci&oacute;n de un criterio para ser considerado aceptable. por tanto es el m&iacute;nimo exigido.";
 choices[34][1] = "El valor de un criterio a partir del cual no se obtiene una utilidad adicional, por lo que su exceso no es tenido en cuenta.";
 choices[34][2] = "Un valor ordinal definido por el evaluador conforme a una escala subjetiva.";
 choices[34][3] = "Un m&eacute;todo de limitaci&oacute;n de la asignaci&oacute;n de puntuaciones mediante entrop&iacute;a. Se dice entonces que el criterio est&aacute; saciado.";
 answers[34] = choices[34][1];
 units[34] = "34";
 comments[34] = "Id Pregunta: 6130. TIC A 2009";


//  Id pregunta: 6151 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  Con respecto al control de la calidad, &iquest;cu&aacute;ndo se considera que un resultado es acptable?";
 choices[35]= new Array();
 choices[35][0] = "Si se encuentra dentro de los l&iacute;mites de control.";
 choices[35][1] = "Si se encuentra dentro del rango especificado por la tolerancia.";
 choices[35][2] = "Si se encuentra dentro de los l&iacute;mites de control o dentro del rango especificado por la tolerancia.";
 choices[35][3] = "Si se encuentra dentro de los l&iacute;mites de control y dentro del rango especificado por la tolerancia.";
 answers[35] = choices[35][1];
 units[35] = "28";
 comments[35] = "Id Pregunta: 6151. ";


//  Id pregunta: 6173 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  Dentro de  una soluci&oacute;n e-learning, donde se encuadrar&iacute;a un sistema LMS:";
 choices[36]= new Array();
 choices[36][0] = "Plataforma de formaci&oacute;n.";
 choices[36][1] = "Contenidos de formaci&oacute;n.";
 choices[36][2] = "Herramientas de comunicaci&oacute;n.";
 choices[36][3] = "Ninguna de las anteriores.";
 answers[36] = choices[36][0];
 units[36] = "66";
 comments[36] = "Id Pregunta: 6173. ";


//  Id pregunta: 6200 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  Seg&uacute;n M&eacute;trica 3, el diagrama de estructura define posibles estructuras que permiten mostrar la secuencia de las llamadas entre m&oacute;dulos; &iquest;cu&aacute;l de las siguientes es una de ellas?";
 choices[37]= new Array();
 choices[37][0] = "Continua";
 choices[37][1] = "Dispersa";
 choices[37][2] = "en &Aacute;rbol";
 choices[37][3] = "Alternativa";
 answers[37] = choices[37][3];
 units[37] = "86";
 comments[37] = "Id Pregunta: 6200. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6340 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  &iquest;Qui&eacute;n acu&ntilde;&oacute; el t&eacute;rmino 'Web 2.0'?";
 choices[38]= new Array();
 choices[38][0] = "Tim Berners-Lee";
 choices[38][1] = "Tim O'Reilly";
 choices[38][2] = "Vinton Cerf";
 choices[38][3] = "Richard Stallman";
 answers[38] = choices[38][1];
 units[38] = "120";
 comments[38] = "Id Pregunta: 6340. NULL";


//  Id pregunta: 6486 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes es una desventaja de LMDS?";
 choices[39]= new Array();
 choices[39][0] = "La necesidad de desplegar fibra &oacute;ptica hasta las proximidades del cliente";
 choices[39][1] = "Requiere eliminar las bobinas de carga del bucle local";
 choices[39][2] = "Requiere licencia de uso del espectro radioel&eacute;ctrico para la operadora";
 choices[39][3] = "Es un servicio punto a punto";
 answers[39] = choices[39][2];
 units[39] = "108";
 comments[39] = "Id Pregunta: 6486. Castilla La Mancha 2009";


//  Id pregunta: 6640 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  La principal diferencia entre la t&eacute;cnica de los Puntos de Funci&oacute;n (PF's) y los PF's Mark II es:";
 choices[40]= new Array();
 choices[40][0] = "Los PF's Mark II utilizan el concepto de transacci&oacute;n l&oacute;gica";
 choices[40][1] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros)";
 choices[40][2] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros), m&aacute;s el concepto de transacci&oacute;n l&oacute;gica";
 choices[40][3] = "Los PF's Mark II utilizan 5 elementos (Entradas, Salidas, Consultas, Ficheros e Interfaces)";
 answers[40] = choices[40][0];
 units[40] = "88";
 comments[40] = "Id Pregunta: 6640. NULL";


//  Id pregunta: 7244 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  Cu&aacute;les de las siguientes afirmaciones es INCORRECTA sobre la fibra &oacute;ptica:";
 choices[41]= new Array();
 choices[41][0] = "No es posible acceder a los datos transmitidos por m&eacute;todos no destructivos";
 choices[41][1] = "Puede transmitir electricidad para alimentar repetidores intermedios";
 choices[41][2] = "Es inmune a las interferencias electromagn&eacute;ticas";
 choices[41][3] = "Las fibras son fr&aacute;giles y sus empalmes son dif&iacute;ciles";
 answers[41] = choices[41][1];
 units[41] = "99";
 comments[41] = "Id Pregunta: 7244. Examen TIC B 2009";


//  Id pregunta: 7285 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  &quot;La t&eacute;cnica de  virtualizaci&oacute;n de infraestructura TIC denominada &quot;&quot;paravirtualizaci&oacute;n&quot;&quot;, pone &eacute;nfasis (comparado con la virtualizaci&oacute;n &quot;&quot;normal&quot;&quot;) en:&quot;";
 choices[42]= new Array();
 choices[42][0] = "Compatibilidad e interoperabilidad";
 choices[42][1] = "Rendimiento";
 choices[42][2] = "Costes";
 choices[42][3] = "Inteligencia arti&iexcl;ficial";
 answers[42] = choices[42][1];
 units[42] = "119";
 comments[42] = "Id Pregunta: 7285. Examen TIC B 2009";


//  Id pregunta: 7303 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  El est&aacute;ndar de la ETSI para reconocimiento del habla distribuido se llama:";
 choices[43]= new Array();
 choices[43][0] = "ATENA";
 choices[43][1] = "AURORA";
 choices[43][2] = "PALAS ATENEA";
 choices[43][3] = "AFRODITA";
 answers[43] = choices[43][1];
 units[43] = "94";
 comments[43] = "Id Pregunta: 7303. NULL";


//  Id pregunta: 8203 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  Seg&uacute;n Pressman, una revisi&oacute;n t&eacute;cnica formal es: ";
 choices[44]= new Array();
 choices[44][0] = "Una reuni&oacute;n.";
 choices[44][1] = "Un producto del desarrollo.";
 choices[44][2] = "Un documento.";
 choices[44][3] = "La aceptaci&oacute;n del sistema. ";
 answers[44] = choices[44][0];
 units[44] = "87";
 comments[44] = "Id Pregunta: 8203. Examen TIC A1 2010";


//  Id pregunta: 8329 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l es el est&aacute;ndar de la Organizaci&oacute;n Internacional para la Normalizaci&oacute;n (ISO) para el archivo de documentos electr&oacute;nicos PDF/A?";
 choices[45]= new Array();
 choices[45][0] = "ISO 14000-1";
 choices[45][1] = "ISO 18001";
 choices[45][2] = "ISO 19005-1";
 choices[45][3] = "ISO 690";
 answers[45] = choices[45][2];
 units[45] = "93";
 comments[45] = "Id Pregunta: 8329. Examen TIC A2 2010";


//  Id pregunta: 8395 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO es una t&eacute;cnica empleada en Miner&iacute;a de Datos?";
 choices[46]= new Array();
 choices[46][0] = "Las redes neuronales.";
 choices[46][1] = "Look and Find.";
 choices[46][2] = "Los &aacute;rboles de decisi&oacute;n.";
 choices[46][3] = "Las redes bayesianas.";
 answers[46] = choices[46][1];
 units[46] = "71";
 comments[46] = "Id Pregunta: 8395. Examen TIC A2 2010";


//  Id pregunta: 8511 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  De las siguientes normas, &iquest;cu&aacute;l est&aacute; referida al c&oacute;digo de buenas pr&aacute;cticas en gesti&oacute;n de la seguridad de la Informaci&oacute;n?";
 choices[47]= new Array();
 choices[47][0] = "ISO/lEC 13335-2.";
 choices[47][1] = "ISO/lEC 27002:2013.";
 choices[47][2] = "UNE 71502:2004.";
 choices[47][3] = "ISO 10646.";
 answers[47] = choices[47][1];
 units[47] = "111";
 comments[47] = "Id Pregunta: 8511. Examen TIC A2 2010";


//  Id pregunta: 8630 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[48]= new Array();
 choices[48][0] = "Regla de la no subversi&oacute;n.";
 choices[48][1] = "Regla de la no concurrencia.";
 choices[48][2] = "Regla de la restricci&oacute;n.";
 choices[48][3] = "Regla de la no replicaci&oacute;n de Informaci&oacute;n.";
 answers[48] = choices[48][0];
 units[48] = "57, 58";
 comments[48] = "Id Pregunta: 8630. Examen TIC A2 2010 interna";


//  Id pregunta: 8787 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  &iquest;Qu&eacute; protocolo puede encontrar la direcci&oacute;n MAC de un computador, dada su direcci&oacute;n IP?";
 choices[49]= new Array();
 choices[49][0] = "RARP";
 choices[49][1] = "DHCP";
 choices[49][2] = "ARP";
 choices[49][3] = "Proxy RARP";
 answers[49] = choices[49][2];
 units[49] = "100";
 comments[49] = "Id Pregunta: 8787. Examen UPM A2 2011";


//  Id pregunta: 8893 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  Son principios de gesti&oacute;n de la calidad seg&uacute;n la norma ISO 9004";
 choices[50]= new Array();
 choices[50][0] = "Enfoque basado en procesos";
 choices[50][1] = "Mejora continua";
 choices[50][2] = "Relaciones mutuamente beneficiosas para el proveedor";
 choices[50][3] = "Todos lo son";
 answers[50] = choices[50][3];
 units[50] = "92";
 comments[50] = "Id Pregunta: 8893. NULL";


//  Id pregunta: 8956 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  En Inteligencia artificial existe varias clasificaciones en cuanto a los m&eacute;todos de b&uacute;squeda. De lso siguientes &iquest;cu&aacute;l pertenece  a la clasificaci&oacute;n  de Mejora Iterativa?";
 choices[51]= new Array();
 choices[51][0] = "B&uacute;squeda Greedy";
 choices[51][1] = "B&uacute;squeda en profundidad iterativa";
 choices[51][2] = "Algoritmo A*";
 choices[51][3] = "Escalada por m&aacute;xima pendiente";
 answers[51] = choices[51][3];
 units[51] = "63";
 comments[51] = "Id Pregunta: 8956. ";


//  Id pregunta: 8994 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  Las Cookies que emplea el protocolo HTTP se especifican en el RFC:";
 choices[52]= new Array();
 choices[52][0] = "2965";
 choices[52][1] = "8080";
 choices[52][2] = "1065";
 choices[52][3] = "1265";
 answers[52] = choices[52][0];
 units[52] = "112";
 comments[52] = "Id Pregunta: 8994. Examen UPM A2 2011";


//  Id pregunta: 9042 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[53]= new Array();
 choices[53][0] = "La &uacute;nica manera de implementar SOA es con un Enterprise Service Bus";
 choices[53][1] = "La &uacute;nica manera de implementar SOA es a trav&eacute;s de servicios Web";
 choices[53][2] = "SOA es un concepto que puede ser implementado de varias formas";
 choices[53][3] = "Todas son incorrectas";
 answers[53] = choices[53][2];
 units[53] = "51";
 comments[53] = "Id Pregunta: 9042. NULL";


//  Id pregunta: 9065 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  De acuerdo a la normativa de protecci&oacute;n de datos de car&aacute;cter personal, la potestad del &oacute;rgano sancionador de inmovilizaci&oacute;n de ficheros  ";
 choices[54]= new Array();
 choices[54][0] = "Se podr&aacute; ejercer s&oacute;lo en supuestos constitutivos de infracci&oacute;n muy grave";
 choices[54][1] = "Se podr&aacute; ejercer en ciertos supuestos constitutivos de infracci&oacute;n grave o muy grave";
 choices[54][2] = "Siempre la puede ejercer el &oacute;rgano sancionador, mediante resoluci&oacute;n motivada";
 choices[54][3] = "La ley 2/2011 de Econom&iacute;a Sostenible elimina la potestad inmovilizadora";
 answers[54] = choices[54][1];
 units[54] = "29";
 comments[54] = "Id Pregunta: 9065. NULL";


//  Id pregunta: 9091 AÃ±o de creación de pregunta: 2013-01-01
 questions[55]= "56)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[55]= new Array();
 choices[55][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[55][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[55][2] = "Si, en todos los casos";
 choices[55][3] = "Todas las anteriores son falsas";
 answers[55] = choices[55][2];
 units[55] = "36";
 comments[55] = "Id Pregunta: 9091. ";


//  Id pregunta: 9103 AÃ±o de creación de pregunta: 2013-01-01
 questions[56]= "57)  &iquest;En que lenguaje est&aacute; basado el lenguaje de expresi&oacute;n de derechos REL?";
 choices[56]= new Array();
 choices[56][0] = "XcML";
 choices[56][1] = "XrML";
 choices[56][2] = "XMCL";
 choices[56][3] = "XsML";
 answers[56] = choices[56][1];
 units[56] = "37";
 comments[56] = "Id Pregunta: 9103. ";


//  Id pregunta: 9183 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes no es interfaz de M&eacute;trica 3?";
 choices[57]= new Array();
 choices[57][0] = "Gesti&oacute;n de Configuraci&oacute;n";
 choices[57][1] = "Gesti&oacute;n de Procesos";
 choices[57][2] = "Seguridad";
 choices[57][3] = "Aseguramiento de la Calidad";
 answers[57] = choices[57][1];
 units[57] = "86";
 comments[57] = "Id Pregunta: 9183. NULL";


//  Id pregunta: 9290 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  &iquest;A qu&eacute; norma ISO corresponde el est&aacute;ndar del ITU X.200? ";
 choices[58]= new Array();
 choices[58][0] = "ISO 9945";
 choices[58][1] = "ISO 7498";
 choices[58][2] = "ISO 9126";
 choices[58][3] = "ISO 15408";
 answers[58] = choices[58][1];
 units[58] = "42";
 comments[58] = "Id Pregunta: 9290. ";


//  Id pregunta: 9356 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  &iquest;Cu&aacute;ntos terminales pueden ser usados simult&aacute;neamente en una RDSI con acceso b&aacute;sico?:";
 choices[59]= new Array();
 choices[59][0] = "S&oacute;lo 1 canal B puede estar ocupado en un momento determinado, pero puede encolar lo que entre por el otro.";
 choices[59][1] = "3, ya que cada canal s&oacute;lo puede ser utilizado por un terminal a la vez, y con la compresi&oacute;n adecuada todos los canales permiten una comunicaci&oacute;n vocal.";
 choices[59][2] = "1 por cada canal B mientras que el canal D puede ser compartido por varios terminales en modo paquete.";
 choices[59][3] = "Los 8 terminales que puede soportar el acceso b&aacute;sico.";
 answers[59] = choices[59][2];
 units[59] = "103";
 comments[59] = "Id Pregunta: 9356. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9438 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  En un DFD los niveles de los diagramas que recogen la descomposici&oacute;n en niveles, desde el m&aacute;s general al m&aacute;s espec&iacute;fico, se denominan:";
 choices[60]= new Array();
 choices[60][0] = "Diagrama de sistema, subsistemas, funciones, subfunciones, procesos y subprocesos.";
 choices[60][1] = "Diagrama de contexto, sistemas, subsistemas, funciones y subfunciones.";
 choices[60][2] = "Diagrama de contexto, sistemas, funciones y subfunciones.";
 choices[60][3] = "Diagrama de contexto, subsistemas, funciones, subfunciones y procesos.";
 answers[60] = choices[60][3];
 units[60] = "81";
 comments[60] = "Id Pregunta: 9438. Examen AGE TIC A1 2011";


//  Id pregunta: 9453 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  En el modelo Entidad/Relaci&oacute;n de Chen, &iquest;qu&eacute; tipos de entidades se pueden diferenciar?:";
 choices[61]= new Array();
 choices[61][0] = "Regulares y d&eacute;biles.";
 choices[61][1] = "Fuertes y d&eacute;biles.";
 choices[61][2] = "A y B son correctas.";
 choices[61][3] = "Ninguna de las anteriores es correcta.";
 answers[61] = choices[61][2];
 units[61] = "80";
 comments[61] = "Id Pregunta: 9453. ";


//  Id pregunta: 9487 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de obtenci&oacute;n de requisitos no es una t&eacute;cnica de bajo nivel?";
 choices[62]= new Array();
 choices[62][0] = "Entrevistas";
 choices[62][1] = "PIECES";
 choices[62][2] = "An&aacute;lisis de mercado";
 choices[62][3] = "Prototipos";
 answers[62] = choices[62][3];
 units[62] = "78";
 comments[62] = "Id Pregunta: 9487. ";


//  Id pregunta: 9524 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.323:";
 choices[63]= new Array();
 choices[63][0] = "Es un est&aacute;ndar para videoconferencia sobre redes IP";
 choices[63][1] = "El gatekeeper es un componente principal";
 choices[63][2] = "Utiliza el protocolo H.235 como seguridad (autenticaci&oacute;n, integridad, etc.)";
 choices[63][3] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 answers[63] = choices[63][3];
 units[63] = "117";
 comments[63] = "Id Pregunta: 9524. NULL";


//  Id pregunta: 9609 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  &iquest;Qu&eacute; establece el teorema de CAP o de Brewer?";
 choices[64]= new Array();
 choices[64][0] = "El n&uacute;mero medio de clientes en un sistema es igual a la tasa promedio de llegada de clientes al sistema, por el tiempo medio que el cliente est&aacute; en un sistema.";
 choices[64][1] = "En un sistema de computaci&oacute;n distribuida es imposible garantizar simult&aacute;neamente la consistencia, disponibilidad y la tolerancia  a fallos.";
 choices[64][2] = "En una relaci&oacute;n, los valores de una clave externa de una tabla, deben coincidir con los valores de una clave primaria de la otra tabla con la que est&aacute; relacionada o bien ser todos nulos.";
 choices[64][3] = "Todas las respuestas son incorrectas.";
 answers[64] = choices[64][1];
 units[64] = "52";
 comments[64] = "Id Pregunta: 9609. ";


//  Id pregunta: 9664 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Los sistemas multiprocesador:";
 choices[65]= new Array();
 choices[65][0] = "Son sistemas d&eacute;bilmente acoplados.";
 choices[65][1] = "Sus procesadores no dependen unos de otros.";
 choices[65][2] = "Son sistemas fuertemente acoplados.";
 choices[65][3] = "Ninguna de las anteriores.";
 answers[65] = choices[65][2];
 units[65] = "45";
 comments[65] = "Id Pregunta: 9664. ";


//  Id pregunta: 9747 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Indique en qu&eacute; consiste el m&eacute;todo QSOS:";
 choices[66]= new Array();
 choices[66][0] = "Est&aacute; destinado a representar la interacci&oacute;n entre los componentes de un sistema.";
 choices[66][1] = "Permite calificar, seleccionar y comparar software Open Source de una manera objetiva.";
 choices[66][2] = "Permite representar a trav&eacute;s de objetos la informaci&oacute;n que contiene una base de datos.";
 choices[66][3] = "Es un modelo matem&aacute;tico que permite calcular las futuras desviaciones en un proyecto software.";
 answers[66] = choices[66][1];
 units[66] = "61";
 comments[66] = "Id Pregunta: 9747. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9749 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  &iquest;En qu&eacute; ley se exige que se establezcan las medidas necesarias para incentivar el acceso a las telecomunicaciones en lengua de signos espa&ntilde;ola?";
 choices[67]= new Array();
 choices[67][0] = "Ley 30/92";
 choices[67][1] = "Ley 27/2007";
 choices[67][2] = "Ley 11/2007";
 choices[67][3] = "Ley 34/2002";
 answers[67] = choices[67][1];
 units[67] = "39";
 comments[67] = "Id Pregunta: 9749. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9776 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[68]= new Array();
 choices[68][0] = "chmod u+s /directorio/fichero ";
 choices[68][1] = "chmog g+s /directorio ";
 choices[68][2] = "chmod 177 /directorio ";
 choices[68][3] = "chmod +t /directorio ";
 answers[68] = choices[68][3];
 units[68] = "53";
 comments[68] = "Id Pregunta: 9776. Examen TIC A2 2013";


//  Id pregunta: 9883 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  El protocolo SET (Secure Electronic Transaction)";
 choices[69]= new Array();
 choices[69][0] = "Fue desarrollado en 1990 mediante acuerdo bilateral entre Visa e IBM.";
 choices[69][1] = "impide que el vendedor acceda a la informaci&oacute;n de pago.";
 choices[69][2] = "permite que el banco acceda a los datos del pedido para tramitar el pago.";
 choices[69][3] = "no abarca ni liquidaciones de pagos ni anulaciones.";
 answers[69] = choices[69][1];
 units[69] = "70";
 comments[69] = "Id Pregunta: 9883. TIC A1, Examen 2013";


//  Id pregunta: 9918 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  En el modelo entidad-relaci&oacute;n extendido, tal y como se describe en el documento de T&eacute;cnicas y Pr&aacute;cticas de M&eacute;trica v3, un atributo es:";
 choices[70]= new Array();
 choices[70][0] = "La dependencia de existencia de un tipo de entidad d&eacute;bil respecto de uno fuerte.";
 choices[70][1] = "Una propiedad o caracter&iacute;stica de un tipo de entidad.";
 choices[70][2] = "El elemento que es a la vez un tipo de entidad y una relaci&oacute;n con otro tipo de entidad.";
 choices[70][3] = "El n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad en una ocurrencia de la relaci&oacute;n.";
 answers[70] = choices[70][1];
 units[70] = "86, 58";
 comments[70] = "Id Pregunta: 9918. TIC A2, Examen 2013";


//  Id pregunta: 9981 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[71]= new Array();
 choices[71][0] = "CLRUN";
 choices[71][1] = "CLRNET";
 choices[71][2] = "COLR";
 choices[71][3] = "CLR";
 answers[71] = choices[71][3];
 units[71] = "59,115";
 comments[71] = "Id Pregunta: 9981. TIC A2, UPM, Examen 2010";


//  Id pregunta: 9983 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  No es cierto sobre la tecnolog&iacute;a de p&aacute;ginas web de Microsoft (ASP y ASP.Net):";
 choices[72]= new Array();
 choices[72][0] = "Una p&aacute;gina ASP puede escribirse con Java Script";
 choices[72][1] = "ASP se ejecuta del lado del servidor bajo IIS o motores PHT compatibles con ASP";
 choices[72][2] = "ASP.NET es una tecnolog&iacute;a orientada o objetos que se ejecuta del lado del servidor";
 choices[72][3] = "Una p&aacute;gina ASP puede escribirse con Visual Basic Script";
 answers[72] = choices[72][1];
 units[72] = "59,115";
 comments[72] = "Id Pregunta: 9983. Examen T&eacute;cnico especialista inform&aacute;tica, Servicio Salud C&aacute;ntabro, 2011";


//  Id pregunta: 10021 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Se&ntilde;ale la respuesta INCORRECTA respecto a las caracter&iacute;sticas de la metodolog&iacute;a de desarrollo software conocida como Proceso Unificado de Desarrollo Software:";
 choices[73]= new Array();
 choices[73][0] = "Es Iterativo e Incremental.";
 choices[73][1] = "Est&aacute; dirigido por los casos de uso.";
 choices[73][2] = "Est&aacute; enfocado en los riesgos.";
 choices[73][3] = "Fue creado por Dennis Ritchie y Ken Thompson.";
 answers[73] = choices[73][3];
 units[73] = "76";
 comments[73] = "Id Pregunta: 10021. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10059 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Seg&uacute;n la ANSI/TIA-942 el porcentaje de disponibilidad de 99.982% en un CPD corresponde a:";
 choices[74]= new Array();
 choices[74][0] = "TIER I ";
 choices[74][1] = "TIER II";
 choices[74][2] = "TIER III ";
 choices[74][3] = "TIER IV";
 answers[74] = choices[74][2];
 units[74] = "99";
 comments[74] = "Id Pregunta: 10059. TIC A2, libre, Examen 2013";


//  Id pregunta: 10112 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  El est&aacute;ndar para definici&oacute;n de VLAN es:";
 choices[75]= new Array();
 choices[75][0] = "IEEE 802.1D";
 choices[75][1] = "IEEE 802.1P";
 choices[75][2] = "IEEE 802.1Q";
 choices[75][3] = "IEEE 802.2";
 answers[75] = choices[75][2];
 units[75] = "101";
 comments[75] = "Id Pregunta: 10112. ";


//  Id pregunta: 10132 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  La principal mejora de SNMPv3 es:";
 choices[76]= new Array();
 choices[76][0] = "Mayor seguridad";
 choices[76][1] = "Mayor rendimiento";
 choices[76][2] = "Mayor eficacia";
 choices[76][3] = "Mayor simplicidad";
 answers[76] = choices[76][0];
 units[76] = "104";
 comments[76] = "Id Pregunta: 10132. ";


//  Id pregunta: 10177 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Qu&eacute; afirmaci&oacute;n es cierta en relaci&oacute;n con la orientaci&oacute;n a objetos?";
 choices[77]= new Array();
 choices[77][0] = "La encapsulaci&oacute;n permite captar las caracter&iacute;sticas esenciales que distinguen a un objeto de otros tipos de objetos, en funci&oacute;n de la perspectiva del observador, y obtener as&iacute; una descripci&oacute;n de la clase de objetos que enfatiza unos detalles y suprimer otros";
 choices[77][1] = "Seg&uacute;n Grady Booch, un objeto o instancia de una clase tiene estado, comportamiento e identidad";
 choices[77][2] = "Los lenguajes OO son lenguajes fuertemente tipados que no soportan el enlace din&aacute;mico en tiempo de ejecuci&oacute;n, para invocar operaciones en objetos obviando el tipo actual de &eacute;stos";
 choices[77][3] = "El polimorfismo se expresa &uacute;nicamente a trav&eacute;s del uso de un mismo nombre de m&eacute;todo o funci&oacute;n con distintos argumentos o un mismo operador con distintas funcionalidades";
 answers[77] = choices[77][1];
 units[77] = "82";
 comments[77] = "Id Pregunta: 10177. ";


//  Id pregunta: 10304 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Indicar cu&aacute;l de los siguientes NO es un modo de transferencia de datos utilizado por el protocolo HDLC (High Level Data Link Control):";
 choices[78]= new Array();
 choices[78][0] = "Modo de respuesta normal (NRM, Normal Response Mode).";
 choices[78][1] = "Modo balanceado as&iacute;ncrono (ABM, Asynchronous Balanced Mode).";
 choices[78][2] = "Modo de respuesta as&iacute;ncrono (ARM, Asynchronous Response Mode).";
 choices[78][3] = "Modo balanceado s&iacute;ncrono (SBM, Synchronous Balanced Mode).";
 answers[78] = choices[78][3];
 units[78] = "100";
 comments[78] = "Id Pregunta: 10304. TIC A2, libre, examen 2013";


//  Id pregunta: 10311 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es el m&aacute;ximo porcentaje de disco desaprovechado para el almacenamiento efectivo de datos en un array de discos configurado en RAID 5 (suponiendo que todos los discos tienen la misma capacidad)?";
 choices[79]= new Array();
 choices[79][0] = "33%";
 choices[79][1] = "20%";
 choices[79][2] = "50%";
 choices[79][3] = "0%";
 answers[79] = choices[79][0];
 units[79] = "48";
 comments[79] = "Id Pregunta: 10311. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10464 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Qu&eacute; elemento de HTML 5 tiene como finalidad dibujar gr&aacute;ficos 2D on the fly mediante Javascript?";
 choices[80]= new Array();
 choices[80][0] = "&lt;svg&gt;";
 choices[80][1] = "&lt;canvas&gt;";
 choices[80][2] = "&lt;output&gt;";
 choices[80][3] = "&lt;source&gt;";
 answers[80] = choices[80][1];
 units[80] = "69";
 comments[80] = "Id Pregunta: 10464. NULL";


//  Id pregunta: 10481 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  El certificado de firma del DNI electr&oacute;nico es un certificado (seg&uacute;n la ley de Firma Electr&oacute;nica):";
 choices[81]= new Array();
 choices[81][0] = "Avanzado";
 choices[81][1] = "Reconocido";
 choices[81][2] = "Seguro";
 choices[81][3] = "Exportable";
 answers[81] = choices[81][1];
 units[81] = "74";
 comments[81] = "Id Pregunta: 10481. NULL";


//  Id pregunta: 10512 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Que estandar establece el formato de la numeracion, las direcciones email y las direcciones web?";
 choices[82]= new Array();
 choices[82][0] = "E.122";
 choices[82][1] = "E.123";
 choices[82][2] = "E.231";
 choices[82][3] = "Ninguna de las anteriores";
 answers[82] = choices[82][1];
 units[82] = "109";
 comments[82] = "Id Pregunta: 10512. NULL";


//  Id pregunta: 10555 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)   Cu&aacute;l de los siguientes debe ser el primer paso en una Auditor&iacute;a de Sistemas ";
 choices[83]= new Array();
 choices[83][0] = "Crear un diagrama de flujo de las ramas de decisi&oacute;n. ";
 choices[83][1] = "Comprender el entorno a estudiar";
 choices[83][2] = "Realizar una evaluaci&oacute;n de riesgos";
 choices[83][3] = "Desarrollar un plan de auditor&iacute;a";
 answers[83] = choices[83][1];
 units[83] = "31, 32, 33";
 comments[83] = "Id Pregunta: 10555. Un auditor necesita obtener una comprensi&oacute;n de los procesos antes de crear un diagrama de flujo, evaluar los riesgos o desarrollar un plan de auditor&iacute;a";


//  Id pregunta: 10620 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Indique la respuesta incorrecta:";
 choices[84]= new Array();
 choices[84][0] = "Java es independiente de la plataforma.";
 choices[84][1] = "El entorno de ejecuci&oacute;n de Java es el responsable de gestionar el ciclo de vida de los objetos.";
 choices[84][2] = "El Global Interpreter Lock (GIL) permite la concurrencia del lenguaje Java.";
 choices[84][3] = "Un programa desarrollado en Java requiere una m&aacute;quina virtual para ejecutarse.";
 answers[84] = choices[84][2];
 units[84] = "60";
 comments[84] = "Id Pregunta: 10620. El GIL es un mecanismo de Python. Java s&iacute; es concurrente.";


//  Id pregunta: 10651 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[85]= new Array();
 choices[85][0] = "La tarjeta SIM contiene la clave del algoritmo de autenticaci&oacute;n con la red GSM.";
 choices[85][1] = "En GSM se utilizan circuitos conmutados extremo a extremo.";
 choices[85][2] = "En la arquitectura de GSM, la interfaz Um se encuentra entre el Subsistema de Estaci&oacute;n Base (BSS) y el Subsistema de Red y  Conmutaci&oacute;n (NSS).";
 choices[85][3] = "En GSM, la separaci&oacute;n entre portadoras ascendente y descendente es de 45 Mhz.";
 answers[85] = choices[85][2];
 units[85] = "108";
 comments[85] = "Id Pregunta: 10651. ";


//  Id pregunta: 10689 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Qu&eacute; Ley establece el &quot;Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.&quot;?";
 choices[86]= new Array();
 choices[86][0] = "Ley 40/2015.";
 choices[86][1] = "Ley 40/2014.";
 choices[86][2] = "Ley 39/2015.";
 choices[86][3] = "Ley 41/2015.";
 answers[86] = choices[86][2];
 units[86] = "30";
 comments[86] = "Id Pregunta: 10689. ";


//  Id pregunta: 11006 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  En el desarrollo orientado a objetos, dos casos de uso pueden estar relacionados mediante una relaci&oacute;n include, y reciben los nombres de caso base y caso de inclusi&oacute;n. Se&ntilde;ale la respuesta correcta:";
 choices[87]= new Array();
 choices[87][0] = "La ubicaci&oacute;n de la inclusi&oacute;n en el caso base es impl&iacute;cita. Es decir, es una sentencia expl&iacute;cita dentro de la secuencia de comportamiento del caso de uso base.";
 choices[87][1] = "El caso de uso de inclusi&oacute;n indica una secuencia adicional de comportamiento cuya ejecuci&oacute;n depende de una condici&oacute;n.";
 choices[87][2] = "El caso de uso de inclusi&oacute;n no puede acceder a atributos u operaciones del caso de uso base.";
 choices[87][3] = "Solo puede haber una relaci&oacute;n de inclusi&oacute;n para un caso de uso base.";
 answers[87] = choices[87][0];
 units[87] = "86";
 comments[87] = "Id Pregunta: 11006. TIC A1 AGE 2014";


//  Id pregunta: 11017 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;ntos anexos incluye el RD 3/2010 (ENS)?";
 choices[88]= new Array();
 choices[88][0] = "Ninguno";
 choices[88][1] = "1";
 choices[88][2] = "2";
 choices[88][3] = "5";
 answers[88] = choices[88][3];
 units[88] = "30";
 comments[88] = "Id Pregunta: 11017. ";


//  Id pregunta: 11098 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  De acuerdo con la LOPD, seleccione la respuesta verdadera";
 choices[89]= new Array();
 choices[89][0] = "Iniciar la recogida de datos de car&aacute;cter personal sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente es una infracci&oacute;n GRAVE.";
 choices[89][1] = "No atender, por motivos formales, la solicitud del interesado de rectificaci&oacute;n o cancelaci&oacute;n de los datos personales objeto de tratamiento cuando legalmente proceda es una infracci&oacute;n MUY GRAVE";
 choices[89][2] = "Las respuestas a) y b) son falsas";
 choices[89][3] = "Las respuestas a) y b) son verdaderas";
 answers[89] = choices[89][0];
 units[89] = "29";
 comments[89] = "Id Pregunta: 11098. ";


//  Id pregunta: 11226 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  A partir de que versi&oacute;n adopt&oacute; la antigua Sun Microsystem un cambio en la nomenclatura de las versiones en sus productos Java.";
 choices[90]= new Array();
 choices[90][0] = "Hasta la versi&oacute;n 1.2, siendo la versi&oacute;n 3.0 la primera en numerarse de esta forma.";
 choices[90][1] = "Hasta la versi&oacute;n 1.3, siendo la versi&oacute;n 4.0 la primera en numerarse de esta forma.";
 choices[90][2] = "Hasta la versi&oacute;n 1.4, siendo la versi&oacute;n 5.0 la primera en numerarse de esta forma.";
 choices[90][3] = "El versionado ha sido siempre 1.x.";
 answers[90] = choices[90][2];
 units[90] = "116";
 comments[90] = "Id Pregunta: 11226. ";


//  Id pregunta: 11247 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En lo Referente a la publicidad de los procedimientos de licitaci&oacute;n de &aacute;mbito estatal, es falso que:";
 choices[91]= new Array();
 choices[91][0] = "En el caso de los procedimientos negociados con publicidad, la publicaci&oacute;n en el perfil del contratante podr&aacute; sustituir a la del BOE.";
 choices[91][1] = "Los contratos no SARA se publican en el BOE y en el Perfil del Contratante.";
 choices[91][2] = "Los contratos SARA se publican en el DOUE, en lugar del BOE, y en el Perfil del Contratante.";
 choices[91][3] = "Ninguna es correcta.";
 answers[91] = choices[91][2];
 units[91] = "41";
 comments[91] = "Id Pregunta: 11247. ";


//  Id pregunta: 11382 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; afirmaci&oacute;n sobre la relaci&oacute;n entre el sistema de gesti&oacute;n de configuraci&oacute;n (CMS) y el sistema de gesti&oacute;n del conocimiento de servicios (SKMS) es la correcta?";
 choices[92]= new Array();
 choices[92][0] = "El SKMS es parte de la CMS";
 choices[92][1] = "El CMS es parte del SKMS";
 choices[92][2] = "El CMS y el SKMS son la misma cosa";
 choices[92][3] = "No existe una relaci&oacute;n entre el CMS y el SKMS";
 answers[92] = choices[92][1];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11382. ";


//  Id pregunta: 11398 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes situaciones deber&iacute;a ser tratada como una incidencia?: 1. Un usuario es incapaz de acceder a un servicio durante el horario de servicio; 2. Un miembro autorizado del personal TI no puede acceder a un servicio durante el horario de servicio; 3. Un componente de red falla pero el usuario no percibe ninguna alteraci&oacute;n del servicio; 4. Un usuario contacta con el centro de servicio para informar que una aplicaci&oacute;n presenta un rendimiento lento";
 choices[93]= new Array();
 choices[93][0] = "Todas las anteriores";
 choices[93][1] = "Solo 1 y 4";
 choices[93][2] = "Solo 2 y 3";
 choices[93][3] = "Ninguna de las anteriores";
 answers[93] = choices[93][0];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11398. ";


//  Id pregunta: 11465 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, el usuario tiene derecho:";
 choices[94]= new Array();
 choices[94][0] = "A figurar en las gu&iacute;as de abonados.";
 choices[94][1] = "A no figurar en las gu&iacute;as de abonados.";
 choices[94][2] = "A ambas.";
 choices[94][3] = "A ninguna.";
 answers[94] = choices[94][2];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11465. ";


//  Id pregunta: 11556 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la metodolog&iacute;a &aacute;gil SCRUM, aquella reuni&oacute;n que se lleva a cabo todos los d&iacute;as y en la que &uacute;nicamente un miembro de cada equipo participa, se denomina:";
 choices[95]= new Array();
 choices[95][0] = "Daily Scrum";
 choices[95][1] = "Srum de Scrum";
 choices[95][2] = "Sprint Review Meeting";
 choices[95][3] = "Sprint Retrospective";
 answers[95] = choices[95][1];
 units[95] = "79";
 comments[95] = "Id Pregunta: 11556. NULL";


//  Id pregunta: 11650 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El protocolo TCP se encuentra especificado en:";
 choices[96]= new Array();
 choices[96][0] = "RFC 793";
 choices[96][1] = "RFC 739";
 choices[96][2] = "RFC 791";
 choices[96][3] = "RFC 719";
 answers[96] = choices[96][0];
 units[96] = "100";
 comments[96] = "Id Pregunta: 11650. ";


//  Id pregunta: 11666 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  El perfil de XAdES en el que se a&ntilde;aden los certificados a los documentos firmados es:";
 choices[97]= new Array();
 choices[97][0] = "XAdES-A";
 choices[97][1] = "XAdES-C";
 choices[97][2] = "XAdES-X-L";
 choices[97][3] = "XAdES-X";
 answers[97] = choices[97][2];
 units[97] = "111";
 comments[97] = "Id Pregunta: 11666. ";


//  Id pregunta: 11675 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale la tecnolog&iacute;a que no hace uso de MIMO:";
 choices[98]= new Array();
 choices[98][0] = "HSPA+";
 choices[98][1] = "WiFi";
 choices[98][2] = "WiMAX";
 choices[98][3] = "Las 3 hacen uso de MIMO";
 answers[98] = choices[98][3];
 units[98] = "107, 108";
 comments[98] = "Id Pregunta: 11675. ";


//  Id pregunta: 11713 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes elementos es utilizado en las listas de acceso IP est&aacute;ndar como base para permitir o denegar paquetes?";
 choices[99]= new Array();
 choices[99][0] = "Direccion destino IP";
 choices[99][1] = "Direccion origen IP";
 choices[99][2] = "Protocolo";
 choices[99][3] = "Puerto";
 answers[99] = choices[99][1];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11713. NULL";


