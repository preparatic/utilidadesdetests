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

//  Id pregunta: 9606 AÃ±o de creación de pregunta: 2014-01-01
 questions[0]= "1)   En el Modelo de Referencia ANSI  de las Facilidades de usuario (MRFU), las FU se encargan de:";
 choices[0]= new Array();
 choices[0][0] = " Aislar al usuario de detalles concretos sobre las herramientas de gesti&oacute;n de datos (HGD)";
 choices[0][1] = " Transformar una demanda de usuario en una petici&oacute;n funcional para las HGD";
 choices[0][2] = "Trasformar la salida de las HGD en un formato de presentaci&oacute;n para el usuario";
 choices[0][3] = "Todas las anteriores";
 answers[0] = choices[0][3];
 units[0] = "57";
 comments[0] = "Id Pregunta: 9606. ";


//  Id pregunta: 9613 AÃ±o de creación de pregunta: 2014-01-01
 questions[1]= "2)  &iquest;Qu&eacute; alternativas existen en otros sistemas de base de datos a las vistas materializadas de Oracle?";
 choices[1]= new Array();
 choices[1][0] = "Vistas indexadas";
 choices[1][1] = "Vistas normalizadas";
 choices[1][2] = "Vistas f&iacute;sicas";
 choices[1][3] = "No existen alternativas";
 answers[1] = choices[1][0];
 units[1] = "58";
 comments[1] = "Id Pregunta: 9613. En SQL Server se llaman vistas indexadas";


//  Id pregunta: 9618 AÃ±o de creación de pregunta: 2014-01-01
 questions[2]= "3)  &iquest;Cuantos atributos tiene un archivo en el sistema de ficheros NTFS?";
 choices[2]= new Array();
 choices[2][0] = "9";
 choices[2][1] = "11";
 choices[2][2] = "13";
 choices[2][3] = "15";
 answers[2] = choices[2][2];
 units[2] = "56";
 comments[2] = "Id Pregunta: 9618. ";


//  Id pregunta: 9621 AÃ±o de creación de pregunta: 2014-01-01
 questions[3]= "4)  &iquest;C&uacute;al de los siguientes es un medio para la sincronizaci&oacute;n entre procesos Windows?";
 choices[3]= new Array();
 choices[3][0] = "Signals";
 choices[3][1] = "Mutex";
 choices[3][2] = "Sockets";
 choices[3][3] = "RPCs";
 answers[3] = choices[3][1];
 units[3] = "56";
 comments[3] = "Id Pregunta: 9621. ";


//  Id pregunta: 9625 AÃ±o de creación de pregunta: 2014-01-01
 questions[4]= "5)  En lo referente a las instalaciones por defecto de las interfaces gr&aacute;ficas de los sistemas Linux-Unix:";
 choices[4]= new Array();
 choices[4][0] = "Gnome utiliza &ldquo;Telepathy&rdquo; como librer&iacute;a para las comunicaciones y &ldquo;Plasma&rdquo; para la representaci&oacute;n gr&aacute;fica de la interfaz";
 choices[4][1] = "KDE utiliza la librer&iacute;a &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido y &ldquo;GTK+&rdquo; para la representaci&oacute;n de la interfaz de usuario. ";
 choices[4][2] = "KDE utiliza la librer&iacute;a &ldquo;Phonon&rdquo; para la creaci&oacute;n de contenido multimedia y &ldquo;Goya&rdquo; para la representaci&oacute;n gr&aacute;fica de partes de la interfaz. ";
 choices[4][3] = "Gnome utiliza &ldquo;Sonnet&rdquo; como librer&iacute;a para la representaci&oacute;n de la interfaz de usuario y &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido. ";
 answers[4] = choices[4][2];
 units[4] = "54";
 comments[4] = "Id Pregunta: 9625. Examen TIC A1 2013";


//  Id pregunta: 9626 AÃ±o de creación de pregunta: 2014-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes?";
 choices[5]= new Array();
 choices[5][0] = "Kexi.";
 choices[5][1] = "Kivio.";
 choices[5][2] = "Konqueror.";
 choices[5][3] = "Kugar.";
 answers[5] = choices[5][3];
 units[5] = "62";
 comments[5] = "Id Pregunta: 9626. Examen TIC A1 2013";


//  Id pregunta: 9638 AÃ±o de creación de pregunta: 2014-01-01
 questions[6]= "7)  &iquest;Qu&eacute; se conoce como CPU Throttling en IIS 8.0?";
 choices[6]= new Array();
 choices[6][0] = "A reducir autom&aacute;ticamente la frecuencia de trabajo de la CPU para evitar el calentamiento de la m&aacute;quina";
 choices[6][1] = "A la asignaci&oacute;n de CPU a cada proceso en un entorno multiprocesador  ";
 choices[6][2] = "A los fallos de CPU ante una sobrecarga de trabajo";
 choices[6][3] = "A la limitaci&oacute;n autom&aacute;tica de los recursos de CPU entre los tenants del sistema";
 answers[6] = choices[6][3];
 units[6] = "56";
 comments[6] = "Id Pregunta: 9638. La respuesta A es el concepto original de CPU throttling, la D es lo que se entiende en un entorno de hosting";


//  Id pregunta: 9643 AÃ±o de creación de pregunta: 2014-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes proyectos est&aacute; relacionado con el intercambio de contenidos docentes y la coordinaci&oacute;n entre promotores de formaci&oacute;n en la Administraci&oacute;n General del Estado?";
 choices[7]= new Array();
 choices[7][0] = "Comp@rte";
 choices[7][1] = "Racionaliz@";
 choices[7][2] = "Compartir";
 choices[7][3] = "Educ@";
 answers[7] = choices[7][2];
 units[7] = "66";
 comments[7] = "Id Pregunta: 9643. ";


//  Id pregunta: 9645 AÃ±o de creación de pregunta: 2014-01-01
 questions[8]= "9)  Entre los &oacute;rganos consultivos, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[8]= new Array();
 choices[8][0] = "Mesas de contrataci&oacute;n";
 choices[8][1] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[8][2] = "&Oacute;rganos consultivos en las CCAA";
 choices[8][3] = "Todos los anteriores";
 answers[8] = choices[8][0];
 units[8] = "41";
 comments[8] = "Id Pregunta: 9645. Art. 324, Art. 325 RD Legislativo 3/2011";


//  Id pregunta: 9647 AÃ±o de creación de pregunta: 2014-01-01
 questions[9]= "10)  &iquest;Qui&eacute;n resuelve los recursos especiales previstos en el RD Legislativo 3/2011 de Contrataci&oacute;n en el Sector P&uacute;blico?";
 choices[9]= new Array();
 choices[9][0] = "Tribunal Central de Recursos Especiales";
 choices[9][1] = "Tribunal Administrativo Central de Recursos Contractuales";
 choices[9][2] = "Tribunal Administrativo Tributario";
 choices[9][3] = "Tribunal Econ&oacute;mico &ndash; Administrativo Central";
 answers[9] = choices[9][1];
 units[9] = "41";
 comments[9] = "Id Pregunta: 9647. Adscrito al MINHAP";


//  Id pregunta: 9661 AÃ±o de creación de pregunta: 2014-01-01
 questions[10]= "11)  La Ley 11/2007 tiene en cuenta &quot;Otros sistemas de firma&quot;, que podr&aacute;n ser creados mediante:";
 choices[10]= new Array();
 choices[10][0] = "Real Decreto del Gobierno, previo informe de la CSAE";
 choices[10][1] = "Informe de la CSAE";
 choices[10][2] = "Orden Ministerial o Resoluci&oacute;n, previo informe de la CSAE.";
 choices[10][3] = "No necesita reglamento para su creaci&oacute;n.";
 answers[10] = choices[10][2];
 units[10] = "43";
 comments[10] = "Id Pregunta: 9661. NULL";


//  Id pregunta: 9674 AÃ±o de creación de pregunta: 2014-01-01
 questions[11]= "12)  La arquitectura del Grid se compone de las siguientes capas:";
 choices[11]= new Array();
 choices[11][0] = "Capa de red, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[11][1] = "Capa de red, de &ldquo;middleware&rdquo;, de recursos y de aplicaci&oacute;n.";
 choices[11][2] = "Capa de recursos, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[11][3] = "Ninguna de las anteriores.";
 answers[11] = choices[11][1];
 units[11] = "45";
 comments[11] = "Id Pregunta: 9674. ";


//  Id pregunta: 9675 AÃ±o de creación de pregunta: 2014-01-01
 questions[12]= "13)  El serviceware permite:";
 choices[12]= new Array();
 choices[12][0] = "Gestionar el uso del Cl&uacute;ster que hace cada usuario.";
 choices[12][1] = "Gestionar el uso del Grid que hace cada usuario.";
 choices[12][2] = "Controlar la red de comunicaciones del Cl&uacute;ster.";
 choices[12][3] = "Controlar la red de comunicaciones del Grid.";
 answers[12] = choices[12][1];
 units[12] = "45";
 comments[12] = "Id Pregunta: 9675. ";


//  Id pregunta: 9676 AÃ±o de creación de pregunta: 2014-01-01
 questions[13]= "14)  Son servicios de una IDE:";
 choices[13]= new Array();
 choices[13][0] = "Servicios de mapas en Web (WMS), servicios de elementos en Web (WFS), servicios de coberturas en Web (WCS), servicios de conversi&oacute;n de coordenadas, servicios de cat&aacute;logos de datos.";
 choices[13][1] = "Servicios de nomenclator (gazetteer), descripci&oacute;n de estilo de capas (SLD).";
 choices[13][2] = "Servicios de metadatos, establecimiento de est&aacute;ndares, identificaci&oacute;n de marcos, establecimiento de acuerdos entre organismos para la producci&oacute;n de informaci&oacute;n espacial de inter&eacute;s conjunto.";
 choices[13][3] = "a, b y c son correctas.";
 answers[13] = choices[13][3];
 units[13] = "67";
 comments[13] = "Id Pregunta: 9676. NULL";


//  Id pregunta: 9678 AÃ±o de creación de pregunta: 2014-01-01
 questions[14]= "15)  Se&ntilde;ale la respuesta correcta:";
 choices[14]= new Array();
 choices[14][0] = "La altitud es la distancia vertical desde un punto de referencia de la superficie terrestre.";
 choices[14][1] = "La altura es la distancia vertical a un origen determinado, considerado como nivel 0.";
 choices[14][2] = "La longitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 choices[14][3] = "La latitud es la distancia angular entre el ecuador y un punto determinado del planeta. Se mide en grados, entre 0 y 90.";
 answers[14] = choices[14][3];
 units[14] = "67";
 comments[14] = "Id Pregunta: 9678. NULL";


//  Id pregunta: 9681 AÃ±o de creación de pregunta: 2014-01-01
 questions[15]= "16)  KML:";
 choices[15]= new Array();
 choices[15][0] = "Es un lenguaje de marcado basado en XML para representar datos geogr&aacute;ficos en tres dimensiones.";
 choices[15][1] = "Es un conjunto de est&aacute;ndares para representar informaci&oacute;n geogr&aacute;fica mediante el uso de capas y est&aacute; construido dentro de la familia de formatos XML.";
 choices[15][2] = "Se crea en contraposici&oacute;n a la gram&aacute;tica de GML.";
 choices[15][3] = "Fue desarrollado para ser manejado con Keyoverlay LT, precursor de Google Earth.";
 answers[15] = choices[15][0];
 units[15] = "67";
 comments[15] = "Id Pregunta: 9681. NULL";


//  Id pregunta: 9687 AÃ±o de creación de pregunta: 2014-01-01
 questions[16]= "17)  En Georeferenciaci&oacute;n, las funciones que deben ser desempe&ntilde;adas por los metadatos son:";
 choices[16]= new Array();
 choices[16][0] = "Descubrimiento, exploraci&oacute;n y acceso.";
 choices[16][1] = "Localizaci&oacute;n inicial, exploraci&oacute;n y carga de los datos.";
 choices[16][2] = "Localizaci&oacute;n inicial, exploraci&oacute;n, carga de los datos e interpretaci&oacute;n.";
 choices[16][3] = "Descubrimiento, exploraci&oacute;n y explotaci&oacute;n.";
 answers[16] = choices[16][3];
 units[16] = "67";
 comments[16] = "Id Pregunta: 9687. NULL";


//  Id pregunta: 9716 AÃ±o de creación de pregunta: 2014-01-01
 questions[17]= "18)  Dentro del Centro de Transferencia Tecnol&oacute;gica, el Servicio de Oficina Virtual de Registro que permite, entre otros, la remisi&oacute;n de los asientos registrales entre Administraciones P&uacute;blicas, se denomina";
 choices[17]= new Array();
 choices[17][0] = "SIR.";
 choices[17][1] = "ORVE.";
 choices[17][2] = "SICRES 3.0.";
 choices[17][3] = "SVDR.";
 answers[17] = choices[17][1];
 units[17] = "44";
 comments[17] = "Id Pregunta: 9716. Examen TIC-A1 2013";


//  Id pregunta: 9753 AÃ±o de creación de pregunta: 2014-01-01
 questions[18]= "19)  &iquest;Qu&eacute; es el &quot;Data staging area&quot; en el contexto de los Data Warehouses?";
 choices[18]= new Array();
 choices[18][0] = "Es un almac&eacute;n previo de datos y sus procesos asociados, en el que se extraen los datos de las fuentes, se transforman y se adaptan antes de ser cargados en el almac&eacute;n de datos.";
 choices[18][1] = "Durante la fase de dise&ntilde;o de un almac&eacute;n de datos, es la base de datos no permanente usada para ensayar, demostrar y estudiar el rendimiento de los dise&ntilde;os propuestos.";
 choices[18][2] = "Es el &aacute;rea del almac&eacute;n (conceptual o f&iacute;sicamente separada en otra base de datos) donde se cachean las consultas preparadas, cuando &eacute;stas no pueden ejecutarse en tiempo real.";
 choices[18][3] = "Es una copia id&eacute;ntica de las bases de datos originales, cuando en ellas existe mucha carga y no es posible bloquearlas para asegurar la integridad referencial al copiar los datos.";
 answers[18] = choices[18][0];
 units[18] = "68";
 comments[18] = "Id Pregunta: 9753. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9758 AÃ±o de creación de pregunta: 2014-01-01
 questions[19]= "20)  La garant&iacute;a global, seg&uacute;n el RD Legislativo 3/2011:";
 choices[19]= new Array();
 choices[19][0] = "No podr&aacute; superar el 10% del importe de adjudicaci&oacute;n del contrato.";
 choices[19][1] = "Es obligatoria.";
 choices[19][2] = "Se deposita s&oacute;lo una vez y sirve para varias contrataciones.";
 choices[19][3] = "No existe.";
 answers[19] = choices[19][2];
 units[19] = "41";
 comments[19] = "Id Pregunta: 9758. Art. 98 RD Legislativo 3/2011";


//  Id pregunta: 9762 AÃ±o de creación de pregunta: 2014-01-01
 questions[20]= "21)  Un contradto de regulaci&oacute;n armonizada ser&aacute; nulo si:";
 choices[20]= new Array();
 choices[20][0] = "No se publica en DOUE";
 choices[20][1] = "Si se incumplen las normas de adjudicaci&oacute;n del acuerdo marco.";
 choices[20][2] = "Si hay sistema din&aacute;mino de contrataci&oacute;n y se incumplen las normas de adjudicaci&oacute;n.";
 choices[20][3] = "Todas las anteriores.";
 answers[20] = choices[20][3];
 units[20] = "41";
 comments[20] = "Id Pregunta: 9762. Art. 37. RD Legislativo 3/2011.";


//  Id pregunta: 9766 AÃ±o de creación de pregunta: 2014-01-01
 questions[21]= "22)  &iquest;Qu&eacute; tipos de tratamiento del riesgo contempla MAGERIT v3?";
 choices[21]= new Array();
 choices[21][0] = "Eliminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[21][1] = "Eliminaci&oacute;n, Reducci&oacute;n, Compartic&oacute;n, Financiaci&oacute;n.";
 choices[21][2] = "Exterminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[21][3] = "Compartici&oacute;n, Reducci&oacute;n, Traspaso, Compartici&oacute;n.";
 answers[21] = choices[21][0];
 units[21] = "98";
 comments[21] = "Id Pregunta: 9766. NULL";


//  Id pregunta: 9771 AÃ±o de creación de pregunta: 2014-01-01
 questions[22]= "23)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, la funci&oacute;n sancionadora es competencia de:";
 choices[22]= new Array();
 choices[22][0] = "MITyC";
 choices[22][1] = "Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[22][2] = "Ministro del ministerio que ofrezca los datos si las infracciones son muy graves y un rango m&iacute;nimo de Direcci&oacute;n General para infracciones graves y leves";
 choices[22][3] = "Direcci&oacute;n General que haya publicado los datos.";
 answers[22] = choices[22][2];
 units[22] = "22";
 comments[22] = "Id Pregunta: 9771. ";


//  Id pregunta: 9781 AÃ±o de creación de pregunta: 2014-01-01
 questions[23]= "24)  Se&ntilde;ale la afirmaci&oacute;n es correcta respecto a firmar digitalmente mediante XML Signature al usar WS-Security:";
 choices[23]= new Array();
 choices[23][0] = "WS-Security no contempla el uso de XML Signature por no adaptarse bien al modelo petici&oacute;n respuesta de Web Services.";
 choices[23][1] = "WS-Security contemplaba el uso de XML Signature en la versi&oacute;n 1.0 pero se abandon&oacute; en favor de XML DynaSign.";
 choices[23][2] = "WS-Security contempla el uso de XML Signature con algunas limitaciones, como recomendar el no usar Enveloped Signature Transform.";
 choices[23][3] = "WS-Security contempla el uso de XML Signature, sin establecer limitaciones ni extensiones especiales. ";
 answers[23] = choices[23][2];
 units[23] = "111";
 comments[23] = "Id Pregunta: 9781. Examen TIC A2 2013";


//  Id pregunta: 9783 AÃ±o de creación de pregunta: 2014-01-01
 questions[24]= "25)  El lenguaje de marcado PMML (Predictive Model Markup Language) es un lenguaje relacionado con las t&eacute;cnicas relativas a:";
 choices[24]= new Array();
 choices[24][0] = "Virtualizaci&oacute;n de escritorio. ";
 choices[24][1] = "Virtualizaci&oacute;n de servidores. ";
 choices[24][2] = "Sistemas SAN. ";
 choices[24][3] = "Miner&iacute;a de datos.";
 answers[24] = choices[24][3];
 units[24] = "68";
 comments[24] = "Id Pregunta: 9783. Examen TIC A2 2013";


//  Id pregunta: 9793 AÃ±o de creación de pregunta: 2014-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de entre los siguientes es un software de gesti&oacute;n documental?";
 choices[25]= new Array();
 choices[25][0] = "Steam";
 choices[25][1] = "OpenKM";
 choices[25][2] = "Avast";
 choices[25][3] = "Lucene";
 answers[25] = choices[25][1];
 units[25] = "95";
 comments[25] = "Id Pregunta: 9793. Examen TIC A2 2013";


//  Id pregunta: 9796 AÃ±o de creación de pregunta: 2014-01-01
 questions[26]= "27)  Indique la respuesta FALSA en relaci&oacute;n a MoReq:";
 choices[26]= new Array();
 choices[26][0] = "Es una especificaci&oacute;n de requisitos para la gesti&oacute;n de registros.  ";
 choices[26][1] = "Tiene una versi&oacute;n posterior denominada MoReq2.";
 choices[26][2] = "Fue desarrollado para el programa IDA.";
 choices[26][3] = "No es gratuito.";
 answers[26] = choices[26][3];
 units[26] = "95";
 comments[26] = "Id Pregunta: 9796. Examen TIC A2 2013";


//  Id pregunta: 9799 AÃ±o de creación de pregunta: 2014-01-01
 questions[27]= "28)  En la Ley 59/2003, de firma electr&oacute;nica, se indica que la prestaci&oacute;n de servicios de certificaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Ministro de Hacienda. ";
 choices[27][1] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Consejo de Ministros. ";
 choices[27][2] = "No est&aacute; sujeta a autorizaci&oacute;n previa.";
 choices[27][3] = "Es una competencia auton&oacute;mica.";
 answers[27] = choices[27][2];
 units[27] = "30";
 comments[27] = "Id Pregunta: 9799. Examen TIC-A2 2013-Libre (Ley 59/2003, art&iacute;culo 5)";


//  Id pregunta: 9802 AÃ±o de creación de pregunta: 2014-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l es el &aacute;mbito del Registro Electr&oacute;nico Com&uacute;n?";
 choices[28]= new Array();
 choices[28][0] = "Todas las Administraciones P&uacute;blicas.";
 choices[28][1] = "La Administraci&oacute;n General del Estado y la Administraci&oacute;n Auton&oacute;mica. ";
 choices[28][2] = "La Administraci&oacute;n General del Estado y los Organismos P&uacute;blicos adscritos o dependientes de la misma. ";
 choices[28][3] = "La Secretaria de Estado de Administraciones P&uacute;blicas, como responsable de su gesti&oacute;n.";
 answers[28] = choices[28][2];
 units[28] = "44";
 comments[28] = "Id Pregunta: 9802. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9856 AÃ±o de creación de pregunta: 2014-01-01
 questions[29]= "30)  Un programa malicioso capaz de alojarse en computadoras y permitir el acceso a usuarios externos, a trav&eacute;s de una red local o de Internet, con el fin de recabar informaci&oacute;n o controlar remotamente a la m&aacute;quina anfitriona, se denomina: ";
 choices[29]= new Array();
 choices[29][0] = "Un caballo de Troya.";
 choices[29][1] = "Un virus.";
 choices[29][2] = "Un gusano.";
 choices[29][3] = "El tal&oacute;n de Aquiles.";
 answers[29] = choices[29][0];
 units[29] = "111";
 comments[29] = "Id Pregunta: 9856. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 9873 AÃ±o de creación de pregunta: 2014-01-01
 questions[30]= "31)  De acuerdo con Metrica v3, en el Diagrama de Transici&oacute;n de Estados,";
 choices[30]= new Array();
 choices[30][0] = "no puede haber ninguna transici&oacute;n dirigida al estado inicial.";
 choices[30][1] = "solo puede haber un estado final.";
 choices[30][2] = "una acci&oacute;n no se puede ejecutar dentro de un estado.";
 choices[30][3] = "un diagrama puede tener varios estados in&iacute;ciales.";
 answers[30] = choices[30][0];
 units[30] = "86";
 comments[30] = "Id Pregunta: 9873. TIC A1, Examen 2013";


//  Id pregunta: 9874 AÃ±o de creación de pregunta: 2014-01-01
 questions[31]= "32)  Un trabajador asalariado crea un programa de ordenador en el ejercicio de sus funciones laborales. De acuerdo con el RDL 1/1996 de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, la titularidad de los derechos de explotaci&oacute;n del programa corresponder&aacute;";
 choices[31]= new Array();
 choices[31][0] = "al autor del programa.";
 choices[31][1] = "al autor y al empresario, conjuntamente, salvo pacto en contrario.";
 choices[31][2] = "al autor en cuanto al programa objeto, pero no respecto al programa fuente.";
 choices[31][3] = "exclusivamente al empresario, salvo pacto en contrario.";
 answers[31] = choices[31][3];
 units[31] = "36";
 comments[31] = "Id Pregunta: 9874. TIC A1, Examen 2013";


//  Id pregunta: 9876 AÃ±o de creación de pregunta: 2014-01-01
 questions[32]= "33)  De acuerdo con lo establecido en el RD 3/2010 de 8 de enero por el que se regula el Esquema Nacional de Seguridad,";
 choices[32]= new Array();
 choices[32][0] = "todos los sistemas de informaci&oacute;n ser&aacute;n objeto de una auditor&iacute;a regular ordinaria con car&aacute;cter anual";
 choices[32][1] = "los sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica no precisan ser auditados";
 choices[32][2] = "la auditor&iacute;a de los sistemas de categor&iacute;a media puede ser sustituida por una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema";
 choices[32][3] = "no es necesario que los informes de autoevaluaci&oacute;n sean conocidos por el responsable de seguridad competente. Basta con que los conozca el responsable del sistema.";
 answers[32] = choices[32][1];
 units[32] = "43";
 comments[32] = "Id Pregunta: 9876. TIC A1, Examen 2013";


//  Id pregunta: 9880 AÃ±o de creación de pregunta: 2014-01-01
 questions[33]= "34)  Atendiendo al RD 4/2010 de 8 de enero por el que se regula el Esquema Nacional deInteroperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, la exigencia de que las Administraciones P&uacute;blicas deban usar est&aacute;ndares abiertos y, en su caso, est&aacute;ndares que sean de uso generalizado por los ciudadanos, es un principio de";
 choices[33]= new Array();
 choices[33][0] = "interoperabilidad t&eacute;cnica.";
 choices[33][1] = "interoperabilidad organizativa.";
 choices[33][2] = "gesti&oacute;n de riesgos.";
 choices[33][3] = "auditor&iacute;a de seguridad.";
 answers[33] = choices[33][0];
 units[33] = "43";
 comments[33] = "Id Pregunta: 9880. TIC A1, Examen 2013";


//  Id pregunta: 9901 AÃ±o de creación de pregunta: 2014-01-01
 questions[34]= "35)  En relaci&oacute;n a los participantes de la metodolog&iacute;a M&eacute;trica v3, aquellos cuya funci&oacute;n es asesorar en las cuestiones en las que tienen un conocimiento especializado se denominan";
 choices[34]= new Array();
 choices[34][0] = "Consultores.";
 choices[34][1] = "Expertos.";
 choices[34][2] = "Analistas.";
 choices[34][3] = "Jefes de Proyecto.";
 answers[34] = choices[34][0];
 units[34] = "86";
 comments[34] = "Id Pregunta: 9901. TIC A2, Examen 2013";


//  Id pregunta: 9915 AÃ±o de creación de pregunta: 2014-01-01
 questions[35]= "36)  Se&ntilde;ale la opci&oacute;n INCORRECTA en relaci&oacute;n con los DFD (Diagrama de Flujos de Datos) y los DE (Diagramas de Estructura), seg&uacute;n M&eacute;trica v3:";
 choices[35]= new Array();
 choices[35][0] = "El objetivo del DFD es la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 choices[35][1] = "En un DFD, los flujos de control representan movimientos de datos con valores s&iacute;ncronos entre procesos de control.";
 choices[35][2] = "Existen dos estrategias para obtener el DE a partir de un DFD, an&aacute;lisis: de transacci&oacute;n y de transformaci&oacute;n. El uso de una de las dos depender&aacute; de los procesos del DFD.";
 choices[35][3] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD existe un proceso que en funci&oacute;n del flujo de llegada, determina la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 answers[35] = choices[35][1];
 units[35] = "86";
 comments[35] = "Id Pregunta: 9915. TIC A2, Examen 2013";


//  Id pregunta: 9916 AÃ±o de creación de pregunta: 2014-01-01
 questions[36]= "37)  Se&ntilde;ale cu&aacute;l de las siguientes NO es un tipo de conexi&oacute;n v&aacute;lida entre un proceso y un almac&eacute;n de datos de un DFD (diagrama de flujo de datos), seg&uacute;n M&eacute;trica v3:";
 choices[36]= new Array();
 choices[36][0] = "Flujo de consulta.";
 choices[36][1] = "Flujo de actualizaci&oacute;n.";
 choices[36][2] = "Flujo de di&aacute;logo.";
 choices[36][3] = "Flujo de sincronizaci&oacute;n.";
 answers[36] = choices[36][3];
 units[36] = "86";
 comments[36] = "Id Pregunta: 9916. TIC A2, Examen 2013";


//  Id pregunta: 9931 AÃ±o de creación de pregunta: 2014-01-01
 questions[37]= "38)  En el modelo OSI, el nivel clave para el sistema de seguridad es:";
 choices[37]= new Array();
 choices[37][0] = "N3.";
 choices[37][1] = "N4.";
 choices[37][2] = "N6.";
 choices[37][3] = "N7.";
 answers[37] = choices[37][2];
 units[37] = "100";
 comments[37] = "Id Pregunta: 9931. NULL";


//  Id pregunta: 9949 AÃ±o de creación de pregunta: 2014-01-01
 questions[38]= "39)  Cu&aacute;l de las siguientes palabras y acr&oacute;nimos NO est&aacute; relacionado con Metodolog&iacute;as &Aacute;giles para el desarrollo de software:";
 choices[38]= new Array();
 choices[38][0] = "SCRUM ";
 choices[38][1] = "XP ";
 choices[38][2] = "DSDM ";
 choices[38][3] = "AGILD ";
 answers[38] = choices[38][3];
 units[38] = "79";
 comments[38] = "Id Pregunta: 9949. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9953 AÃ±o de creación de pregunta: 2014-01-01
 questions[39]= "40)  Dentro del perfil analista de M&eacute;trica v3 se agrupa uno de los siguientes participantes:";
 choices[39]= new Array();
 choices[39][0] = "Especialista en Comunicaciones";
 choices[39][1] = "Usuarios expertos";
 choices[39][2] = "T&eacute;cnicos de Comunicaciones. ";
 choices[39][3] = "Grupo de Aseguramiento de la Calidad";
 answers[39] = choices[39][3];
 units[39] = "86";
 comments[39] = "Id Pregunta: 9953. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9955 AÃ±o de creación de pregunta: 2014-01-01
 questions[40]= "41)  En un proyecto de desarrollo que utiliza la metodolog&iacute;a SCRUM, aquel rol que tiene la responsabilidad de eliminar los obst&aacute;culos que impidan el progreso del equipo se denomina:";
 choices[40]= new Array();
 choices[40][0] = "Product owner.";
 choices[40][1] = "Retail Cashier.";
 choices[40][2] = "ScrumMaster";
 choices[40][3] = "Development team member. ";
 answers[40] = choices[40][2];
 units[40] = "79";
 comments[40] = "Id Pregunta: 9955. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9962 AÃ±o de creación de pregunta: 2014-01-01
 questions[41]= "42)  Los dos componentes principales de ADO.NET para el acceso a los datos y su manipulaci&oacute;n son:";
 choices[41]= new Array();
 choices[41][0] = ".NET Framework Data Connectivity y ADO.NET DataSet";
 choices[41][1] = ".NET Framework Data Providers y ADO.NET ResultSet";
 choices[41][2] = ".NET Framework Data Connectivity y ADO.NET ResultSet";
 choices[41][3] = ".NET Framework Data Providers y ADO.NET DataSet";
 answers[41] = choices[41][3];
 units[41] = "59,115";
 comments[41] = "Id Pregunta: 9962. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9979 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  Un sistema que puede emplearse para registrar la relaci&oacute;n del ciudadano con la administraci&oacute;n, anotando todas las relaciones establecidas por &eacute;l, para configurar su personalidad administrativa digital es ";
 choices[42]= new Array();
 choices[42][0] = "Gesti&oacute;n de la Relaci&oacute;n con el Cliente (CRM) ";
 choices[42][1] = "Arquitectura Orientada a Servicios (SOA) ";
 choices[42][2] = "Planificaci&oacute;n de Recursos Empresariales (ERP) ";
 choices[42][3] = "Gesti&oacute;n de Procesos de Negocio (BPM) ";
 answers[42] = choices[42][0];
 units[42] = "65";
 comments[42] = "Id Pregunta: 9979. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 9993 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes normas no hace referencia a la factura electr&oacute;nica?";
 choices[43]= new Array();
 choices[43][0] = "Ley 11/2007";
 choices[43][1] = "Real Decreto 1619/2012";
 choices[43][2] = "Ley 25/2013";
 choices[43][3] = "Real Decreto Legislativo 3/2011";
 answers[43] = choices[43][0];
 units[43] = "70";
 comments[43] = "Id Pregunta: 9993. NULL";


//  Id pregunta: 10011 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  &iquest;Que disposici&oacute;n legal determina el procedimiento para la expedici&oacute;n del DNI electr&oacute;nico y sus certificados de firma electr&oacute;nica?";
 choices[44]= new Array();
 choices[44][0] = "Ley 11/2007, de 22 de junio.";
 choices[44][1] = "RD 4/2010, de 8 de enero.";
 choices[44][2] = "RD 1553/2005, de 23 de diciembre.";
 choices[44][3] = "Ley 26/2007, de 28 de diciembre.";
 answers[44] = choices[44][2];
 units[44] = "70";
 comments[44] = "Id Pregunta: 10011. ";


//  Id pregunta: 10019 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  Se&ntilde;ale de entre los siguientes cu&aacute;l NO es un framework de pruebas unitarias para Microsoft .NET:";
 choices[45]= new Array();
 choices[45][0] = "xUnit";
 choices[45][1] = "xUnit.net";
 choices[45][2] = "NUnit";
 choices[45][3] = "csUnit";
 answers[45] = choices[45][0];
 units[45] = "59";
 comments[45] = "Id Pregunta: 10019. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10028 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  Indique cu&aacute;l de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[46]= new Array();
 choices[46][0] = "Joost";
 choices[46][1] = "Netflix";
 choices[46][2] = "Cassandra ";
 choices[46][3] = "Hadoop";
 answers[46] = choices[46][3];
 units[46] = "116";
 comments[46] = "Id Pregunta: 10028. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10043 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  &iquest;En qu&eacute; protocolo de encaminamiento se utiliza el Algoritmo de Dijkstra para el c&aacute;lculo de rutas?";
 choices[47]= new Array();
 choices[47][0] = "OSPF ";
 choices[47][1] = "RIP";
 choices[47][2] = "BGP";
 choices[47][3] = "EGP";
 answers[47] = choices[47][0];
 units[47] = "102";
 comments[47] = "Id Pregunta: 10043. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10056 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  Indique de entre las siguientes cu&aacute;l es la definici&oacute;n de secr&aacute;fono:";
 choices[48]= new Array();
 choices[48][0] = "Equipo de frontera que, situado fuera de la red interna, ofrece servicios al exterior.";
 choices[48][1] = "Equipo infectado por un atacante remoto no detectado.";
 choices[48][2] = "Equipo que genera y entrega claves criptogr&aacute;ficas para su distribuci&oacute;n.";
 choices[48][3] = "Equipo para realizar el cifrado anal&oacute;gico de la voz.";
 answers[48] = choices[48][3];
 units[48] = "109";
 comments[48] = "Id Pregunta: 10056. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10057 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  El algoritmo SHA-1 (RFC 3174) produce un resumen de salida de:";
 choices[49]= new Array();
 choices[49][0] = "128 bits ";
 choices[49][1] = "160 bits";
 choices[49][2] = "224 bits ";
 choices[49][3] = "256 bits";
 answers[49] = choices[49][1];
 units[49] = "72";
 comments[49] = "Id Pregunta: 10057. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10077 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  &iquest;Qu&eacute; banda de frecuencia se utiliza para la prestaci&oacute;n de los servicios de televisi&oacute;n terrestre con tecnolog&iacute;a digital, seg&uacute;n el Cuadro Nacional de Atribuciones de Frecuencia?";
 choices[50]= new Array();
 choices[50][0] = "100 a 224 MHz ";
 choices[50][1] = "225 a 356 MHz";
 choices[50][2] = "357 a 469 MHz ";
 choices[50][3] = "470 a 862 MHz";
 answers[50] = choices[50][3];
 units[50] = "105";
 comments[50] = "Id Pregunta: 10077. TIC A2, libre, Examen 2013";


//  Id pregunta: 10089 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l NO es un producto de la metodolog&iacute;a SCRUM?";
 choices[51]= new Array();
 choices[51][0] = "Product backlog";
 choices[51][1] = "Sprint";
 choices[51][2] = "Burn down chart";
 choices[51][3] = "Sprint backlog";
 answers[51] = choices[51][1];
 units[51] = "79";
 comments[51] = "Id Pregunta: 10089. NULL";


//  Id pregunta: 10090 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  Seg&uacute;n SCRUM, &iquest;se pueden modificar el sprintbacklog durante un sprint?";
 choices[52]= new Array();
 choices[52][0] = "No, nunca";
 choices[52][1] = "Solo el Product Owner";
 choices[52][2] = "Solo el Scrum Master";
 choices[52][3] = "Solo el Product Owner a petici&oacute;n de alg&uacute;n Stakeholder";
 answers[52] = choices[52][0];
 units[52] = "79";
 comments[52] = "Id Pregunta: 10090. NULL";


//  Id pregunta: 10094 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l NO se considera una t&eacute;cnica general del an&aacute;lisis de requisitos?";
 choices[53]= new Array();
 choices[53][0] = "Abstracci&oacute;n";
 choices[53][1] = "Proyecci&oacute;n";
 choices[53][2] = "Partici&oacute;n";
 choices[53][3] = "Todas se consideran t&eacute;cnicas generales";
 answers[53] = choices[53][3];
 units[53] = "78";
 comments[53] = "Id Pregunta: 10094. NULL";


//  Id pregunta: 10108 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  Las siglas CSMA/CD significan:";
 choices[54]= new Array();
 choices[54][0] = "Carrier Sense Multiple Access with Collision Detection";
 choices[54][1] = "Carrier Sense Multiple Access with Common Data";
 choices[54][2] = "Carrier Sense Multiple Access without Collision Data";
 choices[54][3] = "Clear Sense Multiple Access with Collision Detection";
 answers[54] = choices[54][0];
 units[54] = "101";
 comments[54] = "Id Pregunta: 10108. ";


//  Id pregunta: 10118 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  Seleccionar la correcta:";
 choices[55]= new Array();
 choices[55][0] = "Tanto los router como los switches definen dominios de colisi&oacute;n y difusi&oacute;n";
 choices[55][1] = "Los router definen dominios de colisi&oacute;n pero no de difusi&oacute;n";
 choices[55][2] = "Los router definen dominios de difusi&oacute;n y de colisi&oacute;n";
 choices[55][3] = "Los switches definen dominios de colisi&oacute;n y difusi&oacute;n.";
 answers[55] = choices[55][2];
 units[55] = "102";
 comments[55] = "Id Pregunta: 10118. ";


//  Id pregunta: 10128 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  En la gesti&oacute;n de redes, el agente de gesti&oacute;n se encuentra en: ";
 choices[56]= new Array();
 choices[56][0] = "El elemento gestionado";
 choices[56][1] = "El nodo de gesti&oacute;n central";
 choices[56][2] = "Nodos intermedios que act&uacute;an como relay";
 choices[56][3] = "El agente de gesti&oacute;n no es un elemento de la gesti&oacute;n de red.";
 answers[56] = choices[56][0];
 units[56] = "104";
 comments[56] = "Id Pregunta: 10128. ";


//  Id pregunta: 10157 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[57]= new Array();
 choices[57][0] = "Los recursos reutilizables estar&aacute;n identificados mediante referencias &uacute;nicas y un&iacute;vocas, basadas en identificadores de recursos uniformes (URI).";
 choices[57][1] = "Se usar&aacute;n est&aacute;ndares abiertos o de uso generalizado por la ciudadan&iacute;a, ci&ntilde;&eacute;ndose a lo establecido en la NTI de Cat&aacute;logo de Est&aacute;ndares. ";
 choices[57][2] = "Los datos se encontrar&aacute;n agregados para facilitar la reutilizaci&oacute;n.";
 choices[57][3] = "Para facilitar la reutilizaci&oacute;n de vocabularios se utilizar&aacute; el Centro de Interoperabilidad Sem&aacute;ntica";
 answers[57] = choices[57][2];
 units[57] = "43";
 comments[57] = "Id Pregunta: 10157. ";


//  Id pregunta: 10177 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  &iquest;Qu&eacute; afirmaci&oacute;n es cierta en relaci&oacute;n con la orientaci&oacute;n a objetos?";
 choices[58]= new Array();
 choices[58][0] = "La encapsulaci&oacute;n permite captar las caracter&iacute;sticas esenciales que distinguen a un objeto de otros tipos de objetos, en funci&oacute;n de la perspectiva del observador, y obtener as&iacute; una descripci&oacute;n de la clase de objetos que enfatiza unos detalles y suprimer otros";
 choices[58][1] = "Seg&uacute;n Grady Booch, un objeto o instancia de una clase tiene estado, comportamiento e identidad";
 choices[58][2] = "Los lenguajes OO son lenguajes fuertemente tipados que no soportan el enlace din&aacute;mico en tiempo de ejecuci&oacute;n, para invocar operaciones en objetos obviando el tipo actual de &eacute;stos";
 choices[58][3] = "El polimorfismo se expresa &uacute;nicamente a trav&eacute;s del uso de un mismo nombre de m&eacute;todo o funci&oacute;n con distintos argumentos o un mismo operador con distintas funcionalidades";
 answers[58] = choices[58][1];
 units[58] = "82";
 comments[58] = "Id Pregunta: 10177. ";


//  Id pregunta: 10191 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  &iquest;Qu&eacute; tratamiento digital de una im&aacute;gen resalta los tonos oscuros?";
 choices[59]= new Array();
 choices[59][0] = "Filtro de mediana";
 choices[59][1] = "Realce logar&iacute;tmico";
 choices[59][2] = "Filtro paso bajo";
 choices[59][3] = "Filtro paso alto";
 answers[59] = choices[59][1];
 units[59] = "93";
 comments[59] = "Id Pregunta: 10191. NULL";


//  Id pregunta: 10213 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta es m&aacute;s adecuado cuando se trata de obtener un subconjunto de alternativas aceptables?";
 choices[60]= new Array();
 choices[60][0] = "El m&eacute;todo de la Utilidad Multiatributo";
 choices[60][1] = "Los m&eacute;todos de concordancia";
 choices[60][2] = "Los m&eacute;todos basados en permutaciones";
 choices[60][3] = "El m&eacute;todo de la Programaci&oacute;n compromiso";
 answers[60] = choices[60][1];
 units[60] = "34";
 comments[60] = "Id Pregunta: 10213. ";


//  Id pregunta: 10222 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  Conociendo que la variable es de tipo byte y su valor es 12, cual ser&aacute; el resultado de la sentencia:System.out.println(busca == 6 + 6 ? &quot;true&quot; : &quot;false&quot;);";
 choices[61]= new Array();
 choices[61][0] = "Da un error de compilaci&oacute;n";
 choices[61][1] = "TRUE";
 choices[61][2] = "FALSE";
 choices[61][3] = "12";
 answers[61] = choices[61][1];
 units[61] = "60";
 comments[61] = "Id Pregunta: 10222. NULL";


//  Id pregunta: 10236 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  El objeto PreparedStatement de la api java.sql se utiliza para:";
 choices[62]= new Array();
 choices[62][0] = "Ejecutar una sentencia SQL de forma repetida variando los par&aacute;metros de la misma";
 choices[62][1] = "Nos permite acceder a procedimientos almacenados en la base de datos";
 choices[62][2] = "Es &uacute;til a la hora de trabajar con el metadata de la base de datos";
 choices[62][3] = "ninguna de las anteriores";
 answers[62] = choices[62][0];
 units[62] = "60";
 comments[62] = "Id Pregunta: 10236. NULL";


//  Id pregunta: 10239 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  Qu&eacute; objetos nos encontramos en un servicio de directorios:";
 choices[63]= new Array();
 choices[63][0] = "EJB home interface";
 choices[63][1] = "Un componente EJB";
 choices[63][2] = "La API EJB";
 choices[63][3] = "Un objeto interface EJB";
 answers[63] = choices[63][0];
 units[63] = "116";
 comments[63] = "Id Pregunta: 10239. NULL";


//  Id pregunta: 10246 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio quiere distribuir el software, junto a m&oacute;dulos de terceros que tienen la siguiente licencia:Este c&oacute;digo puede ser libremente modificado, copiado y distribuido, mientras que no se aplique un pago por ello.&iquest;Representa esto una violaci&oacute;n de la licencia GPL?";
 choices[64]= new Array();
 choices[64][0] = "S&iacute;, porque la licencia GPL requiere que modificaciones de sofware bajo licencia GPL sean publicadas bajo licencia GPL";
 choices[64][1] = "S&iacute;, porque la licencia GPL no permite restricciones adicionales sobre una parte cualquiera del c&oacute;digo";
 choices[64][2] = "No, porque el nuevo c&oacute;digo est&aacute; enlazado con el c&oacute;digo de Juan, no copiado dentro de &eacute;l";
 choices[64][3] = "No, porque el resultado tambi&eacute;n puede ser distribuido de forma gratuita";
 answers[64] = choices[64][1];
 units[64] = "61";
 comments[64] = "Id Pregunta: 10246. ";


//  Id pregunta: 10253 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Cuando sea preciso recabar el consentimiento del interesado para tratar sus datos personales:";
 choices[65]= new Array();
 choices[65][0] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, s&oacute;lo en el caso de los datos especialmente protegidos";
 choices[65][1] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y durante un periodo m&aacute;ximo de 12 meses";
 choices[65][2] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y mientras dure dicho tratamiento";
 choices[65][3] = "No ser&aacute; necesario que el responsable del tratamiento pruebe la existencia del consentimiento para el mismo";
 answers[65] = choices[65][2];
 units[65] = "29";
 comments[65] = "Id Pregunta: 10253. Art&iacute;culo 12.3 del RD 1720/2007";


//  Id pregunta: 10262 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Se debe notificar al Registro General de Protecci&oacute;n de Datos";
 choices[66]= new Array();
 choices[66][0] = "Los ficheros de nueva creaci&oacute;n";
 choices[66][1] = "Las modificaciones posteriores en la informaci&oacute;n comunicada en el registro de un fichero";
 choices[66][2] = "La supresi&oacute;n de ficheros previamente registrados";
 choices[66][3] = "Todos ellos";
 answers[66] = choices[66][3];
 units[66] = "29";
 comments[66] = "Id Pregunta: 10262. Art&iacute;culos 55.1, 55.2, 58.1 y 58.2 del RD 1720/2007";


//  Id pregunta: 10264 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  En referencia al tratamiento de datos de car&aacute;cter personal recogidos en ficheros de las Fuerzas y Cuerpos de Seguridad, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[67]= new Array();
 choices[67][0] = "Puede denegarse si afecta a la defensa del estado, no siendo posible en tal caso plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[67][1] = "Puede denegarse si afecta a la defensa del estado y el interesado plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[67][2] = "No puede denegarse si el fichero contiene datos especialmente protegidos";
 choices[67][3] = "No puede denegarse en ning&uacute;n caso";
 answers[67] = choices[67][1];
 units[67] = "29";
 comments[67] = "Id Pregunta: 10264. Art&iacute;culo 23.1 y 23.3 de la Ley 15/1999";


//  Id pregunta: 10265 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  	Podr&aacute;n tratarse datos personales relativos al cumplimiento o incumplimiento de obligaciones dinerarias";
 choices[68]= new Array();
 choices[68][0] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida y por tiempo indefinido";
 choices[68][1] = "Desde el momento en que se adquiere el compromiso de pago y por tiempo indefinido";
 choices[68][2] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida siempre que no hayan transcurrido seis a&ntilde;os de dicho impago";
 choices[68][3] = "Desde el momento en que se adquiere el compromiso de pago siempre que no hayan transcurrido seis a&ntilde;os de la adquisici&oacute;n de la deuda";
 answers[68] = choices[68][2];
 units[68] = "29";
 comments[68] = "Id Pregunta: 10265. Art&iacute;culo 38.1 a) y b) del RD 1720/2007";


//  Id pregunta: 10267 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  &iquest;Es posible denegar temporalmente una transfferencia internacional de datos personales previamente autorizada?";
 choices[69]= new Array();
 choices[69][0] = "Puede hacerlo el Director de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[69][1] = "Puede hacerlo el Consejo Consultivo de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[69][2] = "Puede hacerlo la Secretar&iacute;a de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[69][3] = "Una vez autorizada la transferencia s&oacute;lo es posible denegarla por indicaci&oacute;n espec&iacute;fica de la Comisi&oacute;n Europea";
 answers[69] = choices[69][0];
 units[69] = "29";
 comments[69] = "Id Pregunta: 10267. Art&iacute;culo 70.3 del RD 1720/2007";


//  Id pregunta: 10271 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[70]= new Array();
 choices[70][0] = "Est&aacute; sometida a control por parte de la IGAE y del Tribunal de Cuentas";
 choices[70][1] = "Est&aacute; sujeta a la LOFAGE en todos sus preceptos";
 choices[70][2] = "Frente a sus resoluciones puede presentarse recurso de alzada";
 choices[70][3] = "Sus competencias son exclusivas, no pudiendo crearse &oacute;rganos similares en las Comunidades Aut&oacute;nomas";
 answers[70] = choices[70][0];
 units[70] = "29";
 comments[70] = "Id Pregunta: 10271. Art&iacute;culos 2 y 33 del RD 428/1993";


//  Id pregunta: 10273 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Referente al m&eacute;todo de b&uacute;squeda con adversario aplicado a juegos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[71]= new Array();
 choices[71][0] = "Los dos jugadores disponen de informaci&oacute;n completa sobre el estado del juego";
 choices[71][1] = "La estrategia del oponente es desconocida";
 choices[71][2] = "Interviene el azar";
 choices[71][3] = "Al acabar, cada jugador pierde, gana o empata";
 answers[71] = choices[71][2];
 units[71] = "63";
 comments[71] = "Id Pregunta: 10273. NULL";


//  Id pregunta: 10274 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre comunicaci&oacute;n entre agentes inteligentes  mediante sistema de pizarra es cierta?";
 choices[72]= new Array();
 choices[72][0] = "Los agentes reciben se&ntilde;ales de la pizarra cuando &eacute;sta se actualiza";
 choices[72][1] = "Cuando un agente puede contribuir a la soluci&oacute;n del problema lo 'escribe' inmediatamente en la pizarra";
 choices[72][2] = "Ambas son ciertas";
 choices[72][3] = "Ninguna es cierta";
 answers[72] = choices[72][3];
 units[72] = "63";
 comments[72] = "Id Pregunta: 10274. NULL";


//  Id pregunta: 10283 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  En Sql Server 2012 &iquest;qu&eacute; comando se utiliza para configurar una conexi&oacute;n de servidor de informes?";
 choices[73]= new Array();
 choices[73][0] = "rdlccfg";
 choices[73][1] = "tsmrpt";
 choices[73][2] = "rptsetup";
 choices[73][3] = "rsconfig";
 answers[73] = choices[73][3];
 units[73] = "58";
 comments[73] = "Id Pregunta: 10283. TIC A2, libre, examen 2013";


//  Id pregunta: 10293 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Uno de los siguientes t&eacute;rminos NO se corresponde con un tipo de antena satelital:";
 choices[74]= new Array();
 choices[74][0] = "Cassegrain";
 choices[74][1] = "Krenwinkel";
 choices[74][2] = "Gregorian";
 choices[74][3] = "Offset";
 answers[74] = choices[74][1];
 units[74] = "67";
 comments[74] = "Id Pregunta: 10293. TIC A2, libre, examen 2013";


//  Id pregunta: 10296 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  En redes de &aacute;rea local, &iquest;cu&aacute;l de los siguientes es un m&eacute;todo de acceso al medio compartido con escucha porcontienda?";
 choices[75]= new Array();
 choices[75][0] = "Paso de testigo en anillo.";
 choices[75][1] = "CSMA no persistente.";
 choices[75][2] = "ALOHA ranurado.";
 choices[75][3] = "Contenci&oacute;n.";
 answers[75] = choices[75][1];
 units[75] = "101";
 comments[75] = "Id Pregunta: 10296. TIC A2, libre, examen 2013";


//  Id pregunta: 10297 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  En SNMP &iquest;qu&eacute; puerto utilizan las traps y en qu&eacute; sentido se transmiten?";
 choices[76]= new Array();
 choices[76][0] = "Puerto 162 y las env&iacute;a el agente al gestor.";
 choices[76][1] = "Puerto 162 y las env&iacute;a el gestor al agente.";
 choices[76][2] = "Puerto 161 y las env&iacute;a el agente al gestor.";
 choices[76][3] = "Puerto 161 y las env&iacute;a el gestor al agente.";
 answers[76] = choices[76][0];
 units[76] = "104";
 comments[76] = "Id Pregunta: 10297. TIC A2, libre, examen 2013";


//  Id pregunta: 10300 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Indicar de las siguientes, cu&aacute;l es una cabecera de extensi&oacute;n IPv6:";
 choices[77]= new Array();
 choices[77][0] = "Cabecera siguiente.";
 choices[77][1] = "Enrutamiento.";
 choices[77][2] = "Longitud de la carga &uacute;til.";
 choices[77][3] = "L&iacute;mite de saltos.";
 answers[77] = choices[77][1];
 units[77] = "100";
 comments[77] = "Id Pregunta: 10300. TIC A2, libre, examen 2013";


//  Id pregunta: 10302 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En IPv6 (RFC 2460), &iquest;cu&aacute;nto ocupa el campo &quot;tipo de enrutamiento&quot;?";
 choices[78]= new Array();
 choices[78][0] = "15 bits.";
 choices[78][1] = "8 bits.";
 choices[78][2] = "10 bits.";
 choices[78][3] = "3 bits.";
 answers[78] = choices[78][1];
 units[78] = "100";
 comments[78] = "Id Pregunta: 10302. TIC A2, libre, examen 2013";


//  Id pregunta: 10345 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;A qu&eacute; organismo est&aacute; adscrita la Comisi&oacute;n de Propiedad Intelectual?";
 choices[79]= new Array();
 choices[79][0] = "Ministerio de la Presidencia";
 choices[79][1] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[79][2] = "Ministerio de Industria";
 choices[79][3] = "Ministerio de Econom&iacute;a";
 answers[79] = choices[79][1];
 units[79] = "37";
 comments[79] = "Id Pregunta: 10345. La Comisi&oacute;n de Propiedad Intelectual es un &oacute;rgano colegiado de &aacute;mbito nacional adscrito a la Subdirecci&oacute;n General de Propiedad Intelectual del Ministerio de Educaci&oacute;n, Cultura y Deporte";


//  Id pregunta: 10362 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Entre los documentos generados por ISO, aquellos que recogen informaci&oacute;n que no aparece en los Est&aacute;ndares Internacionales reciben el nombre de&hellip;";
 choices[80]= new Array();
 choices[80][0] = "Technical Especifications";
 choices[80][1] = "Technical Reports";
 choices[80][2] = "Technical Corrigendum";
 choices[80][3] = "Gu&iacute;as ISO";
 answers[80] = choices[80][1];
 units[80] = "42";
 comments[80] = "Id Pregunta: 10362. http://www.iso.org/iso/home/standards_development/deliverables-all.htm?type=tr";


//  Id pregunta: 10369 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En relaci&oacute;n con los acuerdos de nivel de servicio, los m&aacute;s importante de cara al seguimiento de los contratos que subscribe la Administraci&oacute;n con los contratistas es que:";
 choices[81]= new Array();
 choices[81][0] = "Los Sindicatos revisen las cla&uacute;sulas del ANS";
 choices[81][1] = "El Contratista proporcione informaci&oacute;n mensual sobre las m&eacute;tricas del ANS";
 choices[81][2] = "Se imponga penalizaciones ejemplares cuando se detecte un incumplimiento en el ANS";
 choices[81][3] = "La Administraci&oacute;n disponga de m&eacute;tricas sobre los puntos acordados en el ANS que puedan ser evaluadas sin la intervenci&oacute;n del propio contratista, para evitar el fraude en dichas evaluaciones";
 answers[81] = choices[81][3];
 units[81] = "28";
 comments[81] = "Id Pregunta: 10369. ";


//  Id pregunta: 10427 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, el principio de simplificaci&oacute;n administrativa al que se ajustar&aacute; la utilizaci&oacute;n de las tecnolog&iacute;as de la informaci&oacute;n, establece ";
 choices[82]= new Array();
 choices[82][0] = "la m&aacute;xima difusi&oacute;n, publicidad y transparencia del procedimiento.";
 choices[82][1] = "el requerimiento a los ciudadanos de s&oacute;lo aquellos datos que sean estrictamente necesarios a la finalidad para la que se soliciten. ";
 choices[82][2] = "la no utilizaci&oacute;n de medios electr&oacute;nicos que puedan implicar restricciones o";
 choices[82][3] = "la reducci&oacute;n de manera sustancial de los t&eacute;rminos y plazos de los procedimientos administrativos. ";
 answers[82] = choices[82][3];
 units[82] = "30";
 comments[82] = "Id Pregunta: 10427. Examen TIC A1 2013";


//  Id pregunta: 10453 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el &aacute;mbito de la continuidad de negocio, el Punto de Recuperaci&oacute;n Objetivo o &quot;Recovery point objective RPO&quot;:";
 choices[83]= new Array();
 choices[83][0] = "Determina la frecuencia de las copias de respaldo.";
 choices[83][1] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 choices[83][2] = "Es la cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[83][3] = "A y B.";
 answers[83] = choices[83][3];
 units[83] = "97";
 comments[83] = "Id Pregunta: 10453. NULL";


//  Id pregunta: 10456 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Ordene las siguientes t&eacute;cnicas de respaldo de menor a mayor tiempo de recuperaci&oacute;n:";
 choices[84]= new Array();
 choices[84][0] = "full, diferencial, incremental";
 choices[84][1] = "full, incremental, diferencial ";
 choices[84][2] = "incremental, diferencial, full";
 choices[84][3] = "diferencial, incremental, full";
 answers[84] = choices[84][0];
 units[84] = "97";
 comments[84] = "Id Pregunta: 10456. NULL";


//  Id pregunta: 10458 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l no es una novedad de HTML 5? ";
 choices[85]= new Array();
 choices[85][0] = "Application Cache";
 choices[85][1] = "Elementos sem&aacute;nticos.";
 choices[85][2] = "Web workers";
 choices[85][3] = "Elementos de desarrollo para plataformas m&oacute;viles.";
 answers[85] = choices[85][3];
 units[85] = "69";
 comments[85] = "Id Pregunta: 10458. NULL";


//  Id pregunta: 10460 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Respecto a JSON (Javascript Object Notation), indicar la respuesta incorrecta:";
 choices[86]= new Array();
 choices[86][0] = "Es una parte de la definici&oacute;n del est&aacute;ndar ECMA-262.";
 choices[86][1] = "Es una alternativa a XML en AJAX.";
 choices[86][2] = "Requiere analizadores sint&aacute;cticos complejos.";
 choices[86][3] = "Suele emplearse en entornos donde el tama&ntilde;o del flujo de datos entre cliente y servidor es importante.";
 answers[86] = choices[86][2];
 units[86] = "51";
 comments[86] = "Id Pregunta: 10460. NULL";


//  Id pregunta: 10464 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Qu&eacute; elemento de HTML 5 tiene como finalidad dibujar gr&aacute;ficos 2D on the fly mediante Javascript?";
 choices[87]= new Array();
 choices[87][0] = "&lt;svg&gt;";
 choices[87][1] = "&lt;canvas&gt;";
 choices[87][2] = "&lt;output&gt;";
 choices[87][3] = "&lt;source&gt;";
 answers[87] = choices[87][1];
 units[87] = "69";
 comments[87] = "Id Pregunta: 10464. NULL";


//  Id pregunta: 10470 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Respecto a los certificados X.509 y las PKI, indique la respuesta correcta:";
 choices[88]= new Array();
 choices[88][0] = "Exigen el uso de X.500 o LDAP  para la distribuci&oacute;n de certificados y CRLs.";
 choices[88][1] = "Cuando el estado de revocaci&oacute;n se proporciona mediante CRLs, la Autoridad de Certificaci&oacute;n es tambi&eacute;n la emisora de las CRLs.";
 choices[88][2] = "La emisi&oacute;n de CRLs es un mecanismo obligatorio de consulta de estado de los certificados.";
 choices[88][3] = "Una CRL completa lista todos los certificados no expirados dentro su alcance revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[88] = choices[88][3];
 units[88] = "73";
 comments[88] = "Id Pregunta: 10470. ";


//  Id pregunta: 10474 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En el &aacute;mbito de los certificados X.509:";
 choices[89]= new Array();
 choices[89][0] = "La CA de la PKI debe proporcional protocolos de gesti&oacute;n de certificados (registro, recuperaci&oacute;n de claves, etc) dsiponibles online.";
 choices[89][1] = "Una CRL es una lista de certificados revocados con un timestamp que determina su fecha de emisi&oacute;n y firmada en todo caso por la CA que emite los certificados.";
 choices[89][2] = "Una CRL tiene un alcance que define el tipo de certificados que incluir&aacute; dicha lista.";
 choices[89][3] = "Un certificado se a&ntilde;ade a la CRL en la siguiente actualizaci&oacute;n seg&uacute;n la pol&iacute;tica de actualizaciones definida.";
 answers[89] = choices[89][3];
 units[89] = "73";
 comments[89] = "Id Pregunta: 10474. ";


//  Id pregunta: 10486 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  La diferencia que Cobit 5 supone sobre Cobit 4 se basa en que:";
 choices[90]= new Array();
 choices[90][0] = "Se usa ITIL v.3 para la Gesti&oacute;n de las TI";
 choices[90][1] = "En COBIT 5 se habla con propiedad de Gobierno de las TI, en tanto en cuanto existe un alineamiento claro de la TI con los objetivos de Negocio";
 choices[90][2] = "Hay un dominio m&aacute;s a evaluar, que es la Gesti&oacute;n de Proyectos";
 choices[90][3] = "Ahora el Negocio debe tener en cuenta las necesidades del departamento de TI e invertir m&aacute;s dinero en dicho departamento";
 answers[90] = choices[90][1];
 units[90] = "98";
 comments[90] = "Id Pregunta: 10486. NULL";


//  Id pregunta: 10494 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la Red SARA. &iquest;Cual de los siguientes no es un tipo de Punto de Presencia?";
 choices[91]= new Array();
 choices[91][0] = "Area de Conexi&oacute;n de la AEAT";
 choices[91][1] = "Red sTESTA";
 choices[91][2] = "Ventanilla Unica empresarial de Melilla";
 choices[91][3] = "Banco de Espa&ntilde;a";
 answers[91] = choices[91][1];
 units[91] = "43";
 comments[91] = "Id Pregunta: 10494. Punto II.1.2 de la NTI de Requisitos de conexi&oacute;n a red sara. Las Ventanillas Unicas son tipos de PdP, pero la Ventanilla Unica de Melilla es un PdP dentro de ese tipo y no un tipo";


//  Id pregunta: 10496 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cual de las siguientes es una implementaci&oacute;n del protocolo LDAP?";
 choices[92]= new Array();
 choices[92][0] = "eDirectory";
 choices[92][1] = "iPlanet";
 choices[92][2] = "Active Directory";
 choices[92][3] = "Todos lo son";
 answers[92] = choices[92][3];
 units[92] = "74, 106";
 comments[92] = "Id Pregunta: 10496. eDirectory es la implementaci&oacute;n de Novell, e iPlanet la de Sun";


//  Id pregunta: 10499 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Cual de los siguientes es un servicio comun de reuniones virtuales para las Administraciones Publicas?";
 choices[93]= new Array();
 choices[93][0] = "Reunete";
 choices[93][1] = "Webex";
 choices[93][2] = "Meetic";
 choices[93][3] = "VirtualMeeting";
 answers[93] = choices[93][0];
 units[93] = "117";
 comments[93] = "Id Pregunta: 10499. http://administracionelectronica.gob.es/ctt/reunete";


//  Id pregunta: 10503 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Qu&eacute; estandar internacional especifica clases de cableado de proposito general?";
 choices[94]= new Array();
 choices[94][0] = "ISO/IEC 11801";
 choices[94][1] = "EN 50173";
 choices[94][2] = "ISO/IEC 18101";
 choices[94][3] = "EN 50137";
 answers[94] = choices[94][0];
 units[94] = "99";
 comments[94] = "Id Pregunta: 10503. ";


//  Id pregunta: 10519 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  Cu&aacute;l es el periodo m&aacute;ximo de inhabilitaci&oacute;n al que pueden dar lugar las infracciones muy graves:";
 choices[95]= new Array();
 choices[95][0] = "10 a&ntilde;os";
 choices[95][1] = "5 a&ntilde;os";
 choices[95][2] = "3 a&ntilde;os";
 choices[95][3] = "1 a&ntilde;o";
 answers[95] = choices[95][1];
 units[95] = "110";
 comments[95] = "Id Pregunta: 10519. ";


//  Id pregunta: 10541 AÃ±o de creación de pregunta: 2014-01-01
 questions[96]= "97)  &iquest;Qu&eacute; cabeceras del datagrama IP son revisadas por los routers intermedios en IPv6?";
 choices[96]= new Array();
 choices[96][0] = "todas las cabeceras";
 choices[96][1] = "ninguna";
 choices[96][2] = "todas las cabeceras menos las opcionales";
 choices[96][3] = "la cabecera hop-to-hop y el resto de cabeceras menos las cabeceras opcionales";
 answers[96] = choices[96][3];
 units[96] = "100";
 comments[96] = "Id Pregunta: 10541. NULL";


//  Id pregunta: 10548 AÃ±o de creación de pregunta: 2014-01-01
 questions[97]= "98)  Los auditores que han participado en el desarrollo de un sistema podr&iacute;an haber perdido su independencia si: ";
 choices[97]= new Array();
 choices[97][0] = "Realizan una revisi&oacute;n del desarrollo del sistema ";
 choices[97][1] = "Recomiendan medidas de mejora";
 choices[97][2] = "Realizan una evaluaci&oacute;n independiente de la aplicaci&oacute;n despu&eacute;s de su puesta en producci&oacute;n ";
 choices[97][3] = "Participan activamente en el dise&ntilde;o e implementaci&oacute;n del sistema de aplicaci&oacute;n";
 answers[97] = choices[97][3];
 units[97] = "31, 32, 33";
 comments[97] = "Id Pregunta: 10548. La independencia puede verse afectada si el auditor se involucra activamente en el dise&ntilde;o e implementaci&oacute;n del sistema. ";


//  Id pregunta: 10556 AÃ±o de creación de pregunta: 2014-01-01
 questions[98]= "99)  Cual de las siguientes certificaciones profesionales NO pertenecen a ISACA";
 choices[98]= new Array();
 choices[98][0] = "CISSP";
 choices[98][1] = "CISA";
 choices[98][2] = "CRISC ";
 choices[98][3] = "CISM";
 answers[98] = choices[98][0];
 units[98] = "31, 32, 33";
 comments[98] = "Id Pregunta: 10556. CISSP pertenece a ISC2";


//  Id pregunta: 10563 AÃ±o de creación de pregunta: 2014-01-01
 questions[99]= "100)  Los controles correctivos tienen como objeto:";
 choices[99]= new Array();
 choices[99][0] = "reducir el riesgo ante una debilidad existente";
 choices[99][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[99][2] = "Solucionar problemas detectados por controles detectivos";
 choices[99][3] = "Reportar errores";
 answers[99] = choices[99][2];
 units[99] = "31, 32, 33";
 comments[99] = "Id Pregunta: 10563. ";


