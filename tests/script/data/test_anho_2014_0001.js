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

//  Id pregunta: 9051 AÃ±o de creación de pregunta: 2014-01-01
 questions[0]= "1)  Con respecto a las siguientes siglas:";
 choices[0]= new Array();
 choices[0][0] = "El IMEI es un identificador del dispositivo que se est&aacute; usando";
 choices[0][1] = "El msisdn es un n&uacute;mero &uacute;nico de identificaci&oacute;n de usario en la red.";
 choices[0][2] = "EL IMSI es el n&uacute;mero de identificaci&oacute;n de la tarjeta SIM";
 choices[0][3] = "Todas las anteriores";
 answers[0] = choices[0][3];
 units[0] = "108";
 comments[0] = "Id Pregunta: 9051. ";


//  Id pregunta: 9604 AÃ±o de creación de pregunta: 2014-01-01
 questions[1]= "2)  &iquest;C&uacute;al es la estructura m&aacute;s antigua de un modelo SGBD?";
 choices[1]= new Array();
 choices[1][0] = "Relacional";
 choices[1][1] = "En red";
 choices[1][2] = "Jer&aacute;rquico";
 choices[1][3] = "Multidimensional";
 answers[1] = choices[1][2];
 units[1] = "57";
 comments[1] = "Id Pregunta: 9604. ";


//  Id pregunta: 9608 AÃ±o de creación de pregunta: 2014-01-01
 questions[2]= "3)  &iquest;Cual es una ventaja de los sistemas de base de datos NoSQL?";
 choices[2]= new Array();
 choices[2][0] = "Manejan eficientemente grandes cantidades de datos";
 choices[2][1] = "Ofrecen una gran eficiencia en operaciones en tiempo real";
 choices[2][2] = "Utilizan estructuras flexibles";
 choices[2][3] = "Todas las anteriores lo son";
 answers[2] = choices[2][3];
 units[2] = "58";
 comments[2] = "Id Pregunta: 9608. NULL";


//  Id pregunta: 9614 AÃ±o de creación de pregunta: 2014-01-01
 questions[3]= "4)  &iquest;C&uacute;al es un m&eacute;todo aceptado de desnormalizaci&oacute;n de bases de datos?";
 choices[3]= new Array();
 choices[3][0] = "Vistas materializadas.";
 choices[3][1] = "Esquemas de copo de nieve.";
 choices[3][2] = "Cubos OLAP.";
 choices[3][3] = "Todos los anteriores.";
 answers[3] = choices[3][3];
 units[3] = "68";
 comments[3] = "Id Pregunta: 9614. ";


//  Id pregunta: 9629 AÃ±o de creación de pregunta: 2014-01-01
 questions[4]= "5)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra 'libro' dentro de ficheros?";
 choices[4]= new Array();
 choices[4][0] = "find -type f | xwygs grep 'libro' ";
 choices[4][1] = "find -type f | xaygs grep 'libro'";
 choices[4][2] = "find -type f | xargs grep 'libro'";
 choices[4][3] = "find -type f | xargp grep 'libro'";
 answers[4] = choices[4][2];
 units[4] = "54";
 comments[4] = "Id Pregunta: 9629. Examen TIC A2 2013 - Las comillas en 'libro' son dobles";


//  Id pregunta: 9656 AÃ±o de creación de pregunta: 2014-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l no es un requisitos de los MOOC (Massive Open Online Course)?";
 choices[5]= new Array();
 choices[5][0] = "Ser un curso";
 choices[5][1] = "Tener car&aacute;cter masivo";
 choices[5][2] = "Online";
 choices[5][3] = "Todas las anteriores";
 answers[5] = choices[5][3];
 units[5] = "66";
 comments[5] = "Id Pregunta: 9656. ";


//  Id pregunta: 9664 AÃ±o de creación de pregunta: 2014-01-01
 questions[6]= "7)  Los sistemas multiprocesador:";
 choices[6]= new Array();
 choices[6][0] = "Son sistemas d&eacute;bilmente acoplados.";
 choices[6][1] = "Sus procesadores no dependen unos de otros.";
 choices[6][2] = "Son sistemas fuertemente acoplados.";
 choices[6][3] = "Ninguna de las anteriores.";
 answers[6] = choices[6][2];
 units[6] = "45";
 comments[6] = "Id Pregunta: 9664. ";


//  Id pregunta: 9665 AÃ±o de creación de pregunta: 2014-01-01
 questions[7]= "8)  Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un sistema multiprocesador o mainframe:";
 choices[7]= new Array();
 choices[7][0] = "Son soluciones altamente propietarias para entornos no heterog&eacute;neos.";
 choices[7][1] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH.";
 choices[7][2] = "Se paralelizan sistem&aacute;ticamente las tareas y procesos, aprovechando su alto n&uacute;mero de procesadores.";
 choices[7][3] = "En el mercado hay un gran n&uacute;mero de fabricantes de dichos sistemas.";
 answers[7] = choices[7][3];
 units[7] = "45";
 comments[7] = "Id Pregunta: 9665. ";


//  Id pregunta: 9667 AÃ±o de creación de pregunta: 2014-01-01
 questions[8]= "9)  La segmentaci&oacute;n o pipelining:";
 choices[8]= new Array();
 choices[8][0] = "Es una t&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas para simular paralelizaci&oacute;n.";
 choices[8][1] = "Disminuye el tiempo de ejecuci&oacute;n de cada instrucci&oacute;n.";
 choices[8][2] = "Se trata de dividir el c&oacute;digo en fragmentos para distribuirlos por distintos procesadores.";
 choices[8][3] = "Todas  las anteriores.";
 answers[8] = choices[8][0];
 units[8] = "45";
 comments[8] = "Id Pregunta: 9667. ";


//  Id pregunta: 9673 AÃ±o de creación de pregunta: 2014-01-01
 questions[9]= "10)  En Grid Computing:";
 choices[9]= new Array();
 choices[9][0] = "Podemos conseguir cerca del 100% de uso de CPU.";
 choices[9][1] = "Los nodos no tienen que estar dedicados, puesto que su caracter&iacute;stica m&aacute;s importante es que la escalabilidad es parametrizable.";
 choices[9][2] = "Son sistemas heterog&eacute;neos.";
 choices[9][3] = "Todas las anteriores.";
 answers[9] = choices[9][3];
 units[9] = "45";
 comments[9] = "Id Pregunta: 9673. ";


//  Id pregunta: 9680 AÃ±o de creación de pregunta: 2014-01-01
 questions[10]= "11)  En relaci&oacute;n con las t&eacute;cnicas de compresi&oacute;n y organizaci&oacute;n en SIG raster, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[10]= new Array();
 choices[10][0] = "RLE (Run Length Encode) se basa en estructuras de datos orientadas a la indexaci&oacute;n espacial en las que se procede a la divisi&oacute;n recursiva de la informaci&oacute;n de partida en bloques (cuadrantes).";
 choices[10][1] = "Las t&eacute;cnicas 'Quadtrees' son m&aacute;s complejas que las RLE pero m&aacute;s eficientes.";
 choices[10][2] = "Wavelets se basa en la compresi&oacute;n de patrones y hace factible la transmisi&oacute;n a trav&eacute;s de Internet con tiempos de respuesta muy aceptables.";
 choices[10][3] = "La t&eacute;cnica m&aacute;s elemental es almacenar secuencialmente los valores del atributo en las sucesivas celdas de acuerdo a la secuencia de barrido de la imagen.";
 answers[10] = choices[10][0];
 units[10] = "67";
 comments[10] = "Id Pregunta: 9680. NULL";


//  Id pregunta: 9691 AÃ±o de creación de pregunta: 2014-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes opciones representa tipos de modelos dimensionales?";
 choices[11]= new Array();
 choices[11][0] = "Modelo en estrella.";
 choices[11][1] = "Modelo Copo de nieve.";
 choices[11][2] = "Constelaciones.";
 choices[11][3] = "Todos son modelos dimensionales.";
 answers[11] = choices[11][3];
 units[11] = "68";
 comments[11] = "Id Pregunta: 9691. ";


//  Id pregunta: 9692 AÃ±o de creación de pregunta: 2014-01-01
 questions[12]= "13)  Un problema del modelo dimensional es:";
 choices[12]= new Array();
 choices[12][0] = "Data Expression.";
 choices[12][1] = "Data Complexity.";
 choices[12][2] = "Data Sparsity.";
 choices[12][3] = "Data Compression.";
 answers[12] = choices[12][2];
 units[12] = "68";
 comments[12] = "Id Pregunta: 9692. ";


//  Id pregunta: 9693 AÃ±o de creación de pregunta: 2014-01-01
 questions[13]= "14)  Indique cu&aacute;l es la respuesta falsa. Los principios que se aplicaron para llegar a las siete capas del modelo OSI fueron:";
 choices[13]= new Array();
 choices[13][0] = "Cada capa debe realizar una funci&oacute;n bien definida.";
 choices[13][1] = "No debe dise&ntilde;arse la funci&oacute;n de cada capa pensando en la definici&oacute;n de protocolos estandarizados internacionalmente.";
 choices[13][2] = "Se debe crear una capa siempre que exista un nivel diferente de abstracci&oacute;n.";
 choices[13][3] = "Los l&iacute;mites de las capas deben elegirse a modo de minimizar el flujo de informaci&oacute;n a trav&eacute;s de las interfaces.";
 answers[13] = choices[13][1];
 units[13] = "100";
 comments[13] = "Id Pregunta: 9693. NULL";


//  Id pregunta: 9706 AÃ±o de creación de pregunta: 2014-01-01
 questions[14]= "15)  El protocolo TCP es un protocolo";
 choices[14]= new Array();
 choices[14][0] = "orientado a conexi&oacute;n, fiable y de flujo estructurado.";
 choices[14][1] = "orientado a conexi&oacute;n, fiable y de flujo no estructurado.";
 choices[14][2] = "orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 choices[14][3] = "no orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 answers[14] = choices[14][1];
 units[14] = "100";
 comments[14] = "Id Pregunta: 9706. Examen TIC-A1 2013";


//  Id pregunta: 9714 AÃ±o de creación de pregunta: 2014-01-01
 questions[15]= "16)  En las redes RDSI, la UIT ha definido una serie de puntos de referencia que ha denominado";
 choices[15]= new Array();
 choices[15][0] = "A, B, C, D.";
 choices[15][1] = "E, F, G, H.";
 choices[15][2] = "S, T, U, V.";
 choices[15][3] = "W, X, Y, Z.";
 answers[15] = choices[15][2];
 units[15] = "103";
 comments[15] = "Id Pregunta: 9714. Examen TIC-A1 2013";


//  Id pregunta: 9715 AÃ±o de creación de pregunta: 2014-01-01
 questions[16]= "17)  En relaci&oacute;n con los protocolos de encaminamiento";
 choices[16]= new Array();
 choices[16][0] = "RIP y OSPF son protocolos de vector distancia.";
 choices[16][1] = "IGRP y EIGRP son protocolos de estado de enlace.";
 choices[16][2] = "RIP es un protocolo de encaminamiento interno y BGP lo es de encaminamiento externo.";
 choices[16][3] = "IS-IS y OSPF son protocolos de encaminamiento externo.";
 answers[16] = choices[16][2];
 units[16] = "102";
 comments[16] = "Id Pregunta: 9715. Examen TIC-A1 2013";


//  Id pregunta: 9717 AÃ±o de creación de pregunta: 2014-01-01
 questions[17]= "18)  En referencia a la tecnolog&iacute;a CORBA (Common Object Request Broker Architecture) es INCORRECTO que";
 choices[17]= new Array();
 choices[17][0] = "El protocolo de comunicaciones en el que se basa se denomina GIOP (General InterORB Protocol)";
 choices[17][1] = "El lenguaje para especificaciones de interfaces se denomina IPOL (Independent Platform Object Language).";
 choices[17][2] = "Se basa en un modelo de arquitectura distribuida para entornos heterog&eacute;neos";
 choices[17][3] = "Es una propuesta del Object Management Group.";
 answers[17] = choices[17][1];
 units[17] = "51";
 comments[17] = "Id Pregunta: 9717. Examen TIC-A1 2013";


//  Id pregunta: 9734 AÃ±o de creación de pregunta: 2014-01-01
 questions[18]= "19)  Se&ntilde;ale de entre las siguientes la t&eacute;cnica de integraci&oacute;n NO incremental para pruebas de integraci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Top-down.";
 choices[18][1] = "Sandwich.";
 choices[18][2] = "Big-Bang";
 choices[18][3] = "Bottom-up.";
 answers[18] = choices[18][2];
 units[18] = "86";
 comments[18] = "Id Pregunta: 9734. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9735 AÃ±o de creación de pregunta: 2014-01-01
 questions[19]= "20)  Seg&uacute;n el Real Decreto 1720/2007, &iquest;cu&aacute;l de las siguientes declaraciones es correcta respecto a pruebas en sistemas con datos de car&aacute;cter personal?";
 choices[19]= new Array();
 choices[19][0] = "Queda terminantemente prohibida la realizaci&oacute;n de pruebas en los sistemas de informaci&oacute;n que traten datos reales en ficheros con datos de car&aacute;cter personal.";
 choices[19][1] = "No existen limitaciones para usar datos reales en ficheros de car&aacute;cter personal si se utilizan para las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n.";
 choices[19][2] = "Las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n que traten ficheros con datos de car&aacute;cter personal no se realizar&aacute;n con datos reales, salvo que se asegure el nivel de seguridad correspondiente al tratamiento realizado y se anote su realizaci&oacute;n en el documento de seguridad.";
 choices[19][3] = "Si para la validaci&oacute;n de un sistema de informaci&oacute;n, es necesario realizar pruebas que traten ficheros con datos de car&aacute;cter personal reales, se proceder&aacute; posteriormente al borrado de dichos ficheros para cumplir la normativa legal vigente.";
 answers[19] = choices[19][2];
 units[19] = "29";
 comments[19] = "Id Pregunta: 9735. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9741 AÃ±o de creación de pregunta: 2014-01-01
 questions[20]= "21)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[20]= new Array();
 choices[20][0] = "Contexts and Dependency Injection.";
 choices[20][1] = "Common Display Interface.";
 choices[20][2] = "Context-Dependent Interface.";
 choices[20][3] = "Case-Driven Implementation.";
 answers[20] = choices[20][0];
 units[20] = "60";
 comments[20] = "Id Pregunta: 9741. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9744 AÃ±o de creación de pregunta: 2014-01-01
 questions[21]= "22)  &iquest;Qu&eacute; significan las siglas MVC en el contexto de ASP.NET?";
 choices[21]= new Array();
 choices[21][0] = "Model View Controller.";
 choices[21][1] = "Multiple Views Canvas.";
 choices[21][2] = "Mobile Video Compatible.";
 choices[21][3] = "Mobile View Connector.";
 answers[21] = choices[21][0];
 units[21] = "113";
 comments[21] = "Id Pregunta: 9744. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9754 AÃ±o de creación de pregunta: 2014-01-01
 questions[22]= "23)  La tarea de especificaci&oacute;n de necesidades de Migraci&oacute;n en M&eacute;trica v3 se tiene en cuenta en la actividad:";
 choices[22]= new Array();
 choices[22][0] = "Elaboraci&oacute;n del modelo de datos en ASI";
 choices[22][1] = "Dise&ntilde;o de clases en DSI";
 choices[22][2] = "Dise&ntilde;o de la Migraci&oacute;n y carga inicial de datos en DSI";
 choices[22][3] = "A y B son correctas";
 answers[22] = choices[22][3];
 units[22] = "86";
 comments[22] = "Id Pregunta: 9754. Ambas actividades tienen una tarea llamada &quot;Especificaci&oacute;n de necesidades de Migraci&oacute;n y Carga inicial de datos&quot;";


//  Id pregunta: 9782 AÃ±o de creación de pregunta: 2014-01-01
 questions[23]= "24)  Se&ntilde;ale cu&aacute;l de las siguientes opciones est&aacute; basada en el protocolo ICMP:";
 choices[23]= new Array();
 choices[23][0] = "SMTP";
 choices[23][1] = "SNMP";
 choices[23][2] = "PING";
 choices[23][3] = "DNS ";
 answers[23] = choices[23][2];
 units[23] = "100";
 comments[23] = "Id Pregunta: 9782. Examen TIC A2 2013";


//  Id pregunta: 9784 AÃ±o de creación de pregunta: 2014-01-01
 questions[24]= "25)  En un documento XML los valores de un atributo:";
 choices[24]= new Array();
 choices[24][0] = "Deben ir siempre entre comillas.";
 choices[24][1] = "Deben ir entre comillas si no son n&uacute;meros o fechas.";
 choices[24][2] = "No deben ir entre comillas.";
 choices[24][3] = "Deben ir entre comillas si son n&uacute;meros o fechas.";
 answers[24] = choices[24][0];
 units[24] = "69";
 comments[24] = "Id Pregunta: 9784. Examen TIC A2 2013";


//  Id pregunta: 9787 AÃ±o de creación de pregunta: 2014-01-01
 questions[25]= "26)  Cual de los siguientes NO es un elemento VoiceXML 2.0:";
 choices[25]= new Array();
 choices[25][0] = "&lt;input&gt;";
 choices[25][1] = "&lt;transfer&gt; ";
 choices[25][2] = "&lt;object&gt;";
 choices[25][3] = "&lt;log&gt; ";
 answers[25] = choices[25][0];
 units[25] = "94";
 comments[25] = "Id Pregunta: 9787. Examen TIC A2 2013";


//  Id pregunta: 9795 AÃ±o de creación de pregunta: 2014-01-01
 questions[26]= "27)  Se&ntilde;ale de los siguientes el que NO es un lector de feeds RSS:";
 choices[26]= new Array();
 choices[26][0] = "Digg";
 choices[26][1] = "Feedly";
 choices[26][2] = "Mephisto";
 choices[26][3] = "Netvibes ";
 answers[26] = choices[26][2];
 units[26] = "120";
 comments[26] = "Id Pregunta: 9795. Examen TIC A2 2013";


//  Id pregunta: 9801 AÃ±o de creación de pregunta: 2014-01-01
 questions[27]= "28)  Seg&uacute;n la Ley Org&aacute;nica 15/1999 de protecci&oacute;n de datos, cuando se trata de ficheros de titularidad p&uacute;blica, el plazo para comunicar a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos la inscripci&oacute;n de ficheros en el Registro General (RGPD) es:";
 choices[27]= new Array();
 choices[27][0] = "No hace falta dicha comunicaci&oacute;n al tratarse de ficheros de titularidad p&uacute;blica. ";
 choices[27][1] = "De 10 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[27][2] = "De 3 meses desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[27][3] = "De 30 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 answers[27] = choices[27][3];
 units[27] = "29";
 comments[27] = "Id Pregunta: 9801. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9806 AÃ±o de creación de pregunta: 2014-01-01
 questions[28]= "29)  De las siguientes opciones se&ntilde;alar cu&aacute;l forma parte del contenido m&iacute;nimo que debe contener la norma que crea una sede electr&oacute;nica, de acuerdo con el Real Decreto 1671/2009, de 6 de noviembre:";
 choices[28]= new Array();
 choices[28][0] = "Relaci&oacute;n de los servicios disponibles en la sede.";
 choices[28][1] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas. ";
 choices[28][2] = "Mapa de navegaci&oacute;n de la sede electr&oacute;nica. ";
 choices[28][3] = "Carta de servicios electr&oacute;nicos.";
 answers[28] = choices[28][1];
 units[28] = "43";
 comments[28] = "Id Pregunta: 9806. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9807 AÃ±o de creación de pregunta: 2014-01-01
 questions[29]= "30)  Seg&uacute;n el Real Decreto 1671/2009, la obligatoriedad de comunicarse por medios electr&oacute;nicos con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes, en los supuestos previstos en la Ley 11/2007, podr&aacute; establecerse mediante:";
 choices[29]= new Array();
 choices[29][0] = "Ley ordinaria.";
 choices[29][1] = "Orden Ministerial.";
 choices[29][2] = "Ley org&aacute;nica.";
 choices[29][3] = "Comunicaci&oacute;n en la sede electr&oacute;nica.";
 answers[29] = choices[29][1];
 units[29] = "43";
 comments[29] = "Id Pregunta: 9807. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9808 AÃ±o de creación de pregunta: 2014-01-01
 questions[30]= "31)  Se&ntilde;alar el nombre de la aplicaci&oacute;n de generaci&oacute;n de copia aut&eacute;ntica en papel de documentos con firma electr&oacute;nica y de justificantes de firma electr&oacute;nica, que el Ministerio de Hacienda y AAPP ofrece en modelo federado:";
 choices[30]= new Array();
 choices[30][0] = "STORK";
 choices[30][1] = "eDocument";
 choices[30][2] = "eSign";
 choices[30][3] = "eVisor";
 answers[30] = choices[30][3];
 units[30] = "44";
 comments[30] = "Id Pregunta: 9808. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9812 AÃ±o de creación de pregunta: 2014-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes nombres NO se corresponde con una versi&oacute;n del sistema operativo Android?";
 choices[31]= new Array();
 choices[31][0] = "Kit Kat.";
 choices[31][1] = "Ice Cream Sandwich.";
 choices[31][2] = "Donut.";
 choices[31][3] = "Candy Marzipan.";
 answers[31] = choices[31][3];
 units[31] = "52,53,54";
 comments[31] = "Id Pregunta: 9812. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9848 AÃ±o de creación de pregunta: 2014-01-01
 questions[32]= "33)  Indique cu&aacute;l de las siguientes afirmaciones relacionadas con IPsec es FALSA:";
 choices[32]= new Array();
 choices[32][0] = "IPv6 incluye expl&iacute;citamente la posibilidad de utilizarlo.";
 choices[32][1] = "Puede operar en modo t&uacute;nel o en modo transporte.";
 choices[32][2] = "El protocolo AH proporciona confidencialidad.";
 choices[32][3] = "El protocolo ESP proporciona autenticaci&oacute;n.";
 answers[32] = choices[32][2];
 units[32] = "111";
 comments[32] = "Id Pregunta: 9848. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9849 AÃ±o de creación de pregunta: 2014-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de una DMZ (DeMilitarized Zone) o red perimetral pone en riesgo nuestra red interna?";
 choices[33]= new Array();
 choices[33][0] = "Las conexiones desde la red interna o privada a la DMZ est&aacute;n permitidas.";
 choices[33][1] = "Las conexiones desde la red externa o p&uacute;blica a la DMZ est&aacute;n permitidas.";
 choices[33][2] = "Las conexiones desde la DMZ a la red interna o privada est&aacute;n permitidas.";
 choices[33][3] = "Las conexiones desde la DMZ a la red externa o p&uacute;blica est&aacute;n permitidas.";
 answers[33] = choices[33][2];
 units[33] = "111";
 comments[33] = "Id Pregunta: 9849. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9861 AÃ±o de creación de pregunta: 2014-01-01
 questions[34]= "35)  Indique la respuesta falsa:";
 choices[34]= new Array();
 choices[34][0] = "OAuth (Open Authorization) es un protocolo abierto que permite autorizaci&oacute;n segura de una API de modo est&aacute;ndar y simple para aplicaciones de escritorio, m&oacute;viles y web.";
 choices[34][1] = "OAuth y OpenID son protocolos id&eacute;nticos. ";
 choices[34][2] = "OpenID es un est&aacute;ndar de identificaci&oacute;n digital descentralizado, con el que un usuario puede identificarse en una p&aacute;gina web a trav&eacute;s de una URL o XRI.";
 choices[34][3] = "A diferencia de arquitecturas Single Sign-On, OpenId no especifica el mecanismo de autenticaci&oacute;n.";
 answers[34] = choices[34][1];
 units[34] = "118";
 comments[34] = "Id Pregunta: 9861. Oauth y OpenID son completamente diferentes. El resto de respuestas son ciertas.";


//  Id pregunta: 9895 AÃ±o de creación de pregunta: 2014-01-01
 questions[35]= "36)  En el mapeo objeto-relacional (ORM) en el que el objeto de dominio gestiona su propia persistencia se implementa el patr&oacute;n";
 choices[35]= new Array();
 choices[35][0] = "repositorio (repository pattern).";
 choices[35][1] = "registro activo (active record).";
 choices[35][2] = "mapeador de datos (data mapper).";
 choices[35][3] = "objeto de transferencia de datos (DTO, data transfer object pattern).";
 answers[35] = choices[35][1];
 units[35] = "84";
 comments[35] = "Id Pregunta: 9895. TIC A1, Examen 2013";


//  Id pregunta: 9908 AÃ±o de creación de pregunta: 2014-01-01
 questions[36]= "37)  En M&eacute;trica v3 existe una interfaz de &quot;Aseguramiento de la Calidad&quot;. Indique la afirmaci&oacute;n correcta sobre dicho interfaz:";
 choices[36]= new Array();
 choices[36][0] = "Para cada uno de los procesos que se definen en el interfaz se establecen un conjunto de tareas que se desarrollan mediante la ejecuci&oacute;n de diversas actividades.";
 choices[36][1] = "El Grupo de Aseguramiento de la Calidad no participa en todos los procesos que se describen en el interfaz.";
 choices[36][2] = "La &quot;Constituci&oacute;n del equipo de aseguramiento de la calidad&quot; se realiza dentro del proceso de Estudio de Viabilidad del Sistema del interfaz.";
 choices[36][3] = "La aplicaci&oacute;n de dicho interfaz es de obligado cumplimiento para los organismos dependientes de la AGE, seg&uacute;n la Ley 28/2006, de 18 de julio, por la que se crea la Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de losServicios.";
 answers[36] = choices[36][2];
 units[36] = "86";
 comments[36] = "Id Pregunta: 9908. TIC A2, Examen 2013";


//  Id pregunta: 9928 AÃ±o de creación de pregunta: 2014-01-01
 questions[37]= "38)  En IPv4 el n&uacute;mero m&aacute;ximo de fragmentos por datagrama son:";
 choices[37]= new Array();
 choices[37][0] = "8192.";
 choices[37][1] = "1024.";
 choices[37][2] = "512.";
 choices[37][3] = "2048.";
 answers[37] = choices[37][0];
 units[37] = "100";
 comments[37] = "Id Pregunta: 9928. NULL";


//  Id pregunta: 9932 AÃ±o de creación de pregunta: 2014-01-01
 questions[38]= "39)  Indique la opci&oacute;n falsa:";
 choices[38]= new Array();
 choices[38][0] = "En la capa de red, el modelo OSI s&oacute;lo considera comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[38][1] = "Igualmente, en la capa de transporte se ofrece s&oacute;lo comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[38][2] = "El modelo TCP/IP en la capa de red s&oacute;lo tiene el modo sin conexi&oacute;n.";
 choices[38][3] = "Todas son verdaderas.";
 answers[38] = choices[38][0];
 units[38] = "100";
 comments[38] = "Id Pregunta: 9932. NULL";


//  Id pregunta: 9943 AÃ±o de creación de pregunta: 2014-01-01
 questions[39]= "40)  El establecimiento obligatorio de un sistema de registro de entrada de soportes que permita conocer, entre otros datos, el tipo de documento, fecha y hora, emisor y la persona autorizada responsables de la recepci&oacute;n, es una medida de seguridad de protecci&oacute;n de datos de car&aacute;cter personal de nivel";
 choices[39]= new Array();
 choices[39][0] = "b&aacute;sico.";
 choices[39][1] = "medio.";
 choices[39][2] = "alto.";
 choices[39][3] = "de auditor&iacute;a.";
 answers[39] = choices[39][1];
 units[39] = "29";
 comments[39] = "Id Pregunta: 9943. TIC A1, Examen 2013";


//  Id pregunta: 9946 AÃ±o de creación de pregunta: 2014-01-01
 questions[40]= "41)   El &quot;nivel de definici&oacute;n&quot; del modelo CMM (Capability Maturity Model) se caracteriza por:";
 choices[40]= new Array();
 choices[40][0] = "Proceso poco documentado. ";
 choices[40][1] = "Proceso de desarrollo por definir.";
 choices[40][2] = "Proceso de desarrollo integrado en la organizaci&oacute;n.";
 choices[40][3] = "Control cuantitativo de productos";
 answers[40] = choices[40][2];
 units[40] = "87";
 comments[40] = "Id Pregunta: 9946. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9947 AÃ±o de creación de pregunta: 2014-01-01
 questions[41]= "42)  &iquest;A qu&eacute; perfil de M&eacute;trica v3 pertenece el Responsable de Mantenimiento?";
 choices[41]= new Array();
 choices[41][0] = "Jefe de Proyecto";
 choices[41][1] = "Consultor";
 choices[41][2] = "Analista";
 choices[41][3] = "Programador";
 answers[41] = choices[41][0];
 units[41] = "86";
 comments[41] = "Id Pregunta: 9947. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9951 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  &iquest;Qu&eacute; practicas, seg&uacute;n M&eacute;trica v3, tienen como objetivo potenciar la participaci&oacute;nactiva de la alta direcci&oacute;n como medio para obtener los mejores resultados en elmenor tiempo posible y con una mayor calidad de los productos?";
 choices[42]= new Array();
 choices[42][0] = "Sesiones JAD. ";
 choices[42][1] = "Sesiones JRP.";
 choices[42][2] = "Entrevistas";
 choices[42][3] = "Reuniones";
 answers[42] = choices[42][1];
 units[42] = "86";
 comments[42] = "Id Pregunta: 9951. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9957 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  Para las siguientes conexiones entre elementos de un DFD (Diagrama de flujo de datos), NO es posible el flujo:";
 choices[43]= new Array();
 choices[43][0] = "Proceso-Proceso";
 choices[43][1] = "Proceso-Entidad Externa";
 choices[43][2] = "Almac&eacute;n de datos-Almac&eacute;n de datos. ";
 choices[43][3] = "Entidad Externa-Proceso";
 answers[43] = choices[43][2];
 units[43] = "81";
 comments[43] = "Id Pregunta: 9957. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9971 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  En el &aacute;mbito de SAP ERP, un Centro de Coste o CeCo:";
 choices[44]= new Array();
 choices[44][0] = "Es la unidad organizativa, dentro de una sociedad CO, que representa un emplazamiento claramente delimitado donde se producen costes.";
 choices[44][1] = "Corresponde a una posici&oacute;n en el plan de cuentas relevante para el coste.";
 choices[44][2] = "Es el nivel jer&aacute;rquico m&aacute;s alto en el Sistema SAP.";
 choices[44][3] = "Es una lista de todas las cuentas de mayor utilizadas por una o varias sociedades.";
 answers[44] = choices[44][0];
 units[44] = "65";
 comments[44] = "Id Pregunta: 9971. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9974 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  Los sistemas de gesti&oacute;n de contenidos, (CMS en ingl&eacute;s), son un tipo especial de software orientado a la creaci&oacute;n, administraci&oacute;n y distribuci&oacute;n de contenidos digitales. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta.";
 choices[45]= new Array();
 choices[45][0] = "Disponen de una interfaz que permite controlar una o varias bases de datos donde se aloja el contenido del sitio.";
 choices[45][1] = "Permiten manejar de forma independiente el contenido y el dise&ntilde;o.";
 choices[45][2] = "Permiten una gesti&oacute;n de roles de usuarios: administrador, autor, editor, lector, ...";
 choices[45][3] = "Garantizan la accesibilidad de los portales y contenidos digitales";
 answers[45] = choices[45][3];
 units[45] = "95";
 comments[45] = "Id Pregunta: 9974. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 10031 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  Indicar cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28";
 choices[46]= new Array();
 choices[46][0] = "135.26.41.94";
 choices[46][1] = "135.26.41.95";
 choices[46][2] = "135.26.41.96 ";
 choices[46][3] = "135.26.41.97";
 answers[46] = choices[46][0];
 units[46] = "100";
 comments[46] = "Id Pregunta: 10031. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10041 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  El est&aacute;ndar ANSI/TIA-942 establece distintos niveles en relaci&oacute;n a ciertos requisitos de seguridad en los Centros de Proceso de Datos (CPD). &iquest;Cu&aacute;l es el nivel m&aacute;s exigente?a) Tier 5 b) Tier 4";
 choices[47]= new Array();
 choices[47][0] = "Tier 5 ";
 choices[47][1] = "Tier 4";
 choices[47][2] = "Tier 3 ";
 choices[47][3] = "Tier 0";
 answers[47] = choices[47][1];
 units[47] = "99";
 comments[47] = "Id Pregunta: 10041. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10049 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[48]= new Array();
 choices[48][0] = "Contiene la clave privada.";
 choices[48][1] = "Cumple la sintaxis PKCS #21.";
 choices[48][2] = "Est&aacute; codificado en un formato no binario.";
 choices[48][3] = "No se puede convertir a formato .PEM.";
 answers[48] = choices[48][0];
 units[48] = "72";
 comments[48] = "Id Pregunta: 10049. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10066 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  Indicar de qu&eacute; zonas se encarga RIPE-NCC como Registro Regional de Internet (RIR):";
 choices[49]= new Array();
 choices[49][0] = "Am&eacute;rica Central, Am&eacute;rica del Norte y del Sur.";
 choices[49][1] = "Europa y Norte de &Aacute;frica.";
 choices[49][2] = "Europa, Am&eacute;rica Central y Am&eacute;rica del Sur.";
 choices[49][3] = "Europa, Oriente Medio y Asia Central.";
 answers[49] = choices[49][3];
 units[49] = "112";
 comments[49] = "Id Pregunta: 10066. TIC A2, libre, Examen 2013";


//  Id pregunta: 10072 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  El VLR en una arquitectura de red m&oacute;vil, es una base de datos:";
 choices[50]= new Array();
 choices[50][0] = "Donde est&aacute;n inscritos todos los clientes de un operador, que se utiliza para la gesti&oacute;n de abonados m&oacute;viles.";
 choices[50][1] = "Asociada a un MSC, donde se almacena informaci&oacute;n din&aacute;mica sobre los usuarios transe&uacute;ntes en el &aacute;rea geogr&aacute;fica cubierta por la MSC.";
 choices[50][2] = "Donde se guardan las identidades IMSI de los clientes junto con la clave secreta de identificaci&oacute;n de cada usuario.";
 choices[50][3] = "Que contiene las identidades de los equipos m&oacute;viles, el IMEI que permite identificar de forma inequ&iacute;voca a un terminal a escala internacional.";
 answers[50] = choices[50][1];
 units[50] = "108";
 comments[50] = "Id Pregunta: 10072. TIC A2, libre, Examen 2013";


//  Id pregunta: 10083 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo del proceso?";
 choices[51]= new Array();
 choices[51][0] = "Entorno de desarrollo";
 choices[51][1] = "Modelado de negocio";
 choices[51][2] = "Pruebas";
 choices[51][3] = "Despliegue";
 answers[51] = choices[51][0];
 units[51] = "76";
 comments[51] = "Id Pregunta: 10083. NULL";


//  Id pregunta: 10107 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  En el m&eacute;todo de acceso al medio CSMA-p, el emisor:";
 choices[52]= new Array();
 choices[52][0] = "Env&iacute;a datos en cuanto los tiene disponibles.";
 choices[52][1] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre";
 choices[52][2] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad p";
 choices[52][3] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad 1-p";
 answers[52] = choices[52][2];
 units[52] = "101";
 comments[52] = "Id Pregunta: 10107. ";


//  Id pregunta: 10119 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  En la conmutaci&oacute;n de tramas Cut-through, el switch comienza a retransmitir la trama:";
 choices[53]= new Array();
 choices[53][0] = "En cuanto ha recibido los primeros 6 bytes";
 choices[53][1] = "En cuanto ha recibido los primeros 64 bytes";
 choices[53][2] = "Cuando ha recibido toda la trama";
 choices[53][3] = "Cuando ha recibido toda la trama y ha calculado el CRC";
 answers[53] = choices[53][0];
 units[53] = "102";
 comments[53] = "Id Pregunta: 10119. En cuanto recibe la direcci&oacute;n del siguiente nodo lo reenv&iacute;a.";


//  Id pregunta: 10120 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  Los enlaces por los que se env&iacute;an datos de m&aacute;s de una VLAN se denominan:";
 choices[54]= new Array();
 choices[54][0] = "M&uacute;ltiples";
 choices[54][1] = "Trunk";
 choices[54][2] = "VLAN- Link";
 choices[54][3] = "Data-Link";
 answers[54] = choices[54][1];
 units[54] = "102";
 comments[54] = "Id Pregunta: 10120. ";


//  Id pregunta: 10123 AÃ±o de creación de pregunta: 2014-01-01
 questions[55]= "56)  Cu&aacute;l de los siguientes es un protocolo de encaminamiento externo:";
 choices[55]= new Array();
 choices[55][0] = "RIP";
 choices[55][1] = "OSPF";
 choices[55][2] = "BGP";
 choices[55][3] = "ISIS";
 answers[55] = choices[55][2];
 units[55] = "102";
 comments[55] = "Id Pregunta: 10123. ";


//  Id pregunta: 10127 AÃ±o de creación de pregunta: 2014-01-01
 questions[56]= "57)  Cu&aacute;l de las siguientes no es un &aacute;rea de gesti&oacute;n de red seg&uacute;n el modelo de ISO:";
 choices[56]= new Array();
 choices[56][0] = "Fault Mangement";
 choices[56][1] = "Configuration Management";
 choices[56][2] = "Accounting Management";
 choices[56][3] = "Improvement Management";
 answers[56] = choices[56][3];
 units[56] = "104";
 comments[56] = "Id Pregunta: 10127. ";


//  Id pregunta: 10145 AÃ±o de creación de pregunta: 2014-01-01
 questions[57]= "58)  &iquest;Qu&eacute; es el dividendo digital?";
 choices[57]= new Array();
 choices[57][0] = "Una parte del espectro radioel&eacute;ctrico que ha quedado liberada tras la implantaci&oacute;n de la TDT.";
 choices[57][1] = "Una parte del espectro digital.";
 choices[57][2] = "Una compresi&oacute;n del espectro debido a la utilizaci&oacute;n de se&ntilde;ales digitales.";
 choices[57][3] = "Una reasignaci&oacute;n de frecuencias dentro de la banda que utiliza la TDT.";
 answers[57] = choices[57][0];
 units[57] = "105";
 comments[57] = "Id Pregunta: 10145. TIC A 2011";


//  Id pregunta: 10159 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  El conjunto de especificaciones orientadas al intercambio de datos entre Administraciones P&uacute;blicas con el objetivo de eliminar los certificados administrativos en papel se denomina:";
 choices[58]= new Array();
 choices[58][0] = "SCCD";
 choices[58][1] = "SCSP";
 choices[58][2] = "Plataforma de intermedicaci&oacute;n";
 choices[58][3] = "Ninguno de los anteriores";
 answers[58] = choices[58][1];
 units[58] = "44";
 comments[58] = "Id Pregunta: 10159. ";


//  Id pregunta: 10169 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  En una base de datos Oracle, &iquest;qu&eacute; afirmaci&oacute;n es correcta en relaci&oacute;n con las vistas materializadas?";
 choices[59]= new Array();
 choices[59][0] = "La materializaci&oacute;n de una vista es llevada a cabo por el usuario mediante la exportaci&oacute;n a disco de los datos devueltos por la vista";
 choices[59][1] = "Oracle no utiliza el t&eacute;rmino de &quot;vista materializada&quot;, si no el de &quot;snapshot&quot;";
 choices[59][2] = "Se define de manera similar a una vista com&uacute;n pero, en lugar de almacenar s&oacute;lo la definici&oacute;n de la vista, almacena el resultado de la consulta";
 choices[59][3] = "Desde la versi&oacute;n 8i, la nueva caracter&iacute;stica &quot;QUERY REWRITE&quot; otorga mayor funcionalidad a las snapshots frente a las vistas materializadas";
 answers[59] = choices[59][2];
 units[59] = "58";
 comments[59] = "Id Pregunta: 10169. ";


//  Id pregunta: 10170 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  &iquest;En qu&eacute; escenarios puede ser &uacute;til una vista materializada de Oracle?";
 choices[60]= new Array();
 choices[60][0] = "Funcionamiento de aplicaciones sin conexi&oacute;n";
 choices[60][1] = "Reducir tr&aacute;fico de red y desplazar carga soportada por un servidor de base de datos corporativo hacia servidores de bases de datos en delegaciones";
 choices[60][2] = "Replicar informaci&oacute;n restringi&eacute;ndola al &aacute;rea geogr&aacute;fica de inter&eacute;s";
 choices[60][3] = "Todas las anteriores";
 answers[60] = choices[60][3];
 units[60] = "58";
 comments[60] = "Id Pregunta: 10170. ";


//  Id pregunta: 10199 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  &iquest;Qu&eacute; grupo de trabajo del IEEE estandariza el mecanismo de seguridad WPA2 (Wireless Protective Access 2)?";
 choices[61]= new Array();
 choices[61][0] = "802.11f";
 choices[61][1] = "802.11h";
 choices[61][2] = "802.11i";
 choices[61][3] = "802.11r";
 answers[61] = choices[61][2];
 units[61] = "107";
 comments[61] = "Id Pregunta: 10199. NULL";


//  Id pregunta: 10208 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto del m&eacute;todo de c&aacute;lculo de la rentabilidad de una inversi&oacute;n llamado &Iacute;ndice de rentabilidad";
 choices[62]= new Array();
 choices[62][0] = "Es un m&eacute;todo est&aacute;tico";
 choices[62][1] = "La inversi&oacute;n es rentable si el &iacute;ndice es mayor que cero";
 choices[62][2] = "Si el &iacute;ndice es mayor que uno, entonces es rentable";
 choices[62][3] = "Ninguna de las anteriores respuestas es verdadera";
 answers[62] = choices[62][2];
 units[62] = "38";
 comments[62] = "Id Pregunta: 10208. El &iacute;ndice de rentabilidad (IR) es un m&eacute;todo din&aacute;mico que se calcula como IR = ValorActualCobros / ValorActualPagos. Si IR &gt; 1, la inversi&oacute;n es rentable";


//  Id pregunta: 10211 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  Respecto a las alternativas de suministro de equipamiento hardware, &iquest;a qu&eacute; cap&iacute;tulo presupuestario se imputar&iacute;a el arrendamiento de equipos sin opci&oacute;n a compra?";
 choices[63]= new Array();
 choices[63][0] = "Cap&iacute;tulo 1";
 choices[63][1] = "Cap&iacute;tulo 2";
 choices[63][2] = "Cap&iacute;tulo 4";
 choices[63][3] = "Cap&iacute;tulo 6";
 answers[63] = choices[63][1];
 units[63] = "35";
 comments[63] = "Id Pregunta: 10211. ";


//  Id pregunta: 10223 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  Teniendo las siguientes sentencias, el resultado ser&aacute;:byte b1 = 126, b2 = 1;byte b3 = b1 + b2;System.out.println(&quot;b3 vale: &quot; + b3);";
 choices[64]= new Array();
 choices[64][0] = "127";
 choices[64][1] = "Da error, ya que se supera el valor m&aacute;ximo que admite un dato de tipo byte";
 choices[64][2] = "Da error y no compila ya que b3 deber&iacute;a ser de tipo int";
 choices[64][3] = "Da error ya que las variables est&aacute;n mal declaradas";
 answers[64] = choices[64][2];
 units[64] = "60";
 comments[64] = "Id Pregunta: 10223. La suma de la segunda l&iacute;nea solo acepta int. Si se suman bytes debe hacerse casting.";


//  Id pregunta: 10230 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Se&ntilde;ala el m&eacute;todo que es usado para obtener un par&aacute;metro de inicializaci&oacute;n desde ServletContext:";
 choices[65]= new Array();
 choices[65][0] = "Object getInitParameter(int index)";
 choices[65][1] = "Object getInitParameter(String name)";
 choices[65][2] = "String getInitParameter(String name)";
 choices[65][3] = "String getParameter(String name)";
 answers[65] = choices[65][2];
 units[65] = "116";
 comments[65] = "Id Pregunta: 10230. NULL";


//  Id pregunta: 10232 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  &iquest;Cual de las siguientes clases o interfaces es usado para recuperar informaci&oacute;n de la sesi&oacute;n asociada con el usuario?:";
 choices[66]= new Array();
 choices[66][0] = "GenericServlet";
 choices[66][1] = "ServletConfig";
 choices[66][2] = "ServletContext";
 choices[66][3] = "HttpServletRequest";
 answers[66] = choices[66][3];
 units[66] = "116";
 comments[66] = "Id Pregunta: 10232. NULL";


//  Id pregunta: 10245 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio realiza modificaciones al mismo y distribuye los archivos binarios desde su web site. &iquest;Cu&aacute;l de las siguientes opciones cumple con las obligaciones de Antonio sobre distribuir el c&oacute;digo fuente del software modificado?I) Puede distribuir el c&oacute;digo fuente original de Juan, mateniendo las notificaciones de copyrightII) Puede distribuir el c&oacute;digo fuente junto a los binariosIII) Puede distribuir los parches aplicados al c&oacute;digo fuente originalIV) Puede distribuir los parches aplicados al c&oacute;digo fuente original, junto con &eacute;ste";
 choices[67]= new Array();
 choices[67][0] = "I o II, y nada m&aacute;s";
 choices[67][1] = "S&oacute;lo II";
 choices[67][2] = "II o IV, pero nada m&aacute;s";
 choices[67][3] = "Cualquiera de las 4";
 answers[67] = choices[67][2];
 units[67] = "61";
 comments[67] = "Id Pregunta: 10245. ";


//  Id pregunta: 10260 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Si se deniega al interesado el ejercicio de su derecho de cancelaci&oacute;n de datos de car&aacute;cter personal, &eacute;ste puede:";
 choices[68]= new Array();
 choices[68][0] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso de alzada";
 choices[68][1] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso contencioso-administrativo";
 choices[68][2] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos cuyos actos no son recurribles ni en v&iacute;a administrativa ni judicial";
 choices[68][3] = "Todas son incorrectas";
 answers[68] = choices[68][1];
 units[68] = "29";
 comments[68] = "Id Pregunta: 10260. Art&iacute;culo 18.2 y 18.4 de la Ley 15/1999";


//  Id pregunta: 10306 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de estas instrucciones NO vac&iacute;a el contenido del fichero con nombre 2013 en Linux?";
 choices[69]= new Array();
 choices[69][0] = "true &gt; 2013";
 choices[69][1] = "&gt; 2013";
 choices[69][2] = "cat /dev/null &gt; 2013";
 choices[69][3] = "| &gt; 2013";
 answers[69] = choices[69][3];
 units[69] = "53";
 comments[69] = "Id Pregunta: 10306. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10310 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment (SATA) Revision 3.0 es de hasta:";
 choices[70]= new Array();
 choices[70][0] = "300 MB/s.";
 choices[70][1] = "900 MB/s.";
 choices[70][2] = "600 MB/s.";
 choices[70][3] = "150 MB/s.";
 answers[70] = choices[70][2];
 units[70] = "48";
 comments[70] = "Id Pregunta: 10310. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10320 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo SNMP?";
 choices[71]= new Array();
 choices[71][0] = "110";
 choices[71][1] = "119";
 choices[71][2] = "161";
 choices[71][3] = "25";
 answers[71] = choices[71][2];
 units[71] = "104";
 comments[71] = "Id Pregunta: 10320. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10322 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;Cual lenguage escoger&iacute;a para desarrollar la capa de presentaci&oacute;n?";
 choices[72]= new Array();
 choices[72][0] = "Pl/sql";
 choices[72][1] = "Queryscript";
 choices[72][2] = "Jquery";
 choices[72][3] = "PyScripter";
 answers[72] = choices[72][2];
 units[72] = "114";
 comments[72] = "Id Pregunta: 10322. PyScripter es un entorno de desarrollo, no un lenguaje";


//  Id pregunta: 10346 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Qu&eacute; nombre recibe la tecnolog&iacute;a de Gesti&oacute;n de derechos digitales creada por la compa&ntilde;&iacute;a Apple?";
 choices[73]= new Array();
 choices[73][0] = "FairPlay";
 choices[73][1] = "Apple Verisign";
 choices[73][2] = "Apple DRM";
 choices[73][3] = "Apple Store DRM";
 answers[73] = choices[73][0];
 units[73] = "37";
 comments[73] = "Id Pregunta: 10346. Se usa desde la tienda online iTunes Store para ser reproducido en iPod e iTunes";


//  Id pregunta: 10352 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de evaluaci&oacute;n autom&aacute;tica de la accesibilidad de p&aacute;ginas web?";
 choices[74]= new Array();
 choices[74][0] = "ZEUS";
 choices[74][1] = "HERA";
 choices[74][2] = "BOBBY";
 choices[74][3] = "TAW";
 answers[74] = choices[74][0];
 units[74] = "39";
 comments[74] = "Id Pregunta: 10352. Otras herramientas pueden ser eXaminator, Wave o EvalAccess";


//  Id pregunta: 10353 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l es el &aacute;mbito de aplicaci&oacute;n del Real Decreto 1494/2007 de accesibilidad a la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social?";
 choices[75]= new Array();
 choices[75][0] = "Los portales web de la Administraciones P&uacute;blicas";
 choices[75][1] = "Administraciones P&uacute;blicas, operadores de telecomunicaciones, prestadores de servicios de la sociedad de la informaci&oacute;n, y medios de comunicaci&oacute;n social";
 choices[75][2] = "Administraciones P&uacute;blicas y medios de comunicaci&oacute;n social, ya que los operadores de telecomunicaciones se rigen por lo dispuesto en la Ley General de Telecomunicaciones";
 choices[75][3] = "Es el mismo que se establece en la norma UNE 139803:2012";
 answers[75] = choices[75][1];
 units[75] = "39";
 comments[75] = "Id Pregunta: 10353. Consultar Art. 2 del Real Decreto";


//  Id pregunta: 10356 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;C&uacute;al de los siguientes no es un principio del programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas)?";
 choices[76]= new Array();
 choices[76][0] = "Neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad";
 choices[76][1] = "Reutilizaci&oacute;n";
 choices[76][2] = "Privacidad y protecci&oacute;n de los datos personales";
 choices[76][3] = "Fomento del uso de software libre y sistemas abiertos";
 answers[76] = choices[76][3];
 units[76] = "40";
 comments[76] = "Id Pregunta: 10356. El programa ISA se basa en los siguientes principios: neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad, apertura, reutilizaci&oacute;n, privacidad y protecci&oacute;n de los datos personales, seguridad";


//  Id pregunta: 10358 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes no es un principio del Marco Europeo de Interopeabilidad?";
 choices[77]= new Array();
 choices[77][0] = "Multiling&uuml;ismo";
 choices[77][1] = "Accesibilidad";
 choices[77][2] = "Empleo de soluciones de software libre";
 choices[77][3] = "Uso de est&aacute;ndares abiertos";
 answers[77] = choices[77][2];
 units[77] = "40";
 comments[77] = "Id Pregunta: 10358. Los ocho principios que define el Marco Europeo de Interoperabilidad son: Accesibilidad, Multiling&uuml;ismo, Seguridad, Protecci&oacute;n de datos de car&aacute;cter personal, Subsidiariedad, Uso de est&aacute;ndares abiertos, Valorar los beneficios de software de fuentes abierta";


//  Id pregunta: 10375 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  La rotura de la m&aacute;quina de cifrado Enigma es un ejemplo de:";
 choices[78]= new Array();
 choices[78][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[78][1] = "Cifrado C&eacute;sar";
 choices[78][2] = "Criptoan&aacute;lisis";
 choices[78][3] = "Criptograf&iacute;a cu&aacute;ntica";
 answers[78] = choices[78][2];
 units[78] = "72";
 comments[78] = "Id Pregunta: 10375. ";


//  Id pregunta: 10431 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En la arquitectura SOA (Arquitectura Orientada a Servicios)";
 choices[79]= new Array();
 choices[79][0] = "se hace incompatible el uso de servicios web.";
 choices[79][1] = "los servicios encapsulan sus funcionalidades. ";
 choices[79][2] = "los servicios mantienen un fuerte acoplamiento.";
 choices[79][3] = "os servicios dependen fuertemente de la plataforma subyacente.";
 answers[79] = choices[79][1];
 units[79] = "51";
 comments[79] = "Id Pregunta: 10431. Examen TIC A1 2013";


//  Id pregunta: 10433 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En una base de datos Oracle, &iquest;cu&aacute;l de las siguientes sentencias no est&aacute; relacionada con la asignaci&oacute;n de permisos a usuarios? ";
 choices[80]= new Array();
 choices[80][0] = "CREATE VIEW.";
 choices[80][1] = "GRANT.";
 choices[80][2] = "CREATE PROFILE.";
 choices[80][3] = "CREATE ROLE.";
 answers[80] = choices[80][0];
 units[80] = "58";
 comments[80] = "Id Pregunta: 10433. Examen TIC A1 2013";


//  Id pregunta: 10435 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Existe un Estatuto espec&iacute;fico del personal directivo de la Administraci&oacute;n General del Estado? ";
 choices[81]= new Array();
 choices[81][0] = "S&iacute;. El Estatuto B&aacute;sico del Empleado P&uacute;blico.";
 choices[81][1] = "S&iacute;. La Ley de Altos Cargos de la Administraci&oacute;n General del Estado.";
 choices[81][2] = "No. A&uacute;n no se ha desarrollado la previsi&oacute;n del Estatuto B&aacute;sico del Empleado P&uacute;blico a este respecto.";
 choices[81][3] = "No existe, porque no est&aacute; normativamente previsto.";
 answers[81] = choices[81][2];
 units[81] = "24";
 comments[81] = "Id Pregunta: 10435. Examen TIC A1 2013";


//  Id pregunta: 10444 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas sobre las redes GPRS es FALSA?";
 choices[82]= new Array();
 choices[82][0] = "Puede alcanzar velocidades de hasta 236 kbps de descarga. ";
 choices[82][1] = "Son redes orientadas a conexi&oacute;n.";
 choices[82][2] = "Pueden ofrecer servicios de mensajer&iacute;a instant&aacute;nea.";
 choices[82][3] = "Ofrecen servicios de transmisi&oacute;n digital de datos.";
 answers[82] = choices[82][1];
 units[82] = "108";
 comments[82] = "Id Pregunta: 10444. Examen TIC A1 2013";


//  Id pregunta: 10450 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el &aacute;mbito de la continuidad de negocio, la &quot;ventana de interrupci&oacute;n&quot; se define como:";
 choices[83]= new Array();
 choices[83][0] = "La cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[83][1] = "El tiempo que una organizaci&oacute;n puede esperar desde el punto de fallo hasta la restauraci&oacute;n de los servicios o aplicaciones cr&iacute;ticas.";
 choices[83][2] = "Se determina en funci&oacute;n de la p&eacute;rdida de datos aceptable en caso de interrupci&oacute;n de las operaciones ";
 choices[83][3] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 answers[83] = choices[83][1];
 units[83] = "97";
 comments[83] = "Id Pregunta: 10450. NULL";


//  Id pregunta: 10462 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Respecto a REST, indique qu&eacute; afirmaci&oacute;n es falsa:";
 choices[84]= new Array();
 choices[84][0] = "Permite una generalizaci&oacute;n de las interfaces entre recursos.";
 choices[84][1] = "Facilita el desarrollo de los clientes de los servicios.";
 choices[84][2] = "Su uso est&aacute; indicado para aplicaciones en las que la gesti&oacute;n del estado es compleja.";
 choices[84][3] = "La funcionalidad de las aplicaciones se representa mediante recursos.";
 answers[84] = choices[84][2];
 units[84] = "51";
 comments[84] = "Id Pregunta: 10462. ";


//  Id pregunta: 10466 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; tecnolog&iacute;as agrupa HTML5?";
 choices[85]= new Array();
 choices[85][0] = "HTML+Javascript";
 choices[85][1] = "HTML+CSS3+Flash";
 choices[85][2] = "HTML+CSS3+Javascript";
 choices[85][3] = "HTML+CSS3";
 answers[85] = choices[85][2];
 units[85] = "69";
 comments[85] = "Id Pregunta: 10466. NULL";


//  Id pregunta: 10467 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l es el DOCTYPE que se usa en HTML5?";
 choices[86]= new Array();
 choices[86][0] = "&lt;!DOCTYPE html&gt;";
 choices[86][1] = "&lt;!DOCTYPE html5&gt;";
 choices[86][2] = "&lt;!DOCTYPE&gt; y &lt;!DOCTYPE html5&gt;";
 choices[86][3] = "&lt;!DOCTYPE html&gt; y &lt;!DOCTYPE html5&gt;";
 answers[86] = choices[86][0];
 units[86] = "69";
 comments[86] = "Id Pregunta: 10467. NULL";


//  Id pregunta: 10484 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;En qu&eacute; se basa el &eacute;todo de Karner?";
 choices[87]= new Array();
 choices[87][0] = "En la estimaci&oacute;n del esfuerzo por puntos de casos de uso en vez de puntos de funci&oacute;n";
 choices[87][1] = "En determinar las constantes a, b, c y de del m&eacute;todo de Putnam";
 choices[87][2] = "Se aplica en Cocomo semipesado";
 choices[87][3] = "Variante del m&eacute;todo Mark II";
 answers[87] = choices[87][0];
 units[87] = "89";
 comments[87] = "Id Pregunta: 10484. NULL";


//  Id pregunta: 10497 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Se puede filtrar el tr&aacute;fico, mediante un firewall de nivel 3, entre dos m&aacute;quinas situadas en la misma LAN?";
 choices[88]= new Array();
 choices[88][0] = "Si";
 choices[88][1] = "No";
 choices[88][2] = "Depende de la configuraci&oacute;n del FW";
 choices[88][3] = "Depende de la configuraci&oacute;n de la LAN";
 answers[88] = choices[88][1];
 units[88] = "111";
 comments[88] = "Id Pregunta: 10497. Por definici&oacute;n, un FW de nivel 3 solo puede cortar tr&aacute;fico a ese nivel. Por otro lado, 2 m&aacute;quinas situadas en la misma LAN se encuentran conectadas a nivel 2 y por tanto no es posible el filtrado de tr&aacute;fico a nivel 3 dentro de una misma LAN. En el caso de";


//  Id pregunta: 10501 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cual de las siguientes etiquetas fue introducida en HTML5?";
 choices[89]= new Array();
 choices[89][0] = "&lt;head&gt;";
 choices[89][1] = "&lt;video&gt;";
 choices[89][2] = "&lt;music&gt;";
 choices[89][3] = "&lt;background&gt;";
 answers[89] = choices[89][1];
 units[89] = "69";
 comments[89] = "Id Pregunta: 10501. http://es.wikipedia.org/wiki/HTML5";


//  Id pregunta: 10513 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cual de los siguientes no es un tipo de tr&aacute;fico de ATM?";
 choices[90]= new Array();
 choices[90][0] = "UBR";
 choices[90][1] = "VBR";
 choices[90][2] = "SBR";
 choices[90][3] = "CBR";
 answers[90] = choices[90][2];
 units[90] = "109";
 comments[90] = "Id Pregunta: 10513. NULL";


//  Id pregunta: 10517 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Cu&aacute;l es el plazo m&aacute;ximo en el cual Registro de Operadores dictar&aacute;n resoluci&oacute;n motivada cuando constate que una notificaci&oacute;n no re&uacute;ne los requisitos establecidos:";
 choices[91]= new Array();
 choices[91][0] = "10 d&iacute;as";
 choices[91][1] = "15 d&iacute;as";
 choices[91][2] = "1 mes";
 choices[91][3] = "3 meses";
 answers[91] = choices[91][1];
 units[91] = "110";
 comments[91] = "Id Pregunta: 10517. ";


//  Id pregunta: 10523 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  A cu&aacute;l de los siguientes organismos corresponde la gesti&oacute;n del registro de los nombres y direcciones de dominio de internet bajo el c&oacute;digo de pa&iacute;s correspondiente a Espa&ntilde;a (.es):";
 choices[92]= new Array();
 choices[92][0] = "El Gobierno";
 choices[92][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[92][2] = "Red.es";
 choices[92][3] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n";
 answers[92] = choices[92][2];
 units[92] = "110";
 comments[92] = "Id Pregunta: 10523. ";


//  Id pregunta: 10526 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Seg&uacute;n la taxonomia de Flynn, un procesador vectorial ser&iacute;a considerado como";
 choices[93]= new Array();
 choices[93][0] = "SISD";
 choices[93][1] = "SIMD";
 choices[93][2] = "MISD";
 choices[93][3] = "MIMD";
 answers[93] = choices[93][1];
 units[93] = "45";
 comments[93] = "Id Pregunta: 10526. NULL";


//  Id pregunta: 10529 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  Ordene los siguientes dispositivos seg&uacute;n velocidad de transferencia, de menor a mayor:";
 choices[94]= new Array();
 choices[94][0] = "FireWire 800 &lt; USB 2.0 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[94][1] = "USB 2.0 &lt; FireWire 800 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[94][2] = "FireWire 800 &lt; USB 2.0 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 choices[94][3] = "USB 2.0 &lt; FireWire 800 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 answers[94] = choices[94][1];
 units[94] = "46";
 comments[94] = "Id Pregunta: 10529. NULL";


//  Id pregunta: 10537 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  &iquest;Qu&eacute; combinaci&oacute;n de discos RAID presenta un mayor rendimiento?";
 choices[95]= new Array();
 choices[95][0] = "RAID 0";
 choices[95][1] = "RAID 5";
 choices[95][2] = "RAID 1+0";
 choices[95][3] = "RAID 0+1";
 answers[95] = choices[95][0];
 units[95] = "48";
 comments[95] = "Id Pregunta: 10537. NULL";


//  Id pregunta: 10544 AÃ±o de creación de pregunta: 2014-01-01
 questions[96]= "97)  El quince de febrero de 2013 el Consejo de Ministros aprob&oacute; la Agenda Digital para Espa&ntilde;a como la estrategia del Gobierno para desarrollar la econom&iacute;a y la sociedad digital en Espa&ntilde;a durante el periodo 2013-2015.";
 choices[96]= new Array();
 choices[96][0] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Telecomunicaciones y de Sociedad de la Informaci&oacute;n. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[96][1] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Telecomunicaciones y de Sociedad de la Informaci&oacute;n. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[96][2] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Administraci&oacute;n Electr&oacute;nica. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[96][3] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Administraci&oacute;n Electr&oacute;nica. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 answers[96] = choices[96][0];
 units[96] = "30";
 comments[96] = "Id Pregunta: 10544. http://www.agendadigital.gob.es/agenda-digital/Paginas/agenda-digital.aspx";


//  Id pregunta: 10546 AÃ±o de creación de pregunta: 2014-01-01
 questions[97]= "98)  NO es uno de los 10 objetivos de la Estrategia 2011-2015 del Plan Avanza 2...";
 choices[97]= new Array();
 choices[97][0] = "Promover procesos innovadores TIC en las AAPP";
 choices[97][1] = "Incrementar el uso avanzado de servicios digitales por la ciudadan&iacute;a";
 choices[97][2] = "Promover el uso de las TIC en todos los niveles administrativos";
 choices[97][3] = "Extender el uso de soluciones TIC de negocio en la empresa";
 answers[97] = choices[97][2];
 units[97] = "30";
 comments[97] = "Id Pregunta: 10546. https://www.planavanza.es/informaciongeneral/estrategia2011/Paginas/Estrategia2011_2015.aspx";


//  Id pregunta: 10553 AÃ±o de creación de pregunta: 2014-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes satisface una autenticaci&oacute;n de usuario de dos factores?";
 choices[98]= new Array();
 choices[98][0] = "Escaneo de iris y de huella dactilar";
 choices[98][1] = "Identificador de usuario y sistema GPS";
 choices[98][2] = "Smartcard que requiere un c&oacute;digo PIN";
 choices[98][3] = "Identificador de usuario m&aacute;s contrase&ntilde;a";
 answers[98] = choices[98][2];
 units[98] = "31, 32, 33";
 comments[98] = "Id Pregunta: 10553. Algo que  tienes (smartcard) + algo que conoces (c&oacute;digo PIN)";


//  Id pregunta: 10567 AÃ±o de creación de pregunta: 2014-01-01
 questions[99]= "100)  Un local para el procesamiento de la informaci&oacute;n que dispone de energ&iacute;a el&eacute;ctrica suficiente, refrigeraci&oacute;n y suelo t&eacute;cnico, paneles, puertas, etc. se denomina en al argot de la Continuidad de Negocio:";
 choices[99]= new Array();
 choices[99][0] = "Un &quot;cold-Site&quot; o sitio en fr&iacute;o";
 choices[99][1] = "Un &quot;warm-Site&quot; o sitio tibio";
 choices[99][2] = "Un &quot;Hot-Site&quot; o sitio en caliente";
 choices[99][3] = "Un CPD duplicado &quot;Dupplicate Processing Site&quot;";
 answers[99] = choices[99][0];
 units[99] = "32";
 comments[99] = "Id Pregunta: 10567. ";


