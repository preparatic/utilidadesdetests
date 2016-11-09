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

//  Id pregunta: 647 AÃ±o de creación de pregunta: 2006-01-01
 questions[0]= "1)  Cu&aacute;l de las siguientes afirmaciones sobre AENOR es incorrecta:";
 choices[0]= new Array();
 choices[0][0] = "Mediante un Real Decreto AENOR fue reconocida como la &uacute;nica entidad aprobada para desarrollar las tareas de normalizaci&oacute;n y certificaci&oacute;n en nuestro pa&iacute;s.";
 choices[0][1] = "Las normas espa&ntilde;olas que genera AENOR se denominan Normas UNE.";
 choices[0][2] = "AENOR es miembro de pleno derecho, y representa a nuestro pa&iacute;s en los Organismos Internacionales, europeos y regionales de Normalizaci&oacute;n (ISO, IEC, CEN, CENELEC, ETSI, COPANT).";
 choices[0][3] = "AENOR est&aacute; acreditada por la Entidad Nacional de Acreditaci&oacute;n (ENAC) como la &uacute;nica entidad capaz de certificar ISO 9000 en Espa&ntilde;a.";
 answers[0] = choices[0][3];
 units[0] = "42";
 comments[0] = "Id Pregunta: 647. ";


//  Id pregunta: 933 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; es una tarjeta PCMCIA (tambi&eacute;n conocida PC Card)?:";
 choices[1]= new Array();
 choices[1][0] = "El nombre comercial que recibe la tarjeta de comunicaciones de los m&oacute;dems as&iacute;ncronos";
 choices[1][1] = "Una tarjeta de seguridad que consta de un microchip en el que se ha almacenado informaci&oacute;n referente a la identidad personal del usuario y a las autorizaciones de acceso que tiene al sistema inform&aacute;tico";
 choices[1][2] = "El nombre comercial que reciben las placas de comunicaciones Ethernet que se conectan al puerto paralelo";
 choices[1][3] = "Un conjunto de dispositivos de peque&ntilde;o tama&ntilde;o (ancho similar al de una tarjeta de cr&eacute;dito) y diferentes alturas que pueden contener desde tarjetas de comunicaciones, modems, disco duro, etc";
 answers[1] = choices[1][3];
 units[1] = "47";
 comments[1] = "Id Pregunta: 933. ";


//  Id pregunta: 1561 AÃ±o de creación de pregunta: 2003-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes no es un SO para tarjetas?";
 choices[2]= new Array();
 choices[2][0] = " Scfw";
 choices[2][1] = "MultOs";
 choices[2][2] = "Java Card";
 choices[2][3] = " Open Card ";
 answers[2] = choices[2][3];
 units[2] = "74";
 comments[2] = "Id Pregunta: 1561. ";


//  Id pregunta: 1627 AÃ±o de creación de pregunta: 2003-01-01
 questions[3]= "4)  Si un programa se distribuye con licencia GPL, la empresa que lo modifica puede:";
 choices[3]= new Array();
 choices[3][0] = "No puede venderlo";
 choices[3][1] = "Integrarlo en otro SW y venderlo como propietario ";
 choices[3][2] = "Venderlo a otra empresa como software libre";
 choices[3][3] = "Venderlo a otra empresa como software propietario";
 answers[3] = choices[3][2];
 units[3] = "61";
 comments[3] = "Id Pregunta: 1627. ";


//  Id pregunta: 1897 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Software de negocio para mejorar la comunicaci&oacute;n entre organizaciones y sus socios";
 choices[4]= new Array();
 choices[4][0] = "Acuerdo de Licencia de Usuario Final (EULA)";
 choices[4][1] = "Pol&iacute;tica de Seguridad";
 choices[4][2] = "Acuerdo de nivel de servicio (SLA)";
 choices[4][3] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 answers[4] = choices[4][3];
 units[4] = "23";
 comments[4] = "Id Pregunta: 1897. ";


//  Id pregunta: 1990 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; significa OMG?:";
 choices[5]= new Array();
 choices[5][0] = "Organization Military  Government";
 choices[5][1] = "Object Manual Gestion";
 choices[5][2] = "Oriented Method Gestion";
 choices[5][3] = "Object Management Group";
 answers[5] = choices[5][3];
 units[5] = "82";
 comments[5] = "Id Pregunta: 1990. ";


//  Id pregunta: 2572 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  Los factores de calidad desde el punto de vista de la explotaci&oacute;n, seg&uacute;n McCall son los siguientes:";
 choices[6]= new Array();
 choices[6][0] = "Usabilidad, Eficiencia y Fiabilidad";
 choices[6][1] = "Mantenibilidad, Verificabilidad y Flexibilidad";
 choices[6][2] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[6][3] = "Usabilidad, Mantenibilidad, Flexibilidad y Correcci&oacute;n";
 answers[6] = choices[6][2];
 units[6] = "87,88,92";
 comments[6] = "Id Pregunta: 2572. ";


//  Id pregunta: 2755 AÃ±o de creación de pregunta: 2006-01-01
 questions[7]= "8)  &iquest;Qu&eacute; se entiende por diagrama de despliegue en UML?";
 choices[7]= new Array();
 choices[7][0] = "Mostrar las relaciones f&iacute;sicas entre los componenetes del  sistema a desarrollar.";
 choices[7][1] = "Mostrar las relaciones entre procesos.";
 choices[7][2] = "Describir el comportamiento din&aacute;mico del sistema.";
 choices[7][3] = "Describir el comportamineto dinamico haciendo enfasis en los mensajes intercambiados.";
 answers[7] = choices[7][0];
 units[7] = "82";
 comments[7] = "Id Pregunta: 2755. ";


//  Id pregunta: 2829 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  Algunos de los pasos a realizar en el &quot;mining legacy system assets&quot; son:";
 choices[8]= new Array();
 choices[8][0] = "Rehabilitaci&oacute;n de componentes seleccionados.";
 choices[8][1] = "Reprogramaci&oacute;n de los m&oacute;dulos obsoletos.";
 choices[8][2] = "Realizaci&oacute;n de pruebas detalladas de los componentes del sistema en el nuevo entorno.";
 choices[8][3] = "Ninguna de las anteriores es correcta.";
 answers[8] = choices[8][0];
 units[8] = "90";
 comments[8] = "Id Pregunta: 2829. ";


//  Id pregunta: 3350 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Cuando se emplean tablas en HTML, &iquest;cu&aacute;l es el comando que permite definir nuevas filas de una tabla?:";
 choices[9]= new Array();
 choices[9][0] = "&lt;TD&gt;&hellip;&lt;/TD&gt;";
 choices[9][1] = "&lt;TR&gt;&hellip;&lt;/TR&gt;";
 choices[9][2] = "&lt;TH&gt;&hellip;&lt;/TH&gt;";
 choices[9][3] = "&lt;TF&gt;&hellip;&lt;/TF&gt;";
 answers[9] = choices[9][1];
 units[9] = "69";
 comments[9] = "Id Pregunta: 3350. NULL";


//  Id pregunta: 3404 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Entre los modos de conexi&oacute;n de la Red Digital de Servicios Integrados se define el Acceso B&aacute;sico. Indique cu&aacute;l de las siguientes opciones lo define, o si son falsas todas las definiciones:";
 choices[10]= new Array();
 choices[10][0] = "Un Acceso B&aacute;sico se define como el constituido por dos canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[10][1] = "Un Acceso B&aacute;sico se define como el constituido por treinta canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[10][2] = "Un Acceso B&aacute;sico se define como el constituido por doce canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[10][3] = "Ninguna de las anteriores";
 answers[10] = choices[10][0];
 units[10] = "103";
 comments[10] = "Id Pregunta: 3404. ";


//  Id pregunta: 4312 AÃ±o de creación de pregunta: 2007-01-01
 questions[11]= "12)  Identifique cu&aacute;l de las siguientes alternativas sobre lenguajes de comandos o de control de &oacute;rdenes del Sistema UNIX es correcta:";
 choices[11]= new Array();
 choices[11][0] = "Bourne Shell (desarrollado por AT&amp;T).";
 choices[11][1] = "Korn Shell (desarrollado por Berkeley y Korn).";
 choices[11][2] = "C Shell (desarrollado por AT&amp;T)";
 choices[11][3] = "Korn Shell (desarrollado por Korn).";
 answers[11] = choices[11][0];
 units[11] = "54";
 comments[11] = "Id Pregunta: 4312. ";


//  Id pregunta: 4459 AÃ±o de creación de pregunta: 2007-01-01
 questions[12]= "13)  El uso de mecanismos como JDBC u ODBC:";
 choices[12]= new Array();
 choices[12][0] = "Proporciona independencia respecto al SGBD utilizado.";
 choices[12][1] = "Proporcionan generalmente un mayor rendimiento y funcionalidad que las APIs nativas de los SGBD.";
 choices[12][2] = "Tienen poca importancia en sistemas donde se acceden a SGBD heterog&eacute;neos.";
 choices[12][3] = "Se utilizan &uacute;nicamente en arquitecturas cliente-servidor, no en entornos de aplicaciones WEB.";
 answers[12] = choices[12][0];
 units[12] = "58";
 comments[12] = "Id Pregunta: 4459. ";


//  Id pregunta: 4483 AÃ±o de creación de pregunta: 2007-01-01
 questions[13]= "14)  &iquest;Cual de las siguientes sentencias es falsa?";
 choices[13]= new Array();
 choices[13][0] = "Una aplicaci&oacute;n ASP.NET se corresponde con un directorio virtual y todos los objetos ASP.NET incluidos en el mismo directorio virtual constituyen una aplicaci&oacute;n ASP.NET";
 choices[13][1] = "ADO.NET es el servicio de acceso a datos asociado a ASP.NET";
 choices[13][2] = "ASP.NET ofrece dos grupos de controles: controles Web y controles HTML";
 choices[13][3] = "Un formulario ASP.NET es un archivo HTML que se guarda en un fichero con extensi&oacute;n .net";
 answers[13] = choices[13][3];
 units[13] = "59";
 comments[13] = "Id Pregunta: 4483. ";


//  Id pregunta: 4505 AÃ±o de creación de pregunta: 2007-01-01
 questions[14]= "15)  &iquest;a que se denomina riesgo en MAGERIT version 2?";
 choices[14]= new Array();
 choices[14][0] = "A la medida del da&ntilde;o probable sobre un sistema";
 choices[14][1] = "Al suceso que puede afectar a un activo y causarle un da&ntilde;o";
 choices[14][2] = "A la medida del da&ntilde;o sobre un activo derivado de la materializaci&oacute;n de una amenaza";
 choices[14][3] = "Al recurso del sistema de informaci&oacute;n expuesto a un ataque";
 answers[14] = choices[14][0];
 units[14] = "33";
 comments[14] = "Id Pregunta: 4505. ";


//  Id pregunta: 4681 AÃ±o de creación de pregunta: 2007-01-01
 questions[15]= "16)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[15]= new Array();
 choices[15][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[15][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[15][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[15][3] = "La citada ley no hace referencia a tal concepto";
 answers[15] = choices[15][2];
 units[15] = "36,37";
 comments[15] = "Id Pregunta: 4681. Examen 2006 JCYL";


//  Id pregunta: 4970 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l es el componente de SNMP que define las reglas para describir los objetos gestionados y c&oacute;mo losprotocolos sometidos a la gesti&oacute;n pueden acceder a ellos?:";
 choices[16]= new Array();
 choices[16][0] = "MIB (Management Information Base).";
 choices[16][1] = "PDU (Packet Data Unit).";
 choices[16][2] = "CMIS (Common Management Information Services).";
 choices[16][3] = "SMI (Structure of Management Information).";
 answers[16] = choices[16][3];
 units[16] = "104";
 comments[16] = "Id Pregunta: 4970. Examen TIC B 2007";


//  Id pregunta: 5283 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  En Java la herencia es un mecanismo por el que se pueden crear nuevos objetos definidos en t&eacute;rminos de objetos ya existentes. &iquest;Esta permitida la herencia multiple?";
 choices[17]= new Array();
 choices[17][0] = "Si.";
 choices[17][1] = "No.";
 choices[17][2] = "Si con ciertas restricciones.";
 choices[17][3] = "No con ciertas restricciones.";
 answers[17] = choices[17][1];
 units[17] = "60";
 comments[17] = "Id Pregunta: 5283. NULL";


//  Id pregunta: 5845 AÃ±o de creación de pregunta: 2009-01-01
 questions[18]= "19)  En referencia a los grupos de trabajo IEEE 802, indique cu&aacute;l de los siguientes grupos est&aacute; relacionado con las redes m&oacute;viles inal&aacute;mbricas de banda ancha (MBWA):";
 choices[18]= new Array();
 choices[18][0] = "802.3";
 choices[18][1] = "802.11";
 choices[18][2] = "802.15";
 choices[18][3] = "802.20";
 answers[18] = choices[18][3];
 units[18] = "101";
 comments[18] = "Id Pregunta: 5845. MAP 2008 A1";


//  Id pregunta: 5946 AÃ±o de creación de pregunta: 2009-01-01
 questions[19]= "20)  &iquest;qu&eacute; est&aacute;ndar define usuabilidad como &ldquo;La efectividad, eficiencia y satisfacci&oacute;n con la que un producto permite alcanzar objetivos espec&iacute;ficos a usuarios espec&iacute;ficos en un contexto de uso espec&iacute;fico&rdquo;?";
 choices[19]= new Array();
 choices[19][0] = "ISO/IEC 9241-5";
 choices[19][1] = "ISO/IEC 9241-11";
 choices[19][2] = "ISO/IEC 9243-5";
 choices[19][3] = "ISO/IEC 9243-11";
 answers[19] = choices[19][1];
 units[19] = "39";
 comments[19] = "Id Pregunta: 5946. ";


//  Id pregunta: 5992 AÃ±o de creación de pregunta: 2010-01-01
 questions[20]= "21)  En el encaminamiento por vector distancia:";
 choices[20]= new Array();
 choices[20][0] = "Cada router env&iacute;a su LSP a toda la red.";
 choices[20][1] = "Se pueden emplear varias m&eacute;tricas.";
 choices[20][2] = "Se produce el problema de cuenta a infinito.";
 choices[20][3] = "El algoritmo correspondiente tambi&eacute;n es conocido como algoritmo de Dijkstra.";
 answers[20] = choices[20][2];
 units[20] = "102";
 comments[20] = "Id Pregunta: 5992. TIC A 2009";


//  Id pregunta: 6005 AÃ±o de creación de pregunta: 2010-01-01
 questions[21]= "22)  El est&aacute;ndar WSDL:";
 choices[21]= new Array();
 choices[21][0] = "Es el protocolo para efectuar llamadas a m&eacute;todos de objetos remotos mediante peticiones XML.";
 choices[21][1] = "Describe la interfaz de servicio";
 choices[21][2] = "Es el registro p&uacute;blico de servicios.";
 choices[21][3] = "Es el protocolo de transporte.";
 answers[21] = choices[21][1];
 units[21] = "69";
 comments[21] = "Id Pregunta: 6005. TIC A 2009";


//  Id pregunta: 6165 AÃ±o de creación de pregunta: 2010-01-01
 questions[22]= "23)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[22]= new Array();
 choices[22][0] = "Los datos analizados y procesados se convierten en informaci&oacute;n, a la cual si le aporta la experiencia se obtiene el conocimiento.";
 choices[22][1] = "La informaci&oacute;n analizada y procesada se convierte en datos, a los cuales si le aporta la experiencia se obtiene el conocimiento.";
 choices[22][2] = "El conocimiento analizado y procesado se convierte en informaci&oacute;n, a la cual si se le aporta la experiencia se obtienen los datos.";
 choices[22][3] = "Todas las anteriores son correctas.";
 answers[22] = choices[22][0];
 units[22] = "21";
 comments[22] = "Id Pregunta: 6165. ";


//  Id pregunta: 6207 AÃ±o de creación de pregunta: 2010-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[23]= new Array();
 choices[23][0] = "WebLogic";
 choices[23][1] = "WebSphere";
 choices[23][2] = "Apache Tomcat";
 choices[23][3] = "Jboss";
 answers[23] = choices[23][2];
 units[23] = "60";
 comments[23] = "Id Pregunta: 6207. TICB-2009, bloque desarrollo";


//  Id pregunta: 6507 AÃ±o de creación de pregunta: 2010-01-01
 questions[24]= "25)  De que tarea NO se encarga el n&uacute;cleo independiente del kernel de UNIX:";
 choices[24]= new Array();
 choices[24][0] = "Interrupciones";
 choices[24][1] = "Ejecuci&oacute;n de procesos";
 choices[24][2] = "Planificar los procesos para su realizaci&oacute;n por la CPU";
 choices[24][3] = "Asignar memoria principal a un proceso en ejecuci&oacute;n";
 answers[24] = choices[24][0];
 units[24] = "53";
 comments[24] = "Id Pregunta: 6507. NULL";


//  Id pregunta: 6558 AÃ±o de creación de pregunta: 2010-01-01
 questions[25]= "26)  Servicios de una Autoridad de Certificaci&oacute;n esenciales son:";
 choices[25]= new Array();
 choices[25][0] = "Generaci&oacute;n y gesti&oacute;n de claves criptogr&aacute;ficas";
 choices[25][1] = "Servicios de directorio";
 choices[25][2] = "Registro de usuarios mediante el que se acredita la identidad";
 choices[25][3] = "Todas las respuestas anteriores son correctas";
 answers[25] = choices[25][3];
 units[25] = "74";
 comments[25] = "Id Pregunta: 6558. NULL";


//  Id pregunta: 8214 AÃ±o de creación de pregunta: 2011-01-01
 questions[26]= "27)  En la aprobaci&oacute;n del Plan de Sistemas de Informaci&oacute;n en la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 participan:";
 choices[26]= new Array();
 choices[26][0] = "Comit&eacute; de Direcci&oacute;n y jefe de proyecto del PSI.";
 choices[26][1] = "Comit&eacute; de Direcci&oacute;n, jefe de proyecto y usuarios expertos.";
 choices[26][2] = "Comit&eacute; de Direcci&oacute;n, consultores y jefe de proyecto.";
 choices[26][3] = "Jefe de proyecto, responsable de seguridad y usuarios expertos.";
 answers[26] = choices[26][0];
 units[26] = "86";
 comments[26] = "Id Pregunta: 8214. Examen TIC A1 2010";


//  Id pregunta: 8300 AÃ±o de creación de pregunta: 2011-01-01
 questions[27]= "28)  El protocolo MPLS (Multiprotocol Label Switching), &iquest;entre qu&eacute; capas del modelo OSI opera? ";
 choices[27]= new Array();
 choices[27][0] = "Entre la capa f&iacute;sica y la de enlace de datos.";
 choices[27][1] = "Entre la capa de enlace de datos y la capa de red. ";
 choices[27][2] = "Entre la capa de red y la capa de transporte. ";
 choices[27][3] = "Entre la capa de transporte y las capas superiores.";
 answers[27] = choices[27][1];
 units[27] = "100";
 comments[27] = "Id Pregunta: 8300. Examen TIC A2 2010";


//  Id pregunta: 8415 AÃ±o de creación de pregunta: 2011-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes NO es una de las llamadas doce reglas de Codd? ";
 choices[28]= new Array();
 choices[28][0] = "Independencia f&iacute;sica de los datos. ";
 choices[28][1] = "Independencia de distribuci&oacute;n. ";
 choices[28][2] = "Independencia de actualizaci&oacute;n. ";
 choices[28][3] = "Independencia de integridad. ";
 answers[28] = choices[28][2];
 units[28] = "58";
 comments[28] = "Id Pregunta: 8415. Examen TIC A2 2010";


//  Id pregunta: 8429 AÃ±o de creación de pregunta: 2011-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes ejes de actuaci&oacute;n no forma parte de los 5 ejes de actuaci&oacute;n definidos en el Plan Avanza 2?";
 choices[29]= new Array();
 choices[29][0] = "Eje Administraci&oacute;n Electr&oacute;nica";
 choices[29][1] = "Eje Capacitaci&oacute;n";
 choices[29][2] = "Eje Infraestructuras";
 choices[29][3] = "Eje Desarrollo del sector TIC";
 answers[29] = choices[29][0];
 units[29] = "30";
 comments[29] = "Id Pregunta: 8429. ";


//  Id pregunta: 8537 AÃ±o de creación de pregunta: 2011-01-01
 questions[30]= "31)  En las redes m&oacute;viles 3G de transici&oacute;n, encontramos tecnolog&iacute;as como HSPA evolucionado o HSPA+. &iquest;Cu&aacute;l es una de las caracter&iacute;sticas de mejora de esta tecnolog&iacute;a?";
 choices[30]= new Array();
 choices[30][0] = "Permite el uso de antenas MIMO";
 choices[30][1] = "Alcanza velocidades pico te&oacute;ncas de 100 Mbps.";
 choices[30][2] = "Proporciona capacidades sim&eacute;tricas para los enlaces ascendente y descendente";
 choices[30][3] = "La modulaci&oacute;n es GMSK, de gran eficiencia espectral";
 answers[30] = choices[30][0];
 units[30] = "108";
 comments[30] = "Id Pregunta: 8537. Examen TIC A2 2010 interna";


//  Id pregunta: 8781 AÃ±o de creación de pregunta: 2011-01-01
 questions[31]= "32)  El Registro General de Protecci&oacute;n de Datos es un &Oacute;rgano integrado:";
 choices[31]= new Array();
 choices[31][0] = "En la Agencia de Protecci&oacute;n de Datos.";
 choices[31][1] = "En el Registro Civil.";
 choices[31][2] = "En el Registro Mercantil.";
 choices[31][3] = "En el Registro General del Ministerio de Justicia.";
 answers[31] = choices[31][0];
 units[31] = "29";
 comments[31] = "Id Pregunta: 8781. Examen UPM A2 2011";


//  Id pregunta: 8926 AÃ±o de creación de pregunta: 2011-01-01
 questions[32]= "33)  Es una caracter&iacute;stica de la fibra &oacute;ptica:";
 choices[32]= new Array();
 choices[32][0] = "Un ancho de banda de 800Mhz.";
 choices[32][1] = "Gran resistencia a interferencias y ruido.";
 choices[32][2] = "El bajo coste de su instalaci&oacute;n.";
 choices[32][3] = "La facilidad de su instalaci&oacute;n";
 answers[32] = choices[32][1];
 units[32] = "99";
 comments[32] = "Id Pregunta: 8926. Operador Ayto. Madrid 2010";


//  Id pregunta: 9086 AÃ±o de creación de pregunta: 2013-01-01
 questions[33]= "34)  Con respecto a los Factores Cr&iacute;ticos de &Eacute;xito y los objetivos de la organizaci&oacute;n, se&ntilde;ale la opci&oacute;n INCORRECTA";
 choices[33]= new Array();
 choices[33][0] = "Los objetivos  son los &quot;fines&quot; hacia los cuales se dirige el esfuerzo y el trabajo de la organizaci&oacute;n";
 choices[33][1] = "Los factores de &eacute;xito son los &quot;medios&quot; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[33][2] = "Para cada objetivo se debe definir, al menos, un factor de &eacute;xito";
 choices[33][3] = "Los factores de &eacute;xito deben determinarse antes que los objetivos, ya que constituyen la base para definir los mismos de manera precisa";
 answers[33] = choices[33][3];
 units[33] = "77";
 comments[33] = "Id Pregunta: 9086. ";


//  Id pregunta: 9643 AÃ±o de creación de pregunta: 2014-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes proyectos est&aacute; relacionado con el intercambio de contenidos docentes y la coordinaci&oacute;n entre promotores de formaci&oacute;n en la Administraci&oacute;n General del Estado?";
 choices[34]= new Array();
 choices[34][0] = "Comp@rte";
 choices[34][1] = "Racionaliz@";
 choices[34][2] = "Compartir";
 choices[34][3] = "Educ@";
 answers[34] = choices[34][2];
 units[34] = "66";
 comments[34] = "Id Pregunta: 9643. ";


//  Id pregunta: 9790 AÃ±o de creación de pregunta: 2014-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l es el objetivo principal perseguido por un keylogger?";
 choices[35]= new Array();
 choices[35][0] = "&quot;Intercepci&oacute;n&quot; y captura de datos.";
 choices[35][1] = "Suplantaci&oacute;n de identidad. ";
 choices[35][2] = "Denegaci&oacute;n de servicio.";
 choices[35][3] = "Manipulaci&oacute;n de un recurso. ";
 answers[35] = choices[35][0];
 units[35] = "111";
 comments[35] = "Id Pregunta: 9790. Examen TIC A2 2013";


//  Id pregunta: 9873 AÃ±o de creación de pregunta: 2014-01-01
 questions[36]= "37)  De acuerdo con Metrica v3, en el Diagrama de Transici&oacute;n de Estados,";
 choices[36]= new Array();
 choices[36][0] = "no puede haber ninguna transici&oacute;n dirigida al estado inicial.";
 choices[36][1] = "solo puede haber un estado final.";
 choices[36][2] = "una acci&oacute;n no se puede ejecutar dentro de un estado.";
 choices[36][3] = "un diagrama puede tener varios estados in&iacute;ciales.";
 answers[36] = choices[36][0];
 units[36] = "86";
 comments[36] = "Id Pregunta: 9873. TIC A1, Examen 2013";


//  Id pregunta: 10058 AÃ±o de creación de pregunta: 2014-01-01
 questions[37]= "38)  En las comunicaciones a trav&eacute;s de sockets, &iquest;cu&aacute;l de las siguientes NO se corresponde con una primitiva?";
 choices[37]= new Array();
 choices[37][0] = "Bind ";
 choices[37][1] = "Listen";
 choices[37][2] = "Reject ";
 choices[37][3] = "Socket";
 answers[37] = choices[37][2];
 units[37] = "100";
 comments[37] = "Id Pregunta: 10058. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10213 AÃ±o de creación de pregunta: 2014-01-01
 questions[38]= "39)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta es m&aacute;s adecuado cuando se trata de obtener un subconjunto de alternativas aceptables?";
 choices[38]= new Array();
 choices[38][0] = "El m&eacute;todo de la Utilidad Multiatributo";
 choices[38][1] = "Los m&eacute;todos de concordancia";
 choices[38][2] = "Los m&eacute;todos basados en permutaciones";
 choices[38][3] = "El m&eacute;todo de la Programaci&oacute;n compromiso";
 answers[38] = choices[38][1];
 units[38] = "34";
 comments[38] = "Id Pregunta: 10213. ";


//  Id pregunta: 10345 AÃ±o de creación de pregunta: 2014-01-01
 questions[39]= "40)  &iquest;A qu&eacute; organismo est&aacute; adscrita la Comisi&oacute;n de Propiedad Intelectual?";
 choices[39]= new Array();
 choices[39][0] = "Ministerio de la Presidencia";
 choices[39][1] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[39][2] = "Ministerio de Industria";
 choices[39][3] = "Ministerio de Econom&iacute;a";
 answers[39] = choices[39][1];
 units[39] = "37";
 comments[39] = "Id Pregunta: 10345. La Comisi&oacute;n de Propiedad Intelectual es un &oacute;rgano colegiado de &aacute;mbito nacional adscrito a la Subdirecci&oacute;n General de Propiedad Intelectual del Ministerio de Educaci&oacute;n, Cultura y Deporte";


//  Id pregunta: 10355 AÃ±o de creación de pregunta: 2014-01-01
 questions[40]= "41)  En relaci&oacute;n con el programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas), se&ntilde;ale la respuesta err&oacute;nea:";
 choices[40]= new Array();
 choices[40][0] = "Abarca el per&iacute;odo 2010-2020";
 choices[40][1] = "Actuaciones destacadas dentro del marco del programa ISA son la red transeuropea sTESTA o el apoyo al proyecto STORK";
 choices[40][2] = "Tiene como &aacute;mbito las administraciones p&uacute;blicas europeas, incluidas las administraciones regionales y locales y las instituciones y &oacute;rganos comunitarios";
 choices[40][3] = "Su base legal se recoge en la Decisi&oacute;n 922/2009/CE";
 answers[40] = choices[40][0];
 units[40] = "40";
 comments[40] = "Id Pregunta: 10355. El programa ISA abarca el per&iacute;odo 2010-2015";


//  Id pregunta: 10367 AÃ±o de creación de pregunta: 2014-01-01
 questions[41]= "42)  &iquest;Qu&eacute; tipos de holguras puede tener una actividad en un proyecto?";
 choices[41]= new Array();
 choices[41][0] = "Dos: Holgura libre y Holgura total";
 choices[41][1] = "Dos: Holgura independiente y holgura dependiente";
 choices[41][2] = "Tres: Holgura libre, Holgura Independiente y Holgura Total";
 choices[41][3] = "Cuatro: Holgura independentiente, holgura dependiente, holgura libre y holgura total";
 answers[41] = choices[41][2];
 units[41] = "27";
 comments[41] = "Id Pregunta: 10367. ";


//  Id pregunta: 10629 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  BPMN (Business Process Model and Notation)...";
 choices[42]= new Array();
 choices[42][0] = "&hellip; es una notaci&oacute;n gr&aacute;fica.";
 choices[42][1] = "&hellip; es una notaci&oacute;n basada en etiquetas de texto.";
 choices[42][2] = "&hellip; es una metodolog&iacute;a para el modelado de procesos de negocio.";
 choices[42][3] = "&hellip; est&aacute; destinado &uacute;nicamente a los analistas de negocio.";
 answers[42] = choices[42][0];
 units[42] = "71";
 comments[42] = "Id Pregunta: 10629. ";


//  Id pregunta: 10634 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  Indique cu&aacute;l de &eacute;stas no es una t&eacute;cnica propuesta por M&eacute;trica v3:";
 choices[43]= new Array();
 choices[43][0] = "Factores Cr&iacute;ticos de &Eacute;xito (FCE).";
 choices[43][1] = "Modelo Entidad/Relaci&oacute;n";
 choices[43][2] = "Diagrama de componentes";
 choices[43][3] = "An&aacute;lisis de Puntos Funci&oacute;n.";
 answers[43] = choices[43][0];
 units[43] = "86";
 comments[43] = "Id Pregunta: 10634. ";


//  Id pregunta: 10645 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  Indique la que no es una caracter&iacute;stica com&uacute;n de las &aacute;reas clave del proceso seg&uacute;n CMM:";
 choices[44]= new Array();
 choices[44][0] = "Verificaci&oacute;n de la implementaci&oacute;n.";
 choices[44][1] = "Actividades realizadas.";
 choices[44][2] = "Imposibilidad de realizaci&oacute;n.";
 choices[44][3] = "Medici&oacute;n y an&aacute;lisis.";
 answers[44] = choices[44][2];
 units[44] = "87";
 comments[44] = "Id Pregunta: 10645. ";


//  Id pregunta: 10646 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  &iquest;Qu&eacute; es un sistema legacy?";
 choices[45]= new Array();
 choices[45][0] = "Un sistema de informaci&oacute;n que, estando anticuado, contin&uacute;a siendo utilizado.";
 choices[45][1] = "Un sistema de informaci&oacute;n que est&aacute; anticuado y no se utiliza, pero contin&uacute;a instalado en los servidores de la organizaci&oacute;n.";
 choices[45][2] = "Un sistema de informaci&oacute;n de reemplazo para los sistemas anticuados.";
 choices[45][3] = "Un sistema de informaci&oacute;n que, aunque actualizado y sin incidencias, quiere ser evolucionado a otro con m&aacute;s funcionalidades.";
 answers[45] = choices[45][0];
 units[45] = "91";
 comments[45] = "Id Pregunta: 10646. ";


//  Id pregunta: 10650 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  Indique el orden correcto, de mayor a menor, en velocidad de transmisi&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "LTE, UMTS y GPRS.";
 choices[46][1] = "W-CDMA, WiMAX y EDGE.EGDE, UMTS y LTE.";
 choices[46][2] = "";
 choices[46][3] = "WiMAX, GPRS y LTE.";
 answers[46] = choices[46][0];
 units[46] = "108";
 comments[46] = "Id Pregunta: 10650. ";


//  Id pregunta: 10667 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[47]= new Array();
 choices[47][0] = "Con telnet toda la informaci&oacute;n entre cliente y servidor viaja cifrada.";
 choices[47][1] = "X11 dota de una interfaz gr&aacute;fica a los sistemas Microsoft.";
 choices[47][2] = "La infraestructura de escritorio virtual crea un entorno de sistema operativo independiente en el propio escritorio.";
 choices[47][3] = "Citrix es un software comercial para virtualizaci&oacute;n de escritorio.";
 answers[47] = choices[47][3];
 units[47] = "119";
 comments[47] = "Id Pregunta: 10667. ";


//  Id pregunta: 10668 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  &iquest;Qu&eacute; tipo de m&eacute;todo de acceso al medio es aquel en el que todos los nodos compiten por el uso del medio?";
 choices[48]= new Array();
 choices[48][0] = "Por contienda.";
 choices[48][1] = "Por contenci&oacute;n.";
 choices[48][2] = "Por paso de testigo.";
 choices[48][3] = "Por detecci&oacute;n de portadora.";
 answers[48] = choices[48][1];
 units[48] = "101";
 comments[48] = "Id Pregunta: 10668. ";


//  Id pregunta: 10774 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  Seg&uacute;n se establece en la pol&iacute;tica de certificaci&oacute;n de la DGP para el DNI electr&oacute;nico (DNIe) en lo relativo a las autoridades de certificaci&oacute;n (AC) ra&iacute;z y subordinadas, &iquest;cu&aacute;l es el tama&ntilde;o de esas claves?";
 choices[49]= new Array();
 choices[49][0] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es de 2048 bits y el de claves de las AC subordinadas ser&aacute; de 4096 bits.";
 choices[49][1] = "Las claves de la AC Ra&iacute;z y de las AC subordinadas ser&aacute;n de 2048 bits.";
 choices[49][2] = "El tama&ntilde;o de las claves es: 4096 bits para la AC Ra&iacute;z y 2048 bits para las AC Subordinadas.";
 choices[49][3] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es 8192 bits para la ra&iacute;z y 4096 bits para las AC subordinadas.";
 answers[49] = choices[49][2];
 units[49] = "74";
 comments[49] = "Id Pregunta: 10774. Examen GSI 2014";


//  Id pregunta: 10777 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  Seg&uacute;n se establece en el art&iacute;culo 39 de la Ley Org&aacute;nica 15/1999, ser&aacute;n objeto de inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos, los datos relativos a los ficheros que sean necesarios para el ejercicio de los derechos de:";
 choices[50]= new Array();
 choices[50][0] = "Informaci&oacute;n, actualizaci&oacute;n, cancelaci&oacute;n, sustituci&oacute;n y oposici&oacute;n.";
 choices[50][1] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y omisi&oacute;n.";
 choices[50][2] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y sustituci&oacute;n.";
 choices[50][3] = "Informaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 answers[50] = choices[50][3];
 units[50] = "29";
 comments[50] = "Id Pregunta: 10777. Examen GSI 2014";


//  Id pregunta: 10804 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes conjuntos est&aacute; integrado en su totalidad por etiquetas que han sido incorporadas como novedad en el lenguaje HTML5?";
 choices[51]= new Array();
 choices[51][0] = "&lt;header&gt;, &lt;article&gt; y &lt;bdi&gt;";
 choices[51][1] = "&lt;head&gt;, &lt;foot&gt; y &lt;nav&gt;";
 choices[51][2] = "&lt;canvas&gt;, &lt;img&gt; y &lt;audio&gt;";
 choices[51][3] = "&lt;video&gt;, &lt;canvas&gt; y &lt;bdo&gt;";
 answers[51] = choices[51][0];
 units[51] = "69";
 comments[51] = "Id Pregunta: 10804. Examen GSI 2014";


//  Id pregunta: 10810 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  &iquest;Qu&eacute; tipo de ataque es un &quot;ataque smurf&quot;?";
 choices[52]= new Array();
 choices[52][0] = "Denegaci&oacute;n de servicio.";
 choices[52][1] = "Hombre intermedio.";
 choices[52][2] = "Fuerza Bruta.";
 choices[52][3] = "Ingenier&iacute;a social.";
 answers[52] = choices[52][0];
 units[52] = "111";
 comments[52] = "Id Pregunta: 10810. Examen GSI 2014";


//  Id pregunta: 10815 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes opciones incluye todas las fases del modelo de ciclo de vida RAD (Rapid Application Development)?";
 choices[53]= new Array();
 choices[53][0] = "Modelado de provisi&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[53][1] = "Modelado de gesti&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[53][2] = "Modelado de gesti&oacute;n, Modelado de datos, Modelado de procesos, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[53][3] = "Modelado de gesti&oacute;n, Modelado de datos, Generaci&oacute;n de aplicaciones, Pruebas de desarrollo y Pruebas de entrega.";
 answers[53] = choices[53][2];
 units[53] = "76, 79";
 comments[53] = "Id Pregunta: 10815. Examen GSI 2014";


//  Id pregunta: 10818 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  En el modelo de proceso Scrum para desarrollo &aacute;gil de sistemas software, &iquest;qu&eacute; es el backlog de producto?";
 choices[54]= new Array();
 choices[54][0] = "La lista detallada de requisitos seleccionados para implementaci&oacute;n en un Sprint.";
 choices[54][1] = "Un gr&aacute;fico que muestra el trabajo pendiente en un Sprint.";
 choices[54][2] = "La lista priorizada de requisitos de alto nivel pendientes de implementaci&oacute;n.";
 choices[54][3] = "La tabla con los requisitos ya implementados.";
 answers[54] = choices[54][2];
 units[54] = "79";
 comments[54] = "Id Pregunta: 10818. Examen GSI 2014";


//  Id pregunta: 10831 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  Indique cu&aacute;l de las siguientes afirmaciones sobre el proceso de creaci&oacute;n del Modelo Relacional es cierta:";
 choices[55]= new Array();
 choices[55][0] = "El proceso de normalizaci&oacute;n de bases de datos consiste en aplicar una serie de reglas a las relaciones obtenidas tras el paso del Diccionario de Flujo de Datos (DFD) al Modelo Relacional.";
 choices[55][1] = "Una clave compuesta es aquella columna que siendo clave primaria de una tabla, se incluye como columna dependiente en otra tabla.";
 choices[55][2] = "Una clave ajena es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 choices[55][3] = "Una clave alternativa es aquella que podr&iacute;a haber sido seleccionada como clave primaria de la tabla por identificar de forma &uacute;nica a la fila a la que pertenece, pero no lo ha sido.";
 answers[55] = choices[55][3];
 units[55] = "80";
 comments[55] = "Id Pregunta: 10831. Examen GSI 2014";


//  Id pregunta: 10848 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  Elija la respuesta correcta respecto Java EE 7:";
 choices[56]= new Array();
 choices[56][0] = "Para crear un nuevo servlet se debe invocar al procedimiento init ().";
 choices[56][1] = "Para destruir un servlet se debe invocar al m&eacute;todo destroy().";
 choices[56][2] = "La clase ServletConfig sirve para pasarle informaci&oacute;n al servlet durante su inicializaci&oacute;n.";
 choices[56][3] = "La clase ServletSession proporciona a las aplicaciones las herramientas para la gesti&oacute;n de la sesi&oacute;n.";
 answers[56] = choices[56][2];
 units[56] = "60, 116";
 comments[56] = "Id Pregunta: 10848. Examen GSI 2014";


//  Id pregunta: 10851 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  La plataforma inform&aacute;tica y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:";
 choices[57]= new Array();
 choices[57][0] = "Bajoo.";
 choices[57][1] = "Azure.";
 choices[57][2] = "Heroku.";
 choices[57][3] = "Adrive.";
 answers[57] = choices[57][1];
 units[57] = "59, 115";
 comments[57] = "Id Pregunta: 10851. Examen GSI 2014";


//  Id pregunta: 10854 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  WebDAV (RFC 4918) son un conjunto de extensiones para el protocolo HTTP, entre ellos, el m&eacute;todo PROPPATCH que sirve para:";
 choices[58]= new Array();
 choices[58][0] = "Crear colecciones.";
 choices[58][1] = "Recuperar propiedades, almacenadas como XML, desde un recurso.";
 choices[58][2] = "Cambiar y borrar m&uacute;ltiples propiedades de un recurso en una simple operaci&oacute;n at&oacute;mica.";
 choices[58][3] = "Desbloquear un recurso.";
 answers[58] = choices[58][2];
 units[58] = "112";
 comments[58] = "Id Pregunta: 10854. Examen GSI 2014";


//  Id pregunta: 10860 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  Las normas ISO/IEC 2501n pertenecientes a la familia de normas ISO/IEC 25000:";
 choices[59]= new Array();
 choices[59][0] = "Incluyen un modelo de referencia de la medici&oacute;n de la calidad del producto, definiciones de medidas de calidad y gu&iacute;as para su aplicaci&oacute;n.";
 choices[59][1] = "Presentan modelos de calidad detallados incluyendo caracter&iacute;sticas para calidad interna, externa y en uso del producto software.";
 choices[59][2] = "Definen todos los modelos, t&eacute;rminos y definiciones comunes referenciados por todas las otras normas de la familia 25000.";
 choices[59][3] = "Ayudan a especificar requisitos de calidad que pueden ser utilizados en el proceso de elicitaci&oacute;n.";
 answers[59] = choices[59][1];
 units[59] = "88";
 comments[59] = "Id Pregunta: 10860. Examen GSI 2014";


//  Id pregunta: 10865 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  De las estrategias de dise&ntilde;o propuestas por M&eacute;trica v3 para obtener el diagrama de estructura &iquest;en qu&eacute; se diferencian el an&aacute;lisis de transformaci&oacute;n y el an&aacute;lisis de transacci&oacute;n?";
 choices[60]= new Array();
 choices[60][0] = "No existe ninguna diferencia, ambas son estrategias de dise&ntilde;o que se aplican a los DFD.";
 choices[60][1] = "El an&aacute;lisis de transformaci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[60][2] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transformaci&oacute;n se aplica a los DFD cuando en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[60][3] = "El an&aacute;lisis de transacci&oacute;n se centra en los resultados del diagrama mientras que el an&aacute;lisis de transformaci&oacute;n se centra en c&oacute;mo se realizan dichos cambios.";
 answers[60] = choices[60][1];
 units[60] = "86, 81, 82";
 comments[60] = "Id Pregunta: 10865. Examen GSI 2014";


//  Id pregunta: 10880 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  La direcci&oacute;n can&oacute;nica de un puente o bridge es la direcci&oacute;n:";
 choices[61]= new Array();
 choices[61][0] = "MAC del interface principal del puente.";
 choices[61][1] = "IP del interface principal del puente.";
 choices[61][2] = "MAC del puente.";
 choices[61][3] = "Del interface de rango num&eacute;rico m&aacute;s alto del puente.";
 answers[61] = choices[61][2];
 units[61] = "102";
 comments[61] = "Id Pregunta: 10880. Examen GSI 2014";


//  Id pregunta: 10905 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  El lenguaje de consulta sobre RDF que permite hacer b&uacute;squedas sobre los recursos de la Web Sem&aacute;ntica utilizando distintas fuentes de datos es:";
 choices[62]= new Array();
 choices[62][0] = "OWL";
 choices[62][1] = "RQUERY";
 choices[62][2] = "JQUERY";
 choices[62][3] = "SPARQL";
 answers[62] = choices[62][3];
 units[62] = "69, 22";
 comments[62] = "Id Pregunta: 10905. Examen GSI 2014";


//  Id pregunta: 10909 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  Uno de los problemas en cuanto a la calidad del servicio (QoS) de una red VoIP es la latencia, se&ntilde;ale su definici&oacute;n correcta:";
 choices[63]= new Array();
 choices[63][0] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, p&eacute;rdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[63][1] = "Es una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[63][2] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[63][3] = "P&eacute;rdida que se produce al usar protocolos no orientados a conexi&oacute;n que no reenv&iacute;an paquetes perdidos. Adem&aacute;s tambi&eacute;n se produce por descartes de paquetes que no llegan a tiempo al receptor.";
 answers[63] = choices[63][2];
 units[63] = "108, 109";
 comments[63] = "Id Pregunta: 10909. Examen GSI 2014";


//  Id pregunta: 10948 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  Para una red wifi, &iquest;c&uacute;al de los siguientes NO es un protocolo de seguridad que le sea aplicable?";
 choices[64]= new Array();
 choices[64][0] = "WPA2.";
 choices[64][1] = "WPA.";
 choices[64][2] = "WAP.";
 choices[64][3] = "WEP.";
 answers[64] = choices[64][2];
 units[64] = "107";
 comments[64] = "Id Pregunta: 10948. TIC A1 AGE 2014";


//  Id pregunta: 10968 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  Una de las siguientes opciones incluye tres herramientas de creaci&oacute;n de blogs. Se&ntilde;ale la respuesta correcta:";
 choices[65]= new Array();
 choices[65][0] = "Blogger, Tumblr y Pocket.";
 choices[65][1] = "Wordpress, Blogger y Pocket.";
 choices[65][2] = "Wordpress, Tumblr y Blogger.";
 choices[65][3] = "Blogger, Path y Wordpress.";
 answers[65] = choices[65][2];
 units[65] = "120";
 comments[65] = "Id Pregunta: 10968. TIC A1 AGE 2014";


//  Id pregunta: 10993 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  En relaci&oacute;n con el Punto General de Entrada de Facturas Electr&oacute;nicas de la Administraci&oacute;n General del Estado (FACe), se&ntilde;ale la respuesta correcta:";
 choices[66]= new Array();
 choices[66][0] = "Las Comunidades Aut&oacute;nomas y las Entidades Locales deber&aacute;n utilizar FACe, en todos los casos.";
 choices[66][1] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas e interoperar con el FACe.";
 choices[66][2] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas, sin necesidad de interoperar con FACe.";
 choices[66][3] = "Las Comunidades Aut&oacute;nomas y Entidades Locales podr&aacute;n crear su propio punto general de entrada de facturas electr&oacute;nicas, previa justificaci&oacute;n de su no adhesi&oacute;n a FACe en t&eacute;rminos de eficiencia, y con anterioridad a la realizaci&oacute;n de cualquier inversi&oacute;n al respecto.";
 answers[66] = choices[66][3];
 units[66] = "70";
 comments[66] = "Id Pregunta: 10993. TIC A1 AGE 2014";


//  Id pregunta: 11021 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de las WCAG 2.0 NO es cierta?";
 choices[67]= new Array();
 choices[67][0] = "Est&aacute;n organizadas en 4 principios";
 choices[67][1] = "Dentro de cada principio se encuentran las pautas de accesibilidad";
 choices[67][2] = "Cada pauta contiene una serie de criterios de conformidad";
 choices[67][3] = "Se definen niveles de prioridad para los diferentes criterios";
 answers[67] = choices[67][3];
 units[67] = "39";
 comments[67] = "Id Pregunta: 11021. En las WCAG 2.0 se habla de niveles de conformidad y no de niveles de prioridad";


//  Id pregunta: 11026 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes se corresponde con el Comit&eacute; T&eacute;cnico en el &aacute;mbito de las Tecnolog&iacute;as de la Informaci&oacute;n dentro de ISO?";
 choices[68]= new Array();
 choices[68][0] = "ISO/TC 1";
 choices[68][1] = "ISO/TC 2";
 choices[68][2] = "ISO/IEC JTC 1";
 choices[68][3] = "ISO/IEC JPC 2";
 answers[68] = choices[68][2];
 units[68] = "42";
 comments[68] = "Id Pregunta: 11026. ";


//  Id pregunta: 11035 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes NO es una regla de Codd?";
 choices[69]= new Array();
 choices[69][0] = "Regla del Acceso Garantizado";
 choices[69][1] = "Regla de Actualizaci&oacute;n de Vistas";
 choices[69][2] = "Independencia L&oacute;gica de Datos";
 choices[69][3] = "Regla de la Subversi&oacute;n";
 answers[69] = choices[69][3];
 units[69] = "58";
 comments[69] = "Id Pregunta: 11035. La Regla 12 es de la No Subversi&oacute;n";


//  Id pregunta: 11065 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  &iquest;Cual de las afirmaciones es CORRECTA acerca de las diferentes modalidades de demanda, generadas por los negocios de los clientes?";
 choices[70]= new Array();
 choices[70][0] = "Son impulsadas por las pautas de las actividades de los negocios";
 choices[70][1] = "Es imposible predecir como se comportan";
 choices[70][2] = "Es imposible influenciar en las pautas de la demanda";
 choices[70][3] = "Son impulsadas por el calendario de entregas generado por el proceso de Gesti&oacute;n de la Capacidad";
 answers[70] = choices[70][0];
 units[70] = "98";
 comments[70] = "Id Pregunta: 11065. ";


//  Id pregunta: 11096 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Las dependencias entre actividades en gesti&oacute;n de proyectos pueden ser (Seleccione la verdadera):";
 choices[71]= new Array();
 choices[71][0] = "Obligatorias y discrecionales";
 choices[71][1] = "Obligatorias, discrecionales y externas";
 choices[71][2] = "Obligatorias, discrecionales, externas e internas";
 choices[71][3] = "Obligatorias, discrecionales, externas, internas y sincronizadas.";
 answers[71] = choices[71][1];
 units[71] = "28";
 comments[71] = "Id Pregunta: 11096. ";


//  Id pregunta: 11132 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  &iquest;A qu&eacute; se refiere un problema de fragmentaci&oacute;n interna de la memoria de un sistema operativo?";
 choices[72]= new Array();
 choices[72][0] = "Cuando el programa es m&aacute;s peque&ntilde;o que el marco de p&aacute;gina asignado";
 choices[72][1] = "Cuando quedan zonas de memoria libres peque&ntilde;as que no se pueden utilizar";
 choices[72][2] = "Cuando un programa utiliza zonas de memoria diferentes en cada sesi&oacute;n para escribir sus datos.";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][0];
 units[72] = "52";
 comments[72] = "Id Pregunta: 11132. ";


//  Id pregunta: 11133 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes versiones del sistema de archivos UNIX fue creada por ATT?";
 choices[73]= new Array();
 choices[73][0] = "Virtual File System";
 choices[73][1] = "Fast File System";
 choices[73][2] = "Network File System";
 choices[73][3] = "Remote File System";
 answers[73] = choices[73][2];
 units[73] = "53";
 comments[73] = "Id Pregunta: 11133. ";


//  Id pregunta: 11141 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje de construcci&oacute;n de la Web Sem&aacute;ntica?";
 choices[74]= new Array();
 choices[74][0] = "OWL";
 choices[74][1] = "MADL";
 choices[74][2] = "XML";
 choices[74][3] = "RDF";
 answers[74] = choices[74][1];
 units[74] = "63";
 comments[74] = "Id Pregunta: 11141. ";


//  Id pregunta: 11180 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas se a&ntilde;ade en la Versi&oacute;n 3 del protocolo SNMP?";
 choices[75]= new Array();
 choices[75][0] = "Permite a los agentes informar de forma espontanea al gestor de un evento";
 choices[75][1] = "Enviar mensajes no solicitados al gestor";
 choices[75][2] = "Mecanismos de autentificaci&oacute;n, privacidad y control de accesos verdaderamente s&oacute;lidos.";
 choices[75][3] = "Permite que el agente informe espont&aacute;neamente de excepciones y errores en el protocolo";
 answers[75] = choices[75][2];
 units[75] = "104";
 comments[75] = "Id Pregunta: 11180. ";


//  Id pregunta: 11185 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes funciones no corresponde al MINETUR?";
 choices[76]= new Array();
 choices[76][0] = "Gestionar el Registro de Operadores";
 choices[76][1] = "Establecer obligaciones espec&iacute;ficas de operadores con poder significativo";
 choices[76][2] = "Proponer al gobierno la aprobaci&oacute;n de los planes de numeraci&oacute;n";
 choices[76][3] = "Administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico";
 answers[76] = choices[76][1];
 units[76] = "110";
 comments[76] = "Id Pregunta: 11185. ";


//  Id pregunta: 11190 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes protocolos se utiliza para videoconferencia sobre IP?";
 choices[77]= new Array();
 choices[77][0] = "ITU H.320";
 choices[77][1] = "ITU H.243";
 choices[77][2] = "ITU H.249";
 choices[77][3] = "ITU H.323";
 answers[77] = choices[77][3];
 units[77] = "117";
 comments[77] = "Id Pregunta: 11190. ";


//  Id pregunta: 11197 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;Qu&eacute; objetivo de porcentaje de i+d marca la estrategia europea 2020 para la Uni&oacute;n Europea?";
 choices[78]= new Array();
 choices[78][0] = "2% del PIB";
 choices[78][1] = "3%del PIB";
 choices[78][2] = "5% del PIB";
 choices[78][3] = "La estrategia Europa 2020 no marca ning&uacute;n objetivo en materia de i+d";
 answers[78] = choices[78][1];
 units[78] = "30";
 comments[78] = "Id Pregunta: 11197. ";


//  Id pregunta: 11198 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;Qu&eacute; tasa de abandono escolar marca la Estrategia Europa 2020 para la Uni&oacute;n Europea?";
 choices[79]= new Array();
 choices[79][0] = "0.05";
 choices[79][1] = "0.01";
 choices[79][2] = "0.1";
 choices[79][3] = "0.2";
 answers[79] = choices[79][2];
 units[79] = "30";
 comments[79] = "Id Pregunta: 11198. ";


//  Id pregunta: 11221 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l es el nombre de la biblioteca de clases del Framework de .NET?";
 choices[80]= new Array();
 choices[80][0] = "FCL";
 choices[80][1] = "CLR";
 choices[80][2] = "CLS";
 choices[80][3] = "JIT";
 answers[80] = choices[80][0];
 units[80] = "59";
 comments[80] = "Id Pregunta: 11221. ";


//  Id pregunta: 11227 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de la clase HttpServlet?";
 choices[81]= new Array();
 choices[81][0] = "doGet(). Se ejecuta cuando se recibe una petici&oacute;n HTTP GET.";
 choices[81][1] = "doPush(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUSH.";
 choices[81][2] = "doPost(). Se ejecuta cuando se recibe una petici&oacute;n HTTP POST.";
 choices[81][3] = "doPut(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUT.";
 answers[81] = choices[81][1];
 units[81] = "116";
 comments[81] = "Id Pregunta: 11227. ";


//  Id pregunta: 11302 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Se&ntilde;ale la norma que no est&aacute; asociada correctamente a su contenido";
 choices[82]= new Array();
 choices[82][0] = "ISO 15408 - Common criteria";
 choices[82][1] = "RFC 2527 - DPC (Declaraci&oacute;n de Pr&aacute;cticas de Certificaci&oacute;n)";
 choices[82][2] = "CWA 14890 - Protocolo de autenticaci&oacute;n mutua, usado para el certificado de componente del DNI";
 choices[82][3] = "RFC 5246 - IPSEC";
 answers[82] = choices[82][3];
 units[82] = "33,74,111";
 comments[82] = "Id Pregunta: 11302. El RFC 5246 describe TLS. IPSEC es descrito en RFC 4305";


//  Id pregunta: 11303 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Indique cu&aacute;l de los siguientes, es un lenguaje de programaci&oacute;n orientado a objetos puro";
 choices[83]= new Array();
 choices[83][0] = "Eiffel";
 choices[83][1] = "Basic";
 choices[83][2] = "LISP";
 choices[83][3] = "Pascal";
 answers[83] = choices[83][0];
 units[83] = "82";
 comments[83] = "Id Pregunta: 11303. ";


//  Id pregunta: 11323 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Qu&eacute; tipo de registro se corresponde DNS, se corresponde con esta definici&oacute;n: &quot;Este registro se usa en IPv6 para traducirnombres de hosts a direcciones IPv6.&quot;";
 choices[84]= new Array();
 choices[84][0] = "Tipo A";
 choices[84][1] = "Tipo AAAA";
 choices[84][2] = "Tipo CNAME";
 choices[84][3] = "Tipo NS";
 answers[84] = choices[84][1];
 units[84] = "113";
 comments[84] = "Id Pregunta: 11323. ";


//  Id pregunta: 11345 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  De los perfiles creados por WS-I indique cu&aacute;l no existe";
 choices[85]= new Array();
 choices[85][0] = "WS-I Basic security profile";
 choices[85][1] = "WS-I Reliable secure profile";
 choices[85][2] = "WS-I Extended Reliable profile";
 choices[85][3] = "WS-I Basic profile";
 answers[85] = choices[85][2];
 units[85] = "51";
 comments[85] = "Id Pregunta: 11345. ";


//  Id pregunta: 11375 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes conceptos son las caracter&iacute;sticas claves que contribuyen al &eacute;xito de ITIL?: 1. Es neutral respecto a fabricantes y vendedores; 2. No es prescriptivo; 3. Es una mejor pr&aacute;ctica; 4. Es un est&aacute;ndar";
 choices[86]= new Array();
 choices[86][0] = "Solo 3";
 choices[86][1] = "Solo 1, 2 y 3";
 choices[86][2] = "Todos los anteriores";
 choices[86][3] = "Solo 2, 3 y 4";
 answers[86] = choices[86][1];
 units[86] = "98";
 comments[86] = "Id Pregunta: 11375. ";


//  Id pregunta: 11488 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes formas de distribuci&oacute;n p&uacute;blica de un programa de ordenador no puede utilizarse legalmente como forma de explotaci&oacute;n?";
 choices[87]= new Array();
 choices[87][0] = "La compraventa del programa.";
 choices[87][1] = "La donaci&oacute;n del programa.";
 choices[87][2] = "El alquiler del programa.";
 choices[87][3] = "Todas las anteriores.";
 answers[87] = choices[87][3];
 units[87] = "36";
 comments[87] = "Id Pregunta: 11488. NULL";


//  Id pregunta: 11507 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de las siguientes afirmaciones hace referencia al tipo de Cuadro de Mandos Balance Scorecard?";
 choices[88]= new Array();
 choices[88][0] = "Muestra informaci&oacute;n a nivel estrat&eacute;gico, orientada a la consecuci&oacute;n de objetivos.";
 choices[88][1] = "&Uacute;nicamente utilizan indicadores clave de rendimiento (KPI)";
 choices[88][2] = "No utilizan indicadores orientados a objetivos (KGI).";
 choices[88][3] = "Todas las anteriores.";
 answers[88] = choices[88][0];
 units[88] = "65";
 comments[88] = "Id Pregunta: 11507. NULL";


//  Id pregunta: 11529 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica esencial de los sistemas de altas prestaciones?";
 choices[89]= new Array();
 choices[89][0] = "Arquitectura altamente paralela.";
 choices[89][1] = "Gran capacidad de c&oacute;mputo.";
 choices[89][2] = "Tiempo compartido.";
 choices[89][3] = "Elevado coste.";
 answers[89] = choices[89][2];
 units[89] = "45";
 comments[89] = "Id Pregunta: 11529. NULL";


//  Id pregunta: 11559 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de reconocimiento del habla se basan en el an&aacute;lisis de patrones o plantillas?";
 choices[90]= new Array();
 choices[90][0] = "DTW, Dinamic Time Warping";
 choices[90][1] = "Modelos Ocultos de Markov (HMM)";
 choices[90][2] = "SIFT, Simplified Inversed Filter Tracking";
 choices[90][3] = "Ninguna de las anteriores es cierta.";
 answers[90] = choices[90][0];
 units[90] = "94";
 comments[90] = "Id Pregunta: 11559. NULL";


//  Id pregunta: 11567 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Las cabeceras de MPLS";
 choices[91]= new Array();
 choices[91][0] = "Pueden reutilizar campos de cabeceras de otros protocolos.";
 choices[91][1] = "Emplean enrutamiento desde origen por conmutaci&oacute;n de paquetes.";
 choices[91][2] = "Los routers son los mismos que se emplean en cualquier red IP";
 choices[91][3] = "La b y c son correctas.";
 answers[91] = choices[91][0];
 units[91] = "100";
 comments[91] = "Id Pregunta: 11567. NULL";


//  Id pregunta: 11617 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale en qu&eacute; tipo de licencia Creative Commons se permite el uso comercial de la obra pero no la generaci&oacute;n de obras derivadas:";
 choices[92]= new Array();
 choices[92][0] = "by-nc";
 choices[92][1] = "by-nd";
 choices[92][2] = "by-sa";
 choices[92][3] = "by-nc-nd";
 answers[92] = choices[92][1];
 units[92] = "61";
 comments[92] = "Id Pregunta: 11617. ";


//  Id pregunta: 11630 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Entre las caracter&iacute;sticas que debe tener un requisito no se encuentra:";
 choices[93]= new Array();
 choices[93][0] = "Ambig&uuml;edad";
 choices[93][1] = "Consistencia";
 choices[93][2] = "Verificabilidad";
 choices[93][3] = "Completitud";
 answers[93] = choices[93][0];
 units[93] = "78";
 comments[93] = "Id Pregunta: 11630. ";


//  Id pregunta: 11641 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique cu&aacute;l no es un principio de la norma ISO 9004";
 choices[94]= new Array();
 choices[94][0] = "Enfoque de sistema para la gesti&oacute;n";
 choices[94][1] = "Enfoque basado en procesos";
 choices[94][2] = "Enfoque al cliente";
 choices[94][3] = "Enfoque al proveedor";
 answers[94] = choices[94][3];
 units[94] = "92";
 comments[94] = "Id Pregunta: 11641. ";


//  Id pregunta: 11644 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Entre las siguientes afirmaciones sobre el formato JPEG, se&ntilde;ale la incorrecta:";
 choices[95]= new Array();
 choices[95][0] = "Sus siglas vienen de Joint Photography Experts Group";
 choices[95][1] = "Soporta animaciones";
 choices[95][2] = "Es un formato de compresi&oacute;n con p&eacute;rdidas";
 choices[95][3] = "Usa la transformada discreta del coseno (DCT)";
 answers[95] = choices[95][1];
 units[95] = "93";
 comments[95] = "Id Pregunta: 11644. ";


//  Id pregunta: 11655 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En la tecnolog&iacute;a RDSI, la interfaz entre un equipo de usuario no compatible con RDSI y el correspondiente terminal adaptador recibe el nombre de punto de referencia:";
 choices[96]= new Array();
 choices[96][0] = "P";
 choices[96][1] = "R";
 choices[96][2] = "S";
 choices[96][3] = "T";
 answers[96] = choices[96][1];
 units[96] = "103";
 comments[96] = "Id Pregunta: 11655. ";


//  Id pregunta: 11687 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Al conectar un PC y un HUB se debe usar:";
 choices[97]= new Array();
 choices[97][0] = "Straight-through cable";
 choices[97][1] = "Consola";
 choices[97][2] = "Crossover cable";
 choices[97][3] = "RJ 11";
 answers[97] = choices[97][0];
 units[97] = "99";
 comments[97] = "Id Pregunta: 11687. NULL";


//  Id pregunta: 11765 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; normativa supondr&aacute; la aprobaci&oacute;n de una nueva ley de contratos?";
 choices[98]= new Array();
 choices[98][0] = "El Reglamento de la Intervenci&oacute;n General del Estado";
 choices[98][1] = "El Acuerdo sobre Libre Comercio de la OCDE";
 choices[98][2] = "Las nuevas Directivas europeas en materia de contrataci&oacute;n&nbsp;";
 choices[98][3] = "El Reglamento funcional del Tribunal Administrativo Central de Recursos Contractuales";
 answers[98] = choices[98][2];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11765. ";


//  Id pregunta: 11780 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale la correcta en lo relativo a discos RAID:";
 choices[99]= new Array();
 choices[99][0] = "Un RAID 2 divide los datos a nivel de bloques y usa un c&oacute;digo de Hamming para la correcci&oacute;n de errores.";
 choices[99][1] = "Un RAID 4 usa divisi&oacute;n a nivel de byte con un disco de paridad dedicado.";
 choices[99][2] = "Un RAID 3 usa divisi&oacute;n a nivel de bytes con un disco de paridad dedicado.";
 choices[99][3] = "Un RAID 5 requiere al menos 4 unidades de disco para ser implementado.";
 answers[99] = choices[99][1];
 units[99] = "48";
 comments[99] = "Id Pregunta: 11780. ";


