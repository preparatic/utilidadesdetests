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

//  Id pregunta: 9598 AÃ±o de creación de pregunta: 2014-01-01
 questions[0]= "1)  La arquitectura original de Linux es de tipo:";
 choices[0]= new Array();
 choices[0][0] = "Microkernel";
 choices[0][1] = "Monol&iacute;tica";
 choices[0][2] = "Modular";
 choices[0][3] = "H&iacute;brida";
 answers[0] = choices[0][1];
 units[0] = "53";
 comments[0] = "Id Pregunta: 9598. ";


//  Id pregunta: 9602 AÃ±o de creación de pregunta: 2014-01-01
 questions[1]= "2)  La comunicaci&oacute;n s&iacute;ncrona entre procesos UNIX tiene lugar mediante...";
 choices[1]= new Array();
 choices[1][0] = "Pipes";
 choices[1][1] = "Signals";
 choices[1][2] = "Events";
 choices[1][3] = "Sem&aacute;foros";
 answers[1] = choices[1][0];
 units[1] = "53";
 comments[1] = "Id Pregunta: 9602. ";


//  Id pregunta: 9603 AÃ±o de creación de pregunta: 2014-01-01
 questions[2]= "3)  De las siguientes bases de datos &iquest;cual sigue un esquema noSQL?";
 choices[2]= new Array();
 choices[2][0] = "MariaBD";
 choices[2][1] = "Apache Cassandra";
 choices[2][2] = "Heidi";
 choices[2][3] = "Ingres";
 answers[2] = choices[2][1];
 units[2] = "58";
 comments[2] = "Id Pregunta: 9603. NULL";


//  Id pregunta: 9609 AÃ±o de creación de pregunta: 2014-01-01
 questions[3]= "4)  &iquest;Qu&eacute; establece el teorema de CAP o de Brewer?";
 choices[3]= new Array();
 choices[3][0] = "El n&uacute;mero medio de clientes en un sistema es igual a la tasa promedio de llegada de clientes al sistema, por el tiempo medio que el cliente est&aacute; en un sistema.";
 choices[3][1] = "En un sistema de computaci&oacute;n distribuida es imposible garantizar simult&aacute;neamente la consistencia, disponibilidad y la tolerancia  a fallos.";
 choices[3][2] = "En una relaci&oacute;n, los valores de una clave externa de una tabla, deben coincidir con los valores de una clave primaria de la otra tabla con la que est&aacute; relacionada o bien ser todos nulos.";
 choices[3][3] = "Todas las respuestas son incorrectas.";
 answers[3] = choices[3][1];
 units[3] = "52";
 comments[3] = "Id Pregunta: 9609. ";


//  Id pregunta: 9619 AÃ±o de creación de pregunta: 2014-01-01
 questions[4]= "5)  &iquest;En qu&eacute; parte del SO Windows se encuentra el Dispatcher?";
 choices[4]= new Array();
 choices[4][0] = "Ejecutivo";
 choices[4][1] = "Microkernel";
 choices[4][2] = "HAL";
 choices[4][3] = "Drivers";
 answers[4] = choices[4][1];
 units[4] = "56";
 comments[4] = "Id Pregunta: 9619. ";


//  Id pregunta: 9646 AÃ±o de creación de pregunta: 2014-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l es el plazo necesario entre la invitaci&oacute;n a mejorar ofertas a los licitadores y la subasta electr&oacute;nica?";
 choices[5]= new Array();
 choices[5][0] = "No antes de 15 d&iacute;as h&aacute;biles desde la invitaci&oacute;n";
 choices[5][1] = "No antes de 15 d&iacute;as naturales desde la invitaci&oacute;n";
 choices[5][2] = "M&iacute;nimo 2 d&iacute;as h&aacute;biles entre invitaci&oacute;n y subasta";
 choices[5][3] = "M&iacute;nimo 2 d&iacute;as naturales entre invitaci&oacute;n y subasta";
 answers[5] = choices[5][3];
 units[5] = "41";
 comments[5] = "Id Pregunta: 9646. RD Legislativo 3/2011, Art. 148.7. Entre la fecha de env&iacute;o de las invitaciones y el comienzo de la subasta electr&oacute;nica habr&aacute;n de transcurrir, al menos, dos d&iacute;as h&aacute;biles.";


//  Id pregunta: 9655 AÃ±o de creación de pregunta: 2014-01-01
 questions[6]= "7)  El sistema operativo OS X de Apple se llama:";
 choices[6]= new Array();
 choices[6][0] = "Maverick";
 choices[6][1] = "Mavericks";
 choices[6][2] = "Cocoa";
 choices[6][3] = "Kit Kat";
 answers[6] = choices[6][1];
 units[6] = "56";
 comments[6] = "Id Pregunta: 9655. Maverick es el framework de java para desarrollo web";


//  Id pregunta: 9660 AÃ±o de creación de pregunta: 2014-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes es un modelo de mejora de calidad del SW?";
 choices[7]= new Array();
 choices[7][0] = "BOOTSTRAP";
 choices[7][1] = "TRILLIUM";
 choices[7][2] = "MOSCA";
 choices[7][3] = "Todos los anterires";
 answers[7] = choices[7][3];
 units[7] = "92";
 comments[7] = "Id Pregunta: 9660. MOSCA (Modelo Sist&eacute;mico de Calidad), BOOTSTRAP (Comisi&oacute;n Europea), TRILLIUM (Bell Canad&aacute;)";


//  Id pregunta: 9690 AÃ±o de creación de pregunta: 2014-01-01
 questions[8]= "9)  Respecto a las herramientas de explotaci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "'Query and reporting' sirve para la elaboraci&oacute;n de informes y listados a partir de la informaci&oacute;n de los almacenes de datos y los datamart.";
 choices[8][1] = "El cuadro de mando anal&iacute;tico contiene informaci&oacute;n de toda la organizaci&oacute;n.";
 choices[8][2] = "OLAP no es una herramienta de explotaci&oacute;n.";
 choices[8][3] = "A es falsa.";
 answers[8] = choices[8][0];
 units[8] = "68";
 comments[8] = "Id Pregunta: 9690. ";


//  Id pregunta: 9730 AÃ±o de creación de pregunta: 2014-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de estas aseveraciones es INCORRECTA? En programaci&oacute;n, la ofuscaci&oacute;n del c&oacute;digo fuente";
 choices[9]= new Array();
 choices[9][0] = "dificulta la legilibilidad del c&oacute;digo fuente, pudiendo usar cifrado.";
 choices[9][1] = "impide la ingenier&iacute;a inversa.";
 choices[9][2] = "es un ejemplo de seguridad a trav&eacute;s de la oscuridad.";
 choices[9][3] = "es aplicable a lenguajes compilados directamente a c&oacute;digo m&aacute;quina como C o C++.";
 answers[9] = choices[9][1];
 units[9] = "91";
 comments[9] = "Id Pregunta: 9730. Examen TIC-A1 2013";


//  Id pregunta: 9733 AÃ±o de creación de pregunta: 2014-01-01
 questions[10]= "11)  Se&ntilde;ale de entre las siguientes, la norma que establece los requisitos para el dise&ntilde;o y desarrollo de la documentaci&oacute;n del software de usuario como parte de los procesos del ciclo de vida:";
 choices[10]= new Array();
 choices[10][0] = "ISO/IEC 26514";
 choices[10][1] = "ISO 7816.";
 choices[10][2] = "ISO/IEC 12207.";
 choices[10][3] = "ISO 8859.";
 answers[10] = choices[10][0];
 units[10] = "76";
 comments[10] = "Id Pregunta: 9733. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9736 AÃ±o de creación de pregunta: 2014-01-01
 questions[11]= "12)  Si un equipo tiene una aver&iacute;a &iquest;cu&aacute;l de los siguientes indicadores nos da informaci&oacute;n sobre el tiempo medio requerido para reparar dicha aver&iacute;a?";
 choices[11]= new Array();
 choices[11][0] = "MTBF";
 choices[11][1] = "MTBR";
 choices[11][2] = "MTTR";
 choices[11][3] = "MTTF";
 answers[11] = choices[11][2];
 units[11] = "32";
 comments[11] = "Id Pregunta: 9736. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9743 AÃ±o de creación de pregunta: 2014-01-01
 questions[12]= "13)  Se&ntilde;ale, entre los siguientes, cu&aacute;l es un cliente WebDAV de l&iacute;nea de comandos para entornos Unix:";
 choices[12]= new Array();
 choices[12][0] = "cadaver";
 choices[12][1] = "audacity";
 choices[12][2] = "mahout";
 choices[12][3] = "CalDAV";
 answers[12] = choices[12][0];
 units[12] = "54";
 comments[12] = "Id Pregunta: 9743. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9747 AÃ±o de creación de pregunta: 2014-01-01
 questions[13]= "14)  Indique en qu&eacute; consiste el m&eacute;todo QSOS:";
 choices[13]= new Array();
 choices[13][0] = "Est&aacute; destinado a representar la interacci&oacute;n entre los componentes de un sistema.";
 choices[13][1] = "Permite calificar, seleccionar y comparar software Open Source de una manera objetiva.";
 choices[13][2] = "Permite representar a trav&eacute;s de objetos la informaci&oacute;n que contiene una base de datos.";
 choices[13][3] = "Es un modelo matem&aacute;tico que permite calcular las futuras desviaciones en un proyecto software.";
 answers[13] = choices[13][1];
 units[13] = "61";
 comments[13] = "Id Pregunta: 9747. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9760 AÃ±o de creación de pregunta: 2014-01-01
 questions[14]= "15)  La aplicaci&oacute;n para la presentaci&oacute;n telem&aacute;tica de proposiciones a los procedimientos de adopci&oacute;n de tipo de bienes y serviciosde adquisici&oacute;n centralizada, se denomina:";
 choices[14]= new Array();
 choices[14][0] = "CONECTA-PATRIMONIO";
 choices[14][1] = "PITER";
 choices[14][2] = "CONECTA-CENTRALIZACI&Oacute;N";
 choices[14][3] = "No existe tal aplicaci&oacute;n";
 answers[14] = choices[14][2];
 units[14] = "41";
 comments[14] = "Id Pregunta: 9760. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. Tramitaci&oacute;n de solicitudes a trav&eacute;s de CONECTA  CENTRALIZACI&Oacute;N.";


//  Id pregunta: 9775 AÃ±o de creación de pregunta: 2014-01-01
 questions[15]= "16)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra &quot;libro&quot; dentro de ficheros?";
 choices[15]= new Array();
 choices[15][0] = "find -type f | xwygs grep &quot;libro&quot;";
 choices[15][1] = "find -type f | xaygs grep &quot;libro&quot; ";
 choices[15][2] = "find -type f | xargs grep &quot;libro&quot; ";
 choices[15][3] = "find -type f | xargp grep &quot;libro&quot; ";
 answers[15] = choices[15][2];
 units[15] = "54";
 comments[15] = "Id Pregunta: 9775. Examen TIC A2 2013 - Duplicada";


//  Id pregunta: 9779 AÃ±o de creación de pregunta: 2014-01-01
 questions[16]= "17)  CODASYL, modelo de Sistemas Gestores de Bases de datos en red, es acr&oacute;nimo de:";
 choices[16]= new Array();
 choices[16][0] = "Conference on Data Systems Languages. ";
 choices[16][1] = "Concurrent Database Systems Languages. ";
 choices[16][2] = "Coherent Data Symmetric Location. ";
 choices[16][3] = "CODe And Systematic Language. ";
 answers[16] = choices[16][0];
 units[16] = "57";
 comments[16] = "Id Pregunta: 9779. Examen TIC A2 2013";


//  Id pregunta: 9786 AÃ±o de creación de pregunta: 2014-01-01
 questions[17]= "18)  Seg&uacute;n Magerit v2 cu&aacute;l de las siguientes tareas NO forma parte de la actividad de caracterizaci&oacute;n de los activos en el An&aacute;lisis de Riesgos:";
 choices[17]= new Array();
 choices[17][0] = "Identificaci&oacute;n de los activos.";
 choices[17][1] = "Dependencias entre activos.";
 choices[17][2] = "Auditor&iacute;a de los activos.";
 choices[17][3] = "Valoraci&oacute;n de los activos. ";
 answers[17] = choices[17][2];
 units[17] = "98";
 comments[17] = "Id Pregunta: 9786. Examen TIC A2 2013";


//  Id pregunta: 9800 AÃ±o de creación de pregunta: 2014-01-01
 questions[18]= "19)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, los prestadores de servicios de certificaci&oacute;n que expidan certificados reconocidos deber&aacute;n conservar registrada por cualquier medio seguro toda la informaci&oacute;n y documentaci&oacute;n relativa a un certificado reconocido al menos durante:";
 choices[18]= new Array();
 choices[18][0] = "5 a&ntilde;os.";
 choices[18][1] = "10 a&ntilde;os.";
 choices[18][2] = "Permanentemente.";
 choices[18][3] = "15 a&ntilde;os.";
 answers[18] = choices[18][3];
 units[18] = "30";
 comments[18] = "Id Pregunta: 9800. Examen TIC-A2 2013-Libre (Ley 59/2003, art&iacute;culo 20.f)";


//  Id pregunta: 9840 AÃ±o de creación de pregunta: 2014-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes opciones est&aacute; considerada como la caracter&iacute;stica m&aacute;s segura de una red WLAN?";
 choices[19]= new Array();
 choices[19][0] = "Configuraci&oacute;n de SSID (Service Ser Identifier).";
 choices[19][1] = "Clave WEP.";
 choices[19][2] = "Selecci&oacute;n del canal.";
 choices[19][3] = "Configuraci&oacute;n de la energ&iacute;a.";
 answers[19] = choices[19][1];
 units[19] = "111";
 comments[19] = "Id Pregunta: 9840. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9846 AÃ±o de creación de pregunta: 2014-01-01
 questions[20]= "21)  El algoritmo DES:";
 choices[20]= new Array();
 choices[20][0] = "Es un algoritmo de cifrado asim&eacute;trico que codifica bloques de 64 bits empleando claves de 32 bits, con una permutaci&oacute;n al principio y otra al final del proceso.";
 choices[20][1] = "Es un algoritmo de cifrado por bloques que codifica bloques de 54 bits, y su estructura consta de 16 etapas.";
 choices[20][2] = "Es un algoritmo de cifrado sim&eacute;trico cuya estructura es una variaci&oacute;n de la red de Feistel.";
 choices[20][3] = "Es un algoritmo de cifrado de flujo que codifica flujos de 64 bits, empleando una clave de 64, aunque s&oacute;lo 56 bits son utilizados. Los 8 bits restantes comprueban la paridad.";
 answers[20] = choices[20][2];
 units[20] = "111";
 comments[20] = "Id Pregunta: 9846. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9851 AÃ±o de creación de pregunta: 2014-01-01
 questions[21]= "22)  &iquest;Qu&eacute; es SAML?";
 choices[21]= new Array();
 choices[21][0] = "Un est&aacute;ndar abierto que define un esquema para el intercambio de datos de autenticaci&oacute;n y autorizaci&oacute;n.";
 choices[21][1] = "Un servicio proveedor de identidades.";
 choices[21][2] = "Un protocolo para la verificaci&oacute;n de identidades.";
 choices[21][3] = "Un software de definici&oacute;n de autoridades.";
 answers[21] = choices[21][0];
 units[21] = "118";
 comments[21] = "Id Pregunta: 9851. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9857 AÃ±o de creación de pregunta: 2014-01-01
 questions[22]= "23)  Respecto a la seguridad en redes, indique qu&eacute; es un exploit.";
 choices[22]= new Array();
 choices[22][0] = "Es un malware dise&ntilde;ado para aprovechar la vulnerabilidad de un software.";
 choices[22][1] = "Persona que accede a datos no autorizados.";
 choices[22][2] = "Adware que modifica la p&aacute;gina de inicio de los navegadores de Internet sin el consentimiento del usuario.";
 choices[22][3] = "Software utilizado para la suplantaci&oacute;n de la identidad de un usuario de la red.";
 answers[22] = choices[22][0];
 units[22] = "111";
 comments[22] = "Id Pregunta: 9857. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9877 AÃ±o de creación de pregunta: 2014-01-01
 questions[23]= "24)  La norma ISO 27002";
 choices[23]= new Array();
 choices[23][0] = "es un est&aacute;ndar de facto para la prestaci&oacute;n de servicios de seguridad de la Tecnolog&iacute;a de la Informaci&oacute;n";
 choices[23][1] = "tiene como objetivo proporcionar una base com&uacute;n para la gesti&oacute;n de la seguridad dentro de las organizaciones.";
 choices[23][2] = "establece 36 dominios de control para la gesti&oacute;n de la seguridad.";
 choices[23][3] = "establece un sistema de certificaci&oacute;n adecuado a la norma.";
 answers[23] = choices[23][1];
 units[23] = "107";
 comments[23] = "Id Pregunta: 9877. TIC A1, Examen 2013";


//  Id pregunta: 9890 AÃ±o de creación de pregunta: 2014-01-01
 questions[24]= "25)  De entre los siguientes procedimientos de b&uacute;squeda, &iquest;cu&aacute;l utiliza un m&eacute;todo heur&iacute;stico?";
 choices[24]= new Array();
 choices[24][0] = "B&uacute;squeda primero el mejor.";
 choices[24][1] = "B&uacute;squeda bidireccional";
 choices[24][2] = "B&uacute;squeda primero en anchura";
 choices[24][3] = "B&uacute;squeda primero en profundidad";
 answers[24] = choices[24][0];
 units[24] = "63";
 comments[24] = "Id Pregunta: 9890. TIC A1, Examen 2013";


//  Id pregunta: 9899 AÃ±o de creación de pregunta: 2014-01-01
 questions[25]= "26)  Cual de los siguientes NO es un mecanismo de intercambio de informaci&oacute;n utilizable en una arquitectura distribuida";
 choices[25]= new Array();
 choices[25][0] = "mensajes XML sobre protocolo SMTP.";
 choices[25][1] = "mensajes SOAP sobre Servicios de Mensajes Java (JMS).";
 choices[25][2] = "OData.(Open Data Protocol)";
 choices[25][3] = "BPMN (Business Process Message Notation).";
 answers[25] = choices[25][3];
 units[25] = "50,51,79";
 comments[25] = "Id Pregunta: 9899. TIC A1, Examen 2013";


//  Id pregunta: 9905 AÃ±o de creación de pregunta: 2014-01-01
 questions[26]= "27)  La finalidad principal de la Gesti&oacute;n de Proyectos seg&uacute;n M&eacute;trica v3 es la planificaci&oacute;n, el seguimiento y control de:";
 choices[26]= new Array();
 choices[26][0] = "Las actividades y de los recursos humanos que intervienen en el desarrollo de un Sistema de Informaci&oacute;n (S.I).";
 choices[26][1] = "Las actividades que intervienen en el desarrollo de un S.I.";
 choices[26][2] = "Las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 choices[26][3] = "Los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 answers[26] = choices[26][2];
 units[26] = "86";
 comments[26] = "Id Pregunta: 9905. TIC A2, Examen 2013";


//  Id pregunta: 9912 AÃ±o de creación de pregunta: 2014-01-01
 questions[27]= "28)  El proceso mediante el cual los usuarios descubren, revelan, organizan y comprenden los requisitos que desean se denomina:";
 choices[27]= new Array();
 choices[27][0] = "Validaci&oacute;n de los requisitos.";
 choices[27][1] = "Entrevista de especificaci&oacute;n de requisitos.";
 choices[27][2] = "Estudio de viabilidad de requisitos.";
 choices[27][3] = "Elicitaci&oacute;n de requisitos.";
 answers[27] = choices[27][3];
 units[27] = "78";
 comments[27] = "Id Pregunta: 9912. TIC A2, Examen 2013";


//  Id pregunta: 9921 AÃ±o de creación de pregunta: 2014-01-01
 questions[28]= "29)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[28]= new Array();
 choices[28][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[28][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[28][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[28][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[28] = choices[28][0];
 units[28] = "86,58";
 comments[28] = "Id Pregunta: 9921. TIC A2, Examen 2013";


//  Id pregunta: 9934 AÃ±o de creación de pregunta: 2014-01-01
 questions[29]= "30)  En la Capa de Sesi&oacute;n (nivel 5) &iquest;cu&aacute;ntos tipos de puntos de sincronizaci&oacute;n existen?";
 choices[29]= new Array();
 choices[29][0] = "2, uno mayor y otro menor.";
 choices[29][1] = "3, mayor, mediano y menor.";
 choices[29][2] = "Ninguno.";
 choices[29][3] = "Depende del protocolo implementado.";
 answers[29] = choices[29][0];
 units[29] = "100";
 comments[29] = "Id Pregunta: 9934. NULL";


//  Id pregunta: 9945 AÃ±o de creación de pregunta: 2014-01-01
 questions[30]= "31)  El modelo de desarrollo RAD (Rapid Application Development) fue descrito inicialmente por:";
 choices[30]= new Array();
 choices[30][0] = "Codd ";
 choices[30][1] = "Boehm ";
 choices[30][2] = "Chen ";
 choices[30][3] = "James Marti";
 answers[30] = choices[30][3];
 units[30] = "76";
 comments[30] = "Id Pregunta: 9945. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9950 AÃ±o de creación de pregunta: 2014-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes actividades forma parte de la Planificaci&oacute;n de los Sistemas de Informaci&oacute;n seg&uacute;n M&eacute;trica 3?";
 choices[31]= new Array();
 choices[31][0] = "Estudio de los Sistemas de Informaci&oacute;n Actuales. ";
 choices[31][1] = "Definici&oacute;n de los Requisitos del Sistema.";
 choices[31][2] = "Valoraci&oacute;n de Alternativas.";
 choices[31][3] = "Definici&oacute;n del sistema. ";
 answers[31] = choices[31][0];
 units[31] = "86";
 comments[31] = "Id Pregunta: 9950. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9989 AÃ±o de creación de pregunta: 2014-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no es un sistema de gesti&oacute;n de conocimiento con licencia de software libre?";
 choices[32]= new Array();
 choices[32][0] = "ATutor";
 choices[32][1] = "Claroline";
 choices[32][2] = "Joomla";
 choices[32][3] = "Moodle";
 answers[32] = choices[32][2];
 units[32] = "66";
 comments[32] = "Id Pregunta: 9989. ";


//  Id pregunta: 9990 AÃ±o de creación de pregunta: 2014-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes es sistemas de gesti&oacute;n de conocimiento tiene una versi&oacute;n con licencia de fuentes abiertas?";
 choices[33]= new Array();
 choices[33][0] = "Blackboard";
 choices[33][1] = "WebCT";
 choices[33][2] = "Dokeos";
 choices[33][3] = "Desire2Learn";
 answers[33] = choices[33][2];
 units[33] = "66";
 comments[33] = "Id Pregunta: 9990. ";


//  Id pregunta: 9991 AÃ±o de creación de pregunta: 2014-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l es el formato al que se tienen que ajustar las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas, de acuerdo con la ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico?";
 choices[34]= new Array();
 choices[34][0] = "e-Factura, versi&oacute;n 2.3";
 choices[34][1] = "Facturae, versi&oacute;n 3.2, y versiones sucesivas que publique el Ministerio de Industria, Turismo y Comercio.";
 choices[34][2] = "Facturae, versi&oacute;n 3.2 y 3.2.1, seg&uacute;n resoluci&oacute;n 21 de marzo de 2014";
 choices[34][3] = "ebXML, versi&oacute;n 2.0, hasta que se apruebe la Ley que transpone la Directiva 2006/123/CE sobre actividades de servicio en el mercado interior.";
 answers[34] = choices[34][2];
 units[34] = "70";
 comments[34] = "Id Pregunta: 9991. NULL";


//  Id pregunta: 9995 AÃ±o de creación de pregunta: 2014-01-01
 questions[35]= "36)  En relaci&oacute;n a im&aacute;genes est&aacute;ticas en portales web,";
 choices[35]= new Array();
 choices[35][0] = "El formato PNG, si bien est&aacute; libre de patentes, tiene mayor p&eacute;rdida de informaci&oacute;n que el formato JPEG.";
 choices[35][1] = "El formato GIF utiliza el algoritmo LZW de compresi&oacute;n patentado por CompuServe.";
 choices[35][2] = "JPEG tiene m&aacute;s p&eacute;rdida de informaci&oacute;n que GIF y PNG.";
 choices[35][3] = "El soporte de animaciones no es posible en PNG, utiliz&aacute;ndose NMG en su lugar.";
 answers[35] = choices[35][2];
 units[35] = "93";
 comments[35] = "Id Pregunta: 9995. NULL";


//  Id pregunta: 9996 AÃ±o de creación de pregunta: 2014-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de reparto del espectro utilizado por GSM (Global System for Mobile communications)?";
 choices[36]= new Array();
 choices[36][0] = "SDMA, Space Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n delespacio.";
 choices[36][1] = "TDMA, Time Division Multiple Access, o acceso m&uacute;ltiple por divisi&oacute;n deltiempo.";
 choices[36][2] = "CDMA, Cell Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n entreceldas.";
 choices[36][3] = "FHMA, Frequency Hops Multiple Access o acceso m&uacute;ltiple por saltos defrecuencia.";
 answers[36] = choices[36][2];
 units[36] = "108";
 comments[36] = "Id Pregunta: 9996. ";


//  Id pregunta: 9997 AÃ±o de creación de pregunta: 2014-01-01
 questions[37]= "38)  Desde el punto de vista del &ldquo;Cloud Computing&rdquo;, Gmail es un ejemplo de";
 choices[37]= new Array();
 choices[37][0] = "PaaS (&ldquo;Platform as a Service&rdquo;).";
 choices[37][1] = "CaaS (&ldquo;Communication as a Service&rdquo;).";
 choices[37][2] = "IaaS (&ldquo;Infrastructure as a Service&rdquo;).";
 choices[37][3] = "SaaS (&ldquo;Software as a Service&rdquo;).";
 answers[37] = choices[37][3];
 units[37] = "47";
 comments[37] = "Id Pregunta: 9997. ";


//  Id pregunta: 10001 AÃ±o de creación de pregunta: 2014-01-01
 questions[38]= "39)  EuroDOCSIS";
 choices[38]= new Array();
 choices[38][0] = "Significa, en el &aacute;mbito de la Uni&oacute;n Europea, DOCument System Interface Service, y hace referencia a un est&aacute;ndar de gesti&oacute;n documental.";
 choices[38][1] = "es una extensi&oacute;n de DOCSIS especificada por ETSI para el &aacute;mbito Europeo.";
 choices[38][2] = "significa, en el &aacute;mbito de la zona Euro, Digital Open Currency System Interface Standard.";
 choices[38][3] = "es un est&aacute;ndar propietario de gesti&oacute;n documental de amplia implantaci&oacute;n enEuropa.";
 answers[38] = choices[38][1];
 units[38] = "105";
 comments[38] = "Id Pregunta: 10001. ";


//  Id pregunta: 10003 AÃ±o de creación de pregunta: 2014-01-01
 questions[39]= "40)  El RD 1720/2007 de 21 de diciembre, por el que se aprueba el reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, establece que ";
 choices[39]= new Array();
 choices[39][0] = "en ning&uacute;n caso, el encargado de tratamiento podr&aacute; subcontratar a un tercero la realizaci&oacute;n de un tratamiento que le hubiera encomendado el responsable del fichero.";
 choices[39][1] = "los ficheros de datos de car&aacute;cter personal de titularidad p&uacute;blica sujetos a la competencia de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos deber&aacute;n notificarse a &eacute;sta en el plazo de 30 d&iacute;as naturales desde la publicaci&oacute;n en el diario oficial correspondiente.";
 choices[39][2] = "el ejercicio del derecho de acceso por el afectado ser&aacute; resuelto por el Responsable del fichero en el plazo m&aacute;ximo de un mes a contar desde la recepci&oacute;n de la solicitud de acceso.";
 choices[39][3] = "los ficheros y los tratamientos de datos de car&aacute;cter personal se clasifican entres niveles: b&aacute;sico, medio y alto.";
 answers[39] = choices[39][2];
 units[39] = "29";
 comments[39] = "Id Pregunta: 10003. ";


//  Id pregunta: 10004 AÃ±o de creación de pregunta: 2014-01-01
 questions[40]= "41)  XML y HTML5 se caracterizan porque ambos";
 choices[40]= new Array();
 choices[40][0] = "se apoyan en JavaScript.";
 choices[40][1] = "se basan en el protocolo HTTP.";
 choices[40][2] = "son lenguajes de marcado.";
 choices[40][3] = "son conformes a SOAP.";
 answers[40] = choices[40][2];
 units[40] = "69";
 comments[40] = "Id Pregunta: 10004. ";


//  Id pregunta: 10008 AÃ±o de creación de pregunta: 2014-01-01
 questions[41]= "42)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, en la actividad &ldquo;Definici&oacute;n de Requisitos del Sistema&rdquo; participan los siguientes grupos de personas:";
 choices[41]= new Array();
 choices[41][0] = "Jefe de proyecto, Analistas y Usuarios Expertos.";
 choices[41][1] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas y Usuarios Expertos.";
 choices[41][2] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas, Especialistas en Comunicaciones y Usuarios Expertos.";
 choices[41][3] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas, Especialistas en Comunicaciones, Responsables de Seguridad y Usuarios Expertos.";
 answers[41] = choices[41][0];
 units[41] = "86";
 comments[41] = "Id Pregunta: 10008. NULL";


//  Id pregunta: 10029 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  Los ETL son herramientas utilizadas habitualmente en la miner&iacute;a de datos. &iquest;En qu&eacute; consisten dichas herramientas?";
 choices[42]= new Array();
 choices[42][0] = "Son bases de datos multidimensionales que permiten tener la informaci&oacute;n correctamente estructurada siguiendo multitud de criterios o dimensiones.";
 choices[42][1] = "Son herramientas que realizan informes destinados a la alta direcci&oacute;n de la organizaci&oacute;n.";
 choices[42][2] = "Son aplicaciones que permiten el acceso a la base de datos a trav&eacute;s de p&aacute;ginas HTML.";
 choices[42][3] = "Son herramientas que permiten extraer informaci&oacute;n de diversos or&iacute;genes, realizar modificaciones en dicha informaci&oacute;n y cargarla en un sistema destino.";
 answers[42] = choices[42][3];
 units[42] = "68";
 comments[42] = "Id Pregunta: 10029. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10030 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  Indique la respuesta correcta en relaci&oacute;n al comando SNMP GetBulkRequest:";
 choices[43]= new Array();
 choices[43][0] = "Est&aacute; disponible en todas las versiones de SNMP.";
 choices[43][1] = "Es utilizado por un sistema gestor de red para enviar un mensaje a otro gestor sobre objetos administrados.";
 choices[43][2] = "Es el que permite utilizar autenticaci&oacute;n en SNMP v3.			";
 choices[43][3] = "Es utilizado cuando se requiere una cantidad elevada de datos transmitidos.";
 answers[43] = choices[43][3];
 units[43] = "104";
 comments[43] = "Id Pregunta: 10030. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10042 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  De entre los siguientes, &iquest;qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[44]= new Array();
 choices[44][0] = "RSVP ";
 choices[44][1] = "ARP";
 choices[44][2] = "802.1ar ";
 choices[44][3] = "H.264";
 answers[44] = choices[44][0];
 units[44] = "100, 109";
 comments[44] = "Id Pregunta: 10042. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10048 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  MPLS (Multiprotocol Label Switching) utiliza algunos conceptos, entre ellos:";
 choices[45]= new Array();
 choices[45][0] = "FEC (Forwarding Equivalent Class).";
 choices[45][1] = "LAPD (Link Access Protocol for D-channel).";
 choices[45][2] = "CIR (Commited Information Rate).";
 choices[45][3] = "MBS (Maximum Burst Size).";
 answers[45] = choices[45][0];
 units[45] = "100";
 comments[45] = "Id Pregunta: 10048. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10059 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  Seg&uacute;n la ANSI/TIA-942 el porcentaje de disponibilidad de 99.982% en un CPD corresponde a:";
 choices[46]= new Array();
 choices[46][0] = "TIER I ";
 choices[46][1] = "TIER II";
 choices[46][2] = "TIER III ";
 choices[46][3] = "TIER IV";
 answers[46] = choices[46][2];
 units[46] = "99";
 comments[46] = "Id Pregunta: 10059. TIC A2, libre, Examen 2013";


//  Id pregunta: 10069 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  Analizando los problemas con la calidad de servicio en VoIP, &iquest;qu&eacute; se entiende por jitter?";
 choices[47]= new Array();
 choices[47][0] = "Una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[47][1] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[47][2] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, perdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[47][3] = "Cantidad de informaci&oacute;n o de datos que se puede enviar a trav&eacute;s de una conexi&oacute;n de red en un per&iacute;odo de tiempo dado.";
 answers[47] = choices[47][2];
 units[47] = "109";
 comments[47] = "Id Pregunta: 10069. TIC A2, libre, Examen 2013";


//  Id pregunta: 10070 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  Qu&eacute; datos NO incorporar&aacute; una descripci&oacute;n de sesi&oacute;n SDP (Session Description Protocol - RFC 4566) en una iniciaci&oacute;n de sesi&oacute;n utilizada en SIP (Session Initiation Protocol):";
 choices[48]= new Array();
 choices[48][0] = "Tipo de medio.";
 choices[48][1] = "Protocolo de transporte (RTP/UDP/IP, H 320, etc.).";
 choices[48][2] = "Formato del medio (video H.261, video MPEG, etc.).";
 choices[48][3] = "Tama&ntilde;o de los datos.";
 answers[48] = choices[48][3];
 units[48] = "109";
 comments[48] = "Id Pregunta: 10070. TIC A2, libre, Examen 2013";


//  Id pregunta: 10075 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  La tecnolog&iacute;a WiMAX 2 es conocida formalmente como:";
 choices[49]= new Array();
 choices[49][0] = "802.16m ";
 choices[49][1] = "802.16a";
 choices[49][2] = "802.11x ";
 choices[49][3] = "802.11n";
 answers[49] = choices[49][0];
 units[49] = "101";
 comments[49] = "Id Pregunta: 10075. TIC A2, libre, Examen 2013";


//  Id pregunta: 10080 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  En el contexto de comunicaciones inal&aacute;mbricas, MIMO significa:";
 choices[50]= new Array();
 choices[50][0] = "Multiple Input Multiple Output.";
 choices[50][1] = "Massive Input Massive Output.";
 choices[50][2] = "Multiplexed Input Multiplexed Output.";
 choices[50][3] = "Mapped Input Mapped Output.";
 answers[50] = choices[50][0];
 units[50] = "108";
 comments[50] = "Id Pregunta: 10080. TIC A2, libre, Examen 2013";


//  Id pregunta: 10092 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es el orden cronol&oacute;gico m&aacute;s acertado?";
 choices[51]= new Array();
 choices[51][0] = "BPM, SOA, EAI, ESB";
 choices[51][1] = "EAI, BPM, SOA, ESB";
 choices[51][2] = "EAI, SOA, BPM, ESB";
 choices[51][3] = "BPM, EAI, SOA, ESB";
 answers[51] = choices[51][1];
 units[51] = "79";
 comments[51] = "Id Pregunta: 10092. NULL";


//  Id pregunta: 10103 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  &iquest;Qu&eacute; tipo de flujos de datos no existen?";
 choices[52]= new Array();
 choices[52][0] = "Flujos discretos y continuos";
 choices[52][1] = "Flujos de consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[52][2] = "Flujo de control";
 choices[52][3] = "Existen todos los tipos de flujos anteriores";
 answers[52] = choices[52][3];
 units[52] = "81";
 comments[52] = "Id Pregunta: 10103. NULL";


//  Id pregunta: 10105 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  Indique cu&aacute;l no es una t&eacute;cnica de an&aacute;lisis estructurado";
 choices[53]= new Array();
 choices[53][0] = "SADR";
 choices[53][1] = "SASS";
 choices[53][2] = "SRD";
 choices[53][3] = "SADT";
 answers[53] = choices[53][0];
 units[53] = "81";
 comments[53] = "Id Pregunta: 10105. NULL";


//  Id pregunta: 10112 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  El est&aacute;ndar para definici&oacute;n de VLAN es:";
 choices[54]= new Array();
 choices[54][0] = "IEEE 802.1D";
 choices[54][1] = "IEEE 802.1P";
 choices[54][2] = "IEEE 802.1Q";
 choices[54][3] = "IEEE 802.2";
 answers[54] = choices[54][2];
 units[54] = "101";
 comments[54] = "Id Pregunta: 10112. ";


//  Id pregunta: 10113 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  El tama&ntilde;o de trama m&iacute;nimo en Ethernet es:";
 choices[55]= new Array();
 choices[55][0] = "48 bytes";
 choices[55][1] = "24 bytes";
 choices[55][2] = "128 bytes";
 choices[55][3] = "64 bytes";
 answers[55] = choices[55][3];
 units[55] = "101";
 comments[55] = "Id Pregunta: 10113. ";


//  Id pregunta: 10124 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  Un acceso b&aacute;sico RDSI tiene:";
 choices[56]= new Array();
 choices[56][0] = "30 canales B de 64 kbps y 1 canal D de 64 kbps";
 choices[56][1] = "2 canales B de 64 kbps y 1 canal D de 16 kbps";
 choices[56][2] = "30 canales B de 16 kbps y 1 canal D de 16 kbps";
 choices[56][3] = "2 canales B de 16 kbps y 1 canal D de 16 kbps";
 answers[56] = choices[56][0];
 units[56] = "103";
 comments[56] = "Id Pregunta: 10124. ";


//  Id pregunta: 10126 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  La red espa&ntilde;ola para investigaci&oacute;n y educaci&oacute;n es:";
 choices[57]= new Array();
 choices[57][0] = "GEANT";
 choices[57][1] = "IRIS";
 choices[57][2] = "TESTA";
 choices[57][3] = "SARA";
 answers[57] = choices[57][1];
 units[57] = "103";
 comments[57] = "Id Pregunta: 10126. ";


//  Id pregunta: 10131 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  La operaci&oacute;n de SNMP GetBulk est&aacute; disponible desde:";
 choices[58]= new Array();
 choices[58][0] = "SNMPv1";
 choices[58][1] = "SNMPv2";
 choices[58][2] = "SNMPv3";
 choices[58][3] = "SNMPv4";
 answers[58] = choices[58][1];
 units[58] = "104";
 comments[58] = "Id Pregunta: 10131. ";


//  Id pregunta: 10133 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  La operaci&oacute;n TRAP de SNMP permite:";
 choices[59]= new Array();
 choices[59][0] = "Solicitar informaci&oacute;n desde el gestor";
 choices[59][1] = "Actualizar informaci&oacute;n desde el gestor al agente";
 choices[59][2] = "Enviar informaci&oacute;n desde el agente al gestor sin que la solicite";
 choices[59][3] = "Enviar informaci&oacute;n de un agente a otro";
 answers[59] = choices[59][2];
 units[59] = "104";
 comments[59] = "Id Pregunta: 10133. ";


//  Id pregunta: 10149 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  La Ley 34/2002, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, en relaci&oacute;n a la imposici&oacute;n de Sanciones indica";
 choices[60]= new Array();
 choices[60][0] = "El &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[60][1] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a La adhesi&oacute;n a un c&oacute;digo de conducta o a un sistema de autorregulaci&oacute;n publicitaria aplicable respecto a la infracci&oacute;n cometida.";
 choices[60][2] = "Las dos anteriores son ciertas";
 choices[60][3] = "Las afirmaciones anteriores son falsas";
 answers[60] = choices[60][2];
 units[60] = "30";
 comments[60] = "Id Pregunta: 10149. ";


//  Id pregunta: 10172 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  Respecto los distintos tipos de drivers JDBC, se verifica que:";
 choices[61]= new Array();
 choices[61][0] = "Los drivers JDBC de tipo III son recomendables si la aplicaci&oacute;n Java ha de acceder a diferentes bases de datos o se desconoce el SGBD destino";
 choices[61][1] = "El uso de drivers JDBC de tipo IV evita problemas de dependencia tecnol&oacute;gica del fabricante";
 choices[61][2] = "Al permitir que la aplicaci&oacute;n Java interact&uacute;e con diferentes SGBD, un driver de tipo III no es 100% Java, ya que incluye c&oacute;digo espec&iacute;fico o nativo de cada SGBD";
 choices[61][3] = "Todas las anteriores";
 answers[61] = choices[61][0];
 units[61] = "58";
 comments[61] = "Id Pregunta: 10172. ";


//  Id pregunta: 10173 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  Los distintos niveles de aislamiento permiten evitar problemas de consistencia o p&eacute;rdida de datos derivados de la ejecuci&oacute;n concurrente de transacciones.";
 choices[62]= new Array();
 choices[62][0] = "Una Lectura No Repetible se produce cuando una transacci&oacute;n lee datos todav&iacute;a no confirmados, y que pueden ser finalmente revertidos por la transacci&oacute;n que hizo el cambio";
 choices[62][1] = "Evitar el problema de concurrencia denominado &quot;Lectura fantasma&quot; requiere aplicar como nivel de aislamiento SERIALIZABLE";
 choices[62][2] = "Con el nivel de aislamiento denominado &quot;READ COMMITTED&quot; pueden producirse problemas de Lectura sucia y Lectura Fantasma";
 choices[62][3] = "Todas las anteriores";
 answers[62] = choices[62][1];
 units[62] = "57";
 comments[62] = "Id Pregunta: 10173. ";


//  Id pregunta: 10179 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  La herencia es el mecanismo de implementaci&oacute;n mediante el cual elementos m&aacute;s espec&iacute;ficos incorporan la estructura y comportamiento de elementos m&aacute;s generales.";
 choices[63]= new Array();
 choices[63][0] = "La herencia es siempre transitiva";
 choices[63][1] = "La herencia repetida es un problema derivado de la herencia m&uacute;ltiple que tiene lugar cuando una clase hereda de dos o m&aacute;s clases un m&eacute;todo con el mismo nombre y diferente implementaci&oacute;n.";
 choices[63][2] = "A trav&eacute;s de la herencia, una clase derivada puede heredar el comportamiento de una clase base, sin sobreescribir la funcionalidad gen&eacute;rica determinada en &eacute;sta.";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = choices[63][0];
 units[63] = "82";
 comments[63] = "Id Pregunta: 10179. ";


//  Id pregunta: 10180 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  Respecto las relaciones de agregaci&oacute;n y composici&oacute;n entre clases de objetos, es cierto que:";
 choices[64]= new Array();
 choices[64][0] = "La composici&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La agregaci&oacute;n es una forma m&aacute;s fuerte de composici&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[64][1] = "La agregaci&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La composici&oacute;n es una forma m&aacute;s fuerte de agregaci&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[64][2] = "La a) y adem&aacute;s, la composici&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo relleno en el extremo del &quot;todo&quot; ";
 choices[64][3] = "La b) y adem&aacute;s, la agregaci&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo vac&iacute;o en el extremo del &quot;todo&quot; ";
 answers[64] = choices[64][3];
 units[64] = "82";
 comments[64] = "Id Pregunta: 10180. ";


//  Id pregunta: 10182 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Se califican como entidades d&eacute;biles aquellas cuya existencia no tiene sentido sin la existencia de la entidad regular de la que dependen. En relaci&oacute;n con las entidades d&eacute;biles y regulares, es falso que:";
 choices[65]= new Array();
 choices[65][0] = "La dependencia en existencia implica a su vez dependencia en identificaci&oacute;n";
 choices[65][1] = "La dependencia en existencia de una entidad d&eacute;bil respecto de una entidad regular supone que la entidad d&eacute;bil no dispone de suficientes atributos para formar su clave primaria. La entidad regular aporta la parte de clave que le falta a la entidad d&eacute;bil.";
 choices[65][2] = "Las relaciones de dependencia pueden surgir en interrelaciones con tipo de correspondencia 1:N o N:M";
 choices[65][3] = "Todas las anteriores";
 answers[65] = choices[65][3];
 units[65] = "80";
 comments[65] = "Id Pregunta: 10182. ";


//  Id pregunta: 10184 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  El Modelo E-R Extendido es el resultado de la ampliaci&oacute;n de elementos y modificaciones introducidas en el modelo E-R de Chen a lo largo del tiempo. De entre &eacute;stas, es cierto que:";
 choices[66]= new Array();
 choices[66][0] = "Sea una entidad involucrada en varias relaciones o interrelaciones distintas. Si cada ocurrencia de dicha entidad s&oacute;lo puede participar en una interrelaci&oacute;n, se habla de interrelaciones disjuntas.";
 choices[66][1] = "El Modelo E-R extendido permite la representaci&oacute;n de relaciones jer&aacute;rquicas denominadas Categor&iacute;as.";
 choices[66][2] = "Una jerarqu&iacute;a total se representa mediante la indicaci&oacute;n de la letra &quot;t&quot; en el tri&aacute;ngulo invertido que representa las relaciones de jerarqu&iacute;a";
 choices[66][3] = "Las relaciones reflexivas, al ser relaciones unarias, suelen presentar un tipo de correspondencia 1:1";
 answers[66] = choices[66][1];
 units[66] = "80";
 comments[66] = "Id Pregunta: 10184. ";


//  Id pregunta: 10185 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  El n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias de un tipo de entidad que pueden estar relacionadas con una ocurrencia del otro u otros tipos de entidad participantes en la relaci&oacute;n se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Tipo de correspondencia";
 choices[67][1] = "Cardinalidad de la relaci&oacute;n";
 choices[67][2] = "Grado";
 choices[67][3] = "No es de inter&eacute;s en el modelo E-R y por tanto no tiene una denominaci&oacute;n espec&iacute;fica";
 answers[67] = choices[67][1];
 units[67] = "80";
 comments[67] = "Id Pregunta: 10185. NULL";


//  Id pregunta: 10206 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[68]= new Array();
 choices[68][0] = "Es compatible con las redes IEEE 802.16e";
 choices[68][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access) en vez de WCDMA (Wideband Code Division Multiple Access)";
 choices[68][2] = "Desaparecen los hard handovers y solo existen soft handovers";
 choices[68][3] = "En la arquitectura se introduce un nuevo elemento llamado MME (Mobility Management Entity) basado en la antigua HLR y AuC";
 answers[68] = choices[68][1];
 units[68] = "108";
 comments[68] = "Id Pregunta: 10206. 4G busca la convergencia con WiMax en el est&aacute;ndar 802.16m. Desaparecen los soft handovers y solo existen hard handovers al desaparecer los RNC e incorporarse a los eNode B. El nuevo elemento basado en la antigua HLR y AuC es HSS (Home Subscriber Server), ";


//  Id pregunta: 10237 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  La tecnolog&iacute;a que nos permite trabajar en Java con servicios de directorio como LDAP, Active Directory, se conoce como:";
 choices[69]= new Array();
 choices[69][0] = "Java Messaging Services (JMS)";
 choices[69][1] = "Java Naming and Directory Interface (JNDI)";
 choices[69][2] = "Remote Method Invocation (RMI)";
 choices[69][3] = "JavaBeans Activation Framework (JMF)";
 answers[69] = choices[69][1];
 units[69] = "116";
 comments[69] = "Id Pregunta: 10237. NULL";


//  Id pregunta: 10251 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  FooCorp distribuye un software propietario que enlaza con una librer&iacute;a no modificada que se distribuye mediante la licencia LGPL. &iquest;Obliga LGPL a FooCorp a permitir la ingenier&iacute;a inversa de su software propietario para el uso exclusivo del usuario?";
 choices[70]= new Array();
 choices[70][0] = "Si";
 choices[70][1] = "Si, aunque s&oacute;lo si distribuye el software mediante licencia LGPL";
 choices[70][2] = "No";
 choices[70][3] = "No, LGPL no permite este tipo de usos";
 answers[70] = choices[70][0];
 units[70] = "61";
 comments[70] = "Id Pregunta: 10251. ";


//  Id pregunta: 10272 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de b&uacute;squeda es de tipo heur&iacute;stico?";
 choices[71]= new Array();
 choices[71][0] = "B&uacute;squeda de profundida limitada";
 choices[71][1] = "B&uacute;squeda primero el mejor";
 choices[71][2] = "B&uacute;squeda de coste uniforme";
 choices[71][3] = "B&uacute;squeda bidireccional";
 answers[71] = choices[71][1];
 units[71] = "63";
 comments[71] = "Id Pregunta: 10272. NULL";


//  Id pregunta: 10278 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Se&ntilde;ale el m&eacute;todo de inferencia no aplicable a marcos";
 choices[72]= new Array();
 choices[72][0] = "Deducci&oacute;n de valores de slots";
 choices[72][1] = "Actualizaci&oacute;n de valores de slots";
 choices[72][2] = "Equiparaci&oacute;n";
 choices[72][3] = "Emparejamiento";
 answers[72] = choices[72][3];
 units[72] = "64";
 comments[72] = "Id Pregunta: 10278. NULL";


//  Id pregunta: 10285 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  RMAN es:";
 choices[73]= new Array();
 choices[73][0] = "Una especificaci&oacute;n de monitorizaci&oacute;n remota de IETF.";
 choices[73][1] = "Una invocaci&oacute;n de m&eacute;todos remotos utilizada en Java.";
 choices[73][2] = "Una herramienta de Oracle que permite hacer backups online de bases de datos.";
 choices[73][3] = "Una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 answers[73] = choices[73][2];
 units[73] = "58";
 comments[73] = "Id Pregunta: 10285. TIC A2, libre, examen 2013";


//  Id pregunta: 10299 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  En la administraci&oacute;n de un dispositivo switch &iquest;qu&eacute; es un trunk?";
 choices[74]= new Array();
 choices[74][0] = "Un puerto de velocidad GigaEthernet o 10 GigaEthernet.";
 choices[74][1] = "Un enlace que agrega tr&aacute;fico de varias VLANs.";
 choices[74][2] = "Un adaptador fibra - par trenzado.";
 choices[74][3] = "Una versi&oacute;n estable del firmware del dispositivo.";
 answers[74] = choices[74][1];
 units[74] = "102";
 comments[74] = "Id Pregunta: 10299. TIC A2, libre, examen 2013";


//  Id pregunta: 10307 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Si queremos restringir el almacenamiento en disco en Linux a determinados usuarios o grupos, &iquest;cu&aacute;l de los siguientes m&eacute;todos podemos usar?";
 choices[75]= new Array();
 choices[75][0] = "Mediante cuotas de disco.";
 choices[75][1] = "Mediante el editor de directivas de grupo.";
 choices[75][2] = "No se puede restringir el almacenamiento a usuarios.";
 choices[75][3] = "No se puede restringir el almacenamiento por grupos.";
 answers[75] = choices[75][0];
 units[75] = "54";
 comments[75] = "Id Pregunta: 10307. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10314 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Un conector tipo &quot;MT-Array&quot; es un conector para:";
 choices[76]= new Array();
 choices[76][0] = "Fibra &oacute;ptica.";
 choices[76][1] = "Mainframes.";
 choices[76][2] = "Buses PCI.";
 choices[76][3] = "Buses PCI.";
 answers[76] = choices[76][0];
 units[76] = "99";
 comments[76] = "Id Pregunta: 10314. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10317 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  CRAM-MD5 definido en el RFC 2195 es una t&eacute;cnica criptogr&aacute;fica que consiste en:";
 choices[77]= new Array();
 choices[77][0] = "Un mecanismo de autenticaci&oacute;n challenge-response para autenticaci&oacute;n de usuarios POP e IMAP, entre otros.";
 choices[77][1] = "Un mecanismo de cifrado sim&eacute;trico de bloque basado en una clave compartida y derivaci&oacute;n de subclaves usando MD5.";
 choices[77][2] = "Un algoritmo de firma electr&oacute;nica basado en MD5, ideado para escenarios en los que no puede usarse criptograf&iacute;a asim&eacute;trica.";
 choices[77][3] = "Un algoritmo de cifrado sim&eacute;trico de flujo (stream) basado una clave compartida, en MD5 y un LFSR predeterminado.";
 answers[77] = choices[77][0];
 units[77] = "72";
 comments[77] = "Id Pregunta: 10317. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10329 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Por motivos estrat&eacute;gicos, se acuerda terminar un portal de admnistraci&oacute;n electr&oacute;nica dos meses antes de lo previsto. No hay disponibilidad de m&aacute;s recursos humanos ni de ampliar el horario de trabajo ni de conseguir fondos para contratar personal externo. El Jefe de Proyecto deber&aacute; negociar entonces con el cliente del portal:";
 choices[78]= new Array();
 choices[78][0] = "Una reducci&oacute;n del alcance previsto, eliminando algunas funcionalidades adicionales o no cr&iacute;ticas,  hasta que cuadre en el tiempo previsto.";
 choices[78][1] = "Una demora en el tiempo ya que no se puede acometer sin m&aacute;s recursos la tarea indicada";
 choices[78][2] = "Que el portal se haga usando herramientas de creaci&oacute;n r&aacute;pida de portales electr&oacute;nicos";
 choices[78][3] = "Una disminuci&oacute;n de la calidad, admitiendo una serie de errores motivados por lo acelerado de la entrega";
 answers[78] = choices[78][0];
 units[78] = "27";
 comments[78] = "Id Pregunta: 10329. ";


//  Id pregunta: 10340 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En relaci&oacute;n con la legislaci&oacute;n de propiedad intelectual, el canon por copia privada se encuentra actualmente regulado por:";
 choices[79]= new Array();
 choices[79][0] = "Ley 23/2006";
 choices[79][1] = "Real Decreto Legislativo 1/1996";
 choices[79][2] = "Ley 2/2011";
 choices[79][3] = "Real Decreto 1657/2012";
 answers[79] = choices[79][3];
 units[79] = "36";
 comments[79] = "Id Pregunta: 10340. Actualmente, el procedimiento de pago de la compensaci&oacute;n equitativa por copia privada se realiza con cargo a los Presupuestos Generales del Estado";


//  Id pregunta: 10354 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de supervisar y mejorar la accesibilidad de los portales web de la Administraci&oacute;n?";
 choices[80]= new Array();
 choices[80][0] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[80][1] = "Ministerio de la Presidencia";
 choices[80][2] = "El Observatorio de Accesibilidad, iniciativa del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[80][3] = "El Observatorio Estatal de la Discapacidad (OED), iniciativa del Ministerio de Sanidad, Servicios Sociales e Igualdad";
 answers[80] = choices[80][2];
 units[80] = "39";
 comments[80] = "Id Pregunta: 10354. http://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad/pae_Observatorio_de_Accesibilidad.html";


//  Id pregunta: 10364 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En relaci&oacute;n con IEC (International Electrotechnical Commission), se&ntilde;ale la respuesta incorrecta:";
 choices[81]= new Array();
 choices[81][0] = "El equivalente europeo es CENELEC (Comit&eacute; Europeo de Normalizaci&oacute;n Electrot&eacute;cnica)";
 choices[81][1] = "La representaci&oacute;n espa&ntilde;ola como miembro de pleno derecho recae en AENOR";
 choices[81][2] = "Elabora normas a nivel t&eacute;cnico en materia el&eacute;ctrica y electrot&eacute;cnica";
 choices[81][3] = "Las normas elaboradas por el CENELEC se denominan CEN";
 answers[81] = choices[81][3];
 units[81] = "42";
 comments[81] = "Id Pregunta: 10364. Las normas elaboradas por el CENELEC se denominan EN (Norma Europea)";


//  Id pregunta: 10428 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  De acuerdo con el m&eacute;todo del Valor Actual Neto, &iquest;ser&iacute;a recomendable  realizar una inversi&oacute;n en dos a&ntilde;os, con capital inicial aportado de 1 M&euro; y flujos de caja esperados de 0,1M&euro; y 0,9M&euro; en el primer y segundo a&ntilde;o de inversi&oacute;n, con un tipo de descuento del 1%? ";
 choices[82]= new Array();
 choices[82][0] = "No.";
 choices[82][1] = "No se puede deducir del enunciado";
 choices[82][2] = "Si.";
 choices[82][3] = "Debe mantenerse cuatro a&ntilde;os como m&iacute;nimo";
 answers[82] = choices[82][0];
 units[82] = "38";
 comments[82] = "Id Pregunta: 10428. Examen TIC A1 2013";


//  Id pregunta: 10434 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Los sistemas de videoconferencia";
 choices[83]= new Array();
 choices[83][0] = "pueden utilizar conmutaci&oacute;n de circuitos sobre la RDSI usando el protocolo H.326. ";
 choices[83][1] = "pueden utilizar redes IP con el protocolo H.323. ";
 choices[83][2] = "pueden utilizar redes IP s&oacute;lo si usan el protocolo SIP.";
 choices[83][3] = "pueden utilizar conmutaci&oacute;n de paquetes sobre RDSI, multiplexando las se&ntilde;ales de las distintas localizaciones si usan el protocolo H.328. ";
 answers[83] = choices[83][1];
 units[83] = "117";
 comments[83] = "Id Pregunta: 10434. Examen TIC A1 2013";


//  Id pregunta: 10440 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el direccionamiento IPv4, clase C ";
 choices[84]= new Array();
 choices[84][0] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^21 redes con 254 nodos posibles. ";
 choices[84][1] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^21 redes  con 254 nodos posibles. ";
 choices[84][2] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^22 redes  con 126 nodos posibles. ";
 choices[84][3] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^22 redes  con 128 nodos posibles. ";
 answers[84] = choices[84][0];
 units[84] = "100";
 comments[84] = "Id Pregunta: 10440. Examen TIC A1 2013";


//  Id pregunta: 10447 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)   Indique la opci&oacute;n verdadera.";
 choices[85]= new Array();
 choices[85][0] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E1 proporciona 4 Mbps.";
 choices[85][1] = "En la jerarqu&iacute;a digital plesi&oacute;crona un E3 proporciona 32 Mbps.";
 choices[85][2] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 140 Mbps.";
 choices[85][3] = "En la jerarqu&iacute;a digital s&iacute;ncrona un STM1 proporciona 155 Mbps. ";
 answers[85] = choices[85][3];
 units[85] = "103";
 comments[85] = "Id Pregunta: 10447. Examen TIC A1 2013";


//  Id pregunta: 10459 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indique cu&aacute;l es el m&eacute;todo indicado por el W3C para la optimizaci&oacute;n de la transmisi&oacute;n de mensajes SOAP:";
 choices[86]= new Array();
 choices[86][0] = "XOP XML-binary Optimized Protocol";
 choices[86][1] = "XOP XML-binary Optimized Packaging";
 choices[86][2] = "MTOM Message Transmission Optimization Mechanism";
 choices[86][3] = "REST Represantional State Transfer";
 answers[86] = choices[86][2];
 units[86] = "51";
 comments[86] = "Id Pregunta: 10459. NULL";


//  Id pregunta: 10485 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Con qu&eacute; &aacute;mbito se relaciona COSO?";
 choices[87]= new Array();
 choices[87][0] = "Con control de la calidad, es similar al EFQM ";
 choices[87][1] = "Con el marco de Seguridad de las Tecnolog&iacute;as de la Informaci&oacute;n, similar a la ISO 27000";
 choices[87][2] = "Con Gobierno Corporativo de las Tecnologias de la Informaci&oacute;n";
 choices[87][3] = "Con el control de los servicios de Tecnolog&iacute;as de la Informaci&oacute;n, similar a ITIL";
 answers[87] = choices[87][2];
 units[87] = "98";
 comments[87] = "Id Pregunta: 10485. NULL";


//  Id pregunta: 10487 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  El ciclo de mejora continua: Plan-Do-Check-Act se conoce tambi&eacute;n por el nombre de";
 choices[88]= new Array();
 choices[88][0] = "Ciclo de Calidad";
 choices[88][1] = "The endless loop";
 choices[88][2] = "Ciclo de Deming";
 choices[88][3] = "Ciclo de ITIL";
 answers[88] = choices[88][2];
 units[88] = "98";
 comments[88] = "Id Pregunta: 10487. NULL";


//  Id pregunta: 10490 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Seg&uacute;n la Ley 9/2014, que tipo de infracci&oacute;n es: La realizaci&oacute;n de actividades sin disponer de la habilitaci&oacute;n oportuna en las materias reguladas por esta Ley, cuando legalmente sea necesaria.";
 choices[89]= new Array();
 choices[89][0] = "Muy Grave";
 choices[89][1] = "Grave";
 choices[89][2] = "Leve";
 choices[89][3] = "No es Infraccion";
 answers[89] = choices[89][0];
 units[89] = "110";
 comments[89] = "Id Pregunta: 10490. Art 76.1 de la Ley 9/2014";


//  Id pregunta: 10512 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Que estandar establece el formato de la numeracion, las direcciones email y las direcciones web?";
 choices[90]= new Array();
 choices[90][0] = "E.122";
 choices[90][1] = "E.123";
 choices[90][2] = "E.231";
 choices[90][3] = "Ninguna de las anteriores";
 answers[90] = choices[90][1];
 units[90] = "109";
 comments[90] = "Id Pregunta: 10512. NULL";


//  Id pregunta: 10514 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Qu&eacute; RFC define el Estandar SIP?";
 choices[91]= new Array();
 choices[91][0] = "RFC 3160";
 choices[91][1] = "RFC 6130";
 choices[91][2] = "RFC 3610";
 choices[91][3] = "RFC 3261";
 answers[91] = choices[91][3];
 units[91] = "109";
 comments[91] = "Id Pregunta: 10514. NULL";


//  Id pregunta: 10521 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Indique cu&aacute;l de las siguientes afirmaciones es verdadera:";
 choices[92]= new Array();
 choices[92][0] = "Las multas coercitivas son incompatibles con las sanciones";
 choices[92][1] = "El importe m&aacute;ximo de las multas coercitivas son 30000 euros";
 choices[92][2] = "El importe de las multas coercitivas  Fondo nacional del servicio universal ";
 choices[92][3] = "Ninguna de las anteriores es cierta";
 answers[92] = choices[92][1];
 units[92] = "110";
 comments[92] = "Id Pregunta: 10521. ";


//  Id pregunta: 10527 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  En el &aacute;mbito de los procesadores de ordenador, el concepto de pipelining hace referencia a:";
 choices[93]= new Array();
 choices[93][0] = "el encadenamiento de las instrucciones que se ejecutan en el procesador, de manera que la salida de una se conecta a la entrada de la siguiente ahorrando el paso por los registros, lo que acelera la ejecuci&oacute;n";
 choices[93][1] = "el particionado del procesador en etapas, lo que permite paralelizar las fases de ejecuci&oacute;n de instrucciones en el procesador";
 choices[93][2] = "el acceso a memoria mediante buses dedicados al efecto, denominados &quot;pipes&quot;, lo que prioriza las consultas del procesador a la memoria";
 choices[93][3] = "no se contempla el concepto de pipelining relacionado con los procesadores";
 answers[93] = choices[93][1];
 units[93] = "45";
 comments[93] = "Id Pregunta: 10527. NULL";


//  Id pregunta: 10528 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  Se&ntilde;ale la respuesta correcta relacionada con las arquitecturas RISC y CISC de procesadores";
 choices[94]= new Array();
 choices[94][0] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, ejecuci&oacute;n de la instrucci&oacute;n, acceso a memoria, escritura a registro";
 choices[94][1] = "CISC es un modelo m&aacute;s moderno que RISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[94][2] = "RISC es un modelo m&aacute;s moderno que CISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[94][3] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, acceso a memoria, ejecuci&oacute;n de la instrucci&oacute;n, escritura a registro";
 answers[94] = choices[94][0];
 units[94] = "45";
 comments[94] = "Id Pregunta: 10528. NULL";


//  Id pregunta: 10531 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  El ancho de banda m&aacute;ximo alcanzado por la familia de est&aacute;ndares USB es:";
 choices[95]= new Array();
 choices[95][0] = "10 Gbit/s full-duplex por USB 3.0";
 choices[95][1] = "10 Gbit/s half-duplex por USB 3.1";
 choices[95][2] = "10 Gbit/s full-duplex por USB 3.2";
 choices[95][3] = "10 Gbit/s full-duplex por USB 3.1";
 answers[95] = choices[95][3];
 units[95] = "46";
 comments[95] = "Id Pregunta: 10531. NULL";


//  Id pregunta: 10532 AÃ±o de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes grupos de propiedades son caracter&iacute;sticos de Cloud Computing?";
 choices[96]= new Array();
 choices[96][0] = "tenencia m&uacute;ltiple, escalabilidad, elasticidad, independencia de la localizaci&oacute;n";
 choices[96][1] = "A) m&aacute;s reusabilidad";
 choices[96][2] = "B) m&aacute;s interoperabilidad";
 choices[96][3] = "C) m&aacute;s desacoplamiento";
 answers[96] = choices[96][0];
 units[96] = "47";
 comments[96] = "Id Pregunta: 10532. NULL";


//  Id pregunta: 10543 AÃ±o de creación de pregunta: 2014-01-01
 questions[97]= "98)  El plan de telecomunicaciones y redes ultrarr&aacute;pidas, dise&ntilde;ado para dar cumplimiento a los objetivos de banda ancha fijados por la Agenda Digital para Europa, fija como objetivos para el 2015:";
 choices[97]= new Array();
 choices[97][0] = "50% de la poblaci&oacute;n con cobertura de m&aacute;s de 100 Mbps.";
 choices[97][1] = "25% de hogares conectados a redes NGA";
 choices[97][2] = "75% de la poblaci&oacute;n con cobertura 4G";
 choices[97][3] = "Todas las anteriores ";
 answers[97] = choices[97][3];
 units[97] = "30";
 comments[97] = "Id Pregunta: 10543. http://www.agendadigital.gob.es/planes-actuaciones/Paginas/plan-telecomunicaciones-redes.aspx";


//  Id pregunta: 10554 AÃ±o de creación de pregunta: 2014-01-01
 questions[98]= "99)  Cuando una metodolog&iacute;a de ciclo de vida de desarrollo de sistemas es inadecuada, el riesgo m&aacute;s serio del nuevo sistema ser&aacute;:";
 choices[98]= new Array();
 choices[98][0] = "Se completar&aacute; tarde";
 choices[98][1] = "Superar&aacute; las estimaciones de coste";
 choices[98][2] = "No cumplir&aacute; con las necesidades de negocio y de los usuarios";
 choices[98][3] = "Ser&aacute; incompatible con los sistemas existentes";
 answers[98] = choices[98][2];
 units[98] = "31, 32, 33";
 comments[98] = "Id Pregunta: 10554. Aunque todas las respuestas son riesgos, lo primero y m&aacute;s perjudicial es que el sistema no cumplir&aacute; con las necesidades de los usuarios y del negocio.";


//  Id pregunta: 10564 AÃ±o de creación de pregunta: 2014-01-01
 questions[99]= "100)  Para desarrollar un plan de continuidad de negocio de &eacute;xito es fundamental  la participaci&oacute;n del usuario final durante el proceso de: ";
 choices[99]= new Array();
 choices[99][0] = "Estrategias de recuperaci&oacute;n";
 choices[99][1] = "Desarrollo del plan detallado";
 choices[99][2] = "An&aacute;lisis de impacto al negocio (BIA)";
 choices[99][3] = "Mantenimiento y pruebas";
 answers[99] = choices[99][2];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10564. Durante el BIA se debe entender y conocer las necesidades del negocio, sus operaciones y el impacto en el negocio ante un desastre";


