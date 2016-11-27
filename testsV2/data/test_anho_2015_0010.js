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

//  Id pregunta: 10576 AÃ±o de creación de pregunta: 2015-01-01
 questions[0]= "1)  Elija la respuesta incorrecta:";
 choices[0]= new Array();
 choices[0][0] = "La utilizaci&oacute;n de infraestructuras y servicios comunes proporciona mayor agilidad en el desarrollo y despliegue de servicios.";
 choices[0][1] = "Las Administraciones P&uacute;blicas pueden utilizar cualquier tecnolog&iacute;a de la informaci&oacute;n en sus relaciones con los ciudadanos.";
 choices[0][2] = "El Comit&eacute; Sectorial de la Administraci&oacute;n Electr&oacute;nica asegura la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[0][3] = "Existe un directorio general de aplicaciones para su reutilizaci&oacute;n en la AGE.";
 answers[0] = choices[0][1];
 units[0] = "44";
 comments[0] = "Id Pregunta: 10576. Art&iacute;culo 41, Ley 11/2007: deben evitar discriminaci&oacute;n.";


//  Id pregunta: 10580 AÃ±o de creación de pregunta: 2015-01-01
 questions[1]= "2)  No es objetivo de la Ley 11/2007:";
 choices[1]= new Array();
 choices[1][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[1][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[1][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[1][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[1] = choices[1][2];
 units[1] = "43";
 comments[1] = "Id Pregunta: 10580. ";


//  Id pregunta: 10609 AÃ±o de creación de pregunta: 2015-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de estas es la codificaci&oacute;n en formato binario de un certificado X.509v3?";
 choices[2]= new Array();
 choices[2][0] = "DER";
 choices[2][1] = "CERT";
 choices[2][2] = "PEM";
 choices[2][3] = "Ninguno de los anteriores.";
 answers[2] = choices[2][0];
 units[2] = "73";
 comments[2] = "Id Pregunta: 10609. ";


//  Id pregunta: 10635 AÃ±o de creación de pregunta: 2015-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de estas publicaciones no pertenece a ITILv3?";
 choices[3]= new Array();
 choices[3][0] = "Mejora continua del servicio";
 choices[3][1] = "Evoluci&oacute;n del Servicio";
 choices[3][2] = "Dise&ntilde;o del Servicio";
 choices[3][3] = "Operaci&oacute;n del Servicio";
 answers[3] = choices[3][1];
 units[3] = "98";
 comments[3] = "Id Pregunta: 10635. ";


//  Id pregunta: 10685 AÃ±o de creación de pregunta: 2015-01-01
 questions[4]= "5)  Seg&uacute;n la Ley 39/2015, para cual de estas actuaciones no es necesar&iacute;a la firma electr&oacute;nica.";
 choices[4]= new Array();
 choices[4][0] = "Iniciar un procedimiento.";
 choices[4][1] = "Interponer un recurso.";
 choices[4][2] = "Desistir de acciones.";
 choices[4][3] = "Renunciar a derechos.";
 answers[4] = choices[4][0];
 units[4] = "30";
 comments[4] = "Id Pregunta: 10685. ";


//  Id pregunta: 10692 AÃ±o de creación de pregunta: 2015-01-01
 questions[5]= "6)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[5]= new Array();
 choices[5][0] = "&Uacute;nicamente para la Administraci&oacute;n General del Estado.";
 choices[5][1] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[5][2] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas,  Administraci&oacute;n Local y Sector P&uacute;blico Institucional.";
 choices[5][3] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas,  Administraci&oacute;n Local,  Sector P&uacute;blico Institucional y Corporaciones de Derecho P&uacute;blico.";
 answers[5] = choices[5][2];
 units[5] = "30";
 comments[5] = "Id Pregunta: 10692. ";


//  Id pregunta: 10729 AÃ±o de creación de pregunta: 2015-01-01
 questions[6]= "7)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas &iquest;cual de los siguientes no es un tipo de Punto de Presencia (PdP) de la Red SARA?";
 choices[6]= new Array();
 choices[6][0] = "Centros externos de monitorizaci&oacute;n.";
 choices[6][1] = "Prestadores de servicios de certificaci&oacute;n.";
 choices[6][2] = "Otros: como son las Ventanillas &Uacute;nicas Empresariales.";
 choices[6][3] = "Todos los anteriores son tipos de PdP.";
 answers[6] = choices[6][3];
 units[6] = "43";
 comments[6] = "Id Pregunta: 10729. ";


//  Id pregunta: 10755 AÃ±o de creación de pregunta: 2015-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes no se incluye en la Estructura Org&aacute;nica definida en la Estrategia de Ciberseguridad Nacional?";
 choices[7]= new Array();
 choices[7][0] = "El Consejo de Seguridad Nacional.";
 choices[7][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[7][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[7][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[7] = choices[7][3];
 units[7] = "43";
 comments[7] = "Id Pregunta: 10755. ";


//  Id pregunta: 10764 AÃ±o de creación de pregunta: 2015-01-01
 questions[8]= "9)  &iquest;Qu&eacute; rango tiene la La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones?";
 choices[8]= new Array();
 choices[8][0] = "Subsecretar&iacute;a de Estado";
 choices[8][1] = "Secretar&iacute;a de Estado";
 choices[8][2] = "Direcci&oacute;n General";
 choices[8][3] = "Direcci&oacute;n General T&eacute;cnica";
 answers[8] = choices[8][0];
 units[8] = "24";
 comments[8] = "Id Pregunta: 10764. ";


//  Id pregunta: 10765 AÃ±o de creación de pregunta: 2015-01-01
 questions[9]= "10)  &iquest;Qu&eacute; car&aacute;cter tiene el informe t&eacute;cnico de la memoria y los pliegos de prescripciones t&eacute;cnicas para la contrataci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n?";
 choices[9]= new Array();
 choices[9][0] = "Preceptivo";
 choices[9][1] = "Potestativo";
 choices[9][2] = "Informativo";
 choices[9][3] = "Recomendaci&oacute;n";
 answers[9] = choices[9][0];
 units[9] = "24";
 comments[9] = "Id Pregunta: 10765. ";


//  Id pregunta: 10766 AÃ±o de creación de pregunta: 2015-01-01
 questions[10]= "11)  &iquest;Qu&eacute; plazo se establece para la realizaci&oacute;n del informe t&eacute;cnico de la memoria y los pliegos de prescripciones t&eacute;cnicas para la contrataci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n?";
 choices[10]= new Array();
 choices[10][0] = "1 mes";
 choices[10][1] = "20 d&iacute;as";
 choices[10][2] = "10 d&iacute;as";
 choices[10][3] = "3 meses";
 answers[10] = choices[10][2];
 units[10] = "24";
 comments[10] = "Id Pregunta: 10766. ";


//  Id pregunta: 10769 AÃ±o de creación de pregunta: 2015-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es un principio de la Estrategia TIC del Gobierno Espa&ntilde;ol?";
 choices[11]= new Array();
 choices[11][0] = "Orientaci&oacute;n al usuario del servicio";
 choices[11][1] = "Unidad y visi&oacute;n integral";
 choices[11][2] = "Colaboraci&oacute;n y alianzas";
 choices[11][3] = "Eficiencia";
 answers[11] = choices[11][3];
 units[11] = "24";
 comments[11] = "Id Pregunta: 10769. ";


//  Id pregunta: 10770 AÃ±o de creación de pregunta: 2015-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes no es un objetivo estrat&eacute;gico del Plan de Transformaci&oacute;n Digital?";
 choices[12]= new Array();
 choices[12][0] = "Incremento de la productividad y eficacia en el funcionamiento interno de la Administraci&oacute;n";
 choices[12][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n";
 choices[12][2] = "Mayor eficiencia en la prestaci&oacute;n de los servicios TIC en el seno de la Administraci&oacute;n";
 choices[12][3] = "Estrategia corporativa de interoperabilidad";
 answers[12] = choices[12][3];
 units[12] = "24";
 comments[12] = "Id Pregunta: 10770. ";


//  Id pregunta: 10775 AÃ±o de creación de pregunta: 2015-01-01
 questions[13]= "14)  Se&ntilde;ale qu&eacute; medida es necesario adoptar en ficheros y tratamientos automatizados para establecer el nivel de seguridad medio seg&uacute;n se establece en el Real Decreto 1720/2007:";
 choices[13]= new Array();
 choices[13][0] = "Control de acceso: Los usuarios tendr&aacute;n acceso &uacute;nicamente a aquellos recursos que precisen para el desarrollo de sus funciones.";
 choices[13][1] = "Identificaci&oacute;n y autenticaci&oacute;n: El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[13][2] = "Telecomunicaciones: La transmisi&oacute;n de datos de car&aacute;cter personal a trav&eacute;s de redes p&uacute;blicas o redes inal&aacute;mbricas de comunicaciones electr&oacute;nicas se realizar&aacute; cifrando dichos datos o bien utilizando cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros.";
 choices[13][3] = "Registro de accesos: De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado.";
 answers[13] = choices[13][1];
 units[13] = "29";
 comments[13] = "Id Pregunta: 10775. Examen GSI 2014";


//  Id pregunta: 10787 AÃ±o de creación de pregunta: 2015-01-01
 questions[14]= "15)  La m&aacute;quina virtual usada por el sistema operativo Android en versiones anteriores a la 4.4, se denomina:";
 choices[14]= new Array();
 choices[14][0] = "ART.";
 choices[14][1] = "Dalvik.";
 choices[14][2] = "Java VM. ";
 choices[14][3] = "APK.";
 answers[14] = choices[14][1];
 units[14] = "52";
 comments[14] = "Id Pregunta: 10787. Examen GSI 2014";


//  Id pregunta: 10796 AÃ±o de creación de pregunta: 2015-01-01
 questions[15]= "16)  El comando utilizado en el lenguaje de programaci&oacute;n Objective-C para imprimir mensajes en pantalla es:";
 choices[15]= new Array();
 choices[15][0] = "NSLog";
 choices[15][1] = "WRLog";
 choices[15][2] = "Writeln";
 choices[15][3] = "Printline";
 answers[15] = choices[15][0];
 units[15] = "0";
 comments[15] = "Id Pregunta: 10796. Examen GSI 2014";


//  Id pregunta: 10822 AÃ±o de creación de pregunta: 2015-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de las siguientes reglas puede aplicarse para determinar el esfuerzo total de un proyecto en la fase de estimaci&oacute;n del mismo?";
 choices[16]= new Array();
 choices[16][0] = "Regla del 80-20.";
 choices[16][1] = "Regla del 30-40-30.";
 choices[16][2] = "Regla del 40-20-40.";
 choices[16][3] = "Regla del 20-60-20.";
 answers[16] = choices[16][2];
 units[16] = "28, 89";
 comments[16] = "Id Pregunta: 10822. Examen GSI 2014";


//  Id pregunta: 10825 AÃ±o de creación de pregunta: 2015-01-01
 questions[17]= "18)  Indicar cu&aacute;l de los siguientes diagramas se emplea para capturar los requisitos funcionales de un sistema y expresarlos desde el punto de vista del usuario seg&uacute;n M&eacute;trica v3:";
 choices[17]= new Array();
 choices[17][0] = "Diagrama de secuencia.";
 choices[17][1] = "Diagrama de colaboraci&oacute;n.";
 choices[17][2] = "Diagrama de clases.";
 choices[17][3] = "Diagrama de Casos de Uso.";
 answers[17] = choices[17][3];
 units[17] = "86, 82, 84";
 comments[17] = "Id Pregunta: 10825. Examen GSI 2014";


//  Id pregunta: 10830 AÃ±o de creación de pregunta: 2015-01-01
 questions[18]= "19)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre la arquitectura ANSI/SPARC es correcta:";
 choices[18]= new Array();
 choices[18][0] = "El nivel externo tambi&eacute;n recibe el nombre de nivel f&iacute;sico.";
 choices[18][1] = "El nivel interno tambi&eacute;n recibe el nombre de nivel l&oacute;gico.";
 choices[18][2] = "El nivel externo define los datos que se almacenan en la base de datos y las relaciones entre ellos.";
 choices[18][3] = "El nivel externo contiene las vistas externas de la base de datos y permite ver a cada tipo de usuario s&oacute;lo aquella parte del esquema que es de su inter&eacute;s.";
 answers[18] = choices[18][3];
 units[18] = "57";
 comments[18] = "Id Pregunta: 10830. Examen GSI 2014";


//  Id pregunta: 10838 AÃ±o de creación de pregunta: 2015-01-01
 questions[19]= "20)  Empleando el algoritmo m&aacute;s simple de la burbuja (Bubble Sort), en caso de querer ordenar un array de 10 elementos, &iquest;cu&aacute;ntas pasadas ser&iacute;a necesario realizar?";
 choices[19]= new Array();
 choices[19][0] = "10";
 choices[19][1] = "5";
 choices[19][2] = "11";
 choices[19][3] = "9";
 answers[19] = choices[19][3];
 units[19] = "0";
 comments[19] = "Id Pregunta: 10838. Examen GSI 2014";


//  Id pregunta: 10842 AÃ±o de creación de pregunta: 2015-01-01
 questions[20]= "21)  Se&ntilde;ale qu&eacute; software NO est&aacute; relacionado con las pruebas del software de aplicaciones web:";
 choices[20]= new Array();
 choices[20][0] = "Badboy.";
 choices[20][1] = "Selenium.";
 choices[20][2] = "Jmeter.";
 choices[20][3] = "Cherokee.";
 answers[20] = choices[20][3];
 units[20] = "0";
 comments[20] = "Id Pregunta: 10842. Examen GSI 2014";


//  Id pregunta: 10863 AÃ±o de creación de pregunta: 2015-01-01
 questions[21]= "22)  De acuerdo a las operaciones que se requieran desarrollar, los Data Marts pueden adoptar diversas arquitecturas, se&ntilde;ale la caracter&iacute;stica correspondiente a la arquitectura Top-Down:";
 choices[21]= new Array();
 choices[21][0] = "Se definen previamente los Data Marts (DM) y luego se integran en un Data Warehouse (DW) centralizado. Los DM se cargan a trav&eacute;s de procesos ETL.";
 choices[21][1] = "Se define previamente un DW y un DM principal que se cargan a trav&eacute;s de procesos ETL. El DW alimentar&aacute; a otros DW, y el DM principal alimentar&aacute; a otros DM.";
 choices[21][2] = "Se define una base de datos (BD) principal que se carga mediante procesos ETL desde todas las BD corporativas, esta BD alimenta en exclusiva a todos los DM y DW existentes.";
 choices[21][3] = "Primero se define el DW, el cual es cargado a trav&eacute;s de procesos ETL y luego este alimenta a los diferentes DM. Cada DM recibir&aacute; los datos que correspondan al tema/departamento que traten.";
 answers[21] = choices[21][3];
 units[21] = "68, 71";
 comments[21] = "Id Pregunta: 10863. Examen GSI 2014";


//  Id pregunta: 10865 AÃ±o de creación de pregunta: 2015-01-01
 questions[22]= "23)  De las estrategias de dise&ntilde;o propuestas por M&eacute;trica v3 para obtener el diagrama de estructura &iquest;en qu&eacute; se diferencian el an&aacute;lisis de transformaci&oacute;n y el an&aacute;lisis de transacci&oacute;n?";
 choices[22]= new Array();
 choices[22][0] = "No existe ninguna diferencia, ambas son estrategias de dise&ntilde;o que se aplican a los DFD.";
 choices[22][1] = "El an&aacute;lisis de transformaci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[22][2] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transformaci&oacute;n se aplica a los DFD cuando en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[22][3] = "El an&aacute;lisis de transacci&oacute;n se centra en los resultados del diagrama mientras que el an&aacute;lisis de transformaci&oacute;n se centra en c&oacute;mo se realizan dichos cambios.";
 answers[22] = choices[22][1];
 units[22] = "86, 81, 82";
 comments[22] = "Id Pregunta: 10865. Examen GSI 2014";


//  Id pregunta: 10876 AÃ±o de creación de pregunta: 2015-01-01
 questions[23]= "24)  Entre las configuraciones de almacenamiento en RAID, NO ofrece redundancia de datos:";
 choices[23]= new Array();
 choices[23][0] = "Todas las configuraciones RAID garantizan la redundancia de la informaci&oacute;n.";
 choices[23][1] = "RAID 0.";
 choices[23][2] = "RAID 1.";
 choices[23][3] = "RAID 5.";
 answers[23] = choices[23][1];
 units[23] = "48";
 comments[23] = "Id Pregunta: 10876. Examen GSI 2014";


//  Id pregunta: 10882 AÃ±o de creación de pregunta: 2015-01-01
 questions[24]= "25)  Tama&ntilde;o destinado en una trama b&aacute;sica Ethernet (IEEE 802.3-2012) para el payload:";
 choices[24]= new Array();
 choices[24][0] = "Tiene un m&iacute;nimo de 64 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[24][1] = "Tiene un m&iacute;nimo de 16 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 choices[24][2] = "Tiene un m&iacute;nimo de 46 Bytes hasta un m&aacute;ximo de 1500 Bytes.";
 choices[24][3] = "Tiene un m&iacute;nimo de 32 Bytes hasta un m&aacute;ximo de 1000 Bytes.";
 answers[24] = choices[24][2];
 units[24] = "100";
 comments[24] = "Id Pregunta: 10882. Examen GSI 2014";


//  Id pregunta: 10886 AÃ±o de creación de pregunta: 2015-01-01
 questions[25]= "26)  El puerto del protocolo FTP sobre TLS/SSL (FTPS) es:";
 choices[25]= new Array();
 choices[25][0] = "2121";
 choices[25][1] = "2020";
 choices[25][2] = "980";
 choices[25][3] = "990";
 answers[25] = choices[25][3];
 units[25] = "112";
 comments[25] = "Id Pregunta: 10886. Examen GSI 2014";


//  Id pregunta: 10893 AÃ±o de creación de pregunta: 2015-01-01
 questions[26]= "27)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta en relaci&oacute;n a la MTU (Maximum Transfer Unit) en redes IP, la MTU del camino es el valor de la:";
 choices[26]= new Array();
 choices[26][0] = "suma de todas las MTU entre el receptor y el emisor.";
 choices[26][1] = "media aritm&eacute;tica de todas las MTU entre el receptor y el emisor.";
 choices[26][2] = "MTU m&aacute;s baja de todos los enlaces a lo largo del camino entre nodos receptor y emisor.";
 choices[26][3] = "MTU m&aacute;s alta de todos los enlaces a lo largo del camino entre nodos receptor y emisor.";
 answers[26] = choices[26][2];
 units[26] = "100";
 comments[26] = "Id Pregunta: 10893. Examen GSI 2014";


//  Id pregunta: 10920 AÃ±o de creación de pregunta: 2015-01-01
 questions[27]= "28)  Apache Hadoop es un framework de software que implementa un sistema de ficheros basado en:";
 choices[27]= new Array();
 choices[27][0] = "HP Data File System.";
 choices[27][1] = "Google File System.";
 choices[27][2] = "Network File System.";
 choices[27][3] = "High Density File System.";
 answers[27] = choices[27][1];
 units[27] = "68";
 comments[27] = "Id Pregunta: 10920. TIC A1 AGE 2014";


//  Id pregunta: 10929 AÃ±o de creación de pregunta: 2015-01-01
 questions[28]= "29)  La Comisi&oacute;n Europea establece una serie de prioridades y acciones para promover una administraci&oacute;n p&uacute;blica inteligente, sostenible e innovadora, enmarcadas en el Plan de Acci&oacute;n Europeo sobre Administraci&oacute;n Electr&oacute;nica 2011-2015. Entre estas prioridades y acciones se incluyen:";
 choices[28]= new Array();
 choices[28][0] = "Mejora de la transparencia, participaci&oacute;n de los ciudadanos y las empresas en los procesos de elaboraci&oacute;n de pol&iacute;ticas y sanidad en l&iacute;nea.";
 choices[28][1] = "Asesorar a los &oacute;rganos competentes en materia de contrataci&oacute;n, en los criterios y directrices para la agregaci&oacute;n y planificaci&oacute;n de la demanda TIC que dichos &oacute;rganos elaboren.";
 choices[28][2] = "Realizar las actuaciones necesarias para una mayor eficiencia econ&oacute;mica, normalizando una red de clientes de cada Departamento Ministerial frente a proveedores externos.";
 choices[28][3] = "Realizar el informe t&eacute;cnico preceptivo de la memoria y los pliegos de prescripciones t&eacute;cnicas de los convenios de colaboraci&oacute;n y encomiendas de gesti&oacute;n que incluyan la prestaci&oacute;n de servicios en materia de TIC de la AGE.";
 answers[28] = choices[28][3];
 units[28] = "30";
 comments[28] = "Id Pregunta: 10929. TIC A1 AGE 2014";


//  Id pregunta: 10939 AÃ±o de creación de pregunta: 2015-01-01
 questions[29]= "30)  En el modelo EFQM, la &quot;Gesti&oacute;n y mejora de las relaciones con los clientes&quot; es un subcriterio correspondiente al criterio:";
 choices[29]= new Array();
 choices[29][0] = "Resultados en los clientes.";
 choices[29][1] = "Resultados clave.";
 choices[29][2] = "Alianzas y recursos.";
 choices[29][3] = "Procesos.";
 answers[29] = choices[29][3];
 units[29] = "92";
 comments[29] = "Id Pregunta: 10939. TIC A1 AGE 2014";


//  Id pregunta: 10943 AÃ±o de creación de pregunta: 2015-01-01
 questions[30]= "31)  La Estrategia de Ciberseguridad Nacional fue aprobada por el Consejo Nacional de Seguridad en:";
 choices[30]= new Array();
 choices[30][0] = "Septiembre de 2012.";
 choices[30][1] = "Diciembre de 2013.";
 choices[30][2] = "Enero de 2014.";
 choices[30][3] = "Enero de 2011.";
 answers[30] = choices[30][1];
 units[30] = "111";
 comments[30] = "Id Pregunta: 10943. TIC A1 AGE 2014";


//  Id pregunta: 10944 AÃ±o de creación de pregunta: 2015-01-01
 questions[31]= "32)  Respecto a los diagramas de flujos de datos, se&ntilde;ale la respuesta correcta:";
 choices[31]= new Array();
 choices[31][0] = "Proporcionan un mecanismo para el modelado funcional, no siendo necesario considerar el flujo de informaci&oacute;n.";
 choices[31][1] = "Por s&iacute; solos, son una herramienta suficiente para describir los requisitos del software.";
 choices[31][2] = "En los sucesivos niveles de detalle es necesario mantener la continuidad del flujo de informaci&oacute;n.";
 choices[31][3] = "No son una herramienta v&aacute;lida para sistemas de tiempo real.";
 answers[31] = choices[31][2];
 units[31] = "81";
 comments[31] = "Id Pregunta: 10944. TIC A1 AGE 2014";


//  Id pregunta: 10951 AÃ±o de creación de pregunta: 2015-01-01
 questions[32]= "33)  Respecto a los requisitos a cumplir en la digitalizaci&oacute;n de documentos establecidos por la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos es correcto que:";
 choices[32]= new Array();
 choices[32][0] = "El nivel de resoluci&oacute;n m&aacute;ximo para im&aacute;genes electr&oacute;nicas ser&aacute; de 200 p&iacute;xeles por pulgada, tanto para im&aacute;genes obtenidas en blanco y negro, color o escala de grises.";
 choices[32][1] = "La imagen electr&oacute;nica se podr&aacute; optimizar para garantizar su legibilidad, de modo que todo contenido del documento origen pueda apreciarse y sea v&aacute;lido para su gesti&oacute;n.";
 choices[32][2] = "La imagen electr&oacute;nica podr&aacute; contener caracteres o gr&aacute;ficos, siempre que sean incorporados por el funcionario responsable del expediente y adecuadamente identificados mediante sello oficial.";
 choices[32][3] = "La digitalizaci&oacute;n de un documento implicar&aacute;, en todos los casos, la asignaci&oacute;n de los metadatos m&iacute;nimos obligatorios definidos en la Norma T&eacute;cnica de Interoperabilidad de Documento Electr&oacute;nico y la firma de la imagen electr&oacute;nica.";
 answers[32] = choices[32][1];
 units[32] = "43";
 comments[32] = "Id Pregunta: 10951. TIC A1 AGE 2014";


//  Id pregunta: 10959 AÃ±o de creación de pregunta: 2015-01-01
 questions[33]= "34)  El Centro de Informaci&oacute;n y Red de Creaci&oacute;n de Empresas (CIRCE), gestionado por el Ministerio de Industria, Energ&iacute;a y Turismo:";
 choices[33]= new Array();
 choices[33][0] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de todas las empresas que vayan a ejercer su actividad en el territorio nacional.";
 choices[33][1] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de apoderamiento y gestiones notariales necesarias para la puesta en marcha de las empresas.";
 choices[33][2] = "Permite realizar de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de Sociedades Limitada Nueva Empresa (SLNE), Sociedades de Responsabilidad Limitada (SRL o SL), o Empresarios Individuales (Aut&oacute;nomos).";
 choices[33][3] = "Es una plataforma para la informaci&oacute;n del emprendedor que se utiliza en los Puntos de Atenci&oacute;n al Emprendedor (PAEs), no permitiendo la realizaci&oacute;n de tr&aacute;mites online.";
 answers[33] = choices[33][2];
 units[33] = "30";
 comments[33] = "Id Pregunta: 10959. TIC A1 AGE 2014";


//  Id pregunta: 10999 AÃ±o de creación de pregunta: 2015-01-01
 questions[34]= "35)  En relaci&oacute;n con jquery, se&ntilde;ale la respuesta correcta:";
 choices[34]= new Array();
 choices[34][0] = "Es una biblioteca disponible en Java 6 y 7 que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[34][1] = "Es una biblioteca de Javascript para simplificar la interacci&oacute;n con p&aacute;ginas web.";
 choices[34][2] = "Es un est&aacute;ndar abierto que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[34][3] = "Es una biblioteca para el acceso a almacenes de datos y big data, que permite la interacci&oacute;n del usuario final con los datos agregados y de detalle.";
 answers[34] = choices[34][1];
 units[34] = "114";
 comments[34] = "Id Pregunta: 10999. TIC A1 AGE 2014";


//  Id pregunta: 11015 AÃ±o de creación de pregunta: 2015-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes no est&aacute; incluido dentro de la primera Declaraci&oacute;n de Servicios Compartidos realizada por la Comisi&oacute;n de Estrategia TIC en Septiembre de 2015?";
 choices[35]= new Array();
 choices[35][0] = "Servicio unificado de radiocomunicaciones";
 choices[35][1] = "Servicio de alojamiento de infraestructuras TIC";
 choices[35][2] = "Servicio de gesti&oacute;n de notificaciones";
 choices[35][3] = "Servicio de gesti&oacute;n de n&oacute;mina";
 answers[35] = choices[35][0];
 units[35] = "30";
 comments[35] = "Id Pregunta: 11015. El servicio incluido es el unificado de telecomunicaciones";


//  Id pregunta: 11019 AÃ±o de creación de pregunta: 2015-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes no es un &oacute;rgano especializado en el control de la Administraci&oacute;n P&uacute;blica?";
 choices[36]= new Array();
 choices[36][0] = "Tribunal de Cuentas";
 choices[36][1] = "IGAE";
 choices[36][2] = "Agencia Estatal de Evaluaci&oacute;n de Pol&iacute;ticas P&uacute;blicas y de la Calidad de los Servicios";
 choices[36][3] = "Todos lo son";
 answers[36] = choices[36][3];
 units[36] = "31";
 comments[36] = "Id Pregunta: 11019. ";


//  Id pregunta: 11044 AÃ±o de creación de pregunta: 2015-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes NO es una soluci&oacute;n comercial de ERP?";
 choices[37]= new Array();
 choices[37][0] = "Microsoft Dynamics";
 choices[37][1] = "HP LoadRunner";
 choices[37][2] = "Oracle E-Business Suite";
 choices[37][3] = "SAP";
 answers[37] = choices[37][1];
 units[37] = "65";
 comments[37] = "Id Pregunta: 11044. ";


//  Id pregunta: 11045 AÃ±o de creación de pregunta: 2015-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la gesti&oacute;n de Sistemas de Informaci&oacute;n Geogr&aacute;fica?";
 choices[38]= new Array();
 choices[38][0] = "Es muy voluminosa";
 choices[38][1] = "Es borrosa";
 choices[38][2] = "Es din&aacute;mica";
 choices[38][3] = "Todas son caracter&iacute;sticas";
 answers[38] = choices[38][3];
 units[38] = "67";
 comments[38] = "Id Pregunta: 11045. ";


//  Id pregunta: 11049 AÃ±o de creación de pregunta: 2015-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l es una plataforma electr&oacute;nica de contrataci&oacute;n que permite la contrataci&oacute;n de todos los valores en circulaci&oacute;n del Tesoro P&uacute;blico?";
 choices[39]= new Array();
 choices[39][0] = "SEND";
 choices[39][1] = "FACTURAE";
 choices[39][2] = "COMPRAE";
 choices[39][3] = "TESORO-E";
 answers[39] = choices[39][0];
 units[39] = "70";
 comments[39] = "Id Pregunta: 11049. ";


//  Id pregunta: 11093 AÃ±o de creación de pregunta: 2015-01-01
 questions[40]= "41)  En una estructura de tres niveles de un CAU, seleccione la opci&oacute;n verdadera.";
 choices[40]= new Array();
 choices[40][0] = "El nivel 2 deber&aacute; tener acceso a la base de incidencias ya que la incidencia reportada puede haberse producido anteriormente.";
 choices[40][1] = "Todas las incidencias deben estar documentadas una vez resueltas.";
 choices[40][2] = "Todas las incidencias comienzan por una recepci&oacute;n y finalizan con un cierre.";
 choices[40][3] = "Todas las anteriores son verdaderas";
 answers[40] = choices[40][3];
 units[40] = "26";
 comments[40] = "Id Pregunta: 11093. ";


//  Id pregunta: 11130 AÃ±o de creación de pregunta: 2015-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes no es un servidor de correo electr&oacute;nico?";
 choices[41]= new Array();
 choices[41][0] = "Sendmail";
 choices[41][1] = "Microsoft Exchange";
 choices[41][2] = "IBM Lotus Domino";
 choices[41][3] = "SMTP Websphere";
 answers[41] = choices[41][3];
 units[41] = "49";
 comments[41] = "Id Pregunta: 11130. ";


//  Id pregunta: 11131 AÃ±o de creación de pregunta: 2015-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguiente no es un organismo de estandarizaci&oacute;n de arquitecturas SOA?";
 choices[42]= new Array();
 choices[42][0] = "Business Process Management Initiative (BPMI)";
 choices[42][1] = "Object Management Group (OMG)";
 choices[42][2] = "OASIS";
 choices[42][3] = "Microsoft-IBM Workflow Management Coallition";
 answers[42] = choices[42][3];
 units[42] = "51";
 comments[42] = "Id Pregunta: 11131. ";


//  Id pregunta: 11143 AÃ±o de creación de pregunta: 2015-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es una soluci&oacute;n CRM?";
 choices[43]= new Array();
 choices[43][0] = "Oracle Siebel CRM";
 choices[43][1] = "Microsoft Dynamics CRM";
 choices[43][2] = "Jive Software";
 choices[43][3] = "IBM RightNow Sugar CRM";
 answers[43] = choices[43][3];
 units[43] = "65";
 comments[43] = "Id Pregunta: 11143. ";


//  Id pregunta: 11167 AÃ±o de creación de pregunta: 2015-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes soportes de imagen realiza la transformada discreta del coseno (DCT) sobre bloques de 8x8 p&iacute;xeles?";
 choices[44]= new Array();
 choices[44][0] = "GIF";
 choices[44][1] = "TIFF";
 choices[44][2] = "BMP";
 choices[44][3] = "JPG";
 answers[44] = choices[44][3];
 units[44] = "93";
 comments[44] = "Id Pregunta: 11167. ";


//  Id pregunta: 11179 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento es de nivel interno?";
 choices[45]= new Array();
 choices[45][0] = "OSPF";
 choices[45][1] = "IS-IS";
 choices[45][2] = "RIP";
 choices[45][3] = "Todos los anteriores";
 answers[45] = choices[45][3];
 units[45] = "103";
 comments[45] = "Id Pregunta: 11179. ";


//  Id pregunta: 11193 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes no es una prioridad de la estrategia Europa 2020?";
 choices[46]= new Array();
 choices[46][0] = "Crecimiento inteligente";
 choices[46][1] = "Crecimiento sostenible";
 choices[46][2] = "Crecimiento integrador";
 choices[46][3] = "Todas las anteriores";
 answers[46] = choices[46][3];
 units[46] = "30";
 comments[46] = "Id Pregunta: 11193. ";


//  Id pregunta: 11194 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento sostenible?";
 choices[47]= new Array();
 choices[47][0] = "Juventud en movimiento";
 choices[47][1] = "Una Europa que utilice eficazmente los recursos";
 choices[47][2] = "Plataforma Europea contra la pobreza";
 choices[47][3] = "Agenda Clim&aacute;tica para Europa";
 answers[47] = choices[47][1];
 units[47] = "30";
 comments[47] = "Id Pregunta: 11194. ";


//  Id pregunta: 11198 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  &iquest;Qu&eacute; tasa de abandono escolar marca la Estrategia Europa 2020 para la Uni&oacute;n Europea?";
 choices[48]= new Array();
 choices[48][0] = "0.05";
 choices[48][1] = "0.01";
 choices[48][2] = "0.1";
 choices[48][3] = "0.2";
 answers[48] = choices[48][2];
 units[48] = "30";
 comments[48] = "Id Pregunta: 11198. ";


//  Id pregunta: 11200 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[49]= new Array();
 choices[49][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[49][1] = "Investigaci&oacute;n e innovaci&oacute;n";
 choices[49][2] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[49][3] = "Beneficios TIC para la Sociedad UE";
 answers[49] = choices[49][2];
 units[49] = "30";
 comments[49] = "Id Pregunta: 11200. ";


//  Id pregunta: 11202 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[50]= new Array();
 choices[50][0] = "Internacionalizaci&oacute;n de empresas tecnol&oacute;gicas";
 choices[50][1] = "Fomentar la alfabetizaci&oacute;n e inclusi&oacute;n digital";
 choices[50][2] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[50][3] = "Beneficios TIC para la Sociedad UE";
 answers[50] = choices[50][0];
 units[50] = "30";
 comments[50] = "Id Pregunta: 11202. ";


//  Id pregunta: 11218 AÃ±o de creación de pregunta: 2015-01-01
 questions[51]= "52)  Cu&aacute;l de las siguientes respuestas es falsa:";
 choices[51]= new Array();
 choices[51][0] = "Los compiladores nativos eliminan la independencia de la plataforma del c&oacute;digo compilado a cambio de proporcionar un mayor rendimiento.";
 choices[51][1] = "Los compiladores nativos AOT (Ahead-Of-time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n.";
 choices[51][2] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n.";
 choices[51][3] = "Todas son verdaderas.";
 answers[51] = choices[51][3];
 units[51] = "60";
 comments[51] = "Id Pregunta: 11218. ";


//  Id pregunta: 11227 AÃ±o de creación de pregunta: 2015-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de la clase HttpServlet?";
 choices[52]= new Array();
 choices[52][0] = "doGet(). Se ejecuta cuando se recibe una petici&oacute;n HTTP GET.";
 choices[52][1] = "doPush(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUSH.";
 choices[52][2] = "doPost(). Se ejecuta cuando se recibe una petici&oacute;n HTTP POST.";
 choices[52][3] = "doPut(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUT.";
 answers[52] = choices[52][1];
 units[52] = "116";
 comments[52] = "Id Pregunta: 11227. ";


//  Id pregunta: 11243 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  Un contrato de colaboraci&oacute;n p&uacute;blico-privada de 134.000 euros estar&aacute; sujeto a regulaci&oacute;n armonizada.";
 choices[53]= new Array();
 choices[53][0] = "En todo caso.";
 choices[53][1] = "Depender&aacute; del umbral establecido.";
 choices[53][2] = "S&oacute;lo si es del sector p&uacute;blico estatal.";
 choices[53][3] = "Depende de que los lotes no superen los 80.00 euros.";
 answers[53] = choices[53][0];
 units[53] = "41";
 comments[53] = "Id Pregunta: 11243. ";


//  Id pregunta: 11247 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  En lo Referente a la publicidad de los procedimientos de licitaci&oacute;n de &aacute;mbito estatal, es falso que:";
 choices[54]= new Array();
 choices[54][0] = "En el caso de los procedimientos negociados con publicidad, la publicaci&oacute;n en el perfil del contratante podr&aacute; sustituir a la del BOE.";
 choices[54][1] = "Los contratos no SARA se publican en el BOE y en el Perfil del Contratante.";
 choices[54][2] = "Los contratos SARA se publican en el DOUE, en lugar del BOE, y en el Perfil del Contratante.";
 choices[54][3] = "Ninguna es correcta.";
 answers[54] = choices[54][2];
 units[54] = "41";
 comments[54] = "Id Pregunta: 11247. ";


//  Id pregunta: 11256 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l es la equivalencia en criptograf&iacute;a asim&eacute;trica a una longitud de clave de 112 bits en criptograf&iacute;a sim&eacute;trica?";
 choices[55]= new Array();
 choices[55][0] = "1102 bits.";
 choices[55][1] = "1768 bits.";
 choices[55][2] = "2048 bits.";
 choices[55][3] = "3072 bits.";
 answers[55] = choices[55][2];
 units[55] = "72";
 comments[55] = "Id Pregunta: 11256. ";


//  Id pregunta: 11267 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  &iquest;Cu&aacute;les NO es uno de los cuatro conceptos (conocidos como las cuatro Ps de Mintzberg) en base  a los cuales debe estar definida la estrategia de una organizaci&oacute;n seg&uacute;n ITIL versi&oacute;n 3?";
 choices[56]= new Array();
 choices[56][0] = "Perspectiva: disponer de metas y valores bien definidos y asumibles.";
 choices[56][1] = "Partici&oacute;n: definir y dividir los servicios en procesos.";
 choices[56][2] = "Planificaci&oacute;n: establecer criterios claros de desarrollo futuro.";
 choices[56][3] = "Patr&oacute;n: mantener una coherencia en la toma de decisiones y acciones adoptadas.";
 answers[56] = choices[56][1];
 units[56] = "98";
 comments[56] = "Id Pregunta: 11267. ";


//  Id pregunta: 11270 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  En Cobitv5:";
 choices[57]= new Array();
 choices[57][0] = "La cascada de metas es el mecanismo para traducir las necesidades de las partes interesadas en metas corporativas, metas relacionadas con las TI y metas catalizadoras.";
 choices[57][1] = "Las metas corporativas han sido desarrolladas utilizando las dimensiones del cuadro de mando integral (CMI).";
 choices[57][2] = "Los tres objetivos principales de Gobierno a considerar son: realizaci&oacute;n de beneficios, optimizaci&oacute;n de riesgos y optimizaci&oacute;n de recursos.";
 choices[57][3] = "Todas son correctas.";
 answers[57] = choices[57][3];
 units[57] = "98";
 comments[57] = "Id Pregunta: 11270. ";


//  Id pregunta: 11306 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  En cuanto a la utilizaci&oacute;n de web services, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[58]= new Array();
 choices[58][0] = "Los web services en .NET tienen la extensi&oacute;n WSDL";
 choices[58][1] = "El servicio web es descrito mediante un archivo IDL";
 choices[58][2] = "WSDL define el servicio web utilizando IDL";
 choices[58][3] = "XLAN fue definido en los primeros tiempos de desarrollo de web services como est&aacute;ndar abierto de comunicaci&oacute;n entre componentes";
 answers[58] = choices[58][2];
 units[58] = "115116";
 comments[58] = "Id Pregunta: 11306. Los web services en .NET tienen la extensi&oacute;n .asmx";


//  Id pregunta: 11310 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  En la NTI de firma electr&oacute;nica, se establecen los valores que puede almacenar el metadato &quot;tipo de firma&quot;. Seleccione la serie correcta de valores";
 choices[59]= new Array();
 choices[59][0] = "Xades Detached, Xades Enveloped, Cades Detached, Cades Enveloped, Pades Enveloped, Pades Detached";
 choices[59][1] = "CSV, Xades Detached, Xades Enveloped, Cades Detached; Cades Enveloped; Pades";
 choices[59][2] = "CSV, Xades Detached, Xades Enveloping, Cades Detached; Cades Enveloping";
 choices[59][3] = "Xades Detached, Xades Enveloping, Cades Detached; Cades Enveloping";
 answers[59] = choices[59][1];
 units[59] = "43";
 comments[59] = "Id Pregunta: 11310. ";


//  Id pregunta: 11324 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  De las siguientes definiciones, seleccione la correcta para la definici&oacute;n de ARP";
 choices[60]= new Array();
 choices[60][0] = "Es un protocolo de nivel de enlace responsable de encontrar la direcci&oacute;n hardware (MAC)";
 choices[60][1] = "Es un protocolo de nivel de RED responsable de encontrar la direcci&oacute;n hardware (MAC)";
 choices[60][2] = "Es un protocolo de nivel de enlace responsable de encontrar la direcci&oacute;n de red (IP)";
 choices[60][3] = "Es un protocolo de nivel de red responsable de encontrar la direcci&oacute;n de red (IP)";
 answers[60] = choices[60][0];
 units[60] = "113";
 comments[60] = "Id Pregunta: 11324. ";


//  Id pregunta: 11342 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  De las siguientes opciones, se&ntilde;ale cu&aacute;l es la correcta para la transformaci&oacute;n de una relaci&oacute;n 1:1";
 choices[61]= new Array();
 choices[61][0] = "Se crea una clave for&aacute;nea en una de ellas que referencia a la clave de la otra";
 choices[61][1] = "La relaci&oacute;n se convierte en tabla con cada una de las claves m&aacute;s las propiedades de la relaci&oacute;n";
 choices[61][2] = "Podr&iacute;a elegirse entre las opciones anteriores";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = choices[61][0];
 units[61] = "57";
 comments[61] = "Id Pregunta: 11342. ";


//  Id pregunta: 11350 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  Qu&eacute; roles est&aacute;n sujetos al r&eacute;gimen sancionador de la Ley Org&aacute;nica de Protecci&oacute;n de DAtos";
 choices[62]= new Array();
 choices[62][0] = "Responsable del tratamiento";
 choices[62][1] = "Responsable del fichero";
 choices[62][2] = "Ambos ";
 choices[62][3] = "Ninguno";
 answers[62] = choices[62][2];
 units[62] = "29";
 comments[62] = "Id Pregunta: 11350. ";


//  Id pregunta: 11370 AÃ±o de creación de pregunta: 2015-01-01
 questions[63]= "64)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes conceptos NO es una etapa del ciclo de vida del servicio?";
 choices[63]= new Array();
 choices[63][0] = "Optimizaci&oacute;n del servicio";
 choices[63][1] = "Transici&oacute;n del servicio";
 choices[63][2] = "Dise&ntilde;o del servicio";
 choices[63][3] = "Estrategia del servicio";
 answers[63] = choices[63][0];
 units[63] = "98";
 comments[63] = "Id Pregunta: 11370. ";


//  Id pregunta: 11371 AÃ±o de creación de pregunta: 2015-01-01
 questions[64]= "65)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre un sistema de gesti&oacute;n de configuraci&oacute;n (CMS) es la correcta?";
 choices[64]= new Array();
 choices[64][0] = "El CMS no debe contener datos corporativos acerca de los clientes y usuarios";
 choices[64][1] = "Puede haber m&aacute;s de un CMS";
 choices[64][2] = "No debe haber m&aacute;s de una base de datos de gesti&oacute;n de la configuraci&oacute;n (CMDB)";
 choices[64][3] = "Aunque una organizaci&oacute;n externalice sus servicios de TI tiene la necesidad de un CMS";
 answers[64] = choices[64][3];
 units[64] = "98";
 comments[64] = "Id Pregunta: 11371. ";


//  Id pregunta: 11374 AÃ±o de creación de pregunta: 2015-01-01
 questions[65]= "66)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de los siguientes conceptos son caracter&iacute;sticas de todo proceso?: 1. Es medible; 2. Entrega un resultado especifico; 3. Entrega sus resultados principales a un cliente o a otros interesados";
 choices[65]= new Array();
 choices[65][0] = "Solo 1 y 3";
 choices[65][1] = "Solo 1 y 2";
 choices[65][2] = "Solo 2 y 3";
 choices[65][3] = "Todos los anteriores";
 answers[65] = choices[65][3];
 units[65] = "98";
 comments[65] = "Id Pregunta: 11374. ";


//  Id pregunta: 11381 AÃ±o de creación de pregunta: 2015-01-01
 questions[66]= "67)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas NO es un tipo de m&eacute;trica que se describe en la Mejora Continua del Servicio (CSI)?";
 choices[66]= new Array();
 choices[66][0] = "M&eacute;tricas del proceso";
 choices[66][1] = "M&eacute;tricas del servicio";
 choices[66][2] = "M&eacute;tricas de personal";
 choices[66][3] = "M&eacute;tricas tecnol&oacute;gicas";
 answers[66] = choices[66][2];
 units[66] = "98";
 comments[66] = "Id Pregunta: 11381. ";


//  Id pregunta: 11401 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes no es un prop&oacute;sito u objetivo de la Gesti&oacute;n de la Disponibilidad?";
 choices[67]= new Array();
 choices[67][0] = "Monitorizar e informar sobre la disponibilidad de componentes";
 choices[67][1] = "Asegurar que la disponibilidad de los servicios se ajusta a las necesidades acordadas del negocio";
 choices[67][2] = "Evaluar el impacto de los cambios sobre el Plan de Disponibilidad";
 choices[67][3] = "Asegurar que los planes de continuidad del negocio est&aacute;n alineados con objetivos del negocio";
 answers[67] = choices[67][3];
 units[67] = "98";
 comments[67] = "Id Pregunta: 11401. ";


//  Id pregunta: 11426 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Los abonados podr&aacute;n conservar sus n&uacute;meros de tel&eacute;fono seg&uacute;n la Ley 9/2014:";
 choices[68]= new Array();
 choices[68][0] = "Siempre.";
 choices[68][1] = "S&oacute;lo si lo solicitan previamente al operador al que quieren cambiar.";
 choices[68][2] = "S&oacute;lo si se lo comunican a la CNMC.";
 choices[68][3] = "No est&aacute; regulado en la Ley.";
 answers[68] = choices[68][1];
 units[68] = "110";
 comments[68] = "Id Pregunta: 11426. ";


//  Id pregunta: 11429 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Corresponde al Gobierno, mediante Real Decreto.";
 choices[69][1] = "Corresponde a la CNMC, mediante Resoluci&oacute;n.";
 choices[69][2] = "Corresponde al MINETUR, mediante Real Decreto.";
 choices[69][3] = "Corresponde al Gobierno, mediante Resoluci&oacute;n.";
 answers[69] = choices[69][0];
 units[69] = "110";
 comments[69] = "Id Pregunta: 11429. ";


//  Id pregunta: 11434 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Seg&uacute;n el art&iacute;culo 47 de la ley 9/2014, se regular&aacute; mediante Real Decreto (seleccione la INCORRECTA):";
 choices[70]= new Array();
 choices[70][0] = "Derecho a resolver el contrato en cualquier momento.";
 choices[70][1] = "Derecho a figurar en las gu&iacute;as de abonado.";
 choices[70][2] = "Derecho al cambio de operador.";
 choices[70][3] = "Derecho a acceder a los servicios de emergencia de forma gratuita.";
 answers[70] = choices[70][1];
 units[70] = "110";
 comments[70] = "Id Pregunta: 11434. ";


//  Id pregunta: 11442 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Seg&uacute;n la Ley 9/2014, &iquest;qui&eacute;n establece los procedimientos para la habilitaci&oacute;n del ejercicio de los derechos del uso del dominio p&uacute;blico radioel&eacute;ctrico?:";
 choices[71]= new Array();
 choices[71][0] = "La CNMC.";
 choices[71][1] = "El gobierno.";
 choices[71][2] = "El Estado.";
 choices[71][3] = "El MINETUR.";
 answers[71] = choices[71][1];
 units[71] = "110";
 comments[71] = "Id Pregunta: 11442. ";


//  Id pregunta: 11452 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la correcta:";
 choices[72]= new Array();
 choices[72][0] = "El Gobierno aprueba por ley los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n (PNDD).";
 choices[72][1] = "El MINETUR debe regular el uso de los recursos p&uacute;blicos asociados a los PNDD.";
 choices[72][2] = "Los costes derivados de la actualizaci&oacute;n de los elementos de la red corren a cuenta del operador.";
 choices[72][3] = "El MINETUR requiere informe de la SETSI para modificar los planes nacionales.";
 answers[72] = choices[72][1];
 units[72] = "110";
 comments[72] = "Id Pregunta: 11452. ";


//  Id pregunta: 11453 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n la Ley 9/2014, la determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable corresponde a:";
 choices[73]= new Array();
 choices[73][0] = "CNMC.";
 choices[73][1] = "MINETUR.";
 choices[73][2] = "SETSI.";
 choices[73][3] = "Gobierno.";
 answers[73] = choices[73][3];
 units[73] = "110";
 comments[73] = "Id Pregunta: 11453. ";


//  Id pregunta: 11465 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  Seg&uacute;n la Ley 9/2014, el usuario tiene derecho:";
 choices[74]= new Array();
 choices[74][0] = "A figurar en las gu&iacute;as de abonados.";
 choices[74][1] = "A no figurar en las gu&iacute;as de abonados.";
 choices[74][2] = "A ambas.";
 choices[74][3] = "A ninguna.";
 answers[74] = choices[74][2];
 units[74] = "110";
 comments[74] = "Id Pregunta: 11465. ";


//  Id pregunta: 11475 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Seg&uacute;n la Ley 9/2014, indique la respuesta CORRECTA:";
 choices[75]= new Array();
 choices[75][0] = "El MINETUR aprobar&aacute; por Real Decreto los planes nacionales de numeraci&oacute;n.";
 choices[75][1] = "El otorgamiento de derechos se har&aacute; en 3 semanas m&aacute;ximo en cualquier caso.";
 choices[75][2] = "El MINETUR podr&aacute; modificar mediante Real Decreto los planes nacionales de numeraci&oacute;n.";
 choices[75][3] = "La CNMC podr&aacute; fijar mediante circular las caracter&iacute;sticas de conservaci&oacute;n de numeraci&oacute;n.";
 answers[75] = choices[75][3];
 units[75] = "110";
 comments[75] = "Id Pregunta: 11475. ";


//  Id pregunta: 11522 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes corresponde al Framework multimedia de KDE?";
 choices[76]= new Array();
 choices[76][0] = "Phonon";
 choices[76][1] = "Decibel";
 choices[76][2] = "Plasma";
 choices[76][3] = "Ninguna de las afirmaciones restantes.";
 answers[76] = choices[76][0];
 units[76] = "54";
 comments[76] = "Id Pregunta: 11522. NULL";


//  Id pregunta: 11541 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  En relaci&oacute;n con las t&eacute;cnicas de planificaci&oacute;n de proyectos se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[77]= new Array();
 choices[77][0] = "Una diferencia entre PERT y CPM es que este &uacute;ltimo considera que los tiempos de las actividades se conocen en forma determin&iacute;stica y se pueden variar cambiando el nivel de recursos utilizados.";
 choices[77][1] = "PERT considera que cuando el n&uacute;mero de actividades de un proyecto es lo suficientemente elevado, la duraci&oacute;n del proyecto es una variable aleatoria que converge en una distribuci&oacute;n Normal.";
 choices[77][2] = "El diagrama de GANTT realiza la planificaci&oacute;n y la programaci&oacute;n al mismo tiempo.";
 choices[77][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[77] = choices[77][3];
 units[77] = "89";
 comments[77] = "Id Pregunta: 11541. NULL";


//  Id pregunta: 11544 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Seg&uacute;n el modelo de McCall de calidad, &iquest;Cu&aacute;l de los siguientes factores NO hace referencia a la facilidad de conversi&oacute;n del software?";
 choices[78]= new Array();
 choices[78][0] = "Interoperabilidad";
 choices[78][1] = "Reusabilidad";
 choices[78][2] = "Flexibilidad";
 choices[78][3] = "Portabilidad";
 answers[78] = choices[78][2];
 units[78] = "88";
 comments[78] = "Id Pregunta: 11544. NULL";


//  Id pregunta: 11547 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes acciones NO es necesaria para implantar en una organizaci&oacute;n la Calidad Total?";
 choices[79]= new Array();
 choices[79][0] = "Lograr el compromiso de todos los niveles de direcci&oacute;n.";
 choices[79][1] = "Adoptar el Modelo CMMI.";
 choices[79][2] = "Formar en las t&eacute;cnicas y herramientas de la Calidad";
 choices[79][3] = "Son necesarias todas las acciones anteriores.";
 answers[79] = choices[79][1];
 units[79] = "87";
 comments[79] = "Id Pregunta: 11547. NULL";


//  Id pregunta: 11552 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Se&ntilde;ale cu&aacute;l de las siguientes tareas se realiza en la fase de an&aacute;lisis:";
 choices[80]= new Array();
 choices[80][0] = "Elaboraci&oacute;n del modelo f&iacute;sico de procesos.";
 choices[80][1] = "Identificaci&oacute;n de requisitos funcionales del sistema.";
 choices[80][2] = "Definici&oacute;n de la arquitectura t&eacute;cnica del sistema.";
 choices[80][3] = "Elaboraci&oacute;n del modelo f&iacute;sico de datos.";
 answers[80] = choices[80][1];
 units[80] = "78";
 comments[80] = "Id Pregunta: 11552. NULL";


//  Id pregunta: 11554 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  El n&uacute;mero de l&iacute;neas de c&oacute;digo fuente de una aplicaci&oacute;n es una m&eacute;trica de estimaci&oacute;n del software de:";
 choices[81]= new Array();
 choices[81][0] = "Tama&ntilde;o, directa y objetiva.";
 choices[81][1] = "Producitividad, complejidad y objetiva.";
 choices[81][2] = "Complejidad y tama&ntilde;o.";
 choices[81][3] = "Tama&ntilde;o, directa y subjetiva.";
 answers[81] = choices[81][0];
 units[81] = "89";
 comments[81] = "Id Pregunta: 11554. NULL";


//  Id pregunta: 11561 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  De los siguientes tipos de middlewares, &iquest;Cu&aacute;l de ellos permite de manera m&aacute;s sencilla la transformaci&oacute;n de mensajes, conversi&oacute;n de protocolos y enrutamiento de servicios, desde una perspectiva de red WAN?";
 choices[82]= new Array();
 choices[82][0] = "Estaci&oacute;n de Mensajer&iacute;a";
 choices[82][1] = "Motor de Integraci&oacute;n";
 choices[82][2] = "Cliente-Servidor";
 choices[82][3] = "ESB";
 answers[82] = choices[82][3];
 units[82] = "114";
 comments[82] = "Id Pregunta: 11561. NULL";


//  Id pregunta: 11567 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Las cabeceras de MPLS";
 choices[83]= new Array();
 choices[83][0] = "Pueden reutilizar campos de cabeceras de otros protocolos.";
 choices[83][1] = "Emplean enrutamiento desde origen por conmutaci&oacute;n de paquetes.";
 choices[83][2] = "Los routers son los mismos que se emplean en cualquier red IP";
 choices[83][3] = "La b y c son correctas.";
 answers[83] = choices[83][0];
 units[83] = "100";
 comments[83] = "Id Pregunta: 11567. NULL";


//  Id pregunta: 11571 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es un protocolo estandar para la gesti&oacute;n de VLANs?";
 choices[84]= new Array();
 choices[84][0] = "VTP";
 choices[84][1] = "GVRP";
 choices[84][2] = "HSRP";
 choices[84][3] = "VRRP";
 answers[84] = choices[84][1];
 units[84] = "109";
 comments[84] = "Id Pregunta: 11571. a) protocolo de CISCO. c) y d) protocolos de redundancia. ";


//  Id pregunta: 11575 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  En el protocolo IPv6:";
 choices[85]= new Array();
 choices[85][0] = "No se pueden fragmentar paquetes.";
 choices[85][1] = "Las cabeceras AH y ESP se procesan en cada router.";
 choices[85][2] = "Incorpora mecanismos para crear circuitos virtuales.";
 choices[85][3] = "Se ofrecen servicios espec&iacute;ficos para TCPv6";
 answers[85] = choices[85][2];
 units[85] = "100";
 comments[85] = "Id Pregunta: 11575. NULL";


//  Id pregunta: 11585 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  El m&eacute;todo de normalizaci&oacute;n de puntuaciones que asigna 1 a la puntuaci&oacute;n m&aacute;s alta y que no mantiene la proporcionalidad es:";
 choices[86]= new Array();
 choices[86][0] = "Fracci&oacute;n de la suma";
 choices[86][1] = "Fracci&oacute;n del m&aacute;ximo";
 choices[86][2] = "Fracci&oacute;n del ideal";
 choices[86][3] = "Todas las anteriores son falsas";
 answers[86] = choices[86][2];
 units[86] = "34";
 comments[86] = "Id Pregunta: 11585. ";


//  Id pregunta: 11598 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  El derecho y obligaci&oacute;n de relacionarse electr&oacute;nicamente con las Administraciones P&uacute;blicas se recoge en la Ley 39/2015 en el: ";
 choices[87]= new Array();
 choices[87][0] = "Art&iacute;culo 4";
 choices[87][1] = "Art&iacute;culo 6";
 choices[87][2] = "Art&iacute;culo 10";
 choices[87][3] = "Art&iacute;culo 14";
 answers[87] = choices[87][3];
 units[87] = "43";
 comments[87] = "Id Pregunta: 11598. ";


//  Id pregunta: 11611 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Una condici&oacute;n del bloqueo mutuo es:";
 choices[88]= new Array();
 choices[88][0] = "Condici&oacute;n de exclusi&oacute;n mutua";
 choices[88][1] = "Condici&oacute;n de ocupar y esperar un recurso";
 choices[88][2] = "Condici&oacute;n de espera circular";
 choices[88][3] = "Las 3 son condiciones necesarias del bloqueo mutuo.";
 answers[88] = choices[88][3];
 units[88] = "52";
 comments[88] = "Id Pregunta: 11611. ";


//  Id pregunta: 11613 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En SQL, para borrar los datos de una tabla pero seguir conserv&aacute;ndola se emplea:";
 choices[89]= new Array();
 choices[89][0] = "DROP TABLE";
 choices[89][1] = "TRUNCATE TABLE";
 choices[89][2] = "DELETE TABLE";
 choices[89][3] = "MODIFY TABLE";
 answers[89] = choices[89][1];
 units[89] = "58";
 comments[89] = "Id Pregunta: 11613. ";


//  Id pregunta: 11630 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Entre las caracter&iacute;sticas que debe tener un requisito no se encuentra:";
 choices[90]= new Array();
 choices[90][0] = "Ambig&uuml;edad";
 choices[90][1] = "Consistencia";
 choices[90][2] = "Verificabilidad";
 choices[90][3] = "Completitud";
 answers[90] = choices[90][0];
 units[90] = "78";
 comments[90] = "Id Pregunta: 11630. ";


//  Id pregunta: 11651 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En IPv6, la etiqueta de flujo tiene una longitud de:";
 choices[91]= new Array();
 choices[91][0] = "8 bits";
 choices[91][1] = "16 bits";
 choices[91][2] = "20 bits";
 choices[91][3] = "No existe dicha etiqueta";
 answers[91] = choices[91][2];
 units[91] = "100";
 comments[91] = "Id Pregunta: 11651. ";


//  Id pregunta: 11666 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  El perfil de XAdES en el que se a&ntilde;aden los certificados a los documentos firmados es:";
 choices[92]= new Array();
 choices[92][0] = "XAdES-A";
 choices[92][1] = "XAdES-C";
 choices[92][2] = "XAdES-X-L";
 choices[92][3] = "XAdES-X";
 answers[92] = choices[92][2];
 units[92] = "111";
 comments[92] = "Id Pregunta: 11666. ";


//  Id pregunta: 11693 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qu&eacute; es PAT?";
 choices[93]= new Array();
 choices[93][0] = "Port Address Translation";
 choices[93][1] = "Protocol Access Translation";
 choices[93][2] = "Port Acknowledge Timeout";
 choices[93][3] = "PDU access token";
 answers[93] = choices[93][0];
 units[93] = "111";
 comments[93] = "Id Pregunta: 11693. NULL";


//  Id pregunta: 11696 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Un ABR (Router frontera de &aacute;rea) de OSPF:";
 choices[94]= new Array();
 choices[94][0] = "Debe disponer de varias interfaces conectadas al area Backbone";
 choices[94][1] = "Es un enrutador con dos interfaces, cada una de ellas conectada a un area OSPF diferente";
 choices[94][2] = "Un ABR debe disponer de una interfaz conectada al &aacute;rea backbone, y otra conectada a otra &aacute;rea OSPF";
 choices[94][3] = "Basta con que disponga de una interfaz conectada al &aacute;rea Backbone de OSPF";
 answers[94] = choices[94][2];
 units[94] = "102";
 comments[94] = "Id Pregunta: 11696. NULL";


//  Id pregunta: 11698 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Una WAN Frame-Relay est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[95]= new Array();
 choices[95][0] = "Punto a punto";
 choices[95][1] = "Broadcast multi-acceso";
 choices[95][2] = "No broadcast multi-acceso";
 choices[95][3] = "Broadcast punto a multipunto";
 answers[95] = choices[95][2];
 units[95] = "102";
 comments[95] = "Id Pregunta: 11698. NULL";


//  Id pregunta: 11723 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; mensaje DHCP se utiliza para localizar cualquier servidor DHCP disponible en la red?";
 choices[96]= new Array();
 choices[96][0] = "DHCPREQUEST";
 choices[96][1] = "DHCPACK";
 choices[96][2] = "DHCPDISCOVER";
 choices[96][3] = "DHCPOFFER";
 answers[96] = choices[96][2];
 units[96] = "102";
 comments[96] = "Id Pregunta: 11723. NULL";


//  Id pregunta: 11735 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Diferencia entre un virus y un &ldquo;Caballo de Troya&rdquo;:";
 choices[97]= new Array();
 choices[97][0] = "El virus suele utilizar canales encubiertos.";
 choices[97][1] = "El virus presenta un mecaniso de replicaci&oacute;n.";
 choices[97][2] = "El &ldquo;Caballo de Troya&rdquo; advierte de su presencia.";
 choices[97][3] = "El &ldquo;Caballo de Troya&rdquo; no esconde funciones potencialmente maliciosas.";
 answers[97] = choices[97][1];
 units[97] = "111";
 comments[97] = "Id Pregunta: 11735. ";


//  Id pregunta: 11756 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Para que se utiliza el sistema de multiplexaci&oacute;n CWDM?";
 choices[98]= new Array();
 choices[98][0] = "dar soporte a aplicaciones de redes de &aacute;rea metropolitana, donde se busca no tanto alcanzar largas distancias sino reducci&oacute;n de costes";
 choices[98][1] = "se utiliza para el transporte de grandes cantidades de informaci&oacute;n a larga distancia";
 choices[98][2] = "Actualmente no se utiliza";
 choices[98][3] = "El sistema CWDM es interoperable con DWDM.";
 answers[98] = choices[98][0];
 units[98] = "99";
 comments[98] = "Id Pregunta: 11756. ";


//  Id pregunta: 11773 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En el expediente de contrataci&oacute;n";
 choices[99]= new Array();
 choices[99][0] = "la memoria debe referirse a la necesidad e idoneidad del contrato";
 choices[99][1] = "la memoria debe referirse a los requisitos que deben contener los pliegos de cl&aacute;usulas administrativas y t&eacute;cnicas generales";
 choices[99][2] = "la memoria debe referirse solo a la necesidad del contrato";
 choices[99][3] = "Todas son correctas&nbsp;";
 answers[99] = choices[99][0];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11773. ";


