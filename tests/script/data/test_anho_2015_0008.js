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

//  Id pregunta: 10590 AÃ±o de creación de pregunta: 2015-01-01
 questions[0]= "1)  La Decisi&oacute;n 922/2009/CE del Parlamento Europeo y del Consejo:";
 choices[0]= new Array();
 choices[0][0] = "Tiene como prioridad un crecimiento inteligente.";
 choices[0][1] = "Es la base legal del programa ISA.";
 choices[0][2] = "Desarrolla el Esquema Europeo de Seguridad.";
 choices[0][3] = "";
 answers[0] = choices[0][1];
 units[0] = "30";
 comments[0] = "Id Pregunta: 10590. ";


//  Id pregunta: 10601 AÃ±o de creación de pregunta: 2015-01-01
 questions[1]= "2)  En materia de accesibilidad, las Administraciones P&uacute;blicas deben cumplir:";
 choices[1]= new Array();
 choices[1][0] = "El Real Decreto 1494/2007";
 choices[1][1] = "Los niveles A y AA de la norma UNE 139803:2012";
 choices[1][2] = "Los niveles A y AA de las WCAG 2.0";
 choices[1][3] = "Todas las anteriores.";
 answers[1] = choices[1][3];
 units[1] = "39";
 comments[1] = "Id Pregunta: 10601. ";


//  Id pregunta: 10606 AÃ±o de creación de pregunta: 2015-01-01
 questions[2]= "3)  Son principios arquitect&oacute;nicos de dise&ntilde;o de SOA:";
 choices[2]= new Array();
 choices[2][0] = "Encapsulaci&oacute;n, autonom&iacute;a y m&aacute;xima dependencia entre servicios.";
 choices[2][1] = "Optimizaci&oacute;n, abstracci&oacute;n y fiabilidad.";
 choices[2][2] = "Composici&oacute;n, descubrimiento y reutilizaci&oacute;n.";
 choices[2][3] = "Fuerte acoplamiento, contrato y madurez.";
 answers[2] = choices[2][2];
 units[2] = "51";
 comments[2] = "Id Pregunta: 10606. ";


//  Id pregunta: 10621 AÃ±o de creación de pregunta: 2015-01-01
 questions[3]= "4)  Se&ntilde;ale la respuesta correcta:";
 choices[3]= new Array();
 choices[3][0] = "Para desarrollar una aplicaci&oacute;n distribuida en Java es imprescindible la utilizaci&oacute;n de un servidor de aplicaciones.";
 choices[3][1] = "Weblogic es un contenedor de servlets.";
 choices[3][2] = "Wildfly es la versi&oacute;n gratuita de Jboss.";
 choices[3][3] = "Spring es un m&oacute;dulo de Java EE.";
//  Id pregunta: 10629 AÃ±o de creación de pregunta: 2015-01-01
 questions[4]= "5)  BPMN (Business Process Model and Notation)...";
 choices[4]= new Array();
 choices[4][0] = "&hellip; es una notaci&oacute;n gr&aacute;fica.";
 choices[4][1] = "&hellip; es una notaci&oacute;n basada en etiquetas de texto.";
 choices[4][2] = "&hellip; es una metodolog&iacute;a para el modelado de procesos de negocio.";
 choices[4][3] = "&hellip; est&aacute; destinado &uacute;nicamente a los analistas de negocio.";
 answers[4] = choices[4][0];
 units[4] = "71";
 comments[4] = "Id Pregunta: 10629. ";


//  Id pregunta: 10638 AÃ±o de creación de pregunta: 2015-01-01
 questions[5]= "6)  Indique la respuesta correcta:";
 choices[5]= new Array();
 choices[5][0] = "UML est&aacute; dise&ntilde;ado para utilizarse exclusivamente con la metodolog&iacute;a RUP.";
 choices[5][1] = "UML es un m&oacute;dulo de OMT (Object-Modeling Technique)";
 choices[5][2] = "UML es un lenguaje de programaci&oacute;n estructurada.";
 choices[5][3] = "UML puede describir m&eacute;todos o procesos.";
 answers[5] = choices[5][3];
 units[5] = "84";
 comments[5] = "Id Pregunta: 10638. ";


//  Id pregunta: 10661 AÃ±o de creación de pregunta: 2015-01-01
 questions[6]= "7)  Indique la afirmaci&oacute;n incorrecta:";
 choices[6]= new Array();
 choices[6][0] = "ActiveX es una evoluci&oacute;n de las tecnolog&iacute;as Component Object Model (COM) y Object Linking and Embedding (OLE).";
 choices[6][1] = "La tecnolog&iacute;a ActiveX est&aacute; limitada al sistema operativo Windows.";
 choices[6][2] = "Para introducir un control ActiveX en una p&aacute;gina HTML es necesario utilizar la etiqueta &lt;object&gt;";
 choices[6][3] = "Todas las anteriores son correctas.";
 answers[6] = choices[6][1];
 units[6] = "114";
 comments[6] = "Id Pregunta: 10661. ";


//  Id pregunta: 10663 AÃ±o de creación de pregunta: 2015-01-01
 questions[7]= "8)  Indique la afirmaci&oacute;n correcta:";
 choices[7]= new Array();
 choices[7][0] = "Ipv6 posibilita 2256 de direcciones de host diferentes.";
 choices[7][1] = "El encabezado de Ipv6 (sin opciones) es m&aacute;s corto que el de IPv4";
 choices[7][2] = "Con Ipv6 no es necesario el mecanismo de traducci&oacute;n de direcciones de red (NAT)";
 choices[7][3] = "Todas las anteriores son incorrectas.";
 answers[7] = choices[7][2];
 units[7] = "100";
 comments[7] = "Id Pregunta: 10663. ";


//  Id pregunta: 10682 AÃ±o de creación de pregunta: 2015-01-01
 questions[8]= "9)  Seg&uacute;n la Ley 39/2015 cual de las siguientes opciones no se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[8]= new Array();
 choices[8][0] = "A ser tratados con respeto y deferencia por las autoridades y empleados p&uacute;blicos, que habr&aacute;n de facilitarles el ejercicio de sus derechos y el cumplimiento de sus obligaciones.";
 choices[8][1] = "A la obtenci&oacute;n y utilizaci&oacute;n de los medios de identificaci&oacute;n y firma electr&oacute;nica contemplados en esta Ley.";
 choices[8][2] = "A la protecci&oacute;n de datos de car&aacute;cter personal, y en particular a la seguridad y confidencialidad de los datos que figuren en los ficheros, sistemas y aplicaciones de las Administraciones P&uacute;blicas.";
 choices[8][3] = "Archivo y registro del expediente asociado con todo procedimiento administrativo.";
 answers[8] = choices[8][3];
 units[8] = "30";
 comments[8] = "Id Pregunta: 10682. ";


//  Id pregunta: 10683 AÃ±o de creación de pregunta: 2015-01-01
 questions[9]= "10)  Seg&uacute;n el Art&iacute;culo 14 de la Ley 39/2015. Para las personas f&iacute;sicas, &iquest;qui&eacute;n elige si la relaci&oacute;n se va a establecer a trav&eacute;s de medios electr&oacute;nicos?";
 choices[9]= new Array();
 choices[9][0] = "La Administraci&oacute;n.";
 choices[9][1] = "El ciudadano en todo caso.";
 choices[9][2] = "Habitualmente el ciudadano.";
 choices[9][3] = "Siempre se realiza a trav&eacute;s de medios electr&oacute;nicos.";
 answers[9] = choices[9][2];
 units[9] = "30";
 comments[9] = "Id Pregunta: 10683. ";


//  Id pregunta: 10696 AÃ±o de creación de pregunta: 2015-01-01
 questions[10]= "11)  Seg&uacute;n la Ley 39/2015, cual de las siguientes no se establece como informaci&oacute;n necesaria en los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[10]= new Array();
 choices[10][0] = "Fecha de inscripci&oacute;n.";
 choices[10][1] = "Per&iacute;odo de tiempo por el cual se otorga el poder.";
 choices[10][2] = "Lugar de inscripci&oacute;n.";
 choices[10][3] = "Tipo de poder seg&uacute;n las facultades que otorgue.";
 answers[10] = choices[10][2];
 units[10] = "30";
 comments[10] = "Id Pregunta: 10696. ";


//  Id pregunta: 10725 AÃ±o de creación de pregunta: 2015-01-01
 questions[11]= "12)  La utilizaci&oacute;n de qu&eacute; est&aacute;ndares no est&aacute; explicitamente prevista en la NTI de Protocolos de Intermediaci&oacute;n";
 choices[11]= new Array();
 choices[11][0] = "WSDL";
 choices[11][1] = "XML";
 choices[11][2] = "TLS";
 choices[11][3] = "RSS";
 answers[11] = choices[11][3];
 units[11] = "43";
 comments[11] = "Id Pregunta: 10725. ";


//  Id pregunta: 10730 AÃ±o de creación de pregunta: 2015-01-01
 questions[12]= "13)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas &iquest;cual de los siguientes no es un tipo de Punto de Presencia (PdP) de la Red SARA?";
 choices[12]= new Array();
 choices[12][0] = "Proveedores de Acceso a la Red SARA (PAS).";
 choices[12][1] = "Centros de Proceso de Datos (CPD) de SARA.";
 choices[12][2] = "Red sTESTA (secure Trans-European Services for Telematics between Administrations).";
 choices[12][3] = "Todos los anteriores son tipos de PdP.";
 answers[12] = choices[12][3];
 units[12] = "43";
 comments[12] = "Id Pregunta: 10730. ";


//  Id pregunta: 10734 AÃ±o de creación de pregunta: 2015-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l es el &aacute;mbito de amplicaci&oacute;n de la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[13]= new Array();
 choices[13][0] = "Administraci&oacute;n General del Estado";
 choices[13][1] = "Administraci&oacute;n General del Estado y Comunidades Aut&oacute;nom&aacute;s";
 choices[13][2] = "Cualquier &oacute;rgano de la Administraci&oacute;n p&uacute;blica";
 choices[13][3] = "Cualquier &oacute;rgano de la Administraci&oacute;n p&uacute;blica o Entidad de Derecho P&uacute;blico vinculada o dependiente";
 answers[13] = choices[13][3];
 units[13] = "43";
 comments[13] = "Id Pregunta: 10734. ";


//  Id pregunta: 10738 AÃ±o de creación de pregunta: 2015-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l es el RD sobre organizaci&oacute;n e instrumentos operativos de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones en la Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos conocido como Gobernanza TIC?";
 choices[14]= new Array();
 choices[14][0] = "RD 37/2013";
 choices[14][1] = "RD 802/2014";
 choices[14][2] = "RD 806/2014";
 choices[14][3] = "RD 802/2015";
 answers[14] = choices[14][2];
 units[14] = "24";
 comments[14] = "Id Pregunta: 10738. ";


//  Id pregunta: 10739 AÃ±o de creación de pregunta: 2015-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l es el &aacute;mbito de referencia de aplicaci&oacute;n se&ntilde;alado en el RD 806/2014?";
 choices[15]= new Array();
 choices[15][0] = "Administraci&oacute;n General del Estado.";
 choices[15][1] = "Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos.";
 choices[15][2] = "Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales.";
 choices[15][3] = "Conjunto del Sector P&uacute;blico.";
 answers[15] = choices[15][1];
 units[15] = "24";
 comments[15] = "Id Pregunta: 10739. ";


//  Id pregunta: 10741 AÃ±o de creación de pregunta: 2015-01-01
 questions[16]= "17)  &iquest;Con qu&eacute; frecuencia la comisi&oacute;n de estrateg&iacute;a TIC elevar&aacute; su informe al Consejo de Ministros?";
 choices[16]= new Array();
 choices[16][0] = "Mensual";
 choices[16][1] = "Semestral";
 choices[16][2] = "Anual";
 choices[16][3] = "Cada dos a&ntilde;os";
 answers[16] = choices[16][2];
 units[16] = "24";
 comments[16] = "Id Pregunta: 10741. ";


//  Id pregunta: 10750 AÃ±o de creación de pregunta: 2015-01-01
 questions[17]= "18)  &iquest;En qu&eacute; a&ntilde;o se public&oacute; la Estrategia de Ciberseguridad Nacional?";
 choices[17]= new Array();
 choices[17][0] = "2011";
 choices[17][1] = "2012";
 choices[17][2] = "2013";
 choices[17][3] = "2014";
 answers[17] = choices[17][2];
 units[17] = "43";
 comments[17] = "Id Pregunta: 10750. ";


//  Id pregunta: 10751 AÃ±o de creación de pregunta: 2015-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes no es un principio rector de la Estrategia de Ciberseguridad Nacional?";
 choices[18]= new Array();
 choices[18][0] = "Liderazgo internacional y coordinaci&oacute;n de esfuerzos";
 choices[18][1] = "Responsabilidad compartida";
 choices[18][2] = "Proporcionalidad racionalidad y eficacia";
 choices[18][3] = "Cooperaci&oacute;n Internacional";
 answers[18] = choices[18][0];
 units[18] = "43";
 comments[18] = "Id Pregunta: 10751. ";


//  Id pregunta: 10767 AÃ±o de creación de pregunta: 2015-01-01
 questions[19]= "20)  &iquest;En qu&eacute; fecha se ha aprobado la Estrategia TIC de la AGE por el Consejo de Ministros?";
 choices[19]= new Array();
 choices[19][0] = "Septiembre de 2014";
 choices[19][1] = "Diciembre de 2014";
 choices[19][2] = "Agosto de 2015";
 choices[19][3] = "Octubre de 2015";
 answers[19] = choices[19][3];
 units[19] = "24";
 comments[19] = "Id Pregunta: 10767. ";


//  Id pregunta: 10776 AÃ±o de creación de pregunta: 2015-01-01
 questions[20]= "21)  Se&ntilde;ale la respuesta correcta, seg&uacute;n la Ley Org&aacute;nica 15/1999, el Director de la Agencia de Protecci&oacute;n de Datos es nombrado de entre:";
 choices[20]= new Array();
 choices[20][0] = "Los miembros del Consejo Consultivo, mediante Orden Ministerial, y su mandato es de 4 a&ntilde;os.";
 choices[20][1] = "Los miembros del Consejo Consultivo, mediante Real Decreto, y su mandato es de 4 a&ntilde;os.";
 choices[20][2] = "Los miembros del Consejo Asesor del Ministerio de Justicia, mediante Orden Ministerial, y su mandato es de 5 a&ntilde;os.";
 choices[20][3] = "Los miembros del Consejo de Gobierno, mediante Real Decreto, y su mandato es de 5 a&ntilde;os.";
 answers[20] = choices[20][1];
 units[20] = "29";
 comments[20] = "Id Pregunta: 10776. Examen GSI 2014";


//  Id pregunta: 10777 AÃ±o de creación de pregunta: 2015-01-01
 questions[21]= "22)  Seg&uacute;n se establece en el art&iacute;culo 39 de la Ley Org&aacute;nica 15/1999, ser&aacute;n objeto de inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos, los datos relativos a los ficheros que sean necesarios para el ejercicio de los derechos de:";
 choices[21]= new Array();
 choices[21][0] = "Informaci&oacute;n, actualizaci&oacute;n, cancelaci&oacute;n, sustituci&oacute;n y oposici&oacute;n.";
 choices[21][1] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y omisi&oacute;n.";
 choices[21][2] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y sustituci&oacute;n.";
 choices[21][3] = "Informaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 answers[21] = choices[21][3];
 units[21] = "29";
 comments[21] = "Id Pregunta: 10777. Examen GSI 2014";


//  Id pregunta: 10817 AÃ±o de creación de pregunta: 2015-01-01
 questions[22]= "23)  Una pr&aacute;ctica frecuente asociada al modelo de Proceso Unificado de Desarrollo es el &quot;timeboxing&quot;, &iquest;en qu&eacute; consiste?";
 choices[22]= new Array();
 choices[22][0] = "Enfoque para identificar casos de uso y determinar el nivel de granularidad apropiado.";
 choices[22][1] = "Modelo de planificaci&oacute;n adaptativa para ganar tiempo.";
 choices[22][2] = "Asignaci&oacute;n de un periodo de tiempo fijo para la ejecuci&oacute;n de una iteraci&oacute;n.";
 choices[22][3] = "Utilizar casos de usos temporales para captar requisitos funcionales.";
 answers[22] = choices[22][2];
 units[22] = "79";
 comments[22] = "Id Pregunta: 10817. Examen GSI 2014";


//  Id pregunta: 10826 AÃ±o de creación de pregunta: 2015-01-01
 questions[23]= "24)  Se&ntilde;ale en qu&eacute; nivel de aislamiento, definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[23]= new Array();
 choices[23][0] = "Serializable.";
 choices[23][1] = "Repeatable Read (lecturas repetibles).";
 choices[23][2] = "Read Committed (lecturas comprometidas).";
 choices[23][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[23] = choices[23][3];
 units[23] = "57, 58";
 comments[23] = "Id Pregunta: 10826. Examen GSI 2014";


//  Id pregunta: 10831 AÃ±o de creación de pregunta: 2015-01-01
 questions[24]= "25)  Indique cu&aacute;l de las siguientes afirmaciones sobre el proceso de creaci&oacute;n del Modelo Relacional es cierta:";
 choices[24]= new Array();
 choices[24][0] = "El proceso de normalizaci&oacute;n de bases de datos consiste en aplicar una serie de reglas a las relaciones obtenidas tras el paso del Diccionario de Flujo de Datos (DFD) al Modelo Relacional.";
 choices[24][1] = "Una clave compuesta es aquella columna que siendo clave primaria de una tabla, se incluye como columna dependiente en otra tabla.";
 choices[24][2] = "Una clave ajena es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 choices[24][3] = "Una clave alternativa es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 answers[24] = choices[24][3];
 units[24] = "80";
 comments[24] = "Id Pregunta: 10831. Examen GSI 2014";


//  Id pregunta: 10839 AÃ±o de creación de pregunta: 2015-01-01
 questions[25]= "26)  De las siguientes herramientas de teleaprendizaje para formaci&oacute;n de usuarios y personal t&eacute;cnico, indique cu&aacute;l es de software propietario:";
 choices[25]= new Array();
 choices[25][0] = "Catedr@.";
 choices[25][1] = "Dokeos.";
 choices[25][2] = "Moodle.";
 choices[25][3] = "Claroline.";
 answers[25] = choices[25][0];
 units[25] = "66";
 comments[25] = "Id Pregunta: 10839. Examen GSI 2014";


//  Id pregunta: 10850 AÃ±o de creación de pregunta: 2015-01-01
 questions[26]= "27)  Los proveedores de datos .NET Framework incluyen un objeto DbConnection para conectarse al origen de datos. Se&ntilde;ale, entre las siguientes clases, cu&aacute;l NO pertenece a un proveedor de datos incluido en el .NET Framework 4.5:";
 choices[26]= new Array();
 choices[26][0] = "EntityConnection.";
 choices[26][1] = "SqlConnection.";
 choices[26][2] = "SqlCeConnection.";
 choices[26][3] = "OleOdbcConnection.";
 answers[26] = choices[26][3];
 units[26] = "59, 115";
 comments[26] = "Id Pregunta: 10850. Examen GSI 2014";


//  Id pregunta: 10859 AÃ±o de creación de pregunta: 2015-01-01
 questions[27]= "28)  El ciclo de Deming es una estrategia de mejora continua de la calidad en la administraci&oacute;n de una organizaci&oacute;n, los 4 pasos de la estrategia son:";
 choices[27]= new Array();
 choices[27][0] = "Plan, Do, Construct, Approval (Planificar, Hacer, Construir, Aprobar).";
 choices[27][1] = "Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar).";
 choices[27][2] = "Plan, Develop, Control, Anticipate (Planificar, Desarrollar, Controlar, Tener previsto).";
 choices[27][3] = "Plan, Deduct, Control, Approval (Planificar, Deducir, Controlar, Aprobar).";
 answers[27] = choices[27][1];
 units[27] = "88";
 comments[27] = "Id Pregunta: 10859. Examen GSI 2014";


//  Id pregunta: 10861 AÃ±o de creación de pregunta: 2015-01-01
 questions[28]= "29)  Indique el principio de la WCAG 2.0 asociado a la pauta &quot;maximizar la compatibilidad&quot;:";
 choices[28]= new Array();
 choices[28][0] = "Operable.";
 choices[28][1] = "Perceptible.";
 choices[28][2] = "Robustez.";
 choices[28][3] = "Comprensible.";
 answers[28] = choices[28][2];
 units[28] = "39";
 comments[28] = "Id Pregunta: 10861. Examen GSI 2014";


//  Id pregunta: 10866 AÃ±o de creación de pregunta: 2015-01-01
 questions[29]= "30)  Se&ntilde;ale la respuesta FALSA acerca de la tecnolog&iacute;a Java Web Start:";
 choices[29]= new Array();
 choices[29][0] = "El software de Java Web Start permite descargar y ejecutar aplicaciones Java desde la Web.";
 choices[29][1] = "Garantiza que se est&aacute; ejecutando la &uacute;ltima versi&oacute;n de la aplicaci&oacute;n.";
 choices[29][2] = "Incluido en el JDK desde la versi&oacute;n 6, permitiendo instalar aplicaciones a trav&eacute;s de URLs con JMLP (Java Main Launch Protocol).";
 choices[29][3] = "Permite desplegar f&aacute;cilmente aplicaciones standalone de escritorio.";
 answers[29] = choices[29][2];
 units[29] = "60, 116";
 comments[29] = "Id Pregunta: 10866. Examen GSI 2014";


//  Id pregunta: 10888 AÃ±o de creación de pregunta: 2015-01-01
 questions[30]= "31)  ICMP env&iacute;a mensajes en forma de datagramas que permiten al conjunto del protocolo TCP/IP realizar entre otras las siguientes funciones, se&ntilde;ale la FALSA:";
 choices[30]= new Array();
 choices[30][0] = "Control de flujo.";
 choices[30][1] = "Detecci&oacute;n de destinos inalcanzables.";
 choices[30][2] = "Encriptaci&oacute;n de paquetes.";
 choices[30][3] = "Pruebas de conectividad.";
 answers[30] = choices[30][2];
 units[30] = "100";
 comments[30] = "Id Pregunta: 10888. Examen GSI 2014";


//  Id pregunta: 10903 AÃ±o de creación de pregunta: 2015-01-01
 questions[31]= "32)  &iquest;Qu&eacute; es SPDY?";
 choices[31]= new Array();
 choices[31][0] = "Es un protocolo que reduce el tiempo de carga de sitios web.";
 choices[31][1] = "Storage Protocol Data Yield, protocolo para el almacenamiento de datos seg&uacute;n la probabilidad de uso de los mismos.";
 choices[31][2] = "Es una medida de rendimiento de CPU utilizada en entornos de altas prestaciones.";
 choices[31][3] = "Es la evoluci&oacute;n de HSUPA con una tasa de transferencia de 5 Gbps reales.";
 answers[31] = choices[31][0];
 units[31] = "0";
 comments[31] = "Id Pregunta: 10903. Examen GSI 2014";


//  Id pregunta: 10904 AÃ±o de creación de pregunta: 2015-01-01
 questions[32]= "33)  &iquest;A qu&eacute; se refiere el t&eacute;rmino mashup?";
 choices[32]= new Array();
 choices[32][0] = "Plataforma de desarrollo Web que define la base de datos (MySQL), el servidor Web (Apache), el sistema operativo (Solaris), y el lenguaje de programaci&oacute;n (Haskell).";
 choices[32][1] = "Peque&ntilde;a secci&oacute;n de la ventana del navegador que muestra un mensaje de texto que se desplaza a trav&eacute;s de la pantalla.";
 choices[32][2] = "Conjunto de t&eacute;cnicas y recomendaciones para conseguir que una p&aacute;gina web aparezca en los primeros resultados de los buscadores para unas determinadas palabras clave (keywords).";
 choices[32][3] = "Aplicaciones web que combinan datos y contenido de distintas fuentes para dar una experiencia de usuario integrada.";
 answers[32] = choices[32][3];
 units[32] = "0";
 comments[32] = "Id Pregunta: 10904. Examen GSI 2014";


//  Id pregunta: 10909 AÃ±o de creación de pregunta: 2015-01-01
 questions[33]= "34)  Uno de los problemas en cuanto a la calidad del servicio (QoS) de una red VoIP es la latencia, se&ntilde;ale su definici&oacute;n correcta:";
 choices[33]= new Array();
 choices[33][0] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, p&eacute;rdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[33][1] = "Es una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[33][2] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[33][3] = "P&eacute;rdida que se produce al usar protocolos no orientados a conexi&oacute;n que no reenv&iacute;an paquetes perdidos. Adem&aacute;s tambi&eacute;n se produce por descartes de paquetes que no llegan a tiempo al receptor.";
 answers[33] = choices[33][2];
 units[33] = "108, 109";
 comments[33] = "Id Pregunta: 10909. Examen GSI 2014";


//  Id pregunta: 10916 AÃ±o de creación de pregunta: 2015-01-01
 questions[34]= "35)  &iquest;En qu&eacute; consiste la liberaci&oacute;n del dividendo digital?";
 choices[34]= new Array();
 choices[34][0] = "Es el proceso por el que se volvieron a repartir las frecuencias del espectro radioel&eacute;ctrico de los 900 MHz, anteriormente asignadas a Movistar, Vodafone y Orange, a aquellos operadores que lo solicitaron, de forma que pudieran ser utilizadas para ofrecer servicios m&oacute;viles LTE/4G.";
 choices[34][1] = "Se denomina as&iacute; al espectro asignado a la emisi&oacute;n de televisi&oacute;n anal&oacute;gica, que va a pasar a ser utilizado por tecnolog&iacute;as LTE/4G.";
 choices[34][2] = "Se denomina as&iacute; al espectro recuperado al hacerse efectiva la transici&oacute;n a la televisi&oacute;n digital terrestre.";
 choices[34][3] = "Es el proceso de reordenaci&oacute;n de algunos canales TDT, para liberar las frecuencias radioel&eacute;ctricas de la banda de 800 MHz que ser&aacute; utilizada por tecnolog&iacute;as m&oacute;viles LTE/4G.";
 answers[34] = choices[34][3];
 units[34] = "110";
 comments[34] = "Id Pregunta: 10916. Examen GSI 2014";


//  Id pregunta: 10924 AÃ±o de creación de pregunta: 2015-01-01
 questions[35]= "36)  Para la instalaci&oacute;n del cableado estructurado de un edificio de oficinas, en el que se cuenta con redes Ethernet y Gigabit Ethernet, se&ntilde;ale la respuesta correcta:";
 choices[35]= new Array();
 choices[35][0] = "Es necesario contar con un switch FC en cada una de las plantas del edificio para la interconexi&oacute;n del cableado UTP/STP.";
 choices[35][1] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 1 y 2.";
 choices[35][2] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 5 y 6.";
 choices[35][3] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 3 y 4.";
 answers[35] = choices[35][2];
 units[35] = "99";
 comments[35] = "Id Pregunta: 10924. TIC A1 AGE 2014";


//  Id pregunta: 10934 AÃ±o de creación de pregunta: 2015-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de estas afirmaciones NO corresponde al CCN-CERT?";
 choices[36]= new Array();
 choices[36][0] = "El CCN-CERT es la Capacidad de Respuesta a incidentes de Seguridad de la Informaci&oacute;n del Centro Criptol&oacute;gico Nacional.";
 choices[36][1] = "Los servicios del CCN-CERT est&aacute;n dirigidos exclusivamente a la Administraci&oacute;n General del Estado.";
 choices[36][2] = "CARMEN, LUCIA e IN&Eacute;S son herramientas desarrolladas por CCN-CERT.";
 choices[36][3] = "Las funciones del CCN-CERT quedan recogidas en el RD 3/2010, de 8 de enero, regulador del Esquema Nacional de Seguridad.";
 answers[36] = choices[36][1];
 units[36] = "111";
 comments[36] = "Id Pregunta: 10934. TIC A1 AGE 2014";


//  Id pregunta: 10940 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  Tener la funcionalidad &quot;Thin Provisioning&quot; en una cabina de almacenamiento conectada a una red SAN nos permite:";
 choices[37]= new Array();
 choices[37][0] = "Asignar menor cantidad de GB/TB a los servidores, si no se ha alcanzado el m&aacute;ximo de ocupaci&oacute;n real de la cabina.";
 choices[37][1] = "Sobreasignar mayor cantidad de GB/TB a los servidores, si no se ha alcanzado el m&aacute;ximo de ocupaci&oacute;n real de la cabina.";
 choices[37][2] = "Asignar mediante peque&ntilde;os incrementos los nuevos discos que se incorporen en caliente.";
 choices[37][3] = "Provisionar una capa de control para la virtualizaci&oacute;n del almacenamiento en cloud.";
 answers[37] = choices[37][1];
 units[37] = "48";
 comments[37] = "Id Pregunta: 10940. TIC A1 AGE 2014";


//  Id pregunta: 10956 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  Un agente inteligente es un programa inform&aacute;tico que:";
 choices[38]= new Array();
 choices[38][0] = "Por encargo de un usuario u otro programa realiza sugerencias determin&iacute;sticas predeterminadas.";
 choices[38][1] = "Por encargo de un usuario realiza sugerencias que requieren cierto grado de aprendizaje, sin llegar a ejecutar tareas.";
 choices[38][2] = "Por encargo de un usuario u otro programa, realiza de forma aut&oacute;noma tareas que requieren cierto grado de inteligencia y aprendizaje.";
 choices[38][3] = "Por encargo de un usuario realiza sugerencias que deben ser evaluadas por el usuario que las encarga antes de ser ejecutadas.";
 answers[38] = choices[38][2];
 units[38] = "63";
 comments[38] = "Id Pregunta: 10956. TIC A1 AGE 2014";


//  Id pregunta: 10960 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  El &oacute;rgano responsable del sistema Cl@ve, la plataforma com&uacute;n del Sector P&uacute;blico Administrativo Estatal para la identificaci&oacute;n, autenticaci&oacute;n y firma electr&oacute;nica mediante el uso de claves concertadas, ser&aacute;:";
 choices[39]= new Array();
 choices[39][0] = "La Direcci&oacute;n General de la Polic&iacute;a.";
 choices[39][1] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[39][2] = "La F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda.";
 choices[39][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 answers[39] = choices[39][1];
 units[39] = "44";
 comments[39] = "Id Pregunta: 10960. TIC A1 AGE 2014";


//  Id pregunta: 10972 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera respecto al esquema l&oacute;gico REDER que se encuentra dentro del modelo EFQM?";
 choices[40]= new Array();
 choices[40][0] = "La Evaluaci&oacute;n y Revisi&oacute;n se ocupa de los logros que est&aacute; alcanzando una organizaci&oacute;n.";
 choices[40][1] = "Los Resultados se ocupan de c&oacute;mo una organizaci&oacute;n implanta sistem&aacute;ticamente el enfoque.";
 choices[40][2] = "El Enfoque abarca lo que una organizaci&oacute;n planifica hacer y las razones para ello.";
 choices[40][3] = "El Despliegue aborda lo que hace una organizaci&oacute;n para evaluar, revisar y mejorar el enfoque.";
 answers[40] = choices[40][2];
 units[40] = "92";
 comments[40] = "Id Pregunta: 10972. TIC A1 AGE 2014";


//  Id pregunta: 10976 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  Respecto a JSON (JavaScript Object Notation - Notaci&oacute;n de Objetos de JavaScript), se&ntilde;ale la respuesta correcta:";
 choices[41]= new Array();
 choices[41][0] = "Es una versi&oacute;n simplificada de XML que permite el intercambio de datos en un formato de texto solo entre aplicaciones JavaScript.";
 choices[41][1] = "Al igual que XML, permite el intercambio de datos en un formato de texto, tanto entre aplicaciones JavaScript como Java y .NET.";
 choices[41][2] = "Es una versi&oacute;n simplificada de XML que permite el intercambio de datos en un formato de texto tanto entre aplicaciones JavaScript como Java y .NET.";
 choices[41][3] = "Al igual que XML, permite el intercambio de datos en un formato de texto, solo entre aplicaciones JavaScript.";
 answers[41] = choices[41][1];
 units[41] = "114";
 comments[41] = "Id Pregunta: 10976. TIC A1 AGE 2014";


//  Id pregunta: 11016 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  &iquest;En cu&aacute;ntos cap&iacute;tulos se estructura el RD 4/2010 (ENI)?";
 choices[42]= new Array();
 choices[42][0] = "8";
 choices[42][1] = "10";
 choices[42][2] = "11";
 choices[42][3] = "12";
 answers[42] = choices[42][3];
 units[42] = "30";
 comments[42] = "Id Pregunta: 11016. ";


//  Id pregunta: 11020 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes es una es una metodolog&iacute;a de gesti&oacute;n de software que ayuda a definir e implementar procesos para optimizar la inversi&oacute;n en software cumpliendo con la legislaci&oacute;n aplicable?";
 choices[43]= new Array();
 choices[43][0] = "BSA";
 choices[43][1] = "SAM";
 choices[43][2] = "Copyleft";
 choices[43][3] = "Copyright";
 answers[43] = choices[43][1];
 units[43] = "37";
 comments[43] = "Id Pregunta: 11020. SAM (Gesti&oacute;n de Activos de Software)";


//  Id pregunta: 11030 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  &iquest;Qu&eacute; quiere decir que una operaci&oacute;n es idempotente?";
 choices[44]= new Array();
 choices[44][0] = "Que tiene prioridad sobre cualquier tipo de operaci&oacute;n";
 choices[44][1] = "Que cualquier operaci&oacute;n tiene m&aacute;s prioridad que ella";
 choices[44][2] = "Que el resultado de la misma var&iacute;a cada vez que se ejecuta";
 choices[44][3] = "Que el resultado de la misma no var&iacute;a con cada vez que se ejecuta";
 answers[44] = choices[44][3];
 units[44] = "50";
 comments[44] = "Id Pregunta: 11030. ";


//  Id pregunta: 11033 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  &iquest;Durante qu&eacute; procesos del desarrollo del Sistema de Informaci&oacute;n se realiza la modelizaci&oacute;n de los datos?";
 choices[45]= new Array();
 choices[45][0] = "Durante el an&aacute;lisis";
 choices[45][1] = "Durante el dise&ntilde;o";
 choices[45][2] = "Durante el an&aacute;lisis y durante el dise&ntilde;o";
 choices[45][3] = "No se utiliza la modelizaci&oacute;n de datos en el proceso de desarrollo del SI";
 answers[45] = choices[45][2];
 units[45] = "57";
 comments[45] = "Id Pregunta: 11033. ";


//  Id pregunta: 11054 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  &iquest;Qu&eacute; elemento de X.500 es el conjunto de toda la informaci&oacute;n disponible en el Servicio de Directorio?";
 choices[46]= new Array();
 choices[46][0] = "DIB";
 choices[46][1] = "DSA";
 choices[46][2] = "DUA";
 choices[46][3] = "DISP";
 answers[46] = choices[46][0];
 units[46] = "73";
 comments[46] = "Id Pregunta: 11054. ";


//  Id pregunta: 11073 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l es la secuencia de eventos CORRECTA para elegir una herramienta tecnol&oacute;gica?";
 choices[47]= new Array();
 choices[47][0] = "Seleccionar; Requerimientos; Criterios de Selecci&oacute;n, Evaluaci&oacute;n";
 choices[47][1] = "Criterios de Selecci&oacute;n; Requerimientos; Evaluaci&oacute;n; Seleccionar";
 choices[47][2] = "Requerimientos; Selecci&oacute;n de Criterios, Seleccionar, Evaluar";
 choices[47][3] = "Requerimientos; Selecci&oacute;n de Criterios; Evaluar; Seleccionar";
 answers[47] = choices[47][3];
 units[47] = "98";
 comments[47] = "Id Pregunta: 11073. ";


//  Id pregunta: 11077 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  &iquest;Qu&eacute; representa el Modelo de Servicio en V?";
 choices[48]= new Array();
 choices[48][0] = "Una estrategia para la realizaci&oacute;n con &eacute;xito de todos los proyectos de gesti&oacute;n de servicios";
 choices[48][1] = "La ruta de acceso para la Entrega y Soporte del Servicio para una eficiente y eficaz utilizaci&oacute;n de los recursos";
 choices[48][2] = "Los niveles de pruebas requeridos para la entrega del servicio";
 choices[48][3] = "La perspectiva empresarial que tienen los Clientes y Usuarios de los servicios";
 answers[48] = choices[48][2];
 units[48] = "98";
 comments[48] = "Id Pregunta: 11077. ";


//  Id pregunta: 11078 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  Seg&uacute;n ITIL, &iquest;Cu&aacute;l de estos NO es un tipo de cambio?";
 choices[49]= new Array();
 choices[49][0] = "Cambio est&aacute;ndar";
 choices[49][1] = "Cambio normal";
 choices[49][2] = "Cambio urgente";
 choices[49][3] = "Cambio de emergencia";
 answers[49] = choices[49][2];
 units[49] = "98";
 comments[49] = "Id Pregunta: 11078. ";


//  Id pregunta: 11088 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  Sal (salt) en criptograf&iacute;a&hellip;";
 choices[50]= new Array();
 choices[50][0] = "Es un algoritmo de cifrado de bloques";
 choices[50][1] = "Comprende bits aleatorios que se usan como una de las entradas en una funci&oacute;n derivadora de claves.";
 choices[50][2] = "Las sales hacen mucho m&aacute;s lentos los ataques de diccionario y los ataques de fuerza bruta";
 choices[50][3] = "B y C son correctas";
 answers[50] = choices[50][3];
 units[50] = "72";
 comments[50] = "Id Pregunta: 11088. ";


//  Id pregunta: 11092 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  &iquest;Cu&aacute;les son las 4 fases de  la evoluci&oacute;n de la inversi&oacute;n en sistemas de informaci&oacute;n en el tiempo de acuerdo con el modelo de Gibson y Nolan?";
 choices[51]= new Array();
 choices[51][0] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n, madurez";
 choices[51][1] = "Iniciaci&oacute;n, control, integraci&oacute;n, madurez";
 choices[51][2] = "Iniciaci&oacute;n, dise&ntilde;o, implementaci&oacute;n, transici&oacute;n";
 choices[51][3] = "Iniciaci&oacute;n, control, administraci&oacute;n, madurez";
 answers[51] = choices[51][0];
 units[51] = "21";
 comments[51] = "Id Pregunta: 11092. ";


//  Id pregunta: 11094 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un nivel del modelo de Capacidad y Madurez (CMM)?";
 choices[52]= new Array();
 choices[52][0] = "Repetible";
 choices[52][1] = "Verificado";
 choices[52][2] = "Gestionado";
 choices[52][3] = "Optimizado";
 answers[52] = choices[52][1];
 units[52] = "27";
 comments[52] = "Id Pregunta: 11094. ";


//  Id pregunta: 11100 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Seguridad?";
 choices[53]= new Array();
 choices[53][0] = "Proporcionalidad";
 choices[53][1] = "Respeto al derecho de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[53][2] = "Derecho a la garant&iacute;a de seguridad y confidencialidad";
 choices[53][3] = "Gesti&oacute;n de riesgos";
 answers[53] = choices[53][3];
 units[53] = "30";
 comments[53] = "Id Pregunta: 11100. ";


//  Id pregunta: 11129 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes sentencias es verdadera?";
 choices[54]= new Array();
 choices[54][0] = "El est&aacute;ndar SATA 3 soporta transferencias hasta 4.8 Gbps";
 choices[54][1] = "La versi&oacute;n ATA-8 soporta velocidades hasta 12 Gbps";
 choices[54][2] = "El SAS 600 consigue velocidades de hasta 16 Gbps";
 choices[54][3] = "Los discos SAS han sido progresivamente sustituidos por los SCSI,";
 answers[54] = choices[54][0];
 units[54] = "48";
 comments[54] = "Id Pregunta: 11129. ";


//  Id pregunta: 11158 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  &iquest;Qu&eacute; caracter&iacute;sticas deben tener las transacciones para realizarse r&aacute;pidamente y con riesgos m&iacute;nimos?";
 choices[55]= new Array();
 choices[55][0] = "Atomicidad, Coherencia, Independencia, Durabilidad";
 choices[55][1] = "Atomicidad, Consistencia, Aislamiento, Durabilidad";
 choices[55][2] = "Atomicidad, Consistencia, Independencia, Durabilidad";
 choices[55][3] = "Atomicidad, Coherencia, Aislamiento, Durabilidad";
 answers[55] = choices[55][1];
 units[55] = "83";
 comments[55] = "Id Pregunta: 11158. ";


//  Id pregunta: 11203 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[56]= new Array();
 choices[56][0] = "Confianza Digital";
 choices[56][1] = "Mejorar la Administraci&oacute;n Electr&oacute;nica";
 choices[56][2] = "Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas";
 choices[56][3] = "Interoperabilidad y normas";
 answers[56] = choices[56][3];
 units[56] = "30";
 comments[56] = "Id Pregunta: 11203. ";


//  Id pregunta: 11206 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  Seg&uacute;n la Agenda digital Europea, &iquest;cu&aacute;l es el objetivo de las redes ultrarr&aacute;pidas debe alcanzarse en el conjunto de la uni&oacute;n europea en 2020?";
 choices[57]= new Array();
 choices[57][0] = "0.5";
 choices[57][1] = "0.8";
 choices[57][2] = "0.9";
 choices[57][3] = "1";
 answers[57] = choices[57][0];
 units[57] = "30";
 comments[57] = "Id Pregunta: 11206. ";


//  Id pregunta: 11220 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de Microsoft .NET?";
 choices[58]= new Array();
 choices[58][0] = "Servicios: ASP.NET y WCF.";
 choices[58][1] = "Aplicaciones de escritorio: WinForms, WPF.";
 choices[58][2] = "Aplicaciones para dispositivos m&oacute;viles: Silverlait, WinFX.";
 choices[58][3] = "Aplicaciones en la nube: Azure.";
 answers[58] = choices[58][2];
 units[58] = "59";
 comments[58] = "Id Pregunta: 11220. ";


//  Id pregunta: 11239 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  El &aacute;mbito subjetivo del texto refundido de la ley de contratos del sector p&uacute;blico:";
 choices[59]= new Array();
 choices[59][0] = "La ley aplica a la totalidad del sector p&uacute;blico todos sus articulos.";
 choices[59][1] = "Aquellos expedientes de contrataci&oacute;n incoados por las Administraciones P&uacute;blicas son de naturaleza administrativa.";
 choices[59][2] = "Todos los contratos de los Poderes Adjudicadores que no son Administraci&oacute;n P&uacute;blica sujetos a la directiva europea son considerados contratos SARA, independientemente de su cuant&iacute;a.";
 choices[59][3] = "Ninguna es verdadera.";
 answers[59] = choices[59][1];
 units[59] = "41";
 comments[59] = "Id Pregunta: 11239. ";


//  Id pregunta: 11244 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  En materia de contrataci&oacute;n, es competencia de la DTIC:";
 choices[60]= new Array();
 choices[60][0] = "El informe t&eacute;cnico facultativo de los convenios y encomiendas de gesti&oacute;n que tengan por objeto la adquisici&oacute;n de bienes y servicios inform&aacute;ticos, as&iacute; como de las memorias y pliegos de prescripciones t&eacute;cnicas de contrataciones de bienes y servicios inform&aacute;ticos.";
 choices[60][1] = "A) y para aquellos contratos de cuant&iacute;a de m&aacute;s de 1.000.000 euros, el resto los informa la correspondiente CMAD.";
 choices[60][2] = "El seguimiento de la ejecuci&oacute;n del gasto en materia de tecnolog&iacute;as de la informaci&oacute;n y comunicaciones.";
 choices[60][3] = "Estas competencias las llevar&aacute; a cabo la Divisi&oacute;n de Inversiones TIC dependiente de la Direcci&oacute;n General de Racionalizaci&oacute;n y Contrataci&oacute;n Centralizada.";
 answers[60] = choices[60][2];
 units[60] = "41";
 comments[60] = "Id Pregunta: 11244. ";


//  Id pregunta: 11272 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  Indique la opci&oacute;n correcta sobre las plataformas Open Source para el Cloud:";
 choices[61]= new Array();
 choices[61][0] = "OpenNebula fue desarrollado por el DSA (Distributed Systems Architecture Research Group) en la Universidad Complutense de Madrid y financiado por varios proyectos europeos y permite programar tanto en Java como en Ruby.";
 choices[61][1] = "OpenStack fue fundada por Rackspace y la NASA.";
 choices[61][2] = "CloudStack fue desarrollado por Cloud.com y dispone de versiones propietarias adem&aacute;s de la edici&oacute;n Community.";
 choices[61][3] = "Todas son verdaderas.";
 answers[61] = choices[61][3];
 units[61] = "47";
 comments[61] = "Id Pregunta: 11272. ";


//  Id pregunta: 11273 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  Indique la respuesta INCORRECTA sobre VxLAN:";
 choices[62]= new Array();
 choices[62][0] = "Son las siglas en ingl&eacute;s de Virtual eXtended Local Area Network.";
 choices[62][1] = "Es un protocolo de encapsulamiento para crear redes de nivel 2 sobre el nivel 3.";
 choices[62][2] = "Al disponer de un identificador de segmento de red de 24 bits, permite una mayor escalabilidad que el est&aacute;ndar 802.1q.";
 choices[62][3] = "Permite direccionar hasta 16 millones de segmentos.";
 answers[62] = choices[62][0];
 units[62] = "47";
 comments[62] = "Id Pregunta: 11273. ";


//  Id pregunta: 11283 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  &iquest;Qu&eacute; se entiende por TileMatrixSet en el contexto de la informaci&oacute;n geogr&aacute;fica?";
 choices[63]= new Array();
 choices[63][0] = "Una matriz de puntos de control para registrar una im&aacute;gen r&aacute;ster respecto a otra";
 choices[63][1] = "Un conjunto de rasterizaciones y fragmentaciones de la capa a diferentes escalas predeterminadas para un sistema de referencia y &aacute;mbito concreto";
 choices[63][2] = "Un conjunto de datos de tipo r&aacute;ster en el que el atributo respresentado es la elevaci&oacute;n de los puntos situados en una malla regular";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = choices[63][1];
 units[63] = "67";
 comments[63] = "Id Pregunta: 11283. ";


//  Id pregunta: 11297 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  En qu&eacute; casos no es necesario el consentimiento del usuario en el tratamiento de datos seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos";
 choices[64]= new Array();
 choices[64][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[64][1] = "No existen excepciones al consentimiento de tratamiento de los datos.";
 choices[64][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[64][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[64] = choices[64][2];
 units[64] = "29";
 comments[64] = "Id Pregunta: 11297. ";


//  Id pregunta: 11307 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n correcta en cuanto a los c&oacute;digos HTTP";
 choices[65]= new Array();
 choices[65][0] = "Los c&oacute;digos que comienzan por 4 (4xx) informan de un error en el cliente";
 choices[65][1] = "El c&oacute;digo 401 informa que el recurso no se ha encontrado";
 choices[65][2] = "El c&oacute;digo 403 informa de una redirecci&oacute;n en el recurso accedido";
 choices[65][3] = "El c&oacute;digo 404 indica que no hay autorizaci&oacute;n para acceder al recurso";
 answers[65] = choices[65][0];
 units[65] = "112";
 comments[65] = "Id Pregunta: 11307. ";


//  Id pregunta: 11329 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  En relaci&oacute;n con la plataforma Cl@ve, indique la opci&oacute;n falsa";
 choices[66]= new Array();
 choices[66][0] = "Se desarrolla al hilo de una medida del informe CORA";
 choices[66][1] = "Est&aacute; bajo la titularidad de la DTIC";
 choices[66][2] = "La orden que lo aprueba (MINHAP/1838/2014) se publica seg&uacute;n lo establecido en el art&iacute;culo 11 del RD 1671/2009";
 choices[66][3] = "Plataforma com&uacute;n del sector p&uacute;blico estatal para identificar, autenticar y firmar electr&oacute;nicamente, mediante el uso de claves concertadas";
 answers[66] = choices[66][2];
 units[66] = "43";
 comments[66] = "Id Pregunta: 11329. ";


//  Id pregunta: 11365 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es responsable de registrar las relaciones entre los componentes del servicio?";
 choices[67]= new Array();
 choices[67][0] = "Gesti&oacute;n de niveles del servicio";
 choices[67][1] = "Gesti&oacute;n de porfolio de servicios";
 choices[67][2] = "Gesti&oacute;n de activos y configuraci&oacute;n del servicio (SACM)";
 choices[67][3] = "Gesti&oacute;n de incidencias";
 answers[67] = choices[67][2];
 units[67] = "98";
 comments[67] = "Id Pregunta: 11365. ";


//  Id pregunta: 11404 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes es un prop&oacute;sito b&aacute;sico de la gesti&oacute;n de relaciones con el negocio?";
 choices[68]= new Array();
 choices[68][0] = "Llevar a cabo actividades operacionales para dar soporte de servicios";
 choices[68][1] = "Asegurar que todos los objetivos dentro del acuerdo de nivel de servicio se cumplan";
 choices[68][2] = "Maximizar el valor del contrato y la eficiencia operacional de los servicios que son entregados";
 choices[68][3] = "Entender las necesidades del cliente y asegurar que se cumplen";
 answers[68] = choices[68][3];
 units[68] = "98";
 comments[68] = "Id Pregunta: 11404. ";


//  Id pregunta: 11408 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  De acuerdo a la Ley 9/2014:";
 choices[69]= new Array();
 choices[69][0] = "La CNMC garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[69][1] = "El MINETUR garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[69][2] = "Los operadores garantizan la conservaci&oacute;n del n&uacute;mero de abonado.";
 choices[69][3] = "La SETSI garantiza la conservaci&oacute;n del n&uacute;mero de abonado.";
 answers[69] = choices[69][2];
 units[69] = "110";
 comments[69] = "Id Pregunta: 11408. ";


//  Id pregunta: 11412 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es una facultad del gobierno para la administraci&oacute;n del espectro?";
 choices[70]= new Array();
 choices[70][0] = "La adecuada utilizaci&oacute;n del espectro radioel&eacute;ctrico mediante el empleo de equipos y aparatos.";
 choices[70][1] = "El procedimiento de determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable y que no supongan un peligro para la salud p&uacute;blica.";
 choices[70][2] = "La determinaci&oacute;n, potestad sancionadora e inspecci&oacute;n de niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica.";
 choices[70][3] = "El procedimiento para la elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro radioel&eacute;ctrico.";
 answers[70] = choices[70][3];
 units[70] = "110";
 comments[70] = "Id Pregunta: 11412. ";


//  Id pregunta: 11416 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Seg&uacute;n la Ley 9/2014, los planes nacionales de numeraci&oacute;n se aprueban mediante:";
 choices[71]= new Array();
 choices[71][0] = "Orden Ministerial del MINETUR.";
 choices[71][1] = "Resoluci&oacute;n de la CNMC.";
 choices[71][2] = "Real Decreto.";
 choices[71][3] = "Ninguna de las anteriores.";
 answers[71] = choices[71][2];
 units[71] = "110";
 comments[71] = "Id Pregunta: 11416. ";


//  Id pregunta: 11432 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de los siguientes no es un derecho del usuario de telecomunicaciones?:";
 choices[72]= new Array();
 choices[72][0] = "A oponerse a recibir llamadas comerciales no deseadas, en todo caso.";
 choices[72][1] = "A que no se traten sus datos de localizaci&oacute;n, en todo caso.";
 choices[72][2] = "A no figurar en las gu&iacute;as de abonados, en todo caso.";
 choices[72][3] = "Ninguno es un derecho del usuario.";
 answers[72] = choices[72][3];
 units[72] = "110";
 comments[72] = "Id Pregunta: 11432. ";


//  Id pregunta: 11455 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n la Ley 9/2014, indique cu&aacute;l de las siguientes afirmaciones sobre los derechos de los usuarios finales es incorrecta:";
 choices[73]= new Array();
 choices[73][0] = "Los usuarios finales tienen derecho a impedir la identificaci&oacute;n de su l&iacute;nea.";
 choices[73][1] = "Los usuarios finales tienen derecho a no recibir llamadas autom&aacute;ticas sin intervenci&oacute;n humana sin su consentimiento previo e informado.";
 choices[73][2] = "Los usuarios finales tienen derecho a la continuidad del servicio y a obtener una compensaci&oacute;n autom&aacute;tica por interrupci&oacute;n del mismo.";
 choices[73][3] = "Los usuarios finales tienen derecho a no figurar en las gu&iacute;as de abonados.";
 answers[73] = choices[73][0];
 units[73] = "110";
 comments[73] = "Id Pregunta: 11455. ";


//  Id pregunta: 11480 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  Seg&uacute;n el art&iacute;culo 47 de la Ley 9/2014, NO es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicas:";
 choices[74]= new Array();
 choices[74][0] = "Derecho a continuidad del servicio.";
 choices[74][1] = "Derecho a acceder a los servicios de emergencia de forma gratuita.";
 choices[74][2] = "Derecho a la informaci&oacute;n, que deber&aacute; ser veraz, eficaz, suficiente, transparente, comparable sobre los servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico.";
 choices[74][3] = "Todos son derechos espec&iacute;ficos de los usuarios finales.";
 answers[74] = choices[74][1];
 units[74] = "110";
 comments[74] = "Id Pregunta: 11480. ";


//  Id pregunta: 11483 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  El Plan de Transformaci&oacute;n Digital de la Administraci&oacute;n General del Estado (AGE) y sus Organismos P&uacute;blicos, Estrategia TIC 2015-2020, fue aprobado por";
 choices[75]= new Array();
 choices[75][0] = "La Comisi&oacute;n de Estrategia TIC (CETIC) el 2 de Octubre de 2015.";
 choices[75][1] = "El Consejo de Ministros el 2 de Octubre de 2015.";
 choices[75][2] = "La Direcci&oacute;n TIC (DTIC) el 15 de septiembre de 2015.";
 choices[75][3] = "Por el Consejo Superior de Administraci&oacute;n Electr&oacute;nica (CSAE) el 15 de Septiembre de 2015.";
 answers[75] = choices[75][1];
 units[75] = "44";
 comments[75] = "Id Pregunta: 11483. NULL";


//  Id pregunta: 11517 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Seg&uacute;n el Modelo de Referencia de WorkFlow de la WFMc (WorkFlow Management Coalition), se&ntilde;ale la INCORRECTA:";
 choices[76]= new Array();
 choices[76][0] = "WF Enacment Service es el servicio de representaci&oacute;n de workflow e interpreta la descripci&oacute;n de los procesos.";
 choices[76][1] = "El interfaz 2 establece la comunicaci&oacute;n con las aplicaciones de los clientes.";
 choices[76][2] = "La Interfaz 4 o WAPI, establece funciones de interoperabilidad e interpretaci&oacute;n com&uacute;n en la definici&oacute;n de procesos.";
 choices[76][3] = "La Interfaz 1 se encarga de la administraci&oacute;n y monitorizaci&oacute;n del flujo de trabajo.";
 answers[76] = choices[76][3];
 units[76] = "71";
 comments[76] = "Id Pregunta: 11517. NULL";


//  Id pregunta: 11566 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Las direcciones IPv6 que permiten la configuraci&oacute;n autom&aacute;tica cuando no hay routers presentes son:";
 choices[77]= new Array();
 choices[77][0] = "Global Multicast";
 choices[77][1] = "Link Unique Address";
 choices[77][2] = "Link Local";
 choices[77][3] = "Este procedimiento no est&aacute; permitido por el protocolo IPv6";
 answers[77] = choices[77][2];
 units[77] = "100";
 comments[77] = "Id Pregunta: 11566. NULL";


//  Id pregunta: 11591 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  La protecci&oacute;n contra Denegaci&oacute;n de servicio se recoge en la Gu&iacute; CCN-STIC:";
 choices[78]= new Array();
 choices[78][0] = "828";
 choices[78][1] = "817";
 choices[78][2] = "820";
 choices[78][3] = "823";
 answers[78] = choices[78][2];
 units[78] = "43";
 comments[78] = "Id Pregunta: 11591. ";


//  Id pregunta: 11603 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  La soluci&oacute;n integral de registro para cualquier organismo p&uacute;blico, que cubre tanto la gesti&oacute;n de sus oficinas de registro de entrada/salida como la recepci&oacute;n y env&iacute;o de registros en las unidades tramitadoras destinatarias de la documentaci&oacute;n sellama:";
 choices[79]= new Array();
 choices[79][0] = "ORVE";
 choices[79][1] = "SIR";
 choices[79][2] = "GEISER";
 choices[79][3] = "Registro Electr&oacute;nico Com&uacute;n";
 answers[79] = choices[79][2];
 units[79] = "44";
 comments[79] = "Id Pregunta: 11603. ";


//  Id pregunta: 11609 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  El n&uacute;mero m&iacute;nimo de discos necesarios en RAID 6 es:";
 choices[80]= new Array();
 choices[80][0] = "2";
 choices[80][1] = "3";
 choices[80][2] = "4";
 choices[80][3] = "5";
 answers[80] = choices[80][2];
 units[80] = "48";
 comments[80] = "Id Pregunta: 11609. ";


//  Id pregunta: 11619 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  El Algoritmo A* es un m&eacute;todo de b&uacute;squeda:";
 choices[81]= new Array();
 choices[81][0] = "De mejora iterativa";
 choices[81][1] = "Ciego";
 choices[81][2] = "Heur&iacute;stico";
 choices[81][3] = "a) y c) son correctos";
 answers[81] = choices[81][2];
 units[81] = "63";
 comments[81] = "Id Pregunta: 11619. ";


//  Id pregunta: 11637 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale qui&eacute;n no se encuentra entre los participantes de la actividad de Ejecuci&oacute;n de las pruebas de integraci&oacute;n:";
 choices[82]= new Array();
 choices[82][0] = "Equipo de seguridad";
 choices[82][1] = "Equipo de arquitectura";
 choices[82][2] = "Equipo de proyecto";
 choices[82][3] = "T&eacute;cnicos de comunicaciones";
 answers[82] = choices[82][0];
 units[82] = "86";
 comments[82] = "Id Pregunta: 11637. ";


//  Id pregunta: 11656 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Se&ntilde;ale la frase incorrecta:";
 choices[83]= new Array();
 choices[83][0] = "La versi&oacute;n 3 de SNMP proporciona mejoras en materia de seguridad con respecto a la versi&oacute;n 2.";
 choices[83][1] = "SNMP es un protocolo de la capa de aplicaci&oacute;n.";
 choices[83][2] = "Las versiones 1, 2 y 3 son compatibles entre s&iacute;.";
 choices[83][3] = "Los mensajes GetNextRequest se utilizan para recorrer una tabla de objetos.";
//  Id pregunta: 11671 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Las gu&iacute;as de mejores pr&aacute;ticas de Java se denominan:";
 choices[84]= new Array();
 choices[84][0] = "Hibernate";
 choices[84][1] = "Spring";
 choices[84][2] = "BluePrints";
 choices[84][3] = "Struts";
 answers[84] = choices[84][2];
 units[84] = "116";
 comments[84] = "Id Pregunta: 11671. ";


//  Id pregunta: 11680 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Se&ntilde;ale la falsa con respecto al usuario root del sistema operativo UNIX:";
 choices[85]= new Array();
 choices[85][0] = "Su UID es el 0.";
 choices[85][1] = "Recibe el nombre de superusuario.";
 choices[85][2] = "Puede eliminarse por medio del comando rmuser, con los permisos adecuados.";
 choices[85][3] = "Puede fijar prioridades a los procesos.";
 answers[85] = choices[85][2];
 units[85] = "53, 54";
 comments[85] = "Id Pregunta: 11680. ";


//  Id pregunta: 11682 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l es el nombre de la PDU de capa 2 del modelo OSI?";
 choices[86]= new Array();
 choices[86][0] = "MAC";
 choices[86][1] = "Segmento";
 choices[86][2] = "Paquete";
 choices[86][3] = "Trama";
 answers[86] = choices[86][3];
 units[86] = "100";
 comments[86] = "Id Pregunta: 11682. NULL";


//  Id pregunta: 11697 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l no es una caracteristica de PPP?";
 choices[87]= new Array();
 choices[87][0] = "Se puede usar en circuitos anal&oacute;gicos";
 choices[87][1] = "solo soporta IP";
 choices[87][2] = "es capaz de encapsular varios protocolos";
 choices[87][3] = "Proporciona correcci&oacute;n de errores";
 answers[87] = choices[87][1];
 units[87] = "102";
 comments[87] = "Id Pregunta: 11697. NULL";


//  Id pregunta: 11700 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Una WAN X.25 est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[88]= new Array();
 choices[88][0] = "Punto a punto";
 choices[88][1] = "Broadcast multi-acceso";
 choices[88][2] = "No broadcast multi-acceso";
 choices[88][3] = "Broadcast punto a multipunto";
 answers[88] = choices[88][2];
 units[88] = "104";
 comments[88] = "Id Pregunta: 11700. NULL";


//  Id pregunta: 11706 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;cu&aacute;l es una caracter&iacute;stica de los ataques DoS?";
 choices[89]= new Array();
 choices[89][0] = "Siempre preceden a ataques de acceso";
 choices[89][1] = "Intentan comprometer la disponibilidad de un equipo, red, o aplicaci&oacute;n";
 choices[89][2] = "Un ejemplo de ellos es el escaneo de puertos";
 choices[89][3] = "Un ejemplo de ellos es el &quot;barrido de ping&quot;";
 answers[89] = choices[89][1];
 units[89] = "111";
 comments[89] = "Id Pregunta: 11706. NULL";


//  Id pregunta: 11712 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza caracter&iacute;sticas tanto de los protocolos de vector distancia como de los de estado de enlace?";
 choices[90]= new Array();
 choices[90][0] = "OSPF";
 choices[90][1] = "RIP";
 choices[90][2] = "RIPv2";
 choices[90][3] = "EIGRP";
 answers[90] = choices[90][3];
 units[90] = "102";
 comments[90] = "Id Pregunta: 11712. NULL";


//  Id pregunta: 11716 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cuantos mensajes se intercambian durante el proceso de terminaci&oacute;n de la sesi&oacute;n TCP entre el cliente y el servidor?";
 choices[91]= new Array();
 choices[91][0] = "2";
 choices[91][1] = "4";
 choices[91][2] = "6";
 choices[91][3] = "8";
 answers[91] = choices[91][1];
 units[91] = "102";
 comments[91] = "Id Pregunta: 11716. NULL";


//  Id pregunta: 11721 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Qu&eacute; comando se puede utilizar en un PC con S.O. Windows para obtener la configuraci&oacute;n IP de ese equipo?";
 choices[92]= new Array();
 choices[92][0] = "ifconfig -a";
 choices[92][1] = "netstat -rn";
 choices[92][2] = "iptables -L";
 choices[92][3] = "ipconfig";
 answers[92] = choices[92][3];
 units[92] = "102";
 comments[92] = "Id Pregunta: 11721. NULL";


//  Id pregunta: 11726 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;C&oacute;mo se puede mejorar la cancelaci&oacute;n de campo magn&eacute;tico en cables UTP? ";
 choices[93]= new Array();
 choices[93][0] = "Aumentando el n&uacute;mero de vueltas en cada par de hilos ";
 choices[93][1] = "Disminuir el n&uacute;mero de cables que se utilizan para transportar datos";
 choices[93][2] = "Aumentando el espesor del recubrimiento de PVC que encierra todos los pares de hilo";
 choices[93][3] = "Aumentando el espesor de los hilos de cobre";
 answers[93] = choices[93][0];
 units[93] = "99";
 comments[93] = "Id Pregunta: 11726. NULL";


//  Id pregunta: 11727 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; afirmaci&oacute;n describe una caracter&iacute;stica de IPsec?";
 choices[94]= new Array();
 choices[94][0] = "IPsec puede proteger el tr&aacute;fico en las capas 1 a 3.";
 choices[94][1] = "IPsec funciona independiente del protocolo de capa 2";
 choices[94][2] = "El cifrado puede causar problemas con el enrutamiento.";
 choices[94][3] = "Se trata de una suite propietaria";
 answers[94] = choices[94][1];
 units[94] = "111";
 comments[94] = "Id Pregunta: 11727. NULL";


//  Id pregunta: 11751 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  La competencia para la imposici&oacute;n de sanciones seg&uacute;n la Ley de Transparencia,  corresponder&aacute;:";
 choices[95]= new Array();
 choices[95][0] = "Al Ministro de Hacienda y Administraciones P&uacute;blicas cuando el responsable sea un alto cargo de las Administraciones Publicas.";
 choices[95][1] = "Al Consejo de Ministros cuando el alto cargo tenga la condici&oacute;n de miembro del Gobierno o Secretario de Estado.";
 choices[95][2] = "Al Consejo de Ministros cuando el responsable sea un alto cargo de la Administraci&oacute;n General del Estado.";
 choices[95][3] = "Al Ministro de Hacienda y Administraciones P&uacute;blicas cuando el alto cargo tenga la condici&oacute;n de miembro del Gobierno o Secretario de Estado.";
 answers[95] = choices[95][1];
 units[95] = "41";
 comments[95] = "Id Pregunta: 11751. ";


//  Id pregunta: 11760 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l es el formato y la &uacute;ltima versi&oacute;n utillizada para las facturas electr&oacute;nicas a fecha de diciembre de 2015?";
 choices[96]= new Array();
 choices[96][0] = "businessae";
 choices[96][1] = "ubl v2.3";
 choices[96][2] = "facturae v3.1.1";
 choices[96][3] = "Facturae v.3.2.1";
 answers[96] = choices[96][3];
 units[96] = "70";
 comments[96] = "Id Pregunta: 11760. ";


//  Id pregunta: 11766 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Los servicios compartidos...Seleccione una:";
 choices[97]= new Array();
 choices[97][0] = "est&aacute;n declarado de contrataci&oacute;n centralizada";
 choices[97][1] = "tienen car&aacute;cter obligatorio&nbsp;";
 choices[97][2] = "est&aacute;n disponibles en el CTT (Centro de Transferencia de Tecnolog&iacute;a)";
 choices[97][3] = "son gestionados por la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones";
 answers[97] = choices[97][1];
 units[97] = "44";
 comments[97] = "Id Pregunta: 11766. ";


//  Id pregunta: 11774 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;C&oacute;mo se llama la unidad encargada de la contrataci&oacute;n centralizada en el &aacute;mbito de la Administraci&oacute;n General del Estado?";
 choices[98]= new Array();
 choices[98][0] = "Subdirecci&oacute;n General de Compras";
 choices[98][1] = "Central de Compras Estatal";
 choices[98][2] = "Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n&nbsp;";
 choices[98][3] = "Direcci&oacute;n General de Patrimonio del Estado";
 answers[98] = choices[98][2];
 units[98] = "41, 24";
 comments[98] = "Id Pregunta: 11774. ";


//  Id pregunta: 11789 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la gu&iacute;a CCN-STIC-827 Gesti&oacute;n y uso de dispositivos m&oacute;viles, se&ntilde;ale la INCORRECTA:";
 choices[99]= new Array();
 choices[99][0] = "La autenticaci&oacute;n del usuario se realizar&aacute; con una contrase&ntilde;a/pin del dispositivo y/u otro tipo de autenticaci&oacute;n antes de acceder a los recursos del organismo.";
 choices[99][1] = "Los dispositivos deben bloquearse autom&aacute;ticamente despu&eacute;s de un determinado periodo de inactividad.";
 choices[99][2] = "El uso de un modelo BYOD (Bring Your Own Device) est&aacute; intensamente desaconsejado.";
 choices[99][3] = "Bajo la potestad del administrador de seguridad, podr&aacute; bloquearse de forma remota el dispositivo si se sospecha que ha podido ser dejado en un estado no seguro o en una ubicaci&oacute;n no segura.";
 answers[99] = choices[99][2];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11789. ";


