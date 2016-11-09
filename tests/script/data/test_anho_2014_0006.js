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

//  Id pregunta: 9600 AÃ±o de creación de pregunta: 2014-01-01
 questions[0]= "1)  Marcar la respuesta correcta:";
 choices[0]= new Array();
 choices[0][0] = "UNIX se desarroll&oacute; a partir del sistema MINIX.";
 choices[0][1] = "El lenguaje original de desarrollo de UNIX era el B, posteriormente se desarroll&oacute; en C";
 choices[0][2] = " El n&uacute;cleo original del sistema operativo UNIX fue dise&ntilde;ado por A. Tanenbaum.";
 choices[0][3] = "Todas las anteriores son incorrectas";
 answers[0] = choices[0][1];
 units[0] = "53";
 comments[0] = "Id Pregunta: 9600. ";


//  Id pregunta: 9615 AÃ±o de creación de pregunta: 2014-01-01
 questions[1]= "2)  &iquest;C&oacute;mo se llama la interfaz gr&aacute;fica del sistema operativo Mac OS X?";
 choices[1]= new Array();
 choices[1][0] = "Safari";
 choices[1][1] = "Lion";
 choices[1][2] = "Aqua";
 choices[1][3] = "Terra";
 answers[1] = choices[1][2];
 units[1] = "52";
 comments[1] = "Id Pregunta: 9615. ";


//  Id pregunta: 9623 AÃ±o de creación de pregunta: 2014-01-01
 questions[2]= "3)  &iquest;En qu&eacute; consisten los segmentos de memoria virtual en el Sistema Operativo Windows?";
 choices[2]= new Array();
 choices[2][0] = "Bloques de memoria virtual de longitud variable que pertenecen al mismo proceso";
 choices[2][1] = "Bloques de memoria virtual de longitud fija que pertenecen al mismo proceso";
 choices[2][2] = "Bloques memoria virtual de longitud fija que no tienen relaci&oacute;n entre ellos";
 choices[2][3] = "Ninguno de los anteriores";
 answers[2] = choices[2][3];
 units[2] = "56";
 comments[2] = "Id Pregunta: 9623. Windows no usa memoria virtual segmentada, s&oacute;lo paginada";


//  Id pregunta: 9627 AÃ±o de creación de pregunta: 2014-01-01
 questions[3]= "4)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso del sistema que:";
 choices[3]= new Array();
 choices[3][0] = "Siempre se ejecuta en segundo plano (background)";
 choices[3][1] = "Siempre es de corta duraci&oacute;n";
 choices[3][2] = "Est&aacute; siempre ejecut&aacute;ndose";
 choices[3][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n. ";
 answers[3] = choices[3][0];
 units[3] = "53";
 comments[3] = "Id Pregunta: 9627. Examen TIC A1 2013";


//  Id pregunta: 9639 AÃ±o de creación de pregunta: 2014-01-01
 questions[4]= "5)  El funcionamiento de la Junta de Contrataci&oacute;n Centralizada se regula en:";
 choices[4]= new Array();
 choices[4][0] = "HAP/2027/2013";
 choices[4][1] = "HAP/2028/2013";
 choices[4][2] = "RD 695/2013";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][1];
 units[4] = "41";
 comments[4] = "Id Pregunta: 9639. NULL";


//  Id pregunta: 9648 AÃ±o de creación de pregunta: 2014-01-01
 questions[5]= "6)  Una licencia RISP debe reflejar:";
 choices[5]= new Array();
 choices[5][0] = "Finalidad concreta";
 choices[5][1] = "Duraci&oacute;n de la licencia";
 choices[5][2] = "Modalidades financieras";
 choices[5][3] = "Todas las anteriores";
 answers[5] = choices[5][3];
 units[5] = "22";
 comments[5] = "Id Pregunta: 9648. Debe reflejar: finalidad concreta (comercial o no comercial), duraci&oacute;n, obligaciones del beneficiario y del organismo cedente, responsabilidades de uso, modalidades financieras (gratuito, tasa o precio p&uacute;blico)";


//  Id pregunta: 9652 AÃ±o de creación de pregunta: 2014-01-01
 questions[6]= "7)  Entre las caracter&iacute;sticas del modelo de calidad de la ISO 9126 se encuentran:";
 choices[6]= new Array();
 choices[6][0] = "Funcionalidad";
 choices[6][1] = "Fiabilidad";
 choices[6][2] = "Portabilidad";
 choices[6][3] = "Todas las anteriores";
 answers[6] = choices[6][3];
 units[6] = "87";
 comments[6] = "Id Pregunta: 9652. Son 6, Funcionalidad, Fiabilidad, Usabilidad, Eficiencia, Mantenibilidad, Portabilidad";


//  Id pregunta: 9682 AÃ±o de creación de pregunta: 2014-01-01
 questions[7]= "8)  Son tipos de mapas:";
 choices[7]= new Array();
 choices[7][0] = "Topogr&aacute;fico, topol&oacute;gico, tem&aacute;tico y superficial.";
 choices[7][1] = "Topogr&aacute;fico, azimutal, tem&aacute;tico y plano.";
 choices[7][2] = "Referencial, topol&oacute;gico, tem&aacute;tico y plano. ";
 choices[7][3] = "Cil&iacute;ndrico, azimutal, c&oacute;nico y estereogr&aacute;fico.";
 answers[7] = choices[7][2];
 units[7] = "67";
 comments[7] = "Id Pregunta: 9682. NULL";


//  Id pregunta: 9688 AÃ±o de creación de pregunta: 2014-01-01
 questions[8]= "9)  Un almac&eacute;n de datos almacena:";
 choices[8]= new Array();
 choices[8][0] = "S&oacute;lo informaci&oacute;n actual.";
 choices[8][1] = "Informaci&oacute;n no vol&aacute;til.";
 choices[8][2] = "Informaci&oacute;n actual e hist&oacute;rica.";
 choices[8][3] = "B y C son correctas.";
 answers[8] = choices[8][2];
 units[8] = "68";
 comments[8] = "Id Pregunta: 9688. ";


//  Id pregunta: 9719 AÃ±o de creación de pregunta: 2014-01-01
 questions[9]= "10)  En Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaciones, CRUD";
 choices[9]= new Array();
 choices[9][0] = "es el acr&oacute;nimo de Crear, Leer/Obtener, Actualizar y Borrar (Create, Read/Retrieve, Update, Delete).";
 choices[9][1] = "es la base de arquitecturas Web RESTful (basadas en REST).";
 choices[9][2] = "tiene su origen en sentencias de base de datos relacionales.";
 choices[9][3] = "las opciones a, b y c son ciertas.";
 answers[9] = choices[9][3];
 units[9] = "58";
 comments[9] = "Id Pregunta: 9719. Examen TIC-A1 2013";


//  Id pregunta: 9720 AÃ±o de creación de pregunta: 2014-01-01
 questions[10]= "11)  Se&ntilde;ale cu&aacute;l de las siguientes formas de actuaci&oacute;n es la especificada para los sistemas de validaci&oacute;n de certificados de clave p&uacute;blica ITU-T X.509 v3.";
 choices[10]= new Array();
 choices[10][0] = "Si el sistema no reconoce una extensi&oacute;n cr&iacute;tica, debe ignorar la extensi&oacute;n y emitir un mensaje advirtiendo la existencia de una extensi&oacute;n cr&iacute;tica no procesable.";
 choices[10][1] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, debe procesar la extensi&oacute;n y emitir un mensaje indicando su cumplimiento o no.";
 choices[10][2] = "Si el sistema no reconoce una extensi&oacute;n no cr&iacute;tica, debe ignorar la extensi&oacute;n.";
 choices[10][3] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, es aceptable tanto ignorar como procesar la extensi&oacute;n (depender&aacute; de la implementaci&oacute;n concreta del sistema).";
 answers[10] = choices[10][2];
 units[10] = "73";
 comments[10] = "Id Pregunta: 9720. Examen TIC-A1 2013";


//  Id pregunta: 9722 AÃ±o de creación de pregunta: 2014-01-01
 questions[11]= "12)  El art&iacute;culo 5 de la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, establece la obligaci&oacute;n para los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, de conservar los datos (referidos en su art&iacute;culo 3), durante un plazo de";
 choices[11]= new Array();
 choices[11][0] = "48 meses.";
 choices[11][1] = "24 meses.";
 choices[11][2] = "12 meses.";
 choices[11][3] = "6 meses.";
 answers[11] = choices[11][2];
 units[11] = "30";
 comments[11] = "Id Pregunta: 9722. Examen TIC-A1 2013";


//  Id pregunta: 9725 AÃ±o de creación de pregunta: 2014-01-01
 questions[12]= "13)  Indique cu&aacute;l de los siguientes procesos se encuadra dentro del libro del ITIL denominado Service Support.";
 choices[12]= new Array();
 choices[12][0] = "Gesti&oacute;n de Problemas.";
 choices[12][1] = "Gesti&oacute;n de la Capacidad.";
 choices[12][2] = "Gesti&oacute;n de la Disponibilidad.";
 choices[12][3] = "Gesti&oacute;n Financiera.";
 answers[12] = choices[12][0];
 units[12] = "98";
 comments[12] = "Id Pregunta: 9725. Examen TIC-A1 2013";


//  Id pregunta: 9731 AÃ±o de creación de pregunta: 2014-01-01
 questions[13]= "14)  ANSI/ISO SQL define ciertos niveles de aislamiento en transacciones en funci&oacute;n de qu&eacute; fen&oacute;menos puede que ocurran. Indique la respuesta correcta respecto al fen&oacute;meno &quot;lectura fantasma&quot;:";
 choices[13]= new Array();
 choices[13][0] = "Se permite en read uncommitted, read committed y repeatable read, pero no se permite en serializable.";
 choices[13][1] = "Se permite en read uncommitted y read committed, pero no se permite en repeatable read ni en serializable.";
 choices[13][2] = "Se permite en read uncommitted y repeatable read, pero no se permite en read committed ni en serializable.";
 choices[13][3] = "Se permite en read uncommitted, pero no se permite en read committed, repeatable read ni en serializable.";
 answers[13] = choices[13][0];
 units[13] = "57";
 comments[13] = "Id Pregunta: 9731. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9746 AÃ±o de creación de pregunta: 2014-01-01
 questions[14]= "15)  COCOMO II est&aacute; formado por tres modelos o submodelos. &iquest;Cu&aacute;l de los siguientes NO es un modelo de COCOMO II?";
 choices[14]= new Array();
 choices[14][0] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n.";
 choices[14][1] = "Modelo de Reutilizaci&oacute;n de Objetos.";
 choices[14][2] = "Modelo de Dise&ntilde;o Preliminar.";
 choices[14][3] = "Modelo Post-Arquitectura.";
 answers[14] = choices[14][1];
 units[14] = "88";
 comments[14] = "Id Pregunta: 9746. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9748 AÃ±o de creación de pregunta: 2014-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes pautas est&aacute; asociada al principio &quot;comprensible&quot; de la WCAG 2.0?";
 choices[15]= new Array();
 choices[15][0] = "Alternativas textuales.";
 choices[15][1] = "Distinguible.";
 choices[15][2] = "Predecible.";
 choices[15][3] = "Compatible.";
 answers[15] = choices[15][2];
 units[15] = "39";
 comments[15] = "Id Pregunta: 9748. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9749 AÃ±o de creación de pregunta: 2014-01-01
 questions[16]= "17)  &iquest;En qu&eacute; ley se exige que se establezcan las medidas necesarias para incentivar el acceso a las telecomunicaciones en lengua de signos espa&ntilde;ola?";
 choices[16]= new Array();
 choices[16][0] = "Ley 30/92";
 choices[16][1] = "Ley 27/2007";
 choices[16][2] = "Ley 11/2007";
 choices[16][3] = "Ley 34/2002";
 answers[16] = choices[16][1];
 units[16] = "39";
 comments[16] = "Id Pregunta: 9749. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9759 AÃ±o de creación de pregunta: 2014-01-01
 questions[17]= "18)  Seg&uacute;n el RD Legislativo 3/2011, las garant&iacute;as se:";
 choices[17]= new Array();
 choices[17][0] = "Reponen";
 choices[17][1] = "Reajustan";
 choices[17][2] = "Devuelven o cancelan";
 choices[17][3] = "Todas las anteriores";
 answers[17] = choices[17][3];
 units[17] = "41";
 comments[17] = "Id Pregunta: 9759. Art. 99, Art. 102 RD Legislativo 3/2011";


//  Id pregunta: 9761 AÃ±o de creación de pregunta: 2014-01-01
 questions[18]= "19)  En el &aacute;mbito del sector p&uacute;blico estatal, las solicitudes de contratos basados en el acuerdo marco o de adjudicaciones de contratos realizadas en el marco del sistema din&aacute;mico de contrataci&oacute;n se tramitar&aacute;n:";
 choices[18]= new Array();
 choices[18][0] = "De la forma tradicional o a trav&eacute;s de la aplicaci&oacute;n CONECTA-CENTRALIZACI&Oacute;N";
 choices[18][1] = "Exclusivamente, a trav&eacute;s de la aplicaci&oacute;n inform&aacute;tica CONECTA CENTRALIZACI&Oacute;N a partir del 1 de enero de 2014.";
 choices[18][2] = "Mediante solicitud por escrito a la Direcci&oacute;n General de Patrimonio.";
 choices[18][3] = "Ninguna de las anteriores.";
 answers[18] = choices[18][1];
 units[18] = "41";
 comments[18] = "Id Pregunta: 9761. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. A&ntilde;adida por la orden HAP/19/2014";


//  Id pregunta: 9764 AÃ±o de creación de pregunta: 2014-01-01
 questions[19]= "20)  En M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes no es un perfil participante?";
 choices[19]= new Array();
 choices[19][0] = "Directivo";
 choices[19][1] = "Jefe de Proyecto";
 choices[19][2] = "Consultor";
 choices[19][3] = "Usuario experto";
 answers[19] = choices[19][3];
 units[19] = "86";
 comments[19] = "Id Pregunta: 9764. Seg&uacute;n M&eacute;trica v3, el usuario experto estar&iacute;a englobado en el perfil &quot;Directivo&quot;.";


//  Id pregunta: 9785 AÃ±o de creación de pregunta: 2014-01-01
 questions[20]= "21)  Seg&uacute;n Magerit v2, quien NO es un participante en un proyecto de an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[20]= new Array();
 choices[20][0] = "Comit&eacute; de Gesti&oacute;n.";
 choices[20][1] = "Grupos de Interlocutores.";
 choices[20][2] = "Comit&eacute; de Seguimiento.";
 choices[20][3] = "Equipo de Proyecto";
 answers[20] = choices[20][0];
 units[20] = "98";
 comments[20] = "Id Pregunta: 9785. Examen TIC A2 2013";


//  Id pregunta: 9790 AÃ±o de creación de pregunta: 2014-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l es el objetivo principal perseguido por un keylogger?";
 choices[21]= new Array();
 choices[21][0] = "&quot;Intercepci&oacute;n&quot; y captura de datos.";
 choices[21][1] = "Suplantaci&oacute;n de identidad. ";
 choices[21][2] = "Denegaci&oacute;n de servicio.";
 choices[21][3] = "Manipulaci&oacute;n de un recurso. ";
 answers[21] = choices[21][0];
 units[21] = "111";
 comments[21] = "Id Pregunta: 9790. Examen TIC A2 2013";


//  Id pregunta: 9791 AÃ±o de creación de pregunta: 2014-01-01
 questions[22]= "23)  En el contexto de la seguridad, el shoulder surfing consiste en:";
 choices[22]= new Array();
 choices[22][0] = "Espiar a los usuarios modificando los navegadores web para obtener sus claves de acceso.";
 choices[22][1] = "Uso de aplicaciones intermedias llamadas shoulders para la obtenci&oacute;n de los datos de navegaci&oacute;n.";
 choices[22][2] = "Espiar f&iacute;sicamente a los usuarios, para obtener generalmente claves de acceso al sistema.";
 choices[22][3] = "Es un sin&oacute;nimo del ataque man in the middle ";
 answers[22] = choices[22][2];
 units[22] = "111";
 comments[22] = "Id Pregunta: 9791. Examen TIC A2 2013";


//  Id pregunta: 9809 AÃ±o de creación de pregunta: 2014-01-01
 questions[23]= "24)  Seg&uacute;n M&eacute;trica v3, en el contexto del modelo entidad-relaci&oacute;n extendido, se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[23]= new Array();
 choices[23][0] = "La cardinalidad representa la participaci&oacute;n en la relaci&oacute;n de cada una de las entidades afectadas. ";
 choices[23][1] = "Un tipo de entidad describe el esquema o intensi&oacute;n para un conjunto de entidades que poseen la misma estructura. ";
 choices[23][2] = "Cuando las ocurrencias de una entidad no pueden existir si desaparece el ejemplar del tipo de entidad regular del cual depende, se dice que existe una dependencia en existencia. ";
 choices[23][3] = "La agregaci&oacute;n, consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian. ";
 answers[23] = choices[23][3];
 units[23] = "86";
 comments[23] = "Id Pregunta: 9809. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9810 AÃ±o de creación de pregunta: 2014-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes unidades de magnitud en relaci&oacute;n al almacenamiento de informaci&oacute;n es mayor?";
 choices[24]= new Array();
 choices[24][0] = "Pettabyte (PB).";
 choices[24][1] = "Terabyte (TB).";
 choices[24][2] = "Yottabyte (YB).";
 choices[24][3] = "Zettabyte (ZB).";
 answers[24] = choices[24][2];
 units[24] = "52";
 comments[24] = "Id Pregunta: 9810. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9841 AÃ±o de creación de pregunta: 2014-01-01
 questions[25]= "26)  Infraestructura de PKI. La autoridad de certificaci&oacute;n ra&iacute;z:";
 choices[25]= new Array();
 choices[25][0] = "No utiliza certificados digitales.";
 choices[25][1] = "Utiliza un certificado digital firmado por otra autoridad de certificaci&oacute;n.";
 choices[25][2] = "Utiliza un certifica digital autofirmado por ella misma.";
 choices[25][3] = "Utiliza un certificado digital emitido por la Administraci&oacute;n P&uacute;blica.";
 answers[25] = choices[25][2];
 units[25] = "111";
 comments[25] = "Id Pregunta: 9841. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9858 AÃ±o de creación de pregunta: 2014-01-01
 questions[26]= "27)  Si el usuario A desea enviar un documento firmado digitalmente por &eacute;l al usuario B:";
 choices[26]= new Array();
 choices[26][0] = "El usuario A debe enviar el documento acompa&ntilde;ado del documento cifrado con la clave p&uacute;blica de B.";
 choices[26][1] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave p&uacute;blica de B.";
 choices[26][2] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave privada de A.";
 choices[26][3] = "El usuario A debe enviar el documento cifrado con la clave p&uacute;blica de B acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y todo cifrado con la clave privada de A.";
 answers[26] = choices[26][2];
 units[26] = "111";
 comments[26] = "Id Pregunta: 9858. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9859 AÃ±o de creación de pregunta: 2014-01-01
 questions[27]= "28)  La informaci&oacute;n contenida en el chip del DNI electr&oacute;nico est&aacute; contenida en tres zonas con diferentes niveles de acceso. Indique qu&eacute; informaci&oacute;n est&aacute; contenida en la Zona de seguridad:";
 choices[27]= new Array();
 choices[27][0] = "Certificado de autenticaci&oacute;n";
 choices[27][1] = "Datos de filiaci&oacute;n del ciudadano.";
 choices[27][2] = "Claves Diffie-Hellman.";
 choices[27][3] = "Certificados X-509 de componente.";
 answers[27] = choices[27][1];
 units[27] = "111";
 comments[27] = "Id Pregunta: 9859. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9879 AÃ±o de creación de pregunta: 2014-01-01
 questions[28]= "29)  En el &aacute;mbito del dise&ntilde;o de sistemas software, la inyecci&oacute;n de dependencias";
 choices[28]= new Array();
 choices[28][0] = "aumenta el acoplamiento entre los m&oacute;dulos.";
 choices[28][1] = "es una forma de implementar el patr&oacute;n de Inversi&oacute;n de Control.";
 choices[28][2] = "facilita la detecci&oacute;n de errores (debugging) en tiempo de ejecuci&oacute;n";
 choices[28][3] = "es un patr&oacute;n de ataque que introduce (&ldquo;inyecta&rdquo;) c&oacute;digo malicioso para cambiar el curso de ejecuci&oacute;n.";
 answers[28] = choices[28][1];
 units[28] = "84";
 comments[28] = "Id Pregunta: 9879. TIC A1, Examen 2013";


//  Id pregunta: 9881 AÃ±o de creación de pregunta: 2014-01-01
 questions[29]= "30)  Se dispone de dos centros de proceso de datos (CPDs) separados una distancia de 80 km entre s&iacute;. En ambos CPDs se dispone de cabinas de almacenamiento SAN (Storage Area Network) que conforman un cluster geogr&aacute;fico entre s&iacute;. &iquest;Qu&eacute; tecnolog&iacute;a utilizar&iacute;a para unir ambas cabinas?";
 choices[29]= new Array();
 choices[29][0] = "CWDM, Coarse Wavelength Division Multiplexing.";
 choices[29][1] = "DWDM, Dense Wavelength Division Multiplexing.";
 choices[29][2] = "EWDM, Enhanced Wavelength Division Multiplexing.";
 choices[29][3] = "FWDM, Far Wavelength Division Multiplexing.";
 answers[29] = choices[29][1];
 units[29] = "99, 102";
 comments[29] = "Id Pregunta: 9881. TIC A1, Examen 2013";


//  Id pregunta: 9898 AÃ±o de creación de pregunta: 2014-01-01
 questions[30]= "31)  Tras la realizaci&oacute;n de un an&aacute;lisis de riesgos de acuerdo con MAGERIT 3.0, el informe que detalla los activos, sus dependencias, las dimensiones en que son valiosos y la estimaci&oacute;n de dicho valor, se denomina";
 choices[30]= new Array();
 choices[30][0] = "modelo de valor.";
 choices[30][1] = "declaraci&oacute;n de aplicabilidad.";
 choices[30][2] = "mapa de riesgos.";
 choices[30][3] = "estado de riesgo.";
 answers[30] = choices[30][0];
 units[30] = "31,32,33";
 comments[30] = "Id Pregunta: 9898. TIC A1, Examen 2013";


//  Id pregunta: 9904 AÃ±o de creación de pregunta: 2014-01-01
 questions[31]= "32)  Seg&uacute;n M&eacute;trica v3, los flujos que interconectan actividades en la t&eacute;cnica SADT (Structured Analysis and Design Technique) se pueden clasificar en 4 tipos, se&ntilde;ale cu&aacute;l de los siguientes flujos NO es correcto:";
 choices[31]= new Array();
 choices[31][0] = "Control.";
 choices[31][1] = "Transacci&oacute;n.";
 choices[31][2] = "Mecanismo.";
 choices[31][3] = "Entrada.";
 answers[31] = choices[31][1];
 units[31] = "86";
 comments[31] = "Id Pregunta: 9904. TIC A2, Examen 2013";


//  Id pregunta: 9924 AÃ±o de creación de pregunta: 2014-01-01
 questions[32]= "33)  En una base de datos relacional en la que se tiene informaci&oacute;n guardada en una tabla de provincias y adem&aacute;s se dispone de una tabla de municipios donde parte de la clave es la provincia, &iquest;se puede borrar un elemento de la tabla de provincias manteniendo la integridad del sistema?";
 choices[32]= new Array();
 choices[32][0] = "Si, una vez que los municipios ya existen no hay ning&uacute;n problema.";
 choices[32][1] = "Si, aunque no podr&iacute;a dar de alta nuevos municipios de esa provincia.";
 choices[32][2] = "S&oacute;lo si no hay ninguna poblaci&oacute;n perteneciente a esa provincia.";
 choices[32][3] = "No, la tabla de provincias no puede cambiar ya que son un elemento estable.";
 answers[32] = choices[32][2];
 units[32] = "58";
 comments[32] = "Id Pregunta: 9924. TIC A2, Examen 2013";


//  Id pregunta: 9926 AÃ±o de creación de pregunta: 2014-01-01
 questions[33]= "34)  En relaci&oacute;n con el campo TTL, indique la falsa:";
 choices[33]= new Array();
 choices[33][0] = "Sirve para limitar la vida de un paquete. ";
 choices[33][1] = "Evita que los paquetes est&eacute;n dando vueltas eternamente por la red.";
 choices[33][2] = "Permite una vida m&aacute;xima de 512 segundos.";
 choices[33][3] = "En la pr&aacute;ctica, cuenta saltos.";
 answers[33] = choices[33][2];
 units[33] = "100";
 comments[33] = "Id Pregunta: 9926. NULL";


//  Id pregunta: 9930 AÃ±o de creación de pregunta: 2014-01-01
 questions[34]= "35)  &iquest;Qu&eacute; ASE (Elemento de Servicio de Aplicaci&oacute;n) usan todas las aplicaciones?";
 choices[34]= new Array();
 choices[34][0] = "ACSE (Association Control Service Element).";
 choices[34][1] = "RTSE (Reliable Transfer Service Element).";
 choices[34][2] = "ROSE (Remote Operation Service Element).";
 choices[34][3] = "ATSE (Application Transfer Service Element).";
 answers[34] = choices[34][0];
 units[34] = "100";
 comments[34] = "Id Pregunta: 9930. NULL";


//  Id pregunta: 9944 AÃ±o de creación de pregunta: 2014-01-01
 questions[35]= "36)  Se&ntilde;ale la respuesta correcta. En la programaci&oacute;n orientada a objetos en Java, s&iacute; una clase hereda de otra clase un m&eacute;todo abstracto:";
 choices[35]= new Array();
 choices[35][0] = "Tiene que implementar ese m&eacute;todo, si no es as&iacute;,la clase que hereda deber&aacute; ser definida abstracta. ";
 choices[35][1] = "Puede usar el m&eacute;todo de la clase de la que ha heredado.";
 choices[35][2] = "Puede usar el m&eacute;todo de la clase de la que ha heredado siempre que est&eacute; declarado como public. ";
 choices[35][3] = "No se puede heredar de una clase que tenga alg&uacute;n m&eacute;todo abstracto. ";
 answers[35] = choices[35][0];
 units[35] = "82, 60";
 comments[35] = "Id Pregunta: 9944. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9969 AÃ±o de creación de pregunta: 2014-01-01
 questions[36]= "37)  De las siguientes afirmaciones sobre XPDL seleccione la INCORRECTA:";
 choices[36]= new Array();
 choices[36][0] = "Permite escribir especificaciones de procesos Workflow de manera estandarizada";
 choices[36][1] = "Permite una representaci&oacute;n gr&aacute;fica de los procesos incluyendo coordenadas X e Y para cada nodo implementado.";
 choices[36][2] = "Proporciona una notaci&oacute;n gr&aacute;fica para facilitar la comunicaci&oacute;n humana entre usuarios";
 choices[36][3] = "Es un lenguaje de definici&oacute;n de Workflow creado por OASIS";
 answers[36] = choices[36][3];
 units[36] = "71";
 comments[36] = "Id Pregunta: 9969. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9972 AÃ±o de creación de pregunta: 2014-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes se corresponde con un m&oacute;dulo dentro de un ERP (Enterprise Resource Planning)?";
 choices[37]= new Array();
 choices[37][0] = "Recursos Humanos";
 choices[37][1] = "Planificaci&oacute;n Estrat&eacute;gica";
 choices[37][2] = "Seguridad de Informaci&oacute;n";
 choices[37][3] = "HelpDesk";
 answers[37] = choices[37][0];
 units[37] = "65";
 comments[37] = "Id Pregunta: 9972. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 9983 AÃ±o de creación de pregunta: 2014-01-01
 questions[38]= "39)  No es cierto sobre la tecnolog&iacute;a de p&aacute;ginas web de Microsoft (ASP y ASP.Net):";
 choices[38]= new Array();
 choices[38][0] = "Una p&aacute;gina ASP puede escribirse con Java Script";
 choices[38][1] = "ASP se ejecuta del lado del servidor bajo IIS o motores PHT compatibles con ASP";
 choices[38][2] = "ASP.NET es una tecnolog&iacute;a orientada o objetos que se ejecuta del lado del servidor";
 choices[38][3] = "Una p&aacute;gina ASP puede escribirse con Visual Basic Script";
 answers[38] = choices[38][1];
 units[38] = "59,115";
 comments[38] = "Id Pregunta: 9983. Examen T&eacute;cnico especialista inform&aacute;tica, Servicio Salud C&aacute;ntabro, 2011";


//  Id pregunta: 10002 AÃ±o de creación de pregunta: 2014-01-01
 questions[39]= "40)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso delsistema que";
 choices[39]= new Array();
 choices[39][0] = "siempre se ejecuta en segundo plano (background).";
 choices[39][1] = "siempre es de corta duraci&oacute;n.";
 choices[39][2] = "est&aacute; siempre ejecut&aacute;ndose.";
 choices[39][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n.";
 answers[39] = choices[39][0];
 units[39] = "53";
 comments[39] = "Id Pregunta: 10002. ";


//  Id pregunta: 10005 AÃ±o de creación de pregunta: 2014-01-01
 questions[40]= "41)  Microsoft ActiveX Data Objects de la plataforma .NET";
 choices[40]= new Array();
 choices[40][0] = "permite trabajar desconectado del origen de datos.";
 choices[40][1] = "no se integra con XML.";
 choices[40][2] = "es el precursor de RDO ( Remote Data Objects).";
 choices[40][3] = "utiliza una forma secuencial de navegaci&oacute;n para acceder a las filas de una tabla.";
 answers[40] = choices[40][0];
 units[40] = "59, 114";
 comments[40] = "Id Pregunta: 10005. ";


//  Id pregunta: 10006 AÃ±o de creación de pregunta: 2014-01-01
 questions[41]= "42)  En el &aacute;mbito del Real Decreto 772/1999, de 7 de mayo, en la redacci&oacute;n dada por el Real Decreto 209/2003, de 21 de febrero, por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos, NO es una funci&oacute;n propia de los registros telem&aacute;ticos";
 choices[41]= new Array();
 choices[41][0] = "la recepci&oacute;n de solicitudes, escritos y comunicaciones.";
 choices[41][1] = "la remisi&oacute;n de las solicitudes, escritos y comunicaciones recibidas.";
 choices[41][2] = "la expedici&oacute;n de copias selladas o compulsadas de los documentos que, en su caso, se transmitan junto con la solicitud, escrito o comunicaci&oacute;n.";
 choices[41][3] = "la anotaci&oacute;n de los correspondientes asientos de entrada y salida.";
 answers[41] = choices[41][2];
 units[41] = "43";
 comments[41] = "Id Pregunta: 10006. ";


//  Id pregunta: 10010 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  &iquest;Qu&eacute; modelo de recuperaci&oacute;n de informaci&oacute;n se basa en el Teorema de Bayes?a) Vectorial.X b) Probabil&iacute;stico.c) Indexaci&oacute;n por Sem&aacute;ntica Latente.d) Basado en la teor&iacute;a de conjuntos.";
 choices[42]= new Array();
 choices[42][0] = "Vectorial.";
 choices[42][1] = "Probabil&iacute;stico.";
 choices[42][2] = "Indexaci&oacute;n por Sem&aacute;ntica Latente.";
 choices[42][3] = "Basado en la teor&iacute;a de conjuntos.";
 answers[42] = choices[42][1];
 units[42] = "96";
 comments[42] = "Id Pregunta: 10010. ";


//  Id pregunta: 10014 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  El t&eacute;rmino anglosaj&oacute;n &quot;ACID&quot; relacionado con una transacci&oacute;n de base de datos se corresponde con las propiedades:";
 choices[43]= new Array();
 choices[43][0] = "Autentication, Consistency, Integrity, Durability.";
 choices[43][1] = "Atomicity, Confidentiality, Identification, Durability.";
 choices[43][2] = "Atomicity, Consistency, Isolation, Durability.";
 choices[43][3] = "Availability, Consistency, Isolation, Durability.";
 answers[43] = choices[43][2];
 units[43] = "57";
 comments[43] = "Id Pregunta: 10014. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10016 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  La instrucci&oacute;n que aborta la transacci&oacute;n en un SGBD y la hace terminar en forma no exitosa se denomina:";
 choices[44]= new Array();
 choices[44][0] = "Undo.";
 choices[44][1] = "Rollback.";
 choices[44][2] = "Two Phase Commit.";
 choices[44][3] = "Commit.";
 answers[44] = choices[44][1];
 units[44] = "57";
 comments[44] = "Id Pregunta: 10016. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10022 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  Indique cu&aacute;l de los siguientes diagramas de descomposici&oacute;n NO se contempla como t&eacute;cnica en M&eacute;trica v3:";
 choices[45]= new Array();
 choices[45][0] = "Funcional.";
 choices[45][1] = "Organizativo.";
 choices[45][2] = "L&oacute;gico.";
 choices[45][3] = "En Di&aacute;logos.";
 answers[45] = choices[45][2];
 units[45] = "86";
 comments[45] = "Id Pregunta: 10022. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10025 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  Se&ntilde;ale cu&aacute;l de las siguientes opciones se ajusta a la siguiente definici&oacute;n: plataforma basada en Java que permite crear rich internet applications (RIA) que se comportan de la misma forma en distintas plataformas:";
 choices[46]= new Array();
 choices[46][0] = "Flex";
 choices[46][1] = "JavaFX";
 choices[46][2] = "AJAX";
 choices[46][3] = "Silverlight";
 answers[46] = choices[46][1];
 units[46] = "116";
 comments[46] = "Id Pregunta: 10025. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10026 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  El Entity Framework es:";
 choices[47]= new Array();
 choices[47][0] = "Un framework ORM (object-relational mapper) desarrollado por Microsoft e integrado en la plataforma .NET.";
 choices[47][1] = "Una utilidad que permite identificar las funcionalidades de un sistema inform&aacute;tico.";
 choices[47][2] = "Una herramienta de planificaci&oacute;n y gesti&oacute;n del software desarrollado por Microsoft.";
 choices[47][3] = "Un framework orientado a la realizaci&oacute;n de aplicaciones web implementado por Microsoft que respecta el modelo vista controlador.";
 answers[47] = choices[47][0];
 units[47] = "59";
 comments[47] = "Id Pregunta: 10026. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10033 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  De las siguientes cabeceras IPv6 (RFC 2460), &iquest;cu&aacute;l de las siguientes cabeceras NO es de extensi&oacute;n?";
 choices[48]= new Array();
 choices[48][0] = "Fragmentacion. ";
 choices[48][1] = "Opciones de salto a salto.";
 choices[48][2] = "Autenticaci&oacute;n. ";
 choices[48][3] = "L&iacute;mite de saltos.";
 answers[48] = choices[48][3];
 units[48] = "100";
 comments[48] = "Id Pregunta: 10033. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10039 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  &iquest;De qu&eacute; tipo es la direcci&oacute;n de IPv6 ff00::/8?";
 choices[49]= new Array();
 choices[49][0] = "No es v&aacute;lida.";
 choices[49][1] = "Unicast.";
 choices[49][2] = "Multicast. ";
 choices[49][3] = "Loopback.";
 answers[49] = choices[49][2];
 units[49] = "100";
 comments[49] = "Id Pregunta: 10039. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10058 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  En las comunicaciones a trav&eacute;s de sockets, &iquest;cu&aacute;l de las siguientes NO se corresponde con una primitiva?";
 choices[50]= new Array();
 choices[50][0] = "Bind ";
 choices[50][1] = "Listen";
 choices[50][2] = "Reject ";
 choices[50][3] = "Socket";
 answers[50] = choices[50][2];
 units[50] = "100";
 comments[50] = "Id Pregunta: 10058. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  SAFER (Secure And Fast Encryption Routine) es un algoritmo de cifrado:";
 choices[51]= new Array();
 choices[51][0] = "Sim&eacute;trico de bloques.";
 choices[51][1] = "Sim&eacute;trico de flujo.";
 choices[51][2] = "Asim&eacute;trico de factorizaci&oacute;n entera.";
 choices[51][3] = "Asim&eacute;trico de logaritmo discreto.";
 answers[51] = choices[51][0];
 units[51] = "72";
 comments[51] = "Id Pregunta: 10065. TIC A2, libre, Examen 2013";


//  Id pregunta: 10073 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  Sobre LTE (Long Term Evolution) es cierto que:";
 choices[52]= new Array();
 choices[52][0] = "Se conoce comercialmente como Generaci&oacute;n 3.0 G.";
 choices[52][1] = "Utiliza multiplexaci&oacute;n OFDM (Orthogonal frequency-division multiplexing) en el enlace descendente.";
 choices[52][2] = "Abandona el uso de antenas MIMO de la generaci&oacute;n anterior.";
 choices[52][3] = "Es un est&aacute;ndar norteamericano incompatible en Europa.";
 answers[52] = choices[52][1];
 units[52] = "107";
 comments[52] = "Id Pregunta: 10073. TIC A2, libre, Examen 2013";


//  Id pregunta: 10074 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  Se&ntilde;ale cuales de las siguiente afirmaciones NO es una caracter&iacute;stica del protocolo EAP-TTLS:";
 choices[53]= new Array();
 choices[53][0] = "En la creaci&oacute;n del t&uacute;nel TLS el servidor se autentica mediante certificado.";
 choices[53][1] = "El cliente puede usar un m&eacute;todo de autenticaci&oacute;n distinto a EAP.";
 choices[53][2] = "Est&aacute; soportado de forma nativa en sistemas operativos Windows 7.";
 choices[53][3] = "Los mensajes de autenticaci&oacute;n del cliente son enviados cifrados al servidor.";
 answers[53] = choices[53][2];
 units[53] = "111";
 comments[53] = "Id Pregunta: 10074. TIC A2, libre, examen 2013";


//  Id pregunta: 10076 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  Los t&eacute;rminos scatternet y piconet est&aacute;n relacionados con la tecnolog&iacute;a:";
 choices[54]= new Array();
 choices[54][0] = "RDSI ";
 choices[54][1] = "Bluetooth";
 choices[54][2] = "DECT ";
 choices[54][3] = "Wimax";
 answers[54] = choices[54][1];
 units[54] = "107";
 comments[54] = "Id Pregunta: 10076. TIC A2, libre, Examen 2013";


//  Id pregunta: 10095 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  En relaci&oacute;n con el producto ERS en METRICA v.3:";
 choices[55]= new Array();
 choices[55][0] = "La ERS la obtienen los analistas en ASI 9.";
 choices[55][1] = "La ERS la obtienen los analistas en ASI 2.";
 choices[55][2] = "La ERS la obtienen los analistas y usuarios expertos en ASI 9.";
 choices[55][3] = "La ERS la obtienen los analistas y usuarios expertos en ASI 2.";
 answers[55] = choices[55][0];
 units[55] = "78";
 comments[55] = "Id Pregunta: 10095. NULL";


//  Id pregunta: 10097 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  De acuerdo a M&eacute;trica v.3, la pr&aacute;ctica JAD disitngue distinto perfiles. &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[56]= new Array();
 choices[56][0] = "Moderador (l&iacute;der Jad)";
 choices[56][1] = "Desarrolladores";
 choices[56][2] = "Usuarios";
 choices[56][3] = "Analistas";
 answers[56] = choices[56][3];
 units[56] = "78";
 comments[56] = "Id Pregunta: 10097. NULL";


//  Id pregunta: 10101 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  En el an&aacute;lisis estructurado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[57]= new Array();
 choices[57][0] = "El Diccionario de Datos suele estar orientado a los desarrolladores.";
 choices[57][1] = "El Diccionario de Datos suele estar orientado a los usuarios.";
 choices[57][2] = "El Directorio de Datos suele estar orientado a los desarrolladores.";
 choices[57][3] = "La b) y la c) son correctas.";
 answers[57] = choices[57][3];
 units[57] = "81";
 comments[57] = "Id Pregunta: 10101. NULL";


//  Id pregunta: 10125 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  La red TESTA tiene el rango de direcciones:";
 choices[58]= new Array();
 choices[58][0] = "10.0.0.0";
 choices[58][1] = "192.0.0.0";
 choices[58][2] = "62.0.0.0";
 choices[58][3] = "62.62.0.0";
 answers[58] = choices[58][3];
 units[58] = "103";
 comments[58] = "Id Pregunta: 10125. ";


//  Id pregunta: 10134 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  &iquest;El reglamento de Infraestructuras Comunes de Telecomunicaci&oacute;n se encuentra recogido en?:";
 choices[59]= new Array();
 choices[59][0] = "El Real Decreto 920 / 2006";
 choices[59][1] = "El Real Decreto 346 / 2011";
 choices[59][2] = "El Real Decreto 401 / 2003";
 choices[59][3] = "Ninguno de los anteriores";
 answers[59] = choices[59][1];
 units[59] = "105";
 comments[59] = "Id Pregunta: 10134. ";


//  Id pregunta: 10156 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  Seg&uacute;n la  Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[60]= new Array();
 choices[60][0] = "En el acceso a la Plataforma de intermediaci&oacute;n de datos del Ministerio de Hacienda y Administraciones P&uacute;blicas se utilizar&aacute; la Red SARA";
 choices[60][1] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas garantizar&aacute; interoperabilidad, disponibilidad, fiabilidad y seguridad";
 choices[60][2] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas almacenar&aacute; el contenido del intercambio para garantizar la trazabilidad";
 choices[60][3] = "El Cedente podr&aacute; auditar la cesi&oacute;n de datos para comprobar el cumplimiento de los requisitos a que pudiera &eacute;sta estar sujeta";
 answers[60] = choices[60][2];
 units[60] = "43";
 comments[60] = "Id Pregunta: 10156. ";


//  Id pregunta: 10161 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con el c&aacute;lculo relacional?";
 choices[61]= new Array();
 choices[61][0] = "Lenguaje formal de consulta / acceso a un modelo relacional basado en la teor&iacute;a de conjuntos";
 choices[61][1] = "Lenguaje te&oacute;rico y de car&aacute;cter procedural que define un conjunto de operaciones aplicables sobre un modelo relacional";
 choices[61][2] = "Formalismo para expresar operaciones de consulta / acceso a un modelo relacional basado en la l&oacute;gica de predicados";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = choices[61][2];
 units[61] = "58";
 comments[61] = "Id Pregunta: 10161. ";


//  Id pregunta: 10162 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  Un dominio en un modelo relacional&hellip;";
 choices[62]= new Array();
 choices[62][0] = "Puede definirse por intensi&oacute;n, es decir, especificando tipo de datos y restricciones";
 choices[62][1] = "Es un conjunto nominado, infinito y homog&eacute;neo de valores at&oacute;micos";
 choices[62][2] = "S&oacute;lo puede definirse por extensi&oacute;n o enumeraci&oacute;n de los posibles valores del dominio";
 choices[62][3] = "Todas las anteriores";
 answers[62] = choices[62][0];
 units[62] = "58";
 comments[62] = "Id Pregunta: 10162. ";


//  Id pregunta: 10176 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  El uso del paradigma de OO se caracteriza por&hellip;.";
 choices[63]= new Array();
 choices[63][0] = "&hellip; el bajo acoplamiento y fuerte cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[63][1] = "&hellip; el alto acoplamiento y d&eacute;bil cohesi&oacute;n interna de los m&oacute;dulos (clases)";
 choices[63][2] = "La Reusabilidad no se encuentra entre sus objetivos";
 choices[63][3] = "La mayor dificultad de la programaci&oacute;n OO reduce la mantenibilidad y modificabilidad de los programas";
 answers[63] = choices[63][0];
 units[63] = "82";
 comments[63] = "Id Pregunta: 10176. ";


//  Id pregunta: 10202 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[64]= new Array();
 choices[64][0] = "Para el canal de subida utiliza la modulaci&oacute;n SD-FDMA y para el de bajada, OFDMA";
 choices[64][1] = "Utiliza IMS (IP Multimedia Subsystem) para transmitir informaci&oacute;n multimedia sobre IP";
 choices[64][2] = "Es compatible con las redes IEEE 802.16e";
 choices[64][3] = "Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B";
 answers[64] = choices[64][2];
 units[64] = "108";
 comments[64] = "Id Pregunta: 10202. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m";


//  Id pregunta: 10231 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Un servlet encuentra una excepci&oacute;n mientras procesa una petici&oacute;n. &iquest;Qu&eacute; m&eacute;todo usar&aacute;s para enviar una respuesta de error al navegador?:";
 choices[65]= new Array();
 choices[65][0] = "sendError(int errorCode) de HttpServlet";
 choices[65][1] = "sendError(int errorCode) de HttpServletRequest";
 choices[65][2] = "sendError(int errorCode) de HttpServletResponse";
 choices[65][3] = "sendError(String errorMsg) de HttpServletRequest";
 answers[65] = choices[65][2];
 units[65] = "116";
 comments[65] = "Id Pregunta: 10231. NULL";


//  Id pregunta: 10240 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Una vez creado un objeto StringTokenizer, cu&aacute;l es el m&eacute;todo que nos permite ir avanzando hasta el siguiente elemento del String:";
 choices[66]= new Array();
 choices[66][0] = "next()";
 choices[66][1] = "nextValue()";
 choices[66][2] = "nextToken()";
 choices[66][3] = "Ninguno de los anteriores";
 answers[66] = choices[66][2];
 units[66] = "60";
 comments[66] = "Id Pregunta: 10240. NULL";


//  Id pregunta: 10257 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  En referencia al tratamiento de datos de car&aacute;cter personal, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[67]= new Array();
 choices[67][0] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que no obran en su poder datos personales del solicitante";
 choices[67][1] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que, de obrar en su poder datos personales del solicitante, &eacute;stos no son datos especialmente protegidos";
 choices[67][2] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso";
 choices[67][3] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso si los datos se refieren a menores, no siendo obligatorio responder en otros casos";
 answers[67] = choices[67][2];
 units[67] = "29";
 comments[67] = "Id Pregunta: 10257. Art&iacute;culo 25.2 del RD 1720/2007";


//  Id pregunta: 10261 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  En cuanto al registro de ficheros en el Registro General de Protecci&oacute;n de Datos";
 choices[68]= new Array();
 choices[68][0] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad privada y en todo caso para los de titularidad p&uacute;blica";
 choices[68][1] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad p&uacute;blica y en todo caso para los de titularidad privada";
 choices[68][2] = "Es obligatorio para todo fichero que contenga datos de car&aacute;cter personal";
 choices[68][3] = "No es obligatorio en ning&uacute;n caso";
 answers[68] = choices[68][2];
 units[68] = "29";
 comments[68] = "Id Pregunta: 10261. Art&iacute;culo 55.1 y 55.2 del RD 1720/2007";


//  Id pregunta: 10282 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  En el &aacute;mbito de las bases de datos Oracle una vista materializada:";
 choices[69]= new Array();
 choices[69][0] = "Es un objeto de la base de datos donde se almacena la informaci&oacute;n de todas las vistas de la BD.";
 choices[69][1] = "Es un objeto de la base de datos donde se almacena la definici&oacute;n de la tabla que materializa.";
 choices[69][2] = "Es un objeto de la base de datos donde se almacena el resultado de una consulta.";
 choices[69][3] = "Es una vista ordinaria que autom&aacute;ticamente se actualizar&aacute; siempre que se actualicen las tablas involucradas en esa vista.";
 answers[69] = choices[69][2];
 units[69] = "58";
 comments[69] = "Id Pregunta: 10282. TIC A2, libre, examen 2013";


//  Id pregunta: 10287 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  En la herramienta de control de versiones Subversion, &iquest;con que comando se suben los cambios al repositorio?";
 choices[70]= new Array();
 choices[70][0] = "svn commit";
 choices[70][1] = "svn checkin";
 choices[70][2] = "svn checkout";
 choices[70][3] = "svn upload";
 answers[70] = choices[70][0];
 units[70] = "78";
 comments[70] = "Id Pregunta: 10287. TIC A2, libre, examen 2013";


//  Id pregunta: 10290 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Indique cu&aacute;l de los siguientes NO es un mecanismo en la gesti&oacute;n de una SAN para incrementar la seguridad:";
 choices[71]= new Array();
 choices[71][0] = "Masking";
 choices[71][1] = "Cluning";
 choices[71][2] = "Zoning";
 choices[71][3] = "Port Binding";
 answers[71] = choices[71][1];
 units[71] = "48";
 comments[71] = "Id Pregunta: 10290. TIC A2, libre, examen 2013";


//  Id pregunta: 10295 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l es el grupo de trabajo correspondiente al est&aacute;ndar WRAN (Wireless Regional Area Network)?:";
 choices[72]= new Array();
 choices[72][0] = "802.19";
 choices[72][1] = "802.20";
 choices[72][2] = "802.21";
 choices[72][3] = "802.22";
 answers[72] = choices[72][3];
 units[72] = "107";
 comments[72] = "Id Pregunta: 10295. TIC A2, libre, examen 2013";


//  Id pregunta: 10315 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Los conectores LC son:";
 choices[73]= new Array();
 choices[73][0] = "Conectores para PCI.";
 choices[73][1] = "Conectores de par trenzado.";
 choices[73][2] = "Conectores exclusivos para Mainframe.";
 choices[73][3] = "Conectores de fibra &oacute;ptica.";
 answers[73] = choices[73][3];
 units[73] = "99";
 comments[73] = "Id Pregunta: 10315. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10316 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cu&aacute;ntos bytes utiliza la trama de Ethernet (IEEE 802.3-2012) para el c&oacute;digo de redundancia c&iacute;clica?";
 choices[74]= new Array();
 choices[74][0] = "4 bytes.";
 choices[74][1] = "6 bytes.";
 choices[74][2] = "12 bytes.";
 choices[74][3] = "Ethernet no utiliza ning&uacute;n c&oacute;digo de redundancia c&iacute;clica.";
 answers[74] = choices[74][0];
 units[74] = "101";
 comments[74] = "Id Pregunta: 10316. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10327 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Cual no es un lenguaje de scripting?";
 choices[75]= new Array();
 choices[75][0] = "JScript";
 choices[75][1] = "Node.js";
 choices[75][2] = "Groovy";
 choices[75][3] = "Hack";
 answers[75] = choices[75][1];
 units[75] = "114";
 comments[75] = "Id Pregunta: 10327. Node.js es un entorno de desarrollo, no un lenguaje";


//  Id pregunta: 10348 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;C&oacute;mo se llama la organizaci&oacute;n que desarrolla est&aacute;ndares abiertos para la industria de la telefon&iacute;a m&oacute;vil?";
 choices[76]= new Array();
 choices[76][0] = "BSA (Business  Software Alliance)";
 choices[76][1] = "OpenMG (Open Mobile Group)";
 choices[76][2] = "OMA (Open Mobile Alliance)";
 choices[76][3] = "The Open Group";
 answers[76] = choices[76][2];
 units[76] = "37";
 comments[76] = "Id Pregunta: 10348. La OMA est&aacute; integrada, entre otros, por operadores de telefon&iacute;a m&oacute;vil, y provedores de aplicaciones y contenidos para m&oacute;viles";


//  Id pregunta: 10370 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Al margen de consideraciones ajenas al departamento de TI (pol&iacute;ticas, organizativas, presupuestarias, etc.), la principal causa de fracaso de los proyectos de desarrollo de software es debido a:";
 choices[77]= new Array();
 choices[77][0] = "La mala gesti&oacute;n de los requisitos en la determinaci&oacute;n del alcance en la fase inicial del proyecto y en la gesti&oacute;n de los cambios del alcance una vez est&aacute; el proyecto en ejecuci&oacute;n";
 choices[77][1] = "La falta de buenos desarrolladores en las tecnolog&iacute;as modernas";
 choices[77][2] = "Es dif&iacute;cil realizar una estimaci&oacute;n del esfuerzo del proyecto porque las m&eacute;tricas estaban enfocadas a l&iacute;neas de c&oacute;digo en lenguajes estructurados pero en la actualidad es imposible realizar estimaciones an&aacute;logas con lenguajes modernos (no tiene sentido medir l&iacute;neas de c&oacute;digo en Java)";
 choices[77][3] = "Se abusa de la subcontrataci&oacute;n del software y se realiza mala gesti&oacute;n de proyectos por dicha causa.";
 answers[77] = choices[77][0];
 units[77] = "28";
 comments[77] = "Id Pregunta: 10370. ";


//  Id pregunta: 10371 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Se&ntilde;ale cu&aacute;l de los siguientes no puede considerarse un riesgo que puede limitar el &eacute;xito un proyecto de ingenier&iacute;a de software:";
 choices[78]= new Array();
 choices[78][0] = "Excesiva rotaci&oacute;n de personal en la division encargada del desarrollo";
 choices[78][1] = "Al servidor de Eclipse le falta un parche de seguridad y pueden atacarlo";
 choices[78][2] = "El cliente no habla nuestro idioma ni el ingl&eacute;s y tenemos un traductor no muy experto, a menudo hay confusi&oacute;n entre lo que nos pide y lo que entendemos.";
 choices[78][3] = "Se va a usar una tecnolog&iacute;a de desarrollo de la que apenas haya conocimiento y referencia de proyectos exitosos con la misma";
 answers[78] = choices[78][1];
 units[78] = "28";
 comments[78] = "Id Pregunta: 10371. ";


//  Id pregunta: 10376 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Si un intruso intenta cotillear (eavesdropping) durante el proceso de generaci&oacute;n de las claves generadas por criptograf&iacute;a cu&aacute;ntica:";
 choices[79]= new Array();
 choices[79][0] = "El sistema lo rechaza";
 choices[79][1] = "Las claves generadas se ve alteradas y el intruso es informado de que su intento de interceptaci&oacute;n no ha tenido &eacute;xito";
 choices[79][2] = "Al intentar usar las claves interceptadas le propone el sistema un challenge o desaf&iacute;o adicional";
 choices[79][3] = "S&oacute;lo puede hacerlo si se usan cifradores de flujo";
 answers[79] = choices[79][1];
 units[79] = "72";
 comments[79] = "Id Pregunta: 10376. ";


//  Id pregunta: 10442 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes? ";
 choices[80]= new Array();
 choices[80][0] = "Kexi.";
 choices[80][1] = "Kivio.";
 choices[80][2] = "Konqueror.";
 choices[80][3] = "Kugar.";
 answers[80] = choices[80][3];
 units[80] = "54";
 comments[80] = "Id Pregunta: 10442. Examen TIC A1 2013";


//  Id pregunta: 10443 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 indicar en cu&aacute;l de las siguientes tareas de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n NO participa el Comit&eacute; de Direcci&oacute;n. ";
 choices[81]= new Array();
 choices[81][0] = "Identificaci&oacute;n del Alcance del Plan de Sistemas de Informaci&oacute;n.";
 choices[81][1] = "Comunicaci&oacute;n del Plan de Trabajo.";
 choices[81][2] = "Selecci&oacute;n de la Arquitectura Tecnol&oacute;gica. ";
 choices[81][3] = "Evaluaci&oacute;n y Mejora de la Propuesta.";
 answers[81] = choices[81][2];
 units[81] = "86";
 comments[81] = "Id Pregunta: 10443. Examen TIC A1 2013";


//  Id pregunta: 10446 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  De acuerdo con la Ley Org&aacute;nica 15/1999, de protecci&oacute;n de datos de car&aacute;cter personal, los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal ";
 choices[82]= new Array();
 choices[82][0] = "est&aacute;n en su totalidad excluidos del r&eacute;gimen general de esa Ley.";
 choices[82][1] = "no pueden recoger m&aacute;s datos que los autorizados por el Juez instructor de la causa penal. ";
 choices[82][2] = "pueden recoger datos personales sin consentimiento del afectado para la represi&oacute;n de infracciones penales. ";
 choices[82][3] = "no permiten la cancelaci&oacute;n de los datos personales en ellos registrados con fines policiales. ";
 answers[82] = choices[82][2];
 units[82] = "29";
 comments[82] = "Id Pregunta: 10446. Examen TIC A1 2013";


//  Id pregunta: 10448 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  El m&eacute;todo de compresi&oacute;n de archivos denominado &quot;algoritmo de deflaci&oacute;n&quot;, que fue originalmente definido por Phil Katz, se utiliza en el formato de imagen ";
 choices[83]= new Array();
 choices[83][0] = "TIFF.";
 choices[83][1] = "GIF.";
 choices[83][2] = "PNG.";
 choices[83][3] = "JPEG.";
 answers[83] = choices[83][2];
 units[83] = "93";
 comments[83] = "Id Pregunta: 10448. Examen TIC A1 2013";


//  Id pregunta: 10449 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En relaci&oacute;n a una red privada virtual (VPN, Virtual Private Network), es FALSO que ";
 choices[84]= new Array();
 choices[84][0] = "una VPN permite utilizar la red p&uacute;blica de un operador para construir una red privada dedicada, con funcionalidades de red y de seguridad equivalentes a las que se obtienen con una red privada. ";
 choices[84][1] = "en la actualidad, el concepto de VPN se extiende para incluir las soluciones que permiten el acceso remoto de un equipo a la red de una organizaci&oacute;n a trav&eacute;s de redes p&uacute;blicas, especialmente Internet, mediante la utilizaci&oacute;n de mecanismos de t&uacute;nel y cifrado. ";
 choices[84][2] = "el protocolo MPLS (Multiprotocol Label Switching) permite crear VPNs de nivel 4, utilizando como tecnolog&iacute;as de acceso T1/E1, ATM &oacute; Frame Relay. ";
 choices[84][3] = "VPLS (Virtual Private LAN Switching) es un servicio de red LAN privada virtual, que permite entregar tramas de nivel 2 directamente entre sedes remotas de un mismo organismo  ";
 answers[84] = choices[84][2];
 units[84] = "111";
 comments[84] = "Id Pregunta: 10449. Examen TIC A1 2013";


//  Id pregunta: 10471 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En una PKI:";
 choices[85]= new Array();
 choices[85][0] = "Un certificado se a&ntilde;ade a una CRL en cuanto se tiene conocimiento de que hay motivos para su revocaci&oacute;n.";
 choices[85][1] = "Las CRLs incluyen todos los certificados emitidos por una CA.";
 choices[85][2] = "Un certificado revocado es eliminado de una CRL en cuanto se emite un nuevo certificado de las mismas caracter&iacute;sticas para el titular del certificado revocado. ";
 choices[85][3] = "No es obligatorio que una CA emita CRLs si proporciona otro mecanismo de consulta del estado de los certificados.";
 answers[85] = choices[85][3];
 units[85] = "73";
 comments[85] = "Id Pregunta: 10471. ";


//  Id pregunta: 10479 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Si quiero cambiar el PIN del DNI electr&oacute;nico:";
 choices[86]= new Array();
 choices[86][0] = "S&oacute;lo puedo hacerlo desde mi casa pero necesito un lector de huella dactilar";
 choices[86][1] = "Puedo hacerlo desde los dispositivos autorizados por la Direcci&oacute;n General de la Polic&iacute;a";
 choices[86][2] = "Puedo hacerlo s&oacute;lo usando mi navegador web";
 choices[86][3] = "S&oacute;lo puedo hacerlo si tengo el PUK";
 answers[86] = choices[86][1];
 units[86] = "74";
 comments[86] = "Id Pregunta: 10479. NULL";


//  Id pregunta: 10492 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cual de los siguientes no es un tipo de ataque ?";
 choices[87]= new Array();
 choices[87][0] = "Ataque por entrop&iacute;a";
 choices[87][1] = "Ataque por fuerza bruta";
 choices[87][2] = "Ataque con Tablas Arcoiris";
 choices[87][3] = "Todos son tipos de ataques";
 answers[87] = choices[87][0];
 units[87] = "111";
 comments[87] = "Id Pregunta: 10492. No hay referencias a ataques por entropia. En la guia CCN-STIC 436, por ejemplo, se pueden encontrar referencias a taques con Tablas Arcoiris, tambien en Wikipedia";


//  Id pregunta: 10493 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Qu&eacute; comando Linux permite conocer los archivos que tiene abiertos un proceso?";
 choices[88]= new Array();
 choices[88][0] = "ps -a";
 choices[88][1] = "top";
 choices[88][2] = "fork";
 choices[88][3] = "lsof";
 answers[88] = choices[88][3];
 units[88] = "53";
 comments[88] = "Id Pregunta: 10493. ps y top muestra informaci&oacute;n de los procesos, pero no de los archivos abiertos, solo lsof hace eso";


//  Id pregunta: 10502 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Quien es considerado el creador del Lenguaje HTML?";
 choices[89]= new Array();
 choices[89][0] = "Dan Connolly";
 choices[89][1] = "Hank Thomas-Lee";
 choices[89][2] = "Conway Berners-Lee";
 choices[89][3] = "Tim Berners-Lee";
 answers[89] = choices[89][3];
 units[89] = "69";
 comments[89] = "Id Pregunta: 10502. NULL";


//  Id pregunta: 10516 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Indique cu&aacute;l de las afirmaciones es falsa";
 choices[90]= new Array();
 choices[90][0] = "Las redes de telecomunicaciones que desarrollen actividades esenciales para la defensa nacional integran, se reservan al Estado y se rigen por su normativa espec&iacute;fica.";
 choices[90][1] = "En el marco de las funciones relacionadas con la defensa civil, corresponde al Ministerio de Defensa estudiar, programar, proponer y ejecutar las medidas relacionadas con las telecomunicaciones.";
 choices[90][2] = "En el &aacute;mbito de la protecci&oacute;n civil, en su espec&iacute;fica relaci&oacute;n con el uso de las telecomunicaciones, el Ministerio de Industria, Energ&iacute;a y Turismo cooperar&aacute; con el Ministerio del Interior y con los &oacute;rganos responsables de las comunidades aut&oacute;nomas.";
 choices[90][3] = "El Gobierno, con car&aacute;cter excepcional y transitorio, podr&aacute; acordar la asunci&oacute;n por la Administraci&oacute;n General del Estado de la gesti&oacute;n directa de determinados servicios de comunicaciones electr&oacute;nicas. ";
 answers[90] = choices[90][1];
 units[90] = "110";
 comments[90] = "Id Pregunta: 10516. ";


//  Id pregunta: 10520 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En relaci&oacute;n al Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[91]= new Array();
 choices[91][0] = "Es presidido por el Ministro de Industria, Energ&iacute;a y Turismo";
 choices[91][1] = "Es un &oacute;rgano asesor del Gobierno en materia de telecomunicaciones y sociedad de la informaci&oacute;n";
 choices[91][2] = "Su composici&oacute;n y su r&eacute;gimen se establecen mediante Orden Ministerial";
 choices[91][3] = "Sus miembros representar&aacute;n entre otros a los sindicatos";
 answers[91] = choices[91][2];
 units[91] = "110";
 comments[91] = "Id Pregunta: 10520. ";


//  Id pregunta: 10535 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los discos duros de estado s&oacute;lido respecto a los tradicionales?";
 choices[92]= new Array();
 choices[92][0] = "Generan menos ruido y calor que los discos duros tradicionales";
 choices[92][1] = "Tienen un menor consumo energ&eacute;tico";
 choices[92][2] = "La latencia de acceso a los datos es menor";
 choices[92][3] = "Tienen mayor velocidad en operaciones I/O secuenciales";
 answers[92] = choices[92][3];
 units[92] = "48";
 comments[92] = "Id Pregunta: 10535. NULL";


//  Id pregunta: 10538 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  En IPv6, se&ntilde;ale el prefijo empleado para direcciones link-local:";
 choices[93]= new Array();
 choices[93][0] = "fd00::/8";
 choices[93][1] = "fe00::/64";
 choices[93][2] = "fe80::/64";
 choices[93][3] = "No existen las direcciones link-local en IPv6";
 answers[93] = choices[93][2];
 units[93] = "100";
 comments[93] = "Id Pregunta: 10538. NULL";


//  Id pregunta: 10539 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  Se&ntilde;ale la respuesta incorrecta respecto a MPLS y VPLS:";
 choices[94]= new Array();
 choices[94][0] = "RSVP-TE y LDP son protocolos de establecimiento de camino";
 choices[94][1] = "en MPLS el camino establecido es bidireccional";
 choices[94][2] = "VPLS permite conexiones muchos a muchos mientras que MPLS es punto a punto";
 choices[94][3] = "el campo de etiqueta en MPLS es de 20 bits";
 answers[94] = choices[94][1];
 units[94] = "100";
 comments[94] = "Id Pregunta: 10539. NULL";


//  Id pregunta: 10555 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)   Cu&aacute;l de los siguientes debe ser el primer paso en una Auditor&iacute;a de Sistemas ";
 choices[95]= new Array();
 choices[95][0] = "Crear un diagrama de flujo de las ramas de decisi&oacute;n. ";
 choices[95][1] = "Comprender el entorno a estudiar";
 choices[95][2] = "Realizar una evaluaci&oacute;n de riesgos";
 choices[95][3] = "Desarrollar un plan de auditor&iacute;a";
 answers[95] = choices[95][1];
 units[95] = "31, 32, 33";
 comments[95] = "Id Pregunta: 10555. Un auditor necesita obtener una comprensi&oacute;n de los procesos antes de crear un diagrama de flujo, evaluar los riesgos o desarrollar un plan de auditor&iacute;a";


//  Id pregunta: 10557 AÃ±o de creación de pregunta: 2014-01-01
 questions[96]= "97)  Cual es la &uacute;ltima versi&oacute;n de COBIT";
 choices[96]= new Array();
 choices[96][0] = "v4";
 choices[96][1] = "V4.1";
 choices[96][2] = "v5";
 choices[96][3] = "v6";
 answers[96] = choices[96][2];
 units[96] = "31, 32, 33";
 comments[96] = "Id Pregunta: 10557. Isaca lanz&oacute; el 10 de abril del 2012 COBIT 5";


//  Id pregunta: 10558 AÃ±o de creación de pregunta: 2014-01-01
 questions[97]= "98)  COBIT 5 Incluye";
 choices[97]= new Array();
 choices[97][0] = "4 principios y 6 procesos habilitadores";
 choices[97][1] = "5 principios y 7 procesos habilitadores";
 choices[97][2] = "4 principios y 7 procesos habilitadores";
 choices[97][3] = "5 principios y 6 procesos habilitadores";
 answers[97] = choices[97][1];
 units[97] = "31, 32, 33";
 comments[97] = "Id Pregunta: 10558. ";


//  Id pregunta: 10559 AÃ±o de creación de pregunta: 2014-01-01
 questions[98]= "99)  Cual de los siguientes no es un principio de COBIT5";
 choices[98]= new Array();
 choices[98][0] = "Satisfacer las necesidades de las partes interesadas";
 choices[98][1] = "Unificar el Gobierno con la administraci&oacute;n";
 choices[98][2] = "Habilitar un enfoque hol&iacute;stico";
 choices[98][3] = "Aplicar un solo marco integrado";
 answers[98] = choices[98][1];
 units[98] = "31, 32, 33";
 comments[98] = "Id Pregunta: 10559. Uno de los principios es Separar el Gobierno de la Administraci&oacute;n";


//  Id pregunta: 10561 AÃ±o de creación de pregunta: 2014-01-01
 questions[99]= "100)  Los controles preventivos tienen como objeto:";
 choices[99]= new Array();
 choices[99][0] = "reducir el riesgo ante una debilidad existente";
 choices[99][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[99][2] = "Solucionar problemas detectados por controles detectivos";
 choices[99][3] = "Reportar errores";
 answers[99] = choices[99][1];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10561. ";


