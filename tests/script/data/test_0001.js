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

//  Id pregunta: 424 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Seg&uacute;n el Convenio para la Protecci&oacute;n de las personas con respecto al tratamiento automatizado de los datos de car&aacute;cter personal elaborado por el Consejo de Europa, el principio de finalidad corresponde a:";
 choices[0]= new Array();
 choices[0][0] = "Los datos se obtendr&aacute;n y tratar&aacute;n leal y leg&iacute;timamente";
 choices[0][1] = "Los datos se registrar&aacute;n para objetivos determinados y leg&iacute;timos y no se utilizar&aacute;n de forma incompatible con su finalidad";
 choices[0][2] = "Los datos ser&aacute;n adecuados y no exceder&aacute;n de las finalidades para las que se ha registrado.";
 choices[0][3] = "Se conservar&aacute;n s&oacute;lo el tiempo estrictamente necesario para su finalidad";
 answers[0] = choices[0][1];
 units[0] = "29";
 comments[0] = "Id Pregunta: 424. ";


//  Id pregunta: 1372 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Sobre el uso que hacen XML y HTML de etiquetas y atributos:";
 choices[1]= new Array();
 choices[1][0] = "HTML y XML especifican lo que significa cada etiqueta y atributo";
 choices[1][1] = "XML usa las etiquetas s&oacute;lo para delimitar segmentos de datos y deja la interpretaci&oacute;n de los datos a la aplicaci&oacute;n que los lee";
 choices[1][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[1][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[1] = choices[1][1];
 units[1] = "69";
 comments[1] = "Id Pregunta: 1372. NULL";


//  Id pregunta: 1521 AÃ±o de creación de pregunta: 2003-01-01
 questions[2]= "3)  C&oacute;mo se llama la licencia bajo la que se distribuye el software del proyecto GNU";
 choices[2]= new Array();
 choices[2][0] = "MPL";
 choices[2][1] = "BSD";
 choices[2][2] = "GPL";
 choices[2][3] = "PPL";
 answers[2] = choices[2][2];
 units[2] = "61";
 comments[2] = "Id Pregunta: 1521. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2129 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?";
 choices[3]= new Array();
 choices[3][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados";
 choices[3][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones";
 choices[3][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad";
 choices[3][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones";
 answers[3] = choices[3][2];
 units[3] = "82";
 comments[3] = "Id Pregunta: 2129. ";


//  Id pregunta: 2690 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;les son los criterios agentes en el modelo de calidad EFQM de excelencia?";
 choices[4]= new Array();
 choices[4][0] = "Liderazgo, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[4][1] = "Liderazgo, personal, pol&iacute;tica y estrategia, innovaci&oacute;n y apredizaje, procesos";
 choices[4][2] = "Rendimiento, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][0];
 units[4] = "87,88,92";
 comments[4] = "Id Pregunta: 2690. ";


//  Id pregunta: 2824 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Se&ntilde;ale el critero falso en la migraci&oacute;n de aplicaciones en el marco de un ajuste dimensional.";
 choices[5]= new Array();
 choices[5][0] = "Interconectividad: las aplicaciones que requieren un alto grado de conectividad entre los usuarios son las que mejor se adaptan a ser implementadas en un entorno descentralizado sobre una red de &aacute;rea local.";
 choices[5][1] = "Requisitos de tiempo de respuesta: a veces conviene descentralizar la informaci&oacute;n para asegurar un tiempo de respuesta r&aacute;pido, evitando esperas en el acceso a las bases de datos residentes en el mainframe.";
 choices[5][2] = "Seguridad: las aplicaciones con unos requisitos estrictos de seguridad tanto en lo referente a la protecci&oacute;n de informaci&oacute;n sensible, como en lo que respecta a los da&ntilde;os accidentales son candidatas ideales para el ajuste dimensional.";
 choices[5][3] = "Control: al migrar aplicaciones desde un entorno centralizado a uno distribuido se pierde control sobre las mismas. No obstante, est&aacute;n surgiendo herramientas que permiten controlar eficaz y centralizadamente la distribuci&oacute;n e instalaci&oacute;n.";
 answers[5] = choices[5][2];
 units[5] = "90";
 comments[5] = "Id Pregunta: 2824. ";


//  Id pregunta: 4508 AÃ±o de creación de pregunta: 2007-01-01
 questions[6]= "7)  Un organismo europeo de normalizaci&oacute;n, tiene como misi&oacute;n producir normas de telecomunicaciones para hoy y para el futuro. Sus siglas son:";
 choices[6]= new Array();
 choices[6][0] = "ETSI.";
 choices[6][1] = "CEN";
 choices[6][2] = "CENELEC";
 choices[6][3] = "CEPT";
 answers[6] = choices[6][0];
 units[6] = "42";
 comments[6] = "Id Pregunta: 4508. ";


//  Id pregunta: 4568 AÃ±o de creación de pregunta: 2007-01-01
 questions[7]= "8)  Indique cual de los siguientes no es un lenguaje relacional:";
 choices[7]= new Array();
 choices[7][0] = "RQL";
 choices[7][1] = "QUEL";
 choices[7][2] = "QBE";
 choices[7][3] = "SQL";
 answers[7] = choices[7][0];
 units[7] = "58";
 comments[7] = "Id Pregunta: 4568. ";


//  Id pregunta: 4612 AÃ±o de creación de pregunta: 2007-01-01
 questions[8]= "9)  &iquest;Cual de los siguientes conceptos NO es un elemento b&aacute;sico de Magerit?";
 choices[8]= new Array();
 choices[8][0] = "activo";
 choices[8][1] = "salvaguarda";
 choices[8][2] = "amenaza";
 choices[8][3] = "vulnerabilidad";
 answers[8] = choices[8][3];
 units[8] = "33";
 comments[8] = "Id Pregunta: 4612. ";


//  Id pregunta: 4617 AÃ±o de creación de pregunta: 2007-01-01
 questions[9]= "10)  &iquest;Cual de las siguientes opciones es la correcta?";
 choices[9]= new Array();
 choices[9][0] = "un dispositivo NAS comparte bloques mientras que en una SAN se comparten ficheros.";
 choices[9][1] = "en el modelo NAS se utiliza una infraestructura de red de datos, mientras que en una SAN se crea una infraestructura de red nueva dedicada y orientada a compartir dispositivos de almacenamiento.";
 choices[9][2] = "una SAN puede ser compartida por varios servidores o estar dedicada a un &uacute;nico servidor, puede ser local pero no extenderse por &aacute;reas geogr&aacute;ficas mas amplias.";
 choices[9][3] = "en el modelo SAN se utiliza una infraestructura de red de datos, mientras que en una NAS se crea una infraestructura de red nueva dedicada y orientada a compartir dispositivos de almacenamiento.";
 answers[9] = choices[9][1];
 units[9] = "48";
 comments[9] = "Id Pregunta: 4617. ";


//  Id pregunta: 4621 AÃ±o de creación de pregunta: 2007-01-01
 questions[10]= "11)  &iquest;Como se denomina la licencia bajo la que se distribuye la mayor&iacute;a de los programas del proyecto GNU?:";
 choices[10]= new Array();
 choices[10][0] = "FDL";
 choices[10][1] = "GSL";
 choices[10][2] = "GPL";
 choices[10][3] = "GLL";
 answers[10] = choices[10][2];
 units[10] = "36";
 comments[10] = "Id Pregunta: 4621. ";


//  Id pregunta: 4871 AÃ±o de creación de pregunta: 2007-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes NO es un diagrama UML (Unified Modeling Language)?";
 choices[11]= new Array();
 choices[11][0] = "Diagrama de actividades";
 choices[11][1] = "Diagrama de clases";
 choices[11][2] = "Diagrama de secuencia";
 choices[11][3] = "Diagrama de frecuencia";
 answers[11] = choices[11][3];
 units[11] = "82";
 comments[11] = "Id Pregunta: 4871. ";


//  Id pregunta: 5161 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  &iquest;Cu&aacute;ntos canales telef&oacute;nicos de voz (tipo B) soporta el Acceso RDSI Primario?";
 choices[12]= new Array();
 choices[12][0] = "2";
 choices[12][1] = "30";
 choices[12][2] = "24";
 choices[12][3] = "120";
 answers[12] = choices[12][1];
 units[12] = "103";
 comments[12] = "Id Pregunta: 5161. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5494 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  SWT (Standard Widget Toolkit)";
 choices[13]= new Array();
 choices[13][0] = "El rendimiento de la librer&iacute;a AWT es mejor que la de SWT";
 choices[13][1] = "Es una librer&iacute;a que proporciona funcionalidades de componentes gr&aacute;ficos  para la plataforma Eclipse.";
 choices[13][2] = "a y b son ciertas";
 choices[13][3] = "Se ha desarrollado puramente en Java";
 answers[13] = choices[13][1];
 units[13] = "60";
 comments[13] = "Id Pregunta: 5494. NULL";


//  Id pregunta: 5607 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  Las areas funcionales definidas por ISO que todo sistema de gesti&oacute;n de red debe cubrir son:";
 choices[14]= new Array();
 choices[14][0] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Fallos, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Contabilidad, Gesti&oacute;n de Seguridad";
 choices[14][1] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Fallos, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Funcionalidad, Gesti&oacute;n de Seguridad";
 choices[14][2] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Mantenimiento, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Funcionalidad, Gesti&oacute;n de Seguridad";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = choices[14][0];
 units[14] = "104";
 comments[14] = "Id Pregunta: 5607. ";


//  Id pregunta: 5694 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  Se&ntilde;ale cual de los siguientes datos no se almacena en la zona privada del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[15]= new Array();
 choices[15][0] = "Claves privadas del ciudadano";
 choices[15][1] = "Certificado de autenticaci&oacute;n";
 choices[15][2] = "Claves p&uacute;blicas del ciudadano";
 choices[15][3] = "Certificado de firma";
 answers[15] = choices[15][2];
 units[15] = "74";
 comments[15] = "Id Pregunta: 5694. NULL";


//  Id pregunta: 5778 AÃ±o de creación de pregunta: 2009-01-01
 questions[16]= "17)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[16]= new Array();
 choices[16][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden";
 choices[16][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime";
 choices[16][2] = ".NET Framework 4.5 es la &uacute;ltima versi&oacute;n disponible del framework .NET";
 choices[16][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes";
 answers[16] = choices[16][1];
 units[16] = "59";
 comments[16] = "Id Pregunta: 5778. MAP 2008 A1";


//  Id pregunta: 5925 AÃ±o de creación de pregunta: 2009-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes NO es una pauta WAI de accesibilidad para diferentes componentes?";
 choices[17]= new Array();
 choices[17][0] = "ATAG";
 choices[17][1] = "UAAG";
 choices[17][2] = "WCED";
 choices[17][3] = "WCAG";
 answers[17] = choices[17][2];
 units[17] = "39";
 comments[17] = "Id Pregunta: 5925. MAP 2008 A1";


//  Id pregunta: 5977 AÃ±o de creación de pregunta: 2010-01-01
 questions[18]= "19)  El protocolo de encaminamiento m&aacute;s adecuado a utilizar en un punto neutro de interconexi&oacute;n en el que varios proveedores de Internet intercambian tr&aacute;fico es:";
 choices[18]= new Array();
 choices[18][0] = "OSPF.";
 choices[18][1] = "No es adecuado usar encaminamiento din&aacute;mico, se recurre a tablas est&aacute;ticas.";
 choices[18][2] = "RIP.";
 choices[18][3] = "BGP-4.";
 answers[18] = choices[18][3];
 units[18] = "102";
 comments[18] = "Id Pregunta: 5977. TIC A 2009";


//  Id pregunta: 6125 AÃ±o de creación de pregunta: 2010-01-01
 questions[19]= "20)  El acr&oacute;nimo RSS responde a:";
 choices[19]= new Array();
 choices[19][0] = "Rich Site Summary.";
 choices[19][1] = "RDF Site Summary.";
 choices[19][2] = "Really Simple Syndication.";
 choices[19][3] = "Todos los anteriores.";
 answers[19] = choices[19][3];
 units[19] = "69";
 comments[19] = "Id Pregunta: 6125. TIC A 2009";


//  Id pregunta: 6169 AÃ±o de creación de pregunta: 2010-01-01
 questions[20]= "21)  En el proceso de comunicaci&oacute;n no interviene/n:";
 choices[20]= new Array();
 choices[20][0] = "El emisor, el mensaje, el canal y el receptor.";
 choices[20][1] = "El lenguaje.";
 choices[20][2] = "La codificaci&oacute;n.";
 choices[20][3] = "La retroalimentaci&oacute;n.";
 answers[20] = choices[20][1];
 units[20] = "23";
 comments[20] = "Id Pregunta: 6169. ";


//  Id pregunta: 6258 AÃ±o de creación de pregunta: 2010-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de la lista siguiente responde a patrones creacionales de GoF (Gang of Four)?";
 choices[21]= new Array();
 choices[21][0] = "Facade, Composite, Bridge";
 choices[21][1] = "Strategy, Proxy, Iterator";
 choices[21][2] = "Builder, Abstract Factory, Prototype";
 choices[21][3] = "MVC, Session, Router";
 answers[21] = choices[21][2];
 units[21] = "60";
 comments[21] = "Id Pregunta: 6258. TICB-2009, bloque desarrollo";


//  Id pregunta: 6557 AÃ±o de creación de pregunta: 2010-01-01
 questions[22]= "23)  Una Autoridad de Validaci&oacute;n (VA) puede realizar distintos tipos de servicios de validaci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Descarga de CRLs";
 choices[22][1] = "Via OCSP";
 choices[22][2] = "A y B son correctas";
 choices[22][3] = "A y B son incorrectas";
 answers[22] = choices[22][2];
 units[22] = "74";
 comments[22] = "Id Pregunta: 6557. NULL";


//  Id pregunta: 6576 AÃ±o de creación de pregunta: 2010-01-01
 questions[23]= "24)  Un protocolo de tunelado";
 choices[23]= new Array();
 choices[23][0] = "Mueve tramas de una red a otra";
 choices[23][1] = "Coloca dichas tramas en tramas encapsuladas enrutables";
 choices[23][2] = "A y B son correctas";
 choices[23][3] = "A y B son incorrectas";
 answers[23] = choices[23][2];
 units[23] = "101";
 comments[23] = "Id Pregunta: 6576. ";


//  Id pregunta: 8636 AÃ±o de creación de pregunta: 2011-01-01
 questions[24]= "25)  El proceso de desarrollo de M&eacute;trica v3 contiene todas las actividades y tareas que se deben llevar a cabo para:";
 choices[24]= new Array();
 choices[24][0] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta la instalaci&oacute;n del software.";
 choices[24][1] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis del sistema hasta la construcci&oacute;n del software.";
 choices[24][2] = "Desarrollar un sistema, cubriendo desde el dise&ntilde;o hasta la construcci&oacute;n del software.";
 choices[24][3] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta el mantenimiento del software.";
 answers[24] = choices[24][0];
 units[24] = "86";
 comments[24] = "Id Pregunta: 8636. Examen TIC A2 2010 interna";


//  Id pregunta: 8735 AÃ±o de creación de pregunta: 2011-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes ep&iacute;grafes corresponde a una de las tres prioridades de la Comisi&oacute;n Europea a la hora de establecer la estrategia i2010?";
 choices[25]= new Array();
 choices[25][0] = "La consecuci&oacute;n de una sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n basada en la inclusi&oacute;n.";
 choices[25][1] = "La consecuci&oacute;n de un espacio mundial &uacute;nico de la informaci&oacute;n.";
 choices[25][2] = "El impulso de la innovaci&oacute;n y de la inversi&oacute;n en el campo de la investigaci&oacute;n y tecnolog&iacute;a sanitarias.";
 choices[25][3] = "La consecuci&oacute;n de unos medios de comunicaci&oacute;n europeos a la vanguardia tecnol&oacute;gica";
 answers[25] = choices[25][0];
 units[25] = "30";
 comments[25] = "Id Pregunta: 8735. Examen TIC A2 2010 interna. M&aacute;s info: http://europa.eu/legislation_summaries/information_society/strategies/c11328_es.htm";


//  Id pregunta: 8772 AÃ±o de creación de pregunta: 2011-01-01
 questions[26]= "27)  El protocolo PXE utiliza los siguientes protocolos:";
 choices[26]= new Array();
 choices[26][0] = "BOOTP/DHCP, FTP y TCP/IP.";
 choices[26][1] = "TFTP, TCP/IP y direccionamiento est&aacute;tico en los clientes.";
 choices[26][2] = "TCP/IP, BOOTP/DHCP y TFTP.";
 choices[26][3] = "Ninguna de las anteriores.";
 answers[26] = choices[26][2];
 units[26] = "100";
 comments[26] = "Id Pregunta: 8772. Examen UPM A2 2011";


//  Id pregunta: 8886 AÃ±o de creación de pregunta: 2011-01-01
 questions[27]= "28)  &iquest;Qu&eacute; Informaci&oacute;n contiene una SIM?";
 choices[27]= new Array();
 choices[27][0] = "IMSI";
 choices[27][1] = "PIN";
 choices[27][2] = "OMC";
 choices[27][3] = "La respuesta A y B son correctas";
 answers[27] = choices[27][3];
 units[27] = "108";
 comments[27] = "Id Pregunta: 8886. ";


//  Id pregunta: 9004 AÃ±o de creación de pregunta: 2011-01-01
 questions[28]= "29)  No es una infracci&oacute;n grave seg&uacute;n la LOPD:";
 choices[28]= new Array();
 choices[28][0] = "El incumplimiento de los restantes deberes de notificaci&oacute;n o requerimiento al afectado impuestos por esta Ley y sus disposiciones de desarrollo.";
 choices[28][1] = "Proceder a la creaci&oacute;n de ficheros de titularidad privada o iniciar la recogida de datos de car&aacute;cter personal para los mismos con finalidades distintas de las queconstituyen el objeto leg&iacute;timo de la empresa o entidad.";
 choices[28][2] = "Mantener los ficheros, locales, programas o equipos que contengan datos de car&aacute;cter personal sin las debidas condiciones de seguridad que por v&iacute;a reglamentaria se determinen.";
 choices[28][3] = "Tratar datos de car&aacute;cter personal sin recabar el consentimiento de las personas afectadas, cuando el mismo sea necesario conforme a lo dispuesto en esta Ley y sus disposiciones de desarrollo.";
 answers[28] = choices[28][1];
 units[28] = "29";
 comments[28] = "Id Pregunta: 9004. ";


//  Id pregunta: 9016 AÃ±o de creación de pregunta: 2011-01-01
 questions[29]= "30)  Una de las causas del &quot;aliasing&quot; es consecuencia de:";
 choices[29]= new Array();
 choices[29][0] = "Muestrear la se&ntilde;al a una frecuencia mayor que la de Nyquist.";
 choices[29][1] = "Muestrear la se&ntilde;al a la frecuencia de Nyquist.";
 choices[29][2] = "Muestrear la se&ntilde;al a una frecuencia inferior a la de Nyquist.";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = choices[29][2];
 units[29] = "99";
 comments[29] = "Id Pregunta: 9016. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9053 AÃ±o de creación de pregunta: 2016-01-01
 questions[30]= "31)  &iquest;Cual de las siguientes NO es un fase de desarrollo web?";
 choices[30]= new Array();
 choices[30][0] = "An&aacute;lisis de requisitos";
 choices[30][1] = "Finalizaci&oacute;n";
 choices[30][2] = "Lanzamiento";
 choices[30][3] = "Desarrollo";
 answers[30] = choices[30][1];
 units[30] = "39";
 comments[30] = "Id Pregunta: 9053. ";


//  Id pregunta: 9457 AÃ±o de creación de pregunta: 2013-01-01
 questions[31]= "32)  Seg&uacute;n Codd, una entidad que no contiene grupos repetitivos est&aacute;, al menos, en:";
 choices[31]= new Array();
 choices[31][0] = "Primera Forma Normal.";
 choices[31][1] = "Segunda Forma Normal.";
 choices[31][2] = "Tercera Forma Normal.";
 choices[31][3] = "Forma Normal de Boyce-Codd.";
 answers[31] = choices[31][0];
 units[31] = "58";
 comments[31] = "Id Pregunta: 9457. ";


//  Id pregunta: 9755 AÃ±o de creación de pregunta: 2014-01-01
 questions[32]= "33)  En M&eacute;trica v3, la actividad &quot;Establecimiento de requisitos de implantaci&oacute;n&quot; se lleva a cabo en:";
 choices[32]= new Array();
 choices[32][0] = "ASI";
 choices[32][1] = "DSI";
 choices[32][2] = "IAS";
 choices[32][3] = "ASI y DSI";
 answers[32] = choices[32][1];
 units[32] = "86";
 comments[32] = "Id Pregunta: 9755. Actividad DSI.11. El resto de actividades referentes a implantaci&oacute;n se llevan a cabo en IAS";


//  Id pregunta: 9840 AÃ±o de creación de pregunta: 2014-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes opciones est&aacute; considerada como la caracter&iacute;stica m&aacute;s segura de una red WLAN?";
 choices[33]= new Array();
 choices[33][0] = "Configuraci&oacute;n de SSID (Service Ser Identifier).";
 choices[33][1] = "Clave WEP.";
 choices[33][2] = "Selecci&oacute;n del canal.";
 choices[33][3] = "Configuraci&oacute;n de la energ&iacute;a.";
 answers[33] = choices[33][1];
 units[33] = "111";
 comments[33] = "Id Pregunta: 9840. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 10042 AÃ±o de creación de pregunta: 2014-01-01
 questions[34]= "35)  De entre los siguientes, &iquest;qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "RSVP ";
 choices[34][1] = "ARP";
 choices[34][2] = "802.1ar ";
 choices[34][3] = "H.264";
 answers[34] = choices[34][0];
 units[34] = "100, 109";
 comments[34] = "Id Pregunta: 10042. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10237 AÃ±o de creación de pregunta: 2014-01-01
 questions[35]= "36)  La tecnolog&iacute;a que nos permite trabajar en Java con servicios de directorio como LDAP, Active Directory, se conoce como:";
 choices[35]= new Array();
 choices[35][0] = "Java Messaging Services (JMS)";
 choices[35][1] = "Java Naming and Directory Interface (JNDI)";
 choices[35][2] = "Remote Method Invocation (RMI)";
 choices[35][3] = "JavaBeans Activation Framework (JMF)";
 answers[35] = choices[35][1];
 units[35] = "116";
 comments[35] = "Id Pregunta: 10237. NULL";


//  Id pregunta: 10594 AÃ±o de creación de pregunta: 2015-01-01
 questions[36]= "37)  Los programas de ordenador...";
 choices[36]= new Array();
 choices[36][0] = "&hellip; nunca pueden ser objeto de una patente.";
 choices[36][1] = "&hellip; son patentables en la medida en que forman parte de una invenci&oacute;n.";
 choices[36][2] = "&hellip; pueden ser siempre patentables.";
 choices[36][3] = "&hellip; son patentables siempre y cuando est&eacute;n escritos en lenguaje de alto nivel.";
 answers[36] = choices[36][1];
 units[36] = "36";
 comments[36] = "Id Pregunta: 10594. ";


//  Id pregunta: 10599 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  datos.gob.es...";
 choices[37]= new Array();
 choices[37][0] = "&hellip; es una iniciativa con el fin de promocionar la protecci&oacute;n de datos de car&aacute;cter personal en Espa&ntilde;a.";
 choices[37][1] = "&hellip; es una sede electr&oacute;nica para la reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico.";
 choices[37][2] = "&hellip; aloja el Portal de la Transparencia.";
 choices[37][3] = "&hellip; aloja el Cat&aacute;logo Nacional de datos abiertos.";
 answers[37] = choices[37][3];
 units[37] = "22";
 comments[37] = "Id Pregunta: 10599. ";


//  Id pregunta: 10600 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  La creaci&oacute;n de una Estructura de Desglose del Trabajo (EDT) forma parte de:";
 choices[38]= new Array();
 choices[38][0] = "La gesti&oacute;n de tiempo el proyecto.";
 choices[38][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[38][2] = "La gesti&oacute;n de riesgos del proyecto.";
 choices[38][3] = "La gesti&oacute;n de costes del proyecto.";
 answers[38] = choices[38][1];
 units[38] = "28";
 comments[38] = "Id Pregunta: 10600. ";


//  Id pregunta: 10606 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  Son principios arquitect&oacute;nicos de dise&ntilde;o de SOA:";
 choices[39]= new Array();
 choices[39][0] = "Encapsulaci&oacute;n, autonom&iacute;a y m&aacute;xima dependencia entre servicios.";
 choices[39][1] = "Optimizaci&oacute;n, abstracci&oacute;n y fiabilidad.";
 choices[39][2] = "Composici&oacute;n, descubrimiento y reutilizaci&oacute;n.";
 choices[39][3] = "Fuerte acoplamiento, contrato y madurez.";
 answers[39] = choices[39][2];
 units[39] = "51";
 comments[39] = "Id Pregunta: 10606. ";


//  Id pregunta: 10643 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de estos no es un concepto fundamental de la excelencia seg&uacute;n el modelo EFQM?";
 choices[40]= new Array();
 choices[40][0] = "Orientaci&oacute;n hacia los resultados";
 choices[40][1] = "Liderazgo y coherencia en los objetivos";
 choices[40][2] = "Desarrollo de Alianzas";
 choices[40][3] = "Planificaci&oacute;n a corto plazo";
 answers[40] = choices[40][3];
 units[40] = "92";
 comments[40] = "Id Pregunta: 10643. ";


//  Id pregunta: 10793 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  En Android, las aplicaciones se distribuyen en paquetes:";
 choices[41]= new Array();
 choices[41][0] = "yum";
 choices[41][1] = "apk";
 choices[41][2] = "ipa";
 choices[41][3] = "gpm";
 answers[41] = choices[41][1];
 units[41] = "52";
 comments[41] = "Id Pregunta: 10793. Examen GSI 2014";


//  Id pregunta: 10806 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  Seg&uacute;n Magerit v3, &iquest;qu&eacute; concepto se corresponder&iacute;a con la definici&oacute;n: &quot;proceso espec&iacute;fico cuyo objetivo es legitimar al sistema para formar parte de sistemas m&aacute;s amplios&quot;?";
 choices[42]= new Array();
 choices[42][0] = "Auditor&iacute;a.";
 choices[42][1] = "Acreditaci&oacute;n.";
 choices[42][2] = "Certificaci&oacute;n.";
 choices[42][3] = "Evaluaci&oacute;n.";
 answers[42] = choices[42][1];
 units[42] = "33";
 comments[42] = "Id Pregunta: 10806. Examen GSI 2014";


//  Id pregunta: 10814 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del modelo de ciclo de vida en cascada?";
 choices[43]= new Array();
 choices[43][0] = "Fue un modelo definido por Winston W. Royce.";
 choices[43][1] = "Es un modelo que permite reaccionar a los cambios en los requisitos.";
 choices[43][2] = "Funciona bien en productos maduros y equipos d&eacute;biles.";
 choices[43][3] = "Hasta las etapas finales del proyecto no ofrece una versi&oacute;n operativa del programa.";
 answers[43] = choices[43][1];
 units[43] = "76, 79";
 comments[43] = "Id Pregunta: 10814. Examen GSI 2014";


//  Id pregunta: 10821 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  En M&eacute;trica 3, el &quot;t&eacute;cnico de sistemas&quot; est&aacute; incluido en el perfil:";
 choices[44]= new Array();
 choices[44][0] = "Consultor.";
 choices[44][1] = "Analista.";
 choices[44][2] = "Programador.";
 choices[44][3] = "Jefe de Proyecto.";
 answers[44] = choices[44][0];
 units[44] = "86";
 comments[44] = "Id Pregunta: 10821. Examen GSI 2014";


//  Id pregunta: 10825 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  Indicar cu&aacute;l de los siguientes diagramas se emplea para capturar los requisitos funcionales de un sistema y expresarlos desde el punto de vista del usuario seg&uacute;n M&eacute;trica v3:";
 choices[45]= new Array();
 choices[45][0] = "Diagrama de secuencia.";
 choices[45][1] = "Diagrama de colaboraci&oacute;n.";
 choices[45][2] = "Diagrama de clases.";
 choices[45][3] = "Diagrama de Casos de Uso.";
 answers[45] = choices[45][3];
 units[45] = "86, 82, 84";
 comments[45] = "Id Pregunta: 10825. Examen GSI 2014";


//  Id pregunta: 10827 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Diagramas de Flujo de Datos (DFD) es correcta?";
 choices[46]= new Array();
 choices[46][0] = "Son elementos propios de este diagrama: entidades externas, procesos, almacenes de datos y flujos de datos.";
 choices[46][1] = "Son elementos propios de este diagrama: entidades, atributos, relaciones y jerarqu&iacute;as.";
 choices[46][2] = "Son elementos propios de este diagrama: diccionarios de datos, m&oacute;dulos, procesos y flujos.";
 choices[46][3] = "Se trata de una t&eacute;cnica que se emplea en la fase de Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI) de M&eacute;trica v3.";
 answers[46] = choices[46][0];
 units[46] = "81";
 comments[46] = "Id Pregunta: 10827. Examen GSI 2014";


//  Id pregunta: 10852 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[47]= new Array();
 choices[47][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[47][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[47][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[47][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[47] = choices[47][3];
 units[47] = "59, 115";
 comments[47] = "Id Pregunta: 10852. Examen GSI 2014";


//  Id pregunta: 10856 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  La herramienta que incluye JAXB para convertir un XML Schema a representaciones de clases Java se denomina:";
 choices[48]= new Array();
 choices[48][0] = "jconverter";
 choices[48][1] = "schemagen";
 choices[48][2] = "xjc";
 choices[48][3] = "jaxbws";
 answers[48] = choices[48][2];
 units[48] = "69";
 comments[48] = "Id Pregunta: 10856. Examen GSI 2014";


//  Id pregunta: 10859 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  El ciclo de Deming es una estrategia de mejora continua de la calidad en la administraci&oacute;n de una organizaci&oacute;n, los 4 pasos de la estrategia son:";
 choices[49]= new Array();
 choices[49][0] = "Plan, Do, Construct, Approval (Planificar, Hacer, Construir, Aprobar).";
 choices[49][1] = "Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar).";
 choices[49][2] = "Plan, Develop, Control, Anticipate (Planificar, Desarrollar, Controlar, Tener previsto).";
 choices[49][3] = "Plan, Deduct, Control, Approval (Planificar, Deducir, Controlar, Aprobar).";
 answers[49] = choices[49][1];
 units[49] = "88";
 comments[49] = "Id Pregunta: 10859. Examen GSI 2014";


//  Id pregunta: 10863 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  De acuerdo a las operaciones que se requieran desarrollar, los Data Marts pueden adoptar diversas arquitecturas, se&ntilde;ale la caracter&iacute;stica correspondiente a la arquitectura Top-Down:";
 choices[50]= new Array();
 choices[50][0] = "Se definen previamente los Data Marts (DM) y luego se integran en un Data Warehouse (DW) centralizado. Los DM se cargan a trav&eacute;s de procesos ETL.";
 choices[50][1] = "Se define previamente un DW y un DM principal que se cargan a trav&eacute;s de procesos ETL. El DW alimentar&aacute; a otros DW, y el DM principal alimentar&aacute; a otros DM.";
 choices[50][2] = "Se define una base de datos (BD) principal que se carga mediante procesos ETL desde todas las BD corporativas, esta BD alimenta en exclusiva a todos los DM y DW existentes.";
 choices[50][3] = "Primero se define el DW, el cual es cargado a trav&eacute;s de procesos ETL y luego este alimenta a los diferentes DM. Cada DM recibir&aacute; los datos que correspondan al tema/departamento que traten.";
 answers[50] = choices[50][3];
 units[50] = "68, 71";
 comments[50] = "Id Pregunta: 10863. Examen GSI 2014";


//  Id pregunta: 10867 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  El comando ping es el acr&oacute;nimo de:";
 choices[51]= new Array();
 choices[51][0] = "Packet Internet Group.";
 choices[51][1] = "Packet Internet Gangway.";
 choices[51][2] = "Packet Internet Gate.";
 choices[51][3] = "Packet Internet Groper.";
 answers[51] = choices[51][3];
 units[51] = "112";
 comments[51] = "Id Pregunta: 10867. Examen GSI 2014";


//  Id pregunta: 10879 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  Se&ntilde;ale qu&eacute; norma del IEEE normaliza la tecnolog&iacute;a Power over Ethernet Plus (PoE +):";
 choices[52]= new Array();
 choices[52][0] = "IEEE 802.3ab";
 choices[52][1] = "IEEE 802.3at";
 choices[52][2] = "IEEE 802.3ap";
 choices[52][3] = "No es un est&aacute;ndar del IEEE sino que es una categor&iacute;a de EIA/TIA 568b.";
 answers[52] = choices[52][1];
 units[52] = "107";
 comments[52] = "Id Pregunta: 10879. Examen GSI 2014";


//  Id pregunta: 10906 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  Se&ntilde;ale la respuesta correcta seg&uacute;n lo que dicta el art&iacute;culo 79 de la Ley 9/2014, General de Telecomunicaciones:";
 choices[53]= new Array();
 choices[53][0] = "Por la comisi&oacute;n de infracciones muy graves se impondr&aacute; al infractor multa por importe de hasta 30 millones de euros.";
 choices[53][1] = "Las infracciones muy graves, en funci&oacute;n de sus circunstancias, podr&aacute;n dar lugar a la inhabilitaci&oacute;n hasta de 10 a&ntilde;os del operador para la explotaci&oacute;n de redes o la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 choices[53][2] = "Por la comisi&oacute;n de infracciones graves se impondr&aacute; al infractor multa por importe de hasta 5 millones de euros.";
 choices[53][3] = "Por la comisi&oacute;n de infracciones leves se impondr&aacute; al infractor una multa por importe de hasta 50 mil euros.";
 answers[53] = choices[53][3];
 units[53] = "110";
 comments[53] = "Id Pregunta: 10906. Examen GSI 2014";


//  Id pregunta: 10925 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes metodolog&iacute;as es considerada como una metodolog&iacute;a &aacute;gil?";
 choices[54]= new Array();
 choices[54][0] = "RAD.";
 choices[54][1] = "OpenUP.";
 choices[54][2] = "SSADM.";
 choices[54][3] = "UP.";
 answers[54] = choices[54][1];
 units[54] = "79";
 comments[54] = "Id Pregunta: 10925. TIC A1 AGE 2014";


//  Id pregunta: 10928 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  La facturaci&oacute;n electr&oacute;nica ser&aacute; obligatoria para las Administraciones P&uacute;blicas en:";
 choices[55]= new Array();
 choices[55][0] = "Enero de 2015.";
 choices[55][1] = "Enero de 2016.";
 choices[55][2] = "Diciembre de 2016.";
 choices[55][3] = "Diciembre de 2015.";
 answers[55] = choices[55][0];
 units[55] = "70";
 comments[55] = "Id Pregunta: 10928. TIC A1 AGE 2014";


//  Id pregunta: 10932 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  En el modelo CMMI, el &aacute;rea de proceso &quot;An&aacute;lisis causal y resoluci&oacute;n&quot; se encuentra en el nivel de madurez:";
 choices[56]= new Array();
 choices[56][0] = "Nivel 2 - Gestionado.";
 choices[56][1] = "Nivel 5 - Optimizaci&oacute;n.";
 choices[56][2] = "Nivel 4 - Gestionado cuantitativamente.";
 choices[56][3] = "Nivel 3 - Definido.";
 answers[56] = choices[56][1];
 units[56] = "87";
 comments[56] = "Id Pregunta: 10932. TIC A1 AGE 2014";


//  Id pregunta: 10956 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  Un agente inteligente es un programa inform&aacute;tico que:";
 choices[57]= new Array();
 choices[57][0] = "Por encargo de un usuario u otro programa realiza sugerencias determin&iacute;sticas predeterminadas.";
 choices[57][1] = "Por encargo de un usuario realiza sugerencias que requieren cierto grado de aprendizaje, sin llegar a ejecutar tareas.";
 choices[57][2] = "Por encargo de un usuario u otro programa, realiza de forma aut&oacute;noma tareas que requieren cierto grado de inteligencia y aprendizaje.";
 choices[57][3] = "Por encargo de un usuario realiza sugerencias que deben ser evaluadas por el usuario que las encarga antes de ser ejecutadas.";
 answers[57] = choices[57][2];
 units[57] = "63";
 comments[57] = "Id Pregunta: 10956. TIC A1 AGE 2014";


//  Id pregunta: 10957 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  Los certificados electr&oacute;nicos contenidos en el DNI electr&oacute;nico tienen una vigencia de:";
 choices[58]= new Array();
 choices[58][0] = "30 meses.";
 choices[58][1] = "48 meses.";
 choices[58][2] = "24 meses.";
 choices[58][3] = "36 meses.";
 answers[58] = choices[58][0];
 units[58] = "74";
 comments[58] = "Id Pregunta: 10957. TIC A1 AGE 2014";


//  Id pregunta: 10961 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  &iquest;C&uacute;al de las siguientes opciones NO es un plan incluido en la Agenda Digital para Espa&ntilde;a?";
 choices[59]= new Array();
 choices[59][0] = "Contenidos y econom&iacute;a digital.";
 choices[59][1] = "Inclusi&oacute;n digital y empleabilidad.";
 choices[59][2] = "Confianza en el &aacute;mbito digital.";
 choices[59][3] = "Servicios p&uacute;blicos en la nube.";
 answers[59] = choices[59][3];
 units[59] = "30";
 comments[59] = "Id Pregunta: 10961. TIC A1 AGE 2014";


//  Id pregunta: 10966 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  NO es una plataforma de virtualizaci&oacute;n:";
 choices[60]= new Array();
 choices[60][0] = "KVM.";
 choices[60][1] = "XEN.";
 choices[60][2] = "Hyper-V.";
 choices[60][3] = "VSuite.";
 answers[60] = choices[60][3];
 units[60] = "119";
 comments[60] = "Id Pregunta: 10966. TIC A1 AGE 2014";


//  Id pregunta: 10974 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  Al configurar una red Ethernet, es correcto que:";
 choices[61]= new Array();
 choices[61][0] = "El administrador de red debe hacer un listado de todas las direcciones MAC que se conectar&aacute;n.";
 choices[61][1] = "El administrador de red debe configurar en cada equipo la direcci&oacute;n MAC de la pasarela por defecto.";
 choices[61][2] = "El administrador de red debe instalar en todos los equipos la compatibilidad con 802.3 (Ethernet) y 802.4 (Gigabit Ethernet).";
 choices[61][3] = "El administrador de red debe establecer los segmentos de la red.";
 answers[61] = choices[61][3];
 units[61] = "101";
 comments[61] = "Id Pregunta: 10974. TIC A1 AGE 2014";


//  Id pregunta: 11005 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  Respecto a la intranet de un ministerio se&ntilde;ale la respuesta correcta:";
 choices[62]= new Array();
 choices[62][0] = "No puede estar conectada a la Red Sara, para evitar fugas de informaci&oacute;n.";
 choices[62][1] = "Se incluye dentro de la zona desmilitarizada p&uacute;blica (DMZ), para garantizar el acceso por teletrabajo.";
 choices[62][2] = "No podr&aacute; usar un nombre interno como ministerio.age en su certificado SSL a partir de 2016.";
 choices[62][3] = "Debe usar el direccionamiento privado 10.0.0.0/24, 192.168.0.0/16 y 172.16.0.0/16.";
 answers[62] = choices[62][2];
 units[62] = "113";
 comments[62] = "Id Pregunta: 11005. TIC A1 AGE 2014";


//  Id pregunta: 11020 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes es una es una metodolog&iacute;a de gesti&oacute;n de software que ayuda a definir e implementar procesos para optimizar la inversi&oacute;n en software cumpliendo con la legislaci&oacute;n aplicable?";
 choices[63]= new Array();
 choices[63][0] = "BSA";
 choices[63][1] = "SAM";
 choices[63][2] = "Copyleft";
 choices[63][3] = "Copyright";
 answers[63] = choices[63][1];
 units[63] = "37";
 comments[63] = "Id Pregunta: 11020. SAM (Gesti&oacute;n de Activos de Software)";


//  Id pregunta: 11041 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  &iquest;Qu&eacute; versi&oacute;n de Java incorpora de forma completa la librer&iacute;a JavaFX?";
 choices[64]= new Array();
 choices[64][0] = "5";
 choices[64][1] = "6";
 choices[64][2] = "7";
 choices[64][3] = "8";
 answers[64] = choices[64][3];
 units[64] = "60";
 comments[64] = "Id Pregunta: 11041. Viiene incluida desde la versi&oacute;n 7u6, pero no se incorpora de forma completa hasta la versi&oacute;n 8";


//  Id pregunta: 11092 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  &iquest;Cu&aacute;les son las 4 fases de  la evoluci&oacute;n de la inversi&oacute;n en sistemas de informaci&oacute;n en el tiempo de acuerdo con el modelo de Gibson y Nolan?";
 choices[65]= new Array();
 choices[65][0] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n, madurez";
 choices[65][1] = "Iniciaci&oacute;n, control, integraci&oacute;n, madurez";
 choices[65][2] = "Iniciaci&oacute;n, dise&ntilde;o, implementaci&oacute;n, transici&oacute;n";
 choices[65][3] = "Iniciaci&oacute;n, control, administraci&oacute;n, madurez";
 answers[65] = choices[65][0];
 units[65] = "21";
 comments[65] = "Id Pregunta: 11092. ";


//  Id pregunta: 11094 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes no es un nivel del modelo de Capacidad y Madurez (CMM)?";
 choices[66]= new Array();
 choices[66][0] = "Repetible";
 choices[66][1] = "Verificado";
 choices[66][2] = "Gestionado";
 choices[66][3] = "Optimizado";
 answers[66] = choices[66][1];
 units[66] = "27";
 comments[66] = "Id Pregunta: 11094. ";


//  Id pregunta: 11103 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Seleccione la opci&oacute;n verdadera respecto al Servicio de Verificaci&oacute;n de Datos de Identidad";
 choices[67]= new Array();
 choices[67][0] = "Permite confirmar o verificar que un determinado conjunto de datos corresponden al n&uacute;mero de identificaci&oacute;n introducido por el usuario.";
 choices[67][1] = "La validaci&oacute;n de dichos datos se realiza contra las Bases de Datos del organismo que los custodia: Direcci&oacute;n General Polic&iacute;a (DGP).";
 choices[67][2] = "Las respuestas a) y b) son falsas";
 choices[67][3] = "Las respuestas a) y b) son verdaderas";
 answers[67] = choices[67][3];
 units[67] = "30";
 comments[67] = "Id Pregunta: 11103. ";


//  Id pregunta: 11126 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  De acuerdo con la Taxonom&iacute;a de Flynn, como se denominan los sistemas de arquitectura serie de Von Neummann?";
 choices[68]= new Array();
 choices[68][0] = "SISD";
 choices[68][1] = "SIMD";
 choices[68][2] = "MISD";
 choices[68][3] = "MIMD";
 answers[68] = choices[68][0];
 units[68] = "45";
 comments[68] = "Id Pregunta: 11126. ";


//  Id pregunta: 11137 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes es un operador derivado de algebra relacional?";
 choices[69]= new Array();
 choices[69][0] = "Intersecci&oacute;n";
 choices[69][1] = "Uni&oacute;n";
 choices[69][2] = "Proyecci&oacute;n";
 choices[69][3] = "Selecci&oacute;n";
 answers[69] = choices[69][0];
 units[69] = "58";
 comments[69] = "Id Pregunta: 11137. ";


//  Id pregunta: 11143 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes no es una soluci&oacute;n CRM?";
 choices[70]= new Array();
 choices[70][0] = "Oracle Siebel CRM";
 choices[70][1] = "Microsoft Dynamics CRM";
 choices[70][2] = "Jive Software";
 choices[70][3] = "IBM RightNow Sugar CRM";
 answers[70] = choices[70][3];
 units[70] = "65";
 comments[70] = "Id Pregunta: 11143. ";


//  Id pregunta: 11154 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  En un an&aacute;lisis DAFO previo a la definici&oacute;n de la estrategia de una organizaci&oacute;n, &iquest;qu&eacute; son las debilidades?";
 choices[71]= new Array();
 choices[71][0] = "Aspectos que limitan o reducen la capacidad de desarrollo efectivo de la estrategia de la organizaci&oacute;n  y deben, por tanto, ser controladas y superadas.";
 choices[71][1] = "Todo aquello que pueda representar una posibilidad para mejorar la rentabilidad de la misma o aumentar la cifra de sus negocios.";
 choices[71][2] = "Toda fuerza del entorno que puede impedir la implantaci&oacute;n de una estrategia, o bien reducir su efectividad, o incrementar los riesgos de la misma,";
 choices[71][3] = "Todos aquellos aspectos de la organizaci&oacute;n que no son ventajas competitivas respecto a los competidores en un mismo mercado";
 answers[71] = choices[71][0];
 units[71] = "77";
 comments[71] = "Id Pregunta: 11154. ";


//  Id pregunta: 11156 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Seleccione la respuesta err&oacute;nea de los diagramas E/R:";
 choices[72]= new Array();
 choices[72][0] = "Los atributos multivalorados son aquellos que pueden contener m&aacute;s de un valor simult&aacute;neamente, y monovalorados los que s&oacute;lo pueden contener un valor";
 choices[72][1] = "Los atributos monovalorados se representan por un nombre dentro de una elipse, mientras que los multivalorados por un nombre dentro de una doble elipse.";
 choices[72][2] = "Se dice que un atributo es compuesto cuando puede descomponerse en otros componentes o atributos m&aacute;s peque&ntilde;os, y simple en otro caso.";
 choices[72][3] = "Se dice que un atributo es cardinal si obligatoriamente tiene que tener al menos un valor";
 answers[72] = choices[72][3];
 units[72] = "80";
 comments[72] = "Id Pregunta: 11156. ";


//  Id pregunta: 11163 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  &iquest;A qu&eacute; concepto se corresponde la definici&oacute;n: &ldquo;proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original o bien a un nivel superior de abstracci&oacute;n.&rdquo;";
 choices[73]= new Array();
 choices[73][0] = "Ingenier&iacute;a inversa";
 choices[73][1] = "Reingenier&iacute;a";
 choices[73][2] = "Ingenier&iacute;a hacia delante";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][0];
 units[73] = "91";
 comments[73] = "Id Pregunta: 11163. ";


//  Id pregunta: 11166 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Cu&aacute;les de las siguientes t&eacute;cnicas no suele utilizarse en los sistemas de reconocimiento de habla?";
 choices[74]= new Array();
 choices[74][0] = "Dynamic Time Warping";
 choices[74][1] = "Hidden Markov Model";
 choices[74][2] = "Neural Networks";
 choices[74][3] = "Todas las anteriores se suelen utilizar en los sistemas de reconocimiento de habla";
 answers[74] = choices[74][3];
 units[74] = "93";
 comments[74] = "Id Pregunta: 11166. ";


//  Id pregunta: 11168 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  &iquest;Qui&eacute;n es el creador de la l&oacute;gica borrosa?";
 choices[75]= new Array();
 choices[75][0] = "Lofti Zadeh";
 choices[75][1] = "Lempel-Ziv-Welch";
 choices[75][2] = "Donald Hebb&nbsp;";
 choices[75][3] = "Augustin Louis Cauchy";
 answers[75] = choices[75][0];
 units[75] = "94";
 comments[75] = "Id Pregunta: 11168. ";


//  Id pregunta: 11179 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento es de nivel interno?";
 choices[76]= new Array();
 choices[76][0] = "OSPF";
 choices[76][1] = "IS-IS";
 choices[76][2] = "RIP";
 choices[76][3] = "Todos los anteriores";
 answers[76] = choices[76][3];
 units[76] = "103";
 comments[76] = "Id Pregunta: 11179. ";


//  Id pregunta: 11183 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;En qu&eacute; banda transmite UMTS?";
 choices[77]= new Array();
 choices[77][0] = "1.9-2.1 GHz";
 choices[77][1] = "2.4 GHz";
 choices[77][2] = "5 GHz";
 choices[77][3] = "10-66 GHz";
 answers[77] = choices[77][0];
 units[77] = "108";
 comments[77] = "Id Pregunta: 11183. ";


//  Id pregunta: 11220 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de Microsoft .NET?";
 choices[78]= new Array();
 choices[78][0] = "Servicios: ASP.NET y WCF.";
 choices[78][1] = "Aplicaciones de escritorio: WinForms, WPF.";
 choices[78][2] = "Aplicaciones para dispositivos m&oacute;viles: Silverlait, WinFX.";
 choices[78][3] = "Aplicaciones en la nube: Azure.";
 answers[78] = choices[78][2];
 units[78] = "59";
 comments[78] = "Id Pregunta: 11220. ";


//  Id pregunta: 11229 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Cu&aacute;l de las siguientes respuestas es cierta sobre la tecnolog&iacute;a Java Server Faces (JSF)?";
 choices[79]= new Array();
 choices[79][0] = "JSF 2.0 est&aacute; definido especificaci&oacute;n Java EE JSR-314.";
 choices[79][1] = "La implementaci&oacute;n de referencia de la especificaci&oacute;n JSF es el proyecto Oracle Mojarra.";
 choices[79][2] = "JSF 2 utiliza Facelets como su sistema de plantillas por defecto.";
 choices[79][3] = "Todas las respuestas son ciertas.";
 answers[79] = choices[79][3];
 units[79] = "116";
 comments[79] = "Id Pregunta: 11229. ";


//  Id pregunta: 11266 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Indique los nuevos procesos que a&ntilde;ade la versi&oacute;n 3 de ITIL sobre la anterior en la fase de operaci&oacute;n del servicio:";
 choices[80]= new Array();
 choices[80][0] = "Gesti&oacute;n de incidencias, gesti&oacute;n de peticiones y gesti&oacute;n de alertas.";
 choices[80][1] = "Gesti&oacute;n de eventos, gesti&oacute;n de peticiones y gesti&oacute;n de acceso a los servicios TI.";
 choices[80][2] = "Gesti&oacute;n de los proveedores y gesti&oacute;n de la seguridad TI.";
 choices[80][3] = "No existe tal fase de operaci&oacute;n dentro de la versi&oacute;n 3 de ITIL.";
 answers[80] = choices[80][1];
 units[80] = "98";
 comments[80] = "Id Pregunta: 11266. ";


//  Id pregunta: 11321 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Cu&aacute;l de los siguientes conceptos no est&aacute; relacionada con la web sem&aacute;ntica";
 choices[81]= new Array();
 choices[81][0] = "SPARQL";
 choices[81][1] = "OWL";
 choices[81][2] = "DCAT";
 choices[81][3] = "XSN";
 answers[81] = choices[81][3];
 units[81] = "120";
 comments[81] = "Id Pregunta: 11321. ";


//  Id pregunta: 11333 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Distintos gobiernos regionales est&aacute;n desarrollando sus propias distribuciones Linux. Seleccione cu&aacute;l no es una de ellas:";
 choices[82]= new Array();
 choices[82][0] = "LinEx en Extremadura,";
 choices[82][1] = "Augustux en Arag&oacute;n";
 choices[82][2] = "AndaLinex en Andaluc&iacute;a";
 choices[82][3] = "LinuxGlobal en Cantabria";
 answers[82] = choices[82][2];
 units[82] = "61";
 comments[82] = "Id Pregunta: 11333. Es Guadalinex";


//  Id pregunta: 11357 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Se&ntilde;ale cu&aacute;l de las siguientes opciones contiene m&eacute;todos de asignaci&oacute;n de pesos en la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta";
 choices[83]= new Array();
 choices[83][0] = "Delphi, Utilidades relativas, UMA, Entrop&iacute;a";
 choices[83][1] = "Delphi, Utilidades relativas, AHP, Entrop&iacute;a";
 choices[83][2] = "Delphi, Utilidades relativas, Electre, Entrop&iacute;a";
 choices[83][3] = "Delphi, Utilidades relativas, Electre, TOPSIS";
 answers[83] = choices[83][1];
 units[83] = "34";
 comments[83] = "Id Pregunta: 11357. ";


//  Id pregunta: 11397 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es la mejor definici&oacute;n de un evento?";
 choices[84]= new Array();
 choices[84][0] = "Una situaci&oacute;n donde un umbral de rendimiento se ha superado y esto impacta a un nivel de servicio acordado";
 choices[84][1] = "Un cambio de estado significativo para la gesti&oacute;n de un servicio TI";
 choices[84][2] = "Un defecto conocido del sistema que genera m&uacute;ltiples incidencias";
 choices[84][3] = "Una reuni&oacute;n planificada entre los clientes y el personal TI para anunciar un servicio nuevo o un programa de mejoras";
 answers[84] = choices[84][1];
 units[84] = "98";
 comments[84] = "Id Pregunta: 11397. ";


//  Id pregunta: 11493 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Qu&eacute; contratos de servicio y suministro est&aacute;n sujetos a regulaci&oacute;n armonizada, seg&uacute;n la Ley de Contratos del Sector P&uacute;blico?";
 choices[85]= new Array();
 choices[85][0] = "Todos los contratos de servicio y suministro est&aacute;n sujetos a regulaci&oacute;n armonizada.";
 choices[85][1] = "Aquellos cuyo valor estimado es igual o superior a 134.000 &euro;, si son adjudicados por la Administraci&oacute;n General del Estado, sus Organismos Aut&oacute;nomos o la Seguridad Social, y aquellos cuyo valor estimado es igual o superior a 207.000 &euro; si son adjudicados por los dem&aacute;s entes p&uacute;blicos.";
 choices[85][2] = "Aquellos cuyo valor estimado es igual o superior a 207.000 &euro;, si son adjudicados por la Administraci&oacute;n General del Estado, sus Organismos Aut&oacute;nomos o la Seguridad Social, y aquellos cuyo valor estimado es igual o superior a 134.000 &euro; si son adjudicados por los dem&aacute;s entes p&uacute;blicos.";
 choices[85][3] = "Ning&uacute;n contrato de suministro, ni de servicio, est&aacute; sujeto a regulaci&oacute;n armonizada.";
 answers[85] = choices[85][1];
 units[85] = "41";
 comments[85] = "Id Pregunta: 11493. Orden HAP/2425/2013, de 23 de diciembre, por la que se publican los l&iacute;mites de los distintos tipos de contratos a efectos de la contrataci&oacute;n del sector p&uacute;blico a partir del 1 de enero de 2014";


//  Id pregunta: 11503 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes NO es un Comit&eacute; creado en el seno de la International Standards Organization (ISO)?";
 choices[86]= new Array();
 choices[86][0] = "DEVCO, Comit&eacute; de Desarrollo";
 choices[86][1] = "COPOLCO, Comit&eacute; de pol&iacute;ticas en materia de consumo";
 choices[86][2] = "QUALCO, Comit&eacute; de calidad";
 choices[86][3] = "CASCO, Comit&eacute; de evaluaci&oacute;n de la conformidad";
 answers[86] = choices[86][2];
 units[86] = "42";
 comments[86] = "Id Pregunta: 11503. NULL";


//  Id pregunta: 11527 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Las distribuciones Debian o Ubuntu, entre otras, permiten instalar habitualmente nuevas utilidades a partir de ficheros .deb. Indique cu&aacute;l de las siguientes sentencias Linux es incorrecta:";
 choices[87]= new Array();
 choices[87][0] = "apt-update";
 choices[87][1] = "dpkg-reconfigure";
 choices[87][2] = "apt-cache search xorg";
 choices[87][3] = "dpkg";
 answers[87] = choices[87][0];
 units[87] = "53";
 comments[87] = "Id Pregunta: 11527. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11552 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ale cu&aacute;l de las siguientes tareas se realiza en la fase de an&aacute;lisis:";
 choices[88]= new Array();
 choices[88][0] = "Elaboraci&oacute;n del modelo f&iacute;sico de procesos.";
 choices[88][1] = "Identificaci&oacute;n de requisitos funcionales del sistema.";
 choices[88][2] = "Definici&oacute;n de la arquitectura t&eacute;cnica del sistema.";
 choices[88][3] = "Elaboraci&oacute;n del modelo f&iacute;sico de datos.";
 answers[88] = choices[88][1];
 units[88] = "78";
 comments[88] = "Id Pregunta: 11552. NULL";


//  Id pregunta: 11563 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Campos de la cabecera Atm que tienen un uso similar con campos de la cabecera Frame Relay.";
 choices[89]= new Array();
 choices[89][0] = "Command and Response y Cell Loss";
 choices[89][1] = "DLCI y PT";
 choices[89][2] = "VPI y VCI";
 choices[89][3] = "DE y CLP";
 answers[89] = choices[89][3];
 units[89] = "109";
 comments[89] = "Id Pregunta: 11563. NULL";


//  Id pregunta: 11577 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En una red H.323, &iquest;Qu&iacute;en tiene las funciones de DNS?";
 choices[90]= new Array();
 choices[90][0] = "MCU";
 choices[90][1] = "LMU";
 choices[90][2] = "GateKeeper";
 choices[90][3] = "GateControler";
 answers[90] = choices[90][2];
 units[90] = "117";
 comments[90] = "Id Pregunta: 11577. NULL";


//  Id pregunta: 11587 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Se&ntilde;ale cu&aacute;l no es uno de los principios del Marco Europeo de Interoperabilidad:";
 choices[91]= new Array();
 choices[91][0] = "Subsidiariedad y proporcionalidad";
 choices[91][1] = "Multiling&uuml;ismo";
 choices[91][2] = "Conservaci&oacute;n de la informaci&oacute;n";
 choices[91][3] = "Eficiencia";
 answers[91] = choices[91][3];
 units[91] = "40";
 comments[91] = "Id Pregunta: 11587. ";


//  Id pregunta: 11621 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale la respuesta incorrecta con respecto a los MOOC:";
 choices[92]= new Array();
 choices[92][0] = "Son similar a cualquier curso en l&iacute;nea.";
 choices[92][1] = "El n&uacute;mero de participantes es ilimitado.";
 choices[92][2] = "MOOC son las siglas de Masive Open Online Course.";
 choices[92][3] = "Se basan en la interacci&oacute;n social.";
 answers[92] = choices[92][0];
 units[92] = "66";
 comments[92] = "Id Pregunta: 11621. ";


//  Id pregunta: 11665 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Las dimensiones can&oacute;nicas de la seguridad son:";
 choices[93]= new Array();
 choices[93][0] = "Disponibilidad, confidencialidad y trazabilidad";
 choices[93][1] = "Confidencialidad, autenticidad y disponibilidad";
 choices[93][2] = "Integridad, trazabilidad y autenticidad";
 choices[93][3] = "Confidencialidad, integridad y disponibilidad";
 answers[93] = choices[93][3];
 units[93] = "111";
 comments[93] = "Id Pregunta: 11665. ";


//  Id pregunta: 11701 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;cu&aacute;l no es un componente de SNMP?";
 choices[94]= new Array();
 choices[94][0] = "MIB";
 choices[94][1] = "SNMP manager";
 choices[94][2] = "SNMP agent";
 choices[94][3] = "Servidor Syslog";
 answers[94] = choices[94][3];
 units[94] = "104";
 comments[94] = "Id Pregunta: 11701. NULL";


//  Id pregunta: 11703 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;cu&aacute;l no es un mecanismo de transici&oacute;n a ipv6?";
 choices[95]= new Array();
 choices[95][0] = "Tunel 6a4";
 choices[95][1] = "Tunel GRE";
 choices[95][2] = "tunel ISATAP";
 choices[95][3] = "tune PPP";
 answers[95] = choices[95][3];
 units[95] = "100";
 comments[95] = "Id Pregunta: 11703. NULL";


//  Id pregunta: 11705 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Qu&eacute; direcci&oacute;n multicast utiliza RIPng";
 choices[96]= new Array();
 choices[96][0] = "FF02::9";
 choices[96][1] = "FF02::1";
 choices[96][2] = "FF02:A";
 choices[96][3] = "FF02::6";
 answers[96] = choices[96][0];
 units[96] = "102";
 comments[96] = "Id Pregunta: 11705. NULL";


//  Id pregunta: 11742 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; nivel se tiene que establecer en un registro cuando un ciudadano registra datos de salud no siendo competencia del propio organismo ?";
 choices[97]= new Array();
 choices[97][0] = "nivel basico";
 choices[97][1] = "nivel medio";
 choices[97][2] = "nivel alto";
 choices[97][3] = "nivel bajo";
 answers[97] = choices[97][0];
 units[97] = "29";
 comments[97] = "Id Pregunta: 11742. ";


//  Id pregunta: 11755 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[98]= new Array();
 choices[98][0] = "OS1: Fibra monomodo, con una relaci&oacute;n n&uacute;cleo/revestimiento de 9/125 ?m. Supera distancias de 100 Km trabajando a 10 Gbps.";
 choices[98][1] = "OM1 (Optical Multimode 1): fibra &oacute;ptica multimodo, con relaci&oacute;n 62.5/125 ?m. Alcanza distancias m&aacute;ximas de 3000 metros a 10 Gbps.";
 choices[98][2] = "OM2: relaci&oacute;n 50/125 ?m, permite distancias m&aacute;ximas aproximadas de 500 metros a 1 Gbps.";
 choices[98][3] = "Ninguna es correcta";
 answers[98] = choices[98][2];
 units[98] = "99";
 comments[98] = "Id Pregunta: 11755. ";


//  Id pregunta: 11781 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale la FALSA en lo relativo a la tecnolog&iacute;a RAID de discos duros:";
 choices[99]= new Array();
 choices[99][0] = "En RAID 5 los bloques de paridad solo se leen cuando la lectura de un sector de datos provoca un error de CRC.";
 choices[99][1] = "Un RAID 6 ampl&iacute;a el nivel RAID 5 a&ntilde;adiendo otro bloque de paridad.";
 choices[99][2] = "El RAID 6 proporciona protecci&oacute;n contra fallos dobles de discos y contra fallos cuando se est&aacute; reconstruyendo un disco.";
 choices[99][3] = "Un RAID 2 necesitar&iacute;a como m&iacute;nimo 32 discos (los necesarios para formar una palabra).";
 answers[99] = choices[99][3];
 units[99] = "48";
 comments[99] = "Id Pregunta: 11781. ";


