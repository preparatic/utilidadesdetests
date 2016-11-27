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

//  Id pregunta: 10578 AÃ±o de creación de pregunta: 2015-01-01
 questions[0]= "1)  La red SARA:";
 choices[0]= new Array();
 choices[0][0] = "S&oacute;lo interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas.";
 choices[0][1] = "S&oacute;lo interconecta la Administraci&oacute;n General del Estado.";
 choices[0][2] = "S&oacute;lo interconecta las Comunidades Aut&oacute;nomas entre s&iacute;.";
 choices[0][3] = "Interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas e instituciones europeas.";
 answers[0] = choices[0][3];
 units[0] = "44";
 comments[0] = "Id Pregunta: 10578. ";


//  Id pregunta: 10619 AÃ±o de creación de pregunta: 2015-01-01
 questions[1]= "2)  Se&ntilde;ale cu&aacute;l de estas aplicaciones puede implementarse con el entorno .NET:";
 choices[1]= new Array();
 choices[1][0] = "Aplicaci&oacute;n de escritorio escrita en C++.";
 choices[1][1] = "Sitio web din&aacute;mico.";
 choices[1][2] = "Una plataforma de e-learning.";
 choices[1][3] = "Todas las anteriores.";
 answers[1] = choices[1][3];
 units[1] = "59";
 comments[1] = "Id Pregunta: 10619. ";


//  Id pregunta: 10630 AÃ±o de creación de pregunta: 2015-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de estas no es una novedad de M&eacute;trica v3 con respecto a M&eacute;trica v2?";
 choices[2]= new Array();
 choices[2][0] = "Propone un conjunto de t&eacute;cnicas para obtener los productos intermedios y finales.";
 choices[2][1] = "Cubre tanto el desarrollo estructurado como el desarrollo orientado a objetos.";
 choices[2][2] = "Su estructura est&aacute; basada en procesos de entrada, transformaci&oacute;n y salida seg&uacute;n ISO 12207.";
 choices[2][3] = "Se incluyen interfaces para aspectos de gesti&oacute;n.";
 answers[2] = choices[2][0];
 units[2] = "86";
 comments[2] = "Id Pregunta: 10630. ";


//  Id pregunta: 10634 AÃ±o de creación de pregunta: 2015-01-01
 questions[3]= "4)  Indique cu&aacute;l de &eacute;stas no es una t&eacute;cnica propuesta por M&eacute;trica v3:";
 choices[3]= new Array();
 choices[3][0] = "Factores Cr&iacute;ticos de &Eacute;xito (FCE).";
 choices[3][1] = "Modelo Entidad/Relaci&oacute;n";
 choices[3][2] = "Diagrama de componentes";
 choices[3][3] = "An&aacute;lisis de Puntos Funci&oacute;n.";
 answers[3] = choices[3][0];
 units[3] = "86";
 comments[3] = "Id Pregunta: 10634. ";


//  Id pregunta: 10693 AÃ±o de creación de pregunta: 2015-01-01
 questions[4]= "5)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[4]= new Array();
 choices[4][0] = "Para la Administraci&oacute;n General del Estado.";
 choices[4][1] = "Para las Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[4][2] = "Para el Sector P&uacute;blico Institucional.";
 choices[4][3] = "Todas las anteriores.";
 answers[4] = choices[4][3];
 units[4] = "30";
 comments[4] = "Id Pregunta: 10693. ";


//  Id pregunta: 10699 AÃ±o de creación de pregunta: 2015-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes no es un metadato obligatorio establecido en la NTI de Documento Electr&oacute;nico?";
 choices[5]= new Array();
 choices[5][0] = "Versi&oacute;n NTI.";
 choices[5][1] = "&Oacute;rgano.";
 choices[5][2] = "Estado de elaboraci&oacute;n.";
 choices[5][3] = "Todos los anteriores son metadatos obligatorios.";
 answers[5] = choices[5][3];
 units[5] = "43";
 comments[5] = "Id Pregunta: 10699. ";


//  Id pregunta: 10712 AÃ±o de creación de pregunta: 2015-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l no es seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre las entidades registrales una caracter&iacute;stica de la misma?";
 choices[6]= new Array();
 choices[6][0] = "Inclusi&oacute;n de metadatos que faciliten el intercambio de asientos.";
 choices[6][1] = "Incorporaci&oacute;n de ficheros adjuntos a los intercambios.";
 choices[6][2] = "Orientaci&oacute;n a arquitecturas de intermediaci&oacute;n.";
 choices[6][3] = "Mejora en los mecanismos de control del intercambio.";
 answers[6] = choices[6][0];
 units[6] = "43";
 comments[6] = "Id Pregunta: 10712. ";


//  Id pregunta: 10724 AÃ±o de creación de pregunta: 2015-01-01
 questions[7]= "8)  &iquest;Qui&eacute;n es el responsable de la Plataforma de Intermediaci&oacute;n?";
 choices[7]= new Array();
 choices[7][0] = "Ministerio de la Presidencia";
 choices[7][1] = "Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[7][2] = "Ministerio de Econom&iacute;a y Competitividad";
 choices[7][3] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 answers[7] = choices[7][1];
 units[7] = "43";
 comments[7] = "Id Pregunta: 10724. ";


//  Id pregunta: 10728 AÃ±o de creación de pregunta: 2015-01-01
 questions[8]= "9)  Seg&uacute;n la NTI de Protocolos de Intermedicaci&oacute;n, &iquest;Cu&aacute;l de la siguiente informaci&oacute;n no debe ser almacenada para la trazabilidad de cada consulta o intercambio?";
 choices[8]= new Array();
 choices[8][0] = "Identificador de la transacci&oacute;n.";
 choices[8][1] = "Contenido del intercambio.";
 choices[8][2] = "Cesionario de la informaci&oacute;n.";
 choices[8][3] = "Fecha y hora de realizaci&oacute;n de la consulta.";
 answers[8] = choices[8][1];
 units[8] = "43";
 comments[8] = "Id Pregunta: 10728. ";


//  Id pregunta: 10746 AÃ±o de creación de pregunta: 2015-01-01
 questions[9]= "10)  El Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC estar&aacute; compuesto por:";
 choices[9]= new Array();
 choices[9][0] = "Un m&iacute;nimo de cinco miembros y un m&aacute;ximo de diez miembros.";
 choices[9][1] = "Un m&iacute;nimo de cinco miembros.";
 choices[9][2] = "Un m&aacute;ximo de diez miembros.";
 choices[9][3] = "Un m&iacute;nimo de cinco miembros y un m&aacute;ximo de quince miembros.";
 answers[9] = choices[9][0];
 units[9] = "24";
 comments[9] = "Id Pregunta: 10746. ";


//  Id pregunta: 10768 AÃ±o de creación de pregunta: 2015-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes servicios no ha sido declarado como servicio compartido?";
 choices[10]= new Array();
 choices[10][0] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[10][1] = "Servicio de gesti&oacute;n de archivo electr&oacute;nico";
 choices[10][2] = "Servicio de videoconferencia";
 choices[10][3] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 answers[10] = choices[10][2];
 units[10] = "24";
 comments[10] = "Id Pregunta: 10768. ";


//  Id pregunta: 10780 AÃ±o de creación de pregunta: 2015-01-01
 questions[11]= "12)  Seg&uacute;n el art&iacute;culo 18 del Real Decreto 1671/2009, sobre certificados de sede electr&oacute;nica de la Administraci&oacute;n General del Estado y de sus organismos p&uacute;blicos vinculados o dependientes, &iquest;cu&aacute;l de los siguientes NO es uno de los contenidos m&iacute;nimos a incluir en un certificado electr&oacute;nico de sede electr&oacute;nica?";
 choices[11]= new Array();
 choices[11][0] = "Nombre descriptivo de la sede electr&oacute;nica.";
 choices[11][1] = "N&uacute;mero de identificaci&oacute;n fiscal de la entidad suscriptora.";
 choices[11][2] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n &laquo;sede electr&oacute;nica&raquo;.";
 choices[11][3] = "Direcci&oacute;n f&iacute;sica de la entidad suscriptora.";
 answers[11] = choices[11][3];
 units[11] = "43";
 comments[11] = "Id Pregunta: 10780. Examen GSI 2014";


//  Id pregunta: 10783 AÃ±o de creación de pregunta: 2015-01-01
 questions[12]= "13)  Seg&uacute;n el art&iacute;culo 40 de la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, sobre el Comit&eacute; Sectorial de administraci&oacute;n electr&oacute;nica, &iquest;cu&aacute;l de las siguientes opciones es una funci&oacute;n de dicho &oacute;rgano?";
 choices[12]= new Array();
 choices[12][0] = "Desarrollar la normativa en materia de administraci&oacute;n electr&oacute;nica a nivel nacional.";
 choices[12][1] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[12][2] = "Elaborar un informe anual sobre el nivel de avance de la administraci&oacute;n electr&oacute;nica a nivel nacional, auton&oacute;mico y municipal.";
 choices[12][3] = "Estimular el crecimiento en el empleo de la administraci&oacute;n electr&oacute;nica por parte de ciudadanos y empresas.";
 answers[12] = choices[12][1];
 units[12] = "43";
 comments[12] = "Id Pregunta: 10783. Examen GSI 2014";


//  Id pregunta: 10792 AÃ±o de creación de pregunta: 2015-01-01
 questions[13]= "14)  &iquest;Para qu&eacute; se utiliza el servicio SMB de Windows?";
 choices[13]= new Array();
 choices[13][0] = "Para configurar un proxy-inverso en la salida a Internet.";
 choices[13][1] = "Para realizar backups remotos y cronificados.";
 choices[13][2] = "Para compartir archivos e impresoras.";
 choices[13][3] = "Para configurar redes wifi.";
 answers[13] = choices[13][2];
 units[13] = "56";
 comments[13] = "Id Pregunta: 10792. Examen GSI 2014";


//  Id pregunta: 10794 AÃ±o de creación de pregunta: 2015-01-01
 questions[14]= "15)  Se quiere incluir una base de datos local en una aplicaci&oacute;n para m&oacute;viles Android. &iquest;Cu&aacute;l de las siguientes ser&iacute;a la m&aacute;s adecuada?";
 choices[14]= new Array();
 choices[14][0] = "SQLite.";
 choices[14][1] = "Oracle Pocket.";
 choices[14][2] = "SQL Server compact.";
 choices[14][3] = "MySQL micro edition.";
 answers[14] = choices[14][0];
 units[14] = "57";
 comments[14] = "Id Pregunta: 10794. Examen GSI 2014";


//  Id pregunta: 10805 AÃ±o de creación de pregunta: 2015-01-01
 questions[15]= "16)  En relaci&oacute;n a OpenDocument (ODF), se&ntilde;ale la respuesta FALSA:";
 choices[15]= new Array();
 choices[15][0] = "Es un formato de archivo abierto y est&aacute;ndar para el almacenamiento de documentos tales como hojas de c&aacute;lculo, textos, gr&aacute;ficas y presentaciones.";
 choices[15][1] = "El tipo MIME para documentos texto de OpenDocument es: application/vnd.openxmlformats-officedocument.wordprocessingml.document.";
 choices[15][2] = "Est&aacute; basado en XML.";
 choices[15][3] = "Las extensiones de los archivos incluyen: odt para documentos de texto, ods para hojas de c&aacute;lculo, odp para presentaciones y odb para bases de datos.";
 answers[15] = choices[15][1];
 units[15] = "62";
 comments[15] = "Id Pregunta: 10805. Examen GSI 2014";


//  Id pregunta: 10812 AÃ±o de creación de pregunta: 2015-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes licencias NO se considera copyleft robusto?";
 choices[16]= new Array();
 choices[16][0] = "EUPL";
 choices[16][1] = "GPL";
 choices[16][2] = "LGPL";
 choices[16][3] = "BSD";
 answers[16] = choices[16][3];
 units[16] = "61";
 comments[16] = "Id Pregunta: 10812. Examen GSI 2014";


//  Id pregunta: 10813 AÃ±o de creación de pregunta: 2015-01-01
 questions[17]= "18)  Se&ntilde;ale cu&aacute;les de los siguientes formatos de archivo en la actualidad NO se consideran de formato abierto de texto para documentos:";
 choices[17]= new Array();
 choices[17][0] = "PDF";
 choices[17][1] = "EPUB";
 choices[17][2] = "RTF";
 choices[17][3] = "FLAC";
 answers[17] = choices[17][3];
 units[17] = "61, 62";
 comments[17] = "Id Pregunta: 10813. Examen GSI 2014";


//  Id pregunta: 10836 AÃ±o de creación de pregunta: 2015-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes algoritmos de ordenaci&oacute;n consiste en recorrer la lista comparando y ordenando los elementos adyacentes de dos en dos?";
 choices[18]= new Array();
 choices[18][0] = "Burbuja (BubbleSort).";
 choices[18][1] = "Selecci&oacute;n.";
 choices[18][2] = "Inserci&oacute;n.";
 choices[18][3] = "R&aacute;pido (QuickSort).";
 answers[18] = choices[18][0];
 units[18] = "0";
 comments[18] = "Id Pregunta: 10836. Examen GSI 2014";


//  Id pregunta: 10848 AÃ±o de creación de pregunta: 2015-01-01
 questions[19]= "20)  Elija la respuesta correcta respecto Java EE 7:";
 choices[19]= new Array();
 choices[19][0] = "Para crear un nuevo servlet se debe invocar al procedimiento init ().";
 choices[19][1] = "Para destruir un servlet se debe invocar al m&eacute;todo destroy().";
 choices[19][2] = "La clase ServletConfig sirve para pasarle informaci&oacute;n al servlet durante su inicializaci&oacute;n.";
 choices[19][3] = "La clase ServletSession proporciona a las aplicaciones las herramientas para la gesti&oacute;n de la sesi&oacute;n.";
 answers[19] = choices[19][2];
 units[19] = "60, 116";
 comments[19] = "Id Pregunta: 10848. Examen GSI 2014";


//  Id pregunta: 10858 AÃ±o de creación de pregunta: 2015-01-01
 questions[20]= "21)  COCOMO II para estimaci&oacute;n de proyectos de software est&aacute; compuesto de 3 modelos, que son:";
 choices[20]= new Array();
 choices[20][0] = "Modelo de An&aacute;lisis de la Aplicaci&oacute;n, Modelo de Construcci&oacute;n Preliminar y Modelo Post-Arquitectura.";
 choices[20][1] = "Modelo de Planificaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura.";
 choices[20][2] = "Modelo de Composici&oacute;n de la Estimaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura Preliminar.";
 choices[20][3] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n, Modelo de Dise&ntilde;o Preliminar y Modelo Post-Arquitectura.";
 answers[20] = choices[20][3];
 units[20] = "89";
 comments[20] = "Id Pregunta: 10858. Examen GSI 2014";


//  Id pregunta: 10878 AÃ±o de creación de pregunta: 2015-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de los siguientes NO es un producto de virtualizaci&oacute;n?";
 choices[21]= new Array();
 choices[21][0] = "Virtual PC.";
 choices[21][1] = "XEN.";
 choices[21][2] = "Atheros.";
 choices[21][3] = "VirtualBox.";
 answers[21] = choices[21][2];
 units[21] = "119";
 comments[21] = "Id Pregunta: 10878. Examen GSI 2014";


//  Id pregunta: 10889 AÃ±o de creación de pregunta: 2015-01-01
 questions[22]= "23)  Se&ntilde;ale cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 132.26.41.90/26:";
 choices[22]= new Array();
 choices[22][0] = "132.26.41.128";
 choices[22][1] = "132.26.41.127";
 choices[22][2] = "132.26.41.124";
 choices[22][3] = "132.26.41.55";
 answers[22] = choices[22][2];
 units[22] = "100";
 comments[22] = "Id Pregunta: 10889. Examen GSI 2014";


//  Id pregunta: 10901 AÃ±o de creación de pregunta: 2015-01-01
 questions[23]= "24)  En el contexto de la web sem&aacute;ntica, se&ntilde;ale la definici&oacute;n correcta de ontolog&iacute;a:";
 choices[23]= new Array();
 choices[23][0] = "Es una especificaci&oacute;n expl&iacute;cita de una conceptualizaci&oacute;n.";
 choices[23][1] = "Es un sistema de clasificaci&oacute;n abierto y/o colaborativo basado en etiquetas.";
 choices[23][2] = "Es un conjunto de nombres en el cual todos los nombres son &uacute;nicos.";
 choices[23][3] = "Es un sistema de clasificaci&oacute;n que permite agrupar un conjunto de elementos dentro de unas categor&iacute;as predefinidas que pueden estar contenidas unas en otras, o relacionadas de cualquier otra manera.";
 answers[23] = choices[23][0];
 units[23] = "0";
 comments[23] = "Id Pregunta: 10901. Examen GSI 2014";


//  Id pregunta: 10905 AÃ±o de creación de pregunta: 2015-01-01
 questions[24]= "25)  El lenguaje de consulta sobre RDF que permite hacer b&uacute;squedas sobre los recursos de la Web Sem&aacute;ntica utilizando distintas fuentes de datos es:";
 choices[24]= new Array();
 choices[24][0] = "OWL";
 choices[24][1] = "RQUERY";
 choices[24][2] = "JQUERY";
 choices[24][3] = "SPARQL";
 answers[24] = choices[24][3];
 units[24] = "69, 22";
 comments[24] = "Id Pregunta: 10905. Examen GSI 2014";


//  Id pregunta: 10906 AÃ±o de creación de pregunta: 2015-01-01
 questions[25]= "26)  Se&ntilde;ale la respuesta correcta seg&uacute;n lo que dicta el art&iacute;culo 79 de la Ley 9/2014, General de Telecomunicaciones:";
 choices[25]= new Array();
 choices[25][0] = "Por la comisi&oacute;n de infracciones muy graves se impondr&aacute; al infractor multa por importe de hasta 30 millones de euros.";
 choices[25][1] = "Las infracciones muy graves, en funci&oacute;n de sus circunstancias, podr&aacute;n dar lugar a la inhabilitaci&oacute;n hasta de 10 a&ntilde;os del operador para la explotaci&oacute;n de redes o la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 choices[25][2] = "Por la comisi&oacute;n de infracciones graves se impondr&aacute; al infractor multa por importe de hasta 5 millones de euros.";
 choices[25][3] = "Por la comisi&oacute;n de infracciones leves se impondr&aacute; al infractor una multa por importe de hasta 50 mil euros.";
 answers[25] = choices[25][3];
 units[25] = "110";
 comments[25] = "Id Pregunta: 10906. Examen GSI 2014";


//  Id pregunta: 10910 AÃ±o de creación de pregunta: 2015-01-01
 questions[26]= "27)  La tecnolog&iacute;a de telefon&iacute;a m&oacute;vil GSM utiliza, entre otras, la siguiente base de datos de usuarios:";
 choices[26]= new Array();
 choices[26][0] = "MSC";
 choices[26][1] = "BSC";
 choices[26][2] = "NSS";
 choices[26][3] = "VLR";
 answers[26] = choices[26][3];
 units[26] = "108";
 comments[26] = "Id Pregunta: 10910. Examen GSI 2014";


//  Id pregunta: 10915 AÃ±o de creación de pregunta: 2015-01-01
 questions[27]= "28)  Un proyecto europeo cuyo objetivo estrat&eacute;gico fue mejorar y potenciar el uso de la tecnolog&iacute;a PLC se denomin&oacute; proyecto:";
 choices[27]= new Array();
 choices[27][0] = "CORDIS";
 choices[27][1] = "OPERA";
 choices[27][2] = "Dublin Core";
 choices[27][3] = "POIROT";
 answers[27] = choices[27][1];
 units[27] = "107";
 comments[27] = "Id Pregunta: 10915. Examen GSI 2014";


//  Id pregunta: 10921 AÃ±o de creación de pregunta: 2015-01-01
 questions[28]= "29)  SAML (Security Assertion Markup Language):";
 choices[28]= new Array();
 choices[28][0] = "Establece protocolos de seguridad para el intercambio de identidades.";
 choices[28][1] = "Establece protocolos de seguridad para el firmado de estructuras XML.";
 choices[28][2] = "Es un est&aacute;ndar establecido por IEEE como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 choices[28][3] = "Es un est&aacute;ndar establecido por OASIS como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 answers[28] = choices[28][0];
 units[28] = "118";
 comments[28] = "Id Pregunta: 10921. TIC A1 AGE 2014";


//  Id pregunta: 10928 AÃ±o de creación de pregunta: 2015-01-01
 questions[29]= "30)  La facturaci&oacute;n electr&oacute;nica ser&aacute; obligatoria para las Administraciones P&uacute;blicas en:";
 choices[29]= new Array();
 choices[29][0] = "Enero de 2015.";
 choices[29][1] = "Enero de 2016.";
 choices[29][2] = "Diciembre de 2016.";
 choices[29][3] = "Diciembre de 2015.";
 answers[29] = choices[29][0];
 units[29] = "70";
 comments[29] = "Id Pregunta: 10928. TIC A1 AGE 2014";


//  Id pregunta: 10933 AÃ±o de creación de pregunta: 2015-01-01
 questions[30]= "31)  Las entidades locales adheridas al servicio com&uacute;n denominado &ldquo;Emprende en 3&rdquo;:";
 choices[30]= new Array();
 choices[30][0] = "Aceptar&aacute;n y utilizar&aacute;n el modelo tipo de declaraci&oacute;n responsable de conformidad con la normativa que regula el proyecto.";
 choices[30][1] = "Podr&aacute;n rechazar las declaraciones responsables recibidas si no vienen acompa&ntilde;adas de la documentaci&oacute;n obligatoria para la puesta en marcha de la empresa.";
 choices[30][2] = "Podr&aacute;n rechazar las declaraciones responsables recibidas si no vienen acompa&ntilde;adas de la documentaci&oacute;n obligatoria para la puesta en marcha de la empresa.";
 choices[30][3] = "La tramitaci&oacute;n de las declaraciones responsables recibidas por &ldquo;Emprende en 3&rdquo; debe ser finalizada antes de los 5 d&iacute;as h&aacute;biles desde su presentaci&oacute;n.";
 answers[30] = choices[30][0];
 units[30] = "44";
 comments[30] = "Id Pregunta: 10933. TIC A1 AGE 2014";


//  Id pregunta: 10963 AÃ±o de creación de pregunta: 2015-01-01
 questions[31]= "32)  &iquest;Qu&eacute; es WCF (Windows Communication Foundation)?";
 choices[31]= new Array();
 choices[31][0] = "Es un est&aacute;ndar establecido por el IEEE para la definici&oacute;n de servicios electr&oacute;nicos de acceso a datos.";
 choices[31][1] = "Es una librer&iacute;a que permite la generaci&oacute;n de servicios web para aplicaci&oacute;n desarrolladas en .NET.";
 choices[31][2] = "Es una fundaci&oacute;n sin &aacute;nimo de lucro que gestiona los recursos comunes y propuestas de mejora de las aplicaciones de escritorio.";
 choices[31][3] = "Es el evento bianual en que se dictamina la pol&iacute;tica a seguir en el &aacute;mbito de las aplicaciones de escritorio.";
 answers[31] = choices[31][1];
 units[31] = "115";
 comments[31] = "Id Pregunta: 10963. TIC A1 AGE 2014";


//  Id pregunta: 10968 AÃ±o de creación de pregunta: 2015-01-01
 questions[32]= "33)  Una de las siguientes opciones incluye tres herramientas de creaci&oacute;n de blogs. Se&ntilde;ale la respuesta correcta:";
 choices[32]= new Array();
 choices[32][0] = "Blogger, Tumblr y Pocket.";
 choices[32][1] = "Wordpress, Blogger y Pocket.";
 choices[32][2] = "Wordpress, Tumblr y Blogger.";
 choices[32][3] = "Blogger, Path y Wordpress.";
 answers[32] = choices[32][2];
 units[32] = "120";
 comments[32] = "Id Pregunta: 10968. TIC A1 AGE 2014";


//  Id pregunta: 10971 AÃ±o de creación de pregunta: 2015-01-01
 questions[33]= "34)  Respecto al Registro de Funcionarios Habilitados, se&ntilde;ale la respuesta correcta:";
 choices[33]= new Array();
 choices[33][0] = "Podr&aacute;n ser habilitados los funcionarios de carrera en situaci&oacute;n de servicio activo e inscritos en el Registro Electr&oacute;nico de Apoderamientos.";
 choices[33][1] = "El registro permite la descarga, bajo petici&oacute;n, de un fichero que con todas las habilitaciones vigentes para los tr&aacute;mites y actuaciones por medios electr&oacute;nicos de los que el &oacute;rgano peticionario sea competente.";
 choices[33][2] = "Las habilitaciones inscritas en el Registro deber&aacute;n ser efectivas en el plazo m&aacute;ximo de 5 d&iacute;as h&aacute;biles.";
 choices[33][3] = "La habilitaci&oacute;n se otorgar&aacute; por tiempo m&aacute;ximo de 2 a&ntilde;os, siendo necesaria su renovaci&oacute;n por parte del Departamento competente.";
 answers[33] = choices[33][1];
 units[33] = "43";
 comments[33] = "Id Pregunta: 10971. TIC A1 AGE 2014";


//  Id pregunta: 10986 AÃ±o de creación de pregunta: 2015-01-01
 questions[34]= "35)  El 10 de enero de 2013 se public&oacute; una vulnerabilidad de d&iacute;a cero en Java 7 Update 10 y versiones anteriores de Java 7 que permit&iacute;a a un atacante escalar los privilegios de ejecuci&oacute;n de un applet. Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[34]= new Array();
 choices[34][0] = "Las vulnerabilidades de seguridad de Java han llevado a establecer un periodo mensual, los terceros viernes de cada mes, para los Oracle Java SE Critical Patch Updates.";
 choices[34][1] = "Las vulnerabilidades de seguridad de Java han llevado a Oracle a recomendar y facilitar la desactivaci&oacute;n de Java a partir de la versi&oacute;n 7 Update 10.";
 choices[34][2] = "Las vulnerabilidades de seguridad de Java han provocado que Oracle recomiende la desinstalaci&oacute;n de Java 6 de todos los equipos.";
 choices[34][3] = "Las vulnerabilidades de seguridad de Java han provocado que sea obligatorio firmar con un certificado reconocido los applets a partir de Java SE 7u21.";
 answers[34] = choices[34][0];
 units[34] = "60";
 comments[34] = "Id Pregunta: 10986. TIC A1 AGE 2014";


//  Id pregunta: 10989 AÃ±o de creación de pregunta: 2015-01-01
 questions[35]= "36)  &iquest;A qu&eacute; perfil corresponde en M&eacute;trica 3 la persona que asesora en los aspectos de seguridad y calidad relativos al producto y al proceso seguido para su obtenci&oacute;n, identifica y analiza los riesgos y determina las medidas de control oportunas?";
 choices[35]= new Array();
 choices[35][0] = "Perfil Consultor.";
 choices[35][1] = "Perfil Directivo.";
 choices[35][2] = "Perfil Analista.";
 choices[35][3] = "Perfil Jefe de Proyecto.";
 answers[35] = choices[35][3];
 units[35] = "86";
 comments[35] = "Id Pregunta: 10989. TIC A1 AGE 2014";


//  Id pregunta: 10993 AÃ±o de creación de pregunta: 2015-01-01
 questions[36]= "37)  En relaci&oacute;n con el Punto General de Entrada de Facturas Electr&oacute;nicas de la Administraci&oacute;n General del Estado (FACe), se&ntilde;ale la respuesta correcta:";
 choices[36]= new Array();
 choices[36][0] = "Las Comunidades Aut&oacute;nomas y las Entidades Locales deber&aacute;n utilizar FACe, en todos los casos.";
 choices[36][1] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas e interoperar con el FACe.";
 choices[36][2] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas, sin necesidad de interoperar con FACe.";
 choices[36][3] = "Las Comunidades Aut&oacute;nomas y Entidades Locales podr&aacute;n crear su propio punto general de entrada de facturas electr&oacute;nicas, previa justificaci&oacute;n de su no adhesi&oacute;n a FACe en t&eacute;rminos de eficiencia, y con anterioridad a la realizaci&oacute;n de cualquier inversi&oacute;n al respecto.";
 answers[36] = choices[36][3];
 units[36] = "70";
 comments[36] = "Id Pregunta: 10993. TIC A1 AGE 2014";


//  Id pregunta: 10996 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  En el caso de un fichero de datos relativo a la comisi&oacute;n de infracciones administrativas o penales, indique los niveles de seguridad que deber&aacute;n implantarse:";
 choices[37]= new Array();
 choices[37][0] = "S&oacute;lo las medidas de seguridad de nivel b&aacute;sico.";
 choices[37][1] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel medio y alto.";
 choices[37][2] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel medio.";
 choices[37][3] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel alto.";
 answers[37] = choices[37][2];
 units[37] = "29";
 comments[37] = "Id Pregunta: 10996. TIC A1 AGE 2014";


//  Id pregunta: 10997 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  Una de las competencias que debe poseer actualmente un directivo TIC es la de liderazgo. El liderazgo autocr&aacute;tico se caracteriza por:";
 choices[38]= new Array();
 choices[38][0] = "Permitir y formentar la participaci&oacute;n de su equipo en la adopci&oacute;n de decisiones.";
 choices[38][1] = "Limitar su intervenci&oacute;n a comunicar el objetivo final del trabajo que ha de realizar su equipo.";
 choices[38][2] = "Utilizar poco el poder y conceder al equipo un alto grado de independencia en sus tareas.";
 choices[38][3] = "Adoptar decisiones de manera unilateral, limitando o excluyendo a los subordinados.";
 answers[38] = choices[38][3];
 units[38] = "24";
 comments[38] = "Id Pregunta: 10997. TIC A1 AGE 2014";


//  Id pregunta: 10998 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  Respecto a HTML5, se&ntilde;ale la respuesta correcta:";
 choices[39]= new Array();
 choices[39][0] = "Su uso est&aacute; recomendado para el desarrollo web de los sitios de la Administraci&oacute;n General del Estado, siempre que no se incumpla la normativa de accesibilidad.";
 choices[39][1] = "En ning&uacute;n caso se recomienda el uso de HTML5 en el desarrollo web de los sitios de la Administraci&oacute;n General del Estado.";
 choices[39][2] = "Simplifica el desarrollo de sitios web porque elimina el uso de CSS (Cascading Style Sheets).";
 choices[39][3] = "No permite incluir v&iacute;deo de forma nativa, siendo necesario recurrir siempre a complementos (plugins) externos.";
 answers[39] = choices[39][0];
 units[39] = "69";
 comments[39] = "Id Pregunta: 10998. TIC A1 AGE 2014";


//  Id pregunta: 11036 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l no es un operador b&aacute;sico del &Aacute;lgebra Relacional?";
 choices[40]= new Array();
 choices[40][0] = "Intersecci&oacute;n";
 choices[40][1] = "Uni&oacute;n";
 choices[40][2] = "Proyecci&oacute;n";
 choices[40][3] = "Diferencia";
 answers[40] = choices[40][0];
 units[40] = "58";
 comments[40] = "Id Pregunta: 11036. ";


//  Id pregunta: 11052 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[41]= new Array();
 choices[41][0] = "30 meses";
 choices[41][1] = "4 a&ntilde;os";
 choices[41][2] = "5 a&ntilde;os";
 choices[41][3] = "10 a&ntilde;os";
 answers[41] = choices[41][2];
 units[41] = "73";
 comments[41] = "Id Pregunta: 11052. Modificado por Ley 9/2014";


//  Id pregunta: 11053 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l NO es una extensi&oacute;n v&aacute;lida para certificados?";
 choices[42]= new Array();
 choices[42][0] = ".PFX";
 choices[42][1] = ".DER";
 choices[42][2] = ".P7B";
 choices[42][3] = "Todos lo son";
 answers[42] = choices[42][3];
 units[42] = "73";
 comments[42] = "Id Pregunta: 11053. ";


//  Id pregunta: 11065 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  &iquest;Cual de las afirmaciones es CORRECTA acerca de las diferentes modalidades de demanda, generadas por los negocios de los clientes?";
 choices[43]= new Array();
 choices[43][0] = "Son impulsadas por las pautas de las actividades de los negocios";
 choices[43][1] = "Es imposible predecir como se comportan";
 choices[43][2] = "Es imposible influenciar en las pautas de la demanda";
 choices[43][3] = "Son impulsadas por el calendario de entregas generado por el proceso de Gesti&oacute;n de la Capacidad";
 answers[43] = choices[43][0];
 units[43] = "98";
 comments[43] = "Id Pregunta: 11065. ";


//  Id pregunta: 11105 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  Seleccione la respuesta verdadera sobre los t&eacute;rminos empleados para definir la estrategia de continuidad y recuperaci&oacute;n en un sistema de informaci&oacute;n.";
 choices[44]= new Array();
 choices[44][0] = "El objetivo de Punto de recuperaci&oacute;n RPO determina la p&eacute;rdida aceptable de datos en caso de interrupci&oacute;n.";
 choices[44][1] = "El objetivo de Tiempo de Recuperaci&oacute;n es el tiempo m&aacute;ximo que el sistema puede estar interrumpido.";
 choices[44][2] = "Cuanto m&aacute;s bajo es el RTO m&aacute;s baja es la tolerancia al desastre y m&aacute;s elevado ser&aacute; el coste de las estrategias de recuperaci&oacute;n.";
 choices[44][3] = "Todas las anteriores son verdaderas";
 answers[44] = choices[44][0];
 units[44] = "32";
 comments[44] = "Id Pregunta: 11105. ";


//  Id pregunta: 11117 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  Seleccione la respuesta verdadera respecto a la publicidad de los procedimientos negociados:";
 choices[45]= new Array();
 choices[45][0] = "No se requiere publicidad en el caso de contratos cuyo valor estimado sea IGUAL o MENOR de 120.000";
 choices[45][1] = "El &oacute;rgano de contrataci&oacute;n solicitar&aacute; ofertas, al menos a 5 empresas capaces de realizar el objeto del contrato, cuando ello sea posible.";
 choices[45][2] = "El procedimiento permite la negociaci&oacute;n de las condiciones del contrato.";
 choices[45][3] = "Es el procedimiento ordinario de adjudicaci&oacute;n en los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado.";
 answers[45] = choices[45][2];
 units[45] = "41";
 comments[45] = "Id Pregunta: 11117. ";


//  Id pregunta: 11122 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  &iquest;A que se refiere la gu&iacute;a CCN-STIC 804?";
 choices[46]= new Array();
 choices[46][0] = "Medidas de implantaci&oacute;n del ENS";
 choices[46][1] = "Plan de Adecuaci&oacute;n del ENS";
 choices[46][2] = "Auditor&iacute;a del ENS";
 choices[46][3] = "Normas de seguridad del ENS";
 answers[46] = choices[46][0];
 units[46] = "43";
 comments[46] = "Id Pregunta: 11122. ";


//  Id pregunta: 11124 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de lo siguientes no es un servicio horizontal de la red SARA?";
 choices[47]= new Array();
 choices[47][0] = "Plataforma  de validaci&oacute;n de firma electr&oacute;nica @firma";
 choices[47][1] = "Solicitud de cambio de domicilio";
 choices[47][2] = "Pasarela de pago";
 choices[47][3] = "Registro Central de Personal";
 answers[47] = choices[47][3];
 units[47] = "44";
 comments[47] = "Id Pregunta: 11124. ";


//  Id pregunta: 11140 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l es de las siguientes aplicaciones ofim&aacute;ticas permite crear gr&aacute;ficos y diagramas?";
 choices[48]= new Array();
 choices[48][0] = "Draw";
 choices[48][1] = "Impress";
 choices[48][2] = "Base";
 choices[48][3] = "Picture";
 answers[48] = choices[48][0];
 units[48] = "62";
 comments[48] = "Id Pregunta: 11140. ";


//  Id pregunta: 11153 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes no es un inconveniente de los modelos de desarrollo basados en prototipos?";
 choices[49]= new Array();
 choices[49][0] = "Puede crear falsas expectativas en el usuario ya que puede ver el prototipo como si fuera el producto final";
 choices[49][1] = "Puede darse una fuerte intromisi&oacute;n de los usuarios finales en la integraci&oacute;n";
 choices[49][2] = "Los sistemas se desarrollan en distintas etapas, siendo en general un proceso m&aacute;s largo.";
 choices[49][3] = "No es un paradigma apto para proyectos grandes y de larga duraci&oacute;n ni para aplicaciones peque&ntilde;as";
 answers[49] = choices[49][2];
 units[49] = "76";
 comments[49] = "Id Pregunta: 11153. ";


//  Id pregunta: 11157 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes niveles de los Diagramas de Flujo de Datos no es correcto?";
 choices[50]= new Array();
 choices[50][0] = "Nivel 0: Diagrama de Contexto";
 choices[50][1] = "Nivel 1: Diagrama de Subsistemas";
 choices[50][2] = "Nivel 3: Diagrama de Funciones de los Sistemas";
 choices[50][3] = "Nivel 4: Diagrama de Procesos";
 answers[50] = choices[50][2];
 units[50] = "81";
 comments[50] = "Id Pregunta: 11157. ";


//  Id pregunta: 11161 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  &iquest;Qu&eacute; roles deben participar en la Tarea de Evaluaci&oacute;n de Alternativas y Selecci&oacute;n, seg&uacute;n la metodolog&iacute;a de M&eacute;trica v3?";
 choices[51]= new Array();
 choices[51][0] = "Jefe de Proyecto";
 choices[51][1] = "Jefe de Proyecto y Comit&eacute; de Direcci&oacute;n";
 choices[51][2] = "Jefe de Proyecto, Comit&eacute; de Direcci&oacute;n y Analistas";
 choices[51][3] = "Jefe de Proyecto, Comit&eacute; de Direcci&oacute;n, Analistas y Usuarios Expertos";
 answers[51] = choices[51][2];
 units[51] = "86";
 comments[51] = "Id Pregunta: 11161. ";


//  Id pregunta: 11162 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un modo de COCOMO (Constructive Cost Model) para estimar el n&uacute;mero de instrucciones de c&oacute;digo fuente seg&uacute;n el entorno de aplicaci&oacute;n que se utiliza?";
 choices[52]= new Array();
 choices[52][0] = "Org&aacute;nico";
 choices[52][1] = "Acoplado";
 choices[52][2] = "Semiacoplado";
 choices[52][3] = "Empotrado";
 answers[52] = choices[52][1];
 units[52] = "88";
 comments[52] = "Id Pregunta: 11162. ";


//  Id pregunta: 11196 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento integrador?";
 choices[53]= new Array();
 choices[53][0] = "Agenda de nuevas cualificaciones y empleo";
 choices[53][1] = "Agenda Digital para Europa";
 choices[53][2] = "Todas las anteriores";
 choices[53][3] = "Ninguna de las Anteriores";
 answers[53] = choices[53][0];
 units[53] = "30";
 comments[53] = "Id Pregunta: 11196. ";


//  Id pregunta: 11197 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  &iquest;Qu&eacute; objetivo de porcentaje de i+d marca la estrategia europea 2020 para la Uni&oacute;n Europea?";
 choices[54]= new Array();
 choices[54][0] = "2% del PIB";
 choices[54][1] = "3%del PIB";
 choices[54][2] = "5% del PIB";
 choices[54][3] = "La estrategia Europa 2020 no marca ning&uacute;n objetivo en materia de i+d";
 answers[54] = choices[54][1];
 units[54] = "30";
 comments[54] = "Id Pregunta: 11197. ";


//  Id pregunta: 11226 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  A partir de que versi&oacute;n adopt&oacute; la antigua Sun Microsystem un cambio en la nomenclatura de las versiones en sus productos Java.";
 choices[55]= new Array();
 choices[55][0] = "Hasta la versi&oacute;n 1.2, siendo la versi&oacute;n 3.0 la primera en numerarse de esta forma.";
 choices[55][1] = "Hasta la versi&oacute;n 1.3, siendo la versi&oacute;n 4.0 la primera en numerarse de esta forma.";
 choices[55][2] = "Hasta la versi&oacute;n 1.4, siendo la versi&oacute;n 5.0 la primera en numerarse de esta forma.";
 choices[55][3] = "El versionado ha sido siempre 1.x.";
 answers[55] = choices[55][2];
 units[55] = "116";
 comments[55] = "Id Pregunta: 11226. ";


//  Id pregunta: 11231 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  En relaci&oacute;n con las tecnolog&iacute;as JAXP y StAX seleccione la respuesta err&oacute;nea";
 choices[56]= new Array();
 choices[56][0] = "La forma de realizar el parsing es distinta, de tipo push en el caso de StAX frente al tipo pull de SAX.";
 choices[56][1] = "La API JAXP nos facilita el acceso, la generaci&oacute;n, validaci&oacute;n y transformaci&oacute;n de ficheros XML.";
 choices[56][2] = "La API StAX es bidireccional, permitiendo tanto la lectura como la escritura de documentos XML.";
 choices[56][3] = "La API StAX expone m&eacute;todos para el procesamiento de documentos XML de forma iterativa y basada en eventos.";
 answers[56] = choices[56][0];
 units[56] = "116";
 comments[56] = "Id Pregunta: 11231. ";


//  Id pregunta: 11235 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  Respecto al Framework de Java Struts:";
 choices[57]= new Array();
 choices[57][0] = "El controlador consiste en un servlet llamado ActionServlet.";
 choices[57][1] = "No dispone  de una librer&iacute;a de etiquetas espec&iacute;fica (custom tag library).";
 choices[57][2] = " La &quot;uni&oacute;n&quot; de Struts 1 y JSF ha sido finalmente adoptada como la versi&oacute;n 2.0 de Apache Struts.";
 choices[57][3] = "No soporta internacionalizaci&oacute;n.";
 answers[57] = choices[57][0];
 units[57] = "116";
 comments[57] = "Id Pregunta: 11235. ";


//  Id pregunta: 11238 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  Entre los principios del texto refundido de la ley de contratos del sector p&uacute;blico no se encuentra:";
 choices[58]= new Array();
 choices[58][0] = "Libertad de acceso a las licitaciones.";
 choices[58][1] = "Publicidad y transparencia de los procedimientos.";
 choices[58][2] = "No discriminaci&oacute;n e igualdad de trato entre los candidatos.";
 choices[58][3] = "Mejorar la competencia.";
 answers[58] = choices[58][3];
 units[58] = "41";
 comments[58] = "Id Pregunta: 11238. ";


//  Id pregunta: 11263 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  Sobre los servicios cualificados de entrega electr&oacute;nica certificada es FALSO que deban cumplir el siguiente requisito t&eacute;cnico:";
 choices[59]= new Array();
 choices[59][0] = "Ser prestados por uno o m&aacute;s prestadores cualificados de servicios de confianza.";
 choices[59][1] = "Asegurar con un alto nivel de fiabilidad la identificaci&oacute;n del remitente.";
 choices[59][2] = "Estar protegidos el env&iacute;o y recepci&oacute;n de datos por una firma electr&oacute;nica cualificada o un sello electr&oacute;nico cualificado de tal forma que se impida la posibilidad de que se modifiquen los datos sin que se detecte.";
 choices[59][3] = "Indicar claramente al emisor y al destinatario de los datos cualquier modificaci&oacute;n de los datos necesarios a efectos del env&iacute;o o recepci&oacute;n de los datos.";
 answers[59] = choices[59][2];
 units[59] = "73";
 comments[59] = "Id Pregunta: 11263. ";


//  Id pregunta: 11269 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes NO es un principio de Cobit v5?";
 choices[60]= new Array();
 choices[60][0] = "Satisfacer las Necesidades de las Partes Interesadas.";
 choices[60][1] = "Cubrir el &aacute;rea TI de extremo a extremo.";
 choices[60][2] = "Aplicar un Marco de Referencia &Uacute;nico Integrado.";
 choices[60][3] = "Separar el Gobierno de la Gesti&oacute;n.";
 answers[60] = choices[60][1];
 units[60] = "98";
 comments[60] = "Id Pregunta: 11269. ";


//  Id pregunta: 11274 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  Indique la respuesta INCORRECTA sobre OpenStack";
 choices[61]= new Array();
 choices[61][0] = "Sus servicios se encuentran disponibles por medio de una API compatible con Amazon EC2/S3.";
 choices[61][1] = "Swift es la Infraestructura de almacenamiento.";
 choices[61][2] = "Cantora es la Infraestructura de c&oacute;mputo.";
 choices[61][3] = "Glance son los  servicios de imagen.";
 answers[61] = choices[61][2];
 units[61] = "47";
 comments[61] = "Id Pregunta: 11274. ";


//  Id pregunta: 11302 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  Se&ntilde;ale la norma que no est&aacute; asociada correctamente a su contenido";
 choices[62]= new Array();
 choices[62][0] = "ISO 15408 - Common criteria";
 choices[62][1] = "RFC 2527 - DPC (Declaraci&oacute;n de Pr&aacute;cticas de Certificaci&oacute;n)";
 choices[62][2] = "CWA 14890 - Protocolo de autenticaci&oacute;n mutua, usado para el certificado de componente del DNI";
 choices[62][3] = "RFC 5246 - IPSEC";
 answers[62] = choices[62][3];
 units[62] = "33,74,111";
 comments[62] = "Id Pregunta: 11302. El RFC 5246 describe TLS. IPSEC es descrito en RFC 4305";


//  Id pregunta: 11313 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  En la fase de dise&ntilde;o de un servicio, ITIL utiliza la matriz o modelo RACI. Se&ntilde;ale la afirmaci&oacute;n correcta en cuanto a ella.";
 choices[63]= new Array();
 choices[63][0] = "Una persona no puede ser R o A en m&uacute;ltiples tareas";
 choices[63][1] = "En cada tarea debe haber un unico R y A";
 choices[63][2] = "Existen variaciones menores de este modelo como RASCI, donde S es Support";
 choices[63][3] = "El rol Responsible (Encargado), es el responsable de la correcta ejecuci&oacute;n de la tarea, pero no de la ejecuci&oacute;n de la tarea en cuesti&oacute;n";
 answers[63] = choices[63][1];
 units[63] = "98";
 comments[63] = "Id Pregunta: 11313. Cuidado con esto. Responsible es el rol encargado de hacer la tarea. Accountable (traducido en espa&ntilde;ol como responsable) es el responsable de la correcta ejecuci&oacute;n de la tarea";


//  Id pregunta: 11318 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  La Ley 25/2007, establece las condiciones de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones. De entre los datos que hay que almacenar, no se encuentra:";
 choices[64]= new Array();
 choices[64][0] = "Datos para determinar fecha, hora y duraci&oacute;n de un comunici&oacute;n.";
 choices[64][1] = "Tipo de comunicaci&oacute;n.";
 choices[64][2] = "Datos de llamadas no conectadas";
 choices[64][3] = "Datos de llamadas infructuosas";
 answers[64] = choices[64][2];
 units[64] = "110";
 comments[64] = "Id Pregunta: 11318. Recogido de la redacci&oacute;n de la propia Ley. &quot;Art&iacute;culo 4. Los datos relativos a las llamadas no conectadas est&aacute;n excluidos de las obligaciones de conservaci&oacute;n contenidas en esta Ley...&quot;";


//  Id pregunta: 11333 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  Distintos gobiernos regionales est&aacute;n desarrollando sus propias distribuciones Linux. Seleccione cu&aacute;l no es una de ellas:";
 choices[65]= new Array();
 choices[65][0] = "LinEx en Extremadura,";
 choices[65][1] = "Augustux en Arag&oacute;n";
 choices[65][2] = "AndaLinex en Andaluc&iacute;a";
 choices[65][3] = "LinuxGlobal en Cantabria";
 answers[65] = choices[65][2];
 units[65] = "61";
 comments[65] = "Id Pregunta: 11333. Es Guadalinex";


//  Id pregunta: 11346 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  De los siguientes, indique la opci&oacute;n que contiene los modelos correctos contemplados por LDAP";
 choices[66]= new Array();
 choices[66][0] = "informaci&oacute;n; direccionamiento; observable; estructural";
 choices[66][1] = "informaci&oacute;n; direccionamiento; objetivable; estructural";
 choices[66][2] = "informaci&oacute;n; direccionamiento; seguridad; estructural";
 choices[66][3] = "informaci&oacute;n; direccionamiento; seguridad; funcional";
 answers[66] = choices[66][3];
 units[66] = "73";
 comments[66] = "Id Pregunta: 11346. ";


//  Id pregunta: 11360 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta respecto a la Gesti&oacute;n de Suministradores?";
 choices[67]= new Array();
 choices[67][0] = "Controlar todos los proveedores externos de TI";
 choices[67][1] = "Seleccionar, contratar, controlar a proveedores externos que entregan productos y servicios TI";
 choices[67][2] = "Alinear todos los contratos U.C. con los SLAs";
 choices[67][3] = "Pagarle a los suministradores de acuerdo a los servicios recibidos";
 answers[67] = choices[67][1];
 units[67] = "98";
 comments[67] = "Id Pregunta: 11360. ";


//  Id pregunta: 11364 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes enunciados no es un prop&oacute;sito de Operaci&oacute;n del Servicio?";
 choices[68]= new Array();
 choices[68][0] = "Llevar a cabo pruebas para asegurar que los servicios est&aacute;n dise&ntilde;ados para satisfacer las necesidades del negocio";
 choices[68][1] = "Entregar y gestionar servicios de TI";
 choices[68][2] = "Gestionar la tecnolog&iacute;a utilizada para entregar servicios";
 choices[68][3] = "Monitorizar el desempe&ntilde;o de la tecnolog&iacute;a y los procesos";
 answers[68] = choices[68][0];
 units[68] = "98";
 comments[68] = "Id Pregunta: 11364. ";


//  Id pregunta: 11388 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes podr&iacute;an ser considerados parte interesada (stakeholder) en una gesti&oacute;n de proyecto de servicios?";
 choices[69]= new Array();
 choices[69][0] = "Solo usuarios y clientes";
 choices[69][1] = "Solo suministradores y funciones";
 choices[69][2] = "Solo clientes y funciones";
 choices[69][3] = "Todos los anteriores";
 answers[69] = choices[69][3];
 units[69] = "98";
 comments[69] = "Id Pregunta: 11388. ";


//  Id pregunta: 11396 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; fase del ciclo de vida del servicio decide qu&eacute; servicios deber&iacute;an ser ofrecidos y a qui&eacute;nes se les va a ofrecer?";
 choices[70]= new Array();
 choices[70][0] = "Mejora continua del servicio";
 choices[70][1] = "Operaci&oacute;n del servicio";
 choices[70][2] = "Dise&ntilde;o del servicio";
 choices[70][3] = "Estrategia del servicio";
 answers[70] = choices[70][3];
 units[70] = "98";
 comments[70] = "Id Pregunta: 11396. ";


//  Id pregunta: 11423 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Seg&uacute;n la Ley 9/2014, &iquest;qui&eacute;n podr&aacute; fijar las condiciones para la conservaci&oacute;n de los n&uacute;meros de los abonados?:";
 choices[71]= new Array();
 choices[71][0] = "MINETUR.";
 choices[71][1] = "El Gobierno.";
 choices[71][2] = "La CNMC.";
 choices[71][3] = "La Comisi&oacute;n Europea.";
 answers[71] = choices[71][2];
 units[71] = "110";
 comments[71] = "Id Pregunta: 11423. ";


//  Id pregunta: 11425 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Seg&uacute;n la Ley 9/2014, la determinaci&oacute;n, el control y la inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica corresponden:";
 choices[72]= new Array();
 choices[72][0] = "Al MINETUR.";
 choices[72][1] = "A la CNMC.";
 choices[72][2] = "Al Gobierno.";
 choices[72][3] = "Ninguno de los anteriores.";
 answers[72] = choices[72][2];
 units[72] = "110";
 comments[72] = "Id Pregunta: 11425. ";


//  Id pregunta: 11438 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes cuestiones sobre la Ley 9/2014 es incorrecta respecto a los derechos de los usuarios?";
 choices[73]= new Array();
 choices[73][0] = "Derecho a acceder a los servicios de emergencias de forma gratuita.";
 choices[73][1] = "Derecho a la continuidad de servicio.";
 choices[73][2] = "Derecho a la facturaci&oacute;n detallada, clara y sin errores.";
 choices[73][3] = "Derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros en el plazo de dos d&iacute;as laborables.";
 answers[73] = choices[73][3];
 units[73] = "110";
 comments[73] = "Id Pregunta: 11438. ";


//  Id pregunta: 11456 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  Sobre los plazos relacionados con las decisiones sobre los otorgamientos de derechos de uso en la Ley 9/2014, General de Telecomunicaciones, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[74]= new Array();
 choices[74][0] = "El plazo m&aacute;ximo entre la recepci&oacute;n de la solicitud y la adopci&oacute;n y publicaci&oacute;n de decisiones es de 6 semanas.";
 choices[74][1] = "El plazo m&aacute;ximo entre la petici&oacute;n y la decisi&oacute;n sin hacerla p&uacute;blica  es de 3 semanas.";
 choices[74][2] = "El plazo m&aacute;ximo entre la recepci&oacute;n de solicitud y la adopci&oacute;n, comunicaci&oacute;n y publicaci&oacute;n de decisiones es de 3 semanas, salvo cuando se apliquen procedimientos de selecci&oacute;n comparativa o competitiva.";
 choices[74][3] = "Ninguna de las anteriores es correcta.";
 answers[74] = choices[74][2];
 units[74] = "110";
 comments[74] = "Id Pregunta: 11456. ";


//  Id pregunta: 11470 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  La ley 9/2014 establece el derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros, en un plazo de:";
 choices[75]= new Array();
 choices[75][0] = "Un d&iacute;a natural.";
 choices[75][1] = "Un d&iacute;a laborable.";
 choices[75][2] = "Una semana.";
 choices[75][3] = "Depende del operador.";
 answers[75] = choices[75][1];
 units[75] = "110";
 comments[75] = "Id Pregunta: 11470. ";


//  Id pregunta: 11471 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Seg&uacute;n la Ley 9/2014, &iquest;qui&eacute;n establece las condiciones para la habilitaci&oacute;n del ejercicio de los derechos de uso del dominio p&uacute;blico radioel&eacute;ctrico?:";
 choices[76]= new Array();
 choices[76][0] = "MINETUR.";
 choices[76][1] = "CNMC.";
 choices[76][2] = "El Gobierno.";
 choices[76][3] = "La SETSI.";
 answers[76] = choices[76][2];
 units[76] = "110";
 comments[76] = "Id Pregunta: 11471. ";


//  Id pregunta: 11489 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  La transmisi&oacute;n de los derechos morales de autor a favor de los herederos puede realizarse";
 choices[77]= new Array();
 choices[77][0] = "Mediante un contrato de cesi&oacute;n, donaci&oacute;n o compraventa.";
 choices[77][1] = "Incluyendo la transmisi&oacute;n de los derechos en la herencia.";
 choices[77][2] = "De cualquiera de las formas mencionadas en los apartados anteriores.";
 choices[77][3] = "Todas las anteriores son falsas.";
 answers[77] = choices[77][3];
 units[77] = "36";
 comments[77] = "Id Pregunta: 11489. NULL";


//  Id pregunta: 11495 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Seg&uacute;n la Ley de Contratos del Sector P&uacute;blico (L.C.S.P.), la adquisici&oacute;n de una licencia mediante la que se cede el derecho de uso de un programa de ordenador tiene la categor&iacute;a de:";
 choices[78]= new Array();
 choices[78][0] = "Contrato de Suministros.";
 choices[78][1] = "Contrato de Arrendamiento.";
 choices[78][2] = "Contrato de Servicios.";
 choices[78][3] = "Contrato de &quot;leasing&quot; o de &quot;renting&quot;";
 answers[78] = choices[78][0];
 units[78] = "41";
 comments[78] = "Id Pregunta: 11495. NULL";


//  Id pregunta: 11501 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Seg&uacute;n el Esquema Nacional de Seguridad, la tarea de elaboraci&oacute;n de un Perfil General del Estado de la Seguridad en las Administraciones p&uacute;blicas es competencia de:";
 choices[79]= new Array();
 choices[79][0] = "Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[79][1] = "Centro Criptol&oacute;gico Nacional";
 choices[79][2] = "INCIBE";
 choices[79][3] = "Consejo de Ministros";
 answers[79] = choices[79][0];
 units[79] = "43";
 comments[79] = "Id Pregunta: 11501. RD 951/2015 que modifica el art&iacute;culo 35 del ENS.";


//  Id pregunta: 11507 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes afirmaciones hace referencia al tipo de Cuadro de Mandos Balance Scorecard?";
 choices[80]= new Array();
 choices[80][0] = "Muestra informaci&oacute;n a nivel estrat&eacute;gico, orientada a la consecuci&oacute;n de objetivos.";
 choices[80][1] = "&Uacute;nicamente utilizan indicadores clave de rendimiento (KPI)";
 choices[80][2] = "No utilizan indicadores orientados a objetivos (KGI).";
 choices[80][3] = "Todas las anteriores.";
 answers[80] = choices[80][0];
 units[80] = "65";
 comments[80] = "Id Pregunta: 11507. NULL";


//  Id pregunta: 11521 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  El &aacute;rbol formado por las entradas del directorio en LDAP, se llama:";
 choices[81]= new Array();
 choices[81][0] = "DIT";
 choices[81][1] = "Ltree";
 choices[81][2] = "LDS";
 choices[81][3] = "Ninguna de las anteriores.";
 answers[81] = choices[81][0];
 units[81] = "73";
 comments[81] = "Id Pregunta: 11521. NULL";


//  Id pregunta: 11535 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  La licencia de la GNU utilizada espec&iacute;ficamente para la documentaci&oacute;n t&eacute;cnica del software es:";
 choices[82]= new Array();
 choices[82][0] = "GFDL";
 choices[82][1] = "GPL";
 choices[82][2] = "Affero GPL";
 choices[82][3] = "EUPL";
 answers[82] = choices[82][0];
 units[82] = "62";
 comments[82] = "Id Pregunta: 11535. NULL";


//  Id pregunta: 11538 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de las siguientes m&eacute;tricas se puede aplicar durante le proceso de dise&ntilde;o del software?";
 choices[83]= new Array();
 choices[83][0] = "M&eacute;trica de complejidad de McCabe.";
 choices[83][1] = "M&eacute;tricas MDOO";
 choices[83][2] = "M&eacute;tricas de cobertura de instrucciones y ramas.";
 choices[83][3] = "Todas las anteriores.";
 answers[83] = choices[83][1];
 units[83] = "84";
 comments[83] = "Id Pregunta: 11538. McCabe, m&eacute;trica complejidad en fase de programaci&oacute;n. M&eacute;trica de cobertura en fase de pruebas.";


//  Id pregunta: 11543 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Se&ntilde;ale la FALSA respecto al Diagrama de Extrapolaci&oacute;n:";
 choices[84]= new Array();
 choices[84][0] = "Se basa en la hip&oacute;tesis de que si existe una desviaci&oacute;n, su tendencia es a permanecer o empeorar a no ser que se tomen las medidas oportunas.";
 choices[84][1] = "Trata de estimar la nueva fecha de fin del proyecto extrapolando la tendencia constatada en un momento determinado del desarrollo.";
 choices[84][2] = "Se utiliza para obtener previsiones de las desviaciones en el esfuerzo de desarrollo de un proyecto y para realizar el seguimiento del proyecto.";
 choices[84][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[84] = choices[84][2];
 units[84] = "86";
 comments[84] = "Id Pregunta: 11543. NULL";


//  Id pregunta: 11545 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes no es un modelo de calidad del Software?";
 choices[85]= new Array();
 choices[85][0] = "GCAL de SISDEL";
 choices[85][1] = "FURPS";
 choices[85][2] = "ISO 9126-1";
 choices[85][3] = "Todos los anteriores son modelos de calidad del Software.";
 answers[85] = choices[85][0];
 units[85] = "88";
 comments[85] = "Id Pregunta: 11545. NULL";


//  Id pregunta: 11546 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Seg&uacute;n M&eacute;trica v3, &iquest;Cu&aacute;l de las siguientes actividades de aseguramiento de la calidad NO se lleva a cabo durante el Mantenimiento del Sistema de Informaci&oacute;n?";
 choices[86]= new Array();
 choices[86][0] = "Aseguramiento de la calidad NO afecta al proceso MSI";
 choices[86][1] = "La revisi&oacute;n del plan de pruebas de regresi&oacute;n.";
 choices[86][2] = "La revisi&oacute;n de la realizaci&oacute;n de las pruebas de regresi&oacute;n.";
 choices[86][3] = "La revisi&oacute;n del Plan de Mantenimiento del Sistema.";
 answers[86] = choices[86][3];
 units[86] = "86";
 comments[86] = "Id Pregunta: 11546. NULL";


//  Id pregunta: 11549 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seg&uacute;n el modelo EFQM (versi&oacute;n 2013) &iquest;Cu&aacute;l de los siguientes no lo considera como un concepto fundamental de la excelencia?";
 choices[87]= new Array();
 choices[87][0] = "Desarrolar la capacidad de la organizaci&oacute;n.";
 choices[87][1] = "Gestionar con agilidad.";
 choices[87][2] = "Alcanzar el &eacute;xito mediante el talento de las personas.";
 choices[87][3] = "Todos los anteriores son conceptos fundamentales para la excelencia.";
 answers[87] = choices[87][3];
 units[87] = "87";
 comments[87] = "Id Pregunta: 11549. NULL";


//  Id pregunta: 11550 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes factores NO afecta al mantenimiento del software?";
 choices[88]= new Array();
 choices[88][0] = "Interdependencia entre los m&oacute;dulos.";
 choices[88][1] = "Especificaciones funcionales de los usuarios.";
 choices[88][2] = "La dependencia del programa de su entorno de desarrollo.";
 choices[88][3] = "Todos los factores anteriores afectan al mantenimieno del software.";
 answers[88] = choices[88][3];
 units[88] = "91";
 comments[88] = "Id Pregunta: 11550. NULL";


//  Id pregunta: 11565 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seg&uacute;n el plan de frecuencias de las redes HFC, la banda de guarda se encuentra en el rango de:";
 choices[89]= new Array();
 choices[89][0] = "5 a 55 Mhz";
 choices[89][1] = "86 a 108 Mhz";
 choices[89][2] = "606 a 862 Mhz";
 choices[89][3] = "55 a 86 Mhz";
 answers[89] = choices[89][3];
 units[89] = "105";
 comments[89] = "Id Pregunta: 11565. NULL";


//  Id pregunta: 11581 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes funciones de seguridad no ofrece SSL?";
 choices[90]= new Array();
 choices[90][0] = "No repudio";
 choices[90][1] = "Confidencialidad";
 choices[90][2] = "Integridad.";
 choices[90][3] = "Ofrece todas las anteriores";
 answers[90] = choices[90][0];
 units[90] = "111";
 comments[90] = "Id Pregunta: 11581. NULL";


//  Id pregunta: 11615 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Para seleccionar todos los campos de una fila con el campo Nombre con valor 'Juan'en una tabla llamada Funcionarios se utiliza la sentencia:";
 choices[91]= new Array();
 choices[91][0] = "SELECT * FROM Funcionarios WHERE Nombre='Juan'";
 choices[91][1] = "SELECT * FROM Funcionarios WHERE Nombre:'Juan'";
 choices[91][2] = "SELECT FROM Funcionarios WHERE Nombre='Juan'";
 choices[91][3] = "SELECT FROM Funcionarios WHERE Nombre:'Juan'";
 answers[91] = choices[91][0];
 units[91] = "58";
 comments[91] = "Id Pregunta: 11615. ";


//  Id pregunta: 11646 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  El stemming es:";
 choices[92]= new Array();
 choices[92][0] = "Una t&eacute;cnica de indexaci&oacute;n sint&aacute;ctica";
 choices[92][1] = "Una t&eacute;cnica de indexaci&oacute;n morfol&oacute;gica";
 choices[92][2] = "Una t&eacute;cnica de indexaci&oacute;n sem&aacute;ntica";
 choices[92][3] = "Una t&eacute;cnica de eliminaci&oacute;n de palabras vac&iacute;as";
 answers[92] = choices[92][1];
 units[92] = "96";
 comments[92] = "Id Pregunta: 11646. ";


//  Id pregunta: 11668 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  POCO son las siglas de:";
 choices[93]= new Array();
 choices[93][0] = "Plain Old CLR Object";
 choices[93][1] = "Plain Old Class Object";
 choices[93][2] = "Plain Old COM Object";
 choices[93][3] = "Plain Old Connection Object";
 answers[93] = choices[93][0];
 units[93] = "115";
 comments[93] = "Id Pregunta: 11668. ";


//  Id pregunta: 11704 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Las direcciones globales en ipv6 empiezan de la manera siguiente:";
 choices[94]= new Array();
 choices[94][0] = "2000::/3";
 choices[94][1] = "FF00::/10";
 choices[94][2] = "FE00::/12";
 choices[94][3] = "::1/128";
 answers[94] = choices[94][0];
 units[94] = "100";
 comments[94] = "Id Pregunta: 11704. NULL";


//  Id pregunta: 11711 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera acerca de las VLANs?";
 choices[95]= new Array();
 choices[95][0] = "Se deben tener al menos dos VLANs definidas en cada red conmutada ";
 choices[95][1] = "Se deben tener al menos tres VLANs definidas en cada red conmutada ";
 choices[95][2] = "No deber&iacute;an tenerse m&aacute;s de 3 switches en cada red conmutada";
 choices[95][3] = "Actuan a nivel 2 del modelo OSI";
 answers[95] = choices[95][3];
 units[95] = "102";
 comments[95] = "Id Pregunta: 11711. NULL";


//  Id pregunta: 11717 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; factor determina en TCP el tama&ntilde;o de ventana? ";
 choices[96]= new Array();
 choices[96][0] = "la cantidad de datos que el destino puede procesar a la vez ";
 choices[96][1] = " el n&uacute;mero de servicios incluidos en el segmento TCP ";
 choices[96][2] = " la cantidad de datos que la fuente es capaz de enviar de una sola vez ";
 choices[96][3] = "la cantidad de datos a transmitir";
 answers[96] = choices[96][0];
 units[96] = "102";
 comments[96] = "Id Pregunta: 11717. NULL";


//  Id pregunta: 11728 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es uno de los beneficios de la utilizaci&oacute;n de las VPN para el acceso remoto?";
 choices[97]= new Array();
 choices[97][0] = "Menor sobrecarga de protocolo";
 choices[97][1] = "Potencial reducci&oacute;n de los costos de conectividad";
 choices[97][2] = "Aumento de la calidad de servicio";
 choices[97][3] = "Facilidad de soluci&oacute;n de problemas";
 answers[97] = choices[97][1];
 units[97] = "111";
 comments[97] = "Id Pregunta: 11728. NULL";


//  Id pregunta: 11759 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes no es un tipo de tramitaci&oacute;n de contrataci&oacute;n?";
 choices[98]= new Array();
 choices[98][0] = "previos";
 choices[98][1] = "emergencia";
 choices[98][2] = "urgencia";
 choices[98][3] = "ordinaria";
 answers[98] = choices[98][0];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11759. ";


//  Id pregunta: 11771 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Las especificaciones t&eacute;cnicas de un pliego de prescripciones";
 choices[99]= new Array();
 choices[99][0] = "deben permitir descartar ciertas empresas o productos con los que no se han tenido buenas experiencias";
 choices[99][1] = "todas son falsas&nbsp;";
 choices[99][2] = "deben hacer referencia a la fabricaci&oacute;n o procedencia determinada del producto o servicio";
 choices[99][3] = "deben hacer referencia a la marca de mayor calidad del producto o servicio";
 answers[99] = choices[99][1];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11771. ";


